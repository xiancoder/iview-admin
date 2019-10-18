import Vue from 'vue'
import { router } from '@/router'
import { Message, Modal, LoadingBar } from 'iview'
import { Store } from '@/store' // 状态管理 -挂载$stroe
import { type } from '@/utils/object'
/// ////////////////////////////////////////////////////
// 常用的操作封装
/// ////////////////////////////////////////////////////
export const goto = (config) => { // 弹框提示
    const current = router.history.current
    if (type(config) === 'string') config = { name: config }
    if (config.name === current.name || config.path === current.path) {
        return router.replace(config).catch(err => {
            if (err.name === 'NavigationDuplicated') return console.log('仙', '路由重复打开小问题')
        })
    }
    router.push(config)
}
export const alert = (msg) => { // 弹框提示
    Message.info({ content: msg || '处理中，请稍后' })
}
export const success = (msg) => { // 成功提示
    Message.success({ content: msg || '保存成功' })
}
export const error = (msg) => { // 错误提示
    Message.error({ content: msg || '保存失败', duration: 10, closable: true })
}
export const confirm = (msg) => { // 二次确认框
    return new Promise((resolve, reject) => {
        Modal.confirm({
            title: '请确认',
            content: '<p>' + msg + '</p>',
            onOk: resolve || function () {},
            onCancel: reject || function () {}
        })
    })
}
export const jumpto = (name, obj) => { // 跳转
    if (obj) { router.push({ name, obj }) } else if (name) { router.push({ name }) } else { window.location.reload() }
}
export const saveParamState = (obj) => { // 保存当前参数
    const time = new Date().getTime()
    const name = router.history.current.name
    const paramList = Store.state.system.paramList
    paramList[name + time] = obj
    const query = { 'search': time }
    router.push({ name, query })
}
export const getParamState = () => { // 获取当前参数
    const time = router.history.current.query.search
    if (time) {
        const name = router.history.current.name
        const paramList = Store.state.system.paramList
        const obj = paramList[name + time]
        return obj
    }
    return {}
}
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
            const row = params.row;
            return h('div', row[a] || b);
        }
    },
    // 读取数字显示对应 没有队形默认显示 -
    // 值, 对应数组, 默认符
    readArr: (a, b, c) => {
        c = c || '-'
        return (h, params) => {
            const row = params.row;
            const text = b[row[a]];
            return h('div', text || c);
        }
    },
    end: null // 错误占位符
}
export const LoadingBarRun = (flag) => { // 顶部进度条执行
    if (flag) {
        LoadingBar.start()
    } else {
        LoadingBar.finish()
    }
}
Vue.prototype.$tool = {
    goto,
    alert,
    success,
    error,
    confirm,
    jumpto,
    saveParamState,
    getParamState,
    h,
    LoadingBarRun
}
