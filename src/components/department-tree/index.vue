<style scoped lang="less">
    .wid250{
        width:250px;
    }
    .whiteSelect .ivu-select-dropdown .ivu-select-dropdown-list li:nth-child(2){
        background:#fff;
    }
</style>
<template>
    <Select ref="selectPosit" class="wid250 whiteSelect" v-model="department" @on-change="select" placeholder="">
        <Option :value=depmId v-show="false">{{depmName}}</Option>
        <Option value='-1'>
            <Tree :data="departData" @on-select-change="selectDepartment"></Tree>
        </Option>
    </Select>
</template>
<script>
export default {
    // 部门下拉框组件-dsf-2019/05/08
    name: 'department-tree',
    props: {
        value: {
            default: ''
        },
        name: {// 默认值
            type: String,
            default: ''
        },
        alldepm: {// 默认值
            type: Boolean,
            default: true
        }
    },
    watch: {
        value: {
            immediate: true,
            handler (val) {
                this.depmId = this.department = val;
            }
        },
        name: {
            immediate: true,
            handler (val) {
                this.depmName = val;
            }
        }
    },
    computed: {
    },
    data () {
        return {
            depmId: this.value,
            depmName: this.name,
            department: this.value,
            departData: []
        };
    },
    methods: {
        init () {
            // 获取部门树
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData = res.data.data.departments;
                let data = {
                    children: [],
                    expand: true,
                    id: -100,
                    title: '全部部门'
                };
                if (this.alldepm) {
                    this.departData.unshift(data);
                }
                this.$nextTick(() => {
                    // 元素添加冒泡事件
                    let elementList = document.querySelectorAll('.ivu-tree-arrow');
                    for (let i = 0; i < elementList.length; i++) {
                        elementList[i].addEventListener('click', function (event) {
                            let ev = event || window.event;
                            ev.stopPropagation();
                        });
                    }
                })
            });
        },
        select () {
            this.$nextTick(() => {
                this.department = this.depmId;
                this.$emit('input', this.department);
                this.$emit('set-name', this.depmName);
            })
        },
        selectDepartment (value) {
            if (value.length >= 1) {
                this.depmId = value[0].id;
                this.depmName = value[0].title;
            }
        },
        stopPro (event) {
            let ev = event || window.event;
            ev.stopPropagation()
        }
    },
    mounted () {
        this.init();
    }
};
</script>
