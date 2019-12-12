<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的日期框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 普通使用不必在意赋值格式 </Divider>
                    <FormItem label="标题" prop="date01">
                        <DatePicker type="date" :value="frm.date01" placeholder="选择日期" style="width: 300px"
                            @on-change="(date)=>{frm.date01=date}" format="yyyy-MM-dd">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 普通使用不必在意赋值格式</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="date01">
                                <DatePicker type="date" :value="frm.date01" placeholder="选择日期" style="width: 300px"
                                    @on-change="(date)=>{frm.date01=date}" format="yyyy-MM-dd">
                                </DatePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '请选择日期' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 年月格式 </Divider>
                    <FormItem label="标题" prop="date02">
                        <DatePicker type="month" :value="frm.date02" placeholder="选择日期" format="yyyy-MM"
                            @on-change="(date)=>{frm.date02=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 年月格式</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="date02">
                                <DatePicker type="month" :value="frm.date02" placeholder="选择日期" format="yyyy-MM"
                                    @on-change="(date)=>{frm.date02=date}" style="width: 300px">
                                </DatePicker>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 从今天开始向前数几天来禁用 </Divider>
                    <FormItem label="标题" prop="date03">
                        <DatePicker type="date" :value="frm.date03" placeholder="选择日期" format="yyyy-MM-dd"
                            :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                            @on-change="(date)=>{frm.date03=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 从今天开始向前数几天来禁用</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="date03">
                                <DatePicker type="date" :value="frm.date03" placeholder="选择日期" format="yyyy-MM-dd"
                                    :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                                    @on-change="(date)=>{frm.date03=date}" style="width: 300px">
                                </DatePicker>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期范围框 必填 + 赋值使用字符串放置数组中 </Divider>
                    <FormItem label="标题" prop="daterange01">
                        <DatePicker :value="frm.daterange01" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                            @on-change="frm.daterange01=$event" @on-clear="frm.daterange01=[]" split-panels>
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期范围框 必填 + 赋值使用字符串放置数组中</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="daterange01">
                                <DatePicker :value="frm.daterange01" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                                    @on-change="frm.daterange01=$event" @on-clear="frm.daterange01=[]" split-panels>
                                </DatePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '请选择日期' }
                            { validator: (rule, value, callback) => {
                                const dates = this.frm.daterange01
                                if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
                                callback()
                            } }
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期范围框 必填 + 赋值使用字符串放置数组中 </Divider>
                    <FormItem label="标题 " prop="daterange02">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm.daterange02" @on-change="frm.daterange02=$event" @on-clear="frm.daterange02=[]"
                            split-panels :editable="false" :options="{shortcuts: [
                                { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                            ]}">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">(自定义时间段)【不完美】【写三遍字段】【提交时候得拆分字段】</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="daterange02">
                                <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                                    :value="frm.daterange02" @on-change="frm.daterange02=$event" @on-clear="frm.daterange02=[]"
                                    split-panels :editable="false" :options="{shortcuts: [
                                        { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                        { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                        { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                                    ]}">
                                </DatePicker>
                            </FormItem>
                        </script>
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
                date01: '', // 日期测试
                date02: '', // 日期测试
                date03: '', // 日期测试
                daterange01: [], // 日期范围测试
                daterange02: [] // 日期范围测试
            },
            frmValidate: {
                date01: [
                    { required: true, message: '请选择日期' }
                ],
                date02: [
                    { required: true, message: '请选择日期' }
                ],
                date03: [
                    { required: true, message: '请选择日期' }
                ],
                daterange01: [
                    { required: true, message: '请选择日期' }
                    { validator: (rule, value, callback) => {
                        const dates = this.frm.daterange01
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
