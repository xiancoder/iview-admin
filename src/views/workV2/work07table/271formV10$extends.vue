<script>
// 整个页面等级的复用
import page from './272formV10'
export default {
    extends: page, // 继承页面
    data () {
        return {
        }
    },
    methods: {
        postForm () {
            alert(123)
        },
        handleSubmit () {
            alert(123)
        }
    }
}
</script>
