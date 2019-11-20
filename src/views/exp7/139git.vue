<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">分支管理流程 各种情况的处理预案</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <p>master分支 负责线上最新代码/不在担任备份功能</p>
                <p>release分支 负责备份上次发布的代码</p>
                <p>dev.x分支 负责开发新代码</p>
                <hr />
                <p>1 master分支(空) release分支(空) 创建dev.aaa分支</p>
                <p>2 dev.aaa开发新代码</p>
                <p>3 dev.aaa开发完成</p>
                <p>4 dev.aaa分支合并入master分支(aaa) <del>对比dev.aaa分支 和 release分支(空)</del></p>
                <p>5 将新代码复制到测试服务器 (随意一些) 发布测试</p>
                <p>6 测试完成</p>
                <p>7 对比master分支(aaa) 和 release分支(空) 导出不同</p>
                <p>8 将不同的那些文件覆盖至正式服务器 发布 有错误的话 弥补使用release分支</p>
                <p>9 正式 线上回测</p>
                <p>0 回测通过 release分支 打tag(aaa)</p>
                <p>1 master分支(aaa)合并入release分支(aaa)</p>
                <p>2 master分支(aaa)拉取新开发分支dev.bbb</p>
                <p>3 dev.bbb开发新代码</p>
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
