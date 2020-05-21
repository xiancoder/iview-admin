// 项目::路由页面
// 2019年12月31日15:15:49 更新

import MarkDown from '@L/markDown'
import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'other', title: '其他模式', icon: 'ios-infinite', component: MarkDown,
    children: [
        {power: '0000', path: 'canvas', icon: 'md-funnel', title: 'WIKI'},
        {power: '0000', path: 'ad', icon: 'md-funnel', title: '广告'},
        {power: '0000', path: 'firstPage', icon: 'md-funnel', title: '首页'},
        {power: '0000', path: 'music', icon: 'md-funnel', title: '音乐结构'},
        {power: '0000', path: 'blog', icon: 'md-funnel', title: '博客结构'},
        {power: '0000', path: 'email', icon: 'md-funnel', title: '邮箱结构'},
        {power: '0000', path: 'weibo', icon: 'md-funnel', title: '微博结构'}
    ]
})
