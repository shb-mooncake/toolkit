/**
 ************************** 操作存储***************************
 */
//存储loalStorage
export const setLoalStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};
//获取localStorage
export const getLoalStorageGet = (key) => {
    if (!key) return;
    return window.localStorage.getItem(key);
};
//删除localStorage
export const removeLoalStorage = (key) => {
    if (!key) return;
    window.localStorage.removeItem(key);
};

// 存储sessionStorage
export const setSessionStorage = (key, value) => {
    if (!key) return;
    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(key, value);
};
//获取sessionStorage
export const getSessionStorage = (key) => {
    if (!key) return;
    return window.sessionStorage.getItem(key);
};
//删除sessionStorage
export const removeSessionStorage = (key) => {
    if (!key) return;
    window.sessionStorage.removeItem(key);
};

//设置cookie
export const setCookie = (key, value, expire) => {
    const d = new Date();
    d.setDate(d.getDate() + expire);
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
};
//读取cookie
export const getCookie = (key) => {
    const cookieStr = unescape(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === key) {
            cookieValue = temp[1];
            break
        }
    }
    return cookieValue
};
//删除cookie
export const delCookie = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
};