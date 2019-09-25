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
if (process.env.NODE_ENV !== 'production') require('@/mock') // 假数据
// =====================================================================
new Vue({ // 实例化
    el: '#app',
    router,
    store: Store,
    // i18n,
    render: h => h(App),
    mounted () {},
    beforeCreate () {
        Store.dispatch('app/resetFullScreen') // 恢复一下全屏状态
        Store.dispatch('user/isLogined').then(() => { // 用户是否登录
            console.info('仙', 'token存在')
            Store.dispatch('user/getUserInfo') // 获取用户信息
            Store.dispatch('user/readNewMessageNumber') // 获取未读最新消息
            Store.dispatch('user/readPower') // 读取权限 更新权限视图
        }, () => {
            console.info('仙', 'token不存在')
            Store.dispatch('user/clearLs') // 清理页面
            router.push('login')
        })
    }
})

// import { directive as clickOutside } from 'v-click-outside-x'

/*
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)
 * @description 注册admin内置插件
 * @description 生产环境关掉提示
Vue.config.productionTip = false
 * 注册指令
Vue.directive('clickOutside', clickOutside)
*/
