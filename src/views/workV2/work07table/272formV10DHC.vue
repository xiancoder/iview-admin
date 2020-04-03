<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">表单v10的DHC</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p> <Button type="default" @click="goto('workV2_work07table_272formV10DHC$add1')">表单v10的DHC添加普通表单 / 272formV10DHC$add1</Button> </p>

                <p> <Button type="default" @click="commmm">点击确认</Button> </p>

                <p> <Button type="default" @click="model.importRealCost=!model.importRealCost">弹框表单 / 上传预估消耗 / 272importPreCostModal</Button> </p>
                <p> <Button type="default" @click="model.importRealPre=!model.importRealPre">弹框表单 / 上传封账数据 / 272importRealCostModal</Button> </p>
                <p> <Button type="default" @click="model.closeBatch=!model.closeBatch">弹框表单/ 批量封账 / 272closeBatchModal</Button> </p>
                <p> <Button type="default" @click="model.extendsAdd1=!model.extendsAdd1">弹框继承</Button> </p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <Modal v-model="model.extendsAdd1" closable width="720" :mask-closable="false" footer-hide>
            <extends-add1 :flag="model.extendsAdd1" :from="{}" @on-submit="extendsAdd1Submit"/>
        </Modal>
        <Modal v-model="model.importRealPre" closable width="720" :mask-closable="false" footer-hide>
            <import-real-pre :flag="model.importRealPre" :from="{}" @on-submit="importRealPreSubmit"/>
        </Modal>
        <Modal v-model="model.importRealCost" closable width="720" :mask-closable="false" footer-hide>
            <import-real-cost :flag="model.importRealCost" :from="{}" @on-submit="importRealCostSubmit"/>
        </Modal>
        <Modal v-model="model.closeBatch" closable width="720" :mask-closable="false" footer-hide>
            <close-batch :flag="model.closeBatch" :from="{}" @on-submit="closeBatchSubmit"/>
        </Modal>
    </div>
</template>
<script>
import { goto, confirm } from '@/tools' // 自定义常用工具
import ImportRealPre from './272modalImportPreCost' // 上传预估消耗
import ImportRealCost from './272modalImportRealCost' // 上传封账数据
import CloseBatch from './272modalCloseBatch' // 批量封账
import ExtendsAdd1 from './272modalExtendsAdd1' // 继承

export default {
    mixins: [{methods: {goto}}],
    components: { ImportRealCost, ImportRealPre, CloseBatch, ExtendsAdd1 },
    data () {
        return {
            model: {
                extendsAdd1: false,
                importRealPre: false,
                importRealCost: false,
                closeBatch: false
            }
        }
    },
    methods: {
        commmm () {
            confirm('封账后数据不可修改, 确认将所选数据进行封账吗?', '封账确认').then(() => {
                alert(123)
            })
        },
        extendsAdd1Submit (flag) {
            this.model.extendsAdd1 = false
        },
        closeBatchSubmit (flag) {
            this.model.closeBatch = false
        },
        importRealCostSubmit (flag) {
            this.model.importRealCost = false
        },
        importRealPreSubmit (flag) {
            this.model.importRealPre = false
        }
    },
    mounted () {
    }
}
</script>
