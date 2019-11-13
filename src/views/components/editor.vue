<template>
    <div style="margin:10px">
        <editor ref="editor" :value="content" @on-change="handleChange"/>
        <Button @click="changeContent">修改编辑器内容</Button>
    </div>
</template>
<script>
import Editor from '@C/editor'
export default {
    name: 'editor_page',
    components: {
        Editor
    },
    data () {
        return {
            content: '12312323'
        }
    },
    methods: {
        handleChange (html, text) {
            console.info(html, text)
        },
        changeContent () {
            this.$refs.editor.setHtml('<p>powered by wangeditor</p>')
        }
    }
}
</script>
