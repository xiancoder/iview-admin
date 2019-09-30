<template>
    <div>
        <div>
            <Input style="width: 180px" class="margin-right-10" type="text" placeholder="组名称、组成员搜索" v-model="keyword" @on-enter="getList()"/>
            <Button type="primary" class="margin-right-10" @click="getList()">搜索</Button>
            <Button type="default" @click="getList(0)">重置</Button>
            <Button type="primary" class="fr" @click="toAdd">新建组</Button>
        </div>
        <Table :loading="loading" :columns="tableColumns" :data='currentTable' class="margin-top-20">
            <template slot-scope="{ row, index }" slot="userName">
                <span class="notwrap_2">{{row.userName}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="isPublic">
                <span>{{row.isPublic === 1 ? '公共组' : '私有组'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <span v-if="row.isPublic === 0 || isPersonnel">
                    <a @click="toEdit(row.id)">编辑</a>
                    <a @click="groupDelete(row)" class="margin-left-10">删除</a>
                </span>
                <span style="color: #2d8cf0;cursor: pointer" v-else @click="showNames(row)">查看</span>
            </template>
        </Table>
    </div>
</template>

<script>
export default {
    name: 'group-list',
    data () {
        return {
            keyword: '', // 加载中文字控制
            loading: false,
            isPersonnel: false,
            currentTable: [],
            tableColumns: [
                { title: '组名称', key: 'groupName' },
                { title: '组成员', slot: 'userName' },
                { title: '组类别', slot: 'isPublic' },
                { title: '创建日期', key: 'createdTime' },
                { title: '操作', slot: 'action' }
            ] // 列表项
        }
    },
    methods: {
        init () {
            this.$get('api/order/role', {
            }).then((res) => {
                this.isPersonnel = res.data.data
            })
            this.getList()
        },
        getList (n) {
            if (n === 0) {
                this.keyword = ''
            }
            this.$get('api/order/group_list', {
                keyword: this.keyword
            }).then((res) => {
                this.currentTable = res.data.data.list
            })
        },
        showNames (row) {
            this.$Modal.info({
                title: '组成员',
                content: row.userName
            })
        },
        toAdd () {
            this.$router.push({name: 'group-edit'})
        },
        toEdit (id) {
            this.$router.push({name: 'group-edit', query: {id: id}})
        },
        groupDelete (row) {
            this.$post('api/order/group_delete', {
                id: row.id,
                isPublic: row.isPublic
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
        }
    },
    mounted () {
        this.init()
    }
}
</script>
