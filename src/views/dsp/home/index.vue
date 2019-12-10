<template>
    <div>
        <div style="padding:20px 30px;" v-if="roleId==1">
            <Alert type="warning" show-icon v-if="frm.is_auth==1">您的账户信息尚不完整，请尽快补全。<router-link to="/foo">去认证</router-link></Alert>
            <Alert type="warning" show-icon v-if="frm.is_auth==2">认证信息正在审核，请耐心等待！</Alert>
            <Alert type="warning" show-icon v-if="frm.is_auth==3">认证信息暂未通过审核，请重新上传认证资料！<router-link to="/foo">去修改</router-link></Alert>
            <Card>
                <Row style="padding:20px" :gutter="20">
                    <Col span="10" class="borderr">
                        <p>你好 , </p>
                        <p style="margin-top:20px">
                            <b>{{frm.user_name}} !</b>
                            <Divider type="vertical" />
                            <Tag type="dot" color="error" v-if="frm.is_auth==1">未认证</Tag>
                            <Tag type="dot" color="success" v-if="frm.is_auth==5">已认证</Tag>
                            <Divider type="vertical" />
                            <Tag color="warning" size="large" v-if="frm.who_regiest==1">个人广告主</Tag>
                            <Tag color="warning" size="large" v-if="frm.who_regiest==2">企业广告主</Tag>
                        </p>
                    </Col>
                    <Col span="12" offset="2">
                        <p>账户余额 : </p>
                        <p style="margin-top:20px">
                            <span><b>{{frm.balance}}</b> 元</span>
                            <Divider type="vertical" />
                            <Button type="primary" @click="goto('finance_list@recharge')">立即充值</Button>
                            <Divider type="vertical" />
                            <Button type="text" @click="goto('finance_list@recharge')">充值记录</Button>
                            <Divider type="vertical" />
                            <Button type="text" @click="goto('charge_chargeInfo')">收款账户</Button>
                        </p>
                    </Col>
                </Row>
            </Card>
            <br />
            <Card>
                <Row style="padding:20px" :gutter="20">
                    <Col span="10">
                        <p>用户信息 :</p>
                        <p style="margin-top:20px">用户名：{{frm.user_name}}</p>
                        <p style="margin-top:20px">真实姓名：{{frm.real_name}}</p>
                        <p style="margin-top:20px"><router-link to="/foo">《广告主电子协议》</router-link></p>
                    </Col>
                    <Col span="12" offset="2">
                        <p>&nbsp;</p>
                        <p style="margin-top:20px" v-show="frm.contact_tel">电话：{{frm.contact_tel}}</p>
                        <p style="margin-top:20px"  v-show="frm.contact_qq">QQ：{{frm.contact_qq}}</p>
                        <p style="margin-top:20px"  v-show="frm.contact_weixin">微信：{{frm.contact_weixin}}</p>
                        <p style="margin-top:20px"  v-show="frm.contact_email">邮箱：{{frm.contact_email}}</p>
                        <p style="margin-top:20px" >身份证号：{{frm.card_id}}</p>
                    </Col>
                    <Col span="24">
                        <p style="margin-top:20px">资质证件 :</p>
                        <p style="margin-top:20px">
                            <img class="certificate" v-for="(item, index) in frm.certificates" :key="'xx'+index" :src="item" alt="" />
                        </p>
                    </Col>
                </Row>
            </Card>
        </div>
        <div style="padding:20px 30px;" v-if="roleId!=1">
            <h1>欢迎使用DSP广告主管理平台</h1>
        </div>
        当前角色ID = {{roleId}}
    </div>
</template>
<script>
import { extend } from '@/utils/object'
import { goto } from '@/tools'

export default {
    data () {
        return {
            frm: {
                'user_name': '', // 用户名
                'real_name': '', // 真实姓名
                'who_regiest': '', // 1个人广告主 2企业广告主
                'contact_tel': '', // 手机号
                'contact_wx': '', // 微信
                'contact_qq': '', // qq
                'contact_email': '', // 邮箱
                'card_id': '', // 身份证
                'balance': '', // 账户余额
                'certificates': [], // 资质证件
                'is_auth': '' // 认证审核状态 1没认证2审核中3审核没过4审核通过
            }
        }
    },
    mounted () {
        this.$api.dspmain.info().then((info) => { // ajax
            info.certificates = info.certificates || []
            extend(this.frm, info)
        })
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.userRoleId } // 用户角色权限
    },
    methods: {
        goto
    }
}
</script>
<style >
    .certificate{ width: 100px; height: 112px; background: red; display: inline-block; margin-right: 20px;}
</style>
