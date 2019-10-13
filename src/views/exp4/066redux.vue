<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">状态管理::一个面向JavaScript应用的可预测状态容器</div>
            <div class="blogContent" v-highlight>
                <p>State是整个应用的数据，本质上是一个普通对象。</p>
                <blockquote>State决定了整个应用的组件如何渲染，渲染的结果是什么。可以说，State是应用的灵魂，组件是应用的肉体。</blockquote>
                <p>所有的页面元素 ui 变量 ajax 缓存 等有意义可变逻辑统统可以保存为 <code>State (状态)</code></p>
                <p>请注意，并不强制要求所有的数据都保存到State中，有些属于组件的数据是完全可以留给组件自身去维护的。</p>
                <blockquote>Redux是JavaScript状态容器，提供可预测化的状态管理。</blockquote>
                <p>注意，redux的集成是非必选的。你可能会对redux的编程方式感到无所适从。</p>
                <p>所谓的数据单向流动，顾名思义，就是数据是从一个方向传播下去的意思。</p>
                <p>明显区别与双向数据绑定</p>
                <p>假设数据中心是一个负责发行身份证的地方政府，每个人都可以到这里来领取自己的身份证，但是如果你对自己的身份证头像不满意，你不能自己去村口拍个十块钱的大头贴贴上去，也不能自己修改上面的个人信息，这样的身份证是不被承认的（弄不好可能还得坐牢），正确的操作方式应该是，带着你的修改意见，去到地方政府，找相关工作人员帮你重新办理，办理完之后再发放给你。</p>
                <p><b>store</b> 是redux提供的<b>唯一数据源</b>，它存储了整个应用的state，并且提供了获取state的方法，即store.getState()。</p>
                <h4><b>store</b> 通俗理解为 数据仓库/缓存/内存 或者 “你在这里”</h4>
                <p><b>store</b> 是<b>只读</b>的。</p>
                <p><b>type</b> 名字替换 目的是为了更方便的取用参数以及减少因为缺少字母导致的小问题(代码检查且会报错)。</p>
                <p><b>action</b> 是一个用于描述已发生事件的普通对象。</p>
                <p><b>action</b> 通俗理解为 动作名称/行为名称 或者 “你干了一件什么事情”</p>
                <p><b>action</b> 单单讲了你干的事情，我们并不知道你干的这件事产生了什么牛逼效果</p>
                <p><b>reducer</b> 接收state和action，并返回新的state 一个专门负责描述某个行动对应产生某种效果的机构</p>
                <blockquote>reducer 一定要保持纯净，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。 ——redux官方文档</blockquote>
                <p>注意这些是不可动态配置修改的</p>
                <p><b>dispatch</b> 暴露的唯一api 触发某个行为action</p>
                <p>现在</p>
                <p>先定义好我们即将做的事情，也就是定义一个action，跟着，我们需要相对应地补充我们做的这件事要怎么影响数据源，于是我们根据这个action补充了一个reducer，最后我们触发这个action：store.dispatch(action)，数据源就会根据reducer定义好的规则来更新自己了。</p>
                <p>比喻来了 我在学校(store生效环境) 学校规定上课提问要举手(type定义"举手") 我想上厕所(定义action行为 请求上厕所) 所以举手(定义/注册 reducer 中举手关联请求上厕所) 于是我开始行动(dispatch) 举起手来 请求 被允许 尿遁</p>
                <p>我调用一个方法处理 逻辑A</p>
                <p>额外的需求 第三方作者在 逻辑A的前后加上了console.log 逻辑B</p>
                <p>暴露给我的依然是这个方法</p>
                <p>逻辑B 就是中间件代码</p>
                <p>而第三方作者加入逻辑B的方式就是中间件</p>
                <p><b>redux-saga</b> 是一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的 library，它的目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易。</p>
                <p>redux-saga 使用了 ES6 的 Generator 功能，让异步的流程更易于读取，写入和测试。</p>
                <p>比喻来了 我在学校(store生效环境) 学校规定上课提问要举手(type定义"举手") 我想上厕所(定义action行为 请求上厕所) 所以举手(定义/注册 reducer 中举手关联请求上厕所) 于是我开始行动(dispatch) 举起手来 请求 被允许 尿遁</p>
                <p>在我举手的时候 清洁工就在窗户外看到了我(sagas 监听) 不管我举手以后的行为如何 他都会做一件事 把厕所门前打扫干净</p>
                <p>Reselect用来记忆selectors的库.我们定义的selectors是作为函数获取Redux state的某一部分.使用记忆能力,我们可以组织不必要的衍生数据的重渲染和计算过程,由此加速了我们的app.</p>
                <p>比喻来了 我在学校(store生效环境) 学校规定上课提问要举手(type定义"举手") 我想上厕所(定义action行为 请求上厕所) 所以举手(定义/注册 reducer 中举手关联请求上厕所) 于是我开始行动(dispatch) 举起手来 请求 被允许 尿遁</p>
                <p>在我举手的时候 清洁工就在窗户外看到了我(sagas 监听) 不管我举手以后的行为如何 他都会做一件事 把厕所门前打扫干净</p>
                <p><del>清洁工在我上完厕所后重新打扫卫生 整个厕所都扫一遍累死了</del></p>
                <p>清洁工在我上完厕所后重新打扫卫生 但只扫我弄脏的那块就行了(Reselect)</p>
                <p>redux-thunk 是一个比较流行的 redux 异步 action 中间件，比如 action 中有 ****setTimeout**** 或者通过 ****fetch****通用远程 API 这些场景，那么久应该使用 redux-thunk 了。redux-thunk 帮助你统一了异步和同步 action 的调用方式，把异步过程放在 action 级别解决，对 component 没有影响。</p>
                <p>比喻来了 我在学校(store生效环境) 学校规定上课提问要举手(type定义"举手") 我想上厕所(定义action行为 请求上厕所) 所以举手(定义/注册 reducer 中举手关联请求上厕所) 于是我开始行动(dispatch) 举起手来 请求 被允许 尿遁</p>
                <p>在我举手的时候 清洁工就在窗户外看到了我(sagas 监听) 不管我举手以后的行为如何 他都会做一件事 把厕所门前打扫干净</p>
                <p><del>我上厕所的同时又有一个人来上厕所 我比较快 我走出厕所后清洁工就开始重新打扫卫生 整个厕所都扫一遍 把那个人也给扫了</del></p>
                <p>我上厕所的同时又有一个人来上厕所 我比较快 我走出厕所后稍等另一人也出来了清洁工就开始重新打扫卫生 整个厕所都扫一遍</p>
                <script type="text/js">
                    // # types #
                    // config.js
                    export const APPID = 'APPID'; // appid
                    export const NAME = 'NAME'; // name
                    export const VERSION = 'VERSION'; // version
                    export const ENVIRONMENT = 'ENVIRONMENT'; // 当前环境
                    export const IMGROOT = 'IMGROOT'; // imgroot
                    export const SYS = 'SYS'; // sys
                    export const COOKIES = 'COOKIES';  // cookies
                    export const SESSIONID = 'SESSIONID';  // sessionId
                    export const PHONEHEIGHT  = 'PHONEHEIGHT';  // your phone screen height
                    // index.js
                    export * from './config';
                </script>
                <script type="text/js">
                    // # reducers #
                    // config.js
                    import { handleActions } from 'redux-actions';
                    import { APPID } from '../types/config';
                    const defaultState = { appid: '' };
                    export default handleActions({
                        [APPID](state, action) {
                            return {
                                ...state,
                                appid: action.payload || action.val
                            };
                        }
                    }
                    // index.js
                    import config from './config';
                    export default combineReducers({
                        config,
                        global,
                        userInfo
                    });
                </script>
                <script type="text/js">
                    // # actions #
                    // config.js
                    import { SESSIONID } from '../types/config';
                    import { createAction } from 'redux-actions';
                    export const setSessionId = createAction(SESSIONID, data => {
                        return data;
                    });
                    // index.js
                    export * from './config';
                </script>
                <script type="text/js">
                    // # sagas #
                    // config.js
                    import wepy from 'wepy';
                    import { effects } from 'redux-saga/dist/redux-saga';
                    import * as Types from '../types';
                    import { setAppId, setName, setVersion, setEnvironment } from '../actions';
                    const { put, takeLatest } = effects;
                    function* changeEnvironment() {
                        try {
                            let extConfig = yield wepy.getExtConfig();
                            if (extConfig) {
                                let extConfigInfo = extConfig.extConfig;
                                yield put(setAppId(extConfigInfo.appid));
                                yield put(setName(extConfigInfo.name));
                                yield put(setVersion(extConfigInfo.version));
                                yield put(setEnvironment(extConfigInfo.appid));
                            } else {
                                throw new Error('获取第三方平台自定义数据失败！');
                            }
                        } catch (err) {
                            throw new Error(err);
                        }
                    }
                    export default function* config() {
                        yield takeLatest(Types.SETAPPID, changeEnvironment);
                    }
                    // index.js
                    import config from './config';
                    import global from './global';
                    import pageModules from './pageModules';
                    const rootSaga = [config, global, pageModules];
                    export default rootSaga;
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
