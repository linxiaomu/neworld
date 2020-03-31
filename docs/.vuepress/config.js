const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')

module.exports = {
    // dest: 'gb-pages',//打包目录
	base: '/neworld/',
    title: "伟大航路•新世界",
    description: '我颠覆整个世界,只为摆正你倒影。',
    head: [
      ['link', { rel: 'icon', href: '/vuepress/logo-lufei.png' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
        }
      ],
      [
          "script", {
              "language": "javascript",
              "type": "text/javascript",
              "src": "/js/MouseClickEffect.js"
          }
      ]
    ],

    //主题配置
    theme: 'reco',
    themeConfig: {
        nav: nav,
        // logo: '/vuepress/head-fish.jpg', //导航栏头像
        authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // sidebar: 'auto',// 自动形成侧边导航
        sidebar: sidebar,
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类'     // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'     // 默认文案 “标签”
            }
        },
        // 最后更新时间
        lastUpdated: true,
        lastUpdated: '上次更新', // string | boolean
        // 作者
        author: 'liuwenjie',
        // 备案号
        //record: '京ICP备17067634号-1',
        // 项目开始时间
        startYear: '2020',
        //git地址
        repo: 'linxiaomu/neworld',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'vuepress',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
      	valineConfig: {
       		appId: 'xbT4pPXCWQju5T7GXC5fUFlF-gzGzoHsz',
       		appKey: 'bofA5chNQ60p37Ih9sMffSI0',
       		placeholder: '填写邮箱可以收到恢复哦!',
    		  notify: true, // 邮件提醒
          verify: true, // 验证码
    		  recordIP: true
       	},
    },
    locales: {
      '/': {
        lang: 'zh-CN',
      }
    },

  markdown: {
    lineNumbers: true
  },

  //插件配置
  plugins: [
   [
      'vuepress-plugin-container',
      {
        type: 'details',
        before: info => `<details class="custom-block details"><summary>${info}</summary>`,
        after: '</details>',
        defaultTitle: '详细信息'
      },
    ],
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-149716079-1'
      }
    ],
    // [
    //   '@vuepress/plugin-register-components',
    //   {
    //     components: [
    //       {
    //         name: 'reco-home-page-one',
    //         path: path.resolve(__dirname, './components/HomePageOne.vue')
    //       }
    //     ],
    //     componentsDir: path.resolve(__dirname, './demo')
    //   }
    // ],
    '@vuepress-reco/extract-code',
    'flowchart',
    "vuepress-plugin-boxx",
    require('./plugins/detailsOpenFlag/index'),
    require('./plugins/musicPlayer/index')


  ]
}  