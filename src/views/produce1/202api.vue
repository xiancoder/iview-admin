<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">API异步请求模块的使用麻烦的不行???那是你没看到优点和好处</div>
            <Divider orientation="right">未应用于项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p>1 代码集中 相同逻辑的处理办法唾手可得</p>
                <p>2 方便接口的增查改删流程单元测试 (没错接口的测试独立于页面逻辑之外)</p>
                <p>3 接口wiki都可以写在这里 方便查收备份 (接口归前端写)</p>
                <p>4 规范规范规范 写得好的跟写的差的一目了然</p>
                <p>5 接口字段或者接口格式写的再浪 在这里转换成我们方便使用的名称(驼峰写法),格式</p>
                <p>6 接口定义放在这里 注意不要放置敏感内容</p>
                <hr />
                <h3>1 日期范围是两个字段(对应数据库) 但是在我们的控件是一个数组</h3>
                <h3 class="text-dange">表单对于日期范围用的不多</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                            confirm ({ date }) {
                                return new Promise((resolve, reject) => {
                                    // 请注意 必填校验放外面
                                    const begin = date[0]
                                    const end = date[1]
                                    axios({
                                        method: 'POST',
                                        url: '/api/attendance/confirm',
                                        data: {
                                            begin,
                                            end
                                        }
                                    }).then(response => { // 请注意这个返回值是整个结果对象
                                        const res = response.data
                                        if (res && res.data && res.data.res) {
                                            success(res.msg || '操作成功')
                                            resolve(res.data.res)
                                        } else {
                                            error(res.msg || '操作失败') // 报错并继续reject
                                            reject()
                                        }
                                    }).catch(e => {
                                        error(e.message) // ajax异常后 报错并中止操作
                                    })
                                })
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // 这是api接口
                            /* 'title': '我的考勤-确认考勤',
                                'url': '/api/attendance/confirm',
                                'method': 'post',
                                'params': {
                                    'begin': '2018-10-26',
                                    'end': : '2018-11-25'
                                },
                                'response': {
                                    'code': '200',
                                    'msg': '',
                                    'data': {
                                        'res': 0, // 1成功 0失败
                                    }
                                }
                            */
                            // 这是业务逻辑 后期写的 找到接口直接使用 多爽
                            // 回调写按钮loading或者敏感清除 反正不要写错误提示
                            this.$api.attendance.confirm(this.frm).then(() => {
                                this.$router.push({name:...})
                            }, () => {
                                loading = false;
                            })
                        </script>
                    </Col>
                </Row>
                <hr>
                <h3>2 诸多提交的操作都是返回一个成功与否的标记 如果能把这个标记规范化 那么保存提交的回调将简单到极致</h3>
                <h3>--- 核心思路是 把前端与接口的数据交互作为一个重要的事来处理 使双方的数据使用更加流畅顺心</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                            del ({ id }) {
                                return new Promise((resolve, reject) => {
                                    axios({
                                        method: 'POST',
                                        url: '/api/hr/departmentdel',
                                        data: {
                                            id
                                        }
                                    }).then(response => { // 请注意这个返回值是整个结果对象
                                        const res = response.data
                                        if (res && res.data && res.data.res) {
                                            success(res.msg || '操作成功')
                                            resolve(res.data.res)
                                        } else {
                                            error(res.msg || '操作失败') // 报错并继续reject
                                            reject()
                                        }
                                    }).catch(e => {
                                        error(e.message) // ajax异常后 报错并中止操作
                                    })
                                })
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // 这是api接口
                            /* 'title':'人事管理-部门-删除',
                                'url':'/api/hr/departmentdel',
                                'method': 'post',
                                'params':{ 'id':1 },
                                'response':{
                                    'code': '200',
                                    'msg': '该部门下存在子部门，无法删除',
                                    'data':{
                                        'res':0 // 1成功 0失败
                                    }
                                }
                            */
                            // 这是业务逻辑 后期写的 找到接口直接使用 多爽
                            // 回调写按钮loading或者敏感清除 反正不要写错误提示
                            this.$api.hr.department.del({id:10}).then(() => {
                                this.$router.push({name:...})
                            }, () => {
                                loading = false;
                            })
                        </script>
                    </Col>
                </Row>
                <hr>
                <h3>3 像枚举变量可以在开发人员使用前直接</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            // 这摘自项目 略有整理格式
                            this.$get('api/confirmproject/ad_detail', {id: this.id2}).then(res => {
                                this.dataDetail = res.data.data.info;
                                this.dataDetail.businessType =
                                    this.dataDetail.businessType === 1 ? 'DSP、ADN、网吧' :
                                    this.dataDetail.businessType === 2 ? '直客广告' :
                                    this.dataDetail.businessType === 3 ? 'SSP' :
                                    this.dataDetail.businessType === 4 ? 'OP' : '-';
                                switch (this.dataDetail.settleType) {
                                    case 1: this.dataDetail.settleName = '日结'; break;
                                    case 2: this.dataDetail.settleName = '周结'; break;
                                    case 3: this.dataDetail.settleName = '旬结'; break;
                                    case 4: this.dataDetail.settleName = '半月结'; break;
                                    case 5: this.dataDetail.settleName = '月结'; break;
                                    case 6: this.dataDetail.settleName = '两月结'; break;
                                    case 7: this.dataDetail.settleName = '三月结'; break;
                                    case 8: this.dataDetail.settleName = '半年结'; break;
                                    case 9: this.dataDetail.settleName = '年结'; break;
                                    default: this.dataDetail.settleName = '-';
                                }
                            });
                            // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                            adDetail ({ id }) {
                                return new Promise((resolve, reject) => {
                                    axios({
                                        method: 'GET',
                                        url: '/api/confirmproject/ad_detail',
                                        data: {
                                            id
                                        }
                                    }).then(response => { // 请注意这个返回值是整个结果对象
                                        const res = response.data
                                        if (res && res.data && res.data.info) {
                                            const info = res.data.info
                                            info.businessType = ([
                                                '-', 'DSP、ADN、网吧', '直客广告', 'SSP', 'OP'
                                            ][info.businessType] || '-')
                                            info.settleName = ([
                                                '-', '日结', '周结', '旬节', '半月结', '月结', '两月结',
                                                '三月结', '半年结', '年结'
                                            ][info.settleType || 0] || '-')
                                            resolve(info)
                                        } else {
                                            error(res.msg || '未获取到数据') // 报错并继续reject
                                            reject()
                                        }
                                    }).catch(e => {
                                        error(e.message) // ajax异常后 报错并中止操作
                                    })
                                })
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // 这是api接口
                            /* 'title': '详情 直接广告'
                                'url': 'api/confirmproject/ad_detail',
                                'method': 'get',
                                'params': {
                                    id
                                },
                                'response': {
                                    'code': '200',
                                    'msg': '',
                                    'data': {
                                        'info': {
                                            'id': 1, // 0添加 非0编辑
                                            'projectType': 1, // 所属项目
                                            'cusName': 1, // 客户名称
                                            'cusId': 1, // 客户id
                                            'busiName': 1, // 所属商务
                                            'contacts': '段兵宇', // 联系人
                                            'tel': '17788212797', // 电话
                                            'wx': 'ss', // 微信
                                            'qq': '123456', // QQ
                                            'email': '123@qq.com', // 邮箱
                                            'occupation': '开发', // 联系人职位
                                            'foundDate': '2019-02-02', // 公司成立时间
                                            'scale': '100人', // 公司规模
                                            'website': 'www.baidu.com', // 公司网址
                                            'adType': '广告类型说明',
                                            'productName': '产品名称',
                                            'productUrl': '产品链接',
                                            'charging': '计费模式',
                                            'price': 12.00,
                                            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；
                                                            5：月结；6：两月结；7：三月结；8：半年结；9：年结
                                            'flowType': '采购流量类型',
                                            'putAdType': '投放广告形式',
                                            'quantity': '需求量级',
                                            'monthAverage': 12, // 月均预算
                                            'intentionMedie': '意向媒体举例',
                                            'cooperation': '合作伙伴举例',
                                            'flowDemandDesc': '流量需求说明',
                                            'functionDemandDesc': '功能需求说明'
                                            'busName' 商户名称
                                            'contactName' 联系人名称
                                            'cusName' 客户名称
                                            'createdBy': '发动机', // 立项人
                                        }
                                    }
                                }
                            */
                            // 这是业务逻辑 后期写的 找到接口直接使用 多爽
                            // 回调写按钮loading或者敏感清除 反正不要写错误提示
                            this.$api.confirmproject.adDetail.del({id: this.id2}).then(info => {
                                this.dataDetail = info
                                loading = false
                            }, () => {
                                loading = false
                            })
                        </script>
                    </Col>
                </Row>
                <hr>
                <h3>4 表格接口一般都是大量数据 传参指定 请注意 驼峰格式变量/方便好用的格式/返回结构尽量简单</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                            listAdOnLine ({
                                projectType, // 请注意接口文档并没有写本字段 因此我建议
                                // ------------ 借用区块链的管理方式 分三部分保存接口文档 (参考api文件夹)
                                // ------------ wiki保存主要的 前端/后端 保存备份 加上版本号
                                date, keyword, pageIndex, pageSize
                            }) {
                                return new Promise((resolve, reject) => {
                                    const begin = date[0]
                                    const end = date[1]
                                    axios({
                                        method: 'GET',
                                        url: '/api/confirmproject/online_ad',
                                        data: {
                                            projectType,
                                            begin,
                                            end,
                                            keyword,
                                            pageIndex,
                                            pageSize
                                        }
                                    }).then(response => { // 请注意这个返回值是整个结果对象
                                        const res = response.data
                                        if (res && res.data && res.data.list) {
                                            resolve(res.data) // 有分页 返回父层级
                                        } else {
                                            error(res.msg || '未获取到数据') // 报错并继续reject
                                            reject()
                                        }
                                    }).catch(e => {
                                        error(e.message) // ajax异常后 报错并中止操作
                                    })
                                })
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // 这是api接口
                            /* 'title': '上线广告管理',
                                'url': 'api/confirmproject/online_ad',
                                'method': 'get',
                                'params': {
                                    'begin': '2019-02-28',
                                    'end': '2019-02-28',
                                    'keyword': 'xx' // 投放渠道/广告类型/展现形式
                                    'pageIndex': 1,
                                    'pageSize': 30
                                },
                                'response': {
                                    'code': '200',
                                    'msg': '',
                                    'data': {
                                        'list': [{
                                            id
                                            'adNum': 'xxxxxx', // 广告编号
                                            'adType': '广告类型',
                                            'presentation': '展现形式',
                                            'channel': '投放渠道',
                                            'charging': '计费模式',
                                            'chargingPrice': 12.00 // 计费单价
                                            'putTime': '2018-01-01', // 投放时间
                                            'endTime': '2019-01-03' // 结束时间
                                        }]
                                        'rowcount': 22
                                    }
                                }
                            */
                            // 这是业务逻辑 后期写的 找到接口直接使用 多爽
                            this.search = {
                                'projectType': '',
                                'date': '', // 开始时间 - 结束时间
                                'keyword': '', // 任务名称
                                'pageIndex': 1,
                                'pageSize': 30
                            };
                            this.$api.confirmproject.listAdOnLine(this.search).then(data => {
                                this.tableData = data.list;
                                this.rowCount = data.rowcount;
                                this.loading = false;
                            }, () => {
                                this.loading = false;
                            })
                        </script>
                    </Col>
                </Row>
                <hr>
                <h3 class="text-danger">5 链接下载写法建议 下载方式未测试 待完成</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            this.url = 'api/contract/contractmanager_export' +
                            '?projectType=' + this.obj.projectType +
                            '&begin=' + v1 +
                            '&end=' + v2+
                            '&contractType=' +contractType +
                            '&type=' + type +
                            '&companyId=' + contractSubject +
                            '&keyword=' + this.obj.keyword
                        </script>
                    </Col>
                </Row>
                <hr>
                <h3>6 提交时刻根据数据特点整理转换 这里的日期范围需要特殊处理(可能包含日期对象或字符串格式)</h3>
                <br>
                <Row :gutter="5">
                    <Col span="12">
                        <script type="text/js">
                            // 这是api模块 这里的代码应该是开发初期作为工作量写好的
                            import { dateFormat } from '@/utils/date' // 常用方法
                            listAdOnLine ({
                                projectType, contractSubject, contractType, type, date,
                                keyword, pageIndex, pageSize
                            }) {
                                /* 请注意 最简易字符串转数字方式 */
                                projectType = projectType ? projectType * 1 : ''
                                /* 请注意 数据库不接受0 -1 */
                                contractType = contractType === 0 ? '' : contractType
                                type = type === -1 ? '' : type
                                const companyId = contractSubject === 0 ? '' : contractSubject
                                /* 请注意 i-datapicker 控件 */
                                /* 使用value/onchange方式 和使用model方式赋值 */
                                /* 其得到的结果分别为 字符串 日期对象 格式 */
                                /* 必须要转换一下 */
                                const begin = dateFormat(date[0])
                                const end = dateFormat(date[1])
                                return new Promise((resolve, reject) => {
                                    axios({
                                        method: 'GET',
                                        url: '/api/confirmproject/online_ad',
                                        data: {
                                            projectType,
                                            companyId,
                                            contractType,
                                            type,
                                            begin,
                                            end,
                                            keyword,
                                            pageIndex,
                                            pageSize
                                        }
                                    }).then(response => { // 请注意这个返回值是整个结果对象
                                        const res = response.data
                                        if (res && res.data && res.data.list) {
                                            resolve(res.data) // 有分页 返回父层级
                                        } else {
                                            error(res.msg || '未获取到数据') // 报错并继续reject
                                            reject()
                                        }
                                    }).catch(e => {
                                        error(e.message) // ajax异常后 报错并中止操作
                                    })
                                })
                            },
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // 这是api接口
                            /* 'title': '合同管理（我的合同管理）',
                                'url': 'api/contract/mycontract',
                                'method': 'get',
                                'params': {
                                    'projectType': 1, // 所属项目
                                    'companyId': 1, // 合同主体
                                    'contractType': 1, // 合同类型
                                    'type': 1, // 合同种类 0.普通 1.框架
                                    'begin': '2018-07-15', // 开始时间
                                    'end': '2018-07-15', // 结束时间
                                    'keyword': '',
                                    'pageIndex': 1,
                                    'pageSize': 30
                                },
                                'response': {
                                    'code': '200',
                                    'msg': '',
                                    'data': {
                                        'list': [{
                                            'id': 1
                                            'contractNum': '合同编号',
                                            'contractName': '合同名称',
                                            'type': 1, // 合同种类0.普通 1.框架
                                            'busName': 'kehu', // 客户名称
                                            'contractType': 1 // 合同类型1.其他 2.媒体合同 3.广告主合同
                                            'updatedTime': '2018-04-41'
                                            'contractPrice': 12.5 // 合同金额
                                            'isChange': 1 // 1.变更 0.没变更
                                        }],
                                        'rowcount': 22
                                    }
                                }
                            */
                            // 这是业务逻辑 后期写的 找到接口直接使用 多爽
                            import { sevenRange } from '@/utils/date' // 常用方法
                            var onWeakTimeStr = sevenRange() // 初始化使用一周时间
                            this.search = {
                                'projectType': '',
                                'date': onWeakTimeStr, // 开始时间 - 结束时间
                                'contractType': '',
                                'type': '',
                                'companyId': '',
                                'keyword': '', // 任务名称
                                'pageIndex': 1,
                                'pageSize': 30
                            }
                            this.$api.contract.listAdOnLine(this.search).then(data => {
                                this.tableData = data.list;
                                this.rowCount = data.rowcount;
                                this.loading = false;
                            }, () => {
                                this.loading = false;
                            })
                        </script>
                    </Col>
                </Row>
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
