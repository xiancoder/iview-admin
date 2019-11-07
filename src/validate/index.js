// 表单校验统一规范

export const required4DateRange = (getV, msg) => {
    msg = msg || '必选日期段!'
    return (rule, value, callback) => {
        const dates = getV()
        if (!dates || dates.length === 0) { return callback(new Error(msg)) }
        callback()
    }
}

// 格式化价格（不含0）
export function validatePrice (rule, value, callback) {
    let reg = /^((0\.([1-9](\d)?|[0][1-9]))|([1-9]([0-9]{1,5})?(\.\d{1,2})?)?)?$/;
    if (!reg.test(value) && value) {
        return callback(new Error('请输入整数限6位，小数限2位'));
    }
    callback();
}
// 格式化价格(包含0)
export function validatePriceZero (rule, value, callback) {
    let reg = /(^[1-9]\d{0,5}(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;
    if (!reg.test(value) && value) {
        return callback(new Error('请输入整数限6位，小数限2位'));
    }
    callback();
}
// 身份证号
export function validateCardID (rule, value, callback) {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!reg.test(value) && value) {
        return callback(new Error('请输入正确的身份证号'));
    }
    callback();
}
// 手机号
export function validateTelephone (rule, value, callback) {
    let reg = /^[1][2-9][0-9]{9}$/;
    if (!reg.test(value)) {
        return callback(new Error('请输入正确的手机号'));
    }
    callback();
}
// 不为0的数字验证
export function numberReg (rule, value, callback) {
    let reg = /^[1-9](\d+)?$/;
    if (!reg.test(value) && value) {
        return callback(new Error('请输入正整数'));
    }
    callback();
}
