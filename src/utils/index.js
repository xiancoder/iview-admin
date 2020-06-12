'use strict'

import * as array from './base.array.js'
import * as string from './base.string.js'
import * as date from './base.date.js'
import * as number from './base.number.js'
import * as object from './base.object.js'
import * as dom from './base.dom.js'
import regExp from './base.regexp.js'
import * as event from './base.event.js'
// import * as cookie from './base.cookie.js'
import * as func from './base.function.js'
import exCel from './base.excel.js'
import * as string2 from './lodash.string.js'
import * as date2 from './moment.date.js'

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
export const contrast = array.contrast
export const arrayFlatten = array.arrayFlatten

export const date2xz = date.date2xz
export const date2gz = date.date2gz
export const date2sx = date.date2sx
export const date2cnDate = date.date2cnDate
export const date2jieqi = date.date2jieqi
export const date2isLeapYear = date.date2isLeapYear
export const isDateNotBeOverdue = date.isDateNotBeOverdue
export const dateObj = date.dateObj
export const dateEqual = date.dateEqual
export const timeLong = date.timeLong
export const timeLong2 = date.timeLong2
export const dateFormater = date.dateFormater
export const sevenRange = date.sevenRange
export const todayMouth = date.todayMouth
export const dateAdd = date.dateAdd
export const dateSub = date.dateSub
export const date2all = date.date2all
export const timestamp2Date = date.timestamp2Date

export const type = object.type
export const extend = object.extend
export const extendF = object.extendF
export const objEqual = object.objEqual
export const clone = object.clone
export const deepClone = object.deepClone
export const isArray = object.isArray
export const isString = object.isString

export const fillup2Digit = number.fillup2Digit
export const number2Chinese = number.number2Chinese
export const number2Chinese2 = number.number2Chinese2
export const money2Chinese = number.money2Chinese
export const add = number.add
export const sub = number.sub
export const mul = number.mul
export const div = number.div
export const cnNumber = number.cnNumber
export const idCardNumCompute = number.idCardNumCompute
export const estimate = number.estimate
export const estimate2 = number.estimate2
export const compare = number.compare
export const gt = number.gt
export const lt = number.lt
export const gte = number.gte
export const lte = number.lte
export const eq = number.eq
export const thousand = number.thousand
export const toDecimal = number.toDecimal
export const bankCartNum = number.bankCartNum
export const toDecimalForce = number.toDecimalForce
export const toDecimalFormat = number.toDecimalFormat

export const getUrlParam = dom.getUrlParam
export const scrollTop = dom.scrollTop
export const scrollTo = dom.scrollTo
export const hasClass = dom.hasClass
export const addClass = dom.addClass
export const removeClass = dom.removeClass
export const toggleClass = dom.toggleClass
export const print = dom.print
export const findNodeUpperByClasses = dom.findNodeUpperByClasses
export const openWindow = dom.openWindow
export const openNewTag = dom.openNewTag

export const debounce = func.debounce
export const throttle = func.throttle
export const nothing = func.nothing

export const regexp = regExp

export const ramdomString = string.ramdomString
export const url2obj = string.url2obj
export const obj2url = string.obj2url
export const urlChange = string.urlChange
export const dbc2Sbc = string.dbc2Sbc
export const encodeBase64 = string.encodeBase64
export const decodeBase64 = string.decodeBase64
export const capitalize = string.capitalize
export const palindrome = string.palindrome
export const humping = string.humping
export const antiHumping = string.antiHumping
export const toggle = string.toggle
// export const repeat = string.repeat 被lodash代替

export const on = event.on
export const off = event.off
export const eventStop = event.eventStop

export const camelCase = string2.camelCase
export const upperFirst = string2.upperFirst
export const kebabCase = string2.kebabCase
export const repeat = string2.repeat

export const excel = exCel

export const dateFormat = date2.dateFormat
export const howManyToToday = date2.howManyToToday
export const computeRange = date2.computeRange
export const computeRangeByMouth = date2.computeRangeByMouth
