import Vue from 'vue'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
// Vue原型链中 Message 是 iview 提供的
// =====================================================================
// 提示控件 指定 显示位置
iView.Message.config({ top: 300, duration: 3 })
// =====================================================================
// 日期控件 指定 placeholder / 间隔字符 / 日期格式
iView.DatePicker.mixins[0].props.placeholder.default = '请选择日期'
iView.DatePicker.mixins[0].props.separator.default = ' 至 '
iView.DatePicker.mixins[0].props.format.default = 'yyyy-MM-dd'
// =====================================================================
// 表格控件 指定 最大高度 方便左右滚动时候直观看到横向滚动条
iView.Table.props.maxHeight.default = function () {
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    return height - 144
}
// =====================================================================
Vue.use(iView)
