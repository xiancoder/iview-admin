import Vue from 'vue' // 核心
import iView from 'view-design'
import '@S/iview.less'
// Vue原型链中 Message 是 iview 提供的
// =====================================================================
// 提示控件 指定 显示位置
iView.Message.config({ top: 100, duration: 3 })
// =====================================================================
// 日期控件 指定 placeholder / 间隔字符 / 日期格式
iView.DatePicker.mixins[0].props.placeholder.default = '请选择日期'
// iView.DatePicker.mixins[0].props.placement.default = 'bottom-end'
iView.DatePicker.mixins[0].props.separator.default = ' 至 '
iView.DatePicker.mixins[0].props.format.default = 'yyyy-MM-dd'
iView.DatePicker.mixins[0].props.editable.default = false
iView.TimePicker.mixins[0].props.format.default = 'HH:mm:ss'
// =====================================================================
// 表格控件 指定 最大高度 方便左右滚动时候直观看到横向滚动条
// iView.Table.props.maxHeight.default = function () {
//     const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//     return height - 144 - 150
// }
// =====================================================================
// 分页控件 指定 如果显示的话默认内容 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, '全部']
iView.Page.props.pageSizeOpts.default = function () {
    return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 999]
}
// =====================================================================
// 消息通知的位置
iView.Notice.config({ top: 70, duration: 10 });
// =====================================================================
Vue.use(iView)
export default iView
