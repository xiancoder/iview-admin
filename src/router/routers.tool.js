// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeTwoLevelRoute } from './util'

export default makeTwoLevelRoute({
    path: 'tool', title: '趁手工具第三代', icon: 'md-images',
    children: [
        {power: '0000', path: 'str2bs64', title: '文字转bs64'},
        {power: '0000', path: 'img2bs64', title: '图片转bs64'},
        {power: '0000', path: 'unicode', title: 'unicode转码'},
        {power: '0000', path: 'md5', title: 'md5转码'},
        {power: '0000', path: 'url', title: 'url转码'},
        {power: '0000', path: 'repeat', title: '字符重复'},
        {power: '0000', path: 'norepeat', title: '去重'},
        {power: '0000', path: 'strformat', title: '文本格式化'}
    ]
})
