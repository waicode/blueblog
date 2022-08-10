<template>
  <code class="ContentProseCodeInline"><slot /></code>
</template>
<style lang="scss">
$code-inline-bg-color: $blue-gray-alpha-007-color;
// TODO: テキストコンポーネント化
code.ContentProseCodeInline {
  font-family: $font-group-code;
  margin: 0 $scale4;
  padding: $scale2 $scale6;
  background: $code-inline-bg-color;
  font-size: 14px;
  border-radius: $border-radius4;
  vertical-align: $scale1;
}
</style>
