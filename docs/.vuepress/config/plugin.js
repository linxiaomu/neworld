const secretKeyConf = require('../config/secretKeyConf.js')

module.exports = [
    ['@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    ['@vuepress-reco/extract-code',true],
    ['flowchart',true],
    ["vuepress-plugin-boxx",true],
    ['@vuepress/google-analytics',
    {
      ga: secretKeyConf.ga,
    }],
    ['vuepress-plugin-container',
    {
      type: 'details',
      before: info => `<details class="custom-block details"><summary>${info}</summary>`,
      after: '</details>',
      defaultTitle: '详细信息'
    }],
    ['one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 and then 粘贴使用吧.', // default is 'Copy successfully and then paste it for use.'
      duration: 1500, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['vuepress-plugin-smooth-scroll',true]  //平滑滚动

    //看板娘
    // ["@vuepress-reco/vuepress-plugin-kan-ban-niang",
    // {
    //   theme: ["z16"],
    //   clean: true,
    // }],
    
    // ['vuepress-plugin-helper-live2d', {
    //     live2d: {
    //       // 是否启用(关闭请设置为false)(default: true)
    //       enable: true,
    //       // 模型名称(default: hibiki)>>>取值请参考：
    //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //       model: 'hibiki',//hibiki,shizuku
    //       display: {
    //         position: "left", // 显示位置：left/right(default: 'right')
    //         width: 135, // 模型的长度(default: 135)
    //         height: 300, // 模型的高度(default: 300)
    //         hOffset: 65, //  水平偏移(default: 65)
    //         vOffset: 0, //  垂直偏移(default: 0)
    //       },
    //       mobile: {
    //         show: false // 是否在移动设备上显示(default: false)
    //       },
    //       react: {
    //         opacity: 0.6 // 模型透明度(default: 0.8)
    //       }
    //     }
    //   }
    // ]
    
]