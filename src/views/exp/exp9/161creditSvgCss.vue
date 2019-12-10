<template>
    <div style="padding:20px;">
        <h2>使用css3 + svg + 创意 做的银行卡效果 (带翻面)</h2>
        <credit-card v-for="(row,index) in list" :key="index"
            :kahao="row.kahao" :gongsi="row.gongsi" :yinhang="row.yinhang" :beizhu="row.beizhu" :code="row.code">
        </credit-card>
        <p>资料是瞎写的</p>
        <Button @click="flipped=!flipped">翻面</Button>
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
                    kahao: '6839  2020  2303  0939  201',
                    gongsi: '万有引力科技服务河北有限公司',
                    yinhang: '中国建设银行河北省石家庄市平安支行',
                    beizhu: '买菜用',
                    code: '9851'
                }, {
                    kahao: '6839  2020  2303  0939  201',
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
