/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日13:35:02
* 语句: npm run test:unit tests/unit/regexp.spec.js
*/

import { expect } from 'chai'
import regexp from '@/utils/regexp.js'

describe('测试正则是否符合要求', function () {
    it('匹配整数，小数限2位', function () {
        expect(regexp.a01.test('12.34')).equal(true)
        expect(regexp.a01.test('12.3')).equal(true)
        expect(regexp.a01.test('12')).equal(true)
        expect(regexp.a01.test('1234')).equal(true)
        expect(regexp.a01.test('123456')).equal(true)
        expect(regexp.a01.test('123456789')).equal(true)
        expect(regexp.a01.test('0.12')).equal(true)
        expect(regexp.a01.test('130130190806023139')).equal(true)
    })
    it('匹配整数限6位，小数限2位（不含0）', function () {
        expect(regexp.a02.test('12.34')).equal(true)
        expect(regexp.a02.test('12.3')).equal(true)
        expect(regexp.a02.test('12')).equal(true)
        expect(regexp.a02.test('1234')).equal(true)
        expect(regexp.a02.test('123456')).equal(true)
        expect(regexp.a02.test('0.12')).equal(true)
    })
    it('匹配整数限6位，小数限2位（包含0）', function () {
        expect(regexp.a03.test('12.34')).equal(true)
        expect(regexp.a03.test('12.3')).equal(true)
        expect(regexp.a03.test('12')).equal(true)
        expect(regexp.a03.test('1234')).equal(true)
        expect(regexp.a03.test('123456')).equal(true)
        expect(regexp.a03.test('0')).equal(true)
        expect(regexp.a03.test('0.12')).equal(true)
    })
    it('身份证号 15或18位', function () {
        expect(regexp.cardId.test('320311770706001')).equal(true)
        expect(regexp.cardId.test('13013019070131002X')).equal(true)
        expect(regexp.cardId.test('130130190806023139')).equal(true)
        expect(regexp.cardId.test('513436200001023288')).equal(true)
        expect(regexp.cardId.test('51343620000102300X')).equal(true)
        expect(regexp.cardId.test('513436200001021768')).equal(true)
        expect(regexp.cardId.test('32041120190101698X')).equal(true)
        expect(regexp.cardId.test('513436200001024109')).equal(true)
        expect(regexp.cardId.test('513436200001021549')).equal(true)
        expect(regexp.cardId.test('51343620000102394X')).equal(true)
        expect(regexp.cardId.test('513436200001027043')).equal(true)
        expect(regexp.cardId.test('513436200001026307')).equal(true)
        expect(regexp.cardId.test('513436200001022322')).equal(true)
        expect(regexp.cardId.test('513436200001024205')).equal(true)
    })
    it('手机号', function () {
        expect(regexp.phone.test('13831111444')).equal(true)
        expect(regexp.phone.test('15810875532')).equal(true)
        expect(regexp.phone.test('14420000000')).equal(true)
        expect(regexp.phone.test('12345678912')).equal(true)
        expect(regexp.phone.test('15185500071')).equal(true)
        expect(regexp.phone.test('13935067696')).equal(true)
        expect(regexp.phone.test('13031435843')).equal(true)
        expect(regexp.phone.test('14545347391')).equal(true)
        expect(regexp.phone.test('13175025997')).equal(true)
        expect(regexp.phone.test('18289842130')).equal(true)
        expect(regexp.phone.test('18887555094')).equal(true)
        expect(regexp.phone.test('13318619874')).equal(true)
        expect(regexp.phone.test('14787741584')).equal(true)
        expect(regexp.phone.test('15639344287')).equal(true)
        expect(regexp.phone.test('13748593960')).equal(true)
        expect(regexp.phone.test('18754541506')).equal(true)
        // expect(regexp.phone.test('0311-85575234')).equal(true)
    })
    it('微信', function () {
        expect(regexp.weixin.test('wxid_lpkjty5vhqt722')).equal(true) // 黄工
        expect(regexp.weixin.test('wangdayue21')).equal(true) // 王月
        expect(regexp.weixin.test('nothingyue')).equal(true) // 王月
        expect(regexp.weixin.test('whereispal5')).equal(true) // 刘云朋
        expect(regexp.weixin.test('sy5840982')).equal(true) // 郭颂杨
        expect(regexp.weixin.test('zy735919882')).equal(true) // 赵瑶瑶
        expect(regexp.weixin.test('zhaoyaoyao20181214')).equal(true) // 赵瑶瑶
        expect(regexp.weixin.test('yaoyao20190303')).equal(true) // 赵瑶瑶
        expect(regexp.weixin.test('wxy666666666688888')).equal(true) // 王晓云
        expect(regexp.weixin.test('okhaoyuelei')).equal(true) // 郝跃雷
        expect(regexp.weixin.test('da-mai520')).equal(true) // 郭海涛
        expect(regexp.weixin.test('hwt1703')).equal(true) // 郝文涛
        expect(regexp.weixin.test('wxh_zhang')).equal(true) // 张士博
        expect(regexp.weixin.test('duronfly')).equal(true) // 彭飞飞
        expect(regexp.weixin.test('wxid_64ipnw9py09122')).equal(true) // 韩霄冲
        expect(regexp.weixin.test('aiwuxian521666')).equal(true) // 许玉昭
        expect(regexp.weixin.test('weinann')).equal(true) // 魏楠楠
        expect(regexp.weixin.test('ring_cat_2014')).equal(true) // 张红玲
        expect(regexp.weixin.test('d2813437774')).equal(true) // 董素言
        expect(regexp.weixin.test('d1813539328')).equal(true) // 董素言
        expect(regexp.weixin.test('zhaixingxing325')).equal(true) // 翟星星
        expect(regexp.weixin.test('buzhidao2084')).equal(true) // 刘子傲
        expect(regexp.weixin.test('dayezi664681')).equal(true) // 贾晓烨
        expect(regexp.weixin.test('shanwdh')).equal(true) // 王珊珊
        expect(regexp.weixin.test('cece_g')).equal(true) // 郭策
        expect(regexp.weixin.test('nnhh_88')).equal(true) // 赵涵
        expect(regexp.weixin.test('sihan99')).equal(true) // 赵涵
        expect(regexp.weixin.test('xiexiaonaner')).equal(true) // 解晓楠
        expect(regexp.weixin.test('lihongying2766')).equal(true) // 李洪莹
        expect(regexp.weixin.test('IIILOVEYUIII')).equal(true) // 韩帅
        expect(regexp.weixin.test('xin_chenmo')).equal(true) // 姚文娟
        expect(regexp.weixin.test('xiaowennuan6112')).equal(true) // 王玲
        expect(regexp.weixin.test('SagittariusSQDXW')).equal(true) // 孙鹤
        expect(regexp.weixin.test('jk18133815006')).equal(true) // 孙鹤
        expect(regexp.weixin.test('faner0413')).equal(true) // 曹帆帆
        expect(regexp.weixin.test('jianhtao1680')).equal(true) // 史江涛
        expect(regexp.weixin.test('Lht-xfz0216')).equal(true) // 雷汉庭
        expect(regexp.weixin.test('huan01191004')).equal(true) // 刘欢
        expect(regexp.weixin.test('Angelia-Lee')).equal(true) // 李慧晓
    })

})
