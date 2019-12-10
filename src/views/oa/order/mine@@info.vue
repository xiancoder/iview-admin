<template>
    <div>
        <div class="head">
            <span class="order_typeColor" :class="response.typeStyle">{{response.workTypeName}}</span>
            <strong style="font-size:16px; line-height: 20px; ">{{response.workName}}</strong>
        </div>
        <div class="content">
            <div>
                <span>发布时间</span>
                <strong>{{response.date}}</strong>
                <Poptip class="readDiv" placement="bottom">
                    <span class="fontBlue" @click="getState">阅读状态</span>
                    <Table border slot="content">
                        <thead>
                            <tr>
                                <td style="padding:0 5px; font-weight:bold; ">收件人</td>
                                <td style="padding:0 5px; ">阅读状态</td>
                                <td style="padding:0 5px; ">时间</td>
                            </tr>
                            <tr style="height:6px; "></tr>
                        </thead>
                        <tbody>
                            <tr style="line-height: 26px; " :class="row.isRead ? 'blue':''" v-for="(row,index) in responseRead" :key="index">
                                <td style="padding:0 5px; ">{{row.name}}</td>
                                <td style="padding:0 5px; ">{{row.isRead ? '已读' : '未读'}}</td>
                                <td style="padding:0 5px; ">{{row.isRead ? row.date : ''}}</td>
                            </tr>
                        </tbody>
                    </table>
                </Poptip>
            </div>
            <div>
                <span>发送人</span>
                <span class="send">{{response.founderName}}</span>
            </div>
            <div>
                <span>接收人</span>
                <strong>{{response.receiverName}}</strong>
            </div>
            <div v-if="response.correlationName">
                <span>抄送</span>
                <strong>{{response.correlationName}}</strong>
            </div>
            <div v-if="response.workEnCopy.length>0">
                <span>附件</span>
                <strong style="line-height:25px; padding-top: 4px; ">
                    <a v-for="row in response.workEnCopy" :key="row.url" :href="row.url" download="">{{row.name}}<br/></a>
                </strong>
            </div>
        </div>
        <div style="height:20px; border-bottom: 1px solid #dddddd; "></div>
        <div class="order_content" v-html="response.workContent"></div>
        <div v-if="replyData">
            <div class="replyDiv" v-for="(row,index) in replyData" :key="row.id">
                <div class="icon_reply">
                    <img src="../../../assets/images/icon-reply.png" alt="">
                    <span>回复</span>
                </div>
                <div style="height:10px; "></div>
                <div class="who_reply" style="">
                    <strong>{{row.name}}</strong>
                    <div>
                        <span>{{row.date}}</span>
                        <span class="fontBlue" v-if="row.canBack === 1" @click="recall(index,row.id)">撤回</span>
                    </div>
                </div>
                <div v-if="row.isBack === 0" class="reply_content">{{row.workContent}}</div>
                <div v-else class="recall_content">该内容已撤回</div>
                <div class="file_reply" v-if="row.workEnCopy.length > 0 && row.isBack === 0" >
                    <img src="../../../assets/images/uploadFile.png" alt="">
                    <strong>
                        <a v-for="row2 in row.workEnCopy" :key="row2.url" :href="row2.url" download="">{{row2.name}}</a>
                    </strong>
                </div>
            </div>
        </div>
        <div class="buttonDiv" v-if="handleShow">
            <Button class="margin-right-10" type="primary" @click="toEdit">
                <Icon type="ios-share-alt-outline" size="20"/>
                <span style="vertical-align: middle; ">转发</span>
            </Button>
            <Button :loading="endLoad" type="primary" @click="ending" v-if="endShow" class="margin-right-10">
                <Icon type="ios-mail-open-outline" size="20"/>
                <span style="vertical-align: middle; ">结单</span>
            </Button>
        </div>
        <Button type="primary" @click="goBack" :class="!handleShow ? 'margin-top-20':''">
            <Icon type="md-arrow-back" size="16"/>
            <span style="vertical-align: middle; ">返回</span>
        </Button>
        <Form class="replying" v-if="handleShow" ref="formItem" :model="formData" :rules="formRules" :label-width="160">
            <FormItem label="内容 " prop="content">
                <Input class="orderTextarea" type="textarea" style="width:400px; margin-top: 2px; "  :autosize="{minRows:4,}" v-model="formData.content" placeholder="请输入发票内容"/>
            </FormItem>
            <FormItem label="附件 " prop="file">
                <Upload :max-size="51200" action="api/order/file_url" :default-file-list="fileList" :on-success="addFile" :on-remove="removeFile">
                    <Button style="width:70px; " type="default"><Icon type="ios-add" size="20"/></Button>
                </Upload>
            </FormItem>
            <FormItem>
                <Button :loading="replyLoad" style="margin-right: 30px; " type="primary" @click="reply">回复</Button>
                <Button type="default" @click="cancel">清空</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    computed: {
        handleShow: function () { return this.$route.query.handle && this.response.workStatus === 0 },
        endShow: function () { return this.$route.query.end }
    },
    data () {
        return {
            response: { workStatus: 0, workEnCopy: [] }, // 原工单
            replyData: [], // 回复
            readOnly: 0,
            responseRead: [],
            formData: { content: null },
            formRules: {
                content: [
                    { required: true, message: '请填写回复内容' }
                ]
            },
            fileList: [],
            replyLoad: false,
            endLoad: false
        }
    },
    methods: {
        init () {
            this.getList()
        },
        subUrl (val) {
            const index = val.lastIndexOf('_') + 1
            return val.substring(index)
        },
        getList () {
            this.$get('api/order/order_info', {
                id: parseInt(this.$route.query.id)
            }).then((res) => {
                this.response = res.data.data.info
                this.replyData = res.data.data.reply
                switch (this.response.workType) {
                    case 1:
                        this.response.workTypeName = '工作'
                        this.response.typeStyle = 'order_color1'
                        break
                    case 2:
                        this.response.workTypeName = '周报日报'
                        this.response.typeStyle = 'order_color2'
                        break
                    case 3:
                        this.response.workTypeName = '通知公告'
                        this.response.typeStyle = 'order_color3'
                        break
                    case 4:
                        this.response.workTypeName = '温馨提示'
                        this.response.typeStyle = 'order_color4'
                        break
                    default:
                        this.response.workTypeName = ''
                        this.response.typeStyle = ''
                }
                let [receivers, correlations] = [[], []]
                for (let i = 0; i < this.response.receiver.length; i++) {
                    receivers.push(this.response.receiver[i].name)
                }
                for (let i = 0; i < this.response.correlation.length; i++) {
                    correlations.push(this.response.correlation[i].name)
                }
                this.response.receiverName = receivers.join('、')
                this.response.correlationName = correlations.join('、')
                const paths = this.response.workEnclosure
                this.response.workEnCopy = []
                if (paths.length > 0) {
                    for (let i = 0; i < paths.length; i++) {
                        this.response.workEnCopy.push({url: paths[i], name: this.subUrl(paths[i])})
                    }
                }
                if (this.replyData.length > 0) {
                    for (let i = 0; i < this.replyData.length; i++) {
                        this.replyData[i].workEnCopy = []
                        if (this.replyData[i].workEnclosure) {
                            if (this.replyData[i].workEnclosure.length > 0) {
                                for (let j = 0; j < this.replyData[i].workEnclosure.length; j++) {
                                    this.replyData[i].workEnCopy.push({url: this.replyData[i].workEnclosure[j], name: this.subUrl(this.replyData[i].workEnclosure[j])})
                                }
                            }
                        }
                    }
                }
            })
        },
        recall (index, id) {
            const para = 'id = ' + id
            this.$post('api/order/recall', para, {headers: { 'content-type': 'application/x-www-form-urlencoded' }}).then(res => {
                if (res.data.data.res === 1) {
                    this.replyData[index].isBack = 1
                    this.replyData[index].canBack = 0
                    this.replyData[index].workEnCopy = []
                } else {
                    this.$vux.alert.show({
                        title: '提示',
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        getState () {
            if (++this.readOnly === 1) {
                this.$get('api/order/read_list', { id: parseInt(this.$route.query.id) }).then(res => {
                    this.responseRead = res.data.data.list
                })
            }
        },
        ending () {
            this.endLoad = true
            const para = 'id=' + parseInt(this.$route.query.id)
            this.$post('api/order/closure', para, { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).then(res => {
                this.endLoad = false
                if (res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.replace({name: 'order-sendList'})
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        goBack () {
            this.$router.go(-1)
        },
        toEdit () {
            this.$router.push({name: 'order-edit', query: { id: parseInt(this.$route.query.id), type: 1 }})
        },
        addFile (response, file, fileList) {
            this.fileList = fileList
        },
        removeFile (response, file, fileList) {
            this.fileList = fileList
        },
        reply () {
            this.$refs.formItem.validate(valid => {
                if (valid) {
                    this.replyLoad = true
                    let [files, workEnCopy] = [[], []]
                    for (let i = 0; i < this.fileList.length; i++) {
                        files.push(this.fileList[i].response.data.fileurl)
                        workEnCopy.push({url: this.fileList[i].response.data.fileurl, name: this.fileList[i].name})
                    }
                    const para = {
                        id: parseInt(this.$route.query.id),
                        content: this.formData.content,
                        enclosure: files
                    }
                    this.$post('api/order/reply', para).then(res => {
                        this.replyLoad = false
                        const info = res.data.data.info
                        if (res.data.data.res === 1) {
                            this.replyData.push({
                                canBack: 1,
                                date: info.date,
                                id: info.id,
                                isBack: 0,
                                name: info.name,
                                workContent: this.formData.content,
                                workEnCopy: workEnCopy
                            })
                            this.$refs.formItem.resetFields()
                            this.fileList = []
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '发送失败'
                            })
                        }
                    })
                }
            })
        },
        cancel () {
            this.fileList = []
            this.$refs.formItem.resetFields()
        }
    },
    mounted: function () {
        this.init()
    }
}
</script>
<style lang="less">
    .order_content{
        font-size:14px;
        img{
            max-width: 100% !important;
        }
        table{
            max-width:100%;
            td{
                word-break: break-all;
            }
        }
    }
    .orderTextarea .ivu-input{
        font-size: 12px;
    }
    .replying{
        margin-top: 40px;
        .ivu-form-item{
            margin-bottom: 15px !important;
        }
        .ivu-form-item-label{
            width:50px !important;
        }
        .ivu-form-item-content{
            margin-left:50px !important;
        }
    }
    .readDiv{
        flex:1;
        text-align:right;
        table{
            text-align:center;
        }
        .ivu-poptip-body{
            max-height:400px;
            overflow-y:scroll;
        }
    }
</style>
<style scoped lang="less">
    .fontBlue{
        color: #2d8cf0;
        cursor:pointer;
        margin-left: 20px;
    }
    .blue{
        color: #0094eb;
    }
    .head{
        margin: -15px -20px;
        padding: 30px 50px;
        background: #fbf9f9;
        .order_typeColor{
            display: inline-block;
            padding: 0 7px;
            border-radius: 10px;
            color: #fff;
            margin-right: 4px;
            font-size:12px;
            vertical-align: top;
            line-height: 18px;
        }
        .order_color1{
            background: #10aeff;
        }
        .order_color2{
            background: #09bb07;
        }
        .order_color3{
            background: #f5bb10;
        }
        .order_color4{
            background: #e859c8;
        }
    }
    .content{
        color: #9A9A9A;
        margin-left: 30px;
        line-height: 35px;
        font-size: 14px;
        padding-top: 25px;
        > *{
            display:flex;
            display: -webkit-flex;
            span{
                width:60px;
                text-align: right;
            }
            strong{
                flex:1;
                margin-left: 10px;
                a{
                    line-height: 26px;
                }
            }
        }
        .send{
            height: 18px;
            display: inline-block;
            background: #d6eef9;
            padding: 0 6px;
            border-radius: 10px;
            line-height: 18px;
            color: #000;
            margin-left: 12px;
            text-align: center;
            margin-top: 7px;
        }
    }
    .order_content{
        max-width: 85%;
        margin-left: 90px;
        padding: 25px 10px;
    }
    .replyDiv{
        background:#f8f8f9;
        margin-bottom:10px;
        padding: 15px;
        .icon_reply{
            color:#9A9A9A;
            img{
                width:14px;
                margin-right: 4px;
            }
        }
        .who_reply{
            display:flex;
            strong{
                font-size: 14px;
                margin-left: 20px;
            }
            div{
                flex:1;
                text-align:right;
            }

        }
    }
    .reply_content{
        white-space: pre-wrap;
        word-break: break-all;
        padding: 10px 20px 4px 20px;
    }
    .recall_content{
        padding-left: 20px;
        color:#c7c7c7;
        font-size: 14px;
    }
    .file_reply{
        display:flex;
        display: -webkit-flex;
        margin-left:20px;
        img{
            width:20px;
            height:20px;
            vertical-align: middle;
        }
        strong{
            flex:1;
            margin-left: 8px;
            line-height: 22px;
            a{
                display:block;
            }
        }
    }
    .buttonDiv{
        padding-top:10px;
        display: inline-block;
    }
</style>
