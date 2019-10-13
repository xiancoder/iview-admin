<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">HTML5 &lt;template&gt;标签元素简介</div>
            <div class="blogContent" v-highlight>
                <p>&lt;script&gt;本身的特定，让内部的HTML标签是按照字符串处理的，因此，天生内容不显示。</p>
                <p>但是这种写法有个很大的问题，就是在IDE中书写模板HTML时候，标签自动闭合的永远是&lt;/script&gt;这个很讨厌的。</p>
                <p>&lt;textarea&gt;为文本域，里面嵌套的HTML片段会被当做文本域的值。</p>
                <p>但，文本域本身是可见的，因此需要额外的设置display: none;</p>
                <p>&lt;xmp&gt;是个很老很特殊的属性，语义为example，无示例。</p>
                <p>据说后来被&lt;pre&gt;标签取代而废止，实际上，目前，所有的浏览器都是支持的。</p>
                <p>但是，其跟&lt;pre&gt;标签不能划等号。&lt;pre&gt;里面有个&lt;img&gt;标签，显示的则是一张图片，而&lt;xmp&gt;呈现的就是一段HTML代码。</p>
                <p>不过，与&lt;textarea&gt;一样，内容不显示的话，还需要额外的设置display: none;</p>
                <p>上面这个&lt;template&gt;标签上没有设置display: none;，注意到了没有。为何？这只是发挥了&lt;template&gt;标签元素的原本特性，天生display:none，同时模板元素内部内容是死活不会呈现的。</p>
                <p>因此，无需设置隐藏。这就是HTML5 &lt;template&gt;标签元素特征之一：标签内容隐藏性.</p>
                <h6><kbd>举例</kbd>&nbsp;下面四种嵌套图片HTML，同时图片内容不显示，不会有请求的写法：</h6>
                <template>
                    <script type="text/template">
                        <img src="../../images/head.zhishui.jpg">
                    </script>
                </template>
                <template>
                    <textarea style="display: none;">
                        <img src="../../images/head.zhishui.jpg">
                    </textarea>
                </template>
                <script type="text/html">
                    <xmp style="display: none;">
                        <img src="../../images/head.zhishui.jpg">
                    </xmp>
                </script>
                <script type="text/html">
                    <template>
                        <img src="../../images/head.zhishui.jpg">
                    </template>
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
