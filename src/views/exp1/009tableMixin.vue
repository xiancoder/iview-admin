<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格页 搜索/排序/分页/操作 的交叉影响</div>
                <div class="blogContent" v-highlight>
                    <p>1 初始化的时候 给表面搜索项深拷贝两份 <font color="red">一个是实际搜索项 一个是备份 </font></p>
                    <p>2 用户点击搜索按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 分页置为1 刷新页面 </p>
                    <p>3 用户点击排序按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 分页置为1 刷新页面 </p>
                    <p>4 用户点击操作按钮例如导出时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 不关分页 刷新页面 </p>
                    <p>5 用户点击分页时候 <font color="red">实际搜索项拷贝给表面搜索项</font> 刷新页面 </p>
                    <p>6 本来想直接在data声明一个大对象来处理所有表格相关的内容和方法 似乎作用域不支持这样做 this在对象声明时候就绑定了</p>
                    <p>6 即 ()=>{} 可以是this绑定在外 但是如果{}对象中使用 其对象就是this</p>
                    <p>1 能用箭头函数的/杜绝使用<b>var me = this</b></p>
                    <p>2 写HTML时候属性超过3个的话/建议换行/每行3个属性/其中if for 指令提前</p>
                    <p>3 精简所有用到的组件 为模板化配凑做准备</p>
                    <p>4 公共部分拆分 mixin注入式继承</p>
                    <p>5 尝试使用页面生成</p>
                    <hr>
                    <p>我的想法是 各个模块的逻辑都大同小异</p>
                    <p>表格(搜索/排序/分页) 按钮(ajax下发/跳转) 表单(校验/转换格式/提交/跳转)</p>
                    <p>本来是挺简单的一套逻辑 或者叫 一系列功能</p>
                    <p>菜鸟的行为是 反正方法声明简单 不开eslint没人管 我随便起名 随便放 能执行就行</p>
                    <p>我擦擦擦擦 苦的是后期维护的人和接手的人</p>
                    <p>因此 我在这里定义一套 [[约定俗成的编码规则]] 要求和我合作的人必须遵守或者改进</p>
                    <p class="text-danger">1 本规范定义与2019年10月19日 第一版本 如和旧版本冲突默认遵守本版本</p>
                    <p class="text-danger">2 因为有了mode编译压缩 所有变量/方法/临时方法 必须写注释</p>
                    <p class="text-danger">3 vue编程templete必须放第一位 方便第一眼看出来这是什么页面</p>
                    <p class="text-danger">3 vue编程script必须放第二位 其vue各个属性按照eslint规律排列</p>
                    <p class="text-danger">3 vue编程style必须放第三位 必须scoped 其样式模块化 零散样式进入样式库</p>
                    <p class="text-danger">4 vue编程tab必须抽取组件</p>
                    <p class="text-danger">5 编码风格因人而异 不再强求 但要保证第一要点 易读</p>
                    <p class="text-danger">5 易读的描述 缩进必须严谨 能一行写就一行 不要太长 多写注释</p>
                    <p class="text-danger">6 所有的绑定事件触发的函数统一 hendleXxxx命名 按堆排放</p>
                    <p class="text-danger">6 所有的绑定变量按堆排放 例如表格变量都放在obj中</p>
                    <p class="text-danger"></p>
                    <p></p>
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
                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="primary" @click="yunxiTable.search">搜索</Button>
                <Button type="default" @click="yunxiTable.reset">重置</Button>
                <Button type="default" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns1" :data="yunxiTable.tableData"
                @on-sort-change="yunxiTable.sort">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount"
                    class="fr" show-total show-elevator @on-change="yunxiTable.goPage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { debounce, nothing } from '@/utils/function'
import { h } from '@/tools' // 自定义常用工具
import mixin from './009mixin'
export default {
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {title: '任务编号', key: 'taskNumber', sortable: true},
                {title: '发布人', key: 'founder', sortable: true},
                {title: '发布日期', key: 'foundTime', sortable: true},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ],
            end1: 1 // 防呆设计
        }
    },
    mixins: [mixin],
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.yunxiTable.serrchParam)
            this.yunxiTable.search()
        }),
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.yunxiTable.init(this)
        this.getDataSet()
    }
}
</script>
