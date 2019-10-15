// 项目::核心入口
// 负责::收集所有的方法来启动项目
// 注意::模块严格负责自己的内容 不要随意声明 例如路由相关全部在router中
// 注意::模块的开关请去对应的模块出口设置
// 注意::代码格式以易读性为第一考虑要素
// =====================================================================
import Vue from 'vue' // 核心
import '@/api' // 接口管理 -挂载$api
import '@/cache' // 缓存管理 -挂载$ls
import '@/config' // 全局参数 -挂载$config
import '@/directive' // 指令
import '@/filter' // 过滤器
// import { i18n } from '@/i18n' // 资源国际化
import '@/plugins' // 三方插件
import { router } from '@/router' // 路由 -挂载$router
import { Store } from '@/store' // 状态管理 -挂载$stroe
import '@/tools' // 常用工具 -挂载$tool
import '@/utils' // 常用方法 -挂载$util
import '@/validate' // 常用校验 -挂载$validate
import App from '@/App.vue' // 页面主体
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock') // 实际打包时应该不引入mock
console.info('仙', '目前环境', process.env.NODE_ENV)
// =====================================================================
new Vue({ // 实例化
    el: '#app',
    router,
    store: Store,
    // i18n,
    render: h => h(App),
    beforeCreate () {
        // 在实例初始化之后，数据观测(data observer
        // 开始监控Data对象数据变化)和初始化事件(init event，Vue内部初始化事件)之前被调用
        Store.dispatch('system/setFullScreen') // 恢复一下全屏状态
    }
    created: function() {
        // 在实例已经创建完成之后被调用。
        // 实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，event事件回调。
        // 挂载阶段尚未开始，$el 属性不可见
    },
    beforeMount: function() {
        // 在挂载开始之前被调用。相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上
    },
    mounted: function() {
        // 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。
        // 实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。
        // 此时模板中的html渲染到了html页面中，此时一般可以做一些Ajax操作。
        // 注意mounted只会执行一次
        setTimeout(() => {
            const loading = document.querySelector('.fullloading')
            loading.classList.add('hide')
            setTimeout(() => { loading.remove() }, 1e3)
        }, 2e3)
    },
    beforeUpdate: function() {
        // 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
        // 可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程
    },
    updated: function() {
        // 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。
        // 调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。
        // 然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。
        // 该钩子在服务器端渲染期间不被调用
    },
    beforeDestroy: function() {
        // 在实例销毁之前调用。实例仍然完全可用
    },
    destroyed: function() {
        // 在实例销毁之后调用。
        // 调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。
        // 该钩子在服务器端渲染期间不被调用
    }
    beforeRouteEnter: async (to, from, next) => {
        // vue 路由指定钩子事件
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this` 因为当钩子执行前，组件实例还没被创建
        const isLogined = await Store.dispatch('system/isLogined')
        console.info('仙', '登录标识', isLogined)
        if (!isLogined) {
            Store.dispatch('system/logout') // 进入登录页
        } else {
            Store.dispatch('system/getUserInfo') // 获取用户信息
            Store.dispatch('system/getNewMessageNum') // 获取未读最新消息
            await Store.dispatch('system/getPowerList') // 读取权限 更新权限视图
        }
    },
    beforeRouteUpdate (to, from, next) {
        // vue 路由指定钩子事件
        // 在当前路由改变，但是改组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
        // vue 路由指定钩子事件
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
})
