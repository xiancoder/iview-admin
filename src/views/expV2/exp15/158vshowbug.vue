<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">VUE V-SHOW 用起来感觉有问题</div>
            <div class="blogContent">
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>v-if/v-show 输入框显示隐藏 测试</p>
                <hr />
                <span>input1 = {{input1}}</span>
                <span><Checkbox v-model="bool1">bool1</Checkbox></span>
                <span v-if="bool1"><Input type="text" v-model="input1" placeholder="请输入任务名称" style="width: 200px"/></span>
                <span v-show="bool1"><Input type="text" v-model="input1" placeholder="请输入任务名称" style="width: 200px"/></span>
                <span><Button type="default" @click="gai1">修改 input1 = 333</Button></span>
                <hr />
                <span>input2 = {{input2}}</span>
                <span><Checkbox v-model="bool2">bool2</Checkbox></span>
                <span v-if="bool2"><Input type="text" v-model="input2" placeholder="请输入任务名称" style="width: 200px"/></span>
                <span v-show="bool2"><Input type="text" v-model="input2" placeholder="请输入任务名称" style="width: 200px"/></span>
                <span><Button type="default" @click="gai2">修改 input2 = 333</Button></span>
                <p>没问题... 那再试试日期框</p>
                <span>date1 = {{date1}}</span>
                <span><Checkbox v-model="bool3">bool3</Checkbox></span>
                <span v-if="bool3"><DatePicker type="date" v-model="date1" placeholder="选择日期" style="width: 200px"></DatePicker></span>
                <span v-show="bool3"><DatePicker type="date" v-model="date1" placeholder="选择日期" style="width: 200px"></DatePicker></span>
                <span><Button type="default" @click="gai3">修改 date1 = '2012-12-12'</Button></span>
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
export default {
    data () {
        return {
            input1: '123',
            bool1: true,
            input2: '123',
            bool2: false,
            date1: '2019-10-10',
            bool3: true
        }
    },
    methods: {
        gai1 () {
            this.input1 = '333'
        },
        gai2 () {
            this.input2 = '333'
        },
        gai3 () {
            this.date1 = '2012-12-12'
        }
    },
    mounted () {
    }
}
</script>
