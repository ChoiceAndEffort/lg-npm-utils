/**
 * @description: 金钱转为科学计数法
 * @param {Number} value
 * @return {*}
 */
export function numberToCurrencyNo(value) {
  if (!value) return 0;
  // 获取整数部分
  const intPart = Math.trunc(value);
  // 整数部分处理，增加,
  const intPartFormat = intPart
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  // 预定义小数部分
  let floatPart = '';
  // 将数值截取为小数部分和整数部分
  const valueArray = value.toString().split('.');
  if (valueArray.length === 2) {
    // 有小数部分
    floatPart = valueArray[1].toString(); // 取得小数部分
    return intPartFormat + '.' + floatPart;
  }
  return intPartFormat + floatPart;
}


/**
 * @description: 金额转为科学计数法保留两位小数
 * @param {*} num
 * @return {*}
 */
export function amountFormat(num) {
  var numArr = Number(num).toFixed(2).split('.');
  num = numArr[0];
  var result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  result = result + '.' + numArr[1];
  return result;
}
