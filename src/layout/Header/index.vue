<template>
  <div>
    <div class="collapse-box"
         @click="changeCollapse">
      <fold v-if="!collapse"
            class="collapse-btn" />
      <expand v-if="collapse"
              class="collapse-btn" />
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs
} from 'vue'

import { Fold, Expand } from '@element-plus/icons'

export default defineComponent({
  name: 'Header',
  components: {
    Fold,
    Expand
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {

    // 获取当前侧边栏状态
    const { collapse } = toRefs(props)

    /**
     * @functionName changeCollapse
     * @description 根据当前侧边栏状态，收起/展开侧边栏
     * @author 张航
     * @date 2021-08-24 09:54:14
     * @version V1.0.0
     */
    const changeCollapse = ():void => {
      context.emit('on-change-collapse', !collapse.value)
    }

    return {
      changeCollapse
    }
    
  }
})
</script>
<style lang="scss" scoped>
.collapse {
  &-box {
    display: inline-block;
    width: 60px;
    height: 60px;
  }

  &-btn {
    width: 24px;
    height: 24px;
    color: #666666;
    margin: 18px 0;
    cursor: pointer;

    &:hover {
      color: #333333;
    }
  }
}
</style>
