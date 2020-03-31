const secretKeyConf = require('../config/secretKeyConf.js')

module.exports = {
    '@vuepress/pwa':
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    '@vuepress-reco/extract-code': true,
    'flowchart': true,
    "vuepress-plugin-boxx": true,
    '@vuepress/google-analytics':
    {
      ga: secretKeyConf.ga,
    },
    'vuepress-plugin-container':
    {
      type: 'details',
      before: info => `<details class="custom-block details"><summary>${info}</summary>`,
      after: '</details>',
      defaultTitle: '详细信息'
    },
};