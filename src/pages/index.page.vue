<template>
  <div class="container mx-auto">
    <div v-for="post in props.postsResponse.posts" :key="post.ID">
      <h3 class="text-gray-800 font-medium">
        {{ post.title }}
      </h3>
      <blockquote v-html="post.excerpt" />
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <span class="sr-only">{{ post.author.nice_name }}</span>
          <img
            class="h-10 w-10 rounded-full"
            :src="post.author.avatar_URL"
            alt=""
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
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
import { PostsResponse } from "~/services";

const props = defineProps<{
  postsResponse: PostsResponse;
}>();
</script>
