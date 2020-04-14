<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">网页打印/局部打印/批量打印 的js代码实现 (优化版)</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 2020年3月13日10:22:46 参考小伙伴代码 优化一些</p>
                <p><Icon type="md-checkmark" style="color:green"/> 打印功能 <del>基本</del> 可靠</p>
                <p><Icon type="md-checkmark" style="color:red"/> 经研究使用了JS自身支持的Window对象的打印方法，此种方法兼容性比较好，在IE和火狐浏览器下使用都没有问题。<del>有点怀疑这个话</del> </p>
                <p>一个专业打印的插件 <a href="https://www.webprinter.cn/demo"></a> <span class="text-success">现在看不用了</span></p>
                <hr />
                <Button @click="print1()">简单调用 整页打印</Button>
                <script type="text/js">
                    print1 () {
                        window.print()
                    },
                </script>
                <hr />
                <Button @click="print2()">简单页面 局部打印</Button>
                <div style="border:1px solid red;" ref="print2">
                    <div>This is the first div.</div>
                    <div>This is the second div.</div>
                    <div>This is the third div.</div>
                    <div>This is the fourth div.</div>
                    <div>This is the fifth div.</div>
                    <div>This is the sixth div.</div>
                    <div>This is the last div.</div>
                </div>
                <script type="text/js">
                    print2 () {
                        const content = this.$ref.print2.innerHTML
                        print(content)
                    },
                </script>
                <hr />
                <Button @click="print3()">局部打印 批量分页</Button>
                <script type="text/js">
                    print3 () {
                        const content = `
                            <div>This is the first div.</div>
                            <div STYLE="page-break-before:always"></div>
                            <div>This is the second div.</div>
                            <div>This is the third div.</div>
                            <div STYLE="page-break-after:always"></div>
                            <div>This is the fourth div.</div>
                            <div STYLE="page-break-before:always"></div>
                            <div>This is the fifth div.</div>
                            <div>This is the sixth div.</div>
                            <div STYLE="page-break-after:always"></div>
                            <div>This is the last div.</div>
                        `
                        print(content)
                    },
                </script>
                <Button @click="print4()">排好格局 批量打印</Button>
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
                <script type="text/js">
                    print4 () {
                        let c = []
                        const arr = [
                            {id: '1021', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来1有限公司', fr: '李1米', zh: '6238239937423482932', jq: '100000.00', dzrq: '2020-01-01', dzgs: '春光乍谢1有效公司', dzzh: '6222091829393238912'},
                            {id: '1022', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来2有限公司', fr: '李2米', zh: '6238239937423482932', jq: '200000.00', dzrq: '2020-02-02', dzgs: '春光乍谢2有效公司', dzzh: '6222091829393238912'},
                            {id: '1023', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来3有限公司', fr: '李3米', zh: '6238239937423482932', jq: '300000.00', dzrq: '2020-03-03', dzgs: '春光乍谢3有效公司', dzzh: '6222091829393238912'},
                            {id: '1024', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来4有限公司', fr: '李4米', zh: '6238239937423482932', jq: '400000.00', dzrq: '2020-04-04', dzgs: '春光乍谢4有效公司', dzzh: '6222091829393238912'}
                        ]
                        arr.forEach((one, index) => {
                            c.push(`
                                <table>
                                    <tr> <td colspan=4> 款项编号：${one.id || ''} </td> </tr> <tr> <td colspan=4><b> 基本信息 </b></td> </tr> <tr> <td colspan=2> 客户名称 </td> <td colspan=2> 所属公司 </td> </tr>
                                    <tr> <td colspan=2> ${one.gs || ''} </td> <td colspan=2> ${one.ss || ''} </td> </tr>
                                    <tr> <td colspan=4><b>财务信息</b></td> </tr> <tr> <td class="c"> 付款人 </td> <td class="c"> 付款账户 </td> <td class="c"> 收款金额 </td> <td class="c"> 到账日期 </td> </tr>
                                    <tr> <td class="c"> ${one.fr || ''} </td> <td class="c"> ${one.zh || ''} </td> <td class="c"> ${one.jq || ''} </td> <td class="c"> ${one.dzrq || ''} </td> </tr>
                                    <tr> <td class="c" colspan=2> 收款人：${one.dzgs || ''} </td> <td class="c" colspan=2> 收款账户：${one.dzzh || ''} </td> </tr>
                                </table>
                            `)
                        })
                        const s = `
                            table { width:100%; border: 1px solid #ccc; border-collapse: collapse; }
                            table td { border: 1px solid #ccc; text-align:left; padding-left: 21px; line-height: 30px; }
                            table td.c { padding-left: 0; text-align:center; }
                        `
                        print(r, s)
                    }
                    export function print (content, style) {
                        let html = ''
                        if (Object.prototype.toString.call(content).toLowerCase() === '[object array]') {
                            content.forEach((one, index) => {
                                if (index%2 !== 0) {html += '<div STYLE="page-break-before:always"></div>'}
                                html += one
                                if (index%2 !== 0) {html += '<div STYLE="page-break-after:always"></div>'}
                            })
                        } else if (typeof content === 'string') {
                            html = content
                        } else {
                            return;
                        }
                        const printStr = `
                            <html>
                                <head>
                                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                                    <style type="text/css" media="print">${style || ''}</style>
                                </head>
                                <body>${content || ''}</body>
                            </html>
                        `
                        // const style = 'width=1000,height=600,left=150,top=150toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=yes'
                        // const pwin = window.open('Print.htm', 'print', style) // 如果是本地测试需要先新建 如果是在域中使用则不需要
                        // pwin.document.write(printStr)
                        // pwin.document.close() // 这句很重要，没有就无法实现
                        // pwin.print()
                        // 不弹框测试
                        const ifr = document.createElement('iframe')
                        ifr.style.display = 'none'
                        document.body.appendChild(ifr)
                        const win = ifr.contentWindow
                        win.document.write(printStr)
                        win.document.close()
                        win.print();
                        setTimeout(()=> {
                            document.body.removeChild(ifr)
                        }, 1e3);
                    }
                </script>
                <p>参考小伙伴代码风格 修改代码</p>
                <script type="text/js">
                    export default {
                        methods: {
                            // 打印小票
                            printReceipts(str) {
                                if (!this.setForm.print) return;
                                let ifr = document.createElement('iframe');
                                document.body.appendChild(ifr);
                                ifr.style.display = 'none';
                                let win = ifr.contentWindow;
                                let doc = win.document;
                                let source = str.source === 2 ? '自主下单' : '线下点单';
                                let payType = '';
                                switch(str.pay_type) {
                                    case 1: payType = '微信';break;
                                    case 2: payType = '支付宝';break;
                                    case 3: payType = '现金';break;
                                    case 4: payType = '其他';break;
                                }
                                let goodstr = '';
                                let money = str.pay_type === 4 ? str.balance : str.pay_money;
                                let ctnum = 0;
                                str.productsList.forEach(it => {
                                    goodstr += `<tr> <td>${it.name}</td> <td>${it.quantity}</td> <td>&yen;${it.salePrice}</td> <td>&yen;${it.quantity*it.salePrice}</td> </tr>';
                                    ctnum += it.quantity;
                                });
                                let tel = '';
                                if (str.tel && str.tel !== '') {
                                    tel = str.tel.substr(0, 3) + '****' + str.tel.substr(-4, 4);
                                }
                                let manjian = '';
                                if (str.cut_money > 0) {
                                    manjian = ` <tr> <td>满减优惠</td> <td></td> <td></td> <td>-&yen;${str.cut_money}</td> </tr> `;
                                }
                                let html = `
                                    <div class='watername'>${str.name}</div>
                                    <div class='flex-cont infos'>
                                        <div class='flex-item'>
                                            <div>消费类型：${source}</div>
                                            <div>订单日期：${str.createdDate}</div>
                                        </div>
                                        <div class='code-cont'>
                                            <div class='pickcode'>${str.code}</div>
                                            <div>取货码</div>
                                        </div>
                                    </div>
                                    <div class='shoplist'>
                                        <table style="width:100%" class='mytable'>
                                            <tr>
                                                <td class='bold'>商品名称</td>
                                                <td width='50px' class='bold'>数量</td>
                                                <td width='50px' class='bold'>单价</td>
                                                <td width='50px' class='bold'>金额</td>
                                            </tr>
                                            ${goodstr}
                                            <tr> <td>合计</td> <td>${ctnum}</td> <td></td> <td>&yen;${str.order_money}</td> </tr>
                                            ${manjian}
                                            <tr> <td class='bold'>支付金额</td> <td></td> <td></td> <td class='bold'>&yen;${money}</td> </tr>
                                            <tr> <td>支付方式</td> <td></td> <td></td> <td>${payType}</td> </tr>
                                            <tr> <td>找零</td> <td></td> <td></td> <td>&yen;${str.change_money}</td> </tr>
                                        </table>
                                    </div>
                                    <div class='memb-cont'>
                                        <div class='itext' style='font-size:12px !important;'>会员：${tel}</div>
                                        <div class='itext'>账户余额：&yen;${str.over_balance || ''}</div>
                                    </div>
                                    <div class='note-cont'>
                                        <div class='itext'>备注：${str.remark}</div>
                                    </div>
                                `;
                                let style = document.createElement('style');
                                style.type = 'text/css';
                                style.media = 'print';
                                doc.head.appendChild(style);
                                if (!window.createPopup) {
                                    style.appendChild(document.createTextNode(''));
                                }
                                let sheet = style.sheet || style.styleSheet;
                                let rules = [
                                    '.watername{font-size:14px;font-weight:bold;text-align:center;line-height:60px;border-top:1px solid #000;border-bottom:1px solid #333;}',
                                    '.infos{font-size:12px;border-bottom:1px solid #333;padding:8px 0px;}',
                                    '.flex-cont{display:flex;align-items:center;}',
                                    '.flex-item{flex:1}',
                                    '.code-cont{margin-left:20px;}',
                                    '.pickcode{font-size:12px;font-weight:bolder;}',
                                    '.shoplist{margin-top:25px;padding-bottom:20px;border-bottom:1px solid #333;}',
                                    '.bold{font-weight:bolder}',
                                    '.mytable tr td{font-size:12px;padding:4px;}',
                                    '.itext{font-size:12px;line-height:25px;}',
                                    '.memb-cont{border-bottom:1px solid #333;padding: 8px 0;}',
                                    '.note-cont{border-bottom:1px solid #000;padding-bottom:8px;}'
                                ];
                                for (let i = 0; i < rules.length; i++) {
                                    sheet.insertRule(rules[i]);
                                }
                                doc.body.innerHTML = html;
                                setTimeout(() => {
                                    win.print();
                                    setTimeout(()=> {
                                        document.body.removeChild(ifr);
                                    }, 500);
                                }, 0);
                            },
                        }
                    };
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
import { print } from '@/utils'

export default {
    data () {
        return {}
    },
    methods: {
        print1 () {
            window.print()
        },
        print2 () {
            const content = this.$refs.print2.innerHTML
            print(content)
        },
        print3 () {
            const content = `
                <div>This is the first div.</div>
                <div STYLE="page-break-before:always"></div>
                <div>This is the second div.</div>
                <div>This is the third div.</div>
                <div STYLE="page-break-after:always"></div>
                <div>This is the fourth div.</div>
                <div STYLE="page-break-before:always"></div>
                <div>This is the fifth div.</div>
                <div>This is the sixth div.</div>
                <div STYLE="page-break-after:always"></div>
                <div>This is the last div.</div>
            `
            print(content)
        },
        print4 () {
            let c = []
            const arr = [
                {id: '1021', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来1有限公司', fr: '李1米', zh: '6238239937423482932', jq: '100000.00', dzrq: '2020-01-01', dzgs: '春光乍谢1有效公司', dzzh: '6222091829393238912'},
                {id: '1022', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来2有限公司', fr: '李2米', zh: '6238239937423482932', jq: '200000.00', dzrq: '2020-02-02', dzgs: '春光乍谢2有效公司', dzzh: '6222091829393238912'},
                {id: '1023', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来3有限公司', fr: '李3米', zh: '6238239937423482932', jq: '300000.00', dzrq: '2020-03-03', dzgs: '春光乍谢3有效公司', dzzh: '6222091829393238912'},
                {id: '1024', gs: 'XXXXXXXXXXXXXXX有限公司', ss: '紫气东来4有限公司', fr: '李4米', zh: '6238239937423482932', jq: '400000.00', dzrq: '2020-04-04', dzgs: '春光乍谢4有效公司', dzzh: '6222091829393238912'}
            ]
            arr.forEach((one, index) => {
                c.push(`
                    <table>
                        <tr> <td colspan=4> 款项编号：${one.id || ''} </td> </tr> <tr> <td colspan=4><b> 基本信息 </b></td> </tr> <tr> <td colspan=2> 客户名称 </td> <td colspan=2> 所属公司 </td> </tr>
                        <tr> <td colspan=2> ${one.gs || ''} </td> <td colspan=2> ${one.ss || ''} </td> </tr>
                        <tr> <td colspan=4><b>财务信息</b></td> </tr> <tr> <td class="c"> 付款人 </td> <td class="c"> 付款账户 </td> <td class="c"> 收款金额 </td> <td class="c"> 到账日期 </td> </tr>
                        <tr> <td class="c"> ${one.fr || ''} </td> <td class="c"> ${one.zh || ''} </td> <td class="c"> ${one.jq || ''} </td> <td class="c"> ${one.dzrq || ''} </td> </tr>
                        <tr> <td class="c" colspan=2> 收款人：${one.dzgs || ''} </td> <td class="c" colspan=2> 收款账户：${one.dzzh || ''} </td> </tr>
                    </table>
                `)
            })
            const s = `
                table { width:100%; border: 1px solid #ccc; border-collapse: collapse; }
                table td { border: 1px solid #ccc; text-align:left; padding-left: 21px; line-height: 30px; }
                table td.c { padding-left: 0; text-align:center; }
            `
            print(c, s)
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
