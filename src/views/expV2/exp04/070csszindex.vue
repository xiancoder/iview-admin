<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">广告中遇到的z-index上限的说明</div>
            <div class="blogContent" v-highlight>
                <p>z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。</p>
                <p><b>所有主流浏览器都支持 z-index 属性。</b></p>
                <p>注释：任何的版本的 Internet Explorer （包括 IE8）都<b>不支持</b>属性值 "inherit"。</p>
                <p>注释：元素可拥有<b>负</b>的 z-index 属性值。</p>
                <p>注释：Z-index <b>仅能在定位元素</b>上奏效（(position属性值为 relative 或 absolute 或 fixed的对象)）！</p>
                <p>这个属性<b>不会作用于窗口控件</b>，如 select 对象。</p>
                <p class="text-danger">z-index最大值是<b>2147483647</b>,超出后不会报错 但是 max+1 效果等同 max+100</p>
                <p>注意: 同为max层级的同级div的覆盖方式是 后来者居上</p>
                <p>注意: 同为max层级的不同级div的覆盖方式是 拼爹</p>
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
