// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'exp', title: '经验集(旧)', icon: 'md-menu',
    children: [
        {power: '0000', path: '001bebal', title: 'Bebal 相关配置'},
        {power: '0000', path: '004cname', title: '组件 name 属性'},
        {power: '0000', path: '003eslintignore', title: 'Eslint 指定校验目录'},
        {power: '0000', path: '005oldTable', title: '原生表格 lodash尝试'},
        {power: '0000', path: '008tableNoData', title: '表格-无数据'},
        {power: '0000', path: '008tableObj', title: '表格-超集中(废弃)'},
        {power: '0000', path: '009tableMixin', title: '表格-mixin(废弃)'},
        {power: '0000', path: '024validate', title: '表单所有校验方式'},
        {power: '0000', path: '025vvvali', title: '表单复杂校验方式'},
        {power: '0000', path: '028pluginLike', title: '插件比喻'},
        {power: '0000', path: '030vueVision', title: 'VUE竟然好几个版本'},
        {power: '0000', path: '031mail', title: 'JS发邮件权限'},
        {power: '0000', path: '032api', title: '$api模块说明 v1'},
        {power: '0000', path: '033exports', title: 'exports 简单说明'},
        {power: '0000', path: '035unitTest', title: '单元测试入门'},
        {power: '0000', path: '036unitTest', title: '单元测试路由'},
        {power: '0000', path: '037unitTest', title: '单元测试 Axios'},
        {power: '0000', path: '038unitTest', title: '表单单元流程'},
        {power: '0000', path: '041zhihu3layout', title: '三大框架简比'},
        {power: '0000', path: '042jsx', title: 'JSX 语法详解'},
        {power: '0000', path: '058routerpic', title: '路由浏览图片'},
        {power: '0000', path: '061whilePromise', title: 'Promise 挂起'},
        {power: '0000', path: '066redux', title: 'Redux 基础'},
        {power: '0000', path: '067promiseEs6', title: 'Promise 基础'},
        {power: '0000', path: '074webpack', title: 'webpack 检查主机'},
        {power: '0000', path: '076single', title: '单点登录概述'},
        {power: '0000', path: '080yin', title: '名词缩写发音'},
        {power: '0000', path: '081templete', title: '标签 templete'},
        {power: '0000', path: '083innerDB', title: 'innerDB 数据库'},
        {power: '0000', path: '101looknodown', title: '评审看不下去代码'},
        {power: '0000', path: '104echart', title: 'echart'},
        {power: '0000', path: '106yiyongxing', title: '易用性描述'},
        {power: '0000', path: '107kaifakunjing', title: '需求开发|困境'},
        {power: '0000', path: '108axios', title: 'Axios详解'},
        {power: '0000', path: '111name', title: '命名法'},
        {power: '0000', path: '117rule', title: '规范想法'},
        {power: '0000', path: '121youku', title: '优酷视频'},
        {power: '0000', path: '122mimang', title: '略迷茫'},
        {power: '0000', path: '124mulLevelTable', title: '尝试多层表格'},
        {power: '0000', path: '130jslist', title: '好多技术栈'},
        {power: '0000', path: '131package', title: '自定义脚本命令'},
        {power: '0000', path: '133codetip', title: '编码建议'},
        {power: '0000', path: '136vuex', title: 'vuex 讲解'},
        {power: '0000', path: '137vue', title: 'vue 公共方法'},
        {power: '0000', path: '141dspwhat', title: 'DSP 项目产品思路'},
        {power: '0000', path: '151iframe', title: 'iframe 父子页面'},
        {power: '0000', path: '152websocket', title: 'WebSocket 协议'},
        {power: '0000', path: '156img404', title: '图片404补偿(无效)'},
        {power: '0000', path: '160wordCss', title: '仿 Word 的 Css'},
        {power: '0000', path: '163svg', title: 'SVG symbol模版'},
        {power: '0000', path: '164socket', title: 'Socket 研究记录'},
        {power: '0000', path: '165cnzz', title: 'Cnzz 研究记录'},
        {power: '0000', path: '166loadrule', title: 'Vue 加载顺序'},
        {power: '0000', path: '167version', title: '版本发布规则'},
        {power: '0000', path: '170icard', title: 'IviewCard'}
    ]
})
