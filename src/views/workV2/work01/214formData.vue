<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">FormData使用方法详解</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 非常有效 </p>
                <p><Icon type="md-close" style="color:red"/> 但注意不要传递bs64格式文件数组 不是不行 但是超级大 不方便 </p>
                <p>FormData的主要用途有两个：</p>
                <ul>
                    <li>将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。</li>
                    <li>异步上传文件</li>
                </ul>
                <hr />
                <p>注: 通过 FormData.append()方法赋给字段的值若是数字会被自动转换为字符(字段的值可以是一个Blob对象,一个File对象,或者一个字符串,剩下其他类型的值都会被自动转换成字符串).</p>
                <Upload :before-upload="handleUpload" multiple action="">
                     <Button icon="ios-cloud-upload-outline">添加附件</Button>
                </Upload>
                <div class="xian-review-list" v-for="(item, index) in reviewList" :key="index">
                    <img :src="item">
                    <div class="xian-review-list-cover">
                        <Icon type="ios-trash-outline" @click.native="reviewList.splice(index, 1),frm.file1.splice(index, 1)"></Icon>
                    </div>
                </div>
                <hr />
                <Button @click="submit()">请上传多个文件 / 尝试发送请求</Button>
                <ul>
                    <li>id: 123</li>
                    <li>name: hahaha</li>
                    <li>file1: (binary)</li>
                    <li>file2: (binary)</li>
                    <li>file3: (binary)</li>
                </ul>
                <script type="text/js">
                    formData ({id, name, files}) { // 测试formdata表单格式
                        return new Promise((resolve, reject) => {
                            let fd = new FormData()
                            fd.append('id', id || null)
                            fd.append('name', name || '')

                            if(files && files[0]) fd.append('file1', files[0])
                            if(files && files[1]) fd.append('file2', files[1])
                            if(files && files[2]) fd.append('file3', files[2])

                            axios.request({...}
                        })
                    })
                    // ---------------------
                    fileList: [], // 文件列表
                    reviewList: [] // 文件bs64列表
                    this.$api.unit.formData({
                        id: '123',
                        name: 'hahaha',
                        files: this.fileList
                    }).then(res => {
                        console.log(res)
                    })
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">所有API尝试</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    //通过FormData构造函数创建一个空对象
                    var formdata=new FormData();
                    //可以通过append()方法来追加数据
                    formdata.append("name","laotie");
                    //通过get方法对值进行读取
                    console.log(formdata.get("name"));//laotie
                    //通过set方法对值进行设置
                    formdata.set("name","laoliu");
                    console.log(formdata.get("name"));//laoliu
                    // 获取key为age的第一个值
                    formdata.get("age");
                     // 获取key为age的所有值，返回值为数组类型
                    formdata.getAll("age");
                    //通过FormData构造函数创建一个空对象
                    var formdata=new FormData();
                    //通过append()方法在末尾追加key为name值为laoliu的数据
                    formdata.append("name","laoliu");
                    //通过append()方法在末尾追加key为name值为laoli的数据
                    formdata.append("name","laoli");
                    //通过append()方法在末尾追加key为name值为laotie的数据
                    formdata.append("name","laotie");
                    //通过get方法读取key为name的第一个值
                    console.log(formdata.get("name"));//laoliu
                    //通过getAll方法读取key为name的所有值
                    console.log(formdata.getAll("name"));//["laoliu", "laoli", "laotie"]
                    //通过FormData构造函数创建一个空对象
                    var formdata=new FormData();
                    //通过append()方法在末尾追加key为name值为laoliu的数据
                    formdata.append("name","laoliu");
                    //判断是否包含key为name的数据
                    console.log(formdata.has("name"));//true
                    //判断是否包含key为age的数据
                    console.log(formdata.has("age"));//false
                    //通过FormData构造函数创建一个空对象
                    var formdata=new FormData();
                    //通过append()方法在末尾追加key为name值为laoliu的数据
                    formdata.append("name","laoliu");
                    console.log(formdata.get("name"));//laoliu
                    //删除key为name的值
                    formdata.delete("name");
                    console.log(formdata.get("name"));//null
                </script>
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
            fileList: [],
            reviewList: []
        }
    },
    methods: {
        handleUpload (file) {
            if (file.size > 200 * 1024) {
                this.$Message.info({ content: '文件过大' })
            } else {
                this.fileList.push(file)
                if (window.FileReader) {
                    const fr = new FileReader()
                    fr.onloadend = (e) => {
                        this.reviewList.push(e.target.result)
                    }
                    fr.readAsDataURL(file)
                }
            }
            return false
        },
        submit () {
            this.$api.unit.formData({
                id: '123',
                name: 'hahaha',
                files: this.fileList
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
