<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">解决iOS等设备照片旋转90度的bug</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 基本有效 可采用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1 FileReader接口提供了一个异步API，使用该API可以在浏览器主线程中异步访问文件系统，读取文件中的数据。</p>
                <p style="color:red">2 三星note5的手机中，需求一会出现照片预览逆时针旋转90度的bug</p>
                <p style="color:red">3 在iOS上大几率出现上传图片 实际歪斜 在ios上预览却正常的bug</p>
                <p style="color:red">4 在小米上小几率出现3现象</p>
                <p style="color:red">5 旋转方向不确定 逆时针旋转90度 或顺时针旋转90度</p>
                <p>6 Exif.js 提供了 JavaScript 读取图像的原始数据的功能扩展，例如：拍照方向、相机设备型号、拍摄时间、ISO 感光度、GPS 地理位置等数据。EXIF 数据主要来自拍摄的照片，多用于移动端开发，PC 端也会用到，此插件兼容主流浏览器，IE10 以下不支持。</p>
                <p>7 小米4S和PC都是undefined，表示图片没有拍摄方向或者根本没记录，华为荣耀4A是1，表示的是正确的方向，以上都没问题。但iphone 6S为6！所以之所以出现了图片的旋转，是因为它本身的Orientation就不正常！！</p>
                <p>8 <b>各种设备浏览器img标签均可能被浏览器自动处理</b> background不会</p>
                <p>9 有些交流工具会自动的对图片进行处理 比如压缩 导致失去角度信息</p>
                <p>https://github.com/exif-js/exif-js</p>
                <h3>解决这个bug的思路是：获取到照片拍摄的方向，对ios照片进行角度旋转修正。</h3>
                <p>方案1-1 提交时候根据Exif.js提供的Orientation</p>
                <p>方案1-2 提交时候使用canvas实时旋转 导出图片bs64上传</p>
                <p>方案2-1 提交正常</p>
                <p>方案2-2 读取时候根据Exif.js提供的Orientation 实时css旋转</p>
                <p></p>
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
