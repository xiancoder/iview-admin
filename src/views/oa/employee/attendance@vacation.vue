<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <DatePicker style="width: 180px" type="daterange" :clearable="false" :editable="false" :value="date" @on-change="dateGet" format="yyyy-MM-dd" class="margin-right-10"></DatePicker>
            <Input style="width: 180px" class="margin-right-10" type="text" placeholder="员工姓名、工号" v-model="keyword" @on-enter="handleSearch(1)"/>
            <Select v-model="type" style="width: 180px" class="margin-right-10" placeholder="请选择请假类型">
                <Option v-for="tp in typeList" :value="tp.value" :key="tp.value">{{tp.name}}</Option>
            </Select>
            <tree-drop ref="depart" v-model="depart" placeholder="请选择部门" :name="departName" :data="departData" @nameSel="(val)=>{departName = val}"></tree-drop>
            <Button type="primary" class="margin-left-10 margin-right-10" @click="handleSearch(1)">搜索</Button>
            <Button type="default" class="margin-right-10" @click="resetSearch">重置</Button>
            <a class="out_port" :href="url" download="" target="_blank">批量导出</a>
        </div>
        <Table border :loading="loading" :columns="tableColumns" :data="currentTable" class="margin-top-20">
            <template slot-scope="{ row, index }" slot="jobNum">
                <span>{{row.jobNum || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="reason">
                <span>{{row.reason || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="time">
                <span v-show="row.day !== 0">{{row.day}}天</span><span v-show="row.hour !== 0">{{row.hour}}小时</span>
            </template>
            <template slot-scope="{ row, index }" slot="img">
                <a download="" :href="row.img" v-show="row.img">点击下载</a>
                <span v-show="!row.img">-</span>
            </template>
            <template slot-scope="{ row, index }" slot="check">
                <span v-show="row.isCheck === 1">是</span>
                <span v-show="row.isCheck === 0">否</span>
            </template>
        </Table>
        <Page ref="pager" :total=totalCount :page-size=pageSize show-total show-elevator style="margin: 15px 0;float: right;clear: both" @on-change="handleSearch"/>
    </div>
</template>
<script>
import TreeDrop from '@C/tree-drop'
import { sevenRange } from '@/utils/date'
import tab from './attendance@tab.vue'
export default {
    name: 'vacation-list',
    components: {TreeDrop, tab},
    data () {
        return {
            url: '',
            date: [],
            begin: '',
            end: '',
            keyword: '',
            typeList: [],
            type: -1,
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
                    title: '请假类型',
                    key: 'vacationType'
                },
                {
                    title: '开始时间',
                    key: 'begin'
                },
                {
                    title: '结束时间',
                    key: 'end'
                },
                {
                    title: '时长',
                    slot: 'time'
                },
                {
                    title: '请假事由',
                    slot: 'reason'
                },
                {
                    title: '图片证明',
                    slot: 'img'
                },
                {
                    title: '是否计入出勤',
                    slot: 'check'
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
            this.$get('api/hr/getLeavetype', {
            }).then(res => {
                this.typeList = res.data.data
                this.typeList.unshift({value: -1, name: '全部请假类型'})
            })
            this.getList()
        },
        initDate () {
            this.date = sevenRange(); // ["2019-04-26", "2019-05-23"]
            this.begin = this.date[0]
            this.end = this.date[1]
        },
        dateGet (t) {
            this.begin = t[0]
            this.end = t[1]
        },
        getList () {
            this.$get('api/hr/vacation_list', {
                begin: this.begin,
                end: this.end,
                keyword: this.keyword,
                type: this.type === -1 ? null : this.type,
                deptId: this.depart === -1 ? null : this.depart,
                pageIndex: this.currentPage,
                pageSize: this.pageSize
            }).then((res) => {
                this.currentTable = res.data.data.list
                this.totalCount = res.data.data.rowcount
                this.loading = false
                let type = this.type === -1 ? '' : this.type
                let depart = this.depart === -1 ? '' : this.depart
                this.url = 'api/hr/vacation_export?begin=' + this.begin + '&end=' + this.end +
                    '&keyword=' + this.keyword + '&type=' + type + '&deptId=' + depart
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
            this.type = -1
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
