<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">复写路由 push 方法</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 测试有效 代码写法可以借鉴</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>解决vue项目路由出现 message: "Navigating to current location (XXX) is not allowed" 的问题</p>
                <p>原因：在路由中添加了相同的路由。 解决： 重写路由的push方法</p>
                <p>在src/router/index.js 里面import Router from 'vue-router'下面写入下面方法即可</p>
                <p></p>
                <script type="text/js">
                    // 重写路由的push方法
                    const routerPush = Router.prototype.push
                    Router.prototype.push = function push(location) {
                        return routerPush.call(this, location).catch(error=> error)
                    }
                </script>
                <p><Icon type="md-checkmark" style="color:red"/> 页面逻辑错误 不应该使用如此方式进行遮蔽处理 原则问题</p>
                <p><Icon type="md-checkmark" style="color:red"/> 禁用此代码 但可借鉴参考</p>
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
