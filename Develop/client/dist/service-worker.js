if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let t={};const o=e=>n(e,d),c={module:{uri:d},exports:t,require:o};i[d]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(s(...e),t)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"c42d74c7ac98c23a92763a7636500edf"},{url:"install.bundle.js",revision:"b42331d8461af732490097ddee34e88b"},{url:"main.bundle.js",revision:"bae6d6815385e22fef3fc84d784844dd"},{url:"src-sw.js",revision:"0c44e3f71c2de2cdc061cedade61600d"}],{})}));