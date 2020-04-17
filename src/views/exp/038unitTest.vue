<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">表单的单元测试 (mock赋值 - 模拟操作 - mock提交 - 校验)</div>
            <div class="blogContent">
                <div class="formHeader">
                    <h1>表单名称</h1>
                    <Divider/>
                </div>
                <Form ref="formValidateId" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="正常文本" prop="text1">
                        <p>{{ frm.text1 }}</p>
                    </FormItem>
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" class="flag" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input2">
                        <Input type="text" class="flag" v-model="frm.input2" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="测试">
                        <Button type="primary" class="flagBtn" @click="handleSubmit('formValidateId')">测试</Button>
                    </FormItem>
                </Form>
                <p>曾经单元测试走到这里 this.$refs[name].validate 总是报错是空</p>
                <p>原因 单元测试中 mount()会渲染所有组件 而 shallowMount()只搞一层</p>
                <p>参考 <a href="https://blog.csdn.net/duola8789/article/details/80434962">Jest结合Vue-test-utils使用的初步实践</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import { extend } from '@/utils'
import { jumpto } from '@/tools'

export default {
    data () {
        return {
            frm: {
                input1: '', // 输入框测试
                input2: '' // 输入框测试
            },
            frmValidate: {
                input1: [
                    { required: true, message: '输入框不能为空' }
                ],
                input2: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ]
            },
            testResult: [],
            testResult2: []
        }
    },
    methods: {
        goto (name, query) { // 跳转目录
            if (name === 'table') { jumpto('exp2_037unitTest') }
        },
        init () {
            const id = 234
            return this.$api.unit.getDetail({id}).then(info => { // ajax
                extend(this.frm, info)
            })
        },
        handleSubmit (name) {
            this.testResult.push(1)
            // console.log('为什么单元测试走到这里是空', this.$refs[name].validate)
            // 原因mount()会渲染所有组件 而shallowMount()只搞一层
            this.$refs[name].validate(valid => {
                this.testResult.push(2)
                if (!valid) { return false }
                this.testResult.push(3)
                this.submit()
            })
        },
        submit (name) {
            this.$api.unit.submit(this.frm).then(info => { // ajax
                this.testResult2.push(4)
                this.goto('table')
                console.log('提交成功了')
            }, () => {
                console.error('提交失败了')
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>
