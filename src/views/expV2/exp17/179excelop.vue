<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">excel 导入 导出 辅助操作</div>
            <div class="blogContent" v-highlight>
                <Card title="表格">
                    <Row>
                        <Table border :columns="tableTitle" :data="tableData"></Table>
                    </Row>
                </Card>
                <hr />
                <Card title="导出EXCEL">
                    <Row>
                        <Button icon="md-download" :loading="exportLoading" @click="exportExcel">导出文件</Button>
                    </Row>
                </Card>
                <hr />
                <Card title="导入EXCEL">
                    <Row>
                        <Upload action="" :before-upload="handleBeforeUpload" accept=".xls, .xlsx">
                            <Button icon="ios-cloud-upload-outline" :loading="uploadLoading" @click="handleUploadFile">上传文件</Button>
                        </Upload>
                    </Row>
                    <hr />
                    <Row>
                        <div class="ivu-upload-list-file" v-if="file !== null">
                            <Icon type="ios-stats"></Icon> {{ file.name }}
                            <Icon v-show="showRemoveFile" type="ios-close" class="ivu-upload-list-remove" @click.native="handleRemove()"></Icon>
                        </div>
                    </Row>
                    <Row>
                        <transition name="fade">
                            <Progress v-if="progressPercent" :percent="progressPercent" :stroke-width="2">
                                <div v-if="progressPercent == 100">
                                    <Icon type="ios-checkmark-circle"></Icon>
                                    <span>成功</span>
                                </div>
                            </Progress>
                        </transition>
                    </Row>
                </Card>
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
import { excel } from '@/utils'

export default {
    data () {
        return {
            tableTitle: [ // table
                { title: '一级分类', key: 'category1' },
                { title: '二级分类', key: 'category2' },
                { title: '三级分类', key: 'category3' }
            ],
            tableData: [ // table
                { category1: 1, category2: 2, category3: 3 },
                { category1: 4, category2: 5, category3: 6 },
                { category1: 7, category2: 8, category3: 9 }
            ],

            exportLoading: false, // 导出loading

            uploadLoading: false, // 导入loading
            progressPercent: 0, // 进度
            showProgress: false, // 显示进度条
            showRemoveFile: false, // 显示删除
            file: null // 文件
        }
    },
    methods: {
        exportExcel () { // 表格信息导出
            if (this.tableData.length) {
                this.exportLoading = true
                const params = {
                    title: ['一级分类', '二级分类', '三级分类'],
                    key: ['category1', 'category2', 'category3'],
                    data: this.tableData,
                    autoWidth: true,
                    filename: '分类列表'
                }
                excel.export_array_to_excel(params)
                this.exportLoading = false
            } else {
                this.$Message.info('表格数据不能为空！')
            }
        },
        handleBeforeUpload (file) { // 上传前操作
            const fileExt = file.name.split('.').pop().toLocaleLowerCase()
            if (fileExt === 'xlsx' || fileExt === 'xls') {
                this.readFile(file)
                this.file = file
            } else {
                this.$Notice.warning({
                    title: '文件类型错误',
                    desc: '文件：' + file.name + '不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。'
                })
            }
            return false
        },
        initUpload () { // 清空表格
            this.file = null
            this.showProgress = false
            this.loadingProgress = 0
            this.tableData = []
            this.tableTitle = []
        },
        handleUploadFile () { // 开始上传
            this.initUpload()
        },
        handleRemove () { // 删除文件
            this.initUpload()
            this.$Message.info('上传的文件已删除！')
        },
        readFile (file) { // 读取文件
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onloadstart = e => {
                this.uploadLoading = true
                this.tableLoading = true
                this.showProgress = true
            }
            reader.onprogress = e => {
                this.progressPercent = Math.round(e.loaded / e.total * 100)
            }
            reader.onerror = e => {
                this.$Message.error('文件读取出错')
            }
            reader.onload = e => {
                this.$Message.info('文件读取成功')
                const data = e.target.result
                const { header, results } = excel.read_excel(data, 'array')
                const tableTitle = header.map(item => { return { title: item, key: item } })
                this.tableData = results
                this.tableTitle = tableTitle
                this.uploadLoading = false
                this.tableLoading = false
                this.showRemoveFile = true
            }
        }
    }
}
</script>
