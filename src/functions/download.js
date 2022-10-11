import { throttle } from 'lodash';

// 点击下载
export const downloadByATag = throttle(function (url) {
  const link = document.createElement('a');
  // 未点击前隐藏a链接
  link.style.display = 'none';
  // 创建URL对象，指向该文件url
  link.href = url;
  // 将a标签添加到dom中
  document.body.append(link);
  // 触发a标签点击事件
  link.click();
  // 释放之前的URL对象
  URL.revokeObjectURL(link.href);
  // 从dom中移除该a链接
  document.body.removeChild(link);
}, 2000);
