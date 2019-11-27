<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Bebal 初步了解其附属配件</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:05:18 在vuecli中默认已经配置完毕</p>
                <script type="text/js">
                    "babel": "^6.23.0", // 一个 JavaScript 编译器
                    "babel-core": "^6.23.1", // 变换api中所有内容的核心模块 【核心套餐】
                    "babel-eslint": "^8.2.1", // 对所有有效的babel代码进行lint处理
                    "babel-loader": "^7.1.2", // 用来处理ES6语法，将其编译为浏览器可以执行的js语法
                    "babel-helper-vue-jsx-merge-props": "^2.0.3", // 预制babel-template函数，提供给vue,jsx等使用
                    "babel-plugin-syntax-dynamic-import": "^6.18.0", // 插件语法动态导入
                    "babel-plugin-syntax-jsx": "^6.18.0", // jsx语法
                    "babel-plugin-transform-runtime": "^6.12.0", // babel 默认会将这些辅助函数内联到每一个 js 文件里 这个是工具
                    "babel-plugin-transform-vue-jsx": "^3.7.0", // 编译jsx
                    "babel-preset-env": "^1.6.1", // 插件管理插件 更精细化的配置，以提升编译速度，同时减少代码冗余。
                    "babel-preset-es2015": "^6.24.1", // es6语法转为es5语法的对应转换方法
                    "babel-preset-stage-3": "^6.24.1", // 针对处于标准提案阶段的功能所编写的预设
                    "babel-runtime": "^6.11.6", // 运行时环境
                    babel-parser：babel-parser（Babylon）是Babel中使用的JavaScript解析器
                    babel-core：包含变换api中所有内容的核心模块（用于集成）
                    babel-generator：从AST打印一个字符串
                    babel-types：Babel Types是一个用于AST节点的Lodash-esque实用程序库
                    babel-register：require钩子将自己绑定到node的require并自动编译文件。
                    babel-template：从字符串模板生成AST
                    babel-helpers：Babel变换使用的辅助函数集合
                    babel-code-frame：生成包含指向源位置的代码帧的错误
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">.eslintrc 配置 babel-eslint</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:08:48 不适用于vuecli3</p>
                <script type="text/js">
                    {
                        "parser": "babel-eslint",
                        "parserOptions": {
                            "sourceType": "module",
                            "allowImportExportEverywhere": false,
                            "codeFrame": true
                        }
                    }
                </script>
                <p class="text-danger">当我使用了vuecli3以后就迷茫了 这些设置就对不上号了 但是依然生效 ???</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">webpack 配置 babel-loader</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:08:48 不适用于vuecli3</p>
                <script type="text/js">
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        // (不处理node_modules 和 bower_components下的js文件) 优化处理加快速度
                        use: {
                            loader: 'babel-loader',
                            options: { // options选项
                                presets: ['@babel/preset-env'], // presets设置的就是当前js的版本
                                plugins: [require('@babel/plugin-transform-object-rest-spread')] // plugin是需要的插件
                            }
                        }
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">.eslintrc 配置 jsx</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:08:48 不适用于vuecli3</p>
                <script type="text/js">
                    {
                        "presets": ["stage-3", "env"],
                        "plugins": ["transform-runtime", "transform-vue-jsx"],
                        "comments": false
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">.eslintrc 配置 动态import(懒加载)</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:08:48 不适用于vuecli3</p>
                <p>const App = () => import('../component/Login.vue');</p>
                <p>很多情况下，我们这么写npm run dev控制台直接报错，这是为什么呢？</p>
                <p>没有配置 syntax-dynamic-import 动态引入</p>
                <script type="text/js">
                    {
                        "presets": ["stage-3", "env"],
                        "plugins": ["transform-runtime", "syntax-dynamic-import", "transform-vue-jsx"],
                        "comments": false
                    }
                </script>
                <p>像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，</p>
                <p>会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，</p>
                <p>可以有效的分担首页所承担的加载压力，减少首页加载用时</p>
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
        return {}
    },
    methods: {},
    mounted () {
    }
};
</script>
