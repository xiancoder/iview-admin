<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue语法input上去掉前后的空白符</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 经过测试 在操作表单中随意输入空格 可以过滤掉 666 项目可以使用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">最基本的输入框 只保留必填校验</Divider>
                    <FormItem label="标题" prop="p01">
                        <Input type="text" v-model.trim="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem label="标题" prop="p01">
                        <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: &gt;{{frm.p01}}&lt;</p>
                        <script type="text/html" v-pre>
                            <Input type="text" v-model.trim="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                            <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        </script>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
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
import { regexp } from '@/utils'

export default {
    data () {
        return {
            loading: false,
            frm: {
                p01: '' // 输入框测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: regexp.b05, message: '整数6位，小数点2位' }
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
