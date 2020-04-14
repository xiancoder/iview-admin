<template>
    <div class="formLayout">
        <div class="formHeader">
            <h1>表单名称</h1>
            <Divider/>
        </div>
        <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
            <FormItem label="正常文本" prop="text1">
                <p>{{ frm.text1 }}</p>
            </FormItem>
            <Divider orientation="left">输入框校验</Divider>
            <FormItem label="输入框" prop="input1">
                <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">【完美】</div>
            </FormItem>
            <FormItem label="输入框" prop="input12">
                <Input type="text" v-model="frm.input12" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+最长50 【如果能够设置maxlength为51就更完美了】</div>
            </FormItem>
            <FormItem label="输入框" prop="input123">
                <Input type="text" v-model="frm.input123" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+最长50+邮箱校验 【完美】</div>
            </FormItem>
            <FormItem label="验证码" prop="input123">
                <Input type="text" v-model="frm.input123" placeholder="请输入XXXX" style="width: 330px"/>
                <span @click="flashccore()" style="margin-left: 20px;"> <ccode :content="ccore"></ccode> </span>
            </FormItem>
            <FormItem label="输入框" prop="input14">
                <Input type="text" v-model="frm.input14" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+电话格式</div>
            </FormItem>
            <FormItem label="输入框" prop="input15">
                <Input type="text" v-model="frm.input15" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+价格(整数6位，小数点2位)</div>
            </FormItem>
            <FormItem label="文本域" prop="textarea1">
                <Input v-model="frm.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入XXXX" />
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">数字框校验</Divider>
            <FormItem label="数字框" prop="num1">
                <InputNumber :max="100" :min="1" v-model="frm.num1" placeholder="请输入XXXX" style="width: 450px" :precision="0"></InputNumber>
                <div class="ivu-form-item-notice-tip">必填+1-100+只能输入数字整数</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
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
            <FormItem label="下拉框">
                <div>当用户配置项和请求来的数据源不匹配时候怎么弄</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">日期校验</Divider>
            <FormItem label="日期框" prop="date11">
                <DatePicker type="date" :value="frm.date11" placeholder="选择日期" format="yyyy-MM-dd"
                    @on-change="(date)=>{frm.date11=date}" style="width: 300px">
                </DatePicker>
                <div class="ivu-form-item-notice-tip">【不大完美】【】</div>
            </FormItem>
            <FormItem label="日期框(年月)" prop="date12">
                <DatePicker type="month" :value="frm.date12" placeholder="选择日期" format="yyyy-MM"
                    @on-change="(date)=>{frm.date12=date}" style="width: 300px">
                </DatePicker>
                <div class="ivu-form-item-notice-tip">【不大完美】【写两遍字段】</div>
            </FormItem>
            <FormItem label="日期框(禁用)" prop="date13">
                <DatePicker type="date" :value="frm.date13" placeholder="选择日期" format="yyyy-MM-dd"
                    :options="{ disabledDate:(date)=>{return date&&date.valueOf()<Date.now()-86400000}}"
                    @on-change="(date)=>{frm.date13=date}" style="width: 300px">
                </DatePicker>
                <div class="ivu-form-item-notice-tip">【不大完美】【】</div>
            </FormItem>
            <FormItem label="日期范围" prop="date2">
                <DatePicker :value="frm.date2" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                    @on-change="frm.date2=$event" @on-clear="frm.date2=[]" split-panels>
                </DatePicker>
                <div class="ivu-form-item-notice-tip">【不完美】【写三遍字段】【提交时候得拆分字段】</div>
            </FormItem>
            <FormItem label="日期范围 (自定义时间段)" prop="date2">
                <DatePicker :value="frm.date2" type="daterange" placeholder="选择开始日期结束日期" style="width: 300px"
                    @on-change="frm.date2=$event" @on-clear="frm.date2=[]" split-panels :options="options2" >
                </DatePicker>
                <div class="ivu-form-item-notice-tip">【不完美】【写三遍字段】【提交时候得拆分字段】</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
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
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">打分器</Divider>
            <FormItem label="Slider" prop="rate1">
                <Rate show-text v-model="frm.rate1" />
                <div class="ivu-form-item-notice-tip">额....</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
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
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">单复选校验</Divider>
            <FormItem label="单选框" prop="radio1">
                <RadioGroup v-model="frm.radio1">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
                <div class="ivu-form-item-notice-tip">【完美】【数据源统一放置】</div>
            </FormItem>
            <FormItem label="复选框" prop="checkbox1">
                <CheckboxGroup v-model="frm.checkbox1">
                    <Checkbox label="Eat"></Checkbox>
                    <Checkbox label="Sleep"></Checkbox>
                    <Checkbox label="Run"></Checkbox>
                    <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
                <div class="ivu-form-item-notice-tip">【完美】【数据源统一放置】</div>
            </FormItem>
            <FormItem label="复选框" prop="checkbox12">
                <CheckboxGroup v-model="frm.checkbox12">
                    <Checkbox label="Eat"></Checkbox>
                    <Checkbox label="Sleep"></Checkbox>
                    <Checkbox label="Run"></Checkbox>
                    <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
                <div class="ivu-form-item-notice-tip">必填+最多两个 【完美】</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">密码</Divider>
            <FormItem label="密码" prop="pwd1">
                <input type="text" style="width: 0px; height: 0px; position: absolute;"/>
                <Input type="password" v-model="frm.pwd1" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+减小浏览器自动填写的影响 【不完美】【怎样不允许浏览器捣乱】</div>
            </FormItem>
            <FormItem label="重复密码" prop="pwd2">
                <Input type="password" v-model="frm.pwd2" placeholder="请输入XXXX" style="width: 450px"/>
                <div class="ivu-form-item-notice-tip">必填+与前面的相同 【完美】【自定义校验方法全局化】</div>
            </FormItem>
            <FormItem label="测试">
                <Button type="primary" @click="handleSubmit()">测试</Button>
            </FormItem>
            <Divider orientation="left">富文本校验</Divider>
            <FormItem label="任务内容" prop="rich1">
                <vue-html5-editor :content="frm.rich1"
                    @change="val=>frm.rich1=val" :height="140" style="width: 600px;">
                </vue-html5-editor>
                <div class="ivu-form-item-notice-tip">必填【不完美】【字段写两遍】{{frm.rich1}}</div>
            </FormItem>
            <Divider orientation="left">提交</Divider>
            <FormItem style="margin-top: 50px">
                <Button type="default" @click="cancel">返回</Button>
                <Button type="primary" :loading="loading === '1'" style="margin: 0 15px" @click="handleSubmit()">发布</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import '@/plugins/vueEditor'
import Ccode from '@C/ccode'
import { ramdomString } from '@/utils'
import { error } from '@/tools' // 自定义常用工具

export default {
    components: { Ccode },
    data () {
        const validatePw1 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请输入密码')) }
            if (this.frm.pwd1 !== '') { this.$refs['from0982'].validateField('pwd2') }
            callback();
        }
        const validatePw2 = (rule, value, callback) => {
            if (value === '') { return callback(new Error('请再次输入密码')) }
            if (value !== this.frm.pwd1) { return callback(new Error('两次输入不一致!')) }
            callback()
        }
        const validateFileList = (rule, value, callback) => {
            const filelist = this.frm.file1
            if (!filelist || filelist.length === 0) { return callback(new Error('请上传文件!')) }
            callback()
        }
        const validateDate2 = (rule, value, callback) => {
            const dates = this.frm.date2
            if (!dates || dates.length === 0) { return callback(new Error('必选日期段!')) }
            callback()
        }
        return {
            frm: {
                text1: '啦啦啦啦啦', // 正常文本
                input1: '', // 输入框测试
                input12: '', // 输入框测试
                input123: '', // 输入框测试
                input14: '', // 输入框测试
                input15: '', // 输入框测试
                textarea1: '', // 文本域测试
                num1: 0, // 数字框测试
                select1: '', // 下拉框测试
                select12: '', // 下拉框测试
                select13: '', // 下拉框测试
                date11: '', // 日期测试
                date12: '', // 日期测试
                date13: '', // 日期测试
                date2: [], // 日期范围测试
                radio1: '', // 单选测试
                checkbox1: [], // 复选测试
                checkbox12: [], // 复选测试
                slider1: 0, // slider测试
                slider2: [0, 100], // slider测试
                rate1: 0, // 打分器测试
                file1: [], // 文件上传
                file2: [], // 文件上传
                file3: {}, // 文件上传
                pwd1: '', // 密码测试
                pwd2: '', // 密码测试
                rich1: '' // 富文本测试
            },
            frmValidate: {
                input1: [
                    { required: true, message: '输入框不能为空' }
                ],
                input12: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                input123: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' },
                    { type: 'email', message: '邮箱格式不正确' }
                ],
                input14: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 11, message: '请输入11位手机号码' },
                    { type: 'string', max: 11, message: '请输入11位手机号码' },
                    { pattern: /^1[3456789]\d{9}$/, message: '电话格式错误' }
                ],
                input15: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: /(^[1-9]\d{0,5}(\.[0-9]{1,2})?$)|(^0{1}\.[1-9]{1}$)|(^0{1}\.0{1}[1-9]{1}$)|(^0{1}\.[1-9]{1}[0-9]{1}$)/, message: '整数6位，小数点2位' }
                ],
                textarea1: [
                    { required: true, message: '文本域不能为空' }
                ],
                num1: [
                    { required: true, message: '数字框不能为空' }
                ],
                rate1: [
                    { required: true, message: '必须打分' }
                ],
                select1: [
                    { required: true, message: '下拉框必选其一' }
                ],
                select12: [
                    { required: true, message: '下拉框必选其一' }
                ],
                select13: [
                    { required: true, message: '下拉框必选其一' }
                ],
                date11: [
                    { required: true, message: '请选择日期' }
                ],
                date12: [
                    { required: true, message: '请选择日期' }
                ],
                date13: [
                    { required: true, message: '请选择日期' }
                ],
                date2: [
                    { validator: validateDate2 }
                ],
                radio1: [
                    { required: true, message: '单选框必选其一' }
                ],
                checkbox1: [
                    { required: true, message: '复选框必选其一' }
                ],
                checkbox12: [
                    { required: true, message: '复选框必选其一' },
                    { type: 'array', max: 2, message: '复选框选择最多两项', trigger: 'change' }
                ],
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
                ],
                pwd1: [
                    { validator: validatePw1 }
                ],
                pwd2: [
                    { validator: validatePw2 }
                ],
                rich1: [
                    { required: true, message: '富文本必填' }
                ]
            },
            options2: {
                shortcuts: [
                    { text: '过去一周', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 7); return [start, end]; } },
                    { text: '过去一月', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 30); return [start, end]; } },
                    { text: '过去三月', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 90); return [start, end]; } }
                ]
            },
            list: [],
            content: '',
            correlation: [],
            reviewList: [],
            loading: '',
            ccore: '0000'
        };
    },
    methods: {
        init () {
            setTimeout(() => {
                this.list = [{id: 0, name: '一般'}, {id: 1, name: '重要'}, {id: 2, name: '紧急'}]
            }, 2e3)
        },
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
        handleMenuSelected (name) {
            this.$Message.info('选中页面：' + name)
        },
        postForm () {
            if (this.formItem.taskPriority !== 2) {
                this.formItem.completeTime = '';
            }
            let pa = new FormData();
            pa.append('id', this.formItem.id === '' ? null : this.formItem.id);
            pa.append('taskName', this.formItem.taskName);
            pa.append('taskPriority', this.formItem.taskPriority);
            pa.append('completeTime', this.formItem.completeTime === '' ? null : this.formItem.completeTime);
            pa.append('taskContent', this.formItem.taskContent);
            pa.append('personLiable', this.formItem.personLiable);
            pa.append('correlation', this.correlation.length === 0 ? null : this.correlation);
            for (let file in this.fileList) {
                pa.append('file', this.fileList[file]);
            }
            /* let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                timeout: 300000
            } */
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.postForm();
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
        },
        contentChange (value) {
            this.formItem.taskContent = value
        },
        flashccore () {
            this.ccore = ramdomString(4)
        }
    },
    mounted () {
        window.addEventListener('setItem', () => {
            this.loading = sessionStorage.getItem('watchStorage')
        });
        this.init()
        this.flashccore()
    }
}
</script>
