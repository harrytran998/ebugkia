<template>
  <div class="container mx-auto">
    <div
      v-for="post in postsResponse.posts"
      :key="post.ID"
      class="mb-6"
      @click="() => onClick(post.slug)"
    >
      <Link :to="`/p/${post.slug}`">
        <h3 class="font-medium text-gray-700 prose-2xl">
          {{ post.title }}
        </h3>
        <blockquote v-html="post.excerpt" />
      </Link>
      <div class="flex mt-4 items-center">
        <div class="flex-shrink-0">
          <span class="sr-only">{{ post.author.nice_name }}</span>
          <img class="rounded-full h-10 w-10" :src="post.author.avatar_URL" alt="" />
        </div>
        <div class="ml-3">
          <p class="font-medium text-sm text-gray-900">
            <a href="#">{{ post.author.nice_name }}</a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-16"> {{ post.formattedDate }} </time>
            <span aria-hidden="true"> &middot; </span>
            <span>6 phút đọc</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigate } from 'vite-plugin-ssr/client/router';

import { PostsResponse } from '@/services';

const props = defineProps<{
  postsResponse: PostsResponse;
}>();

const onClick = (slug: string) => {
  navigate(`/p/${slug}`);
};
</script>
