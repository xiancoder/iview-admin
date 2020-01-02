<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">opacity透明度有坑</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>块级元素你使用了opacity来做透明度的话 它会使子元素跟着也透明</p>
                <script type="text/css">
                    .box1{ background: red; height: 100px; width: 150px; opacity:0.5; }
                </script>
                <div style="background: #ddd;">
                    <div class="box1">
                        <div class="item1">123456</div>
                    </div>
                </div>
                <p>解决办法是使用rgba来做透明度，它将不会影响其子元素（完美）！</p>
                <script type="text/css">
                    .box2{ background: rgba(225,0,0,0.5); height: 100px; width: 150px; }
                </script>
                <div style="background: #ddd;">
                    <div class="box2">
                        <div class="item1">123456</div>
                    </div>
                </div>
                <script type="text/css">
                    .opaque1 { opacity: .5; } // for all other browsers
                    .opaque2 { filter: alpha(opacity=50); } // for IE5-7
                    .opaque3 { -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; } // for IE8
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
<style>
    .box1{ background: red; height: 100px; width: 150px; opacity:0.5; }
    .box2{ background: rgba(225,0,0,0.5); height: 100px; width: 150px; }
</style>
