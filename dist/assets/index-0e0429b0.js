(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="147",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,sl=1,Th=2,Yc=1,Eh=2,zr=3,mr=0,pn=1,ei=2,si=0,Li=1,Us=2,al=3,ol=4,Ch=5,ar=100,Ah=101,Ph=102,ll=103,cl=104,Lh=200,Dh=201,Rh=202,Ih=203,jc=204,Zc=205,Fh=206,zh=207,Oh=208,Bh=209,Nh=210,Uh=0,kh=1,Gh=2,Qa=3,Vh=4,Hh=5,Wh=6,qh=7,$c=0,Xh=1,Yh=2,Hn=0,jh=1,Zh=2,$h=3,Kh=4,Jh=5,Kc=300,gr=301,_r=302,eo=303,to=304,Ks=306,no=1e3,yn=1001,io=1002,Ft=1003,ul=1004,hl=1005,ln=1006,Qh=1007,Js=1008,Bi=1009,ed=1010,td=1011,Jc=1012,nd=1013,Ci=1014,Ai=1015,Vr=1016,id=1017,rd=1018,hr=1020,sd=1021,ad=1022,bn=1023,od=1024,ld=1025,Di=1026,xr=1027,cd=1028,ud=1029,hd=1030,dd=1031,fd=1033,oa=33776,la=33777,ca=33778,ua=33779,dl=35840,fl=35841,pl=35842,ml=35843,pd=36196,gl=37492,_l=37496,xl=37808,vl=37809,yl=37810,bl=37811,Sl=37812,Ml=37813,wl=37814,Tl=37815,El=37816,Cl=37817,Al=37818,Pl=37819,Ll=37820,Dl=37821,Rl=36492,Ni=3e3,Ke=3001,md=3200,gd=3201,_d=0,xd=1,Mn="srgb",Hr="srgb-linear",ha=7680,vd=519,ro=35044,Il="300 es",so=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,Fl=180/Math.PI;function ai(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[a&255]+wt[a>>8&255]+wt[a>>16&255]+wt[a>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function zt(a,e,t){return Math.max(e,Math.min(t,a))}function yd(a,e){return(a%e+e)%e}function fa(a,e,t){return(1-t)*a+t*e}function zl(a){return(a&a-1)===0&&a!==0}function ao(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ti(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function je(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],S=i[1],y=i[4],b=i[7],v=i[2],P=i[5],C=i[8];return r[0]=o*d+s*S+l*v,r[3]=o*p+s*y+l*P,r[6]=o*_+s*b+l*C,r[1]=c*d+u*S+h*v,r[4]=c*p+u*y+h*P,r[7]=c*_+u*b+h*C,r[2]=f*d+m*S+g*v,r[5]=f*p+m*y+g*P,r[8]=f*_+m*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,f=s*l-u*r,m=c*r-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Zt;function Qc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ks(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ri(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Is(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const ma={[Mn]:{[Hr]:Ri},[Hr]:{[Mn]:Is}},At={legacyMode:!0,get workingColorSpace(){return Hr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(ma[e]&&ma[e][t]!==void 0){const n=ma[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},_n={h:0,s:0,l:0},as={h:0,s:0,l:0};function ga(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function os(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=yd(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ga(o,r,e+1/3),this.g=ga(o,r,e),this.b=ga(o,r,e-1/3)}return At.toWorkingColorSpace(this,i),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,At.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,At.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,At.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,At.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Mn){const n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return At.fromWorkingColorSpace(os(this,ut),e),zt(ut.r*255,0,255)<<16^zt(ut.g*255,0,255)<<8^zt(ut.b*255,0,255)<<0}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(os(this,ut),t);const n=ut.r,i=ut.g,r=ut.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(os(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=Mn){return At.fromWorkingColorSpace(os(this,ut),e),e!==Mn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=n,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(as);const n=fa(_n.h,as.h,t),i=fa(_n.s,as.s,t),r=fa(_n.l,as.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=eu;let qi;class tu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=ks("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nu{constructor(e=null){this.isSource=!0,this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(_a(i[o].image)):r.push(_a(i[o]))}else r=_a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?tu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class Jt extends ki{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=yn,i=yn,r=ln,o=Js,s=bn,l=Bi,c=Jt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ai(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Kc;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,v=(_+1)/2,P=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return y>b&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=C/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=P/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=C/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sn extends ki{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iu extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sd extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],d=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),P=Math.atan2(v,_*S);p=Math.sin(p*P)/v,s=Math.sin(s*P)/v}const b=s*S;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,h=h*p+d*b,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-s*m,e[t+2]=c*g+u*m+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+i*c-r*l,this._y=i*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-i*s,this._w=o*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-s*i;return this.x=c*l+f*-r+u*-s-h*-o,this.y=u*l+f*-o+h*-r-c*-s,this.z=h*l+f*-s+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new O,Ol=new Ui;class Gi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)_i.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox),va.applyMatrix4(e.matrixWorld),this.union(va);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ls.subVectors(this.max,Pr),Xi.subVectors(e.a,Pr),Yi.subVectors(e.b,Pr),ji.subVectors(e.c,Pr),Yn.subVectors(Yi,Xi),jn.subVectors(ji,Yi),xi.subVectors(Xi,ji);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!ya(t,Xi,Yi,ji,ls)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Xi,Yi,ji,ls))?!1:(cs.crossVectors(Yn,jn),t=[cs.x,cs.y,cs.z],ya(t,Xi,Yi,ji,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new O,new O,new O,new O,new O,new O,new O,new O],_i=new O,va=new Gi,Xi=new O,Yi=new O,ji=new O,Yn=new O,jn=new O,xi=new O,Pr=new O,ls=new O,cs=new O,vi=new O;function ya(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){vi.fromArray(a,r);const s=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Md=new Gi,Lr=new O,ba=new O;class es{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(ba)),this.expandByPoint(Lr.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new O,Sa=new O,us=new O,Zn=new O,Ma=new O,hs=new O,wa=new O;class ru{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.direction).multiplyScalar(t).add(this.origin),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(us),s=Zn.dot(this.direction),l=-Zn.dot(us),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-s,f=o*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*s)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(us).multiplyScalar(f).add(Sa),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),hs.subVectors(n,e),wa.crossVectors(Ma,hs);let o=this.direction.dot(wa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=s*this.direction.dot(hs.crossVectors(Zn,hs));if(l<0)return null;const c=s*this.direction.dot(Ma.cross(Zn));if(c<0||l+c>o)return null;const u=-s*Zn.dot(wa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=d-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wd,e,Td)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(n,qt),$n.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(n,qt)),$n.normalize(),ds.crossVectors(qt,$n),i[0]=$n.x,i[4]=ds.x,i[8]=qt.x,i[1]=$n.y,i[5]=ds.y,i[9]=qt.y,i[2]=$n.z,i[6]=ds.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],S=n[3],y=n[7],b=n[11],v=n[15],P=i[0],C=i[4],x=i[8],M=i[12],D=i[1],H=i[5],J=i[9],F=i[13],T=i[2],R=i[6],B=i[10],V=i[14],z=i[3],K=i[7],X=i[11],k=i[15];return r[0]=o*P+s*D+l*T+c*z,r[4]=o*C+s*H+l*R+c*K,r[8]=o*x+s*J+l*B+c*X,r[12]=o*M+s*F+l*V+c*k,r[1]=u*P+h*D+f*T+m*z,r[5]=u*C+h*H+f*R+m*K,r[9]=u*x+h*J+f*B+m*X,r[13]=u*M+h*F+f*V+m*k,r[2]=g*P+d*D+p*T+_*z,r[6]=g*C+d*H+p*R+_*K,r[10]=g*x+d*J+p*B+_*X,r[14]=g*M+d*F+p*V+_*k,r[3]=S*P+y*D+b*T+v*z,r[7]=S*C+y*H+b*R+v*K,r[11]=S*x+y*J+b*B+v*X,r[15]=S*M+y*F+b*V+v*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*o*h+n*o*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*h+t*s*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],S=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,y=g*f*c-u*p*c-g*l*m+o*p*m+u*l*_-o*f*_,b=u*d*c-g*h*c+g*s*m-o*d*m-u*s*_+o*h*_,v=g*h*l-u*d*l-g*s*f+o*d*f+u*s*p-o*h*p,P=t*S+n*y+i*b+r*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=S*C,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,e[4]=y*C,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*C,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*_-t*l*_)*C,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*C,e[8]=b*C,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*C,e[10]=(o*d*r-g*s*r+g*n*c-t*d*c-o*n*_+t*s*_)*C,e[11]=(u*s*r-o*h*r-u*n*c+t*h*c+o*n*m-t*s*m)*C,e[12]=v*C,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*C,e[14]=(g*s*i-o*d*i-g*n*l+t*d*l+o*n*p-t*s*p)*C,e[15]=(o*h*i-u*s*i+u*n*l-t*h*l-o*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*o,0,c*l-i*s,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,h=s+s,f=r*c,m=r*u,g=r*h,d=o*u,p=o*h,_=s*h,S=l*c,y=l*u,b=l*h,v=n.x,P=n.y,C=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+b)*v,i[2]=(g-y)*v,i[3]=0,i[4]=(m-b)*P,i[5]=(1-(f+_))*P,i[6]=(p+S)*P,i[7]=0,i[8]=(g+y)*C,i[9]=(p-S)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),s=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/r,u=1/o,h=1/s;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new O,xn=new xt,wd=new O(0,0,0),Td=new O(1,1,1),$n=new O,ds=new O,qt=new O,Bl=new xt,Nl=new Ui;class ts{constructor(e=0,t=0,n=0,i=ts.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ts.DefaultOrder="XYZ";ts.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const Ul=new O,$i=new Ui,On=new xt,fs=new O,Dr=new O,Cd=new O,Ad=new Ui,kl=new O(1,0,0),Gl=new O(0,1,0),Vl=new O(0,0,1),Pd={type:"added"},Hl={type:"removed"};class Bt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DefaultUp.clone();const e=new O,t=new ts,n=new Ui,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new Zt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DefaultMatrixWorldAutoUpdate,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Dr,fs,this.up):On.lookAt(fs,Dr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(On),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Hl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DefaultUp=new O(0,1,0);Bt.DefaultMatrixAutoUpdate=!0;Bt.DefaultMatrixWorldAutoUpdate=!0;const vn=new O,Bn=new O,Ta=new O,Nn=new O,Ki=new O,Ji=new O,Wl=new O,Ea=new O,Ca=new O,Aa=new O;class Vn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Bn.subVectors(n,t),Ta.subVectors(e,t);const o=vn.dot(vn),s=vn.dot(Bn),l=vn.dot(Ta),c=Bn.dot(Bn),u=Bn.dot(Ta),h=o*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(o*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,Nn),l.set(0,0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(s,Nn.z),l}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Vn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Ki.subVectors(i,n),Ji.subVectors(r,n),Ea.subVectors(e,n);const l=Ki.dot(Ea),c=Ji.dot(Ea);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const u=Ki.dot(Ca),h=Ji.dot(Ca);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ki,o);Aa.subVectors(e,r);const m=Ki.dot(Aa),g=Ji.dot(Aa);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ji,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Wl.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Wl,s);const _=1/(p+d+f);return o=d*_,s=f*_,t.copy(n).addScaledVector(Ki,o).addScaledVector(Ji,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ld=0;class ns extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Li,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jc,this.blendDst=Zc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new O,ps=new Me;class mn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ro,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ro&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class au extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ou extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const sn=new xt,Pa=new Bt,Qi=new O,Xt=new Gi,Rr=new Gi,mt=new O;class nn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?ou:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Rr.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(Xt.min,Rr.min),Xt.expandByPoint(mt),mt.addVectors(Xt.max,Rr.max),Xt.expandByPoint(mt)):(Xt.expandByPoint(Rr.min),Xt.expandByPoint(Rr.max))}Xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)mt.fromBufferAttribute(s,c),l&&(Qi.fromBufferAttribute(e,c),mt.add(Qi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<s;D++)c[D]=new O,u[D]=new O;const h=new O,f=new O,m=new O,g=new Me,d=new Me,p=new Me,_=new O,S=new O;function y(D,H,J){h.fromArray(i,D*3),f.fromArray(i,H*3),m.fromArray(i,J*3),g.fromArray(o,D*2),d.fromArray(o,H*2),p.fromArray(o,J*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const F=1/(d.x*p.y-p.x*d.y);isFinite(F)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(F),S.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(F),c[D].add(_),c[H].add(_),c[J].add(_),u[D].add(S),u[H].add(S),u[J].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,H=b.length;D<H;++D){const J=b[D],F=J.start,T=J.count;for(let R=F,B=F+T;R<B;R+=3)y(n[R+0],n[R+1],n[R+2])}const v=new O,P=new O,C=new O,x=new O;function M(D){C.fromArray(r,D*3),x.copy(C);const H=c[D];v.copy(H),v.sub(C.multiplyScalar(C.dot(H))).normalize(),P.crossVectors(x,H);const F=P.dot(u[D])<0?-1:1;l[D*4]=v.x,l[D*4+1]=v.y,l[D*4+2]=v.z,l[D*4+3]=F}for(let D=0,H=b.length;D<H;++D){const J=b[D],F=J.start,T=J.count;for(let R=F,B=F+T;R<B;R+=3)M(n[R+0]),M(n[R+1]),M(n[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,o=new O,s=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new xt,er=new ru,La=new es,Kn=new O,Jn=new O,Qn=new O,Da=new O,Ra=new O,Ia=new O,ms=new O,gs=new O,_s=new O,xs=new Me,vs=new Me,ys=new Me,Fa=new O,bs=new O;class Pn extends Bt{constructor(e=new nn,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),e.ray.intersectsSphere(La)===!1)||(ql.copy(r).invert(),er.copy(e.ray).applyMatrix4(ql),n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],S=i[_.materialIndex],y=Math.max(_.start,g.start),b=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let v=y,P=b;v<P;v+=3){const C=s.getX(v),x=s.getX(v+1),M=s.getX(v+2);o=Ss(this,S,e,er,l,c,u,h,f,C,x,M),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,S=p;_<S;_+=3){const y=s.getX(_),b=s.getX(_+1),v=s.getX(_+2);o=Ss(this,i,e,er,l,c,u,h,f,y,b,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],S=i[_.materialIndex],y=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=y,P=b;v<P;v+=3){const C=v,x=v+1,M=v+2;o=Ss(this,S,e,er,l,c,u,h,f,C,x,M),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,S=p;_<S;_+=3){const y=_,b=_+1,v=_+2;o=Ss(this,i,e,er,l,c,u,h,f,y,b,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Rd(a,e,t,n,i,r,o,s){let l;if(e.side===pn?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side!==ei,s),l===null)return null;bs.copy(s),bs.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:a}}function Ss(a,e,t,n,i,r,o,s,l,c,u,h){Kn.fromBufferAttribute(i,c),Jn.fromBufferAttribute(i,u),Qn.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(r&&f){ms.set(0,0,0),gs.set(0,0,0),_s.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(Da.fromBufferAttribute(_,c),Ra.fromBufferAttribute(_,u),Ia.fromBufferAttribute(_,h),o?(ms.addScaledVector(Da,p),gs.addScaledVector(Ra,p),_s.addScaledVector(Ia,p)):(ms.addScaledVector(Da.sub(Kn),p),gs.addScaledVector(Ra.sub(Jn),p),_s.addScaledVector(Ia.sub(Qn),p)))}Kn.add(ms),Jn.add(gs),Qn.add(_s)}a.isSkinnedMesh&&(a.boneTransform(c,Kn),a.boneTransform(u,Jn),a.boneTransform(h,Qn));const m=Rd(a,e,t,n,Kn,Jn,Qn,Fa);if(m){s&&(xs.fromBufferAttribute(s,c),vs.fromBufferAttribute(s,u),ys.fromBufferAttribute(s,h),m.uv=Vn.getUV(Fa,Kn,Jn,Qn,xs,vs,ys,new Me)),l&&(xs.fromBufferAttribute(l,c),vs.fromBufferAttribute(l,u),ys.fromBufferAttribute(l,h),m.uv2=Vn.getUV(Fa,Kn,Jn,Qn,xs,vs,ys,new Me));const g={a:c,b:u,c:h,normal:new O,materialIndex:0};Vn.getNormal(Kn,Jn,Qn,g.normal),m.face=g}return m}class is extends nn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function g(d,p,_,S,y,b,v,P,C,x,M){const D=b/C,H=v/x,J=b/2,F=v/2,T=P/2,R=C+1,B=x+1;let V=0,z=0;const K=new O;for(let X=0;X<B;X++){const k=X*H-F;for(let W=0;W<R;W++){const Q=W*D-J;K[d]=Q*S,K[p]=k*y,K[_]=T,c.push(K.x,K.y,K.z),K[d]=0,K[p]=0,K[_]=P>0?1:-1,u.push(K.x,K.y,K.z),h.push(W/C),h.push(1-X/x),V+=1}}for(let X=0;X<x;X++)for(let k=0;k<C;k++){const W=f+k+R*X,Q=f+k+R*(X+1),ee=f+(k+1)+R*(X+1),ie=f+(k+1)+R*X;l.push(W,Q,ie),l.push(Q,ee,ie),z+=6}s.addGroup(m,z,M),m+=z,f+=V}}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(a){const e={};for(let t=0;t<a.length;t++){const n=vr(a[t]);for(const i in n)e[i]=n[i]}return e}function Id(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function lu(a){return a.getRenderTarget()===null&&a.outputEncoding===Ke?Mn:Hr}const Gs={clone:vr,merge:Lt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cu extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends cu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Od extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new cn(tr,nr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new cn(tr,nr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new cn(tr,nr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new cn(tr,nr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new cn(tr,nr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new cn(tr,nr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class uu extends Jt{constructor(e,t,n,i,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:si});r.uniforms.tEquirect.value=t;const o=new Pn(i,r),s=t.minFilter;return t.minFilter===Js&&(t.minFilter=ln),new Od(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const za=new O,Nd=new O,Ud=new Zt;class Si{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ud.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new es,Ms=new O;class hu{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],S=n[14],y=n[15];return t[0].setComponents(s-i,h-l,d-f,y-p).normalize(),t[1].setComponents(s+i,h+l,d+f,y+p).normalize(),t[2].setComponents(s+r,h+c,d+m,y+_).normalize(),t[3].setComponents(s-r,h-c,d-m,y-_).normalize(),t[4].setComponents(s-o,h-u,d-g,y-S).normalize(),t[5].setComponents(s+o,h+u,d+g,y+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ms.x=i.normal.x>0?e.max.x:e.min.x,Ms.y=i.normal.y>0?e.max.y:e.min.y,Ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function kd(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;a.bindBuffer(h,c),m.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:s,update:l}}class Lo extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const S=_*f-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-S,0),d.push(0,0,1),p.push(y/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<s;S++){const y=S+c*_,b=S+c*(_+1),v=S+1+c*(_+1),P=S+1+c*_;m.push(y,b,P),m.push(b,v,P)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(p,2))}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd="vec3 transformed = vec3( position );",jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Df=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,np=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ip=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Np=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Hd,alphatest_pars_fragment:Wd,aomap_fragment:qd,aomap_pars_fragment:Xd,begin_vertex:Yd,beginnormal_vertex:jd,bsdfs:Zd,iridescence_fragment:$d,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:rf,color_pars_vertex:sf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:uf,displacementmap_vertex:hf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,encodings_fragment:pf,encodings_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:xf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Df,envmap_vertex:yf,fog_vertex:bf,fog_pars_vertex:Sf,fog_fragment:Mf,fog_pars_fragment:wf,gradientmap_pars_fragment:Tf,lightmap_fragment:Ef,lightmap_pars_fragment:Cf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Rf,lights_toon_pars_fragment:If,lights_phong_fragment:Ff,lights_phong_pars_fragment:zf,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:Nf,lights_fragment_maps:Uf,lights_fragment_end:kf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Wf,map_fragment:qf,map_pars_fragment:Xf,map_particle_fragment:Yf,map_particle_pars_fragment:jf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:$f,morphcolor_vertex:Kf,morphnormal_vertex:Jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,output_fragment:hp,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:yp,shadowmap_vertex:bp,shadowmask_pars_fragment:Sp,skinbase_vertex:Mp,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Ep,specularmap_fragment:Cp,specularmap_pars_fragment:Ap,tonemapping_fragment:Pp,tonemapping_pars_fragment:Lp,transmission_fragment:Dp,transmission_pars_fragment:Rp,uv_pars_fragment:Ip,uv_pars_vertex:Fp,uv_vertex:zp,uv2_pars_fragment:Op,uv2_pars_vertex:Bp,uv2_vertex:Np,worldpos_vertex:Up,background_vert:kp,background_frag:Gp,backgroundCube_vert:Vp,backgroundCube_frag:Hp,cube_vert:Wp,cube_frag:qp,depth_vert:Xp,depth_frag:Yp,distanceRGBA_vert:jp,distanceRGBA_frag:Zp,equirect_vert:$p,equirect_frag:Kp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:em,meshbasic_frag:tm,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:rm,meshmatcap_frag:sm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:um,meshphysical_frag:hm,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Zt},uv2Transform:{value:new Zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Zt}}},Tn={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Tn.physical={uniforms:Lt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const ws={r:0,b:0,g:0};function ym(a,e,t,n,i,r,o){const s=new Te(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(p,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const b=a.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?d(s,l):y&&y.isColor&&(d(y,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ks)?(u===void 0&&(u=new Pn(new is(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:vr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==y||f!==y.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pn(new Lo(2,2),new Dt({name:"BackgroundMaterial",uniforms:vr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(ws,lu(a)),n.buffers.color.setClear(ws.r,ws.g,ws.b,_,o)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function bm(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(T,R,B,V,z){let K=!1;if(o){const X=d(V,B,R);c!==X&&(c=X,m(c.object)),K=_(T,V,B,z),K&&S(T,V,B,z)}else{const X=R.wireframe===!0;(c.geometry!==V.id||c.program!==B.id||c.wireframe!==X)&&(c.geometry=V.id,c.program=B.id,c.wireframe=X,K=!0)}z!==null&&t.update(z,34963),(K||u)&&(u=!1,x(T,R,B,V),z!==null&&a.bindBuffer(34963,t.get(z).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(T){return n.isWebGL2?a.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?a.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function d(T,R,B){const V=B.wireframe===!0;let z=s[T.id];z===void 0&&(z={},s[T.id]=z);let K=z[R.id];K===void 0&&(K={},z[R.id]=K);let X=K[V];return X===void 0&&(X=p(f()),K[V]=X),X}function p(T){const R=[],B=[],V=[];for(let z=0;z<i;z++)R[z]=0,B[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:V,object:T,attributes:{},index:null}}function _(T,R,B,V){const z=c.attributes,K=R.attributes;let X=0;const k=B.getAttributes();for(const W in k)if(k[W].location>=0){const ee=z[W];let ie=K[W];if(ie===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;X++}return c.attributesNum!==X||c.index!==V}function S(T,R,B,V){const z={},K=R.attributes;let X=0;const k=B.getAttributes();for(const W in k)if(k[W].location>=0){let ee=K[W];ee===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),z[W]=ie,X++}c.attributes=z,c.attributesNum=X,c.index=V}function y(){const T=c.newAttributes;for(let R=0,B=T.length;R<B;R++)T[R]=0}function b(T){v(T,0)}function v(T,R){const B=c.newAttributes,V=c.enabledAttributes,z=c.attributeDivisors;B[T]=1,V[T]===0&&(a.enableVertexAttribArray(T),V[T]=1),z[T]!==R&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,R),z[T]=R)}function P(){const T=c.newAttributes,R=c.enabledAttributes;for(let B=0,V=R.length;B<V;B++)R[B]!==T[B]&&(a.disableVertexAttribArray(B),R[B]=0)}function C(T,R,B,V,z,K){n.isWebGL2===!0&&(B===5124||B===5125)?a.vertexAttribIPointer(T,R,B,z,K):a.vertexAttribPointer(T,R,B,V,z,K)}function x(T,R,B,V){if(n.isWebGL2===!1&&(T.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const z=V.attributes,K=B.getAttributes(),X=R.defaultAttributeValues;for(const k in K){const W=K[k];if(W.location>=0){let Q=z[k];if(Q===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const ee=Q.normalized,ie=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const Ee=Y.buffer,de=Y.type,_e=Y.bytesPerElement;if(Q.isInterleavedBufferAttribute){const le=Q.data,Ce=le.stride,pe=Q.offset;if(le.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)v(W.location+ve,le.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<W.locationSize;ve++)b(W.location+ve);a.bindBuffer(34962,Ee);for(let ve=0;ve<W.locationSize;ve++)C(W.location+ve,ie/W.locationSize,de,ee,Ce*_e,(pe+ie/W.locationSize*ve)*_e)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)v(W.location+le,Q.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<W.locationSize;le++)b(W.location+le);a.bindBuffer(34962,Ee);for(let le=0;le<W.locationSize;le++)C(W.location+le,ie/W.locationSize,de,ee,ie*_e,ie/W.locationSize*le*_e)}}else if(X!==void 0){const ee=X[k];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(W.location,ee);break;case 3:a.vertexAttrib3fv(W.location,ee);break;case 4:a.vertexAttrib4fv(W.location,ee);break;default:a.vertexAttrib1fv(W.location,ee)}}}}P()}function M(){J();for(const T in s){const R=s[T];for(const B in R){const V=R[B];for(const z in V)g(V[z].object),delete V[z];delete R[B]}delete s[T]}}function D(T){if(s[T.id]===void 0)return;const R=s[T.id];for(const B in R){const V=R[B];for(const z in V)g(V[z].object),delete V[z];delete R[B]}delete s[T.id]}function H(T){for(const R in s){const B=s[R];if(B[T.id]===void 0)continue;const V=B[T.id];for(const z in V)g(V[z].object),delete V[z];delete B[T.id]}}function J(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:b,disableUnusedAttributes:P}}function Sm(a,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function s(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=s,this.renderInstances=l}function Mm(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),S=a.getParameter(36349),y=f>0,b=o||e.has("OES_texture_float"),v=y&&b,P=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:P}}function wm(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Si,s=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,y=S*4;let b=_.clippingState||null;l.value=b,b=u(g,f,y,m);for(let v=0;v!==y;++v)b[v]=t[v];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,S=f.matrixWorldInverse;s.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,b=m;y!==d;++y,b+=4)o.copy(h[y]).applyMatrix4(S,s),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Tm(a){let e=new WeakMap;function t(o,s){return s===eo?o.mapping=gr:s===to&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===eo||s===to)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bd(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Do extends cu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,Xl=[.125,.215,.35,.446,.526,.582],Ei=20,Oa=new Do,Yl=new Te;let Ba=null;const Mi=(1+Math.sqrt(5))/2,rr=1/Mi,jl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Mi,rr),new O(0,Mi,-rr),new O(rr,0,Mi),new O(-rr,0,Mi),new O(Mi,rr,0),new O(-Mi,rr,0)];class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Vr,format:bn,encoding:Ni,depthBuffer:!1},i=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=Cm(r,e,t)}return i}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,i){const s=new cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yl),u.toneMapping=Hn,u.autoClear=!1;const m=new Po({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Pn(new is,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Yl),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):S===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const y=this._cubeSize;Ts(i,S*y,_>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===_r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=jl[(i-1)%jl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):Ei;p>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const _=[];let S=0;for(let C=0;C<Ei;++C){const x=C/d,M=Math.exp(-x*x/2);_.push(M),C===0?S+=M:C<p&&(S+=2*M)}for(let C=0;C<_.length;C++)_[C]=_[C]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[i],v=3*b*(i>y-or?i-y+or:0),P=4*(this._cubeSize-b);Ts(t,v,P,3*b,2*b),l.setRenderTarget(t),l.render(h,Oa)}}function Em(a){const e=[],t=[],n=[];let i=a;const r=a-or+1+Xl.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-or?l=Xl[o-a+or-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,S=new Float32Array(d*g*m),y=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,x=P>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];S.set(M,d*g*P),y.set(f,p*g*P);const D=[P,P,P,P,P,P];b.set(D,_*g*P)}const v=new nn;v.setAttribute("position",new mn(S,d)),v.setAttribute("uv",new mn(y,p)),v.setAttribute("faceIndex",new mn(b,_)),e.push(v),i>or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(a,e,t){const n=new Sn(a,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Cm(a,e,t){const n=new Float32Array(Ei),i=new O(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Kl(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jl(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Am(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===eo||l===to,u=l===gr||l===_r;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Zl(a)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Zl(a));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pm(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lm(a,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let y=0,b=S.length;y<b;y+=3){const v=S[y+0],P=S[y+1],C=S[y+2];f.push(v,P,P,C,C,v)}}else{const S=g.array;d=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const v=y+0,P=y+1,C=y+2;f.push(v,P,P,C,C,v)}}const p=new(Qc(f)?ou:au)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Dm(a,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){a.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=a,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Rm(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Im(a,e){return a[0]-e[0]}function Fm(a,e){return Math.abs(e[1])-Math.abs(a[1])}function zm(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new yt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let B=function(){T.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var g=B;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),v===!0&&(D=2),P===!0&&(D=3);let H=u.attributes.position.count*D,J=1;H>e.maxTextureSize&&(J=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*J*4*p),T=new iu(F,H,J,p);T.type=Ai,T.needsUpdate=!0;const R=D*4;for(let V=0;V<p;V++){const z=C[V],K=x[V],X=M[V],k=H*J*4*V;for(let W=0;W<z.count;W++){const Q=W*R;b===!0&&(o.fromBufferAttribute(z,W),F[k+Q+0]=o.x,F[k+Q+1]=o.y,F[k+Q+2]=o.z,F[k+Q+3]=0),v===!0&&(o.fromBufferAttribute(K,W),F[k+Q+4]=o.x,F[k+Q+5]=o.y,F[k+Q+6]=o.z,F[k+Q+7]=0),P===!0&&(o.fromBufferAttribute(X,W),F[k+Q+8]=o.x,F[k+Q+9]=o.y,F[k+Q+10]=o.z,F[k+Q+11]=X.itemSize===4?o.w:1)}}_={count:p,texture:T,size:new Me(H,J)},r.set(u,_),u.addEventListener("dispose",B)}let S=0;for(let b=0;b<m.length;b++)S+=m[b];const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const P=p[v];P[0]=v,P[1]=m[v]}p.sort(Fm);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Im);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const P=s[v],C=P[0],x=P[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),S&&u.getAttribute("morphNormal"+v)!==S[C]&&u.setAttribute("morphNormal"+v,S[C]),i[v]=x,y+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),S&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Om(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const fu=new Jt,pu=new iu,mu=new Sd,gu=new uu,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Cr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Ql[i];if(r===void 0&&(r=new Float32Array(i),Ql[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function ht(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function dt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Qs(a,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Bm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Nm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2fv(this.addr,e),dt(t,e)}}function Um(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;a.uniform3fv(this.addr,e),dt(t,e)}}function km(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4fv(this.addr,e),dt(t,e)}}function Gm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ic.set(n),a.uniformMatrix2fv(this.addr,!1,ic),dt(t,n)}}function Vm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;nc.set(n),a.uniformMatrix3fv(this.addr,!1,nc),dt(t,n)}}function Hm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;tc.set(n),a.uniformMatrix4fv(this.addr,!1,tc),dt(t,n)}}function Wm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function qm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2iv(this.addr,e),dt(t,e)}}function Xm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3iv(this.addr,e),dt(t,e)}}function Ym(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4iv(this.addr,e),dt(t,e)}}function jm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Zm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2uiv(this.addr,e),dt(t,e)}}function $m(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3uiv(this.addr,e),dt(t,e)}}function Km(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4uiv(this.addr,e),dt(t,e)}}function Jm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fu,i)}function Qm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mu,i)}function eg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gu,i)}function tg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pu,i)}function ng(a){switch(a){case 5126:return Bm;case 35664:return Nm;case 35665:return Um;case 35666:return km;case 35674:return Gm;case 35675:return Vm;case 35676:return Hm;case 5124:case 35670:return Wm;case 35667:case 35671:return qm;case 35668:case 35672:return Xm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return Zm;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}function ig(a,e){a.uniform1fv(this.addr,e)}function rg(a,e){const t=Cr(e,this.size,2);a.uniform2fv(this.addr,t)}function sg(a,e){const t=Cr(e,this.size,3);a.uniform3fv(this.addr,t)}function ag(a,e){const t=Cr(e,this.size,4);a.uniform4fv(this.addr,t)}function og(a,e){const t=Cr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function lg(a,e){const t=Cr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function cg(a,e){const t=Cr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function ug(a,e){a.uniform1iv(this.addr,e)}function hg(a,e){a.uniform2iv(this.addr,e)}function dg(a,e){a.uniform3iv(this.addr,e)}function fg(a,e){a.uniform4iv(this.addr,e)}function pg(a,e){a.uniform1uiv(this.addr,e)}function mg(a,e){a.uniform2uiv(this.addr,e)}function gg(a,e){a.uniform3uiv(this.addr,e)}function _g(a,e){a.uniform4uiv(this.addr,e)}function xg(a,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fu,r[o])}function vg(a,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mu,r[o])}function yg(a,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gu,r[o])}function bg(a,e,t){const n=this.cache,i=e.length,r=Qs(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pu,r[o])}function Sg(a){switch(a){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ng(t.type)}}class wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Sg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function rc(a,e){a.seq.push(e),a.map[e.id]=e}function Eg(a,e,t){const n=a.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){rc(t,c===void 0?new Mg(s,a,e):new wg(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new Tg(s),rc(t,h)),t=h}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Eg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Cg=0;function Ag(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Pg(a){switch(a){case Ni:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function ac(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ag(a.getShaderSource(e),o)}else return i}function Lg(a,e){const t=Pg(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dg(a,e){let t;switch(e){case jh:t="Linear";break;case Zh:t="Reinhard";break;case $h:t="OptimizedCineon";break;case Kh:t="ACESFilmic";break;case Jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rg(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function Ig(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fg(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Or(a){return a!==""}function oc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(a){return a.replace(zg,Og)}function Og(a,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oo(t)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(a){return a.replace(Bg,Ng)}function Ng(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ug(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function kg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function Vg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case Xh:e="ENVMAP_BLENDING_MIX";break;case Yh:e="ENVMAP_BLENDING_ADD";break}return e}function Hg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wg(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Ug(t),c=kg(t),u=Gg(t),h=Vg(t),f=Hg(t),m=t.isWebGL2?"":Rg(t),g=Ig(r),d=i.createProgram();let p,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Or).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Or).join(`
`),_.length>0&&(_+=`
`)):(p=[uc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),_=[m,uc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Lg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=oo(o),o=oc(o,t),o=lc(o,t),s=oo(s),s=oc(s,t),s=lc(s,t),o=cc(o),s=cc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+p+o,b=S+_+s,v=sc(i,35633,y),P=sc(i,35632,b);if(i.attachShader(d,v),i.attachShader(d,P),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const M=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(v).trim(),H=i.getShaderInfoLog(P).trim();let J=!0,F=!0;if(i.getProgramParameter(d,35714)===!1){J=!1;const T=ac(i,v,"vertex"),R=ac(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+T+`
`+R)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||H==="")&&(F=!1);F&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:_}})}i.deleteShader(v),i.deleteShader(P);let C;this.getUniforms=function(){return C===void 0&&(C=new Fs(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Fg(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=P,this}let qg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yg(e),t.set(e,n)),n}}class Yg{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}}function jg(a,e,t,n,i,r,o){const s=new su,l=new Xg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,M,D,H,J){const F=H.fog,T=J.geometry,R=x.isMeshStandardMaterial?H.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||R),V=B&&B.mapping===Ks?B.image.height:null,z=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,X=K!==void 0?K.length:0;let k=0;T.morphAttributes.position!==void 0&&(k=1),T.morphAttributes.normal!==void 0&&(k=2),T.morphAttributes.color!==void 0&&(k=3);let W,Q,ee,ie;if(z){const Ce=Tn[z];W=Ce.vertexShader,Q=Ce.fragmentShader}else W=x.vertexShader,Q=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),ie=l.getFragmentShaderID(x);const Y=a.getRenderTarget(),Ee=x.alphaTest>0,de=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:x.type,vertexShader:W,fragmentShader:Q,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?a.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Ni,map:!!x.map,matcap:!!x.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:V,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===xd,tangentSpaceNormalMap:x.normalMapType===_d,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ke,clearcoat:de,clearcoatMap:de&&!!x.clearcoatMap,clearcoatRoughnessMap:de&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Li,alphaMap:!!x.alphaMap,alphaTest:Ee,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!T.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:k,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:Hn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===pn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(M,x),S(M,x),M.push(a.outputEncoding)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.map&&s.enable(4),M.matcap&&s.enable(5),M.envMap&&s.enable(6),M.lightMap&&s.enable(7),M.aoMap&&s.enable(8),M.emissiveMap&&s.enable(9),M.bumpMap&&s.enable(10),M.normalMap&&s.enable(11),M.objectSpaceNormalMap&&s.enable(12),M.tangentSpaceNormalMap&&s.enable(13),M.clearcoat&&s.enable(14),M.clearcoatMap&&s.enable(15),M.clearcoatRoughnessMap&&s.enable(16),M.clearcoatNormalMap&&s.enable(17),M.iridescence&&s.enable(18),M.iridescenceMap&&s.enable(19),M.iridescenceThicknessMap&&s.enable(20),M.displacementMap&&s.enable(21),M.specularMap&&s.enable(22),M.roughnessMap&&s.enable(23),M.metalnessMap&&s.enable(24),M.gradientMap&&s.enable(25),M.alphaMap&&s.enable(26),M.alphaTest&&s.enable(27),M.vertexColors&&s.enable(28),M.vertexAlphas&&s.enable(29),M.vertexUvs&&s.enable(30),M.vertexTangents&&s.enable(31),M.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.physicallyCorrectLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.specularIntensityMap&&s.enable(15),M.specularColorMap&&s.enable(16),M.transmission&&s.enable(17),M.transmissionMap&&s.enable(18),M.thicknessMap&&s.enable(19),M.sheen&&s.enable(20),M.sheenColorMap&&s.enable(21),M.sheenRoughnessMap&&s.enable(22),M.decodeVideoTexture&&s.enable(23),M.opaque&&s.enable(24),x.push(s.mask)}function y(x){const M=g[x.type];let D;if(M){const H=Tn[M];D=Gs.clone(H.uniforms)}else D=x.uniforms;return D}function b(x,M){let D;for(let H=0,J=c.length;H<J;H++){const F=c[H];if(F.cacheKey===M){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Wg(a,M,x,r),c.push(D)),D}function v(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:P,programs:c,dispose:C}}function Zg(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $g(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function hc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function dc(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function s(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||$g),n.length>1&&n.sort(f||hc),i.length>1&&i.sort(f||hc)}function u(){for(let h=e,f=a.length;h<f;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Kg(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new dc,a.set(n,[o])):i>=r.length?(o=new dc,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Jg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return a[e.id]=t,t}}}function Qg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let e_=0;function t_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function n_(a,e){const t=new Jg,n=Qg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new xt,s=new xt;function l(u,h){let f=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,p=0,_=0,S=0,y=0,b=0,v=0,P=0,C=0,x=0;u.sort(t_);const M=h!==!0?Math.PI:1;for(let H=0,J=u.length;H<J;H++){const F=u[H],T=F.color,R=F.intensity,B=F.distance,V=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=T.r*R*M,m+=T.g*R*M,g+=T.b*R*M;else if(F.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(F.sh.coefficients[z],R);else if(F.isDirectionalLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const K=F.shadow,X=n.get(F);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=F.shadow.matrix,b++}i.directional[d]=z,d++}else if(F.isSpotLight){const z=t.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(T).multiplyScalar(R*M),z.distance=B,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,i.spot[_]=z;const K=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,K.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[_]=K.matrix,F.castShadow){const X=n.get(F);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=V,P++}_++}else if(F.isRectAreaLight){const z=t.get(F);z.color.copy(T).multiplyScalar(R),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=z,S++}else if(F.isPointLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity*M),z.distance=F.distance,z.decay=F.decay,F.castShadow){const K=F.shadow,X=n.get(F);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=F.shadow.matrix,v++}i.point[p]=z,p++}else if(F.isHemisphereLight){const z=t.get(F);z.skyColor.copy(F.color).multiplyScalar(R*M),z.groundColor.copy(F.groundColor).multiplyScalar(R*M),i.hemi[y]=z,y++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==P||D.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=S,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=P+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=P,D.numSpotMaps=C,i.version=e_++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const b=u[S];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),s.identity(),o.copy(b.matrixWorld),o.premultiply(_),s.extractRotation(o),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function fc(a,e){const t=new n_(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function i_(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new fc(a,e),t.set(r,[l])):o>=s.length?(l=new fc(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class r_ extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(a,e,t){let n=new hu;const i=new Me,r=new Me,o=new yt,s=new r_({depthPacking:gd}),l=new s_,c={},u=t.maxTextureSize,h={0:pn,1:mr,2:ei},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Pn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc,this.render=function(b,v,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=a.getRenderTarget(),x=a.getActiveCubeFace(),M=a.getActiveMipmapLevel(),D=a.state;D.setBlending(si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,J=b.length;H<J;H++){const F=b[H],T=F.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;i.copy(T.mapSize);const R=T.getFrameExtents();if(i.multiply(R),r.copy(T.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/R.x),i.x=r.x*R.x,T.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/R.y),i.y=r.y*R.y,T.mapSize.y=r.y)),T.map===null){const V=this.type!==zr?{minFilter:Ft,magFilter:Ft}:{};T.map=new Sn(i.x,i.y,V),T.map.texture.name=F.name+".shadowMap",T.camera.updateProjectionMatrix()}a.setRenderTarget(T.map),a.clear();const B=T.getViewportCount();for(let V=0;V<B;V++){const z=T.getViewport(V);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),D.viewport(o),T.updateMatrices(F,V),n=T.getFrustum(),y(v,P,T.camera,F,this.type)}T.isPointLightShadow!==!0&&this.type===zr&&_(T,P),T.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,x,M)};function _(b,v){const P=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Sn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(v,null,P,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(v,null,P,m,d,null)}function S(b,v,P,C,x,M){let D=null;const H=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0?D=H:D=P.isPointLight===!0?l:s,a.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const J=D.uuid,F=v.uuid;let T=c[J];T===void 0&&(T={},c[J]=T);let R=T[F];R===void 0&&(R=D.clone(),T[F]=R),D=R}return D.visible=v.visible,D.wireframe=v.wireframe,M===zr?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:h[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,P.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(P.matrixWorld),D.nearDistance=C,D.farDistance=x),D}function y(b,v,P,C,x){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===zr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),J=b.material;if(Array.isArray(J)){const F=H.groups;for(let T=0,R=F.length;T<R;T++){const B=F[T],V=J[B.materialIndex];if(V&&V.visible){const z=S(b,V,C,P.near,P.far,x);a.renderBufferDirect(P,null,H,z,b,B)}}}else if(J.visible){const F=S(b,J,C,P.near,P.far,x);a.renderBufferDirect(P,null,H,F,b,null)}}const D=b.children;for(let H=0,J=D.length;H<J;H++)y(D[H],v,P,C,x)}}function c_(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const Z=new yt;let ne=null;const he=new yt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!I&&(a.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Ge,ft,Mt,fi){fi===!0&&(xe*=Mt,Ge*=Mt,ft*=Mt),Z.set(xe,Ge,ft,Mt),he.equals(Z)===!1&&(a.clearColor(xe,Ge,ft,Mt),he.copy(Z))},reset:function(){I=!1,ne=null,he.set(-1,0,0,0)}}}function r(){let I=!1,Z=null,ne=null,he=null;return{setTest:function(xe){xe?Ee(2929):de(2929)},setMask:function(xe){Z!==xe&&!I&&(a.depthMask(xe),Z=xe)},setFunc:function(xe){if(ne!==xe){switch(xe){case Uh:a.depthFunc(512);break;case kh:a.depthFunc(519);break;case Gh:a.depthFunc(513);break;case Qa:a.depthFunc(515);break;case Vh:a.depthFunc(514);break;case Hh:a.depthFunc(518);break;case Wh:a.depthFunc(516);break;case qh:a.depthFunc(517);break;default:a.depthFunc(515)}ne=xe}},setLocked:function(xe){I=xe},setClear:function(xe){he!==xe&&(a.clearDepth(xe),he=xe)},reset:function(){I=!1,Z=null,ne=null,he=null}}}function o(){let I=!1,Z=null,ne=null,he=null,xe=null,Ge=null,ft=null,Mt=null,fi=null;return{setTest:function(Ze){I||(Ze?Ee(2960):de(2960))},setMask:function(Ze){Z!==Ze&&!I&&(a.stencilMask(Ze),Z=Ze)},setFunc:function(Ze,Rn,rn){(ne!==Ze||he!==Rn||xe!==rn)&&(a.stencilFunc(Ze,Rn,rn),ne=Ze,he=Rn,xe=rn)},setOp:function(Ze,Rn,rn){(Ge!==Ze||ft!==Rn||Mt!==rn)&&(a.stencilOp(Ze,Rn,rn),Ge=Ze,ft=Rn,Mt=rn)},setLocked:function(Ze){I=Ze},setClear:function(Ze){fi!==Ze&&(a.clearStencil(Ze),fi=Ze)},reset:function(){I=!1,Z=null,ne=null,he=null,xe=null,Ge=null,ft=null,Mt=null,fi=null}}}const s=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,y=null,b=null,v=null,P=null,C=null,x=null,M=!1,D=null,H=null,J=null,F=null,T=null;const R=a.getParameter(35661);let B=!1,V=0;const z=a.getParameter(7938);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let K=null,X={};const k=a.getParameter(3088),W=a.getParameter(2978),Q=new yt().fromArray(k),ee=new yt().fromArray(W);function ie(I,Z,ne){const he=new Uint8Array(4),xe=a.createTexture();a.bindTexture(I,xe),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Ge=0;Ge<ne;Ge++)a.texImage2D(Z+Ge,0,6408,1,1,0,6408,5121,he);return xe}const Y={};Y[3553]=ie(3553,3553,1),Y[34067]=ie(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(Qa),Ve(!1),tt(sl),Ee(2884),Ne(si);function Ee(I){f[I]!==!0&&(a.enable(I),f[I]=!0)}function de(I){f[I]!==!1&&(a.disable(I),f[I]=!1)}function _e(I,Z){return m[I]!==Z?(a.bindFramebuffer(I,Z),m[I]=Z,n&&(I===36009&&(m[36160]=Z),I===36160&&(m[36009]=Z)),!0):!1}function le(I,Z){let ne=d,he=!1;if(I)if(ne=g.get(Z),ne===void 0&&(ne=[],g.set(Z,ne)),I.isWebGLMultipleRenderTargets){const xe=I.texture;if(ne.length!==xe.length||ne[0]!==36064){for(let Ge=0,ft=xe.length;Ge<ft;Ge++)ne[Ge]=36064+Ge;ne.length=xe.length,he=!0}}else ne[0]!==36064&&(ne[0]=36064,he=!0);else ne[0]!==1029&&(ne[0]=1029,he=!0);he&&(t.isWebGL2?a.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ce(I){return p!==I?(a.useProgram(I),p=I,!0):!1}const pe={[ar]:32774,[Ah]:32778,[Ph]:32779};if(n)pe[ll]=32775,pe[cl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(pe[ll]=I.MIN_EXT,pe[cl]=I.MAX_EXT)}const ve={[Lh]:0,[Dh]:1,[Rh]:768,[jc]:770,[Nh]:776,[Oh]:774,[Fh]:772,[Ih]:769,[Zc]:771,[Bh]:775,[zh]:773};function Ne(I,Z,ne,he,xe,Ge,ft,Mt){if(I===si){_===!0&&(de(3042),_=!1);return}if(_===!1&&(Ee(3042),_=!0),I!==Ch){if(I!==S||Mt!==M){if((y!==ar||P!==ar)&&(a.blendEquation(32774),y=ar,P=ar),Mt)switch(I){case Li:a.blendFuncSeparate(1,771,1,771);break;case Us:a.blendFunc(1,1);break;case al:a.blendFuncSeparate(0,769,0,1);break;case ol:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:a.blendFuncSeparate(770,771,1,771);break;case Us:a.blendFunc(770,1);break;case al:a.blendFuncSeparate(0,769,0,1);break;case ol:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,v=null,C=null,x=null,S=I,M=Mt}return}xe=xe||Z,Ge=Ge||ne,ft=ft||he,(Z!==y||xe!==P)&&(a.blendEquationSeparate(pe[Z],pe[xe]),y=Z,P=xe),(ne!==b||he!==v||Ge!==C||ft!==x)&&(a.blendFuncSeparate(ve[ne],ve[he],ve[Ge],ve[ft]),b=ne,v=he,C=Ge,x=ft),S=I,M=!1}function We(I,Z){I.side===ei?de(2884):Ee(2884);let ne=I.side===pn;Z&&(ne=!ne),Ve(ne),I.blending===Li&&I.transparent===!1?Ne(si):Ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;c.setTest(he),he&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ke(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(32926):de(32926)}function Ve(I){D!==I&&(I?a.frontFace(2304):a.frontFace(2305),D=I)}function tt(I){I!==wh?(Ee(2884),I!==H&&(I===sl?a.cullFace(1029):I===Th?a.cullFace(1028):a.cullFace(1032))):de(2884),H=I}function He(I){I!==J&&(B&&a.lineWidth(I),J=I)}function ke(I,Z,ne){I?(Ee(32823),(F!==Z||T!==ne)&&(a.polygonOffset(Z,ne),F=Z,T=ne)):de(32823)}function It(I){I?Ee(3089):de(3089)}function St(I){I===void 0&&(I=33984+R-1),K!==I&&(a.activeTexture(I),K=I)}function A(I,Z,ne){ne===void 0&&(K===null?ne=33984+R-1:ne=K);let he=X[ne];he===void 0&&(he={type:void 0,texture:void 0},X[ne]=he),(he.type!==I||he.texture!==Z)&&(K!==ne&&(a.activeTexture(ne),K=ne),a.bindTexture(I,Z||Y[I]),he.type=I,he.texture=Z)}function w(){const I=X[K];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){Q.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function me(I){ee.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Re(I,Z){let ne=h.get(Z);ne===void 0&&(ne=new WeakMap,h.set(Z,ne));let he=ne.get(I);he===void 0&&(he=a.getUniformBlockIndex(Z,I.name),ne.set(I,he))}function Fe(I,Z){const he=h.get(Z).get(I);u.get(I)!==he&&(a.uniformBlockBinding(Z,he,I.__bindingPointIndex),u.set(I,he))}function qe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},K=null,X={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,y=null,b=null,v=null,P=null,C=null,x=null,M=!1,D=null,H=null,J=null,F=null,T=null,Q.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ee,disable:de,bindFramebuffer:_e,drawBuffers:le,useProgram:Ce,setBlending:Ne,setMaterial:We,setFlipSided:Ve,setCullFace:tt,setLineWidth:He,setPolygonOffset:ke,setScissorTest:It,activeTexture:St,bindTexture:A,unbindTexture:w,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:fe,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:Fe,texStorage2D:N,texStorage3D:ue,texSubImage2D:re,texSubImage3D:oe,compressedTexSubImage2D:Se,compressedTexSubImage3D:L,scissor:ge,viewport:me,reset:qe}}function u_(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,w){return _?new OffscreenCanvas(A,w):ks("canvas")}function y(A,w,q,te){let re=1;if((A.width>te||A.height>te)&&(re=te/Math.max(A.width,A.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=w?ao:Math.floor,Se=oe(re*A.width),L=oe(re*A.height);d===void 0&&(d=S(Se,L));const N=q?S(Se,L):d;return N.width=Se,N.height=L,N.getContext("2d").drawImage(A,0,0,Se,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+L+")."),N}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return zl(A.width)&&zl(A.height)}function v(A){return s?!1:A.wrapS!==yn||A.wrapT!==yn||A.minFilter!==Ft&&A.minFilter!==ln}function P(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ft&&A.minFilter!==ln}function C(A){a.generateMipmap(A)}function x(A,w,q,te,re=!1){if(s===!1)return w;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=w;return w===6403&&(q===5126&&(oe=33326),q===5131&&(oe=33325),q===5121&&(oe=33321)),w===33319&&(q===5126&&(oe=33328),q===5131&&(oe=33327),q===5121&&(oe=33323)),w===6408&&(q===5126&&(oe=34836),q===5131&&(oe=34842),q===5121&&(oe=te===Ke&&re===!1?35907:32856),q===32819&&(oe=32854),q===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function M(A,w,q){return P(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function D(A){return A===Ft||A===ul||A===hl?9728:9729}function H(A){const w=A.target;w.removeEventListener("dispose",H),F(w),w.isVideoTexture&&g.delete(w)}function J(A){const w=A.target;w.removeEventListener("dispose",J),R(w)}function F(A){const w=n.get(A);if(w.__webglInit===void 0)return;const q=A.source,te=p.get(q);if(te){const re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(A),Object.keys(te).length===0&&p.delete(q)}n.remove(A)}function T(A){const w=n.get(A);a.deleteTexture(w.__webglTexture);const q=A.source,te=p.get(q);delete te[w.__cacheKey],o.memory.textures--}function R(A){const w=A.texture,q=n.get(A),te=n.get(w);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer(q.__webglFramebuffer[re]),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&a.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&a.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,oe=w.length;re<oe;re++){const Se=n.get(w[re]);Se.__webglTexture&&(a.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(A)}let B=0;function V(){B=0}function z(){const A=B;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),B+=1,A}function K(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function X(A,w){const q=n.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(q,A,w);return}}t.bindTexture(3553,q.__webglTexture,33984+w)}function k(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){de(q,A,w);return}t.bindTexture(35866,q.__webglTexture,33984+w)}function W(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){de(q,A,w);return}t.bindTexture(32879,q.__webglTexture,33984+w)}function Q(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){_e(q,A,w);return}t.bindTexture(34067,q.__webglTexture,33984+w)}const ee={[no]:10497,[yn]:33071,[io]:33648},ie={[Ft]:9728,[ul]:9984,[hl]:9986,[ln]:9729,[Qh]:9985,[Js]:9987};function Y(A,w,q){if(q?(a.texParameteri(A,10242,ee[w.wrapS]),a.texParameteri(A,10243,ee[w.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,ee[w.wrapR]),a.texParameteri(A,10240,ie[w.magFilter]),a.texParameteri(A,10241,ie[w.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(w.wrapS!==yn||w.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,D(w.magFilter)),a.texParameteri(A,10241,D(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.type===Ai&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Vr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ee(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",H));const te=w.source;let re=p.get(te);re===void 0&&(re={},p.set(te,re));const oe=K(w);if(oe!==A.__cacheKey){re[oe]===void 0&&(re[oe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[oe].usedTimes++;const Se=re[A.__cacheKey];Se!==void 0&&(re[A.__cacheKey].usedTimes--,Se.usedTimes===0&&T(w)),A.__cacheKey=oe,A.__webglTexture=re[oe].texture}return q}function de(A,w,q){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const re=Ee(A,w),oe=w.source;t.bindTexture(te,A.__webglTexture,33984+q);const Se=n.get(oe);if(oe.version!==Se.__version||re===!0){t.activeTexture(33984+q),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const L=v(w)&&b(w.image)===!1;let N=y(w.image,L,!1,u);N=St(w,N);const ue=b(N)||s,fe=r.convert(w.format,w.encoding);let ce=r.convert(w.type),ge=x(w.internalFormat,fe,ce,w.encoding,w.isVideoTexture);Y(te,w,ue);let me;const Re=w.mipmaps,Fe=s&&w.isVideoTexture!==!0,qe=Se.__version===void 0||re===!0,I=M(w,N,ue);if(w.isDepthTexture)ge=6402,s?w.type===Ai?ge=36012:w.type===Ci?ge=33190:w.type===hr?ge=35056:ge=33189:w.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Di&&ge===6402&&w.type!==Jc&&w.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ci,ce=r.convert(w.type)),w.format===xr&&ge===6402&&(ge=34041,w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hr,ce=r.convert(w.type))),qe&&(Fe?t.texStorage2D(3553,1,ge,N.width,N.height):t.texImage2D(3553,0,ge,N.width,N.height,0,fe,ce,null));else if(w.isDataTexture)if(Re.length>0&&ue){Fe&&qe&&t.texStorage2D(3553,I,ge,Re[0].width,Re[0].height);for(let Z=0,ne=Re.length;Z<ne;Z++)me=Re[Z],Fe?t.texSubImage2D(3553,Z,0,0,me.width,me.height,fe,ce,me.data):t.texImage2D(3553,Z,ge,me.width,me.height,0,fe,ce,me.data);w.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(3553,I,ge,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,fe,ce,N.data)):t.texImage2D(3553,0,ge,N.width,N.height,0,fe,ce,N.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(35866,I,ge,Re[0].width,Re[0].height,N.depth);for(let Z=0,ne=Re.length;Z<ne;Z++)me=Re[Z],w.format!==bn?fe!==null?Fe?t.compressedTexSubImage3D(35866,Z,0,0,0,me.width,me.height,N.depth,fe,me.data,0,0):t.compressedTexImage3D(35866,Z,ge,me.width,me.height,N.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,Z,0,0,0,me.width,me.height,N.depth,fe,ce,me.data):t.texImage3D(35866,Z,ge,me.width,me.height,N.depth,0,fe,ce,me.data)}else{Fe&&qe&&t.texStorage2D(3553,I,ge,Re[0].width,Re[0].height);for(let Z=0,ne=Re.length;Z<ne;Z++)me=Re[Z],w.format!==bn?fe!==null?Fe?t.compressedTexSubImage2D(3553,Z,0,0,me.width,me.height,fe,me.data):t.compressedTexImage2D(3553,Z,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,Z,0,0,me.width,me.height,fe,ce,me.data):t.texImage2D(3553,Z,ge,me.width,me.height,0,fe,ce,me.data)}else if(w.isDataArrayTexture)Fe?(qe&&t.texStorage3D(35866,I,ge,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,fe,ce,N.data)):t.texImage3D(35866,0,ge,N.width,N.height,N.depth,0,fe,ce,N.data);else if(w.isData3DTexture)Fe?(qe&&t.texStorage3D(32879,I,ge,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,fe,ce,N.data)):t.texImage3D(32879,0,ge,N.width,N.height,N.depth,0,fe,ce,N.data);else if(w.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(3553,I,ge,N.width,N.height);else{let Z=N.width,ne=N.height;for(let he=0;he<I;he++)t.texImage2D(3553,he,ge,Z,ne,0,fe,ce,null),Z>>=1,ne>>=1}}else if(Re.length>0&&ue){Fe&&qe&&t.texStorage2D(3553,I,ge,Re[0].width,Re[0].height);for(let Z=0,ne=Re.length;Z<ne;Z++)me=Re[Z],Fe?t.texSubImage2D(3553,Z,0,0,fe,ce,me):t.texImage2D(3553,Z,ge,fe,ce,me);w.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(3553,I,ge,N.width,N.height),t.texSubImage2D(3553,0,0,0,fe,ce,N)):t.texImage2D(3553,0,ge,fe,ce,N);P(w,ue)&&C(te),Se.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function _e(A,w,q){if(w.image.length!==6)return;const te=Ee(A,w),re=w.source;t.bindTexture(34067,A.__webglTexture,33984+q);const oe=n.get(re);if(re.version!==oe.__version||te===!0){t.activeTexture(33984+q),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,N=[];for(let Z=0;Z<6;Z++)!Se&&!L?N[Z]=y(w.image[Z],!1,!0,c):N[Z]=L?w.image[Z].image:w.image[Z],N[Z]=St(w,N[Z]);const ue=N[0],fe=b(ue)||s,ce=r.convert(w.format,w.encoding),ge=r.convert(w.type),me=x(w.internalFormat,ce,ge,w.encoding),Re=s&&w.isVideoTexture!==!0,Fe=oe.__version===void 0||te===!0;let qe=M(w,ue,fe);Y(34067,w,fe);let I;if(Se){Re&&Fe&&t.texStorage2D(34067,qe,me,ue.width,ue.height);for(let Z=0;Z<6;Z++){I=N[Z].mipmaps;for(let ne=0;ne<I.length;ne++){const he=I[ne];w.format!==bn?ce!==null?Re?t.compressedTexSubImage2D(34069+Z,ne,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+Z,ne,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+Z,ne,0,0,he.width,he.height,ce,ge,he.data):t.texImage2D(34069+Z,ne,me,he.width,he.height,0,ce,ge,he.data)}}}else{I=w.mipmaps,Re&&Fe&&(I.length>0&&qe++,t.texStorage2D(34067,qe,me,N[0].width,N[0].height));for(let Z=0;Z<6;Z++)if(L){Re?t.texSubImage2D(34069+Z,0,0,0,N[Z].width,N[Z].height,ce,ge,N[Z].data):t.texImage2D(34069+Z,0,me,N[Z].width,N[Z].height,0,ce,ge,N[Z].data);for(let ne=0;ne<I.length;ne++){const xe=I[ne].image[Z].image;Re?t.texSubImage2D(34069+Z,ne+1,0,0,xe.width,xe.height,ce,ge,xe.data):t.texImage2D(34069+Z,ne+1,me,xe.width,xe.height,0,ce,ge,xe.data)}}else{Re?t.texSubImage2D(34069+Z,0,0,0,ce,ge,N[Z]):t.texImage2D(34069+Z,0,me,ce,ge,N[Z]);for(let ne=0;ne<I.length;ne++){const he=I[ne];Re?t.texSubImage2D(34069+Z,ne+1,0,0,ce,ge,he.image[Z]):t.texImage2D(34069+Z,ne+1,me,ce,ge,he.image[Z])}}}P(w,fe)&&C(34067),oe.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function le(A,w,q,te,re){const oe=r.convert(q.format,q.encoding),Se=r.convert(q.type),L=x(q.internalFormat,oe,Se,q.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,L,w.width,w.height,w.depth,0,oe,Se,null):t.texImage2D(re,0,L,w.width,w.height,0,oe,Se,null)),t.bindFramebuffer(36160,A),ke(w)?f.framebufferTexture2DMultisampleEXT(36160,te,re,n.get(q).__webglTexture,0,He(w)):(re===3553||re>=34069&&re<=34074)&&a.framebufferTexture2D(36160,te,re,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(A,w,q){if(a.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(q||ke(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Ai?te=36012:re.type===Ci&&(te=33190));const oe=He(w);ke(w)?f.renderbufferStorageMultisampleEXT(36161,oe,te,w.width,w.height):a.renderbufferStorageMultisample(36161,oe,te,w.width,w.height)}else a.renderbufferStorage(36161,te,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const te=He(w);q&&ke(w)===!1?a.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<te.length;re++){const oe=te[re],Se=r.convert(oe.format,oe.encoding),L=r.convert(oe.type),N=x(oe.internalFormat,Se,L,oe.encoding),ue=He(w);q&&ke(w)===!1?a.renderbufferStorageMultisample(36161,ue,N,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,ue,N,w.width,w.height):a.renderbufferStorage(36161,N,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function pe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,re=He(w);if(w.depthTexture.format===Di)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,re):a.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===xr)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,re):a.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(A){const w=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=a.createRenderbuffer(),Ce(w.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),Ce(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Ne(A,w,q){const te=n.get(A);w!==void 0&&le(te.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&ve(A)}function We(A){const w=A.texture,q=n.get(A),te=n.get(w);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=w.version,o.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Se=b(A)||s;if(re){q.__webglFramebuffer=[];for(let L=0;L<6;L++)q.__webglFramebuffer[L]=a.createFramebuffer()}else{if(q.__webglFramebuffer=a.createFramebuffer(),oe)if(i.drawBuffers){const L=A.texture;for(let N=0,ue=L.length;N<ue;N++){const fe=n.get(L[N]);fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&ke(A)===!1){const L=oe?w:[w];q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let N=0;N<L.length;N++){const ue=L[N];q.__webglColorRenderbuffer[N]=a.createRenderbuffer(),a.bindRenderbuffer(36161,q.__webglColorRenderbuffer[N]);const fe=r.convert(ue.format,ue.encoding),ce=r.convert(ue.type),ge=x(ue.internalFormat,fe,ce,ue.encoding,A.isXRRenderTarget===!0),me=He(A);a.renderbufferStorageMultisample(36161,me,ge,A.width,A.height),a.framebufferRenderbuffer(36160,36064+N,36161,q.__webglColorRenderbuffer[N])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),Ce(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,te.__webglTexture),Y(34067,w,Se);for(let L=0;L<6;L++)le(q.__webglFramebuffer[L],A,w,36064,34069+L);P(w,Se)&&C(34067),t.unbindTexture()}else if(oe){const L=A.texture;for(let N=0,ue=L.length;N<ue;N++){const fe=L[N],ce=n.get(fe);t.bindTexture(3553,ce.__webglTexture),Y(3553,fe,Se),le(q.__webglFramebuffer,A,fe,36064+N,3553),P(fe,Se)&&C(3553)}t.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,te.__webglTexture),Y(L,w,Se),le(q.__webglFramebuffer,A,w,36064,L),P(w,Se)&&C(L),t.unbindTexture()}A.depthBuffer&&ve(A)}function Ve(A){const w=b(A)||s,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,re=q.length;te<re;te++){const oe=q[te];if(P(oe,w)){const Se=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(oe).__webglTexture;t.bindTexture(Se,L),C(Se),t.unbindTexture()}}}function tt(A){if(s&&A.samples>0&&ke(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,te=A.height;let re=16384;const oe=[],Se=A.stencilBuffer?33306:36096,L=n.get(A),N=A.isWebGLMultipleRenderTargets===!0;if(N)for(let ue=0;ue<w.length;ue++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){oe.push(36064+ue),A.depthBuffer&&oe.push(Se);const fe=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(fe===!1&&(A.depthBuffer&&(re|=256),A.stencilBuffer&&(re|=1024)),N&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ue]),fe===!0&&(a.invalidateFramebuffer(36008,[Se]),a.invalidateFramebuffer(36009,[Se])),N){const ce=n.get(w[ue]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ce,0)}a.blitFramebuffer(0,0,q,te,0,0,q,te,re,9728),m&&a.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let ue=0;ue<w.length;ue++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,L.__webglColorRenderbuffer[ue]);const fe=n.get(w[ue]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,fe,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function He(A){return Math.min(h,A.samples)}function ke(A){const w=n.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function St(A,w){const q=A.encoding,te=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===so||q!==Ni&&(q===Ke?s===!1?e.has("EXT_sRGB")===!0&&te===bn?(A.format=so,A.minFilter=ln,A.generateMipmaps=!1):w=tu.sRGBToLinear(w):(te!==bn||re!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ke}function h_(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===Bi)return 5121;if(r===id)return 32819;if(r===rd)return 32820;if(r===ed)return 5120;if(r===td)return 5122;if(r===Jc)return 5123;if(r===nd)return 5124;if(r===Ci)return 5125;if(r===Ai)return 5126;if(r===Vr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===sd)return 6406;if(r===bn)return 6408;if(r===od)return 6409;if(r===ld)return 6410;if(r===Di)return 6402;if(r===xr)return 34041;if(r===ad)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===so)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===cd)return 6403;if(r===ud)return 36244;if(r===hd)return 33319;if(r===dd)return 33320;if(r===fd)return 36249;if(r===oa||r===la||r===ca||r===ua)if(o===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dl||r===fl||r===pl||r===ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pd)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gl||r===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===gl)return o===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===_l)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xl||r===vl||r===yl||r===bl||r===Sl||r===Ml||r===wl||r===Tl||r===El||r===Cl||r===Al||r===Pl||r===Ll||r===Dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===xl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ml)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===El)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Al)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ll)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Rl)return o===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===hr?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class d_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class p_ extends Jt{constructor(e,t,n,i,r,o,s,l,c,u){if(u=u!==void 0?u:Di,u!==Di&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Di&&(n=Ci),n===void 0&&u===xr&&(n=hr),super(null,i,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class m_ extends ki{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],S=[],y=new Set,b=new Map,v=new cn;v.layers.enable(1),v.viewport=new yt;const P=new cn;P.layers.enable(2),P.viewport=new yt;const C=[v,P],x=new d_;x.layers.enable(1),x.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=_[k];return W===void 0&&(W=new Ua,_[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=_[k];return W===void 0&&(W=new Ua,_[k]=W),W.getGripSpace()},this.getHand=function(k){let W=_[k];return W===void 0&&(W=new Ua,_[k]=W),W.getHandSpace()};function H(k){const W=S.indexOf(k.inputSource);if(W===-1)return;const Q=_[W];Q!==void 0&&Q.dispatchEvent({type:k.type,data:k.inputSource})}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",F);for(let k=0;k<_.length;k++){const W=S[k];W!==null&&(S[k]=null,_[k].disconnect(W))}M=null,D=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:f}),p=new Sn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,Q=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,W=g.stencil?xr:Di,Q=g.stencil?hr:Ci);const ie={colorFormat:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),p=new Sn(h.textureWidth,h.textureHeight,{format:bn,type:Bi,depthTexture:new p_(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Y=e.properties.get(p);Y.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(s),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(k){for(let W=0;W<k.removed.length;W++){const Q=k.removed[W],ee=S.indexOf(Q);ee>=0&&(S[ee]=null,_[ee].disconnect(Q))}for(let W=0;W<k.added.length;W++){const Q=k.added[W];let ee=S.indexOf(Q);if(ee===-1){for(let Y=0;Y<_.length;Y++)if(Y>=S.length){S.push(Q),ee=Y;break}else if(S[Y]===null){S[Y]=Q,ee=Y;break}if(ee===-1)break}const ie=_[ee];ie&&ie.connect(Q)}}const T=new O,R=new O;function B(k,W,Q){T.setFromMatrixPosition(W.matrixWorld),R.setFromMatrixPosition(Q.matrixWorld);const ee=T.distanceTo(R),ie=W.projectionMatrix.elements,Y=Q.projectionMatrix.elements,Ee=ie[14]/(ie[10]-1),de=ie[14]/(ie[10]+1),_e=(ie[9]+1)/ie[5],le=(ie[9]-1)/ie[5],Ce=(ie[8]-1)/ie[0],pe=(Y[8]+1)/Y[0],ve=Ee*Ce,Ne=Ee*pe,We=ee/(-Ce+pe),Ve=We*-Ce;W.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ve),k.translateZ(We),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const tt=Ee+We,He=de+We,ke=ve-Ve,It=Ne+(ee-Ve),St=_e*de/He*tt,A=le*de/He*tt;k.projectionMatrix.makePerspective(ke,It,St,A,tt,He)}function V(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;x.near=P.near=v.near=k.near,x.far=P.far=v.far=k.far,(M!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,D=x.far);const W=k.parent,Q=x.cameras;V(x,W);for(let ie=0;ie<Q.length;ie++)V(Q[ie],W);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),k.matrix.copy(x.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ee=k.children;for(let ie=0,Y=ee.length;ie<Y;ie++)ee[ie].updateMatrixWorld(!0);Q.length===2?B(x,v,P):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.getPlanes=function(){return y};let z=null;function K(k,W){if(c=W.getViewerPose(l||o),m=W,c!==null){const Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let ie=0;ie<Q.length;ie++){const Y=Q[ie];let Ee=null;if(f!==null)Ee=f.getViewport(Y);else{const _e=u.getViewSubImage(h,Y);Ee=_e.viewport,ie===0&&(e.setRenderTargetTextures(p,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(p))}let de=C[ie];de===void 0&&(de=new cn,de.layers.enable(ie),de.viewport=new yt,C[ie]=de),de.matrix.fromArray(Y.transform.matrix),de.projectionMatrix.fromArray(Y.projectionMatrix),de.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ie===0&&x.matrix.copy(de.matrix),ee===!0&&x.cameras.push(de)}}for(let Q=0;Q<_.length;Q++){const ee=S[Q],ie=_[Q];ee!==null&&ie!==void 0&&ie.update(ee,W,l||o)}if(z&&z(k,W),W.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let Q=null;for(const ee of y)W.detectedPlanes.has(ee)||(Q===null&&(Q=[]),Q.push(ee));if(Q!==null)for(const ee of Q)y.delete(ee),b.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of W.detectedPlanes)if(!y.has(ee))y.add(ee),b.set(ee,W.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const ie=b.get(ee);ee.lastChangedTime>ie&&(b.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const X=new du;X.setAnimationLoop(K),this.setAnimationLoop=function(k){z=k},this.dispose=function(){}}}function g_(a,e){function t(d,p){p.color.getRGB(d.fogColor.value,lu(a)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,y)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?s(d,p,_,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===pn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===pn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===pn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function __(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=i[S.id];b===void 0&&(g(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",p));const v=y.program;n.updateUBOMapping(S,v);const P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function u(S){const y=h();S.__bindingPointIndex=y;const b=a.createBuffer(),v=S.__size,P=S.usage;return a.bindBuffer(35345,b),a.bufferData(35345,v,P),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,b),b}function h(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],b=S.uniforms,v=S.__cache;a.bindBuffer(35345,y);for(let P=0,C=b.length;P<C;P++){const x=b[P];if(m(x,P,v)===!0){const M=x.value,D=x.__offset;typeof M=="number"?(x.__data[0]=M,a.bufferSubData(35345,D,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):M.toArray(x.__data),a.bufferSubData(35345,D,x.__data))}}a.bindBuffer(35345,null)}function m(S,y,b){const v=S.value;if(b[y]===void 0)return typeof v=="number"?b[y]=v:b[y]=v.clone(),!0;if(typeof v=="number"){if(b[y]!==v)return b[y]=v,!0}else{const P=b[y];if(P.equals(v)===!1)return P.copy(v),!0}return!1}function g(S){const y=S.uniforms;let b=0;const v=16;let P=0;for(let C=0,x=y.length;C<x;C++){const M=y[C],D=d(M);if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,C>0){P=b%v;const H=v-P;P!==0&&H-D.boundary<0&&(b+=v-P,M.__offset=b)}b+=D.storage}return P=b%v,P>0&&(b+=v-P),S.__size=b,S.__cache={},this}function d(S){const y=S.value,b={boundary:0,storage:0};return typeof y=="number"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const S in i)a.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function x_(){const a=ks("canvas");return a.style.display="block",a}function _u(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:x_(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const d=this;let p=!1,_=0,S=0,y=null,b=-1,v=null;const P=new yt,C=new yt;let x=null,M=e.width,D=e.height,H=1,J=null,F=null;const T=new yt(0,0,M,D),R=new yt(0,0,M,D);let B=!1;const V=new hu;let z=!1,K=!1,X=null;const k=new xt,W=new Me,Q=new O,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return y===null?H:1}let Y=t;function Ee(E,G){for(let j=0;j<E.length;j++){const U=E[j],$=e.getContext(U,G);if($!==null)return $}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ao}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Re,!1),Y===null){const G=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&G.shift(),Y=Ee(G,E),Y===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,_e,le,Ce,pe,ve,Ne,We,Ve,tt,He,ke,It,St,A,w,q,te,re,oe,Se,L,N,ue;function fe(){de=new Pm(Y),_e=new Mm(Y,de,a),de.init(_e),L=new h_(Y,de,_e),le=new c_(Y,de,_e),Ce=new Rm,pe=new Zg,ve=new u_(Y,de,le,pe,_e,L,Ce),Ne=new Tm(d),We=new Am(d),Ve=new kd(Y,_e),N=new bm(Y,de,Ve,_e),tt=new Lm(Y,Ve,Ce,N),He=new Om(Y,tt,Ve,Ce),re=new zm(Y,_e,ve),w=new wm(pe),ke=new jg(d,Ne,We,de,_e,N,w),It=new g_(d,pe),St=new Kg,A=new i_(de,_e),te=new ym(d,Ne,We,le,He,u,o),q=new l_(d,He,_e),ue=new __(Y,Ce,_e,le),oe=new Sm(Y,de,Ce,_e),Se=new Dm(Y,de,Ce,_e),Ce.programs=ke.programs,d.capabilities=_e,d.extensions=de,d.properties=pe,d.renderLists=St,d.shadowMap=q,d.state=le,d.info=Ce}fe();const ce=new m_(d,Y);this.xr=ce,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(M,D,!1))},this.getSize=function(E){return E.set(M,D)},this.setSize=function(E,G,j){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=E,D=G,e.width=Math.floor(E*H),e.height=Math.floor(G*H),j!==!1&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(M*H,D*H).floor()},this.setDrawingBufferSize=function(E,G,j){M=E,D=G,H=j,e.width=Math.floor(E*j),e.height=Math.floor(G*j),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(T)},this.setViewport=function(E,G,j,U){E.isVector4?T.set(E.x,E.y,E.z,E.w):T.set(E,G,j,U),le.viewport(P.copy(T).multiplyScalar(H).floor())},this.getScissor=function(E){return E.copy(R)},this.setScissor=function(E,G,j,U){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,G,j,U),le.scissor(C.copy(R).multiplyScalar(H).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){le.setScissorTest(B=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){F=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,G=!0,j=!0){let U=0;E&&(U|=16384),G&&(U|=256),j&&(U|=1024),Y.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),St.dispose(),A.dispose(),pe.dispose(),Ne.dispose(),We.dispose(),He.dispose(),N.dispose(),ue.dispose(),ke.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",he),ce.removeEventListener("sessionend",xe),X&&(X.dispose(),X=null),Ge.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ce.autoReset,G=q.enabled,j=q.autoUpdate,U=q.needsUpdate,$=q.type;fe(),Ce.autoReset=E,q.enabled=G,q.autoUpdate=j,q.needsUpdate=U,q.type=$}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const G=E.target;G.removeEventListener("dispose",Fe),qe(G)}function qe(E){I(E),pe.remove(E)}function I(E){const G=pe.get(E).programs;G!==void 0&&(G.forEach(function(j){ke.releaseProgram(j)}),E.isShaderMaterial&&ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,j,U,$,ye){G===null&&(G=ee);const we=$.isMesh&&$.matrixWorld.determinant()<0,Le=yh(E,G,j,U,$);le.setMaterial(U,we);let De=j.index,Ue=1;U.wireframe===!0&&(De=tt.getWireframeAttribute(j),Ue=2);const ze=j.drawRange,Oe=j.attributes.position;let st=ze.start*Ue,Ht=(ze.start+ze.count)*Ue;ye!==null&&(st=Math.max(st,ye.start*Ue),Ht=Math.min(Ht,(ye.start+ye.count)*Ue)),De!==null?(st=Math.max(st,0),Ht=Math.min(Ht,De.count)):Oe!=null&&(st=Math.max(st,0),Ht=Math.min(Ht,Oe.count));const In=Ht-st;if(In<0||In===1/0)return;N.setup($,U,Le,j,De);let pi,at=oe;if(De!==null&&(pi=Ve.get(De),at=Se,at.setIndex(pi)),$.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*ie()),at.setMode(1)):at.setMode(4);else if($.isLine){let Be=U.linewidth;Be===void 0&&(Be=1),le.setLineWidth(Be*ie()),$.isLineSegments?at.setMode(1):$.isLineLoop?at.setMode(2):at.setMode(3)}else $.isPoints?at.setMode(0):$.isSprite&&at.setMode(4);if($.isInstancedMesh)at.renderInstances(st,In,$.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ia=Math.min(j.instanceCount,Be);at.renderInstances(st,In,ia)}else at.render(st,In)},this.compile=function(E,G){function j(U,$,ye){U.transparent===!0&&U.side===ei?(U.side=pn,U.needsUpdate=!0,rn(U,$,ye),U.side=mr,U.needsUpdate=!0,rn(U,$,ye),U.side=ei):rn(U,$,ye)}f=A.get(E),f.init(),g.push(f),E.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let ye=0;ye<$.length;ye++){const we=$[ye];j(we,E,U)}else j($,E,U)}),g.pop(),f=null};let Z=null;function ne(E){Z&&Z(E)}function he(){Ge.stop()}function xe(){Ge.start()}const Ge=new du;Ge.setAnimationLoop(ne),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(E){Z=E,ce.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},ce.addEventListener("sessionstart",he),ce.addEventListener("sessionend",xe),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(G),G=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,G,y),f=A.get(E,g.length),f.init(),g.push(f),k.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V.setFromProjectionMatrix(k),K=this.localClippingEnabled,z=w.init(this.clippingPlanes,K,G),h=St.get(E,m.length),h.init(),m.push(h),ft(E,G,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(J,F),z===!0&&w.beginShadows();const j=f.state.shadowsArray;if(q.render(j,E,G),z===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,E),f.setupLights(d.physicallyCorrectLights),G.isArrayCamera){const U=G.cameras;for(let $=0,ye=U.length;$<ye;$++){const we=U[$];Mt(h,E,we,we.viewport)}}else Mt(h,E,G);y!==null&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(d,E,G),N.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ft(E,G,j,U){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){U&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const we=He.update(E),Le=E.material;Le.visible&&h.push(E,we,Le,j,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ce.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ce.render.frame),!E.frustumCulled||V.intersectsObject(E))){U&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const we=He.update(E),Le=E.material;if(Array.isArray(Le)){const De=we.groups;for(let Ue=0,ze=De.length;Ue<ze;Ue++){const Oe=De[Ue],st=Le[Oe.materialIndex];st&&st.visible&&h.push(E,we,st,j,Q.z,Oe)}}else Le.visible&&h.push(E,we,Le,j,Q.z,null)}}const ye=E.children;for(let we=0,Le=ye.length;we<Le;we++)ft(ye[we],G,j,U)}function Mt(E,G,j,U){const $=E.opaque,ye=E.transmissive,we=E.transparent;f.setupLightsView(j),ye.length>0&&fi($,G,j),U&&le.viewport(P.copy(U)),$.length>0&&Ze($,G,j),ye.length>0&&Ze(ye,G,j),we.length>0&&Ze(we,G,j),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function fi(E,G,j){const U=_e.isWebGL2;X===null&&(X=new Sn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Vr:Bi,minFilter:Js,samples:U&&r===!0?4:0})),d.getDrawingBufferSize(W),U?X.setSize(W.x,W.y):X.setSize(ao(W.x),ao(W.y));const $=d.getRenderTarget();d.setRenderTarget(X),d.clear();const ye=d.toneMapping;d.toneMapping=Hn,Ze(E,G,j),d.toneMapping=ye,ve.updateMultisampleRenderTarget(X),ve.updateRenderTargetMipmap(X),d.setRenderTarget($)}function Ze(E,G,j){const U=G.isScene===!0?G.overrideMaterial:null;for(let $=0,ye=E.length;$<ye;$++){const we=E[$],Le=we.object,De=we.geometry,Ue=U===null?we.material:U,ze=we.group;Le.layers.test(j.layers)&&Rn(Le,G,j,De,Ue,ze)}}function Rn(E,G,j,U,$,ye){E.onBeforeRender(d,G,j,U,$,ye),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(d,G,j,U,E,ye),$.transparent===!0&&$.side===ei?($.side=pn,$.needsUpdate=!0,d.renderBufferDirect(j,G,U,$,E,ye),$.side=mr,$.needsUpdate=!0,d.renderBufferDirect(j,G,U,$,E,ye),$.side=ei):d.renderBufferDirect(j,G,U,$,E,ye),E.onAfterRender(d,G,j,U,$,ye)}function rn(E,G,j){G.isScene!==!0&&(G=ee);const U=pe.get(E),$=f.state.lights,ye=f.state.shadowsArray,we=$.state.version,Le=ke.getParameters(E,$.state,ye,G,j),De=ke.getProgramCacheKey(Le);let Ue=U.programs;U.environment=E.isMeshStandardMaterial?G.environment:null,U.fog=G.fog,U.envMap=(E.isMeshStandardMaterial?We:Ne).get(E.envMap||U.environment),Ue===void 0&&(E.addEventListener("dispose",Fe),Ue=new Map,U.programs=Ue);let ze=Ue.get(De);if(ze!==void 0){if(U.currentProgram===ze&&U.lightsStateVersion===we)return nl(E,Le),ze}else Le.uniforms=ke.getUniforms(E),E.onBuild(j,Le,d),E.onBeforeCompile(Le,d),ze=ke.acquireProgram(Le,De),Ue.set(De,ze),U.uniforms=Le.uniforms;const Oe=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=w.uniform),nl(E,Le),U.needsLights=Sh(E),U.lightsStateVersion=we,U.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMap.value=$.state.directionalShadowMap,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotShadowMap.value=$.state.spotShadowMap,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMap.value=$.state.pointShadowMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix);const st=ze.getUniforms(),Ht=Fs.seqWithValue(st.seq,Oe);return U.currentProgram=ze,U.uniformsList=Ht,ze}function nl(E,G){const j=pe.get(E);j.outputEncoding=G.outputEncoding,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function yh(E,G,j,U,$){G.isScene!==!0&&(G=ee),ve.resetTextureUnits();const ye=G.fog,we=U.isMeshStandardMaterial?G.environment:null,Le=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Ni,De=(U.isMeshStandardMaterial?We:Ne).get(U.envMap||we),Ue=U.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!U.normalMap&&!!j.attributes.tangent,Oe=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,Ht=!!j.morphAttributes.color,In=U.toneMapped?d.toneMapping:Hn,pi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=pi!==void 0?pi.length:0,Be=pe.get(U),ia=f.state.lights;if(z===!0&&(K===!0||E!==v)){const Wt=E===v&&U.id===b;w.setState(U,E,Wt)}let pt=!1;U.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ia.state.version||Be.outputEncoding!==Le||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==De||U.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==w.numPlanes||Be.numIntersection!==w.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==ze||Be.morphTargets!==Oe||Be.morphNormals!==st||Be.morphColors!==Ht||Be.toneMapping!==In||_e.isWebGL2===!0&&Be.morphTargetsCount!==at)&&(pt=!0):(pt=!0,Be.__version=U.version);let mi=Be.currentProgram;pt===!0&&(mi=rn(U,G,$));let il=!1,Ar=!1,ra=!1;const Ct=mi.getUniforms(),gi=Be.uniforms;if(le.useProgram(mi.program)&&(il=!0,Ar=!0,ra=!0),U.id!==b&&(b=U.id,Ar=!0),il||v!==E){if(Ct.setValue(Y,"projectionMatrix",E.projectionMatrix),_e.logarithmicDepthBuffer&&Ct.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),v!==E&&(v=E,Ar=!0,ra=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Wt=Ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(Y,Q.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ct.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||$.isSkinnedMesh)&&Ct.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Ct.setOptional(Y,$,"bindMatrix"),Ct.setOptional(Y,$,"bindMatrixInverse");const Wt=$.skeleton;Wt&&(_e.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ct.setValue(Y,"boneTexture",Wt.boneTexture,ve),Ct.setValue(Y,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sa=j.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&_e.isWebGL2===!0)&&re.update($,j,U,mi),(Ar||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,Ct.setValue(Y,"receiveShadow",$.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(gi.envMap.value=De,gi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ar&&(Ct.setValue(Y,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&bh(gi,ra),ye&&U.fog===!0&&It.refreshFogUniforms(gi,ye),It.refreshMaterialUniforms(gi,U,H,D,X),Fs.upload(Y,Be.uniformsList,gi,ve)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Fs.upload(Y,Be.uniformsList,gi,ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ct.setValue(Y,"center",$.center),Ct.setValue(Y,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(Y,"normalMatrix",$.normalMatrix),Ct.setValue(Y,"modelMatrix",$.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Wt=U.uniformsGroups;for(let aa=0,Mh=Wt.length;aa<Mh;aa++)if(_e.isWebGL2){const rl=Wt[aa];ue.update(rl,mi),ue.bind(rl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function bh(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Sh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,G,j){pe.get(E.texture).__webglTexture=G,pe.get(E.depthTexture).__webglTexture=j;const U=pe.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=j===void 0,U.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const j=pe.get(E);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,j=0){y=E,_=G,S=j;let U=!0,$=null,ye=!1,we=!1;if(E){const De=pe.get(E);De.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),U=!1):De.__webglFramebuffer===void 0?ve.setupRenderTarget(E):De.__hasExternalTextures&&ve.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const ze=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=ze[G],ye=!0):_e.isWebGL2&&E.samples>0&&ve.useMultisampledRTT(E)===!1?$=pe.get(E).__webglMultisampledFramebuffer:$=ze,P.copy(E.viewport),C.copy(E.scissor),x=E.scissorTest}else P.copy(T).multiplyScalar(H).floor(),C.copy(R).multiplyScalar(H).floor(),x=B;if(le.bindFramebuffer(36160,$)&&_e.drawBuffers&&U&&le.drawBuffers(E,$),le.viewport(P),le.scissor(C),le.setScissorTest(x),ye){const De=pe.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+G,De.__webglTexture,j)}else if(we){const De=pe.get(E.texture),Ue=G||0;Y.framebufferTextureLayer(36160,36064,De.__webglTexture,j||0,Ue)}b=-1},this.readRenderTargetPixels=function(E,G,j,U,$,ye,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){le.bindFramebuffer(36160,Le);try{const De=E.texture,Ue=De.format,ze=De.type;if(Ue!==bn&&L.convert(Ue)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=ze===Vr&&(de.has("EXT_color_buffer_half_float")||_e.isWebGL2&&de.has("EXT_color_buffer_float"));if(ze!==Bi&&L.convert(ze)!==Y.getParameter(35738)&&!(ze===Ai&&(_e.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-U&&j>=0&&j<=E.height-$&&Y.readPixels(G,j,U,$,L.convert(Ue),L.convert(ze),ye)}finally{const De=y!==null?pe.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(E,G,j=0){const U=Math.pow(2,-j),$=Math.floor(G.image.width*U),ye=Math.floor(G.image.height*U);ve.setTexture2D(G,0),Y.copyTexSubImage2D(3553,j,0,0,E.x,E.y,$,ye),le.unbindTexture()},this.copyTextureToTexture=function(E,G,j,U=0){const $=G.image.width,ye=G.image.height,we=L.convert(j.format),Le=L.convert(j.type);ve.setTexture2D(j,0),Y.pixelStorei(37440,j.flipY),Y.pixelStorei(37441,j.premultiplyAlpha),Y.pixelStorei(3317,j.unpackAlignment),G.isDataTexture?Y.texSubImage2D(3553,U,E.x,E.y,$,ye,we,Le,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(3553,U,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):Y.texSubImage2D(3553,U,E.x,E.y,we,Le,G.image),U===0&&j.generateMipmaps&&Y.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,G,j,U,$=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,De=L.convert(U.format),Ue=L.convert(U.type);let ze;if(U.isData3DTexture)ve.setTexture3D(U,0),ze=32879;else if(U.isDataArrayTexture)ve.setTexture2DArray(U,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,U.flipY),Y.pixelStorei(37441,U.premultiplyAlpha),Y.pixelStorei(3317,U.unpackAlignment);const Oe=Y.getParameter(3314),st=Y.getParameter(32878),Ht=Y.getParameter(3316),In=Y.getParameter(3315),pi=Y.getParameter(32877),at=j.isCompressedTexture?j.mipmaps[0]:j.image;Y.pixelStorei(3314,at.width),Y.pixelStorei(32878,at.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(ze,$,G.x,G.y,G.z,ye,we,Le,De,Ue,at.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ze,$,G.x,G.y,G.z,ye,we,Le,De,at.data)):Y.texSubImage3D(ze,$,G.x,G.y,G.z,ye,we,Le,De,Ue,at),Y.pixelStorei(3314,Oe),Y.pixelStorei(32878,st),Y.pixelStorei(3316,Ht),Y.pixelStorei(3315,In),Y.pixelStorei(32877,pi),$===0&&U.generateMipmaps&&Y.generateMipmap(ze),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){_=0,S=0,y=null,le.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class v_ extends _u{}v_.prototype.isWebGL1Renderer=!0;class y_ extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class b_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ro,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new O;class lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cs extends mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class S_ extends ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pc=new xt,lo=new ru,As=new es,Ps=new O;class M_ extends Bt{constructor(e=new nn,t=new S_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;pc.copy(i).invert(),lo.copy(e.ray).applyMatrix4(pc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,d=m;g<d;g++){const p=c.getX(g);Ps.fromBufferAttribute(h,p),mc(Ps,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,d=m;g<d;g++)Ps.fromBufferAttribute(h,g),mc(Ps,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function mc(a,e,t,n,i,r,o){const s=lo.distanceSqToPoint(a);if(s<t){const l=new O;lo.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class w_ extends nn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new O,r=new O;if(e.index!==null){const o=e.attributes.position,s=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,m=h.count;for(let g=f,d=f+m;g<d;g+=3)for(let p=0;p<3;p++){const _=s.getX(g+p),S=s.getX(g+(p+1)%3);i.fromBufferAttribute(o,_),r.fromBufferAttribute(o,S),gc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let s=0,l=o.count/3;s<l;s++)for(let c=0;c<3;c++){const u=3*s+c,h=3*s+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),gc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new _t(t,3))}}}function gc(a,e,t){const n=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class T_ extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class E_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _c(){return(typeof performance>"u"?Date:performance).now()}class xc extends b_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);const yc={type:"change"},ka={type:"start"},bc={type:"end"};class C_ extends ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",St),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yc),n.update(),r=i.NONE},this.update=function(){const L=new O,N=new Ui().setFromUnitVectors(e.up,new O(0,1,0)),ue=N.clone().invert(),fe=new O,ce=new Ui,ge=2*Math.PI;return function(){const Re=n.object.position;L.copy(Re).sub(n.target),L.applyQuaternion(N),s.setFromVector3(L),n.autoRotate&&r===i.NONE&&M(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Fe=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(qe)&&(Fe<-Math.PI?Fe+=ge:Fe>Math.PI&&(Fe-=ge),qe<-Math.PI?qe+=ge:qe>Math.PI&&(qe-=ge),Fe<=qe?s.theta=Math.max(Fe,Math.min(qe,s.theta)):s.theta=s.theta>(Fe+qe)/2?Math.max(Fe,s.theta):Math.min(qe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(s),L.applyQuaternion(ue),Re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||fe.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(yc),fe.copy(n.object.position),ce.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",tt),n.domElement.removeEventListener("wheel",It),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new vc,l=new vc;let c=1;const u=new O;let h=!1;const f=new Me,m=new Me,g=new Me,d=new Me,p=new Me,_=new Me,S=new Me,y=new Me,b=new Me,v=[],P={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function M(L){l.theta-=L}function D(L){l.phi-=L}const H=function(){const L=new O;return function(ue,fe){L.setFromMatrixColumn(fe,0),L.multiplyScalar(-ue),u.add(L)}}(),J=function(){const L=new O;return function(ue,fe){n.screenSpacePanning===!0?L.setFromMatrixColumn(fe,1):(L.setFromMatrixColumn(fe,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ue),u.add(L)}}(),F=function(){const L=new O;return function(ue,fe){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;L.copy(ge).sub(n.target);let me=L.length();me*=Math.tan(n.object.fov/2*Math.PI/180),H(2*ue*me/ce.clientHeight,n.object.matrix),J(2*fe*me/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(ue*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),J(fe*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function T(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L){f.set(L.clientX,L.clientY)}function V(L){S.set(L.clientX,L.clientY)}function z(L){d.set(L.clientX,L.clientY)}function K(L){m.set(L.clientX,L.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;M(2*Math.PI*g.x/N.clientHeight),D(2*Math.PI*g.y/N.clientHeight),f.copy(m),n.update()}function X(L){y.set(L.clientX,L.clientY),b.subVectors(y,S),b.y>0?T(x()):b.y<0&&R(x()),S.copy(y),n.update()}function k(L){p.set(L.clientX,L.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),F(_.x,_.y),d.copy(p),n.update()}function W(L){L.deltaY<0?R(x()):L.deltaY>0&&T(x()),n.update()}function Q(L){let N=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),N=!0;break}N&&(L.preventDefault(),n.update())}function ee(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);f.set(L,N)}}function ie(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);d.set(L,N)}}function Y(){const L=v[0].pageX-v[1].pageX,N=v[0].pageY-v[1].pageY,ue=Math.sqrt(L*L+N*N);S.set(0,ue)}function Ee(){n.enableZoom&&Y(),n.enablePan&&ie()}function de(){n.enableZoom&&Y(),n.enableRotate&&ee()}function _e(L){if(v.length==1)m.set(L.pageX,L.pageY);else{const ue=Se(L),fe=.5*(L.pageX+ue.x),ce=.5*(L.pageY+ue.y);m.set(fe,ce)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;M(2*Math.PI*g.x/N.clientHeight),D(2*Math.PI*g.y/N.clientHeight),f.copy(m)}function le(L){if(v.length===1)p.set(L.pageX,L.pageY);else{const N=Se(L),ue=.5*(L.pageX+N.x),fe=.5*(L.pageY+N.y);p.set(ue,fe)}_.subVectors(p,d).multiplyScalar(n.panSpeed),F(_.x,_.y),d.copy(p)}function Ce(L){const N=Se(L),ue=L.pageX-N.x,fe=L.pageY-N.y,ce=Math.sqrt(ue*ue+fe*fe);y.set(0,ce),b.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),T(b.y),S.copy(y)}function pe(L){n.enableZoom&&Ce(L),n.enablePan&&le(L)}function ve(L){n.enableZoom&&Ce(L),n.enableRotate&&_e(L)}function Ne(L){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",We),n.domElement.addEventListener("pointerup",Ve)),te(L),L.pointerType==="touch"?A(L):He(L))}function We(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):ke(L))}function Ve(L){re(L),v.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(bc),r=i.NONE}function tt(L){re(L)}function He(L){let N;switch(L.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Hi.DOLLY:if(n.enableZoom===!1)return;V(L),r=i.DOLLY;break;case Hi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;z(L),r=i.PAN}else{if(n.enableRotate===!1)return;B(L),r=i.ROTATE}break;case Hi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;B(L),r=i.ROTATE}else{if(n.enablePan===!1)return;z(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ka)}function ke(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(L);break;case i.DOLLY:if(n.enableZoom===!1)return;X(L);break;case i.PAN:if(n.enablePan===!1)return;k(L);break}}function It(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(ka),W(L),n.dispatchEvent(bc))}function St(L){n.enabled===!1||n.enablePan===!1||Q(L)}function A(L){switch(oe(L),v.length){case 1:switch(n.touches.ONE){case Wi.ROTATE:if(n.enableRotate===!1)return;ee(),r=i.TOUCH_ROTATE;break;case Wi.PAN:if(n.enablePan===!1)return;ie(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),r=i.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ka)}function w(L){switch(oe(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(L),n.update();break;default:r=i.NONE}}function q(L){n.enabled!==!1&&L.preventDefault()}function te(L){v.push(L)}function re(L){delete P[L.pointerId];for(let N=0;N<v.length;N++)if(v[N].pointerId==L.pointerId){v.splice(N,1);return}}function oe(L){let N=P[L.pointerId];N===void 0&&(N=new Me,P[L.pointerId]=N),N.set(L.pageX,L.pageY)}function Se(L){const N=L.pointerId===v[0].pointerId?v[1]:v[0];return P[N.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",tt),n.domElement.addEventListener("wheel",It,{passive:!1}),this.update()}}const Vs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class rs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const A_=new Do(-1,1,1,-1,0,1),Io=new nn;Io.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3));Io.setAttribute("uv",new _t([0,2,0,0,2,0],2));class xu{constructor(e){this._mesh=new Pn(Io,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Sc extends rs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gs.clone(e.uniforms),this.material=new Dt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Mc extends rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(s),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class P_ extends rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class L_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Me);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Vs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Sc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Sc(Vs),this.clock=new E_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Mc!==void 0&&(o instanceof Mc?n=!0:o instanceof P_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Do(-1,1,1,-1,0,1);const vu=new nn;vu.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3));vu.setAttribute("uv",new _t([0,2,0,0,2,0],2));class D_ extends rs{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const wc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yr extends rs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Sn(r,o);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Sn(r,o);m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}wc===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const s=wc;this.highPassUniforms=Gs.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Me(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Vs===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Vs;this.copyUniforms=Gs.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Dt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Us,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Po,this.fsQuad=new xu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new Me(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=yr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Dt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}yr.BlurDirectionX=new Me(1,0);yr.BlurDirectionY=new Me(0,1);const Tc=new Gi,Ls=new O;class R_ extends T_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new _t(e,3)),this.setAttribute("uv",new _t(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xc(t,6,1);return this.setAttribute("instanceStart",new lr(n,3,0)),this.setAttribute("instanceEnd",new lr(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xc(t,6,1);return this.setAttribute("instanceColorStart",new lr(n,3,0)),this.setAttribute("instanceColorEnd",new lr(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new w_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Tc.setFromBufferAttribute(t),this.boundingBox.union(Tc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ls.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ls)),Ls.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ls));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}function Un(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function yu(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wr={duration:.5,overwrite:!1,delay:0},Fo,bt,$e,dn=1e8,Ye=1/dn,co=Math.PI*2,I_=co/4,F_=0,bu=Math.sqrt,z_=Math.cos,O_=Math.sin,vt=function(e){return typeof e=="string"},nt=function(e){return typeof e=="function"},qn=function(e){return typeof e=="number"},zo=function(e){return typeof e>"u"},Dn=function(e){return typeof e=="object"},Nt=function(e){return e!==!1},Oo=function(){return typeof window<"u"},Ds=function(e){return nt(e)||vt(e)},Su=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,B_=/random\([^)]+\)/g,N_=/,\s*/g,Ec=/(?:-?\.?\d|\.)+/gi,Mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wu=/[+-]=-?[.\d]+/,U_=/[^,'"\[\]\s]+/gi,k_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,wn,uo,Bo,en={},Hs={},Tu,Eu=function(e){return(Hs=br(e,en))&&Vt},No=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qr=function(e,t){return!t&&console.warn(e)},Cu=function(e,t){return e&&(en[e]=t)&&Hs&&(Hs[e]=t)||en},Xr=function(){return 0},G_={suppressEvents:!0,isStart:!0,kill:!1},zs={suppressEvents:!0,kill:!1},V_={suppressEvents:!0},Uo={},oi=[],ho={},Au,Yt={},Va={},Cc=30,Os=[],ko="",Go=function(e){var t=e[0],n,i;if(Dn(t)||nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Os.length;i--&&!Os[i].targetTest(t););n=Os[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $u(e[i],n)))||e.splice(i,1);return e},Ii=function(e){return e._gsap||Go(fn(e))[0]._gsap},Pu=function(e,t,n){return(n=e[t])&&nt(n)?e[t]():zo(n)&&e.getAttribute&&e.getAttribute(t)||n},Ut=function(e,t){return(e=e.split(",")).forEach(t)||e},it=function(e){return Math.round(e*1e5)/1e5||0},Je=function(e){return Math.round(e*1e7)/1e7||0},dr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},H_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ws=function(){var e=oi.length,t=oi.slice(0),n,i;for(ho={},oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vo=function(e){return!!(e._initted||e._startAt||e.add)},Lu=function(e,t,n,i){oi.length&&!bt&&Ws(),e.render(t,n,i||!!(bt&&t<0&&Vo(e))),oi.length&&!bt&&Ws()},Du=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U_).length<2?t:vt(e)?e.trim():e},Ru=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},W_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},Ac=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Dn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},qs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ur=function(e){var t=e.parent||Qe,n=e.keyframes?W_(Et(e.keyframes)):tn;if(Nt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},q_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Iu=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ea=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},X_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fo=function(e,t,n,i){return e._startAt&&(bt?e._startAt.revert(zs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Y_=function a(e){return!e||e._ts&&a(e.parent)},Pc=function(e){return e._repeat?Sr(e._tTime,e=e.duration()+e._rDelay)*e:0},Sr=function(e,t){var n=Math.floor(e=Je(e/t));return e&&n===e?n-1:n},Xs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ta=function(e){return e._end=Je(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},na=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Je(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ta(e),n._dirty||Fi(n,e)),e},Fu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xs(e.rawTime(),t),(!t._dur||ss(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),Fi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},An=function(e,t,n,i){return t.parent&&ci(t),t._start=Je((qn(n)?n:n||e!==Qe?an(e,n,t):e._time)+t._delay),t._end=Je(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Iu(e,t,"_first","_last",e._sort?"_start":0),po(t)||(e._recent=t),i||Fu(e,t),e._ts<0&&na(e,e._tTime),e},zu=function(e,t){return(en.ScrollTrigger||No("scrollTrigger",t))&&en.ScrollTrigger.create(t,e)},Ou=function(e,t,n,i,r){if(Wo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Au!==jt.frame)return oi.push(e),e._lazy=[r,i],1},j_=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},po=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Z_=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&j_(e)&&!(!e._initted&&po(e))||(e._ts<0||e._dp._ts<0)&&!po(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=ss(0,e._tDur,t),u=Sr(l,s),e._yoyo&&u&1&&(o=1-o),u!==Sr(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||bt||i||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Ou(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&fo(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ci(e,1),!n&&!bt&&($t(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Mr=function(e,t,n,i){var r=e._repeat,o=Je(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Je(o*(r+1)+e._rDelay*r):o,s>0&&!i&&na(e,e._tTime=e._tDur*s),e.parent&&ta(e),n||Fi(e.parent,e),e},Lc=function(e){return e instanceof Ot?Fi(e):Mr(e,e._dur)},K_={_start:0,endTime:Xr,totalDuration:Xr},an=function a(e,t,n){var i=e.labels,r=e._recent||K_,o=e.duration()>=dn?r.endTime(!1):e._dur,s,l,c;return vt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Et(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},kr=function(e,t,n){var i=qn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Nt(l.vars.inherit)&&l.parent;o.immediateRender=Nt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new lt(t[0],o,t[r+1])},di=function(e,t){return e||e===0?t(e):t},ss=function(e,t,n){return n<e?e:n>t?t:n},Tt=function(e,t){return!vt(e)||!(t=k_.exec(e))?"":t[1]},J_=function(e,t,n){return di(n,function(i){return ss(e,t,i)})},mo=[].slice,Bu=function(e,t){return e&&Dn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dn(e[0]))&&!e.nodeType&&e!==wn},Q_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return vt(i)&&!t||Bu(i,1)?(r=n).push.apply(r,fn(i)):n.push(i)})||n},fn=function(e,t,n){return $e&&!t&&$e.selector?$e.selector(e):vt(e)&&!n&&(uo||!wr())?mo.call((t||Bo).querySelectorAll(e),0):Et(e)?Q_(e,n):Bu(e)?mo.call(e,0):e?[e]:[]},go=function(e){return e=fn(e)[0]||qr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fn(t,n.querySelectorAll?n:n===e?qr("Invalid scope")||Bo.createElement("div"):e)}},Nu=function(e){return e.sort(function(){return .5-Math.random()})},Uu=function(e){if(nt(e))return e;var t=Dn(e)?e:{each:e},n=zi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=o[d],_,S,y,b,v,P,C,x,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,dn])[1],!M){for(C=-dn;C<(C=g[M++].getBoundingClientRect().left)&&M<d;);M<d&&M--}for(p=o[d]=[],_=l?Math.min(M,d)*u-.5:i%M,S=M===dn?0:l?d*h/M-.5:i/M|0,C=0,x=dn,P=0;P<d;P++)y=P%M-_,b=S-(P/M|0),p[P]=v=c?Math.abs(c==="y"?b:y):bu(y*y+b*b),v>C&&(C=v),v<x&&(x=v);i==="random"&&Nu(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(M>d?d-1:c?c==="y"?d/M:M:Math.max(M,d/M))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=Tt(t.amount||t.each)||0,n=n&&d<0?d0(n):n}return d=(p[f]-p.min)/p.max||0,Je(p.b+(n?n(d):d)*p.v)+p.u}},_o=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Je(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(qn(n)?0:Tt(n))}},ku=function(e,t){var n=Et(e),i,r;return!n&&Dn(e)&&(i=n=e.radius||dn,e.values?(e=fn(e.values),(r=!qn(e[0]))&&(i*=i)):e=_o(e.increment)),di(t,n?nt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=dn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||qn(o)?u:u+Tt(o)}:_o(e))},Gu=function(e,t,n,i){return di(Et(e)?!t:n===!0?!!(n=0):!i,function(){return Et(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},e0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},t0=function(e,t){return function(n){return e(parseFloat(n))+(t||Tt(n))}},n0=function(e,t,n){return Hu(e,t,0,1,n)},Vu=function(e,t,n){return di(n,function(i){return e[~~t(i)]})},i0=function a(e,t,n){var i=t-e;return Et(e)?Vu(e,a(0,e.length),t):di(n,function(r){return(i+(r-e)%i)%i+e})},r0=function a(e,t,n){var i=t-e,r=i*2;return Et(e)?Vu(e,a(0,e.length-1),t):di(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Yr=function(e){return e.replace(B_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(N_);return Gu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Hu=function(e,t,n,i,r){var o=t-e,s=i-n;return di(r,function(l){return n+((l-e)/o*s||0)})},s0=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=vt(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=br(Et(e)?[]:{},e));if(!u){for(l in t)Ho.call(s,e,l,"get",t[l]);r=function(g){return Yo(g,s)||(o?e.p:e)}}}return di(n,r)},Dc=function(e,t,n){var i=e.labels,r=dn,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},$t=function(e,t,n){var i=e.vars,r=i[t],o=$e,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&oi.length&&Ws(),s&&($e=s),u=l?r.apply(c,l):r.call(c),$e=o,u},Br=function(e){return ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bt),e.progress()<1&&$t(e,"onInterrupt"),e},ur,Wu=[],qu=function(e){if(e)if(e=!e.name&&e.default||e,Oo()||e.headless){var t=e.name,n=nt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Xr,render:Yo,add:Ho,kill:S0,modifier:b0,rawVars:0},o={targetTest:0,get:0,getSetter:Xo,aliases:{},register:0};if(wr(),e!==i){if(Yt[t])return;tn(i,tn(qs(e,r),o)),br(i.prototype,br(r,qs(e,o))),Yt[i.prop=t]=i,e.targetTest&&(Os.push(i),Uo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cu(t,i),e.register&&e.register(Vt,i,kt)}else Wu.push(e)},Xe=255,Nr={aqua:[0,Xe,Xe],lime:[0,Xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xe],navy:[0,0,128],white:[Xe,Xe,Xe],olive:[128,128,0],yellow:[Xe,Xe,0],orange:[Xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xe,0,0],pink:[Xe,192,203],cyan:[0,Xe,Xe],transparent:[Xe,Xe,Xe,0]},Ha=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Xe+.5|0},Xu=function(e,t,n){var i=e?qn(e)?[e>>16,e>>8&Xe,e&Xe]:0:Nr.black,r,o,s,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Nr[e])i=Nr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Xe,i&Xe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Xe,e&Xe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ec),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ha(l+1/3,r,o),i[1]=Ha(l,r,o),i[2]=Ha(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Mu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ec)||Nr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Xe,o=i[1]/Xe,s=i[2]/Xe,h=Math.max(r,o,s),f=Math.min(r,o,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(o-s)/m+(o<s?6:0):h===o?(s-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yu=function(e){var t=[],n=[],i=-1;return e.split(li).forEach(function(r){var o=r.match(cr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Rc=function(e,t,n){var i="",r=(e+i).match(li),o=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Xu(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Yu(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(li,"1").split(cr),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(li),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},li=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Nr)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),a0=/hsl[a]?\(/,ju=function(e){var t=e.join(" "),n;if(li.lastIndex=0,li.test(t))return n=a0.test(t),e[1]=Rc(e[1],n),e[0]=Rc(e[0],n,Yu(e[1])),!0},jr,jt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,c,u,h,f,m,g=function d(p){var _=a()-i,S=p===!0,y,b,v,P;if((_>e||_<0)&&(n+=_-t),i+=_,v=i-n,y=v-o,(y>0||S)&&(P=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,o+=y+(y>=r?4:r-y),b=1),S||(l=c(d)),b)for(m=0;m<s.length;m++)s[m](v,f,P,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Tu&&(!uo&&Oo()&&(wn=uo=window,Bo=wn.document||{},en.gsap=Vt,(wn.gsapVersions||(wn.gsapVersions=[])).push(Vt.version),Eu(Hs||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Wu.forEach(qu)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},jr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),jr=0,c=Xr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,S){var y=_?function(b,v,P,C){p(b,v,P,C),h.remove(y)}:p;return h.remove(p),s[S?"unshift":"push"](y),wr(),y},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),wr=function(){return!jr&&jt.wake()},Ie={},o0=/^[\d.\-M][\d.\-,\s]/,l0=/["']/g,c0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,c;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(l0,"").trim():+c,i=l.substr(s+1).trim();return t},u0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},h0=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[c0(t[1])]:u0(e).split(",").map(Du)):Ie._CE&&o0.test(e)?Ie._CE("",e):n},d0=function(e){return function(t){return 1-e(1-t)}},zi=function(e,t){return e&&(nt(e)?e:Ie[e]||h0(e))||t},Vi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Ut(e,function(s){Ie[s]=en[s]=r,Ie[o=s.toLowerCase()]=n;for(var l in r)Ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[s+"."+l]=r[l]}),r},Zu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wa=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/co*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*O_((u-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:Zu(s);return r=co/r,l.config=function(c,u){return a(e,c,u)},l},qa=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Zu(n);return i.config=function(r){return a(e,r)},i};Ut("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Vi(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn;Vi("Elastic",Wa("in"),Wa("out"),Wa());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};Vi("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Vi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Vi("Circ",function(a){return-(bu(1-a*a)-1)});Vi("Sine",function(a){return a===1?1:-z_(a*I_)+1});Vi("Back",qa("in"),qa("out"),qa());Ie.SteppedEase=Ie.steps=en.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Ye;return function(s){return((i*ss(0,o,s)|0)+r)*n}}};Wr.ease=Ie["quad.out"];Ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ko+=a+","+a+"Params,"});var $u=function(e,t){this.id=F_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pu,this.set=t?t.getSetter:Xo},Zr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mr(this,+t.duration,1,1),this.data=t.data,$e&&(this._ctx=$e,$e.data.push(this)),jr||jt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(na(this,n),!r._dp||r.parent||Fu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Sr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(ss(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ta(this),X_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Je(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=V_);var i=bt;return bt=n,Vo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),Nt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nt(i)),this._dur||(this._zTime=-Ye),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ye)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var s=nt(n)?n:Ru,l=function(){var u=i.then;i.then=null,r&&r(),nt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),o(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Br(this)},a}();tn(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Ot=function(a){yu(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nt(n.sortChildren),Qe&&An(n.parent||Qe,Un(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zu(Un(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return kr(0,arguments,this),this},t.from=function(i,r,o){return kr(1,arguments,this),this},t.fromTo=function(i,r,o,s){return kr(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ur(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new lt(i,r,an(this,o),1),this},t.call=function(i,r,o){return An(this,lt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,c,u){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new lt(i,o,an(this,l)),this},t.staggerFrom=function(i,r,o,s,l,c,u){return o.runBackwards=1,Ur(o).immediateRender=Nt(o.immediateRender),this.staggerTo(i,r,o,s,l,c,u)},t.staggerFromTo=function(i,r,o,s,l,c,u,h){return s.startAt=o,Ur(s).immediateRender=Nt(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Je(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,S,y,b,v,P,C;if(this!==Qe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,b=this._start,y=this._ts,_=!y,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Je(u%p),u===l?(d=this._repeat,f=c):(v=Je(u/p),d=~~v,d&&d===v&&(f=c,d--),f>c&&(f=c)),v=Sr(this._tTime,p),!s&&this._tTime&&v!==d&&this._tTime-v*p-this._dur<=0&&(v=d),P&&d&1&&(f=c-f,C=1),d!==v&&!this._lock){var x=P&&v&1,M=x===(P&&d&1);if(d<v&&(x=!x),s=x?0:u%c?c:u,this._lock=1,this.render(s||(C?0:Je(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=d),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=$_(this,Je(s),Je(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&u&&c&&!r&&!v&&($t(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-Ye);break}}m=g}else{m=this._last;for(var D=i<0?i:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,o||bt&&Vo(m)),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=D?-Ye:Ye);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=s?0:-Ye)._zTime=f>=s?1:-1,this._ts))return this._start=b,ta(this),this.render(i,r,o);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ci(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(qn(r)||(r=an(this,r,i)),!(i instanceof Zr)){if(Et(i))return i.forEach(function(s){return o.add(s,r)}),this;if(vt(i))return this.addLabel(i,r);if(nt(i))i=lt.delayedCall(0,i);else return this}return this!==i?An(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-dn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof lt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return vt(i)?this.removeLabel(i):nt(i)?this.killTweensOf(i):(i.parent===this&&ea(this,i),i===this._recent&&(this._recent=this._last),Fi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=an(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=lt.delayedCall(0,r||Xr,o);return s.data="isPause",this._hasPause=1,An(this,s,an(this,i))},t.removePause=function(i){var r=this._first;for(i=an(this,i);r;)r._start===i&&r.data==="isPause"&&ci(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)ni!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=fn(i),l=this._first,c=qn(r),u;l;)l instanceof lt?H_(l._targets,s)&&(c?(!ni||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(s,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=an(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=lt.to(o,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Mr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,tn({startAt:{time:an(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dc(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dc(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,c;for(i=Je(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Fi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fi(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=dn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,An(o,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Je(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Mr(o,o===Qe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Qe._ts&&(Lu(Qe,Xs(i,Qe)),Au=jt.frame),jt.frame>=Cc){Cc+=Qt.autoSleep||120;var r=Qe._first;if((!r||!r._ts)&&Qt.autoSleep&&jt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||jt.sleep()}}},e}(Zr);tn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var f0=function(e,t,n,i,r,o,s){var l=new kt(this._pt,e,t,0,1,nh,null,r),c=0,u=0,h,f,m,g,d,p,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Yr(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(Ga)||[];h=Ga.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?dr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ga.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(wu.test(i)||_)&&(l.e=0),this._pt=l,l},Ho=function(e,t,n,i,r,o,s,l,c,u){nt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:nt(h)?c?e[t.indexOf("set")||!nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=nt(h)?c?x0:eh:qo,g;if(vt(i)&&(~i.indexOf("random(")&&(i=Yr(i)),i.charAt(1)==="="&&(g=dr(f,i)+(Tt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||xo)return!isNaN(f*i)&&i!==""?(g=new kt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?y0:th,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&No(t,i),f0.call(this,e,t,f,i,m,l||Qt.stringFilter,c))},p0=function(e,t,n,i,r){if(nt(e)&&(e=Gr(e,r,t,n,i)),!Dn(e)||e.style&&e.nodeType||Et(e)||Su(e))return vt(e)?Gr(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Gr(e[s],r,t,n,i);return o},Ku=function(e,t,n,i,r,o){var s,l,c,u;if(Yt[e]&&(s=new Yt[e]).init(r,s.rawVars?t[e]:p0(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new kt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==ur))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},ni,xo,Wo=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=e._dur,d=e._startAt,p=e._targets,_=e.parent,S=_&&_.data==="nested"?_.vars.targets:p,y=e._overwrite==="auto"&&!Fo,b=e.timeline,v=i.easeReverse||h,P,C,x,M,D,H,J,F,T,R,B,V,z;if(b&&(!f||!r)&&(r="none"),e._ease=zi(r,Wr.ease),e._rEase=v&&(zi(v)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||f&&!i.stagger){if(F=p[0]?Ii(p[0]).harness:0,V=F&&i[F.prop],P=qs(i,Uo),d&&(d._zTime<0&&d.progress(1),t<0&&u&&s&&!m?d.render(-1,!0):d.revert(u&&g?zs:G_),d._lazy=0),o){if(ci(e._startAt=lt.set(p,tn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!d&&Nt(l),startAt:null,delay:0,onUpdate:c&&function(){return $t(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt||!s&&!m)&&e._startAt.revert(zs),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!d){if(t&&(s=!1),x=tn({overwrite:!1,data:"isFromStart",lazy:s&&!d&&Nt(l),immediateRender:s,stagger:0,parent:_},P),V&&(x[F.prop]=V),ci(e._startAt=lt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt?e._startAt.revert(zs):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Nt(l)||l&&!g,C=0;C<p.length;C++){if(D=p[C],J=D._gsap||Go(p)[C]._gsap,e._ptLookup[C]=R={},ho[J.id]&&oi.length&&Ws(),B=S===p?C:S.indexOf(D),F&&(T=new F).init(D,V||P,e,B,S)!==!1&&(e._pt=M=new kt(e._pt,D,T.name,0,1,T.render,T,0,T.priority),T._props.forEach(function(K){R[K]=M}),T.priority&&(H=1)),!F||V)for(x in P)Yt[x]&&(T=Ku(x,P,e,B,D,S))?T.priority&&(H=1):R[x]=M=Ho.call(e,D,x,"get",P[x],B,S,0,i.stringFilter);e._op&&e._op[C]&&e.kill(D,e._op[C]),y&&e._pt&&(ni=e,Qe.killTweensOf(D,R,e.globalTime(t)),z=!e.parent,ni=0),e._pt&&l&&(ho[J.id]=1)}H&&ih(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&b.render(dn,!0,!0)},m0=function(e,t,n,i,r,o,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return xo=1,e.vars[t]="+=0",Wo(e,s),xo=0,l?qr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=it(n)+Tt(h.e)),h.b&&(h.b=u.s+Tt(h.b))},g0=function(e,t){var n=e[0]?Ii(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=br({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},_0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(Et(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Gr=function(e,t,n,i,r){return nt(e)?e.call(t,n,i,r):vt(e)&&~e.indexOf("random(")?Yr(e):e},Ju=ko+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Qu={};Ut(Ju+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Qu[a]=1});var lt=function(a){yu(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:Ur(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=i.parent||Qe,S=(Et(n)||Su(n)?qn(n[0]):"length"in i)?[n]:fn(n),y,b,v,P,C,x,M,D;if(s._targets=S.length?Go(S):qr("GSAP target "+n+" not found. https://gsap.com",!Qt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||Ds(c)||Ds(u)){i=s.vars;var H=i.easeReverse||i.yoyoEase;if(y=s.timeline=new Ot({data:"nested",defaults:d||{},targets:_&&_.data==="nested"?_.vars.targets:S}),y.kill(),y.parent=y._dp=Un(s),y._start=0,f||Ds(c)||Ds(u)){if(P=S.length,M=f&&Uu(f),Dn(f))for(C in f)~Ju.indexOf(C)&&(D||(D={}),D[C]=f[C]);for(b=0;b<P;b++)v=qs(i,Qu),v.stagger=0,H&&(v.easeReverse=H),D&&br(v,D),x=S[b],v.duration=+Gr(c,Un(s),b,x,S),v.delay=(+Gr(u,Un(s),b,x,S)||0)-s._delay,!f&&P===1&&v.delay&&(s._delay=u=v.delay,s._start+=u,v.delay=0),y.to(x,v,M?M(b,x,S):0),y._ease=Ie.none;y.duration()?c=u=0:s.timeline=0}else if(g){Ur(tn(y.vars.defaults,{ease:"none"})),y._ease=zi(g.ease||i.ease||"none");var J=0,F,T,R;if(Et(g))g.forEach(function(B){return y.to(S,B,">")}),y.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||_0(C,g[C],v,g.easeEach);for(C in v)for(F=v[C].sort(function(B,V){return B.t-V.t}),J=0,b=0;b<F.length;b++)T=F[b],R={ease:T.e,duration:(T.t-(b?F[b-1].t:0))/100*c},R[C]=T.v,y.to(S,R,J),J+=R.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||s.duration(c=y.duration())}else s.timeline=0;return m===!0&&!Fo&&(ni=Un(s),Qe.killTweensOf(S),ni=0),An(_,Un(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===Je(_._time)&&Nt(h)&&Y_(Un(s))&&_.data!=="nested")&&(s._tTime=-Ye,s.render(Math.max(0,-u)||0)),p&&zu(Un(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ye&&!u?l:i<Ye?0:i,f,m,g,d,p,_,S,y;if(!c)Z_(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,o);if(f=Je(h%d),h===l?(g=this._repeat,f=c):(p=Je(h/d),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),_=this._yoyo&&g&1,_&&(f=c-f),p=Sr(this._tTime,d),f===s&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&f!==d&&this._initted&&(this._lock=o=1,this.render(Je(d*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ou(this,u?i:f,o,r,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var b=f<s;if(b!==this._inv){var v=b?s:c-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!r&&!p&&($t(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&fo(this,i,r,o),$t(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&fo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ci(this,1),!r&&!(u&&!s)&&(h||s||_)&&($t(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s,l){jr||jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wo(this,c),u=this._ease(c/this._dur),m0(this,i,r,o,s,u,c,l)?this.resetTo(i,r,o,s,1):(na(this,0),this.parent||Iu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Br(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ni&&ni.vars.overwrite!==!0)._first||Br(this),this.parent&&o!==this.timeline.totalDuration()&&Mr(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?fn(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&q_(s,l))return r==="all"&&(this._pt=0),Br(this);for(h=this._op=this._op||[],r!=="all"&&(vt(r)&&(d={},Ut(r,function(S){return d[S]=1}),r=d),r=g0(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ea(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Br(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return kr(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return kr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Qe.killTweensOf(i,r,o)},e}(Zr);tn(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ut("staggerTo,staggerFrom,staggerFromTo",function(a){lt[a]=function(){var e=new Ot,t=mo.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var qo=function(e,t,n){return e[t]=n},eh=function(e,t,n){return e[t](n)},x0=function(e,t,n,i){return e[t](i.fp,n)},v0=function(e,t,n){return e.setAttribute(t,n)},Xo=function(e,t){return nt(e[t])?eh:zo(e[t])&&e.setAttribute?v0:qo},th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},y0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Yo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},b0=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},S0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ea(this,t,"_pt"):t.dep||(n=1),t=i;return!n},M0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ih=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},kt=function(){function a(t,n,i,r,o,s,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||th,this.d=l||this,this.set=c||qo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=M0,this.m=n,this.mt=r,this.tween=i},a}();Ut(ko+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Uo[a]=1});en.TweenMax=en.TweenLite=lt;en.TimelineLite=en.TimelineMax=Ot;Qe=new Ot({sortChildren:!1,defaults:Wr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qt.stringFilter=ju;var Oi=[],Bs={},w0=[],Ic=0,T0=0,Xa=function(e){return(Bs[e]||w0).map(function(t){return t()})},vo=function(){var e=Date.now(),t=[];e-Ic>2&&(Xa("matchMediaInit"),Oi.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,c;for(s in i)o=wn.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Xa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ic=e,Xa("matchMedia"))},rh=function(){function a(t,n){this.selector=n&&go(n),this.data=[],this._r=[],this.isReverted=!1,this.id=T0++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){nt(n)&&(r=i,i=n,n=nt);var o=this,s=function(){var c=$e,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=go(r)),$e=o,h=i.apply(o,arguments),nt(h)&&o._r.push(h),$e=c,o.selector=u,o.isReverted=!1,h};return o.last=s,n===nt?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},e.ignore=function(n){var i=$e;$e=null,n(this),$e=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof lt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=Oi.length;o--;)Oi[o].id===this.id&&Oi.splice(o,1)},e.revert=function(n){this.kill(n||{})},a}(),E0=function(){function a(t){this.contexts=[],this.scope=t,$e&&$e.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){Dn(n)||(n={matches:n});var o=new rh(0,r||this.scope),s=o.conditions={},l,c,u;$e&&!o.selector&&(o.selector=$e.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=wn.matchMedia(n[c]),l&&(Oi.indexOf(o)<0&&Oi.push(o),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(vo):l.addEventListener("change",vo)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Ys={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return qu(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return Qe.getTweensOf(e,t)},getProperty:function(e,t,n,i){vt(e)&&(e=fn(e)[0]);var r=Ii(e||{}).get,o=n?Ru:Du;return n==="native"&&(n=""),e&&(t?o((Yt[t]&&Yt[t].get||r)(e,t,n,i)):function(s,l,c){return o((Yt[s]&&Yt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=fn(e),e.length>1){var i=e.map(function(u){return Vt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Yt[t],s=Ii(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ur._pt=0,h.init(e,n?u+n:u,ur,0,[e]),h.render(1,h),ur._pt&&Yo(1,ur)}:s.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Vt.to(e,tn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zi(e.ease,Wr.ease)),Ac(Wr,e||{})},config:function(e){return Ac(Qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Yt[s]&&!en[s]&&qr(t+" effect requires "+s+" plugin.")}),Va[t]=function(s,l,c){return n(fn(s),tn(l||{},r),c)},o&&(Ot.prototype[t]=function(s,l,c){return this.add(Va[t](s,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=zi(t)},parseEase:function(e,t){return arguments.length?zi(e,t):Ie},getById:function(e){return Qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,r;for(n.smoothChildTiming=Nt(e.smoothChildTiming),Qe.remove(n),n._dp=0,n._time=n._tTime=Qe._time,i=Qe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof lt&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=r;return An(Qe,n,0),n},context:function(e,t){return e?new rh(e,t):$e},matchMedia:function(e){return new E0(e)},matchMediaRefresh:function(){return Oi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||vo()},addEventListener:function(e,t){var n=Bs[e]||(Bs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:i0,wrapYoyo:r0,distribute:Uu,random:Gu,snap:ku,normalize:n0,getUnit:Tt,clamp:J_,splitColor:Xu,toArray:fn,selector:go,mapRange:Hu,pipe:e0,unitize:t0,interpolate:s0,shuffle:Nu},install:Eu,effects:Va,ticker:jt,updateRoot:Ot.updateRoot,plugins:Yt,globalTimeline:Qe,core:{PropTween:kt,globals:Cu,Tween:lt,Timeline:Ot,Animation:Zr,getCache:Ii,_removeLinkedListItem:ea,reverting:function(){return bt},context:function(e){return e&&$e&&($e.data.push(e),e._ctx=$e),$e},suppressOverwrites:function(e){return Fo=e}}};Ut("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ys[a]=lt[a]});jt.add(Ot.updateRoot);ur=Ys.to({},{duration:0});var C0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},A0=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=C0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ya=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,c;if(vt(r)&&(l={},Ut(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}A0(s,r)}}}},Vt=Ys.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ya("roundProps",_o),Ya("modifiers"),Ya("snap",ku))||Ys;lt.version=Ot.version=Vt.version="3.15.0";Tu=1;Oo()&&wr();Ie.Power0;Ie.Power1;Ie.Power2;Ie.Power3;Ie.Power4;Ie.Linear;Ie.Quad;Ie.Cubic;Ie.Quart;Ie.Quint;Ie.Strong;Ie.Elastic;Ie.Back;Ie.SteppedEase;Ie.Bounce;Ie.Sine;Ie.Expo;Ie.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fc,ii,fr,jo,Pi,zc,Zo,P0=function(){return typeof window<"u"},Xn={},wi=180/Math.PI,pr=Math.PI/180,sr=Math.atan2,Oc=1e8,$o=/([A-Z])/g,L0=/(left|right|width|margin|padding|x)/i,D0=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},z0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ah=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},O0=function(e,t,n){return e.style[t]=n},B0=function(e,t,n){return e.style.setProperty(t,n)},N0=function(e,t,n){return e._gsap[t]=n},U0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},k0=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},G0=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},et="transform",Gt=et+"Origin",V0=function a(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Xn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ln[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=kn(i,s)}):this.tfm[e]=o.x?o[e]:kn(i,e),e===Gt&&(this.tfm.zOrigin=o.zOrigin);else return Ln.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(et)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gt,t,"")),e=et}(r||t)&&this.props.push(e,t,r[e])},oh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},H0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace($o,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Zo(),(!r||!r.isStart)&&!n[et]&&(oh(n),i.zOrigin&&n[Gt]&&(n[Gt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lh=function(e,t){var n={target:e,props:[],revert:H0,save:V0};return e._gsap||Vt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ch,bo=function(e,t){var n=ii.createElementNS?ii.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ii.createElement(e);return n&&n.style?n:ii.createElement(e)},Kt=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($o,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Tr(t)||t,1)||""},Bc="O,Moz,ms,Ms,Webkit".split(","),Tr=function(e,t,n){var i=t||Pi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Bc[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Bc[o]:"")+e},So=function(){P0()&&window.document&&(Fc=window,ii=Fc.document,fr=ii.documentElement,Pi=bo("div")||{style:{}},bo("div"),et=Tr(et),Gt=et+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ch=!!Tr("perspective"),Zo=Vt.core.reverting,jo=1)},Nc=function(e){var t=e.ownerSVGElement,n=bo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),fr.removeChild(n),r},Uc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},uh=function(e){var t,n;try{t=e.getBBox()}catch{t=Nc(e),n=1}return t&&(t.width||t.height)||n||(t=Nc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uc(e,["x","cx","x1"])||0,y:+Uc(e,["y","cy","y1"])||0,width:0,height:0}:t},hh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&uh(e))},ui=function(e,t){if(t){var n=e.style,i;t in Xn&&t!==Gt&&(t=et),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace($o,"-$1").toLowerCase())):n.removeAttribute(t)}},ri=function(e,t,n,i,r,o){var s=new kt(e._pt,t,n,0,1,o?ah:sh);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},kc={deg:1,rad:1,turn:1},W0={grid:1,flex:1},hi=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=Pi.style,l=L0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;if(i===o||!r||kc[i]||kc[o])return r;if(o!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&hh(e),(m||o==="%")&&(Xn[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],it(m?r/g*h:r/100*g);if(s[l?"width":"height"]=h+(f?o:i),d=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===ii||!d.appendChild)&&(d=ii.body),p=d._gsap,p&&m&&p.width&&l&&p.time===jt.time&&!p.uncache)return it(r/p.width*h);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:ui(e,t)}else(m||o==="%")&&!W0[Kt(d,"display")]&&(s.position=Kt(e,"position")),d===e&&(s.position="static"),d.appendChild(Pi),g=Pi[u],d.removeChild(Pi),s.position="absolute";return l&&m&&(p=Ii(d),p.time=jt.time,p.width=d[u]),it(f?g*r/h:g&&r?h/g*r:0)},kn=function(e,t,n,i){var r;return jo||So(),t in Ln&&t!=="transform"&&(t=Ln[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xn[t]&&t!=="transform"?(r=Kr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Zs(Kt(e,Gt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=js[t]&&js[t](e,t,n)||Kt(e,t)||Pu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?hi(e,t,r,n)+n:r},q0=function(e,t,n,i){if(!n||n==="none"){var r=Tr(t,e,1),o=r&&Kt(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Kt(e,"borderTopColor"))}var s=new kt(this._pt,e.style,t,0,1,nh),l=0,c=0,u,h,f,m,g,d,p,_,S,y,b,v;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(d=e.style[t],e.style[t]=i,i=Kt(e,t)||i,d?e.style[t]=d:ui(e,t)),u=[n,i],ju(u),n=u[0],i=u[1],f=n.match(cr)||[],v=i.match(cr)||[],v.length){for(;h=cr.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=dr(m,p)+b),_=parseFloat(p),y=p.substr((_+"").length),l=cr.lastIndex-y.length,y||(y=y||Qt.units[t]||b,l===i.length&&(i+=y,s.e+=y)),b!==y&&(m=hi(e,t,d,y)||0),s._pt={_next:s._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?ah:sh;return wu.test(i)&&(s.e=0),this._pt=s,s},Gc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gc[n]||n,t[1]=Gc[i]||i,t.join(" ")},Y0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Xn[s]&&(l=1,s=s==="transformOrigin"?Gt:et),ui(n,s);l&&(ui(n,et),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Kr(n,1),o.uncache=1,oh(i)))}},js={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new kt(e._pt,t,n,0,0,Y0);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},$r=[1,0,0,1,0,0],dh={},fh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vc=function(e){var t=Kt(e,et);return fh(t)?$r:t.substr(7).match(Mu).map(it)},Ko=function(e,t){var n=e._gsap||Ii(e),i=e.style,r=Vc(e),o,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?$r:r):(r===$r&&!e.offsetParent&&e!==fr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,fr.appendChild(e)),r=Vc(e),l?i.display=l:ui(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):fr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Mo=function(e,t,n,i,r,o){var s=e._gsap,l=r||Ko(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],S=l[5],y=t.split(" "),b=parseFloat(y[0])||0,v=parseFloat(y[1])||0,P,C,x,M;n?l!==$r&&(C=m*p-g*d)&&(x=b*(p/C)+v*(-d/C)+(d*S-p*_)/C,M=b*(-g/C)+v*(m/C)-(m*S-g*_)/C,b=x,v=M):(P=uh(e),b=P.x+(~y[0].indexOf("%")?b/100*P.width:b),v=P.y+(~(y[1]||y[0]).indexOf("%")?v/100*P.height:v)),i||i!==!1&&s.smooth?(_=b-c,S=v-u,s.xOffset=h+(_*m+S*d)-_,s.yOffset=f+(_*g+S*p)-S):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Gt]="0px 0px",o&&(ri(o,s,"xOrigin",c,b),ri(o,s,"yOrigin",u,v),ri(o,s,"xOffset",h,s.xOffset),ri(o,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},Kr=function(e,t){var n=e._gsap||new $u(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=Kt(e,Gt)||"0",u,h,f,m,g,d,p,_,S,y,b,v,P,C,x,M,D,H,J,F,T,R,B,V,z,K,X,k,W,Q,ee,ie;return u=h=f=d=p=_=S=y=b=0,m=g=1,n.svg=!!(e.getCTM&&hh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[et]!=="none"?l[et]:"")),i.scale=i.rotate=i.translate="none"),C=Ko(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Mo(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,C)),v=n.xOrigin||0,P=n.yOrigin||0,C!==$r&&(H=C[0],J=C[1],F=C[2],T=C[3],u=R=C[4],h=B=C[5],C.length===6?(m=Math.sqrt(H*H+J*J),g=Math.sqrt(T*T+F*F),d=H||J?sr(J,H)*wi:0,S=F||T?sr(F,T)*wi+d:0,S&&(g*=Math.abs(Math.cos(S*pr))),n.svg&&(u-=v-(v*H+P*F),h-=P-(v*J+P*T))):(ie=C[6],Q=C[7],X=C[8],k=C[9],W=C[10],ee=C[11],u=C[12],h=C[13],f=C[14],x=sr(ie,W),p=x*wi,x&&(M=Math.cos(-x),D=Math.sin(-x),V=R*M+X*D,z=B*M+k*D,K=ie*M+W*D,X=R*-D+X*M,k=B*-D+k*M,W=ie*-D+W*M,ee=Q*-D+ee*M,R=V,B=z,ie=K),x=sr(-F,W),_=x*wi,x&&(M=Math.cos(-x),D=Math.sin(-x),V=H*M-X*D,z=J*M-k*D,K=F*M-W*D,ee=T*D+ee*M,H=V,J=z,F=K),x=sr(J,H),d=x*wi,x&&(M=Math.cos(x),D=Math.sin(x),V=H*M+J*D,z=R*M+B*D,J=J*M-H*D,B=B*M-R*D,H=V,R=z),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=it(Math.sqrt(H*H+J*J+F*F)),g=it(Math.sqrt(B*B+ie*ie)),x=sr(R,B),S=Math.abs(x)>2e-4?x*wi:0,b=ee?1/(ee<0?-ee:ee):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fh(Kt(e,et)),V&&e.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=it(m),n.scaleY=it(g),n.rotation=it(d)+s,n.rotationX=it(p)+s,n.rotationY=it(_)+s,n.skewX=S+s,n.skewY=y+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gt]=Zs(c)),n.xOffset=n.yOffset=0,n.force3D=Qt.force3D,n.renderTransform=n.svg?Z0:ch?ph:j0,n.uncache=0,n},Zs=function(e){return(e=e.split(" "))[0]+" "+e[1]},ja=function(e,t,n){var i=Tt(t);return it(parseFloat(t)+parseFloat(hi(e,"x",n+"px",i)))+i},j0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ph(e,t)},yi="0deg",Ir="0px",bi=") ",ph=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,S=n.target,y=n.zOrigin,b="",v=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==yi||u!==yi)){var P=parseFloat(u)*pr,C=Math.sin(P),x=Math.cos(P),M;P=parseFloat(h)*pr,M=Math.cos(P),o=ja(S,o,C*M*-y),s=ja(S,s,-Math.sin(P)*-y),l=ja(S,l,x*M*-y+y)}p!==Ir&&(b+="perspective("+p+bi),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(v||o!==Ir||s!==Ir||l!==Ir)&&(b+=l!==Ir||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+bi),c!==yi&&(b+="rotate("+c+bi),u!==yi&&(b+="rotateY("+u+bi),h!==yi&&(b+="rotateX("+h+bi),(f!==yi||m!==yi)&&(b+="skew("+f+", "+m+bi),(g!==1||d!==1)&&(b+="scale("+g+", "+d+bi),S.style[et]=b||"translate(0, 0)"},Z0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,S=n.forceCSS,y=parseFloat(o),b=parseFloat(s),v,P,C,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pr,c*=pr,v=Math.cos(l)*h,P=Math.sin(l)*h,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=pr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),v*=M,P*=M)),v=it(v),P=it(P),C=it(C),x=it(x)):(v=h,x=f,P=C=0),(y&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(y=hi(m,"x",o,"px"),b=hi(m,"y",s,"px")),(g||d||p||_)&&(y=it(y+g-(g*v+d*C)+p),b=it(b+d-(g*P+d*x)+_)),(i||r)&&(M=m.getBBox(),y=it(y+i/100*M.width),b=it(b+r/100*M.height)),M="matrix("+v+","+P+","+C+","+x+","+y+","+b+")",m.setAttribute("transform",M),S&&(m.style[et]=M)},$0=function(e,t,n,i,r){var o=360,s=vt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?wi:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Oc)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Oc)%o-~~(c/o)*o)),e._pt=f=new kt(e._pt,t,n,i,c,R0),f.e=u,f.u="deg",e._props.push(n),f},Hc=function(e,t){for(var n in t)e[n]=t[n];return e},K0=function(e,t,n){var i=Hc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[et]=t,s=Kr(n,1),ui(n,et),n.setAttribute("transform",c)):(c=getComputedStyle(n)[et],o[et]=t,s=Kr(n,1),o[et]=c);for(l in Xn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=Tt(c),g=Tt(u),h=m!==g?hi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new kt(e._pt,s,l,h,f-h,yo),e._pt.u=g||0,e._props.push(l));Hc(s,i)};Ut("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});js[e>1?"border"+a:a]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return kn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var mh={name:"css",register:So,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,S,y,b,v,P,C,x,M;jo||So(),this.styles=this.styles||lh(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Yt[d]&&Ku(d,t,n,i,e,r)))){if(m=typeof u,g=js[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Yr(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",li.lastIndex=0,li.test(c)||(p=Tt(c),_=Tt(u),_?p!==_&&(c=hi(e,d,c,_)+_):p&&(u+=p)),this.add(s,"setProperty",c,u,i,r,0,0,d),o.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],vt(c)&&~c.indexOf("random(")&&(c=Yr(c)),Tt(c+"")||c==="auto"||(c+=Qt.units[d]||Tt(kn(e,d))||""),(c+"").charAt(1)==="="&&(c=kn(e,d))):c=kn(e,d),f=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),d in Ln&&(d==="autoAlpha"&&(f===1&&kn(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),ri(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ln[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in Xn,y){if(this.styles.save(d),M=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Kt(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=Kt(e,"perspective"),D?e.style.perspective=D:ui(e,"perspective")}h=parseFloat(u)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||Kr(e,t.parseTransform),P=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new kt(this._pt,s,et,0,1,v.renderTransform,v,0,-1),b.dep=1),d==="scale")this._pt=new kt(this._pt,v,"scaleY",v.scaleY,(S?dr(v.scaleY,S+h):h)-v.scaleY||0,yo),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Gt,0,s[Gt]),u=X0(u),v.svg?Mo(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&ri(this,v,"zOrigin",v.zOrigin,_),ri(this,s,d,Zs(c),Zs(u)));continue}else if(d==="svgOrigin"){Mo(e,u,1,P,0,this);continue}else if(d in dh){$0(this,v,d,f,S?dr(f,S+u):u);continue}else if(d==="smoothOrigin"){ri(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){K0(this,u,e);continue}}else d in s||(d=Tr(d)||d);if(y||(h||h===0)&&(f||f===0)&&!D0.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=Tt(u)||(d in Qt.units?Qt.units[d]:p),p!==_&&(f=hi(e,d,c,_)),this._pt=new kt(this._pt,y?v:s,d,f,(S?dr(f,S+h):h)-f,!y&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?z0:yo),this._pt.u=_||0,y&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=F0):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=I0);else if(d in s)q0.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,i,r);else if(d!=="parseTransform"){No(d,u);continue}y||(d in s?x.push(d,0,s[d]):typeof e[d]=="function"?x.push(d,2,e[d]()):x.push(d,1,c||e[d])),o.push(d)}}C&&ih(this)},render:function(e,t){if(t.tween._time||!Zo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:kn,aliases:Ln,getSetter:function(e,t,n){var i=Ln[t];return i&&i.indexOf(",")<0&&(t=i),t in Xn&&t!==Gt&&(e._gsap.x||kn(e,"x"))?n&&zc===n?t==="scale"?U0:N0:(zc=n||{})&&(t==="scale"?k0:G0):e.style&&!zo(e.style[t])?O0:~t.indexOf("-")?B0:Xo(e,t)},core:{_removeProperty:ui,_getMatrix:Ko}};Vt.utils.checkPrefix=Tr;Vt.core.getStyleSaver=lh;(function(a,e,t,n){var i=Ut(a+","+e+","+t,function(r){Xn[r]=1});Ut(e,function(r){Qt.units[r]="deg",dh[r]=1}),Ln[i[13]]=a+","+e,Ut(n,function(r){var o=r.split(":");Ln[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Qt.units[a]="px"});Vt.registerPlugin(mh);var un=Vt.registerPlugin(mh)||Vt;un.core.Tween;let gn,be,ct,rt,hn,Pe,wo=[],Fr=null,En=null,gt=null,Rt={width:0,height:0,aspectRatio:1,name:"default_image.jpg"},on={positions:[],colors:[],pixelVals:[],depthGradients:[],grid:[]},Wc=[],gh=new O,$s=new O,Wn=!1,Jo=!1,Ns=0,To=.5,Gn=null,Rs=[],Eo=!1,Cn=[];window.customTimelinePlaying=!1;window.customTimelineTl=null;let Za=!1;const se={uPointSize:{value:1.5},uDepthScale:{value:80},uScatterAmp:{value:0},uScatterFreq:{value:.05},uScatterSpeed:{value:0},uEnableFloating:{value:!0},uOrganicFieldStrength:{value:0},uOrganicFieldSpeed:{value:1},uTime:{value:0},uColorMode:{value:0},uTintColor:{value:new Te("#00ffcc")},uSizeAttenuation:{value:!0},uAlphaThreshold:{value:0},uModelScale:{value:300},uPointShape:{value:0},uPointOpacity:{value:.6},uEnableShading:{value:!0},uLightDir:{value:new O(.5,.5,.7).normalize()},uExposure:{value:1},uContrast:{value:1.1},uSaturation:{value:1},uEnableSplitToning:{value:!0},uShadowTint:{value:new Te("#094074")},uHighlightTint:{value:new Te("#fffaec")},uTintMix:{value:.6},uLinkOpacity:{value:.3},uLinkColorMode:{value:0},uLinkTintColor:{value:new Te("#ffffff")},linewidth:{value:2},resolution:{value:new Me(window.innerWidth,window.innerHeight)},uLinkGlow:{value:1.5}},J0=`
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
`,Q0=`
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
`,ex=`
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
`,tx=`
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
`;function nx(){const a=document.getElementById("webgl");gn=new y_,gn.background=new Te("#030406"),be=new cn(60,window.innerWidth/window.innerHeight,1,3e3),_h(),ct=new _u({canvas:a,antialias:!0,preserveDrawingBuffer:!0}),ct.setSize(window.innerWidth,window.innerHeight),ct.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new D_(gn,be);hn=new yr(new Me(window.innerWidth,window.innerHeight),1.5,.4,.85),hn.threshold=0,hn.strength=.5,hn.radius=.5,rt=new L_(ct),rt.addPass(e),rt.addPass(hn),Pe=new C_(be,ct.domElement),Pe.enableDamping=!0,Pe.dampingFactor=.05,Pe.maxDistance=2e3,Pe.minDistance=10,Pe.addEventListener("start",()=>{if(Wn=!1,Pe&&(Pe.enableZoom=!0),window.cinematicTl&&(window.cinematicTl.kill(),window.cinematicTl=null),window.customTimelineTl){window.customTimelineTl.kill(),window.customTimelineTl=null,window.customTimelinePlaying=!1;const t=document.getElementById("btn-play-timeline");t&&(t.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Play Path
        `,t.classList.remove("btn-active"))}un.killTweensOf(be.position),un.killTweensOf(Pe.target)}),ct.domElement.addEventListener("wheel",t=>{if(window.cinematicTl||window.customTimelinePlaying||Wn){t.preventDefault(),t.stopPropagation();const n=.03;let i=be.fov+t.deltaY*n;i=Math.max(10,Math.min(120,i)),be.fov=i,be.updateProjectionMatrix()}},{passive:!1}),window.addEventListener("resize",ix),xx(),rx(),xh(0)}function _h(){be&&(gh.set(0,0,320),$s.set(0,0,0),Wn=!0,Pe&&(Pe.enableZoom=!1),un.to(be.position,{x:0,y:0,z:320,duration:2,ease:"power3.inOut"}),un.to(be,{fov:60,duration:2,ease:"power3.inOut",onUpdate:()=>be.updateProjectionMatrix()}),Pe?un.to(Pe.target,{x:0,y:0,z:0,duration:2,ease:"power3.inOut",onComplete:()=>{Wn=!1,Pe.enableZoom=!0}}):Wn=!1)}function Ti(a){if(!be)return;if(window.cinematicTl&&(window.cinematicTl.kill(),window.cinematicTl=null),Qr(),Wn=!0,Pe&&(Pe.enableZoom=!1),a==="cinematic"){window.cinematicTl=un.timeline({repeat:-1,yoyo:!0}),window.cinematicTl.to(be.position,{x:250,y:100,z:250,duration:6,ease:"sine.inOut"},0),Pe&&window.cinematicTl.to(Pe.target,{x:0,y:0,z:0,duration:6,ease:"sine.inOut"},0),window.cinematicTl.to(be.position,{x:-50,y:300,z:50,duration:8,ease:"power1.inOut"},6),window.cinematicTl.to(be.position,{x:-200,y:20,z:-150,duration:8,ease:"sine.inOut"},14),window.cinematicTl.to(be.position,{x:0,y:0,z:120,duration:7,ease:"power2.inOut"},22),un.to(be,{fov:60,duration:3,ease:"sine.inOut",onUpdate:()=>be.updateProjectionMatrix()});return}let e=0,t=0,n=320;a==="reset"?(e=0,t=0,n=320):a==="iso"?(e=250,t=150,n=250):a==="side"?(e=350,t=0,n=0):a==="top"?(e=0,t=350,n=0):a==="macro"&&(e=0,t=0,n=60),gh.set(e,t,n),$s.set(0,0,0),un.to(be.position,{x:e,y:t,z:n,duration:2.5,ease:"power3.inOut"}),un.to(be,{fov:60,duration:2.5,ease:"power3.inOut",onUpdate:()=>be.updateProjectionMatrix()}),Pe?un.to(Pe.target,{x:0,y:0,z:0,duration:2.5,ease:"power3.inOut",onComplete:()=>{Wn=!1,Pe.enableZoom=!0}}):Wn=!1}function ix(){be.aspect=window.innerWidth/window.innerHeight,be.updateProjectionMatrix(),ct.setSize(window.innerWidth,window.innerHeight),rt&&rt.setSize(window.innerWidth,window.innerHeight),se.resolution&&se.resolution.value.set(window.innerWidth,window.innerHeight)}function rx(){const a="resources/PHOTO-2026-05-21-10-03-04.jpg",e=new Image;e.crossOrigin="Anonymous",e.onload=()=>{Qo(e,"PHOTO-2026-05-21-10-03-04.jpg")},e.onerror=()=>{console.warn("Could not load default image (possible CORS or path error). Creating procedural pattern..."),sx()},e.src=a}function sx(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createRadialGradient(512/2,512/2,20,512/2,512/2,512/2);n.addColorStop(0,"#00f2fe"),n.addColorStop(.5,"#7c3aed"),n.addColorStop(1,"#050608"),t.fillStyle=n,t.fillRect(0,0,512,512),t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath();for(let o=0;o<360;o+=5){const s=o*Math.PI/180,l=512/3.5*(1+.3*Math.sin(s*6)),c=512/2+Math.cos(s)*l,u=512/2+Math.sin(s)*l;o===0?t.moveTo(c,u):t.lineTo(c,u)}t.closePath(),t.stroke();for(let o=0;o<30;o++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.7+.3})`,t.beginPath(),t.arc(Math.random()*512,Math.random()*512,Math.random()*8+2,0,Math.PI*2),t.fill();const i=e.toDataURL(),r=new Image;r.onload=()=>{Qo(r,"procedural_fallback_pattern.png"),document.getElementById("file-name-display").innerText="Procedural Core Pattern",document.getElementById("file-name-display").style.color="#00f2fe"},r.src=i}function Qo(a,e){Rt.name=e,Rt.width=a.width,Rt.height=a.height,Rt.aspectRatio=a.width/a.height,document.getElementById("file-name-display").innerText=e,document.getElementById("file-name-display").style.color="",document.getElementById("res-display").innerText=`${a.width} x ${a.height}`;const t=document.getElementById("image-canvas"),n=t.getContext("2d");t.width=a.width,t.height=a.height,n.drawImage(a,0,0),gt=n.getImageData(0,0,a.width,a.height).data,Er()}function Er(){if(Fr&&(gn.remove(Fr),Fr.geometry.dispose()),!gt)return;const a=parseInt(document.getElementById("res-step").value),e=Rt.width,t=Rt.height,n=[],i=[],r=[],o=[],s=document.getElementById("depth-source").value,l=t,c=Math.ceil(t/a),u=Math.ceil(e/a);on.grid=[];for(let d=0;d<c;d++)on.grid[d]=new Int32Array(u).fill(-1);function h(d,p){const _=Math.max(0,Math.min(d,e-1)),y=(Math.max(0,Math.min(p,t-1))*e+_)*4,b=gt[y]/255,v=gt[y+1]/255,P=gt[y+2]/255;if(s==="none")return 0;if(s==="luminance")return .299*b+.587*v+.114*P;if(s==="red")return b;if(s==="green")return v;if(s==="blue")return P;if(s==="saturation"){const C=Math.max(b,v,P),x=Math.min(b,v,P);return C===0?0:(C-x)/C}return 0}let f=0;for(let d=0;d<t;d+=a){let p=0;for(let _=0;_<e;_+=a){const S=(d*e+_)*4,y=gt[S]/255,b=gt[S+1]/255,v=gt[S+2]/255;if(gt[S+3]/255<.05){p++;continue}const C=(_-e/2)/l,x=(t-d-t/2)/l,M=0,D=h(_,d),H=Math.min(_+a,e-1),J=Math.max(_-a,0),F=Math.min(d+a,t-1),T=Math.max(d-a,0),R=h(H,d),B=h(J,d),V=h(_,F),z=h(_,T),K=(H-J)/l,X=(F-T)/l,k=K>0?(R-B)/K:0,W=X>0?(z-V)/X:0,Q=n.length/3;n.push(C,x,M),i.push(y,b,v),r.push(D),o.push(k,W),f<c&&p<u&&(on.grid[f][p]=Q),p++}f++}on.positions=n,on.colors=i,on.pixelVals=r,on.depthGradients=o;const m=new nn;m.setAttribute("position",new _t(n,3)),m.setAttribute("originalColor",new _t(i,3)),m.setAttribute("pixelVal",new _t(r,1)),m.setAttribute("depthGradient",new _t(o,2));const g=new Dt({vertexShader:J0,fragmentShader:Q0,uniforms:se,transparent:!0,depthTest:!0,depthWrite:!0,blending:Li});Fr=new M_(m,g),gn.add(Fr),document.getElementById("stats-particles").innerText=(n.length/3).toLocaleString(),Jr()}function Jr(){if(En&&(gn.remove(En),En.geometry.dispose(),En=null),!document.getElementById("enable-links").checked||!gt)return;const e=on.grid,t=e.length;if(t===0)return;const n=e[0].length,i=on.positions,r=on.colors,o=on.pixelVals,s=on.depthGradients,l=parseFloat(document.getElementById("model-scale").value),c=parseFloat(document.getElementById("depth-scale").value),u=parseFloat(document.getElementById("link-max-dist").value),h=u*u,f=[],m=[],g=[],d=[];Wc=[];for(let C=0;C<t;C++)for(let x=0;x<n;x++){const M=e[C][x];if(M===-1)continue;const D=i[M*3],H=i[M*3+1],J=i[M*3+2],F=o[M],T=D*l,R=H*l,B=J+F*c,V=[{x:x+1,y:C},{x,y:C+1},{x:x+1,y:C+1},{x:x-1,y:C+1}];for(let z=0;z<V.length;z++){const K=V[z].x,X=V[z].y;if(K>=0&&K<n&&X>=0&&X<t){const k=e[X][K];if(k===-1)continue;const W=i[k*3],Q=i[k*3+1],ee=i[k*3+2],ie=o[k],Y=W*l,Ee=Q*l,de=ee+ie*c,_e=T-Y,le=R-Ee,Ce=B-de;_e*_e+le*le+Ce*Ce<h&&(Wc.push({indexA:M,indexB:k}),f.push(D,H,J),m.push(r[M*3],r[M*3+1],r[M*3+2]),g.push(F),d.push(s[M*2],s[M*2+1]),f.push(W,Q,ee),m.push(r[k*3],r[k*3+1],r[k*3+2]),g.push(ie),d.push(s[k*2],s[k*2+1]))}}}if(f.length===0)return;const p=new R_;p.setPositions(f),p.setColors(m);const _=f.length/6,S=new Float32Array(_),y=new Float32Array(_),b=new Float32Array(_*2),v=new Float32Array(_*2);for(let C=0;C<_;C++)S[C]=g[C*2],y[C]=g[C*2+1],b[C*2]=d[C*4],b[C*2+1]=d[C*4+1],v[C*2]=d[C*4+2],v[C*2+1]=d[C*4+3];p.setAttribute("pixelValStart",new Cs(S,1)),p.setAttribute("pixelValEnd",new Cs(y,1)),p.setAttribute("depthGradientStart",new Cs(b,2)),p.setAttribute("depthGradientEnd",new Cs(v,2));const P=new Dt({vertexShader:ex,fragmentShader:tx,uniforms:se,transparent:!0,depthTest:!0,depthWrite:!1,blending:Us});En=new Pn(p,P),gn.add(En)}let qc=0,$a=0,Ka=0;function ax(a){if($a++,a>Ka+1e3){const e=Math.round($a*1e3/(a-Ka)),t=(a-qc).toFixed(1);document.getElementById("stats-fps").innerText=`${t} ms (${e} fps)`,Ka=a,$a=0}qc=a}function xh(a){requestAnimationFrame(xh);const e=a*.001;if(se.uTime.value=e,!Wn&&Ns>0){const t=e*To,n=Math.sin(t)*Ns,i=Math.cos(t*.8)*Ns;Pe.target.x=$s.x+n,Pe.target.y=$s.y+i}Pe&&(Pe.autoRotate=Jo,Pe.autoRotateSpeed=To*2,Pe.update()),rt&&gn&&be?rt.render():ct&&gn&&be&&ct.render(gn,be),ax(a)}function el(){if(!gt)return null;const a=parseInt(document.getElementById("res-step").value),e=Rt.width,t=Rt.height,n=document.getElementById("depth-source").value,i=parseFloat(document.getElementById("depth-scale").value),r=parseFloat(document.getElementById("scatter-amp").value),o=parseFloat(document.getElementById("alpha-threshold").value),s=document.getElementById("monochrome-color").value,l=new Te(s),c=parseFloat(document.getElementById("model-scale").value),u=document.getElementById("enable-shading").checked,h=parseFloat(document.getElementById("exposure").value),f=parseFloat(document.getElementById("contrast").value),m=parseFloat(document.getElementById("saturation").value),g=document.getElementById("enable-split-toning").checked,d=new Te(document.getElementById("shadow-tint").value),p=new Te(document.getElementById("highlight-tint").value),_=parseFloat(document.getElementById("tint-mix").value),y=parseFloat(document.getElementById("light-angle").value)*Math.PI/180,b=Math.sin(y),v=Math.cos(y),P=.5,C=new O(b,P,v).normalize(),x=document.getElementById("color-mode").value;let M=0;x==="original"?M=0:x==="greyscale"?M=1:x==="depth-gradient"?M=2:x==="monochrome"&&(M=3);const D=t,H=[];function J(T,R,B){const V=T*.3183099+R*.3183099+B*.3183099,z=Math.abs(Math.sin(V+.1)*33.33)%1,K=Math.abs(Math.cos(V+.2)*44.44)%1,X=Math.abs(Math.sin(V+.3)*55.55)%1;return(z+K+X)/3}function F(T,R){const B=Math.max(0,Math.min(T,e-1)),z=(Math.max(0,Math.min(R,t-1))*e+B)*4,K=gt[z]/255,X=gt[z+1]/255,k=gt[z+2]/255;if(n==="none")return 0;if(n==="luminance")return .299*K+.587*X+.114*k;if(n==="red")return K;if(n==="green")return X;if(n==="blue")return k;if(n==="saturation"){const W=Math.max(K,X,k),Q=Math.min(K,X,k);return W===0?0:(W-Q)/W}return 0}for(let T=0;T<t;T+=a)for(let R=0;R<e;R+=a){const B=(T*e+R)*4,V=gt[B]/255,z=gt[B+1]/255,K=gt[B+2]/255;if(gt[B+3]/255<.05)continue;const k=.299*V+.587*z+.114*K;if(k<o)continue;const W=(R-e/2)/D*c,Q=(t-T-t/2)/D*c;let ee=0;const ie=F(R,T);ee+=ie*i;let Y=W,Ee=Q,de=ee;if(r>0){const Ne=J(W+11.1,Q+17.3,0),We=J(W+23.4,Q+31.8,0),Ve=J(W+47.9,Q+93.1,0);Y+=(Ne-.5)*r,Ee+=(We-.5)*r,de+=(Ve-.5)*r}let _e=V,le=z,Ce=K;if(M===1)_e=le=Ce=k;else if(M===2){let Ne=.5;Math.abs(i)>.1&&(Ne=(de+Math.abs(i))/(Math.abs(i)*2)),Ne=Math.max(0,Math.min(1,Ne));const We=new Te("#0d0059"),Ve=new Te("#00f2fe"),tt=new Te("#ff00cc");let He;Ne<.5?He=We.clone().lerp(Ve,Ne*2):He=Ve.clone().lerp(tt,(Ne-.5)*2),_e=He.r,le=He.g,Ce=He.b}else M===3&&(_e=V*l.r,le=z*l.g,Ce=K*l.b);const pe=new Te(_e,le,Ce);if(u){const Ne=Math.min(R+a,e-1),We=Math.max(R-a,0),Ve=Math.min(T+a,t-1),tt=Math.max(T-a,0),He=F(Ne,T),ke=F(We,T),It=F(R,Ve),St=F(R,tt),A=(Ne-We)/D,w=(Ve-tt)/D,q=A>0?(He-ke)/A:0,te=w>0?(St-It)/w:0,re=c>.001?i/c:0,oe=new O(-re*q,-re*te,1).normalize(),L=.2+.8*Math.abs(oe.dot(C));pe.multiplyScalar(L)}pe.multiplyScalar(h),pe.r=(pe.r-.5)*f+.5,pe.g=(pe.g-.5)*f+.5,pe.b=(pe.b-.5)*f+.5;const ve=.299*pe.r+.587*pe.g+.114*pe.b;if(pe.lerp(new Te(ve,ve,ve),1-m),g){const Ne=Math.max(0,Math.min(1,.299*pe.r+.587*pe.g+.114*pe.b)),We=pe.clone().multiply(d),Ve=pe.clone().multiply(p),tt=We.clone().lerp(Ve,Ne);pe.lerp(tt,_)}H.push({x:Y,y:Ee,z:de,r:Math.max(0,Math.min(1,pe.r)),g:Math.max(0,Math.min(1,pe.g)),b:Math.max(0,Math.min(1,pe.b))})}return H}function tl(a,e,t){const n=new Blob([a],{type:t}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}function ox(){const a=el();if(!a||a.length===0)return;let e=`# Exported from Particle Saga
# Particles Count: ${a.length}
`;for(let n=0;n<a.length;n++){const i=a[n];e+=`v ${i.x.toFixed(4)} ${i.y.toFixed(4)} ${i.z.toFixed(4)} ${i.r.toFixed(4)} ${i.g.toFixed(4)} ${i.b.toFixed(4)}
`}const t=Rt.name.split(".")[0];tl(e,`${t}_particles.obj`,"text/plain")}function lx(){const a=el();if(!a||a.length===0)return;let e=`x,y,z,r,g,b
`;for(let n=0;n<a.length;n++){const i=a[n],r=Math.round(i.r*255),o=Math.round(i.g*255),s=Math.round(i.b*255);e+=`${i.x.toFixed(4)},${i.y.toFixed(4)},${i.z.toFixed(4)},${r},${o},${s}
`}const t=Rt.name.split(".")[0];tl(e,`${t}_particles.csv`,"text/csv")}function cx(){const a=el();if(!a||a.length===0)return;const e={positions:[],colors:[]};for(let n=0;n<a.length;n++){const i=a[n];e.positions.push(i.x,i.y,i.z),e.colors.push(i.r,i.g,i.b)}const t=Rt.name.split(".")[0];tl(JSON.stringify(e,null,2),`${t}_particles.json`,"application/json")}function ux(){if(!ct||!be)return;const a=window.innerWidth,e=window.innerHeight,t=3840,n=Math.round(t/(a/e));ct.setSize(t,n,!1),rt&&rt.setSize(t,n),be.aspect=t/n,be.updateProjectionMatrix(),se.resolution&&se.resolution.value.set(t,n),rt?rt.render():ct.render(gn,be);const i=ct.domElement.toDataURL("image/png"),r=document.createElement("a"),o=Rt.name.split(".")[0];r.href=i,r.download=`${o}_render_4k.png`,r.click(),ct.setSize(a,e),rt&&rt.setSize(a,e),be.aspect=a/e,be.updateProjectionMatrix(),se.resolution&&se.resolution.value.set(a,e),rt?rt.render():ct.render(gn,be)}function vh(a){const e=a*Math.PI/180,t=Math.sin(e),n=Math.cos(e),i=.5,r=new O(t,i,n).normalize();se.uLightDir.value.copy(r)}const hx={"0001":{camera:"iso",resStep:2,pointSize:1.2,modelScale:300,depthScale:120,scatterAmp:0,scatterFreq:.05,scatterSpeed:0,pointShape:0,pointOpacity:.6,colorMode:"greyscale",exposure:1.2,contrast:1.4,saturation:.8,enableShading:!0,enableSplitToning:!1,tintMix:.5,lightAngle:45},"0002":{camera:"reset",resStep:2,pointSize:2,modelScale:300,depthScale:80,scatterAmp:5,scatterFreq:.05,scatterSpeed:.3,pointShape:0,pointOpacity:.6,colorMode:"original",exposure:1,contrast:1.2,saturation:1,enableShading:!0,enableSplitToning:!0,shadowTint:"#094074",highlightTint:"#fffaec",tintMix:.6,lightAngle:60},"0003":{camera:"side",resStep:2,pointSize:1.5,modelScale:300,depthScale:150,scatterAmp:12,scatterFreq:.05,scatterSpeed:.8,pointShape:0,pointOpacity:.6,colorMode:"monochrome",monochromeColor:"#00ffcc",exposure:.9,contrast:1.5,saturation:.6,enableShading:!1,enableSplitToning:!1,tintMix:.7,lightAngle:30}};function dx(a){const e=hx[a];e&&(e.resStep!==void 0&&(document.getElementById("res-step").value=e.resStep),e.pointSize!==void 0&&(document.getElementById("point-size").value=e.pointSize),e.modelScale!==void 0&&(document.getElementById("model-scale").value=e.modelScale),e.depthScale!==void 0&&(document.getElementById("depth-scale").value=e.depthScale),e.scatterAmp!==void 0&&(document.getElementById("scatter-amp").value=e.scatterAmp),e.scatterFreq!==void 0&&(document.getElementById("scatter-freq").value=e.scatterFreq),e.scatterSpeed!==void 0&&(document.getElementById("scatter-speed").value=e.scatterSpeed),e.pointShape!==void 0&&(document.getElementById("point-shape").value=e.pointShape),e.pointOpacity!==void 0&&(document.getElementById("point-opacity").value=e.pointOpacity),e.colorMode!==void 0&&(document.getElementById("color-mode").value=e.colorMode),e.monochromeColor!==void 0&&(document.getElementById("monochrome-color").value=e.monochromeColor),e.exposure!==void 0&&(document.getElementById("exposure").value=e.exposure),e.contrast!==void 0&&(document.getElementById("contrast").value=e.contrast),e.saturation!==void 0&&(document.getElementById("saturation").value=e.saturation),e.enableShading!==void 0&&(document.getElementById("enable-shading").checked=e.enableShading),e.enableSplitToning!==void 0&&(document.getElementById("enable-split-toning").checked=e.enableSplitToning),e.shadowTint!==void 0&&(document.getElementById("shadow-tint").value=e.shadowTint),e.highlightTint!==void 0&&(document.getElementById("highlight-tint").value=e.highlightTint),e.tintMix!==void 0&&(document.getElementById("tint-mix").value=e.tintMix),e.lightAngle!==void 0&&(document.getElementById("light-angle").value=e.lightAngle),Co(),Er(),e.camera&&Ti(e.camera),document.querySelectorAll(".preset-btn").forEach(t=>{t.getAttribute("data-preset")===a?t.classList.add("active"):t.classList.remove("active")}))}function Co(){se.uPointSize.value=parseFloat(document.getElementById("point-size").value),se.uModelScale.value=parseFloat(document.getElementById("model-scale").value),se.uDepthScale.value=parseFloat(document.getElementById("depth-scale").value),se.uScatterAmp.value=parseFloat(document.getElementById("scatter-amp").value),se.uScatterFreq.value=parseFloat(document.getElementById("scatter-freq").value),se.uScatterSpeed.value=parseFloat(document.getElementById("scatter-speed").value),se.uPointOpacity.value=parseFloat(document.getElementById("point-opacity").value),se.uAlphaThreshold.value=parseFloat(document.getElementById("alpha-threshold").value),se.uSizeAttenuation.value=document.getElementById("size-attenuation").checked,se.uPointShape.value=parseInt(document.getElementById("point-shape").value),se.uOrganicFieldStrength.value=parseFloat(document.getElementById("organic-field-strength").value),se.uOrganicFieldSpeed.value=parseFloat(document.getElementById("organic-field-speed").value),se.uEnableFloating.value=document.getElementById("enable-organic-float").checked,hn&&(hn.strength=parseFloat(document.getElementById("bloom-strength").value),hn.radius=parseFloat(document.getElementById("bloom-radius").value));const a=document.getElementById("color-mode").value;let e=0;a==="original"?e=0:a==="greyscale"?e=1:a==="depth-gradient"?e=2:a==="monochrome"&&(e=3),se.uColorMode.value=e,se.uTintColor.value.set(document.getElementById("monochrome-color").value),se.uLinkOpacity.value=parseFloat(document.getElementById("link-opacity").value),se.uLinkTintColor.value.set(document.getElementById("link-tint-color").value),se.linewidth.value=parseFloat(document.getElementById("link-thickness").value),se.uLinkGlow.value=parseFloat(document.getElementById("link-glow").value);const t=document.getElementById("link-color-mode").value;let n=0;t==="match-particles"?n=0:t==="tint"?n=1:t==="depth-gradient"&&(n=2),se.uLinkColorMode.value=n,se.uEnableShading.value=document.getElementById("enable-shading").checked,se.uExposure.value=parseFloat(document.getElementById("exposure").value),se.uContrast.value=parseFloat(document.getElementById("contrast").value),se.uSaturation.value=parseFloat(document.getElementById("saturation").value),se.uEnableSplitToning.value=document.getElementById("enable-split-toning").checked,se.uShadowTint.value.set(document.getElementById("shadow-tint").value),se.uHighlightTint.value.set(document.getElementById("highlight-tint").value),se.uTintMix.value=parseFloat(document.getElementById("tint-mix").value),vh(parseFloat(document.getElementById("light-angle").value)),[{id:"res-step",unit:"px"},{id:"point-size",unit:""},{id:"model-scale",unit:""},{id:"depth-scale",unit:""},{id:"scatter-amp",unit:""},{id:"scatter-freq",unit:""},{id:"scatter-speed",unit:""},{id:"point-opacity",unit:""},{id:"alpha-threshold",unit:""},{id:"exposure",unit:""},{id:"contrast",unit:""},{id:"saturation",unit:""},{id:"tint-mix",unit:""},{id:"light-angle",unit:"°"},{id:"drift-amp",unit:""},{id:"drift-speed",unit:"x"},{id:"link-opacity",unit:""},{id:"link-max-dist",unit:""},{id:"link-thickness",unit:"px"},{id:"link-glow",unit:""},{id:"organic-field-strength",unit:""},{id:"organic-field-speed",unit:""},{id:"bloom-strength",unit:""},{id:"bloom-radius",unit:""},{id:"timeline-speed",unit:"s"}].forEach(l=>{const c=document.getElementById(l.id),u=document.getElementById(`${l.id}-val`);c&&u&&(u.innerText=`${c.value}${l.unit}`)});const r=document.getElementById("split-toning-options");r&&(r.style.display=document.getElementById("enable-split-toning").checked?"block":"none");const o=document.getElementById("monochrome-picker-wrapper");o&&(o.style.display=e===3?"flex":"none");const s=document.getElementById("link-tint-picker-wrapper");s&&(s.style.display=n===1?"flex":"none")}function fx(){if(!ct||!be)return;const a=window.innerWidth,e=window.innerHeight,t=1920,n=1080;ct.setSize(t,n,!1),rt&&rt.setSize(t,n),be.aspect=t/n,be.updateProjectionMatrix(),se.resolution&&se.resolution.value.set(t,n);const r=ct.domElement.captureStream(60);let o="video/webm",s="webm";const l=["video/mp4;codecs=h264","video/mp4;codecs=avc1","video/mp4","video/webm;codecs=h264","video/webm;codecs=vp9","video/webm"];for(const h of l)if(MediaRecorder.isTypeSupported(h)){o=h,h.includes("mp4")&&(s="mp4");break}console.log(`Starting recording with mimeType: ${o}, fileExt: ${s}`),Rs=[];const c={mimeType:o,videoBitsPerSecond:12e6};try{Gn=new MediaRecorder(r,c)}catch(h){console.warn("Failed to create MediaRecorder with options, falling back to basic stream configuration",h);try{Gn=new MediaRecorder(r)}catch(f){alert("MediaRecorder is not supported in this browser: "+f.message),ct.setSize(a,e),rt&&rt.setSize(a,e),be.aspect=a/e,be.updateProjectionMatrix(),se.resolution&&se.resolution.value.set(a,e);return}}Gn.ondataavailable=h=>{h.data&&h.data.size>0&&Rs.push(h.data)},Gn.onstop=()=>{const h=new Blob(Rs,{type:Gn.mimeType||o}),f=URL.createObjectURL(h),m=document.createElement("a");let g="ppparticles";Rt&&Rt.name&&(g=Rt.name.replace(/\.[^/.]+$/,"")),m.href=f,m.download=`${g}_recording.${s}`,m.click(),setTimeout(()=>{URL.revokeObjectURL(f)},100),Rs=[],Eo=!1;const d=window.innerWidth,p=window.innerHeight;ct.setSize(d,p),rt&&rt.setSize(d,p),be.aspect=d/p,be.updateProjectionMatrix(),se.resolution&&se.resolution.value.set(d,p);const _=document.getElementById("btn-record-video");_&&(_.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>
        Record Video (MP4/WebM)
      `,_.classList.remove("btn-recording"),_.classList.add("btn-primary"))},Gn.start(100),Eo=!0;const u=document.getElementById("btn-record-video");u&&(u.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pulse-icon"><circle cx="12" cy="12" r="10" fill="#ef4444"/></svg>
      Stop Recording
    `,u.classList.add("btn-recording"),u.classList.remove("btn-primary"))}function px(){Gn&&Gn.state!=="inactive"&&Gn.stop()}function mx(){if(!be||!Pe)return;const a={};["res-step","point-size","model-scale","depth-scale","scatter-amp","scatter-freq","scatter-speed","point-opacity","alpha-threshold","exposure","contrast","saturation","tint-mix","light-angle","drift-amp","drift-speed","organic-field-strength","organic-field-speed","bloom-strength","bloom-radius","link-opacity","link-max-dist","link-thickness","link-glow","timeline-speed"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=parseFloat(s.value))}),["enable-links","size-attenuation","enable-auto-orbit","enable-shading","enable-organic-float","enable-split-toning"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.checked)}),["depth-source","color-mode","point-shape","link-color-mode"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.value)}),["monochrome-color","shadow-tint","highlight-tint","link-tint-color"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.value)}),Cn.push({px:be.position.x,py:be.position.y,pz:be.position.z,tx:Pe.target.x,ty:Pe.target.y,tz:Pe.target.z,fov:be.fov,params:a});const r=document.getElementById("timeline-hud");r&&(r.innerText=`${Cn.length} Keyframe${Cn.length!==1?"s":""} Captured`)}function Ja(a){if(!a||!a.params)return;const e=a.params["enable-links"],t=document.getElementById("enable-links");t&&e!==void 0&&(t.checked=e,En?En.visible=e:e&&Jr());const n=a.params["size-attenuation"],i=document.getElementById("size-attenuation");i&&n!==void 0&&(i.checked=n,se.uSizeAttenuation.value=n);const r=a.params["enable-auto-orbit"],o=document.getElementById("enable-auto-orbit");o&&r!==void 0&&(o.checked=r,Jo=r);const s=a.params["enable-shading"],l=document.getElementById("enable-shading");l&&s!==void 0&&(l.checked=s,se.uEnableShading.value=s);const c=a.params["enable-organic-float"],u=document.getElementById("enable-organic-float");u&&c!==void 0&&(u.checked=c,se.uEnableFloating.value=c);const h=a.params["enable-split-toning"],f=document.getElementById("enable-split-toning");if(f&&h!==void 0){f.checked=h,se.uEnableSplitToning.value=h;const R=document.getElementById("split-toning-options");R&&(R.style.display=h?"block":"none")}const m=a.params["depth-source"],g=document.getElementById("depth-source");g&&m!==void 0&&g.value!==m&&(g.value=m,Er());const d=a.params["color-mode"],p=document.getElementById("color-mode");if(p&&d!==void 0){p.value=d;let R=0;d==="original"?R=0:d==="greyscale"?R=1:d==="depth-gradient"?R=2:d==="monochrome"&&(R=3),se.uColorMode.value=R;const B=document.getElementById("monochrome-picker-wrapper");B&&(B.style.display=R===3?"flex":"none")}const _=a.params["point-shape"],S=document.getElementById("point-shape");S&&_!==void 0&&(S.value=_,se.uPointShape.value=parseInt(_));const y=a.params["link-color-mode"],b=document.getElementById("link-color-mode");if(b&&y!==void 0){b.value=y;let R=0;y==="match-particles"?R=0:y==="tint"?R=1:y==="depth-gradient"&&(R=2),se.uLinkColorMode.value=R;const B=document.getElementById("link-tint-picker-wrapper");B&&(B.style.display=R===1?"flex":"none")}const v=a.params["monochrome-color"],P=document.getElementById("monochrome-color");P&&v!==void 0&&(P.value=v,se.uTintColor.value.set(v));const C=a.params["shadow-tint"],x=document.getElementById("shadow-tint");x&&C!==void 0&&(x.value=C,se.uShadowTint.value.set(C));const M=a.params["highlight-tint"],D=document.getElementById("highlight-tint");D&&M!==void 0&&(D.value=M,se.uHighlightTint.value.set(M));const H=a.params["link-tint-color"],J=document.getElementById("link-tint-color");J&&H!==void 0&&(J.value=H,se.uLinkTintColor.value.set(H));const F=document.getElementById("res-step");if(F&&a.params["res-step"]!==void 0){const R=parseFloat(F.value),B=a.params["res-step"];if(R!==B){F.value=B;const V=document.getElementById("res-step-val");V&&(V.innerText=`${B}px`),Er()}}const T=document.getElementById("link-max-dist");if(T&&a.params["link-max-dist"]!==void 0){const R=parseFloat(T.value),B=a.params["link-max-dist"];if(R!==B){T.value=B;const V=document.getElementById("link-max-dist-val");V&&(V.innerText=`${B}`),Jr()}}}function Qr(){window.customTimelineTl&&(window.customTimelineTl.kill(),window.customTimelineTl=null),window.customTimelinePlaying=!1,Pe&&(Pe.enableZoom=!0);const a=document.getElementById("btn-play-timeline");a&&(a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Play Path
    `,a.classList.remove("btn-active"))}function gx(){Cn=[],Qr();const a=document.getElementById("timeline-hud");a&&(a.innerText="0 Keyframes Captured")}function _x(){if(Cn.length<2){alert("Add at least 2 keyframes to play a path.");return}Qr();const a=parseFloat(document.getElementById("timeline-speed").value)||4;Pe&&(Pe.enableZoom=!1),window.customTimelinePlaying=!0;const e=document.getElementById("btn-play-timeline");e&&(e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16"/></svg>
      Stop Path
    `,e.classList.add("btn-active"));const t=Cn[0];be.position.set(t.px,t.py,t.pz),Pe&&Pe.target.set(t.tx,t.ty,t.tz),be.fov=t.fov,be.updateProjectionMatrix(),Ja(t);const i=["point-size","model-scale","depth-scale","scatter-amp","scatter-freq","scatter-speed","point-opacity","alpha-threshold","exposure","contrast","saturation","tint-mix","light-angle","drift-amp","drift-speed","organic-field-strength","organic-field-speed","bloom-strength","bloom-radius","link-opacity","link-thickness","link-glow"].map(o=>{const s=document.getElementById(o),l=document.getElementById(`${o}-val`),c=wo.find(u=>u.id===o);return{id:o,input:s,display:l,callback:c?c.callback:null,unit:c?c.unit:""}}),r={};i.forEach(o=>{r[o.id]=t.params[o.id]!==void 0?t.params[o.id]:o.input?parseFloat(o.input.value):0}),window.customTimelineTl=un.timeline({onComplete:()=>{Qr()}});for(let o=1;o<Cn.length;o++){Cn[o-1];const s=Cn[o],l=(o-1)*a;window.customTimelineTl.to(be.position,{x:s.px,y:s.py,z:s.pz,duration:a,ease:"power2.inOut"},l),Pe&&window.customTimelineTl.to(Pe.target,{x:s.tx,y:s.ty,z:s.tz,duration:a,ease:"power2.inOut"},l),window.customTimelineTl.to(be,{fov:s.fov,duration:a,ease:"power2.inOut",onUpdate:()=>be.updateProjectionMatrix()},l);const c={};i.forEach(h=>{c[h.id]=s.params[h.id]!==void 0?s.params[h.id]:h.input?parseFloat(h.input.value):0});let u=0;window.customTimelineTl.to(r,{...c,duration:a,ease:"power2.inOut",onStart:()=>{Ja(Cn[o-1])},onUpdate:()=>{const h=u++%3===0;for(let f=0;f<i.length;f++){const m=i[f],g=r[m.id];if(m.callback&&m.callback(g),h&&m.input){const d=parseFloat(m.input.value);Math.abs(d-g)>1e-4&&(m.input.value=g,m.display&&(m.id==="model-scale"||m.id==="drift-amp"||m.id==="light-angle"?m.display.innerText=`${Math.round(g)}${m.unit}`:m.display.innerText=`${g.toFixed(2)}${m.unit}`))}}},onComplete:()=>{Ja(s);for(let h=0;h<i.length;h++){const f=i[h],m=r[f.id];f.input&&(f.input.value=m,f.display&&(f.id==="model-scale"||f.id==="drift-amp"||f.id==="light-angle"?f.display.innerText=`${Math.round(m)}${f.unit}`:f.display.innerText=`${m.toFixed(2)}${f.unit}`))}}},l)}}function xx(){var b,v,P,C,x,M,D,H,J,F;const a=document.getElementById("ui-toggle"),e=document.getElementById("control-panel"),t=()=>{Za=!Za,Za?(e.classList.add("collapsed"),a.title="Expand Panel"):(e.classList.remove("collapsed"),a.title="Collapse Panel")};a.addEventListener("click",t),window.addEventListener("keydown",T=>{const R=T.key.toLowerCase();R==="h"?t():R==="r"&&_h()}),wo=[{id:"res-step",unit:"px",callback:Er},{id:"point-size",unit:"",callback:T=>{se.uPointSize.value=T}},{id:"model-scale",unit:"",callback:T=>{se.uModelScale.value=T}},{id:"depth-scale",unit:"",callback:T=>{se.uDepthScale.value=T}},{id:"scatter-amp",unit:"",callback:T=>{se.uScatterAmp.value=T}},{id:"scatter-freq",unit:"",callback:T=>{se.uScatterFreq.value=T}},{id:"scatter-speed",unit:"",callback:T=>{se.uScatterSpeed.value=T}},{id:"point-opacity",unit:"",callback:T=>{se.uPointOpacity.value=T}},{id:"alpha-threshold",unit:"",callback:T=>{se.uAlphaThreshold.value=T}},{id:"exposure",unit:"",callback:T=>{se.uExposure.value=T}},{id:"contrast",unit:"",callback:T=>{se.uContrast.value=T}},{id:"saturation",unit:"",callback:T=>{se.uSaturation.value=T}},{id:"tint-mix",unit:"",callback:T=>{se.uTintMix.value=T}},{id:"light-angle",unit:"°",callback:T=>{vh(T)}},{id:"drift-amp",unit:"",callback:T=>{Ns=T}},{id:"drift-speed",unit:"x",callback:T=>{To=T}},{id:"organic-field-strength",unit:"",callback:T=>{se.uOrganicFieldStrength.value=T}},{id:"organic-field-speed",unit:"",callback:T=>{se.uOrganicFieldSpeed.value=T}},{id:"bloom-strength",unit:"",callback:T=>{hn&&(hn.strength=T)}},{id:"bloom-radius",unit:"",callback:T=>{hn&&(hn.radius=T)}},{id:"link-opacity",unit:"",callback:T=>{se.uLinkOpacity.value=T}},{id:"link-max-dist",unit:"",callback:T=>{Jr()}},{id:"link-thickness",unit:"px",callback:T=>{se.linewidth.value=T}},{id:"link-glow",unit:"",callback:T=>{se.uLinkGlow.value=T}},{id:"timeline-speed",unit:"s",callback:()=>{}}],wo.forEach(T=>{const R=document.getElementById(T.id),B=document.getElementById(`${T.id}-val`);R&&(R.addEventListener("input",V=>{const z=parseFloat(V.target.value);B&&(B.innerText=`${z}${T.unit}`),T.id!=="res-step"&&T.id!=="link-max-dist"&&T.callback(z)}),(T.id==="res-step"||T.id==="link-max-dist")&&R.addEventListener("change",V=>{const z=parseFloat(V.target.value);T.callback(z)})),B&&R&&(B.style.cursor="text",B.title="Double click to edit manually",B.addEventListener("dblclick",()=>{const V=R.value,z=document.createElement("input");z.type="number",z.value=V,z.step=R.step||"0.01",z.style.width="60px",z.style.background="rgba(0,0,0,0.5)",z.style.color="#fff",z.style.border="1px solid rgba(255,255,255,0.3)",z.style.borderRadius="4px",z.style.padding="2px",z.style.fontFamily="inherit",z.style.fontSize="inherit",z.style.textAlign="right",B.innerHTML="",B.appendChild(z),z.focus();const K=()=>{let X=parseFloat(z.value);isNaN(X)&&(X=parseFloat(R.value)),R.min!==""&&(X=Math.max(parseFloat(R.min),X)),R.max!==""&&(X=Math.min(parseFloat(R.max),X)),R.value=X,B.innerText=`${X}${T.unit}`,T.callback(X)};z.addEventListener("blur",K),z.addEventListener("keydown",X=>{X.key==="Enter"&&z.blur()})}))}),document.getElementById("size-attenuation").addEventListener("change",T=>{se.uSizeAttenuation.value=T.target.checked}),document.getElementById("enable-auto-orbit").addEventListener("change",T=>{Jo=T.target.checked}),document.getElementById("enable-shading").addEventListener("change",T=>{se.uEnableShading.value=T.target.checked});const o=document.getElementById("enable-organic-float");o&&o.addEventListener("change",T=>{se.uEnableFloating.value=T.target.checked});const s=document.getElementById("enable-split-toning"),l=document.getElementById("split-toning-options");s.addEventListener("change",T=>{se.uEnableSplitToning.value=T.target.checked,l.style.display=T.target.checked?"block":"none"}),document.getElementById("depth-source").addEventListener("change",()=>{Er()});const u=document.getElementById("color-mode"),h=document.getElementById("monochrome-picker-wrapper");u.addEventListener("change",T=>{const R=T.target.value;let B=0;R==="original"?B=0:R==="greyscale"?B=1:R==="depth-gradient"?B=2:R==="monochrome"&&(B=3),se.uColorMode.value=B,h.style.display=B===3?"flex":"none"}),document.getElementById("point-shape").addEventListener("change",T=>{se.uPointShape.value=parseInt(T.target.value)}),document.getElementById("monochrome-color").addEventListener("input",T=>{se.uTintColor.value.set(T.target.value)}),document.getElementById("shadow-tint").addEventListener("input",T=>{se.uShadowTint.value.set(T.target.value)}),document.getElementById("highlight-tint").addEventListener("input",T=>{se.uHighlightTint.value.set(T.target.value)}),document.getElementById("btn-export-obj").addEventListener("click",ox),document.getElementById("btn-export-csv").addEventListener("click",lx),document.getElementById("btn-export-json").addEventListener("click",cx),document.getElementById("btn-export-png").addEventListener("click",ux),(b=document.getElementById("btn-record-video"))==null||b.addEventListener("click",()=>{Eo?px():fx()});const p=document.getElementById("dropzone");p.addEventListener("click",()=>{document.getElementById("file-input").click()}),document.getElementById("file-input").addEventListener("change",T=>{const R=T.target.files;R.length>0&&Xc(R[0])}),window.addEventListener("dragover",T=>{T.preventDefault(),p.classList.add("dragover")}),window.addEventListener("dragleave",T=>{T.preventDefault(),p.classList.remove("dragover")}),window.addEventListener("drop",T=>{T.preventDefault(),p.classList.remove("dragover");const R=T.dataTransfer.files;R.length>0&&Xc(R[0])}),(v=document.getElementById("cam-reset"))==null||v.addEventListener("click",()=>Ti("reset")),(P=document.getElementById("cam-iso"))==null||P.addEventListener("click",()=>Ti("iso")),(C=document.getElementById("cam-side"))==null||C.addEventListener("click",()=>Ti("side")),(x=document.getElementById("cam-top"))==null||x.addEventListener("click",()=>Ti("top")),(M=document.getElementById("cam-macro"))==null||M.addEventListener("click",()=>Ti("macro")),(D=document.getElementById("cam-cinematic"))==null||D.addEventListener("click",()=>Ti("cinematic")),(H=document.getElementById("btn-add-keyframe"))==null||H.addEventListener("click",mx),(J=document.getElementById("btn-clear-timeline"))==null||J.addEventListener("click",gx),(F=document.getElementById("btn-play-timeline"))==null||F.addEventListener("click",()=>{window.customTimelinePlaying?Qr():_x()}),document.querySelectorAll(".preset-btn").forEach(T=>{T.addEventListener("click",R=>{const B=R.target.getAttribute("data-preset");dx(B)})}),Co();const _=document.getElementById("enable-links");_==null||_.addEventListener("change",T=>{En?En.visible=T.target.checked:T.target.checked&&Jr()});const S=document.getElementById("link-color-mode");S==null||S.addEventListener("change",T=>{const R=T.target.value;let B=0;R==="match-particles"?B=0:R==="tint"?B=1:R==="depth-gradient"&&(B=2),se.uLinkColorMode.value=B;const V=document.getElementById("link-tint-picker-wrapper");V&&(V.style.display=B===1?"flex":"none")});const y=document.getElementById("link-tint-color");y==null||y.addEventListener("input",T=>{se.uLinkTintColor.value.set(T.target.value)}),Co()}function Xc(a){if(!a.type.match("image.*")){alert("Please select a valid image file.");return}const e=new FileReader;e.onload=t=>{const n=new Image;n.onload=()=>{Qo(n,a.name)},n.src=t.target.result},e.readAsDataURL(a)}nx();
