<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">简单可信赖的便宜方法 (无依赖无node)</div>
            <Divider orientation="right">项目在公共方法上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/js">
                    // 简单无依赖的获取日期字符串
                    function easyToday(d){
                        d = d || new Date()
                        var Y = d.getFullYear()
                        var M = d.getMonth() + 1
                        var D = d.getDate()
                        return Y + '-' + (M < 10 ? ('0' + M) : M) + '-' + (D < 10 ? ('0' + D) : D)
                    }
                    // 简单无依赖的日期字符串转时间戳
                    function getDateTime(a) {
                        a= a.replace("-","/"); // 替换字符，变成标准格式
                        return  new Date(Date.parse(customTime));
                    }
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
