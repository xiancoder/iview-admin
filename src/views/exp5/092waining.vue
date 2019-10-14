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
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
</style>
