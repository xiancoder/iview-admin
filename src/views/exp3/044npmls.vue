<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">npm查看本地包版本号和远程包的版本号</div>
            <div class="blogContent" v-highlight>
                <p>第一种方法:</p>
                <script type="text/html">
                    npm info <packageName>
                </script>
                <p>第二种方法:</p>
                <script type="text/html">
                    npm view <packageName> versions --json
                </script>
                <p>npm查看本地安装的包版本号</p>
                <script type="text/html">
                    npm ls <packageName>        // 本地包
                    npm ls <packageName> -g     // 全局安装包
                </script>
                <p>npm语义化版本号</p>
                <p>npm使用 a.b.c 的版本号来管理安装包，a为达版本号，有重大api改变，一般不向下兼容，b为小版本号，新增功能，向下兼容，c为补丁号，通常修复一些bug。npm安装包的时候允许使用一些特殊符号表示安装的版本范围，如：</p>
                <p>~a.b.c : 取最新的c的版本号值，a与b保持不变</p>
                <p>^a.b.c : 取b和c均为最新版本号，a保持不变</p>
                <p>批量更新package.json中的dependencies依赖</p>
                <script type="text/html">
                    C:\Users\Administrator>npm install npm-check-updates
                    + npm-check-updates@3.1.8
                    added 154 packages from 80 contributors in 31.512s
                    E:\xamppWorkspace\jiake.R14\project.xianjs_webpack>ncu -u
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
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
