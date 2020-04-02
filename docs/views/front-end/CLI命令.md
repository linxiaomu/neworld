---
title: CLI命令
date: 2020-04-02
sidebarDepth: 1
tags:
- npm
- yarn
categories:
- '前端'
isShowComments: false
---

npm查看全局安装过的包  

~~~shell
npm list -g
~~~

yarn 和 npm 全局移除包

```shell
npm uninstall -g vue-cli 
yarn global remove vue-cli
```

npm 安装的需要更新版本的依赖        

~~~shell 
npm -g outdated
~~~

查看npm, yarn全局安装过的包

~~~shell
npm list -g --depth 0     
yarn global list
~~~

