<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { isHalfWidthAlphanumericSymbols } from '@/utils/util';

interface BaSubTextPropType {
  /**
   * 見出しのタイトル
   */
  title: string;
}

defineProps<BaSubTextPropType>();
</script>
<template>
  <div class="BaSubText">
    <h3 class="BaSubText__Heading">
      <AppText :type="isHalfWidthAlphanumericSymbols(title) ? TEXT_SIZE.SUB_TITLE2 : TEXT_SIZE.SUB_TITLE1">{{
        title
      }}</AppText>
    </h3>
    <!-- @slot 囲まれたタグを表示する -->
    <slot />
  </div>
</template>

<style lang="scss">
.BaSubText {
  margin-bottom: $scale28;

  &__Heading {
    margin-bottom: $scale20;
  }
}
</style>
