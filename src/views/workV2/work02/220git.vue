<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">分支管理流程 各种情况的处理预案</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p><b>master分支</b> 负责线上最新代码/不再担任备份功能</p>
                <p><b>release分支</b> 负责备份上次发布的代码</p>
                <p><b>dev.x分支</b> 负责开发新代码</p>
                <hr />
                <p>1 初始代码创建流程</p>
                <p><b>默认master分支,创建release分支</b> ➜ <b>master开发完成</b> ➜ <b>发布上线</b> ➜ <b>线上回测通过</b> ➜ <b>master合并入release</b></p>
                <hr />
                <p>2 开发新需求</p>
                <p><b>创建dev.1分支</b> ➜ <b>dev.1开发完成</b> ➜ <b>dev.1合并入master</b> ➜ <b>发布上线</b> ➜ <b>线上回测通过</b> ➜ <b>master合并入release</b></p>
                <hr />
                <p>3 线上急改</p>
                <p><b>修改master</b> ➜ <b>发布上线</b> ➜ <b>线上回测通过</b> ➜ <b>master合并入release</b></p>
                <hr />
                <p>4 发布上线</p>
                <p><b>旧版不打包的话 使master,release两分支做对比 只发不同</b></p>
                <hr />
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">分支管理流程 各种情况的处理预案</div>
            <div class="blogContent" v-highlight>
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
