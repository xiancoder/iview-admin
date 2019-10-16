<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">混用exports以及module.exports</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
                    export default {}
                    exports = module.exports = {}
                </script>
                <p>Vue报错：Uncaught TypeError: Cannot assign to read only property’exports‘ of object’#&lt;Object&gt;‘的解决方法</p>
                <p>发现问题</p>
                <p>运行一下以前的一个Vue+webpack的 vue仿新闻网站  小项目，报错</p>
                <p>Uncaught TypeError: Cannot assign to read only property 'exports' of object '#&lt;Object&gt;' </p>
                <p>点开错误的文件，标注错误的地方是这样的一段代码：</p>
                <script type="text/html">
                    import {normalTime} from './timeFormat';
                    module.exports={
                        normalTime
                    };
                </script>
                <p>就是 module.exports; </p>
                <p>同过谷歌查找，和论坛各种搜索:原因如下：</p>
                <p>The code above is ok. You can mix require and export. You can‘t mix import and module.exports. </p>
                <p>翻译过来就是说，代码没毛病，在webpack打包的时候，可以在js文件中混用require和export。但是不能混用import 以及module.exports</p>
                <p>因为webpack 2中不允许混用import和 module.exports</p>
                <p>解决办法就是统一改成ES6的方式编写即可.</p>
                <p></p>
                <script type="text/html">
                    import {normalTime} from './timeFormat';
                    export default normalTime;
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
