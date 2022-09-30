/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:05
 * @LastEditors: gonglei
 * @LastEditTime: 2022-09-27 14:05:31
 * @Description: functions 入口文件
 */

// export * as DeepCompare from './deep-compare';
// export * as validate from './validate';

import * as Bounce from './bounce';
import * as Validate from './validate';

export default {
  ...Bounce,
  ...Validate
};
