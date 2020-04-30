<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">跳转前后逻辑 bug/误区</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    1、
                    location.reload(true)
                    alert("我会不会弹出来？");
                    2、
                    location.href="https://www.baidu.com";
                    alert("我会不会弹出来？");
                    3、
                    location.reload(true);
                    location.href="https://www.baidu.com";
                    4、
                    location.href="https://www.baidu.com";
                    location.reload(true);
                </script>
                <p>不要以为执行了跳转（或刷新），后面的js就不执行了</p>
                <p>1、执行了弹窗 2、执行了弹窗 3、执行了跳百度 4、执行了刷新，没有跳百度</p>
                <p>单线程 除非 return throw 这些中止语句 其他的都停下来 </p>
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
