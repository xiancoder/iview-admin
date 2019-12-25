<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">使用css3 + svg + 创意 做的银行卡效果 (带翻面)</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>银行的卡分为两种：一种是借记卡，一种是贷记卡。</p>
                <p>借记卡：又叫储蓄卡，除了招商银行16位，交通银行17位，其他银行借记卡都是卡号19位。</p>
                <p>贷记卡：也就是我们平时所说的信用卡，可以透支消费。所有银行信用卡都是16位。</p>
                <p>银行卡一般分为两种，一种是借记卡，通常也叫银行储蓄卡，这种卡可以存款取款转账，但是不可以透支，这种卡的卡号一般是19位的，像工商银行、农业银行等都是19位的，而招商银行、建设银行是16位，交通银行是17位。</p>
                <p>另一种是贷记卡，通常也叫做信用卡，信用卡可以透支一定的额度进行消费，信用卡的位数一般都是16位。所以要具体看您是哪个银行的卡，还有看是什么类型的卡。</p>
                <p>比如建设银行的对公账户就是20个数字组合而成，比个人账户要多出两个数字；中国银行的对公账户比较特殊，账户长短不一，最短的只有12位数字比个人账户少了6个数字，最长的也只有17位数字还是比个人账户少了1个数字。</p>
                <p></p>
                <Button @click="flipped=!flipped">翻面</Button>
                <hr />
                <credit-card v-for="(row,index) in list" :key="index"
                    :kahao="row.kahao" :gongsi="row.gongsi" :yinhang="row.yinhang" :beizhu="row.beizhu" :code="row.code">
                </credit-card>
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
import CreditCard from '@C/creditcard'
export default {
    components: {
        CreditCard
    },
    data () {
        return {
            list: [
                {
                    kahao: '68392020230309392012',
                    gongsi: '万有引力科技服务河北有限公司',
                    yinhang: '中国建设银行河北省石家庄市平安支行',
                    beizhu: '买菜用',
                    code: '9851'
                }, {
                    kahao: '6839202023030939',
                    gongsi: '美轮美奂科技服务河北有限公司',
                    yinhang: '中国建设银行河北省石家庄市平安支行',
                    beizhu: '上班用',
                    code: '9851'
                }
            ]
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
