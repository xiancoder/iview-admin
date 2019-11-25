<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">charts 图表插件</div>
            <div class="blogContent" v-highlight>
                <Card shadow>
                    <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源">
                    </chart-pie>
                </Card>
                <p></p>
                <script type="text/html">
                </script>
                <Card shadow>
                    <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量">
                    </chart-bar>
                </Card>
                <p></p>
                <script type="text/html">
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
import ChartPie from '@C/charts/pie.vue'
import ChartBar from '@C/charts/bar.vue'
export default {
    components: { ChartPie, ChartBar },
    data () {
        return {
            pieData: [
                { value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ],
            barData: { Mon: 13253, Tue: 34235, Wed: 26321, Thu: 12340, Fri: 24643, Sat: 1322, Sun: 1324 }
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
