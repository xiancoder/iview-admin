<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">前端和设计的交流</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 很多设计稿不用真实数据，不做异常处理，没有分页，不做边界限制，这可能和原型有关 经常造成文字折行，溢出，分段，分页提示等没有设计稿，研发团队就按自己的理解出戏。</p>
                <p><Icon type="md-checkmark" style="color:green"/> 最好是使用真实数据</p>
                <p><Icon type="md-checkmark" style="color:green"/> 页面无数据/某字段为空 时候的默认显示</p>
                <p><Icon type="md-checkmark" style="color:green"/> 分页</p>
                <p><Icon type="md-checkmark" style="color:green"/> 边界控制 如文本过长</p>
                <p><Icon type="md-close" style="color:red"/> 不是所有的前端工程师都会认真按UI自检规范过一遍，所以会有各种遗漏和自己完全注意不到的细节。 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 这体现在对齐，留白，颜色，高亮，hover，提示等细节上</p>
                <p><Icon type="md-close" style="color:red"/> 前端要适配的设备太多了，尺寸大小，分辨率高低，留海，曲面屏，长屏等等都会导致用户看到的并不是完美的UI图。 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 确认设计的比例 原型的基本像素宽度</p>
                <p><Icon type="md-close" style="color:red"/> 同样的代码在不同浏览器不同版本上都有差异，那只能根据浏览器做兼容了。 </p>
                <p><Icon type="md-checkmark" style="color:green"/> ...</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p><Icon type="md-checkmark" style="color:green"/> 1 建立公共组件库</p>
                <p><Icon type="md-checkmark" style="color:green"/> 2 建立设计规范，细致到字体字号间距</p>
                <p><Icon type="md-checkmark" style="color:green"/> 3 简化设计稿，不做复杂交互和控件</p>
                <p><Icon type="md-checkmark" style="color:green"/> 4 增加自检标准，将经常犯错的，容易遗忘的细节挨个列出来</p>
                <p><Icon type="md-checkmark" style="color:green"/> 5 UI在测试阶段参与验收</p>
                <p><Icon type="md-checkmark" style="color:green"/> 6 定期开迭代总结会，更新组件库，设计规范和自检标准</p>
                <p><Icon type="md-checkmark" style="color:green"/> 7 将项目对UI的要求分级，确认当前项目所在阶段，降低期望值</p>
                <p><Icon type="md-checkmark" style="color:green"/> 8 提升团队技术水准，提升效率，有时间了，才有优化的可能</p>
                <p><Icon type="md-checkmark" style="color:green"/> 9 明确兼容浏览器的版本，厂商，明确自适应和响应式的要求</p>
                <p><Icon type="md-checkmark" style="color:green"/> 10 设计之初，先将所有的组件归纳在一起，写样式之初，先将公共样式汇总在一个页面</p>
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
