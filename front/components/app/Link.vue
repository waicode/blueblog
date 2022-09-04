<script setup lang="ts">
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
    <NuxtLink :to="to" :href="href" :external="true">
      <slot />
    </NuxtLink>
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
