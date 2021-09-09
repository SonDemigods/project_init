<template>
  <div>
    <img :src="error404"
         class="error-bg" />
    <div class="error-btn-box">
      <el-button @click="routeGoHome">返回首页</el-button>
      <el-button type="primary"
                 @click="routeGoback">返回上一页</el-button>
    </div>
  </div>
</template>

<script lang="ts">
// 导入vue功能
import {
  defineComponent
} from 'vue'

// 导入路由功能
import {
  useRouter
} from 'vue-router'

// 导入图片
import error404 from '@/assets/error-404.svg'

export default defineComponent({
  name: '404',
  props: {},
  setup() {
    const router = useRouter()

    /**
     * @functionName routeGoHome
     * @description 返回首页
     * @author 张航
     * @date 2021-09-02 13:55:48
     * @version V1.0.0
     */
    const routeGoHome = (): void => {
      router.replace({ path: '/' })
    }

    /**
     * @functionName routeGoback
     * @description 返回上一页
     * @author 张航
     * @date 2021-09-02 13:56:47
     * @version V1.0.0
     */
    const routeGoback = (): void => {
      router.back()
    }

    return {
      error404,
      routeGoHome,
      routeGoback
    }
  }
})
</script>
<style lang="scss" scoped>
.error-bg {
  display: block;
  height: 80%;
  margin: 6% auto;
}
.error-btn-box {
  text-align: center;
}
</style>
