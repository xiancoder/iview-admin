<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit"></login-form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import LoginForm from '@C/login-form' // 登录表单
import '@S/login.less';
export default {
    components: {
        LoginForm
    },
    methods: {
        handleSubmit (param) {
            this.$store.dispatch('user/login', param).then(res => {
                this.$store.dispatch('user/getUserInfo').then(res => {
                    this.$router.push({
                        name: this.$config.homeName
                    })
                })
            })
        }
    }
}
</script>
