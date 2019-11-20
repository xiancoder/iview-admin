<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格搜索项写法</div>
                <div class="blogContent" v-highlight>
                    <p>1 表格搜索项 输入框 无默认值 最简单</p>
                    <script type="text/js">
                        search: {
                            'input1': '', // 输入框
                        },
                    </script>
                    <script type="text/html">
                        <Input v-model="search.input1" style="width: 180px;" type="text" placeholder="输入框"/>
                    </script>
                    <p>2 表格搜索项 下拉框 select 需要三部分</p>
                    <script type="text/js">
                        dataSet: {
                            'select1': [],
                        },
                        search: {
                            'select1': '', // 级别 0:一般 1：重要 2：紧急
                        },
                    </script>
                    <script type="text/html">
                        <Select v-model="search.select1" placeholder='请选择任务级别'>
                            <Option v-for="option in dataSet.select1" :label="option.name"
                                :value="option.id" :key="option.id" >
                            </Option>
                        </Select>
                    </script>
                    <p class="text-danger">使用前需要初始化</p>
                    <script type="text/js">
                        methods: {
                            getDataSet () { // 初始化数据源
                                this.$api.task.priority().then(list => { this.dataSet.select1 = list })
                            },
                        },
                        mounted: function () {
                            this.getDataSet()
                        }
                    </script>
                    <p>2 表格搜索项 日期范围 需要两部分</p>
                    <script type="text/js">
                        let today = new Date() // 常用的是前七天
                        search: {
                            'end': dateFormater(today, 'yyyy-MM-dd'),
                            'begin': dateFormater(dateSub(today, 6, 'd'), 'yyyy-MM-dd'),
                        },
                    </script>
                    <script type="text/html">
                        <DatePicker :value="[search.begin,search.end]" format="yyyy-MM-dd" type="daterange"
                            @on-change="search.begin=$event[0];search.end=$event[1];" style="width: 180px;"
                            placeholder="请选择时间区间">
                        </DatePicker>
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool">
                <Input v-model="search.input1" style="width: 180px;" type="text" placeholder="输入框"/>
                <Select v-model="search.select1" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.select1" :label="option.name"
                        :value="option.id" :key="option.id" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <DatePicker :value="[search.begin,search.end]" format="yyyy-MM-dd" type="daterange"
                    @on-change="search.begin=$event[0];search.end=$event[1];" style="width: 180px;" placeholder="请选择时间区间">
                </DatePicker>
                <Button type="primary" >搜索</Button>
                <Button type="default" >重置</Button>
                <Button type="default" class="pull-right">下载</Button>
            </div>
            <br>
            {{search}}
        </div>
    </div>
</template>
<script>
import { nothing } from '@/utils/function'
import { dateFormat, dateSub } from '@/utils/date'
export default {
    data () {
        let today = new Date() // 常用的是前七天
        return {
            dataSet: {
                'select1': [],
                'taskStatuList': []
            },
            search: {
                'input1': '', // 输入框
                'select1': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '', // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                'end': dateFormat(today),
                'begin': dateFormat(dateSub(today, 6, 'd'))
            },
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.getDataSet()
    }
}
</script>
