<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { DropdownItem } from "./DropdownComposable";

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
    <div class="dropdown">
      <div class="dropdown-trigger">
        <button
          class="button"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span class="AppDropdown__TriggerLabel">{{ label }}</span>
          <span>
            <Icon
              class="icon is-small"
              aria-hidden="true"
              :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'"
            />
          </span>
        </button>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <NuxtLink
            class="dropdown-item"
            v-for="item in items"
            :key="item.label"
            :to="item.path"
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
