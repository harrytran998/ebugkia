<template>
  <div container="~" m="x-auto" grid="~ cols-6">
    <div grid="col-span-6 xl:col-span-4">
      <div class="mb-6">
        <h1 ref="titleRef" class="font-bold mb-4 text-gray-700 text-4xl">
          {{ normalizeHtmlTag(post.title) }}
        </h1>
      </div>
      <article class="text-base" style="content-visibility: auto" v-html="post.content" />
    </div>
    <div id="birds" grid="col-span-2">
      <canvas width="340" height="340" style="width: 340px; height: 340px"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

import { normalizeHtmlTag } from '@/utils/normalize';

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
