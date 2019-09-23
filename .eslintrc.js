module.exports = {
    root: true,
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'generator-star-spacing': 'off', // 生成器函数*的前后空格
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
        'indent': ['error', 4, { 'SwitchCase': 1 }], // 缩进风格
        'quotes': ['error', 'single'], // 引号类型 `` '' ''
        'semi': 0, // 语句强制分号结尾
        'no-extra-semi': 2,//禁止多余的冒号
        'no-extra-boolean-cast': 2,//禁止不必要的bool转换
        'no-console': 0, // 禁止使用console
        'no-empty': 2, // 块语句中的内容不能为空
        'no-eq-null': 2, // 禁止对null使用==或!=运算符
        'no-new': 0, // 禁止在使用new构造一个实例后不赋值
        'no-fallthrough': 0, // 禁止switch穿透
        'object-curly-spacing': 0, // 对象先后有空格
        'no-useless-escape': 0, // 禁止正则字符转移
        'object-property-newline': 0, // 对象一个属性占一行
        'vue/no-parsing-error': 0, // 非法结束标签
        'no-unreachable': 0 // 不能有无法执行的代码
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
