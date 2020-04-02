<template>
    <div class="blogCss formLayout ">
        <div class="blog registered">
            <div class="blogContent"  :style="{height:autoheight}">
                <Tabs value="personal" style="margin-top: 20px" @on-click="handleReset ('formValidateId','formcompany')">
                    <TabPane label="个人注册" name="personal" id="personal">
                        <Form ref="formValidateId" :model="frm" :rules="frmValidate" :label-width="150">
                            <FormItem label="用户名" prop="user_name">
                                <Input type="text" v-model="frm.user_name" placeholder="请您输入用户名" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="登录密码" prop="user_pwd">
                                <Input type="password" v-model="frm.user_pwd" placeholder="请输入输入密码,6-20位字母、数字" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="重复密码" prop="user_pwd1">
                                <Input type="password" v-model="frm.user_pwd1" placeholder="请输入确认密码" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="邀请码" prop="invite_code">
                                <Input type="text" v-model="frm.invite_code" placeholder="请联系客服获取邀请码" style="width: 326px"/>
                                <a style="margin-left:15px" class="waiter" @click="instance"><img src="../assets/images/waiter.png" alt="" >联系客服</a>
                            </FormItem>
                            <FormItem label="联系方式" prop="contact_type">
                                <Select v-model="frm.contact_type" filterable placeholder="请选择联系方式" style="width:326px">
                                    <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                                    </Option>
                                </Select>
                            </FormItem>
                            <FormItem label="手机号" prop="tel" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.tel" placeholder="请输入11位有效手机号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="微信" prop="wx" v-if="frm.contact_type == 2">
                                <Input type="text" v-model="frm.wx" placeholder="请输入微信号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="QQ" prop="qq" v-if="frm.contact_type == 3">
                                <Input type="text" v-model="frm.qq" placeholder="请输入QQ号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="邮箱" prop="email" v-if="frm.contact_type == 4">
                                <Input type="text" v-model="frm.email" placeholder="请输入邮箱" style="width: 326px"/>
                            </FormItem>
                            <!-- <FormItem label="图形验证码" prop="imgcode" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.imgcode" placeholder="请输入图形验证码" style="width: 217px"/>
                                <img class="imgcode" @click="GetVerificCode" :src="src" alt="验证码">
                            </FormItem> -->
                            <FormItem label=" 短信验证码" prop="telcode" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.telcode" placeholder="请输入短信验证码" style="width: 217px"/>
                                <sms-btn :isDisabled="!IsDisabled_t" @on-send="sendSms()"></sms-btn>
                            </FormItem>
                            <FormItem style="margin: 50px 0 0 -150px;text-align: center;">
                                <Button class="submit" type="primary" :loading="loading" @click="handleSubmit('formValidateId')">立即注册</Button>
                                <div>已有账号?<a style="margin-left:5px" @click="tologin">去登录></a></div>
                            </FormItem>
                        </Form>
                    </TabPane>
                    <TabPane label="公司注册" name="company">
                        <Form ref="formcompany" :model="frm" :rules="frmValidate" :label-width="150">
                            <FormItem label="用户名" prop="user_name">
                                <Input type="text" v-model="frm.user_name" placeholder="请您输入用户名" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="登录密码" prop="user_pwd">
                                <Input type="password" v-model="frm.user_pwd" placeholder="请输入输入密码,6-20位字母、数字" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="重复密码" prop="user_pwd1">
                                <Input type="password" v-model="frm.user_pwd1" placeholder="请输入确认密码" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="邀请码" prop="invite_code">
                                <Input type="text" v-model="frm.invite_code" placeholder="请联系客服获取邀请码" style="width: 326px"/>
                                <a style="margin-left:15px" class="waiter" @click="instance"><img src="../assets/images/waiter.png" alt="" >联系客服</a>
                            </FormItem>
                            <FormItem label="公司名称" prop="company_name">
                                <Input type="text" v-model="frm.company_name" placeholder="请输入公司名称" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="联系人" prop="contact_name">
                                <Input type="text" v-model="frm.contact_name" placeholder="请输入联系人" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="联系方式" prop="contact_type">
                                <Select v-model="frm.contact_type" filterable placeholder="请选择联系方式" style="width: 326px">
                                    <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                                    </Option>
                                </Select>
                            </FormItem>
                            <FormItem label="手机号" prop="tel" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.tel" placeholder="请输入11位有效手机号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="微信" prop="wx" v-if="frm.contact_type == 2">
                                <Input type="text" v-model="frm.wx" placeholder="请输入微信号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="QQ" prop="qq" v-if="frm.contact_type == 3">
                                <Input type="text" v-model="frm.qq" placeholder="请输入QQ号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="邮箱" prop="email" v-if="frm.contact_type == 4">
                                <Input type="text" v-model="frm.email" placeholder="请输入邮箱" style="width: 326px"/>
                            </FormItem>
                            <!-- <FormItem label="图形验证码" prop="imgcode" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.imgcode" placeholder="请输入图形验证码" style="width: 217px"/>
                                <img class="imgcode" src="../assets/images/u86.png" alt="">
                            </FormItem> -->
                            <FormItem label=" 短信验证码" prop="telcode" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.telcode" placeholder="请输入短信验证码" style="width: 217px"/>
                                <sms-btn :isDisabled="!IsDisabled_t" @on-send="sendSms()"></sms-btn>
                            </FormItem>
                            <FormItem style="margin: 50px 0 0 -150px;text-align: center;">
                                <Button class="submit" type="primary" :loading="loading" @click="handleSubmit('formcompany')">立即注册</Button>
                                <div>已有账号?<a style="margin-left:5px" @click="tologin">去登录></a></div>
                            </FormItem>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>
<script>
import SmsBtn from '@C/sms-btn'
import regexp from '@/utils/regexp'
import '@S/register.less';
export default {
    components: {
        SmsBtn
    },
    data () {
        const validatePw3 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('输入框不能为空'));
            } else {
                if (regexp.a05.test(value)) {
                    this.IsDisabled_t = true;
                } else {
                    callback(new Error('请输入正确手机号'));
                    this.IsDisabled_t = false;
                }
                callback();
            }
        };
        const validatePw4 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('输入框不能为空'));
                this.IsDisabled_i = false;
            } else {
                if (value.length === 4) {
                    this.IsDisabled_i = true;
                    callback();
                } else {
                    this.IsDisabled_i = false;
                    callback(new Error('输入4位有效验证码'));
                }
            }
        };
        return {
            loading: false,
            IsDisabled_t: false,
            IsDisabled_i: false,
            GetCodeBot: true,
            reset: false,
            autoheight: '666px',
            src: '',
            list: [{id: 1, name: '手机号'}, {id: 2, name: '微信'}, {id: 3, name: 'QQ'}, {id: 4, name: '邮箱'}],
            frm: {
                user_name: '', // 用户名
                user_pwd: '', // 密码
                user_pwd1: '', // 确认密码
                invite_code: '', // 邀请码
                company_name: '', // 公司名称
                contact_name: '', // 联系人
                contact_type: 1, // 联系方式1,手机号,2-微信,3-qq,4-邮箱
                tel: '', // 手机号
                wx: '', // 微信
                qq: '', // QQ
                email: '', // 邮件
                imgcode: '', // 图片验证码
                telcode: '' // 短信验证码
            },
            frmValidate: {
                user_name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '用户名最少6位' },
                    { type: 'string', max: 20, message: '用户名至多20位' },
                    { pattern: regexp.n22, message: '请勿输入非法字符' }
                ],
                user_pwd: [
                    { required: true, message: '密码不能为空' },
                    { type: 'string', min: 6, message: '密码最少6位' },
                    { type: 'string', max: 20, message: '密码至多20位' },
                    { validator: (rule, value, callback) => {
                        let v1 = 0
                        if (regexp.b01.test(value)) v1++
                        if (regexp.b02.test(value)) v1++
                        if (v1 < 2) { return callback(new Error('密码需同时包含数字、字母!')) }
                        if (!regexp.b04.test(value)) { return callback(new Error('只能包含数字、字母!')) }
                        this.$refs.formValidateId.validateField('user_pwd1')
                        this.$refs.formcompany.validateField('user_pwd1')
                        callback();
                    } }
                ],
                user_pwd1: [
                    { required: true, message: '密码不能为空' },
                    { validator: (rule, value, callback) => {
                        if (value !== this.frm.user_pwd) { return callback(new Error('两次输入不一致!')) }
                        callback()
                    } }
                ],
                contact_type: [
                    { required: true, message: '请选择联系方式' }
                ],
                company_name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                contact_name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 20, message: '最多输入20个字符' }
                ],
                invite_code: [
                    { required: true, message: '输入框不能为空' }
                ],
                tel: [
                    { required: true, validator: validatePw3 }
                ],
                wx: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '微信最少6位' },
                    { type: 'string', max: 20, message: '微信至多20位' },
                    { pattern: regexp.b06, message: '请勿输入非法字符' }
                ],
                qq: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 5, message: 'QQ最少6位' },
                    { type: 'string', max: 15, message: 'QQ至多20位' },
                    { pattern: regexp.n19, message: '请输入正确QQ的号' }
                ],
                email: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '邮箱最少6位' },
                    { type: 'string', max: 30, message: '邮箱至多20位' },
                    { pattern: regexp.n08, message: '请输入正确邮箱' }
                ],
                imgcode: [
                    { required: true, validator: validatePw4 }
                ],
                telcode: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, max: 6, message: '输入6位有效验证码' }
                ]
            }
        }
    },
    methods: {
        instance () {
            this.$Modal.info({
                title: '联系客服',
                content: '添加客服QQ（12345678）好友，获取邀请码。'
            });
        },
        toemail () {
            this.$Modal.confirm({
                title: '邮箱验证',
                content: '请前往邮箱验证!',
                onOk: () => {
                    this.$router.push({ name: 'login' })
                },
                onCancel: () => {}
            })
        },
        aotuheight (n) {
            this.autoheight = n
        },
        // 获取图片验证码
        GetVerificCode () {
            this.$api.system.imgCode().then(res => {
                this.src = res
            })
        },
        sendSms () { // 发送短信
            let x = {
                'tel': this.frm.tel,
                'imgcode': this.frm.imgcode
            }
            this.$api.system.smsCode(x).then(res => {
                console.log('dsp', '注册', '验证码已发送!')
            })
        },
        // 个人提交
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.loading = true
                    let param = {
                        'platform_id': this.$store.state.admin.platformId,
                        'user_name': this.frm.user_name, // 用户名
                        'user_pwd': this.frm.user_pwd, // 微信
                        'invite_code': this.frm.invite_code, // 微信 邀请码
                        'contact_type': this.frm.contact_type // 联系方式1-手机号2-微信3-qq4-邮箱
                    }
                    if (this.frm.contact_type === 1) {
                        param.tel = this.frm.tel
                        param.telcode = this.frm.telcode
                    } else if (this.frm.contact_type === 2) {
                        param.wx = this.frm.wx
                    } else if (this.frm.contact_type === 3) {
                        param.qq = this.frm.qq
                    } else if (this.frm.contact_type === 4) {
                        param.email = this.frm.email
                    }
                    if (name === 'formValidateId') {
                        param.type = 1
                    } else {
                        param.type = 2;
                        param.company_name = this.frm.company_name
                        param.contact_name = this.frm.contact_name
                    }
                    alert('12345')
                    this.$store.dispatch('system/register', param).then(res => { // 注册
                        this.loading = false
                        if (res.res_code) {
                            if (param.contact_type === 4) {
                                this.toemail()
                            } else {
                                this.$router.push({ name: 'login' })
                            }
                        }
                    })
                }
            });
        },
        // 重置
        handleReset (name1, name2) {
            // .is(':visible')
            let personal = document.getElementById('personal')
            setTimeout(() => {
                if (personal.style.visibility === 'visible') {
                    this.autoheight = '666px'
                } else {
                    this.autoheight = 'auto'
                }
            }, 1)
            this.$refs[name1].resetFields();
            this.$refs[name2].resetFields();
            this.IsDisabled_t = false;
            this.IsDisabled_i = false;
            this.reset = true;
            this.loading = false
        },
        tologin () {
            this.$router.push({ name: 'login' })
        }
    },
    mounted () {
        // this.GetVerificCode()
    }
}
</script>
