<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 超级重复代码的 集中化管理</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 流程已完善 </p>
                    <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:39:40 屏弃超重复代码集中化的思想</p>
                    <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:39:40 此尝试不应用于实际的表格</p>
                    <hr>
                    <script type="text/js">
                        import mixin from './009mixin'
                        export default {
                            mixins: [mixin],
                        }
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
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
                <Button type="primary" @click="yunxiTable.search">搜索</Button>
                <Button type="default" @click="yunxiTable.reset">重置</Button>
                <Button type="default" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns1" :data="yunxiTable.tableData"
                @on-sort-change="yunxiTable.sort">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount"
                    class="fr" show-total show-elevator @on-change="yunxiTable.goPage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { debounce, nothing } from '@/utils/function'
import { h } from '@/tools' // 自定义常用工具
import mixin from './009mixin'
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
            columns1: [
                {title: '任务编号', key: 'taskNumber', sortable: true},
                {title: '发布人', key: 'founder', sortable: true},
                {title: '发布日期', key: 'foundTime', sortable: true},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ],
            end1: 1 // 防呆设计
        }
    },
    mixins: [mixin],
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.yunxiTable.serrchParam)
            this.yunxiTable.search()
        }),
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.yunxiTable.init(this)
        this.getDataSet()
    }
}
</script>
