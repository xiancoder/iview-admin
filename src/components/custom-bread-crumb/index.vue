<template>
    <Breadcrumb>
        <BreadcrumbItem v-for="(item, index) in list" :key="`bread-crumb-${index}`" :to="item.path">
            {{ item.title }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
    name: 'customBreadCrumb',
    computed: {
        list () { return this.$store.state.system.breadCrumbList || [] }
    }
}
</script>
