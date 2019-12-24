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
                    data() {
                        return {
                            logo: 'this.src="' + require('../../assets/img/videonull.png') + '"'  ,
                        }
                    },
                </script>
                <hr />
                <img :src="pic?pic:nullPic" οnerrοr="alert(123)" alt="">
                <img :src="pic?pic:nullPic" :οnerrοr="isNullPic" alt="">
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
import nullPic from '@/assets/images/logo.jpg'

export default {
    data () {
        return {
            pic: 'http://http://localhost:40000/bexs.jpg',
            isNullPic: 'this.src="' + nullPic + '"'
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
