<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的密码框的的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">密码</Divider>
                    <FormItem label="密码" prop="pwd1">
                        <input type="text" style="width: 0px; height: 0px; position: absolute;"/>
                        <Input type="password" v-model="frm.pwd1" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填+减小浏览器自动填写的影响 【不完美】【怎样不允许浏览器捣乱】</div>
                    </FormItem>
                    <FormItem label="重复密码" prop="pwd2">
                        <Input type="password" v-model="frm.pwd2" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填+与前面的相同 【完美】【自定义校验方法全局化】</div>
                    </FormItem>
                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <p class="text-danger">我想屏蔽掉浏览器的默认填写密码功能</p>
                <p class="text-danger">失败了 写个空输入框也不行....@.@</p>
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
export default {
    data () {
        return {
            loading: false,
            frm: {
                pwd1: '', // 密码测试
                pwd2: '' // 密码测试
            },
            frmValidate: {
                pwd1: [
                    { validator: (rule, value, callback) => {
                        if (value === '') { return callback(new Error('请输入密码')) }
                        if (this.frm.pwd1 !== '') { this.$refs['from0982'].validateField('pwd2') }
                        callback();
                    } }
                ],
                pwd2: [
                    { validator: (rule, value, callback) => {
                        if (value === '') { return callback(new Error('请再次输入密码')) }
                        if (value !== this.frm.pwd1) { return callback(new Error('两次输入不一致!')) }
                        callback()
                    } }
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
