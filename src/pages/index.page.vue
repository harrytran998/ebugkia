<template>
  <div class="container mx-auto grid gap-6 grid-cols-4 justify-center">
    <article
      v-for="post in posts"
      :key="post.ID"
      :data-testid="`${post.ID}`"
      border="rounded-lg"
      cursor="pointer"
      bg="red-50"
      p="4"
      m="b-6"
      display="flex"
      grid="gap-4"
      flex="col"
      justify="between"
      transform="~ hover:scale-105"
      transition="all duration-800 delay-0 ease-oop-shi"
      @click="onClick(post.slug)"
    >
      <figure>
        <Link :to="`/p/${post.slug}`">
          <h3 font="medium leading-8" text="gray-700" prose="2xl">
            {{ normalizeHtmlTag(post.title) }}
          </h3>
          <blockquote class="mt-2 line-clamp-5">
            {{ normalizeHtmlTag(post.excerpt) }}
          </blockquote>
        </Link>
      </figure>
      <div flex="~" align="items-center">
        <div flex="shrink-0">
          <span sr="only">{{ post.author.nice_name }}</span>
          <img border="rounded-full" h="10" w="10" :src="post.author.avatar_URL" alt="" />
        </div>
        <div m="l-3">
          <p font="medium" text="sm gray-900">
            <a href="#">{{ post.author.nice_name }}</a>
          </p>
          <div flex="~" space="x-1" text="sm gray-500">
            <time :datetime="`${formatDate(post.date, 'YYYY-MM-DD')}`">
              {{ post.formattedDate }}
            </time>
            <!-- <span aria-hidden="true"> &middot; </span> -->
            <!-- <span>6 phút đọc</span> -->
          </div>
        </div>
      </div>
      <div display="flex" grid="gap-2">
        <span v-for="tag in getTags(post)" :key="tag">{{ tag }}</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { navigate } from 'vite-plugin-ssr/client/router';

import { breakpoints } from '@/composables/useBreakPoints';
import { formatDate } from '@/utils/date';
import { getTags, normalizeHtmlTag } from '@/utils/normalize';

const props = defineProps<{
  posts: Post[];
}>();

const is2Xl = breakpoints.smaller('2xl').value;

const onClick = (slug: string) => {
  navigate(`/p/${slug}`);
};
</script>
