<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { DropdownItem } from '@/components/app/DropdownComposable';

interface BaSideDropdownPropType {
  /**
   * 見出しのタイトル
   */
  title: string;

  /**
   * ドロップダウン未選択時の表示ラベル
   */
  label: string;

  /**
   * ドロップダウンアイテムのリスト
   */
  items: DropdownItem[];
}

defineProps<BaSideDropdownPropType>();
</script>
<template>
  <div class="BaSideDropdown">
    <h3 class="BaSideDropdown__Heading">
      <AppText :type="TEXT_SIZE.SIDE_HEADING1">{{ title }}</AppText>
    </h3>
    <AppDropdown :label="label" :items="items" />
  </div>
</template>

<style lang="scss">
.BaSideDropdown {
  margin-bottom: $scale28;
  &__Heading {
    margin-bottom: $scale20;
  }
}
</style>
