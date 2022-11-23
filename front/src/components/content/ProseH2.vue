<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextConst';
defineProps<{ id: string }>();
</script>

<template>
  <h2 :id="id" class="ContentProseH2">
    <AppLink :href="`#${id}`">
      <AppText :type="TEXT_SIZE.HEADING2"><slot /></AppText>
    </AppLink>
  </h2>
</template>

<style lang="scss">
$head2-before-width: 29px;
$head2-before-height: 19px;

h2.ContentProseH2 {
  margin-top: $scale52;
  margin-bottom: $scale20;

  &::before {
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    background-image: url('~/assets/images/shared/miss-fajardose_h2-left@2x.png');
    width: $head2-before-width;
    height: $head2-before-height;
    margin-right: $scale8;
    margin-bottom: $scale2;
  }
}
</style>
