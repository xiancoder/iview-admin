<template>
    <Button type="text" @click.native="handleMe" style="padding: 0;">
        <Tooltip content="每个路由的单元测试" placement="bottom" theme="light" class="hand">
            <Icon :size="23" type="ios-game-controller-b"/>
        </Tooltip>
    </Button>
</template>
<script>
import { goto } from '@/tools'

export default {
    data () {
        return {
            timer: 0
        }
    },
    computed: {
        routeList () {
            const arr = []
            const arrOld = this.$store.state.route.routeList
            for (let key in arrOld) {
                arr.push(arrOld[key].path)
            }
            // let index = temp1.indexOf(this.$route.path)
            // arr.splice(0, index) // 顺序不对
            return arr
        } // 一维化列表 所有的路由信息 主要是使用权限 名称
    },
    methods: {
        handleMe () {
            // console.log(this.routeList, this.$route.path)
            // console.log(this.$store.state.route.routeList)
            // return false
            if (this.timer) {
                clearInterval(this.timer)
                this.timer = 0
                window.location.reload()
                return false
            }
            let index = 0
            let length = this.routeList.length
            this.timer = setInterval(() => {
                console.info('%c即将测试页面 path = ' + this.routeList[index], 'color:red;background:green;')
                goto({path: this.routeList[index]})
                index++
                if (index >= length) { clearInterval(this.timer) }
            }, 3e3)
        }
    }
}
</script>
