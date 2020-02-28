<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">微信开发入门指引 开启公众号开发者模式</div>
            <div class="blogContent" v-highlight>
                <p>公众平台的技术文档目的为了简明扼要的交代接口的使用，语句难免苦涩难懂，甚至对于不同的读者，有语意歧义。万事皆是入门难，对于刚入门的开发者讲，更是难上加难，往往看了半天wiki，就是不懂说的什么鬼。</p>
                <p>为了降低门槛，弥补不足，特地编写了《开发者指引》，讲解了一下微信开放平台的基础常见功能，目的重在帮助大家入门微信开放平台的开发者模式。</p>
                <p>1.1 申请服务器以腾讯云服务器为示例：腾讯云服务器购买入口 <a href="https://buy.qcloud.com/cvm?cpu=1&mem=1"></a></p>
                <p>1.2 搭建服务 ...</p>
                <p>1.3 申请公众号 申请公众号网页 <a href="https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN"></a></p>
                <p>1.4 开发者基本配置</p>
                <p>1） 公众平台官网登录之后，找到“基本配置”菜单栏</p>
                <p><img src="http://mmbiz.qpic.cn/mmbiz_png/PiajxSqBRaEIQxibpLbyuSK9XkjDgZoL0xagr4UkAdb9oTk6JCzFH4kOIliaI5XZ66ogiaVTAJaX3q6BE3brBOmfOg/0?wx_fmt=png" style="max-width:100%" alt="" /></p>
                <p>2） 填写配置</p>
                <p>url填写：http://外网IP/wx 。外网IP请到腾讯云购买成功处查询。 http的端口号固定使用80，不可填写其他。</p>
                <p>Token：<b class="text-danger">自主设置，这个token与公众平台wiki中常提的access_token不是一回事。这个token只用于验证开发者服务器</b>。</p>
                <p>3） 服务器搞计算 这里不用这么麻烦 直接返回token即可</p>
                <p>4） 重新启动成功后（python main.py 80），点击提交按钮。若提示”token验证失败”, 请认真检查代码或网络链接等。若token验证成功，会自动返回基本配置的主页面，点击启动按钮</p>
                <p>1.5 重要事情提前交代</p>
                <p>在实际中搭建一个安全稳定高效的公众号，建议参考框架如下图：</p>
                <p><img src="http://mmbiz.qpic.cn/mmbiz_png/PiajxSqBRaEIQxibpLbyuSK9XkjDgZoL0xnC7SUbrIRwI8NhEGFeax6HoPcTMDqKGYxaSoNqBwocrj70Pt1EcKnQ/0?wx_fmt=png" style="max-width:100%" alt="" /></p></p>
                <p>主要有三个部分：负责业务逻辑部分的服务器，负责对接微信API的API-Proxy服务器，以及唯一的AccessToken中控服务器</p>
                <p>1）AccessToken中控服务器：</p>
                <p>负责： 提供主动刷新和被动刷新机制来刷新accessToken并存储（为了防止并发刷新，注意加并发锁），提供给业务逻辑有效的accessToken。</p>
                <p>优点： 避免业务逻辑方并发获取access_token，避免AccessToken互相覆盖，提高业务功能的稳定性。</p>
                <p>2）API-Proxy服务器：</p>
                <p>负责：专一与微信API对接，不同的服务器可以负责对接不同的业务逻辑，更可进行调用频率、权限限制。</p>
                <p>优点：某台API-proxy异常，还有其余服务器支持继续提供服务，提高稳定性，</p>
                <p>避免直接暴漏内部接口，有效防止恶意攻击，提高安全性。</p>
                <p></p>
                <p>2.3 回复success问题</p>
                <p>查询官方wiki 开头强调： 假如服务器无法保证在五秒内处理回复，则必须回复“success”或者“”（空串），否则微信后台会发起三次重试。</p>
                <p>解释一下为何有这么奇怪的规定。发起重试是微信后台为了尽可以保证粉丝发送的内容开发者均可以收到。如果开发者不进行回复，微信后台没办法确认开发者已收到消息，只好重试。</p>
                <p><img src="http://mmbiz.qpic.cn/mmbiz_png/PiajxSqBRaEIQxibpLbyuSK9XkjDgZoL0xBp7Iiam8ydK0W4MOZa9bfHKgTesMkj3HXOnsYxttsodweib7mH9y5eQg/0?wx_fmt=png" style="max-width:100%" alt="" /></p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
        <div class="blog">
            <div class="blogTitle">微信开发入门指引 开启公众号开发者模式</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
        <div class="blog">
            <div class="blogTitle">微信开发入门指引 开启公众号开发者模式</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
        <div class="blog">
            <div class="blogTitle">微信开发入门指引 开启公众号开发者模式</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
