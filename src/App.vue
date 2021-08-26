<template>
  <router-view />
</template>

<script lang="ts">
// 导入vue功能
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
</style>
