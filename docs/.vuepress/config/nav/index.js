//导航栏
module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { 
        text: '收藏空间',  
        icon: 'reco-other',
        items: [
          { text: '前端外链', link: '/views/interLink/前端知识体系汇总.md' },
          { text: '博客内链', link: '/views/interLink/快速导航.md' }
        ]
      },
    { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
    { text: '关于我', link: '/about/',icon: 'reco-message'}
]