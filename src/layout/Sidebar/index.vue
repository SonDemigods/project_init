<template>
  <el-menu default-active="/Home"
           :router="true"
           :background-color="theme.navBgColor"
           :text-color="theme.navTextColor"
           :active-text-color="theme.navActiveTextColor"
           :collapse="collapse"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">

    <menu-item :list="menuList" />
  </el-menu>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue'

import _ from  'lodash'

import commonRoutes from '@/router/common.routes'
import businessRoutes from '@/router/business.routes'

import themeConfig  from '@/config/theme.config'

import {
  IF_routerItem
} from './interface'

import menuItem from './menuItem.vue'
export default defineComponent({
  name: 'Sidebar',
  components: {
    menuItem
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {

    // 主题配置
    const theme = computed((): Object => {
      return themeConfig
    })

    /**
     * @functionName menuInit
     * @param {Array} routes 待处理的路由数组
     * @return {Array} 处理后的菜单数组
     * @description 初始化菜单列表
     * @author 张航
     * @date 2021-04-20 16:38:23
     * @version V1.0.0
     */
    const menuInit = (routes: Array<any>):Array<any> => {
      const arr: Array<any> = []
      routes.map((item) => {
        const { meta } = item
        if (meta && !meta.menuHide) {
          const obj: IF_routerItem = {
            title: meta.title,
            icon: meta.icon,
            path: item.path
          }

          // 对含有子项的路由进行递归处理
          if (!_.isEmpty(item.children)) {
            obj.children = menuInit(item.children)
          }
          arr.push(obj)
        }
      })
      return arr
    }

    // 根据路由生成左侧菜单
    const menuList = computed((): Array<Object> => {
      // 合并路由配置
      const routes = [...commonRoutes, ...businessRoutes]
      return menuInit(routes)
    })

    return {
      theme,
      menuInit,
      menuList
    }

  }
})
</script>
<style lang="scss">
.el-menu--collapse {
  .el-submenu {
    .el-submenu__title {
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>
