<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <Time :time="time1" />
                <br>
                <Time :time="time2" />
                <br>
                <Time :time="time2" type="date" />
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
        return {
            time1: (new Date()).getTime() - 60 * 3 * 1000,
            time2: (new Date()).getTime() - 86400 * 3 * 1000
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
