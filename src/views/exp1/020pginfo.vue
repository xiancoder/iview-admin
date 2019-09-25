<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">通过npm查看jquery版本</div>
            <div class="blogContent" v-highlight>
                <p>假设我们需要 jquery ，但是jquery现在有很多版本，我们如何通过npm查看呢？</p>
                <p class="commend">npm view jquery versions</p>
                <p>这种方式可以查看npm服务器上所有的jquery版本信息；</p>
                <p class="commend">npm view jquery version</p>
                <p>这种方式只能查看jquery的最新的版本是哪一个；</p>
                <p class="commend">npm info jquery</p>
                <p>也可以查看jquery所有的版本，但是能查出更多的关于jquery的信息；</p>
                <p>假设现在我们已经成功下载了jquery，过了一段时间，我忘记了下载的jquery的版本信息，</p>
                <p>这个时候，我们就需要查看本地下载的jquery版本信息，怎么做呢？</p>
                <p>第一种方式：npm ls jquery 即可（查看本地安装的jquery），下面我的本地没有安装，所以返回empty的结果；</p>
                <p>第二种方式：npm ls jquery -g (查看全局安装的jquery)</p>
                <p class="commend">npm info jquery</p>
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
}
</script>
