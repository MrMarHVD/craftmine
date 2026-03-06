(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Po="176",pu=0,il=1,mu=2,mc=1,gc=2,Cn=3,ni=0,ze=1,Qe=2,Jn=0,qi=1,sl=2,rl=3,al=4,gu=5,mi=100,_u=101,xu=102,vu=103,Mu=104,Su=200,Eu=201,yu=202,bu=203,Fa=204,Oa=205,Tu=206,Au=207,Ru=208,wu=209,Cu=210,Pu=211,Iu=212,Lu=213,Du=214,Ba=0,za=1,ka=2,Ki=3,Ha=4,Ga=5,Va=6,Wa=7,Io=0,Uu=1,Nu=2,Qn=0,Fu=1,Ou=2,Bu=3,zu=4,ku=5,Hu=6,Gu=7,_c=300,Zi=301,ji=302,Xa=303,Ya=304,Or=306,qa=1e3,Pn=1001,$a=1002,Xe=1003,Vu=1004,Wu=1004,Is=1005,We=1006,Yr=1007,xi=1008,vn=1009,xc=1010,vc=1011,Ms=1012,Lo=1013,Si=1014,In=1015,As=1016,Do=1017,Uo=1018,Ss=1020,Mc=35902,Sc=1021,Ec=1022,un=1023,Es=1026,ys=1027,yc=1028,No=1029,bc=1030,Fo=1031,Oo=1033,pr=33776,mr=33777,gr=33778,_r=33779,Ka=35840,Za=35841,ja=35842,Ja=35843,Qa=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,xr=36492,_o=36494,xo=36495,Tc=36283,vo=36284,Mo=36285,So=36286,Xu=3200,Yu=3201,Ac=0,qu=1,qn="",Ne="srgb",Ji="srgb-linear",Ar="linear",ie="srgb",Ti=7680,ol=519,$u=512,Ku=513,Zu=514,Rc=515,ju=516,Ju=517,Qu=518,th=519,Eo=35044,ll="300 es",Ln=2e3,Rr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,yo=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function eh(i,t){return(i%t+t)%t}function qr(i,t,e){return(1-e)*i+e*t}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],b=s[4],S=s[7],I=s[2],P=s[5],R=s[8];return r[0]=a*_+o*y+l*I,r[3]=a*m+o*b+l*P,r[6]=a*p+o*S+l*R,r[1]=c*_+u*y+h*I,r[4]=c*m+u*b+h*P,r[7]=c*p+u*S+h*R,r[2]=f*_+d*y+g*I,r[5]=f*m+d*b+g*P,r[8]=f*p+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Ft;function wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nh(){const i=wr("canvas");return i.style.display="block",i}const cl={};function Mr(i){i in cl||(cl[i]=!0,console.warn(i))}function ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ul=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ah(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:t,whitePoint:n,transfer:Ar,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const jt=ah();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class oh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=wr("canvas")),Ai.width=t.width,Ai.height=t.height;const s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lh=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kr(s[a].image)):r.push(Kr(s[a]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ch=0;class Fe extends es{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Pn,s=Pn,r=We,a=xi,o=un,l=vn,c=Fe.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=ti(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=_c;Fe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(d+1)/2,I=(p+1)/2,P=(u+f)/4,R=(h+_)/4,F=(g+m)/4;return b>S&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=P/n,r=R/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uh extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends uh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hh extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),P=Math.atan2(I,p*y);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const S=o*y;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new N,fl=new Rs;class ws{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ds.subVectors(this.max,ss),Ri.subVectors(t.a,ss),wi.subVectors(t.b,ss),Ci.subVectors(t.c,ss),Fn.subVectors(wi,Ri),On.subVectors(Ci,wi),ai.subVectors(Ri,Ci);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ai.z,ai.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ai.z,0,-ai.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ai.y,ai.x,0];return!jr(e,Ri,wi,Ci,Ds)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,Ri,wi,Ci,Ds))?!1:(Us.crossVectors(Fn,On),e=[Us.x,Us.y,Us.z],jr(e,Ri,wi,Ci,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new N,new N,new N,new N,new N,new N,new N,new N],rn=new N,Ls=new ws,Ri=new N,wi=new N,Ci=new N,Fn=new N,On=new N,ai=new N,ss=new N,Ds=new N,Us=new N,oi=new N;function jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const fh=new ws,rs=new N,Jr=new N;class Br{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Jr)),this.expandByPoint(rs.copy(t.center).sub(Jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new N,Qr=new N,Ns=new N,Bn=new N,ta=new N,Fs=new N,ea=new N;class zo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=Bn.dot(this.direction),l=-Bn.dot(Ns),c=Bn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qr).addScaledVector(Ns,f),d}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Fs.subVectors(n,t),ea.crossVectors(ta,Fs);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(Fs.crossVectors(Bn,Fs));if(l<0)return null;const c=o*this.direction.dot(ta.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(ea);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,u,h,f,d,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,d,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dh,t,ph)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),zn.crossVectors(n,He),zn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),zn.crossVectors(n,He)),zn.normalize(),Os.crossVectors(He,zn),s[0]=zn.x,s[4]=Os.x,s[8]=He.x,s[1]=zn.y,s[5]=Os.y,s[9]=He.y,s[2]=zn.z,s[6]=Os.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],I=n[15],P=s[0],R=s[4],F=s[8],E=s[12],M=s[1],w=s[5],V=s[9],k=s[13],K=s[2],q=s[6],W=s[10],j=s[14],H=s[3],st=s[7],ft=s[11],vt=s[15];return r[0]=a*P+o*M+l*K+c*H,r[4]=a*R+o*w+l*q+c*st,r[8]=a*F+o*V+l*W+c*ft,r[12]=a*E+o*k+l*j+c*vt,r[1]=u*P+h*M+f*K+d*H,r[5]=u*R+h*w+f*q+d*st,r[9]=u*F+h*V+f*W+d*ft,r[13]=u*E+h*k+f*j+d*vt,r[2]=g*P+_*M+m*K+p*H,r[6]=g*R+_*w+m*q+p*st,r[10]=g*F+_*V+m*W+p*ft,r[14]=g*E+_*k+m*j+p*vt,r[3]=y*P+b*M+S*K+I*H,r[7]=y*R+b*w+S*q+I*st,r[11]=y*F+b*V+S*W+I*ft,r[15]=y*E+b*k+S*j+I*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,b=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,S=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,I=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,P=e*y+n*b+s*S+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=y*R,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*R,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*R,t[4]=b*R,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*R,t[8]=S*R,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*R,t[12]=I*R,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,y=l*c,b=l*u,S=l*h,I=n.x,P=n.y,R=n.z;return s[0]=(1-(_+p))*I,s[1]=(d+S)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(d-S)*P,s[5]=(1-(f+p))*P,s[6]=(m+y)*P,s[7]=0,s[8]=(g+b)*R,s[9]=(m-y)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,u=1/a,h=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ln){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===Ln)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,d=(n+s)*u;let g,_;if(o===Ln)g=(a+r)*h,_=-2*h;else if(o===Rr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new N,an=new le,dh=new N(0,0,0),ph=new N(1,1,1),zn=new N,Os=new N,He=new N,dl=new le,pl=new Rs;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mh=0;const ml=new N,Ii=new Rs,bn=new le,Bs=new N,as=new N,gh=new N,_h=new Rs,gl=new N(1,0,0),_l=new N(0,1,0),xl=new N(0,0,1),vl={type:"added"},xh={type:"removed"},Li={type:"childadded",child:null},na={type:"childremoved",child:null};class be extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new N,e=new Mn,n=new Rs,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(as,Bs,this.up):bn.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(bn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xh),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,_h,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new N(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new N,Tn=new N,ia=new N,An=new N,Di=new N,Ui=new N,Ml=new N,sa=new N,ra=new N,aa=new N,oa=new de,la=new de,ca=new de;class Ve{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Tn.subVectors(n,e),ia.subVectors(t,e);const a=on.dot(on),o=on.dot(Tn),l=on.dot(ia),c=Tn.dot(Tn),u=Tn.dot(ia),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Tn.subVectors(t,e),on.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ui.subVectors(r,n),sa.subVectors(t,n);const l=Di.dot(sa),c=Ui.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);const u=Di.dot(ra),h=Ui.dot(ra);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Di,a);aa.subVectors(t,r);const d=Di.dot(aa),g=Ui.dot(aa);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ui,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ml.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Ml,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=eh(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Wt(Ce.r*255,0,255))*65536+Math.round(Wt(Ce.g*255,0,255))*256+Math.round(Wt(Ce.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ne){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(zs);const n=qr(kn.h,zs.h,e),s=qr(kn.s,zs.s,e),r=qr(kn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new kt;kt.NAMES=Pc;let vh=0;class yi extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=qi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qi extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,ks=new zt;let Mh=0;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eo,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eo&&(t.usage=this.usage),t}}class Ic extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sh=0;const Ze=new le,ha=new be,Ni=new N,Ge=new ws,os=new ws,Se=new N;class Ye extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?Lc:Ic)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ge.min,os.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,os.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(os.min),Ge.expandByPoint(os.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Se.add(Ni)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;const c=new N,u=new N,h=new N,f=new zt,d=new zt,g=new zt,_=new N,m=new N;function p(F,E,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),o[F].add(_),o[E].add(_),o[M].add(_),l[F].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,E=y.length;F<E;++F){const M=y[F],w=M.start,V=M.count;for(let k=w,K=w+V;k<K;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new N,S=new N,I=new N,P=new N;function R(F){I.fromBufferAttribute(s,F),P.copy(I);const E=o[F];b.copy(E),b.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(P,E);const w=S.dot(l[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,w)}for(let F=0,E=y.length;F<E;++F){const M=y[F],w=M.start,V=M.count;for(let k=w,K=w+V;k<K;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new le,li=new zo,Hs=new Br,El=new N,Gs=new N,Vs=new N,Ws=new N,fa=new N,Xs=new N,yl=new N,Ys=new N;class Ae extends be{constructor(t=new Ye,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(fa.fromBufferAttribute(h,t),a?Xs.addScaledVector(fa,u):Xs.addScaledVector(fa.sub(e),u))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(Hs.containsPoint(li.origin)===!1&&(li.intersectSphere(Hs,El)===null||li.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,I=b;S<I;S+=3){const P=o.getX(S),R=o.getX(S+1),F=o.getX(S+2);s=qs(this,p,t,n,c,u,h,P,R,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=qs(this,a,t,n,c,u,h,y,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,I=b;S<I;S+=3){const P=S,R=S+1,F=S+2;s=qs(this,p,t,n,c,u,h,P,R,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,S=m+2;s=qs(this,a,t,n,c,u,h,y,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Eh(i,t,e,n,s,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ni,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Gs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Ws);const u=Eh(i,t,e,n,Gs,Vs,Ws,yl);if(u){const h=new N;Ve.getBarycoord(yl,Gs,Vs,Ws,h),s&&(u.uv=Ve.getInterpolatedAttribute(s,o,l,c,h,new zt)),r&&(u.uv1=Ve.getInterpolatedAttribute(r,o,l,c,h,new zt)),a&&(u.normal=Ve.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Ve.getNormal(Gs,Vs,Ws,f.normal),u.face=f,u.barycoord=h}return u}class Nn extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(h,2));function g(_,m,p,y,b,S,I,P,R,F,E){const M=S/R,w=I/F,V=S/2,k=I/2,K=P/2,q=R+1,W=F+1;let j=0,H=0;const st=new N;for(let ft=0;ft<W;ft++){const vt=ft*w-k;for(let Rt=0;Rt<q;Rt++){const ne=Rt*M-V;st[_]=ne*y,st[m]=vt*b,st[p]=K,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=P>0?1:-1,u.push(st.x,st.y,st.z),h.push(Rt/R),h.push(1-ft/F),j+=1}}for(let ft=0;ft<F;ft++)for(let vt=0;vt<R;vt++){const Rt=f+vt+q*ft,ne=f+vt+q*(ft+1),Y=f+(vt+1)+q*(ft+1),et=f+(vt+1)+q*ft;l.push(Rt,ne,et),l.push(ne,Y,et),H+=6}o.addGroup(d,H,E),d+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function yh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const bh={clone:ts,merge:Ue};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uc extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new N,bl=new zt,Tl=new zt;class Je extends Uc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Tl),e.subVectors(Tl,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class Rh extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Je(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new Je(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Je(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new Je(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Je(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nc extends Fe{constructor(t=[],e=Zi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wh extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=We),new Rh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class $n extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ch={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ch)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ho{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Ho(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ph extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ih{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eo,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new N;class Cr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Go extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bi;const ls=new N,zi=new N,ki=new N,Hi=new zt,cs=new zt,Fc=new le,$s=new N,us=new N,Ks=new N,Al=new zt,pa=new zt,Rl=new zt;class Oc extends be{constructor(t=new Go){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ih(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Cr(n,3,0,!1)),Bi.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Fc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Zs($s.set(-.5,-.5,0),ki,a,zi,s,r),Zs(us.set(.5,-.5,0),ki,a,zi,s,r),Zs(Ks.set(.5,.5,0),ki,a,zi,s,r),Al.set(0,0),pa.set(1,0),Rl.set(1,1);let o=t.ray.intersectTriangle($s,us,Ks,!1,ls);if(o===null&&(Zs(us.set(-.5,.5,0),ki,a,zi,s,r),pa.set(0,1),o=t.ray.intersectTriangle($s,Ks,us,!1,ls),o===null))return;const l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:Ve.getInterpolation(ls,$s,us,Ks,Al,pa,Rl,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(i,t,e,n,s,r){Hi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cs.x=r*Hi.x-s*Hi.y,cs.y=s*Hi.x+r*Hi.y):cs.copy(Hi),i.copy(t),i.x+=cs.x,i.y+=cs.y,i.applyMatrix4(Fc)}const ma=new N,Lh=new N,Dh=new Ft;class fi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(Lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dh.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Br,js=new N;class Vo{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-d,S-p).normalize(),n[1].setComponents(l+r,f+c,m+d,S+p).normalize(),n[2].setComponents(l+a,f+u,m+g,S+y).normalize(),n[3].setComponents(l-a,f-u,m-g,S-y).normalize(),n[4].setComponents(l-o,f-h,m-_,S-b).normalize(),e===Ln)n[5].setComponents(l+o,f+h,m+_,S+b).normalize();else if(e===Rr)n[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bc extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new N,Ir=new N,wl=new le,hs=new zo,Js=new Br,ga=new N,Cl=new N;class Uh extends be{constructor(t=new Ye,e=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Ir);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;wl.copy(s).invert(),hs.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),b=Qs(this,t,hs,l,p,y,_);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Qs(this,t,hs,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Qs(this,t,hs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Qs(this,t,hs,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Pr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Pr,Ir,ga,Cl)>n)return;ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ga);if(!(c<t.near||c>t.far))return{distance:c,point:Cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Pl=new N,Il=new N;class Nh extends Uh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pl.fromBufferAttribute(e,s),Il.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pl.distanceTo(Il);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zr extends Fe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zc extends Fe{constructor(t,e,n=Si,s,r,a,o=Xe,l=Xe,c,u=Es){if(u!==Es&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tr=new N,er=new N,_a=new N,nr=new Ve;class Fh extends Ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(vr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=nr;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),nr.getNormal(_a),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const b=(y+1)%3,S=h[y],I=h[b],P=nr[u[y]],R=nr[u[b]],F=`${S}_${I}`,E=`${I}_${S}`;E in f&&f[E]?(_a.dot(f[E].normal)<=r&&(d.push(P.x,P.y,P.z),d.push(R.x,R.y,R.z)),f[E]=null):F in f||(f[F]={index0:c[y],index1:c[b],normal:_a.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];tr.fromBufferAttribute(o,_),er.fromBufferAttribute(o,m),d.push(tr.x,tr.y,tr.z),d.push(er.x,er.y,er.z)}this.setAttribute("position",new xe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kr extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let b=0;b<c;b++){const S=b*h-r;g.push(S,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,S=y+c*(p+1),I=y+1+c*(p+1),P=y+1+c*p;d.push(b,S,P),d.push(S,I,P)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wo extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new N,g=new zt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,b=y,S=y+n+1,I=y+n+2,P=y+1;o.push(b,S,P),o.push(S,I,P)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Lr extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let I=0;I<=e;I++){const P=I/e;h.x=-t*Math.cos(s+P*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(s+P*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(P+S,1-b),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const b=u[p][y+1],S=u[p][y],I=u[p+1][y],P=u[p+1][y+1];(p!==0||a>0)&&d.push(b,S,P),(p!==n-1||l<Math.PI)&&d.push(S,I,P)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dr extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oh extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bh extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kc extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new le,Ll=new N,Dl=new N;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hc extends Uc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kh extends zh{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hh extends kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new kh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gh extends kc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vh extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ul=new le;class Wh{constructor(t,e,n=0,s=1/0){this.ray=new zo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ul.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(Nl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bo(t[s],this,n,e);return n.sort(Nl),n}}function Nl(i,t){return i.distance-t.distance}function bo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)bo(r[a],t,e,!0)}}function Fl(i,t,e,n){const s=Xh(n);switch(e){case Sc:return i*t;case yc:return i*t/s.components*s.byteLength;case No:return i*t/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case Ec:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xr:case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tc:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xh(i){switch(i){case vn:case xc:return{byteLength:1,components:1};case Ms:case vc:case As:return{byteLength:2,components:1};case Do:case Uo:return{byteLength:2,components:4};case Si:case Lo:case In:return{byteLength:4,components:1};case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);function Gc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
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
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,Yf=`struct PhysicalMaterial {
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
}`,qf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,tp=`#if DEPTH_PACKING == 3200
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
}`,ep=`#define DISTANCE
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
}`,np=`#define DISTANCE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,hp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,dp=`#define NORMAL
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
}`,pp=`#define NORMAL
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
}`,mp=`#define PHONG
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
}`,gp=`#define PHONG
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
}`,_p=`#define STANDARD
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
}`,xp=`#define STANDARD
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
}`,vp=`#define TOON
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
}`,Mp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Tp=`uniform float rotation;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:qh,alphahash_pars_fragment:$h,alphamap_fragment:Kh,alphamap_pars_fragment:Zh,alphatest_fragment:jh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:ff,color_fragment:df,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:Ef,emissivemap_pars_fragment:yf,colorspace_fragment:bf,colorspace_pars_fragment:Tf,envmap_fragment:Af,envmap_common_pars_fragment:Rf,envmap_pars_fragment:wf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:Yf,lights_fragment_begin:qf,lights_fragment_maps:$f,lights_fragment_end:Kf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:ud,normal_fragment_begin:hd,normal_fragment_maps:fd,normal_pars_fragment:dd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:Ed,premultiplied_alpha_fragment:yd,project_vertex:bd,dithering_fragment:Td,dithering_pars_fragment:Ad,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Id,shadowmask_pars_fragment:Ld,skinbase_vertex:Dd,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:Yd,background_vert:qd,background_frag:$d,backgroundCube_vert:Kd,backgroundCube_frag:Zd,cube_vert:jd,cube_frag:Jd,depth_vert:Qd,depth_frag:tp,distanceRGBA_vert:ep,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:sp,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:up,meshmatcap_vert:hp,meshmatcap_frag:fp,meshnormal_vert:dp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:xp,meshtoon_vert:vp,meshtoon_frag:Mp,points_vert:Sp,points_frag:Ep,shadow_vert:yp,shadow_frag:bp,sprite_vert:Tp,sprite_frag:Ap},it={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},gn={basic:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([it.points,it.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([it.common,it.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([it.sprite,it.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([it.lights,it.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};gn.physical={uniforms:Ue([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ir={r:0,b:0,g:0},ui=new Mn,Rp=new le;function wp(i,t,e,n,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const I=g(b);I===null?p(o,l):I&&I.isColor&&(p(I,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const I=g(S);I&&(I.isCubeTexture||I.mapping===Or)?(u===void 0&&(u=new Ae(new Nn(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ts(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(ui)),u.material.toneMapped=jt.getTransfer(I.colorSpace)!==ie,(h!==I||f!==I.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ae(new kr(2,2),new ii({name:"BackgroundMaterial",uniforms:ts(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=jt.getTransfer(I.colorSpace)!==ie,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(ir,Dc(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,S,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:y}}function Cp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,w,V,k,K){let q=!1;const W=h(k,V,w);r!==W&&(r=W,c(r.object)),q=d(M,k,V,K),q&&g(M,k,V,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(M,w,V,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,w,V){const k=V.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let q=K[w.id];q===void 0&&(q={},K[w.id]=q);let W=q[k];return W===void 0&&(W=f(l()),q[k]=W),W}function f(M){const w=[],V=[],k=[];for(let K=0;K<e;K++)w[K]=0,V[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,w,V,k){const K=r.attributes,q=w.attributes;let W=0;const j=V.getAttributes();for(const H in j)if(j[H].location>=0){const ft=K[H];let vt=q[H];if(vt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(M,w,V,k){const K={},q=w.attributes;let W=0;const j=V.getAttributes();for(const H in j)if(j[H].location>=0){let ft=q[H];ft===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),K[H]=vt,W++}r.attributes=K,r.attributesNum=W,r.index=k}function _(){const M=r.newAttributes;for(let w=0,V=M.length;w<V;w++)M[w]=0}function m(M){p(M,0)}function p(M,w){const V=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;V[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),K[M]!==w&&(i.vertexAttribDivisor(M,w),K[M]=w)}function y(){const M=r.newAttributes,w=r.enabledAttributes;for(let V=0,k=w.length;V<k;V++)w[V]!==M[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function b(M,w,V,k,K,q,W){W===!0?i.vertexAttribIPointer(M,w,V,K,q):i.vertexAttribPointer(M,w,V,k,K,q)}function S(M,w,V,k){_();const K=k.attributes,q=V.getAttributes(),W=w.defaultAttributeValues;for(const j in q){const H=q[j];if(H.location>=0){let st=K[j];if(st===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ft=st.normalized,vt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const ne=Rt.buffer,Y=Rt.type,et=Rt.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===Lo;if(st.isInterleavedBufferAttribute){const ot=st.data,Tt=ot.stride,Jt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Pt=0;Pt<H.locationSize;Pt++)p(H.location+Pt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Pt=0;Pt<H.locationSize;Pt++)m(H.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Pt=0;Pt<H.locationSize;Pt++)b(H.location+Pt,vt/H.locationSize,Y,ft,Tt*et,(Jt+vt/H.locationSize*Pt)*et,_t)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,vt/H.locationSize,Y,ft,vt*et,vt/H.locationSize*ot*et,_t)}}else if(W!==void 0){const ft=W[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}y()}function I(){F();for(const M in n){const w=n[M];for(const V in w){const k=w[V];for(const K in k)u(k[K].object),delete k[K];delete w[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const V in w){const k=w[V];for(const K in k)u(k[K].object),delete k[K];delete w[V]}delete n[M.id]}function R(M){for(const w in n){const V=n[w];if(V[M.id]===void 0)continue;const k=V[M.id];for(const K in k)u(k[K].object),delete k[K];delete V[M.id]}}function F(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Pp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:P}}function Lp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,b=y*4;let S=p.clippingState||null;l.value=S,S=u(g,f,b,d);for(let I=0;I!==b;++I)S[I]=e[I];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=d;b!==_;++b,S+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Dp(i){let t=new WeakMap;function e(a,o){return o===Xa?a.mapping=Zi:o===Ya&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===Ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Xi=4,Ol=[.125,.215,.35,.446,.526,.582],gi=20,va=new Hc,Bl=new kt;let Ma=null,Sa=0,Ea=0,ya=!1;const di=(1+Math.sqrt(5))/2,Gi=1/di,zl=[new N(-di,Gi,0),new N(di,Gi,0),new N(-Gi,0,di),new N(Gi,0,di),new N(0,di,-Gi),new N(0,di,Gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Up=new N;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Up}=r;Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,Ea),this._renderer.xr.enabled=ya,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:As,format:un,colorSpace:Ji,depthBuffer:!1},s=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Fp(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,s,r){const l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Bl),h.toneMapping=Qn,h.autoClear=!1;const g=new Qi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Ae(new Nn,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Bl),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const S=this._cubeSize;sr(s,b*S,y>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(_,l),h.render(t,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zl[(s-r-1)%zl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ae(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let y=0;for(let R=0;R<gi;++R){const F=R/_,E=Math.exp(-F*F/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],I=3*S*(s>b-Xi?s-b+Xi:0),P=4*(this._cubeSize-S);sr(e,I,P,3*S,2*S),l.setRenderTarget(e),l.render(h,va)}}function Np(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Ol.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Xi?l=Ol[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),b=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,F=P>2?0:-1,E=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(E,_*g*P),b.set(f,m*g*P);const M=[P,P,P,P,P,P];S.set(M,p*g*P)}const I=new Ye;I.setAttribute("position",new hn(y,_)),I.setAttribute("uv",new hn(b,m)),I.setAttribute("faceIndex",new hn(S,p)),t.push(I),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hl(i,t,e){const n=new Ei(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fp(i,t,e){const n=new Float32Array(gi),s=new N(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Gl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Op(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xa||l===Ya,u=l===Zi||l===ji;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new kl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new kl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zp(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let b=0,S=y.length;b<S;b+=3){const I=y[b+0],P=y[b+1],R=y[b+2];f.push(I,P,P,R,R,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const I=b+0,P=b+1,R=b+2;f.push(I,P,P,R,R,I)}}else return;const m=new(wc(f)?Lc:Ic)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function kp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gp(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let I=o.attributes.position.count*S,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*P*4*h),F=new Cc(R,I,P,h);F.type=In,F.needsUpdate=!0;const E=S*4;for(let w=0;w<h;w++){const V=p[w],k=y[w],K=b[w],q=I*P*4*w;for(let W=0;W<V.count;W++){const j=W*E;g===!0&&(s.fromBufferAttribute(V,W),R[q+j+0]=s.x,R[q+j+1]=s.y,R[q+j+2]=s.z,R[q+j+3]=0),_===!0&&(s.fromBufferAttribute(k,W),R[q+j+4]=s.x,R[q+j+5]=s.y,R[q+j+6]=s.z,R[q+j+7]=0),m===!0&&(s.fromBufferAttribute(K,W),R[q+j+8]=s.x,R[q+j+9]=s.y,R[q+j+10]=s.z,R[q+j+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new zt(I,P)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Vc=new Fe,Wl=new zc(1,1),Wc=new Cc,Xc=new hh,Yc=new Nc,Xl=[],Yl=[],ql=new Float32Array(16),$l=new Float32Array(9),Kl=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Me(e,n)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Me(e,n)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Me(e,n)}}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=Rc,r=Wl):r=Vc,e.setTexture2D(t||r,s)}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xc,s)}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yc,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wc,s)}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return Yp;case 35666:return qp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return jp;case 35667:case 35671:return Jp;case 35668:case 35672:return Qp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}function um(i,t){i.uniform1fv(this.addr,t)}function hm(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function fm(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function dm(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function pm(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mm(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gm(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _m(i,t){i.uniform1iv(this.addr,t)}function xm(i,t){i.uniform2iv(this.addr,t)}function vm(i,t){i.uniform3iv(this.addr,t)}function Mm(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function bm(i,t){i.uniform4uiv(this.addr,t)}function Tm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Vc,r[a])}function Am(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xc,r[a])}function Rm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yc,r[a])}function wm(i,t,e){const n=this.cache,s=t.length,r=Hr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function Cm(i){switch(i){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return Em;case 36295:return ym;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return wm}}class Pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cm(e.type)}}class Im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cm(e.type)}}class Lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Zl(i,t){i.seq.push(t),i.map[t.id]=t}function Dm(i,t,e){const n=i.name,s=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),a=ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zl(e,c===void 0?new Pm(o,i,t):new Im(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Lm(o),Zl(e,h)),e=h}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Dm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function jl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Um=37297;let Nm=0;function Fm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Jl=new Ft;function Om(i){jt._getMatrix(Jl,jt.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fm(i.getShaderSource(t),a)}else return s}function Bm(i,t){const e=Om(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zm(i,t){let e;switch(t){case Fu:e="Linear";break;case Ou:e="Reinhard";break;case Bu:e="Cineon";break;case zu:e="ACESFilmic";break;case Hu:e="AgX";break;case Gu:e="Neutral";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new N;function km(){jt.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Gm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(Wm,Ym)}const Xm=new Map;function Ym(i,t){let e=Bt[t];if(e===void 0){const n=Xm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return To(e)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(qm,$m)}function $m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(t="ENVMAP_MODE_REFRACTION"),t}function Jm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Io:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function Qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function t0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Km(e),c=Zm(e),u=jm(e),h=Jm(e),f=Qm(e),d=Hm(e),g=Gm(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=To(a),a=tc(a,e),a=ec(a,e),o=To(o),o=tc(o,e),o=ec(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,S=y+p+o,I=jl(s,s.VERTEX_SHADER,b),P=jl(s,s.FRAGMENT_SHADER,S);s.attachShader(_,I),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(w){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),K=s.getShaderInfoLog(P).trim();let q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,P);else{const j=Ql(s,I,"vertex"),H=Ql(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+j+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||K==="")&&(W=!1);W&&(w.diagnostics={runnable:q,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(I),s.deleteShader(P),F=new Sr(s,_),E=Vm(s,_)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Um)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let e0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new i0(t),e.set(t,n)),n}}class i0{constructor(t){this.id=e0++,this.code=t,this.usedTimes=0}}function s0(i,t,e,n,s,r,a){const o=new ko,l=new n0,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,w,V,k){const K=V.fog,q=k.geometry,W=E.isMeshStandardMaterial?V.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),H=j&&j.mapping===Or?j.image.height:null,st=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=ft!==void 0?ft.length:0;let Rt=0;q.morphAttributes.position!==void 0&&(Rt=1),q.morphAttributes.normal!==void 0&&(Rt=2),q.morphAttributes.color!==void 0&&(Rt=3);let ne,Y,et,_t;if(st){const ee=gn[st];ne=ee.vertexShader,Y=ee.fragmentShader}else ne=E.vertexShader,Y=E.fragmentShader,l.update(E),et=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const ot=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Jt=k.isInstancedMesh===!0,Pt=k.isBatchedMesh===!0,pe=!!E.map,ue=!!E.matcap,Xt=!!j,C=!!E.aoMap,qe=!!E.lightMap,$t=!!E.bumpMap,Yt=!!E.normalMap,Et=!!E.displacementMap,ae=!!E.emissiveMap,Mt=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,O=E.clearcoat>0,$=E.dispersion>0,J=E.iridescence>0,X=E.sheen>0,xt=E.transmission>0,lt=x&&!!E.anisotropyMap,At=O&&!!E.clearcoatMap,wt=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,pt=J&&!!E.iridescenceMap,Ct=J&&!!E.iridescenceThicknessMap,Lt=X&&!!E.sheenColorMap,mt=X&&!!E.sheenRoughnessMap,qt=!!E.specularMap,Ot=!!E.specularColorMap,re=!!E.specularIntensityMap,L=xt&&!!E.transmissionMap,ct=xt&&!!E.thicknessMap,G=!!E.gradientMap,Z=!!E.alphaMap,ht=E.alphaTest>0,ut=!!E.alphaHash,Nt=!!E.extensions;let he=Qn;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(he=i.toneMapping);const Re={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:Y,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Pt,batchingColor:Pt&&k._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&k.instanceColor!==null,instancingMorph:Jt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:ue,envMap:Xt,envMapMode:Xt&&j.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:qe,bumpMap:$t,normalMap:Yt,displacementMap:f&&Et,emissiveMap:ae,normalMapObjectSpace:Yt&&E.normalMapType===qu,normalMapTangentSpace:Yt&&E.normalMapType===Ac,metalnessMap:Mt,roughnessMap:T,anisotropy:x,anisotropyMap:lt,clearcoat:O,clearcoatMap:At,clearcoatNormalMap:wt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:qt,specularColorMap:Ot,specularIntensityMap:re,transmission:xt,transmissionMap:L,thicknessMap:ct,gradientMap:G,opaque:E.transparent===!1&&E.blending===qi&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ut,combine:E.combine,mapUv:pe&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:qe&&_(E.lightMap.channel),bumpMapUv:$t&&_(E.bumpMap.channel),normalMapUv:Yt&&_(E.normalMap.channel),displacementMapUv:Et&&_(E.displacementMap.channel),emissiveMapUv:ae&&_(E.emissiveMap.channel),metalnessMapUv:Mt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:lt&&_(E.anisotropyMap.channel),clearcoatMapUv:At&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(E.sheenRoughnessMap.channel),specularMapUv:qt&&_(E.specularMap.channel),specularColorMapUv:Ot&&_(E.specularColorMap.channel),specularIntensityMapUv:re&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:ct&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Yt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(pe||Z),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:ae&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)M.push(w),M.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(y(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=g[E.type];let w;if(M){const V=gn[M];w=bh.clone(V.uniforms)}else w=E.uniforms;return w}function I(E,M){let w;for(let V=0,k=u.length;V<k;V++){const K=u[V];if(K.cacheKey===M){w=K,++w.usedTimes;break}}return w===void 0&&(w=new t0(i,M,E,r),u.push(w)),w}function P(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:F}}function r0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||a0),n.length>1&&n.sort(f||sc),s.length>1&&s.sort(f||sc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function o0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rc,i.set(n,[a])):s>=r.length?(a=new rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new kt};break;case"SpotLight":e={position:new N,direction:new N,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function c0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let u0=0;function h0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f0(i){const t=new l0,e=c0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new le,a=new le;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,b=0,S=0,I=0,P=0,R=0;c.sort(h0);for(let E=0,M=c.length;E<M;E++){const w=c[E],V=w.color,k=w.intensity,K=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=V.r*k,h+=V.g*k,f+=V.b*k;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],k);R++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=w.shadow.matrix,y++}n.directional[d]=W,d++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(V).multiplyScalar(k),W.distance=K,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[_]=W;const j=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,j.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[_]=j.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,S++}_++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(V).multiplyScalar(k),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(k),W.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==S||F.numSpotMaps!==I||F.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=S,F.numSpotMaps=I,F.numLightProbes=R,n.version=u0++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ac(i){const t=new f0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function d0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ac(i),t.set(s,[o])):r>=a.length?(o=new ac(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`;function g0(i,t,e){let n=new Vo;const s=new zt,r=new zt,a=new de,o=new Oh({depthPacking:Yu}),l=new Bh,c={},u=e.maxTextureSize,h={[ni]:ze,[ze]:ni,[Qe]:Qe},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let p=this.type;this.render=function(P,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Jn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Cn&&this.type===Cn,K=p===Cn&&this.type!==Cn;for(let q=0,W=P.length;q<W;q++){const j=P[q],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||k===!0||K===!0){const vt=this.type!==Cn?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(s.x,s.y,vt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let vt=0;vt<ft;vt++){const Rt=H.getViewport(vt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),V.viewport(a),H.updateMatrices(j,vt),n=H.getFrustum(),S(R,F,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Cn&&y(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,w)};function y(P,R){const F=t.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,F,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,F,d,_,null)}function b(P,R,F,E){let M=null;const w=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)M=w;else if(M=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=M.uuid,k=R.uuid;let K=c[V];K===void 0&&(K={},c[V]=K);let q=K[k];q===void 0&&(q=M.clone(),K[k]=q,R.addEventListener("dispose",I)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Cn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=F}return M}function S(P,R,F,E,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Cn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const k=t.update(P),K=P.material;if(Array.isArray(K)){const q=k.groups;for(let W=0,j=q.length;W<j;W++){const H=q[W],st=K[H.materialIndex];if(st&&st.visible){const ft=b(P,st,E,M);P.onBeforeShadow(i,P,R,F,k,ft,H),i.renderBufferDirect(F,null,k,ft,P,H),P.onAfterShadow(i,P,R,F,k,ft,H)}}}else if(K.visible){const q=b(P,K,E,M);P.onBeforeShadow(i,P,R,F,k,q,null),i.renderBufferDirect(F,null,k,q,P,null),P.onAfterShadow(i,P,R,F,k,q,null)}}const V=P.children;for(let k=0,K=V.length;k<K;k++)S(V[k],R,F,E,M)}function I(P){P.target.removeEventListener("dispose",I);for(const F in c){const E=c[F],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const _0={[Ba]:za,[ka]:Va,[Ha]:Wa,[Ki]:Ga,[za]:Ba,[Va]:ka,[Wa]:Ha,[Ga]:Ki};function x0(i,t){function e(){let L=!1;const ct=new de;let G=null;const Z=new de(0,0,0,0);return{setMask:function(ht){G!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){L=ht},setClear:function(ht,ut,Nt,he,Re){Re===!0&&(ht*=he,ut*=he,Nt*=he),ct.set(ht,ut,Nt,he),Z.equals(ct)===!1&&(i.clearColor(ht,ut,Nt,he),Z.copy(ct))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,G=null,Z=null,ht=null;return{setReversed:function(ut){if(ct!==ut){const Nt=t.get("EXT_clip_control");ut?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ct=ut;const he=ht;ht=null,this.setClear(he)}},getReversed:function(){return ct},setTest:function(ut){ut?ot(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ut){G!==ut&&!L&&(i.depthMask(ut),G=ut)},setFunc:function(ut){if(ct&&(ut=_0[ut]),Z!==ut){switch(ut){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ht!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ht=ut)},reset:function(){L=!1,G=null,Z=null,ht=null,ct=!1}}}function s(){let L=!1,ct=null,G=null,Z=null,ht=null,ut=null,Nt=null,he=null,Re=null;return{setTest:function(ee){L||(ee?ot(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!L&&(i.stencilMask(ee),ct=ee)},setFunc:function(ee,nn,Sn){(G!==ee||Z!==nn||ht!==Sn)&&(i.stencilFunc(ee,nn,Sn),G=ee,Z=nn,ht=Sn)},setOp:function(ee,nn,Sn){(ut!==ee||Nt!==nn||he!==Sn)&&(i.stencilOp(ee,nn,Sn),ut=ee,Nt=nn,he=Sn)},setLocked:function(ee){L=ee},setClear:function(ee){Re!==ee&&(i.clearStencil(ee),Re=ee)},reset:function(){L=!1,ct=null,G=null,Z=null,ht=null,ut=null,Nt=null,he=null,Re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,I=null,P=null,R=new kt(0,0,0),F=0,E=!1,M=null,w=null,V=null,k=null,K=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let st=null,ft={};const vt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),ne=new de().fromArray(vt),Y=new de().fromArray(Rt);function et(L,ct,G,Z){const ht=new Uint8Array(4),ut=i.createTexture();i.bindTexture(L,ut),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<G;Nt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ct+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ut}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Ki),$t(!1),Yt(il),ot(i.CULL_FACE),C(Jn);function ot(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Tt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Jt(L,ct){return h[L]!==ct?(i.bindFramebuffer(L,ct),h[L]=ct,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Pt(L,ct){let G=d,Z=!1;if(L){G=f.get(ct),G===void 0&&(G=[],f.set(ct,G));const ht=L.textures;if(G.length!==ht.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Nt=ht.length;ut<Nt;ut++)G[ut]=i.COLOR_ATTACHMENT0+ut;G.length=ht.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function pe(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ue={[mi]:i.FUNC_ADD,[_u]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};ue[vu]=i.MIN,ue[Mu]=i.MAX;const Xt={[Su]:i.ZERO,[Eu]:i.ONE,[yu]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,ct,G,Z,ht,ut,Nt,he,Re,ee){if(L===Jn){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),L!==gu){if(L!==m||ee!==E){if((p!==mi||S!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,S=mi),ee)switch(L){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,I=null,P=null,R.set(0,0,0),F=0,m=L,E=ee}return}ht=ht||ct,ut=ut||G,Nt=Nt||Z,(ct!==p||ht!==S)&&(i.blendEquationSeparate(ue[ct],ue[ht]),p=ct,S=ht),(G!==y||Z!==b||ut!==I||Nt!==P)&&(i.blendFuncSeparate(Xt[G],Xt[Z],Xt[ut],Xt[Nt]),y=G,b=Z,I=ut,P=Nt),(he.equals(R)===!1||Re!==F)&&(i.blendColor(he.r,he.g,he.b,Re),R.copy(he),F=Re),m=L,E=!1}function qe(L,ct){L.side===Qe?Tt(i.CULL_FACE):ot(i.CULL_FACE);let G=L.side===ze;ct&&(G=!G),$t(G),L.blending===qi&&L.transparent===!1?C(Jn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Yt(L){L!==pu?(ot(i.CULL_FACE),L!==w&&(L===il?i.cullFace(i.BACK):L===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),w=L}function Et(L){L!==V&&(W&&i.lineWidth(L),V=L)}function ae(L,ct,G){L?(ot(i.POLYGON_OFFSET_FILL),(k!==ct||K!==G)&&(i.polygonOffset(ct,G),k=ct,K=G)):Tt(i.POLYGON_OFFSET_FILL)}function Mt(L){L?ot(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+q-1),st!==L&&(i.activeTexture(L),st=L)}function x(L,ct,G){G===void 0&&(st===null?G=i.TEXTURE0+q-1:G=st);let Z=ft[G];Z===void 0&&(Z={type:void 0,texture:void 0},ft[G]=Z),(Z.type!==L||Z.texture!==ct)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(L,ct||_t[L]),Z.type=L,Z.texture=ct)}function O(){const L=ft[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function mt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function qt(L,ct){let G=c.get(ct);G===void 0&&(G=new WeakMap,c.set(ct,G));let Z=G.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ct,L.name),G.set(L,Z))}function Ot(L,ct){const Z=c.get(ct).get(L);l.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,L.__bindingPointIndex),l.set(ct,Z))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,ft={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,I=null,P=null,R=new kt(0,0,0),F=0,E=!1,M=null,w=null,V=null,k=null,K=null,ne.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Tt,bindFramebuffer:Jt,drawBuffers:Pt,useProgram:pe,setBlending:C,setMaterial:qe,setFlipSided:$t,setCullFace:Yt,setLineWidth:Et,setPolygonOffset:ae,setScissorTest:Mt,activeTexture:T,bindTexture:x,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Ot,texStorage2D:wt,texStorage3D:Q,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:At,scissor:Lt,viewport:mt,reset:re}}function v0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):wr("canvas")}function _(T,x,O){let $=1;const J=Mt(T);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor($*J.width),xt=Math.floor($*J.height);h===void 0&&(h=g(X,xt));const lt=x?g(X,xt):h;return lt.width=X,lt.height=xt,lt.getContext("2d").drawImage(T,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+xt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,O,$,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),x===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const xt=J?Ar:jt.getTransfer($);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=xt===ie?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(T,x){let O;return T?x===null||x===Si||x===Ss?O=i.DEPTH24_STENCIL8:x===In?O=i.DEPTH32F_STENCIL8:x===Ms&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Si||x===Ss?O=i.DEPTH_COMPONENT24:x===In?O=i.DEPTH_COMPONENT32F:x===Ms&&(O=i.DEPTH_COMPONENT16),O}function I(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){const x=T.target;x.removeEventListener("dispose",P),F(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x)}function F(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,$=f.get(O);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys($).length===0&&f.delete(O)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const O=T.source,$=f.get(O);delete $[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let $=0,J=O.length;$<J;$++){const X=n.get(O[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(T)}let w=0;function V(){w=0}function k(){const T=w;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function K(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function q(T,x){const O=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function W(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function j(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function H(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){et(O,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const st={[qa]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},ft={[Xe]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},vt={[$u]:i.NEVER,[th]:i.ALWAYS,[Ku]:i.LESS,[Rc]:i.LEQUAL,[Zu]:i.EQUAL,[Qu]:i.GEQUAL,[ju]:i.GREATER,[Ju]:i.NOTEQUAL};function Rt(T,x){if(x.type===In&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===Yr||x.magFilter===Is||x.magFilter===xi||x.minFilter===We||x.minFilter===Yr||x.minFilter===Is||x.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==Is&&x.minFilter!==xi||x.type===In&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",P));const $=x.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const X=K(x);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;const xt=J[T.__cacheKey];xt!==void 0&&(J[T.__cacheKey].usedTimes--,xt.usedTimes===0&&E(x)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return O}function Y(T,x,O){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const J=ne(T,x),X=x.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+O);const xt=n.get(X);if(X.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const lt=jt.getPrimaries(jt.workingColorSpace),At=x.colorSpace===qn?null:jt.getPrimaries(x.colorSpace),wt=x.colorSpace===qn||lt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Q=_(x.image,!1,s.maxTextureSize);Q=ae(x,Q);const pt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let Lt=b(x.internalFormat,pt,Ct,x.colorSpace,x.isVideoTexture);Rt($,x);let mt;const qt=x.mipmaps,Ot=x.isVideoTexture!==!0,re=xt.__version===void 0||J===!0,L=X.dataReady,ct=I(x,Q);if(x.isDepthTexture)Lt=S(x.format===ys,x.type),re&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Lt,Q.width,Q.height,0,pt,Ct,null));else if(x.isDataTexture)if(qt.length>0){Ot&&re&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Ct,mt.data);x.generateMipmaps=!1}else Ot?(re&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Ct,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,Q.width,Q.height,0,pt,Ct,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,qt[0].width,qt[0].height,Q.depth);for(let G=0,Z=qt.length;G<Z;G++)if(mt=qt[G],x.format!==un)if(pt!==null)if(Ot){if(L)if(x.layerUpdates.size>0){const ht=Fl(mt.width,mt.height,x.format,x.type);for(const ut of x.layerUpdates){const Nt=mt.data.subarray(ut*ht/mt.data.BYTES_PER_ELEMENT,(ut+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ut,mt.width,mt.height,1,pt,Nt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,Q.depth,0,pt,Ct,mt.data)}else{Ot&&re&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],x.format!==un?pt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(x.isDataArrayTexture)if(Ot){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){const G=Fl(Q.width,Q.height,x.format,x.type);for(const Z of x.layerUpdates){const ht=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Ct,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ct,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,Q.width,Q.height,Q.depth,0,pt,Ct,Q.data);else if(x.isData3DTexture)Ot?(re&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,Q.width,Q.height,Q.depth,0,pt,Ct,Q.data);else if(x.isFramebufferTexture){if(re)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,Lt,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let ht=0;ht<ct;ht++)e.texImage2D(i.TEXTURE_2D,ht,Lt,G,Z,0,pt,Ct,null),G>>=1,Z>>=1}}else if(qt.length>0){if(Ot&&re){const G=Mt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,G.width,G.height)}for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt,Ct,mt):e.texImage2D(i.TEXTURE_2D,G,Lt,pt,Ct,mt);x.generateMipmaps=!1}else if(Ot){if(re){const G=Mt(Q);e.texStorage2D(i.TEXTURE_2D,ct,Lt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,Q)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,Ct,Q);m(x)&&p($),xt.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function et(T,x,O){if(x.image.length!==6)return;const $=ne(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const X=n.get(J);if(J.version!==X.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const xt=jt.getPrimaries(jt.workingColorSpace),lt=x.colorSpace===qn?null:jt.getPrimaries(x.colorSpace),At=x.colorSpace===qn||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!wt&&!Q?pt[Z]=_(x.image[Z],!0,s.maxCubemapSize):pt[Z]=Q?x.image[Z].image:x.image[Z],pt[Z]=ae(x,pt[Z]);const Ct=pt[0],Lt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),qt=b(x.internalFormat,Lt,mt,x.colorSpace),Ot=x.isVideoTexture!==!0,re=X.__version===void 0||$===!0,L=J.dataReady;let ct=I(x,Ct);Rt(i.TEXTURE_CUBE_MAP,x);let G;if(wt){Ot&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,qt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){G=pt[Z].mipmaps;for(let ht=0;ht<G.length;ht++){const ut=G[ht];x.format!==un?Lt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Lt,mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,qt,ut.width,ut.height,0,Lt,mt,ut.data)}}}else{if(G=x.mipmaps,Ot&&re){G.length>0&&ct++;const Z=Mt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Lt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,pt[Z].width,pt[Z].height,0,Lt,mt,pt[Z].data);for(let ht=0;ht<G.length;ht++){const Nt=G[ht].image[Z].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Nt.width,Nt.height,Lt,mt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,qt,Nt.width,Nt.height,0,Lt,mt,Nt.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,Lt,mt,pt[Z]);for(let ht=0;ht<G.length;ht++){const ut=G[ht];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Lt,mt,ut.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,qt,Lt,mt,ut.image[Z])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,O,$,J,X){const xt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),At=b(O.internalFormat,xt,lt,O.colorSpace),wt=n.get(x),Q=n.get(O);if(Q.__renderTarget=x,!wt.__hasExternalTextures){const pt=Math.max(1,x.width>>X),Ct=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,At,pt,Ct,x.depth,0,xt,lt,null):e.texImage2D(J,X,At,pt,Ct,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,$t(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=S(x.stencilBuffer,J),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=$t(x);Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,X,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const $=x.textures;for(let J=0;J<$.length;J++){const X=$[J],xt=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),At=b(X.internalFormat,xt,lt,X.colorSpace),wt=$t(x);O&&Yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,At,x.width,x.height):Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const J=$.__webglTexture,X=$t(x);if(x.depthTexture.format===Es)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===ys)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?Tt(x.__webglFramebuffer[0],T):Tt(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),ot(x.__webglDepthbuffer[$],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const $=T.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ot(x.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(T,x,O){const $=n.get(T);x!==void 0&&_t($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Jt(T)}function pe(T){const x=T.texture,O=n.get(T),$=n.get(x);T.addEventListener("dispose",R);const J=T.textures,X=T.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let At=0;At<x.mipmaps.length;At++)O.__webglFramebuffer[lt][At]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,At=J.length;lt<At;lt++){const wt=n.get(J[lt]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Yt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const At=J[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const wt=r.convert(At.format,At.colorSpace),Q=r.convert(At.type),pt=b(At.internalFormat,wt,Q,At.colorSpace,T.isXRRenderTarget===!0),Ct=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)_t(O.__webglFramebuffer[lt][At],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At);else _t(O.__webglFramebuffer[lt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,At=J.length;lt<At;lt++){const wt=J[lt],Q=n.get(wt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Rt(i.TEXTURE_2D,wt),_t(O.__webglFramebuffer,T,wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Rt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)_t(O.__webglFramebuffer[At],T,x,i.COLOR_ATTACHMENT0,lt,At);else _t(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&p(lt),e.unbindTexture()}T.depthBuffer&&Jt(T)}function ue(T){const x=T.textures;for(let O=0,$=x.length;O<$;O++){const J=x[O];if(m(J)){const X=y(T),xt=n.get(J).__webglTexture;e.bindTexture(X,xt),p(X),e.unbindTexture()}}}const Xt=[],C=[];function qe(T){if(T.samples>0){if(Yt(T)===!1){const x=T.textures,O=T.width,$=T.height;let J=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),lt=x.length>1;if(lt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const At=T.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[wt]);const Q=n.get(x[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,J,i.NEAREST),l===!0&&(Xt.length=0,C.length=0,Xt.push(i.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xt.push(X),C.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[wt]);const Q=n.get(x[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Yt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function ae(T,x){const O=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ji&&O!==qn&&(jt.getTransfer(O)===ie?($!==un||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Yt}function M0(i,t){function e(n,s=qn){let r;const a=jt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.BYTE;if(n===vc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===un)return i.RGBA;if(n===Es)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===yc)return i.RED;if(n===No)return i.RED_INTEGER;if(n===bc)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Za||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===to)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===_o||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===vo||n===Mo||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:S0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b0 extends es{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new y0,m=e.getContextAttributes();let p=null,y=null;const b=[],S=[],I=new zt;let P=null;const R=new Je;R.viewport=new de;const F=new Je;F.viewport=new de;const E=[R,F],M=new Vh;let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=b[Y];return et===void 0&&(et=new da,b[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=b[Y];return et===void 0&&(et=new da,b[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=b[Y];return et===void 0&&(et=new da,b[Y]=et),et.getHandSpace()};function k(Y){const et=S.indexOf(Y.inputSource);if(et===-1)return;const _t=b[et];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<b.length;Y++){const et=S[Y];et!==null&&(S[Y]=null,b[Y].disconnect(et))}w=null,V=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,y=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",K),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,ot=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?ys:Es,ot=m.stencil?Ss:Si);const Jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ei(f.textureWidth,f.textureHeight,{format:un,type:vn,depthTexture:new zc(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ei(d.framebufferWidth,d.framebufferHeight,{format:un,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let et=0;et<Y.removed.length;et++){const _t=Y.removed[et],ot=S.indexOf(_t);ot>=0&&(S[ot]=null,b[ot].disconnect(_t))}for(let et=0;et<Y.added.length;et++){const _t=Y.added[et];let ot=S.indexOf(_t);if(ot===-1){for(let Jt=0;Jt<b.length;Jt++)if(Jt>=S.length){S.push(_t),ot=Jt;break}else if(S[Jt]===null){S[Jt]=_t,ot=Jt;break}if(ot===-1)break}const Tt=b[ot];Tt&&Tt.connect(_t)}}const W=new N,j=new N;function H(Y,et,_t){W.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ot=W.distanceTo(j),Tt=et.projectionMatrix.elements,Jt=_t.projectionMatrix.elements,Pt=Tt[14]/(Tt[10]-1),pe=Tt[14]/(Tt[10]+1),ue=(Tt[9]+1)/Tt[5],Xt=(Tt[9]-1)/Tt[5],C=(Tt[8]-1)/Tt[0],qe=(Jt[8]+1)/Jt[0],$t=Pt*C,Yt=Pt*qe,Et=ot/(-C+qe),ae=Et*-C;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=Pt+Et,T=pe+Et,x=$t-ae,O=Yt+(ot-ae),$=ue*pe/T*Mt,J=Xt*pe/T*Mt;Y.projectionMatrix.makePerspective(x,O,$,J,Mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=F.near=R.near=et,M.far=F.far=R.far=_t,(w!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far),R.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|F.layers.mask;const ot=Y.parent,Tt=M.cameras;st(M,ot);for(let Jt=0;Jt<Tt.length;Jt++)st(Tt[Jt],ot);Tt.length===2?H(M,R,F):M.projectionMatrix.copy(R.projectionMatrix),ft(Y,M,ot)};function ft(Y,et,_t){_t===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let vt=null;function Rt(Y,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ot=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Pt=0;Pt<_t.length;Pt++){const pe=_t[Pt];let ue=null;if(d!==null)ue=d.getViewport(pe);else{const C=h.getViewSubImage(f,pe);ue=C.viewport,Pt===0&&(t.setRenderTargetTextures(y,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(y))}let Xt=E[Pt];Xt===void 0&&(Xt=new Je,Xt.layers.enable(Pt),Xt.viewport=new de,E[Pt]=Xt),Xt.matrix.fromArray(pe.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(pe.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ue.x,ue.y,ue.width,ue.height),Pt===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Xt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Pt=h.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let _t=0;_t<b.length;_t++){const ot=S[_t],Tt=b[_t];ot!==null&&Tt!==void 0&&Tt.update(ot,et,c||a)}vt&&vt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new Gc;ne.setAnimationLoop(Rt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const hi=new Mn,T0=new le;function A0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,hi.copy(S),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(T0.makeRotationFromEuler(hi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const I=b.program;n.updateUBOMapping(y,I);const P=t.render.frame;r[y.id]!==P&&(f(y),r[y.id]=P)}function u(y){const b=h();y.__bindingPointIndex=b;const S=i.createBuffer(),I=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],S=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,R=S.length;P<R;P++){const F=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,M=F.length;E<M;E++){const w=F[E];if(d(w,P,E,I)===!0){const V=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let q=0;q<k.length;q++){const W=k[q],j=_(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+K,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,S,I){const P=y.value,R=b+"_"+S;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const F=I[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return I[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(y){const b=y.uniforms;let S=0;const I=16;for(let R=0,F=b.length;R<F;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,w=E.length;M<w;M++){const V=E[M],k=Array.isArray(V.value)?V.value:[V.value];for(let K=0,q=k.length;K<q;K++){const W=k[K],j=_(W),H=S%I,st=H%j.boundary,ft=H+st;S+=st,ft!==0&&I-ft<j.storage&&(S+=I-ft),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=j.storage}}}const P=S%I;return P>0&&(S+=I-P),y.__size=S,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class w0{constructor(t={}){const{canvas:e=nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Ne;let P=0,R=0,F=null,E=-1,M=null;const w=new de,V=new de;let k=null;const K=new kt(0);let q=0,W=e.width,j=e.height,H=1,st=null,ft=null;const vt=new de(0,0,W,j),Rt=new de(0,0,W,j);let ne=!1;const Y=new Vo;let et=!1,_t=!1;const ot=new le,Tt=new le,Jt=new N,Pt=new de,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Xt(){return F===null?H:1}let C=n;function qe(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const D="webgl2";if(C=qe(D,v),C===null)throw qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let $t,Yt,Et,ae,Mt,T,x,O,$,J,X,xt,lt,At,wt,Q,pt,Ct,Lt,mt,qt,Ot,re,L;function ct(){$t=new Bp(C),$t.init(),Ot=new M0(C,$t),Yt=new Ip(C,$t,t,Ot),Et=new x0(C,$t),Yt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),ae=new Hp(C),Mt=new r0,T=new v0(C,$t,Et,Mt,Yt,Ot,ae),x=new Dp(S),O=new Op(S),$=new Yh(C),re=new Cp(C,$),J=new zp(C,$,ae,re),X=new Vp(C,J,$,ae),Lt=new Gp(C,Yt,T),Q=new Lp(Mt),xt=new s0(S,x,O,$t,Yt,re,Q),lt=new A0(S,Mt),At=new o0,wt=new d0($t),Ct=new wp(S,x,O,Et,X,d,l),pt=new g0(S,X,Yt),L=new R0(C,ae,Yt,Et),mt=new Pp(C,$t,ae),qt=new kp(C,$t,ae),ae.programs=xt.programs,S.capabilities=Yt,S.extensions=$t,S.properties=Mt,S.renderLists=At,S.shadowMap=pt,S.state=Et,S.info=ae}ct();const G=new b0(S,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=$t.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$t.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,j,!1))},this.getSize=function(v){return v.set(W,j)},this.setSize=function(v,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,j=D,e.width=Math.floor(v*H),e.height=Math.floor(D*H),B===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(v,D,B){W=v,j=D,H=B,e.width=Math.floor(v*B),e.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,D,B,z){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,D,B,z),Et.viewport(w.copy(vt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Rt)},this.setScissor=function(v,D,B,z){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,D,B,z),Et.scissor(V.copy(Rt).multiplyScalar(H).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(v){Et.setScissorTest(ne=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ft=v},this.getClearColor=function(v){return v.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let z=0;if(v){let U=!1;if(F!==null){const tt=F.texture.format;U=tt===Oo||tt===Fo||tt===No}if(U){const tt=F.texture.type,at=tt===vn||tt===Si||tt===Ms||tt===Ss||tt===Do||tt===Uo,dt=Ct.getClearColor(),gt=Ct.getClearAlpha(),Dt=dt.r,It=dt.g,yt=dt.b;at?(g[0]=Dt,g[1]=It,g[2]=yt,g[3]=gt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Dt,_[1]=It,_[2]=yt,_[3]=gt,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}D&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ct.dispose(),At.dispose(),wt.dispose(),Mt.dispose(),x.dispose(),O.dispose(),X.dispose(),re.dispose(),L.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Zo),G.removeEventListener("sessionend",jo),si.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=ae.autoReset,D=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,U=pt.type;ct(),ae.autoReset=v,pt.enabled=D,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=U}function ut(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nt(v){const D=v.target;D.removeEventListener("dispose",Nt),he(D)}function he(v){Re(v),Mt.remove(v)}function Re(v){const D=Mt.get(v).programs;D!==void 0&&(D.forEach(function(B){xt.releaseProgram(B)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,z,U,tt){D===null&&(D=pe);const at=U.isMesh&&U.matrixWorld.determinant()<0,dt=lu(v,D,B,z,U);Et.setMaterial(z,at);let gt=B.index,Dt=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(B),gt===void 0)return;Dt=2}const It=B.drawRange,yt=B.attributes.position;let Kt=It.start*Dt,Qt=(It.start+It.count)*Dt;tt!==null&&(Kt=Math.max(Kt,tt.start*Dt),Qt=Math.min(Qt,(tt.start+tt.count)*Dt)),gt!==null?(Kt=Math.max(Kt,0),Qt=Math.min(Qt,gt.count)):yt!=null&&(Kt=Math.max(Kt,0),Qt=Math.min(Qt,yt.count));const ge=Qt-Kt;if(ge<0||ge===1/0)return;re.setup(U,z,dt,B,gt);let fe,Zt=mt;if(gt!==null&&(fe=$.get(gt),Zt=qt,Zt.setIndex(fe)),U.isMesh)z.wireframe===!0?(Et.setLineWidth(z.wireframeLinewidth*Xt()),Zt.setMode(C.LINES)):Zt.setMode(C.TRIANGLES);else if(U.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),Et.setLineWidth(bt*Xt()),U.isLineSegments?Zt.setMode(C.LINES):U.isLineLoop?Zt.setMode(C.LINE_LOOP):Zt.setMode(C.LINE_STRIP)}else U.isPoints?Zt.setMode(C.POINTS):U.isSprite&&Zt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Te=U._multiDrawCounts,te=U._multiDrawCount,sn=gt?$.get(gt).bytesPerElement:1,bi=Mt.get(z).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)bi.setValue(C,"_gl_DrawID",ke),Zt.render(bt[ke]/sn,Te[ke])}else if(U.isInstancedMesh)Zt.renderInstances(Kt,ge,U.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Te=Math.min(B.instanceCount,bt);Zt.renderInstances(Kt,ge,Te)}else Zt.render(Kt,ge)};function ee(v,D,B){v.transparent===!0&&v.side===Qe&&v.forceSinglePass===!1?(v.side=ze,v.needsUpdate=!0,Ps(v,D,B),v.side=ni,v.needsUpdate=!0,Ps(v,D,B),v.side=Qe):Ps(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),p=wt.get(B),p.init(D),b.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let at=0;at<tt.length;at++){const dt=tt[at];ee(dt,B,U),z.add(dt)}else ee(tt,B,U),z.add(tt)}),p=b.pop(),z},this.compileAsync=function(v,D,B=null){const z=this.compile(v,D,B);return new Promise(U=>{function tt(){if(z.forEach(function(at){Mt.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){U(v);return}setTimeout(tt,10)}$t.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let nn=null;function Sn(v){nn&&nn(v)}function Zo(){si.stop()}function jo(){si.start()}const si=new Gc;si.setAnimationLoop(Sn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(v){nn=v,G.setAnimationLoop(v),v===null?si.stop():si.start()},G.addEventListener("sessionstart",Zo),G.addEventListener("sessionend",jo),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,F),p=wt.get(v,b.length),p.init(D),b.push(p),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,et=Q.init(this.clippingPlanes,_t),m=At.get(v,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Wr(tt,D,-1/0,S.sortObjects)}Wr(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ft),ue=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ue&&Ct.addToRenderList(m,v),this.info.render.frame++,et===!0&&Q.beginShadows();const B=p.state.shadowsArray;pt.render(B,v,D),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(U.length>0)for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];Qo(z,U,v,gt)}ue&&Ct.render(v);for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];Jo(m,v,gt,gt.viewport)}}else U.length>0&&Qo(z,U,v,D),ue&&Ct.render(v),Jo(m,v,D);F!==null&&R===0&&(T.updateMultisampleRenderTarget(F),T.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,D),re.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&Q.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wr(v,D,B,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){z&&Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Tt);const at=X.update(v),dt=v.material;dt.visible&&m.push(v,at,dt,B,Pt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){const at=X.update(v),dt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pt.copy(v.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Pt.copy(at.boundingSphere.center)),Pt.applyMatrix4(v.matrixWorld).applyMatrix4(Tt)),Array.isArray(dt)){const gt=at.groups;for(let Dt=0,It=gt.length;Dt<It;Dt++){const yt=gt[Dt],Kt=dt[yt.materialIndex];Kt&&Kt.visible&&m.push(v,at,Kt,B,Pt.z,yt)}}else dt.visible&&m.push(v,at,dt,B,Pt.z,null)}}const tt=v.children;for(let at=0,dt=tt.length;at<dt;at++)Wr(tt[at],D,B,z)}function Jo(v,D,B,z){const U=v.opaque,tt=v.transmissive,at=v.transparent;p.setupLightsView(B),et===!0&&Q.setGlobalState(S.clippingPlanes,B),z&&Et.viewport(w.copy(z)),U.length>0&&Cs(U,D,B),tt.length>0&&Cs(tt,D,B),at.length>0&&Cs(at,D,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Qo(v,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?As:vn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[z.id],at=z.viewport||w;tt.setSize(at.z*S.transmissionResolutionScale,at.w*S.transmissionResolutionScale);const dt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(K),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),ue&&Ct.render(B);const gt=S.toneMapping;S.toneMapping=Qn;const Dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),et===!0&&Q.setGlobalState(S.clippingPlanes,z),Cs(v,B,z),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let yt=0,Kt=D.length;yt<Kt;yt++){const Qt=D[yt],ge=Qt.object,fe=Qt.geometry,Zt=Qt.material,bt=Qt.group;if(Zt.side===Qe&&ge.layers.test(z.layers)){const Te=Zt.side;Zt.side=ze,Zt.needsUpdate=!0,tl(ge,B,z,fe,Zt,bt),Zt.side=Te,Zt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}S.setRenderTarget(dt),S.setClearColor(K,q),Dt!==void 0&&(z.viewport=Dt),S.toneMapping=gt}function Cs(v,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,tt=v.length;U<tt;U++){const at=v[U],dt=at.object,gt=at.geometry,Dt=at.group;let It=at.material;It.allowOverride===!0&&z!==null&&(It=z),dt.layers.test(B.layers)&&tl(dt,D,B,gt,It,Dt)}}function tl(v,D,B,z,U,tt){v.onBeforeRender(S,D,B,z,U,tt),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,D,B,z,v,tt),U.transparent===!0&&U.side===Qe&&U.forceSinglePass===!1?(U.side=ze,U.needsUpdate=!0,S.renderBufferDirect(B,D,z,U,v,tt),U.side=ni,U.needsUpdate=!0,S.renderBufferDirect(B,D,z,U,v,tt),U.side=Qe):S.renderBufferDirect(B,D,z,U,v,tt),v.onAfterRender(S,D,B,z,U,tt)}function Ps(v,D,B){D.isScene!==!0&&(D=pe);const z=Mt.get(v),U=p.state.lights,tt=p.state.shadowsArray,at=U.state.version,dt=xt.getParameters(v,U.state,tt,D,B),gt=xt.getProgramCacheKey(dt);let Dt=z.programs;z.environment=v.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(v.isMeshStandardMaterial?O:x).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",Nt),Dt=new Map,z.programs=Dt);let It=Dt.get(gt);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===at)return nl(v,dt),It}else dt.uniforms=xt.getUniforms(v),v.onBeforeCompile(dt,S),It=xt.acquireProgram(dt,gt),Dt.set(gt,It),z.uniforms=dt.uniforms;const yt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=Q.uniform),nl(v,dt),z.needsLights=uu(v),z.lightsStateVersion=at,z.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function el(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Sr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function nl(v,D){const B=Mt.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function lu(v,D,B,z,U){D.isScene!==!0&&(D=pe),T.resetTextureUnits();const tt=D.fog,at=z.isMeshStandardMaterial?D.environment:null,dt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ji,gt=(z.isMeshStandardMaterial?O:x).get(z.envMap||at),Dt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,It=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,Qt=!!B.morphAttributes.color;let ge=Qn;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ge=S.toneMapping);const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=fe!==void 0?fe.length:0,bt=Mt.get(z),Te=p.state.lights;if(et===!0&&(_t===!0||v!==M)){const Le=v===M&&z.id===E;Q.setState(z,v,Le)}let te=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Te.state.version||bt.outputColorSpace!==dt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==gt||z.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==It||bt.morphTargets!==yt||bt.morphNormals!==Kt||bt.morphColors!==Qt||bt.toneMapping!==ge||bt.morphTargetsCount!==Zt)&&(te=!0):(te=!0,bt.__version=z.version);let sn=bt.currentProgram;te===!0&&(sn=Ps(z,D,U));let bi=!1,ke=!1,is=!1;const ce=sn.getUniforms(),$e=bt.uniforms;if(Et.useProgram(sn.program)&&(bi=!0,ke=!0,is=!0),z.id!==E&&(E=z.id,ke=!0),bi||M!==v){Et.buffers.depth.getReversed()?(ot.copy(v.projectionMatrix),sh(ot),rh(ot),ce.setValue(C,"projectionMatrix",ot)):ce.setValue(C,"projectionMatrix",v.projectionMatrix),ce.setValue(C,"viewMatrix",v.matrixWorldInverse);const Oe=ce.map.cameraPosition;Oe!==void 0&&Oe.setValue(C,Jt.setFromMatrixPosition(v.matrixWorld)),Yt.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,ke=!0,is=!0)}if(U.isSkinnedMesh){ce.setOptional(C,U,"bindMatrix"),ce.setOptional(C,U,"bindMatrixInverse");const Le=U.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ce.setValue(C,"boneTexture",Le.boneTexture,T))}U.isBatchedMesh&&(ce.setOptional(C,U,"batchingTexture"),ce.setValue(C,"batchingTexture",U._matricesTexture,T),ce.setOptional(C,U,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",U._indirectTexture,T),ce.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",U._colorsTexture,T));const Ke=B.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&Lt.update(U,B,sn),(ke||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ce.setValue(C,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($e.envMap.value=gt,$e.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&($e.envMapIntensity.value=D.environmentIntensity),ke&&(ce.setValue(C,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&cu($e,is),tt&&z.fog===!0&&lt.refreshFogUniforms($e,tt),lt.refreshMaterialUniforms($e,z,H,j,p.state.transmissionRenderTarget[v.id]),Sr.upload(C,el(bt),$e,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Sr.upload(C,el(bt),$e,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(C,"center",U.center),ce.setValue(C,"modelViewMatrix",U.modelViewMatrix),ce.setValue(C,"normalMatrix",U.normalMatrix),ce.setValue(C,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Le=z.uniformsGroups;for(let Oe=0,Xr=Le.length;Oe<Xr;Oe++){const ri=Le[Oe];L.update(ri,sn),L.bind(ri,sn)}}return sn}function cu(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function uu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,D,B){const z=Mt.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Mt.get(v.texture).__webglTexture=D,Mt.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const B=Mt.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const hu=C.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){F=v,P=D,R=B;let z=!0,U=null,tt=!1,at=!1;if(v){const gt=Mt.get(v);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(gt.__hasExternalTextures)T.rebindTextures(v,Mt.get(v.texture).__webglTexture,Mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const yt=v.depthTexture;if(gt.__boundDepthTexture!==yt){if(yt!==null&&Mt.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}const Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(at=!0);const It=Mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[D])?U=It[D][B]:U=It[D],tt=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?U=Mt.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[B]:U=It,w.copy(v.viewport),V.copy(v.scissor),k=v.scissorTest}else w.copy(vt).multiplyScalar(H).floor(),V.copy(Rt).multiplyScalar(H).floor(),k=ne;if(B!==0&&(U=hu),Et.bindFramebuffer(C.FRAMEBUFFER,U)&&z&&Et.drawBuffers(v,U),Et.viewport(w),Et.scissor(V),Et.setScissorTest(k),tt){const gt=Mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,B)}else if(at){const gt=Mt.get(v.texture),Dt=D;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.__webglTexture,B,Dt)}else if(v!==null&&B!==0){const gt=Mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gt.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(v,D,B,z,U,tt,at){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt){Et.bindFramebuffer(C.FRAMEBUFFER,dt);try{const gt=v.texture,Dt=gt.format,It=gt.type;if(!Yt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&B>=0&&B<=v.height-U&&C.readPixels(D,B,z,U,Ot.convert(Dt),Ot.convert(It),tt)}finally{const gt=F!==null?Mt.get(F).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,z,U,tt,at){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt)if(D>=0&&D<=v.width-z&&B>=0&&B<=v.height-U){Et.bindFramebuffer(C.FRAMEBUFFER,dt);const gt=v.texture,Dt=gt.format,It=gt.type;if(!Yt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),C.readPixels(D,B,z,U,Ot.convert(Dt),Ot.convert(It),0);const Kt=F!==null?Mt.get(F).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,Kt);const Qt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ih(C,Qt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(yt),C.deleteSync(Qt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,B=0){const z=Math.pow(2,-B),U=Math.floor(v.image.width*z),tt=Math.floor(v.image.height*z),at=D!==null?D.x:0,dt=D!==null?D.y:0;T.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,at,dt,U,tt),Et.unbindTexture()};const fu=C.createFramebuffer(),du=C.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,z=null,U=0,tt=null){tt===null&&(U!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=U,U=0):tt=0);let at,dt,gt,Dt,It,yt,Kt,Qt,ge;const fe=v.isCompressedTexture?v.mipmaps[tt]:v.image;if(B!==null)at=B.max.x-B.min.x,dt=B.max.y-B.min.y,gt=B.isBox3?B.max.z-B.min.z:1,Dt=B.min.x,It=B.min.y,yt=B.isBox3?B.min.z:0;else{const Ke=Math.pow(2,-U);at=Math.floor(fe.width*Ke),dt=Math.floor(fe.height*Ke),v.isDataArrayTexture?gt=fe.depth:v.isData3DTexture?gt=Math.floor(fe.depth*Ke):gt=1,Dt=0,It=0,yt=0}z!==null?(Kt=z.x,Qt=z.y,ge=z.z):(Kt=0,Qt=0,ge=0);const Zt=Ot.convert(D.format),bt=Ot.convert(D.type);let Te;D.isData3DTexture?(T.setTexture3D(D,0),Te=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Te=C.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Te=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const te=C.getParameter(C.UNPACK_ROW_LENGTH),sn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),bi=C.getParameter(C.UNPACK_SKIP_PIXELS),ke=C.getParameter(C.UNPACK_SKIP_ROWS),is=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),C.pixelStorei(C.UNPACK_SKIP_IMAGES,yt);const ce=v.isDataArrayTexture||v.isData3DTexture,$e=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Ke=Mt.get(v),Le=Mt.get(D),Oe=Mt.get(Ke.__renderTarget),Xr=Mt.get(Le.__renderTarget);Et.bindFramebuffer(C.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let ri=0;ri<gt;ri++)ce&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(v).__webglTexture,U,yt+ri),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,tt,ge+ri)),C.blitFramebuffer(Dt,It,at,dt,Kt,Qt,at,dt,C.DEPTH_BUFFER_BIT,C.NEAREST);Et.bindFramebuffer(C.READ_FRAMEBUFFER,null),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Mt.has(v)){const Ke=Mt.get(v),Le=Mt.get(D);Et.bindFramebuffer(C.READ_FRAMEBUFFER,fu),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,du);for(let Oe=0;Oe<gt;Oe++)ce?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ke.__webglTexture,U,yt+Oe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ke.__webglTexture,U),$e?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Le.__webglTexture,tt,ge+Oe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Le.__webglTexture,tt),U!==0?C.blitFramebuffer(Dt,It,at,dt,Kt,Qt,at,dt,C.COLOR_BUFFER_BIT,C.NEAREST):$e?C.copyTexSubImage3D(Te,tt,Kt,Qt,ge+Oe,Dt,It,at,dt):C.copyTexSubImage2D(Te,tt,Kt,Qt,Dt,It,at,dt);Et.bindFramebuffer(C.READ_FRAMEBUFFER,null),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $e?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Te,tt,Kt,Qt,ge,at,dt,gt,Zt,bt,fe.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,tt,Kt,Qt,ge,at,dt,gt,Zt,fe.data):C.texSubImage3D(Te,tt,Kt,Qt,ge,at,dt,gt,Zt,bt,fe):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,Kt,Qt,at,dt,Zt,bt,fe.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,Kt,Qt,fe.width,fe.height,Zt,fe.data):C.texSubImage2D(C.TEXTURE_2D,tt,Kt,Qt,at,dt,Zt,bt,fe);C.pixelStorei(C.UNPACK_ROW_LENGTH,te),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,sn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bi),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,is),tt===0&&D.generateMipmaps&&C.generateMipmap(Te),Et.unbindTexture()},this.copyTextureToTexture3D=function(v,D,B=null,z=null,U=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,B,z,U)},this.initRenderTarget=function(v){Mt.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),Et.unbindTexture()},this.resetState=function(){P=0,R=0,F=null,Et.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const A={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,WATER:7,BEDROCK:8,SNOW:9,CACTUS:10,FLOWER_RED:11,FLOWER_YELLOW:12,VINE:13,GRAVEL:14,MOSS:15,CASTLE_BRICK:16,APPLE:17,WEAPON_BANDIT_BLADE:18,WEAPON_RAIDER_SABER:19,WEAPON_SCORP_BOW:20,WEAPON_JAGUAR_CLAWS:21,WEAPON_WRAITH_HAMMER:22,WEAPON_YETI_AXE:23},Xn={PX:0,NX:1,PY:2,NY:3,PZ:4,NZ:5},fn={[A.AIR]:{name:"Air",solid:!1,transparent:!0},[A.GRASS]:{name:"Grass",solid:!0,transparent:!1,textures:{top:"grass_top",side:"grass_side",bottom:"dirt"}},[A.DIRT]:{name:"Dirt",solid:!0,transparent:!1,textures:{all:"dirt"}},[A.STONE]:{name:"Stone",solid:!0,transparent:!1,textures:{all:"stone"}},[A.SAND]:{name:"Sand",solid:!0,transparent:!1,textures:{all:"sand"}},[A.LOG]:{name:"Log",solid:!0,transparent:!1,textures:{top:"log_top",side:"log_side",bottom:"log_top"}},[A.LEAVES]:{name:"Leaves",solid:!0,transparent:!0,textures:{all:"leaves"}},[A.WATER]:{name:"Water",solid:!1,transparent:!0,textures:{all:"water"}},[A.BEDROCK]:{name:"Bedrock",solid:!0,transparent:!1,textures:{all:"bedrock"}},[A.SNOW]:{name:"Snow",solid:!0,transparent:!1,textures:{all:"snow"}},[A.CACTUS]:{name:"Cactus",solid:!0,transparent:!1,textures:{top:"cactus_top",side:"cactus_side",bottom:"cactus_top"}},[A.FLOWER_RED]:{name:"Red Flower",solid:!1,transparent:!0,textures:{all:"flower_red"}},[A.FLOWER_YELLOW]:{name:"Yellow Flower",solid:!1,transparent:!0,textures:{all:"flower_yellow"}},[A.VINE]:{name:"Vine",solid:!1,transparent:!0,textures:{all:"vine"}},[A.GRAVEL]:{name:"Gravel",solid:!0,transparent:!1,textures:{all:"gravel"}},[A.MOSS]:{name:"Moss",solid:!0,transparent:!1,textures:{all:"moss"}},[A.CASTLE_BRICK]:{name:"Castle Brick",solid:!0,transparent:!1,textures:{all:"castle_brick"}},[A.APPLE]:{name:"Apple",solid:!1,transparent:!0,textures:{all:"apple"}},[A.WEAPON_BANDIT_BLADE]:{name:"Bandit Blade",solid:!1,transparent:!0,textures:{all:"stone"}},[A.WEAPON_RAIDER_SABER]:{name:"Raider Saber",solid:!1,transparent:!0,textures:{all:"stone"}},[A.WEAPON_SCORP_BOW]:{name:"Scorpion Bow",solid:!1,transparent:!0,textures:{all:"stone"}},[A.WEAPON_JAGUAR_CLAWS]:{name:"Jaguar Claws",solid:!1,transparent:!0,textures:{all:"stone"}},[A.WEAPON_WRAITH_HAMMER]:{name:"Wraith Hammer",solid:!1,transparent:!0,textures:{all:"stone"}},[A.WEAPON_YETI_AXE]:{name:"Yeti Axe",solid:!1,transparent:!0,textures:{all:"stone"}}};function Ao(i){return fn[i]?.solid??!1}function C0(i){return fn[i]?.transparent??!0}function qc(i){return i!==A.AIR&&i!==A.BEDROCK}function P0(i){switch(i){case A.FLOWER_RED:case A.FLOWER_YELLOW:case A.VINE:return .12;case A.LEAVES:case A.APPLE:return .2;case A.WATER:return .25;case A.DIRT:case A.GRASS:case A.SAND:case A.SNOW:case A.MOSS:return .5;case A.LOG:case A.CACTUS:return .8;case A.STONE:case A.GRAVEL:return 1.35;case A.CASTLE_BRICK:return 1.75;default:return .6}}const nt=16,me=128,_i=4,oc=24,I0=6,fs=.6,ar=1.8,L0=1.62,D0=5.2,U0=2.6,N0=100,F0=8.8,O0=26,B0=-55,z0=280,or=600;function St(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=n^n>>>16|0,(n>>>0)/4294967295}function Gn(i,t,e,n){let s=(i|0)*374761393+(t|0)*668265263+(e|0)*2246822519+(n|0)*1442695041;return s=s^s>>>13|0,s=Math.imul(s,1274126177),s=s^s>>>16|0,(s>>>0)/4294967295}function xs(i){return i*i*(3-2*i)}function mn(i,t,e){return i+(t-i)*e}function ye(i,t){return Math.floor(i/t)}function lr(i,t){return(i%t+t)%t}const pi=4,k0=[{face:Xn.PX,normal:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],n:[1,0,0]},{face:Xn.NX,normal:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],n:[-1,0,0]},{face:Xn.PY,normal:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],n:[0,1,0]},{face:Xn.NY,normal:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],n:[0,-1,0]},{face:Xn.PZ,normal:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],n:[0,0,1]},{face:Xn.NZ,normal:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],n:[0,0,-1]}];function H0(i,t){const e=fn[i],n=fn[t];return e.transparent?t===0?!0:n.transparent?t!==i:!1:t===0||n.transparent}function lc(){return{positions:[],normals:[],uvs:[],colors:[],indices:[],count:0}}function G0(i){return!(i===A.AIR||i===A.WATER||i===A.VINE)}function V0(i,t,e){const n=pi+1,s=nt+n*2,r=new Int16Array(s*s);for(let a=-n;a<nt+n;a++)for(let o=-n;o<nt+n;o++){const l=t+o,c=e+a;let u=-1;for(let h=me-1;h>=0;h--){const f=i.getBlock(l,h,c);if(G0(f)){u=h;break}}r[(a+n)*s+(o+n)]=u}return{top:r,stride:s,margin:n}}function W0(i){return i.normal[1]>0?1:i.normal[1]<0?.62:i.normal[0]!==0?.86:.9}function X0(i,t,e,n,s){const r=i+(n.normal[0]>0?1:n.normal[0]<0?-1:0),a=e+(n.normal[2]>0?1:n.normal[2]<0?-1:0),o=s.top[(a+s.margin)*s.stride+(r+s.margin)],l=t+(n.normal[1]>0?1:0),c=Math.max(0,o-l);let u=Math.exp(-c*.1);u=Math.max(.05,Math.min(1,u));let h=0,f=0;for(let _=-pi;_<=pi;_++)for(let m=-pi;m<=pi;m++){const p=m*m+_*_;if(p>pi*pi)continue;const y=1/(1+p*.38),b=s.top[(a+_+s.margin)*s.stride+(r+m+s.margin)];if(b>l){const S=b-l,I=Math.min(1,S/(Math.sqrt(p)+1.2));h+=I*y}f+=y}const d=f>0?1-h/f:1,g=.34+Math.max(0,Math.min(1,d))*.66;return u*g*W0(n)}function Y0(i,t,e,n,s,r,a){const[o,l,c,u]=r,h=[[o,l],[o,u],[c,u],[c,l]];for(let d=0;d<4;d++){const g=s.verts[d];i.positions.push(t+g[0],e+g[1],n+g[2]),i.normals.push(s.n[0],s.n[1],s.n[2]),i.uvs.push(h[d][0],h[d][1]),i.colors.push(a,a,a)}const f=i.count;i.indices.push(f,f+1,f+2,f,f+2,f+3),i.count+=4}function cc(i){if(i.indices.length===0)return null;const t=new Ye;return t.setAttribute("position",new xe(i.positions,3)),t.setAttribute("normal",new xe(i.normals,3)),t.setAttribute("uv",new xe(i.uvs,2)),t.setAttribute("color",new xe(i.colors,3)),t.setIndex(i.indices),t.computeBoundingSphere(),t}function q0(i,t,e,n){const s=lc(),r=lc(),a=t*nt,o=e*nt,l=V0(i,a,o);for(let c=0;c<nt;c++)for(let u=0;u<nt;u++){const h=a+c,f=o+u;for(let d=0;d<me;d++){const g=i.getBlock(h,d,f);if(g===0)continue;const _=fn[g].transparent?r:s;for(const m of k0){const p=h+m.normal[0],y=d+m.normal[1],b=f+m.normal[2],S=i.getBlock(p,y,b);if(!H0(g,S))continue;const I=X0(c,d,u,m,l);Y0(_,h,d,f,m,n(g,m.face),I)}}}return{opaque:cc(s),transparent:cc(r)}}function $c(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=St(n,s,e),l=St(n+1,s,e),c=St(n,s+1,e),u=St(n+1,s+1,e),h=xs(r),f=xs(a),d=mn(o,l,h),g=mn(c,u,h);return mn(d,g,f)}function Ee(i,t,e,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=$c(i*a,t*a,e+u*7919)*o,c+=o,o*=r,a*=s;return l/c}function $0(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=Math.floor(e),o=i-s,l=t-r,c=e-a,u=Gn(s,r,a,n),h=Gn(s+1,r,a,n),f=Gn(s,r+1,a,n),d=Gn(s+1,r+1,a,n),g=Gn(s,r,a+1,n),_=Gn(s+1,r,a+1,n),m=Gn(s,r+1,a+1,n),p=Gn(s+1,r+1,a+1,n),y=xs(o),b=xs(l),S=xs(c),I=mn(u,h,y),P=mn(f,d,y),R=mn(g,_,y),F=mn(m,p,y),E=mn(I,P,b),M=mn(R,F,b);return mn(E,M,S)}function Ta(i,t,e,n,s=4,r=2,a=.5){let o=1,l=1,c=0,u=0;for(let h=0;h<s;h++)c+=$0(i*o,t*o,e*o,n+h*7919)*l,u+=l,l*=a,o*=r;return c/u}const Vt={DESERT:0,FOREST:1,JUNGLE:2,MOUNTAIN:3,PLAINS:4,TUNDRA:5},K0={[Vt.DESERT]:"Desert",[Vt.FOREST]:"Forest",[Vt.JUNGLE]:"Jungle",[Vt.MOUNTAIN]:"Mountain",[Vt.PLAINS]:"Plains",[Vt.TUNDRA]:"Tundra"},Er={[Vt.DESERT]:{temp:.92,moisture:.14,surface:A.SAND,subsurface:A.SAND,height:(i,t,e)=>{const n=Ee(i*.0044,t*.0044,e+101,3,2,.5),s=Ee(i*.017,t*.017,e+102,4,2,.52);return 19+n*7+s*8}},[Vt.FOREST]:{temp:.56,moisture:.62,surface:A.GRASS,subsurface:A.DIRT,height:(i,t,e)=>{const n=Ee(i*.007,t*.007,e+111,4,2,.52),s=Ee(i*.022,t*.022,e+112,3,2,.5);return 28+n*13+s*5}},[Vt.JUNGLE]:{temp:.82,moisture:.9,surface:A.GRASS,subsurface:A.DIRT,height:(i,t,e)=>{const n=Ee(i*.0062,t*.0062,e+121,4,2,.54),s=Ee(i*.014,t*.014,e+122,4,2,.5);return 26+n*10+s*8}},[Vt.MOUNTAIN]:{temp:.31,moisture:.33,surface:A.STONE,subsurface:A.STONE,height:(i,t,e)=>{const n=Ee(i*.0042,t*.0042,e+131,5,2,.55),s=Ee(i*.0026,t*.0026,e+132,4,2,.5),r=Ee(i*.016,t*.016,e+133,3,2,.5);return 34+s*s*70+n*24+r*6}},[Vt.PLAINS]:{temp:.6,moisture:.46,surface:A.GRASS,subsurface:A.DIRT,height:(i,t,e)=>{const n=Ee(i*.0052,t*.0052,e+141,3,2,.5),s=Ee(i*.019,t*.019,e+142,3,2,.5);return 24+n*6+s*3}},[Vt.TUNDRA]:{temp:.17,moisture:.56,surface:A.SNOW,subsurface:A.DIRT,height:(i,t,e)=>{const n=Ee(i*.0047,t*.0047,e+151,4,2,.52),s=Ee(i*.013,t*.013,e+152,3,2,.5);return 30+n*11+s*4}}},Z0=Object.values(Vt);function uc(i){return i*i}function Kc(i,t,e){const n=Ee(t*.0017,e*.0017,i.seed+501,4,2,.5),s=Ee(t*.0018,e*.0018,i.seed+601,4,2,.5);return{temperature:n,moisture:s}}function Zc(i,t,e){const n=Kc(i,t,e);let s=0,r=Vt.FOREST,a=-1;const o=[];for(const l of Z0){const c=Er[l],u=uc(n.temperature-c.temp)+uc(n.moisture-c.moisture),h=Math.exp(-u*12.5);o.push([l,h]),s+=h,h>a&&(a=h,r=l)}return{dominant:r,weights:o,total:s}}function j0(i,t,e){const n=Zc(i,t,e);let s=0;for(const[c,u]of n.weights){const h=u/n.total;s+=Er[c].height(t,e,i.seed)*h}const r=Math.max(3,Math.min(me-2,Math.floor(s))),a=n.dominant;let o=Er[a].surface;const l=Er[a].subsurface;return a===Vt.MOUNTAIN&&r>80&&(o=A.SNOW),{height:r,dominantBiome:a,surface:o,subsurface:l}}const J0=14,Kn=nt*J0,Q0=.045;class tg{constructor(t){this.state=t|0,this.state===0&&(this.state=1)}next(){return this.state=Math.imul(this.state,1664525)+1013904223|0,(this.state>>>0)/4294967295}range(t,e){return t+Math.floor(this.next()*(e-t))}}function eg(i,t,e){const n=`${t},${e}`;if(i.castleCache.has(n))return i.castleCache.get(n);if(St(t,e,i.seed+42031)>Q0)return i.castleCache.set(n,null),null;const r=t*73856093^e*19349663^i.seed*83492791^2654435769|0,a=new tg(r),o=34,l=t*Kn+a.range(o,Kn-o),c=e*Kn+a.range(o,Kn-o),u=Math.min(me-24,1+Math.max(i.getSurfaceYAt(l,c),i.getSurfaceYAt(l+8,c),i.getSurfaceYAt(l,c+8),i.getSurfaceYAt(l+8,c+8))),h=a.range(13,18),f=a.range(13,18),d={x:l-Math.floor(h*.5),z:c-Math.floor(f*.5),w:h,d:f,h:a.range(7,11),kind:"keep"},g=[d],_=[],m=a.range(8,15);for(let E=0;E<m;E++){const M=g[a.range(0,g.length)],w=a.range(0,4),V=a.next()<.55,k=M.x+2+a.range(0,Math.max(1,M.w-4)),K=M.z+2+a.range(0,Math.max(1,M.d-4));let q,W;if(V){const Rt=a.range(6,13);w===0||w===2?(q=3,W=Rt):(q=Rt,W=3)}else q=a.range(7,13),W=a.range(7,13);let j=0,H=0;w===0?(j=k-Math.floor(q*.5),H=M.z-W):w===1?(j=M.x+M.w,H=K-Math.floor(W*.5)):w===2?(j=k-Math.floor(q*.5),H=M.z+M.d):(j=M.x-q,H=K-Math.floor(W*.5));let st=!1;for(const Rt of g)if(j<Rt.x+Rt.w&&j+q>Rt.x&&H<Rt.z+Rt.d&&H+W>Rt.z){st=!0;break}if(st)continue;const ft=V?a.range(5,7):a.range(6,10),vt={x:j,z:H,w:q,d:W,h:ft,kind:V?"corridor":"room"};g.push(vt),w===0&&_.push({side:w,x:k,z:M.z}),w===1&&_.push({side:w,x:M.x+M.w-1,z:K}),w===2&&_.push({side:w,x:k,z:M.z+M.d-1}),w===3&&_.push({side:w,x:M.x,z:K})}const p=[],y=2,b=a.range(9,14);p.push({x:d.x-y,z:d.z-y,r:y,h:b}),p.push({x:d.x+d.w-1+y,z:d.z-y,r:y,h:b}),p.push({x:d.x-y,z:d.z+d.d-1+y,r:y,h:b}),p.push({x:d.x+d.w-1+y,z:d.z+d.d-1+y,r:y,h:b});let S=1/0,I=-1/0,P=1/0,R=-1/0;for(const E of g)S=Math.min(S,E.x),I=Math.max(I,E.x+E.w-1),P=Math.min(P,E.z),R=Math.max(R,E.z+E.d-1);for(const E of p)S=Math.min(S,E.x-E.r),I=Math.max(I,E.x+E.r),P=Math.min(P,E.z-E.r),R=Math.max(R,E.z+E.r);const F={baseY:u,pieces:g,towers:p,connections:_,minX:S,maxX:I,minZ:P,maxZ:R};return i.castleCache.set(n,F),F}function ng(i,t,e,n,s,r){const a=s,o=s+nt-1,l=r,c=r+nt-1,u=220,h=ye(a-u,Kn),f=ye(o+u,Kn),d=ye(l-u,Kn),g=ye(c+u,Kn);for(let _=d;_<=g;_++)for(let m=h;m<=f;m++){const p=eg(i,m,_);!p||!(p.minX<=o&&p.maxX>=a&&p.minZ<=c&&p.maxZ>=l)||ig(i,t,e,n,p)}}function ig(i,t,e,n,s){for(const r of s.pieces)sg(i,t,e,n,s.baseY,r);for(const r of s.towers)rg(i,t,e,n,s.baseY,r);for(const r of s.connections)ag(i,t,e,n,s.baseY,r)}function sg(i,t,e,n,s,r){const a=Math.min(me-3,s+r.h);for(let o=r.z;o<r.z+r.d;o++)for(let l=r.x;l<r.x+r.w;l++){i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,A.CASTLE_BRICK);for(let c=s+1;c<=a;c++)l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,A.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o);if(r.kind!=="corridor"){const c=a+1;l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1||(l+o&1)===0?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,A.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o)}}if(r.kind==="room"&&r.w>=9&&r.d>=9){const o=Math.min(me-4,s+r.h-1),l=[[r.x+2,r.z+2],[r.x+r.w-3,r.z+2],[r.x+2,r.z+r.d-3],[r.x+r.w-3,r.z+r.d-3]];for(const[c,u]of l)for(let h=s+1;h<=o;h++)i.setGeneratedBlockIfInChunk(t,e,n,c,h,u,A.CASTLE_BRICK)}}function rg(i,t,e,n,s,r){const a=Math.min(me-3,s+r.h);for(let o=r.z-r.r;o<=r.z+r.r;o++)for(let l=r.x-r.r;l<=r.x+r.r;l++){const c=Math.abs(l-r.x),u=Math.abs(o-r.z);if(Math.max(c,u)>r.r)continue;i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,A.CASTLE_BRICK);for(let f=s+1;f<=a;f++)Math.max(c,u)===r.r?i.setGeneratedBlockIfInChunk(t,e,n,l,f,o,A.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,f,o);const h=a+1;((l+o&1)===0||Math.max(c,u)===r.r)&&i.setGeneratedBlockIfInChunk(t,e,n,l,h,o,A.CASTLE_BRICK)}}function ag(i,t,e,n,s,r){for(let a=s+1;a<=s+4;a++)for(let o=-1;o<=1;o++)r.side===0?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z-1)):r.side===1?(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x+1,a,r.z+o)):r.side===2?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z+1)):(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x-1,a,r.z+o))}const Yi=96,og=.24;function yr(i){return Math.max(0,Math.min(1,i))}function lg(i,t,e,n,s,r){const a=s-e,o=r-n,l=i-e,c=t-n,u=a*a+o*o;if(u<=1e-5){const g=i-e,_=t-n;return{distance:Math.hypot(g,_),t:0}}const h=yr((l*a+c*o)/u),f=e+a*h,d=n+o*h;return{distance:Math.hypot(i-f,t-d),t:h}}function cg(i,t,e){const n=`${t},${e}`;if(i.ravineCache.has(n))return i.ravineCache.get(n);if(St(t,e,i.seed+74111)>og)return i.ravineCache.set(n,null),null;const r=t*Yi+Yi*.5,a=e*Yi+Yi*.5,o=St(t,e,i.seed+74113)*Math.PI*2,c=(70+St(t,e,i.seed+74117)*120)*.5,u=(St(t,e,i.seed+74119)-.5)*30,h=(St(t,e,i.seed+74123)-.5)*30,f=r+u,d=a+h,g={ax:f-Math.cos(o)*c,az:d-Math.sin(o)*c,bx:f+Math.cos(o)*c,bz:d+Math.sin(o)*c,width:3.5+St(t,e,i.seed+74129)*6.5,depth:22+St(t,e,i.seed+74131)*38,slopePow:.45+St(t,e,i.seed+74137)*.25,hasFlatBottom:St(t,e,i.seed+74141)>.22,flatBottomWidth:5+St(t,e,i.seed+74143)*5,flatDepthFactor:.86+St(t,e,i.seed+74147)*.11,topNarrowFactor:.35+St(t,e,i.seed+74153)*.18,bottomExpandFactor:1.18+St(t,e,i.seed+74159)*.22};return i.ravineCache.set(n,g),g}function ug(i,t,e,n,s,r){for(let a=0;a<nt;a++)for(let o=0;o<nt;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=ye(l,Yi),f=ye(c,Yi);let d=me,g=!1;const _=[];for(let y=-2;y<=2;y++)for(let b=-2;b<=2;b++){const S=cg(i,h+b,f+y);if(!S)continue;const{distance:I,t:P}=lg(l+.5,c+.5,S.ax,S.az,S.bx,S.bz),R=S.width*(.7+.3*Math.sin(Math.PI*P));if(I>R*S.bottomExpandFactor)continue;const F=I/R,E=1-F;let M=S.depth*Math.pow(E,S.slopePow);if(S.hasFlatBottom){const V=yr(S.flatBottomWidth*.5/Math.max(.001,R)),k=S.depth*S.flatDepthFactor;if(F<=V)M=k;else{const K=yr((F-V)/(1-V)),q=k*Math.pow(1-K,S.slopePow);M=Math.max(M,q)}}if(M<=.01)continue;g=!0;const w=u-M;w<d&&(d=w),_.push({distance:I,widthAt:R,floor:w,topNarrowFactor:S.topNarrowFactor,bottomExpandFactor:S.bottomExpandFactor})}if(!g)continue;const m=Math.max(4,Math.floor(d)),p=Math.min(me-2,u+2);for(let y=m;y<=p;y++){let b=!1;for(let S=0;S<_.length;S++){const I=_[S];if(y<I.floor)continue;const P=Math.max(1,u-I.floor),R=yr((u-y)/P),F=I.topNarrowFactor+(I.bottomExpandFactor-I.topNarrowFactor)*R;if(I.distance<=I.widthAt*F){b=!0;break}}b&&i.setGeneratedAirIfInChunk(t,e,n,l,y,c)}}}function hg(i,t,e,n,s,r){for(let a=0;a<nt;a++)for(let o=0;o<nt;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Ee(l*.008,c*.008,i.seed+9501,3,2,.5),f=Math.min(u-2,88);if(f<=8)continue;for(let _=6;_<=f;_++){const m=Ta(l*.045,_*.06,c*.045,i.seed+9601,3,2,.5),p=Ta(l*.031+33,_*.045,c*.031+91,i.seed+9609,2,2,.5),y=.71-Math.max(0,h-.52)*.26;(m>y||h>.6&&m>y-.08&&p>.72)&&i.setGeneratedAirIfInChunk(t,e,n,l,_,c)}const d=Ee(l*.011,c*.011,i.seed+9701,3,2,.5),g=St(l,c,i.seed+9702);if(d>.66&&g>.93&&u>14){const _=3+(g*6|0),m=Math.max(5,u-_);for(let y=u;y>=m;y--)i.setGeneratedAirIfInChunk(t,e,n,l,y,c);if(d>.72||h>.58){const y=Math.max(6,u-36);for(let b=m-1;b>=y;b--)Ta(l*.06,b*.05,c*.06,i.seed+9721,2,2,.5)>.46&&(i.setGeneratedAirIfInChunk(t,e,n,l,b,c),St(l+b,c-b,i.seed+9731)>.72&&i.setGeneratedAirIfInChunk(t,e,n,l+1,b,c))}}}}function fg(i,t,e,n,s,r){ug(i,t,e,n,s,r),hg(i,t,e,n,s,r);for(let a=0;a<nt;a++)for(let o=0;o<nt;o++)t[(0*nt+o)*nt+a]!==A.BEDROCK&&(t[(0*nt+o)*nt+a]=A.BEDROCK)}function dg(i,t,e,n,s,r){for(let o=s-6;o<s+nt+6;o++)for(let l=r-6;l<r+nt+6;l++){const c=i.getColumnData(o,l),u=c.height,h=i.getGeneratedBlockFromChunkData(t,e,n,o,u+1,l),f=pg(i,t,e,n,o,u,l),d=St(o,l,i.seed+9001),g=$c(o*.03,l*.03,i.seed+9002);if(c.dominantBiome===Vt.FOREST&&(f&&d>.981&&g>.42&&c.surface===A.GRASS&&cr(i,t,e,n,o,u+1,l,4+(d*4|0),2,!1),f&&d>.973&&d<=.981&&g>.46&&c.surface===A.GRASS&&mg(i,t,e,n,o,u+1,l,5+(d*3|0)),f&&h===A.AIR&&c.surface===A.GRASS&&d>.93&&d<.948&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.FLOWER_RED),f&&h===A.AIR&&c.surface===A.GRASS&&d>.948&&d<.965&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.FLOWER_YELLOW)),c.dominantBiome===Vt.JUNGLE&&(f&&d>.972&&g>.34&&c.surface===A.GRASS&&cr(i,t,e,n,o,u+1,l,6+(d*5|0),3,!0),f&&h===A.AIR&&d>.88&&d<.94&&c.surface===A.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.MOSS),f&&h===A.AIR&&d>.942&&d<.957&&c.surface===A.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.FLOWER_YELLOW)),c.dominantBiome===Vt.DESERT){if(d>.972&&g>.3&&c.surface===A.SAND){const _=2+(d*5|0);for(let m=0;m<_;m++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+m,l,A.CACTUS)}h===A.AIR&&d>.93&&d<.945&&c.surface===A.SAND&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.GRAVEL)}if(c.dominantBiome===Vt.MOUNTAIN&&(h===A.AIR&&d>.89&&d<.93&&u>68&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.GRAVEL),d>.988&&g>.5&&u>70)){const _=2+(d*4|0);for(let m=0;m<_;m++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+m,l,u+m>84?A.SNOW:A.STONE)}c.dominantBiome===Vt.PLAINS&&(f&&h===A.AIR&&c.surface===A.GRASS&&d>.86&&d<.915&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.FLOWER_RED),f&&h===A.AIR&&c.surface===A.GRASS&&d>.915&&d<.965&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.FLOWER_YELLOW),f&&d>.992&&g>.45&&c.surface===A.GRASS&&cr(i,t,e,n,o,u+1,l,4+(d*3|0),2,!1)),c.dominantBiome===Vt.TUNDRA&&(h===A.AIR&&d>.94&&d<.97&&c.surface===A.SNOW&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,A.GRAVEL),d>.991&&g>.5&&c.surface===A.SNOW&&cr(i,t,e,n,o,u+1,l,4+(d*3|0),1,!1))}}function pg(i,t,e,n,s,r,a){const o=i.getGeneratedBlockFromChunkData(t,e,n,s,r,a);if(o===A.AIR||o===A.WATER)return!1;const l=s-e*nt,c=a-n*nt;if(l<0||c<0||l>=nt||c>=nt)return!1;for(let u=1;u<=5;u++){const h=i.getGeneratedBlockFromChunkData(t,e,n,s,r-u,a);if(h===A.AIR||h===A.WATER)return!1}return!0}function cr(i,t,e,n,s,r,a,o,l,c){for(let h=0;h<o;h++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+h,a,A.LOG);const u=r+o;for(let h=-l;h<=l;h++){const f=Math.max(1,l-Math.abs(h)+1);for(let d=-f;d<=f;d++)for(let g=-f;g<=f;g++){if(Math.abs(d)+Math.abs(g)>f+1)continue;const _=s+d,m=u+h,p=a+g;if(i.setGeneratedLeafIfAir(t,e,n,_,m,p),!c||!(Math.abs(d)===f||Math.abs(g)===f))continue;const b=St(_,p,i.seed+11811+h*17);if(b<.62)continue;const S=2+(b*4|0);for(let I=1;I<=S;I++)i.setGeneratedVineIfAir(t,e,n,_,m-I,p)}}}function mg(i,t,e,n,s,r,a,o){for(let u=0;u<o;u++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+u,a,A.LOG);const l=r+o,c=2;for(let u=-c;u<=c;u++){const h=Math.max(1,c-Math.abs(u)+1);for(let f=-h;f<=h;f++)for(let d=-h;d<=h;d++){if(Math.abs(f)+Math.abs(d)>h+1)continue;const g=s+f,_=l+u,m=a+d;St(g*19+_,m*23-_,i.seed+29011)>.86&&Math.abs(f)+Math.abs(d)>=2?i.setGeneratedBlockIfInChunk(t,e,n,g,_,m,A.APPLE):i.setGeneratedLeafIfAir(t,e,n,g,_,m)}}}function ds(i,t){return`${i},${t}`}function Rn(i,t,e){return t*nt*nt+e*nt+i}class gg{constructor(t,e,n=133742){this.scene=t,this.atlas=e,this.seed=n|0,this.generated=new Map,this.modified=new Map,this.loaded=new Map,this.buildQueue=[],this.castleCache=new Map,this.ravineCache=new Map,this.materialOpaque=null,this.materialTransparent=null}setupMaterials(t,e){this.materialOpaque=t,this.materialTransparent=e}getClimate(t,e){return Kc(this,t,e)}getBiomeBlend(t,e){return Zc(this,t,e)}getColumnData(t,e){return j0(this,t,e)}getBiomeAt(t,e){return this.getColumnData(t,e).dominantBiome}getSurfaceYAt(t,e){return this.getColumnData(t,e).height}generateChunkData(t,e){const n=ds(t,e);if(this.generated.has(n))return this.generated.get(n);const s=new Uint8Array(nt*me*nt),r=t*nt,a=e*nt;for(let o=0;o<nt;o++)for(let l=0;l<nt;l++){const c=r+o,u=a+l,h=this.getColumnData(c,u),f=h.height;for(let d=0;d<=f;d++){let g;d===0?g=A.BEDROCK:d===f?g=h.surface:d>=f-3?g=h.subsurface:g=A.STONE,s[Rn(o,d,l)]=g}if(f<oc)for(let d=f+1;d<=oc;d++)s[Rn(o,d,l)]=A.WATER}return fg(this,s,t,e,r,a),dg(this,s,t,e,r,a),ng(this,s,t,e,r,a),this.generated.set(n,s),s}getGeneratedBlockFromChunkData(t,e,n,s,r,a){if(r<0)return A.BEDROCK;if(r>=me)return A.AIR;const o=s-e*nt,l=a-n*nt;return o<0||l<0||o>=nt||l>=nt?A.AIR:t[Rn(o,r,l)]}setGeneratedBlockIfInChunk(t,e,n,s,r,a,o){if(r<=0||r>=me)return;const l=s-e*nt,c=a-n*nt;l<0||c<0||l>=nt||c>=nt||(t[Rn(l,r,c)]=o)}setGeneratedAirIfInChunk(t,e,n,s,r,a){if(r<=0||r>=me)return;const o=s-e*nt,l=a-n*nt;o<0||l<0||o>=nt||l>=nt||(t[Rn(o,r,l)]=A.AIR)}setGeneratedLeafIfAir(t,e,n,s,r,a){if(r<=0||r>=me)return;const o=s-e*nt,l=a-n*nt;if(o<0||l<0||o>=nt||l>=nt)return;const c=Rn(o,r,l),u=t[c];(u===A.AIR||u===A.WATER||u===A.VINE)&&(t[c]=A.LEAVES)}setGeneratedVineIfAir(t,e,n,s,r,a){if(r<=0||r>=me)return;const o=s-e*nt,l=a-n*nt;if(o<0||l<0||o>=nt||l>=nt)return;const c=Rn(o,r,l);t[c]===A.AIR&&(t[c]=A.VINE)}getLocalBlockFromData(t,e,n,s,r){if(s<0)return A.BEDROCK;if(s>=me)return A.AIR;const a=ds(t,e),o=Rn(n,s,r),l=this.modified.get(a);return l&&l.has(o)?l.get(o):this.generateChunkData(t,e)[o]}getBlock(t,e,n){if(e<0)return A.BEDROCK;if(e>=me)return A.AIR;const s=ye(t,nt),r=ye(n,nt),a=lr(t,nt),o=lr(n,nt);return this.getLocalBlockFromData(s,r,a,e,o)}setBlock(t,e,n,s){if(e<=0||e>=me)return!1;const r=ye(t,nt),a=ye(n,nt),o=lr(t,nt),l=lr(n,nt),c=ds(r,a),u=Rn(o,e,l),h=this.generateChunkData(r,a)[u];let f=this.modified.get(c);return f||(f=new Map,this.modified.set(c,f)),s===h?f.delete(u):f.set(u,s),f.size===0&&this.modified.delete(c),this.markChunkDirty(r,a),o===0&&this.markChunkDirty(r-1,a),o===nt-1&&this.markChunkDirty(r+1,a),l===0&&this.markChunkDirty(r,a-1),l===nt-1&&this.markChunkDirty(r,a+1),!0}markChunkDirty(t,e){const n=ds(t,e),s=this.loaded.get(n);s&&(s.dirty||(s.dirty=!0,this.buildQueue.push(n)))}loadChunksAround(t,e){const n=ye(Math.floor(t),nt),s=ye(Math.floor(e),nt),r=new Set;for(let o=-_i;o<=_i;o++)for(let l=-_i;l<=_i;l++){const c=n+l,u=s+o,h=ds(c,u);r.add(h),this.loaded.has(h)||(this.loaded.set(h,{cx:c,cz:u,key:h,dirty:!0,opaqueMesh:null,transparentMesh:null}),this.buildQueue.push(h))}const a=_i+2;for(const[o,l]of this.loaded.entries()){const c=Math.abs(l.cx-n),u=Math.abs(l.cz-s);!r.has(o)&&(c>a||u>a)&&(this.disposeChunk(l),this.loaded.delete(o))}}disposeChunk(t){t.opaqueMesh&&(t.opaqueMesh.geometry.dispose(),this.scene.remove(t.opaqueMesh),t.opaqueMesh=null),t.transparentMesh&&(t.transparentMesh.geometry.dispose(),this.scene.remove(t.transparentMesh),t.transparentMesh=null)}rebuildOneChunk(){for(;this.buildQueue.length>0;){const t=this.buildQueue.shift(),e=this.loaded.get(t);if(!e||!e.dirty)continue;const n=q0(this,e.cx,e.cz,this.atlas.getFaceUVs);this.disposeChunk(e),n.opaque&&(e.opaqueMesh=new Ae(n.opaque,this.materialOpaque),e.opaqueMesh.frustumCulled=!0,e.opaqueMesh.castShadow=!0,e.opaqueMesh.receiveShadow=!0,this.scene.add(e.opaqueMesh)),n.transparent&&(e.transparentMesh=new Ae(n.transparent,this.materialTransparent),e.transparentMesh.frustumCulled=!0,e.transparentMesh.castShadow=!1,e.transparentMesh.receiveShadow=!0,this.scene.add(e.transparentMesh)),e.dirty=!1;return}}isBlockTransparent(t){return C0(t)}}function rt(i,t,e,n){const s=new Nn(t[0],t[1],t[2]),r=new Dr({color:n}),a=new Ae(s,r);return a.position.set(e[0],e[1],e[2]),i.add(a),a}function dn(i,t,e,n=1776411,s=.12){rt(i,[.06,.06,.02],[-s,t,e],n),rt(i,[.06,.06,.02],[s,t,e],n)}function pn(i){return{type:i,legs:[],arms:[],wings:[],tail:null,head:null}}function _g(i){const t=pn("humanoid");return rt(i,[.6,.92,.34],[0,.46,0],3960737),t.head=rt(i,[.52,.5,.36],[0,1.17,0],14664353),t.legs.push(rt(i,[.18,.56,.2],[-.2,.24,0],2964307)),t.legs.push(rt(i,[.18,.56,.2],[.2,.24,0],2964307)),t.arms.push(rt(i,[.1,.4,.1],[-.36,.62,0],14664353)),t.arms.push(rt(i,[.1,.4,.1],[.36,.62,0],14664353)),rt(i,[.58,.1,.38],[0,1.48,0],3812130),dn(i,1.2,.19,1710618,.11),rt(i,[.1,.03,.02],[0,1.09,.19],8015674),t}function jc(i){const t=pn("quadruped");rt(i,[.75,.44,.34],[0,.58,0],10516047),t.head=rt(i,[.32,.32,.28],[.42,.76,0],10120774),rt(i,[.2,.14,.2],[.53,.62,0],9330233),t.tail=rt(i,[.08,.12,.08],[-.42,.64,0],8542003),dn(i,.8,.14,1513239,.05);for(const e of[-.24,.24])t.legs.push(rt(i,[.14,.38,.14],[e,.2,.12],8082486)),t.legs.push(rt(i,[.14,.38,.14],[e,.2,-.12],8082486));return rt(i,[.04,.28,.04],[.5,1.02,.09],13878443),rt(i,[.04,.28,.04],[.5,1.02,-.09],13878443),t}function xg(i){const t=pn("crawler");rt(i,[.8,.22,.32],[0,.38,0],12169325),t.head=rt(i,[.3,.18,.24],[.49,.41,0],10261593),t.tail=rt(i,[.46,.1,.1],[-.62,.32,0],9208913),dn(i,.45,.13,2236962,.05);for(const e of[-.13,.13])t.legs.push(rt(i,[.14,.1,.14],[-.15,.2,e],10063705)),t.legs.push(rt(i,[.14,.1,.14],[.2,.2,e],10063705));return t}function vg(i){const t=pn("flying");return rt(i,[.32,.42,.28],[0,.64,0],3065451),t.head=rt(i,[.28,.24,.24],[.14,.9,0],2339935),rt(i,[.1,.08,.08],[.3,.88,0],14985781),dn(i,.93,.12,1052688,.045),t.wings.push(rt(i,[.48,.06,.2],[0,.66,.19],5232383)),t.wings.push(rt(i,[.48,.06,.2],[0,.66,-.19],4110304)),t.tail=rt(i,[.14,.16,.12],[-.2,.4,0],2861402),t}function Mg(i){const t=pn("quadruped");rt(i,[.68,.4,.3],[0,.58,0],14408927),t.head=rt(i,[.3,.28,.24],[.38,.76,0],13158862),dn(i,.79,.12,1447446,.05),rt(i,[.06,.24,.06],[.43,.98,.09],13218950),rt(i,[.06,.24,.06],[.43,.98,-.09],13218950);for(const e of[-.2,.2])t.legs.push(rt(i,[.13,.36,.13],[e,.2,.11],9869213)),t.legs.push(rt(i,[.13,.36,.13],[e,.2,-.11],9869213));return t}function hc(i){const t=pn("quadruped");rt(i,[.74,.46,.42],[0,.58,0],15790319),t.head=rt(i,[.34,.3,.28],[.43,.72,0],4602932),dn(i,.74,.14,1250067,.06);for(const e of[-.22,.22])t.legs.push(rt(i,[.13,.34,.13],[e,.2,.14],6181962)),t.legs.push(rt(i,[.13,.34,.13],[e,.2,-.14],6181962));return t}function Sg(i){const t=jc(i);return rt(i,[.04,.24,.04],[.52,1.14,.14],14209727),rt(i,[.04,.16,.04],[.57,1.2,.18],14209727),rt(i,[.04,.24,.04],[.52,1.14,-.14],14209727),rt(i,[.04,.16,.04],[.57,1.2,-.18],14209727),t}function Ro(i,t,e,n=!1){const s=pn("humanoid");return rt(i,[.56,.88,.32],[0,.46,0],t),s.head=rt(i,[.44,.48,.32],[0,1.14,0],e),s.legs.push(rt(i,[.16,.56,.16],[-.18,.22,0],3155487)),s.legs.push(rt(i,[.16,.56,.16],[.18,.22,0],3155487)),s.arms.push(rt(i,[.12,.42,.12],[-.34,.62,0],e)),s.arms.push(rt(i,[.12,.42,.12],[.34,.62,0],e)),dn(i,1.16,.17,n?12524829:1315860,.08),rt(i,[.12,.04,.02],[0,1.04,.17],n?5181456:7819064),n&&rt(i,[.46,.08,.36],[0,1.42,0],2039583),s}function Eg(i){const t=pn("crawler");rt(i,[.66,.3,.32],[0,.48,0],9929799),t.head=rt(i,[.32,.2,.24],[.42,.54,0],8219191),dn(i,.58,.12,13512478,.05),t.tail=rt(i,[.5,.08,.08],[-.58,.42,0],7166512);for(const e of[-.13,.13])t.legs.push(rt(i,[.12,.2,.12],[-.16,.2,e],8351806)),t.legs.push(rt(i,[.12,.2,.12],[.16,.2,e],8351806));return t}function yg(i){const t=pn("quadruped");rt(i,[.74,.34,.32],[0,.54,0],12747069),t.head=rt(i,[.32,.24,.24],[.45,.62,0],11300657),dn(i,.65,.12,12394014,.05);for(const e of[-.22,.22])t.legs.push(rt(i,[.12,.28,.12],[e,.2,.13],9329191)),t.legs.push(rt(i,[.12,.28,.12],[e,.2,-.13],9329191));return t.tail=rt(i,[.44,.08,.08],[-.58,.5,0],9066533),t}function bg(i){const t=pn("wraith");return rt(i,[.64,.86,.42],[0,.56,0],7962758),t.head=rt(i,[.48,.36,.34],[0,1.18,0],6976378),t.arms.push(rt(i,[.26,.5,.16],[-.45,.62,0],6713207)),t.arms.push(rt(i,[.26,.5,.16],[.45,.62,0],6713207)),dn(i,1.2,.18,16756019,.09),t}function Tg(i){const t=pn("humanoid");return rt(i,[.78,.96,.48],[0,.58,0],13162981),t.head=rt(i,[.52,.5,.4],[0,1.23,0],14149103),t.arms.push(rt(i,[.28,.62,.2],[-.48,.62,0],12111067)),t.arms.push(rt(i,[.28,.62,.2],[.48,.62,0],12111067)),t.legs.push(rt(i,[.18,.5,.18],[-.2,.25,0],10334914)),t.legs.push(rt(i,[.18,.5,.18],[.2,.25,0],10334914)),dn(i,1.22,.2,9093375,.1),rt(i,[.16,.05,.03],[0,1.08,.2],5337490),t}function Aa(i,t,e=!1){const n=new $n;let s;if(e)return s=_g(n),{root:n,rig:s};switch(i.key){case"deer":s=jc(n);break;case"lizard":s=xg(n);break;case"parrot":s=vg(n);break;case"goat":s=Mg(n);break;case"sheep":s=hc(n);break;case"reindeer":s=Sg(n);break;case"bandit":s=Ro(n,7228726,13674370,!0);break;case"raider":s=Ro(n,5715753,13146740,!0);break;case"sandstalker":s=Eg(n);break;case"jaguar":s=yg(n);break;case"rockwraith":s=bg(n);break;case"yeti":s=Tg(n);break;default:s=hc(n);break}return t&&rt(n,[.08,.08,.08],[.24,.9,.2],9376788),{root:n,rig:s}}function Ra(i){const t=document.createElement("canvas");t.width=96,t.height=16;const e=new zr(t);e.minFilter=We;const n=new Go({map:e,transparent:!0,depthTest:!1,depthWrite:!1}),s=new Oc(n);s.scale.set(1.45,.26,1),s.position.set(0,2.25,0),i.mesh.add(s),i.healthCanvas=t,i.healthTexture=e,i.healthSprite=s,Jc(i)}function Jc(i){if(!i.healthCanvas)return;const t=i.healthCanvas.getContext("2d");t.clearRect(0,0,i.healthCanvas.width,i.healthCanvas.height),t.fillStyle="rgba(25,25,25,0.85)",t.fillRect(0,0,96,16);const e=Math.max(0,Math.min(1,i.health/i.maxHealth));t.fillStyle="rgba(192,36,36,0.95)",t.fillRect(2,2,Math.floor(92*e),12),i.healthTexture.needsUpdate=!0}function wa(i){const t=new Wo(.65,.95,24),e=new Qi({color:16726843,transparent:!0,opacity:0,side:Qe,depthTest:!1}),n=new Ae(t,e);n.position.set(0,1.05,0),n.rotation.x=Math.PI/2,i.mesh.add(n),i.damageHalo=n}const Vn=384,Ag=.56,Vi=(_i+5)*nt,Rg={[Vt.FOREST]:{key:"deer",name:"Deer",color:10516047,speed:1.6},[Vt.DESERT]:{key:"lizard",name:"Lizard",color:12169325,speed:1.4},[Vt.JUNGLE]:{key:"parrot",name:"Parrot",color:3065451,speed:2.2,flying:!0},[Vt.MOUNTAIN]:{key:"goat",name:"Goat",color:14145757,speed:1.5},[Vt.PLAINS]:{key:"sheep",name:"Sheep",color:15790319,speed:1.3},[Vt.TUNDRA]:{key:"reindeer",name:"Reindeer",color:10454377,speed:1.5}},wg={[Vt.FOREST]:{key:"bandit",name:"Bandit",color:7228726,speed:2.1,health:65,drop:A.WEAPON_BANDIT_BLADE},[Vt.DESERT]:{key:"sandstalker",name:"Sandstalker",color:9929799,speed:2,health:58,drop:A.WEAPON_SCORP_BOW},[Vt.JUNGLE]:{key:"jaguar",name:"Jungle Stalker",color:12747069,speed:2.3,health:60,drop:A.WEAPON_JAGUAR_CLAWS},[Vt.MOUNTAIN]:{key:"rockwraith",name:"Rock Wraith",color:7962758,speed:1.9,health:72,drop:A.WEAPON_WRAITH_HAMMER},[Vt.PLAINS]:{key:"raider",name:"Raider",color:7358520,speed:2,health:68,drop:A.WEAPON_RAIDER_SABER},[Vt.TUNDRA]:{key:"yeti",name:"Yeti",color:13162981,speed:1.8,health:85,drop:A.WEAPON_YETI_AXE}},Cg=new Set(["bandit","raider"]);function ps(i,t,e){const n=Math.floor(t),s=Math.floor(e);for(let r=me-1;r>=1;r--){const a=i.getBlock(n,r,s),o=i.getBlock(n,r+1,s);if(a!==A.AIR&&a!==A.WATER&&o===A.AIR)return r}return 1}class Pg{constructor(t,e,n={}){this.scene=t,this.world=e,this.onEnemyKilled=n.onEnemyKilled??(()=>{}),this.entities=new Map,this.chunkSpawns=new Map,this.hostileSites=new Map,this.hostileSiteSpawns=new Map,this.nextId=1,this.spawnTick=0,this.tmpDir=new N,this.raycaster=new Wh}attachEntityMesh(t){t.mesh.userData.entityId=t.id,t.mesh.traverse(e=>{e.isMesh&&(e.userData.entityId=t.id)}),this.scene.add(t.mesh)}spawnForChunk(t){const e=t.key;if(this.chunkSpawns.has(e))return;const n=t.cx*nt+nt*.5,s=t.cz*nt+nt*.5,r=this.world.getBiomeAt(n,s),a=[];a.push(this.spawnMob(t,r,Rg[r],!1));const o=St(t.cx,t.cz,45019);(r===Vt.FOREST||r===Vt.PLAINS||r===Vt.JUNGLE)&&o>.93&&a.push(this.spawnQuestGiver(t,r)),this.chunkSpawns.set(e,a.filter(Boolean))}getHostileSite(t,e){const n=`${t},${e}`;if(this.hostileSites.has(n))return this.hostileSites.get(n);if(St(t,e,88901)>Ag)return this.hostileSites.set(n,null),null;const r=64,a=t*Vn+r+Math.floor(St(t,e,88911)*(Vn-r*2)),o=e*Vn+r+Math.floor(St(t,e,88921)*(Vn-r*2)),l=this.world.getBiomeAt(a,o),c=wg[l],u=Cg.has(c.key);let h=1;u?h=3+(St(t,e,88931)*3|0):St(t,e,88941)>.8&&(h=2);const f={key:n,x:a,z:o,biome:l,def:c,intelligent:u,groupSize:h};return this.hostileSites.set(n,f),f}spawnHostileSite(t){if(this.hostileSiteSpawns.has(t.key))return;const e=[],n=ps(this.world,t.x,t.z);for(let s=0;s<t.groupSize;s++){const r=St(s,t.x,7801)*Math.PI*2,a=t.intelligent?2.2+St(s,t.z,7802)*4.5:St(s,t.z,7803)*2.5,o=Math.floor(t.x+Math.cos(r)*a),l=Math.floor(t.z+Math.sin(r)*a),c=ps(this.world,o,l),u=this.spawnHostileAt(t,s,o,c,l,n);u&&e.push(u)}this.hostileSiteSpawns.set(t.key,e)}spawnHostileAt(t,e,n,s,r,a){const{root:o,rig:l}=Aa(t.def,!0,!1),c=this.nextId++,u=s+(t.def.flying?5.3:1.02);o.position.set(n+.5,u,r+.5);const h=Math.PI*2*e/Math.max(1,t.groupSize),f=t.intelligent?3.2:1.6,d={id:c,sourceType:"site",sourceKey:t.key,biome:t.biome,kind:"mob",key:t.def.key,name:t.def.name,hostile:!0,flying:!!t.def.flying,intelligent:t.intelligent,speed:t.def.speed,mesh:o,rig:l,vx:0,vz:0,wanderTimer:.6+St(c,n,8111)*2,attackTimer:0,homeY:u,homeX:t.x+Math.cos(h)*f,homeZ:t.z+Math.sin(h)*f,patrolRadius:t.intelligent?7.5:10,animPhase:St(c,n,9201)*Math.PI*2,groupId:t.key,groupCenterY:a+1.02,maxHealth:t.def.health,health:t.def.health,dropItem:t.def.drop,damageFlash:0};return Ra(d),wa(d),this.entities.set(c,d),this.attachEntityMesh(d),c}spawnMob(t,e,n,s){const r=t.cx*nt+2+Math.floor(St(t.cx,t.cz,s?443:223)*12),a=t.cz*nt+2+Math.floor(St(t.cx,t.cz,s?877:557)*12),o=ps(this.world,r,a),{root:l,rig:c}=Aa(n,s,!1),u=this.nextId++,h=o+(n.flying?5.3:1.02);l.position.set(r+.5,h,a+.5);const f={id:u,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"mob",key:n.key,name:n.name,hostile:s,flying:!!n.flying,intelligent:!1,speed:n.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.3+St(u,r,8111)*2,attackTimer:0,homeY:h,homeX:r,homeZ:a,patrolRadius:9,animPhase:St(u,r,9201)*Math.PI*2,groupId:null,maxHealth:s?50:30,health:s?50:30,dropItem:null,damageFlash:0,provoked:!1};return s&&(Ra(f),wa(f)),this.entities.set(u,f),this.attachEntityMesh(f),u}spawnQuestGiver(t,e){const n=t.cx*nt+4+Math.floor(St(t.cx,t.cz,1201)*8),s=t.cz*nt+4+Math.floor(St(t.cx,t.cz,1202)*8),r=ps(this.world,n,s),{root:a}=Aa({},!1,!0),o=this.nextId++;a.position.set(n+.5,r+1.02,s+.5);const l={id:o,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"questgiver",name:`Quest Giver (${K0[e]})`,hostile:!1,flying:!1,intelligent:!0,speed:0,mesh:a,rig:null,homeY:r+1.02,bobOffset:St(o,n,21991)*6.28,animPhase:0};return this.entities.set(o,l),this.attachEntityMesh(l),o}removeEntity(t){const e=this.entities.get(t);e&&(this.scene.remove(e.mesh),e.mesh.traverse(n=>{!n.isMesh&&!n.isSprite||(n.geometry?.dispose?.(),n.material?.dispose?.(),n.material?.map&&n.material.map.dispose?.())}),this.entities.delete(t))}getEntityFromObject(t){let e=t;for(;e;){if(e.userData&&e.userData.entityId!==void 0)return this.entities.get(e.userData.entityId)??null;e=e.parent}return null}attackFromRay(t,e,n,s){const r=[],a=[];for(const f of this.entities.values())f.kind==="mob"&&(f.health<=0||(r.push(f.mesh),a.push(f)));if(r.length===0)return null;this.raycaster.set(t,e),this.raycaster.far=n;const o=this.raycaster.intersectObjects(r,!0);if(o.length>0){const f=this.getEntityFromObject(o[0].object);return f?this.damageEntity(f,s):null}const l=.4;let c=null,u=1/0;const h=new N;for(const f of a){h.subVectors(f.mesh.position,t);const d=h.length();d>n||d<1e-4||e.angleTo(h.multiplyScalar(1/d))>l||d<u&&(u=d,c=f)}return c?this.damageEntity(c,s):null}attackNearestInFront(t,e,n,s,r){let a=null,o=1/0;const l=new N;for(const c of this.entities.values()){if(c.kind!=="mob"||c.health<=0)continue;l.subVectors(c.mesh.position,t);const u=l.length();if(u>n||u<1e-4)continue;const h=l.clone().multiplyScalar(1/u);e.angleTo(h)>s||u<o&&(o=u,a=c)}return a?this.damageEntity(a,r):null}damageEntity(t,e){if(!t||t.kind!=="mob")return null;if(!t.hostile&&!t.provoked&&(t.provoked=!0,t.healthSprite||Ra(t),t.damageHalo||wa(t)),t.health=Math.max(0,t.health-e),t.damageFlash=.25,t.healthSprite&&Jc(t),t.health<=0){const n={name:t.name,key:t.key,dropItem:t.dropItem};return this.removeEntity(t.id),t.hostile&&this.onEnemyKilled(n),{killed:!0,...n}}return{killed:!1,name:t.name,key:t.key}}spawnHostilesNear(t){const e=ye(t.x-Vi,Vn),n=ye(t.x+Vi,Vn),s=ye(t.z-Vi,Vn),r=ye(t.z+Vi,Vn);for(let a=s;a<=r;a++)for(let o=e;o<=n;o++){const l=this.getHostileSite(o,a);if(!l)continue;const c=l.x-t.x,u=l.z-t.z;c*c+u*u>Vi*Vi||this.spawnHostileSite(l)}}syncSpawns(t){for(const s of this.world.loaded.values())this.spawnForChunk(s);this.spawnHostilesNear(t);const e=(_i+6)*nt,n=e*e;for(const[s,r]of this.entities){const a=r.mesh.position.x-t.x,o=r.mesh.position.z-t.z;a*a+o*o>n&&this.removeEntity(s)}for(const[s,r]of this.chunkSpawns.entries())r.some(a=>this.entities.has(a))||this.chunkSpawns.delete(s);for(const[s,r]of this.hostileSiteSpawns.entries())r.some(a=>this.entities.has(a))||this.hostileSiteSpawns.delete(s)}animateEntity(t,e,n,s){if(!t.rig)return;const r=t.rig,a=n>.04,o=a?Math.min(.55,n*.16):.05;t.animPhase+=e*(a?8+n*2.4:2.2);for(let l=0;l<r.legs.length;l++){const c=r.legs[l],u=t.animPhase+(l%2===0?0:Math.PI);c.rotation.x=Math.sin(u)*o}for(let l=0;l<r.arms.length;l++){const c=r.arms[l],u=t.animPhase+(l%2===0?Math.PI:0);c.rotation.x=Math.sin(u)*(o*.9)}if(r.wings.length>0){const l=Math.sin(s*16+t.id)*(a?.7:.3);r.wings[0].rotation.z=l,r.wings[1]&&(r.wings[1].rotation.z=-l)}r.tail&&(r.tail.rotation.y=Math.sin(s*5+t.id)*.35,r.tail.rotation.x=Math.cos(s*4+t.id)*.12),r.head&&(r.head.rotation.x=Math.sin(s*2.7+t.id)*.05)}updateEntity(t,e,n,s,r){if(t.kind==="questgiver"){t.mesh.position.y=t.homeY+Math.sin(s*1.9+t.bobOffset)*.06,t.mesh.rotation.y+=n*.4;return}const a=t.mesh.position,o=e.x-a.x,l=e.z-a.z,c=Math.hypot(o,l);if(t.hostile&&r&&c<8.8){const f=c>.001?1/c:0;t.vx=o*f*t.speed*1.25,t.vz=l*f*t.speed*1.25,t.attackTimer+=n*7,a.y=t.homeY+Math.sin(t.attackTimer)*.2}else{if(t.wanderTimer-=n,t.wanderTimer<=0){const f=St(s*10|0,t.id,7001)*Math.PI*2,d=t.speed*(t.intelligent?.55:.75);t.vx=Math.cos(f)*d,t.vz=Math.sin(f)*d,t.wanderTimer=1.8+St(t.id,s*4|0,7002)*3.2}if(!t.hostile&&t.provoked&&c<7.2){const f=c>.001?1/c:0;t.vx=-o*f*t.speed*1.15,t.vz=-l*f*t.speed*1.15}if(t.hostile){const f=t.homeX-a.x,d=t.homeZ-a.z,g=Math.hypot(f,d);if(g>t.patrolRadius){const _=g>.001?1/g:0;t.vx=f*_*t.speed*.9,t.vz=d*_*t.speed*.9}}t.flying&&(a.y=t.homeY+Math.sin(s*2.3+t.id)*.7)}a.x+=t.vx*n,a.z+=t.vz*n;const u=ps(this.world,a.x,a.z);if(!t.flying){const f=u+1.02;Math.abs(f-t.homeY)<4?(t.homeY=f,a.y=f):(t.vx*=-.8,t.vz*=-.8)}t.damageHalo&&(t.damageFlash=Math.max(0,t.damageFlash-n),t.damageHalo.material.opacity=t.damageFlash>0?.7*(t.damageFlash/.25):0),this.tmpDir.set(t.vx,0,t.vz);const h=this.tmpDir.length();h>.001&&(t.mesh.rotation.y=-Math.atan2(t.vz,t.vx)),this.animateEntity(t,n,h,s)}update(t,e,n,s=!0){this.spawnTick+=e,this.spawnTick>=1&&(this.syncSpawns(t),this.spawnTick=0);for(const r of this.entities.values())this.updateEntity(r,t,e,n,s)}countHostilesInRange(t,e){const n=e*e;let s=0;for(const r of this.entities.values()){if(!r.hostile||r.kind!=="mob")continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z;a*a+o*o+l*l<=n&&s++}return s}getNearestQuestGiver(t,e=4){let n=null,s=e*e;for(const r of this.entities.values()){if(r.kind!=="questgiver")continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}}const wn=1e-4;class Ig{constructor(t,e){this.camera=t,this.domElement=e,this.position=new N(0,40,0),this.velocity=new N(0,0,0),this.yaw=0,this.pitch=0,this.grounded=!1,this.flyMode=!1,this.jumpQueued=!1,this.lastSpaceTap=-9999,this.keys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1,Space:!1},this.isLocked=!1,this.tmpForward=new N,this.tmpRight=new N,this.tmpMove=new N,this.walkSpeed=D0,this.sneakSpeed=U0,this.flySpeed=N0,this.bindInput(),this.syncCamera()}setMovementSpeeds(t,e){this.walkSpeed=Math.max(1,t),this.sneakSpeed=Math.max(.5,this.walkSpeed*.5),this.flySpeed=Math.max(1,Math.min(300,e))}bindInput(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{if(!this.isLocked)return;const e=.0022;this.yaw-=t.movementX*e,this.pitch-=t.movementY*e;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch))}),document.addEventListener("keydown",t=>{if(t.code in this.keys){if(t.repeat)return;if(t.code==="Space"){const e=performance.now();e-this.lastSpaceTap<=z0?(this.flyMode=!this.flyMode,this.flyMode?this.velocity.y=0:this.velocity.y=Math.min(this.velocity.y,0),this.lastSpaceTap=-9999):(this.lastSpaceTap=e,this.flyMode||(this.jumpQueued=!0))}this.keys[t.code]=!0}}),document.addEventListener("keyup",t=>{t.code in this.keys&&(this.keys[t.code]=!1)})}getAABB(t=this.position){const e=fs*.5;return{minX:t.x-e,maxX:t.x+e,minY:t.y,maxY:t.y+ar,minZ:t.z-e,maxZ:t.z+e}}overlapsSolid(t,e){const n=Math.floor(e.minX),s=Math.floor(e.maxX-wn),r=Math.floor(e.minY),a=Math.floor(e.maxY-wn),o=Math.floor(e.minZ),l=Math.floor(e.maxZ-wn);for(let c=r;c<=a;c++)for(let u=o;u<=l;u++)for(let h=n;h<=s;h++)if(Ao(t.getBlock(h,c,u)))return{x:h,y:c,z:u};return null}resolveAxis(t,e,n){if(n===0)return!1;this.position[e]+=n;let s=!1,r;for(;r=this.overlapsSolid(t,this.getAABB(this.position));)s=!0,e==="x"?(n>0?this.position.x=r.x-fs*.5-wn:this.position.x=r.x+1+fs*.5+wn,this.velocity.x=0):e==="y"?(n>0?this.position.y=r.y-ar-wn:(this.position.y=r.y+1+wn,this.grounded=!0),this.velocity.y=0):e==="z"&&(n>0?this.position.z=r.z-fs*.5-wn:this.position.z=r.z+1+fs*.5+wn,this.velocity.z=0);return s}update(t,e){const n=this.grounded;if(this.grounded=!1,this.tmpForward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.tmpRight.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.tmpMove.set(0,0,0),this.keys.KeyW&&this.tmpMove.add(this.tmpForward),this.keys.KeyS&&this.tmpMove.sub(this.tmpForward),this.keys.KeyD&&this.tmpMove.add(this.tmpRight),this.keys.KeyA&&this.tmpMove.sub(this.tmpRight),this.tmpMove.lengthSq()>0&&this.tmpMove.normalize(),this.flyMode){const r=this.flySpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=0,this.keys.Space&&(this.velocity.y+=r),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.velocity.y-=r)}else{const r=this.keys.ShiftLeft||this.keys.ShiftRight?this.sneakSpeed:this.walkSpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=Math.max(B0,this.velocity.y-O0*e),this.jumpQueued&&n&&(this.velocity.y=F0,this.grounded=!1),this.jumpQueued=!1}this.resolveAxis(t,"x",this.velocity.x*e),this.resolveAxis(t,"z",this.velocity.z*e),this.resolveAxis(t,"y",this.velocity.y*e),this.position.y<1&&(this.position.y=1,this.velocity.y=0,this.grounded=!0);const s=me-.1;this.position.y+ar>s&&(this.position.y=s-ar,this.velocity.y=0),this.syncCamera()}syncCamera(){this.camera.position.set(this.position.x,this.position.y+L0,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}}const Ca=[A.FLOWER_RED,A.FLOWER_YELLOW,A.VINE,A.CACTUS,A.MOSS];class Lg{constructor(t,e=1){this.ui=t,this.seed=e|0,this.coins=0,this.activeQuest=null,this.questCounter=0,this.ui.updateCoins(this.coins)}hasOpenDialogue(){return this.ui.isDialogueOpen()}closeDialogue(){this.ui.closeDialogue()}randomFor(t,e){const n=Math.sin((t+1)*12.9898+(this.seed+e)*78.233)*43758.5453;return n-Math.floor(n)}createQuestFor(t){const e=this.randomFor(t.id,this.questCounter+17),n=Ca[Math.floor(e*Ca.length)%Ca.length],s=4+Math.floor(this.randomFor(t.id,this.questCounter+99)*5)%5,r=8+s*3;return this.questCounter+=1,{id:this.questCounter,giverId:t.id,giverName:t.name,target:n,amount:s,reward:r,status:"active"}}getQuestProgress(t){return this.ui.getItemCount(t.target)}onTalkToQuestGiver(t){const e=t.name;if(!this.activeQuest){const a=this.createQuestFor(t),o=fn[a.target].name;this.ui.openDialogue(e,`Traveler, I need ${a.amount} ${o} for my camp. Bring them to me and I will pay ${a.reward} coins.`,[{label:"Accept quest",onSelect:()=>{this.activeQuest=a,this.ui.openDialogue(e,`Quest accepted:
Collect ${a.amount} ${o}.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Maybe later",onSelect:()=>this.ui.closeDialogue()}]);return}if(this.activeQuest.giverId!==t.id){this.ui.openDialogue(e,`I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}const n=this.activeQuest,s=fn[n.target].name,r=this.getQuestProgress(n);if(r>=n.amount){this.ui.openDialogue(e,`You brought the ${s}! Hand over ${n.amount} and collect ${n.reward} coins?`,[{label:"Turn in quest",onSelect:()=>{if(!this.ui.consumeItem(n.target,n.amount)){this.ui.openDialogue(e,"Looks like you no longer have the items.",[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}this.coins+=n.reward,this.ui.updateCoins(this.coins),this.activeQuest=null,this.ui.openDialogue(e,`Excellent work. Here are ${n.reward} coins.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Not now",onSelect:()=>this.ui.closeDialogue()}]);return}this.ui.openDialogue(e,`Progress: ${r}/${n.amount} ${s}. Keep searching.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}getActiveQuestText(){if(!this.activeQuest)return"";const t=this.activeQuest,e=this.getQuestProgress(t);return`Quest: ${t.giverName} wants ${t.amount} ${fn[t.target].name} (${Math.min(e,t.amount)}/${t.amount})`}}function Dg(i,t,e,n){const s=e.x>0?1:-1,r=e.y>0?1:-1,a=e.z>0?1:-1;let o=Math.floor(t.x),l=Math.floor(t.y),c=Math.floor(t.z);const u=e.x===0?Number.POSITIVE_INFINITY:Math.abs(1/e.x),h=e.y===0?Number.POSITIVE_INFINITY:Math.abs(1/e.y),f=e.z===0?Number.POSITIVE_INFINITY:Math.abs(1/e.z),d=o+(e.x>0?1:0),g=l+(e.y>0?1:0),_=c+(e.z>0?1:0);let m=e.x===0?Number.POSITIVE_INFINITY:Math.abs((d-t.x)/e.x),p=e.y===0?Number.POSITIVE_INFINITY:Math.abs((g-t.y)/e.y),y=e.z===0?Number.POSITIVE_INFINITY:Math.abs((_-t.z)/e.z);const b=new N(o,l,c);for(;;){const S=i.getBlock(o,l,c);if(S!==0)return{x:o,y:l,z:c,id:S,previous:b.clone()};if(m<p)if(m<y){if(m>n)break;b.set(o,l,c),o+=s,m+=u}else{if(y>n)break;b.set(o,l,c),c+=a,y+=f}else if(p<y){if(p>n)break;b.set(o,l,c),l+=r,p+=h}else{if(y>n)break;b.set(o,l,c),c+=a,y+=f}}return null}const Ut=16,ur=6,fc=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","water","bedrock","snow","cactus_side","cactus_top","flower_red","flower_yellow","vine","gravel","moss","castle_brick","apple"];function Pe(i,t,e=12,n=1){const[s,r,a]=t,o=i.createImageData(Ut,Ut);for(let l=0;l<o.data.length;l+=4){const c=Math.random()*e-e*.5|0;o.data[l]=Math.max(0,Math.min(255,s+c)),o.data[l+1]=Math.max(0,Math.min(255,r+c)),o.data[l+2]=Math.max(0,Math.min(255,a+c)),o.data[l+3]=Math.floor(255*n)}i.putImageData(o,0,0)}function Ug(i){const t=document.createElement("canvas");t.width=Ut,t.height=Ut;const e=t.getContext("2d",{willReadFrequently:!0});if(i==="grass_top")Pe(e,[64,164,68],26);else if(i==="grass_side"){Pe(e,[126,94,62],18),e.fillStyle="rgba(72, 170, 80, 0.9)",e.fillRect(0,0,Ut,4),e.fillStyle="rgba(60, 120, 42, 0.35)";for(let n=0;n<Ut;n+=2)e.fillRect(n,3+n*7%3,1,1)}else if(i==="dirt")Pe(e,[121,86,55],20);else if(i==="stone")Pe(e,[126,126,130],20);else if(i==="sand")Pe(e,[214,198,128],20);else if(i==="log_side"){Pe(e,[121,90,58],18),e.fillStyle="rgba(90, 58, 30, 0.28)";for(let n=0;n<Ut;n+=4)e.fillRect(n,0,2,Ut)}else if(i==="log_top")Pe(e,[159,122,82],10),e.strokeStyle="rgba(108, 74, 43, 0.75)",e.lineWidth=1,e.strokeRect(2.5,2.5,Ut-5,Ut-5),e.strokeRect(5.5,5.5,Ut-11,Ut-11);else if(i==="leaves")Pe(e,[63,145,64],36,.8);else if(i==="water")Pe(e,[62,119,212],16,.72),e.fillStyle="rgba(160, 210, 255, 0.2)",e.fillRect(0,2,Ut,2),e.fillRect(0,9,Ut,1);else if(i==="bedrock"){Pe(e,[52,52,52],28),e.fillStyle="rgba(96,96,96,0.32)";for(let n=0;n<24;n++)e.fillRect(Math.random()*Ut|0,Math.random()*Ut|0,1,1)}else if(i==="snow"){Pe(e,[230,238,244],9),e.fillStyle="rgba(188, 206, 220, 0.4)";for(let n=0;n<Ut;n+=3)e.fillRect(n,n*5%Ut,1,1)}else if(i==="cactus_side"){Pe(e,[54,146,66],15),e.fillStyle="rgba(36,98,44,0.42)";for(let n=1;n<Ut;n+=3)e.fillRect(n,0,1,Ut)}else if(i==="cactus_top")Pe(e,[70,152,80],14),e.fillStyle="rgba(35,93,42,0.6)",e.fillRect(3,3,Ut-6,Ut-6);else if(i==="flower_red")e.clearRect(0,0,Ut,Ut),e.fillStyle="rgba(56,144,62,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(196,34,44,0.92)",e.fillRect(5,2,6,4);else if(i==="flower_yellow")e.clearRect(0,0,Ut,Ut),e.fillStyle="rgba(56,146,64,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(242,199,44,0.92)",e.fillRect(5,2,6,4);else if(i==="vine"){e.clearRect(0,0,Ut,Ut),e.fillStyle="rgba(48,128,52,0.72)";for(let n=0;n<6;n++){const s=2+n*5%12;e.fillRect(s,1+n*2,2,3)}}else if(i==="gravel"){Pe(e,[132,128,121],22),e.fillStyle="rgba(88,84,81,0.25)";for(let n=0;n<16;n++)e.fillRect(Math.random()*Ut|0,Math.random()*Ut|0,1,1)}else if(i==="moss"){Pe(e,[80,126,64],18),e.fillStyle="rgba(36,74,30,0.18)";for(let n=0;n<16;n++)e.fillRect(Math.random()*Ut|0,Math.random()*Ut|0,2,1)}else if(i==="castle_brick"){Pe(e,[118,117,124],12),e.fillStyle="rgba(68,68,74,0.48)";for(let n=0;n<Ut;n+=4)e.fillRect(0,n,Ut,1);for(let n=0;n<Ut;n+=8)e.fillRect(n,0,1,4),e.fillRect(n+4,4,1,4),e.fillRect(n,8,1,4),e.fillRect(n+4,12,1,4)}else i==="apple"&&(e.clearRect(0,0,Ut,Ut),e.fillStyle="rgba(196,36,36,0.92)",e.fillRect(4,4,8,8),e.fillStyle="rgba(232,120,120,0.55)",e.fillRect(5,5,3,3),e.fillStyle="rgba(76,138,58,0.8)",e.fillRect(7,2,2,2),e.fillStyle="rgba(112,84,38,0.8)",e.fillRect(8,1,1,2));return t}function Ng(){const i=Math.ceil(fc.length/ur),t=document.createElement("canvas");t.width=ur*Ut,t.height=i*Ut;const e=t.getContext("2d"),n={};fc.forEach((c,u)=>{const h=u%ur,f=Math.floor(u/ur);n[c]={tx:h,ty:f},e.drawImage(Ug(c),h*Ut,f*Ut)});const s=new zr(t);s.magFilter=Xe,s.minFilter=Wu,s.generateMipmaps=!0,s.colorSpace=Ne;const r=1/t.width,a=1/t.height;function o(c){const u=n[c],h=.02,f=(u.tx*Ut+h)*r,d=1-((u.ty+1)*Ut-h)*a,g=((u.tx+1)*Ut-h)*r,_=1-(u.ty*Ut+h)*a;return[f,d,g,_]}function l(c,u){const f=fn[c].textures,d=f.all?f.all:u===Xn.PY?f.top:u===Xn.NY?f.bottom:f.side;return o(d)}return{texture:s,getFaceUVs:l}}const Wi=56,Fg=.45,hr=9;class Og{constructor(t,e=1337){this.scene=t,this.seed=e|0,this.windDir=new zt(.93,.37).normalize(),this.windSpeed=1.9,this.clouds=new Map,this.syncTimer=0,this.daylight=1,this.material=new Dr({color:15856887,transparent:!1,depthWrite:!0})}cloudinessAt(t,e){return Ee(t*.08,e*.08,this.seed+88421,3,2,.5)}shouldSpawnCloud(t,e){const n=this.cloudinessAt(t,e);if(n<.44)return!1;const s=St(t,e,this.seed+88439),r=.18+(n-.44)*1.15;return s<Math.max(0,Math.min(.86,r))}createCloud(t,e){const n=`${t},${e}`;if(this.clouds.has(n)||!this.shouldSpawnCloud(t,e))return;const s=new $n,r=3+(St(t,e,this.seed+88471)*4|0),a=96+Math.floor(St(t,e,this.seed+88483)*18),o=t*Wi+(St(t,e,this.seed+88491)-.5)*Wi*.7,l=e*Wi+(St(t,e,this.seed+88501)-.5)*Wi*.7;for(let c=0;c<r;c++){const u=8+St(t*31+c,e,this.seed+88511)*22,h=3+St(t,e*29+c,this.seed+88523)*5,f=8+St(t*17+c,e*19+c,this.seed+88537)*22,d=(St(t+c*7,e-c*3,this.seed+88541)-.5)*18,g=(St(t-c*5,e+c*11,this.seed+88549)-.5)*4,_=(St(t+c*13,e+c*2,this.seed+88559)-.5)*18,m=new Ae(new Nn(u,h,f),this.material);m.position.set(d,g,_),m.castShadow=!1,m.receiveShadow=!1,s.add(m)}s.userData.anchorX=o,s.userData.anchorY=a,s.userData.anchorZ=l,s.userData.cellX=t,s.userData.cellZ=e,this.clouds.set(n,s),this.scene.add(s)}setDaylight(t){this.daylight=Math.max(0,Math.min(1,t));const e=.3+this.daylight*.7;this.material.color.setRGB(.92*e,.95*e,1*e)}updatePositions(t){const e=this.windDir.x*this.windSpeed*t,n=this.windDir.y*this.windSpeed*t;for(const s of this.clouds.values())s.position.set(s.userData.anchorX+e,s.userData.anchorY,s.userData.anchorZ+n)}syncCloudSet(t,e){const n=this.windDir.x*this.windSpeed*e,s=this.windDir.y*this.windSpeed*e,r=t.x-n,a=t.z-s,o=ye(Math.floor(r),Wi),l=ye(Math.floor(a),Wi),c=new Set;for(let u=-hr;u<=hr;u++)for(let h=-hr;h<=hr;h++){const f=o+h,d=l+u,g=`${f},${d}`;c.add(g),this.createCloud(f,d)}for(const[u,h]of this.clouds.entries())c.has(u)||(this.scene.remove(h),h.traverse(f=>{f.isMesh&&f.geometry?.dispose?.()}),this.clouds.delete(u))}update(t,e,n,s){this.setDaylight(s),this.updatePositions(n),this.syncTimer-=e,this.syncTimer<=0&&(this.syncCloudSet(t,n),this.syncTimer=Fg)}}const Wn={HELLO:"hello",WELCOME:"welcome",PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYERS_SNAPSHOT:"players_snapshot",PLAYER_STATE:"player_state",BLOCK_SET:"block_set"};function Bg(){return`Player${Math.floor(Math.random()*9e3)+1e3}`}const zg=1/15;function kg(i="/ws/main"){return"wss://craftmine.hjdaleng.workers.dev/ws/main"}class Hg{constructor(t={}){this.playerName=t.playerName??"Player",this.onWelcome=t.onWelcome??(()=>{}),this.onPlayerJoin=t.onPlayerJoin??(()=>{}),this.onPlayerLeave=t.onPlayerLeave??(()=>{}),this.onPlayersSnapshot=t.onPlayersSnapshot??(()=>{}),this.onBlockSet=t.onBlockSet??(()=>{}),this.onStatus=t.onStatus??(()=>{}),this.connected=!1,this.playerId=null,this.ws=null,this.outState=null,this.sendAccum=0,this.reconnectTimer=0,this.reconnectDelay=1.5,this.explicitlyClosed=!1}connect(){this.explicitlyClosed=!1;const t=new URLSearchParams({name:this.playerName}),e=`${kg()}?${t.toString()}`;this.ws=new WebSocket(e),this.ws.addEventListener("open",()=>{this.connected=!0,this.onStatus("connected"),this.reconnectDelay=1.5,this.send({type:Wn.HELLO,name:this.playerName})}),this.ws.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}this.handleMessage(s)}),this.ws.addEventListener("close",()=>{this.connected=!1,this.playerId=null,this.ws=null,this.onStatus("disconnected"),this.explicitlyClosed||(this.reconnectTimer=this.reconnectDelay,this.reconnectDelay=Math.min(8,this.reconnectDelay*1.4))})}close(){this.explicitlyClosed=!0,this.ws&&this.ws.close(),this.ws=null,this.connected=!1}tick(t){!this.connected&&this.reconnectTimer>0&&(this.reconnectTimer-=t,this.reconnectTimer<=0&&this.connect()),!(!this.connected||!this.outState)&&(this.sendAccum+=t,!(this.sendAccum<zg)&&(this.sendAccum=0,this.send({type:Wn.PLAYER_STATE,...this.outState})))}setLocalState(t){this.outState=t}sendBlockSet(t,e,n,s){this.send({type:Wn.BLOCK_SET,x:t,y:e,z:n,id:s})}send(t){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify(t))}handleMessage(t){switch(t.type){case Wn.WELCOME:this.playerId=t.id,this.onWelcome(t);break;case Wn.PLAYER_JOIN:this.onPlayerJoin(t.player);break;case Wn.PLAYER_LEAVE:this.onPlayerLeave(t.id);break;case Wn.PLAYERS_SNAPSHOT:this.onPlayersSnapshot(t);break;case Wn.BLOCK_SET:this.onBlockSet(t);break}}}function Gg(){const i=new $n,n=Ro(i,4157341,14135442,!1);return{root:i,rig:n}}class Vg{constructor(t,e=()=>null){this.scene=t,this.localPlayerIdProvider=e,this.players=new Map}ensurePlayer(t,e=null){if(!t||t===this.localPlayerIdProvider())return null;if(this.players.has(t))return this.players.get(t);const{root:n,rig:s}=Gg();n.position.set(e?.x??0,e?.y??0,e?.z??0),this.scene.add(n);const r={id:t,mesh:n,rig:s,name:e?.name??"Player",targetX:e?.x??0,targetY:e?.y??0,targetZ:e?.z??0,yaw:e?.yaw??0,animPhase:Math.random()*Math.PI*2,speed2D:0};return r.nameSprite=this.createNameSprite(r.name),r.nameSprite.position.set(0,2.05,0),r.mesh.add(r.nameSprite),this.players.set(t,r),r}createNameSprite(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(10,10,10,0.7)",n.fillRect(8,14,e.width-16,36),n.strokeStyle="rgba(255,255,255,0.45)",n.strokeRect(8.5,14.5,e.width-17,35),n.fillStyle="#ffffff",n.font="bold 26px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,32);const s=new zr(e);s.minFilter=We;const r=new Go({map:s,transparent:!0,depthWrite:!1,depthTest:!1}),a=new Oc(r);return a.scale.set(1.5,.38,1),a.userData.labelCanvas=e,a}updateNameSprite(t,e){if(!t.nameSprite||t.name===e)return;t.name=e;const n=t.nameSprite.userData.labelCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(10,10,10,0.7)",s.fillRect(8,14,n.width-16,36),s.strokeStyle="rgba(255,255,255,0.45)",s.strokeRect(8.5,14.5,n.width-17,35),s.fillStyle="#ffffff",s.font="bold 26px Trebuchet MS",s.textAlign="center",s.textBaseline="middle",s.fillText(e,n.width/2,32),t.nameSprite.material.map.needsUpdate=!0}removePlayer(t){const e=this.players.get(t);e&&(this.scene.remove(e.mesh),e.mesh.traverse(n=>{n.isMesh?(n.geometry?.dispose?.(),n.material?.dispose?.()):n.isSprite&&(n.material?.map?.dispose?.(),n.material?.dispose?.())}),this.players.delete(t))}applyWelcome(t){for(const e of t)this.ensurePlayer(e.id,e)}applySnapshot(t){const e=new Set;for(const n of t){if(!n?.id||n.id===this.localPlayerIdProvider())continue;e.add(n.id);const s=this.ensurePlayer(n.id,n);s&&(this.updateNameSprite(s,n.name??s.name),s.targetX=n.x,s.targetY=n.y,s.targetZ=n.z,s.yaw=n.yaw??s.yaw)}for(const n of this.players.keys())e.has(n)||this.removePlayer(n)}update(t){for(const e of this.players.values()){const n=e.mesh.position.x,s=e.mesh.position.z;e.mesh.position.x+=(e.targetX-e.mesh.position.x)*Math.min(1,t*10),e.mesh.position.y+=(e.targetY-e.mesh.position.y)*Math.min(1,t*10),e.mesh.position.z+=(e.targetZ-e.mesh.position.z)*Math.min(1,t*10),e.mesh.rotation.y=-e.yaw;const r=(e.mesh.position.x-n)/Math.max(t,1e-4),a=(e.mesh.position.z-s)/Math.max(t,1e-4);e.speed2D=Math.hypot(r,a),this.animateRig(e,t)}}animateRig(t,e){const n=t.rig;if(!n)return;const s=t.speed2D>.05,r=s?Math.min(.55,t.speed2D*.1):.03;t.animPhase+=e*(s?8.8:2.2);for(let a=0;a<n.legs.length;a++){const o=t.animPhase+(a%2===0?0:Math.PI);n.legs[a].rotation.x=Math.sin(o)*r}for(let a=0;a<n.arms.length;a++){const o=t.animPhase+(a%2===0?Math.PI:0);n.arms[a].rotation.x=Math.sin(o)*(r*.9)}n.head&&(n.head.rotation.x=Math.sin(t.animPhase*.35)*.03)}}const Wg="/assets/bgm_default-BJd3PF7N.mp3",Xg={[A.AIR]:[12,20,32],[A.GRASS]:[73,153,67],[A.DIRT]:[120,84,54],[A.STONE]:[125,127,134],[A.SAND]:[214,198,128],[A.LOG]:[111,78,50],[A.LEAVES]:[55,129,61],[A.WATER]:[62,116,201],[A.BEDROCK]:[52,52,52],[A.SNOW]:[229,237,244],[A.CACTUS]:[56,143,65],[A.FLOWER_RED]:[202,45,56],[A.FLOWER_YELLOW]:[238,200,52],[A.VINE]:[46,116,45],[A.GRAVEL]:[131,127,120],[A.MOSS]:[79,126,64],[A.CASTLE_BRICK]:[120,120,130],[A.APPLE]:[193,36,36]};function Yg(i){return Xg[i]??[110,110,116]}function qg(i,t,e){const n=Math.floor(t),s=Math.floor(e),r=i.getSurfaceYAt(n,s);let a=Math.min(me-1,r+16),o=A.AIR;for(;a>=1;a--)if(o=i.getBlock(n,a,s),o!==A.AIR)return o;return A.AIR}class $g{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.offscreen=document.createElement("canvas"),this.offscreenCtx=this.offscreen.getContext("2d"),this.blockWidth=96,this.blockHeight=96,this.lastRenderTime=0,this.renderIntervalSec=.2}setBlockSpan(t,e){this.blockWidth=Math.max(24,Math.min(192,t|0)),this.blockHeight=Math.max(24,Math.min(192,e|0))}render(t,e,n){if(n-this.lastRenderTime<this.renderIntervalSec)return;this.lastRenderTime=n;const s=this.blockWidth,r=this.blockHeight;this.offscreen.width=s,this.offscreen.height=r;const a=this.offscreenCtx.createImageData(s,r),o=Math.floor(e.x),l=Math.floor(e.z),c=Math.floor(s*.5),u=Math.floor(r*.5);for(let d=0;d<r;d++)for(let g=0;g<s;g++){const _=o+(g-c),m=l+(d-u),p=qg(t,_,m),y=Yg(p),b=(d*s+g)*4;a.data[b]=y[0],a.data[b+1]=y[1],a.data[b+2]=y[2],a.data[b+3]=255}this.offscreenCtx.putImageData(a,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.offscreen,0,0,this.canvas.width,this.canvas.height);const h=Math.floor(this.canvas.width*.5),f=Math.floor(this.canvas.height*.5);this.ctx.strokeStyle="rgba(0,0,0,0.7)",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255, 220, 120, 0.95)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke()}}const je=24;function Be(i,t,e,n,s=12,r=255){const a=i.createImageData(je,je);for(let o=0;o<a.data.length;o+=4){const l=Math.random()*s-s*.5|0;a.data[o]=Math.max(0,Math.min(255,t+l)),a.data[o+1]=Math.max(0,Math.min(255,e+l)),a.data[o+2]=Math.max(0,Math.min(255,n+l)),a.data[o+3]=r}i.putImageData(a,0,0)}function Kg(i){const t=document.createElement("canvas");t.width=je,t.height=je;const e=t.getContext("2d");switch(i){case A.GRASS:Be(e,118,92,60,14),e.fillStyle="rgba(67,160,72,0.95)",e.fillRect(0,0,je,7);break;case A.DIRT:Be(e,122,84,55,16);break;case A.STONE:Be(e,122,124,132,16);break;case A.SAND:Be(e,216,199,128,14);break;case A.LOG:Be(e,120,90,58,14),e.fillStyle="rgba(90,58,30,0.3)";for(let n=2;n<je;n+=5)e.fillRect(n,0,2,je);break;case A.LEAVES:Be(e,68,150,70,28,230);break;case A.WATER:Be(e,63,120,210,14,210),e.fillStyle="rgba(175,218,255,0.3)",e.fillRect(0,5,je,3);break;case A.BEDROCK:Be(e,58,58,58,24);break;case A.SNOW:Be(e,233,239,245,8);break;case A.CACTUS:Be(e,57,145,67,12),e.fillStyle="rgba(33,95,40,0.35)";for(let n=1;n<je;n+=4)e.fillRect(n,0,1,je);break;case A.FLOWER_RED:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(196,36,46,0.95)",e.fillRect(8,3,8,6);break;case A.FLOWER_YELLOW:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(240,197,43,0.95)",e.fillRect(8,3,8,6);break;case A.VINE:e.fillStyle="rgba(49,130,52,0.8)";for(let n=0;n<7;n++){const s=3+n*3%16;e.fillRect(s,2+n*2,2,3)}break;case A.GRAVEL:Be(e,132,128,121,20);break;case A.MOSS:Be(e,82,126,66,16);break;case A.CASTLE_BRICK:Be(e,118,117,124,10),e.fillStyle="rgba(66,66,74,0.45)";for(let n=0;n<je;n+=6)e.fillRect(0,n,je,1);break;case A.APPLE:e.fillStyle="rgba(197,36,36,0.95)",e.fillRect(6,6,12,12),e.fillStyle="rgba(230,120,120,0.55)",e.fillRect(8,8,4,4),e.fillStyle="rgba(80,144,61,0.9)",e.fillRect(11,3,3,3);break;case A.WEAPON_BANDIT_BLADE:e.fillStyle="rgba(186,188,196,0.95)",e.fillRect(10,3,4,14),e.fillStyle="rgba(110,74,36,0.95)",e.fillRect(9,17,6,4);break;case A.WEAPON_RAIDER_SABER:e.fillStyle="rgba(202,204,214,0.95)",e.fillRect(7,4,10,3),e.fillRect(14,6,3,10),e.fillStyle="rgba(126,86,40,0.95)",e.fillRect(6,16,8,4);break;case A.WEAPON_SCORP_BOW:e.strokeStyle="rgba(158,106,52,0.95)",e.lineWidth=3,e.beginPath(),e.arc(12,12,7,Math.PI*.2,Math.PI*1.8),e.stroke(),e.strokeStyle="rgba(220,220,220,0.9)",e.lineWidth=1,e.beginPath(),e.moveTo(17,5),e.lineTo(17,19),e.stroke();break;case A.WEAPON_JAGUAR_CLAWS:e.fillStyle="rgba(220,220,228,0.95)",e.fillRect(6,4,2,14),e.fillRect(11,4,2,14),e.fillRect(16,4,2,14);break;case A.WEAPON_WRAITH_HAMMER:e.fillStyle="rgba(132,138,150,0.95)",e.fillRect(7,5,10,6),e.fillStyle="rgba(122,86,50,0.95)",e.fillRect(11,11,2,11);break;case A.WEAPON_YETI_AXE:e.fillStyle="rgba(176,212,236,0.95)",e.fillRect(6,6,10,7),e.fillStyle="rgba(116,82,48,0.95)",e.fillRect(13,11,2,10);break;default:Be(e,90,90,90,10);break}return t.toDataURL()}function Zg(){const i=new Map;return Object.keys(fn).forEach(t=>{const e=Number(t);e!==A.AIR&&i.set(e,Kg(e))}),i}function Pa(i){return i&&i.id!==void 0?i:{id:A.AIR,count:0}}function dc(i,t,e,n={}){const{hotbarIndexLabel:s=null}=n,r=!t||t.id===A.AIR||t.count<=0;i.icon.style.display=r?"none":"block",r||(i.icon.style.backgroundImage=`url(${e.get(t.id)})`),i.name.textContent=r?"Empty":fn[t.id].name,i.count.textContent=r?"":`x${t.count}`,s!==null&&(i.index.textContent=String(s))}class jg{constructor(t){this.overlay=document.getElementById("overlay"),this.modeEl=document.getElementById("mode"),this.coordsEl=document.getElementById("coords"),this.fpsEl=document.getElementById("fps"),this.coinsEl=document.getElementById("coins"),this.hintEl=document.getElementById("hint"),this.healthWrapEl=document.getElementById("health-wrap"),this.healthFillEl=document.getElementById("health-bar-fill"),this.hotbarEl=document.getElementById("hotbar"),this.inventoryEl=document.getElementById("inventory"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.dialogueEl=document.getElementById("dialogue"),this.dialogueTitleEl=document.getElementById("dialogue-title"),this.dialogueTextEl=document.getElementById("dialogue-text"),this.dialogueOptionsEl=document.getElementById("dialogue-options"),this.debugPaneEl=document.getElementById("debug-pane"),this.debugWalkEl=document.getElementById("dbg-walk"),this.debugWalkValueEl=document.getElementById("dbg-walk-value"),this.debugFlyEl=document.getElementById("dbg-fly"),this.debugFlyValueEl=document.getElementById("dbg-fly-value"),this.debugMapWidthEl=document.getElementById("dbg-map-width"),this.debugMapWidthValueEl=document.getElementById("dbg-map-width-value"),this.debugMapHeightEl=document.getElementById("dbg-map-height"),this.debugMapHeightValueEl=document.getElementById("dbg-map-height-value"),this.debugBgmEl=document.getElementById("dbg-bgm"),this.debugBgmValueEl=document.getElementById("dbg-bgm-value"),this.debugHealthEl=document.getElementById("dbg-health"),this.debugAgroEl=document.getElementById("dbg-agro"),this.hotbarSize=8,this.inventory=t.map(Pa),this.hotbarIndex=0,this.coins=0,this.icons=Zg(),this.hotbarEls=[],this.inventoryEls=[],this.buildHotbar(),this.buildInventory(),this.setHotbarSelection(0),this.updateCoins(0),this.setHint(""),this.updateHealth(100,100,!0)}buildHotbar(){this.hotbarEl.innerHTML="",this.hotbarEls=[];for(let t=0;t<this.hotbarSize;t++){const e=document.createElement("div");e.className="hotbar-slot";const n=document.createElement("div");n.className="slot-index";const s=document.createElement("div");s.className="slot-icon";const r=document.createElement("div");r.className="slot-name";const a=document.createElement("div");a.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.appendChild(a),this.hotbarEl.appendChild(e),this.hotbarEls.push({root:e,index:n,icon:s,name:r,count:a})}this.refreshHotbarLabels()}buildInventory(){this.inventoryGridEl.innerHTML="",this.inventoryEls=[];for(let t=0;t<this.inventory.length;t++){const e=document.createElement("button");e.type="button",e.className="inv-slot",e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.addEventListener("click",()=>{const a=this.inventory[t];!a||a.id===A.AIR||a.count<=0||(this.inventory[this.hotbarIndex]={...a},this.refreshHotbarLabels())}),this.inventoryGridEl.appendChild(e),this.inventoryEls.push({root:e,icon:n,name:s,count:r})}this.refreshInventoryLabels()}setupDebugPane(t,e){this.debugWalkEl.value=String(t.walkSpeed),this.debugFlyEl.value=String(t.flySpeed),this.debugMapWidthEl.value=String(t.mapWidthBlocks),this.debugMapHeightEl.value=String(t.mapHeightBlocks),this.debugBgmEl.value=String(t.bgmVolume),this.debugHealthEl.checked=!!t.healthEnabled,this.debugAgroEl.checked=!!t.agroEnabled,this.updateDebugValues(t.walkSpeed,t.flySpeed,t.mapWidthBlocks,t.mapHeightBlocks,t.bgmVolume),this.debugWalkEl.addEventListener("input",()=>{const n=Number(this.debugWalkEl.value);this.updateDebugValues(n,Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({walkSpeed:n})}),this.debugFlyEl.addEventListener("input",()=>{const n=Math.min(300,Number(this.debugFlyEl.value));this.updateDebugValues(Number(this.debugWalkEl.value),n,Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({flySpeed:n})}),this.debugMapWidthEl.addEventListener("input",()=>{const n=Number(this.debugMapWidthEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),n,Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),e({mapWidthBlocks:n})}),this.debugMapHeightEl.addEventListener("input",()=>{const n=Number(this.debugMapHeightEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),n,Number(this.debugBgmEl.value)),e({mapHeightBlocks:n})}),this.debugBgmEl.addEventListener("input",()=>{const n=Number(this.debugBgmEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),n),e({bgmVolume:n})}),this.debugHealthEl.addEventListener("change",()=>e({healthEnabled:this.debugHealthEl.checked})),this.debugAgroEl.addEventListener("change",()=>e({agroEnabled:this.debugAgroEl.checked}))}updateDebugValues(t,e,n,s,r){this.debugWalkValueEl.textContent=`Current: ${t.toFixed(1)}`,this.debugFlyValueEl.textContent=`Current: ${e.toFixed(0)} (max 300)`,this.debugMapWidthValueEl.textContent=`Current: ${Math.round(n)} blocks`,this.debugMapHeightValueEl.textContent=`Current: ${Math.round(s)} blocks`,this.debugBgmValueEl.textContent=`Current: ${Math.round(r*100)}%`}isDebugOpen(){return this.debugPaneEl.classList.contains("visible")}setDebugVisible(t){this.debugPaneEl.classList.toggle("visible",t)}isInventoryOpen(){return this.inventoryEl.classList.contains("visible")}setInventoryVisible(t){this.inventoryEl.classList.toggle("visible",t),this.refreshInventoryLabels()}isDialogueOpen(){return this.dialogueEl.classList.contains("visible")}openDialogue(t,e,n){this.dialogueTitleEl.textContent=t,this.dialogueTextEl.textContent=e,this.dialogueOptionsEl.innerHTML="";for(const s of n){const r=document.createElement("button");r.type="button",r.className="dialogue-btn",r.textContent=s.label,r.addEventListener("click",()=>s.onSelect()),this.dialogueOptionsEl.appendChild(r)}this.dialogueEl.classList.add("visible")}closeDialogue(){this.dialogueEl.classList.remove("visible"),this.dialogueOptionsEl.innerHTML=""}setHint(t){this.hintEl.textContent=t}updateHealth(t,e,n){if(this.healthWrapEl.style.display=n?"block":"none",!n)return;const s=e>0?Math.max(0,Math.min(1,t/e)):0;this.healthFillEl.style.width=`${(s*100).toFixed(1)}%`}getSelectedBlock(){return this.inventory[this.hotbarIndex]?.id??A.DIRT}consumeSelectedBlock(){const t=this.inventory[this.hotbarIndex];return!t||t.id===A.AIR||t.count<=0?!1:(t.count-=1,t.count<=0&&(t.count=0,t.id=A.AIR),this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0)}addItem(t,e){if(t===A.AIR||e<=0)return;let n=e;for(const s of this.inventory)if(s.id===t&&s.count<999){const r=Math.min(999-s.count,n);if(s.count+=r,n-=r,n===0)break}if(n>0){for(const s of this.inventory)if(s.id===A.AIR||s.count<=0){s.id=t,s.count=n;break}}this.refreshHotbarLabels(),this.refreshInventoryLabels()}getItemCount(t){let e=0;for(const n of this.inventory)n.id===t&&(e+=n.count);return e}consumeItem(t,e){if(e<=0)return!0;if(this.getItemCount(t)<e)return!1;let n=e;for(const s of this.inventory){if(s.id!==t||n<=0)continue;const r=Math.min(s.count,n);s.count-=r,n-=r,s.count<=0&&(s.id=A.AIR,s.count=0)}return this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0}updateCoins(t){this.coins=t,this.coinsEl.textContent=`Coins: ${t}`}setOverlayVisible(t){this.overlay.classList.toggle("visible",t)}updateMode(t){this.modeEl.textContent=`Mode: ${t?"Fly":"Walk"}`}updateCoords(t){this.coordsEl.textContent=`X: ${t.x.toFixed(1)} Y: ${t.y.toFixed(1)} Z: ${t.z.toFixed(1)}`}updateFPS(t){this.fpsEl.textContent=`FPS: ${t.toFixed(0)}`}setHotbarSelection(t){this.hotbarIndex=t,this.hotbarEls.forEach((e,n)=>e.root.classList.toggle("active",n===t)),this.inventoryEls.forEach((e,n)=>e.root.classList.toggle("active",n===t))}refreshHotbarLabels(){for(let t=0;t<this.hotbarEls.length;t++)dc(this.hotbarEls[t],Pa(this.inventory[t]),this.icons,{hotbarIndexLabel:t+1})}refreshInventoryLabels(){for(let t=0;t<this.inventoryEls.length;t++)dc(this.inventoryEls[t],Pa(this.inventory[t]),this.icons)}}function Jg(i){const t=new w0({canvas:i,antialias:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Ne,t.shadowMap.enabled=!0,t.shadowMap.type=gc,t}function Qg(){const i=new Ph;i.background=new kt(9031679),i.fog=new Ho(9031679,nt*4.2,nt*7.5);const t=new Gh(16777215,.45);i.add(t);const e=new Hh(16777215,.8);e.position.set(120,200,50),e.castShadow=!0,e.shadow.mapSize.set(1536,1536),e.shadow.bias=-4e-4,e.shadow.camera.near=1,e.shadow.camera.far=520,e.shadow.camera.left=-110,e.shadow.camera.right=110,e.shadow.camera.top=110,e.shadow.camera.bottom=-110,i.add(e.target),i.add(e);const n=new $n,s=new Ae(new Lr(2.6,24,16),new Qi({color:16774054,fog:!1,toneMapped:!1,depthWrite:!1})),r=new Ae(new Lr(4.8,24,16),new Qi({color:16766571,transparent:!0,opacity:.42,fog:!1,toneMapped:!1,depthWrite:!1,side:Qe}));return n.add(r),n.add(s),i.add(n),{scene:i,sunLight:e,ambientLight:t,sunVisual:n}}function t_(){return new Je(75,window.innerWidth/window.innerHeight,.1,600)}function e_(i){const t=new Dr({map:i.texture,vertexColors:!0}),e=new Dr({map:i.texture,vertexColors:!0,transparent:!0,depthWrite:!1,side:Qe,alphaTest:.15});return{matOpaque:t,matTransparent:e}}function n_(i){const t=new Nh(new Fh(new Nn(1.01,1.01,1.01)),new Bc({color:16777062}));return t.visible=!1,i.add(t),t}const i_=6,s_=.9,r_=12,a_=.2,o_=new Set([A.AIR,A.BEDROCK,A.APPLE,A.WEAPON_BANDIT_BLADE,A.WEAPON_RAIDER_SABER,A.WEAPON_SCORP_BOW,A.WEAPON_JAGUAR_CLAWS,A.WEAPON_WRAITH_HAMMER,A.WEAPON_YETI_AXE]);function l_(i){switch(i){case A.WEAPON_BANDIT_BLADE:return 24;case A.WEAPON_RAIDER_SABER:return 27;case A.WEAPON_SCORP_BOW:return 22;case A.WEAPON_JAGUAR_CLAWS:return 20;case A.WEAPON_WRAITH_HAMMER:return 32;case A.WEAPON_YETI_AXE:return 36;default:return r_}}function c_(i,t,e,n){const s=t,r=t+1,a=e,o=e+1,l=n,c=n+1,u=i.getAABB();return!(u.maxX>s&&u.minX<r&&u.maxY>a&&u.minY<o&&u.maxZ>l&&u.minZ<c)}const Ur=8;function u_(){const i=[[32,0,32,64],[0,32,64,32],[8,8,24,30],[56,8,40,30],[8,56,24,34],[56,56,40,34],[16,0,30,18],[48,0,34,18],[0,16,18,30],[64,16,46,30],[0,48,18,34],[64,48,46,34],[16,64,30,46],[48,64,34,46],[24,24,8,40],[40,24,56,40],[24,40,8,24],[40,40,56,24]],t=[];for(let e=0;e<Ur;e++){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d");s.clearRect(0,0,64,64);const r=Math.floor((e+1)/Ur*i.length);s.strokeStyle=`rgba(30, 30, 30, ${(.22+e*.08).toFixed(2)})`,s.lineWidth=3;for(let o=0;o<r;o++){const l=i[o];s.beginPath(),s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]),s.stroke()}const a=new zr(n);a.colorSpace=Ne,a.minFilter=We,a.magFilter=Xe,a.wrapS=Pn,a.wrapT=Pn,t.push(a)}return t}function h_(i,t){const e=new Qi({map:t[0],transparent:!0,opacity:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n=new Ae(new Nn(1.014,1.014,1.014),e);return n.visible=!1,i.add(n),{crackOverlay:n,crackOverlayMat:e}}function vi(i,t){i.breakState=null,t.visible=!1}function Qc(i,t,e,n,s){if(!i||!qc(i.id)){vi(t,e);return}t.breakState&&t.breakState.x===i.x&&t.breakState.y===i.y&&t.breakState.z===i.z&&t.breakState.id===i.id||(t.breakState={x:i.x,y:i.y,z:i.z,id:i.id,progress:0,duration:P0(i.id)},e.position.set(i.x+.5,i.y+.5,i.z+.5),n.map=s[0],n.needsUpdate=!0,e.visible=!0)}function f_(i,t,e,n,s,r,a,o,l,c,u=null){if(t.suppressBreakUntilMouseUp||!t.leftMouseDown){vi(t,a);return}if(document.pointerLockElement!==e||c()){vi(t,a);return}if(!n||!qc(n.id)){vi(t,a);return}if(Qc(n,t,a,o,l),!t.breakState)return;t.breakState.progress+=i/Math.max(.05,t.breakState.duration);const h=Math.min(Ur-1,Math.floor(t.breakState.progress*Ur));if(a.position.set(t.breakState.x+.5,t.breakState.y+.5,t.breakState.z+.5),o.map=l[h],o.needsUpdate=!0,a.visible=!0,t.breakState.progress>=1){const{x:f,y:d,z:g,id:_}=t.breakState;s.setBlock(f,d,g,A.AIR),r.addItem(_,1),u&&u(f,d,g,_),t.breakState=null,a.visible=!1}}const Zn=100,en=document.getElementById("app"),tu=Jg(en),{scene:xn,sunLight:ms,ambientLight:d_,sunVisual:fr}=Qg(),ei=t_(),eu=Ng(),{matOpaque:p_,matTransparent:m_}=e_(eu),Yo=20260304,Ie=new gg(xn,eu,Yo);Ie.setupMaterials(p_,m_);const g_=new Og(xn,Yo+55123),bs=new Audio(Wg);bs.loop=!0;bs.preload="auto";const Ht=new Ig(ei,en),__=Array.from({length:30},()=>({id:A.AIR,count:0})),Gt=new jg(__),x_=document.getElementById("terrain-map"),qo=new $g(x_),wo=new Lg(Gt,Yo+191),br=new Pg(xn,Ie,{onEnemyKilled:i=>{i?.dropItem&&Gt.addItem(i.dropItem,1)}});let Dn=null;const _s=new Vg(xn,()=>Dn?.playerId??null),v_=document.getElementById("name-prompt"),Gr=document.getElementById("name-input"),nu=document.getElementById("name-confirm");function M_(){const i="voxel_player_name",t=localStorage.getItem(i);if(t&&t.trim())return t.trim();const e=Bg();return localStorage.setItem(i,e),e}let Tr="offline",Vr=!1,Co=0;function iu(i){v_.classList.toggle("visible",i)}function S_(i){Dn&&Dn.close(),Tr="connecting",Dn=new Hg({playerName:i,onStatus:t=>{Tr=t},onWelcome:t=>{Tr="connected",Number.isFinite(t.serverNowMs)&&(Co=t.serverNowMs-Date.now()),_s.applyWelcome(t.players??[]);for(const e of t.blocks??[])Ie.setBlock(e.x,e.y,e.z,e.id)},onPlayerJoin:t=>{_s.ensurePlayer(t.id,t)},onPlayerLeave:t=>{_s.removePlayer(t)},onPlayersSnapshot:t=>{Number.isFinite(t.serverNowMs)&&(Co=t.serverNowMs-Date.now()),_s.applySnapshot(t.players??[])},onBlockSet:t=>{Ie.setBlock(t.x,t.y,t.z,t.id)}}),Dn.connect()}const oe={walkSpeed:5.2,flySpeed:11.5,mapWidthBlocks:96,mapHeightBlocks:96,bgmVolume:.1,healthEnabled:!0,agroEnabled:!0};let ln=Zn,Ia=0,Nr=0;function su(i){bs.volume=Math.max(0,Math.min(1,i))}function $o(){bs.paused&&bs.play().catch(()=>{})}Ht.setMovementSpeeds(oe.walkSpeed,oe.flySpeed);qo.setBlockSpan(oe.mapWidthBlocks,oe.mapHeightBlocks);su(oe.bgmVolume);Gt.setupDebugPane(oe,i=>{i.walkSpeed!==void 0&&(oe.walkSpeed=i.walkSpeed),i.flySpeed!==void 0&&(oe.flySpeed=Math.min(300,i.flySpeed)),i.mapWidthBlocks!==void 0&&(oe.mapWidthBlocks=Math.max(24,Math.min(192,i.mapWidthBlocks))),i.mapHeightBlocks!==void 0&&(oe.mapHeightBlocks=Math.max(24,Math.min(192,i.mapHeightBlocks))),i.bgmVolume!==void 0&&(oe.bgmVolume=Math.max(0,Math.min(1,i.bgmVolume))),i.healthEnabled!==void 0&&(oe.healthEnabled=i.healthEnabled,oe.healthEnabled||(ln=Zn)),i.agroEnabled!==void 0&&(oe.agroEnabled=i.agroEnabled),Ht.setMovementSpeeds(oe.walkSpeed,oe.flySpeed),qo.setBlockSpan(oe.mapWidthBlocks,oe.mapHeightBlocks),su(oe.bgmVolume),$o()});Gt.setHotbarSelection(0);const Fr=new N,La=n_(xn),Ko=u_(),{crackOverlay:Ts,crackOverlayMat:ru}=h_(xn,Ko),E_=new kt(9031679),y_=new kt(0),Da=new kt,tn={breakState:null,leftMouseDown:!1,suppressBreakUntilMouseUp:!1};let Yn=0,cn=null,vs=null,au=new N(0,40,0);function Mi(){return Gt.isInventoryOpen()||Gt.isDialogueOpen()||Gt.isDebugOpen()||!Vr}function jn(){const i=document.pointerLockElement===en;Gt.setOverlayVisible(!i&&!Mi())}function b_(i,t){for(let e=127;e>=1;e--)if(Ao(Ie.getBlock(i,e,t))&&!Ao(Ie.getBlock(i,e+1,t)))return e+1;return 45}Ht.position.set(.5,b_(0,0)+2,.5);au.copy(Ht.position);Ht.syncCamera();function T_(){ei.aspect=window.innerWidth/window.innerHeight,ei.updateProjectionMatrix(),tu.setSize(window.innerWidth,window.innerHeight)}function A_(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function R_(i){const n=(i%or+or)%or/or*Math.PI*2,s=Math.sin(n),r=n-Math.PI*.5,a=280,o=Ht.position.y+s*230,l=Ht.position.x+Math.cos(r)*a,c=Ht.position.z+Math.sin(r)*a;ms.position.set(l,o,c),ms.target.position.set(Ht.position.x,Ht.position.y,Ht.position.z),ms.target.updateMatrixWorld();const u=A_(-.03,.2,s);ms.intensity=.02+u*1.06,d_.intensity=.05+u*.3,ms.castShadow=u>.03;const h=92,f=Math.sqrt(Math.max(0,1-s*s)),d=Math.cos(r)*f,g=s,_=Math.sin(r)*f;fr.position.set(Ht.position.x+d*h,Ht.position.y+g*h,Ht.position.z+_*h);const m=s>-.03;if(fr.visible=m,m){const p=fr.children[0],y=fr.children[1];p.material.opacity=.2+u*.45,y.scale.setScalar(.85+u*.25)}return Da.lerpColors(y_,E_,u),xn.background.copy(Da),xn.fog&&xn.fog.color.copy(Da),u}window.addEventListener("resize",T_);window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("pointerdown",$o);window.addEventListener("keydown",$o);en.addEventListener("click",()=>{Vr&&(Mi()||document.pointerLockElement!==en&&en.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==en&&(tn.leftMouseDown=!1,tn.suppressBreakUntilMouseUp=!1,vi(tn,Ts)),jn()});window.addEventListener("wheel",i=>{document.pointerLockElement!==en||Mi()||(Yn+=i.deltaY>0?1:-1,Yn<0&&(Yn=Gt.hotbarSize-1),Yn>=Gt.hotbarSize&&(Yn=0),Gt.setHotbarSelection(Yn))});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&Gt.isDialogueOpen()){wo.closeDialogue(),jn();return}if(i.code==="KeyU"){const t=!Gt.isDebugOpen();Gt.setDebugVisible(t),t?document.exitPointerLock():!Gt.isInventoryOpen()&&!Gt.isDialogueOpen()&&en.requestPointerLock(),jn();return}if(i.code==="KeyE"){if(Gt.isDialogueOpen())return;Gt.isInventoryOpen()?(Gt.setInventoryVisible(!1),Gt.isDebugOpen()||en.requestPointerLock()):(Gt.setInventoryVisible(!0),document.exitPointerLock()),jn();return}if(i.code==="KeyR"){if(!oe.healthEnabled||ln>=Zn)return;Gt.consumeItem(A.APPLE,1)&&(ln=Math.min(Zn,ln+25));return}if(i.code==="KeyF"){if(Gt.isDialogueOpen())return;vs&&(document.exitPointerLock(),wo.onTalkToQuestGiver(vs),jn());return}if(/Digit[1-9]/.test(i.code)){const t=Number(i.code.slice(-1))-1;t>=0&&t<Gt.hotbarSize&&(Yn=t,Gt.setHotbarSelection(Yn))}});window.addEventListener("mousedown",i=>{if(Vr&&!(document.pointerLockElement!==en||Mi())){if(i.button===0){if(tn.leftMouseDown=!0,Nr<=0){ei.getWorldDirection(Fr);const t=br.attackNearestInFront(ei.position,Fr,i_,s_,l_(Gt.getSelectedBlock()));if(Nr=a_,t){tn.suppressBreakUntilMouseUp=!0,vi(tn,Ts);return}}tn.suppressBreakUntilMouseUp=!1,Qc(cn,tn,Ts,ru,Ko)}if(i.button===2){if(!cn)return;const t=cn.previous.x,e=cn.previous.y,n=cn.previous.z;if(Ie.getBlock(t,e,n)!==A.AIR||!c_(Ht,t,e,n))return;const s=Gt.getSelectedBlock();if(o_.has(s)||!Gt.consumeSelectedBlock())return;Ie.setBlock(t,e,n,s),Dn?.sendBlockSet(t,e,n,s)}}});window.addEventListener("mouseup",i=>{i.button===0&&(tn.leftMouseDown=!1,tn.suppressBreakUntilMouseUp=!1,vi(tn,Ts))});let pc=performance.now(),dr=0,Ua=0,Na=0;function ou(i){const t=Math.min(.05,(i-pc)/1e3);pc=i;const e=(Date.now()+Co)/1e3;Nr=Math.max(0,Nr-t);const n=R_(e);if(g_.update(Ht.position,t,e,n),Dn?.tick(t),Mi()||Ht.update(Ie,t),Dn?.setLocalState({x:Ht.position.x,y:Ht.position.y,z:Ht.position.z,yaw:Ht.yaw,pitch:Ht.pitch,flyMode:Ht.flyMode}),Na+=t,Na>=.14&&(Ie.loadChunksAround(Ht.position.x,Ht.position.z),Na=0),Ie.rebuildOneChunk(),Ie.rebuildOneChunk(),br.update(Ht.position,t,e,oe.agroEnabled),oe.healthEnabled){if(Ia-=t,oe.agroEnabled&&Ia<=0){const a=br.countHostilesInRange(Ht.position,1.8);a>0&&(ln=Math.max(0,ln-Math.min(18,a*6)),Ia=.45)}ln<=0&&(ln=Zn,Ht.position.copy(au),Ht.velocity.set(0,0,0),Ht.syncCamera())}else ln=Zn;vs=br.getNearestQuestGiver(Ht.position,4.2),ei.getWorldDirection(Fr),cn=Dg(Ie,ei.position,Fr,I0),f_(t,tn,en,cn,Ie,Gt,Ts,ru,Ko,Mi,(a,o,l)=>Dn?.sendBlockSet(a,o,l,A.AIR)),cn&&!Mi()?(La.visible=!0,La.position.set(cn.x+.5,cn.y+.5,cn.z+.5)):La.visible=!1;let s=wo.getActiveQuestText();const r=Tr==="connected"?"MP: Online":"MP: Offline";if(s=s?`${s} | ${r}`:r,vs&&!Gt.isInventoryOpen()){const a=`Press F to talk to ${vs.name}`;s=s?`${s} | ${a}`:a}Gt.getItemCount(A.APPLE)>0&&oe.healthEnabled&&ln<Zn&&(s=s?`${s} | Press R to eat Apple`:"Press R to eat Apple"),Gt.setHint(s),Gt.updateHealth(ln,Zn,oe.healthEnabled),Gt.updateMode(Ht.flyMode),Gt.updateCoords(Ht.position),jn(),dr+=t,Ua++,dr>=.25&&(Gt.updateFPS(Ua/dr),dr=0,Ua=0),qo.render(Ie,Ht.position,timeSec),_s.update(t),tu.render(xn,ei),requestAnimationFrame(ou)}Ie.loadChunksAround(Ht.position.x,Ht.position.z);jn();iu(!0);Gr.value=M_();Gr.focus();nu.addEventListener("click",()=>{const i=(Gr.value||"").trim();i&&(localStorage.setItem("voxel_player_name",i),Vr=!0,iu(!1),S_(i),jn())});Gr.addEventListener("keydown",i=>{i.key==="Enter"&&nu.click()});requestAnimationFrame(ou);
