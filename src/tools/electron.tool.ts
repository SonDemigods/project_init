// 导入electron
const { dialog } = require('electron').remote

/**
 * @functionName showOpenDialog
 * @description 打开文件夹选择窗口
 * @author 张航
 * @date 2020-10-20 16:03:08
 * @version V1.0.0
 */
export const showOpenDialog = () => {
  return dialog.showOpenDialog({
    //默认路径
    defaultPath: '',
    //选择操作，此处是打开文件夹
    properties: [
      'openDirectory'
    ],
    //过滤条件
    filters: [
      { name: 'All', extensions: ['*'] }
    ]
  })
}
