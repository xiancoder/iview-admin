<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">不可见字符</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <table><thead><tr><th>Unicode</th> <th>字符值</th> <th>转义序列</th> <th>含义</th> <th>类别</th></tr></thead> <tbody><tr><td>\u0008</td> <td>\b</td> <td>Backspace</td> <td></td> <td></td></tr> <tr><td>\u0009</td> <td>\t</td> <td>Tab</td> <td>空白</td> <td></td></tr> <tr><td>\u000A</td> <td>\n</td> <td>换行符（换行）</td> <td>行结束符</td> <td></td></tr> <tr><td>\u000B</td> <td>\v</td> <td>垂直制表符</td> <td>空白</td> <td></td></tr> <tr><td>\u000C</td> <td>\f</td> <td>换页</td> <td>空白</td> <td></td></tr> <tr><td>\u000D</td> <td>\r</td> <td>回车</td> <td>行结束符</td> <td></td></tr> <tr><td>\u0022</td> <td>\”</td> <td>双引号</td> <td>(“)</td> <td></td></tr> <tr><td>\u0027</td> <td>\’</td> <td>单引号</td> <td>(‘)</td> <td></td></tr> <tr><td>\u005C</td> <td>\</td> <td>反斜杠</td> <td>( \ )</td> <td></td></tr> <tr><td>\u00A0</td> <td></td> <td>不间断空格</td> <td>空白</td> <td></td></tr> <tr><td>\u2028</td> <td></td> <td>行分隔符</td> <td>行结束符</td> <td></td></tr> <tr><td>\u2029</td> <td></td> <td>段落分隔符</td> <td>行结束符</td> <td></td></tr> <tr><td>\uFEFF</td> <td></td> <td>字节顺序标记</td> <td>空白</td> <td></td></tr></tbody></table>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">超文本标记语言</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <div><p>URL中一些字符的特殊含义，基本编码规则如下：</p> <p>1、空格换成加号(+)</p> <p>2、正斜杠(/)分隔目录和子目录</p> <p>3、问号(?)分隔URL和查询</p> <p>4、百分号(%)制定特殊字符</p> <p>5、#号指定书签</p> <p>6、&amp;号分隔参数</p> <table><tbody><tr><td>空格 - %20</td> <td>" - %22</td> <td># - %23</td> <td>% - %25</td></tr> <tr><td>&amp; - %26</td> <td>+ - %2B</td> <td>: - %3A</td> <td>= - %3D</td></tr> <tr><td>( - %28</td> <td>, - %2C</td> <td>; - %3B</td> <td>&gt; - %3E</td></tr> <tr><td>) - %29</td> <td>/ - %2F</td> <td>&lt; - %3C</td> <td>? - %3F</td></tr> <tr><td>@ - %40</td> <td>\ - %5C</td> <td>| - %7C</td> <td></td></tr></tbody></table></div>
                <script type="text/js">
                    特殊符号 命名实体 十进制编码
                    Α &amp;Alpha; &amp;#913; Β &amp;Beta; &amp;#914; Γ &amp;Gamma; &amp;#915; Δ &amp;Delta; &amp;#916; Ε &amp;Epsilon; &amp;#917; Ζ &amp;Zeta; &amp;#918;
                    Η &amp;Eta; &amp;#919; Θ &amp;Theta; &amp;#920; Ι &amp;Iota; &amp;#921; Κ &amp;Kappa; &amp;#922; Λ &amp;Lambda; &amp;#923; Μ &amp;Mu; &amp;#924;
                    Ν &amp;Nu; &amp;#925; Ξ &amp;Xi; &amp;#926; Ο &amp;Omicron; &amp;#927; Π &amp;Pi; &amp;#928; Ρ &amp;Rho; &amp;#929; Σ &amp;Sigma; &amp;#931; Τ &amp;Tau;
                    &amp;#932; Υ &amp;Upsilon; &amp;#933; Φ &amp;Phi; &amp;#934; Χ &amp;Chi; &amp;#935; Ψ &amp;Psi; &amp;#936; Ω &amp;Omega; &amp;#937; α &amp;alpha; &amp;#945;
                    β &amp;beta; &amp;#946; γ &amp;gamma; &amp;#947; δ &amp;delta; &amp;#948; ε &amp;epsilon; &amp;#949; ζ &amp;zeta; &amp;#950; η &amp;eta; &amp;#951; θ &amp;theta;
                    &amp;#952; ι &amp;iota; &amp;#953; κ &amp;kappa; &amp;#954; λ &amp;lambda; &amp;#955; μ &amp;mu; &amp;#956; ν &amp;nu; &amp;#957; ξ &amp;xi; &amp;#958;
                    ο &amp;omicron; &amp;#959; π &amp;pi; &amp;#960; ρ &amp;rho; &amp;#961; ς &amp;sigmaf; &amp;#962; σ &amp;sigma; &amp;#963; τ &amp;tau; &amp;#964; υ &amp;upsilon;
                    &amp;#965; φ &amp;phi; &amp;#966; χ &amp;chi; &amp;#967; ψ &amp;psi; &amp;#968; ω &amp;omega; &amp;#969; ϑ &amp;thetasym; &amp;#977; ϒ &amp;upsih; &amp;#978;
                    ϖ &amp;piv; &amp;#982; • &amp;bull; &amp;#8226; … &amp;hellip; &amp;#8230; ′ &amp;prime; &amp;#8242; ″ &amp;Prime; &amp;#8243; ‾ &amp;oline; &amp;#8254; ⁄ &amp;frasl;
                    &amp;#8260; ℘ &amp;weierp; &amp;#8472; ℑ &amp;image; &amp;#8465; ℜ &amp;real; &amp;#8476; ™ &amp;trade; &amp;#8482; ℵ &amp;alefsym; &amp;#8501; ← &amp;larr; &amp;#8592;
                    ↑ &amp;uarr; &amp;#8593; → &amp;rarr; &amp;#8594; ↓ &amp;darr; &amp;#8595; ↔ &amp;harr; &amp;#8596; ↵ &amp;crarr; &amp;#8629; ⇐ &amp;lArr; &amp;#8656; ⇑ &amp;uArr;
                    &amp;#8657; ⇒ &amp;rArr; &amp;#8658; ⇓ &amp;dArr; &amp;#8659; ⇔ &amp;hArr; &amp;#8660; ∀ &amp;forall; &amp;#8704; ∂ &amp;part; &amp;#8706; ∃ &amp;exist; &amp;#8707;
                    ∅ &amp;empty; &amp;#8709; ∇ &amp;nabla; &amp;#8711; ∈ &amp;isin; &amp;#8712; ∉ &amp;notin; &amp;#8713; ∋ &amp;ni; &amp;#8715; ∏ &amp;prod; &amp;#8719; ∑ &amp;sum;
                    &amp;#8722; − &amp;minus; &amp;#8722; ∗ &amp;lowast; &amp;#8727; √ &amp;radic; &amp;#8730; ∝ &amp;prop; &amp;#8733; ∞ &amp;infin; &amp;#8734; ∠ &amp;ang; &amp;#8736;
                    ∧ &amp;and; &amp;#8869; ∨ &amp;or; &amp;#8870; ∩ &amp;cap; &amp;#8745; ∪ &amp;cup; &amp;#8746; ∫ &amp;int; &amp;#8747; ∴ &amp;there4; &amp;#8756; ∼ &amp;sim;
                    &amp;#8764; ≅ &amp;cong; &amp;#8773; ≈ &amp;asymp; &amp;#8773; ≠ &amp;ne; &amp;#8800; ≡ &amp;equiv; &amp;#8801; ≤ &amp;le; &amp;#8804; ≥ &amp;ge; &amp;#8805; ⊂ &amp;sub;
                    &amp;#8834; ⊃ &amp;sup; &amp;#8835; ⊄ &amp;nsub; &amp;#8836; ⊆ &amp;sube; &amp;#8838; ⊇ &amp;supe; &amp;#8839; ⊕ &amp;oplus; &amp;#8853; ⊗ &amp;otimes; &amp;#8855;
                    ⊥ &amp;perp; &amp;#8869; ⋅ &amp;sdot; &amp;#8901; ⌈ &amp;lceil; &amp;#8968; ⌉ &amp;rceil; &amp;#8969; ⌊ &amp;lfloor; &amp;#8970; ⌋ &amp;rfloor; &amp;#8971; ◊ &amp;loz;
                    &amp;#9674; ♠ &amp;spades; &amp;#9824; ♣ &amp;clubs; &amp;#9827; ♥ &amp;hearts; &amp;#9829; ♦ &amp;diams; &amp;#9830; _ &amp;nbsp; &amp;#160; ¡ &amp;iexcl; &amp;#161;
                    ¢ &amp;cent; &amp;#162; £ &amp;pound; &amp;#163; ¤ &amp;curren; &amp;#164; ¥ &amp;yen; &amp;#165; ¦ &amp;brvbar; &amp;#166; § &amp;sect; &amp;#167; ¨ &amp;uml; &amp;#168;
                    © &amp;copy; &amp;#169; ª &amp;ordf; &amp;#170; « &amp;laquo; &amp;#171; ¬ &amp;not; &amp;#172; _ &amp;shy; &amp;#173; ® &amp;reg; &amp;#174; ¯ &amp;macr; &amp;#175;
                    ° &amp;deg; d&amp;#176; ± &amp;plusmn; &amp;#177; ² &amp;sup2; &amp;#178; ³ &amp;sup3; &amp;#179; ´ &amp;acute; &amp;#180; µ &amp;micro; &amp;#181;
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">Url字符</div>
            <div class="blogContent">
                <p></p>
                <table><tbody><tr><th><div>显示结果</div> </th><th><div>描述</div> </th><th><div>实体名称</div> </th><th><div>实体编号</div> </th></tr><tr><td></td><td><div>空格</div> </td><td><div>&amp;nbsp;</div> </td><td></td></tr><tr><td><div>&lt;</div> </td><td><div>小于号</div> </td><td><div>&amp;lt;</div> </td><td><div>&lt;</div> </td></tr><tr><td><div>&gt;</div> </td><td><div>大于号</div> </td><td><div>&amp;gt;</div> </td><td><div>&gt;</div> </td></tr><tr><td><div>&amp;</div> </td><td><div>和号</div> </td><td><div>&amp;amp;</div> </td><td><div>&amp;</div> </td></tr><tr><td><div>"</div> </td><td><div>引号</div> </td><td><div>&amp;quot;</div> </td><td><div>"</div> </td></tr><tr><td><div>'</div> </td><td><div>撇号</div> </td><td><div>&amp;apos; (IE不支持)</div> </td><td><div>'</div> </td></tr><tr><td><div>￠</div> </td><td><div>分</div> </td><td><div>&amp;cent;</div> </td><td><div>¢</div> </td></tr><tr><td><div>￡</div> </td><td><div>镑</div> </td><td><div>&amp;pound;</div> </td><td><div>£</div> </td></tr><tr><td><div>￥</div> </td><td><div>日元</div> </td><td><div>&amp;yen;</div> </td><td><div>¥</div> </td></tr><tr><td><div>€</div> </td><td><div>欧元</div> </td><td><div>&amp;euro;</div> </td><td><div>€</div> </td></tr><tr><td><div>§</div> </td><td><div>小节</div> </td><td><div>&amp;sect;</div> </td><td><div>§</div> </td></tr><tr><td><div>©</div> </td><td><div>版权</div> </td><td>&amp;copy;</td><td><div>©</div> </td></tr><tr><td><div>®</div> </td><td><div>注册商标</div> </td><td><div>&amp;reg;</div> </td><td><div>®</div> </td></tr><tr><td>™</td><td><div>商标</div> </td><td><div>&amp;trade;</div> </td><td><div>™</div> </td></tr><tr><td><div>×</div> </td><td><div>乘号</div> </td><td><div>&amp;times;</div> </td><td><div>×</div> </td></tr><tr><td><div>÷</div> </td><td><div>除号</div> </td><td><div>&amp;divide;</div> </td><td><div>÷</div> </td></tr></tbody></table>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">Ascii字符</div>
            <div class="blogContent">
                <p></p>
                <p style="font-size:30px;word-break: break-all;">❤❥웃유♋☮✌☏☢☠✔☑♚▲♪✈✞÷↑↓◆◇⊙■□△▽¿─│♥❣♂♀☿Ⓐ✍✉☣☤✘☒♛▼♫⌘☪≈←→◈◎☉★☆⊿※¡━┃♡ღツ☼☁❅♒✎©®™Σ✪✯☭➳卐√↖↗●◐Θ◤◥︻〖〗┄┆℃℉°✿ϟ☃☂✄¢€£∞✫★½✡×↙↘○◑⊕◣◢︼【】┅┇☽☾✚〓▂▃▄▅▆▇█▉▊▋▌▍▎▏↔↕☽☾の•▸◂▴▾┈┊①②③④⑤⑥⑦⑧⑨⑩ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ㍿▓♨♛❖♓☪✙┉┋☹☺☻تヅツッシÜϡﭢ™℠℗©®♥❤❥❣❦❧♡۵웃유ღ♋♂♀☿☼☀☁☂☄☾☽❄☃☈⊙☉℃℉❅✺ϟ☇♤♧♡♢♠♣♥♦☜☞☝✍☚☛☟✌✽✾✿❁❃❋❀⚘☑✓✔√☐☒✗✘ㄨ✕✖✖⋆✢✣✤✥❋✦✧✩✰✪✫✬✭✮✯❂✡★✱✲✳✴✵✶✷✸✹✺✻✼❄❅❆❇❈❉❊†☨✞✝☥☦☓☩☯☧☬☸✡♁✙♆。，、＇：∶；?‘’“”〝〞ˆˇ﹕︰﹔﹖﹑•¨….¸;！´？！～—ˉ｜‖＂〃｀@﹫¡¿﹏﹋﹌︴々﹟#﹩$﹠&amp;﹪%*﹡﹢﹦﹤‐￣¯―﹨ˆ˜﹍﹎+=＿_-\ˇ~﹉﹊（）〈〉‹›﹛﹜『』〖〗［］《》〔〕{}「」【】︵︷︿︹︽_﹁﹃︻︶︸﹀︺︾ˉ﹂﹄︼☩☨☦✞✛✜✝✙✠✚†‡◉○◌◍◎●◐◑◒◓◔◕◖◗❂☢⊗⊙◘◙◍⅟½⅓⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊰⊱⋛⋚∫∬∭∮∯∰∱∲∳%℅‰‱㊣㊎㊍㊌㊋㊏㊐㊊㊚㊛㊤㊥㊦㊧㊨㊒㊞㊑㊒㊓㊔㊕㊖㊗㊘㊜㊝㊟㊠㊡㊢㊩㊪㊫㊬㊭㊮㊯㊰㊙㉿囍♔♕♖♗♘♙♚♛♜♝♞♟ℂℍℕℙℚℝℤℬℰℯℱℊℋℎℐℒℓℳℴ℘ℛℭ℮ℌℑℜℨ♪♫♩♬♭♮♯°øⒶ☮✌☪✡☭✯卐✐✎✏✑✒✍✉✁✂✃✄✆✉☎☏➟➡➢➣➤➥➦➧➨➚➘➙➛➜➝➞➸♐➲➳⏎➴➵➶➷➸➹➺➻➼➽←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨➫➬➩➪➭➮➯➱↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒➓㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅺⅻⅼⅽⅾⅿ┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬◤◥◄►▶◀◣◢▲▼◥▸◂▴▾△▽▷◁⊿▻◅▵▿▹◃❏❐❑❒▀▁▂▃▄▅▆▇▉▊▋█▌▍▎▏▐░▒▓▔▕■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯㋀㋁㋂㋃㋄㋅㋆㋇㋈㋉㋊㋋㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶㏷㏸㏹㏺㏻㏼㏽㏾㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰㍘☰☲☱☴☵☶☳☷☯♠♣♧♡♥❤❥❣♂♀✲☀☼☾☽◐◑☺☻☎☏✿❀№↑↓←→√×÷★℃℉◆◇⊙■△▽½卍卐♪囍Φ※卍卐Ψ♫♬♭♩♪♯♮⌒¶∮‖€￡¥$①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓪❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵﹢﹣×÷±/=≌∽≦≧≒﹤﹥≈≡≠=≤≥≮≯∷∶∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙√∟⊿㏒㏑%‰⅟½⅓⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊰⊱⋛⋚∫∬∭∮∯∰∱∲∳%℅‰‱øØπ♥❣ღ♠♡♤❤❥。，、＇：∶；?‘’“”〝〞ˆˇ﹕︰﹔﹖﹑•¨….¸;！´？！～—ˉ｜‖＂〃｀@﹫¡¿﹏﹋﹌︴々﹟#﹩$﹠&amp;﹪%*﹡﹢﹦﹤‐￣¯―﹨ˆ˜＿_-\ˇ~﹉﹊（）〈〉‹›﹛﹜『』〖〗［］《》〔〕{}「」【】︵︷︿︹︽_﹁﹃︻︶︸﹀︺︾ˉ﹂﹄︼❝❞°′″＄￥〒￠￡％＠℃℉﹩﹪‰﹫㎡㏕㎜㎝㎞㏎m³㎎㎏㏄º○¤%$º¹²³€£Ұ₴$₰¢₤¥₳₲₪₵元₣₱฿¤₡₮₭₩ރ円₢₥₫₦zł﷼₠₧₯₨Kčर₹ƒ₸￠↑↓←→↖↗↘↙↔↕➻➼➽➸➳➺➻➴➵➶➷➹▶►▷◁◀◄«»➩➪➫➬➭➮➯➱⏎➲➾➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨↚↛↜↝↞↟↠↠↡↢↣↤↤↥↦↧↨⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇗⇘⇙⇜↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹☇☈↼↽↾↿⇀⇁⇂⇃⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪↺↻⇚⇛♐✐✎✏✑✒✍✉✁✂✃✄✆✉☎☏☑✓✔√☐☒✗✘ㄨ✕✖✖☢☠☣✈★☆✡囍㍿☯☰☲☱☴☵☶☳☷☜☞☝✍☚☛☟✌♤♧♡♢♠♣♥♦☀☁☂❄☃♨웃유❖☽☾☪✿♂♀✪✯☭➳卍卐√×■◆●○◐◑✙☺☻❀⚘♔♕♖♗♘♙♚♛♜♝♞♟♧♡♂♀♠♣♥❤☜☞☎☏⊙◎☺☻☼▧▨♨◐◑↔↕▪▒◊◦▣▤▥▦▩◘◈◇♬♪♩♭♪の★☆→あぃ￡Ю〓§♤♥▶¤✲❈✿✲❈➹☀☂☁【】┱┲❣✚✪✣✤✥✦❉❥❦❧❃❂❁❀✄☪☣☢☠☭ღ▶▷◀◁☀☁☂☃☄★☆☇☈⊙☊☋☌☍ⓛⓞⓥⓔ╬『』∴☀♫♬♩♭♪☆∷﹌の★◎▶☺☻►◄▧▨♨◐◑↔↕↘▀▄█▌◦☼♪の☆→♧ぃ￡❤▒▬♦◊◦♠♣▣۰•❤•۰►◄▧▨♨◐◑↔↕▪▫☼♦⊙●○①⊕◎Θ⊙¤㊣★☆♀◆◇◣◢◥▲▼△▽⊿◤◥✐✌✍✡✓✔✕✖♂♀♥♡☜☞☎☏⊙◎☺☻►◄▧▨♨◐◑↔↕♥♡▪▫☼♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙◈♫♬♪♩♭♪✄☪☣☢☠♯♩♪♫♬♭♮☎☏☪♈ºº₪¤큐«»™♂ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζνξοπρσηθικλμτυφχψωАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяāáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜüêɑńňɡㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ零壹贰叁肆伍陆柒捌玖拾佰仟万亿吉太拍艾分厘毫微卍卐卄巜弍弎弐朤氺曱甴囍兀々〆のぁ〡〢〣〤〥〦〧〨〩㊎㊍㊌㊋㊏㊚㊛㊐㊊㊣㊤㊥㊦㊧㊨㊒㊫㊑㊓㊔㊕㊖㊗㊘㊜㊝㊞㊟㊠㊡㊢㊩㊪㊬㊭㊮㊯㊰㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ゠ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ─ ━│┃╌╍╎╏┄ ┅┆┇┈ ┉┊┋┌┍┎┏┐┑┒┓└ ┕┖┗ ┘┙┚┛├┝┞┟┠┡┢┣ ┤┥┦┧┨┩┪┫┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╪ ╫ ╬═║╒╓╔ ╕╖╗╘╙╚ ╛╜╝╞╟╠ ╡╢╣╤ ╥ ╦ ╧ ╨ ╩ ╳╔ ╗╝╚ ╬ ═ ╓ ╩�┠ ┨┯ ┷┏ ┓┗ ┛┳ ⊥ ﹃ ﹄┌ ╮ ╭ ╯╰�🍀🍎💰📱🌙🍁🍂🍃🌷💎🔫🏀⚽⚡👄🔥</p>
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
