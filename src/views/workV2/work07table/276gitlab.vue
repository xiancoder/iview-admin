<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>GIT表格</h2>
            </div>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Input type="text" v-model.trim="search.aaa" placeholder="请输入姓名" style="width: 180px"/>
                <Button type="warning" :loading="loading.table" @click="hendleSearch">搜索</Button>
                <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="default">Merge request</Button>
                    <Divider type="vertical" />
                    <Button type="default">Compare</Button>
                    <Divider type="vertical" />
                    <Button type="default" style="padding:0 5px;"><Icon type="md-download" size="20"/></Button>
                    <Divider type="vertical" />
                    <Button type="error" style="padding:0 5px;"><Icon type="md-trash" size="20"/></Button>
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
        <pre v-pre>
            // @returns {VNode}
            createElement(
                // {String | Object | Function}
                // 一个 HTML 标签名、组件选项对象，或者
                // resolve 了上述任何一种的一个 async 函数。必填项。
                'div',

                // {Object}
                // 一个与模板中 attribute 对应的数据对象。可选。
                {
                    // (详情见下一节)
                },

                // {String | Array}
                // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
                // 也可以使用字符串来生成“文本虚拟节点”。可选。
                [
                    '先写一些文字',
                    createElement('h1', '一则头条'),
                    createElement(MyComponent, {
                        props: {
                            someProp: 'foobar'
                        }
                    })
                ]
            )
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
                // 普通的 HTML attribute
                attrs: {
                    id: 'foo'
                },
                // 组件 prop
                props: {
                    myProp: 'bar'
                },
                // DOM property
                domProps: {
                    innerHTML: 'baz'
                },
                // 事件监听器在 `on` 内，
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
                        modifiers: {
                            bar: true
                        }
                    }
                ],
                // 作用域插槽的格式为
                // { name: props => VNode | Array }
                scopedSlots: {
                    default: props => createElement('span', props.text)
                },
                // 如果组件是其它组件的子组件，需为插槽指定名称
                slot: 'name-of-slot',
                // 其它特殊顶层 property
                key: 'myKey',
                ref: 'myRef',
                // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
                // 那么 `$refs.myRef` 会变成一个数组。
                refInFor: true
            }
        </pre>
    </div>
</template>
<script>
import { extend, extendF, nothing } from '@/utils'
import { getParamState } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            dataSet: {
            },
            search: {
                aaa: ''
            },
            loading: {
                table: false // 表格加载
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {title: '一一', 'minWidth': 400, align: 'left', render: (h, params) => {
                    const row = params.row;
                    return [
                        h('span', {style: {'color': 'rgba(0,0,0,0.85)', 'font-weight': '600'}}, [row.title]),
                        h('br'),
                        h('Icon', {props: {type: 'md-attach'}, style: {color: 'red'}}),
                        h('span', ' · ' + row.version + ' · ' + row.dosc + ' · '),
                        h('Time', {props: {time: new Date(row.time)}})
                    ]
                }},
                {title: '依依', 'minWidth': 60, align: 'left', key: 'state', render: (h, params) => {
                    const row = params.row;
                    return [
                        h('span', row.before + '|' + row.after)
                    ]
                }},
                {'title': '操作', 'minWidth': 250, 'slot': 'op', 'align': 'center'}
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            end1: 1 // 防呆设计
        }
    },
    methods: {
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
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
        },
        hendleReset () { // 重置 [[模版方法不要动]]
        },
        hendleGopage (page) { // 跳转页 [[模版方法不要动]]
        },
        hendleSort (param) { // 排序功能 [[模版方法不要动]]
        },
        ajax: function () { // 业务ajax [[模版方法不要动]]
            const data = [
                {id: 1, title: 'dev.filegroup.1', version: '7db6dfd1', dosc: '开始赶工', before: '31', after: '3', time: '2020-4-22 16:12:26'},
                {id: 2, title: 'dev.follow-up.1', version: '2436525e', dosc: '联调整理', before: '21', after: '1', time: '2020-4-29 16:12:26'},
                {id: 3, title: 'master', tag: 'default', version: 'f8cf0e6e', dosc: 'Merge branch \'dev.domain.1\' into \'master\'', before: '', after: '', time: '2020-4-24 16:12:26'},
                {id: 4, title: 'release', tag: 'merged', version: '585af91f', dosc: '只能选16以后今天以前', before: '34', after: '2', time: '2020-4-29 15:12:26'}
            ]
            this.tableData = data
            this.page.rowCount = 100
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
        this.initDataSet()
    }
}
</script>
