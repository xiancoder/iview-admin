<template>
    <div class="xianFrom">
        <Form ref="form3333" :model="frm" :rules="frmRule"
            :label-width="150" style="width: 90%;margin: 0 auto;padding: 0;">
            <FormItem label="">
                <h3>批量导入款项</h3>
            </FormItem>
            <FormItem label="公司名称" prop="companyId">
                <Select v-model="frm.companyId" filterable clearable placeholder="请选择相关公司" style="width: 350px">
                    <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
            </FormItem>
            <FormItem label="预估消耗" prop="file">
                <Upload :before-upload="handleUpload" action="" style="display: inline-block; margin-right: 20px;">
                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                </Upload>
                <span>{{frm.file.name}}</span>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="default" @click="cancel">取消</Button>
                <Divider type="vertical" />
                <Button type="primary" @click="ok" :loading="loading">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import Ccode from '@C/ccode'
import { error } from '@/tools' // 自定义常用工具

export default {
    components: { Ccode },
    data () {
        return {
            loading: false,
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
                        callback()
                    } }
                ]
            },
            dataSet: {
                companyList: []
            },
            ccore: '0000'
        }
    },
    props: {
        flag: { type: Boolean, default: false }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n !== true) {
                this.$refs['form3333'].resetFields()
            }
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.dspsystem.companyList().then(list => { this.dataSet.companyList = list })
        },
        handleUpload (file) {
            if (file.size > 20 * 1024 * 1024) {
                error('文件过大')
            } else {
                this.frm.file = file
            }
            return false
        },
        ok () {
            this.$refs['form3333'].validate(valid => {
                if (valid) {
                    this.$api.dspfinance.rechargelistImport(this.frm).then((res) => { // ajax
                        if (res) {
                            this.$emit('on-submit', 1)
                        }
                    })
                }
            });
        },
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
        this.getDataSet()
    }
}
</script>
