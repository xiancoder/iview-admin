<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">阴影样式</div>
            <div class="blogContent" v-highlight>
                <Row>
                    <Col span="8">
                        <div class="box standard jsw jsw-standard"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box lifted jsw jsw-lifted"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box perspective jsw jsw-perspective"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box raised jsw jsw-raised"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                    </Col>
                    <Col span="8">
                        <div class="box sides-vt-1 jsw jsw-sides jsw-sides-vt-1"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box sides-vt-2 jsw jsw-sides jsw-sides-vt-2"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box sides-hz-1 jsw jsw-sides jsw-sides-hz-1"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box sides-hz-2 jsw jsw-sides jsw-sides-hz-2"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                    </Col>
                    <Col span="8">
                        <div class="box rotated jsw jsw-rotated" style="transform: rotate(-5deg);"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box rotated lifted jsw jsw-lifted jsw-rotated" style="transform: rotate(-5deg);"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box rotated perspective jsw jsw-perspective jsw-rotated" style="transform: rotate(-5deg);"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                        <div class="box rotated raised jsw jsw-raised jsw-rotated" style="transform: rotate(-5deg);"> <p>风萧萧兮易水寒，壮士一去兮不复还。<br>探虎穴兮入蛟宫，仰天呼气兮成白虹。</p> </div>
                    </Col>
                </Row>
                <script type="text/css">
                    .jsw { position:relative;box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
                    .jsw:before, .jsw:after { content:""; position:absolute; z-index:-2; }
                    .jsw-lifted:before, .jsw-lifted:after { bottom:15px; left:10px; width:50%; height:20%; max-width:300px; box-shadow:0 15px 10px rgba(0, 0, 0, 0.7); transform:rotate(-3deg); }
                    .jsw-lifted:after { right:10px; left:auto; transform:rotate(3deg); }
                    .jsw-perspective:before { left:80px; bottom:5px; width:50%; height:35%; max-width:200px; box-shadow:-80px 0 8px rgba(0, 0, 0, 0.4); transform:skew(50deg); transform-origin:0 100%; }
                    .jsw-perspective:after { display:none; }
                    .jsw-sides:before { top:10px; bottom:10px; left:0; right:50%; box-shadow:0 0 15px rgba(0,0,0,0.6); border-radius:10px / 100px; }
                    .jsw-sides-vt-2:before { right:0; }
                    .jsw-sides-hz-1:before { top:50%; bottom:0; left:10px; right:10px; border-radius:100px / 10px; }
                    .jsw-sides-hz-2:before { top:0; bottom:0; left:10px; right:10px; border-radius:100px / 10px; }
                    .jsw-raised {   box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
                    .jsw-rotated :first-child:before { content:""; position:absolute; z-index:-1; top:0; bottom:0; left:0; right:0; background:#fff; box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
                    .box { height:100px; width:80%; padding:1em; margin:20px auto; background:#fff; }
                </script>
                <div class="z0mask">
                    <div class="z0bill">
                        <div class="bill--title">许志志</div>
                        <div class="bill--date">3月7日 13:00~14:00(入场)</div>
                        <div class="bill--hr"></div>
                        <div class="bill--qrcode" qrcode ng-init="xxx='asdfa'" ng-model="xxx"></div>
                    </div>
                </div>
                <script type="text/css">
                    .z0mask { width: 100%; position: relative; height: 900px; zoom: 50%; background: #f6f6f6;}
                    .z0bill {position:absolute;background: #FFFFFF; width:520px; height:662px; border: 2px solid #c7c7c7; border-radius: 37px;top:100px;left:115px;padding:64px 0 84px 0;box-shadow: 5px 5px 16px #cccccc;}
                    .z0bill .bill--title{font-family: PingFangSC-Regular,microsoft yahei; font-size: 38px; color: #222222; letter-spacing: 0; line-height: 32px;margin-bottom:31px;text-align: center;}
                    .z0bill .bill--date{font-family: PingFangSC-Regular,microsoft yahei; font-size: 30px; color: #666666; letter-spacing: 0; line-height: 32px;margin-bottom:54px;text-align: center;}
                    .z0bill .bill--hr{ position: relative; margin: 0 24px 71px; height: 2px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACAgMAAAAlaBQYAAAACVBMVEX///+Xl5fa2tqgTAsCAAAAEElEQVQI12OIYOAMDWUAAwAJIAEMh4uSMQAAAABJRU5ErkJggg==);background-size:20px rpx;}
                    .z0bill .bill--hr:after, .z0bill .bill--hr:before{
                        content: " "; position: absolute; width: 28px; height: 50px; top: -20px; right: -25px;
                        background: radial-gradient(#c7c7c7 50%,#ffffff 50%); background-size: 50px 50px;
                    }
                    .z0bill .bill--hr:after{
                        top: -21px; right: 0; left: -24px; transform: rotate(180deg);
                    }
                    .z0bill .bill--qrcode{width:286px;height:286px;margin: 0 auto;}
                    .z0bill .bill--qrcode *{ width: 286px; height: 286px;display: block;margin: 0 auto;}
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
<style>
    .jsw { position:relative;box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
    .jsw:before, .jsw:after { content:""; position:absolute; z-index:-2; }
    .jsw-lifted:before, .jsw-lifted:after { bottom:15px; left:10px; width:50%; height:20%; max-width:300px; box-shadow:0 15px 10px rgba(0, 0, 0, 0.7); transform:rotate(-3deg); }
    .jsw-lifted:after { right:10px; left:auto; transform:rotate(3deg); }
    .jsw-perspective:before { left:80px; bottom:5px; width:50%; height:35%; max-width:200px; box-shadow:-80px 0 8px rgba(0, 0, 0, 0.4); transform:skew(50deg); transform-origin:0 100%; }
    .jsw-perspective:after { display:none; }
    .jsw-sides:before { top:10px; bottom:10px; left:0; right:50%; box-shadow:0 0 15px rgba(0,0,0,0.6); border-radius:10px / 100px; }
    .jsw-sides-vt-2:before { right:0; }
    .jsw-sides-hz-1:before { top:50%; bottom:0; left:10px; right:10px; border-radius:100px / 10px; }
    .jsw-sides-hz-2:before { top:0; bottom:0; left:10px; right:10px; border-radius:100px / 10px; }
    .jsw-raised {   box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
    .jsw-rotated :first-child:before { content:""; position:absolute; z-index:-1; top:0; bottom:0; left:0; right:0; background:#fff; box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }
    .box { height:100px; width:80%; padding:1em; margin:20px auto; background:#fff; }

    .z0mask { width: 100%; position: relative; height: 900px; zoom: 50%; background: #f6f6f6;}
    .z0bill {position:absolute;background: #FFFFFF; width:520px; height:662px; border: 2px solid #c7c7c7; border-radius: 37px;top:100px;left:115px;padding:64px 0 84px 0;box-shadow: 5px 5px 16px #cccccc;}
    .z0bill .bill--title{font-family: PingFangSC-Regular,microsoft yahei; font-size: 38px; color: #222222; letter-spacing: 0; line-height: 32px;margin-bottom:31px;text-align: center;}
    .z0bill .bill--date{font-family: PingFangSC-Regular,microsoft yahei; font-size: 30px; color: #666666; letter-spacing: 0; line-height: 32px;margin-bottom:54px;text-align: center;}
    .z0bill .bill--hr{ position: relative; margin: 0 24px 71px; height: 2px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACAgMAAAAlaBQYAAAACVBMVEX///+Xl5fa2tqgTAsCAAAAEElEQVQI12OIYOAMDWUAAwAJIAEMh4uSMQAAAABJRU5ErkJggg==);background-size:20px rpx;}
    .z0bill .bill--hr:after, .z0bill .bill--hr:before{
        content: " "; position: absolute; width: 28px; height: 50px; top: -20px; right: -25px;
        background: radial-gradient(#c7c7c7 50%,#ffffff 50%); background-size: 50px 50px;
    }
    .z0bill .bill--hr:after{
        top: -21px; right: 0; left: -24px; transform: rotate(180deg);
    }
    .z0bill .bill--qrcode{width:286px;height:286px;margin: 0 auto;}
    .z0bill .bill--qrcode *{ width: 286px; height: 286px;display: block;margin: 0 auto;}
</style>
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
