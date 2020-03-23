<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">API异步请求模块 - 添加接口编写规范</div>
            <Divider orientation="right">未应用于项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1 添加 最好使用 add 或者 edit</p>
                <p>2 接口一定是POST模式</p>
                <p>3 传参中的枚举变量尽量避免使用0 (有其他方面的考虑)</p>
                <script type="text/js">
                    // 这是一个api接口模版
                    {
                        'title': '我的测试 模拟数据',
                        'url': '/api/xxxx/addOne',
                        'method': 'POST',
                        'params': {
                            'begin': '2018-10-26', // 开始日期 通常用于日期范围控件 配套utils中有获取以往七天的方法
                            'end': '2018-11-25', // 结束日期 通常用于日期范围控件 配套utils中有获取以往七天的方法
                            'name': '你的名字', // 姓名 普通字符串 通常用于文本框
                            'sex': '', // 性别 枚举 1男2女 通常用于下拉框 注意不要使用0 (后台的字段通常设置为int类型 传递空值时候可默认替换为0)
                            'school': '', // 学历 枚举 1小学2中学3大学 通常用于下拉框 注意不要使用0 (有时候后台会要求不要传空值)
                            'friend': ['aaa', 'bbb'], // 朋友列表 提交数组 通常用于多选
                            'scope': ['95', '99'], // 考试各科分数 提交数组 换行分隔用例展示
                            'file': 大文件, // 毕业设计作品 可通过fromdata方式上传的文件
                        },
                        'response': {
                            'code': '200', // 状态码 由后台发送 通常使用500参数异常服务器中止 401用户无权限 403用户超时
                            'msg': '', // 几乎无用 不建议使用
                            'data': {
                                'res': 0, // 0失败 1成功
                                'res_code': '' // 原因 如果存在成功或失败都会提示
                            }
                        }
                    }
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
