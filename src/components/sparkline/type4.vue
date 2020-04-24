<template>
    <sparkline>
        <sparklineBar
        :data="spData4"
        :margin="spMargin4"
        :limit="spData4.length"
        :styles="spBarStyles4"
        :refLineStyles="spRefLineStyles4" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 数据集合
            spData4: (() => {
                const len = 10
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            // margin
            spMargin4: 2,
            spBarStyles4: {
                fill: '#54a5ff'
            },
            spLineStyles4: {
                stroke: '#d14'
            },
            spRefLineStyles4: {
                stroke: '#d14',
                strokeOpacity: 1,
                strokeDasharray: '3, 3'
            }
        }
    }
}
</script>
