<template>
    <div style="margin:10px">
        <markdown-editor v-model="content"/>
    </div>
</template>

<script>
import MarkdownEditor from '@C/markdown'
export default {
    name: 'markdown_page',
    components: {
        MarkdownEditor
    },
    data () {
        return {
            content: ''
        }
    }
}
</script>
