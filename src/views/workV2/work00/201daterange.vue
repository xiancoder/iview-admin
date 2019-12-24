<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">日期范围框优化写法 使之更易用</div>
            <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 可以极大的方便复制粘贴党的使用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p class="text-danger">新发现 这个控件可以使用model指令 其绑定的值为date类型</p>
                <p class="text-danger">经研究 默认值的格式无所谓 采用#api中的format也无差别转格式</p>
                <p class="text-danger">墙裂建议以下写法</p>
                <Form ref="form1234" :model="frm" :label-width="150">
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm.date2" @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                            split-panels :editable="false">
                        </DatePicker>
                    </FormItem>
                </Form>
                <p class="text-danger">建议直接拷贝使用</p>
                <p class="text-danger">style 可以使用宽高边距 禁止超过3个样式</p>
                <script type="text/html" v-pre>
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm.date2" @on-change="frm.date2=$event" @on-clear="frm.date2=[]"
                            split-panels :editable="false">
                        </DatePicker>
                    </FormItem>
                </script>
                <script type="text/js">
                    import { sevenRange } from '@/utils/date'
                    export default {
                        data () {
                            return {
                                frm: {
                                    date2: sevenRange(), // 前七天
                                }
                            }
                        },
                        ...
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">此控件可以跟着数值变化 即可以动态改变</div>
            <Divider orientation="right">尝试&&测试</Divider>
            <div class="blogContent" v-highlight>
                <p><Button @click="testData2">测试给date2赋值</Button></p>
                <p class="text-success">没问题 可以搞</p>
                <Form ref="form12342" :model="frm2" :rules="frmValidate" :label-width="150">
                    <FormItem label="日期范围" prop="date2">
                        <DatePicker type="daterange" placeholder="选择开始日期结束日期" style="width:300px"
                            :value="frm2.date2" @on-change="frm2.date2=$event" @on-clear="frm2.date2=[]"
                            split-panels :editable="false">
                        </DatePicker>
                        <Button type="primary" @click="handleSubmit('form12342')" style="margin-left:10px;">校验测试</Button>
                    </FormItem>
                </Form>
                <script type="text/html" v-pre>
                    <!-- 建议直接拷贝使用 -->
                    <Form ref="form1234??" :model="frm2" :rules="frmValidate" :label-width="150">
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
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">特殊情况 需要列出几个快捷选项</div>
            <Divider orientation="right">尝试&&测试</Divider>
            <div class="blogContent" v-highlight>
                <p>所有的配置项都堆在这里是为了方便使用 复制粘贴党的福音</p>
                <Form ref="form12343" :model="frm3" :label-width="150">
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
                <p>官方api value属性 ，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式</p>
                <p>注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">日期范围框优化写法 </div>
            <Divider orientation="right">liuyp 2019年12月12日11:37:45 废弃</Divider>
            <div class="blogContent" v-highlight>
                <p>日期范围框两个值的维护有点费劲???</p>
                <p>将所有内容都写在标签上可以极大的方便复制粘贴党的使用</p>
                <p>通常使用一周时间作为初始数据</p>
                <Form ref="form1234" :model="frm" :label-width="150">
                    <FormItem label="日期范围" prop="date3">
                        <DatePicker type="daterange" placeholder="请选择日期" class="wid180 vermiddle blue_date"
                            v-model="frm.date3" :editable="false" :clearable="false">
                        </DatePicker>
                    </FormItem>
                </Form>
                <p class="text-danger">建议直接拷贝使用</p>
                <p class="text-danger">style 可以使用宽高边距 禁止超过3个样式</p>
                <p class="text-danger">format="yyyy-MM-dd" 不用写这个 因为已经配好了默认</p>
                <p class="text-danger"> placement="bottom-start" 不用写这个 因为已经配好了默认</p>
                <script type="text/html" v-pre>
                    <FormItem label="日期范围" prop="date3">
                        <DatePicker type="daterange" placeholder="请选择日期" class="wid180 vermiddle blue_date"
                            v-model="frm.date3" :editable="false" :clearable="false">
                        </DatePicker>
                    </FormItem>
                </script>
                <p class="text-danger">公共方法请去utils里面找 这里面的方法都经历了单元测试</p>
                <script type="text/js">
                    import { dateFormat, dateSub } from '@/utils/date'
                    export default {
                        data () {
                            let today = new Date() // 常用的是前七天
                            return {
                                frm: {
                                    date3: [dateFormat(dateSub(today, 6, 'd')), dateFormat(today)],
                                }
                            }
                        },
                        ...
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">日期范围 两个参数使用 收芝麻丢西瓜 废弃此写法 </div>
            <Divider orientation="right">liuyp 2019年12月12日11:37:45 废弃</Divider>
            <div class="blogContent" v-highlight>
                <DatePicker :value="[search.begin,search.end]" format="yyyy-MM-dd" type="daterange"
                    @on-change="search.begin=$event[0];search.end=$event[1];" style="width: 180px;" placeholder="请选择时间区间">
                </DatePicker>
                <script type="text/js">
                    let today = new Date() // 常用的是前七天
                    search: {
                        'end': dateFormater(today, 'yyyy-MM-dd'),
                        'begin': dateFormater(dateSub(today, 6, 'd'), 'yyyy-MM-dd'),
                    },
                </script>
                <script type="text/html">
                    <DatePicker :value="[search.begin,search.end]" format="yyyy-MM-dd" type="daterange"
                        @on-change="search.begin=$event[0];search.end=$event[1];" style="width: 180px;"
                        placeholder="请选择时间区间">
                    </DatePicker>
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
            search: {
                'end': dateFormat(today),
                'begin': dateFormat(dateSub(today, 6, 'd'))
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
