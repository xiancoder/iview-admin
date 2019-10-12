<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">void(0)依然执行跳转的bug</div>
            <div class="blogContent" v-highlight>
                <p>火狐、Safari的js用javascript:void(0);依然执行跳转的bug</p>
                <p>2017年06月06日 14:57:57 多来哈米 阅读数 1599</p>
                <p>版权声明：本文为博主原创文章，遵循 CC 4.0 by-sa 版权协议，转载请附上原文出处链接和本声明。</p>
                <p>本文链接：https://blog.csdn.net/hgg923/article/details/72878460</p>
                <p>今天用户反馈，火狐下面这段代码有问题：</p>
                <script type="text/xianjs">
                    <a href="javascript:void(0);" ><span class="chat">联系客服</span></a>
                </script>
                <p>用了这么久的javascript:void(0);，居然有问题，尼玛好尴尬，网上说加οnclick="return false"</p>
                <script type="text/xianjs">
                    <a href="javascript:void(0);" οnclick="return false;" >test</a>
                </script>
                <p>如果是要手指针还是老实写cursor:pointer;的样式吧</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
