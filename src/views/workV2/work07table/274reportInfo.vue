<template>
    <div>
        <div class="head">
            <span class="day_icon" v-if="response.type === 1">日报</span>
            <span class="week_icon" v-if="response.type === 2">周报</span>
            <span class="month_icon" v-if="response.type === 3">月报</span>
            <strong style="font-size:16px;margin-left: 10px">{{response.title}}</strong>
        </div>
        <div class="content">
            <div>
                <span>发布时间</span>
                <strong>{{response.time}}</strong>
                <Poptip class="readDiv" placement="bottom" v-if="response.isAuthor">
                    <span class="fontBlue" @click="getState">阅读状态</span>
                    <table slot="content">
                        <thead>
                        <tr>
                            <td style="padding:0 5px;font-weight:bold;">收件人</td>
                            <td style="padding:0 5px;">阅读状态</td>
                            <td style="padding:0 5px;">时间</td>
                        </tr>
                        <tr style="height:6px;"></tr>
                        </thead>
                        <tbody>
                        <tr style="line-height: 26px;" :class="row.isRead ? 'blue':''" v-for="(row,index) in responseRead" :key="index">
                            <td style="padding:0 5px;">{{row.name}}</td>
                            <td style="padding:0 5px;">{{row.isRead ? '已读' : '未读'}}</td>
                            <td style="padding:0 5px;">{{row.isRead ? row.date : ''}}</td>
                        </tr>
                        </tbody>
                    </table>
                </Poptip>
            </div>
            <div>
                <span>发送人</span>
                <div class="send">{{response.founderName}}</div>
            </div>
            <div>
                <span>接收人</span>
                <strong>{{response.receiverName}}</strong>
            </div>
            <div v-if="response.correlationName">
                <span>抄送</span>
                <strong>{{response.correlationName}}</strong>
            </div>
            <div v-if="response.secretName && (response.isAuthor || response.isSecret)">
                <span>密送</span>
                <strong>{{response.secretName}}</strong>
            </div>
            <div v-if="response.workEnCopy.length>0">
                <span>附件</span>
                <strong style="line-height:25px;padding-top: 4px;">
                    <a v-for="row in response.workEnCopy" :key="row.url" :href="row.url" download="">{{row.name}}<br/></a>
                </strong>
            </div>
        </div>
        <div style="height:20px;border-bottom: 1px solid #dddddd;"></div>
        <div class="order_content" v-html="response.content"></div>
        <div v-if="replyData" style="padding: 0 30px">
            <div class="replyDiv" v-for="(row,index) in replyData" :key="index">
                <div class="icon_reply">
                    <!-- <img src="../../images/icon-reply.png" alt=""> -->
                    <span>回复</span>
                </div>
                <div style="height:10px;"></div>
                <div class="who_reply">
                    <strong>{{row.name}}</strong>
                    <div>
                        <span>{{row.date}}</span>
                    </div>
                </div>
                <div class="reply_content" v-html="row.content"></div>
                <div class="file_reply" v-if="row.workEnCopy.length > 0">
                    <!-- <img style="display:inline-block" class="iconImg" src="../../images/uploadFile.png" alt=""> -->
                    <div style="display:inline-block;">
                        <div class="fileDiv" v-for="row2 in row.workEnCopy" :key="row2.url">
                            <img v-if="row2.type === 'img'" :src="row2.url" alt="" @click="bigImg(row2.url)">
                            <a v-else :key="row2.url" :href="row2.url" download="">{{row2.name}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttonDiv">
            <Button class="margin-right-10" v-if="response.isAuthor" type="primary" @click="toEdit">
                <Icon type="ios-share-alt-outline" size="20"/>
                <span style="vertical-align: middle;">再次发送</span>
            </Button>
            <Button :loading="recallLoad" type="primary" @click="recallReport" v-if="response.isAuthor && response.canRecall" class="margin-right-10">
                <Icon type="md-redo" size="20"/>
                <span style="vertical-align: middle;">撤回</span>
            </Button>
            <Button type="primary" @click="goBack">
                <Icon type="md-arrow-back" size="20"/>
                <span style="vertical-align: middle;">返回</span>
            </Button>
        </div>
        <Form class="replying" ref="formItem" :model="formData" :rules="formRules" :label-width="100" v-if="response.isDelete === 0">
            <FormItem label="回复内容 " prop="content">
                <Input class="orderTextarea" type="textarea" style="width:400px;margin-top: 2px;"  :autosize="{minRows:4,}" v-model="formData.content" placeholder="请输入回复内容"/>
            </FormItem>
            <div style="height:5px"></div>
            <FormItem label="附件 " prop="file">
                <Upload action="api/order/file_url" :default-file-list="fileList" :on-success="addFile" :on-remove="removeFile" :on-error="errorFile">
                    <Button style="width:70px;" type="default"><Icon type="ios-add" size="20"/></Button>
                </Upload>
            </FormItem>
            <FormItem label="仅回复给" prop="rec" class="responseSelect" v-if="!response.isSecret">
                <Select v-model="formData.rec" multiple filterable placeholder="回复仅对发送人和选中者可见，若不选则全员可见" style="max-width: 90%;min-width: 400px;">
                    <Option v-for="option in userList" :value="option.key" :key="option.key" :label="option.name">
                        {{option.name}}<span v-show="false">{{option.emailStr}}</span>
                    </Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button :loading="replyLoad" style="margin-right: 30px;" type="primary" @click="reply">回复</Button>
                <Button type="default" @click="cancel">清空</Button>
            </FormItem>
        </Form>
        <Modal v-model="bigShow" :footer-hide="true" :closable="false" width="60">
            <img :src="bigImgSrc" style="width: 100%">
        </Modal>
    </div>
</template>

<script>
// 匹配超链接,转化为a标签
function urlToLink (val) {
    const re = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g;
    let str = val.replace(re, function (website) {
        return '<a href=\'' + website + '\' target=\'_blank\'>' + website + '</a>';
    });
    str = str.replace(/<script|<\/script/ig, function (c) {
        return '&lt;' + c.substring(1);
    });
    return str;
}

export default {
    data () {
        return {
            response: {
                workEnCopy: []
            },
            userList: [],
            replyData: [], // 回复数据
            responseRead: [],
            formData: {
                content: null,
                rec: [],
                receiver: []
            },
            formRules: {
                content: [
                    { required: true, message: '请填写回复内容' }
                ]
            },
            fileList: [],
            replyLoad: false,
            endLoad: false,
            recallLoad: false, // 撤回工单按钮
            suffixArr: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'pcx', 'tiff'], // 图片类型
            bigShow: false, // 显示大图
            bigImgSrc: null// 大图路径
        };
    },
    methods: {
        init () {
            this.$get('api/report/reply_names', {
                id: parseInt(this.$route.query.id)
            }).then((res) => {
                this.userList = res.data.data.list.map(this.listId);
            });
            this.getInfo();
        },
        // 人员相关
        listId (user) {
            user.key = parseInt(user.id.toString() + user.type.toString());
            return user;
        },
        checkUser (list) {
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                for (let n = 0; n < this.userList.length; n++) {
                    if (this.userList[n].key === list[i]) {
                        arr.push(this.userList[n]);
                    }
                }
            }
            return arr;
        },
        getUser () {
            if (this.response.isSecret) {
                this.formData.receiver = [];
            } else if (this.formData.rec.length === 0) {
                this.formData.receiver = this.userList;
            } else {
                this.formData.receiver = this.checkUser(this.formData.rec);
            }
        },
        subUrl (val) {
            const index = val.lastIndexOf('_') + 1;
            return val.substring(index);
        },
        fileType (val) {
            const n = val.indexOf('.');
            const suffix = val.substring(n + 1);
            return this.suffixArr.indexOf(suffix) === -1 ? 'file' : 'img';
        },
        getInfo () {
            this.$get('api/report/report_info', {
                id: parseInt(this.$route.query.id)
            }).then((res) => {
                this.response = res.data.data.info;
                if (this.response.isRecall) {
                    this.$Modal.info({
                        title: '提示',
                        content: '该工单已撤回，点击确定返回消息列表',
                        onOk: () => {
                            this.$router.go(-1);
                        }
                    });
                }
                this.replyData = res.data.data.reply;
                let [receivers, correlations, secret] = [[], [], []];
                for (let i = 0; i < this.response.implement.length; i++) {
                    receivers.push(this.response.implement[i].name);
                }
                for (let i = 0; i < this.response.correlation.length; i++) {
                    correlations.push(this.response.correlation[i].name);
                }
                for (let i = 0; i < this.response.secret.length; i++) {
                    secret.push(this.response.secret[i].name);
                }
                this.response.receiverName = receivers.join('、');
                this.response.correlationName = correlations.join('、');
                this.response.secretName = secret.join('、');
                const paths = this.response.file;
                this.response.workEnCopy = [];
                if (paths.length > 0) {
                    for (let i = 0; i < paths.length; i++) {
                        this.response.workEnCopy.push({url: paths[i], name: this.subUrl(paths[i])});
                    }
                }
                if (this.replyData.length > 0) {
                    for (let i = 0; i < this.replyData.length; i++) {
                        this.replyData[i].workEnCopy = [];
                        if (this.replyData[i].reportEnclosure) {
                            if (this.replyData[i].reportEnclosure.length > 0) {
                                for (let j = 0; j < this.replyData[i].reportEnclosure.length; j++) {
                                    const someone = this.replyData[i].reportEnclosure[j];
                                    const type = this.fileType(someone);
                                    this.replyData[i].workEnCopy.push({url: someone, name: this.subUrl(someone), type: type});
                                }
                            }
                        }
                    }
                }
            });
        },
        getState () {
            this.$get('api/report/read_list', {id: parseInt(this.$route.query.id)}).then(res => {
                this.responseRead = res.data.data.list;
            });
        },
        toEdit () {
            this.$router.push({name: 'report-edit', query: {id: this.$route.query.id, type: '1'}});
        },
        // 撤回汇报
        recallReport () {
            this.recallLoad = true;
            this.$Modal.confirm({
                title: '提示',
                content: '确定要撤回吗？',
                onOk: () => {
                    this.$post('api/report/report_recall', {
                        id: parseInt(this.$route.query.id)
                    }).then(res => {
                        this.recallLoad = false;
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            });
                            this.$router.replace({name: 'report-draftsList'});
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            });
                        }
                    });
                },
                onCancel: () => { this.recallLoad = false; }
            });
        },
        goBack () {
            this.$router.go(-1);
        },
        addFile (response, file, fileList) {
            this.fileList = fileList;
        },
        removeFile (response, file, fileList) {
            this.fileList = fileList;
        },
        errorFile () {
            this.$Message.info({
                content: '上传失败，请联系开发人员解决'
            });
        },
        reply () {
            this.$refs.formItem.validate(valid => {
                if (valid) {
                    this.replyLoad = true;
                    this.getUser();
                    let [files, workEnCopy] = [[], []];
                    for (let i = 0; i < this.fileList.length; i++) {
                        const someone = this.fileList[i].response.data.fileurl;
                        files.push(someone);
                        const type = this.fileType(someone);
                        workEnCopy.push({url: someone, name: this.fileList[i].name, type: type});
                    }
                    const para = {
                        id: parseInt(this.$route.query.id),
                        content: urlToLink(this.formData.content),
                        enclosure: files,
                        receiver: this.formData.receiver
                    };
                    this.$post('api/report/reply', para).then(res => {
                        this.replyLoad = false;
                        const info = res.data.data.info;
                        if (res.data.data && res.data.data.res === 1) {
                            this.replyData.push({
                                date: info.date,
                                name: info.name,
                                content: urlToLink(this.formData.content),
                                workEnCopy: workEnCopy
                            });
                            this.$refs.formItem.resetFields();
                            this.fileList = [];
                            this.getState();
                            this.$get('api/report/report_info', {id: parseInt(this.$route.query.id)});
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '发送失败'
                            });
                        }
                    });
                }
            });
        },
        cancel () {
            this.fileList = [];
            this.$refs.formItem.resetFields();
        },
        // 查看大图
        bigImg (src) {
            this.bigShow = true;// 显示大图
            this.bigImgSrc = src;// 大图路径
        }
    },
    mounted () {
        this.init();
    }
}
</script>
<style lang="less">
    .order_content{
        font-size:14px;
        img{
            max-width: 100% !important;
            display: inline-block;
        }
        table{
            max-width:100%;
            display: inline-table;
            td{
                word-break: break-all;
                border:1px solid #333;
            }
        }
    }
    .orderTextarea .ivu-input{
        font-size: 12px;
    }
    .replying{
        margin-top: 20px;
        .ivu-form-item{
            margin-bottom: 15px !important;
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
    /*@import '../../styles/common.less';*/
    .day_icon{
        font-size: 14px;
        display: inline-block;
        padding: 1px 8px;
        border-radius: 4px;
        color: #2d8cf0;
        border: 1px solid #2d8cf0;
    }
    .week_icon{
        font-size: 14px;
        display: inline-block;
        padding: 1px 8px;
        border-radius: 4px;
        color: #19be6b;
        border: 1px solid #19be6b;
    }
    .month_icon{
        font-size: 14px;
        display: inline-block;
        padding: 1px 8px;
        border-radius: 4px;
        color: #ed4014;
        border: 1px solid #ed4014;
    }
    .fontBlue{
        color: #2d8cf0;
        cursor:pointer;
        margin-left: 20px;
    }
    .head{
        margin: -15px -20px;
        padding: 30px 50px;
        background: #fbf9f9;
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
            padding: 0 8px;
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
        margin-left:20px;
        .iconImg{
            width:20px;
            height:20px;
            vertical-align: top;
        }
        .fileDiv{
            padding-bottom: 5px;
            padding-top:2px;
            img{
                width:100px;
                display:block;
                height:auto;
                cursor:pointer;
            }
        }

    }
    .buttonDiv{
        padding: 20px 50px;
        border-top: 1px solid #dddddd;
    }
</style>
