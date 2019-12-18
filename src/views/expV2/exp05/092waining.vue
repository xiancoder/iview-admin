<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">警告内容样式</div>
            <div class="blogContent" v-highlight>
                <div class="infomsg">
                    当启用能量功能后，会员可通过相关操作获取相对应的能量；
                    <br>
                    当禁用能量功能后，不再产生新的能量，会员端页面不显示能量项，已产生的能量仍将保留。
                </div>
                <script type="text/html">
                    <div class="infomsg">
                        当启用能量功能后，会员可通过相关操作获取相对应的能量；
                        <br>
                        当禁用能量功能后，不再产生新的能量，会员端页面不显示能量项，已产生的能量仍将保留。
                    </div>
                </script>
                <script type="text/css">
                    .infomsg{ font-size: 12px; color: #999999; letter-spacing: 0; line-height: 20px; text-align: left; position: relative; padding-left: 26px;}
                    .infomsg:before{ content: "i"; font-family: Arial-BoldMT; position: absolute; font-size: 12px; top: 2px; left: 5px; color: #ffffff; letter-spacing: 0; text-align: center; background: #4aa6fc; border: 1px solid #4aa6fc; width: 15px; height: 14px; line-height: 14px; border-radius: 100%; }
                </script>
                <hr />
                <p>升级使用svg來绘制小图片</p>
                <div class="infomsg2">
                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                        <g>
                            <title>警告符号</title>
                            <circle fill="#4aa6fc" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="9" cy="9" r="8" id="svg_10" stroke="#40a1f7"/>
                            <text fill="#fff" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="-30" y="15" id="svg_11" font-size="14" font-family="Sans-serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.8666666746139526,0,0,1,35.033331245183945,0) " stroke="#00ffff" font-style="normal" font-weight="bold">i</text>
                        </g>
                    </svg>
                    当启用能量功能后，会员可通过相关操作获取相对应的能量；
                    <br>
                    当禁用能量功能后，不再产生新的能量，会员端页面不显示能量项，已产生的能量仍将保留。
                </div>
                <script type="text/html">
                    <div class="infomsg2">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                            <g>
                                <title>警告符号</title>
                                <circle fill="#4aa6fc" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="9" cy="9" r="8" id="svg_10" stroke="#40a1f7"/>
                                <text fill="#fff" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="-30" y="15" id="svg_11" font-size="14" font-family="Sans-serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.8666666746139526,0,0,1,35.033331245183945,0) " stroke="#00ffff" font-style="normal" font-weight="bold">i</text>
                            </g>
                        </svg>
                        当启用能量功能后，会员可通过相关操作获取相对应的能量；
                        <br>
                        当禁用能量功能后，不再产生新的能量，会员端页面不显示能量项，已产生的能量仍将保留。
                    </div>
                </script>
                <script type="text/css">
                    .infomsg2{font-size: 12px; color: #999999; letter-spacing: 0; line-height: 22px; text-align: left; position: relative; padding-left: 26px;}
                    .infomsg2 svg{position: absolute; top: 1px; left: 3px;}
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
<style>
    .infomsg{ font-size: 12px; color: #999999; letter-spacing: 0; line-height: 20px; text-align: left; position: relative; padding-left: 26px;}
    .infomsg:before{ content: "i"; font-family: Arial-BoldMT; position: absolute; font-size: 12px; top: 2px; left: 5px; color: #ffffff; letter-spacing: 0; text-align: center; background: #4aa6fc; border: 1px solid #4aa6fc; width: 15px; height: 14px; line-height: 14px; border-radius: 100%; }
    .infomsg2{font-size: 12px; color: #999999; letter-spacing: 0; line-height: 22px; text-align: left; position: relative; padding-left: 26px;}
    .infomsg2 svg{position: absolute; top: 1px; left: 3px;}
</style>
