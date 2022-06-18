<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { SUPPLEMENT_TYPE, SupplementType } from './SupplementComposable';
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
      <span v-if="type === SUPPLEMENT_TYPE.WARNING" class="AppSupplement__Icon">
        <Icon icon="tabler:article" />
      </span>
      <span v-else class="AppSupplement__Icon">
        <Icon icon="tabler:alert-octagon" />
      </span>
      {{ title }}
    </div>
    <div class="AppSupplement__Description">
      <slot />
    </div>
  </div>
</template>
