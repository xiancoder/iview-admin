<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Flex布局的高级应用</div>
            <div class="blogContent" v-highlight>
                <p>流式布局: 好处 大大减少了css的兼容问题和代码量</p>
                <p>流式布局: 坏处 必须手动指定空白单位数量</p>
                <script type="text/css">
                    .box {
                        width: 200px; height: 200px;
                        background-color: #000;
                        border-left: 1px solid red; border-top: 1px solid red;
                        display: flex; display: -webkit-flex;
                        flex-flow: row wrap; -webkit-flex-flow: row wrap;
                        align-content: flex-start; -webkit-align-content: flex-start;
                    }
                    .item {
                        height: 50px;
                        background-color: #fff;
                        border-right: 1px solid red; border-bottom: 1px solid red;
                        box-sizing: border-box;
                        flex: 0 0 25%; -webkit-flex: 0 0 25%;
                        display: flex; display: -webkit-flex;
                        align-items: center; -webkit-align-items: center;
                        flex-wrap: wrap; -webkit-flex-wrap: wrap;
                    }
                    .item div{
                        height: 20px; width: 100%; line-height: 20px;
                        background: #f4f4f4;
                        text-align: center;
                    }
                </script>
                <hr />
                <Row>
                    <Col span="12">
                        <div class="box">
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div>
                        </div>
                    </Col>
                    <Col span="12">
                        <div class="box">
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div> <div class="item"><div>$</div></div>
                            <div class="item"><div>$</div></div> <div class="item"><div></div></div> <div class="item"><div></div></div> <div class="item"><div></div></div>
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
            <div class="blog">
                <div class="blogTitle">flex布局 居中兼容一行两行</div>
                <div class="blogContent" v-highlight>
                    <p>一行时候严格照着设计图来搞 两行也能兼容显示</p>
                    <p>三行就点点点了</p>
                    <Row>
                        <Col span="16">
                            <script type="text/css">
                                .box1 {
                                    width: 200px; height: 100px;
                                    background-color: #000;
                                    display: flex; display: -webkit-flex;
                                    align-items: center;/*交叉轴的中点对齐。*/
                                    -webkit-align-items: center; /* Safari 7.0+ */
                                }
                                .item1 {
                                    line-height: 20px;
                                    background-color: #666;
                                    color:#fff;
                                    padding:0 20px;
                                    text-align:center;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                }
                            </script>
                        </Col>
                        <Col span="8">
                            <div class="box1">
                                <div class="item1">阿斯顿发沙发沙发斯蒂芬</div>
                            </div>
                            <hr />
                            <div class="box1">
                                <div class="item1">阿斯顿发沙发沙发斯蒂芬阿斯顿发沙</div>
                            </div>
                            <hr />
                            <div class="box1">
                                <div class="item1">阿斯顿发沙发沙发斯蒂芬阿斯顿发沙发沙发斯蒂芬阿斯顿发沙发沙发斯蒂芬</div>
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
<style scoped>
    .box {
        width: 200px; height: 200px;
        background-color: #000;
        border-left: 1px solid red; border-top: 1px solid red;
        display: flex; display: -webkit-flex;
        flex-flow: row wrap; -webkit-flex-flow: row wrap;
        align-content: flex-start; -webkit-align-content: flex-start;
    }
    .item {
        height: 50px;
        background-color: #fff;
        border-right: 1px solid red; border-bottom: 1px solid red;
        box-sizing: border-box;
        flex: 0 0 25%; -webkit-flex: 0 0 25%;
        display: flex; display: -webkit-flex;
        align-items: center; -webkit-align-items: center;
        flex-wrap: wrap; -webkit-flex-wrap: wrap;
    }
    .item div{
        height: 20px; width: 100%; line-height: 20px;
        background: #f4f4f4;
        text-align: center;
    }
    .box1 {
        width: 200px; height: 100px;
        background-color: #000;
        display: flex; display: -webkit-flex;
        align-items: center;/*交叉轴的中点对齐。*/
        -webkit-align-items: center; /* Safari 7.0+ */
    }
    .item1 {
        line-height: 20px;
        background-color: #666;
        color:#fff;
        padding:0 20px;
        text-align:center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
