<style>
   .searchBox .ivu-select{
       width:150px;
   }
</style>
<template>
    <div>
        <div class="searchBox">
            <Select v-model="obj.taskPriority">
                <Option :value=-1>全部级别</Option>
                <Option :value=2>紧急</Option>
                <Option :value=1>重要</Option>
                <Option :value=0>一般</Option>
            </Select>
            <Select v-model="obj.taskStatus">
                <Option :value=-1>全部状态</Option>
                <Option :value=0>待接受</Option>
                <Option :value=1>执行中</Option>
                <Option :value=2>待验收</Option>
                <Option :value=3>已通过</Option>
                <Option :value=4>已废弃</Option>
            </Select>
            <Select v-model="obj.restart">
                <Option :value=-1>全部任务类型</Option>
                <Option :value=0>普通</Option>
                <Option :value=1>重启</Option>
            </Select>
            <Select v-model="obj.overdue">
                <Option :value=-1>全部逾期情况</Option>
                <Option :value=0>未逾期</Option>
                <Option :value=1>已逾期</Option>
            </Select>
            <Select v-model="obj.pause">
                <Option :value=-1>是否暂停</Option>
                <Option :value=0>未暂停</Option>
                <Option :value=1>已暂停</Option>
            </Select>
            <Select v-model="obj.founder" filterable placeholder='请搜索 / 选择发布人'>
                <Option :value=-1>全部发布人</Option>
                <Option v-for='i in userData' :key=i.userId :value=i.userId>{{i.userName}}</Option>
            </Select>
            <div style="margin-top: 10px">
                <Select v-model="obj.personLiable" filterable placeholder='请搜索 / 选择负责人'>
                    <Option :value=-1>全部负责人</Option>
                    <Option v-for='i in userData' :key=i.userId :value=i.userId>{{i.userName}}</Option>
                </Select>
                <Select v-model="obj.implement" filterable placeholder='请搜索 / 选择执行人'>
                    <Option :value=-1>全部执行人</Option>
                    <Option v-for='i in userData' :key=i.userId :value=i.userId>{{i.userName}}</Option>
                </Select>
                <DatePicker v-model="value2" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px" @on-change="value2=$event"></DatePicker>
                <Input type="text" v-model="obj.taskName" placeholder="任务名称、任务编号" @on-enter="handleSearch(1)" style="width: 200px"/>
                <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
                <Button type="default" @click="resetSearch">重置</Button>
            </div>
        </div>
        <div style="height:20px;"></div>
        <Table border :loading="loading" :columns="columns1" :data='data1' ></Table>
        <Page ref="pager" :total=rowcount :page-size=obj.page_size show-total show-elevator style="margin: 15px 0;float: right;clear: both" @on-change="handleSearch()"/>
    </div>
</template>
<script>
import { dateFormat } from '@/utils/date'
export default {
    data () {
        return {
            loading: false,
            rowcount: 0,
            userData: [],
            value2: [],
            obj: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '', // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                'restart': '', // 任务类型0普通 1返工
                'overdue': '', // 逾期情况 1逾期 0未逾期
                'founder': '', // 发布人
                'personLiable': '', // 负责人
                'implement': '', // 执行人
                'taskName': '', // 任务名称
                'pause': '', // 是否暂停
                'page_index': 1,
                'page_size': 30
            },
            columns1: [
                {
                    title: '任务编号',
                    key: 'taskNumber'
                },
                {
                    title: '任务名称',
                    key: 'taskName',
                    render: (h, params) => {
                        let self = this
                        return h('div', [
                            h('icon', {
                                props: {
                                    type: 'ios-alert'
                                },
                                style: {
                                    'color': '#ed4014',
                                    'font-size': '24px',
                                    'display': params.row.overdue > 0 ? 'inline-block' : 'none'
                                }
                            }),
                            h('icon', {
                                props: {
                                    type: 'md-arrow-dropright-circle'
                                },
                                style: {
                                    'color': '#f90',
                                    'font-size': '24px',
                                    'display': params.row.pause ? 'inline-block' : 'none'
                                }
                            }),
                            h('div', {
                                style: {
                                    'color': 'white',
                                    'font-size': '14px',
                                    'width': '20px',
                                    'height': '20px',
                                    'border-radius': '10px',
                                    'background-color': '#2d8cf0',
                                    'text-align': 'center',
                                    'float': 'left',
                                    'margin-top': '2px',
                                    'display': params.row.restart > 0 ? 'inline-block' : 'none'
                                }
                            }, params.row.restart),
                            h('a', {
                                on: {
                                    click: function () {
                                        self.$router.push({path: 'info', query: {taskId: params.row.id, role: 0}})
                                    }
                                }
                            }, params.row.taskName)
                        ])
                    }
                },
                {
                    title: '发布人',
                    key: 'founder'
                },
                {
                    title: '发布日期',
                    key: 'foundTime',
                    width: 140
                },
                {
                    title: '负责人',
                    key: 'personLiable'
                },
                {
                    title: '计划完成日期',
                    key: 'completeTime',
                    render: (h, params) => {
                        return h('span', params.row.completeTime || '-')
                    }
                },
                {
                    title: '优先级',
                    key: 'taskPriority'
                },
                {
                    title: '状态',
                    key: 'taskStatus'
                }
            ],
            data1: [{
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            }]
        }
    },
    methods: {
        getList: function () {
            this.loading = true
            // 保存搜索条件
            this.obj.taskPriority = -1
            this.obj.taskStatus = -1
            this.obj.restart = -1
            this.obj.overdue = -1
            this.obj.founder = -1
            this.obj.personLiable = -1
            this.obj.implement = -1
            this.obj.taskName = ''
            this.obj.pause = -1
            this.value2 = ['', '']
            if (this.$route.query.taskPriority !== undefined) {
                this.obj.taskPriority = this.$route.query.taskPriority * 1
                this.obj.taskStatus = this.$route.query.taskStatus * 1
                this.obj.restart = this.$route.query.restart * 1
                this.obj.overdue = this.$route.query.overdue * 1
                this.obj.pause = this.$route.query.pause * 1
                this.obj.founder = this.$route.query.founder * 1
                this.obj.personLiable = this.$route.query.personLiable * 1
                this.obj.implement = this.$route.query.implement * 1
                this.value2[0] = this.$route.query.begin
                this.value2[1] = this.$route.query.end
                this.obj.taskName = this.$route.query.taskName
                this.obj.page_index = this.$route.query.page_index * 1
                this.$refs.pager.currentPage = this.$route.query.page_index * 1
            }
            if (this.$route.query.page_index !== undefined) {
                this.obj.page_index = this.$route.query.page_index
                this.$refs.pager.currentPage = this.$route.query.page_index * 1
            }
            // 获取列表数据
            let v1 = this.value2[0]
            let v2 = this.value2[1]
            if (v1 === 'Invalid date') {
                v1 = ''
            }
            if (v2 === 'Invalid date') {
                v2 = ''
            }
            let para = {
                'taskPriority': this.switchValue(this.obj.taskPriority), // 级别 0:一般 1：重要 2：紧急
                'taskStatus': this.switchValue(this.obj.taskStatus), // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                'restart': this.switchValue(this.obj.restart), // 任务类型0普通 1返工
                'overdue': this.switchValue(this.obj.overdue), // 逾期情况 1逾期 0未逾期
                'founder': this.switchValue(this.obj.founder), // 发布人
                'personLiable': this.switchValue(this.obj.personLiable), // 负责人
                'implement': this.switchValue(this.obj.implement), // 执行人
                'begin': v1, // 开始时间
                'end': v2, // 结束时间
                'taskName': this.obj.taskName, // 任务名称
                'pause': this.switchValue(this.obj.pause), // 是否暂停
                'page_index': this.obj.page_index,
                'page_size': this.obj.page_size
            }
            this.$get('api/taskunderling/all', para, {
            }).then((res) => {
                this.data1 = res.data.data.list
                this.rowcount = res.data.data.rowcount
                this.loading = false
            })
        },
        switchValue (val) {
            if (val === -1) {
                val = null
            }
            return val
        },
        handleSearch: function (v) {
            let obj = {
                'taskPriority': this.obj.taskPriority,
                'taskStatus': this.obj.taskStatus,
                'restart': this.obj.restart,
                'overdue': this.obj.overdue,
                'founder': this.obj.founder,
                'personLiable': this.obj.personLiable,
                'implement': this.obj.implement,
                'begin': dateFormat(this.value2[0]),
                'end': dateFormat(this.value2[1]),
                'taskName': this.obj.taskName,
                'pause': this.obj.pause,
                'page_index': this.obj.page_index
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.page_index = 1
                this.$router.replace({path: 'all', query: obj})
            } else if (this.$route.query.taskPriority !== undefined) {
                obj.page_index = this.$refs.pager.currentPage
                this.$router.replace({path: 'all', query: obj})
            } else {
                this.obj.page_index = this.$refs.pager.currentPage
                this.$router.replace({path: 'all', query: {page_index: this.$refs.pager.currentPage}})
            }
            this.getList()
        },
        resetSearch: function () {
            this.obj = {
                'taskPriority': -1, // 级别 0:一般 1：重要 2：紧急
                'taskStatus': -1, // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                'restart': -1, // 任务类型0普通 1返工
                'overdue': -1, // 逾期情况 1逾期 0未逾期
                'founder': -1, // 发布人
                'personLiable': -1, // 负责人
                'implement': -1, // 执行人
                // "begin":this.value2[0],//开始时间
                // "end":this.value2[1],//结束时间
                'taskName': '', // 任务名称
                'pause': -1, // 是否暂停
                'page_index': 1,
                'page_size': 30
            }
            this.value2 = ['', '']
            this.$router.replace({path: 'all'})
            this.$refs.pager.currentPage = this.obj.page_index
            this.getList()
        }
    },
    mounted: function () {
        // 获取人员下拉框
        this.$get('api/user/pullusers', {
        }).then((res) => {
            this.userData = res.data.data.list
            this.getList()
        })
    }
}
</script>
