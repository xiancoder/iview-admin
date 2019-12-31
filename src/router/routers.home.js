// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'home', title: '首页', icon: 'md-globe',
    children: [
        {power: '0000', path: 'index', title: '首页'},
        {power: '0000', path: 'message', icon: 'md-notifications', title: '消息中心'},
        {power: '0000', path: 'errorlogger', icon: 'md-bug', title: '错误收集测试'},
        {power: '0000', path: 'error404', icon: 'md-boat', title: '页面不存在'},
        {power: '0000', path: 'error403', icon: 'md-bonfire', title: '权限不足'},
        {power: '0000', path: 'error500', icon: 'md-cafe', title: '服务端错误'}
    ]
})
