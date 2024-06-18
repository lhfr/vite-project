<template>
  <ul class="w-[300px] flex flex-wrap">
    <li
      v-for="item in list"
      :key="item.id"
      @click="() => handleClick(item)"
      :class="{
        'bg-zinc-200': item.id === currentId,
      }"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  currentId: String,
});

const emits = defineEmits("clickItem");
const handleClick = (item) => {
  emits("clickItem", item);
};
</script>
