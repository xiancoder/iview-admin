<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">怎么实现锚点定位</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/html" v-pre>
                    <div><a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" v-for="(i,index) in arr"> {{index}} </a></div>
                    <div :id="'anchor-'+index" class="item" v-for="(i,index) in arr">{{index}} <br /><br /><br /><br /><br /><br /></div>
                </script>
                <div><a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" v-for="(i,index) in arr"> {{index}} </a></div>
                <div :id="'anchor-'+index" class="item" v-for="(i,index) in arr">{{index}} <br /><br /><br /><br /><br /><br /></div>
                <script type="text/js">
                    methods: {
                        goAnchor (selector) {
                            var anchor = this.$el.querySelector(selector)
                            // document.body.scrollTop = anchor.offsetTop
                            window.scrollTo(0, anchor.offsetTop)
                        }
                    }
                </script>
                <p class="text-success">document.body.scrollTop 无效???</p>
                <p class="text-danger">window.scrollTo 有效???</p>
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
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    methods: {
        goAnchor (selector) {
            var anchor = this.$el.querySelector(selector)
            console.log(selector, anchor.offsetTop)
            // document.body.scrollTop = anchor.offsetTop
            window.scrollTo(0, anchor.offsetTop)
        }
    },
    mounted () {
    }
}
</script>
