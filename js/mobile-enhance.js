/**
 * 移动端增强脚本
 * 提供移动端设备的交互优化
 */

(function() {
  'use strict';

  // ============================================================
  // 移动端增强模块
  // ============================================================
  const MobileEnhance = {
    // 配置
    config: {
      breakpoint: 768,           // 移动端断点
      touchDelay: 300,          // 触摸延迟
      swipeThreshold: 50,       // 滑动阈值
    },

    // ============================================================
    // 设备检测
    // ============================================================
    
    /**
     * 检测是否为移动端
     */
    isMobile() {
      return window.innerWidth < this.config.breakpoint || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * 检测是否为触摸设备
     */
    isTouchDevice() {
      return 'ontouchstart' in window || 
             navigator.maxTouchPoints > 0 || 
             navigator.msMaxTouchPoints > 0;
    },

    /**
     * 检测是否为iOS设备
     */
    isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    },

    /**
     * 检测是否为Android设备
     */
    isAndroid() {
      return /Android/i.test(navigator.userAgent);
    },

    // ============================================================
    // 触摸事件优化
    // ============================================================
    
    /**
     * 初始化触摸事件
     */
    initTouchEvents() {
      if (!this.isTouchDevice()) return;

      // 添加触摸反馈类
      document.body.classList.add('touch-device');

      // 为可点击元素添加触摸反馈
      const touchables = document.querySelectorAll('a, button, .btn, .card, [role="button"]');
      
      touchables.forEach(el => {
        el.classList.add('touchable');
        
        // 触摸开始
        el.addEventListener('touchstart', function() {
          this.classList.add('touch-active');
        }, { passive: true });
        
        // 触摸结束
        el.addEventListener('touchend', function() {
          const self = this;
          setTimeout(() => {
            self.classList.remove('touch-active');
          }, MobileEnhance.config.touchDelay);
        }, { passive: true });
        
        // 触摸取消
        el.addEventListener('touchcancel', function() {
          this.classList.remove('touch-active');
        }, { passive: true });
      });

      console.log('[MobileEnhance] 触摸事件已初始化');
    },

    // ============================================================
    // 滑动手势支持
    // ============================================================
    
    /**
     * 初始化滑动手势
     */
    initSwipeGestures() {
      if (!this.isTouchDevice()) return;

      let startX = 0;
      let startY = 0;
      let isSwiping = false;

      // 触摸开始
      document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwiping = true;
      }, { passive: true });

      // 触摸移动
      document.addEventListener('touchmove', function(e) {
        if (!isSwiping) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        // 检测是否为水平滑动
        if (Math.abs(diffX) > Math.abs(diffY)) {
          // 向右滑动 - 打开侧边栏
          if (diffX > MobileEnhance.config.swipeThreshold && startX < 50) {
            MobileEnhance.openSidebar();
          }
          // 向左滑动 - 关闭侧边栏
          if (diffX < -MobileEnhance.config.swipeThreshold) {
            MobileEnhance.closeSidebar();
          }
        }
      }, { passive: true });

      // 触摸结束
      document.addEventListener('touchend', function() {
        isSwiping = false;
      }, { passive: true });

      console.log('[MobileEnhance] 滑动手势已初始化');
    },

    // ============================================================
    // 侧边栏控制
    // ============================================================
    
    /**
     * 打开侧边栏
     */
    openSidebar() {
      const sidebar = document.querySelector('.aside-content');
      const overlay = document.querySelector('.sidebar-overlay');
      
      if (sidebar) {
        sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 创建遮罩层
        if (!overlay) {
          const newOverlay = document.createElement('div');
          newOverlay.className = 'sidebar-overlay';
          newOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          `;
          newOverlay.addEventListener('click', () => this.closeSidebar());
          document.body.appendChild(newOverlay);
        }
      }
    },

    /**
     * 关闭侧边栏
     */
    closeSidebar() {
      const sidebar = document.querySelector('.aside-content');
      const overlay = document.querySelector('.sidebar-overlay');
      
      if (sidebar) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      if (overlay) {
        overlay.remove();
      }
    },

    // ============================================================
    // 图片懒加载优化
    // ============================================================
    
    /**
     * 优化移动端图片加载
     */
    optimizeImageLoading() {
      if (!this.isMobile()) return;

      // 使用Intersection Observer进行懒加载
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              
              // 加载图片
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              
              // 加载背景图
              if (img.dataset.bg) {
                img.style.backgroundImage = `url(${img.dataset.bg})`;
                img.removeAttribute('data-bg');
              }
              
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        // 观察所有需要懒加载的图片
        document.querySelectorAll('img[data-src], [data-bg]').forEach(img => {
          imageObserver.observe(img);
        });
      }

      console.log('[MobileEnhance] 图片加载已优化');
    },

    // ============================================================
    // 横竖屏切换处理
    // ============================================================
    
    /**
     * 处理屏幕方向变化
     */
    handleOrientationChange() {
      let lastWidth = window.innerWidth;
      let lastHeight = window.innerHeight;

      const checkOrientation = () => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;

        // 检测方向变化
        if (Math.abs(currentWidth - lastWidth) > 50 || Math.abs(currentHeight - lastHeight) > 50) {
          // 触发自定义事件
          const event = new CustomEvent('orientationChanged', {
            detail: {
              isLandscape: currentWidth > currentHeight,
              width: currentWidth,
              height: currentHeight
            }
          });
          window.dispatchEvent(event);

          lastWidth = currentWidth;
          lastHeight = currentHeight;
        }
      };

      // 监听resize事件
      window.addEventListener('resize', checkOrientation);

      // 监听orientationchange事件（旧API）
      if ('orientation' in screen) {
        screen.orientation.addEventListener('change', checkOrientation);
      }

      console.log('[MobileEnhance] 屏幕方向监听已初始化');
    },

    // ============================================================
    // 点击延迟消除
    // ============================================================
    
    /**
     * 消除300ms点击延迟
     */
    eliminateClickDelay() {
      // 使用FastClick原理
      if (this.isTouchDevice()) {
        document.addEventListener('touchend', function(e) {
          const target = e.target;
          
          // 检查是否为可点击元素
          if (target.tagName === 'A' || 
              target.tagName === 'BUTTON' || 
              target.classList.contains('btn') ||
              target.getAttribute('role') === 'button') {
            
            // 阻止默认行为并立即触发点击
            e.preventDefault();
            target.click();
          }
        }, { passive: false });
      }

      console.log('[MobileEnhance] 点击延迟已消除');
    },

    // ============================================================
    // 平滑滚动优化
    // ============================================================
    
    /**
     * 优化移动端滚动体验
     */
    optimizeScrolling() {
      // 启用惯性滚动
      document.body.style.webkitOverflowScrolling = 'touch';

      // 优化滚动性能
      const scrollElements = document.querySelectorAll('.scroll-container, .aside-content, .mobile-menu-panel');
      scrollElements.forEach(el => {
        el.style.webkitOverflowScrolling = 'touch';
      });

      console.log('[MobileEnhance] 滚动体验已优化');
    },

    // ============================================================
    // 初始化
    // ============================================================
    
    /**
     * 初始化所有移动端增强功能
     */
    init() {
      // 仅在移动端执行
      if (!this.isMobile() && !this.isTouchDevice()) {
        console.log('[MobileEnhance] 非移动端设备，跳过初始化');
        return;
      }

      console.log('[MobileEnhance] 开始初始化移动端增强功能');

      // 初始化各功能模块
      this.initTouchEvents();
      this.initSwipeGestures();
      this.optimizeImageLoading();
      this.handleOrientationChange();
      this.eliminateClickDelay();
      this.optimizeScrolling();

      console.log('[MobileEnhance] 移动端增强功能初始化完成');
    }
  };

  // ============================================================
  // 自动初始化
  // ============================================================
  
  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MobileEnhance.init());
  } else {
    MobileEnhance.init();
  }

  // 暴露到全局（可选）
  window.MobileEnhance = MobileEnhance;

})();
