<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">单点登录的流程概述</div>
            <div class="blogContent" v-highlight>
                <p>叶小钗</p>
                <p><a href="https://www.cnblogs.com/yexiaochai/p/4422460.html?from=timeline&tdsourcetag=s_pctim_aiomsg">
                    https://www.cnblogs.com/yexiaochai/p/4422460.html?from=timeline&tdsourcetag=s_pctim_aiomsg
                </a></p>
                <mark><h3>【大前端】认识单点登录</h3></mark>
                <blockquote>
                    <h5>听过 < demo过 < 实际工作用过 < 实际工作中被坑过< 实际工作中被多次坑过或者深入研究总结过</h5>
                    <footer class="text-right">知识的珍贵程度排名</footer>
                </blockquote>
                <p>所以，<b>脱离工作去学习node收效不大，脱离项目去说前端优化可能不让人信服，不被ie坑也认识不到兼容</b>，这个时候我们就要抓住工作中的点，一点点深入进去了，也许这一轮的瓶颈就自然而然的突破了呢</p>
                <strong>什么是单点登录</strong>
                <p>单点登录即single sign on，用以解决同一公司不同子产品之间身份认证问题，也就是说，a.baidu.com与b.baidu.com两个站点之间只需要登录一次即可。</p>
                <p>一般来说单点登录实现原理为，首次访问一个站点时会被引导至登录页，用户登录验证通过，浏览器会存储一个关键key（一般采用cookie），用户访问其他系统时会带着这个key，服务器系统发现具有key标志后，会对其进行验证，如果通过便不需要再次登录了。</p>
                <p>这里的关键为二，第一是key，其二为系统统一的认证机制，这当中key会有一系列规则保证登录的安全性，而统一的认证机制是单点登录的前提，key是由他提供出去，每次用户由以这个给出的key来这里验证，判断其有效性，这里的统一的验证平台便是passport，他负责着制作通行令牌，并且对其进行验证。</p>
                <p>这里举个例子来说</p>
                <p>子系统A统一到passport服务器鉴权，并且在passport处获取cookie，并将token加入url，跳转回子系统A 跳回子系统A后，使用token再次去passport验证（这里直接走webservice服务验证，不再跳转），验证通过便在A系统服务器生成session，以后访问子系统A，在有效时间内不到passport验证 进入子系统B，跳到passport鉴权，发现passport cookie已经存在（token），便直接跳回子系统B，url带有token值，使用token去验证流程与A一致</p>
                <p></p>
                <p>单点登录的调用表现一般有两种：</p>
                <p>① 跳转</p>
                <p>② 弹出层回调</p>
                <p>当用户在子系统未登录时，便会携带相关参数，比如tieba.baidu.com去到SSO（passport.baidu.com）进行登录</p>
                <p>登录成功SSO会生成ticket key并附加给源网址跳转回去，这个时候SSO上已经有用户的登录状态了，但是各个子系统仍然没有登录态，所以根据这个ticket设置各个子系统独立的登录态是需要的。</p>
                <p>当在SSO验证结束后，会回到子系统，子系统会根据得到的ticket（SSO为此次登录生成的用户基本信息加密串）获取用户的基本信息，从而在本站设置登录态。</p>
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
