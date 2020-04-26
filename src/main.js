// 项目::核心入口
// 负责::收集所有的方法来启动项目
// 注意::模块严格负责自己的内容 不要随意声明 例如路由相关全部在router中
// 注意::模块的开关请去对应的模块出口设置
// 注意::代码格式以易读性为第一考虑要素
// =====================================================================
import Vue from 'vue' // 核心
import '@/api' // 接口管理 / axios配置 -挂载$api
import config from '@/config' // 自定义配置 -挂载$config
import '@/directive' // 指令
import '@/filter' // 过滤器
// import { i18n } from '@/i18n' // 资源国际化
import '@/plugins' // 三方插件
import { Store } from '@/store' // 自定义状态管理 -挂载$stroe
import { router } from '@/router' // 自定义路由定义 -挂载$router
import '@/tools' // 自定义常用工具 -挂载$tool

var consoleString = (function (f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
})(function () {/*
|     _                               ___                  _____           _       _
|    | |                             |_  |                /  ___|         (_)     | |
|    | |     ___  __ _ _ __ _ __       | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_
|    | |    / _ \/ _` | '__| '_ \      | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|
|    | |___|  __/ (_| | |  | | | | /\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_
|    \_____/\___|\__,_|_|  |_| |_| \____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|
|     _                            __      __
|    | |                           \ \    / /
|    | |     ___  __ _ _ __ _ __    \ \  / /   _  ___
|    | |    / _ \/ _` | '__| '_ \    \ \/ / | | |/ _ \
|    | |___|  __/ (_| | |  | | | |    \  /| |_| |  __/
|    |______\___|\__,_|_|  |_| |_|     \/  \__,_|\___|
|     _                             _   _           _      _
|    | |                           | \ | |         | |    (_)
|    | |     ___  __ _ _ __ _ __   |  \| | ___   __| | ___ _ ___
|    | |    / _ \/ _` | '__| '_ \  | . ` |/ _ \ / _` |/ _ \ / __|
|    | |___|  __/ (_| | |  | | | | | |\  | (_) | (_| |  __/ \__ \
|    |______\___|\__,_|_|  |_| |_| |_| \_|\___/ \__,_|\___| |___/
|                                                        _/ |
|                                                       |__/
|     _                            __      ___               _    _ _
|    | |                           \ \    / (_)             | |  | (_)
|    | |     ___  __ _ _ __ _ __    \ \  / / _  _____      _| |  | |_
|    | |    / _ \/ _` | '__| '_ \    \ \/ / | |/ _ \ \ /\ / / |  | | |
|    | |___|  __/ (_| | |  | | | |    \  /  | |  __/\ V  V /| |__| | |
|    |______\___|\__,_|_|  |_| |_|     \/   |_|\___| \_/\_/  \____/|_|
*/
});
console.info(consoleString);
console.info(
    '%c 资料库 %c 目前环境详细信息 ',
    'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
    'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
    process.env.NODE_ENV
)
/* eslint-disable */
// if (process.env.NODE_ENV === 'development') require('@/mock') // 实际打包时应该不引入mock
// 即使是开发环境也不应该引入mockjs

// 当开关开启同时为研发环境 执行vue报错记录功能
// 处理错误信息, 进行错误上报
// err错误对象 // vm Vue实例 // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
if (config.errorLogStore || process.env.NODE_ENV === 'development') {
    Vue.config.errorHandler = (error, vm, mes) => {
        let info = { type: 'script', code: 0, mes: '[' + mes + ']' + error.message, url: window.location.href }
        // console.error(error, vm, mes) // 废弃 看不出有用信息
        Vue.nextTick(() => {
            Store.dispatch('system/pushError', info)
        })
        throw error // 抛出错误
    }
}

new Vue({ // 实例化
    el: '#app',
    router,
    store: Store,
    // i18n,
    // import App from '@/App.vue' // 页面主体
    // render: h => h(App), // 因为app没有有效内容 所以放弃app.vue文件
    render: h => h('router-view'),
    // directive: { // 组件
    // },
    // di: { // 指令
    // },
    // filters: { // 过滤器
    // },
    // computed: { // 计算属性
    // },
    // watch: { // 监听
    // },
    beforeCreate () {
        // 在实例初始化之后，数据观测(data observer开始监控Data对象数据变化)
        // 和初始化事件(init event，Vue内部初始化事件)之前被调用
        Store.dispatch('admin/getPlatformId') // 获取所属公司
        const isLogined = Store.getters['admin/access']
        if (!isLogined) { // 未登录的话由路由负责判断并进入登录页
            console.info(
                '%c 资料库 %c 用户未登陆 ',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                '-'
            )
        } else {
            console.info(
                '%c 资料库 %c 用户已登陆 ',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:red; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                '-'
            )
            Store.dispatch('admin/getUserInfo') // 获取用户信息
            Store.dispatch('message/getNewMessageNum') // 获取未读最新消息
            Store.dispatch('route/getPowerList').then(() => { // 读取权限 更新权限视图
                const currentName = window.currentName
                if (currentName) {
                    Store.dispatch('route/setBreadCrumbList', currentName) // 面包屑
                    Store.dispatch('route/setTitle', currentName) // 设置标题
                }
            })
        }
    },
    created: function () {
        // 在实例已经创建完成之后被调用。
        // 实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，event事件回调。
        // 挂载阶段尚未开始，$el 属性不可见
    },
    beforeMount: function () {
        // 在挂载开始之前被调用。相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上
    },
    mounted: function () {
        // 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。
        // 实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。
        // 此时模板中的html渲染到了html页面中，此时一般可以做一些Ajax操作。
        // 注意mounted只会执行一次
        setTimeout(() => {
            const loading = document.querySelector('.fullloading')
            loading.classList.add('hide')
            setTimeout(() => { loading.remove() }, 1e3)
        }, 2e3)
        // 监听tab离开焦点事件
        Store.dispatch('system/setTabHiddenWatching')
    },
    beforeUpdate: function () {
        // 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
        // 可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程
    },
    updated: function () {
        // 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。
        // 调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。
        // 然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。
        // 该钩子在服务器端渲染期间不被调用
    },
    beforeDestroy: function () {
        // 在实例销毁之前调用。实例仍然完全可用
    },
    destroyed: function () {
        // 在实例销毁之后调用。
        // 调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。
        // 该钩子在服务器端渲染期间不被调用
    }
})
