<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>分类列表</h3>
      <button @click="addList">+ 添加列表</button>
    </div>
    <ul class="sidebar-list">
      <li
        v-for="(list, index) in lists"
        :key="index"
        :class="{ 'is-selected': selectedList === list.name }"
        @click="selectList(list.name)"
      >
        {{ list.name }}
      </li>
    </ul>
    <TaskForm
      v-if="selectedList"
      formTitle="新建任务"
      :task="newTask"
      :lists="lists"
      @submit="addTask"
      @cancel="resetTask"
    />
  </div>
</template>

<script>
export default {
  name: "TaskSidebar",
  props: {
    selectedList: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      lists: [],
      newListName: "",
    };
  },
  created() {
    // 从localStorage中获取存储的数据
    const savedLists = JSON.parse(localStorage.getItem("lists"));

    // 如果localStorage中没有存储的数据，则使用默认数据
    if (savedLists) {
      this.lists = savedLists;
    } else {
      this.lists = [
        { name: "我的一天", tasks: [] },
        { name: "重要", tasks: [] },
        { name: "全部任务", tasks: [] },
      ];
    }
  },
  methods: {
    addList() {
      const newList = { name: this.newListName, tasks: [] };
      this.lists.push(newList);
      localStorage.setItem("lists", JSON.stringify(this.lists));
      this.newListName = "";
    },
    selectList(name) {
      this.$emit("update:selectedList", name);
    },
    deleteList(index) {
      if (confirm("确定要删除该列表吗？")) {
        this.lists.splice(index, 1);
        localStorage.setItem("lists", JSON.stringify(this.lists));
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f5f5f5;
  width: 250px;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}

.sidebar-header {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.sidebar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-list li {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s;
}

.sidebar-list li:hover {
  background-color: #e5e5e5;
}

.sidebar-list li.is-selected {
  background-color: #4a90e2;
  color: #ffffff;
}

.sidebar-list .delete-list {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s;
  color: #ffffff;
}

.sidebar-list .delete-list:hover {
  background-color: #c0392b;
}

.sidebar-list .edit-list {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #f39c12;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s;
  color: #ffffff;
}

.sidebar-list .edit-list:hover {
  background-color: #d35400;
}

.edit-list-form {
  margin-bottom: 0.5rem;
}

.edit-list-form input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
}

.edit-list-form .form-buttons {
  display: flex;
  justify-content: space-between;
}

.edit-list-form .button-primary {
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.edit-list-form .button-cancel {
  background-color: #cccccc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.add-list-form {
  margin-bottom: 0.5rem;
}

.add-list-form input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
}

.add-list-form .form-buttons {
  display: flex;
  justify-content: space-between;
}

.add-list-form .button-primary {
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.add-list-form .button-cancel {
  background-color: #cccccc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>
