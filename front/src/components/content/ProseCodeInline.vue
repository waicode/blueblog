<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextConst';
</script>
<template>
  <code class="ContentProseCodeInline"
    ><AppText :type="TEXT_SIZE.CODE1"><slot /></AppText
  ></code>
</template>
<style lang="scss">
$code-inline-bg-color: $blue-gray-alpha-007-color;

code.ContentProseCodeInline {
  margin: 0 $scale4;
  padding: $scale2 $scale6;
  background: $code-inline-bg-color;
  border-radius: $border-radius4;
  vertical-align: $scale1;
}
</style>
