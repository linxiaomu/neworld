---
title: 修改GitHub登录缓慢和头像不显示问题
date: 2020-04-10
sidebarDepth: 1
tags:
- GitHub
categories:
- '前端'
isShowComments: false
---

登录GitHub时，会出现登录缓慢和登录上头像不显示的问题。

解决方法，打开路径C:\Windows\System32\drivers\etc下的hosts文件

在最后加上：

~~~
# GitHub Start 
192.30.253.112    github.com 
192.30.253.119    gist.github.com
151.101.184.133    assets-cdn.github.com
151.101.184.133    raw.githubusercontent.com
151.101.184.133    gist.githubusercontent.com
151.101.184.133    cloud.githubusercontent.com
151.101.184.133    camo.githubusercontent.com
151.101.184.133    avatars0.githubusercontent.com
151.101.184.133    avatars1.githubusercontent.com
151.101.184.133    avatars2.githubusercontent.com
151.101.184.133    avatars3.githubusercontent.com
151.101.184.133    avatars4.githubusercontent.com
151.101.184.133    avatars5.githubusercontent.com
151.101.184.133    avatars6.githubusercontent.com
151.101.184.133    avatars7.githubusercontent.com
151.101.184.133    avatars8.githubusercontent.com
# GitHub End
~~~

注：最好用Notepad++或类似的软件打开。

![](./images/70943883_p2.png)