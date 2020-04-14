export default {
    before_close_confirm: (resolve) => {
        this.$Modal.confirm({
            title: '确定要关闭这一页吗',
            onOk: () => { resolve(true) },
            onCancel: () => { resolve(false) }
        })
    }
}
