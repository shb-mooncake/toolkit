import * as ToolkitNumber from "./modules/number";
import * as ToolkitArray from "./modules/array";
import * as ToolkitString from "./modules/string";
import * as ToolkitConversion from "./modules/conversion";
import * as ToolkitStorage from "./modules/storage";
import * as ToolkitVerify from "./modules/verify";
import * as ToolkitDevice from "./modules/device";
import * as ToolkitTrowser from "./modules/browser";
import * as ToolkitTime from "./modules/time";
import * as ToolkitJs from "./modules/js";

// 当前时间
export const nowTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate());
    const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours());
    const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes());
    const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds());
    return +year + "年" + (month + 1) + "月" + date + "日 " + hour + ":" + miu + ":" + sec+"-------";
};