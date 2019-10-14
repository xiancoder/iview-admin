<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">基本鼠标样式</div>
            <div class="blogContent" v-highlight>
                <Row>
                    <Col span="8"><div style="cursor : auto"> <h6><kbd>效果</kbd></h6> auto : 默认值。浏览器根据当前情况自动确定鼠标光标类型。</div> </Col>
                    <Col span="8"><div style="cursor : all-scroll"> <h6><kbd>效果</kbd></h6> all-scroll : IE6.0 有上下左右四个箭头，中间有一个圆点的光标。用于标示页面可以向上下左右任何方向滚动。</div> </Col>
                    <Col span="8"><div style="cursor : col-resize"> <h6><kbd>效果</kbd></h6> col-resize : IE6.0 有左右两个箭头，中间由竖线分隔开的光标。用于标示项目或标题栏可以被水平改变尺寸。</div> </Col>
                    <Col span="8"><div style="cursor : crosshair"> <h6><kbd>效果</kbd></h6> crosshair : 简单的十字线光标。</div> </Col>
                    <Col span="8"><div style="cursor : default"> <h6><kbd>效果</kbd></h6> default : 客户端平台的默认光标。通常是一个箭头。</div> </Col>
                    <Col span="8"><div style="cursor : hand"> <h6><kbd>效果</kbd></h6> hand : 竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。</div> </Col>
                    <Col span="8"><div style="cursor : move"> <h6><kbd>效果</kbd></h6> move : 十字箭头光标。用于标示对象可被移动。</div> </Col>
                    <Col span="8"><div style="cursor : help"> <h6><kbd>效果</kbd></h6> help : 带有问号标记的箭头。用于标示有帮助信息存在。</div> </Col>
                    <Col span="8"><div style="cursor : no-drop"> <h6><kbd>效果</kbd></h6> no-drop : IE6.0 带有一个被斜线贯穿的圆圈的手形光标。用于标示被拖起的对象不允许在光标的当前位置被放下。</div> </Col>
                    <Col span="8"><div style="cursor : not-allowed"> <h6><kbd>效果</kbd></h6> not-allowed : IE6.0 禁止标记(一个被斜线贯穿的圆圈)光标。用于标示请求的操作不允许被执行。</div> </Col>
                    <Col span="8"><div style="cursor : pointer"> <h6><kbd>效果</kbd></h6> pointer : IE6.0 和 hand 一样。竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。</div> </Col>
                    <Col span="8"><div style="cursor : progress"> <h6><kbd>效果</kbd></h6> progress : IE6.0 带有沙漏标记的箭头光标。用于标示一个进程正在后台运行。</div> </Col>
                    <Col span="8"><div style="cursor : row-resize"> <h6><kbd>效果</kbd></h6> row-resize : IE6.0 有上下两个箭头，中间由横线分隔开的光标。用于标示项目或标题栏可以被垂直改变尺寸。</div> </Col>
                    <Col span="8"><div style="cursor : text"> <h6><kbd>效果</kbd></h6> text : 用于标示可编辑的水平文本的光标。通常是大写字母 I 的形状。</div> </Col>
                    <Col span="8"><div style="cursor : vertical-text"> <h6><kbd>效果</kbd></h6> vertical-text : IE6.0 用于标示可编辑的垂直文本的光标。通常是大写字母 I 旋转90度的形状。</div> </Col>
                    <Col span="8"><div style="cursor : wait"> <h6><kbd>效果</kbd></h6> wait : 用于标示程序忙用户需要等待的光标。通常是沙漏或手表的形状。</div> </Col>
                    <Col span="8"><div style="cursor : w-resize"> <h6><kbd>效果</kbd></h6> *-resize : 用于标示对象可被改变尺寸方向的箭头光标。w-resize | s-resize | n-resize | e-resize | ne-resize | sw-resize | se-resize | nw-resize</div> </Col>
                    <Col span="8"><div style="cursor: url(img/1.ani)"> <h6><kbd>效果</kbd></h6> url ( url ) : IE6.0 用户自定义光标。使用绝对或相对 url 地址指定光标文件(后缀为 .cur 或者 .ani )。</div> </Col>
                </Row>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
