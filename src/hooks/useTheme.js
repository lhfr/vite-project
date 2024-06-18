import { watch } from "vue";
import useStore from "@/store";

export default () => {
  const store = useStore();

  // 监听主题切换，修改html class的值
  watch(
    () => store.theme,
    (val) => {
      // 配合 dark: 后缀样式生效
      document.querySelector("html").className = val;
    },
    {
      immediate: true,
    }
  );
};
