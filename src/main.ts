import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
