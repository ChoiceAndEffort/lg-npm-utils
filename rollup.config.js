/*
 * @Author: suchiva@126.com
 * @Date: 2022-08-30 15:49:48
 * @LastEditors: gonglei
 * @LastEditTime: 2022-09-29 10:06:55
 * @Description: 打包
 */
import { terser } from 'rollup-plugin-terser';
// import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
export default {
  input: './src/index.js',
  output: {
    file: './lib/index.js',
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: 'bundleName'
  },
  plugins: [
    terser({
      compress: {
        // pure_funcs: ['console.log'] // 去掉console.log函数,压缩js
      }
    }),
    cleanup() ,//清除注释
  ],
  external: []
};
