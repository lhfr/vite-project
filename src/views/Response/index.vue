<!-- 响应式处理方案 -->
<template>
  <mobile
    :list="list"
    :currentId="currentId"
    @clickItem="handleClickItem"
    v-if="isMobile"
  />
  <pc :list="list" :currentId="currentId" @clickItem="handleClickItem" v-else />
</template>
<script setup>
import { ref } from "vue";
import isMobile from "@/hooks/useMobile";
import Mobile from "./Mobile.vue";
import Pc from "./Pc.vue";

const list = Array(30)
  .fill()
  .map((item, index) => ({
    id: index + "",
    name: index,
  }));
const currentId = ref("0");

const handleClickItem = (item) => {
  currentId.value = item.id;
};
</script>
