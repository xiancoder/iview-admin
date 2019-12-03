
export default {
    roleList () { // 角色区分权限
        return Promise.resolve([
            { id: '1', name: '广告主' },
            { id: '2', name: '运营' },
            { id: '3', name: '财务' }
        ])
    },
    companyList (forTableShow) { // 四个公司区分 forTableShow指表格枚举
        if (forTableShow) {
            return ['', 'www.jinjingzhiyuan.com', 'www.pingfuxinxi.com', 'www.yunxiwangluo.com', 'www.yunxizhihui.com']
        }
        return Promise.resolve([
            { id: '1', name: '宁静致远科技服务河北有限公司' },
            { id: '2', name: '平复信息技术河北有限公司' },
            { id: '3', name: '云袭网络技术河北有限公司' },
            { id: '4', name: '云袭智慧在线科技发展（北京）有限公司' }
        ])
    },
    end () {} // 错误占位符
}
