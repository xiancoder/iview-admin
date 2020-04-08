<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">postMessage 跨域传递 h5新特性</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/js">
                    /*================================================================================*\
                    *  |说明|_postMessage 跨域传递 h5新特性
                    *  |说明|window.postMessage允许多个 window/frame之间跨域传递数据和信息。
                    *  |说明|下面为大家介绍下window.postMessage的工作原理
                    *  |说明|以及如何在FireFox，IE8+，Opera，Safari和Chrome中使用它。
                    *  |说明|就和其他所有的Web技术一样
                    *  |说明|如果使用不当(没有验证事件源)那危险性是显而易见的
                    *  |说明|当然，安全性由你自己来保证[1]。
                    *  |说明|message顾名思义就是发送的数据内容，支持字符串、数字、json等几乎所有形式的数据（详见The structured clone algorithm）
                    *  |说明|targetOrigin是接收方的URI（协议+主机+端口），也可以是url形式，但之后的内容（形如xx.html）会自动忽略；用通配符*可以指定所有域，但是切记不要用（for security）。
                    *  |说明|transfer可省略，没看懂是啥意思...以后有需要的时候再研究
                    \*================================================================================*/
                        // if(window.postMessage) console.log("postMessage is ok");
                        function xcvxv22(){
                            window.addEventListener('message',function(e){
                                var color=e.data; console.log("postMessage 回传了"+color);
                            },false);
                            window.frames[0].postMessage('哇哈哈哈哈','http://192.168.0.31:80');
                        }
                    /*未完待续*/
                </script>
                <hr />
                <p>1 在目标页面(A) 执行adx(JS)</p>
                <p>2 生成结构Iframe 内嵌页面(B) B为我方页面</p>
                <p>3 使用postMessage/iframeSrc 来传递信息</p>
                <p>4 达成种cookie的效果</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
