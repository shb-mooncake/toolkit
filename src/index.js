// 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
export function dayOfYear(date) {
    let formatDate = null;
    if (!date) {
        formatDate = new Date();
    } else {
        formatDate = typeof date === "string" ? new Date(date) : date;
    }
    // 如果传入的是无效的字符串,那么就默认是当前日期
    if (!formatDate.getFullYear) {
        formatDate = new Date();
    }
    const year = formatDate.getFullYear();
    const firstDayOfYear = new Date(year, 0, 0);
    const timeGap = formatDate.getTime() - firstDayOfYear.getTime();
    return Math.floor(timeGap / 1000 / 60 / 60 / 24);
};

//根据id等属性过滤数组对象
export function filterObjectArr(arr, property) {
    let map = {};
    arr.forEach((item) => {
        if (!map[item[property]]) {
            map[item[property]] = item;
        }
    });
    return Object.values(map);
};