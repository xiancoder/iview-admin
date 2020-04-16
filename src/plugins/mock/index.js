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
        {roomName: '月野兔团操室', begin: '2020-4-15 10:00', end: '2020-4-15 11:00', show: true, mainContent: '研究怎么着逃课', content: '闲的蛋疼的不行'},
        {roomName: '东风会议室', begin: '2020-4-16 18:00', end: '2020-4-16 22:00', show: true, mainContent: '研究怎么着逃课', content: '闲的蛋疼的不行'}
    ]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/info/, req => {
    return {'code': 200, 'data': {'list': [{'roomId': 1, 'roomName': '天时会议室', 'status': 1, 'count': 8, 'mainContent': null, 'equipment': '接线板、激光电视', 'meeting': [{'id': 23, 'roomId': 1, 'status': 1, 'begin': '10:00', 'end': '12:00', 'userName': '陈满云'}]}, {'roomId': 2, 'roomName': '地利会议室', 'status': 1, 'count': 10, 'mainContent': null, 'equipment': '接线板，投影，白板', 'meeting': [{'id': 20, 'roomId': 2, 'status': 1, 'begin': '09:35', 'end': '10:30', 'userName': '姚聪聪'}]}, {'roomId': 3, 'roomName': '人和会议室', 'status': 1, 'count': 10, 'mainContent': null, 'equipment': '接线板、白板、幕布', 'meeting': []}, {'roomId': 4, 'roomName': '东风会议室', 'status': 1, 'count': 14, 'mainContent': null, 'equipment': '接线板、电视、白板', 'meeting': [{'id': 24, 'roomId': 4, 'status': 1, 'begin': '10:20', 'end': '10:25', 'userName': '赵涵'}]}, {'roomId': 5, 'roomName': '接待室', 'status': 1, 'count': 6, 'mainContent': null, 'equipment': '电视、白板', 'meeting': []}, {'roomId': 6, 'roomName': '月野兔健身厅', 'status': 1, 'count': 40, 'mainContent': null, 'equipment': '接线板、电视、白板、话筒、音响', 'meeting': [{'id': 25, 'roomId': 6, 'status': 1, 'begin': '10:30', 'end': '11:30', 'userName': '赵涵'}]}]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/user_list/, req => {
    return {'code': 200, 'data': {'list': [{'id': 13, 'onlyId': 0, 'name': '刘云朋', 'email': 'liuyunpeng@52yunxi.cn', 'emailStr': 'liuyunpeng', 'type': 0}, {'id': 15, 'onlyId': 0, 'name': '赵瑶瑶', 'email': 'zhaoyaoyao@51yunxi.cn', 'emailStr': 'zhaoyaoyao', 'type': 0}, {'id': 16, 'onlyId': 0, 'name': '蒋硕', 'email': 'jiangshuo@52yunxi.cn', 'emailStr': 'jiangshuo', 'type': 0}, {'id': 17, 'onlyId': 0, 'name': '王月', 'email': 'wangyue@51yunxi.cn', 'emailStr': 'wangyue', 'type': 0}, {'id': 18, 'onlyId': 0, 'name': '张士博', 'email': 'zhangshibo@52yunxi.cn', 'emailStr': 'zhangshibo', 'type': 0}, {'id': 20, 'onlyId': 0, 'name': '韩霄冲', 'email': 'hanxiaochong@52yunxi.cn', 'emailStr': 'hanxiaochong', 'type': 0}, {'id': 21, 'onlyId': 0, 'name': '张红玲', 'email': 'zhanghongling@52yunxi.cn', 'emailStr': 'zhanghongling', 'type': 0}, {'id': 23, 'onlyId': 0, 'name': '董素言', 'email': 'dongsuyan@52yunxi.cn', 'emailStr': 'dongsuyan', 'type': 0}, {'id': 24, 'onlyId': 0, 'name': '白建磊', 'email': 'baijianlei@52yunxi.cn', 'emailStr': 'baijianlei', 'type': 0}, {'id': 28, 'onlyId': 0, 'name': '赵涵', 'email': 'zhaohan@52yunxi.cn', 'emailStr': 'zhaohan', 'type': 0}, {'id': 29, 'onlyId': 0, 'name': '韩帅', 'email': 'hanshuai@51yunxi.cn', 'emailStr': 'hanshuai', 'type': 0}, {'id': 31, 'onlyId': 0, 'name': '郭策', 'email': 'guoce@52yunxi.cn', 'emailStr': 'guoce', 'type': 0}, {'id': 37, 'onlyId': 0, 'name': '褚亚儒', 'email': 'chuyaru@yunxi.cn', 'emailStr': 'chuyaru', 'type': 0}, {'id': 43, 'onlyId': 0, 'name': '杨少华', 'email': 'yangshaohua@yunxi.cn', 'emailStr': 'yangshaohua', 'type': 0}, {'id': 51, 'onlyId': 0, 'name': '王月贞', 'email': 'wangyuezhen@yunxi.cn', 'emailStr': 'wangyuezhen', 'type': 0}, {'id': 54, 'onlyId': 0, 'name': '陶聪瑜', 'email': 'taocongyu@yunxi.cn', 'emailStr': 'taocongyu', 'type': 0}, {'id': 55, 'onlyId': 0, 'name': '刘芳', 'email': 'liufang@yunxi.cn', 'emailStr': 'liufang', 'type': 0}, {'id': 56, 'onlyId': 0, 'name': '李云', 'email': 'liyun@yunxi.cn', 'emailStr': 'liyun', 'type': 0}, {'id': 57, 'onlyId': 0, 'name': '刘畅', 'email': 'liuchang@yunxi.cn', 'emailStr': 'liuchang', 'type': 0}, {'id': 59, 'onlyId': 0, 'name': '路杨杨', 'email': 'luyangyang@52yunxi.cn', 'emailStr': 'luyangyang', 'type': 0}, {'id': 60, 'onlyId': 0, 'name': '张国靖', 'email': 'zhangguojing@51yunxi.cn', 'emailStr': 'zhangguojing', 'type': 0}, {'id': 61, 'onlyId': 0, 'name': '周朔', 'email': 'zhoushuo@52yunxi.cn', 'emailStr': 'zhoushuo', 'type': 0}, {'id': 62, 'onlyId': 0, 'name': '张大阔', 'email': 'zhangdakuo@52yunxi.cn', 'emailStr': 'zhangdakuo', 'type': 0}, {'id': 63, 'onlyId': 0, 'name': '丁士鹏', 'email': 'dingshipeng@52yunxi.cn', 'emailStr': 'dingshipeng', 'type': 0}, {'id': 64, 'onlyId': 0, 'name': '翟静静', 'email': 'zhaijing@52yunxi.cn', 'emailStr': 'zhaijing', 'type': 0}, {'id': 65, 'onlyId': 0, 'name': '冯雅娜', 'email': 'fengyana@52yunxi.cn', 'emailStr': 'fengyana', 'type': 0}, {'id': 70, 'onlyId': 0, 'name': '师俊革', 'email': 'shijunge@yunxi.cn', 'emailStr': 'shijunge', 'type': 0}, {'id': 83, 'onlyId': 0, 'name': '郝迎雪', 'email': 'haoyingxue@yunxi.cn', 'emailStr': 'haoyingxue', 'type': 0}, {'id': 85, 'onlyId': 0, 'name': '刘二表', 'email': 'liuerbiao@52yunxi.cn', 'emailStr': 'liuerbiao', 'type': 0}, {'id': 86, 'onlyId': 0, 'name': '张忠良', 'email': 'zhangzhongliang@52yunxi.cn', 'emailStr': 'zhangzhongliang', 'type': 0}, {'id': 89, 'onlyId': 0, 'name': '武玉强', 'email': 'wuyuqiang@51yunxi.cn', 'emailStr': 'wuyuqiang', 'type': 0}, {'id': 90, 'onlyId': 0, 'name': '黄云岩', 'email': 'huangyunyan@51yunxi.cn', 'emailStr': 'huangyunyan', 'type': 0}, {'id': 91, 'onlyId': 0, 'name': '邱斌', 'email': 'qiubin@52yunxi.cn', 'emailStr': 'qiubin', 'type': 0}, {'id': 93, 'onlyId': 0, 'name': '李仲凯', 'email': 'lizhongkai@52yunxi.cn', 'emailStr': 'lizhongkai', 'type': 0}, {'id': 94, 'onlyId': 0, 'name': '段兵宇', 'email': 'duanbingyu@52yunxi.cn', 'emailStr': 'duanbingyu', 'type': 0}, {'id': 95, 'onlyId': 0, 'name': '许玉昭', 'email': 'xuyuzhao@52yunxi.cn', 'emailStr': 'xuyuzhao', 'type': 0}, {'id': 96, 'onlyId': 0, 'name': '齐龙杰', 'email': 'qilongjie@52yunxi.cn', 'emailStr': 'qilongjie', 'type': 0}, {'id': 98, 'onlyId': 0, 'name': '李小坡', 'email': 'lixiaopo@52yunxi.cn', 'emailStr': 'lixiaopo', 'type': 0}, {'id': 99, 'onlyId': 0, 'name': '李美莲', 'email': 'limeilian@52yunxi.cn', 'emailStr': 'limeilian', 'type': 0}, {'id': 100, 'onlyId': 0, 'name': '翟星星', 'email': 'zhaixingxing@52yunxi.cn', 'emailStr': 'zhaixingxing', 'type': 0}, {'id': 101, 'onlyId': 0, 'name': '郭杰璠', 'email': 'guojiefan@52yunxi.cn', 'emailStr': 'guojiefan', 'type': 0}, {'id': 102, 'onlyId': 0, 'name': '王莹娟', 'email': 'wangyingjuan@yunxi.cn', 'emailStr': 'wangyingjuan', 'type': 0}, {'id': 103, 'onlyId': 0, 'name': '王文聪', 'email': 'wangwencong@yunxi.cn', 'emailStr': 'wangwencong', 'type': 0}, {'id': 104, 'onlyId': 0, 'name': '张佳欣', 'email': 'zhangjiaxin@yunxi.cn', 'emailStr': 'zhangjiaxin', 'type': 0}, {'id': 106, 'onlyId': 0, 'name': '刘美', 'email': 'liumei@yunxi.cn', 'emailStr': 'liumei', 'type': 0}, {'id': 108, 'onlyId': 0, 'name': '万宝玲', 'email': 'wanbaoling@yunxi.cn', 'emailStr': 'wanbaoling', 'type': 0}, {'id': 120, 'onlyId': 0, 'name': '高翔', 'email': 'gaoxiang@yunxi.cn', 'emailStr': 'gaoxiang', 'type': 0}, {'id': 121, 'onlyId': 0, 'name': '李静', 'email': 'lijing@52yunxi.cn', 'emailStr': 'lijing', 'type': 0}, {'id': 122, 'onlyId': 0, 'name': '李航', 'email': 'lihang@52yunxi.cn', 'emailStr': 'lihang', 'type': 0}, {'id': 125, 'onlyId': 0, 'name': '王梦昭', 'email': 'wangmengzhao@yunxi.cn', 'emailStr': 'wangmengzhao', 'type': 0}, {'id': 128, 'onlyId': 0, 'name': '张硕', 'email': 'zhangshuo@yunxi.cn', 'emailStr': 'zhangshuo', 'type': 0}, {'id': 142, 'onlyId': 0, 'name': '彭飞飞', 'email': 'pengfeifei@51yunxi.cn', 'emailStr': 'pengfeifei', 'type': 0}, {'id': 144, 'onlyId': 0, 'name': '高文君', 'email': 'gaowenjun@yunxi.cn', 'emailStr': 'gaowenjun', 'type': 0}, {'id': 146, 'onlyId': 0, 'name': '王东旭', 'email': 'wangdongxu@yunxi.cn', 'emailStr': 'wangdongxu', 'type': 0}, {'id': 147, 'onlyId': 0, 'name': '贺英灿', 'email': 'heyingcan@yunxi.cn', 'emailStr': 'heyingcan', 'type': 0}, {'id': 151, 'onlyId': 0, 'name': '孙鹤', 'email': 'sunhe@yunxi.cn', 'emailStr': 'sunhe', 'type': 0}, {'id': 153, 'onlyId': 0, 'name': '马佳佳', 'email': 'majiajia@51yunxi.cn', 'emailStr': 'majiajia', 'type': 0}, {'id': 156, 'onlyId': 0, 'name': '彭璇', 'email': 'pengxuan@yunxi.cn', 'emailStr': 'pengxuan', 'type': 0}, {'id': 160, 'onlyId': 0, 'name': '杨颖颖', 'email': 'yangying@yunxi.cn', 'emailStr': 'yangying', 'type': 0}, {'id': 163, 'onlyId': 0, 'name': '郝素花', 'email': 'haosuhua@yunxi.cn', 'emailStr': 'haosuhua', 'type': 0}, {'id': 164, 'onlyId': 0, 'name': '马文岩', 'email': 'mawenyan@yunxi.cn', 'emailStr': 'mawenyan', 'type': 0}, {'id': 165, 'onlyId': 0, 'name': '付俊敏', 'email': 'fujunmin@52yunxi.cn', 'emailStr': 'fujunmin', 'type': 0}, {'id': 166, 'onlyId': 0, 'name': '陈满云', 'email': 'chenmanyun@yunxi.cn', 'emailStr': 'chenmanyun', 'type': 0}, {'id': 167, 'onlyId': 0, 'name': '刘红景', 'email': 'liuhongjing@yunxi.cn', 'emailStr': 'liuhongjing', 'type': 0}, {'id': 170, 'onlyId': 0, 'name': '闫崇坤', 'email': 'yanchongkun@52yunxi.cn', 'emailStr': 'yanchongkun', 'type': 0}, {'id': 174, 'onlyId': 0, 'name': '王权', 'email': 'wangquan@52yunxi.cn', 'emailStr': 'wangquan', 'type': 0}, {'id': 176, 'onlyId': 0, 'name': '贾凯旋', 'email': 'jiakaixuan@yunxi.cn', 'emailStr': 'jiakaixuan', 'type': 0}, {'id': 177, 'onlyId': 0, 'name': '赵诚', 'email': 'zhaocheng@yunxi.cn', 'emailStr': 'zhaocheng', 'type': 0}, {'id': 178, 'onlyId': 0, 'name': '刘媛媛', 'email': 'liuyuanyuan@yunxi.cn', 'emailStr': 'liuyuanyuan', 'type': 0}, {'id': 186, 'onlyId': 0, 'name': '车彩利', 'email': 'checaili@yunxi.cn', 'emailStr': 'checaili', 'type': 0}, {'id': 197, 'onlyId': 0, 'name': '王鹍', 'email': 'wangkun@yunxi.cn', 'emailStr': 'wangkun', 'type': 0}, {'id': 199, 'onlyId': 0, 'name': '马江萌', 'email': 'majiangmeng@yunxi.cn', 'emailStr': 'majiangmeng', 'type': 0}, {'id': 200, 'onlyId': 0, 'name': '赵南', 'email': 'zhaonan@yunxi.cn', 'emailStr': 'zhaonan', 'type': 0}, {'id': 205, 'onlyId': 0, 'name': '霍妙璇', 'email': 'huomiaoxuan@yunxi.cn', 'emailStr': 'huomiaoxuan', 'type': 0}, {'id': 206, 'onlyId': 0, 'name': '王佳子', 'email': 'wangjiazi@yunxi.cn', 'emailStr': 'wangjiazi', 'type': 0}, {'id': 207, 'onlyId': 0, 'name': '姚聪聪', 'email': 'yaocongcong@yunxi.cn', 'emailStr': 'yaocongcong', 'type': 0}, {'id': 210, 'onlyId': 0, 'name': '吴麟', 'email': 'wulin@52yunxi.cn', 'emailStr': 'wulin', 'type': 0}, {'id': 211, 'onlyId': 0, 'name': '刘静', 'email': 'liujing@yunxi.cn', 'emailStr': 'liujing', 'type': 0}, {'id': 212, 'onlyId': 0, 'name': '王阿香', 'email': 'wangaxiang@yunxi.cn', 'emailStr': 'wangaxiang', 'type': 0}, {'id': 213, 'onlyId': 0, 'name': '杨平', 'email': 'yangping@52yunxi.cn', 'emailStr': 'yangping', 'type': 0}, {'id': 214, 'onlyId': 0, 'name': '贾雅璇', 'email': 'jiayaxuan@yunxi.cn', 'emailStr': 'jiayaxuan', 'type': 0}, {'id': 215, 'onlyId': 0, 'name': '陈雷涛', 'email': 'chenleitao@52yunxi.cn', 'emailStr': 'chenleitao', 'type': 0}, {'id': 216, 'onlyId': 0, 'name': '人力资源行政管理中心', 'email': 'yxhrac@yunxi.cn', 'emailStr': 'yxhrac', 'type': 0}, {'id': 217, 'onlyId': 0, 'name': '白玲', 'email': 'bailing@yunxi.cn', 'emailStr': 'bailing', 'type': 0}, {'id': 218, 'onlyId': 0, 'name': '贾文浩', 'email': 'jiawenhao@yunxi.cn', 'emailStr': 'jiawenhao', 'type': 0}, {'id': 220, 'onlyId': 0, 'name': '曹雅倩', 'email': 'caoyaqian@yunxi.cn', 'emailStr': 'caoyaqian', 'type': 0}, {'id': 221, 'onlyId': 0, 'name': '孙浩', 'email': 'sunhao@52yunxi.cn', 'emailStr': 'sunhao', 'type': 0}, {'id': 222, 'onlyId': 0, 'name': '武亦杰', 'email': 'wuyijie@52yunxi.cn', 'emailStr': 'wuyijie', 'type': 0}, {'id': 223, 'onlyId': 0, 'name': '刘大鹏', 'email': 'liudapeng@yunxi.cn', 'emailStr': 'liudapeng', 'type': 0}, {'id': 224, 'onlyId': 0, 'name': '刘文瑶', 'email': 'liuwenyao@yunxi.cn', 'emailStr': 'liuwenyao', 'type': 0}, {'id': 225, 'onlyId': 0, 'name': '李允', 'email': 'liyun@52yunxi.cn', 'emailStr': 'liyun', 'type': 0}, {'id': 226, 'onlyId': 0, 'name': '梁栋', 'email': 'liangdong@yunxi.cn', 'emailStr': 'liangdong', 'type': 0}, {'id': 3, 'onlyId': 0, 'name': '孟海宁', 'email': 'meng@yunxi.cn', 'emailStr': 'meng', 'type': 0}, {'id': 5, 'onlyId': 0, 'name': '张晓东', 'email': 'zhangxiaodong@yunxi.cn', 'emailStr': 'zhangxiaodong', 'type': 0}, {'id': 7, 'onlyId': 0, 'name': '黄亮', 'email': 'huangliang@yunxi.cn', 'emailStr': 'huangliang', 'type': 0}, {'id': 8, 'onlyId': 0, 'name': '郝占行', 'email': 'haozhanhang@51yunxi.cn', 'emailStr': 'haozhanhang', 'type': 0}, {'id': 10, 'onlyId': 0, 'name': '董少飞', 'email': 'dongshaofei@52yunxi.cn', 'emailStr': 'dongshaofei', 'type': 0}]}, 'msg': ''}
})
Mock.mock(/api\/meeting\/reserve_detail/, req => {
    return {'code': 200, 'data': {'info': {'id': 67, 'roomId': 1, 'status': 1, 'userId': 151, 'host': null, 'record': null, 'current': 1, 'isRelease': 0, 'join': [151, 206, 102, 21, 29], 'joinName': ['孙鹤', '王佳子', '王莹娟', '张红玲', '韩帅'], 'begin': '10: 10', 'end': '11: 10', 'joinList': [{'value': 151, 'isPresider': 0, 'isRecorder': 0, 'label': '孙鹤'}, {'value': 206, 'isPresider': 0, 'isRecorder': 0, 'label': '王佳子'}, {'value': 102, 'isPresider': 0, 'isRecorder': 0, 'label': '王莹娟'}, {'value': 21, 'isPresider': 0, 'isRecorder': 0, 'label': '张红玲'}, {'value': 29, 'isPresider': 0, 'isRecorder': 0, 'label': '韩帅'}], 'roomName': '天时会议室', 'userName': '孙鹤', 'mainContent': '历史需求讨论', 'content': '', 'material': '', 'time': ['10: 10', '11: 10'], 'beginTime': '2020-01-21T10: 10: 00', 'endTime': '2020-01-21T11: 10: 00'}}, 'msg': ''}
})

Mock.mock(/api\/report\/readed/, req => {
    return {'code': 200, 'data': {'res': 1}, 'msg': ''}
})
Mock.mock(/api\/report\/reply_names/, req => {
    return {'code': 200, 'data': {'list': [{'id': 7, 'onlyId': 0, 'name': '黄亮', 'email': '黄亮huangliang@yunxi.cn', 'emailStr': '黄亮huangliang', 'type': 0}, {'id': 18, 'onlyId': 0, 'name': '张士博', 'email': '张士博zhangshibo@52yunxi.cn', 'emailStr': '张士博zhangshibo', 'type': 0}, {'id': 93, 'onlyId': 0, 'name': '李仲凯', 'email': '李仲凯lizhongkai@52yunxi.cn', 'emailStr': '李仲凯lizhongkai', 'type': 0}, {'id': 108, 'onlyId': 0, 'name': '万宝玲', 'email': '万宝玲wanbaoling@yunxi.cn', 'emailStr': '万宝玲wanbaoling', 'type': 0}, {'id': 165, 'onlyId': 0, 'name': '付俊敏', 'email': '付俊敏fujunmin@52yunxi.cn', 'emailStr': '付俊敏fujunmin', 'type': 0}]}, 'msg': ''}
})
Mock.mock(/api\/report\/report_info/, req => {
    return {'code': 200, 'data': {'info': {'id': 6152, 'time': '2020-04-06 13: 09', 'founderName': '齐龙杰', 'isBack': 0, 'implement': [{'id': 7, 'name': '黄亮', 'type': 0}, {'id': 108, 'name': '万宝玲', 'type': 0}, {'id': 93, 'name': '李仲凯', 'type': 0}], 'isRecall': 0, 'canRecall': 0, 'correlation': [{'id': 165, 'name': '付俊敏', 'type': 0}, {'id': 13, 'name': '刘云朋', 'type': 0}, {'id': 18, 'name': '张士博', 'type': 0}], 'secret': [], 'title': '任礼游-平台-周工作汇报 3月30日 - 4月3日", "type": 2, "content": "<div>一、 执行力</div><div><span style=\"white-space: pre\">\t</span>&nbsp; 1.工作进展</div><div><span style=\"white-space: pre\">\t\t</span>1) 总体项目情况</div><div><span style=\"white-space: pre\">\t\t\t</span>A：本周已经上线的：香港OSS压力测试，YIM兼容多批量修改及新增TB业务</div><div><span style=\"white-space: pre\">\t\t\t</span>B：开发中的：任礼游修改点及域名产品化二期（预计4月16日上线）、上报功能海外迁移</div><div><span style=\"white-space: pre\">\t\t\t</span>C：有排期的：任礼游修改点及域名产品化二期（预计4月16日上线）</div><div><span style=\"white-space: pre\">\t\t\t</span>D：有计划无排期的：上报功能海外迁移</div><div><br></div><div><span style=\"white-space: pre\">\t\t</span>2) 本周工作情况</div><div><span style=\"white-space: pre\">\t\t\t</span>A：域名产品化二期</div><div><span style=\"white-space: pre\">\t\t\t</span>B：香港OSS压力测试</div><div><span style=\"white-space: pre\">\t\t\t</span>C：YIM兼容多批量修改及新增TB业务</div><div><span style=\"white-space: pre\">\t\t\t</span>D：上报功能海外迁移</div><div><span style=\"white-space: pre\">\t\t\t</span>F：任礼游日常支持工作</div><div><br></div><div>&nbsp; <span style=\"white-space: pre\">\t</span>2. 本周工作中存在的重要问题、重要BUG、重要事故及建议解决办法</div><div><span style=\"white-space: pre\">\t\t</span></div><div><br></div><div>二、 学习、提炼、关联知识（谁在主动学习什么；谁分享了什么；谁被动学习了什么）</div><div><span style=\"white-space: pre\">\t</span>无</div><div><span style=\"white-space: pre\">\t</span></div><div>三、 人员培养计划、目标、进度、考评内容、结果</div><div><span style=\"white-space: pre\">\t</span> 无</div><div><span style=\"white-space: pre\">\t</span>&nbsp;</div><div>四、 文档、流程的执行和调整（归档了哪些文档，完善和调整了哪些流程）</div>', 'file': [], 'preId': 0, 'nextId': 0, 'isAuthor': false, 'isSecret': false, 'isDelete': 0}, 'reply': []}, 'msg': ''}
})

export default Mock
