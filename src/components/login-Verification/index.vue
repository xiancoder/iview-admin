<template>
    <Form ref="LoginVerification" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
        <FormItem prop="code">
            <Input v-model="form.code" prefix="ios-key" placeholder="二次验证动态码" maxlength=6 />
        </FormItem>
        <FormItem>
            <Button @click.stop.prevent="handleSubmit" type="primary" long>登录</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    name: 'LoginVerification',
    props: {
        userNameRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, min: 6, max: 6, message: '请输入6位数字', trigger: 'blur' }
                ]
            }
        }
    },
    data () {
        return {
            form: {
                code: ''
            }
        }
    },
    computed: {
        rules () {
            return {
                code: this.userNameRules
            }
        }
    },
    methods: {
        // 获取主域名
        gethost () {
            return window.location.host
        },
        // 提交
        handleSubmit () {
            this.$refs.LoginVerification.validate((valid) => {
                if (valid) {
                    this.$emit('on-success-valid', {
                        code: this.form.code
                    })
                }
            })
        }
    }
}
</script>
