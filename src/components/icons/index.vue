<template>
    <i :class="`iconfont icon-${type}`" :style="styles"></i>
</template>
<script>
// import 'public/iconfont/index.css' // 不行
// import '/iconfont/index.css' // 不行

export default {
    name: 'Icons',
    props: {
        type: { type: String, required: true },
        color: { type: String, default: '#5c6b77' },
        size: { type: Number, default: 16 }
    },
    computed: {
        styles () {
            return {
                fontSize: `${this.size}px`,
                color: this.color
            }
        }
    },
    mounted () {
        const id = 'iconfont'
        if (!document.getElementById(id)) {
            var style1 = document.createElement('link')
            style1.id = id
            style1.href = '/iconfont/index.css'
            style1.rel = 'stylesheet'
            document.head.appendChild(style1)
        }
    }
}
</script>
