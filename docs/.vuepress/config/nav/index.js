//导航栏
module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { 
        text: '打豆豆',  
        icon: 'reco-other',
        ariaLabel: 'Language Menu',
        items: [
          { text: '前端外链', link: '/views/interLink/前端知识体系汇总.md' },
          { text: 'Group1', 
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/'},
            ] 
          },
          { text: 'Group2',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/'},
            ] 
         }
        ]
      },
    { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
    { text: '关于我', link: '/about/',icon: 'reco-message'}
]