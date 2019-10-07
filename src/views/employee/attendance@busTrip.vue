<template>
    <div class="prodectCss">
        <tab></tab>
        <div class="margin-top-10">
            <DatePicker style="width: 180px" type="daterange" :clearable="false" :editable="false" :value="date" @on-change="dateGet" format="yyyy-MM-dd" class="margin-right-10"></DatePicker>
            <Input style="width: 180px" class="margin-right-10" type="text" placeholder="员工姓名、工号" v-model="keyword" @on-enter="handleSearch(1)"/>
            <tree-drop ref="depart" v-model="depart" placeholder="请选择部门" :name="departName" :data="departData" @nameSel="(val)=>{departName = val}"></tree-drop>
            <Button type="primary" class="margin-left-10 margin-right-10" @click="handleSearch(1)">搜索</Button>
            <Button type="default" class="margin-right-10" @click="resetSearch">重置</Button>
        </div>
        <Table :loading="loading" ref="selection" :columns="tableColumns" :data="currentTable" class="margin-top-20">
            <template slot-scope="{ row, index }" slot="jobNum">
                <span>{{row.jobNum || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="place">
                <span>{{row.addrArr.join('，')}}</span>
            </template>
        </Table>
        <Page ref="pager" :total=totalCount :page-size=pageSize show-total
            show-elevator style="margin: 15px 0;float: right;clear: both" @on-change="handleSearch"/>
    </div>
</template>
<script>
import TreeDrop from '@C/tree-drop'
import { sevenRange } from '@/utils/date'
import tab from './attendance@tab.vue'
export default {
    name: 'busTrip-list',
    components: {TreeDrop, tab},
    data () {
        return {
            date: [],
            begin: '',
            end: '',
            keyword: '',
            departData: [],
            depart: -1,
            departName: '',
            currentTable: [],
            totalCount: 0,
            currentPage: 1,
            pageSize: 30,
            loading: false,
            tableColumns: [
                {
                    title: '申请人',
                    key: 'userName'
                },
                {
                    title: '工号',
                    slot: 'jobNum'
                },
                {
                    title: '所属部门',
                    key: 'department'
                },
                {
                    title: '出差事由',
                    key: 'reason'
                },
                {
                    title: '出发时间',
                    key: 'outTimeStr'
                },
                {
                    title: '返回时间',
                    key: 'backTimeStr'
                },
                {
                    title: '出差天数',
                    key: 'days'
                },
                {
                    title: '目的地',
                    slot: 'place'
                },
                {
                    title: '出行方式',
                    key: 'tripType'
                },
                {
                    title: '提交时间',
                    key: 'createdTimeStr'
                }
            ]
        }
    },
    methods: {
        init () {
            this.loading = true
            this.initDate()
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData = res.data.data.departments
            })
            this.getList()
        },
        initDate () {
            this.date = sevenRange()
            this.begin = this.date[0]
            this.end = this.date[1]
        },
        dateGet (t) {
            this.begin = t[0]
            this.end = t[1]
        },
        getList () {
            this.$get('api/hr/bus_trip_list', {
                begin: this.begin,
                end: this.end,
                keyword: this.keyword,
                deptId: this.depart === -1 ? null : this.depart,
                pageIndex: this.currentPage,
                pageSize: this.pageSize
            }).then((res) => {
                this.currentTable = res.data.data.list
                this.totalCount = res.data.data.rowcount
                this.loading = false
            })
        },
        handleSearch (index) {
            this.$refs.pager.currentPage = index
            this.currentPage = index
            this.loading = true
            this.getList()
        },
        resetSearch () {
            this.$refs['depart'].clearStyle()
            this.departName = ''
            this.depart = -1
            this.keyword = ''
            this.$refs.pager.currentPage = 1
            this.currentPage = 1
            this.loading = true
            this.initDate()
            this.getList()
        }
    },
    mounted () {
        this.init()
    }
}
</script>
