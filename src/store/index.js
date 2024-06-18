import { defineStore } from "pinia";

export default defineStore("main", {
  state() {
    return {
      theme: "light",
    };
  },
  actions: {
    switchTheme(theme) {
      this.theme = theme;
    },
  },
});
