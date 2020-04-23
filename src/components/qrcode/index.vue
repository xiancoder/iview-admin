<template>
    <Button type="text" style="padding:0;vertical-align: middle;">
        <Tooltip content="editplus打开本页面锁屏" placement="bottom" theme="light" class="tooltipClass">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABLCAMAAADpuUGcAAAAn1BMVEX///8nJjb29vYqKTn09PSTkpomJTXv7u/v8PA0M0Lz8/OQj5aZmJ8vLjz29vXx8fF8eoPn6Onc29yAfodPTls2NkN4d4B2dn/g4eHS0dTAwcbc3d5XVmFRUV64ub1GRVFqaHPV1NZHRlTIyMrBwMfq6uvi4uTm5ua2t7tzcn3FxMczM0HNzdBKSVc+PUrJycygoKdnZnG5uL2npqxgX2pL4q7HAAABuUlEQVRYw+3Y207CQBSFYdkd2oJ2FypyUkFQWssZ9f2fTTo4pIXFNMCImPS/ArLyQQIpAzdFV5alyysLqpY97SbLlXRZa06ULe1mn7Nhac7GYc6DWSnOwhPE2ZOwDgpbKS5uw0kFcRWHQG4txTXx5KHg5NaP2iqXIcfudhH5eVzYelJNCXPT7SIO87jH55Kqizl62y4aQcEV3IU40T2Cc8a9nz4ixlzUU42dPI6ZVJx/CeD/fYEyxk1GPmjUTHEtPEFcyardg2qzFDfDEw9wxk4B5rn8I4846shzq23MJMb6SZarahNExPpJliNNzJRflhPaOEHFXpvnErIsd6dtwSQWe48uqwkXfco757+zcz/hBjNDh9mHhKPBUN75bc6KW6B4eBpnT+oOqN7UcLwOcvrrHeYm70nLuSFO/Qw4g8Plc8zEBji386oancjhU4DdNcbJLsDZRjnbG/ZlczOvbsWbOma4F5IVHOLCuKGaarigsdMBzm8HKocPc36wE+JAgIOZ4JjNcOx0kgKXyBnIm+dxg37Sqk0UfMmb+1zdBY2amg9KI9B8z1Zg1klcEv5/6UQOdxVc0d/3DcqoZBfCAJfAAAAAAElFTkSuQmCC" alt="扫码下载云袭OA" class="qrcode" />
            <div slot="content">
                <!--canvas id="canvas" style="width: 160px;height: 160px;"></canvas-->
                <img id="canvas123123" :src="src" alt="扫码下载云袭OA" style="width: 160px;height: 160px;" />
                <p class="textL">扫码下载云袭OA</p>
            </div>
        </Tooltip>
    </Button>
</template>
<script>
import QRCode from 'qrcode'

export default{
    data () {
        return {
            src: ''
        }
    },
    mounted () {
        // var canvas = this.$el.querySelector('#canvas123123')
        // QRCode.toCanvas(canvas, 'http://oa-wap.yunxi.cn/#/download')
        QRCode.toDataURL('http://oa-wap.yunxi.cn/#/download', { errorCorrectionLevel: 'H' }, (err, url) => {
            if (!err) this.src = url
        })
    }
}
</script>
<style scoped>
    .qrcode{ width:28px; height:28px; display:inline-block; vertical-align: middle; }
    .textL{ text-align: center; line-height: 20px; margin: 0 0 5px; padding: 0; }
    .tooltipClass{top:57px;cursor: pointer;}
</style>
