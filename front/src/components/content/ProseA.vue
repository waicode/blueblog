<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <AppLink :href="href">
    <slot />
  </AppLink>
</template>
