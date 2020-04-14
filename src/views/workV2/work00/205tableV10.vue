<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V10 (历练版)</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 本模板经历实战可以使用 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日17:33:16 通过了检验 本套流程可以投入生产 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年12月6日17:32:15 完美优化page组件 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年12月12日16:55:23 maxHeight默认配置降级去除 </p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">统一化写法带来的好处</div>
                <div class="blogContent" v-highlight>
                    <p>1 方便了互相抄袭 复制粘贴永远是编码最简便的方式</p>
                    <p>2 方便了后来接手的人更加容易的切入主题</p>
                    <p>3 方便了统一化的单元测试的写法 初始值/搜索项/分页/排序/单按钮跳转/复位</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Select v-model="search.taskPriority" placeholder="请选择任务级别">
                    <Option value="0" label="全部任务级别"></Option>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择任务状态">
                    <Option value="0" label="全部任务状态"></Option>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"
                />
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
                <Button type="default" class="fr" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button @click="hendleEdit(row)" size="small">编辑</Button>
                </template>
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
import tab from './205tab'

export default {
    components: { tab },
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'taskPriority': '', // 级别 0全部1一般2重要3紧急
                'taskStatus': '', // 任务状态 0全部1待接受2执行中3待验收4验收通过5已废弃6已暂停
                'businessName': '' /* 想搜索的业务名称 */
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns: [ // 必须指定最小宽度
                {title: '任务编号', minWidth: 100, key: 'taskNumber', sortable: true},
                {title: '发布人', minWidth: 100, key: 'founder', sortable: true},
                {title: '发布日期', minWidth: 100, key: 'foundTime', sortable: true},
                {title: '负责人', minWidth: 100, key: 'personLiable'},
                {title: '计划完成日期', minWidth: 100, key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', minWidth: 100, key: 'taskPriority'},
                {title: '状态', minWidth: 100, key: 'taskStatus'},
                {title: '操作', minWidth: 80, slot: 'op'}
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
        hendleEdit (param) { // 编辑功能
        },
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.serrchParam) // 发送ajax
                .then((info) => {
                    this.loading = false; // 加载完成
                    this.tableData = info.list
                    this.page.rowCount = info.rowcount
                })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
