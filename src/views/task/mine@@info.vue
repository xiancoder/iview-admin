<template>
    <div>
        <div class="task_top">
            <span>任务详情</span>
            <div style="float: right">
                <Button type="primary" @click="taskComplete">通过</Button>
                <Button type="primary" @click="modal.restart=true">重启</Button>
                <Button type="primary" @click="taskEdit">编辑</Button>
                <Button type="primary" @click="taskAccept">接受任务</Button>
                <Button type="primary" @click="taskTimeout">暂停</Button>
                <Button type="primary" @click="taskRecovery">恢复</Button>
                <Button type="primary" @click="taskDel">删除</Button>
                <Button type="primary" @click="taskAbandon">废弃</Button>
                <Button type="primary" @click="taskCommit">提交验收</Button>
                <Button type="primary" @click="changeLeader">变更负责人</Button>
            </div>
        </div>
        <Row>
            <Col span="18" class="info_container">
                <Table border style="width: 100%;table-layout: fixed">
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
                            <td>计划完成日期：</td> <td>{{taskInfo.completeTime||'-'}}</td>
                        </tr>
                        <tr>
                            <td>负责人：</td> <td>{{inChargeName}}</td>
                            <td>执行人：</td> <td>
                                <span v-show="operatorNames.length==0">-</span>
                                <span v-for="(op,index) in operatorNames" :key="index">
                                    {{op}},
                                </span>( 用样式来实现逗号... )
                            </td>
                        </tr>
                        <tr>
                            <td>抄送人：</td> <td colspan="3">
                                <span v-show="correlationNames.length==0">-</span>
                                <span v-for="(co,index) in correlationNames" :key="index">
                                    {{co}}
                                </span>( 用样式来实现逗号... )
                            </td>
                        </tr>
                        <tr>
                            <td>任务内容：</td>
                            <td colspan="3">
                                <div style="border: 1px solid #ddd;border-radius: 4px;padding: 10px" v-html="content" class="task_content">
                                </div>
                            </td>
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
                                <div v-for="(row,index) in extraList" :key="index">
                                    <Divider v-show="index !== 0" style="margin: 10px 0"/>
                                    <div v-html="row.taskContent" class="task_content"></div>
                                    <a v-for="(file,index) in row.taskEnclosure" :key="index" :href="file" download="">{{urlName(file)}}</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col span="5">
                <Card class="right-Card" :bordered="true" style="margin-bottom: 20px"
                    v-show="(taskInfo.taskStatus==0 || taskInfo.taskStatus==1) && role==1 && taskInfo.pause==0">
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
            <div style="text-align: center" v-show="logMoreButton">
                <Button type="primary" ghost @click="moreLog" :loading="loading">加载更多</Button>
            </div>
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
                    <Select v-model="from.edit.correlation" :label-in-value="true"
                        multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId" :key="option.userId" :label="option.userName">
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="执行人：">
                    <Select v-model="from.edit.operator" :label-in-value="true"
                        multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId" :key="option.userId" :label="option.userName">
                        </Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="saveRelease" v-show="role==1">保存</Button>
                <Button type="primary" @click="saveLeader" v-show="role==2">保存</Button>
                <Button type="text" @click="modal.edit=false">取消</Button>
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
                        multiple filterable style="width: 250px">
                        <Option v-for="option in dataSet.userList" :value="option.userId"
                            :key="option.userId" :label="option.userName"></Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="saveAccept">保存</Button>
                <Button type="text" @click="modal.accept=false">取消</Button>
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
                <Button type="text" @click="modal.changeLeader=false">取消</Button>
                <Button type="primary" @click="saveChange">保存</Button>
            </div>
        </Modal>
        <Modal v-model="modal.request" title="追加需求" :closable="false" :mask-closable="false" width="700">
            <Form :label-width="100">
                <FormItem label="* 任务内容：">
                    <vue-html5-editor :content="from.request.requestContent" class="task_content"
                        :height="100" style="display: inline-block;width: 80%">
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
                <Button type="text" @click="modal.request=false">取消</Button>
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
import { deepClone } from '@/utils/object'
import {success, error, confirm, jumpto} from '@/tools'
import '@/plugins/vueEditor'
export default {
    data () {
        return {
            taskId: 0, // 任务ID 穿参 不存在时候报错
            taskInfo: {}, // 详情
            taskLog: [], // 轨迹列表
            page: 2, // 轨迹分页
            logMoreButton: false, // 更多轨迹按钮
            modal: { // 弹窗开关
                restart: false, // 重启任务
                edit: false, // 编辑任务
                accept: false, // 接受任务
                changeLeader: false, // 变更负责人
                request: false, // 追加需求
                comment: false // 添加评论
            },
            from: { // 弹窗表单
                restart: {}, // 重启
                edit: { // 编辑任务
                    deadline: '',
                    inCharge: '',
                    correlation: [],
                    operator: []
                },
                accept: { // 接受任务
                    deadline: '',
                    operator: ''
                },
                changeLeader: { // 变更负责人
                    inCharge: ''
                },
                request: { // 追加需求
                    requestContent: '',
                    requestFile: []
                },
                comment: { // 添加评论
                    commentContent: ''
                }
            },
            dataSet: { // 数据源
                userList: []
            },
            loading: false
        }
    },
    computed: { // 简短便变量方便判断显示隐藏
        role () { return (this.taskInfo.role || [])[0] || '' }, // 1：发布人，2：负责人，0：其他
        inCharge () { return (this.taskInfo.personLiable || {}).userId }, // 负责人ID
        deadline () { return this.taskInfo.completeTime }, // 负责人
        inChargeName () { return (this.taskInfo.personLiable || {}).userName }, // 负责人
        correlationIds () { return (this.taskInfo.correlation || []).map(row => {return row.userId}) }, // 抄送人id列表
        correlationNames () { return (this.taskInfo.correlation || []).map(row => {return row.userName}) }, // 抄送人name列表
        operatorIds () { return (this.taskInfo.implement || []).map(row => {return row.userId}) }, // 执行人id列表
        operatorNames () { return (this.taskInfo.implement || []).map(row => {return row.userName}) }, // 执行人name列表
        content () { return (this.taskInfo && this.taskInfo.task_content && this.taskInfo.task_content[0] && this.taskInfo.task_content[0].taskContent) || '' }, // 任务内容
        fileList () { return (this.taskInfo && this.taskInfo.task_content && this.taskInfo.task_content[0] && this.taskInfo.task_content[0].taskEnclosure) || '' }, // 附件
        extraList () { return deepClone(this.taskInfo.task_content || [{}]).shift() } // 追加需求
    },
    methods: {
        goto (name, query) { // 跳转目录
            if (name === 'restart') { jumpto('tast_mine@@restart', {taskId: this.taskId}) }
        },
        getDataSet () { // 初始化数据源
            this.$api.user.pullUserList().then(list => { this.dataSet.userList = list })
        },
        getDetail () { // 读取详情
            const id = this.taskId
            this.$api.task.getDetail({id}).then(obj => {
                this.taskInfo = obj
            })
        },
        getLog () { // 任务轨迹
            const taskId = this.taskId
            this.$get('api/task/tasklog', { taskId, page_index: 1, page_size: 5 }).then((res) => {
                this.taskLog = res.data.data.list
                this.logButton = res.data.data.rowcount > 5
            })
        },
        urlName: function (url) { // 处理格式
            let index = url.lastIndexOf('_')
            url = url.substring(index + 1, url.length)
            return url
        },
        restartNow () { // 重启 直接重启
            const id = this.taskId
            this.$get('api/task/restart', {id}).then((res) => {
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
        restartChange () { // 重启 修改重启
            this.goto('restart')
            this.modal.restart = false
        },
        taskEdit () { // 编辑 开始编辑
            this.from.edit = {
                deadline: this.deadline,
                inCharge: this.inCharge,
                correlation: Object.assign(this.correlationIds),
                operator: Object.assign(this.operatorIds)
            }
            this.modal.edit = true
        },
        saveRelease () { // 发布添加
            if (this.taskInfo.taskPriority === 0 && !this.from.edit.deadline) {
                error('请选择完成日期')
            } else {
                this.$post('api/task/founderedit', {
                    taskId: this.taskId,
                    entime: this.from.edit.deadline ? dateFormat(this.from.edit.deadline) : null,
                    correlation: this.from.edit.correlation
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
        saveLeader () { // 发布修改
            this.$post('api/task/change', {
                taskId: this.taskId,
                personLiable: this.inCharge,
                implement: this.from.edit.correlation
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
        taskAccept () { // 接受
            this.from.accept = {
                deadline: this.deadline,
                operator: Object.assign(this.operatorIds)
            }
            this.modal.accept = true
        },
        saveAccept () { // 接受任务
            if (!this.from.accept.deadline) {
                error('请选择完成日期')
            } else {
                this.$post('api/task/accept', {
                    taskId: this.taskId,
                    entime: this.from.accept.deadline,
                    implement: this.from.accept.operator
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
        taskTimeout () { // 暂停恢复
            confirm('确认要暂停任务吗？').then(() => {
                this.$post('api/task/settaskInfo.pause', {
                    taskId: this.taskId,
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
        taskRecovery () { // 恢复任务
            confirm('确认要恢复任务吗？').then(() => {
                this.$post('api/task/settaskInfo.pause', {
                    taskId: this.taskId,
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
        taskDel () { // 删除任务
            confirm('确认要删除任务吗？').then(() => {
                this.$post('api/task/delete', {
                    taskId: this.taskId
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
        taskAbandon () { // 废弃任务
            confirm('确认要废弃任务吗？').then(() => {
                this.$post('api/task/giveup', {
                    taskId: this.taskId
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
        taskComplete () { // 任务通过
            confirm('确认要通过验收吗？').then(() => {
                this.$post('api/task/checkpass', {
                    taskId: this.taskId
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
        changeLeader () { // 变更负责人
            this.from.changeLeader = {
                inCharge: this.inCharge
            }
            this.modal.changeLeader = true
        },
        saveChange () { // 提交变更负责人
            if (this.from.changeLeader.inCharge === '') {
                error('请选择负责人')
            } else {
                this.$post('api/task/changeleader', {
                    taskId: this.taskId,
                    userId: this.from.changeLeader.inCharge
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
        addRequest () { // 追加需求
            this.from.changeLeader = {
                requestContent: '',
                requestFile: []
            }
            this.modal.request = true
        },
        saveRequest () { // 提交追加需求
            if (this.from.changeLeader.requestContent === '') {
                error('请填写任务内容')
            } else {
                let pa = new FormData()
                pa.append('id', this.taskId)
                pa.append('taskAddContent', this.from.changeLeader.requestContent)
                for (let file in this.from.changeLeader.requestFile) {
                    pa.append('file', this.from.changeLeader.requestFile[file])
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
        addComment () { // 添加评论
            this.from.comment.commentContent = ''
            this.modal.comment = true
        },
        saveComment () { // 保存添加评论
            if (this.from.comment.commentContent === '') {
                error('请填写评论内容')
            } else {
                this.$post('api/task/discussadd', {
                    taskId: this.taskId,
                    content: this.from.comment.commentContent
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
        taskCommit () { // 提交验收
            confirm('确认要提交验收吗？').then(() => {
                this.$post('api/task/commit', {
                    taskId: this.taskId
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
        moreLog () { // 更多日志
            this.loading = true
            this.$get('api/task/tasklog', {
                taskId: this.taskId,
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
        this.taskId = parseInt(this.taskId || 0)
        if (this.taskId) error('参数错误,请返回')
        this.getDataSet()
        this.getDetail()
        this.getLog()
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
