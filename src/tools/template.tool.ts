// 导入art-template
import template from 'art-template'

import { emptyPath, outputFile } from './fse.tool'

/**
 * @functionName renderTemplate
 * @param {*|String|Number|Boolean|Array|Object} 参数
 * @return {String} 返回渲染后的字符串
 * @description 根据参数渲染模板
 * @author 张航
 * @date 2021-09-09 16:33:33
 * @version V1.0.0
 */
const renderTemplate = (): string => {
  // TODO 添加逻辑
  // template
  return '123'
}

/**
 * @functionName writeFile
 * @param {String} path 输出的目录
 * @param {String} buildName 项目名称
 * @description 输出项目文件
 * @author 张航
 * @date 2021-09-09 16:31:35
 * @version V1.0.0
 */
export const writeFile = (path: string, buildName: string): void => {
  // 清空目录
  emptyPath(path)
  const res = renderTemplate()
  outputFile(`${path}/${buildName}/text.html`, res)
}
