<template>
    <div class="settings-sidebar" :class="{show: show}">
      <div class="sidebar-header">
        <h2>设置</h2>
        <button @click="$emit('close')">×</button>
      </div>
      <!-- 在这里添加设置选项 -->
    </div>
  </template>
  
  <script>
  export default {
    name: "SettingsSidebar",
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  .settings-sidebar {
    position: fixed;
    top: 70px;
    right: -300px;
    width: 300px;
    height: 900px;
    background-color: #fff;
    border-radius: 10px 0 0 10px; /* 设置右上角和右下角为圆角 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.146); /* 添加阴影效果 */
    transition: right 0.3s ease-out; /* 添加向右浮出的过渡效果 */
  }
  
  .settings-sidebar.show {
    right: 0; /* 显示侧边栏 */
  }
  
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 22px;
  }
  
  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  
  
  