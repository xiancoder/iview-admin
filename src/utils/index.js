'use strict';

import * as array from './base.array.js'
import * as string from './base.string.js'
import * as date from './base.date.js'
import * as date2 from './moment.date.js'
import * as number from './base.number.js'
import * as object from './base.object.js'
import * as dom from './base.dom.js'
import regExp from './base.regexp.js'
import * as event from './base.event.js'
// import * as cookie from './base.cookie.js'
import * as func from './base.function.js'
import exCel from './base.excel.js'

export const unique = array.unique
export const uniqueObj = array.uniqueObj
export const arrayUnique = array.arrayUnique
export const arrayContrast = array.contrast
export const arrayFilter = array.arrayFilter
export const arrayContains = array.arrayContains
export const arrayIntersect = array.arrayIntersect
export const arrayMinus = array.arrayMinus
export const arrayUnion = array.arrayUnion
export const arrayComplement = array.arrayComplement
export const arrayShuffle = array.arrayShuffle

export const dateFormater = date.dateFormater
export const sevenRange = date.sevenRange
export const todayMouth = date.todayMouth
export const dateAdd = date.dateAdd
export const dateSub = date.dateSub
export const date2all = date.date2all
export const timestamp2Date = date.timestamp2Date
export const dateEqual = date.dateEqual

export const dateFormat = date2.dateFormat
export const howManyToToday = date2.howManyToToday
export const computeRange = date2.computeRange
export const computeRangeByMouth = date2.computeRangeByMouth

export const type = object.type
export const extend = object.extend
export const extendF = object.extendF
export const objEqual = object.objEqual
export const deepClone = object.deepClone

export const fillup2Digit = number.fillup2Digit
export const number2Chinese = number.number2Chinese
export const money2Chinese = number.money2Chinese
export const add = number.add
export const sub = number.sub
export const mul = number.mul
export const div = number.div
export const cnNumber = number.cnNumber
export const idCardNumCompute = number.idCardNumCompute
export const estimate = number.estimate
export const compare = number.compare
export const thousand = number.thousand
export const bankCartNum = number.bankCartNum
export const toDecimalForce = number.toDecimalForce
export const toDecimalFormat = number.toDecimalFormat

export const getUrlParam = dom.getUrlParam
export const scrollTop = dom.scrollTop
export const print = dom.print
export const findNodeUpperByClasses = dom.findNodeUpperByClasses

export const debounce = func.debounce
export const throttle = func.throttle
export const nothing = func.nothing

export const regexp = regExp
console.log(regexp)

export const excel = exCel

export const ramdomString = string.ramdomString
export const url2obj = string.url2obj
export const obj2url = string.obj2url
export const encodeBase64 = string.encodeBase64
export const decodeBase64 = string.decodeBase64
export const capitalize = string.capitalize

export const on = event.on
export const off = event.off
export const eventStop = event.eventStop
