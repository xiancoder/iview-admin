<template>
    <Button class="telcode" type="primary" :disabled="isDisabled||isSented" @click="GetCode">
        {{telCodeMsg}}
    </Button>
</template>
<script>
import { debounce } from '@/utils'
export default {
    name: 'SmsBtn',
    props: {
        isDisabled: { type: Boolean, default: false }
    },
    data () {
        return {
        }
    },
    computed: { // 计算属性
        telCodeMsg () { // 发送短信倒计时
            const smsCode = this.$store.state.sms.smsCode
            if (!smsCode) {
                return '获取验证码'
            } else {
                return smsCode + '秒'
            }
        },
        isSented () { // 发送中禁用
            return !!this.$store.state.sms.smsCode
        }
    },
    methods: {
        GetCode: debounce(function () {
            this.$store.dispatch('sms/smsCode') // 开启倒计时
            this.$emit('on-send')
        })
    },
    mounted () {

    }
}
</script>
<style scoped>
    .telcode{ margin-left:10px; }
</style>
