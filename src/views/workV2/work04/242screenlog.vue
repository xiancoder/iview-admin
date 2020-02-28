<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">可以在手机端调试的插件</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
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
import screenLog from '@/plugins/screenLog'

export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
        screenLog.init();
        screenLog.log('String: Hello world');
        screenLog.log('Numbers: ' + 124);
        screenLog.log(21, 'multiple arguments');
        screenLog.log('Arrays', [1, 2, 3]);
        screenLog.log('Objects', JSON.stringify({a: 3}));
        console.log('console.log also gets logged.')
    },
    destroyed () {
        screenLog.destroy();
    }
}
</script>
