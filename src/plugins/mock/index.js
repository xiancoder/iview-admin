import Mock from 'mockjs'

// import { logout } from './login'
// import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData } from './data'
// import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'
// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({ timeout: 1000 })
const Random = Mock.Random
Mock.mock(/mock\/data\/tabledata/, req => {
    const tableData = Mock.mock({
        'list|5': [{
            name: '@name',
            email: '@email',
            createTime: '@date'
        }]
    });
    return tableData.list
})
Mock.mock(/mock\/data\/draglist/, req => {
    const tableData = Mock.mock({
        'list|5': [{
            name: Random.csentence(10, 13),
            id: Random.increment(10)
        }]
    });
    return tableData.list
})
Mock.mock(/mock\/image\/upload/, req => {
    return Promise.resolve()
})
Mock.mock(/mock\/data\/error/, req => {
    return Promise.resolve()
})

Mock.mock(/api\/meeting\/today/, req => {
    return {'code': 200, 'data': {'list': [
        {roomName: '葫芦娃团操室', begin: '2020-4-15 10:00', end: '2020-4-15 11:00', show: true, mainContent: '研究怎么着逃课', content: '闲的蛋疼的不行'},
        {roomName: '东风歌舞厅', begin: '2020-4-16 18:00', end: '2020-4-16 22:00', show: true, mainContent: '研究怎么着逃课', content: '闲的蛋疼的不行'}
    ]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/info/, req => {
    return {'code': 200, 'data': {'list': [{'roomId': 1, 'roomName': '天时歌舞厅', 'status': 1, 'count': 8, 'mainContent': null, 'equipment': '接线板、激光电视', 'meeting': [{'id': 23, 'roomId': 1, 'status': 1, 'begin': '10:00', 'end': '12:00', 'userName': '余额满云'}]}, {'roomId': 2, 'roomName': '地利歌舞厅', 'status': 1, 'count': 10, 'mainContent': null, 'equipment': '接线板，投影，的撒板', 'meeting': [{'id': 20, 'roomId': 2, 'status': 1, 'begin': '09:35', 'end': '10:30', 'userName': '林聪聪'}]}, {'roomId': 3, 'roomName': '人和歌舞厅', 'status': 1, 'count': 10, 'mainContent': null, 'equipment': '接线板、的撒板、幕布', 'meeting': []}, {'roomId': 4, 'roomName': '东风歌舞厅', 'status': 1, 'count': 14, 'mainContent': null, 'equipment': '接线板、电视、的撒板', 'meeting': [{'id': 24, 'roomId': 4, 'status': 1, 'begin': '10:20', 'end': '10:25', 'userName': '赵涵'}]}, {'roomId': 5, 'roomName': '接待室', 'status': 1, 'count': 6, 'mainContent': null, 'equipment': '电视、的撒板', 'meeting': []}, {'roomId': 6, 'roomName': '葫芦娃健身厅', 'status': 1, 'count': 40, 'mainContent': null, 'equipment': '接线板、电视、的撒板、话筒、音响', 'meeting': [{'id': 25, 'roomId': 6, 'status': 1, 'begin': '10:30', 'end': '11:30', 'userName': '赵涵'}]}]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/user_list/, req => {
    return {'code': 200, 'data': {'list': [{'id': 13, 'onlyId': 0, 'name': '岳云鹏', 'email': 'liugod@360.cn', 'emailStr': 'liugod', 'type': 0}, {'id': 15, 'onlyId': 0, 'name': '赵瑶瑶', 'email': 'zhaoyaoyao@51baidu.com', 'emailStr': 'zhaoyaoyao', 'type': 0}, {'id': 16, 'onlyId': 0, 'name': '写硕', 'email': 'jiangshuo@360.cn', 'emailStr': 'jiangshuo', 'type': 0}, {'id': 17, 'onlyId': 0, 'name': '门月', 'email': 'wangyue@51baidu.com', 'emailStr': 'wangyue', 'type': 0}, {'id': 18, 'onlyId': 0, 'name': '历代一山', 'email': 'zhangshibo@360.cn', 'emailStr': 'zhangshibo', 'type': 0}, {'id': 20, 'onlyId': 0, 'name': '韩霄冲', 'email': 'hanxiaochong@360.cn', 'emailStr': 'hanxiaochong', 'type': 0}, {'id': 21, 'onlyId': 0, 'name': '大老二', 'email': 'zhanghongling@360.cn', 'emailStr': 'zhanghongling', 'type': 0}, {'id': 23, 'onlyId': 0, 'name': '董素言', 'email': 'dongsuyan@360.cn', 'emailStr': 'dongsuyan', 'type': 0}, {'id': 24, 'onlyId': 0, 'name': '的撒建磊', 'email': 'baijianlei@360.cn', 'emailStr': 'baijianlei', 'type': 0}, {'id': 28, 'onlyId': 0, 'name': '赵涵', 'email': 'zhaohan@360.cn', 'emailStr': 'zhaohan', 'type': 0}, {'id': 29, 'onlyId': 0, 'name': '韩帅', 'email': 'hanshuai@51baidu.com', 'emailStr': 'hanshuai', 'type': 0}, {'id': 31, 'onlyId': 0, 'name': '加策', 'email': 'guoce@360.cn', 'emailStr': 'guoce', 'type': 0}, {'id': 37, 'onlyId': 0, 'name': '褚亚儒', 'email': 'chuyaru@baidu.com', 'emailStr': 'chuyaru', 'type': 0}, {'id': 43, 'onlyId': 0, 'name': '大少华', 'email': 'yangshaohua@baidu.com', 'emailStr': 'yangshaohua', 'type': 0}, {'id': 51, 'onlyId': 0, 'name': '门月贞', 'email': 'wangyuezhen@baidu.com', 'emailStr': 'wangyuezhen', 'type': 0}, {'id': 54, 'onlyId': 0, 'name': '陶聪瑜', 'email': 'taocongyu@baidu.com', 'emailStr': 'taocongyu', 'type': 0}, {'id': 55, 'onlyId': 0, 'name': '栈芳', 'email': 'liufang@baidu.com', 'emailStr': 'liufang', 'type': 0}, {'id': 56, 'onlyId': 0, 'name': '司徒云', 'email': 'liyun@baidu.com', 'emailStr': 'liyun', 'type': 0}, {'id': 57, 'onlyId': 0, 'name': '栈畅', 'email': 'liuchang@baidu.com', 'emailStr': 'liuchang', 'type': 0}, {'id': 59, 'onlyId': 0, 'name': '路大大', 'email': 'luyangyang@360.cn', 'emailStr': 'luyangyang', 'type': 0}, {'id': 60, 'onlyId': 0, 'name': '历代国靖', 'email': 'zhangguojing@51baidu.com', 'emailStr': 'zhangguojing', 'type': 0}, {'id': 61, 'onlyId': 0, 'name': '周朔', 'email': 'zhoushuo@360.cn', 'emailStr': 'zhoushuo', 'type': 0}, {'id': 62, 'onlyId': 0, 'name': '历代大阔', 'email': 'zhangdakuo@360.cn', 'emailStr': 'zhangdakuo', 'type': 0}, {'id': 63, 'onlyId': 0, 'name': '丁士鹏', 'email': 'dingshipeng@360.cn', 'emailStr': 'dingshipeng', 'type': 0}, {'id': 64, 'onlyId': 0, 'name': '传参静静', 'email': 'zhaijing@360.cn', 'emailStr': 'zhaijing', 'type': 0}, {'id': 65, 'onlyId': 0, 'name': '额外雅娜', 'email': 'fengyana@360.cn', 'emailStr': 'fengyana', 'type': 0}, {'id': 70, 'onlyId': 0, 'name': '33俊革', 'email': 'shijunge@baidu.com', 'emailStr': 'shijunge', 'type': 0}, {'id': 83, 'onlyId': 0, 'name': '郝迎雪', 'email': 'haoyingxue@baidu.com', 'emailStr': 'haoyingxue', 'type': 0}, {'id': 85, 'onlyId': 0, 'name': '栈二表', 'email': 'liuerbiao@360.cn', 'emailStr': 'liuerbiao', 'type': 0}, {'id': 86, 'onlyId': 0, 'name': '历代忠良', 'email': 'zhangzhongliang@360.cn', 'emailStr': 'zhangzhongliang', 'type': 0}, {'id': 89, 'onlyId': 0, 'name': '淡定玉强', 'email': 'wuyuqiang@51baidu.com', 'emailStr': 'wuyuqiang', 'type': 0}, {'id': 90, 'onlyId': 0, 'name': '在现场云岩', 'email': 'huangyunyan@51baidu.com', 'emailStr': 'huangyunyan', 'type': 0}, {'id': 91, 'onlyId': 0, 'name': '特斌', 'email': 'qiubin@360.cn', 'emailStr': 'qiubin', 'type': 0}, {'id': 93, 'onlyId': 0, 'name': '历代子枫', 'email': 'lizhongkai@360.cn', 'emailStr': 'lizhongkai', 'type': 0}, {'id': 94, 'onlyId': 0, 'name': '段兵宇', 'email': 'duanbingyu@360.cn', 'emailStr': 'duanbingyu', 'type': 0}, {'id': 95, 'onlyId': 0, 'name': 'QQ玉昭', 'email': 'xuyuzhao@360.cn', 'emailStr': 'xuyuzhao', 'type': 0}, {'id': 96, 'onlyId': 0, 'name': '加德纲', 'email': 'qilongjie@360.cn', 'emailStr': 'qilongjie', 'type': 0}, {'id': 98, 'onlyId': 0, 'name': '司徒小坡', 'email': 'lixiaopo@360.cn', 'emailStr': 'lixiaopo', 'type': 0}, {'id': 99, 'onlyId': 0, 'name': '司徒美莲', 'email': 'limeilian@360.cn', 'emailStr': 'limeilian', 'type': 0}, {'id': 100, 'onlyId': 0, 'name': '传参星星', 'email': 'zhaixingxing@360.cn', 'emailStr': 'zhaixingxing', 'type': 0}, {'id': 101, 'onlyId': 0, 'name': '加杰璠', 'email': 'guojiefan@360.cn', 'emailStr': 'guojiefan', 'type': 0}, {'id': 102, 'onlyId': 0, 'name': '门莹娟', 'email': 'wangyingjuan@baidu.com', 'emailStr': 'wangyingjuan', 'type': 0}, {'id': 103, 'onlyId': 0, 'name': '门文聪', 'email': 'wangwencong@baidu.com', 'emailStr': 'wangwencong', 'type': 0}, {'id': 104, 'onlyId': 0, 'name': '历代佳欣', 'email': 'zhangjiaxin@baidu.com', 'emailStr': 'zhangjiaxin', 'type': 0}, {'id': 106, 'onlyId': 0, 'name': '栈美', 'email': 'liumei@baidu.com', 'emailStr': 'liumei', 'type': 0}, {'id': 108, 'onlyId': 0, 'name': '秦霄贤', 'email': 'wanbaoling@baidu.com', 'emailStr': 'wanbaoling', 'type': 0}, {'id': 120, 'onlyId': 0, 'name': '低翔', 'email': 'gaoxiang@baidu.com', 'emailStr': 'gaoxiang', 'type': 0}, {'id': 121, 'onlyId': 0, 'name': '司徒静', 'email': 'lijing@360.cn', 'emailStr': 'lijing', 'type': 0}, {'id': 122, 'onlyId': 0, 'name': '司徒航', 'email': 'lihang@360.cn', 'emailStr': 'lihang', 'type': 0}, {'id': 125, 'onlyId': 0, 'name': '门梦昭', 'email': 'wangmengzhao@baidu.com', 'emailStr': 'wangmengzhao', 'type': 0}, {'id': 128, 'onlyId': 0, 'name': '历代硕', 'email': 'zhangshuo@baidu.com', 'emailStr': 'zhangshuo', 'type': 0}, {'id': 142, 'onlyId': 0, 'name': '额额飞飞', 'email': 'pengfeifei@51baidu.com', 'emailStr': 'pengfeifei', 'type': 0}, {'id': 144, 'onlyId': 0, 'name': '低文君', 'email': 'gaowenjun@baidu.com', 'emailStr': 'gaowenjun', 'type': 0}, {'id': 146, 'onlyId': 0, 'name': '门东旭', 'email': 'wangdongxu@baidu.com', 'emailStr': 'wangdongxu', 'type': 0}, {'id': 147, 'onlyId': 0, 'name': '贺英灿', 'email': 'heyingcan@baidu.com', 'emailStr': 'heyingcan', 'type': 0}, {'id': 151, 'onlyId': 0, 'name': '孙鹤', 'email': 'sunhe@baidu.com', 'emailStr': 'sunhe', 'type': 0}, {'id': 153, 'onlyId': 0, 'name': '鑫佳佳', 'email': 'majiajia@51baidu.com', 'emailStr': 'majiajia', 'type': 0}, {'id': 156, 'onlyId': 0, 'name': '额额璇', 'email': 'pengxuan@baidu.com', 'emailStr': 'pengxuan', 'type': 0}, {'id': 160, 'onlyId': 0, 'name': '大颖颖', 'email': 'yangying@baidu.com', 'emailStr': 'yangying', 'type': 0}, {'id': 163, 'onlyId': 0, 'name': '郝素花', 'email': 'haosuhua@baidu.com', 'emailStr': 'haosuhua', 'type': 0}, {'id': 164, 'onlyId': 0, 'name': '鑫文岩', 'email': 'mawenyan@baidu.com', 'emailStr': 'mawenyan', 'type': 0}, {'id': 165, 'onlyId': 0, 'name': '哈喽', 'email': 'fujunmin@360.cn', 'emailStr': 'fujunmin', 'type': 0}, {'id': 166, 'onlyId': 0, 'name': '余额满云', 'email': 'chenmanyun@baidu.com', 'emailStr': 'chenmanyun', 'type': 0}, {'id': 167, 'onlyId': 0, 'name': '栈红景', 'email': 'liuhongjing@baidu.com', 'emailStr': 'liuhongjing', 'type': 0}, {'id': 170, 'onlyId': 0, 'name': 'uu崇坤', 'email': 'yanchongkun@360.cn', 'emailStr': 'yanchongkun', 'type': 0}, {'id': 174, 'onlyId': 0, 'name': '门权', 'email': 'wangquan@360.cn', 'emailStr': 'wangquan', 'type': 0}, {'id': 176, 'onlyId': 0, 'name': '贾凯旋', 'email': 'jiakaixuan@baidu.com', 'emailStr': 'jiakaixuan', 'type': 0}, {'id': 177, 'onlyId': 0, 'name': '赵诚', 'email': 'zhaocheng@baidu.com', 'emailStr': 'zhaocheng', 'type': 0}, {'id': 178, 'onlyId': 0, 'name': '栈媛媛', 'email': 'liuyuanyuan@baidu.com', 'emailStr': 'liuyuanyuan', 'type': 0}, {'id': 186, 'onlyId': 0, 'name': '车彩利', 'email': 'checaili@baidu.com', 'emailStr': 'checaili', 'type': 0}, {'id': 197, 'onlyId': 0, 'name': '门鹍', 'email': 'wangkun@baidu.com', 'emailStr': 'wangkun', 'type': 0}, {'id': 199, 'onlyId': 0, 'name': '鑫江萌', 'email': 'majiangmeng@baidu.com', 'emailStr': 'majiangmeng', 'type': 0}, {'id': 200, 'onlyId': 0, 'name': '赵南', 'email': 'zhaonan@baidu.com', 'emailStr': 'zhaonan', 'type': 0}, {'id': 205, 'onlyId': 0, 'name': '霍妙璇', 'email': 'huomiaoxuan@baidu.com', 'emailStr': 'huomiaoxuan', 'type': 0}, {'id': 206, 'onlyId': 0, 'name': '门佳子', 'email': 'wangjiazi@baidu.com', 'emailStr': 'wangjiazi', 'type': 0}, {'id': 207, 'onlyId': 0, 'name': '林聪聪', 'email': 'yaocongcong@baidu.com', 'emailStr': 'yaocongcong', 'type': 0}, {'id': 210, 'onlyId': 0, 'name': '吴麟', 'email': 'wulin@360.cn', 'emailStr': 'wulin', 'type': 0}, {'id': 211, 'onlyId': 0, 'name': '栈静', 'email': 'liujing@baidu.com', 'emailStr': 'liujing', 'type': 0}, {'id': 212, 'onlyId': 0, 'name': '门阿香', 'email': 'wangaxiang@baidu.com', 'emailStr': 'wangaxiang', 'type': 0}, {'id': 213, 'onlyId': 0, 'name': '大平', 'email': 'yangping@360.cn', 'emailStr': 'yangping', 'type': 0}, {'id': 214, 'onlyId': 0, 'name': '贾雅璇', 'email': 'jiayaxuan@baidu.com', 'emailStr': 'jiayaxuan', 'type': 0}, {'id': 215, 'onlyId': 0, 'name': '余额雷涛', 'email': 'chenleitao@360.cn', 'emailStr': 'chenleitao', 'type': 0}, {'id': 216, 'onlyId': 0, 'name': '人力资源行政管理中心', 'email': 'yxhrac@baidu.com', 'emailStr': 'yxhrac', 'type': 0}, {'id': 217, 'onlyId': 0, 'name': '的撒玲', 'email': 'bailing@baidu.com', 'emailStr': 'bailing', 'type': 0}, {'id': 218, 'onlyId': 0, 'name': '贾文浩', 'email': 'jiawenhao@baidu.com', 'emailStr': 'jiawenhao', 'type': 0}, {'id': 220, 'onlyId': 0, 'name': '曹雅倩', 'email': 'caoyaqian@baidu.com', 'emailStr': 'caoyaqian', 'type': 0}, {'id': 221, 'onlyId': 0, 'name': '孙浩', 'email': 'sunhao@360.cn', 'emailStr': 'sunhao', 'type': 0}, {'id': 222, 'onlyId': 0, 'name': '淡定亦杰', 'email': 'wuyijie@360.cn', 'emailStr': 'wuyijie', 'type': 0}, {'id': 223, 'onlyId': 0, 'name': '栈大鹏', 'email': 'liudapeng@baidu.com', 'emailStr': 'liudapeng', 'type': 0}, {'id': 224, 'onlyId': 0, 'name': '栈文瑶', 'email': 'liuwenyao@baidu.com', 'emailStr': 'liuwenyao', 'type': 0}, {'id': 225, 'onlyId': 0, 'name': '司徒允', 'email': 'liyun@360.cn', 'emailStr': 'liyun', 'type': 0}, {'id': 226, 'onlyId': 0, 'name': '梁栋', 'email': 'liangdong@baidu.com', 'emailStr': 'liangdong', 'type': 0}, {'id': 3, 'onlyId': 0, 'name': '历代蓝心', 'email': 'meng@baidu.com', 'emailStr': 'meng', 'type': 0}, {'id': 5, 'onlyId': 0, 'name': '历代晓东', 'email': 'zhangxiaodong@baidu.com', 'emailStr': 'zhangxiaodong', 'type': 0}, {'id': 7, 'onlyId': 0, 'name': '在现场渤', 'email': 'huangliang@baidu.com', 'emailStr': 'huangliang', 'type': 0}, {'id': 8, 'onlyId': 0, 'name': '谷歌', 'email': 'haozhanhang@51baidu.com', 'emailStr': 'haozhanhang', 'type': 0}, {'id': 10, 'onlyId': 0, 'name': '德的', 'email': 'dongshaofei@360.cn', 'emailStr': 'dongshaofei', 'type': 0}]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/reserve_detail/, req => {
    return {'code': 200, 'data': {'info': {'id': 67, 'roomId': 1, 'status': 1, 'userId': 151, 'host': null, 'record': null, 'current': 1, 'isRelease': 0, 'join': [151, 206, 102, 21, 29], 'joinName': ['孙鹤', '门佳子', '门莹娟', '大老二', '韩帅'], 'begin': '10: 10', 'end': '11: 10', 'joinList': [{'value': 151, 'isPresider': 0, 'isRecorder': 0, 'label': '孙鹤'}, {'value': 206, 'isPresider': 0, 'isRecorder': 0, 'label': '门佳子'}, {'value': 102, 'isPresider': 0, 'isRecorder': 0, 'label': '门莹娟'}, {'value': 21, 'isPresider': 0, 'isRecorder': 0, 'label': '大老二'}, {'value': 29, 'isPresider': 0, 'isRecorder': 0, 'label': '韩帅'}], 'roomName': '天时歌舞厅', 'userName': '孙鹤', 'mainContent': '历史需求讨论', 'content': '', 'material': '', 'time': ['10: 10', '11: 10'], 'beginTime': '2020-01-21T10: 10: 00', 'endTime': '2020-01-21T11: 10: 00'}}, 'msg': ''}
})

Mock.mock(/api\/report\/readed/, req => {
    return {'code': 200, 'data': {'res': 1}, 'msg': ''}
})
Mock.mock(/api\/report\/reply_names/, req => {
    return {'code': 200, 'data': {'list': [{'id': 7, 'onlyId': 0, 'name': '在现场渤', 'email': '在现场渤huangliang@baidu.com', 'emailStr': '在现场渤huangliang', 'type': 0}, {'id': 18, 'onlyId': 0, 'name': '历代一山', 'email': '历代一山zhangshibo@360.cn', 'emailStr': '历代一山zhangshibo', 'type': 0}, {'id': 93, 'onlyId': 0, 'name': '历代子枫', 'email': '历代子枫lizhongkai@360.cn', 'emailStr': '历代子枫lizhongkai', 'type': 0}, {'id': 108, 'onlyId': 0, 'name': '秦霄贤', 'email': '秦霄贤wanbaoling@baidu.com', 'emailStr': '秦霄贤wanbaoling', 'type': 0}, {'id': 165, 'onlyId': 0, 'name': '哈喽', 'email': '哈喽fujunmin@360.cn', 'emailStr': '哈喽fujunmin', 'type': 0}]}, 'msg': ''}
})
Mock.mock(/api\/report\/report_info/, req => {
    return {'code': 200, 'data': {'info': {'id': 6152, 'time': '2020-04-06 13: 09', 'founderName': '加德纲', 'isBack': 0, 'implement': [{'id': 7, 'name': '在现场渤', 'type': 0}, {'id': 108, 'name': '秦霄贤', 'type': 0}, {'id': 93, 'name': '历代子枫', 'type': 0}], 'isRecall': 0, 'canRecall': 0, 'correlation': [{'id': 165, 'name': '哈喽', 'type': 0}, {'id': 13, 'name': '岳云鹏', 'type': 0}, {'id': 18, 'name': '历代一山', 'type': 0}], 'secret': [], 'title': '阿里巴巴-平台-周工作汇报 3月30日 - 4月3日', 'type': 2, 'content': '<div>一、 执行力</div><div><span style=\"white-space: pre\">\t</span>&nbsp; 1.工作进展</div><div><span style=\"white-space: pre\">\t\t</span>1) 总体项目情况</div><div><span style=\"white-space: pre\">\t\t\t</span>A：本周已经上线的：香港OSS压力测试，YIM兼容多批量修改及新增TB业务</div><div><span style=\"white-space: pre\">\t\t\t</span>B：开发中的：阿里巴巴修改点及收购二期（预计4月16日上线）、上报功能海外迁移</div><div><span style=\"white-space: pre\">\t\t\t</span>C：有排期的：阿里巴巴修改点及收购二期（预计4月16日上线）</div><div><span style=\"white-space: pre\">\t\t\t</span>D：有计划无排期的：上报功能海外迁移</div><div><br></div><div><span style=\"white-space: pre\">\t\t</span>2) 本周工作情况</div><div><span style=\"white-space: pre\">\t\t\t</span>A：收购二期</div><div><span style=\"white-space: pre\">\t\t\t</span>B：香港OSS压力测试</div><div><span style=\"white-space: pre\">\t\t\t</span>C：YIM兼容多批量修改及新增TB业务</div><div><span style=\"white-space: pre\">\t\t\t</span>D：上报功能海外迁移</div><div><span style=\"white-space: pre\">\t\t\t</span>F：阿里巴巴日常支持工作</div><div><br></div><div>&nbsp; <span style=\"white-space: pre\">\t</span>2. 本周工作中存在的重要问题、重要BUG、重要事故及建议解决办法</div><div><span style=\"white-space: pre\">\t\t</span></div><div><br></div><div>二、 学习、提炼、关联知识（谁在主动学习什么；谁分享了什么；谁被动学习了什么）</div><div><span style=\"white-space: pre\">\t</span>无</div><div><span style=\"white-space: pre\">\t</span></div><div>三、 人员培养计划、目标、进度、考评内容、结果</div><div><span style=\"white-space: pre\">\t</span> 无</div><div><span style=\"white-space: pre\">\t</span>&nbsp;</div><div>四、 文档、流程的执行和调整（归档了哪些文档，完善和调整了哪些流程）</div>', 'file': [], 'preId': 0, 'nextId': 0, 'isAuthor': false, 'isSecret': false, 'isDelete': 0}, 'reply': []}, 'msg': ''}
})

export default Mock
