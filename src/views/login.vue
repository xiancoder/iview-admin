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
            this.$store.dispatch('system/login', param).then(res => {
                this.$store.dispatch('system/getPowerList').then(res => { // 读取权限 更新权限视图
                    console.info('仙', '管理员登录喽')
                    this.$router.push({ path: '/' })
                })
                this.$store.dispatch('system/getUserInfo') // 获取用户信息
                this.$store.dispatch('system/getNewMessageNum') // 获取未读最新消息
            })
        }
    }
}
</script>
