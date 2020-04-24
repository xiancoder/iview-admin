<template>
    <sparkline :indicatorStyles="spIndicatorStyles1">
        <sparklineLine :data="spData1" :limit="spData1.length" :styles="spLineStyles1" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 数据集合
            spData1: (() => {
                const len = 50
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            // 指示器样式
            spIndicatorStyles1: false,
            // 折线样式
            spLineStyles1: {
                stroke: '#54a5ff'
            }
        }
    }
}
</script>
