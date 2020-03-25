<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="ivu-icon ivu-icon-ios-arrow-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
import { on, off } from '@/utils/event'
import { scrollTop } from '@/utils/dom'
const prefixCls = 'ivu-back-top'
export default {
    name: 'ABackTop',
    props: {
        height: { type: Number, default: 400 },
        bottom: { type: Number, default: 32 },
        right: { type: Number, default: 18 },
        duration: { type: Number, default: 1000 },
        container: { type: String, default: 'body' }
    },
    data () {
        return {
            backTop: false
        }
    },
    mounted () {
        // window.addEventListener('scroll', this.handleScroll, false)
        // window.addEventListener('resize', this.handleScroll, false)
        on(this.containerEle, 'scroll', this.handleScroll)
        on(this.containerEle, 'resize', this.handleScroll)
    },
    beforeDestroy () {
        // window.removeEventListener('scroll', this.handleScroll, false)
        // window.removeEventListener('resize', this.handleScroll, false)
        off(this.containerEle, 'scroll', this.handleScroll)
        off(this.containerEle, 'resize', this.handleScroll)
    },
    computed: {
        classes () { return [ `${prefixCls}`, { [`${prefixCls}-show`]: this.backTop } ] },
        styles () { return { bottom: `${this.bottom}px`, right: `${this.right}px` } },
        innerClasses () { return `${prefixCls}-inner` },
        containerEle () { return this.container === 'body' ? window : document.querySelector(this.container) }
    },
    methods: {
        handleScroll () {
            const el = this.container === 'body' ? document.querySelector('html') : this.containerEle
            this.backTop = el.scrollTop >= this.height
        },
        back () {
            const el = this.container === 'body' ? document.querySelector('html') : this.containerEle
            const sTop = el.scrollTop
            scrollTop(this.containerEle, sTop, 0, this.duration)
            this.$emit('on-click')
        }
    }
}
</script>
