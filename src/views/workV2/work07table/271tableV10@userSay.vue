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
                <div class="blogTitle">产品/测试/开发 反映注意的点</div>
                <div class="blogContent" v-highlight>
                    <p>2018年6月12日08:30:00 测试提出bug "搜索后的内容应该回归第一页" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 列明交叉影响 </p>
                    <Tag color="green">v10已经投入使用</Tag>
                    <hr />
                    <p>2019年3月5日12:59:53 产品提出需求 "去掉某些功能项连带的逻辑(为保密)" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 各种功能项的作用必须能从名字看出来 </p>
                    <Tag color="green">v10已经投入使用</Tag>
                    <hr />
                    <p>2019年12月3日13:46:55 运营反应 "不小心输入的空格总会影响搜索结果" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 v-model.trim </p>
                    <Tag color="green">v10已经投入使用</Tag>
                    <hr />
                    <p>2020年3月31日11:38:39 我发现 vm.$data可以获取当前状态下的data，vm.$options.data可以获取到组件初始化状态下的data，具体可以看vm.$options。以前我还特地找个变量来保存 笨了</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案如下 </p>
                    <script type="text/js">
                        hendleReset () { // 重置
                            extend(this.search, this.$options.data().search) // 重置表现搜索项成备份搜索项
                            this.hendleSearch()
                        },
                    </script>
                    <Tag color="green">v10已经投入使用</Tag>
                    <hr />
                    <p>2020年3月31日13:42:46 想起谁提出的 '排序功能也加上' </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 sortable: true </p>
                    <Tag color="green">v10已经投入使用</Tag>
                    <hr />
                    <p>2020年3月31日17:56:19 产品剔除提出的 '如果下拉框内容超级多 想输入字符匹配' </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 Select filterable </p>
                    <Tag color="green">v10已经投入使用</Tag>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 autoComplete 控件 </p>
                    <Tag color="green">控件已经分析整理</Tag>
                    <hr />
                    <p>2020年4月13日17:57:01 如果搜索项的改变引起表格的明显变化(如增删某列) </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 需要注意搜索过后即ajax完成再执行显隐 </p>
                    <Tag color="green">控件已经分析整理</Tag>
                    <hr />
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tab from './271tableV10'

export default {
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
