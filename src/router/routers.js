// 项目::路由页面
// 2019年12月31日15:15:49 更新

import MarkDown from '@V/markDown'
import { makeOneLevelRoute } from './util'
import home from './routers.home'
import exp from './routers.exp'
import expV2 from './routers.expV2'
import workV2 from './routers.workV2'
import tool from './routers.tool'
import dsp from './routers.dsp'
import oa from './routers.oa'
import other from './routers.other'

export const homePage = 'home_index' // 首页

export const specialPowerList = [homePage, 'error403', 'error404', 'error500'] // 必须登录的不走鉴权的核心页面

export const loginPowerList = ['login', 'slogin', 'register', 'phone'] // 未登录时候可以访问的页面

export const lockPowerList = ['locking'] // 锁屏时候可以访问的页面

// 路由视图文件名必须和路由名字路径一致 方便查找定位
export const routerList = [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    makeOneLevelRoute({ path: 'login', title: '用户登录' }),
    makeOneLevelRoute({ path: 'slogin', title: '员工登录' }),
    makeOneLevelRoute({ path: 'register', title: '注册' }),
    makeOneLevelRoute({ path: 'phone', title: '移动端' }),
    makeOneLevelRoute({ path: 'locking', title: '锁屏' }),
    home,
    exp,
    expV2,
    workV2,
    tool,
    dsp,
    oa,
    ...other,
    {
        path: '/wiki', name: 'wiki', icon: 'md-infinite', title: '其他模式', component: MarkDown,
        children: [
            {power: '0000', path: 'wiki', name: 'wiki', icon: 'md-funnel', title: 'wiki', component: () => import('@V/other/wiki.vue')},
            {power: '0000', path: 'music', name: 'music', icon: 'md-funnel', title: '音乐', component: () => import('@V/other/music.vue')},
            {power: '0000', path: 'ad', name: 'ad', icon: 'md-funnel', title: '广告', component: () => import('@V/other/ad.vue')},
            {power: '0000', path: 'firstPage', name: 'firstPage', icon: 'md-funnel', title: '首页', component: () => import('@V/other/firstPage.vue')},
            {power: '0000', path: 'blog', name: 'blog', icon: 'md-funnel', title: '博客', component: () => import('@V/other/blog.vue')}
        ]
    },
    /*
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
