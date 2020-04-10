<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small> DHC补充内容 </small><b> 合理排版 </b></h2>
            </div>
            <tab></tab>
            <p>1 两个中文字符 width 60 如果考虑排序 80</p>
            <p>2 日期/时间 width 80 日期时间 width 160</p>
            <p>3 金钱 min-width 100 右排序 需要规范格式</p>
            <p></p>
            <br /><br />
            <Table border :loading="loading.table" :columns="columns1" :data="tableData">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" size="small">编辑</Button>
                    <Button type="text" size="small">删除</Button>
                </template>
            </Table>
            <br /><br />
            <Table border :loading="loading.table" :columns="columns2" :data="tableData">
                <template slot-scope="{ row, index }" slot="taskName">
                    <Poptip trigger="hover" title="详情" :content="row.taskName" :transfer="true">
                        {{row.taskName}}
                    </Poptip>
                </template>
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" size="small">编辑</Button>
                    <Button type="text" size="small">删除</Button>
                </template>
            </Table>
            <br /><br />
            <Table border :loading="loading.table" :columns="columns3" :data="tableData">
                <template slot-scope="{ row, index }" slot="taskName">
                    <p> {{row.taskName}} <br /> {{row.taskStatus}} <br /> <b>时间 </b> {{row.foundTime}} <b> 计划完成日期</b> {{row.completeTime}} </p>
                </template>
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" size="small">编辑</Button>
                    <Button type="text" size="small">删除</Button>
                </template>
            </Table>
        </div>
    </div>
</template>
<script>
import { h } from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC2'

export default {
    components: { tab },
    data () {
        return {
            loading: {
                table: false // 表格加载
            },
            'columns1': [ // 必须指定最小宽度
                {'title': 'ID', 'width': 80, 'key': 'id', 'sortable': true},
                {'title': '编号', 'width': 80, 'key': 'taskNumber', 'sortable': true},
                {'title': '发布人', 'minWidth': 100, 'key': 'founder'},
                {'title': '全名', 'minWidth': 150, 'key': 'taskName', 'tooltip': true},
                {'title': '负责人', 'align': 'center', 'minWidth': 100, 'key': 'personLiable'},
                {'title': '时间', 'align': 'center', 'width': 100, 'key': 'foundTime'},
                {'title': '计划完成日期', 'align': 'center', 'minWidth': 120, 'key': 'completeTime', 'render': h.defaultH('completeTime')},
                {'title': '优先级', 'align': 'center', 'minWidth': 100, 'key': 'taskPriority', 'tooltip': true},
                {'title': '金钱', 'align': 'right', 'minWidth': 100, 'key': 'cost', 'render': h.moneyFormat('cost')},
                {'title': '状态', 'minWidth': 150, 'key': 'taskStatus', 'ellipsis': true},
                {'title': '操作', 'align': 'center', 'width': 120, 'slot': 'op'}
            ],
            'columns2': [ // 必须指定最小宽度
                {'title': 'ID', 'width': 60, 'key': 'id'},
                {'title': '编号', 'width': 60, 'key': 'taskNumber'},
                {'title': '全名', 'minWidth': 150, 'key': 'taskName', 'slot': 'taskName'},
                {'title': '时间', 'align': 'center', 'width': 160, 'key': 'foundTime'},
                {'title': '计划完成日期', 'align': 'center', 'minWidth': 120, 'key': 'completeTime', 'render': h.defaultH('completeTime')},
                {'title': '金钱', 'align': 'right', 'minWidth': 100, 'key': 'cost', 'render': h.moneyFormat('cost')},
                {'title': '状态', 'minWidth': 150, 'key': 'taskStatus', 'ellipsis': true},
                {'title': '操作', 'align': 'center', 'width': 120, 'slot': 'op'}
            ],
            'columns3': [ // 必须指定最小宽度
                {'title': 'ID', 'width': 60, 'key': 'id'},
                {'title': '编号', 'width': 60, 'key': 'taskNumber'},
                {'title': '详情', 'minWidth': 600, 'key': 'taskName', 'slot': 'taskName'},
                {'title': '金钱', 'align': 'right', 'minWidth': 100, 'key': 'cost', 'render': h.moneyFormat('cost')},
                {'title': '操作', 'align': 'center', 'width': 120, 'slot': 'op'}
            ],
            tableData: [
                {'id': 4100, 'taskNumber': 4100, 'taskName': '礼天隆运定统建极英睿钦文显武大德宏功至仁纯孝章皇帝', 'founder': '皇帝', 'foundTime': '1971-09-22 13:31:11', 'personLiable': '施瓦星格', 'completeTime': '1971-09-22', 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false, cost: 10023},
                {'id': 4200, 'taskNumber': 4200, 'taskName': '巴勃罗·迭戈·荷瑟·山迪亚哥·弗朗西斯科·德·保拉', 'founder': '山迪亚哥·居安·尼波莫切诺', 'foundTime': '2002-09-14 13:31:11', 'personLiable': '弗朗西斯科', 'completeTime': '1971-09-22', 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false, cost: 656454},
                {'id': 4300, 'taskNumber': 4300, 'taskName': '璃莹殇·安洁莉娜·樱雪羽晗灵·血丽魑·魅', 'founder': '紧急', 'foundTime': '2001-10-19 13:31:11', 'personLiable': '莉娜', 'completeTime': '1971-09-22', 'taskPriority': '重要而且很紧急很紧急很紧急很紧急', 'taskStatus': '进行中', 'restart': 1, 'overdue': 0, 'pause': false, cost: 432}
            ],
            end1: 1 // 防呆设计
        }
    },
    methods: {
    }
}
</script>
