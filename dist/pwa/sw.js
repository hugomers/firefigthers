if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const r=e=>c(e,f),o={module:{uri:f},exports:n,require:r};s[f]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-330ce1d9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"firefighters"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.00cf310b.js",revision:"c0464ee9650e9cf798f1c895b3839574"},{url:"assets/ClosePopup.b99c5183.js",revision:"be7658a03dbe5d3485ce141982f51d33"},{url:"assets/ErrorNotFound.52207793.js",revision:"5a2ce6fdfeb22a4ab409479afab51b13"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/History.e4f83d0c.js",revision:"1fa0b0c9a2b05fc28479e6c617cf4136"},{url:"assets/Index.23ab80a2.js",revision:"783262b0b43bfa001ca9e1fbafd80565"},{url:"assets/Index.5d014bc9.js",revision:"2b58492c5b48320f2e70544098c1527f"},{url:"assets/index.64e136b7.css",revision:"9fb48b2948d1459028bba1f64b2cbc1a"},{url:"assets/Index.a6c681bc.css",revision:"e5ce6c6d39ef60633ff3a79a2a08850d"},{url:"assets/index.aeaedf5f.js",revision:"d1953a89e816daf05e3b1b16af0d085f"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.cd50a914.js",revision:"ea15d8271816af5f7bbc69b47e03016b"},{url:"assets/QHeader.2f98046a.js",revision:"1cd15f40ea7b6744a1da36cfe3cdf1e0"},{url:"assets/QLayout.32057cb6.js",revision:"74e98064c46a69d6782e092cb63ed94a"},{url:"assets/QuotesLayout.48d01950.js",revision:"d8774de3e772e007ed5346d2bdc880b3"},{url:"assets/SalidasLayout.104baa79.js",revision:"8984c7e6a2ebb9c591b7afa37f0b0286"},{url:"assets/scroll.40262c0e.js",revision:"9c42ae211cf99dc0bcb0383e94b9aab8"},{url:"assets/use-quasar.ee3478cd.js",revision:"8b38d90843034a97ebc530de4dae4bce"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"755e34d0775390a5fb84b76e4ccae8a3"},{url:"manifest.json",revision:"6c63a27c2cefce417991649796a3c2ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
