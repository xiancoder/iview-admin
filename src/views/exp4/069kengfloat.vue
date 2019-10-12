<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">float需要注意浮动元素的高度不一样导致塌陷的问题</div>
            <div class="blogContent" v-highlight>
                <p>float: left 预想完美的效果</p>
                <Row>
                    <Col span="12">
                        <script type="text/xianjs">
                            .box1{ background: #ddd; min-height: 150px; width: 150px; }
                            .box1 div{ width: 50px;float: left; }
                            .item1{background: #009688;}
                            .item2{background: #8bc34a;}
                            .item3{background: #ffeb3b;}
                            .item4{background: #ffc107;}
                            .item5{background: #03a9f4;}
                        </script>
                    </Col>
                    <Col span="12">
                        <div class="box1">
                            <div class="item1">123 <br> 456</div>
                            <div class="item2">123 <br> 456</div>
                            <div class="item3">123 <br> 456</div>
                            <div class="item4">123 <br> 456</div>
                            <div class="item5">123 <br> 456</div>
                        </div>
                    </Col>
                </Row>
                <p>float: left 但是块内的内容永远不可能一致</p>
                <Row>
                    <Col span="12">
                        <script type="text/xianjs">
                            .box2{ background: #ddd; min-height: 150px; width: 150px; }
                            .box2 div{ width: 50px;float: left; }
                            .item1{background: #009688;}
                            .item2{background: #8bc34a;}
                            .item3{background: #ffeb3b;}
                            .item4{background: red;}
                            .item5{background: #03a9f4;}
                        </script>
                    </Col>
                    <Col span="12">
                        <div class="box1">
                            <div class="item1">123 <br> 456</div>
                            <div class="item2">123 <br> 456</div>
                            <div class="item3">123 </div>
                            <div class="item4">123 <br> 456 <br> 789</div>
                            <div class="item5">123 <br> 456</div>
                        </div>
                    </Col>
                </Row>
                <p>也许大部分人就像我一样只记得浮动会让父元素塌陷，无法撑开高度这个特性，可是我们却忘了还有一个重要的特性</p>
                <p>当一个元素浮动以后,他会被移出正常的文档流,然后向左右平移,一致到碰到所处的容器的边框或者另一个浮动元素</p>
                <Row>
                    <Col span="12">
                        <script type="text/xianjs">
                            .box3{ background: #ddd; min-height: 150px; width: 150px; }
                            .box3 div{ width: 50px; height:80px; float: left; }
                            .item1{background: #009688;}
                            .item2{background: #8bc34a;}
                            .item3{background: #ffeb3b;}
                            .item4{background: red;}
                            .item5{background: #03a9f4;}
                        </script>
                    </Col>
                    <Col span="12">
                        <div class="box3">
                            <div class="item1">123 <br> 456</div>
                            <div class="item2">123 <br> 456</div>
                            <div class="item3">123 </div>
                            <div class="item4">123 <br> 456 <br> 789</div>
                            <div class="item5">123 <br> 456</div>
                        </div>
                    </Col>
                </Row>
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
    .box1{ background: #ddd; min-height: 150px; width: 150px; }
    .box1 div{ width: 50px;float: left; }
    .item1{background: #009688;}
    .item2{background: #8bc34a;}
    .item3{background: #ffeb3b;}
    .item4{background: #ffc107;}
    .item5{background: #03a9f4;}
    .box2{ background: #ddd; min-height: 150px; width: 150px; }
    .box2 div{ width: 50px;float: left; }
    .item1{background: #009688;}
    .item2{background: #8bc34a;}
    .item3{background: #ffeb3b;}
    .item4{background: red;}
    .item5{background: #03a9f4;}
    .box3{ background: #ddd; min-height: 150px; width: 150px; }
    .box3 div{ width: 50px; height:80px; float: left; }
    .item1{background: #009688;}
    .item2{background: #8bc34a;}
    .item3{background: #ffeb3b;}
    .item4{background: red;}
    .item5{background: #03a9f4;}
</style>
