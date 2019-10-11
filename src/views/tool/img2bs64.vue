<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">图片转bs64</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Upload multiple type="drag" :before-upload="handleUpload" action="">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
                    </FormItem>
                    <FormItem label="转码" prop="text1" v-for="item in files" :key="item.filename">
                        <p><img :src="item.dataURL" style='max-width: 100px;'></p>
                        <p>图片名称：{{item.filename}} , 大小：{{item.filesize}} KB</p>
                        <p><textarea cols='100' rows='10' style='width: 80%;' v-model="item.dataURL"></textarea></p>
                    </FormItem>
                </Form>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import { error } from '@/tools'
export default {
    data () {
        return {
            frm: {
                file1: []
            },
            files: []
        }
    },
    methods: {
        handleUpload (file) {
            if (file.size > 5 * 1024 * 1024) {
                error('文件过大')
            } else {
                if (window.FileReader) {
                    const fr = new FileReader()
                    const filename = file.name; // 图片名称
                    fr.onloadend = (e) => {
                        const dataURL = e.target.result
                        this.frm.file1.push(file)
                        const filesize = Math.floor(file.size / 1024)
                        this.files.push({ dataURL, filename, filesize })
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        }
    },
    mounted () {
    }
}
</script>
