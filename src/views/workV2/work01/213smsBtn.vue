<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">工作需要 搞一个全局计时的短信验证码按钮</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 随插随用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试表单正确性</Button>
                    <Divider type="vertical" />
                        <Button type="primary" @click="handleStopSmsCode()">停止短信倒计时</Button>
                    </FormItem>

                    <FormItem label="短信验证码" prop="smscode">
                        <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px" maxlength="6"/>
                        <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
                    </FormItem>
                    <FormItem label="短信验证码" prop="smscode">
                        <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px" maxlength="6"/>
                        <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
                    </FormItem>
                    <FormItem label="短信验证码" prop="smscode">
                        <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px" maxlength="6"/>
                        <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
                    </FormItem>
                    <FormItem :label-width="0">
                        <script type="text/html" v-pre>
                            <FormItem label="短信验证码" prop="smscode">
                                <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px"/>
                                <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            // 执行发送短信接口后的回调 一般没啥用
                            sendSms () {
                                alert('假装发了短信')
                            },
                        </script>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <p></p>
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
import SmsBtn from '@C/sms-btn'

export default {
    components: { SmsBtn },
    data () {
        return {
            loading: false,
            frm: {
                smscode: '' // 输入框测试
            },
            frmValidate: {
                smscode: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '最少输入6个字符' }
                ]
            }
        }
    },
    methods: {
        sendSms () {
            alert('假装发了短信')
        },
        handleStopSmsCode () {
            this.$store.dispatch('sms/stopSmsCode') // 关闭倒计时
        },
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
