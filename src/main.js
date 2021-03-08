import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

import "./styles/theme.css";
import "./styles/globalStyles.css";

createApp(App).use(router).use(i18n).mount("#app");
