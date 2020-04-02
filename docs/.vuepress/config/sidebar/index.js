//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title:'知识体系 Power',
            collapsable: true,
            children: [
                'power/ceshi',
                'power/sum_ms_001',
                'power/sum_fe_001','power/sum_fe_002',
                'power/sum_java_001','power/sum_java_002'
            ]
        },
        {
            title:'规范 Standard',
            collapsable: true,
            children:[
                'specification/ali', 'specification/git'
            ]
        },
        {
            title:'前端 Front-end',
            collapsable: true,
            children:[
                'front-end/js-json',
                'front-end/reco-info', 'front-end/vuepress-plugin-boxx'
            ]
        },
        {
            title:'后端 Back-end',
            collapsable: true,
            children:[
                
            ]
        },
        {
            title:'收藏空间 note',
            collapsable: true,
            children:[
                'note/前端知识体系汇总'
            ]
        },
        {
            title:'随笔 Essay',
            collapsable: true,
            children:[
                'essay/20190928'
            ]
        }

    ]
}	