<template>
    <page :list-ajax-name="'listBesend'" :option-search="4">
    </page>
</template>
<script>
// 整个页面等级的复用
import page from './mine@publish'
export default {
    components: { page }
}
</script>
