<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">关于Vue中的校验</div>
            <div class="blogContent" v-highlight>
                <div class="formHeader">
                    <h1>表单名称</h1>
                    <Divider/>
                </div>
                <Form ref="form5596" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="匹配整数，小数限2位" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input2">
                        <Input type="text" v-model="frm.input2" placeholder="匹配整数限6位，小数限2位（不含0）" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input3">
                        <Input type="text" v-model="frm.input3" placeholder="匹配整数限6位，小数限2位（包含0）" style="width: 286px"/>
                        <Button type="default" @click="lishijiaoyan" style="margin-left:20px">局部两控件的校验</Button>
                    </FormItem>
                    <FormItem label="短信验证码">
                        <Input type="text" v-model="frm.input3" placeholder="短信验证码" style="width: 310px"/>
                        <Button type="default" style="margin-left:20px;width:120px;">发送短信</Button>
                    </FormItem>
                    <FormItem label="短信验证码">
                        <Input type="text" v-model="frm.input3" placeholder="短信验证码" style="width: 310px"/>
                        <Button type="default" style="margin-left:20px;width:120px;" disabled>10秒后重试</Button>
                    </FormItem>
                    <FormItem label="输入框" prop="input4">
                        <Input type="text" v-model="frm.input4" placeholder="15或18位 身份证号" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input5">
                        <Input type="text" v-model="frm.input5" placeholder="广义范围手机号" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="密码" prop="pwd1">
                        <Input type="password" v-model="frm.pwd1" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="重复密码" prop="pwd2">
                        <Input type="password" v-model="frm.pwd2" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="handleCancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('form5596')">发布</Button>
                    </FormItem>
                </Form>
                <script type="text/js">
                    lishijiaoyan () {
                        // https://www.iviewui.com/components/form
                        // 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
                        this.$refs['form5596'].validateField('input3', errorMsg => {
                            if (errorMsg) {
                                return false
                            }
                            this.$refs['form5596'].validateField('input4', errorMsg => {
                                if (errorMsg) {
                                    return false
                                }
                                console.log('提交ajax')
                            })
                        })
                    },
                    handleSubmit () {
                        this.$refs['form5596'].validate((valid) => {
                            if (!valid) {
                                return false
                            }
                            console.log('提交ajax')
                            this.loading = true
                            setTimeout(() => { this.loading = false },2e3)
                        })
                    },
                </script>
                <p class="text-danger">this.$refs['瞎写'].validateField('pwd2') 注意 如果refs的id写错了 他不会报错 会不限期卡住无法提交 (等校验结果)</p>
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
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                pwd1: '', // 密码测试
                pwd2: '' // 密码测试
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
                ],
                input3: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 18, message: '最多输入9个字符' },
                    { pattern: regexp.a03, message: '匹配整数限6位，小数限2位（包含0）' }
                ],
                input4: [
                    // { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 18, message: '最多输入18个字符' },
                    { pattern: regexp.a04, message: '15或18位 身份证号' }
                ],
                input5: [
                    // { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 11, message: '最多输入11个字符' },
                    { pattern: regexp.a05, message: '广义范围手机号' }
                ],
                pwd1: [
                    { required: true, message: '密码不能为空' },
                    { type: 'string', min: 6, message: '密码最少6位' },
                    { type: 'string', max: 20, message: '密码至多20位' },
                    { validator: (rule, value, callback) => {
                        let v1 = 0
                        if (regexp.b01.test(value)) v1++
                        if (regexp.b02.test(value)) v1++
                        if (regexp.b03.test(value)) v1++
                        if (v1 < 2) {return callback(new Error('密码需同时包含数字、字母、标点符号其中两种!'))}
                        if (!regexp.b04.test(value)) {return callback(new Error('只能包含数字、字母、标点符号!'))}
                        this.$refs['form3333'].validateField('newPwd2')
                        callback();
                    } }
                ],
                pwd2: [
                    { required: true, message: '密码不能为空' },
                    { type: 'string', min: 6, message: '密码最少6位' },
                    { type: 'string', max: 20, message: '密码至多20位' },
                    { validator: (rule, value, callback) => {
                        this.$refs['form5596'].validateField('pwd1')
                        if (value !== this.frm.pwd1) { return callback(new Error('两次输入不一致!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
        lishijiaoyan () {
            // https://www.iviewui.com/components/form
            // 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
            this.$refs['form5596'].validateField('input3', errorMsg => {
                if (errorMsg) {
                    console.log(errorMsg)
                    return false
                }
                console.log('提交ajax')
            })
        },
        handleSubmit () {
            this.$refs['form5596'].validate((valid) => {
                if (!valid) {
                    console.log('不合法')
                    return false
                }
                console.log('提交ajax')
                this.loading = true
                setTimeout(() => { this.loading = false }, 2e3)
            })
        },
        handleCancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => { alert('离开') },
                onCancel: () => {}
            })
        }
    },
    computed: {
    }
}
</script>
