
/**
 * @description: 树数组转扁平数组
 * @param {Array} tree
 * @return {*}
 */
export function treeToArray(tree) {
  let res = [];
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

/**
 * @description: 将数组转换成el-select options对应的数据结构
 * array:原数组
 * value:需要变更的value字段名
 * name:需要变更的name字段名
 */
export function saveOptionsArr(array, value, name) {
  let data = [];
  array.forEach((element) => {
    let objs = element;
    objs.value = element[value];
    objs.label = element[name];
    data.push(objs);
  });
  return data;
}

//同上边的方法
export function arrToSelectArr(arr, labelName, valueName) {
  let result = [];
  arr.forEach((item) => {
    result.push({
      value: item[valueName],
      label: item[labelName]
    });
  });
  return result;
}
