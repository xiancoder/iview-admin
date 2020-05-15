<template>
    <keep-alive :include="cacheList">
        <router-view/>
    </keep-alive>
</template>
<script>
export default {
    computed: {
        cacheList () { return this.$store.state.route.cacheList } // 被缓存的页面
    }
}
</script>
