if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),d={module:{uri:c},exports:n,require:r};s[c]=Promise.all(f.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-330ce1d9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"firefighters"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AbonosLayout.5648d72a.js",revision:"bf434bbf9f7abfaa2822e0d7ce8f8b1a"},{url:"assets/axios.f2954c6b.js",revision:"0c3aee90d7eaa251a8a1fc3e8f0c7270"},{url:"assets/ClosePopup.b01f8d2d.js",revision:"f51821e85420d3c5ba309436ddf953e1"},{url:"assets/ErrorNotFound.2fa01d91.js",revision:"00daaad85c7b65f51ade4f0136b1d403"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/History.68cbe611.js",revision:"06efc5f2cb96369f6b25eaa93d4db055"},{url:"assets/Index.272636e3.js",revision:"cc35ea1232ae0891514fef48e97fccd4"},{url:"assets/index.64e136b7.css",revision:"9fb48b2948d1459028bba1f64b2cbc1a"},{url:"assets/Index.673afaa1.js",revision:"3b5f59bde219a740d9403f670e947f85"},{url:"assets/index.73680644.js",revision:"1053d515f8af32b5dcbb4794c55f0f51"},{url:"assets/Index.a6c681bc.css",revision:"e5ce6c6d39ef60633ff3a79a2a08850d"},{url:"assets/Index.d4997a52.js",revision:"8c97b2a3bd91f847c618731991686c07"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.e4bd0001.js",revision:"1d1120f19176a9d4d5a6a9a7835f3905"},{url:"assets/QHeader.b40fa241.js",revision:"62aa01d99acb11a26d719d1ef2a77c5c"},{url:"assets/QLayout.56f14e8c.js",revision:"21270e798d18ff83fce46af61c2afeac"},{url:"assets/QSpinnerDots.708e2d40.js",revision:"f130132e88fd048ee01593891f3ebe76"},{url:"assets/QuotesLayout.d7531b58.js",revision:"8b2b98bab9474a89ffd42475790ab236"},{url:"assets/SalidasLayout.4be6e314.js",revision:"207d8a3daab9e7f76677ac0bd0230e73"},{url:"assets/scroll.5ed3c8c2.js",revision:"9dc878f647d443fa93b4d687cb0442b9"},{url:"assets/use-quasar.2852789f.js",revision:"771ef42db91ed418ce7a666511218f7d"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"7f2e1725b3a0a25bbed8435c72446094"},{url:"manifest.json",revision:"6c63a27c2cefce417991649796a3c2ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
