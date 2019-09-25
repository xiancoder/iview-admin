<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames"
            :accordion="accordion" :theme="theme" width="auto" @on-select="handleSelect">
            <template v-for="item in menuList">
                <template v-if="item.children && item.children.length === 1">
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item">
                    </side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
                        <common-icon :type="item.children[0].icon || 'ios-document'"/>
                        <span>{{ item.children[0].title }}</span>
                    </menu-item>
                </template>
                <template v-else>
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item">
                    </side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
                        <common-icon :type="item.icon || 'ios-document'"/><span>{{ item.title }}</span>
                    </menu-item>
                </template>
            </template>
        </Menu>
        <div class="menu-collapsed" v-show="collapsed" :list="menuList">
            <template v-for="item in menuList">
                <collapsed-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect"
                    hide-title :root-icon-size="rootIconSize" :icon-size="iconSize" :theme="theme"
                    :parent-item="item" :key="`drop-menu-${item.name}`">
                </collapsed-menu>
                <Tooltip transfer v-else :content="item.children && item.children[0] ? item.children[0].title : item.title"
                    placement="right" :key="`drop-menu-${item.name}`">
                    <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}">
                        <common-icon :size="rootIconSize" :color="textColor"
                            :type="item.icon || (item.children && item.children[0].icon) || 'ios-document'"/>
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
import CommonIcon from '@C/common-icon'
import SideMenuItem from './side-menu-item.vue'
import CollapsedMenu from './collapsed-menu.vue'
import { getUnion } from '@/utils/array'
const useI18n = false
const showTitle = (item, vm) => {
    let { title, __titleIsFunction__ } = item.meta
    if (!title) return
    if (useI18n) {
        if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
        else if (__titleIsFunction__) title = item.meta.title
        else title = vm.$t(item.name)
    } else title = (item.meta && item.meta.title) || item.name
    return title
}
export default {
    name: 'SideMenu',
    components: { CommonIcon, SideMenuItem, CollapsedMenu },
    props: {
        collapsed: { type: Boolean }, // 折叠状态
        accordion: Boolean, // 手风琴
        theme: { type: String, default: 'dark' }, // 主题

        rootIconSize: { type: Number, default: 20 },
        iconSize: { type: Number, default: 16 },
        activeName: { type: String, default: '' },
        openNames: { type: Array, default: () => [] }
    },
    data () {
        return {
            openedNames: []
        }
    },
    computed: {
        menuList () { return this.$store.state.app.menuList }, // 监听状态中的树数据源
        textColor () { return this.theme === 'dark' ? '#fff' : '#495060' } // 文本颜色
    },
    methods: {
        handleSelect (name) {
            this.$emit('on-select', name)
        },
        showChildren (item) {
            return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
        },
        getOpenedNamesByActiveName (name) {
            return this.$route.matched.map(item => item.name).filter(item => item !== name)
        },
        updateOpenName (name) {
            if (name === this.$config.homeName) this.openedNames = []
            else this.openedNames = this.getOpenedNamesByActiveName(name)
        },
        getNameOrHref (item, children0) {
            return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
        }
    },
    watch: {
        activeName (name) {
            if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
            else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
        },
        openNames (newNames) {
            this.openedNames = newNames
        },
        openedNames () {
            this.$nextTick(() => {
                this.$refs.menu.updateOpened()
            })
        }
    },
    mounted () {
        this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    }
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
