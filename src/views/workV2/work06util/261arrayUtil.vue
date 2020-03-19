<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">公共方法 - 数组 - 常用逻辑 列举</div>
            <Divider orientation="right">项目在公共方法上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 原数组 : {{ v1 }}</p>
                <p><Icon type="md-checkmark" style="color:green"/> 去重后的 : {{ v2 }}</p>
                <script type="text/js">
                    v2: uniqueObj(x)
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
import { uniqueObj } from '@/utils/array'

const x = [{id: 1}, {id: 2}, {id: 1}]

export default {
    data () {
        return {
            v1: x,
            v2: uniqueObj(x)
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
