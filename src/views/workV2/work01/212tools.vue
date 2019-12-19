<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">将超级常用的操作封装起来 目的是风格统一和代码集中</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 绝妙 要求合作开发者必须配合</p>
                <p>
                    信息提示统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryalert('处理进行中')">this.$tool.alert('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryalert2('处理进行中')">this.$tool.alertMsg('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryalert3('处理进行中')">this.$tool.alertMsg('处理进行中', 0, () => { alert('同意'); })</Button>
                </p>
                <p>
                    ajax成功统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="trysuccess('基本成功')">this.$tool.success('基本成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="trysuccess()">this.$tool.success()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="trysuccess2('基本成功')">this.$tool.successMsg('基本成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="trysuccess2()">this.$tool.successMsg()</Button>
                </p>
                <p>
                    ajax失败统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryerror('基本失败')">this.$tool.error('基本失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryerror()">this.$tool.error()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryerror2('基本失败')">this.$tool.errorMsg('基本失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryerror2()">this.$tool.errorMsg()</Button>
                </p>
                <p>
                    警告
                    <Divider type="vertical" />
                    <Button type="dashed" @click="warningMsg('您的电脑要爆炸了')">this.$tool.warningMsg('您的电脑要爆炸了')</Button>
                </p>
                <p>
                    用户选择确认
                    <Divider type="vertical" />
                    <Button type="dashed" @click="tryconfirm()">this.$tool.confirm('这样操作可以么').then(() => { alert('同意') }).catch(() => { alert('不同意') })</Button>
                </p>
                <p>
                    页面跳转统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="jumpto()">this.$tool.jumpto()</Button>
                </p>
                <p>
                    参数不再存url存store(间接存ls)统一使用 {{paramState}}
                    <Divider type="vertical" />
                    <Button type="dashed" @click="saveParamState()">this.$tool.saveParamState(obj)</Button>
                </p>
                <p>
                    参数不再取url取store(间接存ls)统一使用 {{paramState}}
                    <Divider type="vertical" />
                    <Button type="dashed" @click="getParamState()">this.$tool.getParamState()</Button>
                </p>
                <p>
                    顶部进度条
                    <Divider type="vertical" />
                    <Button type="dashed" @click="LoadingBarRun(true)">LoadingBarRun(true)</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="LoadingBarRun(false)">LoadingBarRun(false)</Button>
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
            paramState: {x: 123}
        }
    },
    methods: {
        tryalert (msg) { this.$tool.alert(msg) },
        tryalert2 (msg) { this.$tool.alertMsg(msg) },
        tryalert3 (msg) { this.$tool.alertMsg(msg, 0, () => { alert('同意'); }) },
        trysuccess (msg) { this.$tool.success(msg) },
        trysuccess2 (msg) { this.$tool.successMsg(msg) },
        tryerror (msg) { this.$tool.error(msg) },
        tryerror2 (msg) { this.$tool.errorMsg(msg) },
        tryconfirm () { this.$tool.confirm('这样操作可以么').then(() => { alert('同意'); }).catch(() => { alert('不同意') }) },
        jumpto () { this.$tool.jumpto(homePage) },
        warningMsg (msg) { this.$tool.warningMsg(msg) },
        saveParamState () { this.$tool.saveParamState({x: (+new Date())}) },
        getParamState () { this.paramState = this.$tool.getParamState() },
        LoadingBarRun (b) { this.$tool.LoadingBarRun(b) }
    }
}
</script>
