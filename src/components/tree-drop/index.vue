<template>
    <Dropdown trigger="custom" :visible="visible" @on-clickoutside="closeDrop" style="width: 250px">
        <div @click="openTree">
            <Input suffix="ios-arrow-down" v-model="selectName" :placeholder="placeText" readonly :disabled="disState"/>
        </div>
        <DropdownMenu slot="list">
            <Tree :data="treeData" :render="treeRender" style="max-height: 320px;overflow: auto" v-show="treeData.length > 0"></Tree>
            <div v-show="treeData.length === 0" style="text-align: center" @click="visible = false">暂无数据</div>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
export default {
    name: 'tree-drop',
    props: {
        disabled: { type: Boolean, default: () => {return ''} },
        value: { type: Number, default: () => {return ''} },
        name: { type: String, default: () => {return ''} },
        placeholder: { type: String, default: () => {return ''} },
        data: { type: Array, default: () => {return []} }
    },
    data () {
        return {
            disState: false,
            visible: false,
            selectId: this.value,
            selectName: this.name,
            placeText: this.placeholder,
            treeData: []
        };
    },
    watch: {
        disabled: { immediate: true, handler (val) { this.disState = val; } },
        value: { immediate: true, handler (val) { this.selectId = val; } },
        name: { immediate: true, handler (val) { this.selectName = val; } },
        data: { immediate: true, handler (val) { this.treeData = val; } },
        selectId: { deep: true, handler: function (newVal, oldVal) { this.$emit('on-change', newVal); } }
    },
    methods: {
        openTree () {
            if (this.disState === false) {
                this.visible = true;
            }
        },
        // treeSelect (node) {
        //     if (node.length > 0) {
        //         this.$emit('idSel', node[0].id);
        //         this.$emit('input', node[0].id);
        //         this.$emit('nameSel', node[0].title);
        //         this.selectId = node[0].id;
        //         this.selectName = node[0].title;
        //     }
        //     this.visible = false;
        // },
        nodeSelect (node) {
            this.$emit('idSel', node.id);
            this.$emit('input', node.id);
            this.$emit('nameSel', node.title);
            this.selectId = node.id;
            this.selectName = node.title;
            this.visible = false;
        },
        closeDrop () {
            this.visible = false;
        },
        treeRender (h, { root, node, data }) {
            return h('div', {
                style: {
                    display: 'inline-block',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none'
                }
            }, [
                h('span', {
                    on: {
                        click: (e) => {
                            let elementList = document.querySelectorAll('.treeBtn');
                            for (let i = 0; i < elementList.length; i++) {
                                elementList[i].style.backgroundColor = '';
                            }
                            this.nodeSelect(node.node);
                            e.target.style.backgroundColor = 'rgb(213, 232, 252)';
                            e.target.style.padding = '5px';
                        }
                    },
                    class: data.id === this.selectId ? 'treeBtn selectBg' : 'treeBtn'
                }, data.title)]);
        },
        clearStyle () {
            let elementList = document.querySelectorAll('.treeBtn');
            for (let i = 0; i < elementList.length; i++) {
                elementList[i].style.backgroundColor = '';
            }
        }
    },
    mounted () {
    }
};
</script>
<style>
    .selectBg {
        background-color: rgb(213, 232, 252);
        padding: 5px;
    }
</style>
