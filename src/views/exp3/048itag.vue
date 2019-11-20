<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Iview] Tag标签</div>
            <div class="blogContent" v-highlight>
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
                <br /><br />
                <Tag type="border">标签三</Tag>
                <Tag type="border" closable>标签四</Tag>
                <Tag type="dot">标签一</Tag>
                <Tag type="dot" closable>标签二</Tag>
                <br /><br />
                <Tag color="default">default</Tag>
                <Tag color="primary">primary</Tag>
                <Tag color="success">success</Tag>
                <Tag color="error">error</Tag>
                <Tag color="warning">warning</Tag>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="yellow">yellow</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
                <Tag color="#FFA2D3">Custom Color</Tag>
                <br><br>
                <Tag type="border" closable color="primary">标签一</Tag>
                <Tag type="border" closable color="success">标签二</Tag>
                <Tag type="border" closable color="error">标签三</Tag>
                <Tag type="border" closable color="warning">标签四</Tag>
                <br><br>
                <Tag type="dot" closable color="primary">标签一</Tag>
                <Tag type="dot" closable color="success">标签二</Tag>
                <Tag type="dot" closable color="error">标签三</Tag>
                <Tag type="dot" closable color="warning">标签四</Tag>
                <br /><br />
                <p>设置属性 checkable，可以对标签进行选择，属性 checked 控制当前选择状态。</p>
                <Tag checkable color="primary">标签一</Tag>
                <Tag checkable color="success">标签二</Tag>
                <Tag checkable color="error">标签三</Tag>
                <Tag checkable color="warning">标签四</Tag>
                <br /><br />
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
            show: true
        }
    },
    methods: {
        handleClose () {
            this.show = false
        }
    },
    mounted () {
    }
}
</script>
