<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';

interface BaSideTextPropType {
  /**
   * 見出しのタイトル
   */
  title: string;
}

defineProps<BaSideTextPropType>();
</script>
<template>
  <div class="BaSideText">
    <h3 class="BaSideText__Heading">
      <AppText :type="TEXT_SIZE.SIDE_HEADING">{{ title }}</AppText>
    </h3>
    <AppText :type="TEXT_SIZE.BODY1">
      <!-- @slot 囲まれたタグを表示する -->
      <slot />
    </AppText>
  </div>
</template>

<style lang="scss">
.BaSideText {
  margin-bottom: $scale28;
  &__Heading {
    margin-bottom: $scale20;
  }
}
</style>
