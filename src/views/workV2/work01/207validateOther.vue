<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的其他鬼东西的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">文字或者其他的结构</Divider>
                    <FormItem label="正常文本" prop="text1">
                        <p>{{ frm.text1 }}</p>
                    </FormItem>
                    <Divider orientation="left">滑轨</Divider>
                    <FormItem label="Slider" prop="slider1">
                        <Slider v-model="frm.slider1" :step="10" show-stops style="width: 450px"/></Slider>
                        <div class="ivu-form-item-notice-tip">额....</div>
                    </FormItem>
                    <FormItem label="Slider" prop="slider2">
                        <Slider v-model="frm.slider2" :step="10" show-stops range style="width: 450px"/></Slider>
                        <div class="ivu-form-item-notice-tip">额....</div>
                    </FormItem>
                    <Divider orientation="left">打分器</Divider>
                    <FormItem label="Slider" prop="rate1">
                        <Rate show-text v-model="frm.rate1" />
                        <div class="ivu-form-item-notice-tip">额....</div>
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
                text1: '啦啦啦啦啦', // 正常文本
                slider1: 0, // slider测试
                slider2: [0, 100], // slider测试
                rate1: 0 // 打分器测试
            },
            frmValidate: {
                rate1: [
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
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
