<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">文本样式</div>
            <div class="blogContent" v-highlight>
                <span class="text-muted">&lt;span class="text-muted"&gt;文本颜色&lt;span&gt;</span>
                <span class="text-success">&lt;span class="text-success"&gt;文本颜色&lt;span&gt;</span>
                <span class="text-info">&lt;span class="text-info"&gt;文本颜色&lt;,span&gt;</span>
                <hr />
                <span class="text-warning">&lt;span class="text-warning"&gt;文本颜色&lt;span&gt;</span>
                <span class="text-danger">&lt;span class="text-danger"&gt;文本颜色&lt;span&gt;</span>
                <a class="btn-link" href="#"> &lt;a class="btn-link" href="#"&gt;超链接&lt;/a&gt; </a>
                <hr />
                <span class="bg-success">&lt;span class="bg-success"&gt;文本背景色&lt;span&gt;</span>
                <span class="bg-info">&lt;span class="bg-info"&gt;文本背景色&lt;span&gt;</span>
                <span class="bg-warning">&lt;span class="bg-warning"&gt;文本背景色&lt;span&gt;</span>
                <hr />
                <span class="bg-danger">&lt;span class="text-muted"&gt;文本背景色&lt;span&gt;</span>
                <span class="bg-danger">&lt;span class="text-muted"&gt;文本背景色&lt;span&gt;</span>
                <hr />
                <h1>vueIview <small>h1</small></h1>
                <h2>vueIview <small>h2</small></h2>
                <h3>vueIview <small>h3</small></h3>
                <h4>vueIview <small>h4</small></h4>
                <h5>vueIview <small>h5</small></h5>
                <h6>vueIview <small>h6</small></h6>
                <hr />
                <span class="lead">&lt;span class="lead"&gt;通过 .lead 让段落突出显示</span>
                <span>马克一下 <mark>&lt;mark&gt;highlight&lt;/mark&gt;</mark> text.</span>
                <span><del>&lt;del&gt;被删除的文本&lt;/del&gt;</del></span>
                <hr />
                <span><s>&lt;s&gt;2016年7月29日 14:16:29 同上&lt;/s&gt;</s></span>
                <span><ins>&lt;ins&gt;额外插入的文本使用&lt;/ins&gt;</ins></span>
                <span><u>&lt;u&gt;This line of text will render as underlined&lt;/u&gt;</u></span>
                <hr />
                <span><abbr title="attribute">&lt;abbr title="attribute"&gt;attr&lt;abbr&gt;</abbr></span>
                <span><small>&lt;small&gt;文本格式&lt;/small&gt;</small></span>
                <span><strong>&lt;strong&gt;文本格式&lt;/strong&gt;</strong></span>
                <hr />
                <span><em>&lt;em&gt;文本格式&lt;/em&gt;</em></span>
                <span class="text-left">&lt;span class="text-left"&gt;文本格式&lt;/span&gt;</span>
                <span class="text-center">&lt;span class="text-center"&gt;文本格式&lt;/span&gt;</span>
                <hr />
                <code>&lt;code&gt;section&lt;/code&gt;</code>
                <hr />
                <span>To edit settings, spanress <kbd>ctrl</kbd> + <kbd>,</kbd></span>
                <hr />
                <address>
                    <strong>Twitter, Inc.</strong><br>
                    San Francisco, CA 94107<br>
                    <abbr title="spanhone">span:</abbr> (123) 456-7890
                    <a href="mailto:#">first.last@examspanle.com</a>
                </address>
                <hr />
                <blockquote>
                    <h5>大弦嘈嘈如急雨，小弦切切如私雨。</h5>
                    <h5>二十四桥明月夜，玉人何处教吹箫。</h5>
                    <footer class="text-right">杜牧-<cite title="寄扬州韩绰判官">《寄扬州韩绰判官》</cite></footer>
                </blockquote>
                <hr />
                <span class="tt5">文本阴影 text-shadow 兼容一下ie</span>
                <span class="tt6">文本阴影 text-shadow 兼容一下ie</span>
                <div class="tt7"><div class="tt71">文本阴影 text-shadow 兼容一下ie</div>文本阴影 text-shadow 兼容一下ie</div>
                <script type="text/css">
                    .tt5{ margin:0;color:#fff;text-shadow:0 0 1px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
                    .tt6{ margin:0;color:#fff;text-shadow:0 0 5px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
                    .tt7{ margin:0;position:relative;}
                    .tt71{ margin:-1px 0 0 -1px; color:#fff; position:absolute;}
                </script>
                <span>段首空两格样式</span>
                <span class="tt1">1234567890</span>
                <span>对应文字间隔距离</span>
                <span class="tt2">对对应div设置css属性样式为letter-sspanacing:8px;，字间距为8px</span>
                <script type="text/css">
                    .tt1{ text-indent:2em;}
                    .tt2{ letter-spacing:8px;}
                </script>
                <span>逗号分隔的列表</span>
                <span class="xianUtil">
                    <ul class="liComma"> <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> </ul>
                </span>
                <script type="text/html">
                    <span class="xianUtil">
                        <ul class="liComma"> <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> </ul>
                    </span>
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
<style scoped>
    .tt5{ margin:0;color:#fff;text-shadow:0 0 1px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
    .tt6{ margin:0;color:#fff;text-shadow:0 0 5px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
    .tt7{ margin:0;spanosition:relative;}
    .tt71{margin:-1px 0 0 -1px; color:#fff; spanosition:absolute;}
    .tt1{ text-indent:2em;}
    .tt2{letter-sspanacing:8px;}
</style>
