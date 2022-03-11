<script setup lang="ts">
// https://www.vectorlogo.zone/
import TailwindCSS from "../assets/tailwindcss-icon.svg";
import PostgreSQL from "../assets/postgresql-icon.svg";
import Vue from "../assets/vuejs-icon.svg";
</script>

<template>
	<div class="flex justify-center items-center">
		<div class="bg-gray-200">
			<h1>This is me Peter!</h1>
		</div>
		<div class="bg-slate-500">
			<img
				id="preview-image"
				:src="TailwindCSS"
				crossorigin="anonymous"
				class="w-24"
			/>
		</div>
		<div class="bg-sky-400">
			<img
				id="preview-image"
				:src="PostgreSQL"
				class="w-24"
				alt="PostgreSQL"
				title="PostgreSQL"
			/>
		</div>
		<div class="bg-red-200 text-9xl text-green-900 text-opacity-90">
			<img id="preview-image" :src="Vue" class="w-24" />
		</div>
	</div>
	<button
		class="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 border-2 border-slate-400 hover:border-slate-300"
	>
		hello
	</button>
</template>
