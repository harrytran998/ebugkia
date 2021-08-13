<template>
  <div class="container">
    <div v-for="post in props.postsResponse.posts" :key="post.ID">
      <h3 class="text-gray-800 font-medium">
        {{ post.title }}
      </h3>
      <blockquote v-html="post.excerpt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostsResponse } from "~/services";

const props = defineProps<{
  postsResponse: PostsResponse;
}>();
</script>
