<script setup lang="ts">
import DarkModeSelect from "../select/DarkModeSelect.vue";
import RouterButton from "./RouterButton.vue";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
	<nav
		class="bg-slate-300 bg-opacity-50 dark:bg-slate-900 dark:bg-opacity-100 flex justify-between items-center border-b-2 border-b-slate-900 px-1 pt-[2px]"
	>
		<div
			class="flex justify-around items-center w-full md:w-5/12 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
		>
			<RouterButton NavButtonLabel="Home" NavTo="/" />
			<RouterButton NavButtonLabel="About" NavTo="/about" />
			<RouterButton NavButtonLabel="Portfolio" NavTo="/about" />
			<RouterButton NavButtonLabel="Resume" NavTo="/about" />
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
