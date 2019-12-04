<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[版本号] 统一的发布规则 强制统一运行规律</div>
            <div class="blogContent" v-highlight>
                <p>使用NPM下载和发布代码时都会接触到版本号</p>
                <p>NPM使用语义版本号来管理代码，这里简单介绍一下。</p>
                <p>语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。</p>
                <p>如果只是修复bug，需要更新Z位。</p>
                <p>如果是新增了功能，但是向下兼容，需要更新Y位。</p>
                <p>如果有大变动，向下不兼容，需要更新X位。</p>
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
