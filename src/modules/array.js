/**
 ************************** 数组操作函数***************************
 */
//数组乱序
export const getArrScrambling = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
};
//数组扁平化
export const getArrflatten = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};
//数组中获取随机数
export const getArrSample = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];