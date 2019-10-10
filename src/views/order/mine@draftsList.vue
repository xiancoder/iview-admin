<style scoped lang="less">
    .order_table{
        cursor:pointer;
    }
</style>
<template>
    <div>
        <tab-my :select="3"></tab-my>
        <div style="margin-top: 10px">
            <Select style="width: 180px;margin-right: 10px" v-model="request.workType">
                <Option value="0">全部</Option>
                <Option value="1">工作</Option>
                <Option value="2">周报日报</Option>
                <Option value="3">通知公告</Option>
                <Option value="4">温馨提示</Option>
            </Select>
            <Input style="width: 220px;margin-right: 10px" type="text" v-model="request.keyword" placeholder="标题、内容、接收人、组" @on-enter="handleSearch(1)"/>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
        </div>
        <div style="height:20px;"></div>
        <Table border class="" :loading="loading" :columns="columns" :data='response'>
            <template slot-scope="{row}" slot="workName">
                <div class="overHidden_order">{{row.workName}}：{{row.workContent || '-'}}</div>
            </template>
            <template slot-scope="{row,index}" slot="operate">
                <a style="margin-right: 25px;" @click="toEdit(row.id)">编辑</a>
                <a @click.stop="del(row.id,index)">删除</a>
            </template>
        </Table>
        <Page class="fr" style="margin: 15px 0" ref="pager" :total="rowcount" :page-size="30" show-total show-elevator @on-change="handleSearch()"/>
    </div>
</template>
<script>
import tabMy from './mine.vue'
export default {
    components: { tabMy },
    data () {
        return {
            request: { workType: '0', keyword: '', pageIndex: 1 },
            loading: false,
            rowcount: 0,
            columns: [
                { title: '接收人', key: 'listName', width: 200 },
                { title: '类型', key: 'workType', width: 150,
                    render: (h, params) => {
                        return h('span', this.workTypeName(params.row.workType))
                    }
                },
                { title: '标题、内容', slot: 'workName' },
                { title: '操作', slot: 'operate', width: 200 }
            ],
            response: []
        }
    },
    methods: {
        workTypeName (val) {
            let typeName = null
            switch (val) {
                case 1:
                    typeName = '工作'
                    break
                case 2:
                    typeName = '周报日报'
                    break
                case 3:
                    typeName = '通知公告'
                    break
                case 4:
                    typeName = '温馨提示'
                    break
            }
            return typeName
        },
        getList () {
            this.loading = true
            // 获取列表数据
            let getData = () => {
                let para = {
                    type: 3,
                    begin: '',
                    end: '',
                    orderType: this.request.workType,
                    keyword: this.request.keyword,
                    pageIndex: this.request.pageIndex,
                    pageSize: 30
                }
                this.$get('api/order/order_list', para).then(res => {
                    this.loading = false
                    this.response = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.pageIndex !== undefined) {
                this.request.workType = this.$route.query.workType
                this.$nextTick(() => {
                    this.request.workType = this.$route.query.workType
                })
                this.request.keyword = this.$route.query.keyword
                this.$refs.pager.currentPage = this.request.pageIndex = this.$route.query.pageIndex * 1
                getData()
                return false
            }
            getData()
        },
        handleSearch (v) {
            let obj = {
                workType: this.request.workType,
                keyword: this.request.keyword,
                pageIndex: null
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.pageIndex = 1
            } else {
                obj.pageIndex = this.$refs.pager.currentPage
            }
            this.$router.replace({name: 'order-draftsList', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'order-draftsList'})
            this.request = {
                workType: '0',
                keyword: '',
                pageIndex: 1
            }
            this.$refs.pager.currentPage = 1
            this.getList()
        },
        toEdit (id) {
            this.$router.push({name: 'order-edit', query: {id: id}})
        },
        del (id, index) {
            this.$get('api/order/order_delete', {id: id}).then(res => {
                if (res.data.data.res === 1) {
                    this.response.splice(index, 1)
                    this.$Message.info({
                        content: '操作成功'
                    })
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        }
    },
    mounted: function () {
        this.getList()
    }
}
</script>
