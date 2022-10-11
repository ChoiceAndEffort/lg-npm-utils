/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 14:49:23
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-09 16:27:03
 * @Description:值的相关验证
 */


/**
 * @description: 检测手机号是否合法
 * @param {Object} rule-手机号校验规则
 * @param {String|Number} value-传入的校验值
 * @param {Function} callback
 * @return {*}
 */
export const validateMobile = (rule, value, callback) => {
  if (value.length != 11) {
    callback(new Error('手机号码为11位字符'));
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    callback(new Error('手机号码不合法，请重新输入'));
  } else {
    callback();
  }
};




/**
 * @description: 检测邮箱是否合法
 * @param {*} required
 * @param {*} validator
 * @param {*} value
 * @param {*} callback
 * @return {*}
 */
export let validateEmail = (rule, value, callback) =>{
  if(!value){
      callback();
  }else if( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)) {
      callback();
  } else {
      callback(new Error('邮箱地址不合法，请重新输入'));
  }
}


/**
 * @description:验证身份证号码
 * @param {*} rule
 * @param {String|Number} code
 * @param {Function} callback
 * @return {*}
 */
export let idCardValidity = (rule, code, callback) => {
  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  };
  var tip = '';
  var pass = true;
  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
      code
    )
  ) {
    tip = '身份证号格式错误';
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    // tip = "地址编码错误"
    tip = '身份证输入错误';
    pass = false;
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split('');
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      // 校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        // tip = "校验位错误"
        tip = '身份证输入错误';
        pass = false;
      }
    }
  }
  if (!pass) {
    callback(new Error(tip));
  } else {
    callback();
  }
};
