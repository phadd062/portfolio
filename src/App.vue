<script setup lang="ts">
import { ref, computed, provide } from "vue";
import NavBar from "./components/navbar/NavBar.vue";

const darkMode = ref("system");

provide("darkMode", darkMode);

const checkDarkMode = () => {
	if (!("theme" in localStorage)) localStorage.setItem("theme", darkMode.value);
	const THEMELOCALSTORAGE = localStorage.getItem("theme");
	if (THEMELOCALSTORAGE === "light") darkMode.value = "light";
	else if (THEMELOCALSTORAGE === "dark") darkMode.value = "dark";
	else if (THEMELOCALSTORAGE === "system") darkMode.value = "system";
	else {
		localStorage.setItem("theme", "system");
		darkMode.value = "system";
	}
};

const selectThemeCategory = (event: any) => {
	localStorage.setItem("theme", event.target.value);
	checkDarkMode();
};
provide("selectThemeCategory", selectThemeCategory);

checkDarkMode();

const systemTheme = computed(() => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
	else return "light";
});
</script>

<template>
	<div :class="darkMode !== 'system' ? darkMode : systemTheme">
		<NavBar />
		<main>
			<router-view />
		</main>
	</div>
</template>
