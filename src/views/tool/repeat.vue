<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">保存对应的页面模板</div>
            <div class="blogContent" v-highlight>
                <p>循环一段文字 并打印出来 致力于想干嘛超简单</p>
                <p>保存对应的页面模板</p>
                <p>for(var x = <input type="number" v-model="x1"/> ;x < <input type="number"  v-model="x2"/>; x+= <input type="number" v-model="x3"/>){</p>
                <p>---- console.log("<input type="text" v-model="x4" style="width:500px"/>");</p>
                <p>}</p>
                <p><input type="checkbox" v-model="x5"/>补0操作</p>
                <p><Button class="btn btn-danger" @click="doloop()">生成</Button></p>
                <hr />
                <pre>{{r1}}</pre>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            x1: 1,
            x2: 10,
            x3: 1,
            x4: '{               leaf:62, name: \'app.exp.exp#1#\', title:"" },',
            x5: true,
            r1: ''
        }
    },
    methods: {
        do2 (i) {
            if (this.x5 && i < 10) return '0' + i
            return i
        },
        doloop () {
            var r = ''
            for (var i = this.x1; i < this.x2; i += this.x3) {
                r += this.x4.replace('#1#', this.do2(i)) + '\r\n'
            }
            this.r1 = r
        }
    },
    mounted () {
        this.doloop()
    }
}
</script>
