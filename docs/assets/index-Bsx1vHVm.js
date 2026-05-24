(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function k(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=k(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}var be=e=>!!(e&&e.__v_isRef===!0),A=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?be(e)?A(e.value):JSON.stringify(e,xe,2):String(e),xe=(e,t)=>be(t)?xe(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Se(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Se(e))}:_(t)?Se(t):v(t)&&!d(t)&&!C(t)?String(t):t,Se=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,j,Ce=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=j,!e&&j&&(this.index=(j.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function we(e){return new Ce(e)}function Te(){return j}var M,Ee=new WeakSet,De=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&j.active&&j.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ee.has(this)&&(Ee.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||je(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,We(this),Pe(this);let e=M,t=Be;M=this,Be=!0;try{return this.fn()}finally{Fe(this),M=e,Be=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Re(e);this.deps=this.depsTail=void 0,We(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ee.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ie(this)&&this.run()}get dirty(){return Ie(this)}},Oe=0,ke,Ae;function je(e,t=!1){if(e.flags|=8,t){e.next=Ae,Ae=e;return}e.next=ke,ke=e}function Me(){Oe++}function Ne(){if(--Oe>0)return;if(Ae){let e=Ae;for(Ae=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ke;){let t=ke;for(ke=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Pe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Re(r),ze(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ie(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Le(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Le(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ge)||(e.globalVersion=Ge,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ie(e))))return;e.flags|=2;let t=e.dep,n=M,r=Be;M=e,Be=!0;try{Pe(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,Be=r,Fe(e),e.flags&=-3}}function Re(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Re(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ze(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Be=!0,Ve=[];function He(){Ve.push(Be),Be=!1}function Ue(){let e=Ve.pop();Be=e===void 0?!0:e}function We(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var Ge=0,Ke=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},qe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!Be||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new Ke(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,Je(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,Ge++,this.notify(e)}notify(e){Me();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ne()}}};function Je(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Je(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ye=new WeakMap,Xe=Symbol(``),Ze=Symbol(``),Qe=Symbol(``);function N(e,t,n){if(Be&&M){let t=Ye.get(e);t||Ye.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new qe),r.map=t,r.key=n),r.track()}}function $e(e,t,n,r,i,a){let o=Ye.get(e);if(!o){Ge++;return}let s=e=>{e&&e.trigger()};if(Me(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Qe||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Qe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Xe)),f(e)&&s(o.get(Ze)));break;case`delete`:i||(s(o.get(Xe)),f(e)&&s(o.get(Ze)));break;case`set`:f(e)&&s(o.get(Xe));break}}Ne()}function et(e){let t=F(e);return t===e?t:(N(t,`iterate`,Qe),P(e)?t:t.map(Ht))}function tt(e){return N(e=F(e),`iterate`,Qe),e}function nt(e,t){return zt(e)?Ut(Rt(e)?Ht(t):t):Ht(t)}var rt={__proto__:null,[Symbol.iterator](){return it(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return et(this).concat(...e.map(e=>d(e)?et(e):e))},entries(){return it(this,`entries`,e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ot(this,`every`,e,t,void 0,arguments)},filter(e,t){return ot(this,`filter`,e,t,e=>e.map(e=>nt(this,e)),arguments)},find(e,t){return ot(this,`find`,e,t,e=>nt(this,e),arguments)},findIndex(e,t){return ot(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ot(this,`findLast`,e,t,e=>nt(this,e),arguments)},findLastIndex(e,t){return ot(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ot(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ct(this,`includes`,e)},indexOf(...e){return ct(this,`indexOf`,e)},join(e){return et(this).join(e)},lastIndexOf(...e){return ct(this,`lastIndexOf`,e)},map(e,t){return ot(this,`map`,e,t,void 0,arguments)},pop(){return lt(this,`pop`)},push(...e){return lt(this,`push`,e)},reduce(e,...t){return st(this,`reduce`,e,t)},reduceRight(e,...t){return st(this,`reduceRight`,e,t)},shift(){return lt(this,`shift`)},some(e,t){return ot(this,`some`,e,t,void 0,arguments)},splice(...e){return lt(this,`splice`,e)},toReversed(){return et(this).toReversed()},toSorted(e){return et(this).toSorted(e)},toSpliced(...e){return et(this).toSpliced(...e)},unshift(...e){return lt(this,`unshift`,e)},values(){return it(this,`values`,e=>nt(this,e))}};function it(e,t,n){let r=tt(e),i=r[t]();return r!==e&&!P(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var at=Array.prototype;function ot(e,t,n,r,i,a){let o=tt(e),s=o!==e&&!P(e),c=o[t];if(c!==at[t]){let t=c.apply(e,a);return s?Ht(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,nt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function st(e,t,n,r){let i=tt(e),a=i!==e&&!P(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=nt(e,t)),n.call(this,t,nt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?nt(e,c):c}function ct(e,t,n){let r=F(e);N(r,`iterate`,Qe);let i=r[t](...n);return(i===-1||i===!1)&&Bt(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function lt(e,t,n=[]){He(),Me();let r=F(e)[t].apply(e,n);return Ne(),Ue(),r}var ut=e(`__proto__,__v_isRef,__isVue`),dt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ft(e){_(e)||(e=String(e));let t=F(this);return N(t,`has`,e),t.hasOwnProperty(e)}var pt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?jt:At:i?kt:Ot).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=rt[t]))return e;if(t===`hasOwnProperty`)return ft}let o=Reflect.get(e,t,I(e)?e:n);if((_(t)?dt.has(t):ut(t))||(r||N(e,`get`,t),i))return o;if(I(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?It(e):e}return v(o)?r?It(o):Pt(o):o}},mt=class extends pt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=zt(i);if(!P(n)&&!zt(n)&&(i=F(i),n=F(n)),!a&&I(i)&&!I(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,I(e)?e:r);return e===F(r)&&(o?D(n,i)&&$e(e,`set`,t,n,i):$e(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&$e(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!dt.has(t))&&N(e,`has`,t),n}ownKeys(e){return N(e,`iterate`,d(e)?`length`:Xe),Reflect.ownKeys(e)}},ht=class extends pt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},gt=new mt,_t=new ht,vt=new mt(!0),yt=e=>e,bt=e=>Reflect.getPrototypeOf(e);function xt(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?yt:t?Ut:Ht;return!t&&N(a,`iterate`,l?Ze:Xe),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function St(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ct(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(D(n,a)&&N(i,`get`,n),N(i,`get`,a));let{has:o}=bt(i),s=t?yt:e?Ut:Ht;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&N(F(t),`iterate`,Xe),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(D(t,i)&&N(r,`has`,t),N(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?yt:e?Ut:Ht;return!e&&N(o,`iterate`,Xe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:St(`add`),set:St(`set`),delete:St(`delete`),clear:St(`clear`)}:{add(e){let n=F(this),r=bt(n),i=F(e),a=!t&&!P(e)&&!zt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),$e(n,`add`,a,a)),this},set(e,n){!t&&!P(n)&&!zt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=bt(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&$e(r,`set`,e,n,s):$e(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=bt(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&$e(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&$e(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=xt(r,e,t)}),n}function wt(e,t){let n=Ct(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Tt={get:wt(!1,!1)},Et={get:wt(!1,!0)},Dt={get:wt(!0,!1)},Ot=new WeakMap,kt=new WeakMap,At=new WeakMap,jt=new WeakMap;function Mt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Nt(e){return e.__v_skip||!Object.isExtensible(e)?0:Mt(S(e))}function Pt(e){return zt(e)?e:Lt(e,!1,gt,Tt,Ot)}function Ft(e){return Lt(e,!1,vt,Et,kt)}function It(e){return Lt(e,!0,_t,Dt,At)}function Lt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Nt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Rt(e){return zt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function P(e){return!!(e&&e.__v_isShallow)}function Bt(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Vt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Ht=e=>v(e)?Pt(e):e,Ut=e=>v(e)?It(e):e;function I(e){return e?e.__v_isRef===!0:!1}function Wt(e){return Kt(e,!1)}function Gt(e){return Kt(e,!0)}function Kt(e,t){return I(e)?e:new qt(e,t)}var qt=class{constructor(e,t){this.dep=new qe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||P(e)||zt(e);e=n?e:F(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Ht(e),this.dep.trigger())}};function Jt(e){return I(e)?e.value:e}var Yt={get:(e,t,n)=>t===`__v_raw`?e:Jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return I(i)&&!I(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return Rt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new qe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ge-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return je(this,!0),!0}get value(){let e=this.dep.track();return Le(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Qt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Zt(r,i,n)}var $t={},en=new WeakMap,tn=void 0;function nn(e,t=!1,n=tn){if(n){let t=en.get(n);t||en.set(n,t=[]),t.push(e)}}function rn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:P(e)||o===!1||o===0?an(e,1):an(e),m,g,_,v,y=!1,b=!1;if(I(e)?(g=()=>e.value,y=P(e)):Rt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Rt(e)||P(e)),g=()=>e.map(e=>{if(I(e))return e.value;if(Rt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){He();try{_()}finally{Ue()}}let t=tn;tn=m;try{return f?f(e,3,[v]):e(v)}finally{tn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>an(e(),t)}let x=Te(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill($t):$t,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>D(e,C[t])):D(e,C))){_&&_();let t=tn;tn=m;try{let t=[e,C===$t?void 0:b&&C[0]===$t?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{tn=t}}}else m.run()};return u&&u(w),m=new De(g),m.scheduler=l?()=>l(w,!1):w,v=e=>nn(e,!1,m),_=m.onStop=()=>{let e=en.get(m);if(e){if(f)f(e,4);else for(let t of e)t();en.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function an(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,I(e))an(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)an(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{an(e,t,n)});else if(C(e)){for(let r in e)an(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&an(e[r],t,n)}return e}function on(e,t,n,r){try{return r?e(...r):e()}catch(e){cn(e,t,n)}}function sn(e,t,n,r){if(h(e)){let i=on(e,t,n,r);return i&&y(i)&&i.catch(e=>{cn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(sn(e[a],t,n,r));return i}}function cn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){He(),on(o,null,10,[e,i,a]),Ue();return}}ln(e,r,a,i,s)}function ln(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var L=[],un=-1,dn=[],fn=null,pn=0,mn=Promise.resolve(),hn=null;function gn(e){let t=hn||mn;return e?t.then(this?e.bind(this):e):t}function _n(e){let t=un+1,n=L.length;for(;t<n;){let r=t+n>>>1,i=L[r],a=Cn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function vn(e){if(!(e.flags&1)){let t=Cn(e),n=L[L.length-1];!n||!(e.flags&2)&&t>=Cn(n)?L.push(e):L.splice(_n(t),0,e),e.flags|=1,yn()}}function yn(){hn||=mn.then(wn)}function bn(e){d(e)?dn.push(...e):fn&&e.id===-1?fn.splice(pn+1,0,e):e.flags&1||(dn.push(e),e.flags|=1),yn()}function xn(e,t,n=un+1){for(;n<L.length;n++){let t=L[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;L.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Sn(e){if(dn.length){let e=[...new Set(dn)].sort((e,t)=>Cn(e)-Cn(t));if(dn.length=0,fn){fn.push(...e);return}for(fn=e,pn=0;pn<fn.length;pn++){let e=fn[pn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}fn=null,pn=0}}var Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wn(e){try{for(un=0;un<L.length;un++){let e=L[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),on(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<L.length;un++){let e=L[un];e&&(e.flags&=-2)}un=-1,L.length=0,Sn(e),hn=null,(L.length||dn.length)&&wn(e)}}var R=null,Tn=null;function En(e){let t=R;return R=e,Tn=e&&e.type.__scopeId||null,t}function z(e,t=R,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ni(-1);let i=En(t),a;try{a=e(...n)}finally{En(i),r._d&&Ni(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(He(),sn(c,n,8,[e.el,s,e,t]),Ue())}}function On(e,t){if(Y){let n=Y.provides,r=Y.parent&&Y.parent.provides;r===n&&(n=Y.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){let r=Qi();if(r||Rr){let i=Rr?Rr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var An=Symbol.for(`v-scx`),jn=()=>kn(An);function Mn(e,t,n){return Nn(e,t,n)}function Nn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ia){if(c===`sync`){let e=jn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Y;u.call=(e,t,n)=>sn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{V(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():vn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=rn(e,n,u);return ia&&(f?f.push(h):d&&h()),h}function Pn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Fn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ta(this),s=Nn(i,a.bind(r),n);return o(),s}function Fn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var In=Symbol(`_vte`),Ln=e=>e.__isTeleport,Rn=Symbol(`_leaveCb`);function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Vn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Hn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Un=new WeakMap;function Wn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Wn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Kn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Wn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?pa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=F(v),b=v===t?i:e=>Hn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Hn(_,t));if(m!=null&&m!==p){if(Gn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(I(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))on(p,f,12,[l,_]);else{let t=g(p),n=I(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Un.delete(e)};t.id=-1,Un.set(e,t),V(t,r)}else Gn(e),i()}}}function Gn(e){let t=Un.get(e);t&&(t.flags|=8,Un.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Kn=e=>!!e.type.__asyncLoader,qn=e=>e.type.__isKeepAlive;function Jn(e,t){Xn(e,`a`,t)}function Yn(e,t){Xn(e,`da`,t)}function Xn(e,t,n=Y){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Qn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)qn(e.parent.vnode)&&Zn(r,t,n,e),e=e.parent}}function Zn(e,t,n,r){let i=Qn(t,e,r,!0);ar(()=>{c(r[t],i)},n)}function Qn(e,t,n=Y,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{He();let i=ta(n),a=sn(t,n,e,r);return i(),Ue(),a};return r?i.unshift(a):i.push(a),a}}var $n=e=>(t,n=Y)=>{(!ia||e===`sp`)&&Qn(e,(...e)=>t(...e),n)},er=$n(`bm`),tr=$n(`m`),nr=$n(`bu`),rr=$n(`u`),ir=$n(`bum`),ar=$n(`um`),or=$n(`sp`),sr=$n(`rtg`),cr=$n(`rtc`);function lr(e,t=Y){Qn(`ec`,e,t)}var ur=`components`;function dr(e,t){return pr(ur,e,!0,t)||e}var fr=Symbol.for(`v-ndc`);function pr(e,t,n=!0,r=!1){let i=R||Y;if(i){let n=i.type;if(e===ur){let e=ma(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=mr(i[e]||n[e],t)||mr(i.appContext[e],t);return!a&&r?n:a}}function mr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}function hr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Rt(e),r=!1,s=!1;n&&(r=!P(e),s=zt(e),e=tt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ut(Ht(e[n])):Ht(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var gr=e=>e?ra(e)?pa(e):gr(e.parent):null,_r=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Er(e),$forceUpdate:e=>e.f||=()=>{vn(e.update)},$nextTick:e=>e.n||=gn.bind(e.proxy),$watch:e=>Pn.bind(e)}),vr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),yr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(vr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else xr&&(s[n]=0)}let d=_r[n],f,p;if(d)return n===`$attrs`&&N(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return vr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||vr(n,c)||u(o,c)||u(i,c)||u(_r,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function br(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var xr=!0;function Sr(e){let t=Er(e),n=e.proxy,i=e.ctx;xr=!1,t.beforeCreate&&wr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&Cr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Pt(t))}if(xr=!0,o)for(let e in o){let t=o[e],a=ga({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Tr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{On(t,e[t])})}f&&wr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(er,p),O(tr,m),O(nr,g),O(rr,_),O(Jn,y),O(Yn,b),O(lr,T),O(cr,te),O(sr,ne),O(ir,S),O(ar,w),O(or,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&Vn(e)}function Cr(e,t,n=r){d(e)&&(e=jr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?kn(r.from||n,r.default,!0):kn(r.from||n):kn(r),I(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function wr(e,t,n){sn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tr(e,t,n,r){let i=r.includes(`.`)?Fn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Mn(i,n)}else if(h(e))Mn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Tr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Mn(i,r,e)}}function Er(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Dr(c,e,o,!0)),Dr(c,t,o)),v(t)&&a.set(t,c),c}function Dr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Dr(e,a,n,!0),i&&i.forEach(t=>Dr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Or[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Or={data:kr,props:Nr,emits:Nr,methods:Mr,computed:Mr,beforeCreate:B,created:B,beforeMount:B,mounted:B,beforeUpdate:B,updated:B,beforeDestroy:B,beforeUnmount:B,destroyed:B,unmounted:B,activated:B,deactivated:B,errorCaptured:B,serverPrefetch:B,components:Mr,directives:Mr,watch:Pr,provide:kr,inject:Ar};function kr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Ar(e,t){return Mr(jr(e),jr(t))}function jr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function B(e,t){return e?[...new Set([].concat(e,t))]:t}function Mr(e,t){return e?s(Object.create(null),e,t):t}function Nr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),br(e),br(t??{})):t}function Pr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=B(e[r],t[r]);return n}function Fr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ir=0;function Lr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Fr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ir++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:va,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||q(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,pa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(sn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Rr;Rr=l;try{return e()}finally{Rr=t}}};return l}}var Rr=null,zr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function Br(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&zr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&sn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,sn(u,e,6,a)}}var Vr=new WeakMap;function Hr(e,t,n=!1){let r=n?Vr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Hr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Ur(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Wr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=En(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Wi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Wi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Gr(c)}}catch(t){Ai.length=0,cn(t,e,1),v=q(Oi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Kr(y,a)),b=Hi(b,y,!1,!0))}return n.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&zn(b,n.transition),v=b,En(_),v}var Gr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Kr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Jr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Yr(o,r,n)&&!Ur(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Jr(r,o,l):!0:!!o;return!1}function Jr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Yr(t,e,a)&&!Ur(n,a))return!0}return!1}function Yr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function Xr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Zr={},Qr=()=>Object.create(Zr),$r=e=>Object.getPrototypeOf(e)===Zr;function ei(e,t,n,r=!1){let i={},a=Qr();e.propsDefaults=Object.create(null),ni(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ft(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ti(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ur(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ri(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ni(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ri(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&$e(e.attrs,`set`,``)}function ni(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Ur(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=F(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ri(a,n,s,i[s],e,!u(i,s))}}return s}function ri(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ta(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var ii=new WeakMap;function ai(e,r,i=!1){let a=i?ii:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ai(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);oi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(oi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function oi(e){return e[0]!==`$`&&!ee(e)}var si=e=>e===`_`||e===`_ctx`||e===`$stable`,ci=e=>d(e)?e.map(Wi):[Wi(e)],li=(e,t,n)=>{if(t._n)return t;let r=z((...e)=>ci(t(...e)),n);return r._c=!1,r},ui=(e,t,n)=>{let r=e._ctx;for(let n in e){if(si(n))continue;let i=e[n];if(h(i))t[n]=li(n,i,r);else if(i!=null){let e=ci(i);t[n]=()=>e}}},di=(e,t)=>{let n=ci(t);e.slots.default=()=>n},fi=(e,t,n)=>{for(let r in t)(n||!si(r))&&(e[r]=t[r])},pi=(e,t,n)=>{let r=e.slots=Qr();if(e.vnode.shapeFlag&32){let e=t._;e?(fi(r,t,n),n&&O(r,`_`,e,!0)):ui(t,r)}else t&&di(e,t)},mi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:fi(a,n,r):(o=!n.$stable,ui(n,a)),s=n}else n&&(di(e,n),s={default:1});if(o)for(let e in a)!si(e)&&s[e]==null&&delete a[e]},V=Ei;function hi(e){return gi(e)}function gi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Li(e,t)&&(r=ye(e),k(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Di:y(e,t,n,r);break;case Oi:b(e,t,n,r);break;case ki:e??x(t,n,r,o);break;case H:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,xe)}u!=null&&i?Wn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Wn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,_i(e,a),s,u),_&&Dn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ji(f,r,e)}_&&Dn(e,null,r,`beforeMount`);let v=yi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&V(()=>{try{f&&Ji(f,r,e),v&&g.enter(d),_&&Dn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ti(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Gi(e[l]):Wi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&vi(r,!1),(g=h.onVnodeBeforeUpdate)&&Ji(g,r,n,e),f&&Dn(n,e,r,`beforeUpdate`),r&&vi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,_i(n,a),o):s||de(e,n,l,null,r,i,_i(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&V(()=>{g&&Ji(g,r,n,e),f&&Dn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===H||!Li(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&bi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=Zi(e,r,i);if(qn(e)&&(s.ctx.renderer=xe),aa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=q(Oi);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(qr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ue(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Si(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{V(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;vi(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ji(d,s,t,c),vi(e,!0);let f=Wr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&Xr(e,f.el),r&&V(r,i),(d=t.props&&t.props.onVnodeUpdated)&&V(()=>Ji(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Kn(t);if(vi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ji(o,d,t),vi(e,!0),s&&j){let t=()=>{e.subTree=Wr(e),j(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Wr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&V(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;V(()=>Ji(o,d,e),i)}(t.shapeFlag&256||d&&Kn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&V(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new De(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>vn(u),vi(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ti(e,t.props,r,n),mi(e,t.children,n),He(),xn(e),Ue()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}else if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Gi(t[p]):Wi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Gi(t[u]):Wi(t[u]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Gi(t[p]):Wi(t[p]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Gi(t[u]):Wi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)k(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Gi(t[u]):Wi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){k(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Li(n,t[_])){i=_;break}i===void 0?k(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?xi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||wi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){me(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,xe);return}if(c===H){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ki){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),V(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Rn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},k=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(He(),Wn(s,null,n,e,!0),Ue()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Kn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ji(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Dn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==H||d>0&&d&64)?ve(l,t,n,!1,!0):(a===H&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&V(()=>{_&&Ji(_,t,e),h&&Dn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===H){ge(n,r);return}if(t===ki){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ci(c),Ci(l),r&&oe(r),i.stop(),a&&(a.flags|=8,k(o,e,t,n)),s&&V(s,t),V(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)k(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[In];return n?h(n):t},be=!1,A=(e,t,n)=>{let r;e==null?t._vnode&&(k(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,xn(r),Sn(),!1)},xe={p:v,um:k,m:me,r:he,mt:O,mc:T,pc:de,pbc:E,n:ye,o:e},Se,j;return i&&([Se,j]=i(xe)),{render:A,hydrate:Se,createApp:Lr(A,Se)}}function _i({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function vi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Gi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&bi(t,a)),a.type===Di&&(a.patchFlag===-1&&(a=i[e]=Gi(a)),a.el=t.el),a.type===Oi&&!a.el&&(a.el=t.el)}}function xi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Si(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function Ci(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function wi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?wi(t.subTree):null}var Ti=e=>e.__isSuspense;function Ei(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):bn(e)}var H=Symbol.for(`v-fgt`),Di=Symbol.for(`v-txt`),Oi=Symbol.for(`v-cmt`),ki=Symbol.for(`v-stc`),Ai=[],U=null;function W(e=!1){Ai.push(U=e?null:[])}function ji(){Ai.pop(),U=Ai[Ai.length-1]||null}var Mi=1;function Ni(e,t=!1){Mi+=e,e<0&&U&&t&&(U.hasOnce=!0)}function Pi(e){return e.dynamicChildren=Mi>0?U||n:null,ji(),Mi>0&&U&&U.push(e),e}function G(e,t,n,r,i,a){return Pi(K(e,t,n,r,i,a,!0))}function Fi(e,t,n,r,i){return Pi(q(e,t,n,r,i,!0))}function Ii(e){return e?e.__v_isVNode===!0:!1}function Li(e,t){return e.type===t.type&&e.key===t.key}var Ri=({key:e})=>e??null,zi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||I(e)||h(e)?{i:R,r:e,k:t,f:!!n}:e);function K(e,t=null,n=null,r=0,i=null,a=e===H?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&zi(t),scopeId:Tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R};return s?(Ki(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Mi>0&&!o&&U&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&U.push(c),c}var q=Bi;function Bi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===fr)&&(e=Oi),Ii(e)){let r=Hi(e,t,!0);return n&&Ki(r,n),Mi>0&&!a&&U&&(r.shapeFlag&6?U[U.indexOf(e)]=r:U.push(r)),r.patchFlag=-2,r}if(ha(e)&&(e=e.__vccOpts),t){t=Vi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=k(e)),v(n)&&(Bt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Ti(e)?128:Ln(e)?64:v(e)?4:h(e)?2:0;return K(e,t,n,r,i,o,a,!0)}function Vi(e){return e?Bt(e)||$r(e)?s({},e):e:null}function Hi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?qi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ri(l),ref:t&&t.ref?n&&a?d(a)?a.concat(zi(t)):[a,zi(t)]:zi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==H?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hi(e.ssContent),ssFallback:e.ssFallback&&Hi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&zn(u,c.clone(u)),u}function J(e=` `,t=0){return q(Di,null,e,t)}function Ui(e=``,t=!1){return t?(W(),Fi(Oi,null,e)):q(Oi,null,e)}function Wi(e){return e==null||typeof e==`boolean`?q(Oi):d(e)?q(H,null,e.slice()):Ii(e)?Gi(e):q(Di,null,String(e))}function Gi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hi(e)}function Ki(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ki(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!$r(t)?t._ctx=R:r===3&&R&&(R.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:R},n=32):(t=String(t),r&64?(n=16,t=[J(t)]):n=8);e.children=t,e.shapeFlag|=n}function qi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=k([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ji(e,t,n,r=null){sn(e,t,7,[n,r])}var Yi=Fr(),Xi=0;function Zi(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Yi,o={uid:Xi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ce(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ai(i,a),emitsOptions:Hr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Br.bind(null,o),e.ce&&e.ce(o),o}var Y=null,Qi=()=>Y||R,$i,ea;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};$i=t(`__VUE_INSTANCE_SETTERS__`,e=>Y=e),ea=t(`__VUE_SSR_SETTERS__`,e=>ia=e)}var ta=e=>{let t=Y;return $i(e),e.scope.on(),()=>{e.scope.off(),$i(t)}},na=()=>{Y&&Y.scope.off(),$i(null)};function ra(e){return e.vnode.shapeFlag&4}var ia=!1;function aa(e,t=!1,n=!1){t&&ea(t);let{props:r,children:i}=e.vnode,a=ra(e);ei(e,r,a,t),pi(e,i,n||t);let o=a?oa(e,t):void 0;return t&&ea(!1),o}function oa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yr);let{setup:r}=n;if(r){He();let n=e.setupContext=r.length>1?fa(e):null,i=ta(e),a=on(r,e,0,[e.props,n]),o=y(a);if(Ue(),i(),(o||e.sp)&&!Kn(e)&&Vn(e),o){if(a.then(na,na),t)return a.then(n=>{sa(e,n,t)}).catch(t=>{cn(t,e,0)});e.asyncDep=a}else sa(e,a,t)}else ua(e,t)}function sa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Xt(t)),ua(e,n)}var ca,la;function ua(e,t,n){let i=e.type;if(!e.render){if(!t&&ca&&!i.render){let t=i.template||Er(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ca(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,la&&la(e)}{let t=ta(e);He();try{Sr(e)}finally{Ue(),t()}}}var da={get(e,t){return N(e,`get`,``),e[t]}};function fa(e){return{attrs:new Proxy(e.attrs,da),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function pa(e){return e.exposed?e.exposeProxy||=new Proxy(Xt(Vt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _r)return _r[n](e)},has(e,t){return t in e||t in _r}}):e.proxy}function ma(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function ha(e){return h(e)&&`__vccOpts`in e}var ga=(e,t)=>Qt(e,t,ia);function _a(e,t,n){try{Ni(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ii(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),q(e,t,n))}finally{Ni(1)}}var va=`3.5.33`,ya=void 0,ba=typeof window<`u`&&window.trustedTypes;if(ba)try{ya=ba.createPolicy(`vue`,{createHTML:e=>e})}catch{}var xa=ya?e=>ya.createHTML(e):e=>e,Sa=`http://www.w3.org/2000/svg`,Ca=`http://www.w3.org/1998/Math/MathML`,wa=typeof document<`u`?document:null,Ta=wa&&wa.createElement(`template`),Ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?wa.createElementNS(Sa,e):t===`mathml`?wa.createElementNS(Ca,e):n?wa.createElement(e,{is:n}):wa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>wa.createTextNode(e),createComment:e=>wa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ta.innerHTML=xa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ta.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Da=Symbol(`_vtc`);function Oa(e,t,n){let r=e[Da];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ka=Symbol(`_vod`),Aa=Symbol(`_vsh`),ja=Symbol(``),Ma=/(?:^|;)\s*display\s*:/;function Na(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Fa(r,t,``)}else for(let e in t)n[e]??Fa(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Fa(r,i,``):za(e,i,!g(t)&&t?t[i]:void 0,o)||Fa(r,i,o)}}else if(i){if(t!==n){let e=r[ja];e&&(n+=`;`+e),r.cssText=n,a=Ma.test(n)}}else t&&e.removeAttribute(`style`);ka in e&&(e[ka]=a?r.display:``,e[Aa]&&(r.display=`none`))}var Pa=/\s*!important$/;function Fa(e,t,n){if(d(n))n.forEach(n=>Fa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ra(e,t);Pa.test(n)?e.setProperty(E(r),n.replace(Pa,``),`important`):e[r]=n}}var Ia=[`Webkit`,`Moz`,`ms`],La={};function Ra(e,t){let n=La[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return La[t]=r;r=ie(r);for(let n=0;n<Ia.length;n++){let i=Ia[n]+r;if(i in e)return La[t]=i}return t}function za(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ba=`http://www.w3.org/1999/xlink`;function Va(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ba,t.slice(6,t.length)):e.setAttributeNS(Ba,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ha(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?xa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ua(e,t,n,r){e.addEventListener(t,n,r)}function Wa(e,t,n,r){e.removeEventListener(t,n,r)}var Ga=Symbol(`_vei`);function Ka(e,t,n,r,i=null){let a=e[Ga]||(e[Ga]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ja(t);r?Ua(e,n,a[t]=Qa(r,i),s):o&&(Wa(e,n,o,s),a[t]=void 0)}}var qa=/(?:Once|Passive|Capture)$/;function Ja(e){let t;if(qa.test(e)){t={};let n;for(;n=e.match(qa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Ya=0,Xa=Promise.resolve(),Za=()=>Ya||=(Xa.then(()=>Ya=0),Date.now());function Qa(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;sn($a(e,n.value),t,5,[e])};return n.value=e,n.attached=Za(),n}function $a(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,to=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Oa(e,r,c):t===`style`?Na(e,n,r):a(t)?o(t)||Ka(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):no(e,t,r,c))?(Ha(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Va(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ro(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ha(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Va(e,t,r,c))};function no(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return eo(t)&&g(n)?!1:t in e}function ro(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var io=s({patchProp:to},Ea),ao;function oo(){return ao||=hi(io)}var so=((...e)=>{let t=oo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=lo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,co(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function co(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function lo(e){return g(e)?document.querySelector(e):e}var uo=typeof window<`u`,fo=Symbol(),po;(function(e){e.direct=`direct`,e.patchObject=`patch object`,e.patchFunction=`patch function`})(po||={});var mo=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function ho(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function go(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){xo(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function _o(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function vo(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var yo=typeof navigator==`object`?navigator:{userAgent:``},bo=/Macintosh/.test(yo.userAgent)&&/AppleWebKit/.test(yo.userAgent)&&!/Safari/.test(yo.userAgent),xo=uo?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!bo?So:`msSaveOrOpenBlob`in yo?Co:wo:()=>{};function So(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?vo(r):_o(r.href)?go(e,t,n):(r.target=`_blank`,vo(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){vo(r)},0))}function Co(e,t=`download`,n){if(typeof e==`string`)if(_o(e))go(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){vo(t)})}else navigator.msSaveOrOpenBlob(ho(e,n),t)}function wo(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return go(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(mo.HTMLElement))||`safari`in mo,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||bo)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:To}=Object;function Eo(){let e=we(!0),t=e.run(()=>Wt({})),n=[],r=[],i=Vt({install(e){i._a=e,e.provide(fo,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var{assign:Do}=Object,Oo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ko={},Ao={class:`min-h-screen bg-base-100 text-base-content`},jo={class:`mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 lg:px-6`},Mo={class:`navbar rounded-[2rem] border border-base-300 bg-base-100/80 px-4 shadow-sm backdrop-blur`},No={class:`flex-1`},Po={class:`flex gap-2`},Fo={class:`flex-1 py-8`};function Io(e,t){let n=dr(`RouterLink`),r=dr(`RouterView`);return W(),G(`div`,Ao,[K(`div`,jo,[K(`header`,Mo,[K(`div`,No,[q(n,{class:`text-xl font-semibold tracking-wide`,to:`/`},{default:z(()=>[...t[0]||=[J(`松ノさんメモ`,-1)]]),_:1})]),K(`nav`,Po,[q(n,{class:`btn btn-ghost btn-sm`,to:`/blogs`},{default:z(()=>[...t[1]||=[J(`Blogs`,-1)]]),_:1}),q(n,{class:`btn btn-ghost btn-sm`,to:`/profile`},{default:z(()=>[...t[2]||=[J(`Profile`,-1)]]),_:1})])]),K(`main`,Fo,[q(r)]),t[3]||=K(`footer`,{class:`footer footer-center rounded-[2rem] border border-base-300 bg-base-200 p-6 text-sm text-base-content/70`},[K(`aside`,null,[K(`p`,null,`松ノさんメモ(2019-2026)`)])],-1)])])}var Lo=Oo(ko,[[`render`,Io]]),Ro=typeof document<`u`;function zo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Bo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&zo(e.default)}var X=Object.assign;function Vo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Uo(i)?i.map(e):e(i)}return n}var Ho=()=>{},Uo=Array.isArray;function Wo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Go=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function Ko(e,t){return X(Error(),{type:e,[Go]:!0},t)}function qo(e,t){return e instanceof Error&&Go in e&&(t==null||!!(e.type&t))}var Jo=Symbol(``),Yo=Symbol(``),Xo=Symbol(``),Zo=Symbol(``),Qo=Symbol(``),$o=/#/g,es=/&/g,ts=/\//g,ns=/=/g,rs=/\?/g,is=/\+/g,as=/%5B/g,os=/%5D/g,ss=/%5E/g,cs=/%60/g,ls=/%7B/g,us=/%7C/g,ds=/%7D/g,fs=/%20/g;function ps(e){return e==null?``:encodeURI(``+e).replace(us,`|`).replace(as,`[`).replace(os,`]`)}function ms(e){return ps(e).replace(ls,`{`).replace(ds,`}`).replace(ss,`^`)}function hs(e){return ps(e).replace(is,`%2B`).replace(fs,`+`).replace($o,`%23`).replace(es,`%26`).replace(cs,"`").replace(ls,`{`).replace(ds,`}`).replace(ss,`^`)}function gs(e){return hs(e).replace(ns,`%3D`)}function _s(e){return ps(e).replace($o,`%23`).replace(rs,`%3F`)}function vs(e){return _s(e).replace(ts,`%2F`)}function ys(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var bs=/\/$/,xs=e=>e.replace(bs,``);function Ss(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=As(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ys(o)}}function Cs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function ws(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ts(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Es(t.matched[r],n.matched[i])&&Ds(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Es(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ds(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Os(e[n],t[n]))return!1;return!0}function Os(e,t){return Uo(e)?ks(e,t):Uo(t)?ks(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function ks(e,t){return Uo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function As(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var js={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Ms=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Ns=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Ps(e){if(!e)if(Ro){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),xs(e)}var Fs=/^[^#]+#/;function Is(e,t){return e.replace(Fs,`#`)+t}function Ls(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Rs=()=>({left:window.scrollX,top:window.scrollY});function zs(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ls(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Bs(e,t){return(history.state?history.state.position-t:-1)+e}var Vs=new Map;function Hs(e,t){Vs.set(e,t)}function Us(e){let t=Vs.get(e);return Vs.delete(e),t}function Ws(e){return typeof e==`string`||e&&typeof e==`object`}function Gs(e){return typeof e==`string`||typeof e==`symbol`}function Ks(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(is,` `),i=r.indexOf(`=`),a=ys(i<0?r:r.slice(0,i)),o=i<0?null:ys(r.slice(i+1));if(a in t){let e=t[a];Uo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function qs(e){let t=``;for(let n in e){let r=e[n];if(n=gs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Uo(r)?r.map(e=>e&&hs(e)):[r&&hs(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Js(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Uo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Ys(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Xs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Ko(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Ws(e)?c(Ko(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Zs(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(zo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Xs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Bo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Xs(c,n,r,o,e,i)()}))}}return a}function Qs(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Es(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Es(e,s))||i.push(s))}return[n,r,i]}var $s=()=>location.protocol+`//`+location.host;function ec(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),ws(n,``)}return ws(n,e)+r+i}function tc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ec(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Ms.pop,direction:u?u>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:Rs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function nc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Rs():null}}function rc(e){let{history:t,location:n}=window,r={value:ec(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:$s()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,nc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:Rs()});a(o.current,o,!0),a(e,X({},nc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function ic(e){e=Ps(e);let t=rc(e),n=tc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:Is.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}var ac=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),oc={type:ac.Static,value:``},sc=/[a-zA-Z0-9_]/;function cc(e){if(!e)return[[]];if(e===`/`)return[[oc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:ac.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:ac.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:sc.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var lc=`[^/]+?`,uc={sensitive:!1,strict:!1,start:!0,end:!0},$=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($||{}),dc=/[.+*?^${}()[\]/\\]/g;function fc(e,t){let n=X({},uc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$.Segment+(n.sensitive?$.BonusCaseSensitive:0);if(o.type===ac.Static)r||(i+=`/`),i+=o.value.replace(dc,`\\$&`),s+=$.Static;else if(o.type===ac.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||lc;if(u!==lc){s+=$.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$.Dynamic,c&&(s+=$.BonusOptional),n&&(s+=$.BonusRepeatable),u===`.*`&&(s+=$.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===ac.Static)n+=e.value;else if(e.type===ac.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Uo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Uo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function pc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$.Static+$.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$.Static+$.Segment?1:-1:0}function mc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=pc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(hc(r))return 1;if(hc(i))return-1}return i.length-r.length}function hc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var gc={strict:!1,end:!0,sensitive:!1};function _c(e,t,n){let r=X(fc(cc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function vc(e,t){let n=[],r=new Map;t=Wo(gc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=bc(e);s.aliasOf=r&&r.record;let l=Wo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(bc(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=_c(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Sc(d)&&o(e.name)),Ec(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ho}function o(e){if(Gs(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=wc(e,n);n.splice(t,0,e),e.record.name&&!Sc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Ko(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(yc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&yc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Ko(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Cc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function yc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function bc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function xc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Sc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Cc(e){return e.reduce((e,t)=>X(e,t.meta),{})}function wc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;mc(e,t[i])<0?r=i:n=i+1}let i=Tc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Tc(e){let t=e;for(;t=t.parent;)if(Ec(t)&&mc(e,t)===0)return t}function Ec({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Dc(e){let t=kn(Xo),n=kn(Zo),r=ga(()=>{let n=Jt(e.to);return t.resolve(n)}),i=ga(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Es.bind(null,i));if(o>-1)return o;let s=Mc(e[t-2]);return t>1&&Mc(i)===s&&a[a.length-1].path!==s?a.findIndex(Es.bind(null,e[t-2])):o}),a=ga(()=>i.value>-1&&jc(n.params,r.value.params)),o=ga(()=>i.value>-1&&i.value===n.matched.length-1&&Ds(n.params,r.value.params));function s(n={}){if(Ac(n)){let n=t[Jt(e.replace)?`replace`:`push`](Jt(e.to)).catch(Ho);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:ga(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Oc(e){return e.length===1?e[0]:e}var kc=Bn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Dc,setup(e,{slots:t}){let n=Pt(Dc(e)),{options:r}=kn(Xo),i=ga(()=>({[Nc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Nc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Oc(t.default(n));return e.custom?r:_a(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Ac(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Uo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Mc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Nc=(e,t,n)=>e??t??n,Pc=Bn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=kn(Qo),i=ga(()=>e.route||r.value),a=kn(Yo,0),o=ga(()=>{let e=Jt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=ga(()=>i.value.matched[o.value]);On(Yo,ga(()=>o.value+1)),On(Jo,s),On(Qo,i);let c=Wt();return Mn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Es(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Fc(n.default,{Component:l,route:r});let u=o.props[a],d=_a(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Fc(n.default,{Component:d,route:r})||d}}});function Fc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Ic=Pc;function Lc(e){let t=vc(e.routes,e),n=e.parseQuery||Ks,r=e.stringifyQuery||qs,i=e.history,a=Ys(),o=Ys(),s=Ys(),c=Gt(js),l=js;Ro&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Vo.bind(null,e=>``+e),d=Vo.bind(null,vs),f=Vo.bind(null,ys);function p(e,n){let r,i;return Gs(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=Ss(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:Ss(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Cs(r,X({},e,{hash:ms(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===qs?Js(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Ss(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return Ko(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ts(r,i,n)&&(f=Ko(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),ce(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>qo(e)?qo(e,Z.NAVIGATION_GUARD_REDIRECT)?e:se(e):oe(e,d,i)).then(e=>{if(e){if(qo(e,Z.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=T(d,i,!0,s,a);return ne(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=de.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=Qs(e,t);n=Zs(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Xs(r,e,t))});let c=w.bind(null,e,t);return n.push(c),pe(n).then(()=>{n=[];for(let r of a.list())n.push(Xs(r,e,t));return n.push(c),pe(n)}).then(()=>{n=Zs(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Xs(r,e,t))});return n.push(c),pe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Uo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Xs(i,e,t));else n.push(Xs(r.beforeEnter,e,t));return n.push(c),pe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Zs(s,`beforeRouteEnter`,e,t,ee),n.push(c),pe(n))).then(()=>{n=[];for(let r of o.list())n.push(Xs(r,e,t));return n.push(c),pe(n)}).catch(e=>qo(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function T(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===js,l=Ro?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ce(e,t,n,s),se()}let re;function E(){re||=i.listen((e,t,n)=>{if(!fe.listening)return;let r=_(e),a=S(r,fe.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(Ho);return}l=r;let o=c.value;Ro&&Hs(Bs(o.fullPath,n.delta),Rs()),te(r,o).catch(e=>qo(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:qo(e,Z.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{qo(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Ms.pop&&i.go(-1,!1)}).catch(Ho),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=T(r,o,!1),e&&(n.delta&&!qo(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Ms.pop&&qo(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(r,o,e)}).catch(Ho)})}let ie=Ys(),ae=Ys(),D;function oe(e,t,n){se(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function O(){return D&&c.value!==js?Promise.resolve():new Promise((e,t)=>{ie.add([e,t])})}function se(e){return D||(D=!e,E(),ie.list().forEach(([t,n])=>e?n(e):t()),ie.reset()),e}function ce(t,n,r,i){let{scrollBehavior:a}=e;if(!Ro||!a)return Promise.resolve();let o=!r&&Us(Bs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return gn().then(()=>a(t,n,o)).then(e=>e&&zs(e)).catch(e=>oe(e,t,n))}let le=e=>i.go(e),ue,de=new Set,fe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:O,install(e){e.component(`RouterLink`,kc),e.component(`RouterView`,Ic),e.config.globalProperties.$router=fe,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Jt(c)}),Ro&&!ue&&c.value===js&&(ue=!0,b(i.location).catch(e=>{}));let t={};for(let e in js)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Xo,fe),e.provide(Zo,Ft(t)),e.provide(Qo,c);let n=e.unmount;de.add(e),e.unmount=function(){de.delete(e),de.size<1&&(l=js,re&&re(),re=null,c.value=js,ue=!1,D=!1),n()}}};function pe(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return fe}var Rc=`---
title: Jetson Nanoでやったことメモ
summary: Jetson Nano でデモ実行やカメラ認識を試した記録。
publishedAt: 2020-04-30
tags: ["Jetson Nano", "CUDA", "OpenCV", "TensorFlow"]
legacyPath: /JetsonNano_memo3.html
---

## 3.プログラムを動かしてみる

## 3-1.サンプルプログラムを動かしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

今日(2020/04/20)の昼にJetsonNanoの入門本が届いたので、これを見ながらデモを動かしてみようと思う。
因みにこの本は後々P研の部室に貸し出し用に置こうかなと思っている、部室がミニミニ図書館化していく…

注意: GUIのプログラムの実行はリモートでは出来ないので、本体から行おう(自責の念)

### 3-1-1.fluidsGLのデモ

まず、fluidsGLデモが入っている、CUDAデモファイルをコピーして持ってくるために、以下のコマンドを実行。

\`\`\`bash
cd ~
cp -a /usr/local/cuda-10.0/samples/ ../share/
ll
\`\`\`

まるっとコピーする為のaオプション…そして、コピー先は遠隔で触れるshareフォルダに入れておこう…
うん、全てコピーできているっぽいので、以下のコマンドを実行してfluidsGLディレクトリの所まで飛んでいく。

\`\`\`bash
cd samples/5_Simulations/fluidsGL
\`\`\`

それでは、サンプルプログラムをコンパイルして、実行。

\`\`\`bash
make
./fluidsGL
\`\`\`

エラーが返ってきた。

"ary when GPU Boost is enabled. No protocol specified freeglut (./fluidsGL): failed to open display ':0'"

なるほど、ディスプレイ設定がされてなくてよ！！って言われてるようだ(英語苦手だから間違えてたらごめんなさい)
リモートでGUIのアプリ動かすなって事かねぇ…
と思い、直接プログラムを実行したら動いた。

![fluidsGLimage](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/fluidsGL.png?raw=true)

おぉ、水面なぞっているみたいだ…この動きを計算しているんですって？凄いね。

他にも色々なサンプルプログラムがあるっぽい、面白そうな感じだ…

## 3-2.USBカメラを使ったプログラムを動かしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

自分の認識をメモっておこうと思う。
流石にまだ無知無知のムチン(れんこん)すぎて書けないので、本とかサイトに載っているプログラムを引っ張ってくる。

### 3-2-1.JetsonNano超入門に載っていたプログラムを動かして遊ぶ

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

まず、最新の状態にして

\`\`\`bash
sudo apt-get update
\`\`\`

"python3-pip"、"protobuf-compiler"、"libprotoc-dev"、"libjpeg-dev"、"cmake"のインストールをする。

\`\`\`bash
sudo apt-get install python3-pip protobuf-compiler libprotoc-dev libjpeg-dev cmake
\`\`\`

GitHubからプログラムを引っ張ってきて、フォルダに移動。

\`\`\`bash
git clone https://github.com/tsutof/tiny_yolov2_onnx_cam
cd tiny_yolov2_onnx_cam
\`\`\`

exportコマンドは、環境変数やシェル変数を設定するコマンドだそうで…はぁ…？
まぁ分からないのでググると、"export PATH=$PATH [場所]"がPATHを通す、どこからでもそのディレクトリを見れるようにするってことらしい。
"$PATH"は値なんですか？ほー、わけわかめが生える…
つまり、:usr/local/cuda/binにPATHを通すってこと…か、と実行する。

\`\`\`bash
export PATH=$PATH :usr/local/cuda/bin
\`\`\`

ライブラリのインストールをする。
…のは分かるが、"python3 -m"と"-r requirements.txt"が分からない、"python3 -m"要るの？？？
ググったら、"pip install -r requirements.txt"で、設定テキスト(←requirements.txt)に定義されたパッケージを一括(←rオプションの意味)インストールするということらしい。
そして"python3 -m"は、後ろに書いた名前のモジュールをmainモジュールとして扱うそうな…またわけわかめ…
と思って暫く調べていたら、[Pythonメモ-107 (__main__.py について)(-m オプション, メインファイル)](https://devlights.hatenablog.com/entry/2019/07/13/231344)に分かりやすく書かれていた。
…のだけど、合体させたら分からなくなった。
pipが通らないから～みたいなのもあったけど、pipこの前通ってた気がするので違うに1票。
[Python モジュールのインストール](https://docs.python.org/ja/3/installing/index.html) の題名の通り、Pythonのモジュールのパッケージだから"python3 -m"を付けて実行なのかな？
つまり、Pythonのモジュールのパッケージを一括インストールしますってことかな…と実行。

\`\`\`bash
python3 -m pip install -r requirements.txt
\`\`\`

アプリの実行の準備のコマンドを実行。
[Jetson Nanoにあるnvpmodelコマンド](https://qiita.com/yamamo-to/items/6f0672a91c059a5493ed) とか、
[NVPModel - NVIDIA Jetson TX2 Development Kit](https://www.jetsonhacks.com/2017/03/25/nvpmodel-nvidia-jetson-tx2-development-kit/) とか読むと、nvpmodelコマンドのmオプションは、使用電力のモード決めが出来るっぽい。
jetson_clocksコマンドは [jetson_clocks](https://qiita.com/yamamo-to/items/72bef24f49168fa5dda1) を読むと、(EMC:External Memory Controller)のクロック数、パフォーマンスを変更したり、ファン速度、温度設定を変えるコマンドらしい。
んで、設定を保存したり、元に戻したりもオプション付けて出来るっぽい。
因みにオプション無しは最大パフォーマンスで！！！ってことだそう。

\`\`\`bash
sudo nvpmodel -m 0
sudo jetson_clocks
\`\`\`

やっとこさアプリケーションの実行。
初回実行時はダウンロードするものがある(ニューラルネットワークモデルとラベルファイル)のでインターネットに接続しておくこと。
私はUSBカメラのみを繋げているのでcamera=0(何で"--"なのかね？)

\`\`\`bash
python3 tiny_yolov2_onnx_cam.py --camera=0
\`\`\`

![camera_App1_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/tiny_yolov2_onnx_cam.png?raw=true)

家にトミカとか、リアルな動物のフィギュアとかが無いので、炭酸水のペットボトルを映したら、75%くらいbottleと判定されている…！！
参考にした本では90%とかで当たってたけど…"ペット"ボトルだから精度低いのかな…
あと画像は無いけれど、かなり誤認識が多い…帽子をchairと認識する…orz
精度を上げたいものだねぇ、読めたらパラメータ調整とか出来るようになるのかね？

### 3-2-2.プログラムを読んでみる

先生たちに、まだ何も作ってないのかよ…はぁ(^^;って顔された…ごめんなさい……
他の人のプログラム読んだら書けるようになるかなって…読んでいこうと思います…って言ったけど、これは果たして本当に書けるようになるのだろうか…およよ。
…とりあえず、今まで動かした画像認識のプログラム読んで理解するしかないね！(^ω^)

はー、完全に理解した。

あのね、3-2-1.で書いていた"camera=0(何で\\"--\\"なのかね？)"の部分、解決しました！
[cloneしてきたプロジェクトのREADMEファイル](https://github.com/tsutof/tiny_yolov2_onnx_cam/blob/master/README.ja.md) にも、こういうコマンド使うよーってのが書いてあったのだが、"tiny_yolov2_onnx_cam.py"の127~129行目に引数のパースがされていたのだ。
えっ、コマンドライン引数のパース？設定？って出来るんですかって驚きをしてしまった…へへっ。

さらに、44~48行目の"GST_STR_CSI"がよく分からなくて結構調べていた。
色々なプログラムに当たり前のように書かれているけど、解説書いてないし…
GStreamerの話ってのは分かるけど…
って思って"GStreamer nvarguscamerasrc"で調べたら、NVIDIAのGStreamerのユーザーガイドが出てきた。
nvarguscamerasrcはNVIDIA独自のプラグインですって書いてある…
あと、父親に聞いたらここでカメラで撮った画像を持ってきて、加工して、渡す…なパイプラインを構築しているんだそうな。
つまり"GST_STR_CSI"は、

- nvarguscamerasrcに、撮ってそのままの画像データを幅、高さ、書式？(NV12形式？)、フレームレートを指定して渡す
- nvarguscamerasrcから、nvvidconvに、画像データを幅、高さ、書式？(BGRx形式？)を指定して渡す
- nvvidconvから、videoconvertに画像データを渡す
- videoconvertから、appsinkに画像データを渡す

という流れを指定しているのかな？
1つ気になるのはNV12やBGRxについて調べていたら、[NV12 to RGBx bad luminance](https://github.com/intel/intel-vaapi-driver/issues/428) という話(輝度値が下がるよって話)が出てきたけど、今回は問題ないのかね？？？

## 3-3.からあげさんがブログに載っけていたプログラムを動かしてみる

そういえば、Samba入れる発端のあのアプリケーション([JetsonNanoのセットアップメモ2-4.を参照](/JetsonNano_memo2.html)) 動かしてないなぁと思い、動かしてみることにした。
でも、さっきのアプリケーションを実行するとき、"--camera=0"って書いたら出来たし、試しにやってみるか…

\`\`\`bash
cd keras-pi/
python3 inspect_camera.py --camera=0
\`\`\`

"inspect_camera.py: error: unrecognized arguments: --camera=0"

引数が認識できないって言われてる。
でも、[参考ページ](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) ではラズパイカメラだよってdオプションで書いてるんだよなぁ…どうしよう。
とりあえず、オプション書かないで動かしてみるか…

\`\`\`bash
python3 inspect_camera.py
\`\`\`

![camera_App2_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/camera.png?raw=true)

動いた…プログラム書き換える必要無かったんだ…
嬉しいけれど、ズコーッ_(┐「ε:)_

(追記 その1)
一回アプリ終了してから動かそうとしたら、エラーが返って来た。

\`\`\`text
ResourceExhaustedError (see above for traceback): OOM when allocating tensor with shape[3,3,32,64] and
  type float on /job:localhost/replica:0/task:0/device:GPU:0 by allocator GPU_0_bfc
  [[node conv2d_2/kernel/Initializer/random_uniform/RandomUniform (defined at inspect_camera.py:28) ]]
Hint: If you want to see a list of allocated tensors when OOM happens,
  add report_tensor_allocations_upon_oom to RunOptions for current allocation info.
\`\`\`

何かメモリ足りないみたいなこと言ってるっぽいけど、OOMが分からなかったので調べたら、Out Of Memoryだって。
メモリ不足のエラーでした。
swap領域作ってたらエラー解消されたのかな？
頭が上手く回ってなかったので、再起動をして直したので分からないまま…次回起こったら試してみよう。

(追記 その2)
よく見たら、動く時でもプログラム実行時にWarningが出てた。

\`\`\`text
[ WARN:0] global /home/matsuno/opencv/opencv-4.3.0/modules/videoio/src/cap_gstreamer.cpp (935) open OpenCV |
  GStreamer warning: Cannot query video position: status=0, value=-1, duration=-1
2020-04-28 17:52:52.174176: I tensorflow/stream_executor/dso_loader.cc:153]
  successfully opened CUDA library libcublas.so.10.0 locally
Gtk-Message: 17:53:08.837: Failed to load modu
\`\`\`

カメラ辺りの設定が良くないっぽい、がよく分からない。
プログラムをいじる必要があるのだろうか…と考えた松ノ氏はググった。
[GitHubでの質問](https://github.com/TheImagingSource/tiscamera/issues/332) が出てきたが英語なので自動翻訳使いながら読んでみた、解決してないっぽい。

## 4.プログラムを書いてみる

## 4-1.Tensorflowを使って推しの顔認識をしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

[Python 画像認識：機械学習AI(自作サンプル)でラブライブ虹ヶ咲キャラを顔認識【OpenCV,Keras,ディープラーニング,ラズパイ】](https://nine-num-98.blogspot.com/2019/12/ai-lovelive-01.html)

その3ではYOLOv2を使用したリアルタイムな画像認識のプログラムを動かしてみたのだけど、精度が悪いってなった。
最終的にはリアルタイムな画像認識をしたい訳だけど、とりあえず1枚の画像を渡して画像認識するプログラムを書くことにする。
…理由はUSBカメラが今、手元に無いからょ。
あと、YOLOv3も今後触ってみたいと思う。

pythonでプログラム書くの久しぶりじゃな…って4月時点では思っていたけど、今(5月)ゼミでpythonのプログラム書いてるゎ…

注意: GUIのプログラムの実行はリモートでは出来ないので、本体から行おう(自責の念)

`,zc=`---
title: Jetson Nanoのセットアップメモ
summary: Jetson Nano セットアップ手順のメモ（OS起動まで）。
publishedAt: 2023-10-30
tags: ["Jetson Nano", "Linux", "Setup"]
legacyPath: /JetsonNano_memo1.html
---

## 1.OSの起動まで

### 1-1.物理的な話

用意したもの

- Jetson Nano
- ACアダプタ(5V 4.0A)
- microSDカード(最低16GB推奨32GBらしいが，私は64GBのやつ)
- マウス(端子はUSB)
- キーボード(忘れてて家の倉庫を漁った，端子はUSBで)
- モニター
- HDMIケーブル
- ネットにつなぐ環境(私はPLCアダプタとLANケーブル使った)
- USBカメラ

### 1-2.SDカードのフォーマットからOSのインストールまで

参考：[小型 AI コンピュータ NVIDIA Jetson Nano 開発者キットのセットアップ](https://qiita.com/tsutof/items/66e68c75b462c4faf1cb)

#### 1-2-1.OSイメージファイルをダウンロードする

[Jetson Download Center](https://developer.nvidia.com/embedded/downloads) の "Jetson Nano Developer Kit SD Card Image" を選択してダウンロードする．

(2023/10/30 追記) CUDAのバージョンを上げようとしたら環境を壊したので，JetPack ver4.6.1を入れ直した．

#### 1-2-2.SDカードのフォーマット

[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/eula_windows/) を使用してフォーマットを行う．

(2023/10/30 追記) SDカードが「デバイスとドライブ」に表示されないので，ディスクの管理から「新しいシンプルボリューム」を選択，その後SD Card Formatterにてフォーマットした．

#### 1-2-3.OSイメージファイルを書き込む

[Etcher](https://www.balena.io/etcher/) を使用して書き込みを行う．

#### 1-2-4.OSの起動

OSのイメージファイルを書き込んだmicroSDカードをJetson Nanoに差し込む(microSDカードを指す場所が分かりずらい，CPUクーラーの下あたり)．
ACアダプタの端子を指すと自動で電源が付く．

最初の起動時に，

- 使用許諾の承諾
- 言語の選択(English)
- キーボードの選択(JapaneseのJapanese)
- タイムゾーンの選択(Tokyo)
- アカウントの設定

を行う

## 2.セットアップ

参考：[Jetson Nano関係のTIPSまとめ](https://qiita.com/karaage0703/items/b14c249aa33112669ee4)

## 2-1.TensorFlowのセットアップ

参考：

- [Jetson Nanoインストールメモ](https://qiita.com/n-yamanaka/items/dd82996312ab333fe9b2)
- [Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000)

(反省点)最初に [installSwapfile](https://github.com/JetsonHacksNano/installSwapfile) を使用して SWAP 領域を追加しておけばもう少し早く終わった。

[Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) を見ながら、以下のコマンドを実行。

\`\`\`bash
git clone https://github.com/karaage0703/jetson-nano-tools
cd jetson-nano-tools
./install-tensorflow.sh
./install-tools.sh
\`\`\`

うーん、スクリプトファイル(コマンドを書いてくれているファイル、打ち込む面倒が省ける)を入れて、実行してるってことかね？理解理解。

## 2-2.OSのアップデート

以下のコマンドを実行。

\`\`\`bash
sudo apt-get update
sudo apt-get upgrade
\`\`\`

先に OS のアップデートするべきだった。

## 2-3.OpenCVのセットアップ

参考：[Jetson NanoへOpenCV 4.1.0をインストールする](https://qiita.com/asahi0301/items/3c287190348552f19415)

参考ページ内のリンク（[こちら](https://github.com/AastaNV/JEP/blob/master/script/install_opencv4.0.0_Nano.sh)）が死んでいたので、参考ページに載っていたスクリプトファイルを OpenCV 4.3.0 をインストールするように変更した。

以下のコマンドを実行する(スクリプトの実行)。

\`\`\`bash
mkdir opencv
./install_opencv4.3.0_Nano.sh opencv
\`\`\`

## 2-4.画像認識のソフトを動かして遊ぶ(遊べない)

[Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) を見ながら、以下のコマンドを実行。("Keras" を "Karas" だと勘違いして、最初そんなフォルダ無いよって言われた)

\`\`\`bash
git clone https://github.com/karaage0703/keras-pi
cd keras-pi
\`\`\`

あ、ラズパイのカメラじゃないから、USBカメラですよーって書き直さなきゃかな？と思い、VSCodeで開こうと、(この時すでにTeraTermを使ってリモートで動かしていたのだ！)

\`\`\`bash
code inspect_camera_pi.py
\`\`\`

とコマンドを打ったけど、"code" なんてコマンドは無いですわよと言われてしまった。よく考えたら当たり前だった、JetsonNano に VSCode 入れてないですもん。

## 2-5.リモートでJetsonNanoの中のファイルを触れるようにする

リモートで触るには Samba を入れるのが良いらしい。

![さんば…？image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo2/samba.PNG?raw=true)

### 2-5-1.失敗したメモ (失敗を共有するのも大事だよね)

[Ubuntuでファイルサーバーをたてる（Samba）](https://qiita.com/msrks/items/1385cf13258dd1a0da08) を見ながら、以下のコマンドを実行。

\`\`\`bash
# インストール
sudo apt-get -y install samba

# 共有するディレクトリの作成
sudo mkdir /home/shere
sudo chmod 777 /home/shere

# ファイルサーバーの設定
sudo vim /etc/samba/smb.conf
\`\`\`

\`smb.conf\` を下記のように書き換える。

\`\`\`conf
# 25行目：以下2行追記
unix charset = UTF-8
dos charset = CP932

# 30行目：必要があれば変更 (Windows側に合わせる)
workgroup = WORKGROUP

# 51行目：コメント解除しアクセス許可IP追記
interfaces = 127.0.0.0/8 10.0.0.0/24

# 58行目：コメント解除 & 追記
bind interfaces only = yes
map to guest = Bad User

# 最終行に追記
[share]# 任意の共有名称を指定
   path = /home/share# 共有フォルダ指定
   writable = yes# 書き込みOK
   guest ok = yes# ゲストユーザーOK
   guest only = yes# 全てゲストとして扱う
   create mode = 0777# フルアクセスでファイル作成
   directory mode = 0777# フルアクセスでフォルダ作成
\`\`\`

ここでファイルサーバーの再起動の為に、以下のコマンドを実行した。

\`\`\`bash
sudo systemctl restart smbd
\`\`\`

すると、以下のエラー文が返ってきた。

\`\`\`text
Job for smbd.service failed because the control process exited with error code.
See "systemctl status smbd.service" and "journalctl -xe" for details.
\`\`\`

よく見直してみると "share" が "shere" になっていた。まあ、エラーと関係ない気もするけど、スペルミスは直しておこうと。

\`\`\`bash
sudo rmdir /home/shere
sudo mkdir /home/share
sudo chmod 777 /home/share

# confファイルの中も間違えているので直す
sudo vim /etc/samba/smb.conf
\`\`\`

しかし、同じエラーが出る為、

\`\`\`conf
# 最終行に追記
[share] # 任意の共有名称を指定
path = /home/share # 共有フォルダ指定
writable = yes # 書き込みOK
guest ok = yes # ゲストユーザーOK
guest only = yes # 全てゲストとして扱う
create mode = 0777 # フルアクセスでファイル作成
directory mode = 0777 # フルアクセスでフォルダ作成
\`\`\`

上記のように、参考ページの通りに \`smb.conf\` を書いていたのを

\`\`\`conf
# 最終行に追記
[share]
path = /home/share
writable = yes
guest ok = yes
guest only = yes
create mode = 0777
directory mode = 0777
\`\`\`

上記のように、コメントを削除してみたところ、

\`\`\`bash
sudo systemctl restart smbd
\`\`\`

が実行できた！

だがしかし、JetsonNano の share フォルダにアクセス出来ないし、nmbd が再起動できない…orz

### 2-5-2.成功したメモ

もうだめ…わかんにゃい…

と、とりあえず \`smb.conf\` の中身を書き換える前に戻して、以下のコマンドを実行して、\`smbd\` と \`nmbd\` の再起動が出来る事を確認する。

\`\`\`bash
sudo systemctl restart smbd nmbd
\`\`\`

参考ページが悪かったのかな…と、[NVIDIA Jetson Nano を使ってみる（起動と設定編）](https://wisteriahill.sakura.ne.jp/CMS/WordPress/2019/07/07/nvidia-jetson-nano-set-up-configration/) を見ながら、\`smb.conf\` の末尾に以下の文を追加。

\`\`\`conf
[share]
path = /home/share
read only = no
guest ok = yes
writable = yes
browsable = yes
directory mode = 0777
create mode = 0777
\`\`\`

その後、以下のコマンドを実行して、\`smbd\` と \`nmbd\` の再起動が出来る事を確認する。

\`\`\`bash
sudo systemctl restart smbd nmbd
\`\`\`

やったー！

その後、エクスプローラーのネットワークに移動して、住所を打ち込むと接続出来た…嬉しい…！！

![接続できたよimage](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo2/success_ver.PNG?raw=true)

2-5-1.で上手くいかなかった理由として、\`smb.conf\` の中をいじり過ぎたことが考えられる。

\`\`\`conf
# 25行目：以下2行追記
unix charset = UTF-8
dos charset = CP932

# 30行目：必要があれば変更 (Windows側に合わせる)
workgroup = WORKGROUP

# 51行目：コメント解除しアクセス許可IP追記
interfaces = 127.0.0.0/8 10.0.0.0/24

# 58行目：コメント解除 & 追記
bind interfaces only = yes
map to guest = Bad User
\`\`\`

上記の部分は変更しなくてOKだった。

Samba？なにそれ？楽しいの？な無知無知のムチン(れんこん)な私なので、最初に見つけたページに書いてあるをそっくりそのまま試していたが、どうも上手くいかないと思ったら、参考資料を変更するのもアリだなと。

あとは今回、上手くいかない→最初の状態に書き直す！が出来たので良かったが、ちゃんとバックアップを取るべきだなと痛感した。さらに今リモートで触っているけど、CUI なのでちゃんとコマンドを覚えておかないと…うろ覚えで打って、そんなコマンド無いわよ！！ってちょくちょく言われるので…頻繁に使うコマンドをいちいちググるのは、大変だし…。

多分、これでセットアップが終わったので、やっと次回から遊べるでござるよ！
`,Bc=`---
title: VMware playerでKaliLinuxを動かすメモ
summary: ThinkPadを妹に譲ることになり、ZenBookのDドライブに仮想マシンを作ってKali Linuxを動かすまでの記録です。
publishedAt: 2020-04-21
tags: ["Kali Linux", "VMware"]
legacyPath: /kalilinux_memo1.html
---

松ノ氏はノートパソコンを2台所有しており、ASUSのZenBookをメインで、LenovoのThinkPadをハッキングの勉強に使用していたのだが、ある日のこと…

松ノ氏の妹が大学デビューをしノートパソコンが必要になった為、ThinkPad譲ることになってしまったのだった……！

KaliLinux入れていたのに…どうしようか

P研の先輩に相談したら、部室のボード持ってきゃあって言われたけれど、置く場所が無い…orz

メインで使っているZenBookのCドライブはMHWで容量いっぱい…ん？Cドライブは？

ならば、Dドライブに仮想マシンを保存しとけば良いんだ！！！

## 1.OSの起動まで

## 1-1.物理的な話

用意したもの

- ノートパソコン
- 外付けSSD（Cドライブでも再現できるように書くね）
- ネットにつなぐ環境（Wi-Fiだよ）
- モニター（作業しやすい）
- HDMIケーブル（作業しやすい）
- マウス（作業しやすい）

## 1-2.OSイメージファイルの用意

参考:
- [VMwareでKali Linuxをインストール～日本語入力まで](http://sonickun.hatenablog.com/entry/2014/06/10/184403)
- IPUSIRON, "ハッカーの学校", 株式会社データハウス [(Amazonの販売ページ)](https://www.amazon.co.jp/%E3%83%8F%E3%83%83%E3%82%AB%E3%83%BC%E3%81%AE%E5%AD%A6%E6%A0%A1-IPUSIRON/dp/4781701973)（IPUSIRON氏の本は"暗号技術のすべて"とかも面白いです）

[DOWNLOAD KALI LINUX VIRTUAL IMAGES](https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/) から、"Kali Linux VMware 64-Bit"をダウンロードする

時間かかるので、HPの更新とかお絵描きとかして待つ

ダウンロードが終わったら、圧縮ファイルを [7zip](https://sevenzip.osdn.jp/)（インストールしていない場合はリンク先でインストール）で解凍する

今回はDドライブに入れないと容量無いので、Dドライブに展開したのを置いてくれと指定

## 1-3.VMwareでKaliLinuxを動かす

VMwareが入っていない場合は [VMware Workstation Player の試用](https://www.vmware.com/jp/products/workstation-player/workstation-player-evaluation.html) でダウンロードしてインストール

私は前入れてたのをアップグレードしたので、インストールしたときのことを覚えてないけれど、[【ゼロからわかる】VMwareのインストール方法と使い方](https://eng-entrance.com/linux-vmware-install) を参考にするといいかもしれない

VMwareを起動して"仮想マシンを開く"を選択する

![choice_vm_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/kalilinux_memo1/choice_vm.png?raw=true)

すると、OSイメージはどれ？と聞かれるので、さっき解凍したOSイメージを選択する

![choice_OS_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/kalilinux_memo1/choice_OSimage.png?raw=true)

"仮想マシンの再生"を選択すると、KaliLinuxが起動する

ここで、"この仮想マシンは移動またはコピーされた可能性があります"と、移動・コピー確認ダイアログが表示されるので、"コピーしました"を選択

また、VMware Toolsのインストールについてのダイアログも出るので、VMware Toolsは便利なのでインストールする

暫く待っているとログイン画面が出てくるのだが、なんとrootユーザーでログインできない（参考: [Kali Linux、rootユーザーをデフォルトで廃止](https://news.mynavi.jp/article/20200108-951143/)）ので、ユーザー名kali、パスワードkaliでログインする

## 次へ

2へ続く…けど、まだ書いてない
`,Vc=`---
title: 高針棒の手の土用干しの見学
summary: 伝統芸能である高針棒の手の道具の虫干しについて
publishedAt: 2018-08-06
tags: ["名東区", "東野メイ"]
legacyPath: 
---

先日(7/16)、高針棒の手の土用干しの見学を見学させていただきました。

実は、今年の名東の日・区民まつりで棒の手の実演を見るまで、棒の手は知っているけど見たことがありませんでした。(仮にも名東区の萌えキャラを名乗るものとして恥ずかしい限りです…orz)

なので、棒の手に関する知識もあまりなく、本当に今回の見学で初めて得る知識ばかりで、とても為になりました。

では、最初に棒の手について簡単な説明を…

棒の手とは尾張や西三河に伝わっている民俗芸能で、その由来は農民の自衛のためとか、神事芸能のためとか言われています。

その中で高針の棒の手は、今のよもぎ台の方から尾張旭市の印場の方に伝わったモノを高針の人々が持ち帰って来たものだそうです。

また、高針の棒の手は平成８年に名古屋市の無形文化財に登録されました。

ちなみに今回、取材・見学してきたのは主に高針の棒の手の中でも直心我流の新屋敷のです。

---

今回撮らせていただいたモノの説明をしていきます。

１枚目の写真ですが
![馬標image](https://github.com/matsunono/matsunono.github.io/blob/master/img/meito_bounote/image1.jpg?raw=true)

この大量の鳥の羽は馬標という馬を飾り付けるための羽で、これらをモサモサに束ねて使われていたそうです。(現在は馬がないので、使われておらず分解されています)

そして、この鳥の羽の上に置かれた棒が武器となる棒(主に子供用だそう)、薙刀、槍、柄が長い鎌など(これらは「花棒」と呼ばれる大人用のものだそう)です。(メイに写真を撮る技術が無いため、とても見づらいです。すいません…m (___)m)

花棒は見た目を良くするために、わざと刃をしっかり留めていないので、カチカチ音がします。

その話を聞いたとき、棒の手は戦うためのモノではなく、魅せるためのモノというのがはっきり出ていると感じました。

---

２枚目の写真ですが
![馬標巻きimage](https://github.com/matsunono/matsunono.github.io/blob/master/img/meito_bounote/image2.jpg?raw=true)

左から馬標巻き、尻駄負、障泥(あおり)、首鎧というモノです。

これらはどれも馬の塔で馬を飾り付けるために使われた馬具ですが、今は先述の通り馬がいないので使われていません。

馬標巻きには賤ヶ岳の戦いのときに秀吉の本陣に突入した佐久間盛政が秀吉の眼光に射すくめられる場面が、障泥には槍で矢を防いで進む加藤義明たちが描かれています。

---

３枚目の写真ですが
![幕image](https://github.com/matsunono/matsunono.github.io/blob/master/img/meito_bounote/image3.jpg?raw=true)

これは秋祭りなどで使われる幕だそうです。

幕には柴田勝家などが描かれているのですが、よく見てみると…

なんと明治４０何とか年(写真を撮り忘れたのでうろ覚え…)に作られたモノだそう！

長い間使われている幕なので、修復された跡がたくさんあるのですが、その中に４枚目の写真のように裏表反対に縫われている部分もあったりします。
![幕image2](https://github.com/matsunono/matsunono.github.io/blob/master/img/meito_bounote/image4.jpg?raw=true)

その方が都合がよくて裏返しで縫われたのか、はたまたうっかりミスで縫ってしまったのかは分からないそうですが、どちらにしても面白いですね。

ちなみに、縫い方が荒い波縫いなのですが、なぜかというと棒の手の道具は女性が触ってはいけないものとされており、幕の修復も男性がやるからだそうです。よかった…危うく触ってしまうとこでした…あぶないあぶない…。

５枚目は鷹羽検藤流の東古谷の幕ですが、写真に納まりきっていませんが、海女と龍が描かれています。(やはりメイには写真を撮る技術がないです)
![東古谷の幕image](https://github.com/matsunono/matsunono.github.io/blob/master/img/meito_bounote/image5.jpg?raw=true)

このように、島によっても幕の絵が全然違うというのが分かります。

また、島によって技の型も異なるそうです。それについては秋祭りに行ってから、また書こうと思っています。

---

この日は６つの島が土用干しをしていましたが、人不足で活動していない島もあるそうで、今活動している島でも人が減ってきているそうです。

また、高針以外の名東区の地域でも昔はあったが、もう途絶えてしまったというところもあるそうです。

このように人不足になってしまう理由は

- 衣装が金糸による刺繍などで高く、新しく引っ越してきた人が気軽に始められない

- 職人が不足しており、草鞋や花棒などの道具が揃えられない

- 棒の手をする人が社会人になって外に出て行ってしまう

- 棒の手をする子供たちが中学、高校生になって部活で忙しい

- 体幹が弱い子供が増えている

などがあるそうです。

しかしこのように先細りするままではいけないと、最近は高針だけでなく豊田市などの他の地域の棒の手保存会と交流をしたりと積極的に行動しているそうです。

メイも、今回の取材・見学で棒の手に対する理解が一層深まり、また、高針の歴史や信仰の話(今回のブログじゃ収まらなかったので、また今度書きますね)を聞き、今まで面白い芸能と感じていた棒の手が、とんでもなく面白い芸能だと感じるようになりました。

また、棒の手が途絶えてしまった地域に住んでいる人間だと今回知ったり、色々近しいと感じるところがありまして…、こんなとんでもなく面白い棒の手を沢山の人に知ってほしいなあと思うようになりました。いぇい。

10月8日の体育の日に高牟神社で秋祭りをやるらしいです。たくさんの島の演武が見れるそうなので、ぜひぜひ見てみて下さいね。(何とかまとまりました…文章を書くのってやはり難しいですね)

参考文献

名東区、「名東区の民俗文化財」、名古屋市、 http://www.city.nagoya.jp/meito/category/155-2-2-0-0-0-0-0-0-0.html 、(参照：2018-08-06)

2018-08-06 最終更新`,Hc=`---
title: RasberryPi Zero WHのセットアップメモ
summary: Raspberry Pi Zero WH のOS起動から初期設定、Chromiumのダウングレードまでの記録です。
publishedAt: 2023-11-13
tags: ["Raspberry Pi", "Setup"]
legacyPath: /rasberrypi_zero_wh_memo1.html
---

## 1.OSの起動まで

## 1-1.物理的な話

用意したもの

- Rasberry Pi Zero WH
- ACアダプタ（5V 3.0A）
- microSDカード（16GB）
- マウス（端子はUSB）
- キーボード（端子はUSB）
- モニター
- miniHDMI-HDMIケーブル

## 1-2.SDカードのフォーマットからOSのインストールまで

今回はSDカードのフォーマット、OSのインストールに [Rasberry Pi Imager](https://www.raspberrypi.com/software/) を用いる。

まず、SDカードをパソコンに挿入し、Rasberry Pi Imagerを開く。

Rasberry Piデバイスを"RASBERRY PI ZERO"、OSを"削除"、ストレージを任意のSDカードとし、フォーマットを行う。

次に、Rasberry Piデバイスを指定せず、OSを"Raspberry Pi OS (32-bit)"、ストレージを任意のSDカードとし、OSインストールを行う。

ここで、Rasberry Piデバイスを指定するとRaspberry Pi OS(32-bit)を指定できない。

Rasberry Piデバイスを"RASBERRY PY ZERO"と指定すると"Raspberry Pi OS(Legacy)"が一番上に来るので、こっちが推奨なのかもしれないが、今回はRaspberry Pi OS(32-bit)を入れる。

"次へ"を選択し、OSをSDカードへインストールする。

## 1-3.初期設定

まず、インストールが終わったSDカードをRasberry Pi Zero WH本体に挿入、本体の電源を入れる。

初回起動時は色々セットアップするので特に時間がかかる。

起動したら、まず日本語表記に変更する。

左上のラズベリーボタンを押し、"Rasberry Pi Configrence"→"Localization"→"Location"へ移動、Languageを"jp"と選択すると国と文字セットも日本に合うので、"OK"を押した後再起動を行う。

次に、このままではChromiumが使えないので、Chromiumのダウングレードを行う。

今回はダウングレードのためにPi-Appsを使用する。

Wi-Fiの設定を行った後、Pi-Appsのインストールを行うために、以下のコマンドを実行する。

\`\`\`bash
$ sudo apt update
$ sudo apt upgrade
$ wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
\`\`\`

ここで、"-qO-"はqゼロではなく、q大文字のオーである。

Pi-Appsのインストールには成功したが、対応していない旨の警告が発生した。

その状態でChromium Downgradeを選択し、Chromium75にダウングレードした結果、ブラウザのアプリケーションを一切読み込まなくなった。

この処理の前にChromiumの再インストール、OSの変更をしたのだが、開かないままなので、現在（2023/11/13）RasBerry Pi Zero WHでブラウザを使うのをあきらめた方が良いかもしれない……。

Raspberry Pi Zero WH を Wi-Fi ヘッドレスで動かすためのセットアップ手順です。

## 準備するもの

- Raspberry Pi Zero WH
- microSD カード（16GB 以上）
- Raspberry Pi Imager

## OS の書き込みと初期設定

Raspberry Pi Imager で OS を書き込む際、歯車アイコンから次を設定しておくと起動後すぐ SSH で繋がります。

- ホスト名: \`raspberrypi.local\`
- SSH の有効化
- Wi-Fi の SSID / パスワード
- ユーザー名・パスワード

## SSH 接続確認

\`\`\`bash
ssh pi@raspberrypi.local
# または IP アドレスを直接指定
ssh pi@192.168.x.x
\`\`\`

## Python 3 の確認

\`\`\`bash
python3 --version
pip3 --version
\`\`\`

## 備考

Zero WH は USB OTG ポートが 1 つしかないため、USB ハブを使う場合は電源に注意が必要です。
`,Uc=`---
title: 「ブルゲ的脱衣将棋」から学ぶコンピュータ将棋の進化
summary: 2001年発売のアダルトゲーム「ブルゲ的脱衣将棋」を起点に、コンピュータ将棋AIの歴史をたどるメモです。
publishedAt: 2020-04-01
tags: ["将棋", "AI", "ゲーム"]
legacyPath: /shogi_soft_memo1.html
---

## 1.まえおき

「ブルゲ的脱衣将棋」は成人向けゲームです。

このページでは成人向け画像を掲載していませんが、18歳未満の方やアダルトコンテンツに興味が無い方はブラウザバックして下さい。

## 2.「ブルゲ的脱衣将棋」とは

まず、2019年にツイッターで話題になった[(それらのツイートのまとめ)](https://togetter.com/li/1442736)「ブルゲ的脱衣将棋」をご存知だろうか？

「ブルゲ的脱衣将棋」は、ブルーゲイルという老舗のアダルトゲーム会社が2001年に発売したアダルトゲーム（エロゲ）である。

ブルゲは抜きゲーが多いので他の作品をやったことがないが、I'veが好きなので曲はよく聴くし、Treating2Uの曲は特に好きである。

ゲームの内容は、ブルーゲイルの人気作品のヒロインと将棋で戦い、服を脱がせる…という感じである。

ジャンルとしては脱衣ゲームに入るのだが、脱衣ゲームは星の数ほどある

では何故、今更そんな古いゲームを…と思ったそこのあなた

これはただの脱衣将棋では無い…コンピュータがめちゃくちゃ強い脱衣将棋なのだ…

"エロゲーで本格将棋が遊べるのは業界史上初めて"と、公式のホームページ[(魚拓)](https://web.archive.org/web/20031011205023/http://www.phoenix-c.or.jp/bluegale/datui01.htm)で自信満々に言っているが、本当に強い…

## 2-1.脱衣ゲームとは

負けたら服を脱ぐルールのゲームで、ルーツは野球拳である。

脱衣将棋ゲームより脱衣麻雀ゲームの方が多いので、後者の話をしよう。

昔の麻雀ゲームの思考アルゴリズムは精度が悪くイカサマをするから、暇つぶし程度にしか遊んでもらえなくて…うーん魅力を出すには…あっ、脱がせようみたいなアイデアから脱衣麻雀ができたそう。

1983年日本物流から発売のアーケードゲーム「ジャンゴウナイト」が最初の脱衣麻雀ゲームである。

因みに、野球拳のコンピュータゲームは1981年辺りにハドソンから発売された、MZ-700用ゲーム「野球拳」が最初らしい。（ついでに言うと「野球拳」は最古の日本製のエロゲと言われている）

野球拳といえばエニックスが「ロリータシンドローム」って野球拳（とか確率ゲーの詰め合わせ）ゲームを出してたって話を思い出したよ。

## 2-2.勝てない脱衣ゲームに価値(勝ち)はあるのか

最初に「ブルゲ的脱衣将棋」のコンピュータがとんでもなく強いという話をしたが、じゃあどんなアルゴリズムなんだろうと思い、復刻版FFP仕様を買った松ノ氏…そこに悲劇が襲い掛かる…

READMEファイルが無い！

コンピュータの強さを変えるプログラムも無い！

ええ…復刻版は将棋ゲームとBGMとかCGとかの周辺の物のみなんですか…

買ったのに、アルゴリズム分からないじゃない…

同じキワモノ枠でも、シルバースタージャパンから発売の[「お願いおねだり将棋」](https://onedari.jp/)なら、銀星将棋の思考ルーチンかぁと分かるのに…

どこどこの将棋ソフトと同じ思考ルーチンだとかいう情報は見つからないし、丁寧な記事[「ブルゲ的脱衣将棋のAIの凄さは「強さ」だけじゃない」](https://midorism64.hatenablog.com/entry/2019/10/20/175024)を見る限り、多分独自でプログラム作ったとも読み取れそうだ。

まあ、アルゴリズムなどについては次のセクションで考察するとして、このセクションではエロゲ部分の考察をしよう。

さて、この見出し"勝てない脱衣ゲームに価値(勝ち)はあるのか"だが、答えはイエスである。

どういうことかというと、一定の条件（待ったを許可するや、と成金、先に相手の駒を取るなど）を満たすと、1枚…また1枚…とヒロインが脱ぐシステムなのである。

将棋で勝たなくとも、脱がせば勝てるみたいな救済措置があるので、勝負とは別次元の勝ちが存在するのだ。

ちなみにこの別次元勝ちルールはストーリーモードのみで、フリー対戦モードは脱衣or負け、Dead or Aliveの世界なので、将棋が得意な人も安心して遊んでみてほしい。

まぁ、2020年に将棋を指す目的で買うのは微妙だと思う。もっとコンピュータが強い将棋ソフトが沢山あるし。

さて、エロゲ部分の話をすると止まらなくなるので、今回の本命である将棋ソフトのAIの進化について話していこうと思う。

---

## 3.コンピュータ将棋の歴史

ここからは真面目な話をしていこうと思う。

現在、多数のコンピュータ将棋ソフトが存在し、中にはプロ棋士に勝つソフトもあるし、プロ棋士が指し方の参考にするソフトもある。（ドワンゴ主催の電王戦を見ているとコンピュータ将棋の進化がよく分かるよね。）

前のページで話した、「ブルゲ的脱衣将棋」は2001年発売のゲームでアマ2級～初段ということで話題になったが、プロ棋士に勝てる強さではない。

では、どうやってプロ棋士に勝てるまでコンピュータ将棋が進化していったかを時代の流れに沿って見ていこうと思う。

## 3.コンピュータ将棋の黎明期

コンピュータ将棋の黎明期は、そりゃあもう弱くて弱くて…みたいな感じであった。

と説明しようと思ったが、とても詳しい説明があった上、読みやすかったので、ちょっとやる気をなくした。

詳しい話は、清愼一氏の["コンピュータ将棋の初期の歴史"](https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=99287&item_no=1&page_id=13&block_id=8)（情報処理学会の電子図書館）を読んでもらうとして、私は簡単に説明を書くことにする。

**1967年**: 日立製作所から詰将棋を解くプログラムが発表される（1967年7月4日 朝日新聞 朝刊15面に掲載）

コマの動き、ルールを教えて、コマの配置を座標で渡して解かせたそうな。コマの数が少ないので全幅探索でも解けそうと思ったが、枝刈り使ってるのかね。min-max定理って1950年代に発表されてるし。

（以下、執筆中）
`,Wc=`---
title: UbuntuにlabelImgを入れるまでメモ
summary: Ubuntu上でアノテーションツールlabelImgを動かすまでの試行錯誤の記録です。
publishedAt: 2020-04-01
tags: ["Ubuntu", "Python", "labelImg", "機械学習"]
legacyPath: /ubuntu_memo1.html
---

## 1.UbuntuにlabelImg入れるまでメモ

言語を英語に変えて再起動

\`\`\`bash
$ sudo apt-get update
$ sudo apt install python3.7 -y
$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 1
$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2
$ sudo update-alternatives --config python3
\`\`\`

ここで2がpython3.7だったので、\\*を2にしますって書く（"2"と打ってenter）

\`\`\`bash
$ python3 --version
\`\`\`

これで3.7.5って出たら成功

\`\`\`bash
$ sudo apt install python3-pip
$ sudo pip3 install --upgrade pip
$ sudo apt install python3-venv
\`\`\`

\`\`\`bash
$ unzip labelImg-master.zip
$ sudo apt-get install pyqt5-dev-tools
\`\`\`

labelImg-masterディレクトリに移動

\`\`\`bash
$ sudo pip3 install -r requirements/requirements-linux-python3.txt
\`\`\`

これが通ったらpip3上手く入ったって事（昨晩ここで失敗し続けた）

---

（追記）この時点で、"A problem occurred when chacking for the updates."が出ている

"New Terminal"を押しても反応しない…(- -;)

pythonのバージョンがーって話をネットで見かけたので、

\`\`\`bash
$ sudo update-alternatives --config python3
\`\`\`

で、"0"を打ってenter

python3.6にバージョンを戻して、"New Terminal"を押したらウインドウ開いた

そして、"A problem occurred when chacking for the updates."の"Show Updates"が開けたので、ソフトウェアのアップデートをする

再起動しますか？（あとで/いま）…今やって上手くいかなくても、ダメージ少ないのでは？？？

再起動後、右上の止まれアイコンが消え、Terminalの起動ができることを確認

---

その後（python3.6が開くように設定してから）labelImg.pyを開こうとすると、以下のコマンドを実行

\`\`\`bash
$ make qt5py3
$ python3 labelImg.py
\`\`\`

するとエラーが出るようになってしまった

\`\`\`
Traceback (most recent call last):
  File "labelImg.py", line 40, in <module>
    from libs.labelFile import LabelFile, LabelFileError
  File "/home/matsuno/labelImg-master/libs/labelFile.py", line 10, in <module>
    from libs.pascal_voc_io import PascalVocWriter
  File "/home/matsuno/labelImg-master/libs/pascal_voc_io.py", line 6, in <module>
    from lxml import etree
ModuleNotFoundError: No module named 'lxml'
\`\`\`

pip3コマンドも通らなくなってしまった、昨晩こけた時と同じ状態に…

なので、python3.7が開くように設定

\`\`\`bash
$ sudo update-alternatives --config python3
\`\`\`

で、"2"を打ってenter

その後labelImg.pyを動かす

\`\`\`bash
$ python3 labelImg.py
\`\`\`

ウインドウが出た！やったー！！

ただこの方法だと、うっかりTerminalを閉じたら二度と開けなくなるので、別の方法を探したいものだ

python3 = python3.6が開くように設定した状態で、

\`\`\`bash
$ python3.7 labelImg.py
\`\`\`

で開けば良いのでは？？？となったため、解決しました

---

## （2020/09/23追記）

パソコン組んだので、そのパソコンでもlabelImg使えるようにしたくなった

Ubuntu入れて、python3のバージョンを調べたら3.8.2だったから、labelImg-masterディレクトリに移動

\`\`\`bash
$ sudo pip3 install -r requirements/requirements-linux-python3.txt
\`\`\`

するとエラーが出てきた（lxml のビルド失敗、libxml2が見つからない等）

その後、

\`\`\`bash
$ python3 labelImg.py
\`\`\`

とコマンド打ったら

\`\`\`
Traceback (most recent call last):
  File "labelImg.py", line 41, in <module>
    from libs.labelFile import LabelFile, LabelFileError, LabelFileFormat
  ...
ModuleNotFoundError: No module named 'lxml'
\`\`\`

とエラーが出てプログラムが開けない

lxmlモジュールが見つからないようなので、

\`\`\`bash
$ sudo pip3 install lxml
\`\`\`

と打ち込んだ後、

\`\`\`bash
$ python3 labelImg.py
\`\`\`

と打ち込んだらプログラムが動いたので、良かった
`,Gc=`modulepreload`,Kc=function(e){return`/`+e},qc={},Jc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Kc(t,n),t in qc)return;qc[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Gc,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Yc(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!t)return{meta:{},body:e};let n=t[1],r=t[2];if(n===void 0||r===void 0)return{meta:{},body:e};let i={};for(let e of n.split(`
`)){let t=e.indexOf(`:`);if(t<0)continue;let n=e.slice(0,t).trim(),r=e.slice(t+1).trim();if(r.startsWith(`[`))try{i[n]=JSON.parse(r)}catch{i[n]=r}else i[n]=r}return{meta:i,body:r}}async function Xc(e){try{let{marked:t}=await Jc(async()=>{let{marked:e}=await import(`./marked.esm-CDepialX.js`);return{marked:e}},[]);return await t(e)}catch{return`<pre class="whitespace-pre-wrap leading-7">${e.replace(/</g,`&lt;`)}</pre>`}}async function Zc(e,t){let{meta:n,body:r}=Yc(t),i=await Xc(r.trim());return{slug:e,...n,html:i}}async function Qc(e){let t=[];for(let[n,r]of Object.entries(e)){let e=await Zc(n.split(`/`).pop().replace(/\.md$/,``),r);t.push(e)}return t.sort((e,t)=>t.publishedAt.localeCompare(e.publishedAt))}var $c=Object.assign({"/src/content/posts/jetson-nano-playground.md":Rc,"/src/content/posts/jetson-nano-setup.md":zc,"/src/content/posts/kali-linux-on-vmware-player.md":Bc,"/src/content/posts/meito-bounote-mushiboshi.md":Vc,"/src/content/posts/raspberry-pi-zero-wh-setup.md":Hc,"/src/content/posts/shogi-soft-ai-history.md":Uc,"/src/content/posts/ubuntu-labelimg-setup.md":Wc}),el=null;async function tl(){return el||(el=await Qc($c),el)}async function nl(e=3){return(await tl()).slice(0,e)}async function rl(e){return(await tl()).find(t=>t.slug===e)}var il={class:`space-y-8`},al={class:`hero overflow-hidden rounded-[2rem] bg-base-200 shadow-xl`},ol={class:`hero-content flex-col items-start gap-8 px-8 py-12 lg:flex-row lg:items-end lg:justify-between`},sl={class:`max-w-2xl space-y-5`},cl={class:`flex flex-wrap gap-3`},ll={class:`stats stats-vertical w-full max-w-md bg-base-100 shadow lg:stats-horizontal`},ul={class:`stat`},dl={class:`stat-value text-primary`},fl={class:`space-y-4`},pl={class:`flex items-center justify-between`},ml={class:`grid gap-4 lg:grid-cols-3`},hl={class:`card-body gap-3`},gl={class:`flex flex-wrap gap-2 text-sm text-base-content/60`},_l={class:`card-title text-xl`},vl={class:`leading-7 text-base-content/75`},yl={class:`card-actions justify-end`},bl=Bn({__name:`HomeView`,setup(e){let t=Wt([]),n=Wt([]);tr(async()=>{t.value=await nl(3),n.value=await tl()});let r=e=>new Intl.DateTimeFormat(`ja-JP`,{year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date(e));return(e,i)=>{let a=dr(`RouterLink`);return W(),G(`div`,il,[K(`section`,al,[K(`div`,ol,[K(`div`,sl,[i[2]||=K(`p`,{class:`text-sm uppercase tracking-[0.35em] text-base-content/60`},`Home`,-1),i[3]||=K(`h1`,{class:`text-4xl font-bold tracking-tight lg:text-6xl`},`松ノさんの為の備忘録メモ置き場`,-1),i[4]||=K(`p`,{class:`text-base leading-8 text-base-content/75 lg:text-lg`},` Jetson Nano や Linux の作業記録、趣味の民俗文化研究を整理していくためのサイトです。 `,-1),K(`div`,cl,[q(a,{class:`btn btn-primary`,to:`/blogs`},{default:z(()=>[...i[0]||=[J(`記事一覧を見る`,-1)]]),_:1}),q(a,{class:`btn btn-outline`,to:`/profile`},{default:z(()=>[...i[1]||=[J(`プロフィール`,-1)]]),_:1})])]),K(`div`,ll,[K(`div`,ul,[i[5]||=K(`div`,{class:`stat-title`},`公開中の記事`,-1),K(`div`,dl,A(n.value.length),1)])])])]),K(`section`,fl,[K(`div`,pl,[i[7]||=K(`h2`,{class:`text-2xl font-semibold`},`最近のメモ`,-1),q(a,{class:`link link-hover`,to:`/blogs`},{default:z(()=>[...i[6]||=[J(`すべて見る`,-1)]]),_:1})]),K(`div`,ml,[(W(!0),G(H,null,hr(t.value,e=>(W(),G(`article`,{key:e.slug,class:`card bg-base-100 shadow-sm ring-1 ring-base-300`},[K(`div`,hl,[K(`div`,gl,[K(`span`,null,A(r(e.publishedAt)),1),(W(!0),G(H,null,hr(e.tags,e=>(W(),G(`div`,{class:`badge badge-outline`,key:e},A(e),1))),128))]),K(`h3`,_l,A(e.title),1),K(`p`,vl,A(e.summary),1),K(`div`,yl,[q(a,{class:`btn btn-sm btn-ghost`,to:{name:`blog-detail`,params:{slug:e.slug}}},{default:z(()=>[...i[8]||=[J(` 詳細へ `,-1)]]),_:1},8,[`to`])])])]))),128))])])])}}}),xl={key:0,class:`flex justify-center py-20`},Sl={key:1,class:`space-y-8`},Cl={class:`rounded-[2rem] bg-base-200 px-8 py-12 shadow-xl`},wl={class:`flex flex-wrap items-center gap-2 text-sm text-base-content/60`},Tl={class:`mt-4 text-4xl font-bold tracking-tight lg:text-5xl`},El={class:`mt-4 max-w-3xl leading-8 text-base-content/75`},Dl={class:`mt-6 flex flex-wrap gap-3`},Ol=[`href`],kl={class:`card bg-base-100 shadow-sm ring-1 ring-base-300`},Al=[`innerHTML`],jl={key:2,class:`hero rounded-[2rem] bg-base-200 py-16 shadow-xl`},Ml={class:`hero-content text-center`},Nl={class:`max-w-md space-y-4`},Pl=Bn({__name:`BlogDetailView`,props:{slug:{}},setup(e){let t=e,n=Wt(void 0),r=Wt(!0);async function i(e){r.value=!0,n.value=await rl(e),r.value=!1}tr(()=>i(t.slug)),Mn(()=>t.slug,e=>i(e));let a=e=>new Intl.DateTimeFormat(`ja-JP`,{year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date(e));return(e,t)=>{let i=dr(`RouterLink`);return r.value?(W(),G(`div`,xl,[...t[0]||=[K(`span`,{class:`loading loading-spinner loading-lg text-primary`},null,-1)]])):n.value?(W(),G(`article`,Sl,[K(`header`,Cl,[K(`div`,wl,[K(`span`,null,A(a(n.value.publishedAt)),1),(W(!0),G(H,null,hr(n.value.tags,e=>(W(),G(`div`,{class:`badge badge-outline`,key:e},A(e),1))),128))]),K(`h1`,Tl,A(n.value.title),1),K(`p`,El,A(n.value.summary),1),K(`div`,Dl,[q(i,{class:`btn btn-primary`,to:`/blogs`},{default:z(()=>[...t[1]||=[J(`一覧へ戻る`,-1)]]),_:1}),n.value.legacyPath?(W(),G(`a`,{key:0,class:`btn btn-outline`,href:n.value.legacyPath,target:`_blank`,rel:`noreferrer`},` 旧HTMLを見る `,8,Ol)):Ui(``,!0)])]),K(`section`,kl,[K(`div`,{class:`card-body prose prose-slate max-w-none`,innerHTML:n.value.html},null,8,Al)])])):(W(),G(`section`,jl,[K(`div`,Ml,[K(`div`,Nl,[t[3]||=K(`h1`,{class:`text-3xl font-bold`},`記事が見つかりません`,-1),t[4]||=K(`p`,{class:`leading-7 text-base-content/75`},` 指定された slug に対応する記事がまだありません。まずは一覧から記事を選んでください。 `,-1),q(i,{class:`btn btn-primary`,to:`/blogs`},{default:z(()=>[...t[2]||=[J(`記事一覧へ`,-1)]]),_:1})])])]))}}}),Fl={class:`space-y-8`},Il={class:`grid gap-5 lg:grid-cols-2`},Ll={class:`card-body gap-4`},Rl={class:`flex flex-wrap items-center gap-2 text-sm text-base-content/60`},zl={class:`card-title text-2xl`},Bl={class:`leading-7 text-base-content/75`},Vl={class:`card-actions justify-end`},Hl=Bn({__name:`BlogsListView`,setup(e){let t=Wt([]);tr(async()=>{t.value=await tl()});let n=e=>new Intl.DateTimeFormat(`ja-JP`,{year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date(e));return(e,r)=>{let i=dr(`RouterLink`);return W(),G(`div`,Fl,[r[1]||=K(`section`,{class:`rounded-[2rem] bg-base-200 px-8 py-12 shadow-xl`},[K(`p`,{class:`text-sm uppercase tracking-[0.3em] text-base-content/60`},`Blogs`),K(`h1`,{class:`mt-3 text-4xl font-bold tracking-tight lg:text-5xl`},`ブログ一覧`),K(`p`,{class:`mt-4 max-w-3xl leading-8 text-base-content/75`},` セットアップ記録や実験ログなど書いた記事の一覧です。 `)],-1),K(`section`,Il,[(W(!0),G(H,null,hr(t.value,e=>(W(),G(`article`,{key:e.slug,class:`card border border-base-300 bg-base-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg`},[K(`div`,Ll,[K(`div`,Rl,[K(`span`,null,A(n(e.publishedAt)),1),(W(!0),G(H,null,hr(e.tags,e=>(W(),G(`div`,{class:`badge badge-outline`,key:e},A(e),1))),128))]),K(`h2`,zl,[q(i,{to:{name:`blog-detail`,params:{slug:e.slug}}},{default:z(()=>[J(A(e.title),1)]),_:2},1032,[`to`])]),K(`p`,Bl,A(e.summary),1),K(`div`,Vl,[q(i,{class:`btn btn-primary`,to:{name:`blog-detail`,params:{slug:e.slug}}},{default:z(()=>[...r[0]||=[J(` 続きを読む `,-1)]]),_:1},8,[`to`])])])]))),128))])])}}}),Ul={name:`松ノさんメモ`,role:`情報工学の修士課程卒業後、パソコンカタカタ屋さんをやっています。`,bio:[`個人用の備忘録として、セットアップや実験メモをあとから見返しやすい形で残してます。`,`工事中、許してください。`],links:[{label:`Twitter`,href:`https://twitter.com/Matsuno_pic`},{label:`GitHub`,href:`https://github.com/matsunono`}]},Wl={class:`space-y-8`},Gl={class:`hero overflow-hidden rounded-[2rem] bg-base-200 shadow-xl`},Kl={class:`hero-content w-full flex-col items-start gap-8 px-8 py-12 lg:flex-row lg:items-center lg:justify-between`},ql={class:`max-w-2xl space-y-4`},Jl={class:`text-4xl font-bold tracking-tight lg:text-5xl`},Yl={class:`text-lg text-base-content/80`},Xl={class:`card w-full max-w-sm bg-base-100 shadow-md`},Zl={class:`card-body`},Ql={class:`space-y-3`},$l=[`href`],eu={class:`card bg-base-100 shadow-sm`},tu={class:`card-body gap-4`},nu=Bn({__name:`ProfileView`,setup(e){return(e,t)=>(W(),G(`div`,Wl,[K(`section`,Gl,[K(`div`,Kl,[K(`div`,ql,[t[0]||=K(`p`,{class:`text-sm uppercase tracking-[0.3em] text-base-content/60`},`Profile`,-1),K(`h1`,Jl,A(Jt(Ul).name),1),K(`p`,Yl,A(Jt(Ul).role),1)]),K(`div`,Xl,[K(`div`,Zl,[t[1]||=K(`h2`,{class:`card-title`},`Links`,-1),K(`div`,Ql,[(W(!0),G(H,null,hr(Jt(Ul).links,e=>(W(),G(`a`,{key:e.href,href:e.href,class:`btn btn-outline btn-block`,target:`_blank`,rel:`noreferrer`},A(e.label),9,$l))),128))])])])])]),K(`section`,eu,[K(`div`,tu,[t[2]||=K(`h2`,{class:`card-title text-2xl`},`About`,-1),(W(!0),G(H,null,hr(Jt(Ul).bio,e=>(W(),G(`p`,{key:e,class:`leading-8 text-base-content/80`},A(e),1))),128))])])]))}}),ru=Lc({history:ic(`/`),routes:[{path:`/`,name:`home`,component:bl},{path:`/blogs`,name:`blogs`,component:Hl},{path:`/blogs/:slug`,name:`blog-detail`,component:Pl,props:!0},{path:`/profile`,name:`profile`,component:nu},{path:`/:pathMatch(.*)*`,redirect:`/`}]}),iu=so(Lo);iu.use(Eo()),iu.use(ru),iu.mount(`#app`);