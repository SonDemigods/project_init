<template>
  <el-menu default-active="Home"
           :router="true"
           :background-color="theme.navBgColor"
           :text-color="theme.navTextColor"
           :active-text-color="theme.navActiveTextColor"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">

    <menu-item :list="menuList" />
  </el-menu>
</template>

<script>
import {
  getCurrentInstance,
  ref,
  onMounted
} from 'vue'

import commonRoutes from '@/router/common.routes'
import businessRoutes from '@/router/business.routes'

import menuItem from './menuItem.vue'
export default {
  name: 'Sidebar',
  components: {
    menuItem
  },
  props: {},
  setup () {

    // 解构上下文中的实例
    const { ctx } = getCurrentInstance()

    // 获取主题配置
    const { $config: {theme} } = ctx

    // 合并路由配置
    const routes = [
      ...commonRoutes,
      ...businessRoutes
    ]

    // 初始化菜单数组
    const menuList = ref([])

    /**
     * @functionName menuInit
     * @param {Array} routes 待处理的路由数组
     * @return {Array} 处理后的菜单数组
     * @description 初始化菜单列表
     * @author 张航
     * @date 2021-04-20 16:38:23
     * @version V1.0.0
     */
    const menuInit = (routes) => {
      const arr = []
      routes.map(item => {
        const { meta } = item
        if (meta && !meta.menuHide) {
          const obj = {
            title: meta.title,
            icon: meta.icon,
            path: item.path
          }

          // 对含有子项的路由进行递归处理
          if (!ctx.$_.isEmpty(item.children)) {
            obj.children = menuInit(item.children)
          }
          arr.push(obj)
        }
      })
      return arr
    }

    onMounted(() => {
      menuList.value = menuInit(routes)
    })

    return {
      theme,
      menuList,
      menuInit
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
