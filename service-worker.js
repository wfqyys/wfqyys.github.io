if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/bc09934ba1cb.html/index.html",revision:"d6982ffc0450186828b6efca314bcba7"},{url:"2023/04/86b60808adfa.html/index.html",revision:"bc3c89504d51183941b9c5825d93ce68"},{url:"2023/10/1c82e689d5ba.html/index.html",revision:"e5011f21180ba9f6a6489ee8c33ce3d2"},{url:"2023/10/29ae240414be.html/index.html",revision:"2207666a512d5ba03823a88f8242b129"},{url:"2023/10/5012d3bbed0d.html/index.html",revision:"caa86155ee952e2677e465c82942949e"},{url:"2023/10/580a5439014b.html/index.html",revision:"1ae7fedcd727c7f1f85ac7553eeed366"},{url:"2023/10/8d78e5691f99.html/index.html",revision:"c574f995e8dbe3b73e0012ab9a8f3ce6"},{url:"2023/10/c02f32772b20.html/index.html",revision:"16b622ba6bbffa72b1aa7369b30d3ea0"},{url:"2023/10/d4d9d36aa435.html/index.html",revision:"b7d869c603579fdabf67064834dd0733"},{url:"2023/10/e23f8810960f.html/index.html",revision:"471488421e5ab02528cbc2f99f2339aa"},{url:"2023/11/2c85e03aef90.html/index.html",revision:"5a01c1616a3ef31239df3b064511a2d0"},{url:"404.html",revision:"c7762f70dc003c25adfbff9c5369144c"},{url:"about/index.html",revision:"98ec8773c3068232349ba0b9c7841061"},{url:"air-conditioner/index.html",revision:"d2017dd9afe65d8c3bbca4c1c1f27f4a"},{url:"album/index.html",revision:"e5abc2a1abe05c75e752586644277811"},{url:"anzhiyu/random.js",revision:"f0fea380f76a0ae8f2cae5ee7cc02748"},{url:"archives/2023/03/index.html",revision:"23c67c0507396194566a6e3ac54225d9"},{url:"archives/2023/04/index.html",revision:"2b2973f307d666922412121792cbbc24"},{url:"archives/2023/10/index.html",revision:"f61089638c3d5e2a08436fcfa3263ec7"},{url:"archives/2023/11/index.html",revision:"91ce4a1ef826b14f340da2bfee5f15c5"},{url:"archives/2023/index.html",revision:"1ade82e30f1823b3f8d6007b27d9d644"},{url:"archives/2023/page/2/index.html",revision:"6b3859867813ea23ea5899874ccc4b53"},{url:"archives/index.html",revision:"2778473856196130bc345aa76ae03b4c"},{url:"archives/page/2/index.html",revision:"321fc36905a2373d283209c05d7b7467"},{url:"bangumis/index.html",revision:"dcc251538e9f2ff708bab08db9f0379e"},{url:"categories/index.html",revision:"3749d452da41e582141324dcec8f83de"},{url:"categories/学习/index.html",revision:"41e07b72ed55be91dac6fdb7815fc4dd"},{url:"categories/技术/index.html",revision:"fabd5ea9789c75c63e0148a7a508cab0"},{url:"comments/index.html",revision:"60cf6bedb4406adc4f0b8d89c51bb0da"},{url:"Cookies/index.html",revision:"ad8c36a3cb6aa38a5a4f4d64508972a2"},{url:"copyright/index.html",revision:"8ffccc07d027bf3f350c12fc2a455a9b"},{url:"css/background.css",revision:"ce8adbb9eccd6cb55d7547373b72e7ba"},{url:"css/fps.css",revision:"4d359d4362d30e9e8c02c136646483d9"},{url:"css/home.css",revision:"a61baf03a76ba5a086e537f58828b9fc"},{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"7897b316bec9b5eb555ef439593dfc90"},{url:"css/loading.css",revision:"e17d3ea039c9cd55b267e1d410a7691f"},{url:"css/todolist.css",revision:"354a9a251842bdd3bbbde92b02049227"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"e46c33b9539d2c7e74ed78176b3da2b9"},{url:"dailyPhoto/index.html",revision:"3fe9e279a18452f4aa3c3e729576f14a"},{url:"equipment/index.html",revision:"3a3eba9f90d5e9b62761d7d4da269935"},{url:"essay/index.html",revision:"8ab93bba46c0178403faeaf7eb282bc8"},{url:"fcircle/index.html",revision:"f7d2b12888a7ad523f4f8e4b7aa6c2fd"},{url:"games/index.html",revision:"75acfef06a0f21ce567e16346f2788f5"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"90492aef02fd83c16cb9b1328e1a7ef3"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/WeChatpay.jpg",revision:"a3a4ffa8c2c2c839934490616308704e"},{url:"index.html",revision:"77fda4d509c9e5522fcd2252269ed0f3"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/fontawesome.js",revision:"29d1fb021fb1705eb0933051c66bf35e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/icon.js",revision:"bd8c1e4f7aaa5be6868a00f5f01a375a"},{url:"js/imgloaded.js",revision:"f60c52924a5f28c4fd2936e937c57225"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"7e926531e9c8fa91451aea20f3674cf8"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/sun_moon.js",revision:"6c8d335ab69b3b920877d5c6b8b7b205"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/twopeople.js",revision:"2d8a532b4f48a1dff3740da587e00d63"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"1935fc91af2168b63e3012314a92e0ea"},{url:"link/index.html",revision:"2651bdf5639c96ebba54e952c1917d62"},{url:"music/index.html",revision:"cd64c915b0a4ade9c7ca6e7da02703b9"},{url:"page/2/index.html",revision:"5661a84f9cff8057c60d6f894ae8006c"},{url:"privacy/index.html",revision:"4fb2f89e0b47950102b2cc963ac4ca80"},{url:"tags/801/index.html",revision:"73bf4196f905e5ba33e93067c0fbb9e4"},{url:"tags/anzhiyu/index.html",revision:"2d54cb18d51b09b4ba44da9a46a0b52f"},{url:"tags/Centos/index.html",revision:"046542745c810b9ba9073fd53dfff5b6"},{url:"tags/Docker/index.html",revision:"26ed2d95d5d76d9212d35bbebd56f76d"},{url:"tags/hexo/index.html",revision:"051b17dbf452d8d3d56a0a9f8f79428f"},{url:"tags/index.html",revision:"c7a43301de50556a3aa5cd3f2318ac68"},{url:"tags/node/index.html",revision:"cfa5367eb9f97cb38b9507037bbdf542"},{url:"tags/NVM/index.html",revision:"9ba44e3ba4ec1dae87010a1945d45167"},{url:"tags/Redis/index.html",revision:"4fd20ff00a59922ce83fae4653b0f145"},{url:"tags/Ubuntu/index.html",revision:"f812486da4d7a724c47de0c2508ef8ec"},{url:"tags/学习/index.html",revision:"708baed657efdc73319864213aacde2a"},{url:"tags/生物化学/index.html",revision:"5f6c314a55be8c79e48bc4f9d1160f0f"},{url:"tags/考研/index.html",revision:"cdcedc852faf0768d14a25e494a52528"},{url:"tags/魔改/index.html",revision:"9eb8311128b14969ca7bffd77aa03479"},{url:"todolist/index.html",revision:"a4986e9ecb7cd9e8e5ae311d54b31c4e"},{url:"wordScenery/index.html",revision:"4453cf3f1b8cae6b59da52ff03396c06"}],{})}));
//# sourceMappingURL=service-worker.js.map
