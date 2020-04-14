<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V13 (表格内容溢出处理办法)</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:red"/> 遇到问题 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2020年3月13日13:20:06 尝试内容溢出</p>
                    <p class="text-danger">没啥说的 挺简单的</p>
                    <script type="text/js">
                        {'title': '全名', 'minWidth': 100, 'key': 'taskName', 'sortable': true, 'tooltip': true},
                        {'title': '优先级', 'minWidth': 100, 'key': 'taskPriority', 'tooltip': true},
                        {'title': '状态', 'minWidth': 100, 'key': 'taskStatus', 'ellipsis': true}
                    </script>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
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
import { debounce, nothing } from '@/utils'
import { h } from '@/tools' // 自定义常用工具
import tableV12Minxin from '@/mixin/tableV12Minxin'

export default {
    data () {
        return {
            'search': {},
            'columns': [ // 必须指定最小宽度
                {'title': '任务编号', 'minWidth': 100, 'key': 'taskNumber', 'sortable': true},
                {'title': '发布人', 'minWidth': 100, 'key': 'founder', 'sortable': true},
                {'title': '全名', 'minWidth': 100, 'key': 'taskName', 'sortable': true, 'tooltip': true},
                {'title': '负责人', 'minWidth': 100, 'key': 'personLiable'},
                {'title': '计划完成日期', 'minWidth': 100, 'key': 'completeTime', 'render': h.defaultH('completeTime')},
                {'title': '优先级', 'minWidth': 100, 'key': 'taskPriority', 'tooltip': true},
                {'title': '状态', 'minWidth': 100, 'key': 'taskStatus', 'ellipsis': true}
            ],
            ...tableV12Minxin.data,
            'end1': 1 // 防呆设计
        }
    },
    methods: {
        ...tableV12Minxin.methods,
        download: debounce(function () { // 操作 任何操作将重置搜索项
            this.hendleSearch()
        }),
        ajaxCustom: function () { // 业务ajax
            this.ajaxEnd()
            let info = {'code': 200, 'data': {'list': [
                {'id': 4100, 'taskNumber': 4100, 'taskName': '礼天隆运定统建极英睿钦文显武大德宏功至仁纯孝章皇帝', 'founder': '皇帝', 'foundTime': '1971-09-22 21: 23: 47', 'personLiable': '施瓦星格', 'completeTime': null, 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false},
                {'id': 4200, 'taskNumber': 4200, 'taskName': '巴勃罗·迭戈·荷瑟·山迪亚哥·弗朗西斯科·德·保拉·居安·尼波莫切诺', 'founder': '山迪亚哥', 'foundTime': '2002-09-14 18: 12: 47', 'personLiable': '弗朗西斯科', 'completeTime': null, 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false},
                {'id': 4300, 'taskNumber': 4300, 'taskName': '璃莹殇·安洁莉娜·樱雪羽晗灵·血丽魑·魅', 'founder': '紧急', 'foundTime': '2001-10-19 02: 58: 54', 'personLiable': '莉娜', 'completeTime': null, 'taskPriority': '重要而且很紧急很紧急很紧急很紧急', 'taskStatus': '进行中', 'restart': 1, 'overdue': 0, 'pause': false}
            ], 'rowcount': 200}, 'msg': '', 'time': 1584328299698}.data
            this.tableData = info.list
            this.page.rowCount = info.rowcount
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init()
    }
}
</script>
