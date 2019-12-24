<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">边框样式列举</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <div id="repeat">图片将会循环平铺到整个边框区域。</div>
                <div id="stretch">图片将会拉伸平铺到整个边框区域。</div>
                <div id="round">图片将会循环平铺到整个边框区域。</div>
                <script type="text/css">
                    #repeat {
                        border: 15px solid transparent;
                        padding: 10px 20px;
                        -moz-border-image:url("img.border/border.png") 30 30 round; /* Old Firefox */
                        -webkit-border-image:url("img.border/border.png") 30 30 round; /* Safari */
                        -o-border-image:url("img.border/border.png") 30 30 round; /* Opera */
                        border-image:url("img.border/border.png") 30 30 round;
                    }
                    #stretch {
                        border: 15px solid transparent;
                        padding: 10px 20px;
                        -moz-border-image:url("img.border/border.png") 30 30 stretch; /* Old Firefox */
                        -webkit-border-image:url("img.border/border.png") 30 30 stretch; /* Safari */
                        -o-border-image:url("img.border/border.png") 30 30 stretch; /* Opera */
                        border-image:url("img.border/border.png") 30 30 stretch;
                    }
                    #round {
                        border: 45px solid transparent;
                        padding: 10px 20px;
                        -moz-border-image:url("img.border/bg-pawprints-all.jpg") 45 45 round; /* Old Firefox */
                        -webkit-border-image:url("img.border/bg-pawprints-all.jpg") 45 45 round; /* Safari */
                        -o-border-image:url("img.border/bg-pawprints-all.jpg") 45 45 round; /* Opera */
                        border-image:url("img.border/bg-pawprints-all.jpg") 45 45 round;
                    }
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
<style scope>
    #repeat {
        border: 15px solid transparent;
        padding: 10px 20px;
        -moz-border-image:url("/img.border/border.png") 30 30 round; /* Old Firefox */
        -webkit-border-image:url("/img.border/border.png") 30 30 round; /* Safari */
        -o-border-image:url("/img.border/border.png") 30 30 round; /* Opera */
        border-image:url("/img.border/border.png") 30 30 round;
    }
    #stretch {
        border: 15px solid transparent;
        padding: 10px 20px;
        -moz-border-image:url("/img.border/border.png") 30 30 stretch; /* Old Firefox */
        -webkit-border-image:url("/img.border/border.png") 30 30 stretch; /* Safari */
        -o-border-image:url("/img.border/border.png") 30 30 stretch; /* Opera */
        border-image:url("/img.border/border.png") 30 30 stretch;
    }
    #round {
        border: 45px solid transparent;
        padding: 10px 20px;
        -moz-border-image:url("/img.border/bg-pawprints-all.jpg") 45 45 round; /* Old Firefox */
        -webkit-border-image:url("/img.border/bg-pawprints-all.jpg") 45 45 round; /* Safari */
        -o-border-image:url("/img.border/bg-pawprints-all.jpg") 45 45 round; /* Opera */
        border-image:url("/img.border/bg-pawprints-all.jpg") 45 45 round;
    }
</style>
