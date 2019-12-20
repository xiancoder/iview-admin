<template>
    <div class="tableLayout">
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <DatePicker style="width: 180px;margin-right: 10px" v-model="request.dates" :editable="false" :clearable="false" format="yyyy-MM-dd" type="daterange" placement="bottom-start" placeholder="请选择日期" ></DatePicker>
            <Select style="width: 180px;margin-right: 10px" v-model="request.workType">
                <Option value="0">全部</Option>
                <Option value="1">工作</Option>
                <Option value="2">周报日报</Option>
                <Option value="3">通知公告</Option>
                <Option value="4">温馨提示</Option>
            </Select>
            <Select style="width: 180px;margin-right: 10px" v-model="request.workStatus">
                <Option value="-1">全部</Option>
                <Option value="0">未结工单</Option>
                <Option value="1">已结工单</Option>
            </Select>
            <Input style="width: 220px;margin-right: 10px" type="text" v-model="request.keyword" placeholder="标题、内容、姓名" @on-enter="handleSearch(1)"/>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
        </div>
        <div style="height:20px;"></div>
        <Table border class="order_table" :loading="loading" :columns="columns" :data='response' @on-row-click="toInfo">
            <template slot-scope="{row}" slot="workName">
                <div class="overHidden_order">{{row.workName}}：{{row.workContent}}</div>
            </template>
        </Table>
        <Page class="fr" style="margin: 15px 0" ref="pager" :total="rowcount" :page-size="30" show-total show-elevator @on-change="handleSearch()"/>
    </div>
</template>
<script>
import { dateFormat, sevenRange } from '@/utils/date'
export default {
    data () {
        return {
            dates: [],
            request: { dates: [], workType: '0', keyword: '', workStatus: '0', pageIndex: 1 },
            loading: false,
            rowcount: 0,
            columns: [
                { title: '发送人', key: 'sendName', width: 90 },
                { title: '接收人', key: 'listName', maxWidth: 200 },
                { title: '类型', key: 'workType', width: 90,
                    render: (h, params) => {
                        return h('span', this.workTypeName(params.row.workType))
                    }
                },
                { title: '标题、内容', slot: 'workName' },
                { title: '发布时间', key: 'createdTimeStr', width: 140,
                    render: (h, params) => {
                        return h('span', params.row.createdTimeStr || '-')
                    }
                },
                { title: '更新时间', key: 'updatedTimeStr', width: 140,
                    render: (h, params) => {
                        return h('span', params.row.updatedTimeStr || '-')
                    }
                },
                { title: '最新回复人', key: 'repleName', width: 100,
                    render: (h, params) => {
                        return h('span', params.row.repleName || '-')
                    }
                },
                { title: '状态', width: 90, key: 'workStatus',
                    render: (h, params) => {
                        return h('span', params.row.workStatus === '0' ? '未结' : '已结')
                    }
                }
            ],
            response: []
        }
    },
    methods: {
        init () {
            this.dates = this.request.dates = sevenRange()
            this.getList()
        },
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
                    begin: this.request.dates[0],
                    end: this.request.dates[1],
                    orderType: this.request.workType,
                    keyword: this.request.keyword,
                    workStatus: this.request.workStatus,
                    pageIndex: this.request.pageIndex,
                    pageSize: 30
                }
                this.$get('api/order/order_sub_list', para).then(res => {
                    this.loading = false
                    this.response = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.pageIndex !== undefined) {
                this.request.dates = [this.$route.query.begin, this.$route.query.end]
                this.request.keyword = this.$route.query.keyword
                this.request.workStatus = this.$route.query.workStatus
                this.request.workType = this.$route.query.workType
                this.$refs.pager.currentPage = this.request.pageIndex = this.$route.query.pageIndex * 1
                this.$nextTick(() => {
                    this.request.workStatus = this.$route.query.workStatus
                    this.request.workType = this.$route.query.workType
                })
                getData()
                return false
            }
            getData()
        },
        handleSearch (v) {
            let obj = {
                begin: dateFormat(this.request.dates[0]),
                end: dateFormat(this.request.dates[1]),
                workType: this.request.workType,
                keyword: this.request.keyword,
                workStatus: this.request.workStatus,
                pageIndex: null
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.pageIndex = 1
            } else {
                obj.pageIndex = this.$refs.pager.currentPage
            }
            this.$router.replace({name: 'order-subList', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'order-subList'})
            this.request = {
                dates: this.dates,
                workType: '0',
                keyword: '',
                workStatus: '0',
                pageIndex: 1
            }
            this.$refs.pager.currentPage = 1
            this.getList()
        },
        toInfo (row) {
            this.$router.push({name: 'order-subInfo', query: {id: row.id}})
        }
    },
    mounted: function () {
        this.init()
    }
}
</script>
<style scoped lang="less">
    .order_table{
        cursor:pointer;
    }
</style>
