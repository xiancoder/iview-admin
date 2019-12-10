<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">表单传参形式列举</div>
            <div class="blogContent" v-highlight>
                <p>主要是为了测试一下历史记录标签控件</p>
                <Form ref="form5596" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="匹配整数，小数限2位" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input2">
                        <Input type="text" v-model="frm.input2" placeholder="匹配整数限6位，小数限2位（不含0）" style="width: 450px"/>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="handleCancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('form5596')">发布</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="test01">本页面跳转 push 携带参数 query.id=111</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="test02">本页面跳转 push 携带参数 params.id=222 (注意本功能不能reload汇报错)</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="test03">本页面跳转 replace 携带参数 query.id=333</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="test04">本页面跳转 replace 携带参数 params.id=444 (注意本功能不能reload汇报错)</Button>
                        <span>这4个玩意不能在同页面reload触发mounted</span>
                    </FormItem>
                </Form>
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
import regexp from '@/utils/regexp'
export default {
    data () {
        return {
            loading: false,
            frm: {
                input1: '',
                input2: ''
            },
            frmValidate: {
                input1: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: regexp.a01, message: '匹配整数，小数限2位' }
                ],
                input2: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 18, message: '最多输入9个字符' },
                    { pattern: regexp.a02, message: '匹配整数限6位，小数限2位（不含0）' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
        },
        handleCancel () {
        },
        test01 () {
            const id = 111
            this.$router.push({name: 'exp8_145fromparam', query: {id: id}})
        },
        test02 () {
            const id = 222
            this.$router.push({name: 'exp8_145fromparam', params: {id: id}}).then(() => {})
        },
        test03 () {
            const id = 333
            this.$router.replace({name: 'exp8_145fromparam', query: {id: id}})
        },
        test04 () {
            const id = 444
            this.$router.replace({name: 'exp8_145fromparam', params: {id: id}}).then(() => {})
        }
    },
    mounted () {
        console.log('updated', this.$route.query, this.$route.params)
        this.frm.input1 = this.$route.query.id || this.$route.params.id || '无id传参'
    }
}
</script>
