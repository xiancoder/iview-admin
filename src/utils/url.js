'use strict';
// 获得url字符串中所有的参数
// =====================
// liuyp 2019年1月22日19:49:31
export const url2obj = (e) => {
    var t = {},
        r = e.substr(1 + e.indexOf('?'));
    r = r.split('&');
    for (var n = 0; n < r.length; n++) { var o = r[n].split('='); t[o[0]] = decodeURIComponent(o.slice(1).join('=')) }
    return t
}
// 对象转换为url参数格式
// =====================
// liuyp 2019年1月22日19:49:31
export const obj2url = (url) => {
    var arr = [], en = encodeURIComponent;
    for (var name in url) { arr.push(en(name) + '=' + en(url[name])) }
    return arr.join('&');
}
// 详细解析一个url,这段代码来自腾讯空间脚本
// =====================
// liuyp 2019年1月22日19:49:31
export const urlInfo = function (c) {
    var a = document.createElement('a');
    a.href = c;
    return {
        source: c, host: a.hostname, port: a.port, query: a.search,
        protocol: a.protocol.replace(':', ''),
        params: (function () {
            var b = {}, seg = a.search.replace(/^\?/, '').split('&'), len = seg.length, i = 0, s;
            for (;i < len; i++) { if (!seg[i]) { continue } s = seg[i].split('='); b[s[0]] = s[1] }
            return b
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/g, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    }
}
// URL_添加参数
// =====================
// liuyp 2019年1月22日19:49:31
export const urlChange = function (destiny, par, par_value) {
    var pattern = par + '=([^&]*)';
    var replaceText = par + '=' + par_value;
    if (destiny.match(pattern)) {
        var tmp = '/\\' + par + '=[^&]*/'; tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    } else {
        if (destiny.match('[\?]')) { return destiny + '&' + replaceText; } else { return destiny + '?' + replaceText; }
    }
}
