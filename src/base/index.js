/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:00
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-09 14:06:34
 * @Description: base 入口文件
 */

import * as Array from './array';
import * as Date from './date';
import * as Money from './money';

export default {
  ...Array,
  ...Date,
  ...Money
};
