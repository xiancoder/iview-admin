<template>
    <div>
        <p>测试循环</p>
        <Button v-for="item in addBtnList" :key="item.title" @click="clkCall(item.methods)">{{item.title}}</Button>
    </div>
</template>
<script>
export default {
    name: 'titleAddBtn',
    props: ['addBtnList'],
    methods: {
        clkCall (methodsWords) {
            this.$emit('clkCallBk', methodsWords)
        }
    }
}
</script>
