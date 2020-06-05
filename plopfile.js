const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const tableGenerator = require('./plop-templates/table/prompt')

module.exports = function(plop) {
    plop.setGenerator('view', viewGenerator)
    plop.setGenerator('component', componentGenerator)
    plop.setGenerator('table', tableGenerator)
}
