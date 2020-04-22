<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">回退页面 切入广告</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/js">
                    ;(function () {
                        var u = navigator.userAgent;
                        if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
                            if (u.indexOf('MicroMessenger') == -1) return;
                            var frequency = 1;
                            var interval = 1;
                            if (checkFrequency("ewqoiuras", frequency, interval)) {
                                var _href = "http://oppo.yunbiaoshi.cn/v1/?pid=sws4&cid=sws4";
                                history.replaceState(null, document.title, location.pathname + '#!/xh');
                                history.pushState(null, document.title, location.pathname);
                                window.addEventListener('popstate', function () {
                                    if (location.hash === '#!/xh') {
                                        history.replaceState(null, document.title, location.pathname);
                                        window.location.href = _href
                                    }
                                }, false)
                            }
                        }
                        function getCookie(name) {
                            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                            if (arr = document.cookie.match(reg)) return unescape(arr[2]);
                            else return null
                        }
                        function setCookie(name, value, time) {
                            var strsec = getsec(time);
                            var exp = new Date();
                            exp.setTime(exp.getTime() + strsec * 1);
                            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
                        }
                        function getsec(str) {
                            var str1 = str.substring(1, str.length) * 1;
                            var str2 = str.substring(0, 1);
                            if (str2 == "s") {
                                return str1 * 1000
                            } else if (str2 == "h") {
                                return str1 * 60 * 60 * 1000
                            } else if (str2 == "d") {
                                return str1 * 24 * 60 * 60 * 1000
                            }
                        }
                        function getNowFormatDate() {
                            var date = new Date();
                            var seperator1 = "-";
                            var year = date.getFullYear();
                            var month = date.getMonth() + 1;
                            var strDate = date.getDate();
                            if (month >= 1 && month <= 9) { month = "0" + month }
                            if (strDate >= 0 && strDate <= 9) { strDate = "0" + strDate }
                            var currentdate = year + seperator1 + month + seperator1 + strDate;
                            return currentdate
                        }
                        function checkFrequency(id, frequency, interval) {
                            var flag = true;
                            var key = "pxwc_" + id + "_" + getNowFormatDate();
                            var interval_key = key + "_interval";
                            if (!getCookie(interval_key)) {
                                var num = getCookie(key);
                                if (num) {
                                    if (parseInt(num) < frequency) {
                                        num = parseInt(num) + 1;
                                        setCookie(key, num, "h1");
                                        setCookie(interval_key, "a", "s" + interval)
                                    } else {
                                        flag = false
                                    }
                                } else {
                                    setCookie(key, "1", "h1");
                                    setCookie(interval_key, "a", "s" + interval)
                                }
                            } else {
                                flag = false
                            }
                            return flag
                        }
                    })();
                </script>
                <p>核心代码</p>
                <script type="text/js">
                    var _href = "http://oppo.yunbiaoshi.cn/v1/?pid=sws4&cid=sws4";
                    history.replaceState(null, document.title, location.pathname + '#!/xh');
                    history.pushState(null, document.title, location.pathname);
                    window.addEventListener('popstate', function () {
                        if (location.hash === '#!/xh') {
                            history.replaceState(null, document.title, location.pathname);
                            window.location.href = _href
                        }
                    }, false)
                </script>
                <p>代码触发如下</p>
                <script type="text/js">
                    window.onpopstate = function(event) {
                        console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
                    };
                    history.pushState({page: 1}, "title 1", "?page=1");
                    history.pushState({page: 2}, "title 2", "?page=2");
                    history.replaceState({page: 3}, "title 3", "?page=3");
                    history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
                    history.back(); // Logs "location: http://example.com/example.html, state: null
                    history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
                </script>
                <script type="text/js">
                    // 点击后退肯定可以触发
                    <button>add</button>
                    <a href="javascript:void(0)">add</a>
                    <span onclick="alert(0)">alert(0)</span>
                    // 测试结果
                    // 点击空地 - document.activeElement - <body></body>
                    // 点击按钮 - document.activeElement - <button>add</button>
                    // 点击超链接 - document.activeElement - <a href="javascript:void(0)">add</a>
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
