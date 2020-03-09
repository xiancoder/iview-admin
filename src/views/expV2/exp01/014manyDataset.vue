<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue.set 与 vue.observable 的区别</div>
            <div class="blogContent" v-highlight>
                <p>其实最后都是劫持obj的setter</p>
                <p>set 意思是data 函数里已经有这个obj了， 但是没有这个属性</p>
                <p>observable 的意思是，data中连这个obj都没有</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">下拉框里的数据在多个页面有用到，不应该每次都请求一次吧</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>这个要看数据有没有实时性要求， 如果有实时性要求就得每个都请求</p>
                <p>如果没有可以选择适当的时机缓存</p>
                <p>比如:</p>
                <p>页面级缓存， 就是每个页面只请求一次</p>
                <p>系统级缓存，每次进入系统请求一次</p>
                <p>定制化缓存，把第一次请求的结果写到local中，并给一个生命周期</p>
                <p></p>
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
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
