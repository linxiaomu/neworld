---
title: 虚拟机安装CentOS7镜像
date: 2020-04-07
sidebarDepth: 1
tags:
- 虚拟机
categories:
- 软件
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

怎么判断是否安装成功呢？

![](./images/linux34.png)

还有就是这里：

<img src="./images/linux35.png" style="zoom:60%;" />

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

---

## 4、安装VMware Tools

用途：方便在Windows和Linux图形化界面间传输资料！

安装步骤：

在主机上，从 Workstation Pro 菜单栏中选择**虚拟机** > **安装 VMware Tools**。

如果安装了早期版本的 VMware Tools，则菜单项是 **更新 VMware Tools**。

详细安装步骤：[在 Linux 虚拟机中手动安装或升级 VMware Tools](https://docs.vmware.com/cn/VMware-Workstation-Pro/12.0/com.vmware.ws.using.doc/GUID-08BB9465-D40A-4E16-9E15-8C016CC8166F.html#GUID-08BB9465-D40A-4E16-9E15-8C016CC8166F)

---

## 5、配置联网

### 5.1 联网概述

目的：

1. Windows可以和Linux虚拟机通信
2. 虚拟机可以和Windows通信
3. 虚拟机可以访问外网

理论：虚拟机的网卡的配置模式

- 桥接模式：网段相同 真实主机：192.168.1.XXX，虚拟主机：192.168.1.XXX，别人能访问你的虚拟机的
- NAT模式：虚拟机处于一个独立的网段，物理机位于一个可以上网的子网段！虚拟机通过网关的配置，连接物理机的物理网卡，通过物理机的网卡上网！只有当前的物理机，才能访问虚拟机，别人不可以。
- 仅主机模式：相似于NAT模式，但不能访问外网

### 5.2 NAT模式联网

1.选择编辑-->虚拟网络编辑器,更改root用户

![](./images/linux36.png)

2.选择NAT模式，设置子网IP与网关IP

![](./images/linux37.png)

**注：如果一切配置完后，不能ping通，就再改一下子网IP的第三位。**

3.CenOS7设置网络

![](./images/linux38.png)

4.如下图，进行下一步

![](./images/linux39.png)

5.点击设置后，如下图进行操作

![](./images/linux40.png)

6.最重要的一步，根据下图进行配置

![](./images/linux41.png)

### 5.3 测试联网

linux查看网卡信息：ifconfig

windows查看网卡信息：ipconfig

1. 虚拟机可以访问外网
2. 虚拟机可以和Windows通信

![](./images/linux42.png)

​	3.Windows可以和Linux虚拟机通信

![](./images/linux43.png)

### 5.4 虚拟网卡故障

VMware workstations ——编辑——虚拟网络适配器——还原默认设置

重新设置子网网段就可以啦！

## 6、远程连接

**需要安装 Xshell 和 Xftp**，另行介绍安装

1.我们开始远程连接，这是第一步

![](./images/linux44.png)

2.第二步，来进行用户身份的验证，就是填上用户名和密码啦！

![](./images/linux45.png)

3.为了防止出现乱码，看一下编码格式，如果Xftp出现乱码，也要改一下编码格式

![](./images/linux46.png)

现在就远程连接上了，CenOS系统可以调成命令行模式啦！

调节方式：

- 从图形化界面切换到命令行模式：`ctrl+alt+F2`
- 从命令行模式切换到图形化界面：`ctrl+alt+F1`

---

## 7、克隆虚拟机

1.首先要关闭虚拟机

~~~shell
halt    #立马关机
~~~

2.选中要克隆的虚拟机，右击管理---克隆

![](./images/linux47.png)

3.选中要克隆的虚拟机的状态

![](./images/linux48.png)



4.选择克隆类型，一般选择完整克隆虚拟机

![](./images/linux49.png)

5.更改虚拟机的名称和放置虚拟机的位置（一般放在统一目录下，方便管理）

![](./images/linux50.png)

6.点击关闭，完成基本克隆

![](./images/linux51.png)

![](./images/linux52.png)

7.更改虚拟机的当前使用的mac地址和IP地址

- 开机发现mac地址一样，会自动生成新的mac地址和IP地址

- 或者虚拟机右击设置，也可生成新的mac地址；图形化界面也可以改变IP地址

- ![](./images/linux53.png)

- ![](./images/linux54.png)

- 用命令行来修改

  - ~~~shell
    vim /etc/sysconfig/network-scripts/ifcfg-ens33 
    ~~~

  - ~~~xml
    TYPE=Ethernet
    PROXY_METHOD=none
    BROWSER_ONLY=no
    BOOTPROTO=none
    DEFROUTE=yes
    IPV4_FAILURE_FATAL=yes
    IPV6INIT=yes
    IPV6_AUTOCONF=yes
    IPV6_DEFROUTE=yes
    IPV6_FAILURE_FATAL=no
    IPV6_ADDR_GEN_MODE=stable-privacy
    NAME=ens33
    UUID=b38fce9a-149b-442c-a433-e8e6b8471b77
    DEVICE=ens33
    ONBOOT=yes
    IPADDR=192.168.10.12    把上面的更改到这里就好啦
    PREFIX=24
    GATEWAY=192.168.10.2
    DNS1=192.168.10.2
    IPV6_PRIVACY=no
    HWADDR=00:0c:29:06:eb:e4	这里也要改啊
    ~                
    
    最后 :wq 保存退出
    
    ~~~

8.修改主机名

![](./images/linux56.png)

9.一切修改完之后，执行下面这个命令

~~~shell
[root@localhost ~]# reboot
~~~

10.好啦，克隆都完成啦！看看能不能ping通

![](./images/linux57.png)

## 8、配置主机名的hosts文件映射

Linux：在 /etc/hosts 文件中配合

Windows：在C:\windows\System32\drivers\etc\hosts 文件中配置

~~~shell
[root@CentOS72020clone ~]# vim /etc/hosts
~~~

![](./images/linux58.png)

~~~shell
[root@CentOS72020clone ~]# ping CentOS72020
~~~

这样通过主机名解析到IP地址就可以连接上啦！