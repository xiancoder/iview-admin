<script>
// 整个页面等级的复用
import page from './mine@publish'
export default {
    extends: page, // 继承页面
    data () {
        return {
            listAjaxName: 'listExecutive',
            optionSearch: 3
        }
    }
}
</script>
