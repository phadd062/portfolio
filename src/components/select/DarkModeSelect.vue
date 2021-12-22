<script setup lang="ts">
import { inject } from "vue";
import SelectComponent from "./SelectComponent.vue";

const darkMode = inject("darkMode");
const changeThemeFunc: any = inject("selectThemeCategory");
</script>

<template>
	<SelectComponent @change="changeThemeFunc($event)">
		<option :selected="darkMode === 'light'" value="light">Light Theme</option>
		<option :selected="darkMode === 'dark'" value="dark">Dark Theme</option>
		<option
			:selected="darkMode !== 'light' && darkMode !== 'dark'"
			value="system"
		>
			System Theme
		</option>
	</SelectComponent>
</template>
