<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">关于Vue中的数字输入框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">数字框校验 必填+1-100+只能输入数字整数</Divider>
                    <FormItem label="数字框" prop="num1">
                        <InputNumber :max="100" :min="1" v-model="frm.num1" placeholder="请输入XXXX"
                            style="width: 450px" :precision="0">
                        </InputNumber>
                        <div class="ivu-form-item-notice-tip">必填+1-100+只能输入数字整数</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="数字框" prop="num1">
                                <InputNumber :max="100" :min="1" v-model="frm.num1" placeholder="请输入XXXX"
                                    style="width: 450px" :precision="0">
                                </InputNumber>
                            </FormItem>
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
export default {
    data () {
        return {
            loading: false,
            frm: {
                num1: 0 // 数字框测试
            },
            frmValidate: {
                num1: [
                    { required: true, message: '数字框不能为空' }
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
