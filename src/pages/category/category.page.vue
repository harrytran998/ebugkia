<template>
  <div class="container mx-auto grid grid-cols-6">
    <div class="col-span-4">
      <div class="mb-6">
        <h3 class="font-bold mb-4 tracking-tight text-5xl text-gray-700"> Category </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: Category[];
}>();
</script>
