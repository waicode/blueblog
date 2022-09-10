<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
defineProps<{ id: string }>();
</script>

<template>
  <h4 :id="id" class="ContentProseH4">
    <AppLink :href="`#${id}`">
      <AppText :type="TEXT_SIZE.HEADING4"><slot /></AppText>
    </AppLink>
  </h4>
</template>

<style lang="scss">
$head4-after-bg-color: $gray-99-color;
$head4-after-width: 6px;
$head4-after-height: 70%;

h4.ContentProseH4 {
  position: relative;
  padding-left: $scale24;
  margin-top: $scale32;
  margin-bottom: $scale20;

  &::after {
    position: absolute;
    top: 6px;
    left: 0;
    width: $head4-after-width;
    height: $head4-after-height;
    content: ' ';
    background-image: repeating-linear-gradient(
      $head4-after-bg-color,
      $head4-after-bg-color 1px,
      transparent 0,
      transparent 4px
    );
  }
}
</style>
