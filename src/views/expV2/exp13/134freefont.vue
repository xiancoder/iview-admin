<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">各种系统默认的字体展示 (注意不都是免费的)</div>
            <div class="blogContent" v-highlight v-betterpre>
                <p>font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;</p>
                <p style="font-family:LiSu;font-size:18px;">隶书：LiSu 123456789 AbcdEfg 你的回话凌乱着，在这个时刻 <span class="text-danger">这个字体识别度最高 如果一下哪个字体不存在 默认显示隶书</span></p>
                <p style="font-family:SimSun,LiSu;font-size:18px;">宋体：SimSun 123456789 AbcdEfg 我想起喷泉旁的白鸽，甜蜜散落了</p>
                <p style="font-family:NSimSun,LiSu;font-size:18px;">新宋体：NSimSun 123456789 AbcdEfg 情绪莫名的拉扯，我还爱你呢</p>
                <p style="font-family:FangSong,LiSu;font-size:18px;">仿宋：FangSong 123456789 AbcdEfg 而你断断续续唱着歌，假装没事了</p>
                <p style="font-family:FangSong_GB2312,LiSu;font-size:18px;">仿宋_GB2312：FangSong_GB2312 123456789 AbcdEfg 时间过了，走了，爱情面临选择</p>
                <p style="font-family:KaiTi,LiSu;font-size:18px;">楷体：KaiTi 123456789 AbcdEfg 你冷了，倦了，我哭了</p>
                <p style="font-family:KaiTi_GB2312,LiSu;font-size:18px;">楷体_GB2312：KaiTi_GB2312 123456789 AbcdEfg 离开时的不快乐，你用卡片手写着</p>
                <p style="font-family:DFKai-SB,LiSu;font-size:18px;">标楷体：DFKai-SB 123456789 AbcdEfg 有些爱只给到这，真的痛了</p>
                <p style="font-family:SimHei,LiSu;font-size:18px;">黑体：SimHei 123456789 AbcdEfg 怎么了，你累了，说好的，幸福呢</p>
                <p style="font-family:Microsoft YaHei,LiSu;font-size:18px;">微软雅黑体：Microsoft YaHei 123456789 AbcdEfg 我懂了，不说了，爱淡了，梦远了</p>
                <p style="font-family:Microsoft JhengHei,LiSu;font-size:18px;">微软正黑体：Microsoft JhengHei 123456789 AbcdEfg 开心与不开心一一细数着你再不舍</p>
                <p style="font-family:YouYuan,LiSu;font-size:18px;">幼圆：YouYuan 123456789 AbcdEfg 那些爱过的感觉都太深刻，我都还记得</p>
                <p style="font-family:STXihei,LiSu;font-size:18px;">华文细黑：STXihei 123456789 AbcdEfg 你不等了，说好的，幸福呢</p>
                <p style="font-family:STXingkai,LiSu;font-size:18px;">华文行楷：STXingkai 123456789 AbcdEfg 我错了，泪干了，放手了，后悔了</p>
                <p style="font-family:STXinwei,LiSu;font-size:18px;">华文新魏：STXinwei 123456789 AbcdEfg 只是回忆的音乐盒还旋转着，要怎么停呢</p>
                <p style="font-family:MingLiU,LiSu;font-size:18px;">细明体：MingLiU 123456789 AbcdEfg 钟兴民编曲</p>
                <p style="font-family:PMingLiU,LiSu;font-size:18px;">新细明体：PMingLiU 123456789 AbcdEfg 方文山作词</p>
                <p style="font-family:Helvetica,LiSu;font-size:18px;">Helvetica 123456789 AbcdEfg 周杰伦作曲并演唱 <span class="text-danger">Helvetica是苹果电脑的默认字体，与微软常用的Arial字体相似，但非自于它。</span></p>
                <p style="font-family:Helvetica Neue,LiSu;font-size:18px;">Helvetica Neue 123456789 AbcdEfg 周杰伦作曲并演唱</p>
                <p style="font-family:Arial,LiSu;font-size:18px;">Arial 123456789 AbcdEfg 2009年，该曲获得2009年无线音乐排行榜动感地带全曲 [2]</p>
                <p style="font-family:Sans Serif,LiSu;font-size:18px;">Sans Serif 123456789 AbcdEfg 2010年，获得2010年雪碧中国原创音乐流行榜音乐晚会至尊金曲大奖 [3] <span class="text-danger">在西方国家罗马字母阵营中，字体分为两大种类：Sans Serif和Serif</span></p>
                <p style="font-family:Serif,LiSu;font-size:18px;">Serif 123456789 AbcdEfg 周杰伦与方文山写出这首2008年最遗憾的情歌</p>
                <p style="font-family:PingFang SC,LiSu;font-size:18px;">PingFang SC 123456789 AbcdEfg 当心里问着这句话时，幸福，早已经消失不见了</p>
                <p style="font-family:Hiragino Sans GB,LiSu;font-size:18px;">Hiragino Sans GB 123456789 AbcdEfg 这是一首令人听了会想哭的歌，钢琴哽咽着，大提琴低吟着，唱分手的伤，爱情离开的惆怅；</p>
                <p style="font-family:sans-serif,LiSu;font-size:18px;">sans-serif 123456789 AbcdEfg 那些爱过的感觉都太深刻，都还记得；方文山以疑问句写爱情的不舍与后悔</p>
                <p style="font-family:Open Sans,LiSu;font-size:18px;">Open Sans 123456789 AbcdEfg 只是所有的疑问得不到对方的回答</p>
                <p style="font-family:Comic Sans MS,LiSu;font-size:18px;">Comic Sans MS 123456789 AbcdEfg 回忆的音乐盒还旋转着，要怎么停呢？</p>
                <p style="font-family:System,LiSu;font-size:18px;">System 123456789 AbcdEfg 只剩下钢琴声，代替了回答</p>
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
