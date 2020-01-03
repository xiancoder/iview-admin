// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'home', title: '首页', icon: 'md-globe',
    children: [
        {power: '0000', path: 'index', title: '首页'},
        {power: 'sy-xxzx', path: 'message', icon: 'md-notifications', title: '消息中心'},
        {power: 'sy-cw', path: 'errorlogger', icon: 'md-bug', title: '错误收集测试'},
        {power: 'sy-error', path: 'error404', icon: 'md-boat', title: '页面不存在'},
        {power: 'sy-error', path: 'error403', icon: 'md-bonfire', title: '权限不足'},
        {power: 'sy-error', path: 'error500', icon: 'md-cafe', title: '服务端错误'},
        {power: 'sy-power', path: 'power', icon: 'md-bonfire', title: '权限控制'},
        {power: 'sy-theme', path: 'theme', icon: 'md-bonfire', title: '主题控制'}
    ]
})
