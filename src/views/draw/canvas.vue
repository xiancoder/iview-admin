<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">各种基础的canvas绘画方法</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>

                <div style="line-height:36px">
                    <Button type="primary" @click="draw1">文字</Button>
                    <Button type="primary" @click="draw2">直线</Button>
                    <Button type="primary" @click="draw3">加粗</Button>
                    <Button type="primary" @click="draw4">染色</Button>
                    <Button type="primary" @click="draw5">封边</Button>
                    <Button type="primary" @click="draw6">弧形</Button>
                    <Button type="primary" @click="draw7">弯折</Button>
                    <Button type="primary" @click="draw8">贝塞尔曲线</Button>
                    <Button type="primary" @click="draw9">路径</Button>
                    <Button type="primary" @click="draw10">线折角</Button>
                    <Button type="primary" @click="draw11">圆滑折角</Button>
                    <Button type="primary" @click="draw12">自定义形状</Button>
                    <Button type="primary" @click="draw13">形状填色</Button>
                    <Button type="primary" @click="draw14">圆形</Button>
                    <Button type="primary" @click="draw15">半圆</Button>
                    <Button type="primary" @click="draw16">颜色填充</Button>
                    <Button type="primary" @click="draw17">线性梯度</Button>
                    <Button type="primary" @click="draw18">径向梯度</Button>
                    <Button type="primary" @click="draw19">图案</Button>
                    <Button type="primary" @click="draw20">绘制图像</Button>
                    <Button type="primary" @click="draw21">图像大小</Button>
                    <Button type="primary" @click="draw22">图像裁剪</Button>
                    <Button type="primary" @click="draw23">图像加载器</Button>
                    <Button type="primary" @click="draw24">字体大小样式</Button>
                    <Button type="primary" @click="draw25">文本颜色</Button>
                    <Button type="primary" @click="draw26">文本笔划</Button>
                    <Button type="primary" @click="draw27">文本对齐</Button>
                    <Button type="primary" @click="draw28">文本基线</Button>
                    <Button type="primary" @click="draw29">文本度量</Button>
                    <Button type="primary" @click="draw30">文字环绕</Button>
                    <Button type="primary" @click="draw31">翻译</Button>
                    <Button type="primary" @click="draw32">规模</Button>
                    <Button type="primary" @click="draw33">旋转</Button>
                    <Button type="primary" @click="draw34">自定义转换</Button>
                    <Button type="primary" @click="draw35">剪切</Button>
                    <Button type="primary" @click="draw36">镜子</Button>
                    <Button type="primary" @click="draw37">重置转换</Button>
                    <Button type="primary" @click="draw38">状态堆栈</Button>
                    <Button type="primary" @click="draw39">椭圆形</Button>
                    <Button type="primary" @click="draw40">阴影</Button>
                    <Button type="primary" @click="draw41">全球阿尔法</Button>
                    <Button type="primary" @click="draw42">剪切区域</Button>
                    <Button type="primary" @click="draw43">操作</Button>
                    <Button type="primary" @click="draw44">图像数据</Button>
                    <Button type="primary" @click="draw45">反色</Button>
                    <Button type="primary" @click="draw46">灰度</Button>
                    <Button type="primary" @click="draw47">获取数据URL</Button>
                    <Button type="primary" @click="draw48">加载数据URL</Button>
                    <Button type="primary" @click="draw49">保存绘图</Button>
                    <Button type="primary" @click="draw50">透明画布</Button>
                    <Button type="primary" @click="draw51">动画帧</Button>
                    <Button type="primary" @click="draw52">直线运动</Button>
                    <Button type="primary" @click="draw53">加速度</Button>
                    <Button type="primary" @click="draw54">振荡</Button>
                    <Button type="primary" @click="draw55">启动和停止</Button>
                    <Button type="primary" @click="draw56">鼠标坐标</Button>
                </div>
                <br /><br />
                <canvas id="myCanvas" width="800" height="400"></canvas>
                <canvas id="tempCanvas" width="578" height="430" style="display:none;"></canvas>
                <img id="canvasImg" alt="Right click to save me!">
                <input type="button" id="clear" value="Clear">
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
let canvas = null
const requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60); }
})()

export default {
    data: function () {
        return {
            context: null
        }
    },
    methods: {
        getContext () {
            if (!this.context) {
                canvas = document.getElementById('myCanvas')
                this.context = canvas.getContext('2d')
                this.canvasheight = canvas.height
                this.canvaswidth = canvas.width
                // this.$set(this.context, canvas.getContext('2d'))
            }
            return this.context
        },
        draw1 () {
            let context = this.getContext()
            context.font = '40pt Calibri'
            context.fillStyle = 'blue'
            context.fillText('Hello World!', 150, 100)
        },
        draw2 () {
            let context = this.getContext()
            context.beginPath()
            context.moveTo(100, 150)
            context.lineTo(450, 50)
            context.stroke()
        },
        draw3 () {
            let context = this.getContext()
            context.beginPath()
            context.moveTo(100, 150)
            context.lineTo(450, 50)
            context.lineWidth = 15
            context.stroke()
        },
        draw4 () {
            let context = this.getContext()
            context.beginPath()
            context.moveTo(100, 150)
            context.lineTo(450, 50)
            context.lineWidth = 10
            context.strokeStyle = '#ff0000'
            context.stroke()
        },
        draw5 () {
            let context = this.getContext()
            context.beginPath()
            context.moveTo(200, this.canvasheight / 2 - 50)
            context.lineTo(this.canvaswidth - 200, this.canvasheight / 2 - 50)
            context.lineWidth = 20
            context.strokeStyle = '#0000ff'
            context.lineCap = 'butt'
            context.stroke()
            context.beginPath()
            context.moveTo(200, this.canvasheight / 2)
            context.lineTo(this.canvaswidth - 200, this.canvasheight / 2)
            context.lineWidth = 20
            context.strokeStyle = '#0000ff'
            context.lineCap = 'round'
            context.stroke()
            context.beginPath()
            context.moveTo(200, this.canvasheight / 2 + 50)
            context.lineTo(this.canvaswidth - 200, this.canvasheight / 2 + 50)
            context.lineWidth = 20
            context.strokeStyle = '#0000ff'
            context.lineCap = 'square'
            context.stroke()
        },
        draw6 () {
            var context = this.getContext()
            var counterClockwise = false
            context.beginPath()
            context.arc(this.canvaswidth / 2, this.canvasheight / 2, 75, 1.1 * Math.PI, 1.9 * Math.PI, counterClockwise)
            context.lineWidth = 15
            context.strokeStyle = 'black'
            context.stroke()
        },
        draw7 () {
            var context = this.getContext()
            context.beginPath()
            context.moveTo(188, 150)
            context.quadraticCurveTo(288, 0, 388, 150)
            context.lineWidth = 10
            context.strokeStyle = 'black'
            context.stroke()
        },
        draw8 () {
            var context = this.getContext()
            context.beginPath()
            context.moveTo(188, 130)
            context.bezierCurveTo(140, 10, 388, 10, 388, 170)
            context.lineWidth = 10
            context.strokeStyle = 'black'
            context.stroke()
        },
        draw9 () {
            var context = this.getContext()
            context.beginPath()
            context.moveTo(100, 20)
            // line 1
            context.lineTo(200, 160)
            // quadratic curve
            context.quadraticCurveTo(230, 200, 250, 120)
            // bezier curve
            context.bezierCurveTo(290, -40, 300, 200, 400, 150)
            // line 2
            context.lineTo(500, 90)
            context.lineWidth = 5
            context.strokeStyle = 'blue'
            context.stroke()
        },
        draw10 () {
            var context = this.getContext()
            // set line width for all lines
            context.lineWidth = 25
            // miter line join (left)
            context.beginPath()
            context.moveTo(99, 150)
            context.lineTo(149, 50)
            context.lineTo(199, 150)
            context.lineJoin = 'miter'
            context.stroke()
            // round line join (middle)
            context.beginPath()
            context.moveTo(239, 150)
            context.lineTo(289, 50)
            context.lineTo(339, 150)
            context.lineJoin = 'round'
            context.stroke()
            // bevel line join (right)
            context.beginPath()
            context.moveTo(379, 150)
            context.lineTo(429, 50)
            context.lineTo(479, 150)
            context.lineJoin = 'bevel'
            context.stroke()
        },
        draw11 () {
            var context = this.getContext()
            var rectWidth = 200
            var rectHeight = 100
            var rectX = 189
            var rectY = 50
            var cornerRadius = 50
            context.beginPath()
            context.moveTo(rectX, rectY)
            context.lineTo(rectX + rectWidth - cornerRadius, rectY)
            context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius)
            context.lineTo(rectX + rectWidth, rectY + rectHeight)
            context.lineWidth = 5
            context.stroke()
        },
        draw12 () {
            var context = this.getContext()
            // begin custom shape
            context.beginPath()
            context.moveTo(170, 80)
            context.bezierCurveTo(130, 100, 130, 150, 230, 150)
            context.bezierCurveTo(250, 180, 320, 180, 340, 150)
            context.bezierCurveTo(420, 150, 420, 120, 390, 100)
            context.bezierCurveTo(430, 40, 370, 30, 340, 50)
            context.bezierCurveTo(320, 5, 250, 20, 250, 50)
            context.bezierCurveTo(200, 5, 150, 20, 170, 80)
            // complete custom shape
            context.closePath()
            context.lineWidth = 5
            context.strokeStyle = 'blue'
            context.stroke()
        },
        draw13 () {
            var context = this.getContext()
            context.beginPath()
            context.rect(188, 50, 200, 100)
            context.fillStyle = 'yellow'
            context.fill()
            context.lineWidth = 7
            context.strokeStyle = 'black'
            context.stroke()
        },
        draw14 () {
            var context = this.getContext()
            var centerX = this.canvaswidth / 2
            var centerY = this.canvasheight / 2
            var radius = 70
            context.beginPath()
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
            context.fillStyle = 'green'
            context.fill()
            context.lineWidth = 5
            context.strokeStyle = '#003300'
            context.stroke()
        },
        draw15 () {
            var context = this.getContext()
            context.beginPath()
            context.arc(288, 75, 70, 0, Math.PI, false)
            context.closePath()
            context.lineWidth = 5
            context.fillStyle = 'red'
            context.fill()
            context.strokeStyle = '#550000'
            context.stroke()
        },
        draw16 () { // Color Fill
            var context = this.getContext()
            context.beginPath(); // begin custom shape
            context.moveTo(170, 80)
            context.bezierCurveTo(130, 100, 130, 150, 230, 150)
            context.bezierCurveTo(250, 180, 320, 180, 340, 150)
            context.bezierCurveTo(420, 150, 420, 120, 390, 100)
            context.bezierCurveTo(430, 40, 370, 30, 340, 50)
            context.bezierCurveTo(320, 5, 250, 20, 250, 50)
            context.bezierCurveTo(200, 5, 150, 20, 170, 80)
            context.closePath(); // complete custom shape
            context.lineWidth = 5
            context.fillStyle = '#8ED6FF'
            context.fill()
            context.strokeStyle = 'blue'
            context.stroke()
        },
        draw17 () { // Linear Gradient
            var context = this.getContext()
            context.rect(0, 0, this.canvaswidth, this.canvasheight)
            // add linear gradient
            var grd = context.createLinearGradient(0, 0, this.canvaswidth, this.canvasheight)
            // light blue
            grd.addColorStop(0, '#8ED6FF')
            // dark blue
            grd.addColorStop(1, '#004CB3')
            context.fillStyle = grd
            context.fill()
        },
        draw18 () { // Radial Gradient
            var context = this.getContext()
            context.rect(0, 0, this.canvaswidth, this.canvasheight)
            var grd = context.createRadialGradient(238, 50, 10, 238, 50, 300); // create radial gradient
            grd.addColorStop(0, '#8ED6FF'); // light blue
            grd.addColorStop(1, '#004CB3'); // dark blue
            context.fillStyle = grd
            context.fill()
        },
        draw19 () { // Pattern
            var context = this.getContext()
            var imageObj = new Image()
            imageObj.onload = function () {
                var pattern = context.createPattern(imageObj, 'repeat')
                context.rect(0, 0, this.canvaswidth, this.canvasheight)
                context.fillStyle = pattern
                context.fill()
            }
            imageObj.src = 'https://vuejs.org/images/logo.png'
        },
        draw20 () { // Draw Image
            var context = this.getContext()
            var x = 188
            var y = 30
            var width = 200
            var height = 137
            var imageObj = new Image()
            imageObj.onload = function () {
                context.drawImage(imageObj, x, y, width, height)
            }
            imageObj.src = 'https://vuejs.org/images/logo.png'
        },
        draw21 () { // Image Size
            var context = this.getContext()
            var x = 188
            var y = 30
            var width = 200
            var height = 137
            var imageObj = new Image()
            imageObj.onload = function () {
                context.drawImage(imageObj, x, y, width, height)
            }
            imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
        },
        draw22 () { // Image Crop
            var context = this.getContext()
            var imageObj = new Image()
            imageObj.onload = function () {
                // draw cropped image
                var sourceX = 150
                var sourceY = 0
                var sourceWidth = 150
                var sourceHeight = 150
                var destWidth = sourceWidth
                var destHeight = sourceHeight
                var destX = this.canvaswidth / 2 - destWidth / 2
                var destY = this.canvasheight / 2 - destHeight / 2
                context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)
            }
            imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
        },
        draw23 () { // Image Loader
            var context = this.getContext()
            function loadImages (sources, callback) {
                var images = {}
                var loadedImages = 0
                var numImages = 0
                // get num of sources
                for (var src in sources) {
                    numImages++
                    images[src] = new Image()
                    images[src].onload = function () {
                        if (++loadedImages >= numImages) {
                            callback(images)
                        }
                    }
                    images[src].src = sources[src]
                }
            }
            var sources = {
                darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
                yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg'
            }
            loadImages(sources, function (images) {
                context.drawImage(images.darthVader, 100, 30, 200, 137)
                context.drawImage(images.yoda, 350, 55, 93, 104)
            })
        },
        draw24 () { // Font Size Style
            var context = this.getContext()
            context.font = 'italic 40pt Calibri'
            context.fillText('Hello World!', 150, 100)
        },
        draw25 () { // Text Color
            var context = this.getContext()
            context.font = '40pt Calibri'
            context.fillStyle = 'blue'
            context.fillText('Hello World!', 150, 100)
        },
        draw26 () { // Text Stroke
            var context = this.getContext()
            var x = 80
            var y = 110
            context.font = '60pt Calibri'
            context.lineWidth = 3
            context.strokeStyle = 'blue'; // stroke color
            context.strokeText('Hello World!', x, y)
        },
        draw27 () { // Text Align
            var context = this.getContext()
            var x = this.canvaswidth / 2
            var y = this.canvasheight / 2
            context.font = '30pt Calibri'
            context.textAlign = 'center'
            context.fillStyle = 'blue'
            context.fillText('Hello World!', x, y)
        },
        draw28 () { // Text Baseline
            var context = this.getContext()
            var x = this.canvaswidth / 2
            var y = this.canvasheight / 2
            context.font = '30pt Calibri'
            // textAlign aligns text horizontally relative to placement
            context.textAlign = 'center'
            // textBaseline aligns text vertically relative to font style
            context.textBaseline = 'middle'
            context.fillStyle = 'blue'
            context.fillText('Hello World!', x, y)
        },
        draw29 () { // Text Metrics
            var context = this.getContext()
            var x = this.canvaswidth / 2
            var y = this.canvasheight / 2 - 10
            var text = 'Hello World!'
            context.font = '30pt Calibri'
            context.textAlign = 'center'
            context.fillStyle = 'blue'
            context.fillText(text, x, y)
            // get text metrics
            var metrics = context.measureText(text)
            var width = metrics.width
            context.font = '20pt Calibri'
            context.textAlign = 'center'
            context.fillStyle = '#555'
            context.fillText('(' + width + 'px wide)', x, y + 40)
        },
        draw30 () { // Text Wrap
            var context = this.getContext()
            function wrapText (context, text, x, y, maxWidth, lineHeight) {
                var words = text.split(' ')
                var line = ''
                for (var n = 0; n < words.length; n++) {
                    var testLine = line + words[n] + ' '
                    var metrics = context.measureText(testLine)
                    var testWidth = metrics.width
                    if (testWidth > maxWidth && n > 0) {
                        context.fillText(line, x, y)
                        line = words[n] + ' '
                        y += lineHeight
                    } else {
                        line = testLine
                    }
                }
                context.fillText(line, x, y)
            }
            var maxWidth = 400
            var lineHeight = 25
            var x = (this.canvaswidth - maxWidth) / 2
            var y = 60
            var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.'
            context.font = '16pt Calibri'
            context.fillStyle = '#333'
            wrapText(context, text, x, y, maxWidth, lineHeight)
        },
        draw31 () { // Translate
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            context.translate(this.canvaswidth / 2, this.canvasheight / 2); // translate context to center of canvas
            context.fillStyle = 'blue'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw32 () { // Scale
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            // translate context to center of canvas
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            // scale y component
            context.scale(1, 0.5)
            context.fillStyle = 'blue'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw33 () { // Rotate
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            // translate context to center of canvas
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            // rotate 45 degrees clockwise
            context.rotate(Math.PI / 4)
            context.fillStyle = 'blue'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw34 () { // Custom Transform
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            // translation matrix:
            //  1  0  tx
            //  0  1  ty
            //  0  0  1
            var tx = this.canvaswidth / 2
            var ty = this.canvasheight / 2
            // apply custom transform
            context.transform(1, 0, 0, 1, tx, ty)
            context.fillStyle = 'blue'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw35 () { // Shear
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            // shear matrix:
            //  1  sx  0
            //  sy  1  0
            //  0  0  1
            var sx = 0.75
            // .75 horizontal shear
            var sy = 0
            // no vertical shear
            // translate context to center of canvas
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            // apply custom transform
            context.transform(1, sy, sx, 1, 0, 0)
            context.fillStyle = 'blue'
            context.fillRect(-rectWidth / 2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw36 () { // Mirror
            var context = this.getContext()
            // translate context to center of canvas
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            // flip context horizontally
            context.scale(-1, 1)
            context.font = '30pt Calibri'
            context.textAlign = 'center'
            context.fillStyle = 'blue'
            context.fillText('Hello World!', 0, 0)
        },
        draw37 () { // Reset Transform
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            // translate context to center of canvas
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            context.fillStyle = 'blue'
            context.fillRect(-rectWidth / 2, rectHeight / -2, rectWidth, rectHeight)
            // Reset Transform
            // 1 0 0
            // 0 1 0
            // 0 0 1
            // apply custom transform
            context.setTransform(1, 0, 0, 1, 0, 0)
            context.fillStyle = 'red'
            context.fillRect(0, 0, rectWidth, rectHeight)
        },
        draw38 () { // State Stack
            var context = this.getContext()
            var rectWidth = 150
            var rectHeight = 75
            context.save()
            // save state 1
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            context.save()
            // save state 2
            context.rotate(Math.PI / 4)
            context.save()
            // save state 3
            context.scale(2, 2)
            context.fillStyle = 'blue'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
            context.restore()
            // restore state 3
            context.fillStyle = 'red'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
            context.restore()
            // restore state 2
            context.fillStyle = 'yellow'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
            context.restore()
            // restore state 1
            context.fillStyle = 'green'
            context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight)
        },
        draw39 () { // Oval
            var context = this.getContext()
            var centerX = 0
            var centerY = 0
            var radius = 50
            // save state
            context.save()
            // translate context
            context.translate(this.canvaswidth / 2, this.canvasheight / 2)
            // scale context horizontally
            context.scale(2, 1)
            // draw circle which will be stretched into an oval
            context.beginPath()
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
            // restore to original state
            context.restore()
            // apply styling
            context.fillStyle = '#8ED6FF'
            context.fill()
            context.lineWidth = 5
            context.strokeStyle = 'black'
            context.stroke()
        },
        draw40 () { // Shadows
            var context = this.getContext()
            context.rect(188, 40, 200, 100)
            context.fillStyle = 'red'
            context.shadowColor = '#999'
            context.shadowBlur = 20
            context.shadowOffsetX = 15
            context.shadowOffsetY = 15
            context.fill()
        },
        draw41 () { // Global Alpha
            var context = this.getContext()
            // draw blue rectangle
            context.beginPath()
            context.rect(200, 20, 100, 100)
            context.fillStyle = 'blue'
            context.fill()
            // draw transparent red circle
            context.globalAlpha = 0.5
            context.beginPath()
            context.arc(320, 120, 60, 0, 2 * Math.PI, false)
            context.fillStyle = 'red'
            context.fill()
        },
        draw42 () { // Clipping Region
            var context = this.getContext()
            var x = this.canvaswidth / 2
            var y = this.canvasheight / 2
            var radius = 75
            var offset = 50
            /*
            * save() allows us to save the canvas context before
            * defining the clipping region so that we can return
            * to the default state later on
            */
            context.save()
            context.beginPath()
            context.arc(x, y, radius, 0, 2 * Math.PI, false)
            context.clip()
            // draw blue circle inside clipping region
            context.beginPath()
            context.arc(x - offset, y - offset, radius, 0, 2 * Math.PI, false)
            context.fillStyle = 'blue'
            context.fill()
            // draw yellow circle inside clipping region
            context.beginPath()
            context.arc(x + offset, y, radius, 0, 2 * Math.PI, false)
            context.fillStyle = 'yellow'
            context.fill()
            // draw red circle inside clipping region
            context.beginPath()
            context.arc(x, y + offset, radius, 0, 2 * Math.PI, false)
            context.fillStyle = 'red'
            context.fill()
            /*
            * restore() restores the canvas context to its original state
            * before we defined the clipping region
            */
            context.restore()
            context.beginPath()
            context.arc(x, y, radius, 0, 2 * Math.PI, false)
            context.lineWidth = 10
            context.strokeStyle = 'blue'
            context.stroke()
        },
        draw43 () { // Operations
            var context = this.getContext()
            var tempCanvas = document.getElementById('tempCanvas')
            var tempContext = tempCanvas.getContext('2d')
            var squareWidth = 55
            var circleRadius = 35
            var shapeOffset = 50
            var operationOffset = 150
            var arr = []
            arr.push('source-atop')
            arr.push('source-in')
            arr.push('source-out')
            arr.push('source-over')
            arr.push('destination-atop')
            arr.push('destination-in')
            arr.push('destination-out')
            arr.push('destination-over')
            arr.push('lighter')
            arr.push('darker')
            arr.push('xor')
            arr.push('copy')
            // translate context to add 10px padding
            context.translate(10, 10)
            // draw each of the operations
            for (var n = 0; n < arr.length; n++) {
                var thisOperation = arr[n]
                tempContext.save()
                // clear temp context
                tempContext.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                // draw rectangle (destination)
                tempContext.beginPath()
                tempContext.rect(0, 0, squareWidth, squareWidth)
                tempContext.fillStyle = 'blue'
                tempContext.fill()
                // set global composite
                tempContext.globalCompositeOperation = thisOperation
                // draw circle (source)
                tempContext.beginPath()
                tempContext.arc(shapeOffset, shapeOffset, circleRadius, 0, 2 * Math.PI, false)
                tempContext.fillStyle = 'red'
                tempContext.fill()
                tempContext.restore()
                // draw text
                tempContext.font = '10pt Verdana'
                tempContext.fillStyle = 'black'
                tempContext.fillText(thisOperation, 0, squareWidth + 45)
                // translate visible context so operation is drawn in the right place
                if (n > 0) {
                    if (n % 4 === 0) {
                        context.translate(operationOffset * -3, operationOffset);
                    } else {
                        context.translate(operationOffset, 0);
                    }
                }
                // copy drawing from tempCanvas onto visible canvas
                context.drawImage(tempCanvas, 0, 0)
            }
        },
        draw44 () { // Image Data
            var context = this.getContext()
            function drawImage (imageObj) {
                var imageX = 69
                var imageY = 50
                var imageWidth = imageObj.width
                var imageHeight = imageObj.height
                context.drawImage(imageObj, imageX, imageY)
                var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight)
                var data = imageData.data
                // iterate over all pixels
                for (var i = 0, n = data.length; i < n; i += 4) {
                    var red1 = data[i]
                    var green1 = data[i + 1]
                    var blue1 = data[i + 2]
                    var alpha1 = data[i + 3]
                    console.log(red1, green1, blue1, alpha1)
                }
                // pick out pixel data from x, y coordinate
                var x = 20
                var y = 20
                var red = data[((imageWidth * y) + x) * 4]
                var green = data[((imageWidth * y) + x) * 4 + 1]
                var blue = data[((imageWidth * y) + x) * 4 + 2]
                var alpha = data[((imageWidth * y) + x) * 4 + 3]
                console.log(red, green, blue, alpha)
                // iterate over all pixels based on x and y coordinates
                for (var y2 = 0; y2 < imageHeight; y2++) {
                    // loop through each column
                    for (var x2 = 0; x2 < imageWidth; x2++) {
                        var red2 = data[((imageWidth * y2) + x2) * 4]
                        var green2 = data[((imageWidth * y2) + x2) * 4 + 1]
                        var blue2 = data[((imageWidth * y2) + x2) * 4 + 2]
                        var alpha2 = data[((imageWidth * y2) + x2) * 4 + 3]
                        console.log(red2, green2, blue2, alpha2)
                    }
                }
            }
            var imageObj = new Image()
            imageObj.onload = function () {
                drawImage(this)
            }
            imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
        },
        draw45 () { // Invert Colors
            var context = this.getContext()
            function drawImage (imageObj) {
                var x = 69
                var y = 50
                context.drawImage(imageObj, x, y)
                var imageData = context.getImageData(x, y, imageObj.width, imageObj.height)
                var data = imageData.data
                for (var i = 0; i < data.length; i += 4) {
                    // red
                    data[i] = 255 - data[i]
                    // green
                    data[i + 1] = 255 - data[i + 1]
                    // blue
                    data[i + 2] = 255 - data[i + 2]
                }
                // overwrite original image
                context.putImageData(imageData, x, y)
            }
            var imageObj = new Image()
            imageObj.onload = function () {
                drawImage(this)
            }
            imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
        },
        draw46 () { // Grayscale
            var context = this.getContext()
            function drawImage (imageObj) {
                var x = 69
                var y = 50
                context.drawImage(imageObj, x, y)
                var imageData = context.getImageData(x, y, imageObj.width, imageObj.height)
                var data = imageData.data
                for (var i = 0; i < data.length; i += 4) {
                    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]
                    // red
                    data[i] = brightness
                    // green
                    data[i + 1] = brightness
                    // blue
                    data[i + 2] = brightness
                }
                // overwrite original image
                context.putImageData(imageData, x, y)
            }
            var imageObj = new Image()
            imageObj.onload = function () {
                drawImage(this)
            }
            imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
        },
        draw47 () { // Get Data URL
            var context = this.getContext()
            // draw cloud
            context.beginPath()
            context.moveTo(170, 80)
            context.bezierCurveTo(130, 100, 130, 150, 230, 150)
            context.bezierCurveTo(250, 180, 320, 180, 340, 150)
            context.bezierCurveTo(420, 150, 420, 120, 390, 100)
            context.bezierCurveTo(430, 40, 370, 30, 340, 50)
            context.bezierCurveTo(320, 5, 250, 20, 250, 50)
            context.bezierCurveTo(200, 5, 150, 20, 170, 80)
            context.closePath()
            context.lineWidth = 5
            context.fillStyle = '#8ED6FF'
            context.fill()
            context.strokeStyle = '#0000ff'
            context.stroke()
            // save canvas image as data url (png format by default)
            // var dataURL = canvas.toDataURL()
        },
        draw48 () { // Load Data URL
            var context = this.getContext()
            function loadCanvas (dataURL) {
                // load image from data url
                var imageObj = new Image()
                imageObj.onload = function () {
                    context.drawImage(this, 0, 0)
                }
                imageObj.src = dataURL
            }
            // make ajax call to get image data url
            var request = new XMLHttpRequest()
            request.open('GET', 'dataURL.txt', true)
            request.onreadystatechange = function () {
                // Makes sure the document is ready to parse.
                if (request.readyState === 4) {
                    // Makes sure it's found the file.
                    if (request.status === 200) { loadCanvas(request.responseText); }
                }
            }
            request.send(null)
        },
        draw49 () { // Save Drawing
            var context = this.getContext()
            // draw cloud
            context.beginPath()
            context.moveTo(170, 80)
            context.bezierCurveTo(130, 100, 130, 150, 230, 150)
            context.bezierCurveTo(250, 180, 320, 180, 340, 150)
            context.bezierCurveTo(420, 150, 420, 120, 390, 100)
            context.bezierCurveTo(430, 40, 370, 30, 340, 50)
            context.bezierCurveTo(320, 5, 250, 20, 250, 50)
            context.bezierCurveTo(200, 5, 150, 20, 170, 80)
            context.closePath()
            context.lineWidth = 5
            context.fillStyle = '#8ED6FF'
            context.fill()
            context.strokeStyle = '#0000ff'
            context.stroke()
            // save canvas image as data url (png format by default)
            var dataURL = canvas.toDataURL()
            // set canvasImg image src to dataURL
            // so it can be saved as an image
            document.getElementById('canvasImg').src = dataURL
        },
        draw50 () { // Clear Canvas
            var context = this.getContext()
            // begin custom shape
            context.beginPath()
            context.moveTo(170, 80)
            context.bezierCurveTo(130, 100, 130, 150, 230, 150)
            context.bezierCurveTo(250, 180, 320, 180, 340, 150)
            context.bezierCurveTo(420, 150, 420, 120, 390, 100)
            context.bezierCurveTo(430, 40, 370, 30, 340, 50)
            context.bezierCurveTo(320, 5, 250, 20, 250, 50)
            context.bezierCurveTo(200, 5, 150, 20, 170, 80)
            // complete custom shape
            context.closePath()
            context.lineWidth = 5
            context.strokeStyle = 'blue'
            context.stroke()
            // bind event handler to clear button
            document.getElementById('clear').addEventListener('click', function () {
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
            }, false)
        },
        draw51 () { // Animation Frames
            var context = this.getContext()
            function drawRectangle (myRectangle, context) {
                context.beginPath()
                context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
                context.fillStyle = '#8ED6FF'
                context.fill()
                context.lineWidth = myRectangle.borderWidth
                context.strokeStyle = 'black'
                context.stroke()
            }
            function animate (myRectangle, canvas, context, startTime) {
                // update
                var time = (new Date()).getTime() - startTime
                var linearSpeed = 100
                // pixels / second
                var newX = linearSpeed * time / 1000
                if (newX < this.canvaswidth - myRectangle.width - myRectangle.borderWidth / 2) {
                    myRectangle.x = newX
                }
                // clear
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                drawRectangle(myRectangle, context)
                // request new frame
                requestAnimFrame(function () {
                    animate(myRectangle, canvas, context, startTime)
                })
            }
            var myRectangle = { x: 0, y: 75, width: 100, height: 50, borderWidth: 5 }
            drawRectangle(myRectangle, context)
            // wait one second before starting animation
            setTimeout(function () {
                var startTime = (new Date()).getTime()
                animate(myRectangle, canvas, context, startTime)
            }, 1000)
        },
        draw52 () { // Linear Motion
            var context = this.getContext()
            function drawRectangle (myRectangle, context) {
                context.beginPath()
                context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
                context.fillStyle = '#8ED6FF'
                context.fill()
                context.lineWidth = myRectangle.borderWidth
                context.strokeStyle = 'black'
                context.stroke()
            }
            function animate (myRectangle, canvas, context, startTime) {
                // update
                var time = (new Date()).getTime() - startTime
                var linearSpeed = 100
                // pixels / second
                var newX = linearSpeed * time / 1000
                if (newX < this.canvaswidth - myRectangle.width - myRectangle.borderWidth / 2) {
                    myRectangle.x = newX
                }
                // clear
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                drawRectangle(myRectangle, context)
                // request new frame
                requestAnimFrame(function () {
                    animate(myRectangle, canvas, context, startTime)
                })
            }
            var myRectangle = { x: 0, y: 75, width: 100, height: 50, borderWidth: 5 }
            drawRectangle(myRectangle, context)
            // wait one second before starting animation
            setTimeout(function () {
                var startTime = (new Date()).getTime()
                animate(myRectangle, canvas, context, startTime)
            }, 1000)
        },
        draw53 () { // Acceleration
            var context = this.getContext()
            function drawRectangle (myRectangle, context) {
                context.beginPath()
                context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
                context.fillStyle = '#8ED6FF'
                context.fill()
                context.lineWidth = myRectangle.borderWidth
                context.strokeStyle = 'black'
                context.stroke()
            }
            function animate (myRectangle, canvas, context, startTime) {
                // update
                var time = (new Date()).getTime() - startTime
                // pixels / second^2
                var gravity = 200
                myRectangle.y = 0.5 * gravity * Math.pow(time / 1000, 2)
                if (myRectangle.y > this.canvasheight - myRectangle.height - myRectangle.borderWidth / 2) {
                    myRectangle.y = this.canvasheight - myRectangle.height - myRectangle.borderWidth / 2
                }
                // clear
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                // draw
                drawRectangle(myRectangle, context)
                // request new frame
                requestAnimFrame(function () {
                    animate(myRectangle, canvas, context, startTime)
                })
            }
            var myRectangle = { x: 239, y: 0, width: 100, height: 50, borderWidth: 5 }
            drawRectangle(myRectangle, context)
            // wait one second before dropping rectangle
            setTimeout(function () {
                var startTime = (new Date()).getTime()
                animate(myRectangle, canvas, context, startTime)
            }, 2000)
        },
        draw54 () { // Oscillation
            var context = this.getContext()
            function drawRectangle (myRectangle, context) {
                context.beginPath()
                context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
                context.fillStyle = '#8ED6FF'
                context.fill()
                context.lineWidth = myRectangle.borderWidth
                context.strokeStyle = 'black'
                context.stroke()
            }
            function animate (myRectangle, canvas, context, startTime) {
                // update
                var time = (new Date()).getTime() - startTime
                var amplitude = 150
                // in ms
                var period = 2000
                var centerX = this.canvaswidth / 2 - myRectangle.width / 2
                var nextX = amplitude * Math.sin(time * 2 * Math.PI / period) + centerX
                myRectangle.x = nextX
                // clear
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                // draw
                drawRectangle(myRectangle, context)
                // request new frame
                requestAnimFrame(function () {
                    animate(myRectangle, canvas, context, startTime)
                })
            }
            var myRectangle = { x: 250, y: 70, width: 100, height: 50, borderWidth: 5 }
            drawRectangle(myRectangle, context)
            setTimeout(function () {
                var startTime = (new Date()).getTime()
                animate(myRectangle, canvas, context, startTime)
            }, 1000)
        },
        draw55 () { // Start and Stop
            var context = this.getContext()
            function drawRect (myRectangle, context) {
                context.beginPath()
                context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
                context.fillStyle = '#8ED6FF'
                context.fill()
                context.lineWidth = myRectangle.borderWidth
                context.strokeStyle = 'black'
                context.stroke()
            }
            function animate (lastTime, myRectangle, runAnimation, canvas, context) {
                if (runAnimation.value) {
                    // update
                    var time = (new Date()).getTime()
                    var timeDiff = time - lastTime
                    // pixels / second
                    var linearSpeed = 100
                    var linearDistEachFrame = linearSpeed * timeDiff / 1000
                    var currentX = myRectangle.x
                    if (currentX < this.canvaswidth - myRectangle.width - myRectangle.borderWidth / 2) {
                        var newX = currentX + linearDistEachFrame
                        myRectangle.x = newX
                    }
                    // clear
                    context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                    // draw
                    drawRect(myRectangle, context)
                    // request new frame
                    requestAnimFrame(function () {
                        animate(time, myRectangle, runAnimation, canvas, context)
                    })
                }
            }
            var myRectangle = { x: 0, y: 75, width: 100, height: 50, borderWidth: 5 }
            /*
            * define the runAnimation boolean as an obect
            * so that it can be modified by reference
            */
            var runAnimation = { value: false }
            // add click listener to canvas
            document.getElementById('myCanvas').addEventListener('click', function () {
                // flip flag
                runAnimation.value = !runAnimation.value
                if (runAnimation.value) {
                    var date = new Date()
                    var time = date.getTime()
                    animate(time, myRectangle, runAnimation, canvas, context)
                }
            })
            drawRect(myRectangle, context)
        },
        draw56 () { // Mouse Coordinates
            function writeMessage (canvas, message) {
                var context = canvas.getContext('2d')
                context.clearRect(0, 0, this.canvaswidth, this.canvasheight)
                context.font = '18pt Calibri'
                context.fillStyle = 'black'
                context.fillText(message, 10, 25)
            }
            function getMousePos (canvas, evt) {
                var rect = canvas.getBoundingClientRect()
                return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
                }
            }
            canvas.addEventListener('mousemove', function (evt) {
                var mousePos = getMousePos(canvas, evt)
                var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y
                writeMessage(canvas, message)
            }, false)
        }
    },
    mounted: function () {
    }
}
</script>
