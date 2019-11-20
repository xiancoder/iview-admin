<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">package.json里面自定义脚本命令</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    {
                        "script":{ // 字段script的每一个属性都是一个自定义的脚本命令。
                            "dev": "webpack -w" // 在命令行中可以通过执行npm run dev来执行这段脚本。
                        }
                    }
                </script>
                <p>执行原理</p>
                <p>使用npm run script执行脚本的时候都会创建一个shell，然后在shell中执行指定的脚本。</p>
                <p>这个shell会将当前项目的可执行依赖目录（即node_modules/.bin）添加到环境变量path中，当执行之后之后再恢复原样。</p>
                <p>就是说脚本命令中的依赖名会直接找到node_modules/.bin下面的对应脚本，而不需要加上路径。</p>
                <p>执行顺序</p>
                <p>一个npm脚本可以执行多个任务，这些任务之间可以指定不同的执行顺序。</p>
                <script type="text/js">
                    "dev":"node test.js & webpack" // '&' 并行执行顺序，同时执行
                    "dev":"node test.js && webpack" // '&&'继发顺序，执行前面之后才可以执行后面
                </script>
                <p>顺序钩子</p>
                <p>npm脚本自带两个顺序钩子，'pre' 和 'post'</p>
                <script type="text/js">
                    "predev":"node test_one.js",
                    "dev":"node test_two.js",
                    "postdev":"node test_three.js"
                </script>
                <p>当执行 npm run dev 的时候默认就会执行</p>
                <Alert show-icon closable>npm run predev && npm run dev && npm run postdev</Alert>
                <p>获取当前正在运行的脚本名称</p>
                <p>npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，可以配合顺序钩子使用</p>
                <script type="text/js">
                    npm run dev
                    const target = process.env.npm_lifecycle_event;
                    if(target === 'predev'){ console.log('the process is predev') }
                    if(target === 'dev'){ console.log('the process is dev') }
                    if(target === 'postdev'){ console.log('this process is postdev') }
                </script>
                <Alert>
                    四个可以简写的脚本执行命令
                    <template slot="desc">
                        npm start === npm run start
                        <br>npm stop === npm run stop
                        <br>npm test === npm run test
                        <br>npm restart === npm run stop && npm run restart && npm run start
                    </template>
                </Alert>
                <p>使用package.json内部变量</p>
                <p>通过npm_package_前缀，npm脚本可以拿到npm的内部变量</p>
                <script type="text/js">
                    {
                      "name":"zzpzds",
                      "script":"node test.js"
                    }
                    // ./test.js:
                    console.log(process.env.npm_package_name) //zzpzds
                </script>
                <p>name main属性</p>
                <p>name和version属性是package.json文件两个不可或缺的属性，通常name属性和我们项目的文件名称是一样的，version表示这个项目的版本号。</p>
                <p>main属性指定了加载时的入口文件，当使用require()语法来加载一个模块时，就会查看package.json文件的main属性，main属性的属性值就是要加载的模块。</p>
                <p>将package.json文件的main属性改为demo.js，然后在将factory文件内的index.js文件改名为demo.js,然后在命令行中进入store文件在执行node store.js，仍然是可以成功运行的。</p>
                <p>dependencies devDependencies属性</p>
                <p>当我们在命令行中执行npm install jquery -save时会在当前目录下新建一个node_modules文件夹，将jquery下载到node_modules文件内，并将该模块的依赖写入到dependencies内。</p>
                <p>如果执行npm install react -save-dev时会将react下载到node_modules文件下并将依赖写入到devDependencies内。</p>
                <p>如果在写入依赖之后我们删除node_module文件，然后执行npm install就会读取package.json文件的dependencies和devDependencies属性自动下载写入的依赖模块。</p>
                <p>在这个依赖webpack.base.conf文件里面entry入口文件就配置了</p>
                <p>app: './src/main.js'</p>
                <p>所以当你运行npm run dev的时候就从main.js这个入口文件开始执行了</p>
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
