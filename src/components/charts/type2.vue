<template>
    <div ref="dom" class="charts chart-pie"></div>
</template>
<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/utils/event'

echarts.registerTheme('tdTheme', tdTheme)

export default {
    name: 'Type2',
    props: {
        value: Array,
        text: String
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
            let piePatternImg = new Image()
            piePatternImg.src = '/static/img.noplace/bg059.gif'
            let bgPatternImg = new Image()
            bgPatternImg.src = '/static/img.noplace/bg134.png'
            let legend = this.value.map(row => row.name)
            let itemStyle = { normal: { opacity: 0.7, color: { image: piePatternImg, repeat: 'repeat' }, borderWidth: 3, borderColor: '#235894' } }
            let option = {
                backgroundColor: { image: bgPatternImg, repeat: 'repeat' },
                title: { text: this.text || '饼图纹理', textStyle: { color: '#235894' } },
                tooltip: {},
                series: [{
                    name: this.text || '饼图纹理', type: 'pie', selectedMode: 'single', selectedOffset: 30, clockwise: true,
                    label: { fontSize: 18, color: '#235894' },
                    labelLine: { lineStyle: { color: '#235894' } },
                    legend: { orient: 'vertical', left: 'left', data: legend },
                    data: this.value,
                    itemStyle: itemStyle
                }]
            }
            this.dom = echarts.init(this.$refs.dom, 'tdTheme')
            this.dom.setOption(option)
            on(window, 'resize', this.resize)
        })
    },
    beforeDestroy () {
        off(window, 'resize', this.resize)
    }
}
</script>
