<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Webpack File Manager Plugin</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/>该Webpack插件允许在构建之前之后复制，存档（.zip / .tar / .tar.gz），移动，删除文件和目录</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/js">
                    npm install filemanager-webpack-plugin --save-dev
                </script>
                <p>Webpack.config.js:</p>
                <script type="text/js">
                    const FileManagerPlugin = require('filemanager-webpack-plugin');
                    module.exports = {
                        ...
                        plugins: [
                            new FileManagerPlugin({
                                onEnd: {
                                    copy: [
                                        { source: '/path/from', destination: '/path/to' },
                                        { source: '/path/**/*.js', destination: '/path' },
                                        { source: '/path/fromfile.txt', destination: '/path/tofile.txt' },
                                        { source: '/path/**/*.{html,js}', destination: '/path/to' },
                                        { source: '/path/{file1,file2}.js', destination: '/path/to' },
                                        { source: '/path/file-[hash].js', destination: '/path/to' }
                                    ],
                                    move: [
                                        { source: '/path/from', destination: '/path/to' },
                                        { source: '/path/fromfile.txt', destination: '/path/tofile.txt' }
                                    ],
                                    delete: [
                                     '/path/to/file.txt',
                                     '/path/to/directory/'
                                    ],
                                    mkdir: [
                                     '/path/to/directory/',
                                     '/another/directory/'
                                    ],
                                    archive: [
                                        { source: '/path/from', destination: '/path/to.zip' },
                                        { source: '/path/**/*.js', destination: '/path/to.zip' },
                                        { source: '/path/fromfile.txt', destination: '/path/to.zip' },
                                        { source: '/path/fromfile.txt', destination: '/path/to.zip', format: 'tar' },
                                        {
                                             source: '/path/fromfile.txt',
                                             destination: '/path/to.tar.gz',
                                             format: 'tar',
                                             options: { gzip: true, gzipOptions: { level: 1 }, globOptions: { nomount: true } }
                                         }
                                    ]
                                }
                            })
                        ],
                        ...
                    }
                </script>
                <p>如果需要保留操作运行的顺序，可以将onStart和onEnd事件设置为Arrays。在下面的示例中，在onEnd事件中，复制操作将首先运行，然后在删除之后运行</p>
                <p></p>

                <p></p>
                <script type="text/js">
                    const FileManagerPlugin = require('filemanager-webpack-plugin');
                    module.exports = {
                        ...
                        plugins: [
                            new FileManagerPlugin({
                                onEnd: [
                                    { copy: [ { source: "./dist/bundle.js", destination: "./newfile.js" } ] },
                                    { delete: [ "./dist/bundle.js" ] }
                                ]
                            })
                        ],
                    }
                </script>
                <table class="api"> <thead> <tr> <th style="text-align:center;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称</font></font></th> <th style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></th> <th style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></th> </tr> </thead> <tbody> <tr> <td style="text-align:center;"><strong><code>copy</code></strong></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将单个文件或整个目录从源文件夹复制到目标文件夹。</font><font style="vertical-align: inherit;">还支持glob模式</font></font></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制：[ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{源：'dist / bundle.js'，目标：'/ home / web / js /' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">} </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></td> </tr> <tr> <td style="text-align:center;"><strong><code>delete</code></strong></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除单个文件或整个目录。</font></font></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除：[ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'file.txt'，'/ path / to' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></td> </tr> <tr> <td style="text-align:center;"><strong><code>move</code></strong></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动单个文件或整个目录。</font></font></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动：[ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{源：'dist / bundle.js'，目标：'/ home / web / js /' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">} </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></td> </tr> <tr> <td style="text-align:center;"><strong><code>mkdir</code></strong></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建目录路径。</font><font style="vertical-align: inherit;">认为mkdir -p</font></font></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mkdir：[ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'/ path / to / directory /'，'/ another / path /' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></td> </tr> <tr> <td style="text-align:center;"><strong><code>archive</code></strong></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">归档单个文件或整个目录。</font><font style="vertical-align: inherit;">除非提供“格式”和“选项”，否则默认为.zip。</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/archiverjs/node-archiver" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点档案</font></font></a></td> <td style="text-align:left;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存档：[ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{来源：'dist / bundle.js'，目标：'/home/web/archive.zip' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式：'tar'或'zip' </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项：{选项传递给存档器} </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">} </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></td> </tr> </tbody> </table>
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
