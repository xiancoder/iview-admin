<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">将超级常用的操作封装起来 目的是风格统一和代码集中</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 绝妙 要求合作开发者必须配合</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p><Icon type="md-checkmark" style="color:green"/> 在三考虑 决定放弃 $tool 挂载到vue 的想法 一句想调用必须使用 import 来引入</p>
                <hr />
                <p>页面信息提示 小的需要一闪而过的信息</p>
                <p>
                     统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.alert('处理进行中')">alert('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.success('ajax处理成功')">success('ajax处理成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.success()">success() 有默认值</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.error('ajax处理失败')">error('ajax处理失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.error()">error() 有默认值</Button>
                </p>
                <hr />
                <p>页面信息提示 大的需要用户看清楚的信息</p>
                <p>
                     统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.alertMsg('处理进行中')">alertMsg('处理进行中')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.alertMsg('处理进行中', 0, () => { })">alertMsg('处理进行中', 0, () => { /*dosomething*/ }) 加上回调方法</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.alertMsg('金强 , 陈秀兰 , 余秀兰 , 董强 , 孟杰 , 康刚 , 胡涛 , 熊娜 , 梁静 , 史静 , 白刚 , 段勇 , 戴伟 , 雷洋 , 程明 , 杜秀兰 , 吴静 , 姚军 , 陆娟 , 曹静 , 曾娟 , 黎杰 , 吕平 , 万艳 , 傅勇 , 刘桂英 , 许明 , 高丽 , 黄娟 , 钱艳 , 江涛 , 武艳 , 冯伟 , 唐艳 , 徐霞 , 陆娟 , 沈平 , 顾强 , 余涛 , 萧娜 , 锺勇 , 阎霞 , 邹刚 , 夏强 , 段桂英 , 万芳 , 丁杰 , 孔丽 , 傅秀英 , 陈磊 , 史静 , 顾涛 , 范明 , 戴秀英 , 万强 , 彭洋 , 唐霞 , 金娜 , 杨娜 , 宋丽 , 戴涛 , 顾洋 , 李秀英 , 锺秀英 , 董艳 , 傅刚 , 高芳 , 孔洋 , 罗娜 , 韩超 , 曾秀兰 , 姚敏 , 郭秀英 , 曹丽 , 王秀英 , 赖霞 , 韩丽 , 韩磊 , 黎丽 , 冯平 , 孙平 , 郝强 , 朱伟 , 贺超 , 常杰 , 龙涛 , 邵明 , 黎娜 , 许敏 , 文伟 , 蔡伟 , 林超 , 张丽 , 林涛 , 顾勇 , 马秀英 , 蔡丽 , 侯娟 , 卢敏 , 沈娜')">alertMsg('大量数据')</Button>
                    <Button type="dashed" @click="mask=true">alertMsg('大量数据 这个比较好看')</Button>
                    <Modal v-model="mask" :title="'嘎嘎嘎'" :closable="false" width="600">
                        <div class="mask_table">
                            金强 , 陈秀兰 , 余秀兰 , 董强 , 孟杰 , 康刚 , 胡涛 , 熊娜 , 梁静 , 史静 , 白刚 , 段勇 , 戴伟 , 雷洋 , 程明 , 杜秀兰 , 吴静 , 姚军 , 陆娟 , 曹静 , 曾娟 , 黎杰 , 吕平 , 万艳 , 傅勇 , 刘桂英 , 许明 , 高丽 , 黄娟 , 钱艳 , 江涛 , 武艳 , 冯伟 , 唐艳 , 徐霞 , 陆娟 , 沈平 , 顾强 , 余涛 , 萧娜 , 锺勇 , 阎霞 , 邹刚 , 夏强 , 段桂英 , 万芳 , 丁杰 , 孔丽 , 傅秀英 , 陈磊 , 史静 , 顾涛 , 范明 , 戴秀英 , 万强 , 彭洋 , 唐霞 , 金娜 , 杨娜 , 宋丽 , 戴涛 , 顾洋 , 李秀英 , 锺秀英 , 董艳 , 傅刚 , 高芳 , 孔洋 , 罗娜 , 韩超 , 曾秀兰 , 姚敏 , 郭秀英 , 曹丽 , 王秀英 , 赖霞 , 韩丽 , 韩磊 , 黎丽 , 冯平 , 孙平 , 郝强 , 朱伟 , 贺超 , 常杰 , 龙涛 , 邵明 , 黎娜 , 许敏 , 文伟 , 蔡伟 , 林超 , 张丽 , 林涛 , 顾勇 , 马秀英 , 蔡丽 , 侯娟 , 卢敏 , 沈娜
                        </div>
                        <div slot="footer">
                            <Button type="primary" @click="mask=false">确定</Button>
                        </div>
                    </Modal>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.successMsg('基本成功')">successMsg('基本成功')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.successMsg()">successMsg()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.errorMsg('基本失败')">errorMsg('基本失败')</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.errorMsg()">errorMsg()</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.warningMsg('您的电脑要爆炸了')">warningMsg('您的电脑要爆炸了')</Button>
                </p>
                <hr />
                <p>页面信息提示 需要用户确认信息</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.confirm('这样操作可以么').then(() => { }).catch(() => { })">confirm('这样操作可以么').then(() => { /*dosomething*/ }).catch(() => { /*dosomething*/ })</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.noticeNoSave()">toolJs.noticeNoSave() 未保存二次确认框</Button>
                </p>
                <hr />
                <p>页面跳转路由</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.jumpto(homePage)">jumpto(homePage)</Button>
                </p>
                <hr />
                <p>表格数据的参数批量管理 存url</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="saveParamState()">saveParamState(obj)</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="getParamState()">getParamState()</Button>
                </p>
                <hr />
                <p>顶部进度条全局控制</p>
                <p>
                    统一使用
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.LoadingBarRun(true)">toolJs.LoadingBarRun(true)</Button>
                    <Divider type="vertical" />
                    <Button type="dashed" @click="toolJs.LoadingBarRun(false)">toolJs.LoadingBarRun(false)</Button>
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
import * as tools from '@/tools'

export default {
    data () {
        return {
            toolJs: tools,
            paramState: {x: 123},
            homePage,
            mask: false
        }
    },
    methods: {
        saveParamState () { tools.saveParamState({x: (+new Date())}) },
        getParamState () { this.paramState = tools.getParamState() }
    }
}
</script>
