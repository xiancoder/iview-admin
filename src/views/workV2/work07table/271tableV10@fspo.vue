<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>新的模版</small><b>新的模版</b></h2>
            </div>
            <tab></tab>
        </div>
        <div class="blogCss">
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
        </div>
    </div>
</template>
<script>
import tab from './271tableV10'

export default {
    name: 'workV2_work07table_271tableV10_fspo', // 如果想用缓存必须声明页面name
    components: { tab },
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
