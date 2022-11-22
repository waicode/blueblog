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

  /**
   * rel属性
   *
   * hrefで指定しているページとの間でどのような関係があるか。
   * 未指定の場合は"noopener"となる。
   */
  rel?: string;

  /**
   * onclick属性
   *
   * リンククリック時に実行される関数を指定する。
   */
  onclick?: string;
}

defineProps<LinkPropType>();
</script>

<template>
  <span class="AppLink">
    <template v-if="to">
      <NuxtLink v-if="to && isExternalUrl(to)" :to="to" :rel="rel ?? 'noopener'" target="_blank" :onclick="onclick">
        <slot />
      </NuxtLink>
      <NuxtLink v-else :to="to" :rel="rel ?? 'noopener'" :external="true">
        <slot />
      </NuxtLink>
    </template>
    <template v-else>
      <NuxtLink
        v-if="href && isExternalUrl(href)"
        :href="href"
        :rel="rel ?? 'noopener'"
        target="_blank"
        :onclick="onclick"
      >
        <slot />
      </NuxtLink>
      <NuxtLink v-else :href="href" :rel="rel ?? 'noopener'" :external="true">
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
