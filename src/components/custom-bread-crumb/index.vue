<template>
    <div class="custom-bread-crumb">
        <Breadcrumb :style="{fontSize: `${fontSize}px`}">
            <BreadcrumbItem v-for="(item, index) in list" :key="`bread-crumb-${index}`"
                 :to="item.path">
                <common-icon style="margin-right: 4px;" :type="item.icon || 'ios-document'"/>
                {{ item.title }}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script>
import CommonIcon from '@C/common-icon'
import './index.less'
export default {
    name: 'customBreadCrumb',
    components: { CommonIcon },
    props: {
        fontSize: { type: Number, default: 14 },
        showIcon: { type: Boolean, default: false }
    },
    computed: {
        list () { return this.$store.state.system.breadCrumbList || [] }
    },
    methods: {
    }
}
</script>
