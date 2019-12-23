<template>
    <div class="xianFrom">
        <Form ref="form1212" :model="frm" :rules="frmRule"
            :label-width="150" style="width: 90%;margin: 0 auto;padding: 0;">
            <FormItem label="">
                <h3>修改{{['','企业','个人'][frm.towho]}}收款账户</h3>
            </FormItem>
            <FormItem :label="['','公司名称','姓名'][frm.towho]" prop="name">
                <Input type="text" v-model="frm.name" placeholder="名称" style="width: 300px" :disabled="step==2 || frm.towho==1"/>
            </FormItem>
            <FormItem label="银行账号" prop="account">
                <Input type="text" v-model="frm.account" placeholder="请输入银行账号" style="width: 300px" :disabled="step==2"/>
            </FormItem>
            <FormItem label="开户行" prop="bank">
                <Input type="text" v-model="frm.bank" placeholder="请输入开户行" style="width: 300px" :disabled="step==2"/>
            </FormItem>
            <FormItem>
                <p>系统将向公司手机号：{{ frm.tel }} 发送短信验证码</p>
            </FormItem>
            <FormItem label="短信验证码" prop="smscode" v-if="step==2">
                <Input type="text" v-model="frm.smscode" placeholder="请输入短信验证码" style="width: 190px"/>
                <sms-btn :isDisabled="false" @on-send="sendSms()"></sms-btn>
                <div class="ivu-form-item-notice-tip text-danger">{{serverError}}</div>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="default" @click="cancel">取消</Button>
                <Divider type="vertical" />
                <Button type="primary" @click="ok1" :loading="loading1" v-if="step==1">下一步</Button>
                <Button type="primary" @click="ok2" :loading="loading2" v-if="step==2">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { extend } from '@/utils/object'
import SmsBtn from '@C/sms-btn'
export default {
    components: {
        SmsBtn
    },
    data () {
        return {
            loading1: false,
            loading2: false,
            step: 1, // 提交步骤
            serverError: '', // 错误信息
            frm: {
                towho: 1, // 对公对私 1对公2对私
                name: '', // 名字
                account: '', // 账号
                bank: '', // 银行名称
                'platform_id': '', // 平台id
                smscode: '', // 短信验证码
                tel: ''
            },
            frmRule: {
                name: [
                    { required: true, message: '不能为空' },
                    { type: 'string', max: 20, message: '至多20位' }
                ],
                account: [
                    { required: true, message: '不能为空' },
                    { type: 'string', max: 6, message: '银行账号至少6位' },
                    { type: 'string', max: 30, message: '银行账号至多30位' }
                ],
                bank: [
                    { required: true, message: '不能为空' },
                    { type: 'string', max: 2, message: '开户行至少2位' },
                    { type: 'string', max: 50, message: '开户行至多50位' }
                ],
                smscode: [
                    { required: true, message: '不能为空' },
                    { type: 'string', min: 6, max: 6, message: '输入6位有效验证码' }
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
                this.from.towho = this.from.to_who
                extend(this.frm, this.from)
            } else {
                this.$refs['form1212'].resetFields()
                this.step = 1
                this.loading2 = false
            }
        }
    },
    methods: {
        ok1 () {
            this.$refs['form1212'].validate(valid => {
                if (valid) {
                    this.step = 2
                }
            });
        },
        ok2 () {
            this.$refs['form1212'].validate(valid => {
                if (valid) {
                    this.loading2 = true
                    this.frm.platformId = this.frm.platform_id
                    this.$api.charge.modifyInfo(this.frm).then((res) => {
                        this.$emit('on-submit', 1)
                    }).catch((msg) => {
                        this.serverError = msg
                    }).finally(() => {
                        this.loading2 = false
                    })
                }
            });
        },
        sendSms () {
            const x = {
                'tel': this.tel,
                'smstype': 2
            }
            this.$api.system.smsCode(x).then(res => {
                console.log('dsp', '修改账户', '验证码已发送!')
            })
        },
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
    }
}
</script>
