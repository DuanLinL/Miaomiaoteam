<template>
  <div class="task-list">
    <div class="task-list-header">
      <h3>{{ selectedList }}</h3>
      <button class="button is-primary" @click="$emit('createTask')">新建任务</button>
    </div>
    <ul v-if="tasks && tasks.length > 0">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ 'is-completed': task.completed }"
      >
        <label>
          <input
            type="checkbox"
            :checked="task.completed"
            @change="completeTask(index)"
          />
          {{ task.name }}
        </label>
        <button class="button is-danger" @click="deleteTask(index)">删除</button>
      </li>
    </ul>
    <p v-else>暂无任务</p>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    selectedList: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    completeTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.$emit("updateCatReward", this.tasks[index].completed ? 1 : -1);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);

      // 更新本地存储的数据
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
      storedTasks[this.selectedList] = this.tasks;
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    },
  },
  created() {
    // 从本地存储中加载数据
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    this.tasks = storedTasks[this.selectedList] || [];
  },
};
</script>

<style scoped>
.task-list {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.task-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.task-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 0.5rem;
}

.task-list li.is-completed {
  text-decoration: line-through;
  color: #ccc;
}

.button.is-primary {
  background-color: #4a90e2;
  border-color: transparent;
  color: #ffffff;
}

.button.is-primary:hover {
  background-color: #3a78c3;
  border-color: transparent;
}

.button.is-danger {
  background-color: #e74c3c;
  border-color: transparent;
  color: #ffffff;
}

.button.is-danger:hover {
  background-color: #c0392b;
  border-color: transparent;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
}

.form-group button {
  margin-right: 0.5rem;
}

.button-primary {
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.button-cancel {
  background-color: #cccccc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

/* add task form */
.task-form {
  padding: 1rem;
}

.task-form h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.task-form textarea {
  height: 100px;
}

@media (min-width: 768px) {
  .task-list {
    max-width: 800px;
    margin: 0 auto;
  }

  .task-list-header {
    flex-wrap: wrap;
  }

  .task-list-header h3 {
    flex-basis: 100%;
    margin-bottom: 0.5rem;
  }

  .task-list-header button {
    margin-left: auto;
  }

  .task-list li {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .task-list li label {
    flex-basis: 50%;
  }

  .task-list li button {
    flex-basis: 30%;
    margin-left: 1rem;
  }
}
</style>