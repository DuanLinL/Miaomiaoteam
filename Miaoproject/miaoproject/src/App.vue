<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <Sidebar @selectList="updateSelectedList" />
      <TaskList :selectedList="selectedList" @updateCatReward="updateCatReward" />
    </div>
    <CatReward :catFood="catFood" />
    <CatInteraction />
  </div>
</template>

<script>
import Navbar from "./components/AppNavbar.vue";
import Sidebar from "./components/TaskSidebar.vue";
import TaskList from "./components/TaskList.vue";
import CatReward from "./components/CatReward.vue";
import CatInteraction from "./components/CatInteraction.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    TaskList,
    CatReward,
    CatInteraction,
  },
  data() {
    return {
      selectedList: "",
      catFood: 0,
    };
  },
  methods: {
    updateSelectedList(list) {
      this.selectedList = list;
    },
    updateCatReward(reward) {
      this.catFood += reward;
    },
  },
};
</script>

<style>
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
