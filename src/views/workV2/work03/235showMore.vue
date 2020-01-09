<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">基于active,checked等状态类名的web前端交互开发</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 纯css实现的查看更多效果</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div :class="aaa">
                    <span>flv.js-B站HTML5播放器内核开源 项目地址：https://github.com/Bilibili/flv.js一个纯JS的不依赖Flash的HTML5 Flash视频 (FLV)播放器！ 本项目受hls.js启发，需要依赖Media Source Extensions才能生效。flv.js-B站HTML5播放器内核开源 项目地址：https://github.com/Bilibili/flv.js一个纯JS的不依赖Flash的HTML5 Flash视频 (FLV)播放器！ 本项目受hls.js启发，需要依赖Media Source Extensions才能生效。flv.js-B站HTML5播放器内核开源 项目地址：https://github.com/Bilibili/flv.js一个纯JS的不依赖Flash的HTML5 Flash视频 (FLV)播放器！ 本项目受hls.js启发，需要依赖Media Source Extensions才能生效。</span>
                    <div @click="aaa.active=!aaa.active" class="more">更多↓</div>
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
<script>
export default {
    data () {
        return {
            aaa: {active: false, box: true}
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style scoped>
    .box { max-height: 80px; transition: max-height .25s; position: relative; overflow: hidden; width: 400px; }
    .box .more { position: absolute; width: 100%; padding-top: 20px; bottom: 0; left: 0; background: linear-gradient(to bottom, hsla(0,0%,100%,0), hsla(0,0%,100%,.9) 50%, hsla(0,0%,100%,1)); }
    .box.active { max-height: 200px; }
    .box.active > .more { display: none; }
</style>
