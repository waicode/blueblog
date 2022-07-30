<template>
  <table class="ContentProseTable">
    <slot />
  </table>
</template>

<style lang="scss">
table.ContentProseTable {
  margin-bottom: $scale32;
  width: auto;
  border-collapse: collapse;
  word-break: normal;
  display: block;
  overflow: auto;
}
</style>
