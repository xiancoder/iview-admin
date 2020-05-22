<template>
    <Breadcrumb>
        <BreadcrumbItem v-for="(item, index) in list" :key="`bread-crumb-${index}`" :to="item.path">
            {{ item.title }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
import { homePage } from '@/router/routers'

export default {
    name: 'customBreadCrumb',
    computed: {
        list () {
            const currentList = this.$store.state.route.breadCrumbList
            const r0 = { title: '首页', path: '/' + homePage.replace(/_/g, '/') }
            return [r0, ...currentList]
        }
    }
}
</script>
