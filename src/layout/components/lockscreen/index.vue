<template>
    <Button type="text" @click="handleMe" style="padding:0;vertical-align: middle;">
        <Tooltip content="锁屏" placement="bottom" theme="light" class="hand">
            <Icon :size="23" type="md-lock"/>
        </Tooltip>
    </Button>
</template>
<script>
export default {
    props: {
        value: { type: Boolean, default: false }
    },
    methods: {
        handleMe () {
            let lockScreenBack = document.getElementById('lock_screen_back')
            lockScreenBack.style.transition = 'all 3s'
            lockScreenBack.style.zIndex = 10000
            lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset'
            this.showUnlock = true
            // Cookies.set('last_page_name', this.$route.name); // 本地存储锁屏之前打开的页面以便解锁后打开
            setTimeout(() => {
                lockScreenBack.style.transition = 'all 0s'
                this.$router.push({ name: 'locking' })
            }, 800)
            this.$store.dispatch('system/setLocking', true)
        }
    },
    mounted () {
        let lockScreenBack
        const setLockBackSize = () => {
            let x = document.body.clientWidth
            let y = document.body.clientHeight
            let r = Math.sqrt(x * x + y * y)
            return parseInt(r)
        }
        if (!document.getElementById('lock_screen_back')) {
            let lockdiv = document.createElement('div')
            lockdiv.setAttribute('id', 'lock_screen_back')
            lockdiv.style.borderRadius = '50%'
            lockdiv.style.zIndex = '-1'
            lockdiv.style.boxShadow = '0 0 0 0 #667aa6 inset'
            lockdiv.style.position = 'fixed'
            lockdiv.style.left = '50%'
            lockdiv.style.top = '50%'
            lockdiv.style.transform = 'translate(-50%,-50%)'
            lockdiv.style.transition = 'all 3s'
            document.body.appendChild(lockdiv)
            lockScreenBack = lockdiv
            window.addEventListener('resize', () => {
                let size = setLockBackSize()
                this.lockScreenSize = size
                lockScreenBack.style.transition = 'all 0s'
                lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
            })
        } else {
            lockScreenBack = document.getElementById('lock_screen_back')
        }
        let size = setLockBackSize()
        this.lockScreenSize = size
        lockScreenBack.style.transition = 'all 3s'
        lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
    }
}
</script>
<style scoped>
    .hand{ cursor: pointer }
</style>
