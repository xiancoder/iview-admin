import Vue from 'vue' // 核心
import { router } from '@/router' // 自定义路由定义
import iView from '@/plugins/iview'
// import { Store } from '@/store' // 自定义状态管理 // 状态管理 -挂载$stroe
import { type, thousand, toDecimalForce, encodeBase64, decodeBase64 } from '@/utils'

const { Message, Modal, LoadingBar, Notice } = iView

/// ////////////////////////////////////////////////////
// 常用的操作封装
/// ////////////////////////////////////////////////////
// 页面信息提示 小的需要一闪而过的信息
export const alert = (msg) => { // 弹框提示
    Message.info({ content: msg || '处理中，请稍后' })
}
export const success = (msg) => { // 成功提示
    Message.success({ content: msg || '保存成功' })
}
let lastStatus401 = false
export const error = (msg) => { // 错误提示
    // 特殊处理 如果遇到401错误
    // 不会连着提示两次
    if (msg === '未授权，请重新登录') {
        if (lastStatus401) { return false }
        lastStatus401 = true
    }
    setTimeout(() => {lastStatus401 = false}, 2e3)
    Message.error({ content: msg || '保存失败', duration: 3, closable: true })
}

const configModal = (msg) => {
    return {
        width: msg.length < 300 ? 416 : 600, // 宽度，单位 px
        scrollable: true, // 页面是否可以滚动
        closable: true // 是否可以按 Esc 键关闭
    }
}

// 页面信息提示 大的需要用户看清楚的信息
export const alertMsg = (msg, title, onOk) => { // 弹框提示
    const config = {
        title: title || '提示信息',
        content: '<div style=" word-break: break-all; ">' + (msg || '-') + '</div>',
        ...configModal(msg)
    }
    if (onOk) {config.onOk = onOk}
    Modal.info(config)
}
export const successMsg = (msg, title) => { // 弹框成功提示
    Modal.success({
        title: title || '成功信息',
        content: msg || '保存成功',
        ...configModal(msg)
    })
}
export const errorMsg = (msg, title) => { // 弹框失败提示
    Modal.error({
        title: title || '失败信息',
        content: msg || '保存失败',
        ...configModal(msg)
    })
}
export const warningMsg = (msg, title) => { // 弹框警告提示
    Modal.warning({
        title: title || '警告信息',
        content: msg || '-',
        ...configModal(msg)
    })
}
export const closeMsg = Modal.remove // 关闭信息框们

// 页面信息提示 需要用户确认信息
export const confirm = (msg, title) => { // 二次确认框
    return new Promise((resolve, reject) => {
        Modal.confirm({
            title: title || '请确认',
            content: '<p>' + msg + '</p>',
            ...configModal(msg),
            onOk: resolve,
            onCancel: reject
        })
    })
}
// 页面信息提示 需要用户确认信息
export const confirmAjax = (msg, title) => { // 二次确认框
    return new Promise((resolve, reject) => {
        Modal.confirm({
            title: title || '请确认',
            content: '<p>' + msg + '</p>',
            ...configModal(msg),
            loading: true, // loading 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框
            onOk: resolve,
            onCancel: reject
        })
    })
}
export const noticeNoSave = () => { // 未保存二次确认框
    return new Promise((resolve, reject) => {
        Notice.info({
            title: '友情提示',
            render: h => {
                return h('span', [
                    '本页面曾经有未提交的内容, 是否',
                    h('a', {
                        attrs: { href: 'javascript:void(0)' },
                        on: { 'click': resolve }
                    }, '恢复'),
                    ' ??'
                ])
            }
        });
    })
}

// 页面跳转路由
export const goto = (config, replace) => { // 页面跳转
    const current = router.history.current
    if (type(config) === 'string') config = { name: config }
    if (config.name === current.name || config.path === current.path || replace) {
        return router.replace(config).catch(err => {
            if (err.name === 'NavigationDuplicated') return console.log('仙', '路由重复打开小问题')
        })
    }
    router.push(config)
}
export const jumpto = (name, obj) => { // 页面跳转
    if (obj) { router.push({ name, obj }) } else if (name) { router.push({ name }) } else { window.location.reload() }
}

// 表格数据的参数批量管理 存url
export const saveParamState = (obj) => { // 保存当前参数
    // 保存到ls里面 通过保存search来指定获取哪部分已存参数
    // 不好 商务要求url拷贝时候需要携带信息
    /*
    const time = new Date().getTime()
    const paramList = Store.state.system.paramList
    paramList[name + time] = obj
    const query = { 'search': time }
    router.replace({ name, query })
    */
    // 直接存
    /*
    router.replace({ name, query: obj })
    */
    // 对象整成json存
    /*
    const json = JSON.stringify(obj)
    router.replace({ name, query: {json} })
    */
    const name = router.history.current.name
    const jsonOld = router.history.current.query.json
    // 对象整成json并bs64转码
    const json = encodeBase64(JSON.stringify(obj))
    // 先比较再保存 不然老是报错 Navigating to current location ("XXXXXX") is not allowed
    if (jsonOld !== json) {
        router.replace({ name, query: {json} })
    }
}
export const getParamState = () => { // 获取当前参数
    // 保存到ls里面 通过保存search来指定获取哪部分已存参数
    // 不好 商务要求url拷贝时候需要携带信息
    /*
    const time = router.history.current.query.search
    if (time) {
        const name = router.history.current.name
        const paramList = Store.state.system.paramList
        const obj = paramList[name + time]
        return obj
    }
    return {}
    */
    // 直接存
    /*
    return router.history.current
    */
    // 对象整成json存
    /*
    const json = router.history.current.query.json
    if (json) { return JSON.parse(json) }
    return {}
    */
    // 对象整成json并bs64转码
    const json = router.history.current.query.json
    if (json) { return JSON.parse(decodeBase64(json)) }
    return {}
}

// 通用渲染格式
export const h = { // 通用渲染格式 for 表格 (即将废弃)
    // vue 2.5.14 以上就不再支持h.rander 直接返回字符串了
    // 渲染头像 用户名 电话
    // 参数 头像, 用户名, 电话, 职位
    avatar1: (a, b, c, d) => {
        return (h, params) => {
            const row = params.row;
            return h('div', {}, [
                h('div', {
                    style: { 'display': 'inline-block', 'vertical-align': 'middle', 'margin-right': '10px' }
                }, [
                    row[a]
                        ? h('Avatar', { props: { src: row[a] } })
                        : h('Avatar', { style: { color: '#f56a00', 'background-color': '#fde3cf' } }, row[b][0])
                ]),
                h('div', {
                    style: { 'display': 'inline-block', 'vertical-align': 'middle' }
                }, [
                    h('div', (row[b] || '-') + ' ' + (row[c] || '')),
                    row.department.map(item => {
                        return h('Tag', {
                            props: { color: 'blue' },
                            style: { 'text-align': 'center', 'padding': '1px 4px', 'display': 'inline-block' }
                        }, item[d]);
                    })
                ])
            ])
        }
    },
    avatar2: (a, b, c, d) => {
        return (h, params) => {
            const row = params.row;
            let ds = []
            if (Object.prototype.toString.call(row[d]) === '[object Array]') ds = row[d]
            if (Object.prototype.toString.call(row[d]) === '[object String]') ds = row[d].split(',')
            return h('div', {}, [
                h('div', {
                    style: { 'display': 'inline-block', 'vertical-align': 'middle', 'margin-right': '10px' }
                }, [
                    row[a]
                        ? h('Avatar', { props: { src: row[a] } })
                        : h('Avatar', { style: { color: '#f56a00', 'background-color': '#fde3cf' } }, row[b][0])
                ]),
                h('div', {
                    style: { 'display': 'inline-block', 'vertical-align': 'middle', 'margin': '10px 0' }
                }, [
                    h('div', (row[b] || '-') + ' ' + (row[c] || '')),
                    ds.map(item => {
                        return h('Tag', {
                            props: { color: 'blue' },
                            style: { 'text-align': 'center', 'padding': '1px 4px', 'display': 'inline-block' }
                        }, item);
                    })
                ])
            ])
        }
    },
    // 渲染字符串列表 默认逗号分隔
    // 字符串, 分隔符
    strList1: (a, b) => {
        b = b || ','
        return (h, params) => {
            const row = params.row;
            return h('div', {
                style: { 'display': 'inline-block', 'vertical-align': 'middle' }
            }, [
                row[a] && row[a].split(b).map(item => {
                    return h('Tag', {
                        style: { 'text-align': 'center', 'padding': '1px 4px', 'display': 'inline-block' }
                    }, item);
                })
            ])
        }
    },
    // 正常渲染 默认空值显示 -
    // 值, 默认符
    defaultH: (a, b) => {
        b = b || '-'
        return (h, params) => {
            const row = params.row
            return h('div', row[a] || b)
        }
    },
    // 枚举数组 读取数字显示对应 没有对应默认显示 -
    // 值, 对应数组, 默认符
    readArr: (a, b, c) => {
        c = c || '-'
        return (h, params) => {
            const row = params.row
            const text = b[row[a].toString()]
            return h('div', text || c);
        }
    },
    // 对金钱进行 强制保留2位并前千分格式化
    // 值
    moneyFormat: (a, c) => {
        c = c || '-'
        return (h, params) => {
            const row = params.row
            const text = thousand(toDecimalForce(parseFloat(row[a] || 0)))
            return h('div', text || c);
        }
    },
    // 多条属性分行展示
    // 值,属性数组
    multiline: (a, c) => {
        c = c || []
        return (h, params) => {
            const row = params.row
            const arr = []
            c.forEach(item => {
                const text = row[item] || '-'
                arr.push(h('div', text))
            })
            return h('div', arr)
        }
    },
    // 显示圆形头像
    showHead: (a) => {
        return (h, params) => {
            const row = params.row;
            return h('Avatar', { props: { src: row[a] } })
        }
    },
    // 显示方形素材
    showPic: (a) => {
        return (h, params) => {
            const row = params.row;
            return h('img', {
                attrs: { src: row[a] },
                style: { 'text-align': 'center', 'width': '50%', 'display': 'inline-block' }
            })
        }
    },
    end: null // 错误占位符
}

// 顶部进度条全局控制
export const LoadingBarRun = (flag) => { // 顶部进度条执行
    if (flag) {
        LoadingBar.start()
    } else {
        LoadingBar.finish()
    }
}

// 表格的全局管理方法
export const companyTableSumColumns = (columns, sumData) => { // 表格总计一列的计算方法总结
    const sums = {};
    columns = columns || []
    sumData = sumData || {}
    columns.forEach((column, index) => {
        const key = column.key;
        if (index === 0) {
            sums[key] = { key, value: '汇总' }
        } else {
            const x = sumData[key]
            let y = (x === null || x === undefined) ? '' : thousand(toDecimalForce(parseFloat(x || 0)))
            sums[key] = { key, value: y }
        }
    })
    return sums;
}

// 表格常用的方法挂载在vue原型上
Vue.prototype.showPageCount = function (totalCount, page, pageCount) { // 显示 '第 1 页/ 共 1 页'
    totalCount = totalCount || 0
    page = page || 1
    pageCount = pageCount || 10
    if (totalCount === 0) { return '当前第0 - 0条，共0条' }
    var startPage = (page - 1) * pageCount + 1
    var endPage = (page * pageCount < totalCount) ? page * pageCount : totalCount
    return '当前第  ' + startPage + ' - ' + endPage + '条，共 ' + totalCount + ' 条'
}
Vue.prototype.showPageRow = function (totalCount, page, pageCount) { // 显示 '当前显示 0 - 0 条/ 0 条数据'
    totalCount = totalCount || 0
    page = page || 1
    pageCount = pageCount || 10
    if (totalCount === 0) { return '第 1 页/ 共 1 页' }
    const totalPage = Math.floor((totalCount + pageCount - 1) / pageCount)
    return '第 ' + page + ' 页 / 共 ' + totalPage + ' 页'
}

// 输出
/* Vue.prototype.$tool = {
    goto,
    alert,
    success,
    error,
    alertMsg,
    successMsg,
    errorMsg,
    warningMsg,
    closeMsg,
    confirm,
    jumpto,
    saveParamState,
    getParamState,
    h,
    LoadingBarRun,
    companyTableSumColumns
} */
