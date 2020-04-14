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
                <p><Icon type="md-checkmark" style="color:green"/> 如何在不改变引用传递地址的情况下 批量改变某个引入数组变量</p>
                <p><Icon type="md-checkmark" style="color:green"/> 666 apply 方法</p>
                <script type="text/js">
                    var x1 = [1,2,3,4]
                    var x2 = x1
                    var x3 = x1
                    var y1 = [5,6,7,8]
                    x2 = y1
                    Array.prototype.push.apply(x3, y1)
                    console.log(x1) // [1, 2, 3, 4, 5, 6, 7, 8]
                    console.log(x2) // [1, 2, 3, 4]
                    console.log(x3) // [5, 6, 7, 8, 5, 6, 7, 8]
                    console.log(y1) // [5, 6, 7, 8]
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
import { uniqueObj } from '@/utils'

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
