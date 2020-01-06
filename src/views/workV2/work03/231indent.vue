<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">缩进的整齐排版样式</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 用途较广 每次遇到都要重新写 擦擦啊</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <hr />
                <div style="color:#999">
                    温馨提示：1、每月10日为封账日期，15日-20日为打款日期；<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、收入不足100元不能提现，当月未提现金额滚存次月；<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、提现金额只能为整百元，在生成账单后自动提现，余额滚存至次月。
                </div>
                <script type="text/html" v-pre>
                    <div style="color:#999">
                        温馨提示：1、每月10日为封账日期，15日-20日为打款日期；<br/>
                        &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;
                        2、收入不足100元不能提现，当月未提现金额滚存次月；
                        &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;
                        3、提现金额只能为整百元，在生成账单后自动提现，余额滚存至次月。
                    </div>
                </script>
                <p><Icon type="md-close" style="color:red"/> 这种方式比较简单效果明显 但是很不好的是阅读和配置这些空格时候冗余冗长</p>
                <hr />
                <div style="position:relative;color:#999;padding-left:73px;">
                    <div style="position:absolute; top:0px;left:0px">温馨提示：</div>
                    1、每月10日为封账日期，15日-20日为打款日期；<br/>
                    2、收入不足100元不能提现，当月未提现金额滚存次月；<br/>
                    3、提现金额只能为整百元，在生成账单后自动提现，余额滚存至次月。
                </div>
                <script type="text/html" v-pre>
                    <div style="position:relative;color:#999;padding-left:73px;">
                        <div style="position:absolute; top:0px;left:0px">温馨提示：</div>
                        1、每月10日为封账日期，15日-20日为打款日期；<br/>
                        2、收入不足100元不能提现，当月未提现金额滚存次月；<br/>
                        3、提现金额只能为整百元，在生成账单后自动提现，余额滚存至次月。
                    </div>
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 感觉效果可以 代码清爽 嗯嗯满足了强迫症</p>
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
