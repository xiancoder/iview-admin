<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue图片懒加载 (顺带404补偿)</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
                    <img v-lazy="'/static/img/1.png'">
                </script>
                <img v-lazy="'/static/img.noplace/bg007.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg017.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg027.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg038.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg040.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg041.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg045.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg048.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg059.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg060.gif'"/><br />
                <img v-lazy="'/static/img.noplace/bg104.png'"/><br />
                <img v-lazy="'/static/img.noplace/bg134.png'"/><br />
                <img v-lazy="'/static/img.noplace/bg146.png'"/><br />
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import '@/plugins/vueLazyload'

export default {
    data () {
        return {
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
