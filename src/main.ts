import "./assets/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { initializeI18n } from "./i18n";

const app = createApp(App);
const i18n = initializeI18n();

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
