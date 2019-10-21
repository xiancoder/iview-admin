<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的校验</div>
            <div class="blogContent" v-highlight>
                <div class="xian-title-tabs">
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
                        <Input type="text" v-model="frm.input3" placeholder="匹配整数限6位，小数限2位（包含0）" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input4">
                        <Input type="text" v-model="frm.input4" placeholder="15或18位 身份证号" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input5">
                        <Input type="text" v-model="frm.input5" placeholder="广义范围手机号" style="width: 450px"/>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="handleCancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('form5596')">发布</Button>
                    </FormItem>
                </Form>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
                input5: ''
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
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 18, message: '最多输入18个字符' },
                    { pattern: regexp.a04, message: '15或18位 身份证号' }
                ],
                input5: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 11, message: '最多输入11个字符' },
                    { pattern: regexp.a05, message: '广义范围手机号' }
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
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    alert('离开')
                },
                onCancel: () => {}
            });
        }
    },
    mounted () {
    }
}
</script>
