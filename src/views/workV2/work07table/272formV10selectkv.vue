<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">下拉框获取键值对</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 为了解决项目要求</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>label-in-value 获取键值 -- {{test5}} : {{test5value}}</p>
                <p>
                    <Select v-model="test5" :label-in-value="true" @on-change="(row)=>{test5value=row.label}" style="width:200px">
                        <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>label-in-value 获取键值 多选模式 -- {{test6}} : {{test6value}}</p>
                <p>
                    <Select multiple v-model="test6" :label-in-value="true" @on-change="(arr)=>{test6value = (arr||[]).map(row => {return row.label})}" style="width:200px">
                        <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <script type="text/html" v-pre>
                    <p>
                        <Select v-model="test5" :label-in-value="true" @on-change="(row)=>{test5value=row.label}" style="width:200px">
                            <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                    <p>
                        <Select multiple v-model="test6" :label-in-value="true" @on-change="(arr)=>{test6value = (arr||[]).map(row => {return row.label})}" style="width:200px">
                            <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                </script>
                <script type="text/js">
                    data () {
                        return {
                            cityList3: [ { value: '1', label: 'Ottawa' }, { value: '2', label: 'Paris' }, { value: '3', label: 'Canberra' } ],
                            test5: '',
                            test5value: '',
                            test6: [],
                            test6value: ''
                        }
                    },
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
export default {
    data () {
        return {
            cityList3: [ { value: '1', label: 'Ottawa' }, { value: '2', label: 'Paris' }, { value: '3', label: 'Canberra' } ],
            test5: '',
            test5value: '',
            test6: [],
            test6value: ''
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
