<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">彩色弹框</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> class-name 设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <Button type="dashed" @click="mask=true">alertMsg('大量数据 这个比较好看')</Button>
                <Modal v-model="mask" :title="'嘎嘎嘎'" :closable="false" width="600" class-name="colorful">
                    <div class="mask_table">
                        金强 , 陈秀兰 , 余秀兰 , 董强 , 孟杰 , 康刚 , 胡涛 , 熊娜 , 梁静 , 史静 , 白刚 , 段勇 , 戴伟 , 雷洋 , 程明 , 杜秀兰 , 吴静 , 姚军 , 陆娟 , 曹静 , 曾娟 , 黎杰 , 吕平 , 万艳 , 傅勇 , 刘桂英 , 许明 , 高丽 , 黄娟 , 钱艳 , 江涛 , 武艳 , 冯伟 , 唐艳 , 徐霞 , 陆娟 , 沈平 , 顾强 , 余涛 , 萧娜 , 锺勇 , 阎霞 , 邹刚 , 夏强 , 段桂英 , 万芳 , 丁杰 , 孔丽 , 傅秀英 , 陈磊 , 史静 , 顾涛 , 范明 , 戴秀英 , 万强 , 彭洋 , 唐霞 , 金娜 , 杨娜 , 宋丽 , 戴涛 , 顾洋 , 李秀英 , 锺秀英 , 董艳 , 傅刚 , 高芳 , 孔洋 , 罗娜 , 韩超 , 曾秀兰 , 姚敏 , 郭秀英 , 曹丽 , 王秀英 , 赖霞 , 韩丽 , 韩磊 , 黎丽 , 冯平 , 孙平 , 郝强 , 朱伟 , 贺超 , 常杰 , 龙涛 , 邵明 , 黎娜 , 许敏 , 文伟 , 蔡伟 , 林超 , 张丽 , 林涛 , 顾勇 , 马秀英 , 蔡丽 , 侯娟 , 卢敏 , 沈娜
                    </div>
                    <div slot="footer">
                        <Button type="default" @click="mask=false">确定</Button>
                    </div>
                </Modal>
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
            mask: true
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    .colorful .ivu-modal-content { background: linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%)); color: #ddd; }
    .colorful .ivu-modal-header-inner { color: #ddd; }
</style>
