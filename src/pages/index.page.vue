<template>
  Hello {{ message }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('hieu')
</script>
