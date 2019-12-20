<template>
        <div class="tableLayout">
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <DatePicker style="width: 180px;margin-right: 10px" v-model="obj.dates" :editable="false" :clearable="false" format="yyyy-MM-dd" type="daterange" placement="bottom-start" placeholder="请选择日期" ></DatePicker>
            <Input style="width: 180px;margin-right: 10px" type="text" v-model="obj.keyword" placeholder="员工姓名、工号" @on-enter="handleSearch(1)"/>
            <treeDrop v-model="obj.deptId" placeholder="请选择部门" :name="department_name" :data="departData1" @nameSel="(val)=>{ department_name=val}"></treeDrop>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
        </div>
        <div style="height:20px;"></div>
        <Table border :loading="loading" :columns="columns1" :data='data1'>
        </Table>
        <Page class="fr" style="margin: 15px 0" ref="pager" :total="rowcount" :page-size="30" show-total show-elevator @on-change="handleSearch()"/>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
import moment from 'moment'
import {sevenRange} from '@/utils/date.js'
import tab from './attendance@tab.vue'
export default {
    components: {treeDrop, tab},
    data () {
        return {
            dates: [],
            obj: {
                dates: [],
                keyword: '',
                deptId: null
            },
            departData1: [],
            department_name: '',
            loading: false,
            pageIndex: 1,
            rowcount: 0,
            columns1: [
                { title: '申请人', render: (h, params) => { return <span>{ params.row.userName || '-' }</span> } },
                { title: '工号', render: (h, params) => { return <span>{ params.row.jobNum || '-' }</span> } },
                { title: '所属部门', render: (h, params) => { return <span>{ params.row.department || '-' }</span> } },
                { title: '外出时间', render: (h, params) => { return <span>{ params.row.outTimeStr || '-' }</span> } },
                { title: '是否返回', render: (h, params) => { return <span>{ params.row.back || '-' }</span> } },
                { title: '返回时间', render: (h, params) => { return <span>{ params.row.backTimeStr || '-' }</span> } },
                { title: '外出原因', render: (h, params) => { return <span>{ params.row.reason || '-' }</span> } },
                { title: '外出地点', render: (h, params) => { return <span>{ params.row.place || '-' }</span> } },
                { title: '提交时间', render: (h, params) => { return <span>{ params.row.createdTimeStr || '-' }</span> } }
            ],
            data1: []
        }
    },
    methods: {
        init () {
            this.dates = this.obj.dates = sevenRange()
            this.$get('api/hr/getdepartment').then(res => {
                this.departData1 = res.data.data.departments
            })
            this.getList()
        },
        getList () {
            this.loading = true
            let begin = null
            let end = null
            // 获取列表数据
            let getData = () => {
                begin = moment(this.obj.dates[0]).format('YYYY-MM-DD')
                end = moment(this.obj.dates[1]).format('YYYY-MM-DD')
                let para = {
                    'begin': begin,
                    'end': end,
                    'keyword': this.obj.keyword,
                    'deptId': this.obj.deptId,
                    'pageIndex': this.pageIndex,
                    'pageSize': 30
                }
                this.$get('api/hr/outwork_list', para).then(res => {
                    this.loading = false
                    this.data1 = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.pageIndex !== undefined) {
                this.obj.dates = [this.$route.query.begin, this.$route.query.end]
                this.obj.keyword = this.$route.query.keyword
                this.obj.deptId = this.$route.query.deptId
                this.department_name = this.$route.query.department_name
                this.$refs.pager.currentPage = this.pageIndex = this.$route.query.pageIndex * 1
                getData()
                return false
            }
            getData()
        },
        handleSearch (v) {
            let obj = {
                begin: moment(this.obj.dates[0]).format('YYYY-MM-DD'),
                end: moment(this.obj.dates[1]).format('YYYY-MM-DD'),
                keyword: this.obj.keyword,
                deptId: this.obj.deptId,
                department_name: this.department_name,
                pageIndex: this.pageIndex
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.pageIndex = 1
            } else {
                obj.pageIndex = this.$refs.pager.currentPage
            }
            this.$router.replace({name: 'outwork-list', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'outwork-list'})
            this.obj = {
                dates: this.dates,
                keyword: '',
                deptId: null
            }
            this.department_name = ''
            this.pageIndex = 1
            this.$refs.pager.currentPage = 1
            this.getList()
        }
    },
    mounted: function () {
        this.init()
    }
};
</script>
