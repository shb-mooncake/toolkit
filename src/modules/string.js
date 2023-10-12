/**
 ************************** 字符串操作函数***************************
 */
//生成随机字符串
export const getStrRandom = (len) => {
    let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
    let strLen = chars.length;
    let randomStr = "";
    for (let i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * strLen));
    }
    return randomStr;
};
//字符串首字母大写
export const getStrFistLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//手机号中间四位变成*
export const getStrTelFormat = (tel) => {
    tel = String(tel);
    return tel.substr(0, 3) + "****" + tel.substr(7);
};
//驼峰命名转换成短横线命名
export const getStrKebabCase = (str) => {
    return str.replace(/[A-Z]/g, (item) => "-" + item.toLowerCase());
};
//短横线命名转换成驼峰命名
export const getStrCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase());
};
//全角转换为半角
export const getStrToCDB = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65281 && code <= 65374) {
            result += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else if (code == 12288) {
            result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
};
//半角转换为全角
export const getStrtoDBC = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 33 && code <= 126) {
            result += String.fromCharCode(str.charCodeAt(i) + 65248);
        } else if (code == 32) {
            result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
};