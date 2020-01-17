<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的提交逻辑</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <FormItem label="标题" prop="p01">
                        <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="标题" prop="p02">
                        <Input type="text" v-model="frm.p02" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>

                    <FormItem>
                        <div class="ivu-form-item-notice-tip text-danger">可以用来显示错误的位置 : {{serverError}}</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem>
                                <div class="ivu-form-item-notice-tip text-danger">可以用来显示错误的位置 : {{serverError}}</div>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">局部校验</Divider>
                    <FormItem>
                        <Button type="primary" :loading="loading" @click="jubujiaoyan()">局部校验</Button>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem>
                                <Button type="primary" :loading="loading" @click="jubujiaoyan()">局部校验</Button>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            jubujiaoyan () {
                                // https://www.iviewui.com/components/form
                                // 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
                                this.$refs['from0982'].validateField('input3', errorMsg => {
                                    if (errorMsg) { return false }
                                    this.$refs['from0982'].validateField('input4', errorMsg => {
                                        if (errorMsg) { return false }
                                        alert('局部提交ajax')
                                    })
                                })
                            },
                        </script>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem style="margin-top: 50px">
                                <Button type="default" @click="cancel">返回</Button>
                                <Divider type="vertical" />
                                <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            handleSubmit () {
                                this.$refs['from0982'].validate((valid) => {
                                    if (!valid) {return false}
                                    this.$api.stands.edit(this.frm).then((res) => { // ajax
                                        alert('完成逻辑')
                                    }).catch((msg) => {
                                        this.serverError = msg
                                    }).finally(() => {
                                        this.loading = false
                                    })
                                });
                            },
                        </script>
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
            serverError: '', // 服务器返回的错误
            frm: {
                p01: '', // 输入框测试
                p02: '' // 输入框测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '输入框不能为空' }
                ],
                p02: [
                    { required: true, message: '输入框不能为空' }
                ]
            }
        }
    },
    methods: {
        jubujiaoyan () {
            // https://www.iviewui.com/components/form
            // 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
            this.$refs['from0982'].validateField('p01', errorMsg => {
                if (errorMsg) { return false }
                this.$refs['from0982'].validateField('p02', errorMsg => {
                    if (errorMsg) { return false }
                    alert('局部提交ajax')
                })
            })
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (!valid) {return false}
                this.serverError = ''
                this.loading = true
                setTimeout(() => {
                    this.$api.stands.edit(this.frm).then((res) => { // ajax
                        alert('提交ajax')
                    }).catch((msg) => {
                        this.serverError = msg
                    }).finally(() => {
                        this.loading = false
                    })
                }, 2e3)
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
