<template>
    <div class="xianFrom">
        <Form ref="form1212" :model="frm" :rules="frmRule"
            :label-width="150" style="width: 90%;margin: 0 auto;padding: 0;">
            <FormItem label="">
                <h3>修改企业收款账户</h3>
            </FormItem>
            <FormItem label="公司名称" prop="name">
                <Input type="text" v-model="frm.name" placeholder="请输入公司名称" style="width: 300px" :disabled="disabled"/>
            </FormItem>
            <FormItem label="银行账号" prop="account">
                <Input type="text" v-model="frm.account" placeholder="请输入银行账号" style="width: 300px" :disabled="disabled"/>
            </FormItem>
            <FormItem label="开户行" prop="bank">
                <Input type="text" v-model="frm.bank" placeholder="请输入开户行" style="width: 300px" :disabled="disabled"/>
            </FormItem>
            <FormItem label="图形验证码" prop="ccode">
                <Input type="text" v-model="frm.ccode" placeholder="请输入图形验证码" style="width: 180px"/>
                <span @click="flashccore()" style="margin-left: 20px;"> <ccode :content="ccore"></ccode> </span>
            </FormItem>
            <FormItem label="" prop="text1">
                <p>系统将向公司手机号：185******134 发送短信验证码</p>
            </FormItem>
            <FormItem label="短信验证码" prop="smscode">
                <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px"/>
                <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="default" @click="cancel">取消</Button>
                <Divider type="vertical" />
                <Button type="primary" @click="ok1" :loading="loading1">下一步</Button>
                <Button type="primary" @click="ok2" :loading="loading2">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import Ccode from '@C/ccode'
import { extend } from '@/utils/object'
import { ramdomString } from '@/utils/string'
import SmsBtn from '@C/sms-btn'

export default {
    components: {
        SmsBtn, Ccode
    },
    data () {
        return {
            loading1: false,
            disabled: false,
            loading2: false,
            frm: {
                towho: 1,
                name: '',
                account: '',
                bank: '',
                ccode: '',
                smscode: ''
            },
            frmRule: {
                name: [
                    { required: true, message: '不能为空' }
                ],
                account: [
                    { required: true, message: '不能为空' }
                ],
                bank: [
                    { required: true, message: '不能为空' }
                ],
                ccode: [
                    { required: true, message: '不能为空' }
                ],
                smscode: [
                    { required: true, message: '不能为空' }
                ]
            },
            ccore: '0000'
        }
    },
    props: {
        flag: { type: Boolean, default: false },
        from: { type: Object, default: function () { return {} } }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n === true) {
                this.from.bank = this.from.bank_name
                extend(this.frm, this.from)
            } else {
                this.$refs['form1212'].resetFields()
            }
        }
    },
    methods: {
        ok1 () {
            this.$refs['form1212'].validate(valid => {
                if (valid) {
                    this.$emit('on-submit', 1)
                }
            });
        },
        ok2 () {
            this.$refs['form1212'].validate(valid => {
                if (valid) {
                    this.$emit('on-submit', 1)
                }
            });
        },
        sendSms () {
            const x = {
                'tel': '13831111449', // this.tel
                'smstype': 2
            }
            this.$api.system.smsCode(x).then(res => {
                console.log('dsp', '修改账户', '验证码已发送!')
            })
        },
        cancel () {
            this.$emit('on-submit', 0)
        },
        flashccore () {
            this.ccore = ramdomString(4)
        }
    },
    mounted () {
        this.flashccore()
    }
}
</script>
