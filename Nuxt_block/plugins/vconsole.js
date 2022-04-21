/*
 * @Description: xiaoHao
 * @Date: 2022-04-20 17:23:54
 * @LastEditTime: 2022-04-20 17:31:19
 * @FilePath: \mytest\Nuxt\Nuxt_block\plugins\vconsole.js
 */

import VConsole from "vconsole";

const vConsole = process.env.NODE_ENV === 'development' ? new VConsole() : ''
export default vConsole