// 导入文件工具包
import fse from 'fs-extra'

/**
 * @functionName emptyPath
 * @param {String} path 要清空的目录
 * @return {Boolean} 返回结果
 * @description 清空目录,不存在会创建，存在会清空
 * @author 张航
 * @date 2020-08-28 14:31:17
 * @version V1.0.0
 */

export const emptyPath = (path:string):void => {
  fse.emptyDirSync(path)
}

/**
 * @functionName outputFile
 * @param {String} filePath 输出的文件路径
 * @param {String} data 文件内容
 * @description 同步输出文件
 * @author 张航
 * @date 2020-08-28 15:38:44
 * @version V1.0.0
 */

export const outputFile = (filePath:string, data:string):void => {
  fse.outputFileSync(filePath, data)
} 
