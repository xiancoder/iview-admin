// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'workV2', title: '工作集 V2', icon: 'md-menu',
    children: [
        {
            path: 'work00', title: '卷零', icon: 'md-heart',
            children: [
                {power: 'workv2-0', path: '201daterange', title: '日期范围优化'},
                {power: 'workv2-0', path: '202api', title: 'api接口承上启下'},
                {power: 'workv2-0', path: '203fromdifto', title: '来源提交格式不同'},
                {power: 'workv2-0', path: '204trytransfer', title: '尝试多搜索+穿梭框'},
                {power: 'workv2-0', path: '205tableV1', title: '表格v1模版规范'},
                {power: 'workv2-0', path: '205tableV1@bro', title: '表格v1兄弟页面', hideMenu: true},
                {power: 'workv2-0', path: '205tab', title: '表格v1菜单Tab'},
                {power: 'workv2-0', path: '205tableMaxHeight', title: '表格v1高度限定'},
                {power: 'workv2-0', path: '205tableBatch', title: '表格v1批量操作'},
                {power: 'workv2-0', path: '205tableTools', title: '表格v1搜索项'},
                {power: 'workv2-0', path: '205tableSort', title: '表格v1排序功能'},
                {power: 'workv2-0', path: '205tableSum', title: '表格v1总计框'},
                {power: 'workv2-0', path: '207validateInput', title: '表单v1输入框'},
                {power: 'workv2-0', path: '207validateNumber', title: '表单v1数字框'},
                {power: 'workv2-0', path: '207validateFile', title: '表单v1文件上传框'},
                {power: 'workv2-0', path: '207validateOther', title: '表单v1其他框'},
                {power: 'workv2-0', path: '207validatePwd', title: '表单v1密码框'},
                {power: 'workv2-0', path: '207validateRadio', title: '表单v1单选复选框'},
                {power: 'workv2-0', path: '207validateRich', title: '表单v1富文本框'},
                {power: 'workv2-0', path: '207validateSelect', title: '表单v1下拉框'},
                {power: 'workv2-0', path: '207validateDate', title: '表单v1日期框'},
                {power: 'workv2-0', path: '207validateSubmit', title: '表单v1提交逻辑'},
                {power: 'workv2-0', path: '208creditSvgCss', title: 'Svg 银行卡信用卡'},
                {power: 'workv2-0', path: '209vuehtml5editor', title: '富文本 Html5Editor'},
                {power: 'workv2-0', path: '209vuehtml5editorApply', title: '富文本 H5E 应用'}
            ]
        },
        {
            path: 'work01', title: '卷壹', icon: 'md-heart',
            children: [
                {power: 'workv2-1', path: '210showMsg', title: '提示信息框规范'},
                {power: 'workv2-1', path: '211goodModal', title: 'IviewModal 弹框'},
                {power: 'workv2-1', path: '212tools', title: '超公共 $tool 模块'},
                {power: 'workv2-1', path: '213smsBtn', title: '短信验证码按钮'},
                {power: 'workv2-1', path: '214formData', title: '提交用 FormData'},
                {power: 'workv2-1', path: '215fontawesome', title: 'font 绘制 logo'},
                {power: 'workv2-1', path: '216vviewer', title: '小图大图预览插件'},
                {power: 'workv2-1', path: '217tabs', title: '兄弟页面统一tabs'},
                {power: 'workv2-1', path: '218tableV1unitTest', title: '表格v1单元测试'},
                {power: 'workv2-1', path: '219iospic', title: 'iOS图片旋转bug'}
            ]
        },
        {
            path: 'work02', title: '卷贰', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '220git', title: '公司GIT管理流程'},
                {power: 'workv2-2', path: '221keyup', title: '按键监听事件写法'},
                {power: 'workv2-2', path: '222contact', title: '联系人卡片 Css'},
                {power: 'workv2-2', path: '223chromeCopyTab', title: '谷歌复制网页bug'},
                {power: 'workv2-2', path: '224psSize', title: 'PS常用尺寸'},
                {power: 'workv2-2', path: '225nodeHttpServer', title: 'Node 代理服务器'},
                {power: 'workv2-2', path: '225nodeServerUpload', title: 'Node 文件上传'},
                {power: 'workv2-2', path: '225nodeServerimg', title: 'Node 静态资源'},
                {power: 'workv2-2', path: '225nodeCmd', title: 'Node 执行 CMD'},
                {power: 'workv2-2', path: '225nodePginfo', title: 'Node 批量更新版本'},
                {power: 'workv2-2', path: '225nodeCrossEnv', title: 'Node 环境变量'},
                {power: 'workv2-2', path: '226vueConfigJs', title: 'vue.config.js'},
                {power: 'workv2-2', path: '226vueVision', title: 'Node 运行时编译'},
                {power: 'workv2-2', path: '226webpackPluginFilemanager', title: 'filemanager-w-p'},
                {power: 'workv2-2', path: '227vueInputTrimSpace', title: '输入框小心写空格'},
                {power: 'workv2-2', path: '228fireEvent', title: '尝试触发事件'},
                {power: 'workv2-2', path: '229twoLogin', title: '两个角色登录入口'}
            ]
        },
        {
            path: 'work03', title: '卷叁', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '230bat', title: '批处理集合'},
                {power: 'workv2-2', path: '231indent', title: '多行文本缩进样式'},
                {power: 'workv2-2', path: '232clicknative', title: '原生点击native'},
                {power: 'workv2-2', path: '233qqlink', title: '深链接:客服QQ'},
                {power: 'workv2-2', path: '234ticketCss', title: '栅格布局 票据样式'},
                {power: 'workv2-2', path: '235showMore', title: '查看更多css实现'},
                {power: 'workv2-2', path: '300brove', title: '收集300个'}
            ]
        }
    ]
})
