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
// iView.TimePicker.mixins[0].props.format.default = 'HH:mm:ss'
iView.TimePicker.mixins[0].props.editable.default = false
// =====================================================================
// 表格控件 指定 最大高度 方便左右滚动时候直观看到横向滚动条
// iView.Table.props.maxHeight.default = function () {
//     const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//     return height - 144 - 150
// }
iView.Table.props.stripe.default = true // 是否显示间隔斑马纹 默认false
// iView.Table.props.border.default = true // 是否显示纵向边框 默认false
// iView.Table.props.showHeader.default = true // 是否显示表头 默认true
iView.Table.props.noDataText.default = '没有展示内容,要不您新建一些' // 数据为空时显示的提示内容 默认暂无数据
iView.Table.props.noFilteredDataText.default = '没有找到内容,要不您新建一些' // 筛选数据为空时显示的提示内容String 默认暂无筛选结果
iView.Table.props.tooltipTheme.default = 'light' // 列使用 tooltip 时，配置它的主题，可选值为 dark 或 light 默认dark
iView.Table.props.sumText.default = '汇总：' // 合计行第一列的文本 默认合计
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
