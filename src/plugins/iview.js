import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// Vue原型链中 Message 是 iview 提供的
// =====================================================================
// 提示控件 指定 显示位置
iView.Message.config({ top: 400, duration: 3 })
// 日期控件 指定 placeholder / 间隔字符 / 日期格式
iView.DatePicker.mixins[0].props.placeholder.default = '请选择日期'
iView.DatePicker.mixins[0].props.separator.default = ' 至 '
iView.DatePicker.mixins[0].props.format.default = 'yyyy-MM-dd'
// =====================================================================
Vue.use(iView)
