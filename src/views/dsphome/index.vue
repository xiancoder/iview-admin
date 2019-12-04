<template>
    <div style="padding:20px 30px;">
        <Alert type="warning" show-icon>您的账户信息尚不完整，请尽快补全。<router-link to="/foo">去认证</router-link></Alert>
        <Alert type="warning" show-icon>认证信息正在审核，请耐心等待！</Alert>
        <Alert type="warning" show-icon>认证信息暂未通过审核，请重新上传认证资料！<router-link to="/foo">去修改</router-link></Alert>
        <Card>
            <Row style="padding:20px" :gutter="20">
                <Col span="10" class="borderr">
                    <p>你好 , </p>
                    <br />
                    <p>
                        <b>XXXXXXXXXX</b>
                        <Divider type="vertical" />
                        <Tag type="dot" color="error">未认证</Tag>
                        <Tag type="dot" color="success">已认证</Tag>
                        <Divider type="vertical" />
                        <Tag color="warning" size="large">个人广告主</Tag>
                    </p>
                </Col>
                <Col span="12" offset="2">
                    <p>账户余额 : </p>
                    <br />
                    <p>
                        <span><b>0.00</b> 元</span>
                        <Divider type="vertical" />
                        <Button type="primary">立即充值</Button>
                        <Divider type="vertical" />
                        <Button type="text">充值记录</Button>
                        <Divider type="vertical" />
                        <Button type="text">收款账户</Button>
                    </p>
                </Col>
            </Row>
        </Card>
        <br />
        <Card>
            <Row style="padding:20px" :gutter="20">
                <Col span="10">
                    <p>用户信息 :</p>
                    <br />
                    <p>用户名：kegugu192</p>
                    <br />
                    <p>真实姓名：李*米</p>
                    <br />
                    <p><router-link to="/foo">《广告主电子协议》</router-link></p>
                    <br />
                </Col>
                <Col span="12" offset="2">
                    <p>&nbsp;</p>
                    <br />
                    <p>邮箱：3838940@qq.com</p>
                    <br />
                    <p>身份证号：110***********1231</p>
                    <br />
                </Col>
                <Col span="24">
                    <p>资质证件 : </p>
                    <br />
                    <p>
                        <img :src="`./null.png`" alt="" />
                        <img :src="`./null.png`" alt="" />
                        <img :src="`./null.png`" alt="" />
                    </p>
                </Col>
            </Row>
        </Card>
        <br />
        <p class="text-danger">备注：个人账户显示个人的信息，公司账户显示公司的信息</p>
        <Select v-model="frm.select1" style="width: 300px">
            <Option :value="1">广告主</Option> <Option :value="2">运营</Option> <Option :value="3">财务</Option>
        </Select>
        <hr>
        当前角色ID = {{roleId}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            frm: {
                select1: ''
            }
        }
    },
    mounted () {
        this.frm.select1 = this.$store.state.system.role
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.role || 2 } // 用户角色权限
    },
    watch: { // 监听
        'frm.select1': function (n, o) {
            this.$store.dispatch('system/setRole', n) // 获取用户信息
        }
    }
}
</script>
<style lang="less">
</style>
