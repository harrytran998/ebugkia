<template>
  <div class="h-full shadow-md grid py-10 justify-center items-center">
    © {{ currentYear }} Hieu Tran & Harry Tran, All rights reserved.
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
