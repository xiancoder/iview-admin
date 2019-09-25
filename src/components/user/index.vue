<template>
    <div class="user-avatar-dropdown">
        <Dropdown @on-click="handleClick">
            <Badge :dot="!!unreadCount">
                <Avatar :src="userAvatar"/>
            </Badge>
            {{ userName }}
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="message"> 消息中心<Badge style="margin-left: 10px" :count="unreadCount"></Badge> </DropdownItem>
                <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
import './user.less'
export default {
    name: 'User',
    computed: {
        userAvatar () { return this.$store.state.system.avatarImgPath }, // 用户头像
        userName () { return this.$store.state.system.userName }, // 用户名
        unreadCount () { return this.$store.state.system.newMessageNum }
    },
    methods: {
        logout () {
            this.$store.dispatch('system/logout').then(() => {
                console.info('仙', '管理员退出喽')
                this.$router.push({ name: 'login' })
            })
        },
        message () {
            this.$router.push({ name: 'home_message' })
        },
        handleClick (name) {
            switch (name) {
                case 'logout': this.logout()
                    break
                case 'message': this.message()
                    break
            }
        }
    }
}
</script>
