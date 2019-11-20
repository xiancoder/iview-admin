<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">自动根据div的宽度来计算文本字体大小</div>
            <div class="blogContent" v-highlight>
                <div v-autofs style="width:200px;height:100px;background:Red;color: #fff;">新一代网站域名.</div>
                <p class="text-danger">没搞定</p>
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
