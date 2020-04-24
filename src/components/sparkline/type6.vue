<template>
    <sparkline>
        <sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="20" :styles="spLineStyles7" />
        <sparklineBar :data="spData8" :limit="20" :styles="spBarStyles8" />
    </sparkline>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            spData7: (() => {
                const len = 30
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            spHasSpot7: true,
            spLineStyles7: {
                stroke: '#54a5ff',
                strokeWidth: 2
            },
            spData8: (() => {
                const len = 20
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            spBarStyles8: {
                fill: '#d14',
                fillOpacity: 0.3
            }
        }
    },
    methods: {
        rndData () {
            const seed = Math.floor(Math.random() * 20)
            return Math.random() < 0.5 ? -seed : seed
        }
    },
    created () {
        setInterval(() => {
            this.spData7.push(this.rndData())
            this.spData8.push(this.rndData())
        }, 1e3)
    }
}
</script>
