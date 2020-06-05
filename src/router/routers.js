// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeOneLevelRoute } from './util'
import home from './routers.home'
import exp from './routers.exp'
import expV2 from './routers.expV2'
import workV2 from './routers.workV2'
import plop from './routers.plop'
import es6 from './routers.es6'
import tool from './routers.tool'
import other from './routers.other'
import notest from './routers.notest'

export const homePage = 'home_index' // 首页

export const specialPowerList = ['error403', 'error404', 'error500'] // 任何时候都可以出现的特殊页面

export const loginPowerList = ['login', 'register', 'phone'] // 未登录时候可以访问的页面

export const lockPowerList = ['locking'] // 锁屏时候可以访问的页面

// 路由视图文件名必须和路由名字路径一致 方便查找定位
export const routerList = [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    makeOneLevelRoute({ path: 'login', title: '登录' }),
    makeOneLevelRoute({ path: 'register', title: '注册' }),
    makeOneLevelRoute({ path: 'phone', title: '移动端' }),
    makeOneLevelRoute({ path: 'locking', title: '锁屏' }),
    home,
    exp,
    expV2,
    workV2,
    plop,
    es6,
    tool,
    other,
    ...notest,
    /* 展开优化写法后like如下写法
    {
        path: '/i18n', name: 'i18n', title: 'i18n', component: Main,
        children: [
            {path: 'i18n_', name: 'i18n_', icon: 'md-planet', title: 'i18n - {{ i18n_page }}', component: () => import('@V/i18n/i18n-page.vue')}
        ]
    },
    */
    makeOneLevelRoute({ path: 'error404', title: '页面不存在' }),
    makeOneLevelRoute({ path: 'error403', title: '权限不足' }),
    makeOneLevelRoute({ path: 'error500', title: '服务端错误' }),
    {path: '/*', redirect: '/error404'} // 默认404视图
]
