(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const io="176",Oc=0,Co=1,Bc=2,Wl=1,zc=2,Rn=3,Kn=0,Be=1,an=2,Wn=0,zi=1,Io=2,Po=3,Lo=4,kc=5,oi=100,Hc=101,Gc=102,Vc=103,Wc=104,Xc=200,Yc=201,qc=202,Kc=203,fa=204,da=205,$c=206,Zc=207,jc=208,Jc=209,Qc=210,tu=211,eu=212,nu=213,iu=214,pa=0,ma=1,ga=2,Hi=3,_a=4,va=5,xa=6,Ma=7,so=0,su=1,ru=2,Xn=0,au=1,ou=2,lu=3,cu=4,uu=5,hu=6,fu=7,Xl=300,Gi=301,Vi=302,Sa=303,Ea=304,Mr=306,ya=1e3,ui=1001,Ta=1002,je=1003,du=1004,pu=1004,Es=1005,on=1006,Ar=1007,hi=1008,_n=1009,Yl=1010,ql=1011,fs=1012,ro=1013,di=1014,wn=1015,gs=1016,ao=1017,oo=1018,ds=1020,Kl=35902,$l=1021,Zl=1022,ln=1023,ps=1026,ms=1027,jl=1028,lo=1029,Jl=1030,co=1031,uo=1033,nr=33776,ir=33777,sr=33778,rr=33779,ba=35840,Aa=35841,Ra=35842,wa=35843,Ca=36196,Ia=37492,Pa=37496,La=37808,Da=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,ka=37816,Ha=37817,Ga=37818,Va=37819,Wa=37820,Xa=37821,ar=36492,Ya=36494,qa=36495,Ql=36283,Ka=36284,$a=36285,Za=36286,mu=3200,gu=3201,tc=0,_u=1,Hn="",Oe="srgb",Wi="srgb-linear",fr="linear",ne="srgb",vi=7680,Do=519,vu=512,xu=513,Mu=514,ec=515,Su=516,Eu=517,yu=518,Tu=519,ja=35044,Uo="300 es",Cn=2e3,dr=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,Ja=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function bu(i,t){return(i%t+t)%t}function Rr(i,t,e){return(1-e)*i+e*t}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],b=s[1],T=s[4],E=s[7],P=s[2],C=s[5],A=s[8];return r[0]=a*_+o*b+l*P,r[3]=a*m+o*T+l*C,r[6]=a*d+o*E+l*A,r[1]=c*_+u*b+h*P,r[4]=c*m+u*T+h*C,r[7]=c*d+u*E+h*A,r[2]=f*_+p*b+g*P,r[5]=f*m+p*T+g*C,r[8]=f*d+p*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new Nt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Au(){const i=pr("canvas");return i.style.display="block",i}const No={};function lr(i){i in No||(No[i]=!0,console.warn(i))}function Ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fo=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oo=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iu(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?fr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const Zt=Iu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class Pu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xi===void 0&&(xi=pr("canvas")),xi.width=t.width,xi.height=t.height;const s=xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lu=0;class ho{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cr(s[a].image)):r.push(Cr(s[a]))}else r=Cr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Du=0;class Ue extends qi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ui,s=ui,r=on,a=hi,o=ln,l=_n,c=Ue.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Yn(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Xl;Ue.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(p+1)/2,P=(d+1)/2,C=(u+f)/4,A=(h+_)/4,F=(g+m)/4;return T>E&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=A/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=F/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ho(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Uu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ic extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const P=Math.sqrt(T),C=Math.atan2(P,d*b);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const E=o*b;if(l=l*m+f*E,c=c*m+p*E,u=u*m+g*E,h=h*m+_*E,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new N,Bo=new _s;class vs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Ts.subVectors(this.max,Zi),Mi.subVectors(t.a,Zi),Si.subVectors(t.b,Zi),Ei.subVectors(t.c,Zi),Pn.subVectors(Si,Mi),Ln.subVectors(Ei,Si),Qn.subVectors(Mi,Ei);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Qn.z,Qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Qn.z,0,-Qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Qn.y,Qn.x,0];return!Pr(e,Mi,Si,Ei,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,Mi,Si,Ei,Ts))?!1:(bs.crossVectors(Pn,Ln),e=[bs.x,bs.y,bs.z],Pr(e,Mi,Si,Ei,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new N,new N,new N,new N,new N,new N,new N,new N],en=new N,ys=new vs,Mi=new N,Si=new N,Ei=new N,Pn=new N,Ln=new N,Qn=new N,Zi=new N,Ts=new N,bs=new N,ti=new N;function Pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fu=new vs,ji=new N,Lr=new N;class Sr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Lr)),this.expandByPoint(ji.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new N,Dr=new N,As=new N,Dn=new N,Ur=new N,Rs=new N,Nr=new N;class fo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Dr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Dn.dot(this.direction),l=-Dn.dot(As),c=Dn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dr).addScaledVector(As,f),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Ur.subVectors(e,t),Rs.subVectors(n,t),Nr.crossVectors(Ur,Rs);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=o*this.direction.dot(Rs.crossVectors(Dn,Rs));if(l<0)return null;const c=o*this.direction.dot(Ur.cross(Dn));if(c<0||l+c>a)return null;const u=-o*Dn.dot(Nr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,l,c,u,h,f,p,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,Bu)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Un.crossVectors(n,ke),Un.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Un.crossVectors(n,ke)),Un.normalize(),ws.crossVectors(ke,Un),s[0]=Un.x,s[4]=ws.x,s[8]=ke.x,s[1]=Un.y,s[5]=ws.y,s[9]=ke.y,s[2]=Un.z,s[6]=ws.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],T=n[7],E=n[11],P=n[15],C=s[0],A=s[4],F=s[8],S=s[12],M=s[1],w=s[5],W=s[9],k=s[13],$=s[2],K=s[6],V=s[10],j=s[14],H=s[3],st=s[7],ft=s[11],xt=s[15];return r[0]=a*C+o*M+l*$+c*H,r[4]=a*A+o*w+l*K+c*st,r[8]=a*F+o*W+l*V+c*ft,r[12]=a*S+o*k+l*j+c*xt,r[1]=u*C+h*M+f*$+p*H,r[5]=u*A+h*w+f*K+p*st,r[9]=u*F+h*W+f*V+p*ft,r[13]=u*S+h*k+f*j+p*xt,r[2]=g*C+_*M+m*$+d*H,r[6]=g*A+_*w+m*K+d*st,r[10]=g*F+_*W+m*V+d*ft,r[14]=g*S+_*k+m*j+d*xt,r[3]=b*C+T*M+E*$+P*H,r[7]=b*A+T*w+E*K+P*st,r[11]=b*F+T*W+E*V+P*ft,r[15]=b*S+T*k+E*j+P*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,T=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,E=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,P=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,C=e*b+n*T+s*E+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=b*A,t[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*A,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*A,t[4]=T*A,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*A,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*A,t[8]=E*A,t[9]=(g*h*r-u*_*r-g*n*p+e*_*p+u*n*d-e*h*d)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*A,t[12]=P*A,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,_=a*u,m=a*h,d=o*h,b=l*c,T=l*u,E=l*h,P=n.x,C=n.y,A=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+E)*P,s[2]=(g-T)*P,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(f+d))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+T)*A,s[9]=(m-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Cn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Cn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===dr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,p=(n+s)*u;let g,_;if(o===Cn)g=(a+r)*h,_=-2*h;else if(o===dr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new N,nn=new ae,Ou=new N(0,0,0),Bu=new N(1,1,1),Un=new N,ws=new N,ke=new N,zo=new ae,ko=new _s;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zu=0;const Ho=new N,Ti=new _s,En=new ae,Cs=new N,Ji=new N,ku=new N,Hu=new _s,Go=new N(1,0,0),Vo=new N(0,1,0),Wo=new N(0,0,1),Xo={type:"added"},Gu={type:"removed"},bi={type:"childadded",child:null},Fr={type:"childremoved",child:null};class Me extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new N,e=new vn,n=new _s,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(Vo,t)}rotateZ(t){return this.rotateOnAxis(Wo,t)}translateOnAxis(t,e){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(Vo,t)}translateZ(t){return this.translateOnAxis(Wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ji,Cs,this.up):En.lookAt(Cs,Ji,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xo),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xo),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new N(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,yn=new N,Or=new N,Tn=new N,Ai=new N,Ri=new N,Yo=new N,Br=new N,zr=new N,kr=new N,Hr=new he,Gr=new he,Vr=new he;class Ge{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),yn.subVectors(n,e),Or.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(yn),l=sn.dot(Or),c=yn.dot(yn),u=yn.dot(Or),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hr.setScalar(0),Gr.setScalar(0),Vr.setScalar(0),Hr.fromBufferAttribute(t,e),Gr.fromBufferAttribute(t,n),Vr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Vr,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),yn.subVectors(t,e),sn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ri.subVectors(r,n),Br.subVectors(t,n);const l=Ai.dot(Br),c=Ri.dot(Br);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,s);const u=Ai.dot(zr),h=Ri.dot(zr);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ai,a);kr.subVectors(t,r);const p=Ai.dot(kr),g=Ri.dot(kr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ri,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Yo.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Yo,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=bu(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wr(a,r,t+1/3),this.g=Wr(a,r,t),this.b=Wr(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Zt.fromWorkingColorSpace(be.copy(this),t),Math.round(Gt(be.r*255,0,255))*65536+Math.round(Gt(be.g*255,0,255))*256+Math.round(Gt(be.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Oe){Zt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Is);const n=Rr(Nn.h,Is.h,e),s=Rr(Nn.s,Is.s,e),r=Rr(Nn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Vt;Vt.NAMES=sc;let Vu=0;class mi extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=zi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mo extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new N,Ps=new Bt;let Wu=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class rc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xu=0;const Ke=new ae,Xr=new Me,wi=new N,He=new vs,Qi=new vs,xe=new N;class Je extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?ac:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(He.min,Qi.min),He.expandByPoint(xe),xe.addVectors(He.max,Qi.max),He.expandByPoint(xe)):(He.expandByPoint(Qi.min),He.expandByPoint(Qi.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xe.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),xe.add(wi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;const c=new N,u=new N,h=new N,f=new Bt,p=new Bt,g=new Bt,_=new N,m=new N;function d(F,S,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),o[F].add(_),o[S].add(_),o[M].add(_),l[F].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,S=b.length;F<S;++F){const M=b[F],w=M.start,W=M.count;for(let k=w,$=w+W;k<$;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new N,E=new N,P=new N,C=new N;function A(F){P.fromBufferAttribute(s,F),C.copy(P);const S=o[F];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(C,S);const w=E.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,w)}for(let F=0,S=b.length;F<S;++F){const M=b[F],w=M.start,W=M.count;for(let k=w,$=w+W;k<$;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new ae,ei=new fo,Ls=new Sr,Ko=new N,Ds=new N,Us=new N,Ns=new N,Yr=new N,Fs=new N,$o=new N,Os=new N;class We extends Me{constructor(t=new Je,e=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Yr.fromBufferAttribute(h,t),a?Fs.addScaledVector(Yr,u):Fs.addScaledVector(Yr.sub(e),u))}e.add(Fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Ls.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ls,Ko)===null||ei.origin.distanceToSquared(Ko)>(t.far-t.near)**2))&&(qo.copy(r).invert(),ei.copy(t.ray).applyMatrix4(qo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,P=T;E<P;E+=3){const C=o.getX(E),A=o.getX(E+1),F=o.getX(E+2);s=Bs(this,d,t,n,c,u,h,C,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);s=Bs(this,a,t,n,c,u,h,b,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,P=T;E<P;E+=3){const C=E,A=E+1,F=E+2;s=Bs(this,d,t,n,c,u,h,C,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,T=m+1,E=m+2;s=Bs(this,a,t,n,c,u,h,b,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Yu(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);const u=Yu(i,t,e,n,Ds,Us,Ns,$o);if(u){const h=new N;Ge.getBarycoord($o,Ds,Us,Ns,h),s&&(u.uv=Ge.getInterpolatedAttribute(s,o,l,c,h,new Bt)),r&&(u.uv1=Ge.getInterpolatedAttribute(r,o,l,c,h,new Bt)),a&&(u.normal=Ge.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Ge.getNormal(Ds,Us,Ns,f.normal),u.face=f,u.barycoord=h}return u}class gi extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function g(_,m,d,b,T,E,P,C,A,F,S){const M=E/A,w=P/F,W=E/2,k=P/2,$=C/2,K=A+1,V=F+1;let j=0,H=0;const st=new N;for(let ft=0;ft<V;ft++){const xt=ft*w-k;for(let At=0;At<K;At++){const ee=At*M-W;st[_]=ee*b,st[m]=xt*T,st[d]=$,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=C>0?1:-1,u.push(st.x,st.y,st.z),h.push(At/A),h.push(1-ft/F),j+=1}}for(let ft=0;ft<F;ft++)for(let xt=0;xt<A;xt++){const At=f+xt+K*ft,ee=f+xt+K*(ft+1),Y=f+(xt+1)+K*(ft+1),et=f+(xt+1)+K*ft;l.push(At,ee,et),l.push(ee,Y,et),H+=6}o.addGroup(p,H,S),p+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function qu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ku={clone:Xi,merge:Le};var $u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new N,Zo=new Bt,jo=new Bt;class Ze extends lc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Zo,jo),e.subVectors(jo,Zo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ii=1;class ju extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Ci,Ii,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Ci,Ii,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Ci,Ii,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Ci,Ii,t,e);o.layers=this.layers,this.add(o);const l=new Ze(Ci,Ii,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Ci,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Ue{constructor(t=[],e=Gi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ju extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Wn});r.uniforms.tEquirect.value=e;const a=new We(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=on),new ju(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class os extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class go{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class th extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new N;class mr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uc extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const ts=new N,Li=new N,Di=new N,Ui=new Bt,es=new Bt,hc=new ae,zs=new N,ns=new N,ks=new N,Jo=new Bt,Kr=new Bt,Qo=new Bt;class nh extends Me{constructor(t=new uc){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eh(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new mr(n,3,0,!1)),Pi.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Hs(zs.set(-.5,-.5,0),Di,a,Li,s,r),Hs(ns.set(.5,-.5,0),Di,a,Li,s,r),Hs(ks.set(.5,.5,0),Di,a,Li,s,r),Jo.set(0,0),Kr.set(1,0),Qo.set(1,1);let o=t.ray.intersectTriangle(zs,ns,ks,!1,ts);if(o===null&&(Hs(ns.set(-.5,.5,0),Di,a,Li,s,r),Kr.set(0,1),o=t.ray.intersectTriangle(zs,ks,ns,!1,ts),o===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:Ge.getInterpolation(ts,zs,ns,ks,Jo,Kr,Qo,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hs(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(es.x=r*Ui.x-s*Ui.y,es.y=s*Ui.x+r*Ui.y):es.copy(Ui),i.copy(t),i.x+=es.x,i.y+=es.y,i.applyMatrix4(hc)}const $r=new N,ih=new N,sh=new Nt;class ri{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$r.subVectors(n,e).cross(ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sh.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Sr,Gs=new N;class _o{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],b=s[13],T=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-p,E-d).normalize(),n[1].setComponents(l+r,f+c,m+p,E+d).normalize(),n[2].setComponents(l+a,f+u,m+g,E+b).normalize(),n[3].setComponents(l-a,f-u,m-g,E-b).normalize(),n[4].setComponents(l-o,f-h,m-_,E-T).normalize(),e===Cn)n[5].setComponents(l+o,f+h,m+_,E+T).normalize();else if(e===dr)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fc extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new N,_r=new N,tl=new ae,is=new fo,Vs=new Sr,Zr=new N,el=new N;class rh extends Me{constructor(t=new Je,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;tl.copy(s).invert(),is.copy(t.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),b=u.getX(_+1),T=Ws(this,t,is,l,d,b,_);T&&e.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Ws(this,t,is,l,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=Ws(this,t,is,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Ws(this,t,is,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,Zr,el)>n)return;Zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zr);if(!(c<t.near||c>t.far))return{distance:c,point:el.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const nl=new N,il=new N;class ah extends rh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nl.fromBufferAttribute(e,s),il.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nl.distanceTo(il);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dc extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pc extends Ue{constructor(t,e,n=di,s,r,a,o=je,l=je,c,u=ps){if(u!==ps&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xs=new N,Ys=new N,jr=new N,qs=new Ge;class oh extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(or*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=qs;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),qs.getNormal(jr),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const T=(b+1)%3,E=h[b],P=h[T],C=qs[u[b]],A=qs[u[T]],F=`${E}_${P}`,S=`${P}_${E}`;S in f&&f[S]?(jr.dot(f[S].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(A.x,A.y,A.z)),f[S]=null):F in f||(f[F]={index0:c[b],index1:c[T],normal:jr.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Xs.fromBufferAttribute(o,_),Ys.fromBufferAttribute(o,m),p.push(Xs.x,Xs.y,Xs.z),p.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new Ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Er extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let T=0;T<c;T++){const E=T*h-r;g.push(E,-b,0),_.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const T=b+c*d,E=b+c*(d+1),P=b+1+c*(d+1),C=b+1+c*d;p.push(T,E,C),p.push(E,P,C)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.width,t.height,t.widthSegments,t.heightSegments)}}class vo extends Je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new N,g=new Bt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const b=d+m,T=b,E=b+n+1,P=b+n+2,C=b+1;o.push(T,E,C),o.push(E,P,C)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xo extends mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lh extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ch extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Jr=new ae,sl=new N,rl=new N;class uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(sl),rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rl),e.updateMatrixWorld(),Jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gc extends lc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hh extends uh{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dh extends mc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ph extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const al=new ae;class mh{constructor(t,e,n=0,s=1/0){this.ray=new fo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return al.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(al),this}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(ol),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Qa(t[s],this,n,e);return n.sort(ol),n}}function ol(i,t){return i.distance-t.distance}function Qa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Qa(r[a],t,e,!0)}}function ll(i,t,e,n){const s=gh(n);switch(e){case $l:return i*t;case jl:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case Jl:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case Zl:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case uo:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case wa:return Math.max(i,16)*Math.max(t,8)/4;case ba:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case Ya:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gh(i){switch(i){case _n:case Yl:return{byteLength:1,components:1};case fs:case ql:case gs:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case di:case ro:case wn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function _c(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _h(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
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
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Th=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ah=`#ifdef USE_BATCHING
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
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hh=`#define PI 3.141592653589793
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
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vh=`vec3 transformedNormal = objectNormal;
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
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,_f=`struct PhysicalMaterial {
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
}`,vf=`
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,id=`float getShadowMask() {
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
}`,sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,od=`#ifdef USE_SKINNING
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
#endif`,ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fd=`#ifdef USE_TRANSMISSION
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
#endif`,dd=`#ifdef USE_TRANSMISSION
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xd=`uniform sampler2D t2D;
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`#include <common>
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
}`,bd=`#if DEPTH_PACKING == 3200
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
}`,Ad=`#define DISTANCE
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
}`,Rd=`#define DISTANCE
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Ud=`#define LAMBERT
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
}`,Nd=`#define LAMBERT
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
}`,Fd=`#define MATCAP
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
}`,Od=`#define MATCAP
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
}`,Bd=`#define NORMAL
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
}`,zd=`#define NORMAL
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
}`,kd=`#define PHONG
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
}`,Hd=`#define PHONG
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
}`,Gd=`#define STANDARD
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
}`,Vd=`#define STANDARD
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
}`,Wd=`#define TOON
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
}`,Xd=`#define TOON
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
}`,Yd=`uniform float size;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,$d=`uniform vec3 color;
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
}`,Zd=`uniform float rotation;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:Mh,alphamap_pars_fragment:Sh,alphatest_fragment:Eh,alphatest_pars_fragment:yh,aomap_fragment:Th,aomap_pars_fragment:bh,batching_pars_vertex:Ah,batching_vertex:Rh,begin_vertex:wh,beginnormal_vertex:Ch,bsdfs:Ih,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Fh,color_fragment:Oh,color_pars_fragment:Bh,color_pars_vertex:zh,color_vertex:kh,common:Hh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:Yh,emissivemap_pars_fragment:qh,colorspace_fragment:Kh,colorspace_pars_fragment:$h,envmap_fragment:Zh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:hf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:uf,lights_toon_fragment:ff,lights_toon_pars_fragment:df,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:xf,lights_fragment_end:Mf,logdepthbuf_fragment:Sf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:Tf,map_fragment:bf,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:wf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:If,morphinstance_vertex:Pf,morphcolor_vertex:Lf,morphnormal_vertex:Df,morphtarget_pars_vertex:Uf,morphtarget_vertex:Nf,normal_fragment_begin:Ff,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:Yf,packing:qf,premultiplied_alpha_fragment:Kf,project_vertex:$f,dithering_fragment:Zf,dithering_pars_fragment:jf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:td,shadowmap_pars_vertex:ed,shadowmap_vertex:nd,shadowmask_pars_fragment:id,skinbase_vertex:sd,skinning_pars_vertex:rd,skinning_vertex:ad,skinnormal_vertex:od,specularmap_fragment:ld,specularmap_pars_fragment:cd,tonemapping_fragment:ud,tonemapping_pars_fragment:hd,transmission_fragment:fd,transmission_pars_fragment:dd,uv_pars_fragment:pd,uv_pars_vertex:md,uv_vertex:gd,worldpos_vertex:_d,background_vert:vd,background_frag:xd,backgroundCube_vert:Md,backgroundCube_frag:Sd,cube_vert:Ed,cube_frag:yd,depth_vert:Td,depth_frag:bd,distanceRGBA_vert:Ad,distanceRGBA_frag:Rd,equirect_vert:wd,equirect_frag:Cd,linedashed_vert:Id,linedashed_frag:Pd,meshbasic_vert:Ld,meshbasic_frag:Dd,meshlambert_vert:Ud,meshlambert_frag:Nd,meshmatcap_vert:Fd,meshmatcap_frag:Od,meshnormal_vert:Bd,meshnormal_frag:zd,meshphong_vert:kd,meshphong_frag:Hd,meshphysical_vert:Gd,meshphysical_frag:Vd,meshtoon_vert:Wd,meshtoon_frag:Xd,points_vert:Yd,points_frag:qd,shadow_vert:Kd,shadow_frag:$d,sprite_vert:Zd,sprite_frag:jd},it={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},pn={basic:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Le([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Le([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Le([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Le([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Le([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Le([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Le([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Le([it.lights,it.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};pn.physical={uniforms:Le([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ks={r:0,b:0,g:0},ii=new vn,Jd=new ae;function Qd(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function _(T){let E=!1;const P=g(T);P===null?d(o,l):P&&P.isColor&&(d(P,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const P=g(E);P&&(P.isCubeTexture||P.mapping===Mr)?(u===void 0&&(u=new We(new gi(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Xi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(ii)),u.material.toneMapped=Zt.getTransfer(P.colorSpace)!==ne,(h!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new We(new Er(2,2),new $n({name:"BackgroundMaterial",uniforms:Xi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(P.colorSpace)!==ne,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,E){T.getRGB(Ks,oc(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,E,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:m,dispose:b}}function tp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,w,W,k,$){let K=!1;const V=h(k,W,w);r!==V&&(r=V,c(r.object)),K=p(M,k,W,$),K&&g(M,k,W,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(M,w,W,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,w,W){const k=W.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let K=$[w.id];K===void 0&&(K={},$[w.id]=K);let V=K[k];return V===void 0&&(V=f(l()),K[k]=V),V}function f(M){const w=[],W=[],k=[];for(let $=0;$<e;$++)w[$]=0,W[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,w,W,k){const $=r.attributes,K=w.attributes;let V=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){const ft=$[H];let xt=K[H];if(xt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ft===void 0||ft.attribute!==xt||xt&&ft.data!==xt.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function g(M,w,W,k){const $={},K=w.attributes;let V=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){let ft=K[H];ft===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const xt={};xt.attribute=ft,ft&&ft.data&&(xt.data=ft.data),$[H]=xt,V++}r.attributes=$,r.attributesNum=V,r.index=k}function _(){const M=r.newAttributes;for(let w=0,W=M.length;w<W;w++)M[w]=0}function m(M){d(M,0)}function d(M,w){const W=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;W[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),$[M]!==w&&(i.vertexAttribDivisor(M,w),$[M]=w)}function b(){const M=r.newAttributes,w=r.enabledAttributes;for(let W=0,k=w.length;W<k;W++)w[W]!==M[W]&&(i.disableVertexAttribArray(W),w[W]=0)}function T(M,w,W,k,$,K,V){V===!0?i.vertexAttribIPointer(M,w,W,$,K):i.vertexAttribPointer(M,w,W,k,$,K)}function E(M,w,W,k){_();const $=k.attributes,K=W.getAttributes(),V=w.defaultAttributeValues;for(const j in K){const H=K[j];if(H.location>=0){let st=$[j];if(st===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ft=st.normalized,xt=st.itemSize,At=t.get(st);if(At===void 0)continue;const ee=At.buffer,Y=At.type,et=At.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===ro;if(st.isInterleavedBufferAttribute){const ot=st.data,Tt=ot.stride,jt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)d(H.location+Ct,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ct=0;Ct<H.locationSize;Ct++)T(H.location+Ct,xt/H.locationSize,Y,ft,Tt*et,(jt+xt/H.locationSize*Ct)*et,_t)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ot=0;ot<H.locationSize;ot++)T(H.location+ot,xt/H.locationSize,Y,ft,xt*et,xt/H.locationSize*ot*et,_t)}}else if(V!==void 0){const ft=V[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}b()}function P(){F();for(const M in n){const w=n[M];for(const W in w){const k=w[W];for(const $ in k)u(k[$].object),delete k[$];delete w[W]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const W in w){const k=w[W];for(const $ in k)u(k[$].object),delete k[$];delete w[W]}delete n[M.id]}function A(M){for(const w in n){const W=n[w];if(W[M.id]===void 0)continue;const k=W[M.id];for(const $ in k)u(k[$].object),delete k[$];delete W[M.id]}}function F(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function ep(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const F=A===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!F)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:P,maxSamples:C}}function ip(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,T=b*4;let E=d.clippingState||null;l.value=E,E=u(g,f,T,p);for(let P=0;P!==T;++P)E[P]=e[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,E=p;T!==_;++T,E+=4)a.copy(h[T]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sp(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Gi:o===Ea&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ju(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Oi=4,cl=[.125,.215,.35,.446,.526,.582],li=20,Qr=new gc,ul=new Vt;let ta=null,ea=0,na=0,ia=!1;const ai=(1+Math.sqrt(5))/2,Ni=1/ai,hl=[new N(-ai,Ni,0),new N(ai,Ni,0),new N(-Ni,0,ai),new N(Ni,0,ai),new N(0,ai,-Ni),new N(0,ai,Ni),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],rp=new N;class fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=rp}=r;ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:gs,format:ln,colorSpace:Wi,depthBuffer:!1},s=dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(r)),this._blurMaterial=op(r,t,e)}return s}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s,r){const l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ul),h.toneMapping=Xn,h.autoClear=!1;const g=new mo({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new We(new gi,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(ul),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):T===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const E=this._cubeSize;$s(s,T*E,b>2?E:0,E,E),h.setRenderTarget(s),m&&h.render(_,l),h.render(t,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hl[(s-r-1)%hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const d=[];let b=0;for(let A=0;A<li;++A){const F=A/_,S=Math.exp(-F*F/2);d.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const E=this._sizeLods[s],P=3*E*(s>T-Oi?s-T+Oi:0),C=4*(this._cubeSize-E);$s(e,P,C,3*E,2*E),l.setRenderTarget(e),l.render(h,Qr)}}function ap(i){const t=[],e=[],n=[];let s=i;const r=i-Oi+1+cl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Oi?l=cl[a-i+Oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),T=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,F=C>2?0:-1,S=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];b.set(S,_*g*C),T.set(f,m*g*C);const M=[C,C,C,C,C,C];E.set(M,d*g*C)}const P=new Je;P.setAttribute("position",new cn(b,_)),P.setAttribute("uv",new cn(T,m)),P.setAttribute("faceIndex",new cn(E,d)),t.push(P),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dl(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function op(i,t,e){const n=new Float32Array(li),s=new N(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function pl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ml(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function lp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,u=l===Gi||l===Vi;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new fl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function up(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let T=0,E=b.length;T<E;T+=3){const P=b[T+0],C=b[T+1],A=b[T+2];f.push(P,C,C,A,A,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const P=T+0,C=T+1,A=T+2;f.push(P,C,C,A,A,P)}}else return;const m=new(nc(f)?ac:rc)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function hp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dp(i,t,e){const n=new WeakMap,s=new he;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let P=o.attributes.position.count*E,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*C*4*h),F=new ic(A,P,C,h);F.type=wn,F.needsUpdate=!0;const S=E*4;for(let w=0;w<h;w++){const W=d[w],k=b[w],$=T[w],K=P*C*4*w;for(let V=0;V<W.count;V++){const j=V*S;g===!0&&(s.fromBufferAttribute(W,V),A[K+j+0]=s.x,A[K+j+1]=s.y,A[K+j+2]=s.z,A[K+j+3]=0),_===!0&&(s.fromBufferAttribute(k,V),A[K+j+4]=s.x,A[K+j+5]=s.y,A[K+j+6]=s.z,A[K+j+7]=0),m===!0&&(s.fromBufferAttribute($,V),A[K+j+8]=s.x,A[K+j+9]=s.y,A[K+j+10]=s.z,A[K+j+11]=$.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new Bt(P,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function pp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const vc=new Ue,gl=new pc(1,1),xc=new ic,Mc=new Nu,Sc=new cc,_l=[],vl=[],xl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),ve(e,n)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),ve(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;xl.set(n),i.uniformMatrix4fv(this.addr,!1,xl),ve(e,n)}}function Ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=ec,r=gl):r=vc,e.setTexture2D(t||r,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mc,s)}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sc,s)}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xc,s)}function Up(i){switch(i){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return vp;case 35674:return xp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return Ep;case 35667:case 35671:return yp;case 35668:case 35672:return Tp;case 35669:case 35673:return bp;case 5125:return Ap;case 36294:return Rp;case 36295:return wp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Np(i,t){i.uniform1fv(this.addr,t)}function Fp(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Op(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Bp(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function zp(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kp(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hp(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gp(i,t){i.uniform1iv(this.addr,t)}function Vp(i,t){i.uniform2iv(this.addr,t)}function Wp(i,t){i.uniform3iv(this.addr,t)}function Xp(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function qp(i,t){i.uniform2uiv(this.addr,t)}function Kp(i,t){i.uniform3uiv(this.addr,t)}function $p(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mc,r[a])}function Jp(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sc,r[a])}function Qp(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xc,r[a])}function tm(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return qp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}class em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Up(e.type)}}class nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tm(e.type)}}class im{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function El(i,t){i.seq.push(t),i.map[t.id]=t}function sm(i,t,e){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){El(e,c===void 0?new em(o,i,t):new nm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new im(o),El(e,h)),e=h}}}class cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);sm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function yl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const rm=37297;let am=0;function om(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tl=new Nt;function lm(i){Zt._getMatrix(Tl,Zt.workingColorSpace,i);const t=`mat3( ${Tl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+om(i.getShaderSource(t),a)}else return s}function cm(i,t){const e=lm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function um(i,t){let e;switch(t){case au:e="Linear";break;case ou:e="Reinhard";break;case lu:e="Cineon";break;case cu:e="ACESFilmic";break;case hu:e="AgX";break;case fu:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zs=new N;function hm(){Zt.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function Al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(mm,_m)}const gm=new Map;function _m(i,t){let e=Ot[t];if(e===void 0){const n=gm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(i){return i.replace(vm,xm)}function xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Em(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Vi&&(t="ENVMAP_MODE_REFRACTION"),t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function Tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mm(e),c=Sm(e),u=Em(e),h=ym(e),f=Tm(e),p=fm(e),g=dm(r),_=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),d.length>0&&(d+=`
`)):(m=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),d=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Xn?um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,cm("linearToOutputTexel",e.outputColorSpace),hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=to(a),a=Al(a,e),a=Rl(a,e),o=to(o),o=Al(o,e),o=Rl(o,e),a=wl(a),o=wl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+m+a,E=b+d+o,P=yl(s,s.VERTEX_SHADER,T),C=yl(s,s.FRAGMENT_SHADER,E);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(w){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(P).trim(),$=s.getShaderInfoLog(C).trim();let K=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,C);else{const j=bl(s,P,"vertex"),H=bl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+j+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||$==="")&&(V=!1);V&&(w.diagnostics={runnable:K,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(P),s.deleteShader(C),F=new cr(s,_),S=pm(s,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,rm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=am++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let Am=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=Am++,this.code=t,this.usedTimes=0}}function Cm(i,t,e,n,s,r,a){const o=new po,l=new Rm,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,w,W,k){const $=W.fog,K=k.geometry,V=S.isMeshStandardMaterial?W.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),H=j&&j.mapping===Mr?j.image.height:null,st=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=ft!==void 0?ft.length:0;let At=0;K.morphAttributes.position!==void 0&&(At=1),K.morphAttributes.normal!==void 0&&(At=2),K.morphAttributes.color!==void 0&&(At=3);let ee,Y,et,_t;if(st){const te=pn[st];ee=te.vertexShader,Y=te.fragmentShader}else ee=S.vertexShader,Y=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const ot=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),jt=k.isInstancedMesh===!0,Ct=k.isBatchedMesh===!0,fe=!!S.map,le=!!S.matcap,Wt=!!j,R=!!S.aoMap,Xe=!!S.lightMap,qt=!!S.bumpMap,Xt=!!S.normalMap,St=!!S.displacementMap,re=!!S.emissiveMap,Mt=!!S.metalnessMap,y=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,q=S.dispersion>0,J=S.iridescence>0,X=S.sheen>0,vt=S.transmission>0,lt=v&&!!S.anisotropyMap,bt=O&&!!S.clearcoatMap,Rt=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,pt=J&&!!S.iridescenceMap,wt=J&&!!S.iridescenceThicknessMap,Pt=X&&!!S.sheenColorMap,mt=X&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Ft=!!S.specularColorMap,se=!!S.specularIntensityMap,I=vt&&!!S.transmissionMap,ct=vt&&!!S.thicknessMap,G=!!S.gradientMap,Z=!!S.alphaMap,ht=S.alphaTest>0,ut=!!S.alphaHash,Ut=!!S.extensions;let ce=Xn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ye={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:Y,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&k._colorsTexture!==null,instancing:jt,instancingColor:jt&&k.instanceColor!==null,instancingMorph:jt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Wi,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:le,envMap:Wt,envMapMode:Wt&&j.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Xe,bumpMap:qt,normalMap:Xt,displacementMap:f&&St,emissiveMap:re,normalMapObjectSpace:Xt&&S.normalMapType===_u,normalMapTangentSpace:Xt&&S.normalMapType===tc,metalnessMap:Mt,roughnessMap:y,anisotropy:v,anisotropyMap:lt,clearcoat:O,clearcoatMap:bt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Yt,specularColorMap:Ft,specularIntensityMap:se,transmission:vt,transmissionMap:I,thicknessMap:ct,gradientMap:G,opaque:S.transparent===!1&&S.blending===zi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ut,combine:S.combine,mapUv:fe&&_(S.map.channel),aoMapUv:R&&_(S.aoMap.channel),lightMapUv:Xe&&_(S.lightMap.channel),bumpMapUv:qt&&_(S.bumpMap.channel),normalMapUv:Xt&&_(S.normalMap.channel),displacementMapUv:St&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:y&&_(S.roughnessMap.channel),anisotropyMapUv:lt&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Yt&&_(S.specularMap.channel),specularColorMapUv:Ft&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(fe||Z),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:At,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(b(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=g[S.type];let w;if(M){const W=pn[M];w=Ku.clone(W.uniforms)}else w=S.uniforms;return w}function P(S,M){let w;for(let W=0,k=u.length;W<k;W++){const $=u[W];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new bm(i,M,S,r),u.push(w)),w}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:F}}function Im(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Pm),n.length>1&&n.sort(f||Il),s.length>1&&s.sort(f||Il)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Lm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Pl,i.set(n,[a])):s>=r.length?(a=new Pl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Nm=0;function Fm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Om(i){const t=new Dm,e=Um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ae,a=new ae;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,T=0,E=0,P=0,C=0,A=0;c.sort(Fm);for(let S=0,M=c.length;S<M;S++){const w=c[S],W=w.color,k=w.intensity,$=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=W.r*k,h+=W.g*k,f+=W.b*k;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],k);A++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=w.shadow.matrix,b++}n.directional[p]=V,p++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(W).multiplyScalar(k),V.distance=$,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;const j=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,j.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[_]=j.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,E++}_++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(W).multiplyScalar(k),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=V,m++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,T++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(k),V.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==E||F.numSpotMaps!==P||F.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=E,F.numSpotMaps=P,F.numLightProbes=A,n.version=Nm++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const T=c[d];if(T.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ll(i){const t=new Om(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ll(i),t.set(s,[o])):r>=a.length?(o=new Ll(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
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
}`;function Hm(i,t,e){let n=new _o;const s=new Bt,r=new Bt,a=new he,o=new lh({depthPacking:gu}),l=new ch,c={},u=e.maxTextureSize,h={[Kn]:Be,[Be]:Kn,[an]:an},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:zm,fragmentShader:km}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let d=this.type;this.render=function(C,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Wn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=d!==Rn&&this.type===Rn,$=d===Rn&&this.type!==Rn;for(let K=0,V=C.length;K<V;K++){const j=C[K],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||k===!0||$===!0){const xt=this.type!==Rn?{minFilter:je,magFilter:je}:{};H.map!==null&&H.map.dispose(),H.map=new pi(s.x,s.y,xt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let xt=0;xt<ft;xt++){const At=H.getViewport(xt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),W.viewport(a),H.updateMatrices(j,xt),n=H.getFrustum(),E(A,F,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Rn&&b(H,F),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,w)};function b(C,A){const F=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,F,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,F,p,_,null)}function T(C,A,F,S){let M=null;const w=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=F.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const W=M.uuid,k=A.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let K=$[k];K===void 0&&(K=M.clone(),$[k]=K,A.addEventListener("dispose",P)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Rn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=F}return M}function E(C,A,F,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Rn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const k=t.update(C),$=C.material;if(Array.isArray($)){const K=k.groups;for(let V=0,j=K.length;V<j;V++){const H=K[V],st=$[H.materialIndex];if(st&&st.visible){const ft=T(C,st,S,M);C.onBeforeShadow(i,C,A,F,k,ft,H),i.renderBufferDirect(F,null,k,ft,C,H),C.onAfterShadow(i,C,A,F,k,ft,H)}}}else if($.visible){const K=T(C,$,S,M);C.onBeforeShadow(i,C,A,F,k,K,null),i.renderBufferDirect(F,null,k,K,C,null),C.onAfterShadow(i,C,A,F,k,K,null)}}const W=C.children;for(let k=0,$=W.length;k<$;k++)E(W[k],A,F,S,M)}function P(C){C.target.removeEventListener("dispose",P);for(const F in c){const S=c[F],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Gm={[pa]:ma,[ga]:xa,[_a]:Ma,[Hi]:va,[ma]:pa,[xa]:ga,[Ma]:_a,[va]:Hi};function Vm(i,t){function e(){let I=!1;const ct=new he;let G=null;const Z=new he(0,0,0,0);return{setMask:function(ht){G!==ht&&!I&&(i.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){I=ht},setClear:function(ht,ut,Ut,ce,ye){ye===!0&&(ht*=ce,ut*=ce,Ut*=ce),ct.set(ht,ut,Ut,ce),Z.equals(ct)===!1&&(i.clearColor(ht,ut,Ut,ce),Z.copy(ct))},reset:function(){I=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,G=null,Z=null,ht=null;return{setReversed:function(ut){if(ct!==ut){const Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ct=ut;const ce=ht;ht=null,this.setClear(ce)}},getReversed:function(){return ct},setTest:function(ut){ut?ot(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ut){G!==ut&&!I&&(i.depthMask(ut),G=ut)},setFunc:function(ut){if(ct&&(ut=Gm[ut]),Z!==ut){switch(ut){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ht!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ht=ut)},reset:function(){I=!1,G=null,Z=null,ht=null,ct=!1}}}function s(){let I=!1,ct=null,G=null,Z=null,ht=null,ut=null,Ut=null,ce=null,ye=null;return{setTest:function(te){I||(te?ot(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(te){ct!==te&&!I&&(i.stencilMask(te),ct=te)},setFunc:function(te,Qe,xn){(G!==te||Z!==Qe||ht!==xn)&&(i.stencilFunc(te,Qe,xn),G=te,Z=Qe,ht=xn)},setOp:function(te,Qe,xn){(ut!==te||Ut!==Qe||ce!==xn)&&(i.stencilOp(te,Qe,xn),ut=te,Ut=Qe,ce=xn)},setLocked:function(te){I=te},setClear:function(te){ye!==te&&(i.clearStencil(te),ye=te)},reset:function(){I=!1,ct=null,G=null,Z=null,ht=null,ut=null,Ut=null,ce=null,ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,T=null,E=null,P=null,C=null,A=new Vt(0,0,0),F=0,S=!1,M=null,w=null,W=null,k=null,$=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let st=null,ft={};const xt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),ee=new he().fromArray(xt),Y=new he().fromArray(At);function et(I,ct,G,Z){const ht=new Uint8Array(4),ut=i.createTexture();i.bindTexture(I,ut),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<G;Ut++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ct+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ut}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Hi),qt(!1),Xt(Co),ot(i.CULL_FACE),R(Wn);function ot(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Tt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function jt(I,ct){return h[I]!==ct?(i.bindFramebuffer(I,ct),h[I]=ct,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(I,ct){let G=p,Z=!1;if(I){G=f.get(ct),G===void 0&&(G=[],f.set(ct,G));const ht=I.textures;if(G.length!==ht.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=ht.length;ut<Ut;ut++)G[ut]=i.COLOR_ATTACHMENT0+ut;G.length=ht.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function fe(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const le={[oi]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};le[Vc]=i.MIN,le[Wc]=i.MAX;const Wt={[Xc]:i.ZERO,[Yc]:i.ONE,[qc]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[Zc]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,ct,G,Z,ht,ut,Ut,ce,ye,te){if(I===Wn){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),I!==kc){if(I!==m||te!==S){if((d!==oi||E!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,E=oi),te)switch(I){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,T=null,P=null,C=null,A.set(0,0,0),F=0,m=I,S=te}return}ht=ht||ct,ut=ut||G,Ut=Ut||Z,(ct!==d||ht!==E)&&(i.blendEquationSeparate(le[ct],le[ht]),d=ct,E=ht),(G!==b||Z!==T||ut!==P||Ut!==C)&&(i.blendFuncSeparate(Wt[G],Wt[Z],Wt[ut],Wt[Ut]),b=G,T=Z,P=ut,C=Ut),(ce.equals(A)===!1||ye!==F)&&(i.blendColor(ce.r,ce.g,ce.b,ye),A.copy(ce),F=ye),m=I,S=!1}function Xe(I,ct){I.side===an?Tt(i.CULL_FACE):ot(i.CULL_FACE);let G=I.side===Be;ct&&(G=!G),qt(G),I.blending===zi&&I.transparent===!1?R(Wn):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Xt(I){I!==Oc?(ot(i.CULL_FACE),I!==w&&(I===Co?i.cullFace(i.BACK):I===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),w=I}function St(I){I!==W&&(V&&i.lineWidth(I),W=I)}function re(I,ct,G){I?(ot(i.POLYGON_OFFSET_FILL),(k!==ct||$!==G)&&(i.polygonOffset(ct,G),k=ct,$=G)):Tt(i.POLYGON_OFFSET_FILL)}function Mt(I){I?ot(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function y(I){I===void 0&&(I=i.TEXTURE0+K-1),st!==I&&(i.activeTexture(I),st=I)}function v(I,ct,G){G===void 0&&(st===null?G=i.TEXTURE0+K-1:G=st);let Z=ft[G];Z===void 0&&(Z={type:void 0,texture:void 0},ft[G]=Z),(Z.type!==I||Z.texture!==ct)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(I,ct||_t[I]),Z.type=I,Z.texture=ct)}function O(){const I=ft[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function mt(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Yt(I,ct){let G=c.get(ct);G===void 0&&(G=new WeakMap,c.set(ct,G));let Z=G.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(ct,I.name),G.set(I,Z))}function Ft(I,ct){const Z=c.get(ct).get(I);l.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,I.__bindingPointIndex),l.set(ct,Z))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,ft={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,T=null,E=null,P=null,C=null,A=new Vt(0,0,0),F=0,S=!1,M=null,w=null,W=null,k=null,$=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Tt,bindFramebuffer:jt,drawBuffers:Ct,useProgram:fe,setBlending:R,setMaterial:Xe,setFlipSided:qt,setCullFace:Xt,setLineWidth:St,setPolygonOffset:re,setScissorTest:Mt,activeTexture:y,bindTexture:v,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:pt,texImage3D:wt,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Rt,texStorage3D:Q,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:bt,scissor:Pt,viewport:mt,reset:se}}function Wm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return p?new OffscreenCanvas(y,v):pr("canvas")}function _(y,v,O){let q=1;const J=Mt(y);if((J.width>O||J.height>O)&&(q=O/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(q*J.width),vt=Math.floor(q*J.height);h===void 0&&(h=g(X,vt));const lt=v?g(X,vt):h;return lt.width=X,lt.height=vt,lt.getContext("2d").drawImage(y,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+vt+")."),lt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,v,O,q,J=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){const vt=J?fr:Zt.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=vt===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(y,v){let O;return y?v===null||v===di||v===ds?O=i.DEPTH24_STENCIL8:v===wn?O=i.DEPTH32F_STENCIL8:v===fs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===ds?O=i.DEPTH_COMPONENT24:v===wn?O=i.DEPTH_COMPONENT32F:v===fs&&(O=i.DEPTH_COMPONENT16),O}function P(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==je&&y.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){const v=y.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&u.delete(v)}function A(y){const v=y.target;v.removeEventListener("dispose",A),M(v)}function F(y){const v=n.get(y);if(v.__webglInit===void 0)return;const O=y.source,q=f.get(O);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(y),Object.keys(q).length===0&&f.delete(O)}n.remove(y)}function S(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const O=y.source,q=f.get(O);delete q[v.__cacheKey],a.memory.textures--}function M(y){const v=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[q][J]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=y.textures;for(let q=0,J=O.length;q<J;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(y)}let w=0;function W(){w=0}function k(){const y=w;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),w+=1,y}function $(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function K(y,v){const O=n.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,y,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(y,v){const O=n.get(y);if(y.version>0&&O.__version!==y.version){Y(O,y,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function j(y,v){const O=n.get(y);if(y.version>0&&O.__version!==y.version){Y(O,y,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function H(y,v){const O=n.get(y);if(y.version>0&&O.__version!==y.version){et(O,y,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const st={[ya]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ft={[je]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},xt={[vu]:i.NEVER,[Tu]:i.ALWAYS,[xu]:i.LESS,[ec]:i.LEQUAL,[Mu]:i.EQUAL,[yu]:i.GEQUAL,[Su]:i.GREATER,[Eu]:i.NOTEQUAL};function At(y,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===Ar||v.magFilter===Es||v.magFilter===hi||v.minFilter===on||v.minFilter===Ar||v.minFilter===Es||v.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,st[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ft[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Es&&v.minFilter!==hi||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(y,v){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",C));const q=v.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const X=$(v);if(X!==y.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;const vt=J[y.__cacheKey];vt!==void 0&&(J[y.__cacheKey].usedTimes--,vt.usedTimes===0&&S(v)),y.__cacheKey=X,y.__webglTexture=J[X].texture}return O}function Y(y,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const J=ee(y,v),X=v.source;e.bindTexture(q,y.__webglTexture,i.TEXTURE0+O);const vt=n.get(X);if(X.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const lt=Zt.getPrimaries(Zt.workingColorSpace),bt=v.colorSpace===Hn?null:Zt.getPrimaries(v.colorSpace),Rt=v.colorSpace===Hn||lt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Q=_(v.image,!1,s.maxTextureSize);Q=re(v,Q);const pt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type);let Pt=T(v.internalFormat,pt,wt,v.colorSpace,v.isVideoTexture);At(q,v);let mt;const Yt=v.mipmaps,Ft=v.isVideoTexture!==!0,se=vt.__version===void 0||J===!0,I=X.dataReady,ct=P(v,Q);if(v.isDepthTexture)Pt=E(v.format===ms,v.type),se&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,wt,null));else if(v.isDataTexture)if(Yt.length>0){Ft&&se&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Yt[0].width,Yt[0].height);for(let G=0,Z=Yt.length;G<Z;G++)mt=Yt[G],Ft?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Pt,mt.width,mt.height,0,pt,wt,mt.data);v.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Q.width,Q.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,wt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Yt[0].width,Yt[0].height,Q.depth);for(let G=0,Z=Yt.length;G<Z;G++)if(mt=Yt[G],v.format!==ln)if(pt!==null)if(Ft){if(I)if(v.layerUpdates.size>0){const ht=ll(mt.width,mt.height,v.format,v.type);for(const ut of v.layerUpdates){const Ut=mt.data.subarray(ut*ht/mt.data.BYTES_PER_ELEMENT,(ut+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ut,mt.width,mt.height,1,pt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Pt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,wt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Pt,mt.width,mt.height,Q.depth,0,pt,wt,mt.data)}else{Ft&&se&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Yt[0].width,Yt[0].height);for(let G=0,Z=Yt.length;G<Z;G++)mt=Yt[G],v.format!==ln?pt!==null?Ft?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Pt,mt.width,mt.height,0,pt,wt,mt.data)}else if(v.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){const G=ll(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ht=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,wt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,pt,wt,Q.data);else if(v.isData3DTexture)Ft?(se&&e.texStorage3D(i.TEXTURE_3D,ct,Pt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,pt,wt,Q.data);else if(v.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(i.TEXTURE_2D,ct,Pt,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let ht=0;ht<ct;ht++)e.texImage2D(i.TEXTURE_2D,ht,Pt,G,Z,0,pt,wt,null),G>>=1,Z>>=1}}else if(Yt.length>0){if(Ft&&se){const G=Mt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Pt,G.width,G.height)}for(let G=0,Z=Yt.length;G<Z;G++)mt=Yt[G],Ft?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt,wt,mt):e.texImage2D(i.TEXTURE_2D,G,Pt,pt,wt,mt);v.generateMipmaps=!1}else if(Ft){if(se){const G=Mt(Q);e.texStorage2D(i.TEXTURE_2D,ct,Pt,G.width,G.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,wt,Q);m(v)&&d(q),vt.__version=X.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function et(y,v,O){if(v.image.length!==6)return;const q=ee(y,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+O);const X=n.get(J);if(J.version!==X.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const vt=Zt.getPrimaries(Zt.workingColorSpace),lt=v.colorSpace===Hn?null:Zt.getPrimaries(v.colorSpace),bt=v.colorSpace===Hn||vt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Rt&&!Q?pt[Z]=_(v.image[Z],!0,s.maxCubemapSize):pt[Z]=Q?v.image[Z].image:v.image[Z],pt[Z]=re(v,pt[Z]);const wt=pt[0],Pt=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Yt=T(v.internalFormat,Pt,mt,v.colorSpace),Ft=v.isVideoTexture!==!0,se=X.__version===void 0||q===!0,I=J.dataReady;let ct=P(v,wt);At(i.TEXTURE_CUBE_MAP,v);let G;if(Rt){Ft&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Yt,wt.width,wt.height);for(let Z=0;Z<6;Z++){G=pt[Z].mipmaps;for(let ht=0;ht<G.length;ht++){const ut=G[ht];v.format!==ln?Pt!==null?Ft?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ut.width,ut.height,Pt,mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Yt,ut.width,ut.height,0,Pt,mt,ut.data)}}}else{if(G=v.mipmaps,Ft&&se){G.length>0&&ct++;const Z=Mt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Pt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,pt[Z].width,pt[Z].height,0,Pt,mt,pt[Z].data);for(let ht=0;ht<G.length;ht++){const Ut=G[ht].image[Z].image;Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Ut.width,Ut.height,Pt,mt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Yt,Ut.width,Ut.height,0,Pt,mt,Ut.data)}}else{Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Pt,mt,pt[Z]);for(let ht=0;ht<G.length;ht++){const ut=G[ht];Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Pt,mt,ut.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Yt,Pt,mt,ut.image[Z])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _t(y,v,O,q,J,X){const vt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),bt=T(O.internalFormat,vt,lt,O.colorSpace),Rt=n.get(v),Q=n.get(O);if(Q.__renderTarget=v,!Rt.__hasExternalTextures){const pt=Math.max(1,v.width>>X),wt=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,bt,pt,wt,v.depth,0,vt,lt,null):e.texImage2D(J,X,bt,pt,wt,0,vt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,Q.__webglTexture,0,qt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,Q.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(y,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=E(v.stencilBuffer,J),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=qt(v);Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,y)}else{const q=v.textures;for(let J=0;J<q.length;J++){const X=q[J],vt=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),bt=T(X.internalFormat,vt,lt,X.colorSpace),Rt=qt(v);O&&Xt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,bt,v.width,v.height):Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,bt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,bt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const J=q.__webglTexture,X=qt(v);if(v.depthTexture.format===ps)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===ms)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function jt(y){const v=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=y.texture.mipmaps;q&&q.length>0?Tt(v.__webglFramebuffer[0],y):Tt(v.__webglFramebuffer,y)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[q],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const q=y.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(y,v,O){const q=n.get(y);v!==void 0&&_t(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&jt(y)}function fe(y){const v=y.texture,O=n.get(y),q=n.get(v);y.addEventListener("dispose",A);const J=y.textures,X=y.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let bt=0;bt<v.mipmaps.length;bt++)O.__webglFramebuffer[lt][bt]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let lt=0,bt=J.length;lt<bt;lt++){const Rt=n.get(J[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Xt(y)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const bt=J[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Rt=r.convert(bt.format,bt.colorSpace),Q=r.convert(bt.type),pt=T(bt.internalFormat,Rt,Q,bt.colorSpace,y.isXRRenderTarget===!0),wt=qt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),At(i.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)_t(O.__webglFramebuffer[lt][bt],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt);else _t(O.__webglFramebuffer[lt],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let lt=0,bt=J.length;lt<bt;lt++){const Rt=J[lt],Q=n.get(Rt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),At(i.TEXTURE_2D,Rt),_t(O.__webglFramebuffer,y,Rt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Rt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(lt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),At(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)_t(O.__webglFramebuffer[bt],y,v,i.COLOR_ATTACHMENT0,lt,bt);else _t(O.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,lt,0);m(v)&&d(lt),e.unbindTexture()}y.depthBuffer&&jt(y)}function le(y){const v=y.textures;for(let O=0,q=v.length;O<q;O++){const J=v[O];if(m(J)){const X=b(y),vt=n.get(J).__webglTexture;e.bindTexture(X,vt),d(X),e.unbindTexture()}}}const Wt=[],R=[];function Xe(y){if(y.samples>0){if(Xt(y)===!1){const v=y.textures,O=y.width,q=y.height;let J=i.COLOR_BUFFER_BIT;const X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(y),lt=v.length>1;if(lt)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const bt=y.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);const Q=n.get(v[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,J,i.NEAREST),l===!0&&(Wt.length=0,R.length=0,Wt.push(i.COLOR_ATTACHMENT0+Rt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Wt.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);const Q=n.get(v[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(y){return Math.min(s.maxSamples,y.samples)}function Xt(y){const v=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function re(y,v){const O=y.colorSpace,q=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==Wi&&O!==Hn&&(Zt.getTransfer(O)===ne?(q!==ln||J!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Mt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ct,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xt}function Xm(i,t){function e(n,s=Hn){let r;const a=Zt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.BYTE;if(n===ql)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Zl)return i.RGB;if(n===ln)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===co)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Aa||n===Ra||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Ia)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===Ya||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===Ka||n===$a||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends qi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new Km,m=e.getContextAttributes();let d=null,b=null;const T=[],E=[],P=new Bt;let C=null;const A=new Ze;A.viewport=new he;const F=new Ze;F.viewport=new he;const S=[A,F],M=new ph;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=T[Y];return et===void 0&&(et=new qr,T[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=T[Y];return et===void 0&&(et=new qr,T[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=T[Y];return et===void 0&&(et=new qr,T[Y]=et),et.getHandSpace()};function k(Y){const et=E.indexOf(Y.inputSource);if(et===-1)return;const _t=T[et];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){const et=E[Y];et!==null&&(E[Y]=null,T[Y].disconnect(et))}w=null,W=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,b=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,ot=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?ms:ps,ot=m.stencil?ds:di);const jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new pi(f.textureWidth,f.textureHeight,{format:ln,type:_n,depthTexture:new pc(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new pi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){const _t=Y.removed[et],ot=E.indexOf(_t);ot>=0&&(E[ot]=null,T[ot].disconnect(_t))}for(let et=0;et<Y.added.length;et++){const _t=Y.added[et];let ot=E.indexOf(_t);if(ot===-1){for(let jt=0;jt<T.length;jt++)if(jt>=E.length){E.push(_t),ot=jt;break}else if(E[jt]===null){E[jt]=_t,ot=jt;break}if(ot===-1)break}const Tt=T[ot];Tt&&Tt.connect(_t)}}const V=new N,j=new N;function H(Y,et,_t){V.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ot=V.distanceTo(j),Tt=et.projectionMatrix.elements,jt=_t.projectionMatrix.elements,Ct=Tt[14]/(Tt[10]-1),fe=Tt[14]/(Tt[10]+1),le=(Tt[9]+1)/Tt[5],Wt=(Tt[9]-1)/Tt[5],R=(Tt[8]-1)/Tt[0],Xe=(jt[8]+1)/jt[0],qt=Ct*R,Xt=Ct*Xe,St=ot/(-R+Xe),re=St*-R;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(re),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=Ct+St,y=fe+St,v=qt-re,O=Xt+(ot-re),q=le*fe/y*Mt,J=Wt*fe/y*Mt;Y.projectionMatrix.makePerspective(v,O,q,J,Mt,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=F.near=A.near=et,M.far=F.far=A.far=_t,(w!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,W=M.far),A.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|F.layers.mask;const ot=Y.parent,Tt=M.cameras;st(M,ot);for(let jt=0;jt<Tt.length;jt++)st(Tt[jt],ot);Tt.length===2?H(M,A,F):M.projectionMatrix.copy(A.projectionMatrix),ft(Y,M,ot)};function ft(Y,et,_t){_t===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ja*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function At(Y,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ot=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Ct=0;Ct<_t.length;Ct++){const fe=_t[Ct];let le=null;if(p!==null)le=p.getViewport(fe);else{const R=h.getViewSubImage(f,fe);le=R.viewport,Ct===0&&(t.setRenderTargetTextures(b,R.colorTexture,R.depthStencilTexture),t.setRenderTarget(b))}let Wt=S[Ct];Wt===void 0&&(Wt=new Ze,Wt.layers.enable(Ct),Wt.viewport=new he,S[Ct]=Wt),Wt.matrix.fromArray(fe.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(fe.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Wt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ct=h.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let _t=0;_t<T.length;_t++){const ot=E[_t],Tt=T[_t];ot!==null&&Tt!==void 0&&Tt.update(ot,et,c||a)}xt&&xt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ee=new _c;ee.setAnimationLoop(At),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const si=new vn,Zm=new ae;function jm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,oc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,T,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),T=b.envMap,E=b.envMapRotation;T&&(m.envMap.value=T,si.copy(E),si.x*=-1,si.y*=-1,si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(si)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const E=T.program;n.uniformBlockBinding(b,E)}function c(b,T){let E=s[b.id];E===void 0&&(g(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const P=T.program;n.updateUBOMapping(b,P);const C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const T=h();b.__bindingPointIndex=T;const E=i.createBuffer(),P=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=s[b.id],E=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,A=E.length;C<A;C++){const F=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,M=F.length;S<M;S++){const w=F[S];if(p(w,C,S,P)===!0){const W=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let K=0;K<k.length;K++){const V=k[K],j=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+$,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,E,P){const C=b.value,A=T+"_"+E;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const F=P[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return P[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(b){const T=b.uniforms;let E=0;const P=16;for(let A=0,F=T.length;A<F;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,w=S.length;M<w;M++){const W=S[M],k=Array.isArray(W.value)?W.value:[W.value];for(let $=0,K=k.length;$<K;$++){const V=k[$],j=_(V),H=E%P,st=H%j.boundary,ft=H+st;E+=st,ft!==0&&P-ft<j.storage&&(E+=P-ft),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=j.storage}}}const C=E%P;return C>0&&(E+=P-C),b.__size=E,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Qm{constructor(t={}){const{canvas:e=Au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Oe;let C=0,A=0,F=null,S=-1,M=null;const w=new he,W=new he;let k=null;const $=new Vt(0);let K=0,V=e.width,j=e.height,H=1,st=null,ft=null;const xt=new he(0,0,V,j),At=new he(0,0,V,j);let ee=!1;const Y=new _o;let et=!1,_t=!1;const ot=new ae,Tt=new ae,jt=new N,Ct=new he,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Wt(){return F===null?H:1}let R=n;function Xe(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const L="webgl2";if(R=Xe(L,x),R===null)throw Xe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let qt,Xt,St,re,Mt,y,v,O,q,J,X,vt,lt,bt,Rt,Q,pt,wt,Pt,mt,Yt,Ft,se,I;function ct(){qt=new cp(R),qt.init(),Ft=new Xm(R,qt),Xt=new np(R,qt,t,Ft),St=new Vm(R,qt),Xt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),re=new fp(R),Mt=new Im,y=new Wm(R,qt,St,Mt,Xt,Ft,re),v=new sp(E),O=new lp(E),q=new _h(R),se=new tp(R,q),J=new up(R,q,re,se),X=new pp(R,J,q,re),Pt=new dp(R,Xt,y),Q=new ip(Mt),vt=new Cm(E,v,O,qt,Xt,se,Q),lt=new jm(E,Mt),bt=new Lm,Rt=new Bm(qt),wt=new Qd(E,v,O,St,X,p,l),pt=new Hm(E,X,Xt),I=new Jm(R,re,Xt,St),mt=new ep(R,qt,re),Yt=new hp(R,qt,re),re.programs=vt.programs,E.capabilities=Xt,E.extensions=qt,E.properties=Mt,E.renderLists=bt,E.shadowMap=pt,E.state=St,E.info=re}ct();const G=new $m(E,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=qt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=qt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(V,j,!1))},this.getSize=function(x){return x.set(V,j)},this.setSize=function(x,L,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,j=L,e.width=Math.floor(x*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(V*H,j*H).floor()},this.setDrawingBufferSize=function(x,L,B){V=x,j=L,H=B,e.width=Math.floor(x*B),e.height=Math.floor(L*B),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(xt)},this.setViewport=function(x,L,B,z){x.isVector4?xt.set(x.x,x.y,x.z,x.w):xt.set(x,L,B,z),St.viewport(w.copy(xt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(At)},this.setScissor=function(x,L,B,z){x.isVector4?At.set(x.x,x.y,x.z,x.w):At.set(x,L,B,z),St.scissor(W.copy(At).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(x){St.setScissorTest(ee=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ft=x},this.getClearColor=function(x){return x.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,B=!0){let z=0;if(x){let U=!1;if(F!==null){const tt=F.texture.format;U=tt===uo||tt===co||tt===lo}if(U){const tt=F.texture.type,at=tt===_n||tt===di||tt===fs||tt===ds||tt===ao||tt===oo,dt=wt.getClearColor(),gt=wt.getClearAlpha(),Lt=dt.r,It=dt.g,Et=dt.b;at?(g[0]=Lt,g[1]=It,g[2]=Et,g[3]=gt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Lt,_[1]=It,_[2]=Et,_[3]=gt,R.clearBufferiv(R.COLOR,0,_))}else z|=R.COLOR_BUFFER_BIT}L&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),wt.dispose(),bt.dispose(),Rt.dispose(),Mt.dispose(),v.dispose(),O.dispose(),X.dispose(),se.dispose(),I.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Eo),G.removeEventListener("sessionend",yo),jn.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=re.autoReset,L=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,U=pt.type;ct(),re.autoReset=x,pt.enabled=L,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=U}function ut(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ut(x){const L=x.target;L.removeEventListener("dispose",Ut),ce(L)}function ce(x){ye(x),Mt.remove(x)}function ye(x){const L=Mt.get(x).programs;L!==void 0&&(L.forEach(function(B){vt.releaseProgram(B)}),x.isShaderMaterial&&vt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,B,z,U,tt){L===null&&(L=fe);const at=U.isMesh&&U.matrixWorld.determinant()<0,dt=Pc(x,L,B,z,U);St.setMaterial(z,at);let gt=B.index,Lt=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(B),gt===void 0)return;Lt=2}const It=B.drawRange,Et=B.attributes.position;let Kt=It.start*Lt,Jt=(It.start+It.count)*Lt;tt!==null&&(Kt=Math.max(Kt,tt.start*Lt),Jt=Math.min(Jt,(tt.start+tt.count)*Lt)),gt!==null?(Kt=Math.max(Kt,0),Jt=Math.min(Jt,gt.count)):Et!=null&&(Kt=Math.max(Kt,0),Jt=Math.min(Jt,Et.count));const de=Jt-Kt;if(de<0||de===1/0)return;se.setup(U,z,dt,B,gt);let ue,$t=mt;if(gt!==null&&(ue=q.get(gt),$t=Yt,$t.setIndex(ue)),U.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*Wt()),$t.setMode(R.LINES)):$t.setMode(R.TRIANGLES);else if(U.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*Wt()),U.isLineSegments?$t.setMode(R.LINES):U.isLineLoop?$t.setMode(R.LINE_LOOP):$t.setMode(R.LINE_STRIP)}else U.isPoints?$t.setMode(R.POINTS):U.isSprite&&$t.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,Se=U._multiDrawCounts,Qt=U._multiDrawCount,tn=gt?q.get(gt).bytesPerElement:1,_i=Mt.get(z).currentProgram.getUniforms();for(let ze=0;ze<Qt;ze++)_i.setValue(R,"_gl_DrawID",ze),$t.render(yt[ze]/tn,Se[ze])}else if(U.isInstancedMesh)$t.renderInstances(Kt,de,U.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Se=Math.min(B.instanceCount,yt);$t.renderInstances(Kt,de,Se)}else $t.render(Kt,de)};function te(x,L,B){x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=Be,x.needsUpdate=!0,Ss(x,L,B),x.side=Kn,x.needsUpdate=!0,Ss(x,L,B),x.side=an):Ss(x,L,B)}this.compile=function(x,L,B=null){B===null&&(B=x),d=Rt.get(B),d.init(L),T.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),x!==B&&x.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const z=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let at=0;at<tt.length;at++){const dt=tt[at];te(dt,B,U),z.add(dt)}else te(tt,B,U),z.add(tt)}),d=T.pop(),z},this.compileAsync=function(x,L,B=null){const z=this.compile(x,L,B);return new Promise(U=>{function tt(){if(z.forEach(function(at){Mt.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){U(x);return}setTimeout(tt,10)}qt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qe=null;function xn(x){Qe&&Qe(x)}function Eo(){jn.stop()}function yo(){jn.start()}const jn=new _c;jn.setAnimationLoop(xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(x){Qe=x,G.setAnimationLoop(x),x===null?jn.stop():jn.start()},G.addEventListener("sessionstart",Eo),G.addEventListener("sessionend",yo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,L,F),d=Rt.get(x,T.length),d.init(L),T.push(d),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,et=Q.init(this.clippingPlanes,_t),m=bt.get(x,b.length),m.init(),b.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=E.xr.getDepthSensingMesh();tt!==null&&Tr(tt,L,-1/0,E.sortObjects)}Tr(x,L,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(st,ft),le=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,le&&wt.addToRenderList(m,x),this.info.render.frame++,et===!0&&Q.beginShadows();const B=d.state.shadowsArray;pt.render(B,x,L),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(d.setupLights(),L.isArrayCamera){const tt=L.cameras;if(U.length>0)for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];bo(z,U,x,gt)}le&&wt.render(x);for(let at=0,dt=tt.length;at<dt;at++){const gt=tt[at];To(m,x,gt,gt.viewport)}}else U.length>0&&bo(z,U,x,L),le&&wt.render(x),To(m,x,L);F!==null&&A===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(E,x,L),se.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],et===!0&&Q.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Tr(x,L,B,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){z&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const at=X.update(x),dt=x.material;dt.visible&&m.push(x,at,dt,B,Ct.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const at=X.update(x),dt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Ct.copy(at.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(dt)){const gt=at.groups;for(let Lt=0,It=gt.length;Lt<It;Lt++){const Et=gt[Lt],Kt=dt[Et.materialIndex];Kt&&Kt.visible&&m.push(x,at,Kt,B,Ct.z,Et)}}else dt.visible&&m.push(x,at,dt,B,Ct.z,null)}}const tt=x.children;for(let at=0,dt=tt.length;at<dt;at++)Tr(tt[at],L,B,z)}function To(x,L,B,z){const U=x.opaque,tt=x.transmissive,at=x.transparent;d.setupLightsView(B),et===!0&&Q.setGlobalState(E.clippingPlanes,B),z&&St.viewport(w.copy(z)),U.length>0&&Ms(U,L,B),tt.length>0&&Ms(tt,L,B),at.length>0&&Ms(at,L,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function bo(x,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?gs:_n,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[z.id],at=z.viewport||w;tt.setSize(at.z*E.transmissionResolutionScale,at.w*E.transmissionResolutionScale);const dt=E.getRenderTarget();E.setRenderTarget(tt),E.getClearColor($),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),le&&wt.render(B);const gt=E.toneMapping;E.toneMapping=Xn;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),et===!0&&Q.setGlobalState(E.clippingPlanes,z),Ms(x,B,z),y.updateMultisampleRenderTarget(tt),y.updateRenderTargetMipmap(tt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Et=0,Kt=L.length;Et<Kt;Et++){const Jt=L[Et],de=Jt.object,ue=Jt.geometry,$t=Jt.material,yt=Jt.group;if($t.side===an&&de.layers.test(z.layers)){const Se=$t.side;$t.side=Be,$t.needsUpdate=!0,Ao(de,B,z,ue,$t,yt),$t.side=Se,$t.needsUpdate=!0,It=!0}}It===!0&&(y.updateMultisampleRenderTarget(tt),y.updateRenderTargetMipmap(tt))}E.setRenderTarget(dt),E.setClearColor($,K),Lt!==void 0&&(z.viewport=Lt),E.toneMapping=gt}function Ms(x,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,tt=x.length;U<tt;U++){const at=x[U],dt=at.object,gt=at.geometry,Lt=at.group;let It=at.material;It.allowOverride===!0&&z!==null&&(It=z),dt.layers.test(B.layers)&&Ao(dt,L,B,gt,It,Lt)}}function Ao(x,L,B,z,U,tt){x.onBeforeRender(E,L,B,z,U,tt),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(E,L,B,z,x,tt),U.transparent===!0&&U.side===an&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,x,tt),U.side=Kn,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,x,tt),U.side=an):E.renderBufferDirect(B,L,z,U,x,tt),x.onAfterRender(E,L,B,z,U,tt)}function Ss(x,L,B){L.isScene!==!0&&(L=fe);const z=Mt.get(x),U=d.state.lights,tt=d.state.shadowsArray,at=U.state.version,dt=vt.getParameters(x,U.state,tt,L,B),gt=vt.getProgramCacheKey(dt);let Lt=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",Ut),Lt=new Map,z.programs=Lt);let It=Lt.get(gt);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===at)return wo(x,dt),It}else dt.uniforms=vt.getUniforms(x),x.onBeforeCompile(dt,E),It=vt.acquireProgram(dt,gt),Lt.set(gt,It),z.uniforms=dt.uniforms;const Et=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Et.clippingPlanes=Q.uniform),wo(x,dt),z.needsLights=Dc(x),z.lightsStateVersion=at,z.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function Ro(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=cr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function wo(x,L){const B=Mt.get(x);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Pc(x,L,B,z,U){L.isScene!==!0&&(L=fe),y.resetTextureUnits();const tt=L.fog,at=z.isMeshStandardMaterial?L.environment:null,dt=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Wi,gt=(z.isMeshStandardMaterial?O:v).get(z.envMap||at),Lt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,It=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let de=Xn;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(de=E.toneMapping);const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=ue!==void 0?ue.length:0,yt=Mt.get(z),Se=d.state.lights;if(et===!0&&(_t===!0||x!==M)){const Ie=x===M&&z.id===S;Q.setState(z,x,Ie)}let Qt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Se.state.version||yt.outputColorSpace!==dt||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==gt||z.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Lt||yt.vertexTangents!==It||yt.morphTargets!==Et||yt.morphNormals!==Kt||yt.morphColors!==Jt||yt.toneMapping!==de||yt.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,yt.__version=z.version);let tn=yt.currentProgram;Qt===!0&&(tn=Ss(z,L,U));let _i=!1,ze=!1,$i=!1;const oe=tn.getUniforms(),Ye=yt.uniforms;if(St.useProgram(tn.program)&&(_i=!0,ze=!0,$i=!0),z.id!==S&&(S=z.id,ze=!0),_i||M!==x){St.buffers.depth.getReversed()?(ot.copy(x.projectionMatrix),wu(ot),Cu(ot),oe.setValue(R,"projectionMatrix",ot)):oe.setValue(R,"projectionMatrix",x.projectionMatrix),oe.setValue(R,"viewMatrix",x.matrixWorldInverse);const Ne=oe.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,jt.setFromMatrixPosition(x.matrixWorld)),Xt.logarithmicDepthBuffer&&oe.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&oe.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,ze=!0,$i=!0)}if(U.isSkinnedMesh){oe.setOptional(R,U,"bindMatrix"),oe.setOptional(R,U,"bindMatrixInverse");const Ie=U.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(R,"boneTexture",Ie.boneTexture,y))}U.isBatchedMesh&&(oe.setOptional(R,U,"batchingTexture"),oe.setValue(R,"batchingTexture",U._matricesTexture,y),oe.setOptional(R,U,"batchingIdTexture"),oe.setValue(R,"batchingIdTexture",U._indirectTexture,y),oe.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(R,"batchingColorTexture",U._colorsTexture,y));const qe=B.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Pt.update(U,B,tn),(ze||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,oe.setValue(R,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ye.envMap.value=gt,Ye.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Ye.envMapIntensity.value=L.environmentIntensity),ze&&(oe.setValue(R,"toneMappingExposure",E.toneMappingExposure),yt.needsLights&&Lc(Ye,$i),tt&&z.fog===!0&&lt.refreshFogUniforms(Ye,tt),lt.refreshMaterialUniforms(Ye,z,H,j,d.state.transmissionRenderTarget[x.id]),cr.upload(R,Ro(yt),Ye,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cr.upload(R,Ro(yt),Ye,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&oe.setValue(R,"center",U.center),oe.setValue(R,"modelViewMatrix",U.modelViewMatrix),oe.setValue(R,"normalMatrix",U.normalMatrix),oe.setValue(R,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ie=z.uniformsGroups;for(let Ne=0,br=Ie.length;Ne<br;Ne++){const Jn=Ie[Ne];I.update(Jn,tn),I.bind(Jn,tn)}}return tn}function Lc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Dc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,L,B){const z=Mt.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Mt.get(x.texture).__webglTexture=L,Mt.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const B=Mt.get(x);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Uc=R.createFramebuffer();this.setRenderTarget=function(x,L=0,B=0){F=x,C=L,A=B;let z=!0,U=null,tt=!1,at=!1;if(x){const gt=Mt.get(x);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(gt.__hasExternalTextures)y.rebindTextures(x,Mt.get(x.texture).__webglTexture,Mt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Et=x.depthTexture;if(gt.__boundDepthTexture!==Et){if(Et!==null&&Mt.has(Et)&&(x.width!==Et.image.width||x.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const Lt=x.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(at=!0);const It=Mt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[L])?U=It[L][B]:U=It[L],tt=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?U=Mt.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[B]:U=It,w.copy(x.viewport),W.copy(x.scissor),k=x.scissorTest}else w.copy(xt).multiplyScalar(H).floor(),W.copy(At).multiplyScalar(H).floor(),k=ee;if(B!==0&&(U=Uc),St.bindFramebuffer(R.FRAMEBUFFER,U)&&z&&St.drawBuffers(x,U),St.viewport(w),St.scissor(W),St.setScissorTest(k),tt){const gt=Mt.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,gt.__webglTexture,B)}else if(at){const gt=Mt.get(x.texture),Lt=L;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.__webglTexture,B,Lt)}else if(x!==null&&B!==0){const gt=Mt.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(x,L,B,z,U,tt,at){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt){St.bindFramebuffer(R.FRAMEBUFFER,dt);try{const gt=x.texture,Lt=gt.format,It=gt.type;if(!Xt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U&&R.readPixels(L,B,z,U,Ft.convert(Lt),Ft.convert(It),tt)}finally{const gt=F!==null?Mt.get(F).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(x,L,B,z,U,tt,at){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(dt=dt[at]),dt)if(L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U){St.bindFramebuffer(R.FRAMEBUFFER,dt);const gt=x.texture,Lt=gt.format,It=gt.type;if(!Xt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),R.readPixels(L,B,z,U,Ft.convert(Lt),Ft.convert(It),0);const Kt=F!==null?Mt.get(F).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,Kt);const Jt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ru(R,Jt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(Et),R.deleteSync(Jt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,B=0){const z=Math.pow(2,-B),U=Math.floor(x.image.width*z),tt=Math.floor(x.image.height*z),at=L!==null?L.x:0,dt=L!==null?L.y:0;y.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,at,dt,U,tt),St.unbindTexture()};const Nc=R.createFramebuffer(),Fc=R.createFramebuffer();this.copyTextureToTexture=function(x,L,B=null,z=null,U=0,tt=null){tt===null&&(U!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=U,U=0):tt=0);let at,dt,gt,Lt,It,Et,Kt,Jt,de;const ue=x.isCompressedTexture?x.mipmaps[tt]:x.image;if(B!==null)at=B.max.x-B.min.x,dt=B.max.y-B.min.y,gt=B.isBox3?B.max.z-B.min.z:1,Lt=B.min.x,It=B.min.y,Et=B.isBox3?B.min.z:0;else{const qe=Math.pow(2,-U);at=Math.floor(ue.width*qe),dt=Math.floor(ue.height*qe),x.isDataArrayTexture?gt=ue.depth:x.isData3DTexture?gt=Math.floor(ue.depth*qe):gt=1,Lt=0,It=0,Et=0}z!==null?(Kt=z.x,Jt=z.y,de=z.z):(Kt=0,Jt=0,de=0);const $t=Ft.convert(L.format),yt=Ft.convert(L.type);let Se;L.isData3DTexture?(y.setTexture3D(L,0),Se=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(y.setTexture2DArray(L,0),Se=R.TEXTURE_2D_ARRAY):(y.setTexture2D(L,0),Se=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Qt=R.getParameter(R.UNPACK_ROW_LENGTH),tn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_i=R.getParameter(R.UNPACK_SKIP_PIXELS),ze=R.getParameter(R.UNPACK_SKIP_ROWS),$i=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ue.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,It),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Et);const oe=x.isDataArrayTexture||x.isData3DTexture,Ye=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const qe=Mt.get(x),Ie=Mt.get(L),Ne=Mt.get(qe.__renderTarget),br=Mt.get(Ie.__renderTarget);St.bindFramebuffer(R.READ_FRAMEBUFFER,Ne.__webglFramebuffer),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Jn=0;Jn<gt;Jn++)oe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(x).__webglTexture,U,Et+Jn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(L).__webglTexture,tt,de+Jn)),R.blitFramebuffer(Lt,It,at,dt,Kt,Jt,at,dt,R.DEPTH_BUFFER_BIT,R.NEAREST);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||Mt.has(x)){const qe=Mt.get(x),Ie=Mt.get(L);St.bindFramebuffer(R.READ_FRAMEBUFFER,Nc),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,Fc);for(let Ne=0;Ne<gt;Ne++)oe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qe.__webglTexture,U,Et+Ne):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qe.__webglTexture,U),Ye?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.__webglTexture,tt,de+Ne):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ie.__webglTexture,tt),U!==0?R.blitFramebuffer(Lt,It,at,dt,Kt,Jt,at,dt,R.COLOR_BUFFER_BIT,R.NEAREST):Ye?R.copyTexSubImage3D(Se,tt,Kt,Jt,de+Ne,Lt,It,at,dt):R.copyTexSubImage2D(Se,tt,Kt,Jt,Lt,It,at,dt);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ye?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(Se,tt,Kt,Jt,de,at,dt,gt,$t,yt,ue.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Se,tt,Kt,Jt,de,at,dt,gt,$t,ue.data):R.texSubImage3D(Se,tt,Kt,Jt,de,at,dt,gt,$t,yt,ue):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,tt,Kt,Jt,at,dt,$t,yt,ue.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,tt,Kt,Jt,ue.width,ue.height,$t,ue.data):R.texSubImage2D(R.TEXTURE_2D,tt,Kt,Jt,at,dt,$t,yt,ue);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_i),R.pixelStorei(R.UNPACK_SKIP_ROWS,ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$i),tt===0&&L.generateMipmaps&&R.generateMipmap(Se),St.unbindTexture()},this.copyTextureToTexture3D=function(x,L,B=null,z=null,U=0){return lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,B,z,U)},this.initRenderTarget=function(x){Mt.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){C=0,A=0,F=null,St.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const D={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,WATER:7,BEDROCK:8,SNOW:9,CACTUS:10,FLOWER_RED:11,FLOWER_YELLOW:12,VINE:13,GRAVEL:14,MOSS:15,CASTLE_BRICK:16,APPLE:17,WEAPON_BANDIT_BLADE:18,WEAPON_RAIDER_SABER:19,WEAPON_SCORP_BOW:20,WEAPON_JAGUAR_CLAWS:21,WEAPON_WRAITH_HAMMER:22,WEAPON_YETI_AXE:23},zn={PX:0,NX:1,PY:2,NY:3,PZ:4,NZ:5},un={[D.AIR]:{name:"Air",solid:!1,transparent:!0},[D.GRASS]:{name:"Grass",solid:!0,transparent:!1,textures:{top:"grass_top",side:"grass_side",bottom:"dirt"}},[D.DIRT]:{name:"Dirt",solid:!0,transparent:!1,textures:{all:"dirt"}},[D.STONE]:{name:"Stone",solid:!0,transparent:!1,textures:{all:"stone"}},[D.SAND]:{name:"Sand",solid:!0,transparent:!1,textures:{all:"sand"}},[D.LOG]:{name:"Log",solid:!0,transparent:!1,textures:{top:"log_top",side:"log_side",bottom:"log_top"}},[D.LEAVES]:{name:"Leaves",solid:!0,transparent:!0,textures:{all:"leaves"}},[D.WATER]:{name:"Water",solid:!1,transparent:!0,textures:{all:"water"}},[D.BEDROCK]:{name:"Bedrock",solid:!0,transparent:!1,textures:{all:"bedrock"}},[D.SNOW]:{name:"Snow",solid:!0,transparent:!1,textures:{all:"snow"}},[D.CACTUS]:{name:"Cactus",solid:!0,transparent:!1,textures:{top:"cactus_top",side:"cactus_side",bottom:"cactus_top"}},[D.FLOWER_RED]:{name:"Red Flower",solid:!1,transparent:!0,textures:{all:"flower_red"}},[D.FLOWER_YELLOW]:{name:"Yellow Flower",solid:!1,transparent:!0,textures:{all:"flower_yellow"}},[D.VINE]:{name:"Vine",solid:!1,transparent:!0,textures:{all:"vine"}},[D.GRAVEL]:{name:"Gravel",solid:!0,transparent:!1,textures:{all:"gravel"}},[D.MOSS]:{name:"Moss",solid:!0,transparent:!1,textures:{all:"moss"}},[D.CASTLE_BRICK]:{name:"Castle Brick",solid:!0,transparent:!1,textures:{all:"castle_brick"}},[D.APPLE]:{name:"Apple",solid:!1,transparent:!0,textures:{all:"apple"}},[D.WEAPON_BANDIT_BLADE]:{name:"Bandit Blade",solid:!1,transparent:!0,textures:{all:"stone"}},[D.WEAPON_RAIDER_SABER]:{name:"Raider Saber",solid:!1,transparent:!0,textures:{all:"stone"}},[D.WEAPON_SCORP_BOW]:{name:"Scorpion Bow",solid:!1,transparent:!0,textures:{all:"stone"}},[D.WEAPON_JAGUAR_CLAWS]:{name:"Jaguar Claws",solid:!1,transparent:!0,textures:{all:"stone"}},[D.WEAPON_WRAITH_HAMMER]:{name:"Wraith Hammer",solid:!1,transparent:!0,textures:{all:"stone"}},[D.WEAPON_YETI_AXE]:{name:"Yeti Axe",solid:!1,transparent:!0,textures:{all:"stone"}}};function eo(i){return un[i]?.solid??!1}function t0(i){return un[i]?.transparent??!0}function e0(i){return i!==D.AIR&&i!==D.BEDROCK}const nt=16,ge=128,ci=4,Dl=24,n0=6,ss=.6,js=1.8,i0=1.62,s0=5.2,r0=2.6,a0=100,o0=8.8,l0=26,c0=-55,u0=280;function zt(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=n^n>>>16|0,(n>>>0)/4294967295}function On(i,t,e,n){let s=(i|0)*374761393+(t|0)*668265263+(e|0)*2246822519+(n|0)*1442695041;return s=s^s>>>13|0,s=Math.imul(s,1274126177),s=s^s>>>16|0,(s>>>0)/4294967295}function cs(i){return i*i*(3-2*i)}function dn(i,t,e){return i+(t-i)*e}function we(i,t){return Math.floor(i/t)}function Js(i,t){return(i%t+t)%t}const h0=[{face:zn.PX,normal:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],n:[1,0,0]},{face:zn.NX,normal:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],n:[-1,0,0]},{face:zn.PY,normal:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],n:[0,1,0]},{face:zn.NY,normal:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],n:[0,-1,0]},{face:zn.PZ,normal:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],n:[0,0,1]},{face:zn.NZ,normal:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],n:[0,0,-1]}];function f0(i,t){const e=un[i],n=un[t];return e.transparent?t===0?!0:n.transparent?t!==i:!1:t===0||n.transparent}function Ul(){return{positions:[],normals:[],uvs:[],indices:[],count:0}}function d0(i,t,e,n,s,r){const[a,o,l,c]=r,u=[[a,o],[a,c],[l,c],[l,o]];for(let f=0;f<4;f++){const p=s.verts[f];i.positions.push(t+p[0],e+p[1],n+p[2]),i.normals.push(s.n[0],s.n[1],s.n[2]),i.uvs.push(u[f][0],u[f][1])}const h=i.count;i.indices.push(h,h+1,h+2,h,h+2,h+3),i.count+=4}function Nl(i){if(i.indices.length===0)return null;const t=new Je;return t.setAttribute("position",new Ce(i.positions,3)),t.setAttribute("normal",new Ce(i.normals,3)),t.setAttribute("uv",new Ce(i.uvs,2)),t.setIndex(i.indices),t.computeBoundingSphere(),t}function p0(i,t,e,n){const s=Ul(),r=Ul(),a=t*nt,o=e*nt;for(let l=0;l<nt;l++)for(let c=0;c<nt;c++){const u=a+l,h=o+c;for(let f=0;f<ge;f++){const p=i.getBlock(u,f,h);if(p===0)continue;const g=un[p].transparent?r:s;for(const _ of h0){const m=u+_.normal[0],d=f+_.normal[1],b=h+_.normal[2],T=i.getBlock(m,d,b);f0(p,T)&&d0(g,u,f,h,_,n(p,_.face))}}}return{opaque:Nl(s),transparent:Nl(r)}}function Ec(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=zt(n,s,e),l=zt(n+1,s,e),c=zt(n,s+1,e),u=zt(n+1,s+1,e),h=cs(r),f=cs(a),p=dn(o,l,h),g=dn(c,u,h);return dn(p,g,f)}function Ee(i,t,e,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=Ec(i*a,t*a,e+u*7919)*o,c+=o,o*=r,a*=s;return l/c}function m0(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=Math.floor(e),o=i-s,l=t-r,c=e-a,u=On(s,r,a,n),h=On(s+1,r,a,n),f=On(s,r+1,a,n),p=On(s+1,r+1,a,n),g=On(s,r,a+1,n),_=On(s+1,r,a+1,n),m=On(s,r+1,a+1,n),d=On(s+1,r+1,a+1,n),b=cs(o),T=cs(l),E=cs(c),P=dn(u,h,b),C=dn(f,p,b),A=dn(g,_,b),F=dn(m,d,b),S=dn(P,C,T),M=dn(A,F,T);return dn(S,M,E)}function ra(i,t,e,n,s=4,r=2,a=.5){let o=1,l=1,c=0,u=0;for(let h=0;h<s;h++)c+=m0(i*o,t*o,e*o,n+h*7919)*l,u+=l,l*=a,o*=r;return c/u}const Ht={DESERT:0,FOREST:1,JUNGLE:2,MOUNTAIN:3,PLAINS:4,TUNDRA:5},g0={[Ht.DESERT]:"Desert",[Ht.FOREST]:"Forest",[Ht.JUNGLE]:"Jungle",[Ht.MOUNTAIN]:"Mountain",[Ht.PLAINS]:"Plains",[Ht.TUNDRA]:"Tundra"},ur={[Ht.DESERT]:{temp:.92,moisture:.14,surface:D.SAND,subsurface:D.SAND,height:(i,t,e)=>{const n=Ee(i*.0044,t*.0044,e+101,3,2,.5),s=Ee(i*.017,t*.017,e+102,4,2,.52);return 19+n*7+s*8}},[Ht.FOREST]:{temp:.56,moisture:.62,surface:D.GRASS,subsurface:D.DIRT,height:(i,t,e)=>{const n=Ee(i*.007,t*.007,e+111,4,2,.52),s=Ee(i*.022,t*.022,e+112,3,2,.5);return 28+n*13+s*5}},[Ht.JUNGLE]:{temp:.82,moisture:.9,surface:D.GRASS,subsurface:D.DIRT,height:(i,t,e)=>{const n=Ee(i*.0062,t*.0062,e+121,4,2,.54),s=Ee(i*.014,t*.014,e+122,4,2,.5);return 26+n*10+s*8}},[Ht.MOUNTAIN]:{temp:.31,moisture:.33,surface:D.STONE,subsurface:D.STONE,height:(i,t,e)=>{const n=Ee(i*.0042,t*.0042,e+131,5,2,.55),s=Ee(i*.0026,t*.0026,e+132,4,2,.5),r=Ee(i*.016,t*.016,e+133,3,2,.5);return 34+s*s*70+n*24+r*6}},[Ht.PLAINS]:{temp:.6,moisture:.46,surface:D.GRASS,subsurface:D.DIRT,height:(i,t,e)=>{const n=Ee(i*.0052,t*.0052,e+141,3,2,.5),s=Ee(i*.019,t*.019,e+142,3,2,.5);return 24+n*6+s*3}},[Ht.TUNDRA]:{temp:.17,moisture:.56,surface:D.SNOW,subsurface:D.DIRT,height:(i,t,e)=>{const n=Ee(i*.0047,t*.0047,e+151,4,2,.52),s=Ee(i*.013,t*.013,e+152,3,2,.5);return 30+n*11+s*4}}},_0=Object.values(Ht);function Fl(i){return i*i}function yc(i,t,e){const n=Ee(t*.0017,e*.0017,i.seed+501,4,2,.5),s=Ee(t*.0018,e*.0018,i.seed+601,4,2,.5);return{temperature:n,moisture:s}}function Tc(i,t,e){const n=yc(i,t,e);let s=0,r=Ht.FOREST,a=-1;const o=[];for(const l of _0){const c=ur[l],u=Fl(n.temperature-c.temp)+Fl(n.moisture-c.moisture),h=Math.exp(-u*12.5);o.push([l,h]),s+=h,h>a&&(a=h,r=l)}return{dominant:r,weights:o,total:s}}function v0(i,t,e){const n=Tc(i,t,e);let s=0;for(const[c,u]of n.weights){const h=u/n.total;s+=ur[c].height(t,e,i.seed)*h}const r=Math.max(3,Math.min(ge-2,Math.floor(s))),a=n.dominant;let o=ur[a].surface;const l=ur[a].subsurface;return a===Ht.MOUNTAIN&&r>80&&(o=D.SNOW),{height:r,dominantBiome:a,surface:o,subsurface:l}}const x0=14,Gn=nt*x0,M0=.045;class S0{constructor(t){this.state=t|0,this.state===0&&(this.state=1)}next(){return this.state=Math.imul(this.state,1664525)+1013904223|0,(this.state>>>0)/4294967295}range(t,e){return t+Math.floor(this.next()*(e-t))}}function E0(i,t,e){const n=`${t},${e}`;if(i.castleCache.has(n))return i.castleCache.get(n);if(zt(t,e,i.seed+42031)>M0)return i.castleCache.set(n,null),null;const r=t*73856093^e*19349663^i.seed*83492791^2654435769|0,a=new S0(r),o=34,l=t*Gn+a.range(o,Gn-o),c=e*Gn+a.range(o,Gn-o),u=Math.min(ge-24,1+Math.max(i.getSurfaceYAt(l,c),i.getSurfaceYAt(l+8,c),i.getSurfaceYAt(l,c+8),i.getSurfaceYAt(l+8,c+8))),h=a.range(13,18),f=a.range(13,18),p={x:l-Math.floor(h*.5),z:c-Math.floor(f*.5),w:h,d:f,h:a.range(7,11),kind:"keep"},g=[p],_=[],m=a.range(8,15);for(let S=0;S<m;S++){const M=g[a.range(0,g.length)],w=a.range(0,4),W=a.next()<.55,k=M.x+2+a.range(0,Math.max(1,M.w-4)),$=M.z+2+a.range(0,Math.max(1,M.d-4));let K,V;if(W){const At=a.range(6,13);w===0||w===2?(K=3,V=At):(K=At,V=3)}else K=a.range(7,13),V=a.range(7,13);let j=0,H=0;w===0?(j=k-Math.floor(K*.5),H=M.z-V):w===1?(j=M.x+M.w,H=$-Math.floor(V*.5)):w===2?(j=k-Math.floor(K*.5),H=M.z+M.d):(j=M.x-K,H=$-Math.floor(V*.5));let st=!1;for(const At of g)if(j<At.x+At.w&&j+K>At.x&&H<At.z+At.d&&H+V>At.z){st=!0;break}if(st)continue;const ft=W?a.range(5,7):a.range(6,10),xt={x:j,z:H,w:K,d:V,h:ft,kind:W?"corridor":"room"};g.push(xt),w===0&&_.push({side:w,x:k,z:M.z}),w===1&&_.push({side:w,x:M.x+M.w-1,z:$}),w===2&&_.push({side:w,x:k,z:M.z+M.d-1}),w===3&&_.push({side:w,x:M.x,z:$})}const d=[],b=2,T=a.range(9,14);d.push({x:p.x-b,z:p.z-b,r:b,h:T}),d.push({x:p.x+p.w-1+b,z:p.z-b,r:b,h:T}),d.push({x:p.x-b,z:p.z+p.d-1+b,r:b,h:T}),d.push({x:p.x+p.w-1+b,z:p.z+p.d-1+b,r:b,h:T});let E=1/0,P=-1/0,C=1/0,A=-1/0;for(const S of g)E=Math.min(E,S.x),P=Math.max(P,S.x+S.w-1),C=Math.min(C,S.z),A=Math.max(A,S.z+S.d-1);for(const S of d)E=Math.min(E,S.x-S.r),P=Math.max(P,S.x+S.r),C=Math.min(C,S.z-S.r),A=Math.max(A,S.z+S.r);const F={baseY:u,pieces:g,towers:d,connections:_,minX:E,maxX:P,minZ:C,maxZ:A};return i.castleCache.set(n,F),F}function y0(i,t,e,n,s,r){const a=s,o=s+nt-1,l=r,c=r+nt-1,u=220,h=we(a-u,Gn),f=we(o+u,Gn),p=we(l-u,Gn),g=we(c+u,Gn);for(let _=p;_<=g;_++)for(let m=h;m<=f;m++){const d=E0(i,m,_);!d||!(d.minX<=o&&d.maxX>=a&&d.minZ<=c&&d.maxZ>=l)||T0(i,t,e,n,d)}}function T0(i,t,e,n,s){for(const r of s.pieces)b0(i,t,e,n,s.baseY,r);for(const r of s.towers)A0(i,t,e,n,s.baseY,r);for(const r of s.connections)R0(i,t,e,n,s.baseY,r)}function b0(i,t,e,n,s,r){const a=Math.min(ge-3,s+r.h);for(let o=r.z;o<r.z+r.d;o++)for(let l=r.x;l<r.x+r.w;l++){i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,D.CASTLE_BRICK);for(let c=s+1;c<=a;c++)l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,D.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o);if(r.kind!=="corridor"){const c=a+1;l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1||(l+o&1)===0?i.setGeneratedBlockIfInChunk(t,e,n,l,c,o,D.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,c,o)}}if(r.kind==="room"&&r.w>=9&&r.d>=9){const o=Math.min(ge-4,s+r.h-1),l=[[r.x+2,r.z+2],[r.x+r.w-3,r.z+2],[r.x+2,r.z+r.d-3],[r.x+r.w-3,r.z+r.d-3]];for(const[c,u]of l)for(let h=s+1;h<=o;h++)i.setGeneratedBlockIfInChunk(t,e,n,c,h,u,D.CASTLE_BRICK)}}function A0(i,t,e,n,s,r){const a=Math.min(ge-3,s+r.h);for(let o=r.z-r.r;o<=r.z+r.r;o++)for(let l=r.x-r.r;l<=r.x+r.r;l++){const c=Math.abs(l-r.x),u=Math.abs(o-r.z);if(Math.max(c,u)>r.r)continue;i.setGeneratedBlockIfInChunk(t,e,n,l,s,o,D.CASTLE_BRICK);for(let f=s+1;f<=a;f++)Math.max(c,u)===r.r?i.setGeneratedBlockIfInChunk(t,e,n,l,f,o,D.CASTLE_BRICK):i.setGeneratedAirIfInChunk(t,e,n,l,f,o);const h=a+1;((l+o&1)===0||Math.max(c,u)===r.r)&&i.setGeneratedBlockIfInChunk(t,e,n,l,h,o,D.CASTLE_BRICK)}}function R0(i,t,e,n,s,r){for(let a=s+1;a<=s+4;a++)for(let o=-1;o<=1;o++)r.side===0?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z-1)):r.side===1?(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x+1,a,r.z+o)):r.side===2?(i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(t,e,n,r.x+o,a,r.z+1)):(i.setGeneratedAirIfInChunk(t,e,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(t,e,n,r.x-1,a,r.z+o))}const Bi=96,w0=.24;function C0(i){return Math.max(0,Math.min(1,i))}function I0(i,t,e,n,s,r){const a=s-e,o=r-n,l=i-e,c=t-n,u=a*a+o*o;if(u<=1e-5){const g=i-e,_=t-n;return{distance:Math.hypot(g,_),t:0}}const h=C0((l*a+c*o)/u),f=e+a*h,p=n+o*h;return{distance:Math.hypot(i-f,t-p),t:h}}function P0(i,t,e){const n=`${t},${e}`;if(i.ravineCache.has(n))return i.ravineCache.get(n);if(zt(t,e,i.seed+74111)>w0)return i.ravineCache.set(n,null),null;const r=t*Bi+Bi*.5,a=e*Bi+Bi*.5,o=zt(t,e,i.seed+74113)*Math.PI*2,c=(70+zt(t,e,i.seed+74117)*120)*.5,u=(zt(t,e,i.seed+74119)-.5)*30,h=(zt(t,e,i.seed+74123)-.5)*30,f=r+u,p=a+h,g={ax:f-Math.cos(o)*c,az:p-Math.sin(o)*c,bx:f+Math.cos(o)*c,bz:p+Math.sin(o)*c,width:4+zt(t,e,i.seed+74129)*8,depth:14+zt(t,e,i.seed+74131)*34};return i.ravineCache.set(n,g),g}function L0(i,t,e,n,s,r){for(let a=0;a<nt;a++)for(let o=0;o<nt;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=we(l,Bi),f=we(c,Bi);let p=ge,g=!1;for(let d=-2;d<=2;d++)for(let b=-2;b<=2;b++){const T=P0(i,h+b,f+d);if(!T)continue;const{distance:E,t:P}=I0(l+.5,c+.5,T.ax,T.az,T.bx,T.bz),C=T.width*(.7+.3*Math.sin(Math.PI*P));if(E>C)continue;g=!0;const A=1-E/C,F=T.depth*A*A,S=u-F;S<p&&(p=S)}if(!g)continue;const _=Math.max(4,Math.floor(p)),m=Math.min(ge-2,u+2);for(let d=_;d<=m;d++)i.setGeneratedAirIfInChunk(t,e,n,l,d,c)}}function D0(i,t,e,n,s,r){for(let a=0;a<nt;a++)for(let o=0;o<nt;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Ee(l*.008,c*.008,i.seed+9501,3,2,.5),f=Math.min(u-2,88);if(f<=8)continue;for(let _=6;_<=f;_++){const m=ra(l*.045,_*.06,c*.045,i.seed+9601,3,2,.5),d=ra(l*.031+33,_*.045,c*.031+91,i.seed+9609,2,2,.5),b=.71-Math.max(0,h-.52)*.26;(m>b||h>.6&&m>b-.08&&d>.72)&&i.setGeneratedAirIfInChunk(t,e,n,l,_,c)}const p=Ee(l*.011,c*.011,i.seed+9701,3,2,.5),g=zt(l,c,i.seed+9702);if(p>.66&&g>.93&&u>14){const _=3+(g*6|0),m=Math.max(5,u-_);for(let b=u;b>=m;b--)i.setGeneratedAirIfInChunk(t,e,n,l,b,c);if(p>.72||h>.58){const b=Math.max(6,u-36);for(let T=m-1;T>=b;T--)ra(l*.06,T*.05,c*.06,i.seed+9721,2,2,.5)>.46&&(i.setGeneratedAirIfInChunk(t,e,n,l,T,c),zt(l+T,c-T,i.seed+9731)>.72&&i.setGeneratedAirIfInChunk(t,e,n,l+1,T,c))}}}}function U0(i,t,e,n,s,r){L0(i,t,e,n,s,r),D0(i,t,e,n,s,r);for(let a=0;a<nt;a++)for(let o=0;o<nt;o++)t[(0*nt+o)*nt+a]!==D.BEDROCK&&(t[(0*nt+o)*nt+a]=D.BEDROCK)}function N0(i,t,e,n,s,r){for(let o=s-6;o<s+nt+6;o++)for(let l=r-6;l<r+nt+6;l++){const c=i.getColumnData(o,l),u=c.height,h=i.getGeneratedBlockFromChunkData(t,e,n,o,u+1,l),f=F0(i,t,e,n,o,u,l),p=zt(o,l,i.seed+9001),g=Ec(o*.03,l*.03,i.seed+9002);if(c.dominantBiome===Ht.FOREST&&(f&&p>.981&&g>.42&&c.surface===D.GRASS&&Qs(i,t,e,n,o,u+1,l,4+(p*4|0),2,!1),f&&p>.973&&p<=.981&&g>.46&&c.surface===D.GRASS&&O0(i,t,e,n,o,u+1,l,5+(p*3|0)),f&&h===D.AIR&&c.surface===D.GRASS&&p>.93&&p<.948&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.FLOWER_RED),f&&h===D.AIR&&c.surface===D.GRASS&&p>.948&&p<.965&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.FLOWER_YELLOW)),c.dominantBiome===Ht.JUNGLE&&(f&&p>.972&&g>.34&&c.surface===D.GRASS&&Qs(i,t,e,n,o,u+1,l,6+(p*5|0),3,!0),f&&h===D.AIR&&p>.88&&p<.94&&c.surface===D.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.MOSS),f&&h===D.AIR&&p>.942&&p<.957&&c.surface===D.GRASS&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.FLOWER_YELLOW)),c.dominantBiome===Ht.DESERT){if(p>.972&&g>.3&&c.surface===D.SAND){const _=2+(p*5|0);for(let m=0;m<_;m++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+m,l,D.CACTUS)}h===D.AIR&&p>.93&&p<.945&&c.surface===D.SAND&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.GRAVEL)}if(c.dominantBiome===Ht.MOUNTAIN&&(h===D.AIR&&p>.89&&p<.93&&u>68&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.GRAVEL),p>.988&&g>.5&&u>70)){const _=2+(p*4|0);for(let m=0;m<_;m++)i.setGeneratedBlockIfInChunk(t,e,n,o,u+1+m,l,u+m>84?D.SNOW:D.STONE)}c.dominantBiome===Ht.PLAINS&&(f&&h===D.AIR&&c.surface===D.GRASS&&p>.86&&p<.915&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.FLOWER_RED),f&&h===D.AIR&&c.surface===D.GRASS&&p>.915&&p<.965&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.FLOWER_YELLOW),f&&p>.992&&g>.45&&c.surface===D.GRASS&&Qs(i,t,e,n,o,u+1,l,4+(p*3|0),2,!1)),c.dominantBiome===Ht.TUNDRA&&(h===D.AIR&&p>.94&&p<.97&&c.surface===D.SNOW&&i.setGeneratedBlockIfInChunk(t,e,n,o,u+1,l,D.GRAVEL),p>.991&&g>.5&&c.surface===D.SNOW&&Qs(i,t,e,n,o,u+1,l,4+(p*3|0),1,!1))}}function F0(i,t,e,n,s,r,a){const o=i.getGeneratedBlockFromChunkData(t,e,n,s,r,a);if(o===D.AIR||o===D.WATER)return!1;const l=s-e*nt,c=a-n*nt;if(l<0||c<0||l>=nt||c>=nt)return!1;for(let u=1;u<=5;u++){const h=i.getGeneratedBlockFromChunkData(t,e,n,s,r-u,a);if(h===D.AIR||h===D.WATER)return!1}return!0}function Qs(i,t,e,n,s,r,a,o,l,c){for(let h=0;h<o;h++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+h,a,D.LOG);const u=r+o;for(let h=-l;h<=l;h++){const f=Math.max(1,l-Math.abs(h)+1);for(let p=-f;p<=f;p++)for(let g=-f;g<=f;g++){if(Math.abs(p)+Math.abs(g)>f+1)continue;const _=s+p,m=u+h,d=a+g;if(i.setGeneratedLeafIfAir(t,e,n,_,m,d),!c||!(Math.abs(p)===f||Math.abs(g)===f))continue;const T=zt(_,d,i.seed+11811+h*17);if(T<.62)continue;const E=2+(T*4|0);for(let P=1;P<=E;P++)i.setGeneratedVineIfAir(t,e,n,_,m-P,d)}}}function O0(i,t,e,n,s,r,a,o){for(let u=0;u<o;u++)i.setGeneratedBlockIfInChunk(t,e,n,s,r+u,a,D.LOG);const l=r+o,c=2;for(let u=-c;u<=c;u++){const h=Math.max(1,c-Math.abs(u)+1);for(let f=-h;f<=h;f++)for(let p=-h;p<=h;p++){if(Math.abs(f)+Math.abs(p)>h+1)continue;const g=s+f,_=l+u,m=a+p;zt(g*19+_,m*23-_,i.seed+29011)>.86&&Math.abs(f)+Math.abs(p)>=2?i.setGeneratedBlockIfInChunk(t,e,n,g,_,m,D.APPLE):i.setGeneratedLeafIfAir(t,e,n,g,_,m)}}}function rs(i,t){return`${i},${t}`}function bn(i,t,e){return t*nt*nt+e*nt+i}class B0{constructor(t,e,n=133742){this.scene=t,this.atlas=e,this.seed=n|0,this.generated=new Map,this.modified=new Map,this.loaded=new Map,this.buildQueue=[],this.castleCache=new Map,this.ravineCache=new Map,this.materialOpaque=null,this.materialTransparent=null}setupMaterials(t,e){this.materialOpaque=t,this.materialTransparent=e}getClimate(t,e){return yc(this,t,e)}getBiomeBlend(t,e){return Tc(this,t,e)}getColumnData(t,e){return v0(this,t,e)}getBiomeAt(t,e){return this.getColumnData(t,e).dominantBiome}getSurfaceYAt(t,e){return this.getColumnData(t,e).height}generateChunkData(t,e){const n=rs(t,e);if(this.generated.has(n))return this.generated.get(n);const s=new Uint8Array(nt*ge*nt),r=t*nt,a=e*nt;for(let o=0;o<nt;o++)for(let l=0;l<nt;l++){const c=r+o,u=a+l,h=this.getColumnData(c,u),f=h.height;for(let p=0;p<=f;p++){let g;p===0?g=D.BEDROCK:p===f?g=h.surface:p>=f-3?g=h.subsurface:g=D.STONE,s[bn(o,p,l)]=g}if(f<Dl)for(let p=f+1;p<=Dl;p++)s[bn(o,p,l)]=D.WATER}return U0(this,s,t,e,r,a),N0(this,s,t,e,r,a),y0(this,s,t,e,r,a),this.generated.set(n,s),s}getGeneratedBlockFromChunkData(t,e,n,s,r,a){if(r<0)return D.BEDROCK;if(r>=ge)return D.AIR;const o=s-e*nt,l=a-n*nt;return o<0||l<0||o>=nt||l>=nt?D.AIR:t[bn(o,r,l)]}setGeneratedBlockIfInChunk(t,e,n,s,r,a,o){if(r<=0||r>=ge)return;const l=s-e*nt,c=a-n*nt;l<0||c<0||l>=nt||c>=nt||(t[bn(l,r,c)]=o)}setGeneratedAirIfInChunk(t,e,n,s,r,a){if(r<=0||r>=ge)return;const o=s-e*nt,l=a-n*nt;o<0||l<0||o>=nt||l>=nt||(t[bn(o,r,l)]=D.AIR)}setGeneratedLeafIfAir(t,e,n,s,r,a){if(r<=0||r>=ge)return;const o=s-e*nt,l=a-n*nt;if(o<0||l<0||o>=nt||l>=nt)return;const c=bn(o,r,l),u=t[c];(u===D.AIR||u===D.WATER||u===D.VINE)&&(t[c]=D.LEAVES)}setGeneratedVineIfAir(t,e,n,s,r,a){if(r<=0||r>=ge)return;const o=s-e*nt,l=a-n*nt;if(o<0||l<0||o>=nt||l>=nt)return;const c=bn(o,r,l);t[c]===D.AIR&&(t[c]=D.VINE)}getLocalBlockFromData(t,e,n,s,r){if(s<0)return D.BEDROCK;if(s>=ge)return D.AIR;const a=rs(t,e),o=bn(n,s,r),l=this.modified.get(a);return l&&l.has(o)?l.get(o):this.generateChunkData(t,e)[o]}getBlock(t,e,n){if(e<0)return D.BEDROCK;if(e>=ge)return D.AIR;const s=we(t,nt),r=we(n,nt),a=Js(t,nt),o=Js(n,nt);return this.getLocalBlockFromData(s,r,a,e,o)}setBlock(t,e,n,s){if(e<=0||e>=ge)return!1;const r=we(t,nt),a=we(n,nt),o=Js(t,nt),l=Js(n,nt),c=rs(r,a),u=bn(o,e,l),h=this.generateChunkData(r,a)[u];let f=this.modified.get(c);return f||(f=new Map,this.modified.set(c,f)),s===h?f.delete(u):f.set(u,s),f.size===0&&this.modified.delete(c),this.markChunkDirty(r,a),o===0&&this.markChunkDirty(r-1,a),o===nt-1&&this.markChunkDirty(r+1,a),l===0&&this.markChunkDirty(r,a-1),l===nt-1&&this.markChunkDirty(r,a+1),!0}markChunkDirty(t,e){const n=rs(t,e),s=this.loaded.get(n);s&&(s.dirty||(s.dirty=!0,this.buildQueue.push(n)))}loadChunksAround(t,e){const n=we(Math.floor(t),nt),s=we(Math.floor(e),nt),r=new Set;for(let o=-ci;o<=ci;o++)for(let l=-ci;l<=ci;l++){const c=n+l,u=s+o,h=rs(c,u);r.add(h),this.loaded.has(h)||(this.loaded.set(h,{cx:c,cz:u,key:h,dirty:!0,opaqueMesh:null,transparentMesh:null}),this.buildQueue.push(h))}const a=ci+2;for(const[o,l]of this.loaded.entries()){const c=Math.abs(l.cx-n),u=Math.abs(l.cz-s);!r.has(o)&&(c>a||u>a)&&(this.disposeChunk(l),this.loaded.delete(o))}}disposeChunk(t){t.opaqueMesh&&(t.opaqueMesh.geometry.dispose(),this.scene.remove(t.opaqueMesh),t.opaqueMesh=null),t.transparentMesh&&(t.transparentMesh.geometry.dispose(),this.scene.remove(t.transparentMesh),t.transparentMesh=null)}rebuildOneChunk(){for(;this.buildQueue.length>0;){const t=this.buildQueue.shift(),e=this.loaded.get(t);if(!e||!e.dirty)continue;const n=p0(this,e.cx,e.cz,this.atlas.getFaceUVs);this.disposeChunk(e),n.opaque&&(e.opaqueMesh=new We(n.opaque,this.materialOpaque),e.opaqueMesh.frustumCulled=!0,this.scene.add(e.opaqueMesh)),n.transparent&&(e.transparentMesh=new We(n.transparent,this.materialTransparent),e.transparentMesh.frustumCulled=!0,this.scene.add(e.transparentMesh)),e.dirty=!1;return}}isBlockTransparent(t){return t0(t)}}const Bn=384,z0=.56,Fi=(ci+5)*nt,k0={[Ht.FOREST]:{key:"deer",name:"Deer",color:10516047,speed:1.6},[Ht.DESERT]:{key:"lizard",name:"Lizard",color:12169325,speed:1.4},[Ht.JUNGLE]:{key:"parrot",name:"Parrot",color:3065451,speed:2.2,flying:!0},[Ht.MOUNTAIN]:{key:"goat",name:"Goat",color:14145757,speed:1.5},[Ht.PLAINS]:{key:"sheep",name:"Sheep",color:15790319,speed:1.3},[Ht.TUNDRA]:{key:"reindeer",name:"Reindeer",color:10454377,speed:1.5}},H0={[Ht.FOREST]:{key:"bandit",name:"Bandit",color:7228726,speed:2.1,health:65,drop:D.WEAPON_BANDIT_BLADE},[Ht.DESERT]:{key:"sandstalker",name:"Sandstalker",color:9929799,speed:2,health:58,drop:D.WEAPON_SCORP_BOW},[Ht.JUNGLE]:{key:"jaguar",name:"Jungle Stalker",color:12747069,speed:2.3,health:60,drop:D.WEAPON_JAGUAR_CLAWS},[Ht.MOUNTAIN]:{key:"rockwraith",name:"Rock Wraith",color:7962758,speed:1.9,health:72,drop:D.WEAPON_WRAITH_HAMMER},[Ht.PLAINS]:{key:"raider",name:"Raider",color:7358520,speed:2,health:68,drop:D.WEAPON_RAIDER_SABER},[Ht.TUNDRA]:{key:"yeti",name:"Yeti",color:13162981,speed:1.8,health:85,drop:D.WEAPON_YETI_AXE}},G0=new Set(["bandit","raider"]);function as(i,t,e){const n=Math.floor(t),s=Math.floor(e);for(let r=ge-1;r>=1;r--){const a=i.getBlock(n,r,s),o=i.getBlock(n,r+1,s);if(a!==D.AIR&&a!==D.WATER&&o===D.AIR)return r}return 1}function rt(i,t,e,n){const s=new gi(t[0],t[1],t[2]),r=new xo({color:n}),a=new We(s,r);return a.position.set(e[0],e[1],e[2]),i.add(a),a}function hn(i,t,e,n=1776411,s=.12){rt(i,[.06,.06,.02],[-s,t,e],n),rt(i,[.06,.06,.02],[s,t,e],n)}function fn(i){return{type:i,legs:[],arms:[],wings:[],tail:null,head:null}}function V0(i){const t=fn("humanoid");return rt(i,[.6,.92,.34],[0,.46,0],3960737),t.head=rt(i,[.52,.5,.36],[0,1.17,0],14664353),t.legs.push(rt(i,[.18,.56,.2],[-.2,.24,0],2964307)),t.legs.push(rt(i,[.18,.56,.2],[.2,.24,0],2964307)),t.arms.push(rt(i,[.1,.4,.1],[-.36,.62,0],14664353)),t.arms.push(rt(i,[.1,.4,.1],[.36,.62,0],14664353)),rt(i,[.58,.1,.38],[0,1.48,0],3812130),hn(i,1.2,.19,1710618,.11),rt(i,[.1,.03,.02],[0,1.09,.19],8015674),t}function bc(i){const t=fn("quadruped");rt(i,[.75,.44,.34],[0,.58,0],10516047),t.head=rt(i,[.32,.32,.28],[.42,.76,0],10120774),rt(i,[.2,.14,.2],[.53,.62,0],9330233),t.tail=rt(i,[.08,.12,.08],[-.42,.64,0],8542003),hn(i,.8,.14,1513239,.05);for(const e of[-.24,.24])t.legs.push(rt(i,[.14,.38,.14],[e,.2,.12],8082486)),t.legs.push(rt(i,[.14,.38,.14],[e,.2,-.12],8082486));return rt(i,[.04,.28,.04],[.5,1.02,.09],13878443),rt(i,[.04,.28,.04],[.5,1.02,-.09],13878443),t}function W0(i){const t=fn("crawler");rt(i,[.8,.22,.32],[0,.38,0],12169325),t.head=rt(i,[.3,.18,.24],[.49,.41,0],10261593),t.tail=rt(i,[.46,.1,.1],[-.62,.32,0],9208913),hn(i,.45,.13,2236962,.05);for(const e of[-.13,.13])t.legs.push(rt(i,[.14,.1,.14],[-.15,.2,e],10063705)),t.legs.push(rt(i,[.14,.1,.14],[.2,.2,e],10063705));return t}function X0(i){const t=fn("flying");return rt(i,[.32,.42,.28],[0,.64,0],3065451),t.head=rt(i,[.28,.24,.24],[.14,.9,0],2339935),rt(i,[.1,.08,.08],[.3,.88,0],14985781),hn(i,.93,.12,1052688,.045),t.wings.push(rt(i,[.48,.06,.2],[0,.66,.19],5232383)),t.wings.push(rt(i,[.48,.06,.2],[0,.66,-.19],4110304)),t.tail=rt(i,[.14,.16,.12],[-.2,.4,0],2861402),t}function Y0(i){const t=fn("quadruped");rt(i,[.68,.4,.3],[0,.58,0],14408927),t.head=rt(i,[.3,.28,.24],[.38,.76,0],13158862),hn(i,.79,.12,1447446,.05),rt(i,[.06,.24,.06],[.43,.98,.09],13218950),rt(i,[.06,.24,.06],[.43,.98,-.09],13218950);for(const e of[-.2,.2])t.legs.push(rt(i,[.13,.36,.13],[e,.2,.11],9869213)),t.legs.push(rt(i,[.13,.36,.13],[e,.2,-.11],9869213));return t}function Ol(i){const t=fn("quadruped");rt(i,[.74,.46,.42],[0,.58,0],15790319),t.head=rt(i,[.34,.3,.28],[.43,.72,0],4602932),hn(i,.74,.14,1250067,.06);for(const e of[-.22,.22])t.legs.push(rt(i,[.13,.34,.13],[e,.2,.14],6181962)),t.legs.push(rt(i,[.13,.34,.13],[e,.2,-.14],6181962));return t}function q0(i){const t=bc(i);return rt(i,[.04,.24,.04],[.52,1.14,.14],14209727),rt(i,[.04,.16,.04],[.57,1.2,.18],14209727),rt(i,[.04,.24,.04],[.52,1.14,-.14],14209727),rt(i,[.04,.16,.04],[.57,1.2,-.18],14209727),t}function Bl(i,t,e,n=!1){const s=fn("humanoid");return rt(i,[.56,.88,.32],[0,.46,0],t),s.head=rt(i,[.44,.48,.32],[0,1.14,0],e),s.legs.push(rt(i,[.16,.56,.16],[-.18,.22,0],3155487)),s.legs.push(rt(i,[.16,.56,.16],[.18,.22,0],3155487)),s.arms.push(rt(i,[.12,.42,.12],[-.34,.62,0],e)),s.arms.push(rt(i,[.12,.42,.12],[.34,.62,0],e)),hn(i,1.16,.17,n?12524829:1315860,.08),rt(i,[.12,.04,.02],[0,1.04,.17],n?5181456:7819064),n&&rt(i,[.46,.08,.36],[0,1.42,0],2039583),s}function K0(i){const t=fn("crawler");rt(i,[.66,.3,.32],[0,.48,0],9929799),t.head=rt(i,[.32,.2,.24],[.42,.54,0],8219191),hn(i,.58,.12,13512478,.05),t.tail=rt(i,[.5,.08,.08],[-.58,.42,0],7166512);for(const e of[-.13,.13])t.legs.push(rt(i,[.12,.2,.12],[-.16,.2,e],8351806)),t.legs.push(rt(i,[.12,.2,.12],[.16,.2,e],8351806));return t}function $0(i){const t=fn("quadruped");rt(i,[.74,.34,.32],[0,.54,0],12747069),t.head=rt(i,[.32,.24,.24],[.45,.62,0],11300657),hn(i,.65,.12,12394014,.05);for(const e of[-.22,.22])t.legs.push(rt(i,[.12,.28,.12],[e,.2,.13],9329191)),t.legs.push(rt(i,[.12,.28,.12],[e,.2,-.13],9329191));return t.tail=rt(i,[.44,.08,.08],[-.58,.5,0],9066533),t}function Z0(i){const t=fn("wraith");return rt(i,[.64,.86,.42],[0,.56,0],7962758),t.head=rt(i,[.48,.36,.34],[0,1.18,0],6976378),t.arms.push(rt(i,[.26,.5,.16],[-.45,.62,0],6713207)),t.arms.push(rt(i,[.26,.5,.16],[.45,.62,0],6713207)),hn(i,1.2,.18,16756019,.09),t}function j0(i){const t=fn("humanoid");return rt(i,[.78,.96,.48],[0,.58,0],13162981),t.head=rt(i,[.52,.5,.4],[0,1.23,0],14149103),t.arms.push(rt(i,[.28,.62,.2],[-.48,.62,0],12111067)),t.arms.push(rt(i,[.28,.62,.2],[.48,.62,0],12111067)),t.legs.push(rt(i,[.18,.5,.18],[-.2,.25,0],10334914)),t.legs.push(rt(i,[.18,.5,.18],[.2,.25,0],10334914)),hn(i,1.22,.2,9093375,.1),rt(i,[.16,.05,.03],[0,1.08,.2],5337490),t}function aa(i,t,e=!1){const n=new os;let s;if(e)return s=V0(n),{root:n,rig:s};switch(i.key){case"deer":s=bc(n);break;case"lizard":s=W0(n);break;case"parrot":s=X0(n);break;case"goat":s=Y0(n);break;case"sheep":s=Ol(n);break;case"reindeer":s=q0(n);break;case"bandit":s=Bl(n,7228726,13674370,!0);break;case"raider":s=Bl(n,5715753,13146740,!0);break;case"sandstalker":s=K0(n);break;case"jaguar":s=$0(n);break;case"rockwraith":s=Z0(n);break;case"yeti":s=j0(n);break;default:s=Ol(n);break}return t&&rt(n,[.08,.08,.08],[.24,.9,.2],9376788),{root:n,rig:s}}function zl(i){const t=document.createElement("canvas");t.width=96,t.height=16;const e=new dc(t);e.minFilter=on;const n=new uc({map:e,transparent:!0,depthTest:!1,depthWrite:!1}),s=new nh(n);s.scale.set(1.45,.26,1),s.position.set(0,2.25,0),i.mesh.add(s),i.healthCanvas=t,i.healthTexture=e,i.healthSprite=s,Ac(i)}function Ac(i){if(!i.healthCanvas)return;const t=i.healthCanvas.getContext("2d");t.clearRect(0,0,i.healthCanvas.width,i.healthCanvas.height),t.fillStyle="rgba(25,25,25,0.85)",t.fillRect(0,0,96,16);const e=Math.max(0,Math.min(1,i.health/i.maxHealth));t.fillStyle="rgba(192,36,36,0.95)",t.fillRect(2,2,Math.floor(92*e),12),i.healthTexture.needsUpdate=!0}function kl(i){const t=new vo(.65,.95,24),e=new mo({color:16726843,transparent:!0,opacity:0,side:an,depthTest:!1}),n=new We(t,e);n.position.set(0,1.05,0),n.rotation.x=Math.PI/2,i.mesh.add(n),i.damageHalo=n}class J0{constructor(t,e,n={}){this.scene=t,this.world=e,this.onEnemyKilled=n.onEnemyKilled??(()=>{}),this.entities=new Map,this.chunkSpawns=new Map,this.hostileSites=new Map,this.hostileSiteSpawns=new Map,this.nextId=1,this.spawnTick=0,this.tmpDir=new N,this.raycaster=new mh}attachEntityMesh(t){t.mesh.userData.entityId=t.id,t.mesh.traverse(e=>{e.isMesh&&(e.userData.entityId=t.id)}),this.scene.add(t.mesh)}spawnForChunk(t){const e=t.key;if(this.chunkSpawns.has(e))return;const n=t.cx*nt+nt*.5,s=t.cz*nt+nt*.5,r=this.world.getBiomeAt(n,s),a=[];a.push(this.spawnMob(t,r,k0[r],!1));const o=zt(t.cx,t.cz,45019);(r===Ht.FOREST||r===Ht.PLAINS||r===Ht.JUNGLE)&&o>.93&&a.push(this.spawnQuestGiver(t,r)),this.chunkSpawns.set(e,a.filter(Boolean))}getHostileSite(t,e){const n=`${t},${e}`;if(this.hostileSites.has(n))return this.hostileSites.get(n);if(zt(t,e,88901)>z0)return this.hostileSites.set(n,null),null;const r=64,a=t*Bn+r+Math.floor(zt(t,e,88911)*(Bn-r*2)),o=e*Bn+r+Math.floor(zt(t,e,88921)*(Bn-r*2)),l=this.world.getBiomeAt(a,o),c=H0[l],u=G0.has(c.key);let h=1;u?h=3+(zt(t,e,88931)*3|0):zt(t,e,88941)>.8&&(h=2);const f={key:n,x:a,z:o,biome:l,def:c,intelligent:u,groupSize:h};return this.hostileSites.set(n,f),f}spawnHostileSite(t){if(this.hostileSiteSpawns.has(t.key))return;const e=[],n=as(this.world,t.x,t.z);for(let s=0;s<t.groupSize;s++){const r=zt(s,t.x,7801)*Math.PI*2,a=t.intelligent?2.2+zt(s,t.z,7802)*4.5:zt(s,t.z,7803)*2.5,o=Math.floor(t.x+Math.cos(r)*a),l=Math.floor(t.z+Math.sin(r)*a),c=as(this.world,o,l),u=this.spawnHostileAt(t,s,o,c,l,n);u&&e.push(u)}this.hostileSiteSpawns.set(t.key,e)}spawnHostileAt(t,e,n,s,r,a){const{root:o,rig:l}=aa(t.def,!0,!1),c=this.nextId++,u=s+(t.def.flying?5.3:1.02);o.position.set(n+.5,u,r+.5);const h=Math.PI*2*e/Math.max(1,t.groupSize),f=t.intelligent?3.2:1.6,p={id:c,sourceType:"site",sourceKey:t.key,biome:t.biome,kind:"mob",key:t.def.key,name:t.def.name,hostile:!0,flying:!!t.def.flying,intelligent:t.intelligent,speed:t.def.speed,mesh:o,rig:l,vx:0,vz:0,wanderTimer:.6+zt(c,n,8111)*2,attackTimer:0,homeY:u,homeX:t.x+Math.cos(h)*f,homeZ:t.z+Math.sin(h)*f,patrolRadius:t.intelligent?7.5:10,animPhase:zt(c,n,9201)*Math.PI*2,groupId:t.key,groupCenterY:a+1.02,maxHealth:t.def.health,health:t.def.health,dropItem:t.def.drop,damageFlash:0};return zl(p),kl(p),this.entities.set(c,p),this.attachEntityMesh(p),c}spawnMob(t,e,n,s){const r=t.cx*nt+2+Math.floor(zt(t.cx,t.cz,s?443:223)*12),a=t.cz*nt+2+Math.floor(zt(t.cx,t.cz,s?877:557)*12),o=as(this.world,r,a),{root:l,rig:c}=aa(n,s,!1),u=this.nextId++,h=o+(n.flying?5.3:1.02);l.position.set(r+.5,h,a+.5);const f={id:u,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"mob",key:n.key,name:n.name,hostile:s,flying:!!n.flying,intelligent:!1,speed:n.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.3+zt(u,r,8111)*2,attackTimer:0,homeY:h,homeX:r,homeZ:a,patrolRadius:9,animPhase:zt(u,r,9201)*Math.PI*2,groupId:null,maxHealth:s?50:30,health:s?50:30,dropItem:null,damageFlash:0};return s&&(zl(f),kl(f)),this.entities.set(u,f),this.attachEntityMesh(f),u}spawnQuestGiver(t,e){const n=t.cx*nt+4+Math.floor(zt(t.cx,t.cz,1201)*8),s=t.cz*nt+4+Math.floor(zt(t.cx,t.cz,1202)*8),r=as(this.world,n,s),{root:a}=aa({},!1,!0),o=this.nextId++;a.position.set(n+.5,r+1.02,s+.5);const l={id:o,sourceType:"chunk",sourceKey:t.key,biome:e,kind:"questgiver",name:`Quest Giver (${g0[e]})`,hostile:!1,flying:!1,intelligent:!0,speed:0,mesh:a,rig:null,homeY:r+1.02,bobOffset:zt(o,n,21991)*6.28,animPhase:0};return this.entities.set(o,l),this.attachEntityMesh(l),o}removeEntity(t){const e=this.entities.get(t);e&&(this.scene.remove(e.mesh),e.mesh.traverse(n=>{!n.isMesh&&!n.isSprite||(n.geometry?.dispose?.(),n.material?.dispose?.(),n.material?.map&&n.material.map.dispose?.())}),this.entities.delete(t))}getEntityFromObject(t){let e=t;for(;e;){if(e.userData&&e.userData.entityId!==void 0)return this.entities.get(e.userData.entityId)??null;e=e.parent}return null}attackFromRay(t,e,n,s){const r=[],a=[];for(const f of this.entities.values())!f.hostile||f.kind!=="mob"||f.health<=0||(r.push(f.mesh),a.push(f));if(r.length===0)return null;this.raycaster.set(t,e),this.raycaster.far=n;const o=this.raycaster.intersectObjects(r,!0);if(o.length>0){const f=this.getEntityFromObject(o[0].object);return f?this.damageEntity(f,s):null}const l=.4;let c=null,u=1/0;const h=new N;for(const f of a){h.subVectors(f.mesh.position,t);const p=h.length();p>n||p<1e-4||e.angleTo(h.multiplyScalar(1/p))>l||p<u&&(u=p,c=f)}return c?this.damageEntity(c,s):null}attackNearestInFront(t,e,n,s,r){let a=null,o=1/0;const l=new N;for(const c of this.entities.values()){if(!c.hostile||c.kind!=="mob"||c.health<=0)continue;l.subVectors(c.mesh.position,t);const u=l.length();if(u>n||u<1e-4)continue;const h=l.clone().multiplyScalar(1/u);e.angleTo(h)>s||u<o&&(o=u,a=c)}return a?this.damageEntity(a,r):null}damageEntity(t,e){if(!t||!t.hostile||t.kind!=="mob")return null;if(t.health=Math.max(0,t.health-e),t.damageFlash=.25,Ac(t),t.health<=0){const n={name:t.name,key:t.key,dropItem:t.dropItem};return this.removeEntity(t.id),this.onEnemyKilled(n),{killed:!0,...n}}return{killed:!1,name:t.name,key:t.key}}spawnHostilesNear(t){const e=we(t.x-Fi,Bn),n=we(t.x+Fi,Bn),s=we(t.z-Fi,Bn),r=we(t.z+Fi,Bn);for(let a=s;a<=r;a++)for(let o=e;o<=n;o++){const l=this.getHostileSite(o,a);if(!l)continue;const c=l.x-t.x,u=l.z-t.z;c*c+u*u>Fi*Fi||this.spawnHostileSite(l)}}syncSpawns(t){for(const s of this.world.loaded.values())this.spawnForChunk(s);this.spawnHostilesNear(t);const e=(ci+6)*nt,n=e*e;for(const[s,r]of this.entities){const a=r.mesh.position.x-t.x,o=r.mesh.position.z-t.z;a*a+o*o>n&&this.removeEntity(s)}for(const[s,r]of this.chunkSpawns.entries())r.some(a=>this.entities.has(a))||this.chunkSpawns.delete(s);for(const[s,r]of this.hostileSiteSpawns.entries())r.some(a=>this.entities.has(a))||this.hostileSiteSpawns.delete(s)}animateEntity(t,e,n,s){if(!t.rig)return;const r=t.rig,a=n>.04,o=a?Math.min(.55,n*.16):.05;t.animPhase+=e*(a?8+n*2.4:2.2);for(let l=0;l<r.legs.length;l++){const c=r.legs[l],u=t.animPhase+(l%2===0?0:Math.PI);c.rotation.x=Math.sin(u)*o}for(let l=0;l<r.arms.length;l++){const c=r.arms[l],u=t.animPhase+(l%2===0?Math.PI:0);c.rotation.x=Math.sin(u)*(o*.9)}if(r.wings.length>0){const l=Math.sin(s*16+t.id)*(a?.7:.3);r.wings[0].rotation.z=l,r.wings[1]&&(r.wings[1].rotation.z=-l)}r.tail&&(r.tail.rotation.y=Math.sin(s*5+t.id)*.35,r.tail.rotation.x=Math.cos(s*4+t.id)*.12),r.head&&(r.head.rotation.x=Math.sin(s*2.7+t.id)*.05)}updateEntity(t,e,n,s,r){if(t.kind==="questgiver"){t.mesh.position.y=t.homeY+Math.sin(s*1.9+t.bobOffset)*.06,t.mesh.rotation.y+=n*.4;return}const a=t.mesh.position,o=e.x-a.x,l=e.z-a.z,c=Math.hypot(o,l);if(t.hostile&&r&&c<8.8){const f=c>.001?1/c:0;t.vx=o*f*t.speed*1.25,t.vz=l*f*t.speed*1.25,t.attackTimer+=n*7,a.y=t.homeY+Math.sin(t.attackTimer)*.2}else{if(t.wanderTimer-=n,t.wanderTimer<=0){const f=zt(s*10|0,t.id,7001)*Math.PI*2,p=t.speed*(t.intelligent?.55:.75);t.vx=Math.cos(f)*p,t.vz=Math.sin(f)*p,t.wanderTimer=1.8+zt(t.id,s*4|0,7002)*3.2}if(!t.hostile&&c<4.5){const f=c>.001?1/c:0;t.vx=-o*f*t.speed,t.vz=-l*f*t.speed}if(t.hostile){const f=t.homeX-a.x,p=t.homeZ-a.z,g=Math.hypot(f,p);if(g>t.patrolRadius){const _=g>.001?1/g:0;t.vx=f*_*t.speed*.9,t.vz=p*_*t.speed*.9}}t.flying&&(a.y=t.homeY+Math.sin(s*2.3+t.id)*.7)}a.x+=t.vx*n,a.z+=t.vz*n;const u=as(this.world,a.x,a.z);if(!t.flying){const f=u+1.02;Math.abs(f-t.homeY)<4?(t.homeY=f,a.y=f):(t.vx*=-.8,t.vz*=-.8)}t.damageHalo&&(t.damageFlash=Math.max(0,t.damageFlash-n),t.damageHalo.material.opacity=t.damageFlash>0?.7*(t.damageFlash/.25):0),this.tmpDir.set(t.vx,0,t.vz);const h=this.tmpDir.length();h>.001&&(t.mesh.rotation.y=-Math.atan2(t.vz,t.vx)),this.animateEntity(t,n,h,s)}update(t,e,n,s=!0){this.spawnTick+=e,this.spawnTick>=1&&(this.syncSpawns(t),this.spawnTick=0);for(const r of this.entities.values())this.updateEntity(r,t,e,n,s)}countHostilesInRange(t,e){const n=e*e;let s=0;for(const r of this.entities.values()){if(!r.hostile||r.kind!=="mob")continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z;a*a+o*o+l*l<=n&&s++}return s}getNearestQuestGiver(t,e=4){let n=null,s=e*e;for(const r of this.entities.values()){if(r.kind!=="questgiver")continue;const a=r.mesh.position.x-t.x,o=r.mesh.position.y-t.y,l=r.mesh.position.z-t.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}}const An=1e-4;class Q0{constructor(t,e){this.camera=t,this.domElement=e,this.position=new N(0,40,0),this.velocity=new N(0,0,0),this.yaw=0,this.pitch=0,this.grounded=!1,this.flyMode=!1,this.jumpQueued=!1,this.lastSpaceTap=-9999,this.keys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1,Space:!1},this.isLocked=!1,this.tmpForward=new N,this.tmpRight=new N,this.tmpMove=new N,this.walkSpeed=s0,this.sneakSpeed=r0,this.flySpeed=a0,this.bindInput(),this.syncCamera()}setMovementSpeeds(t,e){this.walkSpeed=Math.max(1,t),this.sneakSpeed=Math.max(.5,this.walkSpeed*.5),this.flySpeed=Math.max(1,Math.min(300,e))}bindInput(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{if(!this.isLocked)return;const e=.0022;this.yaw-=t.movementX*e,this.pitch-=t.movementY*e;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch))}),document.addEventListener("keydown",t=>{if(t.code in this.keys){if(t.repeat)return;if(t.code==="Space"){const e=performance.now();e-this.lastSpaceTap<=u0?(this.flyMode=!this.flyMode,this.flyMode?this.velocity.y=0:this.velocity.y=Math.min(this.velocity.y,0),this.lastSpaceTap=-9999):(this.lastSpaceTap=e,this.flyMode||(this.jumpQueued=!0))}this.keys[t.code]=!0}}),document.addEventListener("keyup",t=>{t.code in this.keys&&(this.keys[t.code]=!1)})}getAABB(t=this.position){const e=ss*.5;return{minX:t.x-e,maxX:t.x+e,minY:t.y,maxY:t.y+js,minZ:t.z-e,maxZ:t.z+e}}overlapsSolid(t,e){const n=Math.floor(e.minX),s=Math.floor(e.maxX-An),r=Math.floor(e.minY),a=Math.floor(e.maxY-An),o=Math.floor(e.minZ),l=Math.floor(e.maxZ-An);for(let c=r;c<=a;c++)for(let u=o;u<=l;u++)for(let h=n;h<=s;h++)if(eo(t.getBlock(h,c,u)))return{x:h,y:c,z:u};return null}resolveAxis(t,e,n){if(n===0)return!1;this.position[e]+=n;let s=!1,r;for(;r=this.overlapsSolid(t,this.getAABB(this.position));)s=!0,e==="x"?(n>0?this.position.x=r.x-ss*.5-An:this.position.x=r.x+1+ss*.5+An,this.velocity.x=0):e==="y"?(n>0?this.position.y=r.y-js-An:(this.position.y=r.y+1+An,this.grounded=!0),this.velocity.y=0):e==="z"&&(n>0?this.position.z=r.z-ss*.5-An:this.position.z=r.z+1+ss*.5+An,this.velocity.z=0);return s}update(t,e){const n=this.grounded;if(this.grounded=!1,this.tmpForward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.tmpRight.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.tmpMove.set(0,0,0),this.keys.KeyW&&this.tmpMove.add(this.tmpForward),this.keys.KeyS&&this.tmpMove.sub(this.tmpForward),this.keys.KeyD&&this.tmpMove.add(this.tmpRight),this.keys.KeyA&&this.tmpMove.sub(this.tmpRight),this.tmpMove.lengthSq()>0&&this.tmpMove.normalize(),this.flyMode){const r=this.flySpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=0,this.keys.Space&&(this.velocity.y+=r),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.velocity.y-=r)}else{const r=this.keys.ShiftLeft||this.keys.ShiftRight?this.sneakSpeed:this.walkSpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=Math.max(c0,this.velocity.y-l0*e),this.jumpQueued&&n&&(this.velocity.y=o0,this.grounded=!1),this.jumpQueued=!1}this.resolveAxis(t,"x",this.velocity.x*e),this.resolveAxis(t,"z",this.velocity.z*e),this.resolveAxis(t,"y",this.velocity.y*e),this.position.y<1&&(this.position.y=1,this.velocity.y=0,this.grounded=!0);const s=ge-.1;this.position.y+js>s&&(this.position.y=s-js,this.velocity.y=0),this.syncCamera()}syncCamera(){this.camera.position.set(this.position.x,this.position.y+i0,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}}const oa=[D.FLOWER_RED,D.FLOWER_YELLOW,D.VINE,D.CACTUS,D.MOSS];class tg{constructor(t,e=1){this.ui=t,this.seed=e|0,this.coins=0,this.activeQuest=null,this.questCounter=0,this.ui.updateCoins(this.coins)}hasOpenDialogue(){return this.ui.isDialogueOpen()}closeDialogue(){this.ui.closeDialogue()}randomFor(t,e){const n=Math.sin((t+1)*12.9898+(this.seed+e)*78.233)*43758.5453;return n-Math.floor(n)}createQuestFor(t){const e=this.randomFor(t.id,this.questCounter+17),n=oa[Math.floor(e*oa.length)%oa.length],s=4+Math.floor(this.randomFor(t.id,this.questCounter+99)*5)%5,r=8+s*3;return this.questCounter+=1,{id:this.questCounter,giverId:t.id,giverName:t.name,target:n,amount:s,reward:r,status:"active"}}getQuestProgress(t){return this.ui.getItemCount(t.target)}onTalkToQuestGiver(t){const e=t.name;if(!this.activeQuest){const a=this.createQuestFor(t),o=un[a.target].name;this.ui.openDialogue(e,`Traveler, I need ${a.amount} ${o} for my camp. Bring them to me and I will pay ${a.reward} coins.`,[{label:"Accept quest",onSelect:()=>{this.activeQuest=a,this.ui.openDialogue(e,`Quest accepted:
Collect ${a.amount} ${o}.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Maybe later",onSelect:()=>this.ui.closeDialogue()}]);return}if(this.activeQuest.giverId!==t.id){this.ui.openDialogue(e,`I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}const n=this.activeQuest,s=un[n.target].name,r=this.getQuestProgress(n);if(r>=n.amount){this.ui.openDialogue(e,`You brought the ${s}! Hand over ${n.amount} and collect ${n.reward} coins?`,[{label:"Turn in quest",onSelect:()=>{if(!this.ui.consumeItem(n.target,n.amount)){this.ui.openDialogue(e,"Looks like you no longer have the items.",[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}this.coins+=n.reward,this.ui.updateCoins(this.coins),this.activeQuest=null,this.ui.openDialogue(e,`Excellent work. Here are ${n.reward} coins.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Not now",onSelect:()=>this.ui.closeDialogue()}]);return}this.ui.openDialogue(e,`Progress: ${r}/${n.amount} ${s}. Keep searching.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}getActiveQuestText(){if(!this.activeQuest)return"";const t=this.activeQuest,e=this.getQuestProgress(t);return`Quest: ${t.giverName} wants ${t.amount} ${un[t.target].name} (${Math.min(e,t.amount)}/${t.amount})`}}function eg(i,t,e,n){const s=e.x>0?1:-1,r=e.y>0?1:-1,a=e.z>0?1:-1;let o=Math.floor(t.x),l=Math.floor(t.y),c=Math.floor(t.z);const u=e.x===0?Number.POSITIVE_INFINITY:Math.abs(1/e.x),h=e.y===0?Number.POSITIVE_INFINITY:Math.abs(1/e.y),f=e.z===0?Number.POSITIVE_INFINITY:Math.abs(1/e.z),p=o+(e.x>0?1:0),g=l+(e.y>0?1:0),_=c+(e.z>0?1:0);let m=e.x===0?Number.POSITIVE_INFINITY:Math.abs((p-t.x)/e.x),d=e.y===0?Number.POSITIVE_INFINITY:Math.abs((g-t.y)/e.y),b=e.z===0?Number.POSITIVE_INFINITY:Math.abs((_-t.z)/e.z);const T=new N(o,l,c);for(;;){const E=i.getBlock(o,l,c);if(E!==0)return{x:o,y:l,z:c,id:E,previous:T.clone()};if(m<d)if(m<b){if(m>n)break;T.set(o,l,c),o+=s,m+=u}else{if(b>n)break;T.set(o,l,c),c+=a,b+=f}else if(d<b){if(d>n)break;T.set(o,l,c),l+=r,d+=h}else{if(b>n)break;T.set(o,l,c),c+=a,b+=f}}return null}const Dt=16,tr=6,Hl=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","water","bedrock","snow","cactus_side","cactus_top","flower_red","flower_yellow","vine","gravel","moss","castle_brick","apple"];function Ae(i,t,e=12,n=1){const[s,r,a]=t,o=i.createImageData(Dt,Dt);for(let l=0;l<o.data.length;l+=4){const c=Math.random()*e-e*.5|0;o.data[l]=Math.max(0,Math.min(255,s+c)),o.data[l+1]=Math.max(0,Math.min(255,r+c)),o.data[l+2]=Math.max(0,Math.min(255,a+c)),o.data[l+3]=Math.floor(255*n)}i.putImageData(o,0,0)}function ng(i){const t=document.createElement("canvas");t.width=Dt,t.height=Dt;const e=t.getContext("2d",{willReadFrequently:!0});if(i==="grass_top")Ae(e,[64,164,68],26);else if(i==="grass_side"){Ae(e,[126,94,62],18),e.fillStyle="rgba(72, 170, 80, 0.9)",e.fillRect(0,0,Dt,4),e.fillStyle="rgba(60, 120, 42, 0.35)";for(let n=0;n<Dt;n+=2)e.fillRect(n,3+n*7%3,1,1)}else if(i==="dirt")Ae(e,[121,86,55],20);else if(i==="stone")Ae(e,[126,126,130],20);else if(i==="sand")Ae(e,[214,198,128],20);else if(i==="log_side"){Ae(e,[121,90,58],18),e.fillStyle="rgba(90, 58, 30, 0.28)";for(let n=0;n<Dt;n+=4)e.fillRect(n,0,2,Dt)}else if(i==="log_top")Ae(e,[159,122,82],10),e.strokeStyle="rgba(108, 74, 43, 0.75)",e.lineWidth=1,e.strokeRect(2.5,2.5,Dt-5,Dt-5),e.strokeRect(5.5,5.5,Dt-11,Dt-11);else if(i==="leaves")Ae(e,[63,145,64],36,.8);else if(i==="water")Ae(e,[62,119,212],16,.72),e.fillStyle="rgba(160, 210, 255, 0.2)",e.fillRect(0,2,Dt,2),e.fillRect(0,9,Dt,1);else if(i==="bedrock"){Ae(e,[52,52,52],28),e.fillStyle="rgba(96,96,96,0.32)";for(let n=0;n<24;n++)e.fillRect(Math.random()*Dt|0,Math.random()*Dt|0,1,1)}else if(i==="snow"){Ae(e,[230,238,244],9),e.fillStyle="rgba(188, 206, 220, 0.4)";for(let n=0;n<Dt;n+=3)e.fillRect(n,n*5%Dt,1,1)}else if(i==="cactus_side"){Ae(e,[54,146,66],15),e.fillStyle="rgba(36,98,44,0.42)";for(let n=1;n<Dt;n+=3)e.fillRect(n,0,1,Dt)}else if(i==="cactus_top")Ae(e,[70,152,80],14),e.fillStyle="rgba(35,93,42,0.6)",e.fillRect(3,3,Dt-6,Dt-6);else if(i==="flower_red")e.clearRect(0,0,Dt,Dt),e.fillStyle="rgba(56,144,62,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(196,34,44,0.92)",e.fillRect(5,2,6,4);else if(i==="flower_yellow")e.clearRect(0,0,Dt,Dt),e.fillStyle="rgba(56,146,64,0.85)",e.fillRect(7,5,2,11),e.fillStyle="rgba(242,199,44,0.92)",e.fillRect(5,2,6,4);else if(i==="vine"){e.clearRect(0,0,Dt,Dt),e.fillStyle="rgba(48,128,52,0.72)";for(let n=0;n<6;n++){const s=2+n*5%12;e.fillRect(s,1+n*2,2,3)}}else if(i==="gravel"){Ae(e,[132,128,121],22),e.fillStyle="rgba(88,84,81,0.25)";for(let n=0;n<16;n++)e.fillRect(Math.random()*Dt|0,Math.random()*Dt|0,1,1)}else if(i==="moss"){Ae(e,[80,126,64],18),e.fillStyle="rgba(36,74,30,0.18)";for(let n=0;n<16;n++)e.fillRect(Math.random()*Dt|0,Math.random()*Dt|0,2,1)}else if(i==="castle_brick"){Ae(e,[118,117,124],12),e.fillStyle="rgba(68,68,74,0.48)";for(let n=0;n<Dt;n+=4)e.fillRect(0,n,Dt,1);for(let n=0;n<Dt;n+=8)e.fillRect(n,0,1,4),e.fillRect(n+4,4,1,4),e.fillRect(n,8,1,4),e.fillRect(n+4,12,1,4)}else i==="apple"&&(e.clearRect(0,0,Dt,Dt),e.fillStyle="rgba(196,36,36,0.92)",e.fillRect(4,4,8,8),e.fillStyle="rgba(232,120,120,0.55)",e.fillRect(5,5,3,3),e.fillStyle="rgba(76,138,58,0.8)",e.fillRect(7,2,2,2),e.fillStyle="rgba(112,84,38,0.8)",e.fillRect(8,1,1,2));return t}function ig(){const i=Math.ceil(Hl.length/tr),t=document.createElement("canvas");t.width=tr*Dt,t.height=i*Dt;const e=t.getContext("2d"),n={};Hl.forEach((c,u)=>{const h=u%tr,f=Math.floor(u/tr);n[c]={tx:h,ty:f},e.drawImage(ng(c),h*Dt,f*Dt)});const s=new dc(t);s.magFilter=je,s.minFilter=pu,s.generateMipmaps=!0,s.colorSpace=Oe;const r=1/t.width,a=1/t.height;function o(c){const u=n[c],h=.02,f=(u.tx*Dt+h)*r,p=1-((u.ty+1)*Dt-h)*a,g=((u.tx+1)*Dt-h)*r,_=1-(u.ty*Dt+h)*a;return[f,p,g,_]}function l(c,u){const f=un[c].textures,p=f.all?f.all:u===zn.PY?f.top:u===zn.NY?f.bottom:f.side;return o(p)}return{texture:s,getFaceUVs:l}}const $e=24;function la(i){return i&&i.id!==void 0?i:{id:D.AIR,count:0}}function Fe(i,t,e,n,s=12,r=255){const a=i.createImageData($e,$e);for(let o=0;o<a.data.length;o+=4){const l=Math.random()*s-s*.5|0;a.data[o]=Math.max(0,Math.min(255,t+l)),a.data[o+1]=Math.max(0,Math.min(255,e+l)),a.data[o+2]=Math.max(0,Math.min(255,n+l)),a.data[o+3]=r}i.putImageData(a,0,0)}function sg(i){const t=document.createElement("canvas");t.width=$e,t.height=$e;const e=t.getContext("2d");switch(i){case D.GRASS:Fe(e,118,92,60,14),e.fillStyle="rgba(67,160,72,0.95)",e.fillRect(0,0,$e,7);break;case D.DIRT:Fe(e,122,84,55,16);break;case D.STONE:Fe(e,122,124,132,16);break;case D.SAND:Fe(e,216,199,128,14);break;case D.LOG:Fe(e,120,90,58,14),e.fillStyle="rgba(90,58,30,0.3)";for(let n=2;n<$e;n+=5)e.fillRect(n,0,2,$e);break;case D.LEAVES:Fe(e,68,150,70,28,230);break;case D.WATER:Fe(e,63,120,210,14,210),e.fillStyle="rgba(175,218,255,0.3)",e.fillRect(0,5,$e,3);break;case D.BEDROCK:Fe(e,58,58,58,24);break;case D.SNOW:Fe(e,233,239,245,8);break;case D.CACTUS:Fe(e,57,145,67,12),e.fillStyle="rgba(33,95,40,0.35)";for(let n=1;n<$e;n+=4)e.fillRect(n,0,1,$e);break;case D.FLOWER_RED:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(196,36,46,0.95)",e.fillRect(8,3,8,6);break;case D.FLOWER_YELLOW:e.fillStyle="rgba(57,146,65,0.95)",e.fillRect(11,7,2,15),e.fillStyle="rgba(240,197,43,0.95)",e.fillRect(8,3,8,6);break;case D.VINE:e.fillStyle="rgba(49,130,52,0.8)";for(let n=0;n<7;n++){const s=3+n*3%16;e.fillRect(s,2+n*2,2,3)}break;case D.GRAVEL:Fe(e,132,128,121,20);break;case D.MOSS:Fe(e,82,126,66,16);break;case D.CASTLE_BRICK:Fe(e,118,117,124,10),e.fillStyle="rgba(66,66,74,0.45)";for(let n=0;n<$e;n+=6)e.fillRect(0,n,$e,1);break;case D.APPLE:e.fillStyle="rgba(197,36,36,0.95)",e.fillRect(6,6,12,12),e.fillStyle="rgba(230,120,120,0.55)",e.fillRect(8,8,4,4),e.fillStyle="rgba(80,144,61,0.9)",e.fillRect(11,3,3,3);break;case D.WEAPON_BANDIT_BLADE:e.fillStyle="rgba(186,188,196,0.95)",e.fillRect(10,3,4,14),e.fillStyle="rgba(110,74,36,0.95)",e.fillRect(9,17,6,4);break;case D.WEAPON_RAIDER_SABER:e.fillStyle="rgba(202,204,214,0.95)",e.fillRect(7,4,10,3),e.fillRect(14,6,3,10),e.fillStyle="rgba(126,86,40,0.95)",e.fillRect(6,16,8,4);break;case D.WEAPON_SCORP_BOW:e.strokeStyle="rgba(158,106,52,0.95)",e.lineWidth=3,e.beginPath(),e.arc(12,12,7,Math.PI*.2,Math.PI*1.8),e.stroke(),e.strokeStyle="rgba(220,220,220,0.9)",e.lineWidth=1,e.beginPath(),e.moveTo(17,5),e.lineTo(17,19),e.stroke();break;case D.WEAPON_JAGUAR_CLAWS:e.fillStyle="rgba(220,220,228,0.95)",e.fillRect(6,4,2,14),e.fillRect(11,4,2,14),e.fillRect(16,4,2,14);break;case D.WEAPON_WRAITH_HAMMER:e.fillStyle="rgba(132,138,150,0.95)",e.fillRect(7,5,10,6),e.fillStyle="rgba(122,86,50,0.95)",e.fillRect(11,11,2,11);break;case D.WEAPON_YETI_AXE:e.fillStyle="rgba(176,212,236,0.95)",e.fillRect(6,6,10,7),e.fillStyle="rgba(116,82,48,0.95)",e.fillRect(13,11,2,10);break;default:Fe(e,90,90,90,10);break}return t.toDataURL()}function rg(){const i=new Map;return Object.keys(un).forEach(t=>{const e=Number(t);e!==D.AIR&&i.set(e,sg(e))}),i}function Gl(i,t,e,n={}){const{hotbarIndexLabel:s=null}=n,r=!t||t.id===D.AIR||t.count<=0;i.icon.style.display=r?"none":"block",r||(i.icon.style.backgroundImage=`url(${e.get(t.id)})`),i.name.textContent=r?"Empty":un[t.id].name,i.count.textContent=r?"":`x${t.count}`,s!==null&&(i.index.textContent=String(s))}class ag{constructor(t){this.overlay=document.getElementById("overlay"),this.modeEl=document.getElementById("mode"),this.coordsEl=document.getElementById("coords"),this.fpsEl=document.getElementById("fps"),this.coinsEl=document.getElementById("coins"),this.hintEl=document.getElementById("hint"),this.healthWrapEl=document.getElementById("health-wrap"),this.healthFillEl=document.getElementById("health-bar-fill"),this.hotbarEl=document.getElementById("hotbar"),this.inventoryEl=document.getElementById("inventory"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.dialogueEl=document.getElementById("dialogue"),this.dialogueTitleEl=document.getElementById("dialogue-title"),this.dialogueTextEl=document.getElementById("dialogue-text"),this.dialogueOptionsEl=document.getElementById("dialogue-options"),this.debugPaneEl=document.getElementById("debug-pane"),this.debugWalkEl=document.getElementById("dbg-walk"),this.debugWalkValueEl=document.getElementById("dbg-walk-value"),this.debugFlyEl=document.getElementById("dbg-fly"),this.debugFlyValueEl=document.getElementById("dbg-fly-value"),this.debugHealthEl=document.getElementById("dbg-health"),this.debugAgroEl=document.getElementById("dbg-agro"),this.hotbarSize=8,this.inventory=t.map(la),this.hotbarIndex=0,this.coins=0,this.icons=rg(),this.hotbarEls=[],this.inventoryEls=[],this.buildHotbar(),this.buildInventory(),this.setHotbarSelection(0),this.updateCoins(0),this.setHint(""),this.updateHealth(100,100,!0)}buildHotbar(){this.hotbarEl.innerHTML="",this.hotbarEls=[];for(let t=0;t<this.hotbarSize;t++){const e=document.createElement("div");e.className="hotbar-slot";const n=document.createElement("div");n.className="slot-index";const s=document.createElement("div");s.className="slot-icon";const r=document.createElement("div");r.className="slot-name";const a=document.createElement("div");a.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.appendChild(a),this.hotbarEl.appendChild(e),this.hotbarEls.push({root:e,index:n,icon:s,name:r,count:a})}this.refreshHotbarLabels()}buildInventory(){this.inventoryGridEl.innerHTML="",this.inventoryEls=[];for(let t=0;t<this.inventory.length;t++){const e=document.createElement("button");e.type="button",e.className="inv-slot",e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",e.appendChild(n),e.appendChild(s),e.appendChild(r),e.addEventListener("click",()=>{const a=this.inventory[t];!a||a.id===D.AIR||a.count<=0||(this.inventory[this.hotbarIndex]={...a},this.refreshHotbarLabels())}),this.inventoryGridEl.appendChild(e),this.inventoryEls.push({root:e,icon:n,name:s,count:r})}this.refreshInventoryLabels()}setupDebugPane(t,e){this.debugWalkEl.value=String(t.walkSpeed),this.debugFlyEl.value=String(t.flySpeed),this.debugHealthEl.checked=!!t.healthEnabled,this.debugAgroEl.checked=!!t.agroEnabled,this.updateDebugValues(t.walkSpeed,t.flySpeed),this.debugWalkEl.addEventListener("input",()=>{const n=Number(this.debugWalkEl.value);this.updateDebugValues(n,Number(this.debugFlyEl.value)),e({walkSpeed:n})}),this.debugFlyEl.addEventListener("input",()=>{const n=Math.min(300,Number(this.debugFlyEl.value));this.updateDebugValues(Number(this.debugWalkEl.value),n),e({flySpeed:n})}),this.debugHealthEl.addEventListener("change",()=>e({healthEnabled:this.debugHealthEl.checked})),this.debugAgroEl.addEventListener("change",()=>e({agroEnabled:this.debugAgroEl.checked}))}updateDebugValues(t,e){this.debugWalkValueEl.textContent=`Current: ${t.toFixed(1)}`,this.debugFlyValueEl.textContent=`Current: ${e.toFixed(0)} (max 300)`}isDebugOpen(){return this.debugPaneEl.classList.contains("visible")}setDebugVisible(t){this.debugPaneEl.classList.toggle("visible",t)}isInventoryOpen(){return this.inventoryEl.classList.contains("visible")}setInventoryVisible(t){this.inventoryEl.classList.toggle("visible",t),this.refreshInventoryLabels()}isDialogueOpen(){return this.dialogueEl.classList.contains("visible")}openDialogue(t,e,n){this.dialogueTitleEl.textContent=t,this.dialogueTextEl.textContent=e,this.dialogueOptionsEl.innerHTML="";for(const s of n){const r=document.createElement("button");r.type="button",r.className="dialogue-btn",r.textContent=s.label,r.addEventListener("click",()=>s.onSelect()),this.dialogueOptionsEl.appendChild(r)}this.dialogueEl.classList.add("visible")}closeDialogue(){this.dialogueEl.classList.remove("visible"),this.dialogueOptionsEl.innerHTML=""}setHint(t){this.hintEl.textContent=t}updateHealth(t,e,n){if(this.healthWrapEl.style.display=n?"block":"none",!n)return;const s=e>0?Math.max(0,Math.min(1,t/e)):0;this.healthFillEl.style.width=`${(s*100).toFixed(1)}%`}getSelectedBlock(){return this.inventory[this.hotbarIndex]?.id??D.DIRT}consumeSelectedBlock(){const t=this.inventory[this.hotbarIndex];return!t||t.id===D.AIR||t.count<=0?!1:(t.count-=1,t.count<=0&&(t.count=0,t.id=D.AIR),this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0)}addItem(t,e){if(t===D.AIR||e<=0)return;let n=e;for(const s of this.inventory)if(s.id===t&&s.count<999){const r=Math.min(999-s.count,n);if(s.count+=r,n-=r,n===0)break}if(n>0){for(const s of this.inventory)if(s.id===D.AIR||s.count<=0){s.id=t,s.count=n;break}}this.refreshHotbarLabels(),this.refreshInventoryLabels()}getItemCount(t){let e=0;for(const n of this.inventory)n.id===t&&(e+=n.count);return e}consumeItem(t,e){if(e<=0)return!0;if(this.getItemCount(t)<e)return!1;let n=e;for(const s of this.inventory){if(s.id!==t||n<=0)continue;const r=Math.min(s.count,n);s.count-=r,n-=r,s.count<=0&&(s.id=D.AIR,s.count=0)}return this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0}updateCoins(t){this.coins=t,this.coinsEl.textContent=`Coins: ${t}`}setOverlayVisible(t){this.overlay.classList.toggle("visible",t)}updateMode(t){this.modeEl.textContent=`Mode: ${t?"Fly":"Walk"}`}updateCoords(t){this.coordsEl.textContent=`X: ${t.x.toFixed(1)} Y: ${t.y.toFixed(1)} Z: ${t.z.toFixed(1)}`}updateFPS(t){this.fpsEl.textContent=`FPS: ${t.toFixed(0)}`}setHotbarSelection(t){this.hotbarIndex=t,this.hotbarEls.forEach((e,n)=>e.root.classList.toggle("active",n===t)),this.inventoryEls.forEach((e,n)=>e.root.classList.toggle("active",n===t))}refreshHotbarLabels(){for(let t=0;t<this.hotbarEls.length;t++)Gl(this.hotbarEls[t],la(this.inventory[t]),this.icons,{hotbarIndexLabel:t+1})}refreshInventoryLabels(){for(let t=0;t<this.inventoryEls.length;t++)Gl(this.inventoryEls[t],la(this.inventory[t]),this.icons)}}const Vn=100,og=6,lg=.9,cg=12,ug=.2,hg=new Set([D.AIR,D.BEDROCK,D.APPLE,D.WEAPON_BANDIT_BLADE,D.WEAPON_RAIDER_SABER,D.WEAPON_SCORP_BOW,D.WEAPON_JAGUAR_CLAWS,D.WEAPON_WRAITH_HAMMER,D.WEAPON_YETI_AXE]),gn=document.getElementById("app"),xs=new Qm({canvas:gn,antialias:!1});xs.setPixelRatio(Math.min(window.devicePixelRatio,2));xs.setSize(window.innerWidth,window.innerHeight);xs.outputColorSpace=Oe;const Zn=new th;Zn.background=new Vt(9031679);Zn.fog=new go(9031679,nt*4.2,nt*7.5);const qn=new Ze(75,window.innerWidth/window.innerHeight,.1,600),So=ig(),fg=new xo({map:So.texture}),dg=new xo({map:So.texture,transparent:!0,depthWrite:!1,side:an,alphaTest:.15});Zn.add(new dh(16777215,.7));const Rc=new fh(16777215,.8);Rc.position.set(120,200,50);Zn.add(Rc);const wc=20260304,Ve=new B0(Zn,So,wc);Ve.setupMaterials(fg,dg);const me=new Q0(qn,gn),pg=Array.from({length:30},()=>({id:D.AIR,count:0})),kt=new ag(pg),no=new tg(kt,wc+191),hr=new J0(Zn,Ve,{onEnemyKilled:i=>{i?.dropItem&&kt.addItem(i.dropItem,1)}}),Re={walkSpeed:5.2,flySpeed:11.5,healthEnabled:!0,agroEnabled:!0};let rn=Vn,ca=0,vr=0;me.setMovementSpeeds(Re.walkSpeed,Re.flySpeed);kt.setupDebugPane(Re,i=>{i.walkSpeed!==void 0&&(Re.walkSpeed=i.walkSpeed),i.flySpeed!==void 0&&(Re.flySpeed=Math.min(300,i.flySpeed)),i.healthEnabled!==void 0&&(Re.healthEnabled=i.healthEnabled,Re.healthEnabled||(rn=Vn)),i.agroEnabled!==void 0&&(Re.agroEnabled=i.agroEnabled),me.setMovementSpeeds(Re.walkSpeed,Re.flySpeed)});kt.setHotbarSelection(0);const xr=new N,us=new ah(new oh(new gi(1.01,1.01,1.01)),new fc({color:16777062}));us.visible=!1;Zn.add(us);let kn=0,De=null,hs=null,Cc=new N(0,40,0);function Yi(){return kt.isInventoryOpen()||kt.isDialogueOpen()||kt.isDebugOpen()}function fi(){const i=document.pointerLockElement===gn;kt.setOverlayVisible(!i&&!Yi())}function mg(i,t){for(let e=127;e>=1;e--)if(eo(Ve.getBlock(i,e,t))&&!eo(Ve.getBlock(i,e+1,t)))return e+1;return 45}me.position.set(.5,mg(0,0)+2,.5);Cc.copy(me.position);me.syncCamera();function gg(){qn.aspect=window.innerWidth/window.innerHeight,qn.updateProjectionMatrix(),xs.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",gg);window.addEventListener("contextmenu",i=>i.preventDefault());gn.addEventListener("click",()=>{Yi()||document.pointerLockElement!==gn&&gn.requestPointerLock()});document.addEventListener("pointerlockchange",()=>{fi()});window.addEventListener("wheel",i=>{document.pointerLockElement!==gn||Yi()||(kn+=i.deltaY>0?1:-1,kn<0&&(kn=kt.hotbarSize-1),kn>=kt.hotbarSize&&(kn=0),kt.setHotbarSelection(kn))});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&kt.isDialogueOpen()){no.closeDialogue(),fi();return}if(i.code==="KeyU"){const t=!kt.isDebugOpen();kt.setDebugVisible(t),t?document.exitPointerLock():!kt.isInventoryOpen()&&!kt.isDialogueOpen()&&gn.requestPointerLock(),fi();return}if(i.code==="KeyE"){if(kt.isDialogueOpen())return;kt.isInventoryOpen()?(kt.setInventoryVisible(!1),kt.isDebugOpen()||gn.requestPointerLock()):(kt.setInventoryVisible(!0),document.exitPointerLock()),fi();return}if(i.code==="KeyR"){if(!Re.healthEnabled||rn>=Vn)return;kt.consumeItem(D.APPLE,1)&&(rn=Math.min(Vn,rn+25));return}if(i.code==="KeyF"){if(kt.isDialogueOpen())return;hs&&(document.exitPointerLock(),no.onTalkToQuestGiver(hs),fi());return}if(/Digit[1-9]/.test(i.code)){const t=Number(i.code.slice(-1))-1;t>=0&&t<kt.hotbarSize&&(kn=t,kt.setHotbarSelection(kn))}});function _g(i,t,e){const n=i,s=i+1,r=t,a=t+1,o=e,l=e+1,c=me.getAABB();return!(c.maxX>n&&c.minX<s&&c.maxY>r&&c.minY<a&&c.maxZ>o&&c.minZ<l)}function vg(i){switch(i){case D.WEAPON_BANDIT_BLADE:return 24;case D.WEAPON_RAIDER_SABER:return 27;case D.WEAPON_SCORP_BOW:return 22;case D.WEAPON_JAGUAR_CLAWS:return 20;case D.WEAPON_WRAITH_HAMMER:return 32;case D.WEAPON_YETI_AXE:return 36;default:return cg}}window.addEventListener("mousedown",i=>{if(!(document.pointerLockElement!==gn||Yi())){if(i.button===0){if(vr>0)return;qn.getWorldDirection(xr);const t=hr.attackNearestInFront(qn.position,xr,og,lg,vg(kt.getSelectedBlock()));if(vr=ug,t||!De)return;e0(De.id)&&(Ve.setBlock(De.x,De.y,De.z,D.AIR),kt.addItem(De.id,1))}if(i.button===2){if(!De)return;const t=De.previous.x,e=De.previous.y,n=De.previous.z;if(Ve.getBlock(t,e,n)!==D.AIR||!_g(t,e,n))return;const s=kt.getSelectedBlock();if(hg.has(s)||!kt.consumeSelectedBlock())return;Ve.setBlock(t,e,n,s)}}});let Vl=performance.now(),er=0,ua=0,ha=0;function Ic(i){const t=Math.min(.05,(i-Vl)/1e3);Vl=i;const e=i/1e3;if(vr=Math.max(0,vr-t),Yi()||me.update(Ve,t),ha+=t,ha>=.14&&(Ve.loadChunksAround(me.position.x,me.position.z),ha=0),Ve.rebuildOneChunk(),Ve.rebuildOneChunk(),hr.update(me.position,t,e,Re.agroEnabled),Re.healthEnabled){if(ca-=t,Re.agroEnabled&&ca<=0){const s=hr.countHostilesInRange(me.position,1.8);s>0&&(rn=Math.max(0,rn-Math.min(18,s*6)),ca=.45)}rn<=0&&(rn=Vn,me.position.copy(Cc),me.velocity.set(0,0,0),me.syncCamera())}else rn=Vn;hs=hr.getNearestQuestGiver(me.position,4.2),qn.getWorldDirection(xr),De=eg(Ve,qn.position,xr,n0),De&&!Yi()?(us.visible=!0,us.position.set(De.x+.5,De.y+.5,De.z+.5)):us.visible=!1;let n=no.getActiveQuestText();if(hs&&!kt.isInventoryOpen()){const s=`Press F to talk to ${hs.name}`;n=n?`${n} | ${s}`:s}kt.getItemCount(D.APPLE)>0&&Re.healthEnabled&&rn<Vn&&(n=n?`${n} | Press R to eat Apple`:"Press R to eat Apple"),kt.setHint(n),kt.updateHealth(rn,Vn,Re.healthEnabled),kt.updateMode(me.flyMode),kt.updateCoords(me.position),fi(),er+=t,ua++,er>=.25&&(kt.updateFPS(ua/er),er=0,ua=0),xs.render(Zn,qn),requestAnimationFrame(Ic)}Ve.loadChunksAround(me.position.x,me.position.z);fi();requestAnimationFrame(Ic);
