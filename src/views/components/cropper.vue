<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">图片裁剪</div>
            <div class="blogContent" v-highlight>
                <Card style="width: 700px;margin:20px 0">
                    <div class="cropper-first" style="height: 400px;">
                        <cropper :src="exampleImageSrc" crop-button-text="确认提交" @on-crop="handleCroped">
                        </cropper>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
import Cropper from '@/components/cropper'
export default {
    name: 'cropper_page',
    components: { Cropper },
    data () {
        return {
            exampleImageSrc: ''
        }
    },
    methods: {
        handleCroped (blob) {
            const formData = new FormData()
            formData.append('croppedImg', blob)
            this.$api.data.uploadImg(formData).then(() => {
                this.$Message.success('Upload success~')
            })
        }
    }
}
</script>
