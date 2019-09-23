<template>
    <Menu ref="sideMenu" :active-name="activeName" :open-names="openNames"
        :theme="menuTheme" width="auto" accordion
        @on-select="changeMenu" @on-open-change="changeOpen">
        <template v-for="item in menuList">
            <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text">{{ item.title }}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="'menuitem' + child.name" style="font-size: 12px">
                        <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
                        <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
                    </MenuItem>
                </template>
            </Submenu>
            <MenuItem v-else :name="item.children[0].name" :key="'menuitem' + item.name">
                <Icon :type="item.children[0].icon || item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
                <span class="layout-text" :key="'title' + item.name">{{ item.children[0].title }}</span>
            </MenuItem>
        </template>
    </Menu>
</template>
<script>
export default {
    name: 'sidebarMenu',
    data () {
        return {
        }
    },
    props: {
        menuList: Array,
        power: Array,
        iconSize: Number,
        menuTheme: { type: String, default: 'dark' },
        openNames: { type: Array },
        activeName: { type: String }
    },
    methods: {
        changeMenu (active) { // 触发页面跳转
            this.$emit('on-change', active)
        },
        changeOpen (active) { // 点击一级页面
            this.$emit('on-open-change', active)
        }
    },
    updated () {
        this.$nextTick(() => {
            if (this.$refs.sideMenu) {
                this.$refs.sideMenu.updateOpened()
                this.$refs.sideMenu.updateActiveName()
            }
        })
    }
};
</script>
