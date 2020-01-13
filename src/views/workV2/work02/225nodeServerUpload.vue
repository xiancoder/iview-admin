<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Nodejs] 服务器接收上传文件</div>
            <div class="blogContent" v-highlight>
                node + express 4.x ，中间件用的是 multer
                <p class="commend">cnpm install -save multer</p>
                <p class="commend">cnpm install -save path</p>
                <p>但实际上文件上传是已经成功了，因为上传成功后会保存在本地的一个文件夹里，里面是有我上传的文件的，而 express 我也用了 cors 解决跨域问题了，上传成功我也有返回 json 数据，但就是报错，求解</p>
                <script type="text/js">
                    const fs = require('fs'); // 文件模块，用于改文件名字
                    var iconv = require('iconv-lite'); // 写文件 转码
                    var path = require('path');
                    const multer = require('multer'); //解析post文件数据

                    const easyToday = () => {
                        const d = new Date()
                        const Y = d.getFullYear()
                        const M = d.getMonth() + 1
                        const D = d.getDate()
                        return Y + (M < 10 ? ('0' + M) : M) + (D < 10 ? ('0' + D) : D)
                    }
                    const tempDir = 'upload\\' + easyToday()
                    const objMulter = multer({dest: 'public\\' + tempDir}); // 添加配置文件到muler对象 上传的文件地址
                    // 文件获取的模式，为单一模式（当然还有别的模式，比如any,array,fields）
                    // app.use(objMulter.single('file'));
                    // app.use(objMulter.any());
                    const generateMixed = (n) => { // 随机字符
                        const chars = [
                            '0','1','2','3','4','5','6','7','8','9',
                            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                        ];
                        let res = '';
                        for(let i = 0; i < n; i ++) {
                            let id = Math.ceil(Math.random()*35);
                            res += chars[id];
                        }
                        return res;
                    };
                    const resultFormat = (code = 200, content = '', msg = 'null')=> {
                        let result = { code: code, data: content, msg: msg };
                        return result;
                    };
                    module.exports = function (app) {
                        // API::文件上传
                        app.post('/api/file/upload', objMulter.any(), (req, res) => {
                            // res.header('Access-Control-Allow-Origin', '*');
                            // res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
                            // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
                            // res.header('X-Powered-By', ' 3.2.1');
                            // var pathNew = req.file.path + pathLib.parse(req.file.originalname).ext
                            // 上传接口存在跨域的问题
                            const result = {}
                            let count = 0
                            const callback = () => {
                                count += 1;
                                if (count < req.files.length) return false;
                                res.end(JSON.stringify(resultFormat(200, {res: 1, msg: 'success', path: result})));
                            }
                            for(var i = 0, l = req.files.length; i < l; i++){
                                // console.log(req.files[i].fieldname)
                                // ::::::::::::::::
                                // fieldname: 'p03',
                                // originalname: '2f83ddb9-968b-4c9e-a188-e82eb58a5b9e.png',
                                // encoding: '7bit',
                                // mimetype: 'image/png',
                                // destination: 'public\upload\xxxx(日期)',
                                // filename: '8051eb334b0116295c6fc4b8764516a5',
                                // path: 'public\upload\xxxx(日期)\\8051eb334b0116295c6fc4b8764516a5',
                                // size: 17349
                                var pathNew = tempDir + '\\' + new Date().getTime() + '-' + generateMixed(4) + '.jpg';
                                fs.rename(req.files[i].path, 'public\\' + pathNew, function (error) {
                                    callback()
                                });
                                result[req.files[i].fieldname] = pathNew
                            }
                            return false;
                        });
                    };
                </script>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="文件上传" prop="p03">
                        <Upload :before-upload="handleUpload3" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.p03.name}}</span>
                    </FormItem>
                    <FormItem label="文件上传">
                        <Upload :before-upload="handleUpload4" action="" style="display: inline-block; margin-right: 20px;">
                             <Button icon="ios-cloud-upload-outline">添加附件</Button>
                        </Upload>
                        <span>{{frm.p04.name}}</span>
                    </FormItem>
                    <FormItem>
                        <img v-if="review.p03" :src="'http://localhost:4010/'+review.p03" alt="" />
                        <img v-if="review.p04" :src="'http://localhost:4010/'+review.p04" alt="" />
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                </Form>
                <p class="text-danger">js promise finally方法实现 promise.prototype.finally</p>
                <p class="text-danger">finally方法是ES2018的新特性 此特性目前没有全面铺开支持</p>
                <p class="text-danger">finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作，执行then()和catch()后，都会执行finally指定的回调函数。</p>
                <p>阮老师手动实现finally()</p>
                <p class="text-danger">执行成功或失败都能触发finally 但是如果内容异常就不会了</p>
                <script type="text/js">
                    Promise.prototype.finally = function (callback) {
                        let P = this.constructor;
                        return this.then(
                            value  => P.resolve(callback()).then(() => value),
                            reason => P.resolve(callback()).then(() => { throw reason })
                        );
                    };
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
import { extendF } from '@/utils/object'
import axios from 'axios' // http请求库

export default {
    data () {
        return {
            loading: false,
            review: {
                p03: '', // 图片回显
                p04: '' // 图片回显
            },
            frm: {
                p03: {}, // 文件上传
                p04: {} // 文件上传
            },
            frmValidate: {
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
        handleUpload3 (file) {
            if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
            this.frm.p03 = file
            this.$refs['from0982'].validateField('p03') // 需要手动触发一下本必填上传框的验证
            return false
        },
        handleUpload4 (file) {
            if (file.size > 2 * 1024 * 1024) { error('文件过大'); return false }
            this.frm.p04 = file
            return false
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.uploadAjax().then(path => {
                        extendF(this.review, path)
                    }).finally(() => {
                        this.loading = false
                    })
                }
            });
        },
        uploadAjax () {
            let fd = new FormData()
            fd.append('path', 'haha')
            fd.append('p03', this.frm.p03)
            fd.append('p04', this.frm.p04)
            return new Promise((resolve, reject) => {
                axios.request({
                    method: 'POST',
                    url: 'api/file/upload',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: fd,
                    timeout: 300000
                }).then(response => { // 请注意这个返回值是整个结果对象
                    const res = response.data
                    if (res && res.data && res.data.path) {
                        resolve(res.data.path)
                    } else {
                        error(res.res) // 报错并继续reject
                        reject()
                    }
                }).catch(e => {
                    error(e.message) // ajax异常后 报错并中止操作
                    reject()
                })
            })
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
