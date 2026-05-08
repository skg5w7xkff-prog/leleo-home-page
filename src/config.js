const config = {
  //网页元数据
  metaData:{
    title: '喻意的个人主页🎉',
    description: '欢迎来到YUYI的个人主页',
    keywords: '喻意,YUYI,个人主页,个人网站',
    icon: '/favicon.ico'   //网页图标，支持外链
  },

  avatar: "/img/touxiang.jpg", // 头像
  welcometitle: "Hi, I'm YUYI", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
    turntablecolor1: "#FFFF00",  // 转盘渐变色一
    turntablecolor2: "#00FFFF"   // 转盘渐变色二
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['无'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"海洋女孩", 
        "preview":"/img/wallpaper/static/海洋女孩/image-pre.webp",
        "url":"/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Node', 'Vue.js', 'React', 'JavaScript', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [90, 85, 78, 88, 80, 78, 85, 65, 82, 78, 65],
  },

  //社交按钮，图标使用mdi图标（https://pictogrammers.com/library/mdi/），复制图标名称即可
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://github.com/skg5w7xkff-prog"},
    {icon:"mdi-email",link:"https://email.163.com/"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://wx.qq.com/"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-facebook",link:"https://www.facebook.com"}
  ],

  //打字机
  typeWriterStrings: [
    "因为困难多壮志，不教红尘惑坚心。今身暂且栖草头，他日狂歌踏山河。",
    "词针引连是非衣，句线缝串性情皮。一书长情三千相，憾无故事皆病吟。",
    "江河去兮无量海，赤兔蹄兮千里飞，远山黛汐秋波横，水剪眸兮点绛唇",
    "当时年少掷春光，花马踏提酒溅香。爱恨情仇随浪来。夏蝉歌醒夜未央。光阴长河种红莲，韶光重回泪已干。今刻沧桑登舞榭，万灵且待命无疆！"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 前往",img:"/img/bilibili.jpg",title:"BiliBili",subtitle:"1,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://www.bilibili.com/",show:false},
    {go:"🗂️ 前往",img:"/img/douyin.jpg",title:"抖音",subtitle:"2,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://www.douyin.com/",show:false},
    {go:"📝 前往",img:"/img/GitHub.jpg",title:"GitHub",subtitle:"3,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://github.com/",show:false},
    {go:"👍 前往",img:"/img/QQMusic.jpg",title:"QQ音乐",subtitle:"4,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://y.qq.com/",show:false},
    {go:"🗃 前往",img:"/img/YouTube.jpg",title:"YouTube",subtitle:"5,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://www.youtube.com",show:false},
    {go:"🎨 前往",img:"/img/steam.jpg",title:"steam",subtitle:"6,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://store.steampowered.com/",show:false},
    {go:"💍 前往",img:"/img/wyymusic.jpg",title:"网易云音乐",subtitle:"7,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://music.163.com/",show:false},
    {go:"🔍 前往",img:"/img/doubao.jpg",title:"豆包",subtitle:"8,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://www.doubao.com/chat/",show:false},
  ],
  
  statement: ["备案号：XXICP备123456789号","Copyright © 2025 Leleo"],
}

export default config
