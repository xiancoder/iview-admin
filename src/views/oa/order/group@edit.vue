<template>
    <div>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>{{title}}</span></h2>
            <div class="info_area">
                <FormItem label="组名称" prop="groupName">
                    <Input type="text" v-model="formItem.groupName" placeholder="请输入组名称"/>
                </FormItem>
                <FormItem label="组成员" prop="userIds">
                    <Select v-model="formItem.userIds" multiple filterable placeholder="请搜索 / 选择组成员">
                        <Option v-for="option in userList" :value="option.userId" :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
                <FormItem label="" prop="isPublic" v-if="isPersonnel">
                    <Checkbox v-model="formItem.isPublic">设置为公共组</Checkbox>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">取消</Button>
                <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('formItem')">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    name: 'group-edit',
    data () {
        return {
            title: '新建组',
            isPersonnel: false,
            formItem: {
                id: 0,
                groupName: '',
                userIds: [],
                isPublic: false
            },
            ruleValidate: {
                groupName: [
                    { required: true, message: '组名称不能为空' },
                    { type: 'string', max: 20, message: '最多输入20个字符' }
                ],
                userIds: [
                    { required: true, message: '请选择组成员' }
                ]
            },
            userList: [],
            isPublic: false,
            loading: false
        }
    },
    methods: {
        init () {
            this.$get('api/order/role', {
            }).then((res) => {
                this.isPersonnel = res.data.data
            })
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.userList = res.data.data.list
            })
            if (this.$route.query.id) {
                this.formItem.id = parseInt(this.$route.query.id)
                this.title = '编辑组'
                this.$get('api/order/group_info', {
                    id: this.formItem.id
                }).then((res) => {
                    let info = res.data.data.info
                    this.formItem.groupName = info.groupName
                    this.formItem.userIds = info.userId
                    this.formItem.isPublic = info.isPublic === 1
                })
            }
        },
        postForm () {
            this.$post('api/order/group_edit', {
                id: this.formItem.id,
                groupName: this.formItem.groupName,
                userIds: this.formItem.userIds,
                isPublic: this.formItem.isPublic === true ? 1 : 0
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.replace({name: 'group-list'})
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.postForm()
                    let self = this
                    setTimeout(function () { self.loading = false; }, 2000)
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.replace({name: 'group-list'})
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
    .textArea>textarea{
        font-size: 12px;
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
