<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">广告定位网页的关键字</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/js">
                    document.body.innerText
                </script>
                <p>如果标签被隐藏 innerText 读不出来</p>
                <p>如果是iframe嵌套 innerText 读不出来</p>
                <p>如果标签层级太深 innerText 读不出来</p>
                <p>如果标签层级太深 innerText 读不出来</p>
                <script type="text/js">
                    document.body.innerHTML.replace(/[^\u4E00-\u9FA5\uF900-\uFA2D]/g, '')
                    // "聊天室左右切换另开窗口关闭手机首页引入您确定要新窗口打开聊天室确定取消"
                </script>
                <script type="text/js">
                    document.getElementsByTagName('iframe')[0].contentDocument.body.innerText.replace(/[^\u4E00-\u9FA5\uF900-\uFA2D]/g, '')
                    // "新手指南免费试玩牌照展示简体中文幸运棋牌六合彩快速充值存款帮助代理加盟会员登录欢迎莅威尼斯人集团我们的优惠不像高利贷那么高但资金一定永远像瑞士银行一样安全我们发誓承诺为每一位客户提供最安全最公平最公正的博彩游戏绝不黑玩家分钱日提款支持万顶级信誉绝对大额无忧我们小时在线客服将竭诚为您服务欢迎您的咨询祝您游戏愉快优惠大厅真人游戏在线客服视讯厅旗舰厅视讯厅视讯厅视讯厅视讯厅视讯厅联系电话关于我们联系我们常见问题代理合作责任博彩新手上路客服中心客户端澳门特别行政区授权和监管选择我们您将拥有可靠的资金保障和优质的服务澳门威尼斯人集团"
                </script>
                <script type="text/js">
                    (function(){
                        var t = document.body.innerText || ''
                        if (!t) {
                            t += document.body.innerHTML.replace(/[^\u4E00-\u9FA5\uF900-\uFA2D]/g, '')
                        }
                        var if0 = document.getElementsByTagName('iframe')[0]
                        if (!if0) {
                            t += if0.contentDocument.body.innerText.replace(/[^\u4E00-\u9FA5\uF900-\uFA2D]/g, '')
                        }
                    })()
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
