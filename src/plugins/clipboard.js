import Clipboard from 'clipboard'

const copyTextBtn = (e, text) => {
    return new Promise((resolve, reject) => {
        const clipboard = new Clipboard(e.target, {text: () => text})
        clipboard.on('success', e => {
            // 释放内存
            resolve(true)
            clipboard.off('error')
            clipboard.off('success')
            clipboard.destroy()
        })
        clipboard.on('error', e => {
            // 不支持复制
            resolve(false)
            // 释放内存
            clipboard.off('error')
            clipboard.off('success')
            clipboard.destroy()
        })
        clipboard.onClick(e)
    })
}

export default copyTextBtn
