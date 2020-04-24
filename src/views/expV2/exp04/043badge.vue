<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Badge 徽标数</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 主要用于通知未读数的角标，提醒用户点击。</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <Badge :count="3">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge>
                    <a href="#" class="demo-badge" style="margin-left: 32px"></a>
                    <Icon type="md-time" slot="count" color="#ed4014" size="16" />
                </Badge>
                <Badge dot>
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge dot>
                    <Icon type="ios-notifications-outline" size="26"></Icon>
                </Badge>
                <Badge dot>
                    <a href="#">可以是一个链接</a>
                </Badge>
                <Badge :count="100">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="1000" overflow-count="999">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge text="new">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge text="hot">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <Badge status="success" text="Success" />
                <Badge status="error" text="Error" />
                <Badge status="default" text="Default" />
                <Badge status="processing" text="Processing" />
                <Badge status="warning" text="Warning" />
                <Badge color="blue" text="blue" />
                <Badge color="green" text="green" />
                <Badge color="red" text="red" />
                <Badge color="yellow" text="yellow" />
                <Badge color="pink" text="pink" />
                <Badge color="magenta" text="magenta" />
                <Badge color="volcano" text="volcano" />
                <Badge color="orange" text="orange" />
                <Badge color="gold" text="gold" />
                <Badge color="lime" text="lime" />
                <Badge color="cyan" text="cyan" />
                <Badge color="geekblue" text="geekblue" />
                <Badge color="purple" text="purple" />
                <strong>Custom:</strong>
                <Badge color="#2db7f5" text="#2db7f5" />
                <Badge color="#f50" text="#f50" />
                <Badge :count="5" type="primary">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="success">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="normal">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="info">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="error">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="warning">
                    <a href="#" class="demo-badge"></a>
                </Badge>
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
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
