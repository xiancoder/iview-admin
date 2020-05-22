<template>
    <Submenu :name="`${parentName}`">
        <template slot="title">
            <Icon :type="parentItem.icon||'ios-alert'":size="iconSize" :color="textColor" />
            <span>{{ parentItem.title }}</span>
        </template>
        <template v-for="item in children">
            <template v-if="item.children && item.children.length === 1">
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"> </side-menu-item>
                <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
                    <Icon :type="item.children[0].icon||'ios-document'":size="iconSize" :color="textColor" />
                    <span>{{ item.children[0].title }}</span>
                </menu-item>
            </template>
            <template v-else>
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"> </side-menu-item>
                <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
                    <Icon :type="item.icon||'ios-document'":size="iconSize" :color="textColor" />
                    {{ item.title }}</span>
                </menu-item>
            </template>
        </template>
    </Submenu>
</template>
<script>
import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
    name: 'SideMenuItem',
    mixins: [ mixin, itemMixin ]
}
</script>
