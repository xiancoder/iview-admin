<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">js判断当前页面是否失去焦点(切换标签页)</div>
            <div class="blogContent" v-highlight>
                <p>页面上有些比较消耗资源的操作，比如动画，最好在标签页切换的时候暂停，再切换回来后恢复, </p>
                <p>如下代码实现了这个操作，利用document.hidden属性判断当前页面的可见性，同时也利用了visibilitychange事件</p>
                <script type="text/js">
                    setTabHiddenWatching () {
                        const hiddenProperty = ['hidden', 'webkitHidden', 'mozHidden', 'msHidden']
                        const len = hiddenProperty.length
                        let propertyKey = ''
                        for (var i = 0; i < len; i++) {
                            if (hiddenProperty[i] in document) {
                                propertyKey = hiddenProperty[i] // 获取具体的hidden属性名
                                break
                            }
                        }
                        let eventKey = '';
                        if (propertyKey && propertyKey !== '') {
                            eventKey = propertyKey.replace(/hidden/i, 'visibilitychange')
                        }
                        // 获取具体事件名eventKey
                        const tabPageVisibilityManager = function (pauseCallback, resumeCallback) {
                            document.addEventListener(eventKey, function () {
                                if (!document[propertyKey]) {
                                    if (resumeCallback) { resumeCallback() }
                                } else {
                                    if (pauseCallback) { pauseCallback() }
                                }
                            })
                        }
                        let oldTitle = ''
                        tabPageVisibilityManager(function () { // 暂停
                            oldTitle = window.document.title
                            window.document.title = `已离开 | ${oldTitle}`
                        }, function () { // 恢复
                            window.document.title = oldTitle
                        });
                    },
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
