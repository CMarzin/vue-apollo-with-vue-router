<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>
<template>
	<div>
		<!-- The current route is accessible as $route in the template -->
		User {{ $route.params.id }}

		{{ userStore.user?.name }}
	</div>
</template>
