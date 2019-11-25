<style>
    .back .ivu-tooltip-rel{
        height:60px;
    }
</style>
<style scoped>
    .uploadDiv{
        width:80px;
        height:80px;
        display: inline-block;
        cursor:pointer;
        border: 1px dashed #999;
        border-radius: 4px;
        position:relative;
    }
    .photoIcon{
        width:80px;
        height:80px;
        position:absolute;
        left: 50%;
        top: 50%;
        margin: -25px 0 0 -24px;
    }
    .back{
        display:inline-block;
        position:relative;
        margin:0 10px 10px 0;
    }
    .over{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background: rgba(0,0,0,.6);
        cursor:pointer;
        display:none;
    }
    .back:hover .over{
        display:block;
    }
    .iconDiv{
        position:absolute;
        top:50%;
        left:50%;
        margin: -10px 0 0 -22px;
    }
    .eyeIcon{
        margin-right: 6px;
    }
    .hei80{
        height:80px;
    }
</style>
<template>
    <div class="clear">
        <div class="back fl" v-for="(row,index) in imgDatas" :key="row.url">
            <img class="hei80" ref="photo" :src='row.url'/>
            <div class="over">
                <div class="iconDiv clear">
                    <Icon class="eyeIcon fl" size='20' color="#fff" type="ios-eye-outline" @click="handleView(index)"></Icon>
                    <Icon class="delIcon fr" size='20' color="#fff" type="ios-trash-outline" @click.native="delImage(index)"></Icon>
                </div>
            </div>
        </div>
        <Upload v-show="upShow" class="uploadDiv fl" type="select" ref="upload" :format="['jpg','jpeg','png']" :action="defaultAction"
            :data="imgType" :on-format-error="errorFormat" :on-success="addImage">
            <Icon class="photoIcon" type="ios-camera" size="50"></Icon>
        </Upload>
        <Modal :footer-hide="true" :closable="false" v-model="bigImage" width="60">
            <img :src="imgBig" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
export default {
    // 上传图片组件-dsf-2019/03/05
    name: 'up-image',
    props: {
        defaultImgs: {
            type: Array,
            default: function () {
                return [];
            }
        },
        defaultAction: {
            type: String,
            default: ''
        },
        more: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        upShow: function () {
            let show = true;
            if (!this.more && this.imgDatas.length > 0) {
                show = false;
            }
            return show;
        }
    },
    watch: {
        defaultImgs: {
            immediate: true,
            handler (val) {
                this.imgDatas = this.defaultImgs;
            }
        }
    },
    data () {
        return {
            imgType: {
                type: 0
            },
            imgDatas: [],
            bigImage: false,
            imgBig: ''
        };
    },
    methods: {
        init () {
        },
        handleView (index) {
            this.bigImage = true;
            this.imgBig = this.imgDatas[index].url;
        },
        addImage (response, file, fileList) {
            this.imgDatas.push({
                name: '',
                url: response.data.fileurl
            });
            // this.$emit('add-img',this.imgDatas)
            this.$emit('input', this.imgDatas);
        },
        delImage (index) {
            this.imgDatas.splice(index, 1);
            // this.$emit('del-img',this.imgDatas)
            this.$emit('input', this.imgDatas);
        },
        errorFormat () {
            this.$Message.info({
                content: '仅支持jpg，jpeg，png格式'
            });
        }
    },
    mounted () {
    }
};
</script>
