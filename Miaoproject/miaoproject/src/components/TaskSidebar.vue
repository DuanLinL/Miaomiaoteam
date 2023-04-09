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
            @click="selectList(list.name); OutActionBoxNum=index"

          >
            <img :src="iconPath(list.icon)" alt="List icon" class="list-icon" />
            {{ list.name }}
          </li>

          <!-- 分隔线 -->
          <hr class="separator" />
          <!-- 商店 -->
          <li
            :class="{ 'is-selected': selectedList === '喵喵小铺', 'meow-shop': true }"
            @click="selectList('喵喵小铺')"
          >
            <img src="@/assets/icon/shop.png" alt="喵喵小铺" class="list-icon" />
            喵喵小铺
          </li>
          <!-- 分隔线 -->
          <hr class="separator" />

          <!-- 自定义分类列表 -->
          <li
            v-for="(list, index) in customLists"
            :key="`custom-${index}`"
            :class="{ 'is-selected': selectedList === list.name }"
            @click="selectList(list.name)"
            @contextmenu.prevent="showContextMenu($event, index)"
          >
            <img :src="iconPath(list.icon)" alt="List icon" class="list-icon" />
            {{ list.name }}
          </li>

          <!-- 添加列表按钮即输入选择框 -->
          <li class="add-list-item">
            <button class="add-list-button" ref="addListButton" @click="showAddListInput = true">+ 添加列表</button>
          </li>
          <div class="add-list-input" :class="{ 'show': showAddListInput }" @click.stop="">
            <div class="add-list-input-wrapper" ref="addListInputWrapper">
              <span class="add-list-input-icon iconfont icon-add"></span>
              <input
                type="text"
                class="add-list-input-text"
                v-model="newListName"
                placeholder="输入列表名称"
              />
              <span class="add-list-input-icon iconfont icon-close" @click="cancelAddList"></span>
            </div>
            <div class="icon-container">
              <label v-for="icon in icons" :key="icon" class="icon-option">
              <input
                type="radio"
                name="icon"
                :value="icon"
                v-model="selectedIcon"
                class="icon-radio"
              />
              <img :src="iconPath(icon)" alt="Icon" class="icon-preview" />
              </label>
            </div>
          <button class="add-list-input-button" @click="confirmAddList">确定</button>
        </div>
        </ul>
      </div>
    </div>

  </div>

  <!-- 新建分类列表删除按钮 -->
  <div
    v-if="contextMenuVisible"
    class="context-menu"
    ref="contextMenu"
    :style="{ left: `${contextMenuPosition.x}px`, top: `${contextMenuPosition.y}px` }"
    >
    <img
      src="@/assets/icon/waste.png"
      alt="删除"
      class="delete-icon"
      @click="deleteList(selectedListIndex); contextMenuVisible = false"
    />
  </div>

  <TaskList :action-box-num="OutActionBoxNum"/> <!-- 列表组件，用于显示待办事项列表 -->

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
        { name: "我的一天", tasks: [], icon: "kitty.png" },
        { name: "重要", tasks: [], icon: "star.png" },
        { name: "全部任务", tasks: [], icon: "alltask.png" },
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
    iconPath(icon) {
    return require(`@/assets/icon/${icon}`);
  },
    addList() {
      this.showAddListInput = true;
    },
    selectList(name) {
      this.$emit("update:selectedList", name);
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
    // 确认添加列表
    confirmAddList() {
      if (!this.newListName.trim()) {
        alert("列表名称不能为空");
        return;
      }
      const newList = { name: this.newListName, tasks: [], icon: this.selectedIcon };
      this.customLists.push(newList);
      localStorage.setItem("customLists", JSON.stringify(this.customLists));
      this.newListName = "";
      this.showAddListInput = false;
      this.selectedIcon = this.icons[0];
    },
    // 取消添加列表
    cancelAddList() {
      this.showAddListInput = false;
      this.newListName = "";
      this.selectedIcon = this.icons[0];
    },
    // 显示删除悬浮窗
    showContextMenu(event, index) {
      this.contextMenuVisible = true;
      this.contextMenuPosition = { x: event.clientX, y: event.clientY };
      this.selectedListIndex = index;
    },
    //检查目标是否在悬浮窗
    closeContextMenu(event) {
      if (!this.$refs.contextMenu || !this.$refs.contextMenu.contains(event.target)) {
        this.contextMenuVisible = false;
      }
    },
    // 检查目标是否在选择窗口
    handleClickOutside(event) {
      if (
        this.showAddListInput &&
        this.$refs.addListInputWrapper &&
        !this.$refs.addListInputWrapper.contains(event.target) &&
        event.target !== this.$refs.addListButton
      ) {
        this.cancelAddList();
      }
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


.iconfont {
  font-size: 0.5rem;
  margin-right: 0.5rem;
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

.add-list-item button {
  font-size: 1rem;
  color: #2d2d2c;
  font-family: "Arial", sans-serif;
  list-style-type: none;
  padding: 4px 0px; 
  width: 200px;
  height: 35px;
  background-color: #ffffff;
  border: 2px dashed #fffc61;
  border-radius: 12px;
}

.add-list-input {
  position: relative;
  top:40%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px dashed #c3c3c3;
  border-radius: 4px;
  transition: all 0.3s;
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.add-list-input.show {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.add-list-input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.add-list-input-icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
}

.add-list-input-text {
  flex-grow: 1;
  border: none;
  outline: none;
}

.add-list-input-button {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #ffff38;/*选择窗口确定按钮样式 */
    border: none;
    border-radius: 4px;
    color: #5d5d5d;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .icon-preview {
    width: 25px; /* 选择窗口图标大小*/
    height: 25px; 
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.icon-option {
  flex-basis: 20%; /* 选择窗口图标排列*/ 
  margin-bottom: 10px;
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







