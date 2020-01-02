<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">自动根据div的宽度来计算文本字体大小</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Row>
                    <Col span="12">
                        <div id="try111" style="width:200px;height:60px;background:Red;color: #fff;">
                            <div id="try222">新一代网站域名.</div>
                        </div>
                        <Button @click="tryfff">获取div高度</Button>
                    </Col>
                    <Col span="12">
                    <div v-autofs style="width:200px;height:100px;background:Red;color: #fff;">新一代网站域名.</div>
                    <p class="text-danger">指令实现, 代码实现的不大好</p>
                    </Col>
                </Row>
                <hr />
                <p>我猜你是 (!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]]</p>
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
import '@/directive/autofs'

export default {
    data () {
        return {}
    },
    methods: {
        tryfff () {
            const div1 = document.getElementById('try111')
            const div2 = document.getElementById('try222')
            for (var i = 12, l = 100; i < l; i++) {
                div2.style.fontSize = i + 'px'
                console.log(div1.offsetHeight, div2.offsetHeight)
                if (div1.offsetHeight < div2.offsetHeight) {
                    div2.style.fontSize = (i - 1) + 'px'
                    div2.style.lineHeight = div1.offsetHeight + 'px'
                    break
                }
            }
        }
    },
    mounted () {
    }
}
</script>
