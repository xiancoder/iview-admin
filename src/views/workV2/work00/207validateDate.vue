<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的日期框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left"> <span class="text-danger">很重要的一项 format="yyyy-MM-dd" 已经写入默认配置</span> </Divider>
                    <Divider orientation="left"> <span class="text-danger">很重要的一项 :editable="false" 已经写入默认配置</span> </Divider>
                    <Divider orientation="left"> <span class="text-danger">很重要的一项 placeholder = '请选择日期' 已经写入默认配置</span> </Divider>
                    <Divider orientation="left"> <span class="text-danger">很重要的一项 separator = ' 至 ' 已经写入默认配置</span> </Divider>
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 普通使用不必在意赋值格式 </Divider>
                    <FormItem label="标题" prop="p01">
                        <DatePicker type="date" :value="frm.p01" placeholder="选择日期" style="width: 300px"
                            @on-change="(date)=>{frm.p01=date}">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 默认赋值格式(format="yyyy-MM-dd")</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <DatePicker type="date" :value="frm.p01" placeholder="选择日期" style="width: 300px"
                                    @on-change="(date)=>{frm.p01=date}">
                                </DatePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '请选择日期' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 年月格式 </Divider>
                    <FormItem label="标题" prop="p02">
                        <DatePicker type="month" :value="frm.p02" placeholder="选择日期" format="yyyy-MM"
                            @on-change="(date)=>{frm.p02=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 年月格式</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p02}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <DatePicker type="month" :value="frm.p02" placeholder="选择日期" format="yyyy-MM"
                                    @on-change="(date)=>{frm.p02=date}" style="width: 300px">
                                </DatePicker>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期框 必填 + 从今天开始向前数几天来禁用 </Divider>
                    <FormItem label="标题" prop="p03">
                        <DatePicker type="date" :value="frm.p03" placeholder="选择日期"
                            :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                            @on-change="(date)=>{frm.p03=date}" style="width: 300px">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期框 必填 + 从今天开始向前数几天来禁用</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p03}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p03">
                                <DatePicker type="date" :value="frm.p03" placeholder="选择日期"
                                    :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                                    @on-change="(date)=>{frm.p03=date}" style="width: 300px">
                                </DatePicker>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期范围框 必填 + 赋值使用字符串放置数组中 </Divider>
                    <FormItem label="标题" prop="p04">
                        <DatePicker :value="frm.p04" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                            @on-change="frm.p04=$event" @on-clear="frm.p04=[]" split-panels>
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">日期范围框 必填 + 赋值使用字符串放置数组中</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p04}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p04">
                                <DatePicker :value="frm.p04" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                                    @on-change="frm.p04=$event" @on-clear="frm.p04=[]" split-panels>
                                </DatePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '请选择日期' }
                            { validator: (rule, value, callback) => {
                                const dates = this.frm.p04
                                if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
                                callback()
                            } }
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期范围框 必填 + 赋值使用字符串放置数组中 </Divider>
                    <FormItem label="标题 " prop="p05">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm.p05" @on-change="frm.p05=$event" @on-clear="frm.p05=[]"
                            split-panels :editable="false" :options="{shortcuts: [
                                { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                            ]}">
                        </DatePicker>
                        <div class="ivu-form-item-notice-tip">(自定义时间段)【不完美】【写三遍字段】【提交时候得拆分字段】</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p05}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p05">
                                <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                                    :value="frm.p05" @on-change="frm.p05=$event" @on-clear="frm.p05=[]"
                                    split-panels :editable="false" :options="{shortcuts: [
                                        { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                        { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                        { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                                    ]}">
                                </DatePicker>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">日期范围框 必填 + 必须是时间段 </Divider>
                    <FormItem label="标题 " prop="p06">
                        <TimePicker type="timerange" placeholder="选择开始时间结束时间" style="width:300px"
                            :disabled-hours="[0,1,2,3,4,5,6,7,20,21,22,23]" :steps="[1, 5]"
                            :value="frm.p06" format="HH:mm" @on-change="frm.p06=$event" placement="bottom-start">
                        </TimePicker>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p06}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题 " prop="p06">
                                <TimePicker type="timerange" placeholder="选择开始时间结束时间" style="width:300px"
                                    :disabled-hours="[0,1,2,3,4,5,6,7,20,21,22,23]" :steps="[1, 5]"
                                    :value="frm.p06" format="HH:mm" @on-change="frm.p06=$event" placement="bottom-start">
                                </TimePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            p06: [
                                { required: true, message: '请选择时间' },
                                { validator: (rule, value, callback) => {
                                    const times = this.frm.p06
                                    if (!times || times.length === 0) { return callback(new Error('必选时间段!')) }
                                    if (parseInt(times[0].replace(/[^\d]/g, '')) === parseInt(times[1].replace(/[^\d]/g, '')) ) {
                                        return callback(new Error('必选一段时间!'))
                                    }
                                    callback()
                                } }
                            ]
                        </script>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <p></p>
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
                p01: '', // 日期测试
                p02: '', // 日期测试
                p03: '', // 日期测试
                p04: [], // 日期范围测试
                p05: [], // 日期范围测试
                p06: [] // 时间范围测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '请选择日期' }
                ],
                p02: [
                    { required: true, message: '请选择日期' }
                ],
                p03: [
                    { required: true, message: '请选择日期' }
                ],
                p04: [
                    { required: true, message: '请选择日期' },
                    { validator: (rule, value, callback) => {
                        const dates = this.frm.p04
                        if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
                        callback()
                    } }
                ],
                p06: [
                    { required: true, message: '请选择时间' },
                    { validator: (rule, value, callback) => {
                        const times = this.frm.p06
                        if (!times || times.length === 0) { return callback(new Error('必选时间段!')) }
                        if (parseInt(times[0].replace(/[^\d]/g, '')) === parseInt(times[1].replace(/[^\d]/g, ''))) {
                            return callback(new Error('必选一段时间!'))
                        }
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
