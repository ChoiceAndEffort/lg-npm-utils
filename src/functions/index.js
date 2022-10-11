/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:05
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-10 10:00:03
 * @Description: functions 入口文件
 */


import * as Validate from './validate';
import * as DealEmpty from './deal-empty';
import * as DealSerialNo from './deal-serial-no';
import * as Download from './download';
// import * as Copy from './copy';
import * as Debounce from './debounce';
import * as Throttle from './throttle';

export default {
  ...DealEmpty,
  ...DealSerialNo,
  ...Validate,
  ...Download,
  // ...Copy,
  ...Debounce,
  ...Throttle
};
