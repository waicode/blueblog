<script setup lang="ts">
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
defineProps<{ id: string }>();
</script>

<template>
  <h3 :id="id" class="ContentProseH3">
    <AppLink :href="`#${id}`">
      <AppText :type="TEXT_SIZE.HEADING3" :color="TEXT_COLOR.NORMAL"><slot /></AppText>
    </AppLink>
  </h3>
</template>

<style lang="scss">
$head3-after-bg-color: $gray-e0-color;
$head3-after-width: 6px;
$head3-after-height: 70%;

h3.ContentProseH3 {
  position: relative;
  padding-left: $scale24;
  margin-top: $scale36;
  margin-bottom: $scale20;

  &::after {
    position: absolute;
    top: 6px;
    left: 0;
    width: $head3-after-width;
    height: $head3-after-height;
    content: ' ';
    background-color: $head3-after-bg-color;
  }
}
</style>
