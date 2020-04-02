<template>
    <div class="transition-container">
        <div class="item" v-for="(item, index) in items" :key="index"
                draggable="true"
                @dragstart="handleDragStart($event, item)"
                @dragover.prevent="handleDragOver($event, item)"
                @dragenter="handleDragEnter($event, item)"
                @dragend="handleDragEnd($event, item)"
                @click="chooseNav(item)"
            >
            <p class="trans-btn">
                <span v-if="item.problemId"> <b class="id"> --------------------- {{item.problemId}} </b> {{item.key}} </span>
                <span v-else> {{item.key}} </span>
                <span> <i-button v-if="btn" size="small" type="error" style="margin-right: 10px;" @click="deleteItem(item, index)">删除</i-button> </span>
            </p>
        </div>
        <br />————————————————
        <br />版权声明：本文为CSDN博主「cicistream」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
        <br />原文链接：https://blog.csdn.net/sinat_31231955/java/article/details/82770147
    </div>
</template>
<script>
export default {
    name: 'transition',
    /* props: {
        dataSource: Array,
        btn: Boolean
    }, */
    data () {
        return {
            dataSource: [],
            btn: false,
            items: [],
            dragging: null
        }
    },
    watch: {
        dataSource (val) {
            this.items = val
        },
        dragging (val) {
            if (this.dataSource.includes(val)) {
                this.dragging = val
            } else {
                this.dragging = null
            }
        }
    },
    methods: {
        handleDragStart (e, item) {
            this.dragging = item
        },
        handleDragEnd () {
            this.dragging = null;
            this.$emit('hasChanged', this.items)
        },
        // 首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver (e) {
            e.dataTransfer.dropEffect = 'move' // e.dataTransfer.dropEffect="move" //在dragenter中针对放置目标来设置!
        },
        handleDragEnter (e, item) {
            if (this.dragging) {
                e.dataTransfer.effectAllowed = 'move' // 为需要移动的元素设置dragstart事件
                if (item === this.dragging) { return }
                const newItems = [...this.items]
                const src = newItems.indexOf(this.dragging)
                const dst = newItems.indexOf(item)
                newItems.splice(dst, 0, ...newItems.splice(src, 1))
                this.items = newItems
            }
        },
        chooseNav (val) {
            this.$emit('selectItem', val)
        },
        deleteItem (item, index) {
            this.$emit('deleteItem', item, index)
        },
        editor (item, index) {
            this.$emit('editorItem', item, index)
        }
    },
    mounted () {
        this.dataSource = [
            {problemId: 1, key: 'aaa'},
            {problemId: 2, key: 'bbb'},
            {problemId: 3, key: 'ccc'}
        ]
    }
}
</script>
