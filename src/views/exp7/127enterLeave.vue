<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">路由进入询问恢复数据 / 路由退出询问是否保存</div>
            <div class="blogContent" v-highlight>
                <Form ref="form5596" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="匹配整数，小数限2位" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input2">
                        <Input type="text" v-model="frm.input2" placeholder="匹配整数限6位，小数限2位（不含0）" style="width: 450px"/>
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
import pageLoadNoSave from '@/router/pageLoadNoSave'
import pageConfirmToGo from '@/router/pageConfirmToGo'
import regexp from '@/utils/regexp'
export default {
    mixins: [pageLoadNoSave, pageConfirmToGo],
    data () {
        return {
            loading: false,
            frm: {
                input1: '',
                input2: '',
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
                ]
            }
        }
    },
    methods: {
        beforeNoSaveNotice () {
            console.log('beforeNoSaveNotice')
        },
        beforeCloseConfirm () {
            console.log('beforeCloseConfirm')
        },
        handleSubmit (name) {
        },
        handleCancel () {
        }
    },
    mounted () {
    }
}
</script>
