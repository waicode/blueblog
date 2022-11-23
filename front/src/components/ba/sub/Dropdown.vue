<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextConst';
import { DropdownItem } from '@/components/app/DropdownConst';

interface BaSubDropdownPropType {
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

defineProps<BaSubDropdownPropType>();
</script>
<template>
  <div class="BaSubDropdown">
    <h3 class="BaSubDropdown__Heading">
      <AppText :type="TEXT_SIZE.SUB_TITLE1">{{ title }}</AppText>
    </h3>
    <AppDropdown :label="label" :items="items" />
  </div>
</template>

<style lang="scss">
.BaSubDropdown {
  margin-bottom: $scale28;

  &__Heading {
    margin-bottom: $scale20;
  }
}
</style>
