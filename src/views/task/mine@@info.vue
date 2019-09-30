<template>
    <div>
        <div class="task_top">
            <span>任务详情</span>
            <div style="float: right">
                <Button type="primary" @click="del">删除</Button>
                <Button type="primary" @click="taskComplete">通过</Button>
                <Button type="primary" @click="modal.restart=true">重启</Button>
                <Button type="primary" @click="modal.edit=true">编辑</Button>
                <Button type="primary" @click="taskTimeout">暂停</Button>
                <Button type="primary" @click="taskRecovery">恢复</Button>
                <Button type="primary" @click="taskAbandon">废弃</Button>
                <Button type="primary" @click="taskCommit">提交验收</Button>
                <Button type="primary" @click="changeLeader">变更负责人</Button>
                <Button type="primary" @click="modal.accept=true">接受任务</Button>
                <!--
                <Button type="primary" @click="del" v-show="taskStatus==4&&user_name==taskInfo.founder">删除</Button>
                <Button type="primary" @click="taskComplete" v-show="taskStatus==2&&role==1&&pause==0">通过</Button>
                <Button type="primary" @click="taskRestart" v-show="taskStatus==2&&role==1&&pause==0">重启</Button>
                <Button type="primary" @click="editTask" v-show="(taskStatus==0 || taskStatus==1 || taskStatus==2)&&role==1&&pause==0">编辑</Button>
                <Button type="primary" @click="taskTimeout" v-show="(taskStatus==0 || taskStatus==1 || taskStatus==2)&&role==1&&pause==0">暂停</Button>
                <Button type="primary" @click="taskRecovery" v-show="(taskStatus==0 || taskStatus==1 || taskStatus==2)&&role==1&&pause==1">恢复</Button>
                <Button type="primary" @click="taskAbandon" v-show="(taskStatus==0 || taskStatus==1 || taskStatus==2)&&role==1">废弃</Button>
                <Button type="primary" @click="editTask" v-show="(taskStatus==1 || taskStatus==2)&&pause==0&&role==2">编辑</Button>
                <Button type="primary" @click="taskCommit" v-show="taskStatus==1&&pause==0&&role==2">提交验收</Button>
                <Button type="primary" @click="changeLeader" v-show="taskStatus==0&&pause==0&&role==2">变更负责人</Button>
                <Button type="primary" @click="acceptTask" v-show="taskStatus==0&&pause==0&&role==2">接受任务</Button>
                -->
            </div>
        </div>
        <Row>
            <Col span="18" class="info_container">
                <table style="width: 100%;table-layout: fixed">
                    <tbody>
                        <tr>
                            <td style="width: 100px">任务编号：</td> <td>{{taskInfo.taskNumber}}</td>
                            <td style="width: 100px">任务名称：</td> <td>{{taskInfo.taskName}}</td>
                        </tr>
                        <tr>
                            <td>发布人：</td> <td>{{taskInfo.founder}}</td>
                            <td>状态：</td> <td>{{taskInfo.taskStatus}}</td>
                        </tr>
                        <tr>
                            <td>优先级：</td> <td>{{taskInfo.taskPriority}}</td>
                            <td>计划完成日期：</td> <td>{{taskInfo.completeTime || '-'}}</td>
                        </tr>
                        <tr>
                            <td>负责人：</td> <td>{{inChargeName}}</td>
                            <td>执行人：</td> <td>
                                <span v-show="operatorName.length==0">-</span>
                                <span v-for="(op,index) in operatorName" :key="index">
                                    {{op}}<span v-show="operatorName.length!==1&&index!==(operatorName.length - 1)">,</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>抄送人：</td> <td colspan="3">
                                <span v-show="correlationName.length==0">-</span>
                                <span v-for="(co,index) in correlationName" :key="index">
                                    {{co}}<span v-show="correlationName.length !== 1 && index !== (correlationName.length - 1)">,</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>任务内容：</td> <td colspan="3"><div style="border: 1px solid #ddd;border-radius: 4px;padding: 10px" v-html="content" class="task_content"></div></td>
                        </tr>
                        <tr>
                            <td>附件：</td> <td colspan="3">
                                <span v-show="fileList.length==0">-</span>
                                <a v-for="(file,index) in fileList" :key="index" :href="file" download="" style="display: block">{{urlName(file)}}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>追加需求：</td> <td colspan="3">
                                <div v-show="extraList.length==0">-</div>
                                <div v-for="(record,index) in extraList" :key="index">
                                    <Divider v-show="index !== 0" style="margin: 10px 0"/>
                                    <div v-html="record.taskContent" class="task_content"></div>
                                    <a v-for="(file,index) in record.taskEnclosure" :key="index" :href="file" download="">{{urlName(file)}}</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col span="5">
                <Card class="right-Card" :bordered="true" style="margin-bottom: 20px"
                    v-show="(taskStatus==0 || taskStatus==1) && role==1 && pause==0">
                    <p slot="title" class="car-title">追加需求</p>
                    <div style="text-align:center">
                        <Button type="primary" ghost @click="addRequest()">写需求</Button>
                    </div>
                </Card>
                <Card class="right-Card" :bordered="true">
                    <p slot="title" class="car-title">添加评论</p>
                    <div style="text-align:center">
                        <Button type="primary" ghost @click="addComment()">写评论</Button>
                    </div>
                </Card>
            </Col>
        </Row>
        <div class="task_top" style="margin-top: 20px"><span>任务轨迹</span></div>
        <div class="info_container" style="padding-left: 100px">
            <div v-show="taskLog.length==0" style="text-align: center">暂无记录</div>
            <div class="record_model" v-for="(log,index) in taskLog" :key="index">
                <Divider v-show="index !== 0" style="margin: 10px 0"/>
                <div style="margin-bottom: 10px;font-size: 14px;position: relative">
                    {{log.userName}}<span>{{log.opAt}}</span>
                    <img :src="'./write.png'" v-show="log.type==1">
                    <img :src="'./log.png'" v-show="log.type==0">
                </div>
                <div style="white-space: pre">{{log.content}}</div>
            </div>
            <div style="text-align: center"><Button v-show="logButton" type="primary" ghost @click="moreLog" :loading="loading">加载更多</Button></div>
        </div>
        <!-- *********************************** -->
        <Modal v-model="modal.restart" title="重启" :closable="false" :mask-closable="false">
            <div style="text-align: center;padding: 30px 0">
                <Button type="success" @click="restartNow()" style="margin: 0 10px">直接重启</Button>
                <Button type="primary" @click="restartChange()" style="margin: 0 10px">修改重启</Button>
                <Button type="default" @click="modal.restart=false" style="margin: 0 10px">取消重启</Button>
            </div>
            <div slot="footer"></div>
        </Modal>
        <Modal v-model="modal.edit" title="编辑任务" :closable="false" :mask-closable="false">
            <Form :label-width="100">
                <FormItem label="完成日期：">
                    <DatePicker v-model="from.edit.deadline" type="date" style="width: 250px"
                        @on-change="deadline=$event">
                    </DatePicker>
                </FormItem>
                <FormItem label="负责人：">
                    <Select v-model="from.edit.inCharge" filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId" :key="option.userId" :label="option.userName">
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="抄送人：">
                    <Select v-model="from.edit.correlation" :label-in-value="true" @on-change="v=>{changeCorrelation(v)}"
                        multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId" :key="option.userId" :label="option.userName">
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="执行人：">
                    <Select v-model="from.edit.operator" :label-in-value="true" @on-change="v=>{changeOperator(v)}"
                        multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId" :key="option.userId" :label="option.userName">
                        </Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelEdit">取消</Button>
                <Button type="primary" @click="saveRelease" v-show="role==1">保存</Button>
                <Button type="primary" @click="saveLeader" v-show="role==2">保存</Button>
            </div>
        </Modal>
        <Modal v-model="modal.accept" title="接受任务" :closable="false" :mask-closable="false">
            <Form :label-width="100">
                <FormItem label="完成日期：">
                    <DatePicker type="date" v-model="from.accept.deadline" @on-change="deadline=$event"
                        :disabled="deadline !== null && taskInfo.taskPriority==0" style="width: 250px">
                    </DatePicker>
                </FormItem>
                <FormItem label="执行人：">
                    <Select v-model="from.accept.operator" :label-in-value="true"
                        @on-change="v=>{ changeOperator(v)}" multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId"
                            :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelAccept">取消</Button>
                <Button type="primary" @click="saveAccept">保存</Button>
            </div>
        </Modal>
        <Modal v-model="modal.changeLeader" title="变更负责人" :closable="false" :mask-closable="false">
            <Form :label-width="100">
                <FormItem label="* 负责人：">
                    <Select v-model="from.changeLeader.inCharge" filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId"
                            :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelChange">取消</Button>
                <Button type="primary" @click="saveChange">保存</Button>
            </div>
        </Modal>
        <Modal v-model="modal.request" title="追加需求" :closable="false" :mask-closable="false" width="700">
            <Form :label-width="100">
                <FormItem label="* 任务内容：">
                    <vue-html5-editor :content="from.request.requestContent" class="task_content"
                        @change="contentChange" :height="100" style="display: inline-block;width: 80%">
                    </vue-html5-editor>
                </FormItem>
                <FormItem label="* 添加附件：">
                    <Upload :before-upload="handleUpload" multiple action="" style="display: inline-block">
                        <Button type="primary">选择文件</Button>
                    </Upload>
                    <div style="margin-right: 70px" v-for="(file, index) in from.request.requestFile" :key="index">
                        {{file.name}}&nbsp;&nbsp;&nbsp;<a @click="removeFile(index)">删除</a>
                    </div>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelRequest()">取消</Button>
                <Button type="primary" @click="saveRequest()">保存</Button>
            </div>
        </Modal>
        <Modal v-model="modal.comment" title="添加评论" :closable="false" :mask-closable="false">
            <Form :label-width="100">
                <FormItem label="* 评论内容：">
                    <Input type="textarea" :rows="4" class="textArea" style="width: 80%"
                        v-model="from.comment.commentContent"/>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelComment()">取消</Button>
                <Button type="primary" @click="saveComment()">保存</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import { dateFormat } from '@/utils/date'
import '@/plugins/vueEditor'
import {success, error, confirm, jumpto} from '@/tools'
export default {
    data () {
        return {
            modal: { // 弹窗开关
                restart: false,
                edit: false,
                accept: false,
                changeLeader: false,
                request: false,
                comment: false
            },
            taskInfo: {}, // 详情
            // 简短便变量方便判断显示隐藏
            taskStatus: '',
            pause: '', // 0：正常，1：暂停
            role: '', // 1：发布人，2：负责人，0：其他
            from: { // 弹窗表单
                edit: {
                    deadline: '',
                    inCharge: '',
                    correlation: [],
                    operator: []
                },
                accept: {
                    deadline: '',
                    operator: ''
                },
                changeLeader: {
                    inCharge: ''
                },
                request: {
                    requestContent: '',
                    requestFile: ''
                },
                comment: {
                    commentContent: ''
                }
            },
            dataSet: {
                userList: []
            },
            inChargeName: '',
            correlationOrigin: [],
            correlationName: [],
            correlationBox: [],
            operatorOrigin: [],
            operatorName: [],
            operatorBox: [],
            content: '',
            fileList: [],
            urlName: function (url) {
                let index = url.lastIndexOf('_')
                url = url.substring(index + 1, url.length)
                return url
            },
            extraList: [],
            // 右侧弹框
            requestContent: '',
            requestFile: [],
            commentContent: '',
            // 轨迹
            taskLog: [],
            page: 2,
            logButton: false,
            loading: false
        }
    },
    methods: {
        goto (name, query) { // 跳转目录
            if (name === 'restart') { jumpto('tast_mine@@restart', {taskId: this.$route.query.taskId}) }
        },
        init () {
            if (this.$route.query.role) {
                this.role = parseInt(this.$route.query.role)
            }
            this.$get('api/task/allusers', {
            }).then((res) => {
                this.dataSet.userList = res.data.data.list
            })
            // 账号信息
            this.$get('api/system/login_user', {
            }).then(res => {
                this.user_name = res.data.data.userName
            })
            this.getInfo()
            this.getLog()
        },
        getInfo () {
            this.correlationOrigin = []
            this.operatorOrigin = []
            this.correlationName = []
            this.operatorName = []
            this.$get('api/task/detail', {
                taskId: this.$route.query.taskId
            }).then((res) => {
                // 简短便变量方便判断显示隐藏
                this.taskInfo = res.data.data.res
                this.taskStatus = this.taskInfo.taskStatus
                this.pause = this.taskInfo.pause
                this.inCharge = this.taskInfo.personLiable.userId
                this.inChargeName = this.taskInfo.personLiable.userName
                this.deadline = this.taskInfo.completeTime
                if (!this.$route.query.role && this.$route.query.role !== 0) {
                    this.role = this.taskInfo.role[0]
                }
                if (this.taskInfo.correlation.length > 0) {
                    for (let i = 0; i < this.taskInfo.correlation.length; i++) {
                        this.correlationOrigin.push(this.taskInfo.correlation[i].userId)
                        // this.correlationName = this.correlationName + this.taskInfo.correlation[i].userName + ' '
                        this.correlationName.push(this.taskInfo.correlation[i].userName)
                    }
                    this.correlation = this.correlationOrigin
                }
                if (this.taskInfo.implement.length > 0) {
                    for (let i = 0; i < this.taskInfo.implement.length; i++) {
                        this.operatorOrigin.push(this.taskInfo.implement[i].userId)
                        // this.operatorName = this.operatorName + this.taskInfo.implement[i].userName + ' '
                        this.operatorName.push(this.taskInfo.implement[i].userName)
                    }
                    this.operator = this.operatorOrigin
                }
                this.content = this.taskInfo.task_content[0].taskContent
                if (this.taskInfo.task_content[0].taskEnclosure) {
                    this.fileList = this.taskInfo.task_content[0].taskEnclosure
                }
                this.extraList = JSON.parse(JSON.stringify(this.taskInfo.task_content))
                this.extraList.shift()
            })
        },
        // 任务通过
        taskComplete () {
            confirm('确认要通过验收吗？').then(() => {
                this.$post('api/task/checkpass', {
                    taskId: this.$route.query.taskId
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        // 弹窗 重启 Fun
        restartNow () {
            this.$get('api/task/restart', {
                id: this.$route.query.taskId
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    success('操作成功')
                    this.getInfo()
                    this.getLog()
                } else if (res.data.data.res === -1) {
                    error('没有操作权限')
                } else {
                    error(res.data.data || '操作失败')
                }
            }).finally(() => {
                this.modal.restart = false
            })
        },
        restartChange () {
            this.modal.restart = false
            this.goto('restart')
        },
        // 暂停恢复
        taskTimeout () {
            confirm('确认要暂停任务吗？').then(() => {
                this.$post('api/task/setpause', {
                    taskId: this.$route.query.taskId,
                    isSuspend: 1
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        taskRecovery () {
            confirm('确认要恢复任务吗？').then(() => {
                this.$post('api/task/setpause', {
                    taskId: this.$route.query.taskId,
                    isSuspend: 0
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        // 删除任务
        del () {
            confirm('确认要删除任务吗？').then(() => {
                this.$post('api/task/delete', {
                    taskId: this.$route.query.taskId
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.$router.go(-1)
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        // 废弃任务
        taskAbandon () {
            confirm('确认要废弃任务吗？').then(() => {
                this.$post('api/task/giveup', {
                    taskId: this.$route.query.taskId
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        // 提交验收
        taskCommit () {
            confirm('确认要提交验收吗？').then(() => {
                this.$post('api/task/commit', {
                    taskId: this.$route.query.taskId
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
            })
        },
        cancelEdit () {
            this.modal.edit = false
            this.deadline = this.taskInfo.completeTime
            this.inCharge = this.taskInfo.personLiable.userId
            this.correlation = this.correlationOrigin
            this.operator = this.operatorOrigin
        },
        changeCorrelation (v) {
            this.correlationBox = v
        },
        changeOperator (v) {
            this.operatorBox = v
        },
        saveRelease () {
            if ((this.deadline === '' || this.deadline === null) && this.taskInfo.taskPriority === 0) {
                error('请选择完成日期')
            } else {
                this.$post('api/task/founderedit', {
                    taskId: this.$route.query.taskId,
                    entime: this.deadline === '' || this.deadline === null ? null : dateFormat(this.deadline),
                    correlation: this.correlationBox
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
                this.modal.edit = false
            }
        },
        saveLeader () {
            this.$post('api/task/change', {
                taskId: this.$route.query.taskId,
                personLiable: this.inCharge,
                implement: this.operatorBox
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    success('操作成功')
                    this.$router.push({name: 'task_mine'})
                } else if (res.data.data.res === -1) {
                    error('没有操作权限')
                } else {
                    error(res.data.data || '操作失败')
                }
            })
            this.modal.edit = false
        },
        // 接受任务
        saveAccept () {
            if (this.deadline === '' || this.deadline === null) {
                error('请选择完成日期')
            } else {
                this.$post('api/task/accept', {
                    taskId: this.$route.query.taskId,
                    entime: this.deadline,
                    implement: this.operatorBox
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                        this.getLog()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.msg || '操作失败')
                    }
                })
                this.modal.accept = false
            }
        },
        cancelAccept () {
            this.modal.accept = false
            this.deadline = this.taskInfo.completeTime
            this.operator = this.operatorOrigin
        },
        // 变更负责人
        changeLeader () {
            this.modal.changeLeader = true
        },
        cancelChange () {
            this.modal.changeLeader = false
            this.inCharge = this.taskInfo.personLiable.userId
        },
        saveChange () {
            if (this.inCharge === '') {
                error('请选择负责人')
            } else {
                this.$post('api/task/changeleader', {
                    taskId: this.$route.query.taskId,
                    userId: this.inCharge
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.$router.push({name: 'task_mine'})
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
                this.modal.changeLeader = false
            }
        },
        // 追加需求
        addRequest () {
            this.modal.request = true
            this.requestContent = ''
            this.requestFile = []
        },
        contentChange (val) {
            this.requestContent = val
        },
        handleUpload (file) {
            if (file.size > 52420000) {
                error('文件过大')
            } else {
                this.requestFile.push(file)
            }
            return false
        },
        removeFile (index) {
            this.requestFile.splice(index, 1)
        },
        cancelRequest () {
            this.modal.request = false
        },
        saveRequest () {
            if (this.requestContent === '') {
                error('请填写任务内容')
            } else {
                let pa = new FormData()
                pa.append('id', this.$route.query.taskId)
                pa.append('taskAddContent', this.requestContent)
                for (let file in this.requestFile) {
                    pa.append('file', this.requestFile[file])
                }
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.$post('api/task/addneed', pa, config
                ).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getInfo()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
                this.modal.request = false
            }
        },
        // 添加评论
        addComment () {
            this.modal.comment = true
            this.commentContent = ''
        },
        cancelComment () {
            this.modal.comment = false
        },
        saveComment () {
            if (this.commentContent === '') {
                error('请填写评论内容')
            } else {
                this.$post('api/task/discussadd', {
                    taskId: this.$route.query.taskId,
                    content: this.commentContent
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        success('操作成功')
                        this.getLog()
                    } else if (res.data.data.res === -1) {
                        error('没有操作权限')
                    } else {
                        error(res.data.data || '操作失败')
                    }
                })
                this.modal.comment = false
            }
        },
        // 任务轨迹
        getLog () {
            this.$get('api/task/tasklog', {
                taskId: this.$route.query.taskId,
                page_index: 1,
                page_size: 5
            }).then((res) => {
                this.taskLog = res.data.data.list
                if (res.data.data.rowcount > 5) {
                    this.logButton = true
                }
            })
        },
        moreLog () {
            this.loading = true
            this.$get('api/task/tasklog', {
                taskId: this.$route.query.taskId,
                page_index: this.page,
                page_size: 5
            }).then((res) => {
                let list = res.data.data.list
                if (list.length === 0) {
                    error('没有更多数据了')
                    this.logButton = false
                } else {
                    for (let i = 0; i < list.length; i++) {
                        this.taskLog.push(list[i])
                    }
                    this.page = this.page + 1
                }
            })
            let self = this
            setTimeout(function () { self.loading = false }, 2000)
        }
    },
    mounted () {
        this.init()
    }
}
</script>
<style>
</style>
<style scoped>
    .task_top{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
        margin-bottom: 10px;
    }
    .task_top button{
        margin-left: 5px;
        height: 30px;
    }
    .task_top span{
        display: inline-block;
        padding: 0 32px;
        border-radius: 4px;
        font-weight:lighter;
        background-color: #495060;
        color: #ffffff;
        font-size: 14px;
        height: 35px;
        line-height: 35px;
    }
    .info_container{
        font-size: 14px;
        padding: 0 30px 0 20px;
    }
    .info_container td{
        padding-top: 20px;
        vertical-align: top;
    }
    .info_container td:nth-child(odd){
        text-align: right;
    }
    .info_container td:nth-child(even){
        font-weight: bold;
    }
    .record_model{
        font-weight: bold;
        font-size: 13px;
    }
    .record_model span{
        display: inline-block;
        margin-left: 20px;
        color: #999;
        font-size: 12px!important;
    }
    .record_model img{
        position: absolute;
        top: 0;
        left: -50px;
        width: 30px;
        height: 30px;
    }
</style>
