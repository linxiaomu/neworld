---
title: Mybatis
date: 2020-04-17
sidebarDepth: 1
tags:
- Mybatis
categories:
- '后端'  
isShowComments: false
---

## 简介

### 什么是Mybatis？

MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。

MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。

MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

Mybatis3中文文档[https://mybatis.org/mybatis-3/zh/index.html](https://mybatis.org/mybatis-3/zh/index.html)

### 为什么需要Mybatis？

- 帮助程序员将代码存入数据库。
- SQL与代码的分离，sql写在xml文件里。
- 传统的JDBC代码太复杂，简化，框架，自动化。
- 提供映射标签，支持对象与数据库的orm字段关系映射。
- 提供对象关系映射标签，支持对象关系组件维护。
- 提供xml标签，支持编写动态sql。

## 入门

### 安装

如果使用 Maven 来构建项目，则需将下面的依赖代码置于 pom.xml 文件中：

```xml
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>x.x.x</version>
</dependency>
```

注：IDEA创建工程，选中即可。下面是springboot中使用mybatis

~~~XML
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.2</version>
</dependency>
~~~

## 第一个Mybatis程序

