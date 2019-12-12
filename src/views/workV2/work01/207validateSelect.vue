<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的下拉框的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">下拉框校验</Divider>
                    <FormItem label="下拉框" prop="select1">
                        <Select v-model="frm.select1" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option value="" label="全部"></Option>
                            <Option :value="0">一般</Option> <Option :value="1">重要</Option> <Option :value="2">紧急</Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">【静态数据源也不建议使用】</div>
                    </FormItem>
                    <FormItem label="下拉框" prop="select12">
                        <Select v-model="frm.select12" filterable clearable placeholder="请搜索/选择XXX" style="width: 300px">
                            <Option value="" label="全部"></Option>
                            <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">必填+远程请求  【完美】【所有数据源都搞成异步:远程或者api中】</div>
                    </FormItem>
                    <FormItem label="下拉框" prop="select13">
                        <Select v-model="frm.select13" filterable clearable placeholder="请搜索/选择XXX" style="width: 300px">
                            <Option value="" label="全部"></Option>
                            <Option :value="0">0000</Option>
                            <Option :value="1">1111</Option>
                            <Option :value="2">2222</Option>
                        </Select>
                        <div class="ivu-form-item-notice-tip">可搜索</div>
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
            setTimeout(() => { this.list = [{id: 0, name: '一般'}, {id: 1, name: '重要'}, {id: 2, name: '紧急'}] }, 2e3)
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
