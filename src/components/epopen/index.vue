<template>
    <Button type="text" @click.native="handleMe" style="padding:0;vertical-align: middle;">
        <Tooltip content="editplus打开本页面" placement="bottom" theme="light" class="hand">
            <Icon :size="23" type="ios-folder-open"/>
        </Tooltip>
    </Button>
</template>
<script>
import axios from 'axios' // http请求库
export default {
    methods: {
        handleMe () {
            if (window.location.host.indexOf('localhost') < 0) {
                return console.error('只有本地打开才能触发EP编辑');
            }
            // $route.path 当前路由对象的路径，如'/vi
            // $route.query 请求参数，如/foo?user=1获取到query.user = 1
            // $route.router 所属路由器以及所属组件信息
            // $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
            // $route.name 当前路径名字
            const path = 'views' + this.$route.path.replace(/\//g, '\\') + '.vue'
            console.info('即EP将打开文件', path)
            axios.get(
                'http://localhost:4010/epopen', {
                    params: {
                        project: 'R20.iview-admin',
                        path
                    }
                }
            ).then(function (response) {
                console.info('成功EP打开文件: ', response)
            }).catch(function (error) {
                console.info('失败', error)
            })
        }
    }
}
</script>
