<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">在css里面计算宽度</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/css">
                    /* basic calc */
                    .simpleBlock { width: calc(100% - 100px); }
                    /* calc in calc */
                    .complexBlock { width: calc(100% - 50% / 3); padding: 5px calc(3% - 2px); margin-left: calc(10% + 10px); }
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
