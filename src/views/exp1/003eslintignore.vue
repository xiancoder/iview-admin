<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">eslint 怎么限制只在src目录下工作？</div>
            <div class="blogContent" v-highlight>
                <p>.eslintignore了解一下</p>
                <script type="text/html">
                    .eslintignore
                    **/*.js
                    !src/**/*.js
                </script>
                <p>把 .eslint.json 放在 src 目录下，里面加上</p>
                <script type="text/html">
                    {
                        //...
                        root:true
                        //...
                    }
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
