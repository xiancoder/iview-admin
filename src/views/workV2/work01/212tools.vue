<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">将超级常用的操作封装起来 目的是风格统一和代码集中</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 绝妙 要求合作开发者必须配合</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <hr />
                <p>页面信息提示 小的需要一闪而过的信息</p>
                <p>
                     统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.alert('处理进行中')">this.$tool.alert('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.success('ajax处理成功')">this.$tool.success('ajax处理成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.success()">this.$tool.success() 有默认值</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.error('ajax处理失败')">this.$tool.error('ajax处理失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.error()">this.$tool.error() 有默认值</Button>
                </p>
                <hr />
                <p>页面信息提示 大的需要用户看清楚的信息</p>
                <p>
                     统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.alertMsg('处理进行中')">this.$tool.alertMsg('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.alertMsg('处理进行中', 0, () => { alert('同意'); })">this.$tool.alertMsg('处理进行中', 0, () => { alert('同意'); }) 加上回调方法</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.successMsg('基本成功')">this.$tool.successMsg('基本成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.successMsg()">this.$tool.successMsg()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.errorMsg('基本失败')">this.$tool.errorMsg('基本失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.errorMsg()">this.$tool.errorMsg()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.warningMsg('您的电脑要爆炸了')">this.$tool.warningMsg('您的电脑要爆炸了')</Button>
                </p>
                <hr />
                <p>页面信息提示 需要用户确认信息</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.confirm('这样操作可以么').then(() => { alert('同意') }).catch(() => { alert('不同意') })">this.$tool.confirm('这样操作可以么').then(() => { alert('同意') }).catch(() => { alert('不同意') })</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.noticeNoSave()">$tool.noticeNoSave() 未保存二次确认框</Button>
                </p>
                <hr />
                <p>页面跳转路由</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.jumpto(homePage)">this.$tool.jumpto(homePage)</Button>
                </p>
                <hr />
                <p>表格数据的参数批量管理 存url</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="saveParamState()">this.$tool.saveParamState(obj)</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="getParamState()">this.$tool.getParamState()</Button>
                </p>
                <hr />
                <p>顶部进度条全局控制</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.LoadingBarRun(true)">$tool.LoadingBarRun(true)</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="$tool.LoadingBarRun(false)">$tool.LoadingBarRun(false)</Button>
                </p>
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
import { homePage } from '@/router/routers'
export default {
    data () {
        return {
            paramState: {x: 123},
            homePage
        }
    },
    methods: {
        saveParamState () { this.$tool.saveParamState({x: (+new Date())}) },
        getParamState () { this.paramState = this.$tool.getParamState() }
    }
}
</script>
