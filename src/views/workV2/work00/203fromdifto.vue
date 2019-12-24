<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">本文档指的是 读取数据库读来A格式但是提交时候却是B格式</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1 完整格式用于渲染展示 / id数组用于提交</p>
                <script type="text/js">
                    /* 读取接口 ajax */
                    res = {
                        data: [
                            {a:1, b:1, c:1}, {a:2, b:2, c:2}, {a:3, b:3, c:3}, {a:4, b:4, c:4}, {a:5, b:5, c:5},
                            {a:1, b:1, c:1}, {a:2, b:2, c:2}, {a:3, b:3, c:3}, {a:4, b:4, c:4}, {a:5, b:5, c:5},
                            {a:1, b:1, c:1}, {a:2, b:2, c:2}, {a:3, b:3, c:3}, {a:4, b:4, c:4}, {a:5, b:5, c:5},
                            {a:1, b:1, c:1}, {a:2, b:2, c:2}, {a:3, b:3, c:3}, {a:4, b:4, c:4}, {a:5, b:5, c:5}
                        ]
                    }
                    return res.data
                    /* 然后赋值给相对应变量 已经获取了关键数据 */
                    this.$api.xxxfun().then(list => {
                        this.xxx = list
                    })
                    /* 用于页面展示 添加删除 各种整理 然后提交 */
                    this.$api.xxxfun({
                        list: this.xxx
                    }).then(res => { })
                    /* 提交接口 ajax */
                    function( { list } ){
                    const llll = []
                    list.forEach(row => {
                        llll.push(row.a)
                    })
                    $.ajax( {
                        url:'some.php', data:{ ids: llll }
                    });
                    /* 处理结果有promise提供 */
                </script>
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
        return {
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
