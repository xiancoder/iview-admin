<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1"> <Icon type="ios-navigate"></Icon> Item 1 </MenuItem>
                        <MenuItem name="2"> <Icon type="ios-keypad"></Icon> Item 2 </MenuItem>
                        <MenuItem name="3"> <Icon type="ios-analytics"></Icon> Item 3 </MenuItem>
                        <MenuItem name="4"> <Icon type="ios-paper"></Icon> Item 4 </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <Row :gutter="16">
                            <Col span="12">
                                <Input v-model="frm.content" type="textarea" :autosize="{minRows: 16,maxRows: 20}" placeholder="请输入XXXX" />
                                <br>
                                <Button type="default" @click="read">获取文章</Button>
                                <Button type="default" @click="submit">提交文章</Button>
                            </Col>
                            <Col span="12">
                                <!-- <div v-html="text1" class="showDown"> </div> -->
                                <div id="edituser"> </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import Vue from 'vue' // 核心
import converter from '@/plugins/showdown'
import { success, error } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            frm: {
                file: 'tryOnce',
                content: ''
            }
        }
    },
    methods: {
        submit () {
            this.$api.blog.submit(this.frm).then(res => {
                success('提交文章 ok')
            }).catch(res => {
                error('提交文章 not ok')
            })
        },
        read () {
            this.$api.blog.read(this.frm.file).then(txt => {
                this.frm.content = txt
                success('获取文章')
            })
        },
        jump () {
            alert(123)
        }
    },
    computed: {
        /* text1 () {
            return converter.makeHtml(this.frm.content)
        } */
    },
    watch : {
        'frm.content' (to, from) {
            var MyComponent=Vue.extend({
                template: '<div>' + converter.makeHtml(to) + '</div>',
                methods: {
                    jump: (n) => { this.jump() } // 可以
                }
            })
            var component= new MyComponent().$mount()
            document.getElementById('edituser').appendChild(component.$el)
        }
    },
    mounted () {
        this.read()
    }
}
</script>
<style scoped>
    .layout{ border: 1px solid #d7dde4; background: #f5f7f9; position: relative; border-radius: 4px; overflow: hidden; }
    .layout-logo{ width: 100px; height: 30px; background: #5b6270; border-radius: 3px; float: left; position: relative; top: 15px; left: 20px; }
    .layout-nav{ width: 420px; margin: 0 auto; margin-right: 20px; }
</style>
