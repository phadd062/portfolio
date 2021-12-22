import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: Home },
		{ path: "/about", component: About },
	],
});
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
