<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Checkbox 复选框 全选 全不选 /*反选?*/</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p> 简单实现的全选反选功能 </p>
                <Checkbox :indeterminate="value.length!==0&&value.length!==dataSet.length"
                    :value="value.length!==0&&value.length===dataSet.length"
                    @click.prevent.native="handleCheckAll">
                    全选
                </Checkbox>
                <CheckboxGroup v-model="value">
                    <Checkbox v-for="(row, index) in dataSet" :key="'cc'+index" :label="row.id">{{row.name}}</Checkbox>
                </CheckboxGroup>
                <p>dataSet = {{dataSet}}</p>
                <p>value = {{value}}</p>
                <script type="text/html" v-pre>
                    <Checkbox :indeterminate="value.length!==0&&value.length!==dataSet.length"
                        :value="value.length!==0&&value.length===dataSet.length"
                        @click.prevent.native="handleCheckAll">
                        全选
                    </Checkbox>
                    <CheckboxGroup v-model="value">
                        <Checkbox v-for="(row, index) in dataSet" :label="row.id">{{row.name}}</Checkbox>
                    </CheckboxGroup>
                </script>
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
// import {clone} from '@/utils'

export default {
    data () {
        return {
            dataSet: [{id: 1, name: '香蕉'}, {id: 2, name: '苹果'}, {id: 3, name: '西瓜'}],
            value: []
        }
    },
    props: {},
    computed: {},
    methods: {
        handleCheckAll () {
            if (this.value.length) {
                this.value = []
            } else {
                // this.value = Object.assign(this.dataSet)
                // this.value = clone(this.dataSet)
                this.value = this.dataSet.map(row => {return row.id})
            }
        }
    }
}
</script>
