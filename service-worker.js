if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/bc09934ba1cb.html/index.html",revision:"9ea1a104f9410a9147a25839f8d2b25e"},{url:"2023/04/86b60808adfa.html/index.html",revision:"b7f78735645a8a8ceb645afcbbec3404"},{url:"2023/10/1c82e689d5ba.html/index.html",revision:"59acd24471543ca908c219ae69b4c898"},{url:"2023/10/29ae240414be.html/index.html",revision:"b0e2ac072dee5e7587f87f72444766b3"},{url:"2023/10/5012d3bbed0d.html/index.html",revision:"3c2af471fa107973aabb0a8f7f30bf5c"},{url:"2023/10/580a5439014b.html/index.html",revision:"01c818c8f3573fe9ab382bf0ccdd1d46"},{url:"2023/10/8d78e5691f99.html/index.html",revision:"94a5957450eb96daf208927dff506872"},{url:"2023/10/c02f32772b20.html/index.html",revision:"5e15a8d6147f935c37c0c1ef2055cef0"},{url:"2023/10/d4d9d36aa435.html/index.html",revision:"b2e0c507407fdd61a58c5fcf5932c641"},{url:"2023/10/e23f8810960f.html/index.html",revision:"ee0d7ae3b3ca375f9236dc8f7f334263"},{url:"2023/11/2c85e03aef90.html/index.html",revision:"1b52d675d4af2fa2cb526b75bad0a8ef"},{url:"404.html",revision:"5be377b6d7f043e5930ee3ed1cee4974"},{url:"about/index.html",revision:"6e44e1cf839c115a1e6c957276e39135"},{url:"air-conditioner/index.html",revision:"1a0a1da57cd10406675dd9cc05999d75"},{url:"album/index.html",revision:"f10a47a54c19e1835bd01556099e7462"},{url:"anzhiyu/random.js",revision:"ff39ed909ea57d2e69e76fe3434f3b78"},{url:"archives/2023/03/index.html",revision:"9d9634bf6386bb0209f83b3ad7e44870"},{url:"archives/2023/04/index.html",revision:"99a56f7e4cce2d02679f5dbdbc62e726"},{url:"archives/2023/10/index.html",revision:"7482aaf11403c30d7faab88cafab3ed9"},{url:"archives/2023/11/index.html",revision:"24b08650e5e1177bf868dd4eb367e415"},{url:"archives/2023/index.html",revision:"cded48e54427f76e26896d0090f8f4d6"},{url:"archives/2023/page/2/index.html",revision:"639bc90ada1533c7fe08ca7c07a81cb9"},{url:"archives/index.html",revision:"f9c84ec527806a0c8051247d212cffc0"},{url:"archives/page/2/index.html",revision:"7d540ec07609d3ebd780b63bccf1f81c"},{url:"bangumis/index.html",revision:"997cebb48586d3441e1024aa60b9ed1d"},{url:"categories/index.html",revision:"efcb24c72ea3250918c741bf4b1001d0"},{url:"categories/学习/index.html",revision:"fecb30c5e2455ac170fc93499631a807"},{url:"categories/技术/index.html",revision:"5c0684a16e7ed76be0dccb6a04170fdc"},{url:"comments/index.html",revision:"ef4ba79dcb3da480117bdcbe74fe0fb9"},{url:"Cookies/index.html",revision:"6ac7b17bd9714690604c00df7abf7f8c"},{url:"copyright/index.html",revision:"7ac69443aaeffcb52dca5a7d16b87124"},{url:"css/background.css",revision:"ce8adbb9eccd6cb55d7547373b72e7ba"},{url:"css/fps.css",revision:"4d359d4362d30e9e8c02c136646483d9"},{url:"css/home.css",revision:"a61baf03a76ba5a086e537f58828b9fc"},{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"7897b316bec9b5eb555ef439593dfc90"},{url:"css/loading.css",revision:"e17d3ea039c9cd55b267e1d410a7691f"},{url:"css/todolist.css",revision:"354a9a251842bdd3bbbde92b02049227"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"e46c33b9539d2c7e74ed78176b3da2b9"},{url:"dailyPhoto/index.html",revision:"42844f1335eabdecf5fd53b0da406880"},{url:"equipment/index.html",revision:"dd33380ea94b7a3a382d011e847ad5af"},{url:"essay/index.html",revision:"980991696ee62d150b5d5ad4aa4951cf"},{url:"fcircle/index.html",revision:"c5169a2fa77bb56f0a26ef647180475c"},{url:"games/index.html",revision:"179b2b3fcaf988f544ce8c382fea7b5f"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"90492aef02fd83c16cb9b1328e1a7ef3"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/WeChatpay.jpg",revision:"a3a4ffa8c2c2c839934490616308704e"},{url:"index.html",revision:"3b06a453a2955485ce605740bed1f80a"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/fontawesome.js",revision:"29d1fb021fb1705eb0933051c66bf35e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/icon.js",revision:"bd8c1e4f7aaa5be6868a00f5f01a375a"},{url:"js/imgloaded.js",revision:"f60c52924a5f28c4fd2936e937c57225"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"7e926531e9c8fa91451aea20f3674cf8"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/sun_moon.js",revision:"6c8d335ab69b3b920877d5c6b8b7b205"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/twopeople.js",revision:"2d8a532b4f48a1dff3740da587e00d63"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"1935fc91af2168b63e3012314a92e0ea"},{url:"link/index.html",revision:"e7f092d0328870d82a65a93381ff30fe"},{url:"music/index.html",revision:"cba616e41bf8a8940afdbe9fc2748283"},{url:"page/2/index.html",revision:"d7713940c7db3f6e81df13e15cc97278"},{url:"privacy/index.html",revision:"3aef1bafd1c5e4121e7f47d71b23f2c4"},{url:"tags/801/index.html",revision:"6067e7f1f6f4033a1b8d6cf29b7689c9"},{url:"tags/anzhiyu/index.html",revision:"90b6e2b3160aeab464fc4154fa28768a"},{url:"tags/Centos/index.html",revision:"35b9f2bffdb6b59f1eebbe273d1f12a4"},{url:"tags/Docker/index.html",revision:"967e314ad2346cd7fea5b8d22b8fc3a5"},{url:"tags/hexo/index.html",revision:"df1843cececdaa440f4db829eeca6c5f"},{url:"tags/index.html",revision:"f21e03cc7a1cbf3cf743c270d3b307d7"},{url:"tags/node/index.html",revision:"b192258f4c5990eac6abee8b4a786ba8"},{url:"tags/NVM/index.html",revision:"4b7963202a170aa9b2f3370c644a04b6"},{url:"tags/Redis/index.html",revision:"7f9d3e2f67c3862612b467be528218d5"},{url:"tags/Ubuntu/index.html",revision:"1c6b50ef692992a0dd657ba3a50467e5"},{url:"tags/学习/index.html",revision:"4a7f3475b14f45bf834ccf7e0e262958"},{url:"tags/生物化学/index.html",revision:"931f2dd5c9bb78879b4486ebe85abe59"},{url:"tags/考研/index.html",revision:"352e2b46d65cae3ab79f1837fbbd005a"},{url:"tags/魔改/index.html",revision:"b186601448b2ddc132cef39d46c6b96c"},{url:"todolist/index.html",revision:"89c35c1e5ec247101b6d02de66a921ca"},{url:"wordScenery/index.html",revision:"8a770164e1d5c2bbcadf46a504a48ef3"}],{})}));
//# sourceMappingURL=service-worker.js.map
