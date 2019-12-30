<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="员工登陆" :bordered="false" v-if="step==1">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit"></login-form>
                </div>
            </Card>
            <Card icon="log-in" title="二次验证动态码" :bordered="false" v-if="step==2">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-Verification @on-success-valid="googleSubmit"></login-Verification>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import LoginForm from '@C/login-form' // 登录表单
import LoginVerification from '@C/login-Verification' // 登录表单
import { homePage } from '@/router/routers'
import '@S/slogin.less';
export default {
    components: {
        LoginForm,
        LoginVerification
    },
    data () {
        return {
            step: 1,
            token: '',
            error: ''
        }
    },
    methods: {
        handleSubmit (param) {
            this.error = ''
            this.$store.dispatch('admin/staffLogin', param).then(res => {
                this.token = res.token
                this.step = 2
            }).catch(res => {
                this.error = res
            })
        },
        googleSubmit (param) {
            param.token = this.token
            this.$store.dispatch('admin/google', param).then(res => {
                this.$store.dispatch('route/getPowerList').then(res => { // 读取权限 更新权限视图
                    console.info('%c仙 管理员登录喽', 'color:#05ff0f;background:#000;padding:0 5px;')
                    this.$router.push({ name: homePage })
                })
                this.$store.dispatch('admin/getUserInfo') // 获取用户信息
            }).catch(res => {
                this.error = res
            })
        }
    },
    mounted: function () {
        this.$store.dispatch('admin/setRole', 2) // 设置角色
        this.step = 1
    }
}
</script>
