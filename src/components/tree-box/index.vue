<template>
    <div>
        <Tree :data="treeData" :render="treeRender"></Tree>
    </div>
</template>

<script>
export default {
    name: 'tree-box',
    props: {
        value: {
            type: Array,
            default: () => {
                return []
            }
        },
        name: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            selectIds: this.value,
            selectNames: this.name,
            nameBox: [],
            treeData: []
        };
    },
    watch: {
        value: {
            handler (val) {
                this.selectIds = val;
            }
        },
        name: {
            handler (val) {
                this.selectNames = val;
                if (this.selectNames === '请选择审批职位' || this.selectNames === '') {
                    this.nameBox = [];
                } else if (this.selectNames !== '') {
                    this.nameBox = this.selectNames.split(',');
                }
            }
        },
        data: {
            immediate: true,
            handler (val) {
                this.treeData = val;
            }
        }
    },
    methods: {
        nodeSelect () {
            this.selectNames = this.nameBox.join(',');
            this.$emit('nameSel', this.selectNames);
        },
        treeRender (h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', {
                    style: {
                        color: this.selectIds.indexOf(data.id) === -1 ? '#333' : '#0094eb'
                    }
                }, [
                    h('span', data.title)
                ]),
                h('span', {
                    style: {
                        display: 'inline-block',
                        float: 'right',
                        marginRight: '32px'
                    }
                }, [
                    h('Checkbox', {
                        props: {
                            value: this.selectIds.indexOf(data.id) !== -1,
                            disabled: !data.state
                        },
                        on: {
                            'on-change': () => {
                                if (this.selectIds.indexOf(data.id) === -1) {
                                    this.selectIds.push(data.id);
                                    this.nameBox.push(data.title);
                                } else {
                                    this.selectIds.splice(this.selectIds.indexOf(data.id), 1);
                                    this.nameBox.splice(this.nameBox.indexOf(data.title), 1);
                                }
                                this.nodeSelect();
                            }
                        },
                        style: {
                            padding: 0,
                            margin: 0
                        }
                    })
                ])
            ]);
        }
    },
    mounted () {
    }
};
</script>
