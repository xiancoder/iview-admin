<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的文件上传的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">图片上传 多选 必填 选中文件后需要手动触发一下本框的验证 </Divider>
                    <FormItem label="标题" prop="file1">
                        <Upload :before-upload="handleUpload1" multiple action="">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <div v-for="(item, index) in reviewList1" :key="index" style="max-height:100px;max-width:200px;">
                            <img :src="item"><a @click="reviewList1.splice(index, 1),frm.file1.splice(index, 1)">删除</a>
                        </div>
                        <div class="ivu-form-item-notice-tip">多选 必填 选中文件后需要手动触发一下本框的验证 </div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="多附件框" prop="file1">
                                <Upload :before-upload="handleUpload1" multiple action="">
                                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                                </Upload>
                                <div v-for="(item, index) in reviewList1" :key="index" style="max-height:100px;max-width:200px;">
                                    <img :src="item"><a @click="reviewList1.splice(index, 1),frm.file1.splice(index, 1)">删除</a>
                                </div>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '不能为空' },
                            { validator: (rule, value, callback) => {
                                const filelist = this.frm.file1
                                if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                                callback()
                            } }
                        </script>
                        <script type="text/js">
                            handleUpload1 (file) {
                                if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
                                if (/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.svg$|\.gif$|/.test(file.name)) { error('请选择图片文件'); return false }
                                if (window.FileReader) {
                                    const fr = new FileReader()
                                    fr.onloadend = (e) => {
                                        this.reviewList1.push(e.target.result)
                                        this.frm.file1.push(file)
                                    }
                                    fr.readAsDataURL(file)
                                }
                                this.$refs['from0982'].validateField('file1') // 需要手动触发一下本必填上传框的验证
                                return false
                            },
                        </script>
                    </FormItem>

                    <Divider orientation="left">图片上传 多选 必填 另一种表现形式 </Divider>
                    <FormItem label="标题" prop="file1">
                        <div class="xian-review-list" v-for="(item, index) in reviewList1" :key="index">
                            <img :src="item">
                            <div class="xian-review-list-cover">
                                <Icon type="ios-trash-outline" @click.native="reviewList1.splice(index, 1),frm.file1.splice(index, 1)"></Icon>
                            </div>
                        </div>
                        <Upload :before-upload="handleUpload1" multiple action="" type="drag" style="display: inline-block;width:58px;">
                             <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-camera" size="20"></Icon>
                            </div>
                        </Upload>
                        <div class="ivu-form-item-notice-tip">图片上传 多选 必填 另一种表现形式</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="file1">
                                <div class="xian-review-list" v-for="(item, index) in reviewList1" :key="index">
                                    <img :src="item">
                                    <div class="xian-review-list-cover">
                                        <Icon type="ios-trash-outline" @click.native="reviewList1.splice(index, 1),frm.file1.splice(index, 1)"></Icon>
                                    </div>
                                </div>
                                <Upload :before-upload="handleUpload1" multiple action="" type="drag" style="display: inline-block;width:58px;">
                                     <div style="width: 58px;height:58px;line-height: 58px;">
                                        <Icon type="ios-camera" size="20"></Icon>
                                    </div>
                                </Upload>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">文件上传 单选 必填 选中文件后需要手动触发一下本框的验证 </Divider>
                    <FormItem label="标题" prop="file2">
                        <Upload :before-upload="handleUpload2" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.file2.name}}</span>
                        <div class="ivu-form-item-notice-tip">文件上传 单选 必填 选中文件后需要手动触发一下本框的验证</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="file2">
                                <Upload :before-upload="handleUpload2" action="" style="display: inline-block; margin-right: 20px;">
                                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                                </Upload>
                                <span>{{frm.file2.name}}</span>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { validator: (rule, value, callback) => {
                                const file = this.frm.file2
                                if (!file.name) { return callback(new Error('请上传文件!')) }
                                if (/\.xls$|\.xlsx$|/.test(file.name)) { return callback(new Error('请上传Excel!')) }
                                callback()
                            } }
                        </script>
                        <script type="text/js">
                            handleUpload2 (file) {
                                if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
                                this.frm.file2 = file
                                this.$refs['from0982'].validateField('file2') // 需要手动触发一下本必填上传框的验证
                                return false
                            },
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
import { error } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            loading: false,
            frm: {
                file1: [], // 图片文件上传
                file2: {} // 文件上传
            },
            reviewList1: [], // 图片文件预览列表
            frmValidate: {
                file1: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const filelist = this.frm.file1
                        if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ],
                file2: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const file = this.frm.file2
                        if (!file.name) { return callback(new Error('请上传文件!')) }
                        if (/\.xls$|\.xlsx$|/.test(file.name)) { return callback(new Error('请上传Excel!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
        handleUpload1 (file) {
            if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
            if (/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.svg$|\.gif$|/.test(file.name)) { error('请选择图片文件'); return false }
            if (window.FileReader) {
                const fr = new FileReader()
                fr.onloadend = (e) => {
                    this.reviewList1.push(e.target.result)
                    this.frm.file1.push(file)
                }
                fr.readAsDataURL(file)
            }
            this.$refs['from0982'].validateField('file1') // 需要手动触发一下本必填上传框的验证
            return false
        },
        handleUpload2 (file) {
            if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
            this.frm.file2 = file
            this.$refs['from0982'].validateField('file2') // 需要手动触发一下本必填上传框的验证
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
