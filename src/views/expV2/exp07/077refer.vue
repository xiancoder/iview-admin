<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">历史记录referer的操作</div>
            <div class="blogContent" v-highlight>
                <p>1 可以禁用 </p>
                <script type="text/html">
                    1.如果 referer-policy 的值为never：删除 http head 中的 referer；
                    2.如果 referer-policy 的值为default：如果当前页面使用的是 https 协议，而正要加载的资源使用的是普通的 http 协议，则将 http header 中的 referer 置为空；
                    3.如果 referer-policy 的值为 origin：只发送 origin 部分；
                    4.如果 referer-policy 的值为 always：不改变http header 中的 referer 的值，注意：这种情况下，如果当前页面使用了 https 协议，而要加载的资源使用的是 http 协议，加载资源的请求头中也会携带 referer。
                    <meta name="referrer" content="never">
                </script>
                <p>点击测试一下 <a href="https://www.baidu.com" target="_new" class="btn-link">https://www.baidu.com</a> 使用控制台 document.referrer 看效果 <span class="text-success">测试有效</span></p>
                <hr />
                <p>2 可以伪造 ??? </p>
                <p>HTTP_REFERER是可以伪造的，那么在php中，如何伪造HTTP_REFERER呢？</p>
                <script type="text/js">
                    <?php
                        $HTTP_REFERER = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
                        exit(json_encode(
                            array(
                                'status' => 'ok',
                                'refer' => $HTTP_REFERER
                            )
                        ));
                        function curl_post($url){
                             $ch = curl_init();
                             curl_setopt($ch, CURLOPT_URL, $url);
                             curl_setopt($ch, CURLOPT_REFERER, 'http://www.google.com');
                             $output = curl_exec($ch);
                             curl_close($ch);
                             return $output;
                        }
                        var_dump(curl_post("http://www.c.com/api.php"));
                    ————————————————
                    版权声明：本文为CSDN博主「dongxie548」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
                    原文链接：https://blog.csdn.net/u011250882/article/details/49679535/
                </script>
                <p class="text-danger">当然我们的浏览器语言js无法做到了</p>
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
