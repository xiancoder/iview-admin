<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V12 (新技术还不知道好不好使)</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:red"/> 遇到问题 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2020年3月13日13:20:06 参考使用mixin </p>
                    <p>mixin 可以更加方便的省略 分页 搜索 排序 的代码实现</p>
                    <p class="text-danger">mixin 不能实现 变量先声明后混入的方式 先凑合一下</p>
                    <script type="text/js">
                        import tableV12Minxin from '@/mixin/tableV12Minxin'
                        export default {
                            data () {
                                return {
                                    ...tableV12Minxin.data,
                                    'end1': 1 // 防呆设计
                                }
                            },
                            methods: {
                                ...tableV12Minxin.methods,
                                end2: nothing // 防呆设计
                            }
                        }
                    </script>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
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
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"/>
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
                <Button type="default" class="fr" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns" :data="tableData"
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
import { debounce, nothing } from '@/utils/function'
import { h } from '@/tools' // 自定义常用工具
import tab from './205tab'
import tableV12Minxin from '@/mixin/tableV12Minxin'

export default {
    components: { tab },
    data () {
        return {
            'dataSet': {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            'search': {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'businessName': '', /* 想搜索的业务名称 */
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            'columns': [ // 必须指定最小宽度
                {'title': '任务编号', 'minWidth': 100, 'key': 'taskNumber', 'sortable': true},
                {'title': '发布人', 'minWidth': 100, 'key': 'founder', 'sortable': true},
                {'title': '发布日期', 'minWidth': 100, 'key': 'foundTime', 'sortable': true},
                {'title': '负责人', 'minWidth': 100, 'key': 'personLiable'},
                {'title': '计划完成日期', 'minWidth': 100, 'key': 'completeTime', 'render': h.defaultH('completeTime')},
                {'title': '优先级', 'minWidth': 100, 'key': 'taskPriority'},
                {'title': '状态', 'minWidth': 100, 'key': 'taskStatus'}
            ],
            ...tableV12Minxin.data,
            'end1': 1 // 防呆设计
        }
    },
    methods: {
        ...tableV12Minxin.methods,
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            this.hendleSearch()
        }),
        ajaxCustom: function () { // 业务ajax
            this.$api.task.listMine(this.serrchParam) // 发送ajax
                .then((info) => {
                    this.ajaxEnd()
                    this.tableData = info.list
                    this.page.rowCount = info.rowcount
                })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init()
        this.getDataSet()
    }
}
</script>
