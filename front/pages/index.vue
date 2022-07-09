<script setup lang="ts">
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';

const args = {
  type: LINK_CARD_TYPE_MAP.EXTERNAL,
  link: 'https://mujiota.com/',
};
</script>
<template>
  <h1>トップページ</h1>
  <BaLinkCard v-bind="args" />
</template>
