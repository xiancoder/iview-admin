<template>
    <div style=" padding: 20px; ">
        <small>添加前请先打开数据库(如数据库不存在则执行创建过程)</small><br /><br />
        <button @click="openDB">打开数据库</button>
        <button @click="deleteDB">删除数据库</button><br /><br />
        <button @click="closeDB">关闭数据库</button><br /><br />
        姓名：<input type="text" id="name" v-model="name"><br />
        年龄：<input type="number" id="age" min=1 v-model="age"><br />
        性别：
        男：<input type="radio" id="man" name="sex" value="male" v-model="sex">
        女：<input type="radio" id="woman" name="sex" value="female" v-model="sex"><br />
        <button @click="add">添加数据</button>
        <button @click="get">获取数据</button><br />
        <button @click="foreach">遍历数据</button><br />
        <button @click="update">更新数据</button><br />
        <button @click="remove">删除数据</button><br />
        <button @click="searchFromIndex">根据索引查数据</button><br />
    </div>
</template>
<script>
import indexedDB from '@/plugins/indexedDB'
export default {
    data () {
        return {
            name: 'tom',
            age: '12',
            sex: 'male'
        }
    },
    methods: {
        openDB () {
            indexedDB.openDB('test', 'person', 1)
        },

        deleteDB () {
            indexedDB.deleteDB('test')
        },

        closeDB () {
            indexedDB.closeDB('test')
        },

        add () {
            indexedDB.add('person', {name: this.name, age: this.age, sex: this.sex})
        },

        get () {
            indexedDB.get('person')
        },

        foreach () {
            indexedDB.foreach('person')
        },

        update () {
            indexedDB.update('person', {id: 4, name: this.name, age: this.age, sex: this.sex})
        },

        remove () {
            indexedDB.remove('person', 4)
        },

        searchFromIndex () {
            indexedDB.searchFromIndex('person', 'name', 'tom')
        }
    }
}
</script>
