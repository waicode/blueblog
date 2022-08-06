<script setup lang="ts">
// TODO: Nuxt3に`scrollToTop: true`がないため暫定対応
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
