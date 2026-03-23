// 欢迎信息显示脚本 - 使用api.ip.sb API
// API文档: https://api.ip.sb/geoip/

let ipLocation = null;

// 内置默认位置数据（当API不可用时使用）
const defaultLocation = {
    query: "127.0.0.1",
    country: "China",
    countryCode: "CN",
    region: "GD",
    regionName: "Guangdong",
    city: "Shenzhen",
    district: "",
    lat: 22.543099,
    lon: 114.057868,
    timezone: "Asia/Shenzhen",
    isp: "Local"
};

// 获取IP位置信息
function fetchLocation() {
    // 使用api.ip.sb的API（支持HTTPS，无请求限制）
    fetch('https://api.ip.sb/geoip/', {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('API请求失败');
            }
            return response.json();
        })
        .then(data => {
            // 将api.ip.sb的响应格式转换为ip-api.com的格式
            ipLocation = {
                query: data.ip,
                country: data.country,
                countryCode: data.country_code,
                region: data.region_code,
                regionName: data.region,
                city: data.city,
                district: "",
                lat: data.latitude,
                lon: data.longitude,
                timezone: data.timezone,
                isp: data.isp,
                status: 'success'
            };
            console.log('IP定位成功:', ipLocation);
            showWelcome();
        })
        .catch(error => {
            console.log('IP定位API不可用，使用默认位置:', error.message);
            // 使用默认位置数据
            ipLocation = defaultLocation;
            showWelcome();
        });
}

// 计算两点之间的距离（单位：公里）
function getDistance(e1, n1, e2, n2) {
    const R = 6371;
    const { sin, cos, asin, PI, hypot } = Math;
    let getPoint = (e, n) => {
        e *= PI / 180;
        n *= PI / 180;
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) };
    };

    let a = getPoint(e1, n1);
    let b = getPoint(e2, n2);
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    let r = asin(c / 2) * 2 * R;
    return Math.round(r);
}

// 显示欢迎信息
function showWelcome() {
    // 检查ipLocation是否已初始化
    if (!ipLocation) {
        console.log('位置数据未加载，跳过欢迎信息显示');
        return;
    }

    // 检查DOM元素是否存在
    const welcomeInfo = document.getElementById("welcome-info");
    if (!welcomeInfo) {
        console.log('未找到welcome-info元素');
        return;
    }

    // 计算距离（修改为自己的经纬度）
    let dist = getDistance(121.413921, 31.089290, ipLocation.lon, ipLocation.lat);
    
    // 构建位置信息
    let pos = ipLocation.country;
    if (ipLocation.country === "China" || ipLocation.country === "中国") {
        pos = ipLocation.regionName + " " + ipLocation.city;
        if (ipLocation.district) {
            pos += " " + ipLocation.district;
        }
    }
    
    let ip = ipLocation.query;
    let posdesc = "";

    // 根据国家、省份、城市信息自定义欢迎语
    if (ipLocation.country === "China" || ipLocation.country === "中国") {
        switch (ipLocation.regionName) {
            case "北京市":
                posdesc = "北——京——欢迎你~~~";
                break;
            case "天津市":
                posdesc = "讲段相声吧";
                break;
            case "河北省":
                posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                break;
            case "山西省":
                posdesc = "展开坐具长三尺，已占山河五百余";
                break;
            case "内蒙古自治区":
                posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                break;
            case "辽宁省":
                posdesc = "我想吃烤鸡架！";
                break;
            case "吉林省":
                posdesc = "状元阁就是东北烧烤之王";
                break;
            case "黑龙江省":
                posdesc = "很喜欢哈尔滨大剧院";
                break;
            case "上海市":
                posdesc = "众所周知，中国只有两个城市";
                break;
            case "江苏省":
                if (ipLocation.city === "南京市") {
                    posdesc = "这是我挺想去的城市啦";
                } else if (ipLocation.city === "苏州市") {
                    posdesc = "上有天堂，下有苏杭";
                } else {
                    posdesc = "散装是必须要散装的";
                }
                break;
            case "浙江省":
                posdesc = "东风渐绿西湖柳，雁已还人未南归";
                break;
            case "河南省":
                if (ipLocation.city === "郑州市") {
                    posdesc = "豫州之域，天地之中";
                } else if (ipLocation.city === "南阳市") {
                    posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                } else if (ipLocation.city === "驻马店市") {
                    posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                } else if (ipLocation.city === "开封市") {
                    posdesc = "刚正不阿包青天";
                } else if (ipLocation.city === "洛阳市") {
                    posdesc = "洛阳牡丹甲天下";
                } else {
                    posdesc = "可否带我品尝河南烩面啦？";
                }
                break;
            case "安徽省":
                posdesc = "蚌埠住了，芜湖起飞";
                break;
            case "福建省":
                posdesc = "井邑白云间，岩城远带山";
                break;
            case "江西省":
                posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                break;
            case "山东省":
                posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                break;
            case "湖北省":
                if (ipLocation.city === "黄冈市") {
                    posdesc = "红安将军县！辈出将才！";
                } else {
                    posdesc = "来碗热干面~";
                }
                break;
            case "湖南省":
                posdesc = "74751，长沙斯塔克";
                break;
            case "广东省":
                if (ipLocation.city === "广州市") {
                    posdesc = "看小蛮腰，喝早茶了嘛~";
                } else if (ipLocation.city === "深圳市") {
                    posdesc = "今天你逛商场了嘛~";
                } else if (ipLocation.city === "阳江市") {
                    posdesc = "阳春合水！博主家乡~ 欢迎来玩~";
                } else {
                    posdesc = "来两斤福建人~";
                }
                break;
            case "广西壮族自治区":
            case "广西":
                posdesc = "桂林山水甲天下";
                break;
            case "海南省":
                posdesc = "朝观日出逐白浪，夕看云起收霞光";
                break;
            case "四川省":
                posdesc = "康康川妹子";
                break;
            case "贵州省":
                posdesc = "茅台，学生，再塞200";
                break;
            case "云南省":
                posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                break;
            case "西藏自治区":
            case "西藏":
                posdesc = "躺在茫茫草原上，仰望蓝天";
                break;
            case "陕西省":
                posdesc = "来份臊子面加馍";
                break;
            case "甘肃省":
                posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                break;
            case "青海省":
                posdesc = "牛肉干和老酸奶都好好吃";
                break;
            case "宁夏回族自治区":
            case "宁夏":
                posdesc = "大漠孤烟直，长河落日圆";
                break;
            case "新疆维吾尔自治区":
            case "新疆":
                posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                break;
            case "台湾省":
            case "台湾":
                posdesc = "我在这头，大陆在那头";
                break;
            case "香港特别行政区":
            case "香港":
                posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                break;
            case "澳门特别行政区":
            case "澳门":
                posdesc = "性感荷官，在线发牌";
                break;
            default:
                posdesc = "带我去你的城市逛逛吧！";
                break;
        }
    } else {
        // 国外地区
        switch (ipLocation.country) {
            case "Japan":
            case "日本":
                posdesc = "よろしく，一起去看樱花吗";
                break;
            case "United States":
            case "美国":
                posdesc = "Let us live in peace!";
                break;
            case "United Kingdom":
            case "英国":
                posdesc = "想同你一起夜乘伦敦眼";
                break;
            case "Russia":
            case "俄罗斯":
                posdesc = "干了这瓶伏特加！";
                break;
            case "France":
            case "法国":
                posdesc = "C'est La Vie";
                break;
            case "Germany":
            case "德国":
                posdesc = "Die Zeit verging im Fluge.";
                break;
            case "Australia":
            case "澳大利亚":
                posdesc = "一起去大堡礁吧！";
                break;
            case "Canada":
            case "加拿大":
                posdesc = "拾起一片枫叶赠予你";
                break;
            default:
                posdesc = "带我去你的国家逛逛吧";
                break;
        }
    }

    // 根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) {
        timeChange = "<span>🌤️ 早上好，一日之计在于晨</span>";
    } else if (date.getHours() >= 11 && date.getHours() < 13) {
        timeChange = "<span>☀️ 中午好，记得午休喔~</span>";
    } else if (date.getHours() >= 13 && date.getHours() < 17) {
        timeChange = "<span>🕞 下午好，饮茶先啦！</span>";
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
        timeChange = "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    } else if (date.getHours() >= 19 && date.getHours() < 24) {
        timeChange = "<span>🌙 晚上好，夜生活嗨起来！</span>";
    } else {
        timeChange = "夜深了，早点休息，少熬夜";
    }

    // IPv6显示处理
    if (ip.includes(":")) {
        ip = "<br>好复杂，咱看不懂~(ipv6)";
    }

    // 显示欢迎信息
    try {
        welcomeInfo.innerHTML = 
            `欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖<br>${posdesc}🍂<br>当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！<br>您的IP地址为：<b><span style="font-size: 12px;">${ip}</span></b><br>${timeChange} <br>`;
        console.log('欢迎信息显示成功');
    } catch (err) {
        console.log("显示欢迎信息失败:", err);
    }
}

// 初始化
function init() {
    fetchLocation();
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Pjax支持
document.addEventListener('pjax:complete', function() {
    init();
});
