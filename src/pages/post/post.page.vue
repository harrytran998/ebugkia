<template>
  <div class="container mx-auto grid grid-cols-6">
    <div class="col-span-4">
      <div class="mb-6">
        <h1 ref="titleRef" class="font-bold mb-4 text-gray-700 text-4xl">
          {{ post.title }}
        </h1>
      </div>
      <article class="text-base" style="content-visibility: auto" v-html="post.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const props = defineProps<{
  post: FullPost;
}>();

const titleRef = ref<HTMLElement>();

useMotion(titleRef, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 400,
    },
  },
});
</script>

<style lang="scss" scoped>
@import './wordpress.scss';
</style>
