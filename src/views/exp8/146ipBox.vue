<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Ip 盒子 控件 (网摘)</div>
            <div class="blogContent" v-highlight>
                <Form ref="formAddData"  label-position="right" :label-width="120">
                    <FormItem label="用户编号：" prop="userId">
                        <Input placeholder="自动默认17位用户编号" />
                    </FormItem>
                    <FormItem label="用户编号：" prop="userId">
                        <Input placeholder="自动默认17位用户编号" />
                    </FormItem>
                    <FormItem label="IP地址：" prop="userId">
                        <IP @getIP="ipchange" style="width:300px"></IP>
                    </FormItem>
                    <FormItem label="提交">
                        <Button @click="submit" >提交</Button>
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
import IPComponent from '@C/IP';
export default {
    components: {'IP': IPComponent},
    data () {
        return {
            erro_ip: true,
            ip: '',
            isWX: navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
        };
    },
    methods: {
        submit () {
        },
        ipchange (ip) {
            this.ip = ip;
        }
    }
};
</script>
