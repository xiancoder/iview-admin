<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">如何解决webpack Invalid Host/Origin header问题</div>
            <div class="blogContent" v-highlight>
                <p>问题定位 这是webpack本身出于安全考虑，因为不检查主机的应用程序容易受到DNS重新绑定攻击。</p>
                <p>但是，在我们的开发环境下，可以禁用掉disableHostCheck这一配置项。</p>
                <img src="data:image/png;base64,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" alt="" />
                <script type="text/js">
                    // 解决方案
                    devServer: {
                        contentBase: resolve(__dirname, '../dist'),
                        host: '0.0.0.0',
                        disableHostCheck: true, //  新增该配置项
                        port: 4000
                    },
                </script>
                <p>所以 平时我还是尽量用ip来调试代码吧</p>
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
