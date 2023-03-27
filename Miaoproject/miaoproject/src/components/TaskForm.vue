<template>
  <div class="task-form">
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="task-name">任务名称</label>
        <input type="text" id="task-name" v-model="task.name" required />
      </div>
      <div class="form-group">
        <label for="list-name">所属分类</label>
        <select id="list-name" v-model="task.list" required>
          <option disabled value="">请选择分类</option>
          <option
            v-for="(list, index) in lists"
            :key="index"
            :value="list.name"
          >
            {{ list.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="due-date">截止日期</label>
        <input type="date" id="due-date" v-model="task.dueDate" />
      </div>
      <div class="form-group">
        <label for="reminder">提醒时间</label>
        <input type="datetime-local" id="reminder" v-model="task.reminder" />
      </div>
      <div class="form-group">
        <label for="is-recurring">是否重复</label>
        <input type="checkbox" id="is-recurring" v-model="task.isRecurring" />
      </div>
      <div class="form-group">
        <label for="priority">优先级</label>
        <select id="priority" v-model="task.priority">
          <option value="low">低</option>
          <option value="normal">中</option>
          <option value="high">高</option>
        </select>
      </div>
      <div class="form-group">
        <label for="notes">备注</label>
        <textarea id="notes" v-model="task.notes"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="button-primary">保存</button>
        <button type="button" @click="$emit('cancel')" class="button-cancel">
          取消
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    formTitle: {
      type: String,
      required: true,
    },
    task: {
      type: Object,
      default: () => ({
        name: "",
        list: "",
        dueDate: "",
        reminder: "",
        isRecurring: false,
        priority: "normal",
        notes: "",
      }),
    },
    lists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.task.list === "") {
        this.errorMessage = "请选择所属分类！";
        return;
      }

      // 使用 localStorage API 存储数据
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
      const tasks = storedTasks[this.task.list] || [];
      tasks.push(this.task);
      storedTasks[this.task.list] = tasks;
      localStorage.setItem("tasks", JSON.stringify(storedTasks));

      this.$emit("submit");
    },
  },
  watch: {
    task: {
      handler() {
        this.$emit("input", this.task);
      },
      deep: true,
    },
  },
  created() {
    // 从 localStorage API 中加载数据
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const tasks = storedTasks[this.task.list] || [];
    tasks.forEach((task) => {
      // 将任务数据更新到组件中
      this.$emit("addTask", task);
    });
  },
};
</script>

<style scoped>
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
</style>

