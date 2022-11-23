<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextConst';
</script>

<template>
  <td class="ContentProseTd">
    <AppText :type="TEXT_SIZE.TABLE_DATA1"><slot /></AppText>
  </td>
</template>

<style lang="scss">
$table-td-border-color: $gray-cfd8dc-color;
$table-td-bg-color: $white-color;

td.ContentProseTd {
  padding: $scale8;
  border: 1px solid $table-td-border-color;
  background: $table-td-bg-color;
}
</style>
