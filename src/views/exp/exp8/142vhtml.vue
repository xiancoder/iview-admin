<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">v-html的处理</div>
            <div class="blogContent">
                <p>双大括号会将数据解释为普通文本，而非 HTML 代码。</p>
                <p v-html="v1"></p>
                <p v-html="v2"></p>
                <p v-html="v3"></p>
                <p v-html="v4"></p>
                <p v-html="v5"></p>
                <p v-html="v6"></p>
                <p v-html="v7"></p>
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
        return {
            v1: 'v-html: 如果后端返回包含了标签的内容，可以转化为html页面的形式展示。',
            v2: 'v-html: 效果可以出来 <a href="http://www.w3school.com.cn">W3School</a> <b>啦啦啦</b> <strong>啦啦啦</strong>',
            v3: 'v-html: script 没有效果 <script> alert(123) </' + 'script>',
            v4: 'v-html: script 没有效果 <script> console.log(123) </' + 'script>',
            v5: 'v-html: 自己写样式 <code>export default {}</code>',
            v6: ('v-html: 替换script标签 <script> console.log(123) </' + 'script>').replace(/script>/g, 'code>'),
            v7: ('v-html: 替换script标签 <script> console.log(123) </' + 'script>')
                .replace(/<script>/g, '<code>&lt;script&gt;')
                .replace(/<\/script>/g, '<code>&lt;/script&gt;')
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style scope>
    code{
        background: #f9f0f2; padding: 2px 10px; color: #ff3e3e;
    }
</style>
