<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">js - 模块化开发的兼容exports的套路 </div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 </p>
                <p>自执行函数的。好处是，还可以返回一个有效函数体。</p>
                <p></p>
                <script type="text/js">
                    ;(function () {})();
                    // 小技巧（如果不加上！会报错，加上之后还能返回true呢。）
                    // 但由于衡返回true。所以只有某些函数是只执行，不在于返回结果的可以用这种。
                    ;!function(){};
                </script>
                <p>适用于遵循CommonJs 、 AMD/CMD 的套路</p>
                <script type="text/js">
                    ;(function (root, factory) {
                        if (typeof exports === "object") {
                            module.exports = factory();
                        } else if (typeof define === "function" && define.amd) {
                            define([], factory);
                        } else {
                            root.ol = factory();
                        }
                    })(this,function () {
                        // ... 这里编写你的代码
                        return {};
                    })
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
