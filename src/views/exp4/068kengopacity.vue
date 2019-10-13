<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">opacity透明度有坑</div>
            <div class="blogContent" v-highlight>
                <script type="text/css">
                    .box1{ background: red; height: 100px; width: 150px; opacity:0.5; }
                    .box2{ background: rgba(225,0,0,0.5); height: 100px; width: 150px; }
                </script>
                <p>块级元素你使用了opacity来做透明度的话 它会使子元素跟着也透明</p>
                <div style="background: #ddd;">
                    <div class="box1">
                        <div class="item1">123456</div>
                    </div>
                </div>
                <p>解决办法是使用rgba来做透明度，它将不会影响其子元素（完美）！</p>
                <div style="background: #ddd;">
                    <div class="box2">
                        <div class="item1">123456</div>
                    </div>
                </div>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
<style>
    .box1{ background: red; height: 100px; width: 150px; opacity:0.5; }
    .box2{ background: rgba(225,0,0,0.5); height: 100px; width: 150px; }
</style>
