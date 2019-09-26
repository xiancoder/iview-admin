import CommonIcon from '@C/common-icon'
export default {
    components: {
        CommonIcon
    },
    methods: {
        showChildren (item) {
            return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
        },
        getNameOrHref (item, children0) {
            return children0 ? item.children[0].name : item.name
        }
    }
}
