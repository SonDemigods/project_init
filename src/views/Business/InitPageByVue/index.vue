<template>
  <div>
    <el-button type="primary"
               @click="exportProject">生成项目</el-button>
  </div>
</template>

<script lang="ts">
// 导入vue功能
import { defineComponent } from 'vue'

// 导入electron工具
import { showOpenDialog } from '@/tools/electron.tool'

// 导入template工具
import { writeFile } from '@/tools/template.tool'

export default defineComponent({
  name: 'InitPageByVue',
  components: {},
  props: {},
  setup() {
    /**
     * @functionName selectPathHandle
     * @description 打开路径选择面板
     * @author 张航
     * @date 2021-09-09 16:37:35
     * @version V1.0.0
     */
    const selectPathHandle = (): void => {
      showOpenDialog().then((res) => {
        if (!res.canceled) {
          writeFile(res.filePaths[0], 'build')
        } else {
          console.log('取消操作！')
        }
      })
    }

    /**
     * @functionName exportProject
     * @description 导出项目事件
     * @author 张航
     * @date 2021-09-09 16:36:09
     * @version V1.0.0
     */
    const exportProject = (): void => {
      selectPathHandle()
    }

    return {
      exportProject
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
