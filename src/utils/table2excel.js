let idTmr = 0
let uri = 'data:application/vnd.ms-excel;base64,';
let template = '<html><head><meta charset="UTF-8"></head><body><Table border>{table}</table></body></html>';
let base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))); };
let format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
const tableToExcel = (table, aId, name) => {
    let ctx = { worksheet: name || 'Worksheet', table: table };
    document.getElementById(aId).href = uri + base64(format(template, ctx));
    document.getElementById(aId).download = name;
    document.getElementById(aId).click();
}
const Cleanup = () => {
    window.clearInterval(idTmr);
    // CollectGarbage();
}
const getExplorer = () => {
    var explorer = window.navigator.userAgent;
    if (explorer.indexOf('MSIE') >= 0) { return 'ie' } else if (explorer.indexOf('Firefox') >= 0) { return 'Firefox' } else if (explorer.indexOf('Chrome') >= 0) { return 'Chrome' } else if (explorer.indexOf('Opera') >= 0) { return 'Opera' } else if (explorer.indexOf('Safari') >= 0) { return 'Safari' }
}
export const tranform = (table, aId, name) => {
    let tableHead = table.$children[0].$el
    let tableBody = table.$children[1].$el
    let tableInnerHTML = '<thead><tr>'
    if (table.$children.length !== 1) {
        let len = tableBody.rows.length
        let i = -1;
        while (i < len) {
            if (i === -1) {
                Array.from(tableHead.rows[0].children).forEach((td) => {
                    tableInnerHTML = tableInnerHTML + '<th>' + td.children[0].children[0].innerHTML + '</th>'
                })
                tableInnerHTML += '</tr><thead><tbody>'
            } else {
                tableInnerHTML += '<tr>'
                Array.from(tableBody.rows[i].children).forEach((td) => {
                    tableInnerHTML = tableInnerHTML + '<td>' + td.children[0].children[0].innerHTML + '</td>'
                })
                tableInnerHTML += '</tr>'
            }
            i++
        }
        tableInnerHTML += '</tbody>'
    }
    if (getExplorer() !== 'Safari' && name.substr(-1, 4) !== '.xls') {
        name += '.xls'
    }
    if (getExplorer() === 'ie') {
        var curTbl = table
        // eslint-disable-next-line
        var oXL = new ActiveXObject('Excel.Application')
        var oWB = oXL.Workbooks.Add()
        var xlsheet = oWB.Worksheets(1)
        var sel = document.body.createTextRange()
        sel.moveToElementText(curTbl)
        sel.select()
        sel.execCommand('Copy')
        xlsheet.Paste()
        oXL.Visible = true
        try {
            var fname = oXL.Application.GetSaveAsFilename('Excel.xls', 'Excel Spreadsheets (*.xls), *.xls')
        } catch (e) {
            print('Nested catch caught ' + e)
        } finally {
            oWB.SaveAs(fname)
            // oWB.Close(savechanges = false)
            oXL.Quit()
            oXL = null
            idTmr = setInterval(Cleanup(), 1)
        }
    } else {
        tableToExcel(tableInnerHTML, aId, name)
    }
}
