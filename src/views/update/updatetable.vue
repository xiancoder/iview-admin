<template>
    <div style="padding:20px">
        <Row :gutter="10">
            <i-col span="6">
                <Card>
                    <Upload action="" :before-upload="beforeUpload">
                        <Button icon="ios-cloud-upload-outline">上传Csv文件</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;点击上传Csv文件
                    </Upload>
                    <p>util.js提供两个方法用来实现这个功能：</p>
                    <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getArrayFromFile</span>：将Csv文件解析为二维数组</p>
                    <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getTableDataFromArray</span>：将二维数组转为表格数据，具体请看文档</p>
                </Card>
            </i-col>
            <i-col span="18">
                <Table border :height="500" :columns="columns" :data="tableData"/>
            </i-col>
        </Row>
    </div>
</template>
<script>
/**
 * @param {Object} file 从上传组件得到的文件对象
 * @returns {Promise} resolve参数是解析后的二维数组
 * @description 从Csv文件中解析出表格，解析成二维数组
 */
export const getArrayFromFile = (file) => {
    let nameSplit = file.name.split('.')
    let format = nameSplit[nameSplit.length - 1]
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsText(file) // 以文本格式读取
        let arr = []
        reader.onload = function (evt) {
            let data = evt.target.result // 读到的数据
            let pasteData = data.trim()
            arr = pasteData.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map(row => {
                return row.split('\t')
            }).map(item => {
                return item[0].split(',')
            })
            if (format === 'csv') resolve(arr)
            else reject(new Error('[Format Error]:你上传的不是Csv文件'))
        }
    })
}
/**
 * @param {Array} array 表格数据二维数组
 * @returns {Object} { columns, tableData }
 * @description 从二维数组中获取表头和表格数据，将第一行作为表头，用于在iView的表格中展示数据
 */
export const getTableDataFromArray = (array) => {
    let columns = []
    let tableData = []
    if (array.length > 1) {
        let titles = array.shift()
        columns = titles.map(item => {
            return {
                title: item,
                key: item
            }
        })
        tableData = array.map(item => {
            let res = {}
            item.forEach((col, i) => {
                res[titles[i]] = col
            })
            return res
        })
    }
    return {
        columns,
        tableData
    }
}
export default {
    name: 'update_table_page',
    data () {
        return {
            columns: [],
            tableData: []
        }
    },
    methods: {
        beforeUpload (file) {
            getArrayFromFile(file).then(data => {
                let { columns, tableData } = getTableDataFromArray(data)
                this.columns = columns
                this.tableData = tableData
            }).catch(() => {
                this.$Notice.warning({
                    title: '只能上传Csv文件',
                    desc: '只能上传Csv文件，请重新上传'
                })
            })
            return false
        }
    }
}
</script>
<style>
    .update-table-intro{ margin-top: 10px; }
    .code-high-line{ color: #2d8cf0; }
</style>
