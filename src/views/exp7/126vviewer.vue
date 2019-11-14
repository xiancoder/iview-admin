<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue点击图片预览放大（可旋转、翻转、缩放、上下切换、键盘操作）</div>
            <div class="blogContent" v-highlight>
                <div>
                    <viewer :images="images" style="height: 200px;">
                        <img v-for="(item, index) in images" :src="item.src" :key="index" height="100">
                    </viewer>
                </div>
                <p>最终效果就是上面图片说明的样子，具体还需要小伙伴们自己多试验试验。</p>
                <script type="text/html">
                    <viewer :images="images" style="height: 200px;">
                        <img v-for="(item, index) in images" :src="item.src" :key="index" height="100">
                    </viewer>
                </script>
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
import '@/plugins/viewer' // 三方插件
export default {
    data () {
        return {
            images: [
                {src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg'},
                {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg'},
                {src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
                {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'}
            ]
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
