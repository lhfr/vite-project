import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  // 部署到 github
  base: "/vite-project/",
  build: {
    outDir: "docs",
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [join(__dirname, "/src/assets/icons")],
      // 指定symbolId格式，就是svg.use使用的href
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "/src"),
    },
  },
});
