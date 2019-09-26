<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <!-- <div class="blogTitle">发布任务表单</div> -->
            <div class="blogContent" v-highlight>
                <div class="xian-title-tabs">
                    <h1>发布任务哈哈</h1>
                    <Tabs type="card" value="exp_002from" @on-click="handleMenuSelected">
                        <TabPane name="exp_002from" label="发布任务"> </TabPane>
                        <TabPane name="exp_003from" label="失败的任务"> </TabPane>
                    </Tabs>
                </div>
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
                    <FormItem label="附件" prop="taskEnclosure">
                        <Upload :before-upload="handleUpload" multiple action="">
                            <Button type="primary">添加附件</Button>
                        </Upload>
                        <div v-for="(file, index) in fileList" :key="index">
                            {{file.name}}&nbsp;&nbsp;&nbsp;<a @click="removeFile(index)">删除</a>
                        </div>
                    </FormItem>
                    <FormItem label="任务内容" prop="taskContent" :show-message="frm.taskContent == ''">
                        <vue-html5-editor :content="frm.taskContent" class="task_content" @change="contentChange" :height="140" style="width: 600px;"></vue-html5-editor>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('formItem')">发布</Button>
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
import '@/plugins/vueEditor'
import { success, error } from '@/tools'
export default {
    data () {
        return {
            frm: {
                id: '', // id
                taskName: '', // 任务名称
                taskPriority: 0, // 优先级
                completeTime: '', // 完成日期
                taskContent: '', // 任务内容
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
                taskContent: [
                    { required: true, message: '任务内容不能为空', trigger: 'change' }
                ],
                personLiable: [
                    { required: true, message: '请添加负责人' }
                ]
            },
            content: '',
            correlation: [],
            fileList: [],
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
        handleMenuSelected (name) {
            success('选中页面：' + name + '不跳转没写路由')
        },
        handleUpload (file) {
            if (file.size > 52420000) { return error('文件过大') }
            this.fileList.push(file);
            return false;
        },
        removeFile (index) {
            this.fileList.splice(index, 1);
        },
        postForm () {
            this.loading = true
            this.$api.task.found().then((res) => {
                this.$router.push({name: 'task_mine'});
            }, (res) => {
                this.loading = false
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.postForm();
                }
            });
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({name: 'task_mine'});
                },
                onCancel: () => {}
            });
        },
        contentChange (value) {
            this.formItem.taskContent = value;
        }
    },
    mounted () {
        window.addEventListener('setItem', () => {
            this.loading = sessionStorage.getItem('watchStorage');
        });
        this.init();
    }
}
</script>
