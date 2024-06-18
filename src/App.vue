<template>
  <router-link v-for="item in routes" :key="item.id" :to="item.path">
    <li>{{ item.name }}</li>
  </router-link>
  <router-view></router-view>
</template>

<script setup>
import useRem from "@/hooks/useRem";
import useTheme from "@/hooks/useTheme";
import { routes } from "./router";

useRem();
useTheme();
</script>
