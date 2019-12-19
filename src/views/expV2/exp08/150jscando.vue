<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JS究竟能在浏览器中做些什么事情</div>
            <div class="blogContent" v-highlight>
                <h2>App/浏览器中 保存快捷方式</h2>
                <p>能否使用JS或者其他附属前端技术实现 pc端/移动端 保存当前页面到桌面快捷方式???</p>
                <p>- 首先确认 旧版IE曾经有这样的功能</p>
                <p class="text-danger">说明下：<b>ActiveXObject</b>只支持IE浏览器，所以放到桌面这个功能只支持IE浏览器,不支持火狐浏览器、谷歌浏览器等！</p>
                <script type="text/js">
                    //将快捷方式发送到桌面
                    function toDesktop(sUrl, sName) {
                        try {
                            var WshShell = new ActiveXObject("WScript.Shell");
                            var oUrlLink = WshShell.CreateShortcut(WshShell
                                .SpecialFolders("Desktop")
                                + "\\" + sName + ".url");
                            oUrlLink.TargetPath = sUrl;
                            oUrlLink.Save();
                            alert("成功创建桌面快捷方式!");
                        } catch (e) {
                            alert("当前IE安全级别不允许操作或您的浏览器不支持此功能！");
                        }
                    }
                </script>
                <p>所以结论是</p>
                <p><Icon type="md-close" style="color:red"/> 无法实现 JS技术受限严重 </p>
                <h2>App/浏览器中 访问设备标识</h2>
                <p>kakai 2018/07/17 20:04</p>
                <p>移动设备的真实的唯一标识码早就被禁掉了，你根本无法获取，连原生app都无法获取，获得的唯一标识码都是临时生成的，不是设备真实的唯一标识码。</p>
                <script type="text/js">
                    //get the IP addresses associated with an account
                    function getIPs(callback){
                        var ip_dups = {};
                        //compatibility for firefox and chrome
                        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                        //bypass naive webrtc blocking
                        if (!RTCPeerConnection) {
                            var iframe = document.createElement('iframe');
                            //invalidate content script
                            iframe.sandbox = 'allow-same-origin';
                            iframe.style.display = 'none';
                            document.body.appendChild(iframe);
                            var win = iframe.contentWindow;
                            window.RTCPeerConnection = win.RTCPeerConnection;
                            window.mozRTCPeerConnection = win.mozRTCPeerConnection;
                            window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
                            RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                        }
                        //minimal requirements for data connection
                        var mediaConstraints = { optional: [{RtpDataChannels: true}] };
                        //firefox already has a default stun server in about:config
                        // media.peerconnection.default_iceservers =
                        // [{"url": "stun:stun.services.mozilla.com"}] var servers = undefined;
                        //add same stun server for chrome
                        if(window.webkitRTCPeerConnection) servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
                        //construct a new RTCPeerConnection
                        var pc = new RTCPeerConnection(servers, mediaConstraints);
                        //listen for candidate events
                        pc.onicecandidate = function(ice){
                        //skip non-candidate events
                        if(ice.candidate){
                            //match just the IP address
                            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
                            var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
                            //remove duplicates
                            if(ip_dups[ip_addr] === undefined)
                                callback(ip_addr);
                                ip_dups[ip_addr] = true;
                            }
                        };
                        //create a bogus data channel
                        pc.createDataChannel("");
                        //create an offer sdp
                        pc.createOffer(function(result){
                            //trigger the stun server request
                            pc.setLocalDescription(result, function(){}, function(){});
                        }, function(){});
                    }
                    //Test: Print the IP addresses into the console
                    getIPs(function(ip){console.log(ip);});
                    // getIPs(function(ip){alert("本机IP地址为:"+ip);});
                </script>
                <p><Icon type="md-checkmark" style="color:red"/> 这个吊 可以访问到当前浏览器IP 但是仅限内网IP </p>
                <hr>
                <p>to be continue ...</p>
                <p>所以结论是</p>
                <p><Icon type="md-close" style="color:red"/> 无法实现 </p>
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
