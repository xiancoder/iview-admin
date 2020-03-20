<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">表单项 可增删小表格</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/html" v-pre>
                </script>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <FormItem label="标题" prop="p01">
                        <Input type="text" v-model="frm2.p01" placeholder="请输入XXXX" style="width: 150px;margin-right:10px;"/>
                        <Input type="text" v-model="frm2.p02" placeholder="请输入XXXX" style="width: 150px;margin-right:10px;"/>
                        <Input type="text" v-model="frm2.p03" placeholder="请输入XXXX" style="width: 150px;margin-right:10px;"/>
                        <Button type="default" @click="addSmallTable">ADD</Button>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem>
                        <Table border :columns="columns" :data="frm.p01" max-height="auto">
                        </Table>
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
                p01: [] // 输入框测试
            },
            frm2: {
                p01: '', // 输入框测试
                p02: '', // 输入框测试
                p03: '' // 输入框测试
            },
            columns: [
                {title: 'p01', key: 'p01', align: 'center'},
                {title: 'p02', key: 'p02', align: 'center'},
                {title: 'p03', key: 'p03', align: 'center'}
            ],
            frmValidate: {
                p01: [
                    /* { validator: (rule, value, callback) => {
                        if (value === '') { return callback(new Error('请输入密码')) }
                        if (this.frm.pwd1 !== '') { this.$refs['from0982'].validateField('pwd2') }
                        callback();
                    } } */
                    { required: true, message: '至少输入一项' },
                    { type: 'array', max: 3, message: '至多输入三项' }
                ]
            },
            key: false // 三个变量的必填选项
        }
    },
    methods: {
        addSmallTable () {
            this.frm.p01.push({
                p01: this.frm2.p01,
                p02: this.frm2.p02,
                p03: this.frm2.p03
            })
            this.frm2.p01 = ''
            this.frm2.p02 = ''
            this.frm2.p03 = ''
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
