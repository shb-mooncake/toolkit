/**
 ************************** 数字操作函数***************************
 */
//生成指定范围随机数
export const getRandomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
//数字千分位分隔
export const getThousandSeparator = (n) => {
    let num = n.toString();
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = "";
        let remainder = len % 3;
        if (remainder > 0) {
            // 不是3的整数倍
            return (
                num.slice(0, remainder) +
                "," +
                num.slice(remainder, len).match(/\d{3}/g).join(",") +
                temp
            );
        } else {
            // 3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
        }
    }
};