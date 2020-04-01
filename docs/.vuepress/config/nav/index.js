//导航栏
module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { 
        text: '知识体系',  
        icon: 'reco-category',
        link: '/note/前端知识体系汇总.md',
      },
    { text: '其它', icon: 'reco-document',
      items: [{
          text: 'Common sites🎈',
          items: [{
              text: 'Java SE API Documentation',
              link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
          }, {
              text: 'Spring',
              link: 'https://spring.io/',
          }, {
              text: 'Stackoverflow',
              link: 'https://stackoverflow.com/',
          }, {
              text: 'LeetCode',
              link: 'https://leetcode-cn.com/',
          }, {
              text: 'Vue.js',
              link: 'https://cn.vuejs.org/v2/guide/',
          }, {
              text: 'BootCDN',
              link: 'https://www.bootcdn.cn/',
          }, {
              text: 'Linux命令大全',
              link: 'https://www.linuxcool.com/',
          }, {
              text: '编程语言排行榜',
              link: 'https://www.tiobe.com/tiobe-index/',
          }]
      }, ]
    },
    { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
    { text: '关于我', link: '/about/',icon: 'reco-message'}
]