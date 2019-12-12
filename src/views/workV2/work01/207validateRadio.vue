<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的单选复选的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">单复选校验</Divider>
                    <FormItem label="单选框" prop="radio1">
                        <RadioGroup v-model="frm.radio1">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                        <div class="ivu-form-item-notice-tip">【完美】【数据源统一放置】</div>
                    </FormItem>
                    <FormItem label="复选框" prop="checkbox1">
                        <CheckboxGroup v-model="frm.checkbox1">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                        <div class="ivu-form-item-notice-tip">【完美】【数据源统一放置】</div>
                    </FormItem>
                    <FormItem label="复选框" prop="checkbox12">
                        <CheckboxGroup v-model="frm.checkbox12">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                        <div class="ivu-form-item-notice-tip">必填+最多两个 【完美】</div>
                    </FormItem>
                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <script type="text/html">
                </script>
                <p></p>
                <script type="text/js">
                </script>
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
                radio1: '', // 单选测试
                checkbox1: [], // 复选测试
                checkbox12: [] // 复选测试
            },
            frmValidate: {
                radio1: [
                    { required: true, message: '单选框必选其一' }
                ],
                checkbox1: [
                    { required: true, message: '复选框必选其一' }
                ],
                checkbox12: [
                    { required: true, message: '复选框必选其一' },
                    { type: 'array', max: 2, message: '复选框选择最多两项', trigger: 'change' }
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
