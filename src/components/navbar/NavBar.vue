<script setup lang="ts">
import DarkModeSelect from "../select/DarkModeSelect.vue";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const scrollPageTo = (navEl: string) => {
	const el = document.querySelector(`#${navEl}`)!;
	el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
	<nav
		class="bg-slate-200 dark:bg-slate-900 dark:bg-opacity-100 flex justify-between items-center px-1 fixed min-w-full border-b-2 border-b-slate-900"
	>
		<div
			class="flex justify-around items-center w-full md:w-5/12 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
		>
			<a href="#" class="nav-button" @click.prevent="scrollPageTo('home')"
				>Home</a
			>
			<a href="#" class="nav-button" @click.prevent="scrollPageTo('about')"
				>About</a
			>
			<a href="#" class="nav-button" @click.prevent="scrollPageTo('portfolio')"
				>Portfolio</a
			>
			<a href="#" class="nav-button" @click.prevent="scrollPageTo('social')"
				>Social</a
			>
		</div>
		<div
			class="md:flex justify-around items-center hidden md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4"
		>
			<div>
				<DarkModeSelect />
			</div>
			<div class="text-slate-900 dark:text-gray-50 font-semibold text-xl mb-1">
				|
			</div>
			<a target="_blank" href="https://github.com/phadd062" class="nav-button">
				<font-awesome-icon :icon="faLinkedin" /> LinkedIn
			</a>
			<a target="_blank" href="https://github.com/phadd062" class="nav-button">
				<font-awesome-icon :icon="faGithub" /> GitHub
			</a>
		</div>
	</nav>
</template>
