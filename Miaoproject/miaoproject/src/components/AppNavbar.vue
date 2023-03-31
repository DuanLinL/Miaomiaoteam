<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="left">
          <img src="@/assets/icon/miaomiao.png" alt="Logo" class="logo" />
          <span class="title">MiaomiaoTodo</span>
        </div>
        <div class="right">
          <img src="@/assets/icon/settings.png" alt="Settings" class="icon" @click="toggleSettings" />
          <img src="@/assets/icon/help.png" alt="Help" class="icon" @click="toggleHelp" />
        </div>
      </div>
    </nav>
    <SettingsSidebar :show="showSettings" @close="toggleSettings" />
    <HelpSidebar :show="showHelp" @close="toggleHelp" />
  </div>
</template>

<script>
import SettingsSidebar from "./SettingsSidebar.vue";
import HelpSidebar from "./HelpSidebar.vue";

export default {
  name: "AppNavbar",
  components: {
    SettingsSidebar,
    HelpSidebar,
  },
  data() {
    return {
      showSettings: false,
      showHelp: false,
    };
  },
  methods: {
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
  },
};
</script> 

<style scoped>
.navbar {
  background-color: #e6ee49;
  color: #292323;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  margin-right: 5px;
}

.icon {
  height: 20px;
  margin-left: 15px;
  cursor: pointer;
}

.title {
  font-family: "Arial", sans-serif; /* 设置字体 */
  font-size: 20px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-brand {
    flex-direction: column;
  }

  .left {
    margin-bottom: 10px;
  }

  .right {
    margin-top: 10px;
  }
}
</style>




  