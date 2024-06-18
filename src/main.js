import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import libs from "./libs";
import "./styles/index.scss";
// 注册 svg-icons
import "virtual:svg-icons-register";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(libs);
app.mount("#app");
