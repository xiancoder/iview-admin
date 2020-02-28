<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">图片占位符工具placehold.it</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 快速准备所需宽高的测试图片</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>最近在学习新技能的时候，发现了一个图片占位符工具，感觉挺好用的</p>
                <p>用法很简单，只需要在 placehold.it 的 URL 后面加上图片尺寸和颜色的参数，就可以快速生成美观的占位图啦</p>
                <p></p>
                <script type="text/html">
                    <img src="http://placehold.it/400x200/">
                    <img src="http://placehold.it/400x150/ff3333/ffffff">
                    <img src="http://placehold.it/500x200/eeee00/000000?text=placeholder picture">
                </script>
                <p><img src="http://placehold.it/400x200/"></p>
                <p><img src="http://placehold.it/400x150/ff3333/ffffff"></p>
                <p><img src="http://placehold.it/500x200/eeee00/000000?text=placeholder picture"></p>
                <p>第一个参数是图片尺寸，在 URL 后添加 width x height 即可。</p>
                <p>在尺寸参数后面是图片背景色 及文字颜色，在 URL 后继续添加 background-color / text-color即可。使用16进制,不需要写 #。</p>
                <p>图片类型可以放在任意一项参数后面，默认为 gif 格式。</p>
                <p>最后一个参数是图片上显示的文字，在URL最后添加 ?text=placeholder 即可。空格可以用 + 表示。</p>
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
