const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const secretKeyConf = require('./config/secretKeyConf.js')
const pluginConf = require('./config/plugin.js')

module.exports = {
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
      type: 'blog',
      friendLink: [
        {
          title: 'vuepress-theme-reco',
          desc: 'A simple and beautiful vuepress Blog & Doc theme.',
          logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
          link: 'https://vuepress-theme-reco.recoluan.com'
        },
        {
          title: '午后南杂',
          desc: 'Enjoy when you can, and endure when you must.',
          email: 'recoluan@qq.com',
          link: 'https://www.recoluan.com'
        },
      ],
      //导航栏头像
      // logo: '/vuepress/head-fish.jpg',
      authorAvatar: '/vuepress/logo-lufei.png', //首页右侧头像
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 自动形成侧边导航
      sidebar: 'auto',
      // sidebar: sidebar,
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
      author: 'xiaoliuya',
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
        appId: secretKeyConf.appId,
        appKey: secretKeyConf.appKey,
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
  plugins: pluginConf
  

}  