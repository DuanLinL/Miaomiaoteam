const STORAGE_KEY = "vue-todo-app";

export default {
  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
