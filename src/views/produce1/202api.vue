<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">API异步请求模块的使用麻烦的不行???那是你没看到有点和好处</div>
            <Divider orientation="right">未应用于项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p>1 代码集中 相同逻辑的处理办法唾手可得</p>
                <p>2 方便接口的增查改删流程单元测试 (没错接口的测试独立于页面逻辑之外)</p>
                <p>3 接口wiki都可以写在这里 方便查收备份 (接口归前端写)</p>
                <p>4 规范规范规范 写得好的跟写的差的一目了然</p>
                <p>5 接口字段或者接口格式写的再浪 在这里转换成我们方便使用的名称(驼峰写法),格式</p>
                <p>6 接口定义放在这里 注意不要放置敏感内容</p>
                <hr />
                <p>1 日期范围是两个字段(对应数据库) 但是在我们的控件是一个数组</p>
                <p class="text-dange">表单对于日期范围用的不多 但最好还是列举出来</p>
                <script type="text/html">
                </script>
                <p>2 日期控件返回的</p>
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
