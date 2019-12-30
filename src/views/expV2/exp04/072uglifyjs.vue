<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">uglifyjs来解救NG任礼游非amd模式老项目</div>
            <div class="blogContent" v-highlight v-betterpre>
                <h2>UglifyJS中文文档</h2>
                <p><a href="https://segmentfault.com/a/1190000008995453#articleHeader8">资料来源 https://segmentfault.com/a/1190000008995453#articleHeader8</a></p>
                <p>首先确认一直你已经安装了最新的node.js(装完后或许需要重启一下电脑)</p>
                <p>然后安装</p>
                <b>npm install uglify-js -g</b>
                <p>然后使用</p>
                <b>uglifyjs [input files] [options]</b>
                <p>parse 解释 compress 压缩 mangle 混淆 beautify 美化 minify 最小化 cli 命令行工具</p>
                <p>sourcemap 编译后代码对源码的映射，用于网页调试 ast 抽象语法树 toplevel 顶层作用域</p>
                <p>unreachable 不可达代码 option 选项 stdin 标准输入，指在命令行中直接输入 stdout 标准输出 stderr 标准错误输出</p>
                <p>以下是一些常用的参数列表：</p>
                <ul>
                    <li>-o,--output 指定输出文件，默认情况下为命令行</li>
                    <li>-b,--beautify 美化代码格式的参数</li>
                    <li>-m,--mangle 改变变量名称默认 false（ex：在一些例如YUI Compressor压缩完的代码后你可以看到a,b,c,d,e,f之类的变量，加了-m参数，uglifyjs也可以做到）</li>
                    <li>-r,--reserved 保留的变量名称，不需要被-m参数改变变量名的</li>
                    <li>-c,--compress OK，主角登场了，这是让uglifyjs进行代码压缩的参数。可以在-c后边添加</li>
                    <li>--comments 用来控制注释的代码的</li>
                </ul>
                <Alert>
                    变量名压缩
                    <template slot="desc">
                        <p>你需要传入-m来进行变量名的压缩（将一系列很长的变量名压缩为a,b,c,d,e,f云云）。</p>
                        <p>当使用了-m参数进行改变变量名时，如果还想保留一些变量名让他们不被改变，就需要用–reserved (-r) 。</p>
                        <p>例如 uglifyjs ... -m -r '$,require,exports'</p>
                    </template>
                </Alert>
                <Alert>
                    进行压缩的选项
                    <template slot="desc">
                        <p>当使用了–compress (-c) 参数时，就启用了uglifyjs对代码的压缩的功能。你可以在-c后边传入一系列逗号分开的选项来指定压缩的具体特性。</p>
                        <p>这里需要强调下的是，美化中的所有选项，是对-b参数而言的，就是说在使用的时候，这些选项需要放在-b后边，例如：</p>
                        <p>beautify 进行代码的美化，默认的情况下等于-b beautify=true，你也可以吧beautfy设置为false跳过 美化步骤。</p>
                        <ul style="padding-left: 22px;">
                            <li>indent-level 设置代码缩进，例如github默认的情况下缩进是2个tab，默认的数值为4，例如（uglifyjs -o main-min.js main.js -b "indent-level=2"）</li>
                            <li>indent-start 对代码进行整体缩进默认值为0，可以这么使用（uglifyjs -o main-min.js main.js -b "indent-start=4,indent-level=8"）</li>
                            <li>quote-keys 默认为false。如果设置为true，则将所有对象中的键用引号引起来</li>
                            <li>space-colon 会在一个单引号后边插入一个空格</li>
                            <li>ascii-only 转义Unicode字符</li>
                            <li>inline-script 转义js代码字符串变量中的script标签</li>
                            <li>width 设置代码的宽度，默认情况下是80</li>
                        </ul>
                    </template>
                </Alert>
                <Collapse>
                    <Panel name="1">
                        详细配置
                        <p slot="content">
                            p--source-map 指定输出的文件产生一份sourcemap
                            <br />--source-map-root 此路径中的源码编译后会产生sourcemap
                            <br />--source-map-url 放在//#sourceMappingURL的sourcemap路径.  默认是 --source-map传入的值.
                            <br />--source-map-include-sources  如果你要在sourcemap中加上源文件的内容作为sourcesContent属性，就传这个参数吧。
                            <br />--source-map-inline 把sourcemap以base64格式附在输出文件结尾
                            <br />--in-source-map 输入sourcemap。假如的你要编译的JS是另外的源码编译出来的。假如该sourcemap包含在js内，请指定"inline"。
                            <br />--screw-ie8 是否要支持IE6/7/8。UglifyJS默认不兼容IE。
                            <br />--support-ie8 是否要支持IE6/7/8，等同于在`compress`, `mangle` 和 `output`选项中都设置`screw_ie8: false`
                            <br />--expr 编译一个表达式，而不是编译一段代码（编译JSON时用）
                            <br />-p, --prefix 忽略sourcemap中源码的前缀。例如`-p 3`会干掉文件名前面3层目录 以及保证路径是相对路径。你也可以指定`-p relative`,让UglifyJS自己计算输出文件、sourcemap与源码之间的相对路径。
                            <br />-o, --output 输出文件，默认标准输出(STDOUT)
                            <br />-b, --beautify 美化输出/指定输出 选项
                            <br />-m, --mangle Mangle的名字，或传入一个mangler选项.
                            <br />-r, --reserved mangle的例外，不包含在mangling的名字
                            <br />-c, --compress 是否启用压缩功能（true/fasle），或者传一个压缩选项对象, 例如 `-c 'if_return=false,pure_funcs=["Math.pow","console.log"]'`， `-c`不带参数的话就是用默认的压缩设置。
                            <br />-d, --define 全局定义
                            <br />-e, --enclose 所有代码嵌入到一个大方法中，传入参数为配置项
                            <br />--comments 保留版权注释。默认保留Google Closure那样的，保留JSDoc-style、 包含"@license" 或"@preserve"字样的注释。你也可以传下面的参数: - "all" 保留所有注释 - 正则（如`/foo/`、`/^!/`）保留匹配到的。要注意，如果启用了压 缩，因为会移除不可达代码以及压缩连续声明，因此不是*所有*注释都能 保留下来。
                            <br />--preamble 在输出文件开头插入的前言。你可以插入一段注释，例如版权信息。这些不会被编译，但sourcemap会改成当前的样子。
                            <br />--stats 在STDERR中显示操作运行时间。
                            <br />--acorn 用 Acorn解析。
                            <br />--spidermonkey 假如输入文件是 SpiderMonkey AST 格式(像JSON).
                            <br />--self 把UglifyJS2本身也构建成一个依赖包 (等同于`--wrap=UglifyJS --export-all`)
                            <br />--wrap 所有代码嵌入到一个大函数中,让"exports"和"global"变量有效，你需要传入一个参数指定模块被浏览器引入时的名字。
                            <br />--export-all 只当`--wrap`时有效,告诉UglifyJS自动把代码暴露到全局。
                            <br />--lint 显示一些可视警告
                            <br />-v, --verbose Verbose
                            <br />-V, --version 打印版本号.
                            <br />--noerr 不要为-c,-b 或 -m选项中出现未知选项而抛出错误。
                            <br />--bare-returns 允许返回函数的外部。当最小化CommonJs模块和Userscripts时，可能匿名函数会被.user.js引擎调用立即执行（IIFE）
                            <br />--keep-fnames 不要混淆、干掉的函数的名字。当代码依赖Function.prototype.name时有用。
                            <br />--reserved-file 要保留的文件的名字
                            <br />--reserve-domprops 保留（绝大部分？）DOM的属性，当--mangle-props
                            <br />--mangle-props 混淆属性，默认是`0`.设置为`true`或`1`则会混淆所有属性名。 设为`unquoted`或 `2`则只混淆不在引号内的属性。`2`时也会让 `keep_quoted_props` 美化选项生效，保留括号内的属性；让压缩选项 的`properties`失效，阻止覆写带点号（.）的属性。你可以通过在命令 中明确设置来覆写它们。
                            <br />--mangle-regex 混淆正则，只混淆匹配到的属性名。
                            <br />--name-cache 用来保存混淆map的文件
                            <br />--pure-funcs 假如返回值没被调用则可以安全移除的函数。 例如`--pure-funcs Math.floor console.info`(需要设置 `--compress`)
                        </p>
                    </Panel>
                </Collapse>
                <p>批处理 前提是请安装好 uglifyjs 将需要压缩的文件目录放置在批处理同一级目录下</p>
                <p>
                    <a :href="'/download/uglifyJsBat.bat'" download="压缩所有js文件.bat">下载 "压缩所有js文件.bat" 文件</a>
                    <Divider type="vertical" />
                    <a :href="'/download/openCmd.bat'" download="本目录打开CMD.bat">下载 "本目录打开CMD.bat" 文件</a>
                </p>
                <script type="text/js">
                    @echo off
                    :: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
                    ::（注意路劲中不能有空格）
                    SET JSFOLDER=./
                    echo 'find Js file ing...'
                    chdir /d %JSFOLDER%
                    for /r . %%a in (*.js) do (
                        @echo doRar file %%~a ...
                        uglifyjs %%~fa -o %%~fa
                    )
                    echo done!
                    pause & exit
                </script>
                <p class="text-danger">请注意这里 旧代码不要使用混淆功能 -m</p>
                <p class="text-info">那啥 批处理如果直接执行会自动关闭 可以cmd打开一个窗口 在窗口执行<b>call ./xxx.bat</b></p>
                <p>第一步 下载 '压缩所有js文件.bat'</p>
                <p>第二步 下载 '本目录打开CMD.bat'</p>
                <p>第三步 双击 第二步文件 在cmd窗口 输入 'call ' 点击tab键 找到第一步文件 回车</p>
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
