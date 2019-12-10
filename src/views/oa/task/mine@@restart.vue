<template>
    <div>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>重启任务</span></h2>
            <div class="info_area">
                <FormItem label="任务名称" prop="taskName">
                    <Input type="text" disabled v-model="formItem.taskName" placeholder="请输入任务名称"/>
                </FormItem>
                <FormItem label="优先级" prop="taskPriority">
                    <Select v-model="formItem.taskPriority">
                        <Option :value=0>一般</Option>
                        <Option :value=1>重要</Option>
                        <Option :value=2>紧急</Option>
                    </Select>
                </FormItem>
                <FormItem label="完成日期" prop="completeTime" v-if="formItem.taskPriority === 2">
                    <DatePicker type="date" v-model="formItem.completeTime" placeholder="选择日期" :clearable="false" @on-change="formItem.completeTime=$event" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="负责人" prop="personLiable">
                    <Select v-model="formItem.personLiable" filterable>
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
                <FormItem label="抄送人" prop="correlation">
                    <Select v-model="formItem.correlation" multiple filterable>
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('formItem')">重启</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { dateFormat } from '@/utils/date'
export default {
    name: 'task_restart',
    data () {
        return {
            editorOption: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
                        [{ 'header': 1 }, { 'header': 2 }], // 标题，键值对的形式；1、2表示字体大小
                        [{'list': 'ordered'}, {'list': 'bullet'}], // 列表
                        [{'script': 'sub'}, {'script': 'super'}], // 上下标
                        [{'indent': '-1'}, {'indent': '+1'}], // 缩进
                        ['image']// 上传图片、上传视频
                    ]
                },
                placeholder: ''
            },
            formItem: {},
            list: [],
            ruleValidate: {
                taskName: [
                    { required: true, message: '任务名称不能为空' },
                    { type: 'string', max: 20, message: '最多输入20个字符' }
                ],
                taskPriority: [
                    { required: true, type: 'number', message: '请选择优先级' }
                ],
                completeTime: [
                    { required: true, message: '请选择完成日期' }
                ],
                taskContent: [
                    { required: true, message: '任务内容不能为空', trigger: 'change' }
                ],
                personLiable: [
                    { required: true, message: '请添加负责人' }
                ]
            },
            loading: false
        }
    },
    methods: {
        init () {
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.list = res.data.data.list
            })
            this.$get('api/task/restartdetail', {
                taskId: this.$route.query.taskId
            }).then((res) => {
                this.formItem = res.data.data.res
            })
        },
        postForm () {
            this.formItem.completeTime = dateFormat(this.formItem.completeTime)
            this.formItem.id = parseInt(this.$route.query.taskId)
            this.$post('api/task/restartSpecial', this.formItem).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.push({name: 'task_info', query: {taskId: this.$route.query.taskId, role: 1}})
                } else if (res.data.data.res === -1) {
                    this.$Message.info({
                        content: '没有操作权限'
                    })
                } else {
                    this.$Message.info({
                        content: res.data.data || '操作失败'
                    })
                }
            })
        },
        handleSubmit (name) {
            this.postForm()
            this.loading = true
            let self = this
            setTimeout(function () { self.loading = false }, 2000)
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({name: 'task_info', query: {taskId: this.$route.query.taskId, role: 1}})
                },
                onCancel: () => {}
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>
<style>
    .quill-editor {
        width: 700px;
    }
    .ql-container{
        min-height: 150px;
    }
</style>
<style scoped>
    h2{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
        margin-bottom: 30px;
    }
    h2 span{
        display: inline-block;
        padding: 0 32px;
        border-radius: 4px;
        font-weight:lighter;
        background-color: #495060;
        color: #ffffff;
        font-size: 14px;
        height: 31px;
        line-height: 31px;
    }
    .info_area{
        width: 400px;
        font-size: 14px;
    }
</style>
