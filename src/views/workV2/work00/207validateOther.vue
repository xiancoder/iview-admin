<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的其他鬼东西的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">文字或者其他的结构</Divider>
                    <FormItem label="标题" prop="p01">
                        <p>{{ frm.t01 }} <Button type="default" @click="dosomething">frm.p01 = 123</Button> </p>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p01}}</p>
                        <script type="text/html" v-pre>
                            <p>{{ frm.t01 }} <Button type="default" @click="dosomething">frm.p01 = 123</Button> </p>
                        </script>
                        <script type="text/js">
                            dosomething () {
                                this.frm.p01 = 123
                                this.$refs['from0982'].validateField('p01')
                            }
                        </script>
                    </FormItem>

                    <Divider orientation="left">打分器 必填</Divider>
                    <FormItem label="标题" prop="p02">
                        <Rate show-text v-model="frm.p02" />
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p02}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <Rate show-text v-model="frm.p02" />
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '必须打分' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">滑轨 0-100</Divider>
                    <FormItem label="标题" prop="p03">
                        <Slider v-model="frm.p03" :step="1" show-stops style="width: 450px"/></Slider>
                        <div class="ivu-form-item-notice-tip">额....</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p03}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p03">
                                <Slider v-model="frm.p03" :step="1" show-stops style="width: 450px"/></Slider>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">滑轨范围 0-100 每格10分</Divider>
                    <FormItem label="标题" prop="p04">
                        <Slider v-model="frm.p04" :step="10" show-stops range style="width: 450px"/></Slider>
                        <div class="ivu-form-item-notice-tip">额....</div>
                    </FormItem>
                    <FormItem>
                        <p>结果: {{frm.p04}}</p>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p04">
                                <Slider v-model="frm.p04" :step="10" show-stops range style="width: 450px"/></Slider>
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
                t01: '啦啦啦,t01只是普通文本 并不是控件 但是这一行关联了p01 必填', // 正常文本
                p01: '', // 无控件测试
                p03: 0, // slider测试
                p04: [0, 100], // slider测试
                p02: 0 // 打分器测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '非空' }
                ],
                p02: [
                    { required: true, message: '必须打分' }
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
        dosomething () {
            this.frm.p01 = 123
            this.$refs['from0982'].validateField('p01')
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
