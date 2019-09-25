<template>
    <div class="custom-bread-crumb">
        <Breadcrumb :style="{fontSize: `${fontSize}px`}">
            <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
                <common-icon style="margin-right: 4px;" :type="item.icon || 'ios-document'"/>
                {{ showTitle(item) }}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script>
import CommonIcon from '@C/common-icon'
import { showTitle } from '@/libs/util'
import './index.less'
export default {
    name: 'customBreadCrumb',
    components: { CommonIcon },
    props: {
        fontSize: { type: Number, default: 14 },
        showIcon: { type: Boolean, default: false }
    },
    computed: {
        list () { return this.$store.state.app.breadCrumbList || [] },
    },


    methods: {
    }
}
</script>
