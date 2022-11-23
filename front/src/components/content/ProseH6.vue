<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextConst';
</script>

<template>
  <h6 class="ContentProseH6">
    <AppText :type="TEXT_SIZE.HEADING6"><slot /></AppText>
  </h6>
</template>

<style lang="scss">
h6.ContentProseH6 {
  margin-top: $scale28;
  margin-bottom: $scale20;
}
</style>
