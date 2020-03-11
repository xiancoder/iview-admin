<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue-cli3内存溢出，JavaScript heap out of memory</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <p>vue-cli3内存溢出，JavaScript heap out of memory</p>
                <p>本地一个项目是使用vue-cli2构建的，可以正常运行。</p>
                <p>打算升级到vue-cli@3，遭遇了运行npm run dev无法运行，爆出JavaScript heap out of memory 的问题。</p>
                <p>vue-cli3遇到此问题的解决办法：</p>
                <p>scripts中添加一句指令</p>
                <p>安装两个npm包 ： increase-memory-limit 和cross-env</p>
                <p>安装完成后，先执行一次 npm run fix-memory-limit，然后yarn serve启动即可</p>
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
