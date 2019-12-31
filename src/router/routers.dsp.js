// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'dsp', title: 'DSP开发', icon: 'md-menu',
    children: [
        {
            path: 'home', title: '首页', icon: 'md-globe',
            children: [
                {power: '0000', path: 'index', title: '首页'}
            ]
        }, {
            path: 'finance', title: '财务账单', icon: 'md-contacts',
            children: [
                { power: '0000', path: 'list', title: '财务账单' },
                { power: '0000', path: 'list@recharge', title: '充值记录', hideMenu: true },
                { power: '0000', path: 'list@cost', title: '消耗记录', hideMenu: true },
                { power: '0000', path: 'list@account', title: '账户余额查询', hideMenu: true }
            ]
        }, {
            path: 'charge', title: '收款账户', icon: 'md-contacts',
            children: [
                { power: '0000', path: 'chargeInfo', title: '收款账户' }
            ]
        }, {
            path: 'cost', title: '消耗管理', icon: 'md-contacts',
            children: [
                { power: '0000', path: 'costList', title: '消耗管理' }
            ]
        }
    ]
})
