<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">MockJs 假数据生产专家</div>
            <div class="blogContent" v-highlight>
                <p><a href="http://mockjs.com/examples.html#Random\.id\(\)">http://mockjs.com/examples.html#Random\.id\(\)</a></p>
                <script type="text/html">
                    // 生成用户
                    const userList = Mock.mock({
                        'list|40': [{
                            'userId': '@increment(100)',
                            'userName': '@cname'
                        }]
                    });
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
