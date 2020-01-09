<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的下拉框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">下拉框 静态数据源也不建议使用 </Divider>
                    <FormItem label="标题" prop="p01">
                        <Select v-model="frm.p01" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option value="0" label="全部"></Option>
                            <Option :value="1">一般</Option>
                            <Option :value="2">重要</Option>
                            <Option :value="3">紧急</Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">【静态数据源也不建议使用】</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <Select v-model="frm.p01" style="width: 300px" placeholder="请搜索/选择XXX" >
                                    <Option value="0" label="全部"></Option>
                                    <Option :value="1">一般</Option>
                                    <Option :value="2">重要</Option>
                                    <Option :value="3">紧急</Option>
                                </Select>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '下拉框必选其一' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">下拉框 所有数据源都从接口模块读取 且数据中不能包含0 (0代表全部) </Divider>
                    <FormItem label="标题" prop="p02">
                        <Select v-model="frm.p02" placeholder="请搜索/选择XXX" style="width: 300px">
                            <Option value="0" label="全部"></Option>
                            <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">下拉框 所有数据源都从接口模块读取 且数据中不能包含0 (0代表全部)</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p02}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <Select v-model="frm.p02" placeholder="请搜索/选择XXX" style="width: 300px">
                                    <Option value="0" label="全部"></Option>
                                    <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                                    </Option>
                                </Select>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            getDataSet () {
                                setTimeout(() => { this.list = [{id: 1, name: '一般'}, {id: 2, name: '重要'}, {id: 3, name: '紧急'}] }, 2e3)
                            },
                        </script>
                        <script type="text/js">
                            mounted () {
                                this.getDataSet()
                            }
                        </script>
                    </FormItem>

                    <Divider orientation="left">下拉框 可搜索 可清除</Divider>
                    <FormItem label="标题" prop="p03">
                        <Select v-model="frm.p03"  placeholder="请搜索/选择XXX" style="width: 300px"
                            filterable clearable>
                            <Option value="0" label="全部"></Option>
                            <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <Select v-model="frm.p03"  placeholder="请搜索/选择XXX" style="width: 300px"
                                filterable clearable>
                            </Select>
                        </script>
                    </FormItem>

                    <Divider orientation="left">下拉框 大数据量测试</Divider>
                    <FormItem label="标题" prop="p04">
                        <Select v-model="frm.p04"  placeholder="请搜索/选择XXX" style="width: 300px"
                            filterable clearable>
                            <Option value="0" label="全部"></Option>
                            <Option v-for="option in bigList" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="bigList=[]">清空</Button>
                        <Divider type="vertical" />
                        <Button type="primary" @click="showBigList1000()">尝试1000条信息</Button>
                        <Divider type="vertical" />
                        <Button type="primary" @click="showBigList2000()">尝试2000条信息</Button>
                        <Divider type="vertical" />
                        <Button type="primary" @click="showBigList3000()">尝试3000条信息</Button>
                    </FormItem>
                    <FormItem>
                        <p class="text-danger">经过尝试 的确会卡一会</p>
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
import axios from 'axios' // http请求库 axios配置

export default {
    data () {
        return {
            loading: false,
            list: [], // 动态数据源
            frm: {
                p01: '', // 下拉框测试
                p02: '', // 下拉框测试
                p03: '', // 下拉框测试
                p04: '1' // 下拉框测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '下拉框必选其一' }
                ],
                p02: [
                    { required: true, message: '下拉框必选其一' }
                ],
                p03: [
                    { required: true, message: '下拉框必选其一' }
                ]
            },
            bigList: []
        }
    },
    methods: {
        getDataSet () {
            setTimeout(() => { this.list = [{id: 1, name: '一般'}, {id: 2, name: '重要'}, {id: 3, name: '紧急'}] }, 2e3)
        },
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
        showBigList1000 () {
            axios.get('/api/unit/bigData1000').then(res => {
                const data = res.data
                this.bigList = data.data.list
            })
        },
        showBigList2000 () {
            axios.get('/api/unit/bigData2000').then(res => {
                const data = res.data
                this.bigList = data.data.list
            })
        },
        showBigList3000 () {
            axios.get('/api/unit/bigData3000').then(res => {
                const data = res.data
                this.bigList = data.data.list
            })
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
        this.getDataSet()
        this.showBigList3000()
    }
}
</script>
