<template>
    <div class="xianFrom">
        <Form ref="form2235" :model="frm" :rules="frmRule"
            :label-width="150" style="width: 90%;margin: 0 auto;padding: 0;">
            <FormItem label="">
                <h3>修改密码</h3>
            </FormItem>
            <FormItem label="原密码" prop="input1">
                <Input type="password" v-model="frm.input1" placeholder="请输入原密码" style="width: 350px"/>
            </FormItem>
            <FormItem label="密码" prop="pwd1">
                <Input type="password" v-model="frm.pwd1" placeholder="请输入密码" style="width: 350px"/>
            </FormItem>
            <FormItem label="重复密码" prop="pwd2">
                <Input type="password" v-model="frm.pwd2" placeholder="请输入密码" style="width: 350px"/>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="default" @click="cancel">取消</Button>
                <Divider type="vertical" />
                <Button type="primary" @click="ok" :loading="loading">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { extend } from '@/utils/object'

export default {
    data () {
        const validatePw1 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请输入密码')) }
            if (this.frm.pwd1 !== '') { this.$refs['form2235'].validateField('pwd2') }
            callback();
        }
        const validatePw2 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请再次输入密码')) }
            if (value !== this.frm.pwd1) { return callback(new Error('两次输入不一致!')) }
            callback()
        }
        return {
            loading: false,
            frm: {
                input1: '',
                pwd1: '',
                pwd2: ''
            },
            frmRule: {
                input1: [
                    { required: true, message: '不能为空' }
                ],
                pwd1: [
                    { required: true, message: '不能为空' },
                    { validator: validatePw1 }
                ],
                pwd2: [
                    { required: true, message: '不能为空' },
                    { validator: validatePw2 }
                ]
            }
        }
    },
    props: {
        flag: { type: Boolean, default: false },
        from: { type: Object, default: function () { return {} } }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n === true) {
                extend(this.frm, this.from)
            } else {
                this.$refs['form2235'].resetFields()
            }
        }
    },
    methods: {
        ok () {
            this.$refs['form2235'].validate(valid => {
                if (valid) {
                    this.$emit('on-submit', 1)
                }
            });
        },
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
    }
}
</script>
