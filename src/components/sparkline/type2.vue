<template>
    <sparkline>
        <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 数据集合
            spData2: (() => {
                const len = 10
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            // 曲线样式
            spCurveStyles2: {
                stroke: '#54a5ff'
            }
        }
    }
}
</script>
