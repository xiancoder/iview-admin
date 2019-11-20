<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">css实现各种形状</div>
            <div class="blogContent" v-highlight>
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
                <p>CSS 其他图形</p>
                <div class="frame3321">
                    <ul>
                        <li><div class="square"></div></li>
                        <li><div class="square-round-one"></div></li>
                        <li><div class="square-round-two"></div></li>
                        <li><div class="square-round-three"></div></li>
                        <li><div class="square-round-half"></div></li>
                        <li><div class="circle"></div></li>
                        <li><div class="diamond"></div></li>
                        <li><div class="diamond-cut"></div></li>
                        <li><div class="rhombus"></div></li>
                        <li><div class="trapezoid"></div></li>
                        <li><div class="pentagon"></div></li>
                        <li><div class="hexagon"></div></li>
                        <li><div class="octagon"></div></li>
                        <li><div class="rectangle"></div></li>
                        <li><div class="parallelogram-left"></div></li>
                        <li><div class="parallelogram-right"></div></li>
                        <li><div class="heart"></div></li>
                        <li><div class="triangle"></div></li>
                        <li><div class="triangle-down"></div></li>
                        <li><div class="triangle-left"></div></li>
                        <li><div class="triangle-right"></div></li>
                        <li><div class="triangle-left-top"></div></li>
                        <li><div class="triangle-right-top"></div></li>
                        <li><div class="triangle-left-bottom"></div></li>
                        <li><div class="triangle-right-bottom"></div></li>
                        <li><div class="arrow-up"></div></li>
                        <li><div class="arrow-down"></div></li>
                        <li><div class="arrow-left"></div></li>
                        <li><div class="arrow-right"></div></li>
                        <li><div class="circle-spin-half"></div></li>
                        <li><div class="oval"></div></li>
                        <li><div class="circle-half-top"></div></li>
                        <li><div class="circle-half-bottom"></div></li>
                        <li><div class="circle-half-left"></div></li>
                        <li><div class="circle-half-right"></div></li>
                        <li><div class="circle-left-top"></div></li>
                        <li><div class="circle-right-top"></div></li>
                        <li><div class="circle-left-bottom"></div></li>
                        <li><div class="circle-right-bottom"></div></li>
                        <li><div class="circle-quarter-left-top"></div></li>
                        <li><div class="circle-quarter-right-top"></div></li>
                        <li><div class="circle-quarter-bottom"></div></li>
                        <li><div class="circle-quarter-left"></div></li>
                        <li><div class="circle-wedge-top"></div></li>
                        <li><div class="circle-wedge-right"></div></li>
                        <li><div class="circle-wedge-bottom"></div></li>
                        <li><div class="circle-wedge-left"></div></li>
                        <li><div class="flower"></div></li>
                        <li><div class="star-six"></div></li>
                        <li><div class="star-eight"></div></li>
                        <li><div class="star-twelve"></div></li>
                        <li><div class="cross"></div></li>
                        <li><div class="cross-round"></div></li>
                        <li><div class="plus"></div></li>
                        <li><div class="plus-round"></div></li>
                        <li><div class="search"></div></li>
                        <li><div class="map-pin"></div></li>
                        <li><div class="callout"></div></li>
                        <li><div class="yinyang"></div></li>
                        <li><div class="iphone"></div></li>
                        <li><div class="bookmark"></div></li>
                        <li><div class="battery"></div></li>
                        <li><div class="eye"></div></li>
                    </ul>
                    <div style="clear: both;"></div>
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

    .frame3321{ width: 100%; min-width: 420px;}
    .frame3321 li{ float:left; width: 200px; height: 200px;  margin: 1px; background: #1c1c1c; list-style: none; padding: 50px;}
    .frame3321 .square{ width: 100px; height: 100px; background: #fff;}
    .frame3321 .square-round-one{ width: 100px; height: 100px; background: #fff; -webkit-border-top-left-radius: 50%; border-top-left-radius: 50%;}
    .frame3321 .square-round-two{ width: 100px; height: 100px; background:#fff; -webkit-border-radius: 50% 0 50% 0;border-radius: 50% 0 50% 0;}
    .frame3321 .square-round-three{ width: 100px; height: 100px; background:#fff; -webkit-border-radius: 50% 0 50% 50%;border-radius: 50% 0 50% 50%;}
    .frame3321 .square-round-half{ width: 100px; height: 100px; background: #fff; -webkit-border-radius: 0 50% 50% 0;border-radius: 0 50% 50% 0;}
    .frame3321 .circle{ width: 100px; height: 100px; background: #fff; -webkit-border-radius: 50%; border-radius:50%;}
    .frame3321 .diamond{ width: 100px; height: 100px; background:#fff; -webkit-transform: rotate(45deg); transform: rotate(45deg); -webkit-border-radius: 5%;border-radius: 5%;}
    .frame3321 .diamond-cut{border-color:transparent transparent #fff transparent; border-width:0 25px 25px 25px; border-style: solid; position: relative;}
    .frame3321 .diamond-cut::after{content: "";border-color:#fff transparent transparent transparent;border-style: solid;border-width:75px 50px 0 50px ;position: absolute; top: 25px; left: -25px;}
    .frame3321 .rhombus{ border-color:transparent transparent #fff  transparent; border-style: solid; border-width:50px; border-bottom-width:70px; border-top-width: 0; position: relative; top:-30px;}
    .frame3321 .rhombus::after{ content: ""; border-color:#fff transparent transparent transparent; border-style: solid; border-width:50px; border-top-width:70px; border-bottom-width:0; position: absolute;top:70px; left:-50px;}
    .frame3321 .trapezoid{ width: 100px; margin-left:-35px ; border-bottom: 70px solid #fff; border-left: 35px solid transparent; border-right: 35px solid transparent;}
    .frame3321 .pentagon{ width: 107px; position:relative; top:40px; left:0px;border-top: 50px solid #fff; border-left: 18px solid transparent; border-right:18px solid transparent;}
    .frame3321 .pentagon::after{ content: ""; border-color: transparent transparent #fff; border-style: solid;  border-width: 0 55px 50px;  position: absolute; top:-100px; left:-20px;}
    .frame3321 .hexagon{ width: 100px; height: 50px; background: #fff; position: relative; margin-top: 25px;}
    .frame3321 .hexagon::before{  content: ""; border-color: transparent transparent #fff; border-style: solid; border-width: 0 50px 35px; position: absolute; top:-35px;  }
    .frame3321 .hexagon::after{ content: ""; border-color: #fff transparent transparent; border-style: solid; border-width:35px 50px 0; position: absolute; top:50px;}
    .frame3321 .octagon{ width: 100px; height: 50px; background: #fff; position: relative; margin-top: 25px;}
    .frame3321 .octagon::before{content: ""; height:0px; width:100px; position:absolute; margin-top: -25px; border-bottom: 25px solid #fff;border-left:25px solid #1c1c1c; border-right:25px solid #1c1c1c; }
    .frame3321 .octagon::after{ content:""; height: 0; width: 100px; position: absolute; margin-top: 50px; border-top: 25px solid #fff; border-left: 25px solid #1c1c1c; border-right: 25px solid #1c1c1c;}
    .frame3321 .rectangle{ width: 100px; height: 50px; margin-top: 20px; background:#fff;}
    .frame3321 .parallelogram-left{ width: 100px; height: 50px; margin-top: 20px; background:#fff; -webkit-transform: skew(20deg); transform: skew(20deg);}
    .frame3321 .parallelogram-right{ width: 100px; height: 50px; margin-top: 20px; background: #fff; -webkit-transform: skew(-20deg); transform: skew(-20deg);}
    .frame3321 .heart{ width: 100px; height: 100px; position: relative; margin-left: -10px;}
    .frame3321 .heart::before,.heart::after{ content: ""; width: 60px; height: 100px; background:#ff6666; position: absolute; top:0; left:60px; border-radius: 50px 50px 0 0;-webkit-transform: rotate(-45deg); transform: rotate(-45deg); -webkit-transform-origin: 0 100%; transform-origin: 0 100%;}
    .frame3321 .heart::after{ position:absolute; left:20px; top:-40px;-webkit-transform: rotate(45deg); transform: rotate(45deg); -webkit-transform-origin: 0 100%; transform-origin: 0 100%; }
    .frame3321 .triangle{ width: 0; border-color: transparent transparent #fff; border-style: solid; border-width: 0 50px 100px; }
    .frame3321 .triangle-down{ width: 0; border-color: #fff transparent transparent; border-style: solid; border-width: 100px 50px 0;}
    .frame3321 .triangle-left{ width: 0; border-color: transparent #fff transparent transparent ; border-style: solid; border-width: 50px 100px 50px 0;}
    .frame3321 .triangle-right{ width: 0; border-color: transparent transparent transparent #fff; border-style: solid; border-width: 50px 0 50px 100px;}
    .frame3321 .triangle-left-top{ width: 0; border-color: #fff transparent transparent #fff; border-style: solid; border-width: 50px; }
    .frame3321 .triangle-right-top{ width: 0; border-color:#fff #fff transparent transparent; border-style: solid; border-width:50px;}
    .frame3321 .triangle-left-bottom{ border-color: transparent transparent #fff #fff; border-style: solid; border-width: 50px;}
    .frame3321 .triangle-right-bottom{ border-color: transparent #fff #fff transparent; border-style: solid; border-width: 50px;}
    .frame3321 .arrow-up{ width: 0; border-color: transparent transparent #fff; border-style: solid; border-width: 0 45px 50px; position: relative; margin-top: -5px; margin-left: 10px;}
    .frame3321 .arrow-up::after{ content: ""; width: 35px; height: 70px; background: #fff; position: absolute; top: 30px; left: -18px;}
    .frame3321 .arrow-down{ width: 0; border-color: #fff transparent transparent; border-style: solid; border-width: 50px; position: relative; top:50px;}
    .frame3321 .arrow-down::after{ content: ""; width: 35px; height: 70px; background: #fff; position: absolute; bottom:25px; left:-18px;}
    .frame3321 .arrow-left{ width: 0; border-color: transparent #fff transparent transparent; border-style: solid; border-width: 50px; position: relative;right:60px;}
    .frame3321 .arrow-left::after{ content: ""; width: 75px; height:35px; background: #fff; position: absolute; top: -17px; left: 25px;}
    .frame3321 .arrow-right{ width: 0; border-color: transparent transparent transparent #fff; border-style: solid; border-width: 50px; position: relative; left: 60px;}
    .frame3321 .arrow-right::after{ content: ""; width: 75px; height: 35px; background:#fff; position: absolute; top: -17px; right:25px ;}
    .frame3321 .circle-spin-half{ width: 100px; height: 100px; background: transparent; border-color: transparent transparent #fff #fff; border-style: solid; border-width: 20px; border-radius: 50%; -webkit-animation:circle-spin-half 1.2s linear infinite; animation:circle-spin-half 1.2s linear infinite;}
    @-webkit-keyframes circle-spin-half{
        0%{-webkit-transform: rotate(0deg);}
        100%{-webkit-transform: rotate(360deg);}
    }
    @keyframes circle-spin-half{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .frame3321 .oval{ width: 100px; height:50px; border-radius: 50%; background:#fff; margin-top: 20px;}
    .frame3321 .circle-half-top{  width:100px; height:50px; background:#fff; border-radius: 100px 100px 0 0;}
    .frame3321 .circle-half-bottom{ width: 100px; height: 50px; background: #fff; border-radius: 0 0 100px 100px; margin-top: 50px;}
    .frame3321 .circle-half-left{ width: 50px; height: 100px; background: #fff; border-radius: 100px 0 0 100px;}
    .frame3321 .circle-half-right{ width: 50px; height: 100px; background: #fff; border-radius: 0 100px 100px 0; margin-left: 50px;}
    .frame3321 .circle-left-top{ width: 100px; height: 100px; background:#fff; border-top-left-radius:100%;}
    .frame3321 .circle-right-top{ width: 100px; height: 100px; background: #fff; border-top-right-radius: 100%;}
    .frame3321 .circle-left-bottom{ width: 100px; height: 100px; background: #fff; border-bottom-left-radius: 100%;}
    .frame3321 .circle-right-bottom{ width: 100px; height: 100px; background: #fff; border-bottom-right-radius: 100%;}
    .frame3321 .circle-quarter-left-top{  border-color: #fff transparent transparent transparent; border-style: solid; border-width: 100px; border-radius: 100%; margin-left:-50px;}
    .frame3321 .circle-quarter-right-top{ border-color: transparent #fff transparent transparent; border-style: solid; border-width: 100px;  border-radius: 100%; margin-left: -100px; margin-top: -50px;}
    .frame3321 .circle-quarter-bottom{ border-color: transparent transparent #fff; border-style: solid; border-width:0 100px 100px; border-radius: 100%; margin-left: -50px;}
    .frame3321 .circle-quarter-left{ border-color:transparent transparent transparent #fff; border-style: solid; border-width: 80px 0 80px 100px; border-radius: 100%; margin-top: -35px;}
    .frame3321 .circle-wedge-top{border-color: transparent #fff #fff; border-style: solid; border-width: 50px; border-radius: 100%;}
    .frame3321 .circle-wedge-right{ border-color: #fff transparent #fff #fff; border-style: solid; border-width: 50px; border-radius: 100%;}
    .frame3321 .circle-wedge-bottom{ border-color: #fff #fff transparent #fff; border-style: solid; border-width: 50px; border-radius: 100%;}
    .frame3321 .circle-wedge-left{ border-color: #fff #fff #fff transparent; border-style: solid; border-width: 50px; border-radius: 100%;}
    .frame3321 .flower{ width: 100px; height: 100px; background: #fff; border-radius:20%;}
    .frame3321 .flower::before{ content: ""; width: 100px; height: 100px; background: #fff; border-radius: 20%; position: absolute; -webkit-transform: rotate(45deg); transform: rotate(45deg);}
    /*用定位是把添加的元素转化成块级元素，也可以使用display：block;*/
    .frame3321 .star-six{ width: 0; border-color: transparent transparent #fff; border-style: solid; border-width:0 50px 80px; position: relative;}
    .frame3321 .star-six::after{ content: ""; border-color:#fff transparent transparent; border-style: solid; border-width: 80px 50px 0; position: absolute; left: -50px; top: 25px;}
    .frame3321 .star-eight{border-color: #fff transparent #fff transparent; border-style: solid; border-width: 20px; margin-top: 30px; position: relative;}
    .frame3321 .star-eight::after{ content: ""; border-color:transparent #fff transparent #fff;border-style: solid; border-width: 20px; position: absolute; height: 60px; top:-50px; left: 10px; }
    .frame3321 .star-twelve{ width: 100px; height: 100px; background: #fff; position: relative;}
    .frame3321 .star-twelve::before,
    .frame3321 .star-twelve::after{ content:"";width: 100px; height: 100px; background: #fff; position: absolute; -webkit-transform: rotate(30deg); transform: rotate(30deg);}
    .frame3321 .star-twelve::after{ -webkit-transform: rotate(-30deg);transform: rotate(-30deg);}
    .frame3321 .cross{ width: 35px; height: 100px; background: #fff; position: relative; margin-left: 30px; -webkit-transform: rotate(45deg); transform: rotate(45deg); }
    .frame3321 .cross::after{ content: ""; width: 35px; height: 100px; background: #fff; position: absolute; -webkit-transform: rotate(-90deg); transform: rotate(-90deg);}
    .frame3321 .cross-round{background: #ffffff;width: 33px;height: 100px;position: relative;margin-left: 33px;border-radius: 20px;-webkit-transform: rotate(45deg);transform: rotate(45deg);}
    .frame3321 .cross-round:before {background: #ffffff;content: "";width: 100px;height: 33px;position: absolute;top: 33px;left: -33px;border-radius: 20px;}
    /*两个cross cross-round 两个方式不同，宽高是相反的*/
    .frame3321 .plus{ width: 33px; height: 100px; background: #fff; position: relative; left: 33px;}
    .frame3321 .plus::after{ content: ""; width: 100px; height: 33px; background: #fff; position: absolute; top: 33px; left: -33px;}
    .frame3321 .plus-round{ width: 33px; height: 100px; background: #fff; border-radius: 20px; margin-left: 33px; position: relative;}
    .frame3321 .plus-round::after{ content: ""; width: 100px; height: 33px; background: #fff; border-radius: 20px; position: absolute; left: -33px; top:33px;}
    .frame3321 .search{ width: 50px; height: 50px; border-radius: 50%;border:8px solid #fff; position:relative; margin-left: 20px; margin-top: 20px;}
    .frame3321 .search::after{ width:10px; height:30px; content: ""; background: #fff; position: absolute;top:29px; left: 38px; -webkit-transform: rotate(-45deg); transform: rotate(-45deg);}
    .frame3321 .map-pin{ width: 60px; height:60px; border:15px solid #fff; border-radius: 50%; margin-left:20px; margin-top: 10px; position: relative;}
    .frame3321 .map-pin::after{ content: "";border-color:#fff transparent transparent; border-style: solid; border-width:35px 25px 0; position: absolute; top:32px; left: -10px;}
    .frame3321 .callout{ width: 100px; height:50px;background: #fff; border-radius: 10px; position: relative; margin-top:20px;}
    .frame3321 .callout::after{ content: ""; border-color: transparent #fff transparent transparent; border-style: solid; border-width:10px 15px 10px 0; position: absolute; left:-15px; top:15px;}
    .frame3321 .yinyang{ width: 105px; height: 105px; border: 2px solid #fff; border-radius: 50%; background: #000; border-width: 2px 2px 50px 2px; position: relative;-webkit-animation: circle-spin-half 1.2s linear infinite; animation: circle-spin-half 1.2s linear infinite;}
    .frame3321 .yinyang::before{ content: ""; position: absolute; width: 50px; height: 50px; background: #000;  border-radius: 50%; top:50%;left:0; border: 18px solid #fff;}
    .frame3321 .yinyang::after{ content: ""; position: absolute; width: 50px; height: 50px; background: #fff; border-radius: 50%;border:18px solid #000; left:50%; top: 50%; }
    .frame3321 .iphone{ width:50px; height: 80px; border-width: 15px 5px; border-color:#fff; border-style: solid; border-radius: 5px; position: relative; margin-left: 20px; margin-top:10px;}
    .frame3321 .iphone::before{ content: ""; position: absolute; width: 15px; height: 5px; background: #000; top:-10px; left:13px;}
    .frame3321 .iphone::after{ content: ""; position: absolute; width: 10px; height: 10px; border-radius: 50%; background: #000; bottom:-13px;left: 14px;}
    .frame3321 .bookmark{width: 0; height: 70px; border-left: 25px solid #fff; border-right: 25px solid #fff; border-bottom: 25px solid transparent; margin-left: 25px;}
    .frame3321 .battery{ width:50px; height: 30px; background: #fff; position: relative; margin-top: 20px;}
    .frame3321 .battery::after{ content: ""; position: absolute; top:-15px; left:-15px; width: 100px; height: 60px; border: 5px solid #fff; border-radius: 5px;}
    .frame3321 .battery::before{ content: ""; position: absolute; width: 10px; height: 15px; border: 5px solid #fff; border-radius: 5px; right:-40px; top:5px;}
    .frame3321 .eye{ width: 70px; height: 70px; position: relative; background: #fff; border-radius: 50% 0 50% 0; -webkit-transform: rotate(45deg); transform: rotate(45deg);}
    .frame3321 .eye::after{ content: ""; position: absolute; width: 40px; height: 40px; background: #fff; border-radius: 50%; border:10px solid #000; top:15px; left: 15px;}
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
