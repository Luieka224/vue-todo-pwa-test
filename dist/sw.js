if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>n(e,d),f={module:{uri:d},exports:o,require:c};i[d]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B5l6N2nq.css",revision:null},{url:"assets/index-S9e04f3U.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/vue-192.png",revision:"d0ab2eb2ad8f2c1910a28f12a6cc10be"},{url:"img/vue-512.png",revision:"b007690a5399479ef2e864a119bf22d6"},{url:"index.html",revision:"73e6bcb88e9bfdec7898bbb37040e4cc"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vue.png",revision:"cddcd256236f0024ff9ae1ff1430e39f"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/vue-192.png",revision:"d0ab2eb2ad8f2c1910a28f12a6cc10be"},{url:"img/vue-512.png",revision:"b007690a5399479ef2e864a119bf22d6"},{url:"manifest.webmanifest",revision:"9b780cdae54d1d1c5e031d93ff23300a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
