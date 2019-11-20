<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">字符串转md5加密</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="加密" prop="text1">
                        <p>{{ frm.text1 }}</p>
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
/* eslint-disable */
//////////////////////////////////////////////////////////////////////////////
// md5加密
// =====================
// liuyp 2019年1月22日19:49:31
//////////////////////////////////////////////////////////////////////////////
const string2md5 = function(a){
    function g(a,c){var b=a&2147483648,g=c&2147483648,d=a&1073741824,e=c&1073741824,f=(a&1073741823)+(c&1073741823);return d&e?f^2147483648^b^g:d|e?f&1073741824?f^3221225472^b^g:f^1073741824^b^g:f^b^g}
    function k(a,b,c,d,e,f,h){a=g(a,g(g(b&c|~b&d,e),h));return g(a<<f|a>>>32-f,b)}
    function h(a,b,c,d,e,f,h){a=g(a,g(g(b&d|c&~d,e),h));return g(a<<f|a>>>32-f,b)}
    function m(a,b,d,c,e,f,h){a=g(a,g(g(b^d^c,e),h));return g(a<<f|a>>>32-f,b)}
    function l(a,b,d,c,e,f,h){a=g(a,g(g(d^(b|~c),e),h));return g(a<<f|a>>>32-f,b)}
    function n(a){var b="",d="",c;for(c=0;3>=c;c++)d=a>>>8*c&255,d="0"+d.toString(16),b+=d.substr(d.length-2,2);return b}
    var f=[],p,q,r,t,c,d,e,b;
    a=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",d=0;d<a.length;d++){var c=a.charCodeAt(d);128>c?b+=String.fromCharCode(c):(127<c&&2048>c?b+=String.fromCharCode(c>>6|192):(b+=String.fromCharCode(c>>12|224),b+=String.fromCharCode(c>>6&63|128)),b+=String.fromCharCode(c&63|128))}return b}(a);
    f=function(a){var b,c=a.length;b=c+8;for(var d=16*((b-b%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)b=(g-g%4)/4,f=g%4*8,e[b]|=a.charCodeAt(g)<<f,g++;b=(g-g%4)/4;e[b]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(a);
    c=1732584193;d=4023233417;e=2562383102;b=271733878;
    for(a=0;a<f.length;a+=16)p=c,q=d,r=e,t=b,c=k(c,d,e,b,f[a+0],7,3614090360),b=k(b,c,d,e,f[a+1],12,3905402710),e=k(e,b,c,d,f[a+2],17,606105819),d=k(d,e,b,c,f[a+3],22,3250441966),c=k(c,d,e,b,f[a+4],7,4118548399),b=k(b,c,d,e,f[a+5],12,1200080426),e=k(e,b,c,d,f[a+6],17,2821735955),d=k(d,e,b,c,f[a+7],22,4249261313),c=k(c,d,e,b,f[a+8],7,1770035416),b=k(b,c,d,e,f[a+9],12,2336552879),e=k(e,b,c,d,f[a+10],17,4294925233),d=k(d,e,b,c,f[a+11],22,2304563134),c=k(c,d,e,b,f[a+12],7,1804603682),b=k(b,c,d,e,f[a+13],12,4254626195),e=k(e,b,c,d,f[a+14],17,2792965006),d=k(d,e,b,c,f[a+15],22,1236535329),c=h(c,d,e,b,f[a+1],5,4129170786),b=h(b,c,d,e,f[a+6],9,3225465664),e=h(e,b,c,d,f[a+11],14,643717713),d=h(d,e,b,c,f[a+0],20,3921069994),c=h(c,d,e,b,f[a+5],5,3593408605),b=h(b,c,d,e,f[a+10],9,38016083),e=h(e,b,c,d,f[a+15],14,3634488961),d=h(d,e,b,c,f[a+4],20,3889429448),c=h(c,d,e,b,f[a+9],5,568446438),b=h(b,c,d,e,f[a+14],9,3275163606),e=h(e,b,c,d,f[a+3],14,4107603335),d=h(d,e,b,c,f[a+8],20,1163531501),c=h(c,d,e,b,f[a+13],5,2850285829),b=h(b,c,d,e,f[a+2],9,4243563512),e=h(e,b,c,d,f[a+7],14,1735328473),d=h(d,e,b,c,f[a+12],20,2368359562),c=m(c,d,e,b,f[a+5],4,4294588738),b=m(b,c,d,e,f[a+8],11,2272392833),e=m(e,b,c,d,f[a+11],16,1839030562),d=m(d,e,b,c,f[a+14],23,4259657740),c=m(c,d,e,b,f[a+1],4,2763975236),b=m(b,c,d,e,f[a+4],11,1272893353),e=m(e,b,c,d,f[a+7],16,4139469664),d=m(d,e,b,c,f[a+10],23,3200236656),c=m(c,d,e,b,f[a+13],4,681279174),b=m(b,c,d,e,f[a+0],11,3936430074),e=m(e,b,c,d,f[a+3],16,3572445317),d=m(d,e,b,c,f[a+6],23,76029189),c=m(c,d,e,b,f[a+9],4,3654602809),b=m(b,c,d,e,f[a+12],11,3873151461),e=m(e,b,c,d,f[a+15],16,530742520),d=m(d,e,b,c,f[a+2],23,3299628645),c=l(c,d,e,b,f[a+0],6,4096336452),b=l(b,c,d,e,f[a+7],10,1126891415),e=l(e,b,c,d,f[a+14],15,2878612391),d=l(d,e,b,c,f[a+5],21,4237533241),c=l(c,d,e,b,f[a+12],6,1700485571),b=l(b,c,d,e,f[a+3],10,2399980690),e=l(e,b,c,d,f[a+10],15,4293915773),d=l(d,e,b,c,f[a+1],21,2240044497),c=l(c,d,e,b,f[a+8],6,1873313359),b=l(b,c,d,e,f[a+15],10,4264355552),e=l(e,b,c,d,f[a+6],15,2734768916),d=l(d,e,b,c,f[a+13],21,1309151649),c=l(c,d,e,b,f[a+4],6,4149444226),b=l(b,c,d,e,f[a+11],10,3174756917),e=l(e,b,c,d,f[a+2],15,718787259),d=l(d,e,b,c,f[a+9],21,3951481745),c=g(c,p),d=g(d,q),e=g(e,r),b=g(b,t);
    return(n(c)+n(d)+n(e)+n(b)).toLowerCase()
}
/* eslint-enable */
export default {
    data () {
        return {
            frm: {
                input1: 'admin'
            }
        }
    },
    watch: {
        'frm.input1': {
            handler (val) {
                this.frm.text1 = string2md5(val)
            },
            immediate: true
        }

    },
    mounted () {
    }
}
</script>
