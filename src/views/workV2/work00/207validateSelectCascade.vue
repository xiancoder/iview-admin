<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的下拉框级联效果</div>
            <div class="blogContent" v-highlight>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="主页选择" prop="p01">
                        <Select v-model="frm.p01" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option v-for="option in dataSet.list1" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="浏览器锁定" prop="p02">
                        <Select v-model="frm.p02" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option v-for="option in dataSet.list2" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="锁定形式" prop="p03">
                        <Select v-model="frm.p03" style="width: 300px" placeholder="请搜索/选择XXX" >
                            <Option v-for="option in dataSet.list3" :value="option.id" :key="option.id" :label="option.name">
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="指定域名绑定" prop="p04">
                        <Input type="text" v-model="frm.p04" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="主页地址">
                        <div>{{homeIndex}}</div>
                    </FormItem>
                </Form>
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
            loading: false,
            frm: {
                p01: '',
                p02: '',
                p03: '',
                p04: ''
            },
            frmValidate: {
                p01: [
                    { required: true, message: '下拉框必选其一' }
                ]
            },
            dataSet: {
                list1: [],
                list2: [{id: 3, name: '按用户点击启动浏览器'}],
                list3: [],
                domainDefault: {}
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.loading = true
                    setTimeout(() => {
                        alert('校验通过')
                        this.loading = false
                    }, 2e3)
                }
            });
        }
    },
    watch: {
        'frm.p01' (n) {
            if (!this.frm.p01 || !this.frm.p03) return false
            let result = this.dataSet.domainDefault['h' + this.frm.p01 + 'l' + this.frm.p03]
            if (!result) return false
            this.frm.p04 = result
        },
        'frm.p03' (n) {
            if (!this.frm.p01 || !this.frm.p03) return false
            let result = this.dataSet.domainDefault['h' + this.frm.p01 + 'l' + this.frm.p03]
            if (!result) return false
            this.frm.p04 = result
        }
    },
    computed: {
        homeIndex () {
            if (!this.frm.p01 || !this.frm.p04) return false
            let result = this.dataSet.home[this.frm.p01]
            return this.frm.p04 + '?id=' + result
        }
    },
    mounted () {
        const data = {
            'home': [
                {'id': 1, 'name': '搜狗导航', 'p_code': '71226-', 'p_id': '9999'},
                {'id': 2, 'name': '2345导航', 'p_code': '90013-', 'p_id': '10499'},
                {'id': 3, 'name': '备用导航', 'p_code': '123-', 'p_id': '3321'},
                {'id': 4, 'name': '百度搜索', 'p_code': '33333', 'p_id': ''},
                {'id': 5, 'name': '360搜索', 'p_code': '666-', 'p_id': '23332'}
            ],
            'lockType': [
                {'id': 1, 'name': 'iframe嵌套'},
                {'id': 2, 'name': '官方域名'},
                {'id': 3, 'name': '302跳转'}
            ],
            'domainDefault': [
                {'home_type': 1, 'lock_type': 1, 'domain': 'http: //ms.wlqkf.com/sh.htm'},
                {'home_type': 1, 'lock_type': 2, 'domain': 'https: //123.sogou.com'},
                {'home_type': 1, 'lock_type': 3, 'domain': 'http: //ms.wlqkf.com/home/default.html'},
                {'home_type': 2, 'lock_type': 1, 'domain': 'http: //ms.wlqkf.com/yd7.htm'},
                {'home_type': 2, 'lock_type': 2, 'domain': 'https: //www.hao774.com'},
                {'home_type': 2, 'lock_type': 3, 'domain': 'http: //ms.wlqkf.com/home/index.html'},
                {'home_type': 3, 'lock_type': 1, 'domain': 'http: //ms.wlqkf.com'},
                {'home_type': 3, 'lock_type': 2, 'domain': 'https: //www.baidu.com/'},
                {'home_type': 3, 'lock_type': 3, 'domain': 'https: //ms.wlqkf.com/home/'},
                {'home_type': 4, 'lock_type': 1, 'domain': 'https://mk.vee9.com/bd7.htm'},
                {'home_type': 4, 'lock_type': 2, 'domain': 'https://www.baidu.com/'},
                {'home_type': 4, 'lock_type': 3, 'domain': 'https://mk.vee9.com/bd7/index.html'},
                {'home_type': 5, 'lock_type': 1, 'domain': 'https://mk.vee9.com/3607.htm'},
                {'home_type': 5, 'lock_type': 2, 'domain': 'https://www.so.com/'},
                {'home_type': 5, 'lock_type': 3, 'domain': 'https://mk.vee9.com/3607/index.html'}
            ]
        }
        // ======================================================
        this.dataSet.list1 = data.home
        const o1 = {}
        for (let i = 0, l = data.home.length; i < l; i++) {
            let one = data.home[i]
            o1[one['id']] = (one['p_code'] || '') + (one['p_id'] || '')
        }
        this.dataSet.home = o1
        this.dataSet.list3 = data.lockType
        const o2 = {}
        for (let i = 0, l = data.domainDefault.length; i < l; i++) {
            let one = data.domainDefault[i]
            o2['h' + one['home_type'] + 'l' + one['lock_type']] = one['domain']
        }
        this.dataSet.domainDefault = o2
        // ======================================================
        setTimeout(() => {
            this.frm.p01 = 1
            this.frm.p02 = 3
            this.frm.p03 = 1
            this.frm.p04 = 'https://ms.wlqkf.com/sh123.htm'
        }, 2e3)
    }
}
</script>
