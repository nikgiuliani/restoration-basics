"use strict";(self.webpackChunkrestoration_basics=self.webpackChunkrestoration_basics||[]).push([[8766],{8766:(W,m,E)=>{E.r(m),E.d(m,{startTapClick:()=>k});var u=E(5730);const k=s=>{let e,p,i,o=10*-h,r=0;const U=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{o=(0,u.u)(t),R(t)},A=()=>{i&&clearTimeout(i),i=void 0,e&&(S(!1),e=void 0)},D=t=>{e||w(M(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:d,y:a}=(0,u.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||b(e,d,a),S(!0)}if(t){const g=f.get(t);g&&(clearTimeout(g),f.delete(t)),t.classList.remove(l);const I=()=>{b(t,d,a),i=void 0};v(t)?I():i=setTimeout(I,P)}e=t},b=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!U)return;const a=_(t);null!==a&&(C(),p=a.addRipple(n,d))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!v(n)){const a=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,a)}else n.classList.remove(l)},c=document;c.addEventListener("ionGestureCaptured",A),c.addEventListener("touchstart",t=>{o=(0,u.u)(t),D(t)},!0),c.addEventListener("touchcancel",L,!0),c.addEventListener("touchend",L,!0),c.addEventListener("pointercancel",A,!0),c.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-h;o<n&&D(t)},!0),c.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-h;o<n&&R(t)},!0)},M=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const e=o[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=s=>s.classList.contains("ion-activatable-instant"),_=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",P=200,T=200,h=2500}}]);