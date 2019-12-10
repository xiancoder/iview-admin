<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue点击图片预览放大（可旋转、翻转、缩放、上下切换、键盘操作）</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 效果很惊艳 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 可以动态的添加减少图片组</p>
                <p><Icon type="md-close" style="color:red"/>但是怎样和富文本相配合 <i>还没想好</i></p>
                <p>资料参考 <a href="https://fengyuanchen.github.io/viewerjs/examples/custom-toolbar.html">https://fengyuanchen.github.io/viewerjs/examples/custom-toolbar.html</a></p>
                <hr />
                <viewer :images="images" style="height: 120px;">
                    <img v-for="(item, index) in images" :src="item.src" :key="index" height="100">
                </viewer>
                <hr />
                <p>最终效果就是上面图片说明的样子，具体还需要小伙伴们自己多试验试验。</p>
                <script type="text/html">
                    <viewer :images="images" style="height: 200px;">
                        <img v-for="(item, index) in images" :src="item.src" :key="index" height="100">
                    </viewer>
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">vue点击图片预览放大（可旋转、翻转、缩放、上下切换、键盘操作）</div>
            <div class="blogContent" v-highlight>
                <viewer :images="images">
                    <div v-html="dongtaiData"></div>
                </viewer>
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
import '@/plugins/viewer' // 三方插件
export default {
    data () {
        return {
            images: [
                {src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg'},
                {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg'},
                {src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
                {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'}
            ],
            dongtaiData: `
                <span>哈1哈1哈</span>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg" height="100">
                <span>哈2哈2哈</span>
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg" height="100">
                <span>哈3哈3哈</span>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg" height="100">
                <span>哈4哈4哈</span>
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg" height="100">
            `
        }
    },
    computed: {
        images2 () { return this.dongtaiData.match(/http[s]?:\/\/[^"]*/g) }
    },
    mounted () {
    }
}
</script>
