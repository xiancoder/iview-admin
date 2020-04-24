<template>
    <sparkline width="30">
        <!-- 同一视图区有且只有一个饼状图 -->
        <sparklinePie :data="spData9" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 饼状图数据跟以上图形有区别，数据包含数据值及颜色值，例如[{value: 1, color: '#000'}...]
            spData9: this.rndData2()
        }
    },
    methods: {
        rndData2 () {
            return Array.from({
                length: 3
            }, () => {
                return {
                    value: Math.floor(Math.random() * 10),
                    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }
            })
        }
    },
    created () {
        setInterval(() => {
            this.spData9 = this.rndData2()
        }, 5000)
    }
}
</script>
