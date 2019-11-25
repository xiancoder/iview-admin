<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">本次尝试旨在实验表单项校验是否可以影响到自定义组件</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 可以影响到自定义组件 校验行为是发生在Form控件内的 相当于watch行为</p>
                <p><Icon type="md-checkmark" style="color:green"/> 我采用frm.items来连结来父子组件 相当于一个缺失版的双向绑定</p>
                <p><Icon type="md-checkmark" style="color:red"/> 如果是一层结构则需要emit广播事件 待尝试</p>
                <div class="xian-title-tabs">
                    <h1>表单名称</h1>
                    <Divider/>
                </div>
                <Form ref="form5596" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="广义范围手机号" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="items">
                        <custom :items="frm.items"></custom>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="handleCancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('form5596')">发布</Button>
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
import custom from './148customFromItem'
export default {
    components: {
        custom
    },
    data () {
        return {
            loading: false,
            frm: {
                input1: '',
                items: []
            },
            frmValidate: {
                input1: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 11, message: '最多输入11个字符' },
                    { pattern: regexp.a05, message: '广义范围手机号' }
                ],
                items: [
                    {
                        validator: (rule, value, callback) => {
                            const dates = this.frm.items
                            if (!dates || dates.length < 3) { return callback(new Error('必须填三个!')) }
                            callback()
                        }
                    }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    alert('提交')
                }
            });
        },
        handleCancel () {
        }
    },
    mounted () {
    }
}
</script>
