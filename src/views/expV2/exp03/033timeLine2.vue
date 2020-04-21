<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">时间线样式</div>
            <div class="blogContent timelineBox" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <ul class="timeline">
                    <li class="work">
                        <div class="relative">
                            <label for="work5">张亮听了云烨的话脸色也一下子变得惨白</label>
                            <span class="date">2020-4-21 11:15:47</span>
                        </div>
                        <div class="content">
                            <p> 快阻止五牙大舰, 任何带着敌意的船只靠近大帝号五百步, 大帝号就会立刻攻击, 这是大帝号的禁令.为何会有这条禁令？陛下, 大帝号本来就是您的座驾, 与撵驾相同, 所以五蠡司马就按照典制制定了这条禁令, 大帝号在水上就是您的行宫, 心怀不轨者会被立刻击毁, 绝无侥幸的可能, 河间王都不能阻止大帝号船长执行这条禁令, 船上的督令官是中官, 他们只认陛下.</p>
                        </div>
                    </li>
                    <li class="work">
                        <div class="relative">
                            <label for="work4">蛟龙不行于大海, 困局池塘. 还能被称之为蛟龙？</label>
                            <span class="date">2020-4-21 11:15:47</span>
                        </div>
                        <div class="content">
                            <p>"现在说早了些, 随朕上船去看看, 断鸿, 执我令牌命大帝号落帆抛锚, 解除武装. ”断鸿小心的接过李二递给的金牌, 乘着小船向大帝号驶去.</p>
                        </div>
                    </li>
                    <li class="work">
                        <div class="relative">
                            <label for="work3">大帝号</label>
                            <span class="date">2020-4-21t11:25:21</span>
                        </div>
                        <div class="content">
                            <p>这是一件昂贵的玩具, 昂贵到谁都无法忽视的地步, 它的出现能让玉山书院的名声更加的响亮, 以后再出现什么稀奇古怪的东西, 世人就会想起大帝号, 那样恐怖的利器都能出现, 出现点别的也不会惊讶, 比起大帝号不过如此.</p>
                        </div>
                    </li>
                    <li class="work">
                        <div class="relative">
                            <label for="work2">脱不开身</label>
                            <span class="date">2020年4月21日 11:25:53</span>
                        </div>
                        <div class="content">
                            <p>五牙大舰慢慢靠近了大帝号, 御林军上了船, 断鸿扶着李二过了跳板, 狄仁杰紧随其后, 开始从船舷开始给皇帝讲解大帝号的详细数据, 没有一天时间, 是忙不过来的.</p>
                        </div>
                    </li>
                    <li class="work">
                        <div class="relative">
                            <label for="work1">谨遵命, 不敢违</label>
                            <span class="date">2020-4-21 11:26:27</span>
                        </div>
                        <div class="content">
                            <p>长孙又挑起小武的下巴, 仔细看了之后叹口气说:"你师父总是偏你多些, 这么好的闺女竟然与皇家无缘, 不过聪明的女子总是容易吃亏, 你师父苦心安排的大场面给了狄仁杰, 就想把他推荐给陛下, 本宫知道你的才学不下于狄仁杰甚至有过之, 大唐没有女子做官的先例, 要做也只能做宫中女官, 你可愿意？”</p>
                        </div>
                    </li>
                </ul>
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
<style type="text/css">
    .timelineBox {padding: 0 5%;font-size: 100%;}
    /* ------------------------------------- * timeline * ------------------------------------- */
    .timeline {list-style: none;margin: 50px 0 30px 120px;padding-left: 30px;border-left: 8px solid #ddd;}
    .timeline li {margin: 10px 0;position: relative;}
    .timeline p {margin: 0 0 15px;}
    .timeline .date {top: 23px;width: 110px;text-align: right;left: -158px;font-size: 0.95em;line-height: 20px;position: absolute;}
    .timeline .content {max-height: 20px;padding: 50px 20px 0;border-color: transparent;border-width: 2px;border-style: solid;border-radius: 0.5em;position: relative;}
    .timeline .content:before,
    .timeline .content:after {content: "";width: 0;height: 0;border: solid transparent;position: absolute;pointer-events: none;right: 100%;}
    .timeline .content:before {border-right-color: inherit;border-width: 20px;top: 12px;}
    .timeline .content:after {border-right-color: #ffffff;border-width: 17px;top: 15px;}
    .timeline .content p {max-height: 0;color: transparent;text-align: justify;word-break: break-word;hyphens: auto;overflow: hidden;}
    .timeline label {font-size: 1.3em;position: absolute;z-index: 100;cursor: pointer;top: 20px;transition: transform 0.2s linear;}
    .timeline .relative label {cursor: auto;transform: translateX(42px);}
    .timeline .relative:before {content: "";top: 23px;left: -36px;width: 10px;height: 10px;background: #f98262;border: 5px solid #ddd;border-radius: 50%;display: block;position: absolute;box-sizing: initial;}
    .timeline .content {max-height: 180px;border-color: #f3f3f3;margin-right: 20px;max-width: 800px;transform: translateX(20px);transition: max-height 0.4s linear, border-color 0.5s linear, transform 0.2s linear;}
    .timeline .content p {max-height: 200px;color: #333;transition: color 0.3s linear 0.3s;}
</style>
