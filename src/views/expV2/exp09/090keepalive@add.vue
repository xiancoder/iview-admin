<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue keep-alive 编辑项 </div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>keep-alive是Vue.js的一个内置组件。</p>
                <Form ref="formItem" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="任务名称" prop="taskName">
                        <Input type="text" v-model="frm.taskName" placeholder="请输入任务名称" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">任务名称不能为空, 最多50字符</div>
                    </FormItem>
                    <FormItem label="优先级" prop="taskPriority">
                        <Select v-model="frm.taskPriority" style="width: 300px">
                            <Option :value="0">一般</Option>
                            <Option :value="1">重要</Option>
                            <Option :value="2">紧急</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="完成日期" prop="completeTime" v-if="frm.taskPriority === 2">
                        <DatePicker type="date" v-model="frm.completeTime" placeholder="选择日期"
                            @on-change="frm.completeTime=$event" style="width: 300px">
                        </DatePicker>
                    </FormItem>
                    <FormItem label="负责人" prop="personLiable">
                        <Select v-model="frm.personLiable" filterable placeholder="请搜索 / 选择负责人" style="width: 300px">
                            <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="抄送人" prop="correlation" class="responseSelect">
                        <Select v-model="correlation" multiple filterable placeholder="请搜索 / 选择抄送人" style="width: 300px">
                            <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName" >
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('formItem')">发布</Button>
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
import { success, error } from '@/tools' // 自定义常用工具
export default {
    name: 'expV2_exp09_090keepalive_add',
    data () {
        return {
            frm: {
                id: '', // id
                taskName: '', // 任务名称
                taskPriority: 0, // 优先级
                completeTime: '', // 完成日期
                personLiable: '' // 负责人
            },
            frmValidate: {
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
                personLiable: [
                    { required: true, message: '请添加负责人' }
                ]
            },
            content: '',
            correlation: [],
            list: [],
            loading: false
        };
    },
    methods: {
        init () {
            this.$api.user.pullUserList().then(list => {
                this.list = list
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.$api.task.found({
                        id: '1',
                        taskName: '1',
                        taskPriority: '1',
                        completeTime: '1',
                        taskContent: '1',
                        personLiable: undefined,
                        fileList: '1',
                        correlation: '1'
                    }).then((res) => {
                        success('操作成功后返回')
                        this.$router.push({name: 'expV2_exp09_090keepalive'})
                    }, (res) => {
                        this.loading = false
                    })
                }
            });
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    error('操作放弃后返回')
                    this.$router.push({name: 'expV2_exp09_090keepalive'})
                },
                onCancel: () => {}
            });
        },
        contentChange (value) {
            this.frm.taskContent = value
        }
    },
    mounted () {
        this.init()
    }
}
</script>
