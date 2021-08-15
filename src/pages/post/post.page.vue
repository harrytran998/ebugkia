<template>
  <div class="container mx-auto grid grid-cols-6">
    <div class="col-span-4">
      <div class="mb-6">
        <h3 class="text-5xl tracking-tight font-bold text-gray-700 mb-4">
          {{ post.title }}
        </h3>
      </div>
      <article class="text-base" v-html="post.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FullPost } from '@/services';

defineProps<{
  post: FullPost;
}>();
</script>
