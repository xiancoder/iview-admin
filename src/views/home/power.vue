<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">权限控制效果展示</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <Divider orientation="left">随意配置选择权限 <del>提交接口后改变权限对应渲染</del>提交直接改变状态</Divider>
                    <FormItem label="穿梭框">
                        <Transfer
                            :data="data3"
                            :target-keys="targetKeys3"
                            :list-style="listStyle"
                            :render-format="render3"
                            :operations="['去除权限','增加权限']"
                            filterable
                            @on-change="handleChange3">
                            <div :style="{float: 'right', margin: '5px'}">
                                <Button size="small" @click="reloadMockData">Refresh</Button>
                            </div>
                        </Transfer>
                        <div class="ivu-form-item-notice-tip">请自行挑选权限</div>
                    </FormItem>
                    <FormItem>
                        <div>处理过的权限 = {{targetKeys3}}</div>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
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
        /* const routeList = this.$store.state.route.routeList
        const arr = []
        for (var k in routeList) {
            const one = routeList[k]
            if (!one.power || one.power === '0000') { continue; }
            arr.push({ key: one.power, label: one.title })
        } */
        const arr = [
            { key: 'sy-xxzx', label: '首页-信息中心' },
            { key: 'sy-cw', label: '首页-错误收集' },
            { key: 'sy-error', label: '首页-错误页面' },
            { key: 'sy-power', label: '首页-权限控制' },
            { key: 'sy-theme', label: '首页-主题控制' },
            { key: 'expv1', label: '经验集1' },
            { key: 'expv2-12345', label: '经验集2-1卷' },
            { key: 'expv2-67890', label: '经验集2-2卷' },
            { key: 'expv2-22345', label: '经验集2-3卷' },
            { key: 'expv2-27890', label: '经验集2-4卷' },
            { key: 'workv2-0', label: '工作集2-1卷' },
            { key: 'workv2-1', label: '工作集2-2卷' },
            { key: 'workv2-2', label: '工作集2-3卷' },
            { key: 'tool', label: '工具集合' },
            { key: 'dsp', label: 'dsp开发' },
            { key: 'canvas', label: '绘图' },
            { key: 'oa-renshi', label: 'oa开发-人事' },
            { key: 'oa-renwu', label: 'oa开发-任务' },
            { key: 'oa-gong', label: 'oa开发-工单' }
        ]
        return {
            loading: false,
            frm: { },
            frmValidate: { },
            data3: arr,
            targetKeys3: this.$store.state.route.powerList,
            listStyle: {
                width: '250px',
                height: '300px'
            }
        }
    },
    computed: { // 计算属性
    },
    methods: {
        getMockData () {
            return [
                { key: 'sy', label: '首页', description: '(模块)', disabled: false },
                { key: 'jyjv1', label: '经验集V1', description: '(模块)', disabled: false },
                { key: 'jyjv2', label: '经验集V2', description: '(模块)', disabled: false },
                { key: 'workv2', label: '工作集V2', description: '(模块)', disabled: false }
            ]
        },
        getTargetKeys () {
            return ['jyjv1']
        },
        handleChange3 (newTargetKeys) {
            this.targetKeys3 = newTargetKeys
        },
        render3 (item) {
            return item.label
        },
        reloadMockData () {
            this.data3 = this.getMockData()
            this.targetKeys3 = this.getTargetKeys()
        },
        handleSubmit () {
            this.loading = true
            this.$store.dispatch('route/getPowerList', this.targetKeys3).then(() => {
                this.loading = false
            })
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
    }
}
</script>
