(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function W0(c,e){const a=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)a[s[r]]=!0;return e?r=>!!a[r.toLowerCase()]:r=>!!a[r]}const NC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yC=W0(NC);function ba(c){return!!c||c===""}function G0(c){if(W(c)){const e={};for(let a=0;a<c.length;a++){const s=c[a],r=A1(s)?AC(s):G0(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(A1(c))return c;if(v1(c))return c}}const wC=/;(?![^(]*\))/g,kC=/:(.+)/;function AC(c){const e={};return c.split(wC).forEach(a=>{if(a){const s=a.split(kC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function y8(c){let e="";if(A1(c))e=c;else if(W(c))for(let a=0;a<c.length;a++){const s=y8(c[a]);s&&(e+=s+" ")}else if(v1(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const n1={},E3=[],e2=()=>{},TC=()=>!1,_C=/^on[^a-z]/,w8=c=>_C.test(c),j0=c=>c.startsWith("onUpdate:"),I1=Object.assign,K0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},EC=Object.prototype.hasOwnProperty,Z=(c,e)=>EC.call(c,e),W=Array.isArray,p4=c=>k8(c)==="[object Map]",PC=c=>k8(c)==="[object Set]",$=c=>typeof c=="function",A1=c=>typeof c=="string",Z0=c=>typeof c=="symbol",v1=c=>c!==null&&typeof c=="object",xa=c=>v1(c)&&$(c.then)&&$(c.catch),IC=Object.prototype.toString,k8=c=>IC.call(c),RC=c=>k8(c).slice(8,-1),DC=c=>k8(c)==="[object Object]",X0=c=>A1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,$6=W0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A8=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},FC=/-(\w)/g,z2=A8(c=>c.replace(FC,(e,a)=>a?a.toUpperCase():"")),OC=/\B([A-Z])/g,Y3=A8(c=>c.replace(OC,"-$1").toLowerCase()),T8=A8(c=>c.charAt(0).toUpperCase()+c.slice(1)),x5=A8(c=>c?`on${T8(c)}`:""),N4=(c,e)=>!Object.is(c,e),S5=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},a8=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},BC=c=>{const e=parseFloat(c);return isNaN(e)?c:e};let Hc;const UC=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let o2;class Sa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=o2,!e&&o2&&(this.index=(o2.scopes||(o2.scopes=[])).push(this)-1)}run(e){if(this.active){const a=o2;try{return o2=this,e()}finally{o2=a}}}on(){o2=this}off(){o2=this.parent}stop(e){if(this.active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function qC(c){return new Sa(c)}function $C(c,e=o2){e&&e.active&&e.effects.push(c)}const Y0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},Na=c=>(c.w&Z2)>0,ya=c=>(c.n&Z2)>0,WC=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=Z2},GC=c=>{const{deps:e}=c;if(e.length){let a=0;for(let s=0;s<e.length;s++){const r=e[s];Na(r)&&!ya(r)?r.delete(c):e[a++]=r,r.w&=~Z2,r.n&=~Z2}e.length=a}},J5=new WeakMap;let h4=0,Z2=1;const Q5=30;let Y1;const u3=Symbol(""),c0=Symbol("");class J0{constructor(e,a=null,s){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,$C(this,s)}run(){if(!this.active)return this.fn();let e=Y1,a=q2;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Y1,Y1=this,q2=!0,Z2=1<<++h4,h4<=Q5?WC(this):Mc(this),this.fn()}finally{h4<=Q5&&GC(this),Z2=1<<--h4,Y1=this.parent,q2=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Y1===this?this.deferStop=!0:this.active&&(Mc(this),this.onStop&&this.onStop(),this.active=!1)}}function Mc(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let q2=!0;const wa=[];function J3(){wa.push(q2),q2=!1}function Q3(){const c=wa.pop();q2=c===void 0?!0:c}function W1(c,e,a){if(q2&&Y1){let s=J5.get(c);s||J5.set(c,s=new Map);let r=s.get(a);r||s.set(a,r=Y0()),ka(r)}}function ka(c,e){let a=!1;h4<=Q5?ya(c)||(c.n|=Z2,a=!Na(c)):a=!c.has(Y1),a&&(c.add(Y1),Y1.deps.push(c))}function L2(c,e,a,s,r,i){const n=J5.get(c);if(!n)return;let t=[];if(e==="clear")t=[...n.values()];else if(a==="length"&&W(c))n.forEach((o,l)=>{(l==="length"||l>=s)&&t.push(o)});else switch(a!==void 0&&t.push(n.get(a)),e){case"add":W(c)?X0(a)&&t.push(n.get("length")):(t.push(n.get(u3)),p4(c)&&t.push(n.get(c0)));break;case"delete":W(c)||(t.push(n.get(u3)),p4(c)&&t.push(n.get(c0)));break;case"set":p4(c)&&t.push(n.get(u3));break}if(t.length===1)t[0]&&e0(t[0]);else{const o=[];for(const l of t)l&&o.push(...l);e0(Y0(o))}}function e0(c,e){const a=W(c)?c:[...c];for(const s of a)s.computed&&Vc(s);for(const s of a)s.computed||Vc(s)}function Vc(c,e){(c!==Y1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const jC=W0("__proto__,__v_isRef,__isVue"),Aa=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(Z0)),KC=Q0(),ZC=Q0(!1,!0),XC=Q0(!0),gc=YC();function YC(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const s=J(this);for(let i=0,n=this.length;i<n;i++)W1(s,"get",i+"");const r=s[e](...a);return r===-1||r===!1?s[e](...a.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){J3();const s=J(this)[e].apply(this,a);return Q3(),s}}),c}function Q0(c=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(c?e?uz:Ia:e?Pa:Ea).get(s))return s;const n=W(s);if(!c&&n&&Z(gc,r))return Reflect.get(gc,r,i);const t=Reflect.get(s,r,i);return(Z0(r)?Aa.has(r):jC(r))||(c||W1(s,"get",r),e)?t:N1(t)?n&&X0(r)?t:t.value:v1(t)?c?Ra(t):X4(t):t}}const JC=Ta(),QC=Ta(!0);function Ta(c=!1){return function(a,s,r,i){let n=a[s];if(q3(n)&&N1(n)&&!N1(r))return!1;if(!c&&(!s8(r)&&!q3(r)&&(n=J(n),r=J(r)),!W(a)&&N1(n)&&!N1(r)))return n.value=r,!0;const t=W(a)&&X0(s)?Number(s)<a.length:Z(a,s),o=Reflect.set(a,s,r,i);return a===J(i)&&(t?N4(r,n)&&L2(a,"set",s,r):L2(a,"add",s,r)),o}}function cz(c,e){const a=Z(c,e);c[e];const s=Reflect.deleteProperty(c,e);return s&&a&&L2(c,"delete",e,void 0),s}function ez(c,e){const a=Reflect.has(c,e);return(!Z0(e)||!Aa.has(e))&&W1(c,"has",e),a}function az(c){return W1(c,"iterate",W(c)?"length":u3),Reflect.ownKeys(c)}const _a={get:KC,set:JC,deleteProperty:cz,has:ez,ownKeys:az},sz={get:XC,set(c,e){return!0},deleteProperty(c,e){return!0}},rz=I1({},_a,{get:ZC,set:QC}),c7=c=>c,_8=c=>Reflect.getPrototypeOf(c);function S6(c,e,a=!1,s=!1){c=c.__v_raw;const r=J(c),i=J(e);a||(e!==i&&W1(r,"get",e),W1(r,"get",i));const{has:n}=_8(r),t=s?c7:a?r7:y4;if(n.call(r,e))return t(c.get(e));if(n.call(r,i))return t(c.get(i));c!==r&&c.get(e)}function N6(c,e=!1){const a=this.__v_raw,s=J(a),r=J(c);return e||(c!==r&&W1(s,"has",c),W1(s,"has",r)),c===r?a.has(c):a.has(c)||a.has(r)}function y6(c,e=!1){return c=c.__v_raw,!e&&W1(J(c),"iterate",u3),Reflect.get(c,"size",c)}function Lc(c){c=J(c);const e=J(this);return _8(e).has.call(e,c)||(e.add(c),L2(e,"add",c,c)),this}function bc(c,e){e=J(e);const a=J(this),{has:s,get:r}=_8(a);let i=s.call(a,c);i||(c=J(c),i=s.call(a,c));const n=r.call(a,c);return a.set(c,e),i?N4(e,n)&&L2(a,"set",c,e):L2(a,"add",c,e),this}function xc(c){const e=J(this),{has:a,get:s}=_8(e);let r=a.call(e,c);r||(c=J(c),r=a.call(e,c)),s&&s.call(e,c);const i=e.delete(c);return r&&L2(e,"delete",c,void 0),i}function Sc(){const c=J(this),e=c.size!==0,a=c.clear();return e&&L2(c,"clear",void 0,void 0),a}function w6(c,e){return function(s,r){const i=this,n=i.__v_raw,t=J(n),o=e?c7:c?r7:y4;return!c&&W1(t,"iterate",u3),n.forEach((l,f)=>s.call(r,o(l),o(f),i))}}function k6(c,e,a){return function(...s){const r=this.__v_raw,i=J(r),n=p4(i),t=c==="entries"||c===Symbol.iterator&&n,o=c==="keys"&&n,l=r[c](...s),f=a?c7:e?r7:y4;return!e&&W1(i,"iterate",o?c0:u3),{next(){const{value:m,done:v}=l.next();return v?{value:m,done:v}:{value:t?[f(m[0]),f(m[1])]:f(m),done:v}},[Symbol.iterator](){return this}}}}function _2(c){return function(...e){return c==="delete"?!1:this}}function iz(){const c={get(i){return S6(this,i)},get size(){return y6(this)},has:N6,add:Lc,set:bc,delete:xc,clear:Sc,forEach:w6(!1,!1)},e={get(i){return S6(this,i,!1,!0)},get size(){return y6(this)},has:N6,add:Lc,set:bc,delete:xc,clear:Sc,forEach:w6(!1,!0)},a={get(i){return S6(this,i,!0)},get size(){return y6(this,!0)},has(i){return N6.call(this,i,!0)},add:_2("add"),set:_2("set"),delete:_2("delete"),clear:_2("clear"),forEach:w6(!0,!1)},s={get(i){return S6(this,i,!0,!0)},get size(){return y6(this,!0)},has(i){return N6.call(this,i,!0)},add:_2("add"),set:_2("set"),delete:_2("delete"),clear:_2("clear"),forEach:w6(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=k6(i,!1,!1),a[i]=k6(i,!0,!1),e[i]=k6(i,!1,!0),s[i]=k6(i,!0,!0)}),[c,a,e,s]}const[nz,tz,oz,lz]=iz();function e7(c,e){const a=e?c?lz:oz:c?tz:nz;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(Z(a,r)&&r in s?a:s,r,i)}const fz={get:e7(!1,!1)},hz={get:e7(!1,!0)},mz={get:e7(!0,!1)},Ea=new WeakMap,Pa=new WeakMap,Ia=new WeakMap,uz=new WeakMap;function vz(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cz(c){return c.__v_skip||!Object.isExtensible(c)?0:vz(RC(c))}function X4(c){return q3(c)?c:a7(c,!1,_a,fz,Ea)}function zz(c){return a7(c,!1,rz,hz,Pa)}function Ra(c){return a7(c,!0,sz,mz,Ia)}function a7(c,e,a,s,r){if(!v1(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=Cz(c);if(n===0)return c;const t=new Proxy(c,n===2?s:a);return r.set(c,t),t}function P3(c){return q3(c)?P3(c.__v_raw):!!(c&&c.__v_isReactive)}function q3(c){return!!(c&&c.__v_isReadonly)}function s8(c){return!!(c&&c.__v_isShallow)}function Da(c){return P3(c)||q3(c)}function J(c){const e=c&&c.__v_raw;return e?J(e):c}function s7(c){return a8(c,"__v_skip",!0),c}const y4=c=>v1(c)?X4(c):c,r7=c=>v1(c)?Ra(c):c;function Fa(c){q2&&Y1&&(c=J(c),ka(c.dep||(c.dep=Y0())))}function Oa(c,e){c=J(c),c.dep&&e0(c.dep)}function N1(c){return!!(c&&c.__v_isRef===!0)}function Ba(c){return Ua(c,!1)}function pz(c){return Ua(c,!0)}function Ua(c,e){return N1(c)?c:new dz(c,e)}class dz{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:J(e),this._value=a?e:y4(e)}get value(){return Fa(this),this._value}set value(e){const a=this.__v_isShallow||s8(e)||q3(e);e=a?e:J(e),N4(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:y4(e),Oa(this))}}function I3(c){return N1(c)?c.value:c}const Hz={get:(c,e,a)=>I3(Reflect.get(c,e,a)),set:(c,e,a,s)=>{const r=c[e];return N1(r)&&!N1(a)?(r.value=a,!0):Reflect.set(c,e,a,s)}};function qa(c){return P3(c)?c:new Proxy(c,Hz)}var $a;class Mz{constructor(e,a,s,r){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[$a]=!1,this._dirty=!0,this.effect=new J0(e,()=>{this._dirty||(this._dirty=!0,Oa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=J(this);return Fa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$a="__v_isReadonly";function Vz(c,e,a=!1){let s,r;const i=$(c);return i?(s=c,r=e2):(s=c.get,r=c.set),new Mz(s,r,i||!r,a)}function $2(c,e,a,s){let r;try{r=s?c(...s):c()}catch(i){E8(i,e,a)}return r}function a2(c,e,a,s){if($(c)){const i=$2(c,e,a,s);return i&&xa(i)&&i.catch(n=>{E8(n,e,a)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(a2(c[i],e,a,s));return r}function E8(c,e,a,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const n=e.proxy,t=a;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,n,t)===!1)return}i=i.parent}const o=e.appContext.config.errorHandler;if(o){$2(o,null,10,[c,n,t]);return}}gz(c,a,r,s)}function gz(c,e,a,s=!0){console.error(c)}let w4=!1,a0=!1;const S1=[];let f2=0;const R3=[];let d2=null,t3=0;const Wa=Promise.resolve();let i7=null;function Ga(c){const e=i7||Wa;return c?e.then(this?c.bind(this):c):e}function Lz(c){let e=f2+1,a=S1.length;for(;e<a;){const s=e+a>>>1;k4(S1[s])<c?e=s+1:a=s}return e}function n7(c){(!S1.length||!S1.includes(c,w4&&c.allowRecurse?f2+1:f2))&&(c.id==null?S1.push(c):S1.splice(Lz(c.id),0,c),ja())}function ja(){!w4&&!a0&&(a0=!0,i7=Wa.then(Za))}function bz(c){const e=S1.indexOf(c);e>f2&&S1.splice(e,1)}function xz(c){W(c)?R3.push(...c):(!d2||!d2.includes(c,c.allowRecurse?t3+1:t3))&&R3.push(c),ja()}function Nc(c,e=w4?f2+1:0){for(;e<S1.length;e++){const a=S1[e];a&&a.pre&&(S1.splice(e,1),e--,a())}}function Ka(c){if(R3.length){const e=[...new Set(R3)];if(R3.length=0,d2){d2.push(...e);return}for(d2=e,d2.sort((a,s)=>k4(a)-k4(s)),t3=0;t3<d2.length;t3++)d2[t3]();d2=null,t3=0}}const k4=c=>c.id==null?1/0:c.id,Sz=(c,e)=>{const a=k4(c)-k4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function Za(c){a0=!1,w4=!0,S1.sort(Sz);const e=e2;try{for(f2=0;f2<S1.length;f2++){const a=S1[f2];a&&a.active!==!1&&$2(a,null,14)}}finally{f2=0,S1.length=0,Ka(),w4=!1,i7=null,(S1.length||R3.length)&&Za()}}function Nz(c,e,...a){if(c.isUnmounted)return;const s=c.vnode.props||n1;let r=a;const i=e.startsWith("update:"),n=i&&e.slice(7);if(n&&n in s){const f=`${n==="modelValue"?"model":n}Modifiers`,{number:m,trim:v}=s[f]||n1;v&&(r=a.map(C=>C.trim())),m&&(r=a.map(BC))}let t,o=s[t=x5(e)]||s[t=x5(z2(e))];!o&&i&&(o=s[t=x5(Y3(e))]),o&&a2(o,c,6,r);const l=s[t+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,a2(l,c,6,r)}}function Xa(c,e,a=!1){const s=e.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},t=!1;if(!$(c)){const o=l=>{const f=Xa(l,e,!0);f&&(t=!0,I1(n,f))};!a&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!i&&!t?(v1(c)&&s.set(c,null),null):(W(i)?i.forEach(o=>n[o]=null):I1(n,i),v1(c)&&s.set(c,n),n)}function P8(c,e){return!c||!w8(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(c,e[0].toLowerCase()+e.slice(1))||Z(c,Y3(e))||Z(c,e))}let m2=null,I8=null;function r8(c){const e=m2;return m2=c,I8=c&&c.type.__scopeId||null,e}function yz(c){I8=c}function wz(){I8=null}function W6(c,e=m2,a){if(!e||c._n)return c;const s=(...r)=>{s._d&&Rc(-1);const i=r8(e);let n;try{n=c(...r)}finally{r8(i),s._d&&Rc(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function N5(c){const{type:e,vnode:a,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:t,attrs:o,emit:l,render:f,renderCache:m,data:v,setupState:C,ctx:L,inheritAttrs:N}=c;let T,p;const V=r8(c);try{if(a.shapeFlag&4){const O=r||s;T=l2(f.call(O,O,m,i,C,v,L)),p=o}else{const O=e;T=l2(O.length>1?O(i,{attrs:o,slots:t,emit:l}):O(i,null)),p=e.props?o:kz(o)}}catch(O){H4.length=0,E8(O,c,1),T=y1(A4)}let _=T;if(p&&N!==!1){const O=Object.keys(p),{shapeFlag:j}=_;O.length&&j&7&&(n&&O.some(j0)&&(p=Az(p,n)),_=$3(_,p))}return a.dirs&&(_=$3(_),_.dirs=_.dirs?_.dirs.concat(a.dirs):a.dirs),a.transition&&(_.transition=a.transition),T=_,r8(V),T}const kz=c=>{let e;for(const a in c)(a==="class"||a==="style"||w8(a))&&((e||(e={}))[a]=c[a]);return e},Az=(c,e)=>{const a={};for(const s in c)(!j0(s)||!(s.slice(9)in e))&&(a[s]=c[s]);return a};function Tz(c,e,a){const{props:s,children:r,component:i}=c,{props:n,children:t,patchFlag:o}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return s?yc(s,n,l):!!n;if(o&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const v=f[m];if(n[v]!==s[v]&&!P8(l,v))return!0}}}else return(r||t)&&(!t||!t.$stable)?!0:s===n?!1:s?n?yc(s,n,l):!0:!!n;return!1}function yc(c,e,a){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==c[i]&&!P8(a,i))return!0}return!1}function _z({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const Ez=c=>c.__isSuspense;function Pz(c,e){e&&e.pendingBranch?W(c)?e.effects.push(...c):e.effects.push(c):xz(c)}function G6(c,e){if(g1){let a=g1.provides;const s=g1.parent&&g1.parent.provides;s===a&&(a=g1.provides=Object.create(s)),a[c]=e}}function W2(c,e,a=!1){const s=g1||m2;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return a&&$(e)?e.call(s.proxy):e}}const wc={};function d4(c,e,a){return Ya(c,e,a)}function Ya(c,e,{immediate:a,deep:s,flush:r,onTrack:i,onTrigger:n}=n1){const t=g1;let o,l=!1,f=!1;if(N1(c)?(o=()=>c.value,l=s8(c)):P3(c)?(o=()=>c,s=!0):W(c)?(f=!0,l=c.some(p=>P3(p)||s8(p)),o=()=>c.map(p=>{if(N1(p))return p.value;if(P3(p))return w3(p);if($(p))return $2(p,t,2)})):$(c)?e?o=()=>$2(c,t,2):o=()=>{if(!(t&&t.isUnmounted))return m&&m(),a2(c,t,3,[v])}:o=e2,e&&s){const p=o;o=()=>w3(p())}let m,v=p=>{m=T.onStop=()=>{$2(p,t,4)}};if(_4)return v=e2,e?a&&a2(e,t,3,[o(),f?[]:void 0,v]):o(),e2;let C=f?[]:wc;const L=()=>{if(!!T.active)if(e){const p=T.run();(s||l||(f?p.some((V,_)=>N4(V,C[_])):N4(p,C)))&&(m&&m(),a2(e,t,3,[p,C===wc?void 0:C,v]),C=p)}else T.run()};L.allowRecurse=!!e;let N;r==="sync"?N=L:r==="post"?N=()=>O1(L,t&&t.suspense):(L.pre=!0,t&&(L.id=t.uid),N=()=>n7(L));const T=new J0(o,N);return e?a?L():C=T.run():r==="post"?O1(T.run.bind(T),t&&t.suspense):T.run(),()=>{T.stop(),t&&t.scope&&K0(t.scope.effects,T)}}function Iz(c,e,a){const s=this.proxy,r=A1(c)?c.includes(".")?Ja(s,c):()=>s[c]:c.bind(s,s);let i;$(e)?i=e:(i=e.handler,a=e);const n=g1;W3(this);const t=Ya(r,i.bind(s),a);return n?W3(n):v3(),t}function Ja(c,e){const a=e.split(".");return()=>{let s=c;for(let r=0;r<a.length&&s;r++)s=s[a[r]];return s}}function w3(c,e){if(!v1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),N1(c))w3(c.value,e);else if(W(c))for(let a=0;a<c.length;a++)w3(c[a],e);else if(PC(c)||p4(c))c.forEach(a=>{w3(a,e)});else if(DC(c))for(const a in c)w3(c[a],e);return c}function Y4(c){return $(c)?{setup:c,name:c.name}:c}const j6=c=>!!c.type.__asyncLoader,Qa=c=>c.type.__isKeepAlive;function Rz(c,e){cs(c,"a",e)}function Dz(c,e){cs(c,"da",e)}function cs(c,e,a=g1){const s=c.__wdc||(c.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(R8(e,s,a),a){let r=a.parent;for(;r&&r.parent;)Qa(r.parent.vnode)&&Fz(s,e,a,r),r=r.parent}}function Fz(c,e,a,s){const r=R8(e,c,s,!0);es(()=>{K0(s[e],r)},a)}function R8(c,e,a=g1,s=!1){if(a){const r=a[c]||(a[c]=[]),i=e.__weh||(e.__weh=(...n)=>{if(a.isUnmounted)return;J3(),W3(a);const t=a2(e,a,c,n);return v3(),Q3(),t});return s?r.unshift(i):r.push(i),i}}const w2=c=>(e,a=g1)=>(!_4||c==="sp")&&R8(c,(...s)=>e(...s),a),Oz=w2("bm"),Bz=w2("m"),Uz=w2("bu"),qz=w2("u"),$z=w2("bum"),es=w2("um"),Wz=w2("sp"),Gz=w2("rtg"),jz=w2("rtc");function Kz(c,e=g1){R8("ec",c,e)}function s3(c,e,a,s){const r=c.dirs,i=e&&e.dirs;for(let n=0;n<r.length;n++){const t=r[n];i&&(t.oldValue=i[n].value);let o=t.dir[s];o&&(J3(),a2(o,a,8,[c.el,t,c,e]),Q3())}}const as="components";function ss(c,e){return Xz(as,c,!0,e)||c}const Zz=Symbol();function Xz(c,e,a=!0,s=!1){const r=m2||g1;if(r){const i=r.type;if(c===as){const t=Np(i,!1);if(t&&(t===e||t===z2(e)||t===T8(z2(e))))return i}const n=kc(r[c]||i[c],e)||kc(r.appContext[c],e);return!n&&s?i:n}}function kc(c,e){return c&&(c[e]||c[z2(e)]||c[T8(z2(e))])}const s0=c=>c?Cs(c)?m7(c)||c.proxy:s0(c.parent):null,i8=I1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>s0(c.parent),$root:c=>s0(c.root),$emit:c=>c.emit,$options:c=>t7(c),$forceUpdate:c=>c.f||(c.f=()=>n7(c.update)),$nextTick:c=>c.n||(c.n=Ga.bind(c.proxy)),$watch:c=>Iz.bind(c)}),Yz={get({_:c},e){const{ctx:a,setupState:s,data:r,props:i,accessCache:n,type:t,appContext:o}=c;let l;if(e[0]!=="$"){const C=n[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return r[e];case 4:return a[e];case 3:return i[e]}else{if(s!==n1&&Z(s,e))return n[e]=1,s[e];if(r!==n1&&Z(r,e))return n[e]=2,r[e];if((l=c.propsOptions[0])&&Z(l,e))return n[e]=3,i[e];if(a!==n1&&Z(a,e))return n[e]=4,a[e];r0&&(n[e]=0)}}const f=i8[e];let m,v;if(f)return e==="$attrs"&&W1(c,"get",e),f(c);if((m=t.__cssModules)&&(m=m[e]))return m;if(a!==n1&&Z(a,e))return n[e]=4,a[e];if(v=o.config.globalProperties,Z(v,e))return v[e]},set({_:c},e,a){const{data:s,setupState:r,ctx:i}=c;return r!==n1&&Z(r,e)?(r[e]=a,!0):s!==n1&&Z(s,e)?(s[e]=a,!0):Z(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(i[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:s,appContext:r,propsOptions:i}},n){let t;return!!a[n]||c!==n1&&Z(c,n)||e!==n1&&Z(e,n)||(t=i[0])&&Z(t,n)||Z(s,n)||Z(i8,n)||Z(r.config.globalProperties,n)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:Z(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};let r0=!0;function Jz(c){const e=t7(c),a=c.proxy,s=c.ctx;r0=!1,e.beforeCreate&&Ac(e.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:t,provide:o,inject:l,created:f,beforeMount:m,mounted:v,beforeUpdate:C,updated:L,activated:N,deactivated:T,beforeDestroy:p,beforeUnmount:V,destroyed:_,unmounted:O,render:j,renderTracked:e1,renderTriggered:t1,errorCaptured:_1,serverPrefetch:H1,expose:R1,inheritAttrs:T2,components:i2,directives:b3,filters:e3}=e;if(l&&Qz(l,s,null,c.appContext.config.unwrapInjectedRef),n)for(const r1 in n){const a1=n[r1];$(a1)&&(s[r1]=a1.bind(a))}if(r){const r1=r.call(a,a);v1(r1)&&(c.data=X4(r1))}if(r0=!0,i)for(const r1 in i){const a1=i[r1],K1=$(a1)?a1.bind(a,a):$(a1.get)?a1.get.bind(a,a):e2,a3=!$(a1)&&$(a1.set)?a1.set.bind(a):e2,Z1=m1({get:K1,set:a3});Object.defineProperty(s,r1,{enumerable:!0,configurable:!0,get:()=>Z1.value,set:D1=>Z1.value=D1})}if(t)for(const r1 in t)rs(t[r1],s,a,r1);if(o){const r1=$(o)?o.call(a):o;Reflect.ownKeys(r1).forEach(a1=>{G6(a1,r1[a1])})}f&&Ac(f,c,"c");function z1(r1,a1){W(a1)?a1.forEach(K1=>r1(K1.bind(a))):a1&&r1(a1.bind(a))}if(z1(Oz,m),z1(Bz,v),z1(Uz,C),z1(qz,L),z1(Rz,N),z1(Dz,T),z1(Kz,_1),z1(jz,e1),z1(Gz,t1),z1($z,V),z1(es,O),z1(Wz,H1),W(R1))if(R1.length){const r1=c.exposed||(c.exposed={});R1.forEach(a1=>{Object.defineProperty(r1,a1,{get:()=>a[a1],set:K1=>a[a1]=K1})})}else c.exposed||(c.exposed={});j&&c.render===e2&&(c.render=j),T2!=null&&(c.inheritAttrs=T2),i2&&(c.components=i2),b3&&(c.directives=b3)}function Qz(c,e,a=e2,s=!1){W(c)&&(c=i0(c));for(const r in c){const i=c[r];let n;v1(i)?"default"in i?n=W2(i.from||r,i.default,!0):n=W2(i.from||r):n=W2(i),N1(n)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:t=>n.value=t}):e[r]=n}}function Ac(c,e,a){a2(W(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,a)}function rs(c,e,a,s){const r=s.includes(".")?Ja(a,s):()=>a[s];if(A1(c)){const i=e[c];$(i)&&d4(r,i)}else if($(c))d4(r,c.bind(a));else if(v1(c))if(W(c))c.forEach(i=>rs(i,e,a,s));else{const i=$(c.handler)?c.handler.bind(a):e[c.handler];$(i)&&d4(r,i,c)}}function t7(c){const e=c.type,{mixins:a,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,t=i.get(e);let o;return t?o=t:!r.length&&!a&&!s?o=e:(o={},r.length&&r.forEach(l=>n8(o,l,n,!0)),n8(o,e,n)),v1(e)&&i.set(e,o),o}function n8(c,e,a,s=!1){const{mixins:r,extends:i}=e;i&&n8(c,i,a,!0),r&&r.forEach(n=>n8(c,n,a,!0));for(const n in e)if(!(s&&n==="expose")){const t=cp[n]||a&&a[n];c[n]=t?t(c[n],e[n]):e[n]}return c}const cp={data:Tc,props:i3,emits:i3,methods:i3,computed:i3,beforeCreate:E1,created:E1,beforeMount:E1,mounted:E1,beforeUpdate:E1,updated:E1,beforeDestroy:E1,beforeUnmount:E1,destroyed:E1,unmounted:E1,activated:E1,deactivated:E1,errorCaptured:E1,serverPrefetch:E1,components:i3,directives:i3,watch:ap,provide:Tc,inject:ep};function Tc(c,e){return e?c?function(){return I1($(c)?c.call(this,this):c,$(e)?e.call(this,this):e)}:e:c}function ep(c,e){return i3(i0(c),i0(e))}function i0(c){if(W(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function E1(c,e){return c?[...new Set([].concat(c,e))]:e}function i3(c,e){return c?I1(I1(Object.create(null),c),e):e}function ap(c,e){if(!c)return e;if(!e)return c;const a=I1(Object.create(null),c);for(const s in e)a[s]=E1(c[s],e[s]);return a}function sp(c,e,a,s=!1){const r={},i={};a8(i,D8,1),c.propsDefaults=Object.create(null),is(c,e,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);a?c.props=s?r:zz(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function rp(c,e,a,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,t=J(r),[o]=c.propsOptions;let l=!1;if((s||n>0)&&!(n&16)){if(n&8){const f=c.vnode.dynamicProps;for(let m=0;m<f.length;m++){let v=f[m];if(P8(c.emitsOptions,v))continue;const C=e[v];if(o)if(Z(i,v))C!==i[v]&&(i[v]=C,l=!0);else{const L=z2(v);r[L]=n0(o,t,L,C,c,!1)}else C!==i[v]&&(i[v]=C,l=!0)}}}else{is(c,e,r,i)&&(l=!0);let f;for(const m in t)(!e||!Z(e,m)&&((f=Y3(m))===m||!Z(e,f)))&&(o?a&&(a[m]!==void 0||a[f]!==void 0)&&(r[m]=n0(o,t,m,void 0,c,!0)):delete r[m]);if(i!==t)for(const m in i)(!e||!Z(e,m)&&!0)&&(delete i[m],l=!0)}l&&L2(c,"set","$attrs")}function is(c,e,a,s){const[r,i]=c.propsOptions;let n=!1,t;if(e)for(let o in e){if($6(o))continue;const l=e[o];let f;r&&Z(r,f=z2(o))?!i||!i.includes(f)?a[f]=l:(t||(t={}))[f]=l:P8(c.emitsOptions,o)||(!(o in s)||l!==s[o])&&(s[o]=l,n=!0)}if(i){const o=J(a),l=t||n1;for(let f=0;f<i.length;f++){const m=i[f];a[m]=n0(r,o,m,l[m],c,!Z(l,m))}}return n}function n0(c,e,a,s,r,i){const n=c[a];if(n!=null){const t=Z(n,"default");if(t&&s===void 0){const o=n.default;if(n.type!==Function&&$(o)){const{propsDefaults:l}=r;a in l?s=l[a]:(W3(r),s=l[a]=o.call(null,e),v3())}else s=o}n[0]&&(i&&!t?s=!1:n[1]&&(s===""||s===Y3(a))&&(s=!0))}return s}function ns(c,e,a=!1){const s=e.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},t=[];let o=!1;if(!$(c)){const f=m=>{o=!0;const[v,C]=ns(m,e,!0);I1(n,v),C&&t.push(...C)};!a&&e.mixins.length&&e.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!i&&!o)return v1(c)&&s.set(c,E3),E3;if(W(i))for(let f=0;f<i.length;f++){const m=z2(i[f]);_c(m)&&(n[m]=n1)}else if(i)for(const f in i){const m=z2(f);if(_c(m)){const v=i[f],C=n[m]=W(v)||$(v)?{type:v}:v;if(C){const L=Ic(Boolean,C.type),N=Ic(String,C.type);C[0]=L>-1,C[1]=N<0||L<N,(L>-1||Z(C,"default"))&&t.push(m)}}}const l=[n,t];return v1(c)&&s.set(c,l),l}function _c(c){return c[0]!=="$"}function Ec(c){const e=c&&c.toString().match(/^\s*function (\w+)/);return e?e[1]:c===null?"null":""}function Pc(c,e){return Ec(c)===Ec(e)}function Ic(c,e){return W(e)?e.findIndex(a=>Pc(a,c)):$(e)&&Pc(e,c)?0:-1}const ts=c=>c[0]==="_"||c==="$stable",o7=c=>W(c)?c.map(l2):[l2(c)],ip=(c,e,a)=>{if(e._n)return e;const s=W6((...r)=>o7(e(...r)),a);return s._c=!1,s},os=(c,e,a)=>{const s=c._ctx;for(const r in c){if(ts(r))continue;const i=c[r];if($(i))e[r]=ip(r,i,s);else if(i!=null){const n=o7(i);e[r]=()=>n}}},ls=(c,e)=>{const a=o7(e);c.slots.default=()=>a},np=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=J(e),a8(e,"_",a)):os(e,c.slots={})}else c.slots={},e&&ls(c,e);a8(c.slots,D8,1)},tp=(c,e,a)=>{const{vnode:s,slots:r}=c;let i=!0,n=n1;if(s.shapeFlag&32){const t=e._;t?a&&t===1?i=!1:(I1(r,e),!a&&t===1&&delete r._):(i=!e.$stable,os(e,r)),n=e}else e&&(ls(c,e),n={default:1});if(i)for(const t in r)!ts(t)&&!(t in n)&&delete r[t]};function fs(){return{app:null,config:{isNativeTag:TC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let op=0;function lp(c,e){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!v1(r)&&(r=null);const i=fs(),n=new Set;let t=!1;const o=i.app={_uid:op++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:wp,get config(){return i.config},set config(l){},use(l,...f){return n.has(l)||(l&&$(l.install)?(n.add(l),l.install(o,...f)):$(l)&&(n.add(l),l(o,...f))),o},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),o},component(l,f){return f?(i.components[l]=f,o):i.components[l]},directive(l,f){return f?(i.directives[l]=f,o):i.directives[l]},mount(l,f,m){if(!t){const v=y1(s,r);return v.appContext=i,f&&e?e(v,l):c(v,l,m),t=!0,o._container=l,l.__vue_app__=o,m7(v.component)||v.component.proxy}},unmount(){t&&(c(null,o._container),delete o._container.__vue_app__)},provide(l,f){return i.provides[l]=f,o}};return o}}function t0(c,e,a,s,r=!1){if(W(c)){c.forEach((v,C)=>t0(v,e&&(W(e)?e[C]:e),a,s,r));return}if(j6(s)&&!r)return;const i=s.shapeFlag&4?m7(s.component)||s.component.proxy:s.el,n=r?null:i,{i:t,r:o}=c,l=e&&e.r,f=t.refs===n1?t.refs={}:t.refs,m=t.setupState;if(l!=null&&l!==o&&(A1(l)?(f[l]=null,Z(m,l)&&(m[l]=null)):N1(l)&&(l.value=null)),$(o))$2(o,t,12,[n,f]);else{const v=A1(o),C=N1(o);if(v||C){const L=()=>{if(c.f){const N=v?Z(m,o)?m[o]:f[o]:o.value;r?W(N)&&K0(N,i):W(N)?N.includes(i)||N.push(i):v?(f[o]=[i],Z(m,o)&&(m[o]=f[o])):(o.value=[i],c.k&&(f[c.k]=o.value))}else v?(f[o]=n,Z(m,o)&&(m[o]=n)):C&&(o.value=n,c.k&&(f[c.k]=n))};n?(L.id=-1,O1(L,a)):L()}}}const O1=Pz;function fp(c){return hp(c)}function hp(c,e){const a=UC();a.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:t,createComment:o,setText:l,setElementText:f,parentNode:m,nextSibling:v,setScopeId:C=e2,insertStaticContent:L}=c,N=(h,u,z,d=null,M=null,x=null,w=!1,b=null,S=!!u.dynamicChildren)=>{if(h===u)return;h&&!t4(h,u)&&(d=y(h),D1(h,M,x,!0),h=null),u.patchFlag===-2&&(S=!1,u.dynamicChildren=null);const{type:g,ref:D,shapeFlag:E}=u;switch(g){case l7:T(h,u,z,d);break;case A4:p(h,u,z,d);break;case K6:h==null&&V(u,z,d,w);break;case H2:i2(h,u,z,d,M,x,w,b,S);break;default:E&1?j(h,u,z,d,M,x,w,b,S):E&6?b3(h,u,z,d,M,x,w,b,S):(E&64||E&128)&&g.process(h,u,z,d,M,x,w,b,S,Y)}D!=null&&M&&t0(D,h&&h.ref,x,u||h,!u)},T=(h,u,z,d)=>{if(h==null)s(u.el=t(u.children),z,d);else{const M=u.el=h.el;u.children!==h.children&&l(M,u.children)}},p=(h,u,z,d)=>{h==null?s(u.el=o(u.children||""),z,d):u.el=h.el},V=(h,u,z,d)=>{[h.el,h.anchor]=L(h.children,u,z,d,h.el,h.anchor)},_=({el:h,anchor:u},z,d)=>{let M;for(;h&&h!==u;)M=v(h),s(h,z,d),h=M;s(u,z,d)},O=({el:h,anchor:u})=>{let z;for(;h&&h!==u;)z=v(h),r(h),h=z;r(u)},j=(h,u,z,d,M,x,w,b,S)=>{w=w||u.type==="svg",h==null?e1(u,z,d,M,x,w,b,S):H1(h,u,M,x,w,b,S)},e1=(h,u,z,d,M,x,w,b)=>{let S,g;const{type:D,props:E,shapeFlag:F,transition:q,dirs:K}=h;if(S=h.el=n(h.type,x,E&&E.is,E),F&8?f(S,h.children):F&16&&_1(h.children,S,null,d,M,x&&D!=="foreignObject",w,b),K&&s3(h,null,d,"created"),E){for(const s1 in E)s1!=="value"&&!$6(s1)&&i(S,s1,null,E[s1],x,h.children,d,M,k);"value"in E&&i(S,"value",null,E.value),(g=E.onVnodeBeforeMount)&&t2(g,d,h)}t1(S,h,h.scopeId,w,d),K&&s3(h,null,d,"beforeMount");const i1=(!M||M&&!M.pendingBranch)&&q&&!q.persisted;i1&&q.beforeEnter(S),s(S,u,z),((g=E&&E.onVnodeMounted)||i1||K)&&O1(()=>{g&&t2(g,d,h),i1&&q.enter(S),K&&s3(h,null,d,"mounted")},M)},t1=(h,u,z,d,M)=>{if(z&&C(h,z),d)for(let x=0;x<d.length;x++)C(h,d[x]);if(M){let x=M.subTree;if(u===x){const w=M.vnode;t1(h,w,w.scopeId,w.slotScopeIds,M.parent)}}},_1=(h,u,z,d,M,x,w,b,S=0)=>{for(let g=S;g<h.length;g++){const D=h[g]=b?R2(h[g]):l2(h[g]);N(null,D,u,z,d,M,x,w,b)}},H1=(h,u,z,d,M,x,w)=>{const b=u.el=h.el;let{patchFlag:S,dynamicChildren:g,dirs:D}=u;S|=h.patchFlag&16;const E=h.props||n1,F=u.props||n1;let q;z&&r3(z,!1),(q=F.onVnodeBeforeUpdate)&&t2(q,z,u,h),D&&s3(u,h,z,"beforeUpdate"),z&&r3(z,!0);const K=M&&u.type!=="foreignObject";if(g?R1(h.dynamicChildren,g,b,z,d,K,x):w||a1(h,u,b,null,z,d,K,x,!1),S>0){if(S&16)T2(b,u,E,F,z,d,M);else if(S&2&&E.class!==F.class&&i(b,"class",null,F.class,M),S&4&&i(b,"style",E.style,F.style,M),S&8){const i1=u.dynamicProps;for(let s1=0;s1<i1.length;s1++){const p1=i1[s1],X1=E[p1],S3=F[p1];(S3!==X1||p1==="value")&&i(b,p1,X1,S3,M,h.children,z,d,k)}}S&1&&h.children!==u.children&&f(b,u.children)}else!w&&g==null&&T2(b,u,E,F,z,d,M);((q=F.onVnodeUpdated)||D)&&O1(()=>{q&&t2(q,z,u,h),D&&s3(u,h,z,"updated")},d)},R1=(h,u,z,d,M,x,w)=>{for(let b=0;b<u.length;b++){const S=h[b],g=u[b],D=S.el&&(S.type===H2||!t4(S,g)||S.shapeFlag&70)?m(S.el):z;N(S,g,D,null,d,M,x,w,!0)}},T2=(h,u,z,d,M,x,w)=>{if(z!==d){if(z!==n1)for(const b in z)!$6(b)&&!(b in d)&&i(h,b,z[b],null,w,u.children,M,x,k);for(const b in d){if($6(b))continue;const S=d[b],g=z[b];S!==g&&b!=="value"&&i(h,b,g,S,w,u.children,M,x,k)}"value"in d&&i(h,"value",z.value,d.value)}},i2=(h,u,z,d,M,x,w,b,S)=>{const g=u.el=h?h.el:t(""),D=u.anchor=h?h.anchor:t("");let{patchFlag:E,dynamicChildren:F,slotScopeIds:q}=u;q&&(b=b?b.concat(q):q),h==null?(s(g,z,d),s(D,z,d),_1(u.children,z,D,M,x,w,b,S)):E>0&&E&64&&F&&h.dynamicChildren?(R1(h.dynamicChildren,F,z,M,x,w,b),(u.key!=null||M&&u===M.subTree)&&hs(h,u,!0)):a1(h,u,z,D,M,x,w,b,S)},b3=(h,u,z,d,M,x,w,b,S)=>{u.slotScopeIds=b,h==null?u.shapeFlag&512?M.ctx.activate(u,z,d,w,S):e3(u,z,d,M,x,w,S):i4(h,u,S)},e3=(h,u,z,d,M,x,w)=>{const b=h.component=gp(h,d,M);if(Qa(h)&&(b.ctx.renderer=Y),Lp(b),b.asyncDep){if(M&&M.registerDep(b,z1),!h.el){const S=b.subTree=y1(A4);p(null,S,u,z)}return}z1(b,h,u,z,M,x,w)},i4=(h,u,z)=>{const d=u.component=h.component;if(Tz(h,u,z))if(d.asyncDep&&!d.asyncResolved){r1(d,u,z);return}else d.next=u,bz(d.update),d.update();else u.el=h.el,d.vnode=u},z1=(h,u,z,d,M,x,w)=>{const b=()=>{if(h.isMounted){let{next:D,bu:E,u:F,parent:q,vnode:K}=h,i1=D,s1;r3(h,!1),D?(D.el=K.el,r1(h,D,w)):D=K,E&&S5(E),(s1=D.props&&D.props.onVnodeBeforeUpdate)&&t2(s1,q,D,K),r3(h,!0);const p1=N5(h),X1=h.subTree;h.subTree=p1,N(X1,p1,m(X1.el),y(X1),h,M,x),D.el=p1.el,i1===null&&_z(h,p1.el),F&&O1(F,M),(s1=D.props&&D.props.onVnodeUpdated)&&O1(()=>t2(s1,q,D,K),M)}else{let D;const{el:E,props:F}=u,{bm:q,m:K,parent:i1}=h,s1=j6(u);if(r3(h,!1),q&&S5(q),!s1&&(D=F&&F.onVnodeBeforeMount)&&t2(D,i1,u),r3(h,!0),E&&G){const p1=()=>{h.subTree=N5(h),G(E,h.subTree,h,M,null)};s1?u.type.__asyncLoader().then(()=>!h.isUnmounted&&p1()):p1()}else{const p1=h.subTree=N5(h);N(null,p1,z,d,h,M,x),u.el=p1.el}if(K&&O1(K,M),!s1&&(D=F&&F.onVnodeMounted)){const p1=u;O1(()=>t2(D,i1,p1),M)}(u.shapeFlag&256||i1&&j6(i1.vnode)&&i1.vnode.shapeFlag&256)&&h.a&&O1(h.a,M),h.isMounted=!0,u=z=d=null}},S=h.effect=new J0(b,()=>n7(g),h.scope),g=h.update=()=>S.run();g.id=h.uid,r3(h,!0),g()},r1=(h,u,z)=>{u.component=h;const d=h.vnode.props;h.vnode=u,h.next=null,rp(h,u.props,d,z),tp(h,u.children,z),J3(),Nc(),Q3()},a1=(h,u,z,d,M,x,w,b,S=!1)=>{const g=h&&h.children,D=h?h.shapeFlag:0,E=u.children,{patchFlag:F,shapeFlag:q}=u;if(F>0){if(F&128){a3(g,E,z,d,M,x,w,b,S);return}else if(F&256){K1(g,E,z,d,M,x,w,b,S);return}}q&8?(D&16&&k(g,M,x),E!==g&&f(z,E)):D&16?q&16?a3(g,E,z,d,M,x,w,b,S):k(g,M,x,!0):(D&8&&f(z,""),q&16&&_1(E,z,d,M,x,w,b,S))},K1=(h,u,z,d,M,x,w,b,S)=>{h=h||E3,u=u||E3;const g=h.length,D=u.length,E=Math.min(g,D);let F;for(F=0;F<E;F++){const q=u[F]=S?R2(u[F]):l2(u[F]);N(h[F],q,z,null,M,x,w,b,S)}g>D?k(h,M,x,!0,!1,E):_1(u,z,d,M,x,w,b,S,E)},a3=(h,u,z,d,M,x,w,b,S)=>{let g=0;const D=u.length;let E=h.length-1,F=D-1;for(;g<=E&&g<=F;){const q=h[g],K=u[g]=S?R2(u[g]):l2(u[g]);if(t4(q,K))N(q,K,z,null,M,x,w,b,S);else break;g++}for(;g<=E&&g<=F;){const q=h[E],K=u[F]=S?R2(u[F]):l2(u[F]);if(t4(q,K))N(q,K,z,null,M,x,w,b,S);else break;E--,F--}if(g>E){if(g<=F){const q=F+1,K=q<D?u[q].el:d;for(;g<=F;)N(null,u[g]=S?R2(u[g]):l2(u[g]),z,K,M,x,w,b,S),g++}}else if(g>F)for(;g<=E;)D1(h[g],M,x,!0),g++;else{const q=g,K=g,i1=new Map;for(g=K;g<=F;g++){const B1=u[g]=S?R2(u[g]):l2(u[g]);B1.key!=null&&i1.set(B1.key,g)}let s1,p1=0;const X1=F-K+1;let S3=!1,zc=0;const n4=new Array(X1);for(g=0;g<X1;g++)n4[g]=0;for(g=q;g<=E;g++){const B1=h[g];if(p1>=X1){D1(B1,M,x,!0);continue}let n2;if(B1.key!=null)n2=i1.get(B1.key);else for(s1=K;s1<=F;s1++)if(n4[s1-K]===0&&t4(B1,u[s1])){n2=s1;break}n2===void 0?D1(B1,M,x,!0):(n4[n2-K]=g+1,n2>=zc?zc=n2:S3=!0,N(B1,u[n2],z,null,M,x,w,b,S),p1++)}const pc=S3?mp(n4):E3;for(s1=pc.length-1,g=X1-1;g>=0;g--){const B1=K+g,n2=u[B1],dc=B1+1<D?u[B1+1].el:d;n4[g]===0?N(null,n2,z,dc,M,x,w,b,S):S3&&(s1<0||g!==pc[s1]?Z1(n2,z,dc,2):s1--)}}},Z1=(h,u,z,d,M=null)=>{const{el:x,type:w,transition:b,children:S,shapeFlag:g}=h;if(g&6){Z1(h.component.subTree,u,z,d);return}if(g&128){h.suspense.move(u,z,d);return}if(g&64){w.move(h,u,z,Y);return}if(w===H2){s(x,u,z);for(let E=0;E<S.length;E++)Z1(S[E],u,z,d);s(h.anchor,u,z);return}if(w===K6){_(h,u,z);return}if(d!==2&&g&1&&b)if(d===0)b.beforeEnter(x),s(x,u,z),O1(()=>b.enter(x),M);else{const{leave:E,delayLeave:F,afterLeave:q}=b,K=()=>s(x,u,z),i1=()=>{E(x,()=>{K(),q&&q()})};F?F(x,K,i1):i1()}else s(x,u,z)},D1=(h,u,z,d=!1,M=!1)=>{const{type:x,props:w,ref:b,children:S,dynamicChildren:g,shapeFlag:D,patchFlag:E,dirs:F}=h;if(b!=null&&t0(b,null,z,h,!0),D&256){u.ctx.deactivate(h);return}const q=D&1&&F,K=!j6(h);let i1;if(K&&(i1=w&&w.onVnodeBeforeUnmount)&&t2(i1,u,h),D&6)H(h.component,z,d);else{if(D&128){h.suspense.unmount(z,d);return}q&&s3(h,null,u,"beforeUnmount"),D&64?h.type.remove(h,u,z,M,Y,d):g&&(x!==H2||E>0&&E&64)?k(g,u,z,!1,!0):(x===H2&&E&384||!M&&D&16)&&k(S,u,z),d&&x3(h)}(K&&(i1=w&&w.onVnodeUnmounted)||q)&&O1(()=>{i1&&t2(i1,u,h),q&&s3(h,null,u,"unmounted")},z)},x3=h=>{const{type:u,el:z,anchor:d,transition:M}=h;if(u===H2){x6(z,d);return}if(u===K6){O(h);return}const x=()=>{r(z),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(h.shapeFlag&1&&M&&!M.persisted){const{leave:w,delayLeave:b}=M,S=()=>w(z,x);b?b(h.el,x,S):S()}else x()},x6=(h,u)=>{let z;for(;h!==u;)z=v(h),r(h),h=z;r(u)},H=(h,u,z)=>{const{bum:d,scope:M,update:x,subTree:w,um:b}=h;d&&S5(d),M.stop(),x&&(x.active=!1,D1(w,h,u,z)),b&&O1(b,u),O1(()=>{h.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},k=(h,u,z,d=!1,M=!1,x=0)=>{for(let w=x;w<h.length;w++)D1(h[w],u,z,d,M)},y=h=>h.shapeFlag&6?y(h.component.subTree):h.shapeFlag&128?h.suspense.next():v(h.anchor||h.el),R=(h,u,z)=>{h==null?u._vnode&&D1(u._vnode,null,null,!0):N(u._vnode||null,h,u,null,null,null,z),Nc(),Ka(),u._vnode=h},Y={p:N,um:D1,m:Z1,r:x3,mt:e3,mc:_1,pc:a1,pbc:R1,n:y,o:c};let h1,G;return e&&([h1,G]=e(Y)),{render:R,hydrate:h1,createApp:lp(R,h1)}}function r3({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function hs(c,e,a=!1){const s=c.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const n=s[i];let t=r[i];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=r[i]=R2(r[i]),t.el=n.el),a||hs(n,t))}}function mp(c){const e=c.slice(),a=[0];let s,r,i,n,t;const o=c.length;for(s=0;s<o;s++){const l=c[s];if(l!==0){if(r=a[a.length-1],c[r]<l){e[s]=r,a.push(s);continue}for(i=0,n=a.length-1;i<n;)t=i+n>>1,c[a[t]]<l?i=t+1:n=t;l<c[a[i]]&&(i>0&&(e[s]=a[i-1]),a[i]=s)}}for(i=a.length,n=a[i-1];i-- >0;)a[i]=n,n=e[n];return a}const up=c=>c.__isTeleport,H2=Symbol(void 0),l7=Symbol(void 0),A4=Symbol(void 0),K6=Symbol(void 0),H4=[];let Q1=null;function f7(c=!1){H4.push(Q1=c?null:[])}function vp(){H4.pop(),Q1=H4[H4.length-1]||null}let T4=1;function Rc(c){T4+=c}function ms(c){return c.dynamicChildren=T4>0?Q1||E3:null,vp(),T4>0&&Q1&&Q1.push(c),c}function us(c,e,a,s,r,i){return ms(d1(c,e,a,s,r,i,!0))}function Cp(c,e,a,s,r){return ms(y1(c,e,a,s,r,!0))}function o0(c){return c?c.__v_isVNode===!0:!1}function t4(c,e){return c.type===e.type&&c.key===e.key}const D8="__vInternal",vs=({key:c})=>c!=null?c:null,Z6=({ref:c,ref_key:e,ref_for:a})=>c!=null?A1(c)||N1(c)||$(c)?{i:m2,r:c,k:e,f:!!a}:c:null;function d1(c,e=null,a=null,s=0,r=null,i=c===H2?0:1,n=!1,t=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&vs(e),ref:e&&Z6(e),scopeId:I8,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return t?(h7(o,a),i&128&&c.normalize(o)):a&&(o.shapeFlag|=A1(a)?8:16),T4>0&&!n&&Q1&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&Q1.push(o),o}const y1=zp;function zp(c,e=null,a=null,s=0,r=null,i=!1){if((!c||c===Zz)&&(c=A4),o0(c)){const t=$3(c,e,!0);return a&&h7(t,a),T4>0&&!i&&Q1&&(t.shapeFlag&6?Q1[Q1.indexOf(c)]=t:Q1.push(t)),t.patchFlag|=-2,t}if(yp(c)&&(c=c.__vccOpts),e){e=pp(e);let{class:t,style:o}=e;t&&!A1(t)&&(e.class=y8(t)),v1(o)&&(Da(o)&&!W(o)&&(o=I1({},o)),e.style=G0(o))}const n=A1(c)?1:Ez(c)?128:up(c)?64:v1(c)?4:$(c)?2:0;return d1(c,e,a,s,r,n,i,!0)}function pp(c){return c?Da(c)||D8 in c?I1({},c):c:null}function $3(c,e,a=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,t=e?Hp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&vs(t),ref:e&&e.ref?a&&r?W(r)?r.concat(Z6(e)):[r,Z6(e)]:Z6(e):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==H2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&$3(c.ssContent),ssFallback:c.ssFallback&&$3(c.ssFallback),el:c.el,anchor:c.anchor}}function D3(c=" ",e=0){return y1(l7,null,c,e)}function dp(c,e){const a=y1(K6,null,c);return a.staticCount=e,a}function l2(c){return c==null||typeof c=="boolean"?y1(A4):W(c)?y1(H2,null,c.slice()):typeof c=="object"?R2(c):y1(l7,null,String(c))}function R2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:$3(c)}function h7(c,e){let a=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(W(e))a=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),h7(c,r()),r._c&&(r._d=!0));return}else{a=32;const r=e._;!r&&!(D8 in e)?e._ctx=m2:r===3&&m2&&(m2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:m2},a=32):(e=String(e),s&64?(a=16,e=[D3(e)]):a=8);c.children=e,c.shapeFlag|=a}function Hp(...c){const e={};for(let a=0;a<c.length;a++){const s=c[a];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=y8([e.class,s.class]));else if(r==="style")e.style=G0([e.style,s.style]);else if(w8(r)){const i=e[r],n=s[r];n&&i!==n&&!(W(i)&&i.includes(n))&&(e[r]=i?[].concat(i,n):n)}else r!==""&&(e[r]=s[r])}return e}function t2(c,e,a,s=null){a2(c,e,7,[a,s])}const Mp=fs();let Vp=0;function gp(c,e,a){const s=c.type,r=(e?e.appContext:c.appContext)||Mp,i={uid:Vp++,vnode:c,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ns(s,r),emitsOptions:Xa(s,r),emit:null,emitted:null,propsDefaults:n1,inheritAttrs:s.inheritAttrs,ctx:n1,data:n1,props:n1,attrs:n1,slots:n1,refs:n1,setupState:n1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nz.bind(null,i),c.ce&&c.ce(i),i}let g1=null;const W3=c=>{g1=c,c.scope.on()},v3=()=>{g1&&g1.scope.off(),g1=null};function Cs(c){return c.vnode.shapeFlag&4}let _4=!1;function Lp(c,e=!1){_4=e;const{props:a,children:s}=c.vnode,r=Cs(c);sp(c,a,r,e),np(c,s);const i=r?bp(c,e):void 0;return _4=!1,i}function bp(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=s7(new Proxy(c.ctx,Yz));const{setup:s}=a;if(s){const r=c.setupContext=s.length>1?Sp(c):null;W3(c),J3();const i=$2(s,c,0,[c.props,r]);if(Q3(),v3(),xa(i)){if(i.then(v3,v3),e)return i.then(n=>{Dc(c,n,e)}).catch(n=>{E8(n,c,0)});c.asyncDep=i}else Dc(c,i,e)}else zs(c,e)}function Dc(c,e,a){$(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:v1(e)&&(c.setupState=qa(e)),zs(c,a)}let Fc;function zs(c,e,a){const s=c.type;if(!c.render){if(!e&&Fc&&!s.render){const r=s.template||t7(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:t,compilerOptions:o}=s,l=I1(I1({isCustomElement:i,delimiters:t},n),o);s.render=Fc(r,l)}}c.render=s.render||e2}W3(c),J3(),Jz(c),Q3(),v3()}function xp(c){return new Proxy(c.attrs,{get(e,a){return W1(c,"get","$attrs"),e[a]}})}function Sp(c){const e=s=>{c.exposed=s||{}};let a;return{get attrs(){return a||(a=xp(c))},slots:c.slots,emit:c.emit,expose:e}}function m7(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(qa(s7(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in i8)return i8[a](c)}}))}function Np(c,e=!0){return $(c)?c.displayName||c.name:c.name||e&&c.__name}function yp(c){return $(c)&&"__vccOpts"in c}const m1=(c,e)=>Vz(c,e,_4);function F8(c,e,a){const s=arguments.length;return s===2?v1(e)&&!W(e)?o0(e)?y1(c,null,[e]):y1(c,e):y1(c,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&o0(a)&&(a=[a]),y1(c,e,a))}const wp="3.2.41",kp="http://www.w3.org/2000/svg",o3=typeof document<"u"?document:null,Oc=o3&&o3.createElement("template"),Ap={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,s)=>{const r=e?o3.createElementNS(kp,c):o3.createElement(c,a?{is:a}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>o3.createTextNode(c),createComment:c=>o3.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>o3.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,s,r,i){const n=a?a.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),a),!(r===i||!(r=r.nextSibling)););else{Oc.innerHTML=s?`<svg>${c}</svg>`:c;const t=Oc.content;if(s){const o=t.firstChild;for(;o.firstChild;)t.appendChild(o.firstChild);t.removeChild(o)}e.insertBefore(t,a)}return[n?n.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}};function Tp(c,e,a){const s=c._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}function _p(c,e,a){const s=c.style,r=A1(a);if(a&&!r){for(const i in a)l0(s,i,a[i]);if(e&&!A1(e))for(const i in e)a[i]==null&&l0(s,i,"")}else{const i=s.display;r?e!==a&&(s.cssText=a):e&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const Bc=/\s*!important$/;function l0(c,e,a){if(W(a))a.forEach(s=>l0(c,e,s));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const s=Ep(c,e);Bc.test(a)?c.setProperty(Y3(s),a.replace(Bc,""),"important"):c[s]=a}}const Uc=["Webkit","Moz","ms"],y5={};function Ep(c,e){const a=y5[e];if(a)return a;let s=z2(e);if(s!=="filter"&&s in c)return y5[e]=s;s=T8(s);for(let r=0;r<Uc.length;r++){const i=Uc[r]+s;if(i in c)return y5[e]=i}return e}const qc="http://www.w3.org/1999/xlink";function Pp(c,e,a,s,r){if(s&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(qc,e.slice(6,e.length)):c.setAttributeNS(qc,e,a);else{const i=yC(e);a==null||i&&!ba(a)?c.removeAttribute(e):c.setAttribute(e,i?"":a)}}function Ip(c,e,a,s,r,i,n){if(e==="innerHTML"||e==="textContent"){s&&n(s,r,i),c[e]=a==null?"":a;return}if(e==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=a;const o=a==null?"":a;(c.value!==o||c.tagName==="OPTION")&&(c.value=o),a==null&&c.removeAttribute(e);return}let t=!1;if(a===""||a==null){const o=typeof c[e];o==="boolean"?a=ba(a):a==null&&o==="string"?(a="",t=!0):o==="number"&&(a=0,t=!0)}try{c[e]=a}catch{}t&&c.removeAttribute(e)}function Rp(c,e,a,s){c.addEventListener(e,a,s)}function Dp(c,e,a,s){c.removeEventListener(e,a,s)}function Fp(c,e,a,s,r=null){const i=c._vei||(c._vei={}),n=i[e];if(s&&n)n.value=s;else{const[t,o]=Op(e);if(s){const l=i[e]=qp(s,r);Rp(c,t,l,o)}else n&&(Dp(c,t,n,o),i[e]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function Op(c){let e;if($c.test(c)){e={};let s;for(;s=c.match($c);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Y3(c.slice(2)),e]}let w5=0;const Bp=Promise.resolve(),Up=()=>w5||(Bp.then(()=>w5=0),w5=Date.now());function qp(c,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;a2($p(s,a.value),e,5,[s])};return a.value=c,a.attached=Up(),a}function $p(c,e){if(W(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Wc=/^on[a-z]/,Wp=(c,e,a,s,r=!1,i,n,t,o)=>{e==="class"?Tp(c,s,r):e==="style"?_p(c,a,s):w8(e)?j0(e)||Fp(c,e,a,s,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gp(c,e,s,r))?Ip(c,e,s,i,n,t,o):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),Pp(c,e,s,r))};function Gp(c,e,a,s){return s?!!(e==="innerHTML"||e==="textContent"||e in c&&Wc.test(e)&&$(a)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA"||Wc.test(e)&&A1(a)?!1:e in c}const jp=["ctrl","shift","alt","meta"],Kp={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>jp.some(a=>c[`${a}Key`]&&!e.includes(a))},Zp=(c,e)=>(a,...s)=>{for(let r=0;r<e.length;r++){const i=Kp[e[r]];if(i&&i(a,e))return}return c(a,...s)},Xp=I1({patchProp:Wp},Ap);let Gc;function Yp(){return Gc||(Gc=fp(Xp))}const Jp=(...c)=>{const e=Yp().createApp(...c),{mount:a}=e;return e.mount=s=>{const r=Qp(s);if(!r)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=a(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e};function Qp(c){return A1(c)?document.querySelector(c):c}const u7=(c,e)=>{const a=c.__vccOpts||c;for(const[s,r]of e)a[s]=r;return a},cd={data(){return{showMenu:!1}}},ed={class:"bg-green-700 shadow-2xl"},ad={class:"py-2"},sd={class:"flex justify-start pl-4 ty-4"},rd=d1("button",{type:"button",class:"pr-3"},[d1("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[d1("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),id=[rd],nd={class:"px-4 flex justify-end"};function td(c,e,a,s,r,i){const n=ss("router-link");return f7(),us("div",null,[d1("div",ed,[d1("nav",ad,[d1("div",sd,[d1("div",{onClick:e[0]||(e[0]=t=>r.showMenu=!r.showMenu),class:"flex md:hidden"},id)]),d1("div",nd,[d1("ul",{class:y8([r.showMenu?"flex":"hidden","flex-col space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 justify-end"])},[d1("li",null,[y1(n,{to:"/home",class:"text-2xl font-serif text-white"},{default:W6(()=>[D3("HOME")]),_:1})]),d1("li",null,[y1(n,{to:"/profile",class:"text-2xl font-serif text-white"},{default:W6(()=>[D3("PROFILE")]),_:1})]),d1("li",null,[y1(n,{to:"/blog",class:"text-2xl font-serif text-white"},{default:W6(()=>[D3("BLOG")]),_:1})])],2)])])])])}const ps=u7(cd,[["render",td]]),od=Object.freeze(Object.defineProperty({__proto__:null,default:ps},Symbol.toStringTag,{value:"Module"}));const ld={name:"App",components:{Navbar:ps}};function fd(c,e,a,s,r,i){const n=ss("router-view");return f7(),Cp(n)}const hd=u7(ld,[["render",fd]]),md="modulepreload",ud=function(c){return"/Health-U/"+c},jc={},o4=function(e,a,s){if(!a||a.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=ud(i),i in jc)return;jc[i]=!0;const n=i.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const m=r[f];if(m.href===i&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":md,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((f,m)=>{l.addEventListener("load",f),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const y3=typeof window<"u";function vd(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Q=Object.assign;function k5(c,e){const a={};for(const s in e){const r=e[s];a[s]=s2(r)?r.map(c):c(r)}return a}const M4=()=>{},s2=Array.isArray,Cd=/\/$/,zd=c=>c.replace(Cd,"");function A5(c,e,a="/"){let s,r={},i="",n="";const t=e.indexOf("#");let o=e.indexOf("?");return t<o&&t>=0&&(o=-1),o>-1&&(s=e.slice(0,o),i=e.slice(o+1,t>-1?t:e.length),r=c(i)),t>-1&&(s=s||e.slice(0,t),n=e.slice(t,e.length)),s=Md(s!=null?s:e,a),{fullPath:s+(i&&"?")+i+n,path:s,query:r,hash:n}}function pd(c,e){const a=e.query?c(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function Kc(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function dd(c,e,a){const s=e.matched.length-1,r=a.matched.length-1;return s>-1&&s===r&&G3(e.matched[s],a.matched[r])&&ds(e.params,a.params)&&c(e.query)===c(a.query)&&e.hash===a.hash}function G3(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function ds(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const a in c)if(!Hd(c[a],e[a]))return!1;return!0}function Hd(c,e){return s2(c)?Zc(c,e):s2(e)?Zc(e,c):c===e}function Zc(c,e){return s2(e)?c.length===e.length&&c.every((a,s)=>a===e[s]):c.length===1&&c[0]===e}function Md(c,e){if(c.startsWith("/"))return c;if(!c)return e;const a=e.split("/"),s=c.split("/");let r=a.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")r>1&&r--;else break;return a.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var E4;(function(c){c.pop="pop",c.push="push"})(E4||(E4={}));var V4;(function(c){c.back="back",c.forward="forward",c.unknown=""})(V4||(V4={}));function Vd(c){if(!c)if(y3){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),zd(c)}const gd=/^[^#]+#/;function Ld(c,e){return c.replace(gd,"#")+e}function bd(c,e){const a=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:e.behavior,left:s.left-a.left-(e.left||0),top:s.top-a.top-(e.top||0)}}const O8=()=>({left:window.pageXOffset,top:window.pageYOffset});function xd(c){let e;if("el"in c){const a=c.el,s=typeof a=="string"&&a.startsWith("#"),r=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r)return;e=bd(r,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xc(c,e){return(history.state?history.state.position-e:-1)+c}const f0=new Map;function Sd(c,e){f0.set(c,e)}function Nd(c){const e=f0.get(c);return f0.delete(c),e}let yd=()=>location.protocol+"//"+location.host;function Hs(c,e){const{pathname:a,search:s,hash:r}=e,i=c.indexOf("#");if(i>-1){let t=r.includes(c.slice(i))?c.slice(i).length:1,o=r.slice(t);return o[0]!=="/"&&(o="/"+o),Kc(o,"")}return Kc(a,c)+s+r}function wd(c,e,a,s){let r=[],i=[],n=null;const t=({state:v})=>{const C=Hs(c,location),L=a.value,N=e.value;let T=0;if(v){if(a.value=C,e.value=v,n&&n===L){n=null;return}T=N?v.position-N.position:0}else s(C);r.forEach(p=>{p(a.value,L,{delta:T,type:E4.pop,direction:T?T>0?V4.forward:V4.back:V4.unknown})})};function o(){n=a.value}function l(v){r.push(v);const C=()=>{const L=r.indexOf(v);L>-1&&r.splice(L,1)};return i.push(C),C}function f(){const{history:v}=window;!v.state||v.replaceState(Q({},v.state,{scroll:O8()}),"")}function m(){for(const v of i)v();i=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:l,destroy:m}}function Yc(c,e,a,s=!1,r=!1){return{back:c,current:e,forward:a,replaced:s,position:window.history.length,scroll:r?O8():null}}function kd(c){const{history:e,location:a}=window,s={value:Hs(c,a)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(o,l,f){const m=c.indexOf("#"),v=m>-1?(a.host&&document.querySelector("base")?c:c.slice(m))+o:yd()+c+o;try{e[f?"replaceState":"pushState"](l,"",v),r.value=l}catch(C){console.error(C),a[f?"replace":"assign"](v)}}function n(o,l){const f=Q({},e.state,Yc(r.value.back,o,r.value.forward,!0),l,{position:r.value.position});i(o,f,!0),s.value=o}function t(o,l){const f=Q({},r.value,e.state,{forward:o,scroll:O8()});i(f.current,f,!0);const m=Q({},Yc(s.value,o,null),{position:f.position+1},l);i(o,m,!1),s.value=o}return{location:s,state:r,push:t,replace:n}}function Ad(c){c=Vd(c);const e=kd(c),a=wd(c,e.state,e.location,e.replace);function s(i,n=!0){n||a.pauseListeners(),history.go(i)}const r=Q({location:"",base:c,go:s,createHref:Ld.bind(null,c)},e,a);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Td(c){return typeof c=="string"||c&&typeof c=="object"}function Ms(c){return typeof c=="string"||typeof c=="symbol"}const E2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vs=Symbol("");var Jc;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(Jc||(Jc={}));function j3(c,e){return Q(new Error,{type:c,[Vs]:!0},e)}function p2(c,e){return c instanceof Error&&Vs in c&&(e==null||!!(c.type&e))}const Qc="[^/]+?",_d={sensitive:!1,strict:!1,start:!0,end:!0},Ed=/[.+*?^${}()[\]/\\]/g;function Pd(c,e){const a=Q({},_d,e),s=[];let r=a.start?"^":"";const i=[];for(const l of c){const f=l.length?[]:[90];a.strict&&!l.length&&(r+="/");for(let m=0;m<l.length;m++){const v=l[m];let C=40+(a.sensitive?.25:0);if(v.type===0)m||(r+="/"),r+=v.value.replace(Ed,"\\$&"),C+=40;else if(v.type===1){const{value:L,repeatable:N,optional:T,regexp:p}=v;i.push({name:L,repeatable:N,optional:T});const V=p||Qc;if(V!==Qc){C+=10;try{new RegExp(`(${V})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${L}" (${V}): `+O.message)}}let _=N?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;m||(_=T&&l.length<2?`(?:/${_})`:"/"+_),T&&(_+="?"),r+=_,C+=20,T&&(C+=-8),N&&(C+=-20),V===".*"&&(C+=-50)}f.push(C)}s.push(f)}if(a.strict&&a.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}a.strict||(r+="/?"),a.end?r+="$":a.strict&&(r+="(?:/|$)");const n=new RegExp(r,a.sensitive?"":"i");function t(l){const f=l.match(n),m={};if(!f)return null;for(let v=1;v<f.length;v++){const C=f[v]||"",L=i[v-1];m[L.name]=C&&L.repeatable?C.split("/"):C}return m}function o(l){let f="",m=!1;for(const v of c){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const C of v)if(C.type===0)f+=C.value;else if(C.type===1){const{value:L,repeatable:N,optional:T}=C,p=L in l?l[L]:"";if(s2(p)&&!N)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const V=s2(p)?p.join("/"):p;if(!V)if(T)v.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${L}"`);f+=V}}return f||"/"}return{re:n,score:s,keys:i,parse:t,stringify:o}}function Id(c,e){let a=0;for(;a<c.length&&a<e.length;){const s=e[a]-c[a];if(s)return s;a++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rd(c,e){let a=0;const s=c.score,r=e.score;for(;a<s.length&&a<r.length;){const i=Id(s[a],r[a]);if(i)return i;a++}if(Math.abs(r.length-s.length)===1){if(ce(s))return 1;if(ce(r))return-1}return r.length-s.length}function ce(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const Dd={type:0,value:""},Fd=/[a-zA-Z0-9_]/;function Od(c){if(!c)return[[]];if(c==="/")return[[Dd]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(C){throw new Error(`ERR (${a})/"${l}": ${C}`)}let a=0,s=a;const r=[];let i;function n(){i&&r.push(i),i=[]}let t=0,o,l="",f="";function m(){!l||(a===0?i.push({type:0,value:l}):a===1||a===2||a===3?(i.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function v(){l+=o}for(;t<c.length;){if(o=c[t++],o==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:o==="/"?(l&&m(),n()):o===":"?(m(),a=1):v();break;case 4:v(),a=s;break;case 1:o==="("?a=2:Fd.test(o)?v():(m(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&t--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:m(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&t--,f="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${l}"`),m(),n(),r}function Bd(c,e,a){const s=Pd(Od(c.path),a),r=Q(s,{record:c,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ud(c,e){const a=[],s=new Map;e=se({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,m,v){const C=!v,L=qd(f);L.aliasOf=v&&v.record;const N=se(e,f),T=[L];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of _)T.push(Q({},L,{components:v?v.record.components:L.components,path:O,aliasOf:v?v.record:L}))}let p,V;for(const _ of T){const{path:O}=_;if(m&&O[0]!=="/"){const j=m.record.path,e1=j[j.length-1]==="/"?"":"/";_.path=m.record.path+(O&&e1+O)}if(p=Bd(_,m,N),v?v.alias.push(p):(V=V||p,V!==p&&V.alias.push(p),C&&f.name&&!ae(p)&&n(f.name)),L.children){const j=L.children;for(let e1=0;e1<j.length;e1++)i(j[e1],p,v&&v.children[e1])}v=v||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&o(p)}return V?()=>{n(V)}:M4}function n(f){if(Ms(f)){const m=s.get(f);m&&(s.delete(f),a.splice(a.indexOf(m),1),m.children.forEach(n),m.alias.forEach(n))}else{const m=a.indexOf(f);m>-1&&(a.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(n),f.alias.forEach(n))}}function t(){return a}function o(f){let m=0;for(;m<a.length&&Rd(f,a[m])>=0&&(f.record.path!==a[m].record.path||!gs(f,a[m]));)m++;a.splice(m,0,f),f.record.name&&!ae(f)&&s.set(f.record.name,f)}function l(f,m){let v,C={},L,N;if("name"in f&&f.name){if(v=s.get(f.name),!v)throw j3(1,{location:f});N=v.record.name,C=Q(ee(m.params,v.keys.filter(V=>!V.optional).map(V=>V.name)),f.params&&ee(f.params,v.keys.map(V=>V.name))),L=v.stringify(C)}else if("path"in f)L=f.path,v=a.find(V=>V.re.test(L)),v&&(C=v.parse(L),N=v.record.name);else{if(v=m.name?s.get(m.name):a.find(V=>V.re.test(m.path)),!v)throw j3(1,{location:f,currentLocation:m});N=v.record.name,C=Q({},m.params,f.params),L=v.stringify(C)}const T=[];let p=v;for(;p;)T.unshift(p.record),p=p.parent;return{name:N,path:L,params:C,matched:T,meta:Wd(T)}}return c.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:n,getRoutes:t,getRecordMatcher:r}}function ee(c,e){const a={};for(const s of e)s in c&&(a[s]=c[s]);return a}function qd(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:$d(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function $d(c){const e={},a=c.props||!1;if("component"in c)e.default=a;else for(const s in c.components)e[s]=typeof a=="boolean"?a:a[s];return e}function ae(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Wd(c){return c.reduce((e,a)=>Q(e,a.meta),{})}function se(c,e){const a={};for(const s in c)a[s]=s in e?e[s]:c[s];return a}function gs(c,e){return e.children.some(a=>a===c||gs(c,a))}const Ls=/#/g,Gd=/&/g,jd=/\//g,Kd=/=/g,Zd=/\?/g,bs=/\+/g,Xd=/%5B/g,Yd=/%5D/g,xs=/%5E/g,Jd=/%60/g,Ss=/%7B/g,Qd=/%7C/g,Ns=/%7D/g,cH=/%20/g;function v7(c){return encodeURI(""+c).replace(Qd,"|").replace(Xd,"[").replace(Yd,"]")}function eH(c){return v7(c).replace(Ss,"{").replace(Ns,"}").replace(xs,"^")}function h0(c){return v7(c).replace(bs,"%2B").replace(cH,"+").replace(Ls,"%23").replace(Gd,"%26").replace(Jd,"`").replace(Ss,"{").replace(Ns,"}").replace(xs,"^")}function aH(c){return h0(c).replace(Kd,"%3D")}function sH(c){return v7(c).replace(Ls,"%23").replace(Zd,"%3F")}function rH(c){return c==null?"":sH(c).replace(jd,"%2F")}function t8(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function iH(c){const e={};if(c===""||c==="?")return e;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(bs," "),n=i.indexOf("="),t=t8(n<0?i:i.slice(0,n)),o=n<0?null:t8(i.slice(n+1));if(t in e){let l=e[t];s2(l)||(l=e[t]=[l]),l.push(o)}else e[t]=o}return e}function re(c){let e="";for(let a in c){const s=c[a];if(a=aH(a),s==null){s!==void 0&&(e+=(e.length?"&":"")+a);continue}(s2(s)?s.map(i=>i&&h0(i)):[s&&h0(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+a,i!=null&&(e+="="+i))})}return e}function nH(c){const e={};for(const a in c){const s=c[a];s!==void 0&&(e[a]=s2(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const tH=Symbol(""),ie=Symbol(""),C7=Symbol(""),ys=Symbol(""),m0=Symbol("");function l4(){let c=[];function e(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function a(){c=[]}return{add:e,list:()=>c,reset:a}}function D2(c,e,a,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((n,t)=>{const o=m=>{m===!1?t(j3(4,{from:a,to:e})):m instanceof Error?t(m):Td(m)?t(j3(2,{from:e,to:m})):(i&&s.enterCallbacks[r]===i&&typeof m=="function"&&i.push(m),n())},l=c.call(s&&s.instances[r],e,a,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch(m=>t(m))})}function T5(c,e,a,s){const r=[];for(const i of c)for(const n in i.components){let t=i.components[n];if(!(e!=="beforeRouteEnter"&&!i.instances[n]))if(oH(t)){const l=(t.__vccOpts||t)[e];l&&r.push(D2(l,a,s,i,n))}else{let o=t();r.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const f=vd(l)?l.default:l;i.components[n]=f;const v=(f.__vccOpts||f)[e];return v&&D2(v,a,s,i,n)()}))}}return r}function oH(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function ne(c){const e=W2(C7),a=W2(ys),s=m1(()=>e.resolve(I3(c.to))),r=m1(()=>{const{matched:o}=s.value,{length:l}=o,f=o[l-1],m=a.matched;if(!f||!m.length)return-1;const v=m.findIndex(G3.bind(null,f));if(v>-1)return v;const C=te(o[l-2]);return l>1&&te(f)===C&&m[m.length-1].path!==C?m.findIndex(G3.bind(null,o[l-2])):v}),i=m1(()=>r.value>-1&&mH(a.params,s.value.params)),n=m1(()=>r.value>-1&&r.value===a.matched.length-1&&ds(a.params,s.value.params));function t(o={}){return hH(o)?e[I3(c.replace)?"replace":"push"](I3(c.to)).catch(M4):Promise.resolve()}return{route:s,href:m1(()=>s.value.href),isActive:i,isExactActive:n,navigate:t}}const lH=Y4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ne,setup(c,{slots:e}){const a=X4(ne(c)),{options:s}=W2(C7),r=m1(()=>({[oe(c.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[oe(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const i=e.default&&e.default(a);return c.custom?i:F8("a",{"aria-current":a.isExactActive?c.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},i)}}}),fH=lH;function hH(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function mH(c,e){for(const a in e){const s=e[a],r=c[a];if(typeof s=="string"){if(s!==r)return!1}else if(!s2(r)||r.length!==s.length||s.some((i,n)=>i!==r[n]))return!1}return!0}function te(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const oe=(c,e,a)=>c!=null?c:e!=null?e:a,uH=Y4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:a}){const s=W2(m0),r=m1(()=>c.route||s.value),i=W2(ie,0),n=m1(()=>{let l=I3(i);const{matched:f}=r.value;let m;for(;(m=f[l])&&!m.components;)l++;return l}),t=m1(()=>r.value.matched[n.value]);G6(ie,m1(()=>n.value+1)),G6(tH,t),G6(m0,r);const o=Ba();return d4(()=>[o.value,t.value,c.name],([l,f,m],[v,C,L])=>{f&&(f.instances[m]=l,C&&C!==f&&l&&l===v&&(f.leaveGuards.size||(f.leaveGuards=C.leaveGuards),f.updateGuards.size||(f.updateGuards=C.updateGuards))),l&&f&&(!C||!G3(f,C)||!v)&&(f.enterCallbacks[m]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=r.value,f=c.name,m=t.value,v=m&&m.components[f];if(!v)return le(a.default,{Component:v,route:l});const C=m.props[f],L=C?C===!0?l.params:typeof C=="function"?C(l):C:null,T=F8(v,Q({},L,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(m.instances[f]=null)},ref:o}));return le(a.default,{Component:T,route:l})||T}}});function le(c,e){if(!c)return null;const a=c(e);return a.length===1?a[0]:a}const vH=uH;function CH(c){const e=Ud(c.routes,c),a=c.parseQuery||iH,s=c.stringifyQuery||re,r=c.history,i=l4(),n=l4(),t=l4(),o=pz(E2);let l=E2;y3&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=k5.bind(null,H=>""+H),m=k5.bind(null,rH),v=k5.bind(null,t8);function C(H,k){let y,R;return Ms(H)?(y=e.getRecordMatcher(H),R=k):R=H,e.addRoute(R,y)}function L(H){const k=e.getRecordMatcher(H);k&&e.removeRoute(k)}function N(){return e.getRoutes().map(H=>H.record)}function T(H){return!!e.getRecordMatcher(H)}function p(H,k){if(k=Q({},k||o.value),typeof H=="string"){const h=A5(a,H,k.path),u=e.resolve({path:h.path},k),z=r.createHref(h.fullPath);return Q(h,u,{params:v(u.params),hash:t8(h.hash),redirectedFrom:void 0,href:z})}let y;if("path"in H)y=Q({},H,{path:A5(a,H.path,k.path).path});else{const h=Q({},H.params);for(const u in h)h[u]==null&&delete h[u];y=Q({},H,{params:m(H.params)}),k.params=m(k.params)}const R=e.resolve(y,k),Y=H.hash||"";R.params=f(v(R.params));const h1=pd(s,Q({},H,{hash:eH(Y),path:R.path})),G=r.createHref(h1);return Q({fullPath:h1,hash:Y,query:s===re?nH(H.query):H.query||{}},R,{redirectedFrom:void 0,href:G})}function V(H){return typeof H=="string"?A5(a,H,o.value.path):Q({},H)}function _(H,k){if(l!==H)return j3(8,{from:k,to:H})}function O(H){return t1(H)}function j(H){return O(Q(V(H),{replace:!0}))}function e1(H){const k=H.matched[H.matched.length-1];if(k&&k.redirect){const{redirect:y}=k;let R=typeof y=="function"?y(H):y;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=V(R):{path:R},R.params={}),Q({query:H.query,hash:H.hash,params:"path"in R?{}:H.params},R)}}function t1(H,k){const y=l=p(H),R=o.value,Y=H.state,h1=H.force,G=H.replace===!0,h=e1(y);if(h)return t1(Q(V(h),{state:typeof h=="object"?Q({},Y,h.state):Y,force:h1,replace:G}),k||y);const u=y;u.redirectedFrom=k;let z;return!h1&&dd(s,R,y)&&(z=j3(16,{to:u,from:R}),a3(R,R,!0,!1)),(z?Promise.resolve(z):H1(u,R)).catch(d=>p2(d)?p2(d,2)?d:K1(d):r1(d,u,R)).then(d=>{if(d){if(p2(d,2))return t1(Q({replace:G},V(d.to),{state:typeof d.to=="object"?Q({},Y,d.to.state):Y,force:h1}),k||u)}else d=T2(u,R,!0,G,Y);return R1(u,R,d),d})}function _1(H,k){const y=_(H,k);return y?Promise.reject(y):Promise.resolve()}function H1(H,k){let y;const[R,Y,h1]=zH(H,k);y=T5(R.reverse(),"beforeRouteLeave",H,k);for(const h of R)h.leaveGuards.forEach(u=>{y.push(D2(u,H,k))});const G=_1.bind(null,H,k);return y.push(G),N3(y).then(()=>{y=[];for(const h of i.list())y.push(D2(h,H,k));return y.push(G),N3(y)}).then(()=>{y=T5(Y,"beforeRouteUpdate",H,k);for(const h of Y)h.updateGuards.forEach(u=>{y.push(D2(u,H,k))});return y.push(G),N3(y)}).then(()=>{y=[];for(const h of H.matched)if(h.beforeEnter&&!k.matched.includes(h))if(s2(h.beforeEnter))for(const u of h.beforeEnter)y.push(D2(u,H,k));else y.push(D2(h.beforeEnter,H,k));return y.push(G),N3(y)}).then(()=>(H.matched.forEach(h=>h.enterCallbacks={}),y=T5(h1,"beforeRouteEnter",H,k),y.push(G),N3(y))).then(()=>{y=[];for(const h of n.list())y.push(D2(h,H,k));return y.push(G),N3(y)}).catch(h=>p2(h,8)?h:Promise.reject(h))}function R1(H,k,y){for(const R of t.list())R(H,k,y)}function T2(H,k,y,R,Y){const h1=_(H,k);if(h1)return h1;const G=k===E2,h=y3?history.state:{};y&&(R||G?r.replace(H.fullPath,Q({scroll:G&&h&&h.scroll},Y)):r.push(H.fullPath,Y)),o.value=H,a3(H,k,y,G),K1()}let i2;function b3(){i2||(i2=r.listen((H,k,y)=>{if(!x6.listening)return;const R=p(H),Y=e1(R);if(Y){t1(Q(Y,{replace:!0}),R).catch(M4);return}l=R;const h1=o.value;y3&&Sd(Xc(h1.fullPath,y.delta),O8()),H1(R,h1).catch(G=>p2(G,12)?G:p2(G,2)?(t1(G.to,R).then(h=>{p2(h,20)&&!y.delta&&y.type===E4.pop&&r.go(-1,!1)}).catch(M4),Promise.reject()):(y.delta&&r.go(-y.delta,!1),r1(G,R,h1))).then(G=>{G=G||T2(R,h1,!1),G&&(y.delta&&!p2(G,8)?r.go(-y.delta,!1):y.type===E4.pop&&p2(G,20)&&r.go(-1,!1)),R1(R,h1,G)}).catch(M4)}))}let e3=l4(),i4=l4(),z1;function r1(H,k,y){K1(H);const R=i4.list();return R.length?R.forEach(Y=>Y(H,k,y)):console.error(H),Promise.reject(H)}function a1(){return z1&&o.value!==E2?Promise.resolve():new Promise((H,k)=>{e3.add([H,k])})}function K1(H){return z1||(z1=!H,b3(),e3.list().forEach(([k,y])=>H?y(H):k()),e3.reset()),H}function a3(H,k,y,R){const{scrollBehavior:Y}=c;if(!y3||!Y)return Promise.resolve();const h1=!y&&Nd(Xc(H.fullPath,0))||(R||!y)&&history.state&&history.state.scroll||null;return Ga().then(()=>Y(H,k,h1)).then(G=>G&&xd(G)).catch(G=>r1(G,H,k))}const Z1=H=>r.go(H);let D1;const x3=new Set,x6={currentRoute:o,listening:!0,addRoute:C,removeRoute:L,hasRoute:T,getRoutes:N,resolve:p,options:c,push:O,replace:j,go:Z1,back:()=>Z1(-1),forward:()=>Z1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:t.add,onError:i4.add,isReady:a1,install(H){const k=this;H.component("RouterLink",fH),H.component("RouterView",vH),H.config.globalProperties.$router=k,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>I3(o)}),y3&&!D1&&o.value===E2&&(D1=!0,O(r.location).catch(Y=>{}));const y={};for(const Y in E2)y[Y]=m1(()=>o.value[Y]);H.provide(C7,k),H.provide(ys,X4(y)),H.provide(m0,o);const R=H.unmount;x3.add(H),H.unmount=function(){x3.delete(H),x3.size<1&&(l=E2,i2&&i2(),i2=null,o.value=E2,D1=!1,z1=!1),R()}}};return x6}function N3(c){return c.reduce((e,a)=>e.then(()=>a()),Promise.resolve())}function zH(c,e){const a=[],s=[],r=[],i=Math.max(e.matched.length,c.matched.length);for(let n=0;n<i;n++){const t=e.matched[n];t&&(c.matched.find(l=>G3(l,t))?s.push(t):a.push(t));const o=c.matched[n];o&&(e.matched.find(l=>G3(l,o))||r.push(o))}return[a,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=function(c){const e=[];let a=0;for(let s=0;s<c.length;s++){let r=c.charCodeAt(s);r<128?e[a++]=r:r<2048?(e[a++]=r>>6|192,e[a++]=r&63|128):(r&64512)===55296&&s+1<c.length&&(c.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(c.charCodeAt(++s)&1023),e[a++]=r>>18|240,e[a++]=r>>12&63|128,e[a++]=r>>6&63|128,e[a++]=r&63|128):(e[a++]=r>>12|224,e[a++]=r>>6&63|128,e[a++]=r&63|128)}return e},pH=function(c){const e=[];let a=0,s=0;for(;a<c.length;){const r=c[a++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=c[a++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=c[a++],n=c[a++],t=c[a++],o=((r&7)<<18|(i&63)<<12|(n&63)<<6|t&63)-65536;e[s++]=String.fromCharCode(55296+(o>>10)),e[s++]=String.fromCharCode(56320+(o&1023))}else{const i=c[a++],n=c[a++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|n&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<c.length;r+=3){const i=c[r],n=r+1<c.length,t=n?c[r+1]:0,o=r+2<c.length,l=o?c[r+2]:0,f=i>>2,m=(i&3)<<4|t>>4;let v=(t&15)<<2|l>>6,C=l&63;o||(C=64,n||(v=64)),s.push(a[f],a[m],a[v],a[C])}return s.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(ws(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):pH(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<c.length;){const i=a[c.charAt(r++)],t=r<c.length?a[c.charAt(r)]:0;++r;const l=r<c.length?a[c.charAt(r)]:64;++r;const m=r<c.length?a[c.charAt(r)]:64;if(++r,i==null||t==null||l==null||m==null)throw Error();const v=i<<2|t>>4;if(s.push(v),l!==64){const C=t<<4&240|l>>2;if(s.push(C),m!==64){const L=l<<6&192|m;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}},dH=function(c){const e=ws(c);return ks.encodeByteArray(e,!0)},o8=function(c){return dH(c).replace(/\./g,"")},As=function(c){try{return ks.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HH(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T1())}function MH(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function VH(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gH(){const c=T1();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function LH(){return typeof indexedDB=="object"}function bH(){return new Promise((c,e)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),a||self.indexedDB.deleteDatabase(s),c(!0)},r.onupgradeneeded=()=>{a=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(a){e(a)}})}function xH(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SH=()=>xH().__FIREBASE_DEFAULTS__,NH=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c=process.env.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},yH=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&As(c[1]);return e&&JSON.parse(e)},z7=()=>{try{return SH()||NH()||yH()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},Ts=c=>{var e,a;return(a=(e=z7())===null||e===void 0?void 0:e.emulatorHosts)===null||a===void 0?void 0:a[c]},wH=c=>{const e=Ts(c);if(!e)return;const a=e.lastIndexOf(":");if(a<=0||a+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(a+1),10);return e[0]==="["?[e.substring(1,a-1),s]:[e.substring(0,a),s]},kH=()=>{var c;return(c=z7())===null||c===void 0?void 0:c.config},_s=c=>{var e;return(e=z7())===null||e===void 0?void 0:e[`_${c}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AH{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TH(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},s=e||"demo-project",r=c.iat||0,i=c.sub||c.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const n=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},c),t="";return[o8(JSON.stringify(a)),o8(JSON.stringify(n)),t].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _H="FirebaseError";class k2 extends Error{constructor(e,a,s){super(a),this.code=e,this.customData=s,this.name=_H,Object.setPrototypeOf(this,k2.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J4.prototype.create)}}class J4{constructor(e,a,s){this.service=e,this.serviceName=a,this.errors=s}create(e,...a){const s=a[0]||{},r=`${this.service}/${e}`,i=this.errors[e],n=i?EH(i,s):"Error",t=`${this.serviceName}: ${n} (${r}).`;return new k2(r,t,s)}}function EH(c,e){return c.replace(PH,(a,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const PH=/\{\$([^}]+)}/g;function IH(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function l8(c,e){if(c===e)return!0;const a=Object.keys(c),s=Object.keys(e);for(const r of a){if(!s.includes(r))return!1;const i=c[r],n=e[r];if(fe(i)&&fe(n)){if(!l8(i,n))return!1}else if(i!==n)return!1}for(const r of s)if(!a.includes(r))return!1;return!0}function fe(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(c){const e=[];for(const[a,s]of Object.entries(c))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function m4(c){const e={};return c.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function u4(c){const e=c.indexOf("?");if(!e)return"";const a=c.indexOf("#",e);return c.substring(e,a>0?a:void 0)}function RH(c,e){const a=new DH(c,e);return a.subscribe.bind(a)}class DH{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,s){let r;if(e===void 0&&a===void 0&&s===void 0)throw new Error("Missing Observer.");FH(e,["next","error","complete"])?r=e:r={next:e,error:a,complete:s},r.next===void 0&&(r.next=_5),r.error===void 0&&(r.error=_5),r.complete===void 0&&(r.complete=_5);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FH(c,e){if(typeof c!="object"||c===null)return!1;for(const a of e)if(a in c&&typeof c[a]=="function")return!0;return!1}function _5(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(c){return c&&c._delegate?c._delegate:c}class p3{constructor(e,a,s){this.name=e,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OH{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const s=new AH;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:a});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){var a;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(a=e==null?void 0:e.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UH(e))try{this.getOrInitializeService({instanceIdentifier:n3})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(a);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=n3){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=n3){return this.instances.has(e)}getOptions(e=n3){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[i,n]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);s===t&&n.resolve(r)}return r}onInit(e,a){var s;const r=this.normalizeInstanceIdentifier(a),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const n=this.instances.get(r);return n&&e(n,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,a){const s=this.onInitCallbacks.get(a);if(!!s)for(const r of s)try{r(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BH(e),options:a}),this.instances.set(e,s),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=n3){return this.component?this.component.multipleInstances?e:n3:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BH(c){return c===n3?void 0:c}function UH(c){return c.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qH{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new OH(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c1;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(c1||(c1={}));const $H={debug:c1.DEBUG,verbose:c1.VERBOSE,info:c1.INFO,warn:c1.WARN,error:c1.ERROR,silent:c1.SILENT},WH=c1.INFO,GH={[c1.DEBUG]:"log",[c1.VERBOSE]:"log",[c1.INFO]:"info",[c1.WARN]:"warn",[c1.ERROR]:"error"},jH=(c,e,...a)=>{if(e<c.logLevel)return;const s=new Date().toISOString(),r=GH[e];if(r)console[r](`[${s}]  ${c.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class p7{constructor(e){this.name=e,this._logLevel=WH,this._logHandler=jH,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$H[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,c1.DEBUG,...e),this._logHandler(this,c1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c1.VERBOSE,...e),this._logHandler(this,c1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c1.INFO,...e),this._logHandler(this,c1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c1.WARN,...e),this._logHandler(this,c1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c1.ERROR,...e),this._logHandler(this,c1.ERROR,...e)}}const KH=(c,e)=>e.some(a=>c instanceof a);let he,me;function ZH(){return he||(he=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XH(){return me||(me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Es=new WeakMap,u0=new WeakMap,Ps=new WeakMap,E5=new WeakMap,d7=new WeakMap;function YH(c){const e=new Promise((a,s)=>{const r=()=>{c.removeEventListener("success",i),c.removeEventListener("error",n)},i=()=>{a(G2(c.result)),r()},n=()=>{s(c.error),r()};c.addEventListener("success",i),c.addEventListener("error",n)});return e.then(a=>{a instanceof IDBCursor&&Es.set(a,c)}).catch(()=>{}),d7.set(e,c),e}function JH(c){if(u0.has(c))return;const e=new Promise((a,s)=>{const r=()=>{c.removeEventListener("complete",i),c.removeEventListener("error",n),c.removeEventListener("abort",n)},i=()=>{a(),r()},n=()=>{s(c.error||new DOMException("AbortError","AbortError")),r()};c.addEventListener("complete",i),c.addEventListener("error",n),c.addEventListener("abort",n)});u0.set(c,e)}let v0={get(c,e,a){if(c instanceof IDBTransaction){if(e==="done")return u0.get(c);if(e==="objectStoreNames")return c.objectStoreNames||Ps.get(c);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return G2(c[e])},set(c,e,a){return c[e]=a,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function QH(c){v0=c(v0)}function cM(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const s=c.call(P5(this),e,...a);return Ps.set(s,e.sort?e.sort():[e]),G2(s)}:XH().includes(c)?function(...e){return c.apply(P5(this),e),G2(Es.get(this))}:function(...e){return G2(c.apply(P5(this),e))}}function eM(c){return typeof c=="function"?cM(c):(c instanceof IDBTransaction&&JH(c),KH(c,ZH())?new Proxy(c,v0):c)}function G2(c){if(c instanceof IDBRequest)return YH(c);if(E5.has(c))return E5.get(c);const e=eM(c);return e!==c&&(E5.set(c,e),d7.set(e,c)),e}const P5=c=>d7.get(c);function aM(c,e,{blocked:a,upgrade:s,blocking:r,terminated:i}={}){const n=indexedDB.open(c,e),t=G2(n);return s&&n.addEventListener("upgradeneeded",o=>{s(G2(n.result),o.oldVersion,o.newVersion,G2(n.transaction))}),a&&n.addEventListener("blocked",()=>a()),t.then(o=>{i&&o.addEventListener("close",()=>i()),r&&o.addEventListener("versionchange",()=>r())}).catch(()=>{}),t}const sM=["get","getKey","getAll","getAllKeys","count"],rM=["put","add","delete","clear"],I5=new Map;function ue(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(I5.get(e))return I5.get(e);const a=e.replace(/FromIndex$/,""),s=e!==a,r=rM.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(r||sM.includes(a)))return;const i=async function(n,...t){const o=this.transaction(n,r?"readwrite":"readonly");let l=o.store;return s&&(l=l.index(t.shift())),(await Promise.all([l[a](...t),r&&o.done]))[0]};return I5.set(e,i),i}QH(c=>({...c,get:(e,a,s)=>ue(e,a)||c.get(e,a,s),has:(e,a)=>!!ue(e,a)||c.has(e,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(nM(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function nM(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const C0="@firebase/app",ve="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3=new p7("@firebase/app"),tM="@firebase/app-compat",oM="@firebase/analytics-compat",lM="@firebase/analytics",fM="@firebase/app-check-compat",hM="@firebase/app-check",mM="@firebase/auth",uM="@firebase/auth-compat",vM="@firebase/database",CM="@firebase/database-compat",zM="@firebase/functions",pM="@firebase/functions-compat",dM="@firebase/installations",HM="@firebase/installations-compat",MM="@firebase/messaging",VM="@firebase/messaging-compat",gM="@firebase/performance",LM="@firebase/performance-compat",bM="@firebase/remote-config",xM="@firebase/remote-config-compat",SM="@firebase/storage",NM="@firebase/storage-compat",yM="@firebase/firestore",wM="@firebase/firestore-compat",kM="firebase",AM="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="[DEFAULT]",TM={[C0]:"fire-core",[tM]:"fire-core-compat",[lM]:"fire-analytics",[oM]:"fire-analytics-compat",[hM]:"fire-app-check",[fM]:"fire-app-check-compat",[mM]:"fire-auth",[uM]:"fire-auth-compat",[vM]:"fire-rtdb",[CM]:"fire-rtdb-compat",[zM]:"fire-fn",[pM]:"fire-fn-compat",[dM]:"fire-iid",[HM]:"fire-iid-compat",[MM]:"fire-fcm",[VM]:"fire-fcm-compat",[gM]:"fire-perf",[LM]:"fire-perf-compat",[bM]:"fire-rc",[xM]:"fire-rc-compat",[SM]:"fire-gcs",[NM]:"fire-gcs-compat",[yM]:"fire-fst",[wM]:"fire-fst-compat","fire-js":"fire-js",[kM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f8=new Map,p0=new Map;function _M(c,e){try{c.container.addComponent(e)}catch(a){d3.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,a)}}function K3(c){const e=c.name;if(p0.has(e))return d3.debug(`There were multiple attempts to register component ${e}.`),!1;p0.set(e,c);for(const a of f8.values())_M(a,c);return!0}function H7(c,e){const a=c.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),c.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},j2=new J4("app","Firebase",EM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,a,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new p3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j2.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=AM;function Is(c,e={}){let a=c;typeof e!="object"&&(e={name:e});const s=Object.assign({name:z0,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw j2.create("bad-app-name",{appName:String(r)});if(a||(a=kH()),!a)throw j2.create("no-options");const i=f8.get(r);if(i){if(l8(a,i.options)&&l8(s,i.config))return i;throw j2.create("duplicate-app",{appName:r})}const n=new qH(r);for(const o of p0.values())n.addComponent(o);const t=new PM(a,s,n);return f8.set(r,t),t}function Rs(c=z0){const e=f8.get(c);if(!e&&c===z0)return Is();if(!e)throw j2.create("no-app",{appName:c});return e}function K2(c,e,a){var s;let r=(s=TM[c])!==null&&s!==void 0?s:c;a&&(r+=`-${a}`);const i=r.match(/\s|\//),n=e.match(/\s|\//);if(i||n){const t=[`Unable to register library "${r}" with version "${e}":`];i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&n&&t.push("and"),n&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),d3.warn(t.join(" "));return}K3(new p3(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM="firebase-heartbeat-database",RM=1,P4="firebase-heartbeat-store";let R5=null;function Ds(){return R5||(R5=aM(IM,RM,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(P4)}}}).catch(c=>{throw j2.create("idb-open",{originalErrorMessage:c.message})})),R5}async function DM(c){var e;try{return(await Ds()).transaction(P4).objectStore(P4).get(Fs(c))}catch(a){if(a instanceof k2)d3.warn(a.message);else{const s=j2.create("idb-get",{originalErrorMessage:(e=a)===null||e===void 0?void 0:e.message});d3.warn(s.message)}}}async function Ce(c,e){var a;try{const r=(await Ds()).transaction(P4,"readwrite");return await r.objectStore(P4).put(e,Fs(c)),r.done}catch(s){if(s instanceof k2)d3.warn(s.message);else{const r=j2.create("idb-set",{originalErrorMessage:(a=s)===null||a===void 0?void 0:a.message});d3.warn(r.message)}}}function Fs(c){return`${c.name}!${c.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=1024,OM=30*24*60*60*1e3;class BM{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new qM(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ze();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=OM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ze(),{heartbeatsToSend:a,unsentEntries:s}=UM(this._heartbeatsCache.heartbeats),r=o8(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ze(){return new Date().toISOString().substring(0,10)}function UM(c,e=FM){const a=[];let s=c.slice();for(const r of c){const i=a.find(n=>n.agent===r.agent);if(i){if(i.dates.push(r.date),pe(a)>e){i.dates.pop();break}}else if(a.push({agent:r.agent,dates:[r.date]}),pe(a)>e){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class qM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LH()?bH().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ce(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ce(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pe(c){return o8(JSON.stringify({version:2,heartbeats:c})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(c){K3(new p3("platform-logger",e=>new iM(e),"PRIVATE")),K3(new p3("heartbeat",e=>new BM(e),"PRIVATE")),K2(C0,ve,c),K2(C0,ve,"esm2017"),K2("fire-js","")}$M("");function M7(c,e){var a={};for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&e.indexOf(s)<0&&(a[s]=c[s]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(c);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(c,s[r])&&(a[s[r]]=c[s[r]]);return a}function Os(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WM=Os,Bs=new J4("auth","Firebase",Os());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new p7("@firebase/auth");function X6(c,...e){de.logLevel<=c1.ERROR&&de.error(`Auth (${c6}): ${c}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(c,...e){throw V7(c,...e)}function v2(c,...e){return V7(c,...e)}function GM(c,e,a){const s=Object.assign(Object.assign({},WM()),{[e]:a});return new J4("auth","Firebase",s).create(e,{appName:c.name})}function V7(c,...e){if(typeof c!="string"){const a=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=c.name),c._errorFactory.create(a,...s)}return Bs.create(c,...e)}function B(c,e,...a){if(!c)throw V7(e,...a)}function M2(c){const e="INTERNAL ASSERTION FAILED: "+c;throw X6(e),new Error(e)}function b2(c,e){c||M2(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Map;function V2(c){b2(c instanceof Function,"Expected a class definition");let e=He.get(c);return e?(b2(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,He.set(c,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(c,e){const a=H7(c,"auth");if(a.isInitialized()){const r=a.getImmediate(),i=a.getOptions();if(l8(i,e!=null?e:{}))return r;r2(r,"already-initialized")}return a.initialize({options:e})}function KM(c,e){const a=(e==null?void 0:e.persistence)||[],s=(Array.isArray(a)?a:[a]).map(V2);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function ZM(){return Me()==="http:"||Me()==="https:"}function Me(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZM()||MH()||"connection"in navigator)?navigator.onLine:!0}function YM(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,a){this.shortDelay=e,this.longDelay=a,b2(a>e,"Short delay should be less than long delay!"),this.isMobile=HH()||VH()}get(){return XM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g7(c,e){b2(c.emulator,"Emulator should always be set here");const{url:a}=c.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static initialize(e,a,s){this.fetchImpl=e,a&&(this.headersImpl=a),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;M2("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;M2("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;M2("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=new e6(3e4,6e4);function a6(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function s6(c,e,a,s,r={}){return qs(c,r,async()=>{let i={},n={};s&&(e==="GET"?n=s:i={body:JSON.stringify(s)});const t=Q4(Object.assign({key:c.config.apiKey},n)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),Us.fetch()($s(c,c.config.apiHost,a,t),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},i))})}async function qs(c,e,a){c._canInitEmulator=!1;const s=Object.assign(Object.assign({},JM),e);try{const r=new cV(c),i=await Promise.race([a(),r.promise]);r.clearNetworkTimeout();const n=await i.json();if("needConfirmation"in n)throw A6(c,"account-exists-with-different-credential",n);if(i.ok&&!("errorMessage"in n))return n;{const t=i.ok?n.errorMessage:n.error.message,[o,l]=t.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw A6(c,"credential-already-in-use",n);if(o==="EMAIL_EXISTS")throw A6(c,"email-already-in-use",n);if(o==="USER_DISABLED")throw A6(c,"user-disabled",n);const f=s[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw GM(c,f,l);r2(c,f)}}catch(r){if(r instanceof k2)throw r;r2(c,"network-request-failed")}}async function r6(c,e,a,s,r={}){const i=await s6(c,e,a,s,r);return"mfaPendingCredential"in i&&r2(c,"multi-factor-auth-required",{_serverResponse:i}),i}function $s(c,e,a,s){const r=`${e}${a}?${s}`;return c.config.emulator?g7(c.config,r):`${c.config.apiScheme}://${r}`}class cV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,s)=>{this.timer=setTimeout(()=>s(v2(this.auth,"network-request-failed")),QM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function A6(c,e,a){const s={appName:c.name};a.email&&(s.email=a.email),a.phoneNumber&&(s.phoneNumber=a.phoneNumber);const r=v2(c,e,s);return r.customData._tokenResponse=a,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(c,e){return s6(c,"POST","/v1/accounts:delete",e)}async function aV(c,e){return s6(c,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(c){if(!!c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sV(c,e=!1){const a=L3(c),s=await a.getIdToken(e),r=L7(s);B(r&&r.exp&&r.auth_time&&r.iat,a.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,n=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:g4(D5(r.auth_time)),issuedAtTime:g4(D5(r.iat)),expirationTime:g4(D5(r.exp)),signInProvider:n||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function D5(c){return Number(c)*1e3}function L7(c){var e;const[a,s,r]=c.split(".");if(a===void 0||s===void 0||r===void 0)return X6("JWT malformed, contained fewer than 3 sections"),null;try{const i=As(s);return i?JSON.parse(i):(X6("Failed to decode base64 JWT payload"),null)}catch(i){return X6("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function rV(c){const e=L7(c);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I4(c,e,a=!1){if(a)return e;try{return await e}catch(s){throw s instanceof k2&&iV(s)&&c.auth.currentUser===c&&await c.auth.signOut(),s}}function iV({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var a;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(a){((e=a)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=g4(this.lastLoginAt),this.creationTime=g4(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h8(c){var e;const a=c.auth,s=await c.getIdToken(),r=await I4(c,aV(a,{idToken:s}));B(r==null?void 0:r.users.length,a,"internal-error");const i=r.users[0];c._notifyReloadListener(i);const n=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lV(i.providerUserInfo):[],t=oV(c.providerData,n),o=c.isAnonymous,l=!(c.email&&i.passwordHash)&&!(t!=null&&t.length),f=o?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:t,metadata:new Ws(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(c,m)}async function tV(c){const e=L3(c);await h8(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oV(c,e){return[...c.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lV(c){return c.map(e=>{var{providerId:a}=e,s=M7(e,["providerId"]);return{providerId:a,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fV(c,e){const a=await qs(c,{},async()=>{const s=Q4({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=c.config,n=$s(c,r,"/v1/token",`key=${i}`),t=await c._getAdditionalHeaders();return t["Content-Type"]="application/x-www-form-urlencoded",Us.fetch()(n,{method:"POST",headers:t,body:s})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rV(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}async getToken(e,a=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:s,refreshToken:r,expiresIn:i}=await fV(e,a);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,a,s){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,a){const{refreshToken:s,accessToken:r,expirationTime:i}=a,n=new R4;return s&&(B(typeof s=="string","internal-error",{appName:e}),n.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),n.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),n.expirationTime=i),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new R4,this.toJSON())}_performRefresh(){return M2("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(c,e){B(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class C3{constructor(e){var{uid:a,auth:s,stsTokenManager:r}=e,i=M7(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ws(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const a=await I4(this,this.stsTokenManager.getToken(this.auth,e));return B(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return sV(this,e)}reload(){return tV(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>Object.assign({},a)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new C3(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),a&&await h8(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await I4(this,eV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){var s,r,i,n,t,o,l,f;const m=(s=a.displayName)!==null&&s!==void 0?s:void 0,v=(r=a.email)!==null&&r!==void 0?r:void 0,C=(i=a.phoneNumber)!==null&&i!==void 0?i:void 0,L=(n=a.photoURL)!==null&&n!==void 0?n:void 0,N=(t=a.tenantId)!==null&&t!==void 0?t:void 0,T=(o=a._redirectEventId)!==null&&o!==void 0?o:void 0,p=(l=a.createdAt)!==null&&l!==void 0?l:void 0,V=(f=a.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:O,isAnonymous:j,providerData:e1,stsTokenManager:t1}=a;B(_&&t1,e,"internal-error");const _1=R4.fromJSON(this.name,t1);B(typeof _=="string",e,"internal-error"),P2(m,e.name),P2(v,e.name),B(typeof O=="boolean",e,"internal-error"),B(typeof j=="boolean",e,"internal-error"),P2(C,e.name),P2(L,e.name),P2(N,e.name),P2(T,e.name),P2(p,e.name),P2(V,e.name);const H1=new C3({uid:_,auth:e,email:v,emailVerified:O,displayName:m,isAnonymous:j,photoURL:L,phoneNumber:C,tenantId:N,stsTokenManager:_1,createdAt:p,lastLoginAt:V});return e1&&Array.isArray(e1)&&(H1.providerData=e1.map(R1=>Object.assign({},R1))),T&&(H1._redirectEventId=T),H1}static async _fromIdTokenResponse(e,a,s=!1){const r=new R4;r.updateFromServerResponse(a);const i=new C3({uid:a.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await h8(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}Gs.type="NONE";const Ve=Gs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y6(c,e,a){return`firebase:${c}:${e}:${a}`}class F3{constructor(e,a,s){this.persistence=e,this.auth=a,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Y6(this.userKey,r.apiKey,i),this.fullPersistenceKey=Y6("persistence",r.apiKey,i),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?C3._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,s="authUser"){if(!a.length)return new F3(V2(Ve),e,s);const r=(await Promise.all(a.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||V2(Ve);const n=Y6(s,e.config.apiKey,e.name);let t=null;for(const l of a)try{const f=await l._get(n);if(f){const m=C3._fromJSON(e,f);l!==i&&(t=m),i=l;break}}catch{}const o=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new F3(i,e,s):(i=o[0],t&&await i._set(n,t.toJSON()),await Promise.all(a.map(async l=>{if(l!==i)try{await l._remove(n)}catch{}})),new F3(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(js(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ys(e))return"Blackberry";if(Js(e))return"Webos";if(b7(e))return"Safari";if((e.includes("chrome/")||Ks(e))&&!e.includes("edge/"))return"Chrome";if(Xs(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=c.match(a);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function js(c=T1()){return/firefox\//i.test(c)}function b7(c=T1()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ks(c=T1()){return/crios\//i.test(c)}function Zs(c=T1()){return/iemobile/i.test(c)}function Xs(c=T1()){return/android/i.test(c)}function Ys(c=T1()){return/blackberry/i.test(c)}function Js(c=T1()){return/webos/i.test(c)}function B8(c=T1()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function hV(c=T1()){var e;return B8(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mV(){return gH()&&document.documentMode===10}function Qs(c=T1()){return B8(c)||Xs(c)||Js(c)||Ys(c)||/windows phone/i.test(c)||Zs(c)}function uV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(c,e=[]){let a;switch(c){case"Browser":a=ge(T1());break;case"Worker":a=`${ge(T1())}-${c}`;break;default:a=c}const s=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${c6}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const s=i=>new Promise((n,t)=>{try{const o=e(i);n(o)}catch(o){t(o)}});s.onAbort=a,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var a;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(a=r)===null||a===void 0?void 0:a.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e,a,s){this.app=e,this.heartbeatServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new vV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=V2(a)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await F3.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var a;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,t=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===t)&&(o==null?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(n){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(n))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){var a;try{await h8(e)}catch(s){if(((a=s)===null||a===void 0?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const a=e?L3(e):null;return a&&B(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(V2(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new J4("auth","Firebase",e())}onAuthStateChanged(e,a,s){return this.registerStateListener(this.authStateSubscription,e,a,s)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,s){return this.registerStateListener(this.idTokenSubscription,e,a,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,a){const s=await this.getOrInitRedirectPersistenceManager(a);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&V2(e)||this._popupRedirectResolver;B(a,this,"argument-error"),this.redirectPersistenceManager=await F3.create(this,[V2(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var a,s;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(a=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,s,r){if(this._deleted)return()=>{};const i=typeof a=="function"?a:a.next.bind(a),n=this._isInitialized?Promise.resolve():this._initializationPromise;return B(n,this,"internal-error"),n.then(()=>i(this.currentUser)),typeof a=="function"?e.addObserver(a,s,r):e.addObserver(a)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const a={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(a["X-Firebase-Client"]=s),a}}function i6(c){return L3(c)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=RH(a=>this.observer=a)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function zV(c,e,a){const s=i6(c);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(a!=null&&a.disableWarnings),i=er(e),{host:n,port:t}=pV(e),o=t===null?"":`:${t}`;s.config.emulator={url:`${i}//${n}${o}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:n,port:t,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||dV()}function er(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function pV(c){const e=er(c),a=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!a)return{host:"",port:null};const s=a[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:be(s.substr(i.length+1))}}else{const[i,n]=s.split(":");return{host:i,port:be(n)}}}function be(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function dV(){function c(){const e=document.createElement("p"),a=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x7{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return M2("not implemented")}_getIdTokenResponse(e){return M2("not implemented")}_linkToIdToken(e,a){return M2("not implemented")}_getReauthenticationResolver(e){return M2("not implemented")}}async function HV(c,e){return s6(c,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MV(c,e){return r6(c,"POST","/v1/accounts:signInWithPassword",a6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(c,e){return r6(c,"POST","/v1/accounts:signInWithEmailLink",a6(c,e))}async function gV(c,e){return r6(c,"POST","/v1/accounts:signInWithEmailLink",a6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4 extends x7{constructor(e,a,s,r=null){super("password",s),this._email=e,this._password=a,this._tenantId=r}static _fromEmailAndPassword(e,a){return new D4(e,a,"password")}static _fromEmailAndCode(e,a,s=null){return new D4(e,a,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e;if((a==null?void 0:a.email)&&(a==null?void 0:a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return MV(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VV(e,{email:this._email,oobCode:this._password});default:r2(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":return HV(e,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gV(e,{idToken:a,email:this._email,oobCode:this._password});default:r2(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O3(c,e){return r6(c,"POST","/v1/accounts:signInWithIdp",a6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV="http://localhost";class H3 extends x7{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new H3(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):r2("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=a,i=M7(a,["providerId","signInMethod"]);if(!s||!r)return null;const n=new H3(s,r);return n.idToken=i.idToken||void 0,n.accessToken=i.accessToken||void 0,n.secret=i.secret,n.nonce=i.nonce,n.pendingToken=i.pendingToken||null,n}_getIdTokenResponse(e){const a=this.buildRequest();return O3(e,a)}_linkToIdToken(e,a){const s=this.buildRequest();return s.idToken=a,O3(e,s)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,O3(e,a)}buildRequest(){const e={requestUri:LV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=Q4(a)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xV(c){const e=m4(u4(c)).link,a=e?m4(u4(e)).deep_link_id:null,s=m4(u4(c)).deep_link_id;return(s?m4(u4(s)).link:null)||s||a||e||c}class S7{constructor(e){var a,s,r,i,n,t;const o=m4(u4(e)),l=(a=o.apiKey)!==null&&a!==void 0?a:null,f=(s=o.oobCode)!==null&&s!==void 0?s:null,m=bV((r=o.mode)!==null&&r!==void 0?r:null);B(l&&f&&m,"argument-error"),this.apiKey=l,this.operation=m,this.code=f,this.continueUrl=(i=o.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(n=o.languageCode)!==null&&n!==void 0?n:null,this.tenantId=(t=o.tenantId)!==null&&t!==void 0?t:null}static parseLink(e){const a=xV(e);try{return new S7(a)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.providerId=c4.PROVIDER_ID}static credential(e,a){return D4._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const s=S7.parseLink(a);return B(s,"argument-error"),D4._fromEmailAndCode(e,s.code,s.tenantId)}}c4.PROVIDER_ID="password";c4.EMAIL_PASSWORD_SIGN_IN_METHOD="password";c4.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6 extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends n6{constructor(){super("facebook.com")}static credential(e){return H3._fromParams({providerId:F2.PROVIDER_ID,signInMethod:F2.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F2.credentialFromTaggedObject(e)}static credentialFromError(e){return F2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F2.credential(e.oauthAccessToken)}catch{return null}}}F2.FACEBOOK_SIGN_IN_METHOD="facebook.com";F2.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2 extends n6{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return H3._fromParams({providerId:O2.PROVIDER_ID,signInMethod:O2.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return O2.credentialFromTaggedObject(e)}static credentialFromError(e){return O2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:s}=e;if(!a&&!s)return null;try{return O2.credential(a,s)}catch{return null}}}O2.GOOGLE_SIGN_IN_METHOD="google.com";O2.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2 extends n6{constructor(){super("github.com")}static credential(e){return H3._fromParams({providerId:B2.PROVIDER_ID,signInMethod:B2.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return B2.credentialFromTaggedObject(e)}static credentialFromError(e){return B2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return B2.credential(e.oauthAccessToken)}catch{return null}}}B2.GITHUB_SIGN_IN_METHOD="github.com";B2.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2 extends n6{constructor(){super("twitter.com")}static credential(e,a){return H3._fromParams({providerId:U2.PROVIDER_ID,signInMethod:U2.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return U2.credentialFromTaggedObject(e)}static credentialFromError(e){return U2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:s}=e;if(!a||!s)return null;try{return U2.credential(a,s)}catch{return null}}}U2.TWITTER_SIGN_IN_METHOD="twitter.com";U2.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SV(c,e){return r6(c,"POST","/v1/accounts:signUp",a6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,s,r=!1){const i=await C3._fromIdTokenResponse(e,s,r),n=xe(s);return new M3({user:i,providerId:n,_tokenResponse:s,operationType:a})}static async _forOperation(e,a,s){await e._updateTokensIfNecessary(s,!0);const r=xe(s);return new M3({user:e,providerId:r,_tokenResponse:s,operationType:a})}}function xe(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8 extends k2{constructor(e,a,s,r){var i;super(a.code,a.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,m8.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:a.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,a,s,r){return new m8(e,a,s,r)}}function sr(c,e,a,s){return(e==="reauthenticate"?a._getReauthenticationResolver(c):a._getIdTokenResponse(c)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?m8._fromErrorAndOperation(c,i,e,s):i})}async function NV(c,e,a=!1){const s=await I4(c,e._linkToIdToken(c.auth,await c.getIdToken()),a);return M3._forOperation(c,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yV(c,e,a=!1){var s;const{auth:r}=c,i="reauthenticate";try{const n=await I4(c,sr(r,i,e,c),a);B(n.idToken,r,"internal-error");const t=L7(n.idToken);B(t,r,"internal-error");const{sub:o}=t;return B(c.uid===o,r,"user-mismatch"),M3._forOperation(c,i,n)}catch(n){throw((s=n)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&r2(r,"user-mismatch"),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(c,e,a=!1){const s="signIn",r=await sr(c,s,e),i=await M3._fromIdTokenResponse(c,s,r);return a||await c._updateCurrentUser(i.user),i}async function wV(c,e){return rr(i6(c),e)}async function Pe1(c,e,a){const s=i6(c),r=await SV(s,{returnSecureToken:!0,email:e,password:a}),i=await M3._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function kV(c,e,a){return wV(L3(c),c4.credential(e,a))}function AV(c,e,a,s){return L3(c).onIdTokenChanged(e,a,s)}function TV(c,e,a){return L3(c).beforeAuthStateChanged(e,a)}const u8="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(u8,"1"),this.storage.removeItem(u8),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(){const c=T1();return b7(c)||B8(c)}const EV=1e3,PV=10;class nr extends ir{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_V()&&uV(),this.fallbackToPolling=Qs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const s=this.storage.getItem(a),r=this.localCache[a];s!==r&&e(a,r,s)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((n,t,o)=>{this.notifyListeners(n,o)});return}const s=e.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(s);if(e.newValue!==n)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!a)return}const r=()=>{const n=this.storage.getItem(s);!a&&this.localCache[s]===n||this.notifyListeners(s,n)},i=this.storage.getItem(s);mV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,PV):r()}notifyListeners(e,a){this.localCache[e]=a;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:s}),!0)})},EV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}nr.type="LOCAL";const IV=nr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ir{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}tr.type="SESSION";const or=tr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(r=>r.isListeningto(e));if(a)return a;const s=new U8(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:s,eventType:r,data:i}=a.data,n=this.handlersMap[r];if(!(n!=null&&n.size))return;a.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const t=Array.from(n).map(async l=>l(a.origin,i)),o=await RV(t);a.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:o})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}U8.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N7(c="",e=10){let a="";for(let s=0;s<e;s++)a+=Math.floor(Math.random()*10);return c+a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,n;return new Promise((t,o)=>{const l=N7("",20);r.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},s);n={messageChannel:r,onMessage(m){const v=m;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),t(v.data.response);break;default:clearTimeout(f),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(n),r.port1.addEventListener("message",n.onMessage),this.target.postMessage({eventType:e,eventId:l,data:a},[r.port2])}).finally(()=>{n&&this.removeMessageHandler(n)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return window}function FV(c){C2().location.href=c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return typeof C2().WorkerGlobalScope<"u"&&typeof C2().importScripts=="function"}async function OV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BV(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function UV(){return lr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="firebaseLocalStorageDb",qV=1,v8="firebaseLocalStorage",hr="fbase_key";class t6{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function q8(c,e){return c.transaction([v8],e?"readwrite":"readonly").objectStore(v8)}function $V(){const c=indexedDB.deleteDatabase(fr);return new t6(c).toPromise()}function H0(){const c=indexedDB.open(fr,qV);return new Promise((e,a)=>{c.addEventListener("error",()=>{a(c.error)}),c.addEventListener("upgradeneeded",()=>{const s=c.result;try{s.createObjectStore(v8,{keyPath:hr})}catch(r){a(r)}}),c.addEventListener("success",async()=>{const s=c.result;s.objectStoreNames.contains(v8)?e(s):(s.close(),await $V(),e(await H0()))})})}async function Se(c,e,a){const s=q8(c,!0).put({[hr]:e,value:a});return new t6(s).toPromise()}async function WV(c,e){const a=q8(c,!1).get(e),s=await new t6(a).toPromise();return s===void 0?null:s.value}function Ne(c,e){const a=q8(c,!0).delete(e);return new t6(a).toPromise()}const GV=800,jV=3;class mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await H0(),this.db)}async _withRetries(e){let a=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(a++>jV)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=U8._getInstance(UV()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){var e,a;if(this.activeServiceWorker=await OV(),!this.activeServiceWorker)return;this.sender=new DV(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((a=s[0])===null||a===void 0?void 0:a.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await H0();return await Se(e,u8,"1"),await Ne(e,u8),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(s=>Se(s,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(s=>WV(s,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>Ne(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=q8(r,!1).getAll();return new t6(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),a.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),a.push(r));return a}notifyListeners(e,a){this.localCache[e]=a;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mr.type="LOCAL";const KV=mr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}function XV(c){return new Promise((e,a)=>{const s=document.createElement("script");s.setAttribute("src",c),s.onload=e,s.onerror=r=>{const i=v2("internal-error");i.customData=r,a(i)},s.type="text/javascript",s.charset="UTF-8",ZV().appendChild(s)})}function YV(c){return`__${c}${Math.floor(Math.random()*1e6)}`}new e6(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(c,e){return e?V2(e):(B(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y7 extends x7{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return O3(e,this._buildIdpRequest())}_linkToIdToken(e,a){return O3(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return O3(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function QV(c){return rr(c.auth,new y7(c),c.bypassAuthState)}function cg(c){const{auth:e,user:a}=c;return B(a,e,"internal-error"),yV(a,new y7(c),c.bypassAuthState)}async function eg(c){const{auth:e,user:a}=c;return B(a,e,"internal-error"),NV(a,new y7(c),c.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,a,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:s,postBody:r,tenantId:i,error:n,type:t}=e;if(n){this.reject(n);return}const o={auth:this.auth,requestUri:a,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(t)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QV;case"linkViaPopup":case"linkViaRedirect":return eg;case"reauthViaPopup":case"reauthViaRedirect":return cg;default:r2(this.auth,"internal-error")}}resolve(e){b2(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b2(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new e6(2e3,1e4);class k3 extends ur{constructor(e,a,s,r,i){super(e,a,r,i),this.provider=s,this.authWindow=null,this.pollId=null,k3.currentPopupAction&&k3.currentPopupAction.cancel(),k3.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){b2(this.filter.length===1,"Popup operations only handle one event");const e=N7();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(v2(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(v2(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,k3.currentPopupAction=null}pollUserCancellation(){const e=()=>{var a,s;if(!((s=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v2(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ag.get())};e()}}k3.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="pendingRedirect",J6=new Map;class rg extends ur{constructor(e,a,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,s),this.eventId=null}async execute(){let e=J6.get(this.auth._key());if(!e){try{const s=await ig(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(a){e=()=>Promise.reject(a)}J6.set(this.auth._key(),e)}return this.bypassAuthState||J6.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ig(c,e){const a=og(e),s=tg(c);if(!await s._isAvailable())return!1;const r=await s._get(a)==="true";return await s._remove(a),r}function ng(c,e){J6.set(c._key(),e)}function tg(c){return V2(c._redirectPersistence)}function og(c){return Y6(sg,c.config.apiKey,c.name)}async function lg(c,e,a=!1){const s=i6(c),r=JV(s,e),n=await new rg(s,r,a).execute();return n&&!a&&(delete n.user._redirectEventId,await s._persistUserIfCurrent(n.user),await s._setRedirectUser(null,e)),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=10*60*1e3;class hg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(a=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mg(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){var s;if(e.error&&!vr(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";a.onError(v2(this.auth,r))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const s=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ye(e))}saveEventToCache(e){this.cachedEventUids.add(ye(e)),this.lastProcessedEventTime=Date.now()}}function ye(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function vr({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mg(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vr(c);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(c,e={}){return s6(c,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cg=/^https?/;async function zg(c){if(c.config.emulator)return;const{authorizedDomains:e}=await ug(c);for(const a of e)try{if(pg(a))return}catch{}r2(c,"unauthorized-domain")}function pg(c){const e=d0(),{protocol:a,hostname:s}=new URL(e);if(c.startsWith("chrome-extension://")){const n=new URL(c);return n.hostname===""&&s===""?a==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&n.hostname===s}if(!Cg.test(a))return!1;if(vg.test(c))return s===c;const r=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new e6(3e4,6e4);function we(){const c=C2().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let a=0;a<c.CP.length;a++)c.CP[a]=null}}function Hg(c){return new Promise((e,a)=>{var s,r,i;function n(){we(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{we(),a(v2(c,"network-request-failed"))},timeout:dg.get()})}if(!((r=(s=C2().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=C2().gapi)===null||i===void 0)&&i.load)n();else{const t=YV("iframefcb");return C2()[t]=()=>{gapi.load?n():a(v2(c,"network-request-failed"))},XV(`https://apis.google.com/js/api.js?onload=${t}`).catch(o=>a(o))}}).catch(e=>{throw Q6=null,e})}let Q6=null;function Mg(c){return Q6=Q6||Hg(c),Q6}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new e6(5e3,15e3),gg="__/auth/iframe",Lg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sg(c){const e=c.config;B(e.authDomain,c,"auth-domain-config-required");const a=e.emulator?g7(e,Lg):`https://${c.config.authDomain}/${gg}`,s={apiKey:e.apiKey,appName:c.name,v:c6},r=xg.get(c.config.apiHost);r&&(s.eid=r);const i=c._getFrameworks();return i.length&&(s.fw=i.join(",")),`${a}?${Q4(s).slice(1)}`}async function Ng(c){const e=await Mg(c),a=C2().gapi;return B(a,c,"internal-error"),e.open({where:document.body,url:Sg(c),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const n=v2(c,"network-request-failed"),t=C2().setTimeout(()=>{i(n)},Vg.get());function o(){C2().clearTimeout(t),r(s)}s.ping(o).then(o,()=>{i(n)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wg=500,kg=600,Ag="_blank",Tg="http://localhost";class ke{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _g(c,e,a,s=wg,r=kg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),n=Math.max((window.screen.availWidth-s)/2,0).toString();let t="";const o=Object.assign(Object.assign({},yg),{width:s.toString(),height:r.toString(),top:i,left:n}),l=T1().toLowerCase();a&&(t=Ks(l)?Ag:a),js(l)&&(e=e||Tg,o.scrollbars="yes");const f=Object.entries(o).reduce((v,[C,L])=>`${v}${C}=${L},`,"");if(hV(l)&&t!=="_self")return Eg(e||"",t),new ke(null);const m=window.open(e||"",t,f);B(m,c,"popup-blocked");try{m.focus()}catch{}return new ke(m)}function Eg(c,e){const a=document.createElement("a");a.href=c,a.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__/auth/handler",Ig="emulator/auth/handler";function Ae(c,e,a,s,r,i){B(c.config.authDomain,c,"auth-domain-config-required"),B(c.config.apiKey,c,"invalid-api-key");const n={apiKey:c.config.apiKey,appName:c.name,authType:a,redirectUrl:s,v:c6,eventId:r};if(e instanceof ar){e.setDefaultLanguage(c.languageCode),n.providerId=e.providerId||"",IH(e.getCustomParameters())||(n.customParameters=JSON.stringify(e.getCustomParameters()));for(const[o,l]of Object.entries(i||{}))n[o]=l}if(e instanceof n6){const o=e.getScopes().filter(l=>l!=="");o.length>0&&(n.scopes=o.join(","))}c.tenantId&&(n.tid=c.tenantId);const t=n;for(const o of Object.keys(t))t[o]===void 0&&delete t[o];return`${Rg(c)}?${Q4(t).slice(1)}`}function Rg({config:c}){return c.emulator?g7(c,Ig):`https://${c.authDomain}/${Pg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5="webStorageSupport";class Dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=or,this._completeRedirectFn=lg,this._overrideRedirectResult=ng}async _openPopup(e,a,s,r){var i;b2((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const n=Ae(e,a,s,d0(),r);return _g(e,n,N7())}async _openRedirect(e,a,s,r){return await this._originValidation(e),FV(Ae(e,a,s,d0(),r)),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:r,promise:i}=this.eventManagers[a];return r?Promise.resolve(r):(b2(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[a]={promise:s},s.catch(()=>{delete this.eventManagers[a]}),s}async initAndGetManager(e){const a=await Ng(e),s=new hg(e);return a.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=a,s}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(F5,{type:F5},r=>{var i;const n=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[F5];n!==void 0&&a(!!n),r2(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=zg(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return Qs()||b7()||B8()}}const Fg=Dg;var Te="@firebase/auth",_e="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);!a||(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ug(c){K3(new p3("auth",(e,{options:a})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:n}=s.options;return((t,o)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),B(!(n!=null&&n.includes(":")),"argument-error",{appName:t.name});const l={apiKey:i,authDomain:n,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cr(c)},f=new CV(t,o,l);return KM(f,a),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,s)=>{e.getProvider("auth-internal").initialize()})),K3(new p3("auth-internal",e=>{const a=i6(e.getProvider("auth").getImmediate());return(s=>new Og(s))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),K2(Te,_e,Bg(c)),K2(Te,_e,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=5*60,$g=_s("authIdTokenMaxAge")||qg;let Ee=null;const Wg=c=>async e=>{const a=e&&await e.getIdTokenResult(),s=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(s&&s>$g)return;const r=a==null?void 0:a.token;Ee!==r&&(Ee=r,await fetch(c,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Cr(c=Rs()){const e=H7(c,"auth");if(e.isInitialized())return e.getImmediate();const a=jM(c,{popupRedirectResolver:Fg,persistence:[KV,IV,or]}),s=_s("authTokenSyncURL");if(s){const i=Wg(s);TV(a,i,()=>i(a.currentUser)),AV(a,n=>i(n))}const r=Ts("auth");return r&&zV(a,`http://${r}`),a}Ug("Browser");const Gg={data(){return{email:"",password:""}},methods:{login(c){this.email=c.target.elements.email.value,this.password=c.target.elements.password.value;const e=Cr();kV(e,this.email,this.password).then(()=>{this.$router.push("/home")}).catch(a=>{const s=a.code,r=a.message;console.log(s),console.log(r);let i=document.querySelector("#alert_1");i.classList.remove("d-none"),i.innerHTML=r,console.log(i)})},moveToRegister(){this.$router.push("/register")}}},zr=c=>(yz("data-v-e05daea7"),c=c(),wz(),c),jg={class:"container shadow-2xl",id:"content",style:{width:"500px"}},Kg=dp('<h2 class="mb-3 text-3xl text-center" data-v-e05daea7>Login</h2><div class="input" data-v-e05daea7><label for="email" data-v-e05daea7>Email address</label><input class="form-control" type="text" name="email" placeholder="email@adress.com" data-v-e05daea7></div><div class="input" data-v-e05daea7><label for="password" data-v-e05daea7>Password</label><input class="form-control" type="password" name="password" placeholder="password123" data-v-e05daea7></div>',3),Zg={class:"alternative-option mt-4"},Xg=zr(()=>d1("button",{type:"submit",class:"mt-4 btn-pers",id:"login_button"}," Login ",-1)),Yg=zr(()=>d1("div",{class:"alert alert-warning alert-dismissible fade show mt-5 d-none",role:"alert",id:"alert_1"},[D3(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. "),d1("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})],-1));function Jg(c,e,a,s,r,i){return f7(),us("div",jg,[d1("form",{onSubmit:e[1]||(e[1]=Zp((...n)=>i.login&&i.login(...n),["prevent"]))},[Kg,d1("div",Zg,[D3(" You don't have an account? "),d1("span",{onClick:e[0]||(e[0]=(...n)=>i.moveToRegister&&i.moveToRegister(...n))},"Register")]),Xg,Yg],32)])}const Qg=u7(Gg,[["render",Jg],["__scopeId","data-v-e05daea7"]]),M0=CH({history:Ad("/Health-U/"),routes:[{path:"/",name:"login",component:Qg},{path:"/register",name:"register",component:()=>o4(()=>import("./RegisterView.3a6df433.js"),[])},{path:"/home",name:"home",component:()=>o4(()=>import("./HomeView.91f6dffc.js"),[]),meta:{authRequired:!0}},{path:"/profile",name:"profile",component:()=>o4(()=>import("./ProfileView.7a6fe3af.js"),[]),meta:{authRequired:!0}},{path:"/blog",name:"blog",component:()=>o4(()=>import("./BlogView.1d8949df.js"),[]),meta:{authRequired:!0}},{path:"/navbar",name:"navbar",component:()=>o4(()=>Promise.resolve().then(()=>od),void 0),meta:{authRequired:!0}}]});M0.beforeEach((c,e,a)=>{const s=Cr();c.matched.some(r=>r.meta.authRequired)?s.currentUser?a():(alert("You've must been logged to access this area"),M0.push("/")):a()});var cL=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const eL=Symbol();var Pe;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(Pe||(Pe={}));function aL(){const c=qC(!0),e=c.run(()=>Ba({}));let a=[],s=[];const r=s7({install(i){r._a=i,i.provide(eL,r),i.config.globalProperties.$pinia=r,s.forEach(n=>a.push(n)),s=[]},use(i){return!this._a&&!cL?s.push(i):a.push(i),this},_p:a,_a:null,_e:c,_s:new Map,state:e});return r}function Ie(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,s)}return a}function A(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(a),!0).forEach(function(s){M1(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):Ie(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function C8(c){return C8=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C8(c)}function sL(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function rL(c,e,a){return e&&Re(c.prototype,e),a&&Re(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function M1(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function w7(c,e){return nL(c)||oL(c,e)||pr(c,e)||fL()}function o6(c){return iL(c)||tL(c)||pr(c)||lL()}function iL(c){if(Array.isArray(c))return V0(c)}function nL(c){if(Array.isArray(c))return c}function tL(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function oL(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],r=!0,i=!1,n,t;try{for(a=a.call(c);!(r=(n=a.next()).done)&&(s.push(n.value),!(e&&s.length===e));r=!0);}catch(o){i=!0,t=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw t}}return s}}function pr(c,e){if(!!c){if(typeof c=="string")return V0(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return V0(c,e)}}function V0(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function lL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var De=function(){},k7={},dr={},Hr=null,Mr={mark:De,measure:De};try{typeof window<"u"&&(k7=window),typeof document<"u"&&(dr=document),typeof MutationObserver<"u"&&(Hr=MutationObserver),typeof performance<"u"&&(Mr=performance)}catch{}var hL=k7.navigator||{},Fe=hL.userAgent,Oe=Fe===void 0?"":Fe,X2=k7,l1=dr,Be=Hr,T6=Mr;X2.document;var A2=!!l1.documentElement&&!!l1.head&&typeof l1.addEventListener=="function"&&typeof l1.createElement=="function",Vr=~Oe.indexOf("MSIE")||~Oe.indexOf("Trident/"),_6,E6,P6,I6,R6,x2="___FONT_AWESOME___",g0=16,gr="fa",Lr="svg-inline--fa",V3="data-fa-i2svg",L0="data-fa-pseudo-element",mL="data-fa-pseudo-element-pending",A7="data-prefix",T7="data-icon",Ue="fontawesome-i2svg",uL="async",vL=["HTML","HEAD","STYLE","SCRIPT"],br=function(){try{return!0}catch{return!1}}(),o1="classic",u1="sharp",_7=[o1,u1];function l6(c){return new Proxy(c,{get:function(a,s){return s in a?a[s]:a[o1]}})}var F4=l6((_6={},M1(_6,o1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M1(_6,u1,{fa:"solid",fass:"solid","fa-solid":"solid"}),_6)),O4=l6((E6={},M1(E6,o1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M1(E6,u1,{solid:"fass"}),E6)),B4=l6((P6={},M1(P6,o1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M1(P6,u1,{fass:"fa-solid"}),P6)),CL=l6((I6={},M1(I6,o1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M1(I6,u1,{"fa-solid":"fass"}),I6)),zL=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,xr="fa-layers-text",pL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dL=l6((R6={},M1(R6,o1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M1(R6,u1,{900:"fass"}),R6)),Sr=[1,2,3,4,5,6,7,8,9,10],HL=Sr.concat([11,12,13,14,15,16,17,18,19,20]),ML=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],l3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U4=new Set;Object.keys(O4[o1]).map(U4.add.bind(U4));Object.keys(O4[u1]).map(U4.add.bind(U4));var VL=[].concat(_7,o6(U4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l3.GROUP,l3.SWAP_OPACITY,l3.PRIMARY,l3.SECONDARY]).concat(Sr.map(function(c){return"".concat(c,"x")})).concat(HL.map(function(c){return"w-".concat(c)})),L4=X2.FontAwesomeConfig||{};function gL(c){var e=l1.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function LL(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(l1&&typeof l1.querySelector=="function"){var bL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bL.forEach(function(c){var e=w7(c,2),a=e[0],s=e[1],r=LL(gL(a));r!=null&&(L4[s]=r)})}var Nr={styleDefault:"solid",familyDefault:"classic",cssPrefix:gr,replacementClass:Lr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};L4.familyPrefix&&(L4.cssPrefix=L4.familyPrefix);var Z3=A(A({},Nr),L4);Z3.autoReplaceSvg||(Z3.observeMutations=!1);var P={};Object.keys(Nr).forEach(function(c){Object.defineProperty(P,c,{enumerable:!0,set:function(a){Z3[c]=a,b4.forEach(function(s){return s(P)})},get:function(){return Z3[c]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){Z3.cssPrefix=e,b4.forEach(function(a){return a(P)})},get:function(){return Z3.cssPrefix}});X2.FontAwesomeConfig=P;var b4=[];function xL(c){return b4.push(c),function(){b4.splice(b4.indexOf(c),1)}}var I2=g0,u2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function SL(c){if(!(!c||!A2)){var e=l1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=l1.head.childNodes,s=null,r=a.length-1;r>-1;r--){var i=a[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return l1.head.insertBefore(e,s),c}}var NL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q4(){for(var c=12,e="";c-- >0;)e+=NL[Math.random()*62|0];return e}function e4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function E7(c){return c.classList?e4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yr(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yL(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(yr(c[a]),'" ')},"").trim()}function $8(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function P7(c){return c.size!==u2.size||c.x!==u2.x||c.y!==u2.y||c.rotate!==u2.rotate||c.flipX||c.flipY}function wL(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),n="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),t="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(n," ").concat(t)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:o,path:l}}function kL(c){var e=c.transform,a=c.width,s=a===void 0?g0:a,r=c.height,i=r===void 0?g0:r,n=c.startCentered,t=n===void 0?!1:n,o="";return t&&Vr?o+="translate(".concat(e.x/I2-s/2,"em, ").concat(e.y/I2-i/2,"em) "):t?o+="translate(calc(-50% + ".concat(e.x/I2,"em), calc(-50% + ").concat(e.y/I2,"em)) "):o+="translate(".concat(e.x/I2,"em, ").concat(e.y/I2,"em) "),o+="scale(".concat(e.size/I2*(e.flipX?-1:1),", ").concat(e.size/I2*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var AL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wr(){var c=gr,e=Lr,a=P.cssPrefix,s=P.replacementClass,r=AL;if(a!==c||s!==e){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(t,".".concat(s))}return r}var qe=!1;function O5(){P.autoAddCss&&!qe&&(SL(wr()),qe=!0)}var TL={mixout:function(){return{dom:{css:wr,insertCss:O5}}},hooks:function(){return{beforeDOMElementCreation:function(){O5()},beforeI2svg:function(){O5()}}}},S2=X2||{};S2[x2]||(S2[x2]={});S2[x2].styles||(S2[x2].styles={});S2[x2].hooks||(S2[x2].hooks={});S2[x2].shims||(S2[x2].shims=[]);var c2=S2[x2],kr=[],_L=function c(){l1.removeEventListener("DOMContentLoaded",c),z8=1,kr.map(function(e){return e()})},z8=!1;A2&&(z8=(l1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l1.readyState),z8||l1.addEventListener("DOMContentLoaded",_L));function EL(c){!A2||(z8?setTimeout(c,0):kr.push(c))}function f6(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?yr(c):"<".concat(e," ").concat(yL(s),">").concat(i.map(f6).join(""),"</").concat(e,">")}function $e(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var PL=function(e,a){return function(s,r,i,n){return e.call(a,s,r,i,n)}},B5=function(e,a,s,r){var i=Object.keys(e),n=i.length,t=r!==void 0?PL(a,r):a,o,l,f;for(s===void 0?(o=1,f=e[i[0]]):(o=0,f=s);o<n;o++)l=i[o],f=t(f,e[l],l,e);return f};function IL(c){for(var e=[],a=0,s=c.length;a<s;){var r=c.charCodeAt(a++);if(r>=55296&&r<=56319&&a<s){var i=c.charCodeAt(a++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function b0(c){var e=IL(c);return e.length===1?e[0].toString(16):null}function RL(c,e){var a=c.length,s=c.charCodeAt(e),r;return s>=55296&&s<=56319&&a>e+1&&(r=c.charCodeAt(e+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function We(c){return Object.keys(c).reduce(function(e,a){var s=c[a],r=!!s.icon;return r?e[s.iconName]=s.icon:e[a]=s,e},{})}function x0(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,r=s===void 0?!1:s,i=We(e);typeof c2.hooks.addPack=="function"&&!r?c2.hooks.addPack(c,We(e)):c2.styles[c]=A(A({},c2.styles[c]||{}),i),c==="fas"&&x0("fa",e)}var D6,F6,O6,A3=c2.styles,DL=c2.shims,FL=(D6={},M1(D6,o1,Object.values(B4[o1])),M1(D6,u1,Object.values(B4[u1])),D6),I7=null,Ar={},Tr={},_r={},Er={},Pr={},OL=(F6={},M1(F6,o1,Object.keys(F4[o1])),M1(F6,u1,Object.keys(F4[u1])),F6);function BL(c){return~VL.indexOf(c)}function UL(c,e){var a=e.split("-"),s=a[0],r=a.slice(1).join("-");return s===c&&r!==""&&!BL(r)?r:null}var Ir=function(){var e=function(i){return B5(A3,function(n,t,o){return n[o]=B5(t,i,{}),n},{})};Ar=e(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var t=i[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=n})}return r}),Tr=e(function(r,i,n){if(r[n]=n,i[2]){var t=i[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=n})}return r}),Pr=e(function(r,i,n){var t=i[2];return r[n]=n,t.forEach(function(o){r[o]=n}),r});var a="far"in A3||P.autoFetchSvg,s=B5(DL,function(r,i){var n=i[0],t=i[1],o=i[2];return t==="far"&&!a&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});_r=s.names,Er=s.unicodes,I7=W8(P.styleDefault,{family:P.familyDefault})};xL(function(c){I7=W8(c.styleDefault,{family:P.familyDefault})});Ir();function R7(c,e){return(Ar[c]||{})[e]}function qL(c,e){return(Tr[c]||{})[e]}function f3(c,e){return(Pr[c]||{})[e]}function Rr(c){return _r[c]||{prefix:null,iconName:null}}function $L(c){var e=Er[c],a=R7("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y2(){return I7}var D7=function(){return{prefix:null,iconName:null,rest:[]}};function W8(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?o1:a,r=F4[s][c],i=O4[s][c]||O4[s][r],n=c in c2.styles?c:null;return i||n||null}var Ge=(O6={},M1(O6,o1,Object.keys(B4[o1])),M1(O6,u1,Object.keys(B4[u1])),O6);function G8(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,r=s===void 0?!1:s,i=(e={},M1(e,o1,"".concat(P.cssPrefix,"-").concat(o1)),M1(e,u1,"".concat(P.cssPrefix,"-").concat(u1)),e),n=null,t=o1;(c.includes(i[o1])||c.some(function(l){return Ge[o1].includes(l)}))&&(t=o1),(c.includes(i[u1])||c.some(function(l){return Ge[u1].includes(l)}))&&(t=u1);var o=c.reduce(function(l,f){var m=UL(P.cssPrefix,f);if(A3[f]?(f=FL[t].includes(f)?CL[t][f]:f,n=f,l.prefix=f):OL[t].indexOf(f)>-1?(n=f,l.prefix=W8(f,{family:t})):m?l.iconName=m:f!==P.replacementClass&&f!==i[o1]&&f!==i[u1]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var v=n==="fa"?Rr(l.iconName):{},C=f3(l.prefix,l.iconName);v.prefix&&(n=null),l.iconName=v.iconName||C||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!A3.far&&A3.fas&&!P.autoFetchSvg&&(l.prefix="fas")}return l},D7());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===u1&&(A3.fass||P.autoFetchSvg)&&(o.prefix="fass",o.iconName=f3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=Y2()||"fas"),o}var WL=function(){function c(){sL(this,c),this.definitions={}}return rL(c,[{key:"add",value:function(){for(var a=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){a.definitions[t]=A(A({},a.definitions[t]||{}),n[t]),x0(t,n[t]);var o=B4[o1][t];o&&x0(o,n[t]),Ir()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],t=n.prefix,o=n.iconName,l=n.icon,f=l[2];a[t]||(a[t]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(a[t][m]=l)}),a[t][o]=l}),a}}]),c}(),je=[],T3={},B3={},GL=Object.keys(B3);function jL(c,e){var a=e.mixoutsTo;return je=c,T3={},Object.keys(B3).forEach(function(s){GL.indexOf(s)===-1&&delete B3[s]}),je.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(a[n]=r[n]),C8(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){a[n]||(a[n]={}),a[n][t]=r[n][t]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){T3[n]||(T3[n]=[]),T3[n].push(i[n])})}s.provides&&s.provides(B3)}),a}function S0(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),r=2;r<a;r++)s[r-2]=arguments[r];var i=T3[c]||[];return i.forEach(function(n){e=n.apply(null,[e].concat(s))}),e}function g3(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var r=T3[c]||[];r.forEach(function(i){i.apply(null,a)})}function N2(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return B3[c]?B3[c].apply(null,e):void 0}function N0(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||Y2();if(!!e)return e=f3(a,e)||e,$e(Dr.definitions,a,e)||$e(c2.styles,a,e)}var Dr=new WL,KL=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,g3("noAuto")},ZL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A2?(g3("beforeI2svg",e),N2("pseudoElements2svg",e),N2("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,EL(function(){YL({autoReplaceSvgRoot:a}),g3("watch",e)})}},XL={icon:function(e){if(e===null)return null;if(C8(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:f3(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=W8(e[0]);return{prefix:s,iconName:f3(s,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(zL))){var r=G8(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y2(),iconName:f3(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Y2();return{prefix:i,iconName:f3(i,e)||e}}}},G1={noAuto:KL,config:P,dom:ZL,parse:XL,library:Dr,findIconDefinition:N0,toHtml:f6},YL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,s=a===void 0?l1:a;(Object.keys(c2.styles).length>0||P.autoFetchSvg)&&A2&&P.autoReplaceSvg&&G1.dom.i2svg({node:s})};function j8(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return f6(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!A2){var s=l1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function JL(c){var e=c.children,a=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(P7(n)&&a.found&&!s.found){var t=a.width,o=a.height,l={x:t/o/2,y:.5};r.style=$8(A(A({},i),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function QL(c){var e=c.prefix,a=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:n}),children:s}]}]}function F7(c){var e=c.icons,a=e.main,s=e.mask,r=c.prefix,i=c.iconName,n=c.transform,t=c.symbol,o=c.title,l=c.maskId,f=c.titleId,m=c.extra,v=c.watchable,C=v===void 0?!1:v,L=s.found?s:a,N=L.width,T=L.height,p=r==="fak",V=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(H1){return m.classes.indexOf(H1)===-1}).filter(function(H1){return H1!==""||!!H1}).concat(m.classes).join(" "),_={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:V,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(T)})},O=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/T*16*.0625,"em")}:{};C&&(_.attributes[V3]=""),o&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||q4())},children:[o]}),delete _.attributes.title);var j=A(A({},_),{},{prefix:r,iconName:i,main:a,mask:s,maskId:l,transform:n,symbol:t,styles:A(A({},O),m.styles)}),e1=s.found&&a.found?N2("generateAbstractMask",j)||{children:[],attributes:{}}:N2("generateAbstractIcon",j)||{children:[],attributes:{}},t1=e1.children,_1=e1.attributes;return j.children=t1,j.attributes=_1,t?QL(j):JL(j)}function Ke(c){var e=c.content,a=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,t=c.watchable,o=t===void 0?!1:t,l=A(A(A({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});o&&(l[V3]="");var f=A({},n.styles);P7(r)&&(f.transform=kL({transform:r,startCentered:!0,width:a,height:s}),f["-webkit-transform"]=f.transform);var m=$8(f);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function cb(c){var e=c.content,a=c.title,s=c.extra,r=A(A(A({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),i=$8(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[e]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var U5=c2.styles;function y0(c){var e=c[0],a=c[1],s=c.slice(4),r=w7(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(l3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(l3.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(l3.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:n}}var eb={found:!1,width:512,height:512};function ab(c,e){!br&&!P.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function w0(c,e){var a=e;return e==="fa"&&P.styleDefault!==null&&(e=Y2()),new Promise(function(s,r){if(N2("missingIconAbstract"),a==="fa"){var i=Rr(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&U5[e]&&U5[e][c]){var n=U5[e][c];return s(y0(n))}ab(c,e),s(A(A({},eb),{},{icon:P.showMissingIcons&&c?N2("missingIconAbstract")||{}:{}}))})}var Ze=function(){},k0=P.measurePerformance&&T6&&T6.mark&&T6.measure?T6:{mark:Ze,measure:Ze},v4='FA "6.2.0"',sb=function(e){return k0.mark("".concat(v4," ").concat(e," begins")),function(){return Fr(e)}},Fr=function(e){k0.mark("".concat(v4," ").concat(e," ends")),k0.measure("".concat(v4," ").concat(e),"".concat(v4," ").concat(e," begins"),"".concat(v4," ").concat(e," ends"))},O7={begin:sb,end:Fr},c8=function(){};function Xe(c){var e=c.getAttribute?c.getAttribute(V3):null;return typeof e=="string"}function rb(c){var e=c.getAttribute?c.getAttribute(A7):null,a=c.getAttribute?c.getAttribute(T7):null;return e&&a}function ib(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(P.replacementClass)}function nb(){if(P.autoReplaceSvg===!0)return e8.replace;var c=e8[P.autoReplaceSvg];return c||e8.replace}function tb(c){return l1.createElementNS("http://www.w3.org/2000/svg",c)}function ob(c){return l1.createElement(c)}function Or(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?tb:ob:a;if(typeof c=="string")return l1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(Or(n,{ceFn:s}))}),r}function lb(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var e8={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Or(r),a)}),a.getAttribute(V3)===null&&P.keepOriginalSource){var s=l1.createComment(lb(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(e){var a=e[0],s=e[1];if(~E7(a).indexOf(P.replacementClass))return e8.replace(e);var r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(t,o){return o===P.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(t){return f6(t)}).join(`
`);a.setAttribute(V3,""),a.innerHTML=n}};function Ye(c){c()}function Br(c,e){var a=typeof e=="function"?e:c8;if(c.length===0)a();else{var s=Ye;P.mutateApproach===uL&&(s=X2.requestAnimationFrame||Ye),s(function(){var r=nb(),i=O7.begin("mutate");c.map(r),i(),a()})}}var B7=!1;function Ur(){B7=!0}function A0(){B7=!1}var p8=null;function Je(c){if(!!Be&&!!P.observeMutations){var e=c.treeCallback,a=e===void 0?c8:e,s=c.nodeCallback,r=s===void 0?c8:s,i=c.pseudoElementsCallback,n=i===void 0?c8:i,t=c.observeMutationsRoot,o=t===void 0?l1:t;p8=new Be(function(l){if(!B7){var f=Y2();e4(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xe(m.addedNodes[0])&&(P.searchPseudoElements&&n(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&Xe(m.target)&&~ML.indexOf(m.attributeName))if(m.attributeName==="class"&&rb(m.target)){var v=G8(E7(m.target)),C=v.prefix,L=v.iconName;m.target.setAttribute(A7,C||f),L&&m.target.setAttribute(T7,L)}else ib(m.target)&&r(m.target)})}}),A2&&p8.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fb(){!p8||p8.disconnect()}function hb(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],t=i.slice(1);return n&&t.length>0&&(s[n]=t.join(":").trim()),s},{})),a}function mb(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=G8(E7(c));return r.prefix||(r.prefix=Y2()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=qL(r.prefix,c.innerText)||R7(r.prefix,b0(c.innerText))),!r.iconName&&P.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function ub(c){var e=e4(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return P.autoA11y&&(a?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(s||q4()):(e["aria-hidden"]="true",e.focusable="false")),e}function vb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:u2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qe(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=mb(c),s=a.iconName,r=a.prefix,i=a.rest,n=ub(c),t=S0("parseNodeAttributes",{},c),o=e.styleParser?hb(c):[];return A({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:u2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:n}},t)}var Cb=c2.styles;function qr(c){var e=P.autoReplaceSvg==="nest"?Qe(c,{styleParser:!1}):Qe(c);return~e.extra.classes.indexOf(xr)?N2("generateLayersText",c,e):N2("generateSvgReplacementMutation",c,e)}var J2=new Set;_7.map(function(c){J2.add("fa-".concat(c))});Object.keys(F4[o1]).map(J2.add.bind(J2));Object.keys(F4[u1]).map(J2.add.bind(J2));J2=o6(J2);function ca(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A2)return Promise.resolve();var a=l1.documentElement.classList,s=function(m){return a.add("".concat(Ue,"-").concat(m))},r=function(m){return a.remove("".concat(Ue,"-").concat(m))},i=P.autoFetchSvg?J2:_7.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Cb));i.includes("fa")||i.push("fa");var n=[".".concat(xr,":not([").concat(V3,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(V3,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=e4(c.querySelectorAll(n))}catch{}if(t.length>0)s("pending"),r("complete");else return Promise.resolve();var o=O7.begin("onTree"),l=t.reduce(function(f,m){try{var v=qr(m);v&&f.push(v)}catch(C){br||C.name==="MissingIcon"&&console.error(C)}return f},[]);return new Promise(function(f,m){Promise.all(l).then(function(v){Br(v,function(){s("active"),s("complete"),r("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(v){o(),m(v)})})}function zb(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qr(c).then(function(a){a&&Br([a],e)})}function pb(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:N0(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:N0(r||{})),c(s,A(A({},a),{},{mask:r}))}}var db=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,r=s===void 0?u2:s,i=a.symbol,n=i===void 0?!1:i,t=a.mask,o=t===void 0?null:t,l=a.maskId,f=l===void 0?null:l,m=a.title,v=m===void 0?null:m,C=a.titleId,L=C===void 0?null:C,N=a.classes,T=N===void 0?[]:N,p=a.attributes,V=p===void 0?{}:p,_=a.styles,O=_===void 0?{}:_;if(!!e){var j=e.prefix,e1=e.iconName,t1=e.icon;return j8(A({type:"icon"},e),function(){return g3("beforeDOMElementCreation",{iconDefinition:e,params:a}),P.autoA11y&&(v?V["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(L||q4()):(V["aria-hidden"]="true",V.focusable="false")),F7({icons:{main:y0(t1),mask:o?y0(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:e1,transform:A(A({},u2),r),symbol:n,title:v,maskId:f,titleId:L,extra:{attributes:V,styles:O,classes:T}})})}},Hb={mixout:function(){return{icon:pb(db)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ca,a.nodeCallback=zb,a}}},provides:function(e){e.i2svg=function(a){var s=a.node,r=s===void 0?l1:s,i=a.callback,n=i===void 0?function(){}:i;return ca(r,n)},e.generateSvgReplacementMutation=function(a,s){var r=s.iconName,i=s.title,n=s.titleId,t=s.prefix,o=s.transform,l=s.symbol,f=s.mask,m=s.maskId,v=s.extra;return new Promise(function(C,L){Promise.all([w0(r,t),f.iconName?w0(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var T=w7(N,2),p=T[0],V=T[1];C([a,F7({icons:{main:p,mask:V},prefix:t,iconName:r,transform:o,symbol:l,maskId:m,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},e.generateAbstractIcon=function(a){var s=a.children,r=a.attributes,i=a.main,n=a.transform,t=a.styles,o=$8(t);o.length>0&&(r.style=o);var l;return P7(n)&&(l=N2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(l||i.icon),{children:s,attributes:r}}}},Mb={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return j8({type:"layer"},function(){g3("beforeDOMElementCreation",{assembler:a,params:s});var n=[];return a(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(o6(i)).join(" ")},children:n}]})}}}},Vb={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,t=n===void 0?[]:n,o=s.attributes,l=o===void 0?{}:o,f=s.styles,m=f===void 0?{}:f;return j8({type:"counter",content:a},function(){return g3("beforeDOMElementCreation",{content:a,params:s}),cb({content:a.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(o6(t))}})})}}}},gb={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?u2:r,n=s.title,t=n===void 0?null:n,o=s.classes,l=o===void 0?[]:o,f=s.attributes,m=f===void 0?{}:f,v=s.styles,C=v===void 0?{}:v;return j8({type:"text",content:a},function(){return g3("beforeDOMElementCreation",{content:a,params:s}),Ke({content:a,transform:A(A({},u2),i),title:t,extra:{attributes:m,styles:C,classes:["".concat(P.cssPrefix,"-layers-text")].concat(o6(l))}})})}}},provides:function(e){e.generateLayersText=function(a,s){var r=s.title,i=s.transform,n=s.extra,t=null,o=null;if(Vr){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();t=f.width/l,o=f.height/l}return P.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,Ke({content:a.innerHTML,width:t,height:o,transform:i,title:r,extra:n,watchable:!0})])}}},Lb=new RegExp('"',"ug"),ea=[1105920,1112319];function bb(c){var e=c.replace(Lb,""),a=RL(e,0),s=a>=ea[0]&&a<=ea[1],r=e.length===2?e[0]===e[1]:!1;return{value:b0(r?e[0]:e),isSecondary:s||r}}function aa(c,e){var a="".concat(mL).concat(e.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(a)!==null)return s();var i=e4(c.children),n=i.filter(function(t1){return t1.getAttribute(L0)===e})[0],t=X2.getComputedStyle(c,e),o=t.getPropertyValue("font-family").match(pL),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(n&&!o)return c.removeChild(n),s();if(o&&f!=="none"&&f!==""){var m=t.getPropertyValue("content"),v=~["Sharp"].indexOf(o[2])?u1:o1,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?O4[v][o[2].toLowerCase()]:dL[v][l],L=bb(m),N=L.value,T=L.isSecondary,p=o[0].startsWith("FontAwesome"),V=R7(C,N),_=V;if(p){var O=$L(N);O.iconName&&O.prefix&&(V=O.iconName,C=O.prefix)}if(V&&!T&&(!n||n.getAttribute(A7)!==C||n.getAttribute(T7)!==_)){c.setAttribute(a,_),n&&c.removeChild(n);var j=vb(),e1=j.extra;e1.attributes[L0]=e,w0(V,C).then(function(t1){var _1=F7(A(A({},j),{},{icons:{main:t1,mask:D7()},prefix:C,iconName:_,extra:e1,watchable:!0})),H1=l1.createElement("svg");e==="::before"?c.insertBefore(H1,c.firstChild):c.appendChild(H1),H1.outerHTML=_1.map(function(R1){return f6(R1)}).join(`
`),c.removeAttribute(a),s()}).catch(r)}else s()}else s()})}function xb(c){return Promise.all([aa(c,"::before"),aa(c,"::after")])}function Sb(c){return c.parentNode!==document.head&&!~vL.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(L0)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function sa(c){if(!!A2)return new Promise(function(e,a){var s=e4(c.querySelectorAll("*")).filter(Sb).map(xb),r=O7.begin("searchPseudoElements");Ur(),Promise.all(s).then(function(){r(),A0(),e()}).catch(function(){r(),A0(),a()})})}var Nb={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=sa,a}}},provides:function(e){e.pseudoElements2svg=function(a){var s=a.node,r=s===void 0?l1:s;P.searchPseudoElements&&sa(r)}}},ra=!1,yb={mixout:function(){return{dom:{unwatch:function(){Ur(),ra=!0}}}},hooks:function(){return{bootstrap:function(){Je(S0("mutationObserverCallbacks",{}))},noAuto:function(){fb()},watch:function(a){var s=a.observeMutationsRoot;ra?A0():Je(S0("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},ia=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],t=i.slice(1).join("-");if(n&&t==="h")return s.flipX=!0,s;if(n&&t==="v")return s.flipY=!0,s;if(t=parseFloat(t),isNaN(t))return s;switch(n){case"grow":s.size=s.size+t;break;case"shrink":s.size=s.size-t;break;case"left":s.x=s.x-t;break;case"right":s.x=s.x+t;break;case"up":s.y=s.y-t;break;case"down":s.y=s.y+t;break;case"rotate":s.rotate=s.rotate+t;break}return s},a)},wb={mixout:function(){return{parse:{transform:function(a){return ia(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,s){var r=s.getAttribute("data-fa-transform");return r&&(a.transform=ia(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var s=a.main,r=a.transform,i=a.containerWidth,n=a.iconWidth,t={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(l," ").concat(f)},v={transform:"translate(".concat(n/2*-1," -256)")},C={outer:t,inner:m,path:v};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:A(A({},s.icon.attributes),C.path)}]}]}}}},q5={x:0,y:0,width:"100%",height:"100%"};function na(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function kb(c){return c.tag==="g"?c.children:[c]}var Ab={hooks:function(){return{parseNodeAttributes:function(a,s){var r=s.getAttribute("data-fa-mask"),i=r?G8(r.split(" ").map(function(n){return n.trim()})):D7();return i.prefix||(i.prefix=Y2()),a.mask=i,a.maskId=s.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var s=a.children,r=a.attributes,i=a.main,n=a.mask,t=a.maskId,o=a.transform,l=i.width,f=i.icon,m=n.width,v=n.icon,C=wL({transform:o,containerWidth:m,iconWidth:l}),L={tag:"rect",attributes:A(A({},q5),{},{fill:"white"})},N=f.children?{children:f.children.map(na)}:{},T={tag:"g",attributes:A({},C.inner),children:[na(A({tag:f.tag,attributes:A(A({},f.attributes),C.path)},N))]},p={tag:"g",attributes:A({},C.outer),children:[T]},V="mask-".concat(t||q4()),_="clip-".concat(t||q4()),O={tag:"mask",attributes:A(A({},q5),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,p]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:kb(v)},O]};return s.push(j,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(V,")")},q5)}),{children:s,attributes:r}}}},Tb={provides:function(e){var a=!1;X2.matchMedia&&(a=X2.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=A(A({},i),{},{attributeName:"opacity"}),t={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||t.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(t),s.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:A(A({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||s.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},_b={hooks:function(){return{parseNodeAttributes:function(a,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Eb=[TL,Hb,Mb,Vb,gb,Nb,yb,wb,Ab,Tb,_b];jL(Eb,{mixoutsTo:G1});G1.noAuto;var $r=G1.config,U7=G1.library;G1.dom;var d8=G1.parse;G1.findIconDefinition;G1.toHtml;var Pb=G1.icon;G1.layer;var Ib=G1.text;G1.counter;function ta(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,s)}return a}function J1(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ta(Object(a),!0).forEach(function(s){F1(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):ta(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function H8(c){return H8=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H8(c)}function F1(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function Rb(c,e){if(c==null)return{};var a={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(a[r]=c[r]);return a}function Db(c,e){if(c==null)return{};var a=Rb(c,e),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(a[s]=c[s]))}return a}function T0(c){return Fb(c)||Ob(c)||Bb(c)||Ub()}function Fb(c){if(Array.isArray(c))return _0(c)}function Ob(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Bb(c,e){if(!!c){if(typeof c=="string")return _0(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _0(c,e)}}function _0(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function Ub(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K2(mc1,uc1,"app");var vc1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,q9=q9||{},U=vc1||self;function M8(){}function h5(c){var e=typeof c;return e=e!="object"?e:c?Array.isArray(c)?"array":e:"null",e=="array"||e=="object"&&typeof c.length=="number"}function z6(c){var e=typeof c;return e=="object"&&c!=null||e=="function"}function Cc1(c){return Object.prototype.hasOwnProperty.call(c,$5)&&c[$5]||(c[$5]=++zc1)}var $5="closure_uid_"+(1e9*Math.random()>>>0),zc1=0;function pc1(c,e,a){return c.call.apply(c.bind,arguments)}function dc1(c,e,a){if(!c)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),c.apply(e,r)}}return function(){return c.apply(e,arguments)}}function w1(c,e,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w1=pc1:w1=dc1,w1.apply(null,arguments)}function B6(c,e){var a=Array.prototype.slice.call(arguments,1);return function(){var s=a.slice();return s.push.apply(s,arguments),c.apply(this,s)}}function b1(c,e){function a(){}a.prototype=e.prototype,c.X=e.prototype,c.prototype=new a,c.prototype.constructor=c,c.Wb=function(s,r,i){for(var n=Array(arguments.length-2),t=2;t<arguments.length;t++)n[t-2]=arguments[t];return e.prototype[r].apply(s,n)}}function Q2(){this.s=this.s,this.o=this.o}var Hc1=0;Q2.prototype.s=!1;Q2.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hc1!=0)&&Cc1(this)};Q2.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bv=Array.prototype.indexOf?function(c,e){return Array.prototype.indexOf.call(c,e,void 0)}:function(c,e){if(typeof c=="string")return typeof e!="string"||e.length!=1?-1:c.indexOf(e,0);for(let a=0;a<c.length;a++)if(a in c&&c[a]===e)return a;return-1};function $9(c){const e=c.length;if(0<e){const a=Array(e);for(let s=0;s<e;s++)a[s]=c[s];return a}return[]}function la(c,e){for(let a=1;a<arguments.length;a++){const s=arguments[a];if(h5(s)){const r=c.length||0,i=s.length||0;c.length=r+i;for(let n=0;n<i;n++)c[r+n]=s[n]}else c.push(s)}}function k1(c,e){this.type=c,this.g=this.target=e,this.defaultPrevented=!1}k1.prototype.h=function(){this.defaultPrevented=!0};var Mc1=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var c=!1,e=Object.defineProperty({},"passive",{get:function(){c=!0}});try{U.addEventListener("test",M8,e),U.removeEventListener("test",M8,e)}catch{}return c}();function V8(c){return/^[\s\xa0]*$/.test(c)}var fa=String.prototype.trim?function(c){return c.trim()}:function(c){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(c)[1]};function W5(c,e){return c<e?-1:c>e?1:0}function m5(){var c=U.navigator;return c&&(c=c.userAgent)?c:""}function h2(c){return m5().indexOf(c)!=-1}function W9(c){return W9[" "](c),c}W9[" "]=M8;function Vc1(c){var e=bc1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=c(9)}var gc1=h2("Opera"),$4=h2("Trident")||h2("MSIE"),xv=h2("Edge"),E0=xv||$4,Sv=h2("Gecko")&&!(m5().toLowerCase().indexOf("webkit")!=-1&&!h2("Edge"))&&!(h2("Trident")||h2("MSIE"))&&!h2("Edge"),Lc1=m5().toLowerCase().indexOf("webkit")!=-1&&!h2("Edge");function Nv(){var c=U.document;return c?c.documentMode:void 0}var P0;c:{var G5="",j5=function(){var c=m5();if(Sv)return/rv:([^\);]+)(\)|;)/.exec(c);if(xv)return/Edge\/([\d\.]+)/.exec(c);if($4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);if(Lc1)return/WebKit\/(\S+)/.exec(c);if(gc1)return/(?:Version)[ \/]?(\S+)/.exec(c)}();if(j5&&(G5=j5?j5[1]:""),$4){var K5=Nv();if(K5!=null&&K5>parseFloat(G5)){P0=String(K5);break c}}P0=G5}var bc1={};function xc1(){return Vc1(function(){let c=0;const e=fa(String(P0)).split("."),a=fa("9").split("."),s=Math.max(e.length,a.length);for(let n=0;c==0&&n<s;n++){var r=e[n]||"",i=a[n]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;c=W5(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||W5(r[2].length==0,i[2].length==0)||W5(r[2],i[2]),r=r[3],i=i[3]}while(c==0)}return 0<=c})}U.document&&$4&&Nv();function W4(c,e){if(k1.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var a=this.type=c.type,s=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=e,e=c.relatedTarget){if(Sv){c:{try{W9(e.nodeName);var r=!0;break c}catch{}r=!1}r||(e=null)}}else a=="mouseover"?e=c.fromElement:a=="mouseout"&&(e=c.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Sc1[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&W4.X.h.call(this)}}b1(W4,k1);var Sc1={2:"touch",3:"pen",4:"mouse"};W4.prototype.h=function(){W4.X.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var p6="closure_listenable_"+(1e6*Math.random()|0),Nc1=0;function yc1(c,e,a,s,r){this.listener=c,this.proxy=null,this.src=e,this.type=a,this.capture=!!s,this.ha=r,this.key=++Nc1,this.ba=this.ea=!1}function u5(c){c.ba=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function G9(c,e,a){for(const s in c)e.call(a,c[s],s,c)}function yv(c){const e={};for(const a in c)e[a]=c[a];return e}const ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wv(c,e){let a,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(a in s)c[a]=s[a];for(let i=0;i<ha.length;i++)a=ha[i],Object.prototype.hasOwnProperty.call(s,a)&&(c[a]=s[a])}}function v5(c){this.src=c,this.g={},this.h=0}v5.prototype.add=function(c,e,a,s,r){var i=c.toString();c=this.g[i],c||(c=this.g[i]=[],this.h++);var n=R0(c,e,s,r);return-1<n?(e=c[n],a||(e.ea=!1)):(e=new yc1(e,this.src,i,!!s,r),e.ea=a,c.push(e)),e};function I0(c,e){var a=e.type;if(a in c.g){var s=c.g[a],r=bv(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(u5(e),c.g[a].length==0&&(delete c.g[a],c.h--))}}function R0(c,e,a,s){for(var r=0;r<c.length;++r){var i=c[r];if(!i.ba&&i.listener==e&&i.capture==!!a&&i.ha==s)return r}return-1}var j9="closure_lm_"+(1e6*Math.random()|0),Z5={};function kv(c,e,a,s,r){if(s&&s.once)return Tv(c,e,a,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kv(c,e[i],a,s,r);return null}return a=X9(a),c&&c[p6]?c.N(e,a,z6(s)?!!s.capture:!!s,r):Av(c,e,a,!1,s,r)}function Av(c,e,a,s,r,i){if(!e)throw Error("Invalid event type");var n=z6(r)?!!r.capture:!!r,t=Z9(c);if(t||(c[j9]=t=new v5(c)),a=t.add(e,a,s,n,i),a.proxy)return a;if(s=wc1(),a.proxy=s,s.src=c,s.listener=a,c.addEventListener)Mc1||(r=n),r===void 0&&(r=!1),c.addEventListener(e.toString(),s,r);else if(c.attachEvent)c.attachEvent(Ev(e.toString()),s);else if(c.addListener&&c.removeListener)c.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return a}function wc1(){function c(a){return e.call(c.src,c.listener,a)}const e=kc1;return c}function Tv(c,e,a,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tv(c,e[i],a,s,r);return null}return a=X9(a),c&&c[p6]?c.O(e,a,z6(s)?!!s.capture:!!s,r):Av(c,e,a,!0,s,r)}function _v(c,e,a,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_v(c,e[i],a,s,r);else s=z6(s)?!!s.capture:!!s,a=X9(a),c&&c[p6]?(c=c.i,e=String(e).toString(),e in c.g&&(i=c.g[e],a=R0(i,a,s,r),-1<a&&(u5(i[a]),Array.prototype.splice.call(i,a,1),i.length==0&&(delete c.g[e],c.h--)))):c&&(c=Z9(c))&&(e=c.g[e.toString()],c=-1,e&&(c=R0(e,a,s,r)),(a=-1<c?e[c]:null)&&K9(a))}function K9(c){if(typeof c!="number"&&c&&!c.ba){var e=c.src;if(e&&e[p6])I0(e.i,c);else{var a=c.type,s=c.proxy;e.removeEventListener?e.removeEventListener(a,s,c.capture):e.detachEvent?e.detachEvent(Ev(a),s):e.addListener&&e.removeListener&&e.removeListener(s),(a=Z9(e))?(I0(a,c),a.h==0&&(a.src=null,e[j9]=null)):u5(c)}}}function Ev(c){return c in Z5?Z5[c]:Z5[c]="on"+c}function kc1(c,e){if(c.ba)c=!0;else{e=new W4(e,this);var a=c.listener,s=c.ha||c.src;c.ea&&K9(c),c=a.call(s,e)}return c}function Z9(c){return c=c[j9],c instanceof v5?c:null}var X5="__closure_events_fn_"+(1e9*Math.random()>>>0);function X9(c){return typeof c=="function"?c:(c[X5]||(c[X5]=function(e){return c.handleEvent(e)}),c[X5])}function V1(){Q2.call(this),this.i=new v5(this),this.P=this,this.I=null}b1(V1,Q2);V1.prototype[p6]=!0;V1.prototype.removeEventListener=function(c,e,a,s){_v(this,c,e,a,s)};function L1(c,e){var a,s=c.I;if(s)for(a=[];s;s=s.I)a.push(s);if(c=c.P,s=e.type||e,typeof e=="string")e=new k1(e,c);else if(e instanceof k1)e.target=e.target||c;else{var r=e;e=new k1(s,c),wv(e,r)}if(r=!0,a)for(var i=a.length-1;0<=i;i--){var n=e.g=a[i];r=U6(n,s,!0,e)&&r}if(n=e.g=c,r=U6(n,s,!0,e)&&r,r=U6(n,s,!1,e)&&r,a)for(i=0;i<a.length;i++)n=e.g=a[i],r=U6(n,s,!1,e)&&r}V1.prototype.M=function(){if(V1.X.M.call(this),this.i){var c=this.i,e;for(e in c.g){for(var a=c.g[e],s=0;s<a.length;s++)u5(a[s]);delete c.g[e],c.h--}}this.I=null};V1.prototype.N=function(c,e,a,s){return this.i.add(String(c),e,!1,a,s)};V1.prototype.O=function(c,e,a,s){return this.i.add(String(c),e,!0,a,s)};function U6(c,e,a,s){if(e=c.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var n=e[i];if(n&&!n.ba&&n.capture==a){var t=n.listener,o=n.ha||n.src;n.ea&&I0(c.i,n),r=t.call(o,s)!==!1&&r}}return r&&!s.defaultPrevented}var Y9=U.JSON.stringify;function Ac1(){var c=Rv;let e=null;return c.g&&(e=c.g,c.g=c.g.next,c.g||(c.h=null),e.next=null),e}class Tc1{constructor(){this.h=this.g=null}add(e,a){const s=Pv.get();s.set(e,a),this.h?this.h.next=s:this.g=s,this.h=s}}var Pv=new class{constructor(c,e){this.i=c,this.j=e,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}(()=>new _c1,c=>c.reset());class _c1{constructor(){this.next=this.g=this.h=null}set(e,a){this.h=e,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function Ec1(c){U.setTimeout(()=>{throw c},0)}function Iv(c,e){D0||Pc1(),F0||(D0(),F0=!0),Rv.add(c,e)}var D0;function Pc1(){var c=U.Promise.resolve(void 0);D0=function(){c.then(Ic1)}}var F0=!1,Rv=new Tc1;function Ic1(){for(var c;c=Ac1();){try{c.h.call(c.g)}catch(a){Ec1(a)}var e=Pv;e.j(c),100>e.h&&(e.h++,c.next=e.g,e.g=c)}F0=!1}function C5(c,e){V1.call(this),this.h=c||1,this.g=e||U,this.j=w1(this.lb,this),this.l=Date.now()}b1(C5,V1);I=C5.prototype;I.ca=!1;I.R=null;I.lb=function(){if(this.ca){var c=Date.now()-this.l;0<c&&c<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-c):(this.R&&(this.g.clearTimeout(this.R),this.R=null),L1(this,"tick"),this.ca&&(J9(this),this.start()))}};I.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function J9(c){c.ca=!1,c.R&&(c.g.clearTimeout(c.R),c.R=null)}I.M=function(){C5.X.M.call(this),J9(this),delete this.g};function Q9(c,e,a){if(typeof c=="function")a&&(c=w1(c,a));else if(c&&typeof c.handleEvent=="function")c=w1(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(c,e||0)}function Dv(c){c.g=Q9(()=>{c.g=null,c.i&&(c.i=!1,Dv(c))},c.j);const e=c.h;c.h=null,c.m.apply(null,e)}class Rc1 extends Q2{constructor(e,a){super(),this.m=e,this.j=a,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dv(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function G4(c){Q2.call(this),this.h=c,this.g={}}b1(G4,Q2);var ma=[];function Fv(c,e,a,s){Array.isArray(a)||(a&&(ma[0]=a.toString()),a=ma);for(var r=0;r<a.length;r++){var i=kv(e,a[r],s||c.handleEvent,!1,c.h||c);if(!i)break;c.g[i.key]=i}}function Ov(c){G9(c.g,function(e,a){this.g.hasOwnProperty(a)&&K9(e)},c),c.g={}}G4.prototype.M=function(){G4.X.M.call(this),Ov(this)};G4.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function z5(){this.g=!0}z5.prototype.Aa=function(){this.g=!1};function Dc1(c,e,a,s,r,i){c.info(function(){if(c.g)if(i)for(var n="",t=i.split("&"),o=0;o<t.length;o++){var l=t[o].split("=");if(1<l.length){var f=l[0];l=l[1];var m=f.split("_");n=2<=m.length&&m[1]=="type"?n+(f+"="+l+"&"):n+(f+"=redacted&")}}else n=null;else n=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+a+`
`+n})}function Fc1(c,e,a,s,r,i,n){c.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+a+`
`+i+" "+n})}function _3(c,e,a,s){c.info(function(){return"XMLHTTP TEXT ("+e+"): "+Bc1(c,a)+(s?" "+s:"")})}function Oc1(c,e){c.info(function(){return"TIMEOUT: "+e})}z5.prototype.info=function(){};function Bc1(c,e){if(!c.g)return e;if(!e)return null;try{var a=JSON.parse(e);if(a){for(c=0;c<a.length;c++)if(Array.isArray(a[c])){var s=a[c];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var n=1;n<r.length;n++)r[n]=""}}}}return Y9(a)}catch{return e}}var a4={},ua=null;function cc(){return ua=ua||new V1}a4.Pa="serverreachability";function Bv(c){k1.call(this,a4.Pa,c)}b1(Bv,k1);function j4(c){const e=cc();L1(e,new Bv(e))}a4.STAT_EVENT="statevent";function Uv(c,e){k1.call(this,a4.STAT_EVENT,c),this.stat=e}b1(Uv,k1);function P1(c){const e=cc();L1(e,new Uv(e,c))}a4.Qa="timingevent";function qv(c,e){k1.call(this,a4.Qa,c),this.size=e}b1(qv,k1);function d6(c,e){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){c()},e)}var ec={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Uc1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ac(){}ac.prototype.h=null;function va(c){return c.h||(c.h=c.i())}function qc1(){}var H6={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sc(){k1.call(this,"d")}b1(sc,k1);function rc(){k1.call(this,"c")}b1(rc,k1);var O0;function p5(){}b1(p5,ac);p5.prototype.g=function(){return new XMLHttpRequest};p5.prototype.i=function(){return{}};O0=new p5;function M6(c,e,a,s){this.l=c,this.j=e,this.m=a,this.U=s||1,this.S=new G4(this),this.O=$c1,c=E0?125:void 0,this.T=new C5(c),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $v}function $v(){this.i=null,this.g="",this.h=!1}var $c1=45e3,B0={},g8={};I=M6.prototype;I.setTimeout=function(c){this.O=c};function U0(c,e,a){c.K=1,c.v=H5(y2(e)),c.s=a,c.P=!0,Wv(c,null)}function Wv(c,e){c.F=Date.now(),V6(c),c.A=y2(c.v);var a=c.A,s=c.U;Array.isArray(s)||(s=[String(s)]),Qv(a.i,"t",s),c.C=0,a=c.l.H,c.h=new $v,c.g=MC(c.l,a?e:null,!c.s),0<c.N&&(c.L=new Rc1(w1(c.La,c,c.g),c.N)),Fv(c.S,c.g,"readystatechange",c.ib),e=c.H?yv(c.H):{},c.s?(c.u||(c.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",c.g.da(c.A,c.u,c.s,e)):(c.u="GET",c.g.da(c.A,c.u,null,e)),j4(),Dc1(c.j,c.u,c.A,c.m,c.U,c.s)}I.ib=function(c){c=c.target;const e=this.L;e&&g2(c)==3?e.l():this.La(c)};I.La=function(c){try{if(c==this.g)c:{const f=g2(this.g);var e=this.g.Ea();const m=this.g.aa();if(!(3>f)&&(f!=3||E0||this.g&&(this.h.h||this.g.fa()||da(this.g)))){this.I||f!=4||e==7||(e==8||0>=m?j4(3):j4(2)),d5(this);var a=this.g.aa();this.Y=a;e:if(Gv(this)){var s=da(this.g);c="";var r=s.length,i=g2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){h3(this),S4(this);var n="";break e}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,c+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=c,this.C=0,n=this.h.g}else n=this.g.fa();if(this.i=a==200,Fc1(this.j,this.u,this.A,this.m,this.U,f,a),this.i){if(this.Z&&!this.J){e:{if(this.g){var t,o=this.g;if((t=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V8(t)){var l=t;break e}}l=null}if(a=l)_3(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,q0(this,a);else{this.i=!1,this.o=3,P1(12),h3(this),S4(this);break c}}this.P?(jv(this,f,n),E0&&this.i&&f==3&&(Fv(this.S,this.T,"tick",this.hb),this.T.start())):(_3(this.j,this.m,n,null),q0(this,n)),f==4&&h3(this),this.i&&!this.I&&(f==4?zC(this.l,this):(this.i=!1,V6(this)))}else a==400&&0<n.indexOf("Unknown SID")?(this.o=3,P1(12)):(this.o=0,P1(13)),h3(this),S4(this)}}}catch{}finally{}};function Gv(c){return c.g?c.u=="GET"&&c.K!=2&&c.l.Da:!1}function jv(c,e,a){let s=!0,r;for(;!c.I&&c.C<a.length;)if(r=Wc1(c,a),r==g8){e==4&&(c.o=4,P1(14),s=!1),_3(c.j,c.m,null,"[Incomplete Response]");break}else if(r==B0){c.o=4,P1(15),_3(c.j,c.m,a,"[Invalid Chunk]"),s=!1;break}else _3(c.j,c.m,r,null),q0(c,r);Gv(c)&&r!=g8&&r!=B0&&(c.h.g="",c.C=0),e!=4||a.length!=0||c.h.h||(c.o=1,P1(16),s=!1),c.i=c.i&&s,s?0<a.length&&!c.$&&(c.$=!0,e=c.l,e.g==c&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),hc(e),e.K=!0,P1(11))):(_3(c.j,c.m,a,"[Invalid Chunked Response]"),h3(c),S4(c))}I.hb=function(){if(this.g){var c=g2(this.g),e=this.g.fa();this.C<e.length&&(d5(this),jv(this,c,e),this.i&&c!=4&&V6(this))}};function Wc1(c,e){var a=c.C,s=e.indexOf(`
`,a);return s==-1?g8:(a=Number(e.substring(a,s)),isNaN(a)?B0:(s+=1,s+a>e.length?g8:(e=e.substr(s,a),c.C=s+a,e)))}I.cancel=function(){this.I=!0,h3(this)};function V6(c){c.V=Date.now()+c.O,Kv(c,c.O)}function Kv(c,e){if(c.B!=null)throw Error("WatchDog timer not null");c.B=d6(w1(c.gb,c),e)}function d5(c){c.B&&(U.clearTimeout(c.B),c.B=null)}I.gb=function(){this.B=null;const c=Date.now();0<=c-this.V?(Oc1(this.j,this.A),this.K!=2&&(j4(),P1(17)),h3(this),this.o=2,S4(this)):Kv(this,this.V-c)};function S4(c){c.l.G==0||c.I||zC(c.l,c)}function h3(c){d5(c);var e=c.L;e&&typeof e.na=="function"&&e.na(),c.L=null,J9(c.T),Ov(c.S),c.g&&(e=c.g,c.g=null,e.abort(),e.na())}function q0(c,e){try{var a=c.l;if(a.G!=0&&(a.g==c||$0(a.h,c))){if(!c.J&&$0(a.h,c)&&a.G==3){try{var s=a.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){c:if(!a.u){if(a.g)if(a.g.F+3e3<c.F)x8(a),L5(a);else break c;fc(a),P1(18)}}else a.Ba=r[1],0<a.Ba-a.T&&37500>r[2]&&a.L&&a.A==0&&!a.v&&(a.v=d6(w1(a.cb,a),6e3));if(1>=aC(a.h)&&a.ja){try{a.ja()}catch{}a.ja=void 0}}else m3(a,11)}else if((c.J||a.g==c)&&x8(a),!V8(e))for(r=a.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(a.T=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.I=l[1],a.ka=l[2];const f=l[3];f!=null&&(a.ma=f,a.j.info("VER="+a.ma));const m=l[4];m!=null&&(a.Ca=m,a.j.info("SVER="+a.Ca));const v=l[5];v!=null&&typeof v=="number"&&0<v&&(s=1.5*v,a.J=s,a.j.info("backChannelRequestTimeoutMs_="+s)),s=a;const C=c.g;if(C){const L=C.g?C.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(L){var i=s.h;i.g||L.indexOf("spdy")==-1&&L.indexOf("quic")==-1&&L.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ic(i,i.h),i.h=null))}if(s.D){const N=C.g?C.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.za=N,f1(s.F,s.D,N))}}a.G=3,a.l&&a.l.xa(),a.$&&(a.P=Date.now()-c.F,a.j.info("Handshake RTT: "+a.P+"ms")),s=a;var n=c;if(s.sa=HC(s,s.H?s.ka:null,s.V),n.J){sC(s.h,n);var t=n,o=s.J;o&&t.setTimeout(o),t.B&&(d5(t),V6(t)),s.g=n}else vC(s);0<a.i.length&&b5(a)}else l[0]!="stop"&&l[0]!="close"||m3(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?m3(a,7):lc(a):l[0]!="noop"&&a.l&&a.l.wa(l),a.A=0)}}j4(4)}catch{}}function Gc1(c){if(c.W&&typeof c.W=="function")return c.W();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(h5(c)){for(var e=[],a=c.length,s=0;s<a;s++)e.push(c[s]);return e}e=[],a=0;for(s in c)e[a++]=c[s];return e}function jc1(c){if(c.oa&&typeof c.oa=="function")return c.oa();if(!c.W||typeof c.W!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(h5(c)||typeof c=="string"){var e=[];c=c.length;for(var a=0;a<c;a++)e.push(a);return e}e=[],a=0;for(const s in c)e[a++]=s;return e}}}function Zv(c,e){if(c.forEach&&typeof c.forEach=="function")c.forEach(e,void 0);else if(h5(c)||typeof c=="string")Array.prototype.forEach.call(c,e,void 0);else for(var a=jc1(c),s=Gc1(c),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],a&&a[i],c)}var Xv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kc1(c,e){if(c){c=c.split("&");for(var a=0;a<c.length;a++){var s=c[a].indexOf("="),r=null;if(0<=s){var i=c[a].substring(0,s);r=c[a].substring(s+1)}else i=c[a];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function z3(c,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,c instanceof z3){this.h=e!==void 0?e:c.h,L8(this,c.j),this.s=c.s,this.g=c.g,b8(this,c.m),this.l=c.l,e=c.i;var a=new K4;a.i=e.i,e.g&&(a.g=new Map(e.g),a.h=e.h),Ca(this,a),this.o=c.o}else c&&(a=String(c).match(Xv))?(this.h=!!e,L8(this,a[1]||"",!0),this.s=C4(a[2]||""),this.g=C4(a[3]||"",!0),b8(this,a[4]),this.l=C4(a[5]||"",!0),Ca(this,a[6]||"",!0),this.o=C4(a[7]||"")):(this.h=!!e,this.i=new K4(null,this.h))}z3.prototype.toString=function(){var c=[],e=this.j;e&&c.push(z4(e,za,!0),":");var a=this.g;return(a||e=="file")&&(c.push("//"),(e=this.s)&&c.push(z4(e,za,!0),"@"),c.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&c.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&c.push("/"),c.push(z4(a,a.charAt(0)=="/"?Yc1:Xc1,!0))),(a=this.i.toString())&&c.push("?",a),(a=this.o)&&c.push("#",z4(a,Qc1)),c.join("")};function y2(c){return new z3(c)}function L8(c,e,a){c.j=a?C4(e,!0):e,c.j&&(c.j=c.j.replace(/:$/,""))}function b8(c,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);c.m=e}else c.m=null}function Ca(c,e,a){e instanceof K4?(c.i=e,ce1(c.i,c.h)):(a||(e=z4(e,Jc1)),c.i=new K4(e,c.h))}function f1(c,e,a){c.i.set(e,a)}function H5(c){return f1(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function C4(c,e){return c?e?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function z4(c,e,a){return typeof c=="string"?(c=encodeURI(c).replace(e,Zc1),a&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Zc1(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var za=/[#\/\?@]/g,Xc1=/[#\?:]/g,Yc1=/[#\?]/g,Jc1=/[#\?@]/g,Qc1=/#/g;function K4(c,e){this.h=this.g=null,this.i=c||null,this.j=!!e}function c3(c){c.g||(c.g=new Map,c.h=0,c.i&&Kc1(c.i,function(e,a){c.add(decodeURIComponent(e.replace(/\+/g," ")),a)}))}I=K4.prototype;I.add=function(c,e){c3(this),this.i=null,c=s4(this,c);var a=this.g.get(c);return a||this.g.set(c,a=[]),a.push(e),this.h+=1,this};function Yv(c,e){c3(c),e=s4(c,e),c.g.has(e)&&(c.i=null,c.h-=c.g.get(e).length,c.g.delete(e))}function Jv(c,e){return c3(c),e=s4(c,e),c.g.has(e)}I.forEach=function(c,e){c3(this),this.g.forEach(function(a,s){a.forEach(function(r){c.call(e,r,s,this)},this)},this)};I.oa=function(){c3(this);const c=Array.from(this.g.values()),e=Array.from(this.g.keys()),a=[];for(let s=0;s<e.length;s++){const r=c[s];for(let i=0;i<r.length;i++)a.push(e[s])}return a};I.W=function(c){c3(this);let e=[];if(typeof c=="string")Jv(this,c)&&(e=e.concat(this.g.get(s4(this,c))));else{c=Array.from(this.g.values());for(let a=0;a<c.length;a++)e=e.concat(c[a])}return e};I.set=function(c,e){return c3(this),this.i=null,c=s4(this,c),Jv(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[e]),this.h+=1,this};I.get=function(c,e){return c?(c=this.W(c),0<c.length?String(c[0]):e):e};function Qv(c,e,a){Yv(c,e),0<a.length&&(c.i=null,c.g.set(s4(c,e),$9(a)),c.h+=a.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],e=Array.from(this.g.keys());for(var a=0;a<e.length;a++){var s=e[a];const i=encodeURIComponent(String(s)),n=this.W(s);for(s=0;s<n.length;s++){var r=i;n[s]!==""&&(r+="="+encodeURIComponent(String(n[s]))),c.push(r)}}return this.i=c.join("&")};function s4(c,e){return e=String(e),c.j&&(e=e.toLowerCase()),e}function ce1(c,e){e&&!c.j&&(c3(c),c.i=null,c.g.forEach(function(a,s){var r=s.toLowerCase();s!=r&&(Yv(this,s),Qv(this,r,a))},c)),c.j=e}var ee1=class{constructor(c,e){this.h=c,this.g=e}};function cC(c){this.l=c||ae1,U.PerformanceNavigationTiming?(c=U.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ae1=10;function eC(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function aC(c){return c.h?1:c.g?c.g.size:0}function $0(c,e){return c.h?c.h==e:c.g?c.g.has(e):!1}function ic(c,e){c.g?c.g.add(e):c.h=e}function sC(c,e){c.h&&c.h==e?c.h=null:c.g&&c.g.has(e)&&c.g.delete(e)}cC.prototype.cancel=function(){if(this.i=rC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function rC(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let e=c.i;for(const a of c.g.values())e=e.concat(a.D);return e}return $9(c.i)}function nc(){}nc.prototype.stringify=function(c){return U.JSON.stringify(c,void 0)};nc.prototype.parse=function(c){return U.JSON.parse(c,void 0)};function se1(){this.g=new nc}function re1(c,e,a){const s=a||"";try{Zv(c,function(r,i){let n=r;z6(r)&&(n=Y9(r)),e.push(s+i+"="+encodeURIComponent(n))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ie1(c,e){const a=new z5;if(U.Image){const s=new Image;s.onload=B6(q6,a,s,"TestLoadImage: loaded",!0,e),s.onerror=B6(q6,a,s,"TestLoadImage: error",!1,e),s.onabort=B6(q6,a,s,"TestLoadImage: abort",!1,e),s.ontimeout=B6(q6,a,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=c}else e(!1)}function q6(c,e,a,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function M5(c){this.l=c.ac||null,this.j=c.jb||!1}b1(M5,ac);M5.prototype.g=function(){return new V5(this.l,this.j)};M5.prototype.i=function(c){return function(){return c}}({});function V5(c,e){V1.call(this),this.D=c,this.u=e,this.m=void 0,this.readyState=tc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b1(V5,V1);var tc=0;I=V5.prototype;I.open=function(c,e){if(this.readyState!=tc)throw this.abort(),Error("Error reopening a connection");this.C=c,this.B=e,this.readyState=1,Z4(this)};I.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};c&&(e.body=c),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,g6(this)),this.readyState=tc};I.Wa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Z4(this)),this.g&&(this.readyState=3,Z4(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iC(this)}else c.text().then(this.Va.bind(this),this.ga.bind(this))};function iC(c){c.j.read().then(c.Ta.bind(c)).catch(c.ga.bind(c))}I.Ta=function(c){if(this.g){if(this.u&&c.value)this.response.push(c.value);else if(!this.u){var e=c.value?c.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!c.done}))&&(this.response=this.responseText+=e)}c.done?g6(this):Z4(this),this.readyState==3&&iC(this)}};I.Va=function(c){this.g&&(this.response=this.responseText=c,g6(this))};I.Ua=function(c){this.g&&(this.response=c,g6(this))};I.ga=function(){this.g&&g6(this)};function g6(c){c.readyState=4,c.l=null,c.j=null,c.A=null,Z4(c)}I.setRequestHeader=function(c,e){this.v.append(c,e)};I.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],e=this.h.entries();for(var a=e.next();!a.done;)a=a.value,c.push(a[0]+": "+a[1]),a=e.next();return c.join(`\r
`)};function Z4(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(V5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});var ne1=U.JSON.parse;function C1(c){V1.call(this),this.headers=new Map,this.u=c||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nC,this.K=this.L=!1}b1(C1,V1);var nC="",te1=/^https?$/i,oe1=["POST","PUT"];I=C1.prototype;I.Ka=function(c){this.L=c};I.da=function(c,e,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+c);e=e?e.toUpperCase():"GET",this.H=c,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():O0.g(),this.C=this.u?va(this.u):va(O0),this.g.onreadystatechange=w1(this.Ha,this);try{this.F=!0,this.g.open(e,String(c),!0),this.F=!1}catch(i){pa(this,i);return}if(c=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)a.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())a.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(a.keys()).find(i=>i.toLowerCase()=="content-type"),r=U.FormData&&c instanceof U.FormData,!(0<=bv(oe1,e))||s||r||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,n]of a)this.g.setRequestHeader(i,n);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lC(this),0<this.B&&((this.K=le1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w1(this.qa,this)):this.A=Q9(this.qa,this.B,this)),this.v=!0,this.g.send(c),this.v=!1}catch(i){pa(this,i)}};function le1(c){return $4&&xc1()&&typeof c.timeout=="number"&&c.ontimeout!==void 0}I.qa=function(){typeof q9<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,L1(this,"timeout"),this.abort(8))};function pa(c,e){c.h=!1,c.g&&(c.l=!0,c.g.abort(),c.l=!1),c.j=e,c.m=5,tC(c),g5(c)}function tC(c){c.D||(c.D=!0,L1(c,"complete"),L1(c,"error"))}I.abort=function(c){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=c||7,L1(this,"complete"),L1(this,"abort"),g5(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),g5(this,!0)),C1.X.M.call(this)};I.Ha=function(){this.s||(this.F||this.v||this.l?oC(this):this.fb())};I.fb=function(){oC(this)};function oC(c){if(c.h&&typeof q9<"u"&&(!c.C[1]||g2(c)!=4||c.aa()!=2)){if(c.v&&g2(c)==4)Q9(c.Ha,0,c);else if(L1(c,"readystatechange"),g2(c)==4){c.h=!1;try{const t=c.aa();c:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break c;default:e=!1}var a;if(!(a=e)){var s;if(s=t===0){var r=String(c.H).match(Xv)[1]||null;if(!r&&U.self&&U.self.location){var i=U.self.location.protocol;r=i.substr(0,i.length-1)}s=!te1.test(r?r.toLowerCase():"")}a=s}if(a)L1(c,"complete"),L1(c,"success");else{c.m=6;try{var n=2<g2(c)?c.g.statusText:""}catch{n=""}c.j=n+" ["+c.aa()+"]",tC(c)}}finally{g5(c)}}}}function g5(c,e){if(c.g){lC(c);const a=c.g,s=c.C[0]?M8:null;c.g=null,c.C=null,e||L1(c,"ready");try{a.onreadystatechange=s}catch{}}}function lC(c){c.g&&c.K&&(c.g.ontimeout=null),c.A&&(U.clearTimeout(c.A),c.A=null)}function g2(c){return c.g?c.g.readyState:0}I.aa=function(){try{return 2<g2(this)?this.g.status:-1}catch{return-1}};I.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Sa=function(c){if(this.g){var e=this.g.responseText;return c&&e.indexOf(c)==0&&(e=e.substring(c.length)),ne1(e)}};function da(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.J){case nC:case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}I.Ea=function(){return this.m};I.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fC(c){let e="";return G9(c,function(a,s){e+=s,e+=":",e+=a,e+=`\r
`}),e}function oc(c,e,a){c:{for(s in a){var s=!1;break c}s=!0}s||(a=fC(a),typeof c=="string"?a!=null&&encodeURIComponent(String(a)):f1(c,e,a))}function f4(c,e,a){return a&&a.internalChannelParams&&a.internalChannelParams[c]||e}function hC(c){this.Ca=0,this.i=[],this.j=new z5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=f4("failFast",!1,c),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=f4("baseRetryDelayMs",5e3,c),this.bb=f4("retryDelaySeedMs",1e4,c),this.$a=f4("forwardChannelMaxRetries",2,c),this.ta=f4("forwardChannelRequestTimeoutMs",2e4,c),this.ra=c&&c.xmlHttpFactory||void 0,this.Da=c&&c.Zb||!1,this.J=void 0,this.H=c&&c.supportsCrossDomainXhr||!1,this.I="",this.h=new cC(c&&c.concurrentRequestLimit),this.Fa=new se1,this.O=c&&c.fastHandshake||!1,this.N=c&&c.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=c&&c.Xb||!1,c&&c.Aa&&this.j.Aa(),c&&c.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&c&&c.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}I=hC.prototype;I.ma=8;I.G=1;function lc(c){if(mC(c),c.G==3){var e=c.U++,a=y2(c.F);f1(a,"SID",c.I),f1(a,"RID",e),f1(a,"TYPE","terminate"),L6(c,a),e=new M6(c,c.j,e,void 0),e.K=2,e.v=H5(y2(a)),a=!1,U.navigator&&U.navigator.sendBeacon&&(a=U.navigator.sendBeacon(e.v.toString(),"")),!a&&U.Image&&(new Image().src=e.v,a=!0),a||(e.g=MC(e.l,null),e.g.da(e.v)),e.F=Date.now(),V6(e)}dC(c)}function L5(c){c.g&&(hc(c),c.g.cancel(),c.g=null)}function mC(c){L5(c),c.u&&(U.clearTimeout(c.u),c.u=null),x8(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&U.clearTimeout(c.m),c.m=null)}function b5(c){eC(c.h)||c.m||(c.m=!0,Iv(c.Ja,c),c.C=0)}function fe1(c,e){return aC(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=e.D.concat(c.i),!0):c.G==1||c.G==2||c.C>=(c.Za?0:c.$a)?!1:(c.m=d6(w1(c.Ja,c,e),pC(c,c.C)),c.C++,!0)}I.Ja=function(c){if(this.m)if(this.m=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const r=new M6(this,this.j,c,void 0);let i=this.s;if(this.S&&(i?(i=yv(i),wv(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)c:{for(var e=0,a=0;a<this.i.length;a++){e:{var s=this.i[a];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=a;break c}if(e===4096||a===this.i.length-1){e=a+1;break c}}e=1e3}else e=1e3;e=uC(this,r,e),a=y2(this.F),f1(a,"RID",c),f1(a,"CVER",22),this.D&&f1(a,"X-HTTP-Session-Id",this.D),L6(this,a),i&&(this.N?e="headers="+encodeURIComponent(String(fC(i)))+"&"+e:this.o&&oc(a,this.o,i)),ic(this.h,r),this.Ya&&f1(a,"TYPE","init"),this.O?(f1(a,"$req",e),f1(a,"SID","null"),r.Z=!0,U0(r,a,null)):U0(r,a,e),this.G=2}}else this.G==3&&(c?Ha(this,c):this.i.length==0||eC(this.h)||Ha(this))};function Ha(c,e){var a;e?a=e.m:a=c.U++;const s=y2(c.F);f1(s,"SID",c.I),f1(s,"RID",a),f1(s,"AID",c.T),L6(c,s),c.o&&c.s&&oc(s,c.o,c.s),a=new M6(c,c.j,a,c.C+1),c.o===null&&(a.H=c.s),e&&(c.i=e.D.concat(c.i)),e=uC(c,a,1e3),a.setTimeout(Math.round(.5*c.ta)+Math.round(.5*c.ta*Math.random())),ic(c.h,a),U0(a,s,e)}function L6(c,e){c.ia&&G9(c.ia,function(a,s){f1(e,s,a)}),c.l&&Zv({},function(a,s){f1(e,s,a)})}function uC(c,e,a){a=Math.min(c.i.length,a);var s=c.l?w1(c.l.Ra,c.l,c):null;c:{var r=c.i;let i=-1;for(;;){const n=["count="+a];i==-1?0<a?(i=r[0].h,n.push("ofs="+i)):i=0:n.push("ofs="+i);let t=!0;for(let o=0;o<a;o++){let l=r[o].h;const f=r[o].g;if(l-=i,0>l)i=Math.max(0,r[o].h-100),t=!1;else try{re1(f,n,"req"+l+"_")}catch{s&&s(f)}}if(t){s=n.join("&");break c}}}return c=c.i.splice(0,a),e.D=c,s}function vC(c){c.g||c.u||(c.Z=1,Iv(c.Ia,c),c.A=0)}function fc(c){return c.g||c.u||3<=c.A?!1:(c.Z++,c.u=d6(w1(c.Ia,c),pC(c,c.A)),c.A++,!0)}I.Ia=function(){if(this.u=null,CC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var c=2*this.P;this.j.info("BP detection timer enabled: "+c),this.B=d6(w1(this.eb,this),c)}};I.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,P1(10),L5(this),CC(this))};function hc(c){c.B!=null&&(U.clearTimeout(c.B),c.B=null)}function CC(c){c.g=new M6(c,c.j,"rpc",c.Z),c.o===null&&(c.g.H=c.s),c.g.N=0;var e=y2(c.sa);f1(e,"RID","rpc"),f1(e,"SID",c.I),f1(e,"CI",c.L?"0":"1"),f1(e,"AID",c.T),f1(e,"TYPE","xmlhttp"),L6(c,e),c.o&&c.s&&oc(e,c.o,c.s),c.J&&c.g.setTimeout(c.J);var a=c.g;c=c.ka,a.K=1,a.v=H5(y2(e)),a.s=null,a.P=!0,Wv(a,c)}I.cb=function(){this.v!=null&&(this.v=null,L5(this),fc(this),P1(19))};function x8(c){c.v!=null&&(U.clearTimeout(c.v),c.v=null)}function zC(c,e){var a=null;if(c.g==e){x8(c),hc(c),c.g=null;var s=2}else if($0(c.h,e))a=e.D,sC(c.h,e),s=1;else return;if(c.G!=0){if(c.pa=e.Y,e.i)if(s==1){a=e.s?e.s.length:0,e=Date.now()-e.F;var r=c.C;s=cc(),L1(s,new qv(s,a)),b5(c)}else vC(c);else if(r=e.o,r==3||r==0&&0<c.pa||!(s==1&&fe1(c,e)||s==2&&fc(c)))switch(a&&0<a.length&&(e=c.h,e.i=e.i.concat(a)),r){case 1:m3(c,5);break;case 4:m3(c,10);break;case 3:m3(c,6);break;default:m3(c,2)}}}function pC(c,e){let a=c.Xa+Math.floor(Math.random()*c.bb);return c.l||(a*=2),a*e}function m3(c,e){if(c.j.info("Error code "+e),e==2){var a=null;c.l&&(a=null);var s=w1(c.kb,c);a||(a=new z3("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||L8(a,"https"),H5(a)),ie1(a.toString(),s)}else P1(2);c.G=0,c.l&&c.l.va(e),dC(c),mC(c)}I.kb=function(c){c?(this.j.info("Successfully pinged google.com"),P1(2)):(this.j.info("Failed to ping google.com"),P1(1))};function dC(c){if(c.G=0,c.la=[],c.l){const e=rC(c.h);(e.length!=0||c.i.length!=0)&&(la(c.la,e),la(c.la,c.i),c.h.i.length=0,$9(c.i),c.i.length=0),c.l.ua()}}function HC(c,e,a){var s=a instanceof z3?y2(a):new z3(a,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),b8(s,s.m);else{var r=U.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new z3(null,void 0);s&&L8(i,s),e&&(i.g=e),r&&b8(i,r),a&&(i.l=a),s=i}return a=c.D,e=c.za,a&&e&&f1(s,a,e),f1(s,"VER",c.ma),L6(c,s),s}function MC(c,e,a){if(e&&!c.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=a&&c.Da&&!c.ra?new C1(new M5({jb:!0})):new C1(c.ra),e.Ka(c.H),e}function VC(){}I=VC.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Ra=function(){};function j1(c,e){V1.call(this),this.g=new hC(e),this.l=c,this.h=e&&e.messageUrlParams||null,c=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.s=c,c=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(c?c["X-WebChannel-Content-Type"]=e.messageContentType:c={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(c?c["X-WebChannel-Client-Profile"]=e.ya:c={"X-WebChannel-Client-Profile":e.ya}),this.g.S=c,(c=e&&e.Yb)&&!V8(c)&&(this.g.o=c),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!V8(e)&&(this.g.D=e,c=this.h,c!==null&&e in c&&(c=this.h,e in c&&delete c[e])),this.j=new r4(this)}b1(j1,V1);j1.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var c=this.g,e=this.l,a=this.h||void 0;P1(0),c.V=e,c.ia=a||{},c.L=c.Y,c.F=HC(c,null,c.V),b5(c)};j1.prototype.close=function(){lc(this.g)};j1.prototype.u=function(c){var e=this.g;if(typeof c=="string"){var a={};a.__data__=c,c=a}else this.v&&(a={},a.__data__=Y9(c),c=a);e.i.push(new ee1(e.ab++,c)),e.G==3&&b5(e)};j1.prototype.M=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,j1.X.M.call(this)};function gC(c){sc.call(this);var e=c.__sm__;if(e){c:{for(const a in e){c=a;break c}c=void 0}(this.i=c)&&(c=this.i,e=e!==null&&c in e?e[c]:void 0),this.data=e}else this.data=c}b1(gC,sc);function LC(){rc.call(this),this.status=1}b1(LC,rc);function r4(c){this.g=c}b1(r4,VC);r4.prototype.xa=function(){L1(this.g,"a")};r4.prototype.wa=function(c){L1(this.g,new gC(c))};r4.prototype.va=function(c){L1(this.g,new LC)};r4.prototype.ua=function(){L1(this.g,"b")};j1.prototype.send=j1.prototype.u;j1.prototype.open=j1.prototype.m;j1.prototype.close=j1.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;Uc1.COMPLETE="complete";qc1.EventType=H6;H6.OPEN="a";H6.CLOSE="b";H6.ERROR="c";H6.MESSAGE="d";V1.prototype.listen=V1.prototype.N;C1.prototype.listenOnce=C1.prototype.O;C1.prototype.getLastError=C1.prototype.Oa;C1.prototype.getLastErrorCode=C1.prototype.Ea;C1.prototype.getStatus=C1.prototype.aa;C1.prototype.getResponseJson=C1.prototype.Sa;C1.prototype.getResponseText=C1.prototype.fa;C1.prototype.send=C1.prototype.da;C1.prototype.setWithCredentials=C1.prototype.Ka;const Ma="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}x1.UNAUTHENTICATED=new x1(null),x1.GOOGLE_CREDENTIALS=new x1("google-credentials-uid"),x1.FIRST_PARTY=new x1("first-party-uid"),x1.MOCK_USER=new x1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b6="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=new p7("@firebase/firestore");function U1(c,...e){if(X3.logLevel<=c1.DEBUG){const a=e.map(uc);X3.debug(`Firestore (${b6}): ${c}`,...a)}}function mc(c,...e){if(X3.logLevel<=c1.ERROR){const a=e.map(uc);X3.error(`Firestore (${b6}): ${c}`,...a)}}function he1(c,...e){if(X3.logLevel<=c1.WARN){const a=e.map(uc);X3.warn(`Firestore (${b6}): ${c}`,...a)}}function uc(c){if(typeof c=="string")return c;try{return e=c,JSON.stringify(e)}catch{return c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(c="Unexpected state"){const e=`FIRESTORE (${b6}) INTERNAL ASSERTION FAILED: `+c;throw mc(e),new Error(e)}function S8(c,e){c||vc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $1 extends k2{constructor(e,a){super(e,a),this.code=e,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(){this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class me1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,a){e.enqueueRetryable(()=>a(x1.UNAUTHENTICATED))}shutdown(){}}class ue1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,a){this.changeListener=a,e.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class ve1{constructor(e){this.t=e,this.currentUser=x1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,a){let s=this.i;const r=o=>this.i!==s?(s=this.i,a(o)):Promise.resolve();let i=new U3;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new U3,e.enqueueRetryable(()=>r(this.currentUser))};const n=()=>{const o=i;e.enqueueRetryable(async()=>{await o.promise,await r(this.currentUser)})},t=o=>{U1("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(o=>t(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?t(o):(U1("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new U3)}},0),n()}getToken(){const e=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(s=>this.i!==e?(U1("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(S8(typeof s.accessToken=="string"),new bC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S8(e===null||typeof e=="string"),new x1(e)}}class Ce1{constructor(e,a,s,r){this.h=e,this.l=a,this.m=s,this.g=r,this.type="FirstParty",this.user=x1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(S8(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ze1{constructor(e,a,s,r){this.h=e,this.l=a,this.m=s,this.g=r}getToken(){return Promise.resolve(new Ce1(this.h,this.l,this.m,this.g))}start(e,a){e.enqueueRetryable(()=>a(x1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pe1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class de1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,a){const s=i=>{i.error!=null&&U1("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const n=i.token!==this.A;return this.A=i.token,U1("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?a(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U1("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U1("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(a=>a?(S8(typeof a.token=="string"),this.A=a.token,new pe1(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He1(c){const e=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(c);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(a);else for(let s=0;s<c;s++)a[s]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=He1(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<a&&(s+=e.charAt(r[i]%e.length))}return s}}function xC(c){return c.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve1{constructor(e,a,s,r,i,n,t,o){this.databaseId=e,this.appId=a,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=n,this.autoDetectLongPolling=t,this.useFetchStreams=o}}class N8{constructor(e,a){this.projectId=e,this.database=a||"(default)"}static empty(){return new N8("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof N8&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va,X;(X=Va||(Va={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";function Y5(){return typeof document<"u"?document:null}class ge1{constructor(e,a,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=a,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const a=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,a-s);r>0&&U1("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${a} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,a,s,r,i){this.asyncQueue=e,this.timerId=a,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new U3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}static createAndSchedule(e,a,s,r,i){const n=Date.now()+s,t=new Cc(e,a,n,r,i);return t.start(s),t}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $1(q1.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Le1(c,e){if(mc("AsyncQueue",`${e}: ${c}`),xC(c))return new $1(q1.UNAVAILABLE,`${e}: ${c}`);throw c}function be1(c,e,a,s){if(e===!0&&s===!0)throw new $1(q1.INVALID_ARGUMENT,`${c} and ${a} cannot be used together.`)}function xe1(c){if(c===void 0)return"undefined";if(c===null)return"null";if(typeof c=="string")return c.length>20&&(c=`${c.substring(0,20)}...`),JSON.stringify(c);if(typeof c=="number"||typeof c=="boolean")return""+c;if(typeof c=="object"){if(c instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(c);return e?`a custom ${e} object`:"an object"}}return typeof c=="function"?"a function":vc()}function Se1(c,e){if("_delegate"in c&&(c=c._delegate),!(c instanceof e)){if(e.name===c.constructor.name)throw new $1(q1.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=xe1(c);throw new $1(q1.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${a}`)}}return c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;class La{constructor(e){var a;if(e.host===void 0){if(e.ssl!==void 0)throw new $1(q1.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(a=e.ssl)===null||a===void 0||a;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $1(q1.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,be1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,a,s,r){this._authCredentials=e,this._appCheckCredentials=a,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new La({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $1(q1.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $1(q1.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new La(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new me1;switch(a.type){case"gapi":const s=a.client;return new ze1(s,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new $1(q1.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const a=ga.get(e);a&&(U1("ComponentProvider","Removing Datastore"),ga.delete(e),a.terminate())}(this),Promise.resolve()}}function Ne1(c,e,a,s={}){var r;const i=(c=Se1(c,SC))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&he1("Host has been set in both settings() and useEmulator(), emulator host will be used"),c._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${a}`,ssl:!1})),s.mockUserToken){let n,t;if(typeof s.mockUserToken=="string")n=s.mockUserToken,t=x1.MOCK_USER;else{n=TH(s.mockUserToken,(r=c._app)===null||r===void 0?void 0:r.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new $1(q1.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");t=new x1(o)}c._authCredentials=new ue1(new bC(n,t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye1{constructor(e,a,s,r){this.authCredentials=e,this.appCheckCredentials=a,this.asyncQueue=s,this.databaseInfo=r,this.user=x1.UNAUTHENTICATED,this.clientId=Me1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U1("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U1("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $1(q1.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new U3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){const s=Le1(a,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class we1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ge1(this,"async_queue_retry"),this.Wc=()=>{const a=Y5();a&&U1("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};const e=Y5();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const a=Y5();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const a=new U3;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!xC(e))throw e;U1("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const a=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let n=i.message||"";return i.stack&&(n=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),n}(s);throw mc("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=a,a}enqueueAfterDelay(e,a,s){this.zc(),this.jc.indexOf(e)>-1&&(a=0);const r=Cc.createAndSchedule(this,e,a,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&vc()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const a of this.qc)if(a.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((a,s)=>a.targetTimeMs-s.targetTimeMs);for(const a of this.qc)if(a.skipDelay(),e!=="all"&&a.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const a=this.qc.indexOf(e);this.qc.splice(a,1)}}class ke1 extends SC{constructor(e,a,s,r){super(e,a,s,r),this.type="firestore",this._queue=new we1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Te1(this),this._firestoreClient.terminate()}}function Ae1(c,e){const a=typeof c=="object"?c:Rs(),s=typeof c=="string"?c:e||"(default)",r=H7(a,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=wH("firestore");i&&Ne1(r,...i)}return r}function Te1(c){var e;const a=c._freezeSettings(),s=function(r,i,n,t){return new Ve1(r,i,n,t.host,t.ssl,t.experimentalForceLongPolling,t.experimentalAutoDetectLongPolling,t.useFetchStreams)}(c._databaseId,((e=c._app)===null||e===void 0?void 0:e.options.appId)||"",c._persistenceKey,a);c._firestoreClient=new ye1(c._authCredentials,c._appCheckCredentials,c._queue,s)}(function(c,e=!0){(function(a){b6=a})(c6),K3(new p3("firestore",(a,{instanceIdentifier:s,options:r})=>{const i=a.getProvider("app").getImmediate(),n=new ke1(new ve1(a.getProvider("auth-internal")),new de1(a.getProvider("app-check-internal")),function(t,o){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $1(q1.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new N8(t.options.projectId,o)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),n._setSettings(r),n},"PUBLIC").setMultipleInstances(!0)),K2(Ma,"3.7.3",c),K2(Ma,"3.7.3","esm2017")})();U7.add(MJ);U7.add(e01);U7.add(hc1);Jp(hd).component("font-awesome-icon",Xb).use(aL()).use(M0).mount("#app");const _e1={apiKey:"AIzaSyA9F9VSha2ecdcuJBBU1_tZDopqjPj8Bvo",authDomain:"health-u-4ff8d.firebaseapp.com",projectId:"health-u-4ff8d",storageBucket:"health-u-4ff8d.appspot.com",messagingSenderId:"490002603398",appId:"1:490002603398:web:8a76289cfd00d0e171a007"},Ee1=Is(_e1);Ae1(Ee1);export{ps as N,u7 as _,us as a,d1 as b,Pe1 as c,D3 as d,dp as e,y1 as f,Cr as g,f7 as o,ss as r,Zp as w};