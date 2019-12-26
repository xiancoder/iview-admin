<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Nodejs 执行 CMD 命令</div>
            <div class="blogContent" v-highlight>
                <p>要用nodejs执行cmd，需要引入一个包node-cmd</p>
                <p class="commend">npm install node-cmd -save</p>
                <code class="javascript">
                    var cmd = require('node-cmd');
                    cmd.get( 'notepad', function(data){ console.log("data") } );// 画板
                    cmd.get( 'C:\\Windows\\System32\\Calc.exe', function(data){ console.log("cacul") } ); // 计算器
                    cmd.run('touch example.created.file'); // 打开记事本
                </code>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">路径处理方法</div>
            <div class="blogContent" v-highlight>
                <code class="javascript">
                    __dirname 表示当前文件所在的目录的绝对路径
                    __filename 表示当前文件的绝对路径
                    module.filename ==== __filename 等价
                    process.cwd() 返回运行当前脚本的工作目录的路径，一般情况下不变，在process.chdir()后，或者shelljs.cd切换目录后会发生变化
                    process.chdir() 改变工作目录
                </code>
                <p>path.join和path.resolve的区别</p>
                <p>path.join 是连接路径，仅仅做路径的连接</p>
                <code class="javascript">
                    console.log(path.join(__dirname,'a','b'));
                    /* 假如当前文件的路径是E:/node/1,那么拼接出来就是E:/node/1/a/b。 */
                    console.log(path.join(__dirname,'/a','/b','..'));
                    /* 路径开头的/不会影响拼接，..代表上一级文件，拼接出来的结果是：E:/node/1/a */
                    console.log(path.join(__dirname,'a',{},'b'));
                    /* 而且path.join()还会帮我们做路径字符串的校验，当字符串不合法时，会抛出错误：Path must be a string. */
                </code>
                <p>path.resolve 是解析绝对路径，将一个或多个连接后的路径解析为绝对路径，以应用程序为根目录，普通字符串代表子目录，/代表绝对路径根目录</p>
                <code class="javascript">
                    console.log(path.resolve());
                    /* 得到应用程序启动文件的目录（得到当前执行文件绝对路径） E:\zf\webpack\1\src */
                    console.log(path.resolve('a','/c'));
                    /* E:/c  因为/斜杠代表根目录，所以得到的就是E:/c */
                    console.log(path.resolve(__dirname,'img/so'));
                    /* E:\zf\webpack\1\src\img\so   这个就是将文件路径拼接，并不管这个路径是否真实存在。 */
                    console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
                    /* E:\zf\webpack\1\src\wwwroot\static_files\gif\image.gif */
                </code>
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
}
</script>
