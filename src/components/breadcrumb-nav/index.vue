<template>
    <Breadcrumb>
        <BreadcrumbItem v-for="(item, index) in currentPath" :to="item.path" :key="index" >
            {{ item.title }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
    name: 'breadcrumbNav',
    computed: {
        currentPath () { // 建议计算属性只放置计算依赖的变量 其逻辑部分放在methods里面
            const routeName = this.$store.state.app.currentPageName
            const menuListOneLevel = this.$store.state.app.menuListOneLevel
            return this.currentPathLogic(routeName, menuListOneLevel)
        }
    },
    methods: {
        currentPathLogic (routeName, menuListOneLevel) { // 计算面包屑数组的逻辑
            if (!routeName || !menuListOneLevel) { return [] }
            const bca = []
            let r0 = { title: '首页', path: '/home/index' }
            if (routeName.indexOf('_') > -1) {
                let l1 = routeName.replace(/_.*$/g, '')
                let r1 = menuListOneLevel[l1]
                if (r1 && l1 != 'home') {
                    bca.push(r0)
                    bca.push(r1)
                }
                if (routeName.indexOf('@') > -1) {
                    let l2 = routeName.replace(/@.*$/g, '').replace(/^.*_/g, '')
                    let r2 = menuListOneLevel[l2]
                    if (r2) {
                        bca.push(r2)
                    }
                }
                let r3 = menuListOneLevel[routeName]
                if (r3) {
                    bca.push(r3)
                }
            }
            return bca
        }
    }
};
</script>
