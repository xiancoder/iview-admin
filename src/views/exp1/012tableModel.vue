<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格页弹框使用规范</div>
                <div class="blogContent" v-highlight>
                    <p>1 js控制弹出结束 一次性使用 其包含几种方式</p>
                    <p>1 - 1 提示 / 错误 / 成功 / 警告 暂时不知道用在哪里 因为有一个确认的操作</p>
                    <p>1 - 2 确认提示框</p>
                    <script type="text/js">
                        this.$Modal.confirm({
                            title: '核对考勤',
                            content: '确认考勤无误吗？',
                            loading: true,
                            onOk: () => {
                                alert('ok')
                                this.$Modal.remove()
                            }
                        })
                    </script>
                    <hr>
                    <h3>如何使用vue.js构造modal(弹窗)组件?</h3>
                    <p>问题就是,构造一个modal组件,如何在需要的时候动态异步的插入到dom里</p>
                    <p>作者：尤雨溪</p>
                    <p>大神的观点是 为什么一定要异步插入？</p>
                    <p>其实以前也有一些用户跟我纠结过这个问题，他们觉得一定要在需要的时候创建这个组件才是符合他们思维的做法。在我看来，这是没有理解『状态驱动的界面』的一种表现。</p>
                    <p>作者：柳家忍</p>
                    <p>这道题我要强答一下，虽然 尤雨溪 大神说得非常在理，但是异步加载模态框也很一种很常见的需求，毕竟页面初次渲染的时候模态框部分的资源加载没有啥意义，因为操作完页面都可能用不到模态框，而如果模态框的内容比较重就造成请求资源的浪费了。（或许有时候我们该忽略这种浪费？）</p>
                    <p>作者：骗你是小猫咪</p>
                    <p>项目用到了大量的modal，正在考虑……主要思路：</p>
                    <p>1. 一个vue文件就是一个modal</p>
                    <p>2. modal可以复用（显示的文字可以通过参数来决定）</p>
                    <p>3. 使用的时候直接this.$modal.要使用的modal框名字</p>
                    <p>4. 这个modal是个promise，这样我就可以根据它的状态来确定我在modal上的状态（确定，取消，关闭啥的）</p>
                    <p>5. 使用者不关心它的层级（z-index）</p>
                    <p>vue提供了use方法来安装插件还是很便利的补充：该插件的用法和angularjs的uiModal很类似，自定义modal模板和逻辑，用的时候直接用过this来使用，并且可以弹窗之上再弹窗，俗称弹弹弹……鱼尾纹</p>
                    <p></p>
                    <p>想歪了 我决定尝试 modal封装组件 需要者自行引入</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool">
                <Select v-model="yunxiTable.search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="yunxiTable.search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="primary" @click="yunxiTable.hendleSearch">搜索</Button>
                <Button type="default" @click="yunxiTable.hendleReset">重置</Button>
                <Button type="default" class="pull-right" @click="hendleInfo">info</Button>
                <Button type="default" class="pull-right" @click="hendleSuccess">success</Button>
                <Button type="default" class="pull-right" @click="hendleWarning">warning</Button>
                <Button type="default" class="pull-right" @click="hendleError">error</Button>
                <Button type="default" class="pull-right" @click="hendleConfirm">confirm</Button>
                <Button type="default" class="pull-right" @click="hendleDownload">下载</Button>
            </div>
            <Table border :loading="yunxiTable.loading" :columns="yunxiTable.columns" :data="yunxiTable.tableData"
                @on-sort-change="yunxiTable.hendleSort">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="yunxiTable.page.size" :current="yunxiTable.page.index"
                    :total="yunxiTable.page.rowCount"
                    class="fr" show-total show-elevator @on-change="yunxiTable.hendleGoPage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
export default {
    data () {
        const yunxiTable = { // 有用内容
            'search': {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            'loading': false,
            'page': {
                'pageIndex': 1,
                'pageSize': 30,
                'rowCount': 999
            }, // 分页 变量名最好原样
            'order': { 'orderKey': '', 'order': '' }, // 排序 变量名最好原样
            'columns': [
                {title: '任务编号', key: 'taskNumber', sortable: true},
                {title: '发布人', key: 'founder', sortable: true},
                {title: '发布日期', key: 'foundTime', sortable: true},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            init: () => { // 初始化
                if (!this.yunxiTable.serrchParam) {this.yunxiTable.serrchParam = {}} // 下发参数
                if (!this.yunxiTable.serrchBack) {this.yunxiTable.serrchBack = extend({}, this.yunxiTable.search)} // 备份
                const query = getParamState()
                extend(this.yunxiTable.search, query) // 设置表现搜索项成url缓存
                extendF(this.yunxiTable.page, query)
                extendF(this.yunxiTable.order, query)
                this.yunxiTable.ajax()
            },
            hendleSearch: () => { // 搜索
                extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项成表现搜索项
                this.yunxiTable.goPage(1)
            },
            hendleReset: () => { // 重置
                extend(this.yunxiTable.search, this.yunxiTable.serrchBack) // 重置表现搜索项成备份搜索项
                this.yunxiTable.search()
            },
            hendleGoPage: (page) => { // 跳转页
                extendF(this.yunxiTable.search, this.yunxiTable.serrchParam) // 恢复表现搜索项成实际搜索项
                this.yunxiTable.page.pageIndex = page
                this.yunxiTable.ajax()
            },
            hendleSort: (param) => { // 排序功能
                // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
                this.yunxiTable.order.orderKey = param.key
                this.yunxiTable.order.order = param.order
                this.yunxiTable.ajax()
            },
            ajax: debounce(() => { // 业务ajax
                extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项
                extend(this.yunxiTable.serrchParam, this.yunxiTable.page) // 设置分页
                extend(this.yunxiTable.serrchParam, this.yunxiTable.order) // 设置排序
                saveParamState(this.yunxiTable.serrchParam) // 存url
                this.loading = true // 加载中
                this.$api.task.listMine(this.yunxiTable.serrchParam).then((info) => { // ajax
                    this.yunxiTable.loading = false; // 加载完成
                    this.yunxiTable.tableData = info.list
                    this.yunxiTable.page.rowCount = info.rowCount
                })
            })
        }
        return {
            yunxiTable,
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        hendleInfo () {
            this.$Modal.info({
                title: '确认考核',
                content: '请假时长已超剩余假期时长'
            })
        },
        hendleSuccess () {
            this.$Modal.success({
                title: '确认考核',
                content: '请假时长已超剩余假期时长'
            })
        },
        hendleWarning () {
            this.$Modal.warning({
                title: '确认考核',
                content: '请假时长已超剩余假期时长'
            })
        },
        hendleError () {
            this.$Modal.error({
                title: '确认考核',
                content: '请假时长已超剩余假期时长'
            })
        },
        hendleConfirm () {
            this.$Modal.confirm({
                title: '核对考勤',
                content: '确认考勤无误吗？',
                loading: true,
                onOk: () => {
                    alert('ok')
                    this.$Modal.remove()
                }
            })
        },
        hendleDownload: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.yunxiTable.serrchParam)
            this.yunxiTable.search()
        })
    },
    mounted: function () {
        this.yunxiTable.init()
        this.getDataSet()
    }
}
</script>
