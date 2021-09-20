<template>
  <header>
    <div class="container mx-auto mb-6">
      <div class="flex py-4 justify-between items-center">
        <Link to="/" class="flex px-2 items-center lg:px-0">
          <BugIcon />
          <div class="flex flex-shrink-0 items-center"> </div>
          <div class="ml-2">
            <h3 class="font-medium text-xl text-gray-700"> EBugKia </h3>
            <p>Cuộc sống không thiếu gì ngoài bug</p>
          </div>
        </Link>
        <ul class="flex-row ml-auto hidden xl:flex">
          <li v-for="category in categories" :key="category.ID" class="px-3">
            <Link
              :to="`/c/${category.slug}`"
              :class="['border-b-2 border-transparent py-2', { 'border-red-500': category.active }]"
            >
              {{ category.name }}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BugIcon from '@/asset/images/svg/bug.svg';

const categories = [
  {
    ID: 1,
    name: 'Lập trình',
    slug: 'lap-trinh',
    active: true,
  },
  {
    ID: 2,
    name: 'Cuộc sống',
    slug: 'cuoc-song',
  },
  {
    ID: 3,
    name: 'Kỹ năng',
    slug: 'ky-nang',
  },
  {
    ID: 4,
    name: 'Agile',
    slug: 'agile',
  },
];
</script>
