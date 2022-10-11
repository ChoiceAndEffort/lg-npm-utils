/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:23
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-09 14:51:14
 * @Description: 处理表格序号的相关方法
 */

/**
 * @description: 序号 双位数(将表格的序号处理成双位数的序号)
 * @param {String|Number} index
 * @return {*}
 */
export const doubleDigit = (index) => {
  return index + 1 < 10 ? `0${index + 1}` : index + 1;
};

/**
 * @description: 自定义列方法(百位补零)
 * @param {String|Number} index 序号
 * @return {*}
 */
export const indexMethod = (index) => {
  let cur = index + 1;
  switch (true) {
    case cur > 0 && cur < 10:
      return '00' + cur;
    case cur >= 10 && cur <= 99:
      return '0' + cur;
    default:
      return cur;
  }
};

/**
 * @description: table序号
 * @param {*} index
 * @return {*}
 */
export function indexFormatter(index) {
  let result = index;
  if (Number(index) < 9) {
    result = '00' + (index + 1);
  } else if (Number(index) < 99) {
    result = '0' + (index + 1);
  } else {
    result = index + 1;
  }
  return result;
}
