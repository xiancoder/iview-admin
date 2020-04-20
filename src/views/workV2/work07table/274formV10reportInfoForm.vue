<template>
    <div class="formLayout" v-highlight>
        <div class="formHeader">
            <h1>表单名称</h1>
            <Divider/>
        </div>
        <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
            <FormItem label="回复内容" prop="content">
                <Input v-model="frm.content" type="textarea" style="width: 450px"
                    :autosize="{minRows: 5,maxRows: 8}" placeholder="请输入回复内容" />
            </FormItem>
            <FormItem label="附件" prop="rec">
                <Upload :before-upload="handleUpload" multiple action="">
                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                </Upload>
                <div v-for="(item, index) in dateSet.reviewList" :key="index">
                    <img :src="item"><a @click="dateSet.reviewList.splice(index, 1),frm.rec.splice(index, 1)">删除</a>
                </div>
            </FormItem>
            <FormItem label="仅回复名单" prop="receiver">
                <Select v-model="frm.receiver" filterable clearable placeholder="请搜索/选择XXX" style="width: 450px">
                    <Option value="" label="全部"></Option>
                    <Option v-for="option in dateSet.receiverList" :value="option.id" :key="option.id" :label="option.name">
                    </Option>
                </Select>
            </FormItem>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading === '1'" style="margin: 0 15px" @click="handleSubmit()">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { error } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            frm: {
                content: null, // 回复内容
                rec: [], // 附件
                receiver: [] // 仅回复名单
            },
            frmValidate: {
                content: [
                    { required: true, message: '请填写回复内容' }
                ],
                rec: [
                    { validator: (rule, value, callback) => {
                        const filelist = this.frm.rec
                        if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ]
            },
            loading: false,
            dateSet: { // 数据源
                reviewList: [],
                receiverList: []
            }
        }
    },
    methods: {
        init () {
            setTimeout(() => {
                this.dateSet.receiverList = [{id: 0, name: '一般'}, {id: 1, name: '重要'}, {id: 2, name: '紧急'}]
            }, 2e3)
        },
        handleUpload (file) {
            if (file.size > 2 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.dateSet.reviewList.push(e.target.result)
                        this.frm.file1.push(file)
                    }
                    fr.readAsDataURL(file)
                }
                this.$refs['from0982'].validateField('file1') // 需要手动触发一下本必填上传框的验证
            }
            return false
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    console.log(123)
                }
            });
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({name: 'task_mine'});
                },
                onCancel: () => {}
            });
        }
    },
    mounted () {
        this.init()
    }
}
</script>
