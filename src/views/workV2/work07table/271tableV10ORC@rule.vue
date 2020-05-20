<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>新的模版</small><b>新的模版</b></h2>
            </div>
            <tab></tab>
        </div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">约定俗成编码规则</div>
                <div class="blogContent" v-highlight>
                    <p class="text-danger">1 本规范定义与2019年10月19日 如和旧版本冲突默认遵守本版本</p>
                    <p class="text-danger">2 因为有了mode编译压缩 所有变量/方法/临时方法 必须写注释</p>
                    <p class="text-danger">3 vue编程templete必须放第一位 方便第一眼看出来这是什么页面</p>
                    <p class="text-danger">3 vue编程script必须放第二位 其vue各个属性按照eslint规律排列</p>
                    <p class="text-danger">3 vue编程style必须放第三位 必须scoped 其样式模块化 零散样式进入样式库</p>
                    <p class="text-danger">4 vue编程tab必须抽取组件</p>
                    <p class="text-danger">5 编码风格因人而异 不再强求 但要保证第一要点 易读</p>
                    <p class="text-danger">5 易读的描述 缩进必须严谨 能一行写就一行 不要太长 多写注释</p>
                    <p class="text-danger">6 所有的绑定事件触发的函数统一 hendleXxxx命名 按堆排放</p>
                    <p class="text-danger">6 所有的绑定变量按堆排放 例如表格变量都放在obj中</p>
                    <p>1 能用箭头函数的/杜绝使用<b>var me = this</b></p>
                    <p>2 写HTML时候属性超过3个的话/建议换行/每行3/4/5个属性 其中vif vfor 指令提前</p>
                    <p>3 精简所有用到的组件 为模板化配凑做准备</p>
                    <p>4 声明data 按照功能划分 搜索项/分页/排序/表格列属性</p>
                    <p>5 声明method 按照需要 首先放置 goto所有可能跳转 然后 hendleAjax, hendleSearch, hendleSort, hendlePage</p>
                    <p>6 代码堆之间使用分隔符</p>
                    <p>7 ajax必须调用this.$api使用 参数转换/请求必须放在api模块</p>
                    <p>8 表格页作为最常用的第一层页面 其alert/comfime 请用js调用 其model请封装插件引入调用方便修改</p>
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
import tab from './271tableV10ORC'

export default {
    name: 'workV2_work07table_271tableV10ORC_rule', // 如果想用缓存必须声明页面name
    components: { tab },
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
