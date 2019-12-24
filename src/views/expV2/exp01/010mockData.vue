<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">MockJs 假数据生产专家</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:46:54 实际引用不上 </p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                    <p>详细文档 : <a href="http://mockjs.com/examples.html#Random\.id\(\)">http://mockjs.com/examples.html#Random\.id\(\)</a></p>
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
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
