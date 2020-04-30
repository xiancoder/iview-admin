<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">z-index 互相覆盖的层级关系</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div style="background:red;height:100px;z-index: 60; position: relative;">
                    <img src="static/img.byj/3.png" alt="" style=" width: 50px; height: 50px; margin: 10px 10px 10px 0px; position: relative; z-index: 666; transition: all 300ms ease 0s; transform: translate(12px, 120px) scale(6.74, 6.74); cursor: -webkit-zoom-out;"/>
                </div>
                <div style="background:green;height:100px;z-index: 60; position: relative;">
                    <img src="static/img.byj/3.png" alt="" style=" width: 50px; height: 50px; margin: 10px 10px 10px 0px; position: relative; z-index: 666; transition: all 300ms ease 0s; transform: translate(384px, -60px) scale(6.74, 6.74); cursor: -webkit-zoom-out;"/>
                    他写了一个折子，仔细的讲述了海疆的利弊之处，认为大唐的人就该耕田牧海，只有这样才能让大唐的声威万年不坠，大唐之前的历朝历代，他们都在用一条腿走路，如果开创了海路，用两条腿走路，脚步一定会更加的坚实。
                </div>
                <div style="background:yellow;height:100px;z-index: 60; position: relative;">
                    <img src="static/img.byj/3.png" alt="" style=" width: 50px; height: 50px; margin: 10px 10px 10px 0px; position: relative; z-index: 666; transition: all 300ms ease 0s; transform: translate(600px, -90px) scale(6.74, 6.74); cursor: -webkit-zoom-out;"/>
                    来到前厅，冯智勇焦急的来回踱步，他对云烨的即将到来充满了忧虑，从父亲告诉他长安城显贵中有些不能得罪的入中，就有云烨，排名很靠前，父亲很少亲自教导自己庞大的子女群，都是要求他们自悟，能告诉他们白勺，都是他们必须知道，必须遵循的，自己的亲弟弟已经走火入魔，虽然他特意把其他的两个弟弟也塞了进去，就是希望这样做万一出事，能有一个浑水摸鱼的机会，说不定能救自己的亲弟弟一把。
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
