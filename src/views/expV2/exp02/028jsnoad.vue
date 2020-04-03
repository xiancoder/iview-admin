<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">用js屏蔽脚本加载的广告</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 辛辛苦苦写了一个网站，但是用手机浏览器打开之后，在bottom的位置经常有广告显示，这是由于在wifi被dns劫持的情况下导入的广告脚本种子加载出的。 </p>
                <p><Icon type="md-close" style="color:red"/> 广告脚本种子基本上是动态创建script来加载脚本的： </p>
                <hr />
                <p class="text-danger">怎样通过vue调用已经注册的过滤器逻辑 ????? </p>
                <p class="text-info">在逻辑中调用已经注册的过滤器逻辑</p>
                <script type="text/js">
                    var ele;
                    if (/\.css[^\.]*$/.test(asset.url)) {
                        ele = doc.createElement("link")
                        ele.type = "text/" + (asset.type || "css")
                        ele.rel = "stylesheet"
                        ele.href = asset.url
                    }
                    else {
                        ele = doc.createElement("script")
                        ele.type = "text/" + (asset.type || "javascript")
                        ele.src = asset.url
                    }
                </script>
                <p>没错，document.createElement 对症下药 <span class="text-danger">这里考虑的不周全</span></p>
                <script type="text/js">
                    /**
                     1. 禁用动态添加脚本，防止广告加载
                     */
                    (function () {
                        var createElement = document.createElement
                        document.createElement = function (tag) {
                            switch (tag) {
                                case 'script':
                                    console.log('禁用动态添加脚本，防止广告加载')
                                    break;
                                default:
                                    return createElement.apply(this, arguments)
                            }
                        }
                    })();
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
        return {
            v1: new Date(),
            v2: 'abcd',
            v3: '12345678',
            v31: '12345678.912',
            v4: '&lt;',
            v5: 3,
            v6: '',

            test1: [1234.56, '654321', null, undefined, 'null', NaN],
            test2: ['abc', '', null, undefined, 'null']
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
