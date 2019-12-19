<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Vue] import from的目标 加载顺序和默认项</div>
            <div class="blogContent" v-highlight>
                <p>Vue使用import ... from ...来导入组件，库，变量等。而from后的来源可以是js，vue，json。</p>
                <p>这个是在webpack.base.conf.js中设置的：</p>
                <code class="javascript">
                    module.exports = {
                        resolve: {
                            extensions: ['.js', '.vue', '.json'],
                            alias: {
                                '@': resolve('src')
                            }
                        }
                        ...
                    }
                </code>
                <p>这里的extensions指定了from后可导入的文件类型。</p>
                <p>上面定义的这3类可导入文件，js和vue是可以省略后缀的</p>
                <code class="javascript">
                    import test from './test.vue' /* 等同于： import test from './test' */
                    import test from './test.js' /* 等同于： import test from './test' */
                    import test from './test.json' /* 省略为： import test from './test' 则编译出错。 */
                </code>
                <p>若test.vue，test.js同时存在于同一个文件夹下，则import的导入优先级是js>vue</p>
                <h2>from后的来源除了文件，还可以是文件夹</h2>
                <p>if(package.json存在 && package.main字段存在 && package.main指定的js存在) { 取package.main指定的js作为from的来源 }</p>
                <p>else if(index.js存在){ 取index.js作为from的来源 }</p>
                <p>else { 取index.vue作为from的来源 }</p>
                <p>省略后缀与加载文件夹</p>
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
