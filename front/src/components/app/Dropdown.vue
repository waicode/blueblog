<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE } from '@/components/app/TextConst';
import { DropdownItem } from '@/components/app/DropdownConst';

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

const dropdownRef = ref<HTMLDivElement>();

const toggle = () => (isActive.value = !isActive.value);

const closeDropDown = (event: Event) => {
  if (event.target instanceof HTMLElement && !dropdownRef.value?.contains(event.target)) {
    isActive.value = false;
  }
};

if (process.client) {
  onMounted(() => {
    window.addEventListener('click', closeDropDown);
  });

  onUnmounted(() => {
    window.removeEventListener('click', closeDropDown);
  });
}
</script>

<template>
  <div ref="dropdownRef" class="AppDropdown">
    <div class="AppDropdown__DropdownTrigger">
      <button
        class="AppDropdown__DropdownButton"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        tabindex="0"
        @click="toggle"
      >
        <AppText :type="TEXT_SIZE.BODY1">{{ label }}</AppText>
        <span class="AppDropdown__DropdownButtonIcon">
          <AppText :type="TEXT_SIZE.BODY1"
            ><Icon aria-hidden="true" :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'"
          /></AppText>
        </span>
      </button>
    </div>
    <div class="AppDropdown__DropdownMenu" :class="{ 'AppDropdown__DropdownMenu--isActive': isActive }" role="menu">
      <div class="AppDropdown__DropdownContent">
        <AppLink
          v-for="item in items"
          :key="item.label"
          class="AppDropdown__DropdownItem"
          :to="item.path"
          @click="toggle"
          ><AppText :type="TEXT_SIZE.BODY1">{{ item.label }}({{ item.count }})</AppText></AppLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$dropdown-button-height: 40px;
$dropdown-button-hover-color: $gray-b5-color;
$dropdown-button-bg-color: $white-color;
$dropdown-button-border-color: $gray-db-color;
$dropdown-menu-min-width: 192px;
$dropdown-content-bg-color: $white-color;

.AppDropdown {
  position: relative;
  display: inline-flex;
  vertical-align: top;
  width: 100%;

  &__DropdownTrigger,
  &__DropdownMenu,
  &__DropdownButton {
    justify-content: space-between;
    width: 100%;
  }

  &__DropdownButton {
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: top;
    height: $dropdown-button-height;
    border: $border-width1 solid transparent;
    border-radius: $border-radius4;
    box-shadow: none;
    background-color: $dropdown-button-bg-color;
    border-color: $dropdown-button-border-color;
    padding: $scale12 $scale16;
    text-align: center;
    white-space: nowrap;
    appearance: none;
    user-select: none;
    cursor: pointer;

    &:hover {
      border-color: $dropdown-button-hover-color;
    }
  }

  &__DropdownButtonIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: $scale16;
    width: $scale16;
    margin-top: $scale2;
    margin-left: $scale-minus8;
    margin-right: $scale-minus8;
  }

  &__DropdownMenu {
    display: none;
    top: 100%;
    left: 0;
    min-width: $dropdown-menu-min-width;
    padding-top: $scale4;
    position: absolute;
    z-index: $z-index-20;

    &--isActive {
      display: block;
    }
  }

  &__DropdownContent {
    background-color: $dropdown-content-bg-color;
    border-radius: $border-radius4;
    box-shadow: 0 8px 16px 2px $gray-010-alpha-010-color, 0 0 0 1px $gray-010-alpha-002-color;
    padding-top: $scale8;
    padding-bottom: $scale8;
  }

  &__DropdownItem {
    display: block;
    position: relative;
    padding: $scale4 $scale48 $scale4 $scale16;
    text-align: inherit;
    white-space: nowrap;
    width: 100%;

    &:hover {
      background-color: $gray-f5-color;
    }
  }
}
</style>
