<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">将常用的操作封装起来 目的是统一和集中</div>
            <div class="blogContent" v-highlight>
                <p>信息提示统一使用 <Button type="dashed" @click="tryalert()">this.$tool.alert('处理进行中')</Button></p>
                <p>ajax成功统一使用 <Button type="dashed" @click="trysuccess('基本成功')">this.$tool.success('基本成功')</Button><Button type="dashed" @click="trysuccess()">this.$tool.success()</Button></p>
                <p>ajax失败统一使用 <Button type="dashed" @click="tryerror('基本失败')">this.$tool.error('基本失败')</Button><Button type="dashed" @click="tryerror()">this.$tool.error()</Button></p>
                <p>页面跳转统一使用 <Button type="dashed" @click="jumpto()">this.$tool.jumpto()</Button></p>
                <p>参数不再存url存ls统一使用 <Button type="dashed">this.$tool.saveParamState(obj)</Button></p>
                <p>参数不再取url取ls统一使用 <Button type="dashed">this.$tool.getParamState()</Button></p>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
        tryalert () { this.$tool.alert('处理进行中') },
        trysuccess (msg) { this.$tool.success(msg) },
        tryerror (msg) { this.$tool.error(msg) },
        tryconfirm () { this.$tool.confirm('这样操作可以么') },
        jumpto () { this.$tool.jumpto() }
    }
}
</script>
