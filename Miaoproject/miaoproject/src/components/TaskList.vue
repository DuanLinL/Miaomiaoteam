<template>
  <div class="TaskBox">

        <div class="HeadBox" v-if="actionBoxNum === 0">
            <div class="TaskInput">
              <input type="text">
              <div class="Input_but">按钮</div>
            </div>
            <div class="Task_List">
              <ul>
                <li v-for="list in TaskLists_1" :key= "list">{{ list.name }}</li>   
              </ul>
            </div>
        </div>
        <div class="HeadBox" v-if="actionBoxNum === 1">
          <div class="TaskInput">
              <input type="text">
              <div class="Input_but">按钮</div>
            </div>
            <div class="Task_List">
              <ul>
                <li v-for="list in TaskLists_2" :key= "list">{{ list.name }}</li>   
              </ul>
            </div>
        </div>
        <div class="HeadBox" v-if="actionBoxNum === 2">
          <div class="TaskInput">
              <input type="text">
              <div class="Input_but">按钮</div>
            </div>
            <div class="Task_List">
              <ul>
                <li v-for="list in TaskLists_3" :key= "list">{{ list.name }}</li>   
              </ul>
            </div>
        </div>

       
  </div>

</template>

<script>
export default {
  name: "TaskList.vue",
  data() {
    return {
      TaskLists_1: [
        {name:111},
        {name:222},
        {name:333}
      ],
      TaskLists_2: [
        {name:111},
        {name:222},
      ],
      TaskLists_3: [
        {name:111},

      ],
    }
  },
  props: ['actionBoxNum']
}


</script>

<style scoped>

.TaskBox {
  background-color: #F2F2F2;
  width: 100%;
  height: 100%;
  position: relative;
}

  .HeadBox{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.HeadBox .TaskInput{
  
  width: 100%;
  flex: 5;
  display: flex;
  align-items: center;
  
}

.TaskInput input{
  width: 75%;
  height: 28%;
  font-size: 1.1rem; /* 添加此行以调整字体大小 */
  font-family: "Arial", sans-serif; /* 添加此行以更改字体 */
  display: block;
  margin-left: 6%;
  border-radius: 10px;
  border:2px solid #1f1f1f;
  
}

.Input_but{
  background-color: #e6e603;
  width: 9%;
  height: 32%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid #1f1f1f;
  border-radius: 10px;
}

.HeadBox .Task_List{
  width: 100%;
  flex: 25;
  list-style-type: none;
}

ul{
  margin-top: 3%;
}

.HeadBox .Task_List li{
  list-style-type: none;
  background-color: #dadb9e;
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 4%;
  border-radius: 5px;
  min-height: 40px;
  font-size: 1.3rem;
  text-indent: 1.2em;
  display: flex;
  align-items: center;
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