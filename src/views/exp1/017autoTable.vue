<template>
    <div class="prodectCss">
        <div style="line-height: 40px;">
            <DatePicker :value="[begin,end]" format="yyyy-MM-dd" type="daterange"
                @on-change="begin=$event[0];end=$event[1];" style="width: 180px;" placeholder="请选择时间区间">
            </DatePicker>
            <Divider type="vertical" />
            <Select v-model="claimStatus" clearable style="width: 180px;">
                <Option :value="-1">全部认领状态</Option>
                <Option :value="2">已认领</Option>
                <Option :value="1">部分认领</Option>
                <Option :value="0">未认领</Option>
            </Select>
            <Divider type="vertical" />
            <Input v-model="amount" style="width: 180px;" type="text"
                placeholder="收款金额"/>
            <Divider type="vertical" />
            <br />
            <Input v-model="keyword" style="width: 180px;" type="text"
                placeholder="付款人、付款账户"/>
            <Divider type="vertical" />
            <Select v-model="projectId" clearable style="width: 180px"
                placeholder="付款人、付款账户">
                <Option v-for="project in projectList" :value="project.id" :key="project.id">
                    {{project.name}}
                </Option>
            </Select>
            <Divider type="vertical" />
            <Button type="primary" @click="handleSearch">搜索</Button>
            <Divider type="vertical" />
            <Button type="default" @click="handleReset">重置</Button>
            <Divider type="vertical" />
            <span style="color: red;font-size: 14px">提示：为保证足够的认领时间，每月30日12:00前必须上传款项。</span>
        </div>
        <br />
        <Table border :loading="pageLoading"
            :columns="tableColumns"
            :data="tabelList">
            <template slot-scope="{ row, index }" slot="id">
                <a @click="toInfo(row.id)">{{row.id}}</a>
            </template>
            <template slot-scope="{ row, index }" slot="status">
                <span>{{statusChange(row.status)}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="op">
                <a @click="deleteMoney(row.id)">删除</a>
            </template>
        </Table>
        <br />
        <Page :total="totalCount" :current.sync="page" :page-size="pageSize"
            show-total show-elevator style="clear: both"
            @on-change="handleGoPage"/>
        <br />
        <hr />
        <div>所有变量在线查看 searchDataBack = {{searchDataBack}}</div>
        <Collapse simple>
            <Panel name="1">
                规范建议
                <div slot="content">
                    <Alert type="error">1 能用箭头函数的/杜绝使用<b>var me = this</b></Alert>
                    <Alert type="success">2 写HTML时候属性超过3个的话/建议换行/每行3个属性/其中if for 指令提前</Alert>
                    <Alert>3 精简所有用到的组件 为模板化配凑做准备</Alert>
                    <Alert>4 公共部分拆分 mixin注入式继承</Alert>
                    <Alert>5 尝试使用页面生成</Alert>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>
<script>
import { dateFormater, dateSub } from '@/utils/date'
import mixin from '@/mixin/tableMixin'
import Mock from 'mockjs' // 造假数据
export default {
    mixins: [ mixin ],
    data () {
        let today = new Date()
        let end = dateFormater(today, 'yyyy-MM-dd')
        let begin = dateFormater(dateSub(today, 6, 'd'), 'yyyy-MM-dd')
        return this.handleInit([
            { // 数据声明
                end, // 结束时间
                begin, // 开始时间
                claimStatus: -1, // 状态
                amount: '', // 啥
                keyword: '', // 啥
                projectId: '' // 下拉框数据
            },
            { // 数据源声明
                projectList: [], // 下拉框
                tabelList: [] // 表格
            },
            [ // 表格列信息
                { title: '字段id', slot: 'id' },
                { title: '字段name', key: 'name' },
                { title: '字段age', key: 'age' },
                { title: '字段status', slot: 'status' },
                { title: '字段address', key: 'address' },
                { title: '字段money', key: 'money' },
                { title: '字段date', key: 'date' },
                { title: '操作', slot: 'op' }
            ],
            { // 表格信息 # 属性不允许更改
                totalCount: 9999, // 大数字是有目的的
                pageSize: 20, // 每页数
                page: 1,
                pageLoading: false
            }
        ])
    },
    methods: {
        // 读取规范表格内容 假数据制作
        getTableList (param) {
            return new Promise((resolve, reject) => {
                console.log('读取规范表格', '参数', param)
                const Random = Mock.Random
                /*
                    'Boolean': Random.boolean, // 可以生成基本数据类型
                    'Natural': Random.natural(1, 10), // 生成1到100之间自然数
                    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
                    'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
                    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
                    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
                    'Range': Random.range(0, 10, 2), // 生成一个随机数组
                    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
                    'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
                    'Color': Random.color(), // 生成一个颜色随机值
                    'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
                    'Name': Random.name(), // 生成姓名
                    'Url': Random.url(), // 生成web地址
                    'Address': Random.province() // 生成地址
                */
                const list = []
                for (let i = 0; i < 10; i++) { // 可自定义生成的个数
                    let template = {
                        'id': Random.natural(1, 10), // 生成1到100之间自然数
                        'name': Random.name(), // 生成姓名
                        'age': Random.integer(1, 100), // 生成1到100之间的整数
                        'status': Random.integer(0, 4), // 生成1到100之间的整数
                        'address': Random.province(), // 生成地址
                        'money': Random.float(0, 10000, 0, 2), // 生成0到100之间的浮点数,小数点后尾数为0到5位
                        'date': Random.date() // 生成一个随机日期,可加参数定义日期格式
                    }
                    list.push(template)
                }
                // {code:200,data:{},msg:''}
                resolve({
                    list,
                    rowcount: 100
                })
            })
        },
        handleAjax () {
            this.pageLoading = true
            this.getTableList(this.searchData) // this.searchData 固定名称
                .then(res => {
                    this.tabelList = res.list
                    this.totalCount = res.rowcount
                    this.pageLoading = false
                })
        },
        handleSelect () {
            this.projectList = [
                { id: 'New York', name: 'New York' },
                { id: 'London', name: 'London' },
                { id: 'Sydney', name: 'Sydney' }
            ]
        },
        toInfo () {
        },
        deleteMoney () {
        },
        statusChange (s) {
            if (s === 0) {
                return '未认领'
            }
            if (s === 1) {
                return '部分认领'
            }
            if (s === 2) {
                return '已认领'
            }
            return '异常'
        }
    },
    mounted () {
        this.handleAjax()
        this.handleSelect()
    }
}
</script>
