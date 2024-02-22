var posts=["2023/04/86b60808adfa.html/","2023/03/bc09934ba1cb.html/","2023/10/580a5439014b.html/","2023/10/8d78e5691f99.html/","2023/10/d4d9d36aa435.html/","2023/10/5012d3bbed0d.html/","2023/10/1c82e689d5ba.html/","2023/11/2c85e03aef90.html/","2023/10/e23f8810960f.html/","2023/10/c02f32772b20.html/","2023/10/29ae240414be.html/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp","tag":"大佬"},{"name":"YYSのBlog","link":"https://blog.wfqyys.cn/","avatar":"https://blog.wfqyys.cn/images/favicon.jpg","descr":"May all the beauty be blessed.","siteshot":"https://images.wfqyys.cn/oZOTE5.webp","tag":"博主"},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"http://img.xiaoztx.top/image/2023/10/29/9d2fa78857f43f0250a0776fd6d02b6c.jpeg","descr":"锦鲤相随，好运常伴"},{"name":"憨憨博客","link":"https://blog.hanhanz.top/","avatar":"https://photo.hanhanz.top/image/favicon.jpeg","descr":"One has to live a good life.","recommend":true},{"name":"影照浮世风流","link":"https://ikechan8370.com/","avatar":"https://ikechan8370.com/upload/CBC54022F2E6DE9E1AEE9EBD33C19864.png","descr":"技术杂谈","recommend":true},{"name":"辉辉博客","link":"https://www.zenghui.vip/","avatar":"https://www.zenghui.vip/logo.png","descr":"乘风破浪逐水流，一路晴空月参差。","recommend":true},{"name":"Qing","link":"https://blog.wuyuxi.cn/","avatar":"https://blog.wuyuxi.cn/img/avatar.png","descr":"你侬我侬，忒煞情多","siteshot":"https://blog.wuyuxi.cn/img/site.jpg","recommend":true},{"name":"Plasmon222","link":"https://blog.loveak.top/","avatar":"https://bu.dusays.com/2023/09/01/64f19e6f783a9.png","descr":"✨行则将至，做则必成✨","siteshot":"https://bu.dusays.com/2023/07/26/64c07513293ef.jpg","recommend":true},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"http://img.xiaoztx.top/image/2023/10/29/9d2fa78857f43f0250a0776fd6d02b6c.jpeg","descr":"锦鲤相随，好运常伴"},{"name":"墨尘的生活小站","link":"https://mnchen.cn/","avatar":"https://img.mnchen.cn/i/2023/11/25/6561ddc90db25.jpg","descr":"虽多尘色染，犹见墨痕浓"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };