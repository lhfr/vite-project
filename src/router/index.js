import { createRouter, createWebHistory } from "vue-router";

// 静态路由表
export const routes = [
  {
    // 图标显示
    id: 1,
    name: "图标显示",
    path: "/icon",
    component: () => import("../views/Icon.vue"),
  },
  {
    // 主题切换
    id: 2,
    name: "主题切换",
    path: "/theme",
    component: () => import("../views/Theme.vue"),
  },
  {
    // 响应式
    id: 3,
    name: "响应式组件",
    path: "/response",
    component: () => import("../views/Response/index.vue"),
  },
];

// 路由对象
export default createRouter({
  history: createWebHistory(),
  routes,
});
