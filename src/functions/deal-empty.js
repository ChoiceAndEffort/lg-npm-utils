/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:23
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-09 16:19:47
 * @Description: 处理空置的相关方法
 */

/**
 * @description: 判断一个对象是否都不为空
 * @param {*} form 需要判断的对象
 * @return {*}
 * @author: yuanjunyi
 */
export function isObjectUnEmpty(form) {
  let flag = true;
  for (let key in form) {
    if (form[key] === '' || form[key] == null) return false;
  }
  return flag;
}

/**
 * @description: 值如果为undefined,null,''，转换成占位符，否则返回该值
 * @param {*} row
 * @param {*} column
 * @param {*} cellValue
 * @param {*} index
 * @return {*}
 */
export function emptyFormatter(row, column, cellValue, index) {
  if (cellValue === undefined || cellValue === null || cellValue === '') {
    return '--';
  } else {
    return cellValue;
  }
}

/**
 * @description: 如果字符为空, 返回'--'
 * @param {any} text
 * @return {*}
 */
export function textEmpty(text) {
  let result = '--';
  switch (typeof text) {
    case 'number':
      result = text;
      break;
    case 'string':
      if (text) {
        result = text;
      }
      break;
    case 'boolean':
      result = text;
      break;
    case 'object':
      if (text != null) {
        result = text;
      }
      break;
    default:
      break;
  }
  return result;
}

/**
 * @description: 如果数字为空, 返回0
 * @param {*} num
 * @return {*}
 */
export function numFormatter(num) {
  if (typeof num === 'undefined' || typeof num === 'null') {
    return 0;
  }
  return num.toLocaleString();
}
/**
 * @description: 0返回0,其它空值返回'-'
 * @param {*} strNo
 * @return {*}
 */
export function nonemptyFilter(strNo) {
  if (strNo === 0) {
    return 0;
  } else if (strNo === null || typeof strNo == undefined || strNo === '') {
    return '-';
  } else {
    return strNo;
  }
}
