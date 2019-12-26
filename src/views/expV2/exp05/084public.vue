<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">访问 public 文件夹资源 访问assets文件夹资源 的 方法</div>
            <div class="blogContent" v-highlight>
                <p>正常页面访问public中的图片 (:src才能引发资源引入)</p>
                <p><img :src="'/www.qichacha.com.png'" alt=""/></p>
                <script type="text/html">
                    <img :src="'/www.qichacha.com.png'" alt=""/>
                    <img src="./www.qichacha.com.png" alt="" /> // 编译不成功 因为找不到
                </script>
                <p>import 引入图片并使用</p>
                <p><img :src="maxLogo" key="max-logo" /></p>
                <p>黑白图像 -- 见xianUtil.css</p>
                <p class="xianUtil">
                    <img :src="maxLogo" key="max-logo" class="BlackAndWhitePhoto" />
                </p>
                <script type="text/js">
                    import maxLogo from '@/assets/images/logo.jpg'
                    data () { return { maxLogo } },
                </script>
                <script type="text/html">
                    <img :src="maxLogo" key="max-logo" />
                </script>
                <p>静态index模版使用</p>
                <script type="text/html">
                    <img src="<%= BASE_URL %>www.qichacha.com.png"/>
                </script>
                <p>页面样式引用</p>
                <script type="text/html">
                    .box1{
                        background: url(../../../assets/images/login-bg.jpg); background-position: center; background-attachment: fixed;
                        position: relative; height: 400px; width: 100%;
                    }
                </script>
                <div class="box1">
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                </div>
                <script type="text/html">
                    .box2{
                        background: url(/bg.gif);
                    }
                </script>
                <div class="box2">
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                    <p>asdasdfasdfasdfasdfasdf</p>
                </div>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<style>
    .box1{
        background: url(../../../assets/images/login-bg.jpg); background-position: center; background-attachment: fixed;
        position: relative; height: 400px; width: 100%;
    }
    .box1 > *{ z-index: 10; color: #fff; position: relative; }
    .box1:after {
        content: " "; display: block;
        position: absolute; z-index: 2; bottom: 0; left: 0; top: 0; right: 0;
        background: #2b252b; opacity: .8;
    }
    .box2{
        background: url(/bg.gif);
    }
</style>
<script>
import maxLogo from '@/assets/images/logo.jpg'
export default {
    data () {
        return {
            maxLogo
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
