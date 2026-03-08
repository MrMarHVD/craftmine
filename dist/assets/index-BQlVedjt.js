(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const _l="176",Nh=0,jl=1,Uh=2,Su=1,Eu=2,Zn=3,yi=0,tn=1,hn=2,Si=0,Es=1,Jl=2,Ql=3,ec=4,Fh=5,Fi=100,Bh=101,kh=102,zh=103,Hh=104,Gh=200,Wh=201,Vh=202,Xh=203,yo=204,bo=205,Yh=206,qh=207,Kh=208,$h=209,Zh=210,jh=211,Jh=212,Qh=213,ef=214,Ao=0,To=1,Ro=2,bs=3,wo=4,Co=5,Io=6,Po=7,xl=0,tf=1,nf=2,Ei=0,sf=1,rf=2,af=3,of=4,lf=5,cf=6,uf=7,Mu=300,As=301,Ts=302,Lo=303,Do=304,Sa=306,Oo=1e3,In=1001,No=1002,dn=1003,hf=1004,ff=1004,pr=1005,Zt=1006,wa=1007,zi=1008,zn=1009,yu=1010,bu=1011,Qs=1012,vl=1013,Vi=1014,Qn=1015,ar=1016,Sl=1017,El=1018,er=1020,Au=35902,Tu=1021,Ru=1022,Pn=1023,tr=1026,nr=1027,wu=1028,Ml=1029,Cu=1030,yl=1031,bl=1033,Jr=33776,Qr=33777,ea=33778,ta=33779,Uo=35840,Fo=35841,Bo=35842,ko=35843,zo=36196,Ho=37492,Go=37496,Wo=37808,Vo=37809,Xo=37810,Yo=37811,qo=37812,Ko=37813,$o=37814,Zo=37815,jo=37816,Jo=37817,Qo=37818,el=37819,tl=37820,nl=37821,na=36492,il=36494,sl=36495,Iu=36283,rl=36284,al=36285,ol=36286,df=3200,pf=3201,Pu=0,mf=1,xi="",Ht="srgb",Rs="srgb-linear",ca="linear",at="srgb",$i=7680,tc=519,gf=512,_f=513,xf=514,Lu=515,vf=516,Sf=517,Ef=518,Mf=519,ll=35044,nc="300 es",ei=2e3,ua=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,cl=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function yf(i,e){return(i%e+e)%e}function Ca(i,e,t){return(1-t)*i+t*e}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],x=s[0],g=s[3],p=s[6],T=s[1],b=s[4],E=s[7],P=s[2],I=s[5],C=s[8];return r[0]=a*x+o*T+l*P,r[3]=a*g+o*b+l*I,r[6]=a*p+o*E+l*C,r[1]=c*x+u*T+h*P,r[4]=c*g+u*b+h*I,r[7]=c*p+u*E+h*C,r[2]=f*x+m*T+_*P,r[5]=f*g+m*b+_*I,r[8]=f*p+m*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,m=c*r-a*l,_=t*h+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Be;function Du(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=ha("canvas");return i.style.display="block",i}const ic={};function sa(i){i in ic||(ic[i]=!0,console.warn(i))}function Af(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Tf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ca:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:at,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const et=wf();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class Cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=ha("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class jt extends Is{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=In,s=In,r=Zt,a=zi,o=Pn,l=zn,c=jt.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Mi(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Mu;jt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,P=(p+1)/2,I=(u+f)/4,C=(h+x)/4,D=(_+g)/4;return b>E&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=I/n,r=C/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(h-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==m||u!==_){let g=1-o;const p=l*f+c*m+u*_+h*x,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),I=Math.atan2(P,p*T);g=Math.sin(g*I)/P,o=Math.sin(o*I)/P}const E=o*T;if(l=l*g+f*E,c=c*g+m*E,u=u*g+_*E,h=h*g+x*E,g===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-o*m,e[t+2]=c*_+u*m+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new A,ac=new or;class lr{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),gr.subVectors(this.max,Ds),ji.subVectors(e.a,Ds),Ji.subVectors(e.b,Ds),Qi.subVectors(e.c,Ds),ri.subVectors(Ji,ji),ai.subVectors(Qi,Ji),Ri.subVectors(ji,Qi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ri.y,Ri.x,0];return!Da(t,ji,Ji,Qi,gr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,ji,Ji,Qi,gr))?!1:(_r.crossVectors(ri,ai),t=[_r.x,_r.y,_r.z],Da(t,ji,Ji,Qi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,mr=new lr,ji=new A,Ji=new A,Qi=new A,ri=new A,ai=new A,Ri=new A,Ds=new A,gr=new A,_r=new A,wi=new A;function Da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Of=new lr,Os=new A,Oa=new A;class Ea{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Oa)),this.expandByPoint(Os.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new A,Na=new A,xr=new A,oi=new A,Ua=new A,vr=new A,Fa=new A;class Tl{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Na.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=oi.dot(this.direction),l=-oi.dot(xr),c=oi.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Na).addScaledVector(xr,f),m}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){Ua.subVectors(t,e),vr.subVectors(n,e),Fa.crossVectors(Ua,vr);let a=this.direction.dot(Fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(vr.crossVectors(oi,vr));if(l<0)return null;const c=o*this.direction.dot(Ua.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(Fa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,s,r,a,o,l,c,u,h,f,m,_,x,g){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,m,_,x,g)}set(e,t,n,s,r,a,o,l,c,u,h,f,m,_,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,x=c*h;t[0]=f+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Uf)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),li.crossVectors(n,on),li.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),li.crossVectors(n,on)),li.normalize(),Sr.crossVectors(on,li),s[0]=li.x,s[4]=Sr.x,s[8]=on.x,s[1]=li.y,s[5]=Sr.y,s[9]=on.y,s[2]=li.z,s[6]=Sr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],x=n[6],g=n[10],p=n[14],T=n[3],b=n[7],E=n[11],P=n[15],I=s[0],C=s[4],D=s[8],y=s[12],S=s[1],w=s[5],z=s[9],B=s[13],X=s[2],Y=s[6],V=s[10],Q=s[14],G=s[3],ae=s[7],pe=s[11],Me=s[15];return r[0]=a*I+o*S+l*X+c*G,r[4]=a*C+o*w+l*Y+c*ae,r[8]=a*D+o*z+l*V+c*pe,r[12]=a*y+o*B+l*Q+c*Me,r[1]=u*I+h*S+f*X+m*G,r[5]=u*C+h*w+f*Y+m*ae,r[9]=u*D+h*z+f*V+m*pe,r[13]=u*y+h*B+f*Q+m*Me,r[2]=_*I+x*S+g*X+p*G,r[6]=_*C+x*w+g*Y+p*ae,r[10]=_*D+x*z+g*V+p*pe,r[14]=_*y+x*B+g*Q+p*Me,r[3]=T*I+b*S+E*X+P*G,r[7]=T*C+b*w+E*Y+P*ae,r[11]=T*D+b*z+E*V+P*pe,r[15]=T*y+b*B+E*Q+P*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+x*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+g*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],g=e[14],p=e[15],T=h*g*c-x*f*c+x*l*m-o*g*m-h*l*p+o*f*p,b=_*f*c-u*g*c-_*l*m+a*g*m+u*l*p-a*f*p,E=u*x*c-_*h*c+_*o*m-a*x*m-u*o*p+a*h*p,P=_*h*l-u*x*l-_*o*f+a*x*f+u*o*g-a*h*g,I=t*T+n*b+s*E+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=T*C,e[1]=(x*f*r-h*g*r-x*s*m+n*g*m+h*s*p-n*f*p)*C,e[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*p+n*l*p)*C,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*C,e[4]=b*C,e[5]=(u*g*r-_*f*r+_*s*m-t*g*m-u*s*p+t*f*p)*C,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*p-t*l*p)*C,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*C,e[8]=E*C,e[9]=(_*h*r-u*x*r-_*n*m+t*x*m+u*n*p-t*h*p)*C,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*C,e[12]=P*C,e[13]=(u*x*s-_*h*s+_*n*f-t*x*f-u*n*g+t*h*g)*C,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*g-t*o*g)*C,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,m=r*u,_=r*h,x=a*u,g=a*h,p=o*h,T=l*c,b=l*u,E=l*h,P=n.x,I=n.y,C=n.z;return s[0]=(1-(x+p))*P,s[1]=(m+E)*P,s[2]=(_-b)*P,s[3]=0,s[4]=(m-E)*I,s[5]=(1-(f+p))*I,s[6]=(g+T)*I,s[7]=0,s[8]=(_+b)*C,s[9]=(g-T)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,u=1/a,h=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ei){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(o===ei)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ua)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,m=(n+s)*u;let _,x;if(o===ei)_=(a+r)*h,x=-2*h;else if(o===ua)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new A,Tn=new dt,Nf=new A(0,0,0),Uf=new A(1,1,1),li=new A,Sr=new A,on=new A,oc=new dt,lc=new or;class Ge{constructor(e=0,t=0,n=0,s=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const cc=new A,ts=new or,Xn=new dt,Er=new A,Ns=new A,Bf=new A,kf=new or,uc=new A(1,0,0),hc=new A(0,1,0),fc=new A(0,0,1),dc={type:"added"},zf={type:"removed"},ns={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Dt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new A,t=new Ge,n=new or,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Be}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ns,Er,this.up):Xn.lookAt(Er,Ns,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Xn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new A(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new A,Yn=new A,ka=new A,qn=new A,is=new A,ss=new A,pc=new A,za=new A,Ha=new A,Ga=new A,Wa=new lt,Va=new lt,Xa=new lt;class fn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Yn.subVectors(n,t),ka.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(Yn),l=Rn.dot(ka),c=Yn.dot(Yn),u=Yn.dot(ka),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wa.setScalar(0),Va.setScalar(0),Xa.setScalar(0),Wa.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Va,r.y),a.addScaledVector(Xa,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Yn.subVectors(e,t),Rn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Rn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,n),ss.subVectors(r,n),za.subVectors(e,n);const l=is.dot(za),c=ss.dot(za);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,s);const u=is.dot(Ha),h=ss.dot(Ha);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(is,a);Ga.subVectors(e,r);const m=is.dot(Ga),_=ss.dot(Ga);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ss,o);const g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return pc.subVectors(r,s),o=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(pc,o);const p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=yf(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ya(a,r,e+1/3),this.g=Ya(a,r,e),this.b=Ya(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ye(Bt.r*255,0,255))*65536+Math.round(Ye(Bt.g*255,0,255))*256+Math.round(Ye(Bt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ht){et.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Mr);const n=Ca(ci.h,Mr.h,t),s=Ca(ci.s,Mr.s,t),r=Ca(ci.l,Mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ve;Ve.NAMES=Nu;let Hf=0;class qi extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Es,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=bo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new A,yr=new ke;let Gf=0;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Uu extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fu extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wf=0;const vn=new dt,qa=new Dt,rs=new A,ln=new lr,Us=new lr,It=new A;class nn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?Fu:Uu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(ln.min,Us.min),ln.expandByPoint(It),It.addVectors(ln.max,Us.max),ln.expandByPoint(It)):(ln.expandByPoint(Us.min),ln.expandByPoint(Us.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),It.add(rs)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new A,l[D]=new A;const c=new A,u=new A,h=new A,f=new ke,m=new ke,_=new ke,x=new A,g=new A;function p(D,y,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),m.sub(f),_.sub(f);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(w),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),o[D].add(x),o[y].add(x),o[S].add(x),l[D].add(g),l[y].add(g),l[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,y=T.length;D<y;++D){const S=T[D],w=S.start,z=S.count;for(let B=w,X=w+z;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new A,E=new A,P=new A,I=new A;function C(D){P.fromBufferAttribute(s,D),I.copy(P);const y=o[D];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),E.crossVectors(I,y);const w=E.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,w)}for(let D=0,y=T.length;D<y;++D){const S=T[D],w=S.start,z=S.count;for(let B=w,X=w+z;B<X;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[m++]}return new Ln(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new dt,Ci=new Tl,br=new Ea,gc=new A,Ar=new A,Tr=new A,Rr=new A,Ka=new A,wr=new A,_c=new A,Cr=new A;class ft extends Dt{constructor(e=new nn,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ka.fromBufferAttribute(h,e),a?wr.addScaledVector(Ka,u):wr.addScaledVector(Ka.sub(t),u))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(br.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(br,gc)===null||Ci.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],T=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=T,P=b;E<P;E+=3){const I=o.getX(E),C=o.getX(E+1),D=o.getX(E+2);s=Ir(this,p,e,n,c,u,h,I,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const T=o.getX(g),b=o.getX(g+1),E=o.getX(g+2);s=Ir(this,a,e,n,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],T=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=T,P=b;E<P;E+=3){const I=E,C=E+1,D=E+2;s=Ir(this,p,e,n,c,u,h,I,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const T=g,b=g+1,E=g+2;s=Ir(this,a,e,n,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Vf(i,e,t,n,s,r,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yi,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Rr);const u=Vf(i,e,t,n,Ar,Tr,Rr,_c);if(u){const h=new A;fn.getBarycoord(_c,Ar,Tr,Rr,h),s&&(u.uv=fn.getInterpolatedAttribute(s,o,l,c,h,new ke)),r&&(u.uv1=fn.getInterpolatedAttribute(r,o,l,c,h,new ke)),a&&(u.normal=fn.getInterpolatedAttribute(a,o,l,c,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new A,materialIndex:0};fn.getNormal(Ar,Tr,Rr,f.normal),u.face=f,u.barycoord=h}return u}class Mn extends nn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function _(x,g,p,T,b,E,P,I,C,D,y){const S=E/C,w=P/D,z=E/2,B=P/2,X=I/2,Y=C+1,V=D+1;let Q=0,G=0;const ae=new A;for(let pe=0;pe<V;pe++){const Me=pe*w-B;for(let Ce=0;Ce<Y;Ce++){const rt=Ce*S-z;ae[x]=rt*T,ae[g]=Me*b,ae[p]=X,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[p]=I>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Ce/C),h.push(1-pe/D),Q+=1}}for(let pe=0;pe<D;pe++)for(let Me=0;Me<C;Me++){const Ce=f+Me+Y*pe,rt=f+Me+Y*(pe+1),K=f+(Me+1)+Y*(pe+1),ie=f+(Me+1)+Y*pe;l.push(Ce,rt,ie),l.push(rt,K,ie),G+=6}o.addGroup(m,G,y),m+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Xf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Yf={clone:ws,merge:qt};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new A,xc=new ke,vc=new ke;class un extends ku{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,xc,vc),t.subVectors(vc,xc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,os=1;class $f extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(as,os,e,t);s.layers=this.layers,this.add(s);const r=new un(as,os,e,t);r.layers=this.layers,this.add(r);const a=new un(as,os,e,t);a.layers=this.layers,this.add(a);const o=new un(as,os,e,t);o.layers=this.layers,this.add(o);const l=new un(as,os,e,t);l.layers=this.layers,this.add(l);const c=new un(as,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class zu extends jt{constructor(e=[],t=As,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mn(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Si});r.uniforms.tEquirect.value=t;const a=new ft(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Zt),new $f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Wt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jf extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new A;class fa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const Fs=new A,cs=new A,us=new A,hs=new ke,Bs=new ke,Hu=new dt,Pr=new A,ks=new A,Lr=new A,Sc=new ke,Za=new ke,Ec=new ke;class Gu extends Dt{constructor(e=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qf(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new fa(n,3,0,!1)),ls.setAttribute("uv",new fa(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Dr(Pr.set(-.5,-.5,0),us,a,cs,s,r),Dr(ks.set(.5,-.5,0),us,a,cs,s,r),Dr(Lr.set(.5,.5,0),us,a,cs,s,r),Sc.set(0,0),Za.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(Pr,ks,Lr,!1,Fs);if(o===null&&(Dr(ks.set(-.5,.5,0),us,a,cs,s,r),Za.set(0,1),o=e.ray.intersectTriangle(Pr,Lr,ks,!1,Fs),o===null))return;const l=e.ray.origin.distanceTo(Fs);l<e.near||l>e.far||t.push({distance:l,point:Fs.clone(),uv:fn.getInterpolation(Fs,Pr,ks,Lr,Sc,Za,Ec,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dr(i,e,t,n,s,r){hs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Bs.x=r*hs.x-s*hs.y,Bs.y=s*hs.x+r*hs.y):Bs.copy(hs),i.copy(e),i.x+=Bs.x,i.y+=Bs.y,i.applyMatrix4(Hu)}const ja=new A,ed=new A,td=new Be;class Di{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ja.subVectors(n,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||td.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ea,Or=new A;class Il{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],x=s[10],g=s[11],p=s[12],T=s[13],b=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,g-m,E-p).normalize(),n[1].setComponents(l+r,f+c,g+m,E+p).normalize(),n[2].setComponents(l+a,f+u,g+_,E+T).normalize(),n[3].setComponents(l-a,f-u,g-_,E-T).normalize(),n[4].setComponents(l-o,f-h,g-x,E-b).normalize(),t===ei)n[5].setComponents(l+o,f+h,g+x,E+b).normalize();else if(t===ua)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wu extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new A,pa=new A,Mc=new dt,zs=new Tl,Nr=new Ea,Ja=new A,yc=new A;class nd extends Dt{constructor(e=new nn,t=new Wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=da.distanceTo(pa);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Mc.copy(s).invert(),zs.copy(e.ray).applyMatrix4(Mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=c){const p=u.getX(x),T=u.getX(x+1),b=Ur(this,e,zs,l,p,T,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(_-1),g=u.getX(m),p=Ur(this,e,zs,l,x,g,_-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=c){const p=Ur(this,e,zs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ur(this,e,zs,l,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ur(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),t.distanceSqToSegment(da,pa,Ja,yc)>n)return;Ja.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ja);if(!(c<e.near||c>e.far))return{distance:c,point:yc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const bc=new A,Ac=new A;class id extends nd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bc.fromBufferAttribute(t,s),Ac.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bc.distanceTo(Ac);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cr extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vu extends jt{constructor(e,t,n=Vi,s,r,a,o=dn,l=dn,c,u=tr){if(u!==tr&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ur extends nn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const x=[],g=n/2;let p=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(m,2));function T(){const E=new A,P=new A;let I=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const y=[],S=D/r,w=S*(t-e)+e;for(let z=0;z<=s;z++){const B=z/s,X=B*l+o,Y=Math.sin(X),V=Math.cos(X);P.x=w*Y,P.y=-S*n+g,P.z=w*V,h.push(P.x,P.y,P.z),E.set(Y,C,V).normalize(),f.push(E.x,E.y,E.z),m.push(B,1-S),y.push(_++)}x.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){const S=x[y][D],w=x[y+1][D],z=x[y+1][D+1],B=x[y][D+1];(e>0||y!==0)&&(u.push(S,w,B),I+=3),(t>0||y!==r-1)&&(u.push(w,z,B),I+=3)}c.addGroup(p,I,0),p+=I}function b(E){const P=_,I=new ke,C=new A;let D=0;const y=E===!0?e:t,S=E===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*S,0),f.push(0,S,0),m.push(.5,.5),_++;const w=_;for(let z=0;z<=s;z++){const X=z/s*l+o,Y=Math.cos(X),V=Math.sin(X);C.x=y*V,C.y=g*S,C.z=y*Y,h.push(C.x,C.y,C.z),f.push(0,S,0),I.x=Y*.5+.5,I.y=V*.5*S+.5,m.push(I.x,I.y),_++}for(let z=0;z<s;z++){const B=P+z,X=w+z;E===!0?u.push(X,X+1,B):u.push(X+1,X,B),D+=3}c.addGroup(p,D,E===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pl extends ur{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Fr=new A,Br=new A,Qa=new A,kr=new fn;class sd extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ia*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:g,c:p}=kr;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),kr.getNormal(Qa),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const b=(T+1)%3,E=h[T],P=h[b],I=kr[u[T]],C=kr[u[b]],D=`${E}_${P}`,y=`${P}_${E}`;y in f&&f[y]?(Qa.dot(f[y].normal)<=r&&(m.push(I.x,I.y,I.z),m.push(C.x,C.y,C.z)),f[y]=null):D in f||(f[D]={index0:c[T],index1:c[b],normal:Qa.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:g}=f[_];Fr.fromBufferAttribute(o,x),Br.fromBufferAttribute(o,g),m.push(Fr.x,Fr.y,Fr.z),m.push(Br.x,Br.y,Br.z)}this.setAttribute("position",new xt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class hr extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,m=[],_=[],x=[],g=[];for(let p=0;p<u;p++){const T=p*f-a;for(let b=0;b<c;b++){const E=b*h-r;_.push(E,-T,0),x.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const b=T+c*p,E=T+c*(p+1),P=T+1+c*(p+1),I=T+1+c*p;m.push(b,E,I),m.push(E,P,I)}this.setIndex(m),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ll extends nn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,m=new A,_=new ke;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const T=p+g,b=T,E=T+n+1,P=T+n+2,I=T+1;o.push(b,E,I),o.push(E,P,I)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yi extends nn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new A,f=new A,m=[],_=[],x=[],g=[];for(let p=0;p<=n;p++){const T=[],b=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const I=P/t;h.x=-e*Math.cos(s+I*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+I*r)*Math.sin(a+b*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(I+E,1-b),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const b=u[p][T+1],E=u[p][T],P=u[p+1][T],I=u[p+1][T+1];(p!==0||a>0)&&m.push(b,E,I),(p!==n-1||l<Math.PI)&&m.push(E,P,I)}this.setIndex(m),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rd extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ad extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dl extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const eo=new dt,Tc=new A,Rc=new A;class Xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new dt,Hs=new A,to=new A;class od extends Xu{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Yu extends Dl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qu extends ku{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ld extends Xu{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cd extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ld}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ud extends Dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hd extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cc=new dt;class fd{constructor(e,t,n=0,s=1/0){this.ray=new Tl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ul(e[s],this,n,t);return n.sort(Ic),n}}function Ic(i,e){return i.distance-e.distance}function ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ul(r[a],e,t,!0)}}function Pc(i,e,t,n){const s=dd(n);switch(t){case Tu:return i*e;case wu:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Ru:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:case ko:return Math.max(i,16)*Math.max(e,8)/4;case Uo:case Bo:return Math.max(i,8)*Math.max(e,8)/2;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case na:case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Iu:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case al:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dd(i){switch(i){case zn:case yu:return{byteLength:1,components:1};case Qs:case bu:case ar:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case Vi:case vl:case Qn:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);function Ku(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],x=h[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const x=h[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:xd,alphatest_fragment:vd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:Md,batching_pars_vertex:yd,batching_vertex:bd,begin_vertex:Ad,beginnormal_vertex:Td,bsdfs:Rd,iridescence_fragment:wd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Dd,color_fragment:Od,color_pars_fragment:Nd,color_pars_vertex:Ud,color_vertex:Fd,common:Bd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Vd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:qd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:op,envmap_vertex:jd,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:up,lights_phong_pars_fragment:hp,lights_physical_fragment:fp,lights_physical_pars_fragment:dp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Sp,map_fragment:Ep,map_pars_fragment:Mp,map_particle_fragment:yp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Rp,morphcolor_vertex:wp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Pp,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Op,normal_pars_vertex:Np,normal_vertex:Up,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Vp,project_vertex:Xp,dithering_fragment:Yp,dithering_pars_fragment:qp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:jp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:um,uv_pars_vertex:hm,uv_vertex:fm,worldpos_vertex:dm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:xm,cube_frag:vm,depth_vert:Sm,depth_frag:Em,distanceRGBA_vert:Mm,distanceRGBA_frag:ym,equirect_vert:bm,equirect_frag:Am,linedashed_vert:Tm,linedashed_frag:Rm,meshbasic_vert:wm,meshbasic_frag:Cm,meshlambert_vert:Im,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Om,meshnormal_frag:Nm,meshphong_vert:Um,meshphong_frag:Fm,meshphysical_vert:Bm,meshphysical_frag:km,meshtoon_vert:zm,meshtoon_frag:Hm,points_vert:Gm,points_frag:Wm,shadow_vert:Vm,shadow_frag:Xm,sprite_vert:Ym,sprite_frag:qm},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Fn={basic:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([re.points,re.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([re.common,re.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([re.sprite,re.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Fn.physical={uniforms:qt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const zr={r:0,b:0,g:0},Pi=new Ge,Km=new dt;function $m(i,e,t,n,s,r,a){const o=new Ve(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const P=_(b);P===null?p(o,l):P&&P.isColor&&(p(P,1),E=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,E){const P=_(E);P&&(P.isCubeTexture||P.mapping===Sa)?(u===void 0&&(u=new ft(new Mn(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ws(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(E.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Pi)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==at,(h!==P||f!==P.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ft(new hr(2,2),new bi({name:"BackgroundMaterial",uniforms:ws(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(P.colorSpace)!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(zr,Bu(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,E,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:g,dispose:T}}function Zm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,w,z,B,X){let Y=!1;const V=h(B,z,w);r!==V&&(r=V,c(r.object)),Y=m(S,B,z,X),Y&&_(S,B,z,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(S,w,z,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,w,z){const B=z.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Y=X[w.id];Y===void 0&&(Y={},X[w.id]=Y);let V=Y[B];return V===void 0&&(V=f(l()),Y[B]=V),V}function f(S){const w=[],z=[],B=[];for(let X=0;X<t;X++)w[X]=0,z[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,w,z,B){const X=r.attributes,Y=w.attributes;let V=0;const Q=z.getAttributes();for(const G in Q)if(Q[G].location>=0){const pe=X[G];let Me=Y[G];if(Me===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function _(S,w,z,B){const X={},Y=w.attributes;let V=0;const Q=z.getAttributes();for(const G in Q)if(Q[G].location>=0){let pe=Y[G];pe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),X[G]=Me,V++}r.attributes=X,r.attributesNum=V,r.index=B}function x(){const S=r.newAttributes;for(let w=0,z=S.length;w<z;w++)S[w]=0}function g(S){p(S,0)}function p(S,w){const z=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;z[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),X[S]!==w&&(i.vertexAttribDivisor(S,w),X[S]=w)}function T(){const S=r.newAttributes,w=r.enabledAttributes;for(let z=0,B=w.length;z<B;z++)w[z]!==S[z]&&(i.disableVertexAttribArray(z),w[z]=0)}function b(S,w,z,B,X,Y,V){V===!0?i.vertexAttribIPointer(S,w,z,X,Y):i.vertexAttribPointer(S,w,z,B,X,Y)}function E(S,w,z,B){x();const X=B.attributes,Y=z.getAttributes(),V=w.defaultAttributeValues;for(const Q in Y){const G=Y[Q];if(G.location>=0){let ae=X[Q];if(ae===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const pe=ae.normalized,Me=ae.itemSize,Ce=e.get(ae);if(Ce===void 0)continue;const rt=Ce.buffer,K=Ce.type,ie=Ce.bytesPerElement,Se=K===i.INT||K===i.UNSIGNED_INT||ae.gpuType===vl;if(ae.isInterleavedBufferAttribute){const le=ae.data,Re=le.stride,tt=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<G.locationSize;Le++)p(G.location+Le,le.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<G.locationSize;Le++)g(G.location+Le);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Le=0;Le<G.locationSize;Le++)b(G.location+Le,Me/G.locationSize,K,pe,Re*ie,(tt+Me/G.locationSize*Le)*ie,Se)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ae.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<G.locationSize;le++)g(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let le=0;le<G.locationSize;le++)b(G.location+le,Me/G.locationSize,K,pe,Me*ie,Me/G.locationSize*le*ie,Se)}}else if(V!==void 0){const pe=V[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(G.location,pe);break;case 3:i.vertexAttrib3fv(G.location,pe);break;case 4:i.vertexAttrib4fv(G.location,pe);break;default:i.vertexAttrib1fv(G.location,pe)}}}}T()}function P(){D();for(const S in n){const w=n[S];for(const z in w){const B=w[z];for(const X in B)u(B[X].object),delete B[X];delete w[z]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const z in w){const B=w[z];for(const X in B)u(B[X].object),delete B[X];delete w[z]}delete n[S.id]}function C(S){for(const w in n){const z=n[w];if(z[S.id]===void 0)continue;const B=z[S.id];for(const X in B)u(B[X].object),delete B[X];delete z[S.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function jm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:P,maxSamples:I}}function Qm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Di,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const T=r?0:n,b=T*4;let E=p.clippingState||null;l.value=E,E=u(_,f,b,m);for(let P=0;P!==b;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=m+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,E=m;b!==x;++b,E+=4)a.copy(h[b]).applyMatrix4(T,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function e0(i){let e=new WeakMap;function t(a,o){return o===Lo?a.mapping=As:o===Do&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lo||o===Do)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zf(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const _s=4,Lc=[.125,.215,.35,.446,.526,.582],Bi=20,no=new qu,Dc=new Ve;let io=null,so=0,ro=0,ao=!1;const Oi=(1+Math.sqrt(5))/2,fs=1/Oi,Oc=[new A(-Oi,fs,0),new A(Oi,fs,0),new A(-fs,0,Oi),new A(fs,0,Oi),new A(0,Oi,-fs),new A(0,Oi,fs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],t0=new A;class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=t0}=r;io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=ao,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ar,format:Pn,colorSpace:Rs,depthBuffer:!1},s=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,e,t)}return s}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,s,r){const l=new un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Ei,h.autoClear=!1;const _=new Hn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new ft(new Mn,_);let g=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,g=!0):(_.color.copy(Dc),g=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;Hr(s,b*E,T>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===As||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,no)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oc[(s-r-1)%Oc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bi-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):Bi;g>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const p=[];let T=0;for(let C=0;C<Bi;++C){const D=C/x,y=Math.exp(-D*D/2);p.push(y),C===0?T+=y:C<g&&(T+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[s],P=3*E*(s>b-_s?s-b+_s:0),I=4*(this._cubeSize-E);Hr(t,P,I,3*E,2*E),l.setRenderTarget(t),l.render(h,no)}}function n0(i){const e=[],t=[],n=[];let s=i;const r=i-_s+1+Lc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-_s?l=Lc[a-i+_s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,x=3,g=2,p=1,T=new Float32Array(x*_*m),b=new Float32Array(g*_*m),E=new Float32Array(p*_*m);for(let I=0;I<m;I++){const C=I%3*2/3-1,D=I>2?0:-1,y=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(y,x*_*I),b.set(f,g*_*I);const S=[I,I,I,I,I,I];E.set(S,p*_*I)}const P=new nn;P.setAttribute("position",new Ln(T,x)),P.setAttribute("uv",new Ln(b,g)),P.setAttribute("faceIndex",new Ln(E,p)),e.push(P),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uc(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function i0(i,e,t){const n=new Float32Array(Bi),s=new A(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Fc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Bc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function s0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lo||l===Do,u=l===As||l===Ts;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Nc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Nc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function r0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function a0(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let b=0,E=T.length;b<E;b+=3){const P=T[b+0],I=T[b+1],C=T[b+2];f.push(P,I,I,C,C,P)}}else if(_!==void 0){const T=_.array;x=_.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const P=b+0,I=b+1,C=b+2;f.push(P,I,I,C,C,P)}}else return;const g=new(Du(f)?Fu:Uu)(f,1);g.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function o0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),t.update(m,n,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function h(f,m,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=m[T]*x[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function l0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c0(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),g===!0&&(E=3);let P=o.attributes.position.count*E,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*I*4*h),D=new Ou(C,P,I,h);D.type=Qn,D.needsUpdate=!0;const y=E*4;for(let w=0;w<h;w++){const z=p[w],B=T[w],X=b[w],Y=P*I*4*w;for(let V=0;V<z.count;V++){const Q=V*y;_===!0&&(s.fromBufferAttribute(z,V),C[Y+Q+0]=s.x,C[Y+Q+1]=s.y,C[Y+Q+2]=s.z,C[Y+Q+3]=0),x===!0&&(s.fromBufferAttribute(B,V),C[Y+Q+4]=s.x,C[Y+Q+5]=s.y,C[Y+Q+6]=s.z,C[Y+Q+7]=0),g===!0&&(s.fromBufferAttribute(X,V),C[Y+Q+8]=s.x,C[Y+Q+9]=s.y,C[Y+Q+10]=s.z,C[Y+Q+11]=X.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new ke(P,I)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function u0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const $u=new jt,kc=new Vu(1,1),Zu=new Ou,ju=new Df,Ju=new zu,zc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Vc=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),Ct(t,n)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Ct(t,n)}}function _0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Ct(t,n)}}function x0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function T0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Lu,r=kc):r=$u,t.setTexture2D(e||r,s)}function R0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ju,s)}function w0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ju,s)}function C0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zu,s)}function I0(i){switch(i){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return M0;case 36294:return y0;case 36295:return b0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(i,e){i.uniform1fv(this.addr,e)}function L0(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function D0(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function O0(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function N0(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U0(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F0(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B0(i,e){i.uniform1iv(this.addr,e)}function k0(i,e){i.uniform2iv(this.addr,e)}function z0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function G0(i,e){i.uniform1uiv(this.addr,e)}function W0(i,e){i.uniform2uiv(this.addr,e)}function V0(i,e){i.uniform3uiv(this.addr,e)}function X0(i,e){i.uniform4uiv(this.addr,e)}function Y0(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||$u,r[a])}function q0(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ju,r[a])}function K0(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ju,r[a])}function $0(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zu,r[a])}function Z0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return D0;case 35666:return O0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return W0;case 36295:return V0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return $0}}class j0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I0(t.type)}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Xc(i,e){i.seq.push(e),i.map[e.id]=e}function eg(i,e,t){const n=i.name,s=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),a=oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xc(t,c===void 0?new j0(o,i,e):new J0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Q0(o),Xc(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);eg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tg=37297;let ng=0;function ig(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const qc=new Be;function sg(i){et._getMatrix(qc,et.workingColorSpace,i);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ig(i.getShaderSource(e),a)}else return s}function rg(i,e){const t=sg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ag(i,e){let t;switch(e){case sf:t="Linear";break;case rf:t="Reinhard";break;case af:t="Cineon";break;case of:t="ACESFilmic";break;case cf:t="AgX";break;case uf:t="Neutral";break;case lf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new A;function og(){et.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function cg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ug(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qs(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(hg,dg)}const fg=new Map;function dg(i,e){let t=He[e];if(t===void 0){const n=fg.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(pg,mg)}function mg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function _g(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Ts:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function vg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case tf:e="ENVMAP_BLENDING_MIX";break;case nf:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gg(t),c=_g(t),u=xg(t),h=vg(t),f=Sg(t),m=lg(t),_=cg(r),x=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(g=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?He.tonemapping_pars_fragment:"",t.toneMapping!==Ei?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=hl(a),a=$c(a,t),a=Zc(a,t),o=hl(o),o=$c(o,t),o=Zc(o,t),a=jc(a),o=jc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+g+a,E=T+p+o,P=Yc(s,s.VERTEX_SHADER,b),I=Yc(s,s.FRAGMENT_SHADER,E);s.attachShader(x,P),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(I).trim();let Y=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,I);else{const Q=Kc(s,P,"vertex"),G=Kc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+Q+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||X==="")&&(V=!1);V&&(w.diagnostics={runnable:Y,programLog:z,vertexShader:{log:B,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(P),s.deleteShader(I),D=new ra(s,x),y=ug(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,tg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ng++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=I,this}let Mg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bg(e),t.set(e,n)),n}}class bg{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}}function Ag(i,e,t,n,s,r,a){const o=new Rl,l=new yg,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,w,z,B){const X=z.fog,Y=B.geometry,V=y.isMeshStandardMaterial?z.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),G=Q&&Q.mapping===Sa?Q.image.height:null,ae=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Me=pe!==void 0?pe.length:0;let Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let rt,K,ie,Se;if(ae){const st=Fn[ae];rt=st.vertexShader,K=st.fragmentShader}else rt=y.vertexShader,K=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const le=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),tt=B.isInstancedMesh===!0,Le=B.isBatchedMesh===!0,Mt=!!y.map,gt=!!y.matcap,qe=!!Q,L=!!y.aoMap,gn=!!y.lightMap,je=!!y.bumpMap,Ke=!!y.normalMap,be=!!y.displacementMap,pt=!!y.emissiveMap,ye=!!y.metalnessMap,R=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,ee=y.iridescence>0,q=y.sheen>0,Ee=y.transmission>0,ce=v&&!!y.anisotropyMap,we=F&&!!y.clearcoatMap,Ie=F&&!!y.clearcoatNormalMap,te=F&&!!y.clearcoatRoughnessMap,ge=ee&&!!y.iridescenceMap,Pe=ee&&!!y.iridescenceThicknessMap,Oe=q&&!!y.sheenColorMap,_e=q&&!!y.sheenRoughnessMap,$e=!!y.specularMap,ze=!!y.specularColorMap,ht=!!y.specularIntensityMap,O=Ee&&!!y.transmissionMap,ue=Ee&&!!y.thicknessMap,W=!!y.gradientMap,j=!!y.alphaMap,de=y.alphaTest>0,he=!!y.alphaHash,Fe=!!y.extensions;let vt=Ei;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=i.toneMapping);const Ut={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:K,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,batchingColor:Le&&B._colorsTexture!==null,instancing:tt,instancingColor:tt&&B.instanceColor!==null,instancingMorph:tt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Rs,alphaToCoverage:!!y.alphaToCoverage,map:Mt,matcap:gt,envMap:qe,envMapMode:qe&&Q.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:gn,bumpMap:je,normalMap:Ke,displacementMap:f&&be,emissiveMap:pt,normalMapObjectSpace:Ke&&y.normalMapType===mf,normalMapTangentSpace:Ke&&y.normalMapType===Pu,metalnessMap:ye,roughnessMap:R,anisotropy:v,anisotropyMap:ce,clearcoat:F,clearcoatMap:we,clearcoatNormalMap:Ie,clearcoatRoughnessMap:te,dispersion:$,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:q,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:$e,specularColorMap:ze,specularIntensityMap:ht,transmission:Ee,transmissionMap:O,thicknessMap:ue,gradientMap:W,opaque:y.transparent===!1&&y.blending===Es&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:de,alphaHash:he,combine:y.combine,mapUv:Mt&&x(y.map.channel),aoMapUv:L&&x(y.aoMap.channel),lightMapUv:gn&&x(y.lightMap.channel),bumpMapUv:je&&x(y.bumpMap.channel),normalMapUv:Ke&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:pt&&x(y.emissiveMap.channel),metalnessMapUv:ye&&x(y.metalnessMap.channel),roughnessMapUv:R&&x(y.roughnessMap.channel),anisotropyMapUv:ce&&x(y.anisotropyMap.channel),clearcoatMapUv:we&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(y.sheenRoughnessMap.channel),specularMapUv:$e&&x(y.specularMap.channel),specularColorMapUv:ze&&x(y.specularColorMap.channel),specularIntensityMapUv:ht&&x(y.specularIntensityMap.channel),transmissionMapUv:O&&x(y.transmissionMap.channel),thicknessMapUv:ue&&x(y.thicknessMap.channel),alphaMapUv:j&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ke||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Mt||j),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)S.push(w),S.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(T(S,y),b(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const S=_[y.type];let w;if(S){const z=Fn[S];w=Yf.clone(z.uniforms)}else w=y.uniforms;return w}function P(y,S){let w;for(let z=0,B=u.length;z<B;z++){const X=u[z];if(X.cacheKey===S){w=X,++w.usedTimes;break}}return w===void 0&&(w=new Eg(i,S,y,r),u.push(w)),w}function I(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:I,releaseShaderCache:C,programs:u,dispose:D}}function Tg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,m,_,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,f,m,_,x,g){const p=a(h,f,m,_,x,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(h,f,m,_,x,g){const p=a(h,f,m,_,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Rg),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function wg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new eu,i.set(n,[a])):s>=r.length?(a=new eu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ve};break;case"SpotLight":t={position:new A,direction:new A,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pg=0;function Lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dg(i){const e=new Cg,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new dt,a=new dt;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,T=0,b=0,E=0,P=0,I=0,C=0;c.sort(Lg);for(let y=0,S=c.length;y<S;y++){const w=c[y],z=w.color,B=w.intensity,X=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=z.r*B,h+=z.g*B,f+=z.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],B);C++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,G=t.get(w);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=w.shadow.matrix,T++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(B),V.distance=X,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[x]=V;const Q=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,Q.updateMatrices(w),w.castShadow&&I++),n.spotLightMatrix[x]=Q.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Y,E++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Q=w.shadow,G=t.get(w);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=w.shadow.matrix,b++}n.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==P||D.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.directionalLength=m,D.pointLength=_,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=P,D.numLightProbes=C,n.version=Pg++)}function l(c,u){let h=0,f=0,m=0,_=0,x=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),h++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function tu(i){const e=new Dg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Og(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new tu(i),e.set(s,[o])):r>=a.length?(o=new tu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
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
}`;function Fg(i,e,t){let n=new Il;const s=new ke,r=new ke,a=new lt,o=new rd({depthPacking:pf}),l=new ad,c={},u=t.maxTextureSize,h={[yi]:tn,[tn]:yi,[hn]:hn},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ng,fragmentShader:Ug}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ft(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let p=this.type;this.render=function(I,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==Zn&&this.type===Zn,X=p===Zn&&this.type!==Zn;for(let Y=0,V=I.length;Y<V;Y++){const Q=I[Y],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||B===!0||X===!0){const Me=this.type!==Zn?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new Xi(s.x,s.y,Me),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pe=G.getViewportCount();for(let Me=0;Me<pe;Me++){const Ce=G.getViewport(Me);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),z.viewport(a),G.updateMatrices(Q,Me),n=G.getFrustum(),E(C,D,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&T(G,D),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,S,w)};function T(I,C){const D=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,D,m,x,null)}function b(I,C,D,y){let S=null;const w=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)S=w;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=S.uuid,B=C.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let Y=X[B];Y===void 0&&(Y=S.clone(),X[B]=Y,C.addEventListener("dispose",P)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,y===Zn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=D}return S}function E(I,C,D,y,S){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const B=e.update(I),X=I.material;if(Array.isArray(X)){const Y=B.groups;for(let V=0,Q=Y.length;V<Q;V++){const G=Y[V],ae=X[G.materialIndex];if(ae&&ae.visible){const pe=b(I,ae,y,S);I.onBeforeShadow(i,I,C,D,B,pe,G),i.renderBufferDirect(D,null,B,pe,I,G),I.onAfterShadow(i,I,C,D,B,pe,G)}}}else if(X.visible){const Y=b(I,X,y,S);I.onBeforeShadow(i,I,C,D,B,Y,null),i.renderBufferDirect(D,null,B,Y,I,null),I.onAfterShadow(i,I,C,D,B,Y,null)}}const z=I.children;for(let B=0,X=z.length;B<X;B++)E(z[B],C,D,y,S)}function P(I){I.target.removeEventListener("dispose",P);for(const D in c){const y=c[D],S=I.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Bg={[Ao]:To,[Ro]:Io,[wo]:Po,[bs]:Co,[To]:Ao,[Io]:Ro,[Po]:wo,[Co]:bs};function kg(i,e){function t(){let O=!1;const ue=new lt;let W=null;const j=new lt(0,0,0,0);return{setMask:function(de){W!==de&&!O&&(i.colorMask(de,de,de,de),W=de)},setLocked:function(de){O=de},setClear:function(de,he,Fe,vt,Ut){Ut===!0&&(de*=vt,he*=vt,Fe*=vt),ue.set(de,he,Fe,vt),j.equals(ue)===!1&&(i.clearColor(de,he,Fe,vt),j.copy(ue))},reset:function(){O=!1,W=null,j.set(-1,0,0,0)}}}function n(){let O=!1,ue=!1,W=null,j=null,de=null;return{setReversed:function(he){if(ue!==he){const Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ue=he;const vt=de;de=null,this.setClear(vt)}},getReversed:function(){return ue},setTest:function(he){he?le(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(he){W!==he&&!O&&(i.depthMask(he),W=he)},setFunc:function(he){if(ue&&(he=Bg[he]),j!==he){switch(he){case Ao:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Io:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=he}},setLocked:function(he){O=he},setClear:function(he){de!==he&&(ue&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){O=!1,W=null,j=null,de=null,ue=!1}}}function s(){let O=!1,ue=null,W=null,j=null,de=null,he=null,Fe=null,vt=null,Ut=null;return{setTest:function(st){O||(st?le(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(st){ue!==st&&!O&&(i.stencilMask(st),ue=st)},setFunc:function(st,yn,Gn){(W!==st||j!==yn||de!==Gn)&&(i.stencilFunc(st,yn,Gn),W=st,j=yn,de=Gn)},setOp:function(st,yn,Gn){(he!==st||Fe!==yn||vt!==Gn)&&(i.stencilOp(st,yn,Gn),he=st,Fe=yn,vt=Gn)},setLocked:function(st){O=st},setClear:function(st){Ut!==st&&(i.clearStencil(st),Ut=st)},reset:function(){O=!1,ue=null,W=null,j=null,de=null,he=null,Fe=null,vt=null,Ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],_=null,x=!1,g=null,p=null,T=null,b=null,E=null,P=null,I=null,C=new Ve(0,0,0),D=0,y=!1,S=null,w=null,z=null,B=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Q>=2);let ae=null,pe={};const Me=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),rt=new lt().fromArray(Me),K=new lt().fromArray(Ce);function ie(O,ue,W,j){const de=new Uint8Array(4),he=i.createTexture();i.bindTexture(O,he),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<W;Fe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ue+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}const Se={};Se[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(bs),je(!1),Ke(jl),le(i.CULL_FACE),L(Si);function le(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Re(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function tt(O,ue){return h[O]!==ue?(i.bindFramebuffer(O,ue),h[O]=ue,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(O,ue){let W=m,j=!1;if(O){W=f.get(ue),W===void 0&&(W=[],f.set(ue,W));const de=O.textures;if(W.length!==de.length||W[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Fe=de.length;he<Fe;he++)W[he]=i.COLOR_ATTACHMENT0+he;W.length=de.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function Mt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const gt={[Fi]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};gt[zh]=i.MIN,gt[Hh]=i.MAX;const qe={[Gh]:i.ZERO,[Wh]:i.ONE,[Vh]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function L(O,ue,W,j,de,he,Fe,vt,Ut,st){if(O===Si){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(le(i.BLEND),x=!0),O!==Fh){if(O!==g||st!==y){if((p!==Fi||E!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,E=Fi),st)switch(O){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,b=null,P=null,I=null,C.set(0,0,0),D=0,g=O,y=st}return}de=de||ue,he=he||W,Fe=Fe||j,(ue!==p||de!==E)&&(i.blendEquationSeparate(gt[ue],gt[de]),p=ue,E=de),(W!==T||j!==b||he!==P||Fe!==I)&&(i.blendFuncSeparate(qe[W],qe[j],qe[he],qe[Fe]),T=W,b=j,P=he,I=Fe),(vt.equals(C)===!1||Ut!==D)&&(i.blendColor(vt.r,vt.g,vt.b,Ut),C.copy(vt),D=Ut),g=O,y=!1}function gn(O,ue){O.side===hn?Re(i.CULL_FACE):le(i.CULL_FACE);let W=O.side===tn;ue&&(W=!W),je(W),O.blending===Es&&O.transparent===!1?L(Si):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const j=O.stencilWrite;o.setTest(j),j&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Ke(O){O!==Nh?(le(i.CULL_FACE),O!==w&&(O===jl?i.cullFace(i.BACK):O===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),w=O}function be(O){O!==z&&(V&&i.lineWidth(O),z=O)}function pt(O,ue,W){O?(le(i.POLYGON_OFFSET_FILL),(B!==ue||X!==W)&&(i.polygonOffset(ue,W),B=ue,X=W)):Re(i.POLYGON_OFFSET_FILL)}function ye(O){O?le(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+Y-1),ae!==O&&(i.activeTexture(O),ae=O)}function v(O,ue,W){W===void 0&&(ae===null?W=i.TEXTURE0+Y-1:W=ae);let j=pe[W];j===void 0&&(j={type:void 0,texture:void 0},pe[W]=j),(j.type!==O||j.texture!==ue)&&(ae!==W&&(i.activeTexture(W),ae=W),i.bindTexture(O,ue||Se[O]),j.type=O,j.texture=ue)}function F(){const O=pe[ae];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function _e(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function $e(O,ue){let W=c.get(ue);W===void 0&&(W=new WeakMap,c.set(ue,W));let j=W.get(O);j===void 0&&(j=i.getUniformBlockIndex(ue,O.name),W.set(O,j))}function ze(O,ue){const j=c.get(ue).get(O);l.get(ue)!==j&&(i.uniformBlockBinding(ue,j,O.__bindingPointIndex),l.set(ue,j))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,pe={},h={},f=new WeakMap,m=[],_=null,x=!1,g=null,p=null,T=null,b=null,E=null,P=null,I=null,C=new Ve(0,0,0),D=0,y=!1,S=null,w=null,z=null,B=null,X=null,rt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Re,bindFramebuffer:tt,drawBuffers:Le,useProgram:Mt,setBlending:L,setMaterial:gn,setFlipSided:je,setCullFace:Ke,setLineWidth:be,setPolygonOffset:pt,setScissorTest:ye,activeTexture:R,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:ze,texStorage2D:Ie,texStorage3D:te,texSubImage2D:q,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:we,scissor:Oe,viewport:_e,reset:ht}}function zg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return m?new OffscreenCanvas(R,v):ha("canvas")}function x(R,v,F){let $=1;const ee=ye(R);if((ee.width>F||ee.height>F)&&($=F/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*ee.width),Ee=Math.floor($*ee.height);h===void 0&&(h=_(q,Ee));const ce=v?_(q,Ee):h;return ce.width=q,ce.height=Ee,ce.getContext("2d").drawImage(R,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ee+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,v,F,$,ee=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const Ee=ee?ca:et.getTransfer($);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(R,v){let F;return R?v===null||v===Vi||v===er?F=i.DEPTH24_STENCIL8:v===Qn?F=i.DEPTH32F_STENCIL8:v===Qs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===er?F=i.DEPTH_COMPONENT24:v===Qn?F=i.DEPTH_COMPONENT32F:v===Qs&&(F=i.DEPTH_COMPONENT16),F}function P(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){const v=R.target;v.removeEventListener("dispose",I),D(v),v.isVideoTexture&&u.delete(v)}function C(R){const v=R.target;v.removeEventListener("dispose",C),S(v)}function D(R){const v=n.get(R);if(v.__webglInit===void 0)return;const F=R.source,$=f.get(F);if($){const ee=$[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys($).length===0&&f.delete(F)}n.remove(R)}function y(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const F=R.source,$=f.get(F);delete $[v.__cacheKey],a.memory.textures--}function S(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ee=0;ee<v.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=R.textures;for(let $=0,ee=F.length;$<ee;$++){const q=n.get(F[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(R)}let w=0;function z(){w=0}function B(){const R=w;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),w+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Y(R,v){const F=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,R,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function V(R,v){const F=n.get(R);if(R.version>0&&F.__version!==R.version){K(F,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Q(R,v){const F=n.get(R);if(R.version>0&&F.__version!==R.version){K(F,R,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(R,v){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ie(F,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const ae={[Oo]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},pe={[dn]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Me={[gf]:i.NEVER,[Mf]:i.ALWAYS,[_f]:i.LESS,[Lu]:i.LEQUAL,[xf]:i.EQUAL,[Ef]:i.GEQUAL,[vf]:i.GREATER,[Sf]:i.NOTEQUAL};function Ce(R,v){if(v.type===Qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===wa||v.magFilter===pr||v.magFilter===zi||v.minFilter===Zt||v.minFilter===wa||v.minFilter===pr||v.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ae[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==pr&&v.minFilter!==zi||v.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function rt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",I));const $=v.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const q=X(v);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[q].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(v)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return F}function K(R,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const ee=rt(R,v),q=v.source;t.bindTexture($,R.__webglTexture,i.TEXTURE0+F);const Ee=n.get(q);if(q.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ce=et.getPrimaries(et.workingColorSpace),we=v.colorSpace===xi?null:et.getPrimaries(v.colorSpace),Ie=v.colorSpace===xi||ce===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let te=x(v.image,!1,s.maxTextureSize);te=pt(v,te);const ge=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Oe=b(v.internalFormat,ge,Pe,v.colorSpace,v.isVideoTexture);Ce($,v);let _e;const $e=v.mipmaps,ze=v.isVideoTexture!==!0,ht=Ee.__version===void 0||ee===!0,O=q.dataReady,ue=P(v,te);if(v.isDepthTexture)Oe=E(v.format===nr,v.type),ht&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Oe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Oe,te.width,te.height,0,ge,Pe,null));else if(v.isDataTexture)if($e.length>0){ze&&ht&&t.texStorage2D(i.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let W=0,j=$e.length;W<j;W++)_e=$e[W],ze?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Oe,_e.width,_e.height,0,ge,Pe,_e.data);v.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(i.TEXTURE_2D,ue,Oe,te.width,te.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,ge,Pe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,te.width,te.height,0,ge,Pe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Oe,$e[0].width,$e[0].height,te.depth);for(let W=0,j=$e.length;W<j;W++)if(_e=$e[W],v.format!==Pn)if(ge!==null)if(ze){if(O)if(v.layerUpdates.size>0){const de=Pc(_e.width,_e.height,v.format,v.type);for(const he of v.layerUpdates){const Fe=_e.data.subarray(he*de/_e.data.BYTES_PER_ELEMENT,(he+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,he,_e.width,_e.height,1,ge,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Oe,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ge,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Oe,_e.width,_e.height,te.depth,0,ge,Pe,_e.data)}else{ze&&ht&&t.texStorage2D(i.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let W=0,j=$e.length;W<j;W++)_e=$e[W],v.format!==Pn?ge!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Oe,_e.width,_e.height,0,ge,Pe,_e.data)}else if(v.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Oe,te.width,te.height,te.depth),O)if(v.layerUpdates.size>0){const W=Pc(te.width,te.height,v.format,v.type);for(const j of v.layerUpdates){const de=te.data.subarray(j*W/te.data.BYTES_PER_ELEMENT,(j+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,ge,Pe,de)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(v.isData3DTexture)ze?(ht&&t.texStorage3D(i.TEXTURE_3D,ue,Oe,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(v.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(i.TEXTURE_2D,ue,Oe,te.width,te.height);else{let W=te.width,j=te.height;for(let de=0;de<ue;de++)t.texImage2D(i.TEXTURE_2D,de,Oe,W,j,0,ge,Pe,null),W>>=1,j>>=1}}else if($e.length>0){if(ze&&ht){const W=ye($e[0]);t.texStorage2D(i.TEXTURE_2D,ue,Oe,W.width,W.height)}for(let W=0,j=$e.length;W<j;W++)_e=$e[W],ze?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Pe,_e):t.texImage2D(i.TEXTURE_2D,W,Oe,ge,Pe,_e);v.generateMipmaps=!1}else if(ze){if(ht){const W=ye(te);t.texStorage2D(i.TEXTURE_2D,ue,Oe,W.width,W.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ge,Pe,te);g(v)&&p($),Ee.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ie(R,v,F){if(v.image.length!==6)return;const $=rt(R,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const q=n.get(ee);if(ee.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const Ee=et.getPrimaries(et.workingColorSpace),ce=v.colorSpace===xi?null:et.getPrimaries(v.colorSpace),we=v.colorSpace===xi||Ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let j=0;j<6;j++)!Ie&&!te?ge[j]=x(v.image[j],!0,s.maxCubemapSize):ge[j]=te?v.image[j].image:v.image[j],ge[j]=pt(v,ge[j]);const Pe=ge[0],Oe=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),$e=b(v.internalFormat,Oe,_e,v.colorSpace),ze=v.isVideoTexture!==!0,ht=q.__version===void 0||$===!0,O=ee.dataReady;let ue=P(v,Pe);Ce(i.TEXTURE_CUBE_MAP,v);let W;if(Ie){ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,$e,Pe.width,Pe.height);for(let j=0;j<6;j++){W=ge[j].mipmaps;for(let de=0;de<W.length;de++){const he=W[de];v.format!==Pn?Oe!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,he.width,he.height,Oe,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,$e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,he.width,he.height,Oe,_e,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,$e,he.width,he.height,0,Oe,_e,he.data)}}}else{if(W=v.mipmaps,ze&&ht){W.length>0&&ue++;const j=ye(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,$e,j.width,j.height)}for(let j=0;j<6;j++)if(te){ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge[j].width,ge[j].height,Oe,_e,ge[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,ge[j].width,ge[j].height,0,Oe,_e,ge[j].data);for(let de=0;de<W.length;de++){const Fe=W[de].image[j].image;ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,Fe.width,Fe.height,Oe,_e,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,$e,Fe.width,Fe.height,0,Oe,_e,Fe.data)}}else{ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Oe,_e,ge[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,Oe,_e,ge[j]);for(let de=0;de<W.length;de++){const he=W[de];ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,Oe,_e,he.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,$e,Oe,_e,he.image[j])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),q.__version=ee.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Se(R,v,F,$,ee,q){const Ee=r.convert(F.format,F.colorSpace),ce=r.convert(F.type),we=b(F.internalFormat,Ee,ce,F.colorSpace),Ie=n.get(v),te=n.get(F);if(te.__renderTarget=v,!Ie.__hasExternalTextures){const ge=Math.max(1,v.width>>q),Pe=Math.max(1,v.height>>q);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,we,ge,Pe,v.depth,0,Ee,ce,null):t.texImage2D(ee,q,we,ge,Pe,0,Ee,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,te.__webglTexture,0,je(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,te.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=E(v.stencilBuffer,ee),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=je(v);Ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,R)}else{const $=v.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],Ee=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),we=b(q.internalFormat,Ee,ce,q.colorSpace),Ie=je(v);F&&Ke(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,we,v.width,v.height):Ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,we,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,we,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ee=$.__webglTexture,q=je(v);if(v.depthTexture.format===tr)Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===nr)Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function tt(R){const v=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Re(v.__webglFramebuffer[0],R):Re(v.__webglFramebuffer,R)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),le(v.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),le(v.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(R,v,F){const $=n.get(R);v!==void 0&&Se($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&tt(R)}function Mt(R){const v=R.texture,F=n.get(R),$=n.get(v);R.addEventListener("dispose",C);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let we=0;we<v.mipmaps.length;we++)F.__webglFramebuffer[ce][we]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ce=0,we=ee.length;ce<we;ce++){const Ie=n.get(ee[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ke(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const we=ee[ce];F.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const Ie=r.convert(we.format,we.colorSpace),te=r.convert(we.type),ge=b(we.internalFormat,Ie,te,we.colorSpace,R.isXRRenderTarget===!0),Pe=je(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),le(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)Se(F.__webglFramebuffer[ce][we],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we);else Se(F.__webglFramebuffer[ce],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,we=ee.length;ce<we;ce++){const Ie=ee[ce],te=n.get(Ie);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ce(i.TEXTURE_2D,Ie),Se(F.__webglFramebuffer,R,Ie,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),g(Ie)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),Ce(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)Se(F.__webglFramebuffer[we],R,v,i.COLOR_ATTACHMENT0,ce,we);else Se(F.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ce,0);g(v)&&p(ce),t.unbindTexture()}R.depthBuffer&&tt(R)}function gt(R){const v=R.textures;for(let F=0,$=v.length;F<$;F++){const ee=v[F];if(g(ee)){const q=T(R),Ee=n.get(ee).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const qe=[],L=[];function gn(R){if(R.samples>0){if(Ke(R)===!1){const v=R.textures,F=R.width,$=R.height;let ee=i.COLOR_BUFFER_BIT;const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(R),ce=v.length>1;if(ce)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const te=n.get(v[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,ee,i.NEAREST),l===!0&&(qe.length=0,L.length=0,qe.push(i.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(qe.push(q),L.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const te=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function je(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function pt(R,v){const F=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Rs&&F!==xi&&(et.getTransfer(F)===at?($!==Pn||ee!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Le,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ke}function Hg(i,e){function t(n,s=xi){let r;const a=et.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.BYTE;if(n===bu)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Ru)return i.RGB;if(n===Pn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===wu)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===ea||n===ta)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Bo||n===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Ho)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Vo||n===Xo||n===Yo||n===qo||n===Ko||n===$o||n===Zo||n===jo||n===Jo||n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===il||n===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===rl||n===al||n===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:Gg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xg extends Is{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const x=new Vg,g=t.getContextAttributes();let p=null,T=null;const b=[],E=[],P=new ke;let I=null;const C=new un;C.viewport=new lt;const D=new un;D.viewport=new lt;const y=[C,D],S=new hd;let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new $a,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new $a,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new $a,b[K]=ie),ie.getHandSpace()};function B(K){const ie=E.indexOf(K.inputSource);if(ie===-1)return;const Se=b[ie];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const ie=E[K];ie!==null&&(E[K]=null,b[K].disconnect(ie))}w=null,z=null,x.reset(),e.setRenderTarget(p),m=null,f=null,h=null,s=null,T=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,le=null,Re=null;g.depth&&(Re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=g.stencil?nr:tr,le=g.stencil?er:Vi);const tt={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Xi(f.textureWidth,f.textureHeight,{format:Pn,type:zn,depthTexture:new Vu(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Xi(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let ie=0;ie<K.removed.length;ie++){const Se=K.removed[ie],le=E.indexOf(Se);le>=0&&(E[le]=null,b[le].disconnect(Se))}for(let ie=0;ie<K.added.length;ie++){const Se=K.added[ie];let le=E.indexOf(Se);if(le===-1){for(let tt=0;tt<b.length;tt++)if(tt>=E.length){E.push(Se),le=tt;break}else if(E[tt]===null){E[tt]=Se,le=tt;break}if(le===-1)break}const Re=b[le];Re&&Re.connect(Se)}}const V=new A,Q=new A;function G(K,ie,Se){V.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const le=V.distanceTo(Q),Re=ie.projectionMatrix.elements,tt=Se.projectionMatrix.elements,Le=Re[14]/(Re[10]-1),Mt=Re[14]/(Re[10]+1),gt=(Re[9]+1)/Re[5],qe=(Re[9]-1)/Re[5],L=(Re[8]-1)/Re[0],gn=(tt[8]+1)/tt[0],je=Le*L,Ke=Le*gn,be=le/(-L+gn),pt=be*-L;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Re[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ye=Le+be,R=Mt+be,v=je-pt,F=Ke+(le-pt),$=gt*Mt/R*ye,ee=qe*Mt/R*ye;K.projectionMatrix.makePerspective(v,F,$,ee,ye,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,Se=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),S.near=D.near=C.near=ie,S.far=D.far=C.far=Se,(w!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far),C.layers.mask=K.layers.mask|2,D.layers.mask=K.layers.mask|4,S.layers.mask=C.layers.mask|D.layers.mask;const le=K.parent,Re=S.cameras;ae(S,le);for(let tt=0;tt<Re.length;tt++)ae(Re[tt],le);Re.length===2?G(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),pe(K,S,le)};function pe(K,ie,Se){Se===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Me=null;function Ce(K,ie){if(u=ie.getViewerPose(c||a),_=ie,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let le=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Le=0;Le<Se.length;Le++){const Mt=Se[Le];let gt=null;if(m!==null)gt=m.getViewport(Mt);else{const L=h.getViewSubImage(f,Mt);gt=L.viewport,Le===0&&(e.setRenderTargetTextures(T,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(T))}let qe=y[Le];qe===void 0&&(qe=new un,qe.layers.enable(Le),qe.viewport=new lt,y[Le]=qe),qe.matrix.fromArray(Mt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Mt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(gt.x,gt.y,gt.width,gt.height),Le===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(qe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Le=h.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,s.renderState)}}for(let Se=0;Se<b.length;Se++){const le=E[Se],Re=b[Se];le!==null&&Re!==void 0&&Re.update(le,ie,c||a)}Me&&Me(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const rt=new Ku;rt.setAnimationLoop(Ce),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}}const Li=new Ge,Yg=new dt;function qg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Bu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,E=T.envMapRotation;b&&(g.envMap.value=b,Li.copy(E),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(Li)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const E=b.program;n.uniformBlockBinding(T,E)}function c(T,b){let E=s[T.id];E===void 0&&(_(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",g));const P=b.program;n.updateUBOMapping(T,P);const I=e.render.frame;r[T.id]!==I&&(f(T),r[T.id]=I)}function u(T){const b=h();T.__bindingPointIndex=b;const E=i.createBuffer(),P=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=s[T.id],E=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let I=0,C=E.length;I<C;I++){const D=Array.isArray(E[I])?E[I]:[E[I]];for(let y=0,S=D.length;y<S;y++){const w=D[y];if(m(w,I,y,P)===!0){const z=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let Y=0;Y<B.length;Y++){const V=B[Y],Q=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+X,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,b,E,P){const I=T.value,C=b+"_"+E;if(P[C]===void 0)return typeof I=="number"||typeof I=="boolean"?P[C]=I:P[C]=I.clone(),!0;{const D=P[C];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return P[C]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function _(T){const b=T.uniforms;let E=0;const P=16;for(let C=0,D=b.length;C<D;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,w=y.length;S<w;S++){const z=y[S],B=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=B.length;X<Y;X++){const V=B[X],Q=x(V),G=E%P,ae=G%Q.boundary,pe=G+ae;E+=ae,pe!==0&&P-pe<Q.storage&&(E+=P-pe),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Q.storage}}}const I=E%P;return I>0&&(E+=P-I),T.__size=E,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function g(T){const b=T.target;b.removeEventListener("dispose",g);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $g{constructor(e={}){const{canvas:t=bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Ht;let I=0,C=0,D=null,y=-1,S=null;const w=new lt,z=new lt;let B=null;const X=new Ve(0);let Y=0,V=t.width,Q=t.height,G=1,ae=null,pe=null;const Me=new lt(0,0,V,Q),Ce=new lt(0,0,V,Q);let rt=!1;const K=new Il;let ie=!1,Se=!1;const le=new dt,Re=new dt,tt=new A,Le=new lt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function qe(){return D===null?G:1}let L=n;function gn(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_l}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const N="webgl2";if(L=gn(N,M),L===null)throw gn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Ke,be,pt,ye,R,v,F,$,ee,q,Ee,ce,we,Ie,te,ge,Pe,Oe,_e,$e,ze,ht,O;function ue(){je=new r0(L),je.init(),ze=new Hg(L,je),Ke=new Jm(L,je,e,ze),be=new kg(L,je),Ke.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),pt=new l0(L),ye=new Tg,R=new zg(L,je,be,ye,Ke,ze,pt),v=new e0(E),F=new s0(E),$=new pd(L),ht=new Zm(L,$),ee=new a0(L,$,pt,ht),q=new u0(L,ee,$,pt),Oe=new c0(L,Ke,R),te=new Qm(ye),Ee=new Ag(E,v,F,je,Ke,ht,te),ce=new qg(E,ye),we=new wg,Ie=new Og(je),Pe=new $m(E,v,F,be,q,m,l),ge=new Fg(E,q,Ke),O=new Kg(L,pt,Ke,be),_e=new jm(L,je,pt),$e=new o0(L,je,pt),pt.programs=Ee.programs,E.capabilities=Ke,E.extensions=je,E.properties=ye,E.renderLists=we,E.shadowMap=ge,E.state=be,E.info=pt}ue();const W=new Xg(E,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,Q,!1))},this.getSize=function(M){return M.set(V,Q)},this.setSize=function(M,N,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Q=N,t.width=Math.floor(M*G),t.height=Math.floor(N*G),k===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(V*G,Q*G).floor()},this.setDrawingBufferSize=function(M,N,k){V=M,Q=N,G=k,t.width=Math.floor(M*k),t.height=Math.floor(N*k),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,N,k,H){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,N,k,H),be.viewport(w.copy(Me).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Ce)},this.setScissor=function(M,N,k,H){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,N,k,H),be.scissor(z.copy(Ce).multiplyScalar(G).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){be.setScissorTest(rt=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){pe=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,k=!0){let H=0;if(M){let U=!1;if(D!==null){const ne=D.texture.format;U=ne===bl||ne===yl||ne===Ml}if(U){const ne=D.texture.type,oe=ne===zn||ne===Vi||ne===Qs||ne===er||ne===Sl||ne===El,me=Pe.getClearColor(),xe=Pe.getClearAlpha(),Ne=me.r,De=me.g,Ae=me.b;oe?(_[0]=Ne,_[1]=De,_[2]=Ae,_[3]=xe,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=Ne,x[1]=De,x[2]=Ae,x[3]=xe,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Pe.dispose(),we.dispose(),Ie.dispose(),ye.dispose(),v.dispose(),F.dispose(),q.dispose(),ht.dispose(),O.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Vl),W.removeEventListener("sessionend",Xl),Ai.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=pt.autoReset,N=ge.enabled,k=ge.autoUpdate,H=ge.needsUpdate,U=ge.type;ue(),pt.autoReset=M,ge.enabled=N,ge.autoUpdate=k,ge.needsUpdate=H,ge.type=U}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Fe(M){const N=M.target;N.removeEventListener("dispose",Fe),vt(N)}function vt(M){Ut(M),ye.remove(M)}function Ut(M){const N=ye.get(M).programs;N!==void 0&&(N.forEach(function(k){Ee.releaseProgram(k)}),M.isShaderMaterial&&Ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,k,H,U,ne){N===null&&(N=Mt);const oe=U.isMesh&&U.matrixWorld.determinant()<0,me=Ch(M,N,k,H,U);be.setMaterial(H,oe);let xe=k.index,Ne=1;if(H.wireframe===!0){if(xe=ee.getWireframeAttribute(k),xe===void 0)return;Ne=2}const De=k.drawRange,Ae=k.attributes.position;let Je=De.start*Ne,nt=(De.start+De.count)*Ne;ne!==null&&(Je=Math.max(Je,ne.start*Ne),nt=Math.min(nt,(ne.start+ne.count)*Ne)),xe!==null?(Je=Math.max(Je,0),nt=Math.min(nt,xe.count)):Ae!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Ae.count));const bt=nt-Je;if(bt<0||bt===1/0)return;ht.setup(U,H,me,k,xe);let St,Qe=_e;if(xe!==null&&(St=$.get(xe),Qe=$e,Qe.setIndex(St)),U.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*qe()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),be.setLineWidth(Te*qe()),U.isLineSegments?Qe.setMode(L.LINES):U.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else U.isPoints?Qe.setMode(L.POINTS):U.isSprite&&Qe.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Ot=U._multiDrawCounts,it=U._multiDrawCount,bn=xe?$.get(xe).bytesPerElement:1,Ki=ye.get(H).currentProgram.getUniforms();for(let an=0;an<it;an++)Ki.setValue(L,"_gl_DrawID",an),Qe.render(Te[an]/bn,Ot[an])}else if(U.isInstancedMesh)Qe.renderInstances(Je,bt,U.count);else if(k.isInstancedBufferGeometry){const Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ot=Math.min(k.instanceCount,Te);Qe.renderInstances(Je,bt,Ot)}else Qe.render(Je,bt)};function st(M,N,k){M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=tn,M.needsUpdate=!0,dr(M,N,k),M.side=yi,M.needsUpdate=!0,dr(M,N,k),M.side=hn):dr(M,N,k)}this.compile=function(M,N,k=null){k===null&&(k=M),p=Ie.get(k),p.init(N),b.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let oe=0;oe<ne.length;oe++){const me=ne[oe];st(me,k,U),H.add(me)}else st(ne,k,U),H.add(ne)}),p=b.pop(),H},this.compileAsync=function(M,N,k=null){const H=this.compile(M,N,k);return new Promise(U=>{function ne(){if(H.forEach(function(oe){ye.get(oe).currentProgram.isReady()&&H.delete(oe)}),H.size===0){U(M);return}setTimeout(ne,10)}je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let yn=null;function Gn(M){yn&&yn(M)}function Vl(){Ai.stop()}function Xl(){Ai.start()}const Ai=new Ku;Ai.setAnimationLoop(Gn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(M){yn=M,W.setAnimationLoop(M),M===null?Ai.stop():Ai.start()},W.addEventListener("sessionstart",Vl),W.addEventListener("sessionend",Xl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,N,D),p=Ie.get(M,b.length),p.init(N),b.push(p),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Re),Se=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Se),g=we.get(M,T.length),g.init(),T.push(g),W.enabled===!0&&W.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&Ta(ne,N,-1/0,E.sortObjects)}Ta(M,N,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(ae,pe),gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,gt&&Pe.addToRenderList(g,M),this.info.render.frame++,ie===!0&&te.beginShadows();const k=p.state.shadowsArray;ge.render(k,M,N),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const ne=N.cameras;if(U.length>0)for(let oe=0,me=ne.length;oe<me;oe++){const xe=ne[oe];ql(H,U,M,xe)}gt&&Pe.render(M);for(let oe=0,me=ne.length;oe<me;oe++){const xe=ne[oe];Yl(g,M,xe,xe.viewport)}}else U.length>0&&ql(H,U,M,N),gt&&Pe.render(M),Yl(g,M,N);D!==null&&C===0&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(E,M,N),ht.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],ie===!0&&te.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Ta(M,N,k,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){H&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);const oe=q.update(M),me=M.material;me.visible&&g.push(M,oe,me,k,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const oe=q.update(M),me=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Le.copy(oe.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(me)){const xe=oe.groups;for(let Ne=0,De=xe.length;Ne<De;Ne++){const Ae=xe[Ne],Je=me[Ae.materialIndex];Je&&Je.visible&&g.push(M,oe,Je,k,Le.z,Ae)}}else me.visible&&g.push(M,oe,me,k,Le.z,null)}}const ne=M.children;for(let oe=0,me=ne.length;oe<me;oe++)Ta(ne[oe],N,k,H)}function Yl(M,N,k,H){const U=M.opaque,ne=M.transmissive,oe=M.transparent;p.setupLightsView(k),ie===!0&&te.setGlobalState(E.clippingPlanes,k),H&&be.viewport(w.copy(H)),U.length>0&&fr(U,N,k),ne.length>0&&fr(ne,N,k),oe.length>0&&fr(oe,N,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ql(M,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Xi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ar:zn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],oe=H.viewport||w;ne.setSize(oe.z*E.transmissionResolutionScale,oe.w*E.transmissionResolutionScale);const me=E.getRenderTarget();E.setRenderTarget(ne),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),gt&&Pe.render(k);const xe=E.toneMapping;E.toneMapping=Ei;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ie===!0&&te.setGlobalState(E.clippingPlanes,H),fr(M,k,H),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ae=0,Je=N.length;Ae<Je;Ae++){const nt=N[Ae],bt=nt.object,St=nt.geometry,Qe=nt.material,Te=nt.group;if(Qe.side===hn&&bt.layers.test(H.layers)){const Ot=Qe.side;Qe.side=tn,Qe.needsUpdate=!0,Kl(bt,k,H,St,Qe,Te),Qe.side=Ot,Qe.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne))}E.setRenderTarget(me),E.setClearColor(X,Y),Ne!==void 0&&(H.viewport=Ne),E.toneMapping=xe}function fr(M,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=M.length;U<ne;U++){const oe=M[U],me=oe.object,xe=oe.geometry,Ne=oe.group;let De=oe.material;De.allowOverride===!0&&H!==null&&(De=H),me.layers.test(k.layers)&&Kl(me,N,k,xe,De,Ne)}}function Kl(M,N,k,H,U,ne){M.onBeforeRender(E,N,k,H,U,ne),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(E,N,k,H,M,ne),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,E.renderBufferDirect(k,N,H,U,M,ne),U.side=yi,U.needsUpdate=!0,E.renderBufferDirect(k,N,H,U,M,ne),U.side=hn):E.renderBufferDirect(k,N,H,U,M,ne),M.onAfterRender(E,N,k,H,U,ne)}function dr(M,N,k){N.isScene!==!0&&(N=Mt);const H=ye.get(M),U=p.state.lights,ne=p.state.shadowsArray,oe=U.state.version,me=Ee.getParameters(M,U.state,ne,N,k),xe=Ee.getProgramCacheKey(me);let Ne=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Fe),Ne=new Map,H.programs=Ne);let De=Ne.get(xe);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===oe)return Zl(M,me),De}else me.uniforms=Ee.getUniforms(M),M.onBeforeCompile(me,E),De=Ee.acquireProgram(me,xe),Ne.set(xe,De),H.uniforms=me.uniforms;const Ae=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Zl(M,me),H.needsLights=Ph(M),H.lightsStateVersion=oe,H.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=De,H.uniformsList=null,De}function $l(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=ra.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Zl(M,N){const k=ye.get(M);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Ch(M,N,k,H,U){N.isScene!==!0&&(N=Mt),R.resetTextureUnits();const ne=N.fog,oe=H.isMeshStandardMaterial?N.environment:null,me=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Rs,xe=(H.isMeshStandardMaterial?F:v).get(H.envMap||oe),Ne=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,nt=!!k.morphAttributes.color;let bt=Ei;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=E.toneMapping);const St=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=St!==void 0?St.length:0,Te=ye.get(H),Ot=p.state.lights;if(ie===!0&&(Se===!0||M!==S)){const Xt=M===S&&H.id===y;te.setState(H,M,Xt)}let it=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ot.state.version||Te.outputColorSpace!==me||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==xe||H.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==De||Te.morphTargets!==Ae||Te.morphNormals!==Je||Te.morphColors!==nt||Te.toneMapping!==bt||Te.morphTargetsCount!==Qe)&&(it=!0):(it=!0,Te.__version=H.version);let bn=Te.currentProgram;it===!0&&(bn=dr(H,N,U));let Ki=!1,an=!1,Ls=!1;const mt=bn.getUniforms(),_n=Te.uniforms;if(be.useProgram(bn.program)&&(Ki=!0,an=!0,Ls=!0),H.id!==y&&(y=H.id,an=!0),Ki||S!==M){be.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),Tf(le),Rf(le),mt.setValue(L,"projectionMatrix",le)):mt.setValue(L,"projectionMatrix",M.projectionMatrix),mt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Jt=mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(L,tt.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,an=!0,Ls=!0)}if(U.isSkinnedMesh){mt.setOptional(L,U,"bindMatrix"),mt.setOptional(L,U,"bindMatrixInverse");const Xt=U.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue(L,"boneTexture",Xt.boneTexture,R))}U.isBatchedMesh&&(mt.setOptional(L,U,"batchingTexture"),mt.setValue(L,"batchingTexture",U._matricesTexture,R),mt.setOptional(L,U,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",U._indirectTexture,R),mt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",U._colorsTexture,R));const xn=k.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Oe.update(U,k,bn),(an||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,mt.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(_n.envMap.value=xe,_n.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(_n.envMapIntensity.value=N.environmentIntensity),an&&(mt.setValue(L,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Ih(_n,Ls),ne&&H.fog===!0&&ce.refreshFogUniforms(_n,ne),ce.refreshMaterialUniforms(_n,H,G,Q,p.state.transmissionRenderTarget[M.id]),ra.upload(L,$l(Te),_n,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ra.upload(L,$l(Te),_n,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(L,"center",U.center),mt.setValue(L,"modelViewMatrix",U.modelViewMatrix),mt.setValue(L,"normalMatrix",U.normalMatrix),mt.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xt=H.uniformsGroups;for(let Jt=0,Ra=Xt.length;Jt<Ra;Jt++){const Ti=Xt[Jt];O.update(Ti,bn),O.bind(Ti,bn)}}return bn}function Ih(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ph(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,k){const H=ye.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=N,ye.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const k=ye.get(M);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Lh=L.createFramebuffer();this.setRenderTarget=function(M,N=0,k=0){D=M,I=N,C=k;let H=!0,U=null,ne=!1,oe=!1;if(M){const xe=ye.get(M);if(xe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(xe.__hasExternalTextures)R.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(xe.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(oe=!0);const De=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][k]:U=De[N],ne=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?U=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[k]:U=De,w.copy(M.viewport),z.copy(M.scissor),B=M.scissorTest}else w.copy(Me).multiplyScalar(G).floor(),z.copy(Ce).multiplyScalar(G).floor(),B=rt;if(k!==0&&(U=Lh),be.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&be.drawBuffers(M,U),be.viewport(w),be.scissor(z),be.setScissorTest(B),ne){const xe=ye.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,k)}else if(oe){const xe=ye.get(M.texture),Ne=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,k,Ne)}else if(M!==null&&k!==0){const xe=ye.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(M,N,k,H,U,ne,oe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){be.bindFramebuffer(L.FRAMEBUFFER,me);try{const xe=M.texture,Ne=xe.format,De=xe.type;if(!Ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&k>=0&&k<=M.height-U&&L.readPixels(N,k,H,U,ze.convert(Ne),ze.convert(De),ne)}finally{const xe=D!==null?ye.get(D).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,N,k,H,U,ne,oe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me)if(N>=0&&N<=M.width-H&&k>=0&&k<=M.height-U){be.bindFramebuffer(L.FRAMEBUFFER,me);const xe=M.texture,Ne=xe.format,De=xe.type;if(!Ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(N,k,H,U,ze.convert(Ne),ze.convert(De),0);const Je=D!==null?ye.get(D).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Je);const nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Af(L,nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Ae),L.deleteSync(nt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,k=0){const H=Math.pow(2,-k),U=Math.floor(M.image.width*H),ne=Math.floor(M.image.height*H),oe=N!==null?N.x:0,me=N!==null?N.y:0;R.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,oe,me,U,ne),be.unbindTexture()};const Dh=L.createFramebuffer(),Oh=L.createFramebuffer();this.copyTextureToTexture=function(M,N,k=null,H=null,U=0,ne=null){ne===null&&(U!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let oe,me,xe,Ne,De,Ae,Je,nt,bt;const St=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(k!==null)oe=k.max.x-k.min.x,me=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,Ne=k.min.x,De=k.min.y,Ae=k.isBox3?k.min.z:0;else{const xn=Math.pow(2,-U);oe=Math.floor(St.width*xn),me=Math.floor(St.height*xn),M.isDataArrayTexture?xe=St.depth:M.isData3DTexture?xe=Math.floor(St.depth*xn):xe=1,Ne=0,De=0,Ae=0}H!==null?(Je=H.x,nt=H.y,bt=H.z):(Je=0,nt=0,bt=0);const Qe=ze.convert(N.format),Te=ze.convert(N.type);let Ot;N.isData3DTexture?(R.setTexture3D(N,0),Ot=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ot=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ot=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),bn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),Ls=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const mt=M.isDataArrayTexture||M.isData3DTexture,_n=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const xn=ye.get(M),Xt=ye.get(N),Jt=ye.get(xn.__renderTarget),Ra=ye.get(Xt.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let Ti=0;Ti<xe;Ti++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,U,Ae+Ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,ne,bt+Ti)),L.blitFramebuffer(Ne,De,oe,me,Je,nt,oe,me,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||ye.has(M)){const xn=ye.get(M),Xt=ye.get(N);be.bindFramebuffer(L.READ_FRAMEBUFFER,Dh),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Oh);for(let Jt=0;Jt<xe;Jt++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,U,Ae+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,U),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,ne,bt+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,ne),U!==0?L.blitFramebuffer(Ne,De,oe,me,Je,nt,oe,me,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(Ot,ne,Je,nt,bt+Jt,Ne,De,oe,me):L.copyTexSubImage2D(Ot,ne,Je,nt,Ne,De,oe,me);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ot,ne,Je,nt,bt,oe,me,xe,Qe,Te,St.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,ne,Je,nt,bt,oe,me,xe,Qe,St.data):L.texSubImage3D(Ot,ne,Je,nt,bt,oe,me,xe,Qe,Te,St):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,Je,nt,oe,me,Qe,Te,St.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,Je,nt,St.width,St.height,Qe,St.data):L.texSubImage2D(L.TEXTURE_2D,ne,Je,nt,oe,me,Qe,Te,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ls),ne===0&&N.generateMipmaps&&L.generateMipmap(Ot),be.unbindTexture()},this.copyTextureToTexture3D=function(M,N,k=null,H=null,U=0){return sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,k,H,U)},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){I=0,C=0,D=null,be.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const d={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,WATER:7,BEDROCK:8,SNOW:9,CACTUS:10,FLOWER_RED:11,FLOWER_YELLOW:12,VINE:13,GRAVEL:14,MOSS:15,CASTLE_BRICK:16,APPLE:17,WEAPON_BANDIT_BLADE:18,WEAPON_RAIDER_SABER:19,WEAPON_SCORP_BOW:20,WEAPON_JAGUAR_CLAWS:21,WEAPON_WRAITH_HAMMER:22,WEAPON_YETI_AXE:23,PLANK:24,STICK:25,WOOD_SWORD:26,WOOD_AXE:27,WOOD_PICKAXE:28,WOOD_SPADE:29,STONE_SWORD:30,STONE_AXE:31,STONE_PICKAXE:32,STONE_SPADE:33,BRAMBLE:34,SKELETON_SPAWNER:35,BOW:36,ARROW:37,WIZARD_GROUP_SPAWNER:38,IRON_SWORD:39,IRON_ORE:40,COAL_ORE:41,GOLD_ORE:42,IRON_AXE:43,IRON_PICKAXE:44,IRON_SPADE:45,IRON:46,COAL:47,GOLD:48,FORGED_IRON:49,FURNACE:50,IRON_HELMET:51,IRON_CHESTPLATE:52,IRON_LEGGINGS:53,IRON_BOOTS:54},gi={PX:0,NX:1,PY:2,NY:3,PZ:4,NZ:5},Nt={[d.AIR]:{name:"Air",solid:!1,transparent:!0},[d.GRASS]:{name:"Grass",solid:!0,transparent:!1,textures:{top:"grass_top",side:"grass_side",bottom:"dirt"}},[d.DIRT]:{name:"Dirt",solid:!0,transparent:!1,textures:{all:"dirt"}},[d.STONE]:{name:"Stone",solid:!0,transparent:!1,textures:{all:"stone"}},[d.SAND]:{name:"Sand",solid:!0,transparent:!1,textures:{all:"sand"}},[d.LOG]:{name:"Log",solid:!0,transparent:!1,textures:{top:"log_top",side:"log_side",bottom:"log_top"}},[d.LEAVES]:{name:"Leaves",solid:!0,transparent:!0,textures:{all:"leaves"}},[d.WATER]:{name:"Water",solid:!1,transparent:!0,textures:{all:"water"}},[d.BEDROCK]:{name:"Bedrock",solid:!0,transparent:!1,textures:{all:"bedrock"}},[d.SNOW]:{name:"Snow",solid:!0,transparent:!1,textures:{all:"snow"}},[d.CACTUS]:{name:"Cactus",solid:!0,transparent:!1,textures:{top:"cactus_top",side:"cactus_side",bottom:"cactus_top"}},[d.FLOWER_RED]:{name:"Red Flower",solid:!1,transparent:!0,textures:{all:"flower_red"}},[d.FLOWER_YELLOW]:{name:"Yellow Flower",solid:!1,transparent:!0,textures:{all:"flower_yellow"}},[d.VINE]:{name:"Vine",solid:!1,transparent:!0,textures:{all:"vine"}},[d.GRAVEL]:{name:"Gravel",solid:!0,transparent:!1,textures:{all:"gravel"}},[d.MOSS]:{name:"Moss",solid:!0,transparent:!1,textures:{all:"moss"}},[d.CASTLE_BRICK]:{name:"Castle Brick",solid:!0,transparent:!1,textures:{all:"castle_brick"}},[d.APPLE]:{name:"Apple",solid:!1,transparent:!0,textures:{all:"apple"}},[d.WEAPON_BANDIT_BLADE]:{name:"Bandit Blade",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WEAPON_RAIDER_SABER]:{name:"Raider Saber",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WEAPON_SCORP_BOW]:{name:"Scorpion Bow",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WEAPON_JAGUAR_CLAWS]:{name:"Jaguar Claws",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WEAPON_WRAITH_HAMMER]:{name:"Wraith Hammer",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WEAPON_YETI_AXE]:{name:"Yeti Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[d.PLANK]:{name:"Plank",solid:!0,transparent:!1,textures:{all:"plank"}},[d.STICK]:{name:"Stick",solid:!1,transparent:!0,textures:{all:"plank"}},[d.WOOD_SWORD]:{name:"Wood Sword",solid:!1,transparent:!0,textures:{all:"plank"}},[d.WOOD_AXE]:{name:"Wood Axe",solid:!1,transparent:!0,textures:{all:"plank"}},[d.WOOD_PICKAXE]:{name:"Wood Pickaxe",solid:!1,transparent:!0,textures:{all:"plank"}},[d.WOOD_SPADE]:{name:"Wood Spade",solid:!1,transparent:!0,textures:{all:"plank"}},[d.STONE_SWORD]:{name:"Stone Sword",solid:!1,transparent:!0,textures:{all:"stone"}},[d.STONE_AXE]:{name:"Stone Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[d.STONE_PICKAXE]:{name:"Stone Pickaxe",solid:!1,transparent:!0,textures:{all:"stone"}},[d.STONE_SPADE]:{name:"Stone Spade",solid:!1,transparent:!0,textures:{all:"stone"}},[d.BRAMBLE]:{name:"Bramble",solid:!1,transparent:!0,textures:{all:"bramble"}},[d.SKELETON_SPAWNER]:{name:"Skeleton Spawner",solid:!0,transparent:!1,textures:{all:"skeleton_spawner"}},[d.BOW]:{name:"Bow",solid:!1,transparent:!0,textures:{all:"plank"}},[d.ARROW]:{name:"Arrow",solid:!1,transparent:!0,textures:{all:"stone"}},[d.WIZARD_GROUP_SPAWNER]:{name:"Wizard Group Spawner",solid:!0,transparent:!1,textures:{all:"wizard_group_spawner"}},[d.IRON_SWORD]:{name:"Iron Sword",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_ORE]:{name:"Iron Ore",solid:!0,transparent:!1,textures:{all:"iron_ore"}},[d.COAL_ORE]:{name:"Coal Ore",solid:!0,transparent:!1,textures:{all:"coal_ore"}},[d.GOLD_ORE]:{name:"Gold Ore",solid:!0,transparent:!1,textures:{all:"gold_ore"}},[d.IRON_AXE]:{name:"Iron Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_PICKAXE]:{name:"Iron Pickaxe",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_SPADE]:{name:"Iron Spade",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON]:{name:"Iron",solid:!1,transparent:!0,textures:{all:"iron_ore"}},[d.COAL]:{name:"Coal",solid:!1,transparent:!0,textures:{all:"coal_ore"}},[d.GOLD]:{name:"Gold",solid:!1,transparent:!0,textures:{all:"gold_ore"}},[d.FORGED_IRON]:{name:"Forged Iron",solid:!1,transparent:!0,textures:{all:"iron_ore"}},[d.FURNACE]:{name:"Furnace",solid:!0,transparent:!1,textures:{all:"furnace"}},[d.IRON_HELMET]:{name:"Iron Helmet",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_CHESTPLATE]:{name:"Iron Chestplate",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_LEGGINGS]:{name:"Iron Leggings",solid:!1,transparent:!0,textures:{all:"stone"}},[d.IRON_BOOTS]:{name:"Iron Boots",solid:!1,transparent:!0,textures:{all:"stone"}}};function ma(i){return Nt[i]?.solid??!1}function Zg(i){return Nt[i]?.transparent??!0}function Nl(i){return i!==d.AIR&&i!==d.BEDROCK}function jg(i){switch(i){case d.FLOWER_RED:case d.FLOWER_YELLOW:case d.VINE:case d.BRAMBLE:return .12;case d.LEAVES:case d.APPLE:return .2;case d.WATER:return .25;case d.DIRT:case d.GRASS:case d.SAND:case d.SNOW:case d.MOSS:return .5;case d.LOG:case d.PLANK:case d.CACTUS:return .8;case d.STONE:case d.GRAVEL:case d.COAL_ORE:case d.SKELETON_SPAWNER:case d.WIZARD_GROUP_SPAWNER:return 1.35;case d.IRON_ORE:return 1.65;case d.GOLD_ORE:return 1.9;case d.FURNACE:return 1.75;case d.CASTLE_BRICK:return 1.75;default:return .6}}function Jg(i){switch(i){case d.IRON_ORE:return d.IRON;case d.COAL_ORE:return d.COAL;case d.GOLD_ORE:return d.GOLD;default:return i}}function lo(i){switch(i){case d.LOG:case d.PLANK:case d.LEAVES:case d.VINE:case d.BRAMBLE:case d.CACTUS:case d.MOSS:case d.FLOWER_RED:case d.FLOWER_YELLOW:case d.APPLE:return!0;default:return!1}}const J=16,Et=128,ki=4,nu=24,Qg=6,Gs=.6,Wr=1.8,e_=1.62,t_=5.2,n_=2.6,i_=100,s_=8.8,r_=26,a_=-55,o_=280,Vr=600;function se(i,e,t){let n=(i|0)*374761393+(e|0)*668265263+(t|0)*1442695041;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=n^n>>>16|0,(n>>>0)/4294967295}function jn(i,e,t,n){let s=(i|0)*374761393+(e|0)*668265263+(t|0)*2246822519+(n|0)*1442695041;return s=s^s>>>13|0,s=Math.imul(s,1274126177),s=s^s>>>16|0,(s>>>0)/4294967295}function Zs(i){return i*i*(3-2*i)}function Un(i,e,t){return i+(e-i)*t}function Ze(i,e){return Math.floor(i/e)}function Xr(i,e){return(i%e+e)%e}const Ni=4,l_=[{face:gi.PX,normal:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],n:[1,0,0]},{face:gi.NX,normal:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],n:[-1,0,0]},{face:gi.PY,normal:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],n:[0,1,0]},{face:gi.NY,normal:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],n:[0,-1,0]},{face:gi.PZ,normal:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],n:[0,0,1]},{face:gi.NZ,normal:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],n:[0,0,-1]}];function c_(i,e){const t=Nt[i],n=Nt[e];return t.transparent?e===0?!0:n.transparent?e!==i:!1:e===0||n.transparent}function iu(){return{positions:[],normals:[],uvs:[],colors:[],indices:[],count:0}}function u_(i){return!(i===d.AIR||i===d.WATER||i===d.VINE)}function h_(i,e,t){const n=Ni+1,s=J+n*2,r=new Int16Array(s*s);for(let a=-n;a<J+n;a++)for(let o=-n;o<J+n;o++){const l=e+o,c=t+a;let u=-1;for(let h=Et-1;h>=0;h--){const f=i.getBlock(l,h,c);if(u_(f)){u=h;break}}r[(a+n)*s+(o+n)]=u}return{top:r,stride:s,margin:n}}function f_(i){return i.normal[1]>0?1:i.normal[1]<0?.62:i.normal[0]!==0?.86:.9}function d_(i,e,t,n,s){const r=i+(n.normal[0]>0?1:n.normal[0]<0?-1:0),a=t+(n.normal[2]>0?1:n.normal[2]<0?-1:0),o=s.top[(a+s.margin)*s.stride+(r+s.margin)],l=e+(n.normal[1]>0?1:0),c=Math.max(0,o-l);let u=Math.exp(-c*.1);u=Math.max(.05,Math.min(1,u));let h=0,f=0;for(let x=-Ni;x<=Ni;x++)for(let g=-Ni;g<=Ni;g++){const p=g*g+x*x;if(p>Ni*Ni)continue;const T=1/(1+p*.38),b=s.top[(a+x+s.margin)*s.stride+(r+g+s.margin)];if(b>l){const E=b-l,P=Math.min(1,E/(Math.sqrt(p)+1.2));h+=P*T}f+=T}const m=f>0?1-h/f:1,_=.34+Math.max(0,Math.min(1,m))*.66;return u*_*f_(n)}function p_(i,e,t,n,s,r,a){const[o,l,c,u]=r,h=[[o,l],[o,u],[c,u],[c,l]];for(let m=0;m<4;m++){const _=s.verts[m];i.positions.push(e+_[0],t+_[1],n+_[2]),i.normals.push(s.n[0],s.n[1],s.n[2]),i.uvs.push(h[m][0],h[m][1]),i.colors.push(a,a,a)}const f=i.count;i.indices.push(f,f+1,f+2,f,f+2,f+3),i.count+=4}function su(i){if(i.indices.length===0)return null;const e=new nn;return e.setAttribute("position",new xt(i.positions,3)),e.setAttribute("normal",new xt(i.normals,3)),e.setAttribute("uv",new xt(i.uvs,2)),e.setAttribute("color",new xt(i.colors,3)),e.setIndex(i.indices),e.computeBoundingSphere(),e}function m_(i,e,t,n){const s=iu(),r=iu(),a=e*J,o=t*J,l=h_(i,a,o);for(let c=0;c<J;c++)for(let u=0;u<J;u++){const h=a+c,f=o+u;for(let m=0;m<Et;m++){const _=i.getBlock(h,m,f);if(_===0)continue;const x=Nt[_].transparent?r:s;for(const g of l_){const p=h+g.normal[0],T=m+g.normal[1],b=f+g.normal[2],E=i.getBlock(p,T,b);if(!c_(_,E))continue;const P=d_(c,m,u,g,l);p_(x,h,m,f,g,n(_,g.face),P)}}}return{opaque:su(s),transparent:su(r)}}function Qu(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=se(n,s,t),l=se(n+1,s,t),c=se(n,s+1,t),u=se(n+1,s+1,t),h=Zs(r),f=Zs(a),m=Un(o,l,h),_=Un(c,u,h);return Un(m,_,f)}function Lt(i,e,t,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=Qu(i*a,e*a,t+u*7919)*o,c+=o,o*=r,a*=s;return l/c}function eh(i,e,t,n){const s=Math.floor(i),r=Math.floor(e),a=Math.floor(t),o=i-s,l=e-r,c=t-a,u=jn(s,r,a,n),h=jn(s+1,r,a,n),f=jn(s,r+1,a,n),m=jn(s+1,r+1,a,n),_=jn(s,r,a+1,n),x=jn(s+1,r,a+1,n),g=jn(s,r+1,a+1,n),p=jn(s+1,r+1,a+1,n),T=Zs(o),b=Zs(l),E=Zs(c),P=Un(u,h,T),I=Un(f,m,T),C=Un(_,x,T),D=Un(g,p,T),y=Un(P,I,b),S=Un(C,D,b);return Un(y,S,E)}function co(i,e,t,n,s=4,r=2,a=.5){let o=1,l=1,c=0,u=0;for(let h=0;h<s;h++)c+=eh(i*o,e*o,t*o,n+h*7919)*l,u+=l,l*=a,o*=r;return c/u}const Ue={DESERT:0,FOREST:1,JUNGLE:2,MOUNTAIN:3,PLAINS:4,TUNDRA:5},g_={[Ue.DESERT]:"Desert",[Ue.FOREST]:"Forest",[Ue.JUNGLE]:"Jungle",[Ue.MOUNTAIN]:"Mountain",[Ue.PLAINS]:"Plains",[Ue.TUNDRA]:"Tundra"},aa={[Ue.DESERT]:{temp:.92,moisture:.14,surface:d.SAND,subsurface:d.SAND,height:(i,e,t)=>{const n=Lt(i*.0044,e*.0044,t+101,3,2,.5),s=Lt(i*.017,e*.017,t+102,4,2,.52);return 19+n*7+s*8}},[Ue.FOREST]:{temp:.56,moisture:.62,surface:d.GRASS,subsurface:d.DIRT,height:(i,e,t)=>{const n=Lt(i*.007,e*.007,t+111,4,2,.52),s=Lt(i*.022,e*.022,t+112,3,2,.5);return 28+n*13+s*5}},[Ue.JUNGLE]:{temp:.82,moisture:.9,surface:d.GRASS,subsurface:d.DIRT,height:(i,e,t)=>{const n=Lt(i*.0062,e*.0062,t+121,4,2,.54),s=Lt(i*.014,e*.014,t+122,4,2,.5);return 26+n*10+s*8}},[Ue.MOUNTAIN]:{temp:.31,moisture:.33,surface:d.STONE,subsurface:d.STONE,height:(i,e,t)=>{const n=Lt(i*.0042,e*.0042,t+131,5,2,.55),s=Lt(i*.0026,e*.0026,t+132,4,2,.5),r=Lt(i*.016,e*.016,t+133,3,2,.5);return 34+s*s*70+n*24+r*6}},[Ue.PLAINS]:{temp:.6,moisture:.46,surface:d.GRASS,subsurface:d.DIRT,height:(i,e,t)=>{const n=Lt(i*.0052,e*.0052,t+141,3,2,.5),s=Lt(i*.019,e*.019,t+142,3,2,.5);return 24+n*6+s*3}},[Ue.TUNDRA]:{temp:.17,moisture:.56,surface:d.SNOW,subsurface:d.DIRT,height:(i,e,t)=>{const n=Lt(i*.0047,e*.0047,t+151,4,2,.52),s=Lt(i*.013,e*.013,t+152,3,2,.5);return 30+n*11+s*4}}},__=Object.values(Ue);function ru(i){return i*i}function th(i,e,t){const n=Lt(e*.0017,t*.0017,i.seed+501,4,2,.5),s=Lt(e*.0018,t*.0018,i.seed+601,4,2,.5);return{temperature:n,moisture:s}}function nh(i,e,t){const n=th(i,e,t);let s=0,r=Ue.FOREST,a=-1;const o=[];for(const l of __){const c=aa[l],u=ru(n.temperature-c.temp)+ru(n.moisture-c.moisture),h=Math.exp(-u*12.5);o.push([l,h]),s+=h,h>a&&(a=h,r=l)}return{dominant:r,weights:o,total:s}}function x_(i,e,t){const n=nh(i,e,t);let s=0;for(const[c,u]of n.weights){const h=u/n.total;s+=aa[c].height(e,t,i.seed)*h}const r=Math.max(3,Math.min(Et-2,Math.floor(s))),a=n.dominant;let o=aa[a].surface;const l=aa[a].subsurface;return a===Ue.MOUNTAIN&&r>80&&(o=d.SNOW),{height:r,dominantBiome:a,surface:o,subsurface:l}}const xs={ravineChance:.24,castleSpawnChance:.045,hostileSiteChance:.56,questgiverChance:.07,nightSkeletonChunkChance:.045,wizardGroupChance:.018},uo={iron:{minY:6,maxY:72,thresholdExposed:.79,thresholdHidden:.965,clusterScale:.16},coal:{minY:8,maxY:88,thresholdExposed:.855,thresholdHidden:.978,clusterScale:.14},gold:{minY:4,maxY:34,thresholdExposed:.93,thresholdHidden:.992,clusterScale:.18}},v_={[Ue.FOREST]:{tree:{minHash:.981,minCluster:.42},appleTree:{minHash:.973,maxHash:.981,minCluster:.46},flowerRed:{minHash:.93,maxHash:.948},flowerYellow:{minHash:.948,maxHash:.965},bramble:{minHash:.9715,maxHash:.973,minCluster:.68}},[Ue.JUNGLE]:{tree:{minHash:.972,minCluster:.34},moss:{minHash:.88,maxHash:.94},flowerYellow:{minHash:.942,maxHash:.957},bramble:{minHash:.966,maxHash:.9672,minCluster:.64}},[Ue.DESERT]:{cactus:{minHash:.972,minCluster:.3},gravel:{minHash:.93,maxHash:.945}},[Ue.MOUNTAIN]:{gravel:{minHash:.89,maxHash:.93,minY:68},spire:{minHash:.988,minCluster:.5,minY:70}},[Ue.PLAINS]:{flowerRed:{minHash:.86,maxHash:.915},flowerYellow:{minHash:.915,maxHash:.965},tree:{minHash:.992,minCluster:.45},bramble:{minHash:.971,maxHash:.9722,minCluster:.72}},[Ue.TUNDRA]:{gravel:{minHash:.94,maxHash:.97},tree:{minHash:.991,minCluster:.5}}};function Tt(i,e,t=1,n=0){return!(!i||i.minHash!==void 0&&!(e>i.minHash)||i.maxHash!==void 0&&!(e<i.maxHash)||i.minCluster!==void 0&&!(t>i.minCluster)||i.minY!==void 0&&!(n>i.minY))}const S_=14,vi=J*S_;class E_{constructor(e){this.state=e|0,this.state===0&&(this.state=1)}next(){return this.state=Math.imul(this.state,1664525)+1013904223|0,(this.state>>>0)/4294967295}range(e,t){return e+Math.floor(this.next()*(t-e))}}function M_(i,e,t){const n=`${e},${t}`;if(i.castleCache.has(n))return i.castleCache.get(n);if(se(e,t,i.seed+42031)>xs.castleSpawnChance)return i.castleCache.set(n,null),null;const r=e*73856093^t*19349663^i.seed*83492791^2654435769|0,a=new E_(r),o=34,l=e*vi+a.range(o,vi-o),c=t*vi+a.range(o,vi-o),u=Math.min(Et-24,1+Math.max(i.getSurfaceYAt(l,c),i.getSurfaceYAt(l+8,c),i.getSurfaceYAt(l,c+8),i.getSurfaceYAt(l+8,c+8))),h=a.range(13,18),f=a.range(13,18),m={x:l-Math.floor(h*.5),z:c-Math.floor(f*.5),w:h,d:f,h:a.range(7,11),kind:"keep"},_=[m],x=[],g=a.range(8,15);for(let y=0;y<g;y++){const S=_[a.range(0,_.length)],w=a.range(0,4),z=a.next()<.55,B=S.x+2+a.range(0,Math.max(1,S.w-4)),X=S.z+2+a.range(0,Math.max(1,S.d-4));let Y,V;if(z){const Ce=a.range(6,13);w===0||w===2?(Y=3,V=Ce):(Y=Ce,V=3)}else Y=a.range(7,13),V=a.range(7,13);let Q=0,G=0;w===0?(Q=B-Math.floor(Y*.5),G=S.z-V):w===1?(Q=S.x+S.w,G=X-Math.floor(V*.5)):w===2?(Q=B-Math.floor(Y*.5),G=S.z+S.d):(Q=S.x-Y,G=X-Math.floor(V*.5));let ae=!1;for(const Ce of _)if(Q<Ce.x+Ce.w&&Q+Y>Ce.x&&G<Ce.z+Ce.d&&G+V>Ce.z){ae=!0;break}if(ae)continue;const pe=z?a.range(5,7):a.range(6,10),Me={x:Q,z:G,w:Y,d:V,h:pe,kind:z?"corridor":"room"};_.push(Me),w===0&&x.push({side:w,x:B,z:S.z}),w===1&&x.push({side:w,x:S.x+S.w-1,z:X}),w===2&&x.push({side:w,x:B,z:S.z+S.d-1}),w===3&&x.push({side:w,x:S.x,z:X})}const p=[],T=2,b=a.range(9,14);p.push({x:m.x-T,z:m.z-T,r:T,h:b}),p.push({x:m.x+m.w-1+T,z:m.z-T,r:T,h:b}),p.push({x:m.x-T,z:m.z+m.d-1+T,r:T,h:b}),p.push({x:m.x+m.w-1+T,z:m.z+m.d-1+T,r:T,h:b});let E=1/0,P=-1/0,I=1/0,C=-1/0;for(const y of _)E=Math.min(E,y.x),P=Math.max(P,y.x+y.w-1),I=Math.min(I,y.z),C=Math.max(C,y.z+y.d-1);for(const y of p)E=Math.min(E,y.x-y.r),P=Math.max(P,y.x+y.r),I=Math.min(I,y.z-y.r),C=Math.max(C,y.z+y.r);const D={baseY:u,pieces:_,towers:p,connections:x,minX:E,maxX:P,minZ:I,maxZ:C};return i.castleCache.set(n,D),D}function y_(i,e,t,n,s,r){const a=s,o=s+J-1,l=r,c=r+J-1,u=220,h=Ze(a-u,vi),f=Ze(o+u,vi),m=Ze(l-u,vi),_=Ze(c+u,vi);for(let x=m;x<=_;x++)for(let g=h;g<=f;g++){const p=M_(i,g,x);!p||!(p.minX<=o&&p.maxX>=a&&p.minZ<=c&&p.maxZ>=l)||b_(i,e,t,n,p)}}function b_(i,e,t,n,s){for(const r of s.pieces)A_(i,e,t,n,s.baseY,r);for(const r of s.towers)T_(i,e,t,n,s.baseY,r);for(const r of s.connections)R_(i,e,t,n,s.baseY,r)}function A_(i,e,t,n,s,r){const a=Math.min(Et-3,s+r.h);for(let o=r.z;o<r.z+r.d;o++)for(let l=r.x;l<r.x+r.w;l++){i.setGeneratedBlockIfInChunk(e,t,n,l,s,o,d.CASTLE_BRICK);for(let c=s+1;c<=a;c++)l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1?i.setGeneratedBlockIfInChunk(e,t,n,l,c,o,d.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,c,o);if(r.kind!=="corridor"){const c=a+1;l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1||(l+o&1)===0?i.setGeneratedBlockIfInChunk(e,t,n,l,c,o,d.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,c,o)}}if(r.kind==="room"&&r.w>=9&&r.d>=9){const o=Math.min(Et-4,s+r.h-1),l=[[r.x+2,r.z+2],[r.x+r.w-3,r.z+2],[r.x+2,r.z+r.d-3],[r.x+r.w-3,r.z+r.d-3]];for(const[c,u]of l)for(let h=s+1;h<=o;h++)i.setGeneratedBlockIfInChunk(e,t,n,c,h,u,d.CASTLE_BRICK)}}function T_(i,e,t,n,s,r){const a=Math.min(Et-3,s+r.h);for(let o=r.z-r.r;o<=r.z+r.r;o++)for(let l=r.x-r.r;l<=r.x+r.r;l++){const c=Math.abs(l-r.x),u=Math.abs(o-r.z);if(Math.max(c,u)>r.r)continue;i.setGeneratedBlockIfInChunk(e,t,n,l,s,o,d.CASTLE_BRICK);for(let f=s+1;f<=a;f++)Math.max(c,u)===r.r?i.setGeneratedBlockIfInChunk(e,t,n,l,f,o,d.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,f,o);const h=a+1;((l+o&1)===0||Math.max(c,u)===r.r)&&i.setGeneratedBlockIfInChunk(e,t,n,l,h,o,d.CASTLE_BRICK)}}function R_(i,e,t,n,s,r){for(let a=s+1;a<=s+4;a++)for(let o=-1;o<=1;o++)r.side===0?(i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z-1)):r.side===1?(i.setGeneratedAirIfInChunk(e,t,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(e,t,n,r.x+1,a,r.z+o)):r.side===2?(i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z+1)):(i.setGeneratedAirIfInChunk(e,t,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(e,t,n,r.x-1,a,r.z+o))}const vs=96;function oa(i){return Math.max(0,Math.min(1,i))}function w_(i,e,t,n,s,r){const a=s-t,o=r-n,l=i-t,c=e-n,u=a*a+o*o;if(u<=1e-5){const _=i-t,x=e-n;return{distance:Math.hypot(_,x),t:0}}const h=oa((l*a+c*o)/u),f=t+a*h,m=n+o*h;return{distance:Math.hypot(i-f,e-m),t:h}}function C_(i,e,t){const n=`${e},${t}`;if(i.ravineCache.has(n))return i.ravineCache.get(n);if(se(e,t,i.seed+74111)>xs.ravineChance)return i.ravineCache.set(n,null),null;const r=e*vs+vs*.5,a=t*vs+vs*.5,o=se(e,t,i.seed+74113)*Math.PI*2,c=(70+se(e,t,i.seed+74117)*120)*.5,u=(se(e,t,i.seed+74119)-.5)*30,h=(se(e,t,i.seed+74123)-.5)*30,f=r+u,m=a+h,_={ax:f-Math.cos(o)*c,az:m-Math.sin(o)*c,bx:f+Math.cos(o)*c,bz:m+Math.sin(o)*c,width:3.5+se(e,t,i.seed+74129)*6.5,depth:22+se(e,t,i.seed+74131)*38,slopePow:.45+se(e,t,i.seed+74137)*.25,hasFlatBottom:se(e,t,i.seed+74141)>.22,flatBottomWidth:5+se(e,t,i.seed+74143)*5,flatDepthFactor:.86+se(e,t,i.seed+74147)*.11,topNarrowFactor:.35+se(e,t,i.seed+74153)*.18,bottomExpandFactor:1.18+se(e,t,i.seed+74159)*.22};return i.ravineCache.set(n,_),_}function I_(i,e,t,n,s,r){for(let a=0;a<J;a++)for(let o=0;o<J;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Ze(l,vs),f=Ze(c,vs);let m=Et,_=!1;const x=[];for(let T=-2;T<=2;T++)for(let b=-2;b<=2;b++){const E=C_(i,h+b,f+T);if(!E)continue;const{distance:P,t:I}=w_(l+.5,c+.5,E.ax,E.az,E.bx,E.bz),C=E.width*(.7+.3*Math.sin(Math.PI*I));if(P>C*E.bottomExpandFactor)continue;const D=P/C,y=1-D;let S=E.depth*Math.pow(y,E.slopePow);if(E.hasFlatBottom){const z=oa(E.flatBottomWidth*.5/Math.max(.001,C)),B=E.depth*E.flatDepthFactor;if(D<=z)S=B;else{const X=oa((D-z)/(1-z)),Y=B*Math.pow(1-X,E.slopePow);S=Math.max(S,Y)}}if(S<=.01)continue;_=!0;const w=u-S;w<m&&(m=w),x.push({distance:P,widthAt:C,floor:w,topNarrowFactor:E.topNarrowFactor,bottomExpandFactor:E.bottomExpandFactor})}if(!_)continue;const g=Math.max(4,Math.floor(m)),p=Math.min(Et-2,u+2);for(let T=g;T<=p;T++){let b=!1;for(let E=0;E<x.length;E++){const P=x[E];if(T<P.floor)continue;const I=Math.max(1,u-P.floor),C=oa((u-T)/I),D=P.topNarrowFactor+(P.bottomExpandFactor-P.topNarrowFactor)*C;if(P.distance<=P.widthAt*D){b=!0;break}}b&&i.setGeneratedAirIfInChunk(e,t,n,l,T,c)}}}function P_(i,e,t,n,s,r){for(let a=0;a<J;a++)for(let o=0;o<J;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Lt(l*.008,c*.008,i.seed+9501,3,2,.5),f=Math.min(u-2,88);if(f<=8)continue;for(let x=6;x<=f;x++){const g=co(l*.045,x*.06,c*.045,i.seed+9601,3,2,.5),p=co(l*.031+33,x*.045,c*.031+91,i.seed+9609,2,2,.5),T=.71-Math.max(0,h-.52)*.26;(g>T||h>.6&&g>T-.08&&p>.72)&&i.setGeneratedAirIfInChunk(e,t,n,l,x,c)}const m=Lt(l*.011,c*.011,i.seed+9701,3,2,.5),_=se(l,c,i.seed+9702);if(m>.66&&_>.93&&u>14){const x=3+(_*6|0),g=Math.max(5,u-x);for(let T=u;T>=g;T--)i.setGeneratedAirIfInChunk(e,t,n,l,T,c);if(m>.72||h>.58){const T=Math.max(6,u-36);for(let b=g-1;b>=T;b--)co(l*.06,b*.05,c*.06,i.seed+9721,2,2,.5)>.46&&(i.setGeneratedAirIfInChunk(e,t,n,l,b,c),se(l+b,c-b,i.seed+9731)>.72&&i.setGeneratedAirIfInChunk(e,t,n,l+1,b,c))}}}}function L_(i,e,t,n,s,r){I_(i,e,t,n,s,r),P_(i,e,t,n,s,r);for(let a=0;a<J;a++)for(let o=0;o<J;o++)e[(0*J+o)*J+a]!==d.BEDROCK&&(e[(0*J+o)*J+a]=d.BEDROCK)}function D_(i,e,t,n,s,r){for(let o=s-6;o<s+J+6;o++)for(let l=r-6;l<r+J+6;l++){const c=i.getColumnData(o,l),u=c.height,h=i.getGeneratedBlockFromChunkData(e,t,n,o,u+1,l),f=O_(i,e,t,n,o,u,l);if(i.isSettlementReserved(o,l))continue;const m=se(o,l,i.seed+9001),_=Qu(o*.03,l*.03,i.seed+9002),x=v_[c.dominantBiome]??null;if(c.dominantBiome===Ue.FOREST&&(f&&Tt(x.tree,m,_,u)&&c.surface===d.GRASS&&Yr(i,e,t,n,o,u+1,l,4+(m*4|0),2,!1),f&&Tt(x.appleTree,m,_,u)&&c.surface===d.GRASS&&N_(i,e,t,n,o,u+1,l,5+(m*3|0)),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.flowerRed,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.FLOWER_RED),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.flowerYellow,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.FLOWER_YELLOW),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.bramble,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.BRAMBLE)),c.dominantBiome===Ue.JUNGLE&&(f&&Tt(x.tree,m,_,u)&&c.surface===d.GRASS&&Yr(i,e,t,n,o,u+1,l,6+(m*5|0),3,!0),f&&h===d.AIR&&Tt(x.moss,m,_,u)&&c.surface===d.GRASS&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.MOSS),f&&h===d.AIR&&Tt(x.flowerYellow,m,_,u)&&c.surface===d.GRASS&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.FLOWER_YELLOW),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.bramble,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.BRAMBLE)),c.dominantBiome===Ue.DESERT){if(Tt(x.cactus,m,_,u)&&c.surface===d.SAND){const g=2+(m*5|0);for(let p=0;p<g;p++)i.setGeneratedBlockIfInChunk(e,t,n,o,u+1+p,l,d.CACTUS)}h===d.AIR&&Tt(x.gravel,m,_,u)&&c.surface===d.SAND&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.GRAVEL)}if(c.dominantBiome===Ue.MOUNTAIN&&(h===d.AIR&&Tt(x.gravel,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.GRAVEL),Tt(x.spire,m,_,u))){const g=2+(m*4|0);for(let p=0;p<g;p++)i.setGeneratedBlockIfInChunk(e,t,n,o,u+1+p,l,u+p>84?d.SNOW:d.STONE)}c.dominantBiome===Ue.PLAINS&&(f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.flowerRed,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.FLOWER_RED),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.flowerYellow,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.FLOWER_YELLOW),f&&Tt(x.tree,m,_,u)&&c.surface===d.GRASS&&Yr(i,e,t,n,o,u+1,l,4+(m*3|0),2,!1),f&&h===d.AIR&&c.surface===d.GRASS&&Tt(x.bramble,m,_,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.BRAMBLE)),c.dominantBiome===Ue.TUNDRA&&(h===d.AIR&&Tt(x.gravel,m,_,u)&&c.surface===d.SNOW&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,d.GRAVEL),Tt(x.tree,m,_,u)&&c.surface===d.SNOW&&Yr(i,e,t,n,o,u+1,l,4+(m*3|0),1,!1))}}function O_(i,e,t,n,s,r,a){const o=i.getGeneratedBlockFromChunkData(e,t,n,s,r,a);if(o===d.AIR||o===d.WATER)return!1;const l=s-t*J,c=a-n*J;if(l<0||c<0||l>=J||c>=J)return!1;for(let u=1;u<=5;u++){const h=i.getGeneratedBlockFromChunkData(e,t,n,s,r-u,a);if(h===d.AIR||h===d.WATER)return!1}return!0}function Yr(i,e,t,n,s,r,a,o,l,c){for(let h=0;h<o;h++)i.setGeneratedBlockIfInChunk(e,t,n,s,r+h,a,d.LOG);const u=r+o;for(let h=-l;h<=l;h++){const f=Math.max(1,l-Math.abs(h)+1);for(let m=-f;m<=f;m++)for(let _=-f;_<=f;_++){if(Math.abs(m)+Math.abs(_)>f+1)continue;const x=s+m,g=u+h,p=a+_;if(i.setGeneratedLeafIfAir(e,t,n,x,g,p),!c||!(Math.abs(m)===f||Math.abs(_)===f))continue;const b=se(x,p,i.seed+11811+h*17);if(b<.62)continue;const E=2+(b*4|0);for(let P=1;P<=E;P++)i.setGeneratedVineIfAir(e,t,n,x,g-P,p)}}}function N_(i,e,t,n,s,r,a,o){for(let u=0;u<o;u++)i.setGeneratedBlockIfInChunk(e,t,n,s,r+u,a,d.LOG);const l=r+o,c=2;for(let u=-c;u<=c;u++){const h=Math.max(1,c-Math.abs(u)+1);for(let f=-h;f<=h;f++)for(let m=-h;m<=h;m++){if(Math.abs(f)+Math.abs(m)>h+1)continue;const _=s+f,x=l+u,g=a+m;se(_*19+x,g*23-x,i.seed+29011)>.86&&Math.abs(f)+Math.abs(m)>=2?i.setGeneratedBlockIfInChunk(e,t,n,_,x,g,d.APPLE):i.setGeneratedLeafIfAir(e,t,n,_,x,g)}}}function Ws(i,e){return`${i},${e}`}function wn(i,e,t){return e*J*J+t*J+i}const U_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function F_(i,e,t,n,s,r){for(let a=1;a<J-1;a++)for(let o=1;o<J-1;o++){const l=s+a,c=r+o;for(let u=1;u<Et-1;u++){const h=wn(a,u,o);if(e[h]!==d.STONE)continue;const f=B_(e,a,u,o),m=k_(i.seed,l,u,c,f);m!==d.AIR&&(e[h]=m)}}}function B_(i,e,t,n){let s=0;for(const[r,a,o]of U_)i[wn(e+r,t+a,n+o)]===d.AIR&&s++;return s}function k_(i,e,t,n,s){return ho(i,e,t,n,s,uo.gold,17031)?d.GOLD_ORE:ho(i,e,t,n,s,uo.coal,17017)?d.COAL_ORE:ho(i,e,t,n,s,uo.iron,17011)?d.IRON_ORE:d.AIR}function ho(i,e,t,n,s,r,a){if(t<r.minY||t>r.maxY)return!1;const o=eh(e*r.clusterScale,t*r.clusterScale,n*r.clusterScale,i+a),l=jn(e,t,n,i+a*3),c=o*.58+l*.42,u=s>0?Math.max(0,r.thresholdExposed-Math.min(.05,s*.015)):r.thresholdHidden;return c>u}const Vt=1024,Sn=320;function z_(i){return i.reduce((e,t)=>e+t,0)/Math.max(1,i.length)}function ih(i,e,t,n,s){const r=[i.getSurfaceYAt(e,t),i.getSurfaceYAt(e+n-1,t),i.getSurfaceYAt(e,t+s-1),i.getSurfaceYAt(e+n-1,t+s-1),i.getSurfaceYAt(e+(n>>1),t+(s>>1))];return{min:Math.min(...r),max:Math.max(...r),avg:z_(r)}}function H_(i,e,t=0){return i.x-t<e.x+e.w&&i.x+i.w+t>e.x&&i.z-t<e.z+e.d&&i.z+i.d+t>e.z}function G_(i,e,t,n,s,r,a=!1){for(let o=0;o<200;o++){const l=i(),c=(a?.08:.3)*s+i()*s*(a?.72:.85),u=Math.floor(t+Math.cos(l*Math.PI*2)*c),h=Math.floor(n+Math.sin(l*Math.PI*2)*c),f=5+(i()*5|0),m=5+(i()*5|0),_=u-(f>>1),x=h-(m>>1),g=ih(e,_,x,f,m);if(g.max-g.min>(a?3:2)||g.avg<20)continue;const p={x:_,z:x,w:f,d:m};if(!r.some(T=>H_(p,T,a?1:3)))return{kind:"house",x:_,z:x,w:f,d:m,y:Math.round(g.avg)+1,h:4+(i()*3|0),roofH:2+(i()*2|0),doorSide:i()*4|0,roofStyle:i()>.5?"gableX":"gableZ"}}return null}function W_(i){let e=i|0;return e||(e=1),()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967295)}function V_(i,e,t){const r=e-13,a=t-11,o=ih(i,r,a,26,22);return{kind:"fortress",x:r,z:a,w:26,d:22,y:Math.round(o.avg)+1,h:9,towerH:13}}function X_(i,e=null){const t=i.filter(a=>a.kind==="house");if(t.length===0)return[];const n=[],s=t.map(a=>({x:a.x+(a.w>>1),z:a.z+(a.d>>1)})),r=e?[{x:e.x+(e.w>>1),z:e.z}]:[s[0]];for(const a of s){let o=r[0],l=1/0;for(const c of r){const u=c.x-a.x,h=c.z-a.z,f=u*u+h*h;f<l&&(l=f,o=c)}n.push({x0:a.x,z0:a.z,x1:o.x,z1:o.z}),r.push(a)}return n}function Ul(i,e,t){const n=`${e},${t}`;if(i.settlementCache.has(n))return i.settlementCache.get(n);const s=e===0&&t===0,r=se(e,t,i.seed+55101);if(!s&&r>.88)return i.settlementCache.set(n,null),null;const a=W_(e*92837111^t*689287499^i.seed*3343^85923301|0),o=s||a()>.84?"town":"village",l=s?96:e*Vt+140+Math.floor(a()*(Vt-280)),c=s?96:t*Vt+140+Math.floor(a()*(Vt-280)),u=[],h=[],f=o==="town"?180:82,m=o==="town"?120+(a()*81|0):6+(a()*15|0);let _=null;o==="town"&&(_=V_(i,l,c),u.push(_));for(let w=0;w<m;w++){const z=G_(a,i,l,c,f,u,o==="town");z&&u.push(z)}let x=0,g=0;for(const w of u){if(w.kind!=="house")continue;x%2===0&&h.push({x:w.x+(w.w>>1)+.5,z:w.z+w.d+1.5,y:w.y,key:"villager",name:`Villager ${x+1}`}),x++,g%(o==="town"?4:8)===0&&h.push({x:w.x+1.5,z:w.z-1.5,y:w.y,key:"guard",name:`Guard ${g+1}`}),g++}const p=o==="town"?X_(u,_):[],T=p.length>0?Math.min(...p.map(w=>Math.min(w.x0,w.x1))):1/0,b=p.length>0?Math.max(...p.map(w=>Math.max(w.x0,w.x1))):-1/0,E=p.length>0?Math.min(...p.map(w=>Math.min(w.z0,w.z1))):1/0,P=p.length>0?Math.max(...p.map(w=>Math.max(w.z0,w.z1))):-1/0,I=Math.min(...u.map(w=>w.x),T)-6,C=Math.max(...u.map(w=>w.x+w.w),b)+6,D=Math.min(...u.map(w=>w.z),E)-6,y=Math.max(...u.map(w=>w.z+w.d),P)+6,S={key:n,type:o,centerX:l,centerZ:c,structures:u,roads:p,npcs:h,minX:I,maxX:C,minZ:D,maxZ:y};return i.settlementCache.set(n,S),S}function Cn(i,e,t,n,s,r,a,o){i.setGeneratedBlockIfInChunk(e,t,n,s,r,a,o)}function Kt(i,e,t,n,s,r,a){i.setGeneratedAirIfInChunk(e,t,n,s,r,a)}function Y_(i,e,t,n,s){const r=s.y;for(let u=s.z;u<s.z+s.d;u++)for(let h=s.x;h<s.x+s.w;h++){for(let f=r-2;f<r;f++)Cn(i,e,t,n,h,f,u,d.DIRT);Cn(i,e,t,n,h,r,u,d.PLANK);for(let f=r+1;f<=r+s.h;f++){if(!(h===s.x||h===s.x+s.w-1||u===s.z||u===s.z+s.d-1)){Kt(i,e,t,n,h,f,u);continue}const _=(h===s.x||h===s.x+s.w-1)&&(u===s.z||u===s.z+s.d-1);Cn(i,e,t,n,h,f,u,_?d.LOG:d.PLANK)}}const a=s.x+(s.w>>1),o=s.z+(s.d>>1);for(let u=r+1;u<=r+3;u++)s.doorSide===0&&Kt(i,e,t,n,a,u,s.z),s.doorSide===1&&Kt(i,e,t,n,s.x+s.w-1,u,o),s.doorSide===2&&Kt(i,e,t,n,a,u,s.z+s.d-1),s.doorSide===3&&Kt(i,e,t,n,s.x,u,o);const l=r+2;for(let u=s.x+1;u<s.x+s.w-1;u+=3)Kt(i,e,t,n,u,l,s.z),Kt(i,e,t,n,u,l,s.z+s.d-1);for(let u=s.z+1;u<s.z+s.d-1;u+=3)Kt(i,e,t,n,s.x,l,u),Kt(i,e,t,n,s.x+s.w-1,l,u);const c=r+s.h+1;if(s.roofStyle==="gableX")for(let u=0;u<s.w;u++){const h=Math.min(u,s.w-1-u,s.roofH);for(let f=s.z-1;f<=s.z+s.d;f++)Cn(i,e,t,n,s.x+u,c+h,f,d.LOG)}else for(let u=0;u<s.d;u++){const h=Math.min(u,s.d-1-u,s.roofH);for(let f=s.x-1;f<=s.x+s.w;f++)Cn(i,e,t,n,f,c+h,s.z+u,d.LOG)}}function q_(i,e,t,n,s){const r=s.y;for(let l=s.z;l<s.z+s.d;l++)for(let c=s.x;c<s.x+s.w;c++){for(let u=r-3;u<=r;u++)Cn(i,e,t,n,c,u,l,d.CASTLE_BRICK);for(let u=r+1;u<=r+s.h;u++)c===s.x||c===s.x+s.w-1||l===s.z||l===s.z+s.d-1?Cn(i,e,t,n,c,u,l,d.CASTLE_BRICK):Kt(i,e,t,n,c,u,l)}const a=s.x+(s.w>>1),o=s.z+(s.d>>1);for(let l=r+1;l<=r+4;l++)Kt(i,e,t,n,a,l,s.z),Kt(i,e,t,n,a+1,l,s.z);for(let l=s.x+4;l<s.x+s.w-4;l+=6){for(let c=r+1;c<=r+s.h-1;c++)l===a||l===a+1||Cn(i,e,t,n,l,c,o,d.CASTLE_BRICK);for(let c=r+2;c<=r+4;c++)Kt(i,e,t,n,l,c,o)}for(let l=s.z+4;l<s.z+s.d-4;l+=6){for(let c=r+1;c<=r+s.h-1;c++)l!==o&&Cn(i,e,t,n,a,c,l,d.CASTLE_BRICK);for(let c=r+2;c<=r+4;c++)Kt(i,e,t,n,a,c,l)}for(const[l,c]of[[s.x-1,s.z-1],[s.x+s.w-2,s.z-1],[s.x-1,s.z+s.d-2],[s.x+s.w-2,s.z+s.d-2]])for(let u=r+1;u<=r+s.towerH;u++)for(let h=0;h<3;h++)for(let f=0;f<3;f++)Cn(i,e,t,n,l+h,u,c+f,d.CASTLE_BRICK)}function K_(i,e,t,n,s){let r=s.x0,a=s.z0;const o=Math.sign(s.x1-s.x0),l=Math.sign(s.z1-s.z0);for(;r!==s.x1||a!==s.z1;){const c=i.getSurfaceYAt(r,a)+1;for(let u=-1;u<=1;u++)for(let h=-1;h<=1;h++){for(let f=c-1;f<=c;f++)Cn(i,e,t,n,r+u,f,a+h,d.GRAVEL);Kt(i,e,t,n,r+u,c+1,a+h)}r!==s.x1?r+=o:a!==s.z1&&(a+=l)}}function $_(i,e,t,n,s,r){const a=s,o=s+J-1,l=r,c=r+J-1,u=Ze(a-Sn,Vt),h=Ze(o+Sn,Vt),f=Ze(l-Sn,Vt),m=Ze(c+Sn,Vt);for(let _=f;_<=m;_++)for(let x=u;x<=h;x++){const g=Ul(i,x,_);if(g&&!(g.maxX<a||g.minX>o||g.maxZ<l||g.minZ>c)){if(g.type==="town")for(const p of g.roads)K_(i,e,t,n,p);for(const p of g.structures)p.x+p.w<a||p.x>o||p.z+p.d<l||p.z>c||(p.kind==="house"?Y_(i,e,t,n,p):p.kind==="fortress"&&q_(i,e,t,n,p))}}}function Z_(i,e,t){const n=Ze(e-Sn,Vt),s=Ze(e+Sn,Vt),r=Ze(t-Sn,Vt),a=Ze(t+Sn,Vt);for(let o=r;o<=a;o++)for(let l=n;l<=s;l++){const c=Ul(i,l,o);if(c&&!(e<c.minX||e>c.maxX||t<c.minZ||t>c.maxZ)){for(const u of c.structures)if(e>=u.x-1&&e<=u.x+u.w&&t>=u.z-1&&t<=u.z+u.d)return!0}}return!1}function j_(i,e,t){const n=e*J,s=n+J,r=t*J,a=r+J,o=Ze(n-Sn,Vt),l=Ze(s+Sn,Vt),c=Ze(r-Sn,Vt),u=Ze(a+Sn,Vt),h=[];for(let f=c;f<=u;f++)for(let m=o;m<=l;m++){const _=Ul(i,m,f);if(_)for(const x of _.npcs)x.x<n||x.x>=s||x.z<r||x.z>=a||h.push({...x,settlementType:_.type,settlementKey:_.key})}return h}class J_{constructor(e,t,n=133742){this.scene=e,this.atlas=t,this.seed=n|0,this.generated=new Map,this.modified=new Map,this.loaded=new Map,this.buildQueue=[],this.castleCache=new Map,this.ravineCache=new Map,this.settlementCache=new Map,this.materialOpaque=null,this.materialTransparent=null}setupMaterials(e,t){this.materialOpaque=e,this.materialTransparent=t}getClimate(e,t){return th(this,e,t)}getBiomeBlend(e,t){return nh(this,e,t)}getColumnData(e,t){return x_(this,e,t)}getBiomeAt(e,t){return this.getColumnData(e,t).dominantBiome}getSurfaceYAt(e,t){return this.getColumnData(e,t).height}isSettlementReserved(e,t){return Z_(this,e,t)}getSettlementNpcsForChunk(e,t){return j_(this,e,t)}generateChunkData(e,t){const n=Ws(e,t);if(this.generated.has(n))return this.generated.get(n);const s=new Uint8Array(J*Et*J),r=e*J,a=t*J;for(let o=0;o<J;o++)for(let l=0;l<J;l++){const c=r+o,u=a+l,h=this.getColumnData(c,u),f=h.height;for(let m=0;m<=f;m++){let _;m===0?_=d.BEDROCK:m===f?_=h.surface:m>=f-3?_=h.subsurface:_=d.STONE,s[wn(o,m,l)]=_}if(f<nu)for(let m=f+1;m<=nu;m++)s[wn(o,m,l)]=d.WATER}return L_(this,s,e,t,r,a),F_(this,s,e,t,r,a),$_(this,s,e,t,r,a),D_(this,s,e,t,r,a),y_(this,s,e,t,r,a),this.generated.set(n,s),s}getGeneratedBlockFromChunkData(e,t,n,s,r,a){if(r<0)return d.BEDROCK;if(r>=Et)return d.AIR;const o=s-t*J,l=a-n*J;return o<0||l<0||o>=J||l>=J?d.AIR:e[wn(o,r,l)]}setGeneratedBlockIfInChunk(e,t,n,s,r,a,o){if(r<=0||r>=Et)return;const l=s-t*J,c=a-n*J;l<0||c<0||l>=J||c>=J||(e[wn(l,r,c)]=o)}setGeneratedAirIfInChunk(e,t,n,s,r,a){if(r<=0||r>=Et)return;const o=s-t*J,l=a-n*J;o<0||l<0||o>=J||l>=J||(e[wn(o,r,l)]=d.AIR)}setGeneratedLeafIfAir(e,t,n,s,r,a){if(r<=0||r>=Et)return;const o=s-t*J,l=a-n*J;if(o<0||l<0||o>=J||l>=J)return;const c=wn(o,r,l),u=e[c];(u===d.AIR||u===d.WATER||u===d.VINE)&&(e[c]=d.LEAVES)}setGeneratedVineIfAir(e,t,n,s,r,a){if(r<=0||r>=Et)return;const o=s-t*J,l=a-n*J;if(o<0||l<0||o>=J||l>=J)return;const c=wn(o,r,l);e[c]===d.AIR&&(e[c]=d.VINE)}getLocalBlockFromData(e,t,n,s,r){if(s<0)return d.BEDROCK;if(s>=Et)return d.AIR;const a=Ws(e,t),o=wn(n,s,r),l=this.modified.get(a);return l&&l.has(o)?l.get(o):this.generateChunkData(e,t)[o]}getBlock(e,t,n){if(t<0)return d.BEDROCK;if(t>=Et)return d.AIR;const s=Ze(e,J),r=Ze(n,J),a=Xr(e,J),o=Xr(n,J);return this.getLocalBlockFromData(s,r,a,t,o)}setBlock(e,t,n,s){if(t<=0||t>=Et)return!1;const r=Ze(e,J),a=Ze(n,J),o=Xr(e,J),l=Xr(n,J),c=Ws(r,a),u=wn(o,t,l),h=this.generateChunkData(r,a)[u];let f=this.modified.get(c);return f||(f=new Map,this.modified.set(c,f)),s===h?f.delete(u):f.set(u,s),f.size===0&&this.modified.delete(c),this.markChunkDirty(r,a),o===0&&this.markChunkDirty(r-1,a),o===J-1&&this.markChunkDirty(r+1,a),l===0&&this.markChunkDirty(r,a-1),l===J-1&&this.markChunkDirty(r,a+1),!0}markChunkDirty(e,t){const n=Ws(e,t),s=this.loaded.get(n);s&&(s.dirty||(s.dirty=!0,this.buildQueue.push(n)))}loadChunksAround(e,t){const n=Ze(Math.floor(e),J),s=Ze(Math.floor(t),J),r=new Set;for(let o=-ki;o<=ki;o++)for(let l=-ki;l<=ki;l++){const c=n+l,u=s+o,h=Ws(c,u);r.add(h),this.loaded.has(h)||(this.loaded.set(h,{cx:c,cz:u,key:h,dirty:!0,opaqueMesh:null,transparentMesh:null}),this.buildQueue.push(h))}const a=ki+2;for(const[o,l]of this.loaded.entries()){const c=Math.abs(l.cx-n),u=Math.abs(l.cz-s);!r.has(o)&&(c>a||u>a)&&(this.disposeChunk(l),this.loaded.delete(o))}}disposeChunk(e){e.opaqueMesh&&(e.opaqueMesh.geometry.dispose(),this.scene.remove(e.opaqueMesh),e.opaqueMesh=null),e.transparentMesh&&(e.transparentMesh.geometry.dispose(),this.scene.remove(e.transparentMesh),e.transparentMesh=null)}rebuildOneChunk(){for(;this.buildQueue.length>0;){const e=this.buildQueue.shift(),t=this.loaded.get(e);if(!t||!t.dirty)continue;const n=m_(this,t.cx,t.cz,this.atlas.getFaceUVs);this.disposeChunk(t),n.opaque&&(t.opaqueMesh=new ft(n.opaque,this.materialOpaque),t.opaqueMesh.frustumCulled=!0,t.opaqueMesh.castShadow=!0,t.opaqueMesh.receiveShadow=!0,this.scene.add(t.opaqueMesh)),n.transparent&&(t.transparentMesh=new ft(n.transparent,this.materialTransparent),t.transparentMesh.frustumCulled=!0,t.transparentMesh.castShadow=!1,t.transparentMesh.receiveShadow=!0,this.scene.add(t.transparentMesh)),t.dirty=!1;return}}isBlockTransparent(e){return Zg(e)}}const cn={NEUTRAL:"neutral",HUMAN:"human",OREUM:"oreum"},Q_=new Set([`${cn.HUMAN}:${cn.OREUM}`,`${cn.OREUM}:${cn.HUMAN}`]);function au(i,e){return!i||!e||i===e?!1:Q_.has(`${i}:${e}`)}const ut={HELMET:"helmet",CHEST:"chest",LEGS:"legs",BOOTS:"boots"},Cs=[ut.HELMET,ut.CHEST,ut.LEGS,ut.BOOTS];function Fl(){return{[ut.HELMET]:d.AIR,[ut.CHEST]:d.AIR,[ut.LEGS]:d.AIR,[ut.BOOTS]:d.AIR}}function ex(i){switch(i){case d.IRON_HELMET:return ut.HELMET;case d.IRON_CHESTPLATE:return ut.CHEST;case d.IRON_LEGGINGS:return ut.LEGS;case d.IRON_BOOTS:return ut.BOOTS;default:return null}}function tx(i){return Cs.map(e=>i?.[e]??d.AIR)}function ga(i=[]){const e=Fl();return Cs.forEach((t,n)=>{e[t]=Number.isFinite(i[n])?i[n]:d.AIR}),e}function nx(i){return Cs.reduce((e,t)=>e+(i?.[t]&&i[t]!==d.AIR?1:0),0)}function ix(i){return 1+nx(i)*.25}function On(i,e,t,n=14278116){const s=new ft(new Mn(e[0],e[1],e[2]),new ii({color:n}));return s.position.set(t[0],t[1],t[2]),i.add(s),s}function sx(i,e){if(!e||e===d.AIR)return null;const t=new Wt;switch(i){case ut.HELMET:On(t,[.52,.18,.38],[0,.08,0]),On(t,[.44,.18,.34],[0,-.06,0]);break;case ut.CHEST:On(t,[.66,.52,.4],[0,0,0]),On(t,[.1,.34,.16],[-.38,-.02,0]),On(t,[.1,.34,.16],[.38,-.02,0]);break;case ut.LEGS:On(t,[.42,.18,.28],[0,.18,0]),On(t,[.18,.34,.2],[-.18,-.06,0]),On(t,[.18,.34,.2],[.18,-.06,0]);break;case ut.BOOTS:On(t,[.18,.18,.22],[-.18,0,0]),On(t,[.18,.18,.22],[.18,0,0]);break;default:return null}return t}function fl(i,e){const t=Array.isArray(e)?ga(e):e??Fl(),n=i.rig;if(n){i.armorAnchors||(i.armorAnchors={[ut.HELMET]:n.head??i.mesh,[ut.CHEST]:n.torso??i.mesh,[ut.LEGS]:n.torso??i.mesh,[ut.BOOTS]:i.mesh},i.armorMeshes={});for(const s of Cs){const r=t[s]??d.AIR;if(i.armorMeshes[s]?.userData?.itemId===r)continue;i.armorMeshes[s]&&(i.armorAnchors[s].remove(i.armorMeshes[s]),i.armorMeshes[s].traverse(o=>{o.isMesh&&(o.geometry?.dispose?.(),o.material?.dispose?.())}),i.armorMeshes[s]=null);const a=sx(s,r);a&&(a.userData.itemId=r,s===ut.CHEST&&a.position.set(0,.02,0),s===ut.LEGS&&a.position.set(0,-.18,0),s===ut.BOOTS&&a.position.set(0,.08,0),i.armorAnchors[s].add(a),i.armorMeshes[s]=a)}}}const rx={[d.GRASS]:5808973,[d.DIRT]:8148537,[d.STONE]:9277592,[d.SAND]:14336637,[d.LOG]:8345912,[d.LEAVES]:5018445,[d.WATER]:4883158,[d.BEDROCK]:4605510,[d.SNOW]:15134455,[d.CACTUS]:4821577,[d.FLOWER_RED]:13317697,[d.FLOWER_YELLOW]:15451450,[d.VINE]:4687176,[d.GRAVEL]:9538692,[d.MOSS]:7047759,[d.CASTLE_BRICK]:9277335,[d.PLANK]:11632725,[d.BRAMBLE]:6192450,[d.SKELETON_SPAWNER]:6317423,[d.BOW]:10775353,[d.ARROW]:12304072,[d.WIZARD_GROUP_SPAWNER]:7033761,[d.IRON_SWORD]:14146530,[d.IRON_ORE]:12158299,[d.COAL_ORE]:3092532,[d.GOLD_ORE]:14333501,[d.IRON]:12418903,[d.COAL]:3290168,[d.GOLD]:14728010,[d.FORGED_IRON]:14278116,[d.FURNACE]:7369852,[d.IRON_HELMET]:14278116,[d.IRON_CHESTPLATE]:14278116,[d.IRON_LEGGINGS]:14278116,[d.IRON_BOOTS]:14278116};function sh(i,e=0){return new ii({color:i,emissive:e})}function Pt(i,e,t=1){return{position:i,rotation:e,scale:t}}function rh(i,e,t,n,s=null){const r=new ft(e,t);return r.position.copy(n),s&&r.rotation.set(s.x,s.y,s.z),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xe(i,e,t,n,s,r=null,a=0){const o=new Mn(t.x,t.y,t.z),l=sh(s,a);return e.push(l),rh(i,o,l,n,r)}function ah(i,e,t,n,s,r,a,o=null,l=0){const c=new ur(t,n,s,8),u=sh(a,l);return e.push(u),rh(i,c,u,r,o)}function ax(i,e,t){const n=rx[t]??9145227;Xe(i,e,new A(.34,.34,.34),new A(0,0,0),n),Xe(i,e,new A(.26,.02,.26),new A(0,.16,0),16777215,null,526344)}function ox(i,e){Xe(i,e,new A(.24,.24,.24),new A(0,0,0),13184301),Xe(i,e,new A(.04,.08,.04),new A(.02,.16,0),7292710),Xe(i,e,new A(.1,.03,.07),new A(.08,.18,0),6266178)}function qr(i,e){Xe(i,e,new A(.06,.36,.04),new A(0,-.02,0),12173256),Xe(i,e,new A(.09,.05,.08),new A(0,-.24,0),5978916),Xe(i,e,new A(.14,.03,.06),new A(0,-.18,0),3812643)}function lx(i,e){Xe(i,e,new A(.05,.34,.04),new A(.05,.02,0),14146018,new Ge(0,0,-.42)),Xe(i,e,new A(.16,.03,.06),new A(-.04,-.16,0),10322762),Xe(i,e,new A(.05,.12,.05),new A(-.1,-.24,0),7293998)}function cx(i,e){ah(i,e,.02,.02,.42,new A(0,0,0),10513721,new Ge(0,0,Math.PI*.5)),Xe(i,e,new A(.05,.28,.04),new A(-.14,.11,0),9264175,new Ge(0,0,-.55)),Xe(i,e,new A(.05,.28,.04),new A(-.14,-.11,0),9264175,new Ge(0,0,.55)),Xe(i,e,new A(.01,.44,.01),new A(-.26,0,0),14147043)}function ux(i,e){Xe(i,e,new A(.18,.08,.14),new A(0,-.12,0),5980461);for(const t of[-.06,0,.06])Xe(i,e,new A(.025,.26,.03),new A(t,.08,0),14738410,new Ge(0,0,-.12))}function hx(i,e){Xe(i,e,new A(.08,.42,.08),new A(0,-.06,0),8148537),Xe(i,e,new A(.24,.12,.14),new A(0,.22,0),8225677),Xe(i,e,new A(.05,.16,.05),new A(.12,.22,0),11832382,null,2758400),Xe(i,e,new A(.05,.16,.05),new A(-.12,.22,0),11832382,null,2758400)}function fx(i,e){Xe(i,e,new A(.07,.44,.07),new A(0,-.08,0),8214327),Xe(i,e,new A(.21,.15,.05),new A(.09,.16,0),10475250,new Ge(0,0,-.2),1454659),Xe(i,e,new A(.08,.11,.04),new A(-.07,.12,0),13364989,new Ge(0,0,.35),1585212)}function dx(i,e){Xe(i,e,new A(.04,.38,.04),new A(0,0,0),9134139)}function px(i,e,t=10578489,n=14606046){ah(i,e,.018,.018,.42,new A(0,0,0),t,new Ge(0,0,Math.PI*.5)),Xe(i,e,new A(.05,.27,.04),new A(-.14,.11,0),t,new Ge(0,0,-.56)),Xe(i,e,new A(.05,.27,.04),new A(-.14,-.11,0),t,new Ge(0,0,.56)),Xe(i,e,new A(.01,.44,.01),new A(-.26,0,0),n,null,1118481)}function mx(i,e){Xe(i,e,new A(.03,.38,.03),new A(0,0,0),9068601),Xe(i,e,new A(.09,.09,.03),new A(0,.18,0),13027793),Xe(i,e,new A(.08,.05,.01),new A(0,-.16,.015),12864331)}function fo(i,e,t,n){Xe(i,e,new A(.05,.4,.05),new A(0,-.05,0),n),Xe(i,e,new A(.18,.12,.05),new A(.08,.13,0),t,new Ge(0,0,-.14))}function po(i,e,t,n){Xe(i,e,new A(.05,.4,.05),new A(0,-.05,0),n),Xe(i,e,new A(.24,.06,.05),new A(0,.14,0),t)}function mo(i,e,t,n){Xe(i,e,new A(.05,.38,.05),new A(0,-.04,0),n),Xe(i,e,new A(.11,.16,.05),new A(0,.13,0),t)}function oh(i,e){!i||!e||(i.position.copy(e.position),i.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),i.scale.setScalar(e.scale??1))}function lh(i,e=!1){switch(i){case d.WOOD_AXE:case d.STONE_AXE:case d.IRON_AXE:case d.WEAPON_YETI_AXE:return e?Pt(new A(.08,-.04,.02),new Ge(-.18,.18,.86),1):Pt(new A(.02,-.2,.02),new Ge(.12,.04,1.62),1.2);case d.WOOD_PICKAXE:case d.STONE_PICKAXE:case d.IRON_PICKAXE:return e?Pt(new A(.06,-.05,.01),new Ge(-.14,.1,.94),1):Pt(new A(.02,-.2,.01),new Ge(.1,.04,1.58),1.2);case d.WOOD_SPADE:case d.STONE_SPADE:case d.IRON_SPADE:return e?Pt(new A(.05,-.06,.02),new Ge(-.12,.12,.52),1):Pt(new A(.02,-.19,.01),new Ge(.08,.03,1.54),1.16);case d.WOOD_SWORD:case d.STONE_SWORD:case d.IRON_SWORD:case d.WEAPON_BANDIT_BLADE:case d.WEAPON_RAIDER_SABER:return e?Pt(new A(.04,-.08,.02),new Ge(-.05,.1,.22),1):Pt(new A(.01,-.16,.24),new Ge(1.57,.04,.02),1.24);case d.WEAPON_WRAITH_HAMMER:return e?Pt(new A(.07,-.08,.01),new Ge(-.12,.18,.68),1):Pt(new A(.02,-.2,.01),new Ge(.08,.03,1.56),1.16);case d.WEAPON_SCORP_BOW:case d.BOW:return e?Pt(new A(.01,-.06,.02),new Ge(.02,.18,1.36),1):Pt(new A(.03,-.16,.06),new Ge(.18,.12,1.57),1.28);case d.ARROW:return e?Pt(new A(.02,-.05,.02),new Ge(.08,.02,.28),.95):Pt(new A(.02,-.17,.01),new Ge(.08,.03,1.55),1.12);case d.WEAPON_JAGUAR_CLAWS:return e?Pt(new A(.02,-.03,.03),new Ge(.18,.2,.16),1):Pt(new A(.02,-.1,.04),new Ge(.18,.08,1.26),1.02);default:return e?Pt(new A(0,0,0),new Ge(0,0,0),.9):Pt(new A(.01,-.12,.02),new Ge(.1,.06,1.3),.98)}}function gx(i){return Number.isFinite(i)&&i>d.AIR}function ch(i){if(!gx(i))return null;const e=new Wt,t=[];switch(i){case d.APPLE:ox(e,t);break;case d.WEAPON_BANDIT_BLADE:qr(e,t);break;case d.WEAPON_RAIDER_SABER:lx(e,t);break;case d.WEAPON_SCORP_BOW:cx(e,t);break;case d.BOW:px(e,t);break;case d.ARROW:mx(e,t);break;case d.WEAPON_JAGUAR_CLAWS:ux(e,t);break;case d.WEAPON_WRAITH_HAMMER:hx(e,t);break;case d.WEAPON_YETI_AXE:fx(e,t);break;case d.STICK:dx(e,t);break;case d.WOOD_SWORD:qr(e,t),e.traverse(n=>{n.isMesh&&n.material.color.setHex(n.position.y>-.12?12225108:8279605)});break;case d.WOOD_AXE:fo(e,t,12752226,8345399);break;case d.WOOD_PICKAXE:po(e,t,12752226,8345399);break;case d.WOOD_SPADE:mo(e,t,12752226,8345399);break;case d.STONE_SWORD:qr(e,t);break;case d.IRON_SWORD:qr(e,t),e.traverse(n=>{n.isMesh&&n.material.color.setHex(n.position.y>-.12?14278115:n.position.y>-.2?12753732:8016950)});break;case d.STONE_AXE:fo(e,t,11515071,8345399);break;case d.IRON_AXE:fo(e,t,14212580,8345399);break;case d.STONE_PICKAXE:po(e,t,11515071,8345399);break;case d.IRON_PICKAXE:po(e,t,14212580,8345399);break;case d.STONE_SPADE:mo(e,t,11515071,8345399);break;case d.IRON_SPADE:mo(e,t,14212580,8345399);break;default:ax(e,t,i);break}return e.userData.dispose=()=>{e.traverse(n=>{n.isMesh&&n.geometry?.dispose?.()});for(const n of t)n.dispose?.()},e}class _x{constructor(e){this.camera=e,this.root=new Wt,this.root.position.set(.42,-.34,-.72),this.root.rotation.set(-.36,-.2,-.12),this.camera.add(this.root),this.currentItemId=d.AIR,this.currentModel=null}setItem(e){const t=Number.isFinite(e)?e:d.AIR;if(t===this.currentItemId)return;this.currentItemId=t,this.currentModel&&(this.root.remove(this.currentModel),this.currentModel.userData.dispose?.(),this.currentModel=null);const n=ch(t);n&&(oh(n,lh(t,!0)),this.root.add(n),this.currentModel=n)}update(e){if(!this.currentModel)return;const t=Math.sin(e*1.7)*.012;this.root.position.y=-.34+t,this.root.rotation.z=-.12+Math.sin(e*1.35)*.025}}function dl(i,e,t=1){const n=Number.isFinite(e)?e:d.AIR;if(i.userData.itemId===n)return;i.userData.model&&(i.remove(i.userData.model),i.userData.model.userData.dispose?.(),i.userData.model=null),i.userData.itemId=n;const s=ch(n);s&&(oh(s,lh(n,!1)),s.scale.multiplyScalar(t),i.add(s),i.userData.model=s)}const uh=20,xx=28,ou=30,vx=5,Sx=4.5,lu=18,Ex=12,Mx=26,yx=6.5;function bx(){return new ft(new Yi(.18,8,8),new Hn({color:5922150,transparent:!0,opacity:.72,depthWrite:!1}))}function Ax(i,e,t,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=e[a],c=t[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function Tx(i=13620443,e=13191754){const t=new Wt,n=new ft(new ur(.018,.018,.72,8),new ii({color:9134139}));n.rotation.z=Math.PI*.5,t.add(n);const s=new ft(new Pl(.05,.15,4),new ii({color:i}));s.rotation.z=-Math.PI*.5,s.position.x=.38,t.add(s);for(const r of[-.03,.03]){const a=new ft(new Mn(.12,.05,.01),new ii({color:e}));a.position.set(-.28,0,r),t.add(a)}return t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),t.userData.dispose=()=>{t.traverse(r=>{r.isMesh&&(r.geometry?.dispose?.(),r.material?.dispose?.())})},t}function Rx(){const i=new Wt,e=new ft(new Yi(.16,12,12),new Hn({color:16757575}));i.add(e);const t=new ft(new Yi(.28,12,12),new Hn({color:16738846,transparent:!0,opacity:.38,depthWrite:!1}));i.add(t);const n=new Yu(16751158,1.5,7,2);return i.add(n),i.userData.dispose=()=>{i.traverse(s=>{s.isMesh&&(s.geometry?.dispose?.(),s.material?.dispose?.())})},i}function wx(i,e,t,n=uh){const s=e.x-i.x,r=e.z-i.z,a=e.y-i.y,o=Math.hypot(s,r);if(o<.001)return null;const l=t*t,c=l*l-n*(n*o*o+2*a*l);if(c<0)return null;const u=Math.sqrt(c),h=(l-u)/(n*o),f=1/Math.sqrt(1+h*h),m=h*f;return new A(s/o*t*f,t*m,r/o*t*f)}class Cx{constructor(e,t,n,s={}){this.scene=e,this.world=t,this.mobs=n,this.onPlayerHit=s.onPlayerHit??(()=>{}),this.fireSystem=s.fireSystem??null,this.projectiles=new Map,this.nextId=1,this.tmpDir=new A,this.tmpFrom=new A,this.tmpTo=new A,this.tmpMin=new A,this.tmpMax=new A,this.effects=new Map,this.nextEffectId=1}spawnArrow({origin:e,velocity:t,ownerType:n,ownerEntityId:s=null,hitMobs:r=!1,hitPlayer:a=!1,damage:o=lu}){const l=this.nextId++,c=Tx(n==="mob"?15264752:14015202,n==="mob"?7310543:13191754);c.position.copy(e),this.scene.add(c);const u={id:l,mesh:c,position:e.clone(),velocity:t.clone(),ownerType:n,ownerEntityId:s,hitMobs:r,hitPlayer:a,damage:o,life:vx};return this.alignArrow(u),this.projectiles.set(l,u),u}spawnFireball({origin:e,velocity:t,ownerEntityId:n=null,ownerType:s="mob",hitMobs:r=!0,hitPlayer:a=!0}){const o=this.nextId++,l=Rx();l.position.copy(e),this.scene.add(l);const c={id:o,type:"fireball",mesh:l,position:e.clone(),velocity:t.clone(),ownerType:s,ownerEntityId:n,hitMobs:r,hitPlayer:a,damage:Mx,life:Sx};return this.alignArrow(c),this.projectiles.set(o,c),c}firePlayerArrow(e,t,n){const s=t.clone().multiplyScalar(xx);return this.spawnArrow({origin:e,velocity:s,ownerType:"player",hitMobs:!0,hitPlayer:!1,damage:n??lu})}fireSkeletonArrow(e,t,n){return this.spawnArrow({origin:e,velocity:t,ownerType:"mob",ownerEntityId:n,hitMobs:!1,hitPlayer:!0,damage:Ex})}fireWizardFireball(e,t,n){return this.spawnFireball({origin:e,velocity:t.clone().normalize().multiplyScalar(16.5),ownerEntityId:n,ownerType:"mob",hitMobs:!0,hitPlayer:!0})}firePlayerFireball(e,t){return this.spawnFireball({origin:e,velocity:t.clone().normalize().multiplyScalar(18),ownerEntityId:null,ownerType:"player",hitMobs:!0,hitPlayer:!1})}alignArrow(e){this.tmpDir.copy(e.velocity).normalize(),e.mesh.quaternion.setFromUnitVectors(new A(1,0,0),this.tmpDir)}removeProjectile(e){const t=this.projectiles.get(e);t&&(this.scene.remove(t.mesh),t.mesh.userData.dispose?.(),this.projectiles.delete(e))}spawnExplosionSmoke(e){for(let t=0;t<28;t++){const n=this.nextEffectId++,s=bx(),r=Math.random()*Math.PI*2,a=(Math.random()*.7+.15)*(Math.random()>.5?1:-1),o=1.2+Math.random()*2.4,l=.9+Math.random()*.55;s.position.copy(e),this.scene.add(s),this.effects.set(n,{id:n,mesh:s,velocity:new A(Math.cos(r)*o,Math.abs(Math.sin(a))*(1.4+Math.random()*1.2),Math.sin(r)*o),life:l,maxLife:l})}}explode(e,t=null){this.spawnExplosionSmoke(e);const n=yx,s=Math.ceil(n);for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++)for(let o=-s;o<=s;o++){const l=Math.hypot(o,r,a);if(l>n)continue;const c=Math.floor(e.x+o),u=Math.floor(e.y+r),h=Math.floor(e.z+a),f=this.world.getBlock(c,u,h);if(!Nl(f)||f===d.WATER)continue;1-l/n>.18+Math.random()*.35&&this.world.setBlock(c,u,h,d.AIR)}if(this.fireSystem&&this.fireSystem.igniteAround(e,n+.5,.8),this.mobs.damageEntitiesInRadius(e,n+.5,22,t,r=>t===null?!0:this.mobs.areEntitiesHostile(t,r.id)),this.hitPlayerOnSegment(e,e.clone().addScalar(1e-4),this.lastPlayerRef))this.onPlayerHit(28,null);else{const r=this.lastPlayerRef?.position;if(r){const a=r.distanceTo(e);a<=n+.8&&this.onPlayerHit(Math.max(8,Math.round(28*(1-a/(n+.8)))),null)}}}hitSolidOnSegment(e,t){const n=t.x-e.x,s=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.14));for(let l=1;l<=o;l++){const c=l/o,u=Math.floor(e.x+n*c),h=Math.floor(e.y+s*c),f=Math.floor(e.z+r*c);if(ma(this.world.getBlock(u,h,f)))return!0}return!1}hitPlayerOnSegment(e,t,n){const s=n.getAABB();this.tmpMin.set(s.minX,s.minY,s.minZ),this.tmpMax.set(s.maxX,s.maxY,s.maxZ),this.tmpDir.subVectors(t,e);const r=this.tmpDir.length();if(r<1e-6)return!1;this.tmpDir.divideScalar(r);const a=Ax(e,this.tmpDir,this.tmpMin,this.tmpMax);return a!==null&&a<=r}update(e,t){this.lastPlayerRef=t;for(const[n,s]of this.projectiles){if(this.tmpFrom.copy(s.position),s.type!=="fireball"&&(s.velocity.y-=uh*e),s.position.addScaledVector(s.velocity,e),this.tmpTo.copy(s.position),this.hitSolidOnSegment(this.tmpFrom,this.tmpTo)){s.type==="fireball"&&this.explode(this.tmpTo,s.ownerEntityId),this.removeProjectile(n);continue}if(s.hitMobs||s.ownerType==="mob"){const r=this.mobs.hitEntityOnSegment(this.tmpFrom,this.tmpTo,s.ownerEntityId,a=>s.ownerType!=="mob"?!0:this.mobs.areEntitiesHostile(s.ownerEntityId,a.id));if(r){s.type==="fireball"?this.explode(r.mesh.position,s.ownerEntityId):this.mobs.damageEntity(r,s.damage),this.removeProjectile(n);continue}}if(s.hitPlayer&&this.hitPlayerOnSegment(this.tmpFrom,this.tmpTo,t)){s.type==="fireball"?this.explode(t.position,s.ownerEntityId):this.onPlayerHit(s.damage,s),this.removeProjectile(n);continue}s.mesh.position.copy(s.position),this.alignArrow(s),s.life-=e,s.life<=0&&this.removeProjectile(n)}for(const[n,s]of this.effects){s.life-=e,s.mesh.position.addScaledVector(s.velocity,e),s.velocity.multiplyScalar(Math.max(.88,1-e*.7)),s.velocity.y+=.8*e;const r=1-s.life/s.maxLife;s.mesh.scale.setScalar(1+r*2.2),s.mesh.material.opacity=Math.max(0,.72*(s.life/s.maxLife)),s.life<=0&&(this.scene.remove(s.mesh),s.mesh.geometry?.dispose?.(),s.mesh.material?.dispose?.(),this.effects.delete(n))}}}function Z(i,e,t,n){const s=new Mn(e[0],e[1],e[2]),r=new ii({color:n}),a=new ft(s,r);return a.position.set(t[0],t[1],t[2]),i.add(a),a}function sn(i,e,t,n=1776411,s=.12){Z(i,[.06,.06,.02],[-s,e,t],n),Z(i,[.06,.06,.02],[s,e,t],n)}function rn(i){return{type:i,legs:[],arms:[],wings:[],tail:null,head:null,torso:null}}function Ix(i){const e=rn("humanoid");return e.torso=Z(i,[.6,.92,.34],[0,.46,0],3960737),e.head=Z(i,[.52,.5,.36],[0,1.17,0],14664353),e.legs.push(Z(i,[.18,.56,.2],[-.2,.24,0],2964307)),e.legs.push(Z(i,[.18,.56,.2],[.2,.24,0],2964307)),e.arms.push(Z(i,[.1,.4,.1],[-.36,.62,0],14664353)),e.arms.push(Z(i,[.1,.4,.1],[.36,.62,0],14664353)),Z(i,[.58,.1,.38],[0,1.48,0],3812130),sn(i,1.2,.19,1710618,.11),Z(i,[.1,.03,.02],[0,1.09,.19],8015674),e}function hh(i){const e=rn("quadruped");Z(i,[.75,.44,.34],[0,.58,0],10516047),e.head=Z(i,[.32,.32,.28],[.42,.76,0],10120774),Z(i,[.2,.14,.2],[.53,.62,0],9330233),e.tail=Z(i,[.08,.12,.08],[-.42,.64,0],8542003),sn(i,.8,.14,1513239,.05);for(const t of[-.24,.24])e.legs.push(Z(i,[.14,.38,.14],[t,.2,.12],8082486)),e.legs.push(Z(i,[.14,.38,.14],[t,.2,-.12],8082486));return Z(i,[.04,.28,.04],[.5,1.02,.09],13878443),Z(i,[.04,.28,.04],[.5,1.02,-.09],13878443),e}function Px(i){const e=rn("crawler");Z(i,[.8,.22,.32],[0,.38,0],12169325),e.head=Z(i,[.3,.18,.24],[.49,.41,0],10261593),e.tail=Z(i,[.46,.1,.1],[-.62,.32,0],9208913),sn(i,.45,.13,2236962,.05);for(const t of[-.13,.13])e.legs.push(Z(i,[.14,.1,.14],[-.15,.2,t],10063705)),e.legs.push(Z(i,[.14,.1,.14],[.2,.2,t],10063705));return e}function Lx(i){const e=rn("flying");return Z(i,[.32,.42,.28],[0,.64,0],3065451),e.head=Z(i,[.28,.24,.24],[.14,.9,0],2339935),Z(i,[.1,.08,.08],[.3,.88,0],14985781),sn(i,.93,.12,1052688,.045),e.wings.push(Z(i,[.48,.06,.2],[0,.66,.19],5232383)),e.wings.push(Z(i,[.48,.06,.2],[0,.66,-.19],4110304)),e.tail=Z(i,[.14,.16,.12],[-.2,.4,0],2861402),e}function Dx(i){const e=rn("quadruped");Z(i,[.68,.4,.3],[0,.58,0],14408927),e.head=Z(i,[.3,.28,.24],[.38,.76,0],13158862),sn(i,.79,.12,1447446,.05),Z(i,[.06,.24,.06],[.43,.98,.09],13218950),Z(i,[.06,.24,.06],[.43,.98,-.09],13218950);for(const t of[-.2,.2])e.legs.push(Z(i,[.13,.36,.13],[t,.2,.11],9869213)),e.legs.push(Z(i,[.13,.36,.13],[t,.2,-.11],9869213));return e}function cu(i){const e=rn("quadruped");Z(i,[.74,.46,.42],[0,.58,0],15790319),e.head=Z(i,[.34,.3,.28],[.43,.72,0],4602932),sn(i,.74,.14,1250067,.06);for(const t of[-.22,.22])e.legs.push(Z(i,[.13,.34,.13],[t,.2,.14],6181962)),e.legs.push(Z(i,[.13,.34,.13],[t,.2,-.14],6181962));return e}function Ox(i){const e=hh(i);return Z(i,[.04,.24,.04],[.52,1.14,.14],14209727),Z(i,[.04,.16,.04],[.57,1.2,.18],14209727),Z(i,[.04,.24,.04],[.52,1.14,-.14],14209727),Z(i,[.04,.16,.04],[.57,1.2,-.18],14209727),e}function _a(i,e,t,n=!1){const s=rn("humanoid");return s.torso=Z(i,[.56,.88,.32],[0,.46,0],e),s.head=Z(i,[.44,.48,.32],[0,1.14,0],t),s.legs.push(Z(i,[.16,.56,.16],[-.18,.22,0],3155487)),s.legs.push(Z(i,[.16,.56,.16],[.18,.22,0],3155487)),s.arms.push(Z(i,[.12,.42,.12],[-.34,.62,0],t)),s.arms.push(Z(i,[.12,.42,.12],[.34,.62,0],t)),sn(i,1.16,.17,n?12524829:1315860,.08),Z(i,[.12,.04,.02],[0,1.04,.17],n?5181456:7819064),n&&Z(i,[.46,.08,.36],[0,1.42,0],2039583),s}function Nx(i){const e=rn("crawler");Z(i,[.66,.3,.32],[0,.48,0],9929799),e.head=Z(i,[.32,.2,.24],[.42,.54,0],8219191),sn(i,.58,.12,13512478,.05),e.tail=Z(i,[.5,.08,.08],[-.58,.42,0],7166512);for(const t of[-.13,.13])e.legs.push(Z(i,[.12,.2,.12],[-.16,.2,t],8351806)),e.legs.push(Z(i,[.12,.2,.12],[.16,.2,t],8351806));return e}function Ux(i){const e=rn("quadruped");Z(i,[.74,.34,.32],[0,.54,0],12747069),e.head=Z(i,[.32,.24,.24],[.45,.62,0],11300657),sn(i,.65,.12,12394014,.05);for(const t of[-.22,.22])e.legs.push(Z(i,[.12,.28,.12],[t,.2,.13],9329191)),e.legs.push(Z(i,[.12,.28,.12],[t,.2,-.13],9329191));return e.tail=Z(i,[.44,.08,.08],[-.58,.5,0],9066533),e}function Fx(i){const e=rn("wraith");return Z(i,[.64,.86,.42],[0,.56,0],7962758),e.head=Z(i,[.48,.36,.34],[0,1.18,0],6976378),e.arms.push(Z(i,[.26,.5,.16],[-.45,.62,0],6713207)),e.arms.push(Z(i,[.26,.5,.16],[.45,.62,0],6713207)),sn(i,1.2,.18,16756019,.09),e}function Bx(i){const e=rn("humanoid");return Z(i,[.78,.96,.48],[0,.58,0],13162981),e.head=Z(i,[.52,.5,.4],[0,1.23,0],14149103),e.arms.push(Z(i,[.28,.62,.2],[-.48,.62,0],12111067)),e.arms.push(Z(i,[.28,.62,.2],[.48,.62,0],12111067)),e.legs.push(Z(i,[.18,.5,.18],[-.2,.25,0],10334914)),e.legs.push(Z(i,[.18,.5,.18],[.2,.25,0],10334914)),sn(i,1.22,.2,9093375,.1),Z(i,[.16,.05,.03],[0,1.08,.2],5337490),e}function kx(i){const e=rn("humanoid"),t=15065814,n=13289144,s=10459786;Z(i,[.18,.82,.12],[0,.62,0],n),Z(i,[.46,.08,.16],[0,.9,0],t),Z(i,[.42,.08,.14],[0,.72,0],t);for(const r of[.82,.74,.66,.58])Z(i,[.46,.03,.03],[0,r,.1],n);return e.head=Z(i,[.42,.46,.32],[0,1.22,0],t),Z(i,[.22,.08,.06],[0,1.03,.13],n),e.legs.push(Z(i,[.12,.62,.12],[-.14,.31,0],n)),e.legs.push(Z(i,[.12,.62,.12],[.14,.31,0],n)),e.arms.push(Z(i,[.1,.66,.1],[-.32,.62,0],n)),e.arms.push(Z(i,[.1,.66,.1],[.32,.62,0],n)),sn(i,1.22,.17,1710618,.08),Z(i,[.1,.04,.02],[0,1.08,.17],s),e}function zx(i){const e=rn("humanoid");return e.torso=Z(i,[.62,.94,.38],[0,.48,0],5913996),Z(i,[.42,.22,.28],[0,.08,0],3614287),e.head=Z(i,[.44,.46,.34],[0,1.18,0],14205089),e.legs.push(Z(i,[.16,.5,.16],[-.17,.24,0],2891586)),e.legs.push(Z(i,[.16,.5,.16],[.17,.24,0],2891586)),e.arms.push(Z(i,[.12,.46,.12],[-.36,.64,0],7164072)),e.arms.push(Z(i,[.12,.46,.12],[.36,.64,0],7164072)),Z(i,[.18,.16,.2],[0,.98,.12],12959959),sn(i,1.18,.18,16091940,.08),Z(i,[.54,.06,.42],[0,1.42,0],2760002),Z(i,[.22,.34,.22],[0,1.62,0],3679062),Z(i,[.08,.18,.04],[-.11,1.02,.17],14209734),Z(i,[.08,.18,.04],[.11,1.02,.17],14209734),Z(i,[.12,.08,.03],[0,1.06,.17],7096118),e}function Hx(i){const e=_a(i,6982483,14069903,!1);return Z(i,[.18,.16,.14],[0,1.02,.16],12955794),e}function Gx(i){const e=rn("humanoid");return e.torso=Z(i,[.58,.88,.34],[0,.46,0],8226708),e.head=Z(i,[.44,.46,.32],[0,1.14,0],13873294),e.legs.push(Z(i,[.16,.56,.16],[-.18,.22,0],4278355)),e.legs.push(Z(i,[.16,.56,.16],[.18,.22,0],4278355)),e.arms.push(Z(i,[.12,.42,.12],[-.34,.62,0],9410982)),e.arms.push(Z(i,[.12,.42,.12],[.34,.62,0],9410982)),Z(i,[.48,.1,.36],[0,1.42,0],6383989),Z(i,[.62,.14,.42],[0,.72,0],7305348),sn(i,1.16,.17,1315860,.08),Z(i,[.12,.04,.02],[0,1.04,.17],7819064),e}function ds(i,e,t=!1){const n=new Wt;let s;if(t)return s=Ix(n),{root:n,rig:s};switch(i.key){case"deer":s=hh(n);break;case"lizard":s=Px(n);break;case"parrot":s=Lx(n);break;case"goat":s=Dx(n);break;case"sheep":s=cu(n);break;case"reindeer":s=Ox(n);break;case"bandit":s=_a(n,7228726,13674370,!0);break;case"raider":s=_a(n,5715753,13146740,!0);break;case"sandstalker":s=Nx(n);break;case"jaguar":s=Ux(n);break;case"rockwraith":s=Fx(n);break;case"yeti":s=Bx(n);break;case"skeleton":s=kx(n);break;case"wizard":s=zx(n);break;case"villager":s=Hx(n);break;case"guard":s=Gx(n);break;default:s=cu(n);break}return e&&Z(n,[.08,.08,.08],[.24,.9,.2],9376788),{root:n,rig:s}}function Vs(i){const e=document.createElement("canvas");e.width=96,e.height=16;const t=new cr(e);t.minFilter=Zt;const n=new Cl({map:t,transparent:!0,depthTest:!1,depthWrite:!1}),s=new Gu(n);s.scale.set(1.45,.26,1),s.position.set(0,2.25,0),i.mesh.add(s),i.healthCanvas=e,i.healthTexture=t,i.healthSprite=s,fh(i)}function fh(i){if(!i.healthCanvas)return;const e=i.healthCanvas.getContext("2d");e.clearRect(0,0,i.healthCanvas.width,i.healthCanvas.height),e.fillStyle="rgba(25,25,25,0.85)",e.fillRect(0,0,96,16);const t=Math.max(0,Math.min(1,i.health/i.maxHealth));e.fillStyle="rgba(192,36,36,0.95)",e.fillRect(2,2,Math.floor(92*t),12),i.healthTexture.needsUpdate=!0}function Xs(i){const e=new Ll(.65,.95,24),t=new Hn({color:16726843,transparent:!0,opacity:0,side:hn,depthTest:!1}),n=new ft(e,t);n.position.set(0,1.05,0),n.rotation.x=Math.PI/2,i.mesh.add(n),i.damageHalo=n}const hi=384,fi=576,kt=(ki+5)*J,Wx={[Ue.FOREST]:{key:"deer",name:"Deer",color:10516047,speed:1.6},[Ue.DESERT]:{key:"lizard",name:"Lizard",color:12169325,speed:1.4},[Ue.JUNGLE]:{key:"parrot",name:"Parrot",color:3065451,speed:2.2,flying:!0},[Ue.MOUNTAIN]:{key:"goat",name:"Goat",color:14145757,speed:1.5},[Ue.PLAINS]:{key:"sheep",name:"Sheep",color:15790319,speed:1.3},[Ue.TUNDRA]:{key:"reindeer",name:"Reindeer",color:10454377,speed:1.5}},Vx={[Ue.FOREST]:{key:"bandit",name:"Bandit",color:7228726,speed:2.1,health:65,drop:d.WEAPON_BANDIT_BLADE},[Ue.DESERT]:{key:"sandstalker",name:"Sandstalker",color:9929799,speed:2,health:58,drop:d.WEAPON_SCORP_BOW},[Ue.JUNGLE]:{key:"jaguar",name:"Jungle Stalker",color:12747069,speed:2.3,health:60,drop:d.WEAPON_JAGUAR_CLAWS},[Ue.MOUNTAIN]:{key:"rockwraith",name:"Rock Wraith",color:7962758,speed:1.9,health:72,drop:d.WEAPON_WRAITH_HAMMER},[Ue.PLAINS]:{key:"raider",name:"Raider",color:7358520,speed:2,health:68,drop:d.WEAPON_RAIDER_SABER},[Ue.TUNDRA]:{key:"yeti",name:"Yeti",color:13162981,speed:1.8,health:85,drop:d.WEAPON_YETI_AXE}},Xx=new Set(["bandit","raider"]),Kn={key:"skeleton",name:"Skeleton",color:15065814,speed:1.95,health:54,drop:null},di={key:"wizard",name:"Wizard",speed:1.45,health:78,drop:null};function ps(i,e,t=!1){return t||e==="humanoid"||e==="wraith"||i==="bandit"||i==="raider"||i==="yeti"||i==="rockwraith"?Math.PI*.5:0}function uu(i){switch(i.key){case"bandit":case"raider":case"skeleton":case"questgiver":return{centerY:.96,halfX:.28,halfY:.96,halfZ:.22};case"yeti":return{centerY:1.02,halfX:.38,halfY:1.02,halfZ:.28};case"rockwraith":return{centerY:.92,halfX:.34,halfY:.92,halfZ:.26};case"deer":case"reindeer":return{centerY:.6,halfX:.52,halfY:.5,halfZ:.22};case"goat":case"sheep":return{centerY:.58,halfX:.46,halfY:.46,halfZ:.24};case"jaguar":return{centerY:.56,halfX:.48,halfY:.34,halfZ:.2};case"lizard":case"sandstalker":return{centerY:.4,halfX:.5,halfY:.2,halfZ:.18};case"parrot":return{centerY:.7,halfX:.2,halfY:.24,halfZ:.18};default:return{centerY:.7,halfX:.35,halfY:.5,halfZ:.24}}}function hu(i,e,t,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=e[a],c=t[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function pi(i,e,t){const n=Math.floor(e),s=Math.floor(t);for(let r=Et-1;r>=1;r--){const a=i.getBlock(n,r,s),o=i.getBlock(n,r+1,s);if(a!==d.AIR&&a!==d.WATER&&o===d.AIR)return r}return 1}function Yx(i,e,t){const n=t.x-e.x,s=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.35));for(let l=1;l<o;l++){const c=l/o,u=Math.floor(e.x+n*c),h=Math.floor(e.y+s*c),f=Math.floor(e.z+r*c),m=i.getBlock(u,h,f);if(m!==d.AIR&&m!==d.WATER&&m!==d.LEAVES&&m!==d.VINE)return!1}return!0}class qx{constructor(e,t,n={}){this.scene=e,this.world=t,this.onEnemyKilled=n.onEnemyKilled??(()=>{}),this.onQuestGiverKilled=n.onQuestGiverKilled??(()=>{}),this.entities=new Map,this.chunkSpawns=new Map,this.hostileSites=new Map,this.hostileSiteSpawns=new Map,this.skeletonSpawnerSpawns=new Map,this.wizardGroupSites=new Map,this.wizardGroupSpawns=new Map,this.nightChunkSpawns=new Map,this.settlementSpawns=new Map,this.nextId=1,this.spawnTick=0,this.tmpDir=new A,this.raycaster=new fd}attachEntityMesh(e){e.mesh.userData.entityId=e.id,e.mesh.traverse(t=>{t.isMesh&&(t.userData.entityId=e.id)}),this.scene.add(e.mesh)}attachHeldItem(e,t,n=.72){if(!t)return;const s=new Wt;s.position.set(.05,-.3,.02),s.rotation.set(.08,.04,-.08),(e.rig?.arms?.[1]??e.mesh).add(s),dl(s,t,n),e.heldAnchor=s,e.heldItemId=t}isNight(e){const t=(e%600+600)%600/600;return Math.sin(t*Math.PI*2)<-.02}spawnForChunk(e){const t=e.key;if(this.chunkSpawns.has(t))return;const n=e.cx*J+J*.5,s=e.cz*J+J*.5,r=this.world.getBiomeAt(n,s),a=[];a.push(this.spawnMob(e,r,Wx[r],!1));const o=se(e.cx,e.cz,45019);(r===Ue.FOREST||r===Ue.PLAINS||r===Ue.JUNGLE)&&o>1-xs.questgiverChance&&a.push(this.spawnQuestGiver(e,r)),this.chunkSpawns.set(t,a.filter(Boolean))}spawnSettlementForChunk(e){const t=`settlement:${e.key}`;if(this.settlementSpawns.has(t))return;const n=[];for(const s of this.world.getSettlementNpcsForChunk(e.cx,e.cz)){const{root:r,rig:a}=ds({key:s.key},s.key==="guard",!1),o=this.nextId++;r.position.set(s.x,s.y,s.z);const l={id:o,sourceType:"settlement",sourceKey:t,biome:this.world.getBiomeAt(s.x,s.z),kind:"mob",key:s.key,name:s.name,hostile:!1,flying:!1,intelligent:!1,speed:s.key==="guard"?1.35:.98,mesh:r,rig:a,vx:0,vz:0,wanderTimer:.8+se(o,s.x,6101)*2.4,attackTimer:0,homeY:s.y,homeX:s.x,homeZ:s.z,patrolRadius:s.key==="guard"?12:7,animPhase:se(o,s.z,6111)*Math.PI*2,groupId:null,maxHealth:s.key==="guard"?62:36,health:s.key==="guard"?62:36,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,faction:s.key==="guard"?cn.HUMAN:cn.NEUTRAL,targetEntityId:null,aimPitch:0,aimYawLocal:0,meleeCooldown:0,talker:!0,dialogueKind:s.key,settlementType:s.settlementType,modelYawOffset:ps(s.key,a?.type,!1)};s.key==="guard"&&this.attachHeldItem(l,d.IRON_SWORD,1),s.key==="guard"&&(l.armorIds=[d.IRON_HELMET,d.IRON_CHESTPLATE,d.IRON_LEGGINGS,d.IRON_BOOTS],fl(l,ga(l.armorIds))),this.entities.set(o,l),this.attachEntityMesh(l),n.push(o)}this.settlementSpawns.set(t,n)}getHostileSite(e,t){const n=`${e},${t}`;if(this.hostileSites.has(n))return this.hostileSites.get(n);if(se(e,t,88901)>xs.hostileSiteChance)return this.hostileSites.set(n,null),null;const r=64,a=e*hi+r+Math.floor(se(e,t,88911)*(hi-r*2)),o=t*hi+r+Math.floor(se(e,t,88921)*(hi-r*2)),l=this.world.getBiomeAt(a,o),c=Vx[l],u=Xx.has(c.key);let h=1;u?h=3+(se(e,t,88931)*3|0):se(e,t,88941)>.8&&(h=2);const f={key:n,x:a,z:o,biome:l,def:c,intelligent:u,groupSize:h};return this.hostileSites.set(n,f),f}spawnHostileSite(e){if(this.hostileSiteSpawns.has(e.key))return;const t=[],n=pi(this.world,e.x,e.z);for(let s=0;s<e.groupSize;s++){const r=se(s,e.x,7801)*Math.PI*2,a=e.intelligent?2.2+se(s,e.z,7802)*4.5:se(s,e.z,7803)*2.5,o=Math.floor(e.x+Math.cos(r)*a),l=Math.floor(e.z+Math.sin(r)*a),c=pi(this.world,o,l),u=this.spawnHostileAt(e,s,o,c,l,n);u&&t.push(u)}this.hostileSiteSpawns.set(e.key,t)}spawnHostileAt(e,t,n,s,r,a){const{root:o,rig:l}=ds(e.def,!0,!1),c=this.nextId++,u=s+(e.def.flying?5.3:1.02);o.position.set(n+.5,u,r+.5);const h=Math.PI*2*t/Math.max(1,e.groupSize),f=e.intelligent?3.2:1.6,m={id:c,sourceType:"site",sourceKey:e.key,biome:e.biome,kind:"mob",key:e.def.key,name:e.def.name,hostile:!0,flying:!!e.def.flying,intelligent:e.intelligent,speed:e.def.speed,mesh:o,rig:l,vx:0,vz:0,wanderTimer:.6+se(c,n,8111)*2,attackTimer:0,homeY:u,homeX:e.x+Math.cos(h)*f,homeZ:e.z+Math.sin(h)*f,patrolRadius:e.intelligent?7.5:10,animPhase:se(c,n,9201)*Math.PI*2,groupId:e.key,groupCenterY:a+1.02,maxHealth:e.def.health,health:e.def.health,dropItem:e.def.drop,damageFlash:0,shootCooldown:0,faction:cn.NEUTRAL,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:ps(e.def.key,l?.type,!1)};return Vs(m),Xs(m),this.entities.set(c,m),this.attachEntityMesh(m),c}spawnWizardAt(e,t,n,s,r="wizard-site"){const{root:a,rig:o}=ds(di,!0,!1),l=this.nextId++,c=t+1.02;a.position.set(e+.5,c,n+.5);const u={id:l,sourceType:r,sourceKey:s,biome:this.world.getBiomeAt(e,n),kind:"mob",key:di.key,name:di.name,hostile:!0,flying:!1,intelligent:!0,speed:di.speed,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.8+se(l,e,8133)*2.4,attackTimer:0,homeY:c,homeX:e+.5,homeZ:n+.5,patrolRadius:6.5,animPhase:se(l,e,9247)*Math.PI*2,groupId:s,maxHealth:di.health,health:di.health,dropItem:di.drop,damageFlash:0,shootCooldown:1.7+se(l,n,6329)*.9,faction:cn.OREUM,targetEntityId:null,aimPitch:0,aimYawLocal:0,ranged:!0,wizardCaster:!0,meleeCooldown:0,modelYawOffset:ps(di.key,o?.type,!1)};return Vs(u),Xs(u),this.entities.set(l,u),this.attachEntityMesh(u),u}spawnSkeletonGroupMember(e,t,n,s,r,a=0,o="wizard-site"){const{root:l,rig:c}=ds(Kn,!0,!1),u=se(e*19+a,n*13+this.nextId,this.world.seed+9123)>.5?d.BOW:d.STONE_SWORD,h=this.nextId++,f=t+1.02;l.position.set(e+.5,f,n+.5);const m={id:h,sourceType:o,sourceKey:s,biome:this.world.getBiomeAt(e,n),kind:"mob",key:Kn.key,name:Kn.name,hostile:!0,flying:!1,intelligent:!0,speed:Kn.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.5+se(h,e,8119)*1.8,attackTimer:0,homeY:f,homeX:e+.5,homeZ:n+.5,patrolRadius:5.5,animPhase:se(h,n,9231)*Math.PI*2,groupId:s,leaderId:r?.id??null,leaderOffsetAngle:Math.PI*2*a/5,leaderOffsetRadius:2.8+se(h,e,8117)*2.3,maxHealth:Kn.health,health:Kn.health,dropItem:Kn.drop,damageFlash:0,ranged:u===d.BOW,shootCooldown:1.1+se(e,n,6311)*.8,faction:cn.OREUM,targetEntityId:null,aimPitch:0,aimYawLocal:0,meleeCooldown:0,modelYawOffset:ps(Kn.key,c?.type,!1)};return Vs(m),Xs(m),this.attachHeldItem(m,u,1),this.entities.set(h,m),this.attachEntityMesh(m),m}findSkeletonSpawnerPosition(e,t,n){const s=[[2,0],[-2,0],[0,2],[0,-2],[3,1],[-3,-1],[1,-3],[-1,3]];for(const[r,a]of s){const o=e+r,l=n+a,c=pi(this.world,o,l);if(!(Math.abs(c-t)>5)&&this.world.getBlock(o,c+1,l)===d.AIR&&this.world.getBlock(o,c+2,l)===d.AIR)return{x:o+.5,y:c+1.02,z:l+.5,homeY:c+1.02}}return this.world.getBlock(e,t+1,n)===d.AIR&&this.world.getBlock(e,t+2,n)===d.AIR?{x:e+.5,y:t+1.02,z:n+.5,homeY:t+1.02}:null}spawnSkeletonFromSpawner(e,t,n,s){const r=this.findSkeletonSpawnerPosition(e,t,n);return r?this.spawnSkeletonGroupMember(e,r.homeY-1.02,n,s,null,0,"spawner")?.id??null:null}spawnMob(e,t,n,s){const r=e.cx*J+2+Math.floor(se(e.cx,e.cz,s?443:223)*12),a=e.cz*J+2+Math.floor(se(e.cx,e.cz,s?877:557)*12),o=pi(this.world,r,a),{root:l,rig:c}=ds(n,s,!1),u=this.nextId++,h=o+(n.flying?5.3:1.02);l.position.set(r+.5,h,a+.5);const f={id:u,sourceType:"chunk",sourceKey:e.key,biome:t,kind:"mob",key:n.key,name:n.name,hostile:s,flying:!!n.flying,intelligent:!1,speed:n.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.3+se(u,r,8111)*2,attackTimer:0,homeY:h,homeX:r,homeZ:a,patrolRadius:9,animPhase:se(u,r,9201)*Math.PI*2,groupId:null,maxHealth:s?50:30,health:s?50:30,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,faction:cn.NEUTRAL,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:ps(n.key,c?.type,!1)};return s&&(Vs(f),Xs(f)),this.entities.set(u,f),this.attachEntityMesh(f),u}spawnQuestGiver(e,t){const n=e.cx*J+4+Math.floor(se(e.cx,e.cz,1201)*8),s=e.cz*J+4+Math.floor(se(e.cx,e.cz,1202)*8),r=pi(this.world,n,s),{root:a,rig:o}=ds({},!1,!0),l=this.nextId++;a.position.set(n+.5,r+1.02,s+.5);const c={id:l,sourceType:"chunk",sourceKey:e.key,biome:t,kind:"mob",questgiver:!0,key:"questgiver",name:`Quest Giver (${g_[t]})`,hostile:!1,flying:!1,intelligent:!1,speed:1.05,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.6+se(l,n,8111)*2,attackTimer:0,homeY:r+1.02,homeX:n,homeZ:s,patrolRadius:7,animPhase:0,groupId:null,maxHealth:34,health:34,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,faction:cn.HUMAN,targetEntityId:null,aimPitch:0,aimYawLocal:0,modelYawOffset:ps("questgiver",o?.type,!0)};return this.entities.set(l,c),this.attachEntityMesh(c),l}removeEntity(e){const t=this.entities.get(e);t&&(this.scene.remove(t.mesh),t.mesh.traverse(n=>{!n.isMesh&&!n.isSprite||(n.geometry?.dispose?.(),n.material?.dispose?.(),n.material?.map&&n.material.map.dispose?.())}),this.entities.delete(e))}getEntityFromObject(e){let t=e;for(;t;){if(t.userData&&t.userData.entityId!==void 0)return this.entities.get(t.userData.entityId)??null;t=t.parent}return null}attackFromRay(e,t,n,s){let r=null,a=n;const o=new A,l=new A;for(const c of this.entities.values()){if(c.kind!=="mob"||c.health<=0)continue;const u=uu(c);o.set(c.mesh.position.x-u.halfX,c.mesh.position.y+u.centerY-u.halfY,c.mesh.position.z-u.halfZ),l.set(c.mesh.position.x+u.halfX,c.mesh.position.y+u.centerY+u.halfY,c.mesh.position.z+u.halfZ);const h=hu(e,t,o,l);h===null||h>n||h<a&&(a=h,r=c)}return r?this.damageEntity(r,s):null}attackNearestInFront(e,t,n,s,r){return this.attackFromRay(e,t,n,r)}hitEntityOnSegment(e,t,n=null,s=null){const r=new A().subVectors(t,e),a=r.length();if(a<1e-6)return null;r.divideScalar(a);const o=new A,l=new A;let c=null,u=a;for(const h of this.entities.values()){if(h.kind!=="mob"||h.health<=0||n!==null&&h.id===n||s&&!s(h))continue;const f=uu(h);o.set(h.mesh.position.x-f.halfX,h.mesh.position.y+f.centerY-f.halfY,h.mesh.position.z-f.halfZ),l.set(h.mesh.position.x+f.halfX,h.mesh.position.y+f.centerY+f.halfY,h.mesh.position.z+f.halfZ);const m=hu(e,r,o,l);m===null||m>a||m<u&&(u=m,c=h)}return c}areEntitiesHostile(e,t){const n=this.entities.get(e),s=this.entities.get(t);return!n||!s?!1:au(n.faction,s.faction)}findNearestFactionTarget(e,t){if(!e?.faction||e.faction===cn.NEUTRAL)return null;let n=null,s=t*t;for(const r of this.entities.values()){if(r.id===e.id||r.kind!=="mob"||r.health<=0||!au(e.faction,r.faction))continue;const a=r.mesh.position.x-e.mesh.position.x,o=r.mesh.position.y-e.mesh.position.y,l=r.mesh.position.z-e.mesh.position.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}damageEntity(e,t){if(!e||e.kind!=="mob")return null;if(!e.hostile&&!e.provoked&&(e.provoked=!0,e.healthSprite||Vs(e),e.damageHalo||Xs(e)),e.health=Math.max(0,e.health-t),e.damageFlash=.25,e.healthSprite&&fh(e),e.health<=0){const n={name:e.name,key:e.key,dropItem:e.dropItem},s=!!e.questgiver;return this.removeEntity(e.id),e.hostile&&this.onEnemyKilled(n),s&&this.onQuestGiverKilled(e),{killed:!0,...n}}return{killed:!1,name:e.name,key:e.key}}damageEntitiesInRadius(e,t,n,s=null,r=null){const a=t*t;for(const o of this.entities.values()){if(o.kind!=="mob"||o.health<=0||s!==null&&o.id===s||r&&!r(o))continue;const l=o.mesh.position.x-e.x,c=o.mesh.position.y-e.y,u=o.mesh.position.z-e.z,h=l*l+c*c+u*u;if(h>a)continue;const f=Math.max(.35,1-Math.sqrt(h)/t);this.damageEntity(o,Math.max(1,Math.round(n*f)))}}spawnHostilesNear(e){const t=Ze(e.x-kt,hi),n=Ze(e.x+kt,hi),s=Ze(e.z-kt,hi),r=Ze(e.z+kt,hi);for(let a=s;a<=r;a++)for(let o=t;o<=n;o++){const l=this.getHostileSite(o,a);if(!l)continue;const c=l.x-e.x,u=l.z-e.z;c*c+u*u>kt*kt||this.spawnHostileSite(l)}}getWizardGroupSite(e,t){const n=`${e},${t}`;if(this.wizardGroupSites.has(n))return this.wizardGroupSites.get(n);if(se(e,t,99101)>xs.wizardGroupChance)return this.wizardGroupSites.set(n,null),null;const r=72,a=e*fi+r+Math.floor(se(e,t,99111)*(fi-r*2)),o=t*fi+r+Math.floor(se(e,t,99121)*(fi-r*2)),l=2+(se(e,t,99131)*4|0),c={key:n,x:a,z:o,groupSize:l};return this.wizardGroupSites.set(n,c),c}spawnWizardGroup(e,t="wizard-site"){if(this.wizardGroupSpawns.has(e.key))return;const n=[],s=pi(this.world,e.x,e.z),r=this.spawnWizardAt(e.x,s,e.z,e.key,t);if(r){n.push(r.id);for(let a=0;a<e.groupSize;a++){const o=se(a,e.x,99201)*Math.PI*2,l=2.4+se(a,e.z,99211)*3.6,c=Math.floor(e.x+Math.cos(o)*l),u=Math.floor(e.z+Math.sin(o)*l),h=pi(this.world,c,u),f=this.spawnSkeletonGroupMember(c,h,u,e.key,r,a+1,t);f&&n.push(f.id)}this.wizardGroupSpawns.set(e.key,n)}}spawnNightMobs(e,t){if(!this.isNight(t))return;for(const o of this.world.loaded.values()){const l=o.cx*J+J*.5,c=o.cz*J+J*.5,u=this.world.getBiomeAt(l,c);if(u!==Ue.PLAINS&&u!==Ue.TUNDRA)continue;const h=`night:${o.key}`,m=(this.nightChunkSpawns.get(h)??[]).filter(_=>this.entities.has(_));if(m.length>0)this.nightChunkSpawns.set(h,m);else if(se(o.cx,o.cz,99301)<=xs.nightSkeletonChunkChance){const x=this.spawnMob(o,u,Kn,!0),g=this.entities.get(x);g&&(g.faction=cn.OREUM,g.ranged=se(o.cx,o.cz,99311)>.5,g.shootCooldown=.9+se(o.cx,o.cz,99321)*.8,g.ranged?this.attachHeldItem(g,d.BOW,1):this.attachHeldItem(g,d.STONE_SWORD,1),g.sourceType="night-chunk",g.sourceKey=h,this.nightChunkSpawns.set(h,[x]))}}const n=Ze(e.x-kt,fi),s=Ze(e.x+kt,fi),r=Ze(e.z-kt,fi),a=Ze(e.z+kt,fi);for(let o=r;o<=a;o++)for(let l=n;l<=s;l++){const c=this.getWizardGroupSite(l,o);if(!c)continue;const u=c.x-e.x,h=c.z-e.z;u*u+h*h>kt*kt||this.spawnWizardGroup(c)}}syncSpawns(e,t){for(const r of this.world.loaded.values())this.spawnForChunk(r),this.spawnSettlementForChunk(r);this.spawnHostilesNear(e),this.syncSkeletonSpawnerSpawns(e),this.syncWizardGroupSpawners(e),this.spawnNightMobs(e,t);const n=(ki+6)*J,s=n*n;for(const[r,a]of this.entities){const o=a.mesh.position.x-e.x,l=a.mesh.position.z-e.z;o*o+l*l>s&&this.removeEntity(r)}for(const[r,a]of this.chunkSpawns.entries())a.some(o=>this.entities.has(o))||this.chunkSpawns.delete(r);for(const[r,a]of this.settlementSpawns.entries())a.some(o=>this.entities.has(o))||this.settlementSpawns.delete(r);for(const[r,a]of this.hostileSiteSpawns.entries())a.some(o=>this.entities.has(o))||this.hostileSiteSpawns.delete(r);for(const[r,a]of this.wizardGroupSpawns.entries())a.some(o=>this.entities.has(o))||this.wizardGroupSpawns.delete(r);for(const[r,a]of this.nightChunkSpawns.entries())a.some(o=>this.entities.has(o))||this.nightChunkSpawns.delete(r);if(!this.isNight(t)){for(const[r,a]of this.entities)(a.sourceType==="night-chunk"||a.sourceType==="wizard-site")&&this.removeEntity(r);this.nightChunkSpawns.clear(),this.wizardGroupSpawns.clear()}}syncSkeletonSpawnerSpawns(e){const t=new Set,n=kt*kt;for(const[s,r]of this.world.modified.entries()){const a=this.world.loaded.get(s);if(a)for(const[o,l]of r.entries()){if(l!==d.SKELETON_SPAWNER)continue;const c=o%J,h=Math.floor(o/J)%J,f=Math.floor(o/(J*J)),m=a.cx*J+c,_=a.cz*J+h,x=m+.5-e.x,g=_+.5-e.z;if(x*x+g*g>n)continue;const p=`${m},${f},${_}`;t.add(p);const b=(this.skeletonSpawnerSpawns.get(p)??[]).filter(P=>this.entities.has(P));if(b.length>0){this.skeletonSpawnerSpawns.set(p,b);continue}const E=this.spawnSkeletonFromSpawner(m,f,_,p);E&&this.skeletonSpawnerSpawns.set(p,[E])}}for(const[s,r]of this.skeletonSpawnerSpawns.entries())if(!t.has(s)){for(const a of r)this.removeEntity(a);this.skeletonSpawnerSpawns.delete(s)}}syncWizardGroupSpawners(e){const t=new Set,n=kt*kt;for(const[s,r]of this.world.modified.entries()){const a=this.world.loaded.get(s);if(a)for(const[o,l]of r.entries()){if(l!==d.WIZARD_GROUP_SPAWNER)continue;const c=o%J,h=Math.floor(o/J)%J,f=Math.floor(o/(J*J)),m=a.cx*J+c,_=a.cz*J+h,x=m+.5-e.x,g=_+.5-e.z;if(x*x+g*g>n)continue;const p=`wizard-spawner:${m},${f},${_}`;t.add(p);const b=(this.wizardGroupSpawns.get(p)??[]).filter(E=>this.entities.has(E));if(b.length>0){this.wizardGroupSpawns.set(p,b);continue}this.spawnWizardGroup({key:p,x:m,z:_,groupSize:2+(se(m,_,99511)*4|0)},"wizard-spawner")}}for(const[s,r]of this.wizardGroupSpawns.entries())if(s.startsWith("wizard-spawner:")&&!t.has(s)){for(const a of r)this.removeEntity(a);this.wizardGroupSpawns.delete(s)}}animateEntity(e,t,n,s){if(!e.rig)return;const r=e.rig,a=n>.04,o=a?Math.min(.55,n*.16):.05;e.animPhase+=t*(a?8+n*2.4:2.2);for(let l=0;l<r.legs.length;l++){const c=r.legs[l],u=e.animPhase+(l%2===0?0:Math.PI);c.rotation.x=Math.sin(u)*o}for(let l=0;l<r.arms.length;l++){const c=r.arms[l],u=e.animPhase+(l%2===0?Math.PI:0);c.rotation.x=Math.sin(u)*(o*.9)}if(e.aimingBow&&r.arms[1]?(r.arms[1].rotation.x=-Math.PI*.48+(e.aimPitch??0),r.arms[1].rotation.y=e.aimYawLocal??0,r.arms[1].rotation.z=0,r.arms[0]&&(r.arms[0].rotation.x=-Math.PI*.36+(e.aimPitch??0)*.55,r.arms[0].rotation.y=(e.aimYawLocal??0)*.35,r.arms[0].rotation.z=.08),e.heldAnchor&&(e.heldAnchor.position.set(.02,-.08,.18),e.heldAnchor.rotation.set(-.24,.02,.02))):e.heldAnchor&&(e.heldAnchor.position.set(.05,-.3,.02),e.heldAnchor.rotation.set(.08,.04,-.08)),r.wings.length>0){const l=Math.sin(s*16+e.id)*(a?.7:.3);r.wings[0].rotation.z=l,r.wings[1]&&(r.wings[1].rotation.z=-l)}r.tail&&(r.tail.rotation.y=Math.sin(s*5+e.id)*.35,r.tail.rotation.x=Math.cos(s*4+e.id)*.12),r.head&&(r.head.rotation.x=Math.sin(s*2.7+e.id)*.05)}updateEntity(e,t,n,s,r,a=null,o=null){const l=e.mesh.position;if(e.leaderId){const b=this.entities.get(e.leaderId);b&&(e.homeX=b.mesh.position.x+Math.cos(e.leaderOffsetAngle??0)*(e.leaderOffsetRadius??3),e.homeZ=b.mesh.position.z+Math.sin(e.leaderOffsetAngle??0)*(e.leaderOffsetRadius??3),e.homeY=b.mesh.position.y)}const c=this.findNearestFactionTarget(e,e.ranged?23:8.8),u=c?c.mesh.position:t,h=c?{x:c.vx??0,z:c.vz??0}:o,f=u.x-l.x,m=u.z-l.z,_=Math.hypot(f,m);e.targetEntityId=c?.id??null,e.aimingBow=!1,e.aimPitch=0,e.aimYawLocal=0;const x=e.hostile&&r,g=!!c;if((g||x)&&e.ranged&&_<23){e.shootCooldown=Math.max(0,e.shootCooldown-n);const b=9.5;if(_>15.5){const y=_>.001?1/_:0;e.vx=f*y*e.speed*.95,e.vz=m*y*e.speed*.95}else if(_<b){const y=_>.001?1/_:0;e.vx=-f*y*e.speed*.8,e.vz=-m*y*e.speed*.8}else e.vx*=Math.max(0,1-n*5),e.vz*=Math.max(0,1-n*5);const P=new A(u.x,u.y+.9,u.z);if(h){const y=_/ou;P.x+=h.x*y*.55,P.z+=h.z*y*.55}const I=new A(l.x,l.y+1.12,l.z),C=wx(I,P,ou);a&&C&&e.shootCooldown<=0&&Yx(this.world,I,P)&&(e.wizardCaster?a.fireWizardFireball(I,P.clone().sub(I),e.id):a.fireSkeletonArrow(I,C,e.id),e.shootCooldown=1.15+se(e.id,s*7|0,7071)*.35);const D=Math.max(.001,Math.hypot(C?.x??f,C?.z??m));e.aimPitch=Math.atan2(C?.y??0,D),e.aimYawLocal=0,e.aimingBow=!0,l.y=e.homeY}else if((g||x)&&_<8.8){const b=_>.001?1/_:0;e.vx=f*b*e.speed*1.25,e.vz=m*b*e.speed*1.25,e.attackTimer+=n*7,l.y=e.homeY+Math.sin(e.attackTimer)*.2,e.meleeCooldown=Math.max(0,(e.meleeCooldown??0)-n),c&&e.meleeCooldown<=0&&_<1.85&&(this.damageEntity(c,e.questgiver?8:10),e.meleeCooldown=.65)}else{if(e.wanderTimer-=n,e.wanderTimer<=0){const b=se(s*10|0,e.id,7001)*Math.PI*2,E=e.speed*(e.intelligent?.55:.75);e.vx=Math.cos(b)*E,e.vz=Math.sin(b)*E,e.wanderTimer=1.8+se(e.id,s*4|0,7002)*3.2}if(!e.hostile&&!g&&e.provoked&&_<7.2){const b=_>.001?1/_:0;e.vx=-f*b*e.speed*1.15,e.vz=-m*b*e.speed*1.15}if(e.hostile||g){const b=e.homeX-l.x,E=e.homeZ-l.z,P=Math.hypot(b,E);if(P>e.patrolRadius){const I=P>.001?1/P:0;e.vx=b*I*e.speed*.9,e.vz=E*I*e.speed*.9}}e.flying&&(l.y=e.homeY+Math.sin(s*2.3+e.id)*.7)}l.x+=e.vx*n,l.z+=e.vz*n;const p=pi(this.world,l.x,l.z);if(!e.flying){const b=p+1.02;Math.abs(b-e.homeY)<4?(e.homeY=b,l.y=b):(e.vx*=-.8,e.vz*=-.8)}e.damageHalo&&(e.damageFlash=Math.max(0,e.damageFlash-n),e.damageHalo.material.opacity=e.damageFlash>0?.7*(e.damageFlash/.25):0),this.tmpDir.set(e.vx,0,e.vz);const T=this.tmpDir.length();e.aimingBow?e.mesh.rotation.y=-Math.atan2(m,f)+(e.modelYawOffset??0):T>.001&&(e.mesh.rotation.y=-Math.atan2(e.vz,e.vx)+(e.modelYawOffset??0)),this.animateEntity(e,n,T,s)}update(e,t,n,s=!0,r=null,a=null){this.spawnTick+=t,this.spawnTick>=1&&(this.syncSpawns(e,n),this.spawnTick=0);for(const o of this.entities.values())this.updateEntity(o,e,t,n,s,r,a)}countHostilesInRange(e,t){const n=t*t;let s=0;for(const r of this.entities.values()){if(!r.hostile||r.kind!=="mob")continue;const a=r.mesh.position.x-e.x,o=r.mesh.position.y-e.y,l=r.mesh.position.z-e.z;a*a+o*o+l*l<=n&&s++}return s}getNearestQuestGiver(e,t=4){let n=null,s=t*t;for(const r of this.entities.values()){if(!r.questgiver)continue;const a=r.mesh.position.x-e.x,o=r.mesh.position.y-e.y,l=r.mesh.position.z-e.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}getNearestTalker(e,t=4){let n=null,s=t*t;for(const r of this.entities.values()){if(!r.talker&&!r.questgiver)continue;const a=r.mesh.position.x-e.x,o=r.mesh.position.y-e.y,l=r.mesh.position.z-e.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}}const $n=1e-4;class Kx{constructor(e,t){this.camera=e,this.domElement=t,this.position=new A(0,40,0),this.velocity=new A(0,0,0),this.yaw=0,this.pitch=0,this.grounded=!1,this.flyMode=!1,this.jumpQueued=!1,this.lastSpaceTap=-9999,this.keys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1,Space:!1},this.isLocked=!1,this.tmpForward=new A,this.tmpRight=new A,this.tmpMove=new A,this.walkSpeed=t_,this.sneakSpeed=n_,this.flySpeed=i_,this.bindInput(),this.syncCamera()}setMovementSpeeds(e,t){this.walkSpeed=Math.max(1,e),this.sneakSpeed=Math.max(.5,this.walkSpeed*.5),this.flySpeed=Math.max(1,Math.min(300,t))}bindInput(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",e=>{if(!this.isLocked)return;const t=.0022;this.yaw-=e.movementX*t,this.pitch-=e.movementY*t;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch))}),document.addEventListener("keydown",e=>{if(e.code in this.keys){if(e.repeat)return;if(e.code==="Space"){const t=performance.now();t-this.lastSpaceTap<=o_?(this.flyMode=!this.flyMode,this.flyMode?this.velocity.y=0:this.velocity.y=Math.min(this.velocity.y,0),this.lastSpaceTap=-9999):(this.lastSpaceTap=t,this.flyMode||(this.jumpQueued=!0))}this.keys[e.code]=!0}}),document.addEventListener("keyup",e=>{e.code in this.keys&&(this.keys[e.code]=!1)})}getAABB(e=this.position){const t=Gs*.5;return{minX:e.x-t,maxX:e.x+t,minY:e.y,maxY:e.y+Wr,minZ:e.z-t,maxZ:e.z+t}}overlapsSolid(e,t){const n=Math.floor(t.minX),s=Math.floor(t.maxX-$n),r=Math.floor(t.minY),a=Math.floor(t.maxY-$n),o=Math.floor(t.minZ),l=Math.floor(t.maxZ-$n);for(let c=r;c<=a;c++)for(let u=o;u<=l;u++)for(let h=n;h<=s;h++)if(ma(e.getBlock(h,c,u)))return{x:h,y:c,z:u};return null}resolveAxis(e,t,n){if(n===0)return!1;this.position[t]+=n;let s=!1,r;for(;r=this.overlapsSolid(e,this.getAABB(this.position));)s=!0,t==="x"?(n>0?this.position.x=r.x-Gs*.5-$n:this.position.x=r.x+1+Gs*.5+$n,this.velocity.x=0):t==="y"?(n>0?this.position.y=r.y-Wr-$n:(this.position.y=r.y+1+$n,this.grounded=!0),this.velocity.y=0):t==="z"&&(n>0?this.position.z=r.z-Gs*.5-$n:this.position.z=r.z+1+Gs*.5+$n,this.velocity.z=0);return s}update(e,t){const n=this.grounded;if(this.grounded=!1,this.tmpForward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.tmpRight.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.tmpMove.set(0,0,0),this.keys.KeyW&&this.tmpMove.add(this.tmpForward),this.keys.KeyS&&this.tmpMove.sub(this.tmpForward),this.keys.KeyD&&this.tmpMove.add(this.tmpRight),this.keys.KeyA&&this.tmpMove.sub(this.tmpRight),this.tmpMove.lengthSq()>0&&this.tmpMove.normalize(),this.flyMode){const r=this.flySpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=0,this.keys.Space&&(this.velocity.y+=r),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.velocity.y-=r)}else{const r=this.keys.ShiftLeft||this.keys.ShiftRight?this.sneakSpeed:this.walkSpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=Math.max(a_,this.velocity.y-r_*t),this.jumpQueued&&n&&(this.velocity.y=s_,this.grounded=!1),this.jumpQueued=!1}this.resolveAxis(e,"x",this.velocity.x*t),this.resolveAxis(e,"z",this.velocity.z*t),this.resolveAxis(e,"y",this.velocity.y*t),this.position.y<1&&(this.position.y=1,this.velocity.y=0,this.grounded=!0);const s=Et-.1;this.position.y+Wr>s&&(this.position.y=s-Wr,this.velocity.y=0),this.syncCamera()}syncCamera(){this.camera.position.set(this.position.x,this.position.y+e_,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}}const go=[d.FLOWER_RED,d.FLOWER_YELLOW,d.VINE,d.CACTUS,d.MOSS];class $x{constructor(e,t=1){this.ui=e,this.seed=t|0,this.coins=0,this.activeQuest=null,this.questCounter=0,this.ui.updateCoins(this.coins)}addCoins(e){!Number.isFinite(e)||e<=0||(this.coins+=e,this.ui.updateCoins(this.coins))}hasOpenDialogue(){return this.ui.isDialogueOpen()}closeDialogue(){this.ui.closeDialogue()}randomFor(e,t){const n=Math.sin((e+1)*12.9898+(this.seed+t)*78.233)*43758.5453;return n-Math.floor(n)}createQuestFor(e){const t=this.randomFor(e.id,this.questCounter+17),n=go[Math.floor(t*go.length)%go.length],s=4+Math.floor(this.randomFor(e.id,this.questCounter+99)*5)%5,r=8+s*3;return this.questCounter+=1,{id:this.questCounter,giverId:e.id,giverName:e.name,target:n,amount:s,reward:r,status:"active"}}getQuestProgress(e){return this.ui.getItemCount(e.target)}onTalkToQuestGiver(e){const t=e.name;if(!this.activeQuest){const a=this.createQuestFor(e),o=Nt[a.target].name;this.ui.openDialogue(t,`Traveler, I need ${a.amount} ${o} for my camp. Bring them to me and I will pay ${a.reward} coins.`,[{label:"Accept quest",onSelect:()=>{this.activeQuest=a,this.ui.openDialogue(t,`Quest accepted:
Collect ${a.amount} ${o}.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Maybe later",onSelect:()=>this.ui.closeDialogue()}]);return}if(this.activeQuest.giverId!==e.id){this.ui.openDialogue(t,`I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}const n=this.activeQuest,s=Nt[n.target].name,r=this.getQuestProgress(n);if(r>=n.amount){this.ui.openDialogue(t,`You brought the ${s}! Hand over ${n.amount} and collect ${n.reward} coins?`,[{label:"Turn in quest",onSelect:()=>{if(!this.ui.consumeItem(n.target,n.amount)){this.ui.openDialogue(t,"Looks like you no longer have the items.",[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}this.addCoins(n.reward),this.activeQuest=null,this.ui.openDialogue(t,`Excellent work. Here are ${n.reward} coins.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Not now",onSelect:()=>this.ui.closeDialogue()}]);return}this.ui.openDialogue(t,`Progress: ${r}/${n.amount} ${s}. Keep searching.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}getActiveQuestText(){if(!this.activeQuest)return"";const e=this.activeQuest,t=this.getQuestProgress(e);return`Quest: ${e.giverName} wants ${e.amount} ${Nt[e.target].name} (${Math.min(t,e.amount)}/${e.amount})`}cancelQuestForGiver(e){!this.activeQuest||this.activeQuest.giverId!==e||(this.activeQuest=null,this.ui.isDialogueOpen()&&this.ui.closeDialogue())}}function Zx(i,e,t,n){const s=t.x>0?1:-1,r=t.y>0?1:-1,a=t.z>0?1:-1;let o=Math.floor(e.x),l=Math.floor(e.y),c=Math.floor(e.z);const u=t.x===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),h=t.y===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),f=t.z===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z),m=o+(t.x>0?1:0),_=l+(t.y>0?1:0),x=c+(t.z>0?1:0);let g=t.x===0?Number.POSITIVE_INFINITY:Math.abs((m-e.x)/t.x),p=t.y===0?Number.POSITIVE_INFINITY:Math.abs((_-e.y)/t.y),T=t.z===0?Number.POSITIVE_INFINITY:Math.abs((x-e.z)/t.z);const b=new A(o,l,c);for(;;){const E=i.getBlock(o,l,c);if(E!==0)return{x:o,y:l,z:c,id:E,previous:b.clone()};if(g<p)if(g<T){if(g>n)break;b.set(o,l,c),o+=s,g+=u}else{if(T>n)break;b.set(o,l,c),c+=a,T+=f}else if(p<T){if(p>n)break;b.set(o,l,c),l+=r,p+=h}else{if(T>n)break;b.set(o,l,c),c+=a,T+=f}}return null}const ve=16,Kr=6,fu=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","water","bedrock","snow","cactus_side","cactus_top","flower_red","flower_yellow","vine","gravel","moss","castle_brick","apple","plank","bramble","skeleton_spawner","wizard_group_spawner","iron_ore","coal_ore","gold_ore","furnace"];function _t(i,e,t=12,n=1){const[s,r,a]=e,o=i.createImageData(ve,ve);for(let l=0;l<o.data.length;l+=4){const c=Math.random()*t-t*.5|0;o.data[l]=Math.max(0,Math.min(255,s+c)),o.data[l+1]=Math.max(0,Math.min(255,r+c)),o.data[l+2]=Math.max(0,Math.min(255,a+c)),o.data[l+3]=Math.floor(255*n)}i.putImageData(o,0,0)}function jx(i){const e=document.createElement("canvas");e.width=ve,e.height=ve;const t=e.getContext("2d",{willReadFrequently:!0});if(i==="grass_top")_t(t,[64,164,68],26);else if(i==="grass_side"){_t(t,[126,94,62],18),t.fillStyle="rgba(72, 170, 80, 0.9)",t.fillRect(0,0,ve,4),t.fillStyle="rgba(60, 120, 42, 0.35)";for(let n=0;n<ve;n+=2)t.fillRect(n,3+n*7%3,1,1)}else if(i==="dirt")_t(t,[121,86,55],20);else if(i==="stone")_t(t,[126,126,130],20);else if(i==="sand")_t(t,[214,198,128],20);else if(i==="log_side"){_t(t,[121,90,58],18),t.fillStyle="rgba(90, 58, 30, 0.28)";for(let n=0;n<ve;n+=4)t.fillRect(n,0,2,ve)}else if(i==="log_top")_t(t,[159,122,82],10),t.strokeStyle="rgba(108, 74, 43, 0.75)",t.lineWidth=1,t.strokeRect(2.5,2.5,ve-5,ve-5),t.strokeRect(5.5,5.5,ve-11,ve-11);else if(i==="leaves")_t(t,[63,145,64],36,.8);else if(i==="water")_t(t,[62,119,212],16,.72),t.fillStyle="rgba(160, 210, 255, 0.2)",t.fillRect(0,2,ve,2),t.fillRect(0,9,ve,1);else if(i==="bedrock"){_t(t,[52,52,52],28),t.fillStyle="rgba(96,96,96,0.32)";for(let n=0;n<24;n++)t.fillRect(Math.random()*ve|0,Math.random()*ve|0,1,1)}else if(i==="snow"){_t(t,[230,238,244],9),t.fillStyle="rgba(188, 206, 220, 0.4)";for(let n=0;n<ve;n+=3)t.fillRect(n,n*5%ve,1,1)}else if(i==="cactus_side"){_t(t,[54,146,66],15),t.fillStyle="rgba(36,98,44,0.42)";for(let n=1;n<ve;n+=3)t.fillRect(n,0,1,ve)}else if(i==="cactus_top")_t(t,[70,152,80],14),t.fillStyle="rgba(35,93,42,0.6)",t.fillRect(3,3,ve-6,ve-6);else if(i==="flower_red")t.clearRect(0,0,ve,ve),t.fillStyle="rgba(56,144,62,0.85)",t.fillRect(7,5,2,11),t.fillStyle="rgba(196,34,44,0.92)",t.fillRect(5,2,6,4);else if(i==="flower_yellow")t.clearRect(0,0,ve,ve),t.fillStyle="rgba(56,146,64,0.85)",t.fillRect(7,5,2,11),t.fillStyle="rgba(242,199,44,0.92)",t.fillRect(5,2,6,4);else if(i==="vine"){t.clearRect(0,0,ve,ve),t.fillStyle="rgba(48,128,52,0.72)";for(let n=0;n<6;n++){const s=2+n*5%12;t.fillRect(s,1+n*2,2,3)}}else if(i==="gravel"){_t(t,[132,128,121],22),t.fillStyle="rgba(88,84,81,0.25)";for(let n=0;n<16;n++)t.fillRect(Math.random()*ve|0,Math.random()*ve|0,1,1)}else if(i==="moss"){_t(t,[80,126,64],18),t.fillStyle="rgba(36,74,30,0.18)";for(let n=0;n<16;n++)t.fillRect(Math.random()*ve|0,Math.random()*ve|0,2,1)}else if(i==="castle_brick"){_t(t,[118,117,124],12),t.fillStyle="rgba(68,68,74,0.48)";for(let n=0;n<ve;n+=4)t.fillRect(0,n,ve,1);for(let n=0;n<ve;n+=8)t.fillRect(n,0,1,4),t.fillRect(n+4,4,1,4),t.fillRect(n,8,1,4),t.fillRect(n+4,12,1,4)}else if(i==="apple")t.clearRect(0,0,ve,ve),t.fillStyle="rgba(196,36,36,0.92)",t.fillRect(4,4,8,8),t.fillStyle="rgba(232,120,120,0.55)",t.fillRect(5,5,3,3),t.fillStyle="rgba(76,138,58,0.8)",t.fillRect(7,2,2,2),t.fillStyle="rgba(112,84,38,0.8)",t.fillRect(8,1,1,2);else if(i==="plank"){_t(t,[170,128,84],14),t.fillStyle="rgba(105,72,40,0.38)";for(let n=0;n<ve;n+=4)t.fillRect(0,n,ve,1);for(let n=2;n<ve;n+=6)t.fillRect(n,1,1,ve-2)}else if(i==="bramble"){t.clearRect(0,0,ve,ve),t.fillStyle="rgba(61,106,45,0.85)";for(let n=0;n<5;n++)t.fillRect(2+n*3,5+n%2,2,9);t.fillStyle="rgba(112,68,42,0.8)",t.fillRect(4,10,9,2),t.fillRect(5,6,7,2),t.fillStyle="rgba(220,220,210,0.95)";for(let n=0;n<6;n++)t.fillRect(2+n*11%11,4+n*7%8,1,1)}else if(i==="skeleton_spawner"){_t(t,[70,74,82],10),t.fillStyle="rgba(36,38,44,0.92)",t.fillRect(2,2,ve-4,ve-4),t.fillStyle="rgba(136,142,150,0.9)";for(let n=3;n<=ve-4;n+=4)t.fillRect(n,1,1,ve-2);for(let n=3;n<=ve-4;n+=4)t.fillRect(1,n,ve-2,1);t.fillStyle="rgba(224,224,214,0.95)",t.fillRect(5,5,6,5),t.fillRect(4,10,8,3),t.fillStyle="rgba(24,24,26,0.95)",t.fillRect(6,7,1,1),t.fillRect(9,7,1,1),t.fillRect(7,10,2,1)}else if(i==="wizard_group_spawner"){_t(t,[74,58,106],14),t.fillStyle="rgba(30,22,48,0.92)",t.fillRect(2,2,ve-4,ve-4),t.strokeStyle="rgba(168,112,255,0.9)",t.lineWidth=1,t.strokeRect(2.5,2.5,ve-5,ve-5),t.fillStyle="rgba(96,70,150,0.85)";for(let n=3;n<=ve-4;n+=4)t.fillRect(n,2,1,ve-4);t.fillStyle="rgba(255,186,76,0.95)",t.fillRect(7,3,2,3),t.fillRect(6,6,4,2),t.fillStyle="rgba(226,220,255,0.96)",t.fillRect(5,9,6,4),t.fillRect(4,13,8,1)}else i==="iron_ore"?(_t(t,[126,126,130],20),t.fillStyle="rgba(178,124,74,0.95)",t.fillRect(3,3,3,3),t.fillRect(9,4,4,3),t.fillRect(5,9,3,3),t.fillRect(11,10,2,3)):i==="coal_ore"?(_t(t,[126,126,130],20),t.fillStyle="rgba(38,38,42,0.95)",t.fillRect(2,4,3,3),t.fillRect(8,3,4,4),t.fillRect(5,10,4,3),t.fillRect(11,11,3,2)):i==="gold_ore"?(_t(t,[126,126,130],20),t.fillStyle="rgba(220,184,62,0.95)",t.fillRect(3,3,3,3),t.fillRect(8,4,5,3),t.fillRect(4,10,3,3),t.fillRect(10,10,3,3)):i==="furnace"&&(_t(t,[104,106,112],14),t.fillStyle="rgba(62, 64, 70, 0.95)",t.fillRect(2,2,12,12),t.strokeStyle="rgba(150, 152, 158, 0.65)",t.strokeRect(1.5,1.5,13,13),t.fillStyle="rgba(26, 28, 32, 0.95)",t.fillRect(4,6,8,6),t.fillStyle="rgba(232, 142, 38, 0.95)",t.fillRect(6,8,4,2));return e}function Jx(){const i=Math.ceil(fu.length/Kr),e=document.createElement("canvas");e.width=Kr*ve,e.height=i*ve;const t=e.getContext("2d"),n={};fu.forEach((c,u)=>{const h=u%Kr,f=Math.floor(u/Kr);n[c]={tx:h,ty:f},t.drawImage(jx(c),h*ve,f*ve)});const s=new cr(e);s.magFilter=dn,s.minFilter=ff,s.generateMipmaps=!0,s.colorSpace=Ht;const r=1/e.width,a=1/e.height;function o(c){const u=n[c],h=.02,f=(u.tx*ve+h)*r,m=1-((u.ty+1)*ve-h)*a,_=((u.tx+1)*ve-h)*r,x=1-(u.ty*ve+h)*a;return[f,m,_,x]}function l(c,u){const f=Nt[c].textures,m=f.all?f.all:u===gi.PY?f.top:u===gi.NY?f.bottom:f.side;return o(m)}return{texture:s,getFaceUVs:l}}const ms=56,Qx=.45,$r=9;class ev{constructor(e,t=1337){this.scene=e,this.seed=t|0,this.windDir=new ke(.93,.37).normalize(),this.windSpeed=1.9,this.clouds=new Map,this.syncTimer=0,this.daylight=1,this.material=new ii({color:15856887,transparent:!1,depthWrite:!0})}cloudinessAt(e,t){return Lt(e*.08,t*.08,this.seed+88421,3,2,.5)}shouldSpawnCloud(e,t){const n=this.cloudinessAt(e,t);if(n<.44)return!1;const s=se(e,t,this.seed+88439),r=.18+(n-.44)*1.15;return s<Math.max(0,Math.min(.86,r))}createCloud(e,t){const n=`${e},${t}`;if(this.clouds.has(n)||!this.shouldSpawnCloud(e,t))return;const s=new Wt,r=3+(se(e,t,this.seed+88471)*4|0),a=96+Math.floor(se(e,t,this.seed+88483)*18),o=e*ms+(se(e,t,this.seed+88491)-.5)*ms*.7,l=t*ms+(se(e,t,this.seed+88501)-.5)*ms*.7;for(let c=0;c<r;c++){const u=8+se(e*31+c,t,this.seed+88511)*22,h=3+se(e,t*29+c,this.seed+88523)*5,f=8+se(e*17+c,t*19+c,this.seed+88537)*22,m=(se(e+c*7,t-c*3,this.seed+88541)-.5)*18,_=(se(e-c*5,t+c*11,this.seed+88549)-.5)*4,x=(se(e+c*13,t+c*2,this.seed+88559)-.5)*18,g=new ft(new Mn(u,h,f),this.material);g.position.set(m,_,x),g.castShadow=!1,g.receiveShadow=!1,s.add(g)}s.userData.anchorX=o,s.userData.anchorY=a,s.userData.anchorZ=l,s.userData.cellX=e,s.userData.cellZ=t,this.clouds.set(n,s),this.scene.add(s)}setDaylight(e){this.daylight=Math.max(0,Math.min(1,e));const t=.3+this.daylight*.7;this.material.color.setRGB(.92*t,.95*t,1*t)}updatePositions(e){const t=this.windDir.x*this.windSpeed*e,n=this.windDir.y*this.windSpeed*e;for(const s of this.clouds.values())s.position.set(s.userData.anchorX+t,s.userData.anchorY,s.userData.anchorZ+n)}syncCloudSet(e,t){const n=this.windDir.x*this.windSpeed*t,s=this.windDir.y*this.windSpeed*t,r=e.x-n,a=e.z-s,o=Ze(Math.floor(r),ms),l=Ze(Math.floor(a),ms),c=new Set;for(let u=-$r;u<=$r;u++)for(let h=-$r;h<=$r;h++){const f=o+h,m=l+u,_=`${f},${m}`;c.add(_),this.createCloud(f,m)}for(const[u,h]of this.clouds.entries())c.has(u)||(this.scene.remove(h),h.traverse(f=>{f.isMesh&&f.geometry?.dispose?.()}),this.clouds.delete(u))}update(e,t,n,s){this.setDaylight(s),this.updatePositions(n),this.syncTimer-=t,this.syncTimer<=0&&(this.syncCloudSet(e,n),this.syncTimer=Qx)}}const mi={HELLO:"hello",WELCOME:"welcome",PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYERS_SNAPSHOT:"players_snapshot",PLAYER_STATE:"player_state",BLOCK_SET:"block_set"};function tv(){return`Player${Math.floor(Math.random()*9e3)+1e3}`}const nv=1/15;function iv(i="/ws/main"){return"wss://craftmine.hjdaleng.workers.dev/ws/main"}class sv{constructor(e={}){this.playerName=e.playerName??"Player",this.onWelcome=e.onWelcome??(()=>{}),this.onPlayerJoin=e.onPlayerJoin??(()=>{}),this.onPlayerLeave=e.onPlayerLeave??(()=>{}),this.onPlayersSnapshot=e.onPlayersSnapshot??(()=>{}),this.onBlockSet=e.onBlockSet??(()=>{}),this.onStatus=e.onStatus??(()=>{}),this.connected=!1,this.playerId=null,this.ws=null,this.outState=null,this.sendAccum=0,this.reconnectTimer=0,this.reconnectDelay=1.5,this.explicitlyClosed=!1}connect(){this.explicitlyClosed=!1;const e=new URLSearchParams({name:this.playerName}),t=`${iv()}?${e.toString()}`;this.ws=new WebSocket(t),this.ws.addEventListener("open",()=>{this.connected=!0,this.onStatus("connected"),this.reconnectDelay=1.5,this.send({type:mi.HELLO,name:this.playerName})}),this.ws.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}this.handleMessage(s)}),this.ws.addEventListener("close",()=>{this.connected=!1,this.playerId=null,this.ws=null,this.onStatus("disconnected"),this.explicitlyClosed||(this.reconnectTimer=this.reconnectDelay,this.reconnectDelay=Math.min(8,this.reconnectDelay*1.4))})}close(){this.explicitlyClosed=!0,this.ws&&this.ws.close(),this.ws=null,this.connected=!1}tick(e){!this.connected&&this.reconnectTimer>0&&(this.reconnectTimer-=e,this.reconnectTimer<=0&&this.connect()),!(!this.connected||!this.outState)&&(this.sendAccum+=e,!(this.sendAccum<nv)&&(this.sendAccum=0,this.send({type:mi.PLAYER_STATE,...this.outState})))}setLocalState(e){this.outState=e}sendBlockSet(e,t,n,s){this.send({type:mi.BLOCK_SET,x:e,y:t,z:n,id:s})}send(e){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify(e))}handleMessage(e){switch(e.type){case mi.WELCOME:this.playerId=e.id,this.onWelcome(e);break;case mi.PLAYER_JOIN:this.onPlayerJoin(e.player);break;case mi.PLAYER_LEAVE:this.onPlayerLeave(e.id);break;case mi.PLAYERS_SNAPSHOT:this.onPlayersSnapshot(e);break;case mi.BLOCK_SET:this.onBlockSet(e);break}}}function rv(){const i=new Wt,n=_a(i,4157341,14135442,!1);return{root:i,rig:n}}class av{constructor(e,t=()=>null){this.scene=e,this.localPlayerIdProvider=t,this.players=new Map}ensurePlayer(e,t=null){if(!e||e===this.localPlayerIdProvider())return null;if(this.players.has(e))return this.players.get(e);const{root:n,rig:s}=rv();n.position.set(t?.x??0,t?.y??0,t?.z??0),this.scene.add(n);const r={id:e,mesh:n,rig:s,name:t?.name??"Player",targetX:t?.x??0,targetY:t?.y??0,targetZ:t?.z??0,yaw:t?.yaw??0,heldItemId:t?.heldItemId??0,armorIds:t?.armorIds??[0,0,0,0],animPhase:Math.random()*Math.PI*2,speed2D:0};return r.heldAnchor=new Wt,r.heldAnchor.position.set(.05,-.3,.02),r.heldAnchor.rotation.set(.08,.04,-.08),(s.arms[1]??r.mesh).add(r.heldAnchor),dl(r.heldAnchor,r.heldItemId,1),fl(r,ga(r.armorIds)),r.nameSprite=this.createNameSprite(r.name),r.nameSprite.position.set(0,2.05,0),r.mesh.add(r.nameSprite),this.players.set(e,r),r}createNameSprite(e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(10,10,10,0.7)",n.fillRect(8,14,t.width-16,36),n.strokeStyle="rgba(255,255,255,0.45)",n.strokeRect(8.5,14.5,t.width-17,35),n.fillStyle="#ffffff",n.font="bold 26px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,32);const s=new cr(t);s.minFilter=Zt;const r=new Cl({map:s,transparent:!0,depthWrite:!1,depthTest:!1}),a=new Gu(r);return a.scale.set(1.5,.38,1),a.userData.labelCanvas=t,a}updateNameSprite(e,t){if(!e.nameSprite||e.name===t)return;e.name=t;const n=e.nameSprite.userData.labelCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(10,10,10,0.7)",s.fillRect(8,14,n.width-16,36),s.strokeStyle="rgba(255,255,255,0.45)",s.strokeRect(8.5,14.5,n.width-17,35),s.fillStyle="#ffffff",s.font="bold 26px Trebuchet MS",s.textAlign="center",s.textBaseline="middle",s.fillText(t,n.width/2,32),e.nameSprite.material.map.needsUpdate=!0}removePlayer(e){const t=this.players.get(e);t&&(this.scene.remove(t.mesh),t.mesh.traverse(n=>{n.isMesh?(n.geometry?.dispose?.(),n.material?.dispose?.()):n.isSprite&&(n.material?.map?.dispose?.(),n.material?.dispose?.())}),this.players.delete(e))}applyWelcome(e){for(const t of e)this.ensurePlayer(t.id,t)}applySnapshot(e){const t=new Set;for(const n of e){if(!n?.id||n.id===this.localPlayerIdProvider())continue;t.add(n.id);const s=this.ensurePlayer(n.id,n);s&&(this.updateNameSprite(s,n.name??s.name),s.targetX=n.x,s.targetY=n.y,s.targetZ=n.z,s.yaw=n.yaw??s.yaw,s.heldItemId=n.heldItemId??0,s.armorIds=n.armorIds??s.armorIds,dl(s.heldAnchor,s.heldItemId,1),fl(s,ga(s.armorIds)))}for(const n of this.players.keys())t.has(n)||this.removePlayer(n)}update(e){for(const t of this.players.values()){const n=t.mesh.position.x,s=t.mesh.position.z;t.mesh.position.x+=(t.targetX-t.mesh.position.x)*Math.min(1,e*10),t.mesh.position.y+=(t.targetY-t.mesh.position.y)*Math.min(1,e*10),t.mesh.position.z+=(t.targetZ-t.mesh.position.z)*Math.min(1,e*10),t.mesh.rotation.y=-t.yaw;const r=(t.mesh.position.x-n)/Math.max(e,1e-4),a=(t.mesh.position.z-s)/Math.max(e,1e-4);t.speed2D=Math.hypot(r,a),this.animateRig(t,e)}}animateRig(e,t){const n=e.rig;if(!n)return;const s=e.speed2D>.05,r=s?Math.min(.55,e.speed2D*.1):.03;e.animPhase+=t*(s?8.8:2.2);for(let a=0;a<n.legs.length;a++){const o=e.animPhase+(a%2===0?0:Math.PI);n.legs[a].rotation.x=Math.sin(o)*r}for(let a=0;a<n.arms.length;a++){const o=e.animPhase+(a%2===0?Math.PI:0);n.arms[a].rotation.x=Math.sin(o)*(r*.9)}n.head&&(n.head.rotation.x=Math.sin(e.animPhase*.35)*.03)}}const ov="/assets/bgm_default-BJd3PF7N.mp3",lv={[d.AIR]:[12,20,32],[d.GRASS]:[73,153,67],[d.DIRT]:[120,84,54],[d.STONE]:[125,127,134],[d.SAND]:[214,198,128],[d.LOG]:[111,78,50],[d.LEAVES]:[55,129,61],[d.WATER]:[62,116,201],[d.BEDROCK]:[52,52,52],[d.SNOW]:[229,237,244],[d.CACTUS]:[56,143,65],[d.FLOWER_RED]:[202,45,56],[d.FLOWER_YELLOW]:[238,200,52],[d.VINE]:[46,116,45],[d.GRAVEL]:[131,127,120],[d.MOSS]:[79,126,64],[d.BRAMBLE]:[92,116,54],[d.CASTLE_BRICK]:[120,120,130],[d.APPLE]:[193,36,36],[d.IRON_ORE]:[177,126,82],[d.COAL_ORE]:[42,44,48],[d.GOLD_ORE]:[222,188,62],[d.FURNACE]:[102,106,114]};function cv(i){return lv[i]??[110,110,116]}function uv(i,e,t){const n=Math.floor(e),s=Math.floor(t),r=i.getSurfaceYAt(n,s);let a=Math.min(Et-1,r+16),o=d.AIR;for(;a>=1;a--)if(o=i.getBlock(n,a,s),o!==d.AIR)return o;return d.AIR}class hv{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.offscreen=document.createElement("canvas"),this.offscreenCtx=this.offscreen.getContext("2d"),this.blockWidth=96,this.blockHeight=96,this.lastRenderTime=0,this.renderIntervalSec=.2}setBlockSpan(e,t){this.blockWidth=Math.max(24,Math.min(192,e|0)),this.blockHeight=Math.max(24,Math.min(192,t|0))}render(e,t,n){if(n-this.lastRenderTime<this.renderIntervalSec)return;this.lastRenderTime=n;const s=this.blockWidth,r=this.blockHeight;this.offscreen.width=s,this.offscreen.height=r;const a=this.offscreenCtx.createImageData(s,r),o=Math.floor(t.x),l=Math.floor(t.z),c=Math.floor(s*.5),u=Math.floor(r*.5);for(let m=0;m<r;m++)for(let _=0;_<s;_++){const x=o+(_-c),g=l+(m-u),p=uv(e,x,g),T=cv(p),b=(m*s+_)*4;a.data[b]=T[0],a.data[b+1]=T[1],a.data[b+2]=T[2],a.data[b+3]=255}this.offscreenCtx.putImageData(a,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.offscreen,0,0,this.canvas.width,this.canvas.height);const h=Math.floor(this.canvas.width*.5),f=Math.floor(this.canvas.height*.5);this.ctx.strokeStyle="rgba(0,0,0,0.7)",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255, 220, 120, 0.95)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke()}}const Qt=24;function yt(i,e,t,n,s=12,r=255){const a=i.createImageData(Qt,Qt);for(let o=0;o<a.data.length;o+=4){const l=Math.random()*s-s*.5|0;a.data[o]=Math.max(0,Math.min(255,e+l)),a.data[o+1]=Math.max(0,Math.min(255,t+l)),a.data[o+2]=Math.max(0,Math.min(255,n+l)),a.data[o+3]=r}i.putImageData(a,0,0)}function fv(i){const e=document.createElement("canvas");e.width=Qt,e.height=Qt;const t=e.getContext("2d");switch(i){case d.GRASS:yt(t,118,92,60,14),t.fillStyle="rgba(67,160,72,0.95)",t.fillRect(0,0,Qt,7);break;case d.DIRT:yt(t,122,84,55,16);break;case d.STONE:yt(t,122,124,132,16);break;case d.SAND:yt(t,216,199,128,14);break;case d.LOG:yt(t,120,90,58,14),t.fillStyle="rgba(90,58,30,0.3)";for(let n=2;n<Qt;n+=5)t.fillRect(n,0,2,Qt);break;case d.LEAVES:yt(t,68,150,70,28,230);break;case d.WATER:yt(t,63,120,210,14,210),t.fillStyle="rgba(175,218,255,0.3)",t.fillRect(0,5,Qt,3);break;case d.BEDROCK:yt(t,58,58,58,24);break;case d.SNOW:yt(t,233,239,245,8);break;case d.CACTUS:yt(t,57,145,67,12),t.fillStyle="rgba(33,95,40,0.35)";for(let n=1;n<Qt;n+=4)t.fillRect(n,0,1,Qt);break;case d.FLOWER_RED:t.fillStyle="rgba(57,146,65,0.95)",t.fillRect(11,7,2,15),t.fillStyle="rgba(196,36,46,0.95)",t.fillRect(8,3,8,6);break;case d.FLOWER_YELLOW:t.fillStyle="rgba(57,146,65,0.95)",t.fillRect(11,7,2,15),t.fillStyle="rgba(240,197,43,0.95)",t.fillRect(8,3,8,6);break;case d.VINE:t.fillStyle="rgba(49,130,52,0.8)";for(let n=0;n<7;n++){const s=3+n*3%16;t.fillRect(s,2+n*2,2,3)}break;case d.GRAVEL:yt(t,132,128,121,20);break;case d.MOSS:yt(t,82,126,66,16);break;case d.CASTLE_BRICK:yt(t,118,117,124,10),t.fillStyle="rgba(66,66,74,0.45)";for(let n=0;n<Qt;n+=6)t.fillRect(0,n,Qt,1);break;case d.APPLE:t.fillStyle="rgba(197,36,36,0.95)",t.fillRect(6,6,12,12),t.fillStyle="rgba(230,120,120,0.55)",t.fillRect(8,8,4,4),t.fillStyle="rgba(80,144,61,0.9)",t.fillRect(11,3,3,3);break;case d.WEAPON_BANDIT_BLADE:t.fillStyle="rgba(186,188,196,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,36,0.95)",t.fillRect(9,17,6,4);break;case d.WEAPON_RAIDER_SABER:t.fillStyle="rgba(202,204,214,0.95)",t.fillRect(7,4,10,3),t.fillRect(14,6,3,10),t.fillStyle="rgba(126,86,40,0.95)",t.fillRect(6,16,8,4);break;case d.WEAPON_SCORP_BOW:t.strokeStyle="rgba(158,106,52,0.95)",t.lineWidth=3,t.beginPath(),t.arc(12,12,7,Math.PI*.2,Math.PI*1.8),t.stroke(),t.strokeStyle="rgba(220,220,220,0.9)",t.lineWidth=1,t.beginPath(),t.moveTo(17,5),t.lineTo(17,19),t.stroke();break;case d.WEAPON_JAGUAR_CLAWS:t.fillStyle="rgba(220,220,228,0.95)",t.fillRect(6,4,2,14),t.fillRect(11,4,2,14),t.fillRect(16,4,2,14);break;case d.WEAPON_WRAITH_HAMMER:t.fillStyle="rgba(132,138,150,0.95)",t.fillRect(7,5,10,6),t.fillStyle="rgba(122,86,50,0.95)",t.fillRect(11,11,2,11);break;case d.WEAPON_YETI_AXE:t.fillStyle="rgba(176,212,236,0.95)",t.fillRect(6,6,10,7),t.fillStyle="rgba(116,82,48,0.95)",t.fillRect(13,11,2,10);break;case d.PLANK:yt(t,171,128,84,12),t.fillStyle="rgba(102,72,42,0.35)";for(let n=0;n<Qt;n+=6)t.fillRect(0,n,Qt,1);break;case d.STICK:t.fillStyle="rgba(134,94,58,0.95)",t.fillRect(11,3,2,18);break;case d.WOOD_SWORD:t.fillStyle="rgba(177,132,82,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,42,0.95)",t.fillRect(9,17,6,4);break;case d.WOOD_AXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(184,142,91,0.95)",t.fillRect(7,4,8,6);break;case d.WOOD_PICKAXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillRect(6,5,12,3);break;case d.WOOD_SPADE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,8,2,13),t.fillStyle="rgba(185,143,95,0.95)",t.fillRect(8,3,8,7);break;case d.STONE_SWORD:t.fillStyle="rgba(186,190,199,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,42,0.95)",t.fillRect(9,17,6,4);break;case d.STONE_AXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(7,4,8,6);break;case d.STONE_PICKAXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(6,5,12,3);break;case d.STONE_SPADE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,8,2,13),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(8,3,8,7);break;case d.BRAMBLE:t.fillStyle="rgba(80,120,56,0.95)";for(let n=0;n<4;n++)t.fillRect(5+n*4,6-n%2,2,13);t.fillStyle="rgba(110,74,44,0.9)",t.fillRect(6,11,12,2);break;case d.SKELETON_SPAWNER:yt(t,72,76,82,8),t.fillStyle="rgba(38,40,46,0.95)",t.fillRect(3,3,18,18),t.fillStyle="rgba(144,148,156,0.92)";for(let n=5;n<=18;n+=5)t.fillRect(n,2,1,20);for(let n=5;n<=18;n+=5)t.fillRect(2,n,20,1);t.fillStyle="rgba(226,226,216,0.95)",t.fillRect(8,8,8,5),t.fillRect(7,13,10,4),t.fillStyle="rgba(24,24,26,0.95)",t.fillRect(10,10,1,1),t.fillRect(13,10,1,1),t.fillRect(11,14,2,1);break;case d.BOW:t.strokeStyle="rgba(146,98,54,0.95)",t.lineWidth=3,t.beginPath(),t.arc(10,12,7,Math.PI*.22,Math.PI*1.78),t.stroke(),t.strokeStyle="rgba(224,224,224,0.95)",t.lineWidth=1,t.beginPath(),t.moveTo(17,5),t.lineTo(17,19),t.stroke();break;case d.ARROW:t.fillStyle="rgba(120,82,48,0.95)",t.fillRect(11,4,2,15),t.fillStyle="rgba(204,206,214,0.95)",t.fillRect(10,2,4,4),t.fillStyle="rgba(214,54,54,0.95)",t.fillRect(9,18,6,3);break;case d.IRON_SWORD:t.fillStyle="rgba(218,222,228,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(154,126,54,0.95)",t.fillRect(8,16,8,3),t.fillStyle="rgba(112,80,46,0.95)",t.fillRect(10,19,4,3);break;case d.IRON_ORE:yt(t,122,124,132,16),t.fillStyle="rgba(184,124,76,0.95)",t.fillRect(4,4,4,4),t.fillRect(14,5,4,3),t.fillRect(9,13,3,4);break;case d.COAL_ORE:yt(t,122,124,132,16),t.fillStyle="rgba(32,34,38,0.95)",t.fillRect(4,5,4,4),t.fillRect(13,4,5,5),t.fillRect(8,14,4,4);break;case d.GOLD_ORE:yt(t,122,124,132,16),t.fillStyle="rgba(228,189,60,0.95)",t.fillRect(4,4,4,4),t.fillRect(13,5,5,4),t.fillRect(8,13,4,4);break;case d.IRON_AXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(212,216,224,0.95)",t.fillRect(7,4,8,6);break;case d.IRON_PICKAXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(212,216,224,0.95)",t.fillRect(6,5,12,3);break;case d.IRON_SPADE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,8,2,13),t.fillStyle="rgba(212,216,224,0.95)",t.fillRect(8,3,8,7);break;case d.IRON:t.fillStyle="rgba(186,128,82,0.95)",t.fillRect(6,6,12,12),t.fillStyle="rgba(228,178,132,0.55)",t.fillRect(8,8,4,4);break;case d.COAL:t.fillStyle="rgba(40,42,48,0.95)",t.fillRect(6,6,12,12),t.fillStyle="rgba(86,89,98,0.4)",t.fillRect(8,8,4,4);break;case d.GOLD:t.fillStyle="rgba(228,190,58,0.95)",t.fillRect(6,6,12,12),t.fillStyle="rgba(255,220,132,0.5)",t.fillRect(8,8,4,4);break;case d.FORGED_IRON:t.fillStyle="rgba(214,219,228,0.95)",t.fillRect(5,7,14,10),t.fillStyle="rgba(160,170,184,0.6)",t.fillRect(7,9,4,3);break;case d.FURNACE:yt(t,104,107,112,14),t.fillStyle="rgba(40,42,48,0.95)",t.fillRect(4,4,16,16),t.fillStyle="rgba(230,140,36,0.95)",t.fillRect(9,11,6,4);break;case d.IRON_HELMET:t.fillStyle="rgba(214,219,228,0.95)",t.fillRect(6,6,12,8),t.fillRect(8,14,8,3);break;case d.IRON_CHESTPLATE:t.fillStyle="rgba(214,219,228,0.95)",t.fillRect(6,5,12,12),t.fillRect(4,7,4,8),t.fillRect(16,7,4,8);break;case d.IRON_LEGGINGS:t.fillStyle="rgba(214,219,228,0.95)",t.fillRect(7,6,10,6),t.fillRect(7,12,3,8),t.fillRect(14,12,3,8);break;case d.IRON_BOOTS:t.fillStyle="rgba(214,219,228,0.95)",t.fillRect(6,10,4,8),t.fillRect(14,10,4,8),t.fillRect(5,17,6,3),t.fillRect(13,17,6,3);break;case d.WIZARD_GROUP_SPAWNER:yt(t,78,60,108,12),t.fillStyle="rgba(30,22,48,0.95)",t.fillRect(3,3,18,18),t.strokeStyle="rgba(168,112,255,0.92)",t.strokeRect(3.5,3.5,17,17),t.fillStyle="rgba(252,184,76,0.95)",t.fillRect(10,4,4,5),t.fillStyle="rgba(232,228,255,0.95)",t.fillRect(8,10,8,5),t.fillRect(7,15,10,2);break;default:yt(t,90,90,90,10);break}return e.toDataURL()}function dv(){const i=new Map;return Object.keys(Nt).forEach(e=>{const t=Number(e);t!==d.AIR&&i.set(t,fv(t))}),i}const dh=[{id:"plank",outputId:d.PLANK,outputCount:5,ingredients:[{id:d.LOG,count:1}]},{id:"stick",outputId:d.STICK,outputCount:4,ingredients:[{id:d.PLANK,count:1}]},{id:"wood_sword",outputId:d.WOOD_SWORD,outputCount:1,ingredients:[{id:d.PLANK,count:2},{id:d.STICK,count:1}]},{id:"wood_axe",outputId:d.WOOD_AXE,outputCount:1,ingredients:[{id:d.PLANK,count:3},{id:d.STICK,count:2}]},{id:"wood_pickaxe",outputId:d.WOOD_PICKAXE,outputCount:1,ingredients:[{id:d.PLANK,count:3},{id:d.STICK,count:2}]},{id:"wood_spade",outputId:d.WOOD_SPADE,outputCount:1,ingredients:[{id:d.PLANK,count:1},{id:d.STICK,count:2}]},{id:"stone_sword",outputId:d.STONE_SWORD,outputCount:1,ingredients:[{id:d.STONE,count:2},{id:d.STICK,count:1}]},{id:"stone_axe",outputId:d.STONE_AXE,outputCount:1,ingredients:[{id:d.STONE,count:3},{id:d.STICK,count:2}]},{id:"stone_pickaxe",outputId:d.STONE_PICKAXE,outputCount:1,ingredients:[{id:d.STONE,count:3},{id:d.STICK,count:2}]},{id:"stone_spade",outputId:d.STONE_SPADE,outputCount:1,ingredients:[{id:d.STONE,count:1},{id:d.STICK,count:2}]},{id:"iron_sword",outputId:d.IRON_SWORD,outputCount:1,ingredients:[{id:d.IRON,count:2},{id:d.STICK,count:1}]},{id:"iron_axe",outputId:d.IRON_AXE,outputCount:1,ingredients:[{id:d.IRON,count:3},{id:d.STICK,count:2}]},{id:"iron_pickaxe",outputId:d.IRON_PICKAXE,outputCount:1,ingredients:[{id:d.IRON,count:3},{id:d.STICK,count:2}]},{id:"iron_spade",outputId:d.IRON_SPADE,outputCount:1,ingredients:[{id:d.IRON,count:1},{id:d.STICK,count:2}]},{id:"furnace",outputId:d.FURNACE,outputCount:1,ingredients:[{id:d.IRON,count:30}]},{id:"iron_helmet",outputId:d.IRON_HELMET,outputCount:1,ingredients:[{id:d.FORGED_IRON,count:5}]},{id:"iron_chestplate",outputId:d.IRON_CHESTPLATE,outputCount:1,ingredients:[{id:d.FORGED_IRON,count:5}]},{id:"iron_leggings",outputId:d.IRON_LEGGINGS,outputCount:1,ingredients:[{id:d.FORGED_IRON,count:5}]},{id:"iron_boots",outputId:d.IRON_BOOTS,outputCount:1,ingredients:[{id:d.FORGED_IRON,count:5}]}],pv=new Map(dh.map(i=>[i.id,i]));function ph(i){switch(i){case d.IRON:return[d.IRON,d.IRON_ORE];case d.COAL:return[d.COAL,d.COAL_ORE];case d.GOLD:return[d.GOLD,d.GOLD_ORE];default:return[i]}}function du(i){return`${Nt[i.outputId]?.name??i.id} x${i.outputCount}`}function mv(i){return pv.get(i)??null}function gs(i,e){return ph(e).reduce((t,n)=>t+i.getItemCount(n),0)}function pl(i,e,t){let n=t;for(const s of ph(e)){if(n<=0)break;const r=i.getItemCount(s);if(r<=0)continue;const a=Math.min(r,n);if(!i.consumeItem(s,a))return!1;n-=a}return n<=0}function mh(i,e){return e?e.ingredients.every(t=>gs(i,t.id)>=t.count):!1}function gv(i){return dh.filter(e=>mh(i,e))}function _v(i,e){const t=mv(e);if(!t||!mh(i,t))return!1;for(const n of t.ingredients)if(!pl(i,n.id,n.count))return!1;return i.addItem(t.outputId,t.outputCount),!0}function gh(i){switch(i){case d.WOOD_SWORD:case d.STONE_SWORD:case d.IRON_SWORD:return"sword";case d.WOOD_AXE:case d.STONE_AXE:case d.IRON_AXE:return"axe";case d.WOOD_PICKAXE:case d.STONE_PICKAXE:case d.IRON_PICKAXE:return"pickaxe";case d.WOOD_SPADE:case d.STONE_SPADE:case d.IRON_SPADE:return"spade";default:return null}}function xv(i){switch(i){case d.WOOD_SWORD:case d.WOOD_AXE:case d.WOOD_PICKAXE:case d.WOOD_SPADE:return 1;case d.STONE_SWORD:case d.STONE_AXE:case d.STONE_PICKAXE:case d.STONE_SPADE:return 2;case d.IRON_SWORD:case d.IRON_AXE:case d.IRON_PICKAXE:case d.IRON_SPADE:return 3;default:return 0}}function vv(i,e){const t=gh(i),n=xv(i);if(!t||n===0)return 1;const s=n===1?2.35:n===2?3.85:5.8;return t==="axe"&&(e===d.LOG||e===d.PLANK||e===d.CACTUS)||t==="pickaxe"&&(e===d.STONE||e===d.GRAVEL||e===d.CASTLE_BRICK||e===d.IRON_ORE||e===d.COAL_ORE||e===d.GOLD_ORE)||t==="spade"&&(e===d.DIRT||e===d.GRASS||e===d.SAND||e===d.SNOW||e===d.MOSS)?s:t==="sword"&&e===d.BRAMBLE?n===1?1.7:n===2?2.25:2.65:1}function Sv(i){switch(i){case d.IRON_ORE:case d.COAL_ORE:case d.GOLD_ORE:return"pickaxe";default:return null}}function _h(i,e){const t=Sv(e);return t?gh(i)===t:!0}const Ks=[{id:"forged_iron",name:"Forge Iron",inputId:d.IRON,inputCount:10,fuelId:d.COAL,fuelCount:1,outputId:d.FORGED_IRON,outputCount:1,duration:30},{id:"mint_gold",name:"Mint Gold Coins",inputId:d.GOLD,inputCount:5,fuelId:d.COAL,fuelCount:1,outputCoins:30,duration:20}],Ev=new Map(Ks.map(i=>[i.id,i]));function pu(i,e,t){return`${i},${e},${t}`}class Mv{constructor(e,t={}){this.ui=e,this.onCoins=t.onCoins??(()=>{}),this.furnaces=new Map,this.openKey=null,this.selectedRecipeId=Ks[0]?.id??null}getRecipeById(e){return Ev.get(e)??null}ensureFurnace(e,t,n){const s=pu(e,t,n);return this.furnaces.has(s)||this.furnaces.set(s,{key:s,x:e,y:t,z:n,queue:[],currentJob:null}),this.furnaces.get(s)}removeFurnace(e,t,n){const s=pu(e,t,n);this.furnaces.delete(s),this.openKey===s&&(this.openKey=null,this.ui.setFurnaceVisible(!1))}openAt(e,t,n){const s=this.ensureFurnace(e,t,n);this.openKey=s.key,this.renderOpenFurnace(),this.ui.setFurnaceVisible(!0)}close(){this.openKey=null,this.ui.setFurnaceVisible(!1)}getOpenFurnace(){return this.openKey?this.furnaces.get(this.openKey)??null:null}canQueueRecipe(e,t=this.ui){return e?gs(t,e.inputId)>=e.inputCount&&gs(t,e.fuelId)>=e.fuelCount:!1}queueRecipe(e){const t=this.getOpenFurnace(),n=this.getRecipeById(e);return!t||!n||!this.canQueueRecipe(n)||!pl(this.ui,n.inputId,n.inputCount)?!1:pl(this.ui,n.fuelId,n.fuelCount)?(t.queue.push({recipeId:n.id,remaining:n.duration,total:n.duration}),this.kickoffNextJob(t),this.renderOpenFurnace(),!0):(this.ui.addItem(n.inputId,n.inputCount),!1)}kickoffNextJob(e){!e||e.currentJob||e.queue.length===0||(e.currentJob=e.queue.shift())}completeJob(e){const t=this.getRecipeById(e.recipeId);t&&(t.outputCoins?this.onCoins(t.outputCoins):t.outputId&&t.outputCount&&this.ui.addItem(t.outputId,t.outputCount))}update(e){for(const t of this.furnaces.values())this.kickoffNextJob(t),t.currentJob&&(t.currentJob.remaining-=e,!(t.currentJob.remaining>0)&&(this.completeJob(t.currentJob),t.currentJob=null,this.kickoffNextJob(t)));this.openKey&&this.renderOpenFurnace()}renderOpenFurnace(){const e=this.getOpenFurnace();if(!e)return;const t=Ks.filter(r=>this.canQueueRecipe(r));t.some(r=>r.id===this.selectedRecipeId)||(this.selectedRecipeId=t[0]?.id??Ks[0]?.id??null);const n=e.currentJob?this.getRecipeById(e.currentJob.recipeId):null,s=[];n&&e.currentJob?(s.push(`Active: ${n.name}`),s.push(`Time left: ${Math.max(0,e.currentJob.remaining).toFixed(1)}s`)):s.push("Active: Idle"),s.push(`Queued jobs: ${e.queue.length}`),s.push(`Iron: ${gs(this.ui,d.IRON)} | Coal: ${gs(this.ui,d.COAL)} | Gold: ${gs(this.ui,d.GOLD)}`),this.ui.renderFurnacePanel(Ks,this.selectedRecipeId,s.join(`
`),e.queue.map((r,a)=>{const o=this.getRecipeById(r.recipeId);return`${a+1}. ${o?.name??r.recipeId}`}),r=>{this.selectedRecipeId=r,this.renderOpenFurnace()},()=>{this.selectedRecipeId&&this.queueRecipe(this.selectedRecipeId)},t)}}function mu(i){const e=i.outputCoins?`${i.outputCoins} coins`:`${Nt[i.outputId]?.name??i.outputId} x${i.outputCount}`;return`${i.name} -> ${e}`}function _o(i){return i&&i.id!==void 0?i:{id:d.AIR,count:0}}function xo(i,e,t,n={}){const{hotbarIndexLabel:s=null}=n,r=!e||e.id===d.AIR||e.count<=0;i.icon.style.display=r?"none":"block",r||(i.icon.style.backgroundImage=`url(${t.get(e.id)})`),i.name.textContent=r?"Empty":Nt[e.id].name,i.count.textContent=r?"":`x${e.count}`,s!==null&&(i.index.textContent=String(s))}function yv(i,e,t=null){i.icon.style.display="none",i.name.textContent=e||"Empty",i.count.textContent="",t!==null&&(i.index.textContent=String(t))}class bv{constructor(e){this.overlay=document.getElementById("overlay"),this.modeEl=document.getElementById("mode"),this.coordsEl=document.getElementById("coords"),this.fpsEl=document.getElementById("fps"),this.coinsEl=document.getElementById("coins"),this.hintEl=document.getElementById("hint"),this.healthWrapEl=document.getElementById("health-wrap"),this.healthFillEl=document.getElementById("health-bar-fill"),this.hotbarEl=document.getElementById("hotbar"),this.inventoryEl=document.getElementById("inventory"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.armorSlotEls={[ut.HELMET]:document.getElementById("armor-helmet"),[ut.CHEST]:document.getElementById("armor-chest"),[ut.LEGS]:document.getElementById("armor-legs"),[ut.BOOTS]:document.getElementById("armor-boots")},this.craftingEl=document.getElementById("crafting"),this.craftingListEl=document.getElementById("crafting-list"),this.craftingDetailTitleEl=document.getElementById("crafting-detail-title"),this.craftingDetailTextEl=document.getElementById("crafting-detail-text"),this.craftingConfirmEl=document.getElementById("crafting-confirm"),this.furnaceEl=document.getElementById("furnace"),this.furnaceListEl=document.getElementById("furnace-list"),this.furnaceDetailTitleEl=document.getElementById("furnace-detail-title"),this.furnaceDetailTextEl=document.getElementById("furnace-detail-text"),this.furnaceQueueEl=document.getElementById("furnace-queue"),this.furnaceConfirmEl=document.getElementById("furnace-confirm"),this.dialogueEl=document.getElementById("dialogue"),this.dialogueTitleEl=document.getElementById("dialogue-title"),this.dialogueTextEl=document.getElementById("dialogue-text"),this.dialogueOptionsEl=document.getElementById("dialogue-options"),this.debugPaneEl=document.getElementById("debug-pane"),this.debugWalkEl=document.getElementById("dbg-walk"),this.debugWalkValueEl=document.getElementById("dbg-walk-value"),this.debugFlyEl=document.getElementById("dbg-fly"),this.debugFlyValueEl=document.getElementById("dbg-fly-value"),this.debugMapWidthEl=document.getElementById("dbg-map-width"),this.debugMapWidthValueEl=document.getElementById("dbg-map-width-value"),this.debugMapHeightEl=document.getElementById("dbg-map-height"),this.debugMapHeightValueEl=document.getElementById("dbg-map-height-value"),this.debugBgmEl=document.getElementById("dbg-bgm"),this.debugBgmValueEl=document.getElementById("dbg-bgm-value"),this.debugHealthEl=document.getElementById("dbg-health"),this.debugAgroEl=document.getElementById("dbg-agro"),this.debugGodEl=document.getElementById("dbg-god"),this.hotbarSize=9,this.inventory=e.map(_o),this.equippedArmor=Fl(),this.hotbarIndex=0,this.hotbarOverride=null,this.coins=0,this.icons=dv(),this.hotbarEls=[],this.inventoryEls=[],this.armorEls={},this.craftingSelectHandler=null,this.craftingConfirmHandler=null,this.furnaceSelectHandler=null,this.furnaceConfirmHandler=null,this.buildHotbar(),this.buildInventory(),this.buildArmorSlots(),this.setHotbarSelection(0),this.updateCoins(0),this.setHint(""),this.updateHealth(100,100,!0)}buildHotbar(){this.hotbarEl.innerHTML="",this.hotbarEls=[];for(let e=0;e<this.hotbarSize;e++){const t=document.createElement("div");t.className="hotbar-slot";const n=document.createElement("div");n.className="slot-index";const s=document.createElement("div");s.className="slot-icon";const r=document.createElement("div");r.className="slot-name";const a=document.createElement("div");a.className="slot-count",t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(a),this.hotbarEl.appendChild(t),this.hotbarEls.push({root:t,index:n,icon:s,name:r,count:a})}this.refreshHotbarLabels()}buildInventory(){this.inventoryGridEl.innerHTML="",this.inventoryEls=[];for(let e=0;e<this.inventory.length;e++){const t=document.createElement("button");t.type="button",t.className="inv-slot",t.dataset.index=String(e);const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",t.appendChild(n),t.appendChild(s),t.appendChild(r),t.draggable=!0,t.addEventListener("dragstart",a=>{const o=this.inventory[e];if(!o||o.id===d.AIR||o.count<=0){a.preventDefault();return}a.dataTransfer?.setData("text/plain",JSON.stringify({kind:"inventory",index:e}))}),t.addEventListener("dragover",a=>a.preventDefault()),t.addEventListener("drop",a=>{a.preventDefault();const o=this.parseDragPayload(a);o&&o.kind==="armor"&&this.moveArmorToInventory(o.slot,e)}),t.addEventListener("click",()=>{const a=this.inventory[e];!a||a.id===d.AIR||a.count<=0||(this.inventory[this.hotbarIndex]={...a},this.refreshHotbarLabels())}),this.inventoryGridEl.appendChild(t),this.inventoryEls.push({root:t,icon:n,name:s,count:r})}this.refreshInventoryLabels()}buildArmorSlots(){for(const e of Cs){const t=this.armorSlotEls[e];if(!t)continue;t.innerHTML="";const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",t.appendChild(n),t.appendChild(s),t.appendChild(r),t.draggable=!0,t.addEventListener("dragstart",a=>{const o=this.equippedArmor[e];if(!o||o===d.AIR){a.preventDefault();return}a.dataTransfer?.setData("text/plain",JSON.stringify({kind:"armor",slot:e}))}),t.addEventListener("dragover",a=>a.preventDefault()),t.addEventListener("drop",a=>{a.preventDefault();const o=this.parseDragPayload(a);o&&o.kind==="inventory"&&this.moveInventoryItemToArmor(o.index,e)}),t.addEventListener("click",()=>this.moveArmorToInventory(e)),this.armorEls[e]={root:t,icon:n,name:s,count:r}}this.refreshArmorLabels()}parseDragPayload(e){try{return JSON.parse(e.dataTransfer?.getData("text/plain")??"")}catch{return null}}canAcceptInventoryDrop(e,t){const n=this.inventory[e];return!!n&&(n.id===d.AIR||n.count<=0||n.id===t)}moveArmorToInventory(e,t=-1){const n=this.equippedArmor[e];if(!n||n===d.AIR)return!1;if(t>=0){if(!this.canAcceptInventoryDrop(t,n))return!1;const s=this.inventory[t];s.id===d.AIR||s.count<=0?(s.id=n,s.count=1):s.count+=1}else this.addItem(n,1);return this.equippedArmor[e]=d.AIR,this.refreshInventoryLabels(),this.refreshArmorLabels(),!0}moveInventoryItemToArmor(e,t){const n=this.inventory[e];return!n||n.id===d.AIR||n.count<=0||ex(n.id)!==t||this.equippedArmor[t]!==d.AIR?!1:(this.equippedArmor[t]=n.id,n.count-=1,n.count<=0&&(n.id=d.AIR,n.count=0),this.refreshInventoryLabels(),this.refreshArmorLabels(),!0)}setupDebugPane(e,t){this.debugWalkEl.value=String(e.walkSpeed),this.debugFlyEl.value=String(e.flySpeed),this.debugMapWidthEl.value=String(e.mapWidthBlocks),this.debugMapHeightEl.value=String(e.mapHeightBlocks),this.debugBgmEl.value=String(e.bgmVolume),this.debugHealthEl.checked=!!e.healthEnabled,this.debugAgroEl.checked=!!e.agroEnabled,this.debugGodEl.checked=!!e.godModeEnabled,this.updateDebugValues(e.walkSpeed,e.flySpeed,e.mapWidthBlocks,e.mapHeightBlocks,e.bgmVolume),this.debugWalkEl.addEventListener("input",()=>{const n=Number(this.debugWalkEl.value);this.updateDebugValues(n,Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({walkSpeed:n})}),this.debugFlyEl.addEventListener("input",()=>{const n=Math.min(300,Number(this.debugFlyEl.value));this.updateDebugValues(Number(this.debugWalkEl.value),n,Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({flySpeed:n})}),this.debugMapWidthEl.addEventListener("input",()=>{const n=Number(this.debugMapWidthEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),n,Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({mapWidthBlocks:n})}),this.debugMapHeightEl.addEventListener("input",()=>{const n=Number(this.debugMapHeightEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),n,Number(this.debugBgmEl.value)),t({mapHeightBlocks:n})}),this.debugBgmEl.addEventListener("input",()=>{const n=Number(this.debugBgmEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),n),t({bgmVolume:n})}),this.debugHealthEl.addEventListener("change",()=>t({healthEnabled:this.debugHealthEl.checked})),this.debugAgroEl.addEventListener("change",()=>t({agroEnabled:this.debugAgroEl.checked})),this.debugGodEl.addEventListener("change",()=>t({godModeEnabled:this.debugGodEl.checked}))}updateDebugValues(e,t,n,s,r){this.debugWalkValueEl.textContent=`Current: ${e.toFixed(1)}`,this.debugFlyValueEl.textContent=`Current: ${t.toFixed(0)} (max 300)`,this.debugMapWidthValueEl.textContent=`Current: ${Math.round(n)} blocks`,this.debugMapHeightValueEl.textContent=`Current: ${Math.round(s)} blocks`,this.debugBgmValueEl.textContent=`Current: ${Math.round(r*100)}%`}isDebugOpen(){return this.debugPaneEl.classList.contains("visible")}setDebugVisible(e){this.debugPaneEl.classList.toggle("visible",e)}isInventoryOpen(){return this.inventoryEl.classList.contains("visible")}isCraftingOpen(){return this.craftingEl.classList.contains("visible")}isFurnaceOpen(){return this.furnaceEl.classList.contains("visible")}setInventoryVisible(e){this.inventoryEl.classList.toggle("visible",e),this.refreshInventoryLabels(),this.refreshArmorLabels()}setCraftingVisible(e){this.craftingEl.classList.toggle("visible",e)}setFurnaceVisible(e){this.furnaceEl.classList.toggle("visible",e)}renderCraftingCatalogue(e,t,n,s){this.craftingSelectHandler=n,this.craftingConfirmHandler=s,this.craftingListEl.innerHTML="";for(const a of e){const o=document.createElement("button");o.type="button",o.className="crafting-recipe",a.id===t&&o.classList.add("active");const l=document.createElement("div");l.className="crafting-recipe-name",l.textContent=du(a);const c=document.createElement("div");c.className="crafting-recipe-cost",c.textContent=a.ingredients.map(u=>`${Nt[u.id].name} x${u.count}`).join(" | "),o.appendChild(l),o.appendChild(c),o.addEventListener("click",()=>this.craftingSelectHandler?.(a.id)),this.craftingListEl.appendChild(o)}const r=e.find(a=>a.id===t)??null;if(!r){this.craftingDetailTitleEl.textContent=e.length>0?"Select a recipe":"No craftable recipes",this.craftingDetailTextEl.textContent=e.length>0?"Choose an item from the catalogue to inspect its resource cost.":"Gather logs, stone, and other materials to unlock crafting options.",this.craftingConfirmEl.disabled=!0,this.craftingConfirmEl.onclick=null;return}this.craftingDetailTitleEl.textContent=du(r),this.craftingDetailTextEl.textContent=r.ingredients.map(a=>`${Nt[a.id].name}: ${a.count}`).join(`
`),this.craftingConfirmEl.disabled=!1,this.craftingConfirmEl.onclick=()=>this.craftingConfirmHandler?.()}renderFurnacePanel(e,t,n,s,r,a,o=e){this.furnaceSelectHandler=r,this.furnaceConfirmHandler=a,this.furnaceListEl.innerHTML="";for(const u of e){const h=document.createElement("button");h.type="button",h.className="crafting-recipe",u.id===t&&h.classList.add("active"),o.some(_=>_.id===u.id)||(h.style.opacity="0.6");const f=document.createElement("div");f.className="crafting-recipe-name",f.textContent=mu(u);const m=document.createElement("div");m.className="crafting-recipe-cost",m.textContent=`${Nt[u.inputId].name} x${u.inputCount} | ${Nt[u.fuelId].name} x${u.fuelCount} | ${u.duration}s`,h.appendChild(f),h.appendChild(m),h.addEventListener("click",()=>this.furnaceSelectHandler?.(u.id)),this.furnaceListEl.appendChild(h)}const l=e.find(u=>u.id===t)??null;this.furnaceDetailTitleEl.textContent=l?mu(l):"Select a furnace job",this.furnaceDetailTextEl.textContent=n,this.furnaceQueueEl.textContent=s.length>0?`Queue
${s.join(`
`)}`:`Queue
Empty`;const c=!!l&&o.some(u=>u.id===l.id);this.furnaceConfirmEl.disabled=!c,this.furnaceConfirmEl.onclick=c?()=>this.furnaceConfirmHandler?.():null}isDialogueOpen(){return this.dialogueEl.classList.contains("visible")}openDialogue(e,t,n){this.dialogueTitleEl.textContent=e,this.dialogueTextEl.textContent=t,this.dialogueOptionsEl.innerHTML="";for(const s of n){const r=document.createElement("button");r.type="button",r.className="dialogue-btn",r.textContent=s.label,r.addEventListener("click",()=>s.onSelect()),this.dialogueOptionsEl.appendChild(r)}this.dialogueEl.classList.add("visible")}closeDialogue(){this.dialogueEl.classList.remove("visible"),this.dialogueOptionsEl.innerHTML=""}setHint(e){this.hintEl.textContent=e}updateHealth(e,t,n){if(this.healthWrapEl.style.display=n?"block":"none",!n)return;const s=t>0?Math.max(0,Math.min(1,e/t)):0;this.healthFillEl.style.width=`${(s*100).toFixed(1)}%`}getSelectedBlock(){return this.inventory[this.hotbarIndex]?.id??d.DIRT}getSelectedItemId(){const e=this.inventory[this.hotbarIndex];return!e||e.count<=0?d.AIR:e.id??d.AIR}getEquippedArmorIds(){return tx(this.equippedArmor)}consumeSelectedBlock(){const e=this.inventory[this.hotbarIndex];return!e||e.id===d.AIR||e.count<=0?!1:(e.count-=1,e.count<=0&&(e.count=0,e.id=d.AIR),this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0)}addItem(e,t){if(e===d.AIR||t<=0)return;let n=t;for(const s of this.inventory)if(s.id===e&&s.count<999){const r=Math.min(999-s.count,n);if(s.count+=r,n-=r,n===0)break}if(n>0){for(const s of this.inventory)if(s.id===d.AIR||s.count<=0){s.id=e,s.count=n;break}}this.refreshHotbarLabels(),this.refreshInventoryLabels()}getItemCount(e){let t=0;for(const n of this.inventory)n.id===e&&(t+=n.count);return t}consumeItem(e,t){if(t<=0)return!0;if(this.getItemCount(e)<t)return!1;let n=t;for(const s of this.inventory){if(s.id!==e||n<=0)continue;const r=Math.min(s.count,n);s.count-=r,n-=r,s.count<=0&&(s.id=d.AIR,s.count=0)}return this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0}updateCoins(e){this.coins=e,this.coinsEl.textContent=`Coins: ${e}`}setOverlayVisible(e){this.overlay.classList.toggle("visible",e)}updateMode(e){this.modeEl.textContent=`Mode: ${e?"Fly":"Walk"}`}updateCoords(e){this.coordsEl.textContent=`X: ${e.x.toFixed(1)} Y: ${e.y.toFixed(1)} Z: ${e.z.toFixed(1)}`}updateFPS(e){this.fpsEl.textContent=`FPS: ${e.toFixed(0)}`}setHotbarSelection(e){this.hotbarIndex=e,this.hotbarEls.forEach((t,n)=>t.root.classList.toggle("active",n===e)),this.inventoryEls.forEach((t,n)=>t.root.classList.toggle("active",n===e))}setHotbarOverride(e,t=0){this.hotbarOverride={entries:Array.isArray(e)?e:[],activeIndex:t},this.hotbarEls.forEach((n,s)=>n.root.classList.toggle("active",s===t)),this.refreshHotbarLabels()}clearHotbarOverride(){this.hotbarOverride=null,this.hotbarEls.forEach((e,t)=>e.root.classList.toggle("active",t===this.hotbarIndex)),this.refreshHotbarLabels()}refreshHotbarLabels(){if(this.hotbarOverride){for(let e=0;e<this.hotbarEls.length;e++){const t=this.hotbarOverride.entries[e]??null;yv(this.hotbarEls[e],t?.label??"Empty",e+1)}return}for(let e=0;e<this.hotbarEls.length;e++)xo(this.hotbarEls[e],_o(this.inventory[e]),this.icons,{hotbarIndexLabel:e+1})}refreshInventoryLabels(){for(let e=0;e<this.inventoryEls.length;e++){const t=this.inventoryEls[e],n=_o(this.inventory[e]);xo(t,n,this.icons),t.root.draggable=n.id!==d.AIR&&n.count>0}}refreshArmorLabels(){for(const e of Cs){const t=this.armorEls[e];if(!t)continue;const n=this.equippedArmor[e]??d.AIR;xo(t,n===d.AIR?null:{id:n,count:1},this.icons),t.root.draggable=n!==d.AIR}}}function Av(i){const e=new $g({canvas:i,antialias:!1});return e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Ht,e.shadowMap.enabled=!0,e.shadowMap.type=Eu,e}function Tv(){const i=new Jf;i.background=new Ve(9031679),i.fog=new wl(9031679,J*4.2,J*7.5);const e=new ud(16777215,.45);i.add(e);const t=new cd(16777215,.8);t.position.set(120,200,50),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.bias=-4e-4,t.shadow.camera.near=1,t.shadow.camera.far=520,t.shadow.camera.left=-110,t.shadow.camera.right=110,t.shadow.camera.top=110,t.shadow.camera.bottom=-110,i.add(t.target),i.add(t);const n=new Wt,s=new ft(new Yi(2.6,24,16),new Hn({color:16774054,fog:!1,toneMapped:!1,depthWrite:!1})),r=new ft(new Yi(4.8,24,16),new Hn({color:16766571,transparent:!0,opacity:.42,fog:!1,toneMapped:!1,depthWrite:!1,side:hn}));return n.add(r),n.add(s),i.add(n),{scene:i,sunLight:t,ambientLight:e,sunVisual:n}}function Rv(){return new un(75,window.innerWidth/window.innerHeight,.1,600)}function wv(i){const e=new ii({map:i.texture,vertexColors:!0}),t=new ii({map:i.texture,vertexColors:!0,transparent:!0,depthWrite:!1,side:hn,alphaTest:.15});return{matOpaque:e,matTransparent:t}}function Cv(i){const e=new id(new sd(new Mn(1.01,1.01,1.01)),new Wu({color:16777062}));return e.visible=!1,i.add(e),e}const Iv=6,Pv=.9,Lv=12,Dv=.2,Ov=.42,Nv=new Set([d.AIR,d.BEDROCK,d.APPLE,d.WEAPON_BANDIT_BLADE,d.WEAPON_RAIDER_SABER,d.WEAPON_SCORP_BOW,d.WEAPON_JAGUAR_CLAWS,d.WEAPON_WRAITH_HAMMER,d.WEAPON_YETI_AXE,d.STICK,d.WOOD_SWORD,d.WOOD_AXE,d.WOOD_PICKAXE,d.WOOD_SPADE,d.STONE_SWORD,d.STONE_AXE,d.STONE_PICKAXE,d.STONE_SPADE,d.BOW,d.ARROW,d.IRON_SWORD,d.IRON_AXE,d.IRON_PICKAXE,d.IRON_SPADE,d.IRON,d.COAL,d.GOLD,d.FORGED_IRON,d.IRON_HELMET,d.IRON_CHESTPLATE,d.IRON_LEGGINGS,d.IRON_BOOTS]);function Uv(i){return i===d.BOW||i===d.WEAPON_SCORP_BOW}function gu(i){switch(i){case d.WEAPON_BANDIT_BLADE:return 24;case d.WEAPON_RAIDER_SABER:return 27;case d.WEAPON_SCORP_BOW:return 22;case d.BOW:return 20;case d.IRON_SWORD:return 30;case d.IRON_AXE:return 26;case d.IRON_PICKAXE:return 23;case d.IRON_SPADE:return 17;case d.WEAPON_JAGUAR_CLAWS:return 20;case d.WEAPON_WRAITH_HAMMER:return 32;case d.WEAPON_YETI_AXE:return 36;case d.WOOD_SWORD:return 18;case d.WOOD_AXE:return 16;case d.WOOD_PICKAXE:return 15;case d.WOOD_SPADE:return 13;case d.STONE_SWORD:return 22;case d.STONE_AXE:return 19;case d.STONE_PICKAXE:return 18;case d.STONE_SPADE:return 15;default:return Lv}}function Fv(i,e,t,n){const s=e,r=e+1,a=t,o=t+1,l=n,c=n+1,u=i.getAABB();return!(u.maxX>s&&u.minX<r&&u.maxY>a&&u.minY<o&&u.maxZ>l&&u.minZ<c)}const xa=8;function Bv(){const i=[[32,0,32,64],[0,32,64,32],[8,8,24,30],[56,8,40,30],[8,56,24,34],[56,56,40,34],[16,0,30,18],[48,0,34,18],[0,16,18,30],[64,16,46,30],[0,48,18,34],[64,48,46,34],[16,64,30,46],[48,64,34,46],[24,24,8,40],[40,24,56,40],[24,40,8,24],[40,40,56,24]],e=[];for(let t=0;t<xa;t++){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d");s.clearRect(0,0,64,64);const r=Math.floor((t+1)/xa*i.length);s.strokeStyle=`rgba(30, 30, 30, ${(.22+t*.08).toFixed(2)})`,s.lineWidth=3;for(let o=0;o<r;o++){const l=i[o];s.beginPath(),s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]),s.stroke()}const a=new cr(n);a.colorSpace=Ht,a.minFilter=Zt,a.magFilter=dn,a.wrapS=In,a.wrapT=In,e.push(a)}return e}function kv(i,e){const t=new Hn({map:e[0],transparent:!0,opacity:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n=new ft(new Mn(1.014,1.014,1.014),t);return n.visible=!1,i.add(n),{crackOverlay:n,crackOverlayMat:t}}function si(i,e){i.breakState=null,e.visible=!1}function xh(i,e,t,n,s,r){if(!i||!Nl(i.id)||!_h(e,i.id)){si(t,n);return}if(t.breakState&&t.breakState.x===i.x&&t.breakState.y===i.y&&t.breakState.z===i.z&&t.breakState.id===i.id&&t.breakState.heldItemId===e)return;const a=jg(i.id)/Math.max(1,vv(e,i.id));t.breakState={x:i.x,y:i.y,z:i.z,id:i.id,heldItemId:e,progress:0,duration:a},n.position.set(i.x+.5,i.y+.5,i.z+.5),s.map=r[0],s.needsUpdate=!0,n.visible=!0}function zv(i,e,t,n,s,r,a,o,l,c,u,h=null){if(e.suppressBreakUntilMouseUp||!e.leftMouseDown){si(e,a);return}if(document.pointerLockElement!==t||c()){si(e,a);return}if(!n||!Nl(n.id)||!_h(u,n.id)){si(e,a);return}if(xh(n,u,e,a,o,l),!e.breakState)return;e.breakState.progress+=i/Math.max(.05,e.breakState.duration);const f=Math.min(xa-1,Math.floor(e.breakState.progress*xa));if(a.position.set(e.breakState.x+.5,e.breakState.y+.5,e.breakState.z+.5),o.map=l[f],o.needsUpdate=!0,a.visible=!0,e.breakState.progress>=1){const{x:m,y:_,z:x,id:g}=e.breakState;s.setBlock(m,_,x,d.AIR),r.addItem(Jg(g),1),h&&h(m,_,x,g),e.breakState=null,a.visible=!1}}const Hv=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function _u(i,e,t){return`${i},${e},${t}`}function Gv(){const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=e.createLinearGradient(0,64,0,0);t.addColorStop(0,"rgba(255,120,18,0)"),t.addColorStop(.18,"rgba(255,138,26,0.75)"),t.addColorStop(.52,"rgba(255,196,64,0.92)"),t.addColorStop(.86,"rgba(255,238,160,0.7)"),t.addColorStop(1,"rgba(255,255,220,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,2),e.bezierCurveTo(46,12,56,26,52,40),e.bezierCurveTo(49,53,40,61,32,62),e.bezierCurveTo(24,60,13,52,12,39),e.bezierCurveTo(11,26,19,13,32,2),e.fill(),e.fillStyle="rgba(255,110,10,0.55)",e.beginPath(),e.moveTo(31,10),e.bezierCurveTo(40,18,44,28,42,38),e.bezierCurveTo(40,46,36,52,32,54),e.bezierCurveTo(27,52,23,46,22,38),e.bezierCurveTo(21,29,24,19,31,10),e.fill();const n=new cr(i);return n.colorSpace=Ht,n.minFilter=Zt,n.magFilter=Zt,n.wrapS=In,n.wrapT=In,n}function Wv(i){const e=new Wt,t=new Hn({map:i,transparent:!0,depthWrite:!1,side:hn,toneMapped:!1}),n=new hr(.9,1.2);for(const r of[0,Math.PI*.5]){const a=new ft(n,t.clone());a.position.set(0,.55,0),a.rotation.y=r,e.add(a)}const s=new Yu(16747053,.75,4.5,2);return s.position.set(0,.7,0),e.add(s),e.userData.dispose=()=>{e.traverse(r=>{r.isMesh&&(r.geometry?.dispose?.(),r.material?.dispose?.())})},e}function Vv(i){switch(i){case d.LEAVES:case d.VINE:case d.FLOWER_RED:case d.FLOWER_YELLOW:case d.APPLE:return 1.4;case d.BRAMBLE:case d.MOSS:return 1.9;case d.CACTUS:return 2.4;case d.LOG:case d.PLANK:return 3.2;default:return 2}}class Xv{constructor(e,t){this.scene=e,this.world=t,this.fireTexture=Gv(),this.fires=new Map}igniteBlock(e,t,n,s=1){if(Math.random()>s)return!1;const r=this.world.getBlock(e,t,n);if(!lo(r))return!1;const a=_u(e,t,n);if(this.fires.has(a))return!0;const o=Wv(this.fireTexture);return o.position.set(e+.5,t,n+.5),this.scene.add(o),this.fires.set(a,{key:a,x:e,y:t,z:n,mesh:o,blockId:r,life:Vv(r)*(.85+Math.random()*.45),spreadTimer:.08+Math.random()*.12,animSeed:Math.random()*Math.PI*2}),!0}extinguishAt(e,t,n){const s=_u(e,t,n),r=this.fires.get(s);r&&(this.scene.remove(r.mesh),r.mesh.userData.dispose?.(),this.fires.delete(s))}igniteAround(e,t,n=.8){const s=Math.ceil(t);for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++)for(let o=-s;o<=s;o++)Math.hypot(o,r,a)>t||this.igniteBlock(Math.floor(e.x+o),Math.floor(e.y+r),Math.floor(e.z+a),n)}spreadFrom(e){for(const[t,n,s]of Hv){const r=e.x+t,a=e.y+n,o=e.z+s,l=this.world.getBlock(r,a,o);if(!lo(l))continue;const c=n>0?.82:n<0?.32:.58;this.igniteBlock(r,a,o,c)}}update(e){const t=performance.now()*.001;for(const n of[...this.fires.values()]){const s=this.world.getBlock(n.x,n.y,n.z);if(!lo(s)){this.extinguishAt(n.x,n.y,n.z);continue}n.life-=e,n.spreadTimer-=e,n.spreadTimer<=0&&(this.spreadFrom(n),n.spreadTimer=.1+Math.random()*.14);const r=.92+Math.sin(t*13+n.animSeed)*.08;n.mesh.scale.setScalar(r),n.mesh.position.y=n.y+Math.sin(t*9+n.animSeed)*.03,n.life<=0&&(this.world.setBlock(n.x,n.y,n.z,d.AIR),this.extinguishAt(n.x,n.y,n.z))}}}const vh=100,pn=document.getElementById("app"),Sh=Av(pn),{scene:mn,sunLight:Ys,ambientLight:Yv,sunVisual:Zr}=Tv(),en=Rv();mn.add(en);const Eh=Jx(),{matOpaque:qv,matTransparent:Kv}=wv(Eh),ya=20260304,Rt=new J_(mn,Eh,ya);Rt.setupMaterials(qv,Kv);const $v=new ev(mn,ya+55123),ir=new Audio(ov);ir.loop=!0;ir.preload="auto";const We=new Kx(en,pn),Zv=Array.from({length:30},()=>({id:d.AIR,count:0})),fe=new bv(Zv);fe.addItem(d.WIZARD_GROUP_SPAWNER,1);fe.addItem(d.BOW,1);fe.addItem(d.ARROW,10);const jv=document.getElementById("terrain-map"),Bl=new hv(jv),sr=new $x(fe,ya+191),ys=new Mv(fe,{onCoins:i=>sr.addCoins(i)}),Mh=new Xv(mn,Rt),js=new qx(mn,Rt,{onEnemyKilled:i=>{i?.dropItem&&fe.addItem(i.dropItem,1)},onQuestGiverKilled:i=>{sr.cancelQuestForGiver(i.id)}});let ti=null;const $s=new av(mn,()=>ti?.playerId??null),xu=new _x(en),va=new Cx(mn,Rt,js,{onPlayerHit:i=>{ct.healthEnabled&&($t=Math.max(0,$t-i),Js=Math.max(Js,.15))},fireSystem:Mh}),Jv=document.getElementById("name-prompt"),ba=document.getElementById("name-input"),yh=document.getElementById("name-confirm");function Qv(){const i="voxel_player_name",e=localStorage.getItem(i);if(e&&e.trim())return e.trim();const t=tv();return localStorage.setItem(i,t),t}let la="offline",Aa=!1,ml=0;function bh(i){Jv.classList.toggle("visible",i)}function eS(i){ti&&ti.close(),la="connecting",ti=new sv({playerName:i,onStatus:e=>{la=e},onWelcome:e=>{la="connected",Number.isFinite(e.serverNowMs)&&(ml=e.serverNowMs-Date.now()),$s.applyWelcome(e.players??[]);for(const t of e.blocks??[])Rt.setBlock(t.x,t.y,t.z,t.id)},onPlayerJoin:e=>{$s.ensurePlayer(e.id,e)},onPlayerLeave:e=>{$s.removePlayer(e)},onPlayersSnapshot:e=>{Number.isFinite(e.serverNowMs)&&(ml=e.serverNowMs-Date.now()),$s.applySnapshot(e.players??[])},onBlockSet:e=>{Rt.getBlock(e.x,e.y,e.z)===d.FURNACE&&e.id===d.AIR&&ys.removeFurnace(e.x,e.y,e.z),Rt.setBlock(e.x,e.y,e.z,e.id)}}),ti.connect()}const ct={walkSpeed:5.2,flySpeed:11.5,mapWidthBlocks:96,mapHeightBlocks:96,bgmVolume:.1,healthEnabled:!0,agroEnabled:!0,godModeEnabled:!1};let $t=vh,Js=0,Ss=0;function Ah(i){ir.volume=Math.max(0,Math.min(1,i))}function kl(){ir.paused&&ir.play().catch(()=>{})}We.setMovementSpeeds(ct.walkSpeed,ct.flySpeed);Bl.setBlockSpan(ct.mapWidthBlocks,ct.mapHeightBlocks);Ah(ct.bgmVolume);fe.setupDebugPane(ct,i=>{i.walkSpeed!==void 0&&(ct.walkSpeed=i.walkSpeed),i.flySpeed!==void 0&&(ct.flySpeed=Math.min(300,i.flySpeed)),i.mapWidthBlocks!==void 0&&(ct.mapWidthBlocks=Math.max(24,Math.min(192,i.mapWidthBlocks))),i.mapHeightBlocks!==void 0&&(ct.mapHeightBlocks=Math.max(24,Math.min(192,i.mapHeightBlocks))),i.bgmVolume!==void 0&&(ct.bgmVolume=Math.max(0,Math.min(1,i.bgmVolume))),i.healthEnabled!==void 0&&(ct.healthEnabled=i.healthEnabled,ct.healthEnabled||($t=Gl())),i.agroEnabled!==void 0&&(ct.agroEnabled=i.agroEnabled),i.godModeEnabled!==void 0&&Wl(i.godModeEnabled),We.setMovementSpeeds(ct.walkSpeed,ct.flySpeed),Bl.setBlockSpan(ct.mapWidthBlocks,ct.mapHeightBlocks),Ah(ct.bgmVolume),kl()});fe.setHotbarSelection(0);const Nn=new A,vo=Cv(mn),zl=Bv(),{crackOverlay:Hi,crackOverlayMat:Th}=kv(mn,zl),tS=new Ve(9031679),nS=new Ve(0),So=new Ve,zt={breakState:null,leftMouseDown:!1,suppressBreakUntilMouseUp:!1};let _i=0,Ui=null,En=!1,Dn=!1,Jn=0;const Hl=[{id:"fireball",label:"Fireball"},{id:"empty_2",label:"Empty"},{id:"empty_3",label:"Empty"},{id:"empty_4",label:"Empty"},{id:"empty_5",label:"Empty"},{id:"empty_6",label:"Empty"},{id:"empty_7",label:"Empty"},{id:"empty_8",label:"Empty"},{id:"empty_9",label:"Empty"}];rr();let Gt=null,Gi=null,Rh=new A(0,40,0);function Wi(){return fe.isInventoryOpen()||fe.isCraftingOpen()||fe.isFurnaceOpen()||fe.isDialogueOpen()||fe.isDebugOpen()||!Aa}function Bn(){const i=document.pointerLockElement===pn;fe.setOverlayVisible(!i&&!Wi())}function gl(){const i=gv(fe);i.some(e=>e.id===Ui)||(Ui=i[0]?.id??null),fe.renderCraftingCatalogue(i,Ui,e=>{Ui=e,gl()},()=>{Ui&&_v(fe,Ui)&&gl()})}function Gl(){return vh*ix(fe.equippedArmor)}function rr(){En&&Dn?fe.setHotbarOverride(Hl,Jn):fe.clearHotbarOverride()}function Wl(i){En=!!i,ct.godModeEnabled=En,En||(Dn=!1),rr()}function iS(i){const e=[`Welcome to our ${i.settlementType==="town"?"town":"village"}.`,"The roads are quiet now, but night brings trouble.","Some say oreum scouts watch from the hills.","The guards keep this place standing.","You are welcome here, traveler."],t=["Keep your weapon ready beyond the walls.","We hold the line if oreum creatures approach.","No disorder inside the settlement.","Iron wins the close fights.","Stay alert near sunset."],n=i.dialogueKind==="guard"?t:e,s=Math.abs((i.id*17+ya)%n.length);fe.openDialogue(i.name,n[s],[{label:"Close",onSelect:()=>fe.closeDialogue()}])}function sS(i,e){for(let t=127;t>=1;t--)if(ma(Rt.getBlock(i,t,e))&&!ma(Rt.getBlock(i,t+1,e)))return t+1;return 45}We.position.set(.5,sS(0,0)+2,.5);Rh.copy(We.position);We.syncCamera();function rS(){en.aspect=window.innerWidth/window.innerHeight,en.updateProjectionMatrix(),Sh.setSize(window.innerWidth,window.innerHeight)}function aS(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function oS(i){const n=(i%Vr+Vr)%Vr/Vr*Math.PI*2,s=Math.sin(n),r=n-Math.PI*.5,a=280,o=We.position.y+s*230,l=We.position.x+Math.cos(r)*a,c=We.position.z+Math.sin(r)*a;Ys.position.set(l,o,c),Ys.target.position.set(We.position.x,We.position.y,We.position.z),Ys.target.updateMatrixWorld();const u=aS(-.03,.2,s);Ys.intensity=.02+u*1.06,Yv.intensity=.05+u*.3,Ys.castShadow=u>.03;const h=92,f=Math.sqrt(Math.max(0,1-s*s)),m=Math.cos(r)*f,_=s,x=Math.sin(r)*f;Zr.position.set(We.position.x+m*h,We.position.y+_*h,We.position.z+x*h);const g=s>-.03;if(Zr.visible=g,g){const p=Zr.children[0],T=Zr.children[1];p.material.opacity=.2+u*.45,T.scale.setScalar(.85+u*.25)}return So.lerpColors(nS,tS,u),mn.background.copy(So),mn.fog&&mn.fog.color.copy(So),u}window.addEventListener("resize",rS);window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("pointerdown",kl);window.addEventListener("keydown",kl);pn.addEventListener("click",()=>{Aa&&(Wi()||document.pointerLockElement!==pn&&pn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==pn&&(zt.leftMouseDown=!1,zt.suppressBreakUntilMouseUp=!1,si(zt,Hi)),Bn()});window.addEventListener("wheel",i=>{document.pointerLockElement!==pn||Wi()||(En&&Dn?(Jn+=i.deltaY>0?1:-1,Jn<0&&(Jn=fe.hotbarSize-1),Jn>=fe.hotbarSize&&(Jn=0),rr()):(_i+=i.deltaY>0?1:-1,_i<0&&(_i=fe.hotbarSize-1),_i>=fe.hotbarSize&&(_i=0),fe.setHotbarSelection(_i)))});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&fe.isDialogueOpen()){sr.closeDialogue(),Bn();return}if(i.code==="KeyU"){const e=!fe.isDebugOpen();fe.setDebugVisible(e),e?document.exitPointerLock():!fe.isInventoryOpen()&&!fe.isDialogueOpen()&&!fe.isCraftingOpen()&&!fe.isFurnaceOpen()&&pn.requestPointerLock(),Bn();return}if(i.code==="KeyE"){if(fe.isDialogueOpen())return;fe.isInventoryOpen()?(fe.setInventoryVisible(!1),!fe.isDebugOpen()&&!fe.isCraftingOpen()&&!fe.isFurnaceOpen()&&pn.requestPointerLock()):(ys.close(),fe.setCraftingVisible(!1),fe.setInventoryVisible(!0),document.exitPointerLock()),Bn();return}if(i.code==="KeyR"){if(fe.isDialogueOpen())return;fe.isCraftingOpen()?(fe.setCraftingVisible(!1),!fe.isInventoryOpen()&&!fe.isDebugOpen()&&!fe.isFurnaceOpen()&&pn.requestPointerLock()):(ys.close(),fe.setInventoryVisible(!1),fe.setCraftingVisible(!0),Ui=null,gl(),document.exitPointerLock()),Bn();return}if(i.code==="KeyH"){const e=Gl();if(!ct.healthEnabled||$t>=e)return;fe.consumeItem(d.APPLE,1)&&($t=Math.min(e,$t+25));return}if(i.code==="KeyK"&&En){Dn=!Dn,rr();return}if(i.code==="KeyF"){if(fe.isDialogueOpen())return;if(Gt?.id===d.FURNACE){document.exitPointerLock(),ys.openAt(Gt.x,Gt.y,Gt.z),Bn();return}Gi&&(document.exitPointerLock(),Gi.questgiver?sr.onTalkToQuestGiver(Gi):iS(Gi),Bn());return}if(/Digit[1-9]/.test(i.code)){const e=Number(i.code.slice(-1))-1;e>=0&&e<fe.hotbarSize&&(En&&Dn?(Jn=e,rr()):(_i=e,fe.setHotbarSelection(_i)))}});window.addEventListener("mousedown",i=>{if(Aa&&!(document.pointerLockElement!==pn||Wi())){if(i.button===0){if(zt.leftMouseDown=!0,En&&Dn){if(Hl[Jn]?.id==="fireball"){en.getWorldDirection(Nn);const n=en.position.clone().addScaledVector(Nn,.9);n.y-=.05,va.firePlayerFireball(n,Nn)}zt.suppressBreakUntilMouseUp=!0,si(zt,Hi);return}const e=fe.getSelectedItemId();if(Uv(e)){if(Ss>0||!fe.consumeItem(d.ARROW,1))return;en.getWorldDirection(Nn);const t=en.position.clone().addScaledVector(Nn,.68);t.y-=.08,va.firePlayerArrow(t,Nn,gu(e)),Ss=Ov,zt.suppressBreakUntilMouseUp=!0,si(zt,Hi);return}if(Ss<=0){en.getWorldDirection(Nn);const t=js.attackNearestInFront(en.position,Nn,Iv,Pv,gu(fe.getSelectedItemId()));if(Ss=Dv,t){zt.suppressBreakUntilMouseUp=!0,si(zt,Hi);return}}zt.suppressBreakUntilMouseUp=!1,xh(Gt,fe.getSelectedItemId(),zt,Hi,Th,zl)}if(i.button===2){if(En&&Dn||!Gt)return;const e=Gt.previous.x,t=Gt.previous.y,n=Gt.previous.z;if(Rt.getBlock(e,t,n)!==d.AIR||!Fv(We,e,t,n))return;const s=fe.getSelectedItemId();if(Nv.has(s)||!fe.consumeSelectedBlock())return;Rt.setBlock(e,t,n,s),ti?.sendBlockSet(e,t,n,s)}}});window.addEventListener("mouseup",i=>{i.button===0&&(zt.leftMouseDown=!1,zt.suppressBreakUntilMouseUp=!1,si(zt,Hi))});let vu=performance.now(),jr=0,Eo=0,Mo=0;function wh(i){const e=Math.min(.05,(i-vu)/1e3);vu=i;const t=(Date.now()+ml)/1e3,n=En&&Dn?d.AIR:fe.getSelectedItemId(),s=Gl();Ss=Math.max(0,Ss-e),$t=Math.min($t,s);const r=oS(t);if($v.update(We.position,e,t,r),xu.setItem(n),xu.update(t),ti?.tick(e),Wi()||We.update(Rt,e),ti?.setLocalState({x:We.position.x,y:We.position.y,z:We.position.z,yaw:We.yaw,pitch:We.pitch,flyMode:We.flyMode,heldItemId:n,armorIds:fe.getEquippedArmorIds()}),Mo+=e,Mo>=.14&&(Rt.loadChunksAround(We.position.x,We.position.z),Mo=0),Rt.rebuildOneChunk(),Rt.rebuildOneChunk(),ys.update(e),Mh.update(e),js.update(We.position,e,t,ct.agroEnabled,va,We.velocity),va.update(e,We),ct.healthEnabled){if(Js-=e,ct.agroEnabled&&Js<=0){const l=js.countHostilesInRange(We.position,1.8);l>0&&($t=Math.max(0,$t-Math.min(18,l*6)),Js=.45)}$t<=0&&($t=s,We.position.copy(Rh),We.velocity.set(0,0,0),We.syncCamera())}else $t=s;Gi=js.getNearestTalker(We.position,4.2),en.getWorldDirection(Nn),Gt=Zx(Rt,en.position,Nn,Qg),zv(e,zt,pn,Gt,Rt,fe,Hi,Th,zl,Wi,n,(l,c,u,h)=>{h===d.FURNACE&&ys.removeFurnace(l,c,u),ti?.sendBlockSet(l,c,u,d.AIR)}),Gt&&!Wi()?(vo.visible=!0,vo.position.set(Gt.x+.5,Gt.y+.5,Gt.z+.5)):vo.visible=!1;let a=sr.getActiveQuestText();const o=la==="connected"?"MP: Online":"MP: Offline";if(a=a?`${a} | ${o}`:o,Gt?.id===d.FURNACE&&!fe.isInventoryOpen()){const l="Press F to use Furnace";a=a?`${a} | ${l}`:l}else if(Gi&&!fe.isInventoryOpen()){const l=`Press F to talk to ${Gi.name}`;a=a?`${a} | ${l}`:l}if(En){const l=Dn?`God: ${Hl[Jn]?.label??"Empty"} | K to return`:"God mode enabled | Press K for abilities";a=a?`${a} | ${l}`:l}fe.getItemCount(d.APPLE)>0&&ct.healthEnabled&&$t<s&&(a=a?`${a} | Press H to eat Apple`:"Press H to eat Apple"),fe.setHint(a),fe.updateHealth($t,s,ct.healthEnabled),fe.updateMode(We.flyMode),fe.updateCoords(We.position),Bn(),jr+=e,Eo++,jr>=.25&&(fe.updateFPS(Eo/jr),jr=0,Eo=0),Bl.render(Rt,We.position,t),$s.update(e),Sh.render(mn,en),requestAnimationFrame(wh)}Rt.loadChunksAround(We.position.x,We.position.z);Bn();bh(!0);ba.value=Qv();ba.focus();yh.addEventListener("click",()=>{const i=(ba.value||"").trim();i&&(localStorage.setItem("voxel_player_name",i),Aa=!0,bh(!1),eS(i),Bn())});ba.addEventListener("keydown",i=>{i.key==="Enter"&&yh.click()});window.setGodMode=(i=!0)=>Wl(i);window.gameDebug={setGodMode:Wl,getGodMode:()=>En,getGodBarActive:()=>Dn};requestAnimationFrame(wh);
