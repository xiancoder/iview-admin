<template>
    <div>
        <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="150">
            <h2><span>发布任务</span></h2>
            <div>
                <FormItem label="任务名称" prop="taskName">
                    <Input type="text" v-model="formItem.taskName" placeholder="请输入任务名称" style="min-width:870px;width: 90%"/>
                </FormItem>
                <FormItem label="优先级" prop="taskPriority">
                    <Select v-model="formItem.taskPriority" style="width: 250px">
                        <Option :value=0>一般</Option>
                        <Option :value=1>重要</Option>
                        <Option :value=2>紧急</Option>
                    </Select>
                </FormItem>
                <FormItem label="完成日期" prop="completeTime" v-if="formItem.taskPriority === 2">
                    <DatePicker type="date" v-model="formItem.completeTime" placeholder="选择日期" @on-change="formItem.completeTime=$event" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="任务内容" prop="taskContent" :show-message="formItem.taskContent == ''">
                    <vue-html5-editor :content="formItem.taskContent" class="task_content" @change="contentChange" :height="300" style="min-width:870px;width: 90%"></vue-html5-editor>
                </FormItem>
                <FormItem label="负责人" prop="personLiable">
                    <Select v-model="formItem.personLiable" filterable placeholder="请搜索 / 选择负责人" style="width: 250px">
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
                <FormItem label="抄送人" prop="correlation" class="responseSelect">
                    <Select v-model="correlation" multiple filterable placeholder="请搜索 / 选择抄送人" style="max-width: 90%;min-width: 250px;">
                        <Option v-for="option in list" :value="option.userId" :key="option.userId" :label="option.userName" ></Option>
                    </Select>
                </FormItem>
                <FormItem label="附件" prop="taskEnclosure">
                    <Upload :before-upload="handleUpload" multiple action="">
                        <Button type="primary">添加附件</Button>
                    </Upload>
                    <div v-for="(file, index) in fileList" :key="index">{{file.name}}&nbsp;&nbsp;&nbsp;<a @click="removeFile(index)">删除</a></div>
                </FormItem>
            </div>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading === '1'" style="margin: 0 15px" @click="handleSubmit('formItem')">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import axios from 'axios' // http请求库
import Vue from 'vue' // 核心
import VueHtml5Editor from 'vue-html5-editor'
Vue.use(VueHtml5Editor, {
    // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
    // global component name
    name: 'vue-html5-editor',
    // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
    // if set true,will append module name to toolbar after icon
    showModuleName: false,
    // 自定义各个图标的class，默认使用的是font-awesome提供的图标
    // custom icon class of built-in modules,default using font-awesome
    icons: {
        text: 'fa fa-pencil',
        color: 'fa fa-paint-brush',
        font: 'fa fa-font',
        align: 'fa fa-align-justify',
        list: 'fa fa-list',
        link: 'fa fa-chain',
        unlink: 'fa fa-chain-broken',
        tabulation: 'fa fa-table',
        image: 'fa fa-file-image-o',
        hr: 'fa fa-minus',
        eraser: 'fa fa-eraser'
    },
    // 配置图片模块
    // config image module
    image: {
        // 文件最大体积，单位字节 max file size
        sizeLimit: 10000 * 1024,
        // 上传参数,默认把图片转为base64而不上传
        // upload config,default null and convert image to base64
        upload: {
            url: null,
            headers: {},
            params: {},
            fieldName: {}
        },
        // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
        // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
        // set null to disable compression
        compress: {
            width: 1600,
            height: 1600,
            quality: 80
        },
        // 响应数据处理,最终返回图片链接
        // handle response data，return image url
        uploadHandler (responseText) {
            // default accept json data like {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
            var json = JSON.parse(responseText)
            if (!json.ok) {
                alert(json.msg)
            } else {
                return json.data
            }
        }
    },
    // 语言，内建的有英文（en-us）和中文（zh-cn）
    // default en-us, en-us and zh-cn are built-in
    language: 'zh-cn',
    // 隐藏不想要显示出来的模块
    // the modules you don't want
    hiddenModules: [],
    // 自定义要显示的模块，并控制顺序
    // keep only the modules you want and customize the order.
    // can be used with hiddenModules together
    visibleModules: [
        'text',
        'color',
        'font',
        'align',
        'list',
        'link',
        'unlink',
        'tabulation',
        'image',
        'hr',
        'eraser'
    ],
    // 扩展模块，具体可以参考examples或查看源码
    // extended modules
    modules: {
        // omit,reference to source code of build-in modules
    }
})
export default {
    name: 'task_release',
    data () {
        return {
            formItem: {
                id: '',
                taskName: '',
                taskPriority: 0,
                completeTime: '',
                taskContent: '',
                personLiable: ''
            },
            content: '',
            correlation: [],
            fileList: [],
            list: [],
            ruleValidate: {
                taskName: [
                    { required: true, message: '任务名称不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                taskPriority: [
                    { required: true, type: 'number', message: '请选择优先级' }
                ],
                completeTime: [
                    { required: true, message: '请选择完成日期' }
                ],
                taskContent: [
                    { required: true, message: '任务内容不能为空', trigger: 'change' }
                ],
                personLiable: [
                    { required: true, message: '请添加负责人' }
                ]
            },
            loading: ''
        }
    },
    methods: {
        init () {
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.list = res.data.data.list
            })
        },
        handleUpload (file) {
            if (file.size > 52420000) {
                this.$Message.info({
                    content: '文件过大'
                })
            } else {
                this.fileList.push(file)
            }
            return false
        },
        removeFile (index) {
            this.fileList.splice(index, 1)
        },
        postForm () {
            if (this.formItem.taskPriority !== 2) {
                this.formItem.completeTime = ''
            }
            let pa = new FormData()
            pa.append('id', this.formItem.id === '' ? null : this.formItem.id)
            pa.append('taskName', this.formItem.taskName)
            pa.append('taskPriority', this.formItem.taskPriority)
            pa.append('completeTime', this.formItem.completeTime === '' ? null : this.formItem.completeTime)
            pa.append('taskContent', this.formItem.taskContent)
            pa.append('personLiable', this.formItem.personLiable)
            pa.append('correlation', this.correlation.length === 0 ? null : this.correlation)
            for (let file in this.fileList) {
                pa.append('file', this.fileList[file])
            }
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                timeout: 300000
            }
            axios.post('api/task/found', pa, config
            ).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.push({name: 'task_mine'})
                } else {
                    this.$Message.info({
                        content: res.data.data || '操作失败'
                    })
                }
            })
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.postForm()
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({name: 'task_mine'})
                },
                onCancel: () => {}
            })
        },
        contentChange (value) {
            this.formItem.taskContent = value
        }
    },
    mounted () {
        window.addEventListener('setItem', () => {
            this.loading = sessionStorage.getItem('watchStorage')
        })
        this.init()
    }
}
</script>
<style>
    .toolbar{
        z-index: 1!important;
    }
</style>
<style scoped>
    h2{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
        margin-bottom: 30px;
    }
    h2 span{
        display: inline-block;
        padding: 0 32px;
        border-radius: 4px;
        font-weight:lighter;
        background-color: #495060;
        color: #ffffff;
        font-size: 14px;
        height: 31px;
        line-height: 31px;
    }
    .info_area{
        width: 400px;
        font-size: 14px;
    }
</style>
