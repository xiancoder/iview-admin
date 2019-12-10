<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">uglifyjs来解救NG任礼游非amd模式老项目</div>
            <div class="blogContent" v-highlight v-betterpre>
                <h2>UglifyJS中文文档</h2>
                <p><a href="https://segmentfault.com/a/1190000008995453#articleHeader8">资料来源 https://segmentfault.com/a/1190000008995453#articleHeader8</a></p>
                <pre >
                    parse 解释
                    compress 压缩
                    mangle 混淆
                    beautify 美化
                    minify 最小化
                    cli 命令行工具
                    sourcemap 编译后代码对源码的映射，用于网页调试
                    ast 抽象语法树
                    toplevel 顶层作用域
                    unreachable 不可达代码
                    option 选项
                    stdin 标准输入，指在命令行中直接输入
                    stdout 标准输出
                    stderr 标准错误输出
                </pre>
                <hr />
                <p>首先确认一直你已经安装了最新的node.js(装完后或许需要重启一下电脑)</p>
                <p>然后安装</p>
                <code>npm install uglify-js -g</code>
                <p>然后使用</p>
                <code>uglifyjs [input files] [options]</code>
                <p>以下是可用的选项：</p>
                <pre>
                    --source-map 指定输出的文件产生一份sourcemap
                    --source-map-root 此路径中的源码编译后会产生sourcemap
                    --source-map-url 放在//#sourceMappingURL的sourcemap路径.  默认是 --source-map传入的值.
                    --source-map-include-sources  如果你要在sourcemap中加上源文件的内容作为sourcesContent属性，就传这个参数吧。
                    --source-map-inline 把sourcemap以base64格式附在输出文件结尾
                    --in-source-map 输入sourcemap。假如的你要编译的JS是另外的源码编译出来的。假如该sourcemap包含在js内，请指定"inline"。
                    --screw-ie8 是否要支持IE6/7/8。UglifyJS默认不兼容IE。
                    --support-ie8 是否要支持IE6/7/8，等同于在`compress`, `mangle` 和 `output`选项中都设置`screw_ie8: false`
                    --expr 编译一个表达式，而不是编译一段代码（编译JSON时用）
                    -p, --prefix 忽略sourcemap中源码的前缀。例如`-p 3`会干掉文件名前面3层目录 以及保证路径是相对路径。你也可以指定`-p relative`,让UglifyJS自己计算输出文件、sourcemap与源码之间的相对路径。
                    -o, --output 输出文件，默认标准输出(STDOUT)
                    -b, --beautify 美化输出/指定输出 选项
                    -m, --mangle Mangle的名字，或传入一个mangler选项.
                    -r, --reserved mangle的例外，不包含在mangling的名字
                    -c, --compress 是否启用压缩功能（true/fasle），或者传一个压缩选项对象, 例如 `-c 'if_return=false,pure_funcs=["Math.pow","console.log"]'`， `-c`不带参数的话就是用默认的压缩设置。
                    -d, --define 全局定义
                    -e, --enclose 所有代码嵌入到一个大方法中，传入参数为配置项
                    --comments 保留版权注释。默认保留Google Closure那样的，保留JSDoc-style、 包含"@license" 或"@preserve"字样的注释。你也可以传下面的参数: - "all" 保留所有注释 - 正则（如`/foo/`、`/^!/`）保留匹配到的。要注意，如果启用了压 缩，因为会移除不可达代码以及压缩连续声明，因此不是*所有*注释都能 保留下来。
                    --preamble 在输出文件开头插入的前言。你可以插入一段注释，例如版权信息。这些不会被编译，但sourcemap会改成当前的样子。
                    --stats 在STDERR中显示操作运行时间。
                    --acorn 用 Acorn解析。
                    --spidermonkey 假如输入文件是 SpiderMonkey AST 格式(像JSON).
                    --self 把UglifyJS2本身也构建成一个依赖包 (等同于`--wrap=UglifyJS --export-all`)
                    --wrap 所有代码嵌入到一个大函数中,让"exports"和"global"变量有效，你需要传入一个参数指定模块被浏览器引入时的名字。
                    --export-all 只当`--wrap`时有效,告诉UglifyJS自动把代码暴露到全局。
                    --lint 显示一些可视警告
                    -v, --verbose Verbose
                    -V, --version 打印版本号.
                    --noerr 不要为-c,-b 或 -m选项中出现未知选项而抛出错误。
                    --bare-returns 允许返回函数的外部。当最小化CommonJs模块和Userscripts时，可能匿名函数会被.user.js引擎调用立即执行（IIFE）
                    --keep-fnames 不要混淆、干掉的函数的名字。当代码依赖Function.prototype.name时有用。
                    --reserved-file 要保留的文件的名字
                    --reserve-domprops 保留（绝大部分？）DOM的属性，当--mangle-props
                    --mangle-props 混淆属性，默认是`0`.设置为`true`或`1`则会混淆所有属性名。 设为`unquoted`或 `2`则只混淆不在引号内的属性。`2`时也会让 `keep_quoted_props` 美化选项生效，保留括号内的属性；让压缩选项 的`properties`失效，阻止覆写带点号（.）的属性。你可以通过在命令 中明确设置来覆写它们。
                    --mangle-regex 混淆正则，只混淆匹配到的属性名。
                    --name-cache 用来保存混淆map的文件
                    --pure-funcs 假如返回值没被调用则可以安全移除的函数。 例如`--pure-funcs Math.floor console.info`(需要设置 `--compress`)
                </pre>
                <p>批处理</p>
                <script type="text/php">
                    @echo off
                    :: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
                    ::（注意路劲中不能有空格）
                    SET JSFOLDER=./
                    echo 'find Js file ing...'
                    chdir /d %JSFOLDER%
                    for /r . %%a in (*.js) do (
                        @echo doRar file %%~a ...
                        uglifyjs %%~fa  -o %%~fa
                    )
                    echo done!
                    pause & exit
                </script>
                <script type="text/php">
                    @echo off
                    :: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
                    ::（注意路劲中不能有空格）
                    SET JSFOLDER=./
                    echo 'find Js file ing...'
                    chdir /d %JSFOLDER%
                    for /r . %%a in (*.js) do (
                        @echo doRar file %%~a ...
                        uglifyjs %%~fa -m -o %%~fa
                    )
                    echo done!
                    pause & exit
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
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
