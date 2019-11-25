<template>
    <div>
        <Input type="text" v-model="lishibianliang" placeholder="请输入XXX" style="width: 450px"/>
        <Button type="default" @click="add" class="addButton">添加</Button>
        <br />
        <div class="xianUtil">
            <ul class="liComma">
                <li v-for="(item, index) in items" :key="'hehe'+index"> {{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: { type: Array, default: () => { return [] } }
    },
    data () {
        return {
            lishibianliang: ''
        }
    },
    methods: {
        add () {
            if (this.lishibianliang) {
                this.items.push(this.lishibianliang)
                this.lishibianliang = ''
            }
        }
    },
    mounted () {
    }
}
</script>
<style scope>
    .addButton { margin: 0 10px; }
    .ivu-form-item-error .ivu-btn { border: 1px solid #ed4014; }
</style>
