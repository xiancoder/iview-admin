<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">表单一变化就立马保存 节流提交</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 监听表单对象frm </p>
                <p><Icon type="md-checkmark" style="color:green"/> 自动提交使用节流方式 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 提交前判断是否最新结果已经被提交 </p>
                <Form ref="form6671" :model="frm" :rules="frmValidate" :label-width="150">
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
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import regexp from '@/utils/regexp'
import { throttle } from '@/utils/function'

export default {
    data () {
        return {
            loading: false,
            frm: {
                input1: '',
                input2: ''
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
            },
            autoVersion: 1,
            currentVersion: 1
        }
    },
    watch: {
        frm: {
            // 注意：当观察的数据为对象或数组时，curVal和oldVal是相等的
            // 因为这两个形参指向的是同一个数据对象
            handler (curVal, oldVal) {
                this.currentVersion++
                this.autoSave() // 自动保存方法
            },
            deep: true
        }
    },
    methods: {
        autoSave: throttle(function () {
            // 节流 提交 自动保存方法
            console.log('自动提交', this.frm)
            this.autoVersion = this.currentVersion
            this.save()
        }, 2e3),
        handleSubmit () {
            if (this.autoVersion === this.currentVersion) {
                console.log('已经保存了')
                return false
            }
            this.save()
        },
        save () {
            // 提交 提交方法
            this.$refs['form6671'].validate((valid) => {
                if (!valid) {
                    return false
                }
                console.log('提交', this.frm)
                this.loading = true
                setTimeout(() => { this.loading = false }, 2e3)
            })
        },
        handleCancel () {
        }
    },
    mounted () {
    }
}
</script>
