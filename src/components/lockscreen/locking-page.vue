<template>
    <div style="width: 100%;height: 100%;background: #667aa6">
        <div class="unlock-con">
            <unlock :show-unlock="showUnlock" @on-unlock="handleUnlock"></unlock>
        </div>
    </div>
</template>
<script>
import unlock from './unlock.vue'
export default {
    components: {
        unlock
    },
    data () {
        return {
            showUnlock: false
        }
    },
    methods: {
        handleUnlock () {
            let lockScreenBack = document.getElementById('lock_screen_back')
            this.showUnlock = false
            lockScreenBack.style.zIndex = -1
            lockScreenBack.style.boxShadow = '0 0 0 0 #667aa6 inset'
            this.$router.go(-1)
        }
    },
    mounted () {
        this.showUnlock = true
        let lockScreenBack
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
        lockScreenBack.style.zIndex = -1
    }
}
</script>
