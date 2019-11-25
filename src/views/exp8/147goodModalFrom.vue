<template>
    <div>
        <Form ref="formItem" :model="frm" :rules="frmRule"
            :label-width="80" style="width: 70%;margin: 0 auto">
            <FormItem label="">
                <h1>修改密码 ~ ~</h1>
            </FormItem>
            <FormItem label="原密码" prop="input1">
                <Input type="password" v-model="frm.input1" placeholder="请输入原密码" style="width: 250px"/>
            </FormItem>
            <FormItem label="密码" prop="pwd1">
                <Input type="password" v-model="frm.pwd1" placeholder="请输入密码" style="width: 250px"/>
            </FormItem>
            <FormItem label="重复密码" prop="pwd2">
                <Input type="password" v-model="frm.pwd2" placeholder="请输入密码" style="width: 250px"/>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="ok" :loading="loading">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data () {
        const validatePw1 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请输入密码')) }
            if (this.frm.pwd1 !== '') { this.$refs.formValidateId.validateField('pwd2') }
            callback();
        }
        const validatePw2 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请再次输入密码')) }
            if (value !== this.frm.pwd1) { return callback(new Error('两次输入不一致!')) }
            callback()
        }
        return {
            loading: false,
            dataSet: {
                userData: []
            },
            frm: {
                pwd1: '',
                pwd2: '',
                pwd3: ''
            },
            frmRule: {
                input1: [
                    { required: true, message: '不能为空' }
                ],
                pwd1: [
                    { validator: validatePw1 }
                ],
                pwd2: [
                    { validator: validatePw2 }
                ]
            }
        }
    },
    props: {
    },
    methods: {
        ok () {
            this.$refs.formItem.validate(valid => {
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
