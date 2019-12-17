<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">cross-env能跨平台地设置及使用环境变量</div>
            <div class="blogContent" v-highlight>
                <p>当您使用NODE_ENV =production, 来设置环境变量时，<b>大多数Windows命令提示将会阻塞(报错)</b>。</p>
                <p>（异常是Windows上的Bash，它使用本机Bash。）同样，Windows和POSIX命令如何使用环境变量也有区别。</p>
                <p>使用POSIX，您可以使用：$ ENV_VAR和使用％ENV_VAR％的Windows。</p>
                <p>说人话：windows不支持NODE_ENV=development的设置方式。会报错</p>
                <p>cross-env使得您可以使用单个命令，而不必担心为平台正确设置或使用环境变量。</p>
                <p>只要在POSIX系统上运行就可以设置好，而cross-env将会正确地设置它。 </p>
                <p>说人话: 这个迷你的包(cross-env)能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。</p>
                <p>npm安装方式</p>
                <script type="text/js">
                    npm i --save-dev cross-env
                </script>
                <p>在npm脚本(多是package.json)里这么配置</p>
                <script type="text/js">
                    {
                        "scripts": {
                            "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
                        }
                    }
                </script>
                <p>运行npm run build，这样NODE_ENV便设置成功，无需担心跨平台问题</p>
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
