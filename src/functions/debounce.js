/**
 * @description: 输入框input事件·防抖  适用情景：输入框、搜索框input事件，等待一次性输入完后请求
 * @return {*} fn 函数
 * @return {*} delay :延迟时间/秒
 * @return {*}
 *  调用:
  1.import 引入
  2.throttle(input事件,500)
 */

export function bounce(fn, delay, ctx = window) {
  let timer = null;
  return function (...args) {
    return new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (fn instanceof Promise) {
          fn.apply(ctx, args).then((res) => {
            resolve(res);
          });
        } else {
          resolve(fn.apply(ctx, args));
        }
      }, delay);
    });
  };
}
