<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Axios的单元测试例</div>
            <div class="blogContent router">
                <p><Icon type="md-checkmark" style="color:green"/> 有效 可行 代码见test文件夹中</p>
                <div class="example axios">
                    <h2 class="example_title">Axios的单元测试例</h2>
                    <app-button size="lg" @click="getData">从后台接口获取数据</app-button>
                </div>
                <p>测试计划与想法</p>
                <p>1 测试人员不能参与我们的单元测试 因为职责不同 也因为我们的单元测试技术有要求</p>
                <p>2 测试人员的测试用例我们不能全覆盖 有技术难点 有流程难点</p>
                <p>3 表单的主流程单元测试应保证 获取mock赋值 取到映射参数 表格项有内容 提交校验通过 mock提交 弹框成功 跳转页面</p>
                <p>4 副流程与组件搭配 下拉框保证取到数据源赋值到位 输入框保证没有空绑定</p>
                <p>5 接口单独测试 无非是请求一个值 看返回不是200就报警</p>
                <p>6 为了单元测试 准备诸多适应性规则配置如下</p>
                <p>--- 1 多触发事件方法的页面必须将不同业务功能写注释 用横线区分开 方便单元测试编写时了解业务</p>
                <p>--- 2 下拉框的数据源获取放在专门的getDataSet方法中 mount调用</p>
                <p>--- 3 严格使用tool的工具方法 禁止私自声明并调用iview提供的方法(非指令)或三方脚本 (tool中转/分享/评审)</p>
                <p>--- 4 后台接口返回格式必须规范 特殊者单独立项 禁止特例</p>
                <p>7 针对单元测试 前端组自行在工作时间节点中定制单元测试回归节点 节省时间</p>
                <p>8 忽然想到 很遗憾 单元测试不管展示性字段和提示文字...</p>
                <p>9 TDD 测试驱动开发 应该比 需求驱动开发 RDD 更规范化 怎么施行???</p>
                <p>10 常用方法的单元测试希望每个人都加入进来 lodash这么nb的库都有问题方法 更别说我们自己收集的</p>
                <p>11 待续</p>
            </div>
        </div>
    </div>
</template>
<script>
import appButton from './036unitTest@addbutton'
export default {
    components: { appButton },
    data () {
        return {
            usersInfo: []
        }
    },
    methods: {
        getData () {
            // 伪造的请求，只是为单元测试提供一个例子
            // 下面的两处return都是为了配合单元测试,方便单元测试
            // 如果没有下面的return.在测试时就无法获取promis和最终请求结果,导致无法进行断言
            return this.$axios.get('/api/hr/employer')
                .then(res => { this.usersInfo = res.data; return res })
                .catch(e => e)
        }
    }
}
</script>
