<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">全局监听事件对vue对象的操作</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p>oa项目需求</p>
                <p>不管我浏览哪个表格/表单 点回车即触发表格搜索/表单提交</p>
                <p><font color="#9900cc">vue的设计者不希望使用者为其加入全局dom操作</font></p>
                <p>
                    <Button class="globeDoSearch" @click="search()">搜索</Button>
                    <Button class="globeDoSubmit" @click="submit()">提交</Button>
                    测试按钮
                    <Button class="globeDoSubmit" @click="search2()">外力触发</Button>
                </p>
                <script v-pre type="text/html">
                    <Button class="globeDoSearch" @click="search()">搜索</Button>
                    <Button class="globeDoSubmit" @click="submit()">提交</Button>
                    <hr />
                    <Button class="globeDoSubmit" @click="search2()">外力触发</Button>
                </script>
                <script v-pre type="text/js">
                    search2() {
                        document.querySelector(".globeDoSearch").click()
                    },
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
