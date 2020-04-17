<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">树</div>
            <div class="blogContent" v-highlight>
                <tree-select v-model="treeSelected" style="width: 300px;" check-strictly :expand-all="true" :load-data="loadData"
                    @on-change="handleTreeSelectChange" @on-toggle-expand="handleTreeSelectExpand"
                    @on-check-change="handleTreeSelectCheckChange" @on-select-change="handleTreeSelectClick" :data="treeData" >
                </tree-select>
                <Button @click="changeTreeSelectData">更新选中数据</Button>
                <Button @click="changeTreeData">更新树数据</Button>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>

<script>
import TreeSelect from '@C/tree-select'
import { treeData } from './tree-select'

export default {
    name: 'tree_select_page',
    components: { TreeSelect },
    data () {
        return {
            treeSelected: [112, 113],
            treeData: []
        }
    },
    mounted () {
        const data = treeData
        this.treeData = data
    },
    methods: {
        changeTreeSelectData () {
            this.treeSelected = [111, 114]
        },
        changeTreeData () {
            this.treeData = this.treeData
            // this.treeSelected = [];
        },
        handleTreeSelectChange (list) {
            // console.info('=-========', list);
        },
        handleTreeSelectExpand (item) {
            // console.info('toggle expand', item);
        },
        handleTreeSelectCheckChange (selectedArray, item) {
            // console.info(selectedArray, item);
        },
        handleTreeSelectClick (selectArray, item) {
            // console.info(selectArray, item);
        },
        loadData (item, callback) {
            setTimeout(() => {
                let data = [
                    { id: 111, title: '1-1-1' },
                    { id: 112, title: '1-1-2' },
                    { id: 113, title: '1-1-3' },
                    { id: 114, title: '1-1-4' }
                ]
                callback(data)
            }, 1000)
        }
    }
}
</script>
