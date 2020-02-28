<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue图片加载404解决</div>
            <div class="blogContent" v-highlight>
                <p>比如后台返回的一个图片字段pic，我们通常在代码里，会做一个检验图片，通常会像下面这样写</p>
                <script type="text/html">
                    <img :src="pic?pic:'../../assets/img/load.png'" alt="">
                </script>
                <p>这个判断只能判断pic是否存在，只有pic=''的情况下，才回显示设置的默认图片，但是如果pic这个字段是有值的呢，并且是一个错误的值，或者一个找不到的404的图片呢？这个时候就要用下面这种方法检测图片的onerror</p>
                <p>注意的几个点 1. onerror前面要用冒号 : 2. 注意看logo定义的格式，符号不要写错了，很坑啊</p>
                <script type="text/html">
                    <!--template-->
                    <img :src="pic?pic:'../../assets/img/load.png'" :οnerrοr="logo" alt="">
                    <!--script-->
                    import nullPic from '@/assets/images/img.404.jpg'
                    data() {
                        return {
                            logo: 'this.src="' + require('../../assets/image/img.404.jpg') + '"'  ,
                        }
                    },
                </script>
                <hr />
                <p>在后台数据源不可控的情况下，很有可能出现商品图片 404 的情况，而随之而来的就是界面布局错乱。例如，下图，右侧商品图片丢失，导致图片外层 div 无法计算高度，以至于排版错乱。</p>
                <p>VueJS 处理 404 的方法：</p>
                <p>首先在 HTML 模板中，加上 error 处理函数</p>
                <p>img :src="product.image" alt="" @error="show_default_image"</p>
                <p>然后在 vue 实例的方法中加上对应的处理函数，使用默认图片替换 404 错误的图片</p>
                <p>show_default_image: function(event) { event.target.src = "http://temp.im/600x600"; },</p>
                <p>如此排版就正常了</p>
                <p></p>
                <hr />
                <p>直接使用是正常的
                <img src="http://www.baidu.com/img/baidu_jgylogo3.gif">
                <hr />
                <p>οnerrοr="console.log(1)" 无效 估计是被什么包覆盖了效果</p>
                <img src="http://www.b1a3idu.com/img/123.gif" οnerrοr="console.log(1)">
                <hr />
                <p>:src="pic" οnerrοr="alert(1)" 动态src也改变不了onerror不触发问题</p>
                <img :src="pic" οnerrοr="alert(1)">
                <hr />
                <p>&lt;img :src="pic" alt="" @error="show_default_image"&gt; 通过事件监听可以生效</p>
                <img :src="pic" alt="" @error="show_default_image">
                <p class="text-info">效果可以 但使用略麻烦</p>
                <script type="text/js">
                    show_default_image: function (event) {
                        event.target.src = '/static/img.null/null.png'
                    }
                </script>
                <hr />
                <p>&lt;img v-img404 src="http://www.b1a3idu.com/img/123.gif"&gt; 指令效果</p>
                <img v-img404 src="http://www.b1a3idu.com/img/123.gif">
                <p class="text-info">效果很好 建议大范围采用</p>
                <script type="text/js">
                    mport Vue from 'vue' // 核心
                    const img404 = {
                        bind: (el, binding) => {
                            el.onerror = function (e) {
                                e.target.src = '/static/img.null/null.png'
                                el.onerror = null
                            }
                        }
                    }
                    Vue.directive('img404', img404) // 图片404的自动补偿
                    export default img404
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
import nullPic from '@/assets/images/img.404.jpg'

export default {
    data () {
        return {
            pic: 'http://localhost:40000/bexs.jpg',
            xxx2: 'this.src="' + nullPic + '"',
            nullPic
        }
    },
    methods: {
        isNullPic () {
            console.log(this)
            this.src = nullPic
        },
        xxx () {
            console.log(123)
            this.pic = '/static/img.null/null.png'
        },
        show_default_image: function (event) {
            event.target.src = '/static/img.null/null.png'
        }
    },
    mounted () {
    }
}
</script>
