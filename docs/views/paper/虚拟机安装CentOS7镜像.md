---
title: 虚拟机安装CentOS7镜像
date: 2020-04-07
sidebarDepth: 1
tags:
- 虚拟机
categories:
- '后端'
isShowComments: false
---

## 1、准备工作

**VMware Workstation15**
官方下载地址： [https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

<img src="./images/linux.png" style="zoom:80%;" />

CentOS7镜像下载：阿里云站点：[http://mirrors.aliyun.com/centos/7/isos/x86_64/](http://mirrors.aliyun.com/centos/7/isos/x86_64/)

![](./images/linux2.png)

*注：VMware Workstation15激活码 可以网上搜索*

## 2、VMware安装

傻瓜式安装，直接点击下一步即可。

完成结果：

![](./images/linux3.png)

## 3、在虚拟机上安装CentOS7镜像

1、点击上图的创建虚拟机，开始新建

2、这里选择自定义，典型都可，我这里选择典型比较方便

<img src="./images/linux5.png" style="zoom: 100%;" />

3、这里我们选择“稍后安装操作系统”，然后下一步

<img src="./images/linux6.png" style="zoom:100%;" />

4、这个地方是根据你的操作系统进行选择的，这里客户机操作系统选择Linux，版本选择“CentOS7”，点击下一步

<img src="./images/linux7.png" alt="linux7" style="zoom:100%;" />

5、对系统进行命名，以及选择虚拟机存储位置（建议不要放在系统盘）

<img src="./images/linux8.png" style="zoom:100%;" />

6、这里默认就行

<img src="./images/linux9.png" style="zoom:100%;" />

7、选择自定义硬件

<img src="./images/linux10.png" style="zoom:100%;" />

8、内存，处理器需要更具个人的电脑配置就可以（**建议内存一般在2G以上**，电脑配置好的，内存，处理器数量可以往上调）

<img src="./images/linux11.png" style="zoom:80%;" />

9、右边选择使用ISO映像文件，此时选择我们下载好的镜像文件的路径

<img src="./images/linux12.png" style="zoom:80%;" />

10、打印机以及我们不需要的配置可以进行移除

<img src="./images/linux13.png" style="zoom:80%;" />

11、其余默认就行，网络适配器选择NAT，最后检查一遍，点击关闭，完成即可

<img src="./images/linux15.png" style="zoom:80%;" />

12、开启虚拟机

<img src="./images/linux16.png" style="zoom:80%;" />

13、点击进入

<img src="./images/linux17.png" style="zoom:80%;" />

14、进入这个界面之后，选择中文简体，点击继续

<img src="./images/linux18.png" style="zoom:80%;" />

15、更改四个内容，如果想有界面就按照图上所示，没有界面就选择最小安装

<img src="./images/linux19.png" style="zoom:80%;" />

16、确认后，点击开始安装

<img src="./images/linux20.png" style="zoom:80%;" />

17、设置root密码和普通用户

<img src="./images/linux21.png" style="zoom:80%;" />

18、root密码设置

<img src="./images/linux22.png" style="zoom:80%;" />

19、完成后，进行重启

<img src="./images/linux23.png" style="zoom:80%;" />

20、重启后界面如下图，接受许可

<img src="./images/linux24.png" style="zoom:80%;" />

21、许可页面

<img src="./images/linux25.png" style="zoom:80%;" />

22、打开连接网络

<img src="./images/linux26.png" style="zoom:80%;" />

23、完成后，点击完成配置，我这里有创建用户，是因为之前没有创建

<img src="./images/linux27.png" style="zoom:80%;" />

24、选择汉语

<img src="./images/linux28.png" style="zoom:80%;" />

25、设置时区

<img src="./images/linux29.png" style="zoom:80%;" />

26、开始使用吧

<img src="./images/linux30.png" style="zoom:80%;" />

28、选择账户登录

<img src="./images/linux31.png" style="zoom:80%;" />

29、登陆成功页面

<img src="./images/linux32.png" style="zoom:80%;" />

30、查看ip

<img src="./images/linux33.png" style="zoom:80%;" />

