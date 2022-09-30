/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:23
 * @LastEditors: gonglei
 * @LastEditTime: 2022-09-26 17:26:49
 * @Description: Array
 */

/**
 * @description: 树数组转扁平数组
 * @param {Array} tree
 * @return {*}
 */
export function treeToArray(tree) {
  var res = [];
  for (const item of tree) {
    const { children, ...i } = item;
    if (children && children.length) {
      res = res.concat(treeToArray(children));
    }
    res.push(i);
  }
  return res;
}

/**
 * @description: 数组拆分
 * @param {Array} array 需拆分的数组
 * @param {*} subGroupLength :拆分后子数组的长度
 * @return {*}
 */
export function group(array, subGroupLength) {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}
