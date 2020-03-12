<template>
    <div style="margin:10px">
        <markdown-editor v-model="content"/>
    </div>
</template>

<script>
import MarkdownEditor from '@C/markdown'
const str = '# 欢迎使用 Cmd Markdown *编辑阅读器*\n' +
    '------\n' +
    '我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人\n' +
    '> * 整理知识，学习笔记\n' +
    '> * 发布日记，杂文，所见所想\n' +
    '> * 撰写发布技术文稿（代码支持）\n' +
    '> * 撰写发布学术论文（LaTeX 公式支持）\n\n' +
    '![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)\n' +
    '下载：\n' +
    '### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)\n' +
    ' **新文稿** 或者使用快捷键 `Ctrl+Alt+N`。\n' +
    '------\n' +
    '## 什么是 Markdown\n' +
    'Markdown 是一种**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以\n' +
    '### 1. 制作一份待办事宜\n' +
    '- [ ] 支持以 PDF 格式导出文稿\n' +
    '- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率\n' +
    '- [x] 新增 Todo 列表功能\n' +
    '- [x] 修复 LaTex 公式渲染问题\n' +
    '- [x] 新增 LaTex 公式编号功能\n' +
    '### 3. 高亮一段代码[^code]\n' +
    '```python\n' +
    '@requires_authorization\n' +
    'class SomeClass:\n' +
    '    pass\n' +
    'if __name__ == "__main__":\n' +
    '    # A comment\n' +
    '    print "hello world"\n' +
    '```\n' +
    '### 7. 绘制表格\n' +
    '| 项目        | 价格   |  数量  |\n' +
    '| :--------   | -----:  | :----:  |\n' +
    '| 计算机     | $1600 |   5     |\n' +
    '| 手机        |   $12   |   12   |\n' +
    '| 管线        |    $1    |  234  |\n' +
    '---\n' +
    '作者 [@ghosert][3]\n' +
    '2016 年 07月 07日'

export default {
    name: 'markdown_page',
    components: {
        MarkdownEditor
    },
    data () {
        return {
            content: str
        }
    }
}
</script>
