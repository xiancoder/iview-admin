<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Iview 时间线</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Timeline>
                    <TimelineItem color="green">
                        <p style="font-weight: bold;">张亮听了云烨的话脸色也一下子变得惨白 (2020-4-21 11:15:47)</p>
                        <p style="padding-left: 10px;">快阻止五牙大舰, 任何带着敌意的船只靠近大帝号五百步, 大帝号就会立刻攻击, 这是大帝号的禁令.为何会有这条禁令？陛下, 大帝号本来就是您的座驾, 与撵驾相同, 所以五蠡司马就按照典制制定了这条禁令, 大帝号在水上就是您的行宫, 心怀不轨者会被立刻击毁, 绝无侥幸的可能, 河间王都不能阻止大帝号船长执行这条禁令, 船上的督令官是中官, 他们只认陛下.</p>
                    </TimelineItem>
                    <TimelineItem color="green">
                        <p style="font-weight: bold;">大帝号(2020-4-21t11:25:21)</p>
                        <p style="padding-left: 10px;">这是一件昂贵的玩具, 昂贵到谁都无法忽视的地步, 它的出现能让玉山书院的名声更加的响亮, 以后再出现什么稀奇古怪的东西, 世人就会想起大帝号, 那样恐怖的利器都能出现, 出现点别的也不会惊讶, 比起大帝号不过如此.</p>
                    </TimelineItem>
                    <TimelineItem color="blue">
                        <p style="font-weight: bold;">蛟龙不行于大海, 困局池塘. 还能被称之为蛟龙？(2020-4-21 11:15:47)</p>
                        <p style="padding-left: 10px;">现在说早了些, 随朕上船去看看, 断鸿, 执我令牌命大帝号落帆抛锚, 解除武装. ”断鸿小心的接过李二递给的金牌, 乘着小船向大帝号驶去.</p>
                    </TimelineItem>
                    <TimelineItem color="red">
                        <p style="font-weight: bold;">脱不开身(2020年4月21日 11:25:53)</p>
                        <p style="padding-left: 10px;">五牙大舰慢慢靠近了大帝号, 御林军上了船, 断鸿扶着李二过了跳板, 狄仁杰紧随其后, 开始从船舷开始给皇帝讲解大帝号的详细数据, 没有一天时间, 是忙不过来的.</p>
                    </TimelineItem>
                    <TimelineItem color="red">
                        <p style="font-weight: bold;">谨遵命, 不敢违(2020-4-21 11:26:27)</p>
                        <p style="padding-left: 10px;">长孙又挑起小武的下巴, 仔细看了之后叹口气说:"你师父总是偏你多些, 这么好的闺女竟然与皇家无缘, 不过聪明的女子总是容易吃亏, 你师父苦心安排的大场面给了狄仁杰, 就想把他推荐给陛下, 本宫知道你的才学不下于狄仁杰甚至有过之, 大唐没有女子做官的先例, 要做也只能做宫中女官, 你可愿意？”</p>
                    </TimelineItem>
                </Timeline>
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
