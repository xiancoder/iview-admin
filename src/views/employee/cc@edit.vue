<template>
    <div class="prodectCss">
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>{{action}}抄送人配置</span></h2>
            <div>
                <FormItem label="抄送人配置名称" prop="name">
                    <Input type="text" v-model="formItem.name" placeholder="请输入抄送人配置名称" style="width: 250px"/>
                </FormItem>
                <FormItem label="抄送人" prop="userId" class="responseSelect">
                    <Select v-model="formItem.userId" multiple filterable placeholder="请搜索并选择抄送人" style="max-width: 90%;min-width: 250px;">
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName" ></Option>
                    </Select>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading" style="margin: 0 15px" @click="handleSubmit('formItem')">确认</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    name: 'cc-edit',
    data () {
        return {
            formItem: {
                id: 0,
                name: '',
                userId: []
            },
            list: [],
            ruleValidate: {
                name: [
                    { required: true, message: '抄送人配置名称不能为空' },
                    { type: 'string', max: 20, message: '最多输入20个字符' }
                ],
                userId: [
                    { required: true, message: '请添加抄送人' }
                ]
            },
            loading: false
        }
    },
    computed: {
        action () {
            if (this.$route.query.id) {
                return '编辑'
            } else {
                return '添加'
            }
        }
    },
    methods: {
        init () {
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.list = res.data.data.list
            })
            if (this.$route.query.id) {
                this.$get('api/hr/cc_setting_info', {
                    id: this.$route.query.id
                }).then((res) => {
                    this.formItem = res.data.data.list
                })
            }
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.replace({path: 'employee/cc'})
                },
                onCancel: () => {}
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.postForm()
                }
            })
        },
        postForm () {
            this.loading = true
            let self = this
            setTimeout(function () { self.loading = false; }, 2000)
            this.$post('api/hr/cc_setting_edit', this.formItem).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.replace({path: 'employee/cc'})
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>
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
</style>
