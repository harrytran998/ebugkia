<template>
  <div class="layout">
    <navigation-bar :categories="categories" />
    <slot />
    <the-footer />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: any;
}>();
</script>
