(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const jc="modulepreload",Vc=function(e){return"/XiaJie.github.io/"+e},Fo={},Bo=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Vc(o),o in Fo)return;Fo[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":jc,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const he={},_t=[],an=()=>{},fl=()=>!1,Hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),io=e=>e.startsWith("onUpdate:"),Te=Object.assign,oo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Wc=Object.prototype.hasOwnProperty,ce=(e,n)=>Wc.call(e,n),J=Array.isArray,wt=e=>Gr(e)==="[object Map]",dl=e=>Gr(e)==="[object Set]",Q=e=>typeof e=="function",_e=e=>typeof e=="string",Kn=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",hl=e=>(ge(e)||Q(e))&&Q(e.then)&&Q(e.catch),pl=Object.prototype.toString,Gr=e=>pl.call(e),Yc=e=>Gr(e).slice(8,-1),ml=e=>Gr(e)==="[object Object]",jr=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bt=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},$c=/-\w/g,on=Vr(e=>e.replace($c,n=>n.slice(1).toUpperCase())),qc=/\B([A-Z])/g,Jn=Vr(e=>e.replace(qc,"-$1").toLowerCase()),Wr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ci=Vr(e=>e?`on${Wr(e)}`:""),Wn=(e,n)=>!Object.is(e,n),mr=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},gl=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},so=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Kc=e=>{const n=_e(e)?Number(e):NaN;return isNaN(n)?e:n};let Ho;const Yr=()=>Ho||(Ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function at(e){if(J(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=_e(r)?Qc(r):at(r);if(i)for(const o in i)n[o]=i[o]}return n}else if(_e(e)||ge(e))return e}const Jc=/;(?![^(]*\))/g,Xc=/:([^]+)/,zc=/\/\*[^]*?\*\//g;function Qc(e){const n={};return e.replace(zc,"").split(Jc).forEach(t=>{if(t){const r=t.split(Xc);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Vn(e){let n="";if(_e(e))n=e;else if(J(e))for(let t=0;t<e.length;t++){const r=Vn(e[t]);r&&(n+=r+" ")}else if(ge(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eu=ro(Zc);function vl(e){return!!e||e===""}const yl=e=>!!(e&&e.__v_isRef===!0),ke=e=>_e(e)?e:e==null?"":J(e)||ge(e)&&(e.toString===pl||!Q(e.toString))?yl(e)?ke(e.value):JSON.stringify(e,bl,2):String(e),bl=(e,n)=>yl(n)?bl(e,n.value):wt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],o)=>(t[ui(r,o)+" =>"]=i,t),{})}:dl(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ui(t))}:Kn(n)?ui(n):ge(n)&&!J(n)&&!ml(n)?String(n):n,ui=(e,n="")=>{var t;return Kn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class xl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!n&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=De;try{return De=this,n()}finally{De=t}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){this._on>0&&--this._on===0&&(De=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _l(e){return new xl(e)}function wl(){return De}function nu(e,n=!1){De&&De.cleanups.push(e)}let me;const fi=new WeakSet;class Cl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fi.has(this)&&(fi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Go(this),Tl(this);const n=me,t=cn;me=this,cn=!0;try{return this.fn()}finally{El(this),me=n,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)co(n);this.deps=this.depsTail=void 0,Go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mi(this)&&this.run()}get dirty(){return Mi(this)}}let Al=0,Ht,Gt;function Sl(e,n=!1){if(e.flags|=8,n){e.next=Gt,Gt=e;return}e.next=Ht,Ht=e}function lo(){Al++}function ao(){if(--Al>0)return;if(Gt){let n=Gt;for(Gt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Ht;){let n=Ht;for(Ht=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Tl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function El(e){let n,t=e.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),co(r),tu(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=n,e.depsTail=t}function Mi(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Il(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Il(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Jt)||(e.globalVersion=Jt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Mi(e))))return;e.flags|=2;const n=e.dep,t=me,r=cn;me=e,cn=!0;try{Tl(e);const i=e.fn(e._value);(n.version===0||Wn(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{me=t,cn=r,El(e),e.flags&=-3}}function co(e,n=!1){const{dep:t,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)co(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function tu(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let cn=!0;const Ol=[];function On(){Ol.push(cn),cn=!1}function kn(){const e=Ol.pop();cn=e===void 0?!0:e}function Go(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=me;me=void 0;try{n()}finally{me=t}}}let Jt=0;class ru{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uo{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!me||!cn||me===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==me)t=this.activeLink=new ru(me,this),me.deps?(t.prevDep=me.depsTail,me.depsTail.nextDep=t,me.depsTail=t):me.deps=me.depsTail=t,kl(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=me.depsTail,t.nextDep=void 0,me.depsTail.nextDep=t,me.depsTail=t,me.deps===t&&(me.deps=r)}return t}trigger(n){this.version++,Jt++,this.notify(n)}notify(n){lo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ao()}}}function kl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)kl(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const wr=new WeakMap,it=Symbol(""),Ri=Symbol(""),Xt=Symbol("");function Ne(e,n,t){if(cn&&me){let r=wr.get(e);r||wr.set(e,r=new Map);let i=r.get(t);i||(r.set(t,i=new uo),i.map=r,i.key=t),i.track()}}function Tn(e,n,t,r,i,o){const s=wr.get(e);if(!s){Jt++;return}const l=a=>{a&&a.trigger()};if(lo(),n==="clear")s.forEach(l);else{const a=J(e),u=a&&jr(t);if(a&&t==="length"){const c=Number(r);s.forEach((f,d)=>{(d==="length"||d===Xt||!Kn(d)&&d>=c)&&l(f)})}else switch((t!==void 0||s.has(void 0))&&l(s.get(t)),u&&l(s.get(Xt)),n){case"add":a?u&&l(s.get("length")):(l(s.get(it)),wt(e)&&l(s.get(Ri)));break;case"delete":a||(l(s.get(it)),wt(e)&&l(s.get(Ri)));break;case"set":wt(e)&&l(s.get(it));break}}ao()}function iu(e,n){const t=wr.get(e);return t&&t.get(n)}function ft(e){const n=ie(e);return n===e?n:(Ne(n,"iterate",Xt),en(e)?n:n.map(un))}function $r(e){return Ne(e=ie(e),"iterate",Xt),e}function Bn(e,n){return Ln(e)?In(e)?At(un(n)):At(n):un(n)}const ou={__proto__:null,[Symbol.iterator](){return di(this,Symbol.iterator,e=>Bn(this,e))},concat(...e){return ft(this).concat(...e.map(n=>J(n)?ft(n):n))},entries(){return di(this,"entries",e=>(e[1]=Bn(this,e[1]),e))},every(e,n){return wn(this,"every",e,n,void 0,arguments)},filter(e,n){return wn(this,"filter",e,n,t=>t.map(r=>Bn(this,r)),arguments)},find(e,n){return wn(this,"find",e,n,t=>Bn(this,t),arguments)},findIndex(e,n){return wn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return wn(this,"findLast",e,n,t=>Bn(this,t),arguments)},findLastIndex(e,n){return wn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return wn(this,"forEach",e,n,void 0,arguments)},includes(...e){return hi(this,"includes",e)},indexOf(...e){return hi(this,"indexOf",e)},join(e){return ft(this).join(e)},lastIndexOf(...e){return hi(this,"lastIndexOf",e)},map(e,n){return wn(this,"map",e,n,void 0,arguments)},pop(){return kt(this,"pop")},push(...e){return kt(this,"push",e)},reduce(e,...n){return jo(this,"reduce",e,n)},reduceRight(e,...n){return jo(this,"reduceRight",e,n)},shift(){return kt(this,"shift")},some(e,n){return wn(this,"some",e,n,void 0,arguments)},splice(...e){return kt(this,"splice",e)},toReversed(){return ft(this).toReversed()},toSorted(e){return ft(this).toSorted(e)},toSpliced(...e){return ft(this).toSpliced(...e)},unshift(...e){return kt(this,"unshift",e)},values(){return di(this,"values",e=>Bn(this,e))}};function di(e,n,t){const r=$r(e),i=r[n]();return r!==e&&!en(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=t(o.value)),o}),i}const su=Array.prototype;function wn(e,n,t,r,i,o){const s=$r(e),l=s!==e&&!en(e),a=s[n];if(a!==su[n]){const f=a.apply(e,o);return l?un(f):f}let u=t;s!==e&&(l?u=function(f,d){return t.call(this,Bn(e,f),d,e)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,e)}));const c=a.call(s,u,r);return l&&i?i(c):c}function jo(e,n,t,r){const i=$r(e);let o=t;return i!==e&&(en(e)?t.length>3&&(o=function(s,l,a){return t.call(this,s,l,a,e)}):o=function(s,l,a){return t.call(this,s,Bn(e,l),a,e)}),i[n](o,...r)}function hi(e,n,t){const r=ie(e);Ne(r,"iterate",Xt);const i=r[n](...t);return(i===-1||i===!1)&&qr(t[0])?(t[0]=ie(t[0]),r[n](...t)):i}function kt(e,n,t=[]){On(),lo();const r=ie(e)[n].apply(e,t);return ao(),kn(),r}const lu=ro("__proto__,__v_isRef,__isVue"),Ll=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kn));function au(e){Kn(e)||(e=String(e));const n=ie(this);return Ne(n,"has",e),n.hasOwnProperty(e)}class Pl{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?yu:Nl:o?Dl:Rl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const s=J(n);if(!i){let a;if(s&&(a=ou[t]))return a;if(t==="hasOwnProperty")return au}const l=Reflect.get(n,t,Ae(n)?n:r);if((Kn(t)?Ll.has(t):lu(t))||(i||Ne(n,"get",t),o))return l;if(Ae(l)){const a=s&&jr(t)?l:l.value;return i&&ge(a)?Ni(a):a}return ge(l)?i?Ni(l):lr(l):l}}class Ml extends Pl{constructor(n=!1){super(!1,n)}set(n,t,r,i){let o=n[t];const s=J(n)&&jr(t);if(!this._isShallow){const u=Ln(o);if(!en(r)&&!Ln(r)&&(o=ie(o),r=ie(r)),!s&&Ae(o)&&!Ae(r))return u||(o.value=r),!0}const l=s?Number(t)<n.length:ce(n,t),a=Reflect.set(n,t,r,Ae(n)?n:i);return n===ie(i)&&(l?Wn(r,o)&&Tn(n,"set",t,r):Tn(n,"add",t,r)),a}deleteProperty(n,t){const r=ce(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&Tn(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!Kn(t)||!Ll.has(t))&&Ne(n,"has",t),r}ownKeys(n){return Ne(n,"iterate",J(n)?"length":it),Reflect.ownKeys(n)}}class cu extends Pl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const uu=new Ml,fu=new cu,du=new Ml(!0);const Di=e=>e,ur=e=>Reflect.getPrototypeOf(e);function hu(e,n,t){return function(...r){const i=this.__v_raw,o=ie(i),s=wt(o),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,u=i[e](...r),c=t?Di:n?At:un;return!n&&Ne(o,"iterate",a?Ri:it),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:l?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function fr(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function pu(e,n){const t={get(i){const o=this.__v_raw,s=ie(o),l=ie(i);e||(Wn(i,l)&&Ne(s,"get",i),Ne(s,"get",l));const{has:a}=ur(s),u=n?Di:e?At:un;if(a.call(s,i))return u(o.get(i));if(a.call(s,l))return u(o.get(l));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&Ne(ie(i),"iterate",it),i.size},has(i){const o=this.__v_raw,s=ie(o),l=ie(i);return e||(Wn(i,l)&&Ne(s,"has",i),Ne(s,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const s=this,l=s.__v_raw,a=ie(l),u=n?Di:e?At:un;return!e&&Ne(a,"iterate",it),l.forEach((c,f)=>i.call(o,u(c),u(f),s))}};return Te(t,e?{add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear")}:{add(i){!n&&!en(i)&&!Ln(i)&&(i=ie(i));const o=ie(this);return ur(o).has.call(o,i)||(o.add(i),Tn(o,"add",i,i)),this},set(i,o){!n&&!en(o)&&!Ln(o)&&(o=ie(o));const s=ie(this),{has:l,get:a}=ur(s);let u=l.call(s,i);u||(i=ie(i),u=l.call(s,i));const c=a.call(s,i);return s.set(i,o),u?Wn(o,c)&&Tn(s,"set",i,o):Tn(s,"add",i,o),this},delete(i){const o=ie(this),{has:s,get:l}=ur(o);let a=s.call(o,i);a||(i=ie(i),a=s.call(o,i)),l&&l.call(o,i);const u=o.delete(i);return a&&Tn(o,"delete",i,void 0),u},clear(){const i=ie(this),o=i.size!==0,s=i.clear();return o&&Tn(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hu(i,e,n)}),t}function fo(e,n){const t=pu(e,n);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ce(t,i)&&i in r?t:r,i,o)}const mu={get:fo(!1,!1)},gu={get:fo(!1,!0)},vu={get:fo(!0,!1)};const Rl=new WeakMap,Dl=new WeakMap,Nl=new WeakMap,yu=new WeakMap;function bu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xu(e){return e.__v_skip||!Object.isExtensible(e)?0:bu(Yc(e))}function lr(e){return Ln(e)?e:ho(e,!1,uu,mu,Rl)}function Ul(e){return ho(e,!1,du,gu,Dl)}function Ni(e){return ho(e,!0,fu,vu,Nl)}function ho(e,n,t,r,i){if(!ge(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=xu(e);if(o===0)return e;const s=i.get(e);if(s)return s;const l=new Proxy(e,o===2?r:t);return i.set(e,l),l}function In(e){return Ln(e)?In(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function en(e){return!!(e&&e.__v_isShallow)}function qr(e){return e?!!e.__v_raw:!1}function ie(e){const n=e&&e.__v_raw;return n?ie(n):e}function po(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&gl(e,"__v_skip",!0),e}const un=e=>ge(e)?lr(e):e,At=e=>ge(e)?Ni(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function ye(e){return Fl(e,!1)}function _u(e){return Fl(e,!0)}function Fl(e,n){return Ae(e)?e:new wu(e,n)}class wu{constructor(n,t){this.dep=new uo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ie(n),this._value=t?n:un(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||en(n)||Ln(n);n=r?n:ie(n),Wn(n,t)&&(this._rawValue=n,this._value=r?n:un(n),this.dep.trigger())}}function ve(e){return Ae(e)?e.value:e}const Cu={get:(e,n,t)=>n==="__v_raw"?e:ve(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Ae(i)&&!Ae(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function Bl(e){return In(e)?e:new Proxy(e,Cu)}function Au(e){const n=J(e)?new Array(e.length):{};for(const t in e)n[t]=Tu(e,t);return n}class Su{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ie(n);let i=!0,o=n;if(!J(n)||!jr(String(t)))do i=!qr(o)||en(o);while(i&&(o=o.__v_raw));this._shallow=i}get value(){let n=this._object[this._key];return this._shallow&&(n=ve(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&Ae(this._raw[this._key])){const t=this._object[this._key];if(Ae(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return iu(this._raw,this._key)}}function Tu(e,n,t){return new Su(e,n,t)}class Eu{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new uo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Sl(this,!0),!0}get value(){const n=this.dep.track();return Il(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Iu(e,n,t=!1){let r,i;return Q(e)?r=e:(r=e.get,i=e.set),new Eu(r,i,t)}const dr={},Cr=new WeakMap;let Zn;function Ou(e,n=!1,t=Zn){if(t){let r=Cr.get(t);r||Cr.set(t,r=[]),r.push(e)}}function ku(e,n,t=he){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:l,call:a}=t,u=T=>i?T:en(T)||i===!1||i===0?En(T,1):En(T);let c,f,d,p,g=!1,y=!1;if(Ae(e)?(f=()=>e.value,g=en(e)):In(e)?(f=()=>u(e),g=!0):J(e)?(y=!0,g=e.some(T=>In(T)||en(T)),f=()=>e.map(T=>{if(Ae(T))return T.value;if(In(T))return u(T);if(Q(T))return a?a(T,2):T()})):Q(e)?n?f=a?()=>a(e,2):e:f=()=>{if(d){On();try{d()}finally{kn()}}const T=Zn;Zn=c;try{return a?a(e,3,[p]):e(p)}finally{Zn=T}}:f=an,n&&i){const T=f,b=i===!0?1/0:i;f=()=>En(T(),b)}const S=wl(),L=()=>{c.stop(),S&&S.active&&oo(S.effects,c)};if(o&&n){const T=n;n=(...b)=>{T(...b),L()}}let w=y?new Array(e.length).fill(dr):dr;const N=T=>{if(!(!(c.flags&1)||!c.dirty&&!T))if(n){const b=c.run();if(i||g||(y?b.some((G,Y)=>Wn(G,w[Y])):Wn(b,w))){d&&d();const G=Zn;Zn=c;try{const Y=[b,w===dr?void 0:y&&w[0]===dr?[]:w,p];w=b,a?a(n,3,Y):n(...Y)}finally{Zn=G}}}else c.run()};return l&&l(N),c=new Cl(f),c.scheduler=s?()=>s(N,!1):N,p=T=>Ou(T,!1,c),d=c.onStop=()=>{const T=Cr.get(c);if(T){if(a)a(T,4);else for(const b of T)b();Cr.delete(c)}},n?r?N(!0):w=c.run():s?s(N.bind(null,!0),!0):c.run(),L.pause=c.pause.bind(c),L.resume=c.resume.bind(c),L.stop=L,L}function En(e,n=1/0,t){if(n<=0||!ge(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ae(e))En(e.value,n,t);else if(J(e))for(let r=0;r<e.length;r++)En(e[r],n,t);else if(dl(e)||wt(e))e.forEach(r=>{En(r,n,t)});else if(ml(e)){for(const r in e)En(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&En(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ar(e,n,t,r){try{return r?e(...r):e()}catch(i){Kr(i,n,t)}}function fn(e,n,t,r){if(Q(e)){const i=ar(e,n,t,r);return i&&hl(i)&&i.catch(o=>{Kr(o,n,t)}),i}if(J(e)){const i=[];for(let o=0;o<e.length;o++)i.push(fn(e[o],n,t,r));return i}}function Kr(e,n,t,r=!0){const i=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||he;if(n){let l=n.parent;const a=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,a,u)===!1)return}l=l.parent}if(o){On(),ar(o,null,10,[e,a,u]),kn();return}}Lu(e,t,i,r,s)}function Lu(e,n,t,r=!0,i=!1){if(i)throw e;console.error(e)}const We=[];let vn=-1;const Ct=[];let Hn=null,mt=0;const Hl=Promise.resolve();let Ar=null;function Jr(e){const n=Ar||Hl;return e?n.then(this?e.bind(this):e):n}function Pu(e){let n=vn+1,t=We.length;for(;n<t;){const r=n+t>>>1,i=We[r],o=zt(i);o<e||o===e&&i.flags&2?n=r+1:t=r}return n}function mo(e){if(!(e.flags&1)){const n=zt(e),t=We[We.length-1];!t||!(e.flags&2)&&n>=zt(t)?We.push(e):We.splice(Pu(n),0,e),e.flags|=1,Gl()}}function Gl(){Ar||(Ar=Hl.then(Vl))}function Mu(e){J(e)?Ct.push(...e):Hn&&e.id===-1?Hn.splice(mt+1,0,e):e.flags&1||(Ct.push(e),e.flags|=1),Gl()}function Vo(e,n,t=vn+1){for(;t<We.length;t++){const r=We[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;We.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jl(e){if(Ct.length){const n=[...new Set(Ct)].sort((t,r)=>zt(t)-zt(r));if(Ct.length=0,Hn){Hn.push(...n);return}for(Hn=n,mt=0;mt<Hn.length;mt++){const t=Hn[mt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Hn=null,mt=0}}const zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Vl(e){const n=an;try{for(vn=0;vn<We.length;vn++){const t=We[vn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ar(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vn<We.length;vn++){const t=We[vn];t&&(t.flags&=-2)}vn=-1,We.length=0,jl(),Ar=null,(We.length||Ct.length)&&Vl()}}let Qe=null,Wl=null;function Sr(e){const n=Qe;return Qe=e,Wl=e&&e.type.__scopeId||null,n}function et(e,n=Qe,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&Ir(-1);const o=Sr(n);let s;try{s=e(...i)}finally{Sr(o),r._d&&Ir(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Yl(e,n){if(Qe===null)return e;const t=ri(Qe),r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[o,s,l,a=he]=n[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&En(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:l,modifiers:a}))}return e}function Xn(e,n,t,r){const i=e.dirs,o=n&&n.dirs;for(let s=0;s<i.length;s++){const l=i[s];o&&(l.oldValue=o[s].value);let a=l.dir[r];a&&(On(),fn(a,t,8,[e.el,l,e,n]),kn())}}const $l=Symbol("_vte"),ql=e=>e.__isTeleport,jt=e=>e&&(e.disabled||e.disabled===""),Wo=e=>e&&(e.defer||e.defer===""),Yo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,$o=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ui=(e,n)=>{const t=e&&e.to;return _e(t)?n?n(t):null:t},Kl={name:"Teleport",__isTeleport:!0,process(e,n,t,r,i,o,s,l,a,u){const{mc:c,pc:f,pbc:d,o:{insert:p,querySelector:g,createText:y,createComment:S}}=u,L=jt(n.props);let{shapeFlag:w,children:N,dynamicChildren:T}=n;if(e==null){const b=n.el=y(""),G=n.anchor=y("");p(b,t,r),p(G,t,r);const Y=(E,H)=>{w&16&&c(N,E,H,i,o,s,l,a)},F=()=>{const E=n.target=Ui(n.props,g),H=Jl(E,n,y,p);E&&(s!=="svg"&&Yo(E)?s="svg":s!=="mathml"&&$o(E)&&(s="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(E),L||(Y(E,H),gr(n,!1)))};L&&(Y(t,G),gr(n,!0)),Wo(n.props)?(n.el.__isMounted=!1,je(()=>{F(),delete n.el.__isMounted},o)):F()}else{if(Wo(n.props)&&e.el.__isMounted===!1){je(()=>{Kl.process(e,n,t,r,i,o,s,l,a,u)},o);return}n.el=e.el,n.targetStart=e.targetStart;const b=n.anchor=e.anchor,G=n.target=e.target,Y=n.targetAnchor=e.targetAnchor,F=jt(e.props),E=F?t:G,H=F?b:Y;if(s==="svg"||Yo(G)?s="svg":(s==="mathml"||$o(G))&&(s="mathml"),T?(d(e.dynamicChildren,T,E,i,o,s,l),wo(e,n,!0)):a||f(e,n,E,H,i,o,s,l,!1),L)F?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):hr(n,t,b,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const X=n.target=Ui(n.props,g);X&&hr(n,X,null,u,0)}else F&&hr(n,G,Y,u,1);gr(n,L)}},remove(e,n,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:l,anchor:a,targetStart:u,targetAnchor:c,target:f,props:d}=e;if(f&&(i(u),i(c)),o&&i(a),s&16){const p=o||!jt(d);for(let g=0;g<l.length;g++){const y=l[g];r(y,n,t,p,!!y.dynamicChildren)}}},move:hr,hydrate:Ru};function hr(e,n,t,{o:{insert:r},m:i},o=2){o===0&&r(e.targetAnchor,n,t);const{el:s,anchor:l,shapeFlag:a,children:u,props:c}=e,f=o===2;if(f&&r(s,n,t),(!f||jt(c))&&a&16)for(let d=0;d<u.length;d++)i(u[d],n,t,2);f&&r(l,n,t)}function Ru(e,n,t,r,i,o,{o:{nextSibling:s,parentNode:l,querySelector:a,insert:u,createText:c}},f){function d(y,S,L,w){S.anchor=f(s(y),S,l(y),t,r,i,o),S.targetStart=L,S.targetAnchor=w}const p=n.target=Ui(n.props,a),g=jt(n.props);if(p){const y=p._lpa||p.firstChild;if(n.shapeFlag&16)if(g)d(e,n,y,y&&s(y));else{n.anchor=s(e);let S=y;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")n.targetStart=S;else if(S.data==="teleport anchor"){n.targetAnchor=S,p._lpa=n.targetAnchor&&s(n.targetAnchor);break}}S=s(S)}n.targetAnchor||Jl(p,n,c,u),f(y&&s(y),n,p,t,r,i,o)}gr(n,g)}else g&&n.shapeFlag&16&&d(e,n,e,s(e));return n.anchor&&s(n.anchor)}const Du=Kl;function gr(e,n){const t=e.ctx;if(t&&t.ut){let r,i;for(n?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Jl(e,n,t,r){const i=n.targetStart=t(""),o=n.targetAnchor=t("");return i[$l]=o,e&&(r(i,e),r(o,e)),o}const Sn=Symbol("_leaveCb"),pr=Symbol("_enterCb");function Xl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qr(()=>{e.isMounted=!0}),oa(()=>{e.isUnmounting=!0}),e}const nn=[Function,Array],zl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},Ql=e=>{const n=e.subTree;return n.component?Ql(n.component):n},Nu={name:"BaseTransition",props:zl,setup(e,{slots:n}){const t=ti(),r=Xl();return()=>{const i=n.default&&go(n.default(),!0);if(!i||!i.length)return;const o=Zl(i),s=ie(e),{mode:l}=s;if(r.isLeaving)return pi(o);const a=qo(o);if(!a)return pi(o);let u=Qt(a,s,r,t,f=>u=f);a.type!==Ye&&ct(a,u);let c=t.subTree&&qo(t.subTree);if(c&&c.type!==Ye&&!tt(c,a)&&Ql(t).type!==Ye){let f=Qt(c,s,r,t);if(ct(c,f),l==="out-in"&&a.type!==Ye)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},pi(o);l==="in-out"&&a.type!==Ye?f.delayLeave=(d,p,g)=>{const y=ea(r,c);y[String(c.key)]=c,d[Sn]=()=>{p(),d[Sn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Zl(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ye){n=t;break}}return n}const Uu=Nu;function ea(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Qt(e,n,t,r,i){const{appear:o,mode:s,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:S,onAppear:L,onAfterAppear:w,onAppearCancelled:N}=n,T=String(e.key),b=ea(t,e),G=(E,H)=>{E&&fn(E,r,9,H)},Y=(E,H)=>{const X=H[1];G(E,H),J(E)?E.every(C=>C.length<=1)&&X():E.length<=1&&X()},F={mode:s,persisted:l,beforeEnter(E){let H=a;if(!t.isMounted)if(o)H=S||a;else return;E[Sn]&&E[Sn](!0);const X=b[T];X&&tt(e,X)&&X.el[Sn]&&X.el[Sn](),G(H,[E])},enter(E){let H=u,X=c,C=f;if(!t.isMounted)if(o)H=L||u,X=w||c,C=N||f;else return;let Z=!1;const be=E[pr]=le=>{Z||(Z=!0,le?G(C,[E]):G(X,[E]),F.delayedLeave&&F.delayedLeave(),E[pr]=void 0)};H?Y(H,[E,be]):be()},leave(E,H){const X=String(e.key);if(E[pr]&&E[pr](!0),t.isUnmounting)return H();G(d,[E]);let C=!1;const Z=E[Sn]=be=>{C||(C=!0,H(),be?G(y,[E]):G(g,[E]),E[Sn]=void 0,b[X]===e&&delete b[X])};b[X]=e,p?Y(p,[E,Z]):Z()},clone(E){const H=Qt(E,n,t,r,i);return i&&i(H),H}};return F}function pi(e){if(Xr(e))return e=$n(e),e.children=null,e}function qo(e){if(!Xr(e))return ql(e.type)&&e.children?Zl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&Q(t.default))return t.default()}}function ct(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ct(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function go(e,n=!1,t){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const l=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===Pe?(s.patchFlag&128&&i++,r=r.concat(go(s.children,n,l))):(n||s.type!==Ye)&&r.push(l!=null?$n(s,{key:l}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function na(e,n){return Q(e)?(()=>Te({name:e.name},n,{setup:e}))():e}function ta(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Tr=new WeakMap;function Vt(e,n,t,r,i=!1){if(J(e)){e.forEach((g,y)=>Vt(g,n&&(J(n)?n[y]:n),t,r,i));return}if(Wt(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vt(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?ri(r.component):r.el,s=i?null:o,{i:l,r:a}=e,u=n&&n.r,c=l.refs===he?l.refs={}:l.refs,f=l.setupState,d=ie(f),p=f===he?fl:g=>ce(d,g);if(u!=null&&u!==a){if(Ko(n),_e(u))c[u]=null,p(u)&&(f[u]=null);else if(Ae(u)){u.value=null;const g=n;g.k&&(c[g.k]=null)}}if(Q(a))ar(a,l,12,[s,c]);else{const g=_e(a),y=Ae(a);if(g||y){const S=()=>{if(e.f){const L=g?p(a)?f[a]:c[a]:a.value;if(i)J(L)&&oo(L,o);else if(J(L))L.includes(o)||L.push(o);else if(g)c[a]=[o],p(a)&&(f[a]=c[a]);else{const w=[o];a.value=w,e.k&&(c[e.k]=w)}}else g?(c[a]=s,p(a)&&(f[a]=s)):y&&(a.value=s,e.k&&(c[e.k]=s))};if(s){const L=()=>{S(),Tr.delete(e)};L.id=-1,Tr.set(e,L),je(L,t)}else Ko(e),S()}}}function Ko(e){const n=Tr.get(e);n&&(n.flags|=8,Tr.delete(e))}Yr().requestIdleCallback;Yr().cancelIdleCallback;const Wt=e=>!!e.type.__asyncLoader,Xr=e=>e.type.__isKeepAlive;function Fu(e,n){ra(e,"a",n)}function Bu(e,n){ra(e,"da",n)}function ra(e,n,t=Ue){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(zr(n,r,t),t){let i=t.parent;for(;i&&i.parent;)Xr(i.parent.vnode)&&Hu(r,n,t,i),i=i.parent}}function Hu(e,n,t,r){const i=zr(n,e,r,!0);Zr(()=>{oo(r[n],i)},t)}function zr(e,n,t=Ue,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{On();const l=cr(t),a=fn(n,t,e,s);return l(),kn(),a});return r?i.unshift(o):i.push(o),o}}const Mn=e=>(n,t=Ue)=>{(!nr||e==="sp")&&zr(e,(...r)=>n(...r),t)},Gu=Mn("bm"),Qr=Mn("m"),ju=Mn("bu"),ia=Mn("u"),oa=Mn("bum"),Zr=Mn("um"),Vu=Mn("sp"),Wu=Mn("rtg"),Yu=Mn("rtc");function $u(e,n=Ue){zr("ec",e,n)}const vo="components";function Fi(e,n){return la(vo,e,!0,n)||e}const sa=Symbol.for("v-ndc");function qu(e){return _e(e)?la(vo,e,!1)||e:e||sa}function la(e,n,t=!0,r=!1){const i=Qe||Ue;if(i){const o=i.type;if(e===vo){const l=Uf(o,!1);if(l&&(l===n||l===on(n)||l===Wr(on(n))))return o}const s=Jo(i[e]||o[e],n)||Jo(i.appContext[e],n);return!s&&r?o:s}}function Jo(e,n){return e&&(e[n]||e[on(n)]||e[Wr(on(n))])}function Nt(e,n,t,r){let i;const o=t&&t[r],s=J(e);if(s||_e(e)){const l=s&&In(e);let a=!1,u=!1;l&&(a=!en(e),u=Ln(e),e=$r(e)),i=new Array(e.length);for(let c=0,f=e.length;c<f;c++)i[c]=n(a?u?At(un(e[c])):un(e[c]):e[c],c,void 0,o&&o[c])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=n(l+1,l,void 0,o&&o[l])}else if(ge(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>n(l,a,void 0,o&&o[a]));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];i[a]=n(e[c],c,a,o&&o[a])}}else i=[];return t&&(t[r]=i),i}const Bi=e=>e?Aa(e)?ri(e):Bi(e.parent):null,Yt=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bi(e.parent),$root:e=>Bi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>yo(e),$forceUpdate:e=>e.f||(e.f=()=>{mo(e.update)}),$nextTick:e=>e.n||(e.n=Jr.bind(e.proxy)),$watch:e=>sf.bind(e)}),mi=(e,n)=>e!==he&&!e.__isScriptSetup&&ce(e,n),Ku={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:l,appContext:a}=e;if(n[0]!=="$"){const d=s[n];if(d!==void 0)switch(d){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(mi(r,n))return s[n]=1,r[n];if(i!==he&&ce(i,n))return s[n]=2,i[n];if(ce(o,n))return s[n]=3,o[n];if(t!==he&&ce(t,n))return s[n]=4,t[n];Hi&&(s[n]=0)}}const u=Yt[n];let c,f;if(u)return n==="$attrs"&&Ne(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[n]))return c;if(t!==he&&ce(t,n))return s[n]=4,t[n];if(f=a.config.globalProperties,ce(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return mi(i,n)?(i[n]=t,!0):r!==he&&ce(r,n)?(r[n]=t,!0):ce(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,props:o,type:s}},l){let a;return!!(t[l]||e!==he&&l[0]!=="$"&&ce(e,l)||mi(n,l)||ce(o,l)||ce(r,l)||ce(Yt,l)||ce(i.config.globalProperties,l)||(a=s.__cssModules)&&a[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ce(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Xo(e){return J(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Hi=!0;function Ju(e){const n=yo(e),t=e.proxy,r=e.ctx;Hi=!1,n.beforeCreate&&zo(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:l,provide:a,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:y,deactivated:S,beforeDestroy:L,beforeUnmount:w,destroyed:N,unmounted:T,render:b,renderTracked:G,renderTriggered:Y,errorCaptured:F,serverPrefetch:E,expose:H,inheritAttrs:X,components:C,directives:Z,filters:be}=n;if(u&&Xu(u,r,null),s)for(const K in s){const oe=s[K];Q(oe)&&(r[K]=oe.bind(t))}if(i){const K=i.call(t,t);ge(K)&&(e.data=lr(K))}if(Hi=!0,o)for(const K in o){const oe=o[K],V=Q(oe)?oe.bind(t,t):Q(oe.get)?oe.get.bind(t,t):an,de=!Q(oe)&&Q(oe.set)?oe.set.bind(t):an,Ie=Fe({get:V,set:de});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Se=>Ie.value=Se})}if(l)for(const K in l)aa(l[K],r,t,K);if(a){const K=Q(a)?a.call(t):a;Reflect.ownKeys(K).forEach(oe=>{vr(oe,K[oe])})}c&&zo(c,e,"c");function ee(K,oe){J(oe)?oe.forEach(V=>K(V.bind(t))):oe&&K(oe.bind(t))}if(ee(Gu,f),ee(Qr,d),ee(ju,p),ee(ia,g),ee(Fu,y),ee(Bu,S),ee($u,F),ee(Yu,G),ee(Wu,Y),ee(oa,w),ee(Zr,T),ee(Vu,E),J(H))if(H.length){const K=e.exposed||(e.exposed={});H.forEach(oe=>{Object.defineProperty(K,oe,{get:()=>t[oe],set:V=>t[oe]=V,enumerable:!0})})}else e.exposed||(e.exposed={});b&&e.render===an&&(e.render=b),X!=null&&(e.inheritAttrs=X),C&&(e.components=C),Z&&(e.directives=Z),E&&ta(e)}function Xu(e,n,t=an){J(e)&&(e=Gi(e));for(const r in e){const i=e[r];let o;ge(i)?"default"in i?o=rn(i.from||r,i.default,!0):o=rn(i.from||r):o=rn(i),Ae(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):n[r]=o}}function zo(e,n,t){fn(J(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function aa(e,n,t,r){let i=r.includes(".")?ua(t,r):()=>t[r];if(_e(e)){const o=n[e];Q(o)&&st(i,o)}else if(Q(e))st(i,e.bind(t));else if(ge(e))if(J(e))e.forEach(o=>aa(o,n,t,r));else{const o=Q(e.handler)?e.handler.bind(t):n[e.handler];Q(o)&&st(i,o,e)}}function yo(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,l=o.get(n);let a;return l?a=l:!i.length&&!t&&!r?a=n:(a={},i.length&&i.forEach(u=>Er(a,u,s,!0)),Er(a,n,s)),ge(n)&&o.set(n,a),a}function Er(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&Er(e,o,t,!0),i&&i.forEach(s=>Er(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const l=zu[s]||t&&t[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const zu={data:Qo,props:Zo,emits:Zo,methods:Ut,computed:Ut,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Ut,directives:Ut,watch:Zu,provide:Qo,inject:Qu};function Qo(e,n){return n?e?function(){return Te(Q(e)?e.call(this,this):e,Q(n)?n.call(this,this):n)}:n:e}function Qu(e,n){return Ut(Gi(e),Gi(n))}function Gi(e){if(J(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ge(e,n){return e?[...new Set([].concat(e,n))]:n}function Ut(e,n){return e?Te(Object.create(null),e,n):n}function Zo(e,n){return e?J(e)&&J(n)?[...new Set([...e,...n])]:Te(Object.create(null),Xo(e),Xo(n??{})):n}function Zu(e,n){if(!e)return n;if(!n)return e;const t=Te(Object.create(null),e);for(const r in n)t[r]=Ge(e[r],n[r]);return t}function ca(){return{app:null,config:{isNativeTag:fl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function nf(e,n){return function(r,i=null){Q(r)||(r=Te({},r)),i!=null&&!ge(i)&&(i=null);const o=ca(),s=new WeakSet,l=[];let a=!1;const u=o.app={_uid:ef++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Bf,get config(){return o.config},set config(c){},use(c,...f){return s.has(c)||(c&&Q(c.install)?(s.add(c),c.install(u,...f)):Q(c)&&(s.add(c),c(u,...f))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,f){return f?(o.components[c]=f,u):o.components[c]},directive(c,f){return f?(o.directives[c]=f,u):o.directives[c]},mount(c,f,d){if(!a){const p=u._ceVNode||Ce(r,i);return p.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),f&&n?n(p,c):e(p,c,d),a=!0,u._container=c,c.__vue_app__=u,ri(p.component)}},onUnmount(c){l.push(c)},unmount(){a&&(fn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return o.provides[c]=f,u},runWithContext(c){const f=ot;ot=u;try{return c()}finally{ot=f}}};return u}}let ot=null;function vr(e,n){if(Ue){let t=Ue.provides;const r=Ue.parent&&Ue.parent.provides;r===t&&(t=Ue.provides=Object.create(r)),t[e]=n}}function rn(e,n,t=!1){const r=ti();if(r||ot){let i=ot?ot._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&Q(n)?n.call(r&&r.proxy):n}}function tf(){return!!(ti()||ot)}const rf=Symbol.for("v-scx"),of=()=>rn(rf);function oy(e,n){return bo(e,null,n)}function st(e,n,t){return bo(e,n,t)}function bo(e,n,t=he){const{immediate:r,deep:i,flush:o,once:s}=t,l=Te({},t),a=n&&r||!n&&o!=="post";let u;if(nr){if(o==="sync"){const p=of();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!a){const p=()=>{};return p.stop=an,p.resume=an,p.pause=an,p}}const c=Ue;l.call=(p,g,y)=>fn(p,c,g,y);let f=!1;o==="post"?l.scheduler=p=>{je(p,c&&c.suspense)}:o!=="sync"&&(f=!0,l.scheduler=(p,g)=>{g?p():mo(p)}),l.augmentJob=p=>{n&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=ku(e,n,l);return nr&&(u?u.push(d):a&&d()),d}function sf(e,n,t){const r=this.proxy,i=_e(e)?e.includes(".")?ua(r,e):()=>r[e]:e.bind(r,r);let o;Q(n)?o=n:(o=n.handler,t=n);const s=cr(this),l=bo(i,o.bind(r),t);return s(),l}function ua(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const lf=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${on(n)}Modifiers`]||e[`${Jn(n)}Modifiers`];function af(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||he;let i=t;const o=n.startsWith("update:"),s=o&&lf(r,n.slice(7));s&&(s.trim&&(i=t.map(c=>_e(c)?c.trim():c)),s.number&&(i=t.map(so)));let l,a=r[l=ci(n)]||r[l=ci(on(n))];!a&&o&&(a=r[l=ci(Jn(n))]),a&&fn(a,e,6,i);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,fn(u,e,6,i)}}const cf=new WeakMap;function fa(e,n,t=!1){const r=t?cf:n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},l=!1;if(!Q(e)){const a=u=>{const c=fa(u,n,!0);c&&(l=!0,Te(s,c))};!t&&n.mixins.length&&n.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(ge(e)&&r.set(e,null),null):(J(o)?o.forEach(a=>s[a]=null):Te(s,o),ge(e)&&r.set(e,s),s)}function ei(e,n){return!e||!Hr(n)?!1:(n=n.slice(2).replace(/Once$/,""),ce(e,n[0].toLowerCase()+n.slice(1))||ce(e,Jn(n))||ce(e,n))}function gi(e){const{type:n,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:l,emit:a,render:u,renderCache:c,props:f,data:d,setupState:p,ctx:g,inheritAttrs:y}=e,S=Sr(e);let L,w;try{if(t.shapeFlag&4){const T=i||r,b=T;L=yn(u.call(b,T,c,f,p,d,g)),w=l}else{const T=n;L=yn(T.length>1?T(f,{attrs:l,slots:s,emit:a}):T(f,null)),w=n.props?l:uf(l)}}catch(T){$t.length=0,Kr(T,e,1),L=Ce(Ye)}let N=L;if(w&&y!==!1){const T=Object.keys(w),{shapeFlag:b}=N;T.length&&b&7&&(o&&T.some(io)&&(w=ff(w,o)),N=$n(N,w,!1,!0))}return t.dirs&&(N=$n(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&ct(N,t.transition),L=N,Sr(S),L}const uf=e=>{let n;for(const t in e)(t==="class"||t==="style"||Hr(t))&&((n||(n={}))[t]=e[t]);return n},ff=(e,n)=>{const t={};for(const r in e)(!io(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function df(e,n,t){const{props:r,children:i,component:o}=e,{props:s,children:l,patchFlag:a}=n,u=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return r?es(r,s,u):!!s;if(a&8){const c=n.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(s[d]!==r[d]&&!ei(u,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?es(r,s,u):!0:!!s;return!1}function es(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(n[o]!==e[o]&&!ei(t,o))return!0}return!1}function hf({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const da={},ha=()=>Object.create(da),pa=e=>Object.getPrototypeOf(e)===da;function pf(e,n,t,r=!1){const i={},o=ha();e.propsDefaults=Object.create(null),ma(e,n,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=r?i:Ul(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function mf(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,l=ie(i),[a]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(ei(e.emitsOptions,d))continue;const p=n[d];if(a)if(ce(o,d))p!==o[d]&&(o[d]=p,u=!0);else{const g=on(d);i[g]=ji(a,l,g,p,e,!1)}else p!==o[d]&&(o[d]=p,u=!0)}}}else{ma(e,n,i,o)&&(u=!0);let c;for(const f in l)(!n||!ce(n,f)&&((c=Jn(f))===f||!ce(n,c)))&&(a?t&&(t[f]!==void 0||t[c]!==void 0)&&(i[f]=ji(a,l,f,void 0,e,!0)):delete i[f]);if(o!==l)for(const f in o)(!n||!ce(n,f))&&(delete o[f],u=!0)}u&&Tn(e.attrs,"set","")}function ma(e,n,t,r){const[i,o]=e.propsOptions;let s=!1,l;if(n)for(let a in n){if(Bt(a))continue;const u=n[a];let c;i&&ce(i,c=on(a))?!o||!o.includes(c)?t[c]=u:(l||(l={}))[c]=u:ei(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,s=!0)}if(o){const a=ie(t),u=l||he;for(let c=0;c<o.length;c++){const f=o[c];t[f]=ji(i,a,f,u[f],e,!ce(u,f))}}return s}function ji(e,n,t,r,i,o){const s=e[t];if(s!=null){const l=ce(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&Q(a)){const{propsDefaults:u}=i;if(t in u)r=u[t];else{const c=cr(i);r=u[t]=a.call(null,n),c()}}else r=a;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!l?r=!1:s[1]&&(r===""||r===Jn(t))&&(r=!0))}return r}const gf=new WeakMap;function ga(e,n,t=!1){const r=t?gf:n.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},l=[];let a=!1;if(!Q(e)){const c=f=>{a=!0;const[d,p]=ga(f,n,!0);Te(s,d),p&&l.push(...p)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!a)return ge(e)&&r.set(e,_t),_t;if(J(o))for(let c=0;c<o.length;c++){const f=on(o[c]);ns(f)&&(s[f]=he)}else if(o)for(const c in o){const f=on(c);if(ns(f)){const d=o[c],p=s[f]=J(d)||Q(d)?{type:d}:Te({},d),g=p.type;let y=!1,S=!0;if(J(g))for(let L=0;L<g.length;++L){const w=g[L],N=Q(w)&&w.name;if(N==="Boolean"){y=!0;break}else N==="String"&&(S=!1)}else y=Q(g)&&g.name==="Boolean";p[0]=y,p[1]=S,(y||ce(p,"default"))&&l.push(f)}}const u=[s,l];return ge(e)&&r.set(e,u),u}function ns(e){return e[0]!=="$"&&!Bt(e)}const xo=e=>e==="_"||e==="_ctx"||e==="$stable",_o=e=>J(e)?e.map(yn):[yn(e)],vf=(e,n,t)=>{if(n._n)return n;const r=et((...i)=>_o(n(...i)),t);return r._c=!1,r},va=(e,n,t)=>{const r=e._ctx;for(const i in e){if(xo(i))continue;const o=e[i];if(Q(o))n[i]=vf(i,o,r);else if(o!=null){const s=_o(o);n[i]=()=>s}}},ya=(e,n)=>{const t=_o(n);e.slots.default=()=>t},ba=(e,n,t)=>{for(const r in n)(t||!xo(r))&&(e[r]=n[r])},yf=(e,n,t)=>{const r=e.slots=ha();if(e.vnode.shapeFlag&32){const i=n._;i?(ba(r,n,t),t&&gl(r,"_",i,!0)):va(n,r)}else n&&ya(e,n)},bf=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,s=he;if(r.shapeFlag&32){const l=n._;l?t&&l===1?o=!1:ba(i,n,t):(o=!n.$stable,va(n,i)),s=n}else n&&(ya(e,n),s={default:1});if(o)for(const l in i)!xo(l)&&s[l]==null&&delete i[l]},je=Af;function xf(e){return _f(e)}function _f(e,n){const t=Yr();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:l,createComment:a,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=an,insertStaticContent:g}=e,y=(h,m,v,I=null,x=null,O=null,R=void 0,M=null,P=!!m.dynamicChildren)=>{if(h===m)return;h&&!tt(h,m)&&(I=_(h),Se(h,x,O,!0),h=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:k,ref:q,shapeFlag:U}=m;switch(k){case ni:S(h,m,v,I);break;case Ye:L(h,m,v,I);break;case yr:h==null&&w(m,v,I,R);break;case Pe:C(h,m,v,I,x,O,R,M,P);break;default:U&1?b(h,m,v,I,x,O,R,M,P):U&6?Z(h,m,v,I,x,O,R,M,P):(U&64||U&128)&&k.process(h,m,v,I,x,O,R,M,P,$)}q!=null&&x?Vt(q,h&&h.ref,O,m||h,!m):q==null&&h&&h.ref!=null&&Vt(h.ref,null,O,h,!0)},S=(h,m,v,I)=>{if(h==null)r(m.el=l(m.children),v,I);else{const x=m.el=h.el;m.children!==h.children&&u(x,m.children)}},L=(h,m,v,I)=>{h==null?r(m.el=a(m.children||""),v,I):m.el=h.el},w=(h,m,v,I)=>{[h.el,h.anchor]=g(h.children,m,v,I,h.el,h.anchor)},N=({el:h,anchor:m},v,I)=>{let x;for(;h&&h!==m;)x=d(h),r(h,v,I),h=x;r(m,v,I)},T=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=d(h),i(h),h=v;i(m)},b=(h,m,v,I,x,O,R,M,P)=>{if(m.type==="svg"?R="svg":m.type==="math"&&(R="mathml"),h==null)G(m,v,I,x,O,R,M,P);else{const k=h.el&&h.el._isVueCE?h.el:null;try{k&&k._beginPatch(),E(h,m,x,O,R,M,P)}finally{k&&k._endPatch()}}},G=(h,m,v,I,x,O,R,M)=>{let P,k;const{props:q,shapeFlag:U,transition:W,dirs:z}=h;if(P=h.el=s(h.type,O,q&&q.is,q),U&8?c(P,h.children):U&16&&F(h.children,P,null,I,x,vi(h,O),R,M),z&&Xn(h,null,I,"created"),Y(P,h,h.scopeId,R,I),q){for(const pe in q)pe!=="value"&&!Bt(pe)&&o(P,pe,null,q[pe],O,I);"value"in q&&o(P,"value",null,q.value,O),(k=q.onVnodeBeforeMount)&&mn(k,I,h)}z&&Xn(h,null,I,"beforeMount");const re=wf(x,W);re&&W.beforeEnter(P),r(P,m,v),((k=q&&q.onVnodeMounted)||re||z)&&je(()=>{k&&mn(k,I,h),re&&W.enter(P),z&&Xn(h,null,I,"mounted")},x)},Y=(h,m,v,I,x)=>{if(v&&p(h,v),I)for(let O=0;O<I.length;O++)p(h,I[O]);if(x){let O=x.subTree;if(m===O||_a(O.type)&&(O.ssContent===m||O.ssFallback===m)){const R=x.vnode;Y(h,R,R.scopeId,R.slotScopeIds,x.parent)}}},F=(h,m,v,I,x,O,R,M,P=0)=>{for(let k=P;k<h.length;k++){const q=h[k]=M?Gn(h[k]):yn(h[k]);y(null,q,m,v,I,x,O,R,M)}},E=(h,m,v,I,x,O,R)=>{const M=m.el=h.el;let{patchFlag:P,dynamicChildren:k,dirs:q}=m;P|=h.patchFlag&16;const U=h.props||he,W=m.props||he;let z;if(v&&zn(v,!1),(z=W.onVnodeBeforeUpdate)&&mn(z,v,m,h),q&&Xn(m,h,v,"beforeUpdate"),v&&zn(v,!0),(U.innerHTML&&W.innerHTML==null||U.textContent&&W.textContent==null)&&c(M,""),k?H(h.dynamicChildren,k,M,v,I,vi(m,x),O):R||oe(h,m,M,null,v,I,vi(m,x),O,!1),P>0){if(P&16)X(M,U,W,v,x);else if(P&2&&U.class!==W.class&&o(M,"class",null,W.class,x),P&4&&o(M,"style",U.style,W.style,x),P&8){const re=m.dynamicProps;for(let pe=0;pe<re.length;pe++){const ue=re[pe],Ke=U[ue],Re=W[ue];(Re!==Ke||ue==="value")&&o(M,ue,Ke,Re,x,v)}}P&1&&h.children!==m.children&&c(M,m.children)}else!R&&k==null&&X(M,U,W,v,x);((z=W.onVnodeUpdated)||q)&&je(()=>{z&&mn(z,v,m,h),q&&Xn(m,h,v,"updated")},I)},H=(h,m,v,I,x,O,R)=>{for(let M=0;M<m.length;M++){const P=h[M],k=m[M],q=P.el&&(P.type===Pe||!tt(P,k)||P.shapeFlag&198)?f(P.el):v;y(P,k,q,null,I,x,O,R,!0)}},X=(h,m,v,I,x)=>{if(m!==v){if(m!==he)for(const O in m)!Bt(O)&&!(O in v)&&o(h,O,m[O],null,x,I);for(const O in v){if(Bt(O))continue;const R=v[O],M=m[O];R!==M&&O!=="value"&&o(h,O,M,R,x,I)}"value"in v&&o(h,"value",m.value,v.value,x)}},C=(h,m,v,I,x,O,R,M,P)=>{const k=m.el=h?h.el:l(""),q=m.anchor=h?h.anchor:l("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:z}=m;z&&(M=M?M.concat(z):z),h==null?(r(k,v,I),r(q,v,I),F(m.children||[],v,q,x,O,R,M,P)):U>0&&U&64&&W&&h.dynamicChildren?(H(h.dynamicChildren,W,v,x,O,R,M),(m.key!=null||x&&m===x.subTree)&&wo(h,m,!0)):oe(h,m,v,q,x,O,R,M,P)},Z=(h,m,v,I,x,O,R,M,P)=>{m.slotScopeIds=M,h==null?m.shapeFlag&512?x.ctx.activate(m,v,I,R,P):be(m,v,I,x,O,R,P):le(h,m,P)},be=(h,m,v,I,x,O,R)=>{const M=h.component=Pf(h,I,x);if(Xr(h)&&(M.ctx.renderer=$),Mf(M,!1,R),M.asyncDep){if(x&&x.registerDep(M,ee,R),!h.el){const P=M.subTree=Ce(Ye);L(null,P,m,v),h.placeholder=P.el}}else ee(M,h,m,v,x,O,R)},le=(h,m,v)=>{const I=m.component=h.component;if(df(h,m,v))if(I.asyncDep&&!I.asyncResolved){K(I,m,v);return}else I.next=m,I.update();else m.el=h.el,I.vnode=m},ee=(h,m,v,I,x,O,R)=>{const M=()=>{if(h.isMounted){let{next:U,bu:W,u:z,parent:re,vnode:pe}=h;{const Xe=xa(h);if(Xe){U&&(U.el=pe.el,K(h,U,R)),Xe.asyncDep.then(()=>{h.isUnmounted||M()});return}}let ue=U,Ke;zn(h,!1),U?(U.el=pe.el,K(h,U,R)):U=pe,W&&mr(W),(Ke=U.props&&U.props.onVnodeBeforeUpdate)&&mn(Ke,re,U,pe),zn(h,!0);const Re=gi(h),ln=h.subTree;h.subTree=Re,y(ln,Re,f(ln.el),_(ln),h,x,O),U.el=Re.el,ue===null&&hf(h,Re.el),z&&je(z,x),(Ke=U.props&&U.props.onVnodeUpdated)&&je(()=>mn(Ke,re,U,pe),x)}else{let U;const{el:W,props:z}=m,{bm:re,m:pe,parent:ue,root:Ke,type:Re}=h,ln=Wt(m);if(zn(h,!1),re&&mr(re),!ln&&(U=z&&z.onVnodeBeforeMount)&&mn(U,ue,m),zn(h,!0),W&&xe){const Xe=()=>{h.subTree=gi(h),xe(W,h.subTree,h,x,null)};ln&&Re.__asyncHydrate?Re.__asyncHydrate(W,h,Xe):Xe()}else{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Re);const Xe=h.subTree=gi(h);y(null,Xe,v,I,h,x,O),m.el=Xe.el}if(pe&&je(pe,x),!ln&&(U=z&&z.onVnodeMounted)){const Xe=m;je(()=>mn(U,ue,Xe),x)}(m.shapeFlag&256||ue&&Wt(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&je(h.a,x),h.isMounted=!0,m=v=I=null}};h.scope.on();const P=h.effect=new Cl(M);h.scope.off();const k=h.update=P.run.bind(P),q=h.job=P.runIfDirty.bind(P);q.i=h,q.id=h.uid,P.scheduler=()=>mo(q),zn(h,!0),k()},K=(h,m,v)=>{m.component=h;const I=h.vnode.props;h.vnode=m,h.next=null,mf(h,m.props,I,v),bf(h,m.children,v),On(),Vo(h),kn()},oe=(h,m,v,I,x,O,R,M,P=!1)=>{const k=h&&h.children,q=h?h.shapeFlag:0,U=m.children,{patchFlag:W,shapeFlag:z}=m;if(W>0){if(W&128){de(k,U,v,I,x,O,R,M,P);return}else if(W&256){V(k,U,v,I,x,O,R,M,P);return}}z&8?(q&16&&He(k,x,O),U!==k&&c(v,U)):q&16?z&16?de(k,U,v,I,x,O,R,M,P):He(k,x,O,!0):(q&8&&c(v,""),z&16&&F(U,v,I,x,O,R,M,P))},V=(h,m,v,I,x,O,R,M,P)=>{h=h||_t,m=m||_t;const k=h.length,q=m.length,U=Math.min(k,q);let W;for(W=0;W<U;W++){const z=m[W]=P?Gn(m[W]):yn(m[W]);y(h[W],z,v,null,x,O,R,M,P)}k>q?He(h,x,O,!0,!1,U):F(m,v,I,x,O,R,M,P,U)},de=(h,m,v,I,x,O,R,M,P)=>{let k=0;const q=m.length;let U=h.length-1,W=q-1;for(;k<=U&&k<=W;){const z=h[k],re=m[k]=P?Gn(m[k]):yn(m[k]);if(tt(z,re))y(z,re,v,null,x,O,R,M,P);else break;k++}for(;k<=U&&k<=W;){const z=h[U],re=m[W]=P?Gn(m[W]):yn(m[W]);if(tt(z,re))y(z,re,v,null,x,O,R,M,P);else break;U--,W--}if(k>U){if(k<=W){const z=W+1,re=z<q?m[z].el:I;for(;k<=W;)y(null,m[k]=P?Gn(m[k]):yn(m[k]),v,re,x,O,R,M,P),k++}}else if(k>W)for(;k<=U;)Se(h[k],x,O,!0),k++;else{const z=k,re=k,pe=new Map;for(k=re;k<=W;k++){const ze=m[k]=P?Gn(m[k]):yn(m[k]);ze.key!=null&&pe.set(ze.key,k)}let ue,Ke=0;const Re=W-re+1;let ln=!1,Xe=0;const Ot=new Array(Re);for(k=0;k<Re;k++)Ot[k]=0;for(k=z;k<=U;k++){const ze=h[k];if(Ke>=Re){Se(ze,x,O,!0);continue}let pn;if(ze.key!=null)pn=pe.get(ze.key);else for(ue=re;ue<=W;ue++)if(Ot[ue-re]===0&&tt(ze,m[ue])){pn=ue;break}pn===void 0?Se(ze,x,O,!0):(Ot[pn-re]=k+1,pn>=Xe?Xe=pn:ln=!0,y(ze,m[pn],v,null,x,O,R,M,P),Ke++)}const Do=ln?Cf(Ot):_t;for(ue=Do.length-1,k=Re-1;k>=0;k--){const ze=re+k,pn=m[ze],No=m[ze+1],Uo=ze+1<q?No.el||No.placeholder:I;Ot[k]===0?y(null,pn,v,Uo,x,O,R,M,P):ln&&(ue<0||k!==Do[ue]?Ie(pn,v,Uo,2):ue--)}}},Ie=(h,m,v,I,x=null)=>{const{el:O,type:R,transition:M,children:P,shapeFlag:k}=h;if(k&6){Ie(h.component.subTree,m,v,I);return}if(k&128){h.suspense.move(m,v,I);return}if(k&64){R.move(h,m,v,$);return}if(R===Pe){r(O,m,v);for(let U=0;U<P.length;U++)Ie(P[U],m,v,I);r(h.anchor,m,v);return}if(R===yr){N(h,m,v);return}if(I!==2&&k&1&&M)if(I===0)M.beforeEnter(O),r(O,m,v),je(()=>M.enter(O),x);else{const{leave:U,delayLeave:W,afterLeave:z}=M,re=()=>{h.ctx.isUnmounted?i(O):r(O,m,v)},pe=()=>{O._isLeaving&&O[Sn](!0),U(O,()=>{re(),z&&z()})};W?W(O,re,pe):pe()}else r(O,m,v)},Se=(h,m,v,I=!1,x=!1)=>{const{type:O,props:R,ref:M,children:P,dynamicChildren:k,shapeFlag:q,patchFlag:U,dirs:W,cacheIndex:z}=h;if(U===-2&&(x=!1),M!=null&&(On(),Vt(M,null,v,h,!0),kn()),z!=null&&(m.renderCache[z]=void 0),q&256){m.ctx.deactivate(h);return}const re=q&1&&W,pe=!Wt(h);let ue;if(pe&&(ue=R&&R.onVnodeBeforeUnmount)&&mn(ue,m,h),q&6)hn(h.component,v,I);else{if(q&128){h.suspense.unmount(v,I);return}re&&Xn(h,null,m,"beforeUnmount"),q&64?h.type.remove(h,m,v,$,I):k&&!k.hasOnce&&(O!==Pe||U>0&&U&64)?He(k,m,v,!1,!0):(O===Pe&&U&384||!x&&q&16)&&He(P,m,v),I&&sn(h)}(pe&&(ue=R&&R.onVnodeUnmounted)||re)&&je(()=>{ue&&mn(ue,m,h),re&&Xn(h,null,m,"unmounted")},v)},sn=h=>{const{type:m,el:v,anchor:I,transition:x}=h;if(m===Pe){_n(v,I);return}if(m===yr){T(h);return}const O=()=>{i(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:M}=x,P=()=>R(v,O);M?M(h.el,O,P):P()}else O()},_n=(h,m)=>{let v;for(;h!==m;)v=d(h),i(h),h=v;i(m)},hn=(h,m,v)=>{const{bum:I,scope:x,job:O,subTree:R,um:M,m:P,a:k}=h;ts(P),ts(k),I&&mr(I),x.stop(),O&&(O.flags|=8,Se(R,h,m,v)),M&&je(M,m),je(()=>{h.isUnmounted=!0},m)},He=(h,m,v,I=!1,x=!1,O=0)=>{for(let R=O;R<h.length;R++)Se(h[R],m,v,I,x)},_=h=>{if(h.shapeFlag&6)return _(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=d(h.anchor||h.el),v=m&&m[$l];return v?d(v):m};let B=!1;const D=(h,m,v)=>{h==null?m._vnode&&Se(m._vnode,null,null,!0):y(m._vnode||null,h,m,null,null,null,v),m._vnode=h,B||(B=!0,Vo(),jl(),B=!1)},$={p:y,um:Se,m:Ie,r:sn,mt:be,mc:F,pc:oe,pbc:H,n:_,o:e};let ne,xe;return n&&([ne,xe]=n($)),{render:D,hydrate:ne,createApp:nf(D,ne)}}function vi({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function zn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function wf(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function wo(e,n,t=!1){const r=e.children,i=n.children;if(J(r)&&J(i))for(let o=0;o<r.length;o++){const s=r[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=Gn(i[o]),l.el=s.el),!t&&l.patchFlag!==-2&&wo(s,l)),l.type===ni&&l.patchFlag!==-1&&(l.el=s.el),l.type===Ye&&!l.el&&(l.el=s.el)}}function Cf(e){const n=e.slice(),t=[0];let r,i,o,s,l;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(i=t[t.length-1],e[i]<u){n[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)l=o+s>>1,e[t[l]]<u?o=l+1:s=l;u<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}function xa(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:xa(n)}function ts(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const _a=e=>e.__isSuspense;function Af(e,n){n&&n.pendingBranch?J(e)?n.effects.push(...e):n.effects.push(e):Mu(e)}const Pe=Symbol.for("v-fgt"),ni=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),$t=[];let Ze=null;function te(e=!1){$t.push(Ze=e?null:[])}function Sf(){$t.pop(),Ze=$t[$t.length-1]||null}let Zt=1;function Ir(e,n=!1){Zt+=e,e<0&&Ze&&n&&(Ze.hasOnce=!0)}function wa(e){return e.dynamicChildren=Zt>0?Ze||_t:null,Sf(),Zt>0&&Ze&&Ze.push(e),e}function se(e,n,t,r,i,o){return wa(A(e,n,t,r,i,o,!0))}function er(e,n,t,r,i){return wa(Ce(e,n,t,r,i,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}function tt(e,n){return e.type===n.type&&e.key===n.key}const Ca=({key:e})=>e??null,br=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Ae(e)||Q(e)?{i:Qe,r:e,k:n,f:!!t}:e:null);function A(e,n=null,t=null,r=0,i=null,o=e===Pe?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ca(n),ref:n&&br(n),scopeId:Wl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return l?(Co(a,t),o&128&&e.normalize(a)):t&&(a.shapeFlag|=_e(t)?8:16),Zt>0&&!s&&Ze&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ze.push(a),a}const Ce=Tf;function Tf(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===sa)&&(e=Ye),Or(e)){const l=$n(e,n,!0);return t&&Co(l,t),Zt>0&&!o&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(e)]=l:Ze.push(l)),l.patchFlag=-2,l}if(Ff(e)&&(e=e.__vccOpts),n){n=Ef(n);let{class:l,style:a}=n;l&&!_e(l)&&(n.class=Vn(l)),ge(a)&&(qr(a)&&!J(a)&&(a=Te({},a)),n.style=at(a))}const s=_e(e)?1:_a(e)?128:ql(e)?64:ge(e)?4:Q(e)?2:0;return A(e,n,t,r,i,s,o,!0)}function Ef(e){return e?qr(e)||pa(e)?Te({},e):e:null}function $n(e,n,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:l,transition:a}=e,u=n?Of(i||{},n):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ca(u),ref:n&&n.ref?t&&o?J(o)?o.concat(br(n)):[o,br(n)]:br(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Pe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$n(e.ssContent),ssFallback:e.ssFallback&&$n(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&ct(c,a.clone(c)),c}function xr(e=" ",n=0){return Ce(ni,null,e,n)}function If(e,n){const t=Ce(yr,null,e);return t.staticCount=n,t}function tn(e="",n=!1){return n?(te(),er(Ye,null,e)):Ce(Ye,null,e)}function yn(e){return e==null||typeof e=="boolean"?Ce(Ye):J(e)?Ce(Pe,null,e.slice()):Or(e)?Gn(e):Ce(ni,null,String(e))}function Gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$n(e)}function Co(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(J(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),Co(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!pa(n)?n._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else Q(n)?(n={default:n,_ctx:Qe},t=32):(n=String(n),r&64?(t=16,n=[xr(n)]):t=8);e.children=n,e.shapeFlag|=t}function Of(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=Vn([n.class,r.class]));else if(i==="style")n.style=at([n.style,r.style]);else if(Hr(i)){const o=n[i],s=r[i];s&&o!==s&&!(J(o)&&o.includes(s))&&(n[i]=o?[].concat(o,s):s)}else i!==""&&(n[i]=r[i])}return n}function mn(e,n,t,r=null){fn(e,n,7,[t,r])}const kf=ca();let Lf=0;function Pf(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||kf,o={uid:Lf++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ga(r,i),emitsOptions:fa(r,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=af.bind(null,o),e.ce&&e.ce(o),o}let Ue=null;const ti=()=>Ue||Qe;let kr,Vi;{const e=Yr(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};kr=n("__VUE_INSTANCE_SETTERS__",t=>Ue=t),Vi=n("__VUE_SSR_SETTERS__",t=>nr=t)}const cr=e=>{const n=Ue;return kr(e),e.scope.on(),()=>{e.scope.off(),kr(n)}},rs=()=>{Ue&&Ue.scope.off(),kr(null)};function Aa(e){return e.vnode.shapeFlag&4}let nr=!1;function Mf(e,n=!1,t=!1){n&&Vi(n);const{props:r,children:i}=e.vnode,o=Aa(e);pf(e,r,o,n),yf(e,i,t||n);const s=o?Rf(e,n):void 0;return n&&Vi(!1),s}function Rf(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ku);const{setup:r}=t;if(r){On();const i=e.setupContext=r.length>1?Nf(e):null,o=cr(e),s=ar(r,e,0,[e.props,i]),l=hl(s);if(kn(),o(),(l||e.sp)&&!Wt(e)&&ta(e),l){if(s.then(rs,rs),n)return s.then(a=>{is(e,a,n)}).catch(a=>{Kr(a,e,0)});e.asyncDep=s}else is(e,s,n)}else Sa(e,n)}function is(e,n,t){Q(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ge(n)&&(e.setupState=Bl(n)),Sa(e,t)}let os;function Sa(e,n,t){const r=e.type;if(!e.render){if(!n&&os&&!r.render){const i=r.template||yo(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,u=Te(Te({isCustomElement:o,delimiters:l},s),a);r.render=os(i,u)}}e.render=r.render||an}{const i=cr(e);On();try{Ju(e)}finally{kn(),i()}}}const Df={get(e,n){return Ne(e,"get",""),e[n]}};function Nf(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Df),slots:e.slots,emit:e.emit,expose:n}}function ri(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Bl(po(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Yt)return Yt[t](e)},has(n,t){return t in n||t in Yt}})):e.proxy}function Uf(e,n=!0){return Q(e)?e.displayName||e.name:e.name||n&&e.__name}function Ff(e){return Q(e)&&"__vccOpts"in e}const Fe=(e,n)=>Iu(e,n,nr);function Ao(e,n,t){try{Ir(-1);const r=arguments.length;return r===2?ge(n)&&!J(n)?Or(n)?Ce(e,null,[n]):Ce(e,n):Ce(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Or(t)&&(t=[t]),Ce(e,n,t))}finally{Ir(1)}}const Bf="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wi;const ss=typeof window<"u"&&window.trustedTypes;if(ss)try{Wi=ss.createPolicy("vue",{createHTML:e=>e})}catch{}const Ta=Wi?e=>Wi.createHTML(e):e=>e,Hf="http://www.w3.org/2000/svg",Gf="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,ls=An&&An.createElement("template"),jf={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?An.createElementNS(Hf,e):n==="mathml"?An.createElementNS(Gf,e):t?An.createElement(e,{is:t}):An.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>An.createTextNode(e),createComment:e=>An.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>An.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const s=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{ls.innerHTML=Ta(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=ls.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}n.insertBefore(l,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Rn="transition",Lt="animation",St=Symbol("_vtc"),Ea={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ia=Te({},zl,Ea),Vf=e=>(e.displayName="Transition",e.props=Ia,e),yi=Vf((e,{slots:n})=>Ao(Uu,Oa(e),n)),Qn=(e,n=[])=>{J(e)?e.forEach(t=>t(...n)):e&&e(...n)},as=e=>e?J(e)?e.some(n=>n.length>1):e.length>1:!1;function Oa(e){const n={};for(const C in e)C in Ea||(n[C]=e[C]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:a=o,appearActiveClass:u=s,appearToClass:c=l,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=e,g=Wf(i),y=g&&g[0],S=g&&g[1],{onBeforeEnter:L,onEnter:w,onEnterCancelled:N,onLeave:T,onLeaveCancelled:b,onBeforeAppear:G=L,onAppear:Y=w,onAppearCancelled:F=N}=n,E=(C,Z,be,le)=>{C._enterCancelled=le,Un(C,Z?c:l),Un(C,Z?u:s),be&&be()},H=(C,Z)=>{C._isLeaving=!1,Un(C,f),Un(C,p),Un(C,d),Z&&Z()},X=C=>(Z,be)=>{const le=C?Y:w,ee=()=>E(Z,C,be);Qn(le,[Z,ee]),cs(()=>{Un(Z,C?a:o),gn(Z,C?c:l),as(le)||us(Z,r,y,ee)})};return Te(n,{onBeforeEnter(C){Qn(L,[C]),gn(C,o),gn(C,s)},onBeforeAppear(C){Qn(G,[C]),gn(C,a),gn(C,u)},onEnter:X(!1),onAppear:X(!0),onLeave(C,Z){C._isLeaving=!0;const be=()=>H(C,Z);gn(C,f),C._enterCancelled?(gn(C,d),Yi(C)):(Yi(C),gn(C,d)),cs(()=>{C._isLeaving&&(Un(C,f),gn(C,p),as(T)||us(C,r,S,be))}),Qn(T,[C,be])},onEnterCancelled(C){E(C,!1,void 0,!0),Qn(N,[C])},onAppearCancelled(C){E(C,!0,void 0,!0),Qn(F,[C])},onLeaveCancelled(C){H(C),Qn(b,[C])}})}function Wf(e){if(e==null)return null;if(ge(e))return[bi(e.enter),bi(e.leave)];{const n=bi(e);return[n,n]}}function bi(e){return Kc(e)}function gn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[St]||(e[St]=new Set)).add(n)}function Un(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[St];t&&(t.delete(n),t.size||(e[St]=void 0))}function cs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Yf=0;function us(e,n,t,r){const i=e._endId=++Yf,o=()=>{i===e._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:l,propCount:a}=ka(e,n);if(!s)return r();const u=s+"end";let c=0;const f=()=>{e.removeEventListener(u,d),o()},d=p=>{p.target===e&&++c>=a&&f()};setTimeout(()=>{c<a&&f()},l+1),e.addEventListener(u,d)}function ka(e,n){const t=window.getComputedStyle(e),r=g=>(t[g]||"").split(", "),i=r(`${Rn}Delay`),o=r(`${Rn}Duration`),s=fs(i,o),l=r(`${Lt}Delay`),a=r(`${Lt}Duration`),u=fs(l,a);let c=null,f=0,d=0;n===Rn?s>0&&(c=Rn,f=s,d=o.length):n===Lt?u>0&&(c=Lt,f=u,d=a.length):(f=Math.max(s,u),c=f>0?s>u?Rn:Lt:null,d=c?c===Rn?o.length:a.length:0);const p=c===Rn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Rn}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function fs(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>ds(t)+ds(e[r])))}function ds(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Yi(e){return(e?e.ownerDocument:document).body.offsetHeight}function $f(e,n,t){const r=e[St];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const hs=Symbol("_vod"),qf=Symbol("_vsh"),Kf=Symbol(""),Jf=/(?:^|;)\s*display\s*:/;function Xf(e,n,t){const r=e.style,i=_e(t);let o=!1;if(t&&!i){if(n)if(_e(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();t[l]==null&&_r(r,l,"")}else for(const s in n)t[s]==null&&_r(r,s,"");for(const s in t)s==="display"&&(o=!0),_r(r,s,t[s])}else if(i){if(n!==t){const s=r[Kf];s&&(t+=";"+s),r.cssText=t,o=Jf.test(t)}}else n&&e.removeAttribute("style");hs in e&&(e[hs]=o?r.display:"",e[qf]&&(r.display="none"))}const ps=/\s*!important$/;function _r(e,n,t){if(J(t))t.forEach(r=>_r(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=zf(e,n);ps.test(t)?e.setProperty(Jn(r),t.replace(ps,""),"important"):e[r]=t}}const ms=["Webkit","Moz","ms"],xi={};function zf(e,n){const t=xi[n];if(t)return t;let r=on(n);if(r!=="filter"&&r in e)return xi[n]=r;r=Wr(r);for(let i=0;i<ms.length;i++){const o=ms[i]+r;if(o in e)return xi[n]=o}return n}const gs="http://www.w3.org/1999/xlink";function vs(e,n,t,r,i,o=eu(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(gs,n.slice(6,n.length)):e.setAttributeNS(gs,n,t):t==null||o&&!vl(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Kn(t)?String(t):t)}function ys(e,n,t,r,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Ta(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=t==null?e.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in e))&&(e.value=a),t==null&&e.removeAttribute(n),e._value=t;return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=vl(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(i||n)}function gt(e,n,t,r){e.addEventListener(n,t,r)}function Qf(e,n,t,r){e.removeEventListener(n,t,r)}const bs=Symbol("_vei");function Zf(e,n,t,r,i=null){const o=e[bs]||(e[bs]={}),s=o[n];if(r&&s)s.value=r;else{const[l,a]=ed(n);if(r){const u=o[n]=rd(r,i);gt(e,l,u,a)}else s&&(Qf(e,l,s,a),o[n]=void 0)}}const xs=/(?:Once|Passive|Capture)$/;function ed(e){let n;if(xs.test(e)){n={};let r;for(;r=e.match(xs);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jn(e.slice(2)),n]}let _i=0;const nd=Promise.resolve(),td=()=>_i||(nd.then(()=>_i=0),_i=Date.now());function rd(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;fn(id(r,t.value),n,5,[r])};return t.value=e,t.attached=td(),t}function id(e,n){if(J(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const _s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,od=(e,n,t,r,i,o)=>{const s=i==="svg";n==="class"?$f(e,r,s):n==="style"?Xf(e,t,r):Hr(n)?io(n)||Zf(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):sd(e,n,r,s))?(ys(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&vs(e,n,r,s,o,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!_e(r))?ys(e,on(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),vs(e,n,r,s))};function sd(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&_s(n)&&Q(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _s(n)&&_e(t)?!1:n in e}const La=new WeakMap,Pa=new WeakMap,Lr=Symbol("_moveCb"),ws=Symbol("_enterCb"),ld=e=>(delete e.props.mode,e),ad=ld({name:"TransitionGroup",props:Te({},Ia,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=ti(),r=Xl();let i,o;return ia(()=>{if(!i.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!dd(i[0].el,t.vnode.el,s)){i=[];return}i.forEach(cd),i.forEach(ud);const l=i.filter(fd);Yi(t.vnode.el),l.forEach(a=>{const u=a.el,c=u.style;gn(u,s),c.transform=c.webkitTransform=c.transitionDuration="";const f=u[Lr]=d=>{d&&d.target!==u||(!d||d.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",f),u[Lr]=null,Un(u,s))};u.addEventListener("transitionend",f)}),i=[]}),()=>{const s=ie(e),l=Oa(s);let a=s.tag||Pe;if(i=[],o)for(let u=0;u<o.length;u++){const c=o[u];c.el&&c.el instanceof Element&&(i.push(c),ct(c,Qt(c,l,r,t)),La.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}o=n.default?go(n.default()):[];for(let u=0;u<o.length;u++){const c=o[u];c.key!=null&&ct(c,Qt(c,l,r,t))}return Ce(a,null,o)}}}),sy=ad;function cd(e){const n=e.el;n[Lr]&&n[Lr](),n[ws]&&n[ws]()}function ud(e){Pa.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function fd(e){const n=La.get(e),t=Pa.get(e),r=n.left-t.left,i=n.top-t.top;if(r||i){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${r}px,${i}px)`,o.transitionDuration="0s",e}}function dd(e,n,t){const r=e.cloneNode(),i=e[St];i&&i.forEach(l=>{l.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(r);const{hasTransform:s}=ka(r);return o.removeChild(r),s}const Cs=e=>{const n=e.props["onUpdate:modelValue"]||!1;return J(n)?t=>mr(n,t):n};function hd(e){e.target.composing=!0}function As(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const wi=Symbol("_assign");function Ss(e,n,t){return n&&(e=e.trim()),t&&(e=so(e)),e}const Ma={created(e,{modifiers:{lazy:n,trim:t,number:r}},i){e[wi]=Cs(i);const o=r||i.props&&i.props.type==="number";gt(e,n?"change":"input",s=>{s.target.composing||e[wi](Ss(e.value,t,o))}),(t||o)&&gt(e,"change",()=>{e.value=Ss(e.value,t,o)}),n||(gt(e,"compositionstart",hd),gt(e,"compositionend",As),gt(e,"change",As))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:r,trim:i,number:o}},s){if(e[wi]=Cs(s),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?so(e.value):e.value,a=n??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&n===t||i&&e.value.trim()===a)||(e.value=a))}},pd=["ctrl","shift","alt","meta"],md={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>pd.some(t=>e[`${t}Key`]&&!n.includes(t))},Ts=(e,n)=>{const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(i,...o)=>{for(let s=0;s<n.length;s++){const l=md[n[s]];if(l&&l(i,n))return}return e(i,...o)})},gd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vd=(e,n)=>{const t=e._withKeys||(e._withKeys={}),r=n.join(".");return t[r]||(t[r]=i=>{if(!("key"in i))return;const o=Jn(i.key);if(n.some(s=>s===o||gd[s]===o))return e(i)})},yd=Te({patchProp:od},jf);let Es;function bd(){return Es||(Es=xf(yd))}const xd=(...e)=>{const n=bd().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=wd(r);if(!i)return;const o=n._component;!Q(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,_d(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n};function _d(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wd(e){return _e(e)?document.querySelector(e):e}var Cd=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ra;const ii=e=>Ra=e,Da=Symbol();function $i(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qt||(qt={}));function Ad(){const e=_l(!0),n=e.run(()=>ye({}));let t=[],r=[];const i=po({install(o){ii(i),i._a=o,o.provide(Da,i),o.config.globalProperties.$pinia=i,r.forEach(s=>t.push(s)),r=[]},use(o){return!this._a&&!Cd?r.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const Na=()=>{};function Is(e,n,t,r=Na){e.push(n);const i=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),r())};return!t&&wl()&&nu(i),i}function dt(e,...n){e.slice().forEach(t=>{t(...n)})}const Sd=e=>e(),Os=Symbol(),Ci=Symbol();function qi(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],i=e[t];$i(i)&&$i(r)&&e.hasOwnProperty(t)&&!Ae(r)&&!In(r)?e[t]=qi(i,r):e[t]=r}return e}const Td=Symbol();function Ed(e){return!$i(e)||!e.hasOwnProperty(Td)}const{assign:Fn}=Object;function Id(e){return!!(Ae(e)&&e.effect)}function Od(e,n,t,r){const{state:i,actions:o,getters:s}=n,l=t.state.value[e];let a;function u(){l||(t.state.value[e]=i?i():{});const c=Au(t.state.value[e]);return Fn(c,o,Object.keys(s||{}).reduce((f,d)=>(f[d]=po(Fe(()=>{ii(t);const p=t._s.get(e);return s[d].call(p,p)})),f),{}))}return a=Ua(e,u,n,t,r,!0),a}function Ua(e,n,t={},r,i,o){let s;const l=Fn({actions:{}},t),a={deep:!0};let u,c,f=[],d=[],p;const g=r.state.value[e];!o&&!g&&(r.state.value[e]={}),ye({});let y;function S(F){let E;u=c=!1,typeof F=="function"?(F(r.state.value[e]),E={type:qt.patchFunction,storeId:e,events:p}):(qi(r.state.value[e],F),E={type:qt.patchObject,payload:F,storeId:e,events:p});const H=y=Symbol();Jr().then(()=>{y===H&&(u=!0)}),c=!0,dt(f,E,r.state.value[e])}const L=o?function(){const{state:E}=t,H=E?E():{};this.$patch(X=>{Fn(X,H)})}:Na;function w(){s.stop(),f=[],d=[],r._s.delete(e)}const N=(F,E="")=>{if(Os in F)return F[Ci]=E,F;const H=function(){ii(r);const X=Array.from(arguments),C=[],Z=[];function be(K){C.push(K)}function le(K){Z.push(K)}dt(d,{args:X,name:H[Ci],store:b,after:be,onError:le});let ee;try{ee=F.apply(this&&this.$id===e?this:b,X)}catch(K){throw dt(Z,K),K}return ee instanceof Promise?ee.then(K=>(dt(C,K),K)).catch(K=>(dt(Z,K),Promise.reject(K))):(dt(C,ee),ee)};return H[Os]=!0,H[Ci]=E,H},T={_p:r,$id:e,$onAction:Is.bind(null,d),$patch:S,$reset:L,$subscribe(F,E={}){const H=Is(f,F,E.detached,()=>X()),X=s.run(()=>st(()=>r.state.value[e],C=>{(E.flush==="sync"?c:u)&&F({storeId:e,type:qt.direct,events:p},C)},Fn({},a,E)));return H},$dispose:w},b=lr(T);r._s.set(e,b);const Y=(r._a&&r._a.runWithContext||Sd)(()=>r._e.run(()=>(s=_l()).run(()=>n({action:N}))));for(const F in Y){const E=Y[F];if(Ae(E)&&!Id(E)||In(E))o||(g&&Ed(E)&&(Ae(E)?E.value=g[F]:qi(E,g[F])),r.state.value[e][F]=E);else if(typeof E=="function"){const H=N(E,F);Y[F]=H,l.actions[F]=E}}return Fn(b,Y),Fn(ie(b),Y),Object.defineProperty(b,"$state",{get:()=>r.state.value[e],set:F=>{S(E=>{Fn(E,F)})}}),r._p.forEach(F=>{Fn(b,s.run(()=>F({store:b,app:r._a,pinia:r,options:l})))}),g&&o&&t.hydrate&&t.hydrate(b.$state,g),u=!0,c=!0,b}/*! #__NO_SIDE_EFFECTS__ */function kd(e,n,t){let r,i;const o=typeof n=="function";typeof e=="string"?(r=e,i=o?t:n):(i=e,r=e.id);function s(l,a){const u=tf();return l=l||(u?rn(Da,null):null),l&&ii(l),l=Ra,l._s.has(r)||(o?Ua(r,n,i,l):Od(r,i,l)),l._s.get(r)}return s.$id=r,s}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const vt=typeof document<"u";function Fa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ld(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Fa(e.default)}const ae=Object.assign;function Ai(e,n){const t={};for(const r in n){const i=n[r];t[r]=dn(i)?i.map(e):e(i)}return t}const Kt=()=>{},dn=Array.isArray;function ks(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const Ba=/#/g,Pd=/&/g,Md=/\//g,Rd=/=/g,Dd=/\?/g,Ha=/\+/g,Nd=/%5B/g,Ud=/%5D/g,Ga=/%5E/g,Fd=/%60/g,ja=/%7B/g,Bd=/%7C/g,Va=/%7D/g,Hd=/%20/g;function So(e){return e==null?"":encodeURI(""+e).replace(Bd,"|").replace(Nd,"[").replace(Ud,"]")}function Gd(e){return So(e).replace(ja,"{").replace(Va,"}").replace(Ga,"^")}function Ki(e){return So(e).replace(Ha,"%2B").replace(Hd,"+").replace(Ba,"%23").replace(Pd,"%26").replace(Fd,"`").replace(ja,"{").replace(Va,"}").replace(Ga,"^")}function jd(e){return Ki(e).replace(Rd,"%3D")}function Vd(e){return So(e).replace(Ba,"%23").replace(Dd,"%3F")}function Wd(e){return Vd(e).replace(Md,"%2F")}function tr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Yd=/\/$/,$d=e=>e.replace(Yd,"");function Si(e,n,t="/"){let r,i={},o="",s="";const l=n.indexOf("#");let a=n.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(r=n.slice(0,a),o=n.slice(a,l>0?l:n.length),i=e(o.slice(1))),l>=0&&(r=r||n.slice(0,l),s=n.slice(l,n.length)),r=Xd(r??n,t),{fullPath:r+o+s,path:r,query:i,hash:tr(s)}}function qd(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Ls(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Kd(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Tt(n.matched[r],t.matched[i])&&Wa(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Tt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Wa(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Jd(e[t],n[t]))return!1;return!0}function Jd(e,n){return dn(e)?Ps(e,n):dn(n)?Ps(n,e):e===n}function Ps(e,n){return dn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Xd(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=t.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ji=function(e){return e.pop="pop",e.push="push",e}({}),Ti=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function zd(e){if(!e)if(vt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$d(e)}const Qd=/^[^#]+#/;function Zd(e,n){return e.replace(Qd,"#")+n}function eh(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const oi=()=>({left:window.scrollX,top:window.scrollY});function nh(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=eh(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ms(e,n){return(history.state?history.state.position-n:-1)+e}const Xi=new Map;function th(e,n){Xi.set(e,n)}function rh(e){const n=Xi.get(e);return Xi.delete(e),n}function ih(e){return typeof e=="string"||e&&typeof e=="object"}function Ya(e){return typeof e=="string"||typeof e=="symbol"}let we=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const $a=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function Et(e,n){return ae(new Error,{type:e,[$a]:!0},n)}function Cn(e,n){return e instanceof Error&&$a in e&&(n==null||!!(e.type&n))}const oh=["params","query","hash"];function sh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of oh)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function lh(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const i=t[r].replace(Ha," "),o=i.indexOf("="),s=tr(o<0?i:i.slice(0,o)),l=o<0?null:tr(i.slice(o+1));if(s in n){let a=n[s];dn(a)||(a=n[s]=[a]),a.push(l)}else n[s]=l}return n}function Rs(e){let n="";for(let t in e){const r=e[t];if(t=jd(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(dn(r)?r.map(i=>i&&Ki(i)):[r&&Ki(r)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+t,i!=null&&(n+="="+i))})}return n}function ah(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=dn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const ch=Symbol(""),Ds=Symbol(""),si=Symbol(""),To=Symbol(""),zi=Symbol("");function Pt(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function jn(e,n,t,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const u=d=>{d===!1?a(Et(we.NAVIGATION_ABORTED,{from:t,to:n})):d instanceof Error?a(d):ih(d)?a(Et(we.NAVIGATION_GUARD_REDIRECT,{from:n,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),l())},c=o(()=>e.call(r&&r.instances[i],n,t,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(d=>a(d))})}function Ei(e,n,t,r,i=o=>o()){const o=[];for(const s of e)for(const l in s.components){let a=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Fa(a)){const u=(a.__vccOpts||a)[n];u&&o.push(jn(u,t,r,s,l,i))}else{let u=a();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const f=Ld(c)?c.default:c;s.mods[l]=c,s.components[l]=f;const d=(f.__vccOpts||f)[n];return d&&jn(d,t,r,s,l,i)()}))}}return o}function uh(e,n){const t=[],r=[],i=[],o=Math.max(n.matched.length,e.matched.length);for(let s=0;s<o;s++){const l=n.matched[s];l&&(e.matched.find(u=>Tt(u,l))?r.push(l):t.push(l));const a=e.matched[s];a&&(n.matched.find(u=>Tt(u,a))||i.push(a))}return[t,r,i]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let fh=()=>location.protocol+"//"+location.host;function qa(e,n){const{pathname:t,search:r,hash:i}=n,o=e.indexOf("#");if(o>-1){let s=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),Ls(l,"")}return Ls(t,e)+r+i}function dh(e,n,t,r){let i=[],o=[],s=null;const l=({state:d})=>{const p=qa(e,location),g=t.value,y=n.value;let S=0;if(d){if(t.value=p,n.value=d,s&&s===g){s=null;return}S=y?d.position-y.position:0}else r(p);i.forEach(L=>{L(t.value,g,{delta:S,type:Ji.pop,direction:S?S>0?Ti.forward:Ti.back:Ti.unknown})})};function a(){s=t.value}function u(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return o.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(ae({},d.state,{scroll:oi()}),"")}}function f(){for(const d of o)d();o=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:f}}function Ns(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?oi():null}}function hh(e){const{history:n,location:t}=window,r={value:qa(e,t)},i={value:n.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(a,u,c){const f=e.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+a:fh()+e+a;try{n[c?"replaceState":"pushState"](u,"",d),i.value=u}catch(p){console.error(p),t[c?"replace":"assign"](d)}}function s(a,u){o(a,ae({},n.state,Ns(i.value.back,a,i.value.forward,!0),u,{position:i.value.position}),!0),r.value=a}function l(a,u){const c=ae({},i.value,n.state,{forward:a,scroll:oi()});o(c.current,c,!0),o(a,ae({},Ns(r.value,a,null),{position:c.position+1},u),!1),r.value=a}return{location:r,state:i,push:l,replace:s}}function ph(e){e=zd(e);const n=hh(e),t=dh(e,n.state,n.location,n.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=ae({location:"",base:e,go:r,createHref:Zd.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function mh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ph(e)}let rt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Oe=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Oe||{});const gh={type:rt.Static,value:""},vh=/[a-zA-Z0-9_]/;function yh(e){if(!e)return[[]];if(e==="/")return[[gh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=Oe.Static,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let l=0,a,u="",c="";function f(){u&&(t===Oe.Static?o.push({type:rt.Static,value:u}):t===Oe.Param||t===Oe.ParamRegExp||t===Oe.ParamRegExpEnd?(o.length>1&&(a==="*"||a==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:rt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):n("Invalid state to consume buffer"),u="")}function d(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&t!==Oe.ParamRegExp){r=t,t=Oe.EscapeNext;continue}switch(t){case Oe.Static:a==="/"?(u&&f(),s()):a===":"?(f(),t=Oe.Param):d();break;case Oe.EscapeNext:d(),t=r;break;case Oe.Param:a==="("?t=Oe.ParamRegExp:vh.test(a)?d():(f(),t=Oe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case Oe.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:t=Oe.ParamRegExpEnd:c+=a;break;case Oe.ParamRegExpEnd:f(),t=Oe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:n("Unknown state");break}}return t===Oe.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),f(),s(),i}const Us="[^/]+?",bh={sensitive:!1,strict:!1,start:!0,end:!0};var Ve=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Ve||{});const xh=/[.+*?^${}()[\]/\\]/g;function _h(e,n){const t=ae({},bh,n),r=[];let i=t.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[Ve.Root];t.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=Ve.Segment+(t.sensitive?Ve.BonusCaseSensitive:0);if(d.type===rt.Static)f||(i+="/"),i+=d.value.replace(xh,"\\$&"),p+=Ve.Static;else if(d.type===rt.Param){const{value:g,repeatable:y,optional:S,regexp:L}=d;o.push({name:g,repeatable:y,optional:S});const w=L||Us;if(w!==Us){p+=Ve.BonusCustomRegExp;try{`${w}`}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+T.message)}}let N=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(N=S&&u.length<2?`(?:/${N})`:"/"+N),S&&(N+="?"),i+=N,p+=Ve.Dynamic,S&&(p+=Ve.BonusOptional),y&&(p+=Ve.BonusRepeatable),w===".*"&&(p+=Ve.BonusWildcard)}c.push(p)}r.push(c)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=Ve.BonusStrict}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function l(u){const c=u.match(s),f={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",g=o[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function a(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of d)if(p.type===rt.Static)c+=p.value;else if(p.type===rt.Param){const{value:g,repeatable:y,optional:S}=p,L=g in u?u[g]:"";if(dn(L)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=dn(L)?L.join("/"):L;if(!w)if(S)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);c+=w}}return c||"/"}return{re:s,score:r,keys:o,parse:l,stringify:a}}function wh(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===Ve.Static+Ve.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===Ve.Static+Ve.Segment?1:-1:0}function Ka(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const o=wh(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(Fs(r))return 1;if(Fs(i))return-1}return i.length-r.length}function Fs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Ch={strict:!1,end:!0,sensitive:!1};function Ah(e,n,t){const r=_h(yh(e.path),t),i=ae(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Sh(e,n){const t=[],r=new Map;n=ks(Ch,n);function i(f){return r.get(f)}function o(f,d,p){const g=!p,y=Hs(f);y.aliasOf=p&&p.record;const S=ks(n,f),L=[y];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of T)L.push(Hs(ae({},y,{components:p?p.record.components:y.components,path:b,aliasOf:p?p.record:y})))}let w,N;for(const T of L){const{path:b}=T;if(d&&b[0]!=="/"){const G=d.record.path,Y=G[G.length-1]==="/"?"":"/";T.path=d.record.path+(b&&Y+b)}if(w=Ah(T,d,S),p?p.alias.push(w):(N=N||w,N!==w&&N.alias.push(w),g&&f.name&&!Gs(w)&&s(f.name)),Ja(w)&&a(w),y.children){const G=y.children;for(let Y=0;Y<G.length;Y++)o(G[Y],w,p&&p.children[Y])}p=p||w}return N?()=>{s(N)}:Kt}function s(f){if(Ya(f)){const d=r.get(f);d&&(r.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function l(){return t}function a(f){const d=Ih(f,t);t.splice(d,0,f),f.record.name&&!Gs(f)&&r.set(f.record.name,f)}function u(f,d){let p,g={},y,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Et(we.MATCHER_NOT_FOUND,{location:f});S=p.record.name,g=ae(Bs(d.params,p.keys.filter(N=>!N.optional).concat(p.parent?p.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),f.params&&Bs(f.params,p.keys.map(N=>N.name))),y=p.stringify(g)}else if(f.path!=null)y=f.path,p=t.find(N=>N.re.test(y)),p&&(g=p.parse(y),S=p.record.name);else{if(p=d.name?r.get(d.name):t.find(N=>N.re.test(d.path)),!p)throw Et(we.MATCHER_NOT_FOUND,{location:f,currentLocation:d});S=p.record.name,g=ae({},d.params,f.params),y=p.stringify(g)}const L=[];let w=p;for(;w;)L.unshift(w.record),w=w.parent;return{name:S,path:y,params:g,matched:L,meta:Eh(L)}}e.forEach(f=>o(f));function c(){t.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:s,clearRoutes:c,getRoutes:l,getRecordMatcher:i}}function Bs(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Hs(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Th(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Th(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function Gs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eh(e){return e.reduce((n,t)=>ae(n,t.meta),{})}function Ih(e,n){let t=0,r=n.length;for(;t!==r;){const o=t+r>>1;Ka(e,n[o])<0?r=o:t=o+1}const i=Oh(e);return i&&(r=n.lastIndexOf(i,r-1)),r}function Oh(e){let n=e;for(;n=n.parent;)if(Ja(n)&&Ka(e,n)===0)return n}function Ja({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function js(e){const n=rn(si),t=rn(To),r=Fe(()=>{const a=ve(e.to);return n.resolve(a)}),i=Fe(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],f=t.matched;if(!c||!f.length)return-1;const d=f.findIndex(Tt.bind(null,c));if(d>-1)return d;const p=Vs(a[u-2]);return u>1&&Vs(c)===p&&f[f.length-1].path!==p?f.findIndex(Tt.bind(null,a[u-2])):d}),o=Fe(()=>i.value>-1&&Rh(t.params,r.value.params)),s=Fe(()=>i.value>-1&&i.value===t.matched.length-1&&Wa(t.params,r.value.params));function l(a={}){if(Mh(a)){const u=n[ve(e.replace)?"replace":"push"](ve(e.to)).catch(Kt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:o,isExactActive:s,navigate:l}}function kh(e){return e.length===1?e[0]:e}const Lh=na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:js,setup(e,{slots:n}){const t=lr(js(e)),{options:r}=rn(si),i=Fe(()=>({[Ws(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ws(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&kh(n.default(t));return e.custom?o:Ao("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),Ph=Lh;function Mh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Rh(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!dn(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function Vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ws=(e,n,t)=>e??n??t,Dh=na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=rn(zi),i=Fe(()=>e.route||r.value),o=rn(Ds,0),s=Fe(()=>{let u=ve(o);const{matched:c}=i.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),l=Fe(()=>i.value.matched[s.value]);vr(Ds,Fe(()=>s.value+1)),vr(ch,l),vr(zi,i);const a=ye();return st(()=>[a.value,l.value,e.name],([u,c,f],[d,p,g])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Tt(c,p)||!d)&&(c.enterCallbacks[f]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,c=e.name,f=l.value,d=f&&f.components[c];if(!d)return Ys(t.default,{Component:d,route:u});const p=f.props[c],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,S=Ao(d,ae({},g,n,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[c]=null)},ref:a}));return Ys(t.default,{Component:S,route:u})||S}}});function Ys(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Nh=Dh;function Uh(e){const n=Sh(e.routes,e),t=e.parseQuery||lh,r=e.stringifyQuery||Rs,i=e.history,o=Pt(),s=Pt(),l=Pt(),a=_u(Dn);let u=Dn;vt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ai.bind(null,_=>""+_),f=Ai.bind(null,Wd),d=Ai.bind(null,tr);function p(_,B){let D,$;return Ya(_)?(D=n.getRecordMatcher(_),$=B):$=_,n.addRoute($,D)}function g(_){const B=n.getRecordMatcher(_);B&&n.removeRoute(B)}function y(){return n.getRoutes().map(_=>_.record)}function S(_){return!!n.getRecordMatcher(_)}function L(_,B){if(B=ae({},B||a.value),typeof _=="string"){const m=Si(t,_,B.path),v=n.resolve({path:m.path},B),I=i.createHref(m.fullPath);return ae(m,v,{params:d(v.params),hash:tr(m.hash),redirectedFrom:void 0,href:I})}let D;if(_.path!=null)D=ae({},_,{path:Si(t,_.path,B.path).path});else{const m=ae({},_.params);for(const v in m)m[v]==null&&delete m[v];D=ae({},_,{params:f(m)}),B.params=f(B.params)}const $=n.resolve(D,B),ne=_.hash||"";$.params=c(d($.params));const xe=qd(r,ae({},_,{hash:Gd(ne),path:$.path})),h=i.createHref(xe);return ae({fullPath:xe,hash:ne,query:r===Rs?ah(_.query):_.query||{}},$,{redirectedFrom:void 0,href:h})}function w(_){return typeof _=="string"?Si(t,_,a.value.path):ae({},_)}function N(_,B){if(u!==_)return Et(we.NAVIGATION_CANCELLED,{from:B,to:_})}function T(_){return Y(_)}function b(_){return T(ae(w(_),{replace:!0}))}function G(_,B){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:$}=D;let ne=typeof $=="function"?$(_,B):$;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=w(ne):{path:ne},ne.params={}),ae({query:_.query,hash:_.hash,params:ne.path!=null?{}:_.params},ne)}}function Y(_,B){const D=u=L(_),$=a.value,ne=_.state,xe=_.force,h=_.replace===!0,m=G(D,$);if(m)return Y(ae(w(m),{state:typeof m=="object"?ae({},ne,m.state):ne,force:xe,replace:h}),B||D);const v=D;v.redirectedFrom=B;let I;return!xe&&Kd(r,$,D)&&(I=Et(we.NAVIGATION_DUPLICATED,{to:v,from:$}),Ie($,$,!0,!1)),(I?Promise.resolve(I):H(v,$)).catch(x=>Cn(x)?Cn(x,we.NAVIGATION_GUARD_REDIRECT)?x:de(x):oe(x,v,$)).then(x=>{if(x){if(Cn(x,we.NAVIGATION_GUARD_REDIRECT))return Y(ae({replace:h},w(x.to),{state:typeof x.to=="object"?ae({},ne,x.to.state):ne,force:xe}),B||v)}else x=C(v,$,!0,h,ne);return X(v,$,x),x})}function F(_,B){const D=N(_,B);return D?Promise.reject(D):Promise.resolve()}function E(_){const B=_n.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(_):_()}function H(_,B){let D;const[$,ne,xe]=uh(_,B);D=Ei($.reverse(),"beforeRouteLeave",_,B);for(const m of $)m.leaveGuards.forEach(v=>{D.push(jn(v,_,B))});const h=F.bind(null,_,B);return D.push(h),He(D).then(()=>{D=[];for(const m of o.list())D.push(jn(m,_,B));return D.push(h),He(D)}).then(()=>{D=Ei(ne,"beforeRouteUpdate",_,B);for(const m of ne)m.updateGuards.forEach(v=>{D.push(jn(v,_,B))});return D.push(h),He(D)}).then(()=>{D=[];for(const m of xe)if(m.beforeEnter)if(dn(m.beforeEnter))for(const v of m.beforeEnter)D.push(jn(v,_,B));else D.push(jn(m.beforeEnter,_,B));return D.push(h),He(D)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),D=Ei(xe,"beforeRouteEnter",_,B,E),D.push(h),He(D))).then(()=>{D=[];for(const m of s.list())D.push(jn(m,_,B));return D.push(h),He(D)}).catch(m=>Cn(m,we.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function X(_,B,D){l.list().forEach($=>E(()=>$(_,B,D)))}function C(_,B,D,$,ne){const xe=N(_,B);if(xe)return xe;const h=B===Dn,m=vt?history.state:{};D&&($||h?i.replace(_.fullPath,ae({scroll:h&&m&&m.scroll},ne)):i.push(_.fullPath,ne)),a.value=_,Ie(_,B,D,h),de()}let Z;function be(){Z||(Z=i.listen((_,B,D)=>{if(!hn.listening)return;const $=L(_),ne=G($,hn.currentRoute.value);if(ne){Y(ae(ne,{replace:!0,force:!0}),$).catch(Kt);return}u=$;const xe=a.value;vt&&th(Ms(xe.fullPath,D.delta),oi()),H($,xe).catch(h=>Cn(h,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?h:Cn(h,we.NAVIGATION_GUARD_REDIRECT)?(Y(ae(w(h.to),{force:!0}),$).then(m=>{Cn(m,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!D.delta&&D.type===Ji.pop&&i.go(-1,!1)}).catch(Kt),Promise.reject()):(D.delta&&i.go(-D.delta,!1),oe(h,$,xe))).then(h=>{h=h||C($,xe,!1),h&&(D.delta&&!Cn(h,we.NAVIGATION_CANCELLED)?i.go(-D.delta,!1):D.type===Ji.pop&&Cn(h,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),X($,xe,h)}).catch(Kt)}))}let le=Pt(),ee=Pt(),K;function oe(_,B,D){de(_);const $=ee.list();return $.length?$.forEach(ne=>ne(_,B,D)):console.error(_),Promise.reject(_)}function V(){return K&&a.value!==Dn?Promise.resolve():new Promise((_,B)=>{le.add([_,B])})}function de(_){return K||(K=!_,be(),le.list().forEach(([B,D])=>_?D(_):B()),le.reset()),_}function Ie(_,B,D,$){const{scrollBehavior:ne}=e;if(!vt||!ne)return Promise.resolve();const xe=!D&&rh(Ms(_.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return Jr().then(()=>ne(_,B,xe)).then(h=>h&&nh(h)).catch(h=>oe(h,_,B))}const Se=_=>i.go(_);let sn;const _n=new Set,hn={currentRoute:a,listening:!0,addRoute:p,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:S,getRoutes:y,resolve:L,options:e,push:T,replace:b,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:o.add,beforeResolve:s.add,afterEach:l.add,onError:ee.add,isReady:V,install(_){_.component("RouterLink",Ph),_.component("RouterView",Nh),_.config.globalProperties.$router=hn,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(a)}),vt&&!sn&&a.value===Dn&&(sn=!0,T(i.location).catch($=>{}));const B={};for(const $ in Dn)Object.defineProperty(B,$,{get:()=>a.value[$],enumerable:!0});_.provide(si,hn),_.provide(To,Ul(B)),_.provide(zi,a);const D=_.unmount;_n.add(_),_.unmount=function(){_n.delete(_),_n.size<1&&(u=Dn,Z&&Z(),Z=null,a.value=Dn,sn=!1,K=!1),D()}}};function He(_){return _.reduce((B,D)=>B.then(()=>E(D)),Promise.resolve())}return hn}function Fh(){return rn(si)}function Bh(e){return rn(To)}const Eo=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},Hh={};function Gh(e,n){const t=Fi("router-view");return te(),er(t)}const jh=Eo(Hh,[["render",Gh]]),Vh=`title: 个人\r
type: page\r
icon: 👤\r
order: 4\r
description: 关于我\r
`,Wh=`title: 文章\r
type: list\r
icon: 📝\r
order: 2\r
description: 分享技术与生活\r
`,Yh=`title: 课堂\r
type: iframe\r
link: https://xiajie321.github.io/GridCo\r
icon: 🏫\r
order: 3\r
description: 课堂演示内容\r
`,$h=`title: 主页\r
type: home\r
icon: 🏠\r
order: 1\r
description: 欢迎来到我的像素世界\r
`,qh=`# 关于我\r
\r
一个喜欢研究Unity的游戏爱好者,仅此而已。\r
\r
## 联系方式\r
\r
- GitHub: [xiajie321](https://github.com/xiajie321)\r
- Email: 3113959631@QQ.com\r
- QQ: 3113959631`,Kh=`---\r
title: 性能优化-GC篇\r
date: 2025-12-05\r
tags: [Unity, 性能优化, GC]\r
---\r
\r
# 性能优化-GC篇\r
\r
在Unity开发中，垃圾回收（Garbage Collection，简称GC）是性能优化中不可忽视的一环。GC引起的卡顿（Spike）往往是造成游戏帧率不稳定的主要原因之一。本文将深入剖析GC的原理，并提供实用的优化策略。\r
\r
# 一、数据类型特性\r
\r
理解C#中的数据类型是理解内存管理的基础。C#的数据类型主要分为两大类：**值类型**和**引用类型**。\r
\r
## 1.1 值类型 (Value Types)\r
\r
* **定义**：变量直接包含其数据。\r
* **存储位置**：通常分配在**栈（Stack）**上（除非它是类的一个字段，此时随类存储在堆上）。\r
* **特点**：\r
  * 分配和释放速度非常快。\r
  * 生命周期随作用域结束而结束，**不需要GC管理**。\r
  * 赋值时进行数据复制。\r
* **常见类型**：\`int\`, \`float\`, \`bool\`, \`struct\` (如 \`Vector3\`, \`Quaternion\`), \`enum\`。\r
\r
## 1.2 引用类型 (Reference Types)\r
\r
* **定义**：变量存储的是指向数据的**内存地址（引用）**，实际数据存储在堆上。\r
* **存储位置**：实际对象分配在**托管堆（Managed Heap）**上，栈上只存储引用地址。\r
* **特点**：\r
  * 分配需要从堆中寻找合适内存块，速度较慢。\r
  * 由**GC负责回收**。\r
  * 赋值时复制的是引用地址，多个变量可能指向同一个对象。\r
* **常见类型**：\`class\`, \`string\`, \`array\`, \`delegate\`, \`interface\`。\r
\r
**内存关系图解：**\r
\r
| 特性       | 栈 (Stack)                                               | 托管堆 (Managed Heap)           |\r
|:-------- |:------------------------------------------------------- |:---------------------------- |\r
| **形象比喻** | 随身携带的**背包**                                             | 远处的**大仓库**                   |\r
| **存储内容** | 值类型 (\`int\`, \`struct\`)、引用类型的**地址**                       | 引用类型的**实例** (\`class object\`) |\r
| **存取速度** | 极快 (LIFO)                                               | 较慢 (需要寻址)                    |\r
| **管理方式** | 自动管理 (作用域结束即销毁)                                         | **GC 管理** (垃圾回收器负责)          |\r
| **示例**   | \`int a = 10;\`<br>\`Vector3 pos;\`<br>\`ClassA ref;\` (只是地址) | \`new ClassA();\` (实际对象)       |\r
\r
> **引用关系说明**：\r
> 如上表所示，引用类型的变量（如 \`ClassA ref\`）本身是在**栈**上的，它存储的只是一个**地址**（就像一张提货单）。而实际的对象数据（\`new ClassA()\`）是在**堆**上的。\r
> 当你访问 \`ref.data\` 时，实际上是拿着栈上的地址，去堆里找到对应的数据。\r
> \r
> **比喻说明**：\r
> \r
> * **栈**就像你的**背包**，\`int\` 和 \`struct\` 是直接装在背包里的现金和工具，取用非常快。\r
> * **堆**就像远处的**仓库**，\`class\` 对象（如大电视）太大装不进背包，只能放在仓库里。\r
> * **引用**就是你背包里的一张**提货单**（地址），上面写着电视机在仓库的哪个位置。\r
\r
## 1.3 结构体 vs 类 (Struct vs Class)\r
\r
* **选择结构体 (struct) 当**：\r
  1. 对象较小（小于 16 字节）。\r
  2. 生命周期短。\r
  3. 不需要继承。\r
  4. 不需要频繁作为参数传递（避免值拷贝开销）。\r
* **选择类 (class) 当**：\r
  1. 对象较大。\r
  2. 需要继承或多态。\r
  3. 需要在多处共享同一份数据。\r
\r
# 二、内存基础概念\r
\r
## 2.1 内存区域划分\r
\r
在Unity应用运行过程中，内存主要被划分为三个区域：\r
\r
### 1. 栈 (Stack)\r
\r
* **用途**：用于存储局部变量、参数传递和函数调用上下文。\r
* **管理方式**：由CPU自动管理，先进后出（LIFO）。\r
* **性能**：存取速度极快，不会产生内存碎片。\r
* **GC关联**：**与GC无关**。\r
\r
### 2. 托管堆 (Managed Heap)\r
\r
* **用途**：存储所有被分配的引用类型对象（如 \`new GameObject()\`, \`string\`, \`List<T>\`）。\r
* **管理方式**：由Mono/IL2CPP虚拟机的内存管理器管理。\r
* **性能**：分配速度取决于内存碎片的程度，比栈慢。\r
* **GC关联**：**GC的主要工作区域**。当堆内存不足或达到阈值时，触发GC。\r
\r
### 3. 原生堆 (Native Heap / Unmanaged Heap)\r
\r
* **用途**：存储Unity底层C++引擎使用的资源，如 \`Texture\` 数据, \`Mesh\` 顶点数据, \`AudioClip\` 等。\r
* **管理方式**：需要手动管理或由Unity引擎内部管理。通常通过 \`Destroy\` 或 \`UnloadUnusedAssets\` 释放。\r
* **GC关联**：GC不直接管理此区域，但C#层的封装对象（如 \`Texture2D\` 对象本身）在托管堆，如果C#对象被回收，可能会触发底层资源的引用计数减少。\r
\r
## 2.2 核心内存问题：内存碎片\r
\r
### 什么是内存碎片？\r
\r
内存碎片是指内存中存在大量不连续的空闲小块内存，虽然总的空闲内存足够，但无法分配出一块足够大的连续内存空间。\r
\r
**示意图：**\r
\r
\`\`\`text\r
[已占用] [空闲 10MB] [已占用] [空闲 5MB] [已占用] \r
\`\`\`\r
\r
此时如果需要分配一个 **12MB** 的对象，虽然总空闲有 15MB，但因为没有连续的 12MB 空间，分配会失败。\r
\r
**后果**：\r
\r
1. **触发GC**：系统会尝试通过GC清理内存来腾出空间。\r
2. **堆扩张**：如果GC后仍然不够，Unity会向操作系统申请更多内存，导致应用内存占用变大，容易被系统杀后台（OOM）。\r
3. **分配失败**：极端情况下导致Crash。\r
\r
# 三、GC核心认知\r
\r
## 3.1 什么是GC\r
\r
GC（Garbage Collection）是自动化内存管理机制。它的核心职责是：\r
\r
1. **根搜索 (Mark)**：从“根”对象（静态变量、栈上的局部变量等）开始遍历，标记所有可达对象。\r
2. **清除 (Sweep)**：扫描整个堆，回收那些未被标记（不可达）的对象占用的内存。\r
\r
Unity主要使用 **Boehm-Demers-Weiser GC** (旧版/默认，非分代，非压缩) 和 **Incremental GC** (增量式，新版)。\r
\r
## 3.2 GC的性能影响\r
\r
### GC为什么会导致较大的性能开销？\r
\r
1. **Stop The World (STW)**：\r
   当GC运行时，它通常需要暂停所有的游戏逻辑线程（除了音频等极少数线程）。这是为了防止在分析内存引用关系时，数据还在不断变化。\r
   \r
   * 如果GC耗时 50ms，那么游戏画面就会卡住 50ms，玩家会感觉到明显的掉帧。\r
\r
2. **遍历开销**：\r
   GC需要遍历托管堆上的**所有活动对象**来标记引用关系。堆上对象越多，标记过程越慢。这意味着即使你的“垃圾”很少，只要活着的对象很多，GC依然会慢。\r
\r
3. **内存整理（碎片化）**：\r
   标准的 Boehm GC **不会**进行内存压缩（Compacting），这意味着它只标记空闲内存，不移动对象。这也是导致内存碎片的主要原因。\r
\r
# 四、GC优化策略：减少GC触发\r
\r
优化的核心目标：**减少堆内存分配（Alloc），从而减少GC触发频率和单次GC的耗时。**\r
\r
## 4.1 编辑器配置优化\r
\r
### 启用增量GC (Incremental GC)\r
\r
* **什么是增量GC**：\r
  传统的GC是一次性做完所有工作（标记、清除），导致长时间的卡顿。\r
  增量GC将庞大的GC工作**分摊**到多个帧中执行。每一帧只做一点点GC工作，尽量不超出帧预算。\r
  \r
  * *比喻*：以前是大扫除，一年搞一次，累死人；现在是每天打扫一点，保持屋子整洁。\r
\r
* **配置方法**：\r
  \`Project Settings\` -> \`Player\` -> \`Other Settings\` -> 勾选 \`Use Incremental GC\`。\r
\r
* **注意**：增量GC并不会减少总的GC开销，甚至可能因为写屏障（Write Barrier）稍微增加一点总开销，但它能极大地**平滑帧率**，消除峰值卡顿。\r
\r
## 4.2 代码层面优化：避免频繁创建引用类型\r
\r
### 4.2.1 常见高频问题场景\r
\r
#### 1. String 相关问题\r
\r
\`string\` 是不可变的引用类型。任何对字符串的拼接、修改操作都会创建新的字符串对象。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  void Update() {\r
      // ❌ 每帧都会在堆上创建一个新的字符串对象！\r
      scoreText.text = "Score: " + score; \r
  }\r
  \`\`\`\r
\r
#### 2. 闭包问题\r
\r
在匿名函数或Lambda表达式中使用外部变量时，编译器会自动生成一个类来持有这些变量，从而产生堆分配。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  void Start() {\r
      int id = 100;\r
      // ❌ 捕获了局部变量 id，产生闭包分配\r
      Action action = () => { Debug.Log(id); };\r
      action.Invoke();\r
  }\r
  \`\`\`\r
\r
#### 3. 装箱操作 (Boxing)\r
\r
将值类型赋值给引用类型（如 \`object\` 或接口）时，需要将值类型包装成堆上的对象。这是非常隐蔽的GC来源。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  void LogInfo(object info) { ... }\r
  \r
  void Update() {\r
      int health = 100;\r
      // ❌ int 被装箱为 object，产生GC Alloc\r
      LogInfo(health); \r
  \r
      // ❌ string.Format 的参数也是 object，导致装箱\r
      Debug.Log(string.Format("Health: {0}", health));\r
  \r
      // ❌ 字典的 key 是 struct 但没有实现 IEquatable<T>，也可能导致装箱\r
  }\r
  \`\`\`\r
\r
#### 4. Action实例化（Lambda表达式）\r
\r
即使不捕获变量，将方法作为委托传递时也可能产生分配。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  void Update() {\r
      // ❌ 某些旧版编译器或特定情况下，每次 Update 可能会 new 一个 Action\r
      Func<int> func = () => 1;\r
  }\r
  \`\`\`\r
\r
#### 5. LINQ 使用问题\r
\r
LINQ 虽然简洁，但由于其内部大量使用委托、闭包和迭代器，极易产生大量的垃圾对象。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  void Update() {\r
      // ❌ 极度危险：每帧产生大量中间对象\r
      var item = list.Where(x => x.Active).OrderBy(x => x.Name).First();\r
  }\r
  \`\`\`\r
\r
#### 6. 协程中的内存问题\r
\r
\`yield return new xxx\` 会创建新的等待对象。\r
\r
* **问题代码**：\r
  \r
  \`\`\`csharp\r
  IEnumerator Wait() {\r
      while(true) {\r
          // ❌ 每次循环都 new 一个新对象\r
          yield return new WaitForSeconds(1f);\r
      }\r
  }\r
  \`\`\`\r
\r
#### 7. foreach 循环的潜在问题\r
\r
在旧版Mono编译器（Unity 5.5以前）中，\`foreach\` 会导致枚举器的装箱。虽然新版Unity已修复，但在自定义集合或特定接口调用下仍需注意。如果你将 List 转换为 IEnumerable 进行 foreach，仍然会产生装箱。\r
\r
### 4.2.2 问题解决办法\r
\r
#### 1. 对象池工厂模式 (Object Pooling)\r
\r
对于频繁创建和销毁的对象（如子弹、特效、UI条目），使用对象池进行复用。\r
\r
\`\`\`csharp\r
public class ObjectPool<T> where T : new() {\r
    private Stack<T> _pool = new Stack<T>();\r
\r
    public T Get() {\r
        return _pool.Count > 0 ? _pool.Pop() : new T();\r
    }\r
\r
    public void Return(T item) {\r
        _pool.Push(item);\r
    }\r
}\r
\`\`\`\r
\r
#### 2. 对象实例复用\r
\r
对于集合类（List, Dictionary），避免频繁 \`new\`，而是使用 \`Clear()\`。\r
\r
\`\`\`csharp\r
// ✅ 推荐：成员变量复用\r
private List<int> _tempList = new List<int>(128); // 预设容量\r
\r
void Update() {\r
    _tempList.Clear(); // 0 Alloc\r
    // Fill _tempList...\r
}\r
\`\`\`\r
\r
#### 3. 泛型避免装箱\r
\r
使用泛型接口替代 \`object\` 参数。\r
\r
\`\`\`csharp\r
// ❌ 导致装箱\r
public void Compare(object a, object b) { ... }\r
\r
// ✅ 避免装箱\r
public void Compare<T>(T a, T b) where T : IEquatable<T> { ... }\r
\`\`\`\r
\r
#### 4. 字符串优化\r
\r
* 使用 \`StringBuilder\` 进行复杂拼接。\r
* 对于特定格式（如分数），使用缓存数组或 \`ZString\` 等零分配库。\r
* 使用 \`string.IsNullOrEmpty\` 代替 \`str == ""\`。\r
* **字符串驻留**：对于固定的字符串，直接使用字面量。\r
\r
\`\`\`csharp\r
// ✅ StringBuilder 复用\r
private StringBuilder _sb = new StringBuilder();\r
void Update() {\r
    _sb.Clear();\r
    _sb.Append("Score: ").Append(score);\r
    text.text = _sb.ToString(); // 只有 ToString 产生一次分配\r
}\r
\`\`\`\r
\r
#### 5. 协程优化\r
\r
缓存 \`WaitForSeconds\` 对象。\r
\r
\`\`\`csharp\r
// ✅ 缓存等待对象\r
private WaitForSeconds _wait = new WaitForSeconds(1f);\r
IEnumerator Wait() {\r
    while(true) {\r
        yield return _wait; // 0 Alloc\r
    }\r
}\r
\`\`\`\r
\r
#### 6. Native容器的应用\r
\r
使用 \`Unity.Collections\` 中的 Native 容器（如 \`NativeArray\`, \`NativeList\`）。\r
\r
* **优点**：它们分配在**原生堆（Native Heap）**上，不参与GC扫描，彻底避免托管堆内存碎片。\r
* **注意**：必须手动 \`Dispose\` 释放，否则会内存泄漏。\r
\r
\`\`\`csharp\r
// 需要引入 Unity.Collections\r
NativeArray<int> nums = new NativeArray<int>(100, Allocator.Temp);\r
// 使用 nums ...\r
nums.Dispose(); // 必须手动释放！\r
\`\`\`\r
\r
#### 7. 主动触发 GC (Advanced)\r
\r
在某些场景下（如加载过场、黑屏期间），我们可以**主动调用** \`System.GC.Collect()\`。这虽然会卡顿，但发生在玩家无感知的时刻，可以避免在战斗激烈时触发GC。\r
\r
\`\`\`csharp\r
// 在关卡加载完毕，淡入画面之前\r
System.GC.Collect();\r
\`\`\`\r
`,Jh="",Xh="",zh="",Qh="",Zh="",ep="",np=`---\r
title: Unity Cinemachine 笔记\r
date: 2025-11-28\r
tags: [Unity,技术,笔记]\r
\r
---\r
\r
# Unity Cinemachine 笔记\r
\r
## 1. 简介\r
\r
Cinemachine 是 Unity 官方提供的一套强大的相机系统插件，用于创建复杂的相机行为和过渡效果。它通过 "Virtual Camera"（虚拟相机）的概念，将相机控制逻辑与具体的相机对象分离，使得开发者可以轻松创建各种专业级的相机效果。\r
\r
### 1.1 核心优势\r
\r
- **模块化设计**：通过组合不同的组件实现复杂相机行为\r
- **可视化编辑**：直观的 Inspector 面板和场景视图调试\r
- **平滑过渡**：内置的相机切换和混合系统\r
- **智能跟随**：自动处理目标跟随、旋转和碰撞\r
- **性能优化**：只激活当前使用的相机，减少性能开销\r
- **扩展性强**：支持自定义组件和扩展\r
\r
## 2. 安装与设置\r
\r
### 2.1 安装方式\r
\r
1. **通过 Package Manager 安装**：\r
   \r
   - 打开 Unity Package Manager\r
   - 搜索 "Cinemachine"\r
   - 点击 "Install" 按钮\r
\r
2. **通过 Asset Store 安装**：\r
   \r
   - 访问 Unity Asset Store\r
   - 搜索并下载 Cinemachine\r
   - 导入到项目中\r
\r
### 2.2 基本设置\r
\r
安装完成后，需要进行一些基本设置：\r
\r
1. **创建 Cinemachine Brain**：\r
   \r
   - 在 Main Camera 上添加 \`CinemachineBrain\` 组件\r
   - 这个组件负责管理所有虚拟相机，并将它们的输出渲染到实际相机上\r
\r
2. **配置 Default Blend**：\r
   \r
   - 在 CinemachineBrain 组件中设置默认的相机切换过渡效果\r
   - 可以选择不同的过渡类型（如 Ease In Out、Hard Cut 等）和持续时间\r
\r
## 3. 核心概念\r
\r
### 3.1 Virtual Camera (虚拟相机)\r
\r
虚拟相机是 Cinemachine 的核心概念，它代表了一个相机视角，但本身并不是一个实际的相机对象。虚拟相机包含了相机的所有属性和行为逻辑。\r
\r
- **Priority (优先级)**：决定哪个虚拟相机当前处于激活状态\r
- **Follow (跟随目标)**：虚拟相机跟随的游戏对象\r
- **Look At (观察目标)**：虚拟相机指向的游戏对象\r
- **Lens (镜头)**：控制视野、近裁剪面、远裁剪面等\r
\r
### 3.2 Cinemachine Brain\r
\r
Cinemachine Brain 是连接虚拟相机和实际相机的桥梁：\r
\r
- 管理所有虚拟相机的激活状态\r
- 处理相机之间的过渡效果\r
- 将虚拟相机的输出应用到实际相机上\r
- 支持自定义相机混合逻辑\r
\r
### 3.3 Camera Rig (相机 rig)\r
\r
Camera Rig 是一组相关的虚拟相机的集合，用于实现特定的相机效果。例如，一个第三人称相机 rig 可能包含：\r
\r
- 一个主跟随相机\r
- 一个用于瞄准的相机\r
- 一个用于特写的相机\r
\r
## 4. 主要组件\r
\r
### 4.1 CinemachineVirtualCamera\r
\r
最基本的虚拟相机组件，用于创建简单的跟随和观察相机。\r
\r
**主要属性**：\r
\r
- **Follow**：跟随的目标对象\r
- **Look At**：观察的目标对象\r
- **Body**：控制相机位置的算法（如 Framing Transposer、Hard Lock to Target 等）\r
- **Aim**：控制相机旋转的算法（如 Composer、Group Composer 等）\r
- **Noise**：添加相机抖动效果\r
\r
### 4.2 CinemachineFreeLook\r
\r
用于创建第三人称自由视角相机，允许玩家通过输入控制相机围绕目标旋转。\r
\r
**主要属性**：\r
\r
- **m_LookAt**：观察目标\r
- **m_Follow**：跟随目标\r
- **m_Orbits**：定义相机可以移动的轨道（通常有上、中、下三个轨道）\r
- **m_RecenterToTargetHeading**：是否自动将相机重新对准目标前方\r
\r
### 4.3 CinemachineDollyCart\r
\r
用于创建沿着预设路径移动的相机，通常与 CinemachineDollyTrack 配合使用。\r
\r
**主要属性**：\r
\r
- **m_Path**：相机移动的路径\r
- **m_Position**：相机在路径上的位置\r
- **m_Speed**：相机移动速度\r
- **m_AutoDolly**：是否自动沿着路径移动\r
\r
### 4.4 CinemachineClearShot\r
\r
用于管理多个虚拟相机，根据目标的位置和可见性自动选择最佳相机。\r
\r
**主要属性**：\r
\r
- **m_Shots**：包含的虚拟相机列表\r
- **m_StandbyUpdate**：待机相机的更新模式\r
- **m_SwitchPriority**：相机切换的优先级规则\r
\r
### 4.5 CinemachineStateDrivenCamera\r
\r
根据动画状态机的状态自动切换虚拟相机，用于实现动画驱动的相机切换。\r
\r
**主要属性**：\r
\r
- **m_AnimatedTarget**：动画目标对象\r
- **m_Instructions**：状态与相机的映射关系\r
\r
## 5. 工作原理\r
\r
### 5.1 相机激活机制\r
\r
Cinemachine 使用优先级系统来决定哪个虚拟相机当前处于激活状态：\r
\r
1. 所有虚拟相机根据优先级排序\r
2. 优先级最高的虚拟相机被激活\r
3. 如果多个相机优先级相同，则最近被启用的相机被激活\r
4. 可以通过脚本动态修改相机优先级\r
\r
### 5.2 相机更新流程\r
\r
每个帧，Cinemachine 执行以下更新流程：\r
\r
1. **CinemachineBrain.Update()**：触发所有虚拟相机的更新\r
2. **虚拟相机更新**：\r
   - 处理 Follow 和 Look At 目标\r
   - 应用 Body 算法计算位置\r
   - 应用 Aim 算法计算旋转\r
   - 应用 Noise 效果\r
   - 处理碰撞检测\r
3. **相机混合**：如果有多个相机处于过渡状态，计算混合后的相机属性\r
4. **应用到实际相机**：将最终的相机属性应用到实际相机上\r
\r
### 5.3 碰撞检测\r
\r
Cinemachine 内置了强大的碰撞检测系统：\r
\r
- 可以检测相机与场景中物体的碰撞\r
- 自动调整相机位置，避免被物体遮挡\r
- 支持自定义碰撞层和偏移量\r
- 可以设置软碰撞和硬碰撞\r
\r
## 6. 常用 Body 类型\r
\r
### 6.1 Framing Transposer\r
\r
最常用的 Body 类型，用于创建平滑的跟随效果：\r
\r
- **m_XDamping**：水平方向的阻尼\r
- **m_YDamping**：垂直方向的阻尼\r
- **m_ZDamping**：深度方向的阻尼\r
- **m_DeadZoneWidth**：水平死区，在这个区域内相机不会跟随目标移动\r
- **m_DeadZoneHeight**：垂直死区\r
- **m_BottomOffset**：底部偏移量，用于调整相机高度\r
\r
### 6.2 Hard Lock to Target\r
\r
将相机位置锁定到目标位置，没有任何平滑效果：\r
\r
- 适用于需要精确跟随的场景\r
- 没有额外的调整参数\r
\r
### 6.3 Orbital Transposer\r
\r
允许相机围绕目标旋转，同时保持跟随：\r
\r
- **m_XAxis**：水平旋转设置\r
- **m_YAxis**：垂直旋转设置\r
- **m_DeadZoneWidth**：水平死区\r
- **m_DeadZoneHeight**：垂直死区\r
\r
### 6.4 Transposer\r
\r
基本的跟随算法，提供简单的位置跟随：\r
\r
- **m_XDamping**：水平阻尼\r
- **m_YDamping**：垂直阻尼\r
- **m_ZDamping**：深度阻尼\r
- **m_Offset**：相机与目标的偏移量\r
\r
## 7. 常用 Aim 类型\r
\r
### 7.1 Composer\r
\r
智能的瞄准算法，确保目标始终在相机视野内：\r
\r
- **m_ScreenX**：目标在屏幕上的 X 位置（0-1）\r
- **m_ScreenY**：目标在屏幕上的 Y 位置（0-1）\r
- **m_DeadZoneWidth**：水平死区\r
- **m_DeadZoneHeight**：垂直死区\r
- **m_TrackedObjectOffset**：目标偏移量\r
- **m_BiasX**：水平偏差，用于调整相机旋转速度\r
- **m_BiasY**：垂直偏差\r
\r
### 7.2 Group Composer\r
\r
用于同时瞄准多个目标，确保所有目标都在相机视野内：\r
\r
- **m_TrackedObjects**：要跟踪的目标列表\r
- **m_ScreenX**：目标组在屏幕上的 X 位置\r
- **m_ScreenY**：目标组在屏幕上的 Y 位置\r
- **m_FrameWidth**：目标组的宽度占屏幕的比例\r
- **m_FrameHeight**：目标组的高度占屏幕的比例\r
\r
### 7.3 Hard Look At\r
\r
将相机直接指向目标，没有任何平滑效果：\r
\r
- 适用于需要精确瞄准的场景\r
- 没有额外的调整参数\r
\r
### 7.4 Look At With Damp\r
\r
平滑地将相机指向目标：\r
\r
- **m_Damping**：旋转阻尼值\r
\r
## 8. 相机混合与过渡\r
\r
### 8.1 基本过渡\r
\r
Cinemachine 支持多种相机过渡方式：\r
\r
- **Hard Cut**：立即切换，没有过渡效果\r
- **Ease In Out**：平滑的淡入淡出效果\r
- **Custom**：自定义过渡曲线\r
- **Cubic**：三次方曲线过渡，更自然的加速减速\r
\r
### 8.2 混合空间\r
\r
对于更复杂的相机过渡，可以使用 Cinemachine Mixing Camera：\r
\r
- 支持同时混合多个虚拟相机\r
- 可以通过脚本动态调整每个相机的权重\r
- 适用于创建复杂的相机切换效果，如第三人称到第一人称的平滑过渡\r
\r
### 8.3 自定义过渡\r
\r
可以通过实现 \`ICinemachineBlendListCamera\` 接口来创建自定义的相机过渡效果：\r
\r
\`\`\`csharp\r
public class CustomBlend : MonoBehaviour, ICinemachineBlendListCamera\r
{\r
    // 实现自定义混合逻辑\r
}\r
\`\`\`\r
\r
## 9. 高级功能\r
\r
### 9.1 相机抖动（Noise）\r
\r
Cinemachine 内置了强大的相机抖动系统：\r
\r
- 支持多种预设抖动效果（如爆炸、地震、脚步声等）\r
- 可以自定义抖动曲线\r
- 支持 3D 抖动（位置和旋转）\r
- 可以通过脚本动态触发和控制抖动\r
\r
### 9.2 程序化相机路径\r
\r
使用 Cinemachine Dolly Track 可以创建程序化的相机路径：\r
\r
- 支持贝塞尔曲线和样条曲线\r
- 可以在运行时动态修改路径\r
- 支持路径约束和自动对齐\r
\r
### 9.3 相机碰撞和规避\r
\r
Cinemachine 提供了智能的碰撞检测和规避系统：\r
\r
- **Obstacle Culling**：自动检测并避免相机被物体遮挡\r
- **Soft Zone**：在碰撞前提前调整相机位置\r
- **Hard Zone**：碰撞时强制调整相机位置\r
- 支持自定义碰撞层和偏移量\r
\r
### 9.4 多相机协同工作\r
\r
可以通过以下方式实现多个相机的协同工作：\r
\r
- **CinemachineClearShot**：自动选择最佳相机\r
- **CinemachineStateDrivenCamera**：根据动画状态切换相机\r
- **脚本控制**：通过代码动态切换相机优先级\r
\r
## 10. 性能优化\r
\r
### 10.1 相机激活优化\r
\r
- 只启用当前需要的虚拟相机\r
- 使用 CinemachineBrain.m_UpdateMethod 控制更新频率\r
- 对于不活跃的相机，设置较低的更新频率\r
\r
### 10.2 碰撞检测优化\r
\r
- 减少碰撞检测的频率\r
- 使用简化的碰撞体进行相机碰撞检测\r
- 合理设置碰撞层，只检测相关物体\r
\r
### 10.3 脚本优化\r
\r
- 避免在相机更新中执行复杂的计算\r
- 使用缓存减少重复计算\r
- 考虑使用 Job System 处理复杂的相机逻辑\r
\r
## 11. 使用场景与最佳实践\r
\r
### 11.1 第三人称相机\r
\r
**设置步骤**：\r
\r
1. 创建 CinemachineFreeLook 相机\r
2. 设置 Follow 和 Look At 目标\r
3. 调整轨道参数，设置合适的相机距离和高度\r
4. 配置碰撞检测，避免相机被物体遮挡\r
5. 添加适当的 Noise 效果，增强沉浸感\r
\r
**最佳实践**：\r
\r
- 为不同的游戏状态（如步行、跑步、战斗）创建不同的相机配置\r
- 使用 Dead Zone 避免相机过度敏感\r
- 调整阻尼参数，获得平滑的跟随效果\r
\r
### 11.2 第一人称相机\r
\r
**设置步骤**：\r
\r
1. 创建 CinemachineVirtualCamera\r
2. 将 Follow 和 Look At 设置为玩家角色\r
3. 使用 Hard Lock to Target Body 类型\r
4. 使用 Composer Aim 类型，调整目标位置\r
5. 添加适当的 Noise 效果，模拟呼吸和脚步声\r
\r
**最佳实践**：\r
\r
- 限制相机的垂直旋转范围，避免过度旋转\r
- 添加轻微的相机抖动，增强真实感\r
- 实现武器瞄准模式，切换到不同的相机配置\r
\r
### 11.3 过场动画相机\r
\r
**设置步骤**：\r
\r
1. 创建 CinemachineDollyTrack 和 CinemachineDollyCart\r
2. 设计相机路径，设置关键帧\r
3. 配置相机的 Aim 和 Body 参数\r
4. 添加适当的 Noise 和过渡效果\r
5. 使用脚本控制相机的移动和切换\r
\r
**最佳实践**：\r
\r
- 预计算相机路径，避免运行时计算\r
- 使用缓动曲线，获得平滑的动画效果\r
- 确保相机运动与游戏节奏匹配\r
\r
## 12. 脚本编程\r
\r
### 12.1 基本相机控制\r
\r
\`\`\`csharp\r
using Cinemachine;\r
\r
// 获取虚拟相机组件\r
CinemachineVirtualCamera vcam = GetComponent<CinemachineVirtualCamera>();\r
\r
// 修改相机优先级\r
vcam.Priority = 10;\r
\r
// 修改跟随目标\r
vcam.Follow = newTarget;\r
\r
// 修改观察目标\r
vcam.LookAt = newLookAtTarget;\r
\r
// 启用/禁用相机\r
vcam.enabled = true;\r
\`\`\`\r
\r
### 12.2 动态调整相机参数\r
\r
\`\`\`csharp\r
// 获取 Body 组件\r
CinemachineFramingTransposer transposer = vcam.GetCinemachineComponent<CinemachineFramingTransposer>();\r
\r
// 修改阻尼参数\r
if (transposer != null)\r
{\r
    transposer.m_XDamping = 0.5f;\r
    transposer.m_YDamping = 0.5f;\r
}\r
\r
// 获取 Aim 组件\r
CinemachineComposer composer = vcam.GetCinemachineComponent<CinemachineComposer>();\r
\r
// 修改目标位置\r
if (composer != null)\r
{\r
    composer.m_ScreenX = 0.5f;\r
    composer.m_ScreenY = 0.3f;\r
}\r
\`\`\`\r
\r
### 12.3 触发相机抖动\r
\r
\`\`\`csharp\r
// 获取 Noise 组件\r
CinemachineBasicMultiChannelPerlin noise = vcam.GetCinemachineComponent<CinemachineBasicMultiChannelPerlin>();\r
\r
// 触发抖动\r
if (noise != null)\r
{\r
    noise.m_AmplitudeGain = 1.0f; // 设置抖动幅度\r
    noise.m_FrequencyGain = 1.0f; // 设置抖动频率\r
\r
    // 一段时间后停止抖动\r
    StartCoroutine(StopNoiseAfterDelay(noise, 1.0f));\r
}\r
\r
private IEnumerator StopNoiseAfterDelay(CinemachineBasicMultiChannelPerlin noise, float delay)\r
{\r
    yield return new WaitForSeconds(delay);\r
    noise.m_AmplitudeGain = 0.0f;\r
    noise.m_FrequencyGain = 0.0f;\r
}\r
\`\`\`\r
\r
### 12.4 监听相机切换事件\r
\r
\`\`\`csharp\r
using Cinemachine;\r
\r
private CinemachineBrain cinemachineBrain;\r
\r
void Start()\r
{\r
    cinemachineBrain = Camera.main.GetComponent<CinemachineBrain>();\r
    cinemachineBrain.m_CameraActivatedEvent.AddListener(OnCameraActivated);\r
}\r
\r
void OnCameraActivated(ICinemachineCamera activatedCamera, ICinemachineCamera previousCamera)\r
{\r
    Debug.Log("相机切换: " + previousCamera.Name + " -> " + activatedCamera.Name);\r
    // 处理相机切换逻辑\r
}\r
\`\`\`\r
\r
## 13. 常见问题与解决方案\r
\r
### 13.1 相机抖动或不稳定\r
\r
**问题**：相机在跟随目标时出现抖动或不稳定的情况。\r
\r
**解决方案**：\r
\r
- 增加阻尼参数（XDamping、YDamping、ZDamping）\r
- 确保目标对象的移动是平滑的，没有突然的位置变化\r
- 检查是否有多个相机同时影响同一个目标\r
- 调整碰撞检测的 Soft Zone 和 Hard Zone 参数\r
\r
### 13.2 相机穿过物体\r
\r
**问题**：相机在移动时穿过场景中的物体。\r
\r
**解决方案**：\r
\r
- 启用碰撞检测（Obstacle Culling）\r
- 调整碰撞检测的距离和偏移量\r
- 确保场景中的物体有合适的碰撞体\r
- 调整相机的 Near Clip Plane 参数\r
\r
### 13.3 相机切换不流畅\r
\r
**问题**：相机之间的切换过渡不流畅或有明显的跳跃。\r
\r
**解决方案**：\r
\r
- 调整过渡效果的持续时间和曲线\r
- 确保切换前后的相机有相似的视野和位置\r
- 使用混合空间（Mixing Camera）实现更平滑的过渡\r
- 检查是否有脚本在相机切换时修改了相机参数\r
\r
### 13.4 性能问题\r
\r
**问题**：使用 Cinemachine 后游戏性能下降。\r
\r
**解决方案**：\r
\r
- 减少活跃的虚拟相机数量\r
- 降低碰撞检测的频率\r
- 调整相机的更新频率\r
- 优化脚本中的相机控制逻辑\r
- 考虑使用 LOD 系统减少远处物体的渲染负担\r
\r
## 14. 扩展与自定义\r
\r
### 14.1 创建自定义 Body 组件\r
\r
\`\`\`csharp\r
using Cinemachine;\r
\r
[AddComponentMenu("Cinemachine/Custom/CustomBody")]\r
public class CustomBody : CinemachineComponentBase\r
{\r
    // 自定义 Body 逻辑\r
    public override void OnTransitionFromCamera(ICinemachineCamera fromCam, Vector3 worldUp, float deltaTime)\r
    {\r
        // 处理相机切换\r
    }\r
\r
    public override void MutateCameraState(ref CameraState curState, float deltaTime)\r
    {\r
        // 修改相机状态\r
    }\r
\r
    public override bool IsValid\r
    {\r
        get { return FollowTarget != null; }\r
    }\r
\r
    public override CinemachineCore.Stage Stage\r
    {\r
        get { return CinemachineCore.Stage.Body; }\r
    }\r
}\r
\`\`\`\r
\r
### 14.2 创建自定义 Aim 组件\r
\r
\`\`\`csharp\r
using Cinemachine;\r
\r
[AddComponentMenu("Cinemachine/Custom/CustomAim")]\r
public class CustomAim : CinemachineComponentBase\r
{\r
    // 自定义 Aim 逻辑\r
    public override void MutateCameraState(ref CameraState curState, float deltaTime)\r
    {\r
        // 修改相机旋转\r
    }\r
\r
    public override bool IsValid\r
    {\r
        get { return LookAtTarget != null; }\r
    }\r
\r
    public override CinemachineCore.Stage Stage\r
    {\r
        get { return CinemachineCore.Stage.Aim; }\r
    }\r
}\r
\`\`\`\r
\r
## 15. 版本兼容性与迁移\r
\r
### 15.1 Unity 版本支持\r
\r
- Cinemachine 2.x：支持 Unity 2018.4 及以上版本\r
- Cinemachine 3.x：支持 Unity 2019.4 及以上版本\r
- 最新版本：支持 Unity 2021.3 LTS 及以上版本\r
\r
### 15.2 迁移指南\r
\r
从旧版本迁移到新版本时，需要注意以下几点：\r
\r
- 检查 API 变更，更新自定义脚本\r
- 重新配置相机参数，确保兼容性\r
- 测试相机行为，确保没有回归问题\r
- 参考 Unity 官方迁移文档\r
\r
## 16. 总结与展望\r
\r
Cinemachine 是 Unity 中功能强大的相机系统，它提供了一套完整的工具和组件，用于创建各种复杂的相机效果。通过深入理解其核心概念和工作原理，开发者可以充分利用 Cinemachine 的优势，创建出专业级的相机系统。\r
\r
随着 Unity 技术的不断发展，Cinemachine 也在持续更新和改进。未来，我们可以期待更多新功能的加入，如更好的 AI 相机、更强大的程序化相机路径生成、以及更深入的物理模拟集成等。\r
\r
对于游戏开发者来说，掌握 Cinemachine 是提升游戏视觉质量和沉浸感的重要途径。通过不断学习和实践，开发者可以创造出更加引人入胜的游戏体验。\r
\r
## 17. 参考资源\r
\r
- [Unity Cinemachine 官方文档](https://docs.unity3d.com/Packages/com.unity.cinemachine@latest/index.html)\r
- [Cinemachine 教程和示例项目](https://unity.com/learn/tutorials/topics/animation/cinemachine)\r
- [Cinemachine API 参考](https://docs.unity3d.com/Packages/com.unity.cinemachine@latest/api/index.html)\r
- [Unity 论坛 Cinemachine 板块](https://forum.unity.com/forums/cinemachine.136/)\r
- [Cinemachine GitHub 仓库](https://github.com/Unity-Technologies/Cinemachine)\r
`,tp=`---\r
title: Unity HybridCLR (huatuo) 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,热更新]\r
---\r
\r
# Unity HybridCLR (huatuo) 笔记\r
\r
## 1. 简介\r
\r
**HybridCLR** (前身叫 huatuo) 是一个**革命性**的 Unity 全平台原生 C# 热更新解决方案。\r
\r
### 1.1 核心优势\r
\r
*   **原生 C# 体验**：完全兼容 C# 语法，支持 async/await、泛型、反射等高级特性，无需像 Lua 那样学习新语言或编写胶水代码。\r
*   **高性能**：基于 IL2CPP 运行时扩充，热更代码运行效率接近原生 AOT 代码，远超 Lua 和 ILRuntime。\r
*   **零成本迁移**：现有的 C# 项目几乎不需要修改代码即可接入热更。\r
*   **内存高效**：智能的元数据管理，内存占用极低。\r
*   **调试方便**：支持在 IDE 中直接断点调试热更代码。\r
\r
### 1.2 工作原理\r
\r
HybridCLR 扩展了 Unity 的 IL2CPP 虚拟机。\r
*   **AOT 部分**：主包代码依然编译成原生机器码（C++）。\r
*   **Interpreter 部分**：HybridCLR 在运行时加载热更 DLL 的 IL 指令，通过一个高效的解释器来执行。\r
*   **混合执行**：AOT 代码和解释器代码可以无缝互相调用，共享对象和内存。\r
\r
## 2. 安装与环境配置\r
\r
### 2.1 环境要求\r
\r
*   Unity 版本：2020.3.x, 2021.3.x, 2022.3.x (LTS 版本最佳)\r
*   构建平台：支持所有 IL2CPP 平台（Android, iOS, PC, Mac, WebGL 等）\r
*   开发环境：Visual Studio 2019+ 或 Rider\r
\r
### 2.2 安装步骤\r
\r
1.  **安装 Installer**：\r
    *   打开 Unity \`Package Manager\`。\r
    *   点击 \`+\` -> \`Add package from git URL\`。\r
    *   输入：\`https://gitee.com/focus-creative-games/hybridclr_unity.git\`。\r
    *   或者下载源码放入 \`Packages/com.focus-creative-games.hybridclr_unity\`。\r
\r
2.  **初始化 HybridCLR**：\r
    *   点击菜单栏 \`HybridCLR\` -> \`Installer\`。\r
    *   在弹出的窗口中，点击 \`Install\` 按钮。\r
    *   等待安装完成，控制台显示 \`Install Success\`。\r
\r
3.  **配置 Player Settings**：\r
    *   \`Scripting Backend\` 必须设置为 \`IL2CPP\`。\r
    *   \`Api Compatibility Level\` 建议设置为 \`.NET Standard 2.1\` 或 \`.NET 4.x\`。\r
\r
## 3. 项目配置与使用\r
\r
### 3.1 划分程序集 (Assembly)\r
\r
这是热更新的关键步骤。你需要将代码明确划分为 **AOT 程序集**（不可热更）和 **热更程序集**。\r
\r
1.  **创建 Assembly Definition**：\r
    *   为你的游戏逻辑代码（如 \`GameLogic\`）创建 \`.asmdef\` 文件。\r
    *   为你的 UI 代码（如 \`GameUI\`）创建 \`.asmdef\` 文件。\r
\r
2.  **配置 HybridCLR Settings**：\r
    *   打开 \`HybridCLR\` -> \`Settings\`。\r
    *   在 \`Hot Update Assembly Definitions\` 列表中，添加你刚才创建的 \`GameLogic\` 和 \`GameUI\`。\r
    *   **注意**：被添加进这里的程序集，在打包时不会被编译成 C++，而是保留为 DLL，供运行时加载。\r
\r
### 3.2 代码调用流程\r
\r
在 AOT（主包）入口脚本中，启动热更逻辑：\r
\r
\`\`\`csharp\r
using System.Reflection;\r
using UnityEngine;\r
using System.IO;\r
\r
public class GameEntry : MonoBehaviour\r
{\r
    void Start()\r
    {\r
        // 1. 模拟下载热更 DLL (实际项目中应从服务器下载)\r
        // 这里假设 DLL 已经下载到了 StreamingAssets 或 PersistentDataPath\r
        byte[] dllBytes = LoadDll("GameLogic.dll"); \r
\r
        // 2. 加载热更程序集\r
        // 这一步会将 DLL 加载到 HybridCLR 的解释器中\r
        Assembly hotfixAssembly = Assembly.Load(dllBytes);\r
\r
        // 3. 进入热更逻辑\r
        // 通过反射调用热更入口\r
        Type entryType = hotfixAssembly.GetType("GameLogic.Entry");\r
        entryType.GetMethod("StartGame").Invoke(null, null);\r
    }\r
\r
    byte[] LoadDll(string dllName)\r
    {\r
        // 实现你的加载逻辑，如 AssetBundle.Load 或 File.ReadAllBytes\r
        string path = Path.Combine(Application.streamingAssetsPath, dllName + ".bytes");\r
        return File.ReadAllBytes(path);\r
    }\r
}\r
\`\`\`\r
\r
### 3.3 打包流程\r
\r
1.  **生成/编译 DLL**：\r
    *   点击 \`HybridCLR\` -> \`CompileDll\` -> \`ActiveBuildTarget\`。\r
    *   生成的 DLL 会在 \`HybridCLRData/HotUpdateDlls\` 目录下。\r
    *   **重要**：你需要把这些 DLL 复制到 \`StreamingAssets\` 或打进 AssetBundle，作为热更资源。\r
\r
2.  **生成 AOT 元数据**：\r
    *   点击 \`HybridCLR\` -> \`Generate\` -> \`All\`。\r
    *   这一步会分析代码，生成必要的 C++ 桥接代码和元数据。\r
\r
3.  **构建项目**：\r
    *   使用 Unity 标准的 \`Build Settings\` 进行打包。\r
\r
## 4. 核心机制详解\r
\r
### 4.1 元数据补充 (Metadata)\r
\r
这是 HybridCLR 最难理解但也最重要的部分。\r
由于 IL2CPP 是 AOT 编译，泛型代码在编译时需要确定具体类型。如果热更代码中使用了 AOT 中未实例化的泛型（例如 AOT 里只用了 \`List<int>\`, 热更里用了 \`List<string>\`），程序会崩溃。\r
\r
**解决方案**：\r
HybridCLR 提供了 **补充元数据** 机制。你需要加载 AOT 程序集的原始 DLL（如 \`mscorlib.dll\`），让解释器知道泛型的元数据。\r
\r
\`\`\`csharp\r
using HybridCLR;\r
\r
public void LoadMetadata()\r
{\r
    // AOT 程序集列表 (通常是系统库和第三方库)\r
    string[] aotDlls = { "mscorlib.dll", "System.Core.dll", "System.dll", "UniTask.dll" };\r
    \r
    foreach (var dll in aotDlls)\r
    {\r
        byte[] dllBytes = LoadAotDll(dll); // 从 StreamingAssets 加载\r
        // 加载元数据\r
        // HomologousImageMode.SuperSet: 最安全的模式\r
        RuntimeApi.LoadMetadataForAOTAssembly(dllBytes, HomologousImageMode.SuperSet);\r
    }\r
}\r
\`\`\`\r
\r
### 4.2 桥接函数 (Bridge)\r
\r
当解释器代码调用 AOT 代码，或者 AOT 代码回调解释器代码时，需要通过“桥接函数”进行参数转换。HybridCLR 会自动生成大部分桥接函数，但在某些极端情况下（如复杂的泛型委托），可能需要手动配置。\r
\r
## 5. 常见问题与解决方案\r
\r
### 5.1 \`ExecutionEngineException: GetGenericVirtualMethod\`\r
\r
**原因**：热更代码调用了一个 AOT 泛型虚方法，但该方法在 AOT 中未被实例化。\r
**解决**：\r
1.  确保已执行 \`LoadMetadataForAOTAssembly\`。\r
2.  确保加载了包含该泛型定义的 AOT DLL。\r
\r
### 5.2 代码裁剪 (Stripping)\r
\r
**原因**：Unity 打包时开启了 \`Managed Stripping Level\`，导致未在 AOT 中显式引用的类或方法被裁剪掉，热更代码运行时找不到。\r
**解决**：\r
1.  在 \`Assets\` 目录下创建 \`link.xml\`。\r
2.  在其中保留需要的程序集或类型。\r
    \`\`\`xml\r
    <linker>\r
        <assembly fullname="System.Core" preserve="all"/>\r
        <assembly fullname="UniTask" preserve="all"/>\r
    </linker>\r
    \`\`\`\r
\r
### 5.3 iOS 审核问题\r
\r
**问题**：苹果禁止执行动态下载的可执行代码。\r
**解释**：HybridCLR 本质是加载数据（DLL 字节码）并解释执行，不涉及 JIT（即时编译）生成机器码，因此**符合**苹果审核规范（类似于 Lua）。目前已有大量使用 HybridCLR 的游戏过审。\r
\r
## 6. 进阶技巧\r
\r
### 6.1 增量更新\r
\r
在实际项目中，你不需要每次都重新打整包。\r
1.  修改热更代码。\r
2.  运行 \`CompileDll\`。\r
3.  将新生成的 DLL 上传到 CDN。\r
4.  客户端下载新 DLL 替换旧的即可。\r
\r
### 6.2 结合 YooAsset\r
\r
推荐使用 YooAsset 来管理热更 DLL。\r
1.  将生成的 DLL 后缀改为 \`.bytes\`。\r
2.  放入 YooAsset 的资源目录。\r
3.  配置 YooAsset 将其打包。\r
4.  运行时通过 YooAsset 加载 DLL 字节流。\r
\r
## 7. 总结\r
\r
HybridCLR 彻底改变了 Unity 的开发生态。它让开发者可以专注于 C# 业务逻辑，而不用被热更新的各种限制所束缚。\r
\r
**最佳实践建议**：\r
1.  **尽早接入**：项目初期就规划好 AOT 和热更程序集。\r
2.  **保持 AOT 纯净**：AOT 包只放引擎库、第三方插件和极少量的启动代码。\r
3.  **全员热更**：除了极少数性能极其敏感的底层算法，其他所有逻辑都放在热更程序集里。\r
\r
## 8. 参考资源\r
\r
*   [HybridCLR 官方文档](https://hybridclr.doc.code-philosophy.com/)\r
*   [HybridCLR 源码仓库](https://github.com/focus-creative-games/hybridclr)\r
*   [官方示例项目](https://github.com/focus-creative-games/hybridclr_trial)\r
`,rp=`---\r
title: Unity Input System 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,输入系统]\r
---\r
\r
# Unity Input System 笔记\r
\r
## 1. 简介\r
\r
**Input System** 是 Unity 为了解决旧版输入系统（Input Manager）的诸多痛点而推出的新一代输入框架。它基于事件驱动，支持跨平台设备自动适配，并提供了强大的动作映射（Action Map）功能。\r
\r
### 1.1 核心优势\r
\r
*   **设备无关性**：一套逻辑同时支持键盘、鼠标、手柄、触摸屏、VR 手柄等。\r
*   **事件驱动**：无需在 \`Update\` 中轮询，按键按下即触发回调，性能更优且逻辑更清晰。\r
*   **热插拔支持**：运行时插入手柄自动识别，无需重启游戏。\r
*   **多玩家支持**：内置分屏和多本地玩家输入管理。\r
*   **可视化配置**：通过 Input Actions 编辑器直观管理键位绑定。\r
\r
## 2. 安装与基础设置\r
\r
### 2.1 安装\r
\r
1.  打开 \`Window\` -> \`Package Manager\`。\r
2.  在 Unity Registry 中搜索 \`Input System\`。\r
3.  点击 \`Install\`。\r
4.  **重要**：安装完成后，Unity 会提示是否启用新后端并重启编辑器，选择 \`Yes\`。\r
\r
### 2.2 项目设置\r
\r
1.  打开 \`Edit\` -> \`Project Settings\` -> \`Player\` -> \`Other Settings\`。\r
2.  找到 \`Active Input Handling\`。\r
    *   \`Input System Package (New)\`: 仅使用新系统。\r
    *   \`Both\`: 同时兼容旧系统（\`Input.GetKey\`）和新系统。**推荐迁移期使用此选项**。\r
\r
## 3. 核心概念\r
\r
### 3.1 Input Action Asset\r
\r
这是一个 \`.inputactions\` 文件，用于集中管理所有的输入配置。\r
*   **Action Maps**：输入的集合，通常按游戏状态划分（如 \`Player\`, \`UI\`, \`Driving\`）。\r
*   **Actions**：具体的动作（如 \`Move\`, \`Jump\`, \`Fire\`）。\r
*   **Bindings**：动作与物理按键的绑定（如 \`Jump\` 绑定到 \`Space\` 和 \`Gamepad South\`）。\r
\r
### 3.2 Action Type\r
\r
*   **Value**：用于连续输入，如摇杆移动（Vector2）。会持续触发回调。\r
*   **Button**：用于单次触发，如跳跃。\r
*   **Pass Through**：类似于 Value，但不会消除同一帧内的多个输入源冲突。\r
\r
### 3.3 Interactions\r
\r
定义触发动作的模式：\r
*   **Press**：按下触发（默认）。\r
*   **Hold**：长按触发。\r
*   **Tap**：快速点击。\r
*   **SlowTap**：慢速点击。\r
*   **MultiTap**：双击或三击。\r
\r
### 3.4 Processors\r
\r
对原始输入值进行预处理：\r
*   **Invert**：反转数值。\r
*   **NormalizeVector2**：将向量归一化（防止斜向移动速度过快）。\r
*   **Deadzone**：设置死区（防止摇杆漂移）。\r
\r
## 4. 使用流程详解\r
\r
### 4.1 创建配置文件\r
\r
1.  在 Project 窗口右键 -> \`Create\` -> \`Input Actions\`。命名为 \`GameControls\`。\r
2.  双击打开编辑器。\r
3.  创建 Map \`Player\`。\r
4.  创建 Action \`Move\` (Value, Vector2)。\r
    *   添加 \`2D Vector Composite\` (WASD)。\r
    *   添加 \`Gamepad Left Stick\`。\r
5.  创建 Action \`Jump\` (Button)。\r
    *   绑定 \`Space\`。\r
    *   绑定 \`Gamepad Button South\`。\r
6.  点击 \`Save Asset\`。\r
\r
### 4.2 生成 C# 代码（推荐）\r
\r
1.  选中 \`GameControls\` 文件。\r
2.  在 Inspector 中勾选 \`Generate C# Class\`。\r
3.  点击 \`Apply\`。\r
4.  这会生成一个同名的 C# 类，包含了所有配置的强类型访问接口。\r
\r
### 4.3 代码实现\r
\r
\`\`\`csharp\r
using UnityEngine;\r
using UnityEngine.InputSystem;\r
\r
public class PlayerController : MonoBehaviour\r
{\r
    private GameControls controls;\r
    private Vector2 moveInput;\r
\r
    private void Awake()\r
    {\r
        controls = new GameControls();\r
\r
        // 绑定 Move 事件\r
        // ctx.ReadValue<Vector2>() 读取当前的输入值\r
        controls.Player.Move.performed += ctx => moveInput = ctx.ReadValue<Vector2>();\r
        // 当松开按键时，值归零\r
        controls.Player.Move.canceled += ctx => moveInput = Vector2.zero;\r
\r
        // 绑定 Jump 事件\r
        controls.Player.Jump.performed += ctx => Jump();\r
    }\r
\r
    private void OnEnable()\r
    {\r
        // 必须手动启用\r
        controls.Player.Enable();\r
    }\r
\r
    private void OnDisable()\r
    {\r
        controls.Player.Disable();\r
    }\r
\r
    private void Update()\r
    {\r
        // 处理移动逻辑\r
        transform.Translate(moveInput * Time.deltaTime * 5f);\r
    }\r
\r
    private void Jump()\r
    {\r
        Debug.Log("跳跃！");\r
    }\r
}\r
\`\`\`\r
\r
### 4.4 使用 PlayerInput 组件（偷懒法）\r
\r
如果你不想写太多代码，可以使用 \`PlayerInput\` 组件。\r
1.  给物体挂载 \`Player Input\` 组件。\r
2.  将 \`.inputactions\` 文件拖进去。\r
3.  选择 \`Behavior\`：\r
    *   **Send Messages**：通过 \`SendMessage\` 调用 \`OnMove\`, \`OnJump\` 等方法。\r
    *   **Invoke Unity Events**：在 Inspector 中拖拽绑定事件。\r
    *   **CSharp Events**：通过代码订阅 \`onActionTriggered\`。\r
\r
## 5. 常见问题与解决方案\r
\r
### 5.1 UI 无法点击\r
\r
**问题**：启用 Input System 后，UGUI 的按钮没反应。\r
**原因**：旧的 \`StandaloneInputModule\` 依赖旧输入系统。\r
**解决**：\r
1.  找到场景中的 \`EventSystem\` 物体。\r
2.  点击 Inspector 上的 \`Replace with InputSystemUIInputModule\` 按钮。\r
\r
### 5.2 摇杆漂移\r
\r
**问题**：手柄摇杆没动，角色却在缓慢移动。\r
**解决**：\r
1.  在 Input Actions 编辑器中，选中 Stick 绑定。\r
2.  添加 \`Processor\` -> \`Deadzone\`。\r
3.  设置合适的 \`Min\` 值（通常 0.125）。\r
\r
### 5.3 组合键（如 Ctrl+C）\r
\r
**实现**：\r
1.  创建一个 Action。\r
2.  添加 Binding 时选择 \`Button with One Modifier\`。\r
3.  \`Modifier\` 设为 Ctrl，\`Button\` 设为 C。\r
\r
### 5.4 屏幕触控模拟摇杆\r
\r
**实现**：\r
1.  在 Canvas 上创建 UI 图片作为摇杆。\r
2.  添加 \`On-Screen Stick\` 组件。\r
3.  将其 \`Control Path\` 绑定到 Input System 的 \`Gamepad/LeftStick\`。\r
4.  这样触摸 UI 就会发送手柄信号，无需修改逻辑代码。\r
\r
## 6. 高级技巧\r
\r
### 6.1 运行时改键 (Rebinding)\r
\r
Input System 内置了强大的改键功能。\r
\r
\`\`\`csharp\r
public void StartRebinding()\r
{\r
    controls.Player.Jump.Disable();\r
    \r
    var rebindOperation = controls.Player.Jump.PerformInteractiveRebinding()\r
        // 排除鼠标移动\r
        .WithControlsExcluding("Mouse")\r
        .OnMatchWaitForAnother(0.1f)\r
        .OnComplete(operation => \r
        {\r
            Debug.Log($"新按键: {operation.selectedControl.displayName}");\r
            operation.Dispose();\r
            controls.Player.Jump.Enable();\r
        })\r
        .Start();\r
}\r
\`\`\`\r
\r
### 6.2 震动反馈 (Haptics)\r
\r
\`\`\`csharp\r
if (Gamepad.current != null)\r
{\r
    // 低频马达 0.5，高频马达 0.5，持续 1 秒\r
    Gamepad.current.SetMotorSpeeds(0.5f, 0.5f);\r
    // 记得在合适的时候停止\r
    // Gamepad.current.ResetHaptics();\r
}\r
\`\`\`\r
\r
## 7. 总结\r
\r
Input System 虽然入门门槛比旧系统稍高，但其带来的架构优势是巨大的。特别是对于需要跨平台发布或支持手柄的游戏，它是必选项。\r
\r
**建议**：\r
*   小项目或原型：可以用 \`Keyboard.current.spaceKey.wasPressedThisFrame\` 这种直接调用的方式。\r
*   正式项目：务必使用 \`Input Action Asset\` + 生成 C# 类的方式，以保证可维护性。\r
\r
## 8. 参考资源\r
\r
*   [Unity Input System 官方文档](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest/index.html)\r
*   [Input System 示例项目 (GitHub)](https://github.com/Unity-Technologies/InputSystem)\r
`,ip=`---\r
title: Unity Job System 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,多线程,性能优化]\r
---\r
\r
# Unity Job System 笔记\r
\r
## 1. 简介\r
\r
**C# Job System** 是 Unity Data-Oriented Technology Stack (DOTS) 的核心支柱之一。它允许开发者编写安全、快速的多线程代码，充分利用现代多核 CPU 的性能。\r
\r
### 1.1 核心优势\r
\r
*   **安全性**：内置竞争条件检测（Race Condition Detection），防止常见的多线程 Bug。\r
*   **高性能**：配合 **Burst Compiler**，可以将 C# 代码编译成高度优化的原生机器码（SIMD 指令），性能提升可达 10-100 倍。\r
*   **无 GC**：Job System 强制使用非托管内存（Native Container），完全避免垃圾回收开销。\r
*   **易用性**：自动管理线程池，无需手动创建和销毁线程。\r
\r
## 2. 安装与环境\r
\r
Job System 是 Unity 核心模块，无需安装。但为了获得性能提升，**必须**安装 Burst Compiler 和 Collections 包。\r
\r
1.  打开 \`Package Manager\`。\r
2.  安装 \`Burst\`。\r
3.  安装 \`Collections\` (提供了 \`NativeList\`, \`NativeHashMap\` 等高级容器)。\r
4.  安装 \`Mathematics\` (提供了 SIMD 友好的数学库，如 \`float3\`, \`quaternion\`)。\r
\r
## 3. 核心概念\r
\r
### 3.1 Job 类型\r
\r
*   **IJob**：最基础的 Job，在一个线程上执行一项任务。\r
*   **IJobParallelFor**：并行 Job，将一个数组拆分成多个片段，在多个核心上同时处理。适用于处理大量同类数据（如 10000 个敌人的移动）。\r
*   **IJobParallelForTransform**：专门用于并行修改 Transform 的 Job（需要 \`Unity.Jobs\` 包）。\r
\r
### 3.2 Native Container (原生容器)\r
\r
Job System 运行在工作线程，无法访问托管堆上的对象（如 \`List<T>\`, \`class\`）。必须使用 Native Container，它们分配在非托管内存中。\r
\r
*   **NativeArray<T>**：固定长度数组。\r
*   **NativeList<T>**：可变长列表。\r
*   **NativeHashMap<TKey, TValue>**：哈希表。\r
*   **NativeQueue<T>**：队列。\r
\r
### 3.3 Allocator (分配器)\r
\r
创建 Native Container 时必须指定分配器：\r
*   **Allocator.Temp**：最快。生命周期仅限一帧。**不能传给 Job**。\r
*   **Allocator.TempJob**：较快。生命周期 4 帧。**传给 Job 用这个**。\r
*   **Allocator.Persistent**：最慢。长期存在，直到手动 Dispose。\r
\r
## 4. 实战示例\r
\r
### 4.1 简单的 IJob\r
\r
\`\`\`csharp\r
using Unity.Jobs;\r
using Unity.Collections;\r
using Unity.Burst;\r
using UnityEngine;\r
\r
public class SimpleJobExample : MonoBehaviour\r
{\r
    // [BurstCompile] 开启爆裂编译优化\r
    [BurstCompile]\r
    struct AddJob : IJob\r
    {\r
        public float a;\r
        public float b;\r
        // 输出结果必须用 NativeArray，即使只有一个值\r
        public NativeArray<float> result;\r
\r
        public void Execute()\r
        {\r
            result[0] = a + b;\r
        }\r
    }\r
\r
    void Start()\r
    {\r
        // 1. 创建数据\r
        NativeArray<float> result = new NativeArray<float>(1, Allocator.TempJob);\r
\r
        // 2. 创建 Job\r
        AddJob job = new AddJob\r
        {\r
            a = 10,\r
            b = 20,\r
            result = result\r
        };\r
\r
        // 3. 调度 Job\r
        JobHandle handle = job.Schedule();\r
\r
        // 4. 等待完成\r
        handle.Complete();\r
\r
        // 5. 获取结果\r
        Debug.Log("Result: " + result[0]);\r
\r
        // 6. 释放内存\r
        result.Dispose();\r
    }\r
}\r
\`\`\`\r
\r
### 4.2 高性能并行 IJobParallelFor\r
\r
场景：计算 10 万个物体的移动位置。\r
\r
\`\`\`csharp\r
using Unity.Jobs;\r
using Unity.Collections;\r
using Unity.Burst;\r
using Unity.Mathematics;\r
using UnityEngine;\r
\r
public class ParallelJobExample : MonoBehaviour\r
{\r
    [BurstCompile]\r
    struct MoveJob : IJobParallelFor\r
    {\r
        // ReadOnly 标记可以提升性能，允许多个 Job 同时读取\r
        [ReadOnly] public NativeArray<float3> velocities;\r
        public NativeArray<float3> positions;\r
        public float deltaTime;\r
\r
        public void Execute(int index)\r
        {\r
            // 复杂的数学运算\r
            positions[index] += velocities[index] * deltaTime;\r
        }\r
    }\r
\r
    void Update()\r
    {\r
        int count = 100000;\r
        var positions = new NativeArray<float3>(count, Allocator.TempJob);\r
        var velocities = new NativeArray<float3>(count, Allocator.TempJob);\r
\r
        // 初始化数据...\r
\r
        MoveJob job = new MoveJob\r
        {\r
            positions = positions,\r
            velocities = velocities,\r
            deltaTime = Time.deltaTime\r
        };\r
\r
        // ScheduleParallel 的第二个参数是 batchSize\r
        // 64 表示每个线程一次领 64 个任务，太小会导致调度开销过大\r
        JobHandle handle = job.Schedule(count, 64);\r
\r
        // 必须在某一时刻 Complete，否则内存泄漏且报错\r
        handle.Complete();\r
\r
        positions.Dispose();\r
        velocities.Dispose();\r
    }\r
}\r
\`\`\`\r
\r
## 5. 常见问题与解决方案\r
\r
### 5.1 \`InvalidOperationException: The NativeArray has been deallocated\`\r
\r
**原因**：访问了已经 Dispose 的容器，或者使用了 Temp 分配器传给 Job。\r
**解决**：检查 Allocator 类型，确保 Dispose 在 Complete 之后调用。\r
\r
### 5.2 主线程卡顿\r
\r
**原因**：在 \`Schedule\` 后立即调用 \`Complete\`。这会强制主线程等待子线程，失去了并行的意义。\r
**解决**：\r
*   **最佳实践**：在 \`Update\` 开始时 Schedule，在 \`LateUpdate\` 中 Complete。利用中间的时间差让 Job 在后台跑。\r
\r
### 5.3 无法访问引用类型\r
\r
**问题**：Job 里想修改 \`transform.position\` 或读取 \`string\`。\r
**解决**：\r
*   对于 Transform，使用 \`IJobParallelForTransform\`。\r
*   对于其他引用类型，必须在主线程将数据拷贝到 NativeArray 中，传给 Job 处理完后，再拷回主线程应用。\r
\r
## 6. 进阶技巧\r
\r
### 6.1 Job 依赖 (Dependency)\r
\r
Job B 依赖 Job A 的结果。\r
\r
\`\`\`csharp\r
JobHandle handleA = jobA.Schedule();\r
// 将 handleA 作为依赖传给 jobB\r
JobHandle handleB = jobB.Schedule(handleA);\r
handleB.Complete(); // 等待 B 完成（隐含 A 也完成了）\r
\`\`\`\r
\r
### 6.2 Burst 调试\r
\r
如果 Burst 编译失败，Job 会回退到普通 C# 模式运行，速度慢很多。\r
*   在编辑器菜单 \`Jobs\` -> \`Burst\` -> \`Open Inspector\`。\r
*   选中你的 Job，查看生成的汇编代码和报错信息。\r
\r
## 7. 总结\r
\r
Job System 是通往高性能 Unity 开发的必经之路。\r
\r
*   **什么时候用？**\r
    *   大量重复的数学计算（如 Boids 鸟群算法）。\r
    *   程序化网格生成。\r
    *   自定义物理引擎或碰撞检测。\r
*   **什么时候不用？**\r
    *   简单的逻辑判断。\r
    *   深度依赖 Unity API（如物理射线检测、NavMesh）的逻辑。\r
\r
## 8. 参考资源\r
\r
*   [Unity Job System Manual](https://docs.unity3d.com/Manual/JobSystem.html)\r
*   [Burst Compiler Guide](https://docs.unity3d.com/Packages/com.unity.burst@latest/index.html)\r
*   [Catlike Coding - Basics / Jobs](https://catlikecoding.com/unity/tutorials/basics/jobs/)\r
`,op=`---\r
title: Unity Luban (鲁班) 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,配置表,工具]\r
---\r
\r
# Unity Luban (鲁班) 笔记\r
\r
## 1. 简介\r
\r
**Luban** 是目前 Unity 社区功能最强大、性能最好的游戏配置解决方案。它不仅仅是一个导表工具，更是一套完整的配置管线。\r
\r
### 1.1 核心优势\r
\r
*   **全能数据源**：支持 Excel (xlsx, csv), JSON, XML, Lua, YAML 等多种格式混合使用。\r
*   **强大的类型系统**：支持 OOP（继承、多态）、泛型、枚举、可空类型、容器（List, Map）。\r
*   **高性能**：生成的二进制数据加载速度极快，且内存占用小。\r
*   **数据校验**：支持外键引用检查（Ref），资源路径检查（Path），范围检查（Range）。\r
*   **多语言支持**：一键导出 C#, Java, Go, C++, Lua, TypeScript, Python 等代码。\r
\r
## 2. 安装与环境\r
\r
Luban 分为两部分：**生成工具**（Client）和 **运行时库**（Runtime）。\r
\r
### 2.1 下载工具\r
\r
1.  访问 [Luban GitHub](https://github.com/focus-creative-games/luban)。\r
2.  下载最新的 Release 包（包含 \`Luban.ClientServer\`）。\r
3.  解压到项目目录外的工具文件夹中。\r
\r
### 2.2 安装 Runtime\r
\r
1.  打开 Unity \`Package Manager\`。\r
2.  添加 Git URL: \`https://github.com/focus-creative-games/luban_unity.git\`。\r
3.  或者直接把源码放入 \`Assets/Plugins/Luban\`。\r
\r
## 3. 使用流程详解\r
\r
### 3.1 定义表结构 (Schema)\r
\r
Luban 推荐使用 \`__tables__.xlsx\` 和 \`__beans__.xlsx\` 来定义表结构和数据结构。\r
\r
**\`__tables__.xlsx\`** (定义有哪些表)\r
\r
| full_name | value_type | index | comment | file |\r
| :--- | :--- | :--- | :--- | :--- |\r
| item.TbItem | Item | id | 道具表 | Item.xlsx |\r
| item.TbEquip | Equip | id | 装备表 | Equip.xlsx |\r
\r
**\`__beans__.xlsx\`** (定义结构体/枚举)\r
\r
| full_name | fields | comment |\r
| :--- | :--- | :--- |\r
| item.ItemType | 0:Normal, 1:Equip, 2:Mat | 道具类型枚举 |\r
| item.ItemInfo | int id, string name | 道具基础信息 |\r
\r
### 3.2 编写数据表\r
\r
**\`Item.xlsx\`**\r
\r
| ## | id | name | desc | type | price | icon |\r
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\r
| ##type | int | string | string | item.ItemType | int | string |\r
| ## | ID | 名称 | 描述 | 类型 | 价格 | 图标 |\r
| | 1001 | 苹果 | 回复10点血 | Normal | 50 | icon_apple |\r
| | 1002 | 屠龙刀 | 攻击+999 | Equip | 99999 | icon_sword |\r
\r
### 3.3 生成代码和数据\r
\r
你需要编写一个批处理脚本（.bat 或 .sh）来运行生成工具。\r
\r
\`\`\`bat\r
set WORKSPACE=..\r
set LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\r
set CONF_ROOT=%WORKSPACE%\\Config\r
\r
dotnet %LUBAN_DLL% ^\r
    -t client ^\r
    -c cs-bin ^\r
    -d bin ^\r
    --conf %CONF_ROOT%\\luban.conf ^\r
    -x outputCodeDir=%WORKSPACE%\\Assets\\Scripts\\Gen ^\r
    -x outputDataDir=%WORKSPACE%\\Assets\\StreamingAssets\\Config\r
\`\`\`\r
\r
### 3.4 代码调用\r
\r
\`\`\`csharp\r
using System.IO;\r
using UnityEngine;\r
using cfg; // Luban 生成的命名空间\r
\r
public class ConfigManager : MonoBehaviour\r
{\r
    public static Tables Tables;\r
\r
    void Start()\r
    {\r
        // 初始化 Tables\r
        // 需要传入一个加载函数，Luban 不关心你怎么加载文件\r
        Tables = new Tables(LoadByteBuf);\r
        \r
        // 使用数据\r
        var apple = Tables.TbItem.Get(1001);\r
        Debug.Log($"道具: {apple.Name}, 价格: {apple.Price}");\r
        \r
        // 遍历数据\r
        foreach (var item in Tables.TbItem.DataList)\r
        {\r
            Debug.Log(item.Name);\r
        }\r
    }\r
\r
    private ByteBuf LoadByteBuf(string file)\r
    {\r
        // 适配不同的加载方式 (Resources, AssetBundle, YooAsset)\r
        string path = $"{Application.streamingAssetsPath}/Config/{file}.bytes";\r
        return new ByteBuf(File.ReadAllBytes(path));\r
    }\r
}\r
\`\`\`\r
\r
## 4. 高级特性\r
\r
### 4.1 多态 (Polymorphism)\r
\r
这是 Luban 最强大的功能之一。\r
例如，定义一个 \`Skill\` 基类，和 \`PassiveSkill\`, \`ActiveSkill\` 子类。\r
\r
在 Excel 中：\r
\r
| ## | id | name | skill_data |\r
| :--- | :--- | :--- | :--- |\r
| ##type | int | string | Skill |\r
| | 1 | 火球术 | { "$type": "ActiveSkill", "damage": 100, "cost": 10 } |\r
| | 2 | 坚韧 | { "$type": "PassiveSkill", "defense": 50 } |\r
\r
代码中会自动识别类型：\r
\r
\`\`\`csharp\r
Skill skill = Tables.TbSkill.Get(1);\r
if (skill is ActiveSkill activeSkill)\r
{\r
    Debug.Log($"伤害: {activeSkill.Damage}");\r
}\r
\`\`\`\r
\r
### 4.2 数据校验 (Validators)\r
\r
在 Excel 的表头添加校验规则。\r
\r
*   \`ref:item.TbItem\`：检查填入的 ID 是否在 Item 表中存在。\r
*   \`path:unity\`：检查填入的路径是否是 Unity 工程中的有效资源。\r
*   \`range:1,100\`：检查数值是否在 1 到 100 之间。\r
\r
| id | reward_item_id |\r
| :--- | :--- |\r
| int | int#ref=item.TbItem |\r
| 1 | 1001 |\r
| 2 | 9999 (如果表中没这个ID，生成时会报错) |\r
\r
### 4.3 复杂数据结构\r
\r
支持直接在单元格里填 JSON 风格的数据。\r
例如 \`List<int>\` 类型，可以直接填 \`1,2,3,4\`。\r
例如 \`Map<int, string>\` 类型，可以填 \`1:apple,2:banana\`。\r
\r
## 5. 常见问题与解决方案\r
\r
### 5.1 生成失败\r
\r
**原因**：通常是 Excel 被打开了，或者格式有误。\r
**解决**：关闭 Excel，检查控制台报错信息（Luban 的报错非常详细，会指出具体是哪一行哪一列）。\r
\r
### 5.2 字符串编码\r
\r
**问题**：中文乱码。\r
**解决**：确保 Excel 保存格式正确，生成的 .bytes 文件通常是 UTF-8 编码。\r
\r
### 5.3 浮点数精度\r
\r
**问题**：Excel 里的 0.0001 读出来不对。\r
**解决**：Excel 自身精度问题。建议在定义类型时明确使用 \`float\` 或 \`double\`，尽量避免使用 Excel 的自动推导。\r
\r
## 6. 总结\r
\r
Luban 是一个“一旦用了就回不去”的工具。它极大地提升了配置表的维护效率和程序的健壮性。\r
\r
**建议**：\r
*   **小项目**：可以直接用 Excel 定义结构，简单快捷。\r
*   **大项目**：建议使用 XML 或 \`__tables__.xlsx\` 分离定义，规范化管理。\r
*   **多语言**：如果你的项目有服务器（Java/Go），Luban 能保证前后端配置定义完全一致，杜绝协议不一致的 Bug。\r
\r
## 7. 参考资源\r
\r
*   [Luban 官方文档](https://luban.doc.code-philosophy.com/)\r
*   [示例项目](https://github.com/focus-creative-games/luban_examples)\r
`,sp=`---\r
title: Unity UI Toolkit 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,UI]\r
---\r
\r
# Unity UI Toolkit 笔记\r
\r
## 1. 简介\r
\r
**UI Toolkit** (原名 UIElements) 是 Unity 的新一代 UI 系统，旨在统一游戏运行时 UI (Runtime) 和编辑器 UI (Editor) 的开发流程。它借鉴了 Web 前端开发模式（HTML/CSS），实现了结构、样式、逻辑的分离。\r
\r
### 1.1 核心优势\r
\r
*   **性能卓越**：基于 GPU 渲染，自动合批，能够轻松处理成千上万个 UI 元素。\r
*   **结构清晰**：UXML 定义结构，USS 定义样式，C# 处理逻辑，便于团队协作。\r
*   **布局灵活**：采用 Flexbox 布局引擎，轻松实现响应式 UI，适配各种屏幕分辨率。\r
*   **所见即所得**：内置 UI Builder 可视化编辑器。\r
\r
## 2. 核心概念\r
\r
### 2.1 UXML (Unity XML)\r
\r
类似于 HTML，用于定义 UI 的层级结构。\r
\`\`\`xml\r
<ui:UXML xmlns:ui="UnityEngine.UIElements">\r
    <ui:VisualElement name="Container">\r
        <ui:Label text="Hello World" class="title" />\r
        <ui:Button text="Click Me" name="SubmitBtn" />\r
    </ui:VisualElement>\r
</ui:UXML>\r
\`\`\`\r
\r
### 2.2 USS (Unity Style Sheets)\r
\r
类似于 CSS，用于定义 UI 的外观样式。\r
\`\`\`css\r
.title {\r
    font-size: 24px;\r
    color: white;\r
    -unity-font-style: bold;\r
}\r
\r
#SubmitBtn:hover {\r
    background-color: #4CAF50;\r
}\r
\`\`\`\r
\r
### 2.3 Visual Tree\r
\r
UI Toolkit 的渲染树，由 \`VisualElement\` 节点组成。类似于 DOM 树。\r
\r
## 3. 使用流程详解\r
\r
### 3.1 创建 UI 文档\r
\r
1.  在 Project 窗口右键 -> \`Create\` -> \`UI Toolkit\` -> \`UI Document\`。\r
2.  双击打开 **UI Builder**。\r
3.  从 Library 拖拽控件到 Hierarchy。\r
4.  在 Inspector 中设置属性。\r
\r
### 3.2 运行时显示 (Runtime)\r
\r
1.  在场景中创建一个空物体。\r
2.  添加 \`UIDocument\` 组件。\r
3.  将 UXML 文件拖给 \`Source Asset\`。\r
4.  **Panel Settings**：这是全局配置文件，控制 UI 的缩放模式（Scale With Screen Size）、参考分辨率等。\r
\r
### 3.3 代码交互 (C#)\r
\r
\`\`\`csharp\r
using UnityEngine;\r
using UnityEngine.UIElements;\r
\r
public class MyUIController : MonoBehaviour\r
{\r
    private UIDocument uiDocument;\r
    private Button submitBtn;\r
    private Label titleLabel;\r
\r
    private void OnEnable()\r
    {\r
        uiDocument = GetComponent<UIDocument>();\r
        var root = uiDocument.rootVisualElement;\r
\r
        // 1. 查找元素 (Query)\r
        // 按名字查找\r
        submitBtn = root.Q<Button>("SubmitBtn");\r
        // 按类型查找\r
        titleLabel = root.Q<Label>();\r
        // 按 Class 查找\r
        var items = root.Query<VisualElement>(className: "item").ToList();\r
\r
        // 2. 绑定事件\r
        submitBtn.clicked += OnSubmit;\r
        \r
        // 3. 注册回调 (更底层的事件)\r
        submitBtn.RegisterCallback<MouseEnterEvent>(evt => \r
        {\r
            submitBtn.AddToClassList("hover-effect");\r
        });\r
        \r
        submitBtn.RegisterCallback<MouseLeaveEvent>(evt => \r
        {\r
            submitBtn.RemoveFromClassList("hover-effect");\r
        });\r
    }\r
\r
    private void OnSubmit()\r
    {\r
        Debug.Log("Button Clicked!");\r
        titleLabel.text = "Submitted!";\r
    }\r
}\r
\`\`\`\r
\r
## 4. 常用控件与布局\r
\r
### 4.1 基础控件\r
\r
*   **VisualElement**：最基础的容器，类似 \`div\`。\r
*   **Label**：文本标签。\r
*   **Button**：按钮。\r
*   **TextField**：输入框。\r
*   **Toggle**：复选框。\r
*   **ScrollView**：滚动视图。\r
*   **ListView**：高性能列表（虚拟化渲染）。\r
\r
### 4.2 Flexbox 布局\r
\r
UI Toolkit 使用 Flexbox 布局引擎，核心属性包括：\r
\r
*   **Flex Direction**：子元素排列方向（Row/Column）。\r
*   **Align Items**：侧轴对齐方式（FlexStart/Center/FlexEnd）。\r
*   **Justify Content**：主轴对齐方式（FlexStart/Center/SpaceBetween）。\r
*   **Flex Grow**：剩余空间分配比例。\r
*   **Flex Shrink**：空间不足时的收缩比例。\r
\r
## 5. 高级功能\r
\r
### 5.1 ListView (列表)\r
\r
ListView 是 UI Toolkit 的杀手级功能，性能极高。\r
\r
\`\`\`csharp\r
public class ListController : MonoBehaviour\r
{\r
    private ListView listView;\r
    private List<string> data = new List<string>();\r
\r
    void Start()\r
    {\r
        // 准备数据\r
        for (int i = 0; i < 1000; i++) data.Add($"Item {i}");\r
\r
        var root = GetComponent<UIDocument>().rootVisualElement;\r
        listView = root.Q<ListView>("MyList");\r
\r
        // 1. 设置数据源\r
        listView.itemsSource = data;\r
\r
        // 2. 创建 Item 的回调 (makeItem)\r
        listView.makeItem = () => new Label();\r
\r
        // 3. 绑定数据的回调 (bindItem)\r
        listView.bindItem = (element, index) => \r
        {\r
            (element as Label).text = data[index];\r
        };\r
\r
        // 4. 设置高度\r
        listView.fixedItemHeight = 30;\r
    }\r
}\r
\`\`\`\r
\r
### 5.2 动画 (Transition)\r
\r
UI Toolkit 支持 CSS 风格的过渡动画。\r
\r
在 USS 中：\r
\`\`\`css\r
.button {\r
    width: 100px;\r
    transition-property: width, background-color;\r
    transition-duration: 0.5s;\r
    transition-timing-function: ease-in-out;\r
}\r
\r
.button:hover {\r
    width: 150px;\r
    background-color: red;\r
}\r
\`\`\`\r
当鼠标悬停时，按钮会自动平滑变宽变色，无需写一行 C# 代码。\r
\r
### 5.3 自定义控件\r
\r
你可以继承 \`VisualElement\` 创建自定义控件，并暴露给 UI Builder。\r
\r
\`\`\`csharp\r
[UxmlElement]\r
public partial class HealthBar : VisualElement\r
{\r
    // ... 实现逻辑\r
}\r
\`\`\`\r
\r
## 6. 常见问题与解决方案\r
\r
### 6.1 屏幕适配\r
\r
**问题**：UI 在不同分辨率下大小不一致。\r
**解决**：\r
1.  在 Project Settings 中创建 \`Panel Settings\` 资源。\r
2.  设置 \`Scale Mode\` 为 \`Scale With Screen Size\`。\r
3.  设置 \`Reference Resolution\` (如 1920x1080)。\r
4.  将该 Panel Settings 赋值给场景中的 \`UIDocument\`。\r
\r
### 6.2 事件穿透\r
\r
**问题**：点击 UI 时，背后的 3D 物体也被点击了。\r
**解决**：\r
UI Toolkit 不使用 \`EventSystem.IsPointerOverGameObject()\`。\r
你需要手动检测鼠标是否在 UI 上：\r
\`\`\`csharp\r
// 这是一个简单的扩展方法示例\r
public static bool IsPointerOverUI(Vector2 screenPos)\r
{\r
    // 需要结合 PanelSettings 和 Picker 逻辑实现\r
    // 目前官方 API 还在完善中，通常通过 PickingMode.Ignore 来控制\r
}\r
\`\`\`\r
\r
### 6.3 字体模糊\r
\r
**问题**：文字边缘有锯齿或模糊。\r
**解决**：\r
1.  使用 TextMeshPro 字体生成 Atlas。\r
2.  在 Panel Settings 中启用 \`Text Core\` 支持（Unity 6+）。\r
\r
## 7. 总结\r
\r
UI Toolkit 是 Unity UI 的未来。虽然目前 UGUI 依然占据主流，但 UI Toolkit 在编辑器扩展领域已经处于统治地位，在运行时 UI 方面也随着 Unity 6 的发布变得成熟。\r
\r
**建议**：\r
*   **编辑器工具**：无脑选 UI Toolkit。\r
*   **新项目**：如果团队有 Web 前端经验，强烈推荐尝试 UI Toolkit。\r
*   **老项目**：继续使用 UGUI，迁移成本较高。\r
\r
## 8. 参考资源\r
\r
*   [Unity UI Toolkit 官方文档](https://docs.unity3d.com/Manual/UIElements.html)\r
*   [UI Builder 手册](https://docs.unity3d.com/Manual/UIBuilder.html)\r
*   [Unity 6 以下版本参考](./Image/UIToolkit1.png)\r
*   [Unity 6 及以上版本参考](./Image/UIToolkit2.png)\r
`,lp=`---\r
title: Unity YooAsset 笔记\r
date: 2025-12-05\r
tags: [Unity,技术,笔记,资源管理,AssetBundle]\r
---\r
\r
# Unity YooAsset 笔记\r
\r
## 1. 简介\r
\r
**YooAsset** 是一套国产的、商业级品质的 **AssetBundle 资源管理系统**。它汲取了 Addressables 的设计理念，但摒弃了其复杂的配置和黑盒机制，提供了更简单、更透明、更强大的资源管理体验。\r
\r
### 1.1 核心优势\r
\r
*   **零冗余构建**：自动分析依赖，杜绝资源重复打包。\r
*   **可视化分析**：自带强大的资源分析工具，引用关系一目了然。\r
*   **灵活的加载策略**：支持分包下载、边玩边下、加密解密。\r
*   **原生文件支持**：支持直接打包视频、音频等原生文件（Raw File），无需解压即可播放。\r
*   **热更友好**：完善的版本管理和补丁更新流程。\r
\r
## 2. 安装与环境\r
\r
### 2.1 安装\r
\r
1.  打开 \`Package Manager\`。\r
2.  点击 \`+\` -> \`Add package from git URL\`。\r
3.  输入：\`https://github.com/tuyoogame/YooAsset.git\`。\r
4.  建议同时安装 \`UniTask\` 以获得更好的异步编程体验。\r
\r
## 3. 使用流程详解\r
\r
### 3.1 资源配置 (AssetBundle Collector)\r
\r
这是 YooAsset 的核心配置界面，用于定义哪些资源需要打包。\r
\r
1.  菜单栏 \`YooAsset\` -> \`AssetBundle Collector\`。\r
2.  **Package**：创建一个包（如 \`DefaultPackage\`）。\r
3.  **Group**：创建分组（如 \`UI\`, \`Sound\`, \`Model\`）。\r
4.  **Collector**：拖入资源文件夹。\r
    *   **PackRule** (打包规则)：\r
        *   \`PackSeparately\`：每个文件单独打一个包（适合 Prefab）。\r
        *   \`PackTogether\`：整个文件夹打一个包（适合 Shader, Icon）。\r
        *   \`PackRawFile\`：原生文件打包（适合 Video, Audio）。\r
    *   **AddressRule** (寻址规则)：\r
        *   \`AddressByFileName\`：通过文件名加载（如 "Cube"）。\r
        *   \`AddressByPath\`：通过路径加载（如 "Assets/Res/Cube.prefab"）。\r
\r
### 3.2 构建资源 (AssetBundle Builder)\r
\r
1.  菜单栏 \`YooAsset\` -> \`AssetBundle Builder\`。\r
2.  **Build Pipeline**：选择 \`ScriptableBuildPipeline\` (SBP)。\r
3.  **Build Mode**：\r
    *   \`ForceRebuild\`：强制全量构建。\r
    *   \`IncrementalBuild\`：增量构建（只打包修改过的资源）。\r
4.  **Encryption**：选择加密类（如果需要加密）。\r
5.  点击 \`Build\`。构建产物会生成在项目目录下的 \`Bundles\` 文件夹。\r
\r
### 3.3 代码初始化\r
\r
YooAsset 支持三种运行模式，方便开发和发布。\r
\r
\`\`\`csharp\r
using YooAsset;\r
using UnityEngine;\r
using System.Collections;\r
\r
public class GameManager : MonoBehaviour\r
{\r
    IEnumerator Start()\r
    {\r
        // 1. 初始化 YooAsset\r
        YooAssets.Initialize();\r
        \r
        // 2. 创建资源包\r
        var package = YooAssets.CreatePackage("DefaultPackage");\r
        YooAssets.SetDefaultPackage(package);\r
\r
        // 3. 选择运行模式\r
        InitializeParameters initParameters = null;\r
\r
#if UNITY_EDITOR\r
        // 编辑器模拟模式：直接读取 Assets 目录，无需打包，开发最快\r
        var simulateMode = new EditorSimulateModeParameters();\r
        simulateMode.SimulateManifestFilePath = EditorSimulateModeHelper.SimulateBuild("DefaultPackage");\r
        initParameters = simulateMode;\r
#elif UNITY_STANDALONE\r
        // 单机模式：直接读取 StreamingAssets 里的包\r
        var offlineMode = new OfflinePlayModeParameters();\r
        initParameters = offlineMode;\r
#else\r
        // 联机模式：从服务器下载热更\r
        var hostMode = new HostPlayModeParameters();\r
        hostMode.BuildinQueryServices = new GameQueryServices(); // 内置资源查询服务\r
        hostMode.RemoteServices = new GameRemoteServices(); // 远端服务器地址\r
        initParameters = hostMode;\r
#endif\r
\r
        yield return package.InitializeAsync(initParameters);\r
        \r
        Debug.Log("YooAsset 初始化完成");\r
    }\r
}\r
\`\`\`\r
\r
### 3.4 加载资源\r
\r
\`\`\`csharp\r
// 同步加载\r
AssetHandle handle = YooAssets.LoadAssetSync<GameObject>("Cube");\r
GameObject go = handle.InstantiateSync();\r
\r
// 异步加载\r
AssetHandle handleAsync = YooAssets.LoadAssetAsync<GameObject>("Cube");\r
yield return handleAsync;\r
GameObject goAsync = handleAsync.InstantiateSync();\r
\r
// 场景加载\r
SceneHandle sceneHandle = YooAssets.LoadSceneAsync("GameScene");\r
yield return sceneHandle;\r
\r
// 原生文件加载 (如视频)\r
RawFileHandle rawHandle = YooAssets.LoadRawFileAsync("Movie.mp4");\r
yield return rawHandle;\r
string filePath = rawHandle.GetRawFilePath(); // 获取本地绝对路径\r
videoPlayer.url = filePath;\r
\r
// 资源释放\r
handle.Release();\r
\`\`\`\r
\r
## 4. 热更新流程\r
\r
YooAsset 的热更新流程非常标准：\r
\r
1.  **获取资源版本**：\`package.UpdatePackageVersionAsync()\`。\r
2.  **更新资源清单**：\`package.UpdatePackageManifestAsync(version)\`。\r
3.  **创建下载器**：\`package.CreateResourceDownloader(tags)\`。\r
4.  **下载资源**：\`downloader.BeginDownload()\`。\r
5.  **下载完成**：进入游戏。\r
\r
\`\`\`csharp\r
IEnumerator UpdatePatch()\r
{\r
    var package = YooAssets.GetPackage("DefaultPackage");\r
    \r
    // 1. 获取最新版本\r
    var operation = package.UpdatePackageVersionAsync();\r
    yield return operation;\r
    string version = operation.PackageVersion;\r
    \r
    // 2. 更新清单\r
    var manifestOp = package.UpdatePackageManifestAsync(version);\r
    yield return manifestOp;\r
    \r
    // 3. 创建下载器\r
    int downloadingMaxNum = 10;\r
    int failedTryAgain = 3;\r
    var downloader = package.CreateResourceDownloader(downloadingMaxNum, failedTryAgain);\r
    \r
    if (downloader.TotalDownloadCount == 0)\r
    {\r
        Debug.Log("没有需要下载的资源");\r
    }\r
    else\r
    {\r
        // 4. 开始下载\r
        downloader.BeginDownload();\r
        yield return downloader;\r
        \r
        if (downloader.Status == EOperationStatus.Succeed)\r
        {\r
            Debug.Log("热更完成！");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
## 5. 常见问题与解决方案\r
\r
### 5.1 Shader 丢失/变紫\r
\r
**原因**：AssetBundle 中的 Shader 变体丢失，或者 Shader 没有被打进包里。\r
**解决**：\r
1.  创建一个 \`ShaderVariantCollection\`，收集所有用到的变体。\r
2.  将所有 Shader 和变体集合放入一个文件夹（如 \`Assets/Shaders\`）。\r
3.  在 Collector 中将该文件夹设为 \`PackTogether\`，打成一个包。\r
4.  游戏启动时优先加载这个 Shader 包，并调用 \`ShaderVariantCollection.WarmUp()\`。\r
\r
### 5.2 循环依赖\r
\r
**原因**：A 包引用 B 包，B 包又引用 A 包。\r
**解决**：YooAsset 的可视化分析工具可以检测循环依赖。通常需要将公共引用的资源提取出来单独打一个包（Shared 包）。\r
\r
### 5.3 资源重复打包\r
\r
**原因**：两个包都引用了一个未打包的贴图，导致贴图被分别打进了两个包。\r
**解决**：YooAsset 会自动检测冗余。在构建报告中查看 \`Redundancy\` 页面，将重复的资源显式添加到 Collector 中单独打包。\r
\r
## 6. 高级技巧\r
\r
### 6.1 加密 (Encryption)\r
\r
实现 \`IEncryptionServices\` 接口，可以对 AssetBundle 进行加密。\r
*   **LoadOffset**：文件头偏移加密（性能最好）。\r
*   **XOR**：异或加密。\r
*   **AES**：全量加密（安全性最高，但加载慢）。\r
\r
### 6.2 边玩边下\r
\r
利用 \`Tags\` 功能。\r
1.  在 Collector 中给资源打标签（如 \`Level1\`, \`Level2\`）。\r
2.  初始化时只下载 \`Level1\` 的资源。\r
3.  玩家玩第一关时，后台静默下载 \`Level2\` 的资源。\r
\r
## 7. 总结\r
\r
YooAsset 是目前 Unity 资源管理的**最佳实践**。它解决了原生 AssetBundle 的所有痛点，又比 Addressables 更轻量、更可控。\r
\r
**建议**：\r
*   **新项目**：直接上 YooAsset。\r
*   **老项目**：如果 AssetBundle 管理混乱，可以考虑迁移到 YooAsset，成本可控。\r
\r
## 8. 参考资源\r
\r
*   [YooAsset 官方文档](https://www.yooasset.com/)\r
*   [YooAsset 源码仓库](https://github.com/tuyoogame/YooAsset)\r
`,ap=`---\r
title: 我的第一篇博客\r
date: 2025-11-27\r
tags: [日常,]\r
---\r
\r
# 启程\r
\r
这是我的第一篇博客文章。\r
\r
在这里，我将分享我的学习历程和生活点滴。\r
https://www.bilibili.com/video/BV1GJ411x7h7\r
\`\`\`javascript\r
console.log("Hello World!");\r
`,cp=`# 在这里你将会了解到我与Unity的各种爱恨情仇。\r
\r
我的游戏开发算法可视化仓库: https://xiajie321.github.io/GridCo\r
\r
该博客是我个人用于记录Unity的学习笔记,也有可能有其它的东西吧,哈哈。`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function Xa(e){return typeof e>"u"||e===null}function up(e){return typeof e=="object"&&e!==null}function fp(e){return Array.isArray(e)?e:Xa(e)?[]:[e]}function dp(e,n){var t,r,i,o;if(n)for(o=Object.keys(n),t=0,r=o.length;t<r;t+=1)i=o[t],e[i]=n[i];return e}function hp(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function pp(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var mp=Xa,gp=up,vp=fp,yp=hp,bp=pp,xp=dp,Le={isNothing:mp,isObject:gp,toArray:vp,repeat:yp,isNegativeZero:bp,extend:xp};function za(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function rr(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=za(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}rr.prototype=Object.create(Error.prototype);rr.prototype.constructor=rr;rr.prototype.toString=function(n){return this.name+": "+za(this,n)};var $e=rr;function Ii(e,n,t,r,i){var o="",s="",l=Math.floor(i/2)-1;return r-n>l&&(o=" ... ",n=r-l+o.length),t-r>l&&(s=" ...",t=r+l-s.length),{str:o+e.slice(n,t).replace(/\t/g,"→")+s,pos:r-n+o.length}}function Oi(e,n){return Le.repeat(" ",n-e.length)+e}function _p(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],i=[],o,s=-1;o=t.exec(e.buffer);)i.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var l="",a,u,c=Math.min(e.line+n.linesAfter,i.length).toString().length,f=n.maxLength-(n.indent+c+3);for(a=1;a<=n.linesBefore&&!(s-a<0);a++)u=Ii(e.buffer,r[s-a],i[s-a],e.position-(r[s]-r[s-a]),f),l=Le.repeat(" ",n.indent)+Oi((e.line-a+1).toString(),c)+" | "+u.str+`
`+l;for(u=Ii(e.buffer,r[s],i[s],e.position,f),l+=Le.repeat(" ",n.indent)+Oi((e.line+1).toString(),c)+" | "+u.str+`
`,l+=Le.repeat("-",n.indent+c+3+u.pos)+`^
`,a=1;a<=n.linesAfter&&!(s+a>=i.length);a++)u=Ii(e.buffer,r[s+a],i[s+a],e.position-(r[s]-r[s+a]),f),l+=Le.repeat(" ",n.indent)+Oi((e.line+a+1).toString(),c)+" | "+u.str+`
`;return l.replace(/\n$/,"")}var wp=_p,Cp=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Ap=["scalar","sequence","mapping"];function Sp(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function Tp(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Cp.indexOf(t)===-1)throw new $e('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Sp(n.styleAliases||null),Ap.indexOf(this.kind)===-1)throw new $e('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Me=Tp;function $s(e,n){var t=[];return e[n].forEach(function(r){var i=t.length;t.forEach(function(o,s){o.tag===r.tag&&o.kind===r.kind&&o.multi===r.multi&&(i=s)}),t[i]=r}),t}function Ep(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function Qi(e){return this.extend(e)}Qi.prototype.extend=function(n){var t=[],r=[];if(n instanceof Me)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new $e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(o){if(!(o instanceof Me))throw new $e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new $e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new $e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(o){if(!(o instanceof Me))throw new $e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Qi.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=$s(i,"implicit"),i.compiledExplicit=$s(i,"explicit"),i.compiledTypeMap=Ep(i.compiledImplicit,i.compiledExplicit),i};var Qa=Qi,Za=new Me("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ec=new Me("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),nc=new Me("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),tc=new Qa({explicit:[Za,ec,nc]});function Ip(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Op(){return null}function kp(e){return e===null}var rc=new Me("tag:yaml.org,2002:null",{kind:"scalar",resolve:Ip,construct:Op,predicate:kp,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Lp(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Pp(e){return e==="true"||e==="True"||e==="TRUE"}function Mp(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ic=new Me("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Lp,construct:Pp,predicate:Mp,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Rp(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Dp(e){return 48<=e&&e<=55}function Np(e){return 48<=e&&e<=57}function Up(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Rp(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Dp(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!Np(e.charCodeAt(t)))return!1;r=!0}return!(!r||i==="_")}function Fp(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Bp(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Le.isNegativeZero(e)}var oc=new Me("tag:yaml.org,2002:int",{kind:"scalar",resolve:Up,construct:Fp,predicate:Bp,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Hp=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Gp(e){return!(e===null||!Hp.test(e)||e[e.length-1]==="_")}function jp(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var Vp=/^[-+]?[0-9]+e/;function Wp(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Le.isNegativeZero(e))return"-0.0";return t=e.toString(10),Vp.test(t)?t.replace("e",".e"):t}function Yp(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Le.isNegativeZero(e))}var sc=new Me("tag:yaml.org,2002:float",{kind:"scalar",resolve:Gp,construct:jp,predicate:Yp,represent:Wp,defaultStyle:"lowercase"}),lc=tc.extend({implicit:[rc,ic,oc,sc]}),ac=lc,cc=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),uc=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function $p(e){return e===null?!1:cc.exec(e)!==null||uc.exec(e)!==null}function qp(e){var n,t,r,i,o,s,l,a=0,u=null,c,f,d;if(n=cc.exec(e),n===null&&(n=uc.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(o=+n[4],s=+n[5],l=+n[6],n[7]){for(a=n[7].slice(0,3);a.length<3;)a+="0";a=+a}return n[9]&&(c=+n[10],f=+(n[11]||0),u=(c*60+f)*6e4,n[9]==="-"&&(u=-u)),d=new Date(Date.UTC(t,r,i,o,s,l,a)),u&&d.setTime(d.getTime()-u),d}function Kp(e){return e.toISOString()}var fc=new Me("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:$p,construct:qp,instanceOf:Date,represent:Kp});function Jp(e){return e==="<<"||e===null}var dc=new Me("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Jp}),Io=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Xp(e){if(e===null)return!1;var n,t,r=0,i=e.length,o=Io;for(t=0;t<i;t++)if(n=o.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function zp(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,o=Io,s=0,l=[];for(n=0;n<i;n++)n%4===0&&n&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|o.indexOf(r.charAt(n));return t=i%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function Qp(e){var n="",t=0,r,i,o=e.length,s=Io;for(r=0;r<o;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return i=o%3,i===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):i===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):i===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function Zp(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var hc=new Me("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Xp,construct:zp,predicate:Zp,represent:Qp}),em=Object.prototype.hasOwnProperty,nm=Object.prototype.toString;function tm(e){if(e===null)return!0;var n=[],t,r,i,o,s,l=e;for(t=0,r=l.length;t<r;t+=1){if(i=l[t],s=!1,nm.call(i)!=="[object Object]")return!1;for(o in i)if(em.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(o)===-1)n.push(o);else return!1}return!0}function rm(e){return e!==null?e:[]}var pc=new Me("tag:yaml.org,2002:omap",{kind:"sequence",resolve:tm,construct:rm}),im=Object.prototype.toString;function om(e){if(e===null)return!0;var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],im.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;o[n]=[i[0],r[i[0]]]}return!0}function sm(e){if(e===null)return[];var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],i=Object.keys(r),o[n]=[i[0],r[i[0]]];return o}var mc=new Me("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:om,construct:sm}),lm=Object.prototype.hasOwnProperty;function am(e){if(e===null)return!0;var n,t=e;for(n in t)if(lm.call(t,n)&&t[n]!==null)return!1;return!0}function cm(e){return e!==null?e:{}}var gc=new Me("tag:yaml.org,2002:set",{kind:"mapping",resolve:am,construct:cm}),Oo=ac.extend({implicit:[fc,dc],explicit:[hc,pc,mc,gc]}),qn=Object.prototype.hasOwnProperty,Pr=1,vc=2,yc=3,Mr=4,ki=1,um=2,qs=3,fm=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,dm=/[\x85\u2028\u2029]/,hm=/[,\[\]\{\}]/,bc=/^(?:!|!!|![a-z\-]+!)$/i,xc=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ks(e){return Object.prototype.toString.call(e)}function bn(e){return e===10||e===13}function lt(e){return e===9||e===32}function Je(e){return e===9||e===32||e===10||e===13}function bt(e){return e===44||e===91||e===93||e===123||e===125}function pm(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function mm(e){return e===120?2:e===117?4:e===85?8:0}function gm(e){return 48<=e&&e<=57?e-48:-1}function Js(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function vm(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function _c(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var wc=new Array(256),Cc=new Array(256);for(var ht=0;ht<256;ht++)wc[ht]=Js(ht)?1:0,Cc[ht]=Js(ht);function ym(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Oo,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ac(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=wp(t),new $e(n,t)}function j(e,n){throw Ac(e,n)}function Rr(e,n){e.onWarning&&e.onWarning.call(null,Ac(e,n))}var Xs={YAML:function(n,t,r){var i,o,s;n.version!==null&&j(n,"duplication of %YAML directive"),r.length!==1&&j(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&j(n,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&j(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&Rr(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,o;r.length!==2&&j(n,"TAG directive accepts exactly two arguments"),i=r[0],o=r[1],bc.test(i)||j(n,"ill-formed tag handle (first argument) of the TAG directive"),qn.call(n.tagMap,i)&&j(n,'there is a previously declared suffix for "'+i+'" tag handle'),xc.test(o)||j(n,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{j(n,"tag prefix is malformed: "+o)}n.tagMap[i]=o}};function Yn(e,n,t,r){var i,o,s,l;if(n<t){if(l=e.input.slice(n,t),r)for(i=0,o=l.length;i<o;i+=1)s=l.charCodeAt(i),s===9||32<=s&&s<=1114111||j(e,"expected valid JSON character");else fm.test(l)&&j(e,"the stream contains non-printable characters");e.result+=l}}function zs(e,n,t,r){var i,o,s,l;for(Le.isObject(t)||j(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),s=0,l=i.length;s<l;s+=1)o=i[s],qn.call(n,o)||(_c(n,o,t[o]),r[o]=!0)}function xt(e,n,t,r,i,o,s,l,a){var u,c;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),u=0,c=i.length;u<c;u+=1)Array.isArray(i[u])&&j(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Ks(i[u])==="[object Object]"&&(i[u]="[object Object]");if(typeof i=="object"&&Ks(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(u=0,c=o.length;u<c;u+=1)zs(e,n,o[u],t);else zs(e,n,o,t);else!e.json&&!qn.call(t,i)&&qn.call(n,i)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=a||e.position,j(e,"duplicated mapping key")),_c(n,i,o),delete t[i];return n}function ko(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):j(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Ee(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;lt(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(bn(i))for(ko(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Rr(e,"deficient indentation"),r}function li(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||Je(t)))}function Lo(e,n){n===1?e.result+=" ":n>1&&(e.result+=Le.repeat(`
`,n-1))}function bm(e,n,t){var r,i,o,s,l,a,u,c,f=e.kind,d=e.result,p;if(p=e.input.charCodeAt(e.position),Je(p)||bt(p)||p===35||p===38||p===42||p===33||p===124||p===62||p===39||p===34||p===37||p===64||p===96||(p===63||p===45)&&(i=e.input.charCodeAt(e.position+1),Je(i)||t&&bt(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,l=!1;p!==0;){if(p===58){if(i=e.input.charCodeAt(e.position+1),Je(i)||t&&bt(i))break}else if(p===35){if(r=e.input.charCodeAt(e.position-1),Je(r))break}else{if(e.position===e.lineStart&&li(e)||t&&bt(p))break;if(bn(p))if(a=e.line,u=e.lineStart,c=e.lineIndent,Ee(e,!1,-1),e.lineIndent>=n){l=!0,p=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=a,e.lineStart=u,e.lineIndent=c;break}}l&&(Yn(e,o,s,!1),Lo(e,e.line-a),o=s=e.position,l=!1),lt(p)||(s=e.position+1),p=e.input.charCodeAt(++e.position)}return Yn(e,o,s,!1),e.result?!0:(e.kind=f,e.result=d,!1)}function xm(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Yn(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else bn(t)?(Yn(e,r,i,!0),Lo(e,Ee(e,!1,n)),r=i=e.position):e.position===e.lineStart&&li(e)?j(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);j(e,"unexpected end of the stream within a single quoted scalar")}function _m(e,n){var t,r,i,o,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return Yn(e,t,e.position,!0),e.position++,!0;if(l===92){if(Yn(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),bn(l))Ee(e,!1,n);else if(l<256&&wc[l])e.result+=Cc[l],e.position++;else if((s=mm(l))>0){for(i=s,o=0;i>0;i--)l=e.input.charCodeAt(++e.position),(s=pm(l))>=0?o=(o<<4)+s:j(e,"expected hexadecimal character");e.result+=vm(o),e.position++}else j(e,"unknown escape sequence");t=r=e.position}else bn(l)?(Yn(e,t,r,!0),Lo(e,Ee(e,!1,n)),t=r=e.position):e.position===e.lineStart&&li(e)?j(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}j(e,"unexpected end of the stream within a double quoted scalar")}function wm(e,n){var t=!0,r,i,o,s=e.tag,l,a=e.anchor,u,c,f,d,p,g=Object.create(null),y,S,L,w;if(w=e.input.charCodeAt(e.position),w===91)c=93,p=!1,l=[];else if(w===123)c=125,p=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),w=e.input.charCodeAt(++e.position);w!==0;){if(Ee(e,!0,n),w=e.input.charCodeAt(e.position),w===c)return e.position++,e.tag=s,e.anchor=a,e.kind=p?"mapping":"sequence",e.result=l,!0;t?w===44&&j(e,"expected the node content, but found ','"):j(e,"missed comma between flow collection entries"),S=y=L=null,f=d=!1,w===63&&(u=e.input.charCodeAt(e.position+1),Je(u)&&(f=d=!0,e.position++,Ee(e,!0,n))),r=e.line,i=e.lineStart,o=e.position,It(e,n,Pr,!1,!0),S=e.tag,y=e.result,Ee(e,!0,n),w=e.input.charCodeAt(e.position),(d||e.line===r)&&w===58&&(f=!0,w=e.input.charCodeAt(++e.position),Ee(e,!0,n),It(e,n,Pr,!1,!0),L=e.result),p?xt(e,l,g,S,y,L,r,i,o):f?l.push(xt(e,null,g,S,y,L,r,i,o)):l.push(y),Ee(e,!0,n),w=e.input.charCodeAt(e.position),w===44?(t=!0,w=e.input.charCodeAt(++e.position)):t=!1}j(e,"unexpected end of the stream within a flow collection")}function Cm(e,n){var t,r,i=ki,o=!1,s=!1,l=n,a=0,u=!1,c,f;if(f=e.input.charCodeAt(e.position),f===124)r=!1;else if(f===62)r=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)ki===i?i=f===43?qs:um:j(e,"repeat of a chomping mode identifier");else if((c=gm(f))>=0)c===0?j(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?j(e,"repeat of an indentation width identifier"):(l=n+c-1,s=!0);else break;if(lt(f)){do f=e.input.charCodeAt(++e.position);while(lt(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!bn(f)&&f!==0)}for(;f!==0;){for(ko(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),bn(f)){a++;continue}if(e.lineIndent<l){i===qs?e.result+=Le.repeat(`
`,o?1+a:a):i===ki&&o&&(e.result+=`
`);break}for(r?lt(f)?(u=!0,e.result+=Le.repeat(`
`,o?1+a:a)):u?(u=!1,e.result+=Le.repeat(`
`,a+1)):a===0?o&&(e.result+=" "):e.result+=Le.repeat(`
`,a):e.result+=Le.repeat(`
`,o?1+a:a),o=!0,s=!0,a=0,t=e.position;!bn(f)&&f!==0;)f=e.input.charCodeAt(++e.position);Yn(e,t,e.position,!1)}return!0}function Qs(e,n){var t,r=e.tag,i=e.anchor,o=[],s,l=!1,a;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),a=e.input.charCodeAt(e.position);a!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,j(e,"tab characters must not be used in indentation")),!(a!==45||(s=e.input.charCodeAt(e.position+1),!Je(s))));){if(l=!0,e.position++,Ee(e,!0,-1)&&e.lineIndent<=n){o.push(null),a=e.input.charCodeAt(e.position);continue}if(t=e.line,It(e,n,yc,!1,!0),o.push(e.result),Ee(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&a!==0)j(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function Am(e,n,t){var r,i,o,s,l,a,u=e.tag,c=e.anchor,f={},d=Object.create(null),p=null,g=null,y=null,S=!1,L=!1,w;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=f),w=e.input.charCodeAt(e.position);w!==0;){if(!S&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,j(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),o=e.line,(w===63||w===58)&&Je(r))w===63?(S&&(xt(e,f,d,p,g,null,s,l,a),p=g=y=null),L=!0,S=!0,i=!0):S?(S=!1,i=!0):j(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,w=r;else{if(s=e.line,l=e.lineStart,a=e.position,!It(e,t,vc,!1,!0))break;if(e.line===o){for(w=e.input.charCodeAt(e.position);lt(w);)w=e.input.charCodeAt(++e.position);if(w===58)w=e.input.charCodeAt(++e.position),Je(w)||j(e,"a whitespace character is expected after the key-value separator within a block mapping"),S&&(xt(e,f,d,p,g,null,s,l,a),p=g=y=null),L=!0,S=!1,i=!1,p=e.tag,g=e.result;else if(L)j(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=c,!0}else if(L)j(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=c,!0}if((e.line===o||e.lineIndent>n)&&(S&&(s=e.line,l=e.lineStart,a=e.position),It(e,n,Mr,!0,i)&&(S?g=e.result:y=e.result),S||(xt(e,f,d,p,g,y,s,l,a),p=g=y=null),Ee(e,!0,-1),w=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>n)&&w!==0)j(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return S&&xt(e,f,d,p,g,null,s,l,a),L&&(e.tag=u,e.anchor=c,e.kind="mapping",e.result=f),L}function Sm(e){var n,t=!1,r=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&j(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):j(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Je(s);)s===33&&(r?j(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),bc.test(i)||j(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(n,e.position),hm.test(o)&&j(e,"tag suffix cannot contain flow indicator characters")}o&&!xc.test(o)&&j(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{j(e,"tag name is malformed: "+o)}return t?e.tag=o:qn.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:j(e,'undeclared tag handle "'+i+'"'),!0}function Tm(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&j(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!Je(t)&&!bt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&j(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Em(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!Je(r)&&!bt(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&j(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),qn.call(e.anchorMap,t)||j(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Ee(e,!0,-1),!0}function It(e,n,t,r,i){var o,s,l,a=1,u=!1,c=!1,f,d,p,g,y,S;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=l=Mr===t||yc===t,r&&Ee(e,!0,-1)&&(u=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)),a===1)for(;Sm(e)||Tm(e);)Ee(e,!0,-1)?(u=!0,l=o,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)):l=!1;if(l&&(l=u||i),(a===1||Mr===t)&&(Pr===t||vc===t?y=n:y=n+1,S=e.position-e.lineStart,a===1?l&&(Qs(e,S)||Am(e,S,y))||wm(e,y)?c=!0:(s&&Cm(e,y)||xm(e,y)||_m(e,y)?c=!0:Em(e)?(c=!0,(e.tag!==null||e.anchor!==null)&&j(e,"alias node should not have any properties")):bm(e,y,Pr===t)&&(c=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):a===0&&(c=l&&Qs(e,S))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&j(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,d=e.implicitTypes.length;f<d;f+=1)if(g=e.implicitTypes[f],g.resolve(e.result)){e.result=g.construct(e.result),e.tag=g.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(qn.call(e.typeMap[e.kind||"fallback"],e.tag))g=e.typeMap[e.kind||"fallback"][e.tag];else for(g=null,p=e.typeMap.multi[e.kind||"fallback"],f=0,d=p.length;f<d;f+=1)if(e.tag.slice(0,p[f].tag.length)===p[f].tag){g=p[f];break}g||j(e,"unknown tag !<"+e.tag+">"),e.result!==null&&g.kind!==e.kind&&j(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+g.kind+'", not "'+e.kind+'"'),g.resolve(e.result,e.tag)?(e.result=g.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):j(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||c}function Im(e){var n=e.position,t,r,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(Ee(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!Je(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&j(e,"directive name must not be less than one character in length");s!==0;){for(;lt(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!bn(s));break}if(bn(s))break;for(t=e.position;s!==0&&!Je(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}s!==0&&ko(e),qn.call(Xs,r)?Xs[r](e,r,i):Rr(e,'unknown document directive "'+r+'"')}if(Ee(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Ee(e,!0,-1)):o&&j(e,"directives end mark is expected"),It(e,e.lineIndent-1,Mr,!1,!0),Ee(e,!0,-1),e.checkLineBreaks&&dm.test(e.input.slice(n,e.position))&&Rr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&li(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Ee(e,!0,-1));return}if(e.position<e.length-1)j(e,"end of the stream or a document separator is expected");else return}function Sc(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new ym(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,j(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Im(t);return t.documents}function Om(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=Sc(e,t);if(typeof n!="function")return r;for(var i=0,o=r.length;i<o;i+=1)n(r[i])}function km(e,n){var t=Sc(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new $e("expected a single document in the stream, but found more")}}var Lm=Om,Pm=km,Tc={loadAll:Lm,load:Pm},Ec=Object.prototype.toString,Ic=Object.prototype.hasOwnProperty,Po=65279,Mm=9,ir=10,Rm=13,Dm=32,Nm=33,Um=34,Zi=35,Fm=37,Bm=38,Hm=39,Gm=42,Oc=44,jm=45,Dr=58,Vm=61,Wm=62,Ym=63,$m=64,kc=91,Lc=93,qm=96,Pc=123,Km=124,Mc=125,Be={};Be[0]="\\0";Be[7]="\\a";Be[8]="\\b";Be[9]="\\t";Be[10]="\\n";Be[11]="\\v";Be[12]="\\f";Be[13]="\\r";Be[27]="\\e";Be[34]='\\"';Be[92]="\\\\";Be[133]="\\N";Be[160]="\\_";Be[8232]="\\L";Be[8233]="\\P";var Jm=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Xm=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function zm(e,n){var t,r,i,o,s,l,a;if(n===null)return{};for(t={},r=Object.keys(n),i=0,o=r.length;i<o;i+=1)s=r[i],l=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),a=e.compiledTypeMap.fallback[s],a&&Ic.call(a.styleAliases,l)&&(l=a.styleAliases[l]),t[s]=l;return t}function Qm(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new $e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+Le.repeat("0",r-n.length)+n}var Zm=1,or=2;function eg(e){this.schema=e.schema||Oo,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Le.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=zm(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?or:Zm,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Zs(e,n){for(var t=Le.repeat(" ",n),r=0,i=-1,o="",s,l=e.length;r<l;)i=e.indexOf(`
`,r),i===-1?(s=e.slice(r),r=l):(s=e.slice(r,i+1),r=i+1),s.length&&s!==`
`&&(o+=t),o+=s;return o}function eo(e,n){return`
`+Le.repeat(" ",e.indent*n)}function ng(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function Nr(e){return e===Dm||e===Mm}function sr(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Po||65536<=e&&e<=1114111}function el(e){return sr(e)&&e!==Po&&e!==Rm&&e!==ir}function nl(e,n,t){var r=el(e),i=r&&!Nr(e);return(t?r:r&&e!==Oc&&e!==kc&&e!==Lc&&e!==Pc&&e!==Mc)&&e!==Zi&&!(n===Dr&&!i)||el(n)&&!Nr(n)&&e===Zi||n===Dr&&i}function tg(e){return sr(e)&&e!==Po&&!Nr(e)&&e!==jm&&e!==Ym&&e!==Dr&&e!==Oc&&e!==kc&&e!==Lc&&e!==Pc&&e!==Mc&&e!==Zi&&e!==Bm&&e!==Gm&&e!==Nm&&e!==Km&&e!==Vm&&e!==Wm&&e!==Hm&&e!==Um&&e!==Fm&&e!==$m&&e!==qm}function rg(e){return!Nr(e)&&e!==Dr}function Ft(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Rc(e){var n=/^\n* /;return n.test(e)}var Dc=1,no=2,Nc=3,Uc=4,yt=5;function ig(e,n,t,r,i,o,s,l){var a,u=0,c=null,f=!1,d=!1,p=r!==-1,g=-1,y=tg(Ft(e,0))&&rg(Ft(e,e.length-1));if(n||s)for(a=0;a<e.length;u>=65536?a+=2:a++){if(u=Ft(e,a),!sr(u))return yt;y=y&&nl(u,c,l),c=u}else{for(a=0;a<e.length;u>=65536?a+=2:a++){if(u=Ft(e,a),u===ir)f=!0,p&&(d=d||a-g-1>r&&e[g+1]!==" ",g=a);else if(!sr(u))return yt;y=y&&nl(u,c,l),c=u}d=d||p&&a-g-1>r&&e[g+1]!==" "}return!f&&!d?y&&!s&&!i(e)?Dc:o===or?yt:no:t>9&&Rc(e)?yt:s?o===or?yt:no:d?Uc:Nc}function og(e,n,t,r,i){e.dump=function(){if(n.length===0)return e.quotingType===or?'""':"''";if(!e.noCompatMode&&(Jm.indexOf(n)!==-1||Xm.test(n)))return e.quotingType===or?'"'+n+'"':"'"+n+"'";var o=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),l=r||e.flowLevel>-1&&t>=e.flowLevel;function a(u){return ng(e,u)}switch(ig(n,l,e.indent,s,a,e.quotingType,e.forceQuotes&&!r,i)){case Dc:return n;case no:return"'"+n.replace(/'/g,"''")+"'";case Nc:return"|"+tl(n,e.indent)+rl(Zs(n,o));case Uc:return">"+tl(n,e.indent)+rl(Zs(sg(n,s),o));case yt:return'"'+lg(n)+'"';default:throw new $e("impossible error: invalid scalar style")}}()}function tl(e,n){var t=Rc(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),o=i?"+":r?"":"-";return t+o+`
`}function rl(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function sg(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,il(e.slice(0,u),n)}(),i=e[0]===`
`||e[0]===" ",o,s;s=t.exec(e);){var l=s[1],a=s[2];o=a[0]===" ",r+=l+(!i&&!o&&a!==""?`
`:"")+il(a,n),i=o}return r}function il(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,o,s=0,l=0,a="";r=t.exec(e);)l=r.index,l-i>n&&(o=s>i?s:l,a+=`
`+e.slice(i,o),i=o+1),s=l;return a+=`
`,e.length-i>n&&s>i?a+=e.slice(i,s)+`
`+e.slice(s+1):a+=e.slice(i),a.slice(1)}function lg(e){for(var n="",t=0,r,i=0;i<e.length;t>=65536?i+=2:i++)t=Ft(e,i),r=Be[t],!r&&sr(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=r||Qm(t);return n}function ag(e,n,t){var r="",i=e.tag,o,s,l;for(o=0,s=t.length;o<s;o+=1)l=t[o],e.replacer&&(l=e.replacer.call(t,String(o),l)),(Pn(e,n,l,!1,!1)||typeof l>"u"&&Pn(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function ol(e,n,t,r){var i="",o=e.tag,s,l,a;for(s=0,l=t.length;s<l;s+=1)a=t[s],e.replacer&&(a=e.replacer.call(t,String(s),a)),(Pn(e,n+1,a,!0,!0,!1,!0)||typeof a>"u"&&Pn(e,n+1,null,!0,!0,!1,!0))&&((!r||i!=="")&&(i+=eo(e,n)),e.dump&&ir===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=o,e.dump=i||"[]"}function cg(e,n,t){var r="",i=e.tag,o=Object.keys(t),s,l,a,u,c;for(s=0,l=o.length;s<l;s+=1)c="",r!==""&&(c+=", "),e.condenseFlow&&(c+='"'),a=o[s],u=t[a],e.replacer&&(u=e.replacer.call(t,a,u)),Pn(e,n,a,!1,!1)&&(e.dump.length>1024&&(c+="? "),c+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Pn(e,n,u,!1,!1)&&(c+=e.dump,r+=c));e.tag=i,e.dump="{"+r+"}"}function ug(e,n,t,r){var i="",o=e.tag,s=Object.keys(t),l,a,u,c,f,d;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new $e("sortKeys must be a boolean or a function");for(l=0,a=s.length;l<a;l+=1)d="",(!r||i!=="")&&(d+=eo(e,n)),u=s[l],c=t[u],e.replacer&&(c=e.replacer.call(t,u,c)),Pn(e,n+1,u,!0,!0,!0)&&(f=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,f&&(e.dump&&ir===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,f&&(d+=eo(e,n)),Pn(e,n+1,c,!0,f)&&(e.dump&&ir===e.dump.charCodeAt(0)?d+=":":d+=": ",d+=e.dump,i+=d));e.tag=o,e.dump=i||"{}"}function sl(e,n,t){var r,i,o,s,l,a;for(i=t?e.explicitTypes:e.implicitTypes,o=0,s=i.length;o<s;o+=1)if(l=i[o],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(t?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(a=e.styleMap[l.tag]||l.defaultStyle,Ec.call(l.represent)==="[object Function]")r=l.represent(n,a);else if(Ic.call(l.represent,a))r=l.represent[a](n,a);else throw new $e("!<"+l.tag+'> tag resolver accepts not "'+a+'" style');e.dump=r}return!0}return!1}function Pn(e,n,t,r,i,o,s){e.tag=null,e.dump=t,sl(e,t,!1)||sl(e,t,!0);var l=Ec.call(e.dump),a=r,u;r&&(r=e.flowLevel<0||e.flowLevel>n);var c=l==="[object Object]"||l==="[object Array]",f,d;if(c&&(f=e.duplicates.indexOf(t),d=f!==-1),(e.tag!==null&&e.tag!=="?"||d||e.indent!==2&&n>0)&&(i=!1),d&&e.usedDuplicates[f])e.dump="*ref_"+f;else{if(c&&d&&!e.usedDuplicates[f]&&(e.usedDuplicates[f]=!0),l==="[object Object]")r&&Object.keys(e.dump).length!==0?(ug(e,n,e.dump,i),d&&(e.dump="&ref_"+f+e.dump)):(cg(e,n,e.dump),d&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&n>0?ol(e,n-1,e.dump,i):ol(e,n,e.dump,i),d&&(e.dump="&ref_"+f+e.dump)):(ag(e,n,e.dump),d&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&og(e,e.dump,n,o,a);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new $e("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function fg(e,n){var t=[],r=[],i,o;for(to(e,t,r),i=0,o=r.length;i<o;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(o)}function to(e,n,t){var r,i,o;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)to(e[i],n,t);else for(r=Object.keys(e),i=0,o=r.length;i<o;i+=1)to(e[r[i]],n,t)}function dg(e,n){n=n||{};var t=new eg(n);t.noRefs||fg(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),Pn(t,0,r,!0,!0)?t.dump+`
`:""}var hg=dg,pg={dump:hg};function Mo(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var mg=Me,gg=Qa,vg=tc,yg=lc,bg=ac,xg=Oo,_g=Tc.load,wg=Tc.loadAll,Cg=pg.dump,Ag=$e,Sg={binary:hc,float:sc,map:nc,null:rc,pairs:mc,set:gc,timestamp:fc,bool:ic,int:oc,merge:dc,omap:pc,seq:ec,str:Za},Tg=Mo("safeLoad","load"),Eg=Mo("safeLoadAll","loadAll"),Ig=Mo("safeDump","dump"),Li={Type:mg,Schema:gg,FAILSAFE_SCHEMA:vg,JSON_SCHEMA:yg,CORE_SCHEMA:bg,DEFAULT_SCHEMA:xg,load:_g,loadAll:wg,dump:Cg,YAMLException:Ag,types:Sg,safeLoad:Tg,safeLoadAll:Eg,safeDump:Ig};const Og=`# 网站全局配置\r
\r
# 网站基本信息\r
site:\r
  title: 丑兔子的个人博客\r
  description: 基于 Vue 3 构建的像素风格博客\r
  author: 欢迎来到丑兔子的个人博客\r
  # logo: P # 默认文字 Logo，如果配置了 images.logo 则优先使用图片\r
\r
# 自定义图片配置\r
images:\r
  # 首页欢迎区域的动态方块图片 (可选)\r
  homeHero: assets/other5.png\r
  # 左上角浮动 Logo 图片 (可选)\r
  logo: assets/other5.png\r
\r
# 功能开关\r
features:\r
  musicPlayer: true\r
  darkMode: true\r
  search: true\r
  comments: true\r
  toc: true # 文章目录\r
\r
# 社交链接 (显示在页脚)\r
# 如果留空则不显示对应按钮\r
social:\r
  github: https://github.com/xiajie321\r
  bilibili: https://space.bilibili.com/1289464475?spm_id_from=333.1007.0.0\r
  # twitter: https://twitter.com \r
\r
# 评论系统配置 (Giscus)\r
giscus:\r
  repo: xiajie321/XiaJie.github.io\r
  repoId: R_kgDOQdDIYw\r
  category: General\r
  categoryId: DIC_kwDOQdDIY84CzHvt\r
  mapping: pathname\r
  strict: 0\r
  reactionsEnabled: 1\r
  emitMetadata: 0\r
  inputPosition: top\r
  theme: preferred_color_scheme\r
  lang: zh-CN\r
\r
# 外观配置\r
appearance:\r
  primaryColor: '#4ade80' # 像素绿\r
  secondaryColor: '#fcd116' # 像素黄\r
  accentColor: '#e70012' # 像素红\r
`,Fc=kd("blog",{state:()=>({menus:[],articles:{},siteConfig:{},loading:!0,currentToc:[],activeHeadingId:""}),getters:{allArticles:e=>Object.values(e.articles).flat(),recentArticles:e=>Object.values(e.articles).flat().filter(t=>t.date).sort((t,r)=>new Date(r.date)-new Date(t.date)).slice(0,3)},actions:{async init(){this.loading=!0;try{this.siteConfig=Li.load(Og);const e=Object.assign({"../Root/About/config.yaml":Vh,"../Root/Articles/config.yaml":Wh,"../Root/Classroom/config.yaml":Yh,"../Root/Home/config.yaml":$h}),n=[];for(const r in e){if(r.includes("/Image/"))continue;const i=e[r],o=Li.load(i),s=r.split("/").slice(-2,-1)[0];s!=="Image"&&n.push({id:s,path:r,...o})}this.menus=n.sort((r,i)=>r.order-i.order);const t=Object.assign({"../Root/About/me.md":qh,"../Root/Articles/Unity性能优化/性能优化-GC篇.md":Kh,"../Root/Articles/Unity性能优化/性能优化-分帧与延迟调用.md":Jh,"../Root/Articles/Unity性能优化/性能优化-渲染篇.md":Xh,"../Root/Articles/Unity性能优化/性能优化-硬件资源利用-多线程-JobSystem.md":zh,"../Root/Articles/Unity性能优化/性能优化-硬件资源利用-计算着色器.md":Qh,"../Root/Articles/Unity性能优化/性能优化-碰撞检测篇-空间划分.md":Zh,"../Root/Articles/Unity性能优化/性能优化-碰撞检测篇-裁剪修枝.md":ep,"../Root/Articles/Unity笔记/Cinemachine使用.md":np,"../Root/Articles/Unity笔记/HybridCLR使用.md":tp,"../Root/Articles/Unity笔记/InputSystem使用.md":rp,"../Root/Articles/Unity笔记/JobSystem使用.md":ip,"../Root/Articles/Unity笔记/Luban使用.md":op,"../Root/Articles/Unity笔记/UIToolkit使用.md":sp,"../Root/Articles/Unity笔记/YooAsset使用.md":lp,"../Root/Articles/first-post.md":ap,"../Root/Home/welcome.md":cp});for(const r in t){if(r.includes("/Image/"))continue;const i=t[r],o=r.split("/"),s=o.indexOf("Root");if(s===-1||o.length<=s+2)continue;const l=o[s+1],u=o.slice(s+2,o.length-1).join("/");this.articles[l]||(this.articles[l]=[]);const c=i.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/);if(c){const f=Li.load(c[1]);f.date&&!(f.date instanceof Date)&&(f.date=new Date(f.date));const d=c[2];this.articles[l].push({...f,content:d,path:r,category:l,module:u})}else l!=="Articles"&&this.articles[l].push({content:i,path:r,category:l,module:u})}}catch(e){console.error("Blog Store Init Error:",e)}finally{this.loading=!1}}}});function Ur(e){"@babel/helpers - typeof";return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ur(e)}function ut(e){if(e===null||e===!0||e===!1)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function qe(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function xn(e){qe(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||Ur(e)==="object"&&n==="[object Date]"?new Date(e.getTime()):typeof e=="number"||n==="[object Number]"?new Date(e):((typeof e=="string"||n==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function kg(e,n){qe(2,arguments);var t=xn(e).getTime(),r=ut(n);return new Date(t+r)}var Lg={};function ai(){return Lg}function Pg(e){var n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),e.getTime()-n.getTime()}function Mg(e){return qe(1,arguments),e instanceof Date||Ur(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Rg(e){if(qe(1,arguments),!Mg(e)&&typeof e!="number")return!1;var n=xn(e);return!isNaN(Number(n))}function Dg(e,n){qe(2,arguments);var t=ut(n);return kg(e,-t)}var Ng=864e5;function Ug(e){qe(1,arguments);var n=xn(e),t=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var r=n.getTime(),i=t-r;return Math.floor(i/Ng)+1}function Fr(e){qe(1,arguments);var n=1,t=xn(e),r=t.getUTCDay(),i=(r<n?7:0)+r-n;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function Bc(e){qe(1,arguments);var n=xn(e),t=n.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var i=Fr(r),o=new Date(0);o.setUTCFullYear(t,0,4),o.setUTCHours(0,0,0,0);var s=Fr(o);return n.getTime()>=i.getTime()?t+1:n.getTime()>=s.getTime()?t:t-1}function Fg(e){qe(1,arguments);var n=Bc(e),t=new Date(0);t.setUTCFullYear(n,0,4),t.setUTCHours(0,0,0,0);var r=Fr(t);return r}var Bg=6048e5;function Hg(e){qe(1,arguments);var n=xn(e),t=Fr(n).getTime()-Fg(n).getTime();return Math.round(t/Bg)+1}function Br(e,n){var t,r,i,o,s,l,a,u;qe(1,arguments);var c=ai(),f=ut((t=(r=(i=(o=n==null?void 0:n.weekStartsOn)!==null&&o!==void 0?o:n==null||(s=n.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:c.weekStartsOn)!==null&&r!==void 0?r:(a=c.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=xn(e),p=d.getUTCDay(),g=(p<f?7:0)+p-f;return d.setUTCDate(d.getUTCDate()-g),d.setUTCHours(0,0,0,0),d}function Hc(e,n){var t,r,i,o,s,l,a,u;qe(1,arguments);var c=xn(e),f=c.getUTCFullYear(),d=ai(),p=ut((t=(r=(i=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(s=n.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:d.firstWeekContainsDate)!==null&&r!==void 0?r:(a=d.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(f+1,0,p),g.setUTCHours(0,0,0,0);var y=Br(g,n),S=new Date(0);S.setUTCFullYear(f,0,p),S.setUTCHours(0,0,0,0);var L=Br(S,n);return c.getTime()>=y.getTime()?f+1:c.getTime()>=L.getTime()?f:f-1}function Gg(e,n){var t,r,i,o,s,l,a,u;qe(1,arguments);var c=ai(),f=ut((t=(r=(i=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(s=n.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:c.firstWeekContainsDate)!==null&&r!==void 0?r:(a=c.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),d=Hc(e,n),p=new Date(0);p.setUTCFullYear(d,0,f),p.setUTCHours(0,0,0,0);var g=Br(p,n);return g}var jg=6048e5;function Vg(e,n){qe(1,arguments);var t=xn(e),r=Br(t,n).getTime()-Gg(t,n).getTime();return Math.round(r/jg)+1}function fe(e,n){for(var t=e<0?"-":"",r=Math.abs(e).toString();r.length<n;)r="0"+r;return t+r}var Wg={y:function(n,t){var r=n.getUTCFullYear(),i=r>0?r:1-r;return fe(t==="yy"?i%100:i,t.length)},M:function(n,t){var r=n.getUTCMonth();return t==="M"?String(r+1):fe(r+1,2)},d:function(n,t){return fe(n.getUTCDate(),t.length)},a:function(n,t){var r=n.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(n,t){return fe(n.getUTCHours()%12||12,t.length)},H:function(n,t){return fe(n.getUTCHours(),t.length)},m:function(n,t){return fe(n.getUTCMinutes(),t.length)},s:function(n,t){return fe(n.getUTCSeconds(),t.length)},S:function(n,t){var r=t.length,i=n.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return fe(o,t.length)}};const Nn=Wg;var pt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Yg={G:function(n,t,r){var i=n.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(n,t,r){if(t==="yo"){var i=n.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Nn.y(n,t)},Y:function(n,t,r,i){var o=Hc(n,i),s=o>0?o:1-o;if(t==="YY"){var l=s%100;return fe(l,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):fe(s,t.length)},R:function(n,t){var r=Bc(n);return fe(r,t.length)},u:function(n,t){var r=n.getUTCFullYear();return fe(r,t.length)},Q:function(n,t,r){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return fe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,t,r){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return fe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,t,r){var i=n.getUTCMonth();switch(t){case"M":case"MM":return Nn.M(n,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(n,t,r){var i=n.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return fe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(n,t,r,i){var o=Vg(n,i);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):fe(o,t.length)},I:function(n,t,r){var i=Hg(n);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):fe(i,t.length)},d:function(n,t,r){return t==="do"?r.ordinalNumber(n.getUTCDate(),{unit:"date"}):Nn.d(n,t)},D:function(n,t,r){var i=Ug(n);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):fe(i,t.length)},E:function(n,t,r){var i=n.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(n,t,r,i){var o=n.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return fe(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(n,t,r,i){var o=n.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return fe(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(n,t,r){var i=n.getUTCDay(),o=i===0?7:i;switch(t){case"i":return String(o);case"ii":return fe(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(n,t,r){var i=n.getUTCHours(),o=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,t,r){var i=n.getUTCHours(),o;switch(i===12?o=pt.noon:i===0?o=pt.midnight:o=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,t,r){var i=n.getUTCHours(),o;switch(i>=17?o=pt.evening:i>=12?o=pt.afternoon:i>=4?o=pt.morning:o=pt.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,t,r){if(t==="ho"){var i=n.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Nn.h(n,t)},H:function(n,t,r){return t==="Ho"?r.ordinalNumber(n.getUTCHours(),{unit:"hour"}):Nn.H(n,t)},K:function(n,t,r){var i=n.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):fe(i,t.length)},k:function(n,t,r){var i=n.getUTCHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):fe(i,t.length)},m:function(n,t,r){return t==="mo"?r.ordinalNumber(n.getUTCMinutes(),{unit:"minute"}):Nn.m(n,t)},s:function(n,t,r){return t==="so"?r.ordinalNumber(n.getUTCSeconds(),{unit:"second"}):Nn.s(n,t)},S:function(n,t){return Nn.S(n,t)},X:function(n,t,r,i){var o=i._originalDate||n,s=o.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return al(s);case"XXXX":case"XX":return nt(s);case"XXXXX":case"XXX":default:return nt(s,":")}},x:function(n,t,r,i){var o=i._originalDate||n,s=o.getTimezoneOffset();switch(t){case"x":return al(s);case"xxxx":case"xx":return nt(s);case"xxxxx":case"xxx":default:return nt(s,":")}},O:function(n,t,r,i){var o=i._originalDate||n,s=o.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ll(s,":");case"OOOO":default:return"GMT"+nt(s,":")}},z:function(n,t,r,i){var o=i._originalDate||n,s=o.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ll(s,":");case"zzzz":default:return"GMT"+nt(s,":")}},t:function(n,t,r,i){var o=i._originalDate||n,s=Math.floor(o.getTime()/1e3);return fe(s,t.length)},T:function(n,t,r,i){var o=i._originalDate||n,s=o.getTime();return fe(s,t.length)}};function ll(e,n){var t=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=r%60;if(o===0)return t+String(i);var s=n||"";return t+String(i)+s+fe(o,2)}function al(e,n){if(e%60===0){var t=e>0?"-":"+";return t+fe(Math.abs(e)/60,2)}return nt(e,n)}function nt(e,n){var t=n||"",r=e>0?"-":"+",i=Math.abs(e),o=fe(Math.floor(i/60),2),s=fe(i%60,2);return r+o+t+s}const $g=Yg;var cl=function(n,t){switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Gc=function(n,t){switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},qg=function(n,t){var r=n.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return cl(n,t);var s;switch(i){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",cl(i,t)).replace("{{time}}",Gc(o,t))},Kg={p:Gc,P:qg};const Jg=Kg;var Xg=["D","DD"],zg=["YY","YYYY"];function Qg(e){return Xg.indexOf(e)!==-1}function Zg(e){return zg.indexOf(e)!==-1}function ul(e,n,t){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(n,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(n,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(n,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var e0={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},n0=function(n,t,r){var i,o=e0[n];return typeof o=="string"?i=o:t===1?i=o.one:i=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const t0=n0;function Pi(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var r0={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i0={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},o0={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s0={date:Pi({formats:r0,defaultWidth:"full"}),time:Pi({formats:i0,defaultWidth:"full"}),dateTime:Pi({formats:o0,defaultWidth:"full"})};const l0=s0;var a0={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},c0=function(n,t,r,i){return a0[n]};const u0=c0;function Mt(e){return function(n,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):o;i=e.formattingValues[s]||e.formattingValues[o]}else{var l=e.defaultWidth,a=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[a]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(n):n;return i[u]}}var f0={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},d0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},h0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},p0={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},m0={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},g0={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},v0=function(n,t){var r=Number(n),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},y0={ordinalNumber:v0,era:Mt({values:f0,defaultWidth:"wide"}),quarter:Mt({values:d0,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:Mt({values:h0,defaultWidth:"wide"}),day:Mt({values:p0,defaultWidth:"wide"}),dayPeriod:Mt({values:m0,defaultWidth:"wide",formattingValues:g0,defaultFormattingWidth:"wide"})};const b0=y0;function Rt(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=n.match(i);if(!o)return null;var s=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],a=Array.isArray(l)?_0(l,function(f){return f.test(s)}):x0(l,function(f){return f.test(s)}),u;u=e.valueCallback?e.valueCallback(a):a,u=t.valueCallback?t.valueCallback(u):u;var c=n.slice(s.length);return{value:u,rest:c}}}function x0(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function _0(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function w0(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.match(e.matchPattern);if(!r)return null;var i=r[0],o=n.match(e.parsePattern);if(!o)return null;var s=e.valueCallback?e.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var l=n.slice(i.length);return{value:s,rest:l}}}var C0=/^(\d+)(th|st|nd|rd)?/i,A0=/\d+/i,S0={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},T0={any:[/^b/i,/^(a|c)/i]},E0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},I0={any:[/1/i,/2/i,/3/i,/4/i]},O0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},k0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},L0={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},P0={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},M0={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},R0={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},D0={ordinalNumber:w0({matchPattern:C0,parsePattern:A0,valueCallback:function(n){return parseInt(n,10)}}),era:Rt({matchPatterns:S0,defaultMatchWidth:"wide",parsePatterns:T0,defaultParseWidth:"any"}),quarter:Rt({matchPatterns:E0,defaultMatchWidth:"wide",parsePatterns:I0,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:Rt({matchPatterns:O0,defaultMatchWidth:"wide",parsePatterns:k0,defaultParseWidth:"any"}),day:Rt({matchPatterns:L0,defaultMatchWidth:"wide",parsePatterns:P0,defaultParseWidth:"any"}),dayPeriod:Rt({matchPatterns:M0,defaultMatchWidth:"any",parsePatterns:R0,defaultParseWidth:"any"})};const N0=D0;var U0={code:"en-US",formatDistance:t0,formatLong:l0,formatRelative:u0,localize:b0,match:N0,options:{weekStartsOn:0,firstWeekContainsDate:1}};const F0=U0;var B0=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,H0=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G0=/^'([^]*?)'?$/,j0=/''/g,V0=/[a-zA-Z]/;function W0(e,n,t){var r,i,o,s,l,a,u,c,f,d,p,g,y,S,L,w,N,T;qe(2,arguments);var b=String(n),G=ai(),Y=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:G.locale)!==null&&r!==void 0?r:F0,F=ut((o=(s=(l=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(u=t.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&l!==void 0?l:G.firstWeekContainsDate)!==null&&s!==void 0?s:(f=G.locale)===null||f===void 0||(d=f.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(F>=1&&F<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=ut((p=(g=(y=(S=t==null?void 0:t.weekStartsOn)!==null&&S!==void 0?S:t==null||(L=t.locale)===null||L===void 0||(w=L.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&y!==void 0?y:G.weekStartsOn)!==null&&g!==void 0?g:(N=G.locale)===null||N===void 0||(T=N.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&p!==void 0?p:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Y.localize)throw new RangeError("locale must contain localize property");if(!Y.formatLong)throw new RangeError("locale must contain formatLong property");var H=xn(e);if(!Rg(H))throw new RangeError("Invalid time value");var X=Pg(H),C=Dg(H,X),Z={firstWeekContainsDate:F,weekStartsOn:E,locale:Y,_originalDate:H},be=b.match(H0).map(function(le){var ee=le[0];if(ee==="p"||ee==="P"){var K=Jg[ee];return K(le,Y.formatLong)}return le}).join("").match(B0).map(function(le){if(le==="''")return"'";var ee=le[0];if(ee==="'")return Y0(le);var K=$g[ee];if(K)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Zg(le)&&ul(le,n,String(e)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Qg(le)&&ul(le,n,String(e)),K(C,le,Y.localize,Z);if(ee.match(V0))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ee+"`");return le}).join("");return be}function Y0(e){var n=e.match(G0);return n?n[1].replace(j0,"'"):e}const $0="/XiaJie.github.io/assets/08 Minecraft-8fe05480.mp3",q0="/XiaJie.github.io/assets/动物森友会-标题-83928e3c.mp3",K0="/XiaJie.github.io/assets/动物森友会-29558c03.mp3",J0="/XiaJie.github.io/assets/塞尔达时之笛-a41bb4d4.mp3",X0="/XiaJie.github.io/assets/宝可梦-未白镇-7a66f055.mp3";const z0={class:"flex flex-col gap-2"},Q0={class:"bg-[#9bbc0f] p-2 pixel-border-sm inner-shadow font-pixel text-xs text-[#0f380f] overflow-hidden h-8 flex items-center"},Z0={key:0,class:"w-full text-center font-bold"},ev={key:1,class:"whitespace-nowrap animate-marquee"},nv={key:2},tv={class:"flex flex-col gap-2 mt-1"},rv={class:"flex justify-between w-full px-2"},iv=["title"],ov={class:"flex items-center gap-1 w-full"},sv={__name:"MusicPlayer",setup(e){const n=ye(!1),t=ye([]),r=ye(0),i=ye(null),o=ye(.5),s=ye("sequence"),l=ye("");let a=null;const u=ye(null),c=ye({x:window.innerWidth-300,y:window.innerHeight-150}),f=ye(!1),d=ye({x:0,y:0}),p=ye({}),g=Object.assign({"../Root/Music/08 Minecraft.mp3":$0,"../Root/Music/动物森友会-标题.mp3":q0,"../Root/Music/动物森友会.mp3":K0,"../Root/Music/塞尔达时之笛.mp3":J0,"../Root/Music/宝可梦-未白镇.mp3":X0});Qr(()=>{t.value=Object.keys(g).map(V=>({path:g[V],name:V.split("/").pop()})),t.value.length>0&&w(0),i.value&&(i.value.volume=o.value),window.addEventListener("mousemove",ee),window.addEventListener("mouseup",K),window.addEventListener("resize",oe),window.addEventListener("start-game",y)}),Zr(()=>{window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",K),window.removeEventListener("resize",oe),window.removeEventListener("start-game",y)});const y=()=>{t.value.length>0&&!n.value&&(n.value=!0,i.value&&i.value.play().catch(V=>{console.log("Autoplay blocked even after interaction?",V),n.value=!1}))},S=Fe(()=>t.value[r.value]),L=Fe(()=>S.value?S.value.name:""),w=V=>{V>=0&&V<t.value.length&&(r.value=V,i.value.src=t.value[V].path,i.value.volume=o.value,n.value&&i.value.play().catch(de=>console.log("Autoplay blocked",de)))},N=()=>{t.value.length!==0&&(n.value?i.value.pause():i.value.play().catch(V=>console.log("Playback failed",V)),n.value=!n.value)},T=()=>{if(t.value.length<=1)return 0;let V;do V=Math.floor(Math.random()*t.value.length);while(V===r.value&&t.value.length>1);return V},b=()=>{if(t.value.length===0)return;let V;s.value==="random"?V=T():(V=r.value-1,V<0&&(V=t.value.length-1)),w(V),n.value||(n.value=!0,i.value.play())},G=()=>{if(t.value.length===0)return;let V;s.value==="random"?V=T():(V=r.value+1,V>=t.value.length&&(V=0)),w(V),n.value||(n.value=!0,i.value.play())},Y=()=>{s.value==="single"?(i.value.currentTime=0,i.value.play()):G()},F=()=>{s.value==="sequence"?s.value="random":s.value==="random"?s.value="single":s.value="sequence",E(X())},E=V=>{l.value=V,a&&clearTimeout(a),a=setTimeout(()=>{l.value=""},2e3)},H=()=>{switch(s.value){case"single":return"1";case"random":return"🎲";default:return"∞"}},X=()=>{switch(s.value){case"single":return"单曲循环";case"random":return"随机播放";default:return"顺序播放"}},C=()=>{i.value&&(i.value.volume=o.value)},Z=V=>{const de=V.currentTarget.getBoundingClientRect(),Ie=V.clientX-de.left,Se=V.clientY-de.top,sn=de.width/2,_n=de.height/2,hn=(Se-_n)/_n*-10,He=(Ie-sn)/sn*10;p.value={transform:`perspective(1000px) rotateX(${hn}deg) rotateY(${He}deg) scale(1.02)`,transition:"none",boxShadow:`${-He*.5}px ${hn*.5+4}px 0 0 rgba(0,0,0,0.2), -4px 0 0 0 #2d3436, 4px 0 0 0 #2d3436, 0 -4px 0 0 #2d3436, 0 4px 0 0 #2d3436`}},be=()=>{p.value={transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",transition:"transform 0.5s ease, box-shadow 0.5s ease",boxShadow:""}},le=V=>{V.target.closest("button")||V.target.closest("input")||(f.value=!0,d.value={x:V.clientX-c.value.x,y:V.clientY-c.value.y})},ee=V=>{if(!f.value)return;let de=V.clientX-d.value.x,Ie=V.clientY-d.value.y;const Se=window.innerWidth-u.value.offsetWidth,sn=window.innerHeight-u.value.offsetHeight;c.value={x:Math.min(Math.max(0,de),Se),y:Math.min(Math.max(0,Ie),sn)}},K=()=>{f.value=!1},oe=()=>{var Ie,Se;const V=window.innerWidth-(((Ie=u.value)==null?void 0:Ie.offsetWidth)||256),de=window.innerHeight-(((Se=u.value)==null?void 0:Se.offsetHeight)||120);c.value.x>V&&(c.value.x=V),c.value.y>de&&(c.value.y=de)};return(V,de)=>(te(),se("div",{ref_key:"playerRef",ref:u,class:"fixed z-50 select-none",style:at({left:c.value.x+"px",top:c.value.y+"px"})},[A("div",{class:"bg-gray-100 pixel-border p-2 w-64 shadow-xl player-card",onMousedown:le,onMousemove:Z,onMouseleave:be,style:at(p.value)},[de[2]||(de[2]=A("div",{class:"bg-pixel-dark text-white px-2 py-1 mb-2 text-xs font-pixel flex justify-between items-center cursor-move"},[A("span",null,"音乐播放器"),A("div",{class:"flex gap-1"},[A("div",{class:"w-2 h-2 rounded-full bg-red-500"}),A("div",{class:"w-2 h-2 rounded-full bg-yellow-500"})])],-1)),A("div",z0,[A("div",Q0,[l.value?(te(),se("div",Z0,ke(l.value),1)):S.value?(te(),se("div",ev," ♪ "+ke(L.value)+" ♪ ",1)):(te(),se("div",nv,"未插入磁带"))]),A("div",tv,[A("div",rv,[A("button",{onClick:F,class:"w-8 h-8 flex items-center justify-center bg-gray-600 text-white pixel-btn-sm hover:brightness-110 active:scale-95 text-xs",title:X()},ke(H()),9,iv),A("button",{onClick:b,class:"w-8 h-8 flex items-center justify-center bg-pixel-secondary text-white pixel-btn-sm hover:brightness-110 active:scale-95"}," << "),A("button",{onClick:N,class:"w-8 h-8 flex items-center justify-center bg-pixel-primary text-white pixel-btn-sm hover:brightness-110 active:scale-95"},ke(n.value?"||":"▶"),1),A("button",{onClick:G,class:"w-8 h-8 flex items-center justify-center bg-pixel-secondary text-white pixel-btn-sm hover:brightness-110 active:scale-95"}," >> ")]),A("div",ov,[de[1]||(de[1]=A("span",{class:"text-[10px] font-pixel whitespace-nowrap"},"音量",-1)),Yl(A("input",{type:"range",min:"0",max:"1",step:"0.1","onUpdate:modelValue":de[0]||(de[0]=Ie=>o.value=Ie),onInput:C,class:"w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer pixel-range"},null,544),[[Ma,o.value]])])])])],36),A("audio",{ref_key:"audioPlayer",ref:i,onEnded:Y},null,544)],4))}},lv=Eo(sv,[["__scopeId","data-v-541f352e"]]);const av={class:"relative"},cv={key:0,class:"absolute top-full right-0 mt-2 w-80 bg-white pixel-border z-50 shadow-xl"},uv={class:"p-4 border-b-4 border-gray-100"},fv={class:"max-h-96 overflow-y-auto custom-scrollbar"},dv={key:0,class:"p-4 text-center text-gray-500 text-sm"},hv={key:1},pv=["onClick"],mv={class:"font-bold text-sm mb-1 line-clamp-1 group-hover:text-pixel-primary"},gv={class:"text-xs text-gray-500 line-clamp-2"},vv={class:"mt-1 flex gap-2"},yv={class:"text-[10px] bg-gray-200 px-1 rounded text-gray-500"},bv={key:2,class:"p-4 text-center text-gray-400 text-xs"},xv={__name:"Search",setup(e){const n=Fh(),t=Fc(),r=ye(!1),i=ye(""),o=ye(null),s=()=>{r.value=!r.value},l=()=>{r.value=!1};st(r,f=>{f?Jr(()=>{var d;(d=o.value)==null||d.focus()}):i.value=""});const a=Fe(()=>{if(!i.value.trim())return[];const f=i.value.toLowerCase();return t.allArticles.filter(d=>{const p=(d.title||"").toLowerCase(),g=(d.content||"").toLowerCase();return p.includes(f)||g.includes(f)})}),u=f=>{l();const d=t.menus.find(g=>g.id===f.category);let p="/";d&&d.type!=="home"&&(p="/"+d.id),n.push({path:p,query:{path:f.path}})},c=f=>f?f.replace(/[#*`]/g,"").slice(0,60)+"...":"";return(f,d)=>(te(),se("div",av,[A("button",{onClick:s,class:Vn(["pixel-btn bg-white hover:bg-pixel-accent transition-colors p-2 flex items-center justify-center relative z-50",{"bg-pixel-accent text-white":r.value}]),title:"搜索"},[...d[1]||(d[1]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)])],2),r.value?(te(),se("div",cv,[A("div",uv,[Yl(A("input",{ref_key:"searchInput",ref:o,"onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p),type:"text",placeholder:"搜索文章...",class:"w-full p-2 bg-gray-50 border-2 border-gray-200 focus:border-pixel-primary outline-none font-pixel text-sm",onKeydown:vd(l,["esc"])},null,544),[[Ma,i.value]])]),A("div",fv,[a.value.length===0&&i.value?(te(),se("div",dv," 没有找到相关文章 ")):a.value.length>0?(te(),se("div",hv,[(te(!0),se(Pe,null,Nt(a.value,p=>(te(),se("div",{key:p.path,onClick:g=>u(p),class:"p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors group"},[A("div",mv,ke(p.title||"无标题"),1),A("div",gv,ke(c(p.content)),1),A("div",vv,[A("span",yv,ke(p.category),1)])],8,pv))),128))])):i.value?tn("",!0):(te(),se("div",bv," 输入关键词搜索... "))])])):tn("",!0),(te(),er(Du,{to:"body"},[r.value?(te(),se("div",{key:0,onClick:l,class:"fixed inset-0 z-40 bg-black/5 cursor-default"})):tn("",!0)]))]))}},_v=Eo(xv,[["__scopeId","data-v-86119c9d"]]),wv=window.AudioContext||window.webkitAudioContext;let Dt;const Cv=()=>(Dt||(Dt=new wv),Dt.state==="suspended"&&Dt.resume(),Dt),Av=(e="click")=>{try{const n=Cv(),t=n.createOscillator(),r=n.createGain();t.connect(r),r.connect(n.destination),e==="click"?(t.type="square",t.frequency.setValueAtTime(800,n.currentTime),t.frequency.exponentialRampToValueAtTime(300,n.currentTime+.1),r.gain.setValueAtTime(.1,n.currentTime),r.gain.exponentialRampToValueAtTime(.01,n.currentTime+.1),t.start(),t.stop(n.currentTime+.1)):e==="start"?(t.type="square",t.frequency.setValueAtTime(440,n.currentTime),t.frequency.setValueAtTime(880,n.currentTime+.1),r.gain.setValueAtTime(.1,n.currentTime),r.gain.linearRampToValueAtTime(.1,n.currentTime+.2),r.gain.linearRampToValueAtTime(.01,n.currentTime+.4),t.start(),t.stop(n.currentTime+.4)):e==="back"&&(t.type="triangle",t.frequency.setValueAtTime(300,n.currentTime),t.frequency.linearRampToValueAtTime(100,n.currentTime+.15),r.gain.setValueAtTime(.1,n.currentTime),r.gain.linearRampToValueAtTime(.01,n.currentTime+.15),t.start(),t.stop(n.currentTime+.15))}catch(n){console.error("Audio play failed",n)}},Sv=e=>{if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n="/XiaJie.github.io/";return n!=="/"&&n.endsWith("/")&&(n=n.slice(0,-1)),e.startsWith("/")||(e="/"+e),n==="/"?e:`${n}${e}`};const Tv={class:"bg-white/95 dark:bg-gray-900/95 dark:border-gray-700 border-b-4 border-pixel-dark p-4 sticky top-0 z-50 transition-colors duration-300 text-gray-900 dark:text-gray-100"},Ev={class:"container mx-auto flex justify-between items-center"},Iv={class:"flex items-center gap-4"},Ov={key:0,class:"w-10 h-10 bg-pixel-primary pixel-border animate-pixel-bounce flex items-center justify-center overflow-hidden"},kv=["src"],Lv={key:1,class:"w-10 h-10 bg-pixel-primary pixel-border animate-pixel-bounce flex items-center justify-center text-white font-bold text-xl"},Pv={class:"text-xl font-pixel hidden sm:block"},Mv={class:"flex items-center gap-4"},Rv={key:0},Dv={key:1},Nv={class:"mr-2"},Uv={class:"flex-grow container mx-auto p-4 sm:p-8 relative flex gap-8 items-start"},Fv={class:"absolute inset-0 overflow-hidden pointer-events-none -z-10"},Bv={class:"flex-grow w-full bg-white/95 dark:bg-gray-900/95 pixel-border p-6 min-h-[60vh] relative z-10 transition-all duration-300 text-gray-900 dark:text-gray-100"},Hv={class:"hidden lg:flex flex-col w-72 shrink-0 sticky top-24 max-h-[calc(100vh-10rem)] gap-4 px-4 pt-4 pb-8"},Gv={key:0,class:"bg-white/95 dark:bg-gray-900/95 pixel-border p-4 text-gray-900 dark:text-gray-100"},jv={class:"space-y-2 text-sm"},Vv=["href","onClick"],Wv={class:"shrink-0 bg-white/95 dark:bg-gray-900/95 pixel-border p-4 pb-6 text-gray-900 dark:text-gray-100"},Yv={class:"space-y-3"},$v={class:"text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-pixel-primary transition-colors truncate"},qv={class:"text-[10px] text-gray-500 dark:text-gray-400 font-pixel mt-1 flex justify-between"},Kv={class:"bg-gray-200 dark:bg-gray-700 px-1 rounded transition-colors"},Jv={class:"bg-pixel-dark text-white p-8 text-center font-pixel text-xs mt-auto"},Xv={key:0,class:"mt-6 flex justify-center gap-6"},zv=["href"],Qv=["href"],Zv={key:0,class:"fixed inset-0 z-[10001] bg-black flex flex-col items-center justify-center overflow-hidden"},ey={class:"w-full max-w-2xl relative h-32 border-b-4 border-white"},ny={class:"mt-4 font-pixel text-white text-xl"},ty={__name:"Layout",setup(e){const n=Fc(),t=Bh(),r=ye(!1),i=ye(null),o=ye(!1),s=ye(!0),l=ye(0),a=ye(null),u=ye(!1);st(()=>n.activeHeadingId,T=>{if(!T||u.value||!a.value)return;const b=a.value.querySelector(`a[href="#${T}"]`);b&&b.scrollIntoView({block:"nearest",behavior:"smooth"})});const c=()=>{o.value=!1,Av("start"),window.dispatchEvent(new Event("start-game"))},f=()=>{const b=Date.now(),G=()=>{const Y=Date.now()-b,F=Math.min(Y/2e3*100,100);l.value=F,F<100?requestAnimationFrame(G):setTimeout(()=>{s.value=!1,o.value=!0},200)};requestAnimationFrame(G)},d=(T,b)=>{if(!i.value)return;const G=["#ff6b6b","#4ecdc4","#ffe66d","#ff9ff3","#54a0ff"],Y=6;for(let F=0;F<Y;F++){const E=document.createElement("div");E.classList.add("absolute","w-2","h-2","animate-particle-fade"),E.style.backgroundColor=G[Math.floor(Math.random()*G.length)],E.style.left=`${T}px`,E.style.top=`${b}px`;const H=Math.random()*Math.PI*2,X=50+Math.random()*50,C=Math.cos(H)*X,Z=Math.sin(H)*X;E.style.setProperty("--tx",`${C}px`),E.style.setProperty("--ty",`${Z}px`),i.value.appendChild(E),E.addEventListener("animationend",()=>{E.remove()})}},p=T=>{d(T.clientX,T.clientY)};Qr(()=>{n.init(),window.addEventListener("click",p);const T=localStorage.getItem("theme");T==="dark"||!T&&window.matchMedia("(prefers-color-scheme: dark)").matches?(r.value=!0,document.documentElement.classList.add("dark")):(r.value=!1,document.documentElement.classList.remove("dark")),f()}),Zr(()=>{window.removeEventListener("click",p)});const g=()=>{r.value=!r.value,r.value?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},y=T=>T.type==="home"?t.path==="/":t.path.includes(T.id),S=Fe(()=>{const T=t.path;return T==="/"?"theme-home":T.includes("/Articles")?"theme-articles":T.includes("/About")?"theme-about":"theme-default"}),L=T=>{const b=n.menus.find(G=>G.id===T.category);return b&&b.type!=="home"?"/"+b.id:"/"},w=T=>T?W0(new Date(T),"MM/dd"):"",N=T=>{const b=document.getElementById(T);b&&b.scrollIntoView({behavior:"smooth",block:"start"})};return(T,b)=>{var F,E,H,X;const G=Fi("router-link"),Y=Fi("router-view");return te(),se("div",{class:Vn(["min-h-screen flex flex-col font-sans bg-transition",S.value])},[A("header",Tv,[A("div",Ev,[A("div",Iv,[(F=ve(n).siteConfig.images)!=null&&F.logo?(te(),se("div",Ov,[A("img",{src:ve(Sv)(ve(n).siteConfig.images.logo),alt:"Logo",class:"w-full h-full object-cover"},null,8,kv)])):(te(),se("div",Lv,ke(((E=ve(n).siteConfig.site)==null?void 0:E.logo)||"P"),1)),A("h1",Pv,ke(((H=ve(n).siteConfig.site)==null?void 0:H.title)||"像素博客"),1)]),A("nav",Mv,[A("button",{onClick:g,class:"pixel-btn bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors p-2 flex items-center justify-center",title:"切换深色模式"},[r.value?(te(),se("span",Rv,"🌙")):(te(),se("span",Dv,"☀️"))]),Ce(_v),ve(n).loading?(te(),se(Pe,{key:0},[b[4]||(b[4]=A("div",{class:"animate-pulse bg-gray-200 h-8 w-24 rounded"},null,-1)),b[5]||(b[5]=A("div",{class:"animate-pulse bg-gray-200 h-8 w-24 rounded"},null,-1)),b[6]||(b[6]=A("div",{class:"animate-pulse bg-gray-200 h-8 w-24 rounded"},null,-1))],64)):(te(!0),se(Pe,{key:1},Nt(ve(n).menus,C=>(te(),er(G,{key:C.id,to:"/"+(C.type==="home"?"":C.id),class:Vn(["pixel-btn bg-white hover:bg-pixel-accent transition-colors",{"bg-pixel-accent":y(C)}])},{default:et(()=>[A("span",Nv,ke(C.icon),1),xr(" "+ke(C.title),1)]),_:2},1032,["to","class"]))),128))])])]),A("main",Uv,[A("div",Fv,[S.value==="theme-home"||S.value==="theme-default"?(te(),se(Pe,{key:0},[b[7]||(b[7]=A("div",{class:"pixel-cloud absolute top-10 left-[-100px] opacity-60 animate-cloud-1"},null,-1)),b[8]||(b[8]=A("div",{class:"pixel-cloud absolute top-40 left-[-200px] opacity-40 animate-cloud-2 scale-75"},null,-1)),b[9]||(b[9]=A("div",{class:"pixel-cloud absolute top-20 left-[-300px] opacity-30 animate-cloud-3 scale-50"},null,-1))],64)):tn("",!0),S.value==="theme-articles"?(te(),se(Pe,{key:1},Nt(20,C=>A("div",{key:C,class:"pixel-star",style:at({top:Math.random()*100+"%",left:Math.random()*100+"%",animationDelay:Math.random()*2+"s"})},null,4)),64)):tn("",!0)]),b[15]||(b[15]=If('<div class="hidden 2xl:block absolute left-[-100px] top-20 animate-float"><svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art"><rect width="16" height="16" fill="#000"></rect><rect x="1" y="1" width="14" height="14" fill="#fcd116"></rect><rect x="1" y="1" width="14" height="1" fill="#fff5ab"></rect><rect x="1" y="1" width="1" height="14" fill="#fff5ab"></rect><rect x="14" y="2" width="1" height="13" fill="#d6a600"></rect><rect x="2" y="14" width="13" height="1" fill="#d6a600"></rect><path d="M5 4h6v2h-2v2h-2v-1h2v-1h-2v-2h-2z m2 6h2v2h-2z" fill="#d6a600"></path></svg></div><div class="hidden 2xl:block absolute right-[-100px] top-40 animate-float-delayed"><svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art"><path d="M8 1l-4 7h8z M4 8l-4 7h8z M12 8l-4 7h8z" fill="#fcd116" stroke="#d6a600" stroke-width="0.5"></path></svg></div><div class="hidden 2xl:block absolute left-[-80px] bottom-20 animate-bounce-slow"><svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art"><rect x="5" y="1" width="6" height="14" fill="#000"></rect><rect x="1" y="5" width="14" height="6" fill="#000"></rect><rect x="3" y="2" width="10" height="12" fill="#000"></rect><rect x="2" y="3" width="12" height="10" fill="#000"></rect><rect x="5" y="2" width="6" height="1" fill="#e70012"></rect><rect x="3" y="3" width="10" height="1" fill="#e70012"></rect><rect x="2" y="4" width="12" height="1" fill="#e70012"></rect><rect x="2" y="5" width="12" height="1" fill="#e70012"></rect><rect x="2" y="6" width="12" height="1" fill="#e70012"></rect><rect x="2" y="7" width="5" height="1" fill="#e70012"></rect><rect x="9" y="7" width="5" height="1" fill="#e70012"></rect><rect x="2" y="8" width="5" height="1" fill="#fff"></rect><rect x="9" y="8" width="5" height="1" fill="#fff"></rect><rect x="2" y="9" width="12" height="1" fill="#fff"></rect><rect x="2" y="10" width="12" height="1" fill="#fff"></rect><rect x="2" y="11" width="12" height="1" fill="#fff"></rect><rect x="3" y="12" width="10" height="1" fill="#fff"></rect><rect x="5" y="13" width="6" height="1" fill="#fff"></rect><rect x="6" y="6" width="4" height="4" fill="#000"></rect><rect x="7" y="7" width="2" height="2" fill="#fff"></rect></svg></div><div class="hidden xl:block absolute right-[5%] bottom-[15%] animate-bounce-slow" style="animation-delay:0.8s;"><svg width="48" height="48" viewBox="0 0 16 16" class="pixel-art"><rect x="2" y="1" width="2" height="4" fill="#fcd116"></rect><rect x="2" y="1" width="2" height="1" fill="#000"></rect><rect x="11" y="1" width="2" height="4" fill="#fcd116"></rect><rect x="11" y="1" width="2" height="1" fill="#000"></rect><rect x="3" y="4" width="9" height="7" fill="#fcd116"></rect><rect x="4" y="11" width="7" height="1" fill="#fcd116"></rect><rect x="4" y="6" width="2" height="2" fill="#000"></rect><rect x="5" y="6" width="1" height="1" fill="#fff"></rect><rect x="9" y="6" width="2" height="2" fill="#000"></rect><rect x="10" y="6" width="1" height="1" fill="#fff"></rect><rect x="3" y="8" width="2" height="2" fill="#ef4444"></rect><rect x="10" y="8" width="2" height="2" fill="#ef4444"></rect><rect x="7" y="9" width="1" height="1" fill="#000"></rect></svg></div><div class="hidden xl:block absolute left-[8%] top-[70%] animate-float" style="animation-delay:1.2s;"><svg width="48" height="48" viewBox="0 0 16 16" class="pixel-art"><path d="M6 2h4v4h-4z" fill="#4ade80"></path><rect x="7" y="3" width="2" height="2" fill="#22c55e"></rect><path d="M3 5h10v7h-10z" fill="#22d3ee"></path><rect x="4" y="12" width="2" height="2" fill="#22d3ee"></rect><rect x="10" y="12" width="2" height="2" fill="#22d3ee"></rect><rect x="4" y="7" width="2" height="2" fill="#fff"></rect><rect x="5" y="8" width="1" height="1" fill="#f00"></rect><rect x="10" y="7" width="2" height="2" fill="#fff"></rect><rect x="10" y="8" width="1" height="1" fill="#f00"></rect></svg></div><div class="hidden 2xl:block absolute right-[15%] top-[40%] animate-float-delayed" style="animation-delay:2.5s;"><svg width="40" height="40" viewBox="0 0 16 16" class="pixel-art"><path d="M6 1h4v3h2v2h-8v-2h2z" fill="#16a34a"></path><rect x="12" y="4" width="2" height="4" fill="#16a34a"></rect><rect x="5" y="6" width="6" height="5" fill="#fcd34d"></rect><rect x="6" y="8" width="1" height="1" fill="#000"></rect><rect x="9" y="8" width="1" height="1" fill="#000"></rect><rect x="5" y="11" width="6" height="4" fill="#16a34a"></rect></svg></div><div class="hidden 2xl:block absolute left-[20%] top-[30%] animate-float" style="animation-delay:3.2s;"><svg width="40" height="40" viewBox="0 0 16 16" class="pixel-art"><path d="M5 2h6v3h2v4h-1v-2h-1v2h-1v-2h-1v-2h-2v2h-1v-2h-1v2h-1v-2h-1v-4h2z" fill="#fcd116"></path><rect x="7" y="1" width="2" height="2" fill="#d6a600"></rect><rect x="8" y="2" width="1" height="1" fill="#ef4444"></rect><rect x="6" y="5" width="4" height="4" fill="#fcd34d"></rect><rect x="6" y="7" width="1" height="1" fill="#000"></rect><rect x="9" y="7" width="1" height="1" fill="#000"></rect><rect x="5" y="9" width="6" height="6" fill="#f472b6"></rect><rect x="6" y="9" width="4" height="6" fill="#db2777"></rect></svg></div><div class="hidden xl:block absolute left-[2%] bottom-[40%] animate-spin-slow" style="animation-delay:4s;"><svg width="40" height="40" viewBox="0 0 16 16" class="pixel-art"><rect x="4" y="2" width="8" height="12" fill="#78350f"></rect><rect x="2" y="4" width="12" height="8" fill="#78350f"></rect><rect x="5" y="3" width="6" height="10" fill="#92400e"></rect><rect x="3" y="5" width="10" height="6" fill="#92400e"></rect><rect x="3" y="2" width="2" height="4" fill="#9ca3af"></rect><rect x="11" y="2" width="2" height="4" fill="#9ca3af"></rect></svg></div><div class="hidden xl:block absolute right-[10%] top-[60%] animate-float" style="animation-delay:2s;"><svg width="32" height="32" viewBox="0 0 16 16" class="pixel-art"><path d="M4 4 L8 0 L12 4 L12 10 L8 14 L4 10 Z" fill="#4ade80" stroke="#166534" stroke-width="1"></path><path d="M6 5 L8 3 L10 5 L10 9 L8 11 L6 9 Z" fill="#86efac"></path></svg></div><div class="hidden xl:block absolute left-[5%] bottom-[10%] animate-bounce-slow" style="animation-delay:1.5s;"><svg width="48" height="48" viewBox="0 0 16 16" class="pixel-art"><rect x="2" y="0" width="12" height="4" fill="#22c55e" stroke="#000" stroke-width="1"></rect><rect x="3" y="4" width="10" height="12" fill="#22c55e" stroke="#000" stroke-width="1"></rect><rect x="4" y="1" width="1" height="2" fill="#86efac"></rect><rect x="5" y="5" width="1" height="10" fill="#86efac"></rect></svg></div><div class="hidden xl:block absolute right-[20%] top-[20%] animate-float" style="animation-delay:0.5s;"><svg width="32" height="32" viewBox="0 0 16 16" class="pixel-art"><path d="M4 2h8v12h-8z" fill="#fcd116" stroke="#d6a600" stroke-width="1"></path><rect x="6" y="4" width="2" height="8" fill="#fff5ab"></rect></svg></div><div class="hidden lg:block absolute left-[15%] top-[15%] animate-bounce-slow opacity-80" style="animation-delay:1s;"><svg width="32" height="32" viewBox="0 0 16 16" class="pixel-art"><path d="M2 2h5v3h2v-3h5v5l-6 6l-6-6z" fill="#ef4444" stroke="#991b1b" stroke-width="0.5"></path><rect x="3" y="3" width="2" height="2" fill="#fca5a5"></rect></svg></div><div class="hidden lg:block absolute right-[8%] bottom-[30%] animate-float-delayed opacity-80" style="animation-delay:2.5s;"><svg width="40" height="40" viewBox="0 0 16 16" class="pixel-art"><path d="M3 3h10v5h-10z" fill="#ef4444"></path><rect x="2" y="4" width="1" height="3" fill="#ef4444"></rect><rect x="13" y="4" width="1" height="3" fill="#ef4444"></rect><rect x="4" y="4" width="2" height="2" fill="#fff"></rect><rect x="10" y="4" width="2" height="2" fill="#fff"></rect><rect x="7" y="2" width="2" height="1" fill="#fff"></rect><path d="M4 8h8v5h-8z" fill="#fcd34d"></path><rect x="3" y="9" width="1" height="3" fill="#fcd34d"></rect><rect x="12" y="9" width="1" height="3" fill="#fcd34d"></rect><rect x="6" y="9" width="1" height="2" fill="#000"></rect><rect x="9" y="9" width="1" height="2" fill="#000"></rect></svg></div><div class="hidden md:block absolute left-[5%] top-[50%] animate-spin-slow opacity-60" style="animation-delay:3s;"><svg width="36" height="36" viewBox="0 0 16 16" class="pixel-art"><path d="M8 0l2 6h6l-5 4l2 6l-5-4l-5 4l2-6l-5-4h6z" fill="#fcd116"></path><rect x="7" y="4" width="2" height="8" fill="#000" opacity="0.1"></rect><rect x="8" y="5" width="1" height="2" fill="#000"></rect><rect x="6" y="6" width="1" height="2" fill="#000"></rect></svg></div><div class="hidden md:block absolute right-[12%] top-[5%] animate-float opacity-70"><svg width="28" height="28" viewBox="0 0 16 16" class="pixel-art"><rect x="6" y="1" width="4" height="2" fill="#a855f7"></rect><rect x="4" y="3" width="8" height="10" fill="#a855f7"></rect><rect x="5" y="13" width="6" height="1" fill="#a855f7"></rect><rect x="6" y="4" width="2" height="6" fill="#fff" opacity="0.3"></rect><rect x="5" y="3" width="6" height="1" fill="#9333ea"></rect></svg></div>',15)),A("div",Bv,[b[10]||(b[10]=A("div",{class:"absolute top-2 right-2 w-4 h-4 bg-pixel-secondary opacity-50"},null,-1)),b[11]||(b[11]=A("div",{class:"absolute bottom-2 left-2 w-4 h-4 bg-pixel-primary opacity-50"},null,-1)),Ce(Y,null,{default:et(({Component:C,route:Z})=>[Ce(yi,{name:"page",mode:"out-in"},{default:et(()=>[(te(),er(qu(C),{key:Z.path}))]),_:2},1024)]),_:1})]),A("aside",Hv,[ve(n).currentToc.length>0?(te(),se("div",{key:0,class:"shrink-0 bg-white/95 dark:bg-gray-900/95 pixel-border p-4 text-gray-900 dark:text-gray-100 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer",onClick:b[1]||(b[1]=C=>N("comments-section"))},[A("a",{href:"#comments-section",class:"block transition-colors text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-pixel-secondary flex items-center justify-center gap-2",onClick:b[0]||(b[0]=Ts(C=>N("comments-section"),["prevent"]))},[...b[12]||(b[12]=[A("span",{class:"text-lg animate-bounce"},"💬",-1),A("span",{class:"text-pixel-secondary font-pixel"},"跳转至评论区",-1)])])])):tn("",!0),A("div",{ref_key:"tocContainer",ref:a,class:"flex-grow overflow-y-auto min-h-0 custom-scrollbar pr-1",onMouseenter:b[2]||(b[2]=C=>u.value=!0),onMouseleave:b[3]||(b[3]=C=>u.value=!1)},[ve(n).currentToc.length>0?(te(),se("div",Gv,[b[13]||(b[13]=A("h3",{class:"font-pixel text-sm mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2"},[A("span",{class:"text-pixel-primary"},"📑"),xr(" 目录 ")],-1)),A("ul",jv,[(te(!0),se(Pe,null,Nt(ve(n).currentToc,C=>(te(),se("li",{key:C.id,class:Vn({"pl-4":C.level>2,"pl-8":C.level>3})},[A("a",{href:"#"+C.id,class:Vn(["block transition-colors truncate border-l-2 pl-2 py-1",[ve(n).activeHeadingId===C.id?"border-pixel-primary text-pixel-primary font-bold bg-pixel-primary/10":"border-transparent text-gray-600 dark:text-gray-400 hover:text-pixel-primary dark:hover:text-pixel-primary hover:border-gray-300"]]),onClick:Ts(Z=>N(C.id),["prevent"])},ke(C.text),11,Vv)],2))),128))])])):tn("",!0)],544),A("div",Wv,[b[14]||(b[14]=A("h3",{class:"font-pixel text-sm mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2"},[A("span",{class:"text-pixel-primary"},"★"),xr(" 最近更新 ")],-1)),A("ul",Yv,[(te(!0),se(Pe,null,Nt(ve(n).recentArticles,C=>(te(),se("li",{key:C.path},[Ce(G,{to:{path:L(C),query:{path:C.path}},class:"group block hover:translate-x-1 transition-transform"},{default:et(()=>[A("div",$v,ke(C.title||"无标题"),1),A("div",qv,[A("span",null,ke(w(C.date)),1),A("span",Kv,ke(C.category),1)])]),_:2},1032,["to"])]))),128))])])])]),A("footer",Jv,[A("p",null,"© "+ke(new Date().getFullYear())+" "+ke(((X=ve(n).siteConfig.site)==null?void 0:X.title)||"像素博客")+". 基于 Vue 3 & Vite 构建。",1),ve(n).siteConfig.social?(te(),se("div",Xv,[ve(n).siteConfig.social.github?(te(),se("a",{key:0,href:ve(n).siteConfig.social.github,target:"_blank",class:"hover:text-pixel-primary transition-colors flex flex-col items-center gap-1 group"},[...b[16]||(b[16]=[A("div",{class:"w-8 h-8 bg-white text-black rounded flex items-center justify-center pixel-border-sm group-hover:bg-pixel-primary group-hover:text-white transition-colors"},[A("svg",{viewBox:"0 0 24 24",class:"w-5 h-5 fill-current"},[A("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})])],-1),A("span",null,"GITHUB",-1)])],8,zv)):tn("",!0),ve(n).siteConfig.social.bilibili?(te(),se("a",{key:1,href:ve(n).siteConfig.social.bilibili,target:"_blank",class:"hover:text-pixel-secondary transition-colors flex flex-col items-center gap-1 group"},[...b[17]||(b[17]=[A("div",{class:"w-8 h-8 bg-white text-black rounded flex items-center justify-center pixel-border-sm group-hover:bg-pixel-secondary group-hover:text-white transition-colors"},[A("svg",{viewBox:"0 0 24 24",class:"w-5 h-5 fill-current"},[A("path",{d:"M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267c.053-.071.116-.142.187-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.387-.947.258-.257.574-.386.946-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.387-.947.258-.257.574-.386.946-.386z"})])],-1),A("span",null,"BILIBILI",-1)])],8,Qv)):tn("",!0)])):tn("",!0),b[18]||(b[18]=A("div",{class:"mt-6 flex justify-center gap-4"},[A("div",{class:"w-2 h-2 bg-pixel-primary animate-pulse"}),A("div",{class:"w-2 h-2 bg-pixel-secondary animate-pulse delay-75"}),A("div",{class:"w-2 h-2 bg-pixel-accent animate-pulse delay-150"})],-1))]),Ce(lv),A("div",{ref_key:"particleContainer",ref:i,class:"fixed inset-0 pointer-events-none z-[9999]"},null,512),Ce(yi,{name:"fade"},{default:et(()=>[s.value?(te(),se("div",Zv,[b[21]||(b[21]=A("div",{class:"text-white font-pixel text-2xl mb-12 animate-pulse"},"正在加载世界...",-1)),A("div",ey,[b[20]||(b[20]=A("div",{class:"absolute right-0 bottom-0 w-16 h-16 z-10"},[A("svg",{viewBox:"0 0 16 16",class:"w-full h-full"},[A("rect",{x:"0",y:"2",width:"4",height:"12",fill:"#22c55e",stroke:"#000","stroke-width":"0.5"}),A("rect",{x:"4",y:"3",width:"12",height:"10",fill:"#22c55e",stroke:"#000","stroke-width":"0.5"}),A("rect",{x:"1",y:"3",width:"1",height:"10",fill:"#86efac"}),A("rect",{x:"4",y:"4",width:"12",height:"2",fill:"#86efac"})])],-1)),A("div",{class:"absolute bottom-0 w-12 h-12 transition-all duration-100 ease-linear",style:at({left:`calc(${l.value}% - 3rem)`})},[...b[19]||(b[19]=[A("svg",{viewBox:"0 0 12 16",class:"w-full h-full animate-bounce-fast"},[A("rect",{x:"3",y:"0",width:"5",height:"1",fill:"#f00"}),A("rect",{x:"2",y:"1",width:"9",height:"1",fill:"#f00"}),A("rect",{x:"2",y:"2",width:"7",height:"1",fill:"#fc9"}),A("rect",{x:"9",y:"2",width:"1",height:"1",fill:"#000"}),A("rect",{x:"2",y:"3",width:"1",height:"1",fill:"#fc9"}),A("rect",{x:"4",y:"3",width:"1",height:"1",fill:"#fc9"}),A("rect",{x:"8",y:"3",width:"3",height:"1",fill:"#000"}),A("rect",{x:"2",y:"5",width:"7",height:"3",fill:"#00f"}),A("rect",{x:"1",y:"6",width:"1",height:"2",fill:"#f00"}),A("rect",{x:"9",y:"6",width:"1",height:"2",fill:"#f00"})],-1)])],4)]),A("div",ny,ke(Math.floor(l.value))+"%",1)])):tn("",!0)]),_:1}),Ce(yi,{name:"fade"},{default:et(()=>[o.value?(te(),se("div",{key:0,class:"fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center backdrop-blur-sm",onClick:c},[...b[22]||(b[22]=[A("div",{class:"text-center animate-bounce cursor-pointer"},[A("div",{class:"font-pixel text-4xl text-white mb-4 text-stroke tracking-widest"},"点击开始"),A("div",{class:"font-pixel text-sm text-gray-400 animate-pulse"},"点击任意处进入")],-1)])])):tn("",!0)]),_:1})],2)}}},ry=Uh({history:mh("/XiaJie.github.io/"),routes:[{path:"/",component:ty,children:[{path:"",component:()=>Bo(()=>import("./DynamicPage-0f49ba4a.js"),["assets/DynamicPage-0f49ba4a.js","assets/DynamicPage-30e17b79.css"])},{path:":category",component:()=>Bo(()=>import("./DynamicPage-0f49ba4a.js"),["assets/DynamicPage-0f49ba4a.js","assets/DynamicPage-30e17b79.css"])}]}]}),iy=Ad(),Ro=xd(jh);Ro.use(iy);Ro.use(ry);Ro.mount("#app");export{Av as A,Jr as B,W0 as C,Pe as F,yi as T,Eo as _,Zr as a,te as b,Fe as c,se as d,A as e,Bh as f,Fh as g,Sv as h,oy as i,ve as j,Ce as k,et as l,er as m,Du as n,Qr as o,Vn as p,Nt as q,ye as r,tn as s,ke as t,Fc as u,sy as v,st as w,at as x,Ts as y,xr as z};
