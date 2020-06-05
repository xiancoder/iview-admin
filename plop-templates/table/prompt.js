const { notEmpty } = require('../utils.js')

module.exports = {
    description: '生成一个 v10 模版表格',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: '务必请输入表格页的文件名,同时赋值为组件名',
            validate: notEmpty('name')
        },
        {
            type: 'input',
            name: 'pagetitle',
            message: '务必请输入表格页的标题',
            validate: notEmpty('pagetitle')
        },
        {
            type: 'input',
            name: 'pagesubtitle',
            message: '随意请输入表格页的副标题'
        },
        {
            type: 'checkbox',
            name: 'search',
            message: '随意请选择表格页的搜索项种类',
            choices: [
                {
                    name: '下拉框Demo',
                    value: 'select',
                    checked: true
                }
            ]
        }
    ],
    actions: data => {
        const name = '{{name}}'
        const actions = [{
            type: 'add',
            // type: 'modify',
            force: true,
            // path: `src/views/${name}/index.vue`,
            path: `src/views/plop/tableV10P01.vue`,
            templateFile: 'plop-templates/table/template.hbs',
            data: {
                name: name,
                pagetitle: '{{pagetitle}}',
                pagesubtitle: '{{pagesubtitle}}',
                searchselect: data.search.includes('select'),
            }
        }]

        return actions
    }
}
