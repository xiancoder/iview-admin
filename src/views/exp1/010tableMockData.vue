<template>
    <div>
        <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">MockJs 假数据生产专家</div>
            <div class="blogContent" v-highlight>
                <h4><a href="http://mockjs.com/examples.html#Random\.id\(\)">http://mockjs.com/examples.html#Random\.id\(\)</a></h4>
                <script type="text/html">
                    Mock.mock({
                        "string|1-10": "★1" // 字符串 随机1-10个文本 ★1★1
                        "number|+1": 202 // 数字 基础上随机增加 303
                        "number|1-100": 1 // 数字 随机1-100
                        "number|1-100.1-10": 1 // 数字 随机1-100 小数点后1-10位
                        "boolean|1": true // 布尔 随机
                        "object|2": { "a": "a", "b": "b", "c": "c", "d": "d" } // 对象 随机保留属性 { "a": "a", "b": "b" }
                        "object|2-4": { "a": "a", "b": "b", "c": "c", "d": "d" } // 对象 随机保留属性
                        "array|+1": [ "AMD", "CMD", "UMD" ] // 数组 取一瓢饮 保存成字符串 "AMD"
                        "array|1-10": [ "Mock.js" ] // 数组 随机个数 [ "Mock.js", "Mock.js", "Mock.js", "Mock.js", "Mock.js", "Mock.js" ]
                        'foo': 'Syntax Demo',
                        'name': function() { return this.foo } // 方法 处理一些逻辑
                        'regexp': /[a-z][A-Z][0-9]/ // 正则 "iS4"
                        'regexp': /\w\W\s\S\d\D/ // 正则 "g{ M9*"
                        'regexp': /\d{5,10}/ // 正则 "5323404423"
                        'regexp|3': /\d{5,10}\-/ // 正则 "65801094-894686653-774583-"
                        'regexp|1-5': /\d{5,10}\-/ // 正则 "10380-6879173-"
                        "nested": { "a": { "b": { "c": "Mock.js" } } },
                        "relativePath": { "a": { "b": { "c": "@../../../foo @../../../nested/a/b/c" } } // 取路径 Syntax Demo Mock.js
                    })
                    Mock.mock('@boolean()') // 布尔 true
                    Mock.mock('@natural()') // 正整数字 7775360004745658
                    Mock.mock('@natural(60, 100)') // 最大最小值 76
                    Mock.mock('@integer(60, 100)') // 正负整数最大最小值 76
                    Mock.mock('@float(60, 100, 3, 5)') // 浮点数字 83.33645
                    Mock.mock('@character()') // 特殊符号 ^
                    Mock.mock('@character("lower")') // 小写字母 "p"
                    Mock.mock('@character("upper")') // 大写字母 "X"
                    Mock.mock('@character("number")') // 数字 "8"
                    Mock.mock('@character("symbol")') // 特殊符号 "$"
                    Mock.mock('@character("aeiou")') // 字符中挑一个 a
                    Mock.mock('@string()')
                    Mock.mock('@string("lower", 5)')
                    Mock.mock('@string("upper", 5)')
                    Mock.mock('@string("number", 1, 3)')
                    Mock.mock('@string("symbol", 1, 3)')
                    Mock.mock('@string("aeiou", 1, 3)')
                    Mock.mock('@range(10)') // [0,1,2,3,4,5,6,7,8,9]
                    Mock.mock('@date()') // "1974-01-24"
                    Mock.mock('@date("yyyy yy y - MM M - dd d")') // "1987 87 87 -02 2 - 28 28"
                    Mock.mock('@time()') // "09:44:23"
                    Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")') // "19 19 07 7 14 14 00 0 707 707 PM pm 277989240707"
                    Mock.mock('@datetime()') // "1975-04-17 03:33:47"
                    Mock.mock('@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")') // "2014 14 14 07 7 18 18 09 9 09 9 59 59 15 15 335 335 AM am 1405648755335"
                    Mock.mock('@now()') // "2019-10-09 09:54:23"
                    Random.now('yyyy-MM-dd HH:mm:ss SS') // "2019-10-09 09:54:23 054"
                    Mock.mock('@paragraph()') // 生成文章
                    Mock.mock('@paragraph(1, 3)') // 上传1-3行文章
                    Mock.mock('@sentence()') // 生成句子
                    Mock.mock('@sentence(3, 5)') // 生成3-5个词汇的句子
                    Mock.mock('@word()') // 生成一个单词
                    Mock.mock('@word(3, 5)')
                    Mock.mock('@cparagraph(1, 3)') //生成一个1-3句话的中文文章
                    Mock.mock('@csentence(3, 5)') // 生成3-5个字的句子
                    Mock.mock('@cword(3, 5)') // 3-5汉字
                    Mock.mock('@cword("零一二三四五六七八九十", 5, 7)') // 3-5指定汉字
                    Mock.mock('@first()') // 英文姓
                    Mock.mock('@last()') // 英文名
                    Mock.mock('@name(true)') // 英文姓名
                    Mock.mock('@cfirst()') // 中文姓
                    Mock.mock('@clast()') // 中文名
                    Mock.mock('@cname()') // 中文姓名
                    Mock.mock('@url()')
                    Mock.mock('@domain()')
                    Mock.mock('@email()')
                    Mock.mock('@ip()')
                    Mock.mock('@region()') // 随机中文八方 "东北"
                    Mock.mock('@province()') // 随机中文省份 "海南省"
                    Mock.mock('@city()') // "承德市"
                    Mock.mock('@county()') // "铜陵县"
                    Mock.mock('@county(true)') // "上海 上海市 金山区"
                    Mock.mock('@zip()') // 邮政编码
                    Mock.mock('@id()')
                    Mock.mock('@guid()')
                    Mock.mock('@increment(1000)') // 基于参数自增
                    // 生成用户
                    const userList = Mock.mock({
                        'list|40': [{
                            'userId': '@increment(100)',
                            'userName': '@cname'
                        }]
                    });
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
        </div>
    </div>
</template>
<script>
import { dateFormat, dateSub } from '@/utils/date'
import mixin from '@/mixin/tableMixin'
import Mock from 'mockjs' // 造假数据
export default {
    mixins: [ mixin ],
    data () {
        let today = new Date()
        let end = dateFormat(today)
        let begin = dateFormat(dateSub(today, 6, 'd'))
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
