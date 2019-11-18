<template>
    <div class="tableLayout">
        <Tabs value="cc" style="margin-top: 20px" @on-click="changeTab">
            <TabPane label="审批人配置" name="approval"></TabPane>
            <TabPane label="抄送人配置" name="cc">
                <div style="height: 30px"><Button type="primary" @click="ccAdd" class="fr margin-right-10">添加抄送人设置</Button></div>
                <Table border :loading="loading" ref="selection" :columns="tableColumns" :data="currentTable" style="margin-top: 20px">
                    <template slot-scope="{ row, index }" slot="userName">
                        {{row.userName.join(',')}}
                    </template>
                    <template slot-scope="{ row, index }" slot="action">
                        <a @click="ccEdit(row.id)" style="margin-right: 20px">编辑</a>&nbsp;
                        <a @click="ccDelete(row.id)">删除</a>
                    </template>
                </Table>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
export default {
    name: 'cc-list',
    data () {
        return {
            currentTable: [],
            totalCount: 0,
            loading: false,
            tableColumns: [
                {
                    title: '抄送人配置名称',
                    key: 'name'
                },
                {
                    title: '抄送人',
                    slot: 'userName'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ]
        }
    },
    methods: {
        init () {
            this.getList()
        },
        getList () {
            this.$get('api/hr/cc_setting_list', {
            }).then((res) => {
                this.currentTable = res.data.data.list
                this.loading = false
            })
        },
        changeTab (name) {
            this.$router.push({
                path: name
            })
        },
        ccAdd () {
            this.$router.push({name: 'cc-edit'})
        },
        ccEdit (id) {
            this.$router.push({name: 'cc-edit', query: {id: id}})
        },
        ccDelete (id) {
            this.$Modal.confirm({
                title: '提示',
                content: '该操作无法恢复，确认要删除吗？',
                onOk: () => {
                    this.$post('api/hr/cc_setting_delete', {
                        id: id
                    }).then((res) => {
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                            this.getList()
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
                    })
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
<style scoped>
</style>
