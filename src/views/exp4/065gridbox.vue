<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">grid栅格布局demo</div>
            <div class="blogContent" v-highlight>
                <p>Grid布局方式借鉴了平面装帧设计中的格线系统，将格线运用在屏幕上，而不再是单一的静态页面，可以称之为真正的栅格。</p>
                <p>总的来说 Web 布局经历了以下四个阶段：</p>
                <p>table表格布局 - float浮动及position定位布局 - flex弹性盒模型布局 - grid栅格布局</p>
                <p>Grid Layout 是一种基于二维网格的布局系统，旨在完全改变我们设计基于网格的用户界面的方式，弥补网页开发在二维布局能力上的缺陷</p>
                <p>与flex分为伸缩容器和伸缩项目类似，grid也分为网格容器和网格项目</p>
                <table class="table"> <thead> <tr> <th ><span>Chrome</span></th> <th ><span>Opera</span></th> <th ><span>Firefox</span></th> <th ><span>IE</span></th> <th ><span>Edge</span></th> <th ><span>Safari</span></th> </tr> </thead> <tbody> <tr> <td  title="Chrome - " data-browser-name="Chrome"><span >57</span></td> <td  title="Opera - " data-browser-name="Opera"><span >44</span></td> <td  title="Firefox - " data-browser-name="Firefox"><span >52</span></td> <td  title="IE - " data-browser-name="IE"><span >11*</span></td> <td  title="Edge - " data-browser-name="Edge"><span >16</span></td> <td  title="Safari - " data-browser-name="Safari"><span >10.1</span></td> </tr> </tbody> </table>
                <table class="table"> <thead> <tr> <th ><span>iOS Safari</span></th> <th ><span>Opera Mobile</span></th> <th ><span>Opera Mini</span></th> <th ><span>Android</span></th> <th ><span>Android Chrome</span></th> <th ><span>Android Firefox</span></th> </tr> </thead> <tbody> <tr> <td  title="iOS Safari - " data-browser-name="iOS Safari"><span >10.3</span></td> <td  title="Opera Mobile - " data-browser-name="Opera Mobile"><span >No</span></td> <td  title="Opera Mini - " data-browser-name="Opera Mini"><span >No</span></td> <td  title="Android - " data-browser-name="Android"><span >62</span></td> <td  title="Android Chrome - " data-browser-name="Android Chrome"><span >62</span></td> <td  title="Android Firefox - " data-browser-name="Android Firefox"><span >57</span></td> </tr> </tbody> </table>
                <script type="text/xian">
                    .box{
                        display: grid;
                        display: -webkit-grid; /* Safari */
                        /*display: inline-grid; 行内元素 */
                        background:#ddd;
                        border:1px solid red;
                    }
                </script>
                <p>grid-template-rows指定的每个值可以创建每行的高度。</p>
                <p>行的高度可以是任何非负值，长度可以是px、%、em等长度单位的值</p>
                <Row>
                    <Col span="12">
                        <script type="text/xianjs">
                            .box {
                                /*容器属性*/
                                grid-template-rows: 60px 70px 80px
                            }
                        </script>
                    </Col>
                    <Col span="12" class="box box11">
                        <div class="item red"></div>
                        <div class="item yellow"></div>
                        <div class="item blue"></div>
                    </Col>
                </Row>
                <p>grid-template-columns指定的每个值来创建每列的列宽。</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        grid-template-columns: 60px 70px 80px
                    }
                </script>
                <div class="box box12">
                    <div class="item red"></div>
                    <div class="item yellow"></div>
                    <div class="item blue"></div>
                </div>
                <p>fr单位可以帮助我们创建一个弹列的网格轨道。它代表了网格容器中可用的空间（就像Flexbox中无单位的值）。</p>
                <p>在这个示例中，网格容器分成了4等份（1 + 1 + 2 = 4），每一份（1fr）是网格容器宽度的四分之一。</p>
                <p>所以item1和item2的宽度是网格容器的四分之一宽，item3是网格容器宽度的四分之二（2fr）</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        grid-template-columns: 1fr 1fr 2fr
                        grid-template-columns: 3rem 25% 2fr
                    }
                </script>
                <Row>
                    <Col span="12" class="box box13">
                        <div class="item red"></div>
                        <div class="item yellow"></div>
                        <div class="item blue"></div>
                    </Col>
                    <Col span="12" class="box box14">
                        <div class="item red"></div>
                        <div class="item yellow"></div>
                        <div class="item blue"></div>
                    </Col>
                </Row>
                <p>通过grid-template-rows和grid-template-columns定义网格时，网格线可以被命名。</p>
                <p>分配网格线名称必须用方括号[网格线名称]，然后后面紧跟网格轨道的尺寸值。</p>
                <p>定义网格线名称时需要避免使用规范中出现的关键词，以免导致混乱。</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        display: grid;
                        grid-gap: 1rem;
                        grid-template-columns: 1fr 5fr 2.5fr;
                        grid-template-rows: 1fr 5fr 1fr;
                        grid-template-areas:    "header header"
                                                "content sidebar"
                                                "footer footer";
                    }
                    .item {
                        /*项目属性*/
                        grid-area: header
                    }
                </script>
                <div class="box box16">
                    <div class="header">header</div>
                    <div class="content">content</div>
                    <div class="sidebar">sidebar</div>
                    <div class="footer">footer</div>
                </div>
                <p>minmax()函数来创建网格轨道的最小或最大尺寸。</p>
                <p>可以接受任何长度值，也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        grid-template-rows: minmax(100px, auto);
                        grid-template-columns: minmax(auto, 50%) 1fr 3em;
                    }
                </script>
                <p>repeat()可以创建重复的网格轨道。</p>
                <p>这个适用于创建相等尺寸的网格项目和多个网格项目。</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        grid-template-rows: repeat(3, 1fr);
                        grid-template-columns: 30px repeat(3, 1fr) 30px;
                    }
                </script>
                <p>grid-column-gap 创建列与列之间的间距</p>
                <p>grid-row-gap 创建行与行之间的间距</p>
                <p>grid-gap 默认值为0</p>
                <p>[注意]grid-gap只能创建列与列或行与行之间的间距，但不能创建列和行与网格容器边缘的间距</p>
                <p>间距(Gap)可以设置任何非负值，长度值可以是px、%、em等单位值</p>
                <script type="text/xianjs">
                    .box {
                        /*容器属性*/
                        grid-column-gap: 6px
                        grid-row-gap: 5px
                        grid-gap: [grid-row-gap] [grid-column-gap]
                    }
                </script>
                <div class="box box14">
                    <div class="item red"></div> <div class="item yellow"></div> <div class="item blue"></div>
                    <div class="item red"></div> <div class="item yellow"></div> <div class="item blue"></div>
                    <div class="item red"></div> <div class="item yellow"></div> <div class="item blue"></div>
                </div>
                <p>【grid-row-start】 【grid-row-end】 【grid-column-start】 【grid-column-end】 默认值为auto</p>
                <p>通过网格线可以定位网格项目。网格线实际上是代表线的开始、结束，两者之间就是网格列或行。</p>
                <p>每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1</p>
                <script type="text/xianjs">
                    .item {
                        /*项目属性*/
                        grid-row-start: 2;
                        grid-row-end: 3;
                        grid-column-start: 1;
                        grid-column-end: 3;
                    }
                </script>
                <div class="box box14">
                    <div class="item red"></div> <div class="item yellow"></div> <div class="item blue"></div>
                    <div class="item yellow item15"></div> <div class="item blue"></div>
                    <div class="item red"></div> <div class="item yellow"></div> <div class="item blue"></div>
                </div>
                <p>【grid-row】 【grid-column】【grid-area】</p>
                <p>grid-row是grid-row-start和grid-row-end的简写。</p>
                <p>grid-area如果指定四个值，第一个值对应grid-row-start，第二个值对应grid-column-start，第三个值对应grid-row-end，第四个值对应grid-column-end</p>
                <script type="text/xianjs">
                    .item {
                        /*项目属性*/
                        grid-row: 2;
                        grid-column: 3 / 4;
                        grid-area: 2 / 2 / 3 / 3;
                    }
                </script>
                <p>【span】 关键词span后面紧随数字，表示合并多少个列或行</p>
                <script type="text/xianjs">
                    .item {
                        /*项目属性*/
                        grid-row: 1 / span 3;
                        grid-column: span 2;
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
<style>
    .box{
        display: grid;
        display: -webkit-grid; /* Safari */
        /*display: inline-grid; 行内元素 */
        background:#ddd;
        border:1px solid red;
    }
    .box11{grid-template-rows: 60px 70px 80px}
    .item.red{background: red}
    .item.blue{background: blue}
    .item.yellow{background: yellow}
    .box12{grid-template-columns: 60px 70px 80px}
    .box13{grid-template-columns: 1fr 1fr 2fr}
    .box14{grid-template-columns: 3rem 25% 2fr}
    .box16{
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 5fr 2.5fr;
        grid-template-rows: 1fr 5fr 1fr;
        grid-template-areas:"header header"
                            "content sidebar"
                            "footer footer";
    }
    .header{grid-area: header; background: lightsalmon; border: 2px solid black; }
    .content{grid-area: content; background: lightsalmon; border: 2px solid black; }
    .sidebar{grid-area: sidebar; background: lightsalmon; border: 2px solid black; }
    .footer{grid-area: footer; background: lightsalmon; border: 2px solid black; }
    .box14{
        display:grid;
        grid-template-columns:50px 60px 70px;
        grid-template-rows:50px 60px 70px;
        grid-gap:5px 10px;
    }
    .item15{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
    }
</style>
