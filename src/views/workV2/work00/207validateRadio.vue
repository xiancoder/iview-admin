<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的单选复选的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">单选框 必填 静态数据源 可以这么用</Divider>
                    <FormItem label="标题" prop="p01">
                        <RadioGroup v-model="frm.p01">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                        <div class="ivu-form-item-notice-tip">单选框 必填 静态数据源 可以这么用</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <RadioGroup v-model="frm.p01">
                                    <Radio label="male">Male</Radio>
                                    <Radio label="female">Female</Radio>
                                </RadioGroup>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '单选框必选其一' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">复选框 必填 静态数据源 可以这么用</Divider>
                    <FormItem label="标题" prop="p02">
                        <CheckboxGroup v-model="frm.p02">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                        <div class="ivu-form-item-notice-tip">【完美】【数据源统一放置】</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p02}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <CheckboxGroup v-model="frm.p02">
                                    <Checkbox label="Eat"></Checkbox>
                                    <Checkbox label="Sleep"></Checkbox>
                                    <Checkbox label="Run"></Checkbox>
                                    <Checkbox label="Movie"></Checkbox>
                                </CheckboxGroup>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">复选框 必填 静态数据源 最多两个</Divider>
                    <FormItem label="复选框" prop="p03">
                        <CheckboxGroup v-model="frm.p03">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                        <div class="ivu-form-item-notice-tip">复选框 必填 静态数据源 最多两个</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p03}}</p>
                        <script type="text/js">
                            { required: true, message: '复选框必选其一' },
                            { type: 'array', max: 2, message: '复选框选择最多两项', trigger: 'change' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">复选框 必填 动态数据源</Divider>
                    <FormItem label="复选框" prop="p04">
                        <CheckboxGroup v-model="frm.p04">
                            <Checkbox v-for="option in list" :key="option.id" :label="option.id">
                                {{option.name}}
                            </Checkbox>
                        </CheckboxGroup>
                        <div class="ivu-form-item-notice-tip">复选框 必填 动态数据源</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p04}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p04">
                                <CheckboxGroup v-model="frm.p04">
                                    <Checkbox v-for="option in list" :key="option.id" :label="option.id">
                                        {{option.name}}
                                    </Checkbox>
                                </CheckboxGroup>
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
            list: [], // 动态数据源
            frm: {
                p01: '', // 单选测试
                p02: [], // 复选测试
                p03: [], // 复选测试
                p04: [] // 复选测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '单选框必选其一' }
                ],
                p02: [
                    { required: true, message: '复选框必选其一' }
                ],
                p03: [
                    { required: true, message: '复选框必选其一' },
                    { type: 'array', max: 2, message: '复选框选择最多两项', trigger: 'change' }
                ],
                p04: [
                    { required: true, message: '复选框必选其一' },
                    { type: 'array', max: 2, message: '复选框选择最多两项', trigger: 'change' }
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
