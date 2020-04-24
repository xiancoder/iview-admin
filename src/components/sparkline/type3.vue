<template>
    <sparkline width="100" height="30" :indicatorStyles="spIndicatorStyles3" :tooltipProps="spTooltipProps3">
        <sparklineCurve
        :data="spData3"
        :limit="spData3.length"
        :spotlight="spIndex3"
        :styles="spCurveStyles3"
        :spotStyles="spSpotStyles3"
        :spotProps="spSpotProps3"
        :refLineType="spRefLineType3"
        :refLineStyles="spRefLineStyles3"
        :textStyles="spTextStyles3" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 数据集合
            spData3: (() => {
                const len = 15
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            // 曲线样式
            spCurveStyles3: {
                stroke: '#54a5ff',
                fill: '#000'
            },
            // 结点样式
            spSpotStyles3: {
                fill: '#54a5ff'
            },
            // 结点属性
            spSpotProps3: {
                size: 2
            },
            // 参考线种类：'max', 'min', 'mean', 'avg', 'median', 'custom' or false
            spRefLineType3: 'avg',
            // 参考线样式
            spRefLineStyles3: {
                stroke: '#d14',
                strokeOpacity: 1,
                strokeDasharray: '2, 2'
            },
            // 当前结点
            spIndex3: 3,
            // 字体样式
            spTextStyles3: {
                fill: '#d14',
                fontSize: '12'
            },
            // 指示器样式
            spIndicatorStyles3: {
                stroke: '#000'
            },
            // tooltip属性（通常用于自定义提示信息, formatter方法参数为数据value和颜色color对象）
            spTooltipProps3: {
                formatter (val) {
                    return `当前数据为：<label style="color:${val.color};font-weight:bold;">${val.value}</label>`
                }
            }
        }
    }
}
</script>
