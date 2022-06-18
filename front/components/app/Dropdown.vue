<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { DropdownItem } from './DropdownComposable';

interface DropdownPropType {
  /**
   * 未選択時の表示ラベル
   */
  label: string;
  /**
   * ドロップダウンアイテムのリスト
   */
  items: DropdownItem[];
}

defineProps<DropdownPropType>();

const isActive = ref(false);

const toggle = () => (isActive.value = !isActive.value);
</script>

<template>
  <div class="AppDropdown">
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggle">
          <span>{{ label }}</span>
          <span class="icon is-small">
            <Icon aria-hidden="true" :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'" />
          </span>
        </button>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <NuxtLink v-for="item in items" :key="item.label" class="dropdown-item" :to="item.path"
            >{{ item.label }}({{ item.count }})</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// .AppDropdown {
// }
</style>
