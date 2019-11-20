<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">丝带样式</div>
            <div class="blogContent" v-highlight>
                <section>
                    <div class="ribbon"><span class="ribbon1"><span>丝带效果1</span></span></div>
                    <div class="ribbon"><span class="ribbon2">丝<br>带<br>效<br>果<br>2</span></div>
                    <div class="ribbon"><span class="ribbon3">丝带效果3</span></div>
                    <div class="ribbon"><span class="ribbon4">丝带效果4</span></div>
                    <div class="ribbon"><span class="ribbon5">丝带效果5</span></div>
                    <div class="ribbon"><div class="ribbon6"><span class="ribbon6inner">丝带效果6</span></div></div>
                </section>
                <script type="text/xianjs" ui-bs>
                    <div class="ribbon"><span class="ribbon1"><span>丝带效果1</span></span></div>
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
<style>
    section { width: 100%; overflow: hidden;}
    .ribbon { display: inline-block; width: 200px; height: 188px; position: relative; float: left; margin: 0 30px 20px 0; background: #bbb; background-size: cover; text-transform: uppercase; color: white; }
    .ribbon0 { font-weight: normal; position: relative; background: #F4F9FA; width: 50%; color: #F8463F; text-align: center; padding: 10px 20px; margin: 0 auto; text-transform: uppercase; border-radius: 2px; }
    .ribbon0:before,
    .ribbon0:after { content: ""; position: absolute; display: block; top: -6px; border: 18px solid #DCF4F4; }
    .ribbon0:before { left: -36px; border-right-width: 18px; border-left-color: transparent; }
    .ribbon0:after { right: -36px; border-left-width: 18px; border-right-color: transparent; }
    .ribbon0 span:before,
    .ribbon0 span:after { content: ""; position: absolute; display: block; border-style: solid; border-color: #A7CECC transparent transparent transparent; top: -6px; -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); }
    .ribbon0 span:before { left: 0; border-width: 6px 0 0 6px; }
    .ribbon0 span:after { right: 0; border-width: 6px 6px 0 0; }
    @media (max-width: 500px) { .ribbon {width: 100%} .ribbon:nth-child(even) {margin-right: 0%;} }
    .ribbon1 { position: absolute; top: -6px; right: 10px; }
    .ribbon1:after { position: absolute; content: ""; display: block; width: 0; height: 0; border-left: 45px solid transparent; border-right: 45px solid transparent; border-top: 22px solid #F8463F; }
    .ribbon1 span { position: relative; display: inline-block; text-align: center; background: #F8463F; font-size: 14px; line-height: 1; padding: 12px 8px 10px; border-top-right-radius: 8px; width: 90px; }
    .ribbon1 span:before, .ribbon1 span:after { position: absolute; content: ""; display: block; }
    .ribbon1 span:before { background: #F8463F; height: 6px; width: 6px; left: -6px; top: 0; }
    .ribbon1 span:after { background: #C02031; height: 6px; width: 8px; border-radius: 8px 8px 0 0; left: -8px; top: 0; }
    .ribbon2 { display: inline-block; width: 60px; padding: 10px 0; background: #F47530; top: -6px; left: 25px; position: absolute; text-align: center; border-top-left-radius: 3px; }
    .ribbon2:before { height: 0; width: 0; border-bottom: 6px solid #8D5A20; border-right: 6px solid transparent; right: -6px; top: 0; }
    .ribbon2:before, .ribbon2:after { content: ""; position: absolute; }
    .ribbon2:after { height: 0; width: 0; border-left: 30px solid #F47530; border-right: 30px solid #F47530; border-bottom: 30px solid transparent; bottom: -30px; left: 0; }
    .ribbon3 { display: inline-block; position: absolute; width: 150px; height: 50px; line-height: 50px; padding-left: 15px; background: #59324C; left: -8px; top: 20px }
    .ribbon3:before, .ribbon3:after { content: ""; position: absolute; }
    .ribbon3:before { height: 0; width: 0; border-bottom: 8px solid black; border-left: 8px solid transparent; top: -8px; left: 0; }
    .ribbon3:after { height: 0; width: 0; border-top: 25px solid transparent; border-bottom: 25px solid transparent; border-left: 15px solid #59324C; right: -15px; }
    .ribbon4 { position: absolute; top: 15px; padding: 8px 10px; background: #00B3ED; box-shadow: -1px 2px 4px rgba(0,0,0,0.5); }
    .ribbon4:before, .ribbon4:after { position: absolute; content: ""; display: block; }
    .ribbon4:before { width: 7px; height: 100%; padding: 0 0 7px; top: 0; left: -7px; background: inherit; border-radius: 5px 0 0 5px; }
    .ribbon4:after { width: 6px; height: 38px; background: rgba(0,0,0,0.35); bottom: -5px; left: -6px; z-index: -1; border-radius: 5px 0 0 5px; }
    .ribbon5 { display: inline-block; width: calc(100% + 20px); height: 50px; line-height: 50px; text-align: center; margin-left: -10px; margin-right: -10px; background: #EDBA19; position: relative; top: 20px; }
    .ribbon5:before { content: ""; position: absolute; height: 0; width: 0; border-top: 10px solid #cd8d11; border-left: 10px solid transparent; bottom: -10px; left: 0; }
    .ribbon5:after { content: ""; position: absolute; height: 0; width: 0; border-top: 10px solid #cd8d11; border-right: 10px solid transparent; right: 0; bottom: -10px; }
    .ribbon6 { width: 100%; height: 188px; position: absolute; top: -8px; left: 8px; overflow: hidden; }
    .ribbon6:before { content: ""; display: block; border-radius: 8px 8px 0px 0px; width: 40px; height: 8px; position: absolute; right: 100px; background: #4D6530; }
    .ribbon6:after { content: ""; display: block; border-radius: 0px 8px 8px 0px; width: 7px; height: 71px; position: absolute; right: 1px; top: 65px; background: #4D6530;}
    .ribbon6 .ribbon6inner{ display: inline-block; text-align: center; width: 200px; height: 40px; line-height: 40px; position: absolute; top: 30px; right: -50px; z-index: 2; overflow: hidden; transform: rotate(45deg); -ms-transform: rotate(45deg); -moz-transform: rotate(45deg); -webkit-transform: rotate(45deg); -o-transform: rotate(45deg); border: 1px dashed; box-shadow:0 0 0 3px #57DD43,  0px 21px 5px -18px rgba(0,0,0,0.6); background: #57DD43; }
</style>
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
