<template>
    <div>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>发布任务</span></h2>
            <div>
                <FormItem label="任务名称" prop="taskName">
                    <Input type="text" v-model="formItem.taskName" placeholder="请输入任务名称" style="min-width:870px;width: 90%"/>
                </FormItem>
                <FormItem label="优先级" prop="taskPriority">
                    <Select v-model="formItem.taskPriority" style="width: 250px">
                        <Option :value=0>一般</Option>
                        <Option :value=1>重要</Option>
                        <Option :value=2>紧急</Option>
                    </Select>
                </FormItem>
                <FormItem label="完成日期" prop="completeTime" v-if="formItem.taskPriority === 2">
                    <DatePicker type="date" v-model="formItem.completeTime" placeholder="选择日期" @on-change="formItem.completeTime=$event" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="任务内容" prop="taskContent" :show-message="formItem.taskContent == ''">
                    <vue-html5-editor :content="formItem.taskContent" class="task_content" @change="contentChange" :height="300" style="min-width:870px;width: 90%"></vue-html5-editor>
                </FormItem>
                <FormItem label="负责人" prop="personLiable">
                    <Select v-model="formItem.personLiable" filterable placeholder="请搜索 / 选择负责人" style="width: 250px">
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
                <FormItem label="抄送人" prop="correlation" class="responseSelect">
                    <Select v-model="correlation" multiple filterable placeholder="请搜索 / 选择抄送人" style="max-width: 90%;min-width: 250px;">
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName" ></Option>
                    </Select>
                </FormItem>
                <FormItem label="附件" prop="taskEnclosure">
                    <Upload :before-upload="handleUpload" multiple action="">
                        <Button type="primary">添加附件</Button>
                    </Upload>
                    <div v-for="(file, index) in fileList" :key="index">{{file.name}}&nbsp;&nbsp;&nbsp;<a @click="removeFile(index)">删除</a></div>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading === '1'" style="margin: 0 15px" @click="handleSubmit('formItem')">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import axios from 'axios' // http请求库
import '@/plugins/vueEditor'
export default {
    name: 'task_release',
    data () {
        return {
            formItem: {
                id: '',
                taskName: '',
                taskPriority: 0,
                completeTime: '',
                taskContent: '',
                personLiable: ''
            },
            content: '',
            correlation: [],
            fileList: [],
            list: [],
            ruleValidate: {
                taskName: [
                    { required: true, message: '任务名称不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
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
            loading: ''
        }
    },
    methods: {
        init () {
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.list = res.data.data.list
            })
        },
        handleUpload (file) {
            if (file.size > 52420000) {
                this.$Message.info({
                    content: '文件过大'
                })
            } else {
                this.fileList.push(file)
            }
            return false
        },
        removeFile (index) {
            this.fileList.splice(index, 1)
        },
        postForm () {
            if (this.formItem.taskPriority !== 2) {
                this.formItem.completeTime = ''
            }
            let pa = new FormData()
            pa.append('id', this.formItem.id === '' ? null : this.formItem.id)
            pa.append('taskName', this.formItem.taskName)
            pa.append('taskPriority', this.formItem.taskPriority)
            pa.append('completeTime', this.formItem.completeTime === '' ? null : this.formItem.completeTime)
            pa.append('taskContent', this.formItem.taskContent)
            pa.append('personLiable', this.formItem.personLiable)
            pa.append('correlation', this.correlation.length === 0 ? null : this.correlation)
            for (let file in this.fileList) {
                pa.append('file', this.fileList[file])
            }
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                timeout: 300000
            }
            axios.post('api/task/found', pa, config
            ).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.push({name: 'task_mine'})
                } else {
                    this.$Message.info({
                        content: res.data.data || '操作失败'
                    })
                }
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.postForm()
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({name: 'task_mine'})
                },
                onCancel: () => {}
            })
        },
        contentChange (value) {
            this.formItem.taskContent = value
        }
    },
    mounted () {
        window.addEventListener('setItem', () => {
            this.loading = sessionStorage.getItem('watchStorage')
        })
        this.init()
    }
}
</script>
<style>
    .toolbar{
        z-index: 1!important;
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
