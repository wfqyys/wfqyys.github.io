// 首页头图加载优化
/**
 * @description 实现medium的渐进加载背景的效果
 */
class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
        this.smallSrc = smallSrc;
        this.largeSrc = largeSrc;
        this.initTpl();
    }

    /**
     * @description 生成ui模板
     */
    initTpl() {
        this.container = document.createElement('div');
        this.smallStage = document.createElement('div');
        this.largeStage = document.createElement('div');
        this.smallImg = new Image();
        this.largeImg = new Image();
        this.container.className = 'pl-container';
        this.smallStage.className = 'pl-img pl-blur';
        this.largeStage.className = 'pl-img';
        this.container.appendChild(this.smallStage);
        this.container.appendChild(this.largeStage);
        this.smallImg.onload = this._onSmallLoaded.bind(this);
        this.largeImg.onload = this._onLargeLoaded.bind(this);

        // 添加错误处理
        this.smallImg.onerror = this._onError.bind(this, 'small');
        this.largeImg.onerror = this._onError.bind(this, 'large');

        // 添加加载超时处理
        this.loadTimeout = setTimeout(() => {
            console.warn('[imgloaded] 图片加载超时');
            this._onError('timeout');
        }, 15000);
    }

    /**
     * @description 加载背景
     */
    progressiveLoad() {
        this.smallImg.src = this.smallSrc;
        this.largeImg.src = this.largeSrc;
    }

    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
        clearTimeout(this.loadTimeout);
        this.largeStage.classList.add('pl-visible');
        this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
        // 大图加载完成后，淡出小图
        setTimeout(() => {
            this.smallStage.style.opacity = '0';
        }, 500);
    }

    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
        this.smallStage.classList.add('pl-visible');
        this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }

    /**
     * @description 错误处理
     */
    _onError(type) {
        console.warn(`[imgloaded] ${type} 图片加载失败`);
        // 显示渐变背景作为后备
        this.container.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.container.style.opacity = '1';
    }
}

const executeLoad = (config, target) => {
    console.log('[imgloaded] 执行渐进背景替换');

    // 检查是否已经存在加载容器
    const existingContainer = target.querySelector('.pl-container');
    if (existingContainer) {
        console.log('[imgloaded] 容器已存在，跳过');
        return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
        isMobile ? config.mobileSmallSrc : config.smallSrc,
        isMobile ? config.mobileLargeSrc : config.largeSrc
    );

    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
        target.insertBefore(loader.container, target.children[0]);
    } else {
        target.appendChild(loader.container);
    }
    loader.progressiveLoad();
};

// 图片配置
const config = {
    // smallSrc: 'https://t.mwm.moe/pc/',
    smallSrc: 'https://t.alcy.cc/ycy',
    largeSrc: 'https://t.alcy.cc/ycy',
    mobileSmallSrc: 'https://t.alcy.cc/moemp',
    mobileLargeSrc: 'https://t.alcy.cc/moemp',
    enableRoutes: ['/'],
};

function initProgressiveLoad(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        executeLoad(config, target);
    }
}

function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        // 移除旧的容器
        const oldContainer = target.querySelector('.pl-container');
        if (oldContainer) {
            oldContainer.remove();
        }
        initProgressiveLoad(config);
    }
}

// DOM加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
    initProgressiveLoad(config);
});

// PJAX完成事件
document.addEventListener("pjax:complete", function () {
    onPJAXComplete(config);
});

// 监听主题切换
(function () {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'data-theme') {
                console.log('[imgloaded] 主题已切换');
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
})();
