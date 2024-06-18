<!-- 主题切换方案 -->
<template>
  <div
    class="border-b p-1 bg-white dark:bg-zinc-800 border-b-zinc-200 dark:border-b-zinc-700"
  >
    <svg-icon
      :name="'theme-' + theme"
      class="w-2 h-2"
      fillClass="fill-zinc-900 dark:fill-zinc-300"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import useStore from "@/store";

const theme = ref("light");
const store = useStore();

const handleClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  store.switchTheme(theme.value);
};
</script>
