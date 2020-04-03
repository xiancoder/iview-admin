<script>
// 整个页面等级的复用
import page from './272formV10DHC$add1'
export default {
    extends: page, // 继承页面
    props: {
        flag: { type: Boolean, default: false }
    },
    watch: { // 监听
        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
            if (n !== true) {
                alert(321)
            }
        }
    }
}
</script>
