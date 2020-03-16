<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">前端和设计的交流</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 网络聊天 "粮*先行" 其中草被屏蔽为敏感词</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 公司游戏要搞活动，充值8折优惠。玩家充值100，发现只得到了80的金币。。。。游戏被骂惨</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 只能发500英里的邮件。</p>
                <p><Icon type="md-checkmark" style="color:green"/>邮件服务器被人更新过操作系统（当年还是SunOS），但是由于操作系统的发行版往往配备了旧版软件，于是在更新操作系统的时候邮件软件反而被降级了（Sendmail 8 -> Sendmail 5）。于是进一步调查发现，在更新操作系统时，管理员自己编写的Sendmail配置文件（sendmail.cf）被保留了下来。这样就出现了这种状况：Sendmail 5尝试解析Sendmail 8的配置文件。但是为什么会是500miles呢？为什么是500miles咧？原因是这样的，Sendmail 5面对陌生的配置文件，凡是不理解的部分都会忽略，凡是没设置过的配置项自动设置成0。这样其中有一个被设置成0，这一项就是 （连接远端SMTP服务器的超时时间）timeout to connect to the remote SMTP server。后来经过实验，发现0秒的timeout会导致Sendmail在3毫秒后中断连接。所以，为啥是500miles？在当年，MIT的校园网是没有那么多router的，也就没那么多网络延迟，所以连接一个远端主机的时间大概就是光所需的时间。于是3毫秒, 就意味着：558英里。也就是558英里以外的服务器，都无法连接到，而558英里以内的服务器，都可以正常通信。当当当，这就是500英里的bug啦。 </p>
                <p><Icon type="md-close" style="color:red"/> 程序A和B 自2008年开始运行就一直没毛病，但是2013年一月一号程序B挂了。无论如何重启，它也无法再处理A送来的Log了。查Bug的结果是A的Log文件中日期字段是以YYYYMMDD格式书写的，但B是以DDMMYYYY格式解读的，所以当他第一次读到13月时就挂了。</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> “为什么我们系统导出的文档是乱码？”“还真是，文字是乱码的，格式居然不乱！”“我去！数据库里也是乱码的！”“是吗？我查下日志……也…是…乱码？！”“你那接口编码没设置错吧？”“没错啊，都跑了好几年了。”一伙程序员围观半天，始终找不出bug在哪，最终一个老干部路过，说了句：“人家这是越南文字…”</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 运维反馈缺失了一天的文件，发了好几封邮件，还打电话找我查bug，必须周末处理掉 接到电话我问缺了哪一天的文件，我先看下log，那边说缺了2月29号的 我愣了2秒，今年2月哪来的29号(＊ﾟ◇ﾟ) 然后迷之沉默</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 作者为医院急救设计了一个相关程序，在实验室运行良好，但是每次在医院调试都出 bug，作者只好到医院去调试，而且是当着急救病人！！！经过漫长的测试终于发现，是由于医院使用的X射线导致电脑内存总是丢失几个 bit 的信息，而导致程序出问题，最终通过把电脑的内存用铅板隔起来解决！</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 对接后台的一个接口，返回的数据中有一段类似于这种“北京丨海淀”，然后我只想要“北京”这个词于是前端js随手写下'北京丨海淀'.split('|')[0]，结果没取到当时愣了下，不过没在意，换另外一个方法继续试，还是不行，这个时候就有点懵逼了于是再换方法继续试，把所有的方法全都试了一遍全都不行，这个时候就有点慌了，局面好像有点控制不住了把所有的原因都考虑了一遍，甚至换了浏览器和电脑，试了很长时间都不行最后终于将目光放到了“丨”这个字符上，复制粘贴然后打印其unicode编码发现这个东西根本不是英文编码状态下的竖线|，而是一个拼音为gun的汉字丨找出了原因后，当时心情很平静，只不过是有点想把负责此接口的后端拖出来砍两刀而已( ･_･)ﾉ⌒●~*</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 进公司后先取花名，然后自定义域登录名，我就按我的名字起了一个纯意译的英文组合叫“guest.liu”作为域登录名(当然后来被同事叫做“该死的刘”是后话)。紧跟着开展工作时，发现线上权限怎么都申请不下来，持续找PE和运维一个月，他们也很懵，从没遇到过这种情况。最后PE开发反复核查，找来找去发现个bug，在他们权限相关的代码中有个判断，if登录名中找到了“guest”，那么这就是个guest用户，只有guest权限，这样我的账号就一直申请不到权限，他们也没想到真的有人取名叫“guest”</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 前两天看到的，美国某电信公司，生成电话充值卡卡号和密码的程序，里面有个sleep(1); 后来接手的程序员看来看去觉得没用，就去掉了。 结果生成的密码随机性不够，有人买了几张卡就发现问题，找到规律，写了算号器。这家电信公司一下损失了几百万美元。</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
                <p><Icon type="md-close" style="color:red"/> 项目经理要求这里运行缓慢 好让客户给钱优化 并得到明显得速度提升</p>
                <p><Icon type="md-checkmark" style="color:green"/> --- </p>
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
