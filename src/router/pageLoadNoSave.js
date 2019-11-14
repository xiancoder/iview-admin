/*
* 本组件是一个抽象组件 需要继承以及实现方法
*/
import { noticeNoSave } from '@/tools'

export default {
    beforeRouteEnter (to, from, next) {
        const that = this
        noticeNoSave().then(() => {
            console.log(123, that)
            that.beforeNoSaveNotice()
        })
        next()
    },
    beforeNoSaveNotice () {
        /* 做点啥紧急弥补操作 */
    }
}
