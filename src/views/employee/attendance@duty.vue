<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool">
            <DatePicker style="width: 180px;margin-right: 10px" v-model="obj.dates" :editable="false" :clearable="false" format="yyyy-MM-dd" type="daterange" placement="bottom-start" placeholder="请选择日期" ></DatePicker>
            <Input style="width: 180px;margin-right: 10px" type="text" v-model="obj.keyword" placeholder="员工姓名" @on-enter="handleSearch(1)"/>
            <Select style="width: 200px" v-model="obj.dutyType">
                <Option value='0'>全部值班类型</Option>
                <Option value='1'>公司值班</Option>
                <Option value='2'>c++部门值班</Option>
            </Select>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
            <a class="out_port" :href="url" download="" target="_blank">批量导出</a>
            <a class="out_port" style="margin-right: 10px" @click="importModal()">值班导入</a>
        </div>
        <div style="height:20px;"></div>
        <Table border :loading="loading" :columns="columns1" :data='data1'>
            <template slot-scope="{ row, index }" slot="userName">
                <span>{{row.userName || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="department">
                <span>{{row.department || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="dutyDateStr">
                <span>{{row.dutyDateStr || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="week">
                <span>{{row.week || '-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="duty">
                <span v-show="row.duty === 1">公司值班</span>
                <span v-show="row.duty === 2">c++部门值班</span>
            </template>
            <template slot-scope="{ row, index }" slot="remark">
                <span>{{row.remark || '-'}}</span>
            </template>
        </Table>
        <Page class="fr" style="margin: 15px 0" ref="pager" :total="rowcount" :page-size="30" show-total show-elevator @on-change="handleSearch()"/>
        <Modal v-model="showModal" title="值班导入" :closable="false" :mask-closable="false">
            <Form ref="formItem" :model="formData" :rules="formRules" :label-width="150">
                <FormItem label="值班类型" prop="dutyType">
                    <Select class="wid200" v-model="formData.dutyType">
                        <Option value='1'>公司值班</Option>
                        <Option value='2'>c++部门值班</Option>
                    </Select>
                </FormItem>
                <FormItem style="margin-bottom: 10px" label="选择文件" prop="onefile">
                    <input style="display: block" ref="fileImport" type="file" @change="getFile($event)">
                    <a href="../../../值班表模板.csv" download="">下载模板</a>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancel_import()">取消</Button>
                <Button type="primary" @click="ok_import()">保存</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
import moment from 'moment'
import {sevenRange} from '@/utils/date.js'
import tab from './attendance@tab.vue'
export default {
    components: { treeDrop, tab },
    data () {
        return {
            formData: {
                dutyType: null,
                onefile: null
            },
            formRules: {
                dutyType: [
                    { required: true, message: '请选择值班类型' }
                ],
                onefile: [
                    { required: true, message: '请选择文件' }
                ]
            },
            dates: [],
            obj: {
                dates: [],
                keyword: '',
                dutyType: '0'
            },
            showModal: false,
            url: null,
            loading: false,
            pageIndex: 1,
            rowcount: 0,
            columns1: [
                {
                    title: '姓名',
                    slot: 'userName'
                },
                {
                    title: '所属部门',
                    slot: 'department'
                },
                {
                    title: '值班日期',
                    slot: 'dutyDateStr'
                },
                {
                    title: '星期',
                    slot: 'week'
                },
                {
                    title: '值班类型',
                    slot: 'duty'
                },
                {
                    title: '备注',
                    slot: 'remark'
                }
            ],
            data1: []
        }
    },
    methods: {
        init () {
            let date = sevenRange()
            this.dates = date
            this.obj.dates = date
            this.getList()
        },
        importModal () {
            this.showModal = true
            this.$refs.formItem.resetFields()
            this.$refs.fileImport.value = null
            this.formData.dutyType = null
            this.formData.onefile = null
        },
        getFile (event) {
            this.formData.onefile = event.target.files[0]
        },
        cancel_import () {
            this.showModal = false
            this.$refs.formItem.resetFields()
        },
        ok_import () {
            this.$refs.formItem.validate(valid => {
                if (valid) {
                    let fd = new FormData()
                    fd.append('file', this.formData.onefile)
                    fd.append('duty_type', this.formData.dutyType)
                    let config = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    this.$post('api/hr/duty_upload', fd, config).then(res => {
                        if (res.data.data) {
                            switch (res.data.data.res) {
                                case 1:
                                    this.$Modal.info({
                                        title: '提示',
                                        content: res.data.data.count + '条数据导入成功'
                                    })
                                    this.resetSearch()
                                    break
                                case 2:
                                    let url = res.data.data.errorUrl
                                    this.$Modal.info({
                                        title: '提示',
                                        content: res.data.data.count + '条数据导入成功<p><a target="_blank" href="' + url + '" download="失败数据.csv">点击此处下载失败数据</a></p>'
                                    })
                                    this.resetSearch()
                                    break
                                case -1:
                                    this.$Modal.info({
                                        title: '提示',
                                        content: '没有满足条件的数据'
                                    })
                                    break
                            }
                        } else {
                            this.$Modal.info({
                                title: '提示',
                                content: res.data.msg || '操作失败'
                            })
                        }
                    })
                    this.showModal = false
                    this.$refs.formItem.resetFields()
                }
            })
        },
        getList () {
            this.loading = true
            let begin = null
            let end = null
            // 获取列表数据
            let getData = () => {
                begin = moment(this.obj.dates[0]).format('YYYY-MM-DD')
                end = moment(this.obj.dates[1]).format('YYYY-MM-DD')
                let para = {
                    'begin': begin,
                    'end': end,
                    'keyword': this.obj.keyword,
                    'dutyType': this.obj.dutyType,
                    'pageIndex': this.pageIndex,
                    'pageSize': 30
                }
                this.$get('api/hr/duty_list', para).then(res => {
                    this.loading = false
                    this.data1 = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.pageIndex !== undefined) {
                this.obj.dates = [this.$route.query.begin, this.$route.query.end]
                this.obj.keyword = this.$route.query.keyword
                this.$refs.pager.currentPage = this.pageIndex = this.$route.query.pageIndex * 1
                this.$nextTick(() => {
                    this.obj.dutyType = this.$route.query.dutyType
                    getData()
                    this.url = 'api/hr/duty_export?begin=' + begin + '&end=' + end + '&keyword=' + this.obj.keyword + '&dutyType=' + this.obj.dutyType
                })
                return false
            }
            getData()
            this.url = 'api/hr/duty_export?begin=' + begin + '&end=' + end + '&keyword=' + this.obj.keyword + '&dutyType=' + this.obj.dutyType
        },
        handleSearch (v) {
            let obj = {
                begin: moment(this.obj.dates[0]).format('YYYY-MM-DD'),
                end: moment(this.obj.dates[1]).format('YYYY-MM-DD'),
                keyword: this.obj.keyword,
                dutyType: this.obj.dutyType,
                pageIndex: this.pageIndex
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.pageIndex = 1
            } else {
                obj.pageIndex = this.$refs.pager.currentPage
            }
            this.$router.replace({name: 'duty-list', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'duty-list'})
            this.obj = {
                dates: this.dates,
                keyword: '',
                dutyType: '0'
            }
            this.$refs.pager.currentPage = 1
            this.pageIndex = 1
            this.getList()
        }
    },
    mounted: function () {
        this.init()
    }
};
</script>
