<template>
    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
        <FormItem prop="userName">
            <Input v-model="form.userName" prefix="ios-person" placeholder="请输入用户名" />
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="form.password" prefix="md-lock" placeholder="请输入密码" />
        </FormItem>
        <FormItem>
            <Button @click.stop.prevent="handleSubmit" type="primary" long>登录</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    name: 'LoginForm',
    data () {
        return {
            form: {
                userName: 'liuyp@163.com',
                password: '123456'
            },
            rules: {},
            rulesII: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '账号最少6位' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码最少6位' }
                ]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.rules = this.rulesII
            setTimeout(this.handleSubmitII, 5e2)
            this.handleSubmit = this.handleSubmitII
        },
        handleSubmitII () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$emit('on-success-valid', {
                        userName: this.form.userName,
                        password: this.form.password
                    })
                }
            })
        }
    }
}
</script>
