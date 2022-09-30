/**
 * @description: 获取 yy-mm-dd 中的年份
 * @param {*} date
 * @return {*}
 */
export function getYear(date) {
  return date ? Number(date.split('-')[0]) : undefined;
}

/**
 * @description: 获取 yy-mm-dd 中的月份
 * @return {*}
 */
export function getMonth(date) {
  return date ? Number(date.split('-')[1]) : undefined;
}
