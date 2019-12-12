<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的日期框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">日期校验</Divider>
                    <FormItem label="日期框" prop="date11">
                        <DatePicker type="date" :value="frm.date11" placeholder="选择日期" format="yyyy-MM-dd"
                            @on-change="(date)=>{frm.date11=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">【不大完美】【】</div>
                    </FormItem>
                    <FormItem label="日期框(年月)" prop="date12">
                        <DatePicker type="month" :value="frm.date12" placeholder="选择日期" format="yyyy-MM"
                            @on-change="(date)=>{frm.date12=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">【不大完美】【写两遍字段】</div>
                    </FormItem>
                    <FormItem label="日期框(禁用)" prop="date13">
                        <DatePicker type="date" :value="frm.date13" placeholder="选择日期" format="yyyy-MM-dd"
                            :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                            @on-change="(date)=>{frm.date13=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">【不大完美】【】</div>
                    </FormItem>
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker :value="frm.date2" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                            @on-change="frm.date2=$event" @on-clear="frm.date2=[]" split-panels>
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">【不完美】【写三遍字段】【提交时候得拆分字段】</div>
                    </FormItem>
                    <FormItem label="日期范围 (自定义时间段)" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm.date2" @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                            split-panels :editable="false" :options="{shortcuts: [
                                { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                            ]}">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">【不完美】【写三遍字段】【提交时候得拆分字段】</div>
                    </FormItem>
                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <script type="text/html">
                </script>
                <p></p>
                <script type="text/js">
                </script>
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
        return {
            loading: false,
            frm: {
                date11: '', // 日期测试
                date12: '', // 日期测试
                date13: '', // 日期测试
                date2: [] // 日期范围测试
            },
            frmValidate: {
                date11: [
                    { required: true, message: '请选择日期' }
                ],
                date12: [
                    { required: true, message: '请选择日期' }
                ],
                date13: [
                    { required: true, message: '请选择日期' }
                ],
                date2: [
                    { validator: (rule, value, callback) => {
                        const dates = this.frm.date2
                        if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.loading = true
                    setTimeout(() => {
                        alert('校验通过')
                        this.loading = false
                    }, 2e3)
                }
            });
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
