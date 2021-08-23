<template>
  <div>
    <div class="collapse-box"
         @click="changeCollapse">
      <fold v-if="!collapse"
            class="collapse-btn" />
      <expand v-if="collapse"
              class="collapse-btn" />
    </div>

  </div>
</template>

<script lang="ts">
import {
  defineComponent
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
  methods: {
    changeCollapse() {
      console.log(this.collapse)
      this.$emit('on-change-collapse', !this.collapse)
    }
  },
  setup () {}
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
