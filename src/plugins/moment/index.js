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
if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(function (status) {
        const joke = () => {
            const time = 18.5 - new Date().getHours() - Math.round(new Date().getMinutes() / 6) / 10
            const msg = '当前时间' +
                moment(new Date()).format('YYYY-MM-DD HH:mm:ss') +
                '\n' +
                (time > 0 ? ('距离18:30还有' + time + '小时') : '已经下班') +
                '\n' +
                '(点击关闭实时提示)'
            const note = new Notification('通知', {
                dir: 'auto',
                tag: 'testTag',
                icon: 'http://returnc.com/frontend/images/console.gif',
                body: msg
            })
            note.onclick = () => { // 在这里实现用户点击后的逻辑
                alert('浏览器提示已关闭')
                clearInterval(x)
            }
        }
        const x = setInterval(joke, 10 * 60 * 1000)
        joke()
    })
}
