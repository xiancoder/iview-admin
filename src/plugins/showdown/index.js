import showdown from 'showdown'
import './index.less'

const converter = new showdown.Converter()

converter.setOption('omitExtraWLInCodeBlocks', true) // 省略代码块中的尾随换行符。
converter.setOption('parseImgDimensions', true) // 启用对从markdown语法设置图像尺寸的支持。
converter.setOption('headerLevelStart', 2) // 设置标题的起始级别。
converter.setOption('simplifiedAutoLink', true) // 将启用自动链接到url。
converter.setOption('tables', true) // 对表语法的支持。
converter.setOption('tasklists', true) // 对GFM任务列表的支持。
converter.setOption('simpleLineBreaks', true) // 像GitHub一样解析换行符，而无需在行尾添加2个空格
converter.setOption('openLinksInNewWindow', true) // （通过将属性添加target="_blank"到<a>标签中）在新窗口中打开所有链接
converter.setOption('strikethrough', true) // 启用~~删除线
converter.setOption('tasklists', true) // 启用任务列表

export default converter
