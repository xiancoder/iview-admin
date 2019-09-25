<template>
    <div class="xian-btn-con">
        <Tooltip content="editplus打开本页面" placement="bottom">
            <Icon @click.native="handleMe" type="ios-folder-open" :size="23"></Icon>
        </Tooltip>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    computed: {
    },
    props: {
    },
    methods: {
        handleMe () {
            // $route.path 当前路由对象的路径，如'/vi
            // $route.query 请求参数，如/foo?user=1获取到query.user = 1
            // $route.router 所属路由器以及所属组件信息
            // $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
            // $route.name 当前路径名字
            console.info('即EP将打开文件', this.$route.path)
            let url = this.$route.path.replace(/\//g, '\\')
            axios.get(
                'http://localhost:5002/epOpen', {
                    params: {
                        project: 'R14.project.OApc',
                        path: 'views' + url + '.vue'
                    }
                }
            ).then(function (response) {
                console.info('成功EP打开文件: ', response)
            }).catch(function (error) {
                console.info('失败', error)
            })
        }
    },
    mounted () {
    }
}
</script>
