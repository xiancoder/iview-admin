<template>
    <div>
        <Tree :data="data5" :render="renderContent" ></Tree>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data5: [
                {
                    title: 'parent 1', expand: true,
                    children: [
                        {
                            title: 'parent 1-1', expand: true,
                            children: [
                                { title: 'leaf 1-1-1' },
                                { title: 'leaf 1-1-2' }
                            ]
                        },
                        {
                            title: 'parent 1-2', expand: true,
                            children: [
                                { title: 'leaf 1-2-1' },
                                { title: 'leaf 1-2-1' }
                            ]
                        }
                    ]
                }
            ],
            buttonProps: { type: 'default', size: 'small' },
            dragstartNode: '',
            dragstartData: ''
        }
    },
    mounted () {
    },
    methods: {
        renderContent (h, { root, node, data }) {
            return h('span', {
                style: { display: 'inline-block', width: '100%' },
                attrs: { draggable: 'true' },
                on: {
                    dragstart: () => this.handleDragStart(root, node, data),
                    dragover: () => this.handleDragOver(root, node, data),
                    dragend: () => this.handleDragEnd(root, node, data),
                    drop: () => this.handleDrop(root, node, data)
                }
            }, [
                h('span', [
                    h('Icon', {
                        props: { type: 'ios-paper-outline' },
                        style: { marginRight: '8px' }
                    }),
                    h('span', data.title)
                ]),
                h('span', {
                    style: { display: 'inline-block', marginRight: '32px', marginLeft: '10px' }
                }, [
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, { icon: 'ios-create', shape: 'circle' }),
                        style: { marginRight: '8px' },
                        on: { click: () => { this.append(data) } }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, { icon: 'ios-remove', shape: 'circle' }),
                        on: { click: () => { this.remove(root, node, data) } }
                    })
                ])
            ])
        },
        append (data) {
            const children = data.children || []
            children.push({ title: 'appended node', expand: true })
            this.$set(data, 'children', children)
        },
        remove (root, node, data) {
            const parentKey = root.find(el => el === node).parent
            const parent = root.find(el => el.nodeKey === parentKey).node
            const index = parent.children.indexOf(data)
            parent.children.splice(index, 1)
        },
        handleDragStart (root, node, data) {
            // const event = window.event || arguments[0]
            this.dragstartNode = node
            this.dragstartData = data
        },
        handleDragOver (root, node, data) {
            const event = window.event || arguments[0]
            event.preventDefault()
        },
        handleDragEnd (root, node, data) {
            const event = window.event || arguments[0]
            event.preventDefault()
        },
        handleDrop (root, node, data) {
            event.preventDefault()
            if (node === this.dragstartNode) return
            // const targetparentKey = root.find(el => el === node).parent
            // const targetparent = root.find(el => el.nodeKey === targetparentKey).node
            // const targetindex = targetparent.children.indexOf(data)
            const targetchildren = data.children || []
            targetchildren.push(this.dragstartData)
            this.$set(data, 'children', targetchildren)
            const sourceparentKey = root.find(el => el === this.dragstartNode).parent
            const sourceparent = root.find(el => el.nodeKey === sourceparentKey).node
            const sourceindex = sourceparent.children.indexOf(this.dragstartData)
            sourceparent.children.splice(sourceindex, 1)
            console.log(this.data5, 'data5')
        }
    }
}
</script>
