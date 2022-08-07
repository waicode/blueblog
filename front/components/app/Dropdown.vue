<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { DropdownItem } from '@/components/app/DropdownComposable';

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
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggle">
          <span
            ><AppText :type="TEXT_SIZE.BODY1">{{ label }}</AppText></span
          >
          <span class="icon is-small">
            <Icon aria-hidden="true" :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'" />
          </span>
        </button>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <NuxtLink v-for="item in items" :key="item.label" class="dropdown-item" :to="item.path" @click="toggle"
            ><AppText :type="TEXT_SIZE.BODY1">{{ item.label }}({{ item.count }})</AppText></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.AppDropdown {
  // TODO: Dropdown CSSのBEM化と変数化

  /* stylelint-disable selector-class-pattern */

  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.5em - 1px);
    padding-left: calc(0.75em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
    position: relative;
    vertical-align: top;
    user-select: none;

    background-color: white;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    .icon {
      height: 1.5em;
      width: 1.5em;
      margin-left: calc(-0.5em - 1px);
      margin-right: calc(-0.5em - 1px);

      align-items: center;
      display: inline-flex;
      justify-content: center;
      height: 1.5rem;
      width: 1.5rem;

      .is-small {
        height: 1rem;
        width: 1rem;
      }
    }

    &:hover {
      border-color: #b5b5b5;
      color: #363636;
    }
  }

  .dropdown {
    display: inline-flex;
    position: relative;
    vertical-align: top;
    width: 100%;

    .dropdown-trigger,
    .dropdown-menu,
    button {
      justify-content: space-between;
      width: 100%;
    }

    &.is-active {
      .dropdown-menu {
        display: block;
      }
    }

    .dropdown-menu {
      display: none;
      left: 0;
      min-width: 12rem;
      padding-top: 4px;
      position: absolute;
      top: 100%;
      z-index: 20;
    }

    .dropdown-content {
      background-color: white;
      border-radius: 4px;
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }

    .dropdown-item {
      color: #4a4a4a;
      display: block;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 0.375rem 1rem;
      position: relative;
    }

    a.dropdown-item {
      padding-right: 3rem;
      text-align: inherit;
      white-space: nowrap;
      width: 100%;

      &:hover {
        background-color: whitesmoke;
        color: #0a0a0a;
      }
    }
  }

  /* stylelint-enable selector-class-pattern */
}
</style>
