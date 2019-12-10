<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">viewUi card 发扬光大</div>
            <div class="blogContent" v-highlight>
                <Row style="background:#eee;padding:20px">
                    <Col span="11">
                        <Card :bordered="false">
                            <p slot="title">Borderless card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                    <Col span="11" offset="2">
                        <Card shadow>
                            <p slot="title">Use a card with a shadow effect</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <Card style="width:320px">
                    <div style="text-align:center">
                        <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
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
