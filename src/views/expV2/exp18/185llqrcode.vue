<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">解析图片中的二维码 - 失败了</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> ------------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :label-width="150">
                    <FormItem label="标题" prop="p03">
                        <Upload :before-upload="handleUpload3" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.p03.name}}</span>
                        <div class="ivu-form-item-notice-tip">二维码识别 {{frm.llres}}</div>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <a href="https://blog.csdn.net/qq_37816525/article/details/94571557"></a>
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
import llqrcode from '@/plugins/llqrcode'

export default {
    data () {
        return {
            loading: false,
            frm: {
                p03: {}, // 文件上传
                llres: '-'
            }
        }
    },
    methods: {
        handleUpload3 (file) {
            if (file.size > 2 * 1024 * 1024) { return false }
            this.frm.p03 = file
            return false
        },
        handleSubmit () {
            llqrcode(this.frm.p03).then(res => {
                this.frm.llres = res
            })
        }
    },
    mounted () {
    }
}
</script>
