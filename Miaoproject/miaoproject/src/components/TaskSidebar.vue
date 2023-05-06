<template>
  <div class="sidebar">
    <!-- 侧边栏顶部区域，包含标题和添加列表按钮 -->
    <div class="sidebar-header">
      <div class="header-wrapper">
        <img src="@/assets/icon/task.png" alt="Logo" class="logo" />
        
        <ul class="sidebar-list">
          <!-- 默认分类列表 -->
          <li
            v-for="(list, index) in defaultLists"
            :key="`default-${index}`"
            :class="{ '': selectedList === list.name }"
            @click="pushShow(list,'about1')"
            >
            
              <img :src="iconPath(list.icon)" alt="List icon" class="list-icon" />
              {{ list.name }}
              <!-- <router-view></router-view> -->
          </li>
          
          <!-- 分隔线 -->
          <hr class="separator" />
          <!-- 商店 -->
          <li
            :class="{ 'is-selected': selectedList === '喵喵小铺', 'meow-shop': true }"
            @click="pushShow_shop('shop')"
          >
            <img src="@/assets/icon/shop.png" alt="喵喵小铺" class="list-icon" />
            喵喵小铺
          </li>
          <!-- 分隔线 -->
          <hr class="separator" />

         
          
        </ul>
      </div>
    </div>

  </div>

   <!-- 列表组件，用于显示待办事项列表 -->
  <TaskList :action-box-num="OutActionBoxNum"/> 

</template>


<script>

import TaskList from "./TaskList.vue";

export default {
  name: "TaskSidebar",
  props: {
    selectedList: {
      type: String,
      required: true,
    },
  },
  components: {
     TaskList, // 注册任务列表组件
  },
  data() {
    return {
      defaultLists: [
        { name: "今日任务", tasks: [], icon: "kitty.png",id:"1" },
        { name: "重要", tasks: [], icon: "star.png" ,id:"2"},
        { name: "已完成", tasks: [], icon: "alltask.png" ,id:"3"},
      ],
      
      OutActionBoxNum: 0,
      customLists: [],
      newListName: "",
      showAddListInput: false, // 是否显示新建列表输入框
      icons: ["icon1.png", "icon2.png", "icon3.png","icon4.png","icon5.png","icon6.png","icon7.png","icon8.png","icon9.png","icon10.png","icon11.png","icon12.png"
      ,"icon13.png","icon14.png","icon15.png","icon16.png","icon17.png","icon18.png","icon19.png","icon20.png","icon21.png","icon22.png","icon23.png","icon24.png","icon25.png"], // 可供选择的图标名称列表
      selectedIcon: "icon1.png", // 当前选中的图标
      contextMenuVisible: false,
      contextMenuPosition: { x: 0, y: 0 },
      selectedListIndex: null,
    };
  },
  
  created() {
    const savedCustomLists = JSON.parse(localStorage.getItem("customLists"));
    if (savedCustomLists) {
      this.customLists = savedCustomLists;
    }
  },
  mounted() {
    document.addEventListener('click', this.closeContextMenu);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeContextMenu);
    document.removeEventListener('click', this.handleClickOutside);
  },

  methods: {
    pushShow_shop(routeName){
      this.$router.push({
          name:routeName,
        })
    },


    pushShow(m,routeName){
        this.$router.push({
          name:routeName,
          query:{
            id:m.id
          }
        })
    }
    ,
    iconPath(icon) {
    return require(`@/assets/icon/${icon}`);
  },
    addList() {
      this.showAddListInput = true;
    },

    selectList_pushShow(name,m,routeName,m_index) {
      this.$emit("update:selectedList", name);
      this.$router.push({
          name:routeName,
          query:{
            in_index:m_index
          }
        })
    },

    deleteList(index) {
      if (confirm("确定要删除该列表吗？")) {
        this.customLists.splice(index, 1);
        localStorage.setItem("customLists", JSON.stringify(this.customLists));
      }
    },
    createTask() {
      this.$emit("createTask");
    },
    
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #ffffff;
  border-right: 1px solid #aba8a8b9;
  width: 1000px;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}

.sidebar-header {
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  align-items: center; /* 添加此行以使 task.png 图标和其他图标对齐 */
}

.header-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  height: 25px;
  width: 25px;
  margin-bottom: 0.5rem;
  margin-left: 13px;
}


.sidebar-list {
  list-style-type: none;
  border-radius: 20px;
  padding: 4px 0px; /* 更改为 0 左右内边距 */
  margin: 0;
  width: 200px;
  height: 20px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.sidebar-list li {
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 0;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  border: 1px dashed transparent;
  font-size: 1.0rem; /* 添加此行以调整字体大小 */
  font-family: "Arial", sans-serif; /* 添加此行以更改字体 */
}

.separator {
  width: 100%;
  border: none;
  border-top: 1px solid #aba8a8b9;/*分隔线样式 */
  margin: 0.5rem 0;
}

.sidebar-list li:hover {
  background-color: #fffc61;
}

.sidebar-list li.is-selected {
  background-color: #4a90e2;
  color: #ffffff;
  border-color: #ffffff;
}

.sidebar-list li.meow-shop {
  background-color: #ffffff;
  border: 2px dashed #ffff00;
}

.sidebar-list li.meow-shop:hover {
  background-color: #fffc61;
  border: 2px dashed #c8c8c3;
}

.sidebar-list li.meow-shop.is-selected {
  background-color: #ff0000;
  color: #ffffff;
  border-color: #ffffff;
}


  .list-icon {
    font-size: 1.2rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #ffffff;
    border-radius: 4px;
  }

  
  .context-menu {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #aba8a8b9;/*悬浮窗样式 */
  border-radius: 4px;
  padding: 0.5rem;
  z-index: 10;
}

.delete-icon {
  width: 20px;
  height: 20px;/*分类列表删除按钮 */
  cursor: pointer;
}

</style>







