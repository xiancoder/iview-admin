<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">大批量内容的输入+穿梭框 的尝试</div>
            <Divider orientation="right">尝试一下这种控件组合的易用性和可接受性</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <div class="formHeader">
                    <h1>表单名称</h1>
                    <Divider/>
                </div>
                <Form ref="formValidateId" :model="frm" :label-width="150">
                    <FormItem label="(辅助)搜索框" prop="textarea1">
                        <Input v-model="frm.textarea1" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                            placeholder="请输入XXXX" style="width: 450px"/>
                        &nbsp;
                        <Button>搜索</Button>
                    </FormItem>
                    <FormItem label="" prop="textarea1">
                        <div>
                            您搜索了如下信息: (精准匹配/匹配到<font color=#22fd4d>7</font>个/未匹配到<font color=red>12</font>个)
                            &nbsp;
                            <Icon :type="showCli?'md-arrow-dropdown':'md-arrow-dropup'" @click="showCli=!showCli" />
                        </div>
                        <div style="max-width: 700px; background: rgb(16, 16, 16); padding: 4px 15px; color: rgb(153, 153, 153); overflow-y: scroll; height: 102px;" v-show="showCli">
                            结果记录: <font color=#22fd4d;>wk2846058(吴锴)</font>, <font color=#22fd4d;>wandy(杨万东)</font>, <font color=#22fd4d;>renjiming5(任德斌)</font>, <font color=#22fd4d;>xinqihang(李晓龙)</font>, <font color=#22fd4d;>dragonsull(贾宾)</font>, <font color=#22fd4d;>peil1226(裴龙)</font>, <font color=#22fd4d;>ecface(闫志强)</font>, <font color=red>vihp20(谢宗彬)</font>, <font color=red>icafe8(许巧生)</font>, <font color=red>q8589582(于洪建)</font>, <font color=red>jdwljdwl(张志云)</font>, <font color=red>pingshan(平山)</font>, <font color=red>zhengding(正定)</font>, <font color=red>smkui(任振奎)</font>, <font color=red>foaju(柯广才)</font>, <font color=red>sjzsykj(杨英存)</font>, <font color=red>jbs1985(宋双启)</font>, <font color=red>sd5547903(何际成)</font>, <font color=red>xzzc2008()</font>, <font color=red>szmywl(李永昌)</font>
                        </div>
                    </FormItem>
                    <FormItem label="穿梭框" prop="transfer">
                        <Transfer :data="data3" :target-keys="targetKeys3" :list-style="{width:'250px',height:'300px'}"
                            :render-format="render3" :operations="['取消','配置']"
                            @on-change="handleChange3">
                            <div :style="{float: 'right', margin: '5px'}">
                                <Button size="small" @click="reloadMockData">清空</Button>
                            </div>
                        </Transfer>
                    </FormItem>
                    <FormItem style="margin-top: 50px">
                        <Button type="primary">发布</Button>
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
        return {
            frm: {
                textarea1: '',
                transfer: []
            },
            showCli: false,
            data3: this.getMockData(),
            targetKeys3: this.getTargetKeys()
        }
    },
    methods: {
        getMockData () {
            let mockData = []
            for (let i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: 'Content ' + i,
                    description: 'The desc of content  ' + i,
                    disabled: Math.random() * 3 < 1
                })
            }
            return mockData
        },
        getTargetKeys () {
            return this.getMockData()
                .filter(() => Math.random() * 2 > 1)
                .map(item => item.key)
        },
        handleChange3 (newTargetKeys) {
            this.targetKeys3 = newTargetKeys
        },
        render3 (item) {
            return item.label + ' - ' + item.description
        },
        reloadMockData () {
            this.targetKeys3 = []
        }
    }
}
</script>
