if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>d(e,r),n={module:{uri:r},exports:s,require:b};i[r]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/bc09934ba1cb.html/index.html",revision:"d1c4083fd53dab646fa5d73dfbb8c4ce"},{url:"2023/04/86b60808adfa.html/index.html",revision:"b532587d58c3abf09f9fdf3aac174fdb"},{url:"2023/10/1c82e689d5ba.html/index.html",revision:"365248b81aed605c86162edd5244185f"},{url:"2023/10/29ae240414be.html/index.html",revision:"1420c434bc5a2ecb8613b4fce19c8c83"},{url:"2023/10/5012d3bbed0d.html/index.html",revision:"2e87f9b0d2794c4455c8f2f2703c8afe"},{url:"2023/10/580a5439014b.html/index.html",revision:"0737816c757cf0880f19ee4c6c88d09a"},{url:"2023/10/8d78e5691f99.html/index.html",revision:"afc77318e8ae40986e7484cbc8e3d6f1"},{url:"2023/10/c02f32772b20.html/index.html",revision:"cf309361c34ab4231f554515f8e8da3c"},{url:"2023/10/d4d9d36aa435.html/index.html",revision:"edc528524b912455bf898135cde88905"},{url:"2023/10/e23f8810960f.html/index.html",revision:"dab8ce1d4e2c8a6b1d293e00d413ff49"},{url:"2023/11/2c85e03aef90.html/index.html",revision:"04819c55e83d92879591817ae5072173"},{url:"404.html",revision:"779f1dbce5e27cf3d75c8d7a90214d20"},{url:"about/index.html",revision:"0c8b7563df14b26f5cffe395feb9be62"},{url:"air-conditioner/index.html",revision:"31436338fd0639a512cb06ec83eb6015"},{url:"album/index.html",revision:"4a98d6f212ed44e86819a4fb48f46fbd"},{url:"anzhiyu/random.js",revision:"f0fea380f76a0ae8f2cae5ee7cc02748"},{url:"archives/2023/03/index.html",revision:"64f20e9480bdd33a33096dd5be1773fb"},{url:"archives/2023/04/index.html",revision:"03041b6345e3aac7dbc6260763183f98"},{url:"archives/2023/10/index.html",revision:"5d313f029c155172fd6da4808cd01134"},{url:"archives/2023/11/index.html",revision:"b1db06d08146c9fb4b80f888f9ea6249"},{url:"archives/2023/index.html",revision:"0e9b2ae3b69c1b3372a7cd812d44e005"},{url:"archives/2023/page/2/index.html",revision:"8bd15ee34086999210a69ba94a41e51e"},{url:"archives/index.html",revision:"b5e58327c4c0d944f5241847b854673f"},{url:"archives/page/2/index.html",revision:"7458a901f74db42383018211c862ff59"},{url:"bangumis/index.html",revision:"6e70fca66232b7df7862e68aee485cd1"},{url:"categories/index.html",revision:"9329f55de4711d4ec83ff444256d7799"},{url:"categories/学习/index.html",revision:"48bf23aae3195c60bb3939fdf81a4217"},{url:"categories/技术/index.html",revision:"bea409b28c88185c62b77d648696d7da"},{url:"comments/index.html",revision:"223c61dc2f7af632b05acbae88fb204c"},{url:"Cookies/index.html",revision:"dbd54186549ae81dc462589da3bdecac"},{url:"copyright/index.html",revision:"fd2a37a6efbafbf63e1596ed144a4ee1"},{url:"css/background.css",revision:"ce8adbb9eccd6cb55d7547373b72e7ba"},{url:"css/fps.css",revision:"4d359d4362d30e9e8c02c136646483d9"},{url:"css/home.css",revision:"a61baf03a76ba5a086e537f58828b9fc"},{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"7897b316bec9b5eb555ef439593dfc90"},{url:"css/loading.css",revision:"e17d3ea039c9cd55b267e1d410a7691f"},{url:"css/todolist.css",revision:"354a9a251842bdd3bbbde92b02049227"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"e46c33b9539d2c7e74ed78176b3da2b9"},{url:"dailyPhoto/index.html",revision:"17435c1fd7634ce5e496a95fbbfd49f4"},{url:"equipment/index.html",revision:"df035816b85b7c6fe681d5473e6765d7"},{url:"essay/index.html",revision:"97745c838df444c4afdcaeea8bc2ca82"},{url:"fcircle/index.html",revision:"661dfe453e2e8c3071021d0a961534d1"},{url:"games/index.html",revision:"af8bc6892f2cc1f9c1584ca433af07d4"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"90492aef02fd83c16cb9b1328e1a7ef3"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/WeChatpay.jpg",revision:"a3a4ffa8c2c2c839934490616308704e"},{url:"index.html",revision:"d97b1679806bfb5dfc0a9bd199b3f373"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/fontawesome.js",revision:"29d1fb021fb1705eb0933051c66bf35e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/icon.js",revision:"bd8c1e4f7aaa5be6868a00f5f01a375a"},{url:"js/imgloaded.js",revision:"f60c52924a5f28c4fd2936e937c57225"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"7e926531e9c8fa91451aea20f3674cf8"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/sun_moon.js",revision:"6c8d335ab69b3b920877d5c6b8b7b205"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/twopeople.js",revision:"2d8a532b4f48a1dff3740da587e00d63"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"1935fc91af2168b63e3012314a92e0ea"},{url:"link/index.html",revision:"785ae47164bdd2c0e73a119860a0e84c"},{url:"music/index.html",revision:"d6169a14fabb217ebed7220b86d38b1a"},{url:"page/2/index.html",revision:"1fe75aa17318ce8d86663abc1b27b3d5"},{url:"privacy/index.html",revision:"8a8e527f70855f2200a2412bca796bf0"},{url:"tags/801/index.html",revision:"63d08a8b88971ccfb2c28f20bb50c9de"},{url:"tags/anzhiyu/index.html",revision:"580c698a64a49a6fde284952b3048242"},{url:"tags/Centos/index.html",revision:"3c1b984b141fd3eca46e1ea2c4d4ba36"},{url:"tags/Docker/index.html",revision:"ad696141406adb2039dd03a0dbda3386"},{url:"tags/hexo/index.html",revision:"bc2eba6e44fc4e99a20dba7b5ef61eff"},{url:"tags/index.html",revision:"7c5d58c186a9a980cad2d859f31f1ce4"},{url:"tags/node/index.html",revision:"1070d42206db032d1bd45f308b6d9d0f"},{url:"tags/NVM/index.html",revision:"a91a1dd25b8a65a7dea15b4547053619"},{url:"tags/Redis/index.html",revision:"d2e978029c6c5d2921f1e7ab01920eed"},{url:"tags/Ubuntu/index.html",revision:"266e2fcb196b9e176b11ad1fcdac09b3"},{url:"tags/学习/index.html",revision:"c88835e02a22e7d5de03c68d4d4e88d6"},{url:"tags/生物化学/index.html",revision:"a13a7833a78785272461eb17c69adeea"},{url:"tags/考研/index.html",revision:"4be88b5561354a8ee27f5445d539e372"},{url:"tags/魔改/index.html",revision:"cbbde229c701d5818e7b365c78a8f0b7"},{url:"todolist/index.html",revision:"a8d23d11e278c3d1a88e2dfc6f0308b2"},{url:"wordScenery/index.html",revision:"e5ebb023ae7e3b50d4e77358f6d9fd59"}],{})}));
//# sourceMappingURL=service-worker.js.map
