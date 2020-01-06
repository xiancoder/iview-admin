<template>
    <div :class="classlist">
        <div class="login-con" v-if="!myRoleisAdmin">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit1"></login-form>
                    <div>没有账号?<a style="margin-left:5px" @click="toPageRegist">去注册&gt;</a></div>
                </div>
            </Card>
        </div>
        <div class="login-con" v-if="myRoleisAdmin">
            <Card icon="log-in" title="员工登陆" :bordered="false" v-if="step==1">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit2"></login-form>
                    <div>不是员工?<a style="margin-left:5px" @click="toPageLogin">用户登录&gt;</a></div>
                </div>
            </Card>
            <Card icon="log-in" title="二次验证动态码" :bordered="false" v-if="step==2">
                <div style="color:red">{{error}}</div>
                <div class="form-con">
                    <login-Verification @on-success-valid="googleSubmit3"></login-Verification>
                </div>
            </Card>
        </div>
        <div class="login-footer">Copyright © 2017-2018 XXXX. All Rights Reserved. xxxx xxxx 有限公司 版权所有</div>
    </div>
</template>
<script>
import LoginForm from '@C/login-form' // 登录表单
import LoginVerification from '@C/login-Verification' // 登录表单
import { homePage } from '@/router/routers'
import '@S/login.less';

const myRoleisAdmin = window.location.pathname.indexOf('staff.html') > -1 // 登录管理员还是登录用户

export default {
    components: { LoginForm, LoginVerification },
    data () {
        return {
            myRoleisAdmin: myRoleisAdmin,
            classlist: {'login': true, 'loginStaff': false, 'loginUser1': false, 'loginUser2': false},
            step: 1,
            token: '',
            error: ''
        }
    },
    methods: {
        handleSubmit1 (param) {
            this.error = ''
            this.$store.dispatch('admin/login', param).then(res => {
                this.$store.dispatch('route/getPowerList').then(res => { // 读取权限 更新权限视图
                    console.info('%c仙 管理员登录喽', 'color:#05ff0f;background:#000;padding:0 5px;')
                    this.$router.push({ name: homePage })
                })
                this.$store.dispatch('admin/getUserInfo') // 获取用户信息
            }).catch(res => {
                this.error = res
            })
        },
        toPageRegist () {
            this.$router.push({name: 'register'})
        },
        toPageLogin () {
            window.location.href = 'main.html'
        },
        handleSubmit2 (param) {
            this.error = ''
            this.$store.dispatch('admin/staffLogin', param).then(res => {
                this.token = res.token
                this.step = 2
            }).catch(res => {
                this.error = res
            })
        },
        googleSubmit3 (param) {
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
        this.$store.dispatch('admin/setRole', myRoleisAdmin ? 2 : 1) // 设置角色
        this.step = 1
        if (myRoleisAdmin) {
            this.classlist.loginStaff = true
        } else {
            const pid = this.$store.state.admin.platformId
            if (pid === 1) {
                this.classlist.loginUser1 = true
            } else {
                this.classlist.loginUser2 = true
            }
            console.log(pid)
        }
    }
}
</script>
