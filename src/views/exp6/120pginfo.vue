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
                <p>npm语义化版本号</p>
                <p>npm使用 a.b.c 的版本号来管理安装包，a为达版本号，有重大api改变，一般不向下兼容，b为小版本号，新增功能，向下兼容，c为补丁号，通常修复一些bug。npm安装包的时候允许使用一些特殊符号表示安装的版本范围，如：</p>
                <p>~a.b.c : 取最新的c的版本号值，a与b保持不变</p>
                <p>^a.b.c : 取b和c均为最新版本号，a保持不变</p>
                <p>批量更新package.json中的dependencies依赖</p>
                <p class="commend">C:\Users\Administrator>npm install npm-check-updates</p>
                <script type="text/html">
                    + npm-check-updates@3.1.8
                    added 154 packages from 80 contributors in 31.512s
                </script>
                <p class="commend">E:\xamppWorkspace\jiake.R14\project.xianjs_webpack>ncu -u</p>
                <script type="text/html">
                    Checking E:\xamppWorkspace\jiake.R14\project.xianjs_webpack\package.json
                    [====================] 18/18 100%
                        autoprefixer ^7.1.6 → ^9.5.1
                        babel-core ^6.26.0 → ^6.26.3
                        babel-loader ^7.1.2 → ^8.0.5
                        babel-preset-env ^1.6.1 → ^1.7.0
                        clean-webpack-plugin ^0.1.17 → ^2.0.1
                        css-loader ^0.28.7 → ^2.1.1
                        file-loader ^1.1.5 → ^3.0.1
                        html-webpack-plugin ^2.30.1 → ^3.2.0
                        less ^2.7.3 → ^3.9.0
                        less-loader ^4.0.5 → ^4.1.0
                        postcss-loader ^2.0.9 → ^3.0.0
                        style-loader ^0.19.0 → ^0.23.1
                        uglifyjs-webpack-plugin ^1.1.4 → ^2.1.2
                        url-loader ^0.6.2 → ^1.1.2
                        webpack ^3.8.1 → ^4.30.0
                    Run npm install to install new versions.
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
export default {
}
</script>
