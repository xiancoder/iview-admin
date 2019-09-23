import moment from 'moment'
// moment 换中文
moment.locale('en', {
    relativeTime: {
        future: '未来 %s', past: '%s 之前', s: '秒', m: '一分钟', mm: '%d 分钟',
        h: '一小时', hh: '%d 小时', d: '一天', dd: '%d 天', M: '一个月', MM: '%d 个月',
        y: '一年', yy: '%d 年'
    }
});
