/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-15 16:44:01
 * @LastEditors: gonglei
 * @LastEditTime: 2022-09-26 16:26:32
 * @Description: this is 入口文件
 */

// export * as Base from './base';
// export * as Plugins from './plugins';
// export * as Functions from './functions/index';

// export { default as Functions } from './functions/index';

import Functions from './functions/index';
import Base from './base/index';
import Plugins from './plugins/index';

export default {
    ...Functions,
    ...Plugins,
    ...Base
};
