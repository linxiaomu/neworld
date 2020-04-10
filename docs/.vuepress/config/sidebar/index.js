//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title:'知识体系',// Power
            collapsable: true,
            children: [
                'power/ceshi',
                'power/sum_ms_001',
                'power/sum_fe_001','power/sum_fe_002',
                'power/sum_java_001','power/sum_java_002'
            ]
        },
        {
            title:'编码规范',// Standard
            collapsable: true,
            children:[
                'specification/ali', 'specification/git'
            ]
        },
        {
            title:'前端设计',// Front-end
            collapsable: true,
            children:[
                'front-end/js-json',
                'front-end/reco-info', 'front-end/vuepress-plugin-boxx',
                'front-end/pushToGithubAndGitee','front-end/powerShell_yarn',
                'front-end/vuepress','front-end/CLI命令',
            ]
        },
        {
            title:'后端开发',// Back-end
            collapsable: true,
            children:[
                'java/python','java/MyBatisPlus',
                'java/Linux'
            ]
        },
        {
            title:'收藏空间',// interLink
            collapsable: true,
            children:[
                'interLink/前端知识体系汇总'
            ]
        },
        {
            title:'一张纸',// paper
            collapsable: true,
            children:[
                'paper/IDEA快捷键','paper/网页问题','paper/完全卸载MySQL',
                'paper/虚拟机安装CentOS7镜像','paper/修改GitHub登录缓慢和头像不显示问题'
            ]
        },
        {
            title:'随笔 Essay',// 
            collapsable: true,
            children:[
                'essay/20190928'
            ]
        }

    ]
}	