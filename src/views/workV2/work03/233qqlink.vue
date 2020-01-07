<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">深链接:网页发起调用QQ聊天</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 2020年1月7日15:38:10 截止当前 代码有效</p>
                <p><Icon type="md-close" style="color:red"/> 如果浏览器发起QQ软件调用 即可认为代码有效 </p>
                <p><Icon type="md-close" style="color:red"/> 如果你不装软件 它是不会打开或者提醒你的 </p>
                <ul class="lianxiwomen">
                    <li onclick="location.href='tencent://Message/?Uin=2503235296&amp;websiteName=q-zone.qq.com&amp;Menu=yes';">商务合作 <i class="fa fa-qq" style="color:red"></i>:1141635588 (少飞)</li>
                    <li onclick="location.href='tencent://Message/?Uin=1209785588&amp;websiteName=q-zone.qq.com&amp;Menu=yes';">技术支持 <i class="fa fa-qq" style="color:yellow"></i>:1209785588</li>
                    <li onclick="location.href='tencent://Message/?Uin=1105245588&amp;websiteName=q-zone.qq.com&amp;Menu=yes';">投诉建议 <i class="fa fa-qq" style="color:blue"></i>:1105245588</li>
                </ul>
                <script type="text/html" v-pre>
                    <li onclick="location.href='tencent://Message/?Uin=1105245588&amp;websiteName=q-zone.qq.com&amp;Menu=yes';">投诉建议 <i class="fa fa-qq" style="color:blue"></i>:1105245588</li>
                </script>
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
<style scoped>
    ul.lianxiwomen{}
    ul.lianxiwomen li {position: relative;padding-left: 24px;padding-right: 100px;font-size: 15px;letter-spacing: 1px;line-height: 33px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;cursor: pointer;}
</style>
