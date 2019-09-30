<template>
    <div>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>发布工单</span></h2>
            <div>
                <FormItem label="标题" prop="workName">
                    <Input type="text" v-model="formItem.workName" placeholder="请输入标题" style="min-width:870px;width: 90%"/>
                </FormItem>
                <FormItem label="类型" prop="workType">
                    <Select v-model="formItem.workType" style="width: 250px">
                        <Option v-for="type in typeList" :value="type.value" :key="type.value">{{type.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="完成日期" prop="completeTime" v-if="formItem.taskPriority === 2">
                    <DatePicker type="date" v-model="formItem.completeTime" placeholder="选择日期" @on-change="formItem.completeTime=$event" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="内容" prop="workContent" :show-message="formItem.workContent === ''">
                    <vue-html5-editor  :content="formItem.workContent" class="task_content" @change="contentChange" :height="300" style="min-width:870px;width: 90%"></vue-html5-editor>
                </FormItem>
                <FormItem label="接收人" prop="rec" class="responseSelect">
                    <Select v-model="formItem.rec" multiple filterable placeholder="请搜索 / 选择接收人" style="max-width: 90%;min-width: 250px;">
                        <Option v-for="option in userList" :value="option.key" :key="option.key" :label="option.name"></Option>
                    </Select>
                </FormItem>
                <FormItem label="抄送人" prop="cor" class="responseSelect">
                    <Select v-model="formItem.cor" multiple filterable placeholder="请搜索 / 选择抄送人" style="max-width: 90%;min-width: 250px;">
                        <Option v-for="option in userList" :value="option.key" :key="option.key" :label="option.name"></Option>
                    </Select>
                </FormItem>
                <FormItem label="附件" prop="workEnclosure">
                    <Upload :max-size="51200" action="api/order/file_url" :default-file-list="fileList" :on-success="addFile" :on-remove="removeFile">
                        <Button type="primary">添加附件</Button>
                    </Upload>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="info" :loading="loading" style="margin-left: 15px" @click="handleSubmit(1)">保存草稿</Button>
                <Button type="primary" :loading="loading" style="margin-left: 15px" @click="handleSubmit(0)">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import '@/plugins/vueEditor'
export default {
    name: 'order-edit',
    data () {
        return {
            formItem: {
                id: 0,
                isBack: 0,
                workName: '',
                workType: 1,
                workContent: '',
                receiver: [],
                correlation: [],
                workEnclosure: [],
                rec: [],
                cor: []
            },
            typeList: [{name: '工作', value: 1}, {name: '日报周报', value: 2}, {name: '通知公告', value: 3}, {name: '温馨提示', value: 4}],
            fileList: [],
            userList: [],
            ruleValidate: {
                workName: [
                    { required: true, message: '标题不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                workType: [
                    { required: true, message: '请选择类型' }
                ],
                workContent: [
                    { required: true, message: '内容不能为空', trigger: 'change' }
                ],
                rec: [
                    { required: true, message: '请选择接收人' }
                ]
            },
            loading: false
        }
    },
    methods: {
        init () {
            this.$get('api/order/user_list', {
            }).then((res) => {
                this.userList = res.data.data.list.map(this.listId)
            })
            if (this.$route.query.id) {
                this.formItem.id = parseInt(this.$route.query.id)
                this.$get('api/order/info_edit', {
                    id: this.formItem.id
                }).then((res) => {
                    let info = res.data.data.info
                    this.formItem.workName = info.workName
                    this.formItem.workType = info.workType
                    this.formItem.workContent = info.workContent
                    this.fileList = info.workEnclosure.map(this.defaultFile)
                    if (this.$route.query.type) {
                        this.formItem.id = 0
                    } else {
                        this.defaultUser(info.receiver, info.correlation)
                    }
                })
            }
        },
        // 人员相关
        listId (user) {
            user.key = parseInt(user.id.toString() + user.type.toString())
            return user
        },
        getKey (user) {
            return parseInt(user.id.toString() + user.type.toString())
        },
        defaultUser (rec, cor) {
            this.formItem.rec = rec.map(this.getKey)
            this.formItem.cor = cor.map(this.getKey)
        },
        checkCor (user) {
            return this.formItem.cor.includes(user.key)
        },
        checkRec (user) {
            return this.formItem.rec.includes(user.key)
        },
        getUser () {
            this.formItem.correlation = this.userList.filter(this.checkCor)
            this.formItem.receiver = this.userList.filter(this.checkRec)
        },
        // 附件相关
        urlName (url) {
            let index = url.lastIndexOf('_')
            url = url.substring(index + 1, url.length)
            return url
        },
        defaultFile (name) {
            return {name: this.urlName(name), url: name}
        },
        addFile (response, file, fileList) {
            this.fileList = fileList
        },
        removeFile (file, fileList) {
            this.fileList = fileList
        },
        getUrl (file) {
            if (file.url) {
                return file.url
            } else {
                return file.response.data.fileurl
            }
        },
        getFile () {
            this.formItem.workEnclosure = this.fileList.map(this.getUrl)
        },
        // 提交表单
        postForm (n) {
            this.loading = true
            let self = this
            setTimeout(function () { self.loading = false; }, 2000)
            this.formItem.isBack = n
            this.getUser()
            this.getFile()
            this.$post('api/order/edit', this.formItem).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    if (n === 0) {
                        this.$router.replace({name: 'order-sendList'})
                    } else {
                        this.$router.replace({name: 'order-draftsList'})
                    }
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        handleSubmit (n) {
            this.$refs['formItem'].validate((valid) => {
                if (valid) {
                    this.postForm(n)
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    history.go(-1)
                },
                onCancel: () => {}
            })
        },
        contentChange (value) {
            this.formItem.workContent = value
        }
    },
    mounted () {
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
    .vue-html5-editor{
        color: #515a6e;
    }
</style>
