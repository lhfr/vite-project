<!-- 自定义 hook -->
<!-- 自定义 hook -->
<template>
  <button ref="buttonRef">Click me</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useEventListener } from "vhooks-ts";

const buttonRef = ref(null);

const onClick = (e) => {
  console.log("button clicked!", e);
};

useEventListener("click", onClick, buttonRef);
</script>
