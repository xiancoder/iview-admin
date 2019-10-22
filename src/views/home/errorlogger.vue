<template>
    <div class="tableLayout">
        <Card>
            <p>iview-admin会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。</p>
            <p>如果你不需要这个功能，将'./src/config/index.js'里的plugin的'error-store'属性删掉即可。</p>
            <p>另外在开发环境下，你程序中的错误都会被收集起来，这样可能不利于你排查错误，你可以将'./src/config/index.js'的'error-store'的'developmentOff'设为true。</p>
            <p>如果你只是想收集错误日志，不希望登录用户看到错误日志，你可以不提供查看日志的入口，只需将'./src/config/index.js'的'error-store'的'showInHeader'设为false。</p>
        </Card>
        <br />
        <Card>
            <Row>
                <i-col span="6">
                    <Button @click="click" style="display: block">点击测试触发程序错误</Button>
                    <Button @click="ajaxClick" style="margin-top:10px;">点击测试触发ajax接口请求错误</Button>
                </i-col>
                <i-col span="18">
                    ajax接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。
                </i-col>
            </Row>
        </Card>
        <br />
        <div>
            <Button @click="hendleExportData" type="primary" style="margin: 0 10px 10px 0;">导出日志记录</Button>
            <Button @click="hendleClearData" type="default" style="margin: 0 10px 10px 0;">清空错误列表</Button>
            <b>注：这里只会显示成功保存到服务端的错误日志，而且页面错误日志不会在浏览器持久化存储，刷新页面即会丢失</b>
            <Table border ref="table" :columns="columns" :data="errorList"></Table>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'error_logger_page',
    data () {
        return {
            columns: [
                { type: 'index', title: '序号', width: 100 },
                { key: 'type', title: '类型', width: 100,
                    render: (h, { row }) => {
                        return (
                            <div>
                                <icon size={16} type={row.type === 'ajax' ? 'md-link' : 'md-code-working'}></icon>
                            </div>
                        )
                    }
                },
                { key: 'code', title: '编码', width: 100,
                    render: (h, { row }) => {
                        return (
                            <span>{ row.code === 0 ? '-' : row.code }</span>
                        )
                    }
                },
                { key: 'mes', title: '信息' },
                { key: 'url', title: 'URL' },
                { key: 'time', title: '时间', sortable: true, sortType: 'desc',
                    render: (h, { row }) => {
                        return (
                            <span>{ dayjs(row.time).format('YYYY-MM-DD HH:mm:ss') }</span>
                        )
                    }
                }
            ]
        }
    },
    computed: {
        errorList () { return this.$store.state.system.errorList }
    },
    methods: {
        hendleExportData () {
            this.$refs.table.exportCsv({ filename: '错误日志.csv' })
        },
        hendleClearData () {
            this.$store.dispatch('system/clearError') // 清空错误日志记录表
        },
        click () {
            throw new Error('我试一下看看是否被捕获')
        },
        ajaxClick () { this.$api.data.errorReq() }
    },
    activated () {
    },
    mounted () {
    }
}
</script>
