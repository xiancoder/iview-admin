<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">表单v10的DHC</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p> <Button type="default" @click="goto('workV2_work07table_272formV10DHC$add1')">表单v10的DHC添加普通表单 / 272formV10DHC$add1</Button> </p>
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
import { goto } from '@/tools' // 自定义常用工具

export default {
    mixins: [{methods: {goto}}],
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
