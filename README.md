# 完美vue项目


├── dist // 项目打包生成文件的目录
├── build // 打包配置
    ├── env.js
    ├── webpack.base.config.js
    ├── webpack.dev.config.js
    ├── webpack.prod.config.js
├── dist // 生成代码
    ├── index.html
├── download // 下载文件存仓 ???
    ├── 公海客户模板.csv
    ├── 上传款项模板.csv
    ├── 值班表模板.csv
├── src // 源码
    ├── api // axios/mock 请求
        ├── app.js // app相关接口
        ├── department.js // 部门有关接口
        ├── employee.js // 职员有关接口
        ├── position.js // 职位有关接口
        ├── role.js // 角色有关接口
        ├── task.js // 任务有关接口
        ├── user.js // 登录用户有关接口
        └── index.js
    ├── assets // 附件
        └── index.js
    ├── cache // ls/ss管理
        └── index.js
    ├── components 组件
        ├── breadcrumb-nav/index.vue // 面包屑
        ├── date-range/index.vue // 日期范围
        ├── department-tree/index.vue // 部门下拉树
        ├── epopen/index.vue // EP打开
        ├── fullscreen/index.vue // 全屏按钮
        ├── lockscreen // 锁屏
            ├── locking-page.vue
            ├── unlock.less
            ├── unlock.vue
            └── index.js
        ├── qrcode/index.vue // 二维码
        ├── shrinkable-menu // 左侧树
            ├── index.less
            ├── sidebarMenu.vue // 舒展
            ├── sidebarMenuShrink.vue // 折叠
            └── index.js
        ├── tags-page-opened/index.vue // 标签切换
        ├── theme-switch/index.vue // 主题更换
        ├── tree-box/index.vue // 树
        ├── tree-drop/index.vue // 树下拉
        ├── up-image/index.vue // 图片上传
    ├── config // 全局配置
        └── index.js
    ├── directive 指令
        ├── betterpre.js // 更好的pre排版
        ├── clipboard.js // 复制粘贴按钮
        ├── draggable.js // 可拖拽
        ├── highlight.js // 高亮代码
        └── index.js
    ├── filter 过滤器
        └── index.js
    ├── i18n // 文本资源国际化
        ├── locale.js
        └── index.js
    ├── images // 图片资源
        └── ...
    ├── mixin 混入
        ├── tableMixin.js // 表格
        └── index.js // 也是表格(待处理)
    ├── plugins // 三方插件声明
        ├── fontawesome.js // 友好字体图案
        ├── ionicons.js // 阿里字体图案
        ├── iview.js // iview基本配置
        ├── moment.js // 日期
        ├── vueEditor.js // 富文本
        └── index.js
    ├── router // 路由信息
        ├── appRouter.js // 所有业务需要的页面声明
        ├── otherRouter.js // 所有辅助页面声明
        └── index.js
    ├── store // 状态管理
        ├── app.js // app相关
        ├── cache.js // 缓存相关
        ├── employee.js // 职员相关
        ├── user.js // 登录用户相关
        └── index.js
    ├── styles // 样式管理
        ├── common.less // 通用reset
        ├── loading.less // cao这是啥
        ├── login.less // 登录样式
        ├── main.less // 主体样式
        ├── fonts // ion字体
            ├── ionicons.eot
            ├── ionicons.svg
            ├── ionicons.ttf
            ├── ionicons.woff
        ├── theme // 主题
            ├── g.css
            ├── r.css
            ├── y.css
    ├── tools // 统一业务逻辑经常要用的工具
        └── index.js
    ├── utils // 常用方法
        ├── array.js
        ├── date.js
        ├── dom.js
        ├── function.js
        ├── number.js
        ├── object.js
        ├── regexp.js
        ├── string.js
        ├── table2excel.js
        ├── url.js
        └── index.js
    ├── validate // 校验规则
        └── index.js
    ├── vendors // ???
        ├── vendors.base.js
        ├── vendors.exten.js
    ├── views // 视图
        ├── advanced-router // ???
        ├── canvas // 绘图学习
        ├── contract // 联系人
        ├── customer // 客户
        ├── employee // 职员
        ├── error-page // 错误页面
        ├── exp1 // 经验集1
        ├── exp2 // 经验集2
        ├── finance // 财务
        ├── home // 主页
        ├── logs // ??
        ├── notice // ??
        ├── process // 过程
        ├── study // 学习尝试
        ├── system // 系统
        ├── task // 任务
        ├── Main.vue // 路由main 第一层
        ├── index.ejs // html页面结构
        ├── login.vue // 路由login 第一层
    ├── app.vue 挂载vue的dom
    ├── main.js 入口文件
├── test // 测试相关
    ├── array.test.js
    ├── date.test.js
    ├── number.test.js
    ├── string.test.js
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .postcssrc.js
├── .travis.yml
├── index.html
├── package.json
├── package-lock.json
├── td_icon.ico
├── 启动.bat
└── README.md // 项目目录

<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg">
    </a>
</p>

<h1>
iView Admin
    <h3>Vue.js 2.0 admin management system template based on iView.</h3>
</h1>

[![](https://img.shields.io/github/release/iview/iview-admin.svg)](https://github.com/iview/iview-admin/releases)
[![](https://img.shields.io/travis/iview/iview-admin.svg?style=flat-square)](https://travis-ci.org/iview/iview-admin)
[![vue](https://img.shields.io/badge/vue-2.5.17-brightgreen.svg?style=flat-square)](https://github.com/vuejs/vue)
[![iview ui](https://img.shields.io/badge/iview-3.2.2-brightgreen.svg?style=flat-square)](https://github.com/iview/iview)
[![npm](https://img.shields.io/npm/l/express.svg)]()

## Introduction

iView Admin is a front-end management background integration solution. It based on [Vue.js](https://github.com/vuejs/vue) and use the UI Toolkit [iView](https://github.com/iview/iview).

- [Document](https://lison16.github.io/iview-admin-doc/)
- [Preview](https://admin.iviewui.com/)
- [Base template recommends using](https://github.com/iview/iview-admin/tree/template)

![image](https://file.iviewui.com/admin-dist/admin-preview.png)

## Getting started
```bush
# clone the project
git clone https://github.com/iview/iview-admin.git

// install dependencies
npm install

// develop
npm run dev
```

## Build
```bush
npm run build
```

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, TalkingData
