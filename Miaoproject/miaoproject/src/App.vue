<template>
  <div id="app">
    <Navbar /> <!-- 导航栏组件 -->
    <div class="main-content">
      <TaskSidebar @selectList="updateSelectedList" :selected-list="selectedList" /> <!-- 侧边栏组件，用于选择待办事项列表 -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/AppNavbar.vue"; // 导入导航栏组件
import TaskSidebar from "./components/TaskSidebar.vue"; // 导入侧边栏组件

export default {
  name: "App",
  components: {
    Navbar, // 注册导航栏组件
    TaskSidebar, // 注册侧边栏组件
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};

</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  flex: 0 0 250px;
}

.task-list {
  flex: 1;
  overflow: auto;
}
</style>
