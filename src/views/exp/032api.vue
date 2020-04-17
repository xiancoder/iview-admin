<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">api接口的 设计初衷/优点/说明</div>
            <div class="blogContent" v-highlight>
                <p>前端页面方便使用的数据格式 想怎么用怎么用</p>
                <p>api接口调用 指定接口方法和传参</p>
                <p>将数据格式(前端)进行整理 转格式 改变量名 准备提交</p>
                <p>调用axios 指定url method 和 传参</p>
                <p>卫士负责 之前传递header/token</p>
                <p>之后response拦截 负责将status200之外的情况统统剔除 报错 </p>
                <p>返回结果 json构造中的code没有用 不大对应该用上</p>
                <p>方法模块处理返回结果 data中为有效内容 只返回有效数值</p>
                <p>当返回数据有问题时 接口方法报错还是逻辑报错 额再想想</p>
                <p>...</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">接口勾画实践</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p>用户日志 ( 标签页x4 )</p>
                <p>-- list ( 开始日期|结束日期|用户下拉[现成]|带分页 ) 账号联系人操作内容操作时间</p>
                <p>配置记录 ( 标签页x4 ) [现成在其他里面]</p>
                <p>-- list ( 类型下拉|用户下拉[现成]|带分页 ) ID生成时间用户操作人操作类型说明生成状态路径</p>
                <p>跟进记录 ( 标签页x4 ) [有类似的 在用户管理那里]</p>
                <p>-- list ( 开始日期|结束日期|模糊搜索|类型问题分类联动|记录人下拉[现成]|状态下拉|模糊搜索|带分页|有操作 ) 最后修改时间 类型 用户 记录内容 创建时间 创建人 状态 问题分类 最后修改人 操作</p>
                <p>-- detail ( 根据id查 问题列表 )</p>
                <p>-- update ( 问题分类|状态|记录内容|附件 )</p>
                <p>分类维护 ( 标签页x4 )</p>
                <p>-- list ( 不分页|有操作 ) ID 问题分类 类型 描述 操作</p>
                <p>-- delete ( 删除需后台判断 )</p>
                <p>-- add (类型问题分类描述)</p>
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
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
