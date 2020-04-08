<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">数据洞察</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 请注意必须要有高度</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>数据信息来自 <a href="https://tongji.baidu.com/research/"></a></p>
                <p>------------------------------------------</p>
                <echart1 style="height: 300px;" :value="value" text="浏览器占市场比例 (2020年3月)">
                </echart1>
                <p>------------------------------------------</p>
                <chart-bar style="height: 300px;" :value="barData" text="操作系统占市场比例 (2020年3月)">
                </chart-bar>
                <p>------------------------------------------</p>
                <p>------------------------------------------</p>
                <p></p>
                <p></p>
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
import Echart1 from '@C/charts/type2'
import ChartBar from '@C/charts/bar'

export default {
    components: {
        Echart1, ChartBar
    },
    data () {
        return {
            value: [
                {value: 38.67, name: 'Chrome'},
                {value: 9.39, name: 'QQ'},
                {value: 8.72, name: '微信'},
                {value: 8.56, name: '百度'},
                {value: 8.45, name: 'IE'},
                {value: 8.06, name: 'UC'},
                {value: 5.31, name: 'Safari'},
                {value: 12.84, name: '其他'}
            ],
            barData: {
                'Win7': 47.77, 'Win10': 32.56, 'WinXP': 5.26,
                'IpadOS': 4.31, 'Win8': 3.93, 'MacOS': 3.67,
                '其他': 2.5
            }
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
