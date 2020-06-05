// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'plop', title: '自动化生成', icon: 'ios-infinite',
    children: [
        {power: '0000', path: 'tableV10P00', title: '表格v10模版规范'},
        {power: '0000', path: 'tableV10P00@standard', title: '表格v10模版规范', hideMenu: true},
        {power: '0000', path: 'tableV10P00@standard$edit', title: '表单页-回跳信息保留', hideMenu: true},
        {power: '0000', path: 'tableV10P01', title: '表格v10出品一号'}
    ]
})
