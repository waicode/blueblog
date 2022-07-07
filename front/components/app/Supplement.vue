<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_WEIGHT, TEXT_COLOR } from '@/components/app/TextComposable';
import { SUPPLEMENT_TYPE, SupplementType } from '@/components/app/SupplementComposable';
import { bemx } from '@/utils/util';

interface SupplementPropType {
  /**
   * 補足説明の種別
   *
   * 通常（normal）か警告（warning）を指定する。
   */
  type: SupplementType;

  /**
   * タイトル
   */
  title?: string;
}

const props = defineProps<SupplementPropType>();

const className = computed(() => bemx('AppSupplement', { type: props.type }));
</script>

<template>
  <div :class="className">
    <div v-if="title" class="AppSupplement__Title">
      <AppText :color="TEXT_COLOR.DARK_BLACK" :weight="TEXT_WEIGHT.WEIGHT700">
        <span v-if="type === SUPPLEMENT_TYPE.WARNING" class="AppSupplement__Icon"
          ><Icon icon="tabler:alert-triangle" /></span
        ><span v-else class="AppSupplement__Icon"><Icon icon="tabler:article" /></span>{{ title }}</AppText
      >
    </div>
    <div class="AppSupplement__Description">
      <AppText :color="TEXT_COLOR.DARK_BLACK"><slot /></AppText>
    </div>
  </div>
</template>

<style lang="scss">
.AppSupplement {
  $supplement-info-bg-color: $pale-yellow-alpha-color;
  $supplement-warning-bg-color: $pale-red-alpha-color;
  $supplement-border-color: $gray-ed-color;

  padding: $scale16;
  margin: $scale24 0 $scale32;
  background: $supplement-info-bg-color;
  border: $border-width1 solid $supplement-border-color;
  border-radius: $border-radius4;

  &--type-warning {
    background: $supplement-warning-bg-color;
  }

  &__Title,
  &__Icon {
    margin-bottom: $scale4;

    svg {
      margin-right: $scale4;
      vertical-align: text-bottom;
    }
  }
}
</style>
