<template>
  <div class="TaskBox">

        <router-view  ></router-view>
        

  </div>

</template>

<script>
export default {
  name: "TaskList.vue",
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

</style>