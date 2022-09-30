/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:00
 * @LastEditors: gonglei
 * @LastEditTime: 2022-09-27 15:13:22
 * @Description: base 入口文件
 */
// export * as Array from './array';
// import DeepCompare from './deep-compare';

import * as Array from './array';
import * as Date from './date';
export default {
    ...Array,
    ...Date
};
