<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">表单项之间的一荣俱荣</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/html" v-pre>
                    <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150" :key="'from'+key">
                    </Form>
                    以上方法不大好
                    <FormItem label="标题" prop="p01" :key="'fromp01'+key">
                        <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    以上方法比较好
                </script>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <FormItem label="标题" prop="p00">
                        <Input type="text" v-model="frm.p00" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>

                    <Divider orientation="left">输入框 一荣俱荣 要么都不必填 只要有一个就都必填</Divider>
                    <FormItem label="标题" prop="p01" :key="'fromp01'+key">
                        <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem label="标题" prop="p02" :key="'fromp02'+key">
                        <Input type="text" v-model="frm.p02" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem label="标题" prop="p03" :key="'fromp03'+key">
                        <Input type="text" v-model="frm.p03" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>

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
export default {
    data () {
        return {
            loading: false,
            ccore: '0000',
            frm: {
                p00: '', // 输入框测试
                p01: '', // 输入框测试
                p02: '', // 输入框测试
                p03: '' // 输入框测试
            },
            frmValidate: {
                p00: [{ required: true, message: '输入框不能为空' }],
                p01: [],
                p02: [],
                p03: []
            },
            key: false // 三个变量的必填选项
        }
    },
    watch: { // 监听
        'frm.p01' (val) { this.setThreeRequired() },
        'frm.p02' (val) { this.setThreeRequired() },
        'frm.p03' (val) { this.setThreeRequired() }
    },
    methods: {
        setThreeRequired () {
            let x = !!(this.frm.p01 || this.frm.p02 || this.frm.p03)
            if (this.key === x) return false
            if (x) {
                this.frmValidate.p01 = [{ required: true, message: '输入框不能为空' }]
                this.frmValidate.p02 = [{ required: true, message: '输入框不能为空' }]
                this.frmValidate.p03 = [{ required: true, message: '输入框不能为空' }]
            } else {
                this.frmValidate.p01 = []
                this.frmValidate.p02 = []
                this.frmValidate.p03 = []
            }
            this.key = x
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
