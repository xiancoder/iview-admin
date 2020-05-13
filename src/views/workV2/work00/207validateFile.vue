<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">关于Vue中的文件上传的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">图片上传 多选 必填 选中文件后需要手动触发一下本框的验证 </Divider>
                    <FormItem label="标题" prop="p01">
                        <Upload :before-upload="handleUpload1" multiple action="">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <div v-for="(item, index) in reviewList1" class="imgReviewBox" :key="index">
                            <img :src="item" style="max-height:100px;max-width:200px;">
                            <div @click="reviewList1.splice(index, 1),frm.p01.splice(index, 1)">+</div>
                        </div>
                        <div class="ivu-form-item-notice-tip">多选 必填 选中文件后需要手动触发一下本框的验证 </div>
                    </FormItem>
                    <FormItem>
                        <p>frm.p01 = [<span v-for="(item) in frm.p01">{ {{ item.name }} / {{ item.type }} }</span>]</p>
                        <p>我上传了一张bmp图片 type=image/bmp 而不是 application/x-bmp ??? </p>
                        <script type="text/html" v-pre>
                            <FormItem label="多附件框" prop="p01">
                                <Upload :before-upload="handleUpload1" multiple action="">
                                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                                </Upload>
                                <div v-for="(item, index) in reviewList1" :key="index" style="max-height:100px;max-width:200px;">
                                    <img :src="item"><a @click="reviewList1.splice(index, 1),frm.p01.splice(index, 1)">删除</a>
                                </div>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '不能为空' },
                            { validator: (rule, value, callback) => {
                                const filelist = this.frm.p01
                                if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                                callback()
                            } }
                        </script>
                        <script type="text/js">
                            handleUpload1 (file) {
                                if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
                                if (!/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.svg$|\.gif$|/.test(file.name)) { error('请选择图片文件'); return false }
                                if (window.FileReader) {
                                    const fr = new FileReader()
                                    fr.onloadend = (e) => {
                                        this.reviewList1.push(e.target.result)
                                        this.frm.p01.push(file)
                                    }
                                    fr.readAsDataURL(file)
                                }
                                this.$refs['from0982'].validateField('p01') // 需要手动触发一下本必填上传框的验证
                                return false
                            },
                        </script>
                    </FormItem>

                    <Divider orientation="left">图片上传 多选 必填 另一种表现形式 </Divider>
                    <FormItem label="标题" prop="p02">
                        <div class="xian-review-list" v-for="(item, index) in reviewList2" :key="index">
                            <img :src="item">
                            <div class="xian-review-list-cover">
                                <Icon type="ios-trash-outline" @click.native="reviewList2.splice(index, 1),frm.p02.splice(index, 1)"></Icon>
                            </div>
                        </div>
                        <Upload :before-upload="handleUpload2" multiple action="" type="drag" style="display: inline-block;width:58px;">
                             <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-camera" size="20"></Icon>
                            </div>
                        </Upload>
                        <div class="ivu-form-item-notice-tip">图片上传 多选 必填 另一种表现形式</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p02">
                                <div class="xian-review-list" v-for="(item, index) in reviewList2" :key="index">
                                    <img :src="item">
                                    <div class="xian-review-list-cover">
                                        <Icon type="ios-trash-outline" @click.native="reviewList2.splice(index, 1),frm.p02.splice(index, 1)"></Icon>
                                    </div>
                                </div>
                                <Upload :before-upload="handleUpload2" multiple action="" type="drag" style="display: inline-block;width:58px;">
                                     <div style="width: 58px;height:58px;line-height: 58px;">
                                        <Icon type="ios-camera" size="20"></Icon>
                                    </div>
                                </Upload>
                            </FormItem>
                        </script>
                    </FormItem>

                    <Divider orientation="left">文件上传 单选 必填 选中文件后需要手动触发一下本框的验证 </Divider>
                    <FormItem label="标题" prop="p03">
                        <Upload :before-upload="handleUpload3" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.p03.name}}</span>
                        <div class="ivu-form-item-notice-tip">文件上传 单选 必填 选中文件后需要手动触发一下本框的验证</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p03">
                                <Upload :before-upload="handleUpload3" action="" style="display: inline-block; margin-right: 20px;">
                                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                                </Upload>
                                <span>{{frm.p03.name}}</span>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { validator: (rule, value, callback) => {
                                const file = this.frm.p03
                                if (!file.name) { return callback(new Error('请上传文件!')) }
                                if (!/\.xls$|\.xlsx$|/.test(file.name)) { return callback(new Error('请上传Excel!')) }
                                callback()
                            } }
                        </script>
                        <script type="text/js">
                            handleUpload2 (file) {
                                if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
                                this.frm.p03 = file
                                this.$refs['from0982'].validateField('p03') // 需要手动触发一下本必填上传框的验证
                                return false
                            },
                        </script>
                    </FormItem>

                    <Divider orientation="left">上传文件的类型集锦</Divider>
                    <FormItem style="margin-top: 50px">
                        <table class="api" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                                <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td class="separateColor">.*（ 二进制流，不知道下载文件类型）</td> <td>application/octet-stream</td>
                                <td class="separateColor">.tif</td> <td>image/tiff</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.ai</td> <td>application/postscript</td>
                                <td class="separateColor">.asp</td> <td>text/asp</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.avi</td> <td>video/avi</td>
                                <td class="separateColor">.biz</td> <td>text/xml</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.bmp</td> <td>application/x-bmp</td>
                                <td class="separateColor">.class</td> <td>java/*</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.css</td> <td>text/css</td>
                                <td class="separateColor">.dll</td> <td>application/x-msdownload</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.doc</td> <td>application/msword</td>
                                <td class="separateColor">.exe</td> <td>application/x-msdownload</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.gif</td> <td>image/gif</td>
                                <td class="separateColor">.htm</td> <td>text/html</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.html</td> <td>text/html</td>
                                <td class="separateColor">.ico</td> <td>image/x-icon</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.ico</td> <td>application/x-ico</td>
                                <td class="separateColor">.ins</td> <td>application/x-internet-signup</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.java</td> <td>java/*</td>
                                <td class="separateColor">.jpeg</td> <td>image/jpeg</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.jpg</td> <td>image/jpeg</td>
                                <td class="separateColor">.jpg</td> <td>application/x-jpg</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.js</td> <td>application/x-javascript</td>
                                <td class="separateColor">.jsp</td> <td>text/html</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.math</td> <td>text/xml</td>
                                <td class="separateColor">.mhtml</td> <td>message/rfc822</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.mp3</td> <td>audio/mp3</td>
                                <td class="separateColor">.mp4</td> <td>video/mpeg4</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.pdf</td> <td>application/pdf</td>
                                <td class="separateColor">.png</td> <td>image/png</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.ppt</td> <td>application/vnd.ms-powerpoint</td>
                                <td class="separateColor">.ppt</td> <td>application/x-ppt</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.rm</td> <td>application/vnd.rn-realmedia</td>
                                <td class="separateColor">.rmvb</td> <td>application/vnd.rn-realmedia-vbr</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.spl</td> <td>application/futuresplash</td>
                                <td class="separateColor">.svg</td> <td>text/xml</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.swf</td> <td>application/x-shockwave-flash</td>
                                <td class="separateColor">.tif</td> <td>image/tiff</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.tif</td> <td>application/x-tif</td>
                                <td class="separateColor">.tiff</td> <td>image/tiff</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.torrent</td> <td>application/x-bittorrent</td>
                                <td class="separateColor">.txt</td> <td>text/plain</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.wav</td> <td>audio/wav</td>
                                <td class="separateColor">.wmv</td> <td>video/x-ms-wmv</td>
                            </tr>
                            <tr>
                                <td class="separateColor">.xml</td> <td>text/xml</td>
                            </tr>
                            </tbody>
                        </table>
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
                p01: [], // 图片文件上传
                p02: [], // 图片文件上传
                p03: {} // 文件上传
            },
            reviewList1: [], // 图片文件预览列表
            reviewList2: [], // 图片文件预览列表
            frmValidate: {
                p01: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const filelist = this.frm.p01
                        if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ],
                p02: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const filelist = this.frm.p02
                        if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
                        callback()
                    } }
                ],
                p03: [
                    { required: true, message: '不能为空' },
                    { validator: (rule, value, callback) => {
                        const file = this.frm.p03
                        if (!file.name) { return callback(new Error('请上传文件!')) }
                        if (!/\.xls$|\.xlsx$|/.test(file.name)) { return callback(new Error('请上传Excel!')) }
                        callback()
                    } }
                ]
            }
        }
    },
    methods: {
        handleUpload1 (file) {
            if (file.size > 5 * 1024 * 1024) { error('文件过大'); return false }
            if (!/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.svg$|\.gif$|/.test(file.name)) { error('请选择图片文件'); return false }
            if (window.FileReader) {
                const fr = new FileReader()
                fr.onloadend = (e) => {
                    this.reviewList1.push(e.target.result)
                    this.frm.p01.push(file)
                    this.$refs['from0982'].validateField('p01') // 需要手动触发一下本必填上传框的验证
                }
                fr.readAsDataURL(file)
            }
            return false
        },
        handleUpload2 (file) {
            if (file.size > 5 * 1024 * 1024) { error('文件过大'); return false }
            if (!/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.svg$|\.gif$|/.test(file.name)) { error('请选择图片文件'); return false }
            if (!/image/.test(file.type)) { error('请选择图片文件'); return false }
            if (window.FileReader) {
                const fr = new FileReader()
                fr.onloadend = (e) => {
                    this.reviewList2.push(e.target.result)
                    this.frm.p02.push(file)
                    this.$refs['from0982'].validateField('p02') // 需要手动触发一下本必填上传框的验证
                }
                fr.readAsDataURL(file)
            }
            return false
        },
        handleUpload3 (file) {
            if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
            this.frm.p03 = file
            this.$refs['from0982'].validateField('p03') // 需要手动触发一下本必填上传框的验证
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
