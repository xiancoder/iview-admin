/*
* 本组件是一个抽象组件 需要继承以及实现方法
*/
import { noticeNoSave } from '@/tools'

export default {
    beforeCreate () {
        noticeNoSave().then((list) => {
            this.beforeNoSaveNotice(list)
        })
    },
    beforeNoSaveNotice (list) {
        /* 做点啥紧急弥补操作 */
        console.log(123, list)
    }
}
