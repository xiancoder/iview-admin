<template>
    <div class="xianFrom">
        <Form ref="form3333" :model="frm" :rules="frmRule"
            :label-width="150" style="width: 90%;margin: 0 auto;padding: 0;">
            <FormItem label="">
                <h3>上传预估消耗文件</h3>
            </FormItem>
            <FormItem label="公司名称" prop="companyId">
                <Select v-model="frm.companyId" clearable placeholder="请选择相关公司" style="width: 350px">
                    <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
            </FormItem>
            <FormItem label="预估消耗" prop="file">
                <Upload :before-upload="handleUpload" action="" style="display: inline-block; margin-right: 20px;">
                     <Button icon="ios-cloud-upload-outline">选择文件</Button>
                </Upload>
                <span>{{frm.file.name}}</span>
            </FormItem>
            <FormItem>
                <span><a :href="'/download/pre_cost.xlsx'" download="预估消耗模板.xlsx">下载预估消耗Excel模板文件</a></span>
                <div class="ivu-form-item-notice-tip text-danger">{{serverError}}</div>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="default" @click="cancel">取消</Button>
                <Divider type="vertical" />
                <Button type="primary" @click="ok" :loading="loading">上传</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { debounce } from '@/utils/function'

export default {
    data () {
        return {
            loading: false,
            serverError: '',
            frm: {
                companyId: '',
                file: {}
            },
            frmRule: {
                companyId: [
                    { required: true, message: '输入框不能为空' }
                ],
                file: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        if (!this.frm.file.name) { return callback(new Error('请上传文件!')) }
                        if (!/\.csv$|\.xlsx$|\.xls$/.test(this.frm.file.name)) { return callback(new Error('请上传Excel!')) }
                        if (this.frm.file.size > 4 * 1024 * 1024) { return callback(new Error('文件过大!')) }
                        callback()
                    } }
                ]
            },
            dataSet: {
                companyList: []
            }
        }
    },
    props: {
        flag: { type: Boolean, default: false }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n !== true) {
                this.$refs['form3333'].resetFields()
                this.loading = false
                this.serverError = ''
            }
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.system.companyList().then(list => { this.dataSet.companyList = list })
        },
        handleUpload (file) {
            this.frm.file = file
            this.$refs['form3333'].validateField('file') // 需要手动触发一下本必填上传框的验证
            return false
        },
        ok: debounce(function () {
            this.$refs['form3333'].validate(valid => {
                if (!valid) {return false}
                this.loading = true
                this.$api.cost.realPreImport(this.frm).then((res) => { // ajax
                    this.$emit('on-submit', 1)
                }).catch((msg) => {
                    this.serverError = msg
                }).finally(() => {
                    this.loading = false
                })
            })
        }),
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
        this.getDataSet()
    }
}
</script>
