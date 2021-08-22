<template>
  <div class="container mx-auto grid grid-cols-6">
    <div class="col-span-4">
      <div class="mb-6">
        <h1 ref="titleRef" class="font-bold mb-4 text-gray-700 text-4xl">
          {{ post.title }}
        </h1>
      </div>
      <article class="text-base" v-html="post.content" style="content-visibility: auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FullPost } from '@/services';
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
:deep(article) {
  p {
    @apply mb-6 prose-lg text-gray-600;
  }
  h2,
  h3 {
    @apply text-3xl text-gray-700;
  }
  pre {
    @apply whitespace-pre-wrap break-words bg-blue-100 rounded p-4;
  }
  ul,
  ol {
    li {
      @apply py-1 prose-lg;
      list-style-image: none;
    }
  }
  figure {
    @apply relative mx-0 my-4 py-4 text-center rounded bg-light-50 bg-clip-padding;
    border: solid 4px transparent;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -2;
      border-radius: inherit;
      margin: -4px;
      background: var(--lol);
    }

    blockquote {
      p {
        @apply text-xl italic mb-2 text-gray-500;
      }
      cite {
        @apply text-gray-600;
      }
    }
  }
}
</style>
