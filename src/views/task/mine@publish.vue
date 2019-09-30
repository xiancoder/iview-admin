<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool">
            <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.restart" placeholder='请选择任务类型'>
                <Option v-for="option in dataSet.restartList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.overdue" placeholder='请选择逾期情况'>
                <Option v-for="option in dataSet.overdueList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.pause" placeholder='请选择暂停状态'>
                <Option v-for="option in dataSet.pauseList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <br />
            <Select v-model="search.founder" placeholder='请搜索/选择发布人' v-if='optionSearch!=1'>
                <Option v-for="option in dataSet.userData" :value="option.userId" :key="option.userId" :label="option.userName" >
                </Option>
            </Select>
            <Select v-model="search.personLiable" filterable placeholder='请搜索/选择负责人' v-if='optionSearch!=2'>
                <Option v-for="option in dataSet.userData" :value="option.userId" :key="option.userId" :label="option.userName" >
                </Option>
            </Select>
            <Select v-model="search.implement" filterable placeholder='请搜索/选择执行人' v-if='optionSearch!=3'>
                <Option v-for="option in dataSet.userData" :value="option.userId" :key="option.userId" :label="option.userName" >
                </Option>
            </Select>
            <DatePicker v-model="search.beginAndEnd" format="yyyy-MM-dd" type="daterange"
                placeholder="请选择日期" style="width: 200px" placement="bottom-end"
                @on-change="search.beginAndEnd=$event">
            </DatePicker>
            <Input type="text" v-model="search.taskName" placeholder="任务名称、任务编号" @on-enter="getList()"/>
            <Button type="primary" @click="getList()">搜索</Button>
            <Button type="default" @click="getList('reset')">重置</Button>
            <Button type="primary" class="fr" @click="goto('add')">发布任务</Button>
        </div>
        <Table :loading="loading" :columns="columns1" :data="dataSet.tableData" ></Table>
        <div class="tableFooter">
            <Button @click="handleSelectAll(true)">Set all selected</Button>
            <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount"
                class="fr" show-total show-elevator @on-change="getList"
            />
        </div>
    </div>
</template>
<script>
import tab from './mine'
import { sevenRange } from '@/utils/date'
import { extend, extendF } from '@/utils/object'
import { h, jumpto, saveParamState, getParamState } from '@/tools'
export default {
    components: { tab },
    data () {
        const taskPriorityList = this.$api.task.priority()
        const taskStatuList = this.$api.task.status()
        const restartList = this.$api.task.restart()
        const overdueList = this.$api.task.overdue()
        const pauseList = this.$api.task.pause()
        this.$api.user.pullUserList().then(list => { this.dataSet.userData = list })
        const beginAndEnd = sevenRange()
        return {
            loading: false,
            dataSet: {
                taskPriorityList,
                taskStatuList,
                restartList,
                overdueList,
                userData: [],
                pauseList,
                tableData: []
            },
            search: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '', // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                'restart': '', // 任务类型 0普通 1返工
                'overdue': '', // 逾期情况 1逾期 0未逾期
                'founder': '', // 发布人
                'personLiable': '', // 负责人
                'implement': '', // 执行人
                'taskName': '', // 任务名称
                'pause': '', // 是否暂停
                beginAndEnd // 开始结束时间
            },
            page: { // 分页
                index: 1,
                size: 30,
                rowCount: 999
            },
            columns1: [
                {title: '任务编号', key: 'taskNumber'},
                {title: '任务名称', key: 'taskName', render: (h, params) => {
                    const list = []
                    if (params.row.overdue) {
                        list.push(h('icon', {
                            props: {'type': 'ios-alert'},
                            style: {'color': '#ed4014', 'font-size': '24px'}
                        }))
                    }
                    if (params.row.pause) {
                        list.push(h('icon', {
                            props: {'type': 'md-arrow-dropright-circle'},
                            style: {'color': '#f90', 'font-size': '24px'}
                        }))
                    }
                    if (params.row.restart) {
                        list.push(h('div', {
                            style: {'color': 'white', 'font-size': '14px', 'width': '20px', 'height': '20px', 'border-radius': '10px', 'background-color': '#2d8cf0', 'display': 'inline-block', 'line-height': '20px', 'text-align': 'center', 'vertical-align': 'middle'}
                        }, params.row.restart))
                    }
                    return h('div', {
                        style: {'line-height': '46px'}
                    }, [
                        ...list,
                        h('a', {
                            on: {click: () => { this.goto('info', {taskId: params.row.id, role: 1}) }}
                        }, params.row.taskName)
                    ]);
                }
                },
                {title: '发布人', key: 'founder'},
                {title: '发布日期', key: 'foundTime'},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ]
        };
    },
    props: {
        listAjaxName: {type: String, default: 'listMine'}, // 本页面同意作为模板给另外三个兄弟节点使用
        optionSearch: {type: Number, default: 1} // 本页面同意作为模板给另外三个兄弟节点使用
    },
    methods: {
        goto (name, query) { // 跳转目录
            if (name === 'add') { jumpto('task_mine@release') }
            if (name === 'info') { jumpto('task_mine@info', query) }
        },
        getList: function (fun) {
            if (!this.searchParam1234) { this.searchParam1234 = {} } // 下发参数
            if (!this.searchBack1234) { this.searchBack1234 = extend({}, this.search) } // 备份
            if (fun === 'init') { // 初始化
                const query = getParamState()
                extend(this.searchParam1234, query)
                extendF(this.search, query)
                extendF(this.page, query)
                this.treeSelectedDepId = query.treeSelectedDepId
            } else if (fun === 'reset') { // 重置
                extend(this.search, this.searchBack1234)
                this.page.index = 1;
            } else if (typeof fun === 'number') { // 跳转页
                this.page.index = fun;
                extendF(this.search, this.searchParam1234) // 拼装下发参数
                extend(this.searchParam1234, this.page)
            } else { // 搜索
                extend(this.searchParam1234, this.search)
                this.page.index = 1;
            }
            this.loading = true // 加载中
            saveParamState(this.searchParam1234) // 存url
            this.$api.task[this.listAjaxName](this.searchParam1234).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.dataSet.tableData = info.list
                this.page.rowCount = info.rowCount
            });
        }
    },
    mounted: function () {
        this.getList('init')
    }
}
</script>
<style scoped lang="less">
    .layout{
        .ivu-select{
           width:150px;
       }
    }
</style>
