---
title: 同时上传到GitHub和码云
date: 2020-04-02
sidebarDepth: 1
tags:
- push
- github
- gitee
categories:
- '前端'
isShowComments: false
---

::: theorem so
- 通过这个图片就看懂啦!
:::

![hhh](./images/a.png)
<br/>

编写.sh文件，只要执行npm run deploy 即可
~~~shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:linxiaomu/neworld.git master:gh-pages

git push -f git@gitee.com:xiaoliuya/neworld.git master:gh-pages

cd D:/MyBlog-github/neworld

# git push -f git@gitee.com:xiaoliuya/neworld.git master:master
git add -A
git commit -m 'deploy'

git push -u github master

git push -u gitee master

cd -
~~~

