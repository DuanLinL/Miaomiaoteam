<template>
  <div class="List">
    <div class="HeadLine">
      <div class="left">
        <img src="@/assets/icon/kitty.png" alt="Logo" class="logo">
        <span class="title">我的一天</span>
      </div>
    </div>

    <ul>
      <li class="line">
        <img src="@/assets/icon/icon6.png" alt="Logo" class="logo">
        吃饭
      </li>
      <li class="line">
        <img src="@/assets/icon/icon6.png" alt="Logo" class="logo">
        打游戏
      </li>
      <li class="line">
        <img src="@/assets/icon/icon6.png" alt="Logo" class="logo">
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "TaskList.vue"
}
</script>

<style scoped>
.List {
  background-color: #F2F2F2;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}

.HeadLine {
  text-align: left;
}

.context {
  text-align: left;
}

.title {
  font-family: "Arial", sans-serif; /* 设置字体 */
  font-size: 20px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
}

.logo {
  height: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  float: left;
}

.icon {
  height: 20px;
  margin-left: 15px;
  cursor: pointer;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}

.line {
  background-color: #ffffff;
  list-style-type: none;
  border-radius: 18px;
  padding: 4px 4px; /* 更改为 0 左右内边距 */
  width: 100%;
  height: 30px;
  margin-left: -1.2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 22px;
}

</style>