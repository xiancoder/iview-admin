<template>
    <div style="padding:20px 30px;">
        <!-- <div >
            <Select v-model="frm.type" style="width: 300px">
                <Option :value="1">个人</Option>
                <Option :value="2">公司</Option>
            </Select>
            <hr>
            当前角色类型 = {{frm.type}}
        </div> -->
        <div class="tit">主体类型</div>
        <Card style="width:300px;border:2px solid #2d8cf0;margin-bottom:50px">
            <div style="text-align:center">
                <div class="card">
                    <div class="head">
                    </div>
                    <div class="name">{{frm.type == 1?'个人广告主':'企业广告主'}}</div>
                </div>
                <div class="introduce">{{frm.type == 1?'推广其自身依法经营的产品或服务且具备有效身份的自然人。': '推广其营业执照经营范畴的产品或服务的企业或其他组织。'}}</div>
            </div>
        </Card>
        <div class="personal" v-if="frm.type === 1">
            <Form ref="formValidateId" :model="frm" :rules="frmRule" >
                <FormItem label="资质认证" prop="positive" style="display:inline-block;margin-right:10px;">
                    <div class="mask" v-if="positive">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('positive')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload ref="1" :before-upload="handleUpload1"  multiple action="" type="drag" class="idcard">
                        <img :src="positive" v-if="positive">
                        <div style="padding: 20px 0" v-if="!positive">
                            <p style="font-size: 1.17em;">身份证正面</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="" prop="reverse" style="display:inline-block;margin-right:10px;">
                    <div class="mask" v-if="reverse">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('reverse')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload :before-upload="handleUpload2"  multiple action="" type="drag" class="idcard" style="margin-top: 34px;">
                        <img :src="reverse" v-if="reverse">
                        <div style="padding: 20px 0" v-if="!reverse">
                            <p style="font-size: 1.17em;">身份证反面</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="" prop="handheld" style="display:inline-block;margin-right:10px;">
                    <div class="mask" v-if="handheld">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('handheld')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload :before-upload="handleUpload3"  multiple action="" type="drag" class="idcard" style="margin-top: 34px;">
                        <img :src="handheld" v-if="handheld">
                        <div style="padding: 20px 0" v-if="!handheld">
                            <p style="font-size: 1.17em;">手持身份证</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="姓名" prop="name">
                    <Input type="text" v-model="frm.name" placeholder="请填写姓名" style="width: 326px"/>
                </FormItem>
                <FormItem label="身份证号" prop="code">
                    <Input type="text" v-model="frm.code" placeholder="请填写身份证号" style="width: 326px"/>
                </FormItem>
                <FormItem style="margin-top: 50px">
                    <Button class="submit" type="primary" :loading="loading" @click="handleSubmit('formValidateId')">立即认证</Button>
                </FormItem>
            </Form>
        </div>
        <div class="formcompany" v-if="frm.type === 2">
            <Form ref="formCompany" :model="frm" :rules="frmRule" >
                <div class="tit">1.资质证件</div>
                <FormItem label="请上传营业执照或组织机构代码证" prop="license" style="display:inline-block">
                    <div class="mask" v-if="license">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('license')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload ref="1" :before-upload="handleUpload4"  multiple action="" type="drag" class="license">
                        <img :src="license" v-if="license">
                        <div style="padding: 20px 0" v-if="!license">
                            <p style="font-size: 1.17em;">营业执照或组织机构代码证</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="公司名称" prop="company_name">
                    <Input type="text" v-model="frm.company_name" placeholder="请填写公司名称" style="width: 326px"/>
                </FormItem>
                <FormItem label="营业执照注册号/三证合一统一社会信用代码" prop="license_code">
                    <Input type="text" v-model="frm.license_code" placeholder="请填写营业执照注册号/三证合一统一社会信用代码" style="width: 326px"/>
                </FormItem>
                <div class="tit">2.法人信息</div>
                <FormItem label="法人姓名" prop="legal_person">
                    <Input type="text" v-model="frm.legal_person" placeholder="请填写法人姓名" style="width: 326px"/>
                </FormItem>
                <FormItem label="请上传法人身份证正反面" prop="legal_positive" style="display:inline-block;margin-right:10px;">
                    <div class="mask" v-if="legal_positive">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('legal_positive')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload :before-upload="handleUpload5"  multiple action="" type="drag" class="idcard">
                        <img :src="legal_positive" v-if="legal_positive">
                        <div style="padding: 20px 0" v-if="!legal_positive">
                            <p style="font-size: 1.17em;">法人身份证正面</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="" prop="legal_reverse" style="display:inline-block;margin-right:10px;">
                    <div class="mask" v-if="legal_reverse">
                        <div class="mask-cover">
                            <Icon type="ios-trash-outline" @click="clearPicture('legal_reverse')"></Icon>
                            <!-- <Icon type="ios-eye-outline" /> -->
                        </div>
                    </div>
                    <Upload :before-upload="handleUpload6"  multiple action="" type="drag" class="idcard" style="margin-top: 34px;">
                        <img :src="legal_reverse" v-if="legal_reverse">
                        <div style="padding: 20px 0" v-if="!legal_reverse">
                            <p style="font-size: 1.17em;">法人身份证反面</p>
                            <h3>点击或者拖拽上传</h3>
                            <p>(jpeg/png,小于5MB)</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="法人身份证号" prop="legal_code">
                    <Input type="text" v-model="frm.legal_code" placeholder="请填写身份证号" style="width: 326px"/>
                </FormItem>
                <FormItem style="margin-top: 50px">
                    <Button class="submit" type="primary" :loading="loading" @click="handleSubmit('formCompany')">立即认证</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<style scoped lang="less">
.tit{margin-bottom:10px;font-weight:bold}
.card{color:#000;text-align:left;}
.ivu-input-wrapper{display: block;}
.head{
    width:80px;
    height:80px;
    line-height:80px;
    display: inline-block;
    border-radius:50%;
    font-size:36px;
    text-align:center;
    img{width:100%;}
}
.name{
    display:inline-block;
    line-height:60px;
    vertical-align: top;
    margin-left:10px;
    font-size:16px;
}
.introduce{text-align:left;margin-top:20px;}
.idcard{
    width:230px;
    height:140px;
    display:inline-block;
    img{
        width:100%;
        height: 136px;
        float: left;
    }
}
.license{
    width:554px;
    height:140px;
    display:inline-block;
    img{
        width:100%;
        height: 136px;
        float: left;
    }
}
.mask{
    width: 100%;
    height: 136px;
    line-height: 136px;
    position: absolute;
    left: 0;
    bottom: 12px;
    z-index: 9;
    text-align: center;
    &-cover{
        display:none;
        background: rgba(0, 0, 0, 0.6);
        i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
        }
    }
}
.mask:hover .mask-cover{display:block;}
</style>
<script>
import { homePage } from '@/router/routers'
import regexp from '@/utils/regexp'
import { error } from '@/tools' // 自定义常用工具
export default {
    data () {
        return {
            frm: {
                type: '',
                name: '', // 姓名
                code: '', // 身份证
                positive: '', // 身份证正面
                reverse: '', // 身份证反面
                handheld: '', // 手持身份证
                license: '', // 营业执照
                company_name: '', // 公司名称
                license_code: '', // 营业执照注册号/三证合一统一社会信用代码
                legal_person: '', // 法人名称
                legal_positive: '', // 法人身份证正面
                legal_reverse: '', // 法人身份证反面
                legal_code: '' // 法人身份证
            },
            loading: false,
            positive: '', // 身份证正面临时路径
            reverse: '', // 身份证反面临时路径
            handheld: '', // 手持身份证临时路径
            license: '', // 营业执照临时路径
            legal_positive: '', // 法人身份证正面临时路径
            legal_reverse: '', // 法人身份证反面临时路径
            frmRule: {
                positive: [
                    { required: true, validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传正面身份证!')) }
                        callback()
                    } }
                ],
                reverse: [
                    { required: false, validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传反面身份证!')) }
                        callback()
                    } }
                ],
                handheld: [
                    { validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传手持身份证!')) }
                        callback()
                    } }
                ],
                name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 2, message: '姓名最少2位' },
                    { type: 'string', max: 20, message: '姓名至多20位' },
                    { pattern: regexp.n22, message: '请勿输入非法字符' }
                ],
                code: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: regexp.a06, message: '请输入18位的有效身份证' }
                ],
                license: [
                    { required: true, validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传营业执照!')) }
                        callback()
                    } }
                ],
                legal_positive: [
                    { required: true, validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传法人身份证正面!')) }
                        callback()
                    } }
                ],
                legal_reverse: [
                    { validator: (rule, value, callback) => {
                        if (!value.name) { return callback(new Error('请上传法人身份证反面!')) }
                        callback()
                    } }
                ],
                company_name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '公司名称最少6位' },
                    { type: 'string', max: 20, message: '公司名称至多20位' },
                    { pattern: regexp.n22, message: '请勿输入非法字符' }
                ],
                license_code: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 18, max: 18, message: '请输入18位营业执照号/三证合一统一社会信用代码' },
                    { pattern: regexp.b04, message: '请勿输入非法字符' }
                ],
                legal_person: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 2, message: '姓名最少2位' },
                    { type: 'string', max: 20, message: '姓名至多20位' },
                    { pattern: regexp.n22, message: '请勿输入非法字符' }
                ],
                legal_code: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: regexp.a06, message: '请输入18位的有效身份证' }
                ]
            }
        }
    },
    methods: {
        handleFormatError (file) {
        },
        handleUpload1 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.positive = e.target.result
                        this.frm.positive = file
                        this.$refs.formValidateId.validateField('positive')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        handleUpload2 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.reverse = e.target.result
                        this.frm.reverse = file
                        this.$refs.formValidateId.validateField('reverse')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        handleUpload3 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.handheld = e.target.result
                        this.frm.handheld = file
                        this.$refs.formValidateId.validateField('handheld')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        handleUpload4 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.license = e.target.result
                        this.frm.license = file
                        this.$refs.formCompany.validateField('license')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        handleUpload5 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.legal_positive = e.target.result
                        this.frm.legal_positive = file
                        this.$refs.formCompany.validateField('legal_positive')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        handleUpload6 (file) {
            const patt = new RegExp('image');
            if (!patt.test(file.type)) {
                error('请上传jpeg/png')
                return false
            }
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.legal_reverse = e.target.result
                        this.frm.legal_reverse = file
                        this.$refs.formCompany.validateField('legal_reverse')
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        clearPicture (name) {
            switch (name) {
                case 'positive':
                    this.positive = '';
                    this.frm.positive = '';
                    this.$refs.formValidateId.validateField('positive');
                    break;
                case 'reverse':
                    this.reverse = '';
                    this.frm.reverse = '';
                    this.$refs.formValidateId.validateField('reverse');
                    break;
                case 'handheld':
                    this.handheld = '';
                    this.frm.handheld = '';
                    this.$refs.formValidateId.validateField('handheld');
                    break;
                case 'license':
                    this.license = '';
                    this.frm.license = '';
                    this.$refs.formCompany.validateField('license');
                    break;
                case 'legal_positive':
                    this.legal_positive = '';
                    this.frm.legal_positive = '';
                    this.$refs.formCompany.validateField('legal_positive');
                    break;
                case 'legal_reverse':
                    this.legal_reverse = '';
                    this.frm.legal_reverse = '';
                    this.$refs.formCompany.validateField('legal_reverse');
                    break;
            }
        },
        handleSubmit (name) {
            let param = this.frm
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('system/certification', param).then(res => { // 认证
                        this.loading = false
                        if (res.res_code) {
                            this.$router.push({ name: homePage })
                        }
                    })
                }
            });
        }
    },
    mounted () {
        this.frm.type = this.$store.state.system.usercertificatId
        console.info('当前用户属性为' + this.frm.type)
    }
}
</script>
