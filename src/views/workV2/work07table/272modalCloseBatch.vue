<template>
    <div>
        <Form ref="from1598" :model="frm" :rules="frmRule"
            :label-width="80" style="width: 80%;margin: 0 auto">
            <FormItem label="">
                <h3>批量封账</h3>
            </FormItem>
            <FormItem label="日期" prop="start2end">
                <DatePicker :value="frm.start2end" type="daterange" placeholder="选择开始日期结束日期"
                    @on-change="frm.start2end=$event" @on-clear="frm.start2end=[]" split-panels style="width: 300px">
                </DatePicker>
            </FormItem>
            <FormItem label="业务" prop="businessId">
                <!--
                <Select v-model="frm.businessId" placeholder="请选择业务" style="width: 350px">
                    <Option v-for="option in dataSet.businessIdList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                -->
                <Input type="text" v-model="frm.businessId" placeholder="请输入业务" style="width: 300px"/>
            </FormItem>
            <FormItem label="用户" prop="aderId">
                <Select v-model="frm.aderId" placeholder="请选择用户" style="width: 300px">
                    <Option v-for="option in dataSet.aderIdList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <div class="ivu-form-item-notice-tip text-danger">{{serverError}}</div>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="ok" :loading="loading">确认封账</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            loading: false,
            serverError: '', // 服务器返回的错误
            dataSet: {
                'aderIdList': [],
                'businessIdList': []
            },
            frm: {
                'start2end': '', // 日期范围 yyyy-mm-dd
                'businessId': '', // 业务ID
                'aderId': '' // 广告主ID
            },
            frmRule: {
                start2end: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const dates = this.frm.start2end
                        if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
                        callback()
                    } }
                ],
                businessId: [
                    { required: true, message: '不能为空' }
                ],
                aderId: [
                    { required: true, message: '不能为空' }
                ]
            }
        }
    },
    props: {
        flag: { type: Boolean, default: false }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n !== true) {
                this.$refs['from1598'].resetFields()
                this.loading = false
                this.serverError = ''
            }
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.advertiser.pull().then(list => { this.dataSet.aderIdList = list })
            // this.$api.business.pull().then(list => { this.dataSet.businessIdList = list })
        },
        ok () {
            this.$refs['from1598'].validate(valid => {
                if (!valid) {return false}
                this.serverError = ''
                this.$tool.confirm('封账后数据不可修改, 确认将所选数据进行封账吗?', '封账确认').then(() => {
                    this.$api.cost.sealAccountBatch(this.frm).then((res) => { // ajax
                        this.$emit('on-submit', 1)
                    }).catch((msg) => {
                        this.serverError = msg
                    }).finally(() => {
                        this.loading = false
                    })
                })
            });
        },
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
        this.getDataSet()
    }
}
</script>
