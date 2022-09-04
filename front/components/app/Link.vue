<script setup lang="ts">
import { isExternalUrl } from '@/utils/util';

interface LinkPropType {
  /**
   * 遷移先
   *
   * URLまたはVue RouterのRouteLocationオブジェクト。
   */
  to?: string;

  /**
   * 遷移先
   *
   * toのエイリアス。toが指定されている場合は無視される。
   */
  href?: string;
}

defineProps<LinkPropType>();
</script>

<template>
  <span class="AppLink">
    <template v-if="to">
      <NuxtLink v-if="isExternalUrl(to)" :to="to" target="_blank" rel="noopener">
        <slot />
      </NuxtLink>
      <NuxtLink v-else :to="to" rel="noopener">
        <slot />
      </NuxtLink>
    </template>
    <template v-else>
      <NuxtLink v-if="isExternalUrl(href)" :href="href" target="_blank" rel="noopener">
        <slot />
      </NuxtLink>
      <NuxtLink v-else :href="href" rel="noopener">
        <slot />
      </NuxtLink>
    </template>
  </span>
</template>

<style lang="scss">
.AppLink {
  a {
    color: $link-blue-color;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: $black-color;
    }
  }
}
</style>
