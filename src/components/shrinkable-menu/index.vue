<style lang="less">
    @import './index.less';
</style>
<template>
    <div :style="{background: theme=='dark'?'init':'#fff' }" class="ivu-shrinkable-menu">
        <slot name="top"></slot>
        <sidebar-menu
            v-show="!shrink"
            :menu-theme="theme"
            :menu-list="menuList"
            :open-names="openNames"
            :active-name="activeName"
            @on-change="handleChange"
            @on-open-change="handleOpenChange"
        ></sidebar-menu>
        <sidebar-menu-shrink
            v-show="shrink"
            :menu-theme="theme"
            :menu-list="menuList"
            :icon-color="theme=='dark'?'#fff':'#495060'"
            @on-change="handleChange"
        ></sidebar-menu-shrink>
    </div>
</template>
<script>
import axios from 'axios';
import util from '@/utils';
import sidebarMenu from './sidebarMenu';
import sidebarMenuShrink from './sidebarMenuShrink';
export default {
    name: 'shrinkableMenu',
    components: {
        sidebarMenu,
        sidebarMenuShrink
    },
    data () {
        return {
            openNames: [] // 左边树的展开状态
        }
    },
    props: {
        shrink: { type: Boolean, default: false },
        theme: { type: String, default: 'dark', validator (val) { return (['dark', 'light'].indexOf(val) >= 0) } }
    },
    computed: {
        menuList () { // 实时获取最新路由列表
            return this.$store.state.app.menuList
        },
        activeName () { // 计算左边树的选中
            const pageName = this.$store.state.app.currentPageName || ''
            this.openNames = [pageName.replace(/\_.+/g, '')]
            return pageName.replace(/\@.+/g, '')
        }
    },
    mounted () { // mounted并不是最先执行的 比computed似乎慢些
    },
    methods: {
        handleChange (name) { // 直接跳转
            console.info('仙', '二级菜单直接跳转')
            this.$router.push({ name: name });
            this.$store.commit('app/setCurrentPageName', name) // 当前页名称
        },
        handleOpenChange (name) { // 一级页面跳第一个子页面
            if (!name[0]) return false
            name = name[0]
            const obj = this.$store.state.app.menuListOneLevel[name]
            if (!obj.name) return false
            console.info('仙', '一级页面', name, '跳第一个子页面', obj.name)
            this.$store.commit('app/setCurrentPageName', obj.name) // 当前页名称
            if (obj.path) this.$router.push({ path: obj.path }); // 跳转
        }
    }
};
</script>
