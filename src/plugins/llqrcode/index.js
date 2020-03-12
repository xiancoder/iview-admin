import qrcode from 'llqrcode/llqrcode.js'

export default function (file) {
    return new Promise((resolve) => {
        var reader = new FileReader()
        reader.onload = function (e) {
            qrcode.callback = resolve // 解读二维码的中转回调
            qrcode.decode(e.target.result)
        }
        reader.readAsDataURL(file)
    })
}
