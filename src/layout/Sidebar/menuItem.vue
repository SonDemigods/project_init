<template>
  <div>
    <div v-for="(item) in list"
              :key="item.path">
      <template v-if="item.children">
        <el-submenu>
          <template #title>
            <i :class="'el-icon-' + (item.icon || 'menu')"></i>
            <span>{{item.title}}</span>
          </template>
          <!-- <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group> -->
          <menu-item :list="item.children" />
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.path">
          <i :class="'el-icon-' + (item.icon || 'menu')"></i>
          <template #title>{{item.title}}</template>
        </el-menu-item>
      </template>

    </div>
  </div>
</template>

<script lang="ts">
// 导入vue功能
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'menuItem',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup () {}
})
</script>

<style>
</style>
