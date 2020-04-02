<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">关于Vue中的密码框的的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">密码 必填 怎样不允许浏览器捣乱</Divider>
                    <FormItem label="标题" prop="p01">
                        <input type="text" no-style="width: 0px; height: 0px; position: absolute; 不行"/>
                        <br />
                        <Input type="password" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">密码 必填 怎样不允许浏览器捣乱</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <Input type="password" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { validator: (rule, value, callback) => {
                                if (value === '') { return callback(new Error('请输入密码')) }
                                if (this.frm.p01 !== '') { this.$refs['from0982'].validateField('p02') }
                                callback();
                            } }
                        </script>
                    </FormItem>

                    <Divider orientation="left">密码 必填 必填+与前面的相同</Divider>
                    <FormItem label="标题" prop="p02">
                        <Input type="password" v-model="frm.p02" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填+与前面的相同</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <Input type="password" v-model="frm.p02" placeholder="请输入XXXX" style="width: 450px"/>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { validator: (rule, value, callback) => {
                                if (value === '') { return callback(new Error('请再次输入密码')) }
                                if (value !== this.frm.p01) { return callback(new Error('两次输入不一致!')) }
                                callback()
                            } }
                        </script>
                    </FormItem>

                    <Divider orientation="left">密码 浏览器自动填充 尝试</Divider>
                    <FormItem label="标题">
                        <Input type="password" placeholder="请输入XXXX" style="width: 450px" autocomplete="new-password"/>
                    </FormItem>
                    <FormItem label="标题">
                        <input style="display:none">
                        <Input type="password" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <p class="text-danger">我想屏蔽掉浏览器的默认填写密码功能</p>
                <p class="text-danger">失败了 写个空输入框也不行....@.@</p>
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
            frm: {
                p01: '', // 密码测试
                p02: '' // 密码测试
            },
            frmValidate: {
                p01: [
                    { validator: (rule, value, callback) => {
                        if (value === '') { return callback(new Error('请输入密码')) }
                        if (this.frm.p01 !== '') { this.$refs['from0982'].validateField('p02') }
                        callback();
                    } }
                ],
                p02: [
                    { validator: (rule, value, callback) => {
                        if (value === '') { return callback(new Error('请再次输入密码')) }
                        if (value !== this.frm.p01) { return callback(new Error('两次输入不一致!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
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
