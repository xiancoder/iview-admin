<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V1.0 (历练版)</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 本模板经历实战可以使用 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日17:33:16 通过了检验 本套流程可以投入生产 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年12月6日17:32:15 完美优化page组件 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年12月12日16:55:23 maxHeight默认配置降级去除 </p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                    <script type="text/html" v-pre>
                        <div class="tableLayout">
                            <tab></tab>
                            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                                    </Option>
                                </Select>
                                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                                    </Option>
                                </Select>
                                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"/>
                                <Button type="primary" @click="hendleSearch">搜索</Button>
                                <Button type="default" @click="hendleReset">重置</Button>
                                <Button type="default" class="fr" @click="download">下载</Button>
                            </div>
                            <Table border :loading="loading" :columns="columns" :data="tableData"
                                @on-sort-change="hendleSort">
                            </Table>
                            <div class="tableFooter">
                                <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                                <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                                    show-sizer show-elevator class="fr"
                                    @on-change="v=>{hendleGopage(v)}"
                                    @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                                </Page>
                                <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                            </div>
                        </div>
                    </script>
                    <script type="text/js">
                        import { extend, extendF } from '@/utils/object'
                        import { debounce, nothing } from '@/utils/function'
                        import { h, saveParamState, getParamState } from '@/tools' /* 自定义常用工具 */
                        import tab from './205tab'

                        export default {
                            components: { tab },
                            data () {
                                return {
                                    dataSet: {
                                        'taskPriorityList': [],
                                        'taskStatuList': []
                                    },
                                    search: {
                                        'taskPriority': '', /* 级别 0:一般 1：重要 2：紧急 */
                                        'businessName': '', /* 想搜索的业务名称 */
                                        'taskStatus': '' /* 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停 */
                                    },
                                    loading: false,
                                    page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, /* 分页 变量名最好原样 */
                                    order: { orderKey: '', order: '' }, /* 排序 变量名最好原样 */
                                    columns: [ /* 必须指定最小宽度 */
                                        {title: '任务编号', minWidth: 100, key: 'taskNumber', sortable: true},
                                        {title: '发布人', minWidth: 100, key: 'founder', sortable: true},
                                        {title: '发布日期', minWidth: 100, key: 'foundTime', sortable: true},
                                        {title: '负责人', minWidth: 100, key: 'personLiable'},
                                        {title: '计划完成日期', minWidth: 100, key: 'completeTime', render: h.defaultH('completeTime')},
                                        {title: '优先级', minWidth: 100, key: 'taskPriority'},
                                        {title: '状态', minWidth: 100, key: 'taskStatus'}
                                    ],
                                    'serrchParam': null, /* 实际搜索项 */
                                    'serrchBack': null, /* 搜索项备份 */
                                    'tableData': [], /* 表格内容 */
                                    end1: 1 /* 防呆设计 */
                                }
                            },
                            methods: {
                                getDataSet () { /* 初始化数据源 */
                                    this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
                                    this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
                                },
                                download: debounce(function () { /* 操作 任何操作将重置搜索项 */
                                    this.hendleSearch()
                                }),
                                init () { /* 初始化 */
                                    if (!this.serrchParam) {this.serrchParam = {}} /* 下发参数 */
                                    if (!this.serrchBack) {this.serrchBack = extend({}, this.search)} /* 备份 */
                                    const query = getParamState()
                                    extend(this.search, query) /* 设置表现搜索项成url缓存 */
                                    extendF(this.page, query)
                                    extendF(this.order, query)
                                    this.ajax()
                                },
                                hendleSearch () { /* 搜索
                                    extend(this.serrchParam, this.search) /* 设置实际搜索项成表现搜索项 */
                                    this.hendleGopage(1)
                                },
                                hendleReset () { /* 重置 */
                                    extend(this.search, this.serrchBack) /* 重置表现搜索项成备份搜索项 */
                                    this.hendleSearch()
                                },
                                hendleGopage (page) { /* 跳转页 */
                                    extendF(this.search, this.serrchParam) /* 恢复表现搜索项成实际搜索项 */
                                    this.page.pageIndex = page
                                    this.ajax()
                                },
                                hendleSort (param) { /* 排序功能 */
                                    /* column 当前列数据 */
                                    /* key 排序依据的指标 */
                                    /* order 排序的顺序 值为 asc 或 desc */
                                    this.order.orderKey = param.key
                                    this.order.order = param.order
                                    this.ajax()
                                },
                                ajax: function () { /* 业务ajax */
                                    extend(this.serrchParam, this.search) /* 设置实际搜索项 */
                                    extend(this.serrchParam, this.page) /* 设置分页
                                    extend(this.serrchParam, this.order) /* 设置排序
                                    saveParamState(this.serrchParam) /* 存url */
                                    this.loading = true /* 加载中 */
                                    this.$api.task.listMine(this.serrchParam) /* 发送ajax */
                                        .then((info) => {
                                            this.loading = false; /* 加载完成 */
                                            this.tableData = info.list
                                            this.page.rowCount = info.rowcount
                                        })
                                },
                                end2: nothing /* 防呆设计 */
                            },
                            mounted: function () {
                                this.init(this)
                                this.getDataSet()
                            }
                        }
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">用户反映注意的点</div>
                <div class="blogContent" v-highlight>
                    <p>2018年6月12日08:30:00 测试提出bug "搜索后的内容应该回归第一页" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 列明交叉影响 </p>
                    <p>2019年3月5日12:59:53 产品提出需求 "去掉某些功能项连带的逻辑(为保密)" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 各种功能项的作用必须能从名字看出来 </p>
                    <p>2019年12月3日13:46:55 运营反应 "不小心输入的空格总会影响搜索结果" </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 解决方案 v-model.trim </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">表格页 搜索/排序/分页/操作 的交叉影响</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 流程已完善 </p>
                    <p>1 初始化的时候 给表面搜索项深拷贝两份 <font color="red">一个是实际搜索项 一个是备份 </font></p>
                    <p>2 用户点击搜索按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 分页置为1 刷新页面 </p>
                    <p>3 用户点击排序按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 分页置为1 刷新页面 </p>
                    <p>4 用户点击操作按钮例如导出时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 不关分页 刷新页面 </p>
                    <p>5 用户点击分页时候 <font color="red">实际搜索项拷贝给表面搜索项</font> 刷新页面 </p>
                    <p>6 本来想直接在data声明一个大对象来处理所有表格相关的内容和方法 似乎作用域不支持这样做 this在对象声明时候就绑定了</p>
                    <p>6 即 ()=>{} 可以是this绑定在外 但是如果{}对象中使用 其对象就是this</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">开发要求</div>
                <div class="blogContent" v-highlight>
                    <p>1 能用箭头函数的/杜绝使用<b>var me = this</b></p>
                    <p>2 写HTML时候属性超过3个的话/建议换行/每行3/4/5个属性 其中vif vfor 指令提前</p>
                    <p>3 精简所有用到的组件 为模板化配凑做准备</p>
                    <p>4 声明data 按照功能划分 搜索项/分页/排序/表格列属性</p>
                    <p>5 声明method 按照需要 首先放置 goto所有可能跳转 然后 hendleAjax, hendleSearch, hendleSort, hendlePage</p>
                    <p>6 代码堆之间使用分隔符</p>
                    <p>7 ajax必须调用this.$api使用 参数转换/请求必须放在api模块</p>
                    <p>8 表格页作为最常用的第一层页面 其alert/comfime 请用js调用 其model请封装插件引入调用方便修改</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">约定俗成编码规则</div>
                <div class="blogContent" v-highlight>
                    <p class="text-danger">1 本规范定义与2019年10月19日 如和旧版本冲突默认遵守本版本</p>
                    <p class="text-danger">2 因为有了mode编译压缩 所有变量/方法/临时方法 必须写注释</p>
                    <p class="text-danger">3 vue编程templete必须放第一位 方便第一眼看出来这是什么页面</p>
                    <p class="text-danger">3 vue编程script必须放第二位 其vue各个属性按照eslint规律排列</p>
                    <p class="text-danger">3 vue编程style必须放第三位 必须scoped 其样式模块化 零散样式进入样式库</p>
                    <p class="text-danger">4 vue编程tab必须抽取组件</p>
                    <p class="text-danger">5 编码风格因人而异 不再强求 但要保证第一要点 易读</p>
                    <p class="text-danger">5 易读的描述 缩进必须严谨 能一行写就一行 不要太长 多写注释</p>
                    <p class="text-danger">6 所有的绑定事件触发的函数统一 hendleXxxx命名 按堆排放</p>
                    <p class="text-danger">6 所有的绑定变量按堆排放 例如表格变量都放在obj中</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">统一化写法带来的好处</div>
                <div class="blogContent" v-highlight>
                    <p>1 方便了互相抄袭 复制粘贴永远是编码最简便的方式</p>
                    <p>2 方便了后来接手的人更加容易的切入主题</p>
                    <p>3 方便了统一化的单元测试的写法 初始值/搜索项/分页/排序/单按钮跳转/复位</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"/>
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
                <Button type="default" class="fr" @click="download">下载</Button>
            </div>
            <Table border :loading="loading" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
            </Table>
            <div class="tableFooter">
                <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                    show-sizer show-elevator class="fr"
                    @on-change="v=>{hendleGopage(v)}"
                    @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                </Page>
                <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import tab from './205tab'

export default {
    components: { tab },
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'businessName': '', /* 想搜索的业务名称 */
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns: [ // 必须指定最小宽度
                {title: '任务编号', minWidth: 100, key: 'taskNumber', sortable: true},
                {title: '发布人', minWidth: 100, key: 'founder', sortable: true},
                {title: '发布日期', minWidth: 100, key: 'foundTime', sortable: true},
                {title: '负责人', minWidth: 100, key: 'personLiable'},
                {title: '计划完成日期', minWidth: 100, key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', minWidth: 100, key: 'taskPriority'},
                {title: '状态', minWidth: 100, key: 'taskStatus'}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            this.hendleSearch()
        }),
        init () { // 初始化
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            if (!this.serrchBack) {this.serrchBack = extend({}, this.search)} // 备份
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
        },
        hendleSearch () { // 搜索
            extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
            this.hendleGopage(1)
        },
        hendleReset () { // 重置
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleGopage (page) { // 跳转页
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        hendleSort (param) { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.serrchParam) // 发送ajax
                .then((info) => {
                    this.loading = false; // 加载完成
                    this.tableData = info.list
                    this.page.rowCount = info.rowcount
                })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
