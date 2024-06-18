import { onMounted, onUnmounted } from "vue";

export default () => {
  const handleResize = () => {
    //获取布局视口宽度，因为开启了理想视口，布局视口=设备横向独立像素值
    const dpWidth = document.documentElement.clientWidth;
    //计算根字体大小
    const rootFontSize = Math.min(40, dpWidth / 10);
    //设置根字体大小
    document.documentElement.style.fontSize = rootFontSize + "px";
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
};
