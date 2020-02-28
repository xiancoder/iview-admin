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
                            <td style="width:20%"><p><strong>&lt;a href=""/&gt;</strong></p></td>
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
                        <tr>
                            <td>
                                <p><strong>&lt;span&gt;</strong> </p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;H1&gt; - &lt;H6&gt;</strong> </p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;p&gt;</strong></p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;em&gt;</strong></p>
                            </td>
                            <td>
                                <em>定义强调文本。</em><small>（通常使用斜体显示）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;pre&gt;</strong></p>
                            </td>
                            <td>
                                定义预格式文本。<small>（通常会<strong>保留空格及换行符</strong>，并使用等宽字体显示，很适合用来表示计算机代码）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;address&gt;</strong></p>
                            </td>
                            <td>
                                定义文档作者或拥有者的联系信息。<small>（通常使用斜体显示）</small>
                                <address>
                                    <a href="mailto:ciaoca@gmail.com">联系小叉</a><br>
                                    前端开发工程师
                                </address>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;hr&gt;</strong></p>
                            </td>
                            <td>
                                <p>定义水平线。<small>（本页中的分割线均为 &lt;hr&gt; 标签）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><header><strong>&lt;header&gt;</strong> </header></p>
                            </td>
                            <td>
                                <p>定义 section 或页面的头部。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><footer><strong>&lt;footer&gt;</strong> </footer></p>
                            </td>
                            <td>
                                <p>定义 section 或页面的尾部。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><article><strong>&lt;article&gt;</strong> </article></p>
                            </td>
                            <td>
                                <p>定义文章。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><section><strong>&lt;section&gt;</strong> </section></p>
                            </td>
                            <td>
                                <p>定义文档中的节。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><aside><strong>&lt;aside&gt;</strong> </aside></p>
                            </td>
                            <td>
                                <p>定义文档内容相关的内容。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><nav><strong>&lt;nav&gt;</strong> </nav></p>
                            </td>
                            <td>
                                <p>定义导航。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><details><strong>&lt;details&gt;...&lt;/details&gt;</strong> </details></p>
                            </td>
                            <td>
                                <p>定义细节内容 默认显示详细信息。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><details><summary>HTML 5</summary><strong>&lt;details&gt;&lt;summary&gt;...&lt;/summary&gt;...&lt;/details&gt;</strong> </details></p>
                            </td>
                            <td>
                                <p>定义 details 的标题。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;ul&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义无序列表。<small>（通常列表前会有项目符号）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;ol&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义有序列表。<small>（通常列表前会有数字符号）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;dl&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义定义列表。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;table&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;caption&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格标题。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;thead&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格中的表头内容。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;tfoot&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格中的表注内容（脚注）。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;tbody&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格中的主体内容。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;tr&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格中的行。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;th&gt;</strong>  </p>
                            </td>
                            <td>
                                <p> 定义表格中的表头单元格。<small>（通常使用粗体显示）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;td&gt;</strong>  </p>
                            </td>
                            <td>
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
                            </td>
                            <td>
                                <p> 定义表单。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;fieldset&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义围绕表单中元素的边框。<small>（通常四周会有缩进，并显示围绕的边框）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;legend&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义 fieldset 元素的标题。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;select&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义选择列表（下拉列表）。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;optgroup&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义选择列表中相关选项的组合。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;option&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义选择列表中的选项。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;input&gt;</strong> </p>
                            </td>
                            <td>
                                <p> 定义输入控件。<small>（如果浏览器不支持 HTML5 新的类型，那么会使用文本域替代）</small></p>
                                <p>文本域 <b>type="text"</b> <input name="" type="text"> </p>
                                <p>密码域 <b>type="password"</b> <input name="" type="password"> </p>
                                <p>复选框 <b>type="checkbox"</b> <input name="" type="checkbox" value="">A <input name="" type="checkbox" value="">B <input name="" type="checkbox" value="">C </p>
                                <p>单选按钮 <b>type="radio"</b> <input name="radio_b" type="radio" value="" checked="checked">Ⅰ <input name="radio_b" type="radio" value="">Ⅱ </p>
                                <p>文件域 <b>type="file"</b> <input name="" type="file"> </p>
                                <p>图像域 <b>type="image"</b> <input name="" type="image" src="88x31.jpg" alt="图片无法显示"> </p>
                                <p>隐藏域 <b>type="hidden"</b> <input name="" type="hidden" value=""> </p>
                                <p>普通按钮 <b>type="button"</b> <input name="" type="button" value="无任何作用的按钮"> </p>
                                <p>重置按钮 <b>type="reset"</b> <input name="" type="reset" value="重置所有控件"> </p>
                                <p>提交按钮 <b>type="submit"</b> <input name="" type="submit" value="提交表单用的按钮"> </p>
                                <p>email 域 <b>type="email"</b> <input name="" type="email"> <small>（若有输入内容，则会验证格式是否符合 email）</small></p>
                                <p>url 域 <b>type="url"</b> <input name="" type="url"> <small>（若有输入内容，则会验证格式是否符合 url）</small></p>
                                <p>数值域 <b>type="number"</b> <input name="" type="number" min="1" max="10"> <small>（若有设置最大值或最小值，则会验证数字是否在最大最小值之内）</small></p>
                                <p>数值范围域 <b>type="range"</b> <input name="" type="range" min="1" max="10"> <small>（通过拖动滑块来选择数值）</small></p>
                                <p>日期域 <b>type="date"</b> <input name="" type="date"> <small>（会调用浏览器自带的日期选择器，可设置的类型：date, month, week, time, datetime, datetime-local）</small></p>
                                <p>日期域 <b>type="time"</b> <input name="" type="time"> </p>
                                <p>色值域 <b>type="color"</b> <input name="" type="color"> <small>（会调用浏览器自带的颜色选择器）</small></p>
                                <p>搜索域 <b>type="search"</b> <input name="" type="search"> <small>（用于搜索，站内搜索或 Google 搜索等，在输入框内容右侧通常会出现清除按钮）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><textarea></textarea></p>
                            </td>
                            <td>
                                <p><strong>&lt;textarea&gt;</strong> 定义多行的文本输入控件。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p> <input id="testid_1" name="" type="checkbox" value="1"><label for="testid_1">点击这里也可以选中</label></p>
                            </td>
                            <td>
                                <p><strong>&lt;label&gt;</strong> 定义 input 元素的标注。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
                                   <input type="range" id="a" value="50">100
                                   +<input type="number" id="b" value="50">
                                   =<output name="x" for="a b"></output>
                                </form>
                            </td>
                            <td>
                                <p><strong>&lt;output&gt;</strong> 定义多行的文本输入控件。 </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><button>按钮</button></p>
                            </td>
                            <td>
                                <p><strong>&lt;button&gt;</strong> 定义按钮。<small>（与input不同的是，buttom内部可以放置更多的内容，比如文本或图像）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p> <input id="myCar" list="cars"><datalist id="cars"> <option value="BMW"> </option><option value="Ford"> </option><option value="Volvo"> </option></datalist></p>
                            </td>
                            <td>
                                <p><strong>&lt;datalist&gt;</strong> 定义 input 元素的选项列表</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
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
                            </td>
                            <td>
                                下拉框分组
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;blockquote&gt;</strong>
                            </td>
                            <td>
                                <p> 定义长的引用。<small>（通常四周会有缩进）</small></p>
                                <blockquote>
                                    WEB标准不是某一个标准，而是一系列标准的集合。网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。对应的标准也分三方面：结构化标准语言主要包括XHTML和XML，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMAScript等。这些标准大部分由W3C起草和发布，也有一些是其他标准组织制订的标准，比如ECMA（European Computer Manufacturers Association）的ECMAScript标准。
                                </blockquote>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;strong&gt;</strong>
                            </td>
                            <td>
                                通常使用粗体显示
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;mark&gt;</strong>
                            </td>
                            <td>
                                定义带有<mark>标记</mark>的文本。<small>（通常会高亮显示）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;time&gt;</strong>
                            </td>
                            <td>
                                定义<time datetime="2015-03-31">时间</time>。<small>（通常不会有任何视觉效果）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;del&gt;</strong>
                            </td>
                            <td>
                                <del>定义被删除文本。</del><small>（通常带有删除线）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;ins&gt;</strong>
                            </td>
                            <td>
                                <ins>定义新插入文本。</ins><small>（通常带有下划线）</small>2015年1月1日是<del>星期五</del><ins>星期四</ins>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;big&gt;</strong>
                            </td>
                            <td>
                                定义<big>大号文本</big>。<small>（通常使用比正文更大的字号显示）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;small&gt;</strong>
                            </td>
                            <td>
                                定义<small>小号文本</small>。<small>（通常使用比正文更小的字号显示）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;sup&gt;</strong>
                            </td>
                            <td>
                                定义上标文本。X<sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;sub&gt;</strong>
                            </td>
                            <td>
                                定义下标文本。H<sub>2</sub>O
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;cite&gt;</strong>
                            </td>
                            <td>
                                <cite>定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。</cite><small>（通常使用斜体显示）</small><a href="http://www.w3school.com.cn/tags/tag_cite.asp"></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;q&gt;</strong>
                            </td>
                            <td>
                                <q>定义短的引用。</q><small>（通常会在两边加双引号）</small>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;bdo&gt;</strong>
                            </td>
                            <td>
                                <p> 定义文本的方向。</p>
                                <p>后面的文字会从右到左来显示：<bdo dir="rtl">你已经具备了倒读的能力</bdo></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;abbr&gt;</strong>
                            </td>
                            <td>
                                <p> 定义缩写。</p>
                                <p>微软推出的浏览器是 <abbr title="Internet Explorer">IE</abbr> 浏览器。（鼠标移到“IE”上看效果）</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;progress&gt;</strong>
                            </td>
                            <td>
                                定义进度条。<progress value="22" max="100"></progress>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;meter&gt;</strong>
                            </td>
                            <td>
                                定义度计量。<meter value="3" min="0" max="10">十分之三</meter> <meter value="0.6">60%</meter>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;img&gt;</strong></p>
                                <p><strong>&lt;map&gt;</strong> 定义可点击区域。</p>
                                <p><strong>&lt;area&gt;</strong> 定义可点击区域的内部区域。</p>
                            </td>
                            <td>
                                定义图像。
                                <p><img src="88x31.jpg" usemap="#ciaocamap"></p>
                                <map name="ciaocamap" id="ciaocamap"></map>
                                <area shape="circle" coords="15,15,15" href="http://ciaoca.com/" alt="Blog">
                                <area shape="rectangle" coords="40,0,80,30" href="http://code.ciaoca.com/" alt="F2E">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;figure&gt;</strong>
                                <p><strong>&lt;figcaption&gt;</strong> 定义 figure 元素的标题。</p>
                            </td>
                            <td>
                                定义文档中的媒体内容（图片、图表、照片、代码等）。
                                <figure>
                                    <figcaption>小叉试验场</figcaption>
                                    <img src="88x31.jpg">
                                </figure>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;canvas&gt;</strong>
                            </td>
                            <td>
                                <p> 定义画布。<small>（此处不做演示）</small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;audio&gt;</strong> 定义声音。</p>
                                <p><strong>&lt;source&gt;</strong> 定义媒体源。</p>
                            </td>
                            <td>
                                <audio controls="controls">
                                    您的浏览器不支持 audio 标签。
                                </audio>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>&lt;audio&gt;</strong> 定义视频。</p>
                                <p><strong>&lt;video&gt;</strong> 定义字幕。</p>
                            </td>
                            <td>
                                <video controls="controls">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;noscript&gt;</strong>
                            </td>
                            <td>
                                <p> 定义针对不支持客户端脚本的用户的替代内容。</p>
                                <p>当前您的浏览器支持JavaScript脚本。</p>
                                <noscript>若您看到这行字，说明您的浏览器不支持JavaScript脚本。</noscript>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;noframes&gt;</strong>
                            </td>
                            <td>
                                <p> 定义针对不支持框架的用户的替代内容。</p>
                                <noframes>若您看到这行字，说明您的浏览器不支持运行框架。</noframes>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>&lt;ruby&gt;</strong><strong>&lt;rt&gt;</strong><strong>&lt;rp&gt;</strong>
                            </td>
                            <td>
                                <p> 定义 ruby 注释。</p>
                                <p> 定义 ruby 注释的解释。</p>
                                <p> 定义若浏览器不支持 ruby 元素显示的内容。</p>
                                <ruby>
                                漢 <rt></rt><rp>(</rp>ㄏㄢˋ<rp>)</rp>
                                </ruby>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>

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
