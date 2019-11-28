<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 弹窗表单</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:red"/> 请将弹窗表单中的表单作为组件引入 而非直接在本页面中编写 (杜绝又臭又长)</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日18:07:07 更新 如果逻辑复杂超过两三个输入框 最好独立出来</p>
                    <script type="text/html">
                        <Modal v-model="model.show1" title="下线" :closable="false" :mask-closable="false" footer-hide>
                            <from1 :startDate="startDate" @on-submit="handleSubmit1"/>
                        </Modal>
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
                <Select v-model="yunxiTable.search.taskPriority" placeholder="请选择任务级别">
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="yunxiTable.search.taskStatus" placeholder="请选择任务状态">
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="default" @click="model.show1=true">点击弹出表单</Button>
                <Button type="default" @click="gogo">辅助-表单跳过去看看</Button>
            </div>
        </div>
        <Modal v-model="model.show1" title="下线" :closable="false" :mask-closable="false" footer-hide>
            <from1 :startDate="startDate" @on-submit="handleSubmit1"/>
        </Modal>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import from1 from './014from1'
export default {
    data () {
        const yunxiTable = { // 有用内容
            'search': {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            }
        }
        return {
            yunxiTable,
            model: {
                show1: false
            },
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            startDate: new Date(2019, 3, 4),
            end1: 1 // 防呆设计
        }
    },
    components: {
        from1
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        handleSubmit1 (res) { // 表单1 提交完毕
            this.model.show1 = false
            if (res === 1) {
                this.yunxiTable.ajax()
            }
        },
        gogo (res) { // 表单1 提交完毕
            const name = 'exp1_014from1'
            this.$router.push({name})
        }
    },
    mounted: function () {
        this.getDataSet()
    }
}
</script>
