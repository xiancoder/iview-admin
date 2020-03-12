// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default [
    makeTwoLevelRoute({
        path: 'draw', title: '绘制相关', icon: 'ios-stats',
        children: [
            {power: 'canvas', path: 'canvas', icon: 'md-add', title: 'Canvas绘制'},
            {power: 'canvas', path: 'svg', icon: 'md-download', title: 'Svg绘制'}
        ]
    }),

    makeTwoLevelRoute({
        path: 'components', title: '组件(未测试)', icon: 'logo-buffer',
        children: [
            {power: '0000', path: 'cropper', icon: 'md-crop', title: '图片裁剪'},
            {power: '0000', path: 'splitpane', icon: 'md-pause', title: '分割窗口'},
            {power: '0000', path: 'dragdrawer', icon: 'md-list', title: '可拖拽抽屉'},
            {power: '0000', path: 'countto', icon: 'md-trending-up', title: '数字渐变'},
            {power: '0000', path: 'orgtree', icon: 'ios-people', title: '组织结构树'},
            {power: '0000', path: 'treetable', icon: 'md-git-branch', title: '树状表格'},
            {power: '0000', path: 'tables', icon: 'md-grid', title: '多功能表格'},
            {power: '0000', path: 'editor', icon: 'ios-create', title: '富文本编辑器'},
            {power: '0000', path: 'treeselect', icon: 'md-arrow-dropdown-circle', title: '树状下拉选择器'},
            {power: '0000', path: 'draglist', icon: 'ios-infinite', title: '拖拽列表'},
            {power: '0000', path: 'icons', icon: 'bear', title: '自定义图标'}
        ]
    }),

    makeTwoLevelRoute({
        path: 'update', title: '数据上传(未测试)', icon: 'md-cloud-upload',
        children: [
            {power: '0000', path: 'updatetable', icon: 'md-arrow-dropdown-circle', title: '上传Csv'},
            {power: '0000', path: 'updatepaste', icon: 'md-trending-up', title: '粘贴表格数据'}
        ]
    })
]
