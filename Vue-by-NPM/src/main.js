import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount("#app");
