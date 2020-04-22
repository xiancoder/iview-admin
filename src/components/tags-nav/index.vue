<template>
    <div>
        <Tabs :value="currentRouteName" closable @on-click="goto" type="card" @on-tab-remove="handleClose">
            <TabPane label="首页" :name="homePage" :closable="false">
            </TabPane>
            <TabPane v-for="(row, index) in list" :key="index" :label="row.title" :name="row.name">
            </TabPane>
            <div slot="extra">
                <Dropdown transfer @on-click="handleTagsOption">
                    <Button><Icon type="ios-arrow-down"/></Button>
                    <DropdownMenu slot="list">
                        <DropdownItem name="close-left"><Icon type="md-arrow-round-back"/> 关闭左边</DropdownItem>
                        <DropdownItem name="close-right"><Icon type="md-arrow-round-forward"/> 关闭右边</DropdownItem>
                        <DropdownItem name="close-all"><Icon type="md-close-circle"/> 关闭所有</DropdownItem>
                        <DropdownItem name="close-others"><Icon type="md-close"/> 关闭其他</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Tabs>
    </div>
</template>

<script>
import { goto } from '@/tools' // 自定义常用工具
import beforeCloseFun from '@/mixin/router.beforeCloseFun'
import { homePage } from '@/router/routers'

export default {
    name: 'TagsNav',
    mixins: [{methods: {goto}}],
    data () {
        return {
            homePage,
            name: 'workV2_work01_205tab',
            balance: '-'
        }
    },
    computed: { // 计算属性
        list () { return this.$store.state.route.tagNavList || [] }, // 历史记录tab
        currentRouteName () { return this.$route.name } // 当前路由
    },
    methods: {
        handleTagsOption (type) { // 关闭其他 关闭所有
            if (type === 'close-left') { // 关闭左边所有
                const ii = this.list.findIndex(item => item.name === this.currentRouteName)
                const res = this.list.filter((item, index) => index >= ii)
                return this.handleCloseTag(res, {})
            }
            if (type === 'close-right') { // 关闭右边所有
                const ii = this.list.findIndex(item => item.name === this.currentRouteName)
                const res = this.list.filter((item, index) => index <= ii)
                return this.handleCloseTag(res, {})
            }
            if (type === 'close-all') { // 关闭所有
                return this.handleCloseTag([], {name: this.currentRouteName})
            }
            if (type === 'close-others') { // 关闭除当前页和home页的其他页
                let res = this.list.filter(item => item.name === this.currentRouteName)
                return this.handleCloseTag(res, {})
            }
        },
        handleCloseTag (res, route) { // 关闭标签 即重置数据
            if (res.length === 0 || route.name === this.currentRouteName) {
                const name = homePage
                this.$router.push({name})
            }
            this.$store.dispatch('route/setTagNavList', res)
        },
        handleClose (route) { // 触发关闭单一标签 且如果关闭之前有动作就触发
            if (route.beforeCloseFun && route.beforeCloseFun in beforeCloseFun) {
                new Promise(beforeCloseFun[route.beforeCloseFun]).then(close => {
                    if (close) { this.close(route) }
                })
            } else {
                let res = this.list.filter(item => route.name !== item.name)
                this.handleCloseTag(res, route)
            }
        }
    },
    mounted: function () {
    }
}
</script>
