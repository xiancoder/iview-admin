<template>
    <div>
        <Form ref="formItem" :model="frm" :rules="frmRule" :label-width="150">
            <FormItem label="">
                <h3>测试用表单</h3>
            </FormItem>
            <FormItem label="下线日期" prop="date">
                <DatePicker v-model="frm.date" style="width:350px"
                    :clearable="false" :editable="false" format="yyyy-MM-dd" type="date"
                    placement="bottom-start" placeholder="请选择日期" >
                </DatePicker>
            </FormItem>
            <FormItem label="下线说明" prop="explain">
                <Input class="font12" type="textarea" :autosize="{minRows: 4}" style="width:350px"
                    v-model="frm.explain" placeholder="请输入下线说明"/>
            </FormItem>
            <FormItem label="下线通知" prop="correlation">
                <Select v-model="frm.correlation" multiple filterable style="width:350px"
                    placeholder="请搜索 / 选择通知人">
                    <Option v-for="raw in dataSet.userData" :value="raw.userId"
                        :key="raw.userId" :label="raw.userName" >
                    </Option>
                </Select>
            </FormItem>
            <FormItem class="ivu-form-submit">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="ok" :loading="loading">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { error, success } from '@/tools' // 自定义常用工具
import { dateFormat } from '@/utils/date'
export default {
    data () {
        return {
            loading: false,
            dataSet: {
                userData: []
            },
            frm: {
                date: '',
                explain: '',
                correlation: []
            },
            frmRule: {
                date: [
                    { required: true, message: '请选择下线时间' }
                ],
                explain: [
                    { max: 200, message: '最多输入200个字符' }
                ]
            }
        }
    },
    props: {
        startDate: { type: Date, default: () => {return new Date()} }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.user.pullUserList().then(list => { this.dataSet.userData = list })
        },
        ok () {
            this.$refs.formItem.validate(valid => {
                if (valid) {
                    let date1 = this.frm.date.getTime();
                    let date2 = this.startDate.replace(/-/g, '/');
                    date2 = new Date(date2).getTime();
                    if (date1 < date2) {
                        error('下线日期不得小于投放时间')
                        return;
                    }
                    this.loading2 = true;
                    this.$post('api/task/found', {
                        'id': this.endId,
                        'endTime': dateFormat(this.frm.date),
                        'endDesc': this.frm.explain,
                        'users': this.frm.correlation
                    }).then(response => { // 请注意这个返回值是整个结果对象
                        const res = response.data // 0隐藏 null表红点 数字代表数量
                        if (res && res.data && res.data.res) {
                            success()
                            this.endShow = false;
                            this.$emit('on-submit', 1)
                        } else {
                            error(res.data.msg)
                        }
                        this.loading = false;
                    });
                }
            });
        },
        cancel () {
            this.$emit('on-submit', 0)
        }
    },
    mounted () {
        this.getDataSet()
    }
}
</script>
