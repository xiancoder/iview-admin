<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V1 添加最大高度 可方便查看汇总</div>
                <div class="blogContent" v-highlight>
                    <h2>
                        <span>操作项</span>
                        <i class="fa fa-power-off"></i>
                        <i class="fa fa-cogs"></i>
                        <i class="fa fa-download"></i>
                        <i class="fa fa-edit"></i>
                        <i class="fa fa-pencil"></i>
                        <i class="fa fa-trash"></i>
                        <i class="fa fa-vcard-o"/></i>
                        <i class="fa fa-ban"/></i>
                        <i class="fa fa-bell-o"/></i>
                    </h2>
                    <h2>
                        <span>状态项</span>
                        <i class="fa fa-toggle-on" style="color:green"></i><i class="fa fa-toggle-off" style="color:red"></i>
                        <i class="fa fa-info-circle" style="color:#03A9F4"></i>
                        <i class="fa fa-exclamation" style="color:red"></i>
                        <i class="fa fa-calendar-check-o"/></i> <i class="fa fa-calendar-times-o"/></i>
                        <i class="fa fa-close"/></i> <i class="fa fa-check"/></i>
                        <i class="fa fa-eye"/></i> <i class="fa fa-eye-slash"/></i>
                    </h2>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
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
                <Button type="default" class="fr" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns" :data="tableData"
                :maxHeight="maxheight"
                @on-sort-change="hendleSort">
            </Table>
            <div class="tableFooter">
                <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                    show-sizer show-elevator class="fr"
                    @on-change="v=>{hendleGopage(v)}"
                    @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                </Page>
                <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF, debounce, nothing } from '@/utils'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具

export default {
    data () {
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        const maxheight = height - 144 - 150
        return {
            maxheight, // 表格高度自适应
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
                {title: '优先级', key: 'taskPriority', render: (h, params) => {
                    const row = params.row;
                    if (row['taskPriority'] === '一般') {
                        return h('i', {'class': {'fa': true, 'fa-toggle-on': true}, style: {color: 'green'}, attrs: {title: '一般'}})
                    } else {
                        return h('i', {'class': {'fa': true, 'fa-toggle-off': true}, style: {color: 'red'}, attrs: {title: '不一般'}})
                    }
                }},
                {title: '状态', key: 'taskStatus', render: (h, params) => {
                    const row = params.row;
                    if (row['taskStatus'] === '待接受') {
                        return h('i', {'class': {'fa': true, 'fa-cogs': true}, style: {color: 'green'}})
                    } else {
                        return h('i', {'class': {'fa': true, 'fa-download': true}, style: {color: 'red'}})
                    }
                }},
                {title: '操作', key: 'op', render: (h, params) => {
                    return h('div', [
                        h('i', {
                            'class': {'fa': true, 'fa-cogs': true},
                            'style': {marginRight: '6px', 'cursor': 'pointer'},
                            // 事件监听器在 `on` 属性内，
                            // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
                            // 需要在处理函数中手动检查 keyCode。
                            'on': { 'click': this.handlerEdit }
                        }),
                        h('i', {'class': {'fa': true, 'fa-edit': true}, style: {marginRight: '6px', 'cursor': 'pointer'}}),
                        h('i', {'class': {'fa': true, 'fa-pencil': true}, style: {marginRight: '6px', 'cursor': 'pointer'}})
                    ])
                }}
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
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            const info = {
                'list': [
                    {
                        'id': 4100, 'taskNumber': 4100, 'taskName': '约格劳后白。', 'founder': '卢霞', 'foundTime': '1971-09-15 12:16:24',
                        'personLiable': '孔军', 'completeTime': null, 'taskPriority': '一般', 'taskStatus': '待接受', 'restart': 1, 'overdue': 0, 'pause': false
                    },
                    {
                        'id': 4200, 'taskNumber': 4200, 'taskName': '光商已少全。', 'founder': '崔明', 'foundTime': '1970-07-23 03:12:02',
                        'personLiable': '许杰', 'completeTime': '1970-07-23 03:12:02', 'taskPriority': '不一般', 'taskStatus': '待接受', 'restart': 1, 'overdue': 0, 'pause': false
                    },
                    {
                        'id': 4300, 'taskNumber': 4300, 'taskName': '公条点制处。', 'founder': '陆静', 'foundTime': '2006-11-12 08:42:00',
                        'personLiable': '夏勇', 'completeTime': null, 'taskPriority': '一般', 'taskStatus': '不接受', 'restart': 1, 'overdue': 0, 'pause': false
                    }
                ],
                'rowcount': 200
            }
            this.tableData = info.list
            this.page.rowCount = info.rowcount
        },
        handlerEdit (param) { // 编辑功能
            alert(123)
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
/*
{
    // 与 `v-bind:class` 的 API 相同，
    // 接受一个字符串、对象或字符串和对象组成的数组
    'class': {
        foo: true,
        bar: false
    },
    // 与 `v-bind:style` 的 API 相同，
    // 接受一个字符串、对象，或对象组成的数组
    style: {
        color: 'red',
        fontSize: '14px'
    },
    // 普通的 HTML 特性
    attrs: {
        id: 'foo'
    },
    // 组件 prop
    props: {
        myProp: 'bar'
    },
    // DOM 属性
    domProps: {
        innerHTML: 'baz'
    },
    // 事件监听器在 `on` 属性内，
    // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
    // 需要在处理函数中手动检查 keyCode。
    on: {
        click: this.clickHandler
    },
    // 仅用于组件，用于监听原生事件，而不是组件内部使用
    // `vm.$emit` 触发的事件。
    nativeOn: {
        click: this.nativeClickHandler
    },
    // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
    // 赋值，因为 Vue 已经自动为你进行了同步。
    directives: [
        {
            name: 'my-custom-directive',
            value: '2',
            expression: '1 + 1',
            arg: 'foo',
            modifiers: { bar: true }
        }
    ],
    // 作用域插槽的格式为
    // { name: props => VNode | Array<VNode> }
    scopedSlots: {
        default: props => createElement('span', props.text)
    },
    // 如果组件是其它组件的子组件，需为插槽指定名称
    slot: 'name-of-slot',
    // 其它特殊顶层属性
    key: 'myKey',
    ref: 'myRef',
    // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
    // 那么 `$refs.myRef` 会变成一个数组。
    refInFor: true
}
*/
</script>
