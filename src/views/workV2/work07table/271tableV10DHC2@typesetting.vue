<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small> DHC补充内容 </small><b> 合理排版 </b></h2>
            </div>
            <tab></tab>
            <Table border :loading="loading.table" :columns="columns" :data="tableData">
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
            'columns': [ // 必须指定最小宽度
                {'title': 'ID', 'minWidth': 60, 'key': 'id', 'sortable': true},
                {'title': '编号', 'minWidth': 60, 'key': 'taskNumber', 'sortable': true},
                {'title': '发布人', 'minWidth': 100, 'key': 'founder'},
                {'title': '全名', 'minWidth': 150, 'key': 'taskName', 'tooltip': true},
                {'title': '负责人', 'minWidth': 100, 'key': 'personLiable'},
                {'title': '时间', 'align': 'center', 'minWidth': 100, 'key': 'foundTime'},
                {'title': '计划完成日期', 'align': 'center', 'minWidth': 100, 'key': 'completeTime', 'render': h.defaultH('completeTime')},
                {'title': '优先级', 'minWidth': 100, 'key': 'taskPriority', 'tooltip': true},
                {'title': '状态', 'minWidth': 150, 'key': 'taskStatus', 'ellipsis': true}
            ],
            tableData: [
                {'id': 4100, 'taskNumber': 4100, 'taskName': '礼天隆运定统建极英睿钦文显武大德宏功至仁纯孝章皇帝', 'founder': '皇帝', 'foundTime': '1971-09-22', 'personLiable': '施瓦星格', 'completeTime': '1971-09-22', 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false},
                {'id': 4200, 'taskNumber': 4200, 'taskName': '巴勃罗·迭戈·荷瑟·山迪亚哥·弗朗西斯科·德·保拉', 'founder': '山迪亚哥·居安·尼波莫切诺', 'foundTime': '2002-09-14', 'personLiable': '弗朗西斯科', 'completeTime': '1971-09-22', 'taskPriority': '一般', 'taskStatus': '我不知道啊别问我啊别问我啊别问我啊别问我啊别问我啊', 'restart': 1, 'overdue': 0, 'pause': false},
                {'id': 4300, 'taskNumber': 4300, 'taskName': '璃莹殇·安洁莉娜·樱雪羽晗灵·血丽魑·魅', 'founder': '紧急', 'foundTime': '2001-10-19', 'personLiable': '莉娜', 'completeTime': '1971-09-22', 'taskPriority': '重要而且很紧急很紧急很紧急很紧急', 'taskStatus': '进行中', 'restart': 1, 'overdue': 0, 'pause': false}
            ],
            end1: 1 // 防呆设计
        }
    },
    methods: {
    }
}
</script>
