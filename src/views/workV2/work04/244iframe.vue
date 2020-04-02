<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 不同域名 父页面子页面的相互操作</div>
            <div class="blogContent" v-highlight>
                <p>父页面监听子页面被点击 (低调可行方案)</p>
                <script type="text/js">
                    var listenTimer = setInterval(function () {
                        var activeEle = document.activeElement;
                        var smIframe = document.getElementById(Sm.Name);
                        if (activeEle == smIframe) {
                            smIframe.style.height = 0;
                            clearInterval(listenTimer);
                            setTimeout(function () {
                                document.body.removeChild(smIframe);
                            }, 5000)
                        }
                    }, 100);
                </script>
                <div id="tryiframeResult"></div>
                <div id="tryiframe"></div>
                <p>注意 如果不是用动态生成iframe的方式 iframe将受到内部页面影响直接获得焦点导致逻辑失败</p>
                <p>注意 如果不是用动态生成iframe的方式 iframe将受到内部页面影响直接获得焦点导致逻辑失败</p>
                <script type="text/js">
                    let iframe = document.createElement('iframe');
                    iframe.src = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E7%BF%BB%E8%AF%91&rsv_t=6a2dQyJQhSIKi7pTTX54QNeDL%2FeVNTrKDNHP7PDs9MU8VA7WHmtypofDLYI&rsv_dl=ih_0&rsv_sug3=1&rsv_sug1=1&rsv_sug7=001&rsv_sug2=1&rsp=0&rsv_sug9=es_2_1&rsv_sug4=2228&rsv_sug=9';
                    iframe.id = 'try1iframe';
                    iframe.style.width = '100%';
                    iframe.style.height = '200px';
                    var opacity = 50;
                    iframe.style.filter = 'alpha(opacity=' + opacity + ')'; /* IE */
                    iframe.style.MozOpacity = (opacity / 100); /* 老版Mozilla */
                    iframe.style.KhtmlOpacity = (opacity / 100); /* 老版Safari */
                    iframe.style.opacity = (opacity / 100); /* 支持opacity的浏览器*/
                    iframe.style.left = -600;
                    var scale = 30;
                    iframe.style.msTransform = 'scale(' + scale + ')';
                    iframe.style.MozTransform = 'scale(' + scale + ')';
                    iframe.style.WebkitTransform = 'scale(' + scale + ')';
                    iframe.style.KhtmlTransform = 'scale(' + scale + ')';
                    iframe.style.OTransform = 'scale(' + scale + ')';
                    var scaleOrigin = '7% 26%';
                    iframe.style.msTransformOrigin = scaleOrigin;
                    iframe.style.MozTransformOrigin = scaleOrigin;
                    iframe.style.WebkitTransformOrigin = scaleOrigin;
                    iframe.style.KhtmlTransformOrigin = scaleOrigin;
                    iframe.style.OTransformOrigin = scaleOrigin;
                    document.getElementById('tryiframe').appendChild(iframe)
                    var listenTimer = setInterval(function () {
                        var activeEle = document.activeElement
                        var try1iframe = document.getElementById('try1iframe')
                        if (activeEle === try1iframe) {
                            try1iframe.style.height = 0
                            clearInterval(listenTimer)
                            document.getElementById('tryiframeResult').innerHTML += 'iframe被触发'
                            setTimeout(function () {
                                document.getElementById('tryiframe').removeChild(try1iframe)
                                document.getElementById('tryiframeResult').innerHTML += '<br>iframe被删除'
                            }, 5000)
                        }
                    }, 100);
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle"> 相同域名 子页面能操作父页面的什么东西</div>
            <div class="blogContent" v-highlight>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle"> 动态iframe 子页面能操作父页面的什么东西</div>
            <div class="blogContent" v-highlight>
                <p>动态创建iframe</p>
                <script type="text/js">
                    let ifr = document.createElement('iframe');
                    document.body.appendChild(ifr);
                    ifr.style.display = 'none';
                    let win = ifr.contentWindow;
                    let doc = win.document;
                </script>
                <p>动态加入样式</p>
                <script type="text/js">
                    let style = document.createElement('style');
                    style.type = 'text/css';
                    style.media = 'print';
                    doc.head.appendChild(style);
                    if (!window.createPopup) {
                        style.appendChild(document.createTextNode(''));
                    }
                    let sheet = style.sheet || style.styleSheet;
                    let rules = [
                        '.watername{font-size:14px;font-weight:bold;text-align:center;line-height:60px;border-top:1px solid #000;border-bottom:1px solid #333;}',
                        '.infos{font-size:12px;border-bottom:1px solid #333;padding:8px 0px;}',
                        '.flex-cont{display:flex;align-items:center;}',
                        '.flex-item{flex:1}',
                        '.code-cont{margin-left:20px;}',
                        '.pickcode{font-size:12px;font-weight:bolder;}',
                        '.shoplist{margin-top:25px;padding-bottom:20px;border-bottom:1px solid #333;}',
                        '.bold{font-weight:bolder}',
                        '.mytable tr td{font-size:12px;padding:4px;}',
                        '.itext{font-size:12px;line-height:25px;}',
                        '.memb-cont{border-bottom:1px solid #333;padding: 8px 0;}',
                        '.note-cont{border-bottom:1px solid #000;padding-bottom:8px;}'
                    ];
                    for (let i = 0; i < rules.length; i++) {
                        sheet.insertRule(rules[i]);
                    }
                    document.body.innerHTML = html;
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
        let iframe = document.createElement('iframe');
        iframe.src = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E7%BF%BB%E8%AF%91&rsv_t=6a2dQyJQhSIKi7pTTX54QNeDL%2FeVNTrKDNHP7PDs9MU8VA7WHmtypofDLYI&rsv_dl=ih_0&rsv_sug3=1&rsv_sug1=1&rsv_sug7=001&rsv_sug2=1&rsp=0&rsv_sug9=es_2_1&rsv_sug4=2228&rsv_sug=9';
        iframe.id = 'try1iframe';
        iframe.style.width = '100%';
        iframe.style.height = '200px';
        var opacity = 50;
        iframe.style.filter = 'alpha(opacity=' + opacity + ')'; /* IE */
        iframe.style.MozOpacity = (opacity / 100); /* 老版Mozilla */
        iframe.style.KhtmlOpacity = (opacity / 100); /* 老版Safari */
        iframe.style.opacity = (opacity / 100); /* 支持opacity的浏览器 */
        iframe.style.left = -600;
        var scale = 30;
        iframe.style.msTransform = 'scale(' + scale + ')';
        iframe.style.MozTransform = 'scale(' + scale + ')';
        iframe.style.WebkitTransform = 'scale(' + scale + ')';
        iframe.style.KhtmlTransform = 'scale(' + scale + ')';
        iframe.style.OTransform = 'scale(' + scale + ')';
        var scaleOrigin = '7% 26%';
        iframe.style.msTransformOrigin = scaleOrigin;
        iframe.style.MozTransformOrigin = scaleOrigin;
        iframe.style.WebkitTransformOrigin = scaleOrigin;
        iframe.style.KhtmlTransformOrigin = scaleOrigin;
        iframe.style.OTransformOrigin = scaleOrigin;
        document.getElementById('tryiframe').appendChild(iframe)
    }
}
</script>
