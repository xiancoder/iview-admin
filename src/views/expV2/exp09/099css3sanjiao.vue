<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">css实现各种用途的三角形</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>排序的三角</p>
                <div class="fd-px">
                    分享金
                    <div class="fd-arrow-con">
                        <span class="up" data-type="desc"></span>
                        <span class="down" data-type="asc"></span>
                    </div>
                    <div class="fd-arrow-con">
                        <span class="up" data-type="desc"></span>
                        <span class="down active" data-type="asc"></span>
                    </div>
                    <div class="fd-arrow-con">
                        <span class="up active" data-type="desc"></span>
                        <span class="down" data-type="asc"></span>
                    </div>
                </div>
                <p>三角形指向目录</p>
                <div style="height:50px;background:rgb(247, 247, 247);position: relative;">
                    <div class="pointer">
                        <div class="arrowi"></div>
                        <div class="arrowi_border"></div>
                    </div>
                </div>
                <p>圆角三角星</p>
                <div style="height:100px; position:relative; border: 1px solid red;">
                    <div class="ysj"> <div>紧张</div> </div>
                </div>
                <div style="height:100px; position:relative; border: 1px solid red;">
                    <div class="fsj"> </div>
                </div>
                <p>CSS 写出三角形</p>
                <div class="arrow-up"></div>
                <div class="arrow-down"></div>
                <div class="arrow-left"></div>
                <div class="arrow-right"></div>
                <hr />
                <Card style="width:320px" class="cardFlag">
                    <div class="triangle">个人版本</div>
                    <div style="text-align:center">
                        <img src="/static/img.site/iview4.png">
                        <h3>A high quality UI Toolkit <br /> based on Vue.js</h3>
                    </div>
                </Card>
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
    .fd-px{position: relative; padding-right: 12px;}
    .fd-px .fd-arrow-con{display: inline-block;width: 9px;margin: 0 0 0 4px;height: 100%;vertical-align: middle;cursor: pointer;}
    .fd-px .fd-arrow-con .up{display:block;width: 0;height: 0;border: 4px solid transparent;border-bottom: 5px solid #b1b1b1;margin-bottom: 2px;}
    .fd-px .fd-arrow-con .down{display:block;width: 0;height: 0;border: 4px solid transparent;border-top: 5px solid #b1b1b1;}
    .fd-px .fd-arrow-con .down.active{border-top: 6px solid #ea544a;}
    .fd-px .fd-arrow-con .up.active{border-bottom: 6px solid #ea544a;}

    .pointer { position: absolute; right: 22px; top: 15px; }
    .pointer .arrowi,
    .pointer .arrowi_border { border-color: transparent #fff transparent transparent; border-width: 11px; border-style: solid; font-size: 0; left: 50%; line-height: 0; margin: 0 auto; position: absolute; top: 0; width: 0; z-index: 1002; left: 0; margin-left: 45%; }
    .pointer .arrowi_border { border-color: transparent rgb(192, 210, 221) transparent transparent; border-width: 11px; margin-left: -1px; border-style: solid; z-index: 1001; top: 0px; }

    .ysj{
        width: 50px; height: 50px; position: absolute; left: 0; bottom: 0; background: #FFC107;
        border-bottom-left-radius: 20px; border-top: 22px solid white; border-right: 24px solid white;
        border-bottom: 24px solid transparent; border-left: 24px solid transparent;
    }
    .ysj div{
        position: absolute; top: -1px; left: -19px; width: 35px; height: 15px;
        color: #607D8B; font-size: 16px; font-weight: bold;
    }
    .fsj{
        width: 50px; height: 50px; position: absolute; left: 0; bottom: 0; background: #FFC107;
        border-top: 22px solid white; border-right: 24px solid white;
        border-bottom: 24px solid transparent; border-left: 24px solid transparent;
    }

    div.arrow-up { width:0px; height:0px; border-left:5px solid transparent; border-right:5px solid transparent; border-bottom:5px solid #2f2f2f; font-size:0px; line-height:0px; }
    div.arrow-down { width:0px; height:0px; border-left:5px solid transparent; border-right:5px solid transparent; border-top:5px solid #2f2f2f; font-size:0px; line-height:0px; }
    div.arrow-left { width:0px; height:0px; border-bottom:5px solid transparent; border-top:5px solid transparent; border-right:5px solid #2f2f2f; font-size:0px; line-height:0px; }
    div.arrow-right { width:0px; height:0px; border-bottom:5px solid transparent; border-top:5px solid transparent; border-left:5px solid #2f2f2f; font-size:0px; line-height:0px; }

    .cardFlag { overflow: hidden;}
    .cardFlag .triangle{ display: -ms-flexbox; display: flex; -ms-flex-pack: center; justify-content: center; -ms-flex-align: end; align-items: flex-end; width: 92px; height: 92px; font-size: 12px; font-weight: 500; color: #fff; background-color: #3385ff; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg); position: absolute; top: -46px; right: -46px;}
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
