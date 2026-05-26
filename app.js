import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import gsap from 'gsap';

// --- State Variables ---
let scene, camera, renderer, composer, bloomPass, controls, sliders = [];
let particleSystem = null;
let lineSystem = null; // System for interconnection links
let rawPixelData = null; // Will store CPU side pixel data for exports
let currentImage = {
  width: 0,
  height: 0,
  aspectRatio: 1,
  name: 'default_image.jpg'
};

// Cached particle structure for lines generation
let particleData = {
  positions: [],
  colors: [],
  pixelVals: [],
  depthGradients: [],
  grid: [] // 2D grid mapping: [gridY][gridX] -> particleIndex in buffers
};
let activeLinksList = []; // Stores pairs of { indexA, indexB } for exports

// Camera Animation State
let targetCamPos = new THREE.Vector3();
let targetCamLook = new THREE.Vector3();
let isAnimatingCam = false;

// Camera Kinetics State
let enableAutoOrbit = false;
let driftAmp = 0;
let driftSpeed = 0.5;

// Video Recording State
let mediaRecorder = null;
let recordedChunks = [];
let isRecording = false;

// Custom Keyframe Timeline State
let customKeyframes = [];
window.customTimelinePlaying = false;
window.customTimelineTl = null;

// Procedural pattern generator as fallback if CORS errors occur
const USE_PROCEDURAL_FALLBACK_ON_CORS = true;

// UI State
let uiCollapsed = false;

// Default shader parameters (will be overridden by DOM on initialization)
const shaderUniforms = {
  uPointSize: { value: 1.5 },
  uDepthScale: { value: 80.0 },
  uScatterAmp: { value: 0.0 },
  uScatterFreq: { value: 0.05 },
  uScatterSpeed: { value: 0.0 },
  uEnableFloating: { value: true },
  uOrganicFieldStrength: { value: 0.0 },
  uOrganicFieldSpeed: { value: 1.0 },
  uTime: { value: 0.0 },
  uColorMode: { value: 0 }, // 0: original, 1: greyscale, 2: depth, 3: tint
  uTintColor: { value: new THREE.Color('#00ffcc') },
  uSizeAttenuation: { value: true },
  uAlphaThreshold: { value: 0.0 },
  uModelScale: { value: 300.0 },
  uPointShape: { value: 0 }, // 0: Soft Splat, 1: Circle, 2: Square
  uPointOpacity: { value: 0.60 },

  // Luma-style lighting and color grading parameters
  uEnableShading: { value: true },
  uLightDir: { value: new THREE.Vector3(0.5, 0.5, 0.7).normalize() },
  uExposure: { value: 1.0 },
  uContrast: { value: 1.1 },
  uSaturation: { value: 1.0 },
  uEnableSplitToning: { value: true },
  uShadowTint: { value: new THREE.Color('#094074') },
  uHighlightTint: { value: new THREE.Color('#fffaec') },
  uTintMix: { value: 0.60 },

  // Link specific uniforms
  uLinkOpacity: { value: 0.30 },
  uLinkColorMode: { value: 0 }, // 0: match-particles, 1: tint, 2: depth-gradient
  uLinkTintColor: { value: new THREE.Color('#ffffff') },
  linewidth: { value: 2.0 },
  resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uLinkGlow: { value: 1.5 }
};

// --- Custom Shaders for Real-Time Performance ---
const vertexShader = `
  uniform float uPointSize;
  uniform float uDepthScale;
  uniform float uScatterAmp;
  uniform float uScatterFreq;
  uniform float uScatterSpeed;
  uniform float uTime;
  uniform bool uSizeAttenuation;
  uniform float uModelScale;
  uniform float uOrganicFieldStrength;
  uniform float uOrganicFieldSpeed;
  uniform bool uEnableFloating;

  attribute float pixelVal;
  attribute vec3 originalColor;
  attribute vec2 depthGradient;

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;
  varying float vRand;

  // GPU Noise Utilities
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.1, 0.1));
    p += dot(p, p.yzx + 33.33);
    return fract(p.x * p.y * p.z);
  }

  void main() {
    vColor = originalColor;

    // Seed procedural random hash based on position
    vRand = hash(position + vec3(17.3, 31.4, 9.7));

    // Apply scale to X and Y coordinates and displace Z along depth modulator
    vec3 displaced = vec3(position.x * uModelScale, position.y * uModelScale, position.z);
    displaced.z += pixelVal * uDepthScale;

    // Per-Particle Organic Floating
    if (uEnableFloating && uScatterAmp > 0.0) {
      // Create a unique pseudo-random phase for each particle based on its position
      float phase = hash(position * 123.456) * 100.0;
      float t = uTime * uScatterSpeed;
      float f = uScatterFreq * 10.0; 
      
      vec3 floatOffset = vec3(
        sin(t + phase) * cos(t * 0.8 * f + phase * 1.2),
        sin(t * 1.1 * f + phase * 2.0) * cos(t * 0.9 + phase * 0.8),
        sin(t * 0.9 + phase * 1.5) * cos(t * 1.2 * f + phase)
      ) * uScatterAmp;
      
      displaced += floatOffset;
    }

    // Organic Field Displacement (Mathematical Attractor)
    if (uOrganicFieldStrength > 0.0) {
      vec3 p = position * 0.01 + vec3(uTime * uOrganicFieldSpeed * 0.5);
      vec3 field = vec3(
        sin(p.y * 2.1) * cos(p.z * 1.7),
        sin(p.z * 2.1) * cos(p.x * 1.7),
        sin(p.x * 2.1) * cos(p.y * 1.7)
      );
      displaced += field * uOrganicFieldStrength * 100.0;
    }

    vZPosition = displaced.z;

    // Compute local normal from analytical depth gradients
    float S = 0.0;
    if (abs(uModelScale) > 0.001) {
      S = uDepthScale / uModelScale;
    }
    vec3 localNormal = vec3(-S * depthGradient.x, -S * depthGradient.y, 1.0);
    localNormal = normalize(localNormal);

    // Transform normal to world coordinates for shading
    vNormal = normalize((modelMatrix * vec4(localNormal, 0.0)).xyz);

    vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    if (uSizeAttenuation) {
      gl_PointSize = uPointSize * (300.0 / -mvPosition.z);
    } else {
      gl_PointSize = uPointSize;
    }
  }
`;

const fragmentShader = `
  uniform int uColorMode;
  uniform vec3 uTintColor;
  uniform float uAlphaThreshold;
  uniform float uDepthScale;
  uniform int uPointShape;
  uniform float uPointOpacity;

  // Luma-style lighting and color grading uniforms
  uniform bool uEnableShading;
  uniform vec3 uLightDir;
  uniform float uExposure;
  uniform float uContrast;
  uniform float uSaturation;
  uniform bool uEnableSplitToning;
  uniform vec3 uShadowTint;
  uniform vec3 uHighlightTint;
  uniform float uTintMix;

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;
  varying float vRand;

  void main() {
    // Drop pixels below the brightness threshold
    float luminance = dot(vColor, vec3(0.299, 0.587, 0.114));
    if (luminance < uAlphaThreshold) {
      discard;
    }

    // Centered coordinates (-0.5 to 0.5)
    vec2 p = gl_PointCoord - vec2(0.5);
    float distSq = dot(p, p);
    
    float alpha = uPointOpacity;

    if (uPointShape == 0) { // Soft Splat (Projected Luma Oriented Splat)
      if (distSq > 0.25) {
        discard;
      }
      
      vec3 N = normalize(vNormal);
      
      // Project normal on screen-space (XY)
      vec2 tiltDir = normalize(N.xy + vec2(0.0001)); 
      float cosTheta = abs(N.z); 
      float squash = clamp(cosTheta, 0.25, 1.0);
      
      // Rotate coordinate system to align with surface tilt
      vec2 perpDir = vec2(-tiltDir.y, tiltDir.x);
      
      float xAligned = dot(p, tiltDir) / squash;
      float yAligned = dot(p, perpDir);
      vec2 rotatedP = vec2(xAligned, yAligned);
      
      // Add slight procedural random rotation
      float randomAngle = vRand * 6.28318;
      float cosR = cos(randomAngle);
      float sinR = sin(randomAngle);
      vec2 randRotated = vec2(
        p.x * cosR - p.y * sinR,
        p.x * sinR + p.y * cosR
      );
      
      // Blend screen-space foreshortening alignment with random texture noise
      vec2 finalP = mix(randRotated, rotatedP, 0.80);
      
      float splatDistSq = dot(finalP, finalP);
      if (splatDistSq > 0.25) {
        discard;
      }
      
      // Gaussian bell-curve falloff
      alpha *= exp(-splatDistSq * 9.0) * 1.5;
    } 
    else if (uPointShape == 1) { // Hard Circle
      if (distSq > 0.25) {
        discard;
      }
    }
    // uPointShape == 2 is Square (standard WebGL block points)

    // Compute base color based on selected mode
    vec3 baseColor = vColor;

    if (uColorMode == 1) { // Greyscale
      baseColor = vec3(luminance);
    } 
    else if (uColorMode == 2) { // Depth Gradient
      // Normalize depth relative to depth scale
      float normDepth = 0.5;
      if (abs(uDepthScale) > 0.1) {
        normDepth = (vZPosition + abs(uDepthScale)) / (abs(uDepthScale) * 2.0);
      }
      normDepth = clamp(normDepth, 0.0, 1.0);

      // Gradient: Dark purple -> Cyan -> Bright Magenta/Pink
      vec3 color1 = vec3(0.05, 0.0, 0.35); // Deep Indigo
      vec3 color2 = vec3(0.0, 0.95, 1.0);  // Bright Cyan
      vec3 color3 = vec3(1.0, 0.0, 0.8);   // Hot Magenta
      
      vec3 mix1 = mix(color1, color2, smoothstep(0.0, 0.5, normDepth));
      baseColor = mix(mix1, color3, smoothstep(0.5, 1.0, normDepth));
    } 
    else if (uColorMode == 3) { // Tint
      baseColor = vColor * uTintColor;
    }

    // --- Color Grading & Lighting Pipeline ---
    vec3 gradedColor = baseColor;

    // 1. Shading
    if (uEnableShading) {
      vec3 normal = normalize(vNormal);
      // Double sided lighting since we view it from all angles
      float diffuse = abs(dot(normal, uLightDir));
      float shading = mix(0.20, 1.0, diffuse); // ambient floor of 0.20
      gradedColor *= shading;
    }

    // 2. Exposure
    gradedColor *= uExposure;

    // 3. Contrast
    gradedColor = (gradedColor - vec3(0.5)) * uContrast + vec3(0.5);

    // 4. Saturation
    float gradedLuma = dot(gradedColor, vec3(0.299, 0.587, 0.114));
    gradedColor = mix(vec3(gradedLuma), gradedColor, uSaturation);

    // 5. Split-Toning
    if (uEnableSplitToning) {
      float lumaGrading = clamp(dot(gradedColor, vec3(0.299, 0.587, 0.114)), 0.0, 1.0);
      vec3 shadowTinted = gradedColor * uShadowTint;
      vec3 highlightTinted = gradedColor * uHighlightTint;
      vec3 tintedColor = mix(shadowTinted, highlightTinted, lumaGrading);
      gradedColor = mix(gradedColor, tintedColor, uTintMix);
    }

    gl_FragColor = vec4(clamp(gradedColor, 0.0, 1.0), clamp(alpha, 0.0, 1.0));
  }
`;

const lineVertexShader = `
  uniform float uDepthScale;
  uniform float uScatterAmp;
  uniform float uScatterFreq;
  uniform float uScatterSpeed;
  uniform float uTime;
  uniform float uModelScale;
  uniform float uOrganicFieldStrength;
  uniform float uOrganicFieldSpeed;
  uniform bool uEnableFloating;

  uniform float linewidth;
  uniform vec2 resolution;

  attribute vec3 instanceStart;
  attribute vec3 instanceEnd;
  attribute vec3 instanceColorStart;
  attribute vec3 instanceColorEnd;

  attribute float pixelValStart;
  attribute float pixelValEnd;
  attribute vec2 depthGradientStart;
  attribute vec2 depthGradientEnd;

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;
  varying vec2 vUv;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.1, 0.1));
    p += dot(p, p.yzx + 33.33);
    return fract(p.x * p.y * p.z);
  }

  void main() {
    vColor = (position.y < 0.5) ? instanceColorStart : instanceColorEnd;
    vUv = uv;

    // 1. Calculate displaced endpoint positions on GPU
    vec3 displacedStart = vec3(instanceStart.x * uModelScale, instanceStart.y * uModelScale, instanceStart.z);
    displacedStart.z += pixelValStart * uDepthScale;

    vec3 displacedEnd = vec3(instanceEnd.x * uModelScale, instanceEnd.y * uModelScale, instanceEnd.z);
    displacedEnd.z += pixelValEnd * uDepthScale;

    // 2. Apply Organic Floating offsets to start and end
    if (uEnableFloating && uScatterAmp > 0.0) {
      float phaseStart = hash(instanceStart * 123.456) * 100.0;
      float phaseEnd = hash(instanceEnd * 123.456) * 100.0;
      float t = uTime * uScatterSpeed;
      float f = uScatterFreq * 10.0;
      
      displacedStart += vec3(
        sin(t + phaseStart) * cos(t * 0.8 * f + phaseStart * 1.2),
        sin(t * 1.1 * f + phaseStart * 2.0) * cos(t * 0.9 + phaseStart * 0.8),
        sin(t * 0.9 + phaseStart * 1.5) * cos(t * 1.2 * f + phaseStart)
      ) * uScatterAmp;
      
      displacedEnd += vec3(
        sin(t + phaseEnd) * cos(t * 0.8 * f + phaseEnd * 1.2),
        sin(t * 1.1 * f + phaseEnd * 2.0) * cos(t * 0.9 + phaseEnd * 0.8),
        sin(t * 0.9 + phaseEnd * 1.5) * cos(t * 1.2 * f + phaseEnd)
      ) * uScatterAmp;
    }

    // 3. Apply Organic Flow Field Attractor to start and end
    if (uOrganicFieldStrength > 0.0) {
      vec3 pStart = instanceStart * 0.01 + vec3(uTime * uOrganicFieldSpeed * 0.5);
      vec3 pEnd = instanceEnd * 0.01 + vec3(uTime * uOrganicFieldSpeed * 0.5);
      
      vec3 fieldStart = vec3(
        sin(pStart.y * 2.1) * cos(pStart.z * 1.7),
        sin(pStart.z * 2.1) * cos(pStart.x * 1.7),
        sin(pStart.x * 2.1) * cos(pStart.y * 1.7)
      );
      vec3 fieldEnd = vec3(
        sin(pEnd.y * 2.1) * cos(pEnd.z * 1.7),
        sin(pEnd.z * 2.1) * cos(pEnd.x * 1.7),
        sin(pEnd.x * 2.1) * cos(pEnd.y * 1.7)
      );
      
      displacedStart += fieldStart * uOrganicFieldStrength * 100.0;
      displacedEnd += fieldEnd * uOrganicFieldStrength * 100.0;
    }

    // Set depth-gradient-based Z-position for fragment shader
    vZPosition = (position.y < 0.5) ? displacedStart.z : displacedEnd.z;

    // Compute normal from analytical gradients for shading
    float S = 0.0;
    if (abs(uModelScale) > 0.001) {
      S = uDepthScale / uModelScale;
    }
    vec2 localGrad = (position.y < 0.5) ? depthGradientStart : depthGradientEnd;
    vec3 localNormal = vec3(-S * localGrad.x, -S * localGrad.y, 1.0);
    localNormal = normalize(localNormal);
    vNormal = normalize((modelMatrix * vec4(localNormal, 0.0)).xyz);

    // 4. Line expansion algorithm (screen-aligned quad rendering)
    float aspect = resolution.x / resolution.y;

    vec4 start = modelViewMatrix * vec4(displacedStart, 1.0);
    vec4 end = modelViewMatrix * vec4(displacedEnd, 1.0);

    bool perspective = (projectionMatrix[2][3] == -1.0);
    if (perspective) {
      // Trim segment ends if they cross the near plane
      float a = projectionMatrix[2][2];
      float b = projectionMatrix[3][2];
      float nearEstimate = -0.5 * b / a;
      
      if (start.z < 0.0 && end.z >= 0.0) {
        float alpha = (nearEstimate - start.z) / (end.z - start.z);
        end.xyz = mix(start.xyz, end.xyz, alpha);
      } else if (end.z < 0.0 && start.z >= 0.0) {
        float alpha = (nearEstimate - end.z) / (start.z - end.z);
        start.xyz = mix(end.xyz, start.xyz, alpha);
      }
    }

    vec4 clipStart = projectionMatrix * start;
    vec4 clipEnd = projectionMatrix * end;

    vec3 ndcStart = clipStart.xyz / clipStart.w;
    vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

    vec2 dir = ndcEnd.xy - ndcStart.xy;
    dir.x *= aspect;
    dir = normalize(dir);

    vec2 offset = vec2(dir.y, -dir.x);
    dir.x /= aspect;
    offset.x /= aspect;

    if (position.x < 0.0) offset *= -1.0;

    // Add endcap offsets
    if (position.y < 0.0) {
      offset += -dir;
    } else if (position.y > 1.0) {
      offset += dir;
    }

    // Line width multiplier (using resolution)
    offset *= linewidth;
    offset /= resolution.y;

    vec4 clip = (position.y < 0.5) ? clipStart : clipEnd;
    offset *= clip.w;
    clip.xy += offset;

    gl_Position = clip;
  }
`;

const lineFragmentShader = `
  uniform int uColorMode;
  uniform vec3 uTintColor;
  uniform float uAlphaThreshold;
  uniform float uDepthScale;

  // Luma-style lighting and color grading uniforms
  uniform bool uEnableShading;
  uniform vec3 uLightDir;
  uniform float uExposure;
  uniform float uContrast;
  uniform float uSaturation;
  uniform bool uEnableSplitToning;
  uniform vec3 uShadowTint;
  uniform vec3 uHighlightTint;
  uniform float uTintMix;

  // Link specific uniforms
  uniform float uLinkOpacity;
  uniform int uLinkColorMode; // 0: match-particles, 1: tint, 2: depth-gradient
  uniform vec3 uLinkTintColor;
  uniform float uLinkGlow; // HDR glow multiplier driving UnrealBloomPass

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    // Discard pixels in the rounded endcaps
    if (abs(vUv.y) > 1.0) {
      float a = vUv.x;
      float b = (vUv.y > 0.0) ? vUv.y - 1.0 : vUv.y + 1.0;
      if (a * a + b * b > 1.0) discard;
    }

    // Drop pixels below the brightness threshold
    float luminance = dot(vColor, vec3(0.299, 0.587, 0.114));
    if (luminance < uAlphaThreshold) {
      discard;
    }

    // Compute base color based on selected mode
    vec3 baseColor = vColor;

    if (uLinkColorMode == 1) { // Tint (Monochrome Link Color)
      baseColor = uLinkTintColor;
    }
    else if (uLinkColorMode == 2) { // Depth Gradient
      // Normalize depth relative to depth scale
      float normDepth = 0.5;
      if (abs(uDepthScale) > 0.1) {
        normDepth = (vZPosition + abs(uDepthScale)) / (abs(uDepthScale) * 2.0);
      }
      normDepth = clamp(normDepth, 0.0, 1.0);

      // Gradient: Dark purple -> Bright Cyan -> Bright Magenta/Pink
      vec3 color1 = vec3(0.05, 0.0, 0.35); // Deep Indigo
      vec3 color2 = vec3(0.0, 0.95, 1.0);  // Bright Cyan
      vec3 color3 = vec3(1.0, 0.0, 0.8);   // Hot Magenta
      
      vec3 mix1 = mix(color1, color2, smoothstep(0.0, 0.5, normDepth));
      baseColor = mix(mix1, color3, smoothstep(0.5, 1.0, normDepth));
    }
    else { // Match Particles (0)
      if (uColorMode == 1) { // Greyscale
        baseColor = vec3(luminance);
      } 
      else if (uColorMode == 2) { // Depth Gradient
        float normDepth = 0.5;
        if (abs(uDepthScale) > 0.1) {
          normDepth = (vZPosition + abs(uDepthScale)) / (abs(uDepthScale) * 2.0);
        }
        normDepth = clamp(normDepth, 0.0, 1.0);

        vec3 color1 = vec3(0.05, 0.0, 0.35);
        vec3 color2 = vec3(0.0, 0.95, 1.0);
        vec3 color3 = vec3(1.0, 0.0, 0.8);
        
        vec3 mix1 = mix(color1, color2, smoothstep(0.0, 0.5, normDepth));
        baseColor = mix(mix1, color3, smoothstep(0.5, 1.0, normDepth));
      } 
      else if (uColorMode == 3) { // Tint
        baseColor = vColor * uTintColor;
      }
    }

    // --- Color Grading & Lighting Pipeline ---
    vec3 gradedColor = baseColor;

    // 1. Shading
    if (uEnableShading) {
      vec3 normal = normalize(vNormal);
      float diffuse = abs(dot(normal, uLightDir));
      float shading = mix(0.20, 1.0, diffuse); // ambient floor of 0.20
      gradedColor *= shading;
    }

    // 2. Exposure
    gradedColor *= uExposure;

    // 3. Contrast
    gradedColor = (gradedColor - vec3(0.5)) * uContrast + vec3(0.5);

    // 4. Saturation
    float gradedLuma = dot(gradedColor, vec3(0.299, 0.587, 0.114));
    gradedColor = mix(vec3(gradedLuma), gradedColor, uSaturation);

    // 5. Split-Toning
    if (uEnableSplitToning) {
      float lumaGrading = clamp(dot(gradedColor, vec3(0.299, 0.587, 0.114)), 0.0, 1.0);
      vec3 shadowTinted = gradedColor * uShadowTint;
      vec3 highlightTinted = gradedColor * uHighlightTint;
      vec3 tintedColor = mix(shadowTinted, highlightTinted, lumaGrading);
      gradedColor = mix(gradedColor, tintedColor, uTintMix);
    }

    // Output with HDR Link Glow multiplier to boost bloom bloom pass intensity
    gl_FragColor = vec4(gradedColor * uLinkGlow, clamp(uLinkOpacity, 0.0, 1.0));
  }
`;

// --- Setup Three.js Scene ---
function init() {
  const container = document.getElementById('webgl');

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#030406');

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
  resetCamera();

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Post-Processing (Premium Bloom)
  const renderScene = new RenderPass(scene, camera);
  bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.0;
  bloomPass.strength = 0.5; // Default strength
  bloomPass.radius = 0.5;
  
  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 2000;
  controls.minDistance = 10;
  controls.addEventListener('start', () => { 
    isAnimatingCam = false; 
    if (controls) controls.enableZoom = true;
    if (window.cinematicTl) {
      window.cinematicTl.kill();
      window.cinematicTl = null;
    }
    if (window.customTimelineTl) {
      window.customTimelineTl.kill();
      window.customTimelineTl = null;
      window.customTimelinePlaying = false;
      
      const playBtn = document.getElementById('btn-play-timeline');
      if (playBtn) {
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Play Path
        `;
        playBtn.classList.remove('btn-active');
      }
    }
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);
  });

  // Handle FOV Zoom during active tweens to prevent breaking them
  renderer.domElement.addEventListener('wheel', (e) => {
    if (window.cinematicTl || window.customTimelinePlaying || isAnimatingCam) {
      e.preventDefault();
      e.stopPropagation();
      const zoomSpeed = 0.03;
      let newFov = camera.fov + e.deltaY * zoomSpeed;
      newFov = Math.max(10, Math.min(120, newFov));
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  }, { passive: false });

  // Window Resize
  window.addEventListener('resize', onWindowResize);

  // Setup Event Listeners
  setupEventListeners();

  // Load Initial Image
  loadDefaultImage();

  // Start Animation Loop
  animate(0);
}

// Reset Camera position helper
function resetCamera() {
  if (camera) {
    targetCamPos.set(0, 0, 320);
    targetCamLook.set(0, 0, 0);
    isAnimatingCam = true;
    if (controls) controls.enableZoom = false;
    gsap.to(camera.position, { x: 0, y: 0, z: 320, duration: 2, ease: "power3.inOut" });
    gsap.to(camera, { fov: 60, duration: 2, ease: "power3.inOut", onUpdate: () => camera.updateProjectionMatrix() });
    if (controls) {
      gsap.to(controls.target, { 
        x: 0, 
        y: 0, 
        z: 0, 
        duration: 2, 
        ease: "power3.inOut", 
        onComplete: () => {
          isAnimatingCam = false;
          controls.enableZoom = true;
        } 
      });
    } else {
      isAnimatingCam = false;
    }
  }
}

function setCameraPreset(preset) {
  if (!camera) return;

  if (window.cinematicTl) {
    window.cinematicTl.kill();
    window.cinematicTl = null;
  }
  
  // Also stop custom timeline if it is running
  stopTimeline();

  isAnimatingCam = true;
  if (controls) controls.enableZoom = false;

  if (preset === 'cinematic') {
    window.cinematicTl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Slow cinematic sweeping motion
    window.cinematicTl.to(camera.position, { x: 250, y: 100, z: 250, duration: 6, ease: "sine.inOut" }, 0);
    if (controls) window.cinematicTl.to(controls.target, { x: 0, y: 0, z: 0, duration: 6, ease: "sine.inOut" }, 0);
    
    window.cinematicTl.to(camera.position, { x: -50, y: 300, z: 50, duration: 8, ease: "power1.inOut" }, 6);
    
    window.cinematicTl.to(camera.position, { x: -200, y: 20, z: -150, duration: 8, ease: "sine.inOut" }, 14);
    
    window.cinematicTl.to(camera.position, { x: 0, y: 0, z: 120, duration: 7, ease: "power2.inOut" }, 22);
    
    // Smoothly restore FOV if it was zoomed
    gsap.to(camera, { fov: 60, duration: 3, ease: "sine.inOut", onUpdate: () => camera.updateProjectionMatrix() });
    
    return;
  }

  let px = 0, py = 0, pz = 320;
  if (preset === 'reset') { px = 0; py = 0; pz = 320; }
  else if (preset === 'iso') { px = 250; py = 150; pz = 250; }
  else if (preset === 'side') { px = 350; py = 0; pz = 0; }
  else if (preset === 'top') { px = 0; py = 350; pz = 0; }
  else if (preset === 'macro') { px = 0; py = 0; pz = 60; }
  
  targetCamPos.set(px, py, pz);
  targetCamLook.set(0, 0, 0);
  
  gsap.to(camera.position, { x: px, y: py, z: pz, duration: 2.5, ease: "power3.inOut" });
  gsap.to(camera, { fov: 60, duration: 2.5, ease: "power3.inOut", onUpdate: () => camera.updateProjectionMatrix() });
  if (controls) {
    gsap.to(controls.target, { 
      x: 0, 
      y: 0, 
      z: 0, 
      duration: 2.5, 
      ease: "power3.inOut", 
      onComplete: () => {
        isAnimatingCam = false;
        controls.enableZoom = true;
      }
    });
  } else {
    isAnimatingCam = false;
  }
}

// Window resize handler
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (composer) composer.setSize(window.innerWidth, window.innerHeight);
  if (shaderUniforms.resolution) {
    shaderUniforms.resolution.value.set(window.innerWidth, window.innerHeight);
  }
}

// --- Image Loaders & Parsers ---
function loadDefaultImage() {
  const defaultPath = 'resources/PHOTO-2026-05-21-10-03-04.jpg';
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  
  img.onload = () => {
    processLoadedImage(img, 'PHOTO-2026-05-21-10-03-04.jpg');
  };

  img.onerror = () => {
    console.warn("Could not load default image (possible CORS or path error). Creating procedural pattern...");
    generateProceduralPattern();
  };

  img.src = defaultPath;
}

// Create fallback procedural pattern for CORS issues or missing files
function generateProceduralPattern() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Draw a complex radial gradient
  const grad = ctx.createRadialGradient(size/2, size/2, 20, size/2, size/2, size/2);
  grad.addColorStop(0, '#00f2fe');
  grad.addColorStop(0.5, '#7c3aed');
  grad.addColorStop(1, '#050608');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Add structural lines & shapes
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 360; i += 5) {
    const angle = (i * Math.PI) / 180;
    const r = (size / 3.5) * (1 + 0.3 * Math.sin(angle * 6));
    const x = size / 2 + Math.cos(angle) * r;
    const y = size / 2 + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  // Draw core dots
  for (let j = 0; j < 30; j++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`;
    ctx.beginPath();
    ctx.arc(Math.random() * size, Math.random() * size, Math.random() * 8 + 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const dataURL = canvas.toDataURL();
  const img = new Image();
  img.onload = () => {
    processLoadedImage(img, 'procedural_fallback_pattern.png');
    document.getElementById('file-name-display').innerText = 'Procedural Core Pattern';
    document.getElementById('file-name-display').style.color = '#00f2fe';
  };
  img.src = dataURL;
}

// Processes the raw image, extracts coordinates & pixel arrays, and builds the Three.js Point Cloud
function processLoadedImage(img, fileName) {
  currentImage.name = fileName;
  currentImage.width = img.width;
  currentImage.height = img.height;
  currentImage.aspectRatio = img.width / img.height;

  // Display size
  document.getElementById('file-name-display').innerText = fileName;
  document.getElementById('file-name-display').style.color = '';
  document.getElementById('res-display').innerText = `${img.width} x ${img.height}`;

  // Draw image on hidden canvas
  const canvas = document.getElementById('image-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  rawPixelData = imgData.data;

  buildParticles();
}

// Build geometry & material for point rendering
function buildParticles() {
  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
  }

  if (!rawPixelData) return;

  const step = parseInt(document.getElementById('res-step').value);
  const width = currentImage.width;
  const height = currentImage.height;

  const positions = [];
  const colors = [];
  const pixelVals = []; 
  const depthGradients = []; // Will store vec2 gradients (gx, gy) for normal generation

  const depthSource = document.getElementById('depth-source').value;
  const den = height;

  // Initialize grid index map
  const gridHeight = Math.ceil(height / step);
  const gridWidth = Math.ceil(width / step);
  particleData.grid = [];
  for (let gy = 0; gy < gridHeight; gy++) {
    particleData.grid[gy] = new Int32Array(gridWidth).fill(-1);
  }

  // CPU helper to grab depth of pixel at coordinates
  function getDepthVal(px, py) {
    const cx = Math.max(0, Math.min(px, width - 1));
    const cy = Math.max(0, Math.min(py, height - 1));
    const idx = (cy * width + cx) * 4;
    const r = rawPixelData[idx] / 255;
    const g = rawPixelData[idx + 1] / 255;
    const b = rawPixelData[idx + 2] / 255;
    
    if (depthSource === 'none') return 0.0;
    if (depthSource === 'luminance') return 0.299 * r + 0.587 * g + 0.114 * b;
    if (depthSource === 'red') return r;
    if (depthSource === 'green') return g;
    if (depthSource === 'blue') return b;
    if (depthSource === 'saturation') {
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      return max === 0 ? 0 : (max - min) / max;
    }
    return 0.0;
  }

  let gy = 0;
  for (let y = 0; y < height; y += step) {
    let gx = 0;
    for (let x = 0; x < width; x += step) {
      const idx = (y * width + x) * 4;
      const r = rawPixelData[idx] / 255;
      const g = rawPixelData[idx + 1] / 255;
      const b = rawPixelData[idx + 2] / 255;
      const a = rawPixelData[idx + 3] / 255;

      // Skip fully transparent pixels
      if (a < 0.05) {
        gx++;
        continue;
      }

      // Centering calculations
      const posX = (x - width / 2) / den;
      const posY = ((height - y) - height / 2) / den; 
      const posZ = 0.0;

      // Depth modulator value
      const depthVal = getDepthVal(x, y);

      // Compute analytical neighbors for Z slope
      const xRight = Math.min(x + step, width - 1);
      const xLeft = Math.max(x - step, 0);
      const yDown = Math.min(y + step, height - 1);
      const yUp = Math.max(y - step, 0);

      const zRight = getDepthVal(xRight, y);
      const zLeft = getDepthVal(xLeft, y);
      const zDown = getDepthVal(x, yDown);
      const zUp = getDepthVal(x, yUp);

      const dxVal = (xRight - xLeft) / den;
      const dyVal = (yDown - yUp) / den;

      const gxVal = dxVal > 0 ? (zRight - zLeft) / dxVal : 0.0;
      const gyVal = dyVal > 0 ? (zUp - zDown) / dyVal : 0.0;

      const pIdx = positions.length / 3;
      positions.push(posX, posY, posZ);
      colors.push(r, g, b);
      pixelVals.push(depthVal);
      depthGradients.push(gxVal, gyVal);

      if (gy < gridHeight && gx < gridWidth) {
        particleData.grid[gy][gx] = pIdx;
      }
      gx++;
    }
    gy++;
  }

  // Cache buffers for lines rebuilding
  particleData.positions = positions;
  particleData.colors = colors;
  particleData.pixelVals = pixelVals;
  particleData.depthGradients = depthGradients;

  // Create geometry
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('originalColor', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('pixelVal', new THREE.Float32BufferAttribute(pixelVals, 1));
  geometry.setAttribute('depthGradient', new THREE.Float32BufferAttribute(depthGradients, 2));

  // Custom Shader Material
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: shaderUniforms,
    transparent: true,
    depthTest: true,
    depthWrite: true,
    blending: THREE.NormalBlending
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Update particles HUD readout
  document.getElementById('stats-particles').innerText = (positions.length / 3).toLocaleString();

  // Rebuild/render connection lines
  buildLines();
}

function buildLines() {
  if (lineSystem) {
    scene.remove(lineSystem);
    lineSystem.geometry.dispose();
    lineSystem = null;
  }

  const enableLinks = document.getElementById('enable-links').checked;
  if (!enableLinks || !rawPixelData) return;

  const grid = particleData.grid;
  const gridHeight = grid.length;
  if (gridHeight === 0) return;
  const gridWidth = grid[0].length;

  const positions = particleData.positions;
  const colors = particleData.colors;
  const pixelVals = particleData.pixelVals;
  const depthGradients = particleData.depthGradients;

  const modelScale = parseFloat(document.getElementById('model-scale').value);
  const depthScale = parseFloat(document.getElementById('depth-scale').value);
  const maxDist = parseFloat(document.getElementById('link-max-dist').value);
  const maxDistSq = maxDist * maxDist;

  // We will build attributes for THREE.LineSegments
  // For each line, we need 2 vertices (start, end)
  const linePositions = [];
  const lineColors = [];
  const linePixelVals = [];
  const lineDepthGradients = [];

  activeLinksList = []; // Clear current links for exports

  // Loop through grid and connect points
  for (let gy = 0; gy < gridHeight; gy++) {
    for (let gx = 0; gx < gridWidth; gx++) {
      const idxA = grid[gy][gx];
      if (idxA === -1) continue;

      const ax = positions[idxA * 3];
      const ay = positions[idxA * 3 + 1];
      const az = positions[idxA * 3 + 2];
      const ap = pixelVals[idxA];

      // Displaced coordinates on CPU (without scatter)
      const aXDisp = ax * modelScale;
      const aYDisp = ay * modelScale;
      const aZDisp = az + ap * depthScale;

      // Define neighbors we check: Right, Down, Diagonal Down-Right, Diagonal Down-Left
      const neighbors = [
        { x: gx + 1, y: gy },     // Right
        { x: gx,     y: gy + 1 }, // Down
        { x: gx + 1, y: gy + 1 }, // Down-Right
        { x: gx - 1, y: gy + 1 }  // Down-Left
      ];

      for (let n = 0; n < neighbors.length; n++) {
        const nx = neighbors[n].x;
        const ny = neighbors[n].y;

        if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) {
          const idxB = grid[ny][nx];
          if (idxB === -1) continue;

          // Check distance
          const bx = positions[idxB * 3];
          const by = positions[idxB * 3 + 1];
          const bz = positions[idxB * 3 + 2];
          const bp = pixelVals[idxB];

          const bXDisp = bx * modelScale;
          const bYDisp = by * modelScale;
          const bZDisp = bz + bp * depthScale;

          const dx = aXDisp - bXDisp;
          const dy = aYDisp - bYDisp;
          const dz = aZDisp - bZDisp;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistSq) {
            // Keep track of active link index pair
            activeLinksList.push({ indexA: idxA, indexB: idxB });

            // Vertex A
            linePositions.push(ax, ay, az);
            lineColors.push(colors[idxA * 3], colors[idxA * 3 + 1], colors[idxA * 3 + 2]);
            linePixelVals.push(ap);
            lineDepthGradients.push(depthGradients[idxA * 2], depthGradients[idxA * 2 + 1]);

            // Vertex B
            linePositions.push(bx, by, bz);
            lineColors.push(colors[idxB * 3], colors[idxB * 3 + 1], colors[idxB * 3 + 2]);
            linePixelVals.push(bp);
            lineDepthGradients.push(depthGradients[idxB * 2], depthGradients[idxB * 2 + 1]);
          }
        }
      }
    }
  }

  if (linePositions.length === 0) return;

  const lineGeometry = new LineSegmentsGeometry();
  lineGeometry.setPositions(linePositions);
  lineGeometry.setColors(lineColors);

  const instanceCount = linePositions.length / 6;

  const pixelValStartArr = new Float32Array(instanceCount);
  const pixelValEndArr = new Float32Array(instanceCount);
  const depthGradientStartArr = new Float32Array(instanceCount * 2);
  const depthGradientEndArr = new Float32Array(instanceCount * 2);

  for (let i = 0; i < instanceCount; i++) {
    pixelValStartArr[i] = linePixelVals[i * 2];
    pixelValEndArr[i] = linePixelVals[i * 2 + 1];
    
    depthGradientStartArr[i * 2] = lineDepthGradients[i * 4];
    depthGradientStartArr[i * 2 + 1] = lineDepthGradients[i * 4 + 1];
    
    depthGradientEndArr[i * 2] = lineDepthGradients[i * 4 + 2];
    depthGradientEndArr[i * 2 + 1] = lineDepthGradients[i * 4 + 3];
  }

  lineGeometry.setAttribute('pixelValStart', new THREE.InstancedBufferAttribute(pixelValStartArr, 1));
  lineGeometry.setAttribute('pixelValEnd', new THREE.InstancedBufferAttribute(pixelValEndArr, 1));
  lineGeometry.setAttribute('depthGradientStart', new THREE.InstancedBufferAttribute(depthGradientStartArr, 2));
  lineGeometry.setAttribute('depthGradientEnd', new THREE.InstancedBufferAttribute(depthGradientEndArr, 2));

  const lineMaterial = new THREE.ShaderMaterial({
    vertexShader: lineVertexShader,
    fragmentShader: lineFragmentShader,
    uniforms: shaderUniforms,
    transparent: true,
    depthTest: true,
    depthWrite: false, // Don't write depth to avoid sorting issues with fine lines
    blending: THREE.AdditiveBlending // Additive blending for glowing mesh appearance
  });

  lineSystem = new THREE.Mesh(lineGeometry, lineMaterial);
  scene.add(lineSystem);
}

// --- HUD Performance Counter ---
let lastTime = 0;
let frames = 0;
let lastFpsUpdate = 0;

function updateHUD(time) {
  frames++;
  if (time > lastFpsUpdate + 1000) {
    const fps = Math.round((frames * 1000) / (time - lastFpsUpdate));
    const frameTime = (time - lastTime).toFixed(1);
    document.getElementById('stats-fps').innerText = `${frameTime} ms (${fps} fps)`;
    lastFpsUpdate = time;
    frames = 0;
  }
  lastTime = time;
}

// --- Animation Loop ---
function animate(time) {
  requestAnimationFrame(animate);

  const dt = time * 0.001; // absolute time in seconds
  shaderUniforms.uTime.value = dt;

  if (!isAnimatingCam && driftAmp > 0) {
    const t = dt * driftSpeed;
    const dx = Math.sin(t) * driftAmp;
    const dy = Math.cos(t * 0.8) * driftAmp;
    controls.target.x = targetCamLook.x + dx;
    controls.target.y = targetCamLook.y + dy;
  }

  if (controls) {
    controls.autoRotate = enableAutoOrbit;
    controls.autoRotateSpeed = driftSpeed * 2.0;
    controls.update();
  }
  
  if (composer && scene && camera) {
    composer.render();
  } else if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }

  updateHUD(time);
}

// --- Export Functionalities ---

// Generates the accurate displacement and positions on CPU side matching GPU outputs
function computeExportPoints() {
  if (!rawPixelData) return null;

  const step = parseInt(document.getElementById('res-step').value);
  const width = currentImage.width;
  const height = currentImage.height;
  const depthSource = document.getElementById('depth-source').value;
  const depthScale = parseFloat(document.getElementById('depth-scale').value);
  const scatterAmp = parseFloat(document.getElementById('scatter-amp').value);
  const alphaThreshold = parseFloat(document.getElementById('alpha-threshold').value);
  const tintColorHex = document.getElementById('monochrome-color').value;
  const tintColor = new THREE.Color(tintColorHex);
  const modelScale = parseFloat(document.getElementById('model-scale').value);

  // Lighting & Color Grading CPU variables
  const enableShading = document.getElementById('enable-shading').checked;
  const exposure = parseFloat(document.getElementById('exposure').value);
  const contrast = parseFloat(document.getElementById('contrast').value);
  const saturation = parseFloat(document.getElementById('saturation').value);
  const enableSplitToning = document.getElementById('enable-split-toning').checked;
  const shadowTint = new THREE.Color(document.getElementById('shadow-tint').value);
  const highlightTint = new THREE.Color(document.getElementById('highlight-tint').value);
  const tintMix = parseFloat(document.getElementById('tint-mix').value);

  const angleDeg = parseFloat(document.getElementById('light-angle').value);
  const angleRad = (angleDeg * Math.PI) / 180;
  const lx = Math.sin(angleRad);
  const lz = Math.cos(angleRad);
  const ly = 0.5;
  const lightDir = new THREE.Vector3(lx, ly, lz).normalize();

  // Color Mode Mapping
  const colorModeVal = document.getElementById('color-mode').value;
  let colorMode = 0;
  if (colorModeVal === 'original') colorMode = 0;
  else if (colorModeVal === 'greyscale') colorMode = 1;
  else if (colorModeVal === 'depth-gradient') colorMode = 2;
  else if (colorModeVal === 'monochrome') colorMode = 3;

  const den = height;
  const resultPoints = [];

  // Basic CPU-side noise generator helper
  function hash(x, y, z) {
    const dot = x * 0.3183099 + y * 0.3183099 + z * 0.3183099;
    const fractX = Math.abs(Math.sin(dot + 0.1) * 33.33) % 1;
    const fractY = Math.abs(Math.cos(dot + 0.2) * 44.44) % 1;
    const fractZ = Math.abs(Math.sin(dot + 0.3) * 55.55) % 1;
    return (fractX + fractY + fractZ) / 3;
  }

  function getDepthVal(px, py) {
    const cx = Math.max(0, Math.min(px, width - 1));
    const cy = Math.max(0, Math.min(py, height - 1));
    const idx = (cy * width + cx) * 4;
    const r = rawPixelData[idx] / 255;
    const g = rawPixelData[idx + 1] / 255;
    const b = rawPixelData[idx + 2] / 255;
    
    if (depthSource === 'none') return 0.0;
    if (depthSource === 'luminance') return 0.299 * r + 0.587 * g + 0.114 * b;
    if (depthSource === 'red') return r;
    if (depthSource === 'green') return g;
    if (depthSource === 'blue') return b;
    if (depthSource === 'saturation') {
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      return max === 0 ? 0 : (max - min) / max;
    }
    return 0.0;
  }

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const idx = (y * width + x) * 4;
      const r = rawPixelData[idx] / 255;
      const g = rawPixelData[idx + 1] / 255;
      const b = rawPixelData[idx + 2] / 255;
      const a = rawPixelData[idx + 3] / 255;

      if (a < 0.05) continue;

      const luma = 0.299 * r + 0.587 * g + 0.114 * b;
      if (luma < alphaThreshold) continue;

      // Base coordinate scaled by uModelScale
      const posX = ((x - width / 2) / den) * modelScale;
      const posY = (((height - y) - height / 2) / den) * modelScale;
      let posZ = 0.0;

      // Depth source value
      const depthVal = getDepthVal(x, y);
      posZ += depthVal * depthScale;

      // Scatter (Static representation of scatter for export)
      let fx = posX, fy = posY, fz = posZ;
      if (scatterAmp > 0.0) {
        const sx = hash(posX + 11.1, posY + 17.3, 0.0);
        const sy = hash(posX + 23.4, posY + 31.8, 0.0);
        const sz = hash(posX + 47.9, posY + 93.1, 0.0);
        fx += (sx - 0.5) * scatterAmp;
        fy += (sy - 0.5) * scatterAmp;
        fz += (sz - 0.5) * scatterAmp;
      }

      // Compute base color
      let fr = r, fg = g, fb = b;
      if (colorMode === 1) { // Greyscale
        fr = fg = fb = luma;
      } else if (colorMode === 2) { // Depth Gradient
        let norm = 0.5;
        if (Math.abs(depthScale) > 0.1) {
          norm = (fz + Math.abs(depthScale)) / (Math.abs(depthScale) * 2.0);
        }
        norm = Math.max(0.0, Math.min(1.0, norm));
        
        const c1 = new THREE.Color('#0d0059');
        const c2 = new THREE.Color('#00f2fe');
        const c3 = new THREE.Color('#ff00cc');
        
        let mixedColor;
        if (norm < 0.5) {
          mixedColor = c1.clone().lerp(c2, norm * 2.0);
        } else {
          mixedColor = c2.clone().lerp(c3, (norm - 0.5) * 2.0);
        }
        fr = mixedColor.r;
        fg = mixedColor.g;
        fb = mixedColor.b;
      } else if (colorMode === 3) { // Tint
        fr = r * tintColor.r;
        fg = g * tintColor.g;
        fb = b * tintColor.b;
      }

      // CPU Color Grading & Lighting Pipeline
      const color = new THREE.Color(fr, fg, fb);

      // 1. Shading
      if (enableShading) {
        const xRight = Math.min(x + step, width - 1);
        const xLeft = Math.max(x - step, 0);
        const yDown = Math.min(y + step, height - 1);
        const yUp = Math.max(y - step, 0);
        
        const zRight = getDepthVal(xRight, y);
        const zLeft = getDepthVal(xLeft, y);
        const zDown = getDepthVal(x, yDown);
        const zUp = getDepthVal(x, yUp);
        
        const dxVal = (xRight - xLeft) / den;
        const dyVal = (yDown - yUp) / den;
        
        const gx = dxVal > 0 ? (zRight - zLeft) / dxVal : 0.0;
        const gy = dyVal > 0 ? (zUp - zDown) / dyVal : 0.0;
        
        const S = modelScale > 0.001 ? depthScale / modelScale : 0.0;
        const localNormal = new THREE.Vector3(-S * gx, -S * gy, 1.0).normalize();
        
        const diffuse = Math.abs(localNormal.dot(lightDir));
        const shading = 0.20 + 0.80 * diffuse;
        color.multiplyScalar(shading);
      }

      // 2. Exposure
      color.multiplyScalar(exposure);

      // 3. Contrast
      color.r = (color.r - 0.5) * contrast + 0.5;
      color.g = (color.g - 0.5) * contrast + 0.5;
      color.b = (color.b - 0.5) * contrast + 0.5;

      // 4. Saturation
      const gradedLuma = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
      color.lerp(new THREE.Color(gradedLuma, gradedLuma, gradedLuma), 1.0 - saturation);

      // 5. Split-Toning
      if (enableSplitToning) {
        const finalLuma = Math.max(0.0, Math.min(1.0, 0.299 * color.r + 0.587 * color.g + 0.114 * color.b));
        const shadowColor = color.clone().multiply(shadowTint);
        const highlightColor = color.clone().multiply(highlightTint);
        const tinted = shadowColor.clone().lerp(highlightColor, finalLuma);
        color.lerp(tinted, tintMix);
      }

      resultPoints.push({
        x: fx,
        y: fy,
        z: fz,
        r: Math.max(0.0, Math.min(1.0, color.r)),
        g: Math.max(0.0, Math.min(1.0, color.g)),
        b: Math.max(0.0, Math.min(1.0, color.b))
      });
    }
  }

  return resultPoints;
}

// Download utility
function triggerDownload(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Export OBJ
function exportOBJ() {
  const points = computeExportPoints();
  if (!points || points.length === 0) return;

  let output = `# Exported from Particle Saga\n# Particles Count: ${points.length}\n`;
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    output += `v ${p.x.toFixed(4)} ${p.y.toFixed(4)} ${p.z.toFixed(4)} ${p.r.toFixed(4)} ${p.g.toFixed(4)} ${p.b.toFixed(4)}\n`;
  }

  const name = currentImage.name.split('.')[0];
  triggerDownload(output, `${name}_particles.obj`, 'text/plain');
}

// Export CSV Table
function exportCSV() {
  const points = computeExportPoints();
  if (!points || points.length === 0) return;

  let output = 'x,y,z,r,g,b\n';
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const cr = Math.round(p.r * 255);
    const cg = Math.round(p.g * 255);
    const cb = Math.round(p.b * 255);
    output += `${p.x.toFixed(4)},${p.y.toFixed(4)},${p.z.toFixed(4)},${cr},${cg},${cb}\n`;
  }

  const name = currentImage.name.split('.')[0];
  triggerDownload(output, `${name}_particles.csv`, 'text/csv');
}

// Export JSON Raw
function exportJSON() {
  const points = computeExportPoints();
  if (!points || points.length === 0) return;

  const flatData = {
    positions: [],
    colors: []
  };

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    flatData.positions.push(p.x, p.y, p.z);
    flatData.colors.push(p.r, p.g, p.b);
  }

  const name = currentImage.name.split('.')[0];
  triggerDownload(JSON.stringify(flatData, null, 2), `${name}_particles.json`, 'application/json');
}

// Export High-Res PNG
function exportPNG() {
  if (!renderer || !camera) return;
  
  // Save current sizes
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Set super-high resolution (e.g. 4K width: 3840, aspect ratio preserved)
  const exportWidth = 3840;
  const exportHeight = Math.round(exportWidth / (width / height));
  
  // 1. Temporarily resize renderer and composer (updateStyle = false, so canvas styling stays 100% on screen)
  renderer.setSize(exportWidth, exportHeight, false);
  if (composer) {
    composer.setSize(exportWidth, exportHeight);
  }
  
  // Update camera aspect and projection
  camera.aspect = exportWidth / exportHeight;
  camera.updateProjectionMatrix();
  
  // Update resolution uniform so shader line expansion matches the high-resolution buffer size
  if (shaderUniforms.resolution) {
    shaderUniforms.resolution.value.set(exportWidth, exportHeight);
  }
  
  // 2. Render the high-resolution frame
  if (composer) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
  
  // 3. Capture the image data URL
  const dataURL = renderer.domElement.toDataURL('image/png');
  
  // 4. Download it
  const a = document.createElement('a');
  const name = currentImage.name.split('.')[0];
  a.href = dataURL;
  a.download = `${name}_render_4k.png`;
  a.click();
  
  // 5. Restore the original sizes
  renderer.setSize(width, height);
  if (composer) {
    composer.setSize(width, height);
  }
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  if (shaderUniforms.resolution) {
    shaderUniforms.resolution.value.set(width, height);
  }
  
  // Re-render so the screen updates correctly
  if (composer) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

// --- Light Vector Calculator helper ---
function updateLightDirection(angleDeg) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = Math.sin(angleRad);
  const z = Math.cos(angleRad);
  const y = 0.5; // Elevated angle
  const dir = new THREE.Vector3(x, y, z).normalize();
  shaderUniforms.uLightDir.value.copy(dir);
}

// --- Presets Dictionary & Logic ---
const PRESETS = {
  '0001': {
    camera: 'iso',
    resStep: 2,
    pointSize: 1.2,
    modelScale: 300,
    depthScale: 120,
    scatterAmp: 0,
    scatterFreq: 0.05,
    scatterSpeed: 0,
    pointShape: 0,
    pointOpacity: 0.60,
    colorMode: 'greyscale',
    exposure: 1.2,
    contrast: 1.4,
    saturation: 0.8,
    enableShading: true,
    enableSplitToning: false,
    tintMix: 0.5,
    lightAngle: 45
  },
  '0002': {
    camera: 'reset',
    resStep: 2,
    pointSize: 2.0,
    modelScale: 300,
    depthScale: 80,
    scatterAmp: 5,
    scatterFreq: 0.05,
    scatterSpeed: 0.3,
    pointShape: 0,
    pointOpacity: 0.60,
    colorMode: 'original',
    exposure: 1.0,
    contrast: 1.2,
    saturation: 1.0,
    enableShading: true,
    enableSplitToning: true,
    shadowTint: '#094074',
    highlightTint: '#fffaec',
    tintMix: 0.6,
    lightAngle: 60
  },
  '0003': {
    camera: 'side',
    resStep: 2,
    pointSize: 1.5,
    modelScale: 300,
    depthScale: 150,
    scatterAmp: 12,
    scatterFreq: 0.05,
    scatterSpeed: 0.8,
    pointShape: 0,
    pointOpacity: 0.60,
    colorMode: 'monochrome',
    monochromeColor: '#00ffcc',
    exposure: 0.9,
    contrast: 1.5,
    saturation: 0.6,
    enableShading: false,
    enableSplitToning: false,
    tintMix: 0.7,
    lightAngle: 30
  }
};

function applyPreset(name) {
  const preset = PRESETS[name];
  if (!preset) return;

  if (preset.resStep !== undefined) document.getElementById('res-step').value = preset.resStep;
  if (preset.pointSize !== undefined) document.getElementById('point-size').value = preset.pointSize;
  if (preset.modelScale !== undefined) document.getElementById('model-scale').value = preset.modelScale;
  if (preset.depthScale !== undefined) document.getElementById('depth-scale').value = preset.depthScale;
  if (preset.scatterAmp !== undefined) document.getElementById('scatter-amp').value = preset.scatterAmp;
  if (preset.scatterFreq !== undefined) document.getElementById('scatter-freq').value = preset.scatterFreq;
  if (preset.scatterSpeed !== undefined) document.getElementById('scatter-speed').value = preset.scatterSpeed;
  if (preset.pointShape !== undefined) document.getElementById('point-shape').value = preset.pointShape;
  if (preset.pointOpacity !== undefined) document.getElementById('point-opacity').value = preset.pointOpacity;
  if (preset.colorMode !== undefined) document.getElementById('color-mode').value = preset.colorMode;
  if (preset.monochromeColor !== undefined) document.getElementById('monochrome-color').value = preset.monochromeColor;
  if (preset.exposure !== undefined) document.getElementById('exposure').value = preset.exposure;
  if (preset.contrast !== undefined) document.getElementById('contrast').value = preset.contrast;
  if (preset.saturation !== undefined) document.getElementById('saturation').value = preset.saturation;
  if (preset.enableShading !== undefined) document.getElementById('enable-shading').checked = preset.enableShading;
  if (preset.enableSplitToning !== undefined) document.getElementById('enable-split-toning').checked = preset.enableSplitToning;
  if (preset.shadowTint !== undefined) document.getElementById('shadow-tint').value = preset.shadowTint;
  if (preset.highlightTint !== undefined) document.getElementById('highlight-tint').value = preset.highlightTint;
  if (preset.tintMix !== undefined) document.getElementById('tint-mix').value = preset.tintMix;
  if (preset.lightAngle !== undefined) document.getElementById('light-angle').value = preset.lightAngle;

  initUniformsFromDOM();
  buildParticles();

  if (preset.camera) {
    setCameraPreset(preset.camera);
  }

  document.querySelectorAll('.preset-btn').forEach(btn => {
    if (btn.getAttribute('data-preset') === name) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// --- Uniform Initializer ---
function initUniformsFromDOM() {
  shaderUniforms.uPointSize.value = parseFloat(document.getElementById('point-size').value);
  shaderUniforms.uModelScale.value = parseFloat(document.getElementById('model-scale').value);
  shaderUniforms.uDepthScale.value = parseFloat(document.getElementById('depth-scale').value);
  shaderUniforms.uScatterAmp.value = parseFloat(document.getElementById('scatter-amp').value);
  shaderUniforms.uScatterFreq.value = parseFloat(document.getElementById('scatter-freq').value);
  shaderUniforms.uScatterSpeed.value = parseFloat(document.getElementById('scatter-speed').value);
  shaderUniforms.uPointOpacity.value = parseFloat(document.getElementById('point-opacity').value);
  shaderUniforms.uAlphaThreshold.value = parseFloat(document.getElementById('alpha-threshold').value);
  shaderUniforms.uSizeAttenuation.value = document.getElementById('size-attenuation').checked;
  shaderUniforms.uPointShape.value = parseInt(document.getElementById('point-shape').value);
  
  shaderUniforms.uOrganicFieldStrength.value = parseFloat(document.getElementById('organic-field-strength').value);
  shaderUniforms.uOrganicFieldSpeed.value = parseFloat(document.getElementById('organic-field-speed').value);
  shaderUniforms.uEnableFloating.value = document.getElementById('enable-organic-float').checked;
  
  if (bloomPass) {
    bloomPass.strength = parseFloat(document.getElementById('bloom-strength').value);
    bloomPass.radius = parseFloat(document.getElementById('bloom-radius').value);
  }

  // Mode mapping
  const modeVal = document.getElementById('color-mode').value;
  let mode = 0;
  if (modeVal === 'original') mode = 0;
  else if (modeVal === 'greyscale') mode = 1;
  else if (modeVal === 'depth-gradient') mode = 2;
  else if (modeVal === 'monochrome') mode = 3;
  shaderUniforms.uColorMode.value = mode;
  shaderUniforms.uTintColor.value.set(document.getElementById('monochrome-color').value);

  // Link Uniforms mapping
  shaderUniforms.uLinkOpacity.value = parseFloat(document.getElementById('link-opacity').value);
  shaderUniforms.uLinkTintColor.value.set(document.getElementById('link-tint-color').value);
  shaderUniforms.linewidth.value = parseFloat(document.getElementById('link-thickness').value);
  shaderUniforms.uLinkGlow.value = parseFloat(document.getElementById('link-glow').value);

  const linkColorModeVal = document.getElementById('link-color-mode').value;
  let linkColorMode = 0;
  if (linkColorModeVal === 'match-particles') linkColorMode = 0;
  else if (linkColorModeVal === 'tint') linkColorMode = 1;
  else if (linkColorModeVal === 'depth-gradient') linkColorMode = 2;
  shaderUniforms.uLinkColorMode.value = linkColorMode;

  // New Shading and grading defaults
  shaderUniforms.uEnableShading.value = document.getElementById('enable-shading').checked;
  shaderUniforms.uExposure.value = parseFloat(document.getElementById('exposure').value);
  shaderUniforms.uContrast.value = parseFloat(document.getElementById('contrast').value);
  shaderUniforms.uSaturation.value = parseFloat(document.getElementById('saturation').value);
  shaderUniforms.uEnableSplitToning.value = document.getElementById('enable-split-toning').checked;
  shaderUniforms.uShadowTint.value.set(document.getElementById('shadow-tint').value);
  shaderUniforms.uHighlightTint.value.set(document.getElementById('highlight-tint').value);
  shaderUniforms.uTintMix.value = parseFloat(document.getElementById('tint-mix').value);

  updateLightDirection(parseFloat(document.getElementById('light-angle').value));

  // Sync displays
  const displays = [
    { id: 'res-step', unit: 'px' },
    { id: 'point-size', unit: '' },
    { id: 'model-scale', unit: '' },
    { id: 'depth-scale', unit: '' },
    { id: 'scatter-amp', unit: '' },
    { id: 'scatter-freq', unit: '' },
    { id: 'scatter-speed', unit: '' },
    { id: 'point-opacity', unit: '' },
    { id: 'alpha-threshold', unit: '' },
    { id: 'exposure', unit: '' },
    { id: 'contrast', unit: '' },
    { id: 'saturation', unit: '' },
    { id: 'tint-mix', unit: '' },
    { id: 'light-angle', unit: '°' },
    { id: 'drift-amp', unit: '' },
    { id: 'drift-speed', unit: 'x' },
    { id: 'link-opacity', unit: '' },
    { id: 'link-max-dist', unit: '' },
    { id: 'link-thickness', unit: 'px' },
    { id: 'link-glow', unit: '' },
    { id: 'organic-field-strength', unit: '' },
    { id: 'organic-field-speed', unit: '' },
    { id: 'bloom-strength', unit: '' },
    { id: 'bloom-radius', unit: '' },
    { id: 'timeline-speed', unit: 's' }
  ];

  displays.forEach(d => {
    const el = document.getElementById(d.id);
    const disp = document.getElementById(`${d.id}-val`);
    if (el && disp) {
      disp.innerText = `${el.value}${d.unit}`;
    }
  });

  const splitToningOptions = document.getElementById('split-toning-options');
  if (splitToningOptions) {
    splitToningOptions.style.display = document.getElementById('enable-split-toning').checked ? 'block' : 'none';
  }

  const tintWrapper = document.getElementById('monochrome-picker-wrapper');
  if (tintWrapper) {
    tintWrapper.style.display = mode === 3 ? 'flex' : 'none';
  }

  const linkTintWrapper = document.getElementById('link-tint-picker-wrapper');
  if (linkTintWrapper) {
    linkTintWrapper.style.display = linkColorMode === 1 ? 'flex' : 'none';
  }
}

// --- Video Recording & Timeline Capture ---
function startRecording() {
  if (!renderer || !camera) return;
  
  // 1. Calculate resolution matching the screen's logical canvas dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Enforce even dimensions to satisfy encoder restrictions
  let recordWidth = width;
  let recordHeight = height;
  if (recordWidth % 2 !== 0) recordWidth -= 1;
  if (recordHeight % 2 !== 0) recordHeight -= 1;
  
  renderer.setSize(recordWidth, recordHeight, false);
  if (composer) {
    composer.setSize(recordWidth, recordHeight);
  }
  
  camera.aspect = recordWidth / recordHeight;
  camera.updateProjectionMatrix();
  
  if (shaderUniforms.resolution) {
    shaderUniforms.resolution.value.set(recordWidth, recordHeight);
  }

  const canvas = renderer.domElement;
  
  // Capture stream at 60 FPS
  const stream = canvas.captureStream(60);
  
  // Detect best supported mimeType and extension, prioritizing MP4
  let mimeType = 'video/webm';
  let fileExt = 'webm';
  
  const mimeTypes = [
    'video/mp4;codecs=h264',
    'video/mp4;codecs=avc1',
    'video/mp4',
    'video/webm;codecs=h264',
    'video/webm;codecs=vp9',
    'video/webm'
  ];
  
  for (const type of mimeTypes) {
    if (MediaRecorder.isTypeSupported(type)) {
      mimeType = type;
      if (type.includes('mp4')) {
        fileExt = 'mp4';
      }
      break;
    }
  }
  
  console.log(`Starting recording with mimeType: ${mimeType}, fileExt: ${fileExt}`);
  
  recordedChunks = [];
  
  const options = {
    mimeType: mimeType,
    videoBitsPerSecond: 30000000 // 30 Mbps for super premium quality high-res video
  };
  
  try {
    mediaRecorder = new MediaRecorder(stream, options);
  } catch (err) {
    console.warn("Failed to create MediaRecorder with options, falling back to basic stream configuration", err);
    try {
      mediaRecorder = new MediaRecorder(stream);
    } catch (err2) {
      alert("MediaRecorder is not supported in this browser: " + err2.message);
      
      // Restore sizes if failed
      renderer.setSize(width, height);
      if (composer) composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (shaderUniforms.resolution) shaderUniforms.resolution.value.set(width, height);
      return;
    }
  }
  
  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    let baseName = 'ppparticles';
    if (currentImage && currentImage.name) {
      baseName = currentImage.name.replace(/\.[^/.]+$/, "");
    }
    
    a.href = url;
    a.download = `${baseName}_recording.${fileExt}`;
    a.click();
    
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
    
    recordedChunks = [];
    isRecording = false;
    
    // Restore sizes on stop
    const currentW = window.innerWidth;
    const currentH = window.innerHeight;
    renderer.setSize(currentW, currentH);
    if (composer) {
      composer.setSize(currentW, currentH);
    }
    camera.aspect = currentW / currentH;
    camera.updateProjectionMatrix();
    if (shaderUniforms.resolution) {
      shaderUniforms.resolution.value.set(currentW, currentH);
    }
    
    const recordBtn = document.getElementById('btn-record-video');
    if (recordBtn) {
      recordBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>
        Record Video (MP4/WebM)
      `;
      recordBtn.classList.remove('btn-recording');
      recordBtn.classList.add('btn-primary');
    }
  };
  
  mediaRecorder.start(100); // chunk data every 100ms
  isRecording = true;
  
  const recordBtn = document.getElementById('btn-record-video');
  if (recordBtn) {
    recordBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pulse-icon"><circle cx="12" cy="12" r="10" fill="#ef4444"/></svg>
      Stop Recording
    `;
    recordBtn.classList.add('btn-recording');
    recordBtn.classList.remove('btn-primary');
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
}

function addKeyframe() {
  if (!camera || !controls) return;
  
  // Save sliders
  const params = {};
  const sliderIds = [
    'res-step', 'point-size', 'model-scale', 'depth-scale', 
    'scatter-amp', 'scatter-freq', 'scatter-speed', 
    'point-opacity', 'alpha-threshold', 
    'exposure', 'contrast', 'saturation', 'tint-mix', 
    'light-angle', 'drift-amp', 'drift-speed', 
    'organic-field-strength', 'organic-field-speed', 
    'bloom-strength', 'bloom-radius',
    'link-opacity', 'link-max-dist', 'link-thickness', 'link-glow',
    'timeline-speed'
  ];
  sliderIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      params[id] = parseFloat(el.value);
    }
  });
  
  // Save checkboxes
  const checkboxIds = [
    'enable-links', 'size-attenuation', 'enable-auto-orbit', 
    'enable-shading', 'enable-organic-float', 'enable-split-toning'
  ];
  checkboxIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      params[id] = el.checked;
    }
  });

  // Save dropdowns
  const selectIds = ['depth-source', 'color-mode', 'point-shape', 'link-color-mode'];
  selectIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      params[id] = el.value;
    }
  });

  // Save color pickers
  const colorIds = ['monochrome-color', 'shadow-tint', 'highlight-tint', 'link-tint-color'];
  colorIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      params[id] = el.value;
    }
  });

  customKeyframes.push({
    px: camera.position.x,
    py: camera.position.y,
    pz: camera.position.z,
    tx: controls.target.x,
    ty: controls.target.y,
    tz: controls.target.z,
    fov: camera.fov,
    params: params
  });
  
  const hud = document.getElementById('timeline-hud');
  if (hud) {
    hud.innerText = `${customKeyframes.length} Keyframe${customKeyframes.length !== 1 ? 's' : ''} Captured`;
  }
}

function applyKeyframeParameters(kf) {
  if (!kf || !kf.params) return;

  // 1. Apply checkboxes (instant flags) directly to uniforms and state variables
  const enableLinksVal = kf.params['enable-links'];
  const enableLinksEl = document.getElementById('enable-links');
  if (enableLinksEl && enableLinksVal !== undefined) {
    enableLinksEl.checked = enableLinksVal;
    if (lineSystem) {
      lineSystem.visible = enableLinksVal;
    } else if (enableLinksVal) {
      buildLines();
    }
  }

  const sizeAttVal = kf.params['size-attenuation'];
  const sizeAttEl = document.getElementById('size-attenuation');
  if (sizeAttEl && sizeAttVal !== undefined) {
    sizeAttEl.checked = sizeAttVal;
    shaderUniforms.uSizeAttenuation.value = sizeAttVal;
  }

  const autoOrbitVal = kf.params['enable-auto-orbit'];
  const autoOrbitEl = document.getElementById('enable-auto-orbit');
  if (autoOrbitEl && autoOrbitVal !== undefined) {
    autoOrbitEl.checked = autoOrbitVal;
    enableAutoOrbit = autoOrbitVal;
  }

  const shadingVal = kf.params['enable-shading'];
  const shadingEl = document.getElementById('enable-shading');
  if (shadingEl && shadingVal !== undefined) {
    shadingEl.checked = shadingVal;
    shaderUniforms.uEnableShading.value = shadingVal;
  }

  const organicFloatVal = kf.params['enable-organic-float'];
  const organicFloatEl = document.getElementById('enable-organic-float');
  if (organicFloatEl && organicFloatVal !== undefined) {
    organicFloatEl.checked = organicFloatVal;
    shaderUniforms.uEnableFloating.value = organicFloatVal;
  }

  const splitToningVal = kf.params['enable-split-toning'];
  const splitToningEl = document.getElementById('enable-split-toning');
  if (splitToningEl && splitToningVal !== undefined) {
    splitToningEl.checked = splitToningVal;
    shaderUniforms.uEnableSplitToning.value = splitToningVal;
    const splitToningOptions = document.getElementById('split-toning-options');
    if (splitToningOptions) {
      splitToningOptions.style.display = splitToningVal ? 'block' : 'none';
    }
  }

  // 2. Apply dropdown selects directly
  const depthSourceVal = kf.params['depth-source'];
  const depthSourceEl = document.getElementById('depth-source');
  if (depthSourceEl && depthSourceVal !== undefined) {
    const currentVal = depthSourceEl.value;
    if (currentVal !== depthSourceVal) {
      depthSourceEl.value = depthSourceVal;
      buildParticles();
    }
  }

  const colorModeVal = kf.params['color-mode'];
  const colorModeEl = document.getElementById('color-mode');
  if (colorModeEl && colorModeVal !== undefined) {
    colorModeEl.value = colorModeVal;
    let mode = 0;
    if (colorModeVal === 'original') mode = 0;
    else if (colorModeVal === 'greyscale') mode = 1;
    else if (colorModeVal === 'depth-gradient') mode = 2;
    else if (colorModeVal === 'monochrome') mode = 3;
    shaderUniforms.uColorMode.value = mode;
    const tintWrapper = document.getElementById('monochrome-picker-wrapper');
    if (tintWrapper) tintWrapper.style.display = mode === 3 ? 'flex' : 'none';
  }

  const pointShapeVal = kf.params['point-shape'];
  const pointShapeEl = document.getElementById('point-shape');
  if (pointShapeEl && pointShapeVal !== undefined) {
    pointShapeEl.value = pointShapeVal;
    shaderUniforms.uPointShape.value = parseInt(pointShapeVal);
  }

  const linkColorModeVal = kf.params['link-color-mode'];
  const linkColorModeEl = document.getElementById('link-color-mode');
  if (linkColorModeEl && linkColorModeVal !== undefined) {
    linkColorModeEl.value = linkColorModeVal;
    let mode = 0;
    if (linkColorModeVal === 'match-particles') mode = 0;
    else if (linkColorModeVal === 'tint') mode = 1;
    else if (linkColorModeVal === 'depth-gradient') mode = 2;
    shaderUniforms.uLinkColorMode.value = mode;
    const linkTintWrapper = document.getElementById('link-tint-picker-wrapper');
    if (linkTintWrapper) linkTintWrapper.style.display = mode === 1 ? 'flex' : 'none';
  }

  // 3. Apply color pickers directly
  const monochromeColorVal = kf.params['monochrome-color'];
  const monochromeColorEl = document.getElementById('monochrome-color');
  if (monochromeColorEl && monochromeColorVal !== undefined) {
    monochromeColorEl.value = monochromeColorVal;
    shaderUniforms.uTintColor.value.set(monochromeColorVal);
  }

  const shadowTintVal = kf.params['shadow-tint'];
  const shadowTintEl = document.getElementById('shadow-tint');
  if (shadowTintEl && shadowTintVal !== undefined) {
    shadowTintEl.value = shadowTintVal;
    shaderUniforms.uShadowTint.value.set(shadowTintVal);
  }

  const highlightTintVal = kf.params['highlight-tint'];
  const highlightTintEl = document.getElementById('highlight-tint');
  if (highlightTintEl && highlightTintVal !== undefined) {
    highlightTintEl.value = highlightTintVal;
    shaderUniforms.uHighlightTint.value.set(highlightTintVal);
  }

  const linkTintColorVal = kf.params['link-tint-color'];
  const linkTintColorEl = document.getElementById('link-tint-color');
  if (linkTintColorEl && linkTintColorVal !== undefined) {
    linkTintColorEl.value = linkTintColorVal;
    shaderUniforms.uLinkTintColor.value.set(linkTintColorVal);
  }

  // 4. Apply non-tweened grid resolution (res-step)
  const resStep = document.getElementById('res-step');
  if (resStep && kf.params['res-step'] !== undefined) {
    const currentVal = parseFloat(resStep.value);
    const targetVal = kf.params['res-step'];
    if (currentVal !== targetVal) {
      resStep.value = targetVal;
      const disp = document.getElementById('res-step-val');
      if (disp) disp.innerText = `${targetVal}px`;
      buildParticles();
    }
  }

  // 5. Apply non-tweened link distance (link-max-dist)
  const linkMaxDist = document.getElementById('link-max-dist');
  if (linkMaxDist && kf.params['link-max-dist'] !== undefined) {
    const currentVal = parseFloat(linkMaxDist.value);
    const targetVal = kf.params['link-max-dist'];
    if (currentVal !== targetVal) {
      linkMaxDist.value = targetVal;
      const disp = document.getElementById('link-max-dist-val');
      if (disp) disp.innerText = `${targetVal}`;
      buildLines();
    }
  }
}

function stopTimeline() {
  if (window.customTimelineTl) {
    window.customTimelineTl.kill();
    window.customTimelineTl = null;
  }
  window.customTimelinePlaying = false;
  if (controls) controls.enableZoom = true;
  
  const playBtn = document.getElementById('btn-play-timeline');
  if (playBtn) {
    playBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Play Path
    `;
    playBtn.classList.remove('btn-active');
  }
}

function clearTimeline() {
  customKeyframes = [];
  stopTimeline();
  const hud = document.getElementById('timeline-hud');
  if (hud) {
    hud.innerText = '0 Keyframes Captured';
  }
}

function playTimeline() {
  if (customKeyframes.length < 2) {
    alert('Add at least 2 keyframes to play a path.');
    return;
  }
  
  stopTimeline(); // Stop any existing play first
  
  const speed = parseFloat(document.getElementById('timeline-speed').value) || 4.0;
  
  if (controls) controls.enableZoom = false;
  window.customTimelinePlaying = true;
  
  const playBtn = document.getElementById('btn-play-timeline');
  if (playBtn) {
    playBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16"/></svg>
      Stop Path
    `;
    playBtn.classList.add('btn-active');
  }
  
  // 1. Jump camera immediately to the starting keyframe position & fov
  const kfStart = customKeyframes[0];
  camera.position.set(kfStart.px, kfStart.py, kfStart.pz);
  if (controls) controls.target.set(kfStart.tx, kfStart.ty, kfStart.tz);
  camera.fov = kfStart.fov;
  camera.updateProjectionMatrix();
  
  // Apply keyframe 0 parameter state immediately
  applyKeyframeParameters(kfStart);

  // Define the set of sliders we want to tween smoothly
  const tweenableSliderIds = [
    'point-size', 'model-scale', 'depth-scale', 
    'scatter-amp', 'scatter-freq', 'scatter-speed', 
    'point-opacity', 'alpha-threshold', 
    'exposure', 'contrast', 'saturation', 'tint-mix', 
    'light-angle', 'drift-amp', 'drift-speed', 
    'organic-field-strength', 'organic-field-speed', 
    'bloom-strength', 'bloom-radius',
    'link-opacity', 'link-thickness', 'link-glow'
  ];

  // Pre-cache DOM elements, callback functions, and units for the tween updates
  const cachedSliders = tweenableSliderIds.map(id => {
    const input = document.getElementById(id);
    const display = document.getElementById(`${id}-val`);
    const sliderInfo = sliders.find(s => s.id === id);
    return {
      id,
      input,
      display,
      callback: sliderInfo ? sliderInfo.callback : null,
      unit: sliderInfo ? sliderInfo.unit : ''
    };
  });

  // 2. Setup initial tweenState using keyframe 0 parameters
  const tweenState = {};
  cachedSliders.forEach(item => {
    tweenState[item.id] = kfStart.params[item.id] !== undefined ? kfStart.params[item.id] : (item.input ? parseFloat(item.input.value) : 0);
  });

  window.customTimelineTl = gsap.timeline({
    onComplete: () => {
      stopTimeline();
    }
  });
  
  // 3. Add camera & parameter tweens for each segment in sequence
  for (let i = 1; i < customKeyframes.length; i++) {
    const kfPrev = customKeyframes[i - 1];
    const kfTarget = customKeyframes[i];
    const startTime = (i - 1) * speed;
    
    // Camera position & target tween
    window.customTimelineTl.to(camera.position, {
      x: kfTarget.px,
      y: kfTarget.py,
      z: kfTarget.pz,
      duration: speed,
      ease: 'power2.inOut'
    }, startTime);
    
    if (controls) {
      window.customTimelineTl.to(controls.target, {
        x: kfTarget.tx,
        y: kfTarget.ty,
        z: kfTarget.tz,
        duration: speed,
        ease: 'power2.inOut'
      }, startTime);
    }
    
    // FOV tween
    window.customTimelineTl.to(camera, {
      fov: kfTarget.fov,
      duration: speed,
      ease: 'power2.inOut',
      onUpdate: () => camera.updateProjectionMatrix()
    }, startTime);

    // Build targets object for sliders
    const targetParams = {};
    cachedSliders.forEach(item => {
      targetParams[item.id] = kfTarget.params[item.id] !== undefined ? kfTarget.params[item.id] : (item.input ? parseFloat(item.input.value) : 0);
    });

    let frameCounter = 0;

    // Parameter tween (smooth morphing)
    window.customTimelineTl.to(tweenState, {
      ...targetParams,
      duration: speed,
      ease: 'power2.inOut',
      onStart: () => {
        // Apply instant checkboxes/flags/res-step of the start keyframe of this segment
        applyKeyframeParameters(customKeyframes[i - 1]);
      },
      onUpdate: () => {
        const updateDOM = (frameCounter++ % 3 === 0);
        // Update DOM sliders, text displays, and execute uniforms callbacks
        for (let j = 0; j < cachedSliders.length; j++) {
          const item = cachedSliders[j];
          const val = tweenState[item.id];
          
          if (item.callback) {
            item.callback(val);
          }
          
          if (updateDOM && item.input) {
            const currentVal = parseFloat(item.input.value);
            if (Math.abs(currentVal - val) > 0.0001) {
              item.input.value = val;
              
              if (item.display) {
                if (item.id === 'model-scale' || item.id === 'drift-amp' || item.id === 'light-angle') {
                  item.display.innerText = `${Math.round(val)}${item.unit}`;
                } else {
                  item.display.innerText = `${val.toFixed(2)}${item.unit}`;
                }
              }
            }
          }
        }
      },
      onComplete: () => {
        // Securely apply target keyframe parameter boundaries
        applyKeyframeParameters(kfTarget);
        
        // Force sync final DOM slider states at the end of the segment
        for (let j = 0; j < cachedSliders.length; j++) {
          const item = cachedSliders[j];
          const val = tweenState[item.id];
          if (item.input) {
            item.input.value = val;
            if (item.display) {
              if (item.id === 'model-scale' || item.id === 'drift-amp' || item.id === 'light-angle') {
                item.display.innerText = `${Math.round(val)}${item.unit}`;
              } else {
                item.display.innerText = `${val.toFixed(2)}${item.unit}`;
              }
            }
          }
        }
      }
    }, startTime);
  }
}

// --- User Interaction Listeners ---
function setupEventListeners() {
  // Collapse/Expand UI panel
  const toggleBtn = document.getElementById('ui-toggle');
  const controlPanel = document.getElementById('control-panel');
  
  const toggleUI = () => {
    uiCollapsed = !uiCollapsed;
    if (uiCollapsed) {
      controlPanel.classList.add('collapsed');
      toggleBtn.title = "Expand Panel";
    } else {
      controlPanel.classList.remove('collapsed');
      toggleBtn.title = "Collapse Panel";
    }
  };
  toggleBtn.addEventListener('click', toggleUI);

  // Hotkey Bindings
  window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === 'h') {
      toggleUI();
    } else if (key === 'r') {
      resetCamera();
    }
  });

  // Slider change handlers with visual displays updates
  sliders = [
    { id: 'res-step', unit: 'px', callback: buildParticles },
    { id: 'point-size', unit: '', callback: (v) => { shaderUniforms.uPointSize.value = v; } },
    { id: 'model-scale', unit: '', callback: (v) => { shaderUniforms.uModelScale.value = v; } },
    { id: 'depth-scale', unit: '', callback: (v) => { shaderUniforms.uDepthScale.value = v; } },
    { id: 'scatter-amp', unit: '', callback: (v) => { shaderUniforms.uScatterAmp.value = v; } },
    { id: 'scatter-freq', unit: '', callback: (v) => { shaderUniforms.uScatterFreq.value = v; } },
    { id: 'scatter-speed', unit: '', callback: (v) => { shaderUniforms.uScatterSpeed.value = v; } },
    { id: 'point-opacity', unit: '', callback: (v) => { shaderUniforms.uPointOpacity.value = v; } },
    { id: 'alpha-threshold', unit: '', callback: (v) => { shaderUniforms.uAlphaThreshold.value = v; } },
    { id: 'exposure', unit: '', callback: (v) => { shaderUniforms.uExposure.value = v; } },
    { id: 'contrast', unit: '', callback: (v) => { shaderUniforms.uContrast.value = v; } },
    { id: 'saturation', unit: '', callback: (v) => { shaderUniforms.uSaturation.value = v; } },
    { id: 'tint-mix', unit: '', callback: (v) => { shaderUniforms.uTintMix.value = v; } },
    { id: 'light-angle', unit: '°', callback: (v) => { updateLightDirection(v); } },
    { id: 'drift-amp', unit: '', callback: (v) => { driftAmp = v; } },
    { id: 'drift-speed', unit: 'x', callback: (v) => { driftSpeed = v; } },
    { id: 'organic-field-strength', unit: '', callback: (v) => { shaderUniforms.uOrganicFieldStrength.value = v; } },
    { id: 'organic-field-speed', unit: '', callback: (v) => { shaderUniforms.uOrganicFieldSpeed.value = v; } },
    { id: 'bloom-strength', unit: '', callback: (v) => { if (bloomPass) bloomPass.strength = v; } },
    { id: 'bloom-radius', unit: '', callback: (v) => { if (bloomPass) bloomPass.radius = v; } },
    { id: 'link-opacity', unit: '', callback: (v) => { shaderUniforms.uLinkOpacity.value = v; } },
    { id: 'link-max-dist', unit: '', callback: (v) => { buildLines(); } },
    { id: 'link-thickness', unit: 'px', callback: (v) => { shaderUniforms.linewidth.value = v; } },
    { id: 'link-glow', unit: '', callback: (v) => { shaderUniforms.uLinkGlow.value = v; } },
    { id: 'timeline-speed', unit: 's', callback: () => {} }
  ];

  sliders.forEach(slider => {
    const input = document.getElementById(slider.id);
    const display = document.getElementById(`${slider.id}-val`);

    if (input) {
      input.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (display) display.innerText = `${val}${slider.unit}`;
        
        // Fast update for uniforms only
        if (slider.id !== 'res-step' && slider.id !== 'link-max-dist') {
          slider.callback(val);
        }
      });

      // Slow update for heavy calculations runs only when user releases mouse
      if (slider.id === 'res-step' || slider.id === 'link-max-dist') {
        input.addEventListener('change', (e) => {
          const val = parseFloat(e.target.value);
          slider.callback(val);
        });
      }
    }

    if (display && input) {
      display.style.cursor = 'text';
      display.title = 'Double click to edit manually';
      display.addEventListener('dblclick', () => {
        const currentVal = input.value;
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.value = currentVal;
        inputField.step = input.step || "0.01";
        inputField.style.width = '60px';
        inputField.style.background = 'rgba(0,0,0,0.5)';
        inputField.style.color = '#fff';
        inputField.style.border = '1px solid rgba(255,255,255,0.3)';
        inputField.style.borderRadius = '4px';
        inputField.style.padding = '2px';
        inputField.style.fontFamily = 'inherit';
        inputField.style.fontSize = 'inherit';
        inputField.style.textAlign = 'right';
        
        display.innerHTML = '';
        display.appendChild(inputField);
        inputField.focus();

        const finishEditing = () => {
          let newVal = parseFloat(inputField.value);
          if (isNaN(newVal)) newVal = parseFloat(input.value);
          
          if (input.min !== "") newVal = Math.max(parseFloat(input.min), newVal);
          if (input.max !== "") newVal = Math.min(parseFloat(input.max), newVal);
          
          input.value = newVal;
          display.innerText = `${newVal}${slider.unit}`;
          slider.callback(newVal);
        };

        inputField.addEventListener('blur', finishEditing);
        inputField.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            inputField.blur();
          }
        });
      });
    }
  });

  // Checkboxes
  const attenuation = document.getElementById('size-attenuation');
  attenuation.addEventListener('change', (e) => {
    shaderUniforms.uSizeAttenuation.value = e.target.checked;
  });

  const autoOrbit = document.getElementById('enable-auto-orbit');
  autoOrbit.addEventListener('change', (e) => {
    enableAutoOrbit = e.target.checked;
  });

  const enableShading = document.getElementById('enable-shading');
  enableShading.addEventListener('change', (e) => {
    shaderUniforms.uEnableShading.value = e.target.checked;
  });

  const enableOrganicFloat = document.getElementById('enable-organic-float');
  if (enableOrganicFloat) {
    enableOrganicFloat.addEventListener('change', (e) => {
      shaderUniforms.uEnableFloating.value = e.target.checked;
    });
  }

  const enableSplitToning = document.getElementById('enable-split-toning');
  const splitToningOptions = document.getElementById('split-toning-options');
  enableSplitToning.addEventListener('change', (e) => {
    shaderUniforms.uEnableSplitToning.value = e.target.checked;
    splitToningOptions.style.display = e.target.checked ? 'block' : 'none';
  });

  // Select dropdowns
  const depthSource = document.getElementById('depth-source');
  depthSource.addEventListener('change', () => {
    buildParticles(); // Recalculate gradients attribute
  });

  const colorMode = document.getElementById('color-mode');
  const tintWrapper = document.getElementById('monochrome-picker-wrapper');
  
  colorMode.addEventListener('change', (e) => {
    const val = e.target.value;
    let mode = 0;
    if (val === 'original') mode = 0;
    else if (val === 'greyscale') mode = 1;
    else if (val === 'depth-gradient') mode = 2;
    else if (val === 'monochrome') mode = 3;

    shaderUniforms.uColorMode.value = mode;
    tintWrapper.style.display = mode === 3 ? 'flex' : 'none';
  });

  const pointShape = document.getElementById('point-shape');
  pointShape.addEventListener('change', (e) => {
    shaderUniforms.uPointShape.value = parseInt(e.target.value);
  });

  // Color pickers
  const tintPicker = document.getElementById('monochrome-color');
  tintPicker.addEventListener('input', (e) => {
    shaderUniforms.uTintColor.value.set(e.target.value);
  });

  const shadowTintPicker = document.getElementById('shadow-tint');
  shadowTintPicker.addEventListener('input', (e) => {
    shaderUniforms.uShadowTint.value.set(e.target.value);
  });

  const highlightTintPicker = document.getElementById('highlight-tint');
  highlightTintPicker.addEventListener('input', (e) => {
    shaderUniforms.uHighlightTint.value.set(e.target.value);
  });

  // Export Buttons
  document.getElementById('btn-export-obj').addEventListener('click', exportOBJ);
  document.getElementById('btn-export-csv').addEventListener('click', exportCSV);
  document.getElementById('btn-export-json').addEventListener('click', exportJSON);
  document.getElementById('btn-export-png').addEventListener('click', exportPNG);
  document.getElementById('btn-record-video')?.addEventListener('click', () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  });

  // Drag and Drop files
  const dropzone = document.getElementById('dropzone');
  
  dropzone.addEventListener('click', () => {
    document.getElementById('file-input').click();
  });

  document.getElementById('file-input').addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleUploadedFile(files[0]);
    }
  });

  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  window.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
  });

  window.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUploadedFile(files[0]);
    }
  });

  // Camera preset buttons
  document.getElementById('cam-reset')?.addEventListener('click', () => setCameraPreset('reset'));
  document.getElementById('cam-iso')?.addEventListener('click', () => setCameraPreset('iso'));
  document.getElementById('cam-side')?.addEventListener('click', () => setCameraPreset('side'));
  document.getElementById('cam-top')?.addEventListener('click', () => setCameraPreset('top'));
  document.getElementById('cam-macro')?.addEventListener('click', () => setCameraPreset('macro'));
  document.getElementById('cam-cinematic')?.addEventListener('click', () => setCameraPreset('cinematic'));

  // Custom Timeline buttons
  document.getElementById('btn-add-keyframe')?.addEventListener('click', addKeyframe);
  document.getElementById('btn-clear-timeline')?.addEventListener('click', clearTimeline);
  document.getElementById('btn-play-timeline')?.addEventListener('click', () => {
    if (!window.customTimelinePlaying) {
      playTimeline();
    } else {
      stopTimeline();
    }
  });

  // Global preset buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const presetName = e.target.getAttribute('data-preset');
      applyPreset(presetName);
    });
  });

  // Sync controls values to uniforms initially
initUniformsFromDOM();

// --- Link UI listeners ---

const enableLinks = document.getElementById('enable-links');
enableLinks?.addEventListener('change', (e) => {
  if (lineSystem) {
    lineSystem.visible = e.target.checked;
  } else if (e.target.checked) {
    buildLines();
  }
});

const linkColorMode = document.getElementById('link-color-mode');
linkColorMode?.addEventListener('change', (e) => {
  const val = e.target.value;
  let mode = 0;
  if (val === 'match-particles') mode = 0;
  else if (val === 'tint') mode = 1;
  else if (val === 'depth-gradient') mode = 2;
  shaderUniforms.uLinkColorMode.value = mode;
  const linkTintWrapper = document.getElementById('link-tint-picker-wrapper');
  if (linkTintWrapper) linkTintWrapper.style.display = mode === 1 ? 'flex' : 'none';
});

const linkTintPicker = document.getElementById('link-tint-color');
linkTintPicker?.addEventListener('input', (e) => {
  shaderUniforms.uLinkTintColor.value.set(e.target.value);
});
  initUniformsFromDOM();
}

function handleUploadedFile(file) {
  if (!file.type.match('image.*')) {
    alert("Please select a valid image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      processLoadedImage(img, file.name);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Run engine
init();
