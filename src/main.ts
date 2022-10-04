import { createApp } from "vue";
import App from "./App.vue";
import { plugin as storePlugin } from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(storePlugin).use(vuetify).use(router).mount("#app");
