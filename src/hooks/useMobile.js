import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

export default computed(() => {
  return width.value < 1280;
});
