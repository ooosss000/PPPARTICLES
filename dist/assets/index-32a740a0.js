(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="147",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,_l=1,Id=2,au=1,Fd=2,Nr=3,vr=0,_n=1,ri=2,ci=0,Ri=1,qs=2,vl=3,xl=4,zd=5,cr=100,Od=101,Bd=102,yl=103,bl=104,Nd=200,Ud=201,kd=202,Vd=203,ou=204,lu=205,Gd=206,Wd=207,Hd=208,qd=209,Xd=210,Yd=0,jd=1,Zd=2,co=3,$d=4,Kd=5,Jd=6,Qd=7,cu=0,eh=1,th=2,qn=0,nh=1,ih=2,rh=3,sh=4,ah=5,uu=300,xr=301,yr=302,uo=303,ho=304,ra=306,fo=1e3,Sn=1001,po=1002,Ot=1003,Sl=1004,Ml=1005,dn=1006,oh=1007,sa=1008,Ui=1009,lh=1010,ch=1011,du=1012,uh=1013,Pi=1014,Li=1015,qr=1016,dh=1017,hh=1018,pr=1020,fh=1021,ph=1022,Mn=1023,mh=1024,gh=1025,Ii=1026,br=1027,_h=1028,vh=1029,xh=1030,yh=1031,bh=1033,_a=33776,va=33777,xa=33778,ya=33779,wl=35840,Tl=35841,El=35842,Cl=35843,Sh=36196,Al=37492,Pl=37496,Ll=37808,Dl=37809,Rl=37810,Il=37811,Fl=37812,zl=37813,Ol=37814,Bl=37815,Nl=37816,Ul=37817,kl=37818,Vl=37819,Gl=37820,Wl=37821,Hl=36492,ki=3e3,et=3001,Mh=3200,wh=3201,Th=0,Eh=1,En="srgb",Xr="srgb-linear",ba=7680,Ch=519,mo=35044,ql="300 es",go=1035;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,Xl=180/Math.PI;function ui(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[a&255]+Et[a>>8&255]+Et[a>>16&255]+Et[a>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Bt(a,e,t){return Math.max(e,Math.min(t,a))}function Ah(a,e){return(a%e+e)%e}function Ma(a,e,t){return(1-t)*a+t*e}function Yl(a){return(a&a-1)===0&&a!==0}function _o(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function si(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ze(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],y=i[1],b=i[4],S=i[7],v=i[2],P=i[5],C=i[8];return r[0]=o*f+s*y+l*v,r[3]=o*p+s*b+l*P,r[6]=o*_+s*S+l*C,r[1]=c*f+u*y+d*v,r[4]=c*p+u*b+d*P,r[7]=c*_+u*S+d*C,r[2]=h*f+m*y+g*v,r[5]=h*p+m*b+g*P,r[8]=h*_+m*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*o-s*c,h=s*l-u*r,m=c*r-o*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*c-u*n)*f,e[2]=(s*n-i*o)*f,e[3]=h*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-s*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(o*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ut;function hu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Xs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Fi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ns(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Ta={[En]:{[Xr]:Fi},[Xr]:{[En]:Ns}},Dt={legacyMode:!0,get workingColorSpace(){return Xr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Ta[e]&&Ta[e][t]!==void 0){const n=Ta[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},xn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ea(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ds(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dt.workingColorSpace){if(e=Ah(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ea(o,r,e+1/3),this.g=Ea(o,r,e),this.b=Ea(o,r,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Dt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Dt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=En){const n=fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Dt.fromWorkingColorSpace(ds(this,mt),e),Bt(mt.r*255,0,255)<<16^Bt(mt.g*255,0,255)<<8^Bt(mt.b*255,0,255)<<0}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(ds(this,mt),t);const n=mt.r,i=mt.g,r=mt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=u<=.5?d/(o+s):d/(2-o-s),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(ds(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=En){return Dt.fromWorkingColorSpace(ds(this,mt),e),e!==En?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(xn),xn.h+=e,xn.s+=t,xn.l+=n,this.setHSL(xn.h,xn.s,xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(us);const n=Ma(xn.h,us.h,t),i=Ma(xn.s,us.s,t),r=Ma(xn.l,us.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=fu;let Yi;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Xs("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mu{constructor(e=null){this.isSource=!0,this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Ca(i[o].image)):r.push(Ca(i[o]))}else r=Ca(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ca(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?pu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class nn extends Gi{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Sn,i=Sn,r=dn,o=sa,s=Mn,l=Ui,c=nn.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ui(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=uu;nn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,v=(_+1)/2,P=(u+h)/4,C=(d+f)/4,x=(g+p)/4;return b>S&&b>v?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=P/n,r=C/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=P/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=C/r,i=x/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-f)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tn extends Gi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gu extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],m=r[o+1],g=r[o+2],f=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||c!==m||u!==g){let p=1-s;const _=l*h+c*m+u*g+d*f,y=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const v=Math.sqrt(b),P=Math.atan2(v,_*y);p=Math.sin(p*P)/v,s=Math.sin(s*P)/v}const S=s*y;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,d=d*p+f*S,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-s*m,e[t+2]=c*g+u*m+s*h-l*d,e[t+3]=u*g-s*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),d=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+i*c-r*l,this._y=i*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-i*s,this._w=o*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*i-s*n,u=l*n+s*t-r*i,d=l*i+r*n-o*t,h=-r*t-o*n-s*i;return this.x=c*l+h*-r+u*-s-d*-o,this.y=u*l+h*-o+d*-r-c*-s,this.z=d*l+h*-s+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new O,jl=new Vi;class Wi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)yi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox),Pa.applyMatrix4(e.matrixWorld),this.union(Pa);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),hs.subVectors(this.max,Ir),ji.subVectors(e.a,Ir),Zi.subVectors(e.b,Ir),$i.subVectors(e.c,Ir),Zn.subVectors(Zi,ji),$n.subVectors($i,Zi),bi.subVectors(ji,$i);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-bi.z,bi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,bi.z,0,-bi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-bi.y,bi.x,0];return!La(t,ji,Zi,$i,hs)||(t=[1,0,0,0,1,0,0,0,1],!La(t,ji,Zi,$i,hs))?!1:(fs.crossVectors(Zn,$n),t=[fs.x,fs.y,fs.z],La(t,ji,Zi,$i,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new O,new O,new O,new O,new O,new O,new O,new O],yi=new O,Pa=new Wi,ji=new O,Zi=new O,$i=new O,Zn=new O,$n=new O,bi=new O,Ir=new O,hs=new O,fs=new O,Si=new O;function La(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Si.fromArray(a,r);const s=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Dh=new Wi,Fr=new O,Da=new O;class is{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Da)),this.expandByPoint(Fr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new O,Ra=new O,ps=new O,Kn=new O,Ia=new O,ms=new O,Fa=new O;class ko{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.direction).multiplyScalar(t).add(this.origin),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ra);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ps),s=Kn.dot(this.direction),l=-Kn.dot(ps),c=Kn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-s,h=o*s-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,m=d*(d+o*h+2*s)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+s)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+s)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ps).multiplyScalar(h).add(Ra),m}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,r){Ia.subVectors(t,e),ms.subVectors(n,e),Fa.crossVectors(Ia,ms);let o=this.direction.dot(Fa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=s*this.direction.dot(ms.crossVectors(Kn,ms));if(l<0)return null;const c=s*this.direction.dot(Ia.cross(Kn));if(c<0||l+c>o)return null;const u=-s*Kn.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,l,c,u,d,h,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*d,g=s*u,f=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-f*c,t[9]=-s*l,t[2]=f-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h+f*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=f+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h-f*s,t[4]=-o*d,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=f-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=s*u,f=s*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+f,t[1]=l*d,t[5]=f*c+h,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=s*l,f=s*c;t[0]=l*u,t[4]=f-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=s*l,f=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+f,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=s*u,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rh,e,Ih)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Jn.crossVectors(n,Zt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Jn.crossVectors(n,Zt)),Jn.normalize(),gs.crossVectors(Zt,Jn),i[0]=Jn.x,i[4]=gs.x,i[8]=Zt.x,i[1]=Jn.y,i[5]=gs.y,i[9]=Zt.y,i[2]=Jn.z,i[6]=gs.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],y=n[3],b=n[7],S=n[11],v=n[15],P=i[0],C=i[4],x=i[8],w=i[12],D=i[1],H=i[5],Q=i[9],F=i[13],R=i[2],N=i[6],A=i[10],z=i[14],U=i[3],K=i[7],q=i[11],V=i[15];return r[0]=o*P+s*D+l*R+c*U,r[4]=o*C+s*H+l*N+c*K,r[8]=o*x+s*Q+l*A+c*q,r[12]=o*w+s*F+l*z+c*V,r[1]=u*P+d*D+h*R+m*U,r[5]=u*C+d*H+h*N+m*K,r[9]=u*x+d*Q+h*A+m*q,r[13]=u*w+d*F+h*z+m*V,r[2]=g*P+f*D+p*R+_*U,r[6]=g*C+f*H+p*N+_*K,r[10]=g*x+f*Q+p*A+_*q,r[14]=g*w+f*F+p*z+_*V,r[3]=y*P+b*D+S*R+v*U,r[7]=y*C+b*H+S*N+v*K,r[11]=y*x+b*Q+S*A+v*q,r[15]=y*w+b*F+S*z+v*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+r*l*d-i*c*d-r*s*h+n*c*h+i*s*m-n*l*m)+f*(+t*l*m-t*c*h+r*o*h-i*o*m+i*c*u-r*l*u)+p*(+t*c*d-t*s*m-r*o*d+n*o*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*d+t*s*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],y=d*p*c-f*h*c+f*l*m-s*p*m-d*l*_+s*h*_,b=g*h*c-u*p*c-g*l*m+o*p*m+u*l*_-o*h*_,S=u*f*c-g*d*c+g*s*m-o*f*m-u*s*_+o*d*_,v=g*d*l-u*f*l-g*s*h+o*f*h+u*s*p-o*d*p,P=t*y+n*b+i*S+r*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=y*C,e[1]=(f*h*r-d*p*r-f*i*m+n*p*m+d*i*_-n*h*_)*C,e[2]=(s*p*r-f*l*r+f*i*c-n*p*c-s*i*_+n*l*_)*C,e[3]=(d*l*r-s*h*r-d*i*c+n*h*c+s*i*m-n*l*m)*C,e[4]=b*C,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*C,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*_-t*l*_)*C,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*m+t*l*m)*C,e[8]=S*C,e[9]=(g*d*r-u*f*r-g*n*m+t*f*m+u*n*_-t*d*_)*C,e[10]=(o*f*r-g*s*r+g*n*c-t*f*c-o*n*_+t*s*_)*C,e[11]=(u*s*r-o*d*r-u*n*c+t*d*c+o*n*m-t*s*m)*C,e[12]=v*C,e[13]=(u*f*i-g*d*i+g*n*h-t*f*h-u*n*p+t*d*p)*C,e[14]=(g*s*i-o*f*i-g*n*l+t*f*l+o*n*p-t*s*p)*C,e[15]=(o*d*i-u*s*i+u*n*l-t*d*l-o*n*h+t*s*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*o,0,c*l-i*s,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,d=s+s,h=r*c,m=r*u,g=r*d,f=o*u,p=o*d,_=s*d,y=l*c,b=l*u,S=l*d,v=n.x,P=n.y,C=n.z;return i[0]=(1-(f+_))*v,i[1]=(m+S)*v,i[2]=(g-b)*v,i[3]=0,i[4]=(m-S)*P,i[5]=(1-(h+_))*P,i[6]=(p+y)*P,i[7]=0,i[8]=(g+b)*C,i[9]=(p-y)*C,i[10]=(1-(h+f))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const o=Ki.set(i[4],i[5],i[6]).length(),s=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/r,u=1/o,d=1/s;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),d=(t+e)*l,h=(n+i)*c,m=(o+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,yn=new gt,Rh=new O(0,0,0),Ih=new O(1,1,1),Jn=new O,gs=new O,Zt=new O,Zl=new gt,$l=new Vi;class rs{constructor(e=0,t=0,n=0,i=rs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}rs.DefaultOrder="XYZ";rs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const Kl=new O,Ji=new Vi,Nn=new gt,_s=new O,zr=new O,zh=new O,Oh=new Vi,Jl=new O(1,0,0),Ql=new O(0,1,0),ec=new O(0,0,1),Bh={type:"added"},tc={type:"removed"};class kt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DefaultUp.clone();const e=new O,t=new rs,n=new Vi,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ut}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=kt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DefaultMatrixWorldAutoUpdate,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(zr,_s,this.up):Nn.lookAt(_s,zr,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(tc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DefaultUp=new O(0,1,0);kt.DefaultMatrixAutoUpdate=!0;kt.DefaultMatrixWorldAutoUpdate=!0;const bn=new O,Un=new O,za=new O,kn=new O,Qi=new O,er=new O,nc=new O,Oa=new O,Ba=new O,Na=new O;class Hn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Un.subVectors(n,t),za.subVectors(e,t);const o=bn.dot(bn),s=bn.dot(Un),l=bn.dot(za),c=Un.dot(Un),u=Un.dot(za),d=o*c-s*s;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(c*l-s*u)*h,g=(o*u-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,kn),l.set(0,0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(s,kn.z),l}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Un.subVectors(e,t),bn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),bn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Hn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Qi.subVectors(i,n),er.subVectors(r,n),Oa.subVectors(e,n);const l=Qi.dot(Oa),c=er.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,i);const u=Qi.dot(Ba),d=er.dot(Ba);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qi,o);Na.subVectors(e,r);const m=Qi.dot(Na),g=er.dot(Na);if(g>=0&&m<=g)return t.copy(r);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(er,s);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return nc.subVectors(r,i),s=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(nc,s);const _=1/(p+f+h);return o=f*_,s=h*_,t.copy(n).addScaledVector(Qi,o).addScaledVector(er,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nh=0;class ss extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Ri,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ou,this.blendDst=lu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class aa extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new O,vs=new Se;class vn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _u extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uh=0;const ln=new gt,Ua=new kt,tr=new O,$t=new Wi,Or=new Wi,bt=new O;class Xt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?vu:_u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Or.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors($t.min,Or.min),$t.expandByPoint(bt),bt.addVectors($t.max,Or.max),$t.expandByPoint(bt)):($t.expandByPoint(Or.min),$t.expandByPoint(Or.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)bt.fromBufferAttribute(s,c),l&&(tr.fromBufferAttribute(e,c),bt.add(tr)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<s;D++)c[D]=new O,u[D]=new O;const d=new O,h=new O,m=new O,g=new Se,f=new Se,p=new Se,_=new O,y=new O;function b(D,H,Q){d.fromArray(i,D*3),h.fromArray(i,H*3),m.fromArray(i,Q*3),g.fromArray(o,D*2),f.fromArray(o,H*2),p.fromArray(o,Q*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(F),y.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),c[D].add(_),c[H].add(_),c[Q].add(_),u[D].add(y),u[H].add(y),u[Q].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let D=0,H=S.length;D<H;++D){const Q=S[D],F=Q.start,R=Q.count;for(let N=F,A=F+R;N<A;N+=3)b(n[N+0],n[N+1],n[N+2])}const v=new O,P=new O,C=new O,x=new O;function w(D){C.fromArray(r,D*3),x.copy(C);const H=c[D];v.copy(H),v.sub(C.multiplyScalar(C.dot(H))).normalize(),P.crossVectors(x,H);const F=P.dot(u[D])<0?-1:1;l[D*4]=v.x,l[D*4+1]=v.y,l[D*4+2]=v.z,l[D*4+3]=F}for(let D=0,H=S.length;D<H;++D){const Q=S[D],F=Q.start,R=Q.count;for(let N=F,A=F+R;N<A;N+=3)w(n[N+0]),w(n[N+1]),w(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,r=new O,o=new O,s=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new vn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new gt,nr=new ko,ka=new is,Qn=new O,ei=new O,ti=new O,Va=new O,Ga=new O,Wa=new O,xs=new O,ys=new O,bs=new O,Ss=new Se,Ms=new Se,ws=new Se,Ha=new O,Ts=new O;class wn extends kt{constructor(e=new Xt,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),e.ray.intersectsSphere(ka)===!1)||(ic.copy(r).invert(),nr.copy(e.ray).applyMatrix4(ic),n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],y=i[_.materialIndex],b=Math.max(_.start,g.start),S=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let v=b,P=S;v<P;v+=3){const C=s.getX(v),x=s.getX(v+1),w=s.getX(v+2);o=Es(this,y,e,nr,l,c,u,d,h,C,x,w),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=f,y=p;_<y;_+=3){const b=s.getX(_),S=s.getX(_+1),v=s.getX(_+2);o=Es(this,i,e,nr,l,c,u,d,h,b,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],y=i[_.materialIndex],b=Math.max(_.start,g.start),S=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=b,P=S;v<P;v+=3){const C=v,x=v+1,w=v+2;o=Es(this,y,e,nr,l,c,u,d,h,C,x,w),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=f,y=p;_<y;_+=3){const b=_,S=_+1,v=_+2;o=Es(this,i,e,nr,l,c,u,d,h,b,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function kh(a,e,t,n,i,r,o,s){let l;if(e.side===_n?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side!==ri,s),l===null)return null;Ts.copy(s),Ts.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:a}}function Es(a,e,t,n,i,r,o,s,l,c,u,d){Qn.fromBufferAttribute(i,c),ei.fromBufferAttribute(i,u),ti.fromBufferAttribute(i,d);const h=a.morphTargetInfluences;if(r&&h){xs.set(0,0,0),ys.set(0,0,0),bs.set(0,0,0);for(let g=0,f=r.length;g<f;g++){const p=h[g],_=r[g];p!==0&&(Va.fromBufferAttribute(_,c),Ga.fromBufferAttribute(_,u),Wa.fromBufferAttribute(_,d),o?(xs.addScaledVector(Va,p),ys.addScaledVector(Ga,p),bs.addScaledVector(Wa,p)):(xs.addScaledVector(Va.sub(Qn),p),ys.addScaledVector(Ga.sub(ei),p),bs.addScaledVector(Wa.sub(ti),p)))}Qn.add(xs),ei.add(ys),ti.add(bs)}a.isSkinnedMesh&&(a.boneTransform(c,Qn),a.boneTransform(u,ei),a.boneTransform(d,ti));const m=kh(a,e,t,n,Qn,ei,ti,Ha);if(m){s&&(Ss.fromBufferAttribute(s,c),Ms.fromBufferAttribute(s,u),ws.fromBufferAttribute(s,d),m.uv=Hn.getUV(Ha,Qn,ei,ti,Ss,Ms,ws,new Se)),l&&(Ss.fromBufferAttribute(l,c),Ms.fromBufferAttribute(l,u),ws.fromBufferAttribute(l,d),m.uv2=Hn.getUV(Ha,Qn,ei,ti,Ss,Ms,ws,new Se));const g={a:c,b:u,c:d,normal:new O,materialIndex:0};Hn.getNormal(Qn,ei,ti,g.normal),m.face=g}return m}class as extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function g(f,p,_,y,b,S,v,P,C,x,w){const D=S/C,H=v/x,Q=S/2,F=v/2,R=P/2,N=C+1,A=x+1;let z=0,U=0;const K=new O;for(let q=0;q<A;q++){const V=q*H-F;for(let W=0;W<N;W++){const te=W*D-Q;K[f]=te*y,K[p]=V*b,K[_]=R,c.push(K.x,K.y,K.z),K[f]=0,K[p]=0,K[_]=P>0?1:-1,u.push(K.x,K.y,K.z),d.push(W/C),d.push(1-q/x),z+=1}}for(let q=0;q<x;q++)for(let V=0;V<C;V++){const W=h+V+N*q,te=h+V+N*(q+1),J=h+(V+1)+N*(q+1),re=h+(V+1)+N*q;l.push(W,te,re),l.push(te,J,re),U+=6}s.addGroup(m,U,w),m+=U,h+=z}}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(a){const e={};for(let t=0;t<a.length;t++){const n=Sr(a[t]);for(const i in n)e[i]=n[i]}return e}function Vh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function xu(a){return a.getRenderTarget()===null&&a.outputEncoding===et?En:Xr}const Ys={clone:Sr,merge:It};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends yu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Hh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new hn(ir,rr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new hn(ir,rr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new hn(ir,rr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new hn(ir,rr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new hn(ir,rr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new hn(ir,rr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=qn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class bu extends nn{constructor(e,t,n,i,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,i,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qh extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new as(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ci});r.uniforms.tEquirect.value=t;const o=new wn(i,r),s=t.minFilter;return t.minFilter===sa&&(t.minFilter=dn),new Hh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const qa=new O,Xh=new O,Yh=new Ut;class ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qa.subVectors(n,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yh.getNormalMatrix(e),i=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new is,Cs=new O;class Su{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,o=new ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],y=n[14],b=n[15];return t[0].setComponents(s-i,d-l,f-h,b-p).normalize(),t[1].setComponents(s+i,d+l,f+h,b+p).normalize(),t[2].setComponents(s+r,d+c,f+m,b+_).normalize(),t[3].setComponents(s-r,d-c,f-m,b-_).normalize(),t[4].setComponents(s-o,d-u,f-g,b-y).normalize(),t[5].setComponents(s+o,d+u,f+g,b+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function jh(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,m=u.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,h):(t?a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:s,update:l}}class Go extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,d=e/s,h=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const y=_*h-o;for(let b=0;b<c;b++){const S=b*d-r;g.push(S,-y,0),f.push(0,0,1),p.push(b/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<s;y++){const b=y+c*_,S=y+c*(_+1),v=y+1+c*(_+1),P=y+1+c*_;m.push(b,S,P),m.push(S,v,P)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf="vec3 transformed = vec3( position );",nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
}`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Uf=`#if defined( USE_ENVMAP )
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,qf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,up=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Wp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,em=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,nm=`#define DISTANCE
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
}`,im=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,am=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,hm=`#define MATCAP
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
}`,fm=`#define MATCAP
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
}`,pm=`#define NORMAL
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
}`,mm=`#define NORMAL
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
}`,gm=`#define PHONG
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
}`,_m=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,xm=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,bm=`#define TOON
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
}`,Sm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pe={alphamap_fragment:Zh,alphamap_pars_fragment:$h,alphatest_fragment:Kh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:hf,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:bf,encodings_fragment:Sf,encodings_pars_fragment:Mf,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Ef,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Uf,envmap_vertex:Af,fog_vertex:Pf,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Rf,gradientmap_pars_fragment:If,lightmap_fragment:Ff,lightmap_pars_fragment:zf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:Nf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Hf,lights_physical_pars_fragment:qf,lights_fragment_begin:Xf,lights_fragment_maps:Yf,lights_fragment_end:jf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Jf,map_fragment:Qf,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphcolor_vertex:sp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:hp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,output_fragment:xp,packing:yp,premultiplied_alpha_fragment:bp,project_vertex:Sp,dithering_fragment:Mp,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Rp,skinning_vertex:Ip,skinnormal_vertex:Fp,specularmap_fragment:zp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:Np,transmission_fragment:Up,transmission_pars_fragment:kp,uv_pars_fragment:Vp,uv_pars_vertex:Gp,uv_vertex:Wp,uv2_pars_fragment:Hp,uv2_pars_vertex:qp,uv2_vertex:Xp,worldpos_vertex:Yp,background_vert:jp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:Qp,depth_vert:em,depth_frag:tm,distanceRGBA_vert:nm,distanceRGBA_frag:im,equirect_vert:rm,equirect_frag:sm,linedashed_vert:am,linedashed_frag:om,meshbasic_vert:lm,meshbasic_frag:cm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:hm,meshmatcap_frag:fm,meshnormal_vert:pm,meshnormal_frag:mm,meshphong_vert:gm,meshphong_frag:_m,meshphysical_vert:vm,meshphysical_frag:xm,meshtoon_vert:ym,meshtoon_frag:bm,points_vert:Sm,points_frag:Mm,shadow_vert:wm,shadow_frag:Tm,sprite_vert:Em,sprite_frag:Cm},le={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},An={basic:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:It([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:It([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:It([le.points,le.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:It([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:It([le.common,le.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:It([le.sprite,le.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:It([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:It([le.lights,le.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};An.physical={uniforms:It([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const As={r:0,b:0,g:0};function Am(a,e,t,n,i,r,o){const s=new Ae(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(p,_){let y=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const S=a.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(b=null),b===null?f(s,l):b&&b.isColor&&(f(b,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ra)?(u===void 0&&(u=new wn(new as(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Sr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(d!==b||h!==b.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,m=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wn(new Go(2,2),new Ft({name:"BackgroundMaterial",uniforms:Sr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(As,xu(a)),n.buffers.color.setClear(As.r,As.g,As.b,_,o)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:g}}function Pm(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function d(R,N,A,z,U){let K=!1;if(o){const q=f(z,A,N);c!==q&&(c=q,m(c.object)),K=_(R,z,A,U),K&&y(R,z,A,U)}else{const q=N.wireframe===!0;(c.geometry!==z.id||c.program!==A.id||c.wireframe!==q)&&(c.geometry=z.id,c.program=A.id,c.wireframe=q,K=!0)}U!==null&&t.update(U,34963),(K||u)&&(u=!1,x(R,N,A,z),U!==null&&a.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,N,A){const z=A.wireframe===!0;let U=s[R.id];U===void 0&&(U={},s[R.id]=U);let K=U[N.id];K===void 0&&(K={},U[N.id]=K);let q=K[z];return q===void 0&&(q=p(h()),K[z]=q),q}function p(R){const N=[],A=[],z=[];for(let U=0;U<i;U++)N[U]=0,A[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:A,attributeDivisors:z,object:R,attributes:{},index:null}}function _(R,N,A,z){const U=c.attributes,K=N.attributes;let q=0;const V=A.getAttributes();for(const W in V)if(V[W].location>=0){const J=U[W];let re=K[W];if(re===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;q++}return c.attributesNum!==q||c.index!==z}function y(R,N,A,z){const U={},K=N.attributes;let q=0;const V=A.getAttributes();for(const W in V)if(V[W].location>=0){let J=K[W];J===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),U[W]=re,q++}c.attributes=U,c.attributesNum=q,c.index=z}function b(){const R=c.newAttributes;for(let N=0,A=R.length;N<A;N++)R[N]=0}function S(R){v(R,0)}function v(R,N){const A=c.newAttributes,z=c.enabledAttributes,U=c.attributeDivisors;A[R]=1,z[R]===0&&(a.enableVertexAttribArray(R),z[R]=1),U[R]!==N&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),U[R]=N)}function P(){const R=c.newAttributes,N=c.enabledAttributes;for(let A=0,z=N.length;A<z;A++)N[A]!==R[A]&&(a.disableVertexAttribArray(A),N[A]=0)}function C(R,N,A,z,U,K){n.isWebGL2===!0&&(A===5124||A===5125)?a.vertexAttribIPointer(R,N,A,U,K):a.vertexAttribPointer(R,N,A,z,U,K)}function x(R,N,A,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const U=z.attributes,K=A.getAttributes(),q=N.defaultAttributeValues;for(const V in K){const W=K[V];if(W.location>=0){let te=U[V];if(te===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const J=te.normalized,re=te.itemSize,Y=t.get(te);if(Y===void 0)continue;const Me=Y.buffer,fe=Y.type,_e=Y.bytesPerElement;if(te.isInterleavedBufferAttribute){const de=te.data,Fe=de.stride,we=te.offset;if(de.isInstancedInterleavedBuffer){for(let be=0;be<W.locationSize;be++)v(W.location+be,de.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<W.locationSize;be++)S(W.location+be);a.bindBuffer(34962,Me);for(let be=0;be<W.locationSize;be++)C(W.location+be,re/W.locationSize,fe,J,Fe*_e,(we+re/W.locationSize*be)*_e)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)v(W.location+de,te.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<W.locationSize;de++)S(W.location+de);a.bindBuffer(34962,Me);for(let de=0;de<W.locationSize;de++)C(W.location+de,re/W.locationSize,fe,J,re*_e,re/W.locationSize*de*_e)}}else if(q!==void 0){const J=q[V];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(W.location,J);break;case 3:a.vertexAttrib3fv(W.location,J);break;case 4:a.vertexAttrib4fv(W.location,J);break;default:a.vertexAttrib1fv(W.location,J)}}}}P()}function w(){Q();for(const R in s){const N=s[R];for(const A in N){const z=N[A];for(const U in z)g(z[U].object),delete z[U];delete N[A]}delete s[R]}}function D(R){if(s[R.id]===void 0)return;const N=s[R.id];for(const A in N){const z=N[A];for(const U in z)g(z[U].object),delete z[U];delete N[A]}delete s[R.id]}function H(R){for(const N in s){const A=s[N];if(A[R.id]===void 0)continue;const z=A[R.id];for(const U in z)g(z[U].object),delete z[U];delete A[R.id]}}function Q(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function Lm(a,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function s(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=a,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=s,this.renderInstances=l}function Dm(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),y=a.getParameter(36349),b=h>0,S=o||e.has("OES_texture_float"),v=b&&S,P=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:P}}function Rm(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ni,s=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const g=d.length!==0||h||n!==0||i;return i=h,t=u(d,m,0),n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,b=y*4;let S=_.clippingState||null;l.value=S,S=u(g,h,b,m);for(let v=0;v!==b;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let b=0,S=m;b!==f;++b,S+=4)o.copy(d[b]).applyMatrix4(y,s),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Im(a){let e=new WeakMap;function t(o,s){return s===uo?o.mapping=xr:s===ho&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===uo||s===ho)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qh(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wo extends yu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,rc=[.125,.215,.35,.446,.526,.582],Ai=20,Xa=new Wo,sc=new Ae;let Ya=null;const Ti=(1+Math.sqrt(5))/2,ar=1/Ti,ac=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Ti,ar),new O(0,Ti,-ar),new O(ar,0,Ti),new O(-ar,0,Ti),new O(Ti,ar,0),new O(-Ti,ar,0)];class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:qr,format:Mn,encoding:ki,depthBuffer:!1},i=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(r)),this._blurMaterial=zm(r,e,t)}return i}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i){const s=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(sc),u.toneMapping=qn,u.autoClear=!1;const m=new aa({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new wn(new as,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(sc),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):y===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const b=this._cubeSize;Ps(i,y*b,_>2?b:0,b,b),u.setRenderTarget(i),f&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xr||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ac[(i-1)%ac.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):Ai;p>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);const _=[];let y=0;for(let C=0;C<Ai;++C){const x=C/f,w=Math.exp(-x*x/2);_.push(w),C===0?y+=w:C<p&&(y+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const S=this._sizeLods[i],v=3*S*(i>b-ur?i-b+ur:0),P=4*(this._cubeSize-S);Ps(t,v,P,3*S,2*S),l.setRenderTarget(t),l.render(d,Xa)}}function Fm(a){const e=[],t=[],n=[];let i=a;const r=a-ur+1+rc.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-ur?l=rc[o-a+ur-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,f=3,p=2,_=1,y=new Float32Array(f*g*m),b=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,x=P>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(w,f*g*P),b.set(h,p*g*P);const D=[P,P,P,P,P,P];S.set(D,_*g*P)}const v=new Xt;v.setAttribute("position",new vn(y,f)),v.setAttribute("uv",new vn(b,p)),v.setAttribute("faceIndex",new vn(S,_)),e.push(v),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(a,e,t){const n=new Tn(a,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function zm(a,e,t){const n=new Float32Array(Ai),i=new O(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function cc(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function uc(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function Om(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===uo||l===ho,u=l===xr||l===yr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new oc(a)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new oc(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bm(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nm(a,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const y=m.array;f=m.version;for(let b=0,S=y.length;b<S;b+=3){const v=y[b+0],P=y[b+1],C=y[b+2];h.push(v,P,P,C,C,v)}}else{const y=g.array;f=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const v=b+0,P=b+1,C=b+2;h.push(v,P,P,C,C,v)}}const p=new(hu(h)?vu:_u)(h,1);p.version=f;const _=r.get(d);_&&e.remove(_),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function Um(a,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){a.drawElements(r,m,s,h*l),t.update(m,r,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,h*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function km(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vm(a,e){return a[0]-e[0]}function Gm(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Wm(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new wt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let A=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",A)};var g=A;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;S===!0&&(D=1),v===!0&&(D=2),P===!0&&(D=3);let H=u.attributes.position.count*D,Q=1;H>e.maxTextureSize&&(Q=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*Q*4*p),R=new gu(F,H,Q,p);R.type=Li,R.needsUpdate=!0;const N=D*4;for(let z=0;z<p;z++){const U=C[z],K=x[z],q=w[z],V=H*Q*4*z;for(let W=0;W<U.count;W++){const te=W*N;S===!0&&(o.fromBufferAttribute(U,W),F[V+te+0]=o.x,F[V+te+1]=o.y,F[V+te+2]=o.z,F[V+te+3]=0),v===!0&&(o.fromBufferAttribute(K,W),F[V+te+4]=o.x,F[V+te+5]=o.y,F[V+te+6]=o.z,F[V+te+7]=0),P===!0&&(o.fromBufferAttribute(q,W),F[V+te+8]=o.x,F[V+te+9]=o.y,F[V+te+10]=o.z,F[V+te+11]=q.itemSize===4?o.w:1)}}_={count:p,texture:R,size:new Se(H,Q)},r.set(u,_),u.addEventListener("dispose",A)}let y=0;for(let S=0;S<m.length;S++)y+=m[S];const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",m),h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let v=0;v<f;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<f;v++){const P=p[v];P[0]=v,P[1]=m[v]}p.sort(Gm);for(let v=0;v<8;v++)v<f&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Vm);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const P=s[v],C=P[0],x=P[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),y&&u.getAttribute("morphNormal"+v)!==y[C]&&u.setAttribute("morphNormal"+v,y[C]),i[v]=x,b+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(a,"morphTargetBaseInfluence",S),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Hm(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const wu=new nn,Tu=new gu,Eu=new Lh,Cu=new bu,dc=[],hc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Lr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=dc[i];if(r===void 0&&(r=new Float32Array(i),dc[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function _t(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function vt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function oa(a,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function qm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Xm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2fv(this.addr,e),vt(t,e)}}function Ym(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;a.uniform3fv(this.addr,e),vt(t,e)}}function jm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4fv(this.addr,e),vt(t,e)}}function Zm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;mc.set(n),a.uniformMatrix2fv(this.addr,!1,mc),vt(t,n)}}function $m(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;pc.set(n),a.uniformMatrix3fv(this.addr,!1,pc),vt(t,n)}}function Km(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;fc.set(n),a.uniformMatrix4fv(this.addr,!1,fc),vt(t,n)}}function Jm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Qm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2iv(this.addr,e),vt(t,e)}}function eg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3iv(this.addr,e),vt(t,e)}}function tg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4iv(this.addr,e),vt(t,e)}}function ng(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ig(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2uiv(this.addr,e),vt(t,e)}}function rg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3uiv(this.addr,e),vt(t,e)}}function sg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4uiv(this.addr,e),vt(t,e)}}function ag(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||wu,i)}function og(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function lg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cu,i)}function cg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function ug(a){switch(a){case 5126:return qm;case 35664:return Xm;case 35665:return Ym;case 35666:return jm;case 35674:return Zm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function dg(a,e){a.uniform1fv(this.addr,e)}function hg(a,e){const t=Lr(e,this.size,2);a.uniform2fv(this.addr,t)}function fg(a,e){const t=Lr(e,this.size,3);a.uniform3fv(this.addr,t)}function pg(a,e){const t=Lr(e,this.size,4);a.uniform4fv(this.addr,t)}function mg(a,e){const t=Lr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function gg(a,e){const t=Lr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _g(a,e){const t=Lr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function vg(a,e){a.uniform1iv(this.addr,e)}function xg(a,e){a.uniform2iv(this.addr,e)}function yg(a,e){a.uniform3iv(this.addr,e)}function bg(a,e){a.uniform4iv(this.addr,e)}function Sg(a,e){a.uniform1uiv(this.addr,e)}function Mg(a,e){a.uniform2uiv(this.addr,e)}function wg(a,e){a.uniform3uiv(this.addr,e)}function Tg(a,e){a.uniform4uiv(this.addr,e)}function Eg(a,e,t){const n=this.cache,i=e.length,r=oa(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wu,r[o])}function Cg(a,e,t){const n=this.cache,i=e.length,r=oa(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eu,r[o])}function Ag(a,e,t){const n=this.cache,i=e.length,r=oa(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cu,r[o])}function Pg(a,e,t){const n=this.cache,i=e.length,r=oa(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}function Lg(a){switch(a){case 5126:return dg;case 35664:return hg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Mg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Pg}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ug(t.type)}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lg(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function gc(a,e){a.seq.push(e),a.map[e.id]=e}function Fg(a,e,t){const n=a.name,i=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){gc(t,c===void 0?new Dg(s,a,e):new Rg(s,a,e));break}else{let d=t.map[s];d===void 0&&(d=new Ig(s),gc(t,d)),t=d}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function _c(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let zg=0;function Og(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Bg(a){switch(a){case ki:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function vc(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Og(a.getShaderSource(e),o)}else return i}function Ng(a,e){const t=Bg(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ug(a,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case rh:t="OptimizedCineon";break;case sh:t="ACESFilmic";break;case ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kg(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function Vg(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Ur(a){return a!==""}function xc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(a){return a.replace(Wg,Hg)}function Hg(a,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vo(t)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(a){return a.replace(qg,Xg)}function Xg(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===au?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function $g(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case cu:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function Kg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jg(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Yg(t),c=jg(t),u=Zg(t),d=$g(t),h=Kg(t),m=t.isWebGL2?"":kg(t),g=Vg(r),f=i.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ur).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ur).join(`
`),_.length>0&&(_+=`
`)):(p=[Sc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),_=[m,Sc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==qn?Ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Ng("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=vo(o),o=xc(o,t),o=yc(o,t),s=vo(s),s=xc(s,t),s=yc(s,t),o=bc(o),s=bc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=y+p+o,S=y+_+s,v=_c(i,35633,b),P=_c(i,35632,S);if(i.attachShader(f,v),i.attachShader(f,P),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(v).trim(),H=i.getShaderInfoLog(P).trim();let Q=!0,F=!0;if(i.getProgramParameter(f,35714)===!1){Q=!1;const R=vc(i,v,"vertex"),N=vc(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+R+`
`+N)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||H==="")&&(F=!1);F&&(this.diagnostics={runnable:Q,programLog:w,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:_}})}i.deleteShader(v),i.deleteShader(P);let C;this.getUniforms=function(){return C===void 0&&(C=new Us(i,f)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Gg(i,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=P,this}let Qg=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t_(e),t.set(e,n)),n}}class t_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function n_(a,e,t,n,i,r,o){const s=new Vo,l=new e_,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,w,D,H,Q){const F=H.fog,R=Q.geometry,N=x.isMeshStandardMaterial?H.environment:null,A=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),z=A&&A.mapping===ra?A.image.height:null,U=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,q=K!==void 0?K.length:0;let V=0;R.morphAttributes.position!==void 0&&(V=1),R.morphAttributes.normal!==void 0&&(V=2),R.morphAttributes.color!==void 0&&(V=3);let W,te,J,re;if(U){const Fe=An[U];W=Fe.vertexShader,te=Fe.fragmentShader}else W=x.vertexShader,te=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const Y=a.getRenderTarget(),Me=x.alphaTest>0,fe=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:U,shaderName:x.type,vertexShader:W,fragmentShader:te,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y===null?a.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:ki,map:!!x.map,matcap:!!x.matcap,envMap:!!A,envMapMode:A&&A.mapping,envMapCubeUVHeight:z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Eh,tangentSpaceNormalMap:x.normalMapType===Th,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===et,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ri,alphaMap:!!x.alphaMap,alphaTest:Me,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:qn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===_n,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)w.push(D),w.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(w,x),y(w,x),w.push(a.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function b(x){const w=g[x.type];let D;if(w){const H=An[w];D=Ys.clone(H.uniforms)}else D=x.uniforms;return D}function S(x,w){let D;for(let H=0,Q=c.length;H<Q;H++){const F=c[H];if(F.cacheKey===w){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Jg(a,w,x,r),c.push(D)),D}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:P,programs:c,dispose:C}}function i_(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function r_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Mc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function wc(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,g,f,p){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),e++,_}function s(d,h,m,g,f,p){const _=o(d,h,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,h,m,g,f,p){const _=o(d,h,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||r_),n.length>1&&n.sort(h||Mc),i.length>1&&i.sort(h||Mc)}function u(){for(let d=e,h=a.length;d<h;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function s_(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new wc,a.set(n,[o])):i>=r.length?(o=new wc,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function a_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ae};break;case"SpotLight":t={position:new O,direction:new O,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new O,halfWidth:new O,halfHeight:new O};break}return a[e.id]=t,t}}}function o_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let l_=0;function c_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function u_(a,e){const t=new a_,n=o_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new gt,s=new gt;function l(u,d){let h=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,p=0,_=0,y=0,b=0,S=0,v=0,P=0,C=0,x=0;u.sort(c_);const w=d!==!0?Math.PI:1;for(let H=0,Q=u.length;H<Q;H++){const F=u[H],R=F.color,N=F.intensity,A=F.distance,z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=R.r*N*w,m+=R.g*N*w,g+=R.b*N*w;else if(F.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(F.sh.coefficients[U],N);else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const K=F.shadow,q=n.get(F);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=F.shadow.matrix,S++}i.directional[f]=U,f++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(R).multiplyScalar(N*w),U.distance=A,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,i.spot[_]=U;const K=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,K.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[_]=K.matrix,F.castShadow){const q=n.get(F);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=z,P++}_++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(R).multiplyScalar(N),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=U,y++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity*w),U.distance=F.distance,U.decay=F.decay,F.castShadow){const K=F.shadow,q=n.get(F);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=F.shadow.matrix,v++}i.point[p]=U,p++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(N*w),U.groundColor.copy(F.groundColor).multiplyScalar(N*w),i.hemi[b]=U,b++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==y||D.hemiLength!==b||D.numDirectionalShadows!==S||D.numPointShadows!==v||D.numSpotShadows!==P||D.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=y,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=P+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,D.directionalLength=f,D.pointLength=p,D.spotLength=_,D.rectAreaLength=y,D.hemiLength=b,D.numDirectionalShadows=S,D.numPointShadows=v,D.numSpotShadows=P,D.numSpotMaps=C,i.version=l_++)}function c(u,d){let h=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let y=0,b=u.length;y<b;y++){const S=u[y];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=i.rectArea[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),f++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Tc(a,e){const t=new u_(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function d_(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new Tc(a,e),t.set(r,[l])):o>=s.length?(l=new Tc(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class h_ extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f_ extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(a,e,t){let n=new Su;const i=new Se,r=new Se,o=new wt,s=new h_({depthPacking:wh}),l=new f_,c={},u=t.maxTextureSize,d={0:_n,1:vr,2:ri},h=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new wn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au,this.render=function(S,v,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=a.getRenderTarget(),x=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),D=a.state;D.setBlending(ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,Q=S.length;H<Q;H++){const F=S[H],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const N=R.getFrameExtents();if(i.multiply(N),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/N.x),i.x=r.x*N.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/N.y),i.y=r.y*N.y,R.mapSize.y=r.y)),R.map===null){const z=this.type!==Nr?{minFilter:Ot,magFilter:Ot}:{};R.map=new Tn(i.x,i.y,z),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const A=R.getViewportCount();for(let z=0;z<A;z++){const U=R.getViewport(z);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),D.viewport(o),R.updateMatrices(F,z),n=R.getFrustum(),b(v,P,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===Nr&&_(R,P),R.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,x,w)};function _(S,v){const P=e.update(f);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Tn(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(v,null,P,h,f,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(v,null,P,m,f,null)}function y(S,v,P,C,x,w){let D=null;const H=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0?D=H:D=P.isPointLight===!0?l:s,a.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const Q=D.uuid,F=v.uuid;let R=c[Q];R===void 0&&(R={},c[Q]=R);let N=R[F];N===void 0&&(N=D.clone(),R[F]=N),D=N}return D.visible=v.visible,D.wireframe=v.wireframe,w===Nr?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:d[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,P.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(P.matrixWorld),D.nearDistance=C,D.farDistance=x),D}function b(S,v,P,C,x){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Nr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const H=e.update(S),Q=S.material;if(Array.isArray(Q)){const F=H.groups;for(let R=0,N=F.length;R<N;R++){const A=F[R],z=Q[A.materialIndex];if(z&&z.visible){const U=y(S,z,C,P.near,P.far,x);a.renderBufferDirect(P,null,H,U,S,A)}}}else if(Q.visible){const F=y(S,Q,C,P.near,P.far,x);a.renderBufferDirect(P,null,H,F,S,null)}}const D=S.children;for(let H=0,Q=D.length;H<Q;H++)b(D[H],v,P,C,x)}}function __(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const Z=new wt;let ie=null;const he=new wt(0,0,0,0);return{setMask:function(ge){ie!==ge&&!I&&(a.colorMask(ge,ge,ge,ge),ie=ge)},setLocked:function(ge){I=ge},setClear:function(ge,Oe,Qe,xt,Fn){Fn===!0&&(ge*=xt,Oe*=xt,Qe*=xt),Z.set(ge,Oe,Qe,xt),he.equals(Z)===!1&&(a.clearColor(ge,Oe,Qe,xt),he.copy(Z))},reset:function(){I=!1,ie=null,he.set(-1,0,0,0)}}}function r(){let I=!1,Z=null,ie=null,he=null;return{setTest:function(ge){ge?Me(2929):fe(2929)},setMask:function(ge){Z!==ge&&!I&&(a.depthMask(ge),Z=ge)},setFunc:function(ge){if(ie!==ge){switch(ge){case Yd:a.depthFunc(512);break;case jd:a.depthFunc(519);break;case Zd:a.depthFunc(513);break;case co:a.depthFunc(515);break;case $d:a.depthFunc(514);break;case Kd:a.depthFunc(518);break;case Jd:a.depthFunc(516);break;case Qd:a.depthFunc(517);break;default:a.depthFunc(515)}ie=ge}},setLocked:function(ge){I=ge},setClear:function(ge){he!==ge&&(a.clearDepth(ge),he=ge)},reset:function(){I=!1,Z=null,ie=null,he=null}}}function o(){let I=!1,Z=null,ie=null,he=null,ge=null,Oe=null,Qe=null,xt=null,Fn=null;return{setTest:function(je){I||(je?Me(2960):fe(2960))},setMask:function(je){Z!==je&&!I&&(a.stencilMask(je),Z=je)},setFunc:function(je,on,Pt){(ie!==je||he!==on||ge!==Pt)&&(a.stencilFunc(je,on,Pt),ie=je,he=on,ge=Pt)},setOp:function(je,on,Pt){(Oe!==je||Qe!==on||xt!==Pt)&&(a.stencilOp(je,on,Pt),Oe=je,Qe=on,xt=Pt)},setLocked:function(je){I=je},setClear:function(je){Fn!==je&&(a.clearStencil(je),Fn=je)},reset:function(){I=!1,Z=null,ie=null,he=null,ge=null,Oe=null,Qe=null,xt=null,Fn=null}}}const s=new i,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,_=!1,y=null,b=null,S=null,v=null,P=null,C=null,x=null,w=!1,D=null,H=null,Q=null,F=null,R=null;const N=a.getParameter(35661);let A=!1,z=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),A=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),A=z>=2);let K=null,q={};const V=a.getParameter(3088),W=a.getParameter(2978),te=new wt().fromArray(V),J=new wt().fromArray(W);function re(I,Z,ie){const he=new Uint8Array(4),ge=a.createTexture();a.bindTexture(I,ge),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Oe=0;Oe<ie;Oe++)a.texImage2D(Z+Oe,0,6408,1,1,0,6408,5121,he);return ge}const Y={};Y[3553]=re(3553,3553,1),Y[34067]=re(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(co),Ke(!1),ct(_l),Me(2884),rt(ci);function Me(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function fe(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function _e(I,Z){return m[I]!==Z?(a.bindFramebuffer(I,Z),m[I]=Z,n&&(I===36009&&(m[36160]=Z),I===36160&&(m[36009]=Z)),!0):!1}function de(I,Z){let ie=f,he=!1;if(I)if(ie=g.get(Z),ie===void 0&&(ie=[],g.set(Z,ie)),I.isWebGLMultipleRenderTargets){const ge=I.texture;if(ie.length!==ge.length||ie[0]!==36064){for(let Oe=0,Qe=ge.length;Oe<Qe;Oe++)ie[Oe]=36064+Oe;ie.length=ge.length,he=!0}}else ie[0]!==36064&&(ie[0]=36064,he=!0);else ie[0]!==1029&&(ie[0]=1029,he=!0);he&&(t.isWebGL2?a.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Fe(I){return p!==I?(a.useProgram(I),p=I,!0):!1}const we={[cr]:32774,[Od]:32778,[Bd]:32779};if(n)we[yl]=32775,we[bl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(we[yl]=I.MIN_EXT,we[bl]=I.MAX_EXT)}const be={[Nd]:0,[Ud]:1,[kd]:768,[ou]:770,[Xd]:776,[Hd]:774,[Gd]:772,[Vd]:769,[lu]:771,[qd]:775,[Wd]:773};function rt(I,Z,ie,he,ge,Oe,Qe,xt){if(I===ci){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),I!==zd){if(I!==y||xt!==w){if((b!==cr||P!==cr)&&(a.blendEquation(32774),b=cr,P=cr),xt)switch(I){case Ri:a.blendFuncSeparate(1,771,1,771);break;case qs:a.blendFunc(1,1);break;case vl:a.blendFuncSeparate(0,769,0,1);break;case xl:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:a.blendFuncSeparate(770,771,1,771);break;case qs:a.blendFunc(770,1);break;case vl:a.blendFuncSeparate(0,769,0,1);break;case xl:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,v=null,C=null,x=null,y=I,w=xt}return}ge=ge||Z,Oe=Oe||ie,Qe=Qe||he,(Z!==b||ge!==P)&&(a.blendEquationSeparate(we[Z],we[ge]),b=Z,P=ge),(ie!==S||he!==v||Oe!==C||Qe!==x)&&(a.blendFuncSeparate(be[ie],be[he],be[Oe],be[Qe]),S=ie,v=he,C=Oe,x=Qe),y=I,w=!1}function $e(I,Z){I.side===ri?fe(2884):Me(2884);let ie=I.side===_n;Z&&(ie=!ie),Ke(ie),I.blending===Ri&&I.transparent===!1?rt(ci):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;c.setTest(he),he&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(32926):fe(32926)}function Ke(I){D!==I&&(I?a.frontFace(2304):a.frontFace(2305),D=I)}function ct(I){I!==Rd?(Me(2884),I!==H&&(I===_l?a.cullFace(1029):I===Id?a.cullFace(1028):a.cullFace(1032))):fe(2884),H=I}function Te(I){I!==Q&&(A&&a.lineWidth(I),Q=I)}function Ve(I,Z,ie){I?(Me(32823),(F!==Z||R!==ie)&&(a.polygonOffset(Z,ie),F=Z,R=ie)):fe(32823)}function We(I){I?Me(3089):fe(3089)}function qe(I){I===void 0&&(I=33984+N-1),K!==I&&(a.activeTexture(I),K=I)}function E(I,Z,ie){ie===void 0&&(K===null?ie=33984+N-1:ie=K);let he=q[ie];he===void 0&&(he={type:void 0,texture:void 0},q[ie]=he),(he.type!==I||he.texture!==Z)&&(K!==ie&&(a.activeTexture(ie),K=ie),a.bindTexture(I,Z||Y[I]),he.type=I,he.texture=Z)}function M(){const I=q[K];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){te.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function pe(I){J.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function Re(I,Z){let ie=d.get(Z);ie===void 0&&(ie=new WeakMap,d.set(Z,ie));let he=ie.get(I);he===void 0&&(he=a.getUniformBlockIndex(Z,I.name),ie.set(I,he))}function ze(I,Z){const he=d.get(Z).get(I);u.get(I)!==he&&(a.uniformBlockBinding(Z,he,I.__bindingPointIndex),u.set(I,he))}function He(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},K=null,q={},m={},g=new WeakMap,f=[],p=null,_=!1,y=null,b=null,S=null,v=null,P=null,C=null,x=null,w=!1,D=null,H=null,Q=null,F=null,R=null,te.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Me,disable:fe,bindFramebuffer:_e,drawBuffers:de,useProgram:Fe,setBlending:rt,setMaterial:$e,setFlipSided:Ke,setCullFace:ct,setLineWidth:Te,setPolygonOffset:Ve,setScissorTest:We,activeTexture:qe,bindTexture:E,unbindTexture:M,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:ce,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:B,texStorage3D:ue,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:ve,compressedTexSubImage3D:L,scissor:me,viewport:pe,reset:He}}function v_(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,M){return _?new OffscreenCanvas(E,M):Xs("canvas")}function b(E,M,X,ee){let se=1;if((E.width>ee||E.height>ee)&&(se=ee/Math.max(E.width,E.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=M?_o:Math.floor,ve=oe(se*E.width),L=oe(se*E.height);f===void 0&&(f=y(ve,L));const B=X?y(ve,L):f;return B.width=ve,B.height=L,B.getContext("2d").drawImage(E,0,0,ve,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+L+")."),B}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Yl(E.width)&&Yl(E.height)}function v(E){return s?!1:E.wrapS!==Sn||E.wrapT!==Sn||E.minFilter!==Ot&&E.minFilter!==dn}function P(E,M){return E.generateMipmaps&&M&&E.minFilter!==Ot&&E.minFilter!==dn}function C(E){a.generateMipmap(E)}function x(E,M,X,ee,se=!1){if(s===!1)return M;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=M;return M===6403&&(X===5126&&(oe=33326),X===5131&&(oe=33325),X===5121&&(oe=33321)),M===33319&&(X===5126&&(oe=33328),X===5131&&(oe=33327),X===5121&&(oe=33323)),M===6408&&(X===5126&&(oe=34836),X===5131&&(oe=34842),X===5121&&(oe=ee===et&&se===!1?35907:32856),X===32819&&(oe=32854),X===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function w(E,M,X){return P(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function D(E){return E===Ot||E===Sl||E===Ml?9728:9729}function H(E){const M=E.target;M.removeEventListener("dispose",H),F(M),M.isVideoTexture&&g.delete(M)}function Q(E){const M=E.target;M.removeEventListener("dispose",Q),N(M)}function F(E){const M=n.get(E);if(M.__webglInit===void 0)return;const X=E.source,ee=p.get(X);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(E),Object.keys(ee).length===0&&p.delete(X)}n.remove(E)}function R(E){const M=n.get(E);a.deleteTexture(M.__webglTexture);const X=E.source,ee=p.get(X);delete ee[M.__cacheKey],o.memory.textures--}function N(E){const M=E.texture,X=n.get(E),ee=n.get(M);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)a.deleteFramebuffer(X.__webglFramebuffer[se]),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer[se]);else{if(a.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&a.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&a.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,oe=M.length;se<oe;se++){const ve=n.get(M[se]);ve.__webglTexture&&(a.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(E)}let A=0;function z(){A=0}function U(){const E=A;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),A+=1,E}function K(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function q(E,M){const X=n.get(E);if(E.isVideoTexture&&We(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,E,M);return}}t.bindTexture(3553,X.__webglTexture,33984+M)}function V(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){fe(X,E,M);return}t.bindTexture(35866,X.__webglTexture,33984+M)}function W(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){fe(X,E,M);return}t.bindTexture(32879,X.__webglTexture,33984+M)}function te(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){_e(X,E,M);return}t.bindTexture(34067,X.__webglTexture,33984+M)}const J={[fo]:10497,[Sn]:33071,[po]:33648},re={[Ot]:9728,[Sl]:9984,[Ml]:9986,[dn]:9729,[oh]:9985,[sa]:9987};function Y(E,M,X){if(X?(a.texParameteri(E,10242,J[M.wrapS]),a.texParameteri(E,10243,J[M.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,J[M.wrapR]),a.texParameteri(E,10240,re[M.magFilter]),a.texParameteri(E,10241,re[M.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(M.wrapS!==Sn||M.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,D(M.magFilter)),a.texParameteri(E,10241,D(M.minFilter)),M.minFilter!==Ot&&M.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.type===Li&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===qr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(a.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Me(E,M){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",H));const ee=M.source;let se=p.get(ee);se===void 0&&(se={},p.set(ee,se));const oe=K(M);if(oe!==E.__cacheKey){se[oe]===void 0&&(se[oe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[oe].usedTimes++;const ve=se[E.__cacheKey];ve!==void 0&&(se[E.__cacheKey].usedTimes--,ve.usedTimes===0&&R(M)),E.__cacheKey=oe,E.__webglTexture=se[oe].texture}return X}function fe(E,M,X){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);const se=Me(E,M),oe=M.source;t.bindTexture(ee,E.__webglTexture,33984+X);const ve=n.get(oe);if(oe.version!==ve.__version||se===!0){t.activeTexture(33984+X),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const L=v(M)&&S(M.image)===!1;let B=b(M.image,L,!1,u);B=qe(M,B);const ue=S(B)||s,ce=r.convert(M.format,M.encoding);let ae=r.convert(M.type),me=x(M.internalFormat,ce,ae,M.encoding,M.isVideoTexture);Y(ee,M,ue);let pe;const Re=M.mipmaps,ze=s&&M.isVideoTexture!==!0,He=ve.__version===void 0||se===!0,I=w(M,B,ue);if(M.isDepthTexture)me=6402,s?M.type===Li?me=36012:M.type===Pi?me=33190:M.type===pr?me=35056:me=33189:M.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ii&&me===6402&&M.type!==du&&M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pi,ae=r.convert(M.type)),M.format===br&&me===6402&&(me=34041,M.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=pr,ae=r.convert(M.type))),He&&(ze?t.texStorage2D(3553,1,me,B.width,B.height):t.texImage2D(3553,0,me,B.width,B.height,0,ce,ae,null));else if(M.isDataTexture)if(Re.length>0&&ue){ze&&He&&t.texStorage2D(3553,I,me,Re[0].width,Re[0].height);for(let Z=0,ie=Re.length;Z<ie;Z++)pe=Re[Z],ze?t.texSubImage2D(3553,Z,0,0,pe.width,pe.height,ce,ae,pe.data):t.texImage2D(3553,Z,me,pe.width,pe.height,0,ce,ae,pe.data);M.generateMipmaps=!1}else ze?(He&&t.texStorage2D(3553,I,me,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,ce,ae,B.data)):t.texImage2D(3553,0,me,B.width,B.height,0,ce,ae,B.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&He&&t.texStorage3D(35866,I,me,Re[0].width,Re[0].height,B.depth);for(let Z=0,ie=Re.length;Z<ie;Z++)pe=Re[Z],M.format!==Mn?ce!==null?ze?t.compressedTexSubImage3D(35866,Z,0,0,0,pe.width,pe.height,B.depth,ce,pe.data,0,0):t.compressedTexImage3D(35866,Z,me,pe.width,pe.height,B.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,Z,0,0,0,pe.width,pe.height,B.depth,ce,ae,pe.data):t.texImage3D(35866,Z,me,pe.width,pe.height,B.depth,0,ce,ae,pe.data)}else{ze&&He&&t.texStorage2D(3553,I,me,Re[0].width,Re[0].height);for(let Z=0,ie=Re.length;Z<ie;Z++)pe=Re[Z],M.format!==Mn?ce!==null?ze?t.compressedTexSubImage2D(3553,Z,0,0,pe.width,pe.height,ce,pe.data):t.compressedTexImage2D(3553,Z,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,Z,0,0,pe.width,pe.height,ce,ae,pe.data):t.texImage2D(3553,Z,me,pe.width,pe.height,0,ce,ae,pe.data)}else if(M.isDataArrayTexture)ze?(He&&t.texStorage3D(35866,I,me,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ce,ae,B.data)):t.texImage3D(35866,0,me,B.width,B.height,B.depth,0,ce,ae,B.data);else if(M.isData3DTexture)ze?(He&&t.texStorage3D(32879,I,me,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ce,ae,B.data)):t.texImage3D(32879,0,me,B.width,B.height,B.depth,0,ce,ae,B.data);else if(M.isFramebufferTexture){if(He)if(ze)t.texStorage2D(3553,I,me,B.width,B.height);else{let Z=B.width,ie=B.height;for(let he=0;he<I;he++)t.texImage2D(3553,he,me,Z,ie,0,ce,ae,null),Z>>=1,ie>>=1}}else if(Re.length>0&&ue){ze&&He&&t.texStorage2D(3553,I,me,Re[0].width,Re[0].height);for(let Z=0,ie=Re.length;Z<ie;Z++)pe=Re[Z],ze?t.texSubImage2D(3553,Z,0,0,ce,ae,pe):t.texImage2D(3553,Z,me,ce,ae,pe);M.generateMipmaps=!1}else ze?(He&&t.texStorage2D(3553,I,me,B.width,B.height),t.texSubImage2D(3553,0,0,0,ce,ae,B)):t.texImage2D(3553,0,me,ce,ae,B);P(M,ue)&&C(ee),ve.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function _e(E,M,X){if(M.image.length!==6)return;const ee=Me(E,M),se=M.source;t.bindTexture(34067,E.__webglTexture,33984+X);const oe=n.get(se);if(se.version!==oe.__version||ee===!0){t.activeTexture(33984+X),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,B=[];for(let Z=0;Z<6;Z++)!ve&&!L?B[Z]=b(M.image[Z],!1,!0,c):B[Z]=L?M.image[Z].image:M.image[Z],B[Z]=qe(M,B[Z]);const ue=B[0],ce=S(ue)||s,ae=r.convert(M.format,M.encoding),me=r.convert(M.type),pe=x(M.internalFormat,ae,me,M.encoding),Re=s&&M.isVideoTexture!==!0,ze=oe.__version===void 0||ee===!0;let He=w(M,ue,ce);Y(34067,M,ce);let I;if(ve){Re&&ze&&t.texStorage2D(34067,He,pe,ue.width,ue.height);for(let Z=0;Z<6;Z++){I=B[Z].mipmaps;for(let ie=0;ie<I.length;ie++){const he=I[ie];M.format!==Mn?ae!==null?Re?t.compressedTexSubImage2D(34069+Z,ie,0,0,he.width,he.height,ae,he.data):t.compressedTexImage2D(34069+Z,ie,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+Z,ie,0,0,he.width,he.height,ae,me,he.data):t.texImage2D(34069+Z,ie,pe,he.width,he.height,0,ae,me,he.data)}}}else{I=M.mipmaps,Re&&ze&&(I.length>0&&He++,t.texStorage2D(34067,He,pe,B[0].width,B[0].height));for(let Z=0;Z<6;Z++)if(L){Re?t.texSubImage2D(34069+Z,0,0,0,B[Z].width,B[Z].height,ae,me,B[Z].data):t.texImage2D(34069+Z,0,pe,B[Z].width,B[Z].height,0,ae,me,B[Z].data);for(let ie=0;ie<I.length;ie++){const ge=I[ie].image[Z].image;Re?t.texSubImage2D(34069+Z,ie+1,0,0,ge.width,ge.height,ae,me,ge.data):t.texImage2D(34069+Z,ie+1,pe,ge.width,ge.height,0,ae,me,ge.data)}}else{Re?t.texSubImage2D(34069+Z,0,0,0,ae,me,B[Z]):t.texImage2D(34069+Z,0,pe,ae,me,B[Z]);for(let ie=0;ie<I.length;ie++){const he=I[ie];Re?t.texSubImage2D(34069+Z,ie+1,0,0,ae,me,he.image[Z]):t.texImage2D(34069+Z,ie+1,pe,ae,me,he.image[Z])}}}P(M,ce)&&C(34067),oe.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function de(E,M,X,ee,se){const oe=r.convert(X.format,X.encoding),ve=r.convert(X.type),L=x(X.internalFormat,oe,ve,X.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,L,M.width,M.height,M.depth,0,oe,ve,null):t.texImage2D(se,0,L,M.width,M.height,0,oe,ve,null)),t.bindFramebuffer(36160,E),Ve(M)?h.framebufferTexture2DMultisampleEXT(36160,ee,se,n.get(X).__webglTexture,0,Te(M)):(se===3553||se>=34069&&se<=34074)&&a.framebufferTexture2D(36160,ee,se,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(E,M,X){if(a.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(X||Ve(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Li?ee=36012:se.type===Pi&&(ee=33190));const oe=Te(M);Ve(M)?h.renderbufferStorageMultisampleEXT(36161,oe,ee,M.width,M.height):a.renderbufferStorageMultisample(36161,oe,ee,M.width,M.height)}else a.renderbufferStorage(36161,ee,M.width,M.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ee=Te(M);X&&Ve(M)===!1?a.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Ve(M)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):a.renderbufferStorage(36161,34041,M.width,M.height),a.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ee.length;se++){const oe=ee[se],ve=r.convert(oe.format,oe.encoding),L=r.convert(oe.type),B=x(oe.internalFormat,ve,L,oe.encoding),ue=Te(M);X&&Ve(M)===!1?a.renderbufferStorageMultisample(36161,ue,B,M.width,M.height):Ve(M)?h.renderbufferStorageMultisampleEXT(36161,ue,B,M.width,M.height):a.renderbufferStorage(36161,B,M.width,M.height)}}a.bindRenderbuffer(36161,null)}function we(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,se=Te(M);if(M.depthTexture.format===Ii)Ve(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,se):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===br)Ve(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,se):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function be(E){const M=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,E)}else if(X){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=a.createRenderbuffer(),Fe(M.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=a.createRenderbuffer(),Fe(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function rt(E,M,X){const ee=n.get(E);M!==void 0&&de(ee.__webglFramebuffer,E,E.texture,36064,3553),X!==void 0&&be(E)}function $e(E){const M=E.texture,X=n.get(E),ee=n.get(M);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=M.version,o.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,ve=S(E)||s;if(se){X.__webglFramebuffer=[];for(let L=0;L<6;L++)X.__webglFramebuffer[L]=a.createFramebuffer()}else{if(X.__webglFramebuffer=a.createFramebuffer(),oe)if(i.drawBuffers){const L=E.texture;for(let B=0,ue=L.length;B<ue;B++){const ce=n.get(L[B]);ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ve(E)===!1){const L=oe?M:[M];X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const ue=L[B];X.__webglColorRenderbuffer[B]=a.createRenderbuffer(),a.bindRenderbuffer(36161,X.__webglColorRenderbuffer[B]);const ce=r.convert(ue.format,ue.encoding),ae=r.convert(ue.type),me=x(ue.internalFormat,ce,ae,ue.encoding,E.isXRRenderTarget===!0),pe=Te(E);a.renderbufferStorageMultisample(36161,pe,me,E.width,E.height),a.framebufferRenderbuffer(36160,36064+B,36161,X.__webglColorRenderbuffer[B])}a.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ee.__webglTexture),Y(34067,M,ve);for(let L=0;L<6;L++)de(X.__webglFramebuffer[L],E,M,36064,34069+L);P(M,ve)&&C(34067),t.unbindTexture()}else if(oe){const L=E.texture;for(let B=0,ue=L.length;B<ue;B++){const ce=L[B],ae=n.get(ce);t.bindTexture(3553,ae.__webglTexture),Y(3553,ce,ve),de(X.__webglFramebuffer,E,ce,36064+B,3553),P(ce,ve)&&C(3553)}t.unbindTexture()}else{let L=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?L=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),Y(L,M,ve),de(X.__webglFramebuffer,E,M,36064,L),P(M,ve)&&C(L),t.unbindTexture()}E.depthBuffer&&be(E)}function Ke(E){const M=S(E)||s,X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,se=X.length;ee<se;ee++){const oe=X[ee];if(P(oe,M)){const ve=E.isWebGLCubeRenderTarget?34067:3553,L=n.get(oe).__webglTexture;t.bindTexture(ve,L),C(ve),t.unbindTexture()}}}function ct(E){if(s&&E.samples>0&&Ve(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],X=E.width,ee=E.height;let se=16384;const oe=[],ve=E.stencilBuffer?33306:36096,L=n.get(E),B=E.isWebGLMultipleRenderTargets===!0;if(B)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){oe.push(36064+ue),E.depthBuffer&&oe.push(ve);const ce=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ce===!1&&(E.depthBuffer&&(se|=256),E.stencilBuffer&&(se|=1024)),B&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ue]),ce===!0&&(a.invalidateFramebuffer(36008,[ve]),a.invalidateFramebuffer(36009,[ve])),B){const ae=n.get(M[ue]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ae,0)}a.blitFramebuffer(0,0,X,ee,0,0,X,ee,se,9728),m&&a.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,L.__webglColorRenderbuffer[ue]);const ce=n.get(M[ue]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,ce,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Te(E){return Math.min(d,E.samples)}function Ve(E){const M=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(E){const M=o.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function qe(E,M){const X=E.encoding,ee=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===go||X!==ki&&(X===et?s===!1?e.has("EXT_sRGB")===!0&&ee===Mn?(E.format=go,E.minFilter=dn,E.generateMipmaps=!1):M=pu.sRGBToLinear(M):(ee!==Mn||se!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=rt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ve}function x_(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===Ui)return 5121;if(r===dh)return 32819;if(r===hh)return 32820;if(r===lh)return 5120;if(r===ch)return 5122;if(r===du)return 5123;if(r===uh)return 5124;if(r===Pi)return 5125;if(r===Li)return 5126;if(r===qr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===fh)return 6406;if(r===Mn)return 6408;if(r===mh)return 6409;if(r===gh)return 6410;if(r===Ii)return 6402;if(r===br)return 34041;if(r===ph)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===go)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===_h)return 6403;if(r===vh)return 36244;if(r===xh)return 33319;if(r===yh)return 33320;if(r===bh)return 36249;if(r===_a||r===va||r===xa||r===ya)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wl||r===Tl||r===El||r===Cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===El)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Al||r===Pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Al)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Pl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ll||r===Dl||r===Rl||r===Il||r===Fl||r===zl||r===Ol||r===Bl||r===Nl||r===Ul||r===kl||r===Vl||r===Gl||r===Wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ll)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Il)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ol)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ul)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Hl)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===pr?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class y_ extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class S_ extends nn{constructor(e,t,n,i,r,o,s,l,c,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ii&&(n=Pi),n===void 0&&u===br&&(n=pr),super(null,i,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class M_ extends Gi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const g=t.getContextAttributes();let f=null,p=null;const _=[],y=[],b=new Set,S=new Map,v=new hn;v.layers.enable(1),v.viewport=new wt;const P=new hn;P.layers.enable(2),P.viewport=new wt;const C=[v,P],x=new y_;x.layers.enable(1),x.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let W=_[V];return W===void 0&&(W=new Za,_[V]=W),W.getTargetRaySpace()},this.getControllerGrip=function(V){let W=_[V];return W===void 0&&(W=new Za,_[V]=W),W.getGripSpace()},this.getHand=function(V){let W=_[V];return W===void 0&&(W=new Za,_[V]=W),W.getHandSpace()};function H(V){const W=y.indexOf(V.inputSource);if(W===-1)return;const te=_[W];te!==void 0&&te.dispatchEvent({type:V.type,data:V.inputSource})}function Q(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",F);for(let V=0;V<_.length;V++){const W=y[V];W!==null&&(y[V]=null,_[V].disconnect(W))}w=null,D=null,e.setRenderTarget(f),h=null,d=null,u=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:h}),p=new Tn(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:Ui,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,te=null,J=null;g.depth&&(J=g.stencil?35056:33190,W=g.stencil?br:Ii,te=g.stencil?pr:Pi);const re={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(re),i.updateRenderState({layers:[d]}),p=new Tn(d.textureWidth,d.textureHeight,{format:Mn,type:Ui,depthTexture:new S_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Y=e.properties.get(p);Y.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(s),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(V){for(let W=0;W<V.removed.length;W++){const te=V.removed[W],J=y.indexOf(te);J>=0&&(y[J]=null,_[J].disconnect(te))}for(let W=0;W<V.added.length;W++){const te=V.added[W];let J=y.indexOf(te);if(J===-1){for(let Y=0;Y<_.length;Y++)if(Y>=y.length){y.push(te),J=Y;break}else if(y[Y]===null){y[Y]=te,J=Y;break}if(J===-1)break}const re=_[J];re&&re.connect(te)}}const R=new O,N=new O;function A(V,W,te){R.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(te.matrixWorld);const J=R.distanceTo(N),re=W.projectionMatrix.elements,Y=te.projectionMatrix.elements,Me=re[14]/(re[10]-1),fe=re[14]/(re[10]+1),_e=(re[9]+1)/re[5],de=(re[9]-1)/re[5],Fe=(re[8]-1)/re[0],we=(Y[8]+1)/Y[0],be=Me*Fe,rt=Me*we,$e=J/(-Fe+we),Ke=$e*-Fe;W.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ct=Me+$e,Te=fe+$e,Ve=be-Ke,We=rt+(J-Ke),qe=_e*fe/Te*ct,E=de*fe/Te*ct;V.projectionMatrix.makePerspective(Ve,We,qe,E,ct,Te)}function z(V,W){W===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(W.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=P.near=v.near=V.near,x.far=P.far=v.far=V.far,(w!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,D=x.far);const W=V.parent,te=x.cameras;z(x,W);for(let re=0;re<te.length;re++)z(te[re],W);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),V.matrix.copy(x.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const J=V.children;for(let re=0,Y=J.length;re<Y;re++)J[re].updateMatrixWorld(!0);te.length===2?A(x,v,P):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.getPlanes=function(){return b};let U=null;function K(V,W){if(c=W.getViewerPose(l||o),m=W,c!==null){const te=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let J=!1;te.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let re=0;re<te.length;re++){const Y=te[re];let Me=null;if(h!==null)Me=h.getViewport(Y);else{const _e=u.getViewSubImage(d,Y);Me=_e.viewport,re===0&&(e.setRenderTargetTextures(p,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(p))}let fe=C[re];fe===void 0&&(fe=new hn,fe.layers.enable(re),fe.viewport=new wt,C[re]=fe),fe.matrix.fromArray(Y.transform.matrix),fe.projectionMatrix.fromArray(Y.projectionMatrix),fe.viewport.set(Me.x,Me.y,Me.width,Me.height),re===0&&x.matrix.copy(fe.matrix),J===!0&&x.cameras.push(fe)}}for(let te=0;te<_.length;te++){const J=y[te],re=_[te];J!==null&&re!==void 0&&re.update(J,W,l||o)}if(U&&U(V,W),W.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let te=null;for(const J of b)W.detectedPlanes.has(J)||(te===null&&(te=[]),te.push(J));if(te!==null)for(const J of te)b.delete(J),S.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of W.detectedPlanes)if(!b.has(J))b.add(J),S.set(J,W.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const re=S.get(J);J.lastChangedTime>re&&(S.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const q=new Mu;q.setAnimationLoop(K),this.setAnimationLoop=function(V){U=V},this.dispose=function(){}}}function w_(a,e){function t(f,p){p.color.getRGB(f.fogColor.value,xu(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,b)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?s(f,p,_,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===_n&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===_n&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uv2Transform.value.copy(b.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,_,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=y*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===_n&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function T_(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const v=b.program;n.updateUBOMapping(y,v);const P=e.render.frame;r[y.id]!==P&&(h(y),r[y.id]=P)}function u(y){const b=d();y.__bindingPointIndex=b;const S=a.createBuffer(),v=y.__size,P=y.usage;return a.bindBuffer(35345,S),a.bufferData(35345,v,P),a.bindBuffer(35345,null),a.bindBufferBase(35345,b,S),S}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=i[y.id],S=y.uniforms,v=y.__cache;a.bindBuffer(35345,b);for(let P=0,C=S.length;P<C;P++){const x=S[P];if(m(x,P,v)===!0){const w=x.value,D=x.__offset;typeof w=="number"?(x.__data[0]=w,a.bufferSubData(35345,D,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):w.toArray(x.__data),a.bufferSubData(35345,D,x.__data))}}a.bindBuffer(35345,null)}function m(y,b,S){const v=y.value;if(S[b]===void 0)return typeof v=="number"?S[b]=v:S[b]=v.clone(),!0;if(typeof v=="number"){if(S[b]!==v)return S[b]=v,!0}else{const P=S[b];if(P.equals(v)===!1)return P.copy(v),!0}return!1}function g(y){const b=y.uniforms;let S=0;const v=16;let P=0;for(let C=0,x=b.length;C<x;C++){const w=b[C],D=f(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,C>0){P=S%v;const H=v-P;P!==0&&H-D.boundary<0&&(S+=v-P,w.__offset=S)}S+=D.storage}return P=S%v,P>0&&(S+=v-P),y.__size=S,y.__cache={},this}function f(y){const b=y.value,S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(y){const b=y.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const y in i)a.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function E_(){const a=Xs("canvas");return a.style.display="block",a}function Au(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:E_(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,y=0,b=null,S=-1,v=null;const P=new wt,C=new wt;let x=null,w=e.width,D=e.height,H=1,Q=null,F=null;const R=new wt(0,0,w,D),N=new wt(0,0,w,D);let A=!1;const z=new Su;let U=!1,K=!1,q=null;const V=new gt,W=new Se,te=new O,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return b===null?H:1}let Y=t;function Me(T,G){for(let j=0;j<T.length;j++){const k=T[j],$=e.getContext(k,G);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),Y===null){const G=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&G.shift(),Y=Me(G,T),Y===null)throw Me(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,_e,de,Fe,we,be,rt,$e,Ke,ct,Te,Ve,We,qe,E,M,X,ee,se,oe,ve,L,B,ue;function ce(){fe=new Bm(Y),_e=new Dm(Y,fe,a),fe.init(_e),L=new x_(Y,fe,_e),de=new __(Y,fe,_e),Fe=new km,we=new i_,be=new v_(Y,fe,de,we,_e,L,Fe),rt=new Im(f),$e=new Om(f),Ke=new jh(Y,_e),B=new Pm(Y,fe,Ke,_e),ct=new Nm(Y,Ke,Fe,B),Te=new Hm(Y,ct,Ke,Fe),se=new Wm(Y,_e,be),M=new Rm(we),Ve=new n_(f,rt,$e,fe,_e,B,M),We=new w_(f,we),qe=new s_,E=new d_(fe,_e),ee=new Am(f,rt,$e,de,Te,u,o),X=new g_(f,Te,_e),ue=new T_(Y,Fe,_e,de),oe=new Lm(Y,fe,Fe,_e),ve=new Um(Y,fe,Fe,_e),Fe.programs=Ve.programs,f.capabilities=_e,f.extensions=fe,f.properties=we,f.renderLists=qe,f.shadowMap=X,f.state=de,f.info=Fe}ce();const ae=new M_(f,Y);this.xr=ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(w,D,!1))},this.getSize=function(T){return T.set(w,D)},this.setSize=function(T,G,j){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,D=G,e.width=Math.floor(T*H),e.height=Math.floor(G*H),j!==!1&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(w*H,D*H).floor()},this.setDrawingBufferSize=function(T,G,j){w=T,D=G,H=j,e.width=Math.floor(T*j),e.height=Math.floor(G*j),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,G,j,k){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,G,j,k),de.viewport(P.copy(R).multiplyScalar(H).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,G,j,k){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,G,j,k),de.scissor(C.copy(N).multiplyScalar(H).floor())},this.getScissorTest=function(){return A},this.setScissorTest=function(T){de.setScissorTest(A=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,G=!0,j=!0){let k=0;T&&(k|=16384),G&&(k|=256),j&&(k|=1024),Y.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),qe.dispose(),E.dispose(),we.dispose(),rt.dispose(),$e.dispose(),Te.dispose(),B.dispose(),ue.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",he),ae.removeEventListener("sessionend",ge),q&&(q.dispose(),q=null),Oe.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Fe.autoReset,G=X.enabled,j=X.autoUpdate,k=X.needsUpdate,$=X.type;ce(),Fe.autoReset=T,X.enabled=G,X.autoUpdate=j,X.needsUpdate=k,X.type=$}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const G=T.target;G.removeEventListener("dispose",ze),He(G)}function He(T){I(T),we.remove(T)}function I(T){const G=we.get(T).programs;G!==void 0&&(G.forEach(function(j){Ve.releaseProgram(j)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,j,k,$,ye){G===null&&(G=J);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,De=cs(T,G,j,k,$);de.setMaterial(k,Ee);let Ie=j.index,Ge=1;k.wireframe===!0&&(Ie=ct.getWireframeAttribute(j),Ge=2);const Ne=j.drawRange,Ue=j.attributes.position;let ut=Ne.start*Ge,Yt=(Ne.start+Ne.count)*Ge;ye!==null&&(ut=Math.max(ut,ye.start*Ge),Yt=Math.min(Yt,(ye.start+ye.count)*Ge)),Ie!==null?(ut=Math.max(ut,0),Yt=Math.min(Yt,Ie.count)):Ue!=null&&(ut=Math.max(ut,0),Yt=Math.min(Yt,Ue.count));const zn=Yt-ut;if(zn<0||zn===1/0)return;B.setup($,k,De,j,Ie);let _i,dt=oe;if(Ie!==null&&(_i=Ke.get(Ie),dt=ve,dt.setIndex(_i)),$.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*re()),dt.setMode(1)):dt.setMode(4);else if($.isLine){let ke=k.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*re()),$.isLineSegments?dt.setMode(1):$.isLineLoop?dt.setMode(2):dt.setMode(3)}else $.isPoints?dt.setMode(0):$.isSprite&&dt.setMode(4);if($.isInstancedMesh)dt.renderInstances(ut,zn,$.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,fa=Math.min(j.instanceCount,ke);dt.renderInstances(ut,zn,fa)}else dt.render(ut,zn)},this.compile=function(T,G){function j(k,$,ye){k.transparent===!0&&k.side===ri?(k.side=_n,k.needsUpdate=!0,Pt(k,$,ye),k.side=vr,k.needsUpdate=!0,Pt(k,$,ye),k.side=ri):Pt(k,$,ye)}h=E.get(T),h.init(),g.push(h),T.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(f.physicallyCorrectLights),T.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let ye=0;ye<$.length;ye++){const Ee=$[ye];j(Ee,T,k)}else j($,T,k)}),g.pop(),h=null};let Z=null;function ie(T){Z&&Z(T)}function he(){Oe.stop()}function ge(){Oe.start()}const Oe=new Mu;Oe.setAnimationLoop(ie),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){Z=T,ae.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},ae.addEventListener("sessionstart",he),ae.addEventListener("sessionend",ge),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,G,b),h=E.get(T,g.length),h.init(),g.push(h),V.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(V),K=this.localClippingEnabled,U=M.init(this.clippingPlanes,K,G),d=qe.get(T,m.length),d.init(),m.push(d),Qe(T,G,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(Q,F),U===!0&&M.beginShadows();const j=h.state.shadowsArray;if(X.render(j,T,G),U===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),h.setupLights(f.physicallyCorrectLights),G.isArrayCamera){const k=G.cameras;for(let $=0,ye=k.length;$<ye;$++){const Ee=k[$];xt(d,T,Ee,Ee.viewport)}}else xt(d,T,G);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(f,T,G),B.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Qe(T,G,j,k){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||z.intersectsSprite(T)){k&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ee=Te.update(T),De=T.material;De.visible&&d.push(T,Ee,De,j,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||z.intersectsObject(T))){k&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ee=Te.update(T),De=T.material;if(Array.isArray(De)){const Ie=Ee.groups;for(let Ge=0,Ne=Ie.length;Ge<Ne;Ge++){const Ue=Ie[Ge],ut=De[Ue.materialIndex];ut&&ut.visible&&d.push(T,Ee,ut,j,te.z,Ue)}}else De.visible&&d.push(T,Ee,De,j,te.z,null)}}const ye=T.children;for(let Ee=0,De=ye.length;Ee<De;Ee++)Qe(ye[Ee],G,j,k)}function xt(T,G,j,k){const $=T.opaque,ye=T.transmissive,Ee=T.transparent;h.setupLightsView(j),ye.length>0&&Fn($,G,j),k&&de.viewport(P.copy(k)),$.length>0&&je($,G,j),ye.length>0&&je(ye,G,j),Ee.length>0&&je(Ee,G,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Fn(T,G,j){const k=_e.isWebGL2;q===null&&(q=new Tn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?qr:Ui,minFilter:sa,samples:k&&r===!0?4:0})),f.getDrawingBufferSize(W),k?q.setSize(W.x,W.y):q.setSize(_o(W.x),_o(W.y));const $=f.getRenderTarget();f.setRenderTarget(q),f.clear();const ye=f.toneMapping;f.toneMapping=qn,je(T,G,j),f.toneMapping=ye,be.updateMultisampleRenderTarget(q),be.updateRenderTargetMipmap(q),f.setRenderTarget($)}function je(T,G,j){const k=G.isScene===!0?G.overrideMaterial:null;for(let $=0,ye=T.length;$<ye;$++){const Ee=T[$],De=Ee.object,Ie=Ee.geometry,Ge=k===null?Ee.material:k,Ne=Ee.group;De.layers.test(j.layers)&&on(De,G,j,Ie,Ge,Ne)}}function on(T,G,j,k,$,ye){T.onBeforeRender(f,G,j,k,$,ye),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(f,G,j,k,T,ye),$.transparent===!0&&$.side===ri?($.side=_n,$.needsUpdate=!0,f.renderBufferDirect(j,G,k,$,T,ye),$.side=vr,$.needsUpdate=!0,f.renderBufferDirect(j,G,k,$,T,ye),$.side=ri):f.renderBufferDirect(j,G,k,$,T,ye),T.onAfterRender(f,G,j,k,$,ye)}function Pt(T,G,j){G.isScene!==!0&&(G=J);const k=we.get(T),$=h.state.lights,ye=h.state.shadowsArray,Ee=$.state.version,De=Ve.getParameters(T,$.state,ye,G,j),Ie=Ve.getProgramCacheKey(De);let Ge=k.programs;k.environment=T.isMeshStandardMaterial?G.environment:null,k.fog=G.fog,k.envMap=(T.isMeshStandardMaterial?$e:rt).get(T.envMap||k.environment),Ge===void 0&&(T.addEventListener("dispose",ze),Ge=new Map,k.programs=Ge);let Ne=Ge.get(Ie);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===Ee)return Dr(T,De),Ne}else De.uniforms=Ve.getUniforms(T),T.onBuild(j,De,f),T.onBeforeCompile(De,f),Ne=Ve.acquireProgram(De,Ie),Ge.set(Ie,Ne),k.uniforms=De.uniforms;const Ue=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=M.uniform),Dr(T,De),k.needsLights=ha(T),k.lightsStateVersion=Ee,k.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMap.value=$.state.directionalShadowMap,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotShadowMap.value=$.state.spotShadowMap,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMap.value=$.state.pointShadowMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix);const ut=Ne.getUniforms(),Yt=Us.seqWithValue(ut.seq,Ue);return k.currentProgram=Ne,k.uniformsList=Yt,Ne}function Dr(T,G){const j=we.get(T);j.outputEncoding=G.outputEncoding,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function cs(T,G,j,k,$){G.isScene!==!0&&(G=J),be.resetTextureUnits();const ye=G.fog,Ee=k.isMeshStandardMaterial?G.environment:null,De=b===null?f.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:ki,Ie=(k.isMeshStandardMaterial?$e:rt).get(k.envMap||Ee),Ge=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!j.attributes.tangent,Ue=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,Yt=!!j.morphAttributes.color,zn=k.toneMapped?f.toneMapping:qn,_i=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=_i!==void 0?_i.length:0,ke=we.get(k),fa=h.state.lights;if(U===!0&&(K===!0||T!==v)){const jt=T===v&&k.id===S;M.setState(k,T,jt)}let yt=!1;k.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==fa.state.version||ke.outputEncoding!==De||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ie||k.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ne||ke.morphTargets!==Ue||ke.morphNormals!==ut||ke.morphColors!==Yt||ke.toneMapping!==zn||_e.isWebGL2===!0&&ke.morphTargetsCount!==dt)&&(yt=!0):(yt=!0,ke.__version=k.version);let vi=ke.currentProgram;yt===!0&&(vi=Pt(k,G,$));let ml=!1,Rr=!1,pa=!1;const Lt=vi.getUniforms(),xi=ke.uniforms;if(de.useProgram(vi.program)&&(ml=!0,Rr=!0,pa=!0),k.id!==S&&(S=k.id,Rr=!0),ml||v!==T){if(Lt.setValue(Y,"projectionMatrix",T.projectionMatrix),_e.logarithmicDepthBuffer&&Lt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,Rr=!0,pa=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const jt=Lt.map.cameraPosition;jt!==void 0&&jt.setValue(Y,te.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Lt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&Lt.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){Lt.setOptional(Y,$,"bindMatrix"),Lt.setOptional(Y,$,"bindMatrixInverse");const jt=$.skeleton;jt&&(_e.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Lt.setValue(Y,"boneTexture",jt.boneTexture,be),Lt.setValue(Y,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ma=j.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&_e.isWebGL2===!0)&&se.update($,j,k,vi),(Rr||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,Lt.setValue(Y,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xi.envMap.value=Ie,xi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Rr&&(Lt.setValue(Y,"toneMappingExposure",f.toneMappingExposure),ke.needsLights&&da(xi,pa),ye&&k.fog===!0&&We.refreshFogUniforms(xi,ye),We.refreshMaterialUniforms(xi,k,H,D,q),Us.upload(Y,ke.uniformsList,xi,be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(Y,ke.uniformsList,xi,be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Lt.setValue(Y,"center",$.center),Lt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(Y,"normalMatrix",$.normalMatrix),Lt.setValue(Y,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const jt=k.uniformsGroups;for(let ga=0,Dd=jt.length;ga<Dd;ga++)if(_e.isWebGL2){const gl=jt[ga];ue.update(gl,vi),ue.bind(gl,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function da(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ha(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,G,j){we.get(T.texture).__webglTexture=G,we.get(T.depthTexture).__webglTexture=j;const k=we.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const j=we.get(T);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,j=0){b=T,_=G,y=j;let k=!0,$=null,ye=!1,Ee=!1;if(T){const Ie=we.get(T);Ie.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),k=!1):Ie.__webglFramebuffer===void 0?be.setupRenderTarget(T):Ie.__hasExternalTextures&&be.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Ne=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Ne[G],ye=!0):_e.isWebGL2&&T.samples>0&&be.useMultisampledRTT(T)===!1?$=we.get(T).__webglMultisampledFramebuffer:$=Ne,P.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else P.copy(R).multiplyScalar(H).floor(),C.copy(N).multiplyScalar(H).floor(),x=A;if(de.bindFramebuffer(36160,$)&&_e.drawBuffers&&k&&de.drawBuffers(T,$),de.viewport(P),de.scissor(C),de.setScissorTest(x),ye){const Ie=we.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+G,Ie.__webglTexture,j)}else if(Ee){const Ie=we.get(T.texture),Ge=G||0;Y.framebufferTextureLayer(36160,36064,Ie.__webglTexture,j||0,Ge)}S=-1},this.readRenderTargetPixels=function(T,G,j,k,$,ye,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){de.bindFramebuffer(36160,De);try{const Ie=T.texture,Ge=Ie.format,Ne=Ie.type;if(Ge!==Mn&&L.convert(Ge)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===qr&&(fe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ne!==Ui&&L.convert(Ne)!==Y.getParameter(35738)&&!(Ne===Li&&(_e.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-k&&j>=0&&j<=T.height-$&&Y.readPixels(G,j,k,$,L.convert(Ge),L.convert(Ne),ye)}finally{const Ie=b!==null?we.get(b).__webglFramebuffer:null;de.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(T,G,j=0){const k=Math.pow(2,-j),$=Math.floor(G.image.width*k),ye=Math.floor(G.image.height*k);be.setTexture2D(G,0),Y.copyTexSubImage2D(3553,j,0,0,T.x,T.y,$,ye),de.unbindTexture()},this.copyTextureToTexture=function(T,G,j,k=0){const $=G.image.width,ye=G.image.height,Ee=L.convert(j.format),De=L.convert(j.type);be.setTexture2D(j,0),Y.pixelStorei(37440,j.flipY),Y.pixelStorei(37441,j.premultiplyAlpha),Y.pixelStorei(3317,j.unpackAlignment),G.isDataTexture?Y.texSubImage2D(3553,k,T.x,T.y,$,ye,Ee,De,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(3553,k,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Ee,G.mipmaps[0].data):Y.texSubImage2D(3553,k,T.x,T.y,Ee,De,G.image),k===0&&j.generateMipmaps&&Y.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(T,G,j,k,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Ie=L.convert(k.format),Ge=L.convert(k.type);let Ne;if(k.isData3DTexture)be.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)be.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,k.flipY),Y.pixelStorei(37441,k.premultiplyAlpha),Y.pixelStorei(3317,k.unpackAlignment);const Ue=Y.getParameter(3314),ut=Y.getParameter(32878),Yt=Y.getParameter(3316),zn=Y.getParameter(3315),_i=Y.getParameter(32877),dt=j.isCompressedTexture?j.mipmaps[0]:j.image;Y.pixelStorei(3314,dt.width),Y.pixelStorei(32878,dt.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(Ne,$,G.x,G.y,G.z,ye,Ee,De,Ie,Ge,dt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ne,$,G.x,G.y,G.z,ye,Ee,De,Ie,dt.data)):Y.texSubImage3D(Ne,$,G.x,G.y,G.z,ye,Ee,De,Ie,Ge,dt),Y.pixelStorei(3314,Ue),Y.pixelStorei(32878,ut),Y.pixelStorei(3316,Yt),Y.pixelStorei(3315,zn),Y.pixelStorei(32877,_i),$===0&&k.generateMipmaps&&Y.generateMipmap(Ne),de.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),de.unbindTexture()},this.resetState=function(){_=0,y=0,b=null,de.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class C_ extends Au{}C_.prototype.isWebGL1Renderer=!0;class A_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class P_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new O;class dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ds extends vn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class L_ extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new gt,xo=new ko,Rs=new is,Is=new O;class D_ extends kt{constructor(e=new Xt,t=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;Ec.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Ec);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,f=m;g<f;g++){const p=c.getX(g);Is.fromBufferAttribute(d,p),Cc(Is,p,l,i,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,f=m;g<f;g++)Is.fromBufferAttribute(d,g),Cc(Is,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Cc(a,e,t,n,i,r,o){const s=xo.distanceSqToPoint(a);if(s<t){const l=new O;xo.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class qo extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const u=[],d=new O,h=new O,m=[],g=[],f=[],p=[];for(let _=0;_<=n;_++){const y=[],b=_/n;let S=0;_==0&&o==0?S=.5/t:_==n&&l==Math.PI&&(S=-.5/t);for(let v=0;v<=t;v++){const P=v/t;d.x=-e*Math.cos(i+P*r)*Math.sin(o+b*s),d.y=e*Math.cos(o+b*s),d.z=e*Math.sin(i+P*r)*Math.sin(o+b*s),g.push(d.x,d.y,d.z),h.copy(d).normalize(),f.push(h.x,h.y,h.z),p.push(P+S,1-b),y.push(c++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const b=u[_][y+1],S=u[_][y],v=u[_+1][y],P=u[_+1][y+1];(_!==0||o>0)&&m.push(b,S,P),(_!==n-1||l<Math.PI)&&m.push(S,v,P)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(p,2))}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class R_ extends Xt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new O,r=new O;if(e.index!==null){const o=e.attributes.position,s=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,m=d.count;for(let g=h,f=h+m;g<f;g+=3)for(let p=0;p<3;p++){const _=s.getX(g+p),y=s.getX(g+(p+1)%3);i.fromBufferAttribute(o,_),r.fromBufferAttribute(o,y),Ac(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let s=0,l=o.count/3;s<l;s++)for(let c=0;c<3;c++){const u=3*s+c,d=3*s+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Ac(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new lt(t,3))}}}function Ac(a,e,t){const n=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class I_ extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class F_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pc(){return(typeof performance>"u"?Date:performance).now()}class Lc extends P_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class z_{constructor(e,t,n=0,i=1/0){this.ray=new ko(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yo(e,this,n,t),n.sort(Dc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yo(e[i],this,n,t);return n.sort(Dc),n}}function Dc(a,e){return a.distance-e.distance}function yo(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,o=i.length;r<o;r++)yo(i[r],e,t,!0)}}class Rc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const Ic={type:"change"},$a={type:"start"},Fc={type:"end"};class O_ extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",qe),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ic),n.update(),r=i.NONE},this.update=function(){const L=new O,B=new Vi().setFromUnitVectors(e.up,new O(0,1,0)),ue=B.clone().invert(),ce=new O,ae=new Vi,me=2*Math.PI;return function(){const Re=n.object.position;L.copy(Re).sub(n.target),L.applyQuaternion(B),s.setFromVector3(L),n.autoRotate&&r===i.NONE&&w(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ze=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(He)&&(ze<-Math.PI?ze+=me:ze>Math.PI&&(ze-=me),He<-Math.PI?He+=me:He>Math.PI&&(He-=me),ze<=He?s.theta=Math.max(ze,Math.min(He,s.theta)):s.theta=s.theta>(ze+He)/2?Math.max(ze,s.theta):Math.min(He,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(s),L.applyQuaternion(ue),Re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ce.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(Ic),ce.copy(n.object.position),ae.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",We),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ke),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",qe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new Rc,l=new Rc;let c=1;const u=new O;let d=!1;const h=new Se,m=new Se,g=new Se,f=new Se,p=new Se,_=new Se,y=new Se,b=new Se,S=new Se,v=[],P={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function D(L){l.phi-=L}const H=function(){const L=new O;return function(ue,ce){L.setFromMatrixColumn(ce,0),L.multiplyScalar(-ue),u.add(L)}}(),Q=function(){const L=new O;return function(ue,ce){n.screenSpacePanning===!0?L.setFromMatrixColumn(ce,1):(L.setFromMatrixColumn(ce,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ue),u.add(L)}}(),F=function(){const L=new O;return function(ue,ce){const ae=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;L.copy(me).sub(n.target);let pe=L.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),H(2*ue*pe/ae.clientHeight,n.object.matrix),Q(2*ce*pe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(ue*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),Q(ce*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function A(L){h.set(L.clientX,L.clientY)}function z(L){y.set(L.clientX,L.clientY)}function U(L){f.set(L.clientX,L.clientY)}function K(L){m.set(L.clientX,L.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;w(2*Math.PI*g.x/B.clientHeight),D(2*Math.PI*g.y/B.clientHeight),h.copy(m),n.update()}function q(L){b.set(L.clientX,L.clientY),S.subVectors(b,y),S.y>0?R(x()):S.y<0&&N(x()),y.copy(b),n.update()}function V(L){p.set(L.clientX,L.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),F(_.x,_.y),f.copy(p),n.update()}function W(L){L.deltaY<0?N(x()):L.deltaY>0&&R(x()),n.update()}function te(L){let B=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),B=!0;break}B&&(L.preventDefault(),n.update())}function J(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);h.set(L,B)}}function re(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);f.set(L,B)}}function Y(){const L=v[0].pageX-v[1].pageX,B=v[0].pageY-v[1].pageY,ue=Math.sqrt(L*L+B*B);y.set(0,ue)}function Me(){n.enableZoom&&Y(),n.enablePan&&re()}function fe(){n.enableZoom&&Y(),n.enableRotate&&J()}function _e(L){if(v.length==1)m.set(L.pageX,L.pageY);else{const ue=ve(L),ce=.5*(L.pageX+ue.x),ae=.5*(L.pageY+ue.y);m.set(ce,ae)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;w(2*Math.PI*g.x/B.clientHeight),D(2*Math.PI*g.y/B.clientHeight),h.copy(m)}function de(L){if(v.length===1)p.set(L.pageX,L.pageY);else{const B=ve(L),ue=.5*(L.pageX+B.x),ce=.5*(L.pageY+B.y);p.set(ue,ce)}_.subVectors(p,f).multiplyScalar(n.panSpeed),F(_.x,_.y),f.copy(p)}function Fe(L){const B=ve(L),ue=L.pageX-B.x,ce=L.pageY-B.y,ae=Math.sqrt(ue*ue+ce*ce);b.set(0,ae),S.set(0,Math.pow(b.y/y.y,n.zoomSpeed)),R(S.y),y.copy(b)}function we(L){n.enableZoom&&Fe(L),n.enablePan&&de(L)}function be(L){n.enableZoom&&Fe(L),n.enableRotate&&_e(L)}function rt(L){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",Ke)),ee(L),L.pointerType==="touch"?E(L):Te(L))}function $e(L){n.enabled!==!1&&(L.pointerType==="touch"?M(L):Ve(L))}function Ke(L){se(L),v.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ke)),n.dispatchEvent(Fc),r=i.NONE}function ct(L){se(L)}function Te(L){let B;switch(L.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case qi.DOLLY:if(n.enableZoom===!1)return;z(L),r=i.DOLLY;break;case qi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;U(L),r=i.PAN}else{if(n.enableRotate===!1)return;A(L),r=i.ROTATE}break;case qi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;A(L),r=i.ROTATE}else{if(n.enablePan===!1)return;U(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent($a)}function Ve(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(L);break;case i.DOLLY:if(n.enableZoom===!1)return;q(L);break;case i.PAN:if(n.enablePan===!1)return;V(L);break}}function We(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent($a),W(L),n.dispatchEvent(Fc))}function qe(L){n.enabled===!1||n.enablePan===!1||te(L)}function E(L){switch(oe(L),v.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(),r=i.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent($a)}function M(L){switch(oe(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(L),n.update();break;default:r=i.NONE}}function X(L){n.enabled!==!1&&L.preventDefault()}function ee(L){v.push(L)}function se(L){delete P[L.pointerId];for(let B=0;B<v.length;B++)if(v[B].pointerId==L.pointerId){v.splice(B,1);return}}function oe(L){let B=P[L.pointerId];B===void 0&&(B=new Se,P[L.pointerId]=B),B.set(L.pageX,L.pageY)}function ve(L){const B=L.pointerId===v[0].pointerId?v[1]:v[0];return P[B.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",We,{passive:!1}),this.update()}}const js={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class os{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B_=new Wo(-1,1,1,-1,0,1),Xo=new Xt;Xo.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));Xo.setAttribute("uv",new lt([0,2,0,0,2,0],2));class Pu{constructor(e){this._mesh=new wn(Xo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zc extends os{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ys.clone(e.uniforms),this.material=new Ft({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Oc extends os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(s),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class N_ extends os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class U_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Se);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],js===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),zc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new zc(js),this.clock=new F_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Oc!==void 0&&(o instanceof Oc?n=!0:o instanceof N_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Wo(-1,1,1,-1,0,1);const Lu=new Xt;Lu.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));Lu.setAttribute("uv",new lt([0,2,0,0,2,0],2));class k_ extends os{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Bc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Mr extends os{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Tn(r,o);h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Tn(r,o);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}Bc===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const s=Bc;this.highPassUniforms=Ys.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new Se(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,js===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=js;this.copyUniforms=Ys.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ft({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:qs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new aa,this.fsQuad=new Pu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new Se(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Ft({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Mr.BlurDirectionX=new Se(1,0);Mr.BlurDirectionY=new Se(0,1);const Nc=new Wi,Fs=new O;class V_ extends I_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new lt(e,3)),this.setAttribute("uv",new lt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Lc(t,6,1);return this.setAttribute("instanceStart",new dr(n,3,0)),this.setAttribute("instanceEnd",new dr(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Lc(t,6,1);return this.setAttribute("instanceColorStart",new dr(n,3,0)),this.setAttribute("instanceColorEnd",new dr(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new R_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Nc.setFromBufferAttribute(t),this.boundingBox.union(Nc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Fs.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Fs)),Fs.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fs));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}function Vn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Du(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yr={duration:.5,overwrite:!1,delay:0},Yo,Tt,Je,mn=1e8,Ye=1/mn,bo=Math.PI*2,G_=bo/4,W_=0,Ru=Math.sqrt,H_=Math.cos,q_=Math.sin,Mt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},Yn=function(e){return typeof e=="number"},jo=function(e){return typeof e>"u"},In=function(e){return typeof e=="object"},Vt=function(e){return e!==!1},Zo=function(){return typeof window<"u"},zs=function(e){return st(e)||Mt(e)},Iu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},At=Array.isArray,X_=/random\([^)]+\)/g,Y_=/,\s*/g,Uc=/(?:-?\.?\d|\.)+/gi,Fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zu=/[+-]=-?[.\d]+/,j_=/[^,'"\[\]\s]+/gi,Z_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nt,Cn,So,$o,sn={},Zs={},Ou,Bu=function(e){return(Zs=wr(e,sn))&&qt},Ko=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},jr=function(e,t){return!t&&console.warn(e)},Nu=function(e,t){return e&&(sn[e]=t)&&Zs&&(Zs[e]=t)||sn},Zr=function(){return 0},$_={suppressEvents:!0,isStart:!0,kill:!1},ks={suppressEvents:!0,kill:!1},K_={suppressEvents:!0},Jo={},di=[],Mo={},Uu,Kt={},Ja={},kc=30,Vs=[],Qo="",el=function(e){var t=e[0],n,i;if(In(t)||st(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vs.length;i--&&!Vs[i].targetTest(t););n=Vs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new od(e[i],n)))||e.splice(i,1);return e},zi=function(e){return e._gsap||el(gn(e))[0]._gsap},ku=function(e,t,n){return(n=e[t])&&st(n)?e[t]():jo(n)&&e.getAttribute&&e.getAttribute(t)||n},Gt=function(e,t){return(e=e.split(",")).forEach(t)||e},at=function(e){return Math.round(e*1e5)/1e5||0},tt=function(e){return Math.round(e*1e7)/1e7||0},mr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},J_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$s=function(){var e=di.length,t=di.slice(0),n,i;for(Mo={},di.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tl=function(e){return!!(e._initted||e._startAt||e.add)},Vu=function(e,t,n,i){di.length&&!Tt&&$s(),e.render(t,n,i||!!(Tt&&t<0&&tl(e))),di.length&&!Tt&&$s()},Gu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(j_).length<2?t:Mt(e)?e.trim():e},Wu=function(e){return e},an=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Q_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wr=function(e,t){for(var n in t)e[n]=t[n];return e},Vc=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=In(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ks=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Gr=function(e){var t=e.parent||nt,n=e.keyframes?Q_(At(e.keyframes)):an;if(Vt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},e0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Hu=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},la=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Oi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},t0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wo=function(e,t,n,i){return e._startAt&&(Tt?e._startAt.revert(ks):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},n0=function a(e){return!e||e._ts&&a(e.parent)},Gc=function(e){return e._repeat?Tr(e._tTime,e=e.duration()+e._rDelay)*e:0},Tr=function(e,t){var n=Math.floor(e=tt(e/t));return e&&n===e?n-1:n},Js=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ca=function(e){return e._end=tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ca(e),n._dirty||Oi(n,e)),e},qu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Js(e.rawTime(),t),(!t._dur||ls(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),Oi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},Dn=function(e,t,n,i){return t.parent&&fi(t),t._start=tt((Yn(n)?n:n||e!==nt?cn(e,n,t):e._time)+t._delay),t._end=tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hu(e,t,"_first","_last",e._sort?"_start":0),To(t)||(e._recent=t),i||qu(e,t),e._ts<0&&ua(e,e._tTime),e},Xu=function(e,t){return(sn.ScrollTrigger||Ko("scrollTrigger",t))&&sn.ScrollTrigger.create(t,e)},Yu=function(e,t,n,i,r){if(il(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Tt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uu!==Jt.frame)return di.push(e),e._lazy=[r,i],1},i0=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},To=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},r0=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&i0(e)&&!(!e._initted&&To(e))||(e._ts<0||e._dp._ts<0)&&!To(e))?0:1,s=e._rDelay,l=0,c,u,d;if(s&&e._repeat&&(l=ls(0,e._tDur,t),u=Tr(l,s),e._yoyo&&u&1&&(o=1-o),u!==Tr(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Tt||i||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Yu(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&wo(e,t,n,!0),e._onUpdate&&!n&&Qt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fi(e,1),!n&&!Tt&&(Qt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},s0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Er=function(e,t,n,i){var r=e._repeat,o=tt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:tt(o*(r+1)+e._rDelay*r):o,s>0&&!i&&ua(e,e._tTime=e._tDur*s),e.parent&&ca(e),n||Oi(e.parent,e),e},Wc=function(e){return e instanceof Nt?Oi(e):Er(e,e._dur)},a0={_start:0,endTime:Zr,totalDuration:Zr},cn=function a(e,t,n){var i=e.labels,r=e._recent||a0,o=e.duration()>=mn?r.endTime(!1):e._dur,s,l,c;return Mt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(At(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},Wr=function(e,t,n){var i=Yn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Vt(l.vars.inherit)&&l.parent;o.immediateRender=Vt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ft(t[0],o,t[r+1])},gi=function(e,t){return e||e===0?t(e):t},ls=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!Mt(e)||!(t=Z_.exec(e))?"":t[1]},o0=function(e,t,n){return gi(n,function(i){return ls(e,t,i)})},Eo=[].slice,ju=function(e,t){return e&&In(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&In(e[0]))&&!e.nodeType&&e!==Cn},l0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Mt(i)&&!t||ju(i,1)?(r=n).push.apply(r,gn(i)):n.push(i)})||n},gn=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):Mt(e)&&!n&&(So||!Cr())?Eo.call((t||$o).querySelectorAll(e),0):At(e)?l0(e,n):ju(e)?Eo.call(e,0):e?[e]:[]},Co=function(e){return e=gn(e)[0]||jr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?jr("Invalid scope")||$o.createElement("div"):e)}},Zu=function(e){return e.sort(function(){return .5-Math.random()})},$u=function(e){if(st(e))return e;var t=In(e)?e:{each:e},n=Bi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,d=i;return Mt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],d=i[1]),function(h,m,g){var f=(g||t).length,p=o[f],_,y,b,S,v,P,C,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,mn])[1],!w){for(C=-mn;C<(C=g[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(p=o[f]=[],_=l?Math.min(w,f)*u-.5:i%w,y=w===mn?0:l?f*d/w-.5:i/w|0,C=0,x=mn,P=0;P<f;P++)b=P%w-_,S=y-(P/w|0),p[P]=v=c?Math.abs(c==="y"?S:b):Ru(b*b+S*S),v>C&&(C=v),v<x&&(x=v);i==="random"&&Zu(p),p.max=C-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=Ct(t.amount||t.each)||0,n=n&&f<0?b0(n):n}return f=(p[h]-p.min)/p.max||0,tt(p.b+(n?n(f):f)*p.v)+p.u}},Ao=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yn(n)?0:Ct(n))}},Ku=function(e,t){var n=At(e),i,r;return!n&&In(e)&&(i=n=e.radius||mn,e.values?(e=gn(e.values),(r=!Yn(e[0]))&&(i*=i)):e=Ao(e.increment)),gi(t,n?st(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=mn,u=0,d=e.length,h,m;d--;)r?(h=e[d].x-s,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-s),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:o,r||u===o||Yn(o)?u:u+Ct(o)}:Ao(e))},Ju=function(e,t,n,i){return gi(At(e)?!t:n===!0?!!(n=0):!i,function(){return At(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},c0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},u0=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},d0=function(e,t,n){return ed(e,t,0,1,n)},Qu=function(e,t,n){return gi(n,function(i){return e[~~t(i)]})},h0=function a(e,t,n){var i=t-e;return At(e)?Qu(e,a(0,e.length),t):gi(n,function(r){return(i+(r-e)%i)%i+e})},f0=function a(e,t,n){var i=t-e,r=i*2;return At(e)?Qu(e,a(0,e.length-1),t):gi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},$r=function(e){return e.replace(X_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Y_);return Ju(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ed=function(e,t,n,i,r){var o=t-e,s=i-n;return gi(r,function(l){return n+((l-e)/o*s||0)})},p0=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=Mt(e),s={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(At(e)&&!At(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(a(e[c-1],e[c]));d--,r=function(g){g*=d;var f=Math.min(h,~~g);return u[f](g-f)},n=t}else i||(e=wr(At(e)?[]:{},e));if(!u){for(l in t)nl.call(s,e,l,"get",t[l]);r=function(g){return al(g,s)||(o?e.p:e)}}}return gi(n,r)},Hc=function(e,t,n){var i=e.labels,r=mn,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},Qt=function(e,t,n){var i=e.vars,r=i[t],o=Je,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&di.length&&$s(),s&&(Je=s),u=l?r.apply(c,l):r.call(c),Je=o,u},kr=function(e){return fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tt),e.progress()<1&&Qt(e,"onInterrupt"),e},fr,td=[],nd=function(e){if(e)if(e=!e.name&&e.default||e,Zo()||e.headless){var t=e.name,n=st(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Zr,render:al,add:nl,kill:D0,modifier:L0,rawVars:0},o={targetTest:0,get:0,getSetter:sl,aliases:{},register:0};if(Cr(),e!==i){if(Kt[t])return;an(i,an(Ks(e,r),o)),wr(i.prototype,wr(r,Ks(e,o))),Kt[i.prop=t]=i,e.targetTest&&(Vs.push(i),Jo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Nu(t,i),e.register&&e.register(qt,i,Wt)}else td.push(e)},Xe=255,Vr={aqua:[0,Xe,Xe],lime:[0,Xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xe],navy:[0,0,128],white:[Xe,Xe,Xe],olive:[128,128,0],yellow:[Xe,Xe,0],orange:[Xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xe,0,0],pink:[Xe,192,203],cyan:[0,Xe,Xe],transparent:[Xe,Xe,Xe,0]},Qa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Xe+.5|0},id=function(e,t,n){var i=e?Yn(e)?[e>>16,e>>8&Xe,e&Xe]:0:Vr.black,r,o,s,l,c,u,d,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vr[e])i=Vr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Xe,i&Xe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Xe,e&Xe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Uc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Qa(l+1/3,r,o),i[1]=Qa(l,r,o),i[2]=Qa(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Fu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Uc)||Vr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Xe,o=i[1]/Xe,s=i[2]/Xe,d=Math.max(r,o,s),h=Math.min(r,o,s),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===r?(o-s)/m+(o<s?6:0):d===o?(s-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rd=function(e){var t=[],n=[],i=-1;return e.split(hi).forEach(function(r){var o=r.match(hr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},qc=function(e,t,n){var i="",r=(e+i).match(hi),o=t?"hsla(":"rgba(",s=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=id(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=rd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hi,"1").split(hr),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(hi),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},hi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vr)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),m0=/hsl[a]?\(/,sd=function(e){var t=e.join(" "),n;if(hi.lastIndex=0,hi.test(t))return n=m0.test(t),e[1]=qc(e[1],n),e[0]=qc(e[0],n,rd(e[1])),!0},Kr,Jt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,c,u,d,h,m,g=function f(p){var _=a()-i,y=p===!0,b,S,v,P;if((_>e||_<0)&&(n+=_-t),i+=_,v=i-n,b=v-o,(b>0||y)&&(P=++d.frame,h=v-d.time*1e3,d.time=v=v/1e3,o+=b+(b>=r?4:r-b),S=1),y||(l=c(f)),S)for(m=0;m<s.length;m++)s[m](v,h,P,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ou&&(!So&&Zo()&&(Cn=So=window,$o=Cn.document||{},sn.gsap=qt,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(qt.version),Bu(Zs||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),td.forEach(nd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Kr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Kr=0,c=Zr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,_,y){var b=_?function(S,v,P,C){p(S,v,P,C),d.remove(b)}:p;return d.remove(p),s[y?"unshift":"push"](b),Cr(),b},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},d}(),Cr=function(){return!Kr&&Jt.wake()},Be={},g0=/^[\d.\-M][\d.\-,\s]/,_0=/["']/g,v0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,c;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(_0,"").trim():+c,i=l.substr(s+1).trim();return t},x0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},y0=function(e){var t=(e+"").split("("),n=Be[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[v0(t[1])]:x0(e).split(",").map(Gu)):Be._CE&&g0.test(e)?Be._CE("",e):n},b0=function(e){return function(t){return 1-e(1-t)}},Bi=function(e,t){return e&&(st(e)?e:Be[e]||y0(e))||t},Hi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Gt(e,function(s){Be[s]=sn[s]=r,Be[o=s.toLowerCase()]=n;for(var l in r)Be[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Be[s+"."+l]=r[l]}),r},ad=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},eo=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/bo*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*q_((u-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:ad(s);return r=bo/r,l.config=function(c,u){return a(e,c,u)},l},to=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:ad(n);return i.config=function(r){return a(e,r)},i};Gt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Hi(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;Hi("Elastic",eo("in"),eo("out"),eo());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};Hi("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Hi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Hi("Circ",function(a){return-(Ru(1-a*a)-1)});Hi("Sine",function(a){return a===1?1:-H_(a*G_)+1});Hi("Back",to("in"),to("out"),to());Be.SteppedEase=Be.steps=sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Ye;return function(s){return((i*ls(0,o,s)|0)+r)*n}}};Yr.ease=Be["quad.out"];Gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Qo+=a+","+a+"Params,"});var od=function(e,t){this.id=W_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ku,this.set=t?t.getSetter:sl},Jr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Er(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),Kr||Jt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Cr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ua(this,n),!r._dp||r.parent||qu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Tr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(ls(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ca(this),t0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=tt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Dn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=K_);var i=Tt;return Tt=n,tl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cn(this,n),Vt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vt(i)),this._dur||(this._zTime=-Ye),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ye)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var s=st(n)?n:Wu,l=function(){var u=i.then;i.then=null,r&&r(),st(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),o(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){kr(this)},a}();an(Jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Nt=function(a){Du(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Vt(n.sortChildren),nt&&Dn(n.parent||nt,Vn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xu(Vn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Wr(0,arguments,this),this},t.from=function(i,r,o){return Wr(1,arguments,this),this},t.fromTo=function(i,r,o,s){return Wr(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Gr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ft(i,r,cn(this,o),1),this},t.call=function(i,r,o){return Dn(this,ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,c,u){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ft(i,o,cn(this,l)),this},t.staggerFrom=function(i,r,o,s,l,c,u){return o.runBackwards=1,Gr(o).immediateRender=Vt(o.immediateRender),this.staggerTo(i,r,o,s,l,c,u)},t.staggerFromTo=function(i,r,o,s,l,c,u,d){return s.startAt=o,Gr(s).immediateRender=Vt(s.immediateRender),this.staggerTo(i,r,s,l,c,u,d)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:tt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,f,p,_,y,b,S,v,P,C;if(this!==nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,S=this._start,b=this._ts,_=!b,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(h=tt(u%p),u===l?(f=this._repeat,h=c):(v=tt(u/p),f=~~v,f&&f===v&&(h=c,f--),h>c&&(h=c)),v=Tr(this._tTime,p),!s&&this._tTime&&v!==f&&this._tTime-v*p-this._dur<=0&&(v=f),P&&f&1&&(h=c-h,C=1),f!==v&&!this._lock){var x=P&&v&1,w=x===(P&&f&1);if(f<v&&(x=!x),s=x?0:u%c?c:u,this._lock=1,this.render(s||(C?0:tt(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qt(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=f),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=s0(this,tt(s),tt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&u&&c&&!r&&!v&&(Qt(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,o),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Ye);break}}m=g}else{m=this._last;for(var D=i<0?i:h;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,o||Tt&&tl(m)),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=D?-Ye:Ye);break}}m=g}}if(y&&!r&&(this.pause(),y.render(h>=s?0:-Ye)._zTime=h>=s?1:-1,this._ts))return this._start=S,ca(this),this.render(i,r,o);this._onUpdate&&!r&&Qt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Qt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Yn(r)||(r=cn(this,r,i)),!(i instanceof Jr)){if(At(i))return i.forEach(function(s){return o.add(s,r)}),this;if(Mt(i))return this.addLabel(i,r);if(st(i))i=ft.delayedCall(0,i);else return this}return this!==i?Dn(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-mn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof ft?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Mt(i)?this.removeLabel(i):st(i)?this.killTweensOf(i):(i.parent===this&&la(this,i),i===this._recent&&(this._recent=this._last),Oi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tt(Jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=cn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=ft.delayedCall(0,r||Zr,o);return s.data="isPause",this._hasPause=1,Dn(this,s,cn(this,i))},t.removePause=function(i){var r=this._first;for(i=cn(this,i);r;)r._start===i&&r.data==="isPause"&&fi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)ai!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=gn(i),l=this._first,c=Yn(r),u;l;)l instanceof ft?J_(l._targets,s)&&(c?(!ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(s,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=cn(o,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=ft.to(o,an({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Er(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,an({startAt:{time:cn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Hc(this,cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Hc(this,cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,c;for(i=tt(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Oi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Oi(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=mn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Dn(o,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=tt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Er(o,o===nt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(nt._ts&&(Vu(nt,Js(i,nt)),Uu=Jt.frame),Jt.frame>=kc){kc+=rn.autoSleep||120;var r=nt._first;if((!r||!r._ts)&&rn.autoSleep&&Jt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jt.sleep()}}},e}(Jr);an(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var S0=function(e,t,n,i,r,o,s){var l=new Wt(this._pt,e,t,0,1,fd,null,r),c=0,u=0,d,h,m,g,f,p,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=$r(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(Ka)||[];d=Ka.exec(i);)g=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?mr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ka.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(zu.test(i)||_)&&(l.e=0),this._pt=l,l},nl=function(e,t,n,i,r,o,s,l,c,u){st(i)&&(i=i(r||0,e,o));var d=e[t],h=n!=="get"?n:st(d)?c?e[t.indexOf("set")||!st(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=st(d)?c?C0:dd:rl,g;if(Mt(i)&&(~i.indexOf("random(")&&(i=$r(i)),i.charAt(1)==="="&&(g=mr(h,i)+(Ct(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Po)return!isNaN(h*i)&&i!==""?(g=new Wt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?P0:hd,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!d&&!(t in e)&&Ko(t,i),S0.call(this,e,t,h,i,m,l||rn.stringFilter,c))},M0=function(e,t,n,i,r){if(st(e)&&(e=Hr(e,r,t,n,i)),!In(e)||e.style&&e.nodeType||At(e)||Iu(e))return Mt(e)?Hr(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Hr(e[s],r,t,n,i);return o},ld=function(e,t,n,i,r,o){var s,l,c,u;if(Kt[e]&&(s=new Kt[e]).init(r,s.rawVars?t[e]:M0(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Wt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==fr))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},ai,Po,il=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,m=i.autoRevert,g=e._dur,f=e._startAt,p=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:p,b=e._overwrite==="auto"&&!Yo,S=e.timeline,v=i.easeReverse||d,P,C,x,w,D,H,Q,F,R,N,A,z,U;if(S&&(!h||!r)&&(r="none"),e._ease=Bi(r,Yr.ease),e._rEase=v&&(Bi(v)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||h&&!i.stagger){if(F=p[0]?zi(p[0]).harness:0,z=F&&i[F.prop],P=Ks(i,Jo),f&&(f._zTime<0&&f.progress(1),t<0&&u&&s&&!m?f.render(-1,!0):f.revert(u&&g?ks:$_),f._lazy=0),o){if(fi(e._startAt=ft.set(p,an({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!f&&Vt(l),startAt:null,delay:0,onUpdate:c&&function(){return Qt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tt||!s&&!m)&&e._startAt.revert(ks),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!f){if(t&&(s=!1),x=an({overwrite:!1,data:"isFromStart",lazy:s&&!f&&Vt(l),immediateRender:s,stagger:0,parent:_},P),z&&(x[F.prop]=z),fi(e._startAt=ft.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tt?e._startAt.revert(ks):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Vt(l)||l&&!g,C=0;C<p.length;C++){if(D=p[C],Q=D._gsap||el(p)[C]._gsap,e._ptLookup[C]=N={},Mo[Q.id]&&di.length&&$s(),A=y===p?C:y.indexOf(D),F&&(R=new F).init(D,z||P,e,A,y)!==!1&&(e._pt=w=new Wt(e._pt,D,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(K){N[K]=w}),R.priority&&(H=1)),!F||z)for(x in P)Kt[x]&&(R=ld(x,P,e,A,D,y))?R.priority&&(H=1):N[x]=w=nl.call(e,D,x,"get",P[x],A,y,0,i.stringFilter);e._op&&e._op[C]&&e.kill(D,e._op[C]),b&&e._pt&&(ai=e,nt.killTweensOf(D,N,e.globalTime(t)),U=!e.parent,ai=0),e._pt&&l&&(Mo[Q.id]=1)}H&&pd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!U,h&&t<=0&&S.render(mn,!0,!0)},w0=function(e,t,n,i,r,o,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,m;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Po=1,e.vars[t]="+=0",il(e,s),Po=0,l?jr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=at(n)+Ct(d.e)),d.b&&(d.b=u.s+Ct(d.b))},T0=function(e,t){var n=e[0]?zi(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=wr({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},E0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(At(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Hr=function(e,t,n,i,r){return st(e)?e.call(t,n,i,r):Mt(e)&&~e.indexOf("random(")?$r(e):e},cd=Qo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ud={};Gt(cd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return ud[a]=1});var ft=function(a){Du(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:Gr(i))||this;var l=s.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=i.parent||nt,y=(At(n)||Iu(n)?Yn(n[0]):"length"in i)?[n]:gn(n),b,S,v,P,C,x,w,D;if(s._targets=y.length?el(y):jr("GSAP target "+n+" not found. https://gsap.com",!rn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||zs(c)||zs(u)){i=s.vars;var H=i.easeReverse||i.yoyoEase;if(b=s.timeline=new Nt({data:"nested",defaults:f||{},targets:_&&_.data==="nested"?_.vars.targets:y}),b.kill(),b.parent=b._dp=Vn(s),b._start=0,h||zs(c)||zs(u)){if(P=y.length,w=h&&$u(h),In(h))for(C in h)~cd.indexOf(C)&&(D||(D={}),D[C]=h[C]);for(S=0;S<P;S++)v=Ks(i,ud),v.stagger=0,H&&(v.easeReverse=H),D&&wr(v,D),x=y[S],v.duration=+Hr(c,Vn(s),S,x,y),v.delay=(+Hr(u,Vn(s),S,x,y)||0)-s._delay,!h&&P===1&&v.delay&&(s._delay=u=v.delay,s._start+=u,v.delay=0),b.to(x,v,w?w(S,x,y):0),b._ease=Be.none;b.duration()?c=u=0:s.timeline=0}else if(g){Gr(an(b.vars.defaults,{ease:"none"})),b._ease=Bi(g.ease||i.ease||"none");var Q=0,F,R,N;if(At(g))g.forEach(function(A){return b.to(y,A,">")}),b.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||E0(C,g[C],v,g.easeEach);for(C in v)for(F=v[C].sort(function(A,z){return A.t-z.t}),Q=0,S=0;S<F.length;S++)R=F[S],N={ease:R.e,duration:(R.t-(S?F[S-1].t:0))/100*c},N[C]=R.v,b.to(y,N,Q),Q+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||s.duration(c=b.duration())}else s.timeline=0;return m===!0&&!Yo&&(ai=Vn(s),nt.killTweensOf(y),ai=0),Dn(_,Vn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!g&&s._start===tt(_._time)&&Vt(d)&&n0(Vn(s))&&_.data!=="nested")&&(s._tTime=-Ye,s.render(Math.max(0,-u)||0)),p&&Xu(Vn(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Ye&&!u?l:i<Ye?0:i,h,m,g,f,p,_,y,b;if(!c)r0(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,b=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,o);if(h=tt(d%f),d===l?(g=this._repeat,h=c):(p=tt(d/f),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),_=this._yoyo&&g&1,_&&(h=c-h),p=Tr(this._tTime,f),h===s&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==f&&this._initted&&(this._lock=o=1,this.render(tt(f*g),!0).invalidate()._lock=0)}if(!this._initted){if(Yu(this,u?i:h,o,r,d))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var S=h<s;if(S!==this._inv){var v=S?s:c-s;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(S?-1:1)/v:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&d&&!r&&!p&&(Qt(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;b&&b.render(i<0?i:b._dur*b._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&wo(this,i,r,o),Qt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Qt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&wo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&fi(this,1),!r&&!(u&&!s)&&(d||s||_)&&(Qt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s,l){Kr||Jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||il(this,c),u=this._ease(c/this._dur),w0(this,i,r,o,s,u,c,l)?this.resetTo(i,r,o,s,1):(ua(this,0),this.parent||Hu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?kr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ai&&ai.vars.overwrite!==!0)._first||kr(this),this.parent&&o!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?gn(i):s,c=this._ptLookup,u=this._pt,d,h,m,g,f,p,_;if((!r||r==="all")&&e0(s,l))return r==="all"&&(this._pt=0),kr(this);for(d=this._op=this._op||[],r!=="all"&&(Mt(r)&&(f={},Gt(r,function(y){return f[y]=1}),r=f),r=T0(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=c[_],r==="all"?(d[_]=r,g=h,m={}):(m=d[_]=d[_]||{},g=r);for(f in g)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&la(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&kr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Wr(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return Wr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return nt.killTweensOf(i,r,o)},e}(Jr);an(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gt("staggerTo,staggerFrom,staggerFromTo",function(a){ft[a]=function(){var e=new Nt,t=Eo.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var rl=function(e,t,n){return e[t]=n},dd=function(e,t,n){return e[t](n)},C0=function(e,t,n,i){return e[t](i.fp,n)},A0=function(e,t,n){return e.setAttribute(t,n)},sl=function(e,t){return st(e[t])?dd:jo(e[t])&&e.setAttribute?A0:rl},hd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},P0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},al=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},L0=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},D0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?la(this,t,"_pt"):t.dep||(n=1),t=i;return!n},R0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pd=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Wt=function(){function a(t,n,i,r,o,s,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||hd,this.d=l||this,this.set=c||rl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=R0,this.m=n,this.mt=r,this.tween=i},a}();Gt(Qo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Jo[a]=1});sn.TweenMax=sn.TweenLite=ft;sn.TimelineLite=sn.TimelineMax=Nt;nt=new Nt({sortChildren:!1,defaults:Yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=sd;var Ni=[],Gs={},I0=[],Xc=0,F0=0,no=function(e){return(Gs[e]||I0).map(function(t){return t()})},Lo=function(){var e=Date.now(),t=[];e-Xc>2&&(no("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,c;for(s in i)o=Cn.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(n.revert(),l&&t.push(n))}),no("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xc=e,no("matchMedia"))},md=function(){function a(t,n){this.selector=n&&Co(n),this.data=[],this._r=[],this.isReverted=!1,this.id=F0++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){st(n)&&(r=i,i=n,n=st);var o=this,s=function(){var c=Je,u=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Co(r)),Je=o,d=i.apply(o,arguments),st(d)&&o._r.push(d),Je=c,o.selector=u,o.isReverted=!1,d};return o.last=s,n===st?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Nt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ft)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=Ni.length;o--;)Ni[o].id===this.id&&Ni.splice(o,1)},e.revert=function(n){this.kill(n||{})},a}(),z0=function(){function a(t){this.contexts=[],this.scope=t,Je&&Je.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){In(n)||(n={matches:n});var o=new md(0,r||this.scope),s=o.conditions={},l,c,u;Je&&!o.selector&&(o.selector=Je.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Cn.matchMedia(n[c]),l&&(Ni.indexOf(o)<0&&Ni.push(o),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lo):l.addEventListener("change",Lo)));return u&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Qs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return nd(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Mt(e)&&(e=gn(e)[0]);var r=zi(e||{}).get,o=n?Wu:Gu;return n==="native"&&(n=""),e&&(t?o((Kt[t]&&Kt[t].get||r)(e,t,n,i)):function(s,l,c){return o((Kt[s]&&Kt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var i=e.map(function(u){return qt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var o=Kt[t],s=zi(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;fr._pt=0,d.init(e,n?u+n:u,fr,0,[e]),d.render(1,d),fr._pt&&al(1,fr)}:s.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=qt.to(e,an((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Bi(e.ease,Yr.ease)),Vc(Yr,e||{})},config:function(e){return Vc(rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Kt[s]&&!sn[s]&&jr(t+" effect requires "+s+" plugin.")}),Ja[t]=function(s,l,c){return n(gn(s),an(l||{},r),c)},o&&(Nt.prototype[t]=function(s,l,c){return this.add(Ja[t](s,In(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Be[e]=Bi(t)},parseEase:function(e,t){return arguments.length?Bi(e,t):Be},getById:function(e){return nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,r;for(n.smoothChildTiming=Vt(e.smoothChildTiming),nt.remove(n),n._dp=0,n._time=n._tTime=nt._time,i=nt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ft&&i.vars.onComplete===i._targets[0]))&&Dn(n,i,i._start-i._delay),i=r;return Dn(nt,n,0),n},context:function(e,t){return e?new md(e,t):Je},matchMedia:function(e){return new z0(e)},matchMediaRefresh:function(){return Ni.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Lo()},addEventListener:function(e,t){var n=Gs[e]||(Gs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:h0,wrapYoyo:f0,distribute:$u,random:Ju,snap:Ku,normalize:d0,getUnit:Ct,clamp:o0,splitColor:id,toArray:gn,selector:Co,mapRange:ed,pipe:c0,unitize:u0,interpolate:p0,shuffle:Zu},install:Bu,effects:Ja,ticker:Jt,updateRoot:Nt.updateRoot,plugins:Kt,globalTimeline:nt,core:{PropTween:Wt,globals:Nu,Tween:ft,Timeline:Nt,Animation:Jr,getCache:zi,_removeLinkedListItem:la,reverting:function(){return Tt},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return Yo=e}}};Gt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Qs[a]=ft[a]});Jt.add(Nt.updateRoot);fr=Qs.to({},{duration:0});var O0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},B0=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=O0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},io=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,c;if(Mt(r)&&(l={},Gt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}B0(s,r)}}}},qt=Qs.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Tt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},io("roundProps",Ao),io("modifiers"),io("snap",Ku))||Qs;ft.version=Nt.version=qt.version="3.15.0";Ou=1;Zo()&&Cr();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yc,oi,gr,ol,Di,jc,ll,N0=function(){return typeof window<"u"},jn={},Ei=180/Math.PI,_r=Math.PI/180,or=Math.atan2,Zc=1e8,cl=/([A-Z])/g,U0=/(left|right|width|margin|padding|x)/i,k0=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Do=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},G0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},W0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},H0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_d=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},q0=function(e,t,n){return e.style[t]=n},X0=function(e,t,n){return e.style.setProperty(t,n)},Y0=function(e,t,n){return e._gsap[t]=n},j0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Z0=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},$0=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},it="transform",Ht=it+"Origin",K0=function a(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in jn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Gn(i,s)}):this.tfm[e]=o.x?o[e]:Gn(i,e),e===Ht&&(this.tfm.zOrigin=o.zOrigin);else return Rn.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(it)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ht,t,"")),e=it}(r||t)&&this.props.push(e,t,r[e])},vd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},J0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(cl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ll(),(!r||!r.isStart)&&!n[it]&&(vd(n),i.zOrigin&&n[Ht]&&(n[Ht]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xd=function(e,t){var n={target:e,props:[],revert:J0,save:K0};return e._gsap||qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},yd,Ro=function(e,t){var n=oi.createElementNS?oi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):oi.createElement(e);return n&&n.style?n:oi.createElement(e)},en=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Ar(t)||t,1)||""},$c="O,Moz,ms,Ms,Webkit".split(","),Ar=function(e,t,n){var i=t||Di,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($c[o]+e in r););return o<0?null:(o===3?"ms":o>=0?$c[o]:"")+e},Io=function(){N0()&&window.document&&(Yc=window,oi=Yc.document,gr=oi.documentElement,Di=Ro("div")||{style:{}},Ro("div"),it=Ar(it),Ht=it+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yd=!!Ar("perspective"),ll=qt.core.reverting,ol=1)},Kc=function(e){var t=e.ownerSVGElement,n=Ro("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),gr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),gr.removeChild(n),r},Jc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},bd=function(e){var t,n;try{t=e.getBBox()}catch{t=Kc(e),n=1}return t&&(t.width||t.height)||n||(t=Kc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Jc(e,["x","cx","x1"])||0,y:+Jc(e,["y","cy","y1"])||0,width:0,height:0}:t},Sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bd(e))},pi=function(e,t){if(t){var n=e.style,i;t in jn&&t!==Ht&&(t=it),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cl,"-$1").toLowerCase())):n.removeAttribute(t)}},li=function(e,t,n,i,r,o){var s=new Wt(e._pt,t,n,0,1,o?_d:gd);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Qc={deg:1,rad:1,turn:1},Q0={grid:1,flex:1},mi=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=Di.style,l=U0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,f,p,_;if(i===o||!r||Qc[i]||Qc[o])return r;if(o!=="px"&&!h&&(r=a(e,t,n,"px")),_=e.getCTM&&Sd(e),(m||o==="%")&&(jn[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],at(m?r/g*d:r/100*g);if(s[l?"width":"height"]=d+(h?o:i),f=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===oi||!f.appendChild)&&(f=oi.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Jt.time&&!p.uncache)return at(r/p.width*d);if(m&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+i,g=e[u],y?e.style[t]=y:pi(e,t)}else(m||o==="%")&&!Q0[en(f,"display")]&&(s.position=en(e,"position")),f===e&&(s.position="static"),f.appendChild(Di),g=Di[u],f.removeChild(Di),s.position="absolute";return l&&m&&(p=zi(f),p.time=Jt.time,p.width=f[u]),at(h?g*r/d:g&&r?d/g*r:0)},Gn=function(e,t,n,i){var r;return ol||Io(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),jn[t]&&t!=="transform"?(r=es(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ta(en(e,Ht))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ea[t]&&ea[t](e,t,n)||en(e,t)||ku(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?mi(e,t,r,n)+n:r},ev=function(e,t,n,i){if(!n||n==="none"){var r=Ar(t,e,1),o=r&&en(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=en(e,"borderTopColor"))}var s=new Wt(this._pt,e.style,t,0,1,fd),l=0,c=0,u,d,h,m,g,f,p,_,y,b,S,v;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=en(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(f=e.style[t],e.style[t]=i,i=en(e,t)||i,f?e.style[t]=f:pi(e,t)),u=[n,i],sd(u),n=u[0],i=u[1],h=n.match(hr)||[],v=i.match(hr)||[],v.length){for(;d=hr.exec(i);)p=d[0],y=i.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(f=h[c++]||"")&&(m=parseFloat(f)||0,S=f.substr((m+"").length),p.charAt(1)==="="&&(p=mr(m,p)+S),_=parseFloat(p),b=p.substr((_+"").length),l=hr.lastIndex-b.length,b||(b=b||rn.units[t]||S,l===i.length&&(i+=b,s.e+=b)),S!==b&&(m=mi(e,t,f,b)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?_d:gd;return zu.test(i)&&(s.e=0),this._pt=s,s},eu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=eu[n]||n,t[1]=eu[i]||i,t.join(" ")},nv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],jn[s]&&(l=1,s=s==="transformOrigin"?Ht:it),pi(n,s);l&&(pi(n,it),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",es(n,1),o.uncache=1,vd(i)))}},ea={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Wt(e._pt,t,n,0,0,nv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Qr=[1,0,0,1,0,0],Md={},wd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},tu=function(e){var t=en(e,it);return wd(t)?Qr:t.substr(7).match(Fu).map(at)},ul=function(e,t){var n=e._gsap||zi(e),i=e.style,r=tu(e),o,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Qr:r):(r===Qr&&!e.offsetParent&&e!==gr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,gr.appendChild(e)),r=tu(e),l?i.display=l:pi(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):gr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Fo=function(e,t,n,i,r,o){var s=e._gsap,l=r||ul(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,d=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],y=l[5],b=t.split(" "),S=parseFloat(b[0])||0,v=parseFloat(b[1])||0,P,C,x,w;n?l!==Qr&&(C=m*p-g*f)&&(x=S*(p/C)+v*(-f/C)+(f*y-p*_)/C,w=S*(-g/C)+v*(m/C)-(m*y-g*_)/C,S=x,v=w):(P=bd(e),S=P.x+(~b[0].indexOf("%")?S/100*P.width:S),v=P.y+(~(b[1]||b[0]).indexOf("%")?v/100*P.height:v)),i||i!==!1&&s.smooth?(_=S-c,y=v-u,s.xOffset=d+(_*m+y*f)-_,s.yOffset=h+(_*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Ht]="0px 0px",o&&(li(o,s,"xOrigin",c,S),li(o,s,"yOrigin",u,v),li(o,s,"xOffset",d,s.xOffset),li(o,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",S+" "+v)},es=function(e,t){var n=e._gsap||new od(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=en(e,Ht)||"0",u,d,h,m,g,f,p,_,y,b,S,v,P,C,x,w,D,H,Q,F,R,N,A,z,U,K,q,V,W,te,J,re;return u=d=h=f=p=_=y=b=S=0,m=g=1,n.svg=!!(e.getCTM&&Sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[it]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[it]!=="none"?l[it]:"")),i.scale=i.rotate=i.translate="none"),C=ul(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Fo(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,C)),v=n.xOrigin||0,P=n.yOrigin||0,C!==Qr&&(H=C[0],Q=C[1],F=C[2],R=C[3],u=N=C[4],d=A=C[5],C.length===6?(m=Math.sqrt(H*H+Q*Q),g=Math.sqrt(R*R+F*F),f=H||Q?or(Q,H)*Ei:0,y=F||R?or(F,R)*Ei+f:0,y&&(g*=Math.abs(Math.cos(y*_r))),n.svg&&(u-=v-(v*H+P*F),d-=P-(v*Q+P*R))):(re=C[6],te=C[7],q=C[8],V=C[9],W=C[10],J=C[11],u=C[12],d=C[13],h=C[14],x=or(re,W),p=x*Ei,x&&(w=Math.cos(-x),D=Math.sin(-x),z=N*w+q*D,U=A*w+V*D,K=re*w+W*D,q=N*-D+q*w,V=A*-D+V*w,W=re*-D+W*w,J=te*-D+J*w,N=z,A=U,re=K),x=or(-F,W),_=x*Ei,x&&(w=Math.cos(-x),D=Math.sin(-x),z=H*w-q*D,U=Q*w-V*D,K=F*w-W*D,J=R*D+J*w,H=z,Q=U,F=K),x=or(Q,H),f=x*Ei,x&&(w=Math.cos(x),D=Math.sin(x),z=H*w+Q*D,U=N*w+A*D,Q=Q*w-H*D,A=A*w-N*D,H=z,N=U),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=at(Math.sqrt(H*H+Q*Q+F*F)),g=at(Math.sqrt(A*A+re*re)),x=or(N,A),y=Math.abs(x)>2e-4?x*Ei:0,S=J?1/(J<0?-J:J):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!wd(en(e,it)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=at(m),n.scaleY=at(g),n.rotation=at(f)+s,n.rotationX=at(p)+s,n.rotationY=at(_)+s,n.skewX=y+s,n.skewY=b+s,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ht]=ta(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?rv:yd?Td:iv,n.uncache=0,n},ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},ro=function(e,t,n){var i=Ct(t);return at(parseFloat(t)+parseFloat(mi(e,"x",n+"px",i)))+i},iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Td(e,t)},Mi="0deg",Br="0px",wi=") ",Td=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,b=n.zOrigin,S="",v=_==="auto"&&e&&e!==1||_===!0;if(b&&(d!==Mi||u!==Mi)){var P=parseFloat(u)*_r,C=Math.sin(P),x=Math.cos(P),w;P=parseFloat(d)*_r,w=Math.cos(P),o=ro(y,o,C*w*-b),s=ro(y,s,-Math.sin(P)*-b),l=ro(y,l,x*w*-b+b)}p!==Br&&(S+="perspective("+p+wi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(v||o!==Br||s!==Br||l!==Br)&&(S+=l!==Br||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+wi),c!==Mi&&(S+="rotate("+c+wi),u!==Mi&&(S+="rotateY("+u+wi),d!==Mi&&(S+="rotateX("+d+wi),(h!==Mi||m!==Mi)&&(S+="skew("+h+", "+m+wi),(g!==1||f!==1)&&(S+="scale("+g+", "+f+wi),y.style[it]=S||"translate(0, 0)"},rv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,b=parseFloat(o),S=parseFloat(s),v,P,C,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_r,c*=_r,v=Math.cos(l)*d,P=Math.sin(l)*d,C=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=_r,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,P*=w)),v=at(v),P=at(P),C=at(C),x=at(x)):(v=d,x=h,P=C=0),(b&&!~(o+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(b=mi(m,"x",o,"px"),S=mi(m,"y",s,"px")),(g||f||p||_)&&(b=at(b+g-(g*v+f*C)+p),S=at(S+f-(g*P+f*x)+_)),(i||r)&&(w=m.getBBox(),b=at(b+i/100*w.width),S=at(S+r/100*w.height)),w="matrix("+v+","+P+","+C+","+x+","+b+","+S+")",m.setAttribute("transform",w),y&&(m.style[it]=w)},sv=function(e,t,n,i,r){var o=360,s=Mt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?Ei:1),c=l-i,u=i+c+"deg",d,h;return s&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Zc)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Zc)%o-~~(c/o)*o)),e._pt=h=new Wt(e._pt,t,n,i,c,V0),h.e=u,h.u="deg",e._props.push(n),h},nu=function(e,t){for(var n in t)e[n]=t[n];return e},av=function(e,t,n){var i=nu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,c,u,d,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[it]=t,s=es(n,1),pi(n,it),n.setAttribute("transform",c)):(c=getComputedStyle(n)[it],o[it]=t,s=es(n,1),o[it]=c);for(l in jn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=Ct(c),g=Ct(u),d=m!==g?mi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Wt(e._pt,s,l,d,h-d,Do),e._pt.u=g||0,e._props.push(l));nu(s,i)};Gt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});ea[e>1?"border"+a:a]=function(s,l,c,u,d){var h,m;if(arguments.length<4)return h=o.map(function(g){return Gn(s,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},o.forEach(function(g,f){return m[g]=h[f]=h[f]||h[(f-1)/2|0]}),s.init(l,m,d)}});var Ed={name:"css",register:Io,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,c,u,d,h,m,g,f,p,_,y,b,S,v,P,C,x,w;ol||Io(),this.styles=this.styles||xd(e),x=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(Kt[f]&&ld(f,t,n,i,e,r)))){if(m=typeof u,g=ea[f],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=$r(u)),g)g(this,e,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",hi.lastIndex=0,hi.test(c)||(p=Ct(c),_=Ct(u),_?p!==_&&(c=mi(e,f,c,_)+_):p&&(u+=p)),this.add(s,"setProperty",c,u,i,r,0,0,f),o.push(f),x.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],Mt(c)&&~c.indexOf("random(")&&(c=$r(c)),Ct(c+"")||c==="auto"||(c+=rn.units[f]||Ct(Gn(e,f))||""),(c+"").charAt(1)==="="&&(c=Gn(e,f))):c=Gn(e,f),h=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),f in Rn&&(f==="autoAlpha"&&(h===1&&Gn(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,s.visibility),li(this,s,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=Rn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),b=f in jn,b){if(this.styles.save(f),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=en(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=en(e,"perspective"),D?e.style.perspective=D:pi(e,"perspective")}d=parseFloat(u)}if(S||(v=e._gsap,v.renderTransform&&!t.parseTransform||es(e,t.parseTransform),P=t.smoothOrigin!==!1&&v.smooth,S=this._pt=new Wt(this._pt,s,it,0,1,v.renderTransform,v,0,-1),S.dep=1),f==="scale")this._pt=new Wt(this._pt,v,"scaleY",v.scaleY,(y?mr(v.scaleY,y+d):d)-v.scaleY||0,Do),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(Ht,0,s[Ht]),u=tv(u),v.svg?Fo(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&li(this,v,"zOrigin",v.zOrigin,_),li(this,s,f,ta(c),ta(u)));continue}else if(f==="svgOrigin"){Fo(e,u,1,P,0,this);continue}else if(f in Md){sv(this,v,f,h,y?mr(h,y+u):u);continue}else if(f==="smoothOrigin"){li(this,v,"smooth",v.smooth,u);continue}else if(f==="force3D"){v[f]=u;continue}else if(f==="transform"){av(this,u,e);continue}}else f in s||(f=Ar(f)||f);if(b||(d||d===0)&&(h||h===0)&&!k0.test(u)&&f in s)p=(c+"").substr((h+"").length),d||(d=0),_=Ct(u)||(f in rn.units?rn.units[f]:p),p!==_&&(h=mi(e,f,c,_)),this._pt=new Wt(this._pt,b?v:s,f,h,(y?mr(h,y+d):d)-h,!b&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?H0:Do),this._pt.u=_||0,b&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=W0):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=G0);else if(f in s)ev.call(this,e,f,c,y?y+u:u);else if(f in e)this.add(e,f,c||e[f],y?y+u:u,i,r);else if(f!=="parseTransform"){Ko(f,u);continue}b||(f in s?x.push(f,0,s[f]):typeof e[f]=="function"?x.push(f,2,e[f]()):x.push(f,1,c||e[f])),o.push(f)}}C&&pd(this)},render:function(e,t){if(t.tween._time||!ll())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gn,aliases:Rn,getSetter:function(e,t,n){var i=Rn[t];return i&&i.indexOf(",")<0&&(t=i),t in jn&&t!==Ht&&(e._gsap.x||Gn(e,"x"))?n&&jc===n?t==="scale"?j0:Y0:(jc=n||{})&&(t==="scale"?Z0:$0):e.style&&!jo(e.style[t])?q0:~t.indexOf("-")?X0:sl(e,t)},core:{_removeProperty:pi,_getMatrix:ul}};qt.utils.checkPrefix=Ar;qt.core.getStyleSaver=xd;(function(a,e,t,n){var i=Gt(a+","+e+","+t,function(r){jn[r]=1});Gt(e,function(r){rn.units[r]="deg",Md[r]=1}),Rn[i[13]]=a+","+e,Gt(n,function(r){var o=r.split(":");Rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){rn.units[a]="px"});qt.registerPlugin(Ed);var fn=qt.registerPlugin(Ed)||qt;fn.core.Tween;let tn,xe,pt,ot,pn,Ce,zo=[],ii=null,Pn=null,St=null,zt={width:0,height:0,aspectRatio:1,name:"default_image.jpg"},un={positions:[],colors:[],pixelVals:[],depthGradients:[],grid:[]},iu=[],Cd=new O,na=new O,Xn=!1,dl=!1,Ws=0,Oo=.5,Wn=null,Os=[],ia=!1,Ln=[];window.customTimelinePlaying=!1;window.customTimelineTl=null;let so=!1,Le=null,Hs=!1,Bs=new z_,lr=new Se,ov=new ni(new O(0,0,1),0),Bo=new O(0,0,0);const ne={uPointSize:{value:1.5},uDepthScale:{value:80},uScatterAmp:{value:0},uScatterFreq:{value:.05},uScatterSpeed:{value:0},uEnableFloating:{value:!0},uOrganicFieldStrength:{value:0},uOrganicFieldSpeed:{value:1},uTime:{value:0},uColorMode:{value:0},uTintColor:{value:new Ae("#00ffcc")},uSizeAttenuation:{value:!0},uAlphaThreshold:{value:0},uModelScale:{value:300},uPointShape:{value:0},uPointOpacity:{value:.6},uEnableShading:{value:!0},uLightDir:{value:new O(.5,.5,.7).normalize()},uExposure:{value:1},uContrast:{value:1.1},uSaturation:{value:1},uEnableSplitToning:{value:!0},uShadowTint:{value:new Ae("#094074")},uHighlightTint:{value:new Ae("#fffaec")},uTintMix:{value:.6},uLinkOpacity:{value:.3},uLinkColorMode:{value:0},uLinkTintColor:{value:new Ae("#ffffff")},linewidth:{value:2},resolution:{value:new Se(window.innerWidth,window.innerHeight)},uLinkGlow:{value:1.5},uAntiAlias:{value:!0},uWindCenter:{value:new O(0,0,0)},uWindRadius:{value:0},uSphereRotationMatrix:{value:new Ut}},lv=`
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
  uniform vec3 uWindCenter;
  uniform float uWindRadius;
  uniform mat3 uSphereRotationMatrix;

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

  mat3 transposeMat3(mat3 m) {
    return mat3(
      m[0][0], m[1][0], m[2][0],
      m[0][1], m[1][1], m[2][1],
      m[0][2], m[1][2], m[2][2]
    );
  }

  vec3 applyVortexWind(vec3 basePos, vec3 windCenter, float windRadius, float scatterAmp, float scatterSpeed, float time, mat3 sphereRotMat, bool enableFloating) {
    if (!enableFloating || scatterAmp <= 0.0 || windRadius <= 0.0) {
      return basePos;
    }
    vec3 toCenter = basePos - windCenter;
    float dist = length(toCenter.xy);
    if (dist >= windRadius) {
      return basePos;
    }
    
    float normalizedDist = 1.0 - (dist / windRadius);
    float falloff = smoothstep(0.0, 1.0, normalizedDist);
    
    // Transform to local space of the rotating sphere
    vec3 localPos = sphereRotMat * toCenter;
    
    // Vortex twisting (rotates around local Z-axis)
    float twistAngle = falloff * scatterAmp * time * scatterSpeed * 0.1;
    float c = cos(twistAngle);
    float s = sin(twistAngle);
    vec3 twistedLocal = localPos;
    twistedLocal.x = localPos.x * c - localPos.y * s;
    twistedLocal.y = localPos.x * s + localPos.y * c;
    
    // Suction towards center and lift along Z
    vec3 pullDir = -normalize(localPos);
    float pullStrength = falloff * scatterAmp * 2.0;
    float liftStrength = falloff * scatterAmp * 4.0;
    vec3 forceVecLocal = vec3(0.0, 0.0, liftStrength) + pullDir * pullStrength;
    twistedLocal += forceVecLocal;
    
    // Fluid Turbulence (multi-octave curl-like field)
    vec3 turbLocal = vec3(0.0);
    float amp = 1.0;
    float freq = 2.0 / windRadius;
    for (int i = 0; i < 3; i++) {
      vec3 coord = twistedLocal * freq + vec3(0.0, 0.0, time * scatterSpeed * 1.5);
      vec3 sVal = sin(coord.yzx * 2.0);
      vec3 cVal = cos(coord.zxy * 1.5);
      turbLocal += (sVal + cVal) * amp;
      amp *= 0.5;
      freq *= 2.0;
    }
    
    twistedLocal += turbLocal * falloff * scatterAmp * 3.0;
    
    // Transform back to world space
    mat3 invRotation = transposeMat3(sphereRotMat);
    vec3 displacedOffset = invRotation * twistedLocal;
    
    return windCenter + mix(toCenter, displacedOffset, falloff);
  }

  void main() {
    vColor = originalColor;

    // Seed procedural random hash based on position
    vRand = hash(position + vec3(17.3, 31.4, 9.7));

    // Apply scale to X and Y coordinates and displace Z along depth modulator
    vec3 basePos = vec3(position.x * uModelScale, position.y * uModelScale, position.z);
    basePos.z += pixelVal * uDepthScale;

    // Apply Rotating Twisting Vortex Wind Effect
    vec3 displaced = applyVortexWind(basePos, uWindCenter, uWindRadius, uScatterAmp, uScatterSpeed, uTime, uSphereRotationMatrix, uEnableFloating);

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
`,cv=`
  uniform int uColorMode;
  uniform vec3 uTintColor;
  uniform float uAlphaThreshold;
  uniform float uDepthScale;
  uniform int uPointShape;
  uniform float uPointOpacity;
  uniform bool uAntiAlias;

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
      if (uAntiAlias) {
        float dist = sqrt(distSq);
        if (dist > 0.5) {
          discard;
        }
        alpha *= smoothstep(0.5, 0.45, dist);
      } else {
        if (distSq > 0.25) {
          discard;
        }
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
`,uv=`
  uniform float uDepthScale;
  uniform float uScatterAmp;
  uniform float uScatterFreq;
  uniform float uScatterSpeed;
  uniform float uTime;
  uniform float uModelScale;
  uniform float uOrganicFieldStrength;
  uniform float uOrganicFieldSpeed;
  uniform bool uEnableFloating;
  uniform vec3 uWindCenter;
  uniform float uWindRadius;
  uniform mat3 uSphereRotationMatrix;

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

  mat3 transposeMat3(mat3 m) {
    return mat3(
      m[0][0], m[1][0], m[2][0],
      m[0][1], m[1][1], m[2][1],
      m[0][2], m[1][2], m[2][2]
    );
  }

  vec3 applyVortexWind(vec3 basePos, vec3 windCenter, float windRadius, float scatterAmp, float scatterSpeed, float time, mat3 sphereRotMat, bool enableFloating) {
    if (!enableFloating || scatterAmp <= 0.0 || windRadius <= 0.0) {
      return basePos;
    }
    vec3 toCenter = basePos - windCenter;
    float dist = length(toCenter.xy);
    if (dist >= windRadius) {
      return basePos;
    }
    
    float normalizedDist = 1.0 - (dist / windRadius);
    float falloff = smoothstep(0.0, 1.0, normalizedDist);
    
    // Transform to local space of the rotating sphere
    vec3 localPos = sphereRotMat * toCenter;
    
    // Vortex twisting (rotates around local Z-axis)
    float twistAngle = falloff * scatterAmp * time * scatterSpeed * 0.1;
    float c = cos(twistAngle);
    float s = sin(twistAngle);
    vec3 twistedLocal = localPos;
    twistedLocal.x = localPos.x * c - localPos.y * s;
    twistedLocal.y = localPos.x * s + localPos.y * c;
    
    // Suction towards center and lift along Z
    vec3 pullDir = -normalize(localPos);
    float pullStrength = falloff * scatterAmp * 2.0;
    float liftStrength = falloff * scatterAmp * 4.0;
    vec3 forceVecLocal = vec3(0.0, 0.0, liftStrength) + pullDir * pullStrength;
    twistedLocal += forceVecLocal;
    
    // Fluid Turbulence (multi-octave curl-like field)
    vec3 turbLocal = vec3(0.0);
    float amp = 1.0;
    float freq = 2.0 / windRadius;
    for (int i = 0; i < 3; i++) {
      vec3 coord = twistedLocal * freq + vec3(0.0, 0.0, time * scatterSpeed * 1.5);
      vec3 sVal = sin(coord.yzx * 2.0);
      vec3 cVal = cos(coord.zxy * 1.5);
      turbLocal += (sVal + cVal) * amp;
      amp *= 0.5;
      freq *= 2.0;
    }
    
    twistedLocal += turbLocal * falloff * scatterAmp * 3.0;
    
    // Transform back to world space
    mat3 invRotation = transposeMat3(sphereRotMat);
    vec3 displacedOffset = invRotation * twistedLocal;
    
    return windCenter + mix(toCenter, displacedOffset, falloff);
  }

  void main() {
    vColor = (position.y < 0.5) ? instanceColorStart : instanceColorEnd;
    vUv = uv;

    // 1. Calculate displaced endpoint positions on GPU
    vec3 displacedStart = vec3(instanceStart.x * uModelScale, instanceStart.y * uModelScale, instanceStart.z);
    displacedStart.z += pixelValStart * uDepthScale;

    vec3 displacedEnd = vec3(instanceEnd.x * uModelScale, instanceEnd.y * uModelScale, instanceEnd.z);
    displacedEnd.z += pixelValEnd * uDepthScale;

    // 2. Apply Twisting Vortex Wind Effect to start and end
    displacedStart = applyVortexWind(displacedStart, uWindCenter, uWindRadius, uScatterAmp, uScatterSpeed, uTime, uSphereRotationMatrix, uEnableFloating);
    displacedEnd = applyVortexWind(displacedEnd, uWindCenter, uWindRadius, uScatterAmp, uScatterSpeed, uTime, uSphereRotationMatrix, uEnableFloating);

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
`,dv=`
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
`;function hv(){const a=document.getElementById("webgl");tn=new A_,tn.background=new Ae("#030406"),xe=new hn(60,window.innerWidth/window.innerHeight,1,3e3),Ad(),pt=new Au({canvas:a,antialias:!0,preserveDrawingBuffer:!0}),pt.setSize(window.innerWidth,window.innerHeight),pt.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new k_(tn,xe);pn=new Mr(new Se(window.innerWidth,window.innerHeight),1.5,.4,.85),pn.threshold=0,pn.strength=.5,pn.radius=.5,ot=new U_(pt),ot.addPass(e),ot.addPass(pn),Ce=new O_(xe,pt.domElement),Ce.enableDamping=!0,Ce.dampingFactor=.05,Ce.maxDistance=2e3,Ce.minDistance=10,Ce.addEventListener("start",()=>{if(Xn=!1,Ce&&(Ce.enableZoom=!0),window.cinematicTl&&(window.cinematicTl.kill(),window.cinematicTl=null),window.customTimelineTl){window.customTimelineTl.kill(),window.customTimelineTl=null,window.customTimelinePlaying=!1;const i=document.getElementById("btn-play-timeline");i&&(i.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Play Path
        `,i.classList.remove("btn-active"))}fn.killTweensOf(xe.position),fn.killTweensOf(Ce.target)}),pt.domElement.addEventListener("wheel",i=>{if(window.cinematicTl||window.customTimelinePlaying||Xn){i.preventDefault(),i.stopPropagation();const r=.03;let o=xe.fov+i.deltaY*r;o=Math.max(10,Math.min(120,o)),xe.fov=o,xe.updateProjectionMatrix()}},{passive:!1}),window.addEventListener("resize",fv);const t=new qo(1,16,16),n=new aa({color:62206,wireframe:!0,transparent:!0,opacity:.3});Le=new wn(t,n),tn.add(Le),Le.visible=!1,Av(),pv(),Pd(0)}function Ad(){xe&&(Cd.set(0,0,320),na.set(0,0,0),Xn=!0,Ce&&(Ce.enableZoom=!1),fn.to(xe.position,{x:0,y:0,z:320,duration:2,ease:"power3.inOut"}),fn.to(xe,{fov:60,duration:2,ease:"power3.inOut",onUpdate:()=>xe.updateProjectionMatrix()}),Ce?fn.to(Ce.target,{x:0,y:0,z:0,duration:2,ease:"power3.inOut",onComplete:()=>{Xn=!1,Ce.enableZoom=!0}}):Xn=!1)}function Ci(a){if(!xe)return;if(window.cinematicTl&&(window.cinematicTl.kill(),window.cinematicTl=null),ns(),Xn=!0,Ce&&(Ce.enableZoom=!1),a==="cinematic"){window.cinematicTl=fn.timeline({repeat:-1,yoyo:!0}),window.cinematicTl.to(xe.position,{x:250,y:100,z:250,duration:6,ease:"sine.inOut"},0),Ce&&window.cinematicTl.to(Ce.target,{x:0,y:0,z:0,duration:6,ease:"sine.inOut"},0),window.cinematicTl.to(xe.position,{x:-50,y:300,z:50,duration:8,ease:"power1.inOut"},6),window.cinematicTl.to(xe.position,{x:-200,y:20,z:-150,duration:8,ease:"sine.inOut"},14),window.cinematicTl.to(xe.position,{x:0,y:0,z:120,duration:7,ease:"power2.inOut"},22),fn.to(xe,{fov:60,duration:3,ease:"sine.inOut",onUpdate:()=>xe.updateProjectionMatrix()});return}let e=0,t=0,n=320;a==="reset"?(e=0,t=0,n=320):a==="iso"?(e=250,t=150,n=250):a==="side"?(e=350,t=0,n=0):a==="top"?(e=0,t=350,n=0):a==="macro"&&(e=0,t=0,n=60),Cd.set(e,t,n),na.set(0,0,0),fn.to(xe.position,{x:e,y:t,z:n,duration:2.5,ease:"power3.inOut"}),fn.to(xe,{fov:60,duration:2.5,ease:"power3.inOut",onUpdate:()=>xe.updateProjectionMatrix()}),Ce?fn.to(Ce.target,{x:0,y:0,z:0,duration:2.5,ease:"power3.inOut",onComplete:()=>{Xn=!1,Ce.enableZoom=!0}}):Xn=!1}function fv(){xe.aspect=window.innerWidth/window.innerHeight,xe.updateProjectionMatrix(),pt.setSize(window.innerWidth,window.innerHeight),ot&&ot.setSize(window.innerWidth,window.innerHeight),ne.resolution&&ne.resolution.value.set(window.innerWidth,window.innerHeight)}function pv(){const a="resources/PHOTO-2026-05-21-10-03-04.jpg",e=new Image;e.crossOrigin="Anonymous",e.onload=()=>{hl(e,"PHOTO-2026-05-21-10-03-04.jpg")},e.onerror=()=>{console.warn("Could not load default image (possible CORS or path error). Creating procedural pattern..."),mv()},e.src=a}function mv(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createRadialGradient(512/2,512/2,20,512/2,512/2,512/2);n.addColorStop(0,"#00f2fe"),n.addColorStop(.5,"#7c3aed"),n.addColorStop(1,"#050608"),t.fillStyle=n,t.fillRect(0,0,512,512),t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath();for(let o=0;o<360;o+=5){const s=o*Math.PI/180,l=512/3.5*(1+.3*Math.sin(s*6)),c=512/2+Math.cos(s)*l,u=512/2+Math.sin(s)*l;o===0?t.moveTo(c,u):t.lineTo(c,u)}t.closePath(),t.stroke();for(let o=0;o<30;o++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.7+.3})`,t.beginPath(),t.arc(Math.random()*512,Math.random()*512,Math.random()*8+2,0,Math.PI*2),t.fill();const i=e.toDataURL(),r=new Image;r.onload=()=>{hl(r,"procedural_fallback_pattern.png"),document.getElementById("file-name-display").innerText="Procedural Core Pattern",document.getElementById("file-name-display").style.color="#00f2fe"},r.src=i}function hl(a,e){zt.name=e,zt.width=a.width,zt.height=a.height,zt.aspectRatio=a.width/a.height,document.getElementById("file-name-display").innerText=e,document.getElementById("file-name-display").style.color="",document.getElementById("res-display").innerText=`${a.width} x ${a.height}`;const t=document.getElementById("image-canvas"),n=t.getContext("2d");t.width=a.width,t.height=a.height,n.drawImage(a,0,0),St=n.getImageData(0,0,a.width,a.height).data,Pr()}function Pr(){if(ii&&(tn.remove(ii),ii.geometry.dispose()),!St)return;const a=parseInt(document.getElementById("res-step").value),e=zt.width,t=zt.height,n=[],i=[],r=[],o=[],s=document.getElementById("depth-source").value,l=t,c=Math.ceil(t/a),u=Math.ceil(e/a);un.grid=[];for(let p=0;p<c;p++)un.grid[p]=new Int32Array(u).fill(-1);function d(p,_){const y=Math.max(0,Math.min(p,e-1)),S=(Math.max(0,Math.min(_,t-1))*e+y)*4,v=St[S]/255,P=St[S+1]/255,C=St[S+2]/255;if(s==="none")return 0;if(s==="luminance")return .299*v+.587*P+.114*C;if(s==="red")return v;if(s==="green")return P;if(s==="blue")return C;if(s==="saturation"){const x=Math.max(v,P,C),w=Math.min(v,P,C);return x===0?0:(x-w)/x}return 0}let h=0;for(let p=0;p<t;p+=a){let _=0;for(let y=0;y<e;y+=a){const b=(p*e+y)*4,S=St[b]/255,v=St[b+1]/255,P=St[b+2]/255;if(St[b+3]/255<.05){_++;continue}const x=(y-e/2)/l,w=(t-p-t/2)/l,D=0,H=d(y,p),Q=Math.min(y+a,e-1),F=Math.max(y-a,0),R=Math.min(p+a,t-1),N=Math.max(p-a,0),A=d(Q,p),z=d(F,p),U=d(y,R),K=d(y,N),q=(Q-F)/l,V=(R-N)/l,W=q>0?(A-z)/q:0,te=V>0?(K-U)/V:0,J=n.length/3;n.push(x,w,D),i.push(S,v,P),r.push(H),o.push(W,te),h<c&&_<u&&(un.grid[h][_]=J),_++}h++}un.positions=n,un.colors=i,un.pixelVals=r,un.depthGradients=o;const m=new Xt;m.setAttribute("position",new lt(n,3)),m.setAttribute("originalColor",new lt(i,3)),m.setAttribute("pixelVal",new lt(r,1)),m.setAttribute("depthGradient",new lt(o,2));const g=document.getElementById("enable-depth-write")?document.getElementById("enable-depth-write").checked:!1,f=new Ft({vertexShader:lv,fragmentShader:cv,uniforms:ne,transparent:!0,depthTest:!0,depthWrite:g,blending:Ri});ii=new D_(m,f),tn.add(ii),document.getElementById("stats-particles").innerText=(n.length/3).toLocaleString(),ts()}function ts(){if(Pn&&(tn.remove(Pn),Pn.geometry.dispose(),Pn=null),!document.getElementById("enable-links").checked||!St)return;const e=un.grid,t=e.length;if(t===0)return;const n=e[0].length,i=un.positions,r=un.colors,o=un.pixelVals,s=un.depthGradients,l=parseFloat(document.getElementById("model-scale").value),c=parseFloat(document.getElementById("depth-scale").value),u=parseFloat(document.getElementById("link-max-dist").value),d=u*u,h=[],m=[],g=[],f=[];iu=[];for(let C=0;C<t;C++)for(let x=0;x<n;x++){const w=e[C][x];if(w===-1)continue;const D=i[w*3],H=i[w*3+1],Q=i[w*3+2],F=o[w],R=D*l,N=H*l,A=Q+F*c,z=[{x:x+1,y:C},{x,y:C+1},{x:x+1,y:C+1},{x:x-1,y:C+1}];for(let U=0;U<z.length;U++){const K=z[U].x,q=z[U].y;if(K>=0&&K<n&&q>=0&&q<t){const V=e[q][K];if(V===-1)continue;const W=i[V*3],te=i[V*3+1],J=i[V*3+2],re=o[V],Y=W*l,Me=te*l,fe=J+re*c,_e=R-Y,de=N-Me,Fe=A-fe;_e*_e+de*de+Fe*Fe<d&&(iu.push({indexA:w,indexB:V}),h.push(D,H,Q),m.push(r[w*3],r[w*3+1],r[w*3+2]),g.push(F),f.push(s[w*2],s[w*2+1]),h.push(W,te,J),m.push(r[V*3],r[V*3+1],r[V*3+2]),g.push(re),f.push(s[V*2],s[V*2+1]))}}}if(h.length===0)return;const p=new V_;p.setPositions(h),p.setColors(m);const _=h.length/6,y=new Float32Array(_),b=new Float32Array(_),S=new Float32Array(_*2),v=new Float32Array(_*2);for(let C=0;C<_;C++)y[C]=g[C*2],b[C]=g[C*2+1],S[C*2]=f[C*4],S[C*2+1]=f[C*4+1],v[C*2]=f[C*4+2],v[C*2+1]=f[C*4+3];p.setAttribute("pixelValStart",new Ds(y,1)),p.setAttribute("pixelValEnd",new Ds(b,1)),p.setAttribute("depthGradientStart",new Ds(S,2)),p.setAttribute("depthGradientEnd",new Ds(v,2));const P=new Ft({vertexShader:uv,fragmentShader:dv,uniforms:ne,transparent:!0,depthTest:!0,depthWrite:!1,blending:qs});Pn=new wn(p,P),tn.add(Pn)}let ru=0,ao=0,oo=0;function gv(a){if(ao++,a>oo+1e3){const e=Math.round(ao*1e3/(a-oo)),t=(a-ru).toFixed(1);document.getElementById("stats-fps").innerText=`${t} ms (${e} fps)`,oo=a,ao=0}ru=a}function Pd(a){requestAnimationFrame(Pd);const e=a*.001;if(ne.uTime.value=e,!Xn&&Ws>0){const n=e*Oo,i=Math.sin(n)*Ws,r=Math.cos(n*.8)*Ws;Ce.target.x=na.x+i,Ce.target.y=na.y+r}if(Ce&&(Ce.autoRotate=dl,Ce.autoRotateSpeed=Oo*2,Ce.update()),Le){const n=parseFloat(document.getElementById("model-scale").value),i=parseFloat(document.getElementById("scatter-freq").value),r=parseFloat(document.getElementById("scatter-speed").value),o=document.getElementById("enable-organic-float").checked;if(!Hs&&o&&r>0){const l=e*r*.2,c=Math.sin(l*1.5)*.25*n,u=Math.cos(l*.9)*.25*n;Le.position.set(Bo.x+c,Bo.y+u,0)}if(ne.uWindCenter.value.copy(Le.position),ne.uWindRadius.value=i*n,o){const l=r*.5+.2;Le.rotation.y+=l*.01,Le.rotation.x+=l*.005,Le.rotation.z+=l*.003}Le.updateMatrixWorld();const s=new gt().makeRotationFromEuler(Le.rotation);ne.uSphereRotationMatrix.value.setFromMatrix4(s)}let t=!1;Le&&(t=Le.visible,ia&&(Le.visible=!1)),ot&&tn&&xe?ot.render():pt&&tn&&xe&&pt.render(tn,xe),Le&&(Le.visible=t),gv(a)}function fl(){if(!St)return null;const a=parseInt(document.getElementById("res-step").value),e=zt.width,t=zt.height,n=document.getElementById("depth-source").value,i=parseFloat(document.getElementById("depth-scale").value),r=parseFloat(document.getElementById("scatter-amp").value),o=parseFloat(document.getElementById("alpha-threshold").value),s=document.getElementById("monochrome-color").value,l=new Ae(s),c=parseFloat(document.getElementById("model-scale").value),u=ne.uTime.value,d=parseFloat(document.getElementById("scatter-speed").value),h=ne.uWindCenter.value,m=ne.uWindRadius.value,g=ne.uSphereRotationMatrix.value,f=g.clone().transpose(),p=document.getElementById("enable-organic-float").checked,_=document.getElementById("enable-shading").checked,y=parseFloat(document.getElementById("exposure").value),b=parseFloat(document.getElementById("contrast").value),S=parseFloat(document.getElementById("saturation").value),v=document.getElementById("enable-split-toning").checked,P=new Ae(document.getElementById("shadow-tint").value),C=new Ae(document.getElementById("highlight-tint").value),x=parseFloat(document.getElementById("tint-mix").value),D=parseFloat(document.getElementById("light-angle").value)*Math.PI/180,H=Math.sin(D),Q=Math.cos(D),F=.5,R=new O(H,F,Q).normalize(),N=document.getElementById("color-mode").value;let A=0;N==="original"?A=0:N==="greyscale"?A=1:N==="depth-gradient"?A=2:N==="monochrome"&&(A=3);const z=t,U=[];function K(q,V){const W=Math.max(0,Math.min(q,e-1)),J=(Math.max(0,Math.min(V,t-1))*e+W)*4,re=St[J]/255,Y=St[J+1]/255,Me=St[J+2]/255;if(n==="none")return 0;if(n==="luminance")return .299*re+.587*Y+.114*Me;if(n==="red")return re;if(n==="green")return Y;if(n==="blue")return Me;if(n==="saturation"){const fe=Math.max(re,Y,Me),_e=Math.min(re,Y,Me);return fe===0?0:(fe-_e)/fe}return 0}for(let q=0;q<t;q+=a)for(let V=0;V<e;V+=a){const W=(q*e+V)*4,te=St[W]/255,J=St[W+1]/255,re=St[W+2]/255;if(St[W+3]/255<.05)continue;const Me=.299*te+.587*J+.114*re;if(Me<o)continue;const fe=(V-e/2)/z*c,_e=(t-q-t/2)/z*c;let de=0;const Fe=K(V,q);de+=Fe*i;let we=fe,be=_e,rt=de;if(p&&r>0&&m>0){const We=fe-h.x,qe=_e-h.y,E=de-h.z,M=Math.hypot(We,qe);if(M<m){const X=1-M/m,ee=X*X*(3-2*X),se=g.elements[0]*We+g.elements[3]*qe+g.elements[6]*E,oe=g.elements[1]*We+g.elements[4]*qe+g.elements[7]*E,ve=g.elements[2]*We+g.elements[5]*qe+g.elements[8]*E,L=ee*r*u*d*.1,B=Math.cos(L),ue=Math.sin(L);let ce=se*B-oe*ue,ae=se*ue+oe*B,me=ve;const pe=Math.hypot(se,oe,ve),Re=pe>1e-4?-se/pe:0,ze=pe>1e-4?-oe/pe:0,He=pe>1e-4?-ve/pe:0,I=ee*r*2,Z=ee*r*4;ce+=Re*I,ae+=ze*I,me+=Z+He*I;let ie=0,he=0,ge=0,Oe=1,Qe=2/m;for(let on=0;on<3;on++){const Pt=ce*Qe,Dr=ae*Qe,cs=me*Qe+u*d*1.5,da=Math.sin(Dr*2),ha=Math.sin(cs*2),T=Math.sin(Pt*2),G=Math.cos(cs*1.5),j=Math.cos(Pt*1.5),k=Math.cos(Dr*1.5);ie+=(da+G)*Oe,he+=(ha+j)*Oe,ge+=(T+k)*Oe,Oe*=.5,Qe*=2}ce+=ie*ee*r*3,ae+=he*ee*r*3,me+=ge*ee*r*3;const xt=f.elements[0]*ce+f.elements[3]*ae+f.elements[6]*me,Fn=f.elements[1]*ce+f.elements[4]*ae+f.elements[7]*me,je=f.elements[2]*ce+f.elements[5]*ae+f.elements[8]*me;we=h.x+(We*(1-ee)+xt*ee),be=h.y+(qe*(1-ee)+Fn*ee),rt=h.z+(E*(1-ee)+je*ee)}}let $e=te,Ke=J,ct=re;if(A===1)$e=Ke=ct=Me;else if(A===2){let We=.5;Math.abs(i)>.1&&(We=(rt+Math.abs(i))/(Math.abs(i)*2)),We=Math.max(0,Math.min(1,We));const qe=new Ae("#0d0059"),E=new Ae("#00f2fe"),M=new Ae("#ff00cc");let X;We<.5?X=qe.clone().lerp(E,We*2):X=E.clone().lerp(M,(We-.5)*2),$e=X.r,Ke=X.g,ct=X.b}else A===3&&($e=te*l.r,Ke=J*l.g,ct=re*l.b);const Te=new Ae($e,Ke,ct);if(_){const We=Math.min(V+a,e-1),qe=Math.max(V-a,0),E=Math.min(q+a,t-1),M=Math.max(q-a,0),X=K(We,q),ee=K(qe,q),se=K(V,E),oe=K(V,M),ve=(We-qe)/z,L=(E-M)/z,B=ve>0?(X-ee)/ve:0,ue=L>0?(oe-se)/L:0,ce=c>.001?i/c:0,ae=new O(-ce*B,-ce*ue,1).normalize(),pe=.2+.8*Math.abs(ae.dot(R));Te.multiplyScalar(pe)}Te.multiplyScalar(y),Te.r=(Te.r-.5)*b+.5,Te.g=(Te.g-.5)*b+.5,Te.b=(Te.b-.5)*b+.5;const Ve=.299*Te.r+.587*Te.g+.114*Te.b;if(Te.lerp(new Ae(Ve,Ve,Ve),1-S),v){const We=Math.max(0,Math.min(1,.299*Te.r+.587*Te.g+.114*Te.b)),qe=Te.clone().multiply(P),E=Te.clone().multiply(C),M=qe.clone().lerp(E,We);Te.lerp(M,x)}U.push({x:we,y:be,z:rt,r:Math.max(0,Math.min(1,Te.r)),g:Math.max(0,Math.min(1,Te.g)),b:Math.max(0,Math.min(1,Te.b))})}return U}function pl(a,e,t){const n=new Blob([a],{type:t}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}function _v(){const a=fl();if(!a||a.length===0)return;let e=`# Exported from Particle Saga
# Particles Count: ${a.length}
`;for(let n=0;n<a.length;n++){const i=a[n];e+=`v ${i.x.toFixed(4)} ${i.y.toFixed(4)} ${i.z.toFixed(4)} ${i.r.toFixed(4)} ${i.g.toFixed(4)} ${i.b.toFixed(4)}
`}const t=zt.name.split(".")[0];pl(e,`${t}_particles.obj`,"text/plain")}function vv(){const a=fl();if(!a||a.length===0)return;let e=`x,y,z,r,g,b
`;for(let n=0;n<a.length;n++){const i=a[n],r=Math.round(i.r*255),o=Math.round(i.g*255),s=Math.round(i.b*255);e+=`${i.x.toFixed(4)},${i.y.toFixed(4)},${i.z.toFixed(4)},${r},${o},${s}
`}const t=zt.name.split(".")[0];pl(e,`${t}_particles.csv`,"text/csv")}function xv(){const a=fl();if(!a||a.length===0)return;const e={positions:[],colors:[]};for(let n=0;n<a.length;n++){const i=a[n];e.positions.push(i.x,i.y,i.z),e.colors.push(i.r,i.g,i.b)}const t=zt.name.split(".")[0];pl(JSON.stringify(e,null,2),`${t}_particles.json`,"application/json")}function yv(){if(!pt||!xe)return;const a=Le?Le.visible:!1;Le&&(Le.visible=!1);const e=window.innerWidth,t=window.innerHeight,n=3840,i=Math.round(n/(e/t));pt.setSize(n,i,!1),ot&&ot.setSize(n,i),xe.aspect=n/i,xe.updateProjectionMatrix(),ne.resolution&&ne.resolution.value.set(n,i),ot?ot.render():pt.render(tn,xe);const r=pt.domElement.toDataURL("image/png");Le&&(Le.visible=a);const o=document.createElement("a"),s=zt.name.split(".")[0];o.href=r,o.download=`${s}_render_4k.png`,o.click(),pt.setSize(e,t),ot&&ot.setSize(e,t),xe.aspect=e/t,xe.updateProjectionMatrix(),ne.resolution&&ne.resolution.value.set(e,t),ot?ot.render():pt.render(tn,xe)}function Ld(a){const e=a*Math.PI/180,t=Math.sin(e),n=Math.cos(e),i=.5,r=new O(t,i,n).normalize();ne.uLightDir.value.copy(r)}const bv={"0001":{camera:"iso",resStep:2,pointSize:1.2,modelScale:300,depthScale:120,scatterAmp:0,scatterFreq:.05,scatterSpeed:0,pointShape:1,pointOpacity:.6,colorMode:"greyscale",exposure:1.2,contrast:1.4,saturation:.8,enableShading:!0,enableSplitToning:!1,tintMix:.5,lightAngle:45},"0002":{camera:"reset",resStep:2,pointSize:2,modelScale:300,depthScale:80,scatterAmp:5,scatterFreq:.05,scatterSpeed:.3,pointShape:1,pointOpacity:.6,colorMode:"original",exposure:1,contrast:1.2,saturation:1,enableShading:!0,enableSplitToning:!0,shadowTint:"#094074",highlightTint:"#fffaec",tintMix:.6,lightAngle:60},"0003":{camera:"side",resStep:2,pointSize:1.5,modelScale:300,depthScale:150,scatterAmp:12,scatterFreq:.05,scatterSpeed:.8,pointShape:1,pointOpacity:.6,colorMode:"monochrome",monochromeColor:"#00ffcc",exposure:.9,contrast:1.5,saturation:.6,enableShading:!1,enableSplitToning:!1,tintMix:.7,lightAngle:30}};function Sv(a){const e=bv[a];e&&(e.resStep!==void 0&&(document.getElementById("res-step").value=e.resStep),e.pointSize!==void 0&&(document.getElementById("point-size").value=e.pointSize),e.modelScale!==void 0&&(document.getElementById("model-scale").value=e.modelScale),e.depthScale!==void 0&&(document.getElementById("depth-scale").value=e.depthScale),e.scatterAmp!==void 0&&(document.getElementById("scatter-amp").value=e.scatterAmp),e.scatterFreq!==void 0&&(document.getElementById("scatter-freq").value=e.scatterFreq),e.scatterSpeed!==void 0&&(document.getElementById("scatter-speed").value=e.scatterSpeed),e.pointShape!==void 0&&(document.getElementById("point-shape").value=e.pointShape),e.pointOpacity!==void 0&&(document.getElementById("point-opacity").value=e.pointOpacity),e.colorMode!==void 0&&(document.getElementById("color-mode").value=e.colorMode),e.monochromeColor!==void 0&&(document.getElementById("monochrome-color").value=e.monochromeColor),e.exposure!==void 0&&(document.getElementById("exposure").value=e.exposure),e.contrast!==void 0&&(document.getElementById("contrast").value=e.contrast),e.saturation!==void 0&&(document.getElementById("saturation").value=e.saturation),e.enableShading!==void 0&&(document.getElementById("enable-shading").checked=e.enableShading),e.enableSplitToning!==void 0&&(document.getElementById("enable-split-toning").checked=e.enableSplitToning),e.shadowTint!==void 0&&(document.getElementById("shadow-tint").value=e.shadowTint),e.highlightTint!==void 0&&(document.getElementById("highlight-tint").value=e.highlightTint),e.tintMix!==void 0&&(document.getElementById("tint-mix").value=e.tintMix),e.lightAngle!==void 0&&(document.getElementById("light-angle").value=e.lightAngle),No(),Pr(),e.camera&&Ci(e.camera),document.querySelectorAll(".preset-btn").forEach(t=>{t.getAttribute("data-preset")===a?t.classList.add("active"):t.classList.remove("active")}))}function No(){ne.uPointSize.value=parseFloat(document.getElementById("point-size").value),ne.uModelScale.value=parseFloat(document.getElementById("model-scale").value),ne.uDepthScale.value=parseFloat(document.getElementById("depth-scale").value),ne.uScatterAmp.value=parseFloat(document.getElementById("scatter-amp").value),ne.uScatterFreq.value=parseFloat(document.getElementById("scatter-freq").value),ne.uScatterSpeed.value=parseFloat(document.getElementById("scatter-speed").value),ne.uPointOpacity.value=parseFloat(document.getElementById("point-opacity").value),ne.uAlphaThreshold.value=parseFloat(document.getElementById("alpha-threshold").value),ne.uSizeAttenuation.value=document.getElementById("size-attenuation").checked,ne.uPointShape.value=parseInt(document.getElementById("point-shape").value),ne.uOrganicFieldStrength.value=parseFloat(document.getElementById("organic-field-strength").value),ne.uOrganicFieldSpeed.value=parseFloat(document.getElementById("organic-field-speed").value);const a=document.getElementById("enable-organic-float").checked;if(ne.uEnableFloating.value=a,Le){Le.visible=a;const c=parseFloat(document.getElementById("model-scale").value),u=parseFloat(document.getElementById("depth-scale").value),d=parseFloat(document.getElementById("scatter-freq").value);Le.scale.setScalar(d*c),Le.position.z=u*.5}pn&&(pn.strength=parseFloat(document.getElementById("bloom-strength").value),pn.radius=parseFloat(document.getElementById("bloom-radius").value));const e=document.getElementById("color-mode").value;let t=0;e==="original"?t=0:e==="greyscale"?t=1:e==="depth-gradient"?t=2:e==="monochrome"&&(t=3),ne.uColorMode.value=t,ne.uTintColor.value.set(document.getElementById("monochrome-color").value),ne.uLinkOpacity.value=parseFloat(document.getElementById("link-opacity").value),ne.uLinkTintColor.value.set(document.getElementById("link-tint-color").value),ne.linewidth.value=parseFloat(document.getElementById("link-thickness").value),ne.uLinkGlow.value=parseFloat(document.getElementById("link-glow").value);const n=document.getElementById("link-color-mode").value;let i=0;n==="match-particles"?i=0:n==="tint"?i=1:n==="depth-gradient"&&(i=2),ne.uLinkColorMode.value=i,ne.uEnableShading.value=document.getElementById("enable-shading").checked,ne.uExposure.value=parseFloat(document.getElementById("exposure").value),ne.uContrast.value=parseFloat(document.getElementById("contrast").value),ne.uSaturation.value=parseFloat(document.getElementById("saturation").value),ne.uEnableSplitToning.value=document.getElementById("enable-split-toning").checked,ne.uShadowTint.value.set(document.getElementById("shadow-tint").value),ne.uHighlightTint.value.set(document.getElementById("highlight-tint").value),ne.uTintMix.value=parseFloat(document.getElementById("tint-mix").value),Ld(parseFloat(document.getElementById("light-angle").value)),[{id:"res-step",unit:"px"},{id:"point-size",unit:""},{id:"model-scale",unit:""},{id:"depth-scale",unit:""},{id:"scatter-amp",unit:""},{id:"scatter-freq",unit:""},{id:"scatter-speed",unit:""},{id:"point-opacity",unit:""},{id:"alpha-threshold",unit:""},{id:"exposure",unit:""},{id:"contrast",unit:""},{id:"saturation",unit:""},{id:"tint-mix",unit:""},{id:"light-angle",unit:"°"},{id:"drift-amp",unit:""},{id:"drift-speed",unit:"x"},{id:"link-opacity",unit:""},{id:"link-max-dist",unit:""},{id:"link-thickness",unit:"px"},{id:"link-glow",unit:""},{id:"organic-field-strength",unit:""},{id:"organic-field-speed",unit:""},{id:"bloom-strength",unit:""},{id:"bloom-radius",unit:""},{id:"timeline-speed",unit:"s"}].forEach(c=>{const u=document.getElementById(c.id),d=document.getElementById(`${c.id}-val`);u&&d&&(d.innerText=`${u.value}${c.unit}`)});const o=document.getElementById("split-toning-options");o&&(o.style.display=document.getElementById("enable-split-toning").checked?"block":"none");const s=document.getElementById("monochrome-picker-wrapper");s&&(s.style.display=t===3?"flex":"none");const l=document.getElementById("link-tint-picker-wrapper");l&&(l.style.display=i===1?"flex":"none")}function Mv(){if(!pt||!xe)return;const a=window.innerWidth,e=window.innerHeight;let t=a,n=e;t%2!==0&&(t-=1),n%2!==0&&(n-=1),pt.setSize(t,n,!1),ot&&ot.setSize(t,n),xe.aspect=t/n,xe.updateProjectionMatrix(),ne.resolution&&ne.resolution.value.set(t,n);const r=pt.domElement.captureStream(60);let o="video/webm",s="webm";const l=["video/mp4;codecs=h264","video/mp4;codecs=avc1","video/mp4","video/webm;codecs=h264","video/webm;codecs=vp9","video/webm"];for(const d of l)if(MediaRecorder.isTypeSupported(d)){o=d,d.includes("mp4")&&(s="mp4");break}console.log(`Starting recording with mimeType: ${o}, fileExt: ${s}`),Os=[];const c={mimeType:o,videoBitsPerSecond:3e7};try{Wn=new MediaRecorder(r,c)}catch(d){console.warn("Failed to create MediaRecorder with options, falling back to basic stream configuration",d);try{Wn=new MediaRecorder(r)}catch(h){alert("MediaRecorder is not supported in this browser: "+h.message),pt.setSize(a,e),ot&&ot.setSize(a,e),xe.aspect=a/e,xe.updateProjectionMatrix(),ne.resolution&&ne.resolution.value.set(a,e);return}}Wn.ondataavailable=d=>{d.data&&d.data.size>0&&Os.push(d.data)},Wn.onstop=()=>{const d=new Blob(Os,{type:Wn.mimeType||o}),h=URL.createObjectURL(d),m=document.createElement("a");let g="ppparticles";zt&&zt.name&&(g=zt.name.replace(/\.[^/.]+$/,"")),m.href=h,m.download=`${g}_recording.${s}`,m.click(),setTimeout(()=>{URL.revokeObjectURL(h)},100),Os=[],ia=!1;const f=window.innerWidth,p=window.innerHeight;pt.setSize(f,p),ot&&ot.setSize(f,p),xe.aspect=f/p,xe.updateProjectionMatrix(),ne.resolution&&ne.resolution.value.set(f,p);const _=document.getElementById("btn-record-video");_&&(_.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>
        Record Video (MP4/WebM)
      `,_.classList.remove("btn-recording"),_.classList.add("btn-primary"))},Wn.start(100),ia=!0;const u=document.getElementById("btn-record-video");u&&(u.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pulse-icon"><circle cx="12" cy="12" r="10" fill="#ef4444"/></svg>
      Stop Recording
    `,u.classList.add("btn-recording"),u.classList.remove("btn-primary"))}function wv(){Wn&&Wn.state!=="inactive"&&Wn.stop()}function Tv(){if(!xe||!Ce)return;const a={};["res-step","point-size","model-scale","depth-scale","scatter-amp","scatter-freq","scatter-speed","point-opacity","alpha-threshold","exposure","contrast","saturation","tint-mix","light-angle","drift-amp","drift-speed","organic-field-strength","organic-field-speed","bloom-strength","bloom-radius","link-opacity","link-max-dist","link-thickness","link-glow","timeline-speed"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=parseFloat(s.value))}),["enable-links","size-attenuation","enable-auto-orbit","enable-shading","enable-organic-float","enable-split-toning"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.checked)}),["depth-source","color-mode","point-shape","link-color-mode"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.value)}),["monochrome-color","shadow-tint","highlight-tint","link-tint-color"].forEach(o=>{const s=document.getElementById(o);s&&(a[o]=s.value)}),Ln.push({px:xe.position.x,py:xe.position.y,pz:xe.position.z,tx:Ce.target.x,ty:Ce.target.y,tz:Ce.target.z,fov:xe.fov,params:a});const r=document.getElementById("timeline-hud");r&&(r.innerText=`${Ln.length} Keyframe${Ln.length!==1?"s":""} Captured`)}function lo(a){if(!a||!a.params)return;const e=a.params["enable-links"],t=document.getElementById("enable-links");t&&e!==void 0&&(t.checked=e,Pn?Pn.visible=e:e&&ts());const n=a.params["size-attenuation"],i=document.getElementById("size-attenuation");i&&n!==void 0&&(i.checked=n,ne.uSizeAttenuation.value=n);const r=a.params["enable-auto-orbit"],o=document.getElementById("enable-auto-orbit");o&&r!==void 0&&(o.checked=r,dl=r);const s=a.params["enable-shading"],l=document.getElementById("enable-shading");l&&s!==void 0&&(l.checked=s,ne.uEnableShading.value=s);const c=a.params["enable-organic-float"],u=document.getElementById("enable-organic-float");u&&c!==void 0&&(u.checked=c,ne.uEnableFloating.value=c);const d=a.params["enable-split-toning"],h=document.getElementById("enable-split-toning");if(h&&d!==void 0){h.checked=d,ne.uEnableSplitToning.value=d;const N=document.getElementById("split-toning-options");N&&(N.style.display=d?"block":"none")}const m=a.params["depth-source"],g=document.getElementById("depth-source");g&&m!==void 0&&g.value!==m&&(g.value=m,Pr());const f=a.params["color-mode"],p=document.getElementById("color-mode");if(p&&f!==void 0){p.value=f;let N=0;f==="original"?N=0:f==="greyscale"?N=1:f==="depth-gradient"?N=2:f==="monochrome"&&(N=3),ne.uColorMode.value=N;const A=document.getElementById("monochrome-picker-wrapper");A&&(A.style.display=N===3?"flex":"none")}const _=a.params["point-shape"],y=document.getElementById("point-shape");y&&_!==void 0&&(y.value=_,ne.uPointShape.value=parseInt(_));const b=a.params["link-color-mode"],S=document.getElementById("link-color-mode");if(S&&b!==void 0){S.value=b;let N=0;b==="match-particles"?N=0:b==="tint"?N=1:b==="depth-gradient"&&(N=2),ne.uLinkColorMode.value=N;const A=document.getElementById("link-tint-picker-wrapper");A&&(A.style.display=N===1?"flex":"none")}const v=a.params["monochrome-color"],P=document.getElementById("monochrome-color");P&&v!==void 0&&(P.value=v,ne.uTintColor.value.set(v));const C=a.params["shadow-tint"],x=document.getElementById("shadow-tint");x&&C!==void 0&&(x.value=C,ne.uShadowTint.value.set(C));const w=a.params["highlight-tint"],D=document.getElementById("highlight-tint");D&&w!==void 0&&(D.value=w,ne.uHighlightTint.value.set(w));const H=a.params["link-tint-color"],Q=document.getElementById("link-tint-color");Q&&H!==void 0&&(Q.value=H,ne.uLinkTintColor.value.set(H));const F=document.getElementById("res-step");if(F&&a.params["res-step"]!==void 0){const N=parseFloat(F.value),A=a.params["res-step"];if(N!==A){F.value=A;const z=document.getElementById("res-step-val");z&&(z.innerText=`${A}px`),Pr()}}const R=document.getElementById("link-max-dist");if(R&&a.params["link-max-dist"]!==void 0){const N=parseFloat(R.value),A=a.params["link-max-dist"];if(N!==A){R.value=A;const z=document.getElementById("link-max-dist-val");z&&(z.innerText=`${A}`),ts()}}}function ns(){window.customTimelineTl&&(window.customTimelineTl.kill(),window.customTimelineTl=null),window.customTimelinePlaying=!1,Ce&&(Ce.enableZoom=!0);const a=document.getElementById("btn-play-timeline");a&&(a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Play Path
    `,a.classList.remove("btn-active"))}function Ev(){Ln=[],ns();const a=document.getElementById("timeline-hud");a&&(a.innerText="0 Keyframes Captured")}function Cv(){if(Ln.length<2){alert("Add at least 2 keyframes to play a path.");return}ns();const a=parseFloat(document.getElementById("timeline-speed").value)||4;Ce&&(Ce.enableZoom=!1),window.customTimelinePlaying=!0;const e=document.getElementById("btn-play-timeline");e&&(e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16"/></svg>
      Stop Path
    `,e.classList.add("btn-active"));const t=Ln[0];xe.position.set(t.px,t.py,t.pz),Ce&&Ce.target.set(t.tx,t.ty,t.tz),xe.fov=t.fov,xe.updateProjectionMatrix(),lo(t);const i=["point-size","model-scale","depth-scale","scatter-amp","scatter-freq","scatter-speed","point-opacity","alpha-threshold","exposure","contrast","saturation","tint-mix","light-angle","drift-amp","drift-speed","organic-field-strength","organic-field-speed","bloom-strength","bloom-radius","link-opacity","link-thickness","link-glow"].map(o=>{const s=document.getElementById(o),l=document.getElementById(`${o}-val`),c=zo.find(u=>u.id===o);return{id:o,input:s,display:l,callback:c?c.callback:null,unit:c?c.unit:""}}),r={};i.forEach(o=>{r[o.id]=t.params[o.id]!==void 0?t.params[o.id]:o.input?parseFloat(o.input.value):0}),window.customTimelineTl=fn.timeline({onComplete:()=>{ns()}});for(let o=1;o<Ln.length;o++){Ln[o-1];const s=Ln[o],l=(o-1)*a;window.customTimelineTl.to(xe.position,{x:s.px,y:s.py,z:s.pz,duration:a,ease:"power2.inOut"},l),Ce&&window.customTimelineTl.to(Ce.target,{x:s.tx,y:s.ty,z:s.tz,duration:a,ease:"power2.inOut"},l),window.customTimelineTl.to(xe,{fov:s.fov,duration:a,ease:"power2.inOut",onUpdate:()=>xe.updateProjectionMatrix()},l);const c={};i.forEach(d=>{c[d.id]=s.params[d.id]!==void 0?s.params[d.id]:d.input?parseFloat(d.input.value):0});let u=0;window.customTimelineTl.to(r,{...c,duration:a,ease:"power2.inOut",onStart:()=>{lo(Ln[o-1])},onUpdate:()=>{const d=u++%3===0;for(let h=0;h<i.length;h++){const m=i[h],g=r[m.id];if(m.callback&&m.callback(g),d&&m.input){const f=parseFloat(m.input.value);Math.abs(f-g)>1e-4&&(m.input.value=g,m.display&&(m.id==="model-scale"||m.id==="drift-amp"||m.id==="light-angle"?m.display.innerText=`${Math.round(g)}${m.unit}`:m.display.innerText=`${g.toFixed(2)}${m.unit}`))}}},onComplete:()=>{lo(s);for(let d=0;d<i.length;d++){const h=i[d],m=r[h.id];h.input&&(h.input.value=m,h.display&&(h.id==="model-scale"||h.id==="drift-amp"||h.id==="light-angle"?h.display.innerText=`${Math.round(m)}${h.unit}`:h.display.innerText=`${m.toFixed(2)}${h.unit}`))}}},l)}}function Av(){var S,v,P,C,x,w,D,H,Q,F,R,N;window.addEventListener("pointerdown",A=>{if(!document.getElementById("enable-organic-float").checked||!Le||A.target.tagName==="INPUT"||A.target.tagName==="BUTTON"||A.target.tagName==="SELECT")return;lr.x=A.clientX/window.innerWidth*2-1,lr.y=-(A.clientY/window.innerHeight)*2+1,Bs.setFromCamera(lr,xe),Bs.intersectObject(Le).length>0&&(Hs=!0,Ce&&(Ce.enabled=!1))}),window.addEventListener("pointermove",A=>{if(!Hs||!Le)return;lr.x=A.clientX/window.innerWidth*2-1,lr.y=-(A.clientY/window.innerHeight)*2+1,Bs.setFromCamera(lr,xe);const z=new O;Bs.ray.intersectPlane(ov,z),z&&(Le.position.copy(z),Bo.copy(z),ne.uWindCenter.value.copy(Le.position))}),window.addEventListener("pointerup",()=>{Hs=!1,Ce&&(Ce.enabled=!0)});const a=document.getElementById("ui-toggle"),e=document.getElementById("control-panel"),t=()=>{so=!so,so?(e.classList.add("collapsed"),a.title="Expand Panel"):(e.classList.remove("collapsed"),a.title="Collapse Panel")};a.addEventListener("click",t),window.addEventListener("keydown",A=>{const z=A.key.toLowerCase();z==="h"?t():z==="r"&&Ad()}),zo=[{id:"res-step",unit:"px",callback:Pr},{id:"point-size",unit:"",callback:A=>{ne.uPointSize.value=A}},{id:"model-scale",unit:"",callback:A=>{ne.uModelScale.value=A,Le&&Le.scale.setScalar(ne.uScatterFreq.value*A)}},{id:"depth-scale",unit:"",callback:A=>{ne.uDepthScale.value=A,Le&&(Le.position.z=A*.5)}},{id:"scatter-amp",unit:"",callback:A=>{ne.uScatterAmp.value=A}},{id:"scatter-freq",unit:"",callback:A=>{ne.uScatterFreq.value=A,Le&&Le.scale.setScalar(A*ne.uModelScale.value)}},{id:"scatter-speed",unit:"",callback:A=>{ne.uScatterSpeed.value=A}},{id:"point-opacity",unit:"",callback:A=>{ne.uPointOpacity.value=A}},{id:"alpha-threshold",unit:"",callback:A=>{ne.uAlphaThreshold.value=A}},{id:"exposure",unit:"",callback:A=>{ne.uExposure.value=A}},{id:"contrast",unit:"",callback:A=>{ne.uContrast.value=A}},{id:"saturation",unit:"",callback:A=>{ne.uSaturation.value=A}},{id:"tint-mix",unit:"",callback:A=>{ne.uTintMix.value=A}},{id:"light-angle",unit:"°",callback:A=>{Ld(A)}},{id:"drift-amp",unit:"",callback:A=>{Ws=A}},{id:"drift-speed",unit:"x",callback:A=>{Oo=A}},{id:"organic-field-strength",unit:"",callback:A=>{ne.uOrganicFieldStrength.value=A}},{id:"organic-field-speed",unit:"",callback:A=>{ne.uOrganicFieldSpeed.value=A}},{id:"bloom-strength",unit:"",callback:A=>{pn&&(pn.strength=A)}},{id:"bloom-radius",unit:"",callback:A=>{pn&&(pn.radius=A)}},{id:"link-opacity",unit:"",callback:A=>{ne.uLinkOpacity.value=A}},{id:"link-max-dist",unit:"",callback:A=>{ts()}},{id:"link-thickness",unit:"px",callback:A=>{ne.linewidth.value=A}},{id:"link-glow",unit:"",callback:A=>{ne.uLinkGlow.value=A}},{id:"timeline-speed",unit:"s",callback:()=>{}}],zo.forEach(A=>{const z=document.getElementById(A.id),U=document.getElementById(`${A.id}-val`);z&&(z.addEventListener("input",K=>{const q=parseFloat(K.target.value);U&&(U.innerText=`${q}${A.unit}`),A.id!=="res-step"&&A.id!=="link-max-dist"&&A.callback(q)}),(A.id==="res-step"||A.id==="link-max-dist")&&z.addEventListener("change",K=>{const q=parseFloat(K.target.value);A.callback(q)})),U&&z&&(U.style.cursor="text",U.title="Double click to edit manually",U.addEventListener("dblclick",()=>{const K=z.value,q=document.createElement("input");q.type="number",q.value=K,q.step=z.step||"0.01",q.style.width="60px",q.style.background="rgba(0,0,0,0.5)",q.style.color="#fff",q.style.border="1px solid rgba(255,255,255,0.3)",q.style.borderRadius="4px",q.style.padding="2px",q.style.fontFamily="inherit",q.style.fontSize="inherit",q.style.textAlign="right",U.innerHTML="",U.appendChild(q),q.focus();const V=()=>{let W=parseFloat(q.value);isNaN(W)&&(W=parseFloat(z.value)),z.min!==""&&(W=Math.max(parseFloat(z.min),W)),z.max!==""&&(W=Math.min(parseFloat(z.max),W)),z.value=W,U.innerText=`${W}${A.unit}`,A.callback(W)};q.addEventListener("blur",V),q.addEventListener("keydown",W=>{W.key==="Enter"&&q.blur()})}))}),document.getElementById("size-attenuation").addEventListener("change",A=>{ne.uSizeAttenuation.value=A.target.checked}),document.getElementById("enable-auto-orbit").addEventListener("change",A=>{dl=A.target.checked}),document.getElementById("enable-shading").addEventListener("change",A=>{ne.uEnableShading.value=A.target.checked});const o=document.getElementById("enable-organic-float");o&&o.addEventListener("change",A=>{ne.uEnableFloating.value=A.target.checked,Le&&(Le.visible=A.target.checked)});const s=document.getElementById("enable-split-toning"),l=document.getElementById("split-toning-options");s.addEventListener("change",A=>{ne.uEnableSplitToning.value=A.target.checked,l.style.display=A.target.checked?"block":"none"}),document.getElementById("depth-source").addEventListener("change",()=>{Pr()});const u=document.getElementById("color-mode"),d=document.getElementById("monochrome-picker-wrapper");u.addEventListener("change",A=>{const z=A.target.value;let U=0;z==="original"?U=0:z==="greyscale"?U=1:z==="depth-gradient"?U=2:z==="monochrome"&&(U=3),ne.uColorMode.value=U,d.style.display=U===3?"flex":"none"}),document.getElementById("point-shape").addEventListener("change",A=>{ne.uPointShape.value=parseInt(A.target.value)}),(S=document.getElementById("enable-anti-alias"))==null||S.addEventListener("change",A=>{ne.uAntiAlias.value=A.target.checked}),(v=document.getElementById("enable-depth-write"))==null||v.addEventListener("change",A=>{ii&&(ii.material.depthWrite=A.target.checked,ii.material.needsUpdate=!0)}),document.getElementById("monochrome-color").addEventListener("input",A=>{ne.uTintColor.value.set(A.target.value)}),document.getElementById("shadow-tint").addEventListener("input",A=>{ne.uShadowTint.value.set(A.target.value)}),document.getElementById("highlight-tint").addEventListener("input",A=>{ne.uHighlightTint.value.set(A.target.value)}),document.getElementById("btn-export-obj").addEventListener("click",_v),document.getElementById("btn-export-csv").addEventListener("click",vv),document.getElementById("btn-export-json").addEventListener("click",xv),document.getElementById("btn-export-png").addEventListener("click",yv),(P=document.getElementById("btn-record-video"))==null||P.addEventListener("click",()=>{ia?wv():Mv()});const p=document.getElementById("dropzone");p.addEventListener("click",()=>{document.getElementById("file-input").click()}),document.getElementById("file-input").addEventListener("change",A=>{const z=A.target.files;z.length>0&&su(z[0])}),window.addEventListener("dragover",A=>{A.preventDefault(),p.classList.add("dragover")}),window.addEventListener("dragleave",A=>{A.preventDefault(),p.classList.remove("dragover")}),window.addEventListener("drop",A=>{A.preventDefault(),p.classList.remove("dragover");const z=A.dataTransfer.files;z.length>0&&su(z[0])}),(C=document.getElementById("cam-reset"))==null||C.addEventListener("click",()=>Ci("reset")),(x=document.getElementById("cam-iso"))==null||x.addEventListener("click",()=>Ci("iso")),(w=document.getElementById("cam-side"))==null||w.addEventListener("click",()=>Ci("side")),(D=document.getElementById("cam-top"))==null||D.addEventListener("click",()=>Ci("top")),(H=document.getElementById("cam-macro"))==null||H.addEventListener("click",()=>Ci("macro")),(Q=document.getElementById("cam-cinematic"))==null||Q.addEventListener("click",()=>Ci("cinematic")),(F=document.getElementById("btn-add-keyframe"))==null||F.addEventListener("click",Tv),(R=document.getElementById("btn-clear-timeline"))==null||R.addEventListener("click",Ev),(N=document.getElementById("btn-play-timeline"))==null||N.addEventListener("click",()=>{window.customTimelinePlaying?ns():Cv()}),document.querySelectorAll(".preset-btn").forEach(A=>{A.addEventListener("click",z=>{const U=z.target.getAttribute("data-preset");Sv(U)})}),No();const _=document.getElementById("enable-links");_==null||_.addEventListener("change",A=>{Pn?Pn.visible=A.target.checked:A.target.checked&&ts()});const y=document.getElementById("link-color-mode");y==null||y.addEventListener("change",A=>{const z=A.target.value;let U=0;z==="match-particles"?U=0:z==="tint"?U=1:z==="depth-gradient"&&(U=2),ne.uLinkColorMode.value=U;const K=document.getElementById("link-tint-picker-wrapper");K&&(K.style.display=U===1?"flex":"none")});const b=document.getElementById("link-tint-color");b==null||b.addEventListener("input",A=>{ne.uLinkTintColor.value.set(A.target.value)}),No()}function su(a){if(!a.type.match("image.*")){alert("Please select a valid image file.");return}const e=new FileReader;e.onload=t=>{const n=new Image;n.onload=()=>{hl(n,a.name)},n.src=t.target.result},e.readAsDataURL(a)}hv();
