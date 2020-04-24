<template>
    <div>
        haha haha
        <sparkline :styles="spStyles5" :width="200" :height="100">
            <sparklineLine :data="spData5" :limit="spData5.length" :styles="spLineStyles5"/>
            <sparklineLine :data="spData6" :limit="spData6.length" :styles="spLineStyles6"/>
        </sparkline>
    </div>
</template>
<script>
import '@/plugins/sparkline'

export default {
    data () {
        return {
            // 画布样式
            spStyles5: {
                background: '#ddd'
            },
            spData5: (() => {
                const len = 10
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            spLineStyles5: {
                stroke: '#54a5ff'
            },
            spData6: (() => {
                const len = 30
                return Array.from({
                    length: len
                }, () => Math.floor(Math.random() * len))
            })(),
            spLineStyles6: {
                stroke: '#d14'
            }
        }
    }
}
</script>
