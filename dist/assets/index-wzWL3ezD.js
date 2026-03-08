(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Vo="176",Ku=0,_l=1,$u=2,zc=1,Hc=2,Un=3,ui=0,Xe=1,cn=2,ri=0,is=1,xl=2,vl=3,Sl=4,Zu=5,bi=100,ju=101,Ju=102,Qu=103,th=104,eh=200,nh=201,ih=202,sh=203,Ka=204,$a=205,rh=206,ah=207,oh=208,lh=209,ch=210,uh=211,hh=212,fh=213,dh=214,Za=0,ja=1,Ja=2,as=3,Qa=4,to=5,eo=6,no=7,Wo=0,ph=1,mh=2,ai=0,gh=1,_h=2,xh=3,vh=4,Sh=5,Mh=6,Eh=7,Gc=300,os=301,ls=302,io=303,so=304,Jr=306,ro=1e3,Bn=1001,ao=1002,en=1003,yh=1004,bh=1004,Vs=1005,Qe=1006,oa=1007,Ri=1008,Tn=1009,Vc=1010,Wc=1011,Ds=1012,Xo=1013,Ii=1014,kn=1015,Fs=1016,Yo=1017,qo=1018,Ls=1020,Xc=35902,Yc=1021,qc=1022,Sn=1023,Ns=1026,Us=1027,Kc=1028,Ko=1029,$c=1030,$o=1031,Zo=1033,Ir=33776,Pr=33777,Dr=33778,Lr=33779,oo=35840,lo=35841,co=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,xo=37811,vo=37812,So=37813,Mo=37814,Eo=37815,yo=37816,bo=37817,Ao=37818,To=37819,wo=37820,Ro=37821,Nr=36492,Co=36494,Io=36495,Zc=36283,Po=36284,Do=36285,Lo=36286,Ah=3200,Th=3201,jc=0,wh=1,ni="",ze="srgb",cs="srgb-linear",Hr="linear",re="srgb",Ni=7680,Ml=519,Rh=512,Ch=513,Ih=514,Jc=515,Ph=516,Dh=517,Lh=518,Nh=519,No=35044,El="300 es",zn=2e3,Gr=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,Uo=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Uh(i,t){return(i%t+t)%t}function la(i,t,e){return(1-e)*i+e*t}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],A=s[1],b=s[4],M=s[7],I=s[2],C=s[5],R=s[8];return r[0]=a*x+o*A+l*I,r[3]=a*m+o*b+l*C,r[6]=a*d+o*M+l*R,r[1]=c*x+u*A+h*I,r[4]=c*m+u*b+h*C,r[7]=c*d+u*M+h*R,r[2]=f*x+p*A+g*I,r[5]=f*m+p*b+g*C,r[8]=f*d+p*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Bt;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){const i=Vr("canvas");return i.style.display="block",i}const yl={};function Or(i){i in yl||(yl[i]=!0,console.warn(i))}function Fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zh(){const i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Hr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:bl,fromXYZ:Al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:re,toXYZ:bl,fromXYZ:Al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const Qt=zh();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Hh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=Vr("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gh=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ua(s[a].image)):r.push(ua(s[a]))}else r=ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vh=0;class He extends fs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Bn,s=Bn,r=Qe,a=Ri,o=Sn,l=Tn,c=He.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=oi(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Gc;He.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(p+1)/2,I=(d+1)/2,C=(u+f)/4,R=(h+x)/4,L=(g+m)/4;return b>M&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=R/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=L/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*x,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const I=Math.sqrt(b),C=Math.atan2(I,d*A);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const M=o*A;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+x*M,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new T,Tl=new Bs;class ks{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Xs.subVectors(this.max,ms),Oi.subVectors(t.a,ms),Fi.subVectors(t.b,ms),Bi.subVectors(t.c,ms),Vn.subVectors(Fi,Oi),Wn.subVectors(Bi,Fi),pi.subVectors(Oi,Bi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-pi.z,pi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,pi.z,0,-pi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-pi.y,pi.x,0];return!fa(e,Oi,Fi,Bi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,Oi,Fi,Bi,Xs))?!1:(Ys.crossVectors(Vn,Wn),e=[Ys.x,Ys.y,Ys.z],fa(e,Oi,Fi,Bi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new T,new T,new T,new T,new T,new T,new T,new T],gn=new T,Ws=new ks,Oi=new T,Fi=new T,Bi=new T,Vn=new T,Wn=new T,pi=new T,ms=new T,Xs=new T,Ys=new T,mi=new T;function fa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yh=new ks,gs=new T,da=new T;class Qr{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(da)),this.expandByPoint(gs.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new T,pa=new T,qs=new T,Xn=new T,ma=new T,Ks=new T,ga=new T;class Jo{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=Xn.dot(this.direction),l=-Xn.dot(qs),c=Xn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pa).addScaledVector(qs,f),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),Ks.subVectors(n,t),ga.crossVectors(ma,Ks);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Ks.crossVectors(Xn,Ks));if(l<0)return null;const c=o*this.direction.dot(ma.cross(Xn));if(c<0||l+c>a)return null;const u=-o*Xn.dot(ga);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,a,o,l,c,u,h,f,p,g,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Kh)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Yn.crossVectors(n,$e),Yn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Yn.crossVectors(n,$e)),Yn.normalize(),$s.crossVectors($e,Yn),s[0]=Yn.x,s[4]=$s.x,s[8]=$e.x,s[1]=Yn.y,s[5]=$s.y,s[9]=$e.y,s[2]=Yn.z,s[6]=$s.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],A=n[3],b=n[7],M=n[11],I=n[15],C=s[0],R=s[4],L=s[8],y=s[12],S=s[1],P=s[5],H=s[9],B=s[13],X=s[2],Y=s[6],W=s[10],j=s[14],G=s[3],rt=s[7],ft=s[11],Et=s[15];return r[0]=a*C+o*S+l*X+c*G,r[4]=a*R+o*P+l*Y+c*rt,r[8]=a*L+o*H+l*W+c*ft,r[12]=a*y+o*B+l*j+c*Et,r[1]=u*C+h*S+f*X+p*G,r[5]=u*R+h*P+f*Y+p*rt,r[9]=u*L+h*H+f*W+p*ft,r[13]=u*y+h*B+f*j+p*Et,r[2]=g*C+x*S+m*X+d*G,r[6]=g*R+x*P+m*Y+d*rt,r[10]=g*L+x*H+m*W+d*ft,r[14]=g*y+x*B+m*j+d*Et,r[3]=A*C+b*S+M*X+I*G,r[7]=A*R+b*P+M*Y+I*rt,r[11]=A*L+b*H+M*W+I*ft,r[15]=A*y+b*B+M*j+I*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],A=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,M=u*x*c-g*h*c+g*o*p-a*x*p-u*o*d+a*h*d,I=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,C=e*A+n*b+s*M+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=A*R,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*R,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*R,t[4]=b*R,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=M*R,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*d-e*h*d)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*R,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*R,t[12]=I*R,t[13]=(u*x*s-g*h*s+g*n*f-e*x*f-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=o*h,A=l*c,b=l*u,M=l*h,I=n.x,C=n.y,R=n.z;return s[0]=(1-(x+d))*I,s[1]=(p+M)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(f+d))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+b)*R,s[9]=(m-A)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const c=1/r,u=1/a,h=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,p=(n+s)*u;let g,x;if(o===zn)g=(a+r)*h,x=-2*h;else if(o===Gr)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new T,_n=new ue,qh=new T(0,0,0),Kh=new T(1,1,1),Yn=new T,$s=new T,$e=new T,wl=new ue,Rl=new Bs;class Gt{constructor(t=0,e=0,n=0,s=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $h=0;const Cl=new T,zi=new Bs,In=new ue,Zs=new T,_s=new T,Zh=new T,jh=new Bs,Il=new T(1,0,0),Pl=new T(0,1,0),Dl=new T(0,0,1),Ll={type:"added"},Jh={type:"removed"},Hi={type:"childadded",child:null},_a={type:"childremoved",child:null};class Ie extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new T,e=new Gt,n=new Bs,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Bt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(_s,Zs,this.up):In.lookAt(Zs,_s,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(In),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new T(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new T,Pn=new T,xa=new T,Dn=new T,Gi=new T,Vi=new T,Nl=new T,va=new T,Sa=new T,Ma=new T,Ea=new ge,ya=new ge,ba=new ge;class Je{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Pn.subVectors(n,e),xa.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Pn),l=xn.dot(xa),c=Pn.dot(Pn),u=Pn.dot(xa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ea.setScalar(0),ya.setScalar(0),ba.setScalar(0),Ea.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ea,r.x),a.addScaledVector(ya,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Pn.subVectors(t,e),xn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),xn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Vi.subVectors(r,n),va.subVectors(t,n);const l=Gi.dot(va),c=Vi.dot(va);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);const u=Gi.dot(Sa),h=Vi.dot(Sa);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gi,a);Ma.subVectors(t,r);const p=Gi.dot(Ma),g=Vi.dot(Ma);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Vi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Nl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Nl,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},js={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Uh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Qt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Yt(Ue.r*255,0,255))*65536+Math.round(Yt(Ue.g*255,0,255))*256+Math.round(Yt(Ue.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ze){Qt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(js);const n=la(qn.h,js.h,e),s=la(qn.s,js.s,e),r=la(qn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Wt;Wt.NAMES=eu;let Qh=0;class Di extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=is,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new T,Js=new Ht;let tf=0;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class nu extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class iu extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const on=new ue,Ta=new Ie,Wi=new T,Ze=new ks,xs=new ks,Ae=new T;class qe extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ze.min,xs.min),Ze.expandByPoint(Ae),Ae.addVectors(Ze.max,xs.max),Ze.expandByPoint(Ae)):(Ze.expandByPoint(xs.min),Ze.expandByPoint(xs.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ae.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ae.add(Wi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;const c=new T,u=new T,h=new T,f=new Ht,p=new Ht,g=new Ht,x=new T,m=new T;function d(L,y,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[L].add(x),o[y].add(x),o[S].add(x),l[L].add(m),l[y].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,y=A.length;L<y;++L){const S=A[L],P=S.start,H=S.count;for(let B=P,X=P+H;B<X;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new T,M=new T,I=new T,C=new T;function R(L){I.fromBufferAttribute(s,L),C.copy(I);const y=o[L];b.copy(y),b.sub(I.multiplyScalar(I.dot(y))).normalize(),M.crossVectors(C,y);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,y=A.length;L<y;++L){const S=A[L],P=S.start,H=S.count;for(let B=P,X=P+H;B<X;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,u=new T,h=new T;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new ue,gi=new Jo,Qs=new Qr,Ol=new T,tr=new T,er=new T,nr=new T,wa=new T,ir=new T,Fl=new T,sr=new T;class ve extends Ie{constructor(t=new qe,e=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(wa.fromBufferAttribute(h,t),a?ir.addScaledVector(wa,u):ir.addScaledVector(wa.sub(e),u))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Qs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Qs,Ol)===null||gi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Ul.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,I=b;M<I;M+=3){const C=o.getX(M),R=o.getX(M+1),L=o.getX(M+2);s=rr(this,d,t,n,c,u,h,C,R,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=rr(this,a,t,n,c,u,h,A,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,I=b;M<I;M+=3){const C=M,R=M+1,L=M+2;s=rr(this,d,t,n,c,u,h,C,R,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=m,b=m+1,M=m+2;s=rr(this,a,t,n,c,u,h,A,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function nf(i,t,e,n,s,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);const u=nf(i,t,e,n,tr,er,nr,Fl);if(u){const h=new T;Je.getBarycoord(Fl,tr,er,nr,h),s&&(u.uv=Je.getInterpolatedAttribute(s,o,l,c,h,new Ht)),r&&(u.uv1=Je.getInterpolatedAttribute(r,o,l,c,h,new Ht)),a&&(u.normal=Je.getInterpolatedAttribute(a,o,l,c,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new T,materialIndex:0};Je.getNormal(tr,er,nr,f.normal),u.face=f,u.barycoord=h}return u}class En extends qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function g(x,m,d,A,b,M,I,C,R,L,y){const S=M/R,P=I/L,H=M/2,B=I/2,X=C/2,Y=R+1,W=L+1;let j=0,G=0;const rt=new T;for(let ft=0;ft<W;ft++){const Et=ft*P-B;for(let Ct=0;Ct<Y;Ct++){const se=Ct*S-H;rt[x]=se*A,rt[m]=Et*b,rt[d]=X,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[d]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Ct/R),h.push(1-ft/L),j+=1}}for(let ft=0;ft<L;ft++)for(let Et=0;Et<R;Et++){const Ct=f+Et+Y*ft,se=f+Et+Y*(ft+1),K=f+(Et+1)+Y*(ft+1),it=f+(Et+1)+Y*ft;l.push(Ct,se,it),l.push(se,K,it),G+=6}o.addGroup(p,G,y),p+=G,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const rf={clone:hs,merge:ke};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new T,Bl=new Ht,kl=new Ht;class ln extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,kl),e.subVectors(kl,Bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,Yi=1;class lf extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Xi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new ln(Xi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new ln(Xi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new ln(Xi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new ln(Xi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new ln(Xi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class au extends He{constructor(t=[],e=os,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new au(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:ri});r.uniforms.tEquirect.value=e;const a=new ve(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Qe),new lf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class tn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hf extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ff{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new T;class Wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class el extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const vs=new T,Ki=new T,$i=new T,Zi=new Ht,Ss=new Ht,ou=new ue,ar=new T,Ms=new T,or=new T,zl=new Ht,Ca=new Ht,Hl=new Ht;class lu extends Ie{constructor(t=new el){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ff(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Wr(n,3,0,!1)),qi.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;lr(ar.set(-.5,-.5,0),$i,a,Ki,s,r),lr(Ms.set(.5,-.5,0),$i,a,Ki,s,r),lr(or.set(.5,.5,0),$i,a,Ki,s,r),zl.set(0,0),Ca.set(1,0),Hl.set(1,1);let o=t.ray.intersectTriangle(ar,Ms,or,!1,vs);if(o===null&&(lr(Ms.set(-.5,.5,0),$i,a,Ki,s,r),Ca.set(0,1),o=t.ray.intersectTriangle(ar,or,Ms,!1,vs),o===null))return;const l=t.ray.origin.distanceTo(vs);l<t.near||l>t.far||e.push({distance:l,point:vs.clone(),uv:Je.getInterpolation(vs,ar,Ms,or,zl,Ca,Hl,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lr(i,t,e,n,s,r){Zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Zi.x-s*Zi.y,Ss.y=s*Zi.x+r*Zi.y):Ss.copy(Zi),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(ou)}const Ia=new T,df=new T,pf=new Bt;class Si{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pf.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Qr,cr=new T;class nl{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],A=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-d).normalize(),n[1].setComponents(l+r,f+c,m+p,M+d).normalize(),n[2].setComponents(l+a,f+u,m+g,M+A).normalize(),n[3].setComponents(l-a,f-u,m-g,M-A).normalize(),n[4].setComponents(l-o,f-h,m-x,M-b).normalize(),e===zn)n[5].setComponents(l+o,f+h,m+x,M+b).normalize();else if(e===Gr)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cu extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xr=new T,Yr=new T,Gl=new ue,Es=new Jo,ur=new Qr,Pa=new T,Vl=new T;class mf extends Ie{constructor(t=new qe,e=new cu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xr.fromBufferAttribute(e,s-1),Yr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(Yr);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,t.ray.intersectsSphere(ur)===!1)return;Gl.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=u.getX(x),A=u.getX(x+1),b=hr(this,t,Es,l,d,A,x);b&&e.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=hr(this,t,Es,l,x,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=hr(this,t,Es,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=hr(this,t,Es,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),e.distanceSqToSegment(Xr,Yr,Pa,Vl)>n)return;Pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:Vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Wl=new T,Xl=new T;class gf extends mf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Wl.fromBufferAttribute(e,s),Xl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wl.distanceTo(Xl);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ta extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uu extends He{constructor(t,e,n=Ii,s,r,a,o=en,l=en,c,u=Ns){if(u!==Ns&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zs extends qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;A(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function A(){const M=new T,I=new T;let C=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const y=[],S=L/r,P=S*(e-t)+t;for(let H=0;H<=s;H++){const B=H/s,X=B*l+o,Y=Math.sin(X),W=Math.cos(X);I.x=P*Y,I.y=-S*n+m,I.z=P*W,h.push(I.x,I.y,I.z),M.set(Y,R,W).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-S),y.push(g++)}x.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const S=x[y][L],P=x[y+1][L],H=x[y+1][L+1],B=x[y][L+1];(t>0||y!==0)&&(u.push(S,P,B),C+=3),(e>0||y!==r-1)&&(u.push(P,H,B),C+=3)}c.addGroup(d,C,0),d+=C}function b(M){const I=g,C=new Ht,R=new T;let L=0;const y=M===!0?t:e,S=M===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let H=0;H<=s;H++){const X=H/s*l+o,Y=Math.cos(X),W=Math.sin(X);R.x=y*W,R.y=m*S,R.z=y*Y,h.push(R.x,R.y,R.z),f.push(0,S,0),C.x=Y*.5+.5,C.y=W*.5*S+.5,p.push(C.x,C.y),g++}for(let H=0;H<s;H++){const B=I+H,X=P+H;M===!0?u.push(X,X+1,B):u.push(X+1,X,B),L+=3}c.addGroup(d,L,M===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends zs{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new il(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const fr=new T,dr=new T,Da=new T,pr=new Je;class _f extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ur*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:d}=pr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),pr.getNormal(Da),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const b=(A+1)%3,M=h[A],I=h[b],C=pr[u[A]],R=pr[u[b]],L=`${M}_${I}`,y=`${I}_${M}`;y in f&&f[y]?(Da.dot(f[y].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(R.x,R.y,R.z)),f[y]=null):L in f||(f[L]={index0:c[A],index1:c[b],normal:Da.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:m}=f[g];fr.fromBufferAttribute(o,x),dr.fromBufferAttribute(o,m),p.push(fr.x,fr.y,fr.z),p.push(dr.x,dr.y,dr.z)}this.setAttribute("position",new de(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ea extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*f-a;for(let b=0;b<c;b++){const M=b*h-r;g.push(M,-A,0),x.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const b=A+c*d,M=A+c*(d+1),I=A+1+c*(d+1),C=A+1+c*d;p.push(b,M,C),p.push(M,I,C)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.widthSegments,t.heightSegments)}}class sl extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new T,g=new Ht;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const A=d+m,b=A,M=A+n+1,I=A+n+2,C=A+1;o.push(b,M,C),o.push(M,I,C)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qr extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new T,f=new T,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const A=[],b=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const C=I/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(C+M,1-b),A.push(c++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){const b=u[d][A+1],M=u[d][A],I=u[d+1][A],C=u[d+1][A+1];(d!==0||a>0)&&p.push(b,M,C),(d!==n-1||l<Math.PI)&&p.push(M,I,C)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class li extends Di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xf extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vf extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hu extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const La=new ue,Yl=new T,ql=new T;class Sf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fu extends ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mf extends Sf{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends hu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yf extends hu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class bf extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Kl=new ue;class Af{constructor(t,e,n=0,s=1/0){this.ray=new Jo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(t,e=!0,n=[]){return Oo(t,this,n,e),n.sort($l),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oo(t[s],this,n,e);return n.sort($l),n}}function $l(i,t){return i.distance-t.distance}function Oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Oo(r[a],t,e,!0)}}function Zl(i,t,e,n){const s=Tf(n);switch(e){case Yc:return i*t;case Kc:return i*t/s.components*s.byteLength;case Ko:return i*t/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Zo:return i*t*4/s.components*s.byteLength;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Co:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zc:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tf(i){switch(i){case Tn:case Vc:return{byteLength:1,components:1};case Ds:case Wc:case Fs:return{byteLength:2,components:1};case Yo:case qo:return{byteLength:2,components:4};case Ii:case Xo:case kn:return{byteLength:4,components:1};case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function du(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Op=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Wp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yp=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Zp=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Rf,alphahash_pars_fragment:Cf,alphamap_fragment:If,alphamap_pars_fragment:Pf,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:Nf,aomap_pars_fragment:Uf,batching_pars_vertex:Of,batching_vertex:Ff,begin_vertex:Bf,beginnormal_vertex:kf,bsdfs:zf,iridescence_fragment:Hf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:Yf,color_fragment:qf,color_pars_fragment:Kf,color_pars_vertex:$f,color_vertex:Zf,common:jf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Sd,envmap_vertex:ud,fog_vertex:hd,fog_pars_vertex:fd,fog_fragment:dd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:vd,lights_toon_fragment:Md,lights_toon_pars_fragment:Ed,lights_phong_fragment:yd,lights_phong_pars_fragment:bd,lights_physical_fragment:Ad,lights_physical_pars_fragment:Td,lights_fragment_begin:wd,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ld,map_fragment:Nd,map_pars_fragment:Ud,map_particle_fragment:Od,map_particle_pars_fragment:Fd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:kd,morphinstance_vertex:zd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:Yd,normal_pars_fragment:qd,normal_pars_vertex:Kd,normal_vertex:$d,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:up,shadowmap_vertex:hp,shadowmask_pars_fragment:fp,skinbase_vertex:dp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:xp,tonemapping_fragment:vp,tonemapping_pars_fragment:Sp,transmission_fragment:Mp,transmission_pars_fragment:Ep,uv_pars_fragment:yp,uv_pars_vertex:bp,uv_vertex:Ap,worldpos_vertex:Tp,background_vert:wp,background_frag:Rp,backgroundCube_vert:Cp,backgroundCube_frag:Ip,cube_vert:Pp,cube_frag:Dp,depth_vert:Lp,depth_frag:Np,distanceRGBA_vert:Up,distanceRGBA_frag:Op,equirect_vert:Fp,equirect_frag:Bp,linedashed_vert:kp,linedashed_frag:zp,meshbasic_vert:Hp,meshbasic_frag:Gp,meshlambert_vert:Vp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:Yp,meshnormal_vert:qp,meshnormal_frag:Kp,meshphong_vert:$p,meshphong_frag:Zp,meshphysical_vert:jp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:tm,points_vert:em,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:rm,sprite_frag:am},st={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},bn={basic:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([st.common,st.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([st.lights,st.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};bn.physical={uniforms:ke([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const mr={r:0,b:0,g:0},xi=new Gt,om=new ue;function lm(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const I=g(b);I===null?d(o,l):I&&I.isColor&&(d(I,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const I=g(M);I&&(I.isCubeTexture||I.mapping===Jr)?(u===void 0&&(u=new ve(new En(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:hs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(M.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(xi)),u.material.toneMapped=Qt.getTransfer(I.colorSpace)!==re,(h!==I||f!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ve(new ea(2,2),new hi({name:"BackgroundMaterial",uniforms:hs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(I.colorSpace)!==re,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(mr,su(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,M,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:x,addToRenderList:m,dispose:A}}function cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,P,H,B,X){let Y=!1;const W=h(B,H,P);r!==W&&(r=W,c(r.object)),Y=p(S,B,H,X),Y&&g(S,B,H,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(S,P,H,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,H){const B=H.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Y=X[P.id];Y===void 0&&(Y={},X[P.id]=Y);let W=Y[B];return W===void 0&&(W=f(l()),Y[B]=W),W}function f(S){const P=[],H=[],B=[];for(let X=0;X<e;X++)P[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,P,H,B){const X=r.attributes,Y=P.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){const ft=X[G];let Et=Y[G];if(Et===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),ft===void 0||ft.attribute!==Et||Et&&ft.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,P,H,B){const X={},Y=P.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){let ft=Y[G];ft===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const Et={};Et.attribute=ft,ft&&ft.data&&(Et.data=ft.data),X[G]=Et,W++}r.attributes=X,r.attributesNum=W,r.index=B}function x(){const S=r.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const H=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;H[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),X[S]!==P&&(i.vertexAttribDivisor(S,P),X[S]=P)}function A(){const S=r.newAttributes,P=r.enabledAttributes;for(let H=0,B=P.length;H<B;H++)P[H]!==S[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function b(S,P,H,B,X,Y,W){W===!0?i.vertexAttribIPointer(S,P,H,X,Y):i.vertexAttribPointer(S,P,H,B,X,Y)}function M(S,P,H,B){x();const X=B.attributes,Y=H.getAttributes(),W=P.defaultAttributeValues;for(const j in Y){const G=Y[j];if(G.location>=0){let rt=X[j];if(rt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const ft=rt.normalized,Et=rt.itemSize,Ct=t.get(rt);if(Ct===void 0)continue;const se=Ct.buffer,K=Ct.type,it=Ct.bytesPerElement,_t=K===i.INT||K===i.UNSIGNED_INT||rt.gpuType===Xo;if(rt.isInterleavedBufferAttribute){const ot=rt.data,wt=ot.stride,te=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)d(G.location+Dt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)m(G.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Dt=0;Dt<G.locationSize;Dt++)b(G.location+Dt,Et/G.locationSize,K,ft,wt*it,(te+Et/G.locationSize*Dt)*it,_t)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)d(G.location+ot,rt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ot=0;ot<G.locationSize;ot++)b(G.location+ot,Et/G.locationSize,K,ft,Et*it,Et/G.locationSize*ot*it,_t)}}else if(W!==void 0){const ft=W[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}A()}function I(){L();for(const S in n){const P=n[S];for(const H in P){const B=P[H];for(const X in B)u(B[X].object),delete B[X];delete P[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const H in P){const B=P[H];for(const X in B)u(B[X].object),delete B[X];delete P[H]}delete n[S.id]}function R(S){for(const P in n){const H=n[P];if(H[S.id]===void 0)continue;const B=H[S.id];for(const X in B)u(B[X].object),delete B[X];delete H[S.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function um(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:I,maxSamples:C}}function fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Si,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,b=A*4;let M=d.clippingState||null;l.value=M,M=u(g,f,b,p);for(let I=0;I!==b;++I)M[I]=e[I];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==x;++b,M+=4)a.copy(h[b]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function dm(i){let t=new WeakMap;function e(a,o){return o===io?a.mapping=os:o===so&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===io||o===so)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ts=4,jl=[.125,.215,.35,.446,.526,.582],Ai=20,Na=new fu,Jl=new Wt;let Ua=null,Oa=0,Fa=0,Ba=!1;const Mi=(1+Math.sqrt(5))/2,ji=1/Mi,Ql=[new T(-Mi,ji,0),new T(Mi,ji,0),new T(-ji,0,Mi),new T(ji,0,Mi),new T(0,Mi,-ji),new T(0,Mi,ji),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],pm=new T;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=pm}=r;Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Oa,Fa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Fs,format:Sn,colorSpace:cs,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s,r){const l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Jl),h.toneMapping=ai,h.autoClear=!1;const g=new us({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),x=new ve(new En,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(Jl),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const M=this._cubeSize;gr(s,b*M,A>2?M:0,M,M),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(s-r-1)%Ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ve(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const d=[];let A=0;for(let R=0;R<Ai;++R){const L=R/x,y=Math.exp(-L*L/2);d.push(y),R===0?A+=y:R<m&&(A+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[s],I=3*M*(s>b-ts?s-b+ts:0),C=4*(this._cubeSize-M);gr(e,I,C,3*M,2*M),l.setRenderTarget(e),l.render(h,Na)}}function mm(i){const t=[],e=[],n=[];let s=i;const r=i-ts+1+jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ts?l=jl[a-i+ts-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),b=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,L=C>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];A.set(y,x*g*C),b.set(f,m*g*C);const S=[C,C,C,C,C,C];M.set(S,d*g*C)}const I=new qe;I.setAttribute("position",new Mn(A,x)),I.setAttribute("uv",new Mn(b,m)),I.setAttribute("faceIndex",new Mn(M,d)),t.push(I),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(Ai),s=new T(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ic(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===io||l===so,u=l===os||l===ls;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new tc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new tc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let b=0,M=A.length;b<M;b+=3){const I=A[b+0],C=A[b+1],R=A[b+2];f.push(I,C,C,R,R,I)}}else if(g!==void 0){const A=g.array;x=g.version;for(let b=0,M=A.length/3-1;b<M;b+=3){const I=b+0,C=b+1,R=b+2;f.push(I,C,C,R,R,I)}}else return;const m=new(Qc(f)?iu:nu)(f,1);m.version=x;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Sm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let I=o.attributes.position.count*M,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*C*4*h),L=new tu(R,I,C,h);L.type=kn,L.needsUpdate=!0;const y=M*4;for(let P=0;P<h;P++){const H=d[P],B=A[P],X=b[P],Y=I*C*4*P;for(let W=0;W<H.count;W++){const j=W*y;g===!0&&(s.fromBufferAttribute(H,W),R[Y+j+0]=s.x,R[Y+j+1]=s.y,R[Y+j+2]=s.z,R[Y+j+3]=0),x===!0&&(s.fromBufferAttribute(B,W),R[Y+j+4]=s.x,R[Y+j+5]=s.y,R[Y+j+6]=s.z,R[Y+j+7]=0),m===!0&&(s.fromBufferAttribute(X,W),R[Y+j+8]=s.x,R[Y+j+9]=s.y,R[Y+j+10]=s.z,R[Y+j+11]=X.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new Ht(I,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ym(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const pu=new He,sc=new uu(1,1),mu=new tu,gu=new Xh,_u=new au,rc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),be(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;lc.set(n),i.uniformMatrix3fv(this.addr,!1,lc),be(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),be(e,n)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=Jc,r=sc):r=pu,e.setTexture2D(t||r,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gu,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_u,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mu,s)}function Vm(i){switch(i){case 5126:return bm;case 35664:return Am;case 35665:return Tm;case 35666:return wm;case 35674:return Rm;case 35675:return Cm;case 35676:return Im;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Om;case 36295:return Fm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Qm(i,t){i.uniform3iv(this.addr,t)}function t0(i,t){i.uniform4iv(this.addr,t)}function e0(i,t){i.uniform1uiv(this.addr,t)}function n0(i,t){i.uniform2uiv(this.addr,t)}function i0(i,t){i.uniform3uiv(this.addr,t)}function s0(i,t){i.uniform4uiv(this.addr,t)}function r0(i,t,e){const n=this.cache,s=t.length,r=na(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pu,r[a])}function a0(i,t,e){const n=this.cache,s=t.length,r=na(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gu,r[a])}function o0(i,t,e){const n=this.cache,s=t.length,r=na(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||_u,r[a])}function l0(i,t,e){const n=this.cache,s=t.length,r=na(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mu,r[a])}function c0(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return Ym;case 35666:return qm;case 35674:return Km;case 35675:return $m;case 35676:return Zm;case 5124:case 35670:return jm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c0(e.type)}}class f0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function uc(i,t){i.seq.push(t),i.map[t.id]=t}function d0(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uc(e,c===void 0?new u0(o,i,t):new h0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new f0(o),uc(e,h)),e=h}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);d0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const p0=37297;let m0=0;function g0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fc=new Bt;function _0(i){Qt._getMatrix(fc,Qt.workingColorSpace,i);const t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+g0(i.getShaderSource(t),a)}else return s}function x0(i,t){const e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case gh:e="Linear";break;case _h:e="Reinhard";break;case xh:e="Cineon";break;case vh:e="ACESFilmic";break;case Mh:e="AgX";break;case Eh:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _r=new T;function S0(){Qt.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),t=_r.y.toFixed(4),e=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function E0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(b0,T0)}const A0=new Map;function T0(i,t){let e=zt[t];if(e===void 0){const n=A0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(w0,R0)}function R0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function D0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function L0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=C0(e),c=I0(e),u=P0(e),h=D0(e),f=L0(e),p=M0(e),g=E0(r),x=s.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),d.length>0&&(d+=`
`)):(m=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),d=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?zt.tonemapping_pars_fragment:"",e.toneMapping!==ai?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Fo(a),a=pc(a,e),a=mc(a,e),o=Fo(o),o=pc(o,e),o=mc(o,e),a=gc(a),o=gc(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+a,M=A+d+o,I=hc(s,s.VERTEX_SHADER,b),C=hc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,I),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(C).trim();let Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,C);else{const j=dc(s,I,"vertex"),G=dc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(I),s.deleteShader(C),L=new Fr(s,x),y=y0(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,p0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let U0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new F0(t),e.set(t,n)),n}}class F0{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}}function B0(i,t,e,n,s,r,a){const o=new Qo,l=new O0,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,H,B){const X=H.fog,Y=B.geometry,W=y.isMeshStandardMaterial?H.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=j&&j.mapping===Jr?j.image.height:null,rt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=ft!==void 0?ft.length:0;let Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let se,K,it,_t;if(rt){const ie=bn[rt];se=ie.vertexShader,K=ie.fragmentShader}else se=y.vertexShader,K=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const ot=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),te=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,_e=!!y.map,fe=!!y.matcap,qt=!!j,D=!!y.aoMap,sn=!!y.lightMap,Zt=!!y.bumpMap,Kt=!!y.normalMap,bt=!!y.displacementMap,ce=!!y.emissiveMap,yt=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,J=y.iridescence>0,q=y.sheen>0,vt=y.transmission>0,lt=v&&!!y.anisotropyMap,Rt=F&&!!y.clearcoatMap,It=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,pt=J&&!!y.iridescenceMap,Pt=J&&!!y.iridescenceThicknessMap,Nt=q&&!!y.sheenColorMap,mt=q&&!!y.sheenRoughnessMap,$t=!!y.specularMap,kt=!!y.specularColorMap,oe=!!y.specularIntensityMap,N=vt&&!!y.transmissionMap,ct=vt&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,ht=y.alphaTest>0,ut=!!y.alphaHash,Ft=!!y.extensions;let pe=ai;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Le={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:K,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:te,instancingColor:te&&B.instanceColor!==null,instancingMorph:te&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:cs,alphaToCoverage:!!y.alphaToCoverage,map:_e,matcap:fe,envMap:qt,envMapMode:qt&&j.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:sn,bumpMap:Zt,normalMap:Kt,displacementMap:f&&bt,emissiveMap:ce,normalMapObjectSpace:Kt&&y.normalMapType===wh,normalMapTangentSpace:Kt&&y.normalMapType===jc,metalnessMap:yt,roughnessMap:w,anisotropy:v,anisotropyMap:lt,clearcoat:F,clearcoatMap:Rt,clearcoatNormalMap:It,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:mt,specularMap:$t,specularColorMap:kt,specularIntensityMap:oe,transmission:vt,transmissionMap:N,thicknessMap:ct,gradientMap:V,opaque:y.transparent===!1&&y.blending===is&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ut,combine:y.combine,mapUv:_e&&x(y.map.channel),aoMapUv:D&&x(y.aoMap.channel),lightMapUv:sn&&x(y.lightMap.channel),bumpMapUv:Zt&&x(y.bumpMap.channel),normalMapUv:Kt&&x(y.normalMap.channel),displacementMapUv:bt&&x(y.displacementMap.channel),emissiveMapUv:ce&&x(y.emissiveMap.channel),metalnessMapUv:yt&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:lt&&x(y.anisotropyMap.channel),clearcoatMapUv:Rt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(y.sheenRoughnessMap.channel),specularMapUv:$t&&x(y.specularMap.channel),specularColorMapUv:kt&&x(y.specularColorMap.channel),specularIntensityMapUv:oe&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:ct&&x(y.thicknessMap.channel),alphaMapUv:Z&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(_e||Z),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:_e&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&y.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(A(S,y),b(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let P;if(S){const H=bn[S];P=rf.clone(H.uniforms)}else P=y.uniforms;return P}function I(y,S){let P;for(let H=0,B=u.length;H<B;H++){const X=u[H];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new N0(i,S,y,r),u.push(P)),P}function C(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:I,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:L}}function k0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function o(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||z0),n.length>1&&n.sort(f||xc),s.length>1&&s.sort(f||xc)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function H0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vc,i.set(n,[a])):s>=r.length?(a=new vc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function G0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Wt};break;case"SpotLight":e={position:new T,direction:new T,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function V0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let W0=0;function X0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y0(i){const t=new G0,e=V0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new ue,a=new ue;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,b=0,M=0,I=0,C=0,R=0;c.sort(X0);for(let y=0,S=c.length;y<S;y++){const P=c[y],H=P.color,B=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*B,h+=H.g*B,f+=H.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);R++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[x]=W;const j=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=j.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Y,M++}x++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==I||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=I,L.numLightProbes=R,n.version=W0++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Sc(i){const t=new Y0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function q0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`;function Z0(i,t,e){let n=new nl;const s=new Ht,r=new Ht,a=new ge,o=new xf({depthPacking:Th}),l=new vf,c={},u=e.maxTextureSize,h={[ui]:Xe,[Xe]:ui,[cn]:cn},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:K0,fragmentShader:$0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let d=this.type;this.render=function(C,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ri),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=d!==Un&&this.type===Un,X=d===Un&&this.type!==Un;for(let Y=0,W=C.length;Y<W;Y++){const j=C[Y],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const rt=G.getFrameExtents();if(s.multiply(rt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||B===!0||X===!0){const Et=this.type!==Un?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new Pi(s.x,s.y,Et),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ft=G.getViewportCount();for(let Et=0;Et<ft;Et++){const Ct=G.getViewport(Et);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),H.viewport(a),G.updateMatrices(j,Et),n=G.getFrustum(),M(R,L,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&A(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,P)};function A(C,R){const L=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,L,p,x,null)}function b(C,R,L,y){let S=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=S.uuid,B=R.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let Y=X[B];Y===void 0&&(Y=S.clone(),X[B]=Y,R.addEventListener("dispose",I)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Un?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=L}return S}function M(C,R,L,y,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const B=t.update(C),X=C.material;if(Array.isArray(X)){const Y=B.groups;for(let W=0,j=Y.length;W<j;W++){const G=Y[W],rt=X[G.materialIndex];if(rt&&rt.visible){const ft=b(C,rt,y,S);C.onBeforeShadow(i,C,R,L,B,ft,G),i.renderBufferDirect(L,null,B,ft,C,G),C.onAfterShadow(i,C,R,L,B,ft,G)}}}else if(X.visible){const Y=b(C,X,y,S);C.onBeforeShadow(i,C,R,L,B,Y,null),i.renderBufferDirect(L,null,B,Y,C,null),C.onAfterShadow(i,C,R,L,B,Y,null)}}const H=C.children;for(let B=0,X=H.length;B<X;B++)M(H[B],R,L,y,S)}function I(C){C.target.removeEventListener("dispose",I);for(const L in c){const y=c[L],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const j0={[Za]:ja,[Ja]:eo,[Qa]:no,[as]:to,[ja]:Za,[eo]:Ja,[no]:Qa,[to]:as};function J0(i,t){function e(){let N=!1;const ct=new ge;let V=null;const Z=new ge(0,0,0,0);return{setMask:function(ht){V!==ht&&!N&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){N=ht},setClear:function(ht,ut,Ft,pe,Le){Le===!0&&(ht*=pe,ut*=pe,Ft*=pe),ct.set(ht,ut,Ft,pe),Z.equals(ct)===!1&&(i.clearColor(ht,ut,Ft,pe),Z.copy(ct))},reset:function(){N=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,V=null,Z=null,ht=null;return{setReversed:function(ut){if(ct!==ut){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),ct=ut;const pe=ht;ht=null,this.setClear(pe)}},getReversed:function(){return ct},setTest:function(ut){ut?ot(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!N&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(ct&&(ut=j0[ut]),Z!==ut){switch(ut){case Za:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ut}},setLocked:function(ut){N=ut},setClear:function(ut){ht!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ht=ut)},reset:function(){N=!1,V=null,Z=null,ht=null,ct=!1}}}function s(){let N=!1,ct=null,V=null,Z=null,ht=null,ut=null,Ft=null,pe=null,Le=null;return{setTest:function(ie){N||(ie?ot(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!N&&(i.stencilMask(ie),ct=ie)},setFunc:function(ie,pn,wn){(V!==ie||Z!==pn||ht!==wn)&&(i.stencilFunc(ie,pn,wn),V=ie,Z=pn,ht=wn)},setOp:function(ie,pn,wn){(ut!==ie||Ft!==pn||pe!==wn)&&(i.stencilOp(ie,pn,wn),ut=ie,Ft=pn,pe=wn)},setLocked:function(ie){N=ie},setClear:function(ie){Le!==ie&&(i.clearStencil(ie),Le=ie)},reset:function(){N=!1,ct=null,V=null,Z=null,ht=null,ut=null,Ft=null,pe=null,Le=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,b=null,M=null,I=null,C=null,R=new Wt(0,0,0),L=0,y=!1,S=null,P=null,H=null,B=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let rt=null,ft={};const Et=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),se=new ge().fromArray(Et),K=new ge().fromArray(Ct);function it(N,ct,V,Z){const ht=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<V;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ct+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ut}const _t={};_t[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(as),Zt(!1),Kt(_l),ot(i.CULL_FACE),D(ri);function ot(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function wt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function te(N,ct){return h[N]!==ct?(i.bindFramebuffer(N,ct),h[N]=ct,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(N,ct){let V=p,Z=!1;if(N){V=f.get(ct),V===void 0&&(V=[],f.set(ct,V));const ht=N.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ft=ht.length;ut<Ft;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ht.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function _e(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const fe={[bi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};fe[Qu]=i.MIN,fe[th]=i.MAX;const qt={[eh]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[rh]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[ah]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ct,V,Z,ht,ut,Ft,pe,Le,ie){if(N===ri){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),N!==Zu){if(N!==m||ie!==y){if((d!==bi||M!==bi)&&(i.blendEquation(i.FUNC_ADD),d=bi,M=bi),ie)switch(N){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,I=null,C=null,R.set(0,0,0),L=0,m=N,y=ie}return}ht=ht||ct,ut=ut||V,Ft=Ft||Z,(ct!==d||ht!==M)&&(i.blendEquationSeparate(fe[ct],fe[ht]),d=ct,M=ht),(V!==A||Z!==b||ut!==I||Ft!==C)&&(i.blendFuncSeparate(qt[V],qt[Z],qt[ut],qt[Ft]),A=V,b=Z,I=ut,C=Ft),(pe.equals(R)===!1||Le!==L)&&(i.blendColor(pe.r,pe.g,pe.b,Le),R.copy(pe),L=Le),m=N,y=!1}function sn(N,ct){N.side===cn?wt(i.CULL_FACE):ot(i.CULL_FACE);let V=N.side===Xe;ct&&(V=!V),Zt(V),N.blending===is&&N.transparent===!1?D(ri):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;o.setTest(Z),Z&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function Kt(N){N!==Ku?(ot(i.CULL_FACE),N!==P&&(N===_l?i.cullFace(i.BACK):N===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),P=N}function bt(N){N!==H&&(W&&i.lineWidth(N),H=N)}function ce(N,ct,V){N?(ot(i.POLYGON_OFFSET_FILL),(B!==ct||X!==V)&&(i.polygonOffset(ct,V),B=ct,X=V)):wt(i.POLYGON_OFFSET_FILL)}function yt(N){N?ot(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+Y-1),rt!==N&&(i.activeTexture(N),rt=N)}function v(N,ct,V){V===void 0&&(rt===null?V=i.TEXTURE0+Y-1:V=rt);let Z=ft[V];Z===void 0&&(Z={type:void 0,texture:void 0},ft[V]=Z),(Z.type!==N||Z.texture!==ct)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(N,ct||_t[N]),Z.type=N,Z.texture=ct)}function F(){const N=ft[rt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(N){se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function mt(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function $t(N,ct){let V=c.get(ct);V===void 0&&(V=new WeakMap,c.set(ct,V));let Z=V.get(N);Z===void 0&&(Z=i.getUniformBlockIndex(ct,N.name),V.set(N,Z))}function kt(N,ct){const Z=c.get(ct).get(N);l.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,N.__bindingPointIndex),l.set(ct,Z))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,ft={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,b=null,M=null,I=null,C=null,R=new Wt(0,0,0),L=0,y=!1,S=null,P=null,H=null,B=null,X=null,se.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:wt,bindFramebuffer:te,drawBuffers:Dt,useProgram:_e,setBlending:D,setMaterial:sn,setFlipSided:Zt,setCullFace:Kt,setLineWidth:bt,setPolygonOffset:ce,setScissorTest:yt,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:kt,texStorage2D:It,texStorage3D:Q,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Rt,scissor:Nt,viewport:mt,reset:oe}}function Q0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Vr("canvas")}function x(w,v,F){let $=1;const J=yt(w);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*J.width),vt=Math.floor($*J.height);h===void 0&&(h=g(q,vt));const lt=v?g(q,vt):h;return lt.width=q,lt.height=vt,lt.getContext("2d").drawImage(w,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+vt+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,v,F,$,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const vt=J?Hr:Qt.getTransfer($);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=vt===re?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(w,v){let F;return w?v===null||v===Ii||v===Ls?F=i.DEPTH24_STENCIL8:v===kn?F=i.DEPTH32F_STENCIL8:v===Ds&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===Ls?F=i.DEPTH_COMPONENT24:v===kn?F=i.DEPTH_COMPONENT32F:v===Ds&&(F=i.DEPTH_COMPONENT16),F}function I(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&u.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),S(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,$=f.get(F);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(w),Object.keys($).length===0&&f.delete(F)}n.remove(w)}function y(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,$=f.get(F);delete $[v.__cacheKey],a.memory.textures--}function S(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let $=0,J=F.length;$<J;$++){const q=n.get(F[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(w)}let P=0;function H(){P=0}function B(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function X(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){const F=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,w,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function W(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){it(F,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const rt={[ro]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},ft={[en]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Et={[Rh]:i.NEVER,[Nh]:i.ALWAYS,[Ch]:i.LESS,[Jc]:i.LEQUAL,[Ih]:i.EQUAL,[Lh]:i.GEQUAL,[Ph]:i.GREATER,[Dh]:i.NOTEQUAL};function Ct(w,v){if(v.type===kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===oa||v.magFilter===Vs||v.magFilter===Ri||v.minFilter===Qe||v.minFilter===oa||v.minFilter===Vs||v.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Vs&&v.minFilter!==Ri||v.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const q=X(v);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[q].usedTimes++;const vt=J[w.__cacheKey];vt!==void 0&&(J[w.__cacheKey].usedTimes--,vt.usedTimes===0&&y(v)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return F}function K(w,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=se(w,v),q=v.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+F);const vt=n.get(q);if(q.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const lt=Qt.getPrimaries(Qt.workingColorSpace),Rt=v.colorSpace===ni?null:Qt.getPrimaries(v.colorSpace),It=v.colorSpace===ni||lt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Q=x(v.image,!1,s.maxTextureSize);Q=ce(v,Q);const pt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Nt=b(v.internalFormat,pt,Pt,v.colorSpace,v.isVideoTexture);Ct($,v);let mt;const $t=v.mipmaps,kt=v.isVideoTexture!==!0,oe=vt.__version===void 0||J===!0,N=q.dataReady,ct=I(v,Q);if(v.isDepthTexture)Nt=M(v.format===Us,v.type),oe&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Nt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Nt,Q.width,Q.height,0,pt,Pt,null));else if(v.isDataTexture)if($t.length>0){kt&&oe&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],kt?N&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,V,Nt,mt.width,mt.height,0,pt,Pt,mt.data);v.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,Q.width,Q.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Pt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,Q.width,Q.height,0,pt,Pt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Nt,$t[0].width,$t[0].height,Q.depth);for(let V=0,Z=$t.length;V<Z;V++)if(mt=$t[V],v.format!==Sn)if(pt!==null)if(kt){if(N)if(v.layerUpdates.size>0){const ht=Zl(mt.width,mt.height,v.format,v.type);for(const ut of v.layerUpdates){const Ft=mt.data.subarray(ut*ht/mt.data.BYTES_PER_ELEMENT,(ut+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,mt.width,mt.height,1,pt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Nt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,pt,Pt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Nt,mt.width,mt.height,Q.depth,0,pt,Pt,mt.data)}else{kt&&oe&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],v.format!==Sn?pt!==null?kt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Nt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,V,Nt,mt.width,mt.height,0,pt,Pt,mt.data)}else if(v.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Nt,Q.width,Q.height,Q.depth),N)if(v.layerUpdates.size>0){const V=Zl(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ht=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Pt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(v.isData3DTexture)kt?(oe&&e.texStorage3D(i.TEXTURE_3D,ct,Nt,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(v.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(i.TEXTURE_2D,ct,Nt,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let ht=0;ht<ct;ht++)e.texImage2D(i.TEXTURE_2D,ht,Nt,V,Z,0,pt,Pt,null),V>>=1,Z>>=1}}else if($t.length>0){if(kt&&oe){const V=yt($t[0]);e.texStorage2D(i.TEXTURE_2D,ct,Nt,V.width,V.height)}for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],kt?N&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt,Pt,mt):e.texImage2D(i.TEXTURE_2D,V,Nt,pt,Pt,mt);v.generateMipmaps=!1}else if(kt){if(oe){const V=yt(Q);e.texStorage2D(i.TEXTURE_2D,ct,Nt,V.width,V.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Pt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Nt,pt,Pt,Q);m(v)&&d($),vt.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function it(w,v,F){if(v.image.length!==6)return;const $=se(w,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const vt=Qt.getPrimaries(Qt.workingColorSpace),lt=v.colorSpace===ni?null:Qt.getPrimaries(v.colorSpace),Rt=v.colorSpace===ni||vt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!It&&!Q?pt[Z]=x(v.image[Z],!0,s.maxCubemapSize):pt[Z]=Q?v.image[Z].image:v.image[Z],pt[Z]=ce(v,pt[Z]);const Pt=pt[0],Nt=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),$t=b(v.internalFormat,Nt,mt,v.colorSpace),kt=v.isVideoTexture!==!0,oe=q.__version===void 0||$===!0,N=J.dataReady;let ct=I(v,Pt);Ct(i.TEXTURE_CUBE_MAP,v);let V;if(It){kt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){V=pt[Z].mipmaps;for(let ht=0;ht<V.length;ht++){const ut=V[ht];v.format!==Sn?Nt!==null?kt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,$t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Nt,mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,$t,ut.width,ut.height,0,Nt,mt,ut.data)}}}else{if(V=v.mipmaps,kt&&oe){V.length>0&&ct++;const Z=yt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Nt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,pt[Z].width,pt[Z].height,0,Nt,mt,pt[Z].data);for(let ht=0;ht<V.length;ht++){const Ft=V[ht].image[Z].image;kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Ft.width,Ft.height,Nt,mt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,$t,Ft.width,Ft.height,0,Nt,mt,Ft.data)}}else{kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,Nt,mt,pt[Z]);for(let ht=0;ht<V.length;ht++){const ut=V[ht];kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Nt,mt,ut.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,$t,Nt,mt,ut.image[Z])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function _t(w,v,F,$,J,q){const vt=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),Rt=b(F.internalFormat,vt,lt,F.colorSpace),It=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!It.__hasExternalTextures){const pt=Math.max(1,v.width>>q),Pt=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Rt,pt,Pt,v.depth,0,vt,lt,null):e.texImage2D(J,q,Rt,pt,Pt,0,vt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,Zt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=M(v.stencilBuffer,J),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Zt(v);Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,w)}else{const $=v.textures;for(let J=0;J<$.length;J++){const q=$[J],vt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),Rt=b(q.internalFormat,vt,lt,q.colorSpace),It=Zt(v);F&&Kt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Rt,v.width,v.height):Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=$.__webglTexture,q=Zt(v);if(v.depthTexture.format===Ns)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Us)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=w.texture.mipmaps;$&&$.length>0?wt(v.__webglFramebuffer[0],w):wt(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const $=w.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(w,v,F){const $=n.get(w);v!==void 0&&_t($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&te(w)}function _e(w){const v=w.texture,F=n.get(w),$=n.get(v);w.addEventListener("dispose",R);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)F.__webglFramebuffer[lt][Rt]=i.createFramebuffer()}else F.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)F.__webglFramebuffer[lt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let lt=0,Rt=J.length;lt<Rt;lt++){const It=n.get(J[lt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Kt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const Rt=J[lt];F.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const It=r.convert(Rt.format,Rt.colorSpace),Q=r.convert(Rt.type),pt=b(Rt.internalFormat,It,Q,Rt.colorSpace,w.isXRRenderTarget===!0),Pt=Zt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,pt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)_t(F.__webglFramebuffer[lt][Rt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt);else _t(F.__webglFramebuffer[lt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let lt=0,Rt=J.length;lt<Rt;lt++){const It=J[lt],Q=n.get(It);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ct(i.TEXTURE_2D,It),_t(F.__webglFramebuffer,w,It,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(It)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Ct(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)_t(F.__webglFramebuffer[Rt],w,v,i.COLOR_ATTACHMENT0,lt,Rt);else _t(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,lt,0);m(v)&&d(lt),e.unbindTexture()}w.depthBuffer&&te(w)}function fe(w){const v=w.textures;for(let F=0,$=v.length;F<$;F++){const J=v[F];if(m(J)){const q=A(w),vt=n.get(J).__webglTexture;e.bindTexture(q,vt),d(q),e.unbindTexture()}}}const qt=[],D=[];function sn(w){if(w.samples>0){if(Kt(w)===!1){const v=w.textures,F=w.width,$=w.height;let J=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(w),lt=v.length>1;if(lt)for(let It=0;It<v.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let It=0;It<v.length;It++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[It]);const Q=n.get(v[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,J,i.NEAREST),l===!0&&(qt.length=0,D.length=0,qt.push(i.COLOR_ATTACHMENT0+It),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qt.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let It=0;It<v.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,vt.__webglColorRenderbuffer[It]);const Q=n.get(v[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Zt(w){return Math.min(s.maxSamples,w.samples)}function Kt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function ce(w,v){const F=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==cs&&F!==ni&&(Qt.getTransfer(F)===re?($!==Sn||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Dt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Kt}function tg(i,t){function e(n,s=ni){let r;const a=Qt.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===qc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Ir||n===Pr||n===Dr||n===Lr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===fo)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===xo||n===vo||n===So||n===Mo||n===Eo||n===yo||n===bo||n===Ao||n===To||n===wo||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Co||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===Po||n===Do||n===Lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hi({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sg extends fs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=new ig,m=e.getContextAttributes();let d=null,A=null;const b=[],M=[],I=new Ht;let C=null;const R=new ln;R.viewport=new ge;const L=new ln;L.viewport=new ge;const y=[R,L],S=new bf;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=b[K];return it===void 0&&(it=new Ra,b[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=b[K];return it===void 0&&(it=new Ra,b[K]=it),it.getGripSpace()},this.getHand=function(K){let it=b[K];return it===void 0&&(it=new Ra,b[K]=it),it.getHandSpace()};function B(K){const it=M.indexOf(K.inputSource);if(it===-1)return;const _t=b[it];_t!==void 0&&(_t.update(K.inputSource,K.frame,c||a),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const it=M[K];it!==null&&(M[K]=null,b[K].disconnect(it))}P=null,H=null,x.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,A=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,ot=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?Us:Ns,ot=m.stencil?Ls:Ii);const te={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(te),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Pi(f.textureWidth,f.textureHeight,{format:Sn,type:Tn,depthTexture:new uu(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Pi(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let it=0;it<K.removed.length;it++){const _t=K.removed[it],ot=M.indexOf(_t);ot>=0&&(M[ot]=null,b[ot].disconnect(_t))}for(let it=0;it<K.added.length;it++){const _t=K.added[it];let ot=M.indexOf(_t);if(ot===-1){for(let te=0;te<b.length;te++)if(te>=M.length){M.push(_t),ot=te;break}else if(M[te]===null){M[te]=_t,ot=te;break}if(ot===-1)break}const wt=b[ot];wt&&wt.connect(_t)}}const W=new T,j=new T;function G(K,it,_t){W.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ot=W.distanceTo(j),wt=it.projectionMatrix.elements,te=_t.projectionMatrix.elements,Dt=wt[14]/(wt[10]-1),_e=wt[14]/(wt[10]+1),fe=(wt[9]+1)/wt[5],qt=(wt[9]-1)/wt[5],D=(wt[8]-1)/wt[0],sn=(te[8]+1)/te[0],Zt=Dt*D,Kt=Dt*sn,bt=ot/(-D+sn),ce=bt*-D;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ce),K.translateZ(bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const yt=Dt+bt,w=_e+bt,v=Zt-ce,F=Kt+(ot-ce),$=fe*_e/w*yt,J=qt*_e/w*yt;K.projectionMatrix.makePerspective(v,F,$,J,yt,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,_t=K.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),S.near=L.near=R.near=it,S.far=L.far=R.far=_t,(P!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),R.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;const ot=K.parent,wt=S.cameras;rt(S,ot);for(let te=0;te<wt.length;te++)rt(wt[te],ot);wt.length===2?G(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),ft(K,S,ot)};function ft(K,it,_t){_t===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Uo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Et=null;function Ct(K,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let ot=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Dt=0;Dt<_t.length;Dt++){const _e=_t[Dt];let fe=null;if(p!==null)fe=p.getViewport(_e);else{const D=h.getViewSubImage(f,_e);fe=D.viewport,Dt===0&&(t.setRenderTargetTextures(A,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(A))}let qt=y[Dt];qt===void 0&&(qt=new ln,qt.layers.enable(Dt),qt.viewport=new ge,y[Dt]=qt),qt.matrix.fromArray(_e.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(_e.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(S.matrix.copy(qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(qt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Dt=h.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,s.renderState)}}for(let _t=0;_t<b.length;_t++){const ot=M[_t],wt=b[_t];ot!==null&&wt!==void 0&&wt.update(ot,it,c||a)}Et&&Et(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const se=new du;se.setAnimationLoop(Ct),this.setAnimationLoop=function(K){Et=K},this.dispose=function(){}}}const vi=new Gt,rg=new ue;function ag(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,su(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),b=A.envMap,M=A.envMapRotation;b&&(m.envMap.value=b,vi.copy(M),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(vi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function og(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const M=b.program;n.uniformBlockBinding(A,M)}function c(A,b){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const I=b.program;n.updateUBOMapping(A,I);const C=t.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function u(A){const b=h();A.__bindingPointIndex=b;const M=i.createBuffer(),I=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=s[A.id],M=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,R=M.length;C<R;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,S=L.length;y<S;y++){const P=L[y];if(p(P,C,y,I)===!0){const H=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],j=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,b,M,I){const C=A.value,R=b+"_"+M;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const L=I[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(A){const b=A.uniforms;let M=0;const I=16;for(let R=0,L=b.length;R<L;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,P=y.length;S<P;S++){const H=y[S],B=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Y=B.length;X<Y;X++){const W=B[X],j=x(W),G=M%I,rt=G%j.boundary,ft=G+rt;M+=rt,ft!==0&&I-ft<j.storage&&(M+=I-ft),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=j.storage}}}const C=M%I;return C>0&&(M+=I-C),A.__size=M,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class lg{constructor(t={}){const{canvas:e=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=ze;let C=0,R=0,L=null,y=-1,S=null;const P=new ge,H=new ge;let B=null;const X=new Wt(0);let Y=0,W=e.width,j=e.height,G=1,rt=null,ft=null;const Et=new ge(0,0,W,j),Ct=new ge(0,0,W,j);let se=!1;const K=new nl;let it=!1,_t=!1;const ot=new ue,wt=new ue,te=new T,Dt=new ge,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function qt(){return L===null?G:1}let D=n;function sn(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const U="webgl2";if(D=sn(U,E),D===null)throw sn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Zt,Kt,bt,ce,yt,w,v,F,$,J,q,vt,lt,Rt,It,Q,pt,Pt,Nt,mt,$t,kt,oe,N;function ct(){Zt=new xm(D),Zt.init(),kt=new tg(D,Zt),Kt=new hm(D,Zt,t,kt),bt=new J0(D,Zt),Kt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),ce=new Mm(D),yt=new k0,w=new Q0(D,Zt,bt,yt,Kt,kt,ce),v=new dm(M),F=new _m(M),$=new wf(D),oe=new cm(D,$),J=new vm(D,$,ce,oe),q=new ym(D,J,$,ce),Nt=new Em(D,Kt,w),Q=new fm(yt),vt=new B0(M,v,F,Zt,Kt,oe,Q),lt=new ag(M,yt),Rt=new H0,It=new q0(Zt),Pt=new lm(M,v,F,bt,q,p,l),pt=new Z0(M,q,Kt),N=new og(D,ce,Kt,bt),mt=new um(D,Zt,ce),$t=new Sm(D,Zt,ce),ce.programs=vt.programs,M.capabilities=Kt,M.extensions=Zt,M.properties=yt,M.renderLists=Rt,M.shadowMap=pt,M.state=bt,M.info=ce}ct();const V=new sg(M,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,j,!1))},this.getSize=function(E){return E.set(W,j)},this.setSize=function(E,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,j=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*G,j*G).floor()},this.setDrawingBufferSize=function(E,U,k){W=E,j=U,G=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,U,k,z){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,U,k,z),bt.viewport(P.copy(Et).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ct)},this.setScissor=function(E,U,k,z){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,U,k,z),bt.scissor(H.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){bt.setScissorTest(se=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,k=!0){let z=0;if(E){let O=!1;if(L!==null){const tt=L.texture.format;O=tt===Zo||tt===$o||tt===Ko}if(O){const tt=L.texture.type,at=tt===Tn||tt===Ii||tt===Ds||tt===Ls||tt===Yo||tt===qo,dt=Pt.getClearColor(),gt=Pt.getClearAlpha(),Ut=dt.r,Lt=dt.g,At=dt.b;at?(g[0]=Ut,g[1]=Lt,g[2]=At,g[3]=gt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ut,x[1]=Lt,x[2]=At,x[3]=gt,D.clearBufferiv(D.COLOR,0,x))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),k&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Pt.dispose(),Rt.dispose(),It.dispose(),yt.dispose(),v.dispose(),F.dispose(),q.dispose(),oe.dispose(),N.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",ul),V.removeEventListener("sessionend",hl),fi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=ce.autoReset,U=pt.enabled,k=pt.autoUpdate,z=pt.needsUpdate,O=pt.type;ct(),ce.autoReset=E,pt.enabled=U,pt.autoUpdate=k,pt.needsUpdate=z,pt.type=O}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ft(E){const U=E.target;U.removeEventListener("dispose",Ft),pe(U)}function pe(E){Le(E),yt.remove(E)}function Le(E){const U=yt.get(E).programs;U!==void 0&&(U.forEach(function(k){vt.releaseProgram(k)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,z,O,tt){U===null&&(U=_e);const at=O.isMesh&&O.matrixWorld.determinant()<0,dt=Gu(E,U,k,z,O);bt.setMaterial(z,at);let gt=k.index,Ut=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(k),gt===void 0)return;Ut=2}const Lt=k.drawRange,At=k.attributes.position;let jt=Lt.start*Ut,ee=(Lt.start+Lt.count)*Ut;tt!==null&&(jt=Math.max(jt,tt.start*Ut),ee=Math.min(ee,(tt.start+tt.count)*Ut)),gt!==null?(jt=Math.max(jt,0),ee=Math.min(ee,gt.count)):At!=null&&(jt=Math.max(jt,0),ee=Math.min(ee,At.count));const Se=ee-jt;if(Se<0||Se===1/0)return;oe.setup(O,z,dt,k,gt);let me,Jt=mt;if(gt!==null&&(me=$.get(gt),Jt=$t,Jt.setIndex(me)),O.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*qt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(O.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*qt()),O.isLineSegments?Jt.setMode(D.LINES):O.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else O.isPoints?Jt.setMode(D.POINTS):O.isSprite&&Jt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Tt=O._multiDrawStarts,Pe=O._multiDrawCounts,ne=O._multiDrawCount,mn=gt?$.get(gt).bytesPerElement:1,Li=yt.get(z).currentProgram.getUniforms();for(let Ke=0;Ke<ne;Ke++)Li.setValue(D,"_gl_DrawID",Ke),Jt.render(Tt[Ke]/mn,Pe[Ke])}else if(O.isInstancedMesh)Jt.renderInstances(jt,Se,O.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pe=Math.min(k.instanceCount,Tt);Jt.renderInstances(jt,Se,Pe)}else Jt.render(jt,Se)};function ie(E,U,k){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,Gs(E,U,k),E.side=ui,E.needsUpdate=!0,Gs(E,U,k),E.side=cn):Gs(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),d=It.get(k),d.init(U),b.push(d),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const z=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const tt=O.material;if(tt)if(Array.isArray(tt))for(let at=0;at<tt.length;at++){const dt=tt[at];ie(dt,k,O),z.add(dt)}else ie(tt,k,O),z.add(tt)}),d=b.pop(),z},this.compileAsync=function(E,U,k=null){const z=this.compile(E,U,k);return new Promise(O=>{function tt(){if(z.forEach(function(at){yt.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){O(E);return}setTimeout(tt,10)}Zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let pn=null;function wn(E){pn&&pn(E)}function ul(){fi.stop()}function hl(){fi.start()}const fi=new du;fi.setAnimationLoop(wn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){pn=E,V.setAnimationLoop(E),E===null?fi.stop():fi.start()},V.addEventListener("sessionstart",ul),V.addEventListener("sessionend",hl),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,U,L),d=It.get(E,b.length),d.init(U),b.push(d),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,it=Q.init(this.clippingPlanes,_t),m=Rt.get(E,A.length),m.init(),A.push(m),V.enabled===!0&&V.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&ra(tt,U,-1/0,M.sortObjects)}ra(E,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,ft),fe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,fe&&Pt.addToRenderList(m,E),this.info.render.frame++,it===!0&&Q.beginShadows();const k=d.state.shadowsArray;pt.render(k,E,U),it===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){const tt=U.cameras;if(O.length>0)for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];dl(z,O,E,gt)}fe&&Pt.render(E);for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];fl(m,E,gt,gt.viewport)}}else O.length>0&&dl(z,O,E,U),fe&&Pt.render(E),fl(m,E,U);L!==null&&R===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(M,E,U),oe.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],it===!0&&Q.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ra(E,U,k,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){z&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const at=q.update(E),dt=E.material;dt.visible&&m.push(E,at,dt,k,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const at=q.update(E),dt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Dt.copy(at.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(dt)){const gt=at.groups;for(let Ut=0,Lt=gt.length;Ut<Lt;Ut++){const At=gt[Ut],jt=dt[At.materialIndex];jt&&jt.visible&&m.push(E,at,jt,k,Dt.z,At)}}else dt.visible&&m.push(E,at,dt,k,Dt.z,null)}}const tt=E.children;for(let at=0,dt=tt.length;at<dt;at++)ra(tt[at],U,k,z)}function fl(E,U,k,z){const O=E.opaque,tt=E.transmissive,at=E.transparent;d.setupLightsView(k),it===!0&&Q.setGlobalState(M.clippingPlanes,k),z&&bt.viewport(P.copy(z)),O.length>0&&Hs(O,U,k),tt.length>0&&Hs(tt,U,k),at.length>0&&Hs(at,U,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function dl(E,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Pi(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Fs:Tn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[z.id],at=z.viewport||P;tt.setSize(at.z*M.transmissionResolutionScale,at.w*M.transmissionResolutionScale);const dt=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),fe&&Pt.render(k);const gt=M.toneMapping;M.toneMapping=ai;const Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),it===!0&&Q.setGlobalState(M.clippingPlanes,z),Hs(E,k,z),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let At=0,jt=U.length;At<jt;At++){const ee=U[At],Se=ee.object,me=ee.geometry,Jt=ee.material,Tt=ee.group;if(Jt.side===cn&&Se.layers.test(z.layers)){const Pe=Jt.side;Jt.side=Xe,Jt.needsUpdate=!0,pl(Se,k,z,me,Jt,Tt),Jt.side=Pe,Jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}M.setRenderTarget(dt),M.setClearColor(X,Y),Ut!==void 0&&(z.viewport=Ut),M.toneMapping=gt}function Hs(E,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,tt=E.length;O<tt;O++){const at=E[O],dt=at.object,gt=at.geometry,Ut=at.group;let Lt=at.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),dt.layers.test(k.layers)&&pl(dt,U,k,gt,Lt,Ut)}}function pl(E,U,k,z,O,tt){E.onBeforeRender(M,U,k,z,O,tt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,U,k,z,E,tt),O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,M.renderBufferDirect(k,U,z,O,E,tt),O.side=ui,O.needsUpdate=!0,M.renderBufferDirect(k,U,z,O,E,tt),O.side=cn):M.renderBufferDirect(k,U,z,O,E,tt),E.onAfterRender(M,U,k,z,O,tt)}function Gs(E,U,k){U.isScene!==!0&&(U=_e);const z=yt.get(E),O=d.state.lights,tt=d.state.shadowsArray,at=O.state.version,dt=vt.getParameters(E,O.state,tt,U,k),gt=vt.getProgramCacheKey(dt);let Ut=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?F:v).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",Ft),Ut=new Map,z.programs=Ut);let Lt=Ut.get(gt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===at)return gl(E,dt),Lt}else dt.uniforms=vt.getUniforms(E),E.onBeforeCompile(dt,M),Lt=vt.acquireProgram(dt,gt),Ut.set(gt,Lt),z.uniforms=dt.uniforms;const At=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=Q.uniform),gl(E,dt),z.needsLights=Wu(E),z.lightsStateVersion=at,z.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function ml(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function gl(E,U){const k=yt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Gu(E,U,k,z,O){U.isScene!==!0&&(U=_e),w.resetTextureUnits();const tt=U.fog,at=z.isMeshStandardMaterial?U.environment:null,dt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:cs,gt=(z.isMeshStandardMaterial?F:v).get(z.envMap||at),Ut=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,ee=!!k.morphAttributes.color;let Se=ai;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Se=M.toneMapping);const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=me!==void 0?me.length:0,Tt=yt.get(z),Pe=d.state.lights;if(it===!0&&(_t===!0||E!==S)){const Fe=E===S&&z.id===y;Q.setState(z,E,Fe)}let ne=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Pe.state.version||Tt.outputColorSpace!==dt||O.isBatchedMesh&&Tt.batching===!1||!O.isBatchedMesh&&Tt.batching===!0||O.isBatchedMesh&&Tt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Tt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Tt.instancing===!1||!O.isInstancedMesh&&Tt.instancing===!0||O.isSkinnedMesh&&Tt.skinning===!1||!O.isSkinnedMesh&&Tt.skinning===!0||O.isInstancedMesh&&Tt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Tt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Tt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Tt.instancingMorph===!1&&O.morphTexture!==null||Tt.envMap!==gt||z.fog===!0&&Tt.fog!==tt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Lt||Tt.morphTargets!==At||Tt.morphNormals!==jt||Tt.morphColors!==ee||Tt.toneMapping!==Se||Tt.morphTargetsCount!==Jt)&&(ne=!0):(ne=!0,Tt.__version=z.version);let mn=Tt.currentProgram;ne===!0&&(mn=Gs(z,U,O));let Li=!1,Ke=!1,ps=!1;const he=mn.getUniforms(),rn=Tt.uniforms;if(bt.useProgram(mn.program)&&(Li=!0,Ke=!0,ps=!0),z.id!==y&&(y=z.id,Ke=!0),Li||S!==E){bt.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),Bh(ot),kh(ot),he.setValue(D,"projectionMatrix",ot)):he.setValue(D,"projectionMatrix",E.projectionMatrix),he.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ge=he.map.cameraPosition;Ge!==void 0&&Ge.setValue(D,te.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ke=!0,ps=!0)}if(O.isSkinnedMesh){he.setOptional(D,O,"bindMatrix"),he.setOptional(D,O,"bindMatrixInverse");const Fe=O.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),he.setValue(D,"boneTexture",Fe.boneTexture,w))}O.isBatchedMesh&&(he.setOptional(D,O,"batchingTexture"),he.setValue(D,"batchingTexture",O._matricesTexture,w),he.setOptional(D,O,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",O._indirectTexture,w),he.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",O._colorsTexture,w));const an=k.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Nt.update(O,k,mn),(Ke||Tt.receiveShadow!==O.receiveShadow)&&(Tt.receiveShadow=O.receiveShadow,he.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(rn.envMap.value=gt,rn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Ke&&(he.setValue(D,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&Vu(rn,ps),tt&&z.fog===!0&&lt.refreshFogUniforms(rn,tt),lt.refreshMaterialUniforms(rn,z,G,j,d.state.transmissionRenderTarget[E.id]),Fr.upload(D,ml(Tt),rn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fr.upload(D,ml(Tt),rn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(D,"center",O.center),he.setValue(D,"modelViewMatrix",O.modelViewMatrix),he.setValue(D,"normalMatrix",O.normalMatrix),he.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Fe=z.uniformsGroups;for(let Ge=0,aa=Fe.length;Ge<aa;Ge++){const di=Fe[Ge];N.update(di,mn),N.bind(di,mn)}}return mn}function Vu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Wu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,k){const z=yt.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),yt.get(E.texture).__webglTexture=U,yt.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const k=yt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Xu=D.createFramebuffer();this.setRenderTarget=function(E,U=0,k=0){L=E,C=U,R=k;let z=!0,O=null,tt=!1,at=!1;if(E){const gt=yt.get(E);if(gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(gt.__hasExternalTextures)w.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(gt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(at=!0);const Lt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?O=Lt[U][k]:O=Lt[U],tt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?O=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?O=Lt[k]:O=Lt,P.copy(E.viewport),H.copy(E.scissor),B=E.scissorTest}else P.copy(Et).multiplyScalar(G).floor(),H.copy(Ct).multiplyScalar(G).floor(),B=se;if(k!==0&&(O=Xu),bt.bindFramebuffer(D.FRAMEBUFFER,O)&&z&&bt.drawBuffers(E,O),bt.viewport(P),bt.scissor(H),bt.setScissorTest(B),tt){const gt=yt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,k)}else if(at){const gt=yt.get(E.texture),Ut=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,k,Ut)}else if(E!==null&&k!==0){const gt=yt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(E,U,k,z,O,tt,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt){bt.bindFramebuffer(D.FRAMEBUFFER,dt);try{const gt=E.texture,Ut=gt.format,Lt=gt.type;if(!Kt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&k>=0&&k<=E.height-O&&D.readPixels(U,k,z,O,kt.convert(Ut),kt.convert(Lt),tt)}finally{const gt=L!==null?yt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,z,O,tt,at){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt)if(U>=0&&U<=E.width-z&&k>=0&&k<=E.height-O){bt.bindFramebuffer(D.FRAMEBUFFER,dt);const gt=E.texture,Ut=gt.format,Lt=gt.type;if(!Kt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,tt.byteLength,D.STREAM_READ),D.readPixels(U,k,z,O,kt.convert(Ut),kt.convert(Lt),0);const jt=L!==null?yt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,jt);const ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fh(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,tt),D.deleteBuffer(At),D.deleteSync(ee),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,k=0){const z=Math.pow(2,-k),O=Math.floor(E.image.width*z),tt=Math.floor(E.image.height*z),at=U!==null?U.x:0,dt=U!==null?U.y:0;w.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,at,dt,O,tt),bt.unbindTexture()};const Yu=D.createFramebuffer(),qu=D.createFramebuffer();this.copyTextureToTexture=function(E,U,k=null,z=null,O=0,tt=null){tt===null&&(O!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=O,O=0):tt=0);let at,dt,gt,Ut,Lt,At,jt,ee,Se;const me=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(k!==null)at=k.max.x-k.min.x,dt=k.max.y-k.min.y,gt=k.isBox3?k.max.z-k.min.z:1,Ut=k.min.x,Lt=k.min.y,At=k.isBox3?k.min.z:0;else{const an=Math.pow(2,-O);at=Math.floor(me.width*an),dt=Math.floor(me.height*an),E.isDataArrayTexture?gt=me.depth:E.isData3DTexture?gt=Math.floor(me.depth*an):gt=1,Ut=0,Lt=0,At=0}z!==null?(jt=z.x,ee=z.y,Se=z.z):(jt=0,ee=0,Se=0);const Jt=kt.convert(U.format),Tt=kt.convert(U.type);let Pe;U.isData3DTexture?(w.setTexture3D(U,0),Pe=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Pe=D.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Li=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),ps=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At);const he=E.isDataArrayTexture||E.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const an=yt.get(E),Fe=yt.get(U),Ge=yt.get(an.__renderTarget),aa=yt.get(Fe.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let di=0;di<gt;di++)he&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,O,At+di),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,tt,Se+di)),D.blitFramebuffer(Ut,Lt,at,dt,jt,ee,at,dt,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||yt.has(E)){const an=yt.get(E),Fe=yt.get(U);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Yu),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,qu);for(let Ge=0;Ge<gt;Ge++)he?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,O,At+Ge):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,O),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,tt,Se+Ge):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,tt),O!==0?D.blitFramebuffer(Ut,Lt,at,dt,jt,ee,at,dt,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(Pe,tt,jt,ee,Se+Ge,Ut,Lt,at,dt):D.copyTexSubImage2D(Pe,tt,jt,ee,Ut,Lt,at,dt);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Pe,tt,jt,ee,Se,at,dt,gt,Jt,Tt,me.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,tt,jt,ee,Se,at,dt,gt,Jt,me.data):D.texSubImage3D(Pe,tt,jt,ee,Se,at,dt,gt,Jt,Tt,me):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,tt,jt,ee,at,dt,Jt,Tt,me.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,tt,jt,ee,me.width,me.height,Jt,me.data):D.texSubImage2D(D.TEXTURE_2D,tt,jt,ee,at,dt,Jt,Tt,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Li),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ps),tt===0&&U.generateMipmaps&&D.generateMipmap(Pe),bt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,z=null,O=0){return Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,z,O)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,bt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const _={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,WATER:7,BEDROCK:8,SNOW:9,CACTUS:10,FLOWER_RED:11,FLOWER_YELLOW:12,VINE:13,GRAVEL:14,MOSS:15,CASTLE_BRICK:16,APPLE:17,WEAPON_BANDIT_BLADE:18,WEAPON_RAIDER_SABER:19,WEAPON_SCORP_BOW:20,WEAPON_JAGUAR_CLAWS:21,WEAPON_WRAITH_HAMMER:22,WEAPON_YETI_AXE:23,PLANK:24,STICK:25,WOOD_SWORD:26,WOOD_AXE:27,WOOD_PICKAXE:28,WOOD_SPADE:29,STONE_SWORD:30,STONE_AXE:31,STONE_PICKAXE:32,STONE_SPADE:33,BRAMBLE:34,SKELETON_SPAWNER:35,BOW:36,ARROW:37},ti={PX:0,NX:1,PY:2,NY:3,PZ:4,NZ:5},Ye={[_.AIR]:{name:"Air",solid:!1,transparent:!0},[_.GRASS]:{name:"Grass",solid:!0,transparent:!1,textures:{top:"grass_top",side:"grass_side",bottom:"dirt"}},[_.DIRT]:{name:"Dirt",solid:!0,transparent:!1,textures:{all:"dirt"}},[_.STONE]:{name:"Stone",solid:!0,transparent:!1,textures:{all:"stone"}},[_.SAND]:{name:"Sand",solid:!0,transparent:!1,textures:{all:"sand"}},[_.LOG]:{name:"Log",solid:!0,transparent:!1,textures:{top:"log_top",side:"log_side",bottom:"log_top"}},[_.LEAVES]:{name:"Leaves",solid:!0,transparent:!0,textures:{all:"leaves"}},[_.WATER]:{name:"Water",solid:!1,transparent:!0,textures:{all:"water"}},[_.BEDROCK]:{name:"Bedrock",solid:!0,transparent:!1,textures:{all:"bedrock"}},[_.SNOW]:{name:"Snow",solid:!0,transparent:!1,textures:{all:"snow"}},[_.CACTUS]:{name:"Cactus",solid:!0,transparent:!1,textures:{top:"cactus_top",side:"cactus_side",bottom:"cactus_top"}},[_.FLOWER_RED]:{name:"Red Flower",solid:!1,transparent:!0,textures:{all:"flower_red"}},[_.FLOWER_YELLOW]:{name:"Yellow Flower",solid:!1,transparent:!0,textures:{all:"flower_yellow"}},[_.VINE]:{name:"Vine",solid:!1,transparent:!0,textures:{all:"vine"}},[_.GRAVEL]:{name:"Gravel",solid:!0,transparent:!1,textures:{all:"gravel"}},[_.MOSS]:{name:"Moss",solid:!0,transparent:!1,textures:{all:"moss"}},[_.CASTLE_BRICK]:{name:"Castle Brick",solid:!0,transparent:!1,textures:{all:"castle_brick"}},[_.APPLE]:{name:"Apple",solid:!1,transparent:!0,textures:{all:"apple"}},[_.WEAPON_BANDIT_BLADE]:{name:"Bandit Blade",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_RAIDER_SABER]:{name:"Raider Saber",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_SCORP_BOW]:{name:"Scorpion Bow",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_JAGUAR_CLAWS]:{name:"Jaguar Claws",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_WRAITH_HAMMER]:{name:"Wraith Hammer",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_YETI_AXE]:{name:"Yeti Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.PLANK]:{name:"Plank",solid:!0,transparent:!1,textures:{all:"plank"}},[_.STICK]:{name:"Stick",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_SWORD]:{name:"Wood Sword",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_AXE]:{name:"Wood Axe",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_PICKAXE]:{name:"Wood Pickaxe",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_SPADE]:{name:"Wood Spade",solid:!1,transparent:!0,textures:{all:"plank"}},[_.STONE_SWORD]:{name:"Stone Sword",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_AXE]:{name:"Stone Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_PICKAXE]:{name:"Stone Pickaxe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_SPADE]:{name:"Stone Spade",solid:!1,transparent:!0,textures:{all:"stone"}},[_.BRAMBLE]:{name:"Bramble",solid:!1,transparent:!0,textures:{all:"bramble"}},[_.SKELETON_SPAWNER]:{name:"Skeleton Spawner",solid:!0,transparent:!1,textures:{all:"skeleton_spawner"}},[_.BOW]:{name:"Bow",solid:!1,transparent:!0,textures:{all:"plank"}},[_.ARROW]:{name:"Arrow",solid:!1,transparent:!0,textures:{all:"stone"}}};function Kr(i){return Ye[i]?.solid??!1}function cg(i){return Ye[i]?.transparent??!0}function xu(i){return i!==_.AIR&&i!==_.BEDROCK}function ug(i){switch(i){case _.FLOWER_RED:case _.FLOWER_YELLOW:case _.VINE:case _.BRAMBLE:return .12;case _.LEAVES:case _.APPLE:return .2;case _.WATER:return .25;case _.DIRT:case _.GRASS:case _.SAND:case _.SNOW:case _.MOSS:return .5;case _.LOG:case _.PLANK:case _.CACTUS:return .8;case _.STONE:case _.GRAVEL:case _.SKELETON_SPAWNER:return 1.35;case _.CASTLE_BRICK:return 1.75;default:return .6}}const et=16,xe=128,Ti=4,Mc=24,hg=6,ys=.6,xr=1.8,fg=1.62,dg=5.2,pg=2.6,mg=100,gg=8.8,_g=26,xg=-55,vg=280,vr=600;function xt(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=n^n>>>16|0,(n>>>0)/4294967295}function $n(i,t,e,n){let s=(i|0)*374761393+(t|0)*668265263+(e|0)*2246822519+(n|0)*1442695041;return s=s^s>>>13|0,s=Math.imul(s,1274126177),s=s^s>>>16|0,(s>>>0)/4294967295}function Rs(i){return i*i*(3-2*i)}function yn(i,t,e){return i+(t-i)*e}function Ce(i,t){return Math.floor(i/t)}function Sr(i,t){return(i%t+t)%t}const Ei=4,Sg=[{face:ti.PX,normal:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],n:[1,0,0]},{face:ti.NX,normal:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],n:[-1,0,0]},{face:ti.PY,normal:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],n:[0,1,0]},{face:ti.NY,normal:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],n:[0,-1,0]},{face:ti.PZ,normal:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],n:[0,0,1]},{face:ti.NZ,normal:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],n:[0,0,-1]}];function Mg(i,t){const e=Ye[i],n=Ye[t];return e.transparent?t===0?!0:n.transparent?t!==i:!1:t===0||n.transparent}function Ec(){return{positions:[],normals:[],uvs:[],colors:[],indices:[],count:0}}function Eg(i){return!(i===_.AIR||i===_.WATER||i===_.VINE)}function yg(i,t,e){const n=Ei+1,s=et+n*2,r=new Int16Array(s*s);for(let a=-n;a<et+n;a++)for(let o=-n;o<et+n;o++){const l=t+o,c=e+a;let u=-1;for(let h=xe-1;h>=0;h--){const f=i.getBlock(l,h,c);if(Eg(f)){u=h;break}}r[(a+n)*s+(o+n)]=u}return{top:r,stride:s,margin:n}}function bg(i){return i.normal[1]>0?1:i.normal[1]<0?.62:i.normal[0]!==0?.86:.9}function Ag(i,t,e,n,s){const r=i+(n.normal[0]>0?1:n.normal[0]<0?-1:0),a=e+(n.normal[2]>0?1:n.normal[2]<0?-1:0),o=s.top[(a+s.margin)*s.stride+(r+s.margin)],l=t+(n.normal[1]>0?1:0),c=Math.max(0,o-l);let u=Math.exp(-c*.1);u=Math.max(.05,Math.min(1,u));let h=0,f=0;for(let x=-Ei;x<=Ei;x++)for(let m=-Ei;m<=Ei;m++){const d=m*m+x*x;if(d>Ei*Ei)continue;const A=1/(1+d*.38),b=s.top[(a+x+s.margin)*s.stride+(r+m+s.margin)];if(b>l){const M=b-l,I=Math.min(1,M/(Math.sqrt(d)+1.2));h+=I*A}f+=A}const p=f>0?1-h/f:1,g=.34+Math.max(0,Math.min(1,p))*.66;return u*g*bg(n)}function Tg(i,t,e,n,s,r,a){const[o,l,c,u]=r,h=[[o,l],[o,u],[c,u],[c,l]];for(let p=0;p<4;p++){const g=s.verts[p];i.positions.push(t+g[0],e+g[1],n+g[2]),i.normals.push(s.n[0],s.n[1],s.n[2]),i.uvs.push(h[p][0],h[p][1]),i.colors.push(a,a,a)}const f=i.count;i.indices.push(f,f+1,f+2,f,f+2,f+3),i.count+=4}function yc(i){if(i.indices.length===0)return null;const t=new qe;return t.setAttribute("position",new de(i.positions,3)),t.setAttribute("normal",new de(i.normals,3)),t.setAttribute("uv",new de(i.uvs,2)),t.setAttribute("color",new de(i.colors,3)),t.setIndex(i.indices),t.computeBoundingSphere(),t}function wg(i,t,e,n){const s=Ec(),r=Ec(),a=t*et,o=e*et,l=yg(i,a,o);for(let c=0;c<et;c++)for(let u=0;u<et;u++){const h=a+c,f=o+u;for(let p=0;p<xe;p++){const g=i.getBlock(h,p,f);if(g===0)continue;const x=Ye[g].transparent?r:s;for(const m of Sg){const d=h+m.normal[0],A=p+m.normal[1],b=f+m.normal[2],M=i.getBlock(d,A,b);if(!Mg(g,M))continue;const I=Ag(c,p,u,m,l);Tg(x,h,p,f,m,n(g,m.face),I)}}}return{opaque:yc(s),transparent:yc(r)}}function vu(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=xt(n,s,e),l=xt(n+1,s,e),c=xt(n,s+1,e),u=xt(n+1,s+1,e),h=Rs(r),f=Rs(a),p=yn(o,l,h),g=yn(c,u,h);return yn(p,g,f)}function Re(i,t,e,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=vu(i*a,t*a,e+u*7919)*o,c+=o,o*=r,a*=s;return l/c}function Rg(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=Math.floor(e),o=i-s,l=t-r,c=e-a,u=$n(s,r,a,n),h=$n(s+1,r,a,n),f=$n(s,r+1,a,n),p=$n(s+1,r+1,a,n),g=$n(s,r,a+1,n),x=$n(s+1,r,a+1,n),m=$n(s,r+1,a+1,n),d=$n(s+1,r+1,a+1,n),A=Rs(o),b=Rs(l),M=Rs(c),I=yn(u,h,A),C=yn(f,p,A),R=yn(g,x,A),L=yn(m,d,A),y=yn(I,C,b),S=yn(R,L,b);return yn(y,S,M)}function za(i,t,e,n,s=4,r=2,a=.5){let o=1,l=1,c=0,u=0;for(let h=0;h<s;h++)c+=Rg(i*o,t*o,e*o,n+h*7919)*l,u+=l,l*=a,o*=r;return c/u}const Ot={DESERT:0,FOREST:1,JUNGLE:2,MOUNTAIN:3,PLAINS:4,TUNDRA:5},Cg={[Ot.DESERT]:"Desert",[Ot.FOREST]:"Forest",[Ot.JUNGLE]:"Jungle",[Ot.MOUNTAIN]:"Mountain",[Ot.PLAINS]:"Plains",[Ot.TUNDRA]:"Tundra"},Br={[Ot.DESERT]:{temp:.92,moisture:.14,surface:_.SAND,subsurface:_.SAND,height:(i,t,e)=>{const n=Re(i*.0044,t*.0044,e+101,3,2,.5),s=Re(i*.017,t*.017,e+102,4,2,.52);return 19+n*7+s*8}},[Ot.FOREST]:{temp:.56,moisture:.62,surface:_.GRASS,subsurface:_.DIRT,height:(i,t,e)=>{const n=Re(i*.007,t*.007,e+111,4,2,.52),s=Re(i*.022,t*.022,e+112,3,2,.5);return 28+n*13+s*5}},[Ot.JUNGLE]:{temp:.82,moisture:.9,surface:_.GRASS,subsurface:_.DIRT,height:(i,t,e)=>{const n=Re(i*.0062,t*.0062,e+121,4,2,.54),s=Re(i*.014,t*.014,e+122,4,2,.5);return 26+n*10+s*8}},[Ot.MOUNTAIN]:{temp:.31,moisture:.33,surface:_.STONE,subsurface:_.STONE,height:(i,t,e)=>{const n=Re(i*.0042,t*.0042,e+131,5,2,.55),s=Re(i*.0026,t*.0026,e+132,4,2,.5),r=Re(i*.016,t*.016,e+133,3,2,.5);return 34+s*s*70+n*24+r*6}},[Ot.PLAINS]:{temp:.6,moisture:.46,surface:_.GRASS,subsurface:_.DIRT,height:(i,t,e)=>{const n=Re(i*.0052,t*.0052,e+141,3,2,.5),s=Re(i*.019,t*.019,e+142,3,2,.5);return 24+n*6+s*3}},[Ot.TUNDRA]:{temp:.17,moisture:.56,surface:_.SNOW,subsurface:_.DIRT,height:(i,t,e)=>{const n=Re(i*.0047,t*.0047,e+151,4,2,.52),s=Re(i*.013,t*.013,e+152,3,2,.5);return 30+n*11+s*4}}},Ig=Object.values(Ot);function bc(i){return i*i}function Su(i,t,e){const n=Re(t*.0017,e*.0017,i.seed+501,4,2,.5),s=Re(t*.0018,e*.0018,i.seed+601,4,2,.5);return{temperature:n,moisture:s}}function Mu(i,t,e){const n=Su(i,t,e);let s=0,r=Ot.FOREST,a=-1;const o=[];for(const l of Ig){const c=Br[l],u=bc(n.temperature-c.temp)+bc(n.moisture-c.moisture),h=Math.exp(-u*12.5);o.push([l,h]),s+=h,h>a&&(a=h,r=l)}return{dominant:r,weights:o,total:s}}function Pg(i,t,e){const n=Mu(i,t,e);let s=0;for(const[c,u]of n.weights){const h=u/n.total;s+=Br[c].height(t,e,i.seed)*h}const r=Math.max(3,Math.min(xe-2,Math.floor(s))),a=n.dominant;let o=Br[a].surface;const l=Br[a].subsurface;return a===Ot.MOUNTAIN&&r>80&&(o=_.SNOW),{height:r,dominantBiome:a,surface:o,subsurface:l}}const $r={ravineChance:.24,castleSpawnChance:.045,hostileSiteChance:.56,questgiverChance:.07},Dg={[Ot.FOREST]:{tree:{minHash:.981,minCluster:.42},appleTree:{minHash:.973,maxHash:.981,minCluster:.46},flowerRed:{minHash:.93,maxHash:.948},flowerYellow:{minHash:.948,maxHash:.965},bramble:{minHash:.9715,maxHash:.973,minCluster:.68}},[Ot.JUNGLE]:{tree:{minHash:.972,minCluster:.34},moss:{minHash:.88,maxHash:.94},flowerYellow:{minHash:.942,maxHash:.957},bramble:{minHash:.966,maxHash:.9672,minCluster:.64}},[Ot.DESERT]:{cactus:{minHash:.972,minCluster:.3},gravel:{minHash:.93,maxHash:.945}},[Ot.MOUNTAIN]:{gravel:{minHash:.89,maxHash:.93,minY:68},spire:{minHash:.988,minCluster:.5,minY:70}},[Ot.PLAINS]:{flowerRed:{minHash:.86,maxHash:.915},flowerYellow:{minHash:.915,maxHash:.965},tree:{minHash:.992,minCluster:.45},bramble:{minHash:.971,maxHash:.9722,minCluster:.72}},[Ot.TUNDRA]:{gravel:{minHash:.94,maxHash:.97},tree:{minHash:.991,minCluster:.5}}};function Ee(i,t,e=1,n=0){return!(!i||i.minHash!==void 0&&!(t>i.minHash)||i.maxHash!==void 0&&!(t<i.maxHash)||i.minCluster!==void 0&&!(e>i.minCluster)||i.minY!==void 0&&!(n>i.minY))}const Lg=14,ii=et*Lg;class Ng{constructor(t){this.state=t|0,this.state===0&&(this.state=1)}next(){return this.state=Math.imul(this.state,1664525)+1013904223|0,(this.state>>>0)/4294967295}range(t,e){return t+Math.floor(this.next()*(e-t))}}function Ug(i,t,e){const n=`${t},${e}`;if(i.castleCache.has(n))return i.castleCache.get(n);if(xt(t,e,i.seed+42031)>$r.castleSpawnChance)return i.castleCache.set(n,null),null;const r=t*73856093^e*19349663^i.seed*83492791^2654435769|0,a=new Ng(r),o=34,l=t*ii+a.range(o,ii-o),c=e*ii+a.range(o,ii-o),u=Math.min(xe-24,1+Math.max(i.getSurfaceYAt(l,c),i.getSurfaceYAt(l+8,c),i.getSurfaceYAt(l,c+8),i.getSurfaceYAt(l+8,c+8))),h=a.range(13,18),f=a.range(13,18),p={x:l-Math.floor(h*.5),z:c-Math.floor(f*.5),w:h,d:f,h:a.range(7,11),kind:"keep"},g=[p],x=[],m=a.range(8,15);for(let y=0;y<m;y++){const S=g[a.range(0,g.length)],P=a.range(0,4),H=a.next()<.55,B=S.x+2+a.range(0,Math.max(1,S.w-4)),X=S.z+2+a.range(0,Math.max(1,S.d-4));let Y,W;if(H){const Ct=a.range(6,13);P===0||P===2?(Y=3,W=Ct):(Y=Ct,W=3)}else Y=a.range(7,13),W=a.range(7,13);let j=0,G=0;P===0?(j=B-Math.floor(Y*.5),G=S.z-W):P===1?(j=S.x+S.w,G=X-Math.floor(W*.5)):P===2?(j=B-Math.floor(Y*.5),G=S.z+S.d):(j=S.x-Y,G=X-Math.floor(W*.5));let rt=!1;for(const Ct of g)if(j<Ct.x+Ct.w&&j+Y>Ct.x&&G<Ct.z+Ct.d&&G+W>Ct.z){rt=!0;break}if(rt)continue;const ft=H?a.range(5,7):a.range(6,10),Et={x:j,z:G,w:Y,d:W,h:ft,kind:H?"corridor":"room"};g.push(Et),P===0&&x.push({side:P,x:B,z:S.z}),P===1&&x.push({side:P,x:S.x+S.w-1,z:X}),P===2&&x.push({side:P,x:B,z:S.z+S.d-1}),P===3&&x.push({side:P,x:S.x,z:X})}const d=[],A=2,b=a.range(9,14);d.push({x:p.x-A,z:p.z-A,r:A,h:b}),d.push({x:p.x+p.w-1+A,z:p.z-A,r:A,h:b}),d.push({x:p.x-A,z:p.z+p.d-1+A,r:A,h:b}),d.push({x:p.x+p.w-1+A,z:p.z+p.d-1+A,r:A,h:b});let M=1/0,I=-1/0,C=1/0,R=-1/0;for(const y of g)M=Math.min(M,y.x),I=Math.max(I,y.x+y.w-1),C=Math.min(C,y.z),R=Math.max(R,y.z+y.d-1);for(const y of d)M=Math.min(M,y.x-y.r),I=Math.max(I,y.x+y.r),C=Math.min(C,y.z-y.r),R=Math.max(R,y.z+y.r);const L={baseY:u,pieces:g,towers:d,connections:x,minX:M,maxX:I,minZ:C,maxZ:R};return i.castleCache.set(n,L),L}function Og(i,t,e,n,s,r){const a=s,o=s+et-1,l=r,c=r+et-1,u=220,h=Ce(a-u,ii),f=Ce(o+u,ii),p=Ce(l-u,ii),g=Ce(c+u,ii);for(let x=p;x<=g;x++)for(let m=h;m<=f;m++){const d=Ug(i,m,x);!d||!(d.minX<=o&&d.maxX>=a&&d.minZ<=c&&d.maxZ>=l)||Fg(i,t,e,n,d)}}function Fg(i,t,e,n,s){for(const r of s.pieces)Bg(i,t,e,n,s.baseY,r);for(const r of s.towers)kg(i,t,e,n,s.baseY,r);for(const r of s.connections)zg(i,t,e,n,s.baseY,r)}function Bg(i,t,e,n,s,r){const a=Math.min(xe-3,s+r.h);for(let o=r.z;o<r.z+r.d;o++)for(let l=r.x;l<r.x+r.w;l++){i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,_.CASTLE_BRICK);for(let c=s+1;c<=a;c++)l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o);if(r.kind!=="corridor"){const c=a+1;l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1||(l+o&1)===0?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o)}}if(r.kind==="room"&&r.w>=9&&r.d>=9){const o=Math.min(xe-4,s+r.h-1),l=[[r.x+2,r.z+2],[r.x+r.w-3,r.z+2],[r.x+2,r.z+r.d-3],[r.x+r.w-3,r.z+r.d-3]];for(const[c,u]of l)for(let h=s+1;h<=o;h++)i.setGeneratedBlockIfInChunk(t,e,n,c,h,u,_.CASTLE_BRICK)}}function kg(i,t,e,n,s,r){const a=Math.min(xe-3,s+r.h);for(let o=r.z-r.r;o<=r.z+r.r;o++)for(let l=r.x-r.r;l<=r.x+r.r;l++){const c=Math.abs(l-r.x),u=Math.abs(o-r.z);if(Math.max(c,u)>r.r)continue;i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,_.CASTLE_BRICK);for(let f=s+1;f<=a;f++)Math.max(c,u)===r.r?i.setGeneratedBlockIfInChunk(t,e,n,l,f,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,f,o);const h=a+1;((l+o&1)===0||Math.max(c,u)===r.r)&&i.setGeneratedBlockIfInChunk(t,e,n,l,h,o,_.CASTLE_BRICK)}}function zg(i,t,e,n,s,r){for(let a=s+1;a<=s+4;a++)for(let o=-1;o<=1;o++)r.side===0?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z-1)):r.side===1?(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x+1,a,r.z+o)):r.side===2?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z+1)):(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x-1,a,r.z+o))}const es=96;function kr(i){return Math.max(0,Math.min(1,i))}function Hg(i,t,e,n,s,r){const a=s-e,o=r-n,l=i-e,c=t-n,u=a*a+o*o;if(u<=1e-5){const g=i-e,x=t-n;return{distance:Math.hypot(g,x),t:0}}const h=kr((l*a+c*o)/u),f=e+a*h,p=n+o*h;return{distance:Math.hypot(i-f,t-p),t:h}}function Gg(i,t,e){const n=`${t},${e}`;if(i.ravineCache.has(n))return i.ravineCache.get(n);if(xt(t,e,i.seed+74111)>$r.ravineChance)return i.ravineCache.set(n,null),null;const r=t*es+es*.5,a=e*es+es*.5,o=xt(t,e,i.seed+74113)*Math.PI*2,c=(70+xt(t,e,i.seed+74117)*120)*.5,u=(xt(t,e,i.seed+74119)-.5)*30,h=(xt(t,e,i.seed+74123)-.5)*30,f=r+u,p=a+h,g={ax:f-Math.cos(o)*c,az:p-Math.sin(o)*c,bx:f+Math.cos(o)*c,bz:p+Math.sin(o)*c,width:3.5+xt(t,e,i.seed+74129)*6.5,depth:22+xt(t,e,i.seed+74131)*38,slopePow:.45+xt(t,e,i.seed+74137)*.25,hasFlatBottom:xt(t,e,i.seed+74141)>.22,flatBottomWidth:5+xt(t,e,i.seed+74143)*5,flatDepthFactor:.86+xt(t,e,i.seed+74147)*.11,topNarrowFactor:.35+xt(t,e,i.seed+74153)*.18,bottomExpandFactor:1.18+xt(t,e,i.seed+74159)*.22};return i.ravineCache.set(n,g),g}function Vg(i,t,e,n,s,r){for(let a=0;a<et;a++)for(let o=0;o<et;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Ce(l,es),f=Ce(c,es);let p=xe,g=!1;const x=[];for(let A=-2;A<=2;A++)for(let b=-2;b<=2;b++){const M=Gg(i,h+b,f+A);if(!M)continue;const{distance:I,t:C}=Hg(l+.5,c+.5,M.ax,M.az,M.bx,M.bz),R=M.width*(.7+.3*Math.sin(Math.PI*C));if(I>R*M.bottomExpandFactor)continue;const L=I/R,y=1-L;let S=M.depth*Math.pow(y,M.slopePow);if(M.hasFlatBottom){const H=kr(M.flatBottomWidth*.5/Math.max(.001,R)),B=M.depth*M.flatDepthFactor;if(L<=H)S=B;else{const X=kr((L-H)/(1-H)),Y=B*Math.pow(1-X,M.slopePow);S=Math.max(S,Y)}}if(S<=.01)continue;g=!0;const P=u-S;P<p&&(p=P),x.push({distance:I,widthAt:R,floor:P,topNarrowFactor:M.topNarrowFactor,bottomExpandFactor:M.bottomExpandFactor})}if(!g)continue;const m=Math.max(4,Math.floor(p)),d=Math.min(xe-2,u+2);for(let A=m;A<=d;A++){let b=!1;for(let M=0;M<x.length;M++){const I=x[M];if(A<I.floor)continue;const C=Math.max(1,u-I.floor),R=kr((u-A)/C),L=I.topNarrowFactor+(I.bottomExpandFactor-I.topNarrowFactor)*R;if(I.distance<=I.widthAt*L){b=!0;break}}b&&i.setGeneratedAirIfInChunk(t,e,n,l,A,c)}}}function Wg(i,t,e,n,s,r){for(let a=0;a<et;a++)for(let o=0;o<et;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Re(l*.008,c*.008,i.seed+9501,3,2,.5),f=Math.min(u-2,88);if(f<=8)continue;for(let x=6;x<=f;x++){const m=za(l*.045,x*.06,c*.045,i.seed+9601,3,2,.5),d=za(l*.031+33,x*.045,c*.031+91,i.seed+9609,2,2,.5),A=.71-Math.max(0,h-.52)*.26;(m>A||h>.6&&m>A-.08&&d>.72)&&i.setGeneratedAirIfInChunk(t,e,n,l,x,c)}const p=Re(l*.011,c*.011,i.seed+9701,3,2,.5),g=xt(l,c,i.seed+9702);if(p>.66&&g>.93&&u>14){const x=3+(g*6|0),m=Math.max(5,u-x);for(let A=u;A>=m;A--)i.setGeneratedAirIfInChunk(t,e,n,l,A,c);if(p>.72||h>.58){const A=Math.max(6,u-36);for(let b=m-1;b>=A;b--)za(l*.06,b*.05,c*.06,i.seed+9721,2,2,.5)>.46&&(i.setGeneratedAirIfInChunk(t,e,n,l,b,c),xt(l+b,c-b,i.seed+9731)>.72&&i.setGeneratedAirIfInChunk(t,e,n,l+1,b,c))}}}}function Xg(i,t,e,n,s,r){Vg(i,t,e,n,s,r),Wg(i,t,e,n,s,r);for(let a=0;a<et;a++)for(let o=0;o<et;o++)t[(0*et+o)*et+a]!==_.BEDROCK&&(t[(0*et+o)*et+a]=_.BEDROCK)}function Yg(i,t,e,n,s,r){for(let o=s-6;o<s+et+6;o++)for(let l=r-6;l<r+et+6;l++){const c=i.getColumnData(o,l),u=c.height,h=i.getGeneratedBlockFromChunkData(t,e,n,o,u+1,l),f=qg(i,t,e,n,o,u,l),p=xt(o,l,i.seed+9001),g=vu(o*.03,l*.03,i.seed+9002),x=Dg[c.dominantBiome]??null;if(c.dominantBiome===Ot.FOREST&&(f&&Ee(x.tree,p,g,u)&&c.surface===_.GRASS&&Mr(i,t,e,n,o,u+1,l,4+(p*4|0),2,!1),f&&Ee(x.appleTree,p,g,u)&&c.surface===_.GRASS&&Kg(i,t,e,n,o,u+1,l,5+(p*3|0)),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.flowerRed,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.FLOWER_RED),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.flowerYellow,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.FLOWER_YELLOW),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Ot.JUNGLE&&(f&&Ee(x.tree,p,g,u)&&c.surface===_.GRASS&&Mr(i,t,e,n,o,u+1,l,6+(p*5|0),3,!0),f&&h===_.AIR&&Ee(x.moss,p,g,u)&&c.surface===_.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.MOSS),f&&h===_.AIR&&Ee(x.flowerYellow,p,g,u)&&c.surface===_.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.FLOWER_YELLOW),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Ot.DESERT){if(Ee(x.cactus,p,g,u)&&c.surface===_.SAND){const m=2+(p*5|0);for(let d=0;d<m;d++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+d,l,_.CACTUS)}h===_.AIR&&Ee(x.gravel,p,g,u)&&c.surface===_.SAND&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.GRAVEL)}if(c.dominantBiome===Ot.MOUNTAIN&&(h===_.AIR&&Ee(x.gravel,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.GRAVEL),Ee(x.spire,p,g,u))){const m=2+(p*4|0);for(let d=0;d<m;d++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+d,l,u+d>84?_.SNOW:_.STONE)}c.dominantBiome===Ot.PLAINS&&(f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.flowerRed,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.FLOWER_RED),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.flowerYellow,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.FLOWER_YELLOW),f&&Ee(x.tree,p,g,u)&&c.surface===_.GRASS&&Mr(i,t,e,n,o,u+1,l,4+(p*3|0),2,!1),f&&h===_.AIR&&c.surface===_.GRASS&&Ee(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Ot.TUNDRA&&(h===_.AIR&&Ee(x.gravel,p,g,u)&&c.surface===_.SNOW&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,_.GRAVEL),Ee(x.tree,p,g,u)&&c.surface===_.SNOW&&Mr(i,t,e,n,o,u+1,l,4+(p*3|0),1,!1))}}function qg(i,t,e,n,s,r,a){const o=i.getGeneratedBlockFromChunkData(t,e,n,s,r,a);if(o===_.AIR||o===_.WATER)return!1;const l=s-e*et,c=a-n*et;if(l<0||c<0||l>=et||c>=et)return!1;for(let u=1;u<=5;u++){const h=i.getGeneratedBlockFromChunkData(t,e,n,s,r-u,a);if(h===_.AIR||h===_.WATER)return!1}return!0}function Mr(i,t,e,n,s,r,a,o,l,c){for(let h=0;h<o;h++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+h,a,_.LOG);const u=r+o;for(let h=-l;h<=l;h++){const f=Math.max(1,l-Math.abs(h)+1);for(let p=-f;p<=f;p++)for(let g=-f;g<=f;g++){if(Math.abs(p)+Math.abs(g)>f+1)continue;const x=s+p,m=u+h,d=a+g;if(i.setGeneratedLeafIfAir(t,e,n,x,m,d),!c||!(Math.abs(p)===f||Math.abs(g)===f))continue;const b=xt(x,d,i.seed+11811+h*17);if(b<.62)continue;const M=2+(b*4|0);for(let I=1;I<=M;I++)i.setGeneratedVineIfAir(t,e,n,x,m-I,d)}}}function Kg(i,t,e,n,s,r,a,o){for(let u=0;u<o;u++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+u,a,_.LOG);const l=r+o,c=2;for(let u=-c;u<=c;u++){const h=Math.max(1,c-Math.abs(u)+1);for(let f=-h;f<=h;f++)for(let p=-h;p<=h;p++){if(Math.abs(f)+Math.abs(p)>h+1)continue;const g=s+f,x=l+u,m=a+p;xt(g*19+x,m*23-x,i.seed+29011)>.86&&Math.abs(f)+Math.abs(p)>=2?i.setGeneratedBlockIfInChunk(t,e,n,g,x,m,_.APPLE):i.setGeneratedLeafIfAir(t,e,n,g,x,m)}}}function bs(i,t){return`${i},${t}`}function Ln(i,t,e){return t*et*et+e*et+i}class $g{constructor(t,e,n=133742){this.scene=t,this.atlas=e,this.seed=n|0,this.generated=new Map,this.modified=new Map,this.loaded=new Map,this.buildQueue=[],this.castleCache=new Map,this.ravineCache=new Map,this.materialOpaque=null,this.materialTransparent=null}setupMaterials(t,e){this.materialOpaque=t,this.materialTransparent=e}getClimate(t,e){return Su(this,t,e)}getBiomeBlend(t,e){return Mu(this,t,e)}getColumnData(t,e){return Pg(this,t,e)}getBiomeAt(t,e){return this.getColumnData(t,e).dominantBiome}getSurfaceYAt(t,e){return this.getColumnData(t,e).height}generateChunkData(t,e){const n=bs(t,e);if(this.generated.has(n))return this.generated.get(n);const s=new Uint8Array(et*xe*et),r=t*et,a=e*et;for(let o=0;o<et;o++)for(let l=0;l<et;l++){const c=r+o,u=a+l,h=this.getColumnData(c,u),f=h.height;for(let p=0;p<=f;p++){let g;p===0?g=_.BEDROCK:p===f?g=h.surface:p>=f-3?g=h.subsurface:g=_.STONE,s[Ln(o,p,l)]=g}if(f<Mc)for(let p=f+1;p<=Mc;p++)s[Ln(o,p,l)]=_.WATER}return Xg(this,s,t,e,r,a),Yg(this,s,t,e,r,a),Og(this,s,t,e,r,a),this.generated.set(n,s),s}getGeneratedBlockFromChunkData(t,e,n,s,r,a){if(r<0)return _.BEDROCK;if(r>=xe)return _.AIR;const o=s-e*et,l=a-n*et;return o<0||l<0||o>=et||l>=et?_.AIR:t[Ln(o,r,l)]}setGeneratedBlockIfInChunk(t,e,n,s,r,a,o){if(r<=0||r>=xe)return;const l=s-e*et,c=a-n*et;l<0||c<0||l>=et||c>=et||(t[Ln(l,r,c)]=o)}setGeneratedAirIfInChunk(t,e,n,s,r,a){if(r<=0||r>=xe)return;const o=s-e*et,l=a-n*et;o<0||l<0||o>=et||l>=et||(t[Ln(o,r,l)]=_.AIR)}setGeneratedLeafIfAir(t,e,n,s,r,a){if(r<=0||r>=xe)return;const o=s-e*et,l=a-n*et;if(o<0||l<0||o>=et||l>=et)return;const c=Ln(o,r,l),u=t[c];(u===_.AIR||u===_.WATER||u===_.VINE)&&(t[c]=_.LEAVES)}setGeneratedVineIfAir(t,e,n,s,r,a){if(r<=0||r>=xe)return;const o=s-e*et,l=a-n*et;if(o<0||l<0||o>=et||l>=et)return;const c=Ln(o,r,l);t[c]===_.AIR&&(t[c]=_.VINE)}getLocalBlockFromData(t,e,n,s,r){if(s<0)return _.BEDROCK;if(s>=xe)return _.AIR;const a=bs(t,e),o=Ln(n,s,r),l=this.modified.get(a);return l&&l.has(o)?l.get(o):this.generateChunkData(t,e)[o]}getBlock(t,e,n){if(e<0)return _.BEDROCK;if(e>=xe)return _.AIR;const s=Ce(t,et),r=Ce(n,et),a=Sr(t,et),o=Sr(n,et);return this.getLocalBlockFromData(s,r,a,e,o)}setBlock(t,e,n,s){if(e<=0||e>=xe)return!1;const r=Ce(t,et),a=Ce(n,et),o=Sr(t,et),l=Sr(n,et),c=bs(r,a),u=Ln(o,e,l),h=this.generateChunkData(r,a)[u];let f=this.modified.get(c);return f||(f=new Map,this.modified.set(c,f)),s===h?f.delete(u):f.set(u,s),f.size===0&&this.modified.delete(c),this.markChunkDirty(r,a),o===0&&this.markChunkDirty(r-1,a),o===et-1&&this.markChunkDirty(r+1,a),l===0&&this.markChunkDirty(r,a-1),l===et-1&&this.markChunkDirty(r,a+1),!0}markChunkDirty(t,e){const n=bs(t,e),s=this.loaded.get(n);s&&(s.dirty||(s.dirty=!0,this.buildQueue.push(n)))}loadChunksAround(t,e){const n=Ce(Math.floor(t),et),s=Ce(Math.floor(e),et),r=new Set;for(let o=-Ti;o<=Ti;o++)for(let l=-Ti;l<=Ti;l++){const c=n+l,u=s+o,h=bs(c,u);r.add(h),this.loaded.has(h)||(this.loaded.set(h,{cx:c,cz:u,key:h,dirty:!0,opaqueMesh:null,transparentMesh:null}),this.buildQueue.push(h))}const a=Ti+2;for(const[o,l]of this.loaded.entries()){const c=Math.abs(l.cx-n),u=Math.abs(l.cz-s);!r.has(o)&&(c>a||u>a)&&(this.disposeChunk(l),this.loaded.delete(o))}}disposeChunk(t){t.opaqueMesh&&(t.opaqueMesh.geometry.dispose(),this.scene.remove(t.opaqueMesh),t.opaqueMesh=null),t.transparentMesh&&(t.transparentMesh.geometry.dispose(),this.scene.remove(t.transparentMesh),t.transparentMesh=null)}rebuildOneChunk(){for(;this.buildQueue.length>0;){const t=this.buildQueue.shift(),e=this.loaded.get(t);if(!e||!e.dirty)continue;const n=wg(this,e.cx,e.cz,this.atlas.getFaceUVs);this.disposeChunk(e),n.opaque&&(e.opaqueMesh=new ve(n.opaque,this.materialOpaque),e.opaqueMesh.frustumCulled=!0,e.opaqueMesh.castShadow=!0,e.opaqueMesh.receiveShadow=!0,this.scene.add(e.opaqueMesh)),n.transparent&&(e.transparentMesh=new ve(n.transparent,this.materialTransparent),e.transparentMesh.frustumCulled=!0,e.transparentMesh.castShadow=!1,e.transparentMesh.receiveShadow=!0,this.scene.add(e.transparentMesh)),e.dirty=!1;return}}isBlockTransparent(t){return cg(t)}}const On={NEUTRAL:"neutral",HUMAN:"human",OREUM:"oreum"},Zg=new Set([`${On.HUMAN}:${On.OREUM}`,`${On.OREUM}:${On.HUMAN}`]);function Ac(i,t){return!i||!t||i===t?!1:Zg.has(`${i}:${t}`)}const jg={[_.GRASS]:5808973,[_.DIRT]:8148537,[_.STONE]:9277592,[_.SAND]:14336637,[_.LOG]:8345912,[_.LEAVES]:5018445,[_.WATER]:4883158,[_.BEDROCK]:4605510,[_.SNOW]:15134455,[_.CACTUS]:4821577,[_.FLOWER_RED]:13317697,[_.FLOWER_YELLOW]:15451450,[_.VINE]:4687176,[_.GRAVEL]:9538692,[_.MOSS]:7047759,[_.CASTLE_BRICK]:9277335,[_.PLANK]:11632725,[_.BRAMBLE]:6192450,[_.SKELETON_SPAWNER]:6317423,[_.BOW]:10775353,[_.ARROW]:12304072};function Eu(i,t=0){return new li({color:i,emissive:t})}function Te(i,t,e=1){return{position:i,rotation:t,scale:e}}function yu(i,t,e,n,s=null){const r=new ve(t,e);return r.position.copy(n),s&&r.rotation.set(s.x,s.y,s.z),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xt(i,t,e,n,s,r=null,a=0){const o=new En(e.x,e.y,e.z),l=Eu(s,a);return t.push(l),yu(i,o,l,n,r)}function bu(i,t,e,n,s,r,a,o=null,l=0){const c=new zs(e,n,s,8),u=Eu(a,l);return t.push(u),yu(i,c,u,r,o)}function Jg(i,t,e){const n=jg[e]??9145227;Xt(i,t,new T(.34,.34,.34),new T(0,0,0),n),Xt(i,t,new T(.26,.02,.26),new T(0,.16,0),16777215,null,526344)}function Qg(i,t){Xt(i,t,new T(.24,.24,.24),new T(0,0,0),13184301),Xt(i,t,new T(.04,.08,.04),new T(.02,.16,0),7292710),Xt(i,t,new T(.1,.03,.07),new T(.08,.18,0),6266178)}function Ha(i,t){Xt(i,t,new T(.06,.36,.04),new T(0,-.02,0),12173256),Xt(i,t,new T(.09,.05,.08),new T(0,-.24,0),5978916),Xt(i,t,new T(.14,.03,.06),new T(0,-.18,0),3812643)}function t_(i,t){Xt(i,t,new T(.05,.34,.04),new T(.05,.02,0),14146018,new Gt(0,0,-.42)),Xt(i,t,new T(.16,.03,.06),new T(-.04,-.16,0),10322762),Xt(i,t,new T(.05,.12,.05),new T(-.1,-.24,0),7293998)}function e_(i,t){bu(i,t,.02,.02,.42,new T(0,0,0),10513721,new Gt(0,0,Math.PI*.5)),Xt(i,t,new T(.05,.28,.04),new T(-.14,.11,0),9264175,new Gt(0,0,-.55)),Xt(i,t,new T(.05,.28,.04),new T(-.14,-.11,0),9264175,new Gt(0,0,.55)),Xt(i,t,new T(.01,.44,.01),new T(-.26,0,0),14147043)}function n_(i,t){Xt(i,t,new T(.18,.08,.14),new T(0,-.12,0),5980461);for(const e of[-.06,0,.06])Xt(i,t,new T(.025,.26,.03),new T(e,.08,0),14738410,new Gt(0,0,-.12))}function i_(i,t){Xt(i,t,new T(.08,.42,.08),new T(0,-.06,0),8148537),Xt(i,t,new T(.24,.12,.14),new T(0,.22,0),8225677),Xt(i,t,new T(.05,.16,.05),new T(.12,.22,0),11832382,null,2758400),Xt(i,t,new T(.05,.16,.05),new T(-.12,.22,0),11832382,null,2758400)}function s_(i,t){Xt(i,t,new T(.07,.44,.07),new T(0,-.08,0),8214327),Xt(i,t,new T(.21,.15,.05),new T(.09,.16,0),10475250,new Gt(0,0,-.2),1454659),Xt(i,t,new T(.08,.11,.04),new T(-.07,.12,0),13364989,new Gt(0,0,.35),1585212)}function r_(i,t){Xt(i,t,new T(.04,.38,.04),new T(0,0,0),9134139)}function a_(i,t,e=10578489,n=14606046){bu(i,t,.018,.018,.42,new T(0,0,0),e,new Gt(0,0,Math.PI*.5)),Xt(i,t,new T(.05,.27,.04),new T(-.14,.11,0),e,new Gt(0,0,-.56)),Xt(i,t,new T(.05,.27,.04),new T(-.14,-.11,0),e,new Gt(0,0,.56)),Xt(i,t,new T(.01,.44,.01),new T(-.26,0,0),n,null,1118481)}function o_(i,t){Xt(i,t,new T(.03,.38,.03),new T(0,0,0),9068601),Xt(i,t,new T(.09,.09,.03),new T(0,.18,0),13027793),Xt(i,t,new T(.08,.05,.01),new T(0,-.16,.015),12864331)}function Tc(i,t,e,n){Xt(i,t,new T(.05,.4,.05),new T(0,-.05,0),n),Xt(i,t,new T(.18,.12,.05),new T(.08,.13,0),e,new Gt(0,0,-.14))}function wc(i,t,e,n){Xt(i,t,new T(.05,.4,.05),new T(0,-.05,0),n),Xt(i,t,new T(.24,.06,.05),new T(0,.14,0),e)}function Rc(i,t,e,n){Xt(i,t,new T(.05,.38,.05),new T(0,-.04,0),n),Xt(i,t,new T(.11,.16,.05),new T(0,.13,0),e)}function Au(i,t){!i||!t||(i.position.copy(t.position),i.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z),i.scale.setScalar(t.scale??1))}function Tu(i,t=!1){switch(i){case _.WOOD_AXE:case _.STONE_AXE:case _.WEAPON_YETI_AXE:return t?Te(new T(.08,-.04,.02),new Gt(-.18,.18,.86),1):Te(new T(.02,-.2,.02),new Gt(.12,.04,1.62),1.2);case _.WOOD_PICKAXE:case _.STONE_PICKAXE:return t?Te(new T(.06,-.05,.01),new Gt(-.14,.1,.94),1):Te(new T(.02,-.2,.01),new Gt(.1,.04,1.58),1.2);case _.WOOD_SPADE:case _.STONE_SPADE:return t?Te(new T(.05,-.06,.02),new Gt(-.12,.12,.52),1):Te(new T(.02,-.19,.01),new Gt(.08,.03,1.54),1.16);case _.WOOD_SWORD:case _.STONE_SWORD:case _.WEAPON_BANDIT_BLADE:case _.WEAPON_RAIDER_SABER:return t?Te(new T(.04,-.08,.02),new Gt(-.05,.1,.22),1):Te(new T(.01,-.16,.24),new Gt(1.57,.04,.02),1.24);case _.WEAPON_WRAITH_HAMMER:return t?Te(new T(.07,-.08,.01),new Gt(-.12,.18,.68),1):Te(new T(.02,-.2,.01),new Gt(.08,.03,1.56),1.16);case _.WEAPON_SCORP_BOW:case _.BOW:return t?Te(new T(.01,-.06,.02),new Gt(.02,.18,1.36),1):Te(new T(.03,-.16,.06),new Gt(.18,.12,1.57),1.28);case _.ARROW:return t?Te(new T(.02,-.05,.02),new Gt(.08,.02,.28),.95):Te(new T(.02,-.17,.01),new Gt(.08,.03,1.55),1.12);case _.WEAPON_JAGUAR_CLAWS:return t?Te(new T(.02,-.03,.03),new Gt(.18,.2,.16),1):Te(new T(.02,-.1,.04),new Gt(.18,.08,1.26),1.02);default:return t?Te(new T(0,0,0),new Gt(0,0,0),.9):Te(new T(.01,-.12,.02),new Gt(.1,.06,1.3),.98)}}function l_(i){return Number.isFinite(i)&&i>_.AIR}function wu(i){if(!l_(i))return null;const t=new tn,e=[];switch(i){case _.APPLE:Qg(t,e);break;case _.WEAPON_BANDIT_BLADE:Ha(t,e);break;case _.WEAPON_RAIDER_SABER:t_(t,e);break;case _.WEAPON_SCORP_BOW:e_(t,e);break;case _.BOW:a_(t,e);break;case _.ARROW:o_(t,e);break;case _.WEAPON_JAGUAR_CLAWS:n_(t,e);break;case _.WEAPON_WRAITH_HAMMER:i_(t,e);break;case _.WEAPON_YETI_AXE:s_(t,e);break;case _.STICK:r_(t,e);break;case _.WOOD_SWORD:Ha(t,e),t.traverse(n=>{n.isMesh&&n.material.color.setHex(n.position.y>-.12?12225108:8279605)});break;case _.WOOD_AXE:Tc(t,e,12752226,8345399);break;case _.WOOD_PICKAXE:wc(t,e,12752226,8345399);break;case _.WOOD_SPADE:Rc(t,e,12752226,8345399);break;case _.STONE_SWORD:Ha(t,e);break;case _.STONE_AXE:Tc(t,e,11515071,8345399);break;case _.STONE_PICKAXE:wc(t,e,11515071,8345399);break;case _.STONE_SPADE:Rc(t,e,11515071,8345399);break;default:Jg(t,e,i);break}return t.userData.dispose=()=>{t.traverse(n=>{n.isMesh&&n.geometry?.dispose?.()});for(const n of e)n.dispose?.()},t}class c_{constructor(t){this.camera=t,this.root=new tn,this.root.position.set(.42,-.34,-.72),this.root.rotation.set(-.36,-.2,-.12),this.camera.add(this.root),this.currentItemId=_.AIR,this.currentModel=null}setItem(t){const e=Number.isFinite(t)?t:_.AIR;if(e===this.currentItemId)return;this.currentItemId=e,this.currentModel&&(this.root.remove(this.currentModel),this.currentModel.userData.dispose?.(),this.currentModel=null);const n=wu(e);n&&(Au(n,Tu(e,!0)),this.root.add(n),this.currentModel=n)}update(t){if(!this.currentModel)return;const e=Math.sin(t*1.7)*.012;this.root.position.y=-.34+e,this.root.rotation.z=-.12+Math.sin(t*1.35)*.025}}function Bo(i,t,e=1){const n=Number.isFinite(t)?t:_.AIR;if(i.userData.itemId===n)return;i.userData.model&&(i.remove(i.userData.model),i.userData.model.userData.dispose?.(),i.userData.model=null),i.userData.itemId=n;const s=wu(n);s&&(Au(s,Tu(n,!1)),s.scale.multiplyScalar(e),i.add(s),i.userData.model=s)}const Ru=20,u_=28,Cc=30,h_=5,Ic=18,f_=12;function d_(i,t,e,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=t[a],c=e[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function p_(i=13620443,t=13191754){const e=new tn,n=new ve(new zs(.018,.018,.72,8),new li({color:9134139}));n.rotation.z=Math.PI*.5,e.add(n);const s=new ve(new il(.05,.15,4),new li({color:i}));s.rotation.z=-Math.PI*.5,s.position.x=.38,e.add(s);for(const r of[-.03,.03]){const a=new ve(new En(.12,.05,.01),new li({color:t}));a.position.set(-.28,0,r),e.add(a)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e.userData.dispose=()=>{e.traverse(r=>{r.isMesh&&(r.geometry?.dispose?.(),r.material?.dispose?.())})},e}function m_(i,t,e,n=Ru){const s=t.x-i.x,r=t.z-i.z,a=t.y-i.y,o=Math.hypot(s,r);if(o<.001)return null;const l=e*e,c=l*l-n*(n*o*o+2*a*l);if(c<0)return null;const u=Math.sqrt(c),h=(l-u)/(n*o),f=1/Math.sqrt(1+h*h),p=h*f;return new T(s/o*e*f,e*p,r/o*e*f)}class g_{constructor(t,e,n,s={}){this.scene=t,this.world=e,this.mobs=n,this.onPlayerHit=s.onPlayerHit??(()=>{}),this.projectiles=new Map,this.nextId=1,this.tmpDir=new T,this.tmpFrom=new T,this.tmpTo=new T,this.tmpMin=new T,this.tmpMax=new T}spawnArrow({origin:t,velocity:e,ownerType:n,ownerEntityId:s=null,hitMobs:r=!1,hitPlayer:a=!1,damage:o=Ic}){const l=this.nextId++,c=p_(n==="mob"?15264752:14015202,n==="mob"?7310543:13191754);c.position.copy(t),this.scene.add(c);const u={id:l,mesh:c,position:t.clone(),velocity:e.clone(),ownerType:n,ownerEntityId:s,hitMobs:r,hitPlayer:a,damage:o,life:h_};return this.alignArrow(u),this.projectiles.set(l,u),u}firePlayerArrow(t,e,n){const s=e.clone().multiplyScalar(u_);return this.spawnArrow({origin:t,velocity:s,ownerType:"player",hitMobs:!0,hitPlayer:!1,damage:n??Ic})}fireSkeletonArrow(t,e,n){return this.spawnArrow({origin:t,velocity:e,ownerType:"mob",ownerEntityId:n,hitMobs:!1,hitPlayer:!0,damage:f_})}alignArrow(t){this.tmpDir.copy(t.velocity).normalize(),t.mesh.quaternion.setFromUnitVectors(new T(1,0,0),this.tmpDir)}removeProjectile(t){const e=this.projectiles.get(t);e&&(this.scene.remove(e.mesh),e.mesh.userData.dispose?.(),this.projectiles.delete(t))}hitSolidOnSegment(t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.14));for(let l=1;l<=o;l++){const c=l/o,u=Math.floor(t.x+n*c),h=Math.floor(t.y+s*c),f=Math.floor(t.z+r*c);if(Kr(this.world.getBlock(u,h,f)))return!0}return!1}hitPlayerOnSegment(t,e,n){const s=n.getAABB();this.tmpMin.set(s.minX,s.minY,s.minZ),this.tmpMax.set(s.maxX,s.maxY,s.maxZ),this.tmpDir.subVectors(e,t);const r=this.tmpDir.length();if(r<1e-6)return!1;this.tmpDir.divideScalar(r);const a=d_(t,this.tmpDir,this.tmpMin,this.tmpMax);return a!==null&&a<=r}update(t,e){for(const[n,s]of this.projectiles){if(this.tmpFrom.copy(s.position),s.velocity.y-=Ru*t,s.position.addScaledVector(s.velocity,t),this.tmpTo.copy(s.position),this.hitSolidOnSegment(this.tmpFrom,this.tmpTo)){this.removeProjectile(n);continue}if(s.hitMobs||s.ownerType==="mob"){const r=this.mobs.hitEntityOnSegment(this.tmpFrom,this.tmpTo,s.ownerEntityId,a=>s.ownerType!=="mob"?!0:this.mobs.areEntitiesHostile(s.ownerEntityId,a.id));if(r){this.mobs.damageEntity(r,s.damage),this.removeProjectile(n);continue}}if(s.hitPlayer&&this.hitPlayerOnSegment(this.tmpFrom,this.tmpTo,e)){this.onPlayerHit(s.damage,s),this.removeProjectile(n);continue}s.mesh.position.copy(s.position),this.alignArrow(s),s.life-=t,s.life<=0&&this.removeProjectile(n)}}}function nt(i,t,e,n){const s=new En(t[0],t[1],t[2]),r=new li({color:n}),a=new ve(s,r);return a.position.set(e[0],e[1],e[2]),i.add(a),a}function fn(i,t,e,n=1776411,s=.12){nt(i,[.06,.06,.02],[-s,t,e],n),nt(i,[.06,.06,.02],[s,t,e],n)}function dn(i){return{type:i,legs:[],arms:[],wings:[],tail:null,head:null}}function __(i){const t=dn("humanoid");return nt(i,[.6,.92,.34],[0,.46,0],3960737),t.head=nt(i,[.52,.5,.36],[0,1.17,0],14664353),t.legs.push(nt(i,[.18,.56,.2],[-.2,.24,0],2964307)),t.legs.push(nt(i,[.18,.56,.2],[.2,.24,0],2964307)),t.arms.push(nt(i,[.1,.4,.1],[-.36,.62,0],14664353)),t.arms.push(nt(i,[.1,.4,.1],[.36,.62,0],14664353)),nt(i,[.58,.1,.38],[0,1.48,0],3812130),fn(i,1.2,.19,1710618,.11),nt(i,[.1,.03,.02],[0,1.09,.19],8015674),t}function Cu(i){const t=dn("quadruped");nt(i,[.75,.44,.34],[0,.58,0],10516047),t.head=nt(i,[.32,.32,.28],[.42,.76,0],10120774),nt(i,[.2,.14,.2],[.53,.62,0],9330233),t.tail=nt(i,[.08,.12,.08],[-.42,.64,0],8542003),fn(i,.8,.14,1513239,.05);for(const e of[-.24,.24])t.legs.push(nt(i,[.14,.38,.14],[e,.2,.12],8082486)),t.legs.push(nt(i,[.14,.38,.14],[e,.2,-.12],8082486));return nt(i,[.04,.28,.04],[.5,1.02,.09],13878443),nt(i,[.04,.28,.04],[.5,1.02,-.09],13878443),t}function x_(i){const t=dn("crawler");nt(i,[.8,.22,.32],[0,.38,0],12169325),t.head=nt(i,[.3,.18,.24],[.49,.41,0],10261593),t.tail=nt(i,[.46,.1,.1],[-.62,.32,0],9208913),fn(i,.45,.13,2236962,.05);for(const e of[-.13,.13])t.legs.push(nt(i,[.14,.1,.14],[-.15,.2,e],10063705)),t.legs.push(nt(i,[.14,.1,.14],[.2,.2,e],10063705));return t}function v_(i){const t=dn("flying");return nt(i,[.32,.42,.28],[0,.64,0],3065451),t.head=nt(i,[.28,.24,.24],[.14,.9,0],2339935),nt(i,[.1,.08,.08],[.3,.88,0],14985781),fn(i,.93,.12,1052688,.045),t.wings.push(nt(i,[.48,.06,.2],[0,.66,.19],5232383)),t.wings.push(nt(i,[.48,.06,.2],[0,.66,-.19],4110304)),t.tail=nt(i,[.14,.16,.12],[-.2,.4,0],2861402),t}function S_(i){const t=dn("quadruped");nt(i,[.68,.4,.3],[0,.58,0],14408927),t.head=nt(i,[.3,.28,.24],[.38,.76,0],13158862),fn(i,.79,.12,1447446,.05),nt(i,[.06,.24,.06],[.43,.98,.09],13218950),nt(i,[.06,.24,.06],[.43,.98,-.09],13218950);for(const e of[-.2,.2])t.legs.push(nt(i,[.13,.36,.13],[e,.2,.11],9869213)),t.legs.push(nt(i,[.13,.36,.13],[e,.2,-.11],9869213));return t}function Pc(i){const t=dn("quadruped");nt(i,[.74,.46,.42],[0,.58,0],15790319),t.head=nt(i,[.34,.3,.28],[.43,.72,0],4602932),fn(i,.74,.14,1250067,.06);for(const e of[-.22,.22])t.legs.push(nt(i,[.13,.34,.13],[e,.2,.14],6181962)),t.legs.push(nt(i,[.13,.34,.13],[e,.2,-.14],6181962));return t}function M_(i){const t=Cu(i);return nt(i,[.04,.24,.04],[.52,1.14,.14],14209727),nt(i,[.04,.16,.04],[.57,1.2,.18],14209727),nt(i,[.04,.24,.04],[.52,1.14,-.14],14209727),nt(i,[.04,.16,.04],[.57,1.2,-.18],14209727),t}function ko(i,t,e,n=!1){const s=dn("humanoid");return nt(i,[.56,.88,.32],[0,.46,0],t),s.head=nt(i,[.44,.48,.32],[0,1.14,0],e),s.legs.push(nt(i,[.16,.56,.16],[-.18,.22,0],3155487)),s.legs.push(nt(i,[.16,.56,.16],[.18,.22,0],3155487)),s.arms.push(nt(i,[.12,.42,.12],[-.34,.62,0],e)),s.arms.push(nt(i,[.12,.42,.12],[.34,.62,0],e)),fn(i,1.16,.17,n?12524829:1315860,.08),nt(i,[.12,.04,.02],[0,1.04,.17],n?5181456:7819064),n&&nt(i,[.46,.08,.36],[0,1.42,0],2039583),s}function E_(i){const t=dn("crawler");nt(i,[.66,.3,.32],[0,.48,0],9929799),t.head=nt(i,[.32,.2,.24],[.42,.54,0],8219191),fn(i,.58,.12,13512478,.05),t.tail=nt(i,[.5,.08,.08],[-.58,.42,0],7166512);for(const e of[-.13,.13])t.legs.push(nt(i,[.12,.2,.12],[-.16,.2,e],8351806)),t.legs.push(nt(i,[.12,.2,.12],[.16,.2,e],8351806));return t}function y_(i){const t=dn("quadruped");nt(i,[.74,.34,.32],[0,.54,0],12747069),t.head=nt(i,[.32,.24,.24],[.45,.62,0],11300657),fn(i,.65,.12,12394014,.05);for(const e of[-.22,.22])t.legs.push(nt(i,[.12,.28,.12],[e,.2,.13],9329191)),t.legs.push(nt(i,[.12,.28,.12],[e,.2,-.13],9329191));return t.tail=nt(i,[.44,.08,.08],[-.58,.5,0],9066533),t}function b_(i){const t=dn("wraith");return nt(i,[.64,.86,.42],[0,.56,0],7962758),t.head=nt(i,[.48,.36,.34],[0,1.18,0],6976378),t.arms.push(nt(i,[.26,.5,.16],[-.45,.62,0],6713207)),t.arms.push(nt(i,[.26,.5,.16],[.45,.62,0],6713207)),fn(i,1.2,.18,16756019,.09),t}function A_(i){const t=dn("humanoid");return nt(i,[.78,.96,.48],[0,.58,0],13162981),t.head=nt(i,[.52,.5,.4],[0,1.23,0],14149103),t.arms.push(nt(i,[.28,.62,.2],[-.48,.62,0],12111067)),t.arms.push(nt(i,[.28,.62,.2],[.48,.62,0],12111067)),t.legs.push(nt(i,[.18,.5,.18],[-.2,.25,0],10334914)),t.legs.push(nt(i,[.18,.5,.18],[.2,.25,0],10334914)),fn(i,1.22,.2,9093375,.1),nt(i,[.16,.05,.03],[0,1.08,.2],5337490),t}function T_(i){const t=dn("humanoid"),e=15065814,n=13289144,s=10459786;nt(i,[.18,.82,.12],[0,.62,0],n),nt(i,[.46,.08,.16],[0,.9,0],e),nt(i,[.42,.08,.14],[0,.72,0],e);for(const r of[.82,.74,.66,.58])nt(i,[.46,.03,.03],[0,r,.1],n);return t.head=nt(i,[.42,.46,.32],[0,1.22,0],e),nt(i,[.22,.08,.06],[0,1.03,.13],n),t.legs.push(nt(i,[.12,.62,.12],[-.14,.31,0],n)),t.legs.push(nt(i,[.12,.62,.12],[.14,.31,0],n)),t.arms.push(nt(i,[.1,.66,.1],[-.32,.62,0],n)),t.arms.push(nt(i,[.1,.66,.1],[.32,.62,0],n)),fn(i,1.22,.17,1710618,.08),nt(i,[.1,.04,.02],[0,1.08,.17],s),t}function Er(i,t,e=!1){const n=new tn;let s;if(e)return s=__(n),{root:n,rig:s};switch(i.key){case"deer":s=Cu(n);break;case"lizard":s=x_(n);break;case"parrot":s=v_(n);break;case"goat":s=S_(n);break;case"sheep":s=Pc(n);break;case"reindeer":s=M_(n);break;case"bandit":s=ko(n,7228726,13674370,!0);break;case"raider":s=ko(n,5715753,13146740,!0);break;case"sandstalker":s=E_(n);break;case"jaguar":s=y_(n);break;case"rockwraith":s=b_(n);break;case"yeti":s=A_(n);break;case"skeleton":s=T_(n);break;default:s=Pc(n);break}return t&&nt(n,[.08,.08,.08],[.24,.9,.2],9376788),{root:n,rig:s}}function yr(i){const t=document.createElement("canvas");t.width=96,t.height=16;const e=new ta(t);e.minFilter=Qe;const n=new el({map:e,transparent:!0,depthTest:!1,depthWrite:!1}),s=new lu(n);s.scale.set(1.45,.26,1),s.position.set(0,2.25,0),i.mesh.add(s),i.healthCanvas=t,i.healthTexture=e,i.healthSprite=s,Iu(i)}function Iu(i){if(!i.healthCanvas)return;const t=i.healthCanvas.getContext("2d");t.clearRect(0,0,i.healthCanvas.width,i.healthCanvas.height),t.fillStyle="rgba(25,25,25,0.85)",t.fillRect(0,0,96,16);const e=Math.max(0,Math.min(1,i.health/i.maxHealth));t.fillStyle="rgba(192,36,36,0.95)",t.fillRect(2,2,Math.floor(92*e),12),i.healthTexture.needsUpdate=!0}function br(i){const t=new sl(.65,.95,24),e=new us({color:16726843,transparent:!0,opacity:0,side:cn,depthTest:!1}),n=new ve(t,e);n.position.set(0,1.05,0),n.rotation.x=Math.PI/2,i.mesh.add(n),i.damageHalo=n}const Zn=384,jn=(Ti+5)*et,w_={[Ot.FOREST]:{key:"deer",name:"Deer",color:10516047,speed:1.6},[Ot.DESERT]:{key:"lizard",name:"Lizard",color:12169325,speed:1.4},[Ot.JUNGLE]:{key:"parrot",name:"Parrot",color:3065451,speed:2.2,flying:!0},[Ot.MOUNTAIN]:{key:"goat",name:"Goat",color:14145757,speed:1.5},[Ot.PLAINS]:{key:"sheep",name:"Sheep",color:15790319,speed:1.3},[Ot.TUNDRA]:{key:"reindeer",name:"Reindeer",color:10454377,speed:1.5}},R_={[Ot.FOREST]:{key:"bandit",name:"Bandit",color:7228726,speed:2.1,health:65,drop:_.WEAPON_BANDIT_BLADE},[Ot.DESERT]:{key:"sandstalker",name:"Sandstalker",color:9929799,speed:2,health:58,drop:_.WEAPON_SCORP_BOW},[Ot.JUNGLE]:{key:"jaguar",name:"Jungle Stalker",color:12747069,speed:2.3,health:60,drop:_.WEAPON_JAGUAR_CLAWS},[Ot.MOUNTAIN]:{key:"rockwraith",name:"Rock Wraith",color:7962758,speed:1.9,health:72,drop:_.WEAPON_WRAITH_HAMMER},[Ot.PLAINS]:{key:"raider",name:"Raider",color:7358520,speed:2,health:68,drop:_.WEAPON_RAIDER_SABER},[Ot.TUNDRA]:{key:"yeti",name:"Yeti",color:13162981,speed:1.8,health:85,drop:_.WEAPON_YETI_AXE}},C_=new Set(["bandit","raider"]),Jn={key:"skeleton",name:"Skeleton",speed:1.95,health:54,drop:null};function Ar(i,t,e=!1){return e||t==="humanoid"||t==="wraith"||i==="bandit"||i==="raider"||i==="yeti"||i==="rockwraith"?Math.PI*.5:0}function Dc(i){switch(i.key){case"bandit":case"raider":case"skeleton":case"questgiver":return{centerY:.96,halfX:.28,halfY:.96,halfZ:.22};case"yeti":return{centerY:1.02,halfX:.38,halfY:1.02,halfZ:.28};case"rockwraith":return{centerY:.92,halfX:.34,halfY:.92,halfZ:.26};case"deer":case"reindeer":return{centerY:.6,halfX:.52,halfY:.5,halfZ:.22};case"goat":case"sheep":return{centerY:.58,halfX:.46,halfY:.46,halfZ:.24};case"jaguar":return{centerY:.56,halfX:.48,halfY:.34,halfZ:.2};case"lizard":case"sandstalker":return{centerY:.4,halfX:.5,halfY:.2,halfZ:.18};case"parrot":return{centerY:.7,halfX:.2,halfY:.24,halfZ:.18};default:return{centerY:.7,halfX:.35,halfY:.5,halfZ:.24}}}function Lc(i,t,e,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=t[a],c=e[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function Ji(i,t,e){const n=Math.floor(t),s=Math.floor(e);for(let r=xe-1;r>=1;r--){const a=i.getBlock(n,r,s),o=i.getBlock(n,r+1,s);if(a!==_.AIR&&a!==_.WATER&&o===_.AIR)return r}return 1}function I_(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.35));for(let l=1;l<o;l++){const c=l/o,u=Math.floor(t.x+n*c),h=Math.floor(t.y+s*c),f=Math.floor(t.z+r*c),p=i.getBlock(u,h,f);if(p!==_.AIR&&p!==_.WATER&&p!==_.LEAVES&&p!==_.VINE)return!1}return!0}class P_{constructor(t,e,n={}){this.scene=t,this.world=e,this.onEnemyKilled=n.onEnemyKilled??(()=>{}),this.onQuestGiverKilled=n.onQuestGiverKilled??(()=>{}),this.entities=new Map,this.chunkSpawns=new Map,this.hostileSites=new Map,this.hostileSiteSpawns=new Map,this.skeletonSpawnerSpawns=new Map,this.nextId=1,this.spawnTick=0,this.tmpDir=new T,this.raycaster=new Af}attachEntityMesh(t){t.mesh.userData.entityId=t.id,t.mesh.traverse(e=>{e.isMesh&&(e.userData.entityId=t.id)}),this.scene.add(t.mesh)}attachHeldItem(t,e,n=.72){if(!e)return;const s=new tn;s.position.set(.05,-.3,.02),s.rotation.set(.08,.04,-.08),(t.rig?.arms?.[1]??t.mesh).add(s),Bo(s,e,n),t.heldAnchor=s,t.heldItemId=e}spawnForChunk(t){const e=t.key;if(this.chunkSpawns.has(e))return;const n=t.cx*et+et*.5,s=t.cz*et+et*.5,r=this.world.getBiomeAt(n,s),a=[];a.push(this.spawnMob(t,r,w_[r],!1));const o=xt(t.cx,t.cz,45019);(r===Ot.FOREST||r===Ot.PLAINS||r===Ot.JUNGLE)&&o>1-$r.questgiverChance&&a.push(this.spawnQuestGiver(t,r)),this.chunkSpawns.set(e,a.filter(Boolean))}getHostileSite(t,e){const n=`${t},${e}`;if(this.hostileSites.has(n))return this.hostileSites.get(n);if(xt(t,e,88901)>$r.hostileSiteChance)return this.hostileSites.set(n,null),null;const r=64,a=t*Zn+r+Math.floor(xt(t,e,88911)*(Zn-r*2)),o=e*Zn+r+Math.floor(xt(t,e,88921)*(Zn-r*2)),l=this.world.getBiomeAt(a,o),c=R_[l],u=C_.has(c.key);let h=1;u?h=3+(xt(t,e,88931)*3|0):xt(t,e,88941)>.8&&(h=2);const f={key:n,x:a,z:o,biome:l,def:c,intelligent:u,groupSize:h};return this.hostileSites.set(n,f),f}spawnHostileSite(t){if(this.hostileSiteSpawns.has(t.key))return;const e=[],n=Ji(this.world,t.x,t.z);for(let s=0;s<t.groupSize;s++){const r=xt(s,t.x,7801)*Math.PI*2,a=t.intelligent?2.2+xt(s,t.z,7802)*4.5:xt(s,t.z,7803)*2.5,o=Math.floor(t.x+Math.cos(r)*a),l=Math.floor(t.z+Math.sin(r)*a),c=Ji(this.world,o,l),u=this.spawnHostileAt(t,s,o,c,l,n);u&&e.push(u)}this.hostileSiteSpawns.set(t.key,e)}spawnHostileAt(t,e,n,s,r,a){const{root:o,rig:l}=Er(t.def,!0,!1),c=this.nextId++,u=s+(t.def.flying?5.3:1.02);o.position.set(n+.5,u,r+.5);const h=Math.PI*2*e/Math.max(1,t.groupSize),f=t.intelligent?3.2:1.6,p={id:c,sourceType:"site",sourceKey:t.key,biome:t.biome,kind:"mob",key:t.def.key,name:t.def.name,hostile:!0,flying:!!t.def.flying,intelligent:t.intelligent,speed:t.def.speed,mesh:o,rig:l,vx:0,vz:0,wanderTimer:.6+xt(c,n,8111)*2,attackTimer:0,homeY:u,homeX:t.x+Math.cos(h)*f,homeZ:t.z+Math.sin(h)*f,patrolRadius:t.intelligent?7.5:10,animPhase:xt(c,n,9201)*Math.PI*2,groupId:t.key,groupCenterY:a+1.02,maxHealth:t.def.health,health:t.def.health,dropItem:t.def.drop,damageFlash:0,shootCooldown:0,faction:On.NEUTRAL,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:Ar(t.def.key,l?.type,!1)};return yr(p),br(p),this.entities.set(c,p),this.attachEntityMesh(p),c}findSkeletonSpawnerPosition(t,e,n){const s=[[2,0],[-2,0],[0,2],[0,-2],[3,1],[-3,-1],[1,-3],[-1,3]];for(const[r,a]of s){const o=t+r,l=n+a,c=Ji(this.world,o,l);if(!(Math.abs(c-e)>5)&&this.world.getBlock(o,c+1,l)===_.AIR&&this.world.getBlock(o,c+2,l)===_.AIR)return{x:o+.5,y:c+1.02,z:l+.5,homeY:c+1.02}}return this.world.getBlock(t,e+1,n)===_.AIR&&this.world.getBlock(t,e+2,n)===_.AIR?{x:t+.5,y:e+1.02,z:n+.5,homeY:e+1.02}:null}spawnSkeletonFromSpawner(t,e,n,s){const r=this.findSkeletonSpawnerPosition(t,e,n);if(!r)return null;const{root:a,rig:o}=Er(Jn,!0,!1),l=xt(t*31+e,n*17+this.nextId,this.world.seed+9123)>.5?_.BOW:_.STONE_SWORD,c=this.nextId++;a.position.set(r.x,r.y,r.z);const u={id:c,sourceType:"spawner",sourceKey:s,biome:this.world.getBiomeAt(t,n),kind:"mob",key:Jn.key,name:Jn.name,hostile:!0,flying:!1,intelligent:!1,speed:Jn.speed,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.5+xt(c,t,8119)*1.8,attackTimer:0,homeY:r.homeY,homeX:t+.5,homeZ:n+.5,patrolRadius:6.5,animPhase:xt(c,n,9231)*Math.PI*2,groupId:s,maxHealth:Jn.health,health:Jn.health,dropItem:Jn.drop,damageFlash:0,ranged:l===_.BOW,shootCooldown:1.1+xt(t,n,6311)*.8,faction:On.OREUM,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:Ar(Jn.key,o?.type,!1)};return yr(u),br(u),this.attachHeldItem(u,l,1),this.entities.set(c,u),this.attachEntityMesh(u),c}spawnMob(t,e,n,s){const r=t.cx*et+2+Math.floor(xt(t.cx,t.cz,s?443:223)*12),a=t.cz*et+2+Math.floor(xt(t.cx,t.cz,s?877:557)*12),o=Ji(this.world,r,a),{root:l,rig:c}=Er(n,s,!1),u=this.nextId++,h=o+(n.flying?5.3:1.02);l.position.set(r+.5,h,a+.5);const f={id:u,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"mob",key:n.key,name:n.name,hostile:s,flying:!!n.flying,intelligent:!1,speed:n.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.3+xt(u,r,8111)*2,attackTimer:0,homeY:h,homeX:r,homeZ:a,patrolRadius:9,animPhase:xt(u,r,9201)*Math.PI*2,groupId:null,maxHealth:s?50:30,health:s?50:30,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,faction:On.NEUTRAL,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:Ar(n.key,c?.type,!1)};return s&&(yr(f),br(f)),this.entities.set(u,f),this.attachEntityMesh(f),u}spawnQuestGiver(t,e){const n=t.cx*et+4+Math.floor(xt(t.cx,t.cz,1201)*8),s=t.cz*et+4+Math.floor(xt(t.cx,t.cz,1202)*8),r=Ji(this.world,n,s),{root:a,rig:o}=Er({},!1,!0),l=this.nextId++;a.position.set(n+.5,r+1.02,s+.5);const c={id:l,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"mob",questgiver:!0,key:"questgiver",name:`Quest Giver (${Cg[e]})`,hostile:!1,flying:!1,intelligent:!1,speed:1.05,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.6+xt(l,n,8111)*2,attackTimer:0,homeY:r+1.02,homeX:n,homeZ:s,patrolRadius:7,animPhase:0,groupId:null,maxHealth:34,health:34,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,faction:On.HUMAN,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:Ar("questgiver",o?.type,!0)};return this.entities.set(l,c),this.attachEntityMesh(c),l}removeEntity(t){const e=this.entities.get(t);e&&(this.scene.remove(e.mesh),e.mesh.traverse(n=>{!n.isMesh&&!n.isSprite||(n.geometry?.dispose?.(),n.material?.dispose?.(),n.material?.map&&n.material.map.dispose?.())}),this.entities.delete(t))}getEntityFromObject(t){let e=t;for(;e;){if(e.userData&&e.userData.entityId!==void 0)return this.entities.get(e.userData.entityId)??null;e=e.parent}return null}attackFromRay(t,e,n,s){let r=null,a=n;const o=new T,l=new T;for(const c of this.entities.values()){if(c.kind!=="mob"||c.health<=0)continue;const u=Dc(c);o.set(c.mesh.position.x-u.halfX,c.mesh.position.y+u.centerY-u.halfY,c.mesh.position.z-u.halfZ),l.set(c.mesh.position.x+u.halfX,c.mesh.position.y+u.centerY+u.halfY,c.mesh.position.z+u.halfZ);const h=Lc(t,e,o,l);h===null||h>n||h<a&&(a=h,r=c)}return r?this.damageEntity(r,s):null}attackNearestInFront(t,e,n,s,r){return this.attackFromRay(t,e,n,r)}hitEntityOnSegment(t,e,n=null,s=null){const r=new T().subVectors(e,t),a=r.length();if(a<1e-6)return null;r.divideScalar(a);const o=new T,l=new T;let c=null,u=a;for(const h of this.entities.values()){if(h.kind!=="mob"||h.health<=0||n!==null&&h.id===n||s&&!s(h))continue;const f=Dc(h);o.set(h.mesh.position.x-f.halfX,h.mesh.position.y+f.centerY-f.halfY,h.mesh.position.z-f.halfZ),l.set(h.mesh.position.x+f.halfX,h.mesh.position.y+f.centerY+f.halfY,h.mesh.position.z+f.halfZ);const p=Lc(t,r,o,l);p===null||p>a||p<u&&(u=p,c=h)}return c}areEntitiesHostile(t,e){const n=this.entities.get(t),s=this.entities.get(e);return!n||!s?!1:Ac(n.faction,s.faction)}findNearestFactionTarget(t,e){if(!t?.faction||t.faction===On.NEUTRAL)return null;let n=null,s=e*e;for(const r of this.entities.values()){if(r.id===t.id||r.kind!=="mob"||r.health<=0||!Ac(t.faction,r.faction))continue;const a=r.mesh.position.x-t.mesh.position.x,o=r.mesh.position.y-t.mesh.position.y,l=r.mesh.position.z-t.mesh.position.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}damageEntity(t,e){if(!t||t.kind!=="mob")return null;if(!t.hostile&&!t.provoked&&(t.provoked=!0,t.healthSprite||yr(t),t.damageHalo||br(t)),t.health=Math.max(0,t.health-e),t.damageFlash=.25,t.healthSprite&&Iu(t),t.health<=0){const n={name:t.name,key:t.key,dropItem:t.dropItem},s=!!t.questgiver;return this.removeEntity(t.id),t.hostile&&this.onEnemyKilled(n),s&&this.onQuestGiverKilled(t),{killed:!0,...n}}return{killed:!1,name:t.name,key:t.key}}spawnHostilesNear(t){const e=Ce(t.x-jn,Zn),n=Ce(t.x+jn,Zn),s=Ce(t.z-jn,Zn),r=Ce(t.z+jn,Zn);for(let a=s;a<=r;a++)for(let o=e;o<=n;o++){const l=this.getHostileSite(o,a);if(!l)continue;const c=l.x-t.x,u=l.z-t.z;c*c+u*u>jn*jn||this.spawnHostileSite(l)}}syncSpawns(t){for(const s of this.world.loaded.values())this.spawnForChunk(s);this.spawnHostilesNear(t),this.syncSkeletonSpawnerSpawns(t);const e=(Ti+6)*et,n=e*e;for(const[s,r]of this.entities){const a=r.mesh.position.x-t.x,o=r.mesh.position.z-t.z;a*a+o*o>n&&this.removeEntity(s)}for(const[s,r]of this.chunkSpawns.entries())r.some(a=>this.entities.has(a))||this.chunkSpawns.delete(s);for(const[s,r]of this.hostileSiteSpawns.entries())r.some(a=>this.entities.has(a))||this.hostileSiteSpawns.delete(s)}syncSkeletonSpawnerSpawns(t){const e=new Set,n=jn*jn;for(const[s,r]of this.world.modified.entries()){const a=this.world.loaded.get(s);if(a)for(const[o,l]of r.entries()){if(l!==_.SKELETON_SPAWNER)continue;const c=o%et,h=Math.floor(o/et)%et,f=Math.floor(o/(et*et)),p=a.cx*et+c,g=a.cz*et+h,x=p+.5-t.x,m=g+.5-t.z;if(x*x+m*m>n)continue;const d=`${p},${f},${g}`;e.add(d);const b=(this.skeletonSpawnerSpawns.get(d)??[]).filter(I=>this.entities.has(I));if(b.length>0){this.skeletonSpawnerSpawns.set(d,b);continue}const M=this.spawnSkeletonFromSpawner(p,f,g,d);M&&this.skeletonSpawnerSpawns.set(d,[M])}}for(const[s,r]of this.skeletonSpawnerSpawns.entries())if(!e.has(s)){for(const a of r)this.removeEntity(a);this.skeletonSpawnerSpawns.delete(s)}}animateEntity(t,e,n,s){if(!t.rig)return;const r=t.rig,a=n>.04,o=a?Math.min(.55,n*.16):.05;t.animPhase+=e*(a?8+n*2.4:2.2);for(let l=0;l<r.legs.length;l++){const c=r.legs[l],u=t.animPhase+(l%2===0?0:Math.PI);c.rotation.x=Math.sin(u)*o}for(let l=0;l<r.arms.length;l++){const c=r.arms[l],u=t.animPhase+(l%2===0?Math.PI:0);c.rotation.x=Math.sin(u)*(o*.9)}if(t.aimingBow&&r.arms[1]?(r.arms[1].rotation.x=-Math.PI*.48+(t.aimPitch??0),r.arms[1].rotation.y=t.aimYawLocal??0,r.arms[1].rotation.z=0,r.arms[0]&&(r.arms[0].rotation.x=-Math.PI*.36+(t.aimPitch??0)*.55,r.arms[0].rotation.y=(t.aimYawLocal??0)*.35,r.arms[0].rotation.z=.08),t.heldAnchor&&(t.heldAnchor.position.set(.02,-.08,.18),t.heldAnchor.rotation.set(-.24,.02,.02))):t.heldAnchor&&(t.heldAnchor.position.set(.05,-.3,.02),t.heldAnchor.rotation.set(.08,.04,-.08)),r.wings.length>0){const l=Math.sin(s*16+t.id)*(a?.7:.3);r.wings[0].rotation.z=l,r.wings[1]&&(r.wings[1].rotation.z=-l)}r.tail&&(r.tail.rotation.y=Math.sin(s*5+t.id)*.35,r.tail.rotation.x=Math.cos(s*4+t.id)*.12),r.head&&(r.head.rotation.x=Math.sin(s*2.7+t.id)*.05)}updateEntity(t,e,n,s,r,a=null,o=null){const l=t.mesh.position,c=this.findNearestFactionTarget(t,t.ranged?23:8.8),u=c?c.mesh.position:e,h=c?{x:c.vx??0,z:c.vz??0}:o,f=u.x-l.x,p=u.z-l.z,g=Math.hypot(f,p);t.targetEntityId=c?.id??null,t.aimingBow=!1,t.aimPitch=0,t.aimYawLocal=0;const x=t.hostile&&r,m=!!c;if((m||x)&&t.ranged&&g<23){t.shootCooldown=Math.max(0,t.shootCooldown-n);const b=9.5;if(g>15.5){const y=g>.001?1/g:0;t.vx=f*y*t.speed*.95,t.vz=p*y*t.speed*.95}else if(g<b){const y=g>.001?1/g:0;t.vx=-f*y*t.speed*.8,t.vz=-p*y*t.speed*.8}else t.vx*=Math.max(0,1-n*5),t.vz*=Math.max(0,1-n*5);const I=new T(u.x,u.y+.9,u.z);if(h){const y=g/Cc;I.x+=h.x*y*.55,I.z+=h.z*y*.55}const C=new T(l.x,l.y+1.12,l.z),R=m_(C,I,Cc);a&&R&&t.shootCooldown<=0&&I_(this.world,C,I)&&(a.fireSkeletonArrow(C,R,t.id),t.shootCooldown=1.15+xt(t.id,s*7|0,7071)*.35);const L=Math.max(.001,Math.hypot(R?.x??f,R?.z??p));t.aimPitch=Math.atan2(R?.y??0,L),t.aimYawLocal=0,t.aimingBow=!0,l.y=t.homeY}else if((m||x)&&g<8.8){const b=g>.001?1/g:0;t.vx=f*b*t.speed*1.25,t.vz=p*b*t.speed*1.25,t.attackTimer+=n*7,l.y=t.homeY+Math.sin(t.attackTimer)*.2,t.meleeCooldown=Math.max(0,(t.meleeCooldown??0)-n),c&&t.meleeCooldown<=0&&g<1.85&&(this.damageEntity(c,t.questgiver?8:10),t.meleeCooldown=.65)}else{if(t.wanderTimer-=n,t.wanderTimer<=0){const b=xt(s*10|0,t.id,7001)*Math.PI*2,M=t.speed*(t.intelligent?.55:.75);t.vx=Math.cos(b)*M,t.vz=Math.sin(b)*M,t.wanderTimer=1.8+xt(t.id,s*4|0,7002)*3.2}if(!t.hostile&&!m&&t.provoked&&g<7.2){const b=g>.001?1/g:0;t.vx=-f*b*t.speed*1.15,t.vz=-p*b*t.speed*1.15}if(t.hostile||m){const b=t.homeX-l.x,M=t.homeZ-l.z,I=Math.hypot(b,M);if(I>t.patrolRadius){const C=I>.001?1/I:0;t.vx=b*C*t.speed*.9,t.vz=M*C*t.speed*.9}}t.flying&&(l.y=t.homeY+Math.sin(s*2.3+t.id)*.7)}l.x+=t.vx*n,l.z+=t.vz*n;const d=Ji(this.world,l.x,l.z);if(!t.flying){const b=d+1.02;Math.abs(b-t.homeY)<4?(t.homeY=b,l.y=b):(t.vx*=-.8,t.vz*=-.8)}t.damageHalo&&(t.damageFlash=Math.max(0,t.damageFlash-n),t.damageHalo.material.opacity=t.damageFlash>0?.7*(t.damageFlash/.25):0),this.tmpDir.set(t.vx,0,t.vz);const A=this.tmpDir.length();t.aimingBow?t.mesh.rotation.y=-Math.atan2(p,f)+(t.modelYawOffset??0):A>.001&&(t.mesh.rotation.y=-Math.atan2(t.vz,t.vx)+(t.modelYawOffset??0)),this.animateEntity(t,n,A,s)}update(t,e,n,s=!0,r=null,a=null){this.spawnTick+=e,this.spawnTick>=1&&(this.syncSpawns(t),this.spawnTick=0);for(const o of this.entities.values())this.updateEntity(o,t,e,n,s,r,a)}countHostilesInRange(t,e){const n=e*e;let s=0;for(const r of this.entities.values()){if(!r.hostile||r.kind!=="mob")continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z;a*a+o*o+l*l<=n&&s++}return s}getNearestQuestGiver(t,e=4){let n=null,s=e*e;for(const r of this.entities.values()){if(!r.questgiver)continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}}const Nn=1e-4;class D_{constructor(t,e){this.camera=t,this.domElement=e,this.position=new T(0,40,0),this.velocity=new T(0,0,0),this.yaw=0,this.pitch=0,this.grounded=!1,this.flyMode=!1,this.jumpQueued=!1,this.lastSpaceTap=-9999,this.keys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1,Space:!1},this.isLocked=!1,this.tmpForward=new T,this.tmpRight=new T,this.tmpMove=new T,this.walkSpeed=dg,this.sneakSpeed=pg,this.flySpeed=mg,this.bindInput(),this.syncCamera()}setMovementSpeeds(t,e){this.walkSpeed=Math.max(1,t),this.sneakSpeed=Math.max(.5,this.walkSpeed*.5),this.flySpeed=Math.max(1,Math.min(300,e))}bindInput(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{if(!this.isLocked)return;const e=.0022;this.yaw-=t.movementX*e,this.pitch-=t.movementY*e;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch))}),document.addEventListener("keydown",t=>{if(t.code in this.keys){if(t.repeat)return;if(t.code==="Space"){const e=performance.now();e-this.lastSpaceTap<=vg?(this.flyMode=!this.flyMode,this.flyMode?this.velocity.y=0:this.velocity.y=Math.min(this.velocity.y,0),this.lastSpaceTap=-9999):(this.lastSpaceTap=e,this.flyMode||(this.jumpQueued=!0))}this.keys[t.code]=!0}}),document.addEventListener("keyup",t=>{t.code in this.keys&&(this.keys[t.code]=!1)})}getAABB(t=this.position){const e=ys*.5;return{minX:t.x-e,maxX:t.x+e,minY:t.y,maxY:t.y+xr,minZ:t.z-e,maxZ:t.z+e}}overlapsSolid(t,e){const n=Math.floor(e.minX),s=Math.floor(e.maxX-Nn),r=Math.floor(e.minY),a=Math.floor(e.maxY-Nn),o=Math.floor(e.minZ),l=Math.floor(e.maxZ-Nn);for(let c=r;c<=a;c++)for(let u=o;u<=l;u++)for(let h=n;h<=s;h++)if(Kr(t.getBlock(h,c,u)))return{x:h,y:c,z:u};return null}resolveAxis(t,e,n){if(n===0)return!1;this.position[e]+=n;let s=!1,r;for(;r=this.overlapsSolid(t,this.getAABB(this.position));)s=!0,e==="x"?(n>0?this.position.x=r.x-ys*.5-Nn:this.position.x=r.x+1+ys*.5+Nn,this.velocity.x=0):e==="y"?(n>0?this.position.y=r.y-xr-Nn:(this.position.y=r.y+1+Nn,this.grounded=!0),this.velocity.y=0):e==="z"&&(n>0?this.position.z=r.z-ys*.5-Nn:this.position.z=r.z+1+ys*.5+Nn,this.velocity.z=0);return s}update(t,e){const n=this.grounded;if(this.grounded=!1,this.tmpForward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.tmpRight.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.tmpMove.set(0,0,0),this.keys.KeyW&&this.tmpMove.add(this.tmpForward),this.keys.KeyS&&this.tmpMove.sub(this.tmpForward),this.keys.KeyD&&this.tmpMove.add(this.tmpRight),this.keys.KeyA&&this.tmpMove.sub(this.tmpRight),this.tmpMove.lengthSq()>0&&this.tmpMove.normalize(),this.flyMode){const r=this.flySpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=0,this.keys.Space&&(this.velocity.y+=r),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.velocity.y-=r)}else{const r=this.keys.ShiftLeft||this.keys.ShiftRight?this.sneakSpeed:this.walkSpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=Math.max(xg,this.velocity.y-_g*e),this.jumpQueued&&n&&(this.velocity.y=gg,this.grounded=!1),this.jumpQueued=!1}this.resolveAxis(t,"x",this.velocity.x*e),this.resolveAxis(t,"z",this.velocity.z*e),this.resolveAxis(t,"y",this.velocity.y*e),this.position.y<1&&(this.position.y=1,this.velocity.y=0,this.grounded=!0);const s=xe-.1;this.position.y+xr>s&&(this.position.y=s-xr,this.velocity.y=0),this.syncCamera()}syncCamera(){this.camera.position.set(this.position.x,this.position.y+fg,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}}const Ga=[_.FLOWER_RED,_.FLOWER_YELLOW,_.VINE,_.CACTUS,_.MOSS];class L_{constructor(t,e=1){this.ui=t,this.seed=e|0,this.coins=0,this.activeQuest=null,this.questCounter=0,this.ui.updateCoins(this.coins)}hasOpenDialogue(){return this.ui.isDialogueOpen()}closeDialogue(){this.ui.closeDialogue()}randomFor(t,e){const n=Math.sin((t+1)*12.9898+(this.seed+e)*78.233)*43758.5453;return n-Math.floor(n)}createQuestFor(t){const e=this.randomFor(t.id,this.questCounter+17),n=Ga[Math.floor(e*Ga.length)%Ga.length],s=4+Math.floor(this.randomFor(t.id,this.questCounter+99)*5)%5,r=8+s*3;return this.questCounter+=1,{id:this.questCounter,giverId:t.id,giverName:t.name,target:n,amount:s,reward:r,status:"active"}}getQuestProgress(t){return this.ui.getItemCount(t.target)}onTalkToQuestGiver(t){const e=t.name;if(!this.activeQuest){const a=this.createQuestFor(t),o=Ye[a.target].name;this.ui.openDialogue(e,`Traveler, I need ${a.amount} ${o} for my camp. Bring them to me and I will pay ${a.reward} coins.`,[{label:"Accept quest",onSelect:()=>{this.activeQuest=a,this.ui.openDialogue(e,`Quest accepted:
Collect ${a.amount} ${o}.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Maybe later",onSelect:()=>this.ui.closeDialogue()}]);return}if(this.activeQuest.giverId!==t.id){this.ui.openDialogue(e,`I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}const n=this.activeQuest,s=Ye[n.target].name,r=this.getQuestProgress(n);if(r>=n.amount){this.ui.openDialogue(e,`You brought the ${s}! Hand over ${n.amount} and collect ${n.reward} coins?`,[{label:"Turn in quest",onSelect:()=>{if(!this.ui.consumeItem(n.target,n.amount)){this.ui.openDialogue(e,"Looks like you no longer have the items.",[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}this.coins+=n.reward,this.ui.updateCoins(this.coins),this.activeQuest=null,this.ui.openDialogue(e,`Excellent work. Here are ${n.reward} coins.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Not now",onSelect:()=>this.ui.closeDialogue()}]);return}this.ui.openDialogue(e,`Progress: ${r}/${n.amount} ${s}. Keep searching.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}getActiveQuestText(){if(!this.activeQuest)return"";const t=this.activeQuest,e=this.getQuestProgress(t);return`Quest: ${t.giverName} wants ${t.amount} ${Ye[t.target].name} (${Math.min(e,t.amount)}/${t.amount})`}cancelQuestForGiver(t){!this.activeQuest||this.activeQuest.giverId!==t||(this.activeQuest=null,this.ui.isDialogueOpen()&&this.ui.closeDialogue())}}function N_(i,t,e,n){const s=e.x>0?1:-1,r=e.y>0?1:-1,a=e.z>0?1:-1;let o=Math.floor(t.x),l=Math.floor(t.y),c=Math.floor(t.z);const u=e.x===0?Number.POSITIVE_INFINITY:Math.abs(1/e.x),h=e.y===0?Number.POSITIVE_INFINITY:Math.abs(1/e.y),f=e.z===0?Number.POSITIVE_INFINITY:Math.abs(1/e.z),p=o+(e.x>0?1:0),g=l+(e.y>0?1:0),x=c+(e.z>0?1:0);let m=e.x===0?Number.POSITIVE_INFINITY:Math.abs((p-t.x)/e.x),d=e.y===0?Number.POSITIVE_INFINITY:Math.abs((g-t.y)/e.y),A=e.z===0?Number.POSITIVE_INFINITY:Math.abs((x-t.z)/e.z);const b=new T(o,l,c);for(;;){const M=i.getBlock(o,l,c);if(M!==0)return{x:o,y:l,z:c,id:M,previous:b.clone()};if(m<d)if(m<A){if(m>n)break;b.set(o,l,c),o+=s,m+=u}else{if(A>n)break;b.set(o,l,c),c+=a,A+=f}else if(d<A){if(d>n)break;b.set(o,l,c),l+=r,d+=h}else{if(A>n)break;b.set(o,l,c),c+=a,A+=f}}return null}const St=16,Tr=6,Nc=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","water","bedrock","snow","cactus_side","cactus_top","flower_red","flower_yellow","vine","gravel","moss","castle_brick","apple","plank","bramble","skeleton_spawner"];function we(i,t,e=12,n=1){const[s,r,a]=t,o=i.createImageData(St,St);for(let l=0;l<o.data.length;l+=4){const c=Math.random()*e-e*.5|0;o.data[l]=Math.max(0,Math.min(255,s+c)),o.data[l+1]=Math.max(0,Math.min(255,r+c)),o.data[l+2]=Math.max(0,Math.min(255,a+c)),o.data[l+3]=Math.floor(255*n)}i.putImageData(o,0,0)}function U_(i){const t=document.createElement("canvas");t.width=St,t.height=St;const e=t.getContext("2d",{willReadFrequently:!0});if(i==="grass_top")we(e,[64,164,68],26);else if(i==="grass_side"){we(e,[126,94,62],18),e.fillStyle="rgba(72, 170, 80, 0.9)",e.fillRect(0,0,St,4),e.fillStyle="rgba(60, 120, 42, 0.35)";for(let n=0;n<St;n+=2)e.fillRect(n,3+n*7%3,1,1)}else if(i==="dirt")we(e,[121,86,55],20);else if(i==="stone")we(e,[126,126,130],20);else if(i==="sand")we(e,[214,198,128],20);else if(i==="log_side"){we(e,[121,90,58],18),e.fillStyle="rgba(90, 58, 30, 0.28)";for(let n=0;n<St;n+=4)e.fillRect(n,0,2,St)}else if(i==="log_top")we(e,[159,122,82],10),e.strokeStyle="rgba(108, 74, 43, 0.75)",e.lineWidth=1,e.strokeRect(2.5,2.5,St-5,St-5),e.strokeRect(5.5,5.5,St-11,St-11);else if(i==="leaves")we(e,[63,145,64],36,.8);else if(i==="water")we(e,[62,119,212],16,.72),e.fillStyle="rgba(160, 210, 255, 0.2)",e.fillRect(0,2,St,2),e.fillRect(0,9,St,1);else if(i==="bedrock"){we(e,[52,52,52],28),e.fillStyle="rgba(96,96,96,0.32)";for(let n=0;n<24;n++)e.fillRect(Math.random()*St|0,Math.random()*St|0,1,1)}else if(i==="snow"){we(e,[230,238,244],9),e.fillStyle="rgba(188, 206, 220, 0.4)";for(let n=0;n<St;n+=3)e.fillRect(n,n*5%St,1,1)}else if(i==="cactus_side"){we(e,[54,146,66],15),e.fillStyle="rgba(36,98,44,0.42)";for(let n=1;n<St;n+=3)e.fillRect(n,0,1,St)}else if(i==="cactus_top")we(e,[70,152,80],14),e.fillStyle="rgba(35,93,42,0.6)",e.fillRect(3,3,St-6,St-6);else if(i==="flower_red")e.clearRect(0,0,St,St),e.fillStyle="rgba(56,144,62,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(196,34,44,0.92)",e.fillRect(5,2,6,4);else if(i==="flower_yellow")e.clearRect(0,0,St,St),e.fillStyle="rgba(56,146,64,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(242,199,44,0.92)",e.fillRect(5,2,6,4);else if(i==="vine"){e.clearRect(0,0,St,St),e.fillStyle="rgba(48,128,52,0.72)";for(let n=0;n<6;n++){const s=2+n*5%12;e.fillRect(s,1+n*2,2,3)}}else if(i==="gravel"){we(e,[132,128,121],22),e.fillStyle="rgba(88,84,81,0.25)";for(let n=0;n<16;n++)e.fillRect(Math.random()*St|0,Math.random()*St|0,1,1)}else if(i==="moss"){we(e,[80,126,64],18),e.fillStyle="rgba(36,74,30,0.18)";for(let n=0;n<16;n++)e.fillRect(Math.random()*St|0,Math.random()*St|0,2,1)}else if(i==="castle_brick"){we(e,[118,117,124],12),e.fillStyle="rgba(68,68,74,0.48)";for(let n=0;n<St;n+=4)e.fillRect(0,n,St,1);for(let n=0;n<St;n+=8)e.fillRect(n,0,1,4),e.fillRect(n+4,4,1,4),e.fillRect(n,8,1,4),e.fillRect(n+4,12,1,4)}else if(i==="apple")e.clearRect(0,0,St,St),e.fillStyle="rgba(196,36,36,0.92)",e.fillRect(4,4,8,8),e.fillStyle="rgba(232,120,120,0.55)",e.fillRect(5,5,3,3),e.fillStyle="rgba(76,138,58,0.8)",e.fillRect(7,2,2,2),e.fillStyle="rgba(112,84,38,0.8)",e.fillRect(8,1,1,2);else if(i==="plank"){we(e,[170,128,84],14),e.fillStyle="rgba(105,72,40,0.38)";for(let n=0;n<St;n+=4)e.fillRect(0,n,St,1);for(let n=2;n<St;n+=6)e.fillRect(n,1,1,St-2)}else if(i==="bramble"){e.clearRect(0,0,St,St),e.fillStyle="rgba(61,106,45,0.85)";for(let n=0;n<5;n++)e.fillRect(2+n*3,5+n%2,2,9);e.fillStyle="rgba(112,68,42,0.8)",e.fillRect(4,10,9,2),e.fillRect(5,6,7,2),e.fillStyle="rgba(220,220,210,0.95)";for(let n=0;n<6;n++)e.fillRect(2+n*11%11,4+n*7%8,1,1)}else if(i==="skeleton_spawner"){we(e,[70,74,82],10),e.fillStyle="rgba(36,38,44,0.92)",e.fillRect(2,2,St-4,St-4),e.fillStyle="rgba(136,142,150,0.9)";for(let n=3;n<=St-4;n+=4)e.fillRect(n,1,1,St-2);for(let n=3;n<=St-4;n+=4)e.fillRect(1,n,St-2,1);e.fillStyle="rgba(224,224,214,0.95)",e.fillRect(5,5,6,5),e.fillRect(4,10,8,3),e.fillStyle="rgba(24,24,26,0.95)",e.fillRect(6,7,1,1),e.fillRect(9,7,1,1),e.fillRect(7,10,2,1)}return t}function O_(){const i=Math.ceil(Nc.length/Tr),t=document.createElement("canvas");t.width=Tr*St,t.height=i*St;const e=t.getContext("2d"),n={};Nc.forEach((c,u)=>{const h=u%Tr,f=Math.floor(u/Tr);n[c]={tx:h,ty:f},e.drawImage(U_(c),h*St,f*St)});const s=new ta(t);s.magFilter=en,s.minFilter=bh,s.generateMipmaps=!0,s.colorSpace=ze;const r=1/t.width,a=1/t.height;function o(c){const u=n[c],h=.02,f=(u.tx*St+h)*r,p=1-((u.ty+1)*St-h)*a,g=((u.tx+1)*St-h)*r,x=1-(u.ty*St+h)*a;return[f,p,g,x]}function l(c,u){const f=Ye[c].textures,p=f.all?f.all:u===ti.PY?f.top:u===ti.NY?f.bottom:f.side;return o(p)}return{texture:s,getFaceUVs:l}}const Qi=56,F_=.45,wr=9;class B_{constructor(t,e=1337){this.scene=t,this.seed=e|0,this.windDir=new Ht(.93,.37).normalize(),this.windSpeed=1.9,this.clouds=new Map,this.syncTimer=0,this.daylight=1,this.material=new li({color:15856887,transparent:!1,depthWrite:!0})}cloudinessAt(t,e){return Re(t*.08,e*.08,this.seed+88421,3,2,.5)}shouldSpawnCloud(t,e){const n=this.cloudinessAt(t,e);if(n<.44)return!1;const s=xt(t,e,this.seed+88439),r=.18+(n-.44)*1.15;return s<Math.max(0,Math.min(.86,r))}createCloud(t,e){const n=`${t},${e}`;if(this.clouds.has(n)||!this.shouldSpawnCloud(t,e))return;const s=new tn,r=3+(xt(t,e,this.seed+88471)*4|0),a=96+Math.floor(xt(t,e,this.seed+88483)*18),o=t*Qi+(xt(t,e,this.seed+88491)-.5)*Qi*.7,l=e*Qi+(xt(t,e,this.seed+88501)-.5)*Qi*.7;for(let c=0;c<r;c++){const u=8+xt(t*31+c,e,this.seed+88511)*22,h=3+xt(t,e*29+c,this.seed+88523)*5,f=8+xt(t*17+c,e*19+c,this.seed+88537)*22,p=(xt(t+c*7,e-c*3,this.seed+88541)-.5)*18,g=(xt(t-c*5,e+c*11,this.seed+88549)-.5)*4,x=(xt(t+c*13,e+c*2,this.seed+88559)-.5)*18,m=new ve(new En(u,h,f),this.material);m.position.set(p,g,x),m.castShadow=!1,m.receiveShadow=!1,s.add(m)}s.userData.anchorX=o,s.userData.anchorY=a,s.userData.anchorZ=l,s.userData.cellX=t,s.userData.cellZ=e,this.clouds.set(n,s),this.scene.add(s)}setDaylight(t){this.daylight=Math.max(0,Math.min(1,t));const e=.3+this.daylight*.7;this.material.color.setRGB(.92*e,.95*e,1*e)}updatePositions(t){const e=this.windDir.x*this.windSpeed*t,n=this.windDir.y*this.windSpeed*t;for(const s of this.clouds.values())s.position.set(s.userData.anchorX+e,s.userData.anchorY,s.userData.anchorZ+n)}syncCloudSet(t,e){const n=this.windDir.x*this.windSpeed*e,s=this.windDir.y*this.windSpeed*e,r=t.x-n,a=t.z-s,o=Ce(Math.floor(r),Qi),l=Ce(Math.floor(a),Qi),c=new Set;for(let u=-wr;u<=wr;u++)for(let h=-wr;h<=wr;h++){const f=o+h,p=l+u,g=`${f},${p}`;c.add(g),this.createCloud(f,p)}for(const[u,h]of this.clouds.entries())c.has(u)||(this.scene.remove(h),h.traverse(f=>{f.isMesh&&f.geometry?.dispose?.()}),this.clouds.delete(u))}update(t,e,n,s){this.setDaylight(s),this.updatePositions(n),this.syncTimer-=e,this.syncTimer<=0&&(this.syncCloudSet(t,n),this.syncTimer=F_)}}const Qn={HELLO:"hello",WELCOME:"welcome",PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYERS_SNAPSHOT:"players_snapshot",PLAYER_STATE:"player_state",BLOCK_SET:"block_set"};function k_(){return`Player${Math.floor(Math.random()*9e3)+1e3}`}const z_=1/15;function H_(i="/ws/main"){return"wss://craftmine.hjdaleng.workers.dev/ws/main"}class G_{constructor(t={}){this.playerName=t.playerName??"Player",this.onWelcome=t.onWelcome??(()=>{}),this.onPlayerJoin=t.onPlayerJoin??(()=>{}),this.onPlayerLeave=t.onPlayerLeave??(()=>{}),this.onPlayersSnapshot=t.onPlayersSnapshot??(()=>{}),this.onBlockSet=t.onBlockSet??(()=>{}),this.onStatus=t.onStatus??(()=>{}),this.connected=!1,this.playerId=null,this.ws=null,this.outState=null,this.sendAccum=0,this.reconnectTimer=0,this.reconnectDelay=1.5,this.explicitlyClosed=!1}connect(){this.explicitlyClosed=!1;const t=new URLSearchParams({name:this.playerName}),e=`${H_()}?${t.toString()}`;this.ws=new WebSocket(e),this.ws.addEventListener("open",()=>{this.connected=!0,this.onStatus("connected"),this.reconnectDelay=1.5,this.send({type:Qn.HELLO,name:this.playerName})}),this.ws.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}this.handleMessage(s)}),this.ws.addEventListener("close",()=>{this.connected=!1,this.playerId=null,this.ws=null,this.onStatus("disconnected"),this.explicitlyClosed||(this.reconnectTimer=this.reconnectDelay,this.reconnectDelay=Math.min(8,this.reconnectDelay*1.4))})}close(){this.explicitlyClosed=!0,this.ws&&this.ws.close(),this.ws=null,this.connected=!1}tick(t){!this.connected&&this.reconnectTimer>0&&(this.reconnectTimer-=t,this.reconnectTimer<=0&&this.connect()),!(!this.connected||!this.outState)&&(this.sendAccum+=t,!(this.sendAccum<z_)&&(this.sendAccum=0,this.send({type:Qn.PLAYER_STATE,...this.outState})))}setLocalState(t){this.outState=t}sendBlockSet(t,e,n,s){this.send({type:Qn.BLOCK_SET,x:t,y:e,z:n,id:s})}send(t){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify(t))}handleMessage(t){switch(t.type){case Qn.WELCOME:this.playerId=t.id,this.onWelcome(t);break;case Qn.PLAYER_JOIN:this.onPlayerJoin(t.player);break;case Qn.PLAYER_LEAVE:this.onPlayerLeave(t.id);break;case Qn.PLAYERS_SNAPSHOT:this.onPlayersSnapshot(t);break;case Qn.BLOCK_SET:this.onBlockSet(t);break}}}function V_(){const i=new tn,n=ko(i,4157341,14135442,!1);return{root:i,rig:n}}class W_{constructor(t,e=()=>null){this.scene=t,this.localPlayerIdProvider=e,this.players=new Map}ensurePlayer(t,e=null){if(!t||t===this.localPlayerIdProvider())return null;if(this.players.has(t))return this.players.get(t);const{root:n,rig:s}=V_();n.position.set(e?.x??0,e?.y??0,e?.z??0),this.scene.add(n);const r={id:t,mesh:n,rig:s,name:e?.name??"Player",targetX:e?.x??0,targetY:e?.y??0,targetZ:e?.z??0,yaw:e?.yaw??0,heldItemId:e?.heldItemId??0,animPhase:Math.random()*Math.PI*2,speed2D:0};return r.heldAnchor=new tn,r.heldAnchor.position.set(.05,-.3,.02),r.heldAnchor.rotation.set(.08,.04,-.08),(s.arms[1]??r.mesh).add(r.heldAnchor),Bo(r.heldAnchor,r.heldItemId,1),r.nameSprite=this.createNameSprite(r.name),r.nameSprite.position.set(0,2.05,0),r.mesh.add(r.nameSprite),this.players.set(t,r),r}createNameSprite(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(10,10,10,0.7)",n.fillRect(8,14,e.width-16,36),n.strokeStyle="rgba(255,255,255,0.45)",n.strokeRect(8.5,14.5,e.width-17,35),n.fillStyle="#ffffff",n.font="bold 26px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,32);const s=new ta(e);s.minFilter=Qe;const r=new el({map:s,transparent:!0,depthWrite:!1,depthTest:!1}),a=new lu(r);return a.scale.set(1.5,.38,1),a.userData.labelCanvas=e,a}updateNameSprite(t,e){if(!t.nameSprite||t.name===e)return;t.name=e;const n=t.nameSprite.userData.labelCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(10,10,10,0.7)",s.fillRect(8,14,n.width-16,36),s.strokeStyle="rgba(255,255,255,0.45)",s.strokeRect(8.5,14.5,n.width-17,35),s.fillStyle="#ffffff",s.font="bold 26px Trebuchet MS",s.textAlign="center",s.textBaseline="middle",s.fillText(e,n.width/2,32),t.nameSprite.material.map.needsUpdate=!0}removePlayer(t){const e=this.players.get(t);e&&(this.scene.remove(e.mesh),e.mesh.traverse(n=>{n.isMesh?(n.geometry?.dispose?.(),n.material?.dispose?.()):n.isSprite&&(n.material?.map?.dispose?.(),n.material?.dispose?.())}),this.players.delete(t))}applyWelcome(t){for(const e of t)this.ensurePlayer(e.id,e)}applySnapshot(t){const e=new Set;for(const n of t){if(!n?.id||n.id===this.localPlayerIdProvider())continue;e.add(n.id);const s=this.ensurePlayer(n.id,n);s&&(this.updateNameSprite(s,n.name??s.name),s.targetX=n.x,s.targetY=n.y,s.targetZ=n.z,s.yaw=n.yaw??s.yaw,s.heldItemId=n.heldItemId??0,Bo(s.heldAnchor,s.heldItemId,1))}for(const n of this.players.keys())e.has(n)||this.removePlayer(n)}update(t){for(const e of this.players.values()){const n=e.mesh.position.x,s=e.mesh.position.z;e.mesh.position.x+=(e.targetX-e.mesh.position.x)*Math.min(1,t*10),e.mesh.position.y+=(e.targetY-e.mesh.position.y)*Math.min(1,t*10),e.mesh.position.z+=(e.targetZ-e.mesh.position.z)*Math.min(1,t*10),e.mesh.rotation.y=-e.yaw;const r=(e.mesh.position.x-n)/Math.max(t,1e-4),a=(e.mesh.position.z-s)/Math.max(t,1e-4);e.speed2D=Math.hypot(r,a),this.animateRig(e,t)}}animateRig(t,e){const n=t.rig;if(!n)return;const s=t.speed2D>.05,r=s?Math.min(.55,t.speed2D*.1):.03;t.animPhase+=e*(s?8.8:2.2);for(let a=0;a<n.legs.length;a++){const o=t.animPhase+(a%2===0?0:Math.PI);n.legs[a].rotation.x=Math.sin(o)*r}for(let a=0;a<n.arms.length;a++){const o=t.animPhase+(a%2===0?Math.PI:0);n.arms[a].rotation.x=Math.sin(o)*(r*.9)}n.head&&(n.head.rotation.x=Math.sin(t.animPhase*.35)*.03)}}const X_="/assets/bgm_default-BJd3PF7N.mp3",Y_={[_.AIR]:[12,20,32],[_.GRASS]:[73,153,67],[_.DIRT]:[120,84,54],[_.STONE]:[125,127,134],[_.SAND]:[214,198,128],[_.LOG]:[111,78,50],[_.LEAVES]:[55,129,61],[_.WATER]:[62,116,201],[_.BEDROCK]:[52,52,52],[_.SNOW]:[229,237,244],[_.CACTUS]:[56,143,65],[_.FLOWER_RED]:[202,45,56],[_.FLOWER_YELLOW]:[238,200,52],[_.VINE]:[46,116,45],[_.GRAVEL]:[131,127,120],[_.MOSS]:[79,126,64],[_.BRAMBLE]:[92,116,54],[_.CASTLE_BRICK]:[120,120,130],[_.APPLE]:[193,36,36]};function q_(i){return Y_[i]??[110,110,116]}function K_(i,t,e){const n=Math.floor(t),s=Math.floor(e),r=i.getSurfaceYAt(n,s);let a=Math.min(xe-1,r+16),o=_.AIR;for(;a>=1;a--)if(o=i.getBlock(n,a,s),o!==_.AIR)return o;return _.AIR}class $_{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.offscreen=document.createElement("canvas"),this.offscreenCtx=this.offscreen.getContext("2d"),this.blockWidth=96,this.blockHeight=96,this.lastRenderTime=0,this.renderIntervalSec=.2}setBlockSpan(t,e){this.blockWidth=Math.max(24,Math.min(192,t|0)),this.blockHeight=Math.max(24,Math.min(192,e|0))}render(t,e,n){if(n-this.lastRenderTime<this.renderIntervalSec)return;this.lastRenderTime=n;const s=this.blockWidth,r=this.blockHeight;this.offscreen.width=s,this.offscreen.height=r;const a=this.offscreenCtx.createImageData(s,r),o=Math.floor(e.x),l=Math.floor(e.z),c=Math.floor(s*.5),u=Math.floor(r*.5);for(let p=0;p<r;p++)for(let g=0;g<s;g++){const x=o+(g-c),m=l+(p-u),d=K_(t,x,m),A=q_(d),b=(p*s+g)*4;a.data[b]=A[0],a.data[b+1]=A[1],a.data[b+2]=A[2],a.data[b+3]=255}this.offscreenCtx.putImageData(a,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.offscreen,0,0,this.canvas.width,this.canvas.height);const h=Math.floor(this.canvas.width*.5),f=Math.floor(this.canvas.height*.5);this.ctx.strokeStyle="rgba(0,0,0,0.7)",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255, 220, 120, 0.95)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke()}}const Ve=24;function Oe(i,t,e,n,s=12,r=255){const a=i.createImageData(Ve,Ve);for(let o=0;o<a.data.length;o+=4){const l=Math.random()*s-s*.5|0;a.data[o]=Math.max(0,Math.min(255,t+l)),a.data[o+1]=Math.max(0,Math.min(255,e+l)),a.data[o+2]=Math.max(0,Math.min(255,n+l)),a.data[o+3]=r}i.putImageData(a,0,0)}function Z_(i){const t=document.createElement("canvas");t.width=Ve,t.height=Ve;const e=t.getContext("2d");switch(i){case _.GRASS:Oe(e,118,92,60,14),e.fillStyle="rgba(67,160,72,0.95)",e.fillRect(0,0,Ve,7);break;case _.DIRT:Oe(e,122,84,55,16);break;case _.STONE:Oe(e,122,124,132,16);break;case _.SAND:Oe(e,216,199,128,14);break;case _.LOG:Oe(e,120,90,58,14),e.fillStyle="rgba(90,58,30,0.3)";for(let n=2;n<Ve;n+=5)e.fillRect(n,0,2,Ve);break;case _.LEAVES:Oe(e,68,150,70,28,230);break;case _.WATER:Oe(e,63,120,210,14,210),e.fillStyle="rgba(175,218,255,0.3)",e.fillRect(0,5,Ve,3);break;case _.BEDROCK:Oe(e,58,58,58,24);break;case _.SNOW:Oe(e,233,239,245,8);break;case _.CACTUS:Oe(e,57,145,67,12),e.fillStyle="rgba(33,95,40,0.35)";for(let n=1;n<Ve;n+=4)e.fillRect(n,0,1,Ve);break;case _.FLOWER_RED:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(196,36,46,0.95)",e.fillRect(8,3,8,6);break;case _.FLOWER_YELLOW:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(240,197,43,0.95)",e.fillRect(8,3,8,6);break;case _.VINE:e.fillStyle="rgba(49,130,52,0.8)";for(let n=0;n<7;n++){const s=3+n*3%16;e.fillRect(s,2+n*2,2,3)}break;case _.GRAVEL:Oe(e,132,128,121,20);break;case _.MOSS:Oe(e,82,126,66,16);break;case _.CASTLE_BRICK:Oe(e,118,117,124,10),e.fillStyle="rgba(66,66,74,0.45)";for(let n=0;n<Ve;n+=6)e.fillRect(0,n,Ve,1);break;case _.APPLE:e.fillStyle="rgba(197,36,36,0.95)",e.fillRect(6,6,12,12),e.fillStyle="rgba(230,120,120,0.55)",e.fillRect(8,8,4,4),e.fillStyle="rgba(80,144,61,0.9)",e.fillRect(11,3,3,3);break;case _.WEAPON_BANDIT_BLADE:e.fillStyle="rgba(186,188,196,0.95)",e.fillRect(10,3,4,14),e.fillStyle="rgba(110,74,36,0.95)",e.fillRect(9,17,6,4);break;case _.WEAPON_RAIDER_SABER:e.fillStyle="rgba(202,204,214,0.95)",e.fillRect(7,4,10,3),e.fillRect(14,6,3,10),e.fillStyle="rgba(126,86,40,0.95)",e.fillRect(6,16,8,4);break;case _.WEAPON_SCORP_BOW:e.strokeStyle="rgba(158,106,52,0.95)",e.lineWidth=3,e.beginPath(),e.arc(12,12,7,Math.PI*.2,Math.PI*1.8),e.stroke(),e.strokeStyle="rgba(220,220,220,0.9)",e.lineWidth=1,e.beginPath(),e.moveTo(17,5),e.lineTo(17,19),e.stroke();break;case _.WEAPON_JAGUAR_CLAWS:e.fillStyle="rgba(220,220,228,0.95)",e.fillRect(6,4,2,14),e.fillRect(11,4,2,14),e.fillRect(16,4,2,14);break;case _.WEAPON_WRAITH_HAMMER:e.fillStyle="rgba(132,138,150,0.95)",e.fillRect(7,5,10,6),e.fillStyle="rgba(122,86,50,0.95)",e.fillRect(11,11,2,11);break;case _.WEAPON_YETI_AXE:e.fillStyle="rgba(176,212,236,0.95)",e.fillRect(6,6,10,7),e.fillStyle="rgba(116,82,48,0.95)",e.fillRect(13,11,2,10);break;case _.PLANK:Oe(e,171,128,84,12),e.fillStyle="rgba(102,72,42,0.35)";for(let n=0;n<Ve;n+=6)e.fillRect(0,n,Ve,1);break;case _.STICK:e.fillStyle="rgba(134,94,58,0.95)",e.fillRect(11,3,2,18);break;case _.WOOD_SWORD:e.fillStyle="rgba(177,132,82,0.95)",e.fillRect(10,3,4,14),e.fillStyle="rgba(110,74,42,0.95)",e.fillRect(9,17,6,4);break;case _.WOOD_AXE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,6,2,15),e.fillStyle="rgba(184,142,91,0.95)",e.fillRect(7,4,8,6);break;case _.WOOD_PICKAXE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,6,2,15),e.fillRect(6,5,12,3);break;case _.WOOD_SPADE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,8,2,13),e.fillStyle="rgba(185,143,95,0.95)",e.fillRect(8,3,8,7);break;case _.STONE_SWORD:e.fillStyle="rgba(186,190,199,0.95)",e.fillRect(10,3,4,14),e.fillStyle="rgba(110,74,42,0.95)",e.fillRect(9,17,6,4);break;case _.STONE_AXE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,6,2,15),e.fillStyle="rgba(168,173,182,0.95)",e.fillRect(7,4,8,6);break;case _.STONE_PICKAXE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,6,2,15),e.fillStyle="rgba(168,173,182,0.95)",e.fillRect(6,5,12,3);break;case _.STONE_SPADE:e.fillStyle="rgba(124,86,50,0.95)",e.fillRect(11,8,2,13),e.fillStyle="rgba(168,173,182,0.95)",e.fillRect(8,3,8,7);break;case _.BRAMBLE:e.fillStyle="rgba(80,120,56,0.95)";for(let n=0;n<4;n++)e.fillRect(5+n*4,6-n%2,2,13);e.fillStyle="rgba(110,74,44,0.9)",e.fillRect(6,11,12,2);break;case _.SKELETON_SPAWNER:Oe(e,72,76,82,8),e.fillStyle="rgba(38,40,46,0.95)",e.fillRect(3,3,18,18),e.fillStyle="rgba(144,148,156,0.92)";for(let n=5;n<=18;n+=5)e.fillRect(n,2,1,20);for(let n=5;n<=18;n+=5)e.fillRect(2,n,20,1);e.fillStyle="rgba(226,226,216,0.95)",e.fillRect(8,8,8,5),e.fillRect(7,13,10,4),e.fillStyle="rgba(24,24,26,0.95)",e.fillRect(10,10,1,1),e.fillRect(13,10,1,1),e.fillRect(11,14,2,1);break;case _.BOW:e.strokeStyle="rgba(146,98,54,0.95)",e.lineWidth=3,e.beginPath(),e.arc(10,12,7,Math.PI*.22,Math.PI*1.78),e.stroke(),e.strokeStyle="rgba(224,224,224,0.95)",e.lineWidth=1,e.beginPath(),e.moveTo(17,5),e.lineTo(17,19),e.stroke();break;case _.ARROW:e.fillStyle="rgba(120,82,48,0.95)",e.fillRect(11,4,2,15),e.fillStyle="rgba(204,206,214,0.95)",e.fillRect(10,2,4,4),e.fillStyle="rgba(214,54,54,0.95)",e.fillRect(9,18,6,3);break;default:Oe(e,90,90,90,10);break}return t.toDataURL()}function j_(){const i=new Map;return Object.keys(Ye).forEach(t=>{const e=Number(t);e!==_.AIR&&i.set(e,Z_(e))}),i}const Pu=[{id:"plank",outputId:_.PLANK,outputCount:5,ingredients:[{id:_.LOG,count:1}]},{id:"stick",outputId:_.STICK,outputCount:4,ingredients:[{id:_.PLANK,count:1}]},{id:"wood_sword",outputId:_.WOOD_SWORD,outputCount:1,ingredients:[{id:_.PLANK,count:2},{id:_.STICK,count:1}]},{id:"wood_axe",outputId:_.WOOD_AXE,outputCount:1,ingredients:[{id:_.PLANK,count:3},{id:_.STICK,count:2}]},{id:"wood_pickaxe",outputId:_.WOOD_PICKAXE,outputCount:1,ingredients:[{id:_.PLANK,count:3},{id:_.STICK,count:2}]},{id:"wood_spade",outputId:_.WOOD_SPADE,outputCount:1,ingredients:[{id:_.PLANK,count:1},{id:_.STICK,count:2}]},{id:"stone_sword",outputId:_.STONE_SWORD,outputCount:1,ingredients:[{id:_.STONE,count:2},{id:_.STICK,count:1}]},{id:"stone_axe",outputId:_.STONE_AXE,outputCount:1,ingredients:[{id:_.STONE,count:3},{id:_.STICK,count:2}]},{id:"stone_pickaxe",outputId:_.STONE_PICKAXE,outputCount:1,ingredients:[{id:_.STONE,count:3},{id:_.STICK,count:2}]},{id:"stone_spade",outputId:_.STONE_SPADE,outputCount:1,ingredients:[{id:_.STONE,count:1},{id:_.STICK,count:2}]}],J_=new Map(Pu.map(i=>[i.id,i]));function Uc(i){return`${Ye[i.outputId]?.name??i.id} x${i.outputCount}`}function Q_(i){return J_.get(i)??null}function Du(i,t){return t?t.ingredients.every(e=>i.getItemCount(e.id)>=e.count):!1}function tx(i){return Pu.filter(t=>Du(i,t))}function ex(i,t){const e=Q_(t);if(!e||!Du(i,e))return!1;for(const n of e.ingredients)if(!i.consumeItem(n.id,n.count))return!1;return i.addItem(e.outputId,e.outputCount),!0}function nx(i){switch(i){case _.WOOD_SWORD:case _.STONE_SWORD:return"sword";case _.WOOD_AXE:case _.STONE_AXE:return"axe";case _.WOOD_PICKAXE:case _.STONE_PICKAXE:return"pickaxe";case _.WOOD_SPADE:case _.STONE_SPADE:return"spade";default:return null}}function ix(i){switch(i){case _.WOOD_SWORD:case _.WOOD_AXE:case _.WOOD_PICKAXE:case _.WOOD_SPADE:return 1;case _.STONE_SWORD:case _.STONE_AXE:case _.STONE_PICKAXE:case _.STONE_SPADE:return 2;default:return 0}}function sx(i,t){const e=nx(i),n=ix(i);if(!e||n===0)return 1;const s=n===1?2.35:3.85;return e==="axe"&&(t===_.LOG||t===_.PLANK||t===_.CACTUS)||e==="pickaxe"&&(t===_.STONE||t===_.GRAVEL||t===_.CASTLE_BRICK)||e==="spade"&&(t===_.DIRT||t===_.GRASS||t===_.SAND||t===_.SNOW||t===_.MOSS)?s:e==="sword"&&t===_.BRAMBLE?n===1?1.7:2.25:1}function Va(i){return i&&i.id!==void 0?i:{id:_.AIR,count:0}}function Oc(i,t,e,n={}){const{hotbarIndexLabel:s=null}=n,r=!t||t.id===_.AIR||t.count<=0;i.icon.style.display=r?"none":"block",r||(i.icon.style.backgroundImage=`url(${e.get(t.id)})`),i.name.textContent=r?"Empty":Ye[t.id].name,i.count.textContent=r?"":`x${t.count}`,s!==null&&(i.index.textContent=String(s))}class rx{constructor(t){this.overlay=document.getElementById("overlay"),this.modeEl=document.getElementById("mode"),this.coordsEl=document.getElementById("coords"),this.fpsEl=document.getElementById("fps"),this.coinsEl=document.getElementById("coins"),this.hintEl=document.getElementById("hint"),this.healthWrapEl=document.getElementById("health-wrap"),this.healthFillEl=document.getElementById("health-bar-fill"),this.hotbarEl=document.getElementById("hotbar"),this.inventoryEl=document.getElementById("inventory"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.craftingEl=document.getElementById("crafting"),this.craftingListEl=document.getElementById("crafting-list"),this.craftingDetailTitleEl=document.getElementById("crafting-detail-title"),this.craftingDetailTextEl=document.getElementById("crafting-detail-text"),this.craftingConfirmEl=document.getElementById("crafting-confirm"),this.dialogueEl=document.getElementById("dialogue"),this.dialogueTitleEl=document.getElementById("dialogue-title"),this.dialogueTextEl=document.getElementById("dialogue-text"),this.dialogueOptionsEl=document.getElementById("dialogue-options"),this.debugPaneEl=document.getElementById("debug-pane"),this.debugWalkEl=document.getElementById("dbg-walk"),this.debugWalkValueEl=document.getElementById("dbg-walk-value"),this.debugFlyEl=document.getElementById("dbg-fly"),this.debugFlyValueEl=document.getElementById("dbg-fly-value"),this.debugMapWidthEl=document.getElementById("dbg-map-width"),this.debugMapWidthValueEl=document.getElementById("dbg-map-width-value"),this.debugMapHeightEl=document.getElementById("dbg-map-height"),this.debugMapHeightValueEl=document.getElementById("dbg-map-height-value"),this.debugBgmEl=document.getElementById("dbg-bgm"),this.debugBgmValueEl=document.getElementById("dbg-bgm-value"),this.debugHealthEl=document.getElementById("dbg-health"),this.debugAgroEl=document.getElementById("dbg-agro"),this.hotbarSize=8,this.inventory=t.map(Va),this.hotbarIndex=0,this.coins=0,this.icons=j_(),this.hotbarEls=[],this.inventoryEls=[],this.craftingSelectHandler=null,this.craftingConfirmHandler=null,this.buildHotbar(),this.buildInventory(),this.setHotbarSelection(0),this.updateCoins(0),this.setHint(""),this.updateHealth(100,100,!0)}buildHotbar(){this.hotbarEl.innerHTML="",this.hotbarEls=[];for(let t=0;t<this.hotbarSize;t++){const e=document.createElement("div");e.className="hotbar-slot";const n=document.createElement("div");n.className="slot-index";const s=document.createElement("div");s.className="slot-icon";const r=document.createElement("div");r.className="slot-name";const a=document.createElement("div");a.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.appendChild(a),this.hotbarEl.appendChild(e),this.hotbarEls.push({root:e,index:n,icon:s,name:r,count:a})}this.refreshHotbarLabels()}buildInventory(){this.inventoryGridEl.innerHTML="",this.inventoryEls=[];for(let t=0;t<this.inventory.length;t++){const e=document.createElement("button");e.type="button",e.className="inv-slot",e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.addEventListener("click",()=>{const a=this.inventory[t];!a||a.id===_.AIR||a.count<=0||(this.inventory[this.hotbarIndex]={...a},this.refreshHotbarLabels())}),this.inventoryGridEl.appendChild(e),this.inventoryEls.push({root:e,icon:n,name:s,count:r})}this.refreshInventoryLabels()}setupDebugPane(t,e){this.debugWalkEl.value=String(t.walkSpeed),this.debugFlyEl.value=String(t.flySpeed),this.debugMapWidthEl.value=String(t.mapWidthBlocks),this.debugMapHeightEl.value=String(t.mapHeightBlocks),this.debugBgmEl.value=String(t.bgmVolume),this.debugHealthEl.checked=!!t.healthEnabled,this.debugAgroEl.checked=!!t.agroEnabled,this.updateDebugValues(t.walkSpeed,t.flySpeed,t.mapWidthBlocks,t.mapHeightBlocks,t.bgmVolume),this.debugWalkEl.addEventListener("input",()=>{const n=Number(this.debugWalkEl.value);this.updateDebugValues(n,Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({walkSpeed:n})}),this.debugFlyEl.addEventListener("input",()=>{const n=Math.min(300,Number(this.debugFlyEl.value));this.updateDebugValues(Number(this.debugWalkEl.value),n,Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({flySpeed:n})}),this.debugMapWidthEl.addEventListener("input",()=>{const n=Number(this.debugMapWidthEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),n,Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({mapWidthBlocks:n})}),this.debugMapHeightEl.addEventListener("input",()=>{const n=Number(this.debugMapHeightEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),n,Number(this.debugBgmEl.value)),e({mapHeightBlocks:n})}),this.debugBgmEl.addEventListener("input",()=>{const n=Number(this.debugBgmEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),n),e({bgmVolume:n})}),this.debugHealthEl.addEventListener("change",()=>e({healthEnabled:this.debugHealthEl.checked})),this.debugAgroEl.addEventListener("change",()=>e({agroEnabled:this.debugAgroEl.checked}))}updateDebugValues(t,e,n,s,r){this.debugWalkValueEl.textContent=`Current: ${t.toFixed(1)}`,this.debugFlyValueEl.textContent=`Current: ${e.toFixed(0)} (max 300)`,this.debugMapWidthValueEl.textContent=`Current: ${Math.round(n)} blocks`,this.debugMapHeightValueEl.textContent=`Current: ${Math.round(s)} blocks`,this.debugBgmValueEl.textContent=`Current: ${Math.round(r*100)}%`}isDebugOpen(){return this.debugPaneEl.classList.contains("visible")}setDebugVisible(t){this.debugPaneEl.classList.toggle("visible",t)}isInventoryOpen(){return this.inventoryEl.classList.contains("visible")}isCraftingOpen(){return this.craftingEl.classList.contains("visible")}setInventoryVisible(t){this.inventoryEl.classList.toggle("visible",t),this.refreshInventoryLabels()}setCraftingVisible(t){this.craftingEl.classList.toggle("visible",t)}renderCraftingCatalogue(t,e,n,s){this.craftingSelectHandler=n,this.craftingConfirmHandler=s,this.craftingListEl.innerHTML="";for(const a of t){const o=document.createElement("button");o.type="button",o.className="crafting-recipe",a.id===e&&o.classList.add("active");const l=document.createElement("div");l.className="crafting-recipe-name",l.textContent=Uc(a);const c=document.createElement("div");c.className="crafting-recipe-cost",c.textContent=a.ingredients.map(u=>`${Ye[u.id].name} x${u.count}`).join(" | "),o.appendChild(l),o.appendChild(c),o.addEventListener("click",()=>this.craftingSelectHandler?.(a.id)),this.craftingListEl.appendChild(o)}const r=t.find(a=>a.id===e)??null;if(!r){this.craftingDetailTitleEl.textContent=t.length>0?"Select a recipe":"No craftable recipes",this.craftingDetailTextEl.textContent=t.length>0?"Choose an item from the catalogue to inspect its resource cost.":"Gather logs, stone, and other materials to unlock crafting options.",this.craftingConfirmEl.disabled=!0,this.craftingConfirmEl.onclick=null;return}this.craftingDetailTitleEl.textContent=Uc(r),this.craftingDetailTextEl.textContent=r.ingredients.map(a=>`${Ye[a.id].name}: ${a.count}`).join(`
`),this.craftingConfirmEl.disabled=!1,this.craftingConfirmEl.onclick=()=>this.craftingConfirmHandler?.()}isDialogueOpen(){return this.dialogueEl.classList.contains("visible")}openDialogue(t,e,n){this.dialogueTitleEl.textContent=t,this.dialogueTextEl.textContent=e,this.dialogueOptionsEl.innerHTML="";for(const s of n){const r=document.createElement("button");r.type="button",r.className="dialogue-btn",r.textContent=s.label,r.addEventListener("click",()=>s.onSelect()),this.dialogueOptionsEl.appendChild(r)}this.dialogueEl.classList.add("visible")}closeDialogue(){this.dialogueEl.classList.remove("visible"),this.dialogueOptionsEl.innerHTML=""}setHint(t){this.hintEl.textContent=t}updateHealth(t,e,n){if(this.healthWrapEl.style.display=n?"block":"none",!n)return;const s=e>0?Math.max(0,Math.min(1,t/e)):0;this.healthFillEl.style.width=`${(s*100).toFixed(1)}%`}getSelectedBlock(){return this.inventory[this.hotbarIndex]?.id??_.DIRT}getSelectedItemId(){const t=this.inventory[this.hotbarIndex];return!t||t.count<=0?_.AIR:t.id??_.AIR}consumeSelectedBlock(){const t=this.inventory[this.hotbarIndex];return!t||t.id===_.AIR||t.count<=0?!1:(t.count-=1,t.count<=0&&(t.count=0,t.id=_.AIR),this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0)}addItem(t,e){if(t===_.AIR||e<=0)return;let n=e;for(const s of this.inventory)if(s.id===t&&s.count<999){const r=Math.min(999-s.count,n);if(s.count+=r,n-=r,n===0)break}if(n>0){for(const s of this.inventory)if(s.id===_.AIR||s.count<=0){s.id=t,s.count=n;break}}this.refreshHotbarLabels(),this.refreshInventoryLabels()}getItemCount(t){let e=0;for(const n of this.inventory)n.id===t&&(e+=n.count);return e}consumeItem(t,e){if(e<=0)return!0;if(this.getItemCount(t)<e)return!1;let n=e;for(const s of this.inventory){if(s.id!==t||n<=0)continue;const r=Math.min(s.count,n);s.count-=r,n-=r,s.count<=0&&(s.id=_.AIR,s.count=0)}return this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0}updateCoins(t){this.coins=t,this.coinsEl.textContent=`Coins: ${t}`}setOverlayVisible(t){this.overlay.classList.toggle("visible",t)}updateMode(t){this.modeEl.textContent=`Mode: ${t?"Fly":"Walk"}`}updateCoords(t){this.coordsEl.textContent=`X: ${t.x.toFixed(1)} Y: ${t.y.toFixed(1)} Z: ${t.z.toFixed(1)}`}updateFPS(t){this.fpsEl.textContent=`FPS: ${t.toFixed(0)}`}setHotbarSelection(t){this.hotbarIndex=t,this.hotbarEls.forEach((e,n)=>e.root.classList.toggle("active",n===t)),this.inventoryEls.forEach((e,n)=>e.root.classList.toggle("active",n===t))}refreshHotbarLabels(){for(let t=0;t<this.hotbarEls.length;t++)Oc(this.hotbarEls[t],Va(this.inventory[t]),this.icons,{hotbarIndexLabel:t+1})}refreshInventoryLabels(){for(let t=0;t<this.inventoryEls.length;t++)Oc(this.inventoryEls[t],Va(this.inventory[t]),this.icons)}}function ax(i){const t=new lg({canvas:i,antialias:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=ze,t.shadowMap.enabled=!0,t.shadowMap.type=Hc,t}function ox(){const i=new hf;i.background=new Wt(9031679),i.fog=new tl(9031679,et*4.2,et*7.5);const t=new yf(16777215,.45);i.add(t);const e=new Ef(16777215,.8);e.position.set(120,200,50),e.castShadow=!0,e.shadow.mapSize.set(1536,1536),e.shadow.bias=-4e-4,e.shadow.camera.near=1,e.shadow.camera.far=520,e.shadow.camera.left=-110,e.shadow.camera.right=110,e.shadow.camera.top=110,e.shadow.camera.bottom=-110,i.add(e.target),i.add(e);const n=new tn,s=new ve(new qr(2.6,24,16),new us({color:16774054,fog:!1,toneMapped:!1,depthWrite:!1})),r=new ve(new qr(4.8,24,16),new us({color:16766571,transparent:!0,opacity:.42,fog:!1,toneMapped:!1,depthWrite:!1,side:cn}));return n.add(r),n.add(s),i.add(n),{scene:i,sunLight:e,ambientLight:t,sunVisual:n}}function lx(){return new ln(75,window.innerWidth/window.innerHeight,.1,600)}function cx(i){const t=new li({map:i.texture,vertexColors:!0}),e=new li({map:i.texture,vertexColors:!0,transparent:!0,depthWrite:!1,side:cn,alphaTest:.15});return{matOpaque:t,matTransparent:e}}function ux(i){const t=new gf(new _f(new En(1.01,1.01,1.01)),new cu({color:16777062}));return t.visible=!1,i.add(t),t}const hx=6,fx=.9,dx=12,px=.2,mx=.42,gx=new Set([_.AIR,_.BEDROCK,_.APPLE,_.WEAPON_BANDIT_BLADE,_.WEAPON_RAIDER_SABER,_.WEAPON_SCORP_BOW,_.WEAPON_JAGUAR_CLAWS,_.WEAPON_WRAITH_HAMMER,_.WEAPON_YETI_AXE,_.STICK,_.WOOD_SWORD,_.WOOD_AXE,_.WOOD_PICKAXE,_.WOOD_SPADE,_.STONE_SWORD,_.STONE_AXE,_.STONE_PICKAXE,_.STONE_SPADE,_.BOW,_.ARROW]);function _x(i){return i===_.BOW||i===_.WEAPON_SCORP_BOW}function Fc(i){switch(i){case _.WEAPON_BANDIT_BLADE:return 24;case _.WEAPON_RAIDER_SABER:return 27;case _.WEAPON_SCORP_BOW:return 22;case _.BOW:return 20;case _.WEAPON_JAGUAR_CLAWS:return 20;case _.WEAPON_WRAITH_HAMMER:return 32;case _.WEAPON_YETI_AXE:return 36;case _.WOOD_SWORD:return 18;case _.WOOD_AXE:return 16;case _.WOOD_PICKAXE:return 15;case _.WOOD_SPADE:return 13;case _.STONE_SWORD:return 22;case _.STONE_AXE:return 19;case _.STONE_PICKAXE:return 18;case _.STONE_SPADE:return 15;default:return dx}}function xx(i,t,e,n){const s=t,r=t+1,a=e,o=e+1,l=n,c=n+1,u=i.getAABB();return!(u.maxX>s&&u.minX<r&&u.maxY>a&&u.minY<o&&u.maxZ>l&&u.minZ<c)}const Zr=8;function vx(){const i=[[32,0,32,64],[0,32,64,32],[8,8,24,30],[56,8,40,30],[8,56,24,34],[56,56,40,34],[16,0,30,18],[48,0,34,18],[0,16,18,30],[64,16,46,30],[0,48,18,34],[64,48,46,34],[16,64,30,46],[48,64,34,46],[24,24,8,40],[40,24,56,40],[24,40,8,24],[40,40,56,24]],t=[];for(let e=0;e<Zr;e++){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d");s.clearRect(0,0,64,64);const r=Math.floor((e+1)/Zr*i.length);s.strokeStyle=`rgba(30, 30, 30, ${(.22+e*.08).toFixed(2)})`,s.lineWidth=3;for(let o=0;o<r;o++){const l=i[o];s.beginPath(),s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]),s.stroke()}const a=new ta(n);a.colorSpace=ze,a.minFilter=Qe,a.magFilter=en,a.wrapS=Bn,a.wrapT=Bn,t.push(a)}return t}function Sx(i,t){const e=new us({map:t[0],transparent:!0,opacity:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n=new ve(new En(1.014,1.014,1.014),e);return n.visible=!1,i.add(n),{crackOverlay:n,crackOverlayMat:e}}function ci(i,t){i.breakState=null,t.visible=!1}function Lu(i,t,e,n,s,r){if(!i||!xu(i.id)){ci(e,n);return}if(e.breakState&&e.breakState.x===i.x&&e.breakState.y===i.y&&e.breakState.z===i.z&&e.breakState.id===i.id&&e.breakState.heldItemId===t)return;const a=ug(i.id)/Math.max(1,sx(t,i.id));e.breakState={x:i.x,y:i.y,z:i.z,id:i.id,heldItemId:t,progress:0,duration:a},n.position.set(i.x+.5,i.y+.5,i.z+.5),s.map=r[0],s.needsUpdate=!0,n.visible=!0}function Mx(i,t,e,n,s,r,a,o,l,c,u,h=null){if(t.suppressBreakUntilMouseUp||!t.leftMouseDown){ci(t,a);return}if(document.pointerLockElement!==e||c()){ci(t,a);return}if(!n||!xu(n.id)){ci(t,a);return}if(Lu(n,u,t,a,o,l),!t.breakState)return;t.breakState.progress+=i/Math.max(.05,t.breakState.duration);const f=Math.min(Zr-1,Math.floor(t.breakState.progress*Zr));if(a.position.set(t.breakState.x+.5,t.breakState.y+.5,t.breakState.z+.5),o.map=l[f],o.needsUpdate=!0,a.visible=!0,t.breakState.progress>=1){const{x:p,y:g,z:x,id:m}=t.breakState;s.setBlock(p,g,x,_.AIR),r.addItem(m,1),h&&h(p,g,x,m),t.breakState=null,a.visible=!1}}const si=100,nn=document.getElementById("app"),Nu=ax(nn),{scene:hn,sunLight:As,ambientLight:Ex,sunVisual:Rr}=ox(),un=lx();hn.add(un);const Uu=O_(),{matOpaque:yx,matTransparent:bx}=cx(Uu),al=20260304,De=new $g(hn,Uu,al);De.setupMaterials(yx,bx);const Ax=new B_(hn,al+55123),Os=new Audio(X_);Os.loop=!0;Os.preload="auto";const Vt=new D_(un,nn),Tx=Array.from({length:30},()=>({id:_.AIR,count:0})),Mt=new rx(Tx);Mt.addItem(_.SKELETON_SPAWNER,1);Mt.addItem(_.BOW,1);Mt.addItem(_.ARROW,10);const wx=document.getElementById("terrain-map"),ol=new $_(wx),jr=new L_(Mt,al+191),Cs=new P_(hn,De,{onEnemyKilled:i=>{i?.dropItem&&Mt.addItem(i.dropItem,1)},onQuestGiverKilled:i=>{jr.cancelQuestForGiver(i.id)}});let Hn=null;const ws=new W_(hn,()=>Hn?.playerId??null),Bc=new c_(un),zo=new g_(hn,De,Cs,{onPlayerHit:i=>{le.healthEnabled&&(je=Math.max(0,je-i),Is=Math.max(Is,.15))}}),Rx=document.getElementById("name-prompt"),ia=document.getElementById("name-input"),Ou=document.getElementById("name-confirm");function Cx(){const i="voxel_player_name",t=localStorage.getItem(i);if(t&&t.trim())return t.trim();const e=k_();return localStorage.setItem(i,e),e}let zr="offline",sa=!1,Ho=0;function Fu(i){Rx.classList.toggle("visible",i)}function Ix(i){Hn&&Hn.close(),zr="connecting",Hn=new G_({playerName:i,onStatus:t=>{zr=t},onWelcome:t=>{zr="connected",Number.isFinite(t.serverNowMs)&&(Ho=t.serverNowMs-Date.now()),ws.applyWelcome(t.players??[]);for(const e of t.blocks??[])De.setBlock(e.x,e.y,e.z,e.id)},onPlayerJoin:t=>{ws.ensurePlayer(t.id,t)},onPlayerLeave:t=>{ws.removePlayer(t)},onPlayersSnapshot:t=>{Number.isFinite(t.serverNowMs)&&(Ho=t.serverNowMs-Date.now()),ws.applySnapshot(t.players??[])},onBlockSet:t=>{De.setBlock(t.x,t.y,t.z,t.id)}}),Hn.connect()}const le={walkSpeed:5.2,flySpeed:11.5,mapWidthBlocks:96,mapHeightBlocks:96,bgmVolume:.1,healthEnabled:!0,agroEnabled:!0};let je=si,Is=0,ns=0;function Bu(i){Os.volume=Math.max(0,Math.min(1,i))}function ll(){Os.paused&&Os.play().catch(()=>{})}Vt.setMovementSpeeds(le.walkSpeed,le.flySpeed);ol.setBlockSpan(le.mapWidthBlocks,le.mapHeightBlocks);Bu(le.bgmVolume);Mt.setupDebugPane(le,i=>{i.walkSpeed!==void 0&&(le.walkSpeed=i.walkSpeed),i.flySpeed!==void 0&&(le.flySpeed=Math.min(300,i.flySpeed)),i.mapWidthBlocks!==void 0&&(le.mapWidthBlocks=Math.max(24,Math.min(192,i.mapWidthBlocks))),i.mapHeightBlocks!==void 0&&(le.mapHeightBlocks=Math.max(24,Math.min(192,i.mapHeightBlocks))),i.bgmVolume!==void 0&&(le.bgmVolume=Math.max(0,Math.min(1,i.bgmVolume))),i.healthEnabled!==void 0&&(le.healthEnabled=i.healthEnabled,le.healthEnabled||(je=si)),i.agroEnabled!==void 0&&(le.agroEnabled=i.agroEnabled),Vt.setMovementSpeeds(le.walkSpeed,le.flySpeed),ol.setBlockSpan(le.mapWidthBlocks,le.mapHeightBlocks),Bu(le.bgmVolume),ll()});Mt.setHotbarSelection(0);const wi=new T,Wa=ux(hn),cl=vx(),{crackOverlay:rs,crackOverlayMat:ku}=Sx(hn,cl),Px=new Wt(9031679),Dx=new Wt(0),Xa=new Wt,We={breakState:null,leftMouseDown:!1,suppressBreakUntilMouseUp:!1};let ei=0,yi=null,vn=null,Ps=null,zu=new T(0,40,0);function Ci(){return Mt.isInventoryOpen()||Mt.isCraftingOpen()||Mt.isDialogueOpen()||Mt.isDebugOpen()||!sa}function Fn(){const i=document.pointerLockElement===nn;Mt.setOverlayVisible(!i&&!Ci())}function Go(){const i=tx(Mt);i.some(t=>t.id===yi)||(yi=i[0]?.id??null),Mt.renderCraftingCatalogue(i,yi,t=>{yi=t,Go()},()=>{yi&&ex(Mt,yi)&&Go()})}function Lx(i,t){for(let e=127;e>=1;e--)if(Kr(De.getBlock(i,e,t))&&!Kr(De.getBlock(i,e+1,t)))return e+1;return 45}Vt.position.set(.5,Lx(0,0)+2,.5);zu.copy(Vt.position);Vt.syncCamera();function Nx(){un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),Nu.setSize(window.innerWidth,window.innerHeight)}function Ux(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Ox(i){const n=(i%vr+vr)%vr/vr*Math.PI*2,s=Math.sin(n),r=n-Math.PI*.5,a=280,o=Vt.position.y+s*230,l=Vt.position.x+Math.cos(r)*a,c=Vt.position.z+Math.sin(r)*a;As.position.set(l,o,c),As.target.position.set(Vt.position.x,Vt.position.y,Vt.position.z),As.target.updateMatrixWorld();const u=Ux(-.03,.2,s);As.intensity=.02+u*1.06,Ex.intensity=.05+u*.3,As.castShadow=u>.03;const h=92,f=Math.sqrt(Math.max(0,1-s*s)),p=Math.cos(r)*f,g=s,x=Math.sin(r)*f;Rr.position.set(Vt.position.x+p*h,Vt.position.y+g*h,Vt.position.z+x*h);const m=s>-.03;if(Rr.visible=m,m){const d=Rr.children[0],A=Rr.children[1];d.material.opacity=.2+u*.45,A.scale.setScalar(.85+u*.25)}return Xa.lerpColors(Dx,Px,u),hn.background.copy(Xa),hn.fog&&hn.fog.color.copy(Xa),u}window.addEventListener("resize",Nx);window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("pointerdown",ll);window.addEventListener("keydown",ll);nn.addEventListener("click",()=>{sa&&(Ci()||document.pointerLockElement!==nn&&nn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==nn&&(We.leftMouseDown=!1,We.suppressBreakUntilMouseUp=!1,ci(We,rs)),Fn()});window.addEventListener("wheel",i=>{document.pointerLockElement!==nn||Ci()||(ei+=i.deltaY>0?1:-1,ei<0&&(ei=Mt.hotbarSize-1),ei>=Mt.hotbarSize&&(ei=0),Mt.setHotbarSelection(ei))});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&Mt.isDialogueOpen()){jr.closeDialogue(),Fn();return}if(i.code==="KeyU"){const t=!Mt.isDebugOpen();Mt.setDebugVisible(t),t?document.exitPointerLock():!Mt.isInventoryOpen()&&!Mt.isDialogueOpen()&&nn.requestPointerLock(),Fn();return}if(i.code==="KeyE"){if(Mt.isDialogueOpen())return;Mt.isInventoryOpen()?(Mt.setInventoryVisible(!1),!Mt.isDebugOpen()&&!Mt.isCraftingOpen()&&nn.requestPointerLock()):(Mt.setCraftingVisible(!1),Mt.setInventoryVisible(!0),document.exitPointerLock()),Fn();return}if(i.code==="KeyR"){if(Mt.isDialogueOpen())return;Mt.isCraftingOpen()?(Mt.setCraftingVisible(!1),!Mt.isInventoryOpen()&&!Mt.isDebugOpen()&&nn.requestPointerLock()):(Mt.setInventoryVisible(!1),Mt.setCraftingVisible(!0),yi=null,Go(),document.exitPointerLock()),Fn();return}if(i.code==="KeyH"){if(!le.healthEnabled||je>=si)return;Mt.consumeItem(_.APPLE,1)&&(je=Math.min(si,je+25));return}if(i.code==="KeyF"){if(Mt.isDialogueOpen())return;Ps&&(document.exitPointerLock(),jr.onTalkToQuestGiver(Ps),Fn());return}if(/Digit[1-9]/.test(i.code)){const t=Number(i.code.slice(-1))-1;t>=0&&t<Mt.hotbarSize&&(ei=t,Mt.setHotbarSelection(ei))}});window.addEventListener("mousedown",i=>{if(sa&&!(document.pointerLockElement!==nn||Ci())){if(i.button===0){We.leftMouseDown=!0;const t=Mt.getSelectedItemId();if(_x(t)){if(ns>0||!Mt.consumeItem(_.ARROW,1))return;un.getWorldDirection(wi);const e=un.position.clone().addScaledVector(wi,.68);e.y-=.08,zo.firePlayerArrow(e,wi,Fc(t)),ns=mx,We.suppressBreakUntilMouseUp=!0,ci(We,rs);return}if(ns<=0){un.getWorldDirection(wi);const e=Cs.attackNearestInFront(un.position,wi,hx,fx,Fc(Mt.getSelectedItemId()));if(ns=px,e){We.suppressBreakUntilMouseUp=!0,ci(We,rs);return}}We.suppressBreakUntilMouseUp=!1,Lu(vn,Mt.getSelectedItemId(),We,rs,ku,cl)}if(i.button===2){if(!vn)return;const t=vn.previous.x,e=vn.previous.y,n=vn.previous.z;if(De.getBlock(t,e,n)!==_.AIR||!xx(Vt,t,e,n))return;const s=Mt.getSelectedItemId();if(gx.has(s)||!Mt.consumeSelectedBlock())return;De.setBlock(t,e,n,s),Hn?.sendBlockSet(t,e,n,s)}}});window.addEventListener("mouseup",i=>{i.button===0&&(We.leftMouseDown=!1,We.suppressBreakUntilMouseUp=!1,ci(We,rs))});let kc=performance.now(),Cr=0,Ya=0,qa=0;function Hu(i){const t=Math.min(.05,(i-kc)/1e3);kc=i;const e=(Date.now()+Ho)/1e3,n=Mt.getSelectedItemId();ns=Math.max(0,ns-t);const s=Ox(e);if(Ax.update(Vt.position,t,e,s),Bc.setItem(n),Bc.update(e),Hn?.tick(t),Ci()||Vt.update(De,t),Hn?.setLocalState({x:Vt.position.x,y:Vt.position.y,z:Vt.position.z,yaw:Vt.yaw,pitch:Vt.pitch,flyMode:Vt.flyMode,heldItemId:n}),qa+=t,qa>=.14&&(De.loadChunksAround(Vt.position.x,Vt.position.z),qa=0),De.rebuildOneChunk(),De.rebuildOneChunk(),Cs.update(Vt.position,t,e,le.agroEnabled,zo,Vt.velocity),zo.update(t,Vt),le.healthEnabled){if(Is-=t,le.agroEnabled&&Is<=0){const o=Cs.countHostilesInRange(Vt.position,1.8);o>0&&(je=Math.max(0,je-Math.min(18,o*6)),Is=.45)}je<=0&&(je=si,Vt.position.copy(zu),Vt.velocity.set(0,0,0),Vt.syncCamera())}else je=si;Ps=Cs.getNearestQuestGiver(Vt.position,4.2),un.getWorldDirection(wi),vn=N_(De,un.position,wi,hg),Mx(t,We,nn,vn,De,Mt,rs,ku,cl,Ci,n,(o,l,c)=>Hn?.sendBlockSet(o,l,c,_.AIR)),vn&&!Ci()?(Wa.visible=!0,Wa.position.set(vn.x+.5,vn.y+.5,vn.z+.5)):Wa.visible=!1;let r=jr.getActiveQuestText();const a=zr==="connected"?"MP: Online":"MP: Offline";if(r=r?`${r} | ${a}`:a,Ps&&!Mt.isInventoryOpen()){const o=`Press F to talk to ${Ps.name}`;r=r?`${r} | ${o}`:o}Mt.getItemCount(_.APPLE)>0&&le.healthEnabled&&je<si&&(r=r?`${r} | Press H to eat Apple`:"Press H to eat Apple"),Mt.setHint(r),Mt.updateHealth(je,si,le.healthEnabled),Mt.updateMode(Vt.flyMode),Mt.updateCoords(Vt.position),Fn(),Cr+=t,Ya++,Cr>=.25&&(Mt.updateFPS(Ya/Cr),Cr=0,Ya=0),ol.render(De,Vt.position,e),ws.update(t),Nu.render(hn,un),requestAnimationFrame(Hu)}De.loadChunksAround(Vt.position.x,Vt.position.z);Fn();Fu(!0);ia.value=Cx();ia.focus();Ou.addEventListener("click",()=>{const i=(ia.value||"").trim();i&&(localStorage.setItem("voxel_player_name",i),sa=!0,Fu(!1),Ix(i),Fn())});ia.addEventListener("keydown",i=>{i.key==="Enter"&&Ou.click()});requestAnimationFrame(Hu);
