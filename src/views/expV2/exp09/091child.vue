<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">css选择器 child节点</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <ul class="aa2"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                <ul class="aa3"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                <ul class="aa4"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                <ul class="aa5"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                <ul class="aa6"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                <script type="text/css">
                    ul.aa2 li { display:inline-block;border-right: 3px solid red; }
                    ul.aa2 li:last-child { border-right: none; }
                    ul.aa3 li { display:inline-block; }
                    ul.aa3 li:not(:last-child) { border-right: 3px solid red; }
                    ul.aa4 li { display:inline-block; }
                    ul.aa4 li:first-child ~ li { border-left: 3px solid red; }
                    ul.aa5 li { display:inline-block; }
                    ul.aa5 > li:not(:last-child)::after { content: ","; }
                    ul.aa6 li { display:inline-block; }
                    ul.aa6 li:nth-child(-n+3) { color:red; }
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
<style scoped>
    ul.aa2 li { display:inline-block;border-right: 3px solid red; }
    ul.aa2 li:last-child { border-right: none; }
    ul.aa3 li { display:inline-block; }
    ul.aa3 li:not(:last-child) { border-right: 3px solid red; }
    ul.aa4 li { display:inline-block; }
    ul.aa4 li:first-child ~ li { border-left: 3px solid red; }
    ul.aa5 li { display:inline-block; }
    ul.aa5 > li:not(:last-child)::after { content: ","; }
    ul.aa6 li { display:inline-block; }
    ul.aa6 li:nth-child(-n+3) { color:red; }
</style>
