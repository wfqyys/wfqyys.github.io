if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>d(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/bc09934ba1cb.html/index.html",revision:"e1f8ffe7dddbda7d139fedcebb31e44f"},{url:"2023/04/86b60808adfa.html/index.html",revision:"1858269eb6045ccefdf55943d391ebbb"},{url:"2023/10/1c82e689d5ba.html/index.html",revision:"641a812a4529dad99e23c5ffff53cf84"},{url:"2023/10/29ae240414be.html/index.html",revision:"7faa931bcadf568d19dcda16a3e55f6e"},{url:"2023/10/5012d3bbed0d.html/index.html",revision:"3987d414460b9c1ca6c7c122858edb39"},{url:"2023/10/580a5439014b.html/index.html",revision:"c2bd74eff22c2ac59ac84f245057d671"},{url:"2023/10/8d78e5691f99.html/index.html",revision:"050452717dd045641abafccdbbc809ed"},{url:"2023/10/c02f32772b20.html/index.html",revision:"a58e0b50f043e113594703e135f3dad5"},{url:"2023/10/d4d9d36aa435.html/index.html",revision:"c8f6aadf73250990f251f4561cfa2c87"},{url:"2023/10/e23f8810960f.html/index.html",revision:"f48680131947297f1ab1b533000d3abf"},{url:"2023/11/2c85e03aef90.html/index.html",revision:"8bae8d60bf9f7593bbd7cc14eb3e15d2"},{url:"2024/10/2fcaec545713.html/index.html",revision:"87ca90ba7e025034648b5240aaf3b3e8"},{url:"404.html",revision:"ef044624163e7a350da718fd2df6b2e3"},{url:"about/index.html",revision:"f5bb463f06517442c65dd5853c56781b"},{url:"air-conditioner/index.html",revision:"de5710f0eac44f47358ec04392fa090f"},{url:"album/index.html",revision:"36731196066c8bc3bffdd9685d4cd575"},{url:"anzhiyu/random.js",revision:"4eab2d36f40f8dd7d499c43e0b5b6487"},{url:"archives/2023/03/index.html",revision:"98c6663a07bfcfbf29769158eb72054e"},{url:"archives/2023/04/index.html",revision:"bece147bb7ee5d7acef2b7cee706d389"},{url:"archives/2023/10/index.html",revision:"00e2e0b5c5112caa56f310e2636389fc"},{url:"archives/2023/11/index.html",revision:"b5deb974641030e1882f5bd34afa15c8"},{url:"archives/2023/index.html",revision:"6868591d85e0d21cb1bacdc1cdff4fb2"},{url:"archives/2023/page/2/index.html",revision:"8806c85b7b5c2b6713f2e56c27fec970"},{url:"archives/2024/10/index.html",revision:"c87651b5aca1f1a2248d3a2db3dea59c"},{url:"archives/2024/index.html",revision:"1c39860d5510de4baa3979afc3ee36ca"},{url:"archives/index.html",revision:"0bc53dd48c7d7f23707986796a45ea78"},{url:"archives/page/2/index.html",revision:"006cbda734bacda0768de4552e059e31"},{url:"bangumis/index.html",revision:"5d52f1f422166cfb0eaa323d89537192"},{url:"categories/index.html",revision:"36d94dfd43c2f6fc04e3aa663b7c7da4"},{url:"categories/学习/index.html",revision:"309d161f3638f2cfcb3e2dc88d0d4799"},{url:"categories/技术/index.html",revision:"0df8616b1cc1ca8e252c19a385ddbdad"},{url:"comments/index.html",revision:"80b40f72727f249fcc0f62bad5f2da5e"},{url:"Cookies/index.html",revision:"e1052efc5a4ad7b62be6d28b148bcb9f"},{url:"copyright/index.html",revision:"4b8bd870364ba4b47830ff433d330837"},{url:"css/background.css",revision:"ce8adbb9eccd6cb55d7547373b72e7ba"},{url:"css/fps.css",revision:"4d359d4362d30e9e8c02c136646483d9"},{url:"css/home.css",revision:"a61baf03a76ba5a086e537f58828b9fc"},{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"206f0d7f305c8984cc215b77bc375967"},{url:"css/loading.css",revision:"e17d3ea039c9cd55b267e1d410a7691f"},{url:"css/todolist.css",revision:"354a9a251842bdd3bbbde92b02049227"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"e46c33b9539d2c7e74ed78176b3da2b9"},{url:"dailyPhoto/index.html",revision:"5ae83d0a85b61aec862ed4384d539fae"},{url:"equipment/index.html",revision:"ce3a75f5a37c8f22a2ca9c2d80d0ef6e"},{url:"essay/index.html",revision:"7cc40b66529d352728240ef5150d790c"},{url:"fcircle/index.html",revision:"4205a52207676ec2f498f21fb1db0140"},{url:"games/index.html",revision:"b5e470f0dea68c88a9c8b6ceb0c8a397"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"90492aef02fd83c16cb9b1328e1a7ef3"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/WeChatpay.jpg",revision:"a3a4ffa8c2c2c839934490616308704e"},{url:"index.html",revision:"5341cdd98d264d20a557b5ce1e7ddd06"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/fontawesome.js",revision:"29d1fb021fb1705eb0933051c66bf35e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/icon.js",revision:"bd8c1e4f7aaa5be6868a00f5f01a375a"},{url:"js/imgloaded.js",revision:"f60c52924a5f28c4fd2936e937c57225"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"ad1db8d2347b584f69c43bf1c87a8044"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/sun_moon.js",revision:"6c8d335ab69b3b920877d5c6b8b7b205"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/twopeople.js",revision:"2d8a532b4f48a1dff3740da587e00d63"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"1935fc91af2168b63e3012314a92e0ea"},{url:"link/index.html",revision:"d407bb710182c233d97b376b177574d0"},{url:"music/index.html",revision:"df21d72b5867f96b0da7e79b36dd75d1"},{url:"page/2/index.html",revision:"971167f321e34f64e59f5a53f23618e9"},{url:"privacy/index.html",revision:"afb0025b62933c2b8abd3ba6f728e6e0"},{url:"tags/801/index.html",revision:"ff2009500670b0614c20015113361d2f"},{url:"tags/anzhiyu/index.html",revision:"0e39e4020d0de525735970babea4b3c4"},{url:"tags/Centos/index.html",revision:"ff113f5c7639ed33be2c64ed174c7aba"},{url:"tags/Docker/index.html",revision:"2e883e516e7bfa830e8591499e22334b"},{url:"tags/hexo/index.html",revision:"d489f99b07325f05ede643404f4e9218"},{url:"tags/index.html",revision:"db53fef9b2a6493dc7c35ef6428e6ec2"},{url:"tags/nav/index.html",revision:"6a40e3ea1650a30f9a0ad9a3ccea555c"},{url:"tags/navigation/index.html",revision:"37300abaf62f244e6ef479dd9c7b5425"},{url:"tags/node/index.html",revision:"a4429e79239b595cc0ab7efc378a8728"},{url:"tags/NVM/index.html",revision:"7d6537a21e5c22420f20824f25b2b597"},{url:"tags/Redis/index.html",revision:"99af7058f604888298c9073b0a5e6d95"},{url:"tags/Ubuntu/index.html",revision:"1d2df4c4d0d67b213eea53b3b0883073"},{url:"tags/学习/index.html",revision:"b45933f2a727e4b0c8d45e7b1cbe365a"},{url:"tags/生物化学/index.html",revision:"ec3267dee7da4cce0bf01be3601674d1"},{url:"tags/网站收集/index.html",revision:"23f7a09a64fe9445ff8b3f9905ab0b74"},{url:"tags/考研/index.html",revision:"f6a8a0572ddc026674e46b577ad4df8a"},{url:"tags/魔改/index.html",revision:"f82ef26249f968e10ad2c733d8316954"},{url:"todolist/index.html",revision:"10b76d890934f4ef513f85af087a89b8"},{url:"wordScenery/index.html",revision:"44973bcc736fe07de1f0883fa05c472f"}],{})}));
//# sourceMappingURL=service-worker.js.map
