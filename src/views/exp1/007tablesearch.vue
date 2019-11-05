<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格页 搜索/排序/分页/操作 的交叉影响</div>
                <div class="blogContent" v-highlight>
                    <p>1 初始化的时候 给表面搜索项深拷贝两份 <font color="red">一个是实际搜索项 一个是备份 </font></p>
                    <p>2 用户点击搜索按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 分页置为1 刷新页面 </p>
                    <p>3 用户点击排序按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 分页置为1 刷新页面 </p>
                    <p>4 用户点击操作按钮例如导出时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 不关分页 刷新页面 </p>
                    <p>5 用户点击分页时候 <font color="red">实际搜索项拷贝给表面搜索项</font> 刷新页面 </p>
                    <p>6 本来想直接在data声明一个大对象来处理所有表格相关的内容和方法 似乎作用域不支持这样做 this在对象声明时候就绑定了</p>
                    <p>6 即 ()=>{} 可以是this绑定在外 但是如果{}对象中使用 其对象就是this</p>
                    <p class="text-danger">7 以前老是纠结把公共方法集中起来 甚至抽象出来 现在我想通了 就大大方方的保留 没准小伙伴在使用中可以修改升级那</p>
                    <p class="text-danger">8 大家都没有把这个重视起来 无语...</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool">
                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
                <Button type="default" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount"
                    class="fr" show-total show-elevator @on-change="hendleGopage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
export default {
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns: [
                {title: '任务编号', key: 'taskNumber', sortable: true},
                {title: '发布人', key: 'founder', sortable: true},
                {title: '发布日期', key: 'foundTime', sortable: true},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.serrchParam)
            this.hendleSearch()
        }),
        init () { // 初始化
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            if (!this.serrchBack) {this.serrchBack = extend({}, this.search)} // 备份
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
        hendleReset () { // 重置
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleGopage (page) { // 跳转页
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        hendleSort (param) { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        ajax: debounce(function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.serrchParam).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowCount
            })
        }),
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
