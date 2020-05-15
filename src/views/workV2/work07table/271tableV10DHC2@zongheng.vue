<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>纵横结构</small><b>数据横向对比</b></h2>
            </div>
            <tab></tab>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" @click="hendleEdit(row)" size="small">编辑</Button>
                    <Button type="text" @click="hendleDel(row)" size="small">删除</Button>
                </template>
            </Table>
        </div>
    </div>
</template>
<script>
import { extend, extendF, nothing } from '@/utils'
import { getParamState } from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC2'

export default {
    name: 'workV2_work07table_271tableV10DHC2_zongheng', // 如果想用缓存必须声明页面name
    components: { tab },
    data () {
        return {
            dataSet: {
            },
            search: {
            },
            loading: {
                table: false // 表格加载
            },
            page: { }, // 不分页
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            end1: 1 // 防呆设计
        }
    },
    methods: {
        initTable () { // 初始化表格 [[模版方法不要动]]
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
        },
        hendleSort (param) { // 排序功能 [[模版方法不要动]]
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        ajax: function () { // 业务ajax [[模版方法不要动]]
            const data = [
                {name: '比目鱼', data1: '1.2.3.4', data2: '1.2.3.4', data3: '1.2.3.4', data4: '1.2.3.4', data5: '1.2.3.4', data6: '1.2.3.4'},
                {name: '二郎山', data1: '1.2.3.4', data2: '1.2.4.4', data3: '1.2.3.4', data4: '1.2.3.4', data5: '1.2.3.4', data6: '1.2.8.4'},
                {name: '仙人府邸', data1: '1.2.3.4', data2: '1.2.3.4', data3: '1.2.3.4', data4: '1.2.3.4', data5: '1.2.3.4', data6: '1.2.3.4'},
                {name: '槟榔头', data1: '1.2.3.4', data2: '1.2.3.4', data3: '1.2.5.4', data4: '1.2.3.4', data5: '1.2.3.4', data6: '1.2.3.4'},
                {name: '玉山', data1: '1.2.3.4', data2: '1.2.3.4', data3: '1.2.3.4', data4: '1.2.3.4', data5: '1.2.7.4', data6: '1.2.3.4'}
            ]
            const titles = [] // 比目鱼 二郎山 仙人府邸 ...
            const attrs = [] // data1 data2 data3 ...
            const keys = [] //  f1 f2 f3 ...
            const datas = [] // {attr: 'data1', f1: '1.2.3.4', f2: '1.2.3.4', f3: '1.2.3.4', f4: '1.2.3.4', f5: '1.2.3.4'}
            for (var i0 = 0, l0 = data.length; i0 < l0; i0++) {
                titles.push(data[i0].name)
            }
            var fff = 1
            for (var key in data[0]) {
                if (key === 'name') { continue; }
                attrs.push(key)
                keys.push('f' + fff++)
            }
            for (var i1 = 0, l1 = attrs.length; i1 < l1; i1++) {
                var obj = {attr: attrs[i1]}
                for (var i2 = 0, l2 = data.length; i2 < l2; i2++) {
                    obj[keys[i2]] = data[i2][attrs[i1]]
                }
                datas.push(obj)
            }
            const columns = [{'title': 'name ->', 'minWidth': 100, 'key': 'attr'}]
            const func = (attr) => {
                return (h, params) => {
                    const row = params.row;
                    return h('div', { style: { 'color': (row[attr] === row[keys[0]]) ? 'gray' : 'red' } }, row[attr])
                }
            }
            for (var i3 = 0, l3 = titles.length; i3 < l3; i3++) {
                columns.push({'title': titles[i3], 'minWidth': 100, 'key': keys[i3], 'render': func(keys[i3])})
            }
            this.columns = columns
            this.tableData = datas
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
    }
}
</script>
