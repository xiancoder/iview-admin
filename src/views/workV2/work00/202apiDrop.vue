<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">API异步请求模块 - 下拉接口编写规范</div>
            <Divider orientation="right">未应用于项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1 添加 最好使用 drop 或者 pull</p>
                <p>2 接口一定是Get模式</p>
                <p>3 传参中的枚举变量尽量避免使用0 (有其他方面的考虑)</p>
                <script type="text/js">
                    // 这是一个api接口模版
                    {
                        'title': '我的测试 模拟数据',
                        'url': '/api/xxxx/pullOne',
                        'method': 'GET',
                        'params': {
                            'name': '你的名字', // 姓名 普通字符串 通常用于文本框
                            'sex': '', // 性别 枚举 0全部1男2女
                        },
                        'response': {
                            'code': '200', // 状态码 由后台发送 通常使用500参数异常服务器中止 401用户无权限 403用户超时
                            'msg': '', // 几乎无用 不建议使用
                            'data': {
                                'list': [
                                    {
                                        id: 1, // vue不像angular那样依赖select2插件 而且插件也不好使的情况
                                        name: '' // 这个格式可以任意 但是必须是有效键值对使用
                                    } ...
                                ] // 不需要数量
                            }
                        }
                    }
                </script>
                <script type="text/js">
                    pullOne ({ // 所有xxx下拉
                        name,
                        sex
                    }) {
                        return new Promise((resolve, reject) => {
                            axios({
                                method: 'GET',
                                url: '/api/xxxx/pullOne',
                                data: {
                                    name,
                                    sex: sex || 0
                                }
                            }).then(response => { // 请注意这个返回值是整个结果对象
                                const res = response.data
                                if (res && res.data && res.data.list) {
                                    resolve(res.data.list)
                                } else {
                                    error(res.data.res) // 报错并继续reject
                                    resolve([])
                                }
                            }).catch(e => {
                                error(e.message) // ajax异常后 报错并中止操作
                            })
                        })
                    }
                </script>
                <script type="text/js">
                    companyList (forTableShow) { // 四个公司区分 forTableShow指表格枚举
                        if (forTableShow) {
                            return [
                                { id: '1', name: 'dsp-pfs.yunxi.cn:10086' },
                                { id: '2', name: 'dsp-njs.yunxi.cn:10086' },
                                { id: '3', name: 'dsp-wls.yunxi.cn:10086' },
                                { id: '4', name: 'dsp-zhs.yunxi.cn:10086' },
                                { id: '1', name: '37tw.com' },
                                { id: '2', name: 'sjzwn.com' },
                                { id: '3', name: 'bj6.cc' },
                                { id: '4', name: 'yunxizhihui.cn' }
                            ]
                        }
                        return Promise.resolve([
                            { id: '1', name: '平复信息技术河北有限公司' },
                            { id: '2', name: '宁静致远科技服务河北有限公司' },
                            { id: '3', name: '云袭网络技术河北有限公司' },
                            { id: '4', name: '云袭智慧在线科技发展（北京）有限公司' }
                        ])
                    },
                </script>
                <script type="text/js">
                    // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                    addOne ({
                        date, // 日期范围控件直接提供两个日期的数组
                        name,
                        sex,
                        school,
                        friend,
                        scope, // 提交时候分数用换行来分隔
                        file
                    }) {
                        return new Promise((resolve, reject) => {
                            // 请注意 这里负责拼装 不负责校验
                            date = date || []
                            axios({
                                method: 'POST',
                                url: '/api/xxxx/addOne',
                                headers: { 'Content-Type': 'multipart/form-data' }, // 如果需要上传文件 请配置这个 默认转换fromdata
                                data: {
                                    begin: date[0],
                                    end: date[1],
                                    name,
                                    sex,
                                    school: school || 0, // 有时候后台允许空值 有时候不允许
                                    friend,
                                    scope: scope.split(/\r|\n|\r\n/),
                                    file: file || null
                                }
                            }).then(response => { // 请注意这个返回值是整个结果对象
                                const res = response.data
                                if (res && res.data && res.data.res) {
                                    success(res.msg || '操作成功') // 成功并执行下一步
                                    resolve(1) // 为来下一步更方便 转换成功与否的结果返回
                                } else {
                                    error(res.data.res_code || '操作失败') // 报错并继续reject
                                    resolve(0)
                                }
                            }).catch(e => {
                                error(e.message) // ajax异常后 报错并中止操作
                            })
                        })
                    },
                </script>
                <hr>
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
