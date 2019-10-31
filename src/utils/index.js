import Vue from 'vue' // 核心
import * as object from './object'
import * as array from './array'
import * as date from './date'
import * as string from './string'
import * as number from './number'
import regexp from './regexp'
import * as table2excel from './table2excel'
Vue.prototype.$util = {
    object,
    array,
    date,
    string,
    number,
    regexp,
    table2excel
}
