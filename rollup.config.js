/*
 * @Author: suchiva@126.com
 * @Date: 2022-08-30 15:49:48
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-09 15:41:57
 * @Description: 打包
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
const path = require('path');

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: 'bundleName',
    globals: {
      moment: 'moment',
      lodash:'_'
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    terser({
      compress: {
        // pure_funcs: ['console.log'] // 去掉console.log函数,压缩js
      }
    }),
    cleanup() //清除注释
  ],
  external: ['moment', 'lodash']
};
