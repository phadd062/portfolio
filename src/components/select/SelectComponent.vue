<script setup lang="ts">
const emit = defineEmits(["change"]);
</script>

<template>
	<select
		@change="emit('change', $event)"
		class="
			px-3
			py-1.5
			text-base
			font-normal
			text-gray-700
			bg-slate-50
			border border-solid border-slate-50
			dark:border-slate-900
			rounded
			transition
			ease-in-out
			focus:text-gray-700
			focus:bg-slate-50
			focus:border-slate-900
			focus:outline-none
		"
	>
		<slot></slot>
	</select>
</template>
