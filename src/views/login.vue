<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-form ref="loginForm" @on-success-valid="handleSubmit"></login-form>
                    <div>没有账号?<a style="margin-left:5px" @click="to_registered">去注册></a></div>
                    <!-- <p class="login-tip hand" @click="to_registered">注册</p> -->
                </div>
            </Card>
        </div>
        <div class="login-footer">Copyright © 2017-2018 Pingfu. All Rights Reserved. 有限公司 版权所有</div>
    </div>
</template>
<script>
import LoginForm from '@C/login-form' // 登录表单
import '@S/login.less';
import { homePage } from '@/router/routers'
export default {
    components: {
        LoginForm
    },
    data () {
        return {
            error: ''
        }
    },
    methods: {
        handleSubmit (param) {
            this.error = ''
            this.$store.dispatch('system/login', param).then(res => {
                this.$store.dispatch('system/getPowerList').then(res => { // 读取权限 更新权限视图
                    console.info('%c仙 管理员登录喽', 'color:#05ff0f;background:#000;padding:0 5px;')
                    this.$router.push({ name: homePage })
                })
                this.$store.dispatch('system/getUserInfo') // 获取用户信息
            }).catch(res => {
                this.error = res
            })
        },
        to_registered () {
            this.$router.push({name: 'register'})
        }
    },
    mounted: function () {
        this.$store.dispatch('system/setRole', 1) // 设置角色
    }
}
</script>
