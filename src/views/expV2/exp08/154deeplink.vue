<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">通过链接来唤醒APP的方式 深层链接</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p class="text-danger">PC端的内容扁平化衍生物 - 深层链接(deep-link)</p>
                <p>又称内链、深度链接，是指设链网站所提供的链接服务使得用户在未脱离设链网站页面的情况下，<b>即可获得被链接网站上的内容</b>，此时页面地址栏里显示的是设链网站的网址，而非被链接网站的网址。但该内容并非储存于设链网站，而是储存于被链接网站。简而言之，设链者以自己的网页外观形式呈现其他网页所拥有的实质内容，并且对于这些内容，设链者并没有在服务器上储存下来，只是提供指引作用。</p>
                <p>以百度 MP3 搜索服务为例，用户在百度 MP3 中检索歌曲时，只要点击搜索结果列表中的歌曲标题，就能进行试听或相应下载，整个试听及下载过程均能在百度 MP3 页面中进行，但被试听或下载的歌曲并非存在于百度的服务器中。</p>
                <p>百度被诉“盗链盗播”的理由便是，未经许可擅自通过百度视频、百度影音等软件，以定向链接、点对点传输、浏览器内嵌播放插件并主动推介等方式向公众提供视频的播放甚至下载，而相关视频并未存储在百度服务器之中。</p>
                <hr />
                <p class="text-danger">移动端的推广拉新新方式 深层链接</p>
                <p>移动端深度链接(deeplink)服务，实现web页面到App间的无缝跳转，帮助App解决拉新、拉活、留存、转化等问题，直达场景页面，结合openinstall的精准安装来源追踪技术，更可实现免填邀请码安装和免打包渠道统计等功能</p>
                <p>移动端深度链接（deeplink），从打开的Web页面，可一键唤醒App</p>
                <hr />
                <p>参考</p>
                <script type="text/js">
                    if (navigator.userAgent.match(/android/i)) {
                         // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
                         // 否则打开a标签的href链接
                         var isInstalled;
                         //下面是安卓端APP接口调用的地址，自己根据情况去修改
                         var ifrSrc = "cartooncomicsshowtwo://platformapi/startApp? type=0&id=${com.id}&phone_num=${com.phone_num}";
                         var ifr = document.createElement("iframe");
                         ifr.src = ifrSrc;
                         ifr.style.display = "none";
                         ifr.onload = function() {
                         // alert("Is installed.");
                         isInstalled = true;
                         alert(isInstalled);
                         document.getElementById("openApp0").click();};
                         ifr.onerror = function() {
                             // alert("May be not installed.");
                             isInstalled = false;
                             alert(isInstalled);
                         }
                         document.body.appendChild(ifr);
                         setTimeout(function() {
                             document.body.removeChild(ifr);
                         },1000);
                    }
                    //ios判断
                    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
                         if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))  {
                             //Animation://com.yz.animation
                             var isInstalled;
                             //下面是IOS调用的地址，自己根据情况去修改
                             var ifrSrc = "Animation://?comName=${com.short_name}&comID=${com.id}&comPhoneNum=${com.phone_num}&type=0";var ifr = document.createElement("iframe");
                             ifr.src = ifrSrc;
                             ifr.style.display = "none";
                             ifr.onload = function() {
                                  // alert("Is installed.");
                                  isInstalled = true;
                                  alert(isInstalled);
                                  document.getElementById("openApp1").click();};
                             ifr.onerror = function() {
                                  // alert("May be not installed.");
                                  isInstalled = false;
                                  alert(isInstalled);
                             }
                             document.body.appendChild(ifr);
                             setTimeout(function() {
                                  document.body.removeChild(ifr);
                             },1000);
                         }
                    }
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
