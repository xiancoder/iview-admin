<template>
    <div ref="dom" class="charts"></div>
</template>
<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/utils'

echarts.registerTheme('tdTheme', tdTheme)

export default {
    name: 'ChartPie',
    props: {
        value: Array,
        text: String,
        subtext: String
    },
    data () {
        return {
            dom: null
        }
    },
    methods: {
        resize () {
            this.dom.resize()
        }
    },
    mounted () {
        this.$nextTick(() => {
            const source = [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ...this.value
            ]
            const option = {
                legend: {},
                tooltip: { trigger: 'axis', showContent: false },
                dataset: { source },
                xAxis: {type: 'category'},
                yAxis: {gridIndex: 0},
                grid: {top: '55%'},
                series: [
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {
                        type: 'pie', id: 'pie', radius: '30%', center: ['50%', '25%'],
                        label: { formatter: '{b}: {@2012} ({d}%)' },
                        encode: { itemName: 'product', value: '2012', tooltip: '2012' }
                    }
                ]
            };
            const myChart = this.dom = echarts.init(this.$refs.dom, 'tdTheme')
            myChart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: { formatter: '{b}: {@[' + dimension + ']} ({d}%)' },
                            encode: { value: dimension, tooltip: dimension }
                        }
                    });
                }
            });
            myChart.setOption(option)
            on(window, 'resize', this.resize)
        })
    },
    beforeDestroy () {
        off(window, 'resize', this.resize)
    }
}
</script>
