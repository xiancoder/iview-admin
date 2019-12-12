<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的文件上传的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">附件上传</Divider>
                    <FormItem label="多附件框" prop="file1">
                        <Upload :before-upload="handleUpload" multiple action="">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <div v-for="(item, index) in reviewList" :key="index">
                            <img :src="item"><a @click="reviewList.splice(index, 1),frm.file1.splice(index, 1)">删除</a>
                        </div>
                        <div class="ivu-form-item-notice-tip">必填【不大完美】【需要辅助方法】【选中文件后需要手动触发一下本框的验证】</div>
                    </FormItem>
                    <FormItem label="多附件框" prop="file2">
                        <div class="xian-review-list" v-for="(item, index) in reviewList" :key="index">
                            <img :src="item">
                            <div class="xian-review-list-cover">
                                <Icon type="ios-trash-outline" @click.native="reviewList.splice(index, 1),frm.file1.splice(index, 1)"></Icon>
                            </div>
                        </div>
                        <Upload :before-upload="handleUpload2" multiple action="" type="drag" style="display: inline-block;width:58px;">
                             <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-camera" size="20"></Icon>
                            </div>
                        </Upload>
                        <div class="ivu-form-item-notice-tip">必填【不大完美】【需要辅助方法】</div>
                    </FormItem>
                    <FormItem label="单附件框" prop="file3">
                        <Upload :before-upload="handleUpload3" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.file3.name}}</span>
                        <div class="ivu-form-item-notice-tip">必填【不大完美】【需要辅助方法】【选中文件后需要手动触发一下本框的验证】</div>
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
import { error } from '@/tools' // 自定义常用工具

export default {
    data () {
        const validateFileList = (rule, value, callback) => {
            const filelist = this.frm.file1
            if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
            callback()
        }
        return {
            loading: false,
            frm: {
                file1: [], // 文件上传
                file2: [], // 文件上传
                file3: {} // 文件上传
            },
            frmValidate: {
                file1: [
                    { validator: validateFileList }
                ],
                file2: [
                    { validator: (rule, value, callback) => {
                        const filelist = this.frm.file2
                        if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ],
                file3: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const file = this.frm.file3
                        if (!file.name) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
        handleUpload (file) {
            if (file.size > 2 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.reviewList.push(e.target.result)
                        this.frm.file1.push(file)
                    }
                    fr.readAsDataURL(file)
                }
                this.$refs['from0982'].validateField('file1') // 需要手动触发一下本必填上传框的验证
            }
            return false
        },
        handleUpload2 (file) {
            if (file.size > 2 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.reviewList.push(e.target.result)
                        this.frm.file2.push(file)
                    }
                    fr.readAsDataURL(file)
                }
                this.$refs['from0982'].validateField('file2') // 需要手动触发一下本必填上传框的验证
            }
            return false
        },
        handleUpload3 (file) {
            if (file.size > 20 * 1024 * 1024) {
                error('文件过大')
            } else {
                this.frm.file3 = file
                this.$refs['from0982'].validateField('file3') // 需要手动触发一下本必填上传框的验证
            }
            return false
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
    }
}
</script>
