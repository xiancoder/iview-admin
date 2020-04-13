<template>
    <div class="markdown-wrapper">
        <textarea ref="editor"></textarea>
    </div>
</template>

<script>
import Simplemde from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import './index.less'

export default {
    name: 'MarkdownEditor',
    props: {
        value: { type: String, default: '' },
        options: { type: Object, default: () => { return {} } },
        localCache: { type: Boolean, default: true }
    },
    data () {
        return {
            editor: null
        }
    },
    methods: {
        addEvents () {
            this.editor.codemirror.on('change', () => {
                let value = this.editor.value()
                if (this.localCache) localStorage.markdownContent = value
                this.$emit('input', value)
                this.$emit('on-change', value)
            })
            this.editor.codemirror.on('focus', () => {
                this.$emit('on-focus', this.editor.value())
            })
            this.editor.codemirror.on('blur', () => {
                this.$emit('on-blur', this.editor.value())
            })
        }
    },
    mounted () {
        this.editor = new Simplemde(Object.assign(this.options, {
            element: this.$refs.editor,
            spellChecker: false, // 拼写检查
            autofocus: true, // 自动聚焦
            // toolbar: true, // 设置为false,标题栏不显示 true 会跑版
            autoDownloadFontAwesome: false, // 自动下载FontAwesome
            placeholder: 'Type here...',
            autosave: { // 自动保存
                enabled: true,
                uniqueId: 'demo',
                delay: 1000
            },
            tabSize: 4, // tab代表空格数量
            lineWrapping: false // 行内元素
        }))
        // 获取/设置内容
        // this.editor.value()
        this.editor.value(this.value)
        /**
        * 事件列表为Codemirror编辑器的事件，更多事件类型，请参考：
        * https://codemirror.net/doc/manual.html#events
        */
        this.addEvents()
        let content = localStorage.markdownContent
        if (content) this.editor.value(content)
    }
}
</script>
