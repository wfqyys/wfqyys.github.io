if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>d(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/bc09934ba1cb.html/index.html",revision:"e29cdd62105eb93d14379281eddfab71"},{url:"2023/04/86b60808adfa.html/index.html",revision:"a573cdaeb61721b0c8b782d96c61c722"},{url:"2023/10/1c82e689d5ba.html/index.html",revision:"e359caa34fb64ea3485eed4c8b759706"},{url:"2023/10/29ae240414be.html/index.html",revision:"f93beb096611aa24e73ddd5a90f0c1d2"},{url:"2023/10/5012d3bbed0d.html/index.html",revision:"5cde8ad56cf87c32db11fbea759fda7d"},{url:"2023/10/580a5439014b.html/index.html",revision:"e2f2ee2e37b1806c040b7871939ef567"},{url:"2023/10/8d78e5691f99.html/index.html",revision:"17abd056edf2c0af145daf42489e1abe"},{url:"2023/10/c02f32772b20.html/index.html",revision:"b4fffc69fb54cd2c5831d6608834dae8"},{url:"2023/10/d4d9d36aa435.html/index.html",revision:"61a413e603bb65ae9d4f4c825c591b04"},{url:"2023/10/e23f8810960f.html/index.html",revision:"9b99ff2f9f6a30f202d4fba3889b6768"},{url:"2023/11/2c85e03aef90.html/index.html",revision:"49f076d30f4a4344554120b2f7143627"},{url:"2024/10/2fcaec545713.html/index.html",revision:"726e84723b0739a66d4dd02762343001"},{url:"404.html",revision:"79f988cea7201c202863d629b7a43e34"},{url:"about/index.html",revision:"2e342f7c53fec11bba254a395bda77cb"},{url:"air-conditioner/index.html",revision:"2d59b662640538f7d9a89ec44af41cc4"},{url:"album/index.html",revision:"bb9db264d458a108fed75b791620c701"},{url:"anzhiyu/random.js",revision:"4eab2d36f40f8dd7d499c43e0b5b6487"},{url:"archives/2023/03/index.html",revision:"c8e6ca1f68be7979212fb49f36e8275b"},{url:"archives/2023/04/index.html",revision:"aa0e66f9db524c7ff9f2e1647ee23bd3"},{url:"archives/2023/10/index.html",revision:"20728cc79a5d8897aad94e3da27e5bbb"},{url:"archives/2023/11/index.html",revision:"6f92d7f133b3358fbe9a947873187b5b"},{url:"archives/2023/index.html",revision:"a50e1ee3cffc2c08b493deea36f3de63"},{url:"archives/2023/page/2/index.html",revision:"9323b43d3c8ba198a7c499ad5a70945a"},{url:"archives/2024/10/index.html",revision:"20f8147b7f2cceaa1f903998f9940126"},{url:"archives/2024/index.html",revision:"260184155908d2dac9616d33ed6cd102"},{url:"archives/index.html",revision:"160a21e29c6ccf66c900de0e4554f126"},{url:"archives/page/2/index.html",revision:"ebe6390f743b3a3e59b98e59b5af88b4"},{url:"bangumis/index.html",revision:"69d31371690283875d1f5933b5d26d23"},{url:"categories/index.html",revision:"821921fcce51686281b385d0cd81a9dc"},{url:"categories/学习/index.html",revision:"3d5bb63af922b140d4fc78252f5aaf61"},{url:"categories/技术/index.html",revision:"6b99f7c71201b566f21339f094be53c0"},{url:"comments/index.html",revision:"0f0999a8f192bb525befdcc9dff6f4f3"},{url:"Cookies/index.html",revision:"6f321eb7a2c40af178f18db57d58fa84"},{url:"copyright/index.html",revision:"ccabdcbb3263c34c558a840f2da370ae"},{url:"css/background.css",revision:"ce8adbb9eccd6cb55d7547373b72e7ba"},{url:"css/fps.css",revision:"4d359d4362d30e9e8c02c136646483d9"},{url:"css/home.css",revision:"a61baf03a76ba5a086e537f58828b9fc"},{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"206f0d7f305c8984cc215b77bc375967"},{url:"css/loading.css",revision:"e17d3ea039c9cd55b267e1d410a7691f"},{url:"css/todolist.css",revision:"354a9a251842bdd3bbbde92b02049227"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"e46c33b9539d2c7e74ed78176b3da2b9"},{url:"dailyPhoto/index.html",revision:"2edf54cdf2dd491ca652635f34f39b00"},{url:"equipment/index.html",revision:"0e7d458417362acf076506c1960787c7"},{url:"essay/index.html",revision:"4e7ecc21f7aa0cbf3c5d4a3f403c3ee5"},{url:"fcircle/index.html",revision:"9346177a041e099749d5287777fce3a2"},{url:"games/index.html",revision:"f0fdb1fbb57fcd8521fabe51f9d13443"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"90492aef02fd83c16cb9b1328e1a7ef3"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/WeChatpay.jpg",revision:"a3a4ffa8c2c2c839934490616308704e"},{url:"index.html",revision:"861366b97d9e81a2486eed9bae3383d4"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/day.js",revision:"626fd918946456d7a1a78e92056eb9c2"},{url:"js/fontawesome.js",revision:"29d1fb021fb1705eb0933051c66bf35e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/icon.js",revision:"bd8c1e4f7aaa5be6868a00f5f01a375a"},{url:"js/imgloaded.js",revision:"f60c52924a5f28c4fd2936e937c57225"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"ad1db8d2347b584f69c43bf1c87a8044"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/sun_moon.js",revision:"6c8d335ab69b3b920877d5c6b8b7b205"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/twopeople.js",revision:"2d8a532b4f48a1dff3740da587e00d63"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"1935fc91af2168b63e3012314a92e0ea"},{url:"link/index.html",revision:"9c7f180c8594a7d4a9d5168211dc70e4"},{url:"music/index.html",revision:"0ab925b33ae7f8a2ce3a18786a7443d7"},{url:"page/2/index.html",revision:"a9c829e3be66fefae5e9c7c29cd42491"},{url:"privacy/index.html",revision:"41fbd491f2350f9862d92685005dfed5"},{url:"tags/801/index.html",revision:"7e27ed867c32e6de15ee46cf4cf8883f"},{url:"tags/anzhiyu/index.html",revision:"7f71eb6d91bd450b618f9b6959321852"},{url:"tags/Centos/index.html",revision:"8dfb60e9c531d4b0ed08debdb37d83d9"},{url:"tags/Docker/index.html",revision:"2c49b44fdfcaa12c2029ff02e03586bb"},{url:"tags/hexo/index.html",revision:"42df57f6a13ffeaac848f121dc661d5e"},{url:"tags/index.html",revision:"60f9bd5e4f416c2c8c600693d52a3401"},{url:"tags/nav/index.html",revision:"27371f01d8b2df9340dbda53d937f378"},{url:"tags/navigation/index.html",revision:"30db81f7dd6e003a87e960c5ba8fde17"},{url:"tags/node/index.html",revision:"2cf438fcf9180d7e13ba387ed1e6ce89"},{url:"tags/NVM/index.html",revision:"42fbb35030be70766f2aab375581ddb7"},{url:"tags/Redis/index.html",revision:"60b2d4b60d3cb6b945c3434aaa1369d4"},{url:"tags/Ubuntu/index.html",revision:"1f43247f984e89085845b31aa349574d"},{url:"tags/学习/index.html",revision:"e6bd7aec1438d82232ba31291697dd2c"},{url:"tags/生物化学/index.html",revision:"80257ef6112004e230b561d37ff1a8bd"},{url:"tags/网站收集/index.html",revision:"f711f09b0292c9165cb1453fe27cfb96"},{url:"tags/考研/index.html",revision:"9734a5427c8256c0f4bee2587ed5dd66"},{url:"tags/魔改/index.html",revision:"2ab81c308ceafccdec5a55448ab32ff0"},{url:"todolist/index.html",revision:"5ce8751f7c564b2ba3cf0e950160c82d"},{url:"wordScenery/index.html",revision:"8c959ff5bfced481d95ac11a07ec41ec"}],{})}));
//# sourceMappingURL=service-worker.js.map
