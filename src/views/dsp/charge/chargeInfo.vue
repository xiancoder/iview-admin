<template>
    <div class="creditFrom">
        <Form ref="form5596" :model="frm" :label-width="0">
            <FormItem label="" prop="companyId" v-if="roleId==3">
                <Select v-model="frm.companyId" placeholder="请选择相关公司" style="width: 350px">
                    <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
                &nbsp;&nbsp;
                <Button type="primary" @click="frm.companyIdII=frm.companyId">搜索</Button>
            </FormItem>
            <FormItem label="" style="margin-top:50px">
                <div v-for="(row,index) in list.filter(row=>{return row.platform_id==frm.companyIdII })"
                    :key="'x1'+index" class="creditbox">
                    <credit-card :kahao="row.account" :gongsi="row.name" :yinhang="row.bank_name">
                    </credit-card>
                    <Button class="editbtn" @click="edit(row)" v-if="roleId==3">编辑</Button>
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
            if (this.roleId === 3) this.$api.system.companyList().then(list => { this.dataSet.companyList = list })
            if (this.roleId === 1) this.frm.companyIdII = parseInt(this.$store.state.system.platformId)
        },
        edit (row) {
            this.frm2 = row
            this.frm2.tel = this.tel
            this.model.modifyInfo = true
        },
        modifyInfoSubmit (flag) {
            this.model.modifyInfo = false
            if (flag) this.ajax()
        },
        ajax () {
            this.$api.charge.list(this.platformId, this.roleId).then(info => { // ajax
                this.list = info.list
                this.tel = info.tel
            })
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.userRoleId }, // 用户角色权限
        platformId () { return this.$store.state.system.platformId } // 平台id
    },
    mounted: function () {
        this.getDataSet()
        this.ajax()
    }
}
</script>
<style scope>
    .creditbox{ position:relative; display: inline-block; margin-right: 20px;}
    .creditbox .editbtn{ position: absolute; bottom: 58px; right: 23px;}
    .creditFrom {padding: 50px 0px 0px 20px; width: 100%; max-width: 1240px; text-align: center;}
</style>
