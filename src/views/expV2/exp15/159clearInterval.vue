<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue组件里的定时器要怎么销毁</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 当生命周期销毁后，并没有将组件中的计时器销毁，虽然页面上看不出来，但是如果在控制台打印的话，会发现计时器还在运行，所以要销毁计时器，避免代码一直执行 </p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/js">
                    const timer = setInterval(() => {
                        // 某些定时器操作
                        console.log(new Date())
                    }, 2e3)
                    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
                    this.$once('hook:beforeDestroy', () => {
                        clearInterval(timer)
                    })
                </script>
                <p><Icon type="md-close" style="color:red"/> vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？ </p>
                <p><Icon type="md-checkmark" style="color:green"/> 肯定要，一方面是绑定多次，另一方面是函数没释放会内存溢出 </p>
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
        const timer = setInterval(() => {
            // 某些定时器操作
            console.log(new Date())
        }, 2e3)
        // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
        this.$once('hook:beforeDestroy', () => {
            clearInterval(timer)
        })
    }
}
</script>
