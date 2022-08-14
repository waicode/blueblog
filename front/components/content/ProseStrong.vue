<script setup lang="ts">
import { TEXT_WEIGHT } from '@/components/app/TextComposable';
</script>

<template>
  <strong>
    <AppText :weight="TEXT_WEIGHT.WEIGHT700"><slot /></AppText>
  </strong>
</template>
