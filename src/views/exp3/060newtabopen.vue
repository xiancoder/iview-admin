<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">打开新页面</div>
            <div class="blogContent" v-highlight>
                <p>业务需要 我要在新页面打开网页 / 而且是要打开多个</p>
                <p> 之前收录的代码普遍使用的都是<b>a  href="<a href="http://www.baidu.com" target="_new">http://www.baidu.com</a>" target="_new"</b> </p>
                <p>
                    效果呵呵 <span class="text-info">第一次打开完美</span>
                    || <span class="text-danger">第N次打开 会无限覆盖第一个</span>
                    || <span class="text-warning">放弃吧</span>
                </p>
                <p> 基于这个原理制作的方法也就出错了 </p>
                <hr />
                <p>
                    尝试 纯HTML
                    <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>
                    <span class="text-info">完美 </span>
                </p>
                <p>
                    基于这个原理重新制作的方法<b>openTab</b>
                    <a href="javascript:void(0)" @click="openTab('http://www.baidu.com')"> http://www.baidu.com</a>
                </p>
                <hr />
                <p><code>参考资料 不大懂 直接加在openTab方法中</code></p>
                <blockquote >
                    <h4><b>网页打开新窗口target=_blank不符合标准</b></h4>
                    <p>在HTML4.01/XHTML1.0/XHTML1.1严格DOCTYPE下，target="_blank"、target="_self"等等语法都是无效的，我们只能通过JavaScript来变通实现有朋友问为什么不允许使用target="_blank"？这个属性很方便啊。可能老外觉得不经过用户同意，没有明确提示就打开一个新窗口是不礼貌的。先不管这个取消是否合理，我们来看看解决办法。 </p>
                    <p>原来这样写的代码： [a href="document.html" target="_blank"] 打开一个新窗口[/a] </p>
                    <p>现在要写成这样：[a href="document.html" rel="external" target="_blank"]打开一个新窗口[/a]</p>
                    <p>这是符合strict标准的方法。</p>
                    <p></p>
                </blockquote>
                <hr />
                <p>
                    window.open() 我记得这个方法本身就有兼容问题 (IE6时代的产物)
                    <span class="text-info"> 但是瑶瑶说她们之前一直在用 </span>
                    研究一下
                </p>
                <p>
                    简单测试一下 看看浏览器的兼容情况
                    <button class="btn btn-info" type=button @click="open22()">open22</button>
                    <button class="btn btn-info" type=button @click="open23()">open23</button>
                    <span class="text-info" > 效果完美 </span>
                </p>
                <table class="table"> <tbody> <tr><th align="left" width="20%">参数</th><th align="left" width="80%">说明</th></tr> <tr> <td>URL</td> <td>可选。打开指定的页面的URL。如果没有指定URL，打开与新的空白窗口</td> </tr> <tr> <td>name</td> <td>可选。指定target属性或窗口的名称。支持以下值： <ul> <li>_blank - URL加载到一个新的窗口。这是默认</li> <li>_parent - URL加载到父框架</li> <li>_self - URL替换当前页面</li> <li>_top - URL替换任何可加载的框架集</li> <li><em>name</em>&nbsp;- 窗口名称</li> </ul> </td> </tr> <tr> <td>specs</td> <td>可选。一个逗号分隔的项目列表。支持以下值：<br><br> <table class="table"> <tbody> <tr> <td>channelmode=yes|no|1|0</td> <td>是否要在影院模式显示 window。默认是没有的。仅限IE浏览器</td></tr> <tr> <td>directories=yes|no|1|0</td> <td>是否添加目录按钮。默认是肯定的。仅限IE浏览器</td> </tr> <tr> <td>fullscreen=yes|no|1|0</td> <td>浏览器是否显示全屏模式。默认是没有的。在全屏模式下的 window，还必须在影院模式。仅限IE浏览器</td> </tr> <tr> <td>height=pixels</td> <td>窗口的高度。最小.值为100</td> </tr> <tr> <td>left=pixels</td> <td>该窗口的左侧位置</td> </tr> <tr> <td>location=yes|no|1|0</td> <td>是否显示地址字段.默认值是yes</td> </tr> <tr> <td>menubar=yes|no|1|0</td> <td>是否显示菜单栏.默认值是yes</td> </tr> <tr> <td>resizable=yes|no|1|0</td> <td>是否可调整窗口大小.默认值是yes</td> </tr> <tr> <td>scrollbars=yes|no|1|0</td> <td>是否显示滚动条.默认值是yes</td> </tr> <tr> <td>status=yes|no|1|0</td> <td>是否要添加一个状态栏.默认值是yes</td> </tr> <tr> <td>titlebar=yes|no|1|0</td> <td>是否显示标题栏.被忽略，除非调用HTML应用程序或一个值得信赖的对话框.默认值是yes</td> </tr> <tr> <td>toolbar=yes|no|1|0</td> <td>是否显示浏览器工具栏.默认值是yes</td> </tr> <tr> <td>top=pixels</td> <td>窗口顶部的位置.仅限IE浏览器</td> </tr> <tr> <td>width=pixels</td> <td>窗口的宽度.最小.值为100</td> </tr> </tbody> </table> </td> </tr> <tr> <td>replace</td> <td>Optional.Specifies规定了装载到窗口的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目。支持下面的值： <ul> <li>true - URL 替换浏览历史中的当前条目。</li> <li>false - URL 在浏览历史中创建新的条目。</li> </ul> </td> </tr> </tbody> </table>
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
        openTab: function (url) {
            var a = document.createElement('a')
            a.href = url
            a.target = '_blank'
            a.rel = 'external'
            document.body.appendChild(a)
            a.click()
        },
        open22: function () {
            var width = 800 // 弹出窗口的宽度;
            var height = 500 // 弹出窗口的高度;
            var top = (window.screen.availHeight - height) / 2 // 窗口的垂直位置;
            var left = (window.screen.availWidth - width) / 2 // 窗口的水平位置;
            window.open(
                'http://www.baidu.com', 'newwindow',
                'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left +
                ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no'
            )
        },
        open23: function () {
            window.open('http://www.baidu.com', '_blank')
        }
    },
    mounted () {
    }
}
</script>
