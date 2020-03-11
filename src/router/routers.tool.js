// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'tool', title: '趁手工具第三代', icon: 'md-images',
    children: [
        {power: 'tool', path: 'str2bs64', title: '文字转bs64'},
        {power: 'tool', path: 'img2bs64', title: '图片转bs64'},
        {power: 'tool', path: 'unicode', title: 'unicode转码'},
        {power: 'tool', path: 'md5', title: 'md5转码'},
        {power: 'tool', path: 'url', title: 'url转码'},
        {power: 'tool', path: 'money2hanzi', title: '金钱数字转汉字'},
        {power: 'tool', path: 'repeat', title: '字符重复'},
        {power: 'tool', path: 'str2pinyin', title: '文字转音调拼音'},
        {power: 'tool', path: 'norepeat', title: '去重'},
        {power: 'tool', path: 'compare', title: '权限对比逻辑'},
        {power: 'tool', path: 'stringLength', title: '简单计算文本长度'}
    ]
})
