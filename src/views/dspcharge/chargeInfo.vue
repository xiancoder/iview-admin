<template>
    <div style="padding:50px 0 0 20px">
        <Form ref="form5596" :model="frm" :label-width="150">
            <FormItem label="相关公司" prop="input1">
                <Select v-model="frm.companyId" filterable clearable placeholder="请选择相关公司" style="width: 350px">
                    <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
                &nbsp;&nbsp;
                <Button type="primary">搜索</Button>
            </FormItem>
            <FormItem label="公司账户" style="margin-top:50px">
                <credit-card v-for="(row,index) in list" :key="index" style="display: inline-block; margin-right: 20px;"
                    :kahao="row.kahao" :gongsi="row.gongsi" :yinhang="row.yinhang" :beizhu="row.beizhu" :code="row.code">
                </credit-card>
            </FormItem>
        </Form>
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
            loading: false,
            dataSet: {
                companyList: []
            },
            frm: {
                companyId: '2'
            },
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
        getDataSet () { // 初始化数据源
            this.$api.dspsystem.companyList().then(list => { this.dataSet.companyList = list })
        }
    },
    mounted: function () {
        this.getDataSet()
    }
}
</script>
