<template>
  <el-container>

    <!-- sidebar 侧边栏 START -->
    <el-aside :width="isCollapse ? '65px' : '200px'">
      <div class="pi-logo"
           :style="{ width: isCollapse ? '65px' : '200px'}">
        <img :src="logo"
             class="logo">
        <span class="title">项目创建工具</span>
      </div>
      <Sidebar :collapse="isCollapse" />
    </el-aside>
    <!-- sidebar 侧边栏 END -->

    <el-container>

      <!-- header 页头 START -->
      <el-header>
        <Header :collapse="isCollapse"
                @on-change-collapse="changeCollapse" />
      </el-header>
      <!-- header 页头 END -->

      <!-- main 主显示区 START -->
      <el-main class="pi-main">
        <el-card shadow="hover" class="main-card">
          <Main />
        </el-card>
      </el-main>
      <!-- main 主显示区 END -->

      <!-- footer 页脚 START -->
      <el-footer :height="40"
                 class="pi-footer">
        <Footer />
      </el-footer>
      <!-- footer 页脚 END -->

    </el-container>

  </el-container>
</template>

<script lang="ts">
import { 
  defineComponent,
  ref
} from 'vue'

// 导入页头组件
import Header from '@/layout/Header/index.vue'

// 导入页脚菜单组件
import Footer from '@/layout/Footer/index.vue'

// 导入左侧菜单组件
import Sidebar from '@/layout/Sidebar/index.vue'

// 导入主位置子组件
import Main from '@/layout/Main/index.vue'

// logo图片
import logo from '@/assets/logo.png'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Footer,
    Sidebar,
    Main
  },
  props: {},
  setup() {

    // 左侧菜单的收起状态
    const isCollapse = ref(false)

    /**
     * @functionName changeCollapse
     * @param {Boolean} type 要变更的状态
     * @description 根据参数变更左侧菜单的状态
     * @author 张航
     * @date 2021-08-19 16:26:22
     * @version V1.0.0
     */
    const changeCollapse = (type: boolean) => {
      isCollapse.value = type
    }

    return {
      isCollapse,
      changeCollapse,
      logo
    }
  }
})
</script>
<style lang="scss">
.pi {
  &-logo {
    box-sizing: border-box;
    height: 60px;
    padding: 10px;
    background: #303133;
    transition: width .388s ease;
    border-right: solid 1px #e6e6e6;

    .logo {
      display: inline-block;
      width: 40px;
      max-height: 40px;
      vertical-align: top;
    }

    .title {
      display: inline-block;
      line-height: 40px;
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
    }
  }
  &-main {
    height: calc(100vh - 100px);
    background: #f5f5f5;
    box-sizing: border-box;
    padding: 10px;

    .main-card {
      height: calc(100vh - 122px);
    }
  }

  &-footer {
    line-height: 40px;
    text-align: center;
    background: #bbbbbb;
  }
}
</style>
