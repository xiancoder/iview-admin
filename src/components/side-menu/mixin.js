export default {
    data () {
        return {
            iconSize: 16
        }
    },
    methods: {
        showChildren (item) {
            return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
        },
        getNameOrHref (item, children0) {
            return children0 ? item.children[0].name : item.name
        }
    },
    computed: {
        theme () { return this.$store.state.system.theme }, // 主题
        textColor () { return this.theme === 'dark' ? '#fff' : '#495060' } // 主题颜色
    }
}
