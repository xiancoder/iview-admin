<template>
    <div>
        <div class="blog">
            <div class="blogTitle">各种功能弹框 in @/tools</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Button type="default" @click="confirm">confirm</Button>
                <Button type="default" @click="alertMsg">alertMsg</Button>
                <Button type="default" @click="errorMsg">errorMsg</Button>
                <Button type="default" @click="successMsg">successMsg</Button>
                <Button type="default" @click="warningMsg">warningMsg</Button>
                <script type="text/js">
                    import { confirm, alertMsg, errorMsg, successMsg, warningMsg } from '@/tools'
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">各种功能弹框</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <Button type="default" @click="hendleInfo">hendleInfo</Button>
                <Button type="default" @click="hendleSuccess">hendleSuccess</Button>
                <Button type="default" @click="hendleWarning">hendleWarning</Button>
                <Button type="default" @click="hendleError">hendleError</Button>
                <Button type="default" @click="hendleConfirm">hendleConfirm</Button>
                <script type="text/js">
                    hendleInfo () { this.$Modal.info({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
                    hendleSuccess () { this.$Modal.success({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
                    hendleWarning () { this.$Modal.warning({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
                    hendleError () { this.$Modal.error({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
                    hendleConfirm () { this.$Modal.confirm({ title: '核对考勤', content: '确认考勤无误吗？', loading: true, onOk: () => { alert('ok'); this.$Modal.remove() } }) }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">信息弹框 最最最好不要在想 需要时候new一个 方式</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-close" style="color:red"/> 思路本身就错了 这种类似jq的先定位在操作的思想</p>
                    <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:52:11 确认 不再这样想 所有的提示使用公共tool 所有的弹框单独编写</p>
                    <h3>如何使用vue.js构造modal(弹窗)组件?</h3>
                    <p>问题就是,构造一个modal组件,如何在需要的时候动态异步的插入到dom里</p>
                    <p>作者：尤雨溪</p>
                    <p>大神的观点是 为什么一定要异步插入？</p>
                    <p>其实以前也有一些用户跟我纠结过这个问题，他们觉得一定要在需要的时候创建这个组件才是符合他们思维的做法。在我看来，这是没有理解『状态驱动的界面』的一种表现。</p>
                    <p>作者：柳家忍</p>
                    <p>这道题我要强答一下，虽然 尤雨溪 大神说得非常在理，但是异步加载模态框也很一种很常见的需求，毕竟页面初次渲染的时候模态框部分的资源加载没有啥意义，因为操作完页面都可能用不到模态框，而如果模态框的内容比较重就造成请求资源的浪费了。（或许有时候我们该忽略这种浪费？）</p>
                    <p>作者：骗你是小猫咪</p>
                        <hr />
                    <p>项目用到了大量的modal，正在考虑……主要思路：</p>
                    <p>1. 一个vue文件就是一个modal</p>
                    <p>2. modal可以复用（显示的文字可以通过参数来决定）</p>
                    <p>3. 使用的时候直接this.$modal.要使用的modal框名字</p>
                    <p>4. 这个modal是个promise，这样我就可以根据它的状态来确定我在modal上的状态（确定，取消，关闭啥的）</p>
                    <p>5. 使用者不关心它的层级（z-index）</p>
                    <p>vue提供了use方法来安装插件还是很便利的补充：该插件的用法和angularjs的uiModal很类似，自定义modal模板和逻辑，用的时候直接用过this来使用，并且可以弹窗之上再弹窗，俗称弹弹弹……鱼尾纹</p>
                    <p></p>
                    <p>想歪了 我决定尝试 modal封装组件 需要者自行引入</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { confirm, alertMsg, errorMsg, successMsg, warningMsg } from '@/tools'

export default {
    mixin: [{methods: {confirm, alertMsg, errorMsg, successMsg, warningMsg}}],
    data () {
        return {}
    },
    methods: {
        hendleInfo () { this.$Modal.info({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
        hendleSuccess () { this.$Modal.success({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
        hendleWarning () { this.$Modal.warning({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
        hendleError () { this.$Modal.error({ title: '确认考核', content: '请假时长已超剩余假期时长' }) },
        hendleConfirm () { this.$Modal.confirm({ title: '核对考勤', content: '确认考勤无误吗？', loading: true, onOk: () => { alert('ok'); this.$Modal.remove() } }) }
    },
    mounted: function () {
    }
}
</script>
