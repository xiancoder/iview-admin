<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">我想一键复制一些东西</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>{{code}}</p>
                <Button @click="copyActiveCode($event, code)">一键复制"我是要当海贼王的男人"</Button>
                <script type="text/html" v-pre>
                    <Button @click="copyActiveCode($event, code)">一键复制"我是要当海贼王的男人"</Button>
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
import copyTextBtn from '@/plugins/clipboard'
import { success, error } from '@/tools' // 自定义常用工具
let time = +(new Date())

export default {
    data () {
        return {
            code: '我是要当海贼王的男人' + time
        }
    },
    methods: {
        // methods
        copyActiveCode (e, text) {
            copyTextBtn(e, text).then(res => {
                if (res) {
                    success('复制成功')
                } else {
                    error('该浏览器不支持自动复制')
                }
            })
        }
    },
    mounted () {
    }
}
</script>
