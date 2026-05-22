import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- State Variables ---
let scene, camera, renderer, controls;
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
let driftAmp = 10;
let driftSpeed = 0.5;

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
  uLinkTintColor: { value: new THREE.Color('#ffffff') }
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

    // Apply per-particle scatter/jitter
    if (uScatterAmp > 0.0) {
      vec3 seedX = position + vec3(uTime * uScatterSpeed, 11.1, 17.3);
      vec3 seedY = position + vec3(uTime * uScatterSpeed, 23.4, 31.8);
      vec3 seedZ = position + vec3(uTime * uScatterSpeed, 47.9, 93.1);
      
      vec3 offset = vec3(
        hash(seedX) - 0.5,
        hash(seedY) - 0.5,
        hash(seedZ) - 0.5
      ) * uScatterAmp;
      displaced += offset;
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

  attribute float pixelVal;
  attribute vec3 originalColor;
  attribute vec2 depthGradient;

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;

  // GPU Noise Utilities
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.1, 0.1));
    p += dot(p, p.yzx + 33.33);
    return fract(p.x * p.y * p.z);
  }

  void main() {
    vColor = originalColor;

    // Apply scale to X and Y coordinates and displace Z along depth modulator
    vec3 displaced = vec3(position.x * uModelScale, position.y * uModelScale, position.z);
    displaced.z += pixelVal * uDepthScale;

    // Apply per-particle scatter/jitter
    if (uScatterAmp > 0.0) {
      vec3 seedX = position + vec3(uTime * uScatterSpeed, 11.1, 17.3);
      vec3 seedY = position + vec3(uTime * uScatterSpeed, 23.4, 31.8);
      vec3 seedZ = position + vec3(uTime * uScatterSpeed, 47.9, 93.1);
      
      vec3 offset = vec3(
        hash(seedX) - 0.5,
        hash(seedY) - 0.5,
        hash(seedZ) - 0.5
      ) * uScatterAmp;
      displaced += offset;
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

  varying vec3 vColor;
  varying float vZPosition;
  varying vec3 vNormal;

  void main() {
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

    gl_FragColor = vec4(clamp(gradedColor, 0.0, 1.0), clamp(uLinkOpacity, 0.0, 1.0));
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

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 2000;
  controls.minDistance = 10;
  controls.addEventListener('start', () => { isAnimatingCam = false; });

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
  }
}

function setCameraPreset(preset) {
  if (camera) {
    if (preset === 'reset') targetCamPos.set(0, 0, 320);
    if (preset === 'iso') targetCamPos.set(250, 150, 250);
    if (preset === 'side') targetCamPos.set(350, 0, 0);
    targetCamLook.set(0, 0, 0);
    isAnimatingCam = true;
  }
}

// Window resize handler
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
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

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('originalColor', new THREE.Float32BufferAttribute(lineColors, 3));
  lineGeometry.setAttribute('pixelVal', new THREE.Float32BufferAttribute(linePixelVals, 1));
  lineGeometry.setAttribute('depthGradient', new THREE.Float32BufferAttribute(lineDepthGradients, 2));

  const lineMaterial = new THREE.ShaderMaterial({
    vertexShader: lineVertexShader,
    fragmentShader: lineFragmentShader,
    uniforms: shaderUniforms,
    transparent: true,
    depthTest: true,
    depthWrite: false, // Don't write depth to avoid sorting issues with fine lines
    blending: THREE.AdditiveBlending // Additive blending for glowing mesh appearance
  });

  lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
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

  if (isAnimatingCam) {
    camera.position.lerp(targetCamPos, 0.04);
    controls.target.lerp(targetCamLook, 0.04);
    if (camera.position.distanceTo(targetCamPos) < 1.0) {
      isAnimatingCam = false;
    }
  } else if (driftAmp > 0) {
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
  if (renderer && scene && camera) renderer.render(scene, camera);

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
  if (!renderer) return;
  
  // Render immediately to ensure current buffer state is captured
  renderer.render(scene, camera);
  
  const dataURL = renderer.domElement.toDataURL('image/png');
  const a = document.createElement('a');
  const name = currentImage.name.split('.')[0];
  a.href = dataURL;
  a.download = `${name}_render.png`;
  a.click();
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
    { id: 'link-max-dist', unit: '' }
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
  const sliders = [
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
    { id: 'drift-speed', unit: 'x', callback: (v) => { driftSpeed = v; } }
  ];

  sliders.forEach(slider => {
    const input = document.getElementById(slider.id);
    const display = document.getElementById(`${slider.id}-val`);

    input.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (display) display.innerText = `${val}${slider.unit}`;
      slider.callback(val);
    });
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
const linkOpacity = document.getElementById('link-opacity');
linkOpacity?.addEventListener('input', (e) => {
  const v = parseFloat(e.target.value);
  shaderUniforms.uLinkOpacity.value = v;
  const disp = document.getElementById('link-opacity-val');
  if (disp) disp.innerText = v.toFixed(2);
  buildLines();
});

const linkMaxDist = document.getElementById('link-max-dist');
linkMaxDist?.addEventListener('input', (e) => {
  const disp = document.getElementById('link-max-dist-val');
  if (disp) disp.innerText = `${e.target.value}`;
  buildLines();
});

const enableLinks = document.getElementById('enable-links');
enableLinks?.addEventListener('change', (e) => {
  buildLines();
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
  buildLines();
});

const linkTintPicker = document.getElementById('link-tint-color');
linkTintPicker?.addEventListener('input', (e) => {
  shaderUniforms.uLinkTintColor.value.set(e.target.value);
  buildLines();
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
