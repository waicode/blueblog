<template>
  <div class="ContentProseTable">
    <table class="ContentProseTable__Table">
      <slot />
    </table>
  </div>
</template>

<style lang="scss">
.ContentProseTable {
  display: flex;
  justify-content: center;
  margin-bottom: $scale32;

  &__Table {
    width: auto;
    border-collapse: collapse;
    word-break: normal;
    display: block;
    overflow: auto;
  }
}
</style>
