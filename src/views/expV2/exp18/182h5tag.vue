<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">有用的h5新标签</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <table class="api">
                    <tbody>
                        <tr>
                            <td style="width:30%"><p><strong>&lt;a href=""/&gt;</strong></p></td>
                            <td>
                                <p>超链接</p>
                                <p> target=_blank 浏览器会另开一个新窗口显示链接</p>
                                <p> target=_self，在同一框架或窗口中打开所链接的文档。此参数为默认值，通常不用指定。</p>
                                <p> target=_parent，将链接的文件载入含有该链接框架的父框架集或父窗口中。如果含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象_self参数一样。</p>
                                <p> target=_top，在当前的整个浏览器窗口中打开所链接的文档，因而会删除所有框架</p>
                                <p> target=_search 在浏览器的搜索区装载文档，注意</p>
                                <p> target=new 只是临时的替代方法。和target="_blank"效果是不一样的。 定义了打开的窗口名为new，所有target为new的连接都会在同一个窗口打开而不是新窗口。</p>
                                <p><a href="tencent://Message/?Uin=2596275588&websiteName=q-zone.qq.com&Menu=yes"></a></p>
                                <p>触发qq的临时会话 目前测试谷歌 QQ 欧鹏浏览器不出，360极速和普通  搜狗 ie11 火狐 百度 UC 都可以出</p>
                                <p>&lt;iframe src="http://wpa.qq.com/msgrd?v=3&uin=510082758&site=qq&menu=yes" &gt;&lt;/iframe&gt;立刻触发qq界面</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;div&gt;</strong> </p>
                            </td>
                            <td>
                            </td>
                        </tr>
                                <p><strong>&lt;span&gt;</strong> </p>
                                <p><strong>&lt;H1&gt; - &lt;H6&gt;</strong> </p>
                                <p><strong>&lt;p&gt;</strong></p>
                                <p><strong>&lt;hr&gt;</strong></p>
                            </td>
                            <td>
                                <p>没有变化的标签</p>
                                <p>没有变化的标签</p>
                                <p>定义标题。<small>（注意：单个页面内最好只使用1个H1标签）</small></p>
                                <p>定义段落。</p>
                                <p>定义水平线。<small>（本页中的分割线均为 &lt;hr&gt; 标签）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><header><strong>&lt;header&gt;</strong> </header></p>
                                <p><footer><strong>&lt;footer&gt;</strong> </footer></p>
                                <p><article><strong>&lt;article&gt;</strong> </article></p>
                                <p><section><strong>&lt;section&gt;</strong> </section></p>
                                <p><aside><strong>&lt;aside&gt;</strong> </aside></p>
                                <p><nav><strong>&lt;nav&gt;</strong> </nav></p>
                                <p><details><strong>&lt;details&gt;...&lt;/details&gt;</strong> </details></p>
                                <p><details><summary>HTML 5</summary><strong>&lt;details&gt;&lt;summary&gt;...&lt;/summary&gt;...&lt;/details&gt;</strong> </details></p>
                            </td>
                            <td>
                                <p>定义 section 或页面的头部。</p>
                                <p>定义 section 或页面的尾部。</p>
                                <p>定义文章。</p>
                                <p>定义文档中的节。</p>
                                <p>定义文档内容相关的内容。</p>
                                <p>定义导航。</p>
                                <p>定义细节内容 默认显示详细信息。</p>
                                <p>定义 details 的标题。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;ul&gt;</strong> </p>
                                <p><strong>&lt;ol&gt;</strong> </p>
                                <p><strong>&lt;dl&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义无序列表。<small>（通常列表前会有项目符号）</small></p>
                                <p> 定义有序列表。<small>（通常列表前会有数字符号）</small></p>
                                <p> 定义定义列表。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;table&gt;</strong>  </p>
                                <p><strong>&lt;caption&gt;</strong>  </p>
                                <p><strong>&lt;thead&gt;</strong>  </p>
                                <p><strong>&lt;tfoot&gt;</strong>  </p>
                                <p><strong>&lt;tbody&gt;</strong>  </p>
                                <p><strong>&lt;tr&gt;</strong>  </p>
                                <p><strong>&lt;th&gt;</strong>  </p>
                                <p><strong>&lt;td&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格。</p>
                                <p> 定义表格标题。</p>
                                <p> 定义表格中的表头内容。</p>
                                <p> 定义表格中的表注内容（脚注）。</p>
                                <p> 定义表格中的主体内容。</p>
                                <p> 定义表格中的行。</p>
                                <p> 定义表格中的表头单元格。<small>（通常使用粗体显示）</small></p>
                                <p> 定义表格中的单元。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>&lt;table&gt;</p>
                                    <p>&lt;caption&gt;&lt;/caption&gt;</p>
                                    <p>&lt;thead&gt; &lt;tr&gt; &lt;th&gt;&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt;</p>
                                    <p>&lt;tfoot&gt; &lt;tr&gt; &lt;td&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/tfoot&gt;</p>
                                    <p>&lt;tbody&gt; &lt;tr&gt; &lt;td&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt;</p>
                                <p>&lt;/table&gt;</p>
                            </td>
                            <td><p>※ 虽然 tfoot 放在了 tbody 之前，浏览器依然会将 tfoot 显示在 tbody 之后，而且这样做能让浏览器在获得所有表格内的数据前显示表注。</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;form&gt;</strong> </p>
                                <p><strong>&lt;fieldset&gt;</strong> </p>
                                <p><strong>&lt;legend&gt;</strong> </p>
                                <p><strong>&lt;select&gt;</strong> </p>
                                <p><strong>&lt;optgroup&gt;</strong> </p>
                                <p><strong>&lt;option&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义表单。</p>
                                <p> 定义围绕表单中元素的边框。<small>（通常四周会有缩进，并显示围绕的边框）</small></p>
                                <p> 定义 fieldset 元素的标题。</p>
                                <p> 定义选择列表（下拉列表）。</p>
                                <p> 定义选择列表中相关选项的组合。</p>
                                <p> 定义选择列表中的选项。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;input&gt;</strong> </p>
                                <p> <input name="" type="text"></p>
                                <p> <input name="" type="password"></p>
                                <p> <input name="" type="checkbox" value="">A <input name="" type="checkbox" value="">B <input name="" type="checkbox" value="">C</p>
                                <p> 组A:<input name="radio_a" type="radio" value="" checked="checked">① <input name="radio_a" type="radio" value="">② 组B:<input name="radio_b" type="radio" value="" checked="checked">Ⅰ <input name="radio_b" type="radio" value="">Ⅱ</p>
                                <p> <input name="" type="file"></p>
                                <p> <input name="" type="image" src="88x31.jpg" alt="图片无法显示"> </p>
                                <p> <input name="" type="hidden" value=""> </p>
                                <p> <input name="" type="button" value="无任何作用的按钮"></p>
                                <p> <input name="" type="reset" value="重置所有控件"></p>
                                <p> <input name="" type="submit" value="提交表单用的按钮"></p>
                                <p> <input name="" type="email"> </p>
                                <p> <input name="" type="url"> </p>
                                <p> <input name="" type="number" min="1" max="10"> </p>
                                <p> <input name="" type="range" min="1" max="10"> </p>
                                <p> <input name="" type="date"> </p>
                                <p> <input name="" type="time"></p>
                                <p> <input name="" type="color"> </p>
                                <p> <input name="" type="search"> </p>
                                <p> <input id="myCar" list="cars"><datalist id="cars"> <option value="BMW"> </option><option value="Ford"> </option><option value="Volvo"> </option></datalist></p>
                                <p> <keygen name=""></keygen></p>
                                <p> 1+1=<output name="x" for="a b"></output></p>
                                <p> <input id="testid_1" name="" type="checkbox" value="1"><label for="testid_1">点击这里也可以选中</label></p>
                                <p><textarea></textarea></p>
                                <p><button>按钮</button></p>
                            </td>
                            <td>
                                <p> 定义输入控件。<small>（如果浏览器不支持 HTML5 新的类型，那么会使用文本域替代）</small></p>
                                <p>文本域 <code>type="text"</code> </p>
                                <p>密码域 <code>type="password"</code> </p>
                                <p>复选框 <code>type="checkbox"</code> </p>
                                <p>单选按钮 <code>type="radio"</code> </p>
                                <p>文件域 <code>type="file"</code> </p>
                                <p>图像域 <code>type="image"</code> </p>
                                <p>隐藏域 <code>type="hidden"</code> </p>
                                <p>普通按钮 <code>type="button"</code> </p>
                                <p>重置按钮 <code>type="reset"</code> </p>
                                <p>提交按钮 <code>type="submit"</code> </p>
                                <p>email 域 <code>type="email"</code> <small>（若有输入内容，则会验证格式是否符合 email）</small></p>
                                <p>url 域 <code>type="url"</code> <small>（若有输入内容，则会验证格式是否符合 url）</small></p>
                                <p>数值域 <code>type="number"</code> <small>（若有设置最大值或最小值，则会验证数字是否在最大最小值之内）</small></p>
                                <p>数值范围域 <code>type="range"</code> <small>（通过拖动滑块来选择数值）</small></p>
                                <p>日期域 <code>type="date"</code> <small>（会调用浏览器自带的日期选择器，可设置的类型：date, month, week, time, datetime, datetime-local）</small></p>
                                <p>日期域 <code>type="time"</code> </p>
                                <p>色值域 <code>type="color"</code> <small>（会调用浏览器自带的颜色选择器）</small></p>
                                <p>搜索域 <code>type="search"</code> <small>（用于搜索，站内搜索或 Google 搜索等，在输入框内容右侧通常会出现清除按钮）</small></p>
                                <p><strong>&lt;datalist&gt;</strong> 定义 input 元素的选项列表</p>
                                <p><strong>&lt;keygen&gt;</strong> 定义生成秘钥。 </p>
                                <p><strong>&lt;output&gt;</strong> 定义多行的文本输入控件。 </p>
                                <p><strong>&lt;label&gt;</strong> 定义 input 元素的标注。</p>
                                <p><strong>&lt;textarea&gt;</strong> 定义多行的文本输入控件。</p>
                                <p><strong>&lt;button&gt;</strong> 定义按钮。<small>（与input不同的是，buttom内部可以放置更多的内容，比如文本或图像）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p></p></td>
                        </tr>
                    </tbody>
                </table>
                <h2>【表单】</h2><hr>
                <select>
                <optgroup label="张氏">
                <option>张三</option>
                <option>张三的儿子</option>
                <option>张三的孙女</option>
                </optgroup>
                <optgroup label="李氏">
                <option>李四</option>
                <option>李四的女儿</option>
                <option>李四的孙子</option>
                </optgroup>
                </select>
                <form id="test_form" action="http://code.ciaoca.com/html/htmltags.html#test_form">

                </form>
                <h2>【格式】</h2><hr>
                <p><strong>&lt;blockquote&gt;</strong> 定义长的引用。<small>（通常四周会有缩进）</small></p>
                <blockquote>WEB标准不是某一个标准，而是一系列标准的集合。网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。对应的标准也分三方面：结构化标准语言主要包括XHTML和XML，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMAScript等。这些标准大部分由W3C起草和发布，也有一些是其他标准组织制订的标准，比如ECMA（European Computer Manufacturers Association）的ECMAScript标准。
                </blockquote>
                <p><strong>&lt;pre&gt;</strong> 定义预格式文本。<small>（通常会<strong>保留空格及换行符</strong>，并使用等宽字体显示，很适合用来表示计算机代码）</small></p>
                <p><strong>&lt;address&gt;</strong>定义文档作者或拥有者的联系信息。<small>（通常使用斜体显示）</small></p>
                <address>
                <a href="mailto:ciaoca@gmail.com">联系小叉</a><br>
                前端开发工程师
                </address>
                <p><strong>&lt;a&gt;</strong> <a href="http://ciaoca.com/">定义链接、锚点。</a></p>
                <p><strong>&lt;em&gt;</strong> <em>定义强调文本。</em><small>（通常使用斜体显示）</small></p>
                <p><strong>&lt;strong&gt;</strong> <strong>定义更为强调的文本。</strong><small>（通常使用粗体显示）</small></p>
                <p><strong>&lt;mark&gt;</strong> 定义带有<mark>标记</mark>的文本。<small>（通常会高亮显示）</small></p>
                <p><strong>&lt;time&gt;</strong> 定义<time datetime="2015-03-31">时间</time>。<small>（通常不会有任何视觉效果）</small></p>
                <p><strong>&lt;del&gt;</strong> <del>定义被删除文本。</del><small>（通常带有删除线）</small></p>
                <p><strong>&lt;ins&gt;</strong> <ins>定义新插入文本。</ins><small>（通常带有下划线）</small></p>
                <p>2015年1月1日是<del>星期五</del><ins>星期四</ins></p>
                <p><strong>&lt;i&gt;</strong> <i>定义斜体文本。</i></p>
                <p><strong>&lt;b&gt;</strong> <b>定义粗体文本。</b></p>
                <p><strong>&lt;big&gt;</strong> 定义<big>大号文本</big>。<small>（通常使用比正文更大的字号显示）</small></p>
                <p><strong>&lt;small&gt;</strong> 定义<small>小号文本</small>。<small>（通常使用比正文更小的字号显示）</small></p>
                <p><strong>&lt;sup&gt;</strong> 定义上标文本。X<sup>2</sup></p>
                <p><strong>&lt;sub&gt;</strong> 定义下标文本。H<sub>2</sub>O</p>
                <p><strong>&lt;code&gt;</strong> <code>定义计算机代码文本。This HTML Code.</code><small>（通常使用等宽字体显示，但<strong>不会保留空格及换行符</strong>，需要保留空格及换行符，请使用&lt;pre&gt;）</small><a href="http://www.w3school.com.cn/tags/tag_code.asp">详细描述</a></p>
                <p><strong>&lt;cite&gt;</strong> <cite>定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。</cite><small>（通常使用斜体显示）</small><a href="http://www.w3school.com.cn/tags/tag_cite.asp">详细描述</a></p>
                <p><strong>&lt;q&gt;</strong> <q>定义短的引用。</q><small>（通常会在两边加双引号）</small></p>
                <p><strong>&lt;bdo&gt;</strong> 定义文本的方向。</p>
                <p>后面的文字会从右到左来显示：<bdo dir="rtl">你已经具备了倒读的能力</bdo></p>
                <p><strong>&lt;abbr&gt;</strong> 定义缩写。</p>
                <p>微软推出的浏览器是 <abbr title="Internet Explorer">IE</abbr> 浏览器。（鼠标移到“IE”上看效果）</p>
                <p><strong>&lt;progress&gt;</strong> 定义进度条。<progress value="22" max="100"></progress> </p>
                <p><strong>&lt;meter&gt;</strong> 定义度计量。<meter value="3" min="0" max="10">十分之三</meter> <meter value="0.6">60%</meter></p>
                <h2>【图像】</h2><hr>
                <p><strong>&lt;img&gt;</strong> 定义图像。</p>
                <p><strong>&lt;map&gt;</strong> 定义可点击区域。</p>
                <p><strong>&lt;area&gt;</strong> 定义可点击区域的内部区域。</p>
                <p><img src="88x31.jpg" usemap="#ciaocamap"></p>
                <map name="ciaocamap" id="ciaocamap">
                <area shape="circle" coords="15,15,15" href="http://ciaoca.com/" alt="Blog">
                <area shape="rectangle" coords="40,0,80,30" href="http://code.ciaoca.com/" alt="F2E">
                </map>
                <p><strong>&lt;figure&gt;</strong> 定义文档中的媒体内容（图片、图表、照片、代码等）。</p>
                <p><strong>&lt;figcaption&gt;</strong> 定义 figure 元素的标题。</p>
                <figure>
                <figcaption>小叉试验场</figcaption>
                <img src="88x31.jpg">
                </figure>
                <p><strong>&lt;canvas&gt;</strong> 定义画布。<small>（此处不做演示）</small></p>
                <h2>【音频/视频】</h2><hr>
                <p><strong>&lt;audio&gt;</strong> 定义声音。</p>
                <p><strong>&lt;source&gt;</strong> 定义媒体源。</p>
                <audio controls="controls">
                您的浏览器不支持 audio 标签。
                </audio>
                <p><strong>&lt;audio&gt;</strong> 定义视频。</p>
                <p><strong>&lt;video&gt;</strong> 定义字幕。</p>
                <video controls="controls">
                您的浏览器不支持 video 标签。
                </video>
                <h2>【其他】</h2><hr>
                <p><strong>&lt;noscript&gt;</strong> 定义针对不支持客户端脚本的用户的替代内容。</p>
                <p>当前您的浏览器支持JavaScript脚本。</p>
                <noscript>若您看到这行字，说明您的浏览器不支持JavaScript脚本。</noscript>
                <p><strong>&lt;noframes&gt;</strong> 定义针对不支持框架的用户的替代内容。</p>
                <noframes>若您看到这行字，说明您的浏览器不支持运行框架。</noframes>
                <p><strong>&lt;ruby&gt;</strong> 定义 ruby 注释。</p>
                <p><strong>&lt;rt&gt;</strong> 定义 ruby 注释的解释。</p>
                <p><strong>&lt;rp&gt;</strong> 定义若浏览器不支持 ruby 元素显示的内容。</p>
                <ruby>
                漢 <rt></rt><rp>(</rp>ㄏㄢˋ<rp>)</rp>
                </ruby>
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
