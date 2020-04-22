<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="other_weibo">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="home_index" to="/home/index"> <Icon type="ios-navigate"></Icon> 正常内容 </MenuItem>
                        <MenuItem name="other_weibo" to="/other/weibo"> <Icon type="ios-navigate"></Icon> 微博结构 </MenuItem>
                        <MenuItem name="2"> <Icon type="ios-keypad"></Icon> Item 2 </MenuItem>
                        <MenuItem name="3"> <Icon type="ios-analytics"></Icon> Item 3 </MenuItem>
                        <MenuItem name="4"> <Icon type="ios-paper"></Icon> Item 4 </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{'margin':'0 auto','width':'1440px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Row type="flex" justify="space-between" :gutter="20">
                    <Col span="5">
                        <div class="user">
                            <div class="user__head">
                                <div class="user__img"> <img src="/static/img.head/zhishui.jpg" alt=""></div>
                            </div>
                            <div class="user__title">
                                <h2> <font>约翰·杜</font> </h2>
                                <p> <font>前端开发人员</font> </p>
                            </div>
                            <div class="user__btns">
                                <a href="add-project.html" class="user__btn user__btn--blue">
                                    <span> <font>发布项目</font> </span>
                                </a>
                                <a href="add-job.html" class="user__btn user__btn--orange">
                                    <span> <font>发布工作</font> </span>
                                </a>
                            </div>
                            <ul class="user__stats">
                                <li> <p> <font>以下</font> </p> <span> <font>26</font> </span> </li>
                                <li> <p> <font>追随者</font> </p> <span> <font>88</font> </span> </li>
                            </ul>
                            <a href="profile.html" class="sidebox__more"> <font>查看资料</font> </a>
                        </div>
                        <div class="sidebox">
                            <h4 class="sidebox__title"> <font>意见建议</font> </h4>
                            <div class="sidebox__content">
                                <div class="sidebox__user">
                                    <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                                    <div class="sidebox__user-title">
                                        <h5> <a href="#"> <font>安迪·拉莫斯（Andy Ramos）</font> </a> </h5>
                                        <p> <font>秘书</font> </p>
                                    </div>
                                    <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                                </div>
                                <div class="sidebox__user">
                                    <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                                    <div class="sidebox__user-title">
                                        <h5> <a href="#"> <font>托尼·杨</font> </a> </h5>
                                        <p> <font>中医师</font> </p>
                                    </div>
                                    <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                                </div>
                                <div class="sidebox__user">
                                    <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                                    <div class="sidebox__user-title">
                                        <h5> <a href="#"> <font>圣地亚哥·罗宾逊</font> </a> </h5>
                                        <p> <font>时装设计师</font> </p>
                                    </div>
                                    <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                                </div>
                                <div class="sidebox__user">
                                    <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                                    <div class="sidebox__user-title">
                                        <h5> <a href="#"> <font>索菲亚·门多萨（Sophia Mendoza）</font> </a> </h5>
                                        <p> <font>教学助手</font> </p>
                                    </div>
                                    <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                                </div>
                                <div class="sidebox__user">
                                    <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                                    <div class="sidebox__user-title">
                                        <h5> <a href="#"> <font>玛莎·鲍德温（Marsha Baldwin）</font> </a> </h5>
                                        <p> <font>园丁</font> </p>
                                    </div>
                                    <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                                </div>
                            </div>
                            <a href="#" class="sidebox__more"> <font>查看更多</font> </a>
                        </div>
                        <div class="sidebox">
                            <h4 class="sidebox__title"><font>筛选器 </font><button type="button"><font>全部清除</font></button></h4>
                            <div class="filter">
                                <div class="filter__group">
                                    <label class="filter__label"><font>关键词：</font></label>
                                    <input type="text" class="filter__input" placeholder="关键词">
                                </div>
                                <div class="filter__group">
                                    <label for="sort" class="filter__label"><font>排序方式：</font></label>
                                    <div class="filter__select-wrap">
                                        <select name="sort" id="sort" class="filter__select">
                                            <option value="0">关联</option>
                                            <option value="1">最新</option>
                                            <option value="2">最老的</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="filter__group">
                                    <label for="categoty" class="filter__label"><font>类别：</font></label>
                                    <div class="filter__select-wrap">
                                        <select name="categoty" id="categoty" class="filter__select">
                                            <option>管理员支持</option>
                                            <option>客户服务</option>
                                            <option>数据分析</option>
                                            <option>设计与创意</option>
                                            <option>法律</option>
                                            <option>软件开发</option>
                                            <option>IT与网络</option>
                                            <option>写作</option>
                                            <option>翻译</option>
                                            <option>销售与市场营销</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="filter__group">
                                    <label class="filter__label"><font>工作类型：</font></label>
                                    <ul class="filter__checkboxes">
                                        <li>
                                            <input id="type1" type="checkbox" name="type1" checked="">
                                            <label for="type1"><font>自由职业者</font></label>
                                        </li>
                                        <li>
                                            <input id="type2" type="checkbox" name="type2">
                                            <label for="type2"><font>全职</font></label>
                                        </li>
                                        <li>
                                            <input id="type3" type="checkbox" name="type3">
                                            <label for="type3"><font>兼职</font></label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="filter__group">
                                    <label class="filter__label"><font>薪金/小时（$）：</font></label>
                                    <div class="filter__range">
                                        <div id="filter__range-start">$18</div>
                                        <div id="filter__range-end">$34</div>
                                    </div>
                                </div>
                                <div class="filter__group filter__group--last">
                                    <label class="filter__label"><font>位置：</font></label>
                                    <input type="text" class="filter__input" placeholder="位置">
                                </div>
                                <div class="filter__group">
                                    <button class="filter__btn" type="button"><span><font>搜索</font></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="sidebox">
                            <div class="sidebox__share">
                                <span><font>社交：</font></span>
                                <ul>
                                    <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                                    <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
                                    <li class="twitter"><a href="#"><i class="icon ion-logo-twitter"></i></a></li>
                                    <li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col span="14">
                        <div class="post">
                            <div class="post__head">
                                <a href="#" class="post__head-img">
                                    <img src="/static/img.head/zhishui.jpg" alt="">
                                </a>
                                <div class="post__head-title">
                                    <h5><a href="#"><font>塞巴斯蒂安·李</font></a></h5>
                                    <p><font>11分钟前</font></p>
                                </div>
                                <div class="post__dropdown">
                                    <a class="dropdown-toggle post__dropdown-btn" href="#" role="button" id="dropdownMenu1">
                                        <i class="icon ion-md-more"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right post__dropdown-menu">
                                        <li><a href="#"><font>编辑</font></a></li>
                                        <li><a href="#"><font>删除</font></a></li>
                                        <li><a href="#"><font>隐藏</font></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post__wrap">
                                <div class="post__company"> <i class="icon ion-ios-briefcase"></i> <span><font>Envato</font></span> </div>
                                <div class="post__location"> <i class="icon ion-ios-navigate"></i> <span><font>澳大利亚</font></span> </div>
                                <div class="post__actions">
                                    <a class="post__actions-btn post__actions-btn--green" href="#"> <i class="icon ion-ios-bookmark"></i> </a>
                                    <a class="post__actions-btn post__actions-btn--red" href="#"> <i class="icon ion-ios-mail"></i> </a>
                                </div>
                            </div>
                            <h2 class="post__title"><font>资深Wordpress开发人员</font></h2>
                            <div class="post__options"> <span><font>全职</font></span> <p><font>$ 36 /小时</font></p> </div>
                            <div class="post__description">
                                <p><font>Lorem Ipsum的段落有很多变体，但是大多数都因注入幽默感或看起来有些难以置信的随机单词而以某种形式发生了变化。如果要使用Lorem Ipsum的段落，则需要确保文本中间没有隐藏任何令人尴尬的内容。</font></p>
                                <a href="#"><font>查看更多</font></a>
                            </div>
                            <div class="post__tags">
                                <a href="#"><font>HTML </font></a>
                                <a href="#"><font>CSS </font></a>
                                <a href="#"><font>PHP</font></a>
                            </div>
                            <div class="post__stats">
                                <div>
                                    <a class="post__likes" href="#"><i class="icon ion-ios-heart"></i> <span><font>15</font></span></a>
                                    <a class="post__comments" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1"><i class="icon ion-ios-text"></i> <span><font>0</font></span></a>
                                </div>
                                <div class="post__views">
                                    <i class="icon ion-ios-eye"></i> <span><font>214</font></span>
                                </div>
                            </div>
                            <div class="collapse post__collapse" id="collapse1">
                                <form action="#" class="post__form">
                                    <input type="text" placeholder="输入您的评论...">
                                    <button type="button"><i class="icon ion-ios-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__head">
                                <a href="#" class="post__head-img">
                                    <img src="/static/img.head/zhishui.jpg" alt="">
                                </a>
                                <div class="post__head-title">
                                    <h5><a href="#"><font>约翰·杜</font></a></h5>
                                    <p><font>24分钟前</font></p>
                                </div>
                                <div class="post__dropdown">
                                    <a class="dropdown-toggle post__dropdown-btn" href="#" role="button" id="dropdownMenu3">
                                        <i class="icon ion-md-more"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right post__dropdown-menu">
                                        <li><a href="#"><font>编辑</font></a></li>
                                        <li><a href="#"><font>删除</font></a></li>
                                        <li><a href="#"><font>隐藏</font></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post__wrap">
                                <div class="post__company">
                                    <i class="icon ion-ios-briefcase"></i>
                                    <span><font>前端开发人员</font></span>
                                </div>
                                <div class="post__actions">
                                    <a class="post__actions-btn post__actions-btn--green" href="#">
                                        <i class="icon ion-ios-bookmark"></i>
                                    </a>
                                    <a class="post__actions-btn post__actions-btn--red" href="#">
                                        <i class="icon ion-ios-mail"></i>
                                    </a>
                                    <a href="#" class="post__actions-btn post__actions-btn--blue"><span><font>现在出价</font></span></a>
                                </div>
                            </div>
                            <h2 class="post__title"><font>PSD转换为HTML</font></h2>
                            <div class="post__options">
                                <p><font>$ 300-$ 350</font></p>
                            </div>
                            <div class="post__description">
                                <p><font>Lorem Ipsum的段落有很多变体，但是大多数都因注入幽默感或看起来有些难以置信的随机单词而以某种形式发生了变化。</font><font>如果要使用Lorem Ipsum的段落，则需要确保文本中间没有隐藏任何令人尴尬的内容。</font></p>
                                <a href="#"><font>查看更多</font></a>
                            </div>
                            <div class="post__tags">
                                <a href="#"><font>HTML </font></a>
                                <a href="#"><font>CSS </font></a>
                                <a href="#"><font>JS </font></a>
                                <a href="#"><font>PSD</font></a>
                            </div>
                            <div class="post__stats">
                                <div>
                                    <a class="post__likes" href="#"><i class="icon ion-ios-heart"></i> <span><font>15</font></span></a>
                                    <a class="post__comments" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse1"><i class="icon ion-ios-text"></i> <span><font>0</font></span></a>
                                </div>
                                <div class="post__views">
                                    <i class="icon ion-ios-eye"></i> <span><font>214</font></span>
                                </div>
                            </div>
                            <div class="collapse post__collapse" id="collapse3">
                                <form action="#" class="post__form">
                                    <input type="text" placeholder="输入您的评论...">
                                    <button type="button"><i class="icon ion-ios-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post__head">
                                <a href="#" class="post__head-img">
                                    <img src="/static/img.head/zhishui.jpg" alt="">
                                </a>
                                <div class="post__head-title">
                                    <h5><a href="#"><font>塞巴斯蒂安·李</font></a></h5>
                                    <p><font>45分钟前</font></p>
                                </div>
                                <div class="post__dropdown">
                                    <a class="dropdown-toggle post__dropdown-btn" href="#" role="button" id="dropdownMenu2">
                                        <i class="icon ion-md-more"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right post__dropdown-menu">
                                        <li><a href="#"><font>编辑</font></a></li>
                                        <li><a href="#"><font>删除</font></a></li>
                                        <li><a href="#"><font>隐藏</font></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post__wrap">
                                <div class="post__company"> <i class="icon ion-ios-briefcase"></i> <span><font>Envato</font></span> </div>
                                <div class="post__location"> <i class="icon ion-ios-navigate"></i> <span><font>澳大利亚</font></span> </div>
                                <div class="post__actions">
                                    <a class="post__actions-btn post__actions-btn--green" href="#"> <i class="icon ion-ios-bookmark"></i> </a>
                                    <a class="post__actions-btn post__actions-btn--red" href="#"> <i class="icon ion-ios-mail"></i> </a>
                                </div>
                            </div>
                            <h2 class="post__title"><font>资深Wordpress开发人员</font></h2>
                            <div class="post__options"> <span><font>全职</font></span> <p><font>$ 36 /小时</font></p> </div>
                            <div class="post__description">
                                <p><font>Lorem Ipsum的段落有很多变体，但是大多数都因注入幽默感或看起来有些难以置信的随机单词而以某种形式发生了变化。</font><font>如果要使用Lorem Ipsum的段落，则需要确保文本中间没有隐藏任何令人尴尬的内容。</font></p>
                                <a href="#"><font>查看更多</font></a>
                            </div>
                            <div class="post__tags">
                                <a href="#"><font>HTML </font></a>
                                <a href="#"><font>CSS </font></a>
                                <a href="#"><font>PHP</font></a>
                            </div>
                            <div class="post__stats">
                                <div>
                                    <a class="post__likes" href="#"><i class="icon ion-ios-heart"></i> <span><font>15</font></span></a>
                                    <a class="post__comments" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="true" aria-controls="collapse2"><i class="icon ion-ios-text"></i> <span><font>2</font></span></a>
                                </div>
                                <div class="post__views">
                                    <i class="icon ion-ios-eye"></i> <span><font>214</font></span>
                                </div>
                            </div>
                            <div class="collapse show post__collapse" id="collapse2">
                                <form action="#" class="post__form">
                                    <input type="text" placeholder="输入您的评论...">
                                    <button type="button"><i class="icon ion-ios-paper-plane"></i></button>
                                </form>
                                <div class="post__comment">
                                    <a href="#" class="post__comment-img">
                                        <img src="/static/img.head/zhishui.jpg" alt="">
                                    </a>
                                    <div class="post__comment-title">
                                        <h5><a href="#"><font>艾伦·帕特里克</font></a></h5>
                                        <p><font>20分钟前</font></p>
                                    </div>
                                    <p class="post__comment-text"><font>现在，许多桌面出版软件包和网页编辑器都使用Lorem Ipsum作为默认模型文本，并且搜索“ lorem ipsum”将发现许多仍处于起步阶段的网站。</font></p>
                                </div>
                                <div class="post__comment">
                                    <a href="#" class="post__comment-img">
                                        <img src="/static/img.head/zhishui.jpg" alt="">
                                    </a>
                                    <div class="post__comment-title">
                                        <h5><a href="#"><font>迭戈·科斯塔</font></a></h5>
                                        <p><font>22分钟前</font></p>
                                    </div>
                                    <p class="post__comment-text"><font>现在，许多桌面出版软件包和网页编辑器都使用Lorem Ipsum作为默认模型文本，并且搜索“ lorem ipsum”将发现许多仍处于起步阶段的网站。</font></p>
                                </div>
                            </div>
                        </div>
                        <button class="main__btn" type="button"><span><font>装载更多</font></span></button>
                        <div class="main__box">
                            <h3 class="main__box-title"><font>总览</font></h3>
                            <p class="main__box-text"><font>这是一个长期的事实，读者会</font><b><font>分心</font></b><font>的一个页面的可读内容时，</font><a href="#"><font>看</font></a><font>在它的布局。</font><font>使用Lorem Ipsum的要点是它具有或多或少的字母正态分布。</font></p>
                            <ul class="main__box-list">
                                <li><font>主题森林</font></li>
                                <li><font>图形河</font></li>
                                <li><font>音频丛林</font></li>
                                <li><font>3D海洋</font></li>
                            </ul>
                            <p class="main__box-text"><font>长久以来，当阅读者阅读页面的布局时，他们会被页面的可读内容分散注意力。</font><font>使用Lorem Ipsum的要点是它具有或多或少的字母正态分布。</font></p>
                        </div>
                        <div class="main__box">
                            <h3 class="main__box-title"><font>以来</font></h3>
                            <p class="main__box-text"><font>2004年2月</font></p>
                        </div>
                        <div class="main__box">
                            <h3 class="main__box-title"><font>雇主总数</font></h3>
                            <p class="main__box-text"><font>2308</font></p>
                        </div>
                        <div class="privacy">
                            <h2 class="privacy__title"><font>隐私政策</font></h2>
                            <p class="privacy__text"><font>早已确定的事实是，在查看页面布局时，读者会被页面的可读内容分散注意力。</font><font>使用Lorem Ipsum的要点是，它具有大致的字母正态分布，而不是使用“这里的内容，这里的内容”，使它看起来像可读的英语。</font></p>
                            <p class="privacy__text"><font>现在，许多桌面出版软件包和</font><a href="#"><font>网页</font></a><font>编辑器都使用Lorem Ipsum作为默认模型文本，并且搜索“ lorem ipsum”将发现许多仍处于起步阶段的网站。</font><font>这些年来，各种版本都有所发展，有时是偶然的，有时是故意的（注入幽默等等）。</font></p>
                            <p class="privacy__text"><font></font><b><font>Internet</font></b><font>上的所有Lorem Ipsum生成器都</font><font>倾向于根据需要重复预定义的块，这使其成为Internet上第一个真正的生成器。</font><font>它使用包含200多个拉丁词的字典，结合少量模型句子结构，生成看起来合理的Lorem Ipsum。</font><font>因此，生成的Lorem Ipsum始终没有重复，注入幽默感或非特征性单词等。</font></p>
                            <div class="privacy__list">
                                <ol>
                                    <li>
                                        <h4><font>确定用户的个人信息</font></h4>
                                        <ol>
                                            <li><font>如果您要使用洛雷姆益普森的一段话：
                                                </font><ol>
                                                    <li><font>Internet上的所有Lorem Ipsum生成器都倾向于根据需要重复预定义的块，这使其成为Internet上第一个真正的生成器。</font></li>
                                                    <li><font>它使用包含200多个拉丁词的字典，结合少量模型句子结构，生成看起来合理的Lorem Ipsum。</font><font>因此，生成的Lorem Ipsum始终没有重复，注入幽默感或非特征性单词等。</font></li>
                                                </ol>
                                            </li>
                                            <li><font>Lorem Ipsum的段落有很多变体，但是大多数都因注入幽默感或看起来有些难以置信的随机单词而以某种形式发生了变化。</font></li>
                                            <li><font>现在，许多桌面出版软件包和网页编辑器都使用Lorem Ipsum作为默认模型文本，并且搜索“ lorem ipsum”将发现许多仍处于起步阶段的网站。</font><font>这些年来，各种版本都有所发展，有时是偶然的，有时是故意的（注入幽默等等）。</font></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h4><font>收集和处理用户个人信息的原因</font></h4>
                                        <ol>
                                            <li><font>早已确定的事实是，在查看页面布局时，读者会被页面的可读内容分散注意力。</font><font>使用Lorem Ipsum的要点是它具有或多或少的字母正态分布。</font></li>
                                            <li><font>Internet上的所有Lorem Ipsum生成器都倾向于根据需要重复预定义的块，这使其成为Internet上第一个真正的生成器：
                                                </font><ol>
                                                    <li><font>它不仅生存了五个世纪，而且在电子排版方面也取得了飞跃，基本上保持不变。</font></li>
                                                    <li><font>它在1960年代流行，发行了包含Lorem Ipsum段落的Letraset床单。</font></li>
                                                    <li><font>这些年来，各种版本都有所发展，有时是偶然的，有时是有目的的（注入幽默等）。</font></li>
                                                    <li><font>现在，许多桌面发布程序包和网页编辑器都使用Lorem Ipsum作为其默认模型文本。</font></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="sidebox sidebox--desk">
                            <h4 class="sidebox__title"><font>热门职位</font></h4>
                            <div class="sidebox__content">
                                <div class="sidebox__job">
                                    <div class="sidebox__job-title">
                                        <a href="#"><font>前端开发人员</font></a>
                                        <span><font>$ 25 /小时</font></span>
                                    </div>
                                    <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                                </div>
                                <div class="sidebox__job">
                                    <div class="sidebox__job-title">
                                        <a href="#"><font>UI / UX Designer </font></a>
                                        <span><font>$ 20 /小时</font></span>
                                    </div>
                                    <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                                </div>
                                <div class="sidebox__job">
                                    <div class="sidebox__job-title">
                                        <a href="#"><font>后端开发人员</font></a>
                                        <span><font>$ 27 /小时</font></span>
                                    </div>
                                    <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                                </div>
                                <div class="sidebox__job">
                                    <div class="sidebox__job-title">
                                        <a href="#"><font>领队</font></a>
                                        <span><font>$ 38 /小时</font></span>
                                    </div>
                                    <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                                </div>
                                <div class="sidebox__job">
                                    <div class="sidebox__job-title">
                                        <a href="#"><font>高级Java开发人员</font></a>
                                        <span><font>$ 35 /小时</font></span>
                                    </div>
                                    <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                                </div>
                            </div>
                            <a href="#" class="sidebox__more"><font>查看更多</font></a>
                        </div>
                        <div class="sidebox sidebox--desk">
                            <h4 class="sidebox__title"><font>常问问题</font></h4>
                            <div class="sidebox__content">
                                <div class="sidebox__faq">
                                    <h5><font>发布项目需要付费吗？</font></h5>
                                    <p><font>Workland上的项目每月和每年都有定价计划。</font><font>这是一项付费服务&#8203;&#8203;，我们为雇主和自由职业者提供便利。</font></p>
                                </div>
                                <div class="sidebox__faq">
                                    <h5><font>如何为我的项目找到自由职业者？</font></h5>
                                    <p><font>在Workland上发布项目将使您的项目通过竞标在最有资格的自由职业者和代理机构面前。</font><font>然后，您将获得该项目的投标，包括申请人的详细信息以及为什么最适合该项目的原因。</font><font>您也可以搜索自由职业者并邀请他们申请。</font></p>
                                </div>
                                <div class="sidebox__faq">
                                    <h5><font>我该如何支付自由职业者和代理商的费用？</font></h5>
                                    <p><font>您可以自由地向自由职业者和代理机构付款。</font><font>您可以通过Paypal，Payoneer或（通过信用卡，借记卡付款）自动为其工作付款。</font></p>
                                </div>
                            </div>
                            <a href="#" class="sidebox__more"><font>查看更多</font></a>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
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
<style type="text/css">
    .layout{ border: 1px solid #d7dde4; background: #f5f7f9; position: relative; border-radius: 4px; overflow: hidden; }
    .layout-logo{ width: 100px; height: 30px; background: #5b6270; border-radius: 3px; float: left; position: relative; top: 15px; left: 20px; }
    .layout-nav{ width: 739px; margin: 0 auto; margin-right: 20px; }
    .layout-footer-center{ text-align: center; }
    /*============================== User ==============================*/
    .user { position: relative; margin-bottom: 20px; background-color: #fff; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); }
    .user .user__head { background-color: #3796f6; position: relative; height: 120px; width: 100%; }
    .user .user__img { position: absolute; display: block; width: 130px; height: 130px; background-color: #fff; border-radius: 50%; border: 5px solid #fff; bottom: -65px; left: 50%; margin-left: -65px; overflow: hidden; }
    .user .user__img img { width: 100%; height: auto; }
    .user .user__title { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: center; align-items: center; padding: 75px 20px 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); }
    .user .user__title h2 { font-size: 18px; color: #364e65; font-weight: 600; margin-bottom: 10px; line-height: 100%; }
    .user .user__title p { margin-bottom: 0; line-height: 100%; font-size: 14px; color: #8599ab; font-weight: 400; }
    .user .user__btns { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; padding: 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); border-top: 1px solid rgba(133,153,171,0.2); }
    .user .user__btn { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 40px; width: calc(50% - 10px); border-radius: 4px; font-size: 14px; position: relative; overflow: hidden; color: #fff; font-weight: 600; }
    .user .user__btn:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; opacity: 1; }
    .user .user__btn span { position: relative; z-index: 2; }
    .user .user__btn--blue { background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); }
    .user .user__btn--blue:before { background-color: #3796f6; }
    .user .user__btn--blue:hover { color: #3796f6; }
    .user .user__btn--blue:hover:before { opacity: 0; }
    .user .user__btn--orange { background: linear-gradient(45deg, rgba(250,114,104,0.5) 0%, rgba(250,114,104,0.05) 100%); }
    .user .user__btn--orange:before { background-color: #fa7268; }
    .user .user__btn--orange:hover { color: #fa7268; }
    .user .user__btn--orange:hover:before { opacity: 0; }
    .user .user__stats { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: flex-start; padding: 20px; border: 1px solid rgba(133,153,171,0.2); }
    .user .user__stats li { width: 50%; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: center; align-items: center; }
    .user .user__stats li p { margin-bottom: 5px; line-height: 100%; font-size: 14px; color: #8599ab; }
    .user .user__stats li span { font-size: 24px; line-height: 100%; display: block; color: #364e65; }
    .user .user__stats:last-child { border-radius: 0 0 4px 4px; }
    .user .user__list { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-top: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); padding: 15px 20px; }
    .user .user__list li { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; width: 100%; }
    .user .user__list li span { font-size: 14px; line-height: 28px; color: #8599ab; }
    .user .user__list li span:first-child { color: #364e65; }
    /*============================== more ==============================*/
    .sidebox__more { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); height: 40px; width: 100%; color: #3796f6; font-size: 14px; font-weight: 600; background-color: #fafafa; border-radius: 0 0 4px 4px; }
    .sidebox__more:hover { color: #fa7268; }
    /*============================== Sidebox ==============================*/
    .sidebox { position: relative; margin-bottom: 20px; box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); }
    .sidebox .sidebox__title { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; height: 60px; width: 100%; padding: 0 20px; background-color: #fff; color: #364e65; font-size: 16px; font-weight: 600; border: 1px solid rgba(133,153,171,0.2); margin-bottom: 0; border-radius: 4px 4px 0 0; }
    .sidebox .sidebox__title button { font-size: 12px; font-weight: 400; color: #8599ab; }
    .sidebox .sidebox__title button:hover { color: #3796f6; }
    .sidebox .sidebox__content { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 20px; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); background-color: #fff; }
    .sidebox .sidebox__more { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); height: 40px; width: 100%; color: #3796f6; font-size: 14px; font-weight: 600; background-color: #fafafa; border-radius: 0 0 4px 4px; }
    .sidebox .sidebox__more:hover { color: #fa7268; }
    .sidebox .sidebox__user { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__user:last-child { margin-bottom: 0; }
    .sidebox .sidebox__user-img { display: block; width: 40px; height: 40px; border-radius: 50%; margin-right: 12px; overflow: hidden; }
    .sidebox .sidebox__user-img img { width: 100%; }
    .sidebox .sidebox__user-title h5 { font-size: 14px; color: #364e65; font-weight: 600; margin-bottom: 5px; line-height: 100%; }
    .sidebox .sidebox__user-title h5 a { color: #364e65; }
    .sidebox .sidebox__user-title h5 a:hover { color: #fa7268; }
    .sidebox .sidebox__user-title p { font-size: 13px; color: #8599ab; margin-bottom: 0; line-height: 100%; }
    .sidebox .sidebox__user-btn { display: block; margin-left: auto; color: #8599ab; font-size: 30px; height: 40px; width: auto; line-height: 38px; position: relative;border: 0;background: #fff; }
    .sidebox .sidebox__user-btn:before { content: ''; position: absolute; top: 0; bottom: 0; left: -20px; width: 1px; background-color: rgba(133,153,171,0.2); pointer-events: none; }
    .sidebox .sidebox__user-btn:hover { color: #3796f6; }
    .sidebox .sidebox__job { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__job:last-child { margin-bottom: 0; }
    .sidebox .sidebox__job-title { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 8px; width: 100%; }
    .sidebox .sidebox__job-title a,.sidebox .sidebox__job-title span { font-size: 14px; color: #364e65; font-weight: 600; line-height: 100%; }
    .sidebox .sidebox__job-title a:hover { color: #fa7268; }
    .sidebox .sidebox__job-description { margin-bottom: 0; font-size: 13px; line-height: 19px; color: #8599ab; }
    .sidebox .sidebox__share { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; border: 1px solid rgba(133,153,171,0.2); background-color: #fff; border-radius: 4px; padding: 10px 20px; height: 60px; }
    .sidebox .sidebox__share span { font-size: 14px; font-weight: 400; color: #364e65; }
    .sidebox .sidebox__share ul { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; }
    .sidebox .sidebox__share ul li { margin-right: 15px; }
    .sidebox .sidebox__share ul li:last-child { margin-right: 0; }
    .sidebox .sidebox__share ul li.facebook a { color: #3b5999; }
    .sidebox .sidebox__share ul li.instagram a { color: $clr2; }
    .sidebox .sidebox__share ul li.instagram a i:before { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: $yellow; }
    .sidebox .sidebox__share ul li.twitter a { color: #1da1f2; }
    .sidebox .sidebox__share ul li.vk a { color: #45668e; }
    .sidebox .sidebox__share ul a { font-size: 24px; color: #3796f6; letter-spacing: 0.4px; }
    .sidebox .sidebox__share ul a:hover { color: #fa7268; }
    .sidebox .sidebox__apply { border: 1px solid rgba(133,153,171,0.2); background-color: #fff; border-radius: 4px; padding: 20px; }
    .sidebox .sidebox__faq { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__faq:last-child { margin-bottom: 0; }
    .sidebox .sidebox__faq h5 { font-size: 15px; color: #364e65; font-weight: 600; line-height: 23px; margin-bottom: 7px; }
    .sidebox .sidebox__faq p { margin-bottom: 0; font-size: 13px; line-height: 21px; color: #8599ab; }
    .sidebox .sidebox__nav { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 20px; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); background-color: #fff; border-radius: 0 0 4px 4px; }
    .sidebox .sidebox__nav a { font-size: 14px; color: #364e65; position: relative; }
    .sidebox .sidebox__nav a:before { content: ''; position: absolute; display: block; width: 6px; height: 6px; border-radius: 50%; background-color: #3796f6; pointer-events: none; left: 0; top: 50%; margin-top: -3px; opacity: 0; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); }
    .sidebox .sidebox__nav a:hover,.sidebox .sidebox__nav a.active { color: #3796f6; }
    .sidebox .sidebox__nav a.active { padding-left: 15px; }
    .sidebox .sidebox__nav a.active:before { opacity: 1; }
    .sidebox .sidebox__nav li { margin-bottom: 10px; }
    .sidebox .sidebox__nav li:last-child { margin-bottom: 0; }
    .sidebox .sidebox__nav.filter .filter__label { line-height: 100%; }
    .sidebox .sidebox__search { background-color: #fff; padding: 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); border-bottom: 1px solid rgba(133,153,171,0.2); position: relative; }
    .sidebox .sidebox__search button { position: absolute; height: 40px; color: #8599ab; font-size: 22px; top: 50%; margin-top: -20px; right: 35px; line-height: 42px; }
    .sidebox .sidebox__search button:hover { color: #3796f6; }
    /*============================== Post ==============================*/
    .post { position: relative; padding: 20px; border: 1px solid rgba(133,153,171,0.2); box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); border-radius: 4px; background-color: #fff; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-bottom: 20px; }
    .post .post--clear { padding: 20px 20px 0; }
    .post .post__head { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; position: relative; margin-bottom: 10px; width: 100%; }
    .post .post__head-img { display: block; width: 46px; height: 46px; border-radius: 50%; margin-right: 12px; overflow: hidden; }
    .post .post__head-img img { width: 100%; }
    .post .post__head-title h5 { font-size: 16px; color: #364e65; font-weight: 600; margin-bottom: 6px; line-height: 100%; }
    .post .post__head-title h5 a { color: #364e65; }
    .post .post__head-title h5 a:hover { color: #fa7268; }
    .post .post__head-title p { font-size: 12px; color: #8599ab; margin-bottom: 0; line-height: 100%; }
    .post .post__dropdown { position: absolute; right: 0; top: 0; display: block; }
    .post .post__dropdown.show .post .post__dropdown-btn { color: #3796f6; }
    .post .post__dropdown-btn { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; font-size: 24px; color: #8599ab; line-height: 24px; }
    .post .post__dropdown-btn i { line-height: 24px; }
    .post .post__dropdown-btn:hover { color: #3796f6; }
    .post .post__dropdown-menu { position: absolute; left: auto; right: 0; background-color: #fff; padding: 10px 20px; display: block; width: 100%; width: 140px; text-align: left; z-index: 3; pointer-events: none; opacity: 0; -webkit-transition: 0.4s ease; -moz-transition: 0.4s ease; transition: 0.4s ease; transition-property: opacity, margin; margin-top: 0; top: 100%; border-right: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-bottom: 1px solid rgba(133,153,171,0.2); border-top: 2px solid #3796f6; box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); border-radius: 0 0 4px 4px; }
    .post .post__dropdown-menu li { padding: 0; }
    .post .post__dropdown-menu a { font-size: 14px; color: #364e65; line-height: 36px; display: block; font-weight: 400; }
    .post .post__dropdown-menu a:hover { color: #3796f6; }
    .post .post__dropdown-menu.show { z-index: 1000; pointer-events: auto; opacity: 1; margin-top: 10px; }
    .post .post__wrap { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-bottom: 10px; width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }
    .post .post__company { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-right: 15px; }
    .post .post__company i { font-size: 16px; color: #3796f6; margin-right: 8px; margin-top: 1px; line-height: 24px; }
    .post .post__company span { font-size: 14px; color: #8599ab; line-height: 24px; }
    .post .post__location { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; }
    .post .post__location i { font-size: 18px; color: #5bceae; margin-right: 8px; line-height: 24px; margin-top: 2px; }
    .post .post__location span { font-size: 14px; color: #8599ab; line-height: 24px; }
    .post .post__actions { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-left: auto; width: 100%; margin-top: 13px; }
    .post .post__actions-btn { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 30px; width: 30px; border-radius: 4px; color: #fff; font-size: 18px; margin-right: 15px; position: relative; overflow: hidden; }
    .post .post__actions-btn:before { content: ''; position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; z-index: 1; pointer-events: none; opacity: 1; }
    .post .post__actions-btn i, .post .post__actions-btn span { position: relative; z-index: 2; }
    .post .post__actions-btn--green { background: linear-gradient(45deg, rgba(91,206,174,0.5) 0%, rgba(91,206,174,0.05) 100%); }
    .post .post__actions-btn--green:before { background-color: #5bceae; }
    .post .post__actions-btn--green:hover { color: #5bceae; }
    .post .post__actions-btn--red { background: linear-gradient(45deg, rgba(236,84,122,0.5) 0%, rgba(236,84,122,0.05) 100%); }
    .post .post__actions-btn--red:before { background-color: #ec547a; }
    .post .post__actions-btn--red:hover { color: #ec547a; }
    .post .post__actions-btn--blue { background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); width: auto; padding: 0 10px; font-size: 13px; }
    .post .post__actions-btn--blue:before { background-color: #3796f6; }
    .post .post__actions-btn--blue:hover { color: #3796f6; }
    .post .post__actions-btn:last-child { margin-right: 0; }
    .post .post__actions-btn:hover:before { opacity: 0; }
    .post .post__title { font-size: 18px; font-weight: 600; color: #364e65; margin-bottom: 15px; line-height: 26px; }
    .post .post__options { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-bottom: 15px; }
    .post .post__options span { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 24px; padding: 0 10px; border-radius: 4px; background-color: #3796f6; color: #fff; font-size: 13px; margin-right: 20px; }
    .post .post__options p { margin-bottom: 0; font-size: 14px; line-height: 100%; color: #364e65; font-weight: 600; }
    .post .post__description { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-bottom: 20px; width: 100%; }
    .post .post__description p { font-size: 14px; line-height: 24px; color: #8599ab; margin-bottom: 0; margin-top: 15px; }
    .post .post__description p:first-child { margin-top: 0; }
    .post .post__description ul { font-size: 14px; line-height: 24px; color: #8599ab; margin-top: 15px; }
    .post .post__description ul:first-child { margin-top: 0; }
    .post .post__description ul li { position: relative; padding-left: 20px; }
    .post .post__description ul li:before { content: ''; position: absolute; display: block; width: 4px; height: 4px; border-radius: 50%; background-color: #3796f6; left: 0; top: 50%; margin-top: -2px; }
    .post .post__description a { color: #fa7268; font-weight: 600; font-size: 14px; margin-top: 5px; }
    .post .post__description a:hover { color: #fa7268; text-decoration: underline; }
    .post .post__tags { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px; }
    .post .post__tags a { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 26px; padding: 0 11px; border-radius: 4px; border: 1px solid rgba(133,153,171,0.2); background-color: #fafafa; color: #8599ab; font-size: 13px; margin-right: 15px; margin-bottom: 15px; }
    .post .post__tags a:hover { color: #3796f6; }
    .post .post__stats { width: 100%; border-top: 1px solid rgba(133,153,171,0.2); padding-top: 20px; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: center; }
    .post .post__stats div { font-size: 14px; color: #8599ab; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; line-height: 14px; }
    .post .post__stats div i { margin-right: 7px; font-size: 16px; line-height: 14px; }
    .post .post__stats div span { margin-bottom: 3px; }
    .post .post__stats div .post .post__likes i { margin-bottom: 1px; }
    .post .post__stats div.post .post__views i { font-size: 18px; }
    .post .post__stats div.post .post__views span { margin-bottom: 1px; }
    .post .post__stats a { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; margin-right: 20px; color: #8599ab; }
    .post .post__stats a i { -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; }
    .post .post__stats a:last-child { margin-right: 0; }
    .post .post__likes:hover i { color: #ec547a; }
    .post .post__comments:hover i { color: #3796f6; }
    .post .post__comments[aria-expanded="true"] i { color: #3796f6; }
    .post .post__collapse { width: 100%; position: relative; }
    .post .post__form { border-top: 1px solid rgba(133,153,171,0.2); margin-top: 20px; padding-top: 20px; position: relative; display: block; }
    .post .post__form input { width: calc(100% - 60px); height: 40px; border-radius: 4px; background-color: #fafafa; border: 1px solid rgba(133,153,171,0.2); font-size: 14px; color: #364e65; padding: 0 20px; }
    .post .post__form input:focus { border-color: #3796f6; }
    .post .post__form button { position: absolute; height: 40px; width: 40px; color: #fff; font-size: 20px; top: 20px; right: 0; background-color: #3796f6; border-radius: 4px; background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); overflow: hidden; }
    .post .post__form button:before { content: ''; position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; z-index: 1; pointer-events: none; opacity: 1; background-color: #3796f6; }
    .post .post__form button i { position: relative; z-index: 2; }
    .post .post__form button:hover { color: #3796f6; }
    .post .post__form button:hover:before { opacity: 0; }
    .post .post__comment { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; position: relative; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin-top: 20px; width: 100%; }
    .post .post__comment-img { display: block; width: 40px; height: 40px; border-radius: 50%; margin-right: 12px; overflow: hidden; }
    .post .post__comment-img img { width: 100%; }
    .post .post__comment-title h5 { font-size: 14px; color: #364e65; font-weight: 600; margin-bottom: 5px; line-height: 100%; }
    .post .post__comment-title h5 a { color: #364e65; }
    .post .post__comment-title h5 a:hover { color: #fa7268; }
    .post .post__comment-title p { font-size: 12px; color: #8599ab; margin-bottom: 0; line-height: 100%; }
    .post .post__comment-text { display: block; margin-top: 10px; width: 100%; margin-bottom: 0; font-size: 14px; line-height: 24px; color: #8599ab; }
    .post .post__apply { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; width: 140px; height: 40px; background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); color: #fff; font-size: 13px; border-radius: 4px; letter-spacing: 0.4px; text-transform: uppercase; font-weight: 600; position: relative; overflow: hidden; margin-bottom: 20px; }
    .post .post__apply:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #3796f6; z-index: 1; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; opacity: 1; }
    .post .post__apply span { position: relative; z-index: 2; }
    .post .post__apply:hover { color: #3796f6; }
    .post .post__apply:hover:before { opacity: 0; }
    /*============================== main btn ==============================*/
    .main__btn { display: block; width: 140px; height: 40px; background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); color: #fff; font-size: 13px; border-radius: 4px; letter-spacing: 0.4px; text-transform: uppercase; font-weight: 600; position: relative; overflow: hidden; margin: 40px auto 20px; }
    .main__btn:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #3796f6; z-index: 1; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; opacity: 1; }
    .main__btn span { position: relative; z-index: 2; }
    .main__btn:hover { color: #3796f6; }
    .main__btn:hover:before { opacity: 0; }
    .main__btn--margin { margin: 10px auto 20px; }
    .main__nav { position: relative; margin-bottom: 20px; background-color: #fff; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); border: 1px solid rgba(133,153,171,0.2); display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; padding: 0 0 0 20px; }
    .main__nav a { position: relative; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 60px; width: auto; font-size: 14px; color: #364e65; }
    .main__nav a:before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; display: block; background-color: #3796f6; -webkit-transition: 0.4s ease; -moz-transition: 0.4s ease; transition: 0.4s ease; -webkit-transform: translateY(2px); -moz-transform: translateY(2px); transform: translateY(2px); opacity: 0; box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); }
    .main__nav a.active:before { opacity: 1; -webkit-transform: translateY(0); -moz-transform: translateY(0); transform: translateY(0); }
    .main__nav li { margin-right: 30px; }
    .main__nav li:last-child { margin-right: 0; }
    .main__box { position: relative; padding: 20px; border: 1px solid rgba(133,153,171,0.2); box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); border-radius: 4px; background-color: #fff; margin-bottom: 20px; }
    .main__box .post__tags { margin-bottom: -15px; }
    .main__box-title { display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: space-between; align-items: flex-start; height: 40px; line-height: 100%; font-size: 16px; font-weight: 600; color: #364e65; margin-bottom: 20px; border-bottom: 1px solid rgba(133,153,171,0.2); padding-top: 2px; }
    .main__box-text { font-size: 14px; line-height: 24px; color: #364e65; margin-bottom: 20px; }
    .main__box-text:last-child { margin-bottom: 0; }
    .main__box-text span { color: #8599ab; font-size: 12px; }
    .main__box-text b { font-weight: 600; }
    .main__box-text a { color: #3796f6; }
    .main__box-text a:hover { color: #fa7268; text-decoration: underline; }
    .main__box-list { font-size: 14px; line-height: 24px; color: #364e65; margin-bottom: 20px; }
    .main__box-list li { position: relative; padding-left: 15px; }
    .main__box-list li:before { content: ''; position: absolute; left: 0; top: 50%; width: 4px; height: 4px; border-radius: 50%; background-color: #3796f6; margin-top: -1px; box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); }
    .main__box-list:last-child { margin-bottom: 0; }
    .main__box-list b { font-weight: 600; }
    .main__box-list a { color: #3796f6; }
    .main__box-list a:hover { color: #fa7268; text-decoration: underline; }
    /*============================== Filter ==============================*/
    .filter { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); background-color: #fff; border-radius: 0 0 4px 4px; }
    .filter .filter__group { display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -moz-box-direction: column; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 20px; width: 100%; border-bottom: 1px solid rgba(133,153,171,0.2); }
    .filter .filter__group:last-child { border-bottom: none; }
    .filter .filter__group--last { padding: 20px 20px 0; border-bottom: none; }
    .filter .filter__label { font-size: 13px; color: #8599ab; font-weight: normal; margin-bottom: 10px; }
    .filter .filter__select-wrap { position: relative; width: 100%; }
    .filter .filter__select-wrap:before { content: 'ïŠ€'; font-family: 'Ionicons'; position: absolute; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: center; align-items: center; height: 40px; width: 15px; color: #8599ab; font-size: 18px; pointer-events: none; top: 0; right: 15px; }
    .filter .filter__select { width: 100%; height: 40px; border-radius: 4px; background-color: #fafafa; border: 1px solid rgba(133,153,171,0.2); font-size: 14px; color: #364e65; padding: 0 15px; cursor: pointer; }
    .filter .filter__select option { padding: 0; }
    .filter .filter__select:focus { border-color: #3796f6; }
    .filter .filter__input { width: 100%; height: 40px; border-radius: 4px; background-color: #fafafa; border: 1px solid rgba(133,153,171,0.2); font-size: 14px; color: #364e65; padding: 0 15px; }
    .filter .filter__input:focus { border-color: #3796f6; }
    .filter .filter__checkboxes { position: relative; }
    .filter .filter__checkboxes li { position: relative; margin-bottom: 15px; }
    .filter .filter__checkboxes li:last-child { margin-bottom: 0; }
    .filter .filter__checkboxes input:not(:checked),.filter .filter__checkboxes input:checked { position: absolute; left: -9999px; }
    .filter .filter__checkboxes label { display: block; margin: 0; position: relative; font-weight: 400; cursor: pointer; font-size: 14px; color: #364e65; line-height: 16px; padding-left: 25px; }
    .filter .filter__checkboxes label:before { content: ''; display: block; position: absolute; width: 16px; height: 16px; border: 4px solid rgba(133,153,171,0.4); background-color: transparent; border-radius: 50%; left: 0; top: 0; -webkit-transition: 0.4s ease; -moz-transition: 0.4s ease; transition: 0.4s ease; }
    .filter .filter__checkboxes input:checked + label:before { border-color: #3796f6; box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); }
    .filter .filter__range { font-size: 14px; color: #364e65; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -moz-box-direction: row; flex-direction: row; justify-content: flex-start; align-items: center; position: relative; margin-bottom: 5px; background-color: #fafafa; border: 1px solid rgba(133,153,171,0.2); height: 30px; padding: 0 12px; border-radius: 4px; }
    .filter .filter__range div { position: relative; }
    .filter .filter__range div:first-child { margin-right: 17px; }
    .filter .filter__range div:first-child:after { content: 'â€“'; position: absolute; display: block; left: 100%; top: 0; color: #364e65; font-size: 16px; margin-left: 4px; }
    .filter .filter__btn { width: 100%; height: 40px; background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); color: #fff; font-size: 13px; border-radius: 4px; letter-spacing: 0.4px; text-transform: uppercase; font-weight: 600; position: relative; overflow: hidden; }
    .filter .filter__btn:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #3796f6; z-index: 1; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; opacity: 1; }
    .filter .filter__btn span { position: relative; z-index: 2; }
    .filter .filter__btn:hover { color: #3796f6; }
    .filter .filter__btn:hover:before { opacity: 0; }
</style>
