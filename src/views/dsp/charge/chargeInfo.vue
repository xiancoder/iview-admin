<template>
    <div style="padding:50px 0 0 20px">
        <Form ref="form5596" :model="frm" :label-width="150">
            <FormItem label="相关公司" prop="companyId">
                <Select v-model="frm.companyId" placeholder="请选择相关公司" style="width: 350px">
                    <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
                &nbsp;&nbsp;
                <Button type="primary" @click="frm.companyIdII=frm.companyId">搜索</Button>
            </FormItem>
            <FormItem label="公司账户" style="margin-top:50px">
                <div v-for="(row,index) in list.filter(row=>{return row.platform_id == frm.companyIdII })" :key="'x1'+index" class="creditbox">
                    <credit-card :kahao="row.account" :gongsi="row.name" :yinhang="row.bank">
                    </credit-card>
                    <Button class="editbtn" @click="edit(row)">编辑</Button>
                </div>
            </FormItem>
        </Form>
        <Modal v-model="model.modifyInfo" closable width="640" :mask-closable="false" footer-hide>
            <modify-info :flag="model.modifyInfo" :from="frm2" @on-submit="modifyInfoSubmit"/>
        </Modal>
    </div>
</template>
<script>
import CreditCard from '@C/creditcard'
import modifyInfo from './modifyInfoModal' // 修改

export default {
    components: {
        CreditCard, modifyInfo
    },
    data () {
        return {
            loading: false,
            model: {
                modifyInfo: false
            },
            dataSet: {
                companyList: []
            },
            frm: {
                companyId: '1',
                companyIdII: '1'
            },
            frm2: {},
            list: [],
            tel: '' // 短信通知电话
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.dspsystem.companyList().then(list => { this.dataSet.companyList = list })
        },
        modifyInfoSubmit (flag) {
            this.model.modifyInfo = false
            console.log('提交', flag ? '成功' : '放弃')
        },
        edit (row) {
            this.frm2 = row
            this.model.modifyInfo = true
        }
    },
    mounted: function () {
        this.getDataSet()
        this.$api.dspcharge.list().then(info => { // ajax
            this.list = info.list
            this.tel = info.tel
        })
    }
}
</script>
<style scope>
    .creditbox{ position:relative; display: inline-block; margin-right: 20px;}
    .creditbox .editbtn{ position: absolute; bottom: 35px; right: 25px;}
</style>
