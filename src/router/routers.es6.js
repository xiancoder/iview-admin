// 项目::路由页面
// 2020年1月14日10:18:16 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'es6', title: 'es6', icon: 'md-menu',
    children: [
        { power: 'dsp', path: 'es601', title: 'let/const命令' },
        { power: 'dsp', path: 'es602', title: '变量解构赋值' },
        { power: 'dsp', path: 'es603', title: '字符串的扩展' },
        { power: 'dsp', path: 'es604', title: '正则的扩展' },
        { power: 'dsp', path: 'es605', title: '数值的扩展' },
        { power: 'dsp', path: 'es606', title: '函数的扩展' },
        { power: 'dsp', path: 'es607', title: '类的开发' }
    ]
})
