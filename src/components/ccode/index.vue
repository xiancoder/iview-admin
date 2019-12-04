<template>
    <canvas width="100" height="33" class="ccode"></canvas>
</template>
<script>
// 随机线
function drawline (canvas, context) {
    context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)) // 随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
    context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)) // 随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
    context.lineWidth = 0.5 // 随机线宽
    context.strokeStyle = 'rgba(50,50,50,0.3)' // 随机线描边属性
    context.stroke() // 描边，即起点描到终点
}
// 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
function drawDot (canvas, context) {
    var px = Math.floor(Math.random() * canvas.width)
    var py = Math.floor(Math.random() * canvas.height)
    context.moveTo(px, py)
    context.lineTo(px + 1, py + 1)
    context.lineWidth = 0.2
    context.stroke()
}
// 绘制图片 (先去掉)
/* function convertCanvasToImage(canvas) {
    document.getElementById('verifyCanvas').style.display = 'none';
    var image = document.getElementById('code_img');
    image.src = canvas.toDataURL('image/png');
    return image;
} */
// 绘制验证码
function drawCode (canvas, content) {
    const context = canvas.getContext('2d') // 获取画布2D上下文
    context.fillStyle = 'cornflowerblue' // 画布填充色
    context.fillRect(0, 0, canvas.width, canvas.height) // 清空画布
    context.fillStyle = 'white' // 设置字体颜色
    context.font = '25px Arial' // 设置字体
    const x = []
    const y = []
    for (let i = 0; i < 4; i++) {
        x[i] = i * 18 + 10
        y[i] = Math.random() * 20 + 15
        context.fillText(content[i], x[i], y[i])
    }
    // 画5条随机线
    for (let i2 = 0; i2 < 5; i2++) { drawline(canvas, context) }
    // 画30个随机点
    for (let i3 = 0; i3 < 30; i3++) { drawDot(canvas, context) }
}
export default{
    name: 'Ccode',
    props: {
        content: { type: String, required: true },
        width: { type: Number, default: 100 },
        height: { type: Number, default: 33 }
    },
    watch: { // 监听
        content (n, o) { this.draw() }
    },
    methods: {
        draw () { drawCode(this.$el, this.content.split('')) }
    },
    mounted () {
        this.draw()
    }
}
</script>
<style scope>
    .ccode {display: inline-block; position: relative; vertical-align: middle; line-height: normal;}
</style>
