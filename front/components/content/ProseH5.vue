<script setup lang="ts">
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
</script>

<template>
  <h5 class="ContentProseH5">
    <AppText :type="TEXT_SIZE.HEADING5" :color="TEXT_COLOR.NORMAL"><slot /></AppText>
  </h5>
</template>

<style lang="scss">
h5.ContentProseH5 {
  margin-top: $scale28;
  margin-bottom: $scale20;
}
</style>
