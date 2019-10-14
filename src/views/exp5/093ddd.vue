<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">换行 溢出文本 省略号 样式</div>
            <div class="blogContent" v-highlight>
                <p>如果我们要表格中的文字强制换行(尤其是在一长串英文文本，并且中间无空格分隔的情况下)，以达到使过长的文字不撑破表格的目的，就需要在样式中添加以下两行代码：</p>
                <script type="text/css">
                    word-wrap: break-word;
                    word-break: break-all;
                </script>
                <p>强制换行</p>
                <script type="text/css">
                    word-break: break-all; 只对英文起作用，以字母作为换行依据。
                    word-wrap: break-word; 只对英文起作用，以单词作为换行依据。
                    white-space: pre-wrap; 只对中文起作用，强制换行。
                </script>
                <p>禁止换行</p>
                <script type="text/css">
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                </script>
                <p>项目中常常有这种需要我们对溢出文本进行"..."显示的操作，单行多行的情况都有（具体几行得看设计师心情了）</p>
                <script type="text/css">
                    /*单行*/
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap
                </script>
                <div style=" width: 100px;overflow:hidden; text-overflow:ellipsis; white-space:nowrap;color:red">
                    文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号
                </div>
                <hr />
                <p>直接用css属性设置(只有-webkit内核才有作用)</p>
                <p>移动端浏览器绝大部分是WebKit内核的，所以该方法适用于移动端；</p>
                <ul>
                    <li>text-overflow: ellipsis 以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本。</li>
                    <li>display: -webkit-box 将对象作为弹性伸缩盒子模型显示 。</li>
                    <li>-webkit-line-clamp 用来限制在一个块元素显示的文本的行数,这是一个不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。</li>
                    <li>-webkit-box-orient 设置或检索伸缩盒对象的子元素的排列方式 。</li>
                </ul>
                <script type="text/css">
                    /*多行*/
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                </script>
                <div style=" width: 100px;overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;color:red;">
                    文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略
                </div>
                <hr />
                <p>利用伪类可以轻松实现 但是 <b>IE6/7是没有伪类的，还不赶快跪下对IE叫声“大哥”</b></p>
                </p>
                <div id="con">
                    <span id="txt">文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略</span>
                    <span class="t"></span>
                </div>
                <hr />
                <p>利用绝对定位和padding;(跨浏览器解决方案)</p>
                <p id="con2">
                    文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略
                    <span class="t2">...</span>
                </p>
                <p>其他 利用js插件来实现该功能，这里有俩款插件推荐 Clamp.js jQuery.dotdotdot</p>
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
    #txt{ display: inline-block; height: 40px; width: 250px; line-height: 20px; overflow: hidden; font-size: 16px;color:red }
    .t:after{ display: inline; content: "..."; font-size: 16px; }
    #con2{ position: relative; height: 40px; width: 250px; line-height: 20px; overflow: hidden; padding-right: 12px;color:red }
    .t2{ position: absolute; right: 0; bottom: 0; }
</style>
