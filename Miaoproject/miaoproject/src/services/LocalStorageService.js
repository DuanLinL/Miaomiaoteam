const STORAGE_KEY = "vue-todo-app";
const TASKS_STORAGE_KEY = "vue-tasks";

export default {
  // 获取存储在 localStorage 的待办事项数据
  fetch() {
    // 使用 getItem 方法从 localStorage 中获取数据
    // 如果数据不存在，返回一个空数组
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  // 将待办事项数据保存到 localStorage
  save(todos) {
    // 使用 setItem 方法将待办事项数组转换为 JSON 字符串并存储到 localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  // 新增任务相关方法
  // 获取存储在 localStorage 的任务数据
  fetchTasks() {
    // 使用 getItem 方法从 localStorage 中获取任务数据
    // 如果数据不存在，返回一个空数组
    return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) || "[]");
  },

  // 将任务数据保存到 localStorage
  saveTasks(tasks) {
    // 使用 setItem 方法将任务数组转换为 JSON 字符串并存储到 localStorage
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  },
};
