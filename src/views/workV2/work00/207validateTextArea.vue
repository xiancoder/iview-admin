<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的文本域的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">文本域 必填 自动加高3-5</Divider>
                    <FormItem label="标题" prop="p01">
                        <Input v-model="frm.p01" type="textarea" :autosize="{minRows: 3,maxRows: 5}"
                            placeholder="请输入XXXX" />
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <pre v-html="frm.p01"></pre>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <Input v-model="frm.p01" type="textarea" :autosize="{minRows: 3,maxRows: 5}"
                                    placeholder="请输入XXXX" />
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '文本域不能为空' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">文本域 必填 重复行判断 作用场景 需要批量输入一系列内容而换行分隔</Divider>
                    <Divider orientation="left">- - 点击提交 自动检查文本域内容是否有重复项</Divider>
                    <Divider orientation="left">- - 如果没有 万事大吉</Divider>
                    <Divider orientation="left">- - 如果有 弹框提示 有重复项 我要动手改变你的值了</Divider>
                    <FormItem label="标题" prop="p02">
                        <Input v-model="frm.p02" type="textarea" :autosize="{minRows: 3,maxRows: 5}"
                            placeholder="请输入XX，支持输入多个XX，换行分隔" />
                    </FormItem>
                    <FormItem>
                        <pre v-html="frm.p02"></pre>
                        <script type="text/html" v-pre>
                        </script>
                        <script type="text/js">
                            { required: true, message: '文本域不能为空' }
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
import { uniqueObj } from '@/utils/array'

export default {
    data () {
        return {
            loading: false,
            frm: {
                p01: 'here comes a wei !!\nin game LOL', // 文本域测试
                p02: 'here comes a wei !!\nin game LOL\nin game LOL\nin game LOL\nin game LOL' // 文本域测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '文本域不能为空' }
                ],
                p02: [
                    { required: true, message: '文本域不能为空' }
                ]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    const arr1 = this.frm.p02.split(/\r|\n|\r\n/)
                    const arr2 = uniqueObj(arr1)
                    if (arr1.length !== arr2.length) {
                        this.$tool.alertMsg('输入的XX列表有重复数据 即将进行去重处理', 0, () => {
                            this.frm.p02 = arr2.join('\n')
                            this.submitAjax()
                        })
                    } else {
                        this.submitAjax()
                    }
                }
            });
        },
        submitAjax () {
            this.loading = true
            setTimeout(() => {
                alert('校验通过')
                this.loading = false
            }, 2e3)
        },

        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
