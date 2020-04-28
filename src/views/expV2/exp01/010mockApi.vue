<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">智能制作接口文档</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div v-for="row in apis" class="mockapibox">
                    <p>{</p>
                    <p>____'title': '<input v-show="row.titleEdit" type="text" v-model="row.title"/>
                        <span v-show="!row.titleEdit">{{row.title}}</span>', // 接口标题描述
                        <Icon type="md-flower" size="20" @click="row.titleEdit=!row.titleEdit" title="修改标题文本"/>
                    </p>
                    <p>____'url':'<input v-show="row.urlEdit" type="text" v-model="row.url"/>
                        <span v-show="!row.urlEdit">{{row.url}}</span>', // 接口URL
                        <Icon type="md-flower" size="20" @click="row.urlEdit=!row.urlEdit" title="修改接口URL"/>
                    </p>
                    <p>____'method': '<span>{{row.method}}</span>', // 接口请求方式
                        <Icon type="ios-bonfire" size="20" @click="row.method='POST'" title="修改请求方式为POST"/>
                        <Icon type="md-bonfire" size="20" @click="row.method='GET'" title="修改请求方式为GET"/>
                    <p>____'params':{
                        <Icon type="md-flower" size="20" @click="row.page=!row.page" title="是否带分页"/>
                        <Icon type="md-add-circle" size="20" @click="row.params.push({edit:true})" title="插入参数"/>
                    </p>
                    <p v-for="(row2,index) in row.params">________'<input v-show="row2.edit" type="text" v-model="row2.key"/>
                        <span v-show="!row2.edit">{{row2.key}}</span>' :&nbsp;
                        <input v-show="row2.edit" type="text" v-model="row2.value"/>
                        <span v-show="!row2.edit">{{row2.value}}</span>, //&nbsp;
                        <input v-show="row2.edit" type="text" v-model="row2.dosc"/>
                        <span v-show="!row2.edit">{{row2.dosc}}</span>
                        <Icon type="md-flower" size="20" @click="row2.edit=!row2.edit" title="编辑提交"/>
                        <Icon type="md-close-circle" size="20" @click="row.params.splice(index,1)" title="移除参数"/>
                    </p>
                    <p v-show="row.page">________'page_index': 1,</p>
                    <p v-show="row.page">________'page_size': 30</p>
                    <p>____},</p>
                    <p>____'response':{</p>
                    <p>________'code': '200',</p>
                    <p>________'msg': '',</p>
                    <p>________'data':{</p>
                    <p>____________'list':[{
                        <Icon type="md-add-circle" size="20" @click="row.list.push({edit:true})" title="插入结果列"/>
                    </p>
                    <p v-for="(row2,index) in row.list">________________'<input v-show="row2.edit" type="text" v-model="row2.key"/>
                        <span v-show="!row2.edit">{{row2.key}}</span>' :&nbsp;
                        <input v-show="row2.edit" type="text" v-model="row2.value"/>
                        <span v-show="!row2.edit">{{row2.value}}</span>, //&nbsp;
                        <input v-show="row2.edit" type="text" v-model="row2.dosc"/>
                        <span v-show="!row2.edit">{{row2.dosc}}</span>
                        <Icon type="md-flower" size="20" @click="row2.edit=!row2.edit" title="修改提交"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=1;row2.value='\'\'';row2.dosc='啥'" title="字符串"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=2;row2.value='\'2020-4-27\'';row2.dosc='日期'" title="日期"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=3;row2.value=0;row2.dosc='0代表XX,1代表XX'" title="布尔01"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=4;row2.value=200;row2.dosc='数字,'" title="数字金钱"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=5;row2.value=1;row2.dosc='0代表全部,1代表XX,2代表XX'" title="枚举"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=6;row2.value='[]';row2.dosc='数组'" title="数组"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=7;row2.value='\'柳依依\'';row2.dosc='名字'" title="名字"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=8;row2.value='\'missHaHeHo\'';row2.dosc='账号'" title="账号"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=9;row2.value='\'AAA@sina.com\'';row2.dosc='邮箱'" title="邮箱"/>
                        <Icon type="md-ionic" size="20" @click="row2.type=10;row2.value='2';row2.dosc='ID'" title="ID"/>
                        <Icon type="md-close-circle" size="20" @click="row.params.splice(index,1)" title="移除结果列"/>
                    </p>
                    <p>____________}],
                    <p v-show="row.page">____________count: 200
                    <p>________}</p>
                    <p>____}</p>
                    <p>}</p>
                    <hr />
                    <p>{</p>
                    <p>____'title': '<span>{{row.title}}</span>', // 接口标题描述</p>
                    <p>____'url':'<span>{{row.url}}</span>', // 接口URL</p>
                    <p>____'method':'<span>{{row.method}}</span>', // 接口请求方式</p>
                    <p>____'params':{</p>
                    <p v-for="(row2) in row.list">________'<span>{{row2.key}}</span>' :&nbsp;
                        <span>{{row2.value}}</span>, //&nbsp;
                        <span>{{row2.dosc}}</span>
                    </p>
                    <p>____},</p>
                    <p>____'response':{</p>
                    <p>________'code': '200',</p>
                    <p>________'msg': '',</p>
                    <p>________'data':{</p>
                    <p>____________'res_code': 1, //1:成功 0:失败
                    <p>____________'res': '', // 失败原因
                    <p>________}</p>
                    <p>____}</p>
                    <p>}</p>
                    <Icon type="md-happy" size="20" @click="makeMock(row)" title="生产假数据"/>
                    <p>{{row.mock}}</p>
                    <p v-pre>{'code': '200','msg': '','data':{'res_code': 1,'res': ''}}</p>
                </div>
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
import Mock from 'mockjs'

export default {
    data () {
        return {
            apis: [
                {
                    title: 'XXXX标题',
                    titleEdit: false,
                    url: '/api/Xxxx/Xxxx',
                    urlEdit: false,
                    method: 'GET',
                    params: [
                        {key: 'name', value: '\'\'', dosc: '描述', edit: false}
                    ],
                    list: [
                        {key: 'id', value: '1', dosc: 'ID', edit: false, type: 10},
                        {key: 'user_name', value: '\'missHaHeHo\'', dosc: '英文数字', edit: false, type: 8},
                        {key: 'real_name', value: '\'柳依依\'', dosc: '真人名字', edit: false, type: 7},
                        {key: 'operate_at', value: '\'2020-4-27\'', dosc: '时间', edit: false, type: 2}
                    ],
                    page: true,
                    mock: null
                }
            ]
        }
    },
    methods: {
        makeMock (row) {
            const res = {
                'code': '200',
                'msg': '',
                'data': {}
            }
            if (row.page) {
                res.data.count = 200
            }
            let obj = {}
            for (var i = 0, l = row.list.length; i < l; i++) {
                let x = ''
                switch (row.list[i].type) {
                    case 1: x = '@csentence(1, 3)'; break
                    case 2: x = '@date("yyyy-MM-dd")'; break
                    case 3: x = '0'; break
                    case 4: x = '1250'; break
                    case 5: x = '1'; break
                    case 6: x = []; break
                    case 7: x = '@cname()'; break
                    case 8: x = '@word(6, 9)'; break
                    case 9: x = '@email()'; break
                    case 10: x = '@increment(0)'; break
                    default: x = '-'
                }
                obj[row.list[i].key] = x
            }
            const d = Mock.mock({
                'list|10': [obj]
            })
            res.data.list = d.list
            row.mock = res
        }
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    .mockapibox {
        background: #f3f3f3;
        color: #000;
        padding: 10px 20px;
        font-size: 16px;
    }
    .mockapibox p:hover{
        background: #dedede;
    }
    .mockapibox p span{
        color: #e91e63;
    }
    .mockapibox p i{
        display:none;
        color: #2d8cf0;
        font-size: 20px;
    }
    .mockapibox p:hover i{
        display:inline-block;
    }
</style>
