import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具
import { dateFormat } from '@/utils/date'

export default {

    /* 'title':'人事管理-员工-添加or编辑',
        'url':'/api/hr/employeredit',
        'method': 'post',
        'params':{
            'id':1,//null添加
            'departmentIds':[1,2,3],//负责部门的ID数组
            'userName':'duan'//姓名
            'gender':1,//性别：1，男，2，女
            'tel':'1888888888'//电话
            'email':'example@yunxi.cn'//邮箱
            'marriage':1,//婚姻状况0:未婚，1：已婚，2：未知
            'idNum':'12345678911'//身份证号
            'birthday':'19890406'//生日
            'qq':'10460258'//QQ
            'address':'河北省石家庄市'//家庭住址
            'postIds':[1,2,3],//职位ID数组
            'postMain': 3, //主职位ID
            'postTemp': 9, //临时职位ID，若无传0
            'postTempName': '主管', //临时职位名称
            'jobNum':'123456'//工号
            'entryDate':'2018-04-05'//入职日期
            'regularDate':'2018-04-05'//转正日期
            'oaroleid':1,//OA系统角色
            'accountManager':1//是否账号管理员
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
            }
        }
    */
    edit ({
        id,
        departmentIds,
        userName,
        gender,
        tel,
        email,
        marriage,
        idNum,
        birthday,
        qq,
        address,
        postIds,
        postMain,
        postTemp,
        postTempName,
        jobNum,
        entryDate,
        regularDate,
        oaroleid,
        accountManager
    }) {
        if (birthday !== null && typeof (birthday) === 'object') {
            birthday = dateFormat(birthday)
        }
        if (entryDate !== null && typeof (entryDate) === 'object') {
            entryDate = dateFormat(entryDate)
        }
        if (regularDate !== null && typeof (regularDate) === 'object') {
            regularDate = dateFormat(regularDate)
        }
        if (!Array.isArray(departmentIds)) {
            departmentIds = null
        }
        if (!Array.isArray(postIds)) {
            postIds = null
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/employeredit',
                data: {
                    id,
                    departmentIds,
                    userName,
                    gender,
                    tel,
                    email,
                    marriage,
                    idNum,
                    birthday,
                    qq,
                    address,
                    postIds,
                    postMain,
                    postTemp,
                    postTempName,
                    jobNum,
                    entryDate,
                    regularDate,
                    oaroleid,
                    accountManager
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-修改部门（此功能已停用）',
        'url':'/api/hr/changedepartment',
        'method': 'post',
        'params':{
            'id':[1,2],//员工id
            'departmentid':[1,2]//部门id
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
            }
        }
    */
    editDept ({ users, departmentids }) {
        const usersIds = []
        if (Array.isArray(users)) {
            users.map(item => { usersIds.push(item.id) })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changedepartment',
                data: {
                    id: usersIds,
                    departmentid: departmentids
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-修改职位状态',
        'url':'/api/hr/changestatus',
        'method': 'post',
        'params':{
            'id':[1,2],//员工id
            'userStatus':2//用户状态, 0:离职，1:在职,2休假
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
             }
        }
    */
    editPostStatus ({ users, userStatus }) {
        const id = []
        if (Array.isArray(users)) {
            users.map(item => { id.push(item.id) })
        }
        userStatus = parseInt(userStatus || 0)
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changeuserStatus',
                data: {
                    id,
                    userStatus
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-重置密码',
        'url':'/api/hr/resetpwd',
        'method': 'get',
        'params':{
            'id':1//员工id
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
             }
        }
    */
    resetPwd ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/resetpwd',
                data: {
                    id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-修改角色',
        'url':'/api/hr/changederole',
        'method': 'get',
        'params':{
            'id':1,//员工id
            'roleid':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
             }
        }
    */
    editRole ({ id, roleid }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/changederole',
                data: {
                    id,
                    roleid
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-QQ解绑',
        'url':'/api/hr/qq_unbind',
        'method': 'get',
        'params':{
            'id':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
             }
        }
    */
    unbindQQ ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/qq_unbind',
                data: {
                    id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-获取',
        'url':'/api/hr/employer',
        'method': 'get',
        'params':{
            'departmentid':1,//null为所有
            'userStatus':1,//用户状态, 0:离职，1:在职
            'postId': 3,4,5 //职位id
            'keyword':'sdfsd'//工号或姓名
            'pageIndex':1,
            'pageSize':30
            },
        'response':{
            'code': '200',
            'msg': '',
            'data':[{
                'id':1,
                'userName':'duan',//姓名
                'tel':'17788212798',//电话
                'department':[{'id':1,'name':'项目组'}],//负责人
                'jobNum':'1000001',//工号
                'post':'总经理',//职务
                'email':'duanbingyu@52yunxi.cn',//账号
                'userStatus':1,//状态
                'userPhoto':'sxx.jpg'
             }],
             rowCount:100
           }
        }
    */
    list ({
        depId, // null为所有
        status, // 用户状态, 0:离职，1:在职
        keyword, // 工号或姓名
        postIds, // 职位 多选数组
        page, // 分页
        pageSize // 单页数量
    }) {
        if (status === -1) { status = null }
        if (postIds instanceof Array) { postIds = postIds.join(',') }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/employer',
                data: {
                    'departmentid': depId, // 对应后台字段
                    'userStatus': status, // 对应后台字段
                    keyword
                    postIds,
                    'page_index': page, // 对应后台字段
                    'page_size': pageSize
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-详情',
        'url':'/api/hr/employerdetail',
        'method': 'get',
        'params':{ 'id':1 },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'result':{
                    'id':1
                    'departmentIds':[1,2,3],//负责部门的ID数组
                    'department':[{'id':1,'name':'项目组'}],//部门
                    'userName':'duan'//姓名
                    'gender':1,//性别：1，男，2，女
                    'tel':'17788212798'//电话
                    'email':'example@yunxi.cn'//邮箱
                    'marriage':1,//婚姻状况0:未婚，1：已婚，2：未知
                    'idNum':'123************911'//身份证号
                    'birthday':'19890406'//生日
                    'qq':'10460258'//QQ
                    'address':'河北省石家庄市'//家庭住址
                    'postIds':[1,2,3],//职位ID数组
                    'postName': ['aaa','bbb']//职位名称数组
                    'postArr': [{id: 1, name: 'xxx'}]//职位对象数组
                    'postMain': 3 //主职位id
                    'postMainName': 'xxx' //主职位名称
                    'postTemp': 9, //临时职位ID，若无传0
                    'postTempName': '主管', //临时职位名称
                    'jobNum':'123456'//工号
                    'entryDate':'2018-04-05'//入职日期
                    'regularDate':'2018-04-05'//转正日期
                    'oaRoleId':1//OA系统角色id
                    'oaRoleName':'高级管理员'//OA系统角色名称
                    'userPhoto':'xxxx.jpg'//头像路径
                    'bindQQ':true//是否绑定qq
                    'nickName':'qq昵称',
                    'accountManager':1//是否账号管理员
                }
            }
        }
    */
    detail ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/employerdetail',
                data: {
                    'userId': id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.result) {
                    resolve(res.data.result)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-详情-身份证号',
        'url':'/api/hr/detail_idNum',
        'method': 'get',
        'params':{
            'userId':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'idNum':'130156546487954654'
             }
        }
    */
    detailIdNum ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/detail_idNum',
                data: {
                    'userId': id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.idNum) {
                    resolve(res.data.idNum)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-员工-获取人员状态下拉框',
    */
    pullStatus () {
        return Promise.resolve([
            {id: '-1', name: '全部状态'},
            {id: '2', name: '在职'},
            {id: '1', name: '休假'},
            {id: '0', name: '离职'}
        ])
    },

    end: 'api' // 防呆设计
}
