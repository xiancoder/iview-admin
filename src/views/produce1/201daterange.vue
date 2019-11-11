<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">日期范围框两个值的维护有点费劲???克服一下吧不要改成[a,b]了更麻烦</div>
            <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p>将所有内容都写在标签上可以极大的方便复制粘贴党的使用</p>
                <p>通常使用一周时间作为初始数据</p>
                <p class="text-danger">新发现 这个控件可以使用model指令 其绑定的值为date类型</p>
                <p class="text-danger">经研究 默认值的格式无所谓 采用#api中的format也无差别转格式</p>
                <p class="text-danger">以下写法均可 (墙裂建议第二种)</p>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <p>I</p>
                        <Form ref="formValidateId" :model="frm" :label-width="150">
                            <FormItem label="日期范围" prop="date2">
                                <DatePicker type="daterange" placeholder="选择开始日期结束日期"
                                    style="width:300px" @on-clear="frm.date2=[]"
                                    :value="frm.date2" @on-change="frm.date2=$event"
                                    split-panels :editable="false">
                                </DatePicker>
                            </FormItem>
                        </Form>
                        <script type="text/html" v-pre>
                            <!-- 建议直接拷贝使用 -->
                            <!-- style 可以使用宽高边距 禁止超过3个样式 -->
                            <FormItem label="日期范围" prop="date2">
                                <DatePicker type="daterange" placeholder="选择开始日期结束日期"
                                    style="width:300px" @on-clear="frm.date2=[]"
                                    :value="frm.date2" @on-change="frm.date2=$event"
                                    split-panels :editable="false">
                                </DatePicker>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            // 公共方法请去utils里面找 这里面的方法都经历了单元测试
                            import { dateFormat, dateSub } from '@/utils/date'
                            data () {
                                let today = new Date() // 常用的是前七天
                                return {
                                    frm: {
                                        date2: [dateFormat(dateSub(today, 6, 'd')), dateFormat(today)],
                                    }
                                }
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <p>II</p>
                        <Form ref="formValidateId" :model="frm" :label-width="150">
                            <FormItem label="日期范围" prop="date3">
                                <DatePicker type="daterange" placeholder="请选择日期"
                                    class="wid180 vermiddle blue_date"
                                    v-model="frm.date3" :editable="false" :clearable="false">
                                </DatePicker>
                            </FormItem>
                        </Form>
                        <script type="text/html" v-pre>
                            <!-- 建议直接拷贝使用 -->
                            <!-- style 可以使用宽高边距 禁止超过3个样式 -->
                            <FormItem label="日期范围" prop="date3">
                                <DatePicker type="daterange" placeholder="请选择日期"
                                    class="wid180 vermiddle blue_date"
                                    v-model="frm.date3" :editable="false" :clearable="false">
                                </DatePicker>
                                <!-- format="yyyy-MM-dd" 不用写这个 因为已经配好了默认 -->
                                <!-- placement="bottom-start" 不用写这个 因为已经配好了默认 -->
                            </FormItem>
                        </script>
                        <script type="text/js">
                            // 公共方法请去utils里面找 这里面的方法都经历了单元测试
                            import { sevenRange } from '@/utils/date'
                            data () {
                                return {
                                    frm: {
                                        date3: sevenRange(), // 前七天
                                    }
                                }
                            },
                        </script>
                    </Col>
                </Row>
                <p>测试: 如果此控件可以跟着数值变化 即可以动态改变 那么它就可以满足异步详情ajax</p>
                <p><button @click="testData2">测试给date2赋值</button></p>
                <p class="text-success">没问题 可以搞</p>
                <p>如果需要校验 一般就是必填 或者 ???</p>
                <Form ref="formValidateId2" :model="frm2" :rules="frmValidate" :label-width="150">
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm2.date2" @on-change="frm2.date2=$event" @on-clear="frm2.date2=[]"
                            split-panels :editable="false">
                        </DatePicker>
                        <Button type="primary" @click="handleSubmit('formValidateId2')" style="margin-left:10px;">校验测试</Button>
                    </FormItem>
                </Form>
                <script type="text/html" v-pre>
                    <!-- 建议直接拷贝使用 -->
                    <Form ref="formValidateId??" :model="frm2" :rules="frmValidate" :label-width="150">
                        <FormItem label="日期范围" prop="date2">
                            <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                                :value="frm2.date2" @on-change="frm2.date2=$event" @on-clear="frm2.date2=[]"
                                split-panels :editable="false">
                            </DatePicker>
                        </FormItem>
                    </Form>
                </script>
                <script type="text/js">
                    // 公共校验方法请去validate里面找 系统未提供的这里都有
                    import { required4DateRange } from '@/validate'
                    // --------------
                    data () {
                        frmValidate: {
                            date2: [
                                { validator: required4DateRange(() => this.frm2.date2, '我要的时间段必填') }
                            ]
                        }
                    },
                </script>
                <p>特殊情况 需要列出几个快捷选项</p>
                <p>所有的配置项都堆在这里是为了方便使用 复制粘贴党的福音</p>
                <Form ref="formValidateId3" :model="frm3" :label-width="150">
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm3.date2" @on-change="frm3.date2=$event" @on-clear="frm3.date2=[]"
                            split-panels :editable="false" :options="{shortcuts: [
                                { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                            ]}">
                        </DatePicker>
                    </FormItem>
                </Form>
                <script type="text/html" v-pre>
                    <!-- 建议直接拷贝使用 -->
                    <!-- 都堆在这里是为了方便使用 -->
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                            :value="frm.date2" @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                            split-panels :editable="false" :options="{shortcuts: [
                                { text: '过去一周', value () {return[new Date(new Date().getTime()-3600*1000*24*7), new Date()]}},
                                { text: '过去一月', value () {return[new Date(new Date().getTime()-3600*1000*24*30), new Date()]}},
                                { text: '过去三月', value () {return[new Date(new Date().getTime()-3600*1000*24*90), new Date()]}}
                            ]}">
                        </DatePicker>
                    </FormItem>
                </script>
                <h3>官方api value属性 ，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式</h3>
                <h3>注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用</h3>
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
import { dateFormat, dateSub, sevenRange } from '@/utils/date'
import { required4DateRange } from '@/validate'
export default {
    data () {
        let today = new Date() // 常用的是前七天
        return {
            frm: {
                date2: [dateFormat(dateSub(today, 6, 'd')), dateFormat(today)], // 日期范围测试
                date3: sevenRange() // 前七天
            },
            frm2: {
                date2: [] // 日期范围测试
            },
            frm3: {
                date2: [] // 日期范围测试
            },
            frmValidate: {
                date2: [
                    { validator: required4DateRange(() => this.frm2.date2, '我要的时间段必填') }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            console.log('handleSubmit', name)
            this.$refs[name].validate((valid) => {
                console.log(valid)
            })
        },
        testData2 () {
            this.frm.date2 = ['2014-05-09', '2014-06-09']
        }
    },
    mounted () {
    }
}
</script>
