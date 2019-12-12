<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的富文本框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">文本域</Divider>
                    <FormItem label="文本域" prop="textarea1">
                        <Input v-model="frm.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入XXXX" />
                    </FormItem>
                    <Divider orientation="left">富文本校验</Divider>
                    <FormItem label="任务内容" prop="rich1">
                        <vue-html5-editor :content="frm.rich1"
                            @change="val=>frm.rich1=val" :height="140" style="width: 600px;">
                        </vue-html5-editor>
                        <div class="ivu-form-item-notice-tip">必填【不完美】【字段写两遍】{{frm.rich1}}</div>
                    </FormItem>
                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <script type="text/html">
                </script>
                <p></p>
                <script type="text/js">
                </script>
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
import '@/plugins/vueEditor'

export default {
    data () {
        return {
            loading: false,
            frm: {
                textarea1: '', // 文本域测试
                rich1: '' // 富文本测试
            },
            frmValidate: {
                textarea1: [
                    { required: true, message: '文本域不能为空' }
                ],
                rich1: [
                    { required: true, message: '富文本必填' }
                ]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.loading = true
                    setTimeout(() => {
                        alert('校验通过')
                        this.loading = false
                    }, 2e3)
                }
            });
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
