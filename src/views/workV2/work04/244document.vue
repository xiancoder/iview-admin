<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> document 复习</div>
            <div class="blogContent" v-highlight>
                <table border="1" class="api">
                    <tbody>
                        <tr>
                            <th width="35%" align="left">属性 / 方法</th>
                            <th align="left">描述</th>
                        </tr>
                        <tr>
                            <td>document.activeElement</td>
                            <td>返回当前获取焦点元素
                            </td>
                        </tr>
                        <tr>
                            <td>document.addEventListener()</td>
                            <td>向文档添加句柄 <span class="text-danger">(监听事件)</span>
                                <ul class="jrx"> <li>1.0</li> <li>9.0</li> <li>1.0</li> <li>1.0</li> <li>7.0</li> </ul>
                                <p class="text-danger">注意这个居然是后加的</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.removeEventListener()</td>
                            <td>移除文档中的事件句柄(由 addEventListener() 方法添加)
                                <ul class="jrx"> <li>1.0</li> <li>9.0</li> <li>1.0</li> <li>1.0</li> <li>7.0</li> </ul>
                                <p class="text-danger">注意这个居然是后加的</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.adoptNode(node)</td>
                            <td>从另外一个文档返回 adapded 节点到当前文档。
                                <ul class="jrx"> <li>Yes</li> <li>9.0</li> <li>3.0</li> <li>Yes</li> <li>9.0</li> </ul>
                                <p class="text-danger">无法跨域获取子iframe信息 不兼容ie8</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.anchors</td>
                            <td>返回对文档中所有 Anchor 对象的引用。</td>
                        </tr>
                        <tr>
                            <td>document.applets</td>
                            <td><p>返回对文档中所有 Applet 对象的引用。 <span class="deprecated"><b>注意:</b> HTML5 已不支持 &lt;applet&gt; 元素。</span></p></td>
                        </tr>
                        <tr>
                            <td>document.baseURI</td>
                            <td>返回文档的绝对基础 URI
                                <ul class="jrx"> <li>Yes</li> <li>No</li> <li>Yes</li> <li>Yes</li> <li>Yes</li> </ul>
                                <p class="text-danger">不兼容ie</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.doctype</td>
                            <td>返回与文档相关的文档类型声明 (DTD)。</td>
                        </tr>
                        <tr>
                            <td>document.documentURI</td>
                            <td>设置或返回文档的位置</td>
                        </tr>
                        <tr>
                            <td>document.title</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.URL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.domain</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.inputEncoding</td>
                            <td>返回用于文档的编码方式（在解析时）。
                                <p class="text-danger">不兼容ie8以及之前 不兼容Opera</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.lastModified</td>
                            <td>返回文档被最后修改的日期和时间。
                                <p class="text-danger">不知道干啥用</p>
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.links</td>
                            <td>返回对文档中所有 Area 和 Link 对象引用。</td>
                        </tr>
                        <tr>
                            <td>document.body</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.open()</td>
                            <td>打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。
                                <p class="text-danger">开启后首先抹除原来的html</p>
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.write()</td>
                            <td>向文档写 HTML 表达式 或 JavaScript 代码。
                                <p class="text-danger">只要流开着 就能连续写入 否则默认先开启流再写入</p>
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.writeln()</td>
                            <td>等同于 write() 方法，不同的是在每个表达式之后写一个换行符。
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.close()</td>
                            <td>关闭用 document.open() 方法打开的输出流，并显示选定的数据。
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.cookie</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.createAttribute()</td>
                            <td>创建一个属性节点</td>
                        </tr>
                        <tr>
                            <td>document.createComment()</td>
                            <td>createComment() 方法可创建注释节点。</td>
                        </tr>
                        <tr>
                            <td>document.createDocumentFragment()</td>
                            <td>创建空的 DocumentFragment 对象，并返回此对象。</td>
                        </tr>
                        <tr>
                            <td>document.createElement()</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.createTextNode()</td>
                            <td>创建文本节点。</td>
                        </tr>
                        <tr>
                            <td>document.documentElement</td>
                            <td>返回文档的根节点</td>
                        </tr>
                        <tr>
                            <td>document.documentMode</td>
                            <td>返回用于通过浏览器渲染文档的模式</td>
                        </tr>
                        <tr>
                            <td>document.domConfig</td>
                            <td><span class="deprecated"><b>已废弃</b>。</span>返回 normalizeDocument() 被调用时所使用的配置。</td>
                        </tr>
                        <tr>
                            <td>document.embeds</td>
                            <td>返回文档中所有嵌入的内容（embed）集合</td>
                        </tr>
                        <tr>
                            <td>document.forms</td>
                            <td>返回对文档中所有 Form 对象引用。</td>
                        </tr>
                        <tr>
                            <td>document.getElementsByClassName()</td>
                            <td>返回文档中所有指定类名的元素集合，作为 NodeList 对象。</td>
                        </tr>
                        <tr>
                            <td>document.getElementById()</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.getElementsByName()</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>document.getElementsByTagName()</td>
                            <td>返回带有指定标签名的对象集合。</td>
                        </tr>
                        <tr>
                            <td>document.images</td>
                            <td>返回对文档中所有 Image 对象引用。</td>
                        </tr>
                        <tr>
                            <td>document.implementation</td>
                            <td>返回处理该文档的 DOMImplementation 对象。</td>
                        </tr>
                        <tr>
                            <td>document.importNode()</td>
                            <td>把一个节点从另一个文档复制到该文档以便应用。
                                <p class="text-success">所有浏览器都支持</p>
                                <p class="text-danger">无法跨域获取子iframe信息</p>
                                <p class="text-success">如果 第二个值设置为 true，那么还要复制该节点的所有子孙节点。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.normalize()</td>
                            <td>删除空文本节点，并连接相邻节点
                                <p class="text-success">所有浏览器都支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.normalizeDocument()</td>
                            <td>删除空文本节点，并连接相邻节点的
                                <p class="text-danger">所有浏览器都不支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.querySelector()</td>
                            <td>返回文档中匹配指定的CSS选择器的第一元素
                                <ul class="jrx"> <li>4.0</li> <li>8.0</li> <li>3.5</li> <li>3.1</li> <li>10.0</li> </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>document.querySelectorAll()</td>
                            <td>HTML5中引入的新方法，返回文档中匹配的CSS选择器的所有元素节点列表
                                <ul class="jrx"> <li>4.0</li> <li>8.0</li> <li>3.5</li> <li>3.1</li> <li>10.0</li> </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>document.readyState</td>
                            <td>返回文档状态 (载入中……)
                                <p class="text-success">感觉有搞头.....................</p>
                                <p class="text-danger">所有浏览器都支持</p>
                                <p>uninitialized - 还未开始载入</p>
                                <p>loading - 载入中</p>
                                <p>interactive - 已加载，文档与用户可以开始交互</p>
                                <p>complete - 载入完成</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.referrer</td>
                            <td>返回载入当前文档的文档的 URL。</td>
                        </tr>
                        <tr>
                            <td>document.renameNode()</td>
                            <td>重命名元素或者属性节点。
                                <p class="text-danger">所有浏览器都不支持</p>
                            </td>
                        </tr>
                        <tr>
                            <td>document.scripts</td>
                            <td>返回页面中所有脚本的集合。</td>
                        </tr>
                        <tr>
                            <td>document.strictErrorChecking</td>
                            <td>设置或返回是否强制进行错误检查。
                                <p class="text-danger">所有浏览器都不支持</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
