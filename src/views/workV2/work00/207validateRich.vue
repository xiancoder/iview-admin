<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">关于Vue中的富文本框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">富文本校验 必填</Divider>
                    <FormItem label="标题" prop="p02">
                        <vue-html5-editor @change="val=>frm.p02=val" :height="140" style="width: 600px;"
                            :content="frm.p02">
                        </vue-html5-editor>
                        <div class="ivu-form-item-notice-tip">富文本校验 必填 不完美</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p02}}</p>
                        <p v-html="frm.p02"></p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <vue-html5-editor @change="val=>frm.p02=val" :height="140" style="width: 600px;"
                                    :content="frm.p02">
                                </vue-html5-editor>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '富文本不能为空' }
                        </script>
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
import '@/plugins/vueEditor'

export default {
    data () {
        return {
            loading: false,
            frm: {
                p02: '<h2><font color="#ffcc00" face="Comic Sans MS">here comes a wei !!</font></h2><div><font face="Comic Sans MS" color="#ffcc00">in game LOL</font></div>' // 富文本测试
            },
            frmValidate: {
                p02: [
                    { required: true, message: '富文本不能为空' }
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
