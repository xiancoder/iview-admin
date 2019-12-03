// 项目::过滤器模块
// 负责::所有的过滤器在这里初始化
import Vue from 'vue' // 核心
// =====================================================================
import * as dateJs from '@/utils/date'
import * as stringJs from '@/utils/string'
import * as numberJs from '@/utils/number'

// 日期格式
Vue.filter('dateformat', (val) => {
    return dateJs.dateFormater(val, 'YYYY-MM-DD')
})
// 数字千分符 (可带小数)
// 10000 => "10,000"
Vue.filter('numberformat', numberJs.thousand)
// 金钱千分符 (强制2位小数)
// 10000 => "10,000.00"
Vue.filter('moneyformat', (val) => {
    return numberJs.thousand(numberJs.toDecimalForce(parseFloat(val || 0)))
})
// 首字母大写
Vue.filter('capitalize', stringJs.capitalize)
// 解码字符串
Vue.filter('decode', (val) => {
    return val ? decodeURIComponent(val) : '-'
})
// 价格补零
Vue.filter('zeroPrice', (val) => {
    val = parseFloat(val);
    return val ? val.toFixed(2) : '0.00'
})
// 默认为空的时候自动补 '-'
Vue.filter('Complement', (val) => {
    return val || '-'
})
// ????
Vue.filter('change', {
    read: function (value) {
        return value // model -> view 在更新 `<input>` 元素之前格式化值
    },
    write: function (newVal, oldVal) {
        console.info('newVal:' + newVal) // view -> model 在写回数据之前格式化值
        console.info('oldVal:' + oldVal)
        return newVal
    }
})
