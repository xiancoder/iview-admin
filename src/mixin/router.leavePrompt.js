/*
* 本组件是一个抽象组件 需要继承以及实现方法
*/
import { confirm } from '@/tools'

export default {
    beforeRouteLeave (to, from, next) {
        confirm('页面即将切换, 离开将影响您未提交的配置, 是否继续?').then(() => {
            this.beforeCloseConfirm(true)
            next() // 必须
        }).catch(() => {
            next(false) // 必须
        })
    },
    beforeCloseConfirm () {
        /* 做点啥紧急弥补操作 */
    }
}
