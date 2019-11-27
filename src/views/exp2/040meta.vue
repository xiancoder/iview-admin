<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">meta标签</div>
            <div class="blogContent" v-highlight>
                <p>meta标签共有两个属性，分别是http-equiv属性和name属性</p></p>
                <p>name属性主要用于描述网页，比如网页的关键词，叙述等。</p>
                <p>与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。</p>
                <script type="text/html">
                    <meta name="参数"content="具体的描述">
                </script>
                <hr />
                <p>网页文档的修改时间</p>
                <script type="text/html">
                    <meta name="revised" content="设计网, 6/24/2015"/>
                </script>
                <hr />
                <p>页面关键词，用于被搜索引擎收录</p>
                <script type="text/html">
                    <meta name="keywords" content="新闻,新闻中心, 新闻频道">
                </script>
                <hr />
                <p>页面描述，用于搜索引擎收录</p>
                <script type="text/html">
                    <meta name="description" content="新闻中心,包含各种的专业时事报道门户网站">
                </script>
                <hr />
                <p>用于控制页面缩放</p>
                <script type="text/html">
                    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, minimum-scale=1, user-scalable=no">
                </script>
                <hr />
                <p>详情可查看：<a href="http://www.cnblogs.com/lovesong/p/4355029.html">http://www.cnblogs.com/lovesong/p/4355029.html</a></p>
                <p>用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。</p>
                <ul>
                    <li>all：文件将被检索，且页面上的链接可以被查询，默认；</li>
                    <li>none：文件将不被检索，且页面上的链接不可以被查询；</li>
                    <li>index：文件将被检索；</li>
                    <li>follow：页面上的链接可以被查询；</li>
                    <li>noindex：文件将不被检索，但页面上的链接可以被查询；</li>
                    <li>nofollow：文件将不被检索，页面上的链接可以被查询。</li>
                </ul>
                <script type="text/html">
                    <meta name="参数"content="具体的描述">
                </script>
                <hr />
                <p>标注网页的作者</p>
                <script type="text/html">
                    <meta name="author" content="dashen" />
                </script>
                <hr />
                <p>说明网站的采用的什么软件制作</p>
                <script type="text/html">
                    <meta name="generator" content="Microsoft"/>
                </script>
                <hr />
                <p>网站版权信息</p>
                <script type="text/html">
                    <meta name="copyright" content="本页版权XXX所有。All Rights Reserved" />
                </script>
                <hr />
                <p>如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，</p>
                <p>可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。</p>
                <script type="text/html">
                    <meta name="revisit-after" content="7 days" >
                </script>
                <hr />
                <p>指定双核浏览器默认以何种方式渲染页面。</p>
                <p>PS：360浏览器支持</p>
                <script type="text/html">
                    <meta name="renderer" content="webkit">/*默认webkit内核*/
                    <meta name="renderer" content="ie-comp">/*默认IE兼容模式*/
                    <meta name="renderer" content="ie-stand">/*默认IE标准模式*/
                </script>
                <hr />
                <p>相当于HTTP的作用，比如说定义些HTTP参数啥的</p>
                <script type="text/html">
                    <meta http-equiv="参数" content="具体的描述">
                </script>
                <hr />
                <p>设定页面使用的字符集</p>
                <ul>
                    <li>GB2312时，代表说明网站是采用的编码是简体中文；</li>
                    <li>ISO-8859-1时，代表说明网站是采用的编码是英文；</li>
                    <li>UTF-8时，代表世界通用的语言编码；</li>
                    <li>PS：html5页面的做法是直接使用&lt;meta charset="utf-8"/&gt;</li>
                </ul>
                <script type="text/html">
                    <meta http-equiv="content-Type" content="text/html; charset=utf-8">
                    <meta charset="UTF-8">
                </script>
                <hr />
                <p>IE8的专用标记，用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式，以此来解决部分兼容问题。</p>
                <p>代码1 告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。</p>
                <p>代码2 告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。</p>
                <p>代码3 告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。</p>
                <p>代码4 IE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame.</p>
                <p>PS：谷歌添加一个插件：Google Chrome Frame（谷歌内嵌浏览器框架GCF），这个插件可以让用户的IE浏览器外不变，</p>
                <p>但用户在浏览网页时，实际上使用的是Google Chrome浏览器内核，而且支持IE6、7、8等多个版本的IE浏览器。</p>
                <script type="text/html">
                    <meta http-equiv="X-UA-Compatible" content="IE=7">
                    <meta http-equiv="X-UA-Compatible" content="IE=8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
                </script>
                <hr />
                <p>缓存机制</p>
                <ul>
                    <li>Public：指示响应可被任何缓存区缓存。</li>
                    <li>Private：指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效。</li>
                    <li>no-cache：指示请求或响应消息不能缓存。</li>
                    <li>no-store：用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。</li>
                    <li>max-age：指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。</li>
                    <li>min-fresh：指示客户机可以接收响应时间小于当前时间加上指定时间的响应。</li>
                    <li>max-stale：指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。</li>
                </ul>
                <script type="text/html">
                    <meta http-equiv="cache-control" content="no-cache">
                </script>
                <hr />
                <p>设定网页的过期时间。</p>
                <p>PS：必须使用GMT的时间格式</p>
                <script type="text/html">
                    <meta http-equiv="expires"content="Fri,12Jan200118:18:18GMT">
                </script>
                <hr />
                <p>自动刷新并指向新页面/或者本页面。</p>
                <p>PS：2代表页面停留2秒后跳转到后面的网址上</p>
                <script type="text/html">
                    <meta http-equiv="Refresh" content="2;URL=https://www.baidu.com">
                    <meta http-equiv="Refresh" content="5"/>
                </script>
                <hr />
                <p>如果网页过期，那么自动删除本地cookie。</p>
                <p>PS：必须使用GMT的时间格式。</p>
                <script type="text/html">
                    <meta http-equiv="Set-Cookie"content="cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/">
                </script>
                <hr />
                <p>强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作一个frame页调用</p>
                <script type="text/html">
                    <meta http-equiv="Window-target" content="_top">
                </script>
                <hr />
                <p>页面展示lcon</p>
                <script type="text/html">
                    <link type="image/x-icon" href="./images/icon.xian.ico" rel="icon">
                </script>
                <hr />
                <p>清掉 referrer 即从本页面跳转的链接都不携带来源</p>
                <ul>
                    <li>如果 referer-policy的值为never：删除http head中的referer；</li>
                    <li>如果 referer-policy的值为default：如果当前页面使用的是https协议，而正要加载资源使用的是普通的http协议，则将http header中额referer置为空；</li>
                    <li>如果 referer-policy的值origin：只发送origin部分；</li>
                    <li>如果 referer-policy的值为always：不改变http header中的referer的值；</li>
                </ul>
                <script type="text/html">
                    <meta name="referrer" content="never">
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
