<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">网页打印 局部打印 批量打印的 js代码实现</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 打印功能基本可靠</p>
                <p><Icon type="md-close" style="color:red"/> 经研究使用了JS自身支持的Window对象的打印方法，此种方法兼容性比较好，在IE和火狐浏览器下使用都没有问题。有点怀疑这个话 </p>
                <p>还找到了一个专业打印的插件 <a href="https://www.webprinter.cn/demo"></a></p>
                <hr />
                <Button @click="print1()">简单调用 整页打印</Button>
                <script type="text/js">
                    window.print()
                </script>
                <hr />
                <Button @click="print2()">父子页面 局部打印</Button>
                <script type="text/js">
                    print2 () {
                        this.printUtil('<div>This is the first div.</div> <div>This is the second div.</div> <div>This is the third div.</div> <div>This is the fourth div.</div> <div>This is the fifth div.</div> <div>This is the sixth div.</div> <div>This is the last div.</div>')
                    },
                </script>
                <hr />
                <Button @click="print3()">局部打印 批量分页</Button>
                <script type="text/js">
                    print3 () {
                        this.printUtil('<div>This is the first div.</div> <div STYLE="page-break-before:always"></div> <div>This is the second div.</div> <div>This is the third div.</div> <div STYLE="page-break-after:always"></div> <div>This is the fourth div.</div> <div STYLE="page-break-before:always"></div> <div>This is the fifth div.</div> <div>This is the sixth div.</div> <div STYLE="page-break-after:always"></div> <div>This is the last div.</div>')
                    },
                    printUtil (content) {
                        const printStr = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body>' + content + '</body></html>'
                        const pwin = window.open('Print.htm', 'print', 'width=1000,height=600,left=150,top=150toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no, status=yes')
                        // 如果是本地测试需要先新建 如果是在域中使用则不需要
                        pwin.document.write(printStr)
                        pwin.document.close() // 这句很重要，没有就无法实现
                        pwin.print()
                    }
                </script>
                <div class="thistable">
                    <table>
                        <tr>
                            <td colspan=4> 款项编号：1029 </td>
                        </tr>
                        <tr>
                            <td colspan=4><b> 基本信息 </b></td>
                        </tr>
                        <tr>
                            <td colspan=2> 客户名称 </td>
                            <td colspan=2> 所属公司 </td>
                        </tr>
                        <tr>
                            <td colspan=2> XXXXXXXXXXXXXXX有限公司 </td>
                            <td colspan=2> 平复信息技术河北有限公司 </td>
                        </tr>
                        <tr>
                            <td colspan=4><b>财务信息</b></td>
                        </tr>
                        <tr>
                            <td class="c"> 付款人 </td>
                            <td class="c"> 付款账户 </td>
                            <td class="c"> 收款金额 </td>
                            <td class="c"> 到账日期 </td>
                        </tr>
                        <tr>
                            <td class="c"> 李小米 </td>
                            <td class="c"> 6238239937423482932 </td>
                            <td class="c"> 100000.00 </td>
                            <td class="c"> 2020-01-01 </td>
                        </tr>
                        <tr>
                            <td class="c" colspan=2> 收款人：平复信息技术河北有限公司 </td>
                            <td class="c" colspan=2> 收款账户：6222091829393238912 </td>
                        </tr>
                    </table>
                </div>
                <p>修改表格过程中遇到的问题记录 -- border</p>
                <p>1 table 标签上的border属性显示的样子并不好看</p>
                <p>2 使用css过程中只能对table和td加样式 tr无效</p>
                <p>3 border-collapse: collapse; 搞定问题2</p>
                <Button @click="print4()">排好格局 批量打印</Button>
                <script type="text/js">
                    print4 () {
                        const a1 = ''
                        const a2 = ''
                        const a3 = ''
                        const r = a1 +
                            '<div STYLE="page-break-before:always"></div>' +
                            a2 +
                            '<div STYLE="page-break-after:always"></div>' +
                            a3
                        this.printUtil(r)
                    },
                </script>
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
import { print } from '@U/dom'

export default {
    data () {
        return {}
    },
    methods: {
        print1 () {
            window.print()
        },
        print2 () {
            print('<div>This is the first div.</div> <div>This is the second div.</div> <div>This is the third div.</div> <div>This is the fourth div.</div> <div>This is the fifth div.</div> <div>This is the sixth div.</div> <div>This is the last div.</div>')
        },
        print3 () {
            print('<div>This is the first div.</div> <div STYLE="page-break-before:always"></div> <div>This is the second div.</div> <div>This is the third div.</div> <div STYLE="page-break-after:always"></div> <div>This is the fourth div.</div> <div STYLE="page-break-before:always"></div> <div>This is the fifth div.</div> <div>This is the sixth div.</div> <div STYLE="page-break-after:always"></div> <div>This is the last div.</div>')
        },
        print4 () {
            const a1 = ' <table> <tr> <td colspan=4> 款项编号：1029 </td> </tr> <tr> <td colspan=4><b> 基本信息 </b></td> </tr> <tr> <td colspan=2> 客户名称 </td> <td colspan=2> 所属公司 </td> </tr> <tr> <td colspan=2> XXXXXXXXXXXXXXX有限公司 </td> <td colspan=2> 平复信息技术河北有限公司 </td> </tr> <tr> <td colspan=4><b>财务信息</b></td> </tr> <tr> <td class="c"> 付款人 </td> <td class="c"> 付款账户 </td> <td class="c"> 收款金额 </td> <td class="c"> 到账日期 </td> </tr> <tr> <td class="c"> 李小米 </td> <td class="c"> 6238239937423482932 </td> <td class="c"> 100000.00 </td> <td class="c"> 2020-01-01 </td> </tr> <tr> <td class="c" colspan=2> 收款人：平复信息技术河北有限公司 </td> <td class="c" colspan=2> 收款账户：6222091829393238912 </td> </tr> </table>'
            const a2 = ' <table> <tr> <td colspan=4> 款项编号：1029 </td> </tr> <tr> <td colspan=4><b> 基本信息 </b></td> </tr> <tr> <td colspan=2> 客户名称 </td> <td colspan=2> 所属公司 </td> </tr> <tr> <td colspan=2> XXXXXXXXXXXXXXX有限公司 </td> <td colspan=2> 平复信息技术河北有限公司 </td> </tr> <tr> <td colspan=4><b>财务信息</b></td> </tr> <tr> <td class="c"> 付款人 </td> <td class="c"> 付款账户 </td> <td class="c"> 收款金额 </td> <td class="c"> 到账日期 </td> </tr> <tr> <td class="c"> 李中米 </td> <td class="c"> 6238239937423482932 </td> <td class="c"> 100000.00 </td> <td class="c"> 2020-01-01 </td> </tr> <tr> <td class="c" colspan=2> 收款人：平复信息技术河北有限公司 </td> <td class="c" colspan=2> 收款账户：6222091829393238912 </td> </tr> </table>'
            const a3 = ' <table> <tr> <td colspan=4> 款项编号：1029 </td> </tr> <tr> <td colspan=4><b> 基本信息 </b></td> </tr> <tr> <td colspan=2> 客户名称 </td> <td colspan=2> 所属公司 </td> </tr> <tr> <td colspan=2> XXXXXXXXXXXXXXX有限公司 </td> <td colspan=2> 平复信息技术河北有限公司 </td> </tr> <tr> <td colspan=4><b>财务信息</b></td> </tr> <tr> <td class="c"> 付款人 </td> <td class="c"> 付款账户 </td> <td class="c"> 收款金额 </td> <td class="c"> 到账日期 </td> </tr> <tr> <td class="c"> 李大米 </td> <td class="c"> 6238239937423482932 </td> <td class="c"> 100000.00 </td> <td class="c"> 2020-01-01 </td> </tr> <tr> <td class="c" colspan=2> 收款人：平复信息技术河北有限公司 </td> <td class="c" colspan=2> 收款账户：6222091829393238912 </td> </tr> </table>'
            const r = a1 + '<div STYLE="page-break-before:always"></div>' + a2 + '<div STYLE="page-break-after:always"></div>' + a3
            const s = '<style> table { width:100%; border: 1px solid #ccc; border-collapse: collapse; } table td { border: 1px solid #ccc; text-align:left; padding-left: 21px; line-height: 30px; } table td.c { padding-left: 0; text-align:center; } </style>'
            print(s + r)
        },
        printUtil (content) {
            const printStr = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body>' + content + '</body></html>'
            const pwin = window.open('Print.htm', 'print', 'width=1000,height=600,left=150,top=150toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no, status=yes') // 如果是本地测试需要先新建 如果是在域中使用则不需要
            pwin.document.write(printStr)
            pwin.document.close() // 这句很重要，没有就无法实现
            pwin.print()
        }
    },
    mounted () {
    }
}
</script>
<style scoped>
.thistable{
    width:600px;
}
.thistable table {
    width:100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
}
.thistable table td {
    border: 1px solid #ccc;
    text-align:left;
    padding-left: 21px;
    line-height: 30px;
}
.thistable table td.c {
    padding-left: 0;
    text-align:center;
}
</style>
