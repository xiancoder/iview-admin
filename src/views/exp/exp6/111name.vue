<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">严格遵守命名规范</div>
            <div class="blogContent" v-highlight>
                <p>驼峰写法 / camelCase命名法 -- aaBbCc</p>
                <p>匈牙利命名 -- <del>sAaBbCc (s代表类型)</del></p>
                <p>帕斯卡命名法 / 大驼峰命名法 -- <del>AaBbCc</del></p>
                <p>kebab命名法 -- aa-bb-cc</p>
                <p>snakeCase命名法 -- aa_bb_cc</p>
                <p><b>列举这些的目的是严禁自定义命名格式 例如 2b_Extension</b></p>
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
    methods: {},
    mounted () {
    }
}
</script>
