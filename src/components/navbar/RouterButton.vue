<script setup lang="ts">
const { NavButtonLabel, NavTo } =
	defineProps<{ NavButtonLabel: string; NavTo: string }>();
</script>

<template>
	<router-link class="nav-button" :to="NavTo">{{ NavButtonLabel }}</router-link>
</template>
