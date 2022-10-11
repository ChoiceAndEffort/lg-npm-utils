
import moment from 'moment';

/**
 * @description: 将时间格式处理成(YYYY-MM-DD HH:mm:ss)展示
 * @param {String} value
 * @return {String}'YYYY-MM-DD HH:mm:ss'
 */
export const time = function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss');
};

//将国际标准时间改成时间格式
/**
 * @description: 将时间格式处理成(YYYY-MM-DD HH:mm)展示
 * @param {String} value
 * @return {String}'YYYY-MM-DD HH:mm'
 */
export const timeFormat = (currentDate) => {
  let date = new Date(currentDate);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  let minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let time = y + '-' + m + '-' + d + ' ' + h + ':' + minute; //这里如果不需要小时 分  后边的可以不需要拼接
  return time;
};

/**
 * @description: 将时间格式处理成(YYYY-MM-DD)展示
 * @param {String} value
 * @return {String}'YYYY-MM-DD'
 */
export const shortTime = function (value) {
  return moment(value).format('YYYY-MM-DD');
};

/**
 * @description: 将时间格式处理成(YYYY年MM月DD日)展示
 * @param {String} value
 * @return {String}'YYYY年MM月DD日'
 */
export function exactDate(value) {
  return moment(value).format('YYYY年MM月DD日');
}

/**
 * @description: 将时间格式处理成(YYYY-MM)展示
 * @param {String} value
 * @return {String}'YYYY-MM'
 */
export const monthTime = function (value) {
  return moment(value).format('YYYY-MM');
};

/**
 * @description: 将时间格式处理成(MM-DD)展示
 * @param {String} value
 * @return {String}'MM-DD'
 */
export const monthDayTime = function (value) {
  return moment(value).format('MM-DD');
};

/**
 * @description: 将时间格式处理成(YYYY)展示
 * @param {String} value
 * @return {String}'YYYY'
 */
export const yearTime = function (value) {
  return moment(value).format('YYYY');
};

/**
 * @description: 将时间格式处理成(MM)展示
 * @param {String} value
 * @return {String}'MM'
 */
export const getMonth = function (value) {
  return moment(value).format('MM');
};

/**
 * @description: 将时间格式处理成(HH:mm:ss)展示
 * @param {String} value
 * @return {String}'HH:mm:ss'
 */
// export const secondsTime = function (value) {
//   return moment(value).format('HH:mm:ss');
// };

/**
 * @description: 获取当前日期的周六
 * @param {String} value
 * @return {String}
 */
// export const saturdayTime = function (value) {
//   return moment(value).endOf('week').format('YYYY-MM-DD');
// };

/**
 * @description: 获取当前日期的周日
 * @param {String} value
 * @return {String}
 */
// export const sundayTime = function (value) {
//   return moment(value).day(7).format('YYYY-MM-DD');
// };

/**
 * @description:  计算日期之间的天数
 * @param {*} sDate1 起始日期
 * @param {*} sDate2 终止日期
 * @return {Number}
 */
export const dateDiff = function (sDate1, sDate2) {
  var aDate, oDate1, oDate2, iDays;
  aDate = sDate1.split('-');
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); //转换为02-05-2018格式
  aDate = sDate2.split('-');
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) + 1; //把相差的毫秒数转换为天数
  return iDays;
};

/**
 * @description:  计算日期之间差了多少年多少月多少天
 * @param {*} start 起始日期
 * @param {*} end 终止日期
 * @return {Number}
 */
// export const diffDate = function (start, end = new Date()) {
//   let b = moment(end);
//   let y = b.diff(start, 'y');
//   let m = b.diff(start, 'M');
//   let d = b.diff(start, 'd');
//   return { y, m, d };
// };

/**
 * @description:  获取几天之后的时间
 * @param {*} date 起始时间对象
 * @param {*} days Number 当前时间'2019/12/24',传入6,则返回'2019/12/30'
 * @param {*} key key => years: 'y'   quarters: 'Q'   months: 'M'   weeks: 'w'    days: 'd'  hours: 'h'
 * @param {*} forchart 终止日期
 * @return {*}
 */
// export const addDate = function (
//   date,
//   days,
//   key = 'd',
//   forchart = 'YYYY-MM-DD'
// ) {
//   return moment(date).add(days, key).format(forchart);
// };

/**
 * @description:  通过减去时间来改变原始的 moment
 * @param {*} date 起始时间对象
 * @param {*} days Number 当前时间'2019/12/24',传入6,则返回'2019/12/30'
 * @param {*} key key => years: 'y'   quarters: 'Q'   months: 'M'   weeks: 'w'    days: 'd'  hours: 'h'
 * @param {*} forchart 终止日期
 * @return {*}
 */
export const subDate = function (
  date,
  days,
  key = 'd',
  forchart = 'YYYY-MM-DD'
) {
  return moment(date).subtract(days, key).format(forchart);
};

// export const diffDate = function (start, end = new Date()) {
//   let b = moment(end);
//   let y = b.diff(start, 'y');
//   let m = b.diff(start, 'M');
//   let d = b.diff(start, 'd');
//   return { y, m, d };
// };
