// import qrcode from './llqrcode.js'

export default function (file) {
    return new Promise((resolve) => {
        // qrcode.callback = resolve // 解读二维码的中转回调
        // qrcode.decode(file)
        resolve('失败了')
    })
}
