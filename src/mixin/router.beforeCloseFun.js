import { Modal } from 'iview'
export default {
    before_close_confirm: (resolve) => {
        Modal.confirm({
            title: '确定要关闭这一页吗',
            onOk: () => { resolve(true) },
            onCancel: () => { resolve(false) }
        })
    }
}
