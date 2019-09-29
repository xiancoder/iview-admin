import moment from 'moment'
// moment 换中文
moment.locale('en', {
    relativeTime: {
        future: '未来 %s', past: '%s 之前', s: '秒', m: '一分钟', mm: '%d 分钟',
        h: '一小时', hh: '%d 小时', d: '一天', dd: '%d 天', M: '一个月', MM: '%d 个月',
        y: '一年', yy: '%d 年'
    }
});
// =======================================================================
// = 额外代码
// =======================================================================
const toTime = new Date()
toTime.setHours(18)
toTime.setMinutes(30)
if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(function (status) {
        var x = setInterval(function () {
            var note = new Notification('通知', { body: '距离下班还有' + moment(toTime).toNow(true) })
            note.onclick = () => { // 在这里实现用户点击后的逻辑
                clearInterval(x)
            }
        }, 10 * 60 * 1000)
    })
}
