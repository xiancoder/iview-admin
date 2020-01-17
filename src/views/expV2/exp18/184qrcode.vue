<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">js 生成二维码</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 代码调用部分写的很不好</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <Form ref="from0982" :model="frm" :label-width="150">
                    <FormItem label="标题" prop="aa">
                        <Input type="text" v-model="frm.aa" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.aa}}</p>
                        <canvas id="canvas2211" style="width: 160px;height: 160px;"></canvas>
                        <script type="text/html" v-pre>
                            <canvas id="canvas2211" style="width: 160px;height: 160px;"></canvas>
                        </script>
                        <script type="text/js">
                            var canvas = this.$el.querySelector('#canvas')
                            QRCode.toCanvas(canvas, '你好大石家庄贤者良师')
                        </script>
                    </FormItem>
                </Form>
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
import QRCode from 'qrcode'

export default {
    data () {
        return {
            frm: {
                aa: '你好大石家庄贤者良师'
            }
        }
    },
    watch: { // 监听
        'frm.aa': {
            immediate: false,
            handler (val) {
                this.changeQrCode()
            }
        }
    },
    methods: {
        changeQrCode () {
            var canvas = document.querySelector('#canvas2211')
            QRCode.toCanvas(canvas, this.frm.aa)
        }
    },
    mounted () {
        this.changeQrCode()
    }
}
</script>
