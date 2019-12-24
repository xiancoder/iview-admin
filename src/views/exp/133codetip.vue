<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">书写有多个属性且明显超过80字符的标签</div>
            <div class="blogContent" v-highlight>
                <p>如果一行不超过80放得下就写一行即使有三四五个属性只要看着不费力就行</p>
                <script type="text/html">
                    <uib-pagination total-items="obj3.rowcount" ng-model="obj3.page" items-per-page="obj3.pagesize" boundary-links="true">
                    </uib-pagination>
                </script>
                <p>否则就按照三个(建议)的属性切割分行放置 属性的换行与标签内容同等排列</p>
                <p>并不拘泥三个这个数字 反正是排列整齐 阅读方便 易读性很重要</p>
                <script type="text/html">
                    <uib-pagination total-items="obj3.rowcount" ng-model="obj3.page" max-size="3"
                        items-per-page="obj3.pagesize" ng-change="pageChanged(1)" boundary-links="true"
                        first-text="第一页" previous-text="上一页" next-text="下一页" last-text="最后页"
                        boundary-link-numbers="true">
                    </uib-pagination>
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
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
