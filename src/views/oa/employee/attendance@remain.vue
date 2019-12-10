<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool">
            <DatePicker v-model="obj.month" :options="option.month" type="month"
                placeholder="请选择月份" style="width: 180px;margin-right: 10px;">
            </DatePicker>
            <!-- <Select style="width:180px;margin-right: 10px;" v-model="obj.month"  placeholder="请选择月份">
                <Option v-for="row in months" :key="row.id" :value="row.id">{{row.name}}</Option>
            </Select> -->
            <Input style="width: 180px;margin-right: 10px;" type="text" v-model="obj.keyword"
                placeholder="员工姓名、工号" @on-enter="handleSearch(1)"
            />
            <treeDrop v-model="obj.deptId" placeholder="请选择部门" :name="department_name"
                :data="option.deptId" @nameSel="(val)=>{ department_name=val}">
            </treeDrop>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch()">重置</Button>
            <Button type="default" class="fr" @click="download()">下载</Button>
        </div>
        <Table border :loading="loading" :columns="columns1" :data='option.data1'>
        </Table>
        <Page class="fr" style="margin: 15px 0" ref="pager" :current="page.index" :page-size="page.size"
            :total="page.rowCount" show-total show-elevator @on-change="handleSearch()"
        />
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
import tab from './attendance@tab.vue'
import {h} from '@/tools' // 自定义常用工具
import moment from 'moment'
export default {
    components: {treeDrop, tab},
    data () {
        const begin = moment().subtract(1, 'months').millisecond()
        return {
            loading: false,
            obj: {
                month: '', // 月份
                keyword: '', // 员工姓名
                deptId: null // 部门
            },
            page: {
                index: 1,
                rowcount: 0,
                size: 30
            },
            option: {
                month: {
                    disabledDate: (date) => {
                        return date.valueOf() < begin
                    }
                },
                deptId: [],
                data1: []
            },
            department_name: '', // 选中的部门
            columns1: [
                { title: '姓名', key: 'userName', render: h.defaultH('userName') },
                { title: '工号', key: 'workNum', render: h.defaultH('workNum') },
                { title: '可用调休时长（小时）', key: 'dayoff', render: h.defaultH('dayoff') },
                { title: '即将转换的调休时长（小时）', key: 'willTurn', render: h.defaultH('willTurn') },
                { title: '可用转换年假时长（小时）', key: 'remainTurn', render: h.defaultH('remainTurn') },
                { title: '可用年假时长（小时）', key: 'remainAnnual', render: h.defaultH('remainAnnual') }
            ]
        }
    },
    methods: {
        init () {
            /*
                const date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let today = date.getDate()
                month = today > 25 ? month + 1 : month
                if (month === 13) { month = 1; year++; }
                month = month > 10 ? month : '0' + month
                today = today > 10 ? today : '0' + today
                this.resetMonth = this.obj.month = year + '-' + month
            */
            // ajax
            this.$get('api/hr/getdepartment').then(res => {
                this.departData1 = res.data.data.departments
            })
            // 当前计薪周期
            let date = moment()
            if (date.date() >= 26) date.add(1, 'months')
            this.resetMonth = this.obj.month = moment(date).format('YYYY-MM')
            this.getList()
        },
        download () {
            window.location.href = 'api/hr/remain_export?' +
            'month=' + this.obj.month +
            '&dept=' + this.obj.deptId +
            '&keyword=' + this.obj.keyword
        },
        getList () {
            this.loading = true
            // 获取列表数据
            let getData = () => {
                let para = {
                    'month': this.obj.month,
                    'keyword': this.obj.keyword,
                    'deptId': this.obj.deptId,
                    'pageIndex': this.pageIndex,
                    'pageSize': 30
                }
                this.$get('api/hr/remain_list', para).then(res => {
                    this.loading = false
                    this.data1 = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.pageIndex !== undefined) {
                this.obj.month = this.$route.query.month
                this.obj.keyword = this.$route.query.keyword
                this.obj.deptId = this.$route.query.deptId * 1
                this.department_name = this.$route.query.department_name
                this.$refs.pager.currentPage = this.pageIndex = this.$route.query.pageIndex * 1
                getData()
                return false
            }
            getData()
        },
        handleSearch (v) {
            let obj = {
                month: moment(this.obj.month).format('YYYY-MM'),
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
            this.$router.replace({name: 'remain-list', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'remain-list'})
            this.obj = {
                month: this.resetMonth,
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
