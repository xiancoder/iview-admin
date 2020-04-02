<template>
    <div class="formLayout">
        <div class="formHeader">
            <h1>表单页-回跳信息保留</h1>
            <Divider/>
        </div>
        <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
            <FormItem label="正常文本" prop="text1">
                <p>{{ frm.text1 }}</p>
            </FormItem>
            <FormItem label="输入框" prop="input1">
                <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">【完美】</div>
            </FormItem>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading === '1'" style="margin: 0 15px" @click="handleSubmit()">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
// import { error } from '@/tools' // 自定义常用工具
import { goto } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            frm: {
                text1: '啦啦啦啦啦', // 正常文本
                input1: '' // 输入框测试
            },
            frmValidate: {
                input1: [
                    { required: true, message: '输入框不能为空' }
                ]
            },
            loading: ''
        }
    },
    methods: {
        postForm () {
            // this.$router.go(-1)
            goto('workV2_work07table_271tableV10@')
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.postForm()
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {},
                onCancel: () => {}
            })
        }
    },
    mounted () {
        console.log('id', this.$route.query)
    }
}
</script>
