<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">将iview默认配置设置好以后 再写组件就不用关心提示信息了</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="日期框" prop="date1">
                        <DatePicker type="date" :value="frm.date1" @on-change="frm.date1=$event"
                            style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">需关注 :value @on-change</div>
                    </FormItem>
                    <Alert type="info">frm.date1 = {{ frm.date1 }}</Alert>
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker :value="frm.date2" type="daterange" style="width: 300px"
                            @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                            split-panels>
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">需关注 :value @on-change @on-clear</div>
                    </FormItem>
                    <Alert type="info">frm.date2 = {{ frm.date2 }}</Alert>
                </Form>
                <script type="text/js">
                    <DatePicker type="date" :value="frm.date1" @on-change="frm.date1=$event"
                        style="width: 300px">
                    </DatePicker>
                    <DatePicker :value="frm.date2" type="daterange" style="width: 300px"
                        @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                        split-panels>
                    </DatePicker>
                </script>
                <script type="text/js">
                    // 日期控件 指定 placeholder 和 间隔字符
                    iView.DatePicker.mixins[0].props.placeholder.default = '请输入日期'
                    iView.DatePicker.mixins[0].props.separator.default = '至'
                    iView.DatePicker.mixins[0].props.format.default = 'yyyy-MM-dd'
                </script>
                <p class="text-danger">同理 可以指定一些其他的iview组件的默认值</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
const validateDate2 = (rule, value, callback) => {
    const dates = this.frm.date2
    if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
    callback()
}
export default {
    data () {
        return {
            frm: {
                date1: '', // 日期测试
                date2: [] // 日期范围测试
            },
            frmValidate: {
                date1: [
                    { required: true, message: '请选择日期' }
                ],
                date2: [
                    { validator: validateDate2 }
                ]
            }
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
