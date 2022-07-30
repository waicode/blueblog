<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
</script>

<template>
  <th class="ContentProseTh">
    <AppText :type="TEXT_SIZE.TABLE_HEADER1"><slot /></AppText>
  </th>
</template>

<style lang="scss">
$table-th-border-color: $gray-cfd8dc-color;
$table-th-bg-color: $gray-eceff1-color;

th.ContentProseTh {
  padding: $scale8;
  border: 1px solid $table-th-border-color;
  background: $table-th-bg-color;
  text-align: center !important;
}
</style>
