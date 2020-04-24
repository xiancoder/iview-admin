<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small> DHC补充内容 </small><b> 搜索框规范 </b></h2>
            </div>
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <DatePicker type="month" :value="search.date" placeholder="选择日期" format="yyyy-MM"
                    @on-change="(date)=>{search.date=date}" style="width: 150px">
                </DatePicker>
                <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期"
                    @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
                </DatePicker>
                <Select v-model="search.sex" placeholder="请选择性别" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.sex" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择状态" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.state" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="default" @click="showMoreSearch=!showMoreSearch">
                    {{ showMoreSearch?'隐藏更多':'显示更多' }}
                    <Icon :size="18" :type="showMoreSearch?'md-arrow-dropdown':'md-arrow-dropup'"></Icon>
                </Button>
                <br v-show="showMoreSearch" />
                <Select v-model="search.age" placeholder="请选择年龄" v-show="showMoreSearch" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.age" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.stay" placeholder="请选择时长" v-show="showMoreSearch" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.stay" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <br v-show="showMoreSearch" />
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <Input type="text" v-model.trim="search.businessName" v-show="showMoreSearch" placeholder="请输入姓名" style="width: 180px"/>
                <br />
                <Button type="primary" :loading="loading.table" @click="hendleSearch">搜索</Button>
                <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
                <Button type="primary" :loading="loading.btn4" @click="hendleMockInsert" class="fr">假数据插入</Button>
                <Button type="primary" :loading="loading.btn3" @click="hendleErrorTry" class="fr">错误演示</Button>
                <Button type="primary" :loading="loading.btn2" @click="hendleDrop" class="fr">删除表格</Button>
                <Button type="primary" :loading="loading.btn1" @click="hendleCreate" class="fr">创建表格</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" @click="hendleEdit(row)" size="small">编辑</Button>
                    <Button type="text" @click="hendleDel(row)" size="small">删除</Button>
                </template>
            </Table>
            <div class="tableFooter">
                <!-- 模版结构不要动 -->
                <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                    show-sizer show-elevator class="fr"
                    @on-change="v=>{hendleGopage(v)}"
                    @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                </Page>
                <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
            </div>
        </div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格v10模版规范 搜索项用法</div>
                <Divider orientation="right">项目上的经验积累</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范1 订立api的时候对枚举变量一定不要使用0 (使用0来代表全部)</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范2 每行最多5个控件 再多请换行 右侧最多4个按钮 再多请换行</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范3 api模块中不要写关于枚举0的内容 枚举0写入select标签内</p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF, nothing, sevenRange, todayMouth } from '@/utils'

import { h, confirmAjax, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC'

export default {
    components: { tab },
    data () {
        const start2end = sevenRange()
        const date = todayMouth()
        return {
            dataSet: {
                date, // 日期 yyyy-mm
                start2end, // 日期范围 yyyy-mm-dd
                'sex': [], // 性别 0全部1男2女
                'state': [], // 状态 0全部1在校2记过3劝退4开除
                'age': [ // 年龄
                    {id: '10', name: '10 ~ 20'}, {id: '20', name: '20 ~ 30'}, {id: '30', name: '30 ~ 40'},
                    {id: '40', name: '40 ~ 50'}, {id: '50', name: '50 ~ 60'}, {id: '60', name: '60 ~ 70'},
                    {id: '70', name: '70 ~ 80'}, {id: '80', name: '80 ~ 90'}
                ],
                'stay': [ // 时长
                    {id: '10', name: '0 ~ 10'}, {id: '20', name: '10 ~ 20'}, {id: '30', name: '20 ~ 30'}
                ]
            },
            search: {
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'sex': '', // 性别 0全部1男2女
                'state': '', // 状态 0全部1在校2记过3劝退4开除
                'name': '',
                'age': '',
                'stay': ''
            },
            loading: {
                table: false, // 表格加载
                btn1: false, btn2: false, btn3: false, btn4: false, // 功能节流
                op1: false, op2: false // 操作节流
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {title: 'id', minWidth: 100, key: 'id', sortable: true},
                {title: '姓名', minWidth: 100, key: 'name'},
                {title: '性别', minWidth: 100, key: 'sex', render: h.readArr('sex', this.$api.student.pullSex('table'))},
                {title: '状态', minWidth: 100, key: 'state', render: h.readArr('state', this.$api.student.pullState('table'))},
                {title: '年龄', minWidth: 100, key: 'age'},
                {title: '留学时长', minWidth: 100, key: 'stay'},
                {title: '操作', minWidth: 80, slot: 'op', align: 'center'}
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            'showMoreSearch': false, // 显示更多的搜索项
            end1: 1 // 防呆设计
        }
    },
    methods: {
        hendleCreate () { // 操作::创建表格
            this.loading.btn1 = true
            this.$api.student.createTable().then(() => {
                this.loading.btn1 = false
            }, () => {
                this.loading.btn1 = false
            })
        },
        hendleDrop () { // 操作::删除表格
            this.loading.btn2 = true
            this.$api.student.dropTable().then(() => {
                this.loading.btn2 = false
            }, () => {
                this.loading.btn2 = false
            })
        },
        hendleErrorTry () { // 操作::错误演示
            this.loading.btn3 = true
            this.$api.student.errorTry().then(() => {
                this.loading.btn3 = false
            }, () => {
                this.loading.btn3 = false
            })
        },
        hendleMockInsert () { // 操作::假数据插入
            this.loading.btn3 = true
            confirmAjax('这么懒啊要执行假数据插入').then(() => {
                this.$api.student.mockAddOne().then(() => {
                    this.ajax()
                    this.$Modal.remove()
                    this.loading.btn3 = false
                }, () => {
                    this.loading.btn3 = false
                })
            }, () => {
                this.$Modal.remove()
                this.loading.btn3 = false
            })
        },
        hendleEdit (param) { // 操作::编辑功能
        },
        hendleDel (id) { // 操作::删除
            if (this.loading.op2) return false
            this.loading.op2 = true
            this.$api.student.del(id).then(() => {
                this.loading.op2 = false
                this.ajax()
            }, () => {
                this.loading.op2 = false
            })
        },
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            this.$api.student.pullSex().then(list => {
                this.dataSet.sex = list
            }, () => {
            })
            this.$api.student.pullState().then(list => {
                this.dataSet.state = list
            }, () => {
            })
        },
        initTable () { // 初始化表格 [[模版方法不要动]]
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
        },
        hendleSearch () { // 搜索
            extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
            this.hendleGopage(1)
        },
        hendleReset () { // 重置 [[模版方法不要动]]
            extend(this.search, this.$options.data().search) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleGopage (page) { // 跳转页 [[模版方法不要动]]
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        hendleSort (param) { // 排序功能 [[模版方法不要动]]
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        ajax: function () { // 业务ajax [[模版方法不要动]]
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading.table = true // 加载中
            this.$api.student.listAll(this.serrchParam).then((info) => { // 发送ajax
                this.loading.table = false // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowcount
            })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
        this.initDataSet()
    }
}
</script>
