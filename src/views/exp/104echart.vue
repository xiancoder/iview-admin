<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">echarts 图表插件</div>
            <div class="blogContent" v-highlight>
                <Card shadow>
                    <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源">
                    </chart-pie>
                </Card>
                <Card shadow>
                    <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量">
                    </chart-bar>
                </Card>
                <Card shadow>
                    <chart-type1 style="height: 500px;" :value="type1Data" text="各种数据的总计">
                    </chart-type1>
                </Card>
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
import ChartType1 from '@C/charts/type1.vue'
export default {
    components: { ChartPie, ChartBar, ChartType1 },
    data () {
        return {
            pieData: [
                { value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ],
            barData: { Mon: 13253, Tue: 34235, Wed: 26321, Thu: 12340, Fri: 24643, Sat: 1322, Sun: 1324 },
            type1Data: [
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
