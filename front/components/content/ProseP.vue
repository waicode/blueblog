<script setup lang="ts">
import { TEXT_COLOR } from '@/components/app/TextComposable';
</script>

<template>
  <p class="ContentProseP">
    <AppText :color="TEXT_COLOR.NORMAL"><slot /></AppText>
  </p>
</template>
<style lang="scss">
.ContentProseP {
  margin-bottom: $scale32;
}
</style>
