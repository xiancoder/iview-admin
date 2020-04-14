<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 搜索项 用法规范</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范1 订立api的时候对枚举变量一定不要使用0 (使用0来代表全部)</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范2 每行最多5个控件 再多请换行 右侧最多4个按钮 再多请换行</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 规范3 api模块中不要写关于枚举0的内容 枚举0写入select标签内</p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                    <script type="text/html" v-pre>
                        <div class="tableTool" @keyup.enter.stop="hendleSearch">
                            <DatePicker type="month" :value="search.date" placeholder="选择日期" format="yyyy-MM"
                                @on-change="(date)=>{search.date=date}" style="width: 150px">
                            </DatePicker>
                            <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期"
                                @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
                            </DatePicker>
                            <Select v-model="search.taskPriority" filterable placeholder="请选择任务级别" style="width: 150px">
                                <Option value="all" label="全部任务级别"></Option>
                                <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                                </Option>
                            </Select>
                            <Select v-model="search.taskStatus" placeholder="请选择任务状态">
                                <Option value="all" label="全部任务状态"></Option>
                                <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                                </Option>
                            </Select>
                            <Button type="default" class="fr" @click="download">下载</Button>
                            <br />
                            <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"
                            />
                            <Button type="primary" @click="hendleSearch">搜索</Button>
                            <Button type="default" @click="hendleReset">重置</Button>
                        </div>
                    </script>
                    <script type="text/js">
                        export default {
                            components: { tab },
                            data () {
                                const start2end = sevenRange()
                                const date = todayMouth()
                                return {
                                    dataSet: {
                                        'taskPriorityList': [],
                                        'taskStatuList': []
                                    },
                                    search: {
                                        date, // 日期 yyyy-mm
                                        start2end, // 日期范围 yyyy-mm-dd
                                        state: 'all', // 状态 0失败1成功
                                        // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                                        // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                                        // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                                        // 建议 使用空值来初始显示 (虽然不大爽)
                                        'taskPriority': '', // 级别 0全部1一般2重要3紧急
                                        'taskStatus': '', // 任务状态 0全部1待接受2执行中3待验收4验收通过5已废弃6已暂停
                                        'businessName': '' /* 想搜索的业务名称 */
                                    },
                                    'serrchParam': null, // 实际搜索项
                                    'serrchBack': null, // 搜索项备份
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
                                hendleSearch () { // 搜索
                                    extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
                                },
                                hendleReset () { // 重置
                                    extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
                                    this.hendleSearch()
                                },
                                end2: nothing // 防呆设计
                            },
                            mounted: function () {
                                this.getDataSet()
                            }
                        }
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <DatePicker type="month" :value="search.date" placeholder="选择日期" format="yyyy-MM"
                    @on-change="(date)=>{search.date=date}" style="width: 150px">
                </DatePicker>
                <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期"
                    @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
                </DatePicker>
                <Select v-model="search.taskPriority" filterable placeholder="请选择任务级别" style="width: 150px">
                    <Option value="all" label="全部任务级别"></Option>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择任务状态">
                    <Option value="all" label="全部任务状态"></Option>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="default" class="fr" @click="download">下载</Button>
                <br />
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"
                />
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, debounce, nothing, sevenRange, todayMouth } from '@/utils'
import tab from './205tab'

export default {
    components: { tab },
    data () {
        const start2end = sevenRange()
        const date = todayMouth()
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                date, // 日期 yyyy-mm
                start2end, // 日期范围 yyyy-mm-dd
                state: 'all', // 状态 0失败1成功
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'taskPriority': '', // 级别 0全部1一般2重要3紧急
                'taskStatus': '', // 任务状态 0全部1待接受2执行中3待验收4验收通过5已废弃6已暂停
                'businessName': '' /* 想搜索的业务名称 */
            },
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
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
        hendleSearch () { // 搜索
            extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
        },
        hendleReset () { // 重置
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.getDataSet()
    }
}
</script>
