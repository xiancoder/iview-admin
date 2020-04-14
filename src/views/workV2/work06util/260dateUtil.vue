<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">公共方法 - 日期 - 常用逻辑 列举</div>
            <Divider orientation="right">项目在公共方法上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 获取今天日期 : {{ v1 }}</p>
                <script type="text/js">
                    // v1: dateFormater(new Date(), 'yyyy-MM-dd') // 可以简写
                    v1: dateFormater(new Date())
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 获取近三天日期数组 : [{{ v2 }}, {{ v1 }}]</p>
                <script type="text/js">
                    v2: dateFormater(dateSub(today, 2, 'd')),
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 获取近七天日期数组 : [{{ v3 }}, {{ v1 }}]</p>
                <script type="text/js">
                    v3: dateFormater(dateSub(today, 6, 'd'))
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 获取近七天时间数组 : [{{ v32 }}, {{ v31 }}]</p>
                <script type="text/js">
                    v31: dateFormater(dateSub(today, 6, 'd'), 'yyyy-MM-dd hh:mm'),
                    v32: dateFormater(dateSub(today), 'yyyy-MM-dd hh:mm'),
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 今天的农历信息 (天干地支 属相 是否闰年 农历时间 节气) : {{ v4 }}</p>
                <script type="text/js">
                    v4: date2all(today)
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 项目 : 某天所属的计薪周期 : {{ v5 }} </p>
                <script type="text/js">
                    v5: computeRange(today)
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 项目 : 某月的计薪周期 : {{ v6 }} </p>
                <script type="text/js">
                    v6: computeRangeByMouth(2020, 3)
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
import { dateFormater, dateSub, date2all, computeRange, computeRangeByMouth } from '@/utils'

const today = new Date()
export default {
    data () {
        return {
            // v1: dateFormater(new Date(), 'yyyy-MM-dd') // 可以简写
            v1: dateFormater(today),
            v2: dateFormater(dateSub(today, 2, 'd')),
            v3: dateFormater(dateSub(today, 6, 'd')),
            v31: dateFormater(dateSub(today, 6, 'd'), 'yyyy-MM-dd hh:mm'),
            v32: dateFormater(dateSub(today), 'yyyy-MM-dd hh:mm'),
            v4: date2all(today),
            v5: computeRange(today),
            v6: computeRangeByMouth(2020, 3)
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
