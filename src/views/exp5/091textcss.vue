<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">文本样式</div>
            <div class="blogContent" v-highlight>
                <p class="text-muted">&lt;p class="text-muted"&gt;文本颜色&lt;p&gt;</p>
                <p class="text-primary">&lt;p class="text-primary"&gt;文本颜色&lt;p&gt;</p>
                <p class="text-success">&lt;p class="text-success"&gt;文本颜色&lt;p&gt;</p>
                <p class="text-info">&lt;p class="text-info"&gt;文本颜色&lt;,p&gt;</p>
                <p class="text-warning">&lt;p class="text-warning"&gt;文本颜色&lt;p&gt;</p>
                <p class="text-danger">&lt;p class="text-danger"&gt;文本颜色&lt;p&gt;</p>
                <a class="btn-link" href="#"> &lt;a class="btn-link" href="#"&gt;超链接&lt;/a&gt; </a>
                <p class="bg-primary">&lt;p class="bg-primary"&gt;文本背景色&lt;p&gt;</p>
                <p class="bg-success">&lt;p class="bg-success"&gt;文本背景色&lt;p&gt;</p>
                <p class="bg-info">&lt;p class="bg-info"&gt;文本背景色&lt;p&gt;</p>
                <p class="bg-warning">&lt;p class="bg-warning"&gt;文本背景色&lt;p&gt;</p>
                <p class="bg-danger">&lt;p class="text-muted"&gt;文本背景色&lt;p&gt;</p>
                <p class="bg-danger">&lt;p class="text-muted"&gt;文本背景色&lt;p&gt;</p>
                <pre>&lt;pre&gt;...&lt;span class="caret"&gt;&lt;/span&gt;&lt;/pre&gt; <span class="caret"></span><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </pre>
                <h1>vueIview <small>h1</small></h1>
                <h2>vueIview <small>h2</small></h2>
                <h3>vueIview <small>h3</small></h3>
                <h4>vueIview <small>h4</small></h4>
                <h5>vueIview <small>h5</small></h5>
                <h6>vueIview <small>h6</small></h6>
                <p class="lead">&lt;p class="lead"&gt;通过 .lead 让段落突出显示</p>
                <p>马克一下 <mark>&lt;mark&gt;highlight&lt;/mark&gt;</mark> text.</p>
                <p><del>&lt;del&gt;被删除的文本&lt;/del&gt;</del></p>
                <p><s>&lt;s&gt;2016年7月29日 14:16:29 同上&lt;/s&gt;</s></p>
                <p><ins>&lt;ins&gt;额外插入的文本使用&lt;/ins&gt;</ins></p>
                <p><u>&lt;u&gt;This line of text will render as underlined&lt;/u&gt;</u></p>
                <p class="text-lowercase">&lt;p class="text-lowercase"&gt;小写文本 text.&lt;p&gt;</p>
                <p class="text-uppercase">&lt;p class="text-uppercase"&gt;大写文本 text.&lt;p&gt;</p>
                <p class="text-capitalize">&lt;p class="text-capitalize"&gt;首字母大写文本 text.&lt;p&gt;</p>
                <p><abbr title="attribute">&lt;abbr title="attribute"&gt;attr&lt;abbr&gt;</abbr></p>
                <p><small>&lt;small&gt;文本格式&lt;/small&gt;</small></p>
                <p><strong>&lt;strong&gt;文本格式&lt;/strong&gt;</strong></p>
                <p><em>&lt;em&gt;文本格式&lt;/em&gt;</em></p>
                <p class="text-left">&lt;p class="text-left"&gt;文本格式&lt;/p&gt;</p>
                <p class="text-center">&lt;p class="text-center"&gt;文本格式&lt;/p&gt;</p>
                <p class="text-right">&lt;p class="text-right"&gt;文本格式&lt;/p&gt;</p>
                <p>For example, <code>&lt;code&gt;section&lt;/code&gt;</code> should be wrapped as inline.</p>
                <p>To switch directories, type <kbd>&lt;kbd&gt;cd&lt;/kbd&gt;</kbd> followed by the name of the directory.</p>
                <p>To edit settings, press <kbd>ctrl</kbd> + <kbd>,</kbd></p>
                <address>
                    <strong>Twitter, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                    <a href="mailto:#">first.last@example.com</a>
                </address>
                <blockquote>
                    <h5>大弦嘈嘈如急雨，小弦切切如私雨。</h5>
                    <h5>二十四桥明月夜，玉人何处教吹箫。</h5>
                    <footer class="text-right">杜牧-<cite title="寄扬州韩绰判官">《寄扬州韩绰判官》</cite></footer>
                </blockquote>
                <blockquote class="blockquote-reverse">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                    <h5>Integer posuere erat a ante.</h5>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p class="tt5">文本阴影 text-shadow 兼容一下ie</p>
                <p class="tt6">文本阴影 text-shadow 兼容一下ie</p>
                <div class="tt7"><div class="tt71">文本阴影 text-shadow 兼容一下ie</div>文本阴影 text-shadow 兼容一下ie</div>
                <script type="text/css">
                    .tt5{ margin:0;color:#fff;text-shadow:0 0 1px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
                    .tt6{ margin:0;color:#fff;text-shadow:0 0 5px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
                    .tt7{ margin:0;position:relative;}
                    .tt71{margin:-1px 0 0 -1px; color:#fff; position:absolute;}
                </script>
                <p>段首空两格样式</p>
                <p class="tt1">1234567890</p>
                <p>对应文字间隔距离</p>
                <p class="tt2">对对应div设置css属性样式为letter-spacing:8px;，字间距为8px</p>
                <script type="text/css">
                    .tt1{ text-indent:2em;}
                    .tt2{letter-spacing:8px;}
                </script>
                <p>逗号分隔的列表</p>
                <p class="xianUtil">
                    <ul class="liComma"> <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> </ul>
                </p>
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
<style>
    .tt5{ margin:0;color:#fff;text-shadow:0 0 1px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
    .tt6{ margin:0;color:#fff;text-shadow:0 0 5px rgb(0, 0, 0); filter:glow(color=black, strength=5); }
    .tt7{ margin:0;position:relative;}
    .tt71{margin:-1px 0 0 -1px; color:#fff; position:absolute;}
    .tt1{ text-indent:2em;}
    .tt2{letter-spacing:8px;}
</style>
