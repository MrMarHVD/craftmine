(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Go="176",Yu=0,gl=1,qu=2,Bc=1,kc=2,Un=3,ci=0,Xt=1,cn=2,si=0,ns=1,_l=2,xl=3,vl=4,Ku=5,yi=100,$u=101,Zu=102,ju=103,Ju=104,Qu=200,eh=201,th=202,nh=203,qa=204,Ka=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,uh=213,hh=214,$a=0,Za=1,ja=2,rs=3,Ja=4,Qa=5,eo=6,to=7,Vo=0,fh=1,dh=2,ri=0,ph=1,mh=2,gh=3,_h=4,xh=5,vh=6,Sh=7,zc=300,as=301,os=302,no=303,io=304,jr=306,so=1e3,Fn=1001,ro=1002,tn=1003,Mh=1004,Eh=1004,Gs=1005,Qt=1006,aa=1007,wi=1008,Tn=1009,Hc=1010,Gc=1011,Ps=1012,Wo=1013,Ci=1014,Bn=1015,Os=1016,Xo=1017,Yo=1018,Ds=1020,Vc=35902,Wc=1021,Xc=1022,Sn=1023,Ls=1026,Ns=1027,Yc=1028,qo=1029,qc=1030,Ko=1031,$o=1033,Cr=33776,Ir=33777,Pr=33778,Dr=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,So=37814,Mo=37815,Eo=37816,yo=37817,bo=37818,Ao=37819,To=37820,wo=37821,Lr=36492,Ro=36494,Co=36495,Kc=36283,Io=36284,Po=36285,Do=36286,yh=3200,bh=3201,$c=0,Ah=1,ti="",zt="srgb",ls="srgb-linear",zr="linear",rt="srgb",Li=7680,Sl=519,Th=512,wh=513,Rh=514,Zc=515,Ch=516,Ih=517,Ph=518,Dh=519,Lo=35044,Ml="300 es",kn=2e3,Hr=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,No=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function oa(i,e,t){return(1-t)*i+t*e}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],A=s[1],b=s[4],E=s[7],P=s[2],I=s[5],R=s[8];return r[0]=a*x+o*A+l*P,r[3]=a*m+o*b+l*I,r[6]=a*d+o*E+l*R,r[1]=c*x+u*A+h*P,r[4]=c*m+u*b+h*I,r[7]=c*d+u*E+h*R,r[2]=f*x+p*A+g*P,r[5]=f*m+p*b+g*I,r[8]=f*d+p*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Be;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){const i=Gr("canvas");return i.style.display="block",i}const El={};function Ur(i){i in El||(El[i]=!0,console.warn(i))}function Uh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Oh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bh(){const i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?zr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const Qe=Bh();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Gr("canvas")),Ni.width=e.width,Ni.height=e.height;const s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zh=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ca(s[a].image)):r.push(ca(s[a]))}else r=ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class Ht extends hs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Fn,s=Fn,r=Qt,a=wi,o=Sn,l=Tn,c=Ht.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ai(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=zc;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,P=(d+1)/2,I=(u+f)/4,R=(h+x)/4,L=(g+m)/4;return b>E&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=I/n,r=R/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=L/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=L/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*x,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const P=Math.sqrt(b),I=Math.atan2(P,d*A);m=Math.sin(m*I)/P,o=Math.sin(o*I)/P}const E=o*A;if(l=l*m+f*E,c=c*m+p*E,u=u*m+g*E,h=h*m+x*E,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new T,Al=new Fs;class Bs{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ws.subVectors(this.max,ps),Ui.subVectors(e.a,ps),Oi.subVectors(e.b,ps),Fi.subVectors(e.c,ps),Gn.subVectors(Oi,Ui),Vn.subVectors(Fi,Oi),di.subVectors(Ui,Fi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-di.z,di.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,di.z,0,-di.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-di.y,di.x,0];return!ha(t,Ui,Oi,Fi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ui,Oi,Fi,Ws))?!1:(Xs.crossVectors(Gn,Vn),t=[Xs.x,Xs.y,Xs.z],ha(t,Ui,Oi,Fi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new T,new T,new T,new T,new T,new T,new T,new T],gn=new T,Vs=new Bs,Ui=new T,Oi=new T,Fi=new T,Gn=new T,Vn=new T,di=new T,ps=new T,Ws=new T,Xs=new T,pi=new T;function ha(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);const o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wh=new Bs,ms=new T,fa=new T;class Jr{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(fa)),this.expandByPoint(ms.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new T,da=new T,Ys=new T,Wn=new T,pa=new T,qs=new T,ma=new T;class jo{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Wn.dot(this.direction),l=-Wn.dot(Ys),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(da).addScaledVector(Ys,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),qs.subVectors(n,e),ma.crossVectors(pa,qs);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(Wn,qs));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,x,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,Yh)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Xn.crossVectors(n,$t),Xn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Xn.crossVectors(n,$t)),Xn.normalize(),Ks.crossVectors($t,Xn),s[0]=Xn.x,s[4]=Ks.x,s[8]=$t.x,s[1]=Xn.y,s[5]=Ks.y,s[9]=$t.y,s[2]=Xn.z,s[6]=Ks.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],A=n[3],b=n[7],E=n[11],P=n[15],I=s[0],R=s[4],L=s[8],y=s[12],S=s[1],C=s[5],H=s[9],B=s[13],X=s[2],Y=s[6],W=s[10],j=s[14],G=s[3],re=s[7],fe=s[11],Ee=s[15];return r[0]=a*I+o*S+l*X+c*G,r[4]=a*R+o*C+l*Y+c*re,r[8]=a*L+o*H+l*W+c*fe,r[12]=a*y+o*B+l*j+c*Ee,r[1]=u*I+h*S+f*X+p*G,r[5]=u*R+h*C+f*Y+p*re,r[9]=u*L+h*H+f*W+p*fe,r[13]=u*y+h*B+f*j+p*Ee,r[2]=g*I+x*S+m*X+d*G,r[6]=g*R+x*C+m*Y+d*re,r[10]=g*L+x*H+m*W+d*fe,r[14]=g*y+x*B+m*j+d*Ee,r[3]=A*I+b*S+E*X+P*G,r[7]=A*R+b*C+E*Y+P*re,r[11]=A*L+b*H+E*W+P*fe,r[15]=A*y+b*B+E*j+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],A=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,E=u*x*c-g*h*c+g*o*p-a*x*p-u*o*d+a*h*d,P=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,I=t*A+n*b+s*E+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=A*R,e[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*R,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*R,e[4]=b*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*R,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*R,e[8]=E*R,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*d-t*h*d)*R,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*d+t*o*d)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=P*R,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*R,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=o*h,A=l*c,b=l*u,E=l*h,P=n.x,I=n.y,R=n.z;return s[0]=(1-(x+d))*P,s[1]=(p+E)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-E)*I,s[5]=(1-(f+d))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(g+b)*R,s[9]=(m-A)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/a,h=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=kn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(o===kn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u;let g,x;if(o===kn)g=(a+r)*h,x=-2*h;else if(o===Hr)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new T,_n=new ut,Xh=new T(0,0,0),Yh=new T(1,1,1),Xn=new T,Ks=new T,$t=new T,Tl=new ut,wl=new Fs;class Ge{constructor(e=0,t=0,n=0,s=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qh=0;const Rl=new T,ki=new Fs,In=new ut,$s=new T,gs=new T,Kh=new T,$h=new Fs,Cl=new T(1,0,0),Il=new T(0,1,0),Pl=new T(0,0,1),Dl={type:"added"},Zh={type:"removed"},zi={type:"childadded",child:null},ga={type:"childremoved",child:null};class It extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new T,t=new Ge,n=new Fs,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Be}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(gs,$s,this.up):In.lookAt($s,gs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new T(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new T,Pn=new T,_a=new T,Dn=new T,Hi=new T,Gi=new T,Ll=new T,xa=new T,va=new T,Sa=new T,Ma=new gt,Ea=new gt,ya=new gt;class Jt{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),Pn.subVectors(n,t),_a.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Pn),l=xn.dot(_a),c=Pn.dot(Pn),u=Pn.dot(_a),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ma.setScalar(0),Ea.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),ya.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Pn.subVectors(e,t),xn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),xn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Gi.subVectors(r,n),xa.subVectors(e,n);const l=Hi.dot(xa),c=Gi.dot(xa);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,s);const u=Hi.dot(va),h=Gi.dot(va);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hi,a);Sa.subVectors(e,r);const p=Hi.dot(Sa),g=Gi.dot(Sa);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ll.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Ll,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Lh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ba(a,r,e+1/3),this.g=ba(a,r,e),this.b=ba(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Qe.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=zt){Qe.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Zs);const n=oa(Yn.h,Zs.h,t),s=oa(Yn.s,Zs.s,t),r=oa(Yn.l,Zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new We;We.NAMES=Qc;let jh=0;class Pi extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ns,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ka,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new T,js=new He;let Jh=0;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class eu extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tu extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qh=0;const on=new ut,Aa=new It,Vi=new T,Zt=new Bs,_s=new Bs,At=new T;class qt extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?tu:eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Zt.min,_s.min),Zt.expandByPoint(At),At.addVectors(Zt.max,_s.max),Zt.expandByPoint(At)):(Zt.expandByPoint(_s.min),Zt.expandByPoint(_s.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),At.add(Vi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;const c=new T,u=new T,h=new T,f=new He,p=new He,g=new He,x=new T,m=new T;function d(L,y,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[L].add(x),o[y].add(x),o[S].add(x),l[L].add(m),l[y].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,y=A.length;L<y;++L){const S=A[L],C=S.start,H=S.count;for(let B=C,X=C+H;B<X;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new T,E=new T,P=new T,I=new T;function R(L){P.fromBufferAttribute(s,L),I.copy(P);const y=o[L];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),E.crossVectors(I,y);const C=E.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,C)}for(let L=0,y=A.length;L<y;++L){const S=A[L],C=S.start,H=S.count;for(let B=C,X=C+H;B<X;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new ut,mi=new jo,Js=new Jr,Ul=new T,Qs=new T,er=new T,tr=new T,Ta=new T,nr=new T,Ol=new T,ir=new T;class vt extends It{constructor(e=new qt,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ta.fromBufferAttribute(h,e),a?nr.addScaledVector(Ta,u):nr.addScaledVector(Ta.sub(t),u))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Js.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Js,Ul)===null||mi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Nl.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,P=b;E<P;E+=3){const I=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);s=sr(this,d,e,n,c,u,h,I,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);s=sr(this,a,e,n,c,u,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,P=b;E<P;E+=3){const I=E,R=E+1,L=E+2;s=sr(this,d,e,n,c,u,h,I,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=m,b=m+1,E=m+2;s=sr(this,a,e,n,c,u,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ef(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ci,o),l===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Qs),i.getVertexPosition(l,er),i.getVertexPosition(c,tr);const u=ef(i,e,t,n,Qs,er,tr,Ol);if(u){const h=new T;Jt.getBarycoord(Ol,Qs,er,tr,h),s&&(u.uv=Jt.getInterpolatedAttribute(s,o,l,c,h,new He)),r&&(u.uv1=Jt.getInterpolatedAttribute(r,o,l,c,h,new He)),a&&(u.normal=Jt.getInterpolatedAttribute(a,o,l,c,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new T,materialIndex:0};Jt.getNormal(Qs,er,tr,f.normal),u.face=f,u.barycoord=h}return u}class En extends qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(x,m,d,A,b,E,P,I,R,L,y){const S=E/R,C=P/L,H=E/2,B=P/2,X=I/2,Y=R+1,W=L+1;let j=0,G=0;const re=new T;for(let fe=0;fe<W;fe++){const Ee=fe*C-B;for(let Ce=0;Ce<Y;Ce++){const st=Ce*S-H;re[x]=st*A,re[m]=Ee*b,re[d]=X,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[d]=I>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ce/R),h.push(1-fe/L),j+=1}}for(let fe=0;fe<L;fe++)for(let Ee=0;Ee<R;Ee++){const Ce=f+Ee+Y*fe,st=f+Ee+Y*(fe+1),K=f+(Ee+1)+Y*(fe+1),ie=f+(Ee+1)+Y*fe;l.push(Ce,st,ie),l.push(st,K,ie),G+=6}o.addGroup(p,G,y),p+=G,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const nf={clone:us,merge:kt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new T,Fl=new He,Bl=new He;class ln extends iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Bl),t.subVectors(Bl,Fl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class af extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new ln(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const a=new ln(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends Ht{constructor(e=[],t=as,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class of extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:si});r.uniforms.tEquirect.value=t;const a=new vt(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Qt),new af(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class en extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cf extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new T;class Vr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class el extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const xs=new T,qi=new T,Ki=new T,$i=new He,vs=new He,ru=new ut,rr=new T,Ss=new T,ar=new T,kl=new He,Ra=new He,zl=new He;class au extends It{constructor(e=new el){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uf(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Vr(n,3,0,!1)),Yi.setAttribute("uv",new Vr(n,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;or(rr.set(-.5,-.5,0),Ki,a,qi,s,r),or(Ss.set(.5,-.5,0),Ki,a,qi,s,r),or(ar.set(.5,.5,0),Ki,a,qi,s,r),kl.set(0,0),Ra.set(1,0),zl.set(1,1);let o=e.ray.intersectTriangle(rr,Ss,ar,!1,xs);if(o===null&&(or(Ss.set(-.5,.5,0),Ki,a,qi,s,r),Ra.set(0,1),o=e.ray.intersectTriangle(rr,ar,Ss,!1,xs),o===null))return;const l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Jt.getInterpolation(xs,rr,Ss,ar,kl,Ra,zl,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function or(i,e,t,n,s,r){$i.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vs.x=r*$i.x-s*$i.y,vs.y=s*$i.x+r*$i.y):vs.copy($i),i.copy(e),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(ru)}const Ca=new T,hf=new T,ff=new Be;class vi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ca.subVectors(n,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ff.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Jr,lr=new T;class tl{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],A=s[13],b=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-p,E-d).normalize(),n[1].setComponents(l+r,f+c,m+p,E+d).normalize(),n[2].setComponents(l+a,f+u,m+g,E+A).normalize(),n[3].setComponents(l-a,f-u,m-g,E-A).normalize(),n[4].setComponents(l-o,f-h,m-x,E-b).normalize(),t===kn)n[5].setComponents(l+o,f+h,m+x,E+b).normalize();else if(t===Hr)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(lr.x=s.normal.x>0?e.max.x:e.min.x,lr.y=s.normal.y>0?e.max.y:e.min.y,lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ou extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wr=new T,Xr=new T,Hl=new ut,Ms=new jo,cr=new Jr,Ia=new T,Gl=new T;class df extends It{constructor(e=new qt,t=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wr.fromBufferAttribute(t,s-1),Xr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wr.distanceTo(Xr);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Hl.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=u.getX(x),A=u.getX(x+1),b=ur(this,e,Ms,l,d,A,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=ur(this,e,Ms,l,x,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=ur(this,e,Ms,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=ur(this,e,Ms,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Wr.fromBufferAttribute(o,s),Xr.fromBufferAttribute(o,r),t.distanceSqToSegment(Wr,Xr,Ia,Gl)>n)return;Ia.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ia);if(!(c<e.near||c>e.far))return{distance:c,point:Gl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Vl=new T,Wl=new T;class pf extends df{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vl.fromBufferAttribute(t,s),Wl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vl.distanceTo(Wl);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qr extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lu extends Ht{constructor(e,t,n=Ci,s,r,a,o=tn,l=tn,c,u=Ls){if(u!==Ls&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ks extends qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;A(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function A(){const E=new T,P=new T;let I=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const y=[],S=L/r,C=S*(t-e)+e;for(let H=0;H<=s;H++){const B=H/s,X=B*l+o,Y=Math.sin(X),W=Math.cos(X);P.x=C*Y,P.y=-S*n+m,P.z=C*W,h.push(P.x,P.y,P.z),E.set(Y,R,W).normalize(),f.push(E.x,E.y,E.z),p.push(B,1-S),y.push(g++)}x.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const S=x[y][L],C=x[y+1][L],H=x[y+1][L+1],B=x[y][L+1];(e>0||y!==0)&&(u.push(S,C,B),I+=3),(t>0||y!==r-1)&&(u.push(C,H,B),I+=3)}c.addGroup(d,I,0),d+=I}function b(E){const P=g,I=new He,R=new T;let L=0;const y=E===!0?e:t,S=E===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const C=g;for(let H=0;H<=s;H++){const X=H/s*l+o,Y=Math.cos(X),W=Math.sin(X);R.x=y*W,R.y=m*S,R.z=y*Y,h.push(R.x,R.y,R.z),f.push(0,S,0),I.x=Y*.5+.5,I.y=W*.5*S+.5,p.push(I.x,I.y),g++}for(let H=0;H<s;H++){const B=P+H,X=C+H;E===!0?u.push(X,X+1,B):u.push(X+1,X,B),L+=3}c.addGroup(d,L,E===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nl extends ks{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new nl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const hr=new T,fr=new T,Pa=new T,dr=new Jt;class mf extends qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Nr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:d}=dr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),dr.getNormal(Pa),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const b=(A+1)%3,E=h[A],P=h[b],I=dr[u[A]],R=dr[u[b]],L=`${E}_${P}`,y=`${P}_${E}`;y in f&&f[y]?(Pa.dot(f[y].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(R.x,R.y,R.z)),f[y]=null):L in f||(f[L]={index0:c[A],index1:c[b],normal:Pa.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:m}=f[g];hr.fromBufferAttribute(o,x),fr.fromBufferAttribute(o,m),p.push(hr.x,hr.y,hr.z),p.push(fr.x,fr.y,fr.z)}this.setAttribute("position",new dt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ea extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*f-a;for(let b=0;b<c;b++){const E=b*h-r;g.push(E,-A,0),x.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const b=A+c*d,E=A+c*(d+1),P=A+1+c*(d+1),I=A+1+c*d;p.push(b,E,I),p.push(E,P,I)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class il extends qt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,p=new T,g=new He;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const A=d+m,b=A,E=A+n+1,P=A+n+2,I=A+1;o.push(b,E,I),o.push(E,P,I)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yr extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new T,f=new T,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const A=[],b=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const I=P/t;h.x=-e*Math.cos(s+I*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+I*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(I+E,1-b),A.push(c++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){const b=u[d][A+1],E=u[d][A],P=u[d+1][A],I=u[d+1][A+1];(d!==0||a>0)&&p.push(b,E,I),(d!==n-1||l<Math.PI)&&p.push(E,P,I)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oi extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gf extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _f extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cu extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Da=new ut,Xl=new T,Yl=new T;class xf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),Yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yl),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uu extends iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vf extends xf{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mf extends cu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ef extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ql=new ut;class yf{constructor(e,t,n=0,s=1/0){this.ray=new jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(e,t=!0,n=[]){return Uo(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Uo(e[s],this,n,t);return n.sort(Kl),n}}function Kl(i,e){return i.distance-e.distance}function Uo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Uo(r[a],e,t,!0)}}function $l(i,e,t,n){const s=bf(n);switch(t){case Wc:return i*e;case Yc:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case qc:return i*e*2/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case Xc:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case Cr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(e,8)/2;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lr:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kc:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bf(i){switch(i){case Tn:case Hc:return{byteLength:1,components:1};case Ps:case Gc:case Os:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case Ci:case Wo:case Bn:return{byteLength:4,components:1};case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function hu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Af(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
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
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
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
#endif`,bd=`struct PhysicalMaterial {
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
}`,Ad=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Lp=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Tf,alphahash_pars_fragment:wf,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:If,alphatest_pars_fragment:Pf,aomap_fragment:Df,aomap_pars_fragment:Lf,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:Yf,color_pars_vertex:qf,color_vertex:Kf,common:$f,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:ed,emissivemap_pars_fragment:td,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:ud,fog_fragment:hd,fog_pars_fragment:fd,gradientmap_pars_fragment:dd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:vd,lights_toon_pars_fragment:Sd,lights_phong_fragment:Md,lights_phong_pars_fragment:Ed,lights_physical_fragment:yd,lights_physical_pars_fragment:bd,lights_fragment_begin:Ad,lights_fragment_maps:Td,lights_fragment_end:wd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Pd,map_fragment:Dd,map_pars_fragment:Ld,map_particle_fragment:Nd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Bd,morphcolor_vertex:kd,morphnormal_vertex:zd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Gd,normal_fragment_begin:Vd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:Yd,normal_vertex:qd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Jd,opaque_fragment:Qd,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:up,skinbase_vertex:hp,skinning_pars_vertex:fp,skinning_vertex:dp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:vp,transmission_pars_fragment:Sp,uv_pars_fragment:Mp,uv_pars_vertex:Ep,uv_vertex:yp,worldpos_vertex:bp,background_vert:Ap,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Ip,depth_vert:Pp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Np,equirect_vert:Up,equirect_frag:Op,linedashed_vert:Fp,linedashed_frag:Bp,meshbasic_vert:kp,meshbasic_frag:zp,meshlambert_vert:Hp,meshlambert_frag:Gp,meshmatcap_vert:Vp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:Yp,meshphong_vert:qp,meshphong_frag:Kp,meshphysical_vert:$p,meshphysical_frag:Zp,meshtoon_vert:jp,meshtoon_frag:Jp,points_vert:Qp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},bn={basic:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:kt([se.common,se.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:kt([se.lights,se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};bn.physical={uniforms:kt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const pr={r:0,b:0,g:0},_i=new Ge,rm=new ut;function am(i,e,t,n,s,r,a){const o=new We(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const P=g(b);P===null?d(o,l):P&&P.isColor&&(d(P,1),E=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,E){const P=g(E);P&&(P.isCubeTexture||P.mapping===jr)?(u===void 0&&(u=new vt(new En(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:us(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(E.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(_i)),u.material.toneMapped=Qe.getTransfer(P.colorSpace)!==rt,(h!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new vt(new ea(2,2),new ui({name:"BackgroundMaterial",uniforms:us(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(P.colorSpace)!==rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(pr,nu(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,E,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:x,addToRenderList:m,dispose:A}}function om(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,C,H,B,X){let Y=!1;const W=h(B,H,C);r!==W&&(r=W,c(r.object)),Y=p(S,B,H,X),Y&&g(S,B,H,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(S,C,H,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,C,H){const B=H.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Y=X[C.id];Y===void 0&&(Y={},X[C.id]=Y);let W=Y[B];return W===void 0&&(W=f(l()),Y[B]=W),W}function f(S){const C=[],H=[],B=[];for(let X=0;X<t;X++)C[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,C,H,B){const X=r.attributes,Y=C.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){const fe=X[G];let Ee=Y[G];if(Ee===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,C,H,B){const X={},Y=C.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){let fe=Y[G];fe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),X[G]=Ee,W++}r.attributes=X,r.attributesNum=W,r.index=B}function x(){const S=r.newAttributes;for(let C=0,H=S.length;C<H;C++)S[C]=0}function m(S){d(S,0)}function d(S,C){const H=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;H[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),X[S]!==C&&(i.vertexAttribDivisor(S,C),X[S]=C)}function A(){const S=r.newAttributes,C=r.enabledAttributes;for(let H=0,B=C.length;H<B;H++)C[H]!==S[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function b(S,C,H,B,X,Y,W){W===!0?i.vertexAttribIPointer(S,C,H,X,Y):i.vertexAttribPointer(S,C,H,B,X,Y)}function E(S,C,H,B){x();const X=B.attributes,Y=H.getAttributes(),W=C.defaultAttributeValues;for(const j in Y){const G=Y[j];if(G.location>=0){let re=X[j];if(re===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const fe=re.normalized,Ee=re.itemSize,Ce=e.get(re);if(Ce===void 0)continue;const st=Ce.buffer,K=Ce.type,ie=Ce.bytesPerElement,_e=K===i.INT||K===i.UNSIGNED_INT||re.gpuType===Wo;if(re.isInterleavedBufferAttribute){const oe=re.data,we=oe.stride,et=re.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)d(G.location+De,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<G.locationSize;De++)m(G.location+De);i.bindBuffer(i.ARRAY_BUFFER,st);for(let De=0;De<G.locationSize;De++)b(G.location+De,Ee/G.locationSize,K,fe,we*ie,(et+Ee/G.locationSize*De)*ie,_e)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)d(G.location+oe,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let oe=0;oe<G.locationSize;oe++)b(G.location+oe,Ee/G.locationSize,K,fe,Ee*ie,Ee/G.locationSize*oe*ie,_e)}}else if(W!==void 0){const fe=W[j];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(G.location,fe);break;case 3:i.vertexAttrib3fv(G.location,fe);break;case 4:i.vertexAttrib4fv(G.location,fe);break;default:i.vertexAttrib1fv(G.location,fe)}}}}A()}function P(){L();for(const S in n){const C=n[S];for(const H in C){const B=C[H];for(const X in B)u(B[X].object),delete B[X];delete C[H]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const H in C){const B=C[H];for(const X in B)u(B[X].object),delete B[X];delete C[H]}delete n[S.id]}function R(S){for(const C in n){const H=n[C];if(H[S.id]===void 0)continue;const B=H[S.id];for(const X in B)u(B[X].object),delete B[X];delete H[S.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function lm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:P,maxSamples:I}}function um(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new vi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,b=A*4;let E=d.clippingState||null;l.value=E,E=u(g,f,b,p);for(let P=0;P!==b;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==x;++b,E+=4)a.copy(h[b]).applyMatrix4(A,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function hm(i){let e=new WeakMap;function t(a,o){return o===no?a.mapping=as:o===io&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new of(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Qi=4,Zl=[.125,.215,.35,.446,.526,.582],bi=20,La=new uu,jl=new We;let Na=null,Ua=0,Oa=0,Fa=!1;const Si=(1+Math.sqrt(5))/2,Zi=1/Si,Jl=[new T(-Si,Zi,0),new T(Si,Zi,0),new T(-Zi,0,Si),new T(Zi,0,Si),new T(0,Si,-Zi),new T(0,Si,Zi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],fm=new T;class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=fm}=r;Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Ua,Oa),this._renderer.xr.enabled=Fa,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Os,format:Sn,colorSpace:ls,depthBuffer:!1},s=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=pm(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,s,r){const l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(jl),h.toneMapping=ri,h.autoClear=!1;const g=new cs({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),x=new vt(new En,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(jl),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const E=this._cubeSize;mr(s,b*E,A>2?E:0,E,E),h.setRenderTarget(s),m&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===as||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jl[(s-r-1)%Jl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const d=[];let A=0;for(let R=0;R<bi;++R){const L=R/x,y=Math.exp(-L*L/2);d.push(y),R===0?A+=y:R<m&&(A+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const E=this._sizeLods[s],P=3*E*(s>b-Qi?s-b+Qi:0),I=4*(this._cubeSize-E);mr(t,P,I,3*E,2*E),l.setRenderTarget(t),l.render(h,La)}}function dm(i){const e=[],t=[],n=[];let s=i;const r=i-Qi+1+Zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Qi?l=Zl[a-i+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),b=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,L=I>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];A.set(y,x*g*I),b.set(f,m*g*I);const S=[I,I,I,I,I,I];E.set(S,d*g*I)}const P=new qt;P.setAttribute("position",new Mn(A,x)),P.setAttribute("uv",new Mn(b,m)),P.setAttribute("faceIndex",new Mn(E,d)),e.push(P),s>Qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ec(i,e,t){const n=new Ii(i,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pm(i,e,t){const n=new Float32Array(bi),s=new T(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function tc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function nc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function mm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===no||l===io,u=l===as||l===os;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ql(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ql(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let b=0,E=A.length;b<E;b+=3){const P=A[b+0],I=A[b+1],R=A[b+2];f.push(P,I,I,R,R,P)}}else if(g!==void 0){const A=g.array;x=g.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const P=b+0,I=b+1,R=b+2;f.push(P,I,I,R,R,P)}}else return;const m=new(jc(f)?tu:eu)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let P=o.attributes.position.count*E,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*I*4*h),L=new Jc(R,P,I,h);L.type=Bn,L.needsUpdate=!0;const y=E*4;for(let C=0;C<h;C++){const H=d[C],B=A[C],X=b[C],Y=P*I*4*C;for(let W=0;W<H.count;W++){const j=W*y;g===!0&&(s.fromBufferAttribute(H,W),R[Y+j+0]=s.x,R[Y+j+1]=s.y,R[Y+j+2]=s.z,R[Y+j+3]=0),x===!0&&(s.fromBufferAttribute(B,W),R[Y+j+4]=s.x,R[Y+j+5]=s.y,R[Y+j+6]=s.z,R[Y+j+7]=0),m===!0&&(s.fromBufferAttribute(X,W),R[Y+j+8]=s.x,R[Y+j+9]=s.y,R[Y+j+10]=s.z,R[Y+j+11]=X.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new He(P,I)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Mm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const fu=new Ht,ic=new lu(1,1),du=new Jc,pu=new Vh,mu=new su,sc=[],rc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),bt(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),bt(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),bt(t,n)}}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=Zc,r=ic):r=fu,t.setTexture2D(e||r,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pu,s)}function km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mu,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||du,s)}function Hm(i){switch(i){case 5126:return Em;case 35664:return ym;case 35665:return bm;case 35666:return Am;case 35674:return Tm;case 35675:return wm;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Nm;case 36295:return Um;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return zm}}function Gm(i,e){i.uniform1fv(this.addr,e)}function Vm(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Wm(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function Xm(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qm(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Km(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function jm(i,e){i.uniform3iv(this.addr,e)}function Jm(i,e){i.uniform4iv(this.addr,e)}function Qm(i,e){i.uniform1uiv(this.addr,e)}function e0(i,e){i.uniform2uiv(this.addr,e)}function t0(i,e){i.uniform3uiv(this.addr,e)}function n0(i,e){i.uniform4uiv(this.addr,e)}function i0(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||fu,r[a])}function s0(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pu,r[a])}function r0(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||mu,r[a])}function a0(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||du,r[a])}function o0(i){switch(i){case 5126:return Gm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return Km;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return jm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class c0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class u0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function cc(i,e){i.seq.push(e),i.map[e.id]=e}function h0(i,e,t){const n=i.name,s=n.length;for(Ba.lastIndex=0;;){const r=Ba.exec(n),a=Ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cc(t,c===void 0?new l0(o,i,e):new c0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new u0(o),cc(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);h0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const f0=37297;let d0=0;function p0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const hc=new Be;function m0(i){Qe._getMatrix(hc,Qe.workingColorSpace,i);const e=`mat3( ${hc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case zr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+p0(i.getShaderSource(e),a)}else return s}function g0(i,e){const t=m0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _0(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="Cineon";break;case _h:t="ACESFilmic";break;case vh:t="AgX";break;case Sh:t="Neutral";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new T;function x0(){Qe.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function S0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function As(i){return i!==""}function dc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(E0,b0)}const y0=new Map;function b0(i,e){let t=ze[e];if(t===void 0){const n=y0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(A0,T0)}function T0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function w0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===os&&(e="ENVMAP_MODE_REFRACTION"),e}function I0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case fh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function P0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function D0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=R0(t),u=C0(t),h=I0(t),f=P0(t),p=v0(t),g=S0(r),x=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ze.tonemapping_pars_fragment:"",t.toneMapping!==ri?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Oo(a),a=dc(a,t),a=pc(a,t),o=Oo(o),o=dc(o,t),o=pc(o,t),a=mc(a),o=mc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+a,E=A+d+o,P=uc(s,s.VERTEX_SHADER,b),I=uc(s,s.FRAGMENT_SHADER,E);s.attachShader(x,P),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(I).trim();let Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,I);else{const j=fc(s,P,"vertex"),G=fc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||X==="")&&(W=!1);W&&(C.diagnostics={runnable:Y,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(P),s.deleteShader(I),L=new Or(s,x),y=M0(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,f0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=I,this}let L0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U0(e),t.set(e,n)),n}}class U0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function O0(i,e,t,n,s,r,a){const o=new Jo,l=new N0,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,C,H,B){const X=H.fog,Y=B.geometry,W=y.isMeshStandardMaterial?H.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),G=j&&j.mapping===jr?j.image.height:null,re=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let st,K,ie,_e;if(re){const it=bn[re];st=it.vertexShader,K=it.fragmentShader}else st=y.vertexShader,K=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const oe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,_t=!!y.map,ft=!!y.matcap,qe=!!j,D=!!y.aoMap,sn=!!y.lightMap,Ze=!!y.bumpMap,Ke=!!y.normalMap,be=!!y.displacementMap,ct=!!y.emissiveMap,ye=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,J=y.iridescence>0,q=y.sheen>0,ve=y.transmission>0,le=v&&!!y.anisotropyMap,Re=F&&!!y.clearcoatMap,Ie=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,pe=J&&!!y.iridescenceMap,Pe=J&&!!y.iridescenceThicknessMap,Ne=q&&!!y.sheenColorMap,me=q&&!!y.sheenRoughnessMap,$e=!!y.specularMap,ke=!!y.specularColorMap,ot=!!y.specularIntensityMap,N=ve&&!!y.transmissionMap,ce=ve&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,he=y.alphaTest>0,ue=!!y.alphaHash,Fe=!!y.extensions;let pt=ri;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Lt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:K,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ls,alphaToCoverage:!!y.alphaToCoverage,map:_t,matcap:ft,envMap:qe,envMapMode:qe&&j.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:sn,bumpMap:Ze,normalMap:Ke,displacementMap:f&&be,emissiveMap:ct,normalMapObjectSpace:Ke&&y.normalMapType===Ah,normalMapTangentSpace:Ke&&y.normalMapType===$c,metalnessMap:ye,roughnessMap:w,anisotropy:v,anisotropyMap:le,clearcoat:F,clearcoatMap:Re,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Pe,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:$e,specularColorMap:ke,specularIntensityMap:ot,transmission:ve,transmissionMap:N,thicknessMap:ce,gradientMap:V,opaque:y.transparent===!1&&y.blending===ns&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:ue,combine:y.combine,mapUv:_t&&x(y.map.channel),aoMapUv:D&&x(y.aoMap.channel),lightMapUv:sn&&x(y.lightMap.channel),bumpMapUv:Ze&&x(y.bumpMap.channel),normalMapUv:Ke&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:ct&&x(y.emissiveMap.channel),metalnessMapUv:ye&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:le&&x(y.anisotropyMap.channel),clearcoatMapUv:Re&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(y.sheenRoughnessMap.channel),specularMapUv:$e&&x(y.specularMap.channel),specularColorMapUv:ke&&x(y.specularColorMap.channel),specularIntensityMapUv:ot&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:ce&&x(y.thicknessMap.channel),alphaMapUv:Z&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ke||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(_t||Z),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:_t&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(A(S,y),b(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const S=g[y.type];let C;if(S){const H=bn[S];C=nf.clone(H.uniforms)}else C=y.uniforms;return C}function P(y,S){let C;for(let H=0,B=u.length;H<B;H++){const X=u[H];if(X.cacheKey===S){C=X,++C.usedTimes;break}}return C===void 0&&(C=new D0(i,S,y,r),u.push(C)),C}function I(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:L}}function F0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function B0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _c(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||B0),n.length>1&&n.sort(f||_c),s.length>1&&s.sort(f||_c)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function k0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new xc,i.set(n,[a])):s>=r.length?(a=new xc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new We};break;case"SpotLight":t={position:new T,direction:new T,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function H0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let G0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W0(i){const e=new z0,t=H0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new ut,a=new ut;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,b=0,E=0,P=0,I=0,R=0;c.sort(V0);for(let y=0,S=c.length;y<S;y++){const C=c[y],H=C.color,B=C.intensity,X=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=H.r*B,h+=H.g*B,f+=H.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],B);R++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=W,p++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;const j=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,j.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[x]=j.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Y,E++}x++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=R,n.version=G0++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function vc(i){const e=new W0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function X0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vc(i),e.set(s,[o])):r>=a.length?(o=new vc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function K0(i,e,t){let n=new tl;const s=new He,r=new He,a=new gt,o=new gf({depthPacking:bh}),l=new _f,c={},u=t.maxTextureSize,h={[ci]:Xt,[Xt]:ci,[cn]:cn},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Y0,fragmentShader:q0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let d=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(si),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=d!==Un&&this.type===Un,X=d===Un&&this.type!==Un;for(let Y=0,W=I.length;Y<W;Y++){const j=I[Y],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const re=G.getFrameExtents();if(s.multiply(re),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||B===!0||X===!0){const Ee=this.type!==Un?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new Ii(s.x,s.y,Ee),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const fe=G.getViewportCount();for(let Ee=0;Ee<fe;Ee++){const Ce=G.getViewport(Ee);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),H.viewport(a),G.updateMatrices(j,Ee),n=G.getFrustum(),E(R,L,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&A(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,C)};function A(I,R){const L=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ii(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,L,p,x,null)}function b(I,R,L,y){let S=null;const C=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=S.uuid,B=R.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let Y=X[B];Y===void 0&&(Y=S.clone(),X[B]=Y,R.addEventListener("dispose",P)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Un?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=L}return S}function E(I,R,L,y,S){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Un)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const B=e.update(I),X=I.material;if(Array.isArray(X)){const Y=B.groups;for(let W=0,j=Y.length;W<j;W++){const G=Y[W],re=X[G.materialIndex];if(re&&re.visible){const fe=b(I,re,y,S);I.onBeforeShadow(i,I,R,L,B,fe,G),i.renderBufferDirect(L,null,B,fe,I,G),I.onAfterShadow(i,I,R,L,B,fe,G)}}}else if(X.visible){const Y=b(I,X,y,S);I.onBeforeShadow(i,I,R,L,B,Y,null),i.renderBufferDirect(L,null,B,Y,I,null),I.onAfterShadow(i,I,R,L,B,Y,null)}}const H=I.children;for(let B=0,X=H.length;B<X;B++)E(H[B],R,L,y,S)}function P(I){I.target.removeEventListener("dispose",P);for(const L in c){const y=c[L],S=I.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const $0={[$a]:Za,[ja]:eo,[Ja]:to,[rs]:Qa,[Za]:$a,[eo]:ja,[to]:Ja,[Qa]:rs};function Z0(i,e){function t(){let N=!1;const ce=new gt;let V=null;const Z=new gt(0,0,0,0);return{setMask:function(he){V!==he&&!N&&(i.colorMask(he,he,he,he),V=he)},setLocked:function(he){N=he},setClear:function(he,ue,Fe,pt,Lt){Lt===!0&&(he*=pt,ue*=pt,Fe*=pt),ce.set(he,ue,Fe,pt),Z.equals(ce)===!1&&(i.clearColor(he,ue,Fe,pt),Z.copy(ce))},reset:function(){N=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,V=null,Z=null,he=null;return{setReversed:function(ue){if(ce!==ue){const Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ce=ue;const pt=he;he=null,this.setClear(pt)}},getReversed:function(){return ce},setTest:function(ue){ue?oe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!N&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(ce&&(ue=$0[ue]),Z!==ue){switch(ue){case $a:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ue}},setLocked:function(ue){N=ue},setClear:function(ue){he!==ue&&(ce&&(ue=1-ue),i.clearDepth(ue),he=ue)},reset:function(){N=!1,V=null,Z=null,he=null,ce=!1}}}function s(){let N=!1,ce=null,V=null,Z=null,he=null,ue=null,Fe=null,pt=null,Lt=null;return{setTest:function(it){N||(it?oe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(it){ce!==it&&!N&&(i.stencilMask(it),ce=it)},setFunc:function(it,pn,wn){(V!==it||Z!==pn||he!==wn)&&(i.stencilFunc(it,pn,wn),V=it,Z=pn,he=wn)},setOp:function(it,pn,wn){(ue!==it||Fe!==pn||pt!==wn)&&(i.stencilOp(it,pn,wn),ue=it,Fe=pn,pt=wn)},setLocked:function(it){N=it},setClear:function(it){Lt!==it&&(i.clearStencil(it),Lt=it)},reset:function(){N=!1,ce=null,V=null,Z=null,he=null,ue=null,Fe=null,pt=null,Lt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,b=null,E=null,P=null,I=null,R=new We(0,0,0),L=0,y=!1,S=null,C=null,H=null,B=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let re=null,fe={};const Ee=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),st=new gt().fromArray(Ee),K=new gt().fromArray(Ce);function ie(N,ce,V,Z){const he=new Uint8Array(4),ue=i.createTexture();i.bindTexture(N,ue),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<V;Fe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ce+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ue}const _e={};_e[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(rs),Ze(!1),Ke(gl),oe(i.CULL_FACE),D(si);function oe(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function we(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function et(N,ce){return h[N]!==ce?(i.bindFramebuffer(N,ce),h[N]=ce,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function De(N,ce){let V=p,Z=!1;if(N){V=f.get(ce),V===void 0&&(V=[],f.set(ce,V));const he=N.textures;if(V.length!==he.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Fe=he.length;ue<Fe;ue++)V[ue]=i.COLOR_ATTACHMENT0+ue;V.length=he.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function _t(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ft={[yi]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};ft[ju]=i.MIN,ft[Ju]=i.MAX;const qe={[Qu]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ce,V,Z,he,ue,Fe,pt,Lt,it){if(N===si){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),N!==Ku){if(N!==m||it!==y){if((d!==yi||E!==yi)&&(i.blendEquation(i.FUNC_ADD),d=yi,E=yi),it)switch(N){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,P=null,I=null,R.set(0,0,0),L=0,m=N,y=it}return}he=he||ce,ue=ue||V,Fe=Fe||Z,(ce!==d||he!==E)&&(i.blendEquationSeparate(ft[ce],ft[he]),d=ce,E=he),(V!==A||Z!==b||ue!==P||Fe!==I)&&(i.blendFuncSeparate(qe[V],qe[Z],qe[ue],qe[Fe]),A=V,b=Z,P=ue,I=Fe),(pt.equals(R)===!1||Lt!==L)&&(i.blendColor(pt.r,pt.g,pt.b,Lt),R.copy(pt),L=Lt),m=N,y=!1}function sn(N,ce){N.side===cn?we(i.CULL_FACE):oe(i.CULL_FACE);let V=N.side===Xt;ce&&(V=!V),Ze(V),N.blending===ns&&N.transparent===!1?D(si):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;o.setTest(Z),Z&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function Ke(N){N!==Yu?(oe(i.CULL_FACE),N!==C&&(N===gl?i.cullFace(i.BACK):N===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),C=N}function be(N){N!==H&&(W&&i.lineWidth(N),H=N)}function ct(N,ce,V){N?(oe(i.POLYGON_OFFSET_FILL),(B!==ce||X!==V)&&(i.polygonOffset(ce,V),B=ce,X=V)):we(i.POLYGON_OFFSET_FILL)}function ye(N){N?oe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+Y-1),re!==N&&(i.activeTexture(N),re=N)}function v(N,ce,V){V===void 0&&(re===null?V=i.TEXTURE0+Y-1:V=re);let Z=fe[V];Z===void 0&&(Z={type:void 0,texture:void 0},fe[V]=Z),(Z.type!==N||Z.texture!==ce)&&(re!==V&&(i.activeTexture(V),re=V),i.bindTexture(N,ce||_e[N]),Z.type=N,Z.texture=ce)}function F(){const N=fe[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){st.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function me(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function $e(N,ce){let V=c.get(ce);V===void 0&&(V=new WeakMap,c.set(ce,V));let Z=V.get(N);Z===void 0&&(Z=i.getUniformBlockIndex(ce,N.name),V.set(N,Z))}function ke(N,ce){const Z=c.get(ce).get(N);l.get(ce)!==Z&&(i.uniformBlockBinding(ce,Z,N.__bindingPointIndex),l.set(ce,Z))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,fe={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,b=null,E=null,P=null,I=null,R=new We(0,0,0),L=0,y=!1,S=null,C=null,H=null,B=null,X=null,st.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:we,bindFramebuffer:et,drawBuffers:De,useProgram:_t,setBlending:D,setMaterial:sn,setFlipSided:Ze,setCullFace:Ke,setLineWidth:be,setPolygonOffset:ct,setScissorTest:ye,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pe,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Ie,texStorage3D:Q,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:Re,scissor:Ne,viewport:me,reset:ot}}function j0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Gr("canvas")}function x(w,v,F){let $=1;const J=ye(w);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*J.width),ve=Math.floor($*J.height);h===void 0&&(h=g(q,ve));const le=v?g(q,ve):h;return le.width=q,le.height=ve,le.getContext("2d").drawImage(w,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ve+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,v,F,$,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const ve=J?zr:Qe.getTransfer($);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=ve===rt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(w,v){let F;return w?v===null||v===Ci||v===Ds?F=i.DEPTH24_STENCIL8:v===Bn?F=i.DEPTH32F_STENCIL8:v===Ps&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Ds?F=i.DEPTH_COMPONENT24:v===Bn?F=i.DEPTH_COMPONENT32F:v===Ps&&(F=i.DEPTH_COMPONENT16),F}function P(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function I(w){const v=w.target;v.removeEventListener("dispose",I),L(v),v.isVideoTexture&&u.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),S(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,$=f.get(F);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(w),Object.keys($).length===0&&f.delete(F)}n.remove(w)}function y(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,$=f.get(F);delete $[v.__cacheKey],a.memory.textures--}function S(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let $=0,J=F.length;$<J;$++){const q=n.get(F[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(w)}let C=0;function H(){C=0}function B(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function X(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){const F=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,w,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function W(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){ie(F,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const re={[so]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},fe={[tn]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Th]:i.NEVER,[Dh]:i.ALWAYS,[wh]:i.LESS,[Zc]:i.LEQUAL,[Rh]:i.EQUAL,[Ph]:i.GEQUAL,[Ch]:i.GREATER,[Ih]:i.NOTEQUAL};function Ce(w,v){if(v.type===Bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===aa||v.magFilter===Gs||v.magFilter===wi||v.minFilter===Qt||v.minFilter===aa||v.minFilter===Gs||v.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,re[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,re[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,re[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==Gs&&v.minFilter!==wi||v.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const q=X(v);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[q].usedTimes++;const ve=J[w.__cacheKey];ve!==void 0&&(J[w.__cacheKey].usedTimes--,ve.usedTimes===0&&y(v)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return F}function K(w,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=st(w,v),q=v.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+F);const ve=n.get(q);if(q.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+F);const le=Qe.getPrimaries(Qe.workingColorSpace),Re=v.colorSpace===ti?null:Qe.getPrimaries(v.colorSpace),Ie=v.colorSpace===ti||le===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=x(v.image,!1,s.maxTextureSize);Q=ct(v,Q);const pe=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Ne=b(v.internalFormat,pe,Pe,v.colorSpace,v.isVideoTexture);Ce($,v);let me;const $e=v.mipmaps,ke=v.isVideoTexture!==!0,ot=ve.__version===void 0||J===!0,N=q.dataReady,ce=P(v,Q);if(v.isDepthTexture)Ne=E(v.format===Ns,v.type),ot&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Ne,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ne,Q.width,Q.height,0,pe,Pe,null));else if(v.isDataTexture)if($e.length>0){ke&&ot&&t.texStorage2D(i.TEXTURE_2D,ce,Ne,$e[0].width,$e[0].height);for(let V=0,Z=$e.length;V<Z;V++)me=$e[V],ke?N&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,V,Ne,me.width,me.height,0,pe,Pe,me.data);v.generateMipmaps=!1}else ke?(ot&&t.texStorage2D(i.TEXTURE_2D,ce,Ne,Q.width,Q.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pe,Pe,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,Q.width,Q.height,0,pe,Pe,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ne,$e[0].width,$e[0].height,Q.depth);for(let V=0,Z=$e.length;V<Z;V++)if(me=$e[V],v.format!==Sn)if(pe!==null)if(ke){if(N)if(v.layerUpdates.size>0){const he=$l(me.width,me.height,v.format,v.type);for(const ue of v.layerUpdates){const Fe=me.data.subarray(ue*he/me.data.BYTES_PER_ELEMENT,(ue+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ue,me.width,me.height,1,pe,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ne,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,Pe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ne,me.width,me.height,Q.depth,0,pe,Pe,me.data)}else{ke&&ot&&t.texStorage2D(i.TEXTURE_2D,ce,Ne,$e[0].width,$e[0].height);for(let V=0,Z=$e.length;V<Z;V++)me=$e[V],v.format!==Sn?pe!==null?ke?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,V,Ne,me.width,me.height,0,pe,Pe,me.data)}else if(v.isDataArrayTexture)if(ke){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ne,Q.width,Q.height,Q.depth),N)if(v.layerUpdates.size>0){const V=$l(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const he=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pe,Pe,he)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,Q.width,Q.height,Q.depth,0,pe,Pe,Q.data);else if(v.isData3DTexture)ke?(ot&&t.texStorage3D(i.TEXTURE_3D,ce,Ne,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,Q.width,Q.height,Q.depth,0,pe,Pe,Q.data);else if(v.isFramebufferTexture){if(ot)if(ke)t.texStorage2D(i.TEXTURE_2D,ce,Ne,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let he=0;he<ce;he++)t.texImage2D(i.TEXTURE_2D,he,Ne,V,Z,0,pe,Pe,null),V>>=1,Z>>=1}}else if($e.length>0){if(ke&&ot){const V=ye($e[0]);t.texStorage2D(i.TEXTURE_2D,ce,Ne,V.width,V.height)}for(let V=0,Z=$e.length;V<Z;V++)me=$e[V],ke?N&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,pe,Pe,me):t.texImage2D(i.TEXTURE_2D,V,Ne,pe,Pe,me);v.generateMipmaps=!1}else if(ke){if(ot){const V=ye(Q);t.texStorage2D(i.TEXTURE_2D,ce,Ne,V.width,V.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ne,pe,Pe,Q);m(v)&&d($),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,F){if(v.image.length!==6)return;const $=st(w,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const ve=Qe.getPrimaries(Qe.workingColorSpace),le=v.colorSpace===ti?null:Qe.getPrimaries(v.colorSpace),Re=v.colorSpace===ti||ve===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!Ie&&!Q?pe[Z]=x(v.image[Z],!0,s.maxCubemapSize):pe[Z]=Q?v.image[Z].image:v.image[Z],pe[Z]=ct(v,pe[Z]);const Pe=pe[0],Ne=r.convert(v.format,v.colorSpace),me=r.convert(v.type),$e=b(v.internalFormat,Ne,me,v.colorSpace),ke=v.isVideoTexture!==!0,ot=q.__version===void 0||$===!0,N=J.dataReady;let ce=P(v,Pe);Ce(i.TEXTURE_CUBE_MAP,v);let V;if(Ie){ke&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,$e,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){V=pe[Z].mipmaps;for(let he=0;he<V.length;he++){const ue=V[he];v.format!==Sn?Ne!==null?ke?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ue.width,ue.height,Ne,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ue.width,ue.height,Ne,me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,$e,ue.width,ue.height,0,Ne,me,ue.data)}}}else{if(V=v.mipmaps,ke&&ot){V.length>0&&ce++;const Z=ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,$e,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Ne,me,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,pe[Z].width,pe[Z].height,0,Ne,me,pe[Z].data);for(let he=0;he<V.length;he++){const Fe=V[he].image[Z].image;ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Fe.width,Fe.height,Ne,me,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,$e,Fe.width,Fe.height,0,Ne,me,Fe.data)}}else{ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,me,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,Ne,me,pe[Z]);for(let he=0;he<V.length;he++){const ue=V[he];ke?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ne,me,ue.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,$e,Ne,me,ue.image[Z])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function _e(w,v,F,$,J,q){const ve=r.convert(F.format,F.colorSpace),le=r.convert(F.type),Re=b(F.internalFormat,ve,le,F.colorSpace),Ie=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!Ie.__hasExternalTextures){const pe=Math.max(1,v.width>>q),Pe=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Re,pe,Pe,v.depth,0,ve,le,null):t.texImage2D(J,q,Re,pe,Pe,0,ve,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,Ze(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=E(v.stencilBuffer,J),ve=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ze(v);Ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,w)}else{const $=v.textures;for(let J=0;J<$.length;J++){const q=$[J],ve=r.convert(q.format,q.colorSpace),le=r.convert(q.type),Re=b(q.internalFormat,ve,le,q.colorSpace),Ie=Ze(v);F&&Ke(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,v.width,v.height):Ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=$.__webglTexture,q=Ze(v);if(v.depthTexture.format===Ls)Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ns)Ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function et(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=w.texture.mipmaps;$&&$.length>0?we(v.__webglFramebuffer[0],w):we(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),oe(v.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),oe(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,v,F){const $=n.get(w);v!==void 0&&_e($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&et(w)}function _t(w){const v=w.texture,F=n.get(w),$=n.get(v);w.addEventListener("dispose",R);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Re=0;Re<v.mipmaps.length;Re++)F.__webglFramebuffer[le][Re]=i.createFramebuffer()}else F.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let le=0,Re=J.length;le<Re;le++){const Ie=n.get(J[le]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ke(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Re=J[le];F.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ie=r.convert(Re.format,Re.colorSpace),Q=r.convert(Re.type),pe=b(Re.internalFormat,Ie,Q,Re.colorSpace,w.isXRRenderTarget===!0),Pe=Ze(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,pe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,F.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)_e(F.__webglFramebuffer[le][Re],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else _e(F.__webglFramebuffer[le],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,Re=J.length;le<Re;le++){const Ie=J[le],Q=n.get(Ie);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ce(i.TEXTURE_2D,Ie),_e(F.__webglFramebuffer,w,Ie,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(Ie)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),Ce(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)_e(F.__webglFramebuffer[Re],w,v,i.COLOR_ATTACHMENT0,le,Re);else _e(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,le,0);m(v)&&d(le),t.unbindTexture()}w.depthBuffer&&et(w)}function ft(w){const v=w.textures;for(let F=0,$=v.length;F<$;F++){const J=v[F];if(m(J)){const q=A(w),ve=n.get(J).__webglTexture;t.bindTexture(q,ve),d(q),t.unbindTexture()}}}const qe=[],D=[];function sn(w){if(w.samples>0){if(Ke(w)===!1){const v=w.textures,F=w.width,$=w.height;let J=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(w),le=v.length>1;if(le)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]);const Q=n.get(v[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,J,i.NEAREST),l===!0&&(qe.length=0,D.length=0,qe.push(i.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qe.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]);const Q=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ze(w){return Math.min(s.maxSamples,w.samples)}function Ke(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function ct(w,v){const F=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ls&&F!==ti&&(Qe.getTransfer(F)===rt?($!==Sn||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ke}function J0(i,e){function t(n,s=ti){let r;const a=Qe.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===qc)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Cr||n===Ir||n===Pr||n===Dr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===ho)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===So||n===Mo||n===Eo||n===yo||n===bo||n===Ao||n===To||n===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Ro||n===Co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Io||n===Po||n===Do)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ui({vertexShader:Q0,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends hs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=new tg,m=t.getContextAttributes();let d=null,A=null;const b=[],E=[],P=new He;let I=null;const R=new ln;R.viewport=new gt;const L=new ln;L.viewport=new gt;const y=[R,L],S=new Ef;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new wa,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new wa,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new wa,b[K]=ie),ie.getHandSpace()};function B(K){const ie=E.indexOf(K.inputSource);if(ie===-1)return;const _e=b[ie];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const ie=E[K];ie!==null&&(E[K]=null,b[K].disconnect(ie))}C=null,H=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,A=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,oe=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Ns:Ls,oe=m.stencil?Ds:Ci);const et={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(et),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ii(f.textureWidth,f.textureHeight,{format:Sn,type:Tn,depthTexture:new lu(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ii(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let ie=0;ie<K.removed.length;ie++){const _e=K.removed[ie],oe=E.indexOf(_e);oe>=0&&(E[oe]=null,b[oe].disconnect(_e))}for(let ie=0;ie<K.added.length;ie++){const _e=K.added[ie];let oe=E.indexOf(_e);if(oe===-1){for(let et=0;et<b.length;et++)if(et>=E.length){E.push(_e),oe=et;break}else if(E[et]===null){E[et]=_e,oe=et;break}if(oe===-1)break}const we=b[oe];we&&we.connect(_e)}}const W=new T,j=new T;function G(K,ie,_e){W.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const oe=W.distanceTo(j),we=ie.projectionMatrix.elements,et=_e.projectionMatrix.elements,De=we[14]/(we[10]-1),_t=we[14]/(we[10]+1),ft=(we[9]+1)/we[5],qe=(we[9]-1)/we[5],D=(we[8]-1)/we[0],sn=(et[8]+1)/et[0],Ze=De*D,Ke=De*sn,be=oe/(-D+sn),ct=be*-D;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ye=De+be,w=_t+be,v=Ze-ct,F=Ke+(oe-ct),$=ft*_t/w*ye,J=qe*_t/w*ye;K.projectionMatrix.makePerspective(v,F,$,J,ye,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,_e=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),S.near=L.near=R.near=ie,S.far=L.far=R.far=_e,(C!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,H=S.far),R.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;const oe=K.parent,we=S.cameras;re(S,oe);for(let et=0;et<we.length;et++)re(we[et],oe);we.length===2?G(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),fe(K,S,oe)};function fe(K,ie,_e){_e===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=No*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ee=null;function Ce(K,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let oe=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let De=0;De<_e.length;De++){const _t=_e[De];let ft=null;if(p!==null)ft=p.getViewport(_t);else{const D=h.getViewSubImage(f,_t);ft=D.viewport,De===0&&(e.setRenderTargetTextures(A,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(A))}let qe=y[De];qe===void 0&&(qe=new ln,qe.layers.enable(De),qe.viewport=new gt,y[De]=qe),qe.matrix.fromArray(_t.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(_t.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ft.x,ft.y,ft.width,ft.height),De===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(qe)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const De=h.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&x.init(e,De,s.renderState)}}for(let _e=0;_e<b.length;_e++){const oe=E[_e],we=b[_e];oe!==null&&we!==void 0&&we.update(oe,ie,c||a)}Ee&&Ee(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const st=new hu;st.setAnimationLoop(Ce),this.setAnimationLoop=function(K){Ee=K},this.dispose=function(){}}}const xi=new Ge,ig=new ut;function sg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,nu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),b=A.envMap,E=A.envMapRotation;b&&(m.envMap.value=b,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const E=b.program;n.uniformBlockBinding(A,E)}function c(A,b){let E=s[A.id];E===void 0&&(g(A),E=u(A),s[A.id]=E,A.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(A,P);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const b=h();A.__bindingPointIndex=b;const E=i.createBuffer(),P=A.__size,I=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=s[A.id],E=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let I=0,R=E.length;I<R;I++){const L=Array.isArray(E[I])?E[I]:[E[I]];for(let y=0,S=L.length;y<S;y++){const C=L[y];if(p(C,I,y,P)===!0){const H=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],j=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+X,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,b,E,P){const I=A.value,R=b+"_"+E;if(P[R]===void 0)return typeof I=="number"||typeof I=="boolean"?P[R]=I:P[R]=I.clone(),!0;{const L=P[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return P[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(A){const b=A.uniforms;let E=0;const P=16;for(let R=0,L=b.length;R<L;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,C=y.length;S<C;S++){const H=y[S],B=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Y=B.length;X<Y;X++){const W=B[X],j=x(W),G=E%P,re=G%j.boundary,fe=G+re;E+=re,fe!==0&&P-fe<j.storage&&(E+=P-fe),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=j.storage}}}const I=E%P;return I>0&&(E+=P-I),A.__size=E,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class ag{constructor(e={}){const{canvas:t=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=zt;let I=0,R=0,L=null,y=-1,S=null;const C=new gt,H=new gt;let B=null;const X=new We(0);let Y=0,W=t.width,j=t.height,G=1,re=null,fe=null;const Ee=new gt(0,0,W,j),Ce=new gt(0,0,W,j);let st=!1;const K=new tl;let ie=!1,_e=!1;const oe=new ut,we=new ut,et=new T,De=new gt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function qe(){return L===null?G:1}let D=n;function sn(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const U="webgl2";if(D=sn(U,M),D===null)throw sn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ze,Ke,be,ct,ye,w,v,F,$,J,q,ve,le,Re,Ie,Q,pe,Pe,Ne,me,$e,ke,ot,N;function ce(){Ze=new gm(D),Ze.init(),ke=new J0(D,Ze),Ke=new cm(D,Ze,e,ke),be=new Z0(D,Ze),Ke.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),ct=new vm(D),ye=new F0,w=new j0(D,Ze,be,ye,Ke,ke,ct),v=new hm(E),F=new mm(E),$=new Af(D),ot=new om(D,$),J=new _m(D,$,ct,ot),q=new Mm(D,J,$,ct),Ne=new Sm(D,Ke,w),Q=new um(ye),ve=new O0(E,v,F,Ze,Ke,ot,Q),le=new sg(E,ye),Re=new k0,Ie=new X0(Ze),Pe=new am(E,v,F,be,q,p,l),pe=new K0(E,q,Ke),N=new rg(D,ct,Ke,be),me=new lm(D,Ze,ct),$e=new xm(D,Ze,ct),ct.programs=ve.programs,E.capabilities=Ke,E.extensions=Ze,E.properties=ye,E.renderLists=Re,E.shadowMap=pe,E.state=be,E.info=ct}ce();const V=new ng(E,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(W,j,!1))},this.getSize=function(M){return M.set(W,j)},this.setSize=function(M,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,j=U,t.width=Math.floor(M*G),t.height=Math.floor(U*G),k===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*G,j*G).floor()},this.setDrawingBufferSize=function(M,U,k){W=M,j=U,G=k,t.width=Math.floor(M*k),t.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,U,k,z){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,U,k,z),be.viewport(C.copy(Ee).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Ce)},this.setScissor=function(M,U,k,z){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,U,k,z),be.scissor(H.copy(Ce).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){be.setScissorTest(st=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,k=!0){let z=0;if(M){let O=!1;if(L!==null){const ee=L.texture.format;O=ee===$o||ee===Ko||ee===qo}if(O){const ee=L.texture.type,ae=ee===Tn||ee===Ci||ee===Ps||ee===Ds||ee===Xo||ee===Yo,de=Pe.getClearColor(),ge=Pe.getClearAlpha(),Ue=de.r,Le=de.g,Ae=de.b;ae?(g[0]=Ue,g[1]=Le,g[2]=Ae,g[3]=ge,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ue,x[1]=Le,x[2]=Ae,x[3]=ge,D.clearBufferiv(D.COLOR,0,x))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),k&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),Re.dispose(),Ie.dispose(),ye.dispose(),v.dispose(),F.dispose(),q.dispose(),ot.dispose(),N.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",cl),V.removeEventListener("sessionend",ul),hi.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=ct.autoReset,U=pe.enabled,k=pe.autoUpdate,z=pe.needsUpdate,O=pe.type;ce(),ct.autoReset=M,pe.enabled=U,pe.autoUpdate=k,pe.needsUpdate=z,pe.type=O}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Fe(M){const U=M.target;U.removeEventListener("dispose",Fe),pt(U)}function pt(M){Lt(M),ye.remove(M)}function Lt(M){const U=ye.get(M).programs;U!==void 0&&(U.forEach(function(k){ve.releaseProgram(k)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,z,O,ee){U===null&&(U=_t);const ae=O.isMesh&&O.matrixWorld.determinant()<0,de=zu(M,U,k,z,O);be.setMaterial(z,ae);let ge=k.index,Ue=1;if(z.wireframe===!0){if(ge=J.getWireframeAttribute(k),ge===void 0)return;Ue=2}const Le=k.drawRange,Ae=k.attributes.position;let je=Le.start*Ue,tt=(Le.start+Le.count)*Ue;ee!==null&&(je=Math.max(je,ee.start*Ue),tt=Math.min(tt,(ee.start+ee.count)*Ue)),ge!==null?(je=Math.max(je,0),tt=Math.min(tt,ge.count)):Ae!=null&&(je=Math.max(je,0),tt=Math.min(tt,Ae.count));const St=tt-je;if(St<0||St===1/0)return;ot.setup(O,z,de,k,ge);let mt,Je=me;if(ge!==null&&(mt=$.get(ge),Je=$e,Je.setIndex(mt)),O.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*qe()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(O.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),be.setLineWidth(Te*qe()),O.isLineSegments?Je.setMode(D.LINES):O.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else O.isPoints?Je.setMode(D.POINTS):O.isSprite&&Je.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,Pt=O._multiDrawCounts,nt=O._multiDrawCount,mn=ge?$.get(ge).bytesPerElement:1,Di=ye.get(z).currentProgram.getUniforms();for(let Kt=0;Kt<nt;Kt++)Di.setValue(D,"_gl_DrawID",Kt),Je.render(Te[Kt]/mn,Pt[Kt])}else if(O.isInstancedMesh)Je.renderInstances(je,St,O.count);else if(k.isInstancedBufferGeometry){const Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pt=Math.min(k.instanceCount,Te);Je.renderInstances(je,St,Pt)}else Je.render(je,St)};function it(M,U,k){M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,Hs(M,U,k),M.side=ci,M.needsUpdate=!0,Hs(M,U,k),M.side=cn):Hs(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),d=Ie.get(k),d.init(U),b.push(d),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const de=ee[ae];it(de,k,O),z.add(de)}else it(ee,k,O),z.add(ee)}),d=b.pop(),z},this.compileAsync=function(M,U,k=null){const z=this.compile(M,U,k);return new Promise(O=>{function ee(){if(z.forEach(function(ae){ye.get(ae).currentProgram.isReady()&&z.delete(ae)}),z.size===0){O(M);return}setTimeout(ee,10)}Ze.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let pn=null;function wn(M){pn&&pn(M)}function cl(){hi.stop()}function ul(){hi.start()}const hi=new hu;hi.setAnimationLoop(wn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(M){pn=M,V.setAnimationLoop(M),M===null?hi.stop():hi.start()},V.addEventListener("sessionstart",cl),V.addEventListener("sessionend",ul),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,U,L),d=Ie.get(M,b.length),d.init(U),b.push(d),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(we),_e=this.localClippingEnabled,ie=Q.init(this.clippingPlanes,_e),m=Re.get(M,A.length),m.init(),A.push(m),V.enabled===!0&&V.isPresenting===!0){const ee=E.xr.getDepthSensingMesh();ee!==null&&sa(ee,U,-1/0,E.sortObjects)}sa(M,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(re,fe),ft=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ft&&Pe.addToRenderList(m,M),this.info.render.frame++,ie===!0&&Q.beginShadows();const k=d.state.shadowsArray;pe.render(k,M,U),ie===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ee=U.cameras;if(O.length>0)for(let ae=0,de=ee.length;ae<de;ae++){const ge=ee[ae];fl(z,O,M,ge)}ft&&Pe.render(M);for(let ae=0,de=ee.length;ae<de;ae++){const ge=ee[ae];hl(m,M,ge,ge.viewport)}}else O.length>0&&fl(z,O,M,U),ft&&Pe.render(M),hl(m,M,U);L!==null&&R===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(E,M,U),ot.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],ie===!0&&Q.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function sa(M,U,k,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){z&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);const ae=q.update(M),de=M.material;de.visible&&m.push(M,ae,de,k,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const ae=q.update(M),de=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),De.copy(ae.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(de)){const ge=ae.groups;for(let Ue=0,Le=ge.length;Ue<Le;Ue++){const Ae=ge[Ue],je=de[Ae.materialIndex];je&&je.visible&&m.push(M,ae,je,k,De.z,Ae)}}else de.visible&&m.push(M,ae,de,k,De.z,null)}}const ee=M.children;for(let ae=0,de=ee.length;ae<de;ae++)sa(ee[ae],U,k,z)}function hl(M,U,k,z){const O=M.opaque,ee=M.transmissive,ae=M.transparent;d.setupLightsView(k),ie===!0&&Q.setGlobalState(E.clippingPlanes,k),z&&be.viewport(C.copy(z)),O.length>0&&zs(O,U,k),ee.length>0&&zs(ee,U,k),ae.length>0&&zs(ae,U,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function fl(M,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Ii(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Os:Tn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ee=d.state.transmissionRenderTarget[z.id],ae=z.viewport||C;ee.setSize(ae.z*E.transmissionResolutionScale,ae.w*E.transmissionResolutionScale);const de=E.getRenderTarget();E.setRenderTarget(ee),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),ft&&Pe.render(k);const ge=E.toneMapping;E.toneMapping=ri;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),ie===!0&&Q.setGlobalState(E.clippingPlanes,z),zs(M,k,z),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ae=0,je=U.length;Ae<je;Ae++){const tt=U[Ae],St=tt.object,mt=tt.geometry,Je=tt.material,Te=tt.group;if(Je.side===cn&&St.layers.test(z.layers)){const Pt=Je.side;Je.side=Xt,Je.needsUpdate=!0,dl(St,k,z,mt,Je,Te),Je.side=Pt,Je.needsUpdate=!0,Le=!0}}Le===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}E.setRenderTarget(de),E.setClearColor(X,Y),Ue!==void 0&&(z.viewport=Ue),E.toneMapping=ge}function zs(M,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ee=M.length;O<ee;O++){const ae=M[O],de=ae.object,ge=ae.geometry,Ue=ae.group;let Le=ae.material;Le.allowOverride===!0&&z!==null&&(Le=z),de.layers.test(k.layers)&&dl(de,U,k,ge,Le,Ue)}}function dl(M,U,k,z,O,ee){M.onBeforeRender(E,U,k,z,O,ee),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(E,U,k,z,M,ee),O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=Xt,O.needsUpdate=!0,E.renderBufferDirect(k,U,z,O,M,ee),O.side=ci,O.needsUpdate=!0,E.renderBufferDirect(k,U,z,O,M,ee),O.side=cn):E.renderBufferDirect(k,U,z,O,M,ee),M.onAfterRender(E,U,k,z,O,ee)}function Hs(M,U,k){U.isScene!==!0&&(U=_t);const z=ye.get(M),O=d.state.lights,ee=d.state.shadowsArray,ae=O.state.version,de=ve.getParameters(M,O.state,ee,U,k),ge=ve.getProgramCacheKey(de);let Ue=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Fe),Ue=new Map,z.programs=Ue);let Le=Ue.get(ge);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===ae)return ml(M,de),Le}else de.uniforms=ve.getUniforms(M),M.onBeforeCompile(de,E),Le=ve.acquireProgram(de,ge),Ue.set(ge,Le),z.uniforms=de.uniforms;const Ae=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Q.uniform),ml(M,de),z.needsLights=Gu(M),z.lightsStateVersion=ae,z.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function pl(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ml(M,U){const k=ye.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function zu(M,U,k,z,O){U.isScene!==!0&&(U=_t),w.resetTextureUnits();const ee=U.fog,ae=z.isMeshStandardMaterial?U.environment:null,de=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ls,ge=(z.isMeshStandardMaterial?F:v).get(z.envMap||ae),Ue=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,tt=!!k.morphAttributes.color;let St=ri;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(St=E.toneMapping);const mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=mt!==void 0?mt.length:0,Te=ye.get(z),Pt=d.state.lights;if(ie===!0&&(_e===!0||M!==S)){const Ft=M===S&&z.id===y;Q.setState(z,M,Ft)}let nt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Pt.state.version||Te.outputColorSpace!==de||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==ge||z.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Q.numPlanes||Te.numIntersection!==Q.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Le||Te.morphTargets!==Ae||Te.morphNormals!==je||Te.morphColors!==tt||Te.toneMapping!==St||Te.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Te.__version=z.version);let mn=Te.currentProgram;nt===!0&&(mn=Hs(z,U,O));let Di=!1,Kt=!1,ds=!1;const ht=mn.getUniforms(),rn=Te.uniforms;if(be.useProgram(mn.program)&&(Di=!0,Kt=!0,ds=!0),z.id!==y&&(y=z.id,Kt=!0),Di||S!==M){be.buffers.depth.getReversed()?(oe.copy(M.projectionMatrix),Oh(oe),Fh(oe),ht.setValue(D,"projectionMatrix",oe)):ht.setValue(D,"projectionMatrix",M.projectionMatrix),ht.setValue(D,"viewMatrix",M.matrixWorldInverse);const Gt=ht.map.cameraPosition;Gt!==void 0&&Gt.setValue(D,et.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Kt=!0,ds=!0)}if(O.isSkinnedMesh){ht.setOptional(D,O,"bindMatrix"),ht.setOptional(D,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ht.setValue(D,"boneTexture",Ft.boneTexture,w))}O.isBatchedMesh&&(ht.setOptional(D,O,"batchingTexture"),ht.setValue(D,"batchingTexture",O._matricesTexture,w),ht.setOptional(D,O,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",O._indirectTexture,w),ht.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",O._colorsTexture,w));const an=k.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ne.update(O,k,mn),(Kt||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,ht.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(rn.envMap.value=ge,rn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Kt&&(ht.setValue(D,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Hu(rn,ds),ee&&z.fog===!0&&le.refreshFogUniforms(rn,ee),le.refreshMaterialUniforms(rn,z,G,j,d.state.transmissionRenderTarget[M.id]),Or.upload(D,pl(Te),rn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Or.upload(D,pl(Te),rn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(D,"center",O.center),ht.setValue(D,"modelViewMatrix",O.modelViewMatrix),ht.setValue(D,"normalMatrix",O.normalMatrix),ht.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ft=z.uniformsGroups;for(let Gt=0,ra=Ft.length;Gt<ra;Gt++){const fi=Ft[Gt];N.update(fi,mn),N.bind(fi,mn)}}return mn}function Hu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Gu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,k){const z=ye.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=U,ye.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const k=ye.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Vu=D.createFramebuffer();this.setRenderTarget=function(M,U=0,k=0){L=M,I=U,R=k;let z=!0,O=null,ee=!1,ae=!1;if(M){const ge=ye.get(M);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(ge.__hasExternalTextures)w.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(ge.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ae=!0);const Le=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?O=Le[U][k]:O=Le[U],ee=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?O=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[k]:O=Le,C.copy(M.viewport),H.copy(M.scissor),B=M.scissorTest}else C.copy(Ee).multiplyScalar(G).floor(),H.copy(Ce).multiplyScalar(G).floor(),B=st;if(k!==0&&(O=Vu),be.bindFramebuffer(D.FRAMEBUFFER,O)&&z&&be.drawBuffers(M,O),be.viewport(C),be.scissor(H),be.setScissorTest(B),ee){const ge=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,k)}else if(ae){const ge=ye.get(M.texture),Ue=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,k,Ue)}else if(M!==null&&k!==0){const ge=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(M,U,k,z,O,ee,ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){be.bindFramebuffer(D.FRAMEBUFFER,de);try{const ge=M.texture,Ue=ge.format,Le=ge.type;if(!Ke.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&k>=0&&k<=M.height-O&&D.readPixels(U,k,z,O,ke.convert(Ue),ke.convert(Le),ee)}finally{const ge=L!==null?ye.get(L).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,z,O,ee,ae){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de)if(U>=0&&U<=M.width-z&&k>=0&&k<=M.height-O){be.bindFramebuffer(D.FRAMEBUFFER,de);const ge=M.texture,Ue=ge.format,Le=ge.type;if(!Ke.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),D.readPixels(U,k,z,O,ke.convert(Ue),ke.convert(Le),0);const je=L!==null?ye.get(L).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,je);const tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Uh(D,tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(Ae),D.deleteSync(tt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,k=0){const z=Math.pow(2,-k),O=Math.floor(M.image.width*z),ee=Math.floor(M.image.height*z),ae=U!==null?U.x:0,de=U!==null?U.y:0;w.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ae,de,O,ee),be.unbindTexture()};const Wu=D.createFramebuffer(),Xu=D.createFramebuffer();this.copyTextureToTexture=function(M,U,k=null,z=null,O=0,ee=null){ee===null&&(O!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let ae,de,ge,Ue,Le,Ae,je,tt,St;const mt=M.isCompressedTexture?M.mipmaps[ee]:M.image;if(k!==null)ae=k.max.x-k.min.x,de=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Le=k.min.y,Ae=k.isBox3?k.min.z:0;else{const an=Math.pow(2,-O);ae=Math.floor(mt.width*an),de=Math.floor(mt.height*an),M.isDataArrayTexture?ge=mt.depth:M.isData3DTexture?ge=Math.floor(mt.depth*an):ge=1,Ue=0,Le=0,Ae=0}z!==null?(je=z.x,tt=z.y,St=z.z):(je=0,tt=0,St=0);const Je=ke.convert(U.format),Te=ke.convert(U.type);let Pt;U.isData3DTexture?(w.setTexture3D(U,0),Pt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Pt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Di=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae);const ht=M.isDataArrayTexture||M.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const an=ye.get(M),Ft=ye.get(U),Gt=ye.get(an.__renderTarget),ra=ye.get(Ft.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Gt.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let fi=0;fi<ge;fi++)ht&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,O,Ae+fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ee,St+fi)),D.blitFramebuffer(Ue,Le,ae,de,je,tt,ae,de,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ye.has(M)){const an=ye.get(M),Ft=ye.get(U);be.bindFramebuffer(D.READ_FRAMEBUFFER,Wu),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xu);for(let Gt=0;Gt<ge;Gt++)ht?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,O,Ae+Gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,O),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,ee,St+Gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ft.__webglTexture,ee),O!==0?D.blitFramebuffer(Ue,Le,ae,de,je,tt,ae,de,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(Pt,ee,je,tt,St+Gt,Ue,Le,ae,de):D.copyTexSubImage2D(Pt,ee,je,tt,Ue,Le,ae,de);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Pt,ee,je,tt,St,ae,de,ge,Je,Te,mt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,ee,je,tt,St,ae,de,ge,Je,mt.data):D.texSubImage3D(Pt,ee,je,tt,St,ae,de,ge,Je,Te,mt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,je,tt,ae,de,Je,Te,mt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,je,tt,mt.width,mt.height,Je,mt.data):D.texSubImage2D(D.TEXTURE_2D,ee,je,tt,ae,de,Je,Te,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Di),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ds),ee===0&&U.generateMipmaps&&D.generateMipmap(Pt),be.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k=null,z=null,O=0){return Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,k,z,O)},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,be.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const _={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,WATER:7,BEDROCK:8,SNOW:9,CACTUS:10,FLOWER_RED:11,FLOWER_YELLOW:12,VINE:13,GRAVEL:14,MOSS:15,CASTLE_BRICK:16,APPLE:17,WEAPON_BANDIT_BLADE:18,WEAPON_RAIDER_SABER:19,WEAPON_SCORP_BOW:20,WEAPON_JAGUAR_CLAWS:21,WEAPON_WRAITH_HAMMER:22,WEAPON_YETI_AXE:23,PLANK:24,STICK:25,WOOD_SWORD:26,WOOD_AXE:27,WOOD_PICKAXE:28,WOOD_SPADE:29,STONE_SWORD:30,STONE_AXE:31,STONE_PICKAXE:32,STONE_SPADE:33,BRAMBLE:34,SKELETON_SPAWNER:35,BOW:36,ARROW:37},Qn={PX:0,NX:1,PY:2,NY:3,PZ:4,NZ:5},Yt={[_.AIR]:{name:"Air",solid:!1,transparent:!0},[_.GRASS]:{name:"Grass",solid:!0,transparent:!1,textures:{top:"grass_top",side:"grass_side",bottom:"dirt"}},[_.DIRT]:{name:"Dirt",solid:!0,transparent:!1,textures:{all:"dirt"}},[_.STONE]:{name:"Stone",solid:!0,transparent:!1,textures:{all:"stone"}},[_.SAND]:{name:"Sand",solid:!0,transparent:!1,textures:{all:"sand"}},[_.LOG]:{name:"Log",solid:!0,transparent:!1,textures:{top:"log_top",side:"log_side",bottom:"log_top"}},[_.LEAVES]:{name:"Leaves",solid:!0,transparent:!0,textures:{all:"leaves"}},[_.WATER]:{name:"Water",solid:!1,transparent:!0,textures:{all:"water"}},[_.BEDROCK]:{name:"Bedrock",solid:!0,transparent:!1,textures:{all:"bedrock"}},[_.SNOW]:{name:"Snow",solid:!0,transparent:!1,textures:{all:"snow"}},[_.CACTUS]:{name:"Cactus",solid:!0,transparent:!1,textures:{top:"cactus_top",side:"cactus_side",bottom:"cactus_top"}},[_.FLOWER_RED]:{name:"Red Flower",solid:!1,transparent:!0,textures:{all:"flower_red"}},[_.FLOWER_YELLOW]:{name:"Yellow Flower",solid:!1,transparent:!0,textures:{all:"flower_yellow"}},[_.VINE]:{name:"Vine",solid:!1,transparent:!0,textures:{all:"vine"}},[_.GRAVEL]:{name:"Gravel",solid:!0,transparent:!1,textures:{all:"gravel"}},[_.MOSS]:{name:"Moss",solid:!0,transparent:!1,textures:{all:"moss"}},[_.CASTLE_BRICK]:{name:"Castle Brick",solid:!0,transparent:!1,textures:{all:"castle_brick"}},[_.APPLE]:{name:"Apple",solid:!1,transparent:!0,textures:{all:"apple"}},[_.WEAPON_BANDIT_BLADE]:{name:"Bandit Blade",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_RAIDER_SABER]:{name:"Raider Saber",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_SCORP_BOW]:{name:"Scorpion Bow",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_JAGUAR_CLAWS]:{name:"Jaguar Claws",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_WRAITH_HAMMER]:{name:"Wraith Hammer",solid:!1,transparent:!0,textures:{all:"stone"}},[_.WEAPON_YETI_AXE]:{name:"Yeti Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.PLANK]:{name:"Plank",solid:!0,transparent:!1,textures:{all:"plank"}},[_.STICK]:{name:"Stick",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_SWORD]:{name:"Wood Sword",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_AXE]:{name:"Wood Axe",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_PICKAXE]:{name:"Wood Pickaxe",solid:!1,transparent:!0,textures:{all:"plank"}},[_.WOOD_SPADE]:{name:"Wood Spade",solid:!1,transparent:!0,textures:{all:"plank"}},[_.STONE_SWORD]:{name:"Stone Sword",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_AXE]:{name:"Stone Axe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_PICKAXE]:{name:"Stone Pickaxe",solid:!1,transparent:!0,textures:{all:"stone"}},[_.STONE_SPADE]:{name:"Stone Spade",solid:!1,transparent:!0,textures:{all:"stone"}},[_.BRAMBLE]:{name:"Bramble",solid:!1,transparent:!0,textures:{all:"bramble"}},[_.SKELETON_SPAWNER]:{name:"Skeleton Spawner",solid:!0,transparent:!1,textures:{all:"skeleton_spawner"}},[_.BOW]:{name:"Bow",solid:!1,transparent:!0,textures:{all:"plank"}},[_.ARROW]:{name:"Arrow",solid:!1,transparent:!0,textures:{all:"stone"}}};function qr(i){return Yt[i]?.solid??!1}function og(i){return Yt[i]?.transparent??!0}function gu(i){return i!==_.AIR&&i!==_.BEDROCK}function lg(i){switch(i){case _.FLOWER_RED:case _.FLOWER_YELLOW:case _.VINE:case _.BRAMBLE:return .12;case _.LEAVES:case _.APPLE:return .2;case _.WATER:return .25;case _.DIRT:case _.GRASS:case _.SAND:case _.SNOW:case _.MOSS:return .5;case _.LOG:case _.PLANK:case _.CACTUS:return .8;case _.STONE:case _.GRAVEL:case _.SKELETON_SPAWNER:return 1.35;case _.CASTLE_BRICK:return 1.75;default:return .6}}const te=16,xt=128,Ai=4,Sc=24,cg=6,Es=.6,_r=1.8,ug=1.62,hg=5.2,fg=2.6,dg=100,pg=8.8,mg=26,gg=-55,_g=280,xr=600;function xe(i,e,t){let n=(i|0)*374761393+(e|0)*668265263+(t|0)*1442695041;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=n^n>>>16|0,(n>>>0)/4294967295}function Kn(i,e,t,n){let s=(i|0)*374761393+(e|0)*668265263+(t|0)*2246822519+(n|0)*1442695041;return s=s^s>>>13|0,s=Math.imul(s,1274126177),s=s^s>>>16|0,(s>>>0)/4294967295}function ws(i){return i*i*(3-2*i)}function yn(i,e,t){return i+(e-i)*t}function Ct(i,e){return Math.floor(i/e)}function vr(i,e){return(i%e+e)%e}const Mi=4,xg=[{face:Qn.PX,normal:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],n:[1,0,0]},{face:Qn.NX,normal:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],n:[-1,0,0]},{face:Qn.PY,normal:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],n:[0,1,0]},{face:Qn.NY,normal:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],n:[0,-1,0]},{face:Qn.PZ,normal:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],n:[0,0,1]},{face:Qn.NZ,normal:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],n:[0,0,-1]}];function vg(i,e){const t=Yt[i],n=Yt[e];return t.transparent?e===0?!0:n.transparent?e!==i:!1:e===0||n.transparent}function Mc(){return{positions:[],normals:[],uvs:[],colors:[],indices:[],count:0}}function Sg(i){return!(i===_.AIR||i===_.WATER||i===_.VINE)}function Mg(i,e,t){const n=Mi+1,s=te+n*2,r=new Int16Array(s*s);for(let a=-n;a<te+n;a++)for(let o=-n;o<te+n;o++){const l=e+o,c=t+a;let u=-1;for(let h=xt-1;h>=0;h--){const f=i.getBlock(l,h,c);if(Sg(f)){u=h;break}}r[(a+n)*s+(o+n)]=u}return{top:r,stride:s,margin:n}}function Eg(i){return i.normal[1]>0?1:i.normal[1]<0?.62:i.normal[0]!==0?.86:.9}function yg(i,e,t,n,s){const r=i+(n.normal[0]>0?1:n.normal[0]<0?-1:0),a=t+(n.normal[2]>0?1:n.normal[2]<0?-1:0),o=s.top[(a+s.margin)*s.stride+(r+s.margin)],l=e+(n.normal[1]>0?1:0),c=Math.max(0,o-l);let u=Math.exp(-c*.1);u=Math.max(.05,Math.min(1,u));let h=0,f=0;for(let x=-Mi;x<=Mi;x++)for(let m=-Mi;m<=Mi;m++){const d=m*m+x*x;if(d>Mi*Mi)continue;const A=1/(1+d*.38),b=s.top[(a+x+s.margin)*s.stride+(r+m+s.margin)];if(b>l){const E=b-l,P=Math.min(1,E/(Math.sqrt(d)+1.2));h+=P*A}f+=A}const p=f>0?1-h/f:1,g=.34+Math.max(0,Math.min(1,p))*.66;return u*g*Eg(n)}function bg(i,e,t,n,s,r,a){const[o,l,c,u]=r,h=[[o,l],[o,u],[c,u],[c,l]];for(let p=0;p<4;p++){const g=s.verts[p];i.positions.push(e+g[0],t+g[1],n+g[2]),i.normals.push(s.n[0],s.n[1],s.n[2]),i.uvs.push(h[p][0],h[p][1]),i.colors.push(a,a,a)}const f=i.count;i.indices.push(f,f+1,f+2,f,f+2,f+3),i.count+=4}function Ec(i){if(i.indices.length===0)return null;const e=new qt;return e.setAttribute("position",new dt(i.positions,3)),e.setAttribute("normal",new dt(i.normals,3)),e.setAttribute("uv",new dt(i.uvs,2)),e.setAttribute("color",new dt(i.colors,3)),e.setIndex(i.indices),e.computeBoundingSphere(),e}function Ag(i,e,t,n){const s=Mc(),r=Mc(),a=e*te,o=t*te,l=Mg(i,a,o);for(let c=0;c<te;c++)for(let u=0;u<te;u++){const h=a+c,f=o+u;for(let p=0;p<xt;p++){const g=i.getBlock(h,p,f);if(g===0)continue;const x=Yt[g].transparent?r:s;for(const m of xg){const d=h+m.normal[0],A=p+m.normal[1],b=f+m.normal[2],E=i.getBlock(d,A,b);if(!vg(g,E))continue;const P=yg(c,p,u,m,l);bg(x,h,p,f,m,n(g,m.face),P)}}}return{opaque:Ec(s),transparent:Ec(r)}}function _u(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=xe(n,s,t),l=xe(n+1,s,t),c=xe(n,s+1,t),u=xe(n+1,s+1,t),h=ws(r),f=ws(a),p=yn(o,l,h),g=yn(c,u,h);return yn(p,g,f)}function Rt(i,e,t,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=_u(i*a,e*a,t+u*7919)*o,c+=o,o*=r,a*=s;return l/c}function Tg(i,e,t,n){const s=Math.floor(i),r=Math.floor(e),a=Math.floor(t),o=i-s,l=e-r,c=t-a,u=Kn(s,r,a,n),h=Kn(s+1,r,a,n),f=Kn(s,r+1,a,n),p=Kn(s+1,r+1,a,n),g=Kn(s,r,a+1,n),x=Kn(s+1,r,a+1,n),m=Kn(s,r+1,a+1,n),d=Kn(s+1,r+1,a+1,n),A=ws(o),b=ws(l),E=ws(c),P=yn(u,h,A),I=yn(f,p,A),R=yn(g,x,A),L=yn(m,d,A),y=yn(P,I,b),S=yn(R,L,b);return yn(y,S,E)}function ka(i,e,t,n,s=4,r=2,a=.5){let o=1,l=1,c=0,u=0;for(let h=0;h<s;h++)c+=Tg(i*o,e*o,t*o,n+h*7919)*l,u+=l,l*=a,o*=r;return c/u}const Oe={DESERT:0,FOREST:1,JUNGLE:2,MOUNTAIN:3,PLAINS:4,TUNDRA:5},wg={[Oe.DESERT]:"Desert",[Oe.FOREST]:"Forest",[Oe.JUNGLE]:"Jungle",[Oe.MOUNTAIN]:"Mountain",[Oe.PLAINS]:"Plains",[Oe.TUNDRA]:"Tundra"},Fr={[Oe.DESERT]:{temp:.92,moisture:.14,surface:_.SAND,subsurface:_.SAND,height:(i,e,t)=>{const n=Rt(i*.0044,e*.0044,t+101,3,2,.5),s=Rt(i*.017,e*.017,t+102,4,2,.52);return 19+n*7+s*8}},[Oe.FOREST]:{temp:.56,moisture:.62,surface:_.GRASS,subsurface:_.DIRT,height:(i,e,t)=>{const n=Rt(i*.007,e*.007,t+111,4,2,.52),s=Rt(i*.022,e*.022,t+112,3,2,.5);return 28+n*13+s*5}},[Oe.JUNGLE]:{temp:.82,moisture:.9,surface:_.GRASS,subsurface:_.DIRT,height:(i,e,t)=>{const n=Rt(i*.0062,e*.0062,t+121,4,2,.54),s=Rt(i*.014,e*.014,t+122,4,2,.5);return 26+n*10+s*8}},[Oe.MOUNTAIN]:{temp:.31,moisture:.33,surface:_.STONE,subsurface:_.STONE,height:(i,e,t)=>{const n=Rt(i*.0042,e*.0042,t+131,5,2,.55),s=Rt(i*.0026,e*.0026,t+132,4,2,.5),r=Rt(i*.016,e*.016,t+133,3,2,.5);return 34+s*s*70+n*24+r*6}},[Oe.PLAINS]:{temp:.6,moisture:.46,surface:_.GRASS,subsurface:_.DIRT,height:(i,e,t)=>{const n=Rt(i*.0052,e*.0052,t+141,3,2,.5),s=Rt(i*.019,e*.019,t+142,3,2,.5);return 24+n*6+s*3}},[Oe.TUNDRA]:{temp:.17,moisture:.56,surface:_.SNOW,subsurface:_.DIRT,height:(i,e,t)=>{const n=Rt(i*.0047,e*.0047,t+151,4,2,.52),s=Rt(i*.013,e*.013,t+152,3,2,.5);return 30+n*11+s*4}}},Rg=Object.values(Oe);function yc(i){return i*i}function xu(i,e,t){const n=Rt(e*.0017,t*.0017,i.seed+501,4,2,.5),s=Rt(e*.0018,t*.0018,i.seed+601,4,2,.5);return{temperature:n,moisture:s}}function vu(i,e,t){const n=xu(i,e,t);let s=0,r=Oe.FOREST,a=-1;const o=[];for(const l of Rg){const c=Fr[l],u=yc(n.temperature-c.temp)+yc(n.moisture-c.moisture),h=Math.exp(-u*12.5);o.push([l,h]),s+=h,h>a&&(a=h,r=l)}return{dominant:r,weights:o,total:s}}function Cg(i,e,t){const n=vu(i,e,t);let s=0;for(const[c,u]of n.weights){const h=u/n.total;s+=Fr[c].height(e,t,i.seed)*h}const r=Math.max(3,Math.min(xt-2,Math.floor(s))),a=n.dominant;let o=Fr[a].surface;const l=Fr[a].subsurface;return a===Oe.MOUNTAIN&&r>80&&(o=_.SNOW),{height:r,dominantBiome:a,surface:o,subsurface:l}}const Kr={ravineChance:.24,castleSpawnChance:.045,hostileSiteChance:.56,questgiverChance:.07},Ig={[Oe.FOREST]:{tree:{minHash:.981,minCluster:.42},appleTree:{minHash:.973,maxHash:.981,minCluster:.46},flowerRed:{minHash:.93,maxHash:.948},flowerYellow:{minHash:.948,maxHash:.965},bramble:{minHash:.9715,maxHash:.973,minCluster:.68}},[Oe.JUNGLE]:{tree:{minHash:.972,minCluster:.34},moss:{minHash:.88,maxHash:.94},flowerYellow:{minHash:.942,maxHash:.957},bramble:{minHash:.966,maxHash:.9672,minCluster:.64}},[Oe.DESERT]:{cactus:{minHash:.972,minCluster:.3},gravel:{minHash:.93,maxHash:.945}},[Oe.MOUNTAIN]:{gravel:{minHash:.89,maxHash:.93,minY:68},spire:{minHash:.988,minCluster:.5,minY:70}},[Oe.PLAINS]:{flowerRed:{minHash:.86,maxHash:.915},flowerYellow:{minHash:.915,maxHash:.965},tree:{minHash:.992,minCluster:.45},bramble:{minHash:.971,maxHash:.9722,minCluster:.72}},[Oe.TUNDRA]:{gravel:{minHash:.94,maxHash:.97},tree:{minHash:.991,minCluster:.5}}};function Et(i,e,t=1,n=0){return!(!i||i.minHash!==void 0&&!(e>i.minHash)||i.maxHash!==void 0&&!(e<i.maxHash)||i.minCluster!==void 0&&!(t>i.minCluster)||i.minY!==void 0&&!(n>i.minY))}const Pg=14,ni=te*Pg;class Dg{constructor(e){this.state=e|0,this.state===0&&(this.state=1)}next(){return this.state=Math.imul(this.state,1664525)+1013904223|0,(this.state>>>0)/4294967295}range(e,t){return e+Math.floor(this.next()*(t-e))}}function Lg(i,e,t){const n=`${e},${t}`;if(i.castleCache.has(n))return i.castleCache.get(n);if(xe(e,t,i.seed+42031)>Kr.castleSpawnChance)return i.castleCache.set(n,null),null;const r=e*73856093^t*19349663^i.seed*83492791^2654435769|0,a=new Dg(r),o=34,l=e*ni+a.range(o,ni-o),c=t*ni+a.range(o,ni-o),u=Math.min(xt-24,1+Math.max(i.getSurfaceYAt(l,c),i.getSurfaceYAt(l+8,c),i.getSurfaceYAt(l,c+8),i.getSurfaceYAt(l+8,c+8))),h=a.range(13,18),f=a.range(13,18),p={x:l-Math.floor(h*.5),z:c-Math.floor(f*.5),w:h,d:f,h:a.range(7,11),kind:"keep"},g=[p],x=[],m=a.range(8,15);for(let y=0;y<m;y++){const S=g[a.range(0,g.length)],C=a.range(0,4),H=a.next()<.55,B=S.x+2+a.range(0,Math.max(1,S.w-4)),X=S.z+2+a.range(0,Math.max(1,S.d-4));let Y,W;if(H){const Ce=a.range(6,13);C===0||C===2?(Y=3,W=Ce):(Y=Ce,W=3)}else Y=a.range(7,13),W=a.range(7,13);let j=0,G=0;C===0?(j=B-Math.floor(Y*.5),G=S.z-W):C===1?(j=S.x+S.w,G=X-Math.floor(W*.5)):C===2?(j=B-Math.floor(Y*.5),G=S.z+S.d):(j=S.x-Y,G=X-Math.floor(W*.5));let re=!1;for(const Ce of g)if(j<Ce.x+Ce.w&&j+Y>Ce.x&&G<Ce.z+Ce.d&&G+W>Ce.z){re=!0;break}if(re)continue;const fe=H?a.range(5,7):a.range(6,10),Ee={x:j,z:G,w:Y,d:W,h:fe,kind:H?"corridor":"room"};g.push(Ee),C===0&&x.push({side:C,x:B,z:S.z}),C===1&&x.push({side:C,x:S.x+S.w-1,z:X}),C===2&&x.push({side:C,x:B,z:S.z+S.d-1}),C===3&&x.push({side:C,x:S.x,z:X})}const d=[],A=2,b=a.range(9,14);d.push({x:p.x-A,z:p.z-A,r:A,h:b}),d.push({x:p.x+p.w-1+A,z:p.z-A,r:A,h:b}),d.push({x:p.x-A,z:p.z+p.d-1+A,r:A,h:b}),d.push({x:p.x+p.w-1+A,z:p.z+p.d-1+A,r:A,h:b});let E=1/0,P=-1/0,I=1/0,R=-1/0;for(const y of g)E=Math.min(E,y.x),P=Math.max(P,y.x+y.w-1),I=Math.min(I,y.z),R=Math.max(R,y.z+y.d-1);for(const y of d)E=Math.min(E,y.x-y.r),P=Math.max(P,y.x+y.r),I=Math.min(I,y.z-y.r),R=Math.max(R,y.z+y.r);const L={baseY:u,pieces:g,towers:d,connections:x,minX:E,maxX:P,minZ:I,maxZ:R};return i.castleCache.set(n,L),L}function Ng(i,e,t,n,s,r){const a=s,o=s+te-1,l=r,c=r+te-1,u=220,h=Ct(a-u,ni),f=Ct(o+u,ni),p=Ct(l-u,ni),g=Ct(c+u,ni);for(let x=p;x<=g;x++)for(let m=h;m<=f;m++){const d=Lg(i,m,x);!d||!(d.minX<=o&&d.maxX>=a&&d.minZ<=c&&d.maxZ>=l)||Ug(i,e,t,n,d)}}function Ug(i,e,t,n,s){for(const r of s.pieces)Og(i,e,t,n,s.baseY,r);for(const r of s.towers)Fg(i,e,t,n,s.baseY,r);for(const r of s.connections)Bg(i,e,t,n,s.baseY,r)}function Og(i,e,t,n,s,r){const a=Math.min(xt-3,s+r.h);for(let o=r.z;o<r.z+r.d;o++)for(let l=r.x;l<r.x+r.w;l++){i.setGeneratedBlockIfInChunk(e,t,n,l,s,o,_.CASTLE_BRICK);for(let c=s+1;c<=a;c++)l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1?i.setGeneratedBlockIfInChunk(e,t,n,l,c,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,c,o);if(r.kind!=="corridor"){const c=a+1;l===r.x||l===r.x+r.w-1||o===r.z||o===r.z+r.d-1||(l+o&1)===0?i.setGeneratedBlockIfInChunk(e,t,n,l,c,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,c,o)}}if(r.kind==="room"&&r.w>=9&&r.d>=9){const o=Math.min(xt-4,s+r.h-1),l=[[r.x+2,r.z+2],[r.x+r.w-3,r.z+2],[r.x+2,r.z+r.d-3],[r.x+r.w-3,r.z+r.d-3]];for(const[c,u]of l)for(let h=s+1;h<=o;h++)i.setGeneratedBlockIfInChunk(e,t,n,c,h,u,_.CASTLE_BRICK)}}function Fg(i,e,t,n,s,r){const a=Math.min(xt-3,s+r.h);for(let o=r.z-r.r;o<=r.z+r.r;o++)for(let l=r.x-r.r;l<=r.x+r.r;l++){const c=Math.abs(l-r.x),u=Math.abs(o-r.z);if(Math.max(c,u)>r.r)continue;i.setGeneratedBlockIfInChunk(e,t,n,l,s,o,_.CASTLE_BRICK);for(let f=s+1;f<=a;f++)Math.max(c,u)===r.r?i.setGeneratedBlockIfInChunk(e,t,n,l,f,o,_.CASTLE_BRICK):i.setGeneratedAirIfInChunk(e,t,n,l,f,o);const h=a+1;((l+o&1)===0||Math.max(c,u)===r.r)&&i.setGeneratedBlockIfInChunk(e,t,n,l,h,o,_.CASTLE_BRICK)}}function Bg(i,e,t,n,s,r){for(let a=s+1;a<=s+4;a++)for(let o=-1;o<=1;o++)r.side===0?(i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z-1)):r.side===1?(i.setGeneratedAirIfInChunk(e,t,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(e,t,n,r.x+1,a,r.z+o)):r.side===2?(i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z),i.setGeneratedAirIfInChunk(e,t,n,r.x+o,a,r.z+1)):(i.setGeneratedAirIfInChunk(e,t,n,r.x,a,r.z+o),i.setGeneratedAirIfInChunk(e,t,n,r.x-1,a,r.z+o))}const es=96;function Br(i){return Math.max(0,Math.min(1,i))}function kg(i,e,t,n,s,r){const a=s-t,o=r-n,l=i-t,c=e-n,u=a*a+o*o;if(u<=1e-5){const g=i-t,x=e-n;return{distance:Math.hypot(g,x),t:0}}const h=Br((l*a+c*o)/u),f=t+a*h,p=n+o*h;return{distance:Math.hypot(i-f,e-p),t:h}}function zg(i,e,t){const n=`${e},${t}`;if(i.ravineCache.has(n))return i.ravineCache.get(n);if(xe(e,t,i.seed+74111)>Kr.ravineChance)return i.ravineCache.set(n,null),null;const r=e*es+es*.5,a=t*es+es*.5,o=xe(e,t,i.seed+74113)*Math.PI*2,c=(70+xe(e,t,i.seed+74117)*120)*.5,u=(xe(e,t,i.seed+74119)-.5)*30,h=(xe(e,t,i.seed+74123)-.5)*30,f=r+u,p=a+h,g={ax:f-Math.cos(o)*c,az:p-Math.sin(o)*c,bx:f+Math.cos(o)*c,bz:p+Math.sin(o)*c,width:3.5+xe(e,t,i.seed+74129)*6.5,depth:22+xe(e,t,i.seed+74131)*38,slopePow:.45+xe(e,t,i.seed+74137)*.25,hasFlatBottom:xe(e,t,i.seed+74141)>.22,flatBottomWidth:5+xe(e,t,i.seed+74143)*5,flatDepthFactor:.86+xe(e,t,i.seed+74147)*.11,topNarrowFactor:.35+xe(e,t,i.seed+74153)*.18,bottomExpandFactor:1.18+xe(e,t,i.seed+74159)*.22};return i.ravineCache.set(n,g),g}function Hg(i,e,t,n,s,r){for(let a=0;a<te;a++)for(let o=0;o<te;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Ct(l,es),f=Ct(c,es);let p=xt,g=!1;const x=[];for(let A=-2;A<=2;A++)for(let b=-2;b<=2;b++){const E=zg(i,h+b,f+A);if(!E)continue;const{distance:P,t:I}=kg(l+.5,c+.5,E.ax,E.az,E.bx,E.bz),R=E.width*(.7+.3*Math.sin(Math.PI*I));if(P>R*E.bottomExpandFactor)continue;const L=P/R,y=1-L;let S=E.depth*Math.pow(y,E.slopePow);if(E.hasFlatBottom){const H=Br(E.flatBottomWidth*.5/Math.max(.001,R)),B=E.depth*E.flatDepthFactor;if(L<=H)S=B;else{const X=Br((L-H)/(1-H)),Y=B*Math.pow(1-X,E.slopePow);S=Math.max(S,Y)}}if(S<=.01)continue;g=!0;const C=u-S;C<p&&(p=C),x.push({distance:P,widthAt:R,floor:C,topNarrowFactor:E.topNarrowFactor,bottomExpandFactor:E.bottomExpandFactor})}if(!g)continue;const m=Math.max(4,Math.floor(p)),d=Math.min(xt-2,u+2);for(let A=m;A<=d;A++){let b=!1;for(let E=0;E<x.length;E++){const P=x[E];if(A<P.floor)continue;const I=Math.max(1,u-P.floor),R=Br((u-A)/I),L=P.topNarrowFactor+(P.bottomExpandFactor-P.topNarrowFactor)*R;if(P.distance<=P.widthAt*L){b=!0;break}}b&&i.setGeneratedAirIfInChunk(e,t,n,l,A,c)}}}function Gg(i,e,t,n,s,r){for(let a=0;a<te;a++)for(let o=0;o<te;o++){const l=s+a,c=r+o,u=i.getColumnData(l,c).height,h=Rt(l*.008,c*.008,i.seed+9501,3,2,.5),f=Math.min(u-2,88);if(f<=8)continue;for(let x=6;x<=f;x++){const m=ka(l*.045,x*.06,c*.045,i.seed+9601,3,2,.5),d=ka(l*.031+33,x*.045,c*.031+91,i.seed+9609,2,2,.5),A=.71-Math.max(0,h-.52)*.26;(m>A||h>.6&&m>A-.08&&d>.72)&&i.setGeneratedAirIfInChunk(e,t,n,l,x,c)}const p=Rt(l*.011,c*.011,i.seed+9701,3,2,.5),g=xe(l,c,i.seed+9702);if(p>.66&&g>.93&&u>14){const x=3+(g*6|0),m=Math.max(5,u-x);for(let A=u;A>=m;A--)i.setGeneratedAirIfInChunk(e,t,n,l,A,c);if(p>.72||h>.58){const A=Math.max(6,u-36);for(let b=m-1;b>=A;b--)ka(l*.06,b*.05,c*.06,i.seed+9721,2,2,.5)>.46&&(i.setGeneratedAirIfInChunk(e,t,n,l,b,c),xe(l+b,c-b,i.seed+9731)>.72&&i.setGeneratedAirIfInChunk(e,t,n,l+1,b,c))}}}}function Vg(i,e,t,n,s,r){Hg(i,e,t,n,s,r),Gg(i,e,t,n,s,r);for(let a=0;a<te;a++)for(let o=0;o<te;o++)e[(0*te+o)*te+a]!==_.BEDROCK&&(e[(0*te+o)*te+a]=_.BEDROCK)}function Wg(i,e,t,n,s,r){for(let o=s-6;o<s+te+6;o++)for(let l=r-6;l<r+te+6;l++){const c=i.getColumnData(o,l),u=c.height,h=i.getGeneratedBlockFromChunkData(e,t,n,o,u+1,l),f=Xg(i,e,t,n,o,u,l),p=xe(o,l,i.seed+9001),g=_u(o*.03,l*.03,i.seed+9002),x=Ig[c.dominantBiome]??null;if(c.dominantBiome===Oe.FOREST&&(f&&Et(x.tree,p,g,u)&&c.surface===_.GRASS&&Sr(i,e,t,n,o,u+1,l,4+(p*4|0),2,!1),f&&Et(x.appleTree,p,g,u)&&c.surface===_.GRASS&&Yg(i,e,t,n,o,u+1,l,5+(p*3|0)),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.flowerRed,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.FLOWER_RED),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.flowerYellow,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.FLOWER_YELLOW),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Oe.JUNGLE&&(f&&Et(x.tree,p,g,u)&&c.surface===_.GRASS&&Sr(i,e,t,n,o,u+1,l,6+(p*5|0),3,!0),f&&h===_.AIR&&Et(x.moss,p,g,u)&&c.surface===_.GRASS&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.MOSS),f&&h===_.AIR&&Et(x.flowerYellow,p,g,u)&&c.surface===_.GRASS&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.FLOWER_YELLOW),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Oe.DESERT){if(Et(x.cactus,p,g,u)&&c.surface===_.SAND){const m=2+(p*5|0);for(let d=0;d<m;d++)i.setGeneratedBlockIfInChunk(e,t,n,o,u+1+d,l,_.CACTUS)}h===_.AIR&&Et(x.gravel,p,g,u)&&c.surface===_.SAND&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.GRAVEL)}if(c.dominantBiome===Oe.MOUNTAIN&&(h===_.AIR&&Et(x.gravel,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.GRAVEL),Et(x.spire,p,g,u))){const m=2+(p*4|0);for(let d=0;d<m;d++)i.setGeneratedBlockIfInChunk(e,t,n,o,u+1+d,l,u+d>84?_.SNOW:_.STONE)}c.dominantBiome===Oe.PLAINS&&(f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.flowerRed,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.FLOWER_RED),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.flowerYellow,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.FLOWER_YELLOW),f&&Et(x.tree,p,g,u)&&c.surface===_.GRASS&&Sr(i,e,t,n,o,u+1,l,4+(p*3|0),2,!1),f&&h===_.AIR&&c.surface===_.GRASS&&Et(x.bramble,p,g,u)&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.BRAMBLE)),c.dominantBiome===Oe.TUNDRA&&(h===_.AIR&&Et(x.gravel,p,g,u)&&c.surface===_.SNOW&&i.setGeneratedBlockIfInChunk(e,t,n,o,u+1,l,_.GRAVEL),Et(x.tree,p,g,u)&&c.surface===_.SNOW&&Sr(i,e,t,n,o,u+1,l,4+(p*3|0),1,!1))}}function Xg(i,e,t,n,s,r,a){const o=i.getGeneratedBlockFromChunkData(e,t,n,s,r,a);if(o===_.AIR||o===_.WATER)return!1;const l=s-t*te,c=a-n*te;if(l<0||c<0||l>=te||c>=te)return!1;for(let u=1;u<=5;u++){const h=i.getGeneratedBlockFromChunkData(e,t,n,s,r-u,a);if(h===_.AIR||h===_.WATER)return!1}return!0}function Sr(i,e,t,n,s,r,a,o,l,c){for(let h=0;h<o;h++)i.setGeneratedBlockIfInChunk(e,t,n,s,r+h,a,_.LOG);const u=r+o;for(let h=-l;h<=l;h++){const f=Math.max(1,l-Math.abs(h)+1);for(let p=-f;p<=f;p++)for(let g=-f;g<=f;g++){if(Math.abs(p)+Math.abs(g)>f+1)continue;const x=s+p,m=u+h,d=a+g;if(i.setGeneratedLeafIfAir(e,t,n,x,m,d),!c||!(Math.abs(p)===f||Math.abs(g)===f))continue;const b=xe(x,d,i.seed+11811+h*17);if(b<.62)continue;const E=2+(b*4|0);for(let P=1;P<=E;P++)i.setGeneratedVineIfAir(e,t,n,x,m-P,d)}}}function Yg(i,e,t,n,s,r,a,o){for(let u=0;u<o;u++)i.setGeneratedBlockIfInChunk(e,t,n,s,r+u,a,_.LOG);const l=r+o,c=2;for(let u=-c;u<=c;u++){const h=Math.max(1,c-Math.abs(u)+1);for(let f=-h;f<=h;f++)for(let p=-h;p<=h;p++){if(Math.abs(f)+Math.abs(p)>h+1)continue;const g=s+f,x=l+u,m=a+p;xe(g*19+x,m*23-x,i.seed+29011)>.86&&Math.abs(f)+Math.abs(p)>=2?i.setGeneratedBlockIfInChunk(e,t,n,g,x,m,_.APPLE):i.setGeneratedLeafIfAir(e,t,n,g,x,m)}}}function ys(i,e){return`${i},${e}`}function Ln(i,e,t){return e*te*te+t*te+i}class qg{constructor(e,t,n=133742){this.scene=e,this.atlas=t,this.seed=n|0,this.generated=new Map,this.modified=new Map,this.loaded=new Map,this.buildQueue=[],this.castleCache=new Map,this.ravineCache=new Map,this.materialOpaque=null,this.materialTransparent=null}setupMaterials(e,t){this.materialOpaque=e,this.materialTransparent=t}getClimate(e,t){return xu(this,e,t)}getBiomeBlend(e,t){return vu(this,e,t)}getColumnData(e,t){return Cg(this,e,t)}getBiomeAt(e,t){return this.getColumnData(e,t).dominantBiome}getSurfaceYAt(e,t){return this.getColumnData(e,t).height}generateChunkData(e,t){const n=ys(e,t);if(this.generated.has(n))return this.generated.get(n);const s=new Uint8Array(te*xt*te),r=e*te,a=t*te;for(let o=0;o<te;o++)for(let l=0;l<te;l++){const c=r+o,u=a+l,h=this.getColumnData(c,u),f=h.height;for(let p=0;p<=f;p++){let g;p===0?g=_.BEDROCK:p===f?g=h.surface:p>=f-3?g=h.subsurface:g=_.STONE,s[Ln(o,p,l)]=g}if(f<Sc)for(let p=f+1;p<=Sc;p++)s[Ln(o,p,l)]=_.WATER}return Vg(this,s,e,t,r,a),Wg(this,s,e,t,r,a),Ng(this,s,e,t,r,a),this.generated.set(n,s),s}getGeneratedBlockFromChunkData(e,t,n,s,r,a){if(r<0)return _.BEDROCK;if(r>=xt)return _.AIR;const o=s-t*te,l=a-n*te;return o<0||l<0||o>=te||l>=te?_.AIR:e[Ln(o,r,l)]}setGeneratedBlockIfInChunk(e,t,n,s,r,a,o){if(r<=0||r>=xt)return;const l=s-t*te,c=a-n*te;l<0||c<0||l>=te||c>=te||(e[Ln(l,r,c)]=o)}setGeneratedAirIfInChunk(e,t,n,s,r,a){if(r<=0||r>=xt)return;const o=s-t*te,l=a-n*te;o<0||l<0||o>=te||l>=te||(e[Ln(o,r,l)]=_.AIR)}setGeneratedLeafIfAir(e,t,n,s,r,a){if(r<=0||r>=xt)return;const o=s-t*te,l=a-n*te;if(o<0||l<0||o>=te||l>=te)return;const c=Ln(o,r,l),u=e[c];(u===_.AIR||u===_.WATER||u===_.VINE)&&(e[c]=_.LEAVES)}setGeneratedVineIfAir(e,t,n,s,r,a){if(r<=0||r>=xt)return;const o=s-t*te,l=a-n*te;if(o<0||l<0||o>=te||l>=te)return;const c=Ln(o,r,l);e[c]===_.AIR&&(e[c]=_.VINE)}getLocalBlockFromData(e,t,n,s,r){if(s<0)return _.BEDROCK;if(s>=xt)return _.AIR;const a=ys(e,t),o=Ln(n,s,r),l=this.modified.get(a);return l&&l.has(o)?l.get(o):this.generateChunkData(e,t)[o]}getBlock(e,t,n){if(t<0)return _.BEDROCK;if(t>=xt)return _.AIR;const s=Ct(e,te),r=Ct(n,te),a=vr(e,te),o=vr(n,te);return this.getLocalBlockFromData(s,r,a,t,o)}setBlock(e,t,n,s){if(t<=0||t>=xt)return!1;const r=Ct(e,te),a=Ct(n,te),o=vr(e,te),l=vr(n,te),c=ys(r,a),u=Ln(o,t,l),h=this.generateChunkData(r,a)[u];let f=this.modified.get(c);return f||(f=new Map,this.modified.set(c,f)),s===h?f.delete(u):f.set(u,s),f.size===0&&this.modified.delete(c),this.markChunkDirty(r,a),o===0&&this.markChunkDirty(r-1,a),o===te-1&&this.markChunkDirty(r+1,a),l===0&&this.markChunkDirty(r,a-1),l===te-1&&this.markChunkDirty(r,a+1),!0}markChunkDirty(e,t){const n=ys(e,t),s=this.loaded.get(n);s&&(s.dirty||(s.dirty=!0,this.buildQueue.push(n)))}loadChunksAround(e,t){const n=Ct(Math.floor(e),te),s=Ct(Math.floor(t),te),r=new Set;for(let o=-Ai;o<=Ai;o++)for(let l=-Ai;l<=Ai;l++){const c=n+l,u=s+o,h=ys(c,u);r.add(h),this.loaded.has(h)||(this.loaded.set(h,{cx:c,cz:u,key:h,dirty:!0,opaqueMesh:null,transparentMesh:null}),this.buildQueue.push(h))}const a=Ai+2;for(const[o,l]of this.loaded.entries()){const c=Math.abs(l.cx-n),u=Math.abs(l.cz-s);!r.has(o)&&(c>a||u>a)&&(this.disposeChunk(l),this.loaded.delete(o))}}disposeChunk(e){e.opaqueMesh&&(e.opaqueMesh.geometry.dispose(),this.scene.remove(e.opaqueMesh),e.opaqueMesh=null),e.transparentMesh&&(e.transparentMesh.geometry.dispose(),this.scene.remove(e.transparentMesh),e.transparentMesh=null)}rebuildOneChunk(){for(;this.buildQueue.length>0;){const e=this.buildQueue.shift(),t=this.loaded.get(e);if(!t||!t.dirty)continue;const n=Ag(this,t.cx,t.cz,this.atlas.getFaceUVs);this.disposeChunk(t),n.opaque&&(t.opaqueMesh=new vt(n.opaque,this.materialOpaque),t.opaqueMesh.frustumCulled=!0,t.opaqueMesh.castShadow=!0,t.opaqueMesh.receiveShadow=!0,this.scene.add(t.opaqueMesh)),n.transparent&&(t.transparentMesh=new vt(n.transparent,this.materialTransparent),t.transparentMesh.frustumCulled=!0,t.transparentMesh.castShadow=!1,t.transparentMesh.receiveShadow=!0,this.scene.add(t.transparentMesh)),t.dirty=!1;return}}isBlockTransparent(e){return og(e)}}const Kg={[_.GRASS]:5808973,[_.DIRT]:8148537,[_.STONE]:9277592,[_.SAND]:14336637,[_.LOG]:8345912,[_.LEAVES]:5018445,[_.WATER]:4883158,[_.BEDROCK]:4605510,[_.SNOW]:15134455,[_.CACTUS]:4821577,[_.FLOWER_RED]:13317697,[_.FLOWER_YELLOW]:15451450,[_.VINE]:4687176,[_.GRAVEL]:9538692,[_.MOSS]:7047759,[_.CASTLE_BRICK]:9277335,[_.PLANK]:11632725,[_.BRAMBLE]:6192450,[_.SKELETON_SPAWNER]:6317423,[_.BOW]:10775353,[_.ARROW]:12304072};function Su(i,e=0){return new oi({color:i,emissive:e})}function Tt(i,e,t=1){return{position:i,rotation:e,scale:t}}function Mu(i,e,t,n,s=null){const r=new vt(e,t);return r.position.copy(n),s&&r.rotation.set(s.x,s.y,s.z),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xe(i,e,t,n,s,r=null,a=0){const o=new En(t.x,t.y,t.z),l=Su(s,a);return e.push(l),Mu(i,o,l,n,r)}function Eu(i,e,t,n,s,r,a,o=null,l=0){const c=new ks(t,n,s,8),u=Su(a,l);return e.push(u),Mu(i,c,u,r,o)}function $g(i,e,t){const n=Kg[t]??9145227;Xe(i,e,new T(.34,.34,.34),new T(0,0,0),n),Xe(i,e,new T(.26,.02,.26),new T(0,.16,0),16777215,null,526344)}function Zg(i,e){Xe(i,e,new T(.24,.24,.24),new T(0,0,0),13184301),Xe(i,e,new T(.04,.08,.04),new T(.02,.16,0),7292710),Xe(i,e,new T(.1,.03,.07),new T(.08,.18,0),6266178)}function za(i,e){Xe(i,e,new T(.06,.36,.04),new T(0,-.02,0),12173256),Xe(i,e,new T(.09,.05,.08),new T(0,-.24,0),5978916),Xe(i,e,new T(.14,.03,.06),new T(0,-.18,0),3812643)}function jg(i,e){Xe(i,e,new T(.05,.34,.04),new T(.05,.02,0),14146018,new Ge(0,0,-.42)),Xe(i,e,new T(.16,.03,.06),new T(-.04,-.16,0),10322762),Xe(i,e,new T(.05,.12,.05),new T(-.1,-.24,0),7293998)}function Jg(i,e){Eu(i,e,.02,.02,.42,new T(0,0,0),10513721,new Ge(0,0,Math.PI*.5)),Xe(i,e,new T(.05,.28,.04),new T(-.14,.11,0),9264175,new Ge(0,0,-.55)),Xe(i,e,new T(.05,.28,.04),new T(-.14,-.11,0),9264175,new Ge(0,0,.55)),Xe(i,e,new T(.01,.44,.01),new T(-.26,0,0),14147043)}function Qg(i,e){Xe(i,e,new T(.18,.08,.14),new T(0,-.12,0),5980461);for(const t of[-.06,0,.06])Xe(i,e,new T(.025,.26,.03),new T(t,.08,0),14738410,new Ge(0,0,-.12))}function e_(i,e){Xe(i,e,new T(.08,.42,.08),new T(0,-.06,0),8148537),Xe(i,e,new T(.24,.12,.14),new T(0,.22,0),8225677),Xe(i,e,new T(.05,.16,.05),new T(.12,.22,0),11832382,null,2758400),Xe(i,e,new T(.05,.16,.05),new T(-.12,.22,0),11832382,null,2758400)}function t_(i,e){Xe(i,e,new T(.07,.44,.07),new T(0,-.08,0),8214327),Xe(i,e,new T(.21,.15,.05),new T(.09,.16,0),10475250,new Ge(0,0,-.2),1454659),Xe(i,e,new T(.08,.11,.04),new T(-.07,.12,0),13364989,new Ge(0,0,.35),1585212)}function n_(i,e){Xe(i,e,new T(.04,.38,.04),new T(0,0,0),9134139)}function i_(i,e,t=10578489,n=14606046){Eu(i,e,.018,.018,.42,new T(0,0,0),t,new Ge(0,0,Math.PI*.5)),Xe(i,e,new T(.05,.27,.04),new T(-.14,.11,0),t,new Ge(0,0,-.56)),Xe(i,e,new T(.05,.27,.04),new T(-.14,-.11,0),t,new Ge(0,0,.56)),Xe(i,e,new T(.01,.44,.01),new T(-.26,0,0),n,null,1118481)}function s_(i,e){Xe(i,e,new T(.03,.38,.03),new T(0,0,0),9068601),Xe(i,e,new T(.09,.09,.03),new T(0,.18,0),13027793),Xe(i,e,new T(.08,.05,.01),new T(0,-.16,.015),12864331)}function bc(i,e,t,n){Xe(i,e,new T(.05,.4,.05),new T(0,-.05,0),n),Xe(i,e,new T(.18,.12,.05),new T(.08,.13,0),t,new Ge(0,0,-.14))}function Ac(i,e,t,n){Xe(i,e,new T(.05,.4,.05),new T(0,-.05,0),n),Xe(i,e,new T(.24,.06,.05),new T(0,.14,0),t)}function Tc(i,e,t,n){Xe(i,e,new T(.05,.38,.05),new T(0,-.04,0),n),Xe(i,e,new T(.11,.16,.05),new T(0,.13,0),t)}function yu(i,e){!i||!e||(i.position.copy(e.position),i.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),i.scale.setScalar(e.scale??1))}function bu(i,e=!1){switch(i){case _.WOOD_AXE:case _.STONE_AXE:case _.WEAPON_YETI_AXE:return e?Tt(new T(.08,-.04,.02),new Ge(-.18,.18,.86),1):Tt(new T(.02,-.2,.02),new Ge(.12,.04,1.62),1.2);case _.WOOD_PICKAXE:case _.STONE_PICKAXE:return e?Tt(new T(.06,-.05,.01),new Ge(-.14,.1,.94),1):Tt(new T(.02,-.2,.01),new Ge(.1,.04,1.58),1.2);case _.WOOD_SPADE:case _.STONE_SPADE:return e?Tt(new T(.05,-.06,.02),new Ge(-.12,.12,.52),1):Tt(new T(.02,-.19,.01),new Ge(.08,.03,1.54),1.16);case _.WOOD_SWORD:case _.STONE_SWORD:case _.WEAPON_BANDIT_BLADE:case _.WEAPON_RAIDER_SABER:return e?Tt(new T(.04,-.08,.02),new Ge(-.05,.1,.22),1):Tt(new T(.01,-.16,.24),new Ge(1.57,.04,.02),1.24);case _.WEAPON_WRAITH_HAMMER:return e?Tt(new T(.07,-.08,.01),new Ge(-.12,.18,.68),1):Tt(new T(.02,-.2,.01),new Ge(.08,.03,1.56),1.16);case _.WEAPON_SCORP_BOW:case _.BOW:return e?Tt(new T(.01,-.06,.02),new Ge(.02,.18,1.36),1):Tt(new T(.03,-.16,.06),new Ge(.18,.12,1.57),1.28);case _.ARROW:return e?Tt(new T(.02,-.05,.02),new Ge(.08,.02,.28),.95):Tt(new T(.02,-.17,.01),new Ge(.08,.03,1.55),1.12);case _.WEAPON_JAGUAR_CLAWS:return e?Tt(new T(.02,-.03,.03),new Ge(.18,.2,.16),1):Tt(new T(.02,-.1,.04),new Ge(.18,.08,1.26),1.02);default:return e?Tt(new T(0,0,0),new Ge(0,0,0),.9):Tt(new T(.01,-.12,.02),new Ge(.1,.06,1.3),.98)}}function r_(i){return Number.isFinite(i)&&i>_.AIR}function Au(i){if(!r_(i))return null;const e=new en,t=[];switch(i){case _.APPLE:Zg(e,t);break;case _.WEAPON_BANDIT_BLADE:za(e,t);break;case _.WEAPON_RAIDER_SABER:jg(e,t);break;case _.WEAPON_SCORP_BOW:Jg(e,t);break;case _.BOW:i_(e,t);break;case _.ARROW:s_(e,t);break;case _.WEAPON_JAGUAR_CLAWS:Qg(e,t);break;case _.WEAPON_WRAITH_HAMMER:e_(e,t);break;case _.WEAPON_YETI_AXE:t_(e,t);break;case _.STICK:n_(e,t);break;case _.WOOD_SWORD:za(e,t),e.traverse(n=>{n.isMesh&&n.material.color.setHex(n.position.y>-.12?12225108:8279605)});break;case _.WOOD_AXE:bc(e,t,12752226,8345399);break;case _.WOOD_PICKAXE:Ac(e,t,12752226,8345399);break;case _.WOOD_SPADE:Tc(e,t,12752226,8345399);break;case _.STONE_SWORD:za(e,t);break;case _.STONE_AXE:bc(e,t,11515071,8345399);break;case _.STONE_PICKAXE:Ac(e,t,11515071,8345399);break;case _.STONE_SPADE:Tc(e,t,11515071,8345399);break;default:$g(e,t,i);break}return e.userData.dispose=()=>{e.traverse(n=>{n.isMesh&&n.geometry?.dispose?.()});for(const n of t)n.dispose?.()},e}class a_{constructor(e){this.camera=e,this.root=new en,this.root.position.set(.42,-.34,-.72),this.root.rotation.set(-.36,-.2,-.12),this.camera.add(this.root),this.currentItemId=_.AIR,this.currentModel=null}setItem(e){const t=Number.isFinite(e)?e:_.AIR;if(t===this.currentItemId)return;this.currentItemId=t,this.currentModel&&(this.root.remove(this.currentModel),this.currentModel.userData.dispose?.(),this.currentModel=null);const n=Au(t);n&&(yu(n,bu(t,!0)),this.root.add(n),this.currentModel=n)}update(e){if(!this.currentModel)return;const t=Math.sin(e*1.7)*.012;this.root.position.y=-.34+t,this.root.rotation.z=-.12+Math.sin(e*1.35)*.025}}function Fo(i,e,t=1){const n=Number.isFinite(e)?e:_.AIR;if(i.userData.itemId===n)return;i.userData.model&&(i.remove(i.userData.model),i.userData.model.userData.dispose?.(),i.userData.model=null),i.userData.itemId=n;const s=Au(n);s&&(yu(s,bu(n,!1)),s.scale.multiplyScalar(t),i.add(s),i.userData.model=s)}const Tu=20,o_=28,wc=30,l_=5,Rc=18,c_=12;function u_(i,e,t,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=e[a],c=t[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function h_(i=13620443,e=13191754){const t=new en,n=new vt(new ks(.018,.018,.72,8),new oi({color:9134139}));n.rotation.z=Math.PI*.5,t.add(n);const s=new vt(new nl(.05,.15,4),new oi({color:i}));s.rotation.z=-Math.PI*.5,s.position.x=.38,t.add(s);for(const r of[-.03,.03]){const a=new vt(new En(.12,.05,.01),new oi({color:e}));a.position.set(-.28,0,r),t.add(a)}return t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),t.userData.dispose=()=>{t.traverse(r=>{r.isMesh&&(r.geometry?.dispose?.(),r.material?.dispose?.())})},t}function f_(i,e,t,n=Tu){const s=e.x-i.x,r=e.z-i.z,a=e.y-i.y,o=Math.hypot(s,r);if(o<.001)return null;const l=t*t,c=l*l-n*(n*o*o+2*a*l);if(c<0)return null;const u=Math.sqrt(c),h=(l-u)/(n*o),f=1/Math.sqrt(1+h*h),p=h*f;return new T(s/o*t*f,t*p,r/o*t*f)}class d_{constructor(e,t,n,s={}){this.scene=e,this.world=t,this.mobs=n,this.onPlayerHit=s.onPlayerHit??(()=>{}),this.projectiles=new Map,this.nextId=1,this.tmpDir=new T,this.tmpFrom=new T,this.tmpTo=new T,this.tmpMin=new T,this.tmpMax=new T}spawnArrow({origin:e,velocity:t,ownerType:n,ownerEntityId:s=null,hitMobs:r=!1,hitPlayer:a=!1,damage:o=Rc}){const l=this.nextId++,c=h_(n==="mob"?15264752:14015202,n==="mob"?7310543:13191754);c.position.copy(e),this.scene.add(c);const u={id:l,mesh:c,position:e.clone(),velocity:t.clone(),ownerType:n,ownerEntityId:s,hitMobs:r,hitPlayer:a,damage:o,life:l_};return this.alignArrow(u),this.projectiles.set(l,u),u}firePlayerArrow(e,t,n){const s=t.clone().multiplyScalar(o_);return this.spawnArrow({origin:e,velocity:s,ownerType:"player",hitMobs:!0,hitPlayer:!1,damage:n??Rc})}fireSkeletonArrow(e,t,n){return this.spawnArrow({origin:e,velocity:t,ownerType:"mob",ownerEntityId:n,hitMobs:!1,hitPlayer:!0,damage:c_})}alignArrow(e){this.tmpDir.copy(e.velocity).normalize(),e.mesh.quaternion.setFromUnitVectors(new T(1,0,0),this.tmpDir)}removeProjectile(e){const t=this.projectiles.get(e);t&&(this.scene.remove(t.mesh),t.mesh.userData.dispose?.(),this.projectiles.delete(e))}hitSolidOnSegment(e,t){const n=t.x-e.x,s=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.14));for(let l=1;l<=o;l++){const c=l/o,u=Math.floor(e.x+n*c),h=Math.floor(e.y+s*c),f=Math.floor(e.z+r*c);if(qr(this.world.getBlock(u,h,f)))return!0}return!1}hitPlayerOnSegment(e,t,n){const s=n.getAABB();this.tmpMin.set(s.minX,s.minY,s.minZ),this.tmpMax.set(s.maxX,s.maxY,s.maxZ),this.tmpDir.subVectors(t,e);const r=this.tmpDir.length();if(r<1e-6)return!1;this.tmpDir.divideScalar(r);const a=u_(e,this.tmpDir,this.tmpMin,this.tmpMax);return a!==null&&a<=r}update(e,t){for(const[n,s]of this.projectiles){if(this.tmpFrom.copy(s.position),s.velocity.y-=Tu*e,s.position.addScaledVector(s.velocity,e),this.tmpTo.copy(s.position),this.hitSolidOnSegment(this.tmpFrom,this.tmpTo)){this.removeProjectile(n);continue}if(s.hitMobs){const r=this.mobs.hitEntityOnSegment(this.tmpFrom,this.tmpTo,s.ownerEntityId);if(r){this.mobs.damageEntity(r,s.damage),this.removeProjectile(n);continue}}if(s.hitPlayer&&this.hitPlayerOnSegment(this.tmpFrom,this.tmpTo,t)){this.onPlayerHit(s.damage,s),this.removeProjectile(n);continue}s.mesh.position.copy(s.position),this.alignArrow(s),s.life-=e,s.life<=0&&this.removeProjectile(n)}}}function ne(i,e,t,n){const s=new En(e[0],e[1],e[2]),r=new oi({color:n}),a=new vt(s,r);return a.position.set(t[0],t[1],t[2]),i.add(a),a}function fn(i,e,t,n=1776411,s=.12){ne(i,[.06,.06,.02],[-s,e,t],n),ne(i,[.06,.06,.02],[s,e,t],n)}function dn(i){return{type:i,legs:[],arms:[],wings:[],tail:null,head:null}}function p_(i){const e=dn("humanoid");return ne(i,[.6,.92,.34],[0,.46,0],3960737),e.head=ne(i,[.52,.5,.36],[0,1.17,0],14664353),e.legs.push(ne(i,[.18,.56,.2],[-.2,.24,0],2964307)),e.legs.push(ne(i,[.18,.56,.2],[.2,.24,0],2964307)),e.arms.push(ne(i,[.1,.4,.1],[-.36,.62,0],14664353)),e.arms.push(ne(i,[.1,.4,.1],[.36,.62,0],14664353)),ne(i,[.58,.1,.38],[0,1.48,0],3812130),fn(i,1.2,.19,1710618,.11),ne(i,[.1,.03,.02],[0,1.09,.19],8015674),e}function wu(i){const e=dn("quadruped");ne(i,[.75,.44,.34],[0,.58,0],10516047),e.head=ne(i,[.32,.32,.28],[.42,.76,0],10120774),ne(i,[.2,.14,.2],[.53,.62,0],9330233),e.tail=ne(i,[.08,.12,.08],[-.42,.64,0],8542003),fn(i,.8,.14,1513239,.05);for(const t of[-.24,.24])e.legs.push(ne(i,[.14,.38,.14],[t,.2,.12],8082486)),e.legs.push(ne(i,[.14,.38,.14],[t,.2,-.12],8082486));return ne(i,[.04,.28,.04],[.5,1.02,.09],13878443),ne(i,[.04,.28,.04],[.5,1.02,-.09],13878443),e}function m_(i){const e=dn("crawler");ne(i,[.8,.22,.32],[0,.38,0],12169325),e.head=ne(i,[.3,.18,.24],[.49,.41,0],10261593),e.tail=ne(i,[.46,.1,.1],[-.62,.32,0],9208913),fn(i,.45,.13,2236962,.05);for(const t of[-.13,.13])e.legs.push(ne(i,[.14,.1,.14],[-.15,.2,t],10063705)),e.legs.push(ne(i,[.14,.1,.14],[.2,.2,t],10063705));return e}function g_(i){const e=dn("flying");return ne(i,[.32,.42,.28],[0,.64,0],3065451),e.head=ne(i,[.28,.24,.24],[.14,.9,0],2339935),ne(i,[.1,.08,.08],[.3,.88,0],14985781),fn(i,.93,.12,1052688,.045),e.wings.push(ne(i,[.48,.06,.2],[0,.66,.19],5232383)),e.wings.push(ne(i,[.48,.06,.2],[0,.66,-.19],4110304)),e.tail=ne(i,[.14,.16,.12],[-.2,.4,0],2861402),e}function __(i){const e=dn("quadruped");ne(i,[.68,.4,.3],[0,.58,0],14408927),e.head=ne(i,[.3,.28,.24],[.38,.76,0],13158862),fn(i,.79,.12,1447446,.05),ne(i,[.06,.24,.06],[.43,.98,.09],13218950),ne(i,[.06,.24,.06],[.43,.98,-.09],13218950);for(const t of[-.2,.2])e.legs.push(ne(i,[.13,.36,.13],[t,.2,.11],9869213)),e.legs.push(ne(i,[.13,.36,.13],[t,.2,-.11],9869213));return e}function Cc(i){const e=dn("quadruped");ne(i,[.74,.46,.42],[0,.58,0],15790319),e.head=ne(i,[.34,.3,.28],[.43,.72,0],4602932),fn(i,.74,.14,1250067,.06);for(const t of[-.22,.22])e.legs.push(ne(i,[.13,.34,.13],[t,.2,.14],6181962)),e.legs.push(ne(i,[.13,.34,.13],[t,.2,-.14],6181962));return e}function x_(i){const e=wu(i);return ne(i,[.04,.24,.04],[.52,1.14,.14],14209727),ne(i,[.04,.16,.04],[.57,1.2,.18],14209727),ne(i,[.04,.24,.04],[.52,1.14,-.14],14209727),ne(i,[.04,.16,.04],[.57,1.2,-.18],14209727),e}function Bo(i,e,t,n=!1){const s=dn("humanoid");return ne(i,[.56,.88,.32],[0,.46,0],e),s.head=ne(i,[.44,.48,.32],[0,1.14,0],t),s.legs.push(ne(i,[.16,.56,.16],[-.18,.22,0],3155487)),s.legs.push(ne(i,[.16,.56,.16],[.18,.22,0],3155487)),s.arms.push(ne(i,[.12,.42,.12],[-.34,.62,0],t)),s.arms.push(ne(i,[.12,.42,.12],[.34,.62,0],t)),fn(i,1.16,.17,n?12524829:1315860,.08),ne(i,[.12,.04,.02],[0,1.04,.17],n?5181456:7819064),n&&ne(i,[.46,.08,.36],[0,1.42,0],2039583),s}function v_(i){const e=dn("crawler");ne(i,[.66,.3,.32],[0,.48,0],9929799),e.head=ne(i,[.32,.2,.24],[.42,.54,0],8219191),fn(i,.58,.12,13512478,.05),e.tail=ne(i,[.5,.08,.08],[-.58,.42,0],7166512);for(const t of[-.13,.13])e.legs.push(ne(i,[.12,.2,.12],[-.16,.2,t],8351806)),e.legs.push(ne(i,[.12,.2,.12],[.16,.2,t],8351806));return e}function S_(i){const e=dn("quadruped");ne(i,[.74,.34,.32],[0,.54,0],12747069),e.head=ne(i,[.32,.24,.24],[.45,.62,0],11300657),fn(i,.65,.12,12394014,.05);for(const t of[-.22,.22])e.legs.push(ne(i,[.12,.28,.12],[t,.2,.13],9329191)),e.legs.push(ne(i,[.12,.28,.12],[t,.2,-.13],9329191));return e.tail=ne(i,[.44,.08,.08],[-.58,.5,0],9066533),e}function M_(i){const e=dn("wraith");return ne(i,[.64,.86,.42],[0,.56,0],7962758),e.head=ne(i,[.48,.36,.34],[0,1.18,0],6976378),e.arms.push(ne(i,[.26,.5,.16],[-.45,.62,0],6713207)),e.arms.push(ne(i,[.26,.5,.16],[.45,.62,0],6713207)),fn(i,1.2,.18,16756019,.09),e}function E_(i){const e=dn("humanoid");return ne(i,[.78,.96,.48],[0,.58,0],13162981),e.head=ne(i,[.52,.5,.4],[0,1.23,0],14149103),e.arms.push(ne(i,[.28,.62,.2],[-.48,.62,0],12111067)),e.arms.push(ne(i,[.28,.62,.2],[.48,.62,0],12111067)),e.legs.push(ne(i,[.18,.5,.18],[-.2,.25,0],10334914)),e.legs.push(ne(i,[.18,.5,.18],[.2,.25,0],10334914)),fn(i,1.22,.2,9093375,.1),ne(i,[.16,.05,.03],[0,1.08,.2],5337490),e}function y_(i){const e=dn("humanoid"),t=15065814,n=13289144,s=10459786;ne(i,[.18,.82,.12],[0,.62,0],n),ne(i,[.46,.08,.16],[0,.9,0],t),ne(i,[.42,.08,.14],[0,.72,0],t);for(const r of[.82,.74,.66,.58])ne(i,[.46,.03,.03],[0,r,.1],n);return e.head=ne(i,[.42,.46,.32],[0,1.22,0],t),ne(i,[.22,.08,.06],[0,1.03,.13],n),e.legs.push(ne(i,[.12,.62,.12],[-.14,.31,0],n)),e.legs.push(ne(i,[.12,.62,.12],[.14,.31,0],n)),e.arms.push(ne(i,[.1,.66,.1],[-.32,.62,0],n)),e.arms.push(ne(i,[.1,.66,.1],[.32,.62,0],n)),fn(i,1.22,.17,1710618,.08),ne(i,[.1,.04,.02],[0,1.08,.17],s),e}function Mr(i,e,t=!1){const n=new en;let s;if(t)return s=p_(n),{root:n,rig:s};switch(i.key){case"deer":s=wu(n);break;case"lizard":s=m_(n);break;case"parrot":s=g_(n);break;case"goat":s=__(n);break;case"sheep":s=Cc(n);break;case"reindeer":s=x_(n);break;case"bandit":s=Bo(n,7228726,13674370,!0);break;case"raider":s=Bo(n,5715753,13146740,!0);break;case"sandstalker":s=v_(n);break;case"jaguar":s=S_(n);break;case"rockwraith":s=M_(n);break;case"yeti":s=E_(n);break;case"skeleton":s=y_(n);break;default:s=Cc(n);break}return e&&ne(n,[.08,.08,.08],[.24,.9,.2],9376788),{root:n,rig:s}}function Er(i){const e=document.createElement("canvas");e.width=96,e.height=16;const t=new Qr(e);t.minFilter=Qt;const n=new el({map:t,transparent:!0,depthTest:!1,depthWrite:!1}),s=new au(n);s.scale.set(1.45,.26,1),s.position.set(0,2.25,0),i.mesh.add(s),i.healthCanvas=e,i.healthTexture=t,i.healthSprite=s,Ru(i)}function Ru(i){if(!i.healthCanvas)return;const e=i.healthCanvas.getContext("2d");e.clearRect(0,0,i.healthCanvas.width,i.healthCanvas.height),e.fillStyle="rgba(25,25,25,0.85)",e.fillRect(0,0,96,16);const t=Math.max(0,Math.min(1,i.health/i.maxHealth));e.fillStyle="rgba(192,36,36,0.95)",e.fillRect(2,2,Math.floor(92*t),12),i.healthTexture.needsUpdate=!0}function yr(i){const e=new il(.65,.95,24),t=new cs({color:16726843,transparent:!0,opacity:0,side:cn,depthTest:!1}),n=new vt(e,t);n.position.set(0,1.05,0),n.rotation.x=Math.PI/2,i.mesh.add(n),i.damageHalo=n}const $n=384,Zn=(Ai+5)*te,b_={[Oe.FOREST]:{key:"deer",name:"Deer",color:10516047,speed:1.6},[Oe.DESERT]:{key:"lizard",name:"Lizard",color:12169325,speed:1.4},[Oe.JUNGLE]:{key:"parrot",name:"Parrot",color:3065451,speed:2.2,flying:!0},[Oe.MOUNTAIN]:{key:"goat",name:"Goat",color:14145757,speed:1.5},[Oe.PLAINS]:{key:"sheep",name:"Sheep",color:15790319,speed:1.3},[Oe.TUNDRA]:{key:"reindeer",name:"Reindeer",color:10454377,speed:1.5}},A_={[Oe.FOREST]:{key:"bandit",name:"Bandit",color:7228726,speed:2.1,health:65,drop:_.WEAPON_BANDIT_BLADE},[Oe.DESERT]:{key:"sandstalker",name:"Sandstalker",color:9929799,speed:2,health:58,drop:_.WEAPON_SCORP_BOW},[Oe.JUNGLE]:{key:"jaguar",name:"Jungle Stalker",color:12747069,speed:2.3,health:60,drop:_.WEAPON_JAGUAR_CLAWS},[Oe.MOUNTAIN]:{key:"rockwraith",name:"Rock Wraith",color:7962758,speed:1.9,health:72,drop:_.WEAPON_WRAITH_HAMMER},[Oe.PLAINS]:{key:"raider",name:"Raider",color:7358520,speed:2,health:68,drop:_.WEAPON_RAIDER_SABER},[Oe.TUNDRA]:{key:"yeti",name:"Yeti",color:13162981,speed:1.8,health:85,drop:_.WEAPON_YETI_AXE}},T_=new Set(["bandit","raider"]),jn={key:"skeleton",name:"Skeleton",speed:1.95,health:54,drop:null};function br(i,e,t=!1){return t||e==="humanoid"||e==="wraith"||i==="bandit"||i==="raider"||i==="yeti"||i==="rockwraith"?Math.PI*.5:0}function Ic(i){switch(i.key){case"bandit":case"raider":case"skeleton":case"questgiver":return{centerY:.96,halfX:.28,halfY:.96,halfZ:.22};case"yeti":return{centerY:1.02,halfX:.38,halfY:1.02,halfZ:.28};case"rockwraith":return{centerY:.92,halfX:.34,halfY:.92,halfZ:.26};case"deer":case"reindeer":return{centerY:.6,halfX:.52,halfY:.5,halfZ:.22};case"goat":case"sheep":return{centerY:.58,halfX:.46,halfY:.46,halfZ:.24};case"jaguar":return{centerY:.56,halfX:.48,halfY:.34,halfZ:.2};case"lizard":case"sandstalker":return{centerY:.4,halfX:.5,halfY:.2,halfZ:.18};case"parrot":return{centerY:.7,halfX:.2,halfY:.24,halfZ:.18};default:return{centerY:.7,halfX:.35,halfY:.5,halfZ:.24}}}function Pc(i,e,t,n){let s=-1/0,r=1/0;for(const a of["x","y","z"]){const o=i[a],l=e[a],c=t[a],u=n[a];if(Math.abs(l)<1e-8){if(o<c||o>u)return null;continue}let h=(c-o)/l,f=(u-o)/l;if(h>f&&([h,f]=[f,h]),s=Math.max(s,h),r=Math.min(r,f),s>r)return null}return r<0?null:s>=0?s:r}function ji(i,e,t){const n=Math.floor(e),s=Math.floor(t);for(let r=xt-1;r>=1;r--){const a=i.getBlock(n,r,s),o=i.getBlock(n,r+1,s);if(a!==_.AIR&&a!==_.WATER&&o===_.AIR)return r}return 1}function w_(i,e,t){const n=t.x-e.x,s=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,s,r),o=Math.max(1,Math.ceil(a/.35));for(let l=1;l<o;l++){const c=l/o,u=Math.floor(e.x+n*c),h=Math.floor(e.y+s*c),f=Math.floor(e.z+r*c),p=i.getBlock(u,h,f);if(p!==_.AIR&&p!==_.WATER&&p!==_.LEAVES&&p!==_.VINE)return!1}return!0}class R_{constructor(e,t,n={}){this.scene=e,this.world=t,this.onEnemyKilled=n.onEnemyKilled??(()=>{}),this.onQuestGiverKilled=n.onQuestGiverKilled??(()=>{}),this.entities=new Map,this.chunkSpawns=new Map,this.hostileSites=new Map,this.hostileSiteSpawns=new Map,this.skeletonSpawnerSpawns=new Map,this.nextId=1,this.spawnTick=0,this.tmpDir=new T,this.raycaster=new yf}attachEntityMesh(e){e.mesh.userData.entityId=e.id,e.mesh.traverse(t=>{t.isMesh&&(t.userData.entityId=e.id)}),this.scene.add(e.mesh)}attachHeldItem(e,t,n=.72){if(!t)return;const s=new en;s.position.set(.05,-.3,.02),s.rotation.set(.08,.04,-.08),(e.rig?.arms?.[1]??e.mesh).add(s),Fo(s,t,n),e.heldAnchor=s,e.heldItemId=t}spawnForChunk(e){const t=e.key;if(this.chunkSpawns.has(t))return;const n=e.cx*te+te*.5,s=e.cz*te+te*.5,r=this.world.getBiomeAt(n,s),a=[];a.push(this.spawnMob(e,r,b_[r],!1));const o=xe(e.cx,e.cz,45019);(r===Oe.FOREST||r===Oe.PLAINS||r===Oe.JUNGLE)&&o>1-Kr.questgiverChance&&a.push(this.spawnQuestGiver(e,r)),this.chunkSpawns.set(t,a.filter(Boolean))}getHostileSite(e,t){const n=`${e},${t}`;if(this.hostileSites.has(n))return this.hostileSites.get(n);if(xe(e,t,88901)>Kr.hostileSiteChance)return this.hostileSites.set(n,null),null;const r=64,a=e*$n+r+Math.floor(xe(e,t,88911)*($n-r*2)),o=t*$n+r+Math.floor(xe(e,t,88921)*($n-r*2)),l=this.world.getBiomeAt(a,o),c=A_[l],u=T_.has(c.key);let h=1;u?h=3+(xe(e,t,88931)*3|0):xe(e,t,88941)>.8&&(h=2);const f={key:n,x:a,z:o,biome:l,def:c,intelligent:u,groupSize:h};return this.hostileSites.set(n,f),f}spawnHostileSite(e){if(this.hostileSiteSpawns.has(e.key))return;const t=[],n=ji(this.world,e.x,e.z);for(let s=0;s<e.groupSize;s++){const r=xe(s,e.x,7801)*Math.PI*2,a=e.intelligent?2.2+xe(s,e.z,7802)*4.5:xe(s,e.z,7803)*2.5,o=Math.floor(e.x+Math.cos(r)*a),l=Math.floor(e.z+Math.sin(r)*a),c=ji(this.world,o,l),u=this.spawnHostileAt(e,s,o,c,l,n);u&&t.push(u)}this.hostileSiteSpawns.set(e.key,t)}spawnHostileAt(e,t,n,s,r,a){const{root:o,rig:l}=Mr(e.def,!0,!1),c=this.nextId++,u=s+(e.def.flying?5.3:1.02);o.position.set(n+.5,u,r+.5);const h=Math.PI*2*t/Math.max(1,e.groupSize),f=e.intelligent?3.2:1.6,p={id:c,sourceType:"site",sourceKey:e.key,biome:e.biome,kind:"mob",key:e.def.key,name:e.def.name,hostile:!0,flying:!!e.def.flying,intelligent:e.intelligent,speed:e.def.speed,mesh:o,rig:l,vx:0,vz:0,wanderTimer:.6+xe(c,n,8111)*2,attackTimer:0,homeY:u,homeX:e.x+Math.cos(h)*f,homeZ:e.z+Math.sin(h)*f,patrolRadius:e.intelligent?7.5:10,animPhase:xe(c,n,9201)*Math.PI*2,groupId:e.key,groupCenterY:a+1.02,maxHealth:e.def.health,health:e.def.health,dropItem:e.def.drop,damageFlash:0,shootCooldown:0,modelYawOffset:br(e.def.key,l?.type,!1)};return Er(p),yr(p),this.entities.set(c,p),this.attachEntityMesh(p),c}findSkeletonSpawnerPosition(e,t,n){const s=[[2,0],[-2,0],[0,2],[0,-2],[3,1],[-3,-1],[1,-3],[-1,3]];for(const[r,a]of s){const o=e+r,l=n+a,c=ji(this.world,o,l);if(!(Math.abs(c-t)>5)&&this.world.getBlock(o,c+1,l)===_.AIR&&this.world.getBlock(o,c+2,l)===_.AIR)return{x:o+.5,y:c+1.02,z:l+.5,homeY:c+1.02}}return this.world.getBlock(e,t+1,n)===_.AIR&&this.world.getBlock(e,t+2,n)===_.AIR?{x:e+.5,y:t+1.02,z:n+.5,homeY:t+1.02}:null}spawnSkeletonFromSpawner(e,t,n,s){const r=this.findSkeletonSpawnerPosition(e,t,n);if(!r)return null;const{root:a,rig:o}=Mr(jn,!0,!1),l=xe(e*31+t,n*17+this.nextId,this.world.seed+9123)>.5?_.BOW:_.STONE_SWORD,c=this.nextId++;a.position.set(r.x,r.y,r.z);const u={id:c,sourceType:"spawner",sourceKey:s,biome:this.world.getBiomeAt(e,n),kind:"mob",key:jn.key,name:jn.name,hostile:!0,flying:!1,intelligent:!1,speed:jn.speed,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.5+xe(c,e,8119)*1.8,attackTimer:0,homeY:r.homeY,homeX:e+.5,homeZ:n+.5,patrolRadius:6.5,animPhase:xe(c,n,9231)*Math.PI*2,groupId:s,maxHealth:jn.health,health:jn.health,dropItem:jn.drop,damageFlash:0,ranged:l===_.BOW,shootCooldown:1.1+xe(e,n,6311)*.8,modelYawOffset:br(jn.key,o?.type,!1)};return Er(u),yr(u),this.attachHeldItem(u,l,1),this.entities.set(c,u),this.attachEntityMesh(u),c}spawnMob(e,t,n,s){const r=e.cx*te+2+Math.floor(xe(e.cx,e.cz,s?443:223)*12),a=e.cz*te+2+Math.floor(xe(e.cx,e.cz,s?877:557)*12),o=ji(this.world,r,a),{root:l,rig:c}=Mr(n,s,!1),u=this.nextId++,h=o+(n.flying?5.3:1.02);l.position.set(r+.5,h,a+.5);const f={id:u,sourceType:"chunk",sourceKey:e.key,biome:t,kind:"mob",key:n.key,name:n.name,hostile:s,flying:!!n.flying,intelligent:!1,speed:n.speed,mesh:l,rig:c,vx:0,vz:0,wanderTimer:.3+xe(u,r,8111)*2,attackTimer:0,homeY:h,homeX:r,homeZ:a,patrolRadius:9,animPhase:xe(u,r,9201)*Math.PI*2,groupId:null,maxHealth:s?50:30,health:s?50:30,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,modelYawOffset:br(n.key,c?.type,!1)};return s&&(Er(f),yr(f)),this.entities.set(u,f),this.attachEntityMesh(f),u}spawnQuestGiver(e,t){const n=e.cx*te+4+Math.floor(xe(e.cx,e.cz,1201)*8),s=e.cz*te+4+Math.floor(xe(e.cx,e.cz,1202)*8),r=ji(this.world,n,s),{root:a,rig:o}=Mr({},!1,!0),l=this.nextId++;a.position.set(n+.5,r+1.02,s+.5);const c={id:l,sourceType:"chunk",sourceKey:e.key,biome:t,kind:"mob",questgiver:!0,key:"questgiver",name:`Quest Giver (${wg[t]})`,hostile:!1,flying:!1,intelligent:!1,speed:1.05,mesh:a,rig:o,vx:0,vz:0,wanderTimer:.6+xe(l,n,8111)*2,attackTimer:0,homeY:r+1.02,homeX:n,homeZ:s,patrolRadius:7,animPhase:0,groupId:null,maxHealth:34,health:34,dropItem:null,damageFlash:0,provoked:!1,shootCooldown:0,modelYawOffset:br("questgiver",o?.type,!0)};return this.entities.set(l,c),this.attachEntityMesh(c),l}removeEntity(e){const t=this.entities.get(e);t&&(this.scene.remove(t.mesh),t.mesh.traverse(n=>{!n.isMesh&&!n.isSprite||(n.geometry?.dispose?.(),n.material?.dispose?.(),n.material?.map&&n.material.map.dispose?.())}),this.entities.delete(e))}getEntityFromObject(e){let t=e;for(;t;){if(t.userData&&t.userData.entityId!==void 0)return this.entities.get(t.userData.entityId)??null;t=t.parent}return null}attackFromRay(e,t,n,s){let r=null,a=n;const o=new T,l=new T;for(const c of this.entities.values()){if(c.kind!=="mob"||c.health<=0)continue;const u=Ic(c);o.set(c.mesh.position.x-u.halfX,c.mesh.position.y+u.centerY-u.halfY,c.mesh.position.z-u.halfZ),l.set(c.mesh.position.x+u.halfX,c.mesh.position.y+u.centerY+u.halfY,c.mesh.position.z+u.halfZ);const h=Pc(e,t,o,l);h===null||h>n||h<a&&(a=h,r=c)}return r?this.damageEntity(r,s):null}attackNearestInFront(e,t,n,s,r){return this.attackFromRay(e,t,n,r)}hitEntityOnSegment(e,t,n=null){const s=new T().subVectors(t,e),r=s.length();if(r<1e-6)return null;s.divideScalar(r);const a=new T,o=new T;let l=null,c=r;for(const u of this.entities.values()){if(u.kind!=="mob"||u.health<=0||n!==null&&u.id===n)continue;const h=Ic(u);a.set(u.mesh.position.x-h.halfX,u.mesh.position.y+h.centerY-h.halfY,u.mesh.position.z-h.halfZ),o.set(u.mesh.position.x+h.halfX,u.mesh.position.y+h.centerY+h.halfY,u.mesh.position.z+h.halfZ);const f=Pc(e,s,a,o);f===null||f>r||f<c&&(c=f,l=u)}return l}damageEntity(e,t){if(!e||e.kind!=="mob")return null;if(!e.hostile&&!e.provoked&&(e.provoked=!0,e.healthSprite||Er(e),e.damageHalo||yr(e)),e.health=Math.max(0,e.health-t),e.damageFlash=.25,e.healthSprite&&Ru(e),e.health<=0){const n={name:e.name,key:e.key,dropItem:e.dropItem},s=!!e.questgiver;return this.removeEntity(e.id),e.hostile&&this.onEnemyKilled(n),s&&this.onQuestGiverKilled(e),{killed:!0,...n}}return{killed:!1,name:e.name,key:e.key}}spawnHostilesNear(e){const t=Ct(e.x-Zn,$n),n=Ct(e.x+Zn,$n),s=Ct(e.z-Zn,$n),r=Ct(e.z+Zn,$n);for(let a=s;a<=r;a++)for(let o=t;o<=n;o++){const l=this.getHostileSite(o,a);if(!l)continue;const c=l.x-e.x,u=l.z-e.z;c*c+u*u>Zn*Zn||this.spawnHostileSite(l)}}syncSpawns(e){for(const s of this.world.loaded.values())this.spawnForChunk(s);this.spawnHostilesNear(e),this.syncSkeletonSpawnerSpawns(e);const t=(Ai+6)*te,n=t*t;for(const[s,r]of this.entities){const a=r.mesh.position.x-e.x,o=r.mesh.position.z-e.z;a*a+o*o>n&&this.removeEntity(s)}for(const[s,r]of this.chunkSpawns.entries())r.some(a=>this.entities.has(a))||this.chunkSpawns.delete(s);for(const[s,r]of this.hostileSiteSpawns.entries())r.some(a=>this.entities.has(a))||this.hostileSiteSpawns.delete(s)}syncSkeletonSpawnerSpawns(e){const t=new Set,n=Zn*Zn;for(const[s,r]of this.world.modified.entries()){const a=this.world.loaded.get(s);if(a)for(const[o,l]of r.entries()){if(l!==_.SKELETON_SPAWNER)continue;const c=o%te,h=Math.floor(o/te)%te,f=Math.floor(o/(te*te)),p=a.cx*te+c,g=a.cz*te+h,x=p+.5-e.x,m=g+.5-e.z;if(x*x+m*m>n)continue;const d=`${p},${f},${g}`;t.add(d);const b=(this.skeletonSpawnerSpawns.get(d)??[]).filter(P=>this.entities.has(P));if(b.length>0){this.skeletonSpawnerSpawns.set(d,b);continue}const E=this.spawnSkeletonFromSpawner(p,f,g,d);E&&this.skeletonSpawnerSpawns.set(d,[E])}}for(const[s,r]of this.skeletonSpawnerSpawns.entries())if(!t.has(s)){for(const a of r)this.removeEntity(a);this.skeletonSpawnerSpawns.delete(s)}}animateEntity(e,t,n,s){if(!e.rig)return;const r=e.rig,a=n>.04,o=a?Math.min(.55,n*.16):.05;e.animPhase+=t*(a?8+n*2.4:2.2);for(let l=0;l<r.legs.length;l++){const c=r.legs[l],u=e.animPhase+(l%2===0?0:Math.PI);c.rotation.x=Math.sin(u)*o}for(let l=0;l<r.arms.length;l++){const c=r.arms[l],u=e.animPhase+(l%2===0?Math.PI:0);c.rotation.x=Math.sin(u)*(o*.9)}if(r.wings.length>0){const l=Math.sin(s*16+e.id)*(a?.7:.3);r.wings[0].rotation.z=l,r.wings[1]&&(r.wings[1].rotation.z=-l)}r.tail&&(r.tail.rotation.y=Math.sin(s*5+e.id)*.35,r.tail.rotation.x=Math.cos(s*4+e.id)*.12),r.head&&(r.head.rotation.x=Math.sin(s*2.7+e.id)*.05)}updateEntity(e,t,n,s,r,a=null,o=null){const l=e.mesh.position,c=t.x-l.x,u=t.z-l.z,h=Math.hypot(c,u);if(e.hostile&&e.ranged&&r&&h<23){e.shootCooldown=Math.max(0,e.shootCooldown-n);const g=9.5;if(h>15.5){const b=h>.001?1/h:0;e.vx=c*b*e.speed*.95,e.vz=u*b*e.speed*.95}else if(h<g){const b=h>.001?1/h:0;e.vx=-c*b*e.speed*.8,e.vz=-u*b*e.speed*.8}else e.vx*=Math.max(0,1-n*5),e.vz*=Math.max(0,1-n*5);const m=new T(t.x,t.y+.9,t.z);if(o){const b=h/wc;m.x+=o.x*b*.55,m.z+=o.z*b*.55}const d=new T(l.x,l.y+1.12,l.z),A=f_(d,m,wc);a&&A&&e.shootCooldown<=0&&w_(this.world,d,m)&&(a.fireSkeletonArrow(d,A,e.id),e.shootCooldown=1.15+xe(e.id,s*7|0,7071)*.35),l.y=e.homeY}else if(e.hostile&&r&&h<8.8){const g=h>.001?1/h:0;e.vx=c*g*e.speed*1.25,e.vz=u*g*e.speed*1.25,e.attackTimer+=n*7,l.y=e.homeY+Math.sin(e.attackTimer)*.2}else{if(e.wanderTimer-=n,e.wanderTimer<=0){const g=xe(s*10|0,e.id,7001)*Math.PI*2,x=e.speed*(e.intelligent?.55:.75);e.vx=Math.cos(g)*x,e.vz=Math.sin(g)*x,e.wanderTimer=1.8+xe(e.id,s*4|0,7002)*3.2}if(!e.hostile&&e.provoked&&h<7.2){const g=h>.001?1/h:0;e.vx=-c*g*e.speed*1.15,e.vz=-u*g*e.speed*1.15}if(e.hostile){const g=e.homeX-l.x,x=e.homeZ-l.z,m=Math.hypot(g,x);if(m>e.patrolRadius){const d=m>.001?1/m:0;e.vx=g*d*e.speed*.9,e.vz=x*d*e.speed*.9}}e.flying&&(l.y=e.homeY+Math.sin(s*2.3+e.id)*.7)}l.x+=e.vx*n,l.z+=e.vz*n;const f=ji(this.world,l.x,l.z);if(!e.flying){const g=f+1.02;Math.abs(g-e.homeY)<4?(e.homeY=g,l.y=g):(e.vx*=-.8,e.vz*=-.8)}e.damageHalo&&(e.damageFlash=Math.max(0,e.damageFlash-n),e.damageHalo.material.opacity=e.damageFlash>0?.7*(e.damageFlash/.25):0),this.tmpDir.set(e.vx,0,e.vz);const p=this.tmpDir.length();p>.001&&(e.mesh.rotation.y=-Math.atan2(e.vz,e.vx)+(e.modelYawOffset??0)),this.animateEntity(e,n,p,s)}update(e,t,n,s=!0,r=null,a=null){this.spawnTick+=t,this.spawnTick>=1&&(this.syncSpawns(e),this.spawnTick=0);for(const o of this.entities.values())this.updateEntity(o,e,t,n,s,r,a)}countHostilesInRange(e,t){const n=t*t;let s=0;for(const r of this.entities.values()){if(!r.hostile||r.kind!=="mob")continue;const a=r.mesh.position.x-e.x,o=r.mesh.position.y-e.y,l=r.mesh.position.z-e.z;a*a+o*o+l*l<=n&&s++}return s}getNearestQuestGiver(e,t=4){let n=null,s=t*t;for(const r of this.entities.values()){if(!r.questgiver)continue;const a=r.mesh.position.x-e.x,o=r.mesh.position.y-e.y,l=r.mesh.position.z-e.z,c=a*a+o*o+l*l;c<s&&(s=c,n=r)}return n}}const Nn=1e-4;class C_{constructor(e,t){this.camera=e,this.domElement=t,this.position=new T(0,40,0),this.velocity=new T(0,0,0),this.yaw=0,this.pitch=0,this.grounded=!1,this.flyMode=!1,this.jumpQueued=!1,this.lastSpaceTap=-9999,this.keys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1,Space:!1},this.isLocked=!1,this.tmpForward=new T,this.tmpRight=new T,this.tmpMove=new T,this.walkSpeed=hg,this.sneakSpeed=fg,this.flySpeed=dg,this.bindInput(),this.syncCamera()}setMovementSpeeds(e,t){this.walkSpeed=Math.max(1,e),this.sneakSpeed=Math.max(.5,this.walkSpeed*.5),this.flySpeed=Math.max(1,Math.min(300,t))}bindInput(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",e=>{if(!this.isLocked)return;const t=.0022;this.yaw-=e.movementX*t,this.pitch-=e.movementY*t;const n=Math.PI/2-.01;this.pitch=Math.max(-n,Math.min(n,this.pitch))}),document.addEventListener("keydown",e=>{if(e.code in this.keys){if(e.repeat)return;if(e.code==="Space"){const t=performance.now();t-this.lastSpaceTap<=_g?(this.flyMode=!this.flyMode,this.flyMode?this.velocity.y=0:this.velocity.y=Math.min(this.velocity.y,0),this.lastSpaceTap=-9999):(this.lastSpaceTap=t,this.flyMode||(this.jumpQueued=!0))}this.keys[e.code]=!0}}),document.addEventListener("keyup",e=>{e.code in this.keys&&(this.keys[e.code]=!1)})}getAABB(e=this.position){const t=Es*.5;return{minX:e.x-t,maxX:e.x+t,minY:e.y,maxY:e.y+_r,minZ:e.z-t,maxZ:e.z+t}}overlapsSolid(e,t){const n=Math.floor(t.minX),s=Math.floor(t.maxX-Nn),r=Math.floor(t.minY),a=Math.floor(t.maxY-Nn),o=Math.floor(t.minZ),l=Math.floor(t.maxZ-Nn);for(let c=r;c<=a;c++)for(let u=o;u<=l;u++)for(let h=n;h<=s;h++)if(qr(e.getBlock(h,c,u)))return{x:h,y:c,z:u};return null}resolveAxis(e,t,n){if(n===0)return!1;this.position[t]+=n;let s=!1,r;for(;r=this.overlapsSolid(e,this.getAABB(this.position));)s=!0,t==="x"?(n>0?this.position.x=r.x-Es*.5-Nn:this.position.x=r.x+1+Es*.5+Nn,this.velocity.x=0):t==="y"?(n>0?this.position.y=r.y-_r-Nn:(this.position.y=r.y+1+Nn,this.grounded=!0),this.velocity.y=0):t==="z"&&(n>0?this.position.z=r.z-Es*.5-Nn:this.position.z=r.z+1+Es*.5+Nn,this.velocity.z=0);return s}update(e,t){const n=this.grounded;if(this.grounded=!1,this.tmpForward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.tmpRight.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.tmpMove.set(0,0,0),this.keys.KeyW&&this.tmpMove.add(this.tmpForward),this.keys.KeyS&&this.tmpMove.sub(this.tmpForward),this.keys.KeyD&&this.tmpMove.add(this.tmpRight),this.keys.KeyA&&this.tmpMove.sub(this.tmpRight),this.tmpMove.lengthSq()>0&&this.tmpMove.normalize(),this.flyMode){const r=this.flySpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=0,this.keys.Space&&(this.velocity.y+=r),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.velocity.y-=r)}else{const r=this.keys.ShiftLeft||this.keys.ShiftRight?this.sneakSpeed:this.walkSpeed;this.velocity.x=this.tmpMove.x*r,this.velocity.z=this.tmpMove.z*r,this.velocity.y=Math.max(gg,this.velocity.y-mg*t),this.jumpQueued&&n&&(this.velocity.y=pg,this.grounded=!1),this.jumpQueued=!1}this.resolveAxis(e,"x",this.velocity.x*t),this.resolveAxis(e,"z",this.velocity.z*t),this.resolveAxis(e,"y",this.velocity.y*t),this.position.y<1&&(this.position.y=1,this.velocity.y=0,this.grounded=!0);const s=xt-.1;this.position.y+_r>s&&(this.position.y=s-_r,this.velocity.y=0),this.syncCamera()}syncCamera(){this.camera.position.set(this.position.x,this.position.y+ug,this.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}}const Ha=[_.FLOWER_RED,_.FLOWER_YELLOW,_.VINE,_.CACTUS,_.MOSS];class I_{constructor(e,t=1){this.ui=e,this.seed=t|0,this.coins=0,this.activeQuest=null,this.questCounter=0,this.ui.updateCoins(this.coins)}hasOpenDialogue(){return this.ui.isDialogueOpen()}closeDialogue(){this.ui.closeDialogue()}randomFor(e,t){const n=Math.sin((e+1)*12.9898+(this.seed+t)*78.233)*43758.5453;return n-Math.floor(n)}createQuestFor(e){const t=this.randomFor(e.id,this.questCounter+17),n=Ha[Math.floor(t*Ha.length)%Ha.length],s=4+Math.floor(this.randomFor(e.id,this.questCounter+99)*5)%5,r=8+s*3;return this.questCounter+=1,{id:this.questCounter,giverId:e.id,giverName:e.name,target:n,amount:s,reward:r,status:"active"}}getQuestProgress(e){return this.ui.getItemCount(e.target)}onTalkToQuestGiver(e){const t=e.name;if(!this.activeQuest){const a=this.createQuestFor(e),o=Yt[a.target].name;this.ui.openDialogue(t,`Traveler, I need ${a.amount} ${o} for my camp. Bring them to me and I will pay ${a.reward} coins.`,[{label:"Accept quest",onSelect:()=>{this.activeQuest=a,this.ui.openDialogue(t,`Quest accepted:
Collect ${a.amount} ${o}.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Maybe later",onSelect:()=>this.ui.closeDialogue()}]);return}if(this.activeQuest.giverId!==e.id){this.ui.openDialogue(t,`I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}const n=this.activeQuest,s=Yt[n.target].name,r=this.getQuestProgress(n);if(r>=n.amount){this.ui.openDialogue(t,`You brought the ${s}! Hand over ${n.amount} and collect ${n.reward} coins?`,[{label:"Turn in quest",onSelect:()=>{if(!this.ui.consumeItem(n.target,n.amount)){this.ui.openDialogue(t,"Looks like you no longer have the items.",[{label:"Close",onSelect:()=>this.ui.closeDialogue()}]);return}this.coins+=n.reward,this.ui.updateCoins(this.coins),this.activeQuest=null,this.ui.openDialogue(t,`Excellent work. Here are ${n.reward} coins.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}},{label:"Not now",onSelect:()=>this.ui.closeDialogue()}]);return}this.ui.openDialogue(t,`Progress: ${r}/${n.amount} ${s}. Keep searching.`,[{label:"Close",onSelect:()=>this.ui.closeDialogue()}])}getActiveQuestText(){if(!this.activeQuest)return"";const e=this.activeQuest,t=this.getQuestProgress(e);return`Quest: ${e.giverName} wants ${e.amount} ${Yt[e.target].name} (${Math.min(t,e.amount)}/${e.amount})`}cancelQuestForGiver(e){!this.activeQuest||this.activeQuest.giverId!==e||(this.activeQuest=null,this.ui.isDialogueOpen()&&this.ui.closeDialogue())}}function P_(i,e,t,n){const s=t.x>0?1:-1,r=t.y>0?1:-1,a=t.z>0?1:-1;let o=Math.floor(e.x),l=Math.floor(e.y),c=Math.floor(e.z);const u=t.x===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),h=t.y===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),f=t.z===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z),p=o+(t.x>0?1:0),g=l+(t.y>0?1:0),x=c+(t.z>0?1:0);let m=t.x===0?Number.POSITIVE_INFINITY:Math.abs((p-e.x)/t.x),d=t.y===0?Number.POSITIVE_INFINITY:Math.abs((g-e.y)/t.y),A=t.z===0?Number.POSITIVE_INFINITY:Math.abs((x-e.z)/t.z);const b=new T(o,l,c);for(;;){const E=i.getBlock(o,l,c);if(E!==0)return{x:o,y:l,z:c,id:E,previous:b.clone()};if(m<d)if(m<A){if(m>n)break;b.set(o,l,c),o+=s,m+=u}else{if(A>n)break;b.set(o,l,c),c+=a,A+=f}else if(d<A){if(d>n)break;b.set(o,l,c),l+=r,d+=h}else{if(A>n)break;b.set(o,l,c),c+=a,A+=f}}return null}const Se=16,Ar=6,Dc=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","water","bedrock","snow","cactus_side","cactus_top","flower_red","flower_yellow","vine","gravel","moss","castle_brick","apple","plank","bramble","skeleton_spawner"];function wt(i,e,t=12,n=1){const[s,r,a]=e,o=i.createImageData(Se,Se);for(let l=0;l<o.data.length;l+=4){const c=Math.random()*t-t*.5|0;o.data[l]=Math.max(0,Math.min(255,s+c)),o.data[l+1]=Math.max(0,Math.min(255,r+c)),o.data[l+2]=Math.max(0,Math.min(255,a+c)),o.data[l+3]=Math.floor(255*n)}i.putImageData(o,0,0)}function D_(i){const e=document.createElement("canvas");e.width=Se,e.height=Se;const t=e.getContext("2d",{willReadFrequently:!0});if(i==="grass_top")wt(t,[64,164,68],26);else if(i==="grass_side"){wt(t,[126,94,62],18),t.fillStyle="rgba(72, 170, 80, 0.9)",t.fillRect(0,0,Se,4),t.fillStyle="rgba(60, 120, 42, 0.35)";for(let n=0;n<Se;n+=2)t.fillRect(n,3+n*7%3,1,1)}else if(i==="dirt")wt(t,[121,86,55],20);else if(i==="stone")wt(t,[126,126,130],20);else if(i==="sand")wt(t,[214,198,128],20);else if(i==="log_side"){wt(t,[121,90,58],18),t.fillStyle="rgba(90, 58, 30, 0.28)";for(let n=0;n<Se;n+=4)t.fillRect(n,0,2,Se)}else if(i==="log_top")wt(t,[159,122,82],10),t.strokeStyle="rgba(108, 74, 43, 0.75)",t.lineWidth=1,t.strokeRect(2.5,2.5,Se-5,Se-5),t.strokeRect(5.5,5.5,Se-11,Se-11);else if(i==="leaves")wt(t,[63,145,64],36,.8);else if(i==="water")wt(t,[62,119,212],16,.72),t.fillStyle="rgba(160, 210, 255, 0.2)",t.fillRect(0,2,Se,2),t.fillRect(0,9,Se,1);else if(i==="bedrock"){wt(t,[52,52,52],28),t.fillStyle="rgba(96,96,96,0.32)";for(let n=0;n<24;n++)t.fillRect(Math.random()*Se|0,Math.random()*Se|0,1,1)}else if(i==="snow"){wt(t,[230,238,244],9),t.fillStyle="rgba(188, 206, 220, 0.4)";for(let n=0;n<Se;n+=3)t.fillRect(n,n*5%Se,1,1)}else if(i==="cactus_side"){wt(t,[54,146,66],15),t.fillStyle="rgba(36,98,44,0.42)";for(let n=1;n<Se;n+=3)t.fillRect(n,0,1,Se)}else if(i==="cactus_top")wt(t,[70,152,80],14),t.fillStyle="rgba(35,93,42,0.6)",t.fillRect(3,3,Se-6,Se-6);else if(i==="flower_red")t.clearRect(0,0,Se,Se),t.fillStyle="rgba(56,144,62,0.85)",t.fillRect(7,5,2,11),t.fillStyle="rgba(196,34,44,0.92)",t.fillRect(5,2,6,4);else if(i==="flower_yellow")t.clearRect(0,0,Se,Se),t.fillStyle="rgba(56,146,64,0.85)",t.fillRect(7,5,2,11),t.fillStyle="rgba(242,199,44,0.92)",t.fillRect(5,2,6,4);else if(i==="vine"){t.clearRect(0,0,Se,Se),t.fillStyle="rgba(48,128,52,0.72)";for(let n=0;n<6;n++){const s=2+n*5%12;t.fillRect(s,1+n*2,2,3)}}else if(i==="gravel"){wt(t,[132,128,121],22),t.fillStyle="rgba(88,84,81,0.25)";for(let n=0;n<16;n++)t.fillRect(Math.random()*Se|0,Math.random()*Se|0,1,1)}else if(i==="moss"){wt(t,[80,126,64],18),t.fillStyle="rgba(36,74,30,0.18)";for(let n=0;n<16;n++)t.fillRect(Math.random()*Se|0,Math.random()*Se|0,2,1)}else if(i==="castle_brick"){wt(t,[118,117,124],12),t.fillStyle="rgba(68,68,74,0.48)";for(let n=0;n<Se;n+=4)t.fillRect(0,n,Se,1);for(let n=0;n<Se;n+=8)t.fillRect(n,0,1,4),t.fillRect(n+4,4,1,4),t.fillRect(n,8,1,4),t.fillRect(n+4,12,1,4)}else if(i==="apple")t.clearRect(0,0,Se,Se),t.fillStyle="rgba(196,36,36,0.92)",t.fillRect(4,4,8,8),t.fillStyle="rgba(232,120,120,0.55)",t.fillRect(5,5,3,3),t.fillStyle="rgba(76,138,58,0.8)",t.fillRect(7,2,2,2),t.fillStyle="rgba(112,84,38,0.8)",t.fillRect(8,1,1,2);else if(i==="plank"){wt(t,[170,128,84],14),t.fillStyle="rgba(105,72,40,0.38)";for(let n=0;n<Se;n+=4)t.fillRect(0,n,Se,1);for(let n=2;n<Se;n+=6)t.fillRect(n,1,1,Se-2)}else if(i==="bramble"){t.clearRect(0,0,Se,Se),t.fillStyle="rgba(61,106,45,0.85)";for(let n=0;n<5;n++)t.fillRect(2+n*3,5+n%2,2,9);t.fillStyle="rgba(112,68,42,0.8)",t.fillRect(4,10,9,2),t.fillRect(5,6,7,2),t.fillStyle="rgba(220,220,210,0.95)";for(let n=0;n<6;n++)t.fillRect(2+n*11%11,4+n*7%8,1,1)}else if(i==="skeleton_spawner"){wt(t,[70,74,82],10),t.fillStyle="rgba(36,38,44,0.92)",t.fillRect(2,2,Se-4,Se-4),t.fillStyle="rgba(136,142,150,0.9)";for(let n=3;n<=Se-4;n+=4)t.fillRect(n,1,1,Se-2);for(let n=3;n<=Se-4;n+=4)t.fillRect(1,n,Se-2,1);t.fillStyle="rgba(224,224,214,0.95)",t.fillRect(5,5,6,5),t.fillRect(4,10,8,3),t.fillStyle="rgba(24,24,26,0.95)",t.fillRect(6,7,1,1),t.fillRect(9,7,1,1),t.fillRect(7,10,2,1)}return e}function L_(){const i=Math.ceil(Dc.length/Ar),e=document.createElement("canvas");e.width=Ar*Se,e.height=i*Se;const t=e.getContext("2d"),n={};Dc.forEach((c,u)=>{const h=u%Ar,f=Math.floor(u/Ar);n[c]={tx:h,ty:f},t.drawImage(D_(c),h*Se,f*Se)});const s=new Qr(e);s.magFilter=tn,s.minFilter=Eh,s.generateMipmaps=!0,s.colorSpace=zt;const r=1/e.width,a=1/e.height;function o(c){const u=n[c],h=.02,f=(u.tx*Se+h)*r,p=1-((u.ty+1)*Se-h)*a,g=((u.tx+1)*Se-h)*r,x=1-(u.ty*Se+h)*a;return[f,p,g,x]}function l(c,u){const f=Yt[c].textures,p=f.all?f.all:u===Qn.PY?f.top:u===Qn.NY?f.bottom:f.side;return o(p)}return{texture:s,getFaceUVs:l}}const Ji=56,N_=.45,Tr=9;class U_{constructor(e,t=1337){this.scene=e,this.seed=t|0,this.windDir=new He(.93,.37).normalize(),this.windSpeed=1.9,this.clouds=new Map,this.syncTimer=0,this.daylight=1,this.material=new oi({color:15856887,transparent:!1,depthWrite:!0})}cloudinessAt(e,t){return Rt(e*.08,t*.08,this.seed+88421,3,2,.5)}shouldSpawnCloud(e,t){const n=this.cloudinessAt(e,t);if(n<.44)return!1;const s=xe(e,t,this.seed+88439),r=.18+(n-.44)*1.15;return s<Math.max(0,Math.min(.86,r))}createCloud(e,t){const n=`${e},${t}`;if(this.clouds.has(n)||!this.shouldSpawnCloud(e,t))return;const s=new en,r=3+(xe(e,t,this.seed+88471)*4|0),a=96+Math.floor(xe(e,t,this.seed+88483)*18),o=e*Ji+(xe(e,t,this.seed+88491)-.5)*Ji*.7,l=t*Ji+(xe(e,t,this.seed+88501)-.5)*Ji*.7;for(let c=0;c<r;c++){const u=8+xe(e*31+c,t,this.seed+88511)*22,h=3+xe(e,t*29+c,this.seed+88523)*5,f=8+xe(e*17+c,t*19+c,this.seed+88537)*22,p=(xe(e+c*7,t-c*3,this.seed+88541)-.5)*18,g=(xe(e-c*5,t+c*11,this.seed+88549)-.5)*4,x=(xe(e+c*13,t+c*2,this.seed+88559)-.5)*18,m=new vt(new En(u,h,f),this.material);m.position.set(p,g,x),m.castShadow=!1,m.receiveShadow=!1,s.add(m)}s.userData.anchorX=o,s.userData.anchorY=a,s.userData.anchorZ=l,s.userData.cellX=e,s.userData.cellZ=t,this.clouds.set(n,s),this.scene.add(s)}setDaylight(e){this.daylight=Math.max(0,Math.min(1,e));const t=.3+this.daylight*.7;this.material.color.setRGB(.92*t,.95*t,1*t)}updatePositions(e){const t=this.windDir.x*this.windSpeed*e,n=this.windDir.y*this.windSpeed*e;for(const s of this.clouds.values())s.position.set(s.userData.anchorX+t,s.userData.anchorY,s.userData.anchorZ+n)}syncCloudSet(e,t){const n=this.windDir.x*this.windSpeed*t,s=this.windDir.y*this.windSpeed*t,r=e.x-n,a=e.z-s,o=Ct(Math.floor(r),Ji),l=Ct(Math.floor(a),Ji),c=new Set;for(let u=-Tr;u<=Tr;u++)for(let h=-Tr;h<=Tr;h++){const f=o+h,p=l+u,g=`${f},${p}`;c.add(g),this.createCloud(f,p)}for(const[u,h]of this.clouds.entries())c.has(u)||(this.scene.remove(h),h.traverse(f=>{f.isMesh&&f.geometry?.dispose?.()}),this.clouds.delete(u))}update(e,t,n,s){this.setDaylight(s),this.updatePositions(n),this.syncTimer-=t,this.syncTimer<=0&&(this.syncCloudSet(e,n),this.syncTimer=N_)}}const Jn={HELLO:"hello",WELCOME:"welcome",PLAYER_JOIN:"player_join",PLAYER_LEAVE:"player_leave",PLAYERS_SNAPSHOT:"players_snapshot",PLAYER_STATE:"player_state",BLOCK_SET:"block_set"};function O_(){return`Player${Math.floor(Math.random()*9e3)+1e3}`}const F_=1/15;function B_(i="/ws/main"){return"wss://craftmine.hjdaleng.workers.dev/ws/main"}class k_{constructor(e={}){this.playerName=e.playerName??"Player",this.onWelcome=e.onWelcome??(()=>{}),this.onPlayerJoin=e.onPlayerJoin??(()=>{}),this.onPlayerLeave=e.onPlayerLeave??(()=>{}),this.onPlayersSnapshot=e.onPlayersSnapshot??(()=>{}),this.onBlockSet=e.onBlockSet??(()=>{}),this.onStatus=e.onStatus??(()=>{}),this.connected=!1,this.playerId=null,this.ws=null,this.outState=null,this.sendAccum=0,this.reconnectTimer=0,this.reconnectDelay=1.5,this.explicitlyClosed=!1}connect(){this.explicitlyClosed=!1;const e=new URLSearchParams({name:this.playerName}),t=`${B_()}?${e.toString()}`;this.ws=new WebSocket(t),this.ws.addEventListener("open",()=>{this.connected=!0,this.onStatus("connected"),this.reconnectDelay=1.5,this.send({type:Jn.HELLO,name:this.playerName})}),this.ws.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}this.handleMessage(s)}),this.ws.addEventListener("close",()=>{this.connected=!1,this.playerId=null,this.ws=null,this.onStatus("disconnected"),this.explicitlyClosed||(this.reconnectTimer=this.reconnectDelay,this.reconnectDelay=Math.min(8,this.reconnectDelay*1.4))})}close(){this.explicitlyClosed=!0,this.ws&&this.ws.close(),this.ws=null,this.connected=!1}tick(e){!this.connected&&this.reconnectTimer>0&&(this.reconnectTimer-=e,this.reconnectTimer<=0&&this.connect()),!(!this.connected||!this.outState)&&(this.sendAccum+=e,!(this.sendAccum<F_)&&(this.sendAccum=0,this.send({type:Jn.PLAYER_STATE,...this.outState})))}setLocalState(e){this.outState=e}sendBlockSet(e,t,n,s){this.send({type:Jn.BLOCK_SET,x:e,y:t,z:n,id:s})}send(e){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify(e))}handleMessage(e){switch(e.type){case Jn.WELCOME:this.playerId=e.id,this.onWelcome(e);break;case Jn.PLAYER_JOIN:this.onPlayerJoin(e.player);break;case Jn.PLAYER_LEAVE:this.onPlayerLeave(e.id);break;case Jn.PLAYERS_SNAPSHOT:this.onPlayersSnapshot(e);break;case Jn.BLOCK_SET:this.onBlockSet(e);break}}}function z_(){const i=new en,n=Bo(i,4157341,14135442,!1);return{root:i,rig:n}}class H_{constructor(e,t=()=>null){this.scene=e,this.localPlayerIdProvider=t,this.players=new Map}ensurePlayer(e,t=null){if(!e||e===this.localPlayerIdProvider())return null;if(this.players.has(e))return this.players.get(e);const{root:n,rig:s}=z_();n.position.set(t?.x??0,t?.y??0,t?.z??0),this.scene.add(n);const r={id:e,mesh:n,rig:s,name:t?.name??"Player",targetX:t?.x??0,targetY:t?.y??0,targetZ:t?.z??0,yaw:t?.yaw??0,heldItemId:t?.heldItemId??0,animPhase:Math.random()*Math.PI*2,speed2D:0};return r.heldAnchor=new en,r.heldAnchor.position.set(.05,-.3,.02),r.heldAnchor.rotation.set(.08,.04,-.08),(s.arms[1]??r.mesh).add(r.heldAnchor),Fo(r.heldAnchor,r.heldItemId,1),r.nameSprite=this.createNameSprite(r.name),r.nameSprite.position.set(0,2.05,0),r.mesh.add(r.nameSprite),this.players.set(e,r),r}createNameSprite(e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(10,10,10,0.7)",n.fillRect(8,14,t.width-16,36),n.strokeStyle="rgba(255,255,255,0.45)",n.strokeRect(8.5,14.5,t.width-17,35),n.fillStyle="#ffffff",n.font="bold 26px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,32);const s=new Qr(t);s.minFilter=Qt;const r=new el({map:s,transparent:!0,depthWrite:!1,depthTest:!1}),a=new au(r);return a.scale.set(1.5,.38,1),a.userData.labelCanvas=t,a}updateNameSprite(e,t){if(!e.nameSprite||e.name===t)return;e.name=t;const n=e.nameSprite.userData.labelCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(10,10,10,0.7)",s.fillRect(8,14,n.width-16,36),s.strokeStyle="rgba(255,255,255,0.45)",s.strokeRect(8.5,14.5,n.width-17,35),s.fillStyle="#ffffff",s.font="bold 26px Trebuchet MS",s.textAlign="center",s.textBaseline="middle",s.fillText(t,n.width/2,32),e.nameSprite.material.map.needsUpdate=!0}removePlayer(e){const t=this.players.get(e);t&&(this.scene.remove(t.mesh),t.mesh.traverse(n=>{n.isMesh?(n.geometry?.dispose?.(),n.material?.dispose?.()):n.isSprite&&(n.material?.map?.dispose?.(),n.material?.dispose?.())}),this.players.delete(e))}applyWelcome(e){for(const t of e)this.ensurePlayer(t.id,t)}applySnapshot(e){const t=new Set;for(const n of e){if(!n?.id||n.id===this.localPlayerIdProvider())continue;t.add(n.id);const s=this.ensurePlayer(n.id,n);s&&(this.updateNameSprite(s,n.name??s.name),s.targetX=n.x,s.targetY=n.y,s.targetZ=n.z,s.yaw=n.yaw??s.yaw,s.heldItemId=n.heldItemId??0,Fo(s.heldAnchor,s.heldItemId,1))}for(const n of this.players.keys())t.has(n)||this.removePlayer(n)}update(e){for(const t of this.players.values()){const n=t.mesh.position.x,s=t.mesh.position.z;t.mesh.position.x+=(t.targetX-t.mesh.position.x)*Math.min(1,e*10),t.mesh.position.y+=(t.targetY-t.mesh.position.y)*Math.min(1,e*10),t.mesh.position.z+=(t.targetZ-t.mesh.position.z)*Math.min(1,e*10),t.mesh.rotation.y=-t.yaw;const r=(t.mesh.position.x-n)/Math.max(e,1e-4),a=(t.mesh.position.z-s)/Math.max(e,1e-4);t.speed2D=Math.hypot(r,a),this.animateRig(t,e)}}animateRig(e,t){const n=e.rig;if(!n)return;const s=e.speed2D>.05,r=s?Math.min(.55,e.speed2D*.1):.03;e.animPhase+=t*(s?8.8:2.2);for(let a=0;a<n.legs.length;a++){const o=e.animPhase+(a%2===0?0:Math.PI);n.legs[a].rotation.x=Math.sin(o)*r}for(let a=0;a<n.arms.length;a++){const o=e.animPhase+(a%2===0?Math.PI:0);n.arms[a].rotation.x=Math.sin(o)*(r*.9)}n.head&&(n.head.rotation.x=Math.sin(e.animPhase*.35)*.03)}}const G_="/assets/bgm_default-BJd3PF7N.mp3",V_={[_.AIR]:[12,20,32],[_.GRASS]:[73,153,67],[_.DIRT]:[120,84,54],[_.STONE]:[125,127,134],[_.SAND]:[214,198,128],[_.LOG]:[111,78,50],[_.LEAVES]:[55,129,61],[_.WATER]:[62,116,201],[_.BEDROCK]:[52,52,52],[_.SNOW]:[229,237,244],[_.CACTUS]:[56,143,65],[_.FLOWER_RED]:[202,45,56],[_.FLOWER_YELLOW]:[238,200,52],[_.VINE]:[46,116,45],[_.GRAVEL]:[131,127,120],[_.MOSS]:[79,126,64],[_.BRAMBLE]:[92,116,54],[_.CASTLE_BRICK]:[120,120,130],[_.APPLE]:[193,36,36]};function W_(i){return V_[i]??[110,110,116]}function X_(i,e,t){const n=Math.floor(e),s=Math.floor(t),r=i.getSurfaceYAt(n,s);let a=Math.min(xt-1,r+16),o=_.AIR;for(;a>=1;a--)if(o=i.getBlock(n,a,s),o!==_.AIR)return o;return _.AIR}class Y_{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.offscreen=document.createElement("canvas"),this.offscreenCtx=this.offscreen.getContext("2d"),this.blockWidth=96,this.blockHeight=96,this.lastRenderTime=0,this.renderIntervalSec=.2}setBlockSpan(e,t){this.blockWidth=Math.max(24,Math.min(192,e|0)),this.blockHeight=Math.max(24,Math.min(192,t|0))}render(e,t,n){if(n-this.lastRenderTime<this.renderIntervalSec)return;this.lastRenderTime=n;const s=this.blockWidth,r=this.blockHeight;this.offscreen.width=s,this.offscreen.height=r;const a=this.offscreenCtx.createImageData(s,r),o=Math.floor(t.x),l=Math.floor(t.z),c=Math.floor(s*.5),u=Math.floor(r*.5);for(let p=0;p<r;p++)for(let g=0;g<s;g++){const x=o+(g-c),m=l+(p-u),d=X_(e,x,m),A=W_(d),b=(p*s+g)*4;a.data[b]=A[0],a.data[b+1]=A[1],a.data[b+2]=A[2],a.data[b+3]=255}this.offscreenCtx.putImageData(a,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.offscreen,0,0,this.canvas.width,this.canvas.height);const h=Math.floor(this.canvas.width*.5),f=Math.floor(this.canvas.height*.5);this.ctx.strokeStyle="rgba(0,0,0,0.7)",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255, 220, 120, 0.95)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h-5,f),this.ctx.lineTo(h+5,f),this.ctx.moveTo(h,f-5),this.ctx.lineTo(h,f+5),this.ctx.stroke()}}const Vt=24;function Ot(i,e,t,n,s=12,r=255){const a=i.createImageData(Vt,Vt);for(let o=0;o<a.data.length;o+=4){const l=Math.random()*s-s*.5|0;a.data[o]=Math.max(0,Math.min(255,e+l)),a.data[o+1]=Math.max(0,Math.min(255,t+l)),a.data[o+2]=Math.max(0,Math.min(255,n+l)),a.data[o+3]=r}i.putImageData(a,0,0)}function q_(i){const e=document.createElement("canvas");e.width=Vt,e.height=Vt;const t=e.getContext("2d");switch(i){case _.GRASS:Ot(t,118,92,60,14),t.fillStyle="rgba(67,160,72,0.95)",t.fillRect(0,0,Vt,7);break;case _.DIRT:Ot(t,122,84,55,16);break;case _.STONE:Ot(t,122,124,132,16);break;case _.SAND:Ot(t,216,199,128,14);break;case _.LOG:Ot(t,120,90,58,14),t.fillStyle="rgba(90,58,30,0.3)";for(let n=2;n<Vt;n+=5)t.fillRect(n,0,2,Vt);break;case _.LEAVES:Ot(t,68,150,70,28,230);break;case _.WATER:Ot(t,63,120,210,14,210),t.fillStyle="rgba(175,218,255,0.3)",t.fillRect(0,5,Vt,3);break;case _.BEDROCK:Ot(t,58,58,58,24);break;case _.SNOW:Ot(t,233,239,245,8);break;case _.CACTUS:Ot(t,57,145,67,12),t.fillStyle="rgba(33,95,40,0.35)";for(let n=1;n<Vt;n+=4)t.fillRect(n,0,1,Vt);break;case _.FLOWER_RED:t.fillStyle="rgba(57,146,65,0.95)",t.fillRect(11,7,2,15),t.fillStyle="rgba(196,36,46,0.95)",t.fillRect(8,3,8,6);break;case _.FLOWER_YELLOW:t.fillStyle="rgba(57,146,65,0.95)",t.fillRect(11,7,2,15),t.fillStyle="rgba(240,197,43,0.95)",t.fillRect(8,3,8,6);break;case _.VINE:t.fillStyle="rgba(49,130,52,0.8)";for(let n=0;n<7;n++){const s=3+n*3%16;t.fillRect(s,2+n*2,2,3)}break;case _.GRAVEL:Ot(t,132,128,121,20);break;case _.MOSS:Ot(t,82,126,66,16);break;case _.CASTLE_BRICK:Ot(t,118,117,124,10),t.fillStyle="rgba(66,66,74,0.45)";for(let n=0;n<Vt;n+=6)t.fillRect(0,n,Vt,1);break;case _.APPLE:t.fillStyle="rgba(197,36,36,0.95)",t.fillRect(6,6,12,12),t.fillStyle="rgba(230,120,120,0.55)",t.fillRect(8,8,4,4),t.fillStyle="rgba(80,144,61,0.9)",t.fillRect(11,3,3,3);break;case _.WEAPON_BANDIT_BLADE:t.fillStyle="rgba(186,188,196,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,36,0.95)",t.fillRect(9,17,6,4);break;case _.WEAPON_RAIDER_SABER:t.fillStyle="rgba(202,204,214,0.95)",t.fillRect(7,4,10,3),t.fillRect(14,6,3,10),t.fillStyle="rgba(126,86,40,0.95)",t.fillRect(6,16,8,4);break;case _.WEAPON_SCORP_BOW:t.strokeStyle="rgba(158,106,52,0.95)",t.lineWidth=3,t.beginPath(),t.arc(12,12,7,Math.PI*.2,Math.PI*1.8),t.stroke(),t.strokeStyle="rgba(220,220,220,0.9)",t.lineWidth=1,t.beginPath(),t.moveTo(17,5),t.lineTo(17,19),t.stroke();break;case _.WEAPON_JAGUAR_CLAWS:t.fillStyle="rgba(220,220,228,0.95)",t.fillRect(6,4,2,14),t.fillRect(11,4,2,14),t.fillRect(16,4,2,14);break;case _.WEAPON_WRAITH_HAMMER:t.fillStyle="rgba(132,138,150,0.95)",t.fillRect(7,5,10,6),t.fillStyle="rgba(122,86,50,0.95)",t.fillRect(11,11,2,11);break;case _.WEAPON_YETI_AXE:t.fillStyle="rgba(176,212,236,0.95)",t.fillRect(6,6,10,7),t.fillStyle="rgba(116,82,48,0.95)",t.fillRect(13,11,2,10);break;case _.PLANK:Ot(t,171,128,84,12),t.fillStyle="rgba(102,72,42,0.35)";for(let n=0;n<Vt;n+=6)t.fillRect(0,n,Vt,1);break;case _.STICK:t.fillStyle="rgba(134,94,58,0.95)",t.fillRect(11,3,2,18);break;case _.WOOD_SWORD:t.fillStyle="rgba(177,132,82,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,42,0.95)",t.fillRect(9,17,6,4);break;case _.WOOD_AXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(184,142,91,0.95)",t.fillRect(7,4,8,6);break;case _.WOOD_PICKAXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillRect(6,5,12,3);break;case _.WOOD_SPADE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,8,2,13),t.fillStyle="rgba(185,143,95,0.95)",t.fillRect(8,3,8,7);break;case _.STONE_SWORD:t.fillStyle="rgba(186,190,199,0.95)",t.fillRect(10,3,4,14),t.fillStyle="rgba(110,74,42,0.95)",t.fillRect(9,17,6,4);break;case _.STONE_AXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(7,4,8,6);break;case _.STONE_PICKAXE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,6,2,15),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(6,5,12,3);break;case _.STONE_SPADE:t.fillStyle="rgba(124,86,50,0.95)",t.fillRect(11,8,2,13),t.fillStyle="rgba(168,173,182,0.95)",t.fillRect(8,3,8,7);break;case _.BRAMBLE:t.fillStyle="rgba(80,120,56,0.95)";for(let n=0;n<4;n++)t.fillRect(5+n*4,6-n%2,2,13);t.fillStyle="rgba(110,74,44,0.9)",t.fillRect(6,11,12,2);break;case _.SKELETON_SPAWNER:Ot(t,72,76,82,8),t.fillStyle="rgba(38,40,46,0.95)",t.fillRect(3,3,18,18),t.fillStyle="rgba(144,148,156,0.92)";for(let n=5;n<=18;n+=5)t.fillRect(n,2,1,20);for(let n=5;n<=18;n+=5)t.fillRect(2,n,20,1);t.fillStyle="rgba(226,226,216,0.95)",t.fillRect(8,8,8,5),t.fillRect(7,13,10,4),t.fillStyle="rgba(24,24,26,0.95)",t.fillRect(10,10,1,1),t.fillRect(13,10,1,1),t.fillRect(11,14,2,1);break;case _.BOW:t.strokeStyle="rgba(146,98,54,0.95)",t.lineWidth=3,t.beginPath(),t.arc(10,12,7,Math.PI*.22,Math.PI*1.78),t.stroke(),t.strokeStyle="rgba(224,224,224,0.95)",t.lineWidth=1,t.beginPath(),t.moveTo(17,5),t.lineTo(17,19),t.stroke();break;case _.ARROW:t.fillStyle="rgba(120,82,48,0.95)",t.fillRect(11,4,2,15),t.fillStyle="rgba(204,206,214,0.95)",t.fillRect(10,2,4,4),t.fillStyle="rgba(214,54,54,0.95)",t.fillRect(9,18,6,3);break;default:Ot(t,90,90,90,10);break}return e.toDataURL()}function K_(){const i=new Map;return Object.keys(Yt).forEach(e=>{const t=Number(e);t!==_.AIR&&i.set(t,q_(t))}),i}const Cu=[{id:"plank",outputId:_.PLANK,outputCount:5,ingredients:[{id:_.LOG,count:1}]},{id:"stick",outputId:_.STICK,outputCount:4,ingredients:[{id:_.PLANK,count:1}]},{id:"wood_sword",outputId:_.WOOD_SWORD,outputCount:1,ingredients:[{id:_.PLANK,count:2},{id:_.STICK,count:1}]},{id:"wood_axe",outputId:_.WOOD_AXE,outputCount:1,ingredients:[{id:_.PLANK,count:3},{id:_.STICK,count:2}]},{id:"wood_pickaxe",outputId:_.WOOD_PICKAXE,outputCount:1,ingredients:[{id:_.PLANK,count:3},{id:_.STICK,count:2}]},{id:"wood_spade",outputId:_.WOOD_SPADE,outputCount:1,ingredients:[{id:_.PLANK,count:1},{id:_.STICK,count:2}]},{id:"stone_sword",outputId:_.STONE_SWORD,outputCount:1,ingredients:[{id:_.STONE,count:2},{id:_.STICK,count:1}]},{id:"stone_axe",outputId:_.STONE_AXE,outputCount:1,ingredients:[{id:_.STONE,count:3},{id:_.STICK,count:2}]},{id:"stone_pickaxe",outputId:_.STONE_PICKAXE,outputCount:1,ingredients:[{id:_.STONE,count:3},{id:_.STICK,count:2}]},{id:"stone_spade",outputId:_.STONE_SPADE,outputCount:1,ingredients:[{id:_.STONE,count:1},{id:_.STICK,count:2}]}],$_=new Map(Cu.map(i=>[i.id,i]));function Lc(i){return`${Yt[i.outputId]?.name??i.id} x${i.outputCount}`}function Z_(i){return $_.get(i)??null}function Iu(i,e){return e?e.ingredients.every(t=>i.getItemCount(t.id)>=t.count):!1}function j_(i){return Cu.filter(e=>Iu(i,e))}function J_(i,e){const t=Z_(e);if(!t||!Iu(i,t))return!1;for(const n of t.ingredients)if(!i.consumeItem(n.id,n.count))return!1;return i.addItem(t.outputId,t.outputCount),!0}function Q_(i){switch(i){case _.WOOD_SWORD:case _.STONE_SWORD:return"sword";case _.WOOD_AXE:case _.STONE_AXE:return"axe";case _.WOOD_PICKAXE:case _.STONE_PICKAXE:return"pickaxe";case _.WOOD_SPADE:case _.STONE_SPADE:return"spade";default:return null}}function ex(i){switch(i){case _.WOOD_SWORD:case _.WOOD_AXE:case _.WOOD_PICKAXE:case _.WOOD_SPADE:return 1;case _.STONE_SWORD:case _.STONE_AXE:case _.STONE_PICKAXE:case _.STONE_SPADE:return 2;default:return 0}}function tx(i,e){const t=Q_(i),n=ex(i);if(!t||n===0)return 1;const s=n===1?2.35:3.85;return t==="axe"&&(e===_.LOG||e===_.PLANK||e===_.CACTUS)||t==="pickaxe"&&(e===_.STONE||e===_.GRAVEL||e===_.CASTLE_BRICK)||t==="spade"&&(e===_.DIRT||e===_.GRASS||e===_.SAND||e===_.SNOW||e===_.MOSS)?s:t==="sword"&&e===_.BRAMBLE?n===1?1.7:2.25:1}function Ga(i){return i&&i.id!==void 0?i:{id:_.AIR,count:0}}function Nc(i,e,t,n={}){const{hotbarIndexLabel:s=null}=n,r=!e||e.id===_.AIR||e.count<=0;i.icon.style.display=r?"none":"block",r||(i.icon.style.backgroundImage=`url(${t.get(e.id)})`),i.name.textContent=r?"Empty":Yt[e.id].name,i.count.textContent=r?"":`x${e.count}`,s!==null&&(i.index.textContent=String(s))}class nx{constructor(e){this.overlay=document.getElementById("overlay"),this.modeEl=document.getElementById("mode"),this.coordsEl=document.getElementById("coords"),this.fpsEl=document.getElementById("fps"),this.coinsEl=document.getElementById("coins"),this.hintEl=document.getElementById("hint"),this.healthWrapEl=document.getElementById("health-wrap"),this.healthFillEl=document.getElementById("health-bar-fill"),this.hotbarEl=document.getElementById("hotbar"),this.inventoryEl=document.getElementById("inventory"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.craftingEl=document.getElementById("crafting"),this.craftingListEl=document.getElementById("crafting-list"),this.craftingDetailTitleEl=document.getElementById("crafting-detail-title"),this.craftingDetailTextEl=document.getElementById("crafting-detail-text"),this.craftingConfirmEl=document.getElementById("crafting-confirm"),this.dialogueEl=document.getElementById("dialogue"),this.dialogueTitleEl=document.getElementById("dialogue-title"),this.dialogueTextEl=document.getElementById("dialogue-text"),this.dialogueOptionsEl=document.getElementById("dialogue-options"),this.debugPaneEl=document.getElementById("debug-pane"),this.debugWalkEl=document.getElementById("dbg-walk"),this.debugWalkValueEl=document.getElementById("dbg-walk-value"),this.debugFlyEl=document.getElementById("dbg-fly"),this.debugFlyValueEl=document.getElementById("dbg-fly-value"),this.debugMapWidthEl=document.getElementById("dbg-map-width"),this.debugMapWidthValueEl=document.getElementById("dbg-map-width-value"),this.debugMapHeightEl=document.getElementById("dbg-map-height"),this.debugMapHeightValueEl=document.getElementById("dbg-map-height-value"),this.debugBgmEl=document.getElementById("dbg-bgm"),this.debugBgmValueEl=document.getElementById("dbg-bgm-value"),this.debugHealthEl=document.getElementById("dbg-health"),this.debugAgroEl=document.getElementById("dbg-agro"),this.hotbarSize=8,this.inventory=e.map(Ga),this.hotbarIndex=0,this.coins=0,this.icons=K_(),this.hotbarEls=[],this.inventoryEls=[],this.craftingSelectHandler=null,this.craftingConfirmHandler=null,this.buildHotbar(),this.buildInventory(),this.setHotbarSelection(0),this.updateCoins(0),this.setHint(""),this.updateHealth(100,100,!0)}buildHotbar(){this.hotbarEl.innerHTML="",this.hotbarEls=[];for(let e=0;e<this.hotbarSize;e++){const t=document.createElement("div");t.className="hotbar-slot";const n=document.createElement("div");n.className="slot-index";const s=document.createElement("div");s.className="slot-icon";const r=document.createElement("div");r.className="slot-name";const a=document.createElement("div");a.className="slot-count",t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(a),this.hotbarEl.appendChild(t),this.hotbarEls.push({root:t,index:n,icon:s,name:r,count:a})}this.refreshHotbarLabels()}buildInventory(){this.inventoryGridEl.innerHTML="",this.inventoryEls=[];for(let e=0;e<this.inventory.length;e++){const t=document.createElement("button");t.type="button",t.className="inv-slot",t.dataset.index=String(e);const n=document.createElement("div");n.className="slot-icon";const s=document.createElement("div");s.className="slot-name";const r=document.createElement("div");r.className="slot-count",t.appendChild(n),t.appendChild(s),t.appendChild(r),t.addEventListener("click",()=>{const a=this.inventory[e];!a||a.id===_.AIR||a.count<=0||(this.inventory[this.hotbarIndex]={...a},this.refreshHotbarLabels())}),this.inventoryGridEl.appendChild(t),this.inventoryEls.push({root:t,icon:n,name:s,count:r})}this.refreshInventoryLabels()}setupDebugPane(e,t){this.debugWalkEl.value=String(e.walkSpeed),this.debugFlyEl.value=String(e.flySpeed),this.debugMapWidthEl.value=String(e.mapWidthBlocks),this.debugMapHeightEl.value=String(e.mapHeightBlocks),this.debugBgmEl.value=String(e.bgmVolume),this.debugHealthEl.checked=!!e.healthEnabled,this.debugAgroEl.checked=!!e.agroEnabled,this.updateDebugValues(e.walkSpeed,e.flySpeed,e.mapWidthBlocks,e.mapHeightBlocks,e.bgmVolume),this.debugWalkEl.addEventListener("input",()=>{const n=Number(this.debugWalkEl.value);this.updateDebugValues(n,Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({walkSpeed:n})}),this.debugFlyEl.addEventListener("input",()=>{const n=Math.min(300,Number(this.debugFlyEl.value));this.updateDebugValues(Number(this.debugWalkEl.value),n,Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({flySpeed:n})}),this.debugMapWidthEl.addEventListener("input",()=>{const n=Number(this.debugMapWidthEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),n,Number(this.debugMapHeightEl.value),Number(this.debugBgmEl.value)),t({mapWidthBlocks:n})}),this.debugMapHeightEl.addEventListener("input",()=>{const n=Number(this.debugMapHeightEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),n,Number(this.debugBgmEl.value)),t({mapHeightBlocks:n})}),this.debugBgmEl.addEventListener("input",()=>{const n=Number(this.debugBgmEl.value);this.updateDebugValues(Number(this.debugWalkEl.value),Number(this.debugFlyEl.value),Number(this.debugMapWidthEl.value),Number(this.debugMapHeightEl.value),n),t({bgmVolume:n})}),this.debugHealthEl.addEventListener("change",()=>t({healthEnabled:this.debugHealthEl.checked})),this.debugAgroEl.addEventListener("change",()=>t({agroEnabled:this.debugAgroEl.checked}))}updateDebugValues(e,t,n,s,r){this.debugWalkValueEl.textContent=`Current: ${e.toFixed(1)}`,this.debugFlyValueEl.textContent=`Current: ${t.toFixed(0)} (max 300)`,this.debugMapWidthValueEl.textContent=`Current: ${Math.round(n)} blocks`,this.debugMapHeightValueEl.textContent=`Current: ${Math.round(s)} blocks`,this.debugBgmValueEl.textContent=`Current: ${Math.round(r*100)}%`}isDebugOpen(){return this.debugPaneEl.classList.contains("visible")}setDebugVisible(e){this.debugPaneEl.classList.toggle("visible",e)}isInventoryOpen(){return this.inventoryEl.classList.contains("visible")}isCraftingOpen(){return this.craftingEl.classList.contains("visible")}setInventoryVisible(e){this.inventoryEl.classList.toggle("visible",e),this.refreshInventoryLabels()}setCraftingVisible(e){this.craftingEl.classList.toggle("visible",e)}renderCraftingCatalogue(e,t,n,s){this.craftingSelectHandler=n,this.craftingConfirmHandler=s,this.craftingListEl.innerHTML="";for(const a of e){const o=document.createElement("button");o.type="button",o.className="crafting-recipe",a.id===t&&o.classList.add("active");const l=document.createElement("div");l.className="crafting-recipe-name",l.textContent=Lc(a);const c=document.createElement("div");c.className="crafting-recipe-cost",c.textContent=a.ingredients.map(u=>`${Yt[u.id].name} x${u.count}`).join(" | "),o.appendChild(l),o.appendChild(c),o.addEventListener("click",()=>this.craftingSelectHandler?.(a.id)),this.craftingListEl.appendChild(o)}const r=e.find(a=>a.id===t)??null;if(!r){this.craftingDetailTitleEl.textContent=e.length>0?"Select a recipe":"No craftable recipes",this.craftingDetailTextEl.textContent=e.length>0?"Choose an item from the catalogue to inspect its resource cost.":"Gather logs, stone, and other materials to unlock crafting options.",this.craftingConfirmEl.disabled=!0,this.craftingConfirmEl.onclick=null;return}this.craftingDetailTitleEl.textContent=Lc(r),this.craftingDetailTextEl.textContent=r.ingredients.map(a=>`${Yt[a.id].name}: ${a.count}`).join(`
`),this.craftingConfirmEl.disabled=!1,this.craftingConfirmEl.onclick=()=>this.craftingConfirmHandler?.()}isDialogueOpen(){return this.dialogueEl.classList.contains("visible")}openDialogue(e,t,n){this.dialogueTitleEl.textContent=e,this.dialogueTextEl.textContent=t,this.dialogueOptionsEl.innerHTML="";for(const s of n){const r=document.createElement("button");r.type="button",r.className="dialogue-btn",r.textContent=s.label,r.addEventListener("click",()=>s.onSelect()),this.dialogueOptionsEl.appendChild(r)}this.dialogueEl.classList.add("visible")}closeDialogue(){this.dialogueEl.classList.remove("visible"),this.dialogueOptionsEl.innerHTML=""}setHint(e){this.hintEl.textContent=e}updateHealth(e,t,n){if(this.healthWrapEl.style.display=n?"block":"none",!n)return;const s=t>0?Math.max(0,Math.min(1,e/t)):0;this.healthFillEl.style.width=`${(s*100).toFixed(1)}%`}getSelectedBlock(){return this.inventory[this.hotbarIndex]?.id??_.DIRT}getSelectedItemId(){const e=this.inventory[this.hotbarIndex];return!e||e.count<=0?_.AIR:e.id??_.AIR}consumeSelectedBlock(){const e=this.inventory[this.hotbarIndex];return!e||e.id===_.AIR||e.count<=0?!1:(e.count-=1,e.count<=0&&(e.count=0,e.id=_.AIR),this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0)}addItem(e,t){if(e===_.AIR||t<=0)return;let n=t;for(const s of this.inventory)if(s.id===e&&s.count<999){const r=Math.min(999-s.count,n);if(s.count+=r,n-=r,n===0)break}if(n>0){for(const s of this.inventory)if(s.id===_.AIR||s.count<=0){s.id=e,s.count=n;break}}this.refreshHotbarLabels(),this.refreshInventoryLabels()}getItemCount(e){let t=0;for(const n of this.inventory)n.id===e&&(t+=n.count);return t}consumeItem(e,t){if(t<=0)return!0;if(this.getItemCount(e)<t)return!1;let n=t;for(const s of this.inventory){if(s.id!==e||n<=0)continue;const r=Math.min(s.count,n);s.count-=r,n-=r,s.count<=0&&(s.id=_.AIR,s.count=0)}return this.refreshHotbarLabels(),this.refreshInventoryLabels(),!0}updateCoins(e){this.coins=e,this.coinsEl.textContent=`Coins: ${e}`}setOverlayVisible(e){this.overlay.classList.toggle("visible",e)}updateMode(e){this.modeEl.textContent=`Mode: ${e?"Fly":"Walk"}`}updateCoords(e){this.coordsEl.textContent=`X: ${e.x.toFixed(1)} Y: ${e.y.toFixed(1)} Z: ${e.z.toFixed(1)}`}updateFPS(e){this.fpsEl.textContent=`FPS: ${e.toFixed(0)}`}setHotbarSelection(e){this.hotbarIndex=e,this.hotbarEls.forEach((t,n)=>t.root.classList.toggle("active",n===e)),this.inventoryEls.forEach((t,n)=>t.root.classList.toggle("active",n===e))}refreshHotbarLabels(){for(let e=0;e<this.hotbarEls.length;e++)Nc(this.hotbarEls[e],Ga(this.inventory[e]),this.icons,{hotbarIndexLabel:e+1})}refreshInventoryLabels(){for(let e=0;e<this.inventoryEls.length;e++)Nc(this.inventoryEls[e],Ga(this.inventory[e]),this.icons)}}function ix(i){const e=new ag({canvas:i,antialias:!1});return e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=zt,e.shadowMap.enabled=!0,e.shadowMap.type=kc,e}function sx(){const i=new cf;i.background=new We(9031679),i.fog=new Qo(9031679,te*4.2,te*7.5);const e=new Mf(16777215,.45);i.add(e);const t=new Sf(16777215,.8);t.position.set(120,200,50),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.bias=-4e-4,t.shadow.camera.near=1,t.shadow.camera.far=520,t.shadow.camera.left=-110,t.shadow.camera.right=110,t.shadow.camera.top=110,t.shadow.camera.bottom=-110,i.add(t.target),i.add(t);const n=new en,s=new vt(new Yr(2.6,24,16),new cs({color:16774054,fog:!1,toneMapped:!1,depthWrite:!1})),r=new vt(new Yr(4.8,24,16),new cs({color:16766571,transparent:!0,opacity:.42,fog:!1,toneMapped:!1,depthWrite:!1,side:cn}));return n.add(r),n.add(s),i.add(n),{scene:i,sunLight:t,ambientLight:e,sunVisual:n}}function rx(){return new ln(75,window.innerWidth/window.innerHeight,.1,600)}function ax(i){const e=new oi({map:i.texture,vertexColors:!0}),t=new oi({map:i.texture,vertexColors:!0,transparent:!0,depthWrite:!1,side:cn,alphaTest:.15});return{matOpaque:e,matTransparent:t}}function ox(i){const e=new pf(new mf(new En(1.01,1.01,1.01)),new ou({color:16777062}));return e.visible=!1,i.add(e),e}const lx=6,cx=.9,ux=12,hx=.2,fx=.42,dx=new Set([_.AIR,_.BEDROCK,_.APPLE,_.WEAPON_BANDIT_BLADE,_.WEAPON_RAIDER_SABER,_.WEAPON_SCORP_BOW,_.WEAPON_JAGUAR_CLAWS,_.WEAPON_WRAITH_HAMMER,_.WEAPON_YETI_AXE,_.STICK,_.WOOD_SWORD,_.WOOD_AXE,_.WOOD_PICKAXE,_.WOOD_SPADE,_.STONE_SWORD,_.STONE_AXE,_.STONE_PICKAXE,_.STONE_SPADE,_.BOW,_.ARROW]);function px(i){return i===_.BOW||i===_.WEAPON_SCORP_BOW}function Uc(i){switch(i){case _.WEAPON_BANDIT_BLADE:return 24;case _.WEAPON_RAIDER_SABER:return 27;case _.WEAPON_SCORP_BOW:return 22;case _.BOW:return 20;case _.WEAPON_JAGUAR_CLAWS:return 20;case _.WEAPON_WRAITH_HAMMER:return 32;case _.WEAPON_YETI_AXE:return 36;case _.WOOD_SWORD:return 18;case _.WOOD_AXE:return 16;case _.WOOD_PICKAXE:return 15;case _.WOOD_SPADE:return 13;case _.STONE_SWORD:return 22;case _.STONE_AXE:return 19;case _.STONE_PICKAXE:return 18;case _.STONE_SPADE:return 15;default:return ux}}function mx(i,e,t,n){const s=e,r=e+1,a=t,o=t+1,l=n,c=n+1,u=i.getAABB();return!(u.maxX>s&&u.minX<r&&u.maxY>a&&u.minY<o&&u.maxZ>l&&u.minZ<c)}const $r=8;function gx(){const i=[[32,0,32,64],[0,32,64,32],[8,8,24,30],[56,8,40,30],[8,56,24,34],[56,56,40,34],[16,0,30,18],[48,0,34,18],[0,16,18,30],[64,16,46,30],[0,48,18,34],[64,48,46,34],[16,64,30,46],[48,64,34,46],[24,24,8,40],[40,24,56,40],[24,40,8,24],[40,40,56,24]],e=[];for(let t=0;t<$r;t++){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d");s.clearRect(0,0,64,64);const r=Math.floor((t+1)/$r*i.length);s.strokeStyle=`rgba(30, 30, 30, ${(.22+t*.08).toFixed(2)})`,s.lineWidth=3;for(let o=0;o<r;o++){const l=i[o];s.beginPath(),s.moveTo(l[0],l[1]),s.lineTo(l[2],l[3]),s.stroke()}const a=new Qr(n);a.colorSpace=zt,a.minFilter=Qt,a.magFilter=tn,a.wrapS=Fn,a.wrapT=Fn,e.push(a)}return e}function _x(i,e){const t=new cs({map:e[0],transparent:!0,opacity:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n=new vt(new En(1.014,1.014,1.014),t);return n.visible=!1,i.add(n),{crackOverlay:n,crackOverlayMat:t}}function li(i,e){i.breakState=null,e.visible=!1}function Pu(i,e,t,n,s,r){if(!i||!gu(i.id)){li(t,n);return}if(t.breakState&&t.breakState.x===i.x&&t.breakState.y===i.y&&t.breakState.z===i.z&&t.breakState.id===i.id&&t.breakState.heldItemId===e)return;const a=lg(i.id)/Math.max(1,tx(e,i.id));t.breakState={x:i.x,y:i.y,z:i.z,id:i.id,heldItemId:e,progress:0,duration:a},n.position.set(i.x+.5,i.y+.5,i.z+.5),s.map=r[0],s.needsUpdate=!0,n.visible=!0}function xx(i,e,t,n,s,r,a,o,l,c,u,h=null){if(e.suppressBreakUntilMouseUp||!e.leftMouseDown){li(e,a);return}if(document.pointerLockElement!==t||c()){li(e,a);return}if(!n||!gu(n.id)){li(e,a);return}if(Pu(n,u,e,a,o,l),!e.breakState)return;e.breakState.progress+=i/Math.max(.05,e.breakState.duration);const f=Math.min($r-1,Math.floor(e.breakState.progress*$r));if(a.position.set(e.breakState.x+.5,e.breakState.y+.5,e.breakState.z+.5),o.map=l[f],o.needsUpdate=!0,a.visible=!0,e.breakState.progress>=1){const{x:p,y:g,z:x,id:m}=e.breakState;s.setBlock(p,g,x,_.AIR),r.addItem(m,1),h&&h(p,g,x,m),e.breakState=null,a.visible=!1}}const ii=100,nn=document.getElementById("app"),Du=ix(nn),{scene:hn,sunLight:bs,ambientLight:vx,sunVisual:wr}=sx(),un=rx();hn.add(un);const Lu=L_(),{matOpaque:Sx,matTransparent:Mx}=ax(Lu),rl=20260304,Dt=new qg(hn,Lu,rl);Dt.setupMaterials(Sx,Mx);const Ex=new U_(hn,rl+55123),Us=new Audio(G_);Us.loop=!0;Us.preload="auto";const Ve=new C_(un,nn),yx=Array.from({length:30},()=>({id:_.AIR,count:0})),Me=new nx(yx);Me.addItem(_.SKELETON_SPAWNER,1);Me.addItem(_.BOW,1);Me.addItem(_.ARROW,10);const bx=document.getElementById("terrain-map"),al=new Y_(bx),Zr=new I_(Me,rl+191),Rs=new R_(hn,Dt,{onEnemyKilled:i=>{i?.dropItem&&Me.addItem(i.dropItem,1)},onQuestGiverKilled:i=>{Zr.cancelQuestForGiver(i.id)}});let zn=null;const Ts=new H_(hn,()=>zn?.playerId??null),Oc=new a_(un),ko=new d_(hn,Dt,Rs,{onPlayerHit:i=>{lt.healthEnabled&&(jt=Math.max(0,jt-i),Cs=Math.max(Cs,.15))}}),Ax=document.getElementById("name-prompt"),na=document.getElementById("name-input"),Nu=document.getElementById("name-confirm");function Tx(){const i="voxel_player_name",e=localStorage.getItem(i);if(e&&e.trim())return e.trim();const t=O_();return localStorage.setItem(i,t),t}let kr="offline",ia=!1,zo=0;function Uu(i){Ax.classList.toggle("visible",i)}function wx(i){zn&&zn.close(),kr="connecting",zn=new k_({playerName:i,onStatus:e=>{kr=e},onWelcome:e=>{kr="connected",Number.isFinite(e.serverNowMs)&&(zo=e.serverNowMs-Date.now()),Ts.applyWelcome(e.players??[]);for(const t of e.blocks??[])Dt.setBlock(t.x,t.y,t.z,t.id)},onPlayerJoin:e=>{Ts.ensurePlayer(e.id,e)},onPlayerLeave:e=>{Ts.removePlayer(e)},onPlayersSnapshot:e=>{Number.isFinite(e.serverNowMs)&&(zo=e.serverNowMs-Date.now()),Ts.applySnapshot(e.players??[])},onBlockSet:e=>{Dt.setBlock(e.x,e.y,e.z,e.id)}}),zn.connect()}const lt={walkSpeed:5.2,flySpeed:11.5,mapWidthBlocks:96,mapHeightBlocks:96,bgmVolume:.1,healthEnabled:!0,agroEnabled:!0};let jt=ii,Cs=0,ts=0;function Ou(i){Us.volume=Math.max(0,Math.min(1,i))}function ol(){Us.paused&&Us.play().catch(()=>{})}Ve.setMovementSpeeds(lt.walkSpeed,lt.flySpeed);al.setBlockSpan(lt.mapWidthBlocks,lt.mapHeightBlocks);Ou(lt.bgmVolume);Me.setupDebugPane(lt,i=>{i.walkSpeed!==void 0&&(lt.walkSpeed=i.walkSpeed),i.flySpeed!==void 0&&(lt.flySpeed=Math.min(300,i.flySpeed)),i.mapWidthBlocks!==void 0&&(lt.mapWidthBlocks=Math.max(24,Math.min(192,i.mapWidthBlocks))),i.mapHeightBlocks!==void 0&&(lt.mapHeightBlocks=Math.max(24,Math.min(192,i.mapHeightBlocks))),i.bgmVolume!==void 0&&(lt.bgmVolume=Math.max(0,Math.min(1,i.bgmVolume))),i.healthEnabled!==void 0&&(lt.healthEnabled=i.healthEnabled,lt.healthEnabled||(jt=ii)),i.agroEnabled!==void 0&&(lt.agroEnabled=i.agroEnabled),Ve.setMovementSpeeds(lt.walkSpeed,lt.flySpeed),al.setBlockSpan(lt.mapWidthBlocks,lt.mapHeightBlocks),Ou(lt.bgmVolume),ol()});Me.setHotbarSelection(0);const Ti=new T,Va=ox(hn),ll=gx(),{crackOverlay:ss,crackOverlayMat:Fu}=_x(hn,ll),Rx=new We(9031679),Cx=new We(0),Wa=new We,Wt={breakState:null,leftMouseDown:!1,suppressBreakUntilMouseUp:!1};let ei=0,Ei=null,vn=null,Is=null,Bu=new T(0,40,0);function Ri(){return Me.isInventoryOpen()||Me.isCraftingOpen()||Me.isDialogueOpen()||Me.isDebugOpen()||!ia}function On(){const i=document.pointerLockElement===nn;Me.setOverlayVisible(!i&&!Ri())}function Ho(){const i=j_(Me);i.some(e=>e.id===Ei)||(Ei=i[0]?.id??null),Me.renderCraftingCatalogue(i,Ei,e=>{Ei=e,Ho()},()=>{Ei&&J_(Me,Ei)&&Ho()})}function Ix(i,e){for(let t=127;t>=1;t--)if(qr(Dt.getBlock(i,t,e))&&!qr(Dt.getBlock(i,t+1,e)))return t+1;return 45}Ve.position.set(.5,Ix(0,0)+2,.5);Bu.copy(Ve.position);Ve.syncCamera();function Px(){un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),Du.setSize(window.innerWidth,window.innerHeight)}function Dx(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function Lx(i){const n=(i%xr+xr)%xr/xr*Math.PI*2,s=Math.sin(n),r=n-Math.PI*.5,a=280,o=Ve.position.y+s*230,l=Ve.position.x+Math.cos(r)*a,c=Ve.position.z+Math.sin(r)*a;bs.position.set(l,o,c),bs.target.position.set(Ve.position.x,Ve.position.y,Ve.position.z),bs.target.updateMatrixWorld();const u=Dx(-.03,.2,s);bs.intensity=.02+u*1.06,vx.intensity=.05+u*.3,bs.castShadow=u>.03;const h=92,f=Math.sqrt(Math.max(0,1-s*s)),p=Math.cos(r)*f,g=s,x=Math.sin(r)*f;wr.position.set(Ve.position.x+p*h,Ve.position.y+g*h,Ve.position.z+x*h);const m=s>-.03;if(wr.visible=m,m){const d=wr.children[0],A=wr.children[1];d.material.opacity=.2+u*.45,A.scale.setScalar(.85+u*.25)}return Wa.lerpColors(Cx,Rx,u),hn.background.copy(Wa),hn.fog&&hn.fog.color.copy(Wa),u}window.addEventListener("resize",Px);window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("pointerdown",ol);window.addEventListener("keydown",ol);nn.addEventListener("click",()=>{ia&&(Ri()||document.pointerLockElement!==nn&&nn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==nn&&(Wt.leftMouseDown=!1,Wt.suppressBreakUntilMouseUp=!1,li(Wt,ss)),On()});window.addEventListener("wheel",i=>{document.pointerLockElement!==nn||Ri()||(ei+=i.deltaY>0?1:-1,ei<0&&(ei=Me.hotbarSize-1),ei>=Me.hotbarSize&&(ei=0),Me.setHotbarSelection(ei))});window.addEventListener("keydown",i=>{if(i.code==="Escape"&&Me.isDialogueOpen()){Zr.closeDialogue(),On();return}if(i.code==="KeyU"){const e=!Me.isDebugOpen();Me.setDebugVisible(e),e?document.exitPointerLock():!Me.isInventoryOpen()&&!Me.isDialogueOpen()&&nn.requestPointerLock(),On();return}if(i.code==="KeyE"){if(Me.isDialogueOpen())return;Me.isInventoryOpen()?(Me.setInventoryVisible(!1),!Me.isDebugOpen()&&!Me.isCraftingOpen()&&nn.requestPointerLock()):(Me.setCraftingVisible(!1),Me.setInventoryVisible(!0),document.exitPointerLock()),On();return}if(i.code==="KeyR"){if(Me.isDialogueOpen())return;Me.isCraftingOpen()?(Me.setCraftingVisible(!1),!Me.isInventoryOpen()&&!Me.isDebugOpen()&&nn.requestPointerLock()):(Me.setInventoryVisible(!1),Me.setCraftingVisible(!0),Ei=null,Ho(),document.exitPointerLock()),On();return}if(i.code==="KeyH"){if(!lt.healthEnabled||jt>=ii)return;Me.consumeItem(_.APPLE,1)&&(jt=Math.min(ii,jt+25));return}if(i.code==="KeyF"){if(Me.isDialogueOpen())return;Is&&(document.exitPointerLock(),Zr.onTalkToQuestGiver(Is),On());return}if(/Digit[1-9]/.test(i.code)){const e=Number(i.code.slice(-1))-1;e>=0&&e<Me.hotbarSize&&(ei=e,Me.setHotbarSelection(ei))}});window.addEventListener("mousedown",i=>{if(ia&&!(document.pointerLockElement!==nn||Ri())){if(i.button===0){Wt.leftMouseDown=!0;const e=Me.getSelectedItemId();if(px(e)){if(ts>0||!Me.consumeItem(_.ARROW,1))return;un.getWorldDirection(Ti);const t=un.position.clone().addScaledVector(Ti,.68);t.y-=.08,ko.firePlayerArrow(t,Ti,Uc(e)),ts=fx,Wt.suppressBreakUntilMouseUp=!0,li(Wt,ss);return}if(ts<=0){un.getWorldDirection(Ti);const t=Rs.attackNearestInFront(un.position,Ti,lx,cx,Uc(Me.getSelectedItemId()));if(ts=hx,t){Wt.suppressBreakUntilMouseUp=!0,li(Wt,ss);return}}Wt.suppressBreakUntilMouseUp=!1,Pu(vn,Me.getSelectedItemId(),Wt,ss,Fu,ll)}if(i.button===2){if(!vn)return;const e=vn.previous.x,t=vn.previous.y,n=vn.previous.z;if(Dt.getBlock(e,t,n)!==_.AIR||!mx(Ve,e,t,n))return;const s=Me.getSelectedItemId();if(dx.has(s)||!Me.consumeSelectedBlock())return;Dt.setBlock(e,t,n,s),zn?.sendBlockSet(e,t,n,s)}}});window.addEventListener("mouseup",i=>{i.button===0&&(Wt.leftMouseDown=!1,Wt.suppressBreakUntilMouseUp=!1,li(Wt,ss))});let Fc=performance.now(),Rr=0,Xa=0,Ya=0;function ku(i){const e=Math.min(.05,(i-Fc)/1e3);Fc=i;const t=(Date.now()+zo)/1e3,n=Me.getSelectedItemId();ts=Math.max(0,ts-e);const s=Lx(t);if(Ex.update(Ve.position,e,t,s),Oc.setItem(n),Oc.update(t),zn?.tick(e),Ri()||Ve.update(Dt,e),zn?.setLocalState({x:Ve.position.x,y:Ve.position.y,z:Ve.position.z,yaw:Ve.yaw,pitch:Ve.pitch,flyMode:Ve.flyMode,heldItemId:n}),Ya+=e,Ya>=.14&&(Dt.loadChunksAround(Ve.position.x,Ve.position.z),Ya=0),Dt.rebuildOneChunk(),Dt.rebuildOneChunk(),Rs.update(Ve.position,e,t,lt.agroEnabled,ko,Ve.velocity),ko.update(e,Ve),lt.healthEnabled){if(Cs-=e,lt.agroEnabled&&Cs<=0){const o=Rs.countHostilesInRange(Ve.position,1.8);o>0&&(jt=Math.max(0,jt-Math.min(18,o*6)),Cs=.45)}jt<=0&&(jt=ii,Ve.position.copy(Bu),Ve.velocity.set(0,0,0),Ve.syncCamera())}else jt=ii;Is=Rs.getNearestQuestGiver(Ve.position,4.2),un.getWorldDirection(Ti),vn=P_(Dt,un.position,Ti,cg),xx(e,Wt,nn,vn,Dt,Me,ss,Fu,ll,Ri,n,(o,l,c)=>zn?.sendBlockSet(o,l,c,_.AIR)),vn&&!Ri()?(Va.visible=!0,Va.position.set(vn.x+.5,vn.y+.5,vn.z+.5)):Va.visible=!1;let r=Zr.getActiveQuestText();const a=kr==="connected"?"MP: Online":"MP: Offline";if(r=r?`${r} | ${a}`:a,Is&&!Me.isInventoryOpen()){const o=`Press F to talk to ${Is.name}`;r=r?`${r} | ${o}`:o}Me.getItemCount(_.APPLE)>0&&lt.healthEnabled&&jt<ii&&(r=r?`${r} | Press H to eat Apple`:"Press H to eat Apple"),Me.setHint(r),Me.updateHealth(jt,ii,lt.healthEnabled),Me.updateMode(Ve.flyMode),Me.updateCoords(Ve.position),On(),Rr+=e,Xa++,Rr>=.25&&(Me.updateFPS(Xa/Rr),Rr=0,Xa=0),al.render(Dt,Ve.position,t),Ts.update(e),Du.render(hn,un),requestAnimationFrame(ku)}Dt.loadChunksAround(Ve.position.x,Ve.position.z);On();Uu(!0);na.value=Tx();na.focus();Nu.addEventListener("click",()=>{const i=(na.value||"").trim();i&&(localStorage.setItem("voxel_player_name",i),ia=!0,Uu(!1),wx(i),On())});na.addEventListener("keydown",i=>{i.key==="Enter"&&Nu.click()});requestAnimationFrame(ku);
