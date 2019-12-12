<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的下拉框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">下拉框 静态数据源也不建议使用 </Divider>
                    <FormItem label="标题" prop="select1">
                        <Select v-model="frm.select1" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option value="0" label="全部"></Option>
                            <Option :value="1">一般</Option>
                            <Option :value="2">重要</Option>
                            <Option :value="3">紧急</Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">【静态数据源也不建议使用】</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="select1">
                                <Select v-model="frm.select1" style="width: 300px" placeholder="请搜索/选择XXX" >
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
                    <FormItem label="标题" prop="select12">
                        <Select v-model="frm.select12" placeholder="请搜索/选择XXX" style="width: 300px">
                            <Option value="0" label="全部"></Option>
                            <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">下拉框 所有数据源都从接口模块读取 且数据中不能包含0 (0代表全部)</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="select12">
                                <Select v-model="frm.select12" placeholder="请搜索/选择XXX" style="width: 300px">
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
                    <FormItem label="标题" prop="select13">
                        <Select v-model="frm.select13"  placeholder="请搜索/选择XXX" style="width: 300px"
                            filterable clearable>
                            <Option value="0" label="全部"></Option>
                            <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                        </Select>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <Select v-model="frm.select13"  placeholder="请搜索/选择XXX" style="width: 300px"
                                filterable clearable>
                            </Select>
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
                select1: '', // 下拉框测试
                select12: '', // 下拉框测试
                select13: '' // 下拉框测试
            },
            frmValidate: {
                select1: [
                    { required: true, message: '下拉框必选其一' }
                ],
                select12: [
                    { required: true, message: '下拉框必选其一' }
                ],
                select13: [
                    { required: true, message: '下拉框必选其一' }
                ]
            }
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
        cancel () {
            alert('离开')
        }
    },
    mounted () {
        this.getDataSet()
    }
}
</script>
