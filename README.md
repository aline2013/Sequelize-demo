# sequelize demo
Sequelize是Node.js和io.js.基于 promise 的 ORM 框架，它支持 PostgreSQL ，MySQL ， MariaDB , SQLite 和 MSSQL 等数据库，并拥有事务，关系，订阅,复制等特性。

最近学习sequelize和mysql，并使用工具wampserver来建立建立数据库。
首先, 安装
```json
$ npm install sequelize --save
$ npm install mysql --save
```
##### 了解sequellize用法：[sequelize中文文档](https://itbilu.com/nodejs/npm/VkYIaRPz-.html#induction)

#### 本文例子
本文主要以渲染swig模板，实现简单的博客
```
.
├── README.md 文档详解
├── app.js 文件执行入口
├── config.js 数据库配置信息
├── controller.js 操作数据库
├── db.js 数据库初始化
├── jsconfig.json vscode提示
├── model.js 数据表
├── package.json
├── router.js 路由表
└── views 页面
    ├── index.html
    ├── layout.html
    ├── list.html
    ├── new.html
    └── show.htmlß
```

#### 步骤：
```json
$ npm install
$ node app.js
```

