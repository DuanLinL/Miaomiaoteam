<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="navbar-item">待办事项管理</span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <button class="navbar-item button is-primary" @click="$emit('createList')">新建分类列表</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    color: #ffffff;
    padding: 0 1rem;
    height: 60px;
  }
  
  .navbar-brand {
    font-size: 1.2rem;
  }
  
  .navbar-item {
    display: inline-block;
    padding: 0.5rem;
    color: #ffffff;
  }
  
  .button.is-primary {
    background-color: #4a90e2;
    border-color: transparent;
    color: #ffffff;
    font-size: 0.9rem;
  }
  
  .button.is-primary:hover {
    background-color: #3a78c3;
    border-color: transparent;
  }
  </style>
  