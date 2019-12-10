<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">(VUE)(移动端)使用路由控制收集图片浏览</div>
            <div class="blogContent" v-highlight>
                <p>详情页面点击查看大图后按手机回退键会导致回到列表，原因是退回上一路由。</p>
                <p>用户心理期待是关闭大图返回详情，解决方法如下：</p>
                <p>详情页面</p>
                <pre>this.$router.push({name:'vacation-info'，query:{id:32})</pre>
                <p>不用直接控制变量的方式，用路由控制显示隐藏</p>
                <script type="text/html">
                    computed:{
                        bigImg:function(){
                            return this.$route.query.id ? false : true;
                        }
                    },
                </script>
                <p>点击小图显示大图</p>
                <script type="text/html">
                    this.$router.push({name:'vacation-info'}); //要跟原路由不同
                </script>
                <p>点击大图显示详情页</p>
                <script type="text/html">
                    this.$router.go(-1)
                </script>
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
